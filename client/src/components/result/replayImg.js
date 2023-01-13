import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { replayInit } from "../../store/actions/qna/qnaindex";
import { initView } from "../../store/actions/qna/changeView";

const ReplayImg = () => {
const navigate = useNavigate();
const dispatch = useDispatch();


  return <LogoImgDiv onClick={() => {
      dispatch(replayInit());
      dispatch(initView());
      navigate("/", { replace: true });}}>
      </LogoImgDiv>;
};

const LogoImgDiv = styled.div`
  width: 23px;
  height: 23px;
  background-image: url("/assets/QnaImges/replay.png");
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 50px;
`;
export default ReplayImg;
