import styled from "styled-components";

const ContentDiv = styled.div`
  witdh: 100%;
  flex: 1 1 45%;
  background-image: url(${(props) => props.url || "none"});
  background-size: 100% 100%;
`;
const TitleP = styled.p`
  color: white;
`;
const ContentP = styled.p`
  color: white;
`;

const Content = ({ index, addTalkIndex, contentImg, title, content }) => {
  if (index > 1) {
    const ContentDiv2 = styled(ContentDiv)`
      flex: 1 1 32.9%;
      margin: 0px 9% 0px 9%;
    `;
    return (
      <ContentDiv2 url={contentImg} onClick={addTalkIndex}>
        <TitleP>{title}</TitleP>
        <ContentP>{content}</ContentP>
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

export default Content;
