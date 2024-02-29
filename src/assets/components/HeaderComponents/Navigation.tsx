import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="navItem">
          <Link to="/movies" className="navLink">
            Фильмы
          </Link>
        </li>
        <li className="navItem">
          <Link to="/serials" className="navLink">
            Сериалы
          </Link>
        </li>
        <li className="navItem">
          <Link to="/cartoons" className="navLink">
            Мультфильмы
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
