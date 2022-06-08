import { FC, RefObject, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import Hexagone from "../Hexagone";
import orangeArrow from '../../img/orange-arrow.svg'
import { useInView } from "react-intersection-observer";

const Date: FC = () => {
    const animation = useAnimation()
    const [ ref, inView, entry ] = useInView({ threshold: 0 })

    useEffect( () => {
        if ( inView ) {
            animation.start('animate')
        } else {
            animation.start('initial')
        }
    }, [ inView, animation ])

    const variants = {
        initial: {
            translateY: 900
        },
        animate: {
            translateY: 0
        }
    }

    return (
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ duration: 1, delay: 2 }} viewport={{ once: true }}  className='date__container'>
            <motion.div ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className='date__hexa__container'>
                <Hexagone top={false} duration={0.3} />
                <Hexagone top={false} duration={0.6} />
                <Hexagone top={false} duration={0.8}/>
            </motion.div>
            <motion.div initial='initial' animate={animation}
                        variants={variants}
                        transition={ { duration: 1 } }
                        className="date__left">
                <div className="creationAgence__left__title">
                    <h2>
                        <span>2</span>
                        <span>0</span>
                        <span>1</span>
                        <span>5</span>
                    </h2>
                    <p>Intégration du web & du motion</p>
                    <strong className="orangeArrow"><img src={ orangeArrow } alt="Flèche orange pointant vers la droite"/></strong>
                </div>
                <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                            whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                            viewport={{ once: true }}
                            transition={ { duration: 1, delay: 0.3 } }
                            className="creationAgence__left__border"></motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Date;
