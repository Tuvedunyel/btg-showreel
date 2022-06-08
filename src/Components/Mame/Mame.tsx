import { FC, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import './Mame.scss';
import Seed from "./Seed";
import Reveal from "./Reveal";
import orangeArrow from '../../img/orange-arrow.svg'
import { useInView } from "react-intersection-observer";

const variants = {
    initial: {
        backgroundColor: '#E3775B'
    },
    whileInView: {
        backgroundColor: '#FCD647'
    }
}

const Mame: FC = () => {
    const animation = useAnimation();
    const [ ref, inView, entry ] = useInView({ threshold: 0 })

    useEffect(() => {
        if (inView) {
            animation.start('animate')
        } else {
            animation.start('initial')
        }
    }, [inView, animation])

    const dateVariants = {
        initial: {
            translateY: 900
        },
        animate: {
            translateY: 0
        }
    }

    return (
        <motion.div initial='initial' whileInView='whileInView' variants={ variants }
                    transition={ { duration: 1, delay: 1.5 } }
                    viewport={ { once: true } } className="pepiniere__page">
            <motion.div ref={ref} className="pepiniere" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 8.5 }} >
                <motion.div initial={ { translateY: 900 } } animate={animation}
                            transition={ { duration: 1 } }
                            variants={ dateVariants }
                            className="creationAgence__left">
                    <div className="creationAgence__left__title">
                        <h2>
                            <span>2</span>
                            <span>0</span>
                            <span>1</span>
                            <span>4</span>
                        </h2>
                        <p>Intégration de la pépinière</p>
                        <strong className="orangeArrow"><img src={ orangeArrow } alt="Flèche orange pointant vers la droite"/></strong>
                    </div>
                    <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                                whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                                transition={ { duration: 1, delay: 0.3 } }
                                className="creationAgence__left__border"></motion.div>
                </motion.div>
                <div className="pepiniere__right">
                    <Seed/>
                    <div className="pepiniere__right__cirlce-container">
                        <motion.div initial={ { width: 0, height: 0 } }
                                    whileInView={ { width: '543px', height: '543px' } }
                                    viewport={ { once: true } } transition={ { duration: 1, delay: 2 } }
                                    className="pepiniere__right__circle">
                        </motion.div>
                        <motion.div className='masque' initial={ { opacity: 0, backgroundColor: 'transparent' } }
                                    whileInView={ { opacity: 1, backgroundColor: '#FCD647' } }
                                    transition={ { delay: 2 } }></motion.div>
                    </div>
                </div>
            </motion.div>
            <Reveal />
        </motion.div>
    );
};

export default Mame;
