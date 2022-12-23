import styled from "styled-components";

const ItemImg = ({ url }) => {
  <ImgDiv>
    <Img src={url}></Img>
  </ImgDiv>;
};

const ImgDiv = styled.div`
  witdh: 100%;
`;

const Img = styled.img`
  witdh: 500px;
  height: 500px;
`;

export default ItemImg;
