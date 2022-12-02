import { navData } from '../contents';
import '../styles/topContact.css';

function TopContact() {
  return (
    <>
      <div className='title'>
        <div>{navData[4].listName}</div>
        <div className='area'></div>
        <p className='contact-txt'>
          ご連絡は、下記お問い合わせフォームよりお願いいたします。
        </p>
        <button className='contact'>お問い合わせページへ</button>
      </div>
    </>
  );
}

export default TopContact;
