import MoveButton from "./MoveButton"
const MovePrompt = ({playerPokemon, handleSwitchClick}) => {
    
    return (
        <div className="move-prompt-container">
        {/* class name needs to change between states.
        so animated text gets rendered properly and buttons are displayed */}
        <div className="move-prompt-message">
            <div className="move-prompt">
                <span>Please select a move</span>
            </div>
            <div className="switch-button-container">
                <button type="button" className="button" onClick={handleSwitchClick}>Switch</button>
            </div>
        </div>
        <div className="move-button-container">
            {playerPokemon.moves.map((move, index) => <MoveButton pokemon={playerPokemon} name={move.name} number={index} />)}
        </div>
    </div>
    )
}

export default MovePrompt
