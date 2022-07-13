import { FC, useEffect, useState } from "react";

const WaterText: FC<{ title: string, classname: string, id: string[] }> = ( { title, classname, id } ) => {
  const [ currentTitle, setCurrentTitle ] = useState<string | null>( null );
  const windowWidth = window.innerWidth;

  const svgWidth = windowWidth > 1500 ? '574.558px' : windowWidth > 1400 ? '374.558px' : windowWidth > 500 ? '274.558px' : '200px';

  useEffect( () => {
    setCurrentTitle( title );
  }, [ title ] );

  return (
    <>
      <svg className={ `title-reveal ${ classname }` } version="1.1" xmlns="http://www.w3.org/2000/svg"
           width={svgWidth} height="120px" viewBox="0 0 574.558 120" enableBackground="new 0 0 574.558 120">
        <defs>
          <pattern id={ id[ 0 ] } width=".25" height="1.1" patternContentUnits="objectBoundingBox">
            <path fill="#000"
                  d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z" />
          </pattern>

          <text id={ id[ 1 ] } transform="matrix(1 0 0 1 -1.0684 116.7852)" fontFamily="'Exo'">{ currentTitle }</text>

          <mask id={ id[ 2 ] }>
            <use x="0" y="0" href={ `#${ id[ 1 ] }` } opacity="1" fill="#ffffff" />
          </mask>
        </defs>

        <use x="0" y="0" href={ `#${ id[ 1 ] }` } className="use" fill="transparent" />

        <rect className="water-fill" mask={ `url(#${ id[ 2 ] })` } fill={ `url(#${ id[ 0 ] })` } x="-400" y="0"
              width="1600"
              height="120" />

      </svg>
    </>

  );
};

export default WaterText;
