import { useMedia } from 'hooks/UI';

import photo_1_1 from 'assets/images/pages/MainHotelier/properties/photo_1_1.png';
import photo_1_2 from 'assets/images/pages/MainHotelier/properties/photo_1_2.png';
import photo_1_3 from 'assets/images/pages/MainHotelier/properties/photo_1_3.png';
import photo_2_1 from 'assets/images/pages/MainHotelier/properties/photo_2_1.png';
import photo_2_2 from 'assets/images/pages/MainHotelier/properties/photo_2_2.png';
import photo_2_3 from 'assets/images/pages/MainHotelier/properties/photo_2_3.png';

import { Beta } from 'components/Beta';

import s from './ImageGallery.module.scss';

const images = [
  { src: photo_1_1, alt: 'triangular house' },
  { src: photo_1_2, alt: 'high-rise building in China' },
  { src: photo_1_3, alt: 'rectangular house with a pool' },
  { src: photo_2_1, alt: 'futuristic house in a jungles' },
  { src: photo_2_2, alt: 'tree-shaped houses' },
  { src: photo_2_3, alt: 'three double-layered beds in hostel room' },
];

export const ImageGallery = () => {
  const { isMobile } = useMedia();

  return (
    <ul className={s.imageGallery}>
      {!isMobile && <Beta />}

      <div className={s.roundCorners}>
        {images.map(({ src, alt }) => (
          <li key={src} className={s.galleryItem}>
            <img src={src} title={alt} alt={alt} />
          </li>
        ))}
      </div>
    </ul>
  );
};
