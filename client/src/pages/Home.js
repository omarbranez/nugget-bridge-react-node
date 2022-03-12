import { useEffect } from 'react'

import '../App.css'

const Home = () => {

    window.addEventListener('keydown', (e) => {
        e.key === 'Enter' && console.log("return was pressed")
    })

    return (
        <div className="container">
            <div className="top start">
            </div>
            <div className="bottom blank">
            </div>
        </div>
    )
}

export default Home
