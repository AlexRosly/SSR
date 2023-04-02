export type translationKey =
  | AddObjectTranslationKeys
  | RateBookingVariantTranslationKeys
  | FeedbackBookingVariantTranslationKeys
  | FooterLinkTranslationKeys
  | HeaderTranslationKeys
  | UserSettingsLinksTranslationKeys
  | HotelierSettingsLinksTranslationKeys
  | NavLinksTranslationKeys
  | ReviewsTranslationKeys;

export type AddObjectTranslationKeys =
  | 'addYourFirstObject'

  // ObjectAddLocation
  | 'chooseObjectLocation'
  | 'addingObjectAvgDuration'
  | 'noQueryResults'

  // ObjectAddType
  | 'chooseObjectTypeIcon'

  // ObjectAddName
  | 'enterObjectName'
  | 'nameOfTheProperty'

  // ObjectAddAddress
  | 'objectPostalAddress'
  | 'country'
  | 'provinceOrState'
  | 'settlement'
  | 'street'
  | 'house'
  | 'apartment'
  | 'notRequired'
  | 'zipCode'
  | 'phone'
  | 'email'

  // ObjectAddDescription
  | 'enterObjectDescriptionTitle'
  | 'objectDescriptionRequirements'
  | 'objectDescriptionRightToTranslate'

  // ObjectAddPhotos
  | 'addObjectPhotoTitle'
  | 'objectPhotoRequiredFormat'
  | 'objectMainPhoto'
  | 'addObjectImageToUpload'
  | 'chooseObjectCheckinOutTime'
  | 'chooseObjectServices'

  // ObjectAddPayments
  | 'chooseObjectPaymentMethods'
  | 'submitAddObject'
  | 'submitEditObject'
  | 'paymentMethodInDevelopment'

  // ObjectAddCheckinTime
  | 'checkIn'
  | 'checkOut'

  // last page - ObjectAddDocuments
  | 'excellent'
  | 'youAddedObject'
  | 'verificationStarted'
  | 'verifierWillContactYou'
  | 'thisPageWillBeActiveUntilVerification'
  | 'youMayEditObjectDuringVerification'
  | 'addingObjectTook'
  | 'minutesShort'
  | 'separatePageIsCreatedForObject'
  | 'addBookingOption'
  | 'addObjectInfo'

  // links
  | 'youCanRead'
  | 'privacyPolicy'
  | 'and'
  | 'userAgreement'

  // video
  | 'objectVideo'
  | 'objectVideoRequirements'
  | 'addObjectVideo'

  // photo or link to register
  | 'addObjectDocuments'
  | 'objectPhotoOrLinkToRegister'
  | 'pasteLinkHere'

  // photo with legal docs
  | 'addObjectPhoto'
  | 'addObjectSelfieWithDocument'
  | 'addObjectSelfieRequirements'
  | 'addObjectSelfie';

export type ReviewsTranslationKeys = 'reviews' | 'noReviewsYet';

export type RateBookingVariantTranslationKeys =
  | 'rateYourStay'
  | 'staff'
  | 'location'
  | 'cleanliness'
  | 'amenities'
  | 'submitRating';

export type FeedbackBookingVariantTranslationKeys = 'writeYourReview' | 'submitFeedback' | 'addAComment';

export type HeaderTranslationKeys =
  | 'useApp'
  | 'forHoteliers'
  | 'loginOrRegister'
  | 'login'
  | 'exitButton'
  | 'btnUserMessages'
  | 'btnHotelierProposal';

