import { useState } from 'react';
import NavbarSideMenu from 'components/SideMenu/navbar';

export default function FeedbackReviews() {
  let [rating1, setRating1] = useState(false);
  let [rating2] = useState(false);
  let [rating3] = useState(false);
  let [rating4] = useState(false);
  let [rating5] = useState(false);
  let [rating6] = useState(false);
  let [rating7] = useState(false);
  let [isopen, setIsopen] = useState(false);
  const arrRating = [rating1, rating2, rating3, rating4, rating5, rating6, rating7];
  const handleClickRating = e => {
    arrRating.forEach(el => el === e.target.value);
  };
  const closeRating = () => {
    setRating1(false);
  };
  const openBlock = () => {
    setIsopen(!isopen);
  };
  return (
    <div>
      <NavbarSideMenu />
      <div className="account-setting-container  ">
        <button className="btn-open-block-rating" onClick={openBlock}>
          {!isopen ? ' add block rating' : 'remove block'}
        </button>
        <div className="main-container-ratting ">
          <div className={!rating1 ? 'container-rating1' : 'container-rating1 class-border-rating'}>
            <div className="block-rating-feedback">
              Рейтинг <span className="block-rating-feedback-number">4,33</span>
            </div>
            <ul className="block-list-rating">
              <li lassName="list-guest-ratings">
                Оценок гостей:
                <span className="guest-ratings-number">1578</span>
              </li>
              <li className="list-guest-ratings rating-text-direction">
                Зарегестрирован:
                <span className="guest-ratings-number ">меньше года</span>
              </li>
              <li className="list-guest-ratings">
                Чистота:
                <span className="guest-ratings-number">8,2</span>
              </li>
              <li className="list-guest-ratings">
                Комфорт:
                <span className="guest-ratings-number">9,9</span>
              </li>
              <li className="list-guest-ratings">
                Удобства:
                <span className="guest-ratings-number">7,7</span>
              </li>
              <li className="list-guest-ratings">
                Персонал:
                <span className="guest-ratings-number">10</span>
              </li>
              <li className="list-guest-ratings">
                Расположение:
                <span className="guest-ratings-number">1,7</span>
              </li>
            </ul>
            <p className="block-name-place">
              <span className="name-place-text">Лесной Бор</span>
              <button value="rating1" className="btn-rating-feedback" onClick={handleClickRating}>
                ОТЗЫВЫ
                <span className="btn-rating-feedback-number"> 33</span>
              </button>
            </p>
          </div>

          {isopen && (
            <div>
              <div className={!rating2 ? 'container-rating2' : 'container-rating2 class-border-rating'}>
                <div className="block-rating-feedback">
                  Рейтинг <span className="block-rating-feedback-number">4,33</span>
                </div>
                <ul className="block-list-rating">
                  <li className="list-guest-ratings">
                    Оценок гостей:
                    <span className="guest-ratings-number">1578</span>
                  </li>
                  <li className="list-guest-ratings rating-text-direction">
                    Зарегестрирован:
                    <span className="guest-ratings-number ">меньше года</span>
                  </li>
                  <li className="list-guest-ratings">
                    Чистота:
                    <span className="guest-ratings-number">8,2</span>
                  </li>
                  <li className="list-guest-ratings">
                    Комфорт:
                    <span className="guest-ratings-number">9,9</span>
                  </li>
                  <li className="list-guest-ratings">
                    Удобства:
                    <span className="guest-ratings-number">7,7</span>
                  </li>
                  <li className="list-guest-ratings">
                    Персонал:
                    <span className="guest-ratings-number">10</span>
                  </li>
                  <li className="list-guest-ratings">
                    Расположение:
                    <span className="guest-ratings-number">1,7</span>
                  </li>
                </ul>
                <p className="block-name-place">
                  <span className="name-place-text name-place-text-big">Учкудук три дороги</span>
                  <button value="rating2" className="btn-rating-feedback" onClick={handleClickRating}>
                    ОТЗЫВЫ
                    <span className="btn-rating-feedback-number"> 33</span>
                  </button>
                </p>
              </div>
              <div className={!rating3 ? 'container-rating3' : 'container-rating3 class-border-rating'}>
                <div className="block-rating-feedback">
                  Рейтинг <span className="block-rating-feedback-number">4,33</span>
                </div>
                <ul className="block-list-rating">
                  <li className="list-guest-ratings">
                    Оценок гостей:
                    <span className="guest-ratings-number">1578</span>
                  </li>
                  <li className="list-guest-ratings rating-text-direction">
                    Зарегестрирован:
                    <span className="guest-ratings-number ">меньше года</span>
                  </li>
                  <li className="list-guest-ratings">
                    Чистота:
                    <span className="guest-ratings-number">8,2</span>
                  </li>
                  <li className="list-guest-ratings">
                    Комфорт:
                    <span className="guest-ratings-number">9,9</span>
                  </li>
                  <li className="list-guest-ratings">
                    Удобства:
                    <span className="guest-ratings-number">7,7</span>
                  </li>
                  <li className="list-guest-ratings">
                    Персонал:
                    <span className="guest-ratings-number">10</span>
                  </li>
                  <li className="list-guest-ratings">
                    Расположение:
                    <span className="guest-ratings-number">1,7</span>
                  </li>
                </ul>
                <p className="block-name-place">
                  <span className="name-place-text">Лесной Бор</span>
                  <button className="btn-rating-feedback" onClick={handleClickRating}>
                    ОТЗЫВЫ
                    <span className="btn-rating-feedback-number"> 33</span>
                  </button>
                </p>
              </div>
              <div className={!rating4 ? 'container-rating4' : 'container-rating4 class-border-rating'}>
                <div className="block-rating-feedback">
                  Рейтинг <span className="block-rating-feedback-number">4,33</span>
                </div>
                <ul className="block-list-rating">
                  <li className="list-guest-ratings">
                    Оценок гостей:
                    <span className="guest-ratings-number">1578</span>
                  </li>
                  <li className="list-guest-ratings rating-text-direction">
                    Зарегестрирован:
                    <span className="guest-ratings-number ">меньше года</span>
                  </li>
                  <li className="list-guest-ratings">
                    Чистота:
                    <span className="guest-ratings-number">8,2</span>
                  </li>
                  <li className="list-guest-ratings">
                    Комфорт:
                    <span className="guest-ratings-number">9,9</span>
                  </li>
                  <li className="list-guest-ratings">
                    Удобства:
                    <span className="guest-ratings-number">7,7</span>
                  </li>
                  <li className="list-guest-ratings">
                    Персонал:
                    <span className="guest-ratings-number">10</span>
                  </li>
                  <li className="list-guest-ratings">
                    Расположение:
                    <span className="guest-ratings-number">1,7</span>
                  </li>
                </ul>
                <p className="block-name-place">
                  <span className="name-place-text">Лесной Бор</span>
                  <button className="btn-rating-feedback" onClick={handleClickRating}>
                    ОТЗЫВЫ
                    <span className="btn-rating-feedback-number"> 33</span>
                  </button>
                </p>
              </div>
              <div className={!rating5 ? 'container-rating5' : 'container-rating5 class-border-rating'}>
                <div className="block-rating-feedback">
                  Рейтинг <span className="block-rating-feedback-number">4,33</span>
                </div>
                <ul className="block-list-rating">
                  <li className="list-guest-ratings">
                    Оценок гостей:
                    <span className="guest-ratings-number">1578</span>
                  </li>
                  <li className="list-guest-ratings rating-text-direction">
                    Зарегестрирован:
                    <span className="guest-ratings-number ">меньше года</span>
                  </li>
                  <li className="list-guest-ratings">
                    Чистота:
                    <span className="guest-ratings-number">8,2</span>
                  </li>
                  <li className="list-guest-ratings">
                    Комфорт:
                    <span className="guest-ratings-number">9,9</span>
                  </li>
                  <li className="list-guest-ratings">
                    Удобства:
                    <span className="guest-ratings-number">7,7</span>
                  </li>
                  <li className="list-guest-ratings">
                    Персонал:
                    <span className="guest-ratings-number">10</span>
                  </li>
                  <li className="list-guest-ratings">
                    Расположение:
                    <span className="guest-ratings-number">1,7</span>
                  </li>
                </ul>
                <p className="block-name-place">
                  <span className="name-place-text">Лесной Бор</span>
                  <button className="btn-rating-feedback" onClick={handleClickRating}>
                    ОТЗЫВЫ
                    <span className="btn-rating-feedback-number"> 33</span>
                  </button>
                </p>
              </div>
              <div className={!rating6 ? 'container-rating6' : 'container-rating6 class-border-rating'}>
                <div className="block-rating-feedback">
                  Рейтинг <span className="block-rating-feedback-number">4,33</span>
                </div>
                <ul className="block-list-rating">
                  <li className="list-guest-ratings">
                    Оценок гостей:
                    <span className="guest-ratings-number">1578</span>
                  </li>
                  <li className="list-guest-ratings rating-text-direction">
                    Зарегестрирован:
                    <span className="guest-ratings-number ">меньше года</span>
                  </li>
                  <li className="list-guest-ratings">
                    Чистота:
                    <span className="guest-ratings-number">8,2</span>
                  </li>
                  <li className="list-guest-ratings">
                    Комфорт:
                    <span className="guest-ratings-number">9,9</span>
                  </li>
                  <li className="list-guest-ratings">
                    Удобства:
                    <span className="guest-ratings-number">7,7</span>
                  </li>
                  <li className="list-guest-ratings">
                    Персонал:
                    <span className="guest-ratings-number">10</span>
                  </li>
                  <li className="list-guest-ratings">
                    Расположение:
                    <span className="guest-ratings-number">1,7</span>
                  </li>
                </ul>
                <p className="block-name-place">
                  <span className="name-place-text">Лесной Бор</span>
                  <button className="btn-rating-feedback" onClick={handleClickRating}>
                    ОТЗЫВЫ
                    <span className="btn-rating-feedback-number"> 33</span>
                  </button>
                </p>
              </div>
              <div className={!rating7 ? 'container-rating7' : 'container-rating7 class-border-rating'}>
                <div className="block-rating-feedback">
                  Рейтинг <span className="block-rating-feedback-number">4,33</span>
                </div>
                <ul className="block-list-rating">
                  <li className="list-guest-ratings">
                    Оценок гостей:
                    <span className="guest-ratings-number">1578</span>
                  </li>
                  <li className="list-guest-ratings rating-text-direction">
                    Зарегестрирован:
                    <span className="guest-ratings-number ">меньше года</span>
                  </li>
                  <li className="list-guest-ratings">
                    Чистота:
                    <span className="guest-ratings-number">8,2</span>
                  </li>
                  <li className="list-guest-ratings">
                    Комфорт:
                    <span className="guest-ratings-number">9,9</span>
                  </li>
                  <li className="list-guest-ratings">
                    Удобства:
                    <span className="guest-ratings-number">7,7</span>
                  </li>
                  <li className="list-guest-ratings">
                    Персонал:
                    <span className="guest-ratings-number">10</span>
                  </li>
                  <li className="list-guest-ratings">
                    Расположение:
                    <span className="guest-ratings-number">1,7</span>
                  </li>
                </ul>
                <p className="block-name-place">
                  <span className="name-place-text">Лесной Бор</span>
                  <button className="btn-rating-feedback" onClick={handleClickRating}>
                    ОТЗЫВЫ
                    <span className="btn-rating-feedback-number"> 33</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>

        {rating1 && (
          <div className="container-table-rating">
            <div className="position-btn-close">
              <button className="nav__close" onClick={closeRating}></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
