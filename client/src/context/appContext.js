import { useReducer, createContext, useContext } from 'react'
import reducer from './reducer'
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const initialState = {
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    
}

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }