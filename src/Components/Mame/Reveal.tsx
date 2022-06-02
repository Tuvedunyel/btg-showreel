import { FC } from 'react';
import Logo from '../../img/logo-btg.png'
import { motion } from "framer-motion";

const Reveal: FC = () => {
    return (
        <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                    transition={ { duration: 1, delay: 10.5 } } className='pepiniere__reveal'>
            <motion.div initial={ { width: 0, height: 0 } } whileInView={ { width: '445px', height: '445px' } }
                        viewport={ { once: true } } transition={ { duration: 1, delay: 9.5 } }
                        className='orangeCircle second'>
                <div className="inner__circle"></div>
            </motion.div>
            <motion.div initial={ { width: 0, height: 0 } } whileInView={ { width: '713px', height: '713px' } }
                        viewport={ { once: true } } transition={ { duration: 1, delay: 8.5 } }
                        className='pepiniere__reveal__whiteCircle'>
                <img src={ Logo } alt="Logo BTG Communication" className='logo-btg'/>
            </motion.div>
            <motion.div initial={ { width: 0, height: 0 } } whileInView={ { width: '445px', height: '445px' } }
                        viewport={ { once: true } } transition={ { duration: 1, delay: 9.5 } }
                        className='orangeCircle'>
                <div className="inner__circle"></div>
            </motion.div>
        </motion.div>
    );
};

export default Reveal;
