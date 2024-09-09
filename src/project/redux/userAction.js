export const setUser = (user) => {
    return {
      type: 'setUser',
      payload: user
    };
  };
  
  export const clearUser = () => {
    return {
      type: 'clearUser'
    };
  };
  
  export const getUser = () => {
    return {
      type: 'getUser'
    };
  };
  
  export const getUserName = () => {
    return {
      type: 'getUserName'
    };
  };
  
  export const isUserExist = () => {
    return {
      type: 'isUserExist'
    };
  };
  