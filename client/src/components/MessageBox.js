import MoveButton from "./MoveButton"

const MessageBox = () => {

    const playerPokemon = {
        pokemonId: 3,
        name: "Venusaur",
        currentHP: 300,
        maxHP: 300,
        moves: [
            {
                name: "Solar Beam",
            },
            {
                name: "Earthquake",
            },
            {
                name: "Sunny Day",
            },
            {
                name: "Sludge Bomb",
            }
        ]
    }

    return (
        <div className="message-box">
            <div className="move-prompt-container">
                <span>Please select a move</span>
                <div className="move-button-container">
                    {playerPokemon.moves.map((move, index) => <MoveButton name={move.name} number={index} />)}
                </div>
            </div>
        </div>
    )
}

export default MessageBox
