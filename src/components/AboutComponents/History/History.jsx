import Divider from "../../ReusableComponents/DividerComponent/Divider";
import "./History.css";

function History () {
    return (
        <div>
            <h3 className="history-header">History</h3>
            <h5 className="history-content">
                A. G. Reese & Associates P.C is a full service Certiﬁed Public Accounting ﬁrm that has been delivering exceptional, reliable, and timely professional services to individuals, businesses, and non-proﬁt organizations, all at a fair and transparent fee for over 40 years. Alan G. Reese, organized A. G. Reese & Associates, P.C., in 1983 after working for Price Waterhouse & Coopers (a big four accounting ﬁrm). His Vision and leadership have resulted in the development of a multi-talented professional staff with unparalleled dedication to the delivery of the highest quality of service available.
            </h5>
            <br />
            <h5 className="history-content">
                With decades of experience, we are SWaM certified and actively involved in leading professional organizations, including the AICPA, Virginia Society of CPAs (Richmond Chapter), and the National Association of Black Accountants.
            </h5>
            <Divider />
        </div>
    )
}

export default History;