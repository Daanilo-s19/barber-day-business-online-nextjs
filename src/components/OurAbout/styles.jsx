import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin-top: 177px;
  padding: 0 186px;
  height: 100%;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    #ellipse {
      animation: spin 120s linear infinite;
    }
  }

  .description {
    margin: -87px 0 125px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      max-width: 640px;
      font-size: 16px;
      line-height: 19px;
      opacity: 0.4;
    }
  }

  .orbit-one {
    width: 524px;
    height: 524px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(3, auto);
    animation: spin 120s linear infinite;
    /* animation: spin 25s linear infinite; */
    border-radius: 51%;

    .user {
      animation: userAnimation 7500ms linear infinite;

      animation-delay: 7500ms;
      animation-direction: alternate;

      /* &:hover {
        animation: none;
      } */
    }

    &:hover {
      animation-play-state: paused;

      .orbit-two {
        animation-play-state: paused;
      }
      .orbit-three {
        animation-play-state: paused;
      }
      .content {
        animation-play-state: paused;
      }
      .user {
        animation: none;
      }
    }
  }

  .orbit-two {
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    width: 398px;
    height: 398px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-rows: repeat(3, auto);
    border-radius: 51%;
    animation: spin 60s linear infinite;
    animation-direction: reverse;
    /* animation: spinoff 20s linear infinite; */
  }
  .orbit-three {
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    width: 326px;
    height: 326px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: grid;
    grid-template-rows: repeat(3, auto);
    animation: spin 30s linear infinite;
    /* animation: spin 20s linear infinite; */
    border-radius: 51%;
  }

  .content {
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: spin 40s linear infinite;
    animation-direction: reverse;
    /* animation: spinoff 25s linear infinite; */

    .content-main {
      width: 224px;
      height: 224px;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        animation: spin 15s linear infinite;
        background: url("assets/border_dash_about.svg");
        z-index: -1;
      }

      .circle {
        width: 160px;
        height: 160px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          text-transform: uppercase;
          text-align: center;
          background-clip: text;
          cursor: pointer;
          background: -webkit-linear-gradient(
            18.57deg,
            #552ee5 14.56%,
            #ee5a59 85.55%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        img {
          width: 30%;
        }
      }
    }
  }

  .top {
    grid-row: 1/2;
    grid-column: 1/4;
    justify-self: center;
  }

  .bottom {
    grid-row: 3/4;
    grid-column: 1/4;
    align-self: end;
    justify-self: center;
  }

  .left,
  .right {
    grid-row: 2/3;
    align-self: center;
  }
  .left {
    grid-column: 1/2;
  }
  .right {
    justify-self: end;
    grid-column: 3/4;
  }
  /* .center {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    .right {
      justify-self: end;
      grid-column: 3/4;
    }
  } */

  .user {
    width: 24px;
    height: 24px;

    margin: -15px;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 20px #202c3d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &:hover {
      margin: -20px;
      width: 40px;
      height: 40px;
    }
  }
  .without-border {
    border: none;
    box-shadow: none;
  }
  .paused {
  }
  @keyframes userAnimation {
    from {
      /* transform: rotate(360deg); */
      opacity: 1;
    }
    to {
      /* transform: rotate(0deg); */
      opacity: 0;
    }
    /* from {
      opacity: 0;
    }
    to {
      opacity: 1;
    } */
  }
`;
