import Divider from '../../ReusableComponents/DividerComponent/Divider';
// import Badge from '../../../assets/40_years_badge.png';
import "./OurTeam.css";

function OurTeam() {
    
    const teamMembers = [
        { name: 'Lisa Jones', title: 'Owner & Shareholder' },
        { name: 'Kimberly R. Baine', title: 'Owner & Shareholder' },
        { name: 'Thomas Reese', title: 'Accountant' },
        { name: 'Deborah Coles', title: 'Accounting Clerk' },
        { name: 'Chiquita Bracey-Tabb', title: 'Associate' },
        { name: 'Raymond E. Payne, Jr.', title: 'Accountant' },
        { name: 'Pamela Lipscombe', title: 'Accountant' }
    ];

    return (
        <div className="our-team">
            <h3 className="our-team-header">Meet Our Team</h3>

            {/* FOUNDER SECTION */}
            <div className="founder">
                <div className="founder-text">
                    <h4 className="founder-name">Alan G. Reese, CPA</h4>
                    <h5 className="founder-title">Founder & Former President (now deceased)</h5>
                    <p className="founder-bio">
                        Alan G. Reese, the Founder and previous President of A.G. Reese & Associates, P.C.,
                        established the firm in 1983. He is a graduate of Virginia State University with a
                        Bachelor of Science Degree in Accounting, and is a former member of the International
                        Accounting Firm of Price Waterhouse & Co.
                    </p>
                </div>
                {/* <div className='est-badge'>
                    <img src={Badge} alt='40 Years of Service Badge' />
                </div> */}
            </div>

            {/* TEAM GRID */}
            <div className="team-grid-section">
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-grid-card">
                            <h3 className="grid-member-name">{member.name}</h3>
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