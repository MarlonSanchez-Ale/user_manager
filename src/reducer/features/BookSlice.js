import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid"

const initialState = [
    {
        id: v4(),
        title: "El Pulgarcito",
        author: "Chema Perez",
        description: "Libro para niños que narra las aventuras del pulgarcito",
        Category: "History",
        date_publication: "20/03/1998"
    },
    {
        id: v4(),
        title: "El Principito",
        author: "Juan Perez",
        description: "Libro para niños que narra las aventuras del principito",
        Category: "History",
        date_publication: "20/03/1998"
    },
    {
        id: v4(),
        title: "Las Aventuras de Chilindala",
        author: "Juan Perez",
        description: "Libro para niños que narra las aventuras del principito",
        Category: "History",
        date_publication: "20/03/1998"
    },
    {
        id: v4(),
        title: "Una novela de locos",
        author: "Juan Ambrosio",
        description: "Novela comica que narra la relación de unos recien casados.",
        Category: "Novela",
        date_publication: "20/03/1998"
    }
]

export const BookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
        editBook: (state, action) =>  {
            const { id, title, author , description, date_publication } = action.payload

            const foundVet = state.find(book => book.id === id)

            if (foundVet) {
                foundVet.title = title
                foundVet.author = author
                foundVet.description = description
                foundVet.date_publication = date_publication
            }
        },
        editState: (state, action) => {

        },
        deteleBook: (state, action) => {
            const bookFound = state.find(book => book.id === action.payload)

            if (bookFound) {
                state.splice(state.indexOf((bookFound), 1))
            }
        },
        deleteAll: (state, action) => {
            state.splice(0, state.length)
        }
    }
})

export const {addBook, editBook, editState, deteleBook, deleteAll} = BookSlice.actions;
export default BookSlice.reducer