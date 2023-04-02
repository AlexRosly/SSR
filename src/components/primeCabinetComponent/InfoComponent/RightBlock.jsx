import s from './infoComponentPrime.module.scss';
import DefaultHome from '../img/DefaultHome.png';

export default function RightBlock() { 
    return (
      <div>
        <div className={s.right_default_block}>
          <div className={s.right_default_block_content}>
            <div className={s.right_default_block_text}>
              <p className={s.right_default_block_header}>Сейчас у вас нет действующих бронирований</p>
              <p className={s.right_default_block_main}>
                Как только ползователь сделает брониррование, оно отобразится здесь.
              </p>
            </div>
            <div>
              <img src={DefaultHome} alt='home'/>
            </div>
          </div>
        </div>
      </div>
    );
}