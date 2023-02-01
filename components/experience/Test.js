import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture, Environment } from '@react-three/drei'
import { useControls } from 'leva'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer, SSR, Bloom, LUT } from '@react-three/postprocessing'


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

    const { enabled, ...props } = useControls({
        enabled: true,
        temporalResolve: true,
        STRETCH_MISSED_RAYS: true,
        USE_MRT: true,
        USE_NORMALMAP: true,
        USE_ROUGHNESSMAP: true,
        ENABLE_JITTERING: true,
        ENABLE_BLUR: true,
        temporalResolveMix: { value: 0.9, min: 0, max: 1 },
        temporalResolveCorrectionMix: { value: 0.4, min: 0, max: 1 },
        maxSamples: { value: 0, min: 0, max: 1 },
        resolutionScale: { value: 1, min: 0, max: 1 },
        blurMix: { value: 0.2, min: 0, max: 1 },
        blurExponent: { value: 10, min: 0, max: 20 },
        blurKernelSize: { value: 1, min: 0, max: 10 },
        rayStep: { value: 0.5, min: 0, max: 1 },
        intensity: { value: 1, min: 0, max: 5 },
        maxRoughness: { value: 1, min: 0, max: 1 },
        jitter: { value: 0.3, min: 0, max: 5 },
        jitterSpread: { value: 0.25, min: 0, max: 1 },
        jitterRough: { value: 0.1, min: 0, max: 1 },
        roughnessFadeOut: { value: 1, min: 0, max: 1 },
        rayFadeOut: { value: 0, min: 0, max: 1 },
        MAX_STEPS: { value: 20, min: 0, max: 20 },
        NUM_BINARY_SEARCH_STEPS: { value: 6, min: 0, max: 10 },
        maxDepthDifference: { value: 10, min: 0, max: 10 },
        maxDepth: { value: 1, min: 0, max: 1 },
        thickness: { value: 10, min: 0, max: 10 },
        ior: { value: 1.45, min: 0, max: 2 }
      })

    return (
        <>
            <OrbitControls
                minAzimuthAngle={-Math.PI / 2.5}
                maxAzimuthAngle={Math.PI / 2.5}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI - Math.PI / 2}
                // autoRotate
                // autoRotateSpeed={-0.1}
                // enablePan={false}
                enableZoom={false}
            />

            <ambientLight intensity={0.05} color={'#30546A'} />

            <spotLight
                position={[5, 0, -5]}
                color={'#D5A7CA'}
                intensity={0.5}
            />

            <pointLight
                castShadow
                position={[-3, 0, 5]}
                color={'#F7EFF5'}
                intensity={0.25}
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            <directionalLight
                color={'#252C37'}
                intensity={0.25}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            <EffectComposer disableNormalPass>
                <SSR {...props} />
                <Bloom luminanceThreshold={0.5} mipmapBlur luminanceSmoothing={0} intensity={1.5} />
            </EffectComposer>

            {/* <Environment files={'/public/hdri/sandsloot_4k.hdr'} /> */}

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
                <primitive castShadow object={terrain.scene} />
                <meshStandardMaterial {...terrain_texture} roughness={0.75} />
            </mesh>

            <mesh>
            <primitive castShadow object={water.scene} />
                <meshStandardMaterial {...water_texture} color={'#30546A'} />
            </mesh>
        </>
    )
}

export default Test