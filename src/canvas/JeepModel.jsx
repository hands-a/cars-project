import { useGLTF } from '@react-three/drei';

const JeepModel = (props) => {
  // useGLTF: هو Hook بيقوم بتحميل ملف الـ 3D من المسار المحدد
  const { scene } = useGLTF('/models/jeep.glb');

  return (
    <primitive 
      object={scene}       
      scale={20}           // scale: لتكبير أو تصغير حجم العربية (1 = الحجم الأصلي)
      position={[0, -2, 0]} // position: تحديد مكان العربية في المحاور الثلاثة [x, y, z]
      {...props}           // props: عشان لو حبينا نمرر أي خصائص إضافية من ملف الـ Hero
    />
  );
};

export default JeepModel;