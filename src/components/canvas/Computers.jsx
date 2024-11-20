import React, {Suspense, useEffect , useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = (Mobile) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
      <mesh>
        <hemisphereLight intensity={0.5} groundColor="black"/>
        <pointLight intensity={5}/>
        <spotLight position={[10,20,20]}  angle={1} 
        penumbra={1} intensity={5} castShadow shadow-mapSize={1024} />
       
        <primitive object={computer.scene}
        scale={Mobile ? 0.7 : 0.75}
        position= { Mobile ? [0,-3,-2.2] : [0,-4,-1.5]}
        rotation={[-0.01, -0.2, -0.1]}
         />
      </mesh>
  )
}

const ComputersCanvas = () => {
  const [Mobile, setMobile] = useState(false)
  useEffect(() => {
const mediaQuery = window.matchMedia('(max-width:500px)')
setMobile(mediaQuery.matches);
const handelMediaQuseryChange = (e)=>{
  setMobile(e.matches);
}
mediaQuery.onchange = handelMediaQuseryChange('chage', handelMediaQuseryChange)
return() =>{
  mediaQuery.removeEventListener('change', handelMediaQuseryChange)
}

  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers Mobile={Mobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;