import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {

    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'text-violet-950 text-lg font-semibold ml-4' : 'text-violet-700 text-lg font-semibold ml-4'}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;