/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/header.css';
import { Link as Scroll } from 'react-scroll';
import { navData } from '../contents';

const Header = () => {
  return (
    <header>
      <div className='menu'>
        <nav>
          <Scroll to='home' smooth={true} duration={500} offset={-50}>
            {navData[0].listName}
          </Scroll>
          <Scroll to='topAbout' smooth={true} duration={500} offset={-50}>
            {navData[1].listName}
          </Scroll>
          <Scroll to='topProduct' smooth={true} duration={500} offset={-50}>
            {navData[3].listName}
          </Scroll>
          <Scroll to='topContact' smooth={true} duration={500} offset={-50}>
            {navData[4].listName}
          </Scroll>
        </nav>
      </div>
    </header>
  );
};

export default Header;
