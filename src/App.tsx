import { MutableRefObject, useEffect, useRef, useState } from 'react'
import './App.scss'
import Home from "./Layouts/Home";
import { AnimatePresence } from "framer-motion";
import Historique from "./Layouts/Historique";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mame from "./Components/Mame/Mame";
import WebMotion from "./Components/WebMotion/WebMotion";
import ArianeGroup from "./Components/ArianeGroup/ArianeGroup";

gsap.registerPlugin( ScrollTrigger );

const App = () => {
    const App = useRef<HTMLDivElement | null>( null )

    useEffect( () => {
        let gsapApp = gsap.utils.toArray( '.container' )

        gsap.to( gsapApp, {
            xPercent: -100 * (gsapApp.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: App.current,
                pin: true,
                scrub: 1,
                snap: 1 / (gsapApp.length - 1),
                end: "+=" + App.current?.offsetWidth
            }
        } );

    }, [] )

    return (
        <AnimatePresence>
            <div className="App" ref={ App }>
                <div className="container">
                    <Home/>
                </div>
                <div className="container">
                    <Historique/>
                </div>
                <div className="container">
                    <Mame />
                </div>
                <div className="container">
                    <WebMotion/>
                </div>
                <div className="container">
                    <ArianeGroup />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default App
