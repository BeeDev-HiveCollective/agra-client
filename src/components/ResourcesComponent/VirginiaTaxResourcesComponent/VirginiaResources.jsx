import "./VirginiaResources.css";
import LinkImage from "../../../assets/link_image.png";

function VirginiaResources () {
    return (
        <div>
            <h3 className="virginia-resources-header header">Virginia Tax Resources</h3>
            <div className="virginia-resources">
                <div className="virginia-resources-left">
                    <div className="virginia-tax resource">
                        <div className="left">
                            <h4 className="virginia-tax-header header">Virginia Tax</h4>
                            <h5 className="virginia-tax-content">Virginia Department of Taxation Homepage.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                    <div className="refund resource">
                        <div className="left">
                            <h4 className="refund-header header">Where's My Refund (VA)?</h4>
                            <h5 className="refund-content">Check your Virginia State refund status.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                </div>
                <div className="virgina-resources-right">
                    <div className="virginia-forms resource">
                        <div className="left">
                            <h4 className="virginia-forms-header header">Virginia Tax Forms</h4>
                            <h5 className="virginia-forms-content">Download Virginia State tax forms.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                    <div className="business-registration resource">
                        <div className="left">
                            <h4 className="business-registration-header header">Virginia Business Registration</h4>
                            <h5 className="business-registration-content">Register your business with Virginia.</h5>
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

export default VirginiaResources;