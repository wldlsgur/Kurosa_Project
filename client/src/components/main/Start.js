import styled from "styled-components";
import Footer from "../common/footer";
import { Link } from "react-router-dom";
//src="/assets/Images/logoCircle.png"
//  src="/assets/Images/logoStart.png"
//<Link to="/talk">
const MainDiv = styled.div`
  width: 100%;
  height: 100%-100px;
  display: flex;
  flex-direction: column;
`;

const LogoDiv = styled.div``;
const LogoImg = styled.img``;

const StartDiv = styled.div``;
const StartImg = styled.img``;

const Start = () => {
  return (
    <MainDiv>
      <LogoDiv>
        <LogoImg></LogoImg>
      </LogoDiv>
      <StartDiv>
        <StartImg></StartImg>
        <Footer></Footer>
      </StartDiv>
    </MainDiv>
  );
};

export default Start;
