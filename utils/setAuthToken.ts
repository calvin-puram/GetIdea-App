import api from './api';

const setAuth = (token, user) => {
  if (typeof window !== 'undefined') {
    if (token && user) {
      api.defaults.headers.common['authorization'] = token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      delete api.defaults.headers.common['authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
};
export default setAuth;
