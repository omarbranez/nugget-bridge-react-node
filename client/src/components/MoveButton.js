const MoveButton = ({ name, number }) => {

    const handleClick = () => {
        console.log(`${name} was clicked`)
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