export type MainHotelierTranslationKeys =
  | 'betaIndicator'
  | 'youGetPaidBeforeCheckin'
  | 'ourCommissionIs'
  | 'changeThePriceWhenItSuitsYou'
  | 'payOurCommissionAfterYouHadBeenPaid'
  | 'visibleToUsersSearchingForBookings'
  | 'offerAnIndividualPriceForEveryone'
  | 'registerAnObjectRightNowAndVerifyOnline'
  | 'averageRegistrationDuration'
  | 'registerAnObject'
  | 'onlinePlatform1'
  | 'onlinePlatform2'
  | 'onlinePlatform3'
  | 'youSeeAllUsersWhoAreEligibleForYourFreeBookingOptions'
  | 'makePromotionalOffersIfYouHaveFreeOptions'
  | 'youCanOfferEachUserAnIndividualPriceConfidentially'
  | 'travelersKnowThatTheHotelierPaysAMinimumCommission'
  | 'weDoNotUseThePriceParityPrincipleInCooperationWithHoteliers'

  // CitiesCards
  | 'placeInTheHostel'
  | CountriesCardsTranslationKeys
  | CitiesCardsTranslationKeys
  | 'CEO'
  | 'yourPriceBooking'
  | 'ceoFullName'

  // CEO SPEECH
  | 'helloDearPartners'
  | 'youSimplyAddAnObjectToOurSite'
  | 'descriptionsOfHotelsAreTranslatedByOurTeam'
  | 'the'
  // | 'yourPriceBooking'  reused
  | 'service'
  | 'doesNotAcceptPaymentFromGuests'
  | 'weHaveReducedIndustryStandardFeesByMoreThanX'
  | 'ourCommissionIsXPercent'
  | 'youSeeUsersSuitableForYourBookings'
  | 'makeThemIndividualOffersOrSetAFixedPrice'
  | 'weVerifiedEachHotelOnOurSite'
  | 'objectIsVerifiedDuringItsListing'
  | 'weStoreReviewsAndBookingStatisticsForUsersAndHoteliers'
  | 'ourMissionIsToConnectTravelersWithHoteliers'
  | 'weWorkSoThatYouCanSellYourFreeBookingOptionsOnYourTerms'
  | 'peaceAndGoodness'
  | 'CEOtranslated'
  // | 'yourPriceBooking' reused
  | MainHotelierRentLinksTranslationKeys
  | 'rentOnYourTerms'
  | 'averagePriceForOneBedroomOption'
  | 'averagePriceForWwoBedroomOption'
  | 'averagePriceForBedInAHostel'
  | 'registrationBlockHotelierCatalog'
  | 'registrationBlockHotelierFlat'
  | 'registrationBlockHotelierRoomInHouse'
  | 'registrationBlockHotelierHouse'
  | 'registrationBlockHotelierRoomInFlat'
  | 'registrationBlockHotelierHostel'
  | 'registrationBlockHotelierHotel'
  | 'registrationBlockHotelierHotelRigthNow'
  | 'registrationBlockHotelierMotel'
  | 'registrationBlockHotelierApartment'
  | 'registrationBlockHotelierGuestHouse'
  | 'registrationBlockHotelierCapsulHotel';

export type MainHotelierRentLinksTranslationKeys =
  | 'rentAFlatDaily'
  | 'rentAnApartmentDaily'
  | 'rentAHouseDaily'
  | 'rentAHotelRoomInHotelOfAllTypes'
  | 'rentAHotelRoomDaily'
  | 'rentAPlaceInAHostel'
  | 'rentARoomInAFlatDaily'
  | 'rentARoomInAHouseDaily'
  | 'rentARoomInGuestHouse'
  | 'rentARoomInCapsuleHotel'
  | 'rentAMotelRoom'
  | 'rentOutHousingDaily';

export type UserCatalogBookingOptionsTranslationKeys =
  | 'hotels'
  | 'hostels'
  | 'housesDaily'
  | 'roomsDaily'
  | 'apartmentsDaily'
  | '1roomApartmentsDaily'
  | '2roomApartmentsDaily'
  | '3roomApartmentsDaily'
  | '4roomApartmentsDaily'
  | 'accommodation'
  | 'motels'
  | 'resortHotels'
  | 'guestHouses'
  | 'capsuleHotels'
  | 'apartHotels'
  | 'smallHouseDaily'
  | 'villaDaily'
  | 'chaletDaily'
  | 'allBookingOptions';

export type MainAgentTranslationKeys = 'agent' | 'objectsRegistered' | 'agentsRegistered' | 'available' | 'logout';

export type CountriesCardsTranslationKeys = 'countryUSA' | 'countryPoland' | 'countryUkraine';

export type CitiesCardsTranslationKeys = 'cityNewYork' | 'cityWarsaw' | 'cityKyiv' | 'cityOdesa';

export type UserSettingsLinksTranslationKeys =
  | 'userMyProfile'
  | 'userAccountSettings'
  | 'userMyContacts'
  | 'userBookingKarma'
  | 'userSMSNotificationsSettings'
  | 'userExit';

export type HotelierSettingsLinksTranslationKeys =
  | 'linkHotelierAccountSettings'
  | 'linkHotelierFinances'
  | 'linkHotelierRatingAndFeedbacks'
  | 'linkHotelierSMSNotificationSettings'
  | 'linkHotelierSalesHistory'
  | 'linkHotelierExit';

