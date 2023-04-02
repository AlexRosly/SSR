import type { EntityState } from '@reduxjs/toolkit';

export const makeEntity = <T>(array: T[], selectId?: keyof T) =>
  array.reduce<EntityState<T>>(
    ({ ids, entities }, item, i) => {
      const id = `${selectId ? item[selectId] : i}` as const;

      return {
        ids: [...ids, id],
        entities: { ...entities, [id]: selectId ? item : { id, ...item } },
      };
    },
    { ids: [], entities: {} }
  );
