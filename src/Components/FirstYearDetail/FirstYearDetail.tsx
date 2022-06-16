import React from 'react';
import { motion } from "framer-motion";
import Muguet from '../../img/muguet.png'
import Trompette from '../../img/trompette.png'
import Vague from '../../img/vague.svg'
import './style.scss'
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from 'three';

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
}

const FirstYearDetail = () => {
    return (
        <section className="detail__container">
            <motion.div initial={ { width: 0, height: 0 } } animate={ { width: '2200px', height: '2200px' } }
                        transition={ { duration: 1 } } className="circle__orange__detail">
            </motion.div>
            <motion.h2 initial={ { opacity: 0 } } animate={ { opacity: 1 } }
                       transition={ { duration: 1, delay: 1 } } className="detail__title">
                <span>1<sup>er</sup> mai</span>
                <span>Création de</span>
                <span>l'agence</span>
            </motion.h2>
            <motion.div className="detail__motion" initial='initial' animate='animate' variants={ variants }
                        transition={ { duration: 1, delay: 0.01 } }>
                <motion.div className="white__motion" initial={ { width: 0, height: 0, borderRadius: '50%' } }
                            animate={ { width: '804px', height: '804px' } }
                            transition={ { duration: 1, delay: 0.5 } }>
                    <motion.img src={ Muguet } initial={ { scale: 0 } } animate={ { scale: 1 } }
                                transition={ { duration: 1, delay: 1 } } alt="Bouquet de muguet"
                                className='muguet'/>
                </motion.div>
            </motion.div>
            <motion.div initial={ { width: 0, height: 0, borderRadius: '50%' } }
                        animate={ { width: '363px', height: '363px' } } transition={ { duration: 1, delay: 0.7 } }
                        className='yellow_circle'>
                <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
                        linear>
                    <ambientLight intensity={ 1 } />
                    <Sphere args={[1, 100, 200]} scale={3} >
                        <MeshDistortMaterial attach="material" color="#FCD647" speed={1.5} distort={ 0.15 } />
                    </Sphere>
                </Canvas>
                <motion.img initial={ { scale: 0 } } animate={ { scale: 1 } }
                            transition={ { duration: 1, delay: 1.2 } } src={ Trompette }
                            alt="Une trompette argentée"
                            className='trompette'/>
                <motion.img initial={ { scale: 0 } } animate={ { scale: 1 } } className='vague' src={ Vague }/>
            </motion.div>

        </section>
    );
};

export default FirstYearDetail;
