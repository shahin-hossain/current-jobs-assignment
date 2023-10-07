import React, { useEffect, useState } from 'react';
import user from '../../assets/images/user.png'
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {
    const [categories, setCategories] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='bg-gradient-to-r from-violet-50 to-violet-100 p-5 pb-0 rounded-b-lg'>
                <div className='flex flex-col md:flex-row justify-center md:items-center md:justify-between'>
                    <div className='mb-14 md:mb-0 mt-5 text-center md:text-start'>
                        <h1 className=' text-6xl font-semibold text-slate-800 mb-5 leading-tight '><span>One Step</span> <br /> <span>Closer To Your</span> <br /> <span className='text-violet-500'>Dream Job</span></h1>
                        <p className='md:me-28 text-center md:text-start text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Link to=''><button className='bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-6 text-white rounded-lg mt-5'>Get Started</button></Link>
                    </div>
                    <img src={user} className='md:w-2/4 hidden md:block' alt="" />
                </div>
            </div>
            <div className='mt-32'>
                <h2 className='text-3xl font-semibold text-slate-800 text-center '>Job Category List</h2>
                <p className='text-slate-500 text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-1 md:grid-cols-4 mx-auto place-items-center mt-10 w-11/12 gap-7'>
                    {categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)}
                </div>
            </div>
            <div className='mt-32'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold text-slate-800'>Featured Jobs</h2>
                    <p className='text-slate-500 mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 place-items-center'>
                    {jobs.slice(0, 4).map(job => <FeaturedJobs
                        key={job.id}
                        job={job}
                    ></FeaturedJobs>)}
                </div>
                <button className='bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-6 text-white rounded-lg mt-10 mx-auto block '>See All Jobs</button>

            </div>

        </div>
    );
};

export default Home;