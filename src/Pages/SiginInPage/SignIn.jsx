import { auth } from "../../firebase-config";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { isLoginAtom, loginModalAtom } from "../../Atom";
import './SignIn.css';
import { useRecoilState } from "recoil";
import { useCookies } from 'react-cookie';

function SignIn() {
  const [cookie, setCookie] = useCookies(['nickName'])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [loginModal, setLoginModal] = useRecoilState(loginModalAtom);


  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result.user) {
          setIsLogin(true);
          setCookie('nickName', result.user.displayName, { path: '/' });
          setLoginModal(true); // 모달 열기
        }
      })
      .catch((error) => {
        // 로그인 실패 처리
      });
  }, [isLogin, loginModal]);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const regex = /(.*)@/;
        setIsLogin(true);
        setCookie('nickName', userCredential.user.email.match(regex)[1], { path: '/' });
        setLoginModal(!loginModal);
      })
      .catch((error) => {
        alert('Please check your E-mail or Password');
      });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Your account is signed up!')
        setIsSignIn(!isSignIn);
      })
      .catch((error) => {
        alert('Please try again to sign up')
      });
  }

  return (
    <div className="signInModal">
      <h1>StarryNight</h1>
      {isSignIn ?
        (<>
          <div className="inputBox">
            <div className="loginInput">
              <input placeholder="Email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="loginInput">
              <input placeholder="Password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="" type="submit" onClick={handleSignIn}>Login</button>
          </div>
          <div className="loginBox">
            <div className="orBox">
              <hr /><span>or</span><hr />
            </div>
            <button className="googleLoginButton" type="submit" onClick={handleGoogleSignIn}>Google Login</button>
            <div className="signUpBox">
              <span>Want to join with us?</span>
              <button onClick={() => setIsSignIn(!isSignIn)}>Sign up</button>
            </div>
          </div>
        </>
        ) : (
          <>
            <div className="inputBox">
              <div className="signUpInput">
                <input placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="signUpInput">
                <input placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <p>Please set correct email form and over 8 characters password</p>
              <button className="" type="submit" onClick={handleSignUp}>SignUp & Go to Login</button>
            </div>
          </>

        )}
    </div>
  );
}

export default SignIn;