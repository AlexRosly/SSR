import { useTranslation } from 'react-i18next';
import text from '../../assets/images/ourMission/YOUR PRICE BOOKING MISSION.svg';
import '../../styles/common/_ourMission.scss';
import { Footer } from 'components/Common/Footer';
// import Reviews from '../../components/MainPage/Reviews/Reviews';

export default function OurMission() {
  const { t } = useTranslation('mission');
  return (
    <div>
      <div className="container-mission">
        <div className="container-mission-position">
          <div className="image-mission-city">
            {/* <img src={city} alt="city" /> */}
            <div className="image-mission-text-wrapper">
              <img src={text} alt="text" className="image-mission-text" />
            </div>
          </div>

          <div className="mission__block-text">
            <span className="style-text1">{t('missionWordMission')}</span>
            <span className="style-text2">{t('missionWordsYourPrice')}</span>
            <span className="style-text3">{t('missionWordBooking')} </span>
            <span className="style-text4">{t('missionMain')}</span>
            <p>
              <span className="style-text5">{t('missionHow')}</span>
            </p>
            <p>
              <span className="style-text6">{t('missionFirstCondition')}</span>
            </p>
            <p>{t('missionFirstConditionExpl')}</p>
            <p>
              <span className="style-text6">{t('missionSecondCondition')}</span>
            </p>
            <p>{t('missionSecondConditionExpl')}</p>
            <p>
              <span className="style-text7">{t('missionThirdCondition')}</span>
            </p>
            <p>{t('missionThirdConditionExpl')}</p>
            <p>
              <span className="style-text7">{t('missionFourthCondition')}</span>
            </p>
            <p>{t('missionFourthConditioExpl')}</p>
          </div>

          <div className="mission__block">
            {/* <div className="mission-block-review ">
              <Reviews />
            </div> */}
            <div className="mission-block-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
