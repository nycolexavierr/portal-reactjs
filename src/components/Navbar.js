import React, { useState } from 'react'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-containter">
                    <h1 className='navbar-container' >Logo</h1>
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item' >
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} > 
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu} > 
                                Services
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu} > 
                                Products
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} > 
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
