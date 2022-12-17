import '../styles/footer.css';
import { githubIcon } from '../images';

const Footer = () => {
  const pushIcon = () => {
    window.open('https://github.com/hiro1125');
  };
  return (
    <footer>
      <div className='footerArea'>
        <p>© Hironori Sano</p>
        <img
          className='githubIcon'
          src={githubIcon}
          alt={'Github'}
          onClick={pushIcon}
        />
      </div>
    </footer>
  );
};

export default Footer;
