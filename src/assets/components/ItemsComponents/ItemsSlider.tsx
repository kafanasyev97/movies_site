import { RefObject } from 'react'
import Item from './Item'
import { Item as ItemType } from '../../../types/types'

type Props = {
  items: ItemType[]
  sliderRef: RefObject<HTMLDivElement>
}

const ItemsSlider = (props: Props) => {
  return (
    <div ref={props.sliderRef} className="movies__items">
      {props.items.map((item) => (
        <Item
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
