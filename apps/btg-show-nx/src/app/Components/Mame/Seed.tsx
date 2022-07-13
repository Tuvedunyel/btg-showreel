import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SeedFirstState from '../../../img/graine-first-state.svg';
import SeedSecondState from '../../../img/graine-second-state.png';
import seedSecondStateWebp from '../../../img/graine-second-state.webp';
import SeedThirdState from '../../../img/graine-third-state.png';
import seedThirdStateWebp from '../../../img/graine-third-state.webp';
import SeedFourthState from '../../../img/graine-fourth-state.png';
import seedFourthStateWebp from '../../../img/graine-fourth-state.webp';
import { useInView } from "react-intersection-observer";
import Image from 'react-image-webp'

const Seed: FC = () => {
    const animation = useAnimation();
    const [ ref, inView ] = useInView( { threshold: 0 } );

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
        initial: {
            opacity: 0
        },
        animate: {
            opacity: [ 1, 0 ]
        }
    }

    const secondSeedVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: [ 0, 1, 0 ]
        }
    }

    const thirdSeedVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: [ 0, 1, 0 ]
        }
    }

    useEffect( () => {
        if (inView) {
            animation.start( 'animate' )
        } else {
            animation.start('initial')
        }
    }, [ animation, inView ] )

    return (
        <motion.section className='seed-container' initial='initial' whileInView='whileInView'
                        viewport={ { once: true } }
                        transition={ { duration: 1, delay: 3 } } variants={ variants }>
            <motion.img src={ SeedFirstState } initial='initial' animate={ animation } variants={ firstSeedVariants }
                        transition={ { duration: 1, delay: 3.5 } } alt="Graine" className='seed-img' />
            <motion.div initial='initial' animate={ animation } variants={ secondSeedVariants }
                        transition={ { duration: 1.5, delay: 4.5 } } className='seed-img' >
                <Image src={ SeedSecondState } webp={ SeedSecondState } alt="Graine"/>
            </motion.div>
            <motion.div initial='initial' animate={ animation } variants={ secondSeedVariants }
                        transition={ { duration: 1.5, delay: 6 } } className='seed-img' >
                <Image src={ SeedThirdState } webp={ seedThirdStateWebp } alt="Graine"/>
            </motion.div>
            <motion.div initial='initial' animate={ animation } variants={ thirdSeedVariants }
                        transition={ { duration: 1.5, delay: 7.5 } } className='seed-img' >
                <Image src={ SeedFourthState } webp={seedFourthStateWebp} alt="Graine"/>
            </motion.div>
            <div ref={ ref } className='dummyref'></div>
        </motion.section>
    );
};

export default Seed;
