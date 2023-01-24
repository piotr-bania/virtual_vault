import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='navbar'>
            <li>
                <Link href="/">Go back outside</Link>
                <Link className='blink' href="/main_hall">Enter the Museum</Link>
                <Link href="/marketplace">Marketplace</Link>
                <Link href="/help">Help</Link>
            </li>
        </div>
    )
}

export default Navbar