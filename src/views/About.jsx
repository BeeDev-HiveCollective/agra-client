import Header from "../components/AboutComponents/AboutHeader/Header";
import History from "../components/AboutComponents/History/History";
import OurMission from "../components/AboutComponents/OurMission/OurMission";
// import OurTeam from "../components/AboutComponents/OurTeam/OurTeam";
import OurTeam from "../components/AboutComponents/OurTeam/OurTeam_B";
// import OurTeam from "../components/AboutComponents/OurTeam/OurTeam_C";
import CoreValues from "../components/AboutComponents/CoreValues/CoreValues";

function About() {
  return (
    <div>
      <Header />
      <History />
      <OurMission />
      <OurTeam />
      <CoreValues />
    </div>
  );
}

export default About;
