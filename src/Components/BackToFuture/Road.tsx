import { FC, useEffect, useRef, useState } from 'react';

const Road: FC<{ inView: boolean }> = ( { inView } ) => {
    const roadContainer = useRef<HTMLDivElement | null>( null );
    const [ step, setStep ] = useState( 0 );
    const [ posX, setPosX ] = useState( -1800 );

    useEffect( () => {
        if (inView) {
            if (posX == 50 || step == 4) {
                setStep( 0 );
                setPosX( -1800 );
            }
            setTimeout( () => {
                setStep( step + 1 );
                setPosX( posX + 370 )
                console.log( posX )
                roadContainer.current!.style.backgroundPosition = `${ posX }px 0`;
            }, 40 )
        }
    }, [ step, inView ] )

    return (
        <>
            { inView && (
                <section className="road">
                    <div ref={ roadContainer } className="ligne-route"></div>
                </section>
            ) }
        </>
    );
};

export default Road;
