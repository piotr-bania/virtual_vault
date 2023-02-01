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
    
    const terrain = useLoader(GLTFLoader, '/outside/terrain/landscape.gltf')
    const terrain_texture = useTexture({
        map: '/outside/textures/terrain_diff.jpg',
        displacementMap: '/outside/textures/terrain_bump.png',
        rougnessMap: '/outside/textures/terrain_roughness.png'
    })
    
    const water = useLoader(GLTFLoader, '/outside/water/water.gltf')
    const water_texture = useTexture({
        displacementMap: '/outside/textures/water_bump.png',
        rougnessMap: '/outside/textures/water_transmission.png'
    })

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 2.5}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI - Math.PI / 2}
                speed={0.01}
                autoRotate={true}
                autoRotateSpeed={0.05}
            />

            <ambientLight intensity={0.05} color={'#664E78'} />
            <pointLight castShadow position={[0, 0, -50]} color={'#D5A7CA'} intensity={0.5} />
            <pointLight castShadow position={[-3, 0, 5]} color={'#343B47'} intensity={0.5} />

            <Float speed={1}>
                <Text
                    font='/fonts/GrandSlang-Roman.woff'
                    fontSize={0.3}
                    color={'#EEC1C2'}
                    maxWidth={3}
                    textAlign={'center'}
                    lineHeight={1}
                    position={[0, 0.75, 3]}
                    >                        
                    Use top menu to start the experience
                </Text>
            </Float>

            <mesh>
                <primitive object={terrain.scene} />
                <meshStandardMaterial {...terrain_texture} roughness={0.75} />
            </mesh>

            <mesh>
            <primitive object={water.scene} />
                <meshStandardMaterial {...water_texture} color={'#242D37'} metalness={0.1} roughness={0.1} />
            </mesh>
        </>
    )
}

export default Test