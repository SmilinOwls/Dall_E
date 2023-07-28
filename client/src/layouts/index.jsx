import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { logo } from '../assets';

function AppLayout() {
    return (
        <>
            <header className='header'>
                <Link to="/">
                    <img src={logo} alt='logo' className='w-28 object-contain' />
                </Link>

                <Link to="/add-post" className='post-btn'>
                    Add
                </Link>
            </header>
            <main className='main'>
                <Outlet/>
            </main>
        </>
    )
}

export default AppLayout