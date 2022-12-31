import styled from "styled-components";
import useFontStyle from "../../utils/useFontStyle";
const ItemInfo = ({ info }) => {
  const fontStyle = useFontStyle();

  return (
    <ItemInfoDiv>
      {info.map((value, index) => {
        return (
          <ItemInfoP key={index} fontStyle={fontStyle}>
            {value}
          </ItemInfoP>
        );
      })}
    </ItemInfoDiv>
  );
};

const ItemInfoDiv = styled.div`
  width: 335px;
  height: 249px;
  background-image: url("/assets/Images/itemContentBackground.png");
  background-size: 100% 100%;

  padding: 30px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ItemInfoP = styled.p`
  font-family: ${(props) => props.fontStyle};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #00ff00;
`;

export default ItemInfo;
