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
          id={item.id}
          key={item.id}
          name={item.name}
          year={item.year}
          path={item.imagePath}
          genre={item.genre}
          category={item.category}
        />
      ))}
    </div>
  )
}

export default MoviesSlider
