const MainLogo_Update = "MainLogo_Update";

const updateMainLogo = (data) => {
  return {
    type: MainLogo_Update,
    payload: data,
  };
};

export default updateMainLogo;
