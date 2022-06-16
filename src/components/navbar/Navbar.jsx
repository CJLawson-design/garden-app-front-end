import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css';
import MobileMenu from './MobileMenu'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    // Hamburger menu mobile view
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return true
        }
    }

    return (
        <header className="navbar">
            <div className="container-default">
                <nav className="navbar-content-wrapper">

                {/* Logo */}
                    <div className="top-nav">
                        <div className="logo-container">
                            <img src={logo} alt="" className="logo"/>
                        </div>

                        {/* Hamburger menu for mobile and tablet */}
                        <div className="hamburger-menu" onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen)
                            console.log(mobileMenuOpen)}
                            }>

                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </div>

                <MobileMenu mobileMenuOpen={mobileMenuOpen}/>
                
            
                </nav>

                {/* <nav className="navbar-wrapper">
                    <ul className="navbarListItems">
                        <li className="navbarListItem push-left" onClick={() => navigate('/')}>  
                            <img src={logo} alt="" className="logo"/> 
                        </li>

                        <div className="hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>

                        <li className="navbarListItem" onClick={() => navigate('/')}>
                            <p>
                               Farms & Gardens 
                            </p>
                        </li>

                        <li className="navbarListItem" onClick={() => navigate('/')}>
                            <p>
                                Farmer's Markets
                            </p>
                        </li>

                        <li className="navbarListItem" onClick={() => navigate('/')}>
                            <p>
                                Resources
                            </p>
                        </li>
                        <li className="navbarListItem push-right" onClick={() => navigate('/')}>  
                            <p>Log In</p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/')}> 
                            <p>Sign Up</p>
                        </li>
                    </ul>
                </nav> */}
            </div>          
        </header>
    ) 
}

export default Navbar




// TODO 
//  Find what breakpoint to hide nav items and show hamburger menu
//  Keep Sign Up button visible on mobile beside hamburger menu