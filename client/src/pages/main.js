import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
// Component
import Warring from "../components/main/Warring";
import Start from "../components/main/Start";
import NotFound from "../components/common/NotFound";
import Logo from "../components/main/Logo";
import StartLogo from "../components/main/StartLogo";
import Language from "../components/main/Language";
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import Loding from "../components/common/Loding";
// redux
import updateMainLogo from "../store/actions/main/mainLogo_Update";
import { useEffect } from "react";
import { Howler } from "howler";
const StartWrap = styled(WrapDiv)`
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  const mainLogoRedux = useSelector((state) => state.mainLogoRedux);
  const dotStateRedux = useSelector((state) => state.dotRedux);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  Howler.stop();
  
  const fontStyle = i18n.language === "kr" ? "Ycomputer" : "JFDotKappa200213";
  const changeLogo = (show) => {
    dispatch(updateMainLogo(show));
  };

  useEffect(() => {
    dispatch(updateMainLogo("language"));
  }, []);
  if (!mainLogoRedux.show) {
    return <Loding></Loding>;
  }
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
          <Warring fontStyle={fontStyle} updateMain={changeLogo}></Warring>
        </WrapDiv>
      );
    case "logo":
      setTimeout(() => {
        changeLogo("start");
      }, 4000);
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
