/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from 'react-router-dom';
import { navData, navPathData } from '../contents';
import { topAbout } from '../images';
import '../styles/topAbout.css';

const TopAbout = () => {
  return (
    <>
      <div className='title'>
        {navData[1].listName}
        <div className='area'>
          <img className='topAbout-icon' src={topAbout} alt='' />
          <div className='topAbout-txt'>
            {
              '1997年生まれ、兵庫県出身の24歳。 \n 歩くことが好きです。 \n 卒業研究で、Octaveを触ってプログラミングが好きになりました。'
            }
            <div className='topAbout-viewMore'>
              <NavLink
                className='navLink nav-item'
                target='_blank'
                to={navPathData.about}
              >
                view more
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopAbout;
