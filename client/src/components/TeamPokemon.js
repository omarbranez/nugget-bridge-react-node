import { useState } from 'react'

const TeamPokemon = () => {

    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className={`team-pokemon ${hovered && 'hop'}`} height="100%" src="/pokemon/mini/1.png" />
        </div>
    )
}

export default TeamPokemon
