import { useState } from 'react';
import s from '../HousePage.module.scss';

import photo11 from '../img/11.png';
import photo12 from '../img/12.png';
import photo13 from '../img/13.png';
import photo14 from '../img/14.png';

import photo21 from '../img/21.png';
import photo22 from '../img/22.png';
import photo23 from '../img/23.png';
import photo24 from '../img/24.png';

import photo31 from '../img/31.png';
import photo32 from '../img/32.png';
import photo33 from '../img/33.png';
import photo34 from '../img/34.png';

const TestPhoto = [
  { name: photo11, id: 1 },
  { name: photo12, id: 2 },
  { name: photo13, id: 3 },
  { name: photo14, id: 4 },
  { name: photo21, id: 5 },
  { name: photo22, id: 6 },
  { name: photo23, id: 7 },
  { name: photo24, id: 8 },
  { name: photo31, id: 9 },
  { name: photo32, id: 10 },
  { name: photo33, id: 11 },
  { name: photo34, id: 12 },
];

export default function GalleryComponent({ size = 'medium', children, albom, collums = '4', childrenPosition }) {
  const [bigPhoto, bigPhotoSet] = useState(albom ? albom[0].name : TestPhoto[0].name);
  const [gallery] = useState(albom || TestPhoto);

  const changePhoto = p => {
    return bigPhotoSet(p);
  };

  const sizeGallery = (size === 'small' && s.smallS) || (size === 'medium' && s.mediumS);
  const collumsStyle = collums === '3' && s.treeCollums;

  return (
    <div className={s.gallery}>
      <div className={`${s.content_wrapper} ${sizeGallery}  ${collumsStyle}`}>
        <img src={bigPhoto} alt="img of propose" className={`${s.big__photo} ${sizeGallery}`} />
        {childrenPosition === 'bottom left' && children}
      </div>

      <div>
        {childrenPosition === 'top rigth' && children}
        <div className={`${s.photo_gallery} ${sizeGallery}  ${collumsStyle}`}>
          {gallery.map(p => {
            return (
              <img
                key={p.id}
                src={p.name}
                alt="mini img of propose"
                className={`${s.small_photo} ${collumsStyle}`}
                onClick={() => changePhoto(p.name)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
