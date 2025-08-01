import { createContext, useEffect, useReducer, ReactElement } from 'react';

// third-party
import { Auth0Client } from '@auth0/auth0-spa-js';

// reducer - state management
import { LOGIN, LOGOUT } from 'contexts/auth-reducer/actions';
import authReducer from 'contexts/auth-reducer/auth';

// project-imports
import Loader from 'components/Loader';
import { redirectWithBasePath } from 'utils/axios';

// types
import { Auth0ContextType, AuthProps } from 'types/auth';
import { KeyedObject } from 'types/root';

// constant
let auth0Client: Auth0Client;

const initialState: AuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// ==============================|| AUTH0 CONTEXT & PROVIDER ||============================== //

const Auth0Context = createContext<Auth0ContextType | null>(null);

export const Auth0Provider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        auth0Client = new Auth0Client({
          clientId: import.meta.env.VITE_APP_AUTH0_CLIENT_ID as string,
          domain: import.meta.env.VITE_APP_AUTH0_DOMAIN as string,
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        });

        await auth0Client.checkSession();
        const isLoggedIn = await auth0Client.isAuthenticated();

        if (isLoggedIn) {
          const user = await auth0Client.getUser();

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user: {
                id: user?.sub,
                email: user?.email
              }
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch {
        dispatch({ type: LOGOUT });
      }
    };

    init();
  }, []);

  const login = async (options?: KeyedObject) => {
    await auth0Client.loginWithPopup(options);
    const isLoggedIn = await auth0Client.isAuthenticated();

    if (isLoggedIn) {
      const user = await auth0Client.getUser();
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          user: {
            id: user?.sub,
            avatar: user?.picture,
            email: user?.email,
            name: user?.name,
            tier: 'Premium'
          }
        }
      });
    }
  };

  const logout = () => {
    auth0Client.logout({
      async onRedirect() {
        redirectWithBasePath('/login');
      }
    });

    dispatch({
      type: LOGOUT
    });
  };

  const resetPassword = async (email: string) => {
    console.log('email - ', email);
  };

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <Auth0Context value={{ ...state, login, logout, resetPassword, updateProfile }}>{children}</Auth0Context>;
};

export default Auth0Context;
