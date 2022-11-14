import topMain from "../images/topMain.jpg";
import "../styles/topMain.css";

const TopMain = () => {
  return (
    <div className="topMain-Area">
      <h1 className="topMain-text">{`Hironori's\nPortofolio`}</h1>
      <img className="topMain" src={topMain} alt="" />
    </div>
  );
};

export default TopMain;
