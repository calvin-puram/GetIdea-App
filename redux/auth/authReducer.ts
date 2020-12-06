import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "./authTypes";

interface IState {
  user: any | undefined;
  token: string | undefined;
}

let localUser;
let token;
if(typeof window !== 'undefined'){
   localUser = localStorage.getItem("user")!;
   token = localStorage.getItem("token")!
}

const initState: IState = {
   //@ts-ignore
  user: JSON.parse(localUser),
  token
};

export const auth = (state = initState, action: any) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
