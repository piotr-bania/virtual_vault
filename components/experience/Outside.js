import { useRef, Suspense } from 'react'
import { useFrame, Canvas, useLoader } from '@react-three/fiber'
import { Environment, useEnvironment } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useControls } from 'leva'

const Outside = () => {

    const cubeRef = useRef()

    useFrame((state, delta) =>
        {
            cubeRef.current.rotation.y += 0.01,
            cubeRef.current.rotation.z += 0.005
        }
    )

    return (
        <>
            <ambientLight />
            
            <mesh ref={cubeRef}>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    )
}

export default Outside