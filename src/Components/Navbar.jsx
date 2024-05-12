import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Change body background color when menu is open
    };

    return (
        <div className={`md:flex sticky top-0 p-6 z-50 text-white justify-between border-b border-b-white border-opacity-30 transition duration-500 ease-in-out md:bg-transparent ${isMobileMenuOpen? 'bg-black' : 'bg-transparent backdrop-blur-sm'}  md:backdrop-blur-sm`}>
            <div className='md:flex md:w-1/4'>
                <div><img className='h-10 ' src="images/logo.webp" alt="" /></div>
            </div>
            <div className='md:hidden flex justify-end w-full mt-[-25px]'>
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
            </div>
            <div className={`md:w-3/4 mx-auto  md:flex md:justify-between ${isMobileMenuOpen ? 'block' : 'hidden'}`}>

                <ul className='md:flex md:gap-8 md:px-10 md:py-3 py-10'>
                    <li className='relative my-4 md:my-0'>  <Link to="/about" className='text-lg'>About</Link></li>
                    <li className='relative my-4 md:my-0'> <Link to="/aitools" className='text-lg'>AI Tools</Link></li>
                    <li className='relative my-4 md:my-0' > <Link to="/aivoice" className='text-lg'>AI Voice Generator</Link></li>
                    <li className='relative my-4 md:my-0'> <Link to="/pricing" className='text-lg'>Pricing</Link></li>
                    <li className='relative my-4 md:my-0'> <Link to="/blogs" className='text-lg'>Blogs</Link></li>
                </ul>
                <div className='flex items-center gap-3 md:mx-2'>
                    <Link to="/sa" className=' w-full md:w-27 bg-gradient-to-bl transition-all duration-300 from-[#471c7c] to-[#7628d6] px-5 rounded-full py-2.5 font-bold text-medium'>Register</Link>
                    <Link to="/as" className='w-full md:w-27 lg:block hidden text-white border-[2.5px] rounded-3xl px-6 py-2 md:text-base text-sm tracking-wider font-semibold'>Login</Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
