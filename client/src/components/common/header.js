import style from "../../styles/common/header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <img
        src="/assets/Images/logoHeader.gif"
        alt="logoHeader"
        className={style.header__img}
      ></img>
    </div>
  );
};

export default Header;
