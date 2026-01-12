import "./Certifications.css";
import Vscpa from "../../../assets/VSCPA_badge_green.png";
import Aicpa from "../../../assets/AICPA_badge_green.png";
import Swam from "../../../assets/SWaM_badge_green.png";
import Naba from "../../../assets/NABA_badge_green.png";

import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="certifications">
            <div className="badges">
                <Link to="https://www.vscpa.com/" target="_blank" rel="noopener noreferrer">
                    <img src= { Vscpa } alt="Virginia Society of Certified Public Accountants Member Badge" />
                </Link>
                <Link to="https://www.aicpa-cima.com/" target="_blank" rel="noopener noreferrer">
                    <img src= { Aicpa } alt="American Institute of Certified Public Accountants Member Badge" />
                <Link to="https://nabainc.org/" target="_blank" rel="noopener noreferrer">
                    <img src= { Naba } alt="National Association of Black Accountants Member Badge" />
                </Link>
                    </Link>
                <Link to="https://sbsd.virginia.gov/" target="_blank" rel="noopener noreferrer">
                    <img src= { Swam } alt="Small, Women-owned, and Minority-owned Business (SWaM) Member Badge" />
                </Link>
            </div>
            <h5 className="member_badges">Proud member of: <a id="badge_link_text" href="https://www.vscpa.com/" target="_blank" rel="noopener noreferrer">Virginia Society of CPAs</a> | <a id="badge_link_text" href="https://www.aicpa-cima.com/" target="_blank" rel="noopener noreferrer">American Institute of Certified Public Accountants (AICPA)</a> | <a id="badge_link_text" href="https://nabainc.org/" target="_blank" rel="noopener noreferrer">National Association of Black Accountants</a> | <a id="badge_link_text" href="https://sbsd.virginia.gov/" target="_blank" rel="noopener noreferrer">Small, Women and Minority Owned (SWaM)</a></h5>
        </div>
    )
}