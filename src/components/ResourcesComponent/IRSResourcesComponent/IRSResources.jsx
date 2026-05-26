import "./IRSResources.css";
import LinkImage from "../../../assets/link_image.png";
import { Link } from 'react-router-dom';

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
                            <Link to= "https://www.irs.gov/payments" target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src={ LinkImage } alt="link-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="IRS-resources-right">
                    <div className="refund resource">
                        <div className="left">
                            <h4 className="refund-header header">Where's My Refund?</h4>
                            <h5 className="refund-content">Track your federal tax refund.</h5>                        
                        </div>
                        <div className="right">
                            <Link to= "https://www.irs.gov/wheres-my-refund" target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src={ LinkImage } alt="link-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IRSResources;