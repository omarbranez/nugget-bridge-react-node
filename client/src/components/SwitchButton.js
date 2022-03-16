import { useAppContext } from "../context/appContext"

const SwitchButton = ({pokemon}) => {

    const { displayMessage } = useAppContext()

    const handleClick = () => {
        console.log(`${pokemon.name} was clicked`)
        // displayMessage(`Current Player withdrew Venusaur`)
        displayMessage(`Current Player sent out ${pokemon.name}`)
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
