import type { AutocompleteCity } from './cities';
import type { Hotel, Hostel, NewHotel } from './hotels';
import type {
  BigObjectTypeFromDB,
  BigObjectServiceFromDB,
  BigHotelServicesFromDB,
  BigHostelServicesFromDB,
  BigObjectPaymentFromDB,
  ObjectLocation,
} from './objects';
import type { Transaction } from './transactions';
// export type ManyDistricts = { data?: { districts?: District[] } };
// export type ManyCities = { data?: { cities?: City[] } };
// export type ManyStates = { data?: { states?: State[] } };
// export type ManyCountries = { data?: { countries?: Country[] } };
// export type ManyLanguages = { data?: { languages?: Language[] } };
// export type OneLanguageInArray = { data?: { language?: Language[] } };
export type ManyHotels = { data?: { hotels?: Hotel[] } };
export type ManySearchObjects = { data?: { objects?: ObjectLocation[] } };
export type ManyTransactions = { data?: { transactions?: Transaction[] } };
export type ManyObjectTypes = { data?: { object?: BigObjectTypeFromDB[] } };
export type ManyObjectServices = { data?: { services?: BigObjectServiceFromDB[] } };
export type ManyHotelServices = { data?: { bookingServices?: BigHotelServicesFromDB[] } };
export type ManyHostelServices = { data?: { bookingServices?: BigHostelServicesFromDB[] } };

export type ManyObjectPaymentsMethods = { data?: { payment?: BigObjectPaymentFromDB[] } };
export type ManyAutocompleteResults = {
  data?: {
    // country?: AutocompleteCountry[];
    // state?: AutocompleteState[];
    city?: AutocompleteCity[];
    // district?: AutocompleteDistrict[];
  };
};
// export type OneDistrict = { data?: { district?: District } };
// export type OneCity = { data?: { city?: City } };
// export type OneState = { data?: { state?: State } };
// export type OneCountry = { data?: { country?: Country } };
// export type OneLanguage = { data?: { language?: Language } };
export type OneHotel = { data?: { hotel?: Hotel } };
export type OneNewHotel = { data?: { newHotel?: NewHotel } };
export type OneHostel = { data?: { hostel?: Hostel } };

// TODO: update to real api call
export type OneSearchObject = { data?: { object?: ObjectLocation } };

export type OneTransaction = { data?: { transaction?: Transaction } };
