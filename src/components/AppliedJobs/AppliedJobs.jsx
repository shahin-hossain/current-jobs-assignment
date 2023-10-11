import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png'
import { MapPinIcon } from '@heroicons/react/24/solid';

const AppliedJobs = () => {

    let jobs = useLoaderData();

    const [isRemote, setRemote] = useState(null)

    if (isRemote !== null && isRemote === true) {
        jobs = jobs.filter(job => job.remote_or_onsite !== 'Onsite');
    }
    else if (isRemote !== null && isRemote === false) {
        jobs = jobs.filter(job => job.remote_or_onsite !== 'Remote')
    }

    /* if (isRemote === null) {
        jobs = jobs;
    }
    else if (isRemote === true) {
        jobs = jobs.filter(job => job.remote_or_onsite !== 'Onsite');

    }
    else {
        jobs = jobs.filter(job => job.remote_or_onsite !== 'Remote');
    } */

    return (
        <div>
            <div className='relative bg-gradient-to-r from-violet-50 to-violet-100'>
                <img src={bg1} alt="" />
                <h2 className='text-3xl font-bold absolute top-1/3 start-1/3 md:start-[450px] text-violet-800'>Applied Jobs</h2>
            </div>
            <div className='mt-20'>
                <div>
                    <label htmlFor="filter">Filter: </label>
                    <button className='border border-violet-800 py-2 px-3 rounded-md mr-3' onClick={() => setRemote(true)}>Remote</button>
                    <button className='border border-violet-800 py-2 px-3 rounded-md mr-3' onClick={() => setRemote(false)}>Onside</button>
                </div>
                {jobs.map(job =>
                    <div key={job.id}>
                        <div className='flex justify-between items-center gap-10 p-8 border mb-10 shadow-lg'>
                            <div className='flex items-center gap-10 '>
                                <div>
                                    <img src={job.logo} alt="company logo" className='w-32 mb-8' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-semibold text-slate-700 mb-2'>{job.job_title}</h2>
                                    <p className=' mb-2 text-xl'>{job.company_name}</p>
                                    <div className='flex gap-5'>
                                        <p className=' font-semibold py-1 px-3 text-violet-600 border border-violet-500 rounded-md mb-2 '>{job.remote_or_onsite}</p>
                                        <p className=' font-semibold py-1 px-3 text-violet-600 border border-violet-500 rounded-md mb-2'>{job.job_type}</p>
                                    </div>
                                    <div className='flex flex-col md:flex-row md:items-center gap-1'>
                                        <span><MapPinIcon className="h-6 w-5 text-slate-500 inline" /></span>
                                        <p className='text-xl'>{job.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link to={`/job/${job.id}`}><button className='bg-gradient-to-r from-violet-500 to-violet-800 py-1 px-6 text-white rounded-md mt-5'>View Details</button>
                                </Link>
                            </div>

                        </div>


                    </div>
                )}
            </div>
        </div>
    );
};

export default AppliedJobs;