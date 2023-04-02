import type { RootState } from 'redux/store';
import { createSlice } from '@reduxjs/toolkit';

type ModalState = {
  openedModalCount: number;
};

const initialState: ModalState = {
  openedModalCount: 0,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    increaseModalCount: state => {
      state.openedModalCount += 1;
    },
    decreaseModalCount: state => {
      state.openedModalCount -= 1;
    },
  },
});

export const { increaseModalCount, decreaseModalCount } = modalSlice.actions;

export const modalSliceReducer = modalSlice.reducer;

export const selectModalCount = (state: RootState) => state.modal.openedModalCount;
export const selectIsModalOpen = (state: RootState) => state.modal.openedModalCount > 0;
