import React from 'react';
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const FirstYearSphere = () => {

    return (
        <Sphere
            args={[1, 100, 200]} scale={2.5}
        >
            <MeshDistortMaterial
                attach="material"
                color="#E3775B"
                speed={1.5}
                distort={ 0.3}
                roughness={0.2}
            />
        </Sphere>

    )
        ;
};

export default FirstYearSphere;
