import React from 'react';
import "./OurTeam.css";
import Divider from '../../ReusableComponents/DividerComponent/Divider';

function OurTeam() {
    const teamMembers = [
        { name: 'Lisa Jones', title: 'Owner & Shareholder', credentials: 'CPA' },
        { name: 'Kimberly R. Baine', title: 'Owner & Shareholder', credentials: 'CPA' },
        { name: 'Thomas Reese', title: 'Accountant', credentials: '' },
        { name: 'Deborah Coles', title: 'Accounting Clerk', credentials: '' },
        { name: 'Chiquita Bracey-Tabb', title: 'Associate', credentials: '' },
        { name: 'Raymond E. Payne, Jr.', title: 'Accountant', credentials: '' },
        { name: 'A. LaFran Walker', title: 'Associate', credentials: '' }
    ];

    return (
        <div className="our-team">
            <h3 className="our-team-header">Meet Our Team</h3>

            {/* FOUNDER SECTION */}
            <div className="founder">
                <div className="founder-text">
                    <h4 className="founder-name">Alan G. Reese, CPA</h4>
                    <h5 className="founder-title">Founder & Former President</h5>
                    <p className="founder-bio">
                        Alan G. Reese, the Founder and previous President of A.G. Reese & Associates, P.C.,
                        established the firm in 1983. He is a graduate of Virginia State University with a
                        Bachelor of Science Degree in Accounting, and is a former member of the International
                        Accounting Firm of Price Waterhouse & Co.
                    </p>
                    <p className="founder-signature">Alan G. Reese</p>
                </div>
                <div className="founder-badge">
                    <div className="founder-badge-content">
                        <span className="founder-badge-est">Est.</span>
                        <span className="founder-badge-year">1983</span>
                        <span className="founder-badge-firm">A.G. Reese & Associates, P.C.</span>
                    </div>
                </div>
            </div>

            {/* TEAM GRID */}
            <div className="team-grid-section">
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-grid-card">
                            <h3 className="grid-member-name">
                                {member.name}
                                {member.credentials && (
                                    <span className="grid-member-credentials">, {member.credentials}</span>
                                )}
                            </h3>
                            <p className="grid-member-title">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Divider />
        </div>
    );
}

export default OurTeam;