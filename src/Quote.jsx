import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/Quote.css';

const Quote = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();
  const ANIMATION_DURATION_MS = 5500;

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
      navigate('/Earth');
    }, ANIMATION_DURATION_MS); // 애니메이션의 지속 시간 (여기서는 3초로 가정)

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [navigate]);

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
