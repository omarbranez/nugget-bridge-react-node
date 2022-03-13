import TeamPokemon from "./TeamPokemon"
// import teampoke1 from '../1.png'
const TeamBox = () => {

    return (
        <div className="bottom blank">
            <div className="team-1 bounce-7" style={{display: "flex", justifyContent: "left"}}>
                {/* <img className="team-pokemon" height="100%" src="/pokemon/mini/1.png" /> */}
                <TeamPokemon/>
            </div>
            <div className="team-2" style={{display: "flex", justifyContent: "left"}}>
                <img className="team-pokemon" height="100%" src="/pokemon/mini/7.png" />
            </div>
            <div className="team-3" style={{display: "flex", justifyContent: "left"}}>
                <img className="team-pokemon" height="100%" src="/pokemon/mini/55.png" />
            </div>
            <div className="team-4" style={{display: "flex", justifyContent: "left"}}>
                <img className="team-pokemon" eight="100%" src="/pokemon/mini/133.png" />
            </div>
            <div className="team-5" style={{display: "flex", justifyContent: "left"}}>
                <img className="team-pokemon" height="100%" src="/pokemon/mini/19.png" />
            </div>
            <div className="team-6" style={{display: "flex", justifyContent: "left"}}>
                <img className="team-pokemon" height="100%" src="/pokemon/mini/61.png" />
            </div>
        </div>
    )
}

export default TeamBox
