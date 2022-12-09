import styled from "styled-components";

const ContentDiv = styled.div`
  witdh: 100%;
  flex: 1 1 60%;
  background-image: url(${(props) => props.url || "none"});
  background-size: 100% 100%;
  padding: 0px 40px 0px 40px;
`;
const TitleP = styled.p``;
const ContentP = styled.p``;

const Content = ({ addTalkIndex, contentImg, title, content }) => {
  return (
    <ContentDiv url={contentImg} onClick={addTalkIndex}>
      <TitleP>{title}</TitleP>
      <ContentP>{content}</ContentP>
    </ContentDiv>
  );
};

export default Content;
