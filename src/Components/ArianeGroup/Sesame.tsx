import { FC, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SesameSpace from '../../img/sesame-space.png'
import bigHexagone from '../../img/big-hexagone.svg'
import whiteWave from '../../img/white-wave.svg'
import Spline from "@splinetool/react-spline";
import StarBackground from "./StarBackground";
import { Canvas } from "@react-three/fiber";

const Sesame: FC<{ inView: boolean }> = ( { inView } ) => {
    const animation = useAnimation();
    // const moonMap = useLoader( TextureLoader, moon );

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }

    const sizeVariants = {
        initial: {
            width: 0,
            height: 0
        },
        animate: {
            width: '508px',
            height: '586px'
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
                        transition={ { duration: 1, delay: 12 } }
                        src={ SesameSpace } alt="Logo du projet Sésame d'ariane groupe"/>
            <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                        transition={ { duration: 1, delay: 12 } } className="moon__container">
                <img src={ whiteWave } alt="Vague blanche" className='top-wave'/>
                <motion.div initial='initial' animate={ animation } variants={ sizeVariants }
                            transition={ { duration: 1, delay: 15 } } className="moon__hexagone">
                    <img src={ bigHexagone } alt="Hexagone blanc" className='big__hexagone'/>
                    <Spline scene="https://prod.spline.design/SeqKfWuhGm1Go6Zb/scene.splinecode"/>
                </motion.div>
                <img src={ whiteWave } alt="Vague blanche" className='bottom-wave'/>
            </motion.div>
            <div className="star__container__moon">
                <Canvas>
                    <ambientLight intensity={ 1 }/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                    <StarBackground/>
                </Canvas>

            </div>
        </motion.div>
    );
};

export default Sesame;
