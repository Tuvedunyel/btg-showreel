import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import SpaceShipImg from '../../img/space-ship.png'
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import StarBackground from "./StarBackground";

const SpaceShip = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } );



    const containerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }


    useEffect( () => {
        if (inView) {
            animation.start( 'animate' )
        } else {
            animation.start( 'initial' )
        }
    }, [ inView, animation ] )

    return (
        <motion.div ref={ ref } initial='initial' animate={ animation } variants={ containerVariants }
                    className='space__ship'>
            <div className="space__ship__bg">
                <img src={ SpaceShipImg } alt="Fusée Ariane sur son lanceur" className='launcher'/>
                { inView && (
                    <Canvas>
                        <ambientLight intensity={ 1 }/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                        <StarBackground/>
                    </Canvas>
                ) }
            </div>
        </motion.div>
    );
};

export default SpaceShip;
