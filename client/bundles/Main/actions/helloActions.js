/* eslint-disable import/prefer-default-export */

import { HELLO_NAME_UPDATE } from '../constants/helloConstants';

export const updateName = (text) => ({
  type: HELLO_NAME_UPDATE,
  text,
});
