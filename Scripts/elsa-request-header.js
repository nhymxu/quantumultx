/**
 * [rewrite_local]
 * ^https:\/\/pool\.elsanow\.io\/.*$ url script-request-header elsa-header.js
 */

var modifiedHeaders = $request.headers;
var originPath = $request.path;
var request_url = $request.url;

if ("x-session-token" in modifiedHeaders) { 
    modifiedHeaders["x-session-token"]= "F3S0w0bysBQFdbjtxpFurhTPE0sAQOtSV6oEt3Kr5WTGiqsyUXra1kNyjrLnaj4jPLali19fXLSKbPavRs5onAKBKvTY+rjDk2XXBMSPmiWXlH10PjKOkJvyB9bi6QUg/fwq3EXaqrSJcnYl7vHs/ilGLd0pIrK6YK9XeF2gic4+f23f++HTxP1kX0yhs8f1x6+3U73IURxch2/pghHPCA==";
}

var elsa_domain = 'https://pool.elsanow.io';

var exclude_endpoints = [
    '/user/api/v1/picture', // anh dai dien
    '/user/api/v2/account/achievement', // thanh tich
    '/user/api/v1/statistics/days', // chua biet
    '/user/api/v1/account', // thong tin co ban cua tai khoan
    '/user/api/v2/account/progress', // tien do 7 ngay/12 thang
    '/user/api/v2/account/state', // thong tin tien do chi tiet tung khoa hoc
    '/user/api/v2/lesson/results', // update ket qua
    '/user/api/v2/assessment/results',
    '/user/api/v2/account/firebase_token',
];

var skip_modify = false;

for (var key = 0; key < exclude_endpoints.length; key++) {
    var value = exclude_endpoints[key];
    if (request_url.endsWith(value)) {
        skip_modify = true;
	break;
    }
}

var exclude_urls = [
    '/user/api/v1/bucket',
    '/user/api/v1/exercise/summary',
    '/clubs-server/',
    '/recommendation/recommend',
];
if (!skip_modify) {
    for (var key = 0; key < exclude_urls.length; key++) {
        var value = exclude_urls[key];
	if (request_url.startsWith(elsa_domain + value)) {
	    skip_modify = true;
	    break;
	}
    }
}

if (skip_modify) {
    $done({});
} else {
    $done({headers: modifiedHeaders});
}

