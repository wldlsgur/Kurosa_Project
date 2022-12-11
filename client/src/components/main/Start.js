import styled from "styled-components";
import Footer from "../common/footer";
import { Link } from "react-router-dom";
//src="/assets/Images/logoCircle.png"
//  src="/assets/Images/logoStart.png"
//<Link to="/talk">
const StartDiv = styled.div`
  witdh: 100%;
  height: 50%;
  background-image: url("/assets/Images/logoBackground.gif");
  background-size: 100% 100%;
  text-align: center;
`;

const StartImgDiv = styled.div`
  witdh: 100%;
`;
const StartImg = styled.img`
  witdh: 200px;
  height: 200px;
`;

const Start = () => {
  return (
    <StartDiv>
      <StartImgDiv>
        <StartImg src={"/assets/Images/logoStart.png"}></StartImg>
      </StartImgDiv>
      <Footer></Footer>
    </StartDiv>
  );
};

export default Start;
