import React from 'react';

const Category = ({ category }) => {
    const { availability, category_name, logo } = category;
    return (
        <div className='p-8 bg-violet-50 w-60 h-48 rounded-lg shadow-xl border'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='mt-8'>
                <h3 className='font-bold text-lg text-slate-800'>{category_name}</h3>
                <p className='text-slate-500 mt-2'>{availability}</p>
            </div>
        </div>
    );
};

export default Category;