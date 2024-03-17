export type Item = {
  id: number | string
  name: string
  imagePath: string
  year: number | string
  description: string
  category: string
  genre?: string
}

export type ItemList = {
  movies: Item[]
  serials: Item[]
  cartoons: Item[]
}

export type User = {
  email: string | null
  token: string | null
  id: string | null
}
