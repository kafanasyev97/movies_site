import Items from './ItemsBlock'
import { useAppSelector } from '../../../store/hooks'

const MainPageItems = () => {
  const movies = useAppSelector((state) => state.items.movies)
  const serials = useAppSelector((state) => state.items.serials)
  const cartoons = useAppSelector((state) => state.items.cartoons)

  return (
    <div>
      <Items url="movies" items={movies} name="Фильмы" />
      <Items url="serials" items={serials} name="Сериалы" />
      <Items url="cartoons" items={cartoons} name="Мультфильмы" />
    </div>
  )
}

export default MainPageItems
