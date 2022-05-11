import defineAction from './utils';

export const LOGIN_USER = defineAction('LOGIN_USER', [
    'INIT',
    'SUCCESS',
    'ERROR',
]);
export const LOGOUT_USER = defineAction('LOGOUT_USER', ['SUCCESS']);