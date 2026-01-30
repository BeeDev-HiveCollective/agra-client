import "./AboutOurFirm.css";
import Divider from "../../ReusableComponents/Divider";

function AboutOurFirm () {
    return (
        <div>
            <h3 className="our-firm-header">About Our Firm</h3>
            <h5 className="our-firm-content">Founded in Richmond, Virginia, A.G. Reese & Associates, P.C. has been serving the local community with integrity and expertise. As a small, dedicated firm, we pride ourselves on building long-term relationship swith our clients and delivering accurate, reliable accounting services.</h5>
            <h5 className="our-firm-content">We are proud to be SWaM certified and active members of both the AICPA and the Virginia Society of CPAs, demonstrating our committment to professional excellence and community involvement.</h5>
            <Divider />
        </div>
    )
}

export default AboutOurFirm;