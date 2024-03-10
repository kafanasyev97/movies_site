import { RefObject } from 'react'
import MoviesItem from './Item'
import { Item } from '../../../types/types'

type Props = {
  items: Item[]
  sliderRef: RefObject<HTMLDivElement>
}

const ItemsSlider = (props: Props) => {
  return (
    <div ref={props.sliderRef} className="movies__items">
      {props.items.map((item) => (
        <MoviesItem
          id={item.id}
          key={item.id}
          name={item.name}
          year={item.year}
          imagePath={item.imagePath}
          genre={item.genre}
          category={item.category}
        />
      ))}
    </div>
  )
}

export default ItemsSlider
