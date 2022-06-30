import { FC } from 'react';
import './WebMotion.scss'
import Date from "./Date";
import AutoTyping from "./AutoTyping";
import { useInView } from "react-intersection-observer";

const WebMotion: FC = () => {
    const [ ref, inView ] = useInView( { threshold: 0 } )

    return (
        <div ref={ ref } className='WebMotion'>
            { inView && (
                <>
                    <Date/>
                    <AutoTyping/>
                </>
                ) }
        </div>
    );
};

export default WebMotion;
