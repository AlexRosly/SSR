import ura from './UserRequestCard.module.scss';
export const UserAsk = () => {
  return (
    <div>
      <button className={ura.detail__houses_btn}>307</button>

      <div className={ura.houses_block_close}>
        <div className={ura.houses_block_info1}>Сейчас доступно вариантов</div>
        <div className={ura.houses_block_info2}>
          Отелеры видят ваш запрос и еще пришлют новые варианты бронирования для вас.
        </div>
        <div className={ura.houses_block_btn}></div>
      </div>
    </div>
  );
};
