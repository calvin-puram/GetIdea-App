import {
  GET_IDEAS,
} from "./ideasTypes";

interface IIdeas {
  ideas: any[];
}

const initState: IIdeas = {
  ideas: [],
};

//@ts-ignore
export const ideas = (state = initState, action) => {
  switch (action.type) {
    case GET_IDEAS:
      return {
        ...state,
        ideas: action.payload,
      };
    default:
      return state;
  }
};
