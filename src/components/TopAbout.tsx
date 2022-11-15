import { headerData } from "../contents";
import "../styles/topAbout.css";
import topAbout from "../images/topAbout-icon.jpg";

const TopAbout = () => {
  return (
    <>
      <div className="title">
        {headerData[1].listName}
        <div className="area">
          <img className="topAbout-icon" src={topAbout} alt="" />
          <div className="topAbout-txt">
            {
              "1997年生まれ、兵庫県出身の24歳。 \n 歩くことが好きです。 \n 卒業研究で、Octaveを触ってプログラミングが好きになりました。"
            }
            <div className="topAbout-viewMore">
              <a target="_blank" href="about.html" className="link">
                view more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopAbout;
