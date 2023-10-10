import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-gradient-to-r from-violet-50 to-violet-100 p-5 pb-5'>
            <div className='flex justify-between items-center  '>
                <h2 className='text-3xl font-bold text-slate-700'>Current <span className='text-violet-600'>Jobs</span></h2>

                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    {
                        open ? <XMarkIcon className='h-10 w-10 text-violet-500' /> : <Bars3Icon className="h-10 w-10 text-violet-500" />
                    }

                </div>

                <nav className={`flex flex-col absolute z-10  md:static md:flex-row md:block duration-500 bg-violet-300 rounded-lg md:bg-transparent ${open ? 'top-20 right-0 ' : 'right-0 -top-full'}`}>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/applied-jobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blogs' >Blog</ActiveLink>
                </nav>
                <div className='hidden md:block'>
                    <Link><button className='bg-gradient-to-r from-violet-500 to-violet-700 py-3 px-6 text-white text-lg font-semibold rounded-2xl'>Start Applying</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Header;