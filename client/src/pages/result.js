//component
import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Item from "../components/result/item";
import ResultMsg from "../components/result/resultMsg";
import SnsNav from "../components/result/snsLav";
import LogoImg from "../components/result/logoImg";
import ShareImg from "../components/result/shareImg";
import ShareModal from "../components/common/shareModal";
import { Helmet } from "react-helmet-async";

import resultMsgImageLanguageCheck from "../utils/resultMsgImageLanguageCheck";
import { useSelector, useDispatch } from "react-redux";
import shareToggle from "../store/actions/result/share";
import React from "react";
import { useTranslation } from "react-i18next";
import useFontStyle from "../utils/useFontStyle";
const ResultPage = () => {
  const shareController = useSelector((state) => state.shareController);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const openShareModal = () => {
    dispatch(shareToggle(true));
  };
  const closeShareModal = () => {
    dispatch(shareToggle(false));
  };
  const shareImg =
    i18n.language === "kr"
      ? "/assets/Images/share.png"
      : "/assets/Images/shareJp.png";

  return (
    <WrapDiv url={"/assets/Images/talkBackground.gif"}>
      <Helmet>
        <meta name="twitter:title" content="사이버 점집 KUROSA_2023" />
        <meta name="twitter:description" content="cyber fortune teller" />
        <meta name="twitter:card" content="https://ifh.cc/g/cvd79x.jpg" />
        <meta
          name="twitter:url"
          content={process.env.REACT_APP_SERVER_IP_ADRESS}
        />
        <meta name="twitter:image" content="https://ifh.cc/g/cvd79x.jpg" />
      </Helmet>
      <Header></Header>
      <Item></Item>
      <ShareImg openShareModal={openShareModal} shareImg={shareImg}></ShareImg>
      {!shareController.isShare ? (
        <React.Fragment>
          <ResultMsg msgUrl={resultMsgImageLanguageCheck()}></ResultMsg>
          <SnsNav></SnsNav>
        </React.Fragment>
      ) : (
        <ShareModal closeShareModal={closeShareModal}></ShareModal>
      )}
      <LogoImg></LogoImg>
      <Footer></Footer>
    </WrapDiv>
  );
};

export default ResultPage;
// Custom Hook 사용해보기
