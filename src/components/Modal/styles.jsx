import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;

  animation: opacityContainer 200ms linear;
  top: 0;
  z-index: 999999;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background: #fff;
    border-radius: 8px;
    padding: 8px;
  }
`;
