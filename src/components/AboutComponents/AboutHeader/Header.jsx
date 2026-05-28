import "./Header.css";

function Header () {
    return (
        <div className="about-header">
            <div className="about-header-content">
                <h2 className="about-header-title">About Us</h2>
                <h4 className="about-header-subtitle">
                    {/* A. G. Reese & Associates, P.C. is a licensed CPA firm based in Richmond, Virginia, providing personalized accounting, tax, and audit services to individuals and businesses. With decades of experience, we are SWaM certified and actively involved in leading professional organizations, including the AICPA, Virginia Society of CPAs(Richmond Chapter), and the National Association of Black Accountants. Our Peer Review enrollment reflects our commitment to quality, integrity, and professional excellence. */}
                    A. G. Reese & Associates, P.C. is a licensed CPA firm based in Richmond, Virginia, providing personalized accounting, tax, and audit services to individuals and businesses. Our Peer Review enrollment reflects our commitment to quality, integrity, and professional excellence.
{/* <br />
<br /> */}
{/* A. G. Reese & Associates, P.C. is a trusted CPA firm serving Richmond, Virginia. With decades of experience, we provide personalized accounting, tax, and audit services to individuals and businesses. */}
                </h4>
            </div>
        </div>
    )
}

export default Header;