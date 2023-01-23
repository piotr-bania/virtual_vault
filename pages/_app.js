import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }) {
    return (
        <Layout>
            <div>
                <AnimatePresence initial={true} mode={'wait'}>
                    <Component key={router.pathname} {...pageProps} />
                </AnimatePresence>
            </div>
        </Layout>
    )
}

export default MyApp