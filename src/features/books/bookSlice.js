import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    books: [
        {
            id: uuidv4(),
            title: 'Bangla',
            author: 'Nayeem'
        },
        {
            id: uuidv4(),
            title: 'English',
            author: 'Golam Mostafa'
        }
    ]
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const {id, title, author} = action.payload
            const isBookExist = state.books.filter(book => book.id == id)
            if(isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        }
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions
export default bookSlice.reducer