import HealthBar from "../components/HealthBar"

const Battle = () => {

    const playerPokemon = {
        name: "Venusaur",
        currentHP: 300,
        maxHP: 300,
    }

    const cpuPokemon = {
        name: "Charizard",
        currentHP: 50,
        maxHP: 300,
    }

    return (
        <div className="battle-screen">
            <div className="cpu-info">
                <div className="cpu-pokemon-name">
                    <div className="pokemon-name-content">
                    {cpuPokemon.name}
                    </div>
                </div>
                <HealthBar owner="cpu" currentHP={cpuPokemon.currentHP} maxHP={cpuPokemon.maxHP}/>
            </div>
            <div className="cpu-pokemon" >
                <img src='/6.png' />
            </div>
            <div className="player-info">
                <div className="player-pokemon-name">
                <div className="pokemon-name-content">

                    {playerPokemon.name}
                    </div>
                </div>
                <HealthBar owner="player" currentHP={playerPokemon.currentHP} maxHP={playerPokemon.maxHP}/>
            </div>
            <div className="player-pokemon">
                <img src='/3.png'/>
            </div>
        </div>
    )
}

export default Battle
