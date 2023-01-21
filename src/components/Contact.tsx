import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { headerLogo } from '../images';
import '../styles/contact.css';
import Footer from './Footer';
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    window.alert('メールを送信しました。');
    window.close();
  };

  return (
    <>
      <img className='headerLogo' src={headerLogo} alt='ロゴ画像' />
      <div className='area mainContactArea '>
        <section>
          <div>
            <h2 className='pageTitle'>お問い合わせ</h2>
            <p className='pageText'>
              お問い合わせは、下記フォームより必須事項をご記入の上ご連絡ください。
            </p>
            <form ref={form} className='formArea' onSubmit={sendEmail}>
              <label htmlFor='mailTitleForm' className='labelForm'>
                件名
              </label>
              <input
                id='mailTitleForm'
                className='contactText'
                type='text'
                placeholder='件名'
                name='subject'
                required
              />
              <label htmlFor='nameForm' className='labelForm'>
                お名前
              </label>
              <input
                id='nameForm'
                className='contactText'
                type='text'
                placeholder='例）山田太郎'
                name='name'
                required
              />
              <label htmlFor='kanaForm' className='labelForm'>
                フリガナ
              </label>
              <input
                id='kanaForm'
                className='contactText'
                type='text'
                placeholder='例）ヤマダタロウ'
                name='katakana'
                required
              />
              <label htmlFor='mailForm' className='labelForm'>
                メールアドレス
              </label>
              <input
                id='mailForm'
                className='contactText'
                type='email'
                placeholder='例）example@gmail.com'
                name='email'
                required
              />
              <label htmlFor='mailContentForm' className='labelForm'>
                お問い合わせ内容
              </label>
              <textarea
                id='mailContentForm'
                className='contactText'
                name='message'
                cols={30}
                rows={10}
                placeholder='お問い合わせ内容を入力してください'
              ></textarea>
              <button type='submit' className='submitButton'>
                <div className='svg-wrapper-1'>
                  <div className='svg-wrapper'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path
                        fill='currentColor'
                        d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>送信</span>
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
