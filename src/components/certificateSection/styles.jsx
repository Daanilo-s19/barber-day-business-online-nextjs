import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  display: grid;
  padding-top: 192px;
  grid-template-columns: repeat(3, 1fr);
  background: url('assets/background/bonus.svg') 35% 35% no-repeat;
  /* animation: opacity 3s infinite alternate; */

  .max-header {
    width: 100%;
    max-width: 544px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      text-align: center;
      margin-bottom: 100px;
    }
  }
  .texture-left {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: start;
  }

  .texture-right {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: end;
  }
  .content-center {
    img {
      animation: go-back 3s infinite alternate;
    }
  }

  @keyframes go-back {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
