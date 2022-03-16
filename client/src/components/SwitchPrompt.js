import SwitchButton from "./SwitchButton"

const SwitchPrompt = ({ playerTeam, handleBackClick }) => {
    return (
        <div className="switch-prompt-container">
            <div className="switch-prompt-message">
                <div className="switch-prompt">
                    <span>Please select a Pokemon to switch to</span>
                </div>
                <div className="switch-back-button">
                    <button type="button" className="button" onClick={handleBackClick}>Cancel Switch</button>
                </div>
            </div>
            <div className="switch-buttons">
                {playerTeam.map((pokemon, index) => pokemon.position !== 1 && <SwitchButton pokemon={pokemon} />)}
            </div>
        </div>
    )
}

export default SwitchPrompt
