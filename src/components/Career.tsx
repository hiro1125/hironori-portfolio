import { careerData } from '../contents';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHospital } from 'react-icons/fa';
import '../styles/career.css';

const Career = () => {
  return (
    <div className='area careerArea'>
      <div className='title careerTitle'>
        <h1>Career</h1>
        <VerticalTimeline lineColor='#F8F8FF'>
          {careerData.map((item, key) => {
            return (
              <VerticalTimelineElement
                className='vertical-timeline-element--work'
                key={key}
                contentStyle={{
                  background: 'rgb(215, 238, 255)',
                  color: '#000',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(215, 238, 255)',
                }}
                date={item.lineDate}
                dateClassName={'timelineDate'}
                iconStyle={{
                  background: 'rgb(215, 238, 255)',
                  color: '#fff',
                }}
                icon={<FaHospital />}
              >
                <h3>{item.titleData}</h3>
                <p className='careerText'>{item.textData}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Career;
