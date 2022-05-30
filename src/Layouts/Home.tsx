import { FC, useState } from 'react';
import logo from '../img/logo-btg.png';
import './Home.scss';
import Hexagone from "../Components/Hexagone";

const Home: FC = () => {

    return (
        <div className="container">
            <div className="home__container">
                <div className="row logo">
                    <img src={ logo } alt="Logo de BTG Communication"/>
                </div>
                <div className="row text__content">
                    <div className="text__content__title">
                        <div className="hexa-top">
                            <Hexagone top={ true } duration={ 0.5 }/>
                            <Hexagone top={ true } duration={ 0.7 }/>
                            <Hexagone top={ true } duration={ 0.9 }/>
                            <Hexagone top={ true } duration={ 1.1 }/>
                            <Hexagone top={ true } duration={ 1.3 }/>
                            <Hexagone top={ true } duration={ 1.5 }/>
                        </div>
                        <h1><span>Historique</span> <span className="return">de l'agence</span></h1>
                        <div className="hexa-bottom">
                            <Hexagone top={ false } duration={ 0.3 }/>
                            <Hexagone top={ false } duration={ 0.6 }/>
                            <Hexagone top={ false } duration={ 0.8 }/>
                            <Hexagone top={ false } duration={ 1 }/>
                            <Hexagone top={ false } duration={ 1.2 }/>
                            <Hexagone top={ false } duration={ 1.4 }/>
                        </div>
                    </div>
                    <p>Nullam sed turpis sagittis, vestibulum massa efficitur, cursus nisi. Vestibulum ac scelerisque
                        sem.
                        Vivamus gravida pharetra consectetur. Cras quam nibh, porttitor nec nulla non, cursus commodo
                        risus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
