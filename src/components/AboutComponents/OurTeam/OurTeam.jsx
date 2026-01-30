import React, { useState } from 'react';
import "./OurTeam.css";
import Divider from "../../ReusableComponents/Divider";

function OurTeam () {

    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        { name: 'Lisa Jones, CPA', image: '../../../assets/NABA_badge_green.png', title: 'Partner' },
        { name: 'Kimberly R. Baine, CPA', image: '../../../assets/NABA_badge_green.png', title: 'Senior CPA' },
        { name: 'Raymond E. Payne, Jr.', image: '../../../assets/NABA_badge_green.png', title: 'Accountant' },
        { name: 'Thomas Reese', image: '../../../assets/NABA_badge_green.png', title: 'Associate' },
        { name: 'A. LoTran Walker', image: '../../../assets/NABA_badge_green.png', title: 'Staff Accountant' }
    ];

    // Number of slides to show at once (adjust based on screen size)
    const slidesToShow = 4;
    const maxIndex = Math.max(0, teamMembers.length - slidesToShow);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }

    return (
        <div>
            <h3 className="our-team-header">Meet Our Team</h3>
            <div className="founder">
                <div className="founder-content">
                    <h4 className="founder-header">Our Founder</h4>
                    <h5 className="founder-content">Brief biography, history and credentials could appear here, highlighting years of experience, specializations, and background.</h5>
                    <h4 className="founder-signature">Founders Signature - A Nice Cursive Script Font</h4>                
                </div>
                <div className="founder-image">
                    <div className="placeholder"></div>
                </div>
            </div>
            <div className='team-carousel-section'>
                <div className='team-carousel-container'>
                    <button
                        className='carousel-arrow carousel-arrow-left'
                        onClick={ handlePrev }
                        aria-label='Previous team member'>
                        ‹
                    </button>
                    <div className='team-carousel-wrapper'>
                        <div 
                            className='team-carousel-track'
                            style={{
                                transform: 'translateX(-${currentIndex * (100 / slidesToShow)}%)',
                        }}>
                            { teamMembers.map((member, index) => (
                                <div key={ index } className='team-member-slide'>
                                    <div className='team-member-card'>
                                        <div className='team-member-image'>
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className='team-member-info'>
                                            <h3 className='team-member-name'>{member.name}</h3>
                                            <h5 className='team-member-title'>{member.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='carousel-arrow carousel-arrow-right'
                        onClick={ handleNext }
                        aria-label='Next team member'
                    >
                        ›
                    </button>
                </div>

                <div className='carousel-dots'>
                    {Array.from({ length: maxIndex + 1 }).map((_, index ) => (
                        <button
                            key={ index }
                            className= { `carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={ () => setCurrentIndex(index) }
                            aria-label={ `Go to slide ${index + 1}` }
                        />
                    ))}
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default OurTeam;