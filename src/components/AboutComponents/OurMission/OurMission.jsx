import "./OurMission.css";
import Divider from "../../ReusableComponents/DividerComponent/Divider";

function OurMission () {
    return (
        <div>
            <div className="our-mission">
                <h4 className="our-mission-header">Our Mission</h4>
                <h5 className="our-mission-content">
                    We are committed to building long-term relationships grounded in trust, integrity, and personalized attention, helping our clients achieve clarity, compliance, and conﬁdence in every ﬁnancial decision.
                </h5>
                <h5 className="our-mission-content">
                    At our ﬁrm, you are more than a client, you are family. Your goals matter to us, and we are here to support your success every step of the way.
                </h5>
            </div>
            <Divider />
        </div>
    )
}

export default OurMission;