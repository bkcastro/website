
import { Canvas } from '@react-three/fiber'
import { Physics, useBox, useCircle } from '@react-three/p2'
import { Vector3, Color } from 'three'

function Box() {
  const [ref] = useBox(() => ({ mass: 0, position: [0, -2] }))
  return (
    <mesh ref={ref}>
      <boxGeometry />
    </mesh>
  )
}

function Ball(props) {
  const [ref] = useCircle(() => ({ mass: 1, ...props }))
  return (
    <mesh ref={ref}>
      <sphereGeometry />
      <meshBasicMaterial color={new Color(Math.random(), Math.random(), Math.random())} />
    </mesh>
  )
}

function Home() {
  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <Physics normalIndex={2}>
          <Box />
          <Ball position={[0, 2]} />
          <Ball position={[-2, 3]} />
          <Ball position={[1, 4]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default Home;
