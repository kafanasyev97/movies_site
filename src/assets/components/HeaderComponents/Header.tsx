import { Link, Outlet } from 'react-router-dom'
import AuthorizationIcon from './AuthorizationIcon'
import Navigation from './Navigation'
import Search from './Search'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="first">
              <div className="site_name">
                <Link to="/" className="navLink">
                  Гром
                </Link>
              </div>
              <Navigation />
            </div>
            <div className="second">
              <Search />
              <AuthorizationIcon />
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header
