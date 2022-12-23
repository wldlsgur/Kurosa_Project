//component
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import ItemImg from "../components/result/itemImg";

const ResultPage = () => {
  return (
    <WrapDiv url={"/assets/Images/talkBackground.gif"}>
      <Header></Header>
      <ItemImg url={"/assets/Images/logoCircle.png"}></ItemImg>
    </WrapDiv>
  );
};

export default ResultPage;
// Custom Hook 사용해보기
