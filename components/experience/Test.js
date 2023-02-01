import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Test = () => {

    const modelRef = useRef()

    // useFrame((state, delta) =>
    //     {
    //         modelRef.current.rotation.y -= 0.002,
    //         modelRef.current.rotation.z += 0.001
    //     }
    // )
    
    const planet = useLoader(GLTFLoader, '/outside/planet/planet.gltf')
    const planet_texture = useTexture({
        map: '/outside/planet/textures/planet_color.jpg',
        displacementMap: '/outside/planet/textures/planet_normal.jpg',
        rougnessMap: '/outside/planet/textures/planet_roughness.png'
    })

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 5}
                maxAzimuthAngle={Math.PI / 5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI - Math.PI / 2.15}
            />

            <ambientLight intensity={0.5} color={'#ffffff'} />
            <pointLight castShadow position={[0, 0, -50]} color={'#00ff00'} intensity={0.25} />
            <pointLight castShadow position={[-3, 0, 5]} color={'#ff0000'} intensity={0.25} />

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

            <mesh>
                <primitive object={planet.scene} />
                <meshStandardMaterial {...planet_texture} />
            </mesh>
        </>
    )
}

export default Test