import scss from './AdvantagesDiamonds.module.scss';

import diamond from 'assets/images/hoteliers/diamond.png';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function AdvantagesDiamonds({
  title,
  advantages,
  inverse,
  buttonText,
}) {
  return (
    <section className={inverse ? scss.sectionInverse : scss.section}>
      <h2 className={inverse ? scss.titleInverse : scss.adv__title}>{title}</h2>

      <ul className={inverse ? scss.list__inverse : scss.list}>
        {advantages?.map(({ id, text }) => (
          <li key={id} className={inverse ? scss.item__inverse : scss.item}>
            <p className={scss.adv__text}>{text}</p>

            <img className={scss.iconDiamond} src={diamond} alt="diamond" />
          </li>
        ))}
      </ul>

      <Button className={inverse ? scss.buttonInverse : scss.button} primary>
        {buttonText}
      </Button>
    </section>
  );
}

AdvantagesDiamonds.propTypes = {
  title: PropTypes.string,
  advantages: PropTypes.arrayOf(PropTypes.object),
  inverse: PropTypes.bool,
  buttonText: PropTypes.string,
};
