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

const initialState = {
  oneBedRoomDoubleBedCount: 0,
  oneBedRoomSingleBedCount: 0,
  twoBedRoomFirstRoomDoubleCount: 0,
  twoBedRoomFirstRoomSingleBedCount: 0,
  twoBedRoomSecondRoomDoubleCount: 0,
  twoBedRoomSecondRoomSingleBedCount: 0,
  gbvcssSigleBedCount: 0,
  threeBedRoomFirstRoomDoubleCount: 0,
  threeBedRoomFirstRoomSingleBedCount: 0,
  threeBedRoomSecondRoomDoubleCount: 0,
  threeBedRoomSecondRoomSingleBedCount: 0,
  threeBedRoomThirdRoomDoubleCount: 0,
  threeBedRoomThirdRoomSingleBedCount: 0,
  fourBedRoomFirstRoomDoubleCount: 0,
  fourBedRoomFirstRoomSingleBedCount: 0,
  fourBedRoomSecondRoomDoubleCount: 0,
  fourBedRoomSecondRoomSingleBedCount: 0,
  fourBedRoomThirdRoomDoubleCount: 0,
  fourBedRoomThirdRoomSingleBedCount: 0,
  fourBedRoomFourthRoomDoubleCount: 0,
  fourBedRoomFourthRoomSingleBedCount: 0,
};

