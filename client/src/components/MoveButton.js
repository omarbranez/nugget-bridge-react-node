const MoveButton = ({name, number}) => {

    return (
        <div className={`move-${number}`}>
            <button>
            {name}
            </button>
        </div>
    )
}

export default MoveButton
