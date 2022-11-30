/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import { navData, navPathData } from '../contents';
const Header = () => {
  return (
    <header>
      <div className='menu'>
        <NavLink className='navLink' to={navPathData.home}>
          {navData[0].listName}
        </NavLink>
        <NavLink className='navLink' to={navPathData.about}>
          {navData[1].listName}
        </NavLink>
        <NavLink className='navLink' to={navPathData.product}>
          {navData[3].listName}
        </NavLink>
        <NavLink className='navLink' to={navPathData.product}>
          {navData[4].listName}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
