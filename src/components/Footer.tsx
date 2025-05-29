import gemstoneLogo from "../assets/g_honors_college.png"
import honorsLogo from "../assets/honors_logo.png"

function Footer() {
    return(
        <div style={{ display: "flex", justifyContent: "space-evenly", paddingBottom: "1rem", bottom: 0}}> {/* Optional: Added paddingBottom if flameOverlay is last element */}
            <a href="https://gemstone.umd.edu/">
                <img style={{ width: "7vw", height: "auto" }} src={gemstoneLogo} alt="Gemstone logo"></img>
            </a>
            <p style={{ color: "gray", marginTop: "6vw" }}>Made with ❤️ at UMD</p>
            <a style={{ marginTop: "1.25vw" }} href="http://www.honors.umd.edu">
                <img style={{ width: "7vw", height: "auto" }} src={honorsLogo} alt="Honors logo"></img>
            </a>
        </div>
    )
}

export default Footer;