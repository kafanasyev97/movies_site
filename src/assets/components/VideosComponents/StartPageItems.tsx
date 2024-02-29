import Movies from './Movies'
import { movies, serials, cartoons } from './ItemsList'

const StartPageItems = () => {
  return (
    <div>
      <Movies url="movies" items={movies} name="Фильмы" />
      <Movies url="serials" items={serials} name="Сериалы" />
      <Movies url="cartoons" items={cartoons} name="Мультфильмы" />
    </div>
  )
}

export default StartPageItems
