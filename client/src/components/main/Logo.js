import style from "../../styles/Main/logo/logo.module.css";
const Logo = () => {
  return (
    <div className={style.logo}>
      <img
        src="/assets/Images/KUROSA.gif"
        alt="logoImage"
        className={style.logo__img}
      ></img>
    </div>
  );
};

export default Logo;
