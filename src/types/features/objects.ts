import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { Ids, LanguageCodeLowercase } from './common';
import type { PaymentType } from './payments';
import { Hotel, PhotoFromBackend } from './hotels';
import { CitiesCardsTranslationKeys, CountriesCardsTranslationKeys } from './translation';

export type ObjectType = { id: string; _id: EntityId; type: string; stars?: number };

export type ObjectAddressType = {
  country: string; // +
  state: string; // +
  city: string; // +
  district?: string; // -
  street: string; // +
  house: string; // +
  apartment?: string; // +
  zipCode: string; // +
  phone: string; // +
  email: string; // +
};

export type AddObjectAddressType = Omit<ObjectAddressType, 'district'>;
export type AddressInputName = keyof AddObjectAddressType;

// export type ObjectLocation = Partial<Country | State | City | District>;

// export type ObjectLocations = { ids: Ids; entities: Record<EntityId, ObjectLocation> };

export type ObjectLocation = {
  _id: EntityId;
  country: string;
  state: string;
  city: string;
  cityImgUrl: string;
  cityImgAlt: string;
  district?: string;
  districtImgUrl?: string;
  districtImgAlt?: string;

  // TODO: only local keys - remove before real api call
  localImg: string;
  i18nCountry: CountriesCardsTranslationKeys;
  i18nCity: CitiesCardsTranslationKeys;
};

export type ObjectBookingTime = {
  checkin: string;
  checkout: string;
};

export type LocalPhoto = { _id: EntityId; localUrl: string; position?: string };
export type LocalPhotoFileToUpload = File;

export type ObjectPhoto = LocalPhoto | PhotoFromBackend;

export type ObjectPhotosEntity = EntityState<ObjectPhoto>;

export type ObjectService = { id: string; type: string };

export type PaymentOptionFromDB = {
  id: string;
  typeInternational: PaymentType;
  type: string;
  _id: EntityId;
};

export type PaymentMethodLocal = {
  id: EntityId;
  typeInternational: PaymentType;
  icon: string;
  inDevelopment: boolean;
};

export type PaymentOptionFromDBWithIcon = {
  _id: EntityId;
  id: string;
  typeInternational: PaymentType;
  type: string;
  icon: string;
  inDevelopment: boolean;
};

export type PaymentOptionWithoutId = Omit<PaymentMethodLocal, 'id' | '_id'>;

export type ObjectTypeEntity = EntityState<ObjectType>;
export type MaybeObjectTypeEntity = ObjectTypeEntity | undefined;

export type SearchObjectsEntity = EntityState<ObjectLocation>;
export type MaybeSearchObjectsEntity = SearchObjectsEntity | undefined;

export type ObjectServiceEntity = EntityState<ObjectService>;
export type MaybeObjectServiceEntity = ObjectServiceEntity | undefined;

export type ObjectPaymentsMethodEntity = EntityState<PaymentOptionFromDB>;
export type MaybeObjectPaymentsMethodEntity = ObjectPaymentsMethodEntity | undefined;

export type ObjectPaymentsMethodFromDBWithIconEntity = EntityState<PaymentOptionFromDBWithIcon>;
export type MaybeObjectPaymentsMethodFromDBWithIconEntity = ObjectPaymentsMethodFromDBWithIconEntity | undefined;

export type AddObjectState = {
  activeObjectId: EntityId;
  status: boolean;
  isEditingExistingObjectBeforeVerification: boolean;
  editedFields: (keyof Hotel)[];

  // locationFilter: string;
  activeLocationId: EntityId;
  // objectTypes: ObjectTypeEntity;
  typeId: EntityId;

  objectName: string;
  address: AddObjectAddressType;
  description: string;
  photos: ObjectPhotosEntity;
  time: ObjectBookingTime;
  activeServicesIds: Ids;
  activePaymentsIds: Ids;
  activeTabId: number;
};

export type BigObjectTypeFromDB = {
  _id: EntityId;
  langCode: LanguageCodeLowercase;
  objects: ObjectType[];
  createdAt: string;
  updatedAt: string;
};

export type BigObjectServiceFromDB = {
  _id: EntityId;
  langCode: LanguageCodeLowercase;
  services: ObjectService[];
  createdAt: string;
  updatedAt: string;
};
export type BigHotelServicesFromDB = {
  _id: EntityId;
  langCode: LanguageCodeLowercase;
  services: ObjectService[];
  createdAt: string;
  updatedAt: string;
};
export type BigHostelServicesFromDB = {
  _id: EntityId;
  langCode: LanguageCodeLowercase;
  services: ObjectService[];
  createdAt: string;
  updatedAt: string;
};
export type BigObjectPaymentFromDB = {
  _id: EntityId;
  langCode: LanguageCodeLowercase;
  payments: PaymentOptionFromDB[];
  createdAt: string;
  updatedAt: string;
};
