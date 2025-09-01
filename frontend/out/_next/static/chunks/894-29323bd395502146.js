(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [894],
  {
    135: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.camelCase = void 0));
      var n = /^--[a-zA-Z0-9_-]+$/,
        r = /-([a-z])/g,
        i = /^[^-]+$/,
        o = /^-(webkit|moz|ms|o|khtml)-/,
        l = /^-(ms)-/,
        a = function (e, t) {
          return t.toUpperCase();
        },
        s = function (e, t) {
          return "".concat(t, "-");
        };
      t.camelCase = function (e, t) {
        var u;
        return (void 0 === t && (t = {}), !(u = e) || i.test(u) || n.test(u))
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(l, s) : e.replace(o, s)).replace(
              r,
              a,
            ));
      };
    },
    339: function (e, t, n) {
      "use strict";
      var r = (
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          }
        )(n(1731)),
        i = n(135);
      function o(e, t) {
        var n = {};
        return (
          e &&
            "string" == typeof e &&
            (0, r.default)(e, function (e, r) {
              e && r && (n[(0, i.camelCase)(e, t)] = r);
            }),
          n
        );
      }
      ((o.default = o), (e.exports = o));
    },
    459: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        o = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        l = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            o =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !o) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        a = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        s = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            else if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          u,
          c,
          f = arguments[0],
          h = 1,
          d = arguments.length,
          p = !1;
        for (
          "boolean" == typeof f && ((p = f), (f = arguments[1] || {}), (h = 2)),
            (null == f || ("object" != typeof f && "function" != typeof f)) &&
              (f = {});
          h < d;
          ++h
        )
          if (((t = arguments[h]), null != t))
            for (n in t)
              ((r = s(f, n)),
                f !== (i = s(t, n)) &&
                  (p && i && (l(i) || (u = o(i)))
                    ? (u
                        ? ((u = !1), (c = r && o(r) ? r : []))
                        : (c = r && l(r) ? r : {}),
                      a(f, { name: n, newValue: e(p, c, i) }))
                    : void 0 !== i && a(f, { name: n, newValue: i })));
        return f;
      };
    },
    1030: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, { $b: () => r, Vy: () => u });
      let i = [];
      !(function (e) {
        ((e[(e.DEBUG = 0)] = "DEBUG"),
          (e[(e.VERBOSE = 1)] = "VERBOSE"),
          (e[(e.INFO = 2)] = "INFO"),
          (e[(e.WARN = 3)] = "WARN"),
          (e[(e.ERROR = 4)] = "ERROR"),
          (e[(e.SILENT = 5)] = "SILENT"));
      })(r || (r = {}));
      let o = {
          debug: r.DEBUG,
          verbose: r.VERBOSE,
          info: r.INFO,
          warn: r.WARN,
          error: r.ERROR,
          silent: r.SILENT,
        },
        l = r.INFO,
        a = {
          [r.DEBUG]: "log",
          [r.VERBOSE]: "log",
          [r.INFO]: "info",
          [r.WARN]: "warn",
          [r.ERROR]: "error",
        },
        s = (e, t, ...n) => {
          if (t < e.logLevel) return;
          let r = new Date().toISOString(),
            i = a[t];
          if (i) console[i](`[${r}]  ${e.name}:`, ...n);
          else
            throw Error(
              `Attempted to log a message with an invalid logType (value: ${t})`,
            );
        };
      class u {
        constructor(e) {
          ((this.name = e),
            (this._logLevel = l),
            (this._logHandler = s),
            (this._userLogHandler = null),
            i.push(this));
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(e) {
          if (!(e in r))
            throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
          this._logLevel = e;
        }
        setLogLevel(e) {
          this._logLevel = "string" == typeof e ? o[e] : e;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(e) {
          if ("function" != typeof e)
            throw TypeError(
              "Value assigned to `logHandler` must be a function",
            );
          this._logHandler = e;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(e) {
          this._userLogHandler = e;
        }
        debug(...e) {
          (this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...e),
            this._logHandler(this, r.DEBUG, ...e));
        }
        log(...e) {
          (this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...e),
            this._logHandler(this, r.VERBOSE, ...e));
        }
        info(...e) {
          (this._userLogHandler && this._userLogHandler(this, r.INFO, ...e),
            this._logHandler(this, r.INFO, ...e));
        }
        warn(...e) {
          (this._userLogHandler && this._userLogHandler(this, r.WARN, ...e),
            this._logHandler(this, r.WARN, ...e));
        }
        error(...e) {
          (this._userLogHandler && this._userLogHandler(this, r.ERROR, ...e),
            this._logHandler(this, r.ERROR, ...e));
        }
      }
    },
    1260: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { A: () => a });
      let i = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        },
        o = new Uint8Array(16),
        l = [];
      for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
      let a = function (e, t, n) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        let a =
          (e = e || {}).random ??
          e.rng?.() ??
          (function () {
            if (!r) {
              if ("undefined" == typeof crypto || !crypto.getRandomValues)
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
                );
              r = crypto.getRandomValues.bind(crypto);
            }
            return r(o);
          })();
        if (a.length < 16) throw Error("Random bytes length must be >= 16");
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
          if ((n = n || 0) < 0 || n + 16 > t.length)
            throw RangeError(
              `UUID byte range ${n}:${n + 15} is out of buffer bounds`,
            );
          for (let e = 0; e < 16; ++e) t[n + e] = a[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            l[e[t + 0]] +
            l[e[t + 1]] +
            l[e[t + 2]] +
            l[e[t + 3]] +
            "-" +
            l[e[t + 4]] +
            l[e[t + 5]] +
            "-" +
            l[e[t + 6]] +
            l[e[t + 7]] +
            "-" +
            l[e[t + 8]] +
            l[e[t + 9]] +
            "-" +
            l[e[t + 10]] +
            l[e[t + 11]] +
            l[e[t + 12]] +
            l[e[t + 13]] +
            l[e[t + 14]] +
            l[e[t + 15]]
          ).toLowerCase();
        })(a);
      };
    },
    1474: (e, t, n) => {
      "use strict";
      n.d(t, {
        HF: () => r.Y,
        xI: () => r.p,
        hg: () => r.z,
        df: () => r.d,
        CI: () => r.D,
      });
      var r = n(1339);
      (n(1553), n(8797), n(1030), n(1899));
    },
    1553: (e, t, n) => {
      "use strict";
      let r, i;
      n.d(t, {
        MF: () => F,
        j6: () => P,
        xZ: () => D,
        om: () => M,
        Sx: () => j,
        Wp: () => z,
        KO: () => H,
      });
      var o = n(1899),
        l = n(1030),
        a = n(8797);
      let s = (e, t) => t.some((t) => e instanceof t),
        u = new WeakMap(),
        c = new WeakMap(),
        f = new WeakMap(),
        h = new WeakMap(),
        d = new WeakMap(),
        p = {
          get(e, t, n) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return c.get(e);
              if ("objectStoreNames" === t)
                return e.objectStoreNames || f.get(e);
              if ("store" === t)
                return n.objectStoreNames[1]
                  ? void 0
                  : n.objectStore(n.objectStoreNames[0]);
            }
            return g(e[t]);
          },
          set: (e, t, n) => ((e[t] = n), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e,
        };
      function g(e) {
        if (e instanceof IDBRequest) {
          let t = new Promise((t, n) => {
            let r = () => {
                (e.removeEventListener("success", i),
                  e.removeEventListener("error", o));
              },
              i = () => {
                (t(g(e.result)), r());
              },
              o = () => {
                (n(e.error), r());
              };
            (e.addEventListener("success", i), e.addEventListener("error", o));
          });
          return (
            t
              .then((t) => {
                t instanceof IDBCursor && u.set(t, e);
              })
              .catch(() => {}),
            d.set(t, e),
            t
          );
        }
        if (h.has(e)) return h.get(e);
        let t = (function (e) {
          if ("function" == typeof e)
            return e !== IDBDatabase.prototype.transaction ||
              "objectStoreNames" in IDBTransaction.prototype
              ? (
                  i ||
                  (i = [
                    IDBCursor.prototype.advance,
                    IDBCursor.prototype.continue,
                    IDBCursor.prototype.continuePrimaryKey,
                  ])
                ).includes(e)
                ? function (...t) {
                    return (e.apply(m(this), t), g(u.get(this)));
                  }
                : function (...t) {
                    return g(e.apply(m(this), t));
                  }
              : function (t, ...n) {
                  let r = e.call(m(this), t, ...n);
                  return (f.set(r, t.sort ? t.sort() : [t]), g(r));
                };
          return (e instanceof IDBTransaction &&
            (function (e) {
              if (c.has(e)) return;
              let t = new Promise((t, n) => {
                let r = () => {
                    (e.removeEventListener("complete", i),
                      e.removeEventListener("error", o),
                      e.removeEventListener("abort", o));
                  },
                  i = () => {
                    (t(), r());
                  },
                  o = () => {
                    (n(e.error || new DOMException("AbortError", "AbortError")),
                      r());
                  };
                (e.addEventListener("complete", i),
                  e.addEventListener("error", o),
                  e.addEventListener("abort", o));
              });
              c.set(e, t);
            })(e),
          s(
            e,
            r ||
              (r = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ]),
          ))
            ? new Proxy(e, p)
            : e;
        })(e);
        return (t !== e && (h.set(e, t), d.set(t, e)), t);
      }
      let m = (e) => d.get(e),
        y = ["get", "getKey", "getAll", "getAllKeys", "count"],
        b = ["put", "add", "delete", "clear"],
        v = new Map();
      function x(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
          return;
        if (v.get(t)) return v.get(t);
        let n = t.replace(/FromIndex$/, ""),
          r = t !== n,
          i = b.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          !(i || y.includes(n))
        )
          return;
        let o = async function (e, ...t) {
          let o = this.transaction(e, i ? "readwrite" : "readonly"),
            l = o.store;
          return (
            r && (l = l.index(t.shift())),
            (await Promise.all([l[n](...t), i && o.done]))[0]
          );
        };
        return (v.set(t, o), o);
      }
      p = ((e) => ({
        ...e,
        get: (t, n, r) => x(t, n) || e.get(t, n, r),
        has: (t, n) => !!x(t, n) || e.has(t, n),
      }))(p);
      class k {
        constructor(e) {
          this.container = e;
        }
        getPlatformInfoString() {
          return this.container
            .getProviders()
            .map((e) => {
              if (
                !(function (e) {
                  let t = e.getComponent();
                  return (null == t ? void 0 : t.type) === "VERSION";
                })(e)
              )
                return null;
              {
                let t = e.getImmediate();
                return `${t.library}/${t.version}`;
              }
            })
            .filter((e) => e)
            .join(" ");
        }
      }
      let w = "@firebase/app",
        S = "0.13.2",
        C = new l.Vy("@firebase/app"),
        E = "[DEFAULT]",
        I = {
          [w]: "fire-core",
          "@firebase/app-compat": "fire-core-compat",
          "@firebase/analytics": "fire-analytics",
          "@firebase/analytics-compat": "fire-analytics-compat",
          "@firebase/app-check": "fire-app-check",
          "@firebase/app-check-compat": "fire-app-check-compat",
          "@firebase/auth": "fire-auth",
          "@firebase/auth-compat": "fire-auth-compat",
          "@firebase/database": "fire-rtdb",
          "@firebase/data-connect": "fire-data-connect",
          "@firebase/database-compat": "fire-rtdb-compat",
          "@firebase/functions": "fire-fn",
          "@firebase/functions-compat": "fire-fn-compat",
          "@firebase/installations": "fire-iid",
          "@firebase/installations-compat": "fire-iid-compat",
          "@firebase/messaging": "fire-fcm",
          "@firebase/messaging-compat": "fire-fcm-compat",
          "@firebase/performance": "fire-perf",
          "@firebase/performance-compat": "fire-perf-compat",
          "@firebase/remote-config": "fire-rc",
          "@firebase/remote-config-compat": "fire-rc-compat",
          "@firebase/storage": "fire-gcs",
          "@firebase/storage-compat": "fire-gcs-compat",
          "@firebase/firestore": "fire-fst",
          "@firebase/firestore-compat": "fire-fst-compat",
          "@firebase/ai": "fire-vertex",
          "fire-js": "fire-js",
          firebase: "fire-js-all",
        },
        _ = new Map(),
        O = new Map(),
        T = new Map();
      function A(e, t) {
        try {
          e.container.addComponent(t);
        } catch (n) {
          C.debug(
            `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
            n,
          );
        }
      }
      function M(e) {
        let t = e.name;
        if (T.has(t))
          return (
            C.debug(`There were multiple attempts to register component ${t}.`),
            !1
          );
        for (let n of (T.set(t, e), _.values())) A(n, e);
        for (let t of O.values()) A(t, e);
        return !0;
      }
      function P(e, t) {
        let n = e.container
          .getProvider("heartbeat")
          .getImmediate({ optional: !0 });
        return (n && n.triggerHeartbeat(), e.container.getProvider(t));
      }
      function D(e) {
        return null != e && void 0 !== e.settings;
      }
      let L = new a.FA("app", "Firebase", {
        "no-app":
          "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}'",
        "duplicate-app":
          "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "server-app-deleted": "Firebase Server App has been deleted",
        "no-options":
          "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument":
          "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument":
          "First argument to `onLog` must be null or a function.",
        "idb-open":
          "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get":
          "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set":
          "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete":
          "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        "finalization-registry-not-supported":
          "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        "invalid-server-app-environment":
          "FirebaseServerApp is not for use in browser environments.",
      });
      class N {
        constructor(e, t, n) {
          ((this._isDeleted = !1),
            (this._options = Object.assign({}, e)),
            (this._config = Object.assign({}, t)),
            (this._name = t.name),
            (this._automaticDataCollectionEnabled =
              t.automaticDataCollectionEnabled),
            (this._container = n),
            this.container.addComponent(new o.uA("app", () => this, "PUBLIC")));
        }
        get automaticDataCollectionEnabled() {
          return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
        }
        set automaticDataCollectionEnabled(e) {
          (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
        }
        get name() {
          return (this.checkDestroyed(), this._name);
        }
        get options() {
          return (this.checkDestroyed(), this._options);
        }
        get config() {
          return (this.checkDestroyed(), this._config);
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(e) {
          this._isDeleted = e;
        }
        checkDestroyed() {
          if (this.isDeleted)
            throw L.create("app-deleted", { appName: this._name });
        }
      }
      function R(e, t) {
        let n = (0, a.u)(e.split(".")[1]);
        if (null === n)
          return void console.error(
            `FirebaseServerApp ${t} is invalid: second part could not be parsed.`,
          );
        if (void 0 === JSON.parse(n).exp)
          return void console.error(
            `FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`,
          );
        let r = 1e3 * JSON.parse(n).exp;
        r - new Date().getTime() <= 0 &&
          console.error(
            `FirebaseServerApp ${t} is invalid: the token has expired.`,
          );
      }
      let F = "11.10.0";
      function z(e, t = {}) {
        let n = e;
        "object" != typeof t && (t = { name: t });
        let r = Object.assign(
            { name: E, automaticDataCollectionEnabled: !0 },
            t,
          ),
          i = r.name;
        if ("string" != typeof i || !i)
          throw L.create("bad-app-name", { appName: String(i) });
        if ((n || (n = (0, a.T9)()), !n)) throw L.create("no-options");
        let l = _.get(i);
        if (l)
          if ((0, a.bD)(n, l.options) && (0, a.bD)(r, l.config)) return l;
          else throw L.create("duplicate-app", { appName: i });
        let s = new o.h1(i);
        for (let e of T.values()) s.addComponent(e);
        let u = new N(n, r, s);
        return (_.set(i, u), u);
      }
      function j(e = E) {
        let t = _.get(e);
        if (!t && e === E && (0, a.T9)()) return z();
        if (!t) throw L.create("no-app", { appName: e });
        return t;
      }
      async function B(e) {
        let t = !1,
          n = e.name;
        (_.has(n)
          ? ((t = !0), _.delete(n))
          : O.has(n) && 0 >= e.decRefCount() && (O.delete(n), (t = !0)),
          t &&
            (await Promise.all(
              e.container.getProviders().map((e) => e.delete()),
            ),
            (e.isDeleted = !0)));
      }
      function H(e, t, n) {
        var r;
        let i = null != (r = I[e]) ? r : e;
        n && (i += `-${n}`);
        let l = i.match(/\s|\//),
          a = t.match(/\s|\//);
        if (l || a) {
          let e = [`Unable to register library "${i}" with version "${t}":`];
          (l &&
            e.push(
              `library name "${i}" contains illegal characters (whitespace or "/")`,
            ),
            l && a && e.push("and"),
            a &&
              e.push(
                `version name "${t}" contains illegal characters (whitespace or "/")`,
              ),
            C.warn(e.join(" ")));
          return;
        }
        M(
          new o.uA(
            `${i}-version`,
            () => ({ library: i, version: t }),
            "VERSION",
          ),
        );
      }
      let U = "firebase-heartbeat-store",
        V = null;
      function W() {
        return (
          V ||
            (V = (function (
              e,
              t,
              { blocked: n, upgrade: r, blocking: i, terminated: o } = {},
            ) {
              let l = indexedDB.open(e, 1),
                a = g(l);
              return (
                r &&
                  l.addEventListener("upgradeneeded", (e) => {
                    r(
                      g(l.result),
                      e.oldVersion,
                      e.newVersion,
                      g(l.transaction),
                      e,
                    );
                  }),
                n &&
                  l.addEventListener("blocked", (e) =>
                    n(e.oldVersion, e.newVersion, e),
                  ),
                a
                  .then((e) => {
                    (o && e.addEventListener("close", () => o()),
                      i &&
                        e.addEventListener("versionchange", (e) =>
                          i(e.oldVersion, e.newVersion, e),
                        ));
                  })
                  .catch(() => {}),
                a
              );
            })("firebase-heartbeat-database", 0, {
              upgrade: (e, t) => {
                if (0 === t)
                  try {
                    e.createObjectStore(U);
                  } catch (e) {
                    console.warn(e);
                  }
              },
            }).catch((e) => {
              throw L.create("idb-open", { originalErrorMessage: e.message });
            })),
          V
        );
      }
      async function $(e) {
        try {
          let t = (await W()).transaction(U),
            n = await t.objectStore(U).get(Y(e));
          return (await t.done, n);
        } catch (e) {
          if (e instanceof a.g) C.warn(e.message);
          else {
            let t = L.create("idb-get", {
              originalErrorMessage: null == e ? void 0 : e.message,
            });
            C.warn(t.message);
          }
        }
      }
      async function q(e, t) {
        try {
          let n = (await W()).transaction(U, "readwrite"),
            r = n.objectStore(U);
          (await r.put(t, Y(e)), await n.done);
        } catch (e) {
          if (e instanceof a.g) C.warn(e.message);
          else {
            let t = L.create("idb-set", {
              originalErrorMessage: null == e ? void 0 : e.message,
            });
            C.warn(t.message);
          }
        }
      }
      function Y(e) {
        return `${e.name}!${e.options.appId}`;
      }
      class X {
        constructor(e) {
          ((this.container = e), (this._heartbeatsCache = null));
          let t = this.container.getProvider("app").getImmediate();
          ((this._storage = new K(t)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then((e) => ((this._heartbeatsCache = e), e))));
        }
        async triggerHeartbeat() {
          var e, t;
          try {
            let n = this.container
                .getProvider("platform-logger")
                .getImmediate()
                .getPlatformInfoString(),
              r = Z();
            if (
              ((null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats) ==
                null &&
                ((this._heartbeatsCache = await this._heartbeatsCachePromise),
                (null == (t = this._heartbeatsCache) ? void 0 : t.heartbeats) ==
                  null)) ||
              this._heartbeatsCache.lastSentHeartbeatDate === r ||
              this._heartbeatsCache.heartbeats.some((e) => e.date === r)
            )
              return;
            if (
              (this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
              this._heartbeatsCache.heartbeats.length > 30)
            ) {
              let e = (function (e) {
                if (0 === e.length) return -1;
                let t = 0,
                  n = e[0].date;
                for (let r = 1; r < e.length; r++)
                  e[r].date < n && ((n = e[r].date), (t = r));
                return t;
              })(this._heartbeatsCache.heartbeats);
              this._heartbeatsCache.heartbeats.splice(e, 1);
            }
            return this._storage.overwrite(this._heartbeatsCache);
          } catch (e) {
            C.warn(e);
          }
        }
        async getHeartbeatsHeader() {
          var e;
          try {
            if (
              (null === this._heartbeatsCache &&
                (await this._heartbeatsCachePromise),
              (null == (e = this._heartbeatsCache) ? void 0 : e.heartbeats) ==
                null || 0 === this._heartbeatsCache.heartbeats.length)
            )
              return "";
            let t = Z(),
              { heartbeatsToSend: n, unsentEntries: r } = (function (
                e,
                t = 1024,
              ) {
                let n = [],
                  r = e.slice();
                for (let i of e) {
                  let e = n.find((e) => e.agent === i.agent);
                  if (e) {
                    if ((e.dates.push(i.date), Q(n) > t)) {
                      e.dates.pop();
                      break;
                    }
                  } else if (
                    (n.push({ agent: i.agent, dates: [i.date] }), Q(n) > t)
                  ) {
                    n.pop();
                    break;
                  }
                  r = r.slice(1);
                }
                return { heartbeatsToSend: n, unsentEntries: r };
              })(this._heartbeatsCache.heartbeats),
              i = (0, a.Uj)(JSON.stringify({ version: 2, heartbeats: n }));
            return (
              (this._heartbeatsCache.lastSentHeartbeatDate = t),
              r.length > 0
                ? ((this._heartbeatsCache.heartbeats = r),
                  await this._storage.overwrite(this._heartbeatsCache))
                : ((this._heartbeatsCache.heartbeats = []),
                  this._storage.overwrite(this._heartbeatsCache)),
              i
            );
          } catch (e) {
            return (C.warn(e), "");
          }
        }
      }
      function Z() {
        return new Date().toISOString().substring(0, 10);
      }
      class K {
        constructor(e) {
          ((this.app = e),
            (this._canUseIndexedDBPromise =
              this.runIndexedDBEnvironmentCheck()));
        }
        async runIndexedDBEnvironmentCheck() {
          return (
            !!(0, a.zW)() &&
            (0, a.eX)()
              .then(() => !0)
              .catch(() => !1)
          );
        }
        async read() {
          if (!(await this._canUseIndexedDBPromise)) return { heartbeats: [] };
          {
            let e = await $(this.app);
            return (null == e ? void 0 : e.heartbeats) ? e : { heartbeats: [] };
          }
        }
        async overwrite(e) {
          var t;
          if (await this._canUseIndexedDBPromise) {
            let n = await this.read();
            return q(this.app, {
              lastSentHeartbeatDate:
                null != (t = e.lastSentHeartbeatDate)
                  ? t
                  : n.lastSentHeartbeatDate,
              heartbeats: e.heartbeats,
            });
          }
        }
        async add(e) {
          var t;
          if (await this._canUseIndexedDBPromise) {
            let n = await this.read();
            return q(this.app, {
              lastSentHeartbeatDate:
                null != (t = e.lastSentHeartbeatDate)
                  ? t
                  : n.lastSentHeartbeatDate,
              heartbeats: [...n.heartbeats, ...e.heartbeats],
            });
          }
        }
      }
      function Q(e) {
        return (0, a.Uj)(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      (M(new o.uA("platform-logger", (e) => new k(e), "PRIVATE")),
        M(new o.uA("heartbeat", (e) => new X(e), "PRIVATE")),
        H(w, S, ""),
        H(w, S, "esm2017"),
        H("fire-js", ""));
    },
    1731: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = null;
          if (!e || "string" != typeof e) return n;
          var r = (0, i.default)(e),
            o = "function" == typeof t;
          return (
            r.forEach(function (e) {
              if ("declaration" === e.type) {
                var r = e.property,
                  i = e.value;
                o ? t(r, i, e) : i && ((n = n || {})[r] = i);
              }
            }),
            n
          );
        }));
      var i = r(n(2588));
    },
    1899: (e, t, n) => {
      "use strict";
      n.d(t, { h1: () => a, uA: () => i });
      var r = n(8797);
      class i {
        constructor(e, t, n) {
          ((this.name = e),
            (this.instanceFactory = t),
            (this.type = n),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = "LAZY"),
            (this.onInstanceCreated = null));
        }
        setInstantiationMode(e) {
          return ((this.instantiationMode = e), this);
        }
        setMultipleInstances(e) {
          return ((this.multipleInstances = e), this);
        }
        setServiceProps(e) {
          return ((this.serviceProps = e), this);
        }
        setInstanceCreatedCallback(e) {
          return ((this.onInstanceCreated = e), this);
        }
      }
      let o = "[DEFAULT]";
      class l {
        constructor(e, t) {
          ((this.name = e),
            (this.container = t),
            (this.component = null),
            (this.instances = new Map()),
            (this.instancesDeferred = new Map()),
            (this.instancesOptions = new Map()),
            (this.onInitCallbacks = new Map()));
        }
        get(e) {
          let t = this.normalizeInstanceIdentifier(e);
          if (!this.instancesDeferred.has(t)) {
            let e = new r.cY();
            if (
              (this.instancesDeferred.set(t, e),
              this.isInitialized(t) || this.shouldAutoInitialize())
            )
              try {
                let n = this.getOrInitializeService({ instanceIdentifier: t });
                n && e.resolve(n);
              } catch (e) {}
          }
          return this.instancesDeferred.get(t).promise;
        }
        getImmediate(e) {
          var t;
          let n = this.normalizeInstanceIdentifier(
              null == e ? void 0 : e.identifier,
            ),
            r = null != (t = null == e ? void 0 : e.optional) && t;
          if (this.isInitialized(n) || this.shouldAutoInitialize())
            try {
              return this.getOrInitializeService({ instanceIdentifier: n });
            } catch (e) {
              if (r) return null;
              throw e;
            }
          if (r) return null;
          throw Error(`Service ${this.name} is not available`);
        }
        getComponent() {
          return this.component;
        }
        setComponent(e) {
          if (e.name !== this.name)
            throw Error(
              `Mismatching Component ${e.name} for Provider ${this.name}.`,
            );
          if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
          if (((this.component = e), this.shouldAutoInitialize())) {
            if ("EAGER" === e.instantiationMode)
              try {
                this.getOrInitializeService({ instanceIdentifier: o });
              } catch (e) {}
            for (let [e, t] of this.instancesDeferred.entries()) {
              let n = this.normalizeInstanceIdentifier(e);
              try {
                let e = this.getOrInitializeService({ instanceIdentifier: n });
                t.resolve(e);
              } catch (e) {}
            }
          }
        }
        clearInstance(e = o) {
          (this.instancesDeferred.delete(e),
            this.instancesOptions.delete(e),
            this.instances.delete(e));
        }
        async delete() {
          let e = Array.from(this.instances.values());
          await Promise.all([
            ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
            ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
          ]);
        }
        isComponentSet() {
          return null != this.component;
        }
        isInitialized(e = o) {
          return this.instances.has(e);
        }
        getOptions(e = o) {
          return this.instancesOptions.get(e) || {};
        }
        initialize(e = {}) {
          let { options: t = {} } = e,
            n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
          if (this.isInitialized(n))
            throw Error(`${this.name}(${n}) has already been initialized`);
          if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
          let r = this.getOrInitializeService({
            instanceIdentifier: n,
            options: t,
          });
          for (let [e, t] of this.instancesDeferred.entries())
            n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
          return r;
        }
        onInit(e, t) {
          var n;
          let r = this.normalizeInstanceIdentifier(t),
            i = null != (n = this.onInitCallbacks.get(r)) ? n : new Set();
          (i.add(e), this.onInitCallbacks.set(r, i));
          let o = this.instances.get(r);
          return (
            o && e(o, r),
            () => {
              i.delete(e);
            }
          );
        }
        invokeOnInitCallbacks(e, t) {
          let n = this.onInitCallbacks.get(t);
          if (n)
            for (let r of n)
              try {
                r(e, t);
              } catch (e) {}
        }
        getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
          var n;
          let r = this.instances.get(e);
          if (
            !r &&
            this.component &&
            ((r = this.component.instanceFactory(this.container, {
              instanceIdentifier: (n = e) === o ? void 0 : n,
              options: t,
            })),
            this.instances.set(e, r),
            this.instancesOptions.set(e, t),
            this.invokeOnInitCallbacks(r, e),
            this.component.onInstanceCreated)
          )
            try {
              this.component.onInstanceCreated(this.container, e, r);
            } catch (e) {}
          return r || null;
        }
        normalizeInstanceIdentifier(e = o) {
          return this.component
            ? this.component.multipleInstances
              ? e
              : o
            : e;
        }
        shouldAutoInitialize() {
          return (
            !!this.component && "EXPLICIT" !== this.component.instantiationMode
          );
        }
      }
      class a {
        constructor(e) {
          ((this.name = e), (this.providers = new Map()));
        }
        addComponent(e) {
          let t = this.getProvider(e.name);
          if (t.isComponentSet())
            throw Error(
              `Component ${e.name} has already been registered with ${this.name}`,
            );
          t.setComponent(e);
        }
        addOrOverwriteComponent(e) {
          (this.getProvider(e.name).isComponentSet() &&
            this.providers.delete(e.name),
            this.addComponent(e));
        }
        getProvider(e) {
          if (this.providers.has(e)) return this.providers.get(e);
          let t = new l(e, this);
          return (this.providers.set(e, t), t);
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      }
    },
    2588: (e) => {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        o = /^:\s*/,
        l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        a = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function u(e) {
        return e ? e.replace(s, "") : "";
      }
      e.exports = function (e, s) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        s = s || {};
        var c = 1,
          f = 1;
        function h(e) {
          var t = e.match(n);
          t && (c += t.length);
          var r = e.lastIndexOf("\n");
          f = ~r ? e.length - r : f + e.length;
        }
        function d() {
          var e = { line: c, column: f };
          return function (t) {
            return ((t.position = new p(e)), y(r), t);
          };
        }
        function p(e) {
          ((this.start = e),
            (this.end = { line: c, column: f }),
            (this.source = s.source));
        }
        p.prototype.content = e;
        var g = [];
        function m(t) {
          var n = Error(s.source + ":" + c + ":" + f + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = s.source),
            (n.line = c),
            (n.column = f),
            (n.source = e),
            s.silent)
          )
            g.push(n);
          else throw n;
        }
        function y(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return (h(r), (e = e.slice(r.length)), n);
          }
        }
        function b(e) {
          var t;
          for (e = e || []; (t = v()); ) !1 !== t && e.push(t);
          return e;
        }
        function v() {
          var t = d();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return m("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (f += 2),
              h(r),
              (e = e.slice(n)),
              (f += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        y(r);
        var x,
          k = [];
        for (
          b(k);
          (x = (function () {
            var e = d(),
              n = y(i);
            if (n) {
              if ((v(), !y(o))) return m("property missing ':'");
              var r = y(l),
                s = e({
                  type: "declaration",
                  property: u(n[0].replace(t, "")),
                  value: r ? u(r[0].replace(t, "")) : "",
                });
              return (y(a), s);
            }
          })());

        )
          !1 !== x && (k.push(x), b(k));
        return k;
      };
    },
    2868: (e, t, n) => {
      "use strict";
      n.d(t, { Vd: () => f });
      var r,
        i,
        o = n(4464),
        l = n(7952);
      let a = "label";
      function s(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
      }
      function u(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
          r = [];
        e.datasets = t.map((t) => {
          let i = e.datasets.find((e) => e[n] === t[n]);
          return !i || !t.data || r.includes(i)
            ? { ...t }
            : (r.push(i), Object.assign(i, t), i);
        });
      }
      let c = (0, o.forwardRef)(function (e, t) {
          let {
              height: n = 150,
              width: r = 300,
              redraw: i = !1,
              datasetIdKey: c,
              type: f,
              data: h,
              options: d,
              plugins: p = [],
              fallbackContent: g,
              updateMode: m,
              ...y
            } = e,
            b = (0, o.useRef)(null),
            v = (0, o.useRef)(null),
            x = () => {
              b.current &&
                ((v.current = new l.t1(b.current, {
                  type: f,
                  data: (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : a,
                      n = { labels: [], datasets: [] };
                    return ((n.labels = e.labels), u(n, e.datasets, t), n);
                  })(h, c),
                  options: d && { ...d },
                  plugins: p,
                })),
                s(t, v.current));
            },
            k = () => {
              (s(t, null),
                v.current && (v.current.destroy(), (v.current = null)));
            };
          return (
            (0, o.useEffect)(() => {
              !i &&
                v.current &&
                d &&
                (function (e, t) {
                  let n = e.options;
                  n && t && Object.assign(n, t);
                })(v.current, d);
            }, [i, d]),
            (0, o.useEffect)(() => {
              !i && v.current && (v.current.config.data.labels = h.labels);
            }, [i, h.labels]),
            (0, o.useEffect)(() => {
              !i &&
                v.current &&
                h.datasets &&
                u(v.current.config.data, h.datasets, c);
            }, [i, h.datasets]),
            (0, o.useEffect)(() => {
              v.current && (i ? (k(), setTimeout(x)) : v.current.update(m));
            }, [i, d, h.labels, h.datasets, m]),
            (0, o.useEffect)(() => {
              v.current && (k(), setTimeout(x));
            }, [f]),
            (0, o.useEffect)(() => (x(), () => k()), []),
            o.createElement(
              "canvas",
              { ref: b, role: "img", height: n, width: r, ...y },
              g,
            )
          );
        }),
        f =
          ((r = "radar"),
          (i = l.h9),
          l.t1.register(i),
          (0, o.forwardRef)((e, t) =>
            o.createElement(c, { ...e, ref: t, type: r }),
          ));
    },
    5061: (e, t, n) => {
      "use strict";
      n.d(t, { Wp: () => r.Wp });
      var r = n(1553);
      (0, r.KO)("firebase", "11.10.0", "app");
    },
    6195: (e, t, n) => {
      "use strict";
      let r;
      function i(e) {
        return (e + 0.5) | 0;
      }
      n.d(t, {
        $: () => tf,
        A: () => eL,
        B: () => eD,
        C: () => tu,
        D: () => eC,
        E: () => tw,
        F: () => W,
        G: () => tJ,
        H: () => ec,
        I: () => tW,
        J: () => t0,
        K: () => t1,
        L: () => eH,
        M: () => tV,
        N: () => ey,
        O: () => j,
        P: () => eo,
        Q: () => V,
        R: () => tE,
        S: () => eT,
        T: () => el,
        U: () => ew,
        V: () => tr,
        W: () => eA,
        X: () => to,
        Y: () => tc,
        Z: () => tp,
        _: () => ej,
        a: () => tC,
        a0: () => tS,
        a1: () => eV,
        a2: () => eW,
        a3: () => e8,
        a4: () => Z,
        a5: () => ee,
        a6: () => e9,
        a7: () => en,
        a8: () =>
          function e(t, n, r, i) {
            return new Proxy(
              {
                _cacheable: !1,
                _proxy: t,
                _context: n,
                _subProxy: r,
                _stack: new Set(),
                _descriptors: tO(t, i),
                setContext: (n) => e(t, n, r, i),
                override: (o) => e(t.override(o), n, r, i),
              },
              {
                deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
                get: (t, n, r) =>
                  tM(t, n, () =>
                    (function (t, n, r) {
                      let {
                          _proxy: i,
                          _context: o,
                          _subProxy: l,
                          _descriptors: a,
                        } = t,
                        s = i[n];
                      return (
                        en(s) &&
                          a.isScriptable(n) &&
                          (s = (function (e, t, n, r) {
                            let {
                              _proxy: i,
                              _context: o,
                              _subProxy: l,
                              _stack: a,
                            } = n;
                            if (a.has(e))
                              throw Error(
                                "Recursion detected: " +
                                  Array.from(a).join("->") +
                                  "->" +
                                  e,
                              );
                            a.add(e);
                            let s = t(o, l || r);
                            return (
                              a.delete(e),
                              tA(e, s) && (s = tD(i._scopes, i, e, s)),
                              s
                            );
                          })(n, s, t, r)),
                        R(s) &&
                          s.length &&
                          (s = (function (t, n, r, i) {
                            let {
                              _proxy: o,
                              _context: l,
                              _subProxy: a,
                              _descriptors: s,
                            } = r;
                            if (void 0 !== l.index && i(t))
                              return n[l.index % n.length];
                            if (F(n[0])) {
                              let r = n,
                                i = o._scopes.filter((e) => e !== r);
                              for (let u of ((n = []), r)) {
                                let r = tD(i, o, t, u);
                                n.push(e(r, l, a && a[t], s));
                              }
                            }
                            return n;
                          })(n, s, t, a.isIndexable)),
                        tA(n, s) && (s = e(s, o, l && l[n], a)),
                        s
                      );
                    })(t, n, r),
                  ),
                getOwnPropertyDescriptor: (e, n) =>
                  e._descriptors.allKeys
                    ? Reflect.has(t, n)
                      ? { enumerable: !0, configurable: !0 }
                      : void 0
                    : Reflect.getOwnPropertyDescriptor(t, n),
                getPrototypeOf: () => Reflect.getPrototypeOf(t),
                has: (e, n) => Reflect.has(t, n),
                ownKeys: () => Reflect.ownKeys(t),
                set: (e, n, r) => ((t[n] = r), delete e[n], !0),
              },
            );
          },
        a9: () => t_,
        aA: () => t4,
        aB: () => t3,
        aC: () => e$,
        aD: () => t8,
        aE: () => ts,
        aF: () => eE,
        aG: () => D,
        aH: () => ex,
        aI: () => em,
        aJ: () => ev,
        aK: () => eg,
        aL: () => eS,
        aM: () => e3,
        aN: () => ed,
        aO: () => ti,
        aP: () => eN,
        aQ: () => eP,
        aa: () => tO,
        ab: () => K,
        ac: () => L,
        ad: () => eU,
        ae: () => tG,
        af: () => tl,
        ag: () => er,
        ah: () => nl,
        ai: () => $,
        aj: () => ei,
        ak: () => eM,
        al: () => e_,
        am: () => tv,
        an: () => tU,
        ao: () => nn,
        ap: () => nt,
        aq: () => t5,
        ar: () => t6,
        as: () => t2,
        at: () => th,
        au: () => td,
        av: () => ta,
        aw: () => tg,
        ax: () => tx,
        ay: () => tk,
        az: () => ne,
        b: () => R,
        c: () => eG,
        d: () => tn,
        e: () => eQ,
        f: () => G,
        g: () => z,
        h: () => et,
        i: () => F,
        j: () => tI,
        k: () => N,
        l: () => eF,
        m: () => H,
        n: () => U,
        o: () => e6,
        p: () => eO,
        q: () => eq,
        r: () => eB,
        s: () => ep,
        t: () => ek,
        u: () => ez,
        v: () => B,
        w: () => eY,
        x: () => eb,
        y: () => tF,
        z: () => tK,
      });
      let o = (e, t, n) => Math.max(Math.min(e, n), t);
      function l(e) {
        return o(i(2.55 * e), 0, 255);
      }
      function a(e) {
        return o(i(255 * e), 0, 255);
      }
      function s(e) {
        return o(i(e / 2.55) / 100, 0, 1);
      }
      function u(e) {
        return o(i(100 * e), 0, 100);
      }
      let c = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        f = [..."0123456789ABCDEF"],
        h = (e) => f[15 & e],
        d = (e) => f[(240 & e) >> 4] + f[15 & e],
        p = (e) => (240 & e) >> 4 == (15 & e),
        g = (e) => p(e.r) && p(e.g) && p(e.b) && p(e.a),
        m = (e, t) => (e < 255 ? t(e) : ""),
        y =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function b(e, t, n) {
        let r = t * Math.min(n, 1 - n),
          i = (t, i = (t + e / 30) % 12) =>
            n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
        return [i(0), i(8), i(4)];
      }
      function v(e, t, n) {
        let r = (r, i = (r + e / 60) % 6) =>
          n - n * t * Math.max(Math.min(i, 4 - i, 1), 0);
        return [r(5), r(3), r(1)];
      }
      function x(e, t, n) {
        let r,
          i = b(e, 1, 0.5);
        for (
          t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0;
          r < 3;
          r++
        )
          ((i[r] *= 1 - t - n), (i[r] += t));
        return i;
      }
      function k(e) {
        let t,
          n,
          r,
          i = e.r / 255,
          o = e.g / 255,
          l = e.b / 255,
          a = Math.max(i, o, l),
          s = Math.min(i, o, l),
          u = (a + s) / 2;
        a !== s &&
          ((r = a - s),
          (n = u > 0.5 ? r / (2 - a - s) : r / (a + s)),
          (t =
            60 *
              (t =
                i === a
                  ? (o - l) / r + 6 * (o < l)
                  : o === a
                    ? (l - i) / r + 2
                    : (i - o) / r + 4) +
            0.5));
        return [0 | t, n || 0, u];
      }
      function w(e, t, n, r) {
        return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(a);
      }
      function S(e) {
        return ((e % 360) + 360) % 360;
      }
      let C = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        E = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        },
        I =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        _ = (e) =>
          e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055,
        O = (e) =>
          e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
      function T(e, t, n) {
        if (e) {
          let r = k(e);
          ((r[t] = Math.max(0, Math.min(r[t] + r[t] * n, 0 === t ? 360 : 1))),
            (e.r = (r = w(b, r, void 0, void 0))[0]),
            (e.g = r[1]),
            (e.b = r[2]));
        }
      }
      function A(e, t) {
        return e ? Object.assign(t || {}, e) : e;
      }
      function M(e) {
        var t = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(e)
            ? e.length >= 3 &&
              ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
              e.length > 3 && (t.a = a(e[3])))
            : ((t = A(e, { r: 0, g: 0, b: 0, a: 1 })).a = a(t.a)),
          t
        );
      }
      class P {
        constructor(e) {
          let t;
          if (e instanceof P) return e;
          let n = typeof e;
          ("object" === n
            ? (t = M(e))
            : "string" === n &&
              (t =
                (function (e) {
                  var t,
                    n = e.length;
                  return (
                    "#" === e[0] &&
                      (4 === n || 5 === n
                        ? (t = {
                            r: 255 & (17 * c[e[1]]),
                            g: 255 & (17 * c[e[2]]),
                            b: 255 & (17 * c[e[3]]),
                            a: 5 === n ? 17 * c[e[4]] : 255,
                          })
                        : (7 === n || 9 === n) &&
                          (t = {
                            r: (c[e[1]] << 4) | c[e[2]],
                            g: (c[e[3]] << 4) | c[e[4]],
                            b: (c[e[5]] << 4) | c[e[6]],
                            a: 9 === n ? (c[e[7]] << 4) | c[e[8]] : 255,
                          })),
                    t
                  );
                })(e) ||
                (function (e) {
                  r ||
                    ((r = (function () {
                      let e,
                        t,
                        n,
                        r,
                        i,
                        o = {},
                        l = Object.keys(E),
                        a = Object.keys(C);
                      for (e = 0; e < l.length; e++) {
                        for (t = 0, r = i = l[e]; t < a.length; t++)
                          ((n = a[t]), (i = i.replace(n, C[n])));
                        ((n = parseInt(E[r], 16)),
                          (o[i] = [(n >> 16) & 255, (n >> 8) & 255, 255 & n]));
                      }
                      return o;
                    })()).transparent = [0, 0, 0, 0]);
                  let t = r[e.toLowerCase()];
                  return (
                    t && {
                      r: t[0],
                      g: t[1],
                      b: t[2],
                      a: 4 === t.length ? t[3] : 255,
                    }
                  );
                })(e) ||
                (function (e) {
                  return "r" === e.charAt(0)
                    ? (function (e) {
                        let t,
                          n,
                          r,
                          i = I.exec(e),
                          a = 255;
                        if (i) {
                          if (i[7] !== t) {
                            let e = +i[7];
                            a = i[8] ? l(e) : o(255 * e, 0, 255);
                          }
                          return (
                            (t = +i[1]),
                            (n = +i[3]),
                            (r = +i[5]),
                            (t = 255 & (i[2] ? l(t) : o(t, 0, 255))),
                            {
                              r: t,
                              g: (n = 255 & (i[4] ? l(n) : o(n, 0, 255))),
                              b: (r = 255 & (i[6] ? l(r) : o(r, 0, 255))),
                              a: a,
                            }
                          );
                        }
                      })(e)
                    : (function (e) {
                        let t,
                          n = y.exec(e),
                          r = 255;
                        if (!n) return;
                        n[5] !== t && (r = n[6] ? l(+n[5]) : a(+n[5]));
                        let i = S(+n[2]),
                          o = n[3] / 100,
                          s = n[4] / 100;
                        return {
                          r: (t =
                            "hwb" === n[1]
                              ? w(x, i, o, s)
                              : "hsv" === n[1]
                                ? w(v, i, o, s)
                                : w(b, i, o, s))[0],
                          g: t[1],
                          b: t[2],
                          a: r,
                        };
                      })(e);
                })(e)),
            (this._rgb = t),
            (this._valid = !!t));
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var e = A(this._rgb);
          return (e && (e.a = s(e.a)), e);
        }
        set rgb(e) {
          this._rgb = M(e);
        }
        rgbString() {
          var e;
          return this._valid
            ? (e = this._rgb) &&
                (e.a < 255
                  ? `rgba(${e.r}, ${e.g}, ${e.b}, ${s(e.a)})`
                  : `rgb(${e.r}, ${e.g}, ${e.b})`)
            : void 0;
        }
        hexString() {
          var e, t;
          return this._valid
            ? ((t = g((e = this._rgb)) ? h : d),
              e ? "#" + t(e.r) + t(e.g) + t(e.b) + m(e.a, t) : void 0)
            : void 0;
        }
        hslString() {
          return this._valid
            ? (function (e) {
                if (!e) return;
                let t = k(e),
                  n = t[0],
                  r = u(t[1]),
                  i = u(t[2]);
                return e.a < 255
                  ? `hsla(${n}, ${r}%, ${i}%, ${s(e.a)})`
                  : `hsl(${n}, ${r}%, ${i}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(e, t) {
          if (e) {
            let n,
              r = this.rgb,
              i = e.rgb,
              o = t === n ? 0.5 : t,
              l = 2 * o - 1,
              a = r.a - i.a,
              s = ((l * a == -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
            ((n = 1 - s),
              (r.r = 255 & (s * r.r + n * i.r + 0.5)),
              (r.g = 255 & (s * r.g + n * i.g + 0.5)),
              (r.b = 255 & (s * r.b + n * i.b + 0.5)),
              (r.a = o * r.a + (1 - o) * i.a),
              (this.rgb = r));
          }
          return this;
        }
        interpolate(e, t) {
          return (
            e &&
              (this._rgb = (function (e, t, n) {
                let r = O(s(e.r)),
                  i = O(s(e.g)),
                  o = O(s(e.b));
                return {
                  r: a(_(r + n * (O(s(t.r)) - r))),
                  g: a(_(i + n * (O(s(t.g)) - i))),
                  b: a(_(o + n * (O(s(t.b)) - o))),
                  a: e.a + n * (t.a - e.a),
                };
              })(this._rgb, e._rgb, t)),
            this
          );
        }
        clone() {
          return new P(this.rgb);
        }
        alpha(e) {
          return ((this._rgb.a = a(e)), this);
        }
        clearer(e) {
          let t = this._rgb;
          return ((t.a *= 1 - e), this);
        }
        greyscale() {
          let e = this._rgb,
            t = i(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
          return ((e.r = e.g = e.b = t), this);
        }
        opaquer(e) {
          let t = this._rgb;
          return ((t.a *= 1 + e), this);
        }
        negate() {
          let e = this._rgb;
          return (
            (e.r = 255 - e.r),
            (e.g = 255 - e.g),
            (e.b = 255 - e.b),
            this
          );
        }
        lighten(e) {
          return (T(this._rgb, 2, e), this);
        }
        darken(e) {
          return (T(this._rgb, 2, -e), this);
        }
        saturate(e) {
          return (T(this._rgb, 1, e), this);
        }
        desaturate(e) {
          return (T(this._rgb, 1, -e), this);
        }
        rotate(e) {
          var t, n;
          return (
            (t = this._rgb),
            ((n = k(t))[0] = S(n[0] + e)),
            (t.r = (n = w(b, n, void 0, void 0))[0]),
            (t.g = n[1]),
            (t.b = n[2]),
            this
          );
        }
      }
      function D() {}
      let L = (() => {
        let e = 0;
        return () => e++;
      })();
      function N(e) {
        return null == e;
      }
      function R(e) {
        if (Array.isArray && Array.isArray(e)) return !0;
        let t = Object.prototype.toString.call(e);
        return "[object" === t.slice(0, 7) && "Array]" === t.slice(-6);
      }
      function F(e) {
        return (
          null !== e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      function z(e) {
        return ("number" == typeof e || e instanceof Number) && isFinite(+e);
      }
      function j(e, t) {
        return z(e) ? e : t;
      }
      function B(e, t) {
        return void 0 === e ? t : e;
      }
      let H = (e, t) =>
          "string" == typeof e && e.endsWith("%") ? parseFloat(e) / 100 : e / t,
        U = (e, t) =>
          "string" == typeof e && e.endsWith("%")
            ? (parseFloat(e) / 100) * t
            : +e;
      function V(e, t, n) {
        if (e && "function" == typeof e.call) return e.apply(n, t);
      }
      function W(e, t, n, r) {
        let i, o, l;
        if (R(e))
          if (((o = e.length), r))
            for (i = o - 1; i >= 0; i--) t.call(n, e[i], i);
          else for (i = 0; i < o; i++) t.call(n, e[i], i);
        else if (F(e))
          for (i = 0, o = (l = Object.keys(e)).length; i < o; i++)
            t.call(n, e[l[i]], l[i]);
      }
      function $(e, t) {
        let n, r, i, o;
        if (!e || !t || e.length !== t.length) return !1;
        for (n = 0, r = e.length; n < r; ++n)
          if (
            ((i = e[n]),
            (o = t[n]),
            i.datasetIndex !== o.datasetIndex || i.index !== o.index)
          )
            return !1;
        return !0;
      }
      function q(e) {
        if (R(e)) return e.map(q);
        if (F(e)) {
          let t = Object.create(null),
            n = Object.keys(e),
            r = n.length,
            i = 0;
          for (; i < r; ++i) t[n[i]] = q(e[n[i]]);
          return t;
        }
        return e;
      }
      function Y(e) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(e);
      }
      function X(e, t, n, r) {
        if (!Y(e)) return;
        let i = t[e],
          o = n[e];
        F(i) && F(o) ? Z(i, o, r) : (t[e] = q(o));
      }
      function Z(e, t, n) {
        let r,
          i = R(t) ? t : [t],
          o = i.length;
        if (!F(e)) return e;
        let l = (n = n || {}).merger || X;
        for (let t = 0; t < o; ++t) {
          if (!F((r = i[t]))) continue;
          let o = Object.keys(r);
          for (let t = 0, i = o.length; t < i; ++t) l(o[t], e, r, n);
        }
        return e;
      }
      function K(e, t) {
        return Z(e, t, { merger: Q });
      }
      function Q(e, t, n) {
        if (!Y(e)) return;
        let r = t[e],
          i = n[e];
        F(r) && F(i)
          ? K(r, i)
          : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = q(i));
      }
      let J = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
      function G(e, t) {
        return (
          J[t] ||
          (J[t] = (function (e) {
            let t = (function (e) {
              let t = e.split("."),
                n = [],
                r = "";
              for (let e of t)
                (r += e).endsWith("\\")
                  ? (r = r.slice(0, -1) + ".")
                  : (n.push(r), (r = ""));
              return n;
            })(e);
            return (e) => {
              for (let n of t) {
                if ("" === n) break;
                e = e && e[n];
              }
              return e;
            };
          })(t))
        )(e);
      }
      function ee(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      let et = (e) => void 0 !== e,
        en = (e) => "function" == typeof e,
        er = (e, t) => {
          if (e.size !== t.size) return !1;
          for (let n of e) if (!t.has(n)) return !1;
          return !0;
        };
      function ei(e) {
        return (
          "mouseup" === e.type || "click" === e.type || "contextmenu" === e.type
        );
      }
      let eo = Math.PI,
        el = 2 * eo,
        ea = el + eo,
        es = Number.POSITIVE_INFINITY,
        eu = eo / 180,
        ec = eo / 2,
        ef = eo / 4,
        eh = (2 * eo) / 3,
        ed = Math.log10,
        ep = Math.sign;
      function eg(e, t, n) {
        return Math.abs(e - t) < n;
      }
      function em(e) {
        let t = Math.round(e),
          n = Math.pow(10, Math.floor(ed((e = eg(e, t, e / 1e3) ? t : e)))),
          r = e / n;
        return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
      }
      function ey(e) {
        let t,
          n = [],
          r = Math.sqrt(e);
        for (t = 1; t < r; t++) e % t == 0 && (n.push(t), n.push(e / t));
        return (r === (0 | r) && n.push(r), n.sort((e, t) => e - t).pop(), n);
      }
      function eb(e) {
        return (
          "symbol" != typeof e &&
          ("object" != typeof e ||
            null === e ||
            !!(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e)) &&
          !isNaN(parseFloat(e)) &&
          isFinite(e)
        );
      }
      function ev(e, t) {
        let n = Math.round(e);
        return n - t <= e && n + t >= e;
      }
      function ex(e, t, n) {
        let r, i, o;
        for (r = 0, i = e.length; r < i; r++)
          isNaN((o = e[r][n])) ||
            ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
      }
      function ek(e) {
        return (eo / 180) * e;
      }
      function ew(e) {
        return (180 / eo) * e;
      }
      function eS(e) {
        if (!z(e)) return;
        let t = 1,
          n = 0;
        for (; Math.round(e * t) / t !== e; ) ((t *= 10), n++);
        return n;
      }
      function eC(e, t) {
        let n = t.x - e.x,
          r = t.y - e.y,
          i = Math.sqrt(n * n + r * r),
          o = Math.atan2(r, n);
        return (o < -0.5 * eo && (o += el), { angle: o, distance: i });
      }
      function eE(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function eI(e, t) {
        return ((e - t + ea) % el) - eo;
      }
      function e_(e) {
        return ((e % el) + el) % el;
      }
      function eO(e, t, n, r) {
        let i = e_(e),
          o = e_(t),
          l = e_(n),
          a = e_(o - i),
          s = e_(l - i),
          u = e_(i - o),
          c = e_(i - l);
        return i === o || i === l || (r && o === l) || (a > s && u < c);
      }
      function eT(e, t, n) {
        return Math.max(t, Math.min(n, e));
      }
      function eA(e) {
        return eT(e, -32768, 32767);
      }
      function eM(e, t, n, r = 1e-6) {
        return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
      }
      function eP(e, t, n) {
        let r;
        n = n || ((n) => e[n] < t);
        let i = e.length - 1,
          o = 0;
        for (; i - o > 1; ) n((r = (o + i) >> 1)) ? (o = r) : (i = r);
        return { lo: o, hi: i };
      }
      let eD = (e, t, n, r) =>
          eP(
            e,
            n,
            r
              ? (r) => {
                  let i = e[r][t];
                  return i < n || (i === n && e[r + 1][t] === n);
                }
              : (r) => e[r][t] < n,
          ),
        eL = (e, t, n) => eP(e, n, (r) => e[r][t] >= n);
      function eN(e, t, n) {
        let r = 0,
          i = e.length;
        for (; r < i && e[r] < t; ) r++;
        for (; i > r && e[i - 1] > n; ) i--;
        return r > 0 || i < e.length ? e.slice(r, i) : e;
      }
      let eR = ["push", "pop", "shift", "splice", "unshift"];
      function eF(e, t) {
        if (e._chartjs) return void e._chartjs.listeners.push(t);
        (Object.defineProperty(e, "_chartjs", {
          configurable: !0,
          enumerable: !1,
          value: { listeners: [t] },
        }),
          eR.forEach((t) => {
            let n = "_onData" + ee(t),
              r = e[t];
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !1,
              value(...t) {
                let i = r.apply(this, t);
                return (
                  e._chartjs.listeners.forEach((e) => {
                    "function" == typeof e[n] && e[n](...t);
                  }),
                  i
                );
              },
            });
          }));
      }
      function ez(e, t) {
        let n = e._chartjs;
        if (!n) return;
        let r = n.listeners,
          i = r.indexOf(t);
        (-1 !== i && r.splice(i, 1),
          r.length > 0 ||
            (eR.forEach((t) => {
              delete e[t];
            }),
            delete e._chartjs));
      }
      function ej(e) {
        let t = new Set(e);
        return t.size === e.length ? e : Array.from(t);
      }
      let eB =
        "undefined" == typeof window
          ? function (e) {
              return e();
            }
          : window.requestAnimationFrame;
      function eH(e, t) {
        let n = [],
          r = !1;
        return function (...i) {
          ((n = i),
            r ||
              ((r = !0),
              eB.call(window, () => {
                ((r = !1), e.apply(t, n));
              })));
        };
      }
      function eU(e, t) {
        let n;
        return function (...r) {
          return (
            t ? (clearTimeout(n), (n = setTimeout(e, t, r))) : e.apply(this, r),
            t
          );
        };
      }
      let eV = (e) =>
          "start" === e ? "left" : "end" === e ? "right" : "center",
        eW = (e, t, n) => ("start" === e ? t : "end" === e ? n : (t + n) / 2),
        e$ = (e, t, n, r) =>
          e === (r ? "left" : "right") ? n : "center" === e ? (t + n) / 2 : t;
      function eq(e, t, n) {
        let r = t.length,
          i = 0,
          o = r;
        if (e._sorted) {
          let { iScale: l, vScale: a, _parsed: s } = e,
            u =
              e.dataset && e.dataset.options
                ? e.dataset.options.spanGaps
                : null,
            c = l.axis,
            {
              min: f,
              max: h,
              minDefined: d,
              maxDefined: p,
            } = l.getUserBounds();
          if (d) {
            if (
              ((i = Math.min(
                eD(s, c, f).lo,
                n ? r : eD(t, c, l.getPixelForValue(f)).lo,
              )),
              u)
            ) {
              let e = s
                .slice(0, i + 1)
                .reverse()
                .findIndex((e) => !N(e[a.axis]));
              i -= Math.max(0, e);
            }
            i = eT(i, 0, r - 1);
          }
          if (p) {
            let e = Math.max(
              eD(s, l.axis, h, !0).hi + 1,
              n ? 0 : eD(t, c, l.getPixelForValue(h), !0).hi + 1,
            );
            if (u) {
              let t = s.slice(e - 1).findIndex((e) => !N(e[a.axis]));
              e += Math.max(0, t);
            }
            o = eT(e, i, r) - i;
          } else o = r - i;
        }
        return { start: i, count: o };
      }
      function eY(e) {
        let { xScale: t, yScale: n, _scaleRanges: r } = e,
          i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
        if (!r) return ((e._scaleRanges = i), !0);
        let o =
          r.xmin !== t.min ||
          r.xmax !== t.max ||
          r.ymin !== n.min ||
          r.ymax !== n.max;
        return (Object.assign(r, i), o);
      }
      let eX = (e) => 0 === e || 1 === e,
        eZ = (e, t, n) =>
          -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * el) / n)),
        eK = (e, t, n) =>
          Math.pow(2, -10 * e) * Math.sin(((e - t) * el) / n) + 1,
        eQ = {
          linear: (e) => e,
          easeInQuad: (e) => e * e,
          easeOutQuad: (e) => -e * (e - 2),
          easeInOutQuad: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
          easeInCubic: (e) => e * e * e,
          easeOutCubic: (e) => (e -= 1) * e * e + 1,
          easeInOutCubic: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
          easeInQuart: (e) => e * e * e * e,
          easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
          easeInOutQuart: (e) =>
            (e /= 0.5) < 1
              ? 0.5 * e * e * e * e
              : -0.5 * ((e -= 2) * e * e * e - 2),
          easeInQuint: (e) => e * e * e * e * e,
          easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
          easeInOutQuint: (e) =>
            (e /= 0.5) < 1
              ? 0.5 * e * e * e * e * e
              : 0.5 * ((e -= 2) * e * e * e * e + 2),
          easeInSine: (e) => -Math.cos(e * ec) + 1,
          easeOutSine: (e) => Math.sin(e * ec),
          easeInOutSine: (e) => -0.5 * (Math.cos(eo * e) - 1),
          easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * (e - 1))),
          easeOutExpo: (e) => (1 === e ? 1 : -Math.pow(2, -10 * e) + 1),
          easeInOutExpo: (e) =>
            eX(e)
              ? e
              : e < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * e - 1))
                : 0.5 * (-Math.pow(2, -10 * (2 * e - 1)) + 2),
          easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
          easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
          easeInOutCirc: (e) =>
            (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
          easeInElastic: (e) => (eX(e) ? e : eZ(e, 0.075, 0.3)),
          easeOutElastic: (e) => (eX(e) ? e : eK(e, 0.075, 0.3)),
          easeInOutElastic: (e) =>
            eX(e)
              ? e
              : e < 0.5
                ? 0.5 * eZ(2 * e, 0.1125, 0.45)
                : 0.5 + 0.5 * eK(2 * e - 1, 0.1125, 0.45),
          easeInBack: (e) => e * e * (2.70158 * e - 1.70158),
          easeOutBack: (e) => (e -= 1) * e * (2.70158 * e + 1.70158) + 1,
          easeInOutBack(e) {
            let t = 1.70158;
            return (e /= 0.5) < 1
              ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
              : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
          },
          easeInBounce: (e) => 1 - eQ.easeOutBounce(1 - e),
          easeOutBounce: (e) =>
            e < 0.36363636363636365
              ? 7.5625 * e * e
              : e < 0.7272727272727273
                ? 7.5625 * (e -= 0.5454545454545454) * e + 0.75
                : e < 0.9090909090909091
                  ? 7.5625 * (e -= 0.8181818181818182) * e + 0.9375
                  : 7.5625 * (e -= 0.9545454545454546) * e + 0.984375,
          easeInOutBounce: (e) =>
            e < 0.5
              ? 0.5 * eQ.easeInBounce(2 * e)
              : 0.5 * eQ.easeOutBounce(2 * e - 1) + 0.5,
        };
      function eJ(e) {
        if (e && "object" == typeof e) {
          let t = e.toString();
          return (
            "[object CanvasPattern]" === t || "[object CanvasGradient]" === t
          );
        }
        return !1;
      }
      function eG(e) {
        return eJ(e) ? e : new P(e);
      }
      function e1(e) {
        return eJ(e) ? e : new P(e).saturate(0.5).darken(0.1).hexString();
      }
      let e0 = ["x", "y", "borderWidth", "radius", "tension"],
        e2 = ["color", "borderColor", "backgroundColor"],
        e5 = new Map();
      function e6(e, t, n) {
        return (function (e, t) {
          let n = e + JSON.stringify((t = t || {})),
            r = e5.get(n);
          return (r || ((r = new Intl.NumberFormat(e, t)), e5.set(n, r)), r);
        })(t, n).format(e);
      }
      let e4 = {
        values: (e) => (R(e) ? e : "" + e),
        numeric(e, t, n) {
          let r;
          if (0 === e) return "0";
          let i = this.chart.options.locale,
            o = e;
          if (n.length > 1) {
            var l, a;
            let t,
              i = Math.max(
                Math.abs(n[0].value),
                Math.abs(n[n.length - 1].value),
              );
            ((i < 1e-4 || i > 1e15) && (r = "scientific"),
              (l = e),
              Math.abs(
                (t =
                  (a = n).length > 3
                    ? a[2].value - a[1].value
                    : a[1].value - a[0].value),
              ) >= 1 &&
                l !== Math.floor(l) &&
                (t = l - Math.floor(l)),
              (o = t));
          }
          let s = ed(Math.abs(o)),
            u = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0),
            c = {
              notation: r,
              minimumFractionDigits: u,
              maximumFractionDigits: u,
            };
          return (Object.assign(c, this.options.ticks.format), e6(e, i, c));
        },
        logarithmic(e, t, n) {
          return 0 === e
            ? "0"
            : [1, 2, 3, 5, 10, 15].includes(
                  n[t].significand || e / Math.pow(10, Math.floor(ed(e))),
                ) || t > 0.8 * n.length
              ? e4.numeric.call(this, e, t, n)
              : "";
        },
      };
      var e3 = { formatters: e4 };
      let e8 = Object.create(null),
        e9 = Object.create(null);
      function e7(e, t) {
        if (!t) return e;
        let n = t.split(".");
        for (let t = 0, r = n.length; t < r; ++t) {
          let r = n[t];
          e = e[r] || (e[r] = Object.create(null));
        }
        return e;
      }
      function te(e, t, n) {
        return "string" == typeof t ? Z(e7(e, t), n) : Z(e7(e, ""), t);
      }
      class tt {
        constructor(e, t) {
          ((this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (e) =>
              e.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (e, t) => e1(t.backgroundColor)),
            (this.hoverBorderColor = (e, t) => e1(t.borderColor)),
            (this.hoverColor = (e, t) => e1(t.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(e),
            this.apply(t));
        }
        set(e, t) {
          return te(this, e, t);
        }
        get(e) {
          return e7(this, e);
        }
        describe(e, t) {
          return te(e9, e, t);
        }
        override(e, t) {
          return te(e8, e, t);
        }
        route(e, t, n, r) {
          let i = e7(this, e),
            o = e7(this, n),
            l = "_" + t;
          Object.defineProperties(i, {
            [l]: { value: i[t], writable: !0 },
            [t]: {
              enumerable: !0,
              get() {
                let e = this[l],
                  t = o[r];
                return F(e) ? Object.assign({}, t, e) : B(e, t);
              },
              set(e) {
                this[l] = e;
              },
            },
          });
        }
        apply(e) {
          e.forEach((e) => e(this));
        }
      }
      var tn = new tt(
        {
          _scriptable: (e) => !e.startsWith("on"),
          _indexable: (e) => "events" !== e,
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (e) {
            (e.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              e.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (e) =>
                  "onProgress" !== e && "onComplete" !== e && "fn" !== e,
              }),
              e.set("animations", {
                colors: { type: "color", properties: e2 },
                numbers: { type: "number", properties: e0 },
              }),
              e.describe("animations", { _fallback: "animation" }),
              e.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: (e) => 0 | e,
                    },
                  },
                },
              }));
          },
          function (e) {
            e.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function (e) {
            (e.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (e, t) => t.lineWidth,
                tickColor: (e, t) => t.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: e3.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              e.route("scale.ticks", "color", "", "color"),
              e.route("scale.grid", "color", "", "borderColor"),
              e.route("scale.border", "color", "", "borderColor"),
              e.route("scale.title", "color", "", "color"),
              e.describe("scale", {
                _fallback: !1,
                _scriptable: (e) =>
                  !e.startsWith("before") &&
                  !e.startsWith("after") &&
                  "callback" !== e &&
                  "parser" !== e,
                _indexable: (e) =>
                  "borderDash" !== e && "tickBorderDash" !== e && "dash" !== e,
              }),
              e.describe("scales", { _fallback: "scale" }),
              e.describe("scale.ticks", {
                _scriptable: (e) => "backdropPadding" !== e && "callback" !== e,
                _indexable: (e) => "backdropPadding" !== e,
              }));
          },
        ],
      );
      function tr(e, t, n, r, i) {
        let o = t[i];
        return (
          o || ((o = t[i] = e.measureText(i).width), n.push(i)),
          o > r && (r = o),
          r
        );
      }
      function ti(e, t, n, r) {
        let i,
          o,
          l,
          a,
          s,
          u = ((r = r || {}).data = r.data || {}),
          c = (r.garbageCollect = r.garbageCollect || []);
        (r.font !== t &&
          ((u = r.data = {}), (c = r.garbageCollect = []), (r.font = t)),
          e.save(),
          (e.font = t));
        let f = 0,
          h = n.length;
        for (i = 0; i < h; i++)
          if (null == (a = n[i]) || R(a)) {
            if (R(a))
              for (o = 0, l = a.length; o < l; o++)
                null == (s = a[o]) || R(s) || (f = tr(e, u, c, f, s));
          } else f = tr(e, u, c, f, a);
        e.restore();
        let d = c.length / 2;
        if (d > n.length) {
          for (i = 0; i < d; i++) delete u[c[i]];
          c.splice(0, d);
        }
        return f;
      }
      function to(e, t, n) {
        let r = e.currentDevicePixelRatio,
          i = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((t - i) * r) / r + i;
      }
      function tl(e, t) {
        (t || e) &&
          ((t = t || e.getContext("2d")).save(),
          t.resetTransform(),
          t.clearRect(0, 0, e.width, e.height),
          t.restore());
      }
      function ta(e, t, n, r) {
        ts(e, t, n, r, null);
      }
      function ts(e, t, n, r, i) {
        let o,
          l,
          a,
          s,
          u,
          c,
          f,
          h,
          d = t.pointStyle,
          p = t.rotation,
          g = t.radius,
          m = (p || 0) * eu;
        if (
          d &&
          "object" == typeof d &&
          ("[object HTMLImageElement]" === (o = d.toString()) ||
            "[object HTMLCanvasElement]" === o)
        ) {
          (e.save(),
            e.translate(n, r),
            e.rotate(m),
            e.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
            e.restore());
          return;
        }
        if (!isNaN(g) && !(g <= 0)) {
          switch ((e.beginPath(), d)) {
            default:
              (i ? e.ellipse(n, r, i / 2, g, 0, 0, el) : e.arc(n, r, g, 0, el),
                e.closePath());
              break;
            case "triangle":
              ((c = i ? i / 2 : g),
                e.moveTo(n + Math.sin(m) * c, r - Math.cos(m) * g),
                (m += eh),
                e.lineTo(n + Math.sin(m) * c, r - Math.cos(m) * g),
                (m += eh),
                e.lineTo(n + Math.sin(m) * c, r - Math.cos(m) * g),
                e.closePath());
              break;
            case "rectRounded":
              ((u = 0.516 * g),
                (l = Math.cos(m + ef) * (s = g - u)),
                (f = Math.cos(m + ef) * (i ? i / 2 - u : s)),
                (a = Math.sin(m + ef) * s),
                (h = Math.sin(m + ef) * (i ? i / 2 - u : s)),
                e.arc(n - f, r - a, u, m - eo, m - ec),
                e.arc(n + h, r - l, u, m - ec, m),
                e.arc(n + f, r + a, u, m, m + ec),
                e.arc(n - h, r + l, u, m + ec, m + eo),
                e.closePath());
              break;
            case "rect":
              if (!p) {
                ((s = Math.SQRT1_2 * g),
                  (c = i ? i / 2 : s),
                  e.rect(n - c, r - s, 2 * c, 2 * s));
                break;
              }
              m += ef;
            case "rectRot":
              ((f = Math.cos(m) * (i ? i / 2 : g)),
                (l = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (h = Math.sin(m) * (i ? i / 2 : g)),
                e.moveTo(n - f, r - a),
                e.lineTo(n + h, r - l),
                e.lineTo(n + f, r + a),
                e.lineTo(n - h, r + l),
                e.closePath());
              break;
            case "crossRot":
              m += ef;
            case "cross":
              ((f = Math.cos(m) * (i ? i / 2 : g)),
                (l = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (h = Math.sin(m) * (i ? i / 2 : g)),
                e.moveTo(n - f, r - a),
                e.lineTo(n + f, r + a),
                e.moveTo(n + h, r - l),
                e.lineTo(n - h, r + l));
              break;
            case "star":
              ((f = Math.cos(m) * (i ? i / 2 : g)),
                (l = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (h = Math.sin(m) * (i ? i / 2 : g)),
                e.moveTo(n - f, r - a),
                e.lineTo(n + f, r + a),
                e.moveTo(n + h, r - l),
                e.lineTo(n - h, r + l),
                (m += ef),
                (f = Math.cos(m) * (i ? i / 2 : g)),
                (l = Math.cos(m) * g),
                (a = Math.sin(m) * g),
                (h = Math.sin(m) * (i ? i / 2 : g)),
                e.moveTo(n - f, r - a),
                e.lineTo(n + f, r + a),
                e.moveTo(n + h, r - l),
                e.lineTo(n - h, r + l));
              break;
            case "line":
              ((l = i ? i / 2 : Math.cos(m) * g),
                (a = Math.sin(m) * g),
                e.moveTo(n - l, r - a),
                e.lineTo(n + l, r + a));
              break;
            case "dash":
              (e.moveTo(n, r),
                e.lineTo(
                  n + Math.cos(m) * (i ? i / 2 : g),
                  r + Math.sin(m) * g,
                ));
              break;
            case !1:
              e.closePath();
          }
          (e.fill(), t.borderWidth > 0 && e.stroke());
        }
      }
      function tu(e, t, n) {
        return (
          (n = n || 0.5),
          !t ||
            (e &&
              e.x > t.left - n &&
              e.x < t.right + n &&
              e.y > t.top - n &&
              e.y < t.bottom + n)
        );
      }
      function tc(e, t) {
        (e.save(),
          e.beginPath(),
          e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
          e.clip());
      }
      function tf(e) {
        e.restore();
      }
      function th(e, t, n, r, i) {
        if (!t) return e.lineTo(n.x, n.y);
        if ("middle" === i) {
          let r = (t.x + n.x) / 2;
          (e.lineTo(r, t.y), e.lineTo(r, n.y));
        } else ("after" === i) != !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
        e.lineTo(n.x, n.y);
      }
      function td(e, t, n, r) {
        if (!t) return e.lineTo(n.x, n.y);
        e.bezierCurveTo(
          r ? t.cp1x : t.cp2x,
          r ? t.cp1y : t.cp2y,
          r ? n.cp2x : n.cp1x,
          r ? n.cp2y : n.cp1y,
          n.x,
          n.y,
        );
      }
      function tp(e, t, n, r, i, o = {}) {
        let l,
          a,
          s = R(t) ? t : [t],
          u = o.strokeWidth > 0 && "" !== o.strokeColor;
        for (
          e.save(),
            e.font = i.string,
            o.translation && e.translate(o.translation[0], o.translation[1]),
            N(o.rotation) || e.rotate(o.rotation),
            o.color && (e.fillStyle = o.color),
            o.textAlign && (e.textAlign = o.textAlign),
            o.textBaseline && (e.textBaseline = o.textBaseline),
            l = 0;
          l < s.length;
          ++l
        )
          ((a = s[l]),
            o.backdrop &&
              (function (e, t) {
                let n = e.fillStyle;
                ((e.fillStyle = t.color),
                  e.fillRect(t.left, t.top, t.width, t.height),
                  (e.fillStyle = n));
              })(e, o.backdrop),
            u &&
              (o.strokeColor && (e.strokeStyle = o.strokeColor),
              N(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
              e.strokeText(a, n, r, o.maxWidth)),
            e.fillText(a, n, r, o.maxWidth),
            (function (e, t, n, r, i) {
              if (i.strikethrough || i.underline) {
                let o = e.measureText(r),
                  l = t - o.actualBoundingBoxLeft,
                  a = t + o.actualBoundingBoxRight,
                  s = n - o.actualBoundingBoxAscent,
                  u = n + o.actualBoundingBoxDescent,
                  c = i.strikethrough ? (s + u) / 2 : u;
                ((e.strokeStyle = e.fillStyle),
                  e.beginPath(),
                  (e.lineWidth = i.decorationWidth || 2),
                  e.moveTo(l, c),
                  e.lineTo(a, c),
                  e.stroke());
              }
            })(e, n, r, a, o),
            (r += Number(i.lineHeight)));
        e.restore();
      }
      function tg(e, t) {
        let { x: n, y: r, w: i, h: o, radius: l } = t;
        (e.arc(n + l.topLeft, r + l.topLeft, l.topLeft, 1.5 * eo, eo, !0),
          e.lineTo(n, r + o - l.bottomLeft),
          e.arc(
            n + l.bottomLeft,
            r + o - l.bottomLeft,
            l.bottomLeft,
            eo,
            ec,
            !0,
          ),
          e.lineTo(n + i - l.bottomRight, r + o),
          e.arc(
            n + i - l.bottomRight,
            r + o - l.bottomRight,
            l.bottomRight,
            ec,
            0,
            !0,
          ),
          e.lineTo(n + i, r + l.topRight),
          e.arc(n + i - l.topRight, r + l.topRight, l.topRight, 0, -ec, !0),
          e.lineTo(n + l.topLeft, r));
      }
      let tm = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        ty =
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
        tb = (e) => +e || 0;
      function tv(e, t) {
        let n = {},
          r = F(t),
          i = r ? Object.keys(t) : t,
          o = F(e) ? (r ? (n) => B(e[n], e[t[n]]) : (t) => e[t]) : () => e;
        for (let e of i) n[e] = tb(o(e));
        return n;
      }
      function tx(e) {
        return tv(e, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function tk(e) {
        return tv(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function tw(e) {
        let t = tx(e);
        return ((t.width = t.left + t.right), (t.height = t.top + t.bottom), t);
      }
      function tS(e, t) {
        ((e = e || {}), (t = t || tn.font));
        let n = B(e.size, t.size);
        "string" == typeof n && (n = parseInt(n, 10));
        let r = B(e.style, t.style);
        r &&
          !("" + r).match(ty) &&
          (console.warn('Invalid font style specified: "' + r + '"'),
          (r = void 0));
        let i = {
          family: B(e.family, t.family),
          lineHeight: (function (e, t) {
            let n = ("" + e).match(tm);
            if (!n || "normal" === n[1]) return 1.2 * t;
            switch (((e = +n[2]), n[3])) {
              case "px":
                return e;
              case "%":
                e /= 100;
            }
            return t * e;
          })(B(e.lineHeight, t.lineHeight), n),
          size: n,
          style: r,
          weight: B(e.weight, t.weight),
          string: "",
        };
        return (
          (i.string =
            !i || N(i.size) || N(i.family)
              ? null
              : (i.style ? i.style + " " : "") +
                (i.weight ? i.weight + " " : "") +
                i.size +
                "px " +
                i.family),
          i
        );
      }
      function tC(e, t, n, r) {
        let i,
          o,
          l,
          a = !0;
        for (i = 0, o = e.length; i < o; ++i)
          if (
            void 0 !== (l = e[i]) &&
            (void 0 !== t && "function" == typeof l && ((l = l(t)), (a = !1)),
            void 0 !== n && R(l) && ((l = l[n % l.length]), (a = !1)),
            void 0 !== l)
          )
            return (r && !a && (r.cacheable = !1), l);
      }
      function tE(e, t, n) {
        let { min: r, max: i } = e,
          o = U(t, (i - r) / 2),
          l = (e, t) => (n && 0 === e ? 0 : e + t);
        return { min: l(r, -Math.abs(o)), max: l(i, o) };
      }
      function tI(e, t) {
        return Object.assign(Object.create(e), t);
      }
      function t_(e, t = [""], n, r, i = () => e[0]) {
        let o = n || e;
        return (
          void 0 === r && (r = tN("_fallback", e)),
          new Proxy(
            {
              [Symbol.toStringTag]: "Object",
              _cacheable: !0,
              _scopes: e,
              _rootScopes: o,
              _fallback: r,
              _getTarget: i,
              override: (n) => t_([n, ...e], t, o, r),
            },
            {
              deleteProperty: (t, n) => (
                delete t[n],
                delete t._keys,
                delete e[0][n],
                !0
              ),
              get: (n, r) =>
                tM(n, r, () =>
                  (function (e, t, n, r) {
                    let i;
                    for (let o of t)
                      if (void 0 !== (i = tN(tT(o, e), n)))
                        return tA(e, i) ? tD(n, r, e, i) : i;
                  })(r, t, e, n),
                ),
              getOwnPropertyDescriptor: (e, t) =>
                Reflect.getOwnPropertyDescriptor(e._scopes[0], t),
              getPrototypeOf: () => Reflect.getPrototypeOf(e[0]),
              has: (e, t) => tR(e).includes(t),
              ownKeys: (e) => tR(e),
              set(e, t, n) {
                let r = e._storage || (e._storage = i());
                return ((e[t] = r[t] = n), delete e._keys, !0);
              },
            },
          )
        );
      }
      function tO(e, t = { scriptable: !0, indexable: !0 }) {
        let {
          _scriptable: n = t.scriptable,
          _indexable: r = t.indexable,
          _allKeys: i = t.allKeys,
        } = e;
        return {
          allKeys: i,
          scriptable: n,
          indexable: r,
          isScriptable: en(n) ? n : () => n,
          isIndexable: en(r) ? r : () => r,
        };
      }
      let tT = (e, t) => (e ? e + ee(t) : t),
        tA = (e, t) =>
          F(t) &&
          "adapters" !== e &&
          (null === Object.getPrototypeOf(t) || t.constructor === Object);
      function tM(e, t, n) {
        if (Object.prototype.hasOwnProperty.call(e, t) || "constructor" === t)
          return e[t];
        let r = n();
        return ((e[t] = r), r);
      }
      let tP = (e, t) =>
        !0 === e ? t : "string" == typeof e ? G(t, e) : void 0;
      function tD(e, t, n, r) {
        var i;
        let o = t._rootScopes,
          l = ((i = t._fallback), en(i) ? i(n, r) : i),
          a = [...e, ...o],
          s = new Set();
        s.add(r);
        let u = tL(s, a, n, l || n, r);
        return (
          null !== u &&
          (void 0 === l || l === n || null !== (u = tL(s, a, l, u, r))) &&
          t_(Array.from(s), [""], o, l, () =>
            (function (e, t, n) {
              let r = e._getTarget();
              t in r || (r[t] = {});
              let i = r[t];
              return R(i) && F(n) ? n : i || {};
            })(t, n, r),
          )
        );
      }
      function tL(e, t, n, r, i) {
        for (; n; )
          n = (function (e, t, n, r, i) {
            for (let l of t) {
              let t = tP(n, l);
              if (t) {
                var o;
                e.add(t);
                let l = ((o = t._fallback), en(o) ? o(n, i) : o);
                if (void 0 !== l && l !== n && l !== r) return l;
              } else if (!1 === t && void 0 !== r && n !== r) return null;
            }
            return !1;
          })(e, t, n, r, i);
        return n;
      }
      function tN(e, t) {
        for (let n of t) {
          if (!n) continue;
          let t = n[e];
          if (void 0 !== t) return t;
        }
      }
      function tR(e) {
        let t = e._keys;
        return (
          t ||
            (t = e._keys =
              (function (e) {
                let t = new Set();
                for (let n of e)
                  for (let e of Object.keys(n).filter(
                    (e) => !e.startsWith("_"),
                  ))
                    t.add(e);
                return Array.from(t);
              })(e._scopes)),
          t
        );
      }
      function tF(e, t, n, r) {
        let i,
          o,
          l,
          { iScale: a } = e,
          { key: s = "r" } = this._parsing,
          u = Array(r);
        for (i = 0; i < r; ++i)
          ((l = t[(o = i + n)]), (u[i] = { r: a.parse(G(l, s), o) }));
        return u;
      }
      let tz = Number.EPSILON || 1e-14,
        tj = (e, t) => t < e.length && !e[t].skip && e[t],
        tB = (e) => ("x" === e ? "y" : "x");
      function tH(e, t, n) {
        return Math.max(Math.min(e, n), t);
      }
      function tU(e, t, n, r, i) {
        let o, l, a, s;
        if (
          (t.spanGaps && (e = e.filter((e) => !e.skip)),
          "monotone" === t.cubicInterpolationMode)
        )
          !(function (e, t = "x") {
            let n,
              r,
              i,
              o = tB(t),
              l = e.length,
              a = Array(l).fill(0),
              s = Array(l),
              u = tj(e, 0);
            for (n = 0; n < l; ++n)
              if (((r = i), (i = u), (u = tj(e, n + 1)), i)) {
                if (u) {
                  let e = u[t] - i[t];
                  a[n] = 0 !== e ? (u[o] - i[o]) / e : 0;
                }
                s[n] = r
                  ? u
                    ? ep(a[n - 1]) !== ep(a[n])
                      ? 0
                      : (a[n - 1] + a[n]) / 2
                    : a[n - 1]
                  : a[n];
              }
            (!(function (e, t, n) {
              let r,
                i,
                o,
                l,
                a,
                s = e.length,
                u = tj(e, 0);
              for (let c = 0; c < s - 1; ++c)
                if (((a = u), (u = tj(e, c + 1)), a && u)) {
                  if (eg(t[c], 0, tz)) {
                    n[c] = n[c + 1] = 0;
                    continue;
                  }
                  (l =
                    Math.pow((r = n[c] / t[c]), 2) +
                    Math.pow((i = n[c + 1] / t[c]), 2)) <= 9 ||
                    ((o = 3 / Math.sqrt(l)),
                    (n[c] = r * o * t[c]),
                    (n[c + 1] = i * o * t[c]));
                }
            })(e, a, s),
              (function (e, t, n = "x") {
                let r,
                  i,
                  o,
                  l = tB(n),
                  a = e.length,
                  s = tj(e, 0);
                for (let u = 0; u < a; ++u) {
                  if (((i = o), (o = s), (s = tj(e, u + 1)), !o)) continue;
                  let a = o[n],
                    c = o[l];
                  (i &&
                    ((r = (a - i[n]) / 3),
                    (o[`cp1${n}`] = a - r),
                    (o[`cp1${l}`] = c - r * t[u])),
                    s &&
                      ((r = (s[n] - a) / 3),
                      (o[`cp2${n}`] = a + r),
                      (o[`cp2${l}`] = c + r * t[u])));
                }
              })(e, s, t));
          })(e, i);
        else {
          let n = r ? e[e.length - 1] : e[0];
          for (o = 0, l = e.length; o < l; ++o)
            ((s = (function (e, t, n, r) {
              let i = e.skip ? t : e,
                o = n.skip ? t : n,
                l = eE(t, i),
                a = eE(o, t),
                s = l / (l + a),
                u = a / (l + a);
              ((s = isNaN(s) ? 0 : s), (u = isNaN(u) ? 0 : u));
              let c = r * s,
                f = r * u;
              return {
                previous: {
                  x: t.x - c * (o.x - i.x),
                  y: t.y - c * (o.y - i.y),
                },
                next: { x: t.x + f * (o.x - i.x), y: t.y + f * (o.y - i.y) },
              };
            })(n, (a = e[o]), e[Math.min(o + 1, l - !r) % l], t.tension)),
              (a.cp1x = s.previous.x),
              (a.cp1y = s.previous.y),
              (a.cp2x = s.next.x),
              (a.cp2y = s.next.y),
              (n = a));
        }
        t.capBezierPoints &&
          (function (e, t) {
            let n,
              r,
              i,
              o,
              l,
              a = tu(e[0], t);
            for (n = 0, r = e.length; n < r; ++n)
              ((l = o),
                (o = a),
                (a = n < r - 1 && tu(e[n + 1], t)),
                o &&
                  ((i = e[n]),
                  l &&
                    ((i.cp1x = tH(i.cp1x, t.left, t.right)),
                    (i.cp1y = tH(i.cp1y, t.top, t.bottom))),
                  a &&
                    ((i.cp2x = tH(i.cp2x, t.left, t.right)),
                    (i.cp2y = tH(i.cp2y, t.top, t.bottom)))));
          })(e, n);
      }
      function tV() {
        return "undefined" != typeof window && "undefined" != typeof document;
      }
      function tW(e) {
        let t = e.parentNode;
        return (t && "[object ShadowRoot]" === t.toString() && (t = t.host), t);
      }
      function t$(e, t, n) {
        let r;
        return (
          "string" == typeof e
            ? ((r = parseInt(e, 10)),
              -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
            : (r = e),
          r
        );
      }
      let tq = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null),
        tY = ["top", "right", "bottom", "left"];
      function tX(e, t, n) {
        let r = {};
        n = n ? "-" + n : "";
        for (let i = 0; i < 4; i++) {
          let o = tY[i];
          r[o] = parseFloat(e[t + "-" + o + n]) || 0;
        }
        return ((r.width = r.left + r.right), (r.height = r.top + r.bottom), r);
      }
      let tZ = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
      function tK(e, t) {
        if ("native" in e) return e;
        let { canvas: n, currentDevicePixelRatio: r } = t,
          i = tq(n),
          o = "border-box" === i.boxSizing,
          l = tX(i, "padding"),
          a = tX(i, "border", "width"),
          {
            x: s,
            y: u,
            box: c,
          } = (function (e, t) {
            let n,
              r,
              i = e.touches,
              o = i && i.length ? i[0] : e,
              { offsetX: l, offsetY: a } = o,
              s = !1;
            if (tZ(l, a, e.target)) ((n = l), (r = a));
            else {
              let e = t.getBoundingClientRect();
              ((n = o.clientX - e.left), (r = o.clientY - e.top), (s = !0));
            }
            return { x: n, y: r, box: s };
          })(e, n),
          f = l.left + (c && a.left),
          h = l.top + (c && a.top),
          { width: d, height: p } = t;
        return (
          o && ((d -= l.width + a.width), (p -= l.height + a.height)),
          {
            x: Math.round((((s - f) / d) * n.width) / r),
            y: Math.round((((u - h) / p) * n.height) / r),
          }
        );
      }
      let tQ = (e) => Math.round(10 * e) / 10;
      function tJ(e, t, n, r) {
        let i = tq(e),
          o = tX(i, "margin"),
          l = t$(i.maxWidth, e, "clientWidth") || es,
          a = t$(i.maxHeight, e, "clientHeight") || es,
          s = (function (e, t, n) {
            let r, i;
            if (void 0 === t || void 0 === n) {
              let o = e && tW(e);
              if (o) {
                let e = o.getBoundingClientRect(),
                  l = tq(o),
                  a = tX(l, "border", "width"),
                  s = tX(l, "padding");
                ((t = e.width - s.width - a.width),
                  (n = e.height - s.height - a.height),
                  (r = t$(l.maxWidth, o, "clientWidth")),
                  (i = t$(l.maxHeight, o, "clientHeight")));
              } else ((t = e.clientWidth), (n = e.clientHeight));
            }
            return {
              width: t,
              height: n,
              maxWidth: r || es,
              maxHeight: i || es,
            };
          })(e, t, n),
          { width: u, height: c } = s;
        if ("content-box" === i.boxSizing) {
          let e = tX(i, "border", "width"),
            t = tX(i, "padding");
          ((u -= t.width + e.width), (c -= t.height + e.height));
        }
        return (
          (u = Math.max(0, u - o.width)),
          (c = Math.max(0, r ? u / r : c - o.height)),
          (u = tQ(Math.min(u, l, s.maxWidth))),
          (c = tQ(Math.min(c, a, s.maxHeight))),
          u && !c && (c = tQ(u / 2)),
          (void 0 !== t || void 0 !== n) &&
            r &&
            s.height &&
            c > s.height &&
            (u = tQ(Math.floor((c = s.height) * r))),
          { width: u, height: c }
        );
      }
      function tG(e, t, n) {
        let r = t || 1,
          i = Math.floor(e.height * r),
          o = Math.floor(e.width * r);
        ((e.height = Math.floor(e.height)), (e.width = Math.floor(e.width)));
        let l = e.canvas;
        return (
          l.style &&
            (n || (!l.style.height && !l.style.width)) &&
            ((l.style.height = `${e.height}px`),
            (l.style.width = `${e.width}px`)),
          (e.currentDevicePixelRatio !== r ||
            l.height !== i ||
            l.width !== o) &&
            ((e.currentDevicePixelRatio = r),
            (l.height = i),
            (l.width = o),
            e.ctx.setTransform(r, 0, 0, r, 0, 0),
            !0)
        );
      }
      let t1 = (function () {
        let e = !1;
        try {
          let t = {
            get passive() {
              return ((e = !0), !1);
            },
          };
          tV() &&
            (window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t));
        } catch (e) {}
        return e;
      })();
      function t0(e, t) {
        let n = tq(e).getPropertyValue(t),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? +r[1] : void 0;
      }
      function t2(e, t, n, r) {
        return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
      }
      function t5(e, t, n, r) {
        return {
          x: e.x + n * (t.x - e.x),
          y:
            "middle" === r
              ? n < 0.5
                ? e.y
                : t.y
              : "after" === r
                ? n < 1
                  ? e.y
                  : t.y
                : n > 0
                  ? t.y
                  : e.y,
        };
      }
      function t6(e, t, n, r) {
        let i = { x: e.cp2x, y: e.cp2y },
          o = { x: t.cp1x, y: t.cp1y },
          l = t2(e, i, n),
          a = t2(i, o, n),
          s = t2(o, t, n),
          u = t2(l, a, n),
          c = t2(a, s, n);
        return t2(u, c, n);
      }
      function t4(e, t, n) {
        var r;
        return e
          ? ((r = n),
            {
              x: (e) => t + t + r - e,
              setWidth(e) {
                r = e;
              },
              textAlign: (e) =>
                "center" === e ? e : "right" === e ? "left" : "right",
              xPlus: (e, t) => e - t,
              leftForLtr: (e, t) => e - t,
            })
          : {
              x: (e) => e,
              setWidth(e) {},
              textAlign: (e) => e,
              xPlus: (e, t) => e + t,
              leftForLtr: (e, t) => e,
            };
      }
      function t3(e, t) {
        let n, r;
        ("ltr" === t || "rtl" === t) &&
          ((r = [
            (n = e.canvas.style).getPropertyValue("direction"),
            n.getPropertyPriority("direction"),
          ]),
          n.setProperty("direction", t, "important"),
          (e.prevTextDirection = r));
      }
      function t8(e, t) {
        void 0 !== t &&
          (delete e.prevTextDirection,
          e.canvas.style.setProperty("direction", t[0], t[1]));
      }
      function t9(e) {
        return "angle" === e
          ? { between: eO, compare: eI, normalize: e_ }
          : { between: eM, compare: (e, t) => e - t, normalize: (e) => e };
      }
      function t7({ start: e, end: t, count: n, loop: r, style: i }) {
        return {
          start: e % n,
          end: t % n,
          loop: r && (t - e + 1) % n == 0,
          style: i,
        };
      }
      function ne(e, t, n) {
        let r, i, o;
        if (!n) return [e];
        let { property: l, start: a, end: s } = n,
          u = t.length,
          { compare: c, between: f, normalize: h } = t9(l),
          {
            start: d,
            end: p,
            loop: g,
            style: m,
          } = (function (e, t, n) {
            let r,
              { property: i, start: o, end: l } = n,
              { between: a, normalize: s } = t9(i),
              u = t.length,
              { start: c, end: f, loop: h } = e;
            if (h) {
              for (c += u, f += u, r = 0; r < u && a(s(t[c % u][i]), o, l); ++r)
                (c--, f--);
              ((c %= u), (f %= u));
            }
            return (
              f < c && (f += u),
              { start: c, end: f, loop: h, style: e.style }
            );
          })(e, t, n),
          y = [],
          b = !1,
          v = null,
          x = () => f(a, o, r) && 0 !== c(a, o),
          k = () => 0 === c(s, r) || f(s, o, r),
          w = () => b || x(),
          S = () => !b || k();
        for (let e = d, n = d; e <= p; ++e)
          (i = t[e % u]).skip ||
            ((r = h(i[l])) !== o &&
              ((b = f(r, a, s)),
              null === v && w() && (v = 0 === c(r, a) ? e : n),
              null !== v &&
                S() &&
                (y.push(t7({ start: v, end: e, loop: g, count: u, style: m })),
                (v = null)),
              (n = e),
              (o = r)));
        return (
          null !== v &&
            y.push(t7({ start: v, end: p, loop: g, count: u, style: m })),
          y
        );
      }
      function nt(e, t) {
        let n = [],
          r = e.segments;
        for (let i = 0; i < r.length; i++) {
          let o = ne(r[i], e.points, t);
          o.length && n.push(...o);
        }
        return n;
      }
      function nn(e, t) {
        let n = e.points,
          r = e.options.spanGaps,
          i = n.length;
        if (!i) return [];
        let o = !!e._loop,
          { start: l, end: a } = (function (e, t, n, r) {
            let i = 0,
              o = t - 1;
            if (n && !r) for (; i < t && !e[i].skip; ) i++;
            for (; i < t && e[i].skip; ) i++;
            for (i %= t, n && (o += i); o > i && e[o % t].skip; ) o--;
            return { start: i, end: (o %= t) };
          })(n, i, o, r);
        if (!0 === r) return nr(e, [{ start: l, end: a, loop: o }], n, t);
        let s = a < l ? a + i : a,
          u = !!e._fullLoop && 0 === l && a === i - 1;
        return nr(
          e,
          (function (e, t, n, r) {
            let i,
              o = e.length,
              l = [],
              a = t,
              s = e[t];
            for (i = t + 1; i <= n; ++i) {
              let n = e[i % o];
              (n.skip || n.stop
                ? s.skip ||
                  ((r = !1),
                  l.push({ start: t % o, end: (i - 1) % o, loop: r }),
                  (t = a = n.stop ? i : null))
                : ((a = i), s.skip && (t = i)),
                (s = n));
            }
            return (
              null !== a && l.push({ start: t % o, end: a % o, loop: r }),
              l
            );
          })(n, l, s, u),
          n,
          t,
        );
      }
      function nr(e, t, n, r) {
        return r && r.setContext && n
          ? (function (e, t, n, r) {
              let i = e._chart.getContext(),
                o = ni(e.options),
                {
                  _datasetIndex: l,
                  options: { spanGaps: a },
                } = e,
                s = n.length,
                u = [],
                c = o,
                f = t[0].start,
                h = f;
              function d(e, t, r, i) {
                let o = a ? -1 : 1;
                if (e !== t) {
                  for (e += s; n[e % s].skip; ) e -= o;
                  for (; n[t % s].skip; ) t += o;
                  e % s != t % s &&
                    (u.push({ start: e % s, end: t % s, loop: r, style: i }),
                    (c = i),
                    (f = t % s));
                }
              }
              for (let e of t) {
                let t,
                  o = n[(f = a ? f : e.start) % s];
                for (h = f + 1; h <= e.end; h++) {
                  let a = n[h % s];
                  ((function (e, t) {
                    if (!t) return !1;
                    let n = [],
                      r = function (e, t) {
                        return eJ(t)
                          ? (n.includes(t) || n.push(t), n.indexOf(t))
                          : t;
                      };
                    return JSON.stringify(e, r) !== JSON.stringify(t, r);
                  })(
                    (t = ni(
                      r.setContext(
                        tI(i, {
                          type: "segment",
                          p0: o,
                          p1: a,
                          p0DataIndex: (h - 1) % s,
                          p1DataIndex: h % s,
                          datasetIndex: l,
                        }),
                      ),
                    )),
                    c,
                  ) && d(f, h - 1, e.loop, c),
                    (o = a),
                    (c = t));
                }
                f < h - 1 && d(f, h - 1, e.loop, c);
              }
              return u;
            })(e, t, n, r)
          : t;
      }
      function ni(e) {
        return {
          backgroundColor: e.backgroundColor,
          borderCapStyle: e.borderCapStyle,
          borderDash: e.borderDash,
          borderDashOffset: e.borderDashOffset,
          borderJoinStyle: e.borderJoinStyle,
          borderWidth: e.borderWidth,
          borderColor: e.borderColor,
        };
      }
      function no(e, t, n) {
        return e.options.clip ? e[n] : t[n];
      }
      function nl(e, t) {
        let n = t._clip;
        if (n.disabled) return !1;
        let r = (function (e, t) {
          let { xScale: n, yScale: r } = e;
          return n && r
            ? {
                left: no(n, t, "left"),
                right: no(n, t, "right"),
                top: no(r, t, "top"),
                bottom: no(r, t, "bottom"),
              }
            : t;
        })(t, e.chartArea);
        return {
          left: !1 === n.left ? 0 : r.left - (!0 === n.left ? 0 : n.left),
          right:
            !1 === n.right ? e.width : r.right + (!0 === n.right ? 0 : n.right),
          top: !1 === n.top ? 0 : r.top - (!0 === n.top ? 0 : n.top),
          bottom:
            !1 === n.bottom
              ? e.height
              : r.bottom + (!0 === n.bottom ? 0 : n.bottom),
        };
      }
    },
    7930: (e, t, n) => {
      "use strict";
      n.d(t, { Tt: () => r });
      function r(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      Object.create;
      (Object.create, "function" == typeof SuppressedError && SuppressedError);
    },
    8651: (e, t, n) => {
      "use strict";
      n.d(t, { oz: () => nA });
      var r = {};
      (n.r(r),
        n.d(r, {
          boolean: () => m,
          booleanish: () => y,
          commaOrSpaceSeparated: () => w,
          commaSeparated: () => k,
          number: () => v,
          overloadedBoolean: () => b,
          spaceSeparated: () => x,
        }));
      var i = {};
      (n.r(i),
        n.d(i, {
          attentionMarkers: () => t_,
          contentInitial: () => tk,
          disable: () => tO,
          document: () => tx,
          flow: () => tS,
          flowInitial: () => tw,
          insideSpan: () => tI,
          string: () => tC,
          text: () => tE,
        }));
      let o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        a = {};
      function s(e, t) {
        return ((t || a).jsx ? l : o).test(e);
      }
      let u = /[ \t\n\f\r]/g;
      function c(e) {
        return "" === e.replace(u, "");
      }
      class f {
        constructor(e, t, n) {
          ((this.normal = t), (this.property = e), n && (this.space = n));
        }
      }
      function h(e, t) {
        let n = {},
          r = {};
        for (let t of e)
          (Object.assign(n, t.property), Object.assign(r, t.normal));
        return new f(n, r, t);
      }
      function d(e) {
        return e.toLowerCase();
      }
      ((f.prototype.normal = {}),
        (f.prototype.property = {}),
        (f.prototype.space = void 0));
      class p {
        constructor(e, t) {
          ((this.attribute = t), (this.property = e));
        }
      }
      ((p.prototype.attribute = ""),
        (p.prototype.booleanish = !1),
        (p.prototype.boolean = !1),
        (p.prototype.commaOrSpaceSeparated = !1),
        (p.prototype.commaSeparated = !1),
        (p.prototype.defined = !1),
        (p.prototype.mustUseProperty = !1),
        (p.prototype.number = !1),
        (p.prototype.overloadedBoolean = !1),
        (p.prototype.property = ""),
        (p.prototype.spaceSeparated = !1),
        (p.prototype.space = void 0));
      let g = 0,
        m = S(),
        y = S(),
        b = S(),
        v = S(),
        x = S(),
        k = S(),
        w = S();
      function S() {
        return 2 ** ++g;
      }
      let C = Object.keys(r);
      class E extends p {
        constructor(e, t, n, i) {
          let o = -1;
          if (
            (super(e, t),
            (function (e, t, n) {
              n && (e[t] = n);
            })(this, "space", i),
            "number" == typeof n)
          )
            for (; ++o < C.length; ) {
              let e = C[o];
              !(function (e, t, n) {
                n && (e[t] = n);
              })(this, C[o], (n & r[e]) === r[e]);
            }
        }
      }
      function I(e) {
        let t = {},
          n = {};
        for (let [r, i] of Object.entries(e.properties)) {
          let o = new E(r, e.transform(e.attributes || {}, r), i, e.space);
          (e.mustUseProperty &&
            e.mustUseProperty.includes(r) &&
            (o.mustUseProperty = !0),
            (t[r] = o),
            (n[d(r)] = r),
            (n[d(o.attribute)] = r));
        }
        return new f(t, n, e.space);
      }
      E.prototype.defined = !0;
      let _ = I({
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: y,
          ariaAutoComplete: null,
          ariaBusy: y,
          ariaChecked: y,
          ariaColCount: v,
          ariaColIndex: v,
          ariaColSpan: v,
          ariaControls: x,
          ariaCurrent: null,
          ariaDescribedBy: x,
          ariaDetails: null,
          ariaDisabled: y,
          ariaDropEffect: x,
          ariaErrorMessage: null,
          ariaExpanded: y,
          ariaFlowTo: x,
          ariaGrabbed: y,
          ariaHasPopup: null,
          ariaHidden: y,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: x,
          ariaLevel: v,
          ariaLive: null,
          ariaModal: y,
          ariaMultiLine: y,
          ariaMultiSelectable: y,
          ariaOrientation: null,
          ariaOwns: x,
          ariaPlaceholder: null,
          ariaPosInSet: v,
          ariaPressed: y,
          ariaReadOnly: y,
          ariaRelevant: null,
          ariaRequired: y,
          ariaRoleDescription: x,
          ariaRowCount: v,
          ariaRowIndex: v,
          ariaRowSpan: v,
          ariaSelected: y,
          ariaSetSize: v,
          ariaSort: null,
          ariaValueMax: v,
          ariaValueMin: v,
          ariaValueNow: v,
          ariaValueText: null,
          role: null,
        },
        transform: (e, t) =>
          "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
      });
      function O(e, t) {
        return t in e ? e[t] : t;
      }
      function T(e, t) {
        return O(e, t.toLowerCase());
      }
      let A = I({
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: k,
            acceptCharset: x,
            accessKey: x,
            action: null,
            allow: null,
            allowFullScreen: m,
            allowPaymentRequest: m,
            allowUserMedia: m,
            alt: null,
            as: null,
            async: m,
            autoCapitalize: null,
            autoComplete: x,
            autoFocus: m,
            autoPlay: m,
            blocking: x,
            capture: null,
            charSet: null,
            checked: m,
            cite: null,
            className: x,
            cols: v,
            colSpan: null,
            content: null,
            contentEditable: y,
            controls: m,
            controlsList: x,
            coords: v | k,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: m,
            defer: m,
            dir: null,
            dirName: null,
            disabled: m,
            download: b,
            draggable: y,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: m,
            formTarget: null,
            headers: x,
            height: v,
            hidden: b,
            high: v,
            href: null,
            hrefLang: null,
            htmlFor: x,
            httpEquiv: x,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: m,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: m,
            itemId: null,
            itemProp: x,
            itemRef: x,
            itemScope: m,
            itemType: x,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: m,
            low: v,
            manifest: null,
            max: null,
            maxLength: v,
            media: null,
            method: null,
            min: null,
            minLength: v,
            multiple: m,
            muted: m,
            name: null,
            nonce: null,
            noModule: m,
            noValidate: m,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: m,
            optimum: v,
            pattern: null,
            ping: x,
            placeholder: null,
            playsInline: m,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: m,
            referrerPolicy: null,
            rel: x,
            required: m,
            reversed: m,
            rows: v,
            rowSpan: v,
            sandbox: x,
            scope: null,
            scoped: m,
            seamless: m,
            selected: m,
            shadowRootClonable: m,
            shadowRootDelegatesFocus: m,
            shadowRootMode: null,
            shape: null,
            size: v,
            sizes: null,
            slot: null,
            span: v,
            spellCheck: y,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: v,
            step: null,
            style: null,
            tabIndex: v,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: m,
            useMap: null,
            value: y,
            width: v,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: x,
            axis: null,
            background: null,
            bgColor: null,
            border: v,
            borderColor: null,
            bottomMargin: v,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: m,
            declare: m,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: v,
            leftMargin: v,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: v,
            marginWidth: v,
            noResize: m,
            noHref: m,
            noShade: m,
            noWrap: m,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: v,
            rules: null,
            scheme: null,
            scrolling: y,
            standby: null,
            summary: null,
            text: null,
            topMargin: v,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: v,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: m,
            disableRemotePlayback: m,
            prefix: null,
            property: null,
            results: v,
            security: null,
            unselectable: null,
          },
          space: "html",
          transform: T,
        }),
        M = I({
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          properties: {
            about: w,
            accentHeight: v,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: v,
            amplitude: v,
            arabicForm: null,
            ascent: v,
            attributeName: null,
            attributeType: null,
            azimuth: v,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: v,
            by: null,
            calcMode: null,
            capHeight: v,
            className: x,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: v,
            diffuseConstant: v,
            direction: null,
            display: null,
            dur: null,
            divisor: v,
            dominantBaseline: null,
            download: m,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: v,
            enableBackground: null,
            end: null,
            event: null,
            exponent: v,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: v,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: k,
            g2: k,
            glyphName: k,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: v,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: v,
            horizOriginX: v,
            horizOriginY: v,
            id: null,
            ideographic: v,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: v,
            k: v,
            k1: v,
            k2: v,
            k3: v,
            k4: v,
            kernelMatrix: w,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: v,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: v,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: v,
            overlineThickness: v,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: v,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: x,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: v,
            pointsAtY: v,
            pointsAtZ: v,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: w,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: w,
            rev: w,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: w,
            requiredFeatures: w,
            requiredFonts: w,
            requiredFormats: w,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: v,
            specularExponent: v,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: v,
            strikethroughThickness: v,
            string: null,
            stroke: null,
            strokeDashArray: w,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: v,
            strokeOpacity: v,
            strokeWidth: null,
            style: null,
            surfaceScale: v,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: w,
            tabIndex: v,
            tableValues: null,
            target: null,
            targetX: v,
            targetY: v,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: w,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: v,
            underlineThickness: v,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: v,
            values: null,
            vAlphabetic: v,
            vMathematical: v,
            vectorEffect: null,
            vHanging: v,
            vIdeographic: v,
            version: null,
            vertAdvY: v,
            vertOriginX: v,
            vertOriginY: v,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: v,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
          space: "svg",
          transform: O,
        }),
        P = I({
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
        }),
        D = I({
          attributes: { xmlnsxlink: "xmlns:xlink" },
          properties: { xmlnsXLink: null, xmlns: null },
          space: "xmlns",
          transform: T,
        }),
        L = I({
          properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
        }),
        N = h([_, A, P, D, L], "html"),
        R = h([_, M, P, D, L], "svg"),
        F = /[A-Z]/g,
        z = /-[a-z]/g,
        j = /^data[-\w.:]+$/i;
      function B(e) {
        return "-" + e.toLowerCase();
      }
      function H(e) {
        return e.charAt(1).toUpperCase();
      }
      let U = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var V = n(339);
      let W = q("end"),
        $ = q("start");
      function q(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function Y(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? Z(e.position)
            : "start" in e || "end" in e
              ? Z(e)
              : "line" in e || "column" in e
                ? X(e)
                : ""
          : "";
      }
      function X(e) {
        return K(e && e.line) + ":" + K(e && e.column);
      }
      function Z(e) {
        return X(e && e.start) + "-" + X(e && e.end);
      }
      function K(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class Q extends Error {
        constructor(e, t, n) {
          (super(), "string" == typeof t && ((n = t), (t = void 0)));
          let r = "",
            i = {},
            o = !1;
          if (
            (t &&
              (i =
                ("line" in t && "column" in t) || ("start" in t && "end" in t)
                  ? { place: t }
                  : "type" in t
                    ? { ancestors: [t], place: t.position }
                    : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          let l = i.place && "start" in i.place ? i.place.start : i.place;
          ((this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = l ? l.column : void 0),
            (this.fatal = void 0),
            (this.file = ""),
            (this.message = r),
            (this.line = l ? l.line : void 0),
            (this.name = Y(i.place) || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              o && i.cause && "string" == typeof i.cause.stack
                ? i.cause.stack
                : ""),
            (this.actual = void 0),
            (this.expected = void 0),
            (this.note = void 0),
            (this.url = void 0));
        }
      }
      ((Q.prototype.file = ""),
        (Q.prototype.name = ""),
        (Q.prototype.reason = ""),
        (Q.prototype.message = ""),
        (Q.prototype.stack = ""),
        (Q.prototype.column = void 0),
        (Q.prototype.line = void 0),
        (Q.prototype.ancestors = void 0),
        (Q.prototype.cause = void 0),
        (Q.prototype.fatal = void 0),
        (Q.prototype.place = void 0),
        (Q.prototype.ruleId = void 0),
        (Q.prototype.source = void 0));
      let J = {}.hasOwnProperty,
        G = new Map(),
        ee = /[A-Z]/g,
        et = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        en = new Set(["td", "th"]),
        er = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function ei(e, t, n) {
        var r;
        return "element" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                i = r;
              ("svg" === t.tagName.toLowerCase() &&
                "html" === r.space &&
                (e.schema = R),
                e.ancestors.push(t));
              let o = es(e, t.tagName, !1),
                l = (function (e, t) {
                  let n,
                    r,
                    i = {};
                  for (r in t.properties)
                    if ("children" !== r && J.call(t.properties, r)) {
                      let o = (function (e, t, n) {
                        let r = (function (e, t) {
                          let n = d(t),
                            r = t,
                            i = p;
                          if (n in e.normal) return e.property[e.normal[n]];
                          if (
                            n.length > 4 &&
                            "data" === n.slice(0, 4) &&
                            j.test(t)
                          ) {
                            if ("-" === t.charAt(4)) {
                              let e = t.slice(5).replace(z, H);
                              r =
                                "data" + e.charAt(0).toUpperCase() + e.slice(1);
                            } else {
                              let e = t.slice(4);
                              if (!z.test(e)) {
                                let n = e.replace(F, B);
                                ("-" !== n.charAt(0) && (n = "-" + n),
                                  (t = "data" + n));
                              }
                            }
                            i = E;
                          }
                          return new i(r, t);
                        })(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = r.commaSeparated
                                ? (function (e, t) {
                                    let n = {};
                                    return (
                                      "" === e[e.length - 1] ? [...e, ""] : e
                                    )
                                      .join(
                                        (n.padRight ? " " : "") +
                                          "," +
                                          (!1 === n.padLeft ? "" : " "),
                                      )
                                      .trim();
                                  })(n)
                                : n.join(" ").trim()),
                            "style" === r.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    try {
                                      return V(t, { reactCompat: !0 });
                                    } catch (n) {
                                      if (e.ignoreInvalidStyle) return {};
                                      let t = new Q(
                                        "Cannot parse `style` attribute",
                                        {
                                          ancestors: e.ancestors,
                                          cause: n,
                                          ruleId: "style",
                                          source: "hast-util-to-jsx-runtime",
                                        },
                                      );
                                      throw (
                                        (t.file = e.filePath || void 0),
                                        (t.url =
                                          er + "#cannot-parse-style-attribute"),
                                        t
                                      );
                                    }
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t,
                                    n = {};
                                  for (t in e)
                                    J.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(ee, ec);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && r.space
                              ? U[r.property] || r.property
                              : r.attribute,
                            n,
                          ];
                        }
                      })(e, r, t.properties[r]);
                      if (o) {
                        let [r, l] = o;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof l &&
                        en.has(t.tagName)
                          ? (n = l)
                          : (i[r] = l);
                      }
                    }
                  return (
                    n &&
                      ((i.style || (i.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = n),
                    i
                  );
                })(e, t),
                a = ea(e, t);
              return (
                et.has(t.tagName) &&
                  (a = a.filter(function (e) {
                    return (
                      "string" != typeof e ||
                      !("object" == typeof e
                        ? "text" === e.type && c(e.value)
                        : c(e))
                    );
                  })),
                eo(e, l, o, t),
                el(l, a),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, o, l, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
            ? (function (e, t) {
                if (t.data && t.data.estree && e.evaluater) {
                  let n = t.data.estree.body[0];
                  return (n.type, e.evaluater.evaluateExpression(n.expression));
                }
                eu(e, t.position);
              })(e, t)
            : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
              ? (function (e, t, n) {
                  let r = e.schema,
                    i = r;
                  ("svg" === t.name && "html" === r.space && (e.schema = R),
                    e.ancestors.push(t));
                  let o = null === t.name ? e.Fragment : es(e, t.name, !0),
                    l = (function (e, t) {
                      let n = {};
                      for (let r of t.attributes)
                        if ("mdxJsxExpressionAttribute" === r.type)
                          if (r.data && r.data.estree && e.evaluater) {
                            let t = r.data.estree.body[0];
                            t.type;
                            let i = t.expression;
                            i.type;
                            let o = i.properties[0];
                            (o.type,
                              Object.assign(
                                n,
                                e.evaluater.evaluateExpression(o.argument),
                              ));
                          } else eu(e, t.position);
                        else {
                          let i,
                            o = r.name;
                          if (r.value && "object" == typeof r.value)
                            if (
                              r.value.data &&
                              r.value.data.estree &&
                              e.evaluater
                            ) {
                              let t = r.value.data.estree.body[0];
                              (t.type,
                                (i = e.evaluater.evaluateExpression(
                                  t.expression,
                                )));
                            } else eu(e, t.position);
                          else i = null === r.value || r.value;
                          n[o] = i;
                        }
                      return n;
                    })(e, t),
                    a = ea(e, t);
                  return (
                    eo(e, l, o, t),
                    el(l, a),
                    e.ancestors.pop(),
                    (e.schema = r),
                    e.create(t, o, l, n)
                  );
                })(e, t, n)
              : "mdxjsEsm" === t.type
                ? (function (e, t) {
                    if (t.data && t.data.estree && e.evaluater)
                      return e.evaluater.evaluateProgram(t.data.estree);
                    eu(e, t.position);
                  })(e, t)
                : "root" === t.type
                  ? (function (e, t, n) {
                      let r = {};
                      return (el(r, ea(e, t)), e.create(t, e.Fragment, r, n));
                    })(e, t, n)
                  : "text" === t.type
                    ? ((r = 0), t.value)
                    : void 0;
      }
      function eo(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function el(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function ea(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : G;
        for (; ++r < t.children.length; ) {
          let o,
            l = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === l.type
                ? l.tagName
                : "mdxJsxFlowElement" === l.type ||
                    "mdxJsxTextElement" === l.type
                  ? l.name
                  : void 0;
            if (e) {
              let t = i.get(e) || 0;
              ((o = e + "-" + t), i.set(e, t + 1));
            }
          }
          let a = ei(e, l, o);
          void 0 !== a && n.push(a);
        }
        return n;
      }
      function es(e, t, n) {
        let r;
        if (n)
          if (t.includes(".")) {
            let e,
              n = t.split("."),
              i = -1;
            for (; ++i < n.length; ) {
              let t = s(n[i])
                ? { type: "Identifier", name: n[i] }
                : { type: "Literal", value: n[i] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(i && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            r = e;
          } else
            r =
              s(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return J.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        eu(e);
      }
      function eu(e, t) {
        let n = new Q("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: t,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          (n.file = e.filePath || void 0),
          (n.url = er + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n
        );
      }
      function ec(e) {
        return "-" + e.toLowerCase();
      }
      let ef = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var eh = n(4684);
      n(4464);
      let ed = {};
      function ep(e, t, n) {
        var r;
        if ((r = e) && "object" == typeof r) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return eg(e.children, t, n);
        }
        return Array.isArray(e) ? eg(e, t, n) : "";
      }
      function eg(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = ep(e[i], t, n);
        return r.join("");
      }
      function em(e, t, n, r) {
        let i,
          o = e.length,
          l = 0;
        if (
          ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          ((i = Array.from(r)).unshift(t, n), e.splice(...i));
        else
          for (n && e.splice(t, n); l < r.length; )
            ((i = r.slice(l, l + 1e4)).unshift(t, 0),
              e.splice(...i),
              (l += 1e4),
              (t += 1e4));
      }
      function ey(e, t) {
        return e.length > 0 ? (em(e, e.length, 0, t), e) : t;
      }
      class eb {
        constructor(e) {
          ((this.left = e ? [...e] : []), (this.right = []));
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`",
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return (this.setCursor(0), this.right.pop());
        }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
              ? this.right
                  .slice(
                    this.right.length - n + this.left.length,
                    this.right.length - e + this.left.length,
                  )
                  .reverse()
              : this.left
                  .slice(e)
                  .concat(
                    this.right
                      .slice(this.right.length - n + this.left.length)
                      .reverse(),
                  );
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(
            this.right.length - (t || 0),
            Number.POSITIVE_INFINITY,
          );
          return (n && ev(this.left, n), r.reverse());
        }
        pop() {
          return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
        }
        push(e) {
          (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e));
        }
        pushMany(e) {
          (this.setCursor(Number.POSITIVE_INFINITY), ev(this.left, e));
        }
        unshift(e) {
          (this.setCursor(0), this.right.push(e));
        }
        unshiftMany(e) {
          (this.setCursor(0), ev(this.right, e.reverse()));
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          )
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              ev(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY,
              );
              ev(this.left, t.reverse());
            }
        }
      }
      function ev(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else
          for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
      }
      function ex(e) {
        let t,
          n,
          r,
          i,
          o,
          l,
          a,
          s = {},
          u = -1,
          c = new eb(e);
        for (; ++u < c.length; ) {
          for (; u in s; ) u = s[u];
          if (
            ((t = c.get(u)),
            u &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === c.get(u - 1)[1].type &&
              ((r = 0) < (l = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === l[r][1].type &&
                (r += 2),
              r < l.length && "content" === l[r][1].type))
          )
            for (; ++r < l.length && "content" !== l[r][1].type; )
              "chunkText" === l[r][1].type &&
                ((l[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                s,
                (function (e, t) {
                  let n,
                    r,
                    i = e.get(t)[1],
                    o = e.get(t)[2],
                    l = t - 1,
                    a = [],
                    s = i._tokenizer;
                  !s &&
                    ((s = o.parser[i.contentType](i.start)),
                    i._contentTypeTextTrailing &&
                      (s._contentTypeTextTrailing = !0));
                  let u = s.events,
                    c = [],
                    f = {},
                    h = -1,
                    d = i,
                    p = 0,
                    g = 0,
                    m = [0];
                  for (; d; ) {
                    for (; e.get(++l)[1] !== d; );
                    (a.push(l),
                      !d._tokenizer &&
                        ((n = o.sliceStream(d)),
                        d.next || n.push(null),
                        r && s.defineSkip(d.start),
                        d._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = !0),
                        s.write(n),
                        d._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = d),
                      (d = d.next));
                  }
                  for (d = i; ++h < u.length; )
                    "exit" === u[h][0] &&
                      "enter" === u[h - 1][0] &&
                      u[h][1].type === u[h - 1][1].type &&
                      u[h][1].start.line !== u[h][1].end.line &&
                      ((g = h + 1),
                      m.push(g),
                      (d._tokenizer = void 0),
                      (d.previous = void 0),
                      (d = d.next));
                  for (
                    s.events = [],
                      d
                        ? ((d._tokenizer = void 0), (d.previous = void 0))
                        : m.pop(),
                      h = m.length;
                    h--;

                  ) {
                    let t = u.slice(m[h], m[h + 1]),
                      n = a.pop();
                    (c.push([n, n + t.length - 1]), e.splice(n, 2, t));
                  }
                  for (c.reverse(), h = -1; ++h < c.length; )
                    ((f[p + c[h][0]] = p + c[h][1]),
                      (p += c[h][1] - c[h][0] - 1));
                  return f;
                })(c, u),
              ),
              (u = s[u]),
              (a = !0));
          else if (t[1]._container) {
            for (r = u, n = void 0; r--; )
              if (
                "lineEnding" === (i = c.get(r))[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (c.get(n)[1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else if (
                "linePrefix" === i[1].type ||
                "listItemIndent" === i[1].type
              );
              else break;
            n &&
              ((t[1].end = { ...c.get(n)[1].start }),
              (o = c.slice(n, u)).unshift(t),
              c.splice(n, u - n + 1, o));
          }
        }
        return (em(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !a);
      }
      let ek = {}.hasOwnProperty,
        ew = eL(/[A-Za-z]/),
        eS = eL(/[\dA-Za-z]/),
        eC = eL(/[#-'*+\--9=?A-Z^-~]/);
      function eE(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let eI = eL(/\d/),
        e_ = eL(/[\dA-Fa-f]/),
        eO = eL(/[!-/:-@[-`{-~]/);
      function eT(e) {
        return null !== e && e < -2;
      }
      function eA(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function eM(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let eP = eL(/\p{P}|\p{S}/u),
        eD = eL(/\s/);
      function eL(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function eN(e, t, n, r) {
        let i = r ? r - 1 : Number.POSITIVE_INFINITY,
          o = 0;
        return function (r) {
          return eM(r)
            ? (e.enter(n),
              (function r(l) {
                return eM(l) && o++ < i ? (e.consume(l), r) : (e.exit(n), t(l));
              })(r))
            : t(r);
        };
      }
      let eR = {
          tokenize: function (e) {
            let t,
              n = e.attempt(
                this.parser.constructs.contentInitial,
                function (t) {
                  return null === t
                    ? void e.consume(t)
                    : (e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      eN(e, n, "linePrefix"));
                },
                function (n) {
                  return (
                    e.enter("paragraph"),
                    (function n(r) {
                      let i = e.enter("chunkText", {
                        contentType: "text",
                        previous: t,
                      });
                      return (
                        t && (t.next = i),
                        (t = i),
                        (function t(r) {
                          if (null === r) {
                            (e.exit("chunkText"),
                              e.exit("paragraph"),
                              e.consume(r));
                            return;
                          }
                          return eT(r)
                            ? (e.consume(r), e.exit("chunkText"), n)
                            : (e.consume(r), t);
                        })(r)
                      );
                    })(n)
                  );
                },
              );
            return n;
          },
        },
        eF = {
          tokenize: function (e) {
            let t,
              n,
              r,
              i = this,
              o = [],
              l = 0;
            return a;
            function a(t) {
              if (l < o.length) {
                let n = o[l];
                return (
                  (i.containerState = n[1]),
                  e.attempt(n[0].continuation, s, u)(t)
                );
              }
              return u(t);
            }
            function s(e) {
              if ((l++, i.containerState._closeFlow)) {
                let n;
                ((i.containerState._closeFlow = void 0), t && y());
                let r = i.events.length,
                  o = r;
                for (; o--; )
                  if (
                    "exit" === i.events[o][0] &&
                    "chunkFlow" === i.events[o][1].type
                  ) {
                    n = i.events[o][1].end;
                    break;
                  }
                m(l);
                let a = r;
                for (; a < i.events.length; )
                  ((i.events[a][1].end = { ...n }), a++);
                return (
                  em(i.events, o + 1, 0, i.events.slice(r)),
                  (i.events.length = a),
                  u(e)
                );
              }
              return a(e);
            }
            function u(n) {
              if (l === o.length) {
                if (!t) return h(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return p(n);
                i.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return ((i.containerState = {}), e.check(ez, c, f)(n));
            }
            function c(e) {
              return (t && y(), m(l), h(e));
            }
            function f(e) {
              return (
                (i.parser.lazy[i.now().line] = l !== o.length),
                (r = i.now().offset),
                p(e)
              );
            }
            function h(t) {
              return ((i.containerState = {}), e.attempt(ez, d, p)(t));
            }
            function d(e) {
              return (
                l++,
                o.push([i.currentConstruct, i.containerState]),
                h(e)
              );
            }
            function p(r) {
              if (null === r) {
                (t && y(), m(0), e.consume(r));
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter("chunkFlow", {
                  _tokenizer: t,
                  contentType: "flow",
                  previous: n,
                }),
                (function t(n) {
                  if (null === n) {
                    (g(e.exit("chunkFlow"), !0), m(0), e.consume(n));
                    return;
                  }
                  return eT(n)
                    ? (e.consume(n),
                      g(e.exit("chunkFlow")),
                      (l = 0),
                      (i.interrupt = void 0),
                      a)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function g(e, o) {
              let a = i.sliceStream(e);
              if (
                (o && a.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(a),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  o = t.events.length;
                for (; o--; )
                  if (
                    t.events[o][1].start.offset < r &&
                    (!t.events[o][1].end || t.events[o][1].end.offset > r)
                  )
                    return;
                let a = i.events.length,
                  s = a;
                for (; s--; )
                  if (
                    "exit" === i.events[s][0] &&
                    "chunkFlow" === i.events[s][1].type
                  ) {
                    if (e) {
                      n = i.events[s][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (m(l), o = a; o < i.events.length; )
                  ((i.events[o][1].end = { ...n }), o++);
                (em(i.events, s + 1, 0, i.events.slice(a)),
                  (i.events.length = o));
              }
            }
            function m(t) {
              let n = o.length;
              for (; n-- > t; ) {
                let t = o[n];
                ((i.containerState = t[1]), t[0].exit.call(i, e));
              }
              o.length = t;
            }
            function y() {
              (t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0));
            }
          },
        },
        ez = {
          tokenize: function (e, t, n) {
            return eN(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4,
            );
          },
        },
        ej = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eM(t) ? eN(e, r, "linePrefix")(t) : r(t);
            };
            function r(e) {
              return null === e || eT(e) ? t(e) : n(e);
            }
          },
        },
        eB = {
          resolve: function (e) {
            return (ex(e), e);
          },
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : eT(t)
                  ? e.check(eH, o, i)(t)
                  : (e.consume(t), r);
            }
            function i(n) {
              return (e.exit("chunkContent"), e.exit("content"), t(n));
            }
            function o(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
        },
        eH = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                eN(e, i, "linePrefix")
              );
            };
            function i(i) {
              if (null === i || eT(i)) return n(i);
              let o = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented",
              ) &&
                o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
        },
        eU = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                ej,
                function (r) {
                  return null === r
                    ? void e.consume(r)
                    : (e.enter("lineEndingBlank"),
                      e.consume(r),
                      e.exit("lineEndingBlank"),
                      (t.currentConstruct = void 0),
                      n);
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  eN(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt(eB, r)),
                    "linePrefix",
                  ),
                ),
              );
            return n;
            function r(r) {
              return null === r
                ? void e.consume(r)
                : (e.enter("lineEnding"),
                  e.consume(r),
                  e.exit("lineEnding"),
                  (t.currentConstruct = void 0),
                  n);
            }
          },
        },
        eV = { resolveAll: eY() },
        eW = eq("string"),
        e$ = eq("text");
      function eq(e) {
        return {
          resolveAll: eY("text" === e ? eX : void 0),
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, o, l);
            return o;
            function o(e) {
              return s(e) ? i(e) : l(e);
            }
            function l(e) {
              return null === e
                ? void t.consume(e)
                : (t.enter("data"), t.consume(e), a);
            }
            function a(e) {
              return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
            }
            function s(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
        };
      }
      function eY(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function eX(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r,
              i = e[n - 1][1],
              o = t.sliceStream(i),
              l = o.length,
              a = -1,
              s = 0;
            for (; l--; ) {
              let e = o[l];
              if ("string" == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) (s++, a--);
                if (a) break;
                a = -1;
              } else if (-2 === e) ((r = !0), s++);
              else if (-1 === e);
              else {
                l++;
                break;
              }
            }
            if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
              let o = {
                type:
                  n === e.length || r || s < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  _bufferIndex: l ? a : i.start._bufferIndex + a,
                  _index: i.start._index + l,
                  line: i.end.line,
                  column: i.end.column - s,
                  offset: i.end.offset - s,
                },
                end: { ...i.end },
              };
              ((i.end = { ...o.start }),
                i.start.offset === i.end.offset
                  ? Object.assign(i, o)
                  : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]),
                    (n += 2)));
            }
            n++;
          }
        return e;
      }
      let eZ = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (o) {
              var l;
              return (
                e.enter("thematicBreak"),
                (r = l = o),
                (function o(l) {
                  return l === r
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), i++, t)
                          : (e.exit("thematicBreakSequence"),
                            eM(n) ? eN(e, o, "whitespace")(n) : o(n));
                      })(l))
                    : i >= 3 && (null === l || eT(l))
                      ? (e.exit("thematicBreak"), t(l))
                      : n(l);
                })(l)
              );
            };
          },
        },
        eK = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  ej,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      eN(e, t, "listItemIndent", r.containerState.size + 1)(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !eM(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(eJ, t, i)(n));
                  },
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  eN(
                    e,
                    e.attempt(eK, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4,
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              o =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              l = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : eI(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(eZ, n, a)(t) : a(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(i) {
                      return eI(i) && ++l < 10
                        ? (e.consume(i), t)
                        : (!r.interrupt || l < 2) &&
                            (r.containerState.marker
                              ? i === r.containerState.marker
                              : 41 === i || 46 === i)
                          ? (e.exit("listItemValue"), a(i))
                          : n(i);
                    })(t)
                  );
              }
              return n(t);
            };
            function a(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(ej, r.interrupt ? n : s, e.attempt(eQ, c, u))
              );
            }
            function s(e) {
              return ((r.containerState.initialBlankLine = !0), o++, c(e));
            }
            function u(t) {
              return eM(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  c)
                : n(t);
            }
            function c(n) {
              return (
                (r.containerState.size =
                  o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
        },
        eQ = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return eN(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !eM(e) && i && "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5,
            );
          },
        },
        eJ = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return eN(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1,
            );
          },
        },
        eG = {
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return eM(t)
                  ? eN(
                      e,
                      i,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4,
                    )(t)
                  : i(t);
              };
              function i(r) {
                return e.attempt(eG, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  i
                );
              }
              return n(t);
            };
            function i(n) {
              return eM(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
        };
      function e1(e, t, n, r, i, o, l, a, s) {
        let u = s || Number.POSITIVE_INFINITY,
          c = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), f)
            : null === t || 32 === t || 41 === t || eE(t)
              ? n(t)
              : (e.enter(r),
                e.enter(l),
                e.enter(a),
                e.enter("chunkString", { contentType: "string" }),
                p(t));
        };
        function f(n) {
          return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
            : (e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              h(n));
        }
        function h(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(a), f(t))
            : null === t || 60 === t || eT(t)
              ? n(t)
              : (e.consume(t), 92 === t ? d : h);
        }
        function d(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), h) : h(t);
        }
        function p(i) {
          return !c && (null === i || 41 === i || eA(i))
            ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(i))
            : c < u && 40 === i
              ? (e.consume(i), c++, p)
              : 41 === i
                ? (e.consume(i), c--, p)
                : null === i || 32 === i || 40 === i || eE(i)
                  ? n(i)
                  : (e.consume(i), 92 === i ? g : p);
        }
        function g(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
      }
      function e0(e, t, n, r, i, o) {
        let l,
          a = this,
          s = 0;
        return function (t) {
          return (
            e.enter(r),
            e.enter(i),
            e.consume(t),
            e.exit(i),
            e.enter(o),
            u
          );
        };
        function u(f) {
          return s > 999 ||
            null === f ||
            91 === f ||
            (93 === f && !l) ||
            (94 === f && !s && "_hiddenFootnoteSupport" in a.parser.constructs)
            ? n(f)
            : 93 === f
              ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t)
              : eT(f)
                ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u)
                : (e.enter("chunkString", { contentType: "string" }), c(f));
        }
        function c(t) {
          return null === t || 91 === t || 93 === t || eT(t) || s++ > 999
            ? (e.exit("chunkString"), u(t))
            : (e.consume(t), l || (l = !eM(t)), 92 === t ? f : c);
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, c)
            : c(t);
        }
      }
      function e2(e, t, n, r, i, o) {
        let l;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (l = 40 === t ? 41 : t),
              a)
            : n(t);
        };
        function a(n) {
          return n === l
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(o), s(n));
        }
        function s(t) {
          return t === l
            ? (e.exit(o), a(l))
            : null === t
              ? n(t)
              : eT(t)
                ? (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  eN(e, s, "linePrefix"))
                : (e.enter("chunkString", { contentType: "string" }), u(t));
        }
        function u(t) {
          return t === l || null === t || eT(t)
            ? (e.exit("chunkString"), s(t))
            : (e.consume(t), 92 === t ? c : u);
        }
        function c(t) {
          return t === l || 92 === t ? (e.consume(t), u) : u(t);
        }
      }
      function e5(e, t) {
        let n;
        return function r(i) {
          return eT(i)
            ? (e.enter("lineEnding"),
              e.consume(i),
              e.exit("lineEnding"),
              (n = !0),
              r)
            : eM(i)
              ? eN(e, r, n ? "linePrefix" : "lineSuffix")(i)
              : t(i);
        };
      }
      function e6(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      let e4 = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (t) {
              return eA(t) ? e5(e, r)(t) : n(t);
            };
            function r(t) {
              return e2(
                e,
                i,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString",
              )(t);
            }
            function i(t) {
              return eM(t) ? eN(e, o, "whitespace")(t) : o(t);
            }
            function o(e) {
              return null === e || eT(e) ? t(e) : n(e);
            }
          },
        },
        e3 = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (e.enter("codeIndented"), eN(e, i, "linePrefix", 5)(t));
            };
            function i(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? o(n)
                      : eT(n)
                        ? e.attempt(e8, t, o)(n)
                        : (e.enter("codeFlowValue"),
                          (function n(r) {
                            return null === r || eT(r)
                              ? (e.exit("codeFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                  })(t)
                : n(t);
            }
            function o(n) {
              return (e.exit("codeIndented"), t(n));
            }
          },
        },
        e8 = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : eT(t)
                  ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    i)
                  : eN(e, o, "linePrefix", 5)(t);
            }
            function o(e) {
              let o = r.events[r.events.length - 1];
              return o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(e)
                : eT(e)
                  ? i(e)
                  : n(e);
            }
          },
        },
        e9 = {
          name: "setextUnderline",
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o = e.length;
            for (; o--; )
              if ("enter" === e[o][0]) {
                if ("content" === e[o][1].type) {
                  n = o;
                  break;
                }
                "paragraph" === e[o][1].type && (r = o);
              } else
                ("content" === e[o][1].type && e.splice(o, 1),
                  i || "definition" !== e[o][1].type || (i = o));
            let l = {
              type: "setextHeading",
              start: { ...e[n][1].start },
              end: { ...e[e.length - 1][1].end },
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", l, t]),
                  e.splice(i + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = { ...e[i][1].end }))
                : (e[n][1] = l),
              e.push(["exit", l, t]),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r,
              i = this;
            return function (t) {
              var l;
              let a,
                s = i.events.length;
              for (; s--; )
                if (
                  "lineEnding" !== i.events[s][1].type &&
                  "linePrefix" !== i.events[s][1].type &&
                  "content" !== i.events[s][1].type
                ) {
                  a = "paragraph" === i.events[s][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || a)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  (l = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        eM(n) ? eN(e, o, "lineSuffix")(n) : o(n));
                  })(l))
                : n(t);
            };
            function o(r) {
              return null === r || eT(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
        },
        e7 = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        te = ["pre", "script", "style", "textarea"],
        tt = {
          partial: !0,
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(ej, t, n)
              );
            };
          },
        },
        tn = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return eT(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        tr = {
          partial: !0,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
        },
        ti = {
          concrete: !0,
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r,
              i = this,
              o = {
                partial: !0,
                tokenize: function (e, t, n) {
                  let o = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      l
                    );
                  };
                  function l(t) {
                    return (
                      e.enter("codeFencedFence"),
                      eM(t)
                        ? eN(
                            e,
                            s,
                            "linePrefix",
                            i.parser.constructs.disable.null.includes(
                              "codeIndented",
                            )
                              ? void 0
                              : 4,
                          )(t)
                        : s(t)
                    );
                  }
                  function s(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(i) {
                          return i === r
                            ? (o++, e.consume(i), t)
                            : o >= a
                              ? (e.exit("codeFencedFenceSequence"),
                                eM(i) ? eN(e, u, "whitespace")(i) : u(i))
                              : n(i);
                        })(t))
                      : n(t);
                  }
                  function u(r) {
                    return null === r || eT(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
              },
              l = 0,
              a = 0;
            return function (t) {
              var o = t;
              let u = i.events[i.events.length - 1];
              return (
                (l =
                  u && "linePrefix" === u[1].type
                    ? u[2].sliceSerialize(u[1], !0).length
                    : 0),
                (r = o),
                e.enter("codeFenced"),
                e.enter("codeFencedFence"),
                e.enter("codeFencedFenceSequence"),
                (function t(i) {
                  return i === r
                    ? (a++, e.consume(i), t)
                    : a < 3
                      ? n(i)
                      : (e.exit("codeFencedFenceSequence"),
                        eM(i) ? eN(e, s, "whitespace")(i) : s(i));
                })(o)
              );
            };
            function s(o) {
              return null === o || eT(o)
                ? (e.exit("codeFencedFence"),
                  i.interrupt ? t(o) : e.check(tr, c, p)(o))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || eT(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        s(i))
                      : eM(i)
                        ? (e.exit("chunkString"),
                          e.exit("codeFencedFenceInfo"),
                          eN(e, u, "whitespace")(i))
                        : 96 === i && i === r
                          ? n(i)
                          : (e.consume(i), t);
                  })(o));
            }
            function u(t) {
              return null === t || eT(t)
                ? s(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || eT(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        s(i))
                      : 96 === i && i === r
                        ? n(i)
                        : (e.consume(i), t);
                  })(t));
            }
            function c(t) {
              return e.attempt(o, p, f)(t);
            }
            function f(t) {
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                h
              );
            }
            function h(t) {
              return l > 0 && eM(t) ? eN(e, d, "linePrefix", l + 1)(t) : d(t);
            }
            function d(t) {
              return null === t || eT(t)
                ? e.check(tr, c, p)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || eT(n)
                      ? (e.exit("codeFlowValue"), d(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function p(n) {
              return (e.exit("codeFenced"), t(n));
            }
          },
        },
        to = document.createElement("i");
      function tl(e) {
        let t = "&" + e + ";";
        to.innerHTML = t;
        let n = to.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
      let ta = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r,
              i,
              o = this,
              l = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                a
              );
            };
            function a(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  s)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (i = eS),
                  u(t));
            }
            function s(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (i = e_),
                  u)
                : (e.enter("characterReferenceValue"), (r = 7), (i = eI), u(t));
            }
            function u(a) {
              if (59 === a && l) {
                let r = e.exit("characterReferenceValue");
                return i !== eS || tl(o.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(a),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(a);
              }
              return i(a) && l++ < r ? (e.consume(a), u) : n(a);
            }
          },
        },
        ts = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
              );
            };
            function r(r) {
              return eO(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        tu = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                eN(e, t, "linePrefix")
              );
            };
          },
        };
      function tc(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      let tf = {
          name: "labelEnd",
          resolveAll: function (e) {
            let t = -1,
              n = [];
            for (; ++t < e.length; ) {
              let r = e[t][1];
              if (
                (n.push(e[t]),
                "labelImage" === r.type ||
                  "labelLink" === r.type ||
                  "labelEnd" === r.type)
              ) {
                let e = "labelImage" === r.type ? 4 : 2;
                ((r.type = "data"), (t += e));
              }
            }
            return (e.length !== n.length && em(e, 0, e.length, n), e);
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o,
              l = e.length,
              a = 0;
            for (; l--; )
              if (((n = e[l][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[l][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[l][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = l), "labelLink" !== n.type)
                ) {
                  a = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = l);
            let s = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: { ...e[r][1].start },
                end: { ...e[e.length - 1][1].end },
              },
              u = {
                type: "label",
                start: { ...e[r][1].start },
                end: { ...e[i][1].end },
              },
              c = {
                type: "labelText",
                start: { ...e[r + a + 2][1].end },
                end: { ...e[i - 2][1].start },
              };
            return (
              (o = ey(
                (o = [
                  ["enter", s, t],
                  ["enter", u, t],
                ]),
                e.slice(r + 1, r + a + 3),
              )),
              (o = ey(o, [["enter", c, t]])),
              (o = ey(
                o,
                tc(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + a + 4, i - 3),
                  t,
                ),
              )),
              (o = ey(o, [["exit", c, t], e[i - 2], e[i - 1], ["exit", u, t]])),
              (o = ey(o, e.slice(i + 1))),
              (o = ey(o, [["exit", s, t]])),
              em(e, r, e.length, o),
              e
            );
          },
          tokenize: function (e, t, n) {
            let r,
              i,
              o = this,
              l = o.events.length;
            for (; l--; )
              if (
                ("labelImage" === o.events[l][1].type ||
                  "labelLink" === o.events[l][1].type) &&
                !o.events[l][1]._balanced
              ) {
                r = o.events[l][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? c(t)
                  : ((i = o.parser.defined.includes(
                      e6(o.sliceSerialize({ start: r.end, end: o.now() })),
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    a)
                : n(t);
            };
            function a(t) {
              return 40 === t
                ? e.attempt(th, u, i ? u : c)(t)
                : 91 === t
                  ? e.attempt(td, u, i ? s : c)(t)
                  : i
                    ? u(t)
                    : c(t);
            }
            function s(t) {
              return e.attempt(tp, u, c)(t);
            }
            function u(e) {
              return t(e);
            }
            function c(e) {
              return ((r._balanced = !0), n(e));
            }
          },
        },
        th = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return eA(t) ? e5(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? u(t)
                : e1(
                    e,
                    o,
                    l,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32,
                  )(t);
            }
            function o(t) {
              return eA(t) ? e5(e, a)(t) : u(t);
            }
            function l(e) {
              return n(e);
            }
            function a(t) {
              return 34 === t || 39 === t || 40 === t
                ? e2(
                    e,
                    s,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString",
                  )(t)
                : u(t);
            }
            function s(t) {
              return eA(t) ? e5(e, u)(t) : u(t);
            }
            function u(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        td = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return e0.call(
                r,
                e,
                i,
                o,
                "reference",
                "referenceMarker",
                "referenceString",
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                e6(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1),
                ),
              )
                ? t(e)
                : n(e);
            }
            function o(e) {
              return n(e);
            }
          },
        },
        tp = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        tg = {
          name: "labelStartImage",
          resolveAll: tf.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                i
              );
            };
            function i(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  o)
                : n(t);
            }
            function o(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        };
      function tm(e) {
        return null === e || eA(e) || eD(e) ? 1 : eP(e) ? 2 : void 0;
      }
      let ty = {
        name: "attention",
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            o,
            l,
            a,
            s,
            u,
            c = -1;
          for (; ++c < e.length; )
            if (
              "enter" === e[c][0] &&
              "attentionSequence" === e[c][1].type &&
              e[c][1]._close
            ) {
              for (n = c; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  a =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  let f = { ...e[n][1].end },
                    h = { ...e[c][1].start };
                  (tb(f, -a),
                    tb(h, a),
                    (o = {
                      type: a > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: { ...e[n][1].end },
                    }),
                    (l = {
                      type: a > 1 ? "strongSequence" : "emphasisSequence",
                      start: { ...e[c][1].start },
                      end: h,
                    }),
                    (i = {
                      type: a > 1 ? "strongText" : "emphasisText",
                      start: { ...e[n][1].end },
                      end: { ...e[c][1].start },
                    }),
                    (r = {
                      type: a > 1 ? "strong" : "emphasis",
                      start: { ...o.start },
                      end: { ...l.end },
                    }),
                    (e[n][1].end = { ...o.start }),
                    (e[c][1].start = { ...l.end }),
                    (s = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (s = ey(s, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (s = ey(s, [
                      ["enter", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["enter", i, t],
                    ])),
                    (s = ey(
                      s,
                      tc(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, c),
                        t,
                      ),
                    )),
                    (s = ey(s, [
                      ["exit", i, t],
                      ["enter", l, t],
                      ["exit", l, t],
                      ["exit", r, t],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((u = 2),
                        (s = ey(s, [
                          ["enter", e[c][1], t],
                          ["exit", e[c][1], t],
                        ])))
                      : (u = 0),
                    em(e, n - 1, c - n + 3, s),
                    (c = n + s.length - u - 2));
                  break;
                }
            }
          for (c = -1; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e;
        },
        tokenize: function (e, t) {
          let n,
            r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            o = tm(i);
          return function (l) {
            return (
              (n = l),
              e.enter("attentionSequence"),
              (function l(a) {
                if (a === n) return (e.consume(a), l);
                let s = e.exit("attentionSequence"),
                  u = tm(a),
                  c = !u || (2 === u && o) || r.includes(a),
                  f = !o || (2 === o && u) || r.includes(i);
                return (
                  (s._open = !!(42 === n ? c : c && (o || !f))),
                  (s._close = !!(42 === n ? f : f && (u || !c))),
                  t(a)
                );
              })(l)
            );
          };
        },
      };
      function tb(e, t) {
        ((e.column += t), (e.offset += t), (e._bufferIndex += t));
      }
      let tv = {
          name: "labelStartLink",
          resolveAll: tf.resolveAll,
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                i
              );
            };
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
        },
        tx = {
          42: eK,
          43: eK,
          45: eK,
          48: eK,
          49: eK,
          50: eK,
          51: eK,
          52: eK,
          53: eK,
          54: eK,
          55: eK,
          56: eK,
          57: eK,
          62: eG,
        },
        tk = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r,
                i = this;
              return function (t) {
                var r;
                return (
                  e.enter("definition"),
                  (r = t),
                  e0.call(
                    i,
                    e,
                    o,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString",
                  )(r)
                );
              };
              function o(t) {
                return ((r = e6(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1),
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    l)
                  : n(t);
              }
              function l(t) {
                return eA(t) ? e5(e, a)(t) : a(t);
              }
              function a(t) {
                return e1(
                  e,
                  s,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString",
                )(t);
              }
              function s(t) {
                return e.attempt(e4, u, u)(t);
              }
              function u(t) {
                return eM(t) ? eN(e, c, "whitespace")(t) : c(t);
              }
              function c(o) {
                return null === o || eT(o)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(o))
                  : n(o);
              }
            },
          },
        },
        tw = { [-2]: e3, [-1]: e3, 32: e3 },
        tS = {
          35: {
            name: "headingAtx",
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                o = 3;
              return (
                "whitespace" === e[3][1].type && (o += 2),
                i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (o === i - 1 ||
                    (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                  (i -= o + 1 === i ? 2 : 4),
                i > o &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  em(e, o, i - o + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                var o;
                return (
                  e.enter("atxHeading"),
                  (o = i),
                  e.enter("atxHeadingSequence"),
                  (function i(o) {
                    return 35 === o && r++ < 6
                      ? (e.consume(o), i)
                      : null === o || eA(o)
                        ? (e.exit("atxHeadingSequence"),
                          (function n(r) {
                            return 35 === r
                              ? (e.enter("atxHeadingSequence"),
                                (function t(r) {
                                  return 35 === r
                                    ? (e.consume(r), t)
                                    : (e.exit("atxHeadingSequence"), n(r));
                                })(r))
                              : null === r || eT(r)
                                ? (e.exit("atxHeading"), t(r))
                                : eM(r)
                                  ? eN(e, n, "whitespace")(r)
                                  : (e.enter("atxHeadingText"),
                                    (function t(r) {
                                      return null === r || 35 === r || eA(r)
                                        ? (e.exit("atxHeadingText"), n(r))
                                        : (e.consume(r), t);
                                    })(r));
                          })(o))
                        : n(o);
                  })(o)
                );
              };
            },
          },
          42: eZ,
          45: [e9, eZ],
          60: {
            concrete: !0,
            name: "htmlFlow",
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                o,
                l,
                a,
                s = this;
              return function (t) {
                var n;
                return (
                  (n = t),
                  e.enter("htmlFlow"),
                  e.enter("htmlFlowData"),
                  e.consume(n),
                  u
                );
              };
              function u(l) {
                return 33 === l
                  ? (e.consume(l), c)
                  : 47 === l
                    ? (e.consume(l), (i = !0), d)
                    : 63 === l
                      ? (e.consume(l), (r = 3), s.interrupt ? t : P)
                      : ew(l)
                        ? (e.consume(l), (o = String.fromCharCode(l)), p)
                        : n(l);
              }
              function c(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), f)
                  : 91 === i
                    ? (e.consume(i), (r = 5), (l = 0), h)
                    : ew(i)
                      ? (e.consume(i), (r = 4), s.interrupt ? t : P)
                      : n(i);
              }
              function f(r) {
                return 45 === r ? (e.consume(r), s.interrupt ? t : P) : n(r);
              }
              function h(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(l++)
                  ? (e.consume(r), l === i.length)
                    ? s.interrupt
                      ? t
                      : C
                    : h
                  : n(r);
              }
              function d(t) {
                return ew(t)
                  ? (e.consume(t), (o = String.fromCharCode(t)), p)
                  : n(t);
              }
              function p(l) {
                if (null === l || 47 === l || 62 === l || eA(l)) {
                  let a = 47 === l,
                    u = o.toLowerCase();
                  return !a && !i && te.includes(u)
                    ? ((r = 1), s.interrupt ? t(l) : C(l))
                    : e7.includes(o.toLowerCase())
                      ? ((r = 6), a)
                        ? (e.consume(l), g)
                        : s.interrupt
                          ? t(l)
                          : C(l)
                      : ((r = 7),
                        s.interrupt && !s.parser.lazy[s.now().line]
                          ? n(l)
                          : i
                            ? (function t(n) {
                                return eM(n) ? (e.consume(n), t) : w(n);
                              })(l)
                            : m(l));
                }
                return 45 === l || eS(l)
                  ? (e.consume(l), (o += String.fromCharCode(l)), p)
                  : n(l);
              }
              function g(r) {
                return 62 === r ? (e.consume(r), s.interrupt ? t : C) : n(r);
              }
              function m(t) {
                return 47 === t
                  ? (e.consume(t), w)
                  : 58 === t || 95 === t || ew(t)
                    ? (e.consume(t), y)
                    : eM(t)
                      ? (e.consume(t), m)
                      : w(t);
              }
              function y(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || eS(t)
                  ? (e.consume(t), y)
                  : b(t);
              }
              function b(t) {
                return 61 === t
                  ? (e.consume(t), v)
                  : eM(t)
                    ? (e.consume(t), b)
                    : m(t);
              }
              function v(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                    ? (e.consume(t), (a = t), x)
                    : eM(t)
                      ? (e.consume(t), v)
                      : (function t(n) {
                          return null === n ||
                            34 === n ||
                            39 === n ||
                            47 === n ||
                            60 === n ||
                            61 === n ||
                            62 === n ||
                            96 === n ||
                            eA(n)
                            ? b(n)
                            : (e.consume(n), t);
                        })(t);
              }
              function x(t) {
                return t === a
                  ? (e.consume(t), (a = null), k)
                  : null === t || eT(t)
                    ? n(t)
                    : (e.consume(t), x);
              }
              function k(e) {
                return 47 === e || 62 === e || eM(e) ? m(e) : n(e);
              }
              function w(t) {
                return 62 === t ? (e.consume(t), S) : n(t);
              }
              function S(t) {
                return null === t || eT(t)
                  ? C(t)
                  : eM(t)
                    ? (e.consume(t), S)
                    : n(t);
              }
              function C(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), O)
                  : 60 === t && 1 === r
                    ? (e.consume(t), T)
                    : 62 === t && 4 === r
                      ? (e.consume(t), D)
                      : 63 === t && 3 === r
                        ? (e.consume(t), P)
                        : 93 === t && 5 === r
                          ? (e.consume(t), M)
                          : eT(t) && (6 === r || 7 === r)
                            ? (e.exit("htmlFlowData"), e.check(tt, L, E)(t))
                            : null === t || eT(t)
                              ? (e.exit("htmlFlowData"), E(t))
                              : (e.consume(t), C);
              }
              function E(t) {
                return e.check(tn, I, L)(t);
              }
              function I(t) {
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  _
                );
              }
              function _(t) {
                return null === t || eT(t)
                  ? E(t)
                  : (e.enter("htmlFlowData"), C(t));
              }
              function O(t) {
                return 45 === t ? (e.consume(t), P) : C(t);
              }
              function T(t) {
                return 47 === t ? (e.consume(t), (o = ""), A) : C(t);
              }
              function A(t) {
                if (62 === t) {
                  let n = o.toLowerCase();
                  return te.includes(n) ? (e.consume(t), D) : C(t);
                }
                return ew(t) && o.length < 8
                  ? (e.consume(t), (o += String.fromCharCode(t)), A)
                  : C(t);
              }
              function M(t) {
                return 93 === t ? (e.consume(t), P) : C(t);
              }
              function P(t) {
                return 62 === t
                  ? (e.consume(t), D)
                  : 45 === t && 2 === r
                    ? (e.consume(t), P)
                    : C(t);
              }
              function D(t) {
                return null === t || eT(t)
                  ? (e.exit("htmlFlowData"), L(t))
                  : (e.consume(t), D);
              }
              function L(n) {
                return (e.exit("htmlFlow"), t(n));
              }
            },
          },
          61: e9,
          95: eZ,
          96: ti,
          126: ti,
        },
        tC = { 38: ta, 92: ts },
        tE = {
          [-5]: tu,
          [-4]: tu,
          [-3]: tu,
          33: tg,
          38: ta,
          42: ty,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                  );
                };
                function i(t) {
                  return ew(t) ? (e.consume(t), o) : 64 === t ? n(t) : a(t);
                }
                function o(t) {
                  return 43 === t || 45 === t || 46 === t || eS(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), l)
                          : (43 === n || 45 === n || 46 === n || eS(n)) &&
                              r++ < 32
                            ? (e.consume(n), t)
                            : ((r = 0), a(n));
                      })(t))
                    : a(t);
                }
                function l(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || eE(r)
                      ? n(r)
                      : (e.consume(r), l);
                }
                function a(t) {
                  return 64 === t
                    ? (e.consume(t), s)
                    : eC(t)
                      ? (e.consume(t), a)
                      : n(t);
                }
                function s(i) {
                  return eS(i)
                    ? (function i(o) {
                        return 46 === o
                          ? (e.consume(o), (r = 0), s)
                          : 62 === o
                            ? ((e.exit("autolinkProtocol").type =
                                "autolinkEmail"),
                              e.enter("autolinkMarker"),
                              e.consume(o),
                              e.exit("autolinkMarker"),
                              e.exit("autolink"),
                              t)
                            : (function t(o) {
                                if ((45 === o || eS(o)) && r++ < 63) {
                                  let n = 45 === o ? t : i;
                                  return (e.consume(o), n);
                                }
                                return n(o);
                              })(o);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r,
                  i,
                  o,
                  l = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    a
                  );
                };
                function a(t) {
                  return 33 === t
                    ? (e.consume(t), s)
                    : 47 === t
                      ? (e.consume(t), x)
                      : 63 === t
                        ? (e.consume(t), b)
                        : ew(t)
                          ? (e.consume(t), w)
                          : n(t);
                }
                function s(t) {
                  return 45 === t
                    ? (e.consume(t), u)
                    : 91 === t
                      ? (e.consume(t), (i = 0), d)
                      : ew(t)
                        ? (e.consume(t), y)
                        : n(t);
                }
                function u(t) {
                  return 45 === t ? (e.consume(t), h) : n(t);
                }
                function c(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                      ? (e.consume(t), f)
                      : eT(t)
                        ? ((o = c), A(t))
                        : (e.consume(t), c);
                }
                function f(t) {
                  return 45 === t ? (e.consume(t), h) : c(t);
                }
                function h(e) {
                  return 62 === e ? T(e) : 45 === e ? f(e) : c(e);
                }
                function d(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? p : d)
                    : n(t);
                }
                function p(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                      ? (e.consume(t), g)
                      : eT(t)
                        ? ((o = p), A(t))
                        : (e.consume(t), p);
                }
                function g(t) {
                  return 93 === t ? (e.consume(t), m) : p(t);
                }
                function m(t) {
                  return 62 === t ? T(t) : 93 === t ? (e.consume(t), m) : p(t);
                }
                function y(t) {
                  return null === t || 62 === t
                    ? T(t)
                    : eT(t)
                      ? ((o = y), A(t))
                      : (e.consume(t), y);
                }
                function b(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                      ? (e.consume(t), v)
                      : eT(t)
                        ? ((o = b), A(t))
                        : (e.consume(t), b);
                }
                function v(e) {
                  return 62 === e ? T(e) : b(e);
                }
                function x(t) {
                  return ew(t) ? (e.consume(t), k) : n(t);
                }
                function k(t) {
                  return 45 === t || eS(t)
                    ? (e.consume(t), k)
                    : (function t(n) {
                        return eT(n)
                          ? ((o = t), A(n))
                          : eM(n)
                            ? (e.consume(n), t)
                            : T(n);
                      })(t);
                }
                function w(t) {
                  return 45 === t || eS(t)
                    ? (e.consume(t), w)
                    : 47 === t || 62 === t || eA(t)
                      ? S(t)
                      : n(t);
                }
                function S(t) {
                  return 47 === t
                    ? (e.consume(t), T)
                    : 58 === t || 95 === t || ew(t)
                      ? (e.consume(t), C)
                      : eT(t)
                        ? ((o = S), A(t))
                        : eM(t)
                          ? (e.consume(t), S)
                          : T(t);
                }
                function C(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t || eS(t)
                    ? (e.consume(t), C)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), E)
                          : eT(n)
                            ? ((o = t), A(n))
                            : eM(n)
                              ? (e.consume(n), t)
                              : S(n);
                      })(t);
                }
                function E(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                      ? (e.consume(t), (r = t), I)
                      : eT(t)
                        ? ((o = E), A(t))
                        : eM(t)
                          ? (e.consume(t), E)
                          : (e.consume(t), _);
                }
                function I(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), O)
                    : null === t
                      ? n(t)
                      : eT(t)
                        ? ((o = I), A(t))
                        : (e.consume(t), I);
                }
                function _(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || eA(t)
                      ? S(t)
                      : (e.consume(t), _);
                }
                function O(e) {
                  return 47 === e || 62 === e || eA(e) ? S(e) : n(e);
                }
                function T(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function A(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    M
                  );
                }
                function M(t) {
                  return eM(t)
                    ? eN(
                        e,
                        P,
                        "linePrefix",
                        l.parser.constructs.disable.null.includes(
                          "codeIndented",
                        )
                          ? void 0
                          : 4,
                      )(t)
                    : P(t);
                }
                function P(t) {
                  return (e.enter("htmlTextData"), o(t));
                }
              },
            },
          ],
          91: tv,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return (e.enter("hardBreakEscape"), e.consume(t), r);
                };
                function r(r) {
                  return eT(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
                }
              },
            },
            ts,
          ],
          93: tf,
          95: ty,
          96: {
            name: "codeText",
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    ((e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2));
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            tokenize: function (e, t, n) {
              let r,
                i,
                o = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), o++, t)
                      : (e.exit("codeTextSequence"), l(n));
                  })(t)
                );
              };
              function l(s) {
                return null === s
                  ? n(s)
                  : 32 === s
                    ? (e.enter("space"), e.consume(s), e.exit("space"), l)
                    : 96 === s
                      ? ((i = e.enter("codeTextSequence")),
                        (r = 0),
                        (function n(l) {
                          return 96 === l
                            ? (e.consume(l), r++, n)
                            : r === o
                              ? (e.exit("codeTextSequence"),
                                e.exit("codeText"),
                                t(l))
                              : ((i.type = "codeTextData"), a(l));
                        })(s))
                      : eT(s)
                        ? (e.enter("lineEnding"),
                          e.consume(s),
                          e.exit("lineEnding"),
                          l)
                        : (e.enter("codeTextData"), a(s));
              }
              function a(t) {
                return null === t || 32 === t || 96 === t || eT(t)
                  ? (e.exit("codeTextData"), l(t))
                  : (e.consume(t), a);
              }
            },
          },
        },
        tI = { null: [ty, eV] },
        t_ = { null: [42, 95] },
        tO = { null: [] },
        tT = /[\0\t\n\r]/g;
      function tA(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let tM =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function tP(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return tA(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return tl(n) || e;
      }
      let tD = {}.hasOwnProperty;
      function tL(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function tN(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              Y({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              Y({ start: t.start, end: t.end }) +
              ") is open",
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            Y({ start: t.start, end: t.end }) +
            ") is still open",
        );
      }
      function tR(e) {
        let t = this;
        t.parser = function (n) {
          var r, o;
          let l, a, s, u;
          return (
            "string" !=
              typeof (r = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((o = r), (r = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: r(y),
                  autolinkProtocol: u,
                  autolinkEmail: u,
                  atxHeading: r(p),
                  blockQuote: r(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: u,
                  characterReference: u,
                  codeFenced: r(d),
                  codeFencedFenceInfo: i,
                  codeFencedFenceMeta: i,
                  codeIndented: r(d, i),
                  codeText: r(function () {
                    return { type: "inlineCode", value: "" };
                  }, i),
                  codeTextData: u,
                  data: u,
                  codeFlowValue: u,
                  definition: r(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: i,
                  definitionLabelString: i,
                  definitionTitleString: i,
                  emphasis: r(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: r(g),
                  hardBreakTrailing: r(g),
                  htmlFlow: r(m, i),
                  htmlFlowData: u,
                  htmlText: r(m, i),
                  htmlTextData: u,
                  image: r(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: i,
                  link: r(y),
                  listItem: r(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(b, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(b),
                  paragraph: r(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: i,
                  resourceDestinationString: i,
                  resourceTitleString: i,
                  setextHeading: r(p),
                  strong: r(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: l(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    t.depth || (t.depth = this.sliceSerialize(e).length);
                  },
                  autolink: l(),
                  autolinkEmail: function (e) {
                    (c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e)));
                  },
                  autolinkProtocol: function (e) {
                    (c.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e)));
                  },
                  blockQuote: l(),
                  characterEscapeValue: c,
                  characterReferenceMarkerHexadecimal: h,
                  characterReferenceMarkerNumeric: h,
                  characterReferenceValue: function (e) {
                    let t,
                      n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = tA(
                          n,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16,
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (t = tl(n));
                    let i = this.stack[this.stack.length - 1];
                    i.value += t;
                  },
                  characterReference: function (e) {
                    this.stack.pop().position.end = tL(e.end);
                  },
                  codeFenced: l(function () {
                    let e = this.resume();
                    ((this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      "",
                    )),
                      (this.data.flowCodeInside = void 0));
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: c,
                  codeIndented: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      "",
                    );
                  }),
                  codeText: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: c,
                  data: c,
                  definition: l(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    ((n.label = t),
                      (n.identifier = e6(
                        this.sliceSerialize(e),
                      ).toLowerCase()));
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: l(),
                  hardBreakEscape: l(f),
                  hardBreakTrailing: l(f),
                  htmlFlow: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: c,
                  htmlText: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: c,
                  image: l(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      ((e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title);
                    } else (delete e.identifier, delete e.label);
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    ((this.data.inReference = !0),
                      "link" === n.type
                        ? (n.children = e.children)
                        : (n.alt = t));
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    ((n.label = t.replace(tM, tP)),
                      (n.identifier = e6(t).toLowerCase()));
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      ((n.children[n.children.length - 1].position.end = tL(
                        e.end,
                      )),
                        (this.data.atHardBreak = void 0));
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (u.call(this, e), c.call(this, e));
                  },
                  link: l(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      ((e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title);
                    } else (delete e.identifier, delete e.label);
                    this.data.referenceType = void 0;
                  }),
                  listItem: l(),
                  listOrdered: l(),
                  listUnordered: l(),
                  paragraph: l(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    ((n.label = t),
                      (n.identifier = e6(this.sliceSerialize(e)).toLowerCase()),
                      (this.data.referenceType = "full"));
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: l(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: l(),
                  thematicBreak: l(),
                },
              };
              !(function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let i = n[r];
                  Array.isArray(i)
                    ? e(t, i)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (tD.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, i);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  l = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: o,
                    exit: a,
                    buffer: i,
                    resume: s,
                    data: n,
                  },
                  u = [],
                  c = -1;
                for (; ++c < e.length; )
                  ("listOrdered" === e[c][1].type ||
                    "listUnordered" === e[c][1].type) &&
                    ("enter" === e[c][0]
                      ? u.push(c)
                      : (c = (function (e, t, n) {
                          let r,
                            i,
                            o,
                            l,
                            a = t - 1,
                            s = -1,
                            u = !1;
                          for (; ++a <= n; ) {
                            let t = e[a];
                            switch (t[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                ("enter" === t[0] ? s++ : s--, (l = void 0));
                                break;
                              case "lineEndingBlank":
                                "enter" === t[0] &&
                                  (!r || l || s || o || (o = a), (l = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                l = void 0;
                            }
                            if (
                              (!s &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                              (-1 === s &&
                                "exit" === t[0] &&
                                ("listUnordered" === t[1].type ||
                                  "listOrdered" === t[1].type))
                            ) {
                              if (r) {
                                let l = a;
                                for (i = void 0; l--; ) {
                                  let t = e[l];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    (i &&
                                      ((e[i][1].type = "lineEndingBlank"),
                                      (u = !0)),
                                      (t[1].type = "lineEnding"),
                                      (i = l));
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                (o && (!i || o < i) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    i ? e[i][1].start : t[1].end,
                                  )),
                                  e.splice(i || a, 0, ["exit", r, t[2]]),
                                  a++,
                                  n++);
                              }
                              if ("listItemPrefix" === t[1].type) {
                                let i = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                ((r = i),
                                  e.splice(a, 0, ["enter", i, t[2]]),
                                  a++,
                                  n++,
                                  (o = void 0),
                                  (l = !0));
                              }
                            }
                          }
                          return ((e[t][1]._spread = u), n);
                        })(e, u.pop(), c)));
                for (c = -1; ++c < e.length; ) {
                  let n = t[e[c][0]];
                  tD.call(n, e[c][1].type) &&
                    n[e[c][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[c][2].sliceSerialize },
                        l,
                      ),
                      e[c][1],
                    );
                }
                if (l.tokenStack.length > 0) {
                  let e = l.tokenStack[l.tokenStack.length - 1];
                  (e[1] || tN).call(l, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: tL(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 },
                    ),
                    end: tL(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 },
                    ),
                  },
                    c = -1;
                  ++c < t.transforms.length;

                )
                  r = t.transforms[c](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  (o.call(this, e(n), n), t && t.call(this, n));
                };
              }
              function i() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function o(e, t, n) {
                (this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n || void 0]),
                  (e.position = { start: tL(t.start), end: void 0 }));
              }
              function l(e) {
                return function (t) {
                  (e && e.call(this, t), a.call(this, t));
                };
              }
              function a(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t
                      ? t.call(this, e, r[0])
                      : (r[1] || tN).call(this, e, r[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      Y({ start: e.start, end: e.end }) +
                      "): it’s not open",
                  );
                n.position.end = tL(e.end);
              }
              function s() {
                var e;
                return ep(
                  this.stack.pop(),
                  "boolean" != typeof ed.includeImageAlt || ed.includeImageAlt,
                  "boolean" != typeof ed.includeHtml || ed.includeHtml,
                );
              }
              function u(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                ((n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: tL(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n));
              }
              function c(e) {
                let t = this.stack.pop();
                ((t.value += this.sliceSerialize(e)),
                  (t.position.end = tL(e.end)));
              }
              function f() {
                this.data.atHardBreak = !0;
              }
              function h(e) {
                this.data.characterReferenceType = e.type;
              }
              function d() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function p() {
                return { type: "heading", depth: 0, children: [] };
              }
              function g() {
                return { type: "break" };
              }
              function m() {
                return { type: "html", value: "" };
              }
              function y() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function b(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(o)(
              (function (e) {
                for (; !ex(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    constructs: (function (e) {
                      let t = {},
                        n = -1;
                      for (; ++n < e.length; )
                        !(function (e, t) {
                          let n;
                          for (n in t) {
                            let r,
                              i =
                                (ek.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                              o = t[n];
                            if (o)
                              for (r in o) {
                                ek.call(i, r) || (i[r] = []);
                                let e = o[r];
                                !(function (e, t) {
                                  let n = -1,
                                    r = [];
                                  for (; ++n < t.length; )
                                    ("after" === t[n].add ? e : r).push(t[n]);
                                  em(e, 0, 0, r);
                                })(i[r], Array.isArray(e) ? e : e ? [e] : []);
                              }
                          }
                        })(t, e[n]);
                      return t;
                    })([i, ...((e || {}).extensions || [])]),
                    content: n(eR),
                    defined: [],
                    document: n(eF),
                    flow: n(eU),
                    lazy: {},
                    string: n(eW),
                    text: n(e$),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = {
                            _bufferIndex: -1,
                            _index: 0,
                            line: (n && n.line) || 1,
                            column: (n && n.column) || 1,
                            offset: (n && n.offset) || 0,
                          },
                          i = {},
                          o = [],
                          l = [],
                          a = [],
                          s = {
                            attempt: p(function (e, t) {
                              g(e, t.from);
                            }),
                            check: p(d),
                            consume: function (e) {
                              (eT(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  m())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === l[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (u.previous = e));
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = h()),
                                u.events.push(["enter", n, u]),
                                a.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = a.pop();
                              return (
                                (t.end = h()),
                                u.events.push(["exit", t, u]),
                                t
                              );
                            },
                            interrupt: p(d, { interrupt: !0 }),
                          },
                          u = {
                            code: null,
                            containerState: {},
                            defineSkip: function (e) {
                              ((i[e.line] = e.column), m());
                            },
                            events: [],
                            now: h,
                            parser: e,
                            previous: null,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let o,
                                    l = e[r];
                                  if ("string" == typeof l) o = l;
                                  else
                                    switch (l) {
                                      case -5:
                                        o = "\r";
                                        break;
                                      case -4:
                                        o = "\n";
                                        break;
                                      case -3:
                                        o = "\r\n";
                                        break;
                                      case -2:
                                        o = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        o = " ";
                                        break;
                                      default:
                                        o = String.fromCharCode(l);
                                    }
                                  ((n = -2 === l), i.push(o));
                                }
                                return i.join("");
                              })(f(e), t);
                            },
                            sliceStream: f,
                            write: function (e) {
                              return ((l = ey(l, e)),
                              (function () {
                                let e;
                                for (; r._index < l.length; ) {
                                  let n = l[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      ((t = n.charCodeAt(r._bufferIndex)),
                                        (c = c(t)));
                                    }
                                  else c = c(n);
                                }
                              })(),
                              null !== l[l.length - 1])
                                ? []
                                : (g(t, 0),
                                  (u.events = tc(o, u.events, u)),
                                  u.events);
                            },
                          },
                          c = t.tokenize.call(u, s);
                        return (t.resolveAll && o.push(t), u);
                        function f(e) {
                          return (function (e, t) {
                            let n,
                              r = t.start._index,
                              i = t.start._bufferIndex,
                              o = t.end._index,
                              l = t.end._bufferIndex;
                            if (r === o) n = [e[r].slice(i, l)];
                            else {
                              if (((n = e.slice(r, o)), i > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(i))
                                  : n.shift();
                              }
                              l > 0 && n.push(e[o].slice(0, l));
                            }
                            return n;
                          })(l, e);
                        }
                        function h() {
                          let {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: i,
                            offset: o,
                          } = r;
                          return {
                            _bufferIndex: e,
                            _index: t,
                            line: n,
                            column: i,
                            offset: o,
                          };
                        }
                        function d(e, t) {
                          t.restore();
                        }
                        function p(e, t) {
                          return function (n, i, o) {
                            var l;
                            let c, f, d, p;
                            return Array.isArray(n)
                              ? g(n)
                              : "tokenize" in n
                                ? g([n])
                                : ((l = n),
                                  function (e) {
                                    let t = null !== e && l[e],
                                      n = null !== e && l.null;
                                    return g([
                                      ...(Array.isArray(t) ? t : t ? [t] : []),
                                      ...(Array.isArray(n) ? n : n ? [n] : []),
                                    ])(e);
                                  });
                            function g(e) {
                              return ((c = e), (f = 0), 0 === e.length)
                                ? o
                                : y(e[f]);
                            }
                            function y(e) {
                              return function (n) {
                                return ((p = (function () {
                                  let e = h(),
                                    t = u.previous,
                                    n = u.currentConstruct,
                                    i = u.events.length,
                                    o = Array.from(a);
                                  return {
                                    from: i,
                                    restore: function () {
                                      ((r = e),
                                        (u.previous = t),
                                        (u.currentConstruct = n),
                                        (u.events.length = i),
                                        (a = o),
                                        m());
                                    },
                                  };
                                })()),
                                (d = e),
                                e.partial || (u.currentConstruct = e),
                                e.name &&
                                  u.parser.constructs.disable.null.includes(
                                    e.name,
                                  ))
                                  ? v(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(u), t)
                                        : u,
                                      s,
                                      b,
                                      v,
                                    )(n);
                              };
                            }
                            function b(t) {
                              return (e(d, p), i);
                            }
                            function v(e) {
                              return (p.restore(), ++f < c.length)
                                ? y(c[f])
                                : o;
                            }
                          };
                        }
                        function g(e, t) {
                          (e.resolveAll && !o.includes(e) && o.push(e),
                            e.resolve &&
                              em(
                                u.events,
                                t,
                                u.events.length - t,
                                e.resolve(u.events.slice(t), u),
                              ),
                            e.resolveTo &&
                              (u.events = e.resolveTo(u.events, u)));
                        }
                        function m() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]),
                            (r.offset += i[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(o)
                  .document()
                  .write(
                    ((a = 1),
                    (s = ""),
                    (u = !0),
                    function (e, t, n) {
                      let r,
                        i,
                        o,
                        c,
                        f,
                        h = [];
                      for (
                        e =
                          s +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          o = 0,
                          s = "",
                          u && (65279 === e.charCodeAt(0) && o++, (u = void 0));
                        o < e.length;

                      ) {
                        if (
                          ((tT.lastIndex = o),
                          (c =
                            (r = tT.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (f = e.charCodeAt(c)),
                          !r)
                        ) {
                          s = e.slice(o);
                          break;
                        }
                        if (10 === f && o === c && l)
                          (h.push(-3), (l = void 0));
                        else
                          switch (
                            (l && (h.push(-5), (l = void 0)),
                            o < c && (h.push(e.slice(o, c)), (a += c - o)),
                            f)
                          ) {
                            case 0:
                              (h.push(65533), a++);
                              break;
                            case 9:
                              for (
                                i = 4 * Math.ceil(a / 4), h.push(-2);
                                a++ < i;

                              )
                                h.push(-1);
                              break;
                            case 10:
                              (h.push(-4), (a = 1));
                              break;
                            default:
                              ((l = !0), (a = 1));
                          }
                        o = c + 1;
                      }
                      return (
                        n && (l && h.push(-5), s && h.push(s), h.push(null)),
                        h
                      );
                    })(n, r, !0),
                  ),
              ),
            )
          );
        };
      }
      let tF = "object" == typeof self ? self : globalThis,
        tz = (e, t) => {
          let n = (t, n) => (e.set(n, t), t),
            r = (i) => {
              if (e.has(i)) return e.get(i);
              let [o, l] = t[i];
              switch (o) {
                case 0:
                case -1:
                  return n(l, i);
                case 1: {
                  let e = n([], i);
                  for (let t of l) e.push(r(t));
                  return e;
                }
                case 2: {
                  let e = n({}, i);
                  for (let [t, n] of l) e[r(t)] = r(n);
                  return e;
                }
                case 3:
                  return n(new Date(l), i);
                case 4: {
                  let { source: e, flags: t } = l;
                  return n(new RegExp(e, t), i);
                }
                case 5: {
                  let e = n(new Map(), i);
                  for (let [t, n] of l) e.set(r(t), r(n));
                  return e;
                }
                case 6: {
                  let e = n(new Set(), i);
                  for (let t of l) e.add(r(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = l;
                  return n(new tF[e](t), i);
                }
                case 8:
                  return n(BigInt(l), i);
                case "BigInt":
                  return n(Object(BigInt(l)), i);
                case "ArrayBuffer":
                  return n(new Uint8Array(l).buffer, l);
                case "DataView": {
                  let { buffer: e } = new Uint8Array(l);
                  return n(new DataView(e), l);
                }
              }
              return n(new tF[o](l), i);
            };
          return r;
        },
        tj = (e) => tz(new Map(), e)(0),
        { toString: tB } = {},
        { keys: tH } = Object,
        tU = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = tB.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
            case "DataView":
              return [1, n];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
              ? [7, n]
              : [2, n];
        },
        tV = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
        tW = (e, t, n, r) => {
          let i = (e, t) => {
              let i = r.push(e) - 1;
              return (n.set(t, i), i);
            },
            o = (r) => {
              if (n.has(r)) return n.get(r);
              let [l, a] = tU(r);
              switch (l) {
                case 0: {
                  let t = r;
                  switch (a) {
                    case "bigint":
                      ((l = 8), (t = r.toString()));
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + a);
                      t = null;
                      break;
                    case "undefined":
                      return i([-1], r);
                  }
                  return i([l, t], r);
                }
                case 1: {
                  if (a) {
                    let e = r;
                    return (
                      "DataView" === a
                        ? (e = new Uint8Array(r.buffer))
                        : "ArrayBuffer" === a && (e = new Uint8Array(r)),
                      i([a, [...e]], r)
                    );
                  }
                  let e = [],
                    t = i([l, e], r);
                  for (let t of r) e.push(o(t));
                  return t;
                }
                case 2: {
                  if (a)
                    switch (a) {
                      case "BigInt":
                        return i([a, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return i([a, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return o(r.toJSON());
                  let n = [],
                    s = i([l, n], r);
                  for (let t of tH(r))
                    (e || !tV(tU(r[t]))) && n.push([o(t), o(r[t])]);
                  return s;
                }
                case 3:
                  return i([l, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return i([l, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = i([l, t], r);
                  for (let [n, i] of r)
                    (e || !(tV(tU(n)) || tV(tU(i)))) && t.push([o(n), o(i)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = i([l, t], r);
                  for (let n of r) (e || !tV(tU(n))) && t.push(o(n));
                  return n;
                }
              }
              let { message: s } = r;
              return i([l, { name: a, message: s }], r);
            };
          return o;
        },
        t$ = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return (tW(!(t || n), !!t, new Map(), r)(e), r);
        },
        tq =
          "function" == typeof structuredClone
            ? (e, t) =>
                t && ("json" in t || "lossy" in t)
                  ? tj(t$(e, t))
                  : structuredClone(e)
            : (e, t) => tj(t$(e, t));
      function tY(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let o = e.charCodeAt(n),
            l = "";
          if (37 === o && eS(e.charCodeAt(n + 1)) && eS(e.charCodeAt(n + 2)))
            i = 2;
          else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
              (l = String.fromCharCode(o));
          else if (o > 55295 && o < 57344) {
            let t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
              ? ((l = String.fromCharCode(o, t)), (i = 1))
              : (l = "�");
          } else l = String.fromCharCode(o);
          (l &&
            (t.push(e.slice(r, n), encodeURIComponent(l)),
            (r = n + i + 1),
            (l = "")),
            i && ((n += i), (i = 0)));
        }
        return t.join("") + e.slice(r);
      }
      function tX(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function tZ(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      let tK = function (e) {
        var t, n;
        if (null == e) return tJ;
        if ("function" == typeof e) return tQ(e);
        if ("object" == typeof e) {
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = tK(e[n]);
                return tQ(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : ((t = e),
              tQ(function (e) {
                let n;
                for (n in t) if (e[n] !== t[n]) return !1;
                return !0;
              }));
        }
        if ("string" == typeof e) {
          return (
            (n = e),
            tQ(function (e) {
              return e && e.type === n;
            })
          );
        }
        throw Error("Expected function, string, or object as test");
      };
      function tQ(e) {
        return function (t, n, r) {
          return !!(
            (function (e) {
              return null !== e && "object" == typeof e && "type" in e;
            })(t) &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function tJ() {
        return !0;
      }
      let tG = [];
      function t1(e, t, n, r) {
        let i, o, l, a;
        "function" == typeof t && "function" != typeof n
          ? ((o = void 0), (l = t), (i = n))
          : ((o = t), (l = n), (i = r));
        var s = o,
          u = function (e, t) {
            let n = t[t.length - 1],
              r = n ? n.children.indexOf(e) : void 0;
            return l(e, r, n);
          },
          c = i;
        "function" == typeof s && "function" != typeof u
          ? ((c = u), (u = s))
          : (a = s);
        let f = tK(a),
          h = c ? -1 : 1;
        (function e(t, n, r) {
          let i = t && "object" == typeof t ? t : {};
          if ("string" == typeof i.type) {
            let e =
              "string" == typeof i.tagName
                ? i.tagName
                : "string" == typeof i.name
                  ? i.name
                  : void 0;
            Object.defineProperty(o, "name", {
              value: "node (" + t.type + (e ? "<" + e + ">" : "") + ")",
            });
          }
          return o;
          function o() {
            var i;
            let o,
              l,
              a,
              d = tG;
            if (
              (!s || f(t, n, r[r.length - 1] || void 0)) &&
              !1 ===
                (d = Array.isArray((i = u(t, r)))
                  ? i
                  : "number" == typeof i
                    ? [!0, i]
                    : null == i
                      ? tG
                      : [i])[0]
            )
              return d;
            if ("children" in t && t.children && t.children && "skip" !== d[0])
              for (
                l = (c ? t.children.length : -1) + h, a = r.concat(t);
                l > -1 && l < t.children.length;

              ) {
                if (!1 === (o = e(t.children[l], l, a)())[0]) return o;
                l = "number" == typeof o[1] ? o[1] : l + h;
              }
            return d;
          }
        })(e, void 0, [])();
      }
      function t0(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          o = i[0];
        o && "text" === o.type
          ? (o.value = "[" + o.value)
          : i.unshift({ type: "text", value: "[" });
        let l = i[i.length - 1];
        return (
          l && "text" === l.type
            ? (l.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function t2(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function t5(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) (r++, (t = e.codePointAt(r)));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) (i--, (t = e.codePointAt(i - 1)));
        }
        return i > r ? e.slice(r, i) : "";
      }
      let t6 = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n),
            [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        footnoteReference: function (e, t) {
          let n,
            r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            i = String(t.identifier).toUpperCase(),
            o = tY(i.toLowerCase()),
            l = e.footnoteOrder.indexOf(i),
            a = e.footnoteCounts.get(i);
          (void 0 === a
            ? ((a = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = l + 1),
            (a += 1),
            e.footnoteCounts.set(i, a));
          let s = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + o,
              id: r + "fnref-" + o + (a > 1 ? "-" + a : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, s);
          let u = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [s],
          };
          return (e.patch(t, u), e.applyData(t, u));
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return (e.patch(t, n), e.applyData(t, n));
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return t0(e, t);
          let i = { src: tY(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "img",
            properties: i,
            children: [],
          };
          return (e.patch(t, o), e.applyData(t, o));
        },
        image: function (e, t) {
          let n = { src: tY(t.url) };
          (null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title));
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return (e.patch(t, r), e.applyData(t, r));
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return (e.patch(t, r), e.applyData(t, r));
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return t0(e, t);
          let i = { href: tY(r.url || "") };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "a",
            properties: i,
            children: e.all(t),
          };
          return (e.patch(t, o), e.applyData(t, o));
        },
        link: function (e, t) {
          let n = { href: tY(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return (e.patch(t, r), e.applyData(t, r));
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = t2(n[r]);
                  }
                  return t;
                })(n)
              : t2(t),
            o = {},
            l = [];
          if ("boolean" == typeof t.checked) {
            let e,
              n = r[0];
            (n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (o.className = ["task-list-item"]));
          }
          let a = -1;
          for (; ++a < r.length; ) {
            let e = r[a];
            ((i || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
              l.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || i
                ? l.push(e)
                : l.push(...e.children));
          }
          let s = r[r.length - 1];
          s &&
            (i || "element" !== s.type || "p" !== s.tagName) &&
            l.push({ type: "text", value: "\n" });
          let u = {
            type: "element",
            tagName: "li",
            properties: o,
            children: l,
          };
          return (e.patch(t, u), e.applyData(t, u));
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let o = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return (e.patch(t, o), e.applyData(t, o));
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return (e.patch(t, n), e.applyData(t, n));
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            (e.patch(t.children[0], n), i.push(n));
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              o = $(t.children[1]),
              l = W(t.children[t.children.length - 1]);
            (o && l && (r.position = { start: o, end: l }), i.push(r));
          }
          let o = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(i, !0),
          };
          return (e.patch(t, o), e.applyData(t, o));
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
            o = n && "table" === n.type ? n.align : void 0,
            l = o ? o.length : t.children.length,
            a = -1,
            s = [];
          for (; ++a < l; ) {
            let n = t.children[a],
              r = {},
              l = o ? o[a] : void 0;
            l && (r.align = l);
            let u = {
              type: "element",
              tagName: i,
              properties: r,
              children: [],
            };
            (n &&
              ((u.children = e.all(n)), e.patch(n, u), (u = e.applyData(n, u))),
              s.push(u));
          }
          let u = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(s, !0),
          };
          return (e.patch(t, u), e.applyData(t, u));
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                o = [];
              for (; r; )
                (o.push(t5(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t)));
              return (o.push(t5(t.slice(i), i > 0, !1)), o.join(""));
            })(String(t.value)),
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return (e.patch(t, n), e.applyData(t, n));
        },
        toml: t4,
        yaml: t4,
        definition: t4,
        footnoteDefinition: t4,
      };
      function t4() {}
      let t3 = {}.hasOwnProperty,
        t8 = {};
      function t9(e, t) {
        e.position &&
          (t.position = (function (e) {
            let t = $(e),
              n = W(e);
            if (t && n) return { start: t, end: n };
          })(e));
      }
      function t7(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          ("string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: "children" in n ? n.children : [n],
                })),
            "element" === n.type && i && Object.assign(n.properties, tq(i)),
            "children" in n && n.children && null != r && (n.children = r));
        }
        return n;
      }
      function ne(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          (r && n.push({ type: "text", value: "\n" }), n.push(e[r]));
        return (t && e.length > 0 && n.push({ type: "text", value: "\n" }), n);
      }
      function nt(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) (t++, (n = e.charCodeAt(t)));
        return e.slice(t);
      }
      function nn(e, t) {
        let n = (function (e, t) {
            let n = t || t8,
              r = new Map(),
              i = new Map(),
              o = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let i = o.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(i) ||
                            "text" !== i.type ||
                            (i.value = nt(i.value)),
                          !Array.isArray(i) && "element" === i.type)
                        ) {
                          let e = i.children[0];
                          e && "text" === e.type && (e.value = nt(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData: t7,
                definitionById: r,
                footnoteById: i,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...t6, ...n.handlers },
                one: function (e, t) {
                  let n = e.type,
                    r = o.handlers[n];
                  if (t3.call(o.handlers, n) && r) return r(o, e, t);
                  if (
                    o.options.passThrough &&
                    o.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = tq(n);
                      return ((r.children = o.all(e)), r);
                    }
                    return tq(e);
                  }
                  return (
                    o.options.unknownHandler ||
                    function (e, t) {
                      let n = t.data || {},
                        r =
                          "value" in t &&
                          !(
                            t3.call(n, "hProperties") || t3.call(n, "hChildren")
                          )
                            ? { type: "text", value: t.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(t),
                              };
                      return (e.patch(t, r), e.applyData(t, r));
                    }
                  )(o, e, t);
                },
                options: n,
                patch: t9,
                wrap: ne,
              };
            return (
              t1(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : i,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              o
            );
          })(e, t),
          r = n.one(e, void 0),
          i = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || tX,
              r = e.options.footnoteBackLabel || tZ,
              i = e.options.footnoteLabel || "Footnotes",
              o = e.options.footnoteLabelTagName || "h2",
              l = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              a = [],
              s = -1;
            for (; ++s < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[s]);
              if (!i) continue;
              let o = e.all(i),
                l = String(i.identifier).toUpperCase(),
                u = tY(l.toLowerCase()),
                c = 0,
                f = [],
                h = e.footnoteCounts.get(l);
              for (; void 0 !== h && ++c <= h; ) {
                f.length > 0 && f.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(s, c);
                ("string" == typeof e && (e = { type: "text", value: e }),
                  f.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(s, c),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  }));
              }
              let d = o[o.length - 1];
              if (d && "element" === d.type && "p" === d.tagName) {
                let e = d.children[d.children.length - 1];
                (e && "text" === e.type
                  ? (e.value += " ")
                  : d.children.push({ type: "text", value: " " }),
                  d.children.push(...f));
              } else o.push(...f);
              let p = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + u },
                children: e.wrap(o, !0),
              };
              (e.patch(i, p), a.push(p));
            }
            if (0 !== a.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: o,
                    properties: { ...tq(l), id: "footnote-label" },
                    children: [{ type: "text", value: i }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(a, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          o = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return (i && o.children.push({ type: "text", value: "\n" }, i), o);
      }
      function nr(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = nn(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return nn(n, { file: r, ...(e || t) });
            };
      }
      function ni(e) {
        if (e) throw e;
      }
      var no = n(459);
      function nl(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let na = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          ns(e);
          let r = 0,
            i = -1,
            o = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
              if (47 === e.codePointAt(o)) {
                if (n) {
                  r = o + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = o + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let l = -1,
            a = t.length - 1;
          for (; o--; )
            if (47 === e.codePointAt(o)) {
              if (n) {
                r = o + 1;
                break;
              }
            } else
              (l < 0 && ((n = !0), (l = o + 1)),
                a > -1 &&
                  (e.codePointAt(o) === t.codePointAt(a--)
                    ? a < 0 && (i = o)
                    : ((a = -1), (i = l))));
          return (r === i ? (i = l) : i < 0 && (i = e.length), e.slice(r, i));
        },
        dirname: function (e) {
          let t;
          if ((ns(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
              ? "//"
              : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          ns(e);
          let n = e.length,
            r = -1,
            i = 0,
            o = -1,
            l = 0;
          for (; n--; ) {
            let a = e.codePointAt(n);
            if (47 === a) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            (r < 0 && ((t = !0), (r = n + 1)),
              46 === a
                ? o < 0
                  ? (o = n)
                  : 1 !== l && (l = 1)
                : o > -1 && (l = -1));
          }
          return o < 0 ||
            r < 0 ||
            0 === l ||
            (1 === l && o === r - 1 && o === i + 1)
            ? ""
            : e.slice(o, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            (ns(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]));
          return void 0 === t
            ? "."
            : (function (e) {
                ns(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      i = "",
                      o = 0,
                      l = -1,
                      a = 0,
                      s = -1;
                    for (; ++s <= e.length; ) {
                      if (s < e.length) n = e.codePointAt(s);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (l === s - 1 || 1 === a);
                        else if (l !== s - 1 && 2 === a) {
                          if (
                            i.length < 2 ||
                            2 !== o ||
                            46 !== i.codePointAt(i.length - 1) ||
                            46 !== i.codePointAt(i.length - 2)
                          ) {
                            if (i.length > 2) {
                              if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                (r < 0
                                  ? ((i = ""), (o = 0))
                                  : (o =
                                      (i = i.slice(0, r)).length -
                                      1 -
                                      i.lastIndexOf("/")),
                                  (l = s),
                                  (a = 0));
                                continue;
                              }
                            } else if (i.length > 0) {
                              ((i = ""), (o = 0), (l = s), (a = 0));
                              continue;
                            }
                          }
                          t && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                        } else
                          (i.length > 0
                            ? (i += "/" + e.slice(l + 1, s))
                            : (i = e.slice(l + 1, s)),
                            (o = s - l - 1));
                        ((l = s), (a = 0));
                      } else 46 === n && a > -1 ? a++ : (a = -1);
                    }
                    return i;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function ns(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e),
          );
      }
      let nu = {
        cwd: function () {
          return "/";
        },
      };
      function nc(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let nf = ["history", "path", "basename", "stem", "extname", "dirname"];
      class nh {
        constructor(e) {
          let t, n;
          ((t = e
            ? nc(e)
              ? { path: e }
              : "string" == typeof e ||
                  (function (e) {
                    return !!(
                      e &&
                      "object" == typeof e &&
                      "byteLength" in e &&
                      "byteOffset" in e
                    );
                  })(e)
                ? { value: e }
                : e
            : {}),
            (this.cwd = "cwd" in t ? "" : nu.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored);
          let r = -1;
          for (; ++r < nf.length; ) {
            let e = nf[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) nf.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? na.basename(this.path) : void 0;
        }
        set basename(e) {
          (np(e, "basename"),
            nd(e, "basename"),
            (this.path = na.join(this.dirname || "", e)));
        }
        get dirname() {
          return "string" == typeof this.path ? na.dirname(this.path) : void 0;
        }
        set dirname(e) {
          (ng(this.basename, "dirname"),
            (this.path = na.join(e || "", this.basename)));
        }
        get extname() {
          return "string" == typeof this.path ? na.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((nd(e, "extname"), ng(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = na.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          (nc(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!nc(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`",
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin',
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters",
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            np(e, "path"),
            this.path !== e && this.history.push(e));
        }
        get stem() {
          return "string" == typeof this.path
            ? na.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          (np(e, "stem"),
            nd(e, "stem"),
            (this.path = na.join(
              this.dirname || "",
              e + (this.extname || ""),
            )));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return ((r.fatal = void 0), r);
        }
        message(e, t, n) {
          let r = new Q(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
              ? this.value
              : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function nd(e, t) {
        if (e && e.includes(na.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + na.sep + "`",
          );
      }
      function np(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function ng(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let nm = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return (Object.setPrototypeOf(r, t), r);
        },
        ny = {}.hasOwnProperty;
      class nb extends nm {
        constructor() {
          (super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r,
                      );
                    !(function i(o, ...l) {
                      let a = e[++n],
                        s = -1;
                      if (o) return void r(o);
                      for (; ++s < t.length; )
                        (null === l[s] || void 0 === l[s]) && (l[s] = t[s]);
                      ((t = l),
                        a
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let o,
                                  l = e.length > t.length;
                                l && t.push(r);
                                try {
                                  o = e.apply(this, t);
                                } catch (e) {
                                  if (l && n) throw e;
                                  return r(e);
                                }
                                l ||
                                  (o && o.then && "function" == typeof o.then
                                    ? o.then(i, r)
                                    : o instanceof Error
                                      ? r(o)
                                      : i(o));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              a,
                              i,
                            )(...l)
                          : r(null, ...l));
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n,
                      );
                    return (e.push(n), t);
                  },
                };
              return t;
            })()));
        }
        copy() {
          let e = new nb(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return (e.data(no(!0, {}, this.namespace)), e);
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (nw("data", this.frozen), (this.namespace[e] = t), this)
              : (ny.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
              ? (nw("data", this.frozen), (this.namespace = e), this)
              : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = nE(e),
            n = this.parser || this.Parser;
          return (nx("parse", n), n(String(t), t));
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            nx("process", this.parser || this.Parser),
            nk("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            let o = nE(e),
              l = n.parse(o);
            function a(e, n) {
              e || !n ? i(e) : r ? r(n) : t(void 0, n);
            }
            n.run(l, o, function (e, t, r) {
              var i, o;
              if (e || !t || !r) return a(e);
              let l = n.stringify(t, r);
              ("string" == typeof (i = l) ||
              ((o = i) &&
                "object" == typeof o &&
                "byteLength" in o &&
                "byteOffset" in o)
                ? (r.value = l)
                : (r.result = l),
                a(e, r));
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            nx("processSync", this.parser || this.Parser),
            nk("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              ((n = !0), ni(e), (t = r));
            }),
            nC("processSync", "process", n),
            t
          );
        }
        run(e, t, n) {
          (nS(e), this.freeze());
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, o) {
            let l = nE(t);
            r.run(e, l, function (t, r, l) {
              let a = r || e;
              t ? o(t) : i ? i(a) : n(void 0, a, l);
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              (ni(e), (n = t), (r = !0));
            }),
            nC("runSync", "run", r),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = nE(t),
            r = this.compiler || this.Compiler;
          return (nk("stringify", r), nS(e), r(e, n));
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((nw("use", this.frozen), null == e));
          else if ("function" == typeof e) l(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? o(e) : i(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function i(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
              );
            (o(e.plugins),
              e.settings && (r.settings = no(!0, r.settings, e.settings)));
          }
          function o(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; ) {
                var n = e[t];
                if ("function" == typeof n) l(n, []);
                else if ("object" == typeof n)
                  if (Array.isArray(n)) {
                    let [e, ...t] = n;
                    l(e, t);
                  } else i(n);
                else throw TypeError("Expected usable value, not `" + n + "`");
              }
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function l(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...o] = t,
                l = n[i][1];
              (nl(l) && nl(r) && (r = no(!0, l, r)), (n[i] = [e, r, ...o]));
            }
          }
        }
      }
      let nv = new nb().freeze();
      function nx(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function nk(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function nw(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
          );
      }
      function nS(e) {
        if (!nl(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function nC(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function nE(e) {
        var t;
        return (t = e) &&
          "object" == typeof t &&
          "message" in t &&
          "messages" in t
          ? e
          : new nh(e);
      }
      let nI = [],
        n_ = { allowDangerousHtml: !0 },
        nO = /^(https?|ircs?|mailto|xmpp)$/i,
        nT = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          { from: "className", id: "remove-classname" },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function nA(e) {
        let t = (function (e) {
            let t = e.rehypePlugins || nI,
              n = e.remarkPlugins || nI,
              r = e.remarkRehypeOptions
                ? { ...e.remarkRehypeOptions, ...n_ }
                : n_;
            return nv().use(tR).use(n).use(nr, r).use(t);
          })(e),
          n = (function (e) {
            let t = e.children || "",
              n = new nh();
            return ("string" == typeof t && (n.value = t), n);
          })(e);
        return (function (e, t) {
          let n = t.allowedElements,
            r = t.allowElement,
            i = t.components,
            o = t.disallowedElements,
            l = t.skipHtml,
            a = t.unwrapDisallowed,
            s = t.urlTransform || nM;
          for (let e of nT)
            Object.hasOwn(t, e.from) && (e.from, e.to && e.to, e.id);
          return (
            t1(e, function (e, t, i) {
              if ("raw" === e.type && i && "number" == typeof t)
                return (
                  l
                    ? i.children.splice(t, 1)
                    : (i.children[t] = { type: "text", value: e.value }),
                  t
                );
              if ("element" === e.type) {
                let t;
                for (t in ef)
                  if (Object.hasOwn(ef, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t],
                      r = ef[t];
                    (null === r || r.includes(e.tagName)) &&
                      (e.properties[t] = s(String(n || ""), t, e));
                  }
              }
              if ("element" === e.type) {
                let l = n
                  ? !n.includes(e.tagName)
                  : !!o && o.includes(e.tagName);
                if (
                  (!l && r && "number" == typeof t && (l = !r(e, t, i)),
                  l && i && "number" == typeof t)
                )
                  return (
                    a && e.children
                      ? i.children.splice(t, 1, ...e.children)
                      : i.children.splice(t, 1),
                    t
                  );
              }
            }),
            (function (e, t) {
              var n, r, i, o, l;
              let a;
              if (!t || void 0 === t.Fragment)
                throw TypeError("Expected `Fragment` in options");
              let s = t.filePath || void 0;
              if (t.development) {
                if ("function" != typeof t.jsxDEV)
                  throw TypeError(
                    "Expected `jsxDEV` in options when `development: true`",
                  );
                ((n = s),
                  (r = t.jsxDEV),
                  (a = function (e, t, i, o) {
                    let l = Array.isArray(i.children),
                      a = $(e);
                    return r(
                      t,
                      i,
                      o,
                      l,
                      {
                        columnNumber: a ? a.column - 1 : void 0,
                        fileName: n,
                        lineNumber: a ? a.line : void 0,
                      },
                      void 0,
                    );
                  }));
              } else {
                if ("function" != typeof t.jsx)
                  throw TypeError("Expected `jsx` in production options");
                if ("function" != typeof t.jsxs)
                  throw TypeError("Expected `jsxs` in production options");
                ((i = 0),
                  (o = t.jsx),
                  (l = t.jsxs),
                  (a = function (e, t, n, r) {
                    let i = Array.isArray(n.children) ? l : o;
                    return r ? i(t, n, r) : i(t, n);
                  }));
              }
              let u = {
                  Fragment: t.Fragment,
                  ancestors: [],
                  components: t.components || {},
                  create: a,
                  elementAttributeNameCase:
                    t.elementAttributeNameCase || "react",
                  evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                  filePath: s,
                  ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                  passKeys: !1 !== t.passKeys,
                  passNode: t.passNode || !1,
                  schema: "svg" === t.space ? R : N,
                  stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                  tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
                },
                c = ei(u, e, void 0);
              return c && "string" != typeof c
                ? c
                : u.create(e, u.Fragment, { children: c || void 0 }, void 0);
            })(e, {
              Fragment: eh.Fragment,
              components: i,
              ignoreInvalidStyle: !0,
              jsx: eh.jsx,
              jsxs: eh.jsxs,
              passKeys: !0,
              passNode: !0,
            })
          );
        })(t.runSync(t.parse(n), n), e);
      }
      function nM(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          i = e.indexOf("/");
        return -1 === t ||
          (-1 !== i && t > i) ||
          (-1 !== n && t > n) ||
          (-1 !== r && t > r) ||
          nO.test(e.slice(0, t))
          ? e
          : "";
      }
    },
    8797: (e, t, n) => {
      "use strict";
      n.d(t, {
        cY: () => v,
        FA: () => L,
        g: () => D,
        u: () => f,
        Uj: () => c,
        tD: () => H,
        bD: () =>
          function e(t, n) {
            if (t === n) return !0;
            let r = Object.keys(t),
              i = Object.keys(n);
            for (let o of r) {
              if (!i.includes(o)) return !1;
              let r = t[o],
                l = n[o];
              if (F(r) && F(l)) {
                if (!e(r, l)) return !1;
              } else if (r !== l) return !1;
            }
            for (let e of i) if (!r.includes(e)) return !1;
            return !0;
          },
        hp: () => B,
        T9: () => y,
        Tj: () => m,
        XA: () => b,
        Ku: () => W,
        ZQ: () => E,
        sr: () => O,
        zJ: () => x,
        c1: () => _,
        Im: () => R,
        lT: () => A,
        zW: () => M,
        jZ: () => I,
        lV: () => T,
        gE: () => k,
        Am: () => z,
        I9: () => j,
        P1: () => C,
        eX: () => P,
      });
      let r = () => void 0;
      var i = n(7614);
      let o = function (e) {
          let t = [],
            n = 0;
          for (let r = 0; r < e.length; r++) {
            let i = e.charCodeAt(r);
            i < 128
              ? (t[n++] = i)
              : (i < 2048
                  ? (t[n++] = (i >> 6) | 192)
                  : ((64512 & i) == 55296 &&
                    r + 1 < e.length &&
                    (64512 & e.charCodeAt(r + 1)) == 56320
                      ? ((i =
                          65536 +
                          ((1023 & i) << 10) +
                          (1023 & e.charCodeAt(++r))),
                        (t[n++] = (i >> 18) | 240),
                        (t[n++] = ((i >> 12) & 63) | 128))
                      : (t[n++] = (i >> 12) | 224),
                    (t[n++] = ((i >> 6) & 63) | 128)),
                (t[n++] = (63 & i) | 128));
          }
          return t;
        },
        l = function (e) {
          let t = [],
            n = 0,
            r = 0;
          for (; n < e.length; ) {
            let i = e[n++];
            if (i < 128) t[r++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
              let o = e[n++];
              t[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o));
            } else if (i > 239 && i < 365) {
              let o = e[n++],
                l =
                  (((7 & i) << 18) |
                    ((63 & o) << 12) |
                    ((63 & e[n++]) << 6) |
                    (63 & e[n++])) -
                  65536;
              ((t[r++] = String.fromCharCode(55296 + (l >> 10))),
                (t[r++] = String.fromCharCode(56320 + (1023 & l))));
            } else {
              let o = e[n++],
                l = e[n++];
              t[r++] = String.fromCharCode(
                ((15 & i) << 12) | ((63 & o) << 6) | (63 & l),
              );
            }
          }
          return t.join("");
        },
        a = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray(e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [];
            for (let t = 0; t < e.length; t += 3) {
              let i = e[t],
                o = t + 1 < e.length,
                l = o ? e[t + 1] : 0,
                a = t + 2 < e.length,
                s = a ? e[t + 2] : 0,
                u = i >> 2,
                c = ((3 & i) << 4) | (l >> 4),
                f = ((15 & l) << 2) | (s >> 6),
                h = 63 & s;
              (!a && ((h = 64), o || (f = 64)), r.push(n[u], n[c], n[f], n[h]));
            }
            return r.join("");
          },
          encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(o(e), t);
          },
          decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : l(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray(e, t) {
            this.init_();
            let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [];
            for (let t = 0; t < e.length; ) {
              let i = n[e.charAt(t++)],
                o = t < e.length ? n[e.charAt(t)] : 0,
                l = ++t < e.length ? n[e.charAt(t)] : 64,
                a = ++t < e.length ? n[e.charAt(t)] : 64;
              if ((++t, null == i || null == o || null == l || null == a))
                throw new s();
              let u = (i << 2) | (o >> 4);
              if ((r.push(u), 64 !== l)) {
                let e = ((o << 4) & 240) | (l >> 2);
                if ((r.push(e), 64 !== a)) {
                  let e = ((l << 6) & 192) | a;
                  r.push(e);
                }
              }
            }
            return r;
          },
          init_() {
            if (!this.byteToCharMap_) {
              ((this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {}));
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                ((this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e)));
            }
          },
        };
      class s extends Error {
        constructor() {
          (super(...arguments), (this.name = "DecodeBase64StringError"));
        }
      }
      let u = function (e) {
          let t = o(e);
          return a.encodeByteArray(t, !0);
        },
        c = function (e) {
          return u(e).replace(/\./g, "");
        },
        f = function (e) {
          try {
            return a.decodeString(e, !0);
          } catch (e) {
            console.error("base64Decode failed: ", e);
          }
          return null;
        },
        h = () =>
          (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== n.g) return n.g;
            throw Error("Unable to locate global object.");
          })().__FIREBASE_DEFAULTS__,
        d = () => {
          if (void 0 === i || void 0 === i.env) return;
          let e = i.env.__FIREBASE_DEFAULTS__;
          if (e) return JSON.parse(e);
        },
        p = () => {
          let e;
          if ("undefined" == typeof document) return;
          try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (e) {
            return;
          }
          let t = e && f(e[1]);
          return t && JSON.parse(t);
        },
        g = () => {
          try {
            return r() || h() || d() || p();
          } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return;
          }
        },
        m = (e) => {
          var t, n;
          return null == (n = null == (t = g()) ? void 0 : t.emulatorHosts)
            ? void 0
            : n[e];
        },
        y = () => {
          var e;
          return null == (e = g()) ? void 0 : e.config;
        },
        b = (e) => {
          var t;
          return null == (t = g()) ? void 0 : t[`_${e}`];
        };
      class v {
        constructor() {
          ((this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, t) => {
              ((this.resolve = e), (this.reject = t));
            })));
        }
        wrapCallback(e) {
          return (t, n) => {
            (t ? this.reject(t) : this.resolve(n),
              "function" == typeof e &&
                (this.promise.catch(() => {}),
                1 === e.length ? e(t) : e(t, n)));
          };
        }
      }
      function x(e) {
        try {
          return (
            e.startsWith("http://") || e.startsWith("https://")
              ? new URL(e).hostname
              : e
          ).endsWith(".cloudworkstations.dev");
        } catch (e) {
          return !1;
        }
      }
      async function k(e) {
        return (await fetch(e, { credentials: "include" })).ok;
      }
      let w = {},
        S = !1;
      function C(e, t) {
        if (
          "undefined" == typeof window ||
          "undefined" == typeof document ||
          !x(window.location.host) ||
          w[e] === t ||
          w[e] ||
          S
        )
          return;
        function n(e) {
          return `__firebase__banner__${e}`;
        }
        w[e] = t;
        let r = "__firebase__banner",
          i =
            (function () {
              let e = { prod: [], emulator: [] };
              for (let t of Object.keys(w))
                w[t] ? e.emulator.push(t) : e.prod.push(t);
              return e;
            })().prod.length > 0;
        function o() {
          let e,
            t,
            o =
              ((e = document.getElementById(r)),
              (t = !1),
              e ||
                ((e = document.createElement("div")).setAttribute("id", r),
                (t = !0)),
              { created: t, element: e }),
            l = n("text"),
            a = document.getElementById(l) || document.createElement("span"),
            s = n("learnmore"),
            u = document.getElementById(s) || document.createElement("a"),
            c = n("preprendIcon"),
            f =
              document.getElementById(c) ||
              document.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (o.created) {
            let e = o.element;
            ((e.style.display = "flex"),
              (e.style.background = "#7faaf0"),
              (e.style.position = "fixed"),
              (e.style.bottom = "5px"),
              (e.style.left = "5px"),
              (e.style.padding = ".5em"),
              (e.style.borderRadius = "5px"),
              (e.style.alignItems = "center"),
              u.setAttribute("id", s),
              (u.innerText = "Learn more"),
              (u.href =
                "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
              u.setAttribute("target", "__blank"),
              (u.style.paddingLeft = "5px"),
              (u.style.textDecoration = "underline"));
            let t = (function () {
              let e = document.createElement("span");
              return (
                (e.style.cursor = "pointer"),
                (e.style.marginLeft = "16px"),
                (e.style.fontSize = "24px"),
                (e.innerHTML = " &times;"),
                (e.onclick = () => {
                  S = !0;
                  let e = document.getElementById(r);
                  e && e.remove();
                }),
                e
              );
            })();
            (f.setAttribute("width", "24"),
              f.setAttribute("id", c),
              f.setAttribute("height", "24"),
              f.setAttribute("viewBox", "0 0 24 24"),
              f.setAttribute("fill", "none"),
              (f.style.marginLeft = "-6px"),
              e.append(f, a, u, t),
              document.body.appendChild(e));
          }
          (i
            ? ((a.innerText = "Preview backend disconnected."),
              (f.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
            : ((f.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
              (a.innerText = "Preview backend running in this workspace.")),
            a.setAttribute("id", l));
        }
        "loading" === document.readyState
          ? window.addEventListener("DOMContentLoaded", o)
          : o();
      }
      function E() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function I() {
        return (
          "undefined" != typeof window &&
          !!(window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())
        );
      }
      function _() {
        return (
          "undefined" != typeof navigator &&
          "Cloudflare-Workers" === navigator.userAgent
        );
      }
      function O() {
        let e =
          "object" == typeof chrome
            ? chrome.runtime
            : "object" == typeof browser
              ? browser.runtime
              : void 0;
        return "object" == typeof e && void 0 !== e.id;
      }
      function T() {
        return (
          "object" == typeof navigator && "ReactNative" === navigator.product
        );
      }
      function A() {
        let e = E();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      }
      function M() {
        try {
          return "object" == typeof indexedDB;
        } catch (e) {
          return !1;
        }
      }
      function P() {
        return new Promise((e, t) => {
          try {
            let n = !0,
              r = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(r);
            ((i.onsuccess = () => {
              (i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0));
            }),
              (i.onupgradeneeded = () => {
                n = !1;
              }),
              (i.onerror = () => {
                var e;
                t((null == (e = i.error) ? void 0 : e.message) || "");
              }));
          } catch (e) {
            t(e);
          }
        });
      }
      class D extends Error {
        constructor(e, t, n) {
          (super(t),
            (this.code = e),
            (this.customData = n),
            (this.name = "FirebaseError"),
            Object.setPrototypeOf(this, D.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, L.prototype.create));
        }
      }
      class L {
        constructor(e, t, n) {
          ((this.service = e), (this.serviceName = t), (this.errors = n));
        }
        create(e, ...t) {
          var n, r;
          let i = t[0] || {},
            o = `${this.service}/${e}`,
            l = this.errors[e],
            a = l
              ? ((n = l),
                (r = i),
                n.replace(N, (e, t) => {
                  let n = r[t];
                  return null != n ? String(n) : `<${t}?>`;
                }))
              : "Error",
            s = `${this.serviceName}: ${a} (${o}).`;
          return new D(o, s, i);
        }
      }
      let N = /\{\$([^}]+)}/g;
      function R(e) {
        for (let t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function F(e) {
        return null !== e && "object" == typeof e;
      }
      function z(e) {
        let t = [];
        for (let [n, r] of Object.entries(e))
          Array.isArray(r)
            ? r.forEach((e) => {
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
              })
            : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
        return t.length ? "&" + t.join("&") : "";
      }
      function j(e) {
        let t = {};
        return (
          e
            .replace(/^\?/, "")
            .split("&")
            .forEach((e) => {
              if (e) {
                let [n, r] = e.split("=");
                t[decodeURIComponent(n)] = decodeURIComponent(r);
              }
            }),
          t
        );
      }
      function B(e) {
        let t = e.indexOf("?");
        if (!t) return "";
        let n = e.indexOf("#", t);
        return e.substring(t, n > 0 ? n : void 0);
      }
      function H(e, t) {
        let n = new U(e, t);
        return n.subscribe.bind(n);
      }
      class U {
        constructor(e, t) {
          ((this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = t),
            this.task
              .then(() => {
                e(this);
              })
              .catch((e) => {
                this.error(e);
              }));
        }
        next(e) {
          this.forEachObserver((t) => {
            t.next(e);
          });
        }
        error(e) {
          (this.forEachObserver((t) => {
            t.error(e);
          }),
            this.close(e));
        }
        complete() {
          (this.forEachObserver((e) => {
            e.complete();
          }),
            this.close());
        }
        subscribe(e, t, n) {
          let r;
          if (void 0 === e && void 0 === t && void 0 === n)
            throw Error("Missing Observer.");
          (void 0 ===
            (r = !(function (e, t) {
              if ("object" != typeof e || null === e) return !1;
              for (let n of t)
                if (n in e && "function" == typeof e[n]) return !0;
              return !1;
            })(e, ["next", "error", "complete"])
              ? { next: e, error: t, complete: n }
              : e).next && (r.next = V),
            void 0 === r.error && (r.error = V),
            void 0 === r.complete && (r.complete = V));
          let i = this.unsubscribeOne.bind(this, this.observers.length);
          return (
            this.finalized &&
              this.task.then(() => {
                try {
                  this.finalError ? r.error(this.finalError) : r.complete();
                } catch (e) {}
              }),
            this.observers.push(r),
            i
          );
        }
        unsubscribeOne(e) {
          void 0 !== this.observers &&
            void 0 !== this.observers[e] &&
            (delete this.observers[e],
            (this.observerCount -= 1),
            0 === this.observerCount &&
              void 0 !== this.onNoObservers &&
              this.onNoObservers(this));
        }
        forEachObserver(e) {
          if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
        }
        sendOne(e, t) {
          this.task.then(() => {
            if (void 0 !== this.observers && void 0 !== this.observers[e])
              try {
                t(this.observers[e]);
              } catch (e) {
                "undefined" != typeof console &&
                  console.error &&
                  console.error(e);
              }
          });
        }
        close(e) {
          this.finalized ||
            ((this.finalized = !0),
            void 0 !== e && (this.finalError = e),
            this.task.then(() => {
              ((this.observers = void 0), (this.onNoObservers = void 0));
            }));
        }
      }
      function V() {}
      function W(e) {
        return e && e._delegate ? e._delegate : e;
      }
    },
  },
]);
