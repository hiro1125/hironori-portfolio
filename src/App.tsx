import "./App.css";
import Header from "./components/Header";
import TopMain from "./components/TopMain";
import TopAbout from "./components/TopAbout";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <TopMain />
        <TopAbout />
      </div>
    </div>
  );
}

export default App;
