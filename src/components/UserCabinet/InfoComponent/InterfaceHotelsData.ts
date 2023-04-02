export type TPayment = 'cash' | 'Visa/MasterCard' | 'JCB' | 'UnionPay' | 'AmericanExpress';

export interface IHotelsData {
  _id: number;
  name: string;
  city: string;
  address: string;
  price: number;
  rating: number;
  dateFrom: Date;
  dateTo: Date;
  timeCheckIn: Date;
  timeCheckOut: Date;
  apartmentsSize: number;
  bedOptions: {
    [key: string]: Record<'single' | 'double', number> | Record<'hostel' | 'total' | 'free', number>;
  };
  photos: string[];
  video: string;
  bookingNow: boolean;
}
