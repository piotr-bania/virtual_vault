import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float } from '@react-three/drei'
import { useControls } from 'leva'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Fog } from 'three'

const Outside = () => {

    const modelRef = useRef()

    useFrame((state, delta) =>
        {
            modelRef.current.rotation.y -= 0.002,
            modelRef.current.rotation.z += 0.001
        }
    )

    const model = useLoader(GLTFLoader, './outside/planet/planet.gltf')
    console.log(model)

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 5}
                maxAzimuthAngle={Math.PI / 5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI - Math.PI / 2.15}
            />

            <ambientLight intensity={0.05} color={0xFFFFFF} />
            <pointLight castShadow position={[-1, .5, 1]} color={0xF8C8FA} intensity={0.25} />
            <pointLight castShadow position={[-.25, 1.75, -.75]} color={0xFFFFFF} intensity={0.75} />

            <Float speed={3}>
                <Text
                    font='/fonts/GrandSlang-Roman.woff'
                    fontSize={0.5}
                    color={0x0E065C}
                    maxWidth={5}
                    textAlign={'center'}
                    lineHeight={1}>
                    Use top menu to start the experience
                </Text>
            </Float>

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={5} >
                <planeGeometry />
                <meshStandardMaterial color={0x7161F5}/>
            </mesh>

            <primitive object={model.scene} ref={modelRef} position={[-1, 1, -1]} />
        </>
    )
}

export default Outside