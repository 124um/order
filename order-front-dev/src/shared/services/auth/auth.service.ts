// import Cookies from 'js-cookie';

export const COOKIE_AUTH_TOKEN = 'jwtToken';
export const COOKIE_IS_AUTH = 'isAuth';

const authService = {
  signIn: (token: string) => {
    localStorage.setItem(COOKIE_AUTH_TOKEN, token);
    localStorage.setItem(COOKIE_IS_AUTH, 'true');
  },

  logOut: () => {
    localStorage.removeItem(COOKIE_AUTH_TOKEN);
    localStorage.removeItem(COOKIE_IS_AUTH);
  },

  isAuth: () => {
    const isAuth = localStorage.getItem(COOKIE_IS_AUTH) as string;
    return isAuth && isAuth === 'true';
  },

  getAuthToken: () => {
    const token = localStorage.getItem(COOKIE_AUTH_TOKEN) as string;
    return token ?? '';
  },
};

export default authService;
