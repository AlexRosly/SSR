import { ROOT } from 'navigation/CONSTANTS';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import scss from './RentLinks.module.scss';

const ListItem = ({ text, styles, inverse }) => (
  <li className={inverse ? styles.item : styles.item__inverse}>
    <Link to={ROOT} rel="noopener noreferrer" className={styles.link}>
      {text}
    </Link>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
  inverse: PropTypes.bool,
};

const LinksList = ({ links, styles, inverse }) => (
  <ul className={styles.list}>
    {links?.map(link => (
      <ListItem styles={styles} key={link.id} {...link} inverse={inverse} />
    ))}
  </ul>
);

LinksList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.object,
  inverse: PropTypes.bool,
};

const linksLeft = [
  { id: '0', text: 'номер в гостинице' },
  { id: '1', text: 'квартира посуточно' },
  { id: '2', text: 'комната в доме' },
  { id: '3', text: 'апартаменты посуточно' },
  { id: '4', text: 'Guest House' },
];

const linksRight = [
  { id: '0', text: 'номер в апарт-отеле' },
  { id: '1', text: 'дом посуточно' },
  { id: '2', text: 'комната в квартире' },
  { id: '3', text: 'место в хостеле' },
  { id: '4', text: 'Capsule Hotel' },
];

export default function RentLinks({ styles = scss, icon, iconDesc }) {
  return (
    <section className={styles.section}>
      <LinksList links={linksLeft} styles={styles} />

      <img className={styles.centralImage} src={icon} alt={iconDesc} />

      <LinksList links={linksRight} styles={styles} inverse />
    </section>
  );
}

RentLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.object,
  icon: PropTypes.string,
};
