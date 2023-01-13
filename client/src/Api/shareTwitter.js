import env from "../utils/env";

const shareToTwitter = () => {
  var sendText = "사이버 점집 KUROSA_2023cyber fortune teller"; // 전달할 텍스트
  var sendUrl = env.serverAddress; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
};

export default shareToTwitter;
