import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import iconCancel from 'assets/images/pages/cabinetAgent/iconCancel.svg';
import scss from './CancelDeleteCard.module.scss';

export const CancelDeleteCard = ({ countdown, cancelDelete }) => {
  const [mounted, setMounted] = useState(false);
  const cancelDeleteCardClass = mounted ? scss.cancelDeleteCard : scss.cancelDeleteCardHidden;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cancelDeleteCardClass}>
      <p className={scss.deleteAccountWarning}>The account has been deleted and all data will be irretrievably lost.</p>

      <span className={scss.countDown}>{countdown}</span>

      <button className={scss.cancelButton} type="button" onClick={cancelDelete}>
        Cancel
        <img src={iconCancel} alt="cancel" />
      </button>
    </div>
  );
};

CancelDeleteCard.propTypes = {
  countdown: PropTypes.number.isRequired,
  cancelDelete: PropTypes.func.isRequired,
};
