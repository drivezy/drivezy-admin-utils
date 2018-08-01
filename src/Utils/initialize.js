import { IsObjectHaveKeys } from 'drivezy-js-utility';
import { Setter } from './getter.utils';

/**
 * drivezy-admin-utils expects couple of apis and constants for its methods
 * for e.g. http methods need end point prefix constant, default header, Loader and notification apis
 * 
 * Below are the list of Dependency that this package expects to receive at the time of initialization
 * 
 * GLOBAL  - Object containing constants 
 * 
 * Sample
 * module.exports = {
    API_HOST: 'https://api.justride.in/api/admin/',
    RECORD_URL: 'https://api.justride.in/api/record/',
    DATE_TIME_FORMAT: 'YYYY-MM-DD HH:mm',
    API_DATE_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
    DISPLAY_DATE_TIME_FORMAT: 'DD MMM YYYY, HH:mm',
    DATE_FORMAT: 'YYYY-MM-DD'
}
 */
export function InitializeCommonJs(payload) {
    if (!IsObjectHaveKeys(payload)) {
        return;
    }

    for (let key in payload) {
        Setter(key, payload[key]);
    }
}