import CurrentPokemon from "../components/CurrentPokemon"
import { useAppContext } from "../context/appContext"

const Battle = () => {

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

    const { message } = useAppContext()

    return (
        <div className="battle-screen">
            <CurrentPokemon owner="cpu" pokemon={cpuPokemon}/>
            <CurrentPokemon owner="player" pokemon={playerPokemon}/>
        </div>
    )
}

export default Battle
