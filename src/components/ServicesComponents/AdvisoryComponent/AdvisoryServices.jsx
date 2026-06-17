import "./AdvisoryServices.css";
import Divider from "../../ReusableComponents/DividerComponent/Divider";

function AdvisoryServices () {
    return (
        <div>
            <Divider />
            <div className="advisory-services">
                <h4 className="advisory-header">Advisory Services</h4>
                <h5 className="advisory-content">Trusted guidance on tax planning, business structure, and financial strategy. Whether you're starting a business or planning for the future, we provide the insights you need to succeed.</h5>
                <div className="advisory-bullets">
                    <ul className="advisory-bullets-left">
                        <li>Fractional accounting</li>
                        <li>Financial planning</li>
                        <li>Succession planning</li>
                    </ul>
                    <ul className="advisory-bullets-right">
                        <li>Business formation advice</li>
                        <li>Process improvement</li>
                        <li>Technology consulting</li>
                    </ul>
                </div>
                <p className="advisory-notary">
                    A. G. Reese & Associates, P.C. also offers notary public services for your convenience.
                </p>
            </div>
        </div>
    )
}

export default AdvisoryServices;