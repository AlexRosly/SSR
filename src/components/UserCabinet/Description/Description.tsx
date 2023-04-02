import './Description.scss';

interface IProps {
  openSelector: () => void;
}

export function Description({ openSelector }: IProps) {
  return (
    <div className="description__section">
      <p className="description__text">
        Наша фишка не в том, что вы не платите комиссию, хотя это так. Наша фишка в том, что отельеры ее платят в шесть
        раз меньше чем у многих других сервисов.
        <br /> Your Price Booking не запрещает отельерам менять цену в зависимости от заполненности и по любым другим
        причинам.
      </p>
      <div className="description__block">
        <p className="description__paragraf">
          Фишка 2 - когда вы ищите бронирование, вас видят отелеры в округе и они могут отправить вам эксклюзивное
          предложедение, конфиденциально.
        </p>
        <div className="description__btnBlock">
          <button type="button" className="description__btn" onClick={openSelector}>
            Узнать цены
          </button>
          <button type="button" className="description__btn" onClick={openSelector}>
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
}
