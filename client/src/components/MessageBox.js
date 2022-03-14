import {useState, useEffect} from 'react'
import { useAppContext } from '../context/appContext';
import MoveButton from "./MoveButton"

const MessageBox = () => {

    const playerPokemon = {
        pokemonId: 3,
        name: "Venusaur",
        currentHP: 300,
        maxHP: 300,
        moves: [
            {
                name: "Solar Beam",
            },
            {
                name: "Earthquake",
            },
            {
                name: "Sunny Day",
            },
            {
                name: "Sludge Bomb",
            }
        ]
    }

    const cpuPokemon = {
        pokemonId: 6,
        name: "Charizard",
        currentHP: 50,
        maxHP: 300,
        moves: [
            {
                name: "Flamethrower",
            },
            {
                name: "Dragon Claw",
            },
            {
                name: "Roost",
            },
            {
                name: "Hurricane",
            }
        ]
    }
    const [ movePrompt, setMovePrompt ] = useState(false)
    const [ battleMessage, setBattleMessage ] = useState(false)
    const [ switchPrompt, setSwitchPrompt ] = useState(false)
    const { message, displayMessage, clearMessage } = useAppContext()

    useEffect(()=> {
        setBattleMessage(!battleMessage)
        displayMessage('Venusaur used Solar Beam')
    }, [])

    return (
        <div className="message-box">
                <div className="message">
                    {message}
                </div>
            <div className="move-prompt-container">
                {/* class name needs to change between states.
                so animated text gets rendered properly and buttons are displayed */}
                <span>Please select a move</span>
                <div className="move-button-container">
                    {playerPokemon.moves.map((move, index) => <MoveButton pokemon={playerPokemon} name={move.name} number={index} />)}
                </div>
            </div>
        </div>
    )
}

export default MessageBox
