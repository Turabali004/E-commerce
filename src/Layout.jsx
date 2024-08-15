import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header , Footer } from './index'
export default function Layout(props) {
    

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}