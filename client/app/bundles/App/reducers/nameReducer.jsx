import { APP_NAME_UPDATE } from '../constants/appConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case APP_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

export default name;
