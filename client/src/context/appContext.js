import { useReducer, createContext, useContext } from 'react'
import { DISPLAY_MESSAGE, CLEAR_MESSAGE, DISPLAY_MOVES, CLEAR_MOVES, DISPLAY_SWITCH, CLEAR_SWITCH } from './actions'
import reducer from './reducer'
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')
const initialState = {
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    messageBoxMode: null,
    message: '',
}

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayMessage = async(message) => {
        console.log(message)
        dispatch({ type: DISPLAY_MESSAGE, payload: message})
        // const clear = setInterval(()=>{
        //     clearInterval(clear)
        //     displayMoves()
        // }, 2000)
    }

    const clearMessage = async() => {
        dispatch({ type: CLEAR_MESSAGE})
    }

    const displayMoves = async() => {
        dispatch({ type: DISPLAY_MOVES})
    }

    const clearMoves = async() => {
        dispatch ({ type: CLEAR_MOVES})
    }

    const displaySwitch = async() => {
        dispatch({ type: DISPLAY_SWITCH})
    }

    const clearSwitch = async() => {
        dispatch({ type: CLEAR_SWITCH})
    }

    return <AppContext.Provider value={{...state, displayMessage, clearMessage, displayMoves, clearMoves, displaySwitch, clearSwitch}}>{children}</AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }