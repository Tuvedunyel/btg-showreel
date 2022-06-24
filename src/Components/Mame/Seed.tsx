import { FC } from 'react';
import { motion } from 'framer-motion';
import SeedFirstState from '../../img/graine-first-state.svg';
import SeedSecondState from '../../img/graine-second-state.png';
import SeedThirdState from '../../img/graine-third-state.png';
import SeedFourthState from '../../img/graine-fourth-state.png';

const variants = {
    initial: {
        top: 0,
        opacity: 0
    },
    whileInView: {
        bottom: '18.5%',
        top: 'unset',
        opacity: 1
    },
}

const Seed: FC = () => {
    return (
        <motion.div className='seed-container' initial='initial' whileInView='whileInView' viewport={{ once: true }} transition={{ duration: 1, delay: 3 }} variants={variants} >
            <motion.img src={ SeedFirstState } whileInView={{ opacity: [1, 0] }} transition={{ duration: 1, delay: 3.5 }} alt="Graine" />
            <motion.img src={ SeedSecondState } whileInView={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 4.5 }} alt="Graine" />
            <motion.img src={ SeedThirdState } whileInView={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: 6 }} alt="Graine" />
            <motion.img src={ SeedFourthState } whileInView={{ opacity: [0, 1] }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 7.5  }} alt="Graine" />
        </motion.div>
    );
};

export default Seed;
