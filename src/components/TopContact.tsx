/* eslint-disable jsx-a11y/anchor-is-valid */
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
          <a
            className='navLink'
            target='_blank'
            // href='https://docs.google.com/forms/d/e/1FAIpQLSf7cB3D4DzCqfmh-ikZJkKfGkbpRbIN-h2VIMiTL6IA75j1Rw/viewform'
            rel='noreferrer'
          >
            <button className='contactButton'>
              お問い合わせはこちら
              <div className='arrow-wrapper'>
                <div className='arrow'></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default TopContact;
