import '../App.css'
import Footer from '../components/Footer';

function ResearchPage() {
    return(
        <div style={{ backgroundColor: "#000000", width: "100%", color: "white", display: "flex", flexFlow: "column", minHeight: "88vh", flexGrow: "1", justifyContent: "space-between" }}>
            <div>
                <h1>Research!</h1>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default ResearchPage;