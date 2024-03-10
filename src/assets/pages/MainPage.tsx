import { useState, useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import {
  fetchCartoons,
  fetchMovies,
  fetchSerials,
} from '../../store/itemsSlice'
import MainPageItems from '../components/ItemsComponents/MainPageItems'

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
    <div className="App">
      <MainPageItems />
    </div>
  )
}

export default MainPage
