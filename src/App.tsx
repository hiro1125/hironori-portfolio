import "./App.css";
import Header from "./components/Header";
import TopMain from "./components/TopMain";
import TopAbout from "./components/TopAbout";
import TopSkill from "./components/TopSkill";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <TopMain />
        <TopAbout />
        <TopSkill />
      </div>
    </div>
  );
}

export default App;
