import React from 'react';
import '../../../App'
import { NavLink } from 'react-router';
import { IoMdClose } from "react-icons/io";

const MobileNav = ({activeMenu, setMenu}) => {
    return (
        <div className={`mobileNav ${activeMenu && 'active'}`}>
            <div className='mb-10' onClick={() => setMenu(!activeMenu)}>
                <button className='p-3 border border-[#008080] rounded-full cursor-pointer'><IoMdClose color='#008080' size={'2rem'} /></button>
            </div>
            <nav className="flex flex-col items-center gap-6">
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-white font-inter font-bold capitalize'}>Home</NavLink>

                <NavLink to={'/service'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-white font-inter font-bold capitalize'}>service</NavLink>

                <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-white font-inter font-bold capitalize'}>contact</NavLink>

                <NavLink to={'/help'} className={({ isActive }) => isActive ? 'text-xl text-[#008080] font-inter font-bold capitalize' : 'text-xl text-white font-inter font-bold capitalize'}>help</NavLink>
            </nav>
        </div>
    );
};

export default MobileNav;