import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import { deleteBook } from './bookSlice'

const BooksView = () => {

  const books = useSelector(state => state.bookReducer.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  return (
    <div>
        <h2>Lits of Books</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              books && books.map(book => {
                const {id, title, author} = book
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <button>Edit</button>
                      <button onClick={() => handleDeleteBook(id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default BooksView