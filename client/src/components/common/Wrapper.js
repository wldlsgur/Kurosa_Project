// 받을때 children 객체를 받는다.
function Wrapper({ children }) {
  return <div className="wrap">{children}</div>;
}

export default Wrapper;
