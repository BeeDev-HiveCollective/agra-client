import "./ServicesCTA.css";
import { Link } from "react-router-dom";

function ServicesCTA () {
    return (
        <div className="services-cta">
            <h3 className="CTA-header">Need Help with Your Finances?</h3>
            <h5 className="CTA-content">Contact us today to see how we can help with your financial goals!</h5>
            <div className="services-button">
                <Link to="/contact">
                    <button className="CTA-button">Contact Us Today</button>
                </Link>
            </div>
        </div>
    )
}

export default ServicesCTA;