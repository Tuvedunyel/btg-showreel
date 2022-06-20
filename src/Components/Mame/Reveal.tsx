import { FC, useEffect } from 'react';
import Logo from '../../img/logo-btg.png'
import { motion, useAnimation } from "framer-motion";
import Hexagone from "../Hexagone";
import trioBtg from '../../img/trio-btg.png';
import leftMap from '../../img/map-left.svg';
import pin from '../../img/pin.svg'
import rightMap from '../../img/map-right.svg';
import { useInView } from "react-intersection-observer";

const Reveal: FC = () => {
    const troll = "Franchement, c'était mieux avant ...";
    const [ref, inView, entry] = useInView({ threshold: 0 });
    const animation = useAnimation();

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
            translateY: 1300
        },
        animate: {
            translateY: 0,
        }
    }

    useEffect( () => {
        if ( inView ) {
            animation.start("animate");
        } else {
            animation.start("initial");
        }
    }, [ animation, inView ] );


    return (
        <motion.div initial={ { opacity: 0 } } whileInView={ { opacity: 1 } } viewport={ { once: true } }
                    transition={ { duration: 2, delay: 11.5 } } className='pepiniere__reveal'>
            <motion.div initial='initial' animate={animation} variants={leftVariants} transition={{ duration: 2, delay: 10 }} className='left-map'>
                <img src={leftMap} alt="Carte du département d'indre-et-Loire"/>
                <img src={pin} alt="Point de géolocalisation" className='pin-left' />
                <h3 className='title-reveal left'>Nouv-<span>elle</span></h3>
            </motion.div>
            <motion.div ref={ref} initial={ { width: 0, height: 0 } } whileInView={ { width: '713px', height: '713px' } }
                        viewport={ { once: true } } transition={ { duration: 1, delay: 8.5 } }
                        className='pepiniere__reveal__whiteCircle'>
                <img src={ Logo } alt="Logo BTG Communication" className='logo-btg'/>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 9.5 }} src={ trioBtg } alt="Photo de Guillaume, Gaël et Romain" className="trioBtg"  title={troll}/>
            </motion.div>
            <motion.div className="pepiniere__reveal__text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 9.5 }} >
                <p>Nullam sed turpis sagittis, vestibulum massa efficitur, cursus nisi. Vestibulum ac scelerisque sem.
                    Vivamus gravida pharetra consectetur. Cras quam nibh, porttitor nec nulla non, cursus commodo
                    risus.</p>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 9.5 }} className="hexa__container">
                    <Hexagone top={ false } duration={ 0.3 }/>
                    <Hexagone top={ false } duration={ 0.6 }/>
                    <Hexagone top={ false } duration={ 0.8 }/>
                    <Hexagone top={ false } duration={ 1 }/>
                    <Hexagone top={ false } duration={ 1.2 }/>
                    <Hexagone top={ false } duration={ 1.4 }/>
                </motion.div>
            </motion.div>
            <motion.div initial='initial' animate={animation} variants={rightVariants} transition={{ duration: 2, delay: 10 }} className='right-map'>
                <img src={ rightMap } alt="Carte du département d'indre-et-Loire"/>
                <img src={ pin } alt="Point de géolocalisation" className='pin-right'/>
                <h3 className='title-reveal right'>Aven-<span>ture</span></h3>
            </motion.div>
        </motion.div>
    );
};

export default Reveal;
