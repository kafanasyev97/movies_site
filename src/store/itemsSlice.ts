import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Item, ItemList } from '../types/types'

export const fetchMovies = createAsyncThunk<Item[], void>(
  'items/fetchMovies',
  async function () {
    const { data } = await axios.get('http://localhost:3001/movies')
    return data
  }
)

export const fetchSerials = createAsyncThunk<Item[], void>(
  'items/fetchSerials',
  async function () {
    const { data } = await axios.get('http://localhost:3001/serials')
    return data
  }
)

export const fetchCartoons = createAsyncThunk<Item[], void>(
  'items/fetchCartoons',
  async function () {
    const { data } = await axios.get('http://localhost:3001/cartoons')
    return data
  }
)

const initialState: ItemList = {
  movies: [],
  serials: [],
  cartoons: [],
}

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })

    builder.addCase(fetchSerials.fulfilled, (state, action) => {
      state.serials = action.payload
    })

    builder.addCase(fetchCartoons.fulfilled, (state, action) => {
      state.cartoons = action.payload
    })
  },
})

export default itemSlice.reducer
