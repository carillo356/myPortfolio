import '../css/navbar.css'
import { Link } from "react-scroll";

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

    return (
      <>
      <div className='navbar-wrapper'>
        <div className='navbar-elements' >
              <div>Aaron.dev</div>
              <div className='navbar-routes'>
                {navRoutes.map(route => (
                  <Link activeClass="active" smooth spy to={route.page} duration={750}>
                  {route.title}
                  </Link>
                ))}
              </div>
          </div>
      </div>
      </>
    )
  }
  
export default NavBar
  