import "./AdvisoryServices.css";
import Divider from "../../ReusableComponents/DividerComponent/Divider";

function AdvisoryServices () {
    return (
        <div>
            <h3 className="advisory-service-header">Advisory Services</h3>
            <h5 className="advisory-service-content">Strategic guidance for business planning and financial decisions.</h5>
            <Divider />
            <div className="advisory-services">
                <h4 className="advisory-header">Consultations</h4>
                <h5 className="advisory-content">Skilled guidance on tax planning, business structure, and financial strategy. Whether you're starting a business or planning for the future, we provide the insights you need to succeed.</h5>
                <div className="advisory-bullets">
                    <ul className="advisory-bullets-left">
                        <li>Merger and acquisition support</li>
                        <li>Financial planning</li>
                        <li>Succession planning</li>
                    </ul>
                    <ul className="advisory-bullets-right">
                        <li>Business formation advice</li>
                        <li>Process improvement</li>
                        <li>Technology consulting</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdvisoryServices;