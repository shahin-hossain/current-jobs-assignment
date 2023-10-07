import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
//jobs props come from Home component
const FeaturedJobs = ({ job }) => {

    const {
        id,
        company_name,
        job_title,
        job_type,
        location,
        logo,
        remote_or_onsite,
        salary
    } = job;
    // console.log(job)
    return (
        <div className='p-10 text-slate-600  border shadow-lg rounded-lg'>
            <img src={logo} alt="company logo" className='w-32 mb-8' />
            <h2 className='text-2xl font-semibold text-slate-700 mb-2'>{job_title}</h2>
            <p className=' mb-2 text-xl'>{company_name}</p>
            <div className='flex gap-5'>
                <p className=' font-semibold py-1 px-3 text-violet-600 border border-violet-500 rounded-md mb-2 '>{remote_or_onsite}</p>
                <p className=' font-semibold py-1 px-3 text-violet-600 border border-violet-500 rounded-md mb-2'>{job_type}</p>
            </div>
            <div className='flex justify-between gap-5'>
                <div className='flex'>
                    <span><MapPinIcon className="h-6 w-5 text-slate-500 inline" /></span>
                    <p className='text-xl'>{location}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <span><CurrencyDollarIcon className='h-6 w-5 text-slate-500 inlin' /></span>
                    <p className='text-xl'>Salary: {salary}</p>
                </div>
            </div>
            <Link to='/job-details'><button className='bg-gradient-to-r from-violet-500 to-violet-800 py-1 px-6 text-white rounded-md mt-5'>View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJobs;