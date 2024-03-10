import { useAppSelector } from '../../store/hooks'
import MoviesItem from '../components/ItemsComponents/MoviesItem'

const MoviesPage = () => {
  const movies = useAppSelector((state) => state.items.movies)

  return (
    <div className="container">
      <div className="movies-page-items">
        {movies.map((item) => (
          <MoviesItem
            id={item.id}
            key={item.id}
            name={item.name}
            year={item.year}
            imagePath={item.imagePath}
            genre={item.genre}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesPage
