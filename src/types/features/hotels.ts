import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { LanguageCodeLowercase } from './common';
import type { AutocompleteCity } from './cities';
import type {
  AddObjectAddressType,
  ObjectBookingTime,
  ObjectService,
  ObjectType,
  PaymentOptionFromDB,
} from './objects';

export type Availability = 'free' | 'booked' | 'bookedViaOtherService';

export type BookingDate = {
  price: string | 'не установлена';
  date: string;
  availability: Availability;
};

export type HotelRoom = {
  _id: EntityId;
  singleBed: number;
  doubleBed: number;
  key: number;
};

export type HotelVariant = {
  _id: EntityId;
  objectId: EntityId;
  type: 'hotelRoom' | 'separateRoomInInHostel';
  dates: BookingDate[];
  userVariantId: string;
  availableRooms: number;
  rooms: HotelRoom[];
};

export type HostelBed = {
  _id: EntityId;
  type: 'singleBed';
  dates: BookingDate[];
};

export type HostelVariant = {
  _id: EntityId;
  objectId: EntityId;
  type: 'hostelRoom';
  userVariantId: string;
  totalBeds: number;
  bedsAddedToOurService: number;
  beds: HostelBed[];
};

export type TBookingVariant = HostelVariant | HotelVariant;

export type PhotoFromBackend = {
  _id: EntityId;
  id: string;
  url: string;
  position?: string;
};

export type Hotel = {
  _id: EntityId; // objectId
  language: LanguageCodeLowercase;
  status: 'on verification' | 'active' | 'not active' | 'deleted';

  type: ObjectType;
  objectName: string;
  address: AddObjectAddressType;
  description: string;
  photos: PhotoFromBackend[];
  time: ObjectBookingTime;
  services: ObjectService[];
  payments: PaymentOptionFromDB[];
  location: AutocompleteCity;

  createdAt: string;
  updatedAt: string;
};
export type NewHotel = {
  _id: EntityId; // objectId
  status: 'on verification' | 'active' | 'not active' | 'deleted';

  type: ObjectType;
  bedrooms: number;
  address: AddObjectAddressType;
  description: string;
  detailedBedrooms: AddObjectAddressType;
  photos: string[];
  uniqueNumber: string;
  totalSquare: number;
  smoking: boolean;
  roomServices: ObjectService[];

  createdAt: string;
  updatedAt: string;
};
export type Hostel = {
  _id: EntityId; // objectId
  status: 'on verification' | 'active' | 'not active' | 'deleted';

  typeOfObject: ObjectType;
  bedInRoom: Number;
  bedAddSite: Number;
  description: string;
  uniqueNumber: string;
  photos: string[];
  time: ObjectBookingTime;
  roomServices: ObjectService[];
  // payments: PaymentOptionFromDB[];
  // location: AutocompleteCity;

  createdAt: string;
  updatedAt: string;
};
export type Hotels = Hotel[];
export type HotelsEntity = EntityState<Hotel>;
export type MaybeHotelsEntity = HotelsEntity | undefined;

export type BookingVariantsEntity = EntityState<TBookingVariant>;

export type AddNewHotel = FormData;

export type TAddNewHotelCheck = {
  location: AutocompleteCity;
  type: ObjectType;
  objectName: string;
  address: AddObjectAddressType;
  description: string;
  image: File[];
  time: ObjectBookingTime;
  services: ObjectService[];
  payments: PaymentOptionFromDB[];
  language: LanguageCodeLowercase;
};

export type TEditHotelBeforeVerificationCheck = Pick<Hotel, '_id'> &
  Partial<Omit<Hotel, 'photos'>> & {
    photos?: File[];
  };

export type TEditHotelBeforeVerification = { _id: EntityId; editObjectFormData: FormData };
