import { FC } from 'react';
import './WebMotion.scss'
import Date from "./Date";
import AutoTyping from "./AutoTyping";

const WebMotion: FC = () => {
    return (
        <div className='WebMotion'>
            <Date />
            <AutoTyping />
        </div>
    );
};

export default WebMotion;
