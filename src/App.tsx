import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Webpages/Homepage.tsx';
import Projectspage from './Webpages/ProjectsPage.tsx';
import Photospage from './Webpages/PhotosPage.tsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/projects' element={<Projectspage/>}/>
          <Route path='/photos' element={<Photospage/>}/>
        </Routes>
    </Router>
  );
}

export default App

