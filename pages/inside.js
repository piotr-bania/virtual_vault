import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Inside from '../components/experience/Inside'

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

            <main>
                <Canvas shadows>
                    <Suspense fallback={null}>
                        <Inside />
                    </Suspense>
                </Canvas>
            </main>
        </>
    )
}