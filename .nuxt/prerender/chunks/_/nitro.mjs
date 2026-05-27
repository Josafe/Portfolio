import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, getResponseStatus, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getRouterParam, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/h3/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, joinRelativeURL, parsePath, withLeadingSlash, withoutTrailingSlash, decodePath } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ufo/dist/index.mjs';
import destr from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/node-mock-http/dist/index.mjs';
import { klona } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/klona/dist/index.mjs';
import defu, { defuFn, createDefu } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/scule/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/radix3/dist/index.mjs';
import { createRouterMatcher } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/vue-router/vue-router.node.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47C_58_47Users_47josaf_47Desktop_47Projectes_47Portfolio_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js from 'file:///C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import unstorage_47drivers_47fs_45lite from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/pathe/dist/index.mjs';
import { digest } from 'file://C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/ohash/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/josaf/Desktop/Projectes/Portfolio/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

storage$1.mount('internal:nuxt:prerender', file_58_47_47_47C_58_47Users_47josaf_47Desktop_47Projectes_47Portfolio_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js({"driver":"file:///C:/Users/josaf/Desktop/Projectes/Portfolio/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js","base":"C:/Users/josaf/Desktop/Projectes/Portfolio/.nuxt/cache/nitro/prerender"}));
storage$1.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/josaf/Desktop/Projectes/Portfolio","watchOptions":{"ignored":[null]}}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/josaf/Desktop/Projectes/Portfolio/server","watchOptions":{"ignored":[null]}}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/josaf/Desktop/Projectes/Portfolio/.nuxt"}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/josaf/Desktop/Projectes/Portfolio/.nuxt/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "033ee793-4455-4309-9c91-ecf718b3be4d",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "siteUrl": "https://josafe.com",
    "githubUser": "Josafe",
    "i18n": {
      "baseUrl": "",
      "defaultLocale": "ca",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "ca",
          "iso": "ca-ES",
          "name": "Català",
          "language": ""
        },
        {
          "code": "es",
          "iso": "es-ES",
          "name": "Español",
          "language": ""
        },
        {
          "code": "en",
          "iso": "en-US",
          "name": "English",
          "language": ""
        }
      ],
      "detectBrowserLanguage": false,
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10,
        "compactRoutes": false,
        "prerenderMessages": false
      },
      "domainLocales": {
        "ca": {
          "domain": ""
        },
        "es": {
          "domain": ""
        },
        "en": {
          "domain": ""
        }
      }
    }
  },
  "githubToken": ""
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
	
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		
		return;
	}
	
	const defaultRes = await defaultHandler(error, event, { json: true });
	
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	
	const reqHeaders = getRequestHeaders(event);
	
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"] || !!event.context.nuxt?.["~rendering-error"];
	if (!isRenderingError) {
		event.context.nuxt ||= {};
		event.context.nuxt["~rendering-error"] = true;
	}
	
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	
	if (!res) {
		const { template } = await import('./error-500.mjs');
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

/*!
  * shared v11.4.4
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            // if src[key] is an object/array, set des[key]
            // to empty object/array to prevent setting by reference
            if (isObject(src[key]) && !isObject(des[key])) {
                des[key] = Array.isArray(src[key]) ? [] : create();
            }
            if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not an object, or
                // src[key] or des[key] is an array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both objects, merge them
                stack.push({ src: src[key], des: des[key] });
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message);
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

var nav$2 = {
	home: "Home",
	about: "About",
	projects: "Projects",
	curriculum: "Curriculum",
	future: "Future"
};
var language$2 = {
	label: "Idioma",
	ca: "Català",
	es: "Español",
	en: "English"
};
var meta$2 = {
	index: {
		title: "Josafe.com · Portfolio Full Stack & AI Systems",
		description: "Landing page premium de Josafe amb projectes Full Stack, AI Systems i arquitectura de software moderna.",
		ogTitle: "Josafe.com · Portfolio Full Stack & AI Systems",
		ogDescription: "Portfolio modern de Josafe: experiències digitals premium, sistemes intel·ligents i arquitectura de software escalable."
	},
	about: {
		title: "About Me · Josafe.com",
		description: "Presentació professional de Josafe: Desenvolupador Full Stack i AI Systems Engineer especialitzat en solucions escalables i intel·ligència artificial."
	},
	projects: {
		title: "Projects · Josafe.com",
		description: "Projectes desplegats i repositoris GitHub de Josafe: desenvolupament web, sistemes AI i multi-agent."
	},
	future: {
		title: "Future Projects · Josafe.com",
		description: "Idees i roadmap professional de Josafe: SaaS, automatitzacions IA i sistemes multiagent avançats."
	},
	curriculum: {
		title: "Curriculum Vitae · Josafe.com",
		description: "Versions especialitzades del currículum de Josafe per rols professionals i descarregables en PDF."
	}
};
var index$2 = {
	hero: {
		badge: "Premium engineering portfolio",
		heading: "Building modern Full Stack experiences and AI Systems for product-led digital products.",
		paragraph: "Crafting scalable platforms, intelligent automation and elegant interfaces with a premium technical approach focused on product excellence.",
		projects: "View Projects",
		about: "About Me",
		stats: {
			projects: "Projects",
			ai: "Architect",
			fullStack: "Apps",
			cloud: "DevOps"
		},
		platformsLabel: "Platforms",
		platformsText: "Scalable web experiences for product-led growth.",
		systemsLabel: "Systems",
		systemsText: "Multi-agent automation, monitoring and cloud-native deployment.",
		featuredStackLabel: "Featured stack",
		featuredStackText: "Vue · Nuxt · TypeScript · Docker",
		liveConceptLabel: "Live concept",
		liveConceptText: "Modern landing page design with subtle motion.",
		visualTitle: "AI Systems Architect",
		visualDescription: "Designing premium product experiences with intelligent infrastructure and elegant interfaces."
	},
	connect: {
		label: "Connect & collaborate",
		title: "Connect with the core systems that shape premium digital products."
	},
	tech: {
		title: "Engineering Stack",
		subtitle: "Modern architecture across every layer."
	},
	navigation: {
		about: {
			title: "About Me",
			description: "Discover my story, values and how I build digital products.",
			href: "/about"
		},
		projects: {
			title: "Projects",
			description: "Explore purpose-driven builds, SaaS and AI systems in production.",
			href: "/projects"
		},
		curriculum: {
			title: "Curriculum",
			description: "Get the CV details, skills matrix and downloadable resume.",
			href: "/curriculum"
		},
		future: {
			title: "Future Projects",
			description: "See the roadmap, new product ideas and next-generation systems.",
			href: "/future-projects"
		}
	}
};
var about$2 = {
	hero: {
		label: "Sobre Mi",
		heading: "Desenvolupador Full Stack i AI Systems Engineer",
		text: "Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent."
	},
	specializations: {
		title: "Especialitzacions",
		fullStack: {
			title: "Full Stack Development",
			description: "Laravel, Vue.js, Node.js, bases de dades relacionals i NoSQL"
		},
		ai: {
			title: "AI Systems & Multi-Agent",
			description: "Sistemes d'intel·ligència artificial, agents multiagent, automatització"
		},
		architecture: {
			title: "Arquitectura Escalable",
			description: "Disseny de sistemes escalables, microserveis, integracions cloud"
		}
	},
	interests: {
		title: "Interessos Professionals",
		impact: {
			title: "Projectes d'Impacte",
			description: "Aplicacions web modernes, SaaS, productes digitals escalables"
		},
		innovation: {
			title: "Innovació AI",
			description: "Sistemes intel·ligents, automatitzacions, agents conversacionals"
		},
		collaboration: {
			title: "Col·laboracions Tècniques",
			description: "Equips multidisciplinars, consultoria, mentorització"
		}
	},
	philosophy: {
		title: "Filosofia de Treball",
		text: "Crec en el poder de la tecnologia per transformar negocis i millorar vides. El meu enfocament combina enginyeria de software sòlida amb innovació en IA, sempre prioritzant la qualitat del codi, l'experiència d'usuari i l'impacte real. Treballo amb metodologies àgils, enfocades en resultats mesurables i solucions sostenibles a llarg termini."
	},
	contact: {
		title: "Contacte",
		text: "Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques.",
		email: "josafesf2\\@gmail.com"
	}
};
var projects$2 = {
	title: "Projectes",
	description: "Una col·lecció de projectes desplegats i repositoris tècnics que mostren el meu treball en desenvolupament web i sistemes d'IA.",
	tabs: {
		deployed: "Projectes Desplegats",
		github: "Repositoris GitHub"
	},
	filter: {
		all: "Tots"
	},
	empty: "No s'han trobat projectes amb aquest filtre."
};
var future$2 = {
	header: {
		title: "Projectes Futurs",
		description: "Una visió del meu roadmap professional: idees innovadores, productes escalables i tecnologies emergents."
	},
	saas: {
		title: "Idees SaaS",
		item1: {
			title: "Plataforma d'Automatització per Pimes",
			description: "SaaS que combina IA i automatització per ajudar petites empreses a optimitzar processos interns.",
			tags: [
				"Vue.js",
				"Laravel",
				"AI Integration"
			]
		},
		item2: {
			title: "Marketplace de Serveis Digitals",
			description: "Plataforma que connecta professionals digitals amb empreses que necessiten serveis especialitzats.",
			tags: [
				"Next.js",
				"Stripe",
				"Real-time"
			]
		}
	},
	automation: {
		title: "Automatitzacions IA",
		item1: {
			title: "Agent de Gestió de Continguts",
			description: "Sistema multiagent que genera, optimitza i distribueix contingut per a xarxes socials i blogs.",
			tags: [
				"Python",
				"LLMs",
				"Multi-Agent"
			]
		},
		item2: {
			title: "Sistema d'Anàlisi Predictiva",
			description: "IA que analitza dades empresarials per proporcionar insights predictius i recomanacions accionables.",
			tags: [
				"Machine Learning",
				"Data Science",
				"APIs"
			]
		}
	},
	multiAgent: {
		title: "Sistemes Multiagent Avançats",
		item1: {
			title: "Framework de Coordinació d'Agents",
			description: "Framework obert per desenvolupar i coordinar sistemes d'agents IA en entorns complexos.",
			tags: [
				"Python",
				"Distributed Systems",
				"Open Source"
			]
		},
		item2: {
			title: "Agent d'Optimització Empresarial",
			description: "Agent intel·ligent que optimitza processos empresarials mitjançant aprenentatge continu i adaptació.",
			tags: [
				"Reinforcement Learning",
				"Business Intelligence",
				"APIs"
			]
		}
	},
	research: {
		title: "Projectes d'Investigació",
		item1: {
			title: "IA per a Sostenibilitat",
			description: "Recerca en aplicacions d'IA per a la transició energètica i sostenibilitat ambiental.",
			tags: [
				"Research",
				"Sustainability",
				"IoT"
			]
		},
		item2: {
			title: "Interfícies Humà-Agent",
			description: "Disseny d'interfícies intuïtives per a la interacció amb sistemes d'agents complexos.",
			tags: [
				"UX Research",
				"HCI",
				"Frontend"
			]
		}
	},
	cta: {
		title: "Interessat en Col·laborar?",
		description: "Si alguna d'aquestes idees t'interessa o tens un projecte similar en ment, m'encantaria parlar-ne.",
		cta: "Contacta'm"
	}
};
var curriculum$2 = {
	header: {
		title: "Curriculum Vitae",
		description: "Versions especialitzades del meu currículum per diferents rols professionals."
	},
	additional: {
		title: "Informació Addicional",
		line1: "Els currículums inclouen experiència professional detallada, projectes destacats, tecnologies dominades i certificacions rellevants.",
		line2: "Disponible per a versions personalitzades segons requisits específics de posició o empresa."
	},
	cards: {
		fullstack: {
			title: "Full Stack Developer",
			subtitle: "Frontend + Backend + APIs + arquitectura moderna",
			description: "Disseny i desenvolupament d’aplicacions web completes, arquitectures escalables i fluxos de treball optimitzats per productes digitals moderns."
		},
		"ai-systems": {
			title: "AI Systems Engineer",
			subtitle: "LLMs, Multi-Agent Systems i automatització IA",
			description: "Creació de sistemes d’intel·ligència artificial orientats a producte amb agents col·laboratius, automatització intel·ligent i fluxos de dades avançats."
		},
		"database-admin": {
			title: "Database Administrator",
			subtitle: "SQL, PostgreSQL, MySQL i optimització de dades",
			description: "Administració de bases de dades robusta, optimització de rendiment i models de dades fiables per aplicacions empresarials i serveis en producció."
		},
		"systems-admin": {
			title: "Systems Administrator",
			subtitle: "Linux, Docker, networking i infraestructura",
			description: "Infraestructura senzilla i segura, deploys automatitzats i manteniment de sistemes amb enfoc en disponibilitat, escalabilitat i fiabilitat."
		},
		"it-technician": {
			title: "IT Technician",
			subtitle: "Suport tècnic, hardware, software i manteniment",
			description: "Gestió d’equips, resolució d’incidències i monitoratge proactiu per mantenir operatives les infraestructures i l’experiència dels usuaris."
		}
	},
	card: {
		label: "Currículum",
		viewPdf: "Veure CV",
		downloadPdf: "Descarregar PDF",
		alt: "Preview del CV"
	}
};
var projectCard$2 = {
	featured: "Featured",
	github: "GitHub",
	live: "Live"
};
var sections$2 = {
	about: {
		title: "About me",
		description: "Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent."
	},
	projects: {
		title: "Projectes",
		subtitle: "Importació automàtica de GitHub + projectes manuals en JSON"
	},
	contact: {
		title: "Contacte",
		description: "Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques."
	}
};
const locale_ca_46json_40ab4272 = {
	nav: nav$2,
	language: language$2,
	meta: meta$2,
	index: index$2,
	about: about$2,
	projects: projects$2,
	future: future$2,
	curriculum: curriculum$2,
	projectCard: projectCard$2,
	sections: sections$2
};

var nav$1 = {
	home: "Home",
	about: "About",
	projects: "Projects",
	curriculum: "Curriculum",
	future: "Future"
};
var language$1 = {
	label: "Idioma",
	ca: "Català",
	es: "Español",
	en: "English"
};
var meta$1 = {
	index: {
		title: "Josafe.com · Portfolio Full Stack & AI Systems",
		description: "Landing page premium de Josafe con proyectos Full Stack, AI Systems y arquitectura de software moderna.",
		ogTitle: "Josafe.com · Portfolio Full Stack & AI Systems",
		ogDescription: "Portfolio moderno de Josafe: experiencias digitales premium, sistemas inteligentes y arquitectura de software escalable."
	},
	about: {
		title: "About Me · Josafe.com",
		description: "Presentación profesional de Josafe: Desarrollador Full Stack y AI Systems Engineer especializado en soluciones escalables e inteligencia artificial."
	},
	projects: {
		title: "Projects · Josafe.com",
		description: "Proyectos desplegados y repositorios GitHub de Josafe: desarrollo web, sistemas AI y multi-agent."
	},
	future: {
		title: "Future Projects · Josafe.com",
		description: "Ideas y roadmap profesional de Josafe: SaaS, automatizaciones IA y sistemas multiagent avanzados."
	},
	curriculum: {
		title: "Curriculum Vitae · Josafe.com",
		description: "Versiones especializadas del currículum de Josafe para roles profesionales y descargables en PDF."
	}
};
var index$1 = {
	hero: {
		badge: "Premium engineering portfolio",
		heading: "Building modern Full Stack experiences and AI Systems for product-led digital products.",
		paragraph: "Crafting scalable platforms, intelligent automation and elegant interfaces with a premium technical approach focused on product excellence.",
		projects: "View Projects",
		about: "About Me",
		stats: {
			projects: "Projects",
			ai: "Architect",
			fullStack: "Apps",
			cloud: "DevOps"
		},
		platformsLabel: "Platforms",
		platformsText: "Scalable web experiences for product-led growth.",
		systemsLabel: "Systems",
		systemsText: "Multi-agent automation, monitoring and cloud-native deployment.",
		featuredStackLabel: "Featured stack",
		featuredStackText: "Vue · Nuxt · TypeScript · Docker",
		liveConceptLabel: "Live concept",
		liveConceptText: "Modern landing page design with subtle motion.",
		visualTitle: "AI Systems Architect",
		visualDescription: "Designing premium product experiences with intelligent infrastructure and elegant interfaces."
	},
	connect: {
		label: "Connect & collaborate",
		title: "Connect with the core systems that shape premium digital products."
	},
	tech: {
		title: "Engineering Stack",
		subtitle: "Modern architecture across every layer."
	},
	navigation: {
		about: {
			title: "About Me",
			description: "Discover my story, values and how I build digital products.",
			href: "/about"
		},
		projects: {
			title: "Projects",
			description: "Explore purpose-driven builds, SaaS and AI systems in production.",
			href: "/projects"
		},
		curriculum: {
			title: "Curriculum",
			description: "Get the CV details, skills matrix and downloadable resume.",
			href: "/curriculum"
		},
		future: {
			title: "Future Projects",
			description: "See the roadmap, new product ideas and next-generation systems.",
			href: "/future-projects"
		}
	}
};
var about$1 = {
	hero: {
		label: "Sobre Mi",
		heading: "Desenvolupador Full Stack i AI Systems Engineer",
		text: "Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent."
	},
	specializations: {
		title: "Especialitzacions",
		fullStack: {
			title: "Full Stack Development",
			description: "Laravel, Vue.js, Node.js, bases de dades relacionals i NoSQL"
		},
		ai: {
			title: "AI Systems & Multi-Agent",
			description: "Sistemes d'intel·ligència artificial, agents multiagent, automatització"
		},
		architecture: {
			title: "Arquitectura Escalable",
			description: "Disseny de sistemes escalables, microserveis, integracions cloud"
		}
	},
	interests: {
		title: "Interessos Professionals",
		impact: {
			title: "Projectes d'Impacte",
			description: "Aplicacions web modernes, SaaS, productes digitals escalables"
		},
		innovation: {
			title: "Innovació AI",
			description: "Sistemes intel·ligents, automatitzacions, agents conversacionals"
		},
		collaboration: {
			title: "Col·laboracions Tècniques",
			description: "Equips multidisciplinars, consultoria, mentorització"
		}
	},
	philosophy: {
		title: "Filosofia de Treball",
		text: "Crec en el poder de la tecnologia per transformar negocis i millorar vides. El meu enfocament combina enginyeria de software sòlida amb innovació en IA, sempre prioritzant la qualitat del codi, l'experiència d'usuari i l'impacte real. Treballo amb metodologies àgils, enfocades en resultats mesurables i solucions sostenibles a llarg termini."
	},
	contact: {
		title: "Contacte",
		text: "Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques.",
		email: "josafesf2\\@gmail.com"
	}
};
var projects$1 = {
	title: "Projectes",
	description: "Una col·lecció de projectes desplegats i repositoris tècnics que mostren el meu treball en desenvolupament web i sistemes d'IA.",
	tabs: {
		deployed: "Projectes Desplegats",
		github: "Repositoris GitHub"
	},
	filter: {
		all: "Tots"
	},
	empty: "No s'han trobat projectes amb aquest filtre."
};
var future$1 = {
	header: {
		title: "Projectes Futurs",
		description: "Una visió del meu roadmap professional: idees innovadores, productes escalables i tecnologies emergents."
	},
	saas: {
		title: "Idees SaaS",
		item1: {
			title: "Plataforma d'Automatització per Pimes",
			description: "SaaS que combina IA i automatització per ajudar petites empreses a optimitzar processos interns.",
			tags: [
				"Vue.js",
				"Laravel",
				"AI Integration"
			]
		},
		item2: {
			title: "Marketplace de Serveis Digitals",
			description: "Plataforma que connecta professionals digitals amb empreses que necessiten serveis especialitzats.",
			tags: [
				"Next.js",
				"Stripe",
				"Real-time"
			]
		}
	},
	automation: {
		title: "Automatitzacions IA",
		item1: {
			title: "Agent de Gestió de Continguts",
			description: "Sistema multiagent que genera, optimitza i distribueix contingut per a xarxes socials i blogs.",
			tags: [
				"Python",
				"LLMs",
				"Multi-Agent"
			]
		},
		item2: {
			title: "Sistema d'Anàlisi Predictiva",
			description: "IA que analitza dades empresarials per proporcionar insights predictius i recomanacions accionables.",
			tags: [
				"Machine Learning",
				"Data Science",
				"APIs"
			]
		}
	},
	multiAgent: {
		title: "Sistemes Multiagent Avançats",
		item1: {
			title: "Framework de Coordinació d'Agents",
			description: "Framework obert per desenvolupar i coordinar sistemes d'agents IA en entorns complexos.",
			tags: [
				"Python",
				"Distributed Systems",
				"Open Source"
			]
		},
		item2: {
			title: "Agent d'Optimització Empresarial",
			description: "Agent intel·ligent que optimitza processos empresarials mitjançant aprenentatge continu i adaptació.",
			tags: [
				"Reinforcement Learning",
				"Business Intelligence",
				"APIs"
			]
		}
	},
	research: {
		title: "Projectes d'Investigació",
		item1: {
			title: "IA per a Sostenibilitat",
			description: "Recerca en aplicacions d'IA per a la transició energètica i sostenibilitat ambiental.",
			tags: [
				"Research",
				"Sustainability",
				"IoT"
			]
		},
		item2: {
			title: "Interfícies Humà-Agent",
			description: "Disseny d'interfícies intuïtives per a la interacció amb sistemes d'agents complexos.",
			tags: [
				"UX Research",
				"HCI",
				"Frontend"
			]
		}
	},
	cta: {
		title: "Interessat en Col·laborar?",
		description: "Si alguna d'aquestes idees t'interessa o tens un projecte similar en ment, m'encantaria parlar-ne.",
		cta: "Contacta'm"
	}
};
var curriculum$1 = {
	header: {
		title: "Curriculum Vitae",
		description: "Versions especialitzades del meu currículum per diferents rols professionals."
	},
	additional: {
		title: "Informació Addicional",
		line1: "Els currículums inclouen experiència professional detallada, projectes destacats, tecnologies dominades i certificacions rellevants.",
		line2: "Disponible per a versions personalitzades segons requisits específics de posició o empresa."
	},
	cards: {
		fullstack: {
			title: "Full Stack Developer",
			subtitle: "Frontend + Backend + APIs + arquitectura moderna",
			description: "Disseny i desenvolupament d’aplicacions web completes, arquitectures escalables i fluxos de treball optimitzats per productes digitals moderns."
		},
		"ai-systems": {
			title: "AI Systems Engineer",
			subtitle: "LLMs, Multi-Agent Systems i automatització IA",
			description: "Creació de sistemes d’intel·ligència artificial orientats a producte amb agents col·laboratius, automatització intel·ligent i fluxos de dades avançats."
		},
		"database-admin": {
			title: "Database Administrator",
			subtitle: "SQL, PostgreSQL, MySQL i optimització de dades",
			description: "Administració de bases de dades robusta, optimització de rendiment i models de dades fiables per aplicacions empresarials i serveis en producció."
		},
		"systems-admin": {
			title: "Systems Administrator",
			subtitle: "Linux, Docker, networking i infraestructura",
			description: "Infraestructura senzilla i segura, deploys automatitzats i manteniment de sistemes amb enfoc en disponibilitat, escalabilitat i fiabilitat."
		},
		"it-technician": {
			title: "IT Technician",
			subtitle: "Suport tècnic, hardware, software i manteniment",
			description: "Gestió d’equips, resolució d’incidències i monitoratge proactiu per mantenir operatives les infraestructures i l’experiència dels usuaris."
		}
	},
	card: {
		label: "Currículum",
		viewPdf: "Veure CV",
		downloadPdf: "Descarregar PDF",
		alt: "Preview del CV"
	}
};
var projectCard$1 = {
	featured: "Featured",
	github: "GitHub",
	live: "Live"
};
var sections$1 = {
	about: {
		title: "About me",
		description: "Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent."
	},
	projects: {
		title: "Projectes",
		subtitle: "Importació automàtica de GitHub + projectes manuals en JSON"
	},
	contact: {
		title: "Contacte",
		description: "Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques."
	}
};
const locale_es_46json_a5ba01c4 = {
	nav: nav$1,
	language: language$1,
	meta: meta$1,
	index: index$1,
	about: about$1,
	projects: projects$1,
	future: future$1,
	curriculum: curriculum$1,
	projectCard: projectCard$1,
	sections: sections$1
};

var nav = {
	home: "Home",
	about: "About",
	projects: "Projects",
	curriculum: "Curriculum",
	future: "Future"
};
var language = {
	label: "Language",
	ca: "Català",
	es: "Español",
	en: "English"
};
var meta = {
	index: {
		title: "Josafe.com · Portfolio Full Stack & AI Systems",
		description: "Josafe premium portfolio with Full Stack, AI Systems and modern software architecture projects.",
		ogTitle: "Josafe.com · Portfolio Full Stack & AI Systems",
		ogDescription: "Josafe portfolio: premium digital experiences, intelligent systems and scalable software architecture."
	},
	about: {
		title: "About Me · Josafe.com",
		description: "Professional overview of Josafe: Full Stack Developer and AI Systems Engineer specialized in scalable solutions and artificial intelligence."
	},
	projects: {
		title: "Projects · Josafe.com",
		description: "Live projects and GitHub repositories by Josafe: web development, AI systems and multi-agent engineering."
	},
	future: {
		title: "Future Projects · Josafe.com",
		description: "Josafe professional roadmap: SaaS ideas, AI automations and advanced multi-agent systems."
	},
	curriculum: {
		title: "Curriculum Vitae · Josafe.com",
		description: "Specialized curriculum versions for professional roles, available as downloadable PDFs."
	}
};
var index = {
	hero: {
		badge: "Premium engineering portfolio",
		heading: "Building modern Full Stack experiences and AI Systems for product-led digital products.",
		paragraph: "Crafting scalable platforms, intelligent automation and elegant interfaces with a premium technical approach focused on product excellence.",
		projects: "View Projects",
		about: "About Me",
		stats: {
			projects: "Projects",
			ai: "Architect",
			fullStack: "Apps",
			cloud: "DevOps"
		},
		platformsLabel: "Platforms",
		platformsText: "Scalable web experiences for product-led growth.",
		systemsLabel: "Systems",
		systemsText: "Multi-agent automation, monitoring and cloud-native deployment.",
		featuredStackLabel: "Featured stack",
		featuredStackText: "Vue · Nuxt · TypeScript · Docker",
		liveConceptLabel: "Live concept",
		liveConceptText: "Modern landing page design with subtle motion.",
		visualTitle: "AI Systems Architect",
		visualDescription: "Designing premium product experiences with intelligent infrastructure and elegant interfaces."
	},
	connect: {
		label: "Connect & collaborate",
		title: "Connect with the core systems that shape premium digital products."
	},
	tech: {
		title: "Engineering Stack",
		subtitle: "Modern architecture across every layer."
	},
	navigation: {
		about: {
			title: "About Me",
			description: "Discover my story, values and how I build digital products.",
			href: "/about"
		},
		projects: {
			title: "Projects",
			description: "Explore purpose-driven builds, SaaS and AI systems in production.",
			href: "/projects"
		},
		curriculum: {
			title: "Curriculum",
			description: "Get the CV details, skills matrix and downloadable resume.",
			href: "/curriculum"
		},
		future: {
			title: "Future Projects",
			description: "See the roadmap, new product ideas and next-generation systems.",
			href: "/future-projects"
		}
	}
};
var about = {
	hero: {
		label: "Sobre Mi",
		heading: "Desenvolupador Full Stack i AI Systems Engineer",
		text: "Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent."
	},
	specializations: {
		title: "Especialitzacions",
		fullStack: {
			title: "Full Stack Development",
			description: "Laravel, Vue.js, Node.js, bases de dades relacionals i NoSQL"
		},
		ai: {
			title: "AI Systems & Multi-Agent",
			description: "Sistemes d'intel·ligència artificial, agents multiagent, automatització"
		},
		architecture: {
			title: "Arquitectura Escalable",
			description: "Disseny de sistemes escalables, microserveis, integracions cloud"
		}
	},
	interests: {
		title: "Interessos Professionals",
		impact: {
			title: "Projectes d'Impacte",
			description: "Aplicacions web modernes, SaaS, productes digitals escalables"
		},
		innovation: {
			title: "Innovació AI",
			description: "Sistemes intel·ligents, automatitzacions, agents conversacionals"
		},
		collaboration: {
			title: "Col·laboracions Tècniques",
			description: "Equips multidisciplinars, consultoria, mentorització"
		}
	},
	philosophy: {
		title: "Filosofia de Treball",
		text: "Crec en el poder de la tecnologia per transformar negocis i millorar vides. El meu enfocament combina enginyeria de software sòlida amb innovació en IA, sempre prioritzant la qualitat del codi, l'experiència d'usuari i l'impacte real. Treballo amb metodologies àgils, enfocades en resultats mesurables i solucions sostenibles a llarg termini."
	},
	contact: {
		title: "Contacte",
		text: "Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques.",
		email: "josafesf2\\@gmail.com"
	}
};
var projects = {
	title: "Projectes",
	description: "Una col·lecció de projectes desplegats i repositoris tècnics que mostren el meu treball en desenvolupament web i sistemes d'IA.",
	tabs: {
		deployed: "Projectes Desplegats",
		github: "Repositoris GitHub"
	},
	filter: {
		all: "Tots"
	},
	empty: "No s'han trobat projectes amb aquest filtre."
};
var future = {
	header: {
		title: "Projectes Futurs",
		description: "Una visió del meu roadmap professional: idees innovadores, productes escalables i tecnologies emergents."
	},
	saas: {
		title: "Idees SaaS",
		item1: {
			title: "Plataforma d'Automatització per Pimes",
			description: "SaaS que combina IA i automatització per ajudar petites empreses a optimitzar processos interns.",
			tags: [
				"Vue.js",
				"Laravel",
				"AI Integration"
			]
		},
		item2: {
			title: "Marketplace de Serveis Digitals",
			description: "Plataforma que connecta professionals digitals amb empreses que necessiten serveis especialitzats.",
			tags: [
				"Next.js",
				"Stripe",
				"Real-time"
			]
		}
	},
	automation: {
		title: "Automatitzacions IA",
		item1: {
			title: "Agent de Gestió de Continguts",
			description: "Sistema multiagent que genera, optimitza i distribueix contingut per a xarxes socials i blogs.",
			tags: [
				"Python",
				"LLMs",
				"Multi-Agent"
			]
		},
		item2: {
			title: "Sistema d'Anàlisi Predictiva",
			description: "IA que analitza dades empresarials per proporcionar insights predictius i recomanacions accionables.",
			tags: [
				"Machine Learning",
				"Data Science",
				"APIs"
			]
		}
	},
	multiAgent: {
		title: "Sistemes Multiagent Avançats",
		item1: {
			title: "Framework de Coordinació d'Agents",
			description: "Framework obert per desenvolupar i coordinar sistemes d'agents IA en entorns complexos.",
			tags: [
				"Python",
				"Distributed Systems",
				"Open Source"
			]
		},
		item2: {
			title: "Agent d'Optimització Empresarial",
			description: "Agent intel·ligent que optimitza processos empresarials mitjançant aprenentatge continu i adaptació.",
			tags: [
				"Reinforcement Learning",
				"Business Intelligence",
				"APIs"
			]
		}
	},
	research: {
		title: "Projectes d'Investigació",
		item1: {
			title: "IA per a Sostenibilitat",
			description: "Recerca en aplicacions d'IA per a la transició energètica i sostenibilitat ambiental.",
			tags: [
				"Research",
				"Sustainability",
				"IoT"
			]
		},
		item2: {
			title: "Interfícies Humà-Agent",
			description: "Disseny d'interfícies intuïtives per a la interacció amb sistemes d'agents complexos.",
			tags: [
				"UX Research",
				"HCI",
				"Frontend"
			]
		}
	},
	cta: {
		title: "Interessat en Col·laborar?",
		description: "Si alguna d'aquestes idees t'interessa o tens un projecte similar en ment, m'encantaria parlar-ne.",
		cta: "Contacta'm"
	}
};
var curriculum = {
	header: {
		title: "Curriculum Vitae",
		description: "Versions especialitzades del meu currículum per diferents rols professionals."
	},
	additional: {
		title: "Informació Addicional",
		line1: "Els currículums inclouen experiència professional detallada, projectes destacats, tecnologies dominades i certificacions rellevants.",
		line2: "Disponible per a versions personalitzades segons requisits específics de posició o empresa."
	},
	cards: {
		fullstack: {
			title: "Full Stack Developer",
			subtitle: "Frontend + Backend + APIs + arquitectura moderna",
			description: "Disseny i desenvolupament d’aplicacions web completes, arquitectures escalables i fluxos de treball optimitzats per productes digitals moderns."
		},
		"ai-systems": {
			title: "AI Systems Engineer",
			subtitle: "LLMs, Multi-Agent Systems i automatització IA",
			description: "Creació de sistemes d’intel·ligència artificial orientats a producte amb agents col·laboratius, automatització intel·ligent i fluxos de dades avançats."
		},
		"database-admin": {
			title: "Database Administrator",
			subtitle: "SQL, PostgreSQL, MySQL i optimització de dades",
			description: "Administració de bases de dades robusta, optimització de rendiment i models de dades fiables per aplicacions empresarials i serveis en producció."
		},
		"systems-admin": {
			title: "Systems Administrator",
			subtitle: "Linux, Docker, networking i infraestructura",
			description: "Infraestructura senzilla i segura, deploys automatitzats i manteniment de sistemes amb enfoc en disponibilitat, escalabilitat i fiabilitat."
		},
		"it-technician": {
			title: "IT Technician",
			subtitle: "Suport tècnic, hardware, software i manteniment",
			description: "Gestió d’equips, resolució d’incidències i monitoratge proactiu per mantenir operatives les infraestructures i l’experiència dels usuaris."
		}
	},
	card: {
		label: "Currículum",
		viewPdf: "Veure CV",
		downloadPdf: "Descarregar PDF",
		alt: "Preview del CV"
	}
};
var projectCard = {
	featured: "Featured",
	github: "GitHub",
	live: "Live"
};
var sections = {
	about: {
		title: "About me",
		description: "Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent."
	},
	projects: {
		title: "Projectes",
		subtitle: "Importació automàtica de GitHub + projectes manuals en JSON"
	},
	contact: {
		title: "Contacte",
		description: "Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques."
	}
};
const locale_en_46json_3d8c5d26 = {
	nav: nav,
	language: language,
	meta: meta,
	index: index,
	about: about,
	projects: projects,
	future: future,
	curriculum: curriculum,
	projectCard: projectCard,
	sections: sections
};

const config_i18n_46config_46ts_34062747 = () => ({
  default: {
    legacy: false,
    locale: "ca",
    fallbackLocale: "ca",
    availableLocales: ["ca", "es", "en"]
  }
});

// @ts-nocheck
const localeCodes =  [
  "ca",
  "es",
  "en"
];
const localeLoaders = {
  ca: [
    {
      key: "locale_ca_46json_40ab4272",
      load: () => Promise.resolve(locale_ca_46json_40ab4272),
      cache: true
    }
  ],
  es: [
    {
      key: "locale_es_46json_a5ba01c4",
      load: () => Promise.resolve(locale_es_46json_a5ba01c4),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_3d8c5d26",
      load: () => Promise.resolve(locale_en_46json_3d8c5d26),
      cache: true
    }
  ]
};
const vueI18nConfigs = [
  () => Promise.resolve(config_i18n_46config_46ts_34062747)
];
const normalizedLocales = [
  {
    code: "ca",
    iso: "ca-ES",
    name: "Català",
    language: undefined
  },
  {
    code: "es",
    iso: "es-ES",
    name: "Español",
    language: undefined
  },
  {
    code: "en",
    iso: "en-US",
    name: "English",
    language: undefined
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

function baseURL() {
	
	return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
	
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    return useRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host) {
  return normalizedLocales.find((l) => !!l.defaultForDomains?.includes(host))?.code;
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(getDefaultLocaleForDomain(getHost(event)) || defaultLocale);
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    }
  };
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"description","content":"Portfolio professional de Josafe amb projectes full stack i d'enginyeria de sistemes AI."}],"link":[],"style":[],"script":[],"noscript":[],"title":"Josafe · Full Stack & AI Systems Engineer","htmlAttrs":{"lang":"ca"}};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const separator = "___";
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  if (input[0] === "/") {
    return getLocaleFromRoutePath(input);
  }
  const fromName = getLocaleFromRouteName(input);
  if (fromName) {
    return fromName;
  }
  if (typeof route === "object" && route?.path) {
    return getLocaleFromRoutePath(String(route.path));
  }
  return "";
}

function matchDomainLocale(locales, host, pathLocale) {
  const normalizeDomain = (domain = "") => domain.replace(/https?:\/\//, "");
  const matches = locales.filter(
    (locale) => normalizeDomain(locale.domain) === host || toArray(locale.domains).includes(host)
  );
  if (matches.length <= 1) {
    return matches[0]?.code;
  }
  return (
    // match by current path locale
    matches.find((l) => l.code === pathLocale)?.code || matches.find((l) => l.defaultForDomains?.includes(host) ?? l.domainDefault)?.code
  );
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getHostLocale = (event, path, domainLocales) => {
  const host = getRequestURL(event, { xForwardedHost: true }).host;
  const locales = normalizedLocales.map((l) => ({
    ...l,
    domain: domainLocales[l.code]?.domain ?? l.domain
  }));
  return matchDomainLocale(locales, host, getLocaleFromRoutePath(path));
};
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => getHostLocale(event, path, runtimeI18n.domainLocales),
    route: (path) => getRouteLocale(event, path)
  };
};

// Generated by @nuxtjs/i18n
const pathToI18nConfig = {
  "/about": {
    "ca": "/about",
    "es": "/about",
    "en": "/about"
  },
  "/": {
    "ca": "/",
    "es": "/",
    "en": "/"
  },
  "/projects": {
    "ca": "/projects",
    "es": "/projects",
    "en": "/projects"
  },
  "/curriculum": {
    "ca": "/curriculum",
    "es": "/curriculum",
    "en": "/curriculum"
  },
  "/future-projects": {
    "ca": "/future-projects",
    "es": "/future-projects",
    "en": "/future-projects"
  }
};
const i18nPathToPath = {
  "/about": "/about",
  "/": "/",
  "/projects": "/projects",
  "/curriculum": "/curriculum",
  "/future-projects": "/future-projects"
};
const disabledI18nPathToPath = {};

const formatTrailingSlash = withoutTrailingSlash;
const matcher = createRouterMatcher([], {});
for (const path of Object.keys(i18nPathToPath)) {
  matcher.addRoute({ path, component: () => "", meta: {} });
}
const disabledI18nMatcher = createRouterMatcher([], {});
for (const path of Object.keys(disabledI18nPathToPath)) {
  disabledI18nMatcher.addRoute({ path, component: () => "", meta: {} });
}
const getI18nPathToI18nPath = (path, locale) => {
  if (!path || !locale) {
    return;
  }
  const plainPath = i18nPathToPath[path];
  const i18nConfig = pathToI18nConfig[plainPath];
  if (i18nConfig && i18nConfig[locale]) {
    return i18nConfig[locale] === true ? plainPath : i18nConfig[locale];
  }
};
function isExistingNuxtRoute(path) {
  if (path === "") {
    return;
  }
  if (path.endsWith("/__nuxt_error")) {
    return;
  }
  const disabledI18nResolvedMatch = disabledI18nMatcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  if (disabledI18nResolvedMatch.matched.length > 0) {
    return;
  }
  const resolvedMatch = matcher.resolve({ path }, { path: "/", name: "", matched: [], params: {}, meta: {} });
  return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
}
function matchLocalized(path, locale, defaultLocale) {
  if (path === "") {
    return;
  }
  const parsed = parsePath(path);
  const resolvedMatch = matcher.resolve(
    { path: parsed.pathname || "/" },
    { path: "/", name: "", matched: [], params: {}, meta: {} }
  );
  if (resolvedMatch.matched.length > 0) {
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    const match = matcher.resolve(
      { params: resolvedMatch.params },
      { path: alternate || "/", name: "", matched: [], params: {}, meta: {} }
    );
    return formatTrailingSlash(withLeadingSlash(joinURL(locale , match.path)), true);
  }
}

function* detect(detectors, detection, path) {
  if (detection.enabled) {
    yield { locale: detectors.cookie(), source: "cookie" };
    yield { locale: detectors.header(), source: "header" };
  }
  {
    yield { locale: detectors.route(path), source: "route" };
  }
  yield { locale: detection.fallbackLocale, source: "fallback" };
}
function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _klsVoc7ZPsFYSA3eAJNjR2yb9p3vKpPHWRLxnmpX1aw = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const createBaseUrlGetter = () => {
    isFunction(runtimeI18n.baseUrl) ? "" : runtimeI18n.baseUrl || "";
    if (isFunction(runtimeI18n.baseUrl)) {
      return () => "";
    }
    return (event, defaultLocale) => {
      return "";
    };
  };
  function resolveRedirectPath(event, path, pathLocale, defaultLocale, detector) {
    let locale = "";
    for (const detected of detect(detector, detection, event.path)) {
      if (detected.locale && isSupportedLocale(detected.locale)) {
        locale = detected.locale;
        break;
      }
    }
    locale ||= defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2);
      if (res && res !== event.path) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const requestURL = getRequestURL(event);
    if (rootRedirect && requestURL.pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupportedLocale(detector.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale);
      redirectCode = rootRedirect.code;
    } else if (runtimeI18n.redirectStatusCode) {
      redirectCode = runtimeI18n.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (requestURL.pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    if (requestURL.pathname === "/" && "prefix" === "prefix") {
      resolvedPath ??= getLocalizedMatch(defaultLocale);
    }
    return { path: resolvedPath, code: redirectCode, locale };
  }
  const baseUrlGetter = createBaseUrlGetter();
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = !event.context.nuxtI18n ? await initializeI18nContext(event) : useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const path = (pathLocale && url.pathname.slice(pathLocale.length + 1)) ?? url.pathname;
    if (!url.pathname.includes("/_i18n") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(event, path, pathLocale, ctx.vueI18nOptions.defaultLocale, detector);
    if (resolved.path && resolved.path !== url.pathname) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        joinURL(baseUrlGetter(event, ctx.vueI18nOptions.defaultLocale), resolved.path + url.search),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

const plugins = [
  _klsVoc7ZPsFYSA3eAJNjR2yb9p3vKpPHWRLxnmpX1aw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _lRiuN9 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const storage = prefixStorage(useStorage(), "i18n");
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
const _getMessagesCached = cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: 60 * 60 * 24,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessagesCached;
const _getMergedMessages = async (locale, fallbackLocales) => {
  const merged = {};
  try {
    if (fallbackLocales.length > 0) {
      const messages = await Promise.all(fallbackLocales.map(getMessages));
      for (const message2 of messages) {
        deepCopy(message2, merged);
      }
    }
    const message = await getMessages(locale);
    deepCopy(message, merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: 60 * 60 * 24,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});
const _getAllMergedMessages = async (locales) => {
  const merged = {};
  try {
    const messages = await Promise.all(locales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message);
  }
};
cachedFunctionI18n(_getAllMergedMessages, {
  name: "merged-all",
  maxAge: 60 * 60 * 24,
  getKey: (locales) => locales.join("-"),
  shouldBypassCache: (locales) => !locales.every((locale) => isLocaleCacheable(locale))
});

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await getMergedMessages(locale, ctx.localeConfigs?.[locale]?.fallbacks ?? []);
  deepCopy(messages, ctx.messages);
  return ctx.messages;
});
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: 60 * 60 * 24,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-"),
  async shouldBypassCache(event) {
    const locale = getRouterParam(event, "locale");
    if (locale == null) {
      return false;
    }
    const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
    return !ctx.localeConfigs?.[locale]?.cacheable;
  }
});
const _messagesHandlerCached = defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: 10,
  swr: false,
  getKey: (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-")
});
const _VzqLJ_ = _messagesHandlerCached;

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_1pUTy3 = () => import('../routes/api/github-repos.get.mjs');
const _lazy_OrXZZ4 = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _lRiuN9, lazy: false, middleware: true, method: undefined },
  { route: '/api/github-repos', handler: _lazy_1pUTy3, lazy: true, middleware: false, method: "get" },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _VzqLJ_, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_OrXZZ4, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

export { appHead as a, appId as b, appRootAttrs as c, appRootTag as d, appTeleportAttrs as e, appTeleportTag as f, baseURL as g, buildAssetsURL as h, defineRenderHandler as i, getRouteRules as j, useRuntimeConfig as k, useStorage as l, publicAssetsURL as p, trapUnhandledNodeErrors as t, useNitroApp as u };
//# sourceMappingURL=nitro.mjs.map
