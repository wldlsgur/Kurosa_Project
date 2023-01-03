const shareToTwitter = () => {
  const sharedLink =
    "text=" +
    encodeURIComponent("title" + " \n ") +
    encodeURIComponent(process.env.REACT_APP_SERVER_IP_ADRESS);
  window.open(`https://www.twitter.com/intent/tweet?${sharedLink}`);
};

export default shareToTwitter;
