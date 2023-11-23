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
  height: 10%;
  position: absolute;
  top: 0;
  color: white;
  display: flex;
  justify-content: flex-end;
  animation: ${AnimationHeader} 0.5s ease-in-out forwards;
  animation-delay: 4.5s;
  z-index: 10;
`;

export const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  margin-right: 5rem;
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 999;
  color: white;
  display: flex;
  align-items: center;
  top: 50%;
  left: 50%;
  height: 50%;
  font-size: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  padding: 0 1rem;
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
  position: absolute;
  z-index: 998;
  background-color: white;
  opacity: 0.1;
`;

export const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  display: inline;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 1500px) {
    display: none;
  }
  @media screen and (max-width: 1730px) {
    font-size: 15px;
  }
`;

export const Hamburger = styled.button`
  display: none;
  height: 50%;
  width: 10%;
  color: white;
  border: none;
  background-color: transparent;
  position: absolute;
  margin-right: 30px;
  z-index: 10;
  @media screen and (max-width: 1500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ToggleMenu = styled.aside`
  background-color: rgba(255, 255, 255, 0.8);
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isClicked ? "50%" : "100%")};
  transition: 0.8s ease-in-out;
  overflow: hidden;
`;
