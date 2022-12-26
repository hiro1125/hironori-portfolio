import { careerData, navData, navPathData } from '../contents';
import { about, headerLogo } from '../images';
import '../styles/about.css';
import Footer from './Footer';
// import { animateScroll as scroll } from 'react-scroll';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHospital } from 'react-icons/fa';
import TopContact from './TopContact';

// const scrollToTop = () => {
//   scroll.scrollToTop();
// };

const About = () => {
  return (
    <>
      <img className='headerLogo' src={headerLogo} alt='ロゴ画像' />
      <div className='area'>
        <div className='title aboutTitle'>
          <section id='top'>{navData[1].listName}</section>
          <div className='AboutMain'>
            <img className='about-icon' src={about} alt='' />
            <div className='topAbout-txt'>
              <p className='paragraph'>
                2021年から病院の仕事をしながらプログラミングの勉強を独学を始めました。
              </p>
              <p className='paragraph'>
                現在は、Reactを中心に行い、UdemyやYouTubeを通して日々学んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='area careerArea'>
        <div className='title careerTitle'>
          <h1>Career</h1>
          <VerticalTimeline lineColor='#000'>
            {careerData.map((item, key) => {
              return (
                <VerticalTimelineElement
                  className='vertical-timeline-element--work'
                  key={key}
                  contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date={item.lineDate}
                  dateClassName={'timelineDate'}
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  icon={<FaHospital />}
                >
                  <h3>{item.titleData}</h3>
                  <p>{item.textData}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
      <TopContact />
      <div className='backHome'>
        <a href={navPathData.home}>← back home</a>
      </div>
      <Footer />
    </>
  );
};

export default About;
