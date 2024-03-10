import Item from '../components/ItemsComponents/Item'
import { useAppSelector } from '../../store/hooks'

const CartoonsPage = () => {
  const cartoons = useAppSelector((state) => state.items.cartoons)

  return (
    <div className="container">
      <div className="movies-page-items">
        {cartoons.map((item) => (
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

export default CartoonsPage
