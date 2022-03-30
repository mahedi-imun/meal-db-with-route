import React from 'react';
import CustomLink from './CustomLink';

const NavBar = () => {
    return (

        <nav className=' bg-violet-700 text-white flex justify-between items-center h-20 '>
            <div>
                <h4 className=' text-2xl pl-7'>Food || door</h4>
            </div>
            <div className='flex '>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Food">Food</CustomLink>
            </div>
        </nav>

    );
};

export default NavBar;