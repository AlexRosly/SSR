import { useState } from 'react';
import Calendar from './Calendar/Calendar';
import CityCard from './CityCard/CityCard';
import InfomationBlock from './InfomationBlock/InfomationBlock';
import Advantages from './Advantages/Advantages';
import { Reviews } from 'components/Common/Reviews';
import RoomSelection from './RoomSelection/RoomSelection';
import { Footer } from 'components/Common/Footer';

import './MainPage.scss';

const onSubmit = () => {};

export default function MainPage() {
  const [suggest, setSuggest] = useState(false);

  return (
    <div>
      <Calendar suggest={suggest} setSuggest={setSuggest} onSubmit={onSubmit} />
      <div className="main__section">
        <div className="main__container">
          <div>
            <CityCard />
            <InfomationBlock />
            <Advantages />
          </div>
          <div>
            <Reviews />
            <RoomSelection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
