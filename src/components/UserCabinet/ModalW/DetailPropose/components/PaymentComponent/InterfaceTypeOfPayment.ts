import { TPayment } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';

export interface IPaymentDataBase {
  id: number;
  type: TPayment;
  src: { alt: string; url: string };
  descr: string;
}
