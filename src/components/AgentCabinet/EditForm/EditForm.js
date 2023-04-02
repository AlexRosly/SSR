import PropTypes from 'prop-types';
import scss from './EditForm.module.scss';

import iconPencil from 'assets/images/pages/cabinetAgent/iconPencil.svg';
import { forwardRef } from 'react';

export const EditForm = forwardRef(
  ({ handleSubmit, showSaveButton, isSubmitButtonDisabled, showEditButton, edit, small, children }, ref) => (
    <form className={scss.form} onSubmit={handleSubmit} ref={ref}>
      {children}

      {showSaveButton && (
        <button className={scss.saveButton} type="submit" disabled={isSubmitButtonDisabled}>
          Done
        </button>
      )}

      {showEditButton && (
        <button className={small ? scss.editButtonAccountSettings : scss.editButton} type="button" onClick={edit}>
          <img src={iconPencil} alt="edit" />
        </button>
      )}
    </form>
  )
);

EditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  showSaveButton: PropTypes.bool.isRequired,
  isSubmitButtonDisabled: PropTypes.bool.isRequired,
  showEditButton: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired,
  small: PropTypes.bool,
  children: PropTypes.any,
};
