import React from 'react';
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const FirstYearSphere = () => {


    return (
        <Sphere onPointerOver={ e => console.log(e) } visible args={[1, 100, 200]} scale={2.5} >
            <MeshDistortMaterial color="#E3775B" attach="material" distort={0.3} speed={1.5} roughness={0}/>
        </Sphere>
    );
};

export default FirstYearSphere;
