import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Content = ({
  fontStyle,
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
        fontStyle={fontStyle}
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
        <TitleDiv>
          <TitleP>{title}</TitleP>
        </TitleDiv>
        <ContentListDiv>
          <ContentP>{talkData[index].content[0]}</ContentP>
          {content.map((value, index) => {
            return <ContentP key={index}>{value}</ContentP>;
          })}
        </ContentListDiv>
      </ContentDiv2>
    );
  }

  return (
    <ContentDiv fontStyle={fontStyle} url={contentImg} onClick={addTalkIndex}>
      <TitleDiv>
        <TitleP>{title}</TitleP>
      </TitleDiv>
      <ContentP>{content}</ContentP>
    </ContentDiv>
  );
};
const ContentDiv = styled.div`
  flex: 1 1 45%;
  background-image: url(${(props) => props.url || "none"});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  animation-name: fadeOut;
  animation-duration: 5s;
  font-family: ${(props) => props.fontStyle || "none"};
`;
const TitleDiv = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 18%;
`;
const TitleP = styled.p`
  color: #00ff00;
  font-size: 25px;
  line-height: 46px;
`;
const ContentP = styled.p`
  color: #00ff00;
  font-size: 17px;
  line-height: 26px;
`;
const ContentListDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1% 6% 0 6%;
`;
const ContentDiv2 = styled(ContentDiv)`
  flex: 1 1 32.9%;
  margin: 0px 9% 0px 9%;
  animation-name: none;
`;
export default Content;
