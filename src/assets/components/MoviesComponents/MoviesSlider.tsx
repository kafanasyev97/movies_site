import MoviesItem from './MoviesItem'

const MoviesSlider = (props: any) => {
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

// import MoviesItem from './MoviesItem'
// import { forwardRef } from 'react'

// const MoviesSlider = forwardRef(function MoviesSlider(props: any, ref) {
//   console.log('vvvvvvvvvvvvvvv', ref)

//   return (
//     <div ref={props.ref} className="movies__items">
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//       <MoviesItem />
//     </div>
//   )
// })

// export default MoviesSlider
