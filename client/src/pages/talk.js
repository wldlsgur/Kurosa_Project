import Footer from "../components/common/footer.js";
import WrapDiv from "../components/common/Wrapper.js";
import Main from "../components/talk/main.js";
import talkData from "../utils/TalkData.js";

const Talk = () => {
  return (
    <WrapDiv url={"/assets/Images/talkBackground.gif"}>
      <Main
        logoImg={talkData[0].logoImg}
        contentImg={talkData[0].contentImg}
        title={talkData[0].title}
        content={talkData[0].content}
      ></Main>
    </WrapDiv>
  );
};

export default Talk;
