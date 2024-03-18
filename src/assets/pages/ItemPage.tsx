import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { useAuth } from '../userHooks/useAuth'
import { useEffect } from 'react'

const ItemPage = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) navigate('/login')
  }, [navigate, isAuth])

  const movies = useAppSelector((state) => state.items.movies)
  const serials = useAppSelector((state) => state.items.serials)
  const cartoons = useAppSelector((state) => state.items.cartoons)

  const { id, category } = useParams()
  if (!id) return null

  let items
  if (category === 'movies') items = movies
  else if (category === 'serials') items = serials
  else items = cartoons

  const item = items.find((el) => el.id === id)

  if (!item) return null
  const { name, imagePath, genre, year, description } = item

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
