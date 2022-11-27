import './App.css';
import Header from './components/Header';
import TopMain from './components/TopMain';
import TopAbout from './components/TopAbout';
import TopSkill from './components/TopSkill';
import TopProduct from './components/TopProduct';

function App() {
  return (
    <div className='App'>
      <div>
        <Header />
        <TopMain />
        <TopAbout />
        <TopSkill />
        <TopProduct />
      </div>
    </div>
  );
}

export default App;
