import React from 'react'
import MainPage from './assets/pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesPage from './assets/pages/MoviesPage'
import SerialsPage from './assets/pages/SerialsPage'
import CartoonsPage from './assets/pages/CartoonsPage'
import Header from './assets/components/HeaderComponents/Header'
import ItemPage from './assets/pages/ItemPage'
import ErrorPage from './assets/pages/ErrorPage'
import SignUpPage from './assets/pages/SignUpPage'
import SignInPage from './assets/pages/SignInPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/:category/:id" element={<ItemPage />} />

          <Route path="serials" element={<SerialsPage />} />

          <Route path="cartoons" element={<CartoonsPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="login" element={<SignInPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} /> / исправить
      </Routes>
    </BrowserRouter>
  )
}

export default App
