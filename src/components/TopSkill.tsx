/* eslint-disable jsx-a11y/anchor-is-valid */
import { navData, SkillData } from '../contents';
import '../styles/topSkill.css';

const TopSkill = () => {
  return (
    <>
      <div className='title'>
        <section id='topSkill'>{navData[2].listName}</section>
        <div className='area skillArea'>
          {SkillData.map((item, key) => {
            return (
              <li className='skillItem' key={key}>
                <img
                  className='iconImg'
                  src={item.skillIcon}
                  alt={item.skillName}
                />
                <p className='skillName'>{item.skillName}</p>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopSkill;
