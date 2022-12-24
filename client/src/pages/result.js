//component
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Item from "../components/result/item";

const ResultPage = () => {
  return (
    <WrapDiv url={"/assets/Images/talkBackground.gif"}>
      <Header></Header>
      <Item></Item>
    </WrapDiv>
  );
};

export default ResultPage;
// Custom Hook 사용해보기
