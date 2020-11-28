/* export const login = (username, password) => {
  if (username === 'admin') {
    if (password === '123456') {
      return {status: 200, user: {username, fullname: 'My Nguyễnn'}};
    } else {
      return {status: 404, errorString: 'Username or password are not match'};
    }
  }
  return {status: 404, errorString: 'Username is not existed'};
}; */

export const login = (accounts, usernameOrEmail, password) => {
  let account = null;
  for (let i = 0; i < accounts.length; i++) {
    if (
      accounts[i].username === usernameOrEmail ||
      accounts[i].email === usernameOrEmail
    ) {
      account = accounts[i];
    }
  }
  if (account) {
    return account.password === password
      ? {status: 200, message: 'Login successfully', user: account}
      : {status: 404, message: 'Password is not correct'};
  }
  return {status: 404, message: "Username or Email doesn't exist"};
};
