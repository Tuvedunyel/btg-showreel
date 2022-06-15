import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SesameSpace from '../../img/sesame-space.png'
import bigHexagone from '../../img/big-hexagone.svg'
import moon from '../../img/moon.png'
import whiteWave from '../../img/white-wave.svg'

const Sesame: FC<{ inView: boolean }> = ( { inView } ) => {
    const animation = useAnimation();

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
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
        <motion.div initial='initial' animate={ animation } variants={ variants }
                    transition={ { duration: 2, delay: 10 } } className='sesame__logo'>
            <motion.img initial={ { opacity: 1 } } whileInView={ { opacity: 0 } } viewport={ { once: true } }
                        transition={{ duration: 1, delay: 12 }}
                        src={ SesameSpace } alt="Logo du projet Sésame d'ariane groupe"/>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 12 }} className="moon__container">
                <img src={ whiteWave } alt="Vague blanche" className='top-wave'/>
                <div className="moon__hexagone">
                    <img src={ bigHexagone } alt="Hexagone blanc" className='big__hexagone'/>
                    <img src={ moon } alt="Lune" className='lune' />
                </div>
                <img src={ whiteWave } alt="Vague blanche" className='bottom-wave'/>
            </motion.div>
        </motion.div>
    );
};

export default Sesame;
