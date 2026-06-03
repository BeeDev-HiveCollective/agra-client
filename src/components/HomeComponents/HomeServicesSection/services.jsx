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
                <div className="service-box service-bar">
                    <h4 className="service-title">Individual & Business Tax Preparation</h4>
                    <h5 className="service-description">Preparation of individual, corporations, partnerships and small business tax returns.</h5>
                </div>
                <div className="service-box service-background">
                    <h4 className="service-title">Financial Statements</h4>
                    <h5 className="service-description">Preparation, compilation and review of financial statements.</h5>
                </div>            
                <div className="service-box service-bar">
                    <h4 className="service-title">Audits</h4>
                    <h5 className="service-description">Professional audit services to ensure compliance and financial accuracy.</h5>
                </div>
                <div className="service-box service-background">
                    <h4 className="service-title">Bookkeeping & Accounting</h4>
                    <h5 className="service-description">Ongoing accounting support to keep your financial records organized.</h5>
                </div>
                <div className="service-box service-bar">
                    <h4 className="service-title">Consultations</h4>
                    <h5 className="service-description">Trusted guidance on tax planning, business structure, and strategy.</h5>
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