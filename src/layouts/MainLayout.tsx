import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollMotion from '../components/ScrollMotion';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <ScrollMotion />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
