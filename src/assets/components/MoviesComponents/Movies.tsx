import { useRef } from 'react'
import MoviesSlider from './MoviesSlider'

const Movies = () => {
  let arrowLeft = useRef<HTMLDivElement>(null)
  let arrowRight = useRef<HTMLDivElement>(null)

  const viewScroll = () => {
    if (arrowLeft.current && arrowRight.current) {
      arrowLeft.current.style.display = 'block'
      arrowRight.current.style.display = 'block'
    }
  }

  const removeScroll = () => {
    if (arrowLeft.current && arrowRight.current) {
      arrowLeft.current.style.display = 'none'
      arrowRight.current.style.display = 'none'
    }
  }

  return (
    <article className="movies">
      <div
        onMouseLeave={removeScroll}
        onMouseMove={viewScroll}
        className="movies__container"
      >
        <div ref={arrowLeft} className="movies__hover-left">
          <img src="./images/left.png" alt="left" />
        </div>
        <div ref={arrowRight} className="movies__hover-right">
          <img src="./images/right.png" alt="right" />
        </div>
        <div className="movies__title">
          <b>Фильмы</b>
        </div>
        <MoviesSlider />
      </div>
    </article>
  )
}

export default Movies
