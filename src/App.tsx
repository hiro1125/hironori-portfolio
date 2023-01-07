import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { navPathData } from './contents';
import About from './components/About';
import ScrollTop from './components/ScrollTop';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={navPathData.home} element={<Home />} />
          <Route path={navPathData.about} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
