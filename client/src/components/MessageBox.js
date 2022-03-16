import { useState, useEffect } from 'react'
import { useAppContext } from '../context/appContext';
import Typewriter from 'typewriter-effect'
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

    const { messageMode, message, displayMessage, clearMessage, displayMoves, clearMoves, displaySwitch, clearSwitch } = useAppContext()

    useEffect(() => { // this is only for testing
        // displayMessage(!battleMessage)
        displayMessage('Venusaur used Solar Beam')
    }, [])

    const playerPokemon = playerTeam.filter(pokemon => pokemon.position === 1)[0]

    const handleSwitchClick = () => {
        displaySwitch()
    }

    const handleBackClick = () => {
        displayMoves()
    }

    return (
        <div className="message-box">
            {messageMode === 'message' && <div className="message">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(`${message}`)
                        .pauseFor(1000)
                        // .deleteAll()
                        .callFunction(()=> {
                            displayMoves()
                        })
                        .start()
                    }}
                />
            </div>}
            {messageMode === 'move' && <MovePrompt playerPokemon={playerPokemon} handleSwitchClick={handleSwitchClick}/>}
            {messageMode === 'switch' && <SwitchPrompt playerTeam={playerTeam} handleBackClick={handleBackClick}/>}
        </div>
    )
}

export default MessageBox
