import logoImage from "../../assets/Images/logoImage.png";
import "../../styles/Main/logo/logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="logoImage" className="logo__img"></img>
    </div>
  );
};

export default Logo;
