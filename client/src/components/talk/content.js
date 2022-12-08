import styled from "styled-components";

const ContentDiv = styled.div`
  witdh: 100%;
  height: 100%;
  background-image: url(${(props) => props.url || "none"});
  background-size: cover;
`;
const TitleP = styled.p``;
const ContentP = styled.p``;

const Content = ({ contentImg, title, content }) => {
  return (
    <ContentDiv url={contentImg}>
      <TitleP></TitleP>
      <ContentP></ContentP>
    </ContentDiv>
  );
};

export default Content;
