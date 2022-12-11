import styled from "styled-components";

const WrapDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color || "none"};
  background-image: url("${(props) => props.url || "none"}");
  background-size: cover;
  overflow: hidden;
`;

export default WrapDiv;
