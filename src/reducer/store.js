import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import BookReducer from './features/BookSlice'
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['BookManager']
}

const rootReducer = combineReducers({
    BookManager: BookReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})