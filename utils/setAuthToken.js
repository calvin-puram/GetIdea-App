// import api from './api';

// const setAuth = (token, user) => {
//   if (token && user) {
//     api.defaults.headers.common['authorization'] = token;
//     if (process.browser) {
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));
//     }
//   } else {
//     delete api.defaults.headers.common['authorization'];
//     if (process.browser) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//     }
//   }
// };
// export default setAuth;
