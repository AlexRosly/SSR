import { useAppSelector } from 'features';
import { useGetHotelQuery } from 'features/hotels';
import { selectActiveObjectId } from 'features/objects';

export const ObjectEditLocation = () => {
  const activeObjectId = useAppSelector(selectActiveObjectId);

  // [x] 1. if createObjectId does not exist in redux -> show AddObjectForm
  // [x] 2. Search Locations
  // [x] 3. Show result for locations from endpoint.
  // [ ] 4. if createObjectId exists in redux -> populate EditObjectForm defaults from endpoint
  // [ ] 5. if edited data is different from dataFomEndpoint -> send request to backend to update existing object by Id.

  const { createdObjectLocationId } = useGetHotelQuery(activeObjectId, {
    selectFromResult: ({ data }) => ({
      createdObjectLocationId: data?.entities?.[activeObjectId]?.location._id,
    }),
    skip: !activeObjectId,
  });

  return <div>createdObjectLocationId: {createdObjectLocationId}</div>;
};
