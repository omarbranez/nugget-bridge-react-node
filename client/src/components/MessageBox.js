import { useState, useEffect } from 'react'
import { useAppContext } from '../context/appContext';
import MovePrompt from './MovePrompt';
import SwitchPrompt from './SwitchPrompt';

const MessageBox = () => {

    const playerTeam = [
        {
            position: 1,
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
        },
        {
            position: 2,
            pokemonId: 7,
            name: "Squirtle",
            currentHP: 20,
            maxHP: 200,
            moves: [
                {
                    name: "Surf",
                },
                {
                    name: "Skull Bash",
                },
                {
                    name: "Ice Beam",
                },
                {
                    name: "Body Slam",
                }
            ]
        },
        {
            position: 3,
            pokemonId: 55,
            name: "Golduck",
            currentHP: 260,
            maxHP: 280,
            moves: [
                {
                    name: "Psychic",
                },
                {
                    name: "Water Pulse",
                },
                {
                    name: "Rain Dance",
                },
                {
                    name: "Dark Pulse",
                }
            ]
        },
        {
            position: 4,
            pokemonId: 133,
            name: "Eevee",
            currentHP: 240,
            maxHP: 240,
            moves: [
                {
                    name: "Hyper Beam",
                },
                {
                    name: "Attract",
                },
                {
                    name: "Dig",
                },
                {
                    name: "Tickle",
                }
            ]
        },
        {
            position: 5,
            pokemonId: 19,
            name: "Rattata",
            currentHP: 10,
            maxHP: 200,
            moves: [
                {
                    name: "Super Fang",
                },
                {
                    name: "Tail Whip",
                },
                {
                    name: "Dig",
                },
                {
                    name: "Fire Fang",
                }
            ]
        },
        {
            position: 6,
            pokemonId: 61,
            name: "Poliwhirl",
            currentHP: 300,
            maxHP: 300,
            moves: [
                {
                    name: "Scald",
                },
                {
                    name: "Extrasensory",
                },
                {
                    name: "Hypnosis",
                },
                {
                    name: "Protect",
                }
            ]
        }
    ]

    // const playerPokemon = {
    //     pokemonId: 3,
    //     name: "Venusaur",
    //     currentHP: 300,
    //     maxHP: 300,
    //     moves: [
    //         {
    //             name: "Solar Beam",
    //         },
    //         {
    //             name: "Earthquake",
    //         },
    //         {
    //             name: "Sunny Day",
    //         },
    //         {
    //             name: "Sludge Bomb",
    //         }
    //     ]
    // }

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
    const [movePrompt, setMovePrompt] = useState(false)
    const [battleMessage, setBattleMessage] = useState(false)
    const [switchPrompt, setSwitchPrompt] = useState(false)
    const { messageMode, message, displayMessage, clearMessage, displayMoves, clearMoves, displaySwitch, clearSwitch } = useAppContext()

    useEffect(() => {
        // displayMessage(!battleMessage)
        displayMessage('Venusaur used Solar Beam')
    }, [])

    const playerPokemon = playerTeam.filter(pokemon => pokemon.position === 1)[0]
    console.log(messageMode)
    console.log(playerPokemon)

    const handleSwitchClick = () => {
        displaySwitch()
    }

    const handleBackClick = () => {
        displayMoves()
    }

    return (
        <div className="message-box">
            {messageMode === 'message' && <div className="message">
                {message}
            </div>}
            {messageMode === 'move' && <MovePrompt playerPokemon={playerPokemon} handleSwitchClick={handleSwitchClick}/>}
            {messageMode === 'switch' && <SwitchPrompt playerTeam={playerTeam} handleBackClick={handleBackClick}/>}
        </div>
    )
}

export default MessageBox
