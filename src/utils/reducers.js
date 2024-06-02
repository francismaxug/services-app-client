//  auth reducer here
export function authReducer(state, action) {
  switch (action.type) {
    // case "auth/request":
    //   return { isLoading: true };
    case "auth/login":
      return { ...state, isLoading: false, user: action.payload };
    case "auth/logout":
      return { ...state, user: null };
    // case "auth/error":
    //   return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default function userDetailsReducer(state, action) {
  switch (action.type) {
    case "onDetailsRequest":
      return { isLoading: true };
    case "onDetailsSuccess":
      return { ...state, isLoading: false, info: action.payload };
    case "onDetailsFailure":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}



