import { useInputState } from 'hooks/UI';
import PropTypes from 'prop-types';
import scss from './EditableFieldSection.module.scss';
import iconDollar from 'assets/images/pages/cabinetAgent/iconDollar.svg';
import { EditForm } from '../EditForm/EditForm';

export default function EditableFieldSection({ initValue = '' }) {
  const {
    wrapperRef,
    handleSubmit,
    localInputValue: localWithdrawalAccount,
    handleChange,
    isInputDisabled,
    inputRef,
    onFocus,
    showSaveButton,
    isSubmitButtonDisabled,
    showEditButton,
    edit,
  } = useInputState({ initValue });

  return (
    <section className={scss.section} ref={wrapperRef}>
      <div className={scss.textWrapper}>
        <img src={iconDollar} alt="dollar" />
        <p className={scss.descr}>USDT reward withdrawal address (TRON network, TRC-20 standard):</p>
      </div>

      <EditForm
        handleSubmit={handleSubmit}
        showSaveButton={showSaveButton}
        isSubmitButtonDisabled={isSubmitButtonDisabled}
        showEditButton={showEditButton}
        edit={edit}
      >
        <input
          className={scss.input}
          value={localWithdrawalAccount}
          onChange={handleChange}
          disabled={isInputDisabled}
          type="text"
          name="withdrawalAccount"
          minLength="5"
          placeholder=" "
          required
          ref={inputRef}
          onFocus={onFocus}
        />
      </EditForm>
    </section>
  );
}

EditableFieldSection.propTypes = {
  initValue: PropTypes.string.isRequired,
};
