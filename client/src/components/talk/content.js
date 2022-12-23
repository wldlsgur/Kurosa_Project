import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Content = ({
  lastIndex,
  talkData,
  index,
  addTalkIndex,
  contentImg,
  title,
  content,
}) => {
  const navigate = useNavigate();

  if (index > 1) {
    return (
      <ContentDiv2
        url={contentImg}
        onClick={() => {
          let length = talkData.length - 1;
          if (
            length === index &&
            talkData[length].content.length === lastIndex.current
          ) {
            return navigate("/qna", { replace: true });
          }
          addTalkIndex();
        }}
      >
        <TitleP>{title}</TitleP>
        <ContentListDiv>
          {content.map((value, index) => {
            return <ContentP key={index}>{value}</ContentP>;
          })}
        </ContentListDiv>
      </ContentDiv2>
    );
  }

  return (
    <ContentDiv url={contentImg} onClick={addTalkIndex}>
      <TitleP>{title}</TitleP>
      <ContentP>{content}</ContentP>
    </ContentDiv>
  );
};
const ContentDiv = styled.div`
  witdh: 100%;
  flex: 1 1 45%;
  background-image: url(${(props) => props.url || "none"});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-left: 5%;
`;
const TitleP = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 28px;
  line-height: 46px;
  flex-basis: 18%;
`;
const ContentP = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 23px;
  line-height: 26px;
  padding: 0 14% 0 0;
`;
const ContentListDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ContentDiv2 = styled(ContentDiv)`
  flex: 1 1 32.9%;
  margin: 0px 9% 0px 9%;
`;
export default Content;
