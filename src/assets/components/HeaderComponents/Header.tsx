import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AuthorizationIcon from './AuthorizationIcon'
import Navigation from './Navigation'
import Search from './Search'
import Footer from '../FooterComponents/Footer'
import { useAppDispatch } from '../../../store/hooks'
import {
  fetchCartoons,
  fetchMovies,
  fetchSerials,
} from '../../../store/itemsSlice'

const Header = () => {
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMovies())
      await dispatch(fetchSerials())
      await dispatch(fetchCartoons())
      setLoading(false)
    }
    fetchData()
  }, [dispatch])

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
      {!loading && (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  )
}

export default Header
