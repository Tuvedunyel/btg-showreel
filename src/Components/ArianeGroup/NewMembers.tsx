import { FC, useEffect } from 'react';
import moon from '../../img/moon.svg';
import { motion, useAnimation } from 'framer-motion';
import starBackground from '../../img/etoiles.png'
import { useInView } from "react-intersection-observer";
import waveOrange from '../../img/wave-orange.gif';
import orangeArrow from "../../img/orange-arrow.svg";
import gregoire from '../../img/cosmonaute_gregoire_deux.png';
import anais from '../../img/cosmonaute_anais_deux.png';
import zoe from '../../img/cosmonaute_zoe_deux.png';

const NewMembers: FC = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView( { threshold: 0 } )

    const moonVariants = {
        initial: {
            translateY: '410%'
        },
        animate: {
            translateY: '0%'
        }
    }

    const variants = {
        initial: {
            translateY: 900
        },
        animate: {
            translateY: 0
        }
    }

    const topVariants = {
        initial: {
            translateY: 0
        },
        animate: {
            translateY: '339%'
        }
    }

    const employeeVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    const teamVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' );
        } else {
            animation.start( 'initial' );
        }
    }, [ animation, inView ] );


    return (
        <>
            <div className="dummy__container" ref={ ref }></div>
            <img src={ starBackground } alt="Fond étoilé" className='star__background__image'/>
            <motion.section initial='initial' animate={ animation } variants={ moonVariants }
                            transition={ { duration: 2, delay: 20 } } className="moon" title="Arrivée d'Anaïs">
                <motion.div initial='initial' animate={ animation } variants={ topVariants }
                            transition={ { duration: 2, delay: 25 } } className="static__moon__wrapper">
                    <img src={ moon } alt="Illustration d'une lune" className='bigMoon'/>
                    <img src={ waveOrange } alt="Vague orange" className='orange-wave'/>
                    <motion.div initial='initial' animate={ animation } variants={ variants }
                                transition={ { duration: 1 } } className='moon-year'
                    >
                        <div className="creationAgence__left__title">
                            <h2>
                                <span>2</span>
                                <span>0</span>
                                <span>2</span>
                                <span>0</span>
                            </h2>
                            <p>Arrivée d'Anaïs</p>
                            <strong className="orangeArrow"><img src={ orangeArrow }
                                                                 alt="Flèche orange pointant vers la droite"/></strong>
                        </div>
                        <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                                    whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                                    transition={ { duration: 1, delay: 0.3 } }
                                    className="creationAgence__left__border"></motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
            <motion.section initial='initial' animate={ animation } variants={ employeeVariants }
                            transition={ { duration: 1, delay: 29 } } className="trio-employee__container">
                <motion.img initial='initial' animate={ animation } variants={ teamVariants }
                            transition={ { duration: 1, delay: 32 } } src={ gregoire }
                            alt="Grégoire dans une tenue de cosmonaute" className='trio-employee gregoire-cosmonaute'/>
                <motion.img initial='initial' animate={ animation } variants={ teamVariants }
                            transition={ { duration: 1, delay: 30 } } src={ anais }
                            alt="Anaïs dans une tenue de cosmonaute" className='trio-employee anais-cosmonaute'/>
                <motion.img initial='initial' animate={ animation } variants={ teamVariants }
                            transition={ { duration: 1, delay: 34 } } src={ zoe }
                            alt="Zoé dans une tenue de cosmonaute" className='trio-employee zoe-cosmonaute'/>
                <motion.h3 initial='initial' animate={ animation } variants={ teamVariants }
                          transition={ { duration: 1, delay: 32 } } className='employee gregoire'>Grégoire
                </motion.h3>
                <motion.h3 initial='initial' animate={ animation } variants={ teamVariants }
                           transition={ { duration: 1, delay: 30 } } className='employee anais'>Anaïs
                </motion.h3>
                <motion.h3 initial='initial' animate={ animation } variants={ teamVariants }
                           transition={ { duration: 1, delay: 34 } } className='employee zoe'>Zoé
                </motion.h3>
            </motion.section>
        </>
    );
};

export default NewMembers;
