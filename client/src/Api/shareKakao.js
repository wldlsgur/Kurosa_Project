import env from "../utils/env";

const shareToKatalk = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(env.javascriptKey);
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 메시지 형식 : 피드 타입
      content: {
        title: "사이버 점집 KUROSA_2023",
        description: "cyber fortune teller",
        imageUrl: "https://ifh.cc/g/88Vrc1.jpg", // 메인으로 보여질 이미지 주소
        link: {
          webUrl: process.env.REACT_APP_SERVER_IP_ADRESS,
          mobileWebUrl: process.env.REACT_APP_SERVER_IP_ADRESS,
        },
      },
    });
  }
};

export default shareToKatalk;
