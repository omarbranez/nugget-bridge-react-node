import { useState } from 'react'
import TeamPokemonTooltip from './TeamPokemonTooltip'

const TeamPokemon = ({ pokemon }) => {

    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    const handleImageClick = () => {
        setActive(!active)
    }

    return (
        <div className={`team-${pokemon.position}`} style={{ display: "flex", justifyContent: "left" }}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img onClick={handleImageClick} className={`team-pokemon ${hovered && 'hop'}`} height="100%" src={`/pokemon/mini/${pokemon.pokemonId}.png`} />
            </div>
            <TeamPokemonTooltip pokemon={pokemon} active={active}/>
        </div>
    )
}

export default TeamPokemon
