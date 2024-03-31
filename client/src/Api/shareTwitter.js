const shareToTwitter = () => {
  var sendText = '사이버 점집 KUROSA_2023 cyber fortune teller'; // 전달할 텍스트
  var sendUrl = 'https://kurosa-project.vercel.app/result';
  window.open(
    'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl
  );
};

export default shareToTwitter;
