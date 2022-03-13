import { useState } from 'react'

const TeamPokemon = ({pokemon}) => {

    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div className={`team-${pokemon.position}`} style={{display: "flex", justifyContent: "left"}}>

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className={`team-pokemon ${hovered && 'hop'}`} height="100%" src={`/pokemon/mini/${pokemon.pokemonId}.png`} />
        </div>
        </div>
    )
}

export default TeamPokemon
