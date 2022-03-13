import { useState, useEffect } from 'react'
const HealthBar = ({owner, currentHP, maxHP}) => {

    const [value, setValue] = useState(0)

    useEffect(()=>{
        setValue((currentHP/maxHP) * 100 )
    }, [currentHP, maxHP])

    return (
        <div className={`${owner}-pokemon-health`}>
            <span className="hp-bar-text" >{currentHP} / {maxHP}</span>
            <div style={{ width: `${value}%` }}  className="progress">
            </div>
        </div>
    )
}

export default HealthBar
