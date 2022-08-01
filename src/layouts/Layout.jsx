import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='h-screen flex flex-col'>
      <nav className='header-footer'> </nav>
      <div className='bg-[#DFFFF5]'>
        <Outlet />
      </div>
      <footer className='header-footer'> </footer>
    </main>
  );
};

export default Layout;
