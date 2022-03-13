import {useState} from 'react'

const TeamPokemonTooltip = ({active, pokemon}) => {

    return (
        <div className="team-pokemon-tooltip" style={{display: `${active ? 'block' : 'none'}`}}>
            <h1>{pokemon.name}</h1>
            <p>Position: {pokemon.position}</p>
        </div>
    )
}
export default TeamPokemonTooltip
