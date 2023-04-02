import {
  BEDROOMS_NB,
  BED_FOR_ONE,
  BED_FOR_ONE_ROOM_FOUR,
  BED_FOR_ONE_ROOM_THREE,
  BED_FOR_ONE_ROOM_TWO,
  BED_FOR_TWO,
  BED_FOR_TWO_ROOM_FOUR,
  BED_FOR_TWO_ROOM_THREE,
  BED_FOR_TWO_ROOM_TWO,
  BOOKING_NUMBER,
  BOOKING_NUMBER_AGENT,
  OPEN_ONE_BLOCK,
  OPEN_TWO_BLOCK,
  OPEN_CHOOSED_BLOCK,
} from './bookingOptions.types';

const initialState = {
  openOneBlock: 0,
  openTwoBlock: 0,
  bedroomsNb: 0,
  bedForTwo: 0,
  bedForOne: 0,
  bedForTwoRoomTwo: 0,
  bedForOneRoomTwo: 0,
  bedForTwoRoomThree: 0,
  bedForOneRoomThree: 0,
  bedForTwoRoomFour: 0,
  bedForOneRoomFour: 0,
  bookingNumber: '',
  bookingNumberAgent: '',
  openChoosedBlock: 0,
};

export const bookingOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ONE_BLOCK:
      return {
        ...state,
        openOneBlock: action.payload,
      };
    case OPEN_TWO_BLOCK:
      return {
        ...state,
        openTwoBlock: action.payload,
      };
    case BEDROOMS_NB:
      return {
        ...state,
        bedroomsNb: action.payload,
      };
    case BED_FOR_TWO:
      return {
        ...state,
        bedForTwo: action.payload,
      };
    case BED_FOR_ONE:
      return {
        ...state,
        bedForOne: action.payload,
      };
    case BED_FOR_TWO_ROOM_TWO:
      return {
        ...state,
        bedForTwoRoomTwo: action.payload,
      };
    case BED_FOR_ONE_ROOM_TWO:
      return {
        ...state,
        bedForOneRoomTwo: action.payload,
      };
    case BED_FOR_TWO_ROOM_THREE:
      return {
        ...state,
        bedForTwoRoomThree: action.payload,
      };
    case BED_FOR_ONE_ROOM_THREE:
      return {
        ...state,
        bedForOneRoomThree: action.payload,
      };
    case BED_FOR_TWO_ROOM_FOUR:
      return {
        ...state,
        bedForTwoRoomFour: action.payload,
      };
    case BED_FOR_ONE_ROOM_FOUR:
      return {
        ...state,
        bedForOneRoomFour: action.payload,
      };
    case BOOKING_NUMBER:
      return {
        ...state,
        bookingNumber: action.payload,
      };
    case BOOKING_NUMBER_AGENT:
      return {
        ...state,
        bookingNumberAgent: action.payload,
      };
    case OPEN_CHOOSED_BLOCK:
      return {
        ...state,
        openChoosedBlock: action.payload,
      };
    default:
      return state;
  }
};
