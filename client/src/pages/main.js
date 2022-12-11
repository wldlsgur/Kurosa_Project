import Warring from "../components/main/Warring";
import Logo from "../components/main/Logo";
import Start from "../components/main/Start";
import NotFound from "../components/common/NotFound";
import updateMainLogo from "../store/actions/main/mainLogo_Update";
import { useSelector, useDispatch } from "react-redux";
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import StartLogo from "../components/main/StartLogo";

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
        <WrapDiv color="black">
          <Header></Header>
          <StartLogo></StartLogo>
          <Start></Start>
        </WrapDiv>
      );
    default:
      return <NotFound></NotFound>;
  }
};

export default Main;
