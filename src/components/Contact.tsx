import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import Footer from './Footer';
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

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
    window.alert('メールを送信しました。');
    e.target.reset();
  };

  return (
    <>
      <section>
        <div className='mainContent'>
          <h2 className='pageTitle'>お問い合わせ</h2>
          <p>
            お問い合わせは、下記フォームより必須事項をご記入の上ご連絡ください。
          </p>
          <form ref={form} className='formArea' onSubmit={sendEmail}>
            <input
              className='contactText'
              type='text'
              placeholder='件名(必須)'
              name='subject'
              required
            />
            <input
              className='contactText'
              type='text'
              placeholder='例）山田太郎'
              name='user_name'
              required
            />
            <input
              className='contactText'
              type='email'
              placeholder='例）example@gmail.com'
              name='user_email'
              required
            />
            <textarea
              className='contactText'
              name='message'
              cols={30}
              rows={10}
              placeholder='お問い合わせ内容(必須)'
            ></textarea>
            <button type='submit' className='submitButton'>
              送信
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
