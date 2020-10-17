import styled from 'styled-components'
export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 66px 0 0;
  position: relative; */

  #logo-background {
    width: 395px;
    height: 526px;
    background: url('assets/logobg.svg');
    display: grid;
    grid-template-rows: 237px 40px;
    align-content: center;
    justify-items: center;
    align-items: center;
    justify-items: center;
    gap: 40px;
    img {
      align-self: end;
      width: 137px;
      height: 182px;
      /* margin-bottom: 40px; */
    }

    label {
      font-weight: bold;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: 11px;
      text-transform: uppercase;
      color: #d5faeb;
    }
  }
  .description {
    margin-top: 20px;
  }

  .loading {
    margin-top: 12px;
    display: flex;
    justify-content: center;

    #dot-two {
      animation-delay: 0.4s;
    }
    #dot-three {
      animation-delay: 0.8s;
    }
    div {
      width: 6px;
      height: 6px;
      margin-left: 12px;
      background: #ffffff;
      border-radius: 50%;
      animation: opacityDots 1500ms linear infinite;
      animation-direction: alternate;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
  }
  @keyframes opacityAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes opacityDots {
    from {
      transform: scale(0.4) translateY(2px);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
