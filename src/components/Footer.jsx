import Vscpa from "../assets/VSCPA_badge_white.png";
import Aicpa from "../assets/AICPA_badge_white.png";
import Swam from "../assets/SWaM_badge_white.png";
import Naba from "../assets/NABA_badge_white.png";


import { Link } from "react-router-dom";

function Footer() {

    const PhoneLink = import.meta.env.VITE_LINK_PHONE;
    const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;
    const EmailLink = import.meta.env.VITE_MAIN_EMAIL;
    const Address01 = import.meta.env.VITE_ADDRESS_LINE1;
    const Address02 = import.meta.env.VITE_ADDRESS_LINE2;
    const Address03 = import.meta.env.VITE_ADDRESS_LINE3;
    return (
        <footer className="footer">
            <div className="top">
                <div className="footer-left">
                    <div className="name">
                        <Link to="/">
                            <h3>A.G. Reese & Associates, P.C.</h3>
                            <h5>Integrity at its best</h5>
                        </Link>
                    </div>
                    <div className="badges">
                        <Link to="https://www.vscpa.com/" target="_blank" rel="noopener noreferrer">
                            <img src= { Vscpa } alt="Virginia Society of Certified Public Accountants Member Badge" />
                        </Link>
                        <Link to="https://www.aicpa-cima.com/" target="_blank" rel="noopener noreferrer">
                            <img src= { Aicpa } alt="American Institute of Certified Public Accountants Member Badge" />
                        </Link>
                        <Link to="https://nabainc.org/" target="_blank" rel="noopener noreferrer">
                            <img src= { Naba } alt="National Association of Black Accountants Member Badge" />
                        </Link>
                        <Link to="https://sbsd.virginia.gov/" target="_blank" rel="noopener noreferrer">
                            <img src= { Swam } alt="Small, Women-owned, and Minority-owned Business (SWaM) Member Badge" />
                        </Link>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <h5><a id="footer-link" href="/about">About Us</a></h5>
                        <h5><a id="footer-link" href="/services">Services</a></h5>
                        <h5><a id="footer-link" href="/resources">Resources</a></h5>
                        <h5><a id="footer-link" href="/contact">Contact Us</a></h5>
                    </div>
                    <div className="office-info">
                        <h3><address id="office-info-header">Office Info</address></h3>
                        <h5><address>{ Address01 }</address></h5>
                        <h5>{ Address02 } { Address03 }</h5>
                        <h5>Phone: <a href={ PhoneLink }>{ PhoneDisplay }</a></h5>
                        <h5>Email: <a href={`mailto:${ EmailLink }?subject=Request%20For%20Tax%20Services&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about...`}>{ EmailLink }</a></h5>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="site-links">
                    <h5>Terms & Conditions | Privacy Policy | Unsubscribe</h5>
                </div>
                <div className="created-by-info">
                    <h5>Website created by <a id="footer-link" href="https://www.beedev-services.com/" target="_blank" rel="noopener noreferrer">BeeDev Services</a></h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;