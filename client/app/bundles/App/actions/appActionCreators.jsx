/* eslint-disable import/prefer-default-export */

import { APP_NAME_UPDATE } from '../constants/appConstants';

export const updateName = (text) => ({
  type: APP_NAME_UPDATE,
  text,
});
