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

var elsa_domain = 'https://pool.elsanow.io/user/api/v2/purchase';

if (request_url == elsa_domain) {
    $done({headers: modifiedHeaders});    
} else {
    $done({});
}

