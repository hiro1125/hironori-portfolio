import { topMain } from '../images';
import '../styles/topMain.css';
import '../styles/responsive.css';

const TopMain = () => {
  return (
    <div className='area topMainArea'>
      <h1 className='topMain-text'>{`Hironori's\nPortofolio`}</h1>
      <img className='topMain' src={topMain} alt='' />
      <p>テスト</p>
    </div>
  );
};

export default TopMain;
