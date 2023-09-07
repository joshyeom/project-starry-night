import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { AboutStarryNight } from '../../Atom';
import * as SC from './styled'

export function AboutStarryNightPage(){
const [isModal, setIsModal] = useRecoilState(AboutStarryNight);
  return ReactDOM.createPortal(
    isModal && (
      <SC.ModalContainer onClick={() => setIsModal(false)}>
        <SC.ModalContent onClick={(e) => e.stopPropagation()}>
          <p>Have you ever seen the night sky because you want to see the stars?<br />
            Have you ever looked up at the sky on an especially difficult day?<br />
            But you rarely see stars Why is it getting harder to see the stars?
            <br /><br />
            According to the Ministry of Environment, light pollution refers to a condition in which excessive light due to improper use of artificial lighting or light leaking out of the lighting area to be illuminated interferes with people`&apos;`s healthy and pleasant lives or damages the environment. Although this type of pollution can exist throughout the day, its effects are magnified during the night with the contrast of darkness.The area affected by artificial illumination continues to increase. The Starry night raises awareness of the phenomenon that light pollution is getting worse as urbanization gets worse. This project also tried to show the seriousness of light pollution in each country and the seriousness of each country.

            <br /><br />
            The Starry Night is a project by Jungho Yeom.
            Data from <a href="https://www.darksky.org/light-pollution/" target="_blank" rel="noopener noreferrer">Dark Sky</a> and visualization created with Three.js.</p>
        </SC.ModalContent>
      </SC.ModalContainer>
    ), 
    
    document.getElementById('modal-root')
  );
}