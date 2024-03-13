import { useState, useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import {
  fetchCartoons,
  fetchMovies,
  fetchSerials,
} from '../../store/itemsSlice'
import MainPageItems from '../components/ItemsComponents/MainPageItems'
import Footer from '../components/FooterComponents/Footer'

const MainPage = () => {
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMovies())
      await dispatch(fetchSerials())
      await dispatch(fetchCartoons())
      setLoading(true)
    }
    fetchData()
  }, [dispatch])

  if (!loading) {
    return null
  }

  return (
    <div>
      <MainPageItems />
      <Footer />
    </div>
  )
}

export default MainPage
