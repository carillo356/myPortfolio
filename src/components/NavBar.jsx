import '../css/navbar.css'
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState, useRef } from 'react'

function NavBar() {
    const navRoutes =  [
      {
        id: 1,
        title: "Home",
        page: "page-1"
      },
      {
        id: 2,
        title: "About Me",
        page: "page-2"
      },
      {
        id: 3,
        title: "Projects",
        page: "page-3"
      },
      {
        id: 4,
        title: "Contact",
        page: "page-4"
      }
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleClick() {
      if(!isMenuOpen) {
        setIsMenuOpen(prevValue => !prevValue)
      } else {
        setIsMenuOpen(prevValue => !prevValue)
      }
    }

    return (
      <>
        <div className='navbar-wrapper'>
          <div className='navbar-elements' >
                <div className={isMenuOpen ? 'navbar-open-title' : 'navbar-title'}>Aaron.dev</div>

                <nav className={isMenuOpen ? 'navbar-open-routes' : 'navbar-routes'}>
                  {navRoutes.map(route => (
                    <Link key={route.id} activeClass="active" smooth spy to={route.page} duration={750}>
                    {route.title}
                    </Link>
                    
                  ))}
                </nav>
                <button className="nav-btn" onClick={handleClick}><FaBars /></button>
            </div>
        </div>
      </>
    )
  }
  
export default NavBar
  