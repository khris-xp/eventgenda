import React, { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>  {/* Render the rest of the content */}
    </>
  );
};

export default Layout;
