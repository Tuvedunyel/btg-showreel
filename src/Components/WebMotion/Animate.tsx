import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import orangeArrow from "../../img/orange-arrow.svg";
import building from '../../img/Building2.gif';
import rightFlag from '../../img/rightFlag.svg';
import leftFlag from '../../img/leftFlag.svg';
import whiteCube from '../../img/whiteCube.svg'
import traceTop from '../../img/trace-top.svg'
import traceBottom from '../../img/trace-bottom.svg'
import orangeCross from '../../img/orangeCross.svg'
import animateBuilding from '../../img/building02.gif'
import Hexagone from "../Hexagone";

const Animate: FC<{ inView: Boolean }> = ( { inView } ) => {
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

    const imageVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
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
                    transition={ { duration: 2, delay: 30 } } className='blueBg'>
            <motion.div initial='initial' animate={ animation } variants={ containerVariants }
                        transition={ { duration: 2, delay: 40 } } className='blueBg__container'>
                <motion.img initial='initial' animate={ animation } variants={ imageVariants }
                            transition={ { duration: 1, delay: 40 } } src={ animateBuilding }
                            alt="Immeuble qui se construit" className='yellow-animation'/>
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
                <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                            transition={ { duration: 1, delay: 40 } } className='chemin'>
                    <img src={ traceTop } alt="Chemin en pointiller blanc"/>
                    <img src={ orangeCross } alt="Croix orange"/>
                    <img src={ traceBottom } alt="Chemin en pointiller blanc"/>
                </motion.div>
                <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                            transition={ { duration: 1, delay: 40 } } className='arrivee__bottom'>
                    <div className="building__container">
                        <img src={ building } alt="Pictogramme d'un immeuble" className='building-bottom'/>
                        <div className="building__container__text">
                            <motion.img initial={ { left: '25%', top: '2%' } }
                                        whileInView={ { left: '8%', top: '-28%' } } viewport={ { once: true } }
                                        transition={ { duration: 1, delay: 45 } } src={ leftFlag }
                                        alt="Drapeau blanc orienté vers la gauche"/>
                            <motion.img initial={ { right: '25%', top: '2%' } }
                                        whileInView={ { right: '8%', top: '-28%' } } viewport={ { once: true } }
                                        transition={ { duration: 1, delay: 45 } } src={ rightFlag }
                                        alt="Drapeau blanc orienté vers la droite"/>
                            <p>Arrivée dans les bureaux boulevard Heurteloup</p>
                        </div>
                    </div>
                    <motion.div initial={ { width: 0, height: 0 } } whileInView={ { width: '177px', height: '177px' } }
                                viewport={ { once: true } } transition={ { duration: 1, delay: 25 } }
                                className="circle__container">
                        <div className="circle"></div>
                    </motion.div>
                    <div className="cube__container">
                        <Hexagone top={ false } duration={ 0.2 } black={ false }/>
                        <Hexagone top={ false } duration={ 0.5 } black={ false }/>
                        <Hexagone top={ false } duration={ 0.7 } black={ false }/>
                        <Hexagone top={ false } duration={ 0.9 } black={ false }/>
                        <Hexagone top={ false } duration={ 1.1 } black={ false }/>
                        <Hexagone top={ false } duration={ 1.3 } black={ false }/>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Animate;
