import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Outside = () => {

    const modelRef = useRef()

    // useFrame((state, delta) =>
    //     {
    //         modelRef.current.rotation.y -= 0.002,
    //         modelRef.current.rotation.z += 0.001
    //     }
    // )

    const model = useLoader(GLTFLoader, './outside/planet/planet.gltf')
    
    const planet = useLoader(GLTFLoader, './outside/test/planet.gltf')
    const planet_texture = useLoader(TextureLoader, '/outside/test/planet.jpg')
    
    const museum = useLoader(GLTFLoader, './outside/test/museum.gltf')
    const museum_texture = useLoader(TextureLoader, '/outside/test/museum.jpg')
    
    const ground = useLoader(GLTFLoader, './outside/test/ground.gltf')
    const ground_texture = useLoader(TextureLoader, '/outside/test/ground.jpg')

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 5}
                maxAzimuthAngle={Math.PI / 5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI - Math.PI / 2.15}
            />

            <ambientLight intensity={0.5} color={'#3A4257'} />
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

            {/* <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={5} >
                <planeGeometry />
                <meshStandardMaterial color={0x7161F5}/>
            </mesh> */}

            <primitive object={model.scene} ref={modelRef} position={[-1, 1, -1]} />

            {/* <mesh position={[0, 0, -3]} >
                <sphereGeometry />
                <meshStandardMaterial color={'#11ff00'}/>
            </mesh> */}
            
            {/* <mesh position={[1, 3, -5]} >
                <sphereGeometry />
                <meshStandardMaterial color={'#ff0011'}/>
            </mesh> */}

            <mesh position={[0, -1, -5]}>
                <primitive object={planet.scene} />
                <meshStandardMaterial map={planet_texture} />
            </mesh>

            <mesh position={[0, -1, -5]}>
                <primitive object={museum.scene} />
                <meshStandardMaterial map={museum_texture} />
            </mesh>

            <mesh position={[0, -1, -5]}>
                <primitive object={ground.scene} />
                <meshLambertMaterial map={ground_texture} />
            </mesh>
        </>
    )
}

export default Outside