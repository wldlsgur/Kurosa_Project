import logoImage from "../../assets/Images/KUROSA.gif";
import "../../styles/Main/logo/logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="logoImage" className="logo__img"></img>
    </div>
  );
};

export default Logo;
