const shareToTwitter = () => {
  var sendText = "사이버 점집 KUROSA_2023\ncyber fortune teller\n"; // 전달할 텍스트
  var sendUrl = process.env.REACT_APP_SERVER_IP_ADRESS; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
};

export default shareToTwitter;
