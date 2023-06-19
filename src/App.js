// import logo from './img/background.jpg';
import './App.css';
import Nasa from './Components/Cards/NASA/Nasa';
import RecentEvents from './Components/Cards/RecentEvents/RecentEvents';
import Navbar from './Components/Navbar/Navbar';
import {Box} from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sun from './Components/Cards/Sun/Sun';
// import background from './img/';

function App() {

  
  return (
    <Router>
      
      <Box >
        <Navbar/>
      </Box>
      <Routes>
            <Route path="/" element={<RecentEvents/>} />
            <Route path="/nasa" element={<Nasa/>} />
            <Route path="/sun" element={<Sun/>} />
        </Routes>
    </Router>  
  );
}

export default App;
