import styled from "styled-components";
import ItemImg from "./itemImg";
import ItemInfo from "./itemInfo";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Item = () => {
  const { t, i18n } = useTranslation();
  const result = t("result", { returnObjects: true });
  let index = Math.floor(Math.random() * (10 - 0));
  useEffect(() => {}, []);

  return (
    <ItemDiv>
      <ItemImg url={t(result[index].img)}></ItemImg>
      <ItemInfo info={result[index].info}></ItemInfo>
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
