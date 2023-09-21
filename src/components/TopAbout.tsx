/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { navData, navPathData } from '../contents';
import { topAbout } from '../images';
import '../styles/topAbout.css';
import { FaArrowRight } from 'react-icons/fa';

const TopAbout = () => {
  return (
    <>
      <div className='area'>
        <div className='title topAboutTitle'>
          <section id='topAbout'>{navData[1].listName}</section>
          <div className='topAboutMain'>
            <img className='topAbout-icon' src={topAbout} alt='' />
            <div className='topAbout-txt'>
              {
                '1997年生まれ、\n 兵庫県出身の25歳。 \n 歩くことが好きです。 \n 卒業研究で、Octaveを触ってプログラミングが好きになりました。'
              }
              <div className='topAbout-viewMore'>
                <NavLink className='scroll navItem' to={navPathData.about}>
                  view more <FaArrowRight style={{ verticalAlign: 'middle' }} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopAbout;
