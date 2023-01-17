import '../styles/footer.css';
import '../styles/contact.css';
import { githubIcon } from '../images';

const Footer = () => {
  const pushIcon = () => {
    window.open('https://github.com/hiro1125');
  };
  return (
    <footer className='footerArea footerContact'>
      <p>© Hironori Sano</p>
      <img
        className='githubIcon'
        src={githubIcon}
        alt={'Github'}
        onClick={pushIcon}
      />
    </footer>
  );
};

export default Footer;
