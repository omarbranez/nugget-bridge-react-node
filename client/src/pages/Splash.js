import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const Splash = () => {
    
    let navigate = useNavigate()

    const handleEnter = (e) => {
        e.key === 'Enter' && navigate(`/battle`)
    }
    useEffect(()=>{
        window.addEventListener('keydown', (e) => handleEnter(e))
        return window.removeEventListener('keydown', (e) => handleEnter(e))
      }, [handleEnter])
    return (
    
        <div className="start">
            
        </div>
    )
}

export default Splash
