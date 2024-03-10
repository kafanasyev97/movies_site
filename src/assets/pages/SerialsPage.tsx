import { useAppSelector } from '../../store/hooks'
import MoviesItem from '../components/ItemsComponents/MoviesItem'

const SerialsPage = () => {
  const serials = useAppSelector((state) => state.items.serials)

  return (
    <div className="container">
      <div className="movies-page-items">
        {serials.map((item) => (
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

export default SerialsPage
