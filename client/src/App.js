import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash'
import Battle from './pages/Battle'
import MessageBox from './components/MessageBox';
import TeamBox from './components/TeamBox';
import './App.css';


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Splash />} />
          <Route path='/battle' element={<Battle/>}/>
        </Routes>
      </BrowserRouter>
      <MessageBox/>
      <TeamBox/>
    </div>
  );
}

export default App;
