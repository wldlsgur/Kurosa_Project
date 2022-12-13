import style from "../../styles/Main/warring/warring.module.css";

const Warring = (props) => {
  const changeLogo = props.updateMain;
  const warringTitle = "광과민성 경고문";
  const warringContent =
    "본 콘텐츠는 섬광 장면(글리치)이 일부 포함되어 있으므로, 심약자, 광과민성 발작이 우려되거나, 경험하셨던 분들은 이용에 유의하시길 바랍니다.";
  const warringBtn = "OK";

  return (
    <div className={style.warring}>
      <p className={style.warring__title}>{warringTitle}</p>
      <p className={style.warring__content}>{warringContent}</p>
      <input
        type="button"
        value={warringBtn}
        className={style.warring__btn}
        onClick={() => {
          changeLogo("logo");
        }}
      ></input>
    </div>
  );
};

export default Warring;
