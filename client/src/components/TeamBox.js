import TeamPokemon from "./TeamPokemon"
const TeamBox = () => {

    const playerTeam = [
        {
            position: 1,
            pokemonId: 1,
            name: "Bulbasaur",
        },
        {
            position: 2,
            pokemonId: 7,
            name: "Squirtle",
        },
        {
            position: 3,
            pokemonId: 55,
            name: "Golduck"
        },
        {
            position: 4,
            pokemonId: 133,
            name: "Eevee",
        },
        {
            position: 5,
            pokemonId: 19,
            name: "Rattata"
        },
        {
            position: 6,
            pokemonId: 61,
            name: "Poliwhirl"
        }
    ]

    return (
        <div className="bottom blank">
            {playerTeam.map(pokemon => <TeamPokemon pokemon={pokemon}/>)}
            
        </div>
    )
}

export default TeamBox
