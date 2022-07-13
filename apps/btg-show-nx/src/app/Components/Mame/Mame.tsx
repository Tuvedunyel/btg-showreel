import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Mame.scss";
import Seed from "./Seed";
import Reveal from "./Reveal";
import orangeArrow from "../../../img/orange-arrow.svg";
import { useInView } from "react-intersection-observer";


const Mame: FC = () => {
  const animation = useAnimation();
  const [ ref, inView ] = useInView( { threshold: 0 } );
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  useEffect( () => {
    if (inView) {
      animation.start( "animate" );
    } else {
      animation.start( "initial" );
    }
  }, [ inView, animation ] );

  const variants = {
    initial: {
      background: "#E3775B"
    },
    animate: {
      background: "#FCD647"
    }
  };

  const pepinereVanish = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0
    }
  }

  const dateVariants = windowWidth > 1000 ? {
    initial: {
      translateY: 900
    },
    animate: {
      translateY: 0
    }
  } : windowWidth > 771 ? {
    initial: {
      translateY: windowHeight
    },
    animate: {
      translateY: -windowHeight * 0.3
    }
  } : {
    initial: {
      translateY: windowHeight
    },
    animate: {
      translateY: -windowHeight * 0.35
    }
  };

  const pepiniereVariants = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1
    }
  };

  const fadeVariants = {
    initial: {
      opacity: 1,
      translateX: 0,
      width: "100%"
    },
    animate: {
      opacity: 0,
      translateX: -600,
      width: "100%"
    }
  };

  const rightCircleSize = windowWidth > 583 ? {
    initial: {
      width: 0,
      height: 0
    },
    animate: {
      width: "543px",
      height: "543px"
    }
  } : windowWidth > 468 ? {
    initial: {
      width: 0,
      height: 0
    },
    animate: {
      width: "443px",
      height: "443px"
    }
  } : {
    initial: {
      width: 0,
      height: 0
    },
    animate: {
      width: "300px",
      height: "300px"
    }
  };

  return (
    <>
      <div ref={ ref } className="ref__div"></div>
      <motion.div initial="initial" animate={ animation } variants={ variants }
                  transition={ { duration: 1, delay: 1.5 } }
                  className="pepiniere__page">
        <motion.div className="pepiniere" initial="initial" animate={ animation }
                    variants={ pepiniereVariants } transition={ { duration: 2, delay: 8.5 } }>
          <motion.div initial="initial" animate={ animation } variants={ fadeVariants }
                      transition={ { duration: 2, delay: 6 } } className="translate__creation">
            <motion.div initial="initial" animate={ animation }
                        transition={ { duration: 1, delay: 2 } }
                        variants={ dateVariants }
                        className="creationAgence__left">
              <div className="creationAgence__left__title">
                <h2>
                  <span>2</span>
                  <span>0</span>
                  <span>1</span>
                  <span>4</span>
                </h2>
                <p>Intégration de la pépinière</p>
                <strong className="orangeArrow"><img src={ orangeArrow }
                                                     alt="Flèche orange pointant vers la droite" /></strong>
              </div>
              <motion.div initial={ { translateX: -100, translateY: 100, opacity: 0 } }
                          whileInView={ { translateX: 0, translateY: 0, opacity: 1 } }
                          transition={ { duration: 1, delay: 0.3 } }
                          className="creationAgence__left__border"></motion.div>
            </motion.div>
          </motion.div>
          <motion.div initial="initial" whileInView="animate" viewport={ { once: true } } variants={ pepinereVanish }
                      transition={ { duration: 1, delay: 11 } } className="pepiniere__right">
            <Seed />
            <div className="pepiniere__right__cirlce-container">
              <motion.div initial="initial"
                          whileInView="animate"
                          variants={ rightCircleSize } transition={ { duration: 1, delay: 2 } }
                          className="pepiniere__right__circle">
              </motion.div>
              <motion.div className="masque"
                          initial={ { opacity: 0, backgroundColor: "transparent" } }
                          whileInView={ { opacity: 1, backgroundColor: "#FCD647" } }
                          transition={ { delay: 2 } }></motion.div>
            </div>
          </motion.div>
        </motion.div>
        <Reveal />
      </motion.div>
    </>
  );
};

export default Mame;
