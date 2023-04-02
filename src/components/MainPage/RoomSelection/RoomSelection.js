import { SEARCH_MAIN } from 'navigation/CONSTANTS';
import { Link } from 'react-router-dom';
import './RoomSelection.scss';

export default function RoomSelection(params) {
  return (
    <div className="selection__block">
      <div>
        <ul className="selection__list">
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Гостиницы
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Хостелы
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Комнаты посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Квартиры посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              1 комнатные квартиры посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              2-комнатные квартиры посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              3-комнатные квартиры посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              4-комнатные квартиры посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Отели
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Мотели
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Курортные отели
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Guest Houses
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Capsule Hotels
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Апарт - отели
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Небольшой дом посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Вилла посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Шале посуточно
            </Link>
          </li>
          <li className="selection__item">
            <Link to={SEARCH_MAIN} className="selection__link">
              Все варианты бронирования
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