export const bedRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    //one bedroom
    case ONE_BEDROOM_DOUBLE_BED_COUNT_INCREMENT:
      return {
        ...state,
        oneBedRoomDoubleBedCount:
          state.oneBedRoomDoubleBedCount + action.payload,
      };
    case ONE_BEDROOM_DOUBLE_BED_COUNT_DECREMENT:
      return {
        ...state,
        oneBedRoomDoubleBedCount:
          state.oneBedRoomDoubleBedCount - action.payload,
      };
    case ONE_BEDROOM_SINGLE_BED_COUNT_INCREMENT:
      return {
        ...state,
        oneBedRoomSingleBedCount:
          state.oneBedRoomSingleBedCount + action.payload,
      };
    case ONE_BEDROOM_SINGLE_BED_COUNT_DECREMENT:
      return {
        ...state,
        oneBedRoomSingleBedCount:
          state.oneBedRoomSingleBedCount - action.payload,
      };
    // TwoBedRoom
    //   fist room
    case TWO_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        twoBedRoomFirstRoomDoubleCount:
          state.twoBedRoomFirstRoomDoubleCount + action.payload,
      };
    case TWO_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        twoBedRoomFirstRoomDoubleCount:
          state.twoBedRoomFirstRoomDoubleCount - action.payload,
      };
    case TWO_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        twoBedRoomFirstRoomSingleBedCount:
          state.twoBedRoomFirstRoomSingleBedCount + action.payload,
      };
    case TWO_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        twoBedRoomFirstRoomSingleBedCount:
          state.twoBedRoomFirstRoomSingleBedCount - action.payload,
      };
    //   second room
    case TWO_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        twoBedRoomSecondRoomDoubleCount:
          state.twoBedRoomSecondRoomDoubleCount + action.payload,
      };
    case TWO_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        twoBedRoomSecondRoomDoubleCount:
          state.twoBedRoomSecondRoomDoubleCount - action.payload,
      };
    case TWO_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        twoBedRoomSecondRoomSingleBedCount:
          state.twoBedRoomSecondRoomSingleBedCount + action.payload,
      };
    case TWO_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        twoBedRoomSecondRoomSingleBedCount:
          state.twoBedRoomSecondRoomSingleBedCount - action.payload,
      };
    //Gbvcss
    case GBVCSS_SINGLE_BED_COUNT_INCREMENT:
      return {
        ...state,
        gbvcssSigleBedCount: state.gbvcssSigleBedCount + action.payload,
      };
    case GBVCSS_SINGLE_BED_COUNT_DECREMENT:
      return {
        ...state,
        gbvcssSigleBedCount: state.gbvcssSigleBedCount - action.payload,
      };
    // ThreeBedRoom
    //   fist room
    case THREE_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        threeBedRoomFirstRoomDoubleCount:
          state.threeBedRoomFirstRoomDoubleCount + action.payload,
      };
    case THREE_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        threeBedRoomFirstRoomDoubleCount:
          state.threeBedRoomFirstRoomDoubleCount - action.payload,
      };
    case THREE_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        threeBedRoomFirstRoomSingleBedCount:
          state.threeBedRoomFirstRoomSingleBedCount + action.payload,
      };
    case THREE_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        threeBedRoomFirstRoomSingleBedCount:
          state.threeBedRoomFirstRoomSingleBedCount - action.payload,
      };
    //   second room
    case THREE_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        threeBedRoomSecondRoomDoubleCount:
          state.threeBedRoomSecondRoomDoubleCount + action.payload,
      };
    case THREE_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        threeBedRoomSecondRoomDoubleCount:
          state.threeBedRoomSecondRoomDoubleCount - action.payload,
      };
    case THREE_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        threeBedRoomSecondRoomSingleBedCount:
          state.threeBedRoomSecondRoomSingleBedCount + action.payload,
      };
    case THREE_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        threeBedRoomSecondRoomSingleBedCount:
          state.threeBedRoomSecondRoomSingleBedCount - action.payload,
      };
    //   third room
    case THREE_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        threeBedRoomThirdRoomDoubleCount:
          state.threeBedRoomThirdRoomDoubleCount + action.payload,
      };
    case THREE_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        threeBedRoomThirdRoomDoubleCount:
          state.threeBedRoomThirdRoomDoubleCount - action.payload,
      };
    case THREE_BEDROOM_THIRD_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        threeBedRoomThirdRoomSingleBedCount:
          state.threeBedRoomThirdRoomSingleBedCount + action.payload,
      };
    case THREE_BEDROOM_THIRD_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        threeBedRoomThirdRoomSingleBedCount:
          state.threeBedRoomThirdRoomSingleBedCount - action.payload,
      };
    // FourBedRoom
    //   fist room
    case FOUR_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomFirstRoomDoubleCount:
          state.fourBedRoomFirstRoomDoubleCount + action.payload,
      };
    case FOUR_BEDROOM_FIRST_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomFirstRoomDoubleCount:
          state.fourBedRoomFirstRoomDoubleCount - action.payload,
      };
    case FOUR_BEDROOM_FIRST_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomFirstRoomSingleBedCount:
          state.fourBedRoomFirstRoomSingleBedCount + action.payload,
      };
    case FOUR_BEDROOM_FIRST_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomFirstRoomSingleBedCount:
          state.fourBedRoomFirstRoomSingleBedCount - action.payload,
      };
    //   second room
    case FOUR_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomSecondRoomDoubleCount:
          state.fourBedRoomSecondRoomDoubleCount + action.payload,
      };
    case FOUR_BEDROOM_SECOND_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomSecondRoomDoubleCount:
          state.fourBedRoomSecondRoomDoubleCount - action.payload,
      };
    case FOUR_BEDROOM_SECOND_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomSecondRoomSingleBedCount:
          state.fourBedRoomSecondRoomSingleBedCount + action.payload,
      };
    case FOUR_BEDROOM_SECOND_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomSecondRoomSingleBedCount:
          state.fourBedRoomSecondRoomSingleBedCount - action.payload,
      };
    //   third room
    case FOUR_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomThirdRoomDoubleCount:
          state.fourBedRoomThirdRoomDoubleCount + action.payload,
      };
    case FOUR_BEDROOM_THIRD_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomThirdRoomDoubleCount:
          state.fourBedRoomThirdRoomDoubleCount - action.payload,
      };
    case FOUR_BEDROOM_THIRD_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomThirdRoomSingleBedCount:
          state.fourBedRoomThirdRoomSingleBedCount + action.payload,
      };
    case FOUR_BEDROOM_THIRD_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomThirdRoomSingleBedCount:
          state.fourBedRoomThirdRoomSingleBedCount - action.payload,
      };

    //fourth room
    case FOUR_BEDROOM_FOURTH_ROOM_DOUBLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomFourthRoomDoubleCount:
          state.fourBedRoomFourthRoomDoubleCount + action.payload,
      };
    case FOUR_BEDROOM_FOURTH_ROOM_DOUBLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomFourthRoomDoubleCount:
          state.fourBedRoomFourthRoomDoubleCount - action.payload,
      };
    case FOUR_BEDROOM_FOURTH_ROOM_SINGLE_COUNT_INCREMENT:
      return {
        ...state,
        fourBedRoomFourthRoomSingleBedCount:
          state.fourBedRoomFourthRoomSingleBedCount + action.payload,
      };
    case FOUR_BEDROOM_FOURTH_ROOM_SINGLE_COUNT_DECREMENT:
      return {
        ...state,
        fourBedRoomFourthRoomSingleBedCount:
          state.fourBedRoomFourthRoomSingleBedCount - action.payload,
      };

    default:
      return state;
  }
};
