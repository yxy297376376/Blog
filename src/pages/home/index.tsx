// import Dplayer from "@/components/Dplay";
// import InfoCard from "@/components/InfoCard";
import WritingLine from './components/WritingLine';
import styles from './index.less'
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
const Home = () => {
  return <>
    <PageTitle title='首页' />
    <Nav />
    <ArticleList />
    <Footer />
    {/* <WritingLine /> */}
  </>
}

export default Home;
