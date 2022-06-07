import { FC } from 'react';
import { motion } from "framer-motion";
import Hexagone from "../Hexagone";
import orangeArrow from '../../img/orange-arrow.svg'

const Date: FC = () => {
    return (
        <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ duration: 1, delay: 2 }} viewport={{ once: true }}  className='date__container'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className='date__hexa__container'>
                <Hexagone top={false} duration={0.3} />
                <Hexagone top={false} duration={0.6} />
                <Hexagone top={false} duration={0.8}/>
            </motion.div>
            <motion.div initial={ { translateY: 900 } } whileInView={ { translateY: 0 } }
                        transition={ { duration: 1 } }
                        viewport={ { once: true } } className="date__left">
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
                            transition={ { duration: 1, delay: 0.3 } }
                            className="creationAgence__left__border"></motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Date;
