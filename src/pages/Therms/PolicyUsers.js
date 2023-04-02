import city from '../../assets/images/terms/city(1).png'
import './TermsUser.scss'
import { Footer } from 'components/Common/Footer'

export default function PolicyUsers() {
  return (
    <div>
      <div className="container__terms">
        <div className="container__terms-position">
          <div className="image-terms-city">
            <img src={city} alt="city" />
          </div>
          <div className="container__block-footer">
            <p className="p-style-text-date">Редакция от 10 января 2022 года</p>
            <div className="terms__block-footer">
              <Footer />
            </div>
          </div>
          <div className="container__block-therms">
            <p className="block1-term-user style-text-price">
              <span className="your-price">YOUR PRICE </span>
              <span className="booking">BOOKING</span>
              <span className="text-book1">
                ПОЛИТИКА <br></br> КОНФИДЕНЦИАЛЬНОСТИ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ
              </span>
            </p>
            <p className="block2-term-user p-style-text1">
              Действуют с 10 января 2022 г.<br></br>
              Редакция от 18 марта 2022 г.
            </p>

            <div className=" p-style-text2 block3-terms-user-text ">
              <p className="p-size">
                Проснувшись однажды утром после беспокойного сна, Грегор Замза
                обнаружил, что он у себя в постели превратился в страшное
                насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему
                приподнять голову, свой коричневый, выпуклый, разделенный
                дугообразными чешуйками живот, на верхушке которого еле
                держалось готовое вот-вот окончательно сползти одеяло.
              </p>
              <p className="p-size">
                Его многочисленные, убого тонкие по сравнению с остальным телом
                ножки беспомощно копошились у него перед глазами. «Что со мной
                случилось? » – подумал он. Это не было сном. Его комната,
                настоящая, разве что слишком маленькая, но обычная комната,
                мирно покоилась в своих четырех хорошо знакомых стенах.
              </p>
              <p className="p-size">
                {' '}
                Над столом, где были разложены распакованные образцы сукон –
                Замза был коммивояжером, – висел портрет, который он недавно
                вырезал из иллюстрированного журнала и вставил в красивую
                золоченую рамку. На портрете была изображена дама в меховой
                шляпе и боа, она сидела очень прямо и протягивала зрителю
                тяжелую меховую муфту, в которой целиком исчезала ее рука.
              </p>
              <p className="p-size">
                Затем взгляд Грегора устремился в окно, и пасмурная погода –
                слышно было, как по жести подоконника стучат капли дождя –
                привела его и вовсе в грустное настроение. «Хорошо бы еще
                немного поспать и забыть всю эту чепуху», – подумал он, но это
                было совершенно неосуществимо, он привык спать на правом боку, а
                в теперешнем своем состоянии он никак не мог принять этого
                положения.
              </p>
              <p className="p-size">
                С какой бы силой ни поворачивался он на правый бок, он неизменно
                сваливался опять на спину. Закрыв глаза, чтобы не видеть своих
                барахтающихся ног, он проделал это добрую сотню раз и отказался
                от этих попыток только тогда, когда почувствовал какую-то
                неведомую дотоле, тупую и слабую боль в боку. «Ах ты, господи, –
                подумал он, – какую я выбрал хлопотную профессию!
              </p>
              <p className="p-size">
                Изо дня в день в разъездах. Деловых волнений куда больше, чем на
                месте, в торговом доме, а кроме того, изволь терпеть тяготы
                дороги, думай о расписании поездов, мирись с плохим,
                нерегулярным питанием, завязывай со все новыми и новыми людьми
                недолгие, никогда не бывающие сердечными отношения. Черт бы
                побрал все это!
              </p>
              <p className="p-size">
                » Он почувствовал вверху живота легкий зуд; медленно подвинулся
                на спине к прутьям кровати, чтобы удобнее было поднять голову;
                нашел зудевшее место, сплошь покрытое, как оказалось, белыми
                непонятными точечками; хотел было ощупать это место одной из
                ножек, но сразу отдернул ее, ибо даже простое прикосновение
                вызвало у него, Грегора, озноб. Он соскользнул в прежнее свое
                положение.
              </p>
              <p className="p-size">
                «От этого раннего вставания, – подумал он, – можно совсем
                обезуметь. Человек должен высыпаться. Другие коммивояжеры живут,
                как одалиски. Когда я, например, среди дня возвращаюсь в
                гостиницу, чтобы переписать полученные заказы, эти господа
                только завтракают. А осмелься я вести себя так, мои хозяин
                выгнал бы меня сразу. Кто знает, впрочем, может быть, это было
                бы даже очень хорошо для меня. Если бы я не сдерживался ради
                родителей, я бы давно заявил об уходе, я бы подошел к своему
                хозяину и выложил ему все, что о нем думаю. Он бы так и свалился
                с конторки! Странная у него манера – садиться на конторку и с ее
                высоты разговаривать со служащим, который вдобавок вынужден
                подойти вплотную к конторке из-за того, что хозяин туг на ухо.
                Однако надежда еще не
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
