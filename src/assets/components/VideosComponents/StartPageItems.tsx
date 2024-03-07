import Movies from './Movies'
import { Suspense, useEffect, useState } from 'react'
import axios from 'axios'

const StartPageItems = () => {
  const moviesURL = 'http://localhost:3001/movies'
  const serialsURL = 'http://localhost:3001/serials'
  const cartoonsURL = 'http://localhost:3001/cartoons'

  const getData = async (url: string, func: any) => {
    const { data } = await axios.get(url)
    func(data)
  }

  const [movies, setMovies] = useState([])
  const [serials, setSerials] = useState([])
  const [cartoons, setCartoons] = useState([])

  useEffect(() => {
    getData(moviesURL, setMovies)
    getData(serialsURL, setSerials)
    getData(cartoonsURL, setCartoons)
  }, [])
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
