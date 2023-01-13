import styled from "styled-components";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useHref from "../../hooks/useHref";
import useNav from "../../hooks/useNav";

const SnsNav = () => {
  const twitterOpen = useHref("https://twitter.com/Kurosa_2023");
  const instagramOpen = useHref(
    "https://www.instagram.com/invites/contact/?i=1gq2pxjxahja9&utm_content=pw8ma4h"
  );
  const navigate = useNavigate();
  return (
    <SnsNavNav>
      <BsPersonFill size={20} color="#00FF00" onClick={() => {
          return navigate("/producers", { replace: true });}}></BsPersonFill>
      <FaTwitter size={20} color="#00FF00" onClick={twitterOpen}></FaTwitter>
      <FaInstagram
        size={20}
        color="#00FF00"
        onClick={instagramOpen}
      ></FaInstagram>
    </SnsNavNav>
  );
};

const SnsNavNav = styled.nav`
  width: 293px;
  height: 50px;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  align-item: center;
`;

export default SnsNav;
