// firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp(***REMOVED***
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***.firebaseapp.com",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.firebasestorage.app",
  messagingSenderId: "***REMOVED***",
  appId: "***REMOVED***",
  measurementId: "***REMOVED***",
***REMOVED***);

const messaging = firebase.messaging();

// 백그라운드 메시지 수신 핸들러
self.addEventListener("push", function (event) ***REMOVED***
  console.log("Push event received:", event);

  let data = ***REMOVED*** title: "기본 제목", body: "기본 내용" ***REMOVED***;

  if (!event.data) return;
  if (event.data) ***REMOVED***
    try ***REMOVED***
      data = JSON.parse(event.data.text());
    ***REMOVED*** catch (e) ***REMOVED***
      console.error("Push data JSON parse error:", e);
    ***REMOVED***
  ***REMOVED***

  const options = ***REMOVED***
    title: data.title,
    body: data.body,
    icon: "/default-icon.png",
  ***REMOVED***;

  console.log("Attempting to show notification:", data.title, options);
  event.waitUntil(self.registration.showNotification(data.title, options));
***REMOVED***);

// PWA 캐싱 설정
const CACHE_NAME = "weddy-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html",
  "/styles.css",
  "/default-icon.png",
];

self.addEventListener("install", function (event) ***REMOVED***
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) ***REMOVED***
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    ***REMOVED***)
  );
***REMOVED***);

// 서비스워커 활성화 및 오래된 캐시 삭제
self.addEventListener("activate", function (event) ***REMOVED***
  event.waitUntil(
    caches.keys().then(function (cacheNames) ***REMOVED***
      return Promise.all(
        cacheNames
          .filter(function (cacheName) ***REMOVED***
            return cacheName !== CACHE_NAME;
          ***REMOVED***)
          .map(function (cacheName) ***REMOVED***
            return caches.delete(cacheName);
          ***REMOVED***)
      );
    ***REMOVED***)
  );
***REMOVED***);

// 네트워크 요청 가로채기 및 캐시 제공
self.addEventListener("fetch", function (event) ***REMOVED***
  event.respondWith(
    caches.match(event.request).then(function (response) ***REMOVED***
      // 캐시된 응답이 있으면 반환하고, 없으면 네트워크 요청
      return (
        response ||
        fetch(event.request).catch(() => caches.match("/offline.html"))
      );
    ***REMOVED***)
  );
***REMOVED***);
