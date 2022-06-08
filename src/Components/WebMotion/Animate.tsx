import { FC, RefObject, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Animate: FC = () => {
    const animation = useAnimation()
    const [ ref, inView, entry ] = useInView({ threshold: 0 })

    useEffect( () => {
        if ( inView ) {
            animation.start('animate')
        } else {
            animation.start('initial')
        }
    }, [ inView, animation ])

    const variants = {
        initial : {
            height: 0
        },
        animate: {
            height: '955px'
        }
    }

    return (
        <motion.div ref={ref} initial="initial" animate={animation} variants={variants}
                    transition={ { duration: 2, delay: 35 } } className='blueBg'>
            <div className="yellow-circle"></div>
        </motion.div>
    );
};

export default Animate;
