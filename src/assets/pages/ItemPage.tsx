import { useParams } from 'react-router-dom'
import {
  movies,
  serials,
  cartoons,
} from '../components/VideosComponents/ItemsList'

const ItemPage = () => {
  const { id, category } = useParams()
  if (!id) return null

  let items
  if (category === 'movies') items = movies
  else if (category === 'serials') items = serials
  else items = cartoons

  const item = items.find((el) => el.id === parseInt(id))
  if (!item) return null
  const { name, imagePath, genre, year, description } = item
  console.log(imagePath)

  return (
    <div className="item-page">
      <div className="container">
        <div className="item-page__block-img">
          <img className="item-page__img" src={imagePath} alt="iron-man" />
        </div>
        <div className="item-page__main-info">
          {name} ({year})
        </div>
        <div className="item-page__main-info">{genre}</div>
        <div className="item-page__description">{description}</div>
      </div>
    </div>
  )
}

export default ItemPage
