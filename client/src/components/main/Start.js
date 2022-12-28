import styled from "styled-components";
import Footer from "../common/footer";
import { useNavigate } from "react-router-dom";

const StartDiv = styled.div`
  witdh: 100%;
  background-image: url("/assets/Images/logoBackground.gif");
  background-size: 100% 100%;
  text-align: center;
  flex 1 1 50%;
  display: flex;
  flex-direction: column;
`;

const StartImgDiv = styled.div`
  witdh: 100%;
  flex: 1;
`;
const StartImg = styled.img`
  witdh: 200px;
  height: 200px;
`;

const Start = ({ toggleDot }) => {
  const navigate = useNavigate();

  return (
    <StartDiv>
      <StartImgDiv>
        <StartImg
          src={"/assets/Images/logoStart.png"}
          onClick={() => {
            navigate("/talk", { replace: true });
          }}
        ></StartImg>
      </StartImgDiv>
      <Footer></Footer>
    </StartDiv>
  );
};

export default Start;
