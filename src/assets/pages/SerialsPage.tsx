import { serials } from '../components/VideosComponents/ItemsList'
import MoviesItem from '../components/VideosComponents/MoviesItem'

const SerialsPage = () => {
  return (
    <div className="container">
      <div className="movies-page-items">
        {serials.map((item) => (
          <MoviesItem
            key={item.id}
            name={item.name}
            year={item.year}
            path={item.imagePath}
            genre={item.genre}
          />
        ))}
      </div>
    </div>
  )
}

export default SerialsPage
