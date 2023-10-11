import React, { useState, useEffect } from 'react';

import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

import Category from '../Category/Category'
const Job = () => {
    const [categories, setCategories] = useState([]);
    // const jobs = useLoaderData();
    const [jobs, setJobs] = useState([])

    // const [isShowJobs, setShowJobs] = useState(false);
    const [isShowJobs, setShowJobs] = useState(4);

    // const jobs = useLoaderData();
    console.log(jobs)
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (

        <div>
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
                    {/* {
                        isShowJobs === false && jobs.slice(0, 4).map(job => <FeaturedJobs
                            key={job.id}
                            job={job}
                        ></FeaturedJobs>)
                    }
                    {
                        isShowJobs === true && jobs.map(job => <FeaturedJobs
                            key={job.id}
                            job={job}
                        ></FeaturedJobs>)
                    } */}
                    {jobs.slice(0, isShowJobs).map(job => <FeaturedJobs
                        key={job.id}
                        job={job}
                    ></FeaturedJobs>)}
                </div>
                <button onClick={() => setShowJobs(jobs.length)} className={`bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-6 text-white rounded-lg mt-10 mx-auto block ${isShowJobs === jobs.length && 'hidden'}`}>See All Jobs</button>

            </div>


        </div>

    );
};

export default Job;