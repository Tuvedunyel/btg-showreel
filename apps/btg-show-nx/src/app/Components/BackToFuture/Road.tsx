import { FC, useEffect, useRef, useState } from "react";

const Road: FC<{ inView: boolean }> = ( { inView } ) => {
  const roadContainer = useRef<HTMLDivElement | null>( null );
  const [ step, setStep ] = useState( 0 );
  const [ posX, setPosX ] = useState( -1800 );

  const reset = () => {
    if (step == 4 || posX >= 50) {
      setStep( 0 );
      setPosX( -1800 );
    }
  };

  const sequence = async () => {
    await reset();
    setTimeout( () => {
      if (roadContainer.current) {
        setStep( step + 1 );
        setPosX( posX + 370 );
        roadContainer.current.style.backgroundPosition = `${ posX }px 0`;
      }
    }, 40 );
  };

  useEffect( () => {
    if (inView) {
      sequence();
    }
  }, [ step, inView ] );

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
