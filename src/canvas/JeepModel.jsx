import { useGLTF } from '@react-three/drei';

const JeepModel = (props) => {
  const { scene } = useGLTF('/models/jeep.glb');

  return (
    <primitive
      object={scene}
      scale={20}
      position={[0, -2, 0]}
      {...props}
    />
  );
};

export default JeepModel;