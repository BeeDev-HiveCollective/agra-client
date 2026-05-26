import "./FinancialServices.css";
import Divider from "../../ReusableComponents/DividerComponent/Divider";

function FinancialServices () {
    return (
        <div className="financial-services">
            <h3 className="financial-services-header">Financial Services</h3>
            <Divider />
            <div className="services">
                <div className="financial-statements-services">
                    <h4 className="financial-statements-header">Financial Statements</h4>
                    <h5 className="financial-statements-content">We provide accurate reporting that helps you understand your financial position and make informed decisions.</h5>
                    <div className="financial-statements-bullets">
                        <ul className="bullets-left">
                            <li>Cash flow analysis</li>
                            <li>Management reports</li>
                            <li>Financial statements (preparations, compilations, reviews)</li>
                        </ul>
                        <ul className="bullets-right">
                            <li>Budget preparation</li>
                            <li>Financial forecasting</li>
                        </ul>
                    </div>
                </div>
                <div className="audit-services">
                    <h4 className="audit-header">Audits & Attest Services</h4>
                    <h5 className="audit-content">Professional audit services to ensure compliance and financial accuracy. Our thorough approach gives stakeholders confidence in your financial reporting.</h5>
                    <div className="audit-bullets">
                        <ul className="bullets-left">
                            <li>Financial statement audits</li>
                            <li>Agreed-upon procedures</li>
                        </ul>
                        <ul className="bullets-right">
                            <li>Non-profit audits</li>
                        </ul>
                    </div>
                </div>
                <div className="accounting-services">
                    <h4 className="accounting-header">Bookkeeping & Accounting</h4>
                    <h5 className="accounting-content">Deliver continuous accounting support to ensure financial records are accurate, organized, and compliant with tax and financial statement standards. From daily transactions to monthly reconciliations, we handle the details so you can focus on your business.</h5>
                    <div className="accounting-bullets">
                        <ul className="bullets-left">
                            <li>Bank reconciliation</li>
                            <li>Monthly bookkeeping</li>
                            <li>Accounts payable/receivable</li>
                            <li>Personal property tax preparation assistance</li>
                        </ul>
                        <ul className="bullets-right">
                            <li>Payroll processing</li>
                            <li>Quickbooks setup and training</li>
                            <li>Business licenses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialServices;