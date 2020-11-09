export const login = (username, password) => {
  if (username === 'admin') {
    if (password === '123456') {
      return {status: 200, user: {username, fullname: 'My Nguyễnn'}};
    } else {
      return {status: 404, errorString: 'Username or password are not match'};
    }
  }
  return {status: 404, errorString: 'Username is not existed'};
};
