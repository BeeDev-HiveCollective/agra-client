
import Divider from "../ReusableComponents/DividerComponent/Divider";
import Building from '../../assets/building.png'


export default function ContactInformation() {
    const PhoneLink = import.meta.env.VITE_LINK_PHONE;
    const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;
    const EmailLink = import.meta.env.VITE_MAIN_EMAIL;
    const Address01 = import.meta.env.VITE_ADDRESS_LINE1;
    const Address02 = import.meta.env.VITE_ADDRESS_LINE2;
    const Address03 = import.meta.env.VITE_ADDRESS_LINE3;

    return(
        <div className="contact-information">
            <h3 className="contactTitle">Office Information</h3>
            <div className="info-column">
                <div className="info-section">
                    <div className="section">
                        <h4>Address</h4>
                        <h5 className="info">{ Address01 }</h5>
                        <h5 className="info">{ Address02 }</h5>
                    </div>
                    <div className="section">
                        <h4>Phone</h4>
                        <h5 className="info">Phone: <a className="info-link" href={ PhoneLink }>{ PhoneDisplay }</a></h5>
                    </div>
                    <div className="section">
                        <h4>Email</h4>
                        <h5 className="info">Email: <a className="info-link" href={`mailto:${ EmailLink }?subject=Request%20For%20Tax%20Services&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about...`}>{ EmailLink }</a></h5>
                    </div>
                    <div className="section">
                        <h4>Office Hours</h4>
                    </div>
                </div>
                <div className="img">
                    <img className="office-photo" src={Building} alt="Location" />
                </div>
            </div>
            <Divider />
        </div>
    )
}