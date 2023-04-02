import { BedOptions } from 'components/UserCabinet/BedOptions/BedOptions.jsx';

const testRoom = { 1: { single: 1, double: 0 }, 2: { single: 0, double: 1 }, 3: { hostel: true, total: 25, free: 7 } };

export const IconRoomComponent = ({ room = testRoom, user = true }) => {
  return (
    <>
      <BedOptions options={room} user={user} />
    </>
  );
};
