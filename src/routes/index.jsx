import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// navbar
import Navbar from '../layouts/Navbar'

// footer
import Footer from '../layouts/Footer'

// books
import AddBook from '../features/books/AddBook'
import EditBook from '../features/books/EditBook'
import BooksView from '../features/books/BooksView'

// pages
import Error from '../pages/Error'
import Home from '../pages/Home'

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/show-books' element={<BooksView />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/edit-book' element={<EditBook />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Index