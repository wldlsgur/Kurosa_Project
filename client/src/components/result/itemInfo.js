import styled from "styled-components";

const ItemInfo = ({ info }) => {
  return (
    <ItemInfoDiv>
      {info.map((value, index) => {
        return <ItemInfoP key={index}>{value}</ItemInfoP>;
      })}
    </ItemInfoDiv>
  );
};

const ItemInfoDiv = styled.div`
  width: 335px;
  height: 249px;
  background-image: url("/assets/Images/itemContentBackground.png");
  background-size: 100% 100%;
`;

const ItemInfoP = styled.p`
  @font-face {
    font-family: "Ycomputer";
    src: url("/public/assets/Font/Ycomputer.ttf") format("truetype");
  }

  font-family: "Ycomputer";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #00ff00;
`;

export default ItemInfo;
