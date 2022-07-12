import { FC, useEffect } from 'react';
import './arianeStyle.scss'
import orangeArrow from "../../../img/orange-arrow.svg";
import arianGroupImage from '../../../img/arianegroup_logo.png';
import arianGroupImageWebp from '../../../img/arianegroup_logo.webp';
import europeanStar from '../../../img/european-star.svg';
import { motion, useAnimation } from 'framer-motion'
import SpaceShip from "./SpaceShip";
import { useInView } from "react-intersection-observer";
import Image from 'react-image-webp'

const ArianeGroup: FC = () => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } );

    const variants = {
        initial: {
            translateY: -900
        },
        animate: {
            translateY: 0
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' )
        } else {
            animation.start( 'initial' )
        }
    }, [ animation, inView ] );


    return (
        <div className='arianeBg'>
            <div ref={ ref } className='arianeBg__container'>
                { inView && (
                    <>
                        <motion.div initial='initial' animate={ animation } variants={ variants }
                                    transition={ { duration: 1.5, delay: 0.5 } } className='arianeBg__container__top'>
                            <div className="border-top"></div>
                            <section className="title">
                                <h2>
                                    2019
                                    <strong className="orangeArrow"><img src={ orangeArrow }
                                                                         alt="Flèche orange pointant vers la droite"/></strong>
                                </h2>
                                <p>1<sup>er</sup> projet Européen</p>
                            </section>
                            <section className="border-white__title"></section>
                        </motion.div>
                        <div className="ariane__logo__container">
                            <motion.img animate={ { rotate: [ 360, -360 ] } }
                                        transition={ { duration: 20, repeat: Infinity } }
                                        src={ europeanStar } alt="Drapeau européen" className="european__flag"/>
                            <Image src={ arianGroupImage } webp={ arianGroupImageWebp } alt="Logo d'ariange Groupe" className="ariane__logo"/>
                        </div>
                    </>
                ) }
            </div>
            <SpaceShip/>
        </div>
    );
};

export default ArianeGroup;
