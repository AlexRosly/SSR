import s from './Gallery.module.scss';
import Image from '../Images/Images';
import RatingComponent from 'pages/HousePage/HouseComponents/RatingComponent';
// import { PromiseProvider } from 'mongoose';

function Gallery({ url, urlImageSecond, title, isShowText, rating }) {
  return (
    <>
      <ul className={s.imageList}>
        <li className={s.imageItem}>
          <Image src={url} alt={title} className={s.image} />
          <div className={s.rank}>
            <RatingComponent rating={rating} cardSize="s" title={title} />
          </div>
        </li>
        {isShowText && (
          <li className={s.imageItem}>
            <Image src={urlImageSecond} alt={title} className={s.image} />
          </li>
        )}
      </ul>
    </>
  );
}

export default Gallery;
