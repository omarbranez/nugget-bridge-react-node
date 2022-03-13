const PokemonName = ({ owner, name }) => {
    return (
        <div className={`${owner}-pokemon-name`}>
            <div className="pokemon-name-content">
                {name}
            </div>
        </div>
    )
}

export default PokemonName
