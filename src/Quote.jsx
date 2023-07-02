import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/Quote.css';

const Quote = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 5500); // 애니메이션의 지속 시간 (여기서는 3초로 가정)

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    if (animationComplete) {
      navigate('/Earth');
    }
  }, [animationComplete]);

  return (
    <main className="main">
      <p className={`quote ${animationComplete ? 'animate' : ''}`}>
        <span>
          “For my part I know nothing with any certainty, but the sight of the stars makes me dream.”
        </span>
        <br />
        <span>— Vincent van Gogh</span>
      </p>
    </main>
  );
};

export default Quote;
