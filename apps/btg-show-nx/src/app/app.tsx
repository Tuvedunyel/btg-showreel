import { useEffect, useRef } from 'react'
import './app.scss'
import Home from "./Layouts/Home";
import { AnimatePresence } from "framer-motion";
import Historique from "./Layouts/Historique";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebMotion from "./Components/WebMotion/WebMotion";
import ArianeGroup from "./Components/ArianeGroup/ArianeGroup";

gsap.registerPlugin( ScrollTrigger );

const App = () => {
    const App = useRef<HTMLDivElement | null>( null )
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    useEffect( () => {
      console.log(windowWidth)
        if (windowWidth > 1000) {
            let gsapApp = gsap.utils.toArray( '.container' )

            gsap.to( gsapApp, {
                xPercent: -100 * (gsapApp.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: App.current,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (gsapApp.length - 1),
                        duration: 2,
                        delay: 0,
                        inertia: false
                    },
                    end: "+=" + App.current?.offsetWidth
                }
            } );
        }
    }, [] )

    const containerStyle = {
        width: windowWidth,
        height: windowHeight,
        display: 'flex'
    }

    const mobileContainerStyle = {
        width: windowWidth,
        height: windowHeight,
        display: 'flex'
    }

    return (
        <AnimatePresence>
            <div className="App" ref={ App }>
                <div style={ windowWidth > 1000 ? containerStyle : mobileContainerStyle } className="container">
                    <Home/>
                </div>
                <div style={ containerStyle } className="container">
                    <Historique/>
                </div>
                <div style={ containerStyle } className="container">
                    <WebMotion/>
                </div>
                <div style={ containerStyle } className="container">
                    <ArianeGroup/>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default App;
