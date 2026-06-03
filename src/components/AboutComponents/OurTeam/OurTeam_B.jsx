import {  useState } from 'react';
import "./OurTeam.css";
import Divider from "../../ReusableComponents/DividerComponent/Divider";

function OurTeam () {

    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        { name: 'Lisa Jones, CPA', title: 'Owner & Shareholder' },
        { name: 'Kimberly R. Baine, CPA', title: 'Owner & Shareholder' },
        { name: 'Thomas Reese', title: 'Accountant' },
        { name: 'Deborah Coles', title: "Accounting Clerk" },
        { name: 'Chiquita Bracey-Tabb', title: 'Associate' },
        { name: 'Raymond E. Payne, Jr.', title: 'Accountant' },
        { name: 'A. LaFran Walker', title: 'Associate' }
    ];

    // Get initials from name
    const getInitials = (name) => {
        return name
            .split(' ')
            .filter(word => !word.includes('.'))
            .slice(0, 2)
            .map(word => word[0])
            .join('');
    };

    const slidesToShow =4;
    const maxIndex = Math.max(0, teamMembers.length - slidesToShow);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }

    return (
        <div className='our-team'>
            <h3 className='our-team-header'>Meet Our Team</h3>

            {/* Founder Section */}
            <div className='founder'>
                <div className='founder-text'>
                    <h4 className='founder-name'>Alan G. Reese, CPA</h4>
                    <h5 className='founder-title'>Founder & Former President</h5>
                    <p className='founder-bio'>
                        Alan G. Reese, the founder and previous President of A.G. Reese & Associates, P.C., established the firm in 1983. He is a graduate of Virginia State University with a Bachelor of Science Degree in Accounting, and is a former member of the International Accounting Firm of Price Waterhouse & Co.
                    </p>
                    <p className='founder-signature'>Alan G. Reese</p>
                </div>
                <div className='founder-badge'>
                    <div className='founder-badge-content'>
                        <span className='founder-badge-est'>Est.</span>
                        <span className='founder-badge-year'>1983</span>
                        <span className='founder-badge-firm'>A.G. Reese & Associates, P.C.</span>
                    </div>
                </div>
            </div>


            {/* Team Carousel */}
            <div className='team-carousel-section'>
                <div className='team-carousel-container'>
                    <button
                        className='carousel-arrow carousel-arrow-left'
                        onClick={handlePrev}
                        aria-label='Previous team member'>
                            ‹
                    </button>

                    <div className='team-carousel-wrapper'>
                        <div
                            className='team-carousel-track'
                            style={{
                                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                        }}>
                            {teamMembers.map((teamMembers, index) => (
                                <div key={index} className='team-member-slide'>
                                    <div className='team-member-card'>
                                        {/* Monogram Circle */}
                                        <div className='team-member-monogram'>
                                            <span className='monogram-initials'>
                                                {getInitials(teamMembers.name)}
                                            </span>
                                        </div>
                                        <div className='team-member-info'>
                                            <h3 className='team-member-name'>
                                                {teamMembers.name}
                                            </h3>
                                            <h5 className='team-member-title'>
                                                {teamMembers.title}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='carousel-arrow carousel-arrow-right'
                        onClick={handleNext}
                        aria-label='Next team member'>
                        ›
                    </button>
                </div>

                <div className='carousel-dots'>
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            className={"`carousel-dot ${index === currentIndex ? 'active' : ''}`"}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <Divider />
        </div>
    )
}

export default OurTeam;