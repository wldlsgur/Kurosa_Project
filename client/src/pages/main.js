import Warring from "../components/main/Warring";
import Logo from "../components/main/Logo";
import Start from "../components/main/Start";
import NotFound from "../components/common/NotFound";
import style from "../styles/Main/main/main.module.css";
import updateMainLogo from "../store/actions/main/mainLogo_Update";
import { useSelector, useDispatch } from "react-redux";
const Main = () => {
  const mainLogoRedux = useSelector((state) => state.mainLogoRedux);
  const dispatch = useDispatch();

  const changeLogo = (data) => {
    dispatch(updateMainLogo("logo"));
  };
  const wrap = <div className={style.wrap}></div>;

  switch (mainLogoRedux.show) {
    case "warring":
      return (
        <div className={style.wrap}>
          <Warring updateMain={changeLogo}></Warring>;
        </div>
      );
    case "logo":
      setTimeout(() => {
        dispatch(updateMainLogo("start"));
      }, 5000);
      return (
        <div className={style.wrap}>
          <Logo></Logo>;
        </div>
      );
    case "start":
      return (
        <div className={style.wrap}>
          <Start></Start>;
        </div>
      );
    default:
      return <NotFound></NotFound>;
  }
};

export default Main;
