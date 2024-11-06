export const checkValidData = (username, password) => {
  const isusernameValid = /^[a-z]+$/.test(username);
  const isPasswordValid = /^[a-z]+$/.test(password);

  if (!isusernameValid) return "Enter valid username";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};
