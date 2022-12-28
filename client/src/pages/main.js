import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// Component
import Warring from "../components/main/Warring";
import Start from "../components/main/Start";
import NotFound from "../components/common/NotFound";
import Logo from "../components/main/Logo";
import StartLogo from "../components/main/StartLogo";
import Language from "../components/main/Language";
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
// redux
import updateMainLogo from "../store/actions/main/mainLogo_Update";
import updateDotState from "../store/actions/main/dotState_Update";

const StartWrap = styled(WrapDiv)`
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  const mainLogoRedux = useSelector((state) => state.mainLogoRedux);
  const dotStateRedux = useSelector((state) => state.dotRedux);
  const dispatch = useDispatch();

  const changeLogo = (show) => {
    dispatch(updateMainLogo(show));
  };

  switch (mainLogoRedux.show) {
    case "language":
      return (
        <WrapDiv color="black">
          <Language updateMain={changeLogo}></Language>
        </WrapDiv>
      );
    case "warring":
      return (
        <WrapDiv color="black">
          <Warring updateMain={changeLogo}></Warring>
        </WrapDiv>
      );
    case "logo":
      setTimeout(() => {
        changeLogo("start");
      }, 5000);
      return (
        <WrapDiv color="black">
          <Logo></Logo>
        </WrapDiv>
      );
    case "start":
      return (
        <StartWrap color="black">
          <Header></Header>
          <StartLogo dotState={dotStateRedux.state}></StartLogo>
          <Start></Start>
        </StartWrap>
      );
    default:
      return <NotFound></NotFound>;
  }
};

export default Main;
