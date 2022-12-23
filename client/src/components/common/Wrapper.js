import styled from "styled-components";

const WrapDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || "none"};
  background-image: url("${(props) => props.url || "none"}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default WrapDiv;
