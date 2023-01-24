import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useControls } from 'leva'

const Inside = () => {

    const cubeRef = useRef()

    useFrame((state, delta) =>
        {
            cubeRef.current.rotation.y += 0.01,
            cubeRef.current.rotation.z += 0.005
        }
    )

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 5}
                maxAzimuthAngle={Math.PI / 5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI - Math.PI / 2.15}
            />

            <ambientLight intensity={0.05} color={0xFFFFFF} />
            <pointLight castShadow position={[1, 1, 1]} color={0xF5F4FE} intensity={1} />

            <Float speed={3}>
                <Text
                    font='/fonts/GrandSlang-Roman.woff'
                    fontSize={0.5}
                    color={0x0E065C}
                    maxWidth={5}
                    textAlign={'center'}
                    lineHeight={1}>
                    You can buy and sell NFT here
                </Text>
            </Float>

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={5} >
                <planeGeometry />
                <meshStandardMaterial color={0x857BDA}/>
            </mesh>

            <mesh ref={cubeRef} scale={[1, 2, 1]} position={[0, 1, -3]} >
                <coneGeometry />
                <meshStandardMaterial color={0x61F570} />
            </mesh>
        </>
    )
}

export default Inside