import { FC, useEffect } from 'react';
import './backToFuture.scss'
import starBackground from '../../img/etoiles.png';
import car from '../../img/car.svg'
import carShadow from '../../img/car-shadow.svg'
import road from '../../img/road.svg';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const RacingCar: FC = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } );

    const variants =  {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
        }
    }

    const carSlideIn = {
        initial: {
            translateX: -900
        },
        animate: {
            translateX: 500
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' );
        } else {
            animation.start( 'initial' );
        }
    }, [ inView, animation ] );


    return (
        <>
            <div ref={ ref } className="dummyref"></div>
            <motion.div initial='initial' animate={ animation } variants={ variants } transition={ { duration: 0.5 } }
                        className='racing-car__container'>
                <img src={ starBackground } alt="Ciel étoilé" className='racing-car__star'/>
                <section className="road">
                    <img src={ road } alt="Route grise"/>
                </section>
                <motion.section initial='initial' animate={ animation } variants={ carSlideIn }
                                transition={ { duration: 2, delay: 2 } } className="car__container">
                    <img src={ car } alt="delorean grise roulant sur la route"/>
                    <img src={ carShadow } alt="Ombre de la voiture" className='car-shadow'/>
                </motion.section>
            </motion.div>
        </>
    );
};

export default RacingCar;
