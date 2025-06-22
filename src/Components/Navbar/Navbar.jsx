import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import MobileNav from './MobileNav/MobileNav';
import { FaBars } from "react-icons/fa";
import '../../App'

const Navbar = () => {

    const [activeMenu, setMenu] = useState(true);
    useEffect(() => {
        const header = document.getElementById('header');

        const handleEvent = () => {
            if(window.scrollY >= 100) {
                header.classList.add('active');
            }else {
                header.classList.remove('active');
            }
        }

        window.addEventListener('scroll', handleEvent);

        return () => window.removeEventListener('scroll', handleEvent);

    },[])

    return (
        <div className='w-full h-[100px] flex items-center mb-8' id='header'>
            <div className="lg:container mx-auto w-full lg:px-0 px-4">
                <div className="flex items-center justify-between gap-6 w-full">

                    <div className='lg:hidden block' onClick={() => setMenu(!activeMenu)}>
                        <button className='cursor-pointer'><FaBars color='#2b2b2b' size={'1.8rem'} /></button>
                    </div>

                    {/* logo wrapper  */}
                    <div>
                        <Link to={'/'} className='text-3xl text-[#2b2b2b] font-bold font-inter capitalize'>prosperix</Link>
                    </div>

                    <div className="lg:block hidden">
                        <nav className="flex items-center lg:gap-12">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-[#2b2b2b] font-inter font-bold capitalize'}>Home</NavLink>

                            <NavLink to={'/service'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-[#2b2b2b] font-inter font-bold capitalize'}>service</NavLink>

                            <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-[#2b2b2b] font-inter font-bold capitalize'}>contact</NavLink>

                            <NavLink to={'/help'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-[#2b2b2b] font-inter font-bold capitalize'}>help</NavLink>
                        </nav>
                    </div>

                    {/* header right wrapper  */}
                    <div className='flex items-center gap-10'>
                        <button className='text-xl text-[#008080] font-inter font-bold capitalize cursor-pointer'>sign in</button>
                        <button className='text-xl text-white font-inter font-bold capitalize cursor-pointer px-8 py-4 rounded bg-[#008080]'>get started</button>
                    </div>
                </div>

                <div className='lg:hidden block'>
                    <MobileNav activeMenu={activeMenu} setMenu={setMenu} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;