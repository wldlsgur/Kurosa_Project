import styled from "styled-components";

const ItemImg = ({ url }) => {
  return <ItemImgDiv url={url}></ItemImgDiv>;
};

const ItemImgDiv = styled.div`
  width: 303.96px;
  height: 507px;
  background-image: url("${(props) => props.url}");
  background-size: 100% 100%;
  margin: 0 0 26px 0;
`;

export default ItemImg;
