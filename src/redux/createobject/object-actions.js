const setStatus = status => ({
  type: 'object/setStatus',
  payload: status,
});
const notStatus = status => ({
  type: 'object/notStatus',
  payload: status,
});
const setLocation = local => ({
  type: 'object/setLocation',
  payload: local,
});

const setHouse = house => ({
  type: 'object/setHouse',
  payload: house,
});
const setName = name => ({
  type: 'object/setName',
  payload: name,
});
const setAddress = address => ({
  type: 'object/setAddress',
  payload: address,
});
const setDescription = description => ({
  type: 'object/setDescription',
  payload: description,
});
const setPhotos = images => ({
  type: 'object/setPhotos',
  payload: images,
});
const setTime = time => ({
  type: 'object/setTime',
  payload: time,
});
const setServices = service => ({
  type: 'object/setServices',
  payload: service,
});
const setPay = pay => ({
  type: 'object/setPay',
  payload: pay,
});
const clearState = () => ({
  type: 'object/clearState',
  payload: '',
});

const objectActions = {
  setStatus,
  notStatus,
  setLocation,
  setHouse,
  setName,
  setAddress,
  setDescription,
  setPhotos,
  setTime,
  setServices,
  setPay,
  clearState,
};

export default objectActions;
