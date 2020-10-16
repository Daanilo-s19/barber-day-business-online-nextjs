import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1118px;
  height: 391px;
  margin: 108px auto 0px;
  background: linear-gradient(40.72deg, #2a9e98 14.56%, #7ee1cb 85.55%);
  border-radius: 300px 20px 124px 300px;
  padding: 0 94px 40px 40px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 94px;
  align-items: center;

  #player {
    margin-top: -60px;
  }
  .content {
    label {
      font-weight: bold;
      font-size: 24px;
      line-height: 125.1%;
      display: flex;
      align-items: center;
      color: #08374b;
      mix-blend-mode: normal;
      margin: 28px 0 12px 0;
    }
    b {
      font-weight: bold;
    }
    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
      color: #08374b;
      margin-bottom: 28px;
    }
    p:last-child {
      margin: 0;
    }
  }
  button {
    grid-column: 2/3;
    align-self: end;
    justify-self: end;
  }
`
