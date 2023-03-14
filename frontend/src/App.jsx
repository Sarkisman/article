import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import NewArticle from './Pages/NewArticle/NewArticle'
import FullArticle from './Pages/FullArticle/FullArticle'
import Navbar from './ui/Navbar/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/articles/:id" element={<FullArticle />} />
      </Routes>
    </>
  )
}
