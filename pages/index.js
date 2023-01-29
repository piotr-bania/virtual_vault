import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { motion as m } from 'framer-motion'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Fog } from 'three'

import Outside from '../components/experience/Outside'

export default function Home() {
    return (
        <>
            <Head>
                <title>Virtual Vault | NFT Museum</title>
                <meta name="description" content="Virtual Vault | NFT Museum" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.main
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.25, ease: 'easeOut', delay: 0.25}}
            >
                <Canvas
                    onCreated={(state) => {
                        state.gl.setClearColor('#192933')
                        state.scene.fog = new Fog('#a282b0', 1, 25)
                    }}
                >
                    <Suspense fallback={null}>
                        <Outside />
                    </Suspense>
                </Canvas>
            </m.main>
        </>
    )
}