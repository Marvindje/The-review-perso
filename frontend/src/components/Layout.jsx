import React, { useState } from 'react';
import Sidebar from './SideBar';
import Navbar from './NavBar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Navbar onLogoClick={handleLogoClick} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      {children}
    </>
  );
};

export default Layout;
