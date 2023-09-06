import { styled, keyframes } from "styled-components";

export const AnimationLevel = keyframes`
    0%{
        bottom: 4%;
        opacity: 0;
    }
    100%{
        bottom: 5%;
        opacity: 1;
    }
    `;

export const SvgContainer = styled.div`
  position: absolute;
  width: 20%;
  bottom: 5%;
  right: 2%;
  animation: ${AnimationLevel} 0.5s ease-in-out forwards;
  animation-delay: 4.5s;
  opacity: 0;
  cursor: pointer;
`;

export const DisplayLevel = styled.img`
  position: absolute;
  bottom: 5%;
  right: 2%;
  width: 20%;
  cursor: pointer;
`;
