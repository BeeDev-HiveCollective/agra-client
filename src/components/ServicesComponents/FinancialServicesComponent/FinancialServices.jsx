import "./FinancialServices.css";
import Divider from "../../ReusableComponents/Divider";

function FinancialServices () {
    return (
        <div className="financial-services">
            <h3 className="financial-services-header">Financial Services</h3>
            <h5 className="financial-services-content">Accurate financial reporting and ongoing accounting serices.</h5>
            <Divider />
            <div className="services">
                <div className="financial-statements-services">
                    <h4 className="financial-statements-header">Financial Statements</h4>
                    <h5 className="financial-statements-content">Preparation and review of comprehensive financial statements for your business. We provide accurate reporting that helps you understand your financial position and make informed decisions.</h5>
                    <div className="financial-statements-bullets">
                        <ul className="bullets-left">
                            <li>Compilation services</li>
                            <li>Financial statement preparation</li>
                            <li>Management reports</li>
                        </ul>
                        <ul className="bullets-right">
                            <li>Cash flow analysis</li>
                            <li>Budget preparation</li>
                            <li>Financial forecasting</li>
                        </ul>
                    </div>
                </div>
                <div className="audit-services">
                    <h4 className="audit-header">Audits</h4>
                    <h5 className="audit-content">Professional audit services to ensure compliance and financial accuracy. Our thorough approach gives stakeholders confidence in your financial reporting.</h5>
                    <div className="audit-bullets">
                        <ul className="bullets-left">
                            <li>Financial statement audits</li>
                            <li>Review engagements</li>
                            <li>Agreed-upon procedures</li>
                        </ul>
                        <ul className="bullets-right">
                            <li>Internal control assesments</li>
                            <li>Compliance audits</li>
                            <li>Non-profit audits</li>
                        </ul>
                    </div>
                </div>
                <div className="accounting-services">
                    <h4 className="accounting-header">Bookkeeping & Accounting</h4>
                    <h5 className="accounting-content">Ongoing accounting support to keep your financial records organized and current. From daily transactions to monthly reconciliations, we handle the details so you can focus on your business.</h5>
                    <div className="accounting-bullets">
                        <ul className="bullets-left">
                            <li>Monthly bookkeeping</li>
                            <li>Accounts payable/receivable</li>
                            <li>Bank reconciliation</li>
                        </ul>
                        <ul className="bullets-right">
                            <li>Payroll processing</li>
                            <li>Quickbooks setup and training</li>
                            <li>Financial reporting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialServices;