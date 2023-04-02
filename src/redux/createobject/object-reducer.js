const objectState = {
  status: false,
  local: '',
  house: '',
  name: 'Slava Nikitenko ',
  address: {
    country: '',
    region: '',
    city: '',
    street: '',
    house: '',
    appartament: '',
    mail: '',
    phone: '',
    email: '',
  },
  description: '',
  photo: [],
  time: {
    checkin: '',
    checkout: '',
  },
  service: [],
  pay: [],
};

const objectReducer = (state = objectState, { type, payload }) => {
  switch (type) {
    case 'object/setStatus':
      return {
        ...state,
        status: payload,
      };
    case 'object/notStatus':
      return {
        ...state,
        status: payload,
      };
    case 'object/setLocation':
      return {
        ...state,
        local: payload,
      };
    case 'object/setHouse':
      return {
        ...state,
        house: payload,
      };
    case 'object/setName':
      return {
        ...state,
        name: payload,
      };
    case 'object/setAddress':
      return {
        ...state,
        address: payload,
      };
    case 'object/setDescription':
      return {
        ...state,
        description: payload,
      };
    case 'object/setPhotos':
      return {
        ...state,
        photo: payload,
      };
    case 'object/setTime':
      return {
        ...state,
        time: { ...payload },
      };
    case 'object/setServices':
      return {
        ...state,
        service: payload,
      };
    case 'object/setPay':
      return {
        ...state,
        pay: payload,
      };
    case 'object/clearState':
      return {
        status: false,
        local: '',
        house: '',
        name: '',
        address: {
          country: '',
          region: '',
          city: '',
          street: '',
          house: '',
          appartament: '',
          mail: '',
          phone: '',
          email: '',
        },
        description: '',
        photo: [],
        time: {
          checkin: '',
          checkout: '',
        },
        service: [],
        pay: [],
      };
    default:
      return state;
  }
};
export default objectReducer;
