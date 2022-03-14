import { initialState } from './appContext'
import { DISPLAY_MESSAGE, CLEAR_MESSAGE } from './actions'

const reducer = (state, action) => {
    if (action.type === DISPLAY_MESSAGE) {
        console.log(action.payload)
        return {...state, messageMode: 'battle', message: action.payload}
    }
    if (action.type === CLEAR_MESSAGE) {
        return {...state, messageMode: 'move', message: ''}
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer