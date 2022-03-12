const Battle = () => {
    return (
        <div className="battle-screen" style={{position: "relative"}}>
            <div className="cpu-pokemon" style={{position:"absolute", top: "0vh", right: "10vw"}}>
                <img src='/6.png' width="225%"/>
            </div>
            <div className="player-pokemon" style={{position:"absolute", bottom: "-4vh", left: "5vw"}}>
                <img src='/3.png' width="225%"/>
            </div>
        </div>
    )
}

export default Battle
