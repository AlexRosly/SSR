import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';
import { LOGIN_AGENT, LOGIN_HOTELIER, LOGIN_USER } from 'navigation/CONSTANTS';

// screen if you're not yet authenticated.
export const PrivateRoute = ({ navigateTo }) => {
  const [{ user }] = useAuthContext();
  const from = useLocation();
  return user ? <Outlet /> : <Navigate to={navigateTo} replace state={{ from }} />;
};

export const PrivateRouteHotelier = () => {
  const [{ isHotelier }] = useAuthContext();
  const from = useLocation();
  return isHotelier ? <Outlet /> : <Navigate to={LOGIN_HOTELIER} replace state={{ from }} />;
};

export const PrivateRouteAgent = () => {
  const [{ isAgent }] = useAuthContext();
  const from = useLocation();
  return isAgent ? <Outlet /> : <Navigate to={LOGIN_AGENT} replace state={{ from }} />;
};

export const PrivateRouteUser = () => {
  const [{ isUser }] = useAuthContext();
  const from = useLocation();
  return isUser ? <Outlet /> : <Navigate to={LOGIN_USER} replace state={{ from }} />;
};

/**
 * Below code can be organized in separate files as desired.
 * I am keeping everything related to the authentication and PrivateRoute in this one file.
 */
/*
const authContext = createContext();
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

// Most important hook to be used throughout
export function useAuth() {
  return useContext(authContext);
}
*/

/*
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // signin method: It can either return a promise or execute a callback function.
  // You can prefer to keep this in userServices.js
  const signin = () => {
    console.log("SS:: PrivateRoute > useProviderAuth > signin() called...");
    return new Promise((resolve, reject) => {
      try {
        // do db call or API endpoint axios call here and return the promise.
        let apiResponse = {
          "id": "30",
          "firstName": "Joel",
          "lastName": "Joseph",
          "gender": "Male",
          "age": 33,
          "isActiveEmployee": true,
          "location": "London"
        };
        setUser(apiResponse);
        setTimeout(()=>resolve(apiResponse), 3000);
        // resolve(apiResponse);
      } catch (error) {
        console.error("signin error!==", error);
        reject("signin error!");
      }
    });
  };
  const signout = () => {
    return new Promise((resolve, reject) => {
      try {
        // do API endpoint axios call here and return the promise.
        setUser(null);
        resolve(true);
      } catch (error) {
        console.error("signout error!==", error);
        reject("signout error!");
      }
    });
  };

  // Firebase auth example code (ref: https://usehooks.com/useAuth/)
  // const signin = (email, password) => {
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(response => {
  //       setUser(response.user);
  //       return response.user;
  //     });
  // };
  // const signout = () => {
  //   return firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setUser(false);
  //     });
  // };

  return {
    user,
    signin,
    signout
  };
}
*/
