import "./ProfessionalAffiliations.css";
import LinkImage from "../../../assets/link_image.png";

function ProfessionalAffiliations () {
    return (
        <div>
            <h3 className="professional-affiliations-header header">Professional Affiliations</h3>
            <div className="affiliation-resources">
                <div className="affiliation-resources-left">
                    <div className="aicpa resource">
                        <div className="left">
                            <h4 className="aicpa-header header">American Institute of CPAs</h4>
                            <h5 className="aicpa-content">National Organization for CPAs.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                    <div className="vscpa resource">
                        <div className="left">
                            <h4 className="vscpa-header header">Virginia Society of CPAs</h4>
                            <h5 className="vscpa-content">Virginia's State Society for CPAs.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                </div>
                <div className="affiliation-resources-right">
                    <div className="swam resource">
                        <div className="left">
                            <h4 className="swam-header header">SWaM</h4>
                            <h5 className="swam-content">Small Business and Supplier Diversity.</h5>
                        </div>
                        <div className="right">
                            <img className="link-icon" src={ LinkImage } alt="link-icon" />
                        </div>
                    </div>
                    <div className="naba resource">
                        <div className="left">
                            <h4 className="naba-header header">NABA, Inc.</h4>
                            <h5 className="naba-content">National Association of Black Accountants, Inc.</h5>
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

export default ProfessionalAffiliations;