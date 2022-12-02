import Footer from './Footer';
import Header from './Header';
import TopAbout from './TopAbout';
import TopContact from './TopContact';
import TopMain from './TopMain';
import TopProduct from './TopProduct';
import TopSkill from './TopSkill';

function Home() {
  return (
    <>
      <Header />
      <TopMain />
      <TopAbout />
      <TopSkill />
      <TopProduct />
      <TopContact />
      <Footer />
    </>
  );
}

export default Home;
