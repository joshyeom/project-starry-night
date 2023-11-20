import { styled, keyframes } from "styled-components";

export const opacityFirst = keyframes`
    0%{
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

export const opacitySecond = keyframes`
    0%{
        opacity: 0;
    }
    20%{
        opacity: 1;
    }
    85%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: white;
  font-size: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Georgia", serif;
  opacity: 0;
  animation: ${opacityFirst} 3s ease-in-out forwards;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 40px;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: 30px;
  }
`;
