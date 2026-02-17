import "./HeroSection.css";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/hero_section_image.jpg";



export default function HeroSection() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Trusted Accounting Services in Richmond</h1>
                <h4>A.G. Reese & Associates, P.C. provides reliable and personalized accounting, tax, and audit services. We're a small, trusted firm in Richmond, Virginia, committed to accuracy and building long-term client relationships.</h4>
                <div className="button-div">
                    <Link to="/contact">
                        <button className="primary-button">Contact Us</button>
                    </Link>
                    <Link to= "/services">
                        <button className="secondary-button">View our Services</button>
                    </Link>
                </div>
            </div>
            <div className="hero-right">
                <img src={ HeroImage } alt="Accounting Papers" />
            </div>
        </div>
    )
}