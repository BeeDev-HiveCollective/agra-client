import "./ProfessionalAffiliations.css";
import LinkImage from "../../../assets/link_image.png";
import { Link } from "react-router";

function ProfessionalAffiliations () {
    return (
        <div>
            <h3 className="professional-affiliations-header resource_header">Professional Affiliations</h3>
            <div className="affiliation-resources">
                <div className="affiliation-resources-left">
                    <div className="aicpa resource">
                        <div className="left">
                            <h4 className="aicpa-header header">American Institute of CPAs</h4>
                            <h5 className="aicpa-content">AICPA & CIMA</h5>
                        </div>
                        <div className="right">
                            <Link to="https://www.aicpa-cima.com/" target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src={ LinkImage } alt="link-icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="vscpa resource">
                        <div className="left">
                            <h4 className="vscpa-header resource_header">Virginia Society of CPAs</h4>
                            <h5 className="vscpa-content">Virginia's State Society for CPAs.</h5>
                        </div>
                        <div className="right">
                            <Link to="https://www.vscpa.com/" target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src={ LinkImage } alt="link-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="affiliation-resources-right">
                    <div className="swam resource">
                        <div className="left">
                            <h4 className="swam-header resource_header">SWaM</h4>
                            <h5 className="swam-content">Small Business and Supplier Diversity.</h5>
                        </div>
                        <div className="right">
                            <Link to="https://sbsd.virginia.gov/" target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src={ LinkImage } alt="link-icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="naba resource">
                        <div className="left">
                            <h4 className="naba-header resource_header">NABA, Inc.</h4>
                            <h5 className="naba-content">National Association of Black Accountants, Inc.</h5>
                        </div>
                        <div className="right">
                            <Link to="https://nabainc.org/" target="_blank" rel="noopener noreferrer">
                                <img className="link-icon" src={ LinkImage } alt="link-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalAffiliations;