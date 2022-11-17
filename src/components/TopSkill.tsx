import { headerData } from "../contents";
import "../styles/topAbout.css";

const TopSkill = () => {
  return (
    <>
      <div className="title">
        {headerData[2].listName}
        <div className="area"></div>
      </div>
    </>
  );
};

export default TopSkill;
