"use client";

import { useScroll, useTransform, motion, MotionValue, motionValue } from 'framer-motion';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import useDimensions from '@/hooks/useDimensions';

const Images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
]



const Page = () => {

    let container = useRef(null);

    // height 
    const { height } = useDimensions()
    // scrollyprogress
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
        //start of container, end of window    end of container, start of window
    })
    

    let y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    let y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5])
    let y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    let y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    


    useEffect(() => {
        const lenis = new Lenis()

            function raf(time: any) {
            lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
    }, [])


    return (
        <main className="main h-full w-full">

            <div className="spacer h-screen w-screen grid place-content-center text-5xl font-bold text-center">Welcome To<br/>Smooth Prallax Scroll</div>

            <div ref={container} className="gallery relative h-[175vh] w-full bg-[rgb(45,45,45)] flex gap-[2vw] p-[2vw] box-border overflow-hidden">
                <Column images={[Images[0], Images[1], Images[2]]} y={y1} top={"-15%"} />
                <Column images={[Images[3], Images[4], Images[5], Images[3], Images[4], Images[5]]} y={y2} top={"-25%"} />
                <Column images={[Images[6], Images[7], Images[8]]} y={y3} top={"-15%"} />
                <Column images={[Images[9], Images[3], Images[4]]} y={y4} top={"-55%"} />
            </div>
            <div className="spacer h-screen w-screen"></div>
        </main>
    )
}



interface PropImages{
    images: string[] ;
    y: MotionValue<number>;
    top: string;
}

const Column = ( { images, y= motionValue(0), top }: PropImages) => {
    return (
        <motion.div style={{y, top}} className='relative column w-1/4 h-full min-w-[250px] flex flex-col gap-[2vw]'>
            {images.map((image, index) => (
                <div key={index} className='imageContainer relative w-full h-full rounded-[1vw] overflow-hidden' style={{ top }}>
                    <Image
                    src={`/images/${image}`}
                    fill
                    alt="iamge"
                    style={{ objectFit: "cover"}}
                    />
                </div>
            ))}
        </motion.div>
    )
}

export default Page
