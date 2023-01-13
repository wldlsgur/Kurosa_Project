import FadeLoader from "react-spinners/FadeLoader";

const Loding = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <FadeLoader color="black" height={15} width={5} radius={2} margin={2} />
    </div>
  );
};

export default Loding;
