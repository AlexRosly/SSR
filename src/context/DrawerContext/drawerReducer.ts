export type DrawerState = {
  isDrawerOpen: boolean;
};

export type DrawerReducerPayloadAction = { type: 'setIsDrawerOpen'; payload: boolean };

export const drawerReducer = (state: DrawerState, { type, payload }: DrawerReducerPayloadAction) => {
  switch (type) {
    case 'setIsDrawerOpen':
      return { ...state, userType: payload };

    default:
      return state;
  }
};