export type NavLinksTranslationKeys =
  | 'navHeaderCommon'
  | 'navHeaderHoteliers'
  | 'navHeaderAgents'
  | 'navHeaderUsers'
  | 'navLinkPreview'
  | 'navLinkMain'
  | 'navLinkMainHotelier'
  | 'navLinkMainAgent'
  | 'navLinkSupport'
  | 'navLinkCabinetHotelier'
  | 'navLinkCabinetAgent'
  | 'navLinkCabinetUser'
  | 'navLinkLoginHotelier'
  | 'navLinkLoginAgent'
  | 'navLinkLoginUser'
  | 'navLinkRegisterHotelier'
  | 'navLinkRegisterAgent'
  | 'navLinkRegisterUser'
  | 'navLinkHotelierCatalog'
  | 'navLinkUserCatalog'
  | 'navLinkAskUser';

export type FooterLinkTranslationKeys =
  | 'linkTermsUsers'
  | 'linkPrivacyPolicyUsers'
  | 'linkTermsHoteliers'
  | 'linkPrivacyPolicyHoteliers'
  | 'linkTeam'
  | 'linkForAgents'
  | 'linkYPBookingEstonia'
  | 'linkOurMission'
  | 'linkSupportInTelegram'
  | 'linkTravelQBlog'
  | 'linkFacebookKyiv'
  | 'linkFacebookOdesa'
  | 'linkFacebookWarsaw'
  | 'linkFacebookNYC'
  | 'linkInstagramPB'
  | 'linkRedditYPB'
  | 'linkTwitterPB'
  | 'linkLinkedInYPB'
  | 'linkYouTubeAllObjectsYPB'
  | 'linkYouTubeOfficialYPB'
  | 'allRightsReserved';

export type validationKey = 'hotel' | 'hostel' | 'country';
export type authKey =
  | 'enter'
  | 'enterHotelier'
  | 'enterAgent'
  | 'enterConfirmCode'
  | 'register'
  | 'registerHotelier'
  | 'registerAgent'
  | 'enterConfirmCodeTextInfo'
  | 'enterConfirmCodeTextInfo2'
  | 'popupText'
  | 'and'
  | 'termsConditionsUsers'
  | 'privacyPolicyUsers'
  | 'errorConfirmCode'
  | 'errorTimeCode'
  | 'errorLoginEmailUser'
  | 'errorLoginEmailHotelier'
  | 'errorLoginEmailAgent'
  | 'error2RegisterEmail'
  | 'errorRegisterEmailUser'
  | 'errorRegisterEmailHotelier'
  | 'errorRegisterEmailAgent'
  | 'popupLabelCode'
  | 'popupLabelEmailAddress'
  | 'popupLabelName'
  | 'popupLabelSurname'
  | 'popupInfo3CodeTime'
  | 'btnSubmit'
  | 'popupText2'
  | 'popupText3'
  | 'popupTextRegister'
  | 'popupTextEnter';

export type CustomSelectKeys = 'showFirst' | 'new' | 'urgent' | 'send' | 'notSend';

export type TooltipsKeys =
  | 'offersFromHoteliers'
  | 'message'
  | 'newBooking'
  | 'cancelReservation'
  | 'searchForBookingNearby';

// used in i18.ts, to define JSON keys in translation files, do not delete
export const ns = Object.freeze([
  'common',
  'validation',
  'auth',
  'mainHotelier',
  'mainAgent',
  'userCatalog',
  'customSelect',
  'tooltips',
] as const);

// used as type in i18next.d.ts, do not delete
export type TranslationNamespace = typeof ns[number];

// used as type in i18next.d.ts, do not delete
export type TranslationJSON = {
  common: Record<translationKey, string>;
  validation: Record<validationKey, string>;
  auth: Record<authKey, string>;
  mainHotelier: Record<MainHotelierTranslationKeys, string>;
  mainAgent: Record<MainAgentTranslationKeys, string>;
  userCatalog: Record<UserCatalogBookingOptionsTranslationKeys, string>;
  customSelect: Record<CustomSelectKeys, string>;
  tooltips: Record<TooltipsKeys, string>;
};

// const exampleTranslationJSON: TranslationJSON = {
//   common: {
//     chooseObjectLocation: 'aaa',
//     addingObjectAvgDuration: 'bbb'
//   },
//   validation: { hotel: 'jjj', hostel: 'kkk', country: 'lll' },
// };
