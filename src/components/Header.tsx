/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/header.css';
import { NavLink } from 'react-router-dom';
import { headerData, navPathData } from '../contents';
const Header = () => {
  return (
    <header>
      <NavLink to={navPathData.home}>{headerData[0].listName}</NavLink>
      <NavLink to={navPathData.about}>{headerData[1].listName}</NavLink>
      <NavLink to={navPathData.skill}>{headerData[2].listName}</NavLink>
      <NavLink to={navPathData.product}>{headerData[3].listName}</NavLink>
    </header>
  );
};

export default Header;
