const Main = (props) => {
  const { logoImg, talkBackground, title, content } = props;

  return (
    <div className="main">
      <div className="logo">
        <img className="logo__img" src={logoImg} alt="logoImg"></img>
      </div>
      <background></background>
      <div
        className="content"
        style={{ background: "url({" + talkBackground + "})" }}
      >
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Main;
