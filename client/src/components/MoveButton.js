import { useAppContext } from "../context/appContext"

const MoveButton = ({ pokemon, name, number }) => {

    const { message, displayMessage, clearMessage } = useAppContext()

    const handleClick = () => {
        console.log(`${name} was clicked`)
        displayMessage(`${pokemon.name} used ${name}`)
    }
    return (
        <div className={`move-${number}`}>
            <button onClick={handleClick} type="button" className="button">
                {name}
            </button>
        </div>
    )
}

export default MoveButton
