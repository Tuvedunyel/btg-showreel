import { FC, useEffect, useRef, useState } from 'react';

const StarsBackground: FC = () => {
    const starsBackgroundContainer = useRef<HTMLDivElement | null>( null )
    const [ step, setStep ] = useState( 0 );
    const [ posY, setPosY ] = useState( 0 );

    useEffect( () => {
        if (step == 20 || posY >= 21600) {
            setStep( 0 );
            setPosY( 0 );
        }
        setTimeout( () => {
            setStep( step + 1 );
            setPosY( posY + 1080 )
            starsBackgroundContainer.current!.style.backgroundPosition = `0 -${ posY }px`;
        }, 200 )
    }, [step] )

    return (
        <div ref={ starsBackgroundContainer } className='racing-car__star'></div>
    );
};

export default StarsBackground;
