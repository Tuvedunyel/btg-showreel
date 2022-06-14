import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SesameSpace from '../../img/sesame-space.png'

const Sesame: FC<{ inView: boolean }> = ({ inView }) => {
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
            animation.start('animate');
        } else {
            animation.start('initial');
        }
    }, [ inView, animation ] );


    return (
        <motion.div initial='initial' animate={animation} variants={variants} transition={{ duration: 2, delay: 10 }} className='sesame__logo'>
            <img src={ SesameSpace } alt="Logo du projet Sésame d'ariane groupe"/>
        </motion.div>
    );
};

export default Sesame;
