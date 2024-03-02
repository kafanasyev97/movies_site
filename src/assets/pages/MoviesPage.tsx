import { movies } from '../components/VideosComponents/ItemsList'
import MoviesItem from '../components/VideosComponents/MoviesItem'

const MoviesPage = () => {
  return (
    <div className="container">
      <div className="movies-page-items">
        {movies.map((item) => (
          <MoviesItem
            id={item.id}
            key={item.id}
            name={item.name}
            year={item.year}
            path={item.imagePath}
            genre={item.genre}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesPage
