import { useAppSelector } from 'features';
import { selectObjectActiveTabId } from 'features/objects';
import { useState } from 'react';
import { objectTabs } from './ObjectTabs';

const Dot = ({ isActive }: { isActive: boolean }) => (
  <li className={`selecthouse-stages-item ${isActive ? 'active' : ''}`} />
);

export const ObjectTabsDots = () => {
  const activeTabId = useAppSelector(selectObjectActiveTabId);
  const [dots] = useState(objectTabs.ids);

  return (
    <ul className="selecthouse-stages">
      {dots.map(id => (
        <Dot key={id} isActive={id <= activeTabId} />
      ))}
    </ul>
  );
};
