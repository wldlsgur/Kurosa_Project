import styled from "styled-components";

const Dotdiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  border-radius: 0%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  animation-name: fullscreen;
  animation-duration: 1s;
  display: ${(props) => props.state};

  @keyframes fullscreen {
    from {
      border-radius: 50%;
      width: 1px;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    75% {
      border-radius: 50%;
    }
    to {
      border-radius: none;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;
export default Dotdiv;
