import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 56px;
  margin: 143px 0 181px;
  background: url("assets/filter_space.svg");

  .content-header {
    display: grid;
    grid-template-columns: minmax(auto, 155px) 1.5fr 2fr minmax(auto, 155px);

    .title {
      grid-column: 2/3;
      max-width: 427px;
    }
    .border {
      align-self: center;
      img {
        width: 100%;
      }
    }
  }

  .content-item {
    grid-row: 2/3;
    display: grid;
    grid-template-columns: minmax(auto, 155px) 1fr minmax(auto, 155px);

    .content-alignment-flex {
      grid-column: 2/3;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .content-alignment-responsive {
      display: none;
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content-item {
      .content-alignment-flex {
        display: none;
      }

      .content-alignment-responsive {
        grid-column: 2/3;
        display: grid;
        grid-template-rows: repeat(3, 1fr);

        justify-items: center;

        .align-top-left {
          grid-column: 1/2;
        }
        .align-top-center {
          grid-column: 2/3;
        }
        .align-top-right {
          grid-column: 3/4;
        }
      }
    }
    .content-header {
      margin: 0 32px;
      display: grid;
      grid-template-columns: minmax(auto, 32px) 1fr minmax(auto, 32px);
      grid-template-rows: repeat(2, 1fr);

      .title {
        width: 100%;
        h4 {
          width: 296px;
        }
      }

      .border {
        grid-column: 2/3;
        grid-row: 2/3;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.modileS}{

    .content-item {      
      .content-alignment-responsive {        
        grid-template-rows: repeat(3, 84px);
      }
    }
    .content-header {
      margin: 0 ;

  }
}

  /* @media ${({ theme }) => theme.breakpoint.mobileL} {
    justify-items: center;

    max-width: 375px;
    .content-header {
      margin: 0;
      justify-self: center;
      grid-template-columns: 0 296px 0;

      .border {
        width: 296px;

        img {
          width: 100%;
        }
      }
    }
    .content-item {
      grid-template-columns: 0 296px 0;

      .content-alignment-responsive {
      }
    }
  } */
`;

export const Item = styled.div`
  width: 132px;
  height: 132px;
  background: -webkit-linear-gradient(10.34deg, #552ee5 14.56%, #ee5a59 85.55%);
  border-radius: 50%;
  animation: spin 5s linear infinite;
  transition: 3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    animation-play-state: paused;

    .circle {
      animation-play-state: paused;
    }
  }

  .circle {
    background: #1b1b34;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 9px;
    animation: spinoff 5s linear infinite;
    transition: 3s;
  }

  #years {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
  }

  .local {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    margin: 7px 0;
  }
  .fontSize {
    font-size: 11px;
  }
  #awards {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.08em;
    color: #ffffff;
    opacity: 0.8;
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    width: 86px;
    height: 86px;

    .circle {
      width: 84px;
      height: 84px;
    }

    #years {
      font-size: 8px;
      line-height: 9px;
    }

    .local {
      font-size: 9px;
      line-height: 11px;
    }
    .fontSize {
      font-size: 5 px;
    }
    #awards {
      font-size: 8px;
      line-height: 9px;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileS} {
    width: 66px;
    height: 66px;

    .circle {
      width: 64px;
      height: 64px;
    }

    #years {
      font-size: 5px;
      line-height: 6px;
    }

    .local {
      font-size: 5px;
      line-height: 6px;
    }
    .fontSize {
      font-size: 5 px;
    }
    #awards {
      font-size: 5px;
      line-height: 6px;
    }
  }
`;
