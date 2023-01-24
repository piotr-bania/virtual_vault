import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='navbar'>
            <li>
                <Link href="/">Outside</Link>
                <Link href="/inside">Inside</Link>
            </li>
        </div>
    )
}

export default Navbar