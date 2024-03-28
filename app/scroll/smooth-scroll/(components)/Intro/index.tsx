import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react'
import bg from '@/app/scroll/smooth-scroll/(images)/1.jpg'
import img1 from '@/app/scroll/smooth-scroll/(images)/2.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import img2 from '@/app/scroll/smooth-scroll/(images)/1.jpg'
// import img3 from '@/app/scroll/smooth-scroll/(images)/1.jpg'

const Intro = () => {

    let bgImage = useRef(null); 
    let introImage = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement, 
                start: "top", 
                end: "+=900px",
                scrub: true ,
                markers: true
            }
        })


        timeline.from(bgImage.current, { clipPath: "inset(15% 10%)"}).to(introImage.current, { height: "200px"}, 0)
    }, []);

    return (
        <div className='intro'>
            <div ref={bgImage} className='bgImage position absolute h-[140vh] w-full brightness-50'>
                <Image
                src={bg}
                fill
                className='object-cover'
                alt="scenic background" 
                />
            </div>
            <div className="introcontainer mt-[35vh] flex center items-center justify-center">
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className="introimage absolute w-[350px] h-[475px]">
                    <Image 
                        src={img1}
                        fill 
                        alt="smooth scroll"
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.6" className='z-10 text-white text-8xl font-bold uppercase'>Smooth Scroll</h1>
            </div>
        </div>
    )
}

export default Intro;
