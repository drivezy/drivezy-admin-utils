import { Get, Getter } from 'drivezy-js-utility';

import Mapper from './../Constants/mapper.constants';

/**
 * Fetches Menu detail to render generic page
 * @param  {id} menuId
 * @param  {function} callback
 */
export function GetMenuDetail(menuId, callback) {
    const url = GetMenuDetailEndPoint + menuId;
    const GLOBAL = Getter(Mapper.GLOBAL);
    return Get({ url, callback, persist: callback ? true : false, urlPrefix: GLOBAL.RECORD_URL });
}