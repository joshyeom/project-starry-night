import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './styled'

const Quote = () => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (flag) {
      navigate('/Earth');
    }
  }, [flag]);

  const flagHandler = () => {
    setFlag(true)
  }

  return (
    <SC.Main onAnimationEnd={flagHandler}>
        <SC.Paragraph>
          “For my part I know nothing with any certainty, but the sight of the stars makes me dream.”
          <br />
          <br />
          <br />
        — Vincent van Gogh</SC.Paragraph>
    </SC.Main>
  );
};

export default Quote;
