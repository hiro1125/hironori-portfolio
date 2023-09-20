import { navData, navPathData } from '../contents';
import { about, headerLogo } from '../images';
import '../styles/about.css';
import Footer from './Footer';
import { FaAngleDoubleUp, FaHome } from 'react-icons/fa';
import TopContact from './TopContact';
import { useEffect, useState } from 'react';
import Career from './Career';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [topScrollButton, setTopScrollButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setTopScrollButton(true);
      } else {
        setTopScrollButton(false);
      }
    });
  }, []);

  const ScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <img
        className='headerLogo'
        src={headerLogo}
        alt='ロゴ画像'
        onClick={() => navigate(-1)}
      />
      <div className='area'>
        <div className='title aboutTitle'>
          <section id='top'>{navData[1].listName}</section>
          <div className='AboutMain'>
            <img className='about-icon' src={about} alt='' />
            <div className='topAbout-txt'>
              <p className='paragraph'>
                2021年から病院の仕事をしながらプログラミングの勉強を独学を始めました。
              </p>
              <p className='paragraph'>
                現在は、Next.jsを中心に行い、UdemyやYouTubeを通して日々学んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
      {topScrollButton && (
        <button className='scrollButton' onClick={ScrollTop}>
          <FaAngleDoubleUp className='topButton' />
        </button>
      )}

      <Career />

      <TopContact />
      <div className='backHome'>
        <a href={navPathData.home}>
          <FaHome />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default About;
