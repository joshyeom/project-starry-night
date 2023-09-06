import './DisplayLevel.css'
import { useState,useEffect,useRef } from 'react'
import { pollutionLevelAtom } from '../../Atom';
import { useRecoilState } from 'recoil'; 
import * as SC from './styled'

export const DisplayLevel = () => {
    const [isImg, setIsImg] = useState(false);
    const [pollutionLevel] = useRecoilState(pollutionLevelAtom);
    const checkLevelElementsRef = useRef([]);

    useEffect(() => {
        const checkLevelElements = document.querySelectorAll('.checkLevel');
        checkLevelElementsRef.current = Array.from(checkLevelElements);
        handleHideCheckLevel(pollutionLevel);
      }, [pollutionLevel]);
    
      const handleHideCheckLevel = (pollutionLevel) => {
        switch (pollutionLevel) {
          case 0.02:
            hideCheckLevel(1);
            break;
          case 0.04:
            hideCheckLevel(2);
            break;
          case 0.5:
            hideCheckLevel(5);
            break;
          case 0.8:
            hideCheckLevel(7);
            break;
          default:
            break;
        }
      };
    
      const hideCheckLevel = (level) => {
        if (checkLevelElementsRef.current[level - 1]) {
          const elements = Array.from(checkLevelElementsRef.current).reverse();
          const element = elements[level - 1];
          element.style.display = 'none'; // display를 none으로 설정
        }
      };
      

      
    return(
            <SC.DisplayLevel>
                <SC.SvgContainer onClick={() => setIsImg(!isImg)}>
                    <svg viewBox="0 0 326 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="295.712" y="29.6949" width="27.0224" height="19.6526" fill="#010001"/>
                        <rect x="295.712" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5" className="checkLevel"/>
                        <rect x="253.644" y="29.6949" width="27.0224" height="19.6526" fill="#152B6D"/>
                        <rect x="253.644" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel"/>
                        <rect x="211.576" y="29.6949" width="27.0224" height="19.6526" fill="#64D841"/>
                        <rect x="211.576" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel" />
                        <rect x="169.508" y="29.6949" width="27.0224" height="19.6526" fill="#FDF953"/>
                        <rect x="169.508" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel" />
                        <rect x="127.441" y="29.6949" width="27.0224" height="19.6526" fill="#E1A53C"/>
                        <rect x="127.441" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel" />
                        <rect x="85.3728" y="29.6949" width="27.0224" height="19.6526" fill="#B75843"/>
                        <rect x="85.3728" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel" />
                        <rect x="43.3051" y="29.6949" width="27.0224" height="19.6526" fill="#9C241D"/>
                        <rect x="43.3051" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel" />
                        <rect x="1.2373" y="29.6949" width="27.0224" height="19.6526" fill="#AAAAAA"/>
                        <rect x="1.2373" y="29.6949" width="27.0224" height="19.6526" fill="black" fillOpacity="0.5"  className="checkLevel" />
                        <path d="M1.2373 56.9153L321.695 56.9153" stroke="white" strokeWidth="1.23729"/>
                        <path d="M2.31464 63.3915C2.55542 63.3932 2.79269 63.4372 3.02644 63.5233C3.26018 63.6094 3.47109 63.75 3.65914 63.9451C3.84895 64.1402 4.0001 64.4038 4.11258 64.736C4.22682 65.0664 4.28481 65.4777 4.28657 65.9698C4.28657 66.4425 4.23912 66.8635 4.14421 67.2325C4.04931 67.5999 3.9131 67.9101 3.73559 68.1631C3.55984 68.4162 3.3463 68.6087 3.09498 68.7405C2.84365 68.8723 2.56069 68.9382 2.2461 68.9382C1.92448 68.9382 1.63888 68.8749 1.38931 68.7484C1.13975 68.6218 0.936754 68.447 0.780335 68.2238C0.623917 67.9988 0.526375 67.7405 0.487709 67.4487H1.29177C1.3445 67.6807 1.4517 67.8687 1.6134 68.0129C1.77684 68.1552 1.98775 68.2264 2.2461 68.2264C2.64154 68.2264 2.94998 68.0542 3.17143 67.7097C3.39288 67.3635 3.50448 66.8801 3.50624 66.2597H3.46406C3.37266 66.4109 3.25843 66.5409 3.12134 66.6499C2.98601 66.7589 2.83399 66.8432 2.66527 66.903C2.49655 66.9628 2.3164 66.9926 2.12483 66.9926C1.81375 66.9926 1.53079 66.9162 1.27595 66.7633C1.02111 66.6104 0.818122 66.4003 0.666976 66.1332C0.51583 65.8661 0.440257 65.5611 0.440257 65.2184C0.440257 64.8775 0.517587 64.5681 0.672248 64.2905C0.828667 64.0128 1.0466 63.7931 1.32604 63.6314C1.60724 63.4679 1.93678 63.388 2.31464 63.3915ZM2.31728 64.0769C2.11165 64.0769 1.92623 64.1279 1.76103 64.2298C1.59758 64.33 1.4684 64.4662 1.3735 64.6384C1.27859 64.8089 1.23114 64.9987 1.23114 65.2079C1.23114 65.417 1.27683 65.6068 1.36822 65.7773C1.46137 65.946 1.58791 66.0805 1.74785 66.1807C1.90954 66.2791 2.09408 66.3283 2.30146 66.3283C2.45612 66.3283 2.60024 66.2984 2.73381 66.2387C2.86738 66.1789 2.98425 66.0963 3.08443 65.9908C3.18461 65.8836 3.26282 65.7624 3.31906 65.627C3.3753 65.4917 3.40342 65.3494 3.40342 65.2C3.40342 65.0014 3.35597 64.8168 3.26106 64.6464C3.16791 64.4759 3.03962 64.3388 2.87617 64.2351C2.71272 64.1296 2.52642 64.0769 2.31728 64.0769Z" fill="white"/>
                        <path d="M323.025 63.4653V68.8644H322.208V64.2825H322.176L320.885 65.1262V64.3458L322.232 63.4653H323.025Z" fill="white"/>
                        <line x1="1.85595" y1="54.4407" x2="1.85595" y2="59.3898" stroke="white" strokeWidth="1.23729"/>
                        <line x1="322.313" y1="54.4407" x2="322.313" y2="59.3898" stroke="white" strokeWidth="1.23729"/>
                    </svg>
                </SC.SvgContainer>
                {isImg &&
                <img onClick={() => setIsImg(!isImg)} src="./public/stars/level.jpg" alt="level"/>
                }
            </SC.DisplayLevel>
    )
}

export default DisplayLevel