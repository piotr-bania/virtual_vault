import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div>
            { children }
            <Navbar />
            <Footer />
        </div>
    )
}

export default Layout