import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SeedFirstState from '../../img/graine-first-state.svg';
import SeedSecondState from '../../img/graine-second-state.png';
import SeedThirdState from '../../img/graine-third-state.png';
import SeedFourthState from '../../img/graine-fourth-state.png';
import { useInView } from "react-intersection-observer";

const Seed: FC = () => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView({ threshold: 0 });

    const variants = {
        initial: {
            top: '10%',
            opacity: 0
        },
        whileInView: {
            bottom: '18.5%',
            top: 'unset',
            opacity: 1
        },
    }

    const firstSeedVariants = {
        animate: {
            opacity: [ 1, 0 ]
        }
    }

    const secondSeedVariants = {
        animate: {
            opacity: [ 0, 1, 0 ]
        }
    }

    const thirdSeedVariants = {
        animate: {
            opacity: [ 0, 1 ]
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' )
        }
    }, [ animation, inView ] )

    return (
        <motion.div className='seed-container' initial='initial' whileInView='whileInView' viewport={ { once: true } }
                    transition={ { duration: 1, delay: 3 } } variants={ variants }>
            <motion.img src={ SeedFirstState } animate={ animation } variants={ firstSeedVariants }
                        transition={ { duration: 1, delay: 3.5 } } alt="Graine"/>
            <motion.img src={ SeedSecondState } animate={ animation } variants={ secondSeedVariants }
                        transition={ { duration: 1.5, delay: 4.5 } } alt="Graine"/>
            <motion.img src={ SeedThirdState } animate={ animation } variants={ secondSeedVariants }
                        transition={ { duration: 1.5, delay: 6 } } alt="Graine"/>
            <motion.img src={ SeedFourthState } animate={animation} variants={ thirdSeedVariants }
                        transition={ { duration: 1.5, delay: 7.5 } } alt="Graine"/>
            <div ref={ref} className='dummyref'></div>
        </motion.div>
    );
};

export default Seed;
