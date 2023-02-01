import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'

const Outside = () => {

    const planetRef = useRef()

    // useFrame((state, delta) =>
    //     {
    //         modeplanetReflRef.current.rotation.y -= 0.002,
    //         planetRef.current.rotation.z += 0.001
    //     }
    // )
    
    const planet = useLoader(GLTFLoader, 'outside/planet/planet.gltf')
    const planet_color = useLoader(TextureLoader, 'outside/planet/planet_color.jpg')

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 5}
                maxAzimuthAngle={Math.PI / 5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI - Math.PI / 2.15}
            />

            <ambientLight intensity={0.05} color={'#3A4257'} />
            <pointLight castShadow position={[0, 0, -50]} color={'#ffffff'} intensity={0.05} />
            <pointLight castShadow position={[-3, 0, 5]} color={'#ffffff'} intensity={0.05} />

            <Float speed={3}>
                <Text
                    font='/fonts/GrandSlang-Roman.woff'
                    fontSize={0.5}
                    color={'#ffffff'}
                    maxWidth={5}
                    textAlign={'center'}
                    lineHeight={1}>
                    Use top menu to start the experience
                </Text>
            </Float>

            <mesh ref={planetRef}>
                <primitive object={planet.scene} />
                <meshStandardMaterial map={planet_color} />
            </mesh>
        </>
    )
}

export default Outside