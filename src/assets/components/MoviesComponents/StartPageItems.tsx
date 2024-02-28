import Movies from './Movies'
import { movies, serials, cartoons } from './ItemsList'

const StartPageItems = () => {
  return (
    <div>
      <Movies items={movies} name="Фильмы" />
      <Movies items={serials} name="Сериалы" />
      <Movies items={cartoons} name="Мультфильмы" />
    </div>
  )
}

export default StartPageItems
