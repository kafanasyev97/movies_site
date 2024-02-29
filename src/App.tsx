import React from 'react'
import MainPage from './assets/pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesPage from './assets/pages/MoviesPage'
import SerialsPage from './assets/pages/SerialsPage'
import CartoonsPage from './assets/pages/CartoonsPage'
import Header from './assets/components/HeaderComponents/Header'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="serials" element={<SerialsPage />} />
          <Route path="cartoons" element={<CartoonsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
