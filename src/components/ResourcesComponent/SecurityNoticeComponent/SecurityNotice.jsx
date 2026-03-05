import "./SecurityNotice.css";
import SecurityImage from "../../../assets/security_image.png";

function SecurityNotice () {

    const PhoneLink = import.meta.env.VITE_LINK_PHONE;
    const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;

    return (
        <div className="security-notice">
            <h3 className="security-notice-header">Important Security Notice</h3>
            <div className="security-content">
                <img className="security-icon" src={ SecurityImage } alt="security-icon" />
                <h5 className="security-notice-content">A.G. Reese & Associates will never ask you to provide sensitive information such as social security numbers, bank account details, or passwords via email or text message.<br /> If you receive any suspicious communication claiming to be from our firm, please contact us directly at { PhoneDisplay } to verify its authenticity before responding.</h5>
            </div>
        </div>
    )
}

export default SecurityNotice;