import s from '../../HoteliersProposeCard.module.scss';

interface IProps {
  price: number;
}

export const Price = ({ price }: IProps) => {
  return <h2 className={s.card__price}>{price} USD</h2>;
};
