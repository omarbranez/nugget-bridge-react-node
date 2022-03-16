const SwitchButton = ({pokemon}) => {

    const handleClick = () => {
        console.log(`${pokemon.name} was clicked`)
    }
    return (
        <div className={`switch-${pokemon.position + 1}`}>
            <button onClick={handleClick} type="button" className="button">
                {pokemon.name}
            </button>
        </div>
    )
}

export default SwitchButton
