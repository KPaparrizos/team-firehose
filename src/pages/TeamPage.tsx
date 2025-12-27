import "../App.css";
import "../pages-css/TeamPage.css";
import Footer from "../components/Footer";
import Headshot from "../components/Headshot";
import helenHeadshot from "../assets/Helen Headshot_Cropped.jpg";
import lukeHeadshot from "../assets/Luke Headshot_Cropped (1).jpg";
import emmaKHeadshot from "../assets/Emma K Headshot_Cropped.jpg";
import alexHeadshot from "../assets/Alex headshot_red background.png";
import emmaMHeadshot from "../assets/Emma M Headshot_Cropped.jpg";
import kostasHeadshot from "../assets/Kostas Headshot_Cropped.jpg";
import ryderHeadshot from "../assets/Ryder Headshot_Cropped.jpg";
import ethanHeadshot from "../assets/Ethan Headshot_Cropped.jpg";
import savannahHeadshot from "../assets/Savannah Headshot_Cropped.jpg";
import peterHeadshot from "../assets/images (5).jpg";
import celinaHeadshot from "../assets/Celina McDonald.png";


function TeamPage() {
  return (
    <div className="team-page-container">
      <div>
        <div className="team-page-content">
          <div className="team-page-title">
            <h1>Meet the Team</h1>
            <div className="team-page-student-photos">
              <Headshot image = {helenHeadshot} alt = "Headshot of Helen Coale" name = {"Helen Coale"} caption = {"Team Clerk"}></Headshot>
              <Headshot image = {lukeHeadshot} alt = "Headshot of Luke Duncan" name = {"Luke Duncan"} caption = {"Public Liaison"}></Headshot>
              <Headshot image = {emmaKHeadshot} alt = "Headshot of Emma Kim" name = {"Emma Kim"} caption = {"Social Media Liaison"}></Headshot>
              <Headshot image = {alexHeadshot} alt = "Headshot of Alexander Moulton" name = {"Alexander Moulton"} caption = {"Library Liaison"}></Headshot>
              <Headshot image = {emmaMHeadshot} alt = "Headshot of Emma Mourlas" name = {"Emma Mourlas"} caption = {"Team Liaison"}></Headshot>
              <Headshot image = {kostasHeadshot} alt = "Headshot of Konstantinos Paparrizos" name = {"Konstantinos Paparrizos"} caption = {"Website Liaison"}></Headshot>
              <Headshot image = {ryderHeadshot} alt = "Headshot of Ryder Pusinsky" name = {"Ryder Pusinsky"} caption = {"Financial Liaison"}></Headshot>
              <Headshot image = {ethanHeadshot} alt = "Headshot of Ethan Safra" name = {"Ethan Safra"} caption = {"Omsbudsman"}></Headshot>
              <Headshot image = {savannahHeadshot} alt = "Headshot of Savannah Schweitzer" name = {"Savannah Schweitzer"} caption = {"Mentor Liaison"}></Headshot>
            </div>
            <hr></hr>
            <div className="team-page-faculty-photos">
              <Headshot image = {peterHeadshot} alt = "Headshot of Dr. Peter Sunderland" name = {"Dr. Peter Sunderland"} caption = {"Team Mentor"}></Headshot>
              <Headshot image = {celinaHeadshot} alt = "Headshot of Celina McDonald" name = {"Celina McDonald"} caption = {"Team Librarian"}></Headshot>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default TeamPage;
