import React, { useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import bg1 from '../../../src/assets/images/bg1.png'
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { getJobFromLocalStorage, setJobToLocalStorage } from '../../utils/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobDetails = ({ }) => {

    // const [jobs, setJobs] = useState([])
    const [isApplied, setApplied] = useState(false)
    const jobs = useLoaderData();

    /* useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []) */
    // console.log(jobs)
    const { id } = useParams();
    let job = jobs.find(job => job.id == id);



    const {
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information,
    } = job;
    // console.log(job)
    const addToAppliedJob = id => {
        // console.log(id)
        const exist = getJobFromLocalStorage()
        console.log(exist)
        if (exist[id] == id) {
            setApplied(true)
            return toast.error('Already Applied')
        }
        else {
            setJobToLocalStorage(id)
            toast.success("Successfully Applied");
        }
    }

    return (
        <div className='w-11/12 md:w-full mx-auto'>
            <div className='relative'>
                <img src={bg1} alt="" />
                <h2 className='text-3xl font-bold absolute top-1/2 start-1/3 md:start-1/2 text-violet-800'>Job Details</h2>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                <div className=''>
                    <p className='text-slate-600 mt-5'><span className='font-bold text-slate-800 '>Job Description:</span> {job_description} </p>
                    <p className='text-slate-600 mt-5'><span className='font-bold text-slate-800 '>Job Responsibility:</span> {job_responsibility} </p>
                    <p className='text-slate-600 mt-5'><span className='font-bold text-slate-800 '>Educational Requirements:</span> {educational_requirements} </p>
                    <p className='text-slate-600 mt-5'><span className='font-bold text-slate-800 '>Educational Requirements:</span> {educational_requirements} </p>
                    <p className='text-slate-600 mt-5'><span className='font-bold text-slate-800 '>Experiences</span> {experiences} </p>

                </div>
                <div className='mt-10 '>
                    <h2 className='font-bold text-slate-800 mb-5 text-lg'>Job Details</h2>
                    <hr></hr>
                    <div className='flex items-center mt-5'>
                        <span><CurrencyDollarIcon className="h-6 w-6 text-violet-500" /></span>
                        <p className='text-slate-600 ms-1 '><span className='font-bold text-slate-800 '>Salary:</span> {salary} </p>

                    </div>
                    <div className='flex items-center mt-5'>
                        <span><CalendarDaysIcon className="h-6 w-6 text-violet-500" /></span>
                        <p className='text-slate-600 ms-1 '><span className='font-bold text-slate-800 '>Job Title:</span> {job_title} </p>
                    </div>
                    <h2 className='font-bold text-slate-800 mb-5 text-lg mt-10'>Contact Information</h2>
                    <hr />
                    <div className='flex items-center mt-5'>
                        <span><PhoneIcon className="h-6 w-6 text-violet-500" /></span>
                        <p className='text-slate-600 ms-1 '><span className='font-bold text-slate-800 '>Phone:</span> {contact_information.phone} </p>
                    </div>
                    <div className='flex items-center mt-5'>
                        <span><EnvelopeIcon className="h-6 w-6 text-violet-500" /></span>
                        <p className='text-slate-600 ms-1 '><span className='font-bold text-slate-800 '>Email:</span> {contact_information.email} </p>
                    </div>
                    <div className='flex items-center mt-5'>
                        <span><MapPinIcon className="h-6 w-6 text-violet-500" /></span>
                        <p className='text-slate-600 ms-1 '><span className='font-bold text-slate-800 '>Address:</span> {contact_information.address} </p>
                    </div>
                    <div onClick={() => setApplied(!isApplied)}>

                        {isApplied ? <button className='bg-slate-800 py-3 px-6 text-white rounded-lg mt-10 font-semibold block '>Applied It</button>
                            : <button onClick={() => addToAppliedJob(job.id)} className='bg-gradient-to-r from-violet-500 to-violet-800 py-3 px-6 text-white rounded-lg mt-10 font-semibold block '>Apply Now </button>
                        }
                        <div onClick={() => notify}>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;