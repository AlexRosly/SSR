import type { IHotelsData } from 'components/UserCabinet/InfoComponent/InterfaceHotelsData';

interface IProps {
  id: number;
  array: IHotelsData[];
  setNewArray: (list: IHotelsData[]) => void;
}

export const goProposeToTheEndOgArray = ({ id, array, setNewArray }: IProps) => {
  const IndexOfPropose = array?.findIndex(({ _id }) => _id === id);
  if (IndexOfPropose < 0) return;

  const newList = [...array];

  const deletedP = newList.splice(IndexOfPropose, 1);
  newList.push(...deletedP);

  setNewArray(newList);
};
