import React from 'react';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <nav className='container fs-5 mt-4'>
           <div className='row'>
                <div className='d-flex '>
                    <div className='col-md-2'>Logo</div>
                    <div className='col-md-10'>
                        <ul className='list-unstyled d-flex justify-content-end me-5'>
                        <li className='me-5'>Home</li>
                        <li className='me-5'>Cart</li>
                        <li className='me-5'>Contact</li>
                        </ul>
                    </div>
                </div>
           </div>
            </nav>
        </div>
    );
};

export default Menubar;