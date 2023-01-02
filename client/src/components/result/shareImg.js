import styled from "styled-components";

const ShareImg = ({ openShareModal, shareImg }) => {
  return (
    <ShareImgDiv>
      <ShareImgImg src={shareImg} onClick={openShareModal}></ShareImgImg>
    </ShareImgDiv>
  );
};

const ShareImgDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 71px;
`;

const ShareImgImg = styled.img`
  width: 188px;
  height: 63px;
`;

export default ShareImg;
