import { format } from 'date-fns';

interface IMessage {
  name: string;
  data: string;
  text: string;
}

interface IProps {
  text: string;
  name: string;
}

export const createMessage = ({ text, name }: IProps): IMessage => ({
  name: name,
  data: format(new Date(), 'HH:mm dd/MM/yyyy'),
  text: text,
});
