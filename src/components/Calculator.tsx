import { useState } from "react";
import "../components-css/Calculator.css";

const FORMULA_REQUIREMENTS: Record<string, string[]> = {
  "Actual": [],
  "Chin et al.": ["nozzleDiameter"],
  "NFPA": ["hoseLength"],
};

function Calculator() {
  const [selectedFormulas, setSelectedFormulas] = useState<string[]>(["Actual"]);
  const [flowMethod, setFlowMethod] = useState("direct");
  const [inputs, setInputs] = useState<any>({
    pressure: { value: "", unit: "psi" },
    flowRate: { value: "", unit: "gpm" },
    mass: { value: "", unit: "lb" },
    time: { value: "", unit: "sec" },
    nozzleDiameter: { value: "", unit: "in" },
    hoseLength: { value: "", unit: "ft" },
  });
  const [error, setError] = useState("");
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState(false);

  const isFieldRequired = (fieldName: string) => {
    return selectedFormulas.some(f => FORMULA_REQUIREMENTS[f].includes(fieldName));
  };

  const toggleFormula = (formula: string) => {
    setError("");
    setSelectedFormulas(prev => 
      prev.includes(formula) ? prev.filter(f => f !== formula) : [...prev, formula]
    );
  };

  const handleInputChange = (variable: string, field: "value" | "unit", val: string) => {
    setError("");
    setInputs((prev: any) => ({
      ...prev,
      [variable]: { ...prev[variable], [field]: val },
    }));
  };

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResults(null); // Clear previous results on new calculation

    // 1. Validate Formulas
    if (selectedFormulas.length === 0) {
      setError("Please select at least one formula.");
      return;
    }

    // 2. Validate Pressure
    if (!inputs.pressure.value || isNaN(Number(inputs.pressure.value))) {
      setError("Please enter a valid Nozzle Pressure.");
      return;
    }

    // 3. Validate Flow Method Inputs
    if (flowMethod === "direct") {
      if (!inputs.flowRate.value || isNaN(Number(inputs.flowRate.value))) {
        setError("Please enter a valid Flow Rate.");
        return;
      }
    } else {
      if (!inputs.mass.value || isNaN(Number(inputs.mass.value)) || 
          !inputs.time.value || isNaN(Number(inputs.time.value))) {
        setError("Please enter valid Mass and Time values.");
        return;
      }
    }

    // 4. Validate Dynamic Formula Inputs
    if (isFieldRequired("nozzleDiameter") && (!inputs.nozzleDiameter.value || isNaN(Number(inputs.nozzleDiameter.value)))) {
      setError("Please enter a valid Nozzle Diameter.");
      return;
    }
    
    if (isFieldRequired("hoseLength") && (!inputs.hoseLength.value || isNaN(Number(inputs.hoseLength.value)))) {
        setError("Please enter a valid Hose Length.");
        return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/calculate-force", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...inputs, flowMethod, selectedFormulas }),
      });
      
      if (!response.ok) throw new Error("Server error");
      
      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError("Backend connection error. Please ensure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator-container">
      <form onSubmit={handleCalculate} className="calculator-form">
        
        {/* Formula Selection Row */}
        <div className="calculator-row formula-row">
          <label>Select Formula(s)</label>
          <div className="formula-options">
            {Object.keys(FORMULA_REQUIREMENTS).map(f => (
              <label key={f} className="custom-checkbox">
                <input 
                  type="checkbox" 
                  checked={selectedFormulas.includes(f)} 
                  onChange={() => toggleFormula(f)}
                />
                <span className="checkmark"></span>
                {f}
              </label>
            ))}
          </div>
        </div>

        {/* Standard Input Row */}
        <div className="calculator-row">
          <label>Nozzle Pressure</label>
          <input 
            type="number" 
            placeholder="0.00"
            value={inputs.pressure.value} 
            onChange={(e) => handleInputChange("pressure", "value", e.target.value)} 
          />
          <select value={inputs.pressure.unit} onChange={(e) => handleInputChange("pressure", "unit", e.target.value)}>
            <option value="psi">PSI</option>
            <option value="bar">Bar</option>
          </select>
        </div>

        {/* Flow Method Toggle Row */}
        <div className="calculator-row">
          <label>Flow Rate Method</label>
          <select className="full-width-select" value={flowMethod} onChange={(e) => setFlowMethod(e.target.value)}>
            <option value="direct">Direct Flow Rate Entry</option>
            <option value="mass-time">Calculate via Mass/Time</option>
          </select>
        </div>

        {/* Conditional Flow Inputs */}
        {flowMethod === "direct" ? (
          <div className="calculator-row">
            <label>Flow Rate</label>
            <input type="number" placeholder="0.00" value={inputs.flowRate.value} onChange={(e) => handleInputChange("flowRate", "value", e.target.value)} />
            <select value={inputs.flowRate.unit} onChange={(e) => handleInputChange("flowRate", "unit", e.target.value)}>
              <option value="gpm">GPM</option>
              <option value="lpm">LPM</option>
            </select>
          </div>
        ) : (
          <>
            <div className="calculator-row">
              <label>Mass Collected</label>
              <input type="number" placeholder="0.00" value={inputs.mass.value} onChange={(e) => handleInputChange("mass", "value", e.target.value)} />
              <select value={inputs.mass.unit} onChange={(e) => handleInputChange("mass", "unit", e.target.value)}>
                <option value="lb">lbs</option>
                <option value="kg">kg</option>
              </select>
            </div>
            <div className="calculator-row">
              <label>Collection Time</label>
              <input type="number" placeholder="0.00" value={inputs.time.value} onChange={(e) => handleInputChange("time", "value", e.target.value)} />
              <select value={inputs.time.unit} onChange={(e) => handleInputChange("time", "unit", e.target.value)}>
                <option value="sec">sec</option>
                <option value="min">min</option>
              </select>
            </div>
          </>
        )}

        {/* Dynamic Extra Variables */}
        {isFieldRequired("nozzleDiameter") && (
          <div className="calculator-row">
            <label>Nozzle Diameter</label>
            <input type="number" placeholder="0.00" value={inputs.nozzleDiameter.value} onChange={(e) => handleInputChange("nozzleDiameter", "value", e.target.value)} />
            <select value={inputs.nozzleDiameter.unit} onChange={(e) => handleInputChange("nozzleDiameter", "unit", e.target.value)}>
              <option value="in">Inches</option>
              <option value="mm">mm</option>
            </select>
          </div>
        )}
        
        {isFieldRequired("hoseLength") && (
          <div className="calculator-row">
            <label>Hose Length</label>
            <input type="number" placeholder="0.00" value={inputs.hoseLength.value} onChange={(e) => handleInputChange("hoseLength", "value", e.target.value)} />
            <select value={inputs.hoseLength.unit} onChange={(e) => handleInputChange("hoseLength", "unit", e.target.value)}>
              <option value="ft">Feet</option>
              <option value="m">Meters</option>
            </select>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="calc-button" disabled={loading}>
          {loading ? "Calculating..." : "Calculate Kickback Force"}
        </button>
      </form>

      {/* Results Display */}
      {results && (
        <div className="results-container">
          {Object.entries(results).map(([name, val]) => (
            <div key={name} className="calculator-row result-row">
              <label>{name}</label>
              <div className="result-value">{val.toFixed(2)} lbs</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calculator;