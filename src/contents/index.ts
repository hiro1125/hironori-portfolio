const defaultPath = `/hironori-Portofolio`;

export const navPathData = {
  /** ホーム画面 */
  home: defaultPath,
  /** About画面 */
  about: `${defaultPath}/About`,
  /** Skill画面 */
  skill: `${defaultPath}/Skill`,
  /** Product画面 */
  product: `${defaultPath}/Product`,
  /** Contact画面 */
  contact: `${defaultPath}/Contact`,
};

export const navData = [
  {
    listName: 'Home',
    pathName: 'home',
  },

  {
    listName: 'About',
    pathName: 'topAbout',
  },

  {
    listName: 'Skill',
    pathName: 'topSkill',
  },

  {
    listName: 'Product',
    pathName: 'topProduct',
  },

  {
    listName: 'Contact',
    pathName: 'topContact',
  },
];

export const SkillData = [
  {
    skillIcon: require('../images/html-5.png'),
    skillName: 'HTML',
  },

  {
    skillIcon: require('../images/css-3.png'),
    skillName: 'CSS',
  },

  {
    skillIcon: require('../images/javascript.png'),
    skillName: 'Javascript',
  },

  {
    skillIcon: require('../images/react.png'),
    skillName: 'React',
  },

  {
    skillIcon: require('../images/github-icon.png'),
    skillName: 'Github',
  },

  {
    skillIcon: require('../images/expo-icon.png'),
    skillName: 'expo',
  },
];

export const ProductData = [
  {
    ProductImg: require('../images/Me-National-Exam-Preparation-App.png'),
    ProductName: 'Me-National-Exam-Preparation-App',
  },

  // {
  //   ProductImg: require(),
  //   ProductName: 'Me-National-Exam-Preparation-App',
  // },
];

export const CareerData = [
  {
    lineDate: '2016年',
    titleData: '高等学校卒業、4年制医療大学に入学',
    textData:
      'ショッピングセンターで臨床工学技士の業務体験イベントを通じて、とてもやりがいのある仕事と感じ、この職業を目指すと決める。',
  },
  {
    lineDate: '2021年',
    titleData: '臨床工学技士国家資格を取得、病院に勤務',
    textData:
      '臨床工学技士として一次二次救急病院で主に透析業務・内視鏡業務の仕事を行う。',
  },
  {
    lineDate: '2022年',
    titleData: '臨床工学技士として働きながらプログラミングを独学',
    textData:
      '病院勤務を続けつつ、プログラミングの勉強を始める。現役エンジニアの友人にアドバイスを頂きながら日々学び続ける。',
  },
];
