import logoImage from "../../assets/Images/KUROSA.gif";
import style from "../../styles/Main/logo/logo.module.css";
const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logoImage} alt="logoImage" className={style.logo__img}></img>
    </div>
  );
};

export default Logo;
