import styled from "styled-components";

const LaguageDiv = styled.div`
  witdh: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const KoreaP = styled.button`
  font-family: "JF Dot Kappa 20 0213";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #00ff00;
  background: none;
  border: none;
`;
const JapanP = styled.button`
  font-family: "Ycomputer";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: #00ff00;
  background: none;
  border: none;
`;

const Laguage = ({ updateMain }) => {
  return (
    <LaguageDiv>
      <KoreaP
        onClick={() => {
          updateMain("warring");
        }}
      >
        한국어
      </KoreaP>
      <JapanP
        onClick={() => {
          updateMain("warring");
        }}
      >
        日本語
      </JapanP>
    </LaguageDiv>
  );
};

export default Laguage;
