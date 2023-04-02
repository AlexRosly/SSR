import type { EntityId } from '@reduxjs/toolkit';
import type { Ids } from 'types';
import { ObjectAddAddress } from '../ObjectAddAddress';
import { ObjectAddCheckinTime } from '../ObjectAddCheckinTime';
import { ObjectAddDescription } from '../ObjectAddDescription';
import { ObjectAddType } from '../ObjectAddType';
import { ObjectAddLocation } from '../ObjectAddLocation';
import { ObjectAddName } from '../ObjectAddName';
import { ObjectAddPayments } from '../ObjectAddPayments';
import { ObjectAddPhotos } from '../ObjectAddPhotos';
import { ObjectAddServices } from '../ObjectAddServices';

type AddObjectTab = { id?: EntityId; Element?: () => JSX.Element };

type AddObjectTabs = {
  ids: Ids;
  entities: Record<EntityId, AddObjectTab>;
};

const addObjectPages: { Element?: () => JSX.Element }[] = [
  { Element: ObjectAddLocation }, // isEdited + useGetHotelQuery ( id )
  { Element: ObjectAddType },
  { Element: ObjectAddName },
  { Element: ObjectAddAddress },
  { Element: ObjectAddDescription },
  { Element: ObjectAddPhotos },
  { Element: ObjectAddCheckinTime },
  { Element: ObjectAddServices },
  { Element: ObjectAddPayments },
];

export const objectTabs = addObjectPages.reduce<AddObjectTabs>(
  ({ ids, entities }, { Element }, i) => ({
    ids: [...ids, i],
    entities: { ...entities, [i]: { id: i, Element } },
  }),
  { ids: [], entities: {} }
);
