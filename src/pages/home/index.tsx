import styles from "./index.less";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import Footer from "@/components/Footer";
import AutoPlayIMG from "@/components/AutoPlayIMG";

const Home = () => {
  return (
    <>
      <AutoPlayIMG />
      {/* <Nav /> */}
      <ArticleList />
      <Footer />
    </>
  );
};

export default Home;
