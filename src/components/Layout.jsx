import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(url);
    }

  return (
    <div>
        <div>
            <button onClick={() => { handleNavigate("/about");}}>About page</button>
            <button onClick={() => { handleNavigate("/");}}>Home</button>
            <button onClick={() => { handleNavigate("/error-page");}}>page with error</button>
        </div>
        <Outlet />
    </div>
  )
}

export default Layout