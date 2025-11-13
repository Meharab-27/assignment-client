import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import AllBooks from '../Pages/AllBooks/AllBooks';

const MainLayout = () => {
    return (
        <div>
          <div>
            <Navbar></Navbar>
            
            <div>
                <Outlet>
                  
                </Outlet>
            </div>
            <Footer></Footer>
          </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;