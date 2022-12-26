//component
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Item from "../components/result/item";
import ResultMsg from "../components/result/resultMsg";
import SnsNav from "../components/result/snsLav";
import resultMsgImageLanguageCheck from "../utils/resultMsgImageLanguageCheck";
import LogoImg from "../components/result/logoImg";
const ResultPage = () => {
  return (
    <WrapDiv url={"/assets/Images/talkBackground.gif"}>
      <Header></Header>
      <Item></Item>
      <ResultMsg msgUrl={resultMsgImageLanguageCheck()}></ResultMsg>
      <SnsNav></SnsNav>
      <LogoImg></LogoImg>
      <Footer></Footer>
    </WrapDiv>
  );
};

export default ResultPage;
// Custom Hook 사용해보기
