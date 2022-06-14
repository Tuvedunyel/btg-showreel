import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import orangeArrow from "../../img/orange-arrow.svg";
import building from '../../img/building.svg';
import rightFlag from '../../img/rightFlag.svg';
import leftFlag from '../../img/leftFlag.svg';
import whiteCube from '../../img/whiteCube.svg'
import traceTop from '../../img/trace-top.svg'
import traceBottom from '../../img/trace-bottom.svg'
import orangeCross from '../../img/orangeCross.svg'

const Animate: FC<{ inView: Boolean }> = ({ inView }) => {
    const animation = useAnimation()

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' )
        } else {
            animation.start( 'initial' )
        }
    }, [ inView, animation ] )

    const variants = {
        initial: {
            height: 0
        },
        animate: {
            height: '955px'
        }
    }

    const containerVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: -1500
        }
    }

    return (
        <motion.div initial="initial" animate={ animation } variants={ variants }
                    transition={ { duration: 2, delay: 35 } } className='blueBg'>
            <motion.div initial='initial' animate={ animation } variants={ containerVariants } transition={{ duration: 2, delay: 40 }} className='blueBg__container'>
                <Canvas>
                    <ambientLight intensity={ 0.9 }/>
                    <Sphere args={ [ 1, 100, 200 ] } scale={ 2.5 }>
                        <MeshDistortMaterial attach='material' speed={ 1.5 } distort={ 0.3 } color='#FCD647'/>
                    </Sphere>
                </Canvas>
                <div className="date__left">
                    <div className="creationAgence__left__title">
                        <h2>
                            <span>2</span>
                            <span>0</span>
                            <span>1</span>
                            <span>7</span>
                        </h2>
                        <p>Déménagement de l'agence</p>
                        <strong className="orangeArrow"><img src={ orangeArrow }
                                                             alt="Flèche orange pointant vers la droite"/></strong>
                    </div>
                    <div className="creationAgence__left__border"></div>
                </div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 40 }} className='chemin'>
                    <img src={ traceTop } alt="Chemin en pointiller blanc"/>
                    <img src={ orangeCross } alt="Croix orange"/>
                    <img src={ traceBottom } alt="Chemin en pointiller blanc"/>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}  transition={{ duration: 1, delay: 40 }} className='arrivee__bottom'>
                    <div className="building__container">
                        <img src={ building } alt="Pictogramme d'un immeuble"/>
                        <div className="building__container__text">
                            <img src={ leftFlag } alt="Drapeau blanc orienté vers la gauche"/>
                            <img src={ rightFlag } alt="Drapeau blanc orienté vers la droite"/>
                            <p>Arrivée dans les bureaux boulevard Heurteloup</p>
                        </div>
                    </div>
                    <div className="circle__container">
                        <div className="circle"></div>
                    </div>
                    <div className="cube__container">
                        <img src={ whiteCube } alt="Cube blanc"/>
                        <img src={ whiteCube } alt="Cube blanc"/>
                        <img src={ whiteCube } alt="Cube blanc"/>
                        <img src={ whiteCube } alt="Cube blanc"/>
                        <img src={ whiteCube } alt="Cube blanc"/>
                        <img src={ whiteCube } alt="Cube blanc"/>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Animate;
