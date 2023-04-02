import UserCabinet from 'components/UserCabinet/UserCabinet';
import s from './Cabinet.module.scss';

export default function Cabinet() {
  return (
    <div className={s.container}>
      <UserCabinet />
    </div>
  );
}
