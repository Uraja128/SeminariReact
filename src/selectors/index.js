export const getAuthFS = (state) => state.auth;
export const getLoginFS = (state) => getAuthFS(state).login;
export const getPrivacyFS = (state) => getAuthFS(state).privacy;
export const getLoginEmailFS = (state) => getLoginFS(state).email;
export const getLoginPasswordFS = (state) => getLoginFS(state).password;
export const getUserFS = (state) => getAuthFS(state).user;
