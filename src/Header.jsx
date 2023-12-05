import './assets/Header.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isInfoAtom, loginModalAtom, isAwarnessAtom, isLoginAtom } from './Atom';
import SignIn from './SignIn';
import AwarnessModal from './AwarnessModal';
import AboutStarryNight from './AboutStarryNight';
import { useCookies } from 'react-cookie';
import { auth } from "./firebase-config";
import { getRedirectResult} from "firebase/auth";
import './assets/SignIn.css';

const Header = () => {
  const [cookies, setCookies, removeCookies] = useCookies(['nickName']);
  const navigate = useNavigate();
  const [isAboutStarryNight, setIsAboutStarryNight] = useState(false);
  const [isInfo, setIsInfo] = useRecoilState(isInfoAtom);
  const [loginModal, setLoginModal] = useRecoilState(loginModalAtom);
  const [isAwarness, setIsAwarness] = useRecoilState(isAwarnessAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  useEffect(() => {
    setLoginModal(true);

    requestAnimationFrame(() => {
      setLoginModal(false);
    });
  }, [setLoginModal]);

  useEffect(() => {
    const storedNickName = cookies.nickName;
    if (storedNickName) {
      setCookies('nickName', storedNickName);
    }
  }, [cookies.nickName, setCookies]);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result.user) {
          setIsLogin(true);
          setCookies('nickName', result.user.displayName, { path: '/' });
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }, [isLogin, setCookies]);

  const handleAboutStarryNight = () => {
    setIsAboutStarryNight(!isAboutStarryNight)
  }

  const handleLoginModal = () => {
    setLoginModal(!loginModal)
  }

  const backButtonHandler = () => {
    setIsInfo(!isInfo);
    navigate(-1)
  }

  const logOutHandler = () => {
    removeCookies('nickName');
    window.location.reload();
  }

  const handleAwarness = () => {
    setIsAwarness(!isAwarness);
  }

  return (
    <>
      <header>
        <div className="container-header">
          {isInfo && (
            <>
              <svg onClick={backButtonHandler} width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z" fill="white" />
              </svg>
            </>
          )}
          <button onClick={handleAboutStarryNight}>About StarryNight</button>
          <button onClick={handleAwarness}>Awarness</button>
          {cookies.nickName ? <><button>{cookies.nickName}</button><button onClick={logOutHandler}>Log Out</button></> : <button onClick={handleLoginModal}>Sign In</button>}
        </div>
      </header>
      {isAboutStarryNight && (
        <>
          <div onClick={handleAboutStarryNight} className='filter'></div>
          <AboutStarryNight></AboutStarryNight>
        </>
      )}
      {loginModal && (
        <>
          <div onClick={handleLoginModal} className='filter'></div>
          <SignIn />
        </>
      )}
      {isAwarness && (
        <>
          <div onClick={handleAwarness} className='filter'></div>
          <AwarnessModal />
        </>
      )}
    </>
  );
}

export default Header;
