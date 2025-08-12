import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react'


const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();
    const mountain3Y = useTransform(scrollYProgress, [0,0.5], ['0%', '70%']);
    const planetsX = useTransform(scrollYProgress, [0,0.5], ['0%', '-20%']);
    const mountain2Y = useTransform(scrollYProgress, [0,0.5], ['0%', '30%']);
    const mountain1Y = useTransform(scrollYProgress, [0,0.5], ['0%', '0%']);
  return (
    <section className='absolute inset-0 bg-black/40'>
        
    <div className="relative h-screen overflow-y-hidden">

        <div className='absolute inset-0 w-full h-screen -z-50' 
        style={{
            backgroundImage: "url('/ale-portfolio/assets/sky.jpg')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
        }}/>
        <div className='absolute inset-0  -z-40' 
        style={{
            backgroundImage: "url('/ale-portfolio/assets/mountain-3.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain3Y,
        }}/>
        <div className='absolute inset-0  -z-30' 
        style={{
            backgroundImage: "url('/ale-portfolio/assets/planets.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            x: planetsX,
        }}/>
        <div className='absolute inset-0  -z-20' 
        style={{
            backgroundImage: "url('/ale-portfolio/assets/mountain-2.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain2Y,
        }}/>
        <div className='absolute inset-0  -z-10' 
        style={{
            backgroundImage: "url('/ale-portfolio/assets/mountain-1.png')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain1Y,
        }}/>
    </div>
    </section>
  )
}

export default ParallaxBackground