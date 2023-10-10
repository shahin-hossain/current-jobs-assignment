import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png'

const Blogs = () => {
    const [readMore, setReadMore] = useState({});
    // console.log(readMore)
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>

            <div className='relative bg-gradient-to-r from-violet-50 to-violet-100'>
                <img src={bg1} alt="" />
                <h2 className='text-3xl font-bold absolute top-1/2 start-1/3 md:start-[500px] text-violet-800'>Jobs Blogs</h2>
            </div>
            <h2 className='text-3xl font-semibold text-center text-violet-800 py-3'> <span>Blogs</span></h2>
            <hr />
            <div>

                {blogs.map(blog => <div key={blog.id} className='p-5 w-10/12 mx-auto'>
                    <h2 className='text-3xl py-2 font-semibold text-slate-800'>{blog.title}</h2>
                    <div className='pb-5'>
                        <p className={`py-3 text-slate-600 `}>{blog.content}</p>

                        <div className='flex items-center justify-between'>
                            <img src={blog.img} alt="" className='w-14' />
                            <p className='text-slate-600'><span className='font-semibold text-slate-800'>Author:</span> {blog.author}</p>
                            <div>
                                <p className='text-slate-600'> <span className='font-semibold text-slate-800'>Publish:</span> {blog.date}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>)}
            </div>
        </div>
    );
};

export default Blogs;