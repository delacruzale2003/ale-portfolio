import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
}

const words = ["Adaptables", "Originales", "Eficientes", "Escalables"]

const HeroText = () => {
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            
            {/* Desktop */}
            <div className="hidden md:block">
                <motion.h1 className='text-4xl font-medium'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}>
                    Hola, soy Alejandro
                </motion.h1>

                <div className="flex flex-col items-start mt-4">
                    <motion.p className='text-5xl font-medium text-neutral-300'
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}>
                        Una mente creativa <br />detrás de soluciones digitales
                    </motion.p>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}>
                        <FlipWords words={words}
                            className="font-black text-white text-7xl mt-4" />

                        <motion.p className='text-4xl font-medium text-neutral-300 mt-4'
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 1.8 }}>
                            Que impulsan el crecimiento de tu empresa
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Mobile */}
            <div className='block md:hidden'>
                <motion.p className='text-4xl font-medium'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}>
                    Hola, soy Alejandro
                </motion.p>

                <motion.p className='text-5xl font-black text-neutral-300 mt-4'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}>
                    Transformo ideas en soluciones
                </motion.p>

                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}>
                    <FlipWords words={words}
                        className="font-bold text-white text-7xl mt-4" />
                </motion.div>

                <motion.p className='text-4xl font-black text-neutral-300 mt-4'
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}>
                    Que marcan la diferencia
                </motion.p>
            </div>
        </div>
    )
}

export default HeroText