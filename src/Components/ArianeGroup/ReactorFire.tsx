import { FC, useEffect, useRef, useState } from 'react';

const ReactorFire: FC<{ inView: boolean }> = ( { inView } ) => {
    const ref = useRef<HTMLDivElement | null>( null )
    const [ step, setStep ] = useState( 0 )
    const [ posY, setPosY ] = useState( 0 )

    useEffect( () => {
        if (inView) {
            if (step <= 15) {
                setTimeout( () => {
                    setStep( step + 1 )
                    setPosY( posY + 1099.8 )
                    ref.current!.style.backgroundPosition = `0 -${ posY }px`
                }, 700 )
            } else if (step > 15) {
                ref.current!.style.display = 'none'
            }
        }
    }, [ step, inView ] )

    return (
        <div ref={ ref } className='reactor-fire'></div>
    );
};

export default ReactorFire;
