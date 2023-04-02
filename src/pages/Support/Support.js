import text from '../../assets/images/support/YOUR PRICE BOOKING SUPPORT.png';
import { Footer } from 'components/Common/Footer';
import Reviews from '../../components/MainPage/Reviews/Reviews';
import { HOTELIERS_SUPPORT_TELEGRAM, USERS_SUPPORT_TELEGRAM } from 'navigation/CONSTANTS';
import '../../styles/common/_support.scss';

export default function Support() {
  let link1 = 'https://t.me/YourPriceBooking ';
  let link2 = 'https://t.me/Hoteliers_support';

  return (
    <div className="support">
      <div className="img-logo">
        <img className="img-logo__text" src={text} alt="text" />
      </div>
      <div className="container">
        <div className="support__wrapper">
          <div className="support__links-wrapper">
            <a target="_blank" href={link1} type="text/html" title="clickME" className="link-telegram" rel="noreferrer">
              <div className="link-telegram__wrapper">
                <div className="link-telegram__text"> support for users</div>
                <div>
                  <span className="icon-telegram">
                    <span className="link-telegram__url">{USERS_SUPPORT_TELEGRAM}</span>
                  </span>
                </div>
              </div>
            </a>
            <a target="_blank" href={link2} type="text/html" title="clickME" className="link-telegram" rel="noreferrer">
              <div className="link-telegram__wrapper">
                <div className="link-telegram__text"> support for hoteliers</div>
                <div>
                  <span className="icon-telegram">
                    <span className="link-telegram__url">{HOTELIERS_SUPPORT_TELEGRAM}</span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="support__footer">
            <div className="no-sticky">
              <Footer />
            </div>
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
}
