import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <div className=' md:w-10/12  mx-auto'>
                <Header></Header>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;