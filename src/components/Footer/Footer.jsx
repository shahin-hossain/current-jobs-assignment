import React from 'react';
import social from '../../assets/icons/social.png'
const Footer = () => {
    return (
        <div className='bg-zinc-950 p-5 mt-10'>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
                <div className='max-w-md '>
                    <h2 className='text-3xl text-white font-semibold mb-5 '>Current Jobs</h2>
                    <p className='text-zinc-400 mb-5'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div>
                        <img className='w-32' src={social} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 col-span-2 gap-5'>
                    <div className='text-zinc-400'>
                        <h3 className='text-xl text-white font-semibold mb-5'>Company</h3>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                    <div className='text-zinc-400'>
                        <h3 className='text-xl text-white font-semibold mb-5'>Product</h3>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                    <div className='text-zinc-400'>
                        <h3 className='text-xl text-white font-semibold mb-5'>Support</h3>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div className='text-zinc-400'>
                        <h3 className='text-xl text-white font-semibold mb-5'>Contact</h3>
                        <p>524 Broadway , NYC</p>
                        <p>+1 777 - 978 - 5570</p>

                    </div>
                </div>
            </div>
            <div className='p-px bg-zinc-900 my-5'>

            </div>
            <div className='w-11/12 mx-auto text-center md:text-start flex flex-col md:flex-row justify-between'>
                <p className='text-zinc-500'>&copy; 2023 Current Jobs. All Rights Reserved</p>
                <p className='text-zinc-500'>Powered by Current Jobs</p>
            </div>
        </div>
    );
};

export default Footer;