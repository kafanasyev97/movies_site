import AuthorizationIcon from './AuthorizationIcon'
import Navigation from './Navigation'
import Search from './Search'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__container">
          <div className="first">
            <div className="site_name">Гром</div>
            <Navigation />
          </div>
          <div className="second">
            <Search />
            <AuthorizationIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
