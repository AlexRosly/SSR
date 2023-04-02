import { useAuthContext } from 'context/AuthContext';
import { IconHeader } from '../../Components/IconHeader';
import scss from './Avatar.module.scss';

export const Avatar = () => {
  const [{ user }] = useAuthContext();
  if (!user) return <div className={scss.avatarThumb} />;
  const { photo } = user;

  return (
    <div className={scss.avatarThumb}>
      {photo ? (
        <img src={photo} className={scss.avatar} alt="avatar" />
      ) : (
        <IconHeader className={scss.avatar} iconId="person" />
      )}
    </div>
  );
};
