import { useRef } from 'react'
import MoviesSlider from './ItemsSlider'
import { Item } from '../../../types/types'
import { Link } from 'react-router-dom'

type Props = {
  items: Item[]
  name: string
  url: string
}

const Items: React.FC<Props> = ({ name, items, url }) => {
  const urlPath = `/${url}`
  const arrowLeft = useRef<HTMLDivElement>(null)
  const arrowRight = useRef<HTMLDivElement>(null)

  const sliderRef = useRef<HTMLDivElement>(null)

  const viewScroll = () => {
    if (arrowLeft.current && arrowRight.current) {
      arrowLeft.current.style.display = 'block'
      arrowRight.current.style.display = 'block'
    }
  }

  const hideScroll = () => {
    if (arrowLeft.current && arrowRight.current) {
      arrowLeft.current.style.display = 'none'
      arrowRight.current.style.display = 'none'
    }
  }

  const nextSlide = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft += 420
  }

  const prevSlide = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft -= 420
  }

  return (
    <article className="movies">
      <div
        onMouseLeave={hideScroll}
        onMouseMove={viewScroll}
        className="movies__container"
      >
        <div onClick={prevSlide} ref={arrowLeft} className="movies__hover-left">
          <img src="./images/left.png" alt="left" />
        </div>
        <div
          onClick={nextSlide}
          ref={arrowRight}
          className="movies__hover-right"
        >
          <img src="./images/right.png" alt="right" />
        </div>
        <div className="movies__title">
          <Link to={urlPath} className="navLink">
            <b>{name}</b>
          </Link>
        </div>
        <MoviesSlider items={items} sliderRef={sliderRef} />
      </div>
    </article>
  )
}

export default Items
