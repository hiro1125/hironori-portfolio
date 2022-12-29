/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { navData } from '../contents';
import '../styles/topContact.css';

const TopContact = () => {
  return (
    <>
      <div className='area topContactArea'>
        <div className='title'>
          <section id='topContact'>{navData[4].listName}</section>
          <p className='contact-txt'>
            ご連絡は、下記お問い合わせフォームよりお願いいたします。
          </p>
          <NavLink className='navLink' target='_blank' to={'/'}>
            <button className='contactButton'>
              お問い合わせはこちら
              <div className='arrow-wrapper'>
                <div className='arrow'></div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TopContact;
