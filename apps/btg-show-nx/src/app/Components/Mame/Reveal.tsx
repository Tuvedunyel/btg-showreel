import { FC, useEffect } from 'react';
import Logo from '../../../img/logo-btg.png'
import logoWebp from '../../../img/logo-btg.webp'
import { motion, useAnimation } from "framer-motion";
import Hexagone from "../Hexagone";
import trioBtg from '../../../img/trio-btg.png';
import trioBtgWebp from '../../../img/trio-btg.webp';
import leftMap from '../../../img/map-left.svg';
import pin from '../../../img/pin.svg'
import rightMap from '../../../img/map-right.svg';
import { useInView } from "react-intersection-observer";
import WaterText from "./WaterText";
import Image from 'react-image-webp'

const Reveal: FC = () => {
    const troll = "Les fortniteur !";
    const [ ref, inView ] = useInView( { threshold: 0 } );
    const animation = useAnimation();
    const windowWidth = window.innerWidth;

    const leftVariants = {
        initial: {
            translateY: -1500
        },
        animate: {
            translateY: 0,
        }
    }

    const rightVariants = {
        initial: {
            translateY: 1400
        },
        animate: {
            translateY: 0,
        }
    }

    const whiteCircleSize = windowWidth > 1300 ? {
      initial: {
        width: '0px',
        height: '0px'
      },
      animate: {
        width: '713px',
        height: '713px'
      }
    } : windowWidth > 900 ? {
      initial: {
        width: 0,
        height: 0
      },
      animate: {
        width: '513px',
        height: '513px'
      }
    } : windowWidth > 420 ? {
      initial: {
        width: 0,
        height: 0
      },
      animate: {
        width: '413px',
        height: '413px'
      }
    } : {
      initial: {
        width: 0,
        height: 0
      },
      animate: {
        width: '313px',
        height: '313px'
      }
    }

    useEffect( () => {
        if (inView) {
            animation.start( "animate" );
        } else {
            animation.start( "initial" );
        }
    }, [ animation, inView ] );


    return (
        <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                    transition={ { duration: 2, delay: 11.5 } } className='pepiniere__reveal'>
            <motion.div initial='initial' animate={ animation } variants={ leftVariants }
                        transition={ { duration: 2, delay: 10 } } className='left-map'>
                <img src={ leftMap } alt="Carte du département d'indre-et-Loire"/>
                <img src={ pin } alt="Point de géolocalisation" className='pin-left'/>
                <WaterText title='Nouv-' classname='left' id={ [ 'water', 'text', 'text_water' ] }/>
                <WaterText title='elle' classname='left' id={ [ 'water1', 'text1', 'text_water1' ] }/>
            </motion.div>
            <div className='pepiniere__reveal__container-circle'>
                <motion.div ref={ ref } initial='initial'
                            whileInView='animate'
                            variants={whiteCircleSize} transition={ { duration: 1, delay: 8.5 } }
                            className='pepiniere__reveal__whiteCircle'>
                    <Image src={ Logo } webp={ logoWebp } alt="Logo BTG Communication" className='logo-btg'/>
                    <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } }
                         viewport={ { once: true } }
                         transition={ { duration: 1, delay: 9.5 } }  className="trioBtg">
                        <Image src={ trioBtg } webp={ trioBtgWebp } alt="Photo de Guillaume, Gaël et Romain" className="trioBtg" title={ troll }/>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="pepiniere__reveal__text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={ { duration: 1, delay: 9.5 } }>
                <p>Nullam sed turpis sagittis, vestibulum massa efficitur, cursus nisi. Vestibulum ac scelerisque sem.
                    Vivamus gravida pharetra consectetur. Cras quam nibh, porttitor nec nulla non, cursus commodo
                    risus.</p>
                <motion.div initial={ { opacity: 0 } } whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            transition={ { duration: 1, delay: 9.5 } } className="hexa__container">
                    <Hexagone top={ false } duration={ 0.3 }/>
                    <Hexagone top={ false } duration={ 0.6 }/>
                    <Hexagone top={ false } duration={ 0.8 }/>
                    <Hexagone top={ false } duration={ 1 }/>
                    <Hexagone top={ false } duration={ 1.2 }/>
                    <Hexagone top={ false } duration={ 1.4 }/>
                </motion.div>
            </motion.div>
            <motion.div initial='initial' animate={ animation } variants={ rightVariants }
                        transition={ { duration: 2, delay: 10 } } className='right-map'>
                <img src={ rightMap } alt="Carte du département d'indre-et-Loire"/>
                <img src={ pin } alt="Point de géolocalisation" className='pin-right'/>
                <WaterText title='Aven-' classname='right' id={ [ 'water2', 'text2', 'text_water2' ] }/>
                <WaterText title='ture' classname='right' id={ [ 'water3', 'text3', 'text_water3' ] }/>
            </motion.div>
        </motion.div>
    );
};

export default Reveal;
