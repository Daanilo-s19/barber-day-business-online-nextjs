import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 410px;
  background: RGBA(52, 58, 64, 0.4);
  margin: 140px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    grid-column: 2/3;
    max-width: 1366px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 554px);
    align-items: center;
  }
  .filter-gold {
    height: 100%;
    width: 100%;
    background: url('assets/background/stamp.svg') center no-repeat;
    display: flex;
    justify-content: center;

    /* width: 100vw;
    height: 100vh;
    background: url('assets/background/stamp.svg') 50% 50% no-repeat; */
  }
  #stamp {
    padding: 64px;
    align-self: center;
    justify-self: end;
  }
  .description {
    label {
      font-weight: normal;
      font-size: 28px;
      line-height: 125.1%;
      color: #ffffff;
      mix-blend-mode: normal;
    }
    b {
      font-weight: bold;
    }
    p {
      margin-top: 20px;

      font-size: 18px;
      line-height: 20px;
      color: #ffffff;
      opacity: 0.8;
    }
  }
`