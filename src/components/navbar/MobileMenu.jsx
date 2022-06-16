import './Navbar.css';

function MobileMenu() {
    return (
        
        <div className="menu">
        <div className="nav-list-container push-left">
                <ul className="nav-list-items">
                    <li className="nav-list-item"><p>Home</p></li>
                    <li className="nav-list-item"><p>Farms & Gardens</p></li>
                    <li className="nav-list-item"><p>Farmer's Markets</p></li>
                    <li className="nav-list-item"><p>Resources</p></li>
                </ul>
            </div>

            <div className="nav-list-container right">
                <ul className="nav-list-items">
                    <li className="nav-list-item">Log In</li>
                    <li className="nav-list-item">Sign Up</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu