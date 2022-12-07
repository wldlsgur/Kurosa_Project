import style from "../../styles/common/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img
        src="/assets/Images/logoHeader.gif"
        alt="logoFooter"
        className={style.footer__img}
      ></img>
    </div>
  );
};

export default Footer;
