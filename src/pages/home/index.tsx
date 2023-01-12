import styles from "./index.less";
import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import Footer from "@/components/Footer";
import AutoPlayIMG from "@/components/AutoPlayIMG";
import Masonrys from "@/components/Masonrys";

const Home = () => {
  return (
    <>
      <AutoPlayIMG />
      {/* <Nav /> */}
      {/* <ArticleList /> */}
      <Masonrys />
      <Footer />
    </>
  );
};

export default Home;
