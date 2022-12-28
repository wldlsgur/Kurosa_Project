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
        <TitleDiv>
          <TitleP>{title}</TitleP>
        </TitleDiv>
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
`;
const TitleDiv = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 25px;
  line-height: 46px;
  flex-basis: 18%;
`;
const TitleP = styled.p``;
const ContentP = styled.p`
  font-family: "Ycomputer";
  color: #00ff00;
  font-size: 17px;
  line-height: 26px;
  margin-bottom: 20px;
`;
const ContentListDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 12% 0 12%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ContentDiv2 = styled(ContentDiv)`
  flex: 1 1 32.9%;
  margin: 0px 9% 0px 9%;
`;
export default Content;
