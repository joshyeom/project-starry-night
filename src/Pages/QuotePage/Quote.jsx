import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './styled'

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
    <SC.Main>
      <p className={`quote ${animationComplete ? 'animate' : ''}`}>
        <SC.FirstSpan>
          “For my part I know nothing with any certainty, but the sight of the stars makes me dream.”
        </SC.FirstSpan>
        <br />
        <SC.SecondSpan>— Vincent van Gogh</SC.SecondSpan>
      </p>
    </SC.Main>
  );
};

export default Quote;
