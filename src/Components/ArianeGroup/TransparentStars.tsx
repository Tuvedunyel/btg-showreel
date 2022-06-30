import { FC, useEffect, useRef, useState } from 'react';

const TransparentStars: FC< { inView: boolean } > = ({ inView }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [ step, setStep] = useState(0)
    const [posY, setPosY] = useState(0)

    useEffect( () => {
        if (inView) {
            if (step == 19 || posY >= 21600) {
                setStep( 0 );
                setPosY( 0 );
            }
            setTimeout( () => {
                setStep( step + 1 );
                setPosY( posY + 1080 )
                ref.current!.style.backgroundPosition = `0 -${ posY }px`;
            }, 200 )
        }
    }, [step, inView])

    return (
        <div ref={ref} className='transparent-stars'></div>
    );
};

export default TransparentStars;
