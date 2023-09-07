import { styled, keyframes } from "styled-components";

export const AnimationHeader = keyframes`
    0%{
        top: 1rem;
        opacity: 0;
    }
    100%{
        top: 0.5rem;
        opacity: 1;
    }
`;

export const Header = styled.header`
  width: 100%;
  opacity: 0;
  position: absolute;
  color: white;
  display: flex;
  justify-content: flex-end;
  animation: ${AnimationHeader} 0.5s ease-in-out forwards;
  animation-delay: 4.5s;
`;

export const Container = styled.div`
  width: 30%;
`;

export const ModalContainer = styled.div`
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  font-size: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  pointer-events: auto;
`;

export const ModalContent = styled.div`
  width: 50%;
  height: 50%;
`;

export const ModalButton = styled.button`
  position: absolute;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  right: 0;
`;

export const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.1;
`;

// .signInModal{
//     position: absolute;
//     z-index: 999;
//     width: 25%;
//     height: 70%;
//     top:50%;
//     left:50%;
//     border-radius: 5%;
//     background-color: rgba(255,255,255,0.9);
//     transform: translate(-50%, -50%);
//     display: flex;
//     justify-content: space-around;
//     flex-direction: column;
//     align-items: center;
// }

// .container-header svg{
//     position: absolute;
//     scale: 2;
//     top: 100%;
//     left: 3%;
// }

// AwarnessModal{
//     position: absolute;
//     z-index: 999;
//     width: 80%;
//     height: 80%;
//     top:50%;
//     left:50%;
//     transform: translate(-50%, -50%);
//     background-color: rgba(255,255,255,0.9);
// }
