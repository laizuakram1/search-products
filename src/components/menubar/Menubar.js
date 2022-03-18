import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <nav className='container d-flex jusitfy-content-end'>
            <div className='col-md-2'>Logo</div>
                <div className='col-md-10'>
                   <ul className='d-flex justify-content-end list-style-none'>
                    <li className='me-5' >Home</li>
                    <li className='me-5'>Contact</li>
                    <li className='me-5'>Cart</li>
                    <li className='me-5'>About</li>
                   </ul>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;