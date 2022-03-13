import HealthBar from "../components/HealthBar"
import PokemonName from "../components/PokemonName"

const CurrentPokemon = ({owner, pokemon}) => {
    return (
        <>
        <div className={`${owner}-info`}>
                <PokemonName owner={owner} name={pokemon.name} />
                <HealthBar owner={owner} currentHP={pokemon.currentHP} maxHP={pokemon.maxHP} />
            </div>
            <div className={`${owner}-pokemon`}>
                <img src={`/pokemon/diamond-pearl/${owner === "cpu" ? `front` : `back`}/${pokemon.pokemonId}.png`} />
            </div>
            </>
    )
}

export default CurrentPokemon
