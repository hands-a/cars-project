import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';

const DynamicCarModel = ({ modelPath, ...props }) => {

  const { scene } = useGLTF(modelPath);
    useLayoutEffect(() => {
    scene.traverse((obj) => {
        if (obj.isMesh) { 
        obj.material.roughness = 0.3;
        obj.material.metalness = 0.5;
        }
    });
    }, [scene]);

    return (
    <primitive 
        object={scene} 
            {...props} 
    />
    );
};

export default DynamicCarModel;