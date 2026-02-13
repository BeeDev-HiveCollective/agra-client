import "./TaxServices.css";
import Divider from "../../ReusableComponents/Divider";

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
                            <li>Business tax returns (1120, 11205, 1065)</li>
                            <li>State and local tax returns</li>
                        </ul>
                        <ul className="individual-services-bullets-right">
                            <li>Tax planning and strategy</li>
                            <li>Amended returns</li>
                            <li>IRS representation</li>
                        </ul>
                    </div>
                </div>
                <div className="business-services">
                    <h4 className="business-services-header">Business Tax Returns</h4>
                    <h5 className="business-services-content">Complete tax services for corporations, partnerships, LLCs, and small businesses. We handle all aspects of business tax preparation, planning and filing to help maximize your tax liability.</h5>
                    <div className="business-services-bullets">
                        <ul className="individual-services-bullets-left">
                            <li>Corporate tax planning</li>
                            <li>Partnerships and LLC taxation</li>
                            <li>Quarterly estimated tax preparation</li>
                        </ul>
                        <ul className="individual-services-bullets-right">
                            <li>Sales tax compliance</li>
                            <li>Payroll tax services</li>
                            <li>Tax credit identification</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaxServices;