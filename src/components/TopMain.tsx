import { topMain } from "../images";
import "../styles/topMain.css";

const TopMain = () => {
  return (
    <div className="area">
      <h1 className="topMain-text">{`Hironori's\nPortofolio`}</h1>
      <img className="topMain" src={topMain} alt="" />
    </div>
  );
};

export default TopMain;
