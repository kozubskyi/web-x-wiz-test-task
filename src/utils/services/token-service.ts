import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const tokenService = {
  generateToken: (id: string, name: string | undefined): string => {
    return jwt.sign({ id, name }, process.env.JWT_SECRET!, {
      expiresIn: '12h',
    });
  },

  setToken: (token: string) => {
    const expires = Date.now() + 12 * 60 * 60 * 1000; // 12 hours
    Cookies.set('token', token, { expires });
  },

  getToken: () => Cookies.get('token'),

  clearToken: () => Cookies.remove('token'),
};
