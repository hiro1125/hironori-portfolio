import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopMain from './components/TopMain';
import TopAbout from './components/TopAbout';
import TopSkill from './components/TopSkill';
import TopProduct from './components/TopProduct';
import './contents/index.ts';
import { navPathData } from './contents';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={navPathData.home} element={<TopMain />} />
          <Route path={navPathData.about} element={<TopAbout />} />
          <Route path={navPathData.skill} element={<TopSkill />} />
          <Route path={navPathData.product} element={<TopProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
