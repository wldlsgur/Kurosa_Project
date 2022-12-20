import styled from "styled-components";

function QnaImg({ url }) {
    return (
        <ImgDiv>
            <FrameDiv url="/assets/Qnaimges/qna-frame.png">
                <Img src={url}></Img>
            </FrameDiv>
        </ImgDiv>
    );
}


const ImgDiv = styled.div`
  width: 100%;
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 7% 5% 7%;
`;

const Img = styled.img`
  width: 320px;
  height: 225px;
  object-fit: cover;
`;

const FrameDiv = styled.div`
  width: 320px;
  height: 225px;
  object-fit: cover;
  background-image: url("${(props) => props.url || "none"}");
  background-repeat: no-repeat;
`;

export default QnaImg;