import "./CoreValues.css";

function CoreValues () {
    return (
        <div className="core-values">
            <h4 className="core-values-header">Our Core Values</h4>
            <div className="core-value">
                <h5 className="core-value-header">Accuracy & Integrity</h5>
                <h5 className="core-value-content">We handle your financial matters with meticulous attention to detail and unwavering honesty. Every number matters, and we never cut corners.</h5>
            </div>
            <div className="core-value">
                <h5 className="core-value-header">Long-term Relationships</h5>
                <h5 className="core-value-content">We're not just here for tax season. We build lasting partnerships with our clients, providing consistent support year after year.</h5>
            </div>
            <div className="core-value">
                <h5 className="core-value-header">Community Focus</h5>
                <h5 className="core-value-content">As a local Richmond firm, we're invested in the success of our neighboors and community. Your success is our success.</h5>
            </div>
        </div>
    )
}

export default CoreValues;