import {
  ONE_BEDROOM_DOUBLE_BED_COUNT_INCREMENT,
  ONE_BEDROOM_DOUBLE_BED_COUNT_DECREMENT,
  ONE_BEDROOM_SINGLE_BED_COUNT_INCREMENT,
  ONE_BEDROOM_SINGLE_BED_COUNT_DECREMENT,
  TWO_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT,
  TWO_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT,
  TWO_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT,
  TWO_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT,
  TWO_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT,
  TWO_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT,
  TWO_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT,
  TWO_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT,
  GBVCSS_SINGLE_BED_COUNT_INCREMENT,
  GBVCSS_SINGLE_BED_COUNT_DECREMENT,
  THREE_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT,
  THREE_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT,
  THREE_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT,
  THREE_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT,
  THREE_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT,
  THREE_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT,
  THREE_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT,
  THREE_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT,
  THREE_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_INCREMENT,
  THREE_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_DECREMENT,
  THREE_BEDROOM_THIRD_ROOM_SINGLE_COUNT_INCREMENT,
  THREE_BEDROOM_THIRD_ROOM_SINGLE_COUNT_DECREMENT,
  FOUR_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT,
  FOUR_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT,
  FOUR_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT,
  FOUR_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT,
  FOUR_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT,
  FOUR_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT,
  FOUR_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT,
  FOUR_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT,
  FOUR_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_INCREMENT,
  FOUR_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_DECREMENT,
  FOUR_BEDROOM_THIRD_ROOM_SINGLE_COUNT_INCREMENT,
  FOUR_BEDROOM_THIRD_ROOM_SINGLE_COUNT_DECREMENT,
  FOUR_BEDROOM_FOURTH_ROOM_DOUBLE_COUNT_INCREMENT,
  FOUR_BEDROOM_FOURTH_ROOM_DOUBLE_COUNT_DECREMENT,
  FOUR_BEDROOM_FOURTH_ROOM_SINGLE_COUNT_INCREMENT,
  FOUR_BEDROOM_FOURTH_ROOM_SINGLE_COUNT_DECREMENT,
} from "./bedRooms.types";

//one bedroom
export const oneBedRoomDoubleBedCountIncrement = (value) => ({
  type: ONE_BEDROOM_DOUBLE_BED_COUNT_INCREMENT,
  payload: value,
});

export const oneBedRoomDoubleBedCountDecrement = (value) => ({
  type: ONE_BEDROOM_DOUBLE_BED_COUNT_DECREMENT,
  payload: value,
});

export const oneBedRoomSingleBedCountIncrement = (value) => ({
  type: ONE_BEDROOM_SINGLE_BED_COUNT_INCREMENT,
  payload: value,
});

export const oneBedRoomSingleBedCountDecrement = (value) => ({
  type: ONE_BEDROOM_SINGLE_BED_COUNT_DECREMENT,
  payload: value,
});

// Two bedroom
// first room
export const twoBedRoomFirstRoomDoubleBedCountIncrement = (value) => ({
  type: TWO_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const twoBedRoomFirstRoomDoubleBedCountDecrement = (value) => ({
  type: TWO_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const twoBedRoomFirstRoomSingleBedCountIncrement = (value) => ({
  type: TWO_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const twoBedRoomFirstRoomSingleBedCountDecrement = (value) => ({
  type: TWO_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

// second room
export const twoBedRoomSecondRoomDoubleBedCountIncrement = (value) => ({
  type: TWO_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const twoBedRoomSecondRoomDoubleBedCountDecrement = (value) => ({
  type: TWO_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const twoBedRoomSecondRoomSingleBedCountIncrement = (value) => ({
  type: TWO_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const twoBedRoomSecondRoomSingleBedCountDecrement = (value) => ({
  type: TWO_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

//Gbvcss
export const gbvcssSingleBedCountIncrement = (value) => ({
  type: GBVCSS_SINGLE_BED_COUNT_INCREMENT,
  payload: value,
});

export const gbvcssSingleBedCountDecrement = (value) => ({
  type: GBVCSS_SINGLE_BED_COUNT_DECREMENT,
  payload: value,
});

//three bedroom
// first room
export const threeBedRoomFirstRoomDoubleBedCountIncrement = (value) => ({
  type: THREE_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const threeBedRoomFirstRoomDoubleBedCountDecrement = (value) => ({
  type: THREE_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const threeBedRoomFirstRoomSingleBedCountIncrement = (value) => ({
  type: THREE_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const threeBedRoomFirstRoomSingleBedCountDecrement = (value) => ({
  type: THREE_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

// second room
export const threeBedRoomSecondRoomDoubleBedCountIncrement = (value) => ({
  type: THREE_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const threeBedRoomSecondRoomDoubleBedCountDecrement = (value) => ({
  type: THREE_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const threeBedRoomSecondRoomSingleBedCountIncrement = (value) => ({
  type: THREE_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const threeBedRoomSecondRoomSingleBedCountDecrement = (value) => ({
  type: THREE_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

// third room
export const threeBedRoomThirdRoomDoubleBedCountIncrement = (value) => ({
  type: THREE_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const threeBedRoomThirdRoomDoubleBedCountDecrement = (value) => ({
  type: THREE_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const threeBedRoomThirdRoomSingleBedCountIncrement = (value) => ({
  type: THREE_BEDROOM_THIRD_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const threeBedRoomThirdRoomSingleBedCountDecrement = (value) => ({
  type: THREE_BEDROOM_THIRD_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

//four bedroom
// first room
export const fourBedRoomFirstRoomDoubleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomFirstRoomDoubleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const fourBedRoomFirstRoomSingleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomFirstRoomSingleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

// second room
export const fourBedRoomSecondRoomDoubleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomSecondRoomDoubleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const fourBedRoomSecondRoomSingleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomSecondRoomSingleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

// third room
export const fourBedRoomThirdRoomDoubleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomThirdRoomDoubleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const fourBedRoomThirdRoomSingleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_THIRD_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomThirdRoomSingleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_THIRD_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});

//fourth room
export const fourBedRoomFourthRoomDoubleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_FOURTH_ROOM_DOUBLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomFourthRoomDoubleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_FOURTH_ROOM_DOUBLE_COUNT_DECREMENT,
  payload: value,
});

export const fourBedRoomFourthRoomSingleBedCountIncrement = (value) => ({
  type: FOUR_BEDROOM_FOURTH_ROOM_SINGLE_COUNT_INCREMENT,
  payload: value,
});

export const fourBedRoomFourthRoomSingleBedCountDecrement = (value) => ({
  type: FOUR_BEDROOM_FOURTH_ROOM_SINGLE_COUNT_DECREMENT,
  payload: value,
});
