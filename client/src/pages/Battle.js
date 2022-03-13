// import HealthBar from "../components/HealthBar"
// import PokemonName from "../components/PokemonName"
import CurrentPokemon from "../components/CurrentPokemon"

const Battle = () => {

    const playerPokemon = {
        pokemonId: 3,
        name: "Venusaur",
        currentHP: 300,
        maxHP: 300,
        move1: "Solar Beam",
        move2: "Earthquake",
        move3: "Sunny Day",
        move4: "Sludge Bomb"
    }

    const cpuPokemon = {
        pokemonId: 6,
        name: "Charizard",
        currentHP: 50,
        maxHP: 300,
        move1: "Flamethrower",
        move2: "Dragon Claw",
        move3: "Roost",
        move4: "Hurricane"
    }

    return (
        <div className="battle-screen">
            <CurrentPokemon owner="cpu" pokemon={cpuPokemon}/>
            <CurrentPokemon owner="player" pokemon={playerPokemon}/>
        </div>
    )
}

export default Battle
