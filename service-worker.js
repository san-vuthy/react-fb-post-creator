"use strict";var precacheConfig=[["/react-fb-post-creator/index.html","864242e5237df05a9b528830d244429f"],["/react-fb-post-creator/static/css/main.77ce0e67.css","24f8c631b62bcf4bd54ea52e55b50992"],["/react-fb-post-creator/static/js/main.522bf5ec.js","f19dbb398205d8bcf37f3f28019e7c8d"],["/react-fb-post-creator/static/media/angred.0b7a139e.PNG","0b7a139e282a4d9cfc13238921ad3c70"],["/react-fb-post-creator/static/media/comment-btn.1a32bfa1.PNG","1a32bfa17c096b7f04dedf8b4f037fa2"],["/react-fb-post-creator/static/media/hahaed.8ac9c01e.PNG","8ac9c01ea777dc2f37fcc01b176ca2c2"],["/react-fb-post-creator/static/media/like-btn.c3fb8884.PNG","c3fb888445ddec7e0609a436378d35f3"],["/react-fb-post-creator/static/media/liked.a52fa73f.PNG","a52fa73fc13846f0e54ee22547b35974"],["/react-fb-post-creator/static/media/loved.bdbc3dfc.PNG","bdbc3dfc663c117c02d716f10c711bf3"],["/react-fb-post-creator/static/media/privacy-friends.671c48f9.PNG","671c48f91c090eac1f6d359d66a1d5c8"],["/react-fb-post-creator/static/media/privacy-public.54778f62.PNG","54778f625486ef4832da050a0b4f5d76"],["/react-fb-post-creator/static/media/saded.cf4195a9.PNG","cf4195a9c7a1c1712b209dbb514dd450"],["/react-fb-post-creator/static/media/share-btn.9cc4b1a7.PNG","9cc4b1a73b0977f77af3f65ec9d719d7"],["/react-fb-post-creator/static/media/wowed.71de4c77.PNG","71de4c77e40980f25cf4640336fb1885"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var c="/react-fb-post-creator/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});