import React from 'react';
import { motion } from "framer-motion";
import Muguet from '../../img/muguet.png'
import Trompette from '../../img/trompette.png'
import Vague from '../../img/vague.svg'
import './style.scss'

const variants = {
    initial: {
        height: 0,
        width: 0,
        borderRadius: '100%'
    },
    animate: {
        height: '100%',
        width: '100%',
        borderRadius: '0%'
    },
}

const FirstYearDetail = () => {
    return (
        <section className="detail__container">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="detail__title">
                <span>1er mai</span>
                <span>Création de</span>
                <span>l'agence</span>
            </motion.h2>
            <motion.div className="detail__motion" initial='initial' animate='animate' variants={ variants }
                        transition={ { duration: 1 } }>
                <motion.div className="white__motion" initial={ { width: 0, height: 0, borderRadius: '50%' } }
                            animate={ { width: '804px', height: '804px' } } transition={ { duration: 1, delay: 0.5 } }>
                    <motion.img src={ Muguet } initial={ { scale: 0 } } animate={ { scale: 1 } }
                                transition={ { duration: 1, delay: 1 } } alt="Bouquet de muguet" className='muguet'/>
                </motion.div>
            </motion.div>
            <motion.div initial={ { width: 0, height: 0, borderRadius: '50%' } }
                        animate={ { width: '363px', height: '363px' } } transition={ { duration: 1, delay: 0.7 } }
                        className='yellow_circle'>
                <motion.img initial={ { scale: 0 } } animate={ { scale: 1 } }
                            transition={ { duration: 1, delay: 1.2 } } src={ Trompette } alt="Une trompette argentée"
                            className='trompette'/>
                <motion.img initial={ { scale: 0 } } animate={ { scale: 1 } } className='vague' src={Vague} />
            </motion.div>
        </section>
    );
};

export default FirstYearDetail;
