/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { navData } from '../contents';
import '../styles/topContact.css';

const TopContact = () => {
  return (
    <>
      <div className='title'>
        <section id='topContact'>{navData[4].listName}</section>
        <div className='area'></div>
        <p className='contact-txt'>
          ご連絡は、下記お問い合わせフォームよりお願いいたします。
        </p>
        <NavLink className='navLink' target='_blank' to={'/'}>
          <button className='contact'>お問い合わせはこちら</button>
        </NavLink>
      </div>
    </>
  );
};

export default TopContact;
