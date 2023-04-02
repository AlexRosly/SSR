import { HomeView } from './HomeView';
import { NavLinks } from './components/NavLinks';
import { Footer } from 'components/Common/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowText } from 'redux/authentication/authentication.actions';
import BookingOption from 'components/BookingOption/BookingOption';

import scss from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowText(false));
  }, [dispatch]);

  return (
    <>
      <div className={scss.homeContainer}>
        <div className={scss.homeGrid}>
          <NavLinks />
          <div className="my-wrapper">
            <BookingOption />
          </div>
          {/* <AmountMoney /> */}
          <HomeView />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
