import { Link } from 'react-router-dom'

type Props = {
  id: string | number
  name: string // Использовать utility types (pick или omit)
  path: string
  genre?: string
  year: number | string
  category: string
}

const MoviesItem = ({ id, name, path, genre, year, category }: Props) => {
  let url
  if (category === 'Фильмы') url = 'movies'
  else if (category === 'Сериалы') url = 'serials'
  else url = 'cartoons'

  return (
    <Link className="link-item" to={`/${url}/${id}`}>
      <div className="movies__item">
        <div className="item_img">
          <img className="ii-img" src={path} alt="iron-man" />
        </div>
        <div className="item_name">
          {name}: {genre} ({year})
        </div>
      </div>
    </Link>
  )
}

export default MoviesItem

// const MoviesItem = ({ name, path, genre, year }: Props) => {
//   return (
//     <div className="movies__item">
//       <div className="item_img">
//         <img className="ii-img" src={path} alt="iron-man" />
//       </div>
//       <div className="item_name">
//         {name}: {genre} ({year})
//       </div>
//     </div>
//   )
// }

// export default MoviesItem
