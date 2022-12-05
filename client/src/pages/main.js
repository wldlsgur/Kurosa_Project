import Warring from "../components/main/Warring";
import Logo from "../components/main/Logo";
import Start from "../components/main/Start";
import NotFound from "../components/common/NotFound";
import "../styles/Main/main/main.css";
import updateMainLogo from "../store/actions/main/mainLogo_Update";

import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const mainLogoRedux = useSelector((state) => state.mainLogoRedux);
  const dispatch = useDispatch();

  const changeLogo = (data) => {
    dispatch(updateMainLogo("logo"));
  };
  switch (mainLogoRedux.show) {
    case "warring":
      return <Warring updateMain={changeLogo}></Warring>;
    case "logo":
      setTimeout(() => {
        dispatch(updateMainLogo("start"));
      }, 5000);
      return <Logo></Logo>;
    case "start":
      return <Start></Start>;
    default:
      return <NotFound></NotFound>;
  }
};

export default Main;
