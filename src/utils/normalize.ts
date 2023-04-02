import type { EntityId } from '@reduxjs/toolkit';

type Item = Record<EntityId, unknown>;

export const normalize = (array: Item[]) =>
  array.reduce<{ ids: EntityId[]; entities: Item }>(
    ({ ids, entities }, item, i) => ({
      ids: [...ids, `${i}`],
      entities: { ...entities, [`${i}`]: { id: `${i}`, ...item } },
    }),
    { ids: [], entities: {} }
  );
