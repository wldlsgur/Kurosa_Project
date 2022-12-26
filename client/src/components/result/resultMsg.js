import styled from "styled-components";

const ResultMsg = ({ msgUrl }) => {
  console.log("하위 : ", msgUrl);

  return <MsgDiv msgUrl={msgUrl}></MsgDiv>;
};

const MsgDiv = styled.div`
  width: 293px;
  height: 238px;
  margin: 0 auto;
  background-image: url("${(props) => props.msgUrl}");
  background-size: 100% 100%;
  margin-top: 240px;
`;

export default ResultMsg;
