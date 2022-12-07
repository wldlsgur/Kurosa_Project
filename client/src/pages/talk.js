import style from "../styles/Talk/talk/talk.css";
import Footer from "../components/common/footer.js";
import Main from "../components/talk/main.js";
import talkData from "../utils/TalkData.js";

const Talk = () => {
  return (
    <div className="wrap">
      <Main
        logoImg={talkData[0].logoImg}
        talkBackground={talkData[0].contentImg}
        title={talkData[0].title}
        content={talkData[0].content}
      ></Main>
      <Footer></Footer>
    </div>
  );
};

export default Talk;
