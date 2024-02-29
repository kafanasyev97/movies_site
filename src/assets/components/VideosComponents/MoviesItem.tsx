type Props = {
  name: string // Использовать utility types (pick или omit)
  path: string
  genre?: string
  year: number | string
}

const MoviesItem = ({ name, path, genre, year }: Props) => {
  return (
    <div className="movies__item">
      <div className="item_img">
        <img className="ii-img" src={path} alt="iron-man" />
      </div>
      <div className="item_name">
        {name}: {genre} ({year})
      </div>
    </div>
  )
}

export default MoviesItem
