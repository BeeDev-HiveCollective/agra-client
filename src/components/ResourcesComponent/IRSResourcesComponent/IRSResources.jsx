import "./IRSResources.css";
import LinkImage from "../../../assets/link_image.png";

function IRSResources () {
    return (
        <div>
            <h3 className="IRS-resources-header header">IRS Resources</h3>
            <div className="IRS-resources">
                <div className="IRS-resources-left">
                    <div className="IRS-portal resource">
                        <div className="left">
                            <h4 className="IRS-resources-header header">IRS Payment Portal</h4>
                            <h5 className="IRS-resources-content">Make payments directly to the IRS.</h5>                        
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                    <div className="refund resource">
                        <div className="left">
                            <h4 className="refund-header header">Where's My Refund?</h4>
                            <h5 className="refund-content">Track your federal tax refund.</h5>                        
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                </div>
                <div className="IRS-resources-right">
                    <div className="IRS-forms resource">
                        <div className="left">
                            <h4 className="IRS-forms-header header">IRS Forms & Publications</h4>
                            <h5 className="IRS-forms-content">Download current and prior year tax forms.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                    <div className="IRS-free-file resource">
                        <div className="left">
                            <h4 className="IRS-free-file-header header">IRS Free File</h4>
                            <h5 className="IRS-free-file-content">Free tax filing options for eligible tax payers.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IRSResources;