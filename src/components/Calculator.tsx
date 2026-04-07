import { useState } from "react";
import "../components-css/Calculator.css";

const LBF_TO_N = 4.44822;
const FORMULA_REQUIREMENTS: Record<string, string[]> = {
  "Experimental (Actual)": ["rodLength", "wheelRadius", "kickbackMassChange"],
  "NFPA Equation": ["pressure", "nozzleDiameter"],
  "Chin et al. Equation (7)": ["flowRate", "nozzleDiameter"],
  "Chin et al. Equation (10)": ["pressure", "hoseDiameter", "nozzleDiameter"],
  "Chin et al. Equation (11)": ["flowRate", "pressure", "hoseDiameter"],
};

function Calculator() {
  const [selectedFormulas, setSelectedFormulas] = useState<string[]>(["Experimental (Actual)"]);
  const [flowMethod, setFlowMethod] = useState("direct");
  const [inputs, setInputs] = useState<any>({
    pressure: { value: "", unit: "psi" },
    flowRate: { value: "", unit: "lpm" },
    flowMassChange: { value: "", unit: "g" },
    flowTime: { value: "", unit: "sec" },
    nozzleDiameter: { value: "", unit: "cm" },
    hoseDiameter: { value: "", unit: "cm" },
    kickbackMassChange: { value: "", unit: "g" },
    wheelRadius: { value: "", unit: "cm" },
    rodLength: { value: "", unit: "cm" },
  });
  const [forceUnit, setForceUnit] = useState<any>({ unit: "N" }
  );
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

    if (selectedFormulas.length === 0) {
      setError("Please select at least one formula.");
      return;
    }

    // TODO: Find way to do this without needing multiple if statements, maybe dictionary mapping to strings
    if (isFieldRequired("pressure") && (!inputs.pressure.value || isNaN(Number(inputs.nozzleDiameter.value)))) {
      setError("Please enter a valid pressure");
      return;
    }

    if (isFieldRequired("flowRate")) {
      if (flowMethod === "direct") {
        if (!inputs.flowRate.value || isNaN(Number(inputs.flowRate.value))) {
          setError("Please enter a valid flow rate.");
          return;
        }
      } else {
        if (!inputs.flowMassChange.value || isNaN(Number(inputs.flowMassChange.value)) || 
            !inputs.flowTime.value || isNaN(Number(inputs.flowTime.value))) {
          setError("Please enter valid mass and time values.");
          return;
        }
      }
    }

    if (isFieldRequired("nozzleDiameter") && (!inputs.nozzleDiameter.value || isNaN(Number(inputs.nozzleDiameter.value)))) {
      setError("Please enter a valid nozzle diameter.");
      return;
    }

    if (isFieldRequired("hoseDiameter") && (!inputs.hoseDiameter.value || isNaN(Number(inputs.hoseDiameter.value)))) {
      setError("Please enter a valid hose diameter.");
      return;
    }
    
    if (isFieldRequired("kickbackMassChange") && (!inputs.kickbackMassChange.value || isNaN(Number(inputs.kickbackMassChange.value)))) {
        setError("Please enter a valid mass change due to kickback force.");
        return;
    }

    if (isFieldRequired("wheelRadius") && (!inputs.wheelRadius.value || isNaN(Number(inputs.wheelRadius.value)))) {
        setError("Please enter a valid wheel radius.");
        return;
    }

    if (isFieldRequired("rodLength") && (!inputs.rodLength.value || isNaN(Number(inputs.rodLength.value)))) {
        setError("Please enter a valid rod length.");
        return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://firehose-backend.vercel.app/", {
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
        
        {isFieldRequired("pressure") && (
          <div className="calculator-row">
            <label>Nozzle Pressure</label>
            <input type="number" placeholder="0.00" value={inputs.pressure.value} onChange={(e) => handleInputChange("pressure", "value", e.target.value)} />
            <select value={inputs.pressure.unit} onChange={(e) => handleInputChange("pressure", "unit", e.target.value)}>
              <option value="psi">psi</option>
              <option value="bar">bar</option>
            </select>
          </div>
        )}

        {isFieldRequired("flowRate") && (
          <div className="flow-rate-section">
            <div className="calculator-row">
              <label>Flow Rate Method</label>
              <select className="full-width-select" value={flowMethod} onChange={(e) => setFlowMethod(e.target.value)}>
                <option value="direct">Direct Flow Rate Entry</option>
                <option value="mass-time">Calculate via Mass/Time</option>
              </select>
            </div>
            {flowMethod === "direct" ? (
              <div className="calculator-row">
                <label>Flow Rate</label>
                <input type="number" placeholder="0.00" value={inputs.flowRate.value} onChange={(e) => handleInputChange("flowRate", "value", e.target.value)} />
                <select value={inputs.flowRate.unit} onChange={(e) => handleInputChange("flowRate", "unit", e.target.value)}>
                  <option value="lpm">lpm</option>
                  <option value="lps">lps</option>
                  <option value="gpm">gpm</option>
                </select>
              </div>
            ) : (
              <>
                <div className="calculator-row">
                  <label>Flow Mass Collected</label>
                  {/* Changed "mass" to "flowMassChange" */}
                  <input type="number" placeholder="0.00" value={inputs.flowMassChange.value} onChange={(e) => handleInputChange("flowMassChange", "value", e.target.value)} />
                  <select value={inputs.flowMassChange.unit} onChange={(e) => handleInputChange("flowMassChange", "unit", e.target.value)}>
                    <option value="g">g</option>
                    <option value="lb">lbs</option>
                  </select>
                </div>
                <div className="calculator-row">
                  <label>Flow Collection Time</label>
                  {/* Changed "time" to "flowTime" */}
                  <input type="number" placeholder="0.00" value={inputs.flowTime.value} onChange={(e) => handleInputChange("flowTime", "value", e.target.value)} />
                  <select value={inputs.flowTime.unit} onChange={(e) => handleInputChange("flowTime", "unit", e.target.value)}>
                    <option value="sec">sec</option>
                  </select>
                </div>
              </>
            )}
          </div>
        )}

        {isFieldRequired("nozzleDiameter") && (
          <div className="calculator-row">
            <label>Nozzle Diameter</label>
            <input type="number" placeholder="0.00" value={inputs.nozzleDiameter.value} onChange={(e) => handleInputChange("nozzleDiameter", "value", e.target.value)} />
            <select value={inputs.nozzleDiameter.unit} onChange={(e) => handleInputChange("nozzleDiameter", "unit", e.target.value)}>
              <option value="cm">cm</option>
              <option value="in">in</option>
            </select>
          </div>
        )}

        {isFieldRequired("hoseDiameter") && (
          <div className="calculator-row">
            <label>Hose Diameter</label>
            <input type="number" placeholder="0.00" value={inputs.hoseDiameter.value} onChange={(e) => handleInputChange("hoseDiameter", "value", e.target.value)} />
            <select value={inputs.hoseDiameter.unit} onChange={(e) => handleInputChange("hoseDiameter", "unit", e.target.value)}>
              <option value="cm">cm</option>
              <option value="in">in</option>
            </select>
          </div>
        )}

        {isFieldRequired("kickbackMassChange") && (
          <div className="calculator-row">
            <label>Scale Mass Change</label>
            <input type="number" placeholder="0.00" value={inputs.kickbackMassChange.value} onChange={(e) => handleInputChange("kickbackMassChange", "value", e.target.value)} />
            <select value={inputs.kickbackMassChange.unit} onChange={(e) => handleInputChange("kickbackMassChange", "unit", e.target.value)}>
              <option value="g">g</option>
              <option value="lb">lbs</option>
            </select>
          </div>
        )}

        {isFieldRequired("wheelRadius") && (
          <div className="calculator-row">
            <label>Wheel Radius</label>
            <input type="number" placeholder="0.00" value={inputs.wheelRadius.value} onChange={(e) => handleInputChange("wheelRadius", "value", e.target.value)} />
            <select value={inputs.wheelRadius.unit} onChange={(e) => handleInputChange("wheelRadius", "unit", e.target.value)}>
              <option value="cm">cm</option>
              <option value="in">in</option>
            </select>
          </div>
        )}

        {isFieldRequired("rodLength") && (
          <div className="calculator-row">
            <label>Rod Length</label>
            <input type="number" placeholder="0.00" value={inputs.rodLength.value} onChange={(e) => handleInputChange("rodLength", "value", e.target.value)} />
            <select value={inputs.rodLength.unit} onChange={(e) => handleInputChange("rodLength", "unit", e.target.value)}>
              <option value="cm">cm</option>
              <option value="in">in</option>
            </select>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        <div className="calculator-row">
            <button type="submit" className="calc-button" disabled={loading}>
          {loading ? "Calculating..." : "Calculate Kickback Force"}
        </button>
            <select value={forceUnit.unit} onChange={(e) => setForceUnit({ unit: e.target.value })}>
              <option value="N">N</option>
              <option value="lbf">lbf</option>
            </select>
          </div>
      </form>

      {/* Results Display */}
      {results && (
        <div className="results-container">
          {Object.entries(results).map(([name, rawValue]) => {
            // If the backend returned N but user wants lbf, or vice versa, convert here
            // Assuming your backend currently returns N (as per your main.py logic)
            const displayValue = forceUnit.unit === "N" 
              ? rawValue * LBF_TO_N 
              : rawValue;

            return (
              <div key={name} className="calculator-row result-row">
                <label>{name}</label>
                <div className="result-value">
                  {displayValue.toFixed(5)} {forceUnit.unit}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Calculator;