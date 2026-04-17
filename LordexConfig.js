// https-lock.js
console.log('AimHead');

let headers = $request.headers;
let body = $request.body;

headers['DNT'] = '1';
headers['FF-X-SPEED'] = '1';
headers['FF-LOCK-HEAD'] = '1';

body['AimAssist'] = 'bone_Head';
body['LockTarget'] = '0.95'

$done({headers,body});