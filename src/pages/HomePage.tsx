import backgroundImage from '../assets/firemanfirefighter-training-firefighters-using-water-260nw-2505564303.png'
import nozzleImage from '../assets/nozzle.png'
import '../App.css'
import Footer from '../components/Footer'

function HomePage() {
    return(
        <div style={{ backgroundColor: "#000000", width: "100%", color: "white", display: "flex", flexFlow: "column", minHeight: "88vh", flexGrow: "1", justifyContent: "space-between" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center"}}>
                <img style={{ width: "100%"}} src={backgroundImage} alt="Firefighters putting out a fire using firehoses"></img>
                <div style={{ position: "absolute", top: "10%" }}>
                    <h1 style={{ fontSize: "7vw", marginBottom: "1rem" }}>Team FIREHOSE</h1>
                    <h1 style={{ fontSize: "4vw", marginTop: "0" }}>Gemstone Class of 2028</h1>
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", marginTop: "1.5rem", marginBottom: "1rem" }}>
                <p style={{ fontFamily: "inter", fontSize: "1.75vw", fontWeight: "700", width: "55%" }}>
                    Team FIREHOSE is a Class of 2028 undergraduate research team within the University of Maryland, College Park
                    Gemstone Honors Program. FIREHOSE aims to design a new firehose nozzle design that minimizes reaction forces
                    and reduces harm to firefighters.
                </p>
            </div>

            <div style={{ position: "relative", display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", marginTop: "0", marginBottom: "5rem" }}>
                <img style={{ width: "80%" }} src={nozzleImage} alt="Firehose nozzle"></img>
                <div style={{ position: "absolute", top: "30%", width: "100%"}}>
                    <h1 style={{ fontSize: "3vw", marginBottom: "1rem" }}>Research Question</h1>
                    <p style={{ fontFamily: "inter", fontSize: "2vw", fontWeight: "700", margin: "0 auto", width:"55%"}}>
                        How can we improve firefighting hose-nozzle systems to effectively reduce the associated kickback forces?
                    </p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default HomePage;
