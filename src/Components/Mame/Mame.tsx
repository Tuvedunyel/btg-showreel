import { FC } from 'react';
import { motion } from "framer-motion";
import './Mame.scss';
import Seed from "./Seed";

const variants = {
    initial: {
        backgroundColor: '#E3775B'
    },
    whileInView: {
        backgroundColor: '#FCD647'
    }
}

const Mame: FC = () => {
    return (
        <motion.div initial='initial' whileInView='whileInView' variants={ variants }
                    transition={ { duration: 1, delay: 1.5 } }
                    viewport={ { once: true } } className="pepiniere">
            <motion.div initial={ { translateY: 900 } } whileInView={ { translateY: 0 } } transition={ { duration: 1 } }
                        viewport={ { once: true } } className="creationAgence__left">
                <div className="creationAgence__left__title">
                    <h2>
                        <span>2</span>
                        <span>0</span>
                        <span>1</span>
                        <span>4</span>
                    </h2>
                    <p>Intégration de la pépinière</p>
                    <strong>arrow</strong>
                </div>
                <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                            whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                            transition={ { duration: 1, delay: 0.3 } }
                            className="creationAgence__left__border"></motion.div>
            </motion.div>
            <div className="pepiniere__right">
                <Seed />
                <div className="pepiniere__right__cirlce-container">
                    <motion.div initial={ { width: 0, height: 0 } } whileInView={ { width: '543px', height: '543px' } }
                                viewport={ { once: true } } transition={ { duration: 1, delay: 2 } }
                                className="pepiniere__right__circle"></motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Mame;
