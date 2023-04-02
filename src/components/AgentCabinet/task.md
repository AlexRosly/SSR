### Form:

- [x] click outside will reset the form, and hide buttons.

### Input:

- [x] initial/normal: enabled
- [x] normal(if has value on submit): disabled: disabled
- [x] hover: not(:disabled) :not(:focus), border accented, cursor-pointer
- [x] active: not:disabled, border accented
- [x] focused: cursor-text inside, outline: none.

### Save Button:

- [x] initial, if Input:disabled: hidden and disabled
- [x] normal, if Input:not(:disabled) and !input.value {visible and disabled}
- [x] hover: hover
- [x] active: active
- [x] onSubmit {setAccount, hide saveButton, showEditButton, disable input}

### Edit Button:

- [x] initial: hidden;
- [x] normal, if input not editable: normal
- [x] hover: hover
- [x] active: active
- [x] onEditClick {hide Edit button, enable input, focus input, showSaveButton}
