import logoCircle from "../../assets/Images/logoCircle.png";
import logoStart from "../../assets/Images/logoStart.png";
import logoHeader from "../../assets/Images/logoHeader.gif";
import "../../styles/Main/start/start.css";
const Start = () => {
  return (
    <div className="start">
      <div className="top">
        <div className="header">
          <img src={logoHeader} alt="logoHeader" className="header__img"></img>
        </div>
        <div className="circle">
          <img src={logoCircle} alt="logoCircle" className="circle__img"></img>
        </div>
      </div>
      <div className="bottom">
        <div className="startBtn">
          <img src={logoStart} alt="logoStart" className="startBtn__img"></img>
        </div>
        <div className="footer">
          <img src={logoHeader} alt="logoFooter" className="footer__img"></img>
        </div>
      </div>
    </div>
  );
};

export default Start;
