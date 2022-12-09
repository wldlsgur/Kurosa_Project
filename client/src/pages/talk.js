import Footer from "../components/common/footer.js";
import WrapDiv from "../components/common/Wrapper.js";
import Main from "../components/talk/main.js";
import talkData from "../utils/TalkData.js";
import talkIndexAdd from "../store/actions/talk/talkIndex_Add";
import { useSelector, useDispatch } from "react-redux";

const Talk = () => {
  const talkStateReducer = useSelector((state) => state.talkStateReducer);
  const dispatch = useDispatch();
  let index = talkStateReducer.index;

  const addTalkIndex = (data) => {
    dispatch(talkIndexAdd());
  };
  if (index > 1) {
    return (
      <WrapDiv url={"/assets/Images/talkBackground.gif"}>
        <Main
          addTalkIndex={addTalkIndex}
          logoImg={talkData[index].logoImg}
          contentImg={talkData[index].contentImg}
          title={talkData[index].title}
          content={talkData[index].content}
        ></Main>
        <Footer></Footer>
      </WrapDiv>
    );
  }
  return (
    <WrapDiv url={"/assets/Images/talkBackground.gif"}>
      <Main
        addTalkIndex={addTalkIndex}
        logoImg={talkData[index].logoImg}
        contentImg={talkData[index].contentImg}
        title={talkData[index].title}
        content={talkData[index].content}
      ></Main>
    </WrapDiv>
  );
};

export default Talk;
