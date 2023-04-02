import room1x1 from './icon/1x1.png';
import room1x2 from './icon/1x2.png';
import room1x3 from './icon/1x3.png';
import room2x1 from './icon/2x1.png';
import room2x2 from './icon/2x2.png';
import room2x3 from './icon/2x3.png';
import room1x1_2x1 from './icon/1x1_2x1.png';
import room1x2_2x1 from './icon/1x2_2x1.png';
import room1x1_2x2 from './icon/1x1_2x2.png';

export const getImage = ({ iconId, title }) => {
  switch (iconId) {
    case 'icon-1x1_2x1':
      return <img src={room1x1_2x1} alt={title} />;

    case 'icon-1x2_2x1':
      return <img src={room1x2_2x1} alt={title} />;

    case 'icon-1x1_2x2':
      return <img src={room1x1_2x2} alt={title} />;

    case 'icon-1x1':
      return <img src={room1x1} alt={title} />;

    case 'icon-1x2':
      return <img src={room1x2} alt={title} />;

    case 'icon-1x3':
      return <img src={room1x3} alt={title} />;

    case 'icon-2x1':
      return <img src={room2x1} alt={title} />;

    case 'icon-2x2':
      return <img src={room2x2} alt={title} />;

    case 'icon-2x3':
      return <img src={room2x3} alt={title} />;

    default:
      return null;
  }
};
