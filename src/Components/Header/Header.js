import React from 'react';
 
import './Header.css';
const Header = () => {
    return (
        <div>
            <header className='bg-light py-4'>
                <div className="container">
                    <div className="d-flex align-items-center">
                      <img src={logo} alt="" />
                      <h2 className='fw-bold pt-2'>SPORTS CLUB</h2>
                    </div>
                   
                </div>
            </header>
        </div>
    );
};

export default Header;