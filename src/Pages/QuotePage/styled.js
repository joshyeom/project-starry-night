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
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Georgia", serif;
`;

export const FirstSpan = styled.span`
  opacity: 0;
  animation: ${opacityFirst} 5s ease-in-out forwards;
`;

export const SecondSpan = styled.span`
  opacity: 0;
  animation: ${opacitySecond} 4s ease-in-out forwards;
  animation-delay: 1s;
`;
