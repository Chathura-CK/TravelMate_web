import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';


const LandingPage = ({ theme }) => {
    return (
        <div>
             <Hero theme={theme} />
             <Features theme={theme} />
            <Footer />
        </div>
    );
};

export default LandingPage;
