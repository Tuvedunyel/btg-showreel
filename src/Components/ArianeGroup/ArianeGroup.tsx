import { FC } from 'react';
import './arianeStyle.scss'
import orangeArrow from "../../img/orange-arrow.svg";
import arianGroupImage from '../../img/arianegroup_logo.png';
import europeanStar from '../../img/european-star.svg';
import { motion } from 'framer-motion'

const ArianeGroup: FC = () => {
    return (
        <div className='arianeBg'>
            <div className='arianeBg__container'>
                <div className='arianeBg__container__top'>
                    <div className="border-top"></div>
                    <section className="title">
                        <h2>
                            2019
                            <strong className="orangeArrow"><img src={ orangeArrow } alt="Flèche orange pointant vers la droite"/></strong>
                        </h2>
                        <p>1er projet Européen</p>
                    </section>
                    <section className="border-white__title"></section>
                </div>
                <div className="ariane__logo__container">
                    <motion.img animate={{ rotate: [360, -360] }} transition={{ time: [ 20, 20 ], repeat: Infinity }} src={ europeanStar } alt="Drapeau européen"  className="european__flag"/>
                    <img src={ arianGroupImage } alt="Logo d'ariange Groupe" className="ariane__logo"/>
                </div>
            </div>
        </div>
    );
};

export default ArianeGroup;
