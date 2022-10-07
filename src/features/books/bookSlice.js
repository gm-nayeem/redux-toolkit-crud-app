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
        }
    }
})

export const { showBooks, addBook } = bookSlice.actions
export default bookSlice.reducer