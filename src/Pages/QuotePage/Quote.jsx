import { useNavigate } from 'react-router-dom';
import * as SC from './styled'

const Quote = () => {
  const navigate = useNavigate();

  const handleRouter = () => {
    navigate('/Earth');
  }

  return (
    <SC.Main onAnimationEnd={handleRouter}>
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
