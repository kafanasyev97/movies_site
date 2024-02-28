import { RefObject } from 'react'
import MoviesItem from './MoviesItem'

type Props = {
  sliderRef: RefObject<HTMLDivElement>
}

const MoviesSlider = (props: Props) => {
  return (
    <div ref={props.sliderRef} className="movies__items">
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
      <MoviesItem />
    </div>
  )
}

export default MoviesSlider
