import React from 'react';
import bg1 from '../../assets/images/bg1.png'
const ErrorPage = () => {
    return (
        <div>
            <h2></h2>
            <div className='relative'>
                <img src={bg1} alt="" />
                <h2 className='text-3xl font-bold absolute top-1/2 start-1/3 md:start-[350px] text-violet-800'>Sorry This Page is Not Found</h2>
            </div>
        </div>
    );
};

export default ErrorPage;