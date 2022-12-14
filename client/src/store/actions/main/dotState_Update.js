const DotState_Toggle = "DotState_Toggle";

const updateMainLogo = (data) => {
  return {
    type: DotState_Toggle,
    payload: data,
  };
};

export default updateMainLogo;
