import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { replayInit } from "../../store/actions/qna/qnaindex";
import { initView } from "../../store/actions/qna/changeView";

function ReplayImg(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <LogoImgDiv>
      <RImg src="/assets/Images/restart.png" alt="replay"
        onClick={() => {
          dispatch(replayInit());
          dispatch(initView());
          navigate("/", { replace: true });}}
      ></RImg>
    </LogoImgDiv>
    );
}

const RImg = styled.img`
  width: 23px;
  height: 23px;
`;
const LogoImgDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-item: center;
  margin-top: 50px;
`;

export default ReplayImg;
