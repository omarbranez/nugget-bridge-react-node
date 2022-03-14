import { initialState } from './appContext'
import { DISPLAY_MESSAGE, CLEAR_MESSAGE, DISPLAY_MOVES, CLEAR_MOVES, DISPLAY_SWITCH, CLEAR_SWITCH } from './actions'

const reducer = (state, action) => {
    if (action.type === DISPLAY_MESSAGE) {
        console.log(action.payload)
        return {...state, messageMode: 'message', message: action.payload}
    }
    if (action.type === CLEAR_MESSAGE) {
        return {...state, messageMode: 'null', message: ''}
    }
    if (action.type === DISPLAY_MOVES) {
        return {...state, messageMode: 'move'}
    }
    if (action.type === CLEAR_MOVES) { 
        return {...state, messageMode: null}
    }
    if (action.type === DISPLAY_SWITCH){
        return {...state, messageMode: 'switch'}
    }
    if (action.type === CLEAR_SWITCH) {
        return {...state, messageMode: null}
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer