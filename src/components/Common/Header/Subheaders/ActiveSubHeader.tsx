import { useAuthContext } from 'context/AuthContext';

export const SubheaderByUserType = () => {
  const [{ user }] = useAuthContext();

  switch (user?.userType) {
    case 'user':
      return <div>SubheaderForTypeUser</div>;

    case 'hotelier':
      return <div>SubheaderForTypeHotelier</div>;

    case 'agent':
      return <div>SubheaderForTypeAgent</div>;

    default:
      return <div>SubheaderForTypeNobody</div>;
  }
};
