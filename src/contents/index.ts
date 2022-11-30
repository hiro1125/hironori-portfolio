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
  },

  {
    listName: 'About',
  },

  {
    listName: 'Skill',
  },

  {
    listName: 'Product',
  },

  {
    listName: 'Contact',
  },

  {
    listName: 'Career',
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
