import env from "../utils/env";

const shareToTwitter = () => {
  var sendText = "사이버 점집 KUROSA_2023 cyber fortune teller"; // 전달할 텍스트
  var sendUrl =
    "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MjYxMzgzMjMzMTkwMzcw?igshid=MDJmNzVkMjY=";
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
};

export default shareToTwitter;
