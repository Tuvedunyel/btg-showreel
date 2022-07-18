import { FC } from 'react';
import './WebMotion.scss'
import Date from "./Date";
import AutoTyping from "./AutoTyping";
import { useInView } from "react-intersection-observer";

const WebMotion: FC = () => {
    const [ ref, inView ] = useInView( { threshold: 0 } )

    return (
        <>
            <div ref={ ref } className="web-motion__dummy-ref"></div>
            <div className='WebMotion'>
                { inView && (
                    <>
                        <Date view={inView} />
                        <AutoTyping/>
                    </>
                ) }
            </div>
        </>
    );
};

export default WebMotion;
