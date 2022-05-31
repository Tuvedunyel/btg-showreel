import { FC, Suspense, SetStateAction, Dispatch } from 'react';
import { motion } from 'framer-motion';
import arrow from '../../img/arrow.svg';
import './style.scss'
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const FirstYear: FC< { setShowDetail: Dispatch<SetStateAction<boolean>> } > = ( { setShowDetail } ) => {
    return (
        <div className="creationAgence">
            <motion.div initial={ { translateY: 900 } } whileInView={ { translateY: 0 } } transition={ { duration: 1 } }
                        viewport={ { once: true } } className="creationAgence__left">
                <div className="creationAgence__left__title">
                    <h2>
                        <span>2</span>
                        <span>0</span>
                        <span>1</span>
                        <span>2</span>
                    </h2>
                    <p>Création de l'agence</p>
                    <strong>arrow</strong>
                </div>
                <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                            whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                            transition={ { duration: 1, delay: 0.3 } }
                            className="creationAgence__left__border"></motion.div>
            </motion.div>
            <section className="creationAgence__right">

                <div className="creationAgence__right__title">
                    <h3 className="title_click">Cliquez ici</h3>
                    <div className="click">
                        <img src={ arrow } alt="Cliquez ici"/>
                        <div className="circle">
                            <Canvas className="canvas">
                                <ambientLight intensity={ 0.5 } />
                                <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 } />
                                <Suspense fallback={ null }>
                                    <Sphere  args={[1, 100, 200]} scale={2.5} onClick={ () => setShowDetail(true) } >
                                        <MeshDistortMaterial attach="material" color="#E3775B" speed={1.5} distort={ 0.3} roughness={0.2} />
                                    </Sphere>
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstYear;
