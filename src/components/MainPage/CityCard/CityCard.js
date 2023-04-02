import { Link } from 'react-router-dom';
import './CityCard.scss';
import bed from '../Assents/image/bed_1.png';
import doubleBed from '../Assents/image/bed_2.png';
import imgKiev from '../Assents/image/block_four_2.png';
import imgWarshawa from '../Assents/image/block_four_1.png';
import imgNY from '../Assents/image/block_four_3.png';
import imgOdessa from '../Assents/image/block_four_4.png';

export default function CityCard(params) {
  return (
    <div className="card-section">
      <div className="card">
        <div className="title-section">
          <h2 className="title">
            <Link to="/" className="title__link">
              Киев
            </Link>
          </h2>
          <span className="title-country">Украина</span>
        </div>
        <div className="image-section">
          <img src={imgKiev} alt="" />
          <div className="image-block">
            <div className="image__bed">
              <div className="image__wrapper">
                <img src={doubleBed} alt="one double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с одной спальней
              </div>
            </div>
            <div className="doubleBed-section">
              <div className="image__wrapper">
                <img src={doubleBed} alt="double bed" />
                <img src={doubleBed} alt="double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с двумя спальнями
              </div>
            </div>
            <div className="singleBed-section">
              <div className="image__wrapper image__wrapper--block">
                <img src={bed} alt="single bed" />
                <span className="image-message">
                  место в<br /> хостеле
                </span>
              </div>
              <div className="image__overlay">
                средняя цена за место в хостеле
              </div>
            </div>
          </div>
        </div>
        <div className="list-section">
          <ul className="list">
            <li className="item">
              <Link to="/" className="item__link">
                Гостиницы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Хостелы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Комнаты посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">Курортные отели</Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Квартиры посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома для отпуска
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Все варианты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* second card */}
      <div className="card">
        <div className="title-section">
          <h2 className="title">
            <Link to="/" className="title__link">
              Нью - Йорк город
            </Link>{' '}
          </h2>
          <span className="title-country">США</span>
        </div>
        <div className="image-section">
          <img src={imgNY} alt="" />
          <div className="image-block">
            <div className="image__bed">
              <div className="image__wrapper">
                <img src={doubleBed} alt="one double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с одной спальней
              </div>
            </div>
            <div className="doubleBed-section">
              <div className="image__wrapper">
                <img src={doubleBed} alt="double bed" />
                <img src={doubleBed} alt="double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с двумя спальнями
              </div>
            </div>
            <div className="singleBed-section">
              <div className="image__wrapper image__wrapper--block">
                <img src={bed} alt="single bed" />
                <span className="image-message">
                  место в<br /> хостеле
                </span>
              </div>
              <div className="image__overlay">
                средняя цена за место в хостеле
              </div>
            </div>
          </div>
        </div>
        <div className="list-section">
          <ul className="list">
            <li className="item">
              <Link to="/" className="item__link">
                Гостиницы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Хостелы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Комнаты посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Курортные отели
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Квартиры посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома для отпуска
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Все варианты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* third card */}
      <div className="card">
        <div className="title-section">
          <h2 className="title">
            <Link to="/" className="title__link">
              Варшава
            </Link>
          </h2>
          <span className="title-country">Польша</span>
        </div>
        <div className="image-section">
          <img src={imgWarshawa} alt="" />
          <div className="image-block">
            <div className="image__bed">
              <div className="image__wrapper">
                <img src={doubleBed} alt="one double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с одной спальней
              </div>
            </div>
            <div className="doubleBed-section">
              <div className="image__wrapper">
                <img src={doubleBed} alt="double bed" />
                <img src={doubleBed} alt="double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с двумя спальнями
              </div>
            </div>
            <div className="singleBed-section">
              <div className="image__wrapper image__wrapper--block">
                <img src={bed} alt="single bed" />
                <span className="image-message">
                  место в<br /> хостеле
                </span>
              </div>
              <div className="image__overlay">
                средняя цена за место в хостеле
              </div>
            </div>
          </div>
        </div>
        <div className="list-section">
          <ul className="list">
            <li className="item">
              <Link to="/" className="item__link">
                Гостиницы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Хостелы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Комнаты посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Курортные отели
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Квартиры посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома для отпуска
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Все варианты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* fourth card */}
      <div className="card">
        <div className="title-section">
          <h2 className="title">
            <Link to="/" className="title__link">
              Одесса
            </Link>
          </h2>
          <span className="title-country">Украина</span>
        </div>
        <div className="image-section">
          <img src={imgOdessa} alt="" />
          <div className="image-block">
            <div className="image__bed">
              <div className="image__wrapper">
                <img src={doubleBed} alt="one double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с одной спальней
              </div>
            </div>
            <div className="doubleBed-section">
              <div className="image__wrapper">
                <img src={doubleBed} alt="double bed" />
                <img src={doubleBed} alt="double bed" />
              </div>
              <div className="image__overlay">
                средняя цена за вариант с двумя спальнями
              </div>
            </div>
            <div className="singleBed-section">
              <div className="image__wrapper image__wrapper--block">
                <img src={bed} alt="single bed" />
                <span className="image-message">
                  место в<br /> хостеле
                </span>
              </div>
              <div className="image__overlay">
                средняя цена за место в хостеле
              </div>
            </div>
          </div>
        </div>
        <div className="list-section">
          <ul className="list">
            <li className="item">
              <Link to="/" className="item__link">
                Гостиницы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Хостелы
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Комнаты посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Курортные отели
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Квартиры посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома посуточно
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Дома для отпуска
              </Link>
            </li>
            <li className="item">
              <Link to="/" className="item__link">
                Все варианты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
