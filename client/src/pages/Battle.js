const Battle = () => {
    return (
        <div className="battle" style={{position: "relative"}}>
            <div style={{position:"absolute", top: "50px", right: "100px"}}>
                <span>cpu pokemon</span>
            </div>
            <div style={{position:"absolute", bottom: "150px", left: "100px"}}>
                <span>player pokemon</span>
            </div>
        </div>
    )
}

export default Battle
