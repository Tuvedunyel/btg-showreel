import React, { FC, useState } from 'react';
import { Sphere } from "@react-three/drei";

const StarBackground: FC = () => {
    const horizontal = [ -4, -3, -2, -1, 0, 1, 2, 3, 4 ];
    const vertical = [ -2, -1, 0, 1, 2 ];
    const distance = [ -1, 0, 1, 2 ];
    const size = [ 0.01, 0.02 ];


    const spherePosition = () => {
        let random = Math.floor( Math.random() * horizontal.length );
        let random2 = Math.floor( Math.random() * vertical.length );
        let random3 = Math.floor( Math.random() * distance.length );
        console.log(random)
        return {
            x: horizontal[ random ],
            y: vertical[ random2 ],
            z: distance[ random3 ]
        }
    }

    const sphereSize = () => {
        let random = Math.floor( Math.random() * size.length );
        return size[ random ];
    }

    return (
        <>
            <Sphere args={ [ 1, 100, 200 ] }
                    position={ [ spherePosition().x, spherePosition().y, spherePosition().z ] }
                    scale={ sphereSize() }></Sphere>
        </>
    );
};

export default StarBackground;
