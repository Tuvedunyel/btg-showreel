import { FC } from 'react';
import hexagone from '../img/hexagone.svg';
import { motion } from 'framer-motion';


const Hexagone: FC<{ top: boolean, duration: number }> = ( { top, duration } ) => {

    return (
        <>
            {
                top ?
                    (
                        <motion.div className='img'
                                    initial={ { translateY: 50, opacity: 0 } }
                                    animate={ { translateY: 0, opacity: 1 } }
                                    transition={ { duration: duration } }
                        >
                            <motion.div animate={ { translateY: [ 10, 0, 10, 0, 10, 0, 10 ] } }
                                        viewport={{ once: true }}
                                        transition={ { delay: duration, duration: 4, repeat: Infinity } }
                                        drag
                            >
                                <img src={ hexagone } alt="Petit hexagone noir"/>
                            </motion.div>
                        </motion.div>
                    )
                    :
                    (
                        <motion.div className='img'
                                    initial={ { translateY: -50, opacity: 0 } }
                                    animate={ { translateY: 0, opacity: 1 } }
                                    transition={ { duration: duration } }
                        >
                            <motion.div animate={ { translateY: [ -10, 0, -10, 0, -10, 0, -10 ] } }
                                        viewport={{ once: true }}
                                        transition={ { delay: duration, duration: 4, repeat: Infinity } } drag>
                                <img src={ hexagone } alt="Petit hexagone noir"/>
                            </motion.div>
                        </motion.div>
                    )
            }
        </>
    );
};

export default Hexagone;
