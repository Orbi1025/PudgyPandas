(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    592677: [
      (e) => {
        "use strict";
        e.s(
          {
            AtomicReadyWalletRejectedUpgradeError: () => H,
            AtomicityNotSupportedError: () => L,
            BundleTooLargeError: () => k,
            ChainDisconnectedError: () => P,
            DuplicateIdError: () => T,
            InternalRpcError: () => m,
            InvalidInputRpcError: () => y,
            InvalidParamsRpcError: () => g,
            InvalidRequestRpcError: () => p,
            JsonRpcVersionUnsupportedError: () => O,
            LimitExceededRpcError: () => B,
            MethodNotFoundRpcError: () => b,
            MethodNotSupportedRpcError: () => w,
            ParseRpcError: () => f,
            ProviderDisconnectedError: () => I,
            ProviderRpcError: () => h,
            ResourceNotFoundRpcError: () => v,
            ResourceUnavailableRpcError: () => x,
            RpcError: () => d,
            SwitchChainError: () => S,
            TransactionRejectedRpcError: () => E,
            UnauthorizedProviderError: () => z,
            UnknownBundleIdError: () => j,
            UnknownRpcError: () => q,
            UnsupportedChainIdError: () => U,
            UnsupportedNonOptionalCapabilityError: () => M,
            UnsupportedProviderMethodError: () => A,
            UserRejectedRequestError: () => R,
          },
          592677
        );
        var t = e.i(500780);
        e.s(
          {
            HttpRequestError: () => a,
            RpcRequestError: () => c,
            SocketClosedError: () => l,
            TimeoutError: () => u,
            WebSocketRequestError: () => i,
          },
          926777
        );
        var r = e.i(383478),
          o = t;
        e.s({ getContractAddress: () => n, getUrl: () => s }, 685180);
        let n = (e) => e,
          s = (e) => e;
        class a extends o.BaseError {
          constructor({
            body: e,
            cause: t,
            details: o,
            headers: n,
            status: a,
            url: i,
          }) {
            super("HTTP request failed.", {
              cause: t,
              details: o,
              metaMessages: [
                a && "Status: ".concat(a),
                "URL: ".concat(s(i)),
                e && "Request body: ".concat((0, r.stringify)(e)),
              ].filter(Boolean),
              name: "HttpRequestError",
            }),
              Object.defineProperty(this, "body", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "headers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "status", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "url", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.body = e),
              (this.headers = n),
              (this.status = a),
              (this.url = i);
          }
        }
        class i extends o.BaseError {
          constructor({ body: e, cause: t, details: o, url: n }) {
            super("WebSocket request failed.", {
              cause: t,
              details: o,
              metaMessages: [
                "URL: ".concat(s(n)),
                e && "Request body: ".concat((0, r.stringify)(e)),
              ].filter(Boolean),
              name: "WebSocketRequestError",
            });
          }
        }
        class c extends o.BaseError {
          constructor({ body: e, error: t, url: o }) {
            super("RPC Request failed.", {
              cause: t,
              details: t.message,
              metaMessages: [
                "URL: ".concat(s(o)),
                "Request body: ".concat((0, r.stringify)(e)),
              ],
              name: "RpcRequestError",
            }),
              Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.code = t.code),
              (this.data = t.data);
          }
        }
        class l extends o.BaseError {
          constructor({ url: e } = {}) {
            super("The socket has been closed.", {
              metaMessages: [e && "URL: ".concat(s(e))].filter(Boolean),
              name: "SocketClosedError",
            });
          }
        }
        class u extends o.BaseError {
          constructor({ body: e, url: t }) {
            super("The request took too long to respond.", {
              details: "The request timed out.",
              metaMessages: [
                "URL: ".concat(s(t)),
                "Request body: ".concat((0, r.stringify)(e)),
              ],
              name: "TimeoutError",
            });
          }
        }
        class d extends t.BaseError {
          constructor(
            e,
            { code: t, docsPath: r, metaMessages: o, name: n, shortMessage: s }
          ) {
            super(s, {
              cause: e,
              docsPath: r,
              metaMessages: o || (null == e ? void 0 : e.metaMessages),
              name: n || "RpcError",
            }),
              Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.name = n || e.name),
              (this.code = e instanceof c ? e.code : null != t ? t : -1);
          }
        }
        class h extends d {
          constructor(e, t) {
            super(e, t),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.data = t.data);
          }
        }
        class f extends d {
          constructor(e) {
            super(e, {
              code: f.code,
              name: "ParseRpcError",
              shortMessage:
                "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
            });
          }
        }
        Object.defineProperty(f, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32700,
        });
        class p extends d {
          constructor(e) {
            super(e, {
              code: p.code,
              name: "InvalidRequestRpcError",
              shortMessage: "JSON is not a valid request object.",
            });
          }
        }
        Object.defineProperty(p, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32600,
        });
        class b extends d {
          constructor(e, { method: t } = {}) {
            super(e, {
              code: b.code,
              name: "MethodNotFoundRpcError",
              shortMessage: "The method".concat(
                t ? ' "'.concat(t, '"') : "",
                " does not exist / is not available."
              ),
            });
          }
        }
        Object.defineProperty(b, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32601,
        });
        class g extends d {
          constructor(e) {
            super(e, {
              code: g.code,
              name: "InvalidParamsRpcError",
              shortMessage:
                "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
            });
          }
        }
        Object.defineProperty(g, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32602,
        });
        class m extends d {
          constructor(e) {
            super(e, {
              code: m.code,
              name: "InternalRpcError",
              shortMessage: "An internal error was received.",
            });
          }
        }
        Object.defineProperty(m, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32603,
        });
        class y extends d {
          constructor(e) {
            super(e, {
              code: y.code,
              name: "InvalidInputRpcError",
              shortMessage:
                "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
            });
          }
        }
        Object.defineProperty(y, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32e3,
        });
        class v extends d {
          constructor(e) {
            super(e, {
              code: v.code,
              name: "ResourceNotFoundRpcError",
              shortMessage: "Requested resource not found.",
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ResourceNotFoundRpcError",
              });
          }
        }
        Object.defineProperty(v, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32001,
        });
        class x extends d {
          constructor(e) {
            super(e, {
              code: x.code,
              name: "ResourceUnavailableRpcError",
              shortMessage: "Requested resource not available.",
            });
          }
        }
        Object.defineProperty(x, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32002,
        });
        class E extends d {
          constructor(e) {
            super(e, {
              code: E.code,
              name: "TransactionRejectedRpcError",
              shortMessage: "Transaction creation failed.",
            });
          }
        }
        Object.defineProperty(E, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32003,
        });
        class w extends d {
          constructor(e, { method: t } = {}) {
            super(e, {
              code: w.code,
              name: "MethodNotSupportedRpcError",
              shortMessage: "Method".concat(
                t ? ' "'.concat(t, '"') : "",
                " is not supported."
              ),
            });
          }
        }
        Object.defineProperty(w, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32004,
        });
        class B extends d {
          constructor(e) {
            super(e, {
              code: B.code,
              name: "LimitExceededRpcError",
              shortMessage: "Request exceeds defined limit.",
            });
          }
        }
        Object.defineProperty(B, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32005,
        });
        class O extends d {
          constructor(e) {
            super(e, {
              code: O.code,
              name: "JsonRpcVersionUnsupportedError",
              shortMessage: "Version of JSON-RPC protocol is not supported.",
            });
          }
        }
        Object.defineProperty(O, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32006,
        });
        class R extends h {
          constructor(e) {
            super(e, {
              code: R.code,
              name: "UserRejectedRequestError",
              shortMessage: "User rejected the request.",
            });
          }
        }
        Object.defineProperty(R, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4001,
        });
        class z extends h {
          constructor(e) {
            super(e, {
              code: z.code,
              name: "UnauthorizedProviderError",
              shortMessage:
                "The requested method and/or account has not been authorized by the user.",
            });
          }
        }
        Object.defineProperty(z, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4100,
        });
        class A extends h {
          constructor(e, { method: t } = {}) {
            super(e, {
              code: A.code,
              name: "UnsupportedProviderMethodError",
              shortMessage:
                "The Provider does not support the requested method".concat(
                  t ? ' " '.concat(t, '"') : "",
                  "."
                ),
            });
          }
        }
        Object.defineProperty(A, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4200,
        });
        class I extends h {
          constructor(e) {
            super(e, {
              code: I.code,
              name: "ProviderDisconnectedError",
              shortMessage: "The Provider is disconnected from all chains.",
            });
          }
        }
        Object.defineProperty(I, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4900,
        });
        class P extends h {
          constructor(e) {
            super(e, {
              code: P.code,
              name: "ChainDisconnectedError",
              shortMessage:
                "The Provider is not connected to the requested chain.",
            });
          }
        }
        Object.defineProperty(P, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4901,
        });
        class S extends h {
          constructor(e) {
            super(e, {
              code: S.code,
              name: "SwitchChainError",
              shortMessage:
                "An error occurred when attempting to switch chain.",
            });
          }
        }
        Object.defineProperty(S, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4902,
        });
        class M extends h {
          constructor(e) {
            super(e, {
              code: M.code,
              name: "UnsupportedNonOptionalCapabilityError",
              shortMessage:
                "This Wallet does not support a capability that was not marked as optional.",
            });
          }
        }
        Object.defineProperty(M, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5700,
        });
        class U extends h {
          constructor(e) {
            super(e, {
              code: U.code,
              name: "UnsupportedChainIdError",
              shortMessage:
                "This Wallet does not support the requested chain ID.",
            });
          }
        }
        Object.defineProperty(U, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5710,
        });
        class T extends h {
          constructor(e) {
            super(e, {
              code: T.code,
              name: "DuplicateIdError",
              shortMessage: "There is already a bundle submitted with this ID.",
            });
          }
        }
        Object.defineProperty(T, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5720,
        });
        class j extends h {
          constructor(e) {
            super(e, {
              code: j.code,
              name: "UnknownBundleIdError",
              shortMessage:
                "This bundle id is unknown / has not been submitted",
            });
          }
        }
        Object.defineProperty(j, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5730,
        });
        class k extends h {
          constructor(e) {
            super(e, {
              code: k.code,
              name: "BundleTooLargeError",
              shortMessage:
                "The call bundle is too large for the Wallet to process.",
            });
          }
        }
        Object.defineProperty(k, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5740,
        });
        class H extends h {
          constructor(e) {
            super(e, {
              code: H.code,
              name: "AtomicReadyWalletRejectedUpgradeError",
              shortMessage:
                "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
            });
          }
        }
        Object.defineProperty(H, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5750,
        });
        class L extends h {
          constructor(e) {
            super(e, {
              code: L.code,
              name: "AtomicityNotSupportedError",
              shortMessage:
                "The wallet does not support atomic execution but the request requires it.",
            });
          }
        }
        Object.defineProperty(L, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5760,
        });
        class q extends d {
          constructor(e) {
            super(e, {
              name: "UnknownRpcError",
              shortMessage: "An unknown RPC error occurred.",
            });
          }
        }
        function C() {
          let e = () => void 0,
            t = () => void 0;
          return {
            promise: new Promise((r, o) => {
              (e = r), (t = o);
            }),
            resolve: e,
            reject: t,
          };
        }
        e.s({ createBatchScheduler: () => F }, 309697),
          e.s({ withResolvers: () => C }, 78903);
        let N = new Map();
        function F(e) {
          let { fn: t, id: r, shouldSplitBatch: o, wait: n = 0, sort: s } = e,
            a = async () => {
              let e = c();
              i();
              let r = e.map((e) => {
                let { args: t } = e;
                return t;
              });
              0 !== r.length &&
                t(r)
                  .then((t) => {
                    s && Array.isArray(t) && t.sort(s);
                    for (let r = 0; r < e.length; r++) {
                      let { resolve: o } = e[r];
                      null == o || o([t[r], t]);
                    }
                  })
                  .catch((t) => {
                    for (let r = 0; r < e.length; r++) {
                      let { reject: o } = e[r];
                      null == o || o(t);
                    }
                  });
            },
            i = () => N.delete(r),
            c = () => N.get(r) || [],
            l = (e) => N.set(r, [...c(), e]);
          return {
            flush: i,
            async schedule(e) {
              let { promise: t, resolve: r, reject: s } = C();
              return (
                ((null == o
                  ? void 0
                  : o([
                      ...c().map((e) => {
                        let { args: t } = e;
                        return t;
                      }),
                      e,
                    ])) && a(),
                c().length > 0)
                  ? l({ args: e, resolve: r, reject: s })
                  : (l({ args: e, resolve: r, reject: s }), setTimeout(a, n)),
                t
              );
            },
          };
        }
      },
      [685180, 926777, 78903, 309697],
    ],
    156677: (e) => {
      "use strict";
      e.s({
        add: () => p,
        add3H: () => g,
        add3L: () => b,
        add4H: () => y,
        add4L: () => m,
        add5H: () => x,
        add5L: () => v,
        rotlBH: () => h,
        rotlBL: () => f,
        rotlSH: () => u,
        rotlSL: () => d,
        rotrBH: () => c,
        rotrBL: () => l,
        rotrSH: () => a,
        rotrSL: () => i,
        shrSH: () => n,
        shrSL: () => s,
        split: () => o,
      });
      let t = BigInt(0x100000000 - 1),
        r = BigInt(32);
      function o(e) {
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.length,
          s = new Uint32Array(n),
          a = new Uint32Array(n);
        for (let i = 0; i < n; i++) {
          let { h: n, l: c } = (function (e) {
            let o =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return o
              ? { h: Number(e & t), l: Number((e >> r) & t) }
              : { h: 0 | Number((e >> r) & t), l: 0 | Number(e & t) };
          })(e[i], o);
          [s[i], a[i]] = [n, c];
        }
        return [s, a];
      }
      let n = (e, t, r) => e >>> r,
        s = (e, t, r) => (e << (32 - r)) | (t >>> r),
        a = (e, t, r) => (e >>> r) | (t << (32 - r)),
        i = (e, t, r) => (e << (32 - r)) | (t >>> r),
        c = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        l = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        u = (e, t, r) => (e << r) | (t >>> (32 - r)),
        d = (e, t, r) => (t << r) | (e >>> (32 - r)),
        h = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        f = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function p(e, t, r, o) {
        let n = (t >>> 0) + (o >>> 0);
        return { h: (e + r + ((n / 0x100000000) | 0)) | 0, l: 0 | n };
      }
      let b = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        g = (e, t, r, o) => (t + r + o + ((e / 0x100000000) | 0)) | 0,
        m = (e, t, r, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (o >>> 0),
        y = (e, t, r, o, n) => (t + r + o + n + ((e / 0x100000000) | 0)) | 0,
        v = (e, t, r, o, n) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (o >>> 0) + (n >>> 0),
        x = (e, t, r, o, n, s) =>
          (t + r + o + n + s + ((e / 0x100000000) | 0)) | 0;
    },
    458365: (e) => {
      "use strict";
      e.s(
        {
          Hash: () => B,
          abytes: () => n,
          aexists: () => a,
          ahash: () => s,
          anumber: () => o,
          aoutput: () => i,
          bytesToHex: () => g,
          clean: () => l,
          concatBytes: () => w,
          createHasher: () => O,
          createView: () => u,
          createXOFer: () => R,
          hexToBytes: () => v,
          isBytes: () => r,
          randomBytes: () => z,
          rotl: () => h,
          rotr: () => d,
          swap32IfBE: () => f,
          toBytes: () => E,
          u32: () => c,
          utf8ToBytes: () => x,
        },
        458365
      );
      let t =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function r(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function o(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function n(e) {
        for (
          var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          o[n - 1] = arguments[n];
        if (!r(e)) throw Error("Uint8Array expected");
        if (o.length > 0 && !o.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + o + ", got length=" + e.length
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        o(e.outputLen), o(e.blockLen);
      }
      function a(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function i(e, t) {
        n(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      function c(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function l() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        for (let e = 0; e < t.length; e++) t[e].fill(0);
      }
      function u(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function d(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      function h(e, t) {
        return (e << t) | ((e >>> (32 - t)) >>> 0);
      }
      let f =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
            ? (e) => e
            : function (e) {
                for (let r = 0; r < e.length; r++) {
                  var t;
                  e[r] =
                    (((t = e[r]) << 24) & 0xff000000) |
                    ((t << 8) & 0xff0000) |
                    ((t >>> 8) & 65280) |
                    ((t >>> 24) & 255);
                }
                return e;
              },
        p =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        b = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function g(e) {
        if ((n(e), p)) return e.toHex();
        let t = "";
        for (let r = 0; r < e.length; r++) t += b[e[r]];
        return t;
      }
      let m = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function y(e) {
        return e >= m._0 && e <= m._9
          ? e - m._0
          : e >= m.A && e <= m.F
          ? e - (m.A - 10)
          : e >= m.a && e <= m.f
          ? e - (m.a - 10)
          : void 0;
      }
      function v(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (p) return Uint8Array.fromHex(e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let o = new Uint8Array(r);
        for (let t = 0, n = 0; t < r; t++, n += 2) {
          let r = y(e.charCodeAt(n)),
            s = y(e.charCodeAt(n + 1));
          if (void 0 === r || void 0 === s)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[n] + e[n + 1]) +
                '" at index ' +
                n
            );
          o[t] = 16 * r + s;
        }
        return o;
      }
      function x(e) {
        if ("string" != typeof e) throw Error("string expected");
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function E(e) {
        return "string" == typeof e && (e = x(e)), n(e), e;
      }
      function w() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        let o = 0;
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          n(r), (o += r.length);
        }
        let s = new Uint8Array(o);
        for (let e = 0, r = 0; e < t.length; e++) {
          let o = t[e];
          s.set(o, r), (r += o.length);
        }
        return s;
      }
      class B {}
      function O(e) {
        let t = (t) => e().update(E(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function R(e) {
        let t = (t, r) => e(r).update(E(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function z() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
        if (t && "function" == typeof t.getRandomValues)
          return t.getRandomValues(new Uint8Array(e));
        if (t && "function" == typeof t.randomBytes)
          return Uint8Array.from(t.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    627582: (e) => {
      "use strict";
      e.s({ keccak_256: () => y });
      var t = e.i(156677),
        r = e.i(458365);
      let o = BigInt(0),
        n = BigInt(1),
        s = BigInt(2),
        a = BigInt(7),
        i = BigInt(256),
        c = BigInt(113),
        l = [],
        u = [],
        d = [];
      for (let e = 0, t = n, r = 1, h = 0; e < 24; e++) {
        ([r, h] = [h, (2 * r + 3 * h) % 5]),
          l.push(2 * (5 * h + r)),
          u.push((((e + 1) * (e + 2)) / 2) % 64);
        let f = o;
        for (let e = 0; e < 7; e++)
          (t = ((t << n) ^ ((t >> a) * c)) % i) & s &&
            (f ^= n << ((n << BigInt(e)) - n));
        d.push(f);
      }
      let h = (0, t.split)(d, !0),
        f = h[0],
        p = h[1],
        b = (e, r, o) =>
          o > 32 ? (0, t.rotlBH)(e, r, o) : (0, t.rotlSH)(e, r, o),
        g = (e, r, o) =>
          o > 32 ? (0, t.rotlBL)(e, r, o) : (0, t.rotlSL)(e, r, o);
      class m extends r.Hash {
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, r.swap32IfBE)(this.state32),
            (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 24,
                o = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  o[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    n = (t + 2) % 10,
                    s = o[n],
                    a = o[n + 1],
                    i = b(s, a, 1) ^ o[r],
                    c = g(s, a, 1) ^ o[r + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= i), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  n = e[3];
                for (let r = 0; r < 24; r++) {
                  let o = u[r],
                    s = b(t, n, o),
                    a = g(t, n, o),
                    i = l[r];
                  (t = e[i]), (n = e[i + 1]), (e[i] = s), (e[i + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) o[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~o[(r + 2) % 10] & o[(r + 4) % 10];
                }
                (e[0] ^= f[r]), (e[1] ^= p[r]);
              }
              (0, r.clean)(o);
            })(this.state32, this.rounds),
            (0, r.swap32IfBE)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.aexists)(this), (e = (0, r.toBytes)(e)), (0, r.abytes)(e);
          let { blockLen: t, state: o } = this,
            n = e.length;
          for (let r = 0; r < n; ) {
            let s = Math.min(t - this.pos, n - r);
            for (let t = 0; t < s; t++) o[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: o } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === o - 1 && this.keccak(),
            (e[o - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.aexists)(this, !1), (0, r.abytes)(e), this.finish();
          let t = this.state,
            { blockLen: o } = this;
          for (let r = 0, n = e.length; r < n; ) {
            this.posOut >= o && this.keccak();
            let s = Math.min(o - this.posOut, n - r);
            e.set(t.subarray(this.posOut, this.posOut + s), r),
              (this.posOut += s),
              (r += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.anumber)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.aoutput)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, r.clean)(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: o,
            rounds: n,
            enableXOF: s,
          } = this;
          return (
            e || (e = new m(t, r, o, s, n)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = n),
            (e.suffix = r),
            (e.outputLen = o),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
        constructor(e, t, o, n = !1, s = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = o),
            (this.enableXOF = n),
            (this.rounds = s),
            (0, r.anumber)(o),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, r.u32)(this.state));
        }
      }
      let y = (() => (0, r.createHasher)(() => new m(136, 1, 32)))();
    },
    500780: (e) => {
      "use strict";
      e.s({ BaseError: () => n, setErrorConfig: () => o }, 500780);
      let t = "2.33.0",
        r = {
          getDocsUrl: (e) => {
            let { docsBaseUrl: t, docsPath: r = "", docsSlug: o } = e;
            return r
              ? ""
                  .concat(null != t ? t : "https://viem.sh")
                  .concat(r)
                  .concat(o ? "#".concat(o) : "")
              : void 0;
          },
          version: "viem@".concat(t),
        };
      function o(e) {
        r = e;
      }
      class n extends Error {
        walk(e) {
          return (function e(t, r) {
            return (null == r ? void 0 : r(t))
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
        constructor(e, o = {}) {
          var s, a;
          let i = (() => {
              var e;
              return o.cause instanceof n
                ? o.cause.details
                : (null == (e = o.cause) ? void 0 : e.message)
                ? o.cause.message
                : o.details;
            })(),
            c = (o.cause instanceof n && o.cause.docsPath) || o.docsPath,
            l =
              null == (s = r.getDocsUrl)
                ? void 0
                : s.call(r, { ...o, docsPath: c });
          super(
            [
              e || "An error occurred.",
              "",
              ...(o.metaMessages ? [...o.metaMessages, ""] : []),
              ...(l ? ["Docs: ".concat(l)] : []),
              ...(i ? ["Details: ".concat(i)] : []),
              ...(r.version ? ["Version: ".concat(r.version)] : []),
            ].join("\n"),
            o.cause ? { cause: o.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = i),
            (this.docsPath = c),
            (this.metaMessages = o.metaMessages),
            (this.name = null != (a = o.name) ? a : this.name),
            (this.shortMessage = e),
            (this.version = t);
        }
      }
    },
    383478: (e) => {
      "use strict";
      e.s({ stringify: () => t });
      let t = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let o = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, o) : o;
          },
          r
        );
    },
    207312: (e) => {
      "use strict";
      e.s({
        IntegerOutOfRangeError: () => r,
        InvalidBytesBooleanError: () => o,
        InvalidHexBooleanError: () => n,
        InvalidHexValueError: () => s,
        SizeOverflowError: () => a,
      });
      var t = e.i(500780);
      class r extends t.BaseError {
        constructor({ max: e, min: t, signed: r, size: o, value: n }) {
          super(
            'Number "'
              .concat(n, '" is not in safe ')
              .concat(
                o
                  ? ""
                      .concat(8 * o, "-bit ")
                      .concat(r ? "signed" : "unsigned", " ")
                  : "",
                "integer range "
              )
              .concat(
                e
                  ? "(".concat(t, " to ").concat(e, ")")
                  : "(above ".concat(t, ")")
              ),
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class o extends t.BaseError {
        constructor(e) {
          super(
            'Bytes value "'.concat(
              e,
              '" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.'
            ),
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class n extends t.BaseError {
        constructor(e) {
          super(
            'Hex value "'.concat(
              e,
              '" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).'
            ),
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      class s extends t.BaseError {
        constructor(e) {
          super(
            'Hex value "'
              .concat(e, '" is an odd length (')
              .concat(e.length, "). It must be an even length."),
            { name: "InvalidHexValueError" }
          );
        }
      }
      class a extends t.BaseError {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            "Size cannot exceed "
              .concat(t, " bytes. Given size: ")
              .concat(e, " bytes."),
            { name: "SizeOverflowError" }
          );
        }
      }
    },
    561160: [
      (e) => {
        "use strict";
        e.s({ pad: () => s, padBytes: () => i, padHex: () => a }, 561160),
          e.s(
            {
              InvalidBytesLengthError: () => n,
              SizeExceedsPaddingSizeError: () => o,
              SliceOffsetOutOfBoundsError: () => r,
            },
            140373
          );
        var t = e.i(500780);
        class r extends t.BaseError {
          constructor({ offset: e, position: t, size: r }) {
            super(
              "Slice "
                .concat("start" === t ? "starting" : "ending", ' at offset "')
                .concat(e, '" is out-of-bounds (size: ')
                .concat(r, ")."),
              { name: "SliceOffsetOutOfBoundsError" }
            );
          }
        }
        class o extends t.BaseError {
          constructor({ size: e, targetSize: t, type: r }) {
            super(
              ""
                .concat(r.charAt(0).toUpperCase())
                .concat(r.slice(1).toLowerCase(), " size (")
                .concat(e, ") exceeds padding size (")
                .concat(t, ")."),
              { name: "SizeExceedsPaddingSizeError" }
            );
          }
        }
        class n extends t.BaseError {
          constructor({ size: e, targetSize: t, type: r }) {
            super(
              ""
                .concat(r.charAt(0).toUpperCase())
                .concat(r.slice(1).toLowerCase(), " is expected to be ")
                .concat(t, " ")
                .concat(r, " long, but is ")
                .concat(e, " ")
                .concat(r, " long."),
              { name: "InvalidBytesLengthError" }
            );
          }
        }
        function s(e) {
          let { dir: t, size: r = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e
            ? a(e, { dir: t, size: r })
            : i(e, { dir: t, size: r });
        }
        function a(e) {
          let { dir: t, size: r = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === r) return e;
          let n = e.replace("0x", "");
          if (n.length > 2 * r)
            throw new o({
              size: Math.ceil(n.length / 2),
              targetSize: r,
              type: "hex",
            });
          return "0x".concat(
            n["right" === t ? "padEnd" : "padStart"](2 * r, "0")
          );
        }
        function i(e) {
          let { dir: t, size: r = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === r) return e;
          if (e.length > r)
            throw new o({ size: e.length, targetSize: r, type: "bytes" });
          let n = new Uint8Array(r);
          for (let o = 0; o < r; o++) {
            let s = "right" === t;
            n[s ? o : r - o - 1] = e[s ? o : e.length - o - 1];
          }
          return n;
        }
      },
      [140373],
    ],
    212629: (e) => {
      "use strict";
      function t(e) {
        let { strict: t = !0 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      e.s({ isHex: () => t });
    },
    265288: (e) => {
      "use strict";
      e.s({ size: () => r });
      var t = e.i(212629);
      function r(e) {
        return (0, t.isHex)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    569103: (e) => {
      "use strict";
      function t(e) {
        let { dir: t = "left" } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = "string" == typeof e ? e.replace("0x", "") : e,
          o = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === t ? e : r.length - e - 1].toString()) o++;
          else break;
        return ((r = "left" === t ? r.slice(o) : r.slice(0, r.length - o)),
        "string" == typeof e)
          ? (1 === r.length && "right" === t && (r = "".concat(r, "0")),
            "0x".concat(r.length % 2 == 1 ? "0".concat(r) : r))
          : r;
      }
      e.s({ trim: () => t });
    },
    919717: (e) => {
      "use strict";
      e.s({
        boolToBytes: () => c,
        hexToBytes: () => d,
        numberToBytes: () => h,
        stringToBytes: () => f,
        toBytes: () => i,
      });
      var t = e.i(500780),
        r = e.i(212629),
        o = e.i(561160),
        n = e.i(864198),
        s = e.i(994290);
      let a = new TextEncoder();
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" == typeof e || "bigint" == typeof e
          ? h(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : (0, r.isHex)(e)
          ? d(e, t)
          : f(e, t);
      }
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = new Uint8Array(1);
        return ((r[0] = Number(e)), "number" == typeof t.size)
          ? ((0, n.assertSize)(r, { size: t.size }),
            (0, o.pad)(r, { size: t.size }))
          : r;
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function u(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function d(e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = e;
        r.size &&
          ((0, n.assertSize)(s, { size: r.size }),
          (s = (0, o.pad)(s, { dir: "right", size: r.size })));
        let a = s.slice(2);
        a.length % 2 && (a = "0".concat(a));
        let i = a.length / 2,
          c = new Uint8Array(i);
        for (let e = 0, r = 0; e < i; e++) {
          let o = u(a.charCodeAt(r++)),
            n = u(a.charCodeAt(r++));
          if (void 0 === o || void 0 === n)
            throw new t.BaseError(
              'Invalid byte sequence ("'
                .concat(a[r - 2])
                .concat(a[r - 1], '" in "')
                .concat(a, '").')
            );
          c[e] = 16 * o + n;
        }
        return c;
      }
      function h(e, t) {
        return d((0, s.numberToHex)(e, t));
      }
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = a.encode(e);
        return "number" == typeof t.size
          ? ((0, n.assertSize)(r, { size: t.size }),
            (0, o.pad)(r, { dir: "right", size: t.size }))
          : r;
      }
    },
    864198: (e) => {
      "use strict";
      e.s({
        assertSize: () => s,
        fromHex: () => a,
        hexToBigInt: () => i,
        hexToBool: () => c,
        hexToNumber: () => l,
        hexToString: () => u,
      });
      var t = e.i(207312),
        r = e.i(265288),
        o = e.i(569103),
        n = e.i(919717);
      function s(e, o) {
        let { size: n } = o;
        if ((0, r.size)(e) > n)
          throw new t.SizeOverflowError({
            givenSize: (0, r.size)(e),
            maxSize: n,
          });
      }
      function a(e, t) {
        let r = "string" == typeof t ? { to: t } : t,
          o = r.to;
        return "number" === o
          ? l(e, r)
          : "bigint" === o
          ? i(e, r)
          : "string" === o
          ? u(e, r)
          : "boolean" === o
          ? c(e, r)
          : (0, n.hexToBytes)(e, r);
      }
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { signed: r } = t;
        t.size && s(e, { size: t.size });
        let o = BigInt(e);
        if (!r) return o;
        let n = (e.length - 2) / 2;
        return o <= (1n << (8n * BigInt(n) - 1n)) - 1n
          ? o
          : o - BigInt("0x".concat("f".padStart(2 * n, "f"))) - 1n;
      }
      function c(e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e;
        if (
          (r.size && (s(n, { size: r.size }), (n = (0, o.trim)(n))),
          "0x00" === (0, o.trim)(n))
        )
          return !1;
        if ("0x01" === (0, o.trim)(n)) return !0;
        throw new t.InvalidHexBooleanError(n);
      }
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Number(i(e, t));
      }
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = (0, n.hexToBytes)(e);
        return (
          t.size &&
            (s(r, { size: t.size }), (r = (0, o.trim)(r, { dir: "right" }))),
          new TextDecoder().decode(r)
        );
      }
    },
    994290: (e) => {
      "use strict";
      e.s({
        boolToHex: () => a,
        bytesToHex: () => i,
        numberToHex: () => c,
        stringToHex: () => u,
        toHex: () => s,
      });
      var t = e.i(207312),
        r = e.i(561160),
        o = e.i(864198);
      let n = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function s(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" == typeof e || "bigint" == typeof e
          ? c(e, t)
          : "string" == typeof e
          ? u(e, t)
          : "boolean" == typeof e
          ? a(e, t)
          : i(e, t);
      }
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = "0x".concat(Number(e));
        return "number" == typeof t.size
          ? ((0, o.assertSize)(n, { size: t.size }),
            (0, r.pad)(n, { size: t.size }))
          : n;
      }
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = "";
        for (let t = 0; t < e.length; t++) s += n[e[t]];
        let a = "0x".concat(s);
        return "number" == typeof t.size
          ? ((0, o.assertSize)(a, { size: t.size }),
            (0, r.pad)(a, { dir: "right", size: t.size }))
          : a;
      }
      function c(e) {
        let o,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { signed: s, size: a } = n,
          i = BigInt(e);
        a
          ? (o = s
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (o = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof o && s ? -o - 1n : 0;
        if ((o && i > o) || i < c) {
          let r = "bigint" == typeof e ? "n" : "";
          throw new t.IntegerOutOfRangeError({
            max: o ? "".concat(o).concat(r) : void 0,
            min: "".concat(c).concat(r),
            signed: s,
            size: a,
            value: "".concat(e).concat(r),
          });
        }
        let l = "0x".concat(
          (s && i < 0 ? (1n << BigInt(8 * a)) + BigInt(i) : i).toString(16)
        );
        return a ? (0, r.pad)(l, { size: a }) : l;
      }
      let l = new TextEncoder();
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return i(l.encode(e), t);
      }
    },
    230755: (e) => {
      "use strict";
      e.s({ LruMap: () => t });
      class t extends Map {
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
      }
    },
    948628: (e) => {
      "use strict";
      e.s({ InvalidAddressError: () => r });
      var t = e.i(500780);
      class r extends t.BaseError {
        constructor({ address: e }) {
          super('Address "'.concat(e, '" is invalid.'), {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    831826: (e) => {
      "use strict";
      e.s({ keccak256: () => s });
      var t = e.i(627582),
        r = e.i(212629),
        o = e.i(919717),
        n = e.i(994290);
      function s(e, s) {
        let a = (0, t.keccak_256)(
          (0, r.isHex)(e, { strict: !1 }) ? (0, o.toBytes)(e) : e
        );
        return "bytes" === (s || "hex") ? a : (0, n.toHex)(a);
      }
    },
    259123: (e) => {
      "use strict";
      e.s({ isAddress: () => s });
      var t = e.i(230755),
        r = e.i(549798);
      let o = /^0x[a-fA-F0-9]{40}$/,
        n = new t.LruMap(8192);
      function s(e, t) {
        let { strict: s = !0 } = null != t ? t : {},
          a = "".concat(e, ".").concat(s);
        if (n.has(a)) return n.get(a);
        let i =
          !!o.test(e) &&
          (e.toLowerCase() === e || !s || (0, r.checksumAddress)(e) === e);
        return n.set(a, i), i;
      }
    },
    549798: (e) => {
      "use strict";
      e.s({ checksumAddress: () => i, getAddress: () => c });
      var t = e.i(948628),
        r = e.i(919717),
        o = e.i(831826),
        n = e.i(230755),
        s = e.i(259123);
      let a = new n.LruMap(8192);
      function i(e, t) {
        if (a.has("".concat(e, ".").concat(t)))
          return a.get("".concat(e, ".").concat(t));
        let n = t
            ? "".concat(t).concat(e.toLowerCase())
            : e.substring(2).toLowerCase(),
          s = (0, o.keccak256)((0, r.stringToBytes)(n), "bytes"),
          i = (t ? n.substring("".concat(t, "0x").length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          s[e >> 1] >> 4 >= 8 && i[e] && (i[e] = i[e].toUpperCase()),
            (15 & s[e >> 1]) >= 8 &&
              i[e + 1] &&
              (i[e + 1] = i[e + 1].toUpperCase());
        let c = "0x".concat(i.join(""));
        return a.set("".concat(e, ".").concat(t), c), c;
      }
      function c(e, r) {
        if (!(0, s.isAddress)(e, { strict: !1 }))
          throw new t.InvalidAddressError({ address: e });
        return i(e, r);
      }
    },
  },
]);

//# sourceMappingURL=b411bdb358eb3a43.js.map
