import { CareerData, navData, navPathData } from '../contents';
import { headerLogo, topAbout } from '../images';
import '../styles/about.css';
import Footer from './Footer';
import { animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
  scroll.scrollToTop();
};

const About = () => {
  return (
    <>
      <img
        className='headerLogo'
        src={headerLogo}
        alt='ロゴ画像'
        onClick={scrollToTop}
      />
      <section id='top'></section>
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
        Career
        <div className='area careerArea'>
          {CareerData.map((item, key) => {
            return (
              <dl className='career' key={key}>
                <dt className='careerLeft'>{item.lineDate}</dt>
                <dd className='careerRight'>
                  <span className='careerHeadline'>{item.titleData}</span>
                  <br />
                  {item.textData}
                </dd>
              </dl>
            );
          })}
        </div>
      </div>
      <div className='backHome'>
        <a href={navPathData.home}>← back home</a>
      </div>
      <Footer />
    </>
  );
};

export default About;
