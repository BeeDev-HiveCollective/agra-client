import "./services.css";

import { Link } from "react-router-dom";

export default function ServicesSection() {
    return (
        <div className="services">
            <div className="header">
                <h2>Our Services</h2>
                <h5>Comprehensive accounting, tax, and audit services for individuals and small businesses.</h5>
            </div>
            <div className="service-descriptions">
                <div className="left">
                    <div className="service-box service-bar">
                        <h4 className="service-title">Individual Tax Preparation</h4>
                        <h5 className="service-description">Comprehensive preparation of personal tax returns with accuracy and attention to detail.</h5>
                    </div>
                    <div className="service-box service-background">
                        <h4 className="service-title">Business Tax Returns</h4>
                        <h5 className="service-description">Complete tax services for corporations, partnerships, and small businesses.</h5>
                    </div>
                    <div className="service-box service-bar">
                        <h4 className="service-title">Financial Statements</h4>
                        <h5 className="service-description">Accurate preparation and review of comprehensive financial statements.</h5>
                    </div>            
                </div>
                <div className="right">
                    <div className="service-box service-background">
                        <h4 className="service-title">Audits</h4>
                        <h5 className="service-description">Professional audit services to ensure compliance and financial accuracy.</h5>
                    </div>
                    <div className="service-box service-bar">
                        <h4 className="service-title">Bookkeeping & Accounting</h4>
                        <h5 className="service-description">Ongoing accounting support to keep your financial records organized.</h5>
                    </div>
                    <div className="service-box service-background">
                        <h4 className="service-title">Consultations</h4>
                        <h5 className="service-description">Trusted guidance on tax planning, business structure, and strategy.</h5>
                    </div>
                </div>                
            </div>
            <div className="services-button">
                <Link to="/services">
                    <button className="primary-button">View All Services</button>
                </Link>
            </div>
        </div>
    )
}