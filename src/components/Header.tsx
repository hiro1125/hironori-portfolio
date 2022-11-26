/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/header.css';
import { headerData } from '../contents';

const Header = () => {
  return (
    <header>
      <ul>
        {headerData.map((item, key) => {
          return (
            <li className='headerItem' key={key}>
              <a href=''>{item.listName}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
