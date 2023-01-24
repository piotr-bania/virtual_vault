import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { motion as m } from 'framer-motion'

import Outside from '../components/experience/Outside'

const inter = Inter({ subsets: ['latin'] })

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
                <Canvas>
                    <Suspense fallback={null}>
                        <Outside />
                    </Suspense>
                </Canvas>
            </m.main>
        </>
    )
}