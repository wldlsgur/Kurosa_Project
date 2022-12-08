import styled from "styled-components";
import Logo from "./logo";
import Content from "./content";

const MainDiv = styled.div`
  witdh: 100%;
  heigth: 100%;
  padding: 0px 40px 0px 40px;
`;
const Main = ({ logoImg, contentImg, title, content }) => {
  return (
    <MainDiv>
      <Logo url={logoImg}></Logo>
      <Content
        contentImg={contentImg}
        title={title}
        content={content}
      ></Content>
    </MainDiv>
  );
};

export default Main;
