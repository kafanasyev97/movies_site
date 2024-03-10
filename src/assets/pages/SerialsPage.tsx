import { useAppSelector } from '../../store/hooks'
import Item from '../components/ItemsComponents/Item'

const SerialsPage = () => {
  const serials = useAppSelector((state) => state.items.serials)

  return (
    <div className="container">
      <div className="movies-page-items">
        {serials.map((item) => (
          <Item
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
