import { FC } from 'react';
import Logo from '../../img/logo-btg.png'
import { motion } from "framer-motion";
import Hexagone from "../Hexagone";
import LogoStart from '../../img/logo-start-.png';
import blueMap from '../../img/blue-map.svg';
import trioBtg from '../../img/trio-btg.png';

const Reveal: FC = () => {
    const troll = "Franchement, c'était mieux avant ...";

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
                <img src={ blueMap } alt="Carte blue avec un point sur la carte" className='map'/>
                <img src={ Logo } alt="Logo BTG Communication" className='logo-btg'/>
                <img src={ trioBtg } alt="Photo de Guillaume, Gaël et Romain" className="trioBtg"  title={troll}/>
            </motion.div>
            <motion.div initial={ { width: 0, height: 0 } } whileInView={ { width: '445px', height: '445px' } }
                        viewport={ { once: true } } transition={ { duration: 1, delay: 9.5 } }
                        className='orangeCircle'>
                <div className="inner__circle">
                    <img src={LogoStart} alt="Logo initial de BTG Communication, avec S rouge entouré d'un cercle vert" />

                </div>
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
        </motion.div>
    );
};

export default Reveal;
