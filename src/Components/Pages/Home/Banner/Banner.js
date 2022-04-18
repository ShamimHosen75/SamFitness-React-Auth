import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner text-center text-white d-flex justify-content-center flex-column align-items-center'>
            <h1 className='py-2' >STRENGTH TRAINING SIMPLIFIED</h1>
            <h1 className='text-primary' >Take Your Fitness To The Next Level</h1>
            <p>PREMIUM PERSONAL TRAINING SERVICES IN THE GLASGOW AREA</p>
            <button className="btn bg-white rounded-pill px-4 mt-4">
                START HERE
            </button>
        </div>
    );
};

export default Banner;