import styled from "styled-components";

export const AllCases = styled.div`
  width: 100%;
  max-width: 736px;
  height: 123px;
  margin: 0 auto 132px;
  background: linear-gradient(
    270deg,
    rgba(199, 222, 255, 0.05) 0%,
    rgba(199, 222, 255, 0) 56.25%
  );
  backdrop-filter: blur(10px);
  border-radius: 10px;

  display: grid;
  grid-template-columns: ${(props) =>
    props.pageCases ? "repeat(6, 1fr)" : "repeat(4, 1fr) 2fr"};

  align-items: center;

  .project {
    width: 100%;
    max-width: 123px;
    height: 123px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .description {
    width: 100%;
    display: flex;
    margin: 0 auto 0 47px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;

    span {
      /* width: 151px; */
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
      text-transform: uppercase;
      background-clip: text;
      cursor: pointer;
      background: -webkit-linear-gradient(
        10.34deg,
        #552ee5 14.56%,
        #ee5a59 85.55%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    img {
      width: 76px;
      transition: 500ms;
    }

    &:hover {
      img {
        width: 157px;
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    ${(props) => !props.pageCases && "grid-template-columns: 1fr 1fr 1fr "};
    ${(props) => !props.pageCases && "grid-template-rows: 1fr 1fr "};

    justify-items: center;
    .project {
      ${(props) => !props.pageCases && " display: none;"};
    }
    .description {
      grid-column: 1/4;
      grid-row: 1/3;
      align-self: center;
      width: auto;
      margin: 0;
      text-align: center;
    }
  }
`;
export const Cases = styled.div`
  width: 100%;
  margin: 72px 0 132px;
  padding: 0 123px;
  background: url("assets/filter_space.svg");
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  #responsive {
    display: block;
  }

  .content-image {
    grid-column: ${(props) => (props.order === "true" ? "1/2" : "2/3")};
    grid-row: 1/2;

    justify-self: ${(props) => (props.order === "true" ? "end" : "start")};
    width: 100%;
    max-width: 416px;
    height: 278px;
    background: ${(props) =>
      props.color
        ? props.color
        : "linear-gradient(180deg, rgba(85, 46, 229, 0.4) 0%, rgba(85, 46, 229, 0) 100%)"};

    backdrop-filter: blur(10px);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: ${(props) =>
        props.hover ? props.hover : "rgba(85, 46, 229, 0.4)"};
    }
    img {
      width: auto;
      max-width: 320px;
      height: 222px;
    }
  }
  .divider {
    margin: 16px 0 72px;
  }
  .content-description {
    grid-column: ${(props) => (props.order === "true" ? "2/3" : "1/2")};
    justify-self: ${(props) => (props.order === "true" ? "start" : "end")};
    grid-row: 1/2;

    width: 100%;
    max-width: 345px;

    h5 {
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #ffffff;
      opacity: 0.4;
      margin-bottom: 8px;
    }
    span {
      align-self: start;
      font-size: 12px;
      line-height: 12px;
      color: #ffffff;
      opacity: 0.8;
      margin: 16px 0 0;
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    #responsive {
      display: none;
    }
    padding: 0;
    margin: 88px 0;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 1fr);
    gap: 32px;
    .content-image {
      max-width: 90%;
      grid-row: 1/2;
      grid-column: 1/2;
      border-radius: ${(props) =>
        props.order === "true" ? " 20px 0 0 20px" : "0 20px 20px 0"};
      justify-content: ${(props) =>
        props.order === "true" ? "flex-end" : "flex-start"};
    }
    .content-description {
      grid-row: 2/3;
      grid-column: 1/2;
      justify-self: center;
    }
  }
`;
