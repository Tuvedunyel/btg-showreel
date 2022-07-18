import { FC, useEffect, useRef, useState } from 'react';

const StarsBackground: FC<{ inView: boolean }> = ( { inView } ) => {
    const starsBackgroundContainer = useRef<HTMLDivElement | null>( null )
    const [ step, setStep ] = useState( 0 );
    const [ posY, setPosY ] = useState( 0 );

    useEffect( () => {
        if (inView) {
            if (step == 19 || posY >= 21600) {
                setStep( 0 );
                setPosY( 0 );
            }
            setTimeout( () => {
              if (starsBackgroundContainer.current) {
                setStep( step + 1 );
                setPosY( posY + 1080 )
                starsBackgroundContainer.current.style.backgroundPosition = `0 -${ posY }px`;
              }
            }, 200 )
        }
    }, [ step, inView ] )

    return (
        <>
            { inView && <div ref={ starsBackgroundContainer } className='racing-car__star'></div> }
        </>

    );
};

export default StarsBackground;
