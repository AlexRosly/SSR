import { typeOfBed } from './typeOfBed';
import { MainRoom } from './MainRoom/MainRoom';
import { HostelRoom } from './HostelRoom/HostelRoom';
import { useEffect, useState } from 'react';

// const testOptions = {
//   1: { single: 1, double: 0 },
//   2: { single: 2, double: 0 },
//   3: { single: 3, double: 0 },
//   4: { single: 0, double: 1 },
//   5: { single: 0, double: 2 },
//   6: { single: 0, double: 3 },
//   7: { single: 1, double: 2 },
//   8: { single: 2, double: 1 },
//   9: { single: 1, double: 1 },
//   10: { hostel: true, total: 10, free: 5 },
// };

export const BedOptions = ({ options, styled = {}, user = true }) => {
  const [bed, setBed] = useState([]);

  useEffect(() => {
    const result = Object.values(options).map(option => {
      if (option.hostel === true) {
        const findType = typeOfBed.find(bed => bed.type === 'hostel');
        return { ...findType, descriptionInResponseData: option };
      }

      return typeOfBed.find(
        bed =>
          bed.descriptionInResponseData.single === option.single &&
          bed.descriptionInResponseData.double === option.double
      );
    });

    setBed(result);
  }, [options]);

  return (
    <>
      {bed.map((bed, id) => {
        if (!bed) return null;

        return bed.type === 'hotel' ? (
          <MainRoom bed={bed} key={id} styled={styled} />
        ) : (
          <HostelRoom bed={bed} key={id} styled={styled} user={user} />
        );
      })}
    </>
  );
};
