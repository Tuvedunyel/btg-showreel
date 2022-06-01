import { FC } from 'react';
import { motion } from 'framer-motion';
import SeedFirstState from '../../img/graine-first-state.svg';
import SeedSecondState from '../../img/graine-second-state.svg';
import SeedThirdState from '../../img/graine-third-state.svg';
import SeedFourthState from '../../img/graine-fourth-state.svg';

const variants = {
    initial: {
        top: 0,
        opacity: 0
    },
    whileInView: {
        bottom: '20%',
        top: 'unset',
        opacity: 1
    },
}

const Seed: FC = () => {
    return (
        <motion.div className='seed-container' initial='initial' whileInView='whileInView' viewport={{ once: true }} transition={{ duration: 1, delay: 3 }} variants={variants} >
            <img src={ SeedFirstState } alt="Graine" />
        </motion.div>
    );
};

export default Seed;
