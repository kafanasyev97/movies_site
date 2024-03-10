import { Link } from 'react-router-dom'
import { Item as ItemType } from '../../../types/types'

type Props = Omit<ItemType, 'description'>

const Item = ({ id, name, imagePath, genre, year, category }: Props) => {
  let url
  if (category === 'Фильмы') url = 'movies'
  else if (category === 'Сериалы') url = 'serials'
  else url = 'cartoons'

  return (
    <Link className="link-item" to={`/${url}/${id}`}>
      <div className="movies__item">
        <div className="item_img">
          <img className="ii-img" src={imagePath} alt={name} />
        </div>
        <div className="item_name">
          {name}: {genre} ({year})
        </div>
      </div>
    </Link>
  )
}

export default Item
