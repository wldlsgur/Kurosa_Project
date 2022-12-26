import styled from "styled-components";

function QnaImg({ url }) {
    if(url === "/assets/Qnaimges/footprint-0.gif"){
        return (
            <ImgDiv>
                <Img src={url}></Img>
            </ImgDiv>
        )
    }
    
    if(url === "/assets/Images/talkLogo2.gif"){
        return (
            <ImgDiv>
                <Img src={url}></Img>
            </ImgDiv>
        )
    }
    if(url === ""){
        return (
            <ImgDiv>
            </ImgDiv>
        )
    }
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
  width: 310px;
  height: 215px;
  object-fit: cover;
`;

const FrameDiv = styled.div`
  width: 320px;
  height: 225px;
  background-image: url("${(props) => props.url || "none"}");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default QnaImg;