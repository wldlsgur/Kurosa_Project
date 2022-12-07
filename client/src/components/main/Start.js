import style from "../../styles/Main/start/start.module.css";
import Footer from "../common/footer";
import Header from "../common/header";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className={style.start}>
      <Header></Header>
      <div className={style.circle}>
        <img
          src="/assets/Images/logoCircle.png"
          alt="logoCircle"
          className={style.circle__img}
        ></img>
      </div>
      <div className={style.bottom}>
        <div className={style.startBtn}>
          <Link to="/talk">
            <img
              src="/assets/Images/logoStart.png"
              alt="logoStart"
              className={style.startBtn__img}
            ></img>
          </Link>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Start;
