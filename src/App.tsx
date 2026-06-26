import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Webpages/Homepage.tsx';
import Projectspage from './Webpages/Projectspage.tsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/projects' element={<Projectspage/>}/>
        </Routes>
    </Router>
  );
}

export default App

