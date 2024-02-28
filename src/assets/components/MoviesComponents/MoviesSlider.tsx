import { RefObject } from 'react'
import MoviesItem from './MoviesItem'
import { VideoItem } from './ItemsList'

type Props = {
  items: VideoItem[]
  sliderRef: RefObject<HTMLDivElement>
}

const MoviesSlider = (props: Props) => {
  return (
    <div ref={props.sliderRef} className="movies__items">
      {props.items.map((item) => (
        <MoviesItem
          key={item.id}
          name={item.name}
          year={item.year}
          path={item.imagePath}
          genre={item.genre}
        />
      ))}
    </div>
  )
}

export default MoviesSlider
