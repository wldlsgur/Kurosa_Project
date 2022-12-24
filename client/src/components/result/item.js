import styled from "styled-components";
import ItemImg from "./itemImg";
import ItemInfo from "./itemInfo";

const Item = () => {
  return (
    <ItemDiv>
      <ItemImg></ItemImg>
      <ItemInfo></ItemInfo>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  witdh: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default Item;
