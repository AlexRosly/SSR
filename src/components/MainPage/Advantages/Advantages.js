import "./Advantages.scss";
import image from "../Assents/image/image.jpg";
export default function Advantages(params) {
  return (
    <div className="adv__block">
      <img
        src={image}
        alt="young couple relax on the hotel room"
        className="adv__image"
      />
      <div className="adv__section">
        <h2 className="adv__title">
          <span className="adv_highlight adv_highlight--orange">
            Your price
          </span>{" "}
          <span className="adv_highlight">Booking</span> - бронирование на ваших
          условиях
        </h2>
        <div className="adv_info">
          <p>
            Платформа бронирования гостиниц и посуточной аренды квартир, домов,
            комнат и хостелов.
            <br /> Скоро доступно в: городе Нью - Йорк , штат Нью - Йорк, США;
            Киеве и Одессе, Украина; Варшаве, Польша.
          </p>
          <h3 className="adv__add-title">Преимущества для Вас</h3>
          <p>
            На нашем сайте отельеры видят всех потенциальных покупателей и часто
            пишут первыми.
            <br /> При бронировании вы можете указать сумму, которую готовы
            потратить. У нас минимальные комиссии для отельеров и нет паритета
            цен. Это преимущества для отельера, но оно дает возможность понижать
            цену бронирования для пользователя.
          </p>
          <h3 className="adv__add-title">
            Почему отельеры часто используют Your Price Booking как площадку для
            распродаж свободных номеров?
          </h3>
          <p>
            По тому, что платформа бронирования Your Price Booking позволяет это
            делать и даже приветствует.
          </p>
          <p className="adv__paragraf">
            У нас на сайте отельеры могут делать активные продажи. Что это
            значит?
            <br /> Вы подбираете бронирование и помимо общих предложений можете
            получать предложения со значительным дисконтом, которые адресованы
            именно вам.
          </p>
          <p className="adv__paragraf">
            Все отельеры проходят идентификацию и верификацию перед тем как
            начать продавать через наш сервис.
          </p>
        </div>
      </div>
    </div>
  );
}
