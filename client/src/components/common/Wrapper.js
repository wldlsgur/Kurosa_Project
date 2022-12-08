import styled from "styled-components";

const WrapDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${(props) => props.url || "none"}");
  background-size: cover;
`;

export default WrapDiv;
