import { useState } from 'react';
import reddit from '../../assets/images/network/Reddit.svg';
import telegram from '../../assets/images/network/Telegram.svg';
import linkedIn from '../../assets/images/network/LinkedIn.svg';
import youTube from '../../assets/images/network/YouTube.svg';
import facebook from '../../assets/images/network/Facebook.svg';
import twitter from '../../assets/images/network/Twitter.svg';
// import homeIcon from '../../assets/images/network/HomeIcon.svg';

export default function Preview() {
  let [showK, setShowK] = useState('none');
  let [showW, setShowW] = useState('none');
  let [showN, setShowN] = useState('none');
  return (
    <div className="preview-container">
      <div className="h-preview">
        Your Price <span>Booking</span>
      </div>
      <div className="preview-text">
        <p>Is a platform for booking hotels, hostels. Daily rent of apartments and houses.</p>
        <p>Your Price Booking is currently under construction.</p>

        <p>Launch of the booking platform in Kyiv, Odessa, Warsaw and New York City in the first quarter of 2023.</p>

        <p>Hoteliers in Warsaw, Kiev and New York will soon be able to register the property.</p>
        <p>Read the project news on our official pages.</p>
      </div>
      <div className="network-wrap">
        <div className="network-link">
          <a href="https://www.reddit.com/r/YourPriceBooking/">
            <img src={reddit} alt="reddit" className="network-img reddit" />
            <div>Reddit</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://t.me/YourPriceBooking">
            <img src={telegram} alt="telegram" className="network-img telegram" />
            <div>Telegram</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://www.linkedin.com/company/75622729">
            <img src={linkedIn} alt="linked in" className="network-img linkedIn" />
            <div>Linked In</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://www.youtube.com/channel/UCBhywVgi7MclKBN9Q4fn-ww">
            <img src={youTube} alt="you tube" className="network-img youtube" />
            <div>YouTube</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://www.facebook.com/yourpricebookingKiev/">
            <img src={facebook} alt="facebook" className="network-img facebook" />
            <div>Kiev</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://www.facebook.com/Your-Price-Booking-Warszawa-104254858498032/">
            <img src={facebook} alt="facebook" className="network-img facebook" />
            <div>Warsaw</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://www.facebook.com/Your-Price-Booking-New-York-City-105355105052116/">
            <img src={facebook} alt="facebook" className="network-img facebook" />
            <div>NYC</div>
          </a>
        </div>
        <div className="network-link">
          <a href="https://twitter.com/PriceBooking">
            <img src={twitter} alt="twitter" className="network-img twitter" />
            <div>Twitter</div>
          </a>
        </div>
      </div>
      <div className="network-blog">
        {/* <img src={homeIcon} alt="blog" /> */}
        <a href="https://blog.yourpricebooking.com">
          <pre className="blog-img"></pre>
          <div>Blog</div>
        </a>
      </div>
      <div className="preview-button">
        <div className="btn-object">
          <div className="preview-btnK" style={{ display: showK }}>
            Not available yet. We will inform in our social networks and telegram chat about the begining of for
            hoteliers.
          </div>
          <button
            onMouseEnter={() => setShowK('block')}
            onMouseLeave={() => setShowK('none')}
            // onClick={() => setShowK('none')}
          >
            Add object in Kiev
          </button>
        </div>
        <div className="btn-object">
          <div className="preview-btnW" style={{ display: showW }}>
            Not available yet. We will inform in our social networks and telegram chat about the begining of for
            hoteliers.
          </div>
          <button
            onMouseEnter={() => setShowW('block')}
            onMouseLeave={() => setShowW('none')}
            // onClick={() => setShowW('none')}
          >
            Add object in Warsaw
          </button>
        </div>
        <div className="btn-object">
          <div className="preview-btnN" style={{ display: showN }}>
            Not available yet. We will inform in our social networks and telegram chat about the begining of for
            hoteliers.
          </div>
          <button
            onMouseEnter={() => setShowN('block')}
            onMouseLeave={() => setShowN('none')}
            // onClick={() => setShowN('none')}
          >
            Add object in NYC
          </button>
        </div>
      </div>
      <div className="preview-footer">Your Price Booking ОÜ © 2022. All rights reserved.</div>
    </div>
  );
}
