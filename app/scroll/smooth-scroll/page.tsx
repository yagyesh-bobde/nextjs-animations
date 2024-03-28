'use client'
import LocomotiveScroll from 'locomotive-scroll';
// import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'
import React from 'react'
import Intro from './(components)/Intro';

const Page = () => {

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();
    }, [])
    
    return (
        <main className='flex flex-col gap-10'>
            <Intro />
        </main>
    )
}

export default Page;
