import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// Component
import Warring from "../components/main/Warring";
import Start from "../components/main/Start";
import NotFound from "../components/common/NotFound";
import Logo from "../components/main/Logo";
import StartLogo from "../components/main/StartLogo";

import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
// redux
import updateMainLogo from "../store/actions/main/mainLogo_Update";

const StartWrap = styled(WrapDiv)`
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  const mainLogoRedux = useSelector((state) => state.mainLogoRedux);
  const dispatch = useDispatch();

  const changeLogo = (data) => {
    dispatch(updateMainLogo("logo"));
  };

  switch (mainLogoRedux.show) {
    case "warring":
      return (
        <WrapDiv color="black">
          <Warring updateMain={changeLogo}></Warring>;
        </WrapDiv>
      );
    case "logo":
      setTimeout(() => {
        dispatch(updateMainLogo("start"));
      }, 5000);
      return (
        <WrapDiv color="black">
          <Logo></Logo>;
        </WrapDiv>
      );
    case "start":
      return (
        <StartWrap color="black">
          <Header></Header>
          <StartLogo></StartLogo>
          <Start></Start>
        </StartWrap>
      );
    default:
      return <NotFound></NotFound>;
  }
};

export default Main;
