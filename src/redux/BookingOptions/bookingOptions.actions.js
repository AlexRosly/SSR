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

export const setOpenOneBlock = item => ({
  type: OPEN_ONE_BLOCK,
  payload: item,
});
export const setOpenTwoBlock = item => ({
  type: OPEN_TWO_BLOCK,
  payload: item,
});
export const setOpenChoosedBlock = item => ({
  type: OPEN_CHOOSED_BLOCK,
  payload: item,
});
export const setBedroomsNb = item => ({
  type: BEDROOMS_NB,
  payload: item,
});
export const setBedForTwo = item => ({
  type: BED_FOR_TWO,
  payload: item,
});
export const setBedForOne = item => ({
  type: BED_FOR_ONE,
  payload: item,
});
export const setBedForTwoRoomTwo = item => ({
  type: BED_FOR_TWO_ROOM_TWO,
  payload: item,
});
export const setBedForOneRoomTwo = item => ({
  type: BED_FOR_ONE_ROOM_TWO,
  payload: item,
});
export const setBedForTwoRoomThree = item => ({
  type: BED_FOR_TWO_ROOM_THREE,
  payload: item,
});
export const setBedForOneRoomThree = item => ({
  type: BED_FOR_ONE_ROOM_THREE,
  payload: item,
});
export const setBedForTwoRoomFour = item => ({
  type: BED_FOR_TWO_ROOM_FOUR,
  payload: item,
});
export const setBedForOneRoomFour = item => ({
  type: BED_FOR_ONE_ROOM_FOUR,
  payload: item,
});
export const setBookingNumber = item => ({
  type: BOOKING_NUMBER,
  payload: item,
});
export const setBookingNumberAgent = item => ({
  type: BOOKING_NUMBER_AGENT,
  payload: item,
});
