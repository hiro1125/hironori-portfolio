import { headerData } from "../contents";
import "../styles/topAbout.css";
import topAbout from "../images/topAbout-icon.jpg";

const TopAbout = () => {
  return (
    <>
      <div className="TopAbout">
        <div className="title">{headerData[1].listName}</div>
        <img className="topAbout-icon" src={topAbout} alt="" />
        <div className="TopAbout-txt"></div>
      </div>
    </>
  );
};

export default TopAbout;
