import logoCircle from "../../assets/Images/logoCircle.png";
import logoStart from "../../assets/Images/logoStart.png";
import logoHeader from "../../assets/Images/logoHeader.gif";
import "../../styles/Main/start/start.css";
const Start = () => {
  return (
    <div className="start">
      <div className="top">
        <div className="top__header">
          <img src={logoHeader} alt="logoHeader"></img>
        </div>
        <div>
          <img src={logoCircle} alt="logoCircle" className="top__circle"></img>
        </div>
      </div>
      <div className="bottom">
        <img src={logoStart} alt="logoStart" className="bottom__start"></img>
        <div className="bottom__footer"></div>
      </div>
    </div>
  );
};

export default Start;
