"use client";

import { useScroll, useTransform, motion, MotionValue, motionValue } from 'framer-motion';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis'

const Images = [
    "1.png",
    "1.png",
    "1.png",
    "2.png",
    "2.png",
    "2.png",
    "2.png",
    "1.png",
    "1.png",
    "1.png",
]



const Page = () => {

    let container = useRef(null);

    // scrollyprogress
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
        //start of container, end of window    end of container, start of window
    })
    

    let y1 = useTransform(scrollYProgress, [0, 1], [0, 1000])
    let y2 = useTransform(scrollYProgress, [0, 1], [0, 1000])
    let y3 = useTransform(scrollYProgress, [0, 1], [0, 1000])
    let y4 = useTransform(scrollYProgress, [0, 1], [0, 1000])
    


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

            <div className="spacer h-screen w-screen"></div>

            <div ref={container} className="gallery relative h-[175vh] w-full bg-[rgb(45,45,45)] flex gap-[2vw] p-[2vw] box-border overflow-hidden">
                <Column images={[Images[0], Images[1], Images[2]]} y={y1} top={"-45%"} />
                <Column images={[Images[3], Images[4], Images[5]]} y={y2} top={"-45%"} />
                <Column images={[Images[6], Images[7], Images[8]]} y={y3} top={"-45%"} />
                <Column images={[Images[6], Images[7], Images[8]]} y={y4} top={"-45%"} />
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
        <motion.div style={{y, top}} className='column w-1/4 min-w-[250px] h-full flex flex-col gap-[2vw] rounded-[1vw] overflow-hidden'>
            {images.map((image, index) => (
                <div key={index} className='imageContainer relative w-full h-full '>
                    <Image
                    src={`/images/${image}`}
                    fill
                    alt="iamge"
                    className='object-cover'
                    />
                </div>
            ))}
        </motion.div>
    )
}

export default Page
