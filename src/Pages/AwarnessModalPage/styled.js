import { styled, keyframes } from "styled-components";

export const pulseKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonLoader = styled.div`
  width: 100%;
`;

export const SkeletonVideo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SkeletonThumbnail = styled.div`
  width: 120px;
  height: 90px;
  background-color: gray;
  animation: ${pulseKeyframes} 1s ease-in-out infinite;
`;

export const SkeletonDetails = styled.div`
  flex-grow: 1;
  margin-left: 16px;
`;

export const SkeletonTitle = styled.div`
  width: 70%;
  height: 18px;
  background-color: gray;
  margin-bottom: 8px;
  animation: pulse 1s ease-in-out infinite;
`;

export const SkeletonChannel = styled.div`
  width: 50%;
  height: 14px;
  background-color: gray;
  animation: pulse 1s ease-in-out infinite;
`;

export const YoutubeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 40%;
  height: 80%;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ThumbnailSvg = styled.svg`
  position: absolute;
  bottom: 5%;
  right: 5%;
  fill: white;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const DescriptionContainer = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionContainerH1 = styled.h1`
  font-size: 4rem;
`;

export const MoreButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MoreButtonSvg = styled.svg`
  cursor: pointer;
`;

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IframeContainerSvg = styled.svg`
  position: absolute;
  width: 5%;
  height: 5%;
  top: 5%;
  left: 0;
  cursor: pointer;
`;

export const IframeContainerIframe = styled.iframe`
  width: 80%;
  height: 80%;
`;

export const MoreContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MoreContainerSvg = styled.svg`
  position: absolute;
  width: 5%;
  height: 5%;
  top: 5%;
  left: 0;
  cursor: pointer;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 80%;
  height: 80%;
`;

export const VideoItem = styled.div`
  width: 20%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const VideoItemImg = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`;

export const PaginationButtons = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const PaginationButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const ActivePaginationButton = styled.div`
  color: red;
`;
