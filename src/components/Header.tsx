/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/header.css';
import { Link as Scroll } from 'react-scroll';
import { navData } from '../contents';

const Header = () => {
  return (
    <>
      <header>
        <div className='menu'>
          <nav className='gNav'>
            <div className='navBox'>
              <Scroll
                className='scroll'
                to='home'
                smooth={true}
                duration={500}
                offset={-50}
              >
                {navData[0].listName}
              </Scroll>
              <Scroll
                className='scroll'
                to='topAbout'
                smooth={true}
                duration={500}
                offset={-50}
              >
                {navData[1].listName}
              </Scroll>
              <Scroll
                className='scroll'
                to='topSkill'
                smooth={true}
                duration={500}
                offset={-50}
              >
                {navData[2].listName}
              </Scroll>
              <Scroll
                className='scroll'
                to='topProduct'
                smooth={true}
                duration={500}
                offset={-50}
              >
                {navData[3].listName}
              </Scroll>
              <Scroll
                className='scroll'
                to='topContact'
                smooth={true}
                duration={500}
                offset={-50}
              >
                {navData[4].listName}
              </Scroll>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
