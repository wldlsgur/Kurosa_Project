const Share_Toggle = "Share_Toggle";

const shareToggle = (data) => {
  return {
    type: Share_Toggle,
    payload: data,
  };
};

export default shareToggle;
