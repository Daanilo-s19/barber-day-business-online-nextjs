import styled from 'styled-components'
export const Container = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: hidden; */

  .header {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 72px;

    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 8px;
    }
    h4 {
      font-weight: bold;
      font-size: 24px;
      line-height: 125.1%;
    }
  }
`
export const Player = styled.section`
  max-width: 1054px;
  height: 364px;
  background: RGBA(52, 58, 64, 0.4);
  border-radius: ${(props) =>
    props.order === 'true'
      ? '300px 20px 124px 300px'
      : '124px 300px 300px 20px'};
  padding: ${(props) =>
    props.order === 'true' ? '  0 96px 22px 22px' : ' 0 22px 22px 96px'};
  margin-bottom: 56px;

  display: grid;
  grid-template-columns: ${(props) =>
    props.order === 'true' ? '1fr 3fr' : '3fr 1fr'};
  row-gap: 20px;
  column-gap: 94px;
  align-items: center;

  #player {
    grid-column: ${(props) => (props.order === 'true' ? ' 1/2' : '2/3')};
    grid-row: 1/3;
    margin-top: -60px;
  }
  .content {
    grid-column: ${(props) => (props.order === 'true' ? ' 2/3' : '1/2')};
    grid-row: 1/3;

    display: grid;
    grid-template-rows: auto;
    #name {
      font-weight: bold;
      font-size: 32px;
      line-height: 125.1%;
      color: #fff;
    }
    #tag {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 32px;
      background: -webkit-linear-gradient(
        40.72deg,
        #2a9e98 14.56%,
        #7ee1cb 85.55%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    #description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 16px;
    }
    #role {
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
      opacity: 0.8;
      text-align: justify;
    }
  }
`

export const Cases = styled.div`
  width: 100%;
  margin: 72px 0 132px;
  padding: 0 123px;
  background: url('assets/filter_space.svg');
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  #responsive {
    display: block;
  }

  .content-image {
    grid-column: ${(props) => (props.order === 'true' ? '1/2' : '2/3')};
    grid-row: 1/2;

    justify-self: ${(props) => (props.order === 'true' ? 'end' : 'start')};
    width: 100%;
    max-width: 416px;
    height: 278px;
    background: ${(props) =>
      props.color
        ? props.color
        : 'linear-gradient(180deg, rgba(85, 46, 229, 0.4) 0%, rgba(85, 46, 229, 0) 100%)'};

    backdrop-filter: blur(10px);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: ${(props) =>
        props.hover ? props.hover : 'rgba(85, 46, 229, 0.4)'};
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
    grid-column: ${(props) => (props.order === 'true' ? '2/3' : '1/2')};
    justify-self: ${(props) => (props.order === 'true' ? 'start' : 'end')};
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
        props.order === 'true' ? ' 20px 0 0 20px' : '0 20px 20px 0'};
      justify-content: ${(props) =>
        props.order === 'true' ? 'flex-end' : 'flex-start'};
    }
    .content-description {
      grid-row: 2/3;
      grid-column: 1/2;
      justify-self: center;
    }
  }
`
