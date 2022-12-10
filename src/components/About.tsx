import { navData } from '../contents';
import { topAbout } from '../images';
import '../styles/about.css';

function About() {
  return (
    <>
      <div className='title'>
        {navData[1].listName}
        <div className='area'>
          <img className='topAbout-icon' src={topAbout} alt='' />
          <div className='topAbout-txt'>
            <p className='paragraph'>
              2021年から病院の仕事をしながらプログラミングの勉強を独学を始めました。
            </p>
            <p className='paragraph'>
              現在は、Reactを中心に行い、UdemyやYouTubeを通して日々学んでいます。
            </p>
          </div>
        </div>
      </div>
      <div className='title'>
        {navData[5].listName}
        <div className='area'></div>
      </div>
    </>
  );
}

export default About;
