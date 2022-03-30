import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

const NavBar = () => {
    return (

        <nav className=' bg-violet-700 text-white flex justify-between items-center h-20 '>
            <div className=' text-2xl ml-5'>
                <Link to="/">Food || door</Link>
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