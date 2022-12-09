import styled from "styled-components";
import Logo from "./logo";
import Content from "./content";

const MainDiv = styled.div`
  witdh: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = ({ addTalkIndex, logoImg, contentImg, title, content }) => {
  return (
    <MainDiv>
      <Logo url={logoImg}></Logo>
      <Content
        addTalkIndex={addTalkIndex}
        contentImg={contentImg}
        title={title}
        content={content}
      ></Content>
    </MainDiv>
  );
};

export default Main;
