import "./TaxServices.css";
import Divider from "../../ReusableComponents/DividerComponent/Divider";

function TaxServices () {
    return (
        <div>
            <h3 className="tax-services-header">Tax Services</h3>
            <h5 className="tax-services-content">Comprehensive tax preparation and planning for individuals and businesses.</h5>
            <Divider />
            <div className="services">
                <div className="individual-services">
                    <h4 className="individual-services-header">Individual Tax Preparation</h4>
                    <h5 className="individual-services-content">Specialized preparation of personal tax returns with accuracy and attention to detail. We ensure you maximize deductions and credits while staying fully compliant with current tax laws.</h5>
                    <div className="individual-services-bullets">
                        <ul className="individual-services-bullets-left">
                            <li>Individual tax returns (Form 1040)</li>
                            <li>Multi-state and local tax returns</li>
                            <li>Tax planning and strategy</li>
                        </ul>
                        <ul className="individual-services-bullets-right">
                            <li>Amended returns</li>
                            <li>IRS representation</li>
                        </ul>
                    </div>
                </div>
                <div className="business-services">
                    <h4 className="business-services-header">Business Tax Returns</h4>
                    <h5 className="business-services-content">Complete tax services for corporations, partnerships, LLCs, and small businesses.</h5>
                    <div className="business-services-bullets">
                        <ul className="individual-services-bullets-left">
                            <li>Business tax planning</li>
                            <li>Business tax returns (Forms 1120, 1120S, 1065, 1041, 990)</li>
                        </ul>
                        <ul className="individual-services-bullets-right">
                            <li>Non-profit & estates/trust</li>
                            <li>Quarterly estimated tax preparation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaxServices;