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
    <div className="movies__item">
      <div className="item_img">
        <img className="ii-img" src={imagePath} alt="iron-man" />
      </div>
      <div className="item_name">
        {name}: {genre} ({year}){description}
      </div>
    </div>
  )
}

export default ItemPage
