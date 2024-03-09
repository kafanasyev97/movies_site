import Movies from './Movies'
import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'

const StartPageItems = () => {
  const moviesURL = 'http://localhost:3001/movies'
  const serialsURL = 'http://localhost:3001/serials'
  const cartoonsURL = 'http://localhost:3001/cartoons'

  const getData = async (url: string, setFunc: any) => {
    const { data } = await axios.get(url)
    setFunc(data)
  }

  const [movies, setMovies] = useState([])
  const [serials, setSerials] = useState([])
  const [cartoons, setCartoons] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await getData(moviesURL, setMovies)
      await getData(serialsURL, setSerials)
      await getData(cartoonsURL, setCartoons)
      setLoading(true)
    }

    fetchData()
  }, [])

  if (!loading) {
    return null
  }
  return (
    <div>
      <Suspense fallback={<h1>LOADING!!!</h1>}>
        <Movies url="movies" items={movies} name="Фильмы" />
      </Suspense>
      <Movies url="serials" items={serials} name="Сериалы" />
      <Movies url="cartoons" items={cartoons} name="Мультфильмы" />
    </div>
  )
}

export default StartPageItems
