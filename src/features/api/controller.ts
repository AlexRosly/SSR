import type {
  ManyHotels,
  OneHotel,
  OneNewHotel,
  OneHostel,
  ManyTransactions,
  OneTransaction,
  ManySearchObjects,
  OneSearchObject,
  ManyAutocompleteResults,
  ManyObjectTypes,
  ManyObjectServices,
  ManyHotelServices,
  ManyHostelServices,
  ManyObjectPaymentsMethods,
  // ManyServices,
} from 'types';
import { frozenArr } from './api';

const obj: {} = {};

// export const getManyServices = ({ data: { services } = {} }: ManyServices = {}) => services ?? frozenArr;

// export const getManyLanguages = ({ data: { languages } = {} }: ManyLanguages = {}) => languages ?? frozenArr;
// export const getManyCountries = ({ data: { countries } = {} }: ManyCountries = {}) => countries ?? frozenArr;
// export const getManyStates = ({ data: { states } = {} }: ManyStates = {}) => states ?? frozenArr;
// export const getManyCities = ({ data: { cities } = {} }: ManyCities = {}) => cities ?? frozenArr;
// export const getManyDistricts = ({ data: { districts } = {} }: ManyDistricts = {}) => districts ?? frozenArr;
export const getManyHotels = ({ data: { hotels } = obj }: ManyHotels = obj) => hotels ?? frozenArr;
export const getManyTransactions = ({ data: { transactions } = obj }: ManyTransactions = obj) =>
  transactions ?? frozenArr;
export const getManySearchObjects = ({ data: { objects } = obj }: ManySearchObjects = obj) => objects ?? frozenArr;
export const getManyObjectTypes = ({ data: { object } = obj }: ManyObjectTypes = obj) =>
  object?.[0].objects ?? frozenArr;

export const getManyObjectServices = ({ data: { services } = obj }: ManyObjectServices = obj) =>
  services?.[0].services ?? frozenArr;

  export const getManyHotelServices = ({ data: { bookingServices } = obj }: ManyHotelServices = obj) =>
  bookingServices ?? frozenArr;
  export const getManyHostelServices = ({ data: { bookingServices } = obj }: ManyHostelServices = obj) =>
  bookingServices?.[0].services ?? frozenArr;
export const getManyObjectPaymentsMethods = ({ data: { payment } = obj }: ManyObjectPaymentsMethods = obj) =>
  payment?.[0].payments ?? frozenArr;

export const getManyAutocompleteResults = ({ data: { city } = obj }: ManyAutocompleteResults = obj) =>
  city ?? frozenArr;

// export const getOneLanguage = ({ data: { language } = {} }: OneLanguageInArray = {}) => language?.[0];
// export const getOneCountry = ({ data: { country } = {} }: OneCountry = {}) => country;
// export const getOneState = ({ data: { state } = {} }: OneState = {}) => state;
// export const getOneCity = ({ data: { city } = {} }: OneCity = {}) => city;
// export const getOneDistrict = ({ data: { district } = {} }: OneDistrict = {}) => district;
export const getOneHotel = ({ data: { hotel } = obj }: OneHotel = obj) => hotel;
export const getOneTransaction = ({ data: { transaction } = obj }: OneTransaction = obj) => transaction;
export const getOneSearchObject = ({ data: { object } = obj }: OneSearchObject = obj) => object;
export const getBookingHotel = ({ data: { newHotel } = obj }: OneNewHotel = obj) => newHotel;
export const getBookingHostel = ({ data: { hostel } = obj }: OneHostel = obj) => hostel;


// export const getOneLanguageId = (result?: OneLanguageInArray) => getOneLanguage(result)?._id;
// export const getOneCountryId = (result?: OneCountry) => getOneCountry(result)?._id;
// export const getOneStateId = (result?: OneState) => getOneState(result)?._id;
// export const getOneCityId = (result?: OneCity) => getOneCity(result)?._id;
// export const getOneDistrictId = (result?: OneDistrict) => getOneDistrict(result)?._id;
// export const getOneObjectId = (result?: OneObject) => getOneObject(result)?._id;
