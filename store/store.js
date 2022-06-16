import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import userNormalReducer from './slices/userNormalSlice'
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['userNormal'],
}

const rootReducer = combineReducers({
    user: userReducer,
    userNormal: userNormalReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})

export const persistor = persistStore(store)
