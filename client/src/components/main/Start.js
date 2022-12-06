import logoCircle from "../../assets/Images/logoCircle.png";
import logoStart from "../../assets/Images/logoStart.png";
import logoHeader from "../../assets/Images/logoHeader.gif";
import style from "../../styles/Main/start/start.module.css";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className={style.start}>
      <div className={style.header}>
        <img
          src={logoHeader}
          alt="logoHeader"
          className={style.header__img}
        ></img>
      </div>
      <div className={style.circle}>
        <img
          src={logoCircle}
          alt="logoCircle"
          className={style.circle__img}
        ></img>
      </div>
      <div className={style.bottom}>
        <div className={style.startBtn}>
          <Link to="/ask">
            <img
              src={logoStart}
              alt="logoStart"
              className={style.startBtn__img}
            ></img>
          </Link>
        </div>
        <div className={style.footer}>
          <img
            src={logoHeader}
            alt="logoFooter"
            className={style.footer__img}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Start;
