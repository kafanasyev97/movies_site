import MoviesSlider from './MoviesSlider'

const Movies = () => {
  return (
    <article className="movies">
      <div className="container">
        <div className="movies__container">
          <div className="movies__title">
            <b>Фильмы</b>
          </div>
          <MoviesSlider />
        </div>
      </div>
    </article>
  )
}

export default Movies
