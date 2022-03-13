import {useState} from 'react'

const TeamPokemonTooltip = ({active, pokemon}) => {

    // const [active, setActive] = useState(false)

    return (
        <div className="tooltip" style={{display: `${active ? 'block' : 'none'}`}}>
            {pokemon.name}
        </div>
    )
}
export default TeamPokemonTooltip
