const HealthBar = ({owner}) => {
    console.log(owner)
    return (
        <div className={`${owner}-pokemon-health`}>
            <img width="75%" src="/progress-bar-blank-transparent.png"/>
        </div>
    )
}

export default HealthBar
