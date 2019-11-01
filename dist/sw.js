importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e4e34d7c1bdb9315f97.js",
    "revision": "ed7d63f89c8708d2560ed6bbef8e5b1a"
  },
  {
    "url": "/_nuxt/0e9815b2d1305b04d62d.css",
    "revision": "95a214a747ebc6de08f2a6fbf4e12475"
  },
  {
    "url": "/_nuxt/1818c21ba053d8489b23.js",
    "revision": "190c7fbb679f8f498c031266ccd95dab"
  },
  {
    "url": "/_nuxt/27cc40b15d758298bbf0.js",
    "revision": "76ac7918610210e286642b7899a14bd2"
  },
  {
    "url": "/_nuxt/2d75b3f3501b463b8073.js",
    "revision": "d38363618fd4066f7677f3c9d966d1eb"
  },
  {
    "url": "/_nuxt/497223a01d02b6607841.js",
    "revision": "ec1827929e41bbd3d27ebc592e67f422"
  },
  {
    "url": "/_nuxt/4bb053b2f110b2507133.css",
    "revision": "6aa18cb568d0fb983ea250f70286de3c"
  },
  {
    "url": "/_nuxt/776d7dbde238e1e1035c.css",
    "revision": "958e6c0aec193af799e59806d9be221d"
  },
  {
    "url": "/_nuxt/8703cf7182f08ab637fb.js",
    "revision": "a57ddf1c3eaa8f71b5a137b412535ad3"
  },
  {
    "url": "/_nuxt/905237b54b474c9b6160.css",
    "revision": "618100f3d1323b1a4c06cb5da371ba11"
  },
  {
    "url": "/_nuxt/a3957d26ff1c6f95a02b.js",
    "revision": "a7cd673acb4ec03e80a24886740c2e0c"
  },
  {
    "url": "/_nuxt/be40de9fe2e7ec240ee1.css",
    "revision": "caa636a8fad54fdab008ac1f2286258f"
  },
  {
    "url": "/_nuxt/dc30d793147c43cc67c9.css",
    "revision": "c377189f92e65f377c5cf7471b3bba44"
  },
  {
    "url": "/_nuxt/fb1b70cc68d3efddf72b.js",
    "revision": "7ba07cfe6327017509bca7146d73f734"
  }
], {
  "cacheId": "nuxt-contentful-starter",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
