import './assets/Header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isInfoAtom, loginModalAtom, isAwarnessAtom} from './Atom';
import SignIn from './SignIn';
import AwarnessModal from './AwarnessModal';

const Header = () => {
    const navigate = useNavigate();
    const [isModal , setIsModal] = useState(false);
    const [isInfo , setIsInfo] = useRecoilState(isInfoAtom);
    const [loginModal, setLoginModal] = useRecoilState(loginModalAtom);
    const [isAwarness, setIsAwarness] = useRecoilState(isAwarnessAtom);


    const nickName = sessionStorage.getItem('nickName')
    const aboutStarryNight = () => {
        setIsModal(!isModal)
    }
    const loginModalHandler = () => {
        setLoginModal(!loginModal)
    }


    const backButtonHandler = () => {
        setIsInfo(!isInfo);
        navigate(-1)
    }

    const logOutHandler = () => {
        sessionStorage.removeItem('nickName');
        window.location.reload();
    }

    const AwarnessHandler = () => {
        setIsAwarness(!isAwarness);
    }
        
    return(
        <>
            <header>
                <div className="container-header">
            {isInfo && (
                <>
                <svg onClick={backButtonHandler} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z" fill="white"/>
                </svg>
                </>
            )}
                    <span onClick={aboutStarryNight}>About StarryNight</span>
                    <span onClick={AwarnessHandler}>Awarness</span>
                    {nickName ? <><span>{nickName}</span><span onClick={logOutHandler}>Log Out</span></> : <span onClick={loginModalHandler}>Sign In</span>}
                </div>
            </header>
            {isModal && (
                <>
                <div onClick={aboutStarryNight} className='filter'></div>
                    <div className="modal">
                        <div className="modal-content">
                        <p>Have you ever seen the night sky because you want to see the stars?<br/>
                        Have you ever looked up at the sky on an especially difficult day?<br/>
                        But you rarely see stars Why is it getting harder to see the stars?
                        <br/><br/>
                        According to the Ministry of Environment, light pollution refers to a condition in which excessive light due to improper use of artificial lighting or light leaking out of the lighting area to be illuminated interferes with people`&apos;`s healthy and pleasant lives or damages the environment. Although this type of pollution can exist throughout the day, its effects are magnified during the night with the contrast of darkness.The area affected by artificial illumination continues to increase. The Starry night raises awareness of the phenomenon that light pollution is getting worse as urbanization gets worse. This project also tried to show the seriousness of light pollution in each country and the seriousness of each country.

                        <br/><br/>
                        The Starry Night is a project by Jungho Yeom.
                        Data from <a href="https://www.darksky.org/light-pollution/">Dark Sky</a> and visualization created with Three.js.</p>
                        <button onClick={aboutStarryNight}>X</button>
                        </div>
                    </div>
                </>
        )}
        {
            loginModal && (
                <>
                    <div onClick={loginModalHandler} className='filter'></div>
                    <SignIn></SignIn>
                </>
            )
        }
        {
            isAwarness && (
                <>
                    <div onClick={AwarnessHandler} className='filter'></div>
                    <AwarnessModal/>
                </>
            )
        }
        </>
    )
}

export default Header;