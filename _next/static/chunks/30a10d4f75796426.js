(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    813565: (e) => {
      var { m: t, e: i } = e;
      function r(e) {
        return (0x100000000 + e).toString(16).substring(1);
      }
      t.exports = {
        normalizeInput: function (e) {
          let t;
          if (e instanceof Uint8Array) t = e;
          else if ("string" == typeof e) t = new TextEncoder().encode(e);
          else throw Error("Input must be an string, Buffer or Uint8Array");
          return t;
        },
        toHex: function (e) {
          return Array.prototype.map
            .call(e, function (e) {
              return (e < 16 ? "0" : "") + e.toString(16);
            })
            .join("");
        },
        debugPrint: function (e, t, i) {
          let s = "\n" + e + " = ";
          for (let n = 0; n < t.length; n += 2) {
            if (32 === i)
              (s += r(t[n]).toUpperCase()),
                (s += " "),
                (s += r(t[n + 1]).toUpperCase());
            else if (64 === i)
              (s += r(t[n + 1]).toUpperCase()), (s += r(t[n]).toUpperCase());
            else throw Error("Invalid size " + i);
            n % 6 == 4
              ? (s += "\n" + Array(e.length + 4).join(" "))
              : n < t.length - 2 && (s += " ");
          }
          console.log(s);
        },
        testSpeed: function (e, t, i) {
          let r = new Date().getTime(),
            s = new Uint8Array(t);
          for (let e = 0; e < t; e++) s[e] = e % 256;
          let n = new Date().getTime();
          console.log("Generated random input in " + (n - r) + "ms"), (r = n);
          for (let n = 0; n < i; n++) {
            let i = e(s),
              n = new Date().getTime(),
              o = n - r;
            (r = n),
              console.log(
                "Hashed in " + o + "ms: " + i.substring(0, 20) + "..."
              ),
              console.log(
                Math.round((t / 1048576 / (o / 1e3)) * 100) / 100 +
                  " MB PER SECOND"
              );
          }
        },
      };
    },
    248751: (e) => {
      var { m: t, e: i } = e;
      {
        let i = e.r(813565);
        function r(e, t, i) {
          let r = e[t] + e[i],
            s = e[t + 1] + e[i + 1];
          r >= 0x100000000 && s++, (e[t] = r), (e[t + 1] = s);
        }
        function s(e, t, i, r) {
          let s = e[t] + i;
          i < 0 && (s += 0x100000000);
          let n = e[t + 1] + r;
          s >= 0x100000000 && n++, (e[t] = s), (e[t + 1] = n);
        }
        function n(e, t) {
          return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
        }
        function o(e, t, i, n, o, a) {
          let c = g[o],
            l = g[o + 1],
            h = g[a],
            d = g[a + 1];
          r(f, e, t), s(f, e, c, l);
          let u = f[n] ^ f[e],
            p = f[n + 1] ^ f[e + 1];
          (f[n] = p),
            (f[n + 1] = u),
            r(f, i, n),
            (u = f[t] ^ f[i]),
            (p = f[t + 1] ^ f[i + 1]),
            (f[t] = (u >>> 24) ^ (p << 8)),
            (f[t + 1] = (p >>> 24) ^ (u << 8)),
            r(f, e, t),
            s(f, e, h, d),
            (u = f[n] ^ f[e]),
            (p = f[n + 1] ^ f[e + 1]),
            (f[n] = (u >>> 16) ^ (p << 16)),
            (f[n + 1] = (p >>> 16) ^ (u << 16)),
            r(f, i, n),
            (u = f[t] ^ f[i]),
            (p = f[t + 1] ^ f[i + 1]),
            (f[t] = (p >>> 31) ^ (u << 1)),
            (f[t + 1] = (u >>> 31) ^ (p << 1));
        }
        let u = new Uint32Array([
            0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b,
            0x3c6ef372, 0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f,
            0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179,
            0x5be0cd19,
          ]),
          p = new Uint8Array(
            [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4,
              8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15,
              13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5,
              10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3,
              13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5,
              1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12,
              1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12,
              2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3,
              12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
              14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
            ].map(function (e) {
              return 2 * e;
            })
          ),
          f = new Uint32Array(32),
          g = new Uint32Array(32);
        function a(e, t) {
          let i = 0;
          for (i = 0; i < 16; i++) (f[i] = e.h[i]), (f[i + 16] = u[i]);
          for (
            f[24] = f[24] ^ e.t,
              f[25] = f[25] ^ (e.t / 0x100000000),
              t && ((f[28] = ~f[28]), (f[29] = ~f[29])),
              i = 0;
            i < 32;
            i++
          )
            g[i] = n(e.b, 4 * i);
          for (i = 0; i < 12; i++)
            o(0, 8, 16, 24, p[16 * i + 0], p[16 * i + 1]),
              o(2, 10, 18, 26, p[16 * i + 2], p[16 * i + 3]),
              o(4, 12, 20, 28, p[16 * i + 4], p[16 * i + 5]),
              o(6, 14, 22, 30, p[16 * i + 6], p[16 * i + 7]),
              o(0, 10, 20, 30, p[16 * i + 8], p[16 * i + 9]),
              o(2, 12, 22, 24, p[16 * i + 10], p[16 * i + 11]),
              o(4, 14, 16, 26, p[16 * i + 12], p[16 * i + 13]),
              o(6, 8, 18, 28, p[16 * i + 14], p[16 * i + 15]);
          for (i = 0; i < 16; i++) e.h[i] = e.h[i] ^ f[i] ^ f[i + 16];
        }
        let y = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]);
        function c(e, t, i, r) {
          if (0 === e || e > 64)
            throw Error("Illegal output length, expected 0 < length <= 64");
          if (t && t.length > 64)
            throw Error(
              "Illegal key, expected Uint8Array with 0 < length <= 64"
            );
          if (i && 16 !== i.length)
            throw Error("Illegal salt, expected Uint8Array with length is 16");
          if (r && 16 !== r.length)
            throw Error(
              "Illegal personal, expected Uint8Array with length is 16"
            );
          let s = {
            b: new Uint8Array(128),
            h: new Uint32Array(16),
            t: 0,
            c: 0,
            outlen: e,
          };
          y.fill(0),
            (y[0] = e),
            t && (y[1] = t.length),
            (y[2] = 1),
            (y[3] = 1),
            i && y.set(i, 32),
            r && y.set(r, 48);
          for (let e = 0; e < 16; e++) s.h[e] = u[e] ^ n(y, 4 * e);
          return t && (l(s, t), (s.c = 128)), s;
        }
        function l(e, t) {
          for (let i = 0; i < t.length; i++)
            128 === e.c && ((e.t += e.c), a(e, !1), (e.c = 0)),
              (e.b[e.c++] = t[i]);
        }
        function h(e) {
          for (e.t += e.c; e.c < 128; ) e.b[e.c++] = 0;
          a(e, !0);
          let t = new Uint8Array(e.outlen);
          for (let i = 0; i < e.outlen; i++)
            t[i] = e.h[i >> 2] >> (8 * (3 & i));
          return t;
        }
        function d(e, t, r, s, n) {
          (r = r || 64),
            (e = i.normalizeInput(e)),
            s && (s = i.normalizeInput(s)),
            n && (n = i.normalizeInput(n));
          let o = c(r, t, s, n);
          return l(o, e), h(o);
        }
        t.exports = {
          blake2b: d,
          blake2bHex: function (e, t, r, s, n) {
            let o = d(e, t, r, s, n);
            return i.toHex(o);
          },
          blake2bInit: c,
          blake2bUpdate: l,
          blake2bFinal: h,
        };
      }
    },
    795621: (e) => {
      var { m: t, e: i } = e;
      {
        let i = e.r(813565);
        function r(e, t, i, r, n, o) {
          (u[e] = u[e] + u[t] + n),
            (u[r] = s(u[r] ^ u[e], 16)),
            (u[i] = u[i] + u[r]),
            (u[t] = s(u[t] ^ u[i], 12)),
            (u[e] = u[e] + u[t] + o),
            (u[r] = s(u[r] ^ u[e], 8)),
            (u[i] = u[i] + u[r]),
            (u[t] = s(u[t] ^ u[i], 7));
        }
        function s(e, t) {
          return (e >>> t) ^ (e << (32 - t));
        }
        let h = new Uint32Array([
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          d = new Uint8Array([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
          ]),
          u = new Uint32Array(16),
          p = new Uint32Array(16);
        function n(e, t) {
          let i = 0;
          for (i = 0; i < 8; i++) (u[i] = e.h[i]), (u[i + 8] = h[i]);
          for (
            u[12] ^= e.t,
              u[13] ^= e.t / 0x100000000,
              t && (u[14] = ~u[14]),
              i = 0;
            i < 16;
            i++
          ) {
            var s, n;
            p[i] =
              (s = e.b)[(n = 4 * i)] ^
              (s[n + 1] << 8) ^
              (s[n + 2] << 16) ^
              (s[n + 3] << 24);
          }
          for (i = 0; i < 10; i++)
            r(0, 4, 8, 12, p[d[16 * i + 0]], p[d[16 * i + 1]]),
              r(1, 5, 9, 13, p[d[16 * i + 2]], p[d[16 * i + 3]]),
              r(2, 6, 10, 14, p[d[16 * i + 4]], p[d[16 * i + 5]]),
              r(3, 7, 11, 15, p[d[16 * i + 6]], p[d[16 * i + 7]]),
              r(0, 5, 10, 15, p[d[16 * i + 8]], p[d[16 * i + 9]]),
              r(1, 6, 11, 12, p[d[16 * i + 10]], p[d[16 * i + 11]]),
              r(2, 7, 8, 13, p[d[16 * i + 12]], p[d[16 * i + 13]]),
              r(3, 4, 9, 14, p[d[16 * i + 14]], p[d[16 * i + 15]]);
          for (i = 0; i < 8; i++) e.h[i] ^= u[i] ^ u[i + 8];
        }
        function o(e, t) {
          if (!(e > 0 && e <= 32))
            throw Error("Incorrect output length, should be in [1, 32]");
          let i = t ? t.length : 0;
          if (t && !(i > 0 && i <= 32))
            throw Error("Incorrect key length, should be in [1, 32]");
          let r = {
            h: new Uint32Array(h),
            b: new Uint8Array(64),
            c: 0,
            t: 0,
            outlen: e,
          };
          return (
            (r.h[0] ^= 0x1010000 ^ (i << 8) ^ e),
            i > 0 && (a(r, t), (r.c = 64)),
            r
          );
        }
        function a(e, t) {
          for (let i = 0; i < t.length; i++)
            64 === e.c && ((e.t += e.c), n(e, !1), (e.c = 0)),
              (e.b[e.c++] = t[i]);
        }
        function c(e) {
          for (e.t += e.c; e.c < 64; ) e.b[e.c++] = 0;
          n(e, !0);
          let t = new Uint8Array(e.outlen);
          for (let i = 0; i < e.outlen; i++)
            t[i] = (e.h[i >> 2] >> (8 * (3 & i))) & 255;
          return t;
        }
        function l(e, t, r) {
          (r = r || 32), (e = i.normalizeInput(e));
          let s = o(r, t);
          return a(s, e), c(s);
        }
        t.exports = {
          blake2s: l,
          blake2sHex: function (e, t, r) {
            let s = l(e, t, r);
            return i.toHex(s);
          },
          blake2sInit: o,
          blake2sUpdate: a,
          blake2sFinal: c,
        };
      }
    },
    7781: (e) => {
      var { m: t, e: i } = e;
      {
        let i = e.r(248751),
          r = e.r(795621);
        t.exports = {
          blake2b: i.blake2b,
          blake2bHex: i.blake2bHex,
          blake2bInit: i.blake2bInit,
          blake2bUpdate: i.blake2bUpdate,
          blake2bFinal: i.blake2bFinal,
          blake2s: r.blake2s,
          blake2sHex: r.blake2sHex,
          blake2sInit: r.blake2sInit,
          blake2sUpdate: r.blake2sUpdate,
          blake2sFinal: r.blake2sFinal,
        };
      }
    },
    646559: [
      (e) => {
        "use strict";
        e.s({ SIWXUtil: () => hY }, 646559), e.s({ default: () => hk }, 969030);
        var t,
          i = e.i(710841),
          r = e.i(174519),
          s = e.i(216485),
          n = e.i(584345),
          o = e.i(810174);
        e.i(973439);
        var a = e.i(251909),
          c = e.i(862877);
        e.i(400284);
        var l = e.i(989686),
          h = Object.defineProperty,
          d = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? h(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class u extends l.IEvents {
          constructor(e) {
            super(),
              (this.opts = e),
              d(this, "protocol", "wc"),
              d(this, "version", 2);
          }
        }
        var p = Object.defineProperty;
        class f extends l.IEvents {
          constructor(e, t) {
            super(),
              (this.core = e),
              (this.logger = t),
              ((e, t, i) =>
                ((e, t, i) =>
                  t in e
                    ? p(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: i,
                      })
                    : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i))(
                this,
                "records",
                new Map()
              );
          }
        }
        class g {
          constructor(e, t) {
            (this.logger = e), (this.core = t);
          }
        }
        class y extends l.IEvents {
          constructor(e, t) {
            super(), (this.relayer = e), (this.logger = t);
          }
        }
        class m extends l.IEvents {
          constructor(e) {
            super();
          }
        }
        class b {
          constructor(e, t, i, r) {
            (this.core = e), (this.logger = t), (this.name = i);
          }
        }
        class v extends l.IEvents {
          constructor(e, t) {
            super(), (this.relayer = e), (this.logger = t);
          }
        }
        class w extends l.IEvents {
          constructor(e, t) {
            super(), (this.core = e), (this.logger = t);
          }
        }
        class E {
          constructor(e, t, i) {
            (this.core = e), (this.logger = t), (this.store = i);
          }
        }
        class I {
          constructor(e, t) {
            (this.projectId = e), (this.logger = t);
          }
        }
        class x {
          constructor(e, t, i) {
            (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
          }
        }
        var P = Object.defineProperty,
          _ = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? P(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        s.default;
        class S {
          constructor(e) {
            (this.opts = e), _(this, "protocol", "wc"), _(this, "version", 2);
          }
        }
        s.EventEmitter;
        class A {
          constructor(e) {
            this.client = e;
          }
        }
        var O = e.i(501318),
          C = e.i(869740),
          R = e.i(358191),
          T = e.i(420202),
          N = e.i(614786),
          U = e.i(301885);
        let k = "2.31.0",
          D = {
            getDocsUrl: (e) => {
              let { docsBaseUrl: t, docsPath: i = "", docsSlug: r } = e;
              return i
                ? ""
                    .concat(null != t ? t : "https://viem.sh")
                    .concat(i)
                    .concat(r ? "#".concat(r) : "")
                : void 0;
            },
            version: "viem@".concat(k),
          };
        class q extends Error {
          walk(e) {
            return (function e(t, i) {
              return (null == i ? void 0 : i(t))
                ? t
                : t &&
                  "object" == typeof t &&
                  "cause" in t &&
                  void 0 !== t.cause
                ? e(t.cause, i)
                : i
                ? null
                : t;
            })(this, e);
          }
          constructor(e, t = {}) {
            var i, r;
            let s = (() => {
                var e;
                return t.cause instanceof q
                  ? t.cause.details
                  : (null == (e = t.cause) ? void 0 : e.message)
                  ? t.cause.message
                  : t.details;
              })(),
              n = (t.cause instanceof q && t.cause.docsPath) || t.docsPath,
              o =
                null == (i = D.getDocsUrl)
                  ? void 0
                  : i.call(D, { ...t, docsPath: n });
            super(
              [
                e || "An error occurred.",
                "",
                ...(t.metaMessages ? [...t.metaMessages, ""] : []),
                ...(o ? ["Docs: ".concat(o)] : []),
                ...(s ? ["Details: ".concat(s)] : []),
                ...(D.version ? ["Version: ".concat(D.version)] : []),
              ].join("\n"),
              t.cause ? { cause: t.cause } : void 0
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
              (this.details = s),
              (this.docsPath = n),
              (this.metaMessages = t.metaMessages),
              (this.name = null != (r = t.name) ? r : this.name),
              (this.shortMessage = e),
              (this.version = k);
          }
        }
        function B(e) {
          let { strict: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            !!e &&
            "string" == typeof e &&
            (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
          );
        }
        class j extends q {
          constructor({ size: e, targetSize: t, type: i }) {
            super(
              ""
                .concat(i.charAt(0).toUpperCase())
                .concat(i.slice(1).toLowerCase(), " size (")
                .concat(e, ") exceeds padding size (")
                .concat(t, ")."),
              { name: "SizeExceedsPaddingSizeError" }
            );
          }
        }
        function L(e) {
          let { dir: t, size: i = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e
            ? (function (e) {
                let { dir: t, size: i = 32 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (null === i) return e;
                let r = e.replace("0x", "");
                if (r.length > 2 * i)
                  throw new j({
                    size: Math.ceil(r.length / 2),
                    targetSize: i,
                    type: "hex",
                  });
                return "0x".concat(
                  r["right" === t ? "padEnd" : "padStart"](2 * i, "0")
                );
              })(e, { dir: t, size: i })
            : (function (e) {
                let { dir: t, size: i = 32 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (null === i) return e;
                if (e.length > i)
                  throw new j({ size: e.length, targetSize: i, type: "bytes" });
                let r = new Uint8Array(i);
                for (let s = 0; s < i; s++) {
                  let n = "right" === t;
                  r[n ? s : i - s - 1] = e[n ? s : e.length - s - 1];
                }
                return r;
              })(e, { dir: t, size: i });
        }
        class M extends q {
          constructor({ max: e, min: t, signed: i, size: r, value: s }) {
            super(
              'Number "'
                .concat(s, '" is not in safe ')
                .concat(
                  r
                    ? ""
                        .concat(8 * r, "-bit ")
                        .concat(i ? "signed" : "unsigned", " ")
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
        class z extends q {
          constructor({ givenSize: e, maxSize: t }) {
            super(
              "Size cannot exceed "
                .concat(t, " bytes. Given size: ")
                .concat(e, " bytes."),
              { name: "SizeOverflowError" }
            );
          }
        }
        function H(e) {
          return B(e, { strict: !1 })
            ? Math.ceil((e.length - 2) / 2)
            : e.length;
        }
        function F(e, t) {
          let { size: i } = t;
          if (H(e) > i) throw new z({ givenSize: H(e), maxSize: i });
        }
        function V(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: i } = t;
          t.size && F(e, { size: t.size });
          let r = BigInt(e);
          if (!i) return r;
          let s = (e.length - 2) / 2;
          return r <= (1n << (8n * BigInt(s) - 1n)) - 1n
            ? r
            : r - BigInt("0x".concat("f".padStart(2 * s, "f"))) - 1n;
        }
        let K = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
        function W(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "number" == typeof e || "bigint" == typeof e
            ? J(e, t)
            : "string" == typeof e
            ? (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return G(Y.encode(e), t);
              })(e, t)
            : "boolean" == typeof e
            ? (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = "0x".concat(Number(e));
                return "number" == typeof t.size
                  ? (F(i, { size: t.size }), L(i, { size: t.size }))
                  : i;
              })(e, t)
            : G(e, t);
        }
        function G(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = "";
          for (let t = 0; t < e.length; t++) i += K[e[t]];
          let r = "0x".concat(i);
          return "number" == typeof t.size
            ? (F(r, { size: t.size }), L(r, { dir: "right", size: t.size }))
            : r;
        }
        function J(e) {
          let t,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: r, size: s } = i,
            n = BigInt(e);
          s
            ? (t = r
                ? (1n << (8n * BigInt(s) - 1n)) - 1n
                : 2n ** (8n * BigInt(s)) - 1n)
            : "number" == typeof e && (t = BigInt(Number.MAX_SAFE_INTEGER));
          let o = "bigint" == typeof t && r ? -t - 1n : 0;
          if ((t && n > t) || n < o) {
            let i = "bigint" == typeof e ? "n" : "";
            throw new M({
              max: t ? "".concat(t).concat(i) : void 0,
              min: "".concat(o).concat(i),
              signed: r,
              size: s,
              value: "".concat(e).concat(i),
            });
          }
          let a = "0x".concat(
            (r && n < 0 ? (1n << BigInt(8 * s)) + BigInt(n) : n).toString(16)
          );
          return s ? L(a, { size: s }) : a;
        }
        let Y = new TextEncoder(),
          X = new TextEncoder(),
          Z = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
        function Q(e) {
          return e >= Z.zero && e <= Z.nine
            ? e - Z.zero
            : e >= Z.A && e <= Z.F
            ? e - (Z.A - 10)
            : e >= Z.a && e <= Z.f
            ? e - (Z.a - 10)
            : void 0;
        }
        function $(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = e;
          t.size &&
            (F(i, { size: t.size }),
            (i = L(i, { dir: "right", size: t.size })));
          let r = i.slice(2);
          r.length % 2 && (r = "0".concat(r));
          let s = r.length / 2,
            n = new Uint8Array(s);
          for (let e = 0, t = 0; e < s; e++) {
            let i = Q(r.charCodeAt(t++)),
              s = Q(r.charCodeAt(t++));
            if (void 0 === i || void 0 === s)
              throw new q(
                'Invalid byte sequence ("'
                  .concat(r[t - 2])
                  .concat(r[t - 1], '" in "')
                  .concat(r, '").')
              );
            n[e] = 16 * i + s;
          }
          return n;
        }
        function ee(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = X.encode(e);
          return "number" == typeof t.size
            ? (F(i, { size: t.size }), L(i, { dir: "right", size: t.size }))
            : i;
        }
        var et = e.i(627582);
        function ei(e, t) {
          let i = (0, et.keccak_256)(
            B(e, { strict: !1 })
              ? (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return "number" == typeof e || "bigint" == typeof e
                    ? $(J(e, t))
                    : "boolean" == typeof e
                    ? (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          i = new Uint8Array(1);
                        return ((i[0] = Number(e)), "number" == typeof t.size)
                          ? (F(i, { size: t.size }), L(i, { size: t.size }))
                          : i;
                      })(e, t)
                    : B(e)
                    ? $(e, t)
                    : ee(e, t);
                })(e)
              : e
          );
          return "bytes" === (t || "hex") ? i : W(i);
        }
        class er extends Map {
          get(e) {
            let t = super.get(e);
            return (
              super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)),
              t
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
        let es = new er(8192);
        async function en(t) {
          let { hash: i, signature: r } = t,
            s = B(i) ? i : W(i),
            { secp256k1: n } = await e.r(716581)(e.i),
            o = (() => {
              if ("object" == typeof r && "r" in r && "s" in r) {
                let { r: e, s: t, v: i, yParity: s } = r,
                  o = eo(Number(null != s ? s : i));
                return new n.Signature(V(e), V(t)).addRecoveryBit(o);
              }
              let e = B(r) ? r : W(r);
              if (65 !== H(e)) throw Error("invalid signature length");
              let t = eo(
                (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return Number(V(e, t));
                })("0x".concat(e.slice(130)))
              );
              return n.Signature.fromCompact(
                e.substring(2, 130)
              ).addRecoveryBit(t);
            })()
              .recoverPublicKey(s.substring(2))
              .toHex(!1);
          return "0x".concat(o);
        }
        function eo(e) {
          if (0 === e || 1 === e) return e;
          if (27 === e) return 0;
          if (28 === e) return 1;
          throw Error("Invalid yParityOrV value");
        }
        async function ea(e) {
          let { hash: t, signature: i } = e;
          var r = await en({ hash: t, signature: i });
          let s = ei("0x".concat(r.substring(4))).substring(26);
          return (function (e, t) {
            if (es.has("".concat(e, ".").concat(void 0)))
              return es.get("".concat(e, ".").concat(void 0));
            let i = t
                ? "".concat(t).concat(e.toLowerCase())
                : e.substring(2).toLowerCase(),
              r = ei(ee(i), "bytes"),
              s = (t ? i.substring("".concat(t, "0x").length) : i).split("");
            for (let e = 0; e < 40; e += 2)
              r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
                (15 & r[e >> 1]) >= 8 &&
                  s[e + 1] &&
                  (s[e + 1] = s[e + 1].toUpperCase());
            let n = "0x".concat(s.join(""));
            return es.set("".concat(e, ".").concat(t), n), n;
          })("0x".concat(s));
        }
        var ec = e.i(86352);
        function el(e) {
          return ""
            .concat(e < 0 ? "-" : "", "0x")
            .concat(Math.abs(e).toString(16).padStart(2, "0"));
        }
        class eh {
          constructor(e, t) {
            (this.type = e), (this.data = t);
          }
        }
        class ed extends Error {
          constructor(e) {
            super(e),
              Object.setPrototypeOf(this, Object.create(ed.prototype)),
              Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: ed.name,
              });
          }
        }
        function eu(e, t, i) {
          let r = Math.floor(i / 0x100000000);
          e.setUint32(t, r), e.setUint32(t + 4, i);
        }
        function ep(e, t) {
          return 0x100000000 * e.getInt32(t) + e.getUint32(t + 4);
        }
        let ef = {
          type: -1,
          encode: function (e) {
            return e instanceof Date
              ? (function (e) {
                  let { sec: t, nsec: i } = e;
                  if (t >= 0 && i >= 0 && t <= 0x3ffffffff)
                    if (0 === i && t <= 0xffffffff) {
                      let e = new Uint8Array(4);
                      return new DataView(e.buffer).setUint32(0, t), e;
                    } else {
                      let e = t / 0x100000000,
                        r = new Uint8Array(8),
                        s = new DataView(r.buffer);
                      return (
                        s.setUint32(0, (i << 2) | (3 & e)),
                        s.setUint32(4, 0 | t),
                        r
                      );
                    }
                  {
                    let e = new Uint8Array(12),
                      r = new DataView(e.buffer);
                    return r.setUint32(0, i), eu(r, 4, t), e;
                  }
                })(
                  (function (e) {
                    let t = e.getTime(),
                      i = Math.floor(t / 1e3),
                      r = (t - 1e3 * i) * 1e6,
                      s = Math.floor(r / 1e9);
                    return { sec: i + s, nsec: r - 1e9 * s };
                  })(e)
                )
              : null;
          },
          decode: function (e) {
            let t = (function (e) {
              let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
              switch (e.byteLength) {
                case 4:
                  return { sec: t.getUint32(0), nsec: 0 };
                case 8: {
                  let e = t.getUint32(0);
                  return {
                    sec: (3 & e) * 0x100000000 + t.getUint32(4),
                    nsec: e >>> 2,
                  };
                }
                case 12:
                  return { sec: ep(t, 4), nsec: t.getUint32(0) };
                default:
                  throw new ed(
                    "Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(
                      e.length
                    )
                  );
              }
            })(e);
            return new Date(1e3 * t.sec + t.nsec / 1e6);
          },
        };
        class eg {
          register(e) {
            let { type: t, encode: i, decode: r } = e;
            if (t >= 0) (this.encoders[t] = i), (this.decoders[t] = r);
            else {
              let e = -1 - t;
              (this.builtInEncoders[e] = i), (this.builtInDecoders[e] = r);
            }
          }
          tryToEncode(e, t) {
            for (let i = 0; i < this.builtInEncoders.length; i++) {
              let r = this.builtInEncoders[i];
              if (null != r) {
                let s = r(e, t);
                if (null != s) return new eh(-1 - i, s);
              }
            }
            for (let i = 0; i < this.encoders.length; i++) {
              let r = this.encoders[i];
              if (null != r) {
                let s = r(e, t);
                if (null != s) return new eh(i, s);
              }
            }
            return e instanceof eh ? e : null;
          }
          decode(e, t, i) {
            let r = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
            return r ? r(e, t, i) : new eh(t, e);
          }
          constructor() {
            (this.builtInEncoders = []),
              (this.builtInDecoders = []),
              (this.encoders = []),
              (this.decoders = []),
              this.register(ef);
          }
        }
        eg.defaultCodec = new eg();
        let ey = new TextEncoder();
        function em(e, t, i) {
          let r = t,
            s = r + i,
            n = [],
            o = "";
          for (; r < s; ) {
            let t = e[r++];
            if ((128 & t) == 0) n.push(t);
            else if ((224 & t) == 192) {
              let i = 63 & e[r++];
              n.push(((31 & t) << 6) | i);
            } else if ((240 & t) == 224) {
              let i = 63 & e[r++],
                s = 63 & e[r++];
              n.push(((31 & t) << 12) | (i << 6) | s);
            } else if ((248 & t) == 240) {
              let i = 63 & e[r++],
                s =
                  ((7 & t) << 18) |
                  (i << 12) |
                  ((63 & e[r++]) << 6) |
                  (63 & e[r++]);
              s > 65535 &&
                ((s -= 65536),
                n.push(((s >>> 10) & 1023) | 55296),
                (s = 56320 | (1023 & s))),
                n.push(s);
            } else n.push(t);
            n.length >= 4096 &&
              ((o += String.fromCharCode(...n)), (n.length = 0));
          }
          return n.length > 0 && (o += String.fromCharCode(...n)), o;
        }
        let eb = new TextDecoder();
        function ev(e) {
          return e instanceof Uint8Array
            ? e
            : ArrayBuffer.isView(e)
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e instanceof ArrayBuffer ||
              ("undefined" != typeof SharedArrayBuffer &&
                e instanceof SharedArrayBuffer)
            ? new Uint8Array(e)
            : Uint8Array.from(e);
        }
        let ew = "array",
          eE = "map_key",
          eI = "map_value",
          ex = (e) => {
            if ("string" == typeof e || "number" == typeof e) return e;
            throw new ed(
              "The type of key must be string or number but " + typeof e
            );
          };
        class eP {
          get length() {
            return this.stackHeadPosition + 1;
          }
          top() {
            return this.stack[this.stackHeadPosition];
          }
          pushArrayState(e) {
            let t = this.getUninitializedStateFromPool();
            (t.type = ew), (t.position = 0), (t.size = e), (t.array = Array(e));
          }
          pushMapState(e) {
            let t = this.getUninitializedStateFromPool();
            (t.type = eE), (t.readCount = 0), (t.size = e), (t.map = {});
          }
          getUninitializedStateFromPool() {
            return (
              this.stackHeadPosition++,
              this.stackHeadPosition === this.stack.length &&
                this.stack.push({
                  type: void 0,
                  size: 0,
                  array: void 0,
                  position: 0,
                  readCount: 0,
                  map: void 0,
                  key: null,
                }),
              this.stack[this.stackHeadPosition]
            );
          }
          release(e) {
            if (this.stack[this.stackHeadPosition] !== e)
              throw Error(
                "Invalid stack state. Released state is not on top of the stack."
              );
            e.type === ew &&
              ((e.size = 0),
              (e.array = void 0),
              (e.position = 0),
              (e.type = void 0)),
              (e.type === eE || e.type === eI) &&
                ((e.size = 0),
                (e.map = void 0),
                (e.readCount = 0),
                (e.type = void 0)),
              this.stackHeadPosition--;
          }
          reset() {
            (this.stack.length = 0), (this.stackHeadPosition = -1);
          }
          constructor() {
            (this.stack = []), (this.stackHeadPosition = -1);
          }
        }
        let e_ = new DataView(new ArrayBuffer(0)),
          eS = new Uint8Array(e_.buffer);
        try {
          e_.getInt8(0);
        } catch (e) {
          if (!(e instanceof RangeError))
            throw Error(
              "This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access"
            );
        }
        let eA = RangeError("Insufficient data"),
          eO = new (class {
            canBeCached(e) {
              return e > 0 && e <= this.maxKeyLength;
            }
            find(e, t, i) {
              let r = this.caches[i - 1];
              e: for (let s of r) {
                let r = s.bytes;
                for (let s = 0; s < i; s++) if (r[s] !== e[t + s]) continue e;
                return s.str;
              }
              return null;
            }
            store(e, t) {
              let i = this.caches[e.length - 1],
                r = { bytes: e, str: t };
              i.length >= this.maxLengthPerKey
                ? (i[(Math.random() * i.length) | 0] = r)
                : i.push(r);
            }
            decode(e, t, i) {
              let r = this.find(e, t, i);
              if (null != r) return this.hit++, r;
              this.miss++;
              let s = em(e, t, i),
                n = Uint8Array.prototype.slice.call(e, t, t + i);
              return this.store(n, s), s;
            }
            constructor(e = 16, t = 16) {
              (this.hit = 0),
                (this.miss = 0),
                (this.maxKeyLength = e),
                (this.maxLengthPerKey = t),
                (this.caches = []);
              for (let e = 0; e < this.maxKeyLength; e++) this.caches.push([]);
            }
          })();
        class eC {
          clone() {
            return new eC({
              extensionCodec: this.extensionCodec,
              context: this.context,
              useBigInt64: this.useBigInt64,
              rawStrings: this.rawStrings,
              maxStrLength: this.maxStrLength,
              maxBinLength: this.maxBinLength,
              maxArrayLength: this.maxArrayLength,
              maxMapLength: this.maxMapLength,
              maxExtLength: this.maxExtLength,
              keyDecoder: this.keyDecoder,
            });
          }
          reinitializeState() {
            (this.totalPos = 0), (this.headByte = -1), this.stack.reset();
          }
          setBuffer(e) {
            let t = ev(e);
            (this.bytes = t),
              (this.view = new DataView(t.buffer, t.byteOffset, t.byteLength)),
              (this.pos = 0);
          }
          appendBuffer(e) {
            if (-1 !== this.headByte || this.hasRemaining(1)) {
              let t = this.bytes.subarray(this.pos),
                i = ev(e),
                r = new Uint8Array(t.length + i.length);
              r.set(t), r.set(i, t.length), this.setBuffer(r);
            } else this.setBuffer(e);
          }
          hasRemaining(e) {
            return this.view.byteLength - this.pos >= e;
          }
          createExtraByteError(e) {
            let { view: t, pos: i } = this;
            return RangeError(
              "Extra "
                .concat(t.byteLength - i, " of ")
                .concat(t.byteLength, " byte(s) found at buffer[")
                .concat(e, "]")
            );
          }
          decode(e) {
            if (this.entered) return this.clone().decode(e);
            try {
              (this.entered = !0), this.reinitializeState(), this.setBuffer(e);
              let t = this.doDecodeSync();
              if (this.hasRemaining(1))
                throw this.createExtraByteError(this.pos);
              return t;
            } finally {
              this.entered = !1;
            }
          }
          *decodeMulti(e) {
            if (this.entered) {
              let t = this.clone();
              yield* t.decodeMulti(e);
              return;
            }
            try {
              for (
                this.entered = !0, this.reinitializeState(), this.setBuffer(e);
                this.hasRemaining(1);

              )
                yield this.doDecodeSync();
            } finally {
              this.entered = !1;
            }
          }
          async decodeAsync(e) {
            if (this.entered) return this.clone().decodeAsync(e);
            try {
              let t;
              this.entered = !0;
              let i = !1;
              for await (let r of e) {
                if (i)
                  throw (
                    ((this.entered = !1),
                    this.createExtraByteError(this.totalPos))
                  );
                this.appendBuffer(r);
                try {
                  (t = this.doDecodeSync()), (i = !0);
                } catch (e) {
                  if (!(e instanceof RangeError)) throw e;
                }
                this.totalPos += this.pos;
              }
              if (i) {
                if (this.hasRemaining(1))
                  throw this.createExtraByteError(this.totalPos);
                return t;
              }
              let { headByte: r, pos: s, totalPos: n } = this;
              throw RangeError(
                "Insufficient data in parsing "
                  .concat(el(r), " at ")
                  .concat(n, " (")
                  .concat(s, " in the current buffer)")
              );
            } finally {
              this.entered = !1;
            }
          }
          decodeArrayStream(e) {
            return this.decodeMultiAsync(e, !0);
          }
          decodeStream(e) {
            return this.decodeMultiAsync(e, !1);
          }
          async *decodeMultiAsync(e, t) {
            if (this.entered) {
              let i = this.clone();
              yield* i.decodeMultiAsync(e, t);
              return;
            }
            try {
              this.entered = !0;
              let i = t,
                r = -1;
              for await (let s of e) {
                if (t && 0 === r)
                  throw this.createExtraByteError(this.totalPos);
                this.appendBuffer(s),
                  i && ((r = this.readArraySize()), (i = !1), this.complete());
                try {
                  for (; yield this.doDecodeSync(), 0 != --r; );
                } catch (e) {
                  if (!(e instanceof RangeError)) throw e;
                }
                this.totalPos += this.pos;
              }
            } finally {
              this.entered = !1;
            }
          }
          doDecodeSync() {
            t: for (;;) {
              let e,
                t = this.readHeadByte();
              if (t >= 224) e = t - 256;
              else if (t < 192)
                if (t < 128) e = t;
                else if (t < 144) {
                  let i = t - 128;
                  if (0 !== i) {
                    this.pushMapState(i), this.complete();
                    continue;
                  }
                  e = {};
                } else if (t < 160) {
                  let i = t - 144;
                  if (0 !== i) {
                    this.pushArrayState(i), this.complete();
                    continue;
                  }
                  e = [];
                } else {
                  let i = t - 160;
                  e = this.decodeString(i, 0);
                }
              else if (192 === t) e = null;
              else if (194 === t) e = !1;
              else if (195 === t) e = !0;
              else if (202 === t) e = this.readF32();
              else if (203 === t) e = this.readF64();
              else if (204 === t) e = this.readU8();
              else if (205 === t) e = this.readU16();
              else if (206 === t) e = this.readU32();
              else if (207 === t)
                e = this.useBigInt64 ? this.readU64AsBigInt() : this.readU64();
              else if (208 === t) e = this.readI8();
              else if (209 === t) e = this.readI16();
              else if (210 === t) e = this.readI32();
              else if (211 === t)
                e = this.useBigInt64 ? this.readI64AsBigInt() : this.readI64();
              else if (217 === t) {
                let t = this.lookU8();
                e = this.decodeString(t, 1);
              } else if (218 === t) {
                let t = this.lookU16();
                e = this.decodeString(t, 2);
              } else if (219 === t) {
                let t = this.lookU32();
                e = this.decodeString(t, 4);
              } else if (220 === t) {
                let t = this.readU16();
                if (0 !== t) {
                  this.pushArrayState(t), this.complete();
                  continue;
                }
                e = [];
              } else if (221 === t) {
                let t = this.readU32();
                if (0 !== t) {
                  this.pushArrayState(t), this.complete();
                  continue;
                }
                e = [];
              } else if (222 === t) {
                let t = this.readU16();
                if (0 !== t) {
                  this.pushMapState(t), this.complete();
                  continue;
                }
                e = {};
              } else if (223 === t) {
                let t = this.readU32();
                if (0 !== t) {
                  this.pushMapState(t), this.complete();
                  continue;
                }
                e = {};
              } else if (196 === t) {
                let t = this.lookU8();
                e = this.decodeBinary(t, 1);
              } else if (197 === t) {
                let t = this.lookU16();
                e = this.decodeBinary(t, 2);
              } else if (198 === t) {
                let t = this.lookU32();
                e = this.decodeBinary(t, 4);
              } else if (212 === t) e = this.decodeExtension(1, 0);
              else if (213 === t) e = this.decodeExtension(2, 0);
              else if (214 === t) e = this.decodeExtension(4, 0);
              else if (215 === t) e = this.decodeExtension(8, 0);
              else if (216 === t) e = this.decodeExtension(16, 0);
              else if (199 === t) {
                let t = this.lookU8();
                e = this.decodeExtension(t, 1);
              } else if (200 === t) {
                let t = this.lookU16();
                e = this.decodeExtension(t, 2);
              } else if (201 === t) {
                let t = this.lookU32();
                e = this.decodeExtension(t, 4);
              } else throw new ed("Unrecognized type byte: ".concat(el(t)));
              this.complete();
              let i = this.stack;
              for (; i.length > 0; ) {
                let t = i.top();
                if (t.type === ew)
                  if (
                    ((t.array[t.position] = e),
                    t.position++,
                    t.position === t.size)
                  )
                    (e = t.array), i.release(t);
                  else continue t;
                else if (t.type === eE) {
                  if ("__proto__" === e)
                    throw new ed("The key __proto__ is not allowed");
                  (t.key = this.mapKeyConverter(e)), (t.type = eI);
                  continue t;
                } else if (
                  ((t.map[t.key] = e), t.readCount++, t.readCount === t.size)
                )
                  (e = t.map), i.release(t);
                else {
                  (t.key = null), (t.type = eE);
                  continue t;
                }
              }
              return e;
            }
          }
          readHeadByte() {
            return (
              -1 === this.headByte && (this.headByte = this.readU8()),
              this.headByte
            );
          }
          complete() {
            this.headByte = -1;
          }
          readArraySize() {
            let e = this.readHeadByte();
            switch (e) {
              case 220:
                return this.readU16();
              case 221:
                return this.readU32();
              default:
                if (e < 160) return e - 144;
                throw new ed("Unrecognized array type byte: ".concat(el(e)));
            }
          }
          pushMapState(e) {
            if (e > this.maxMapLength)
              throw new ed(
                "Max length exceeded: map length ("
                  .concat(e, ") > maxMapLengthLength (")
                  .concat(this.maxMapLength, ")")
              );
            this.stack.pushMapState(e);
          }
          pushArrayState(e) {
            if (e > this.maxArrayLength)
              throw new ed(
                "Max length exceeded: array length ("
                  .concat(e, ") > maxArrayLength (")
                  .concat(this.maxArrayLength, ")")
              );
            this.stack.pushArrayState(e);
          }
          decodeString(e, t) {
            return !this.rawStrings || this.stateIsMapKey()
              ? this.decodeUtf8String(e, t)
              : this.decodeBinary(e, t);
          }
          decodeUtf8String(e, t) {
            var i;
            let r;
            if (e > this.maxStrLength)
              throw new ed(
                "Max length exceeded: UTF-8 byte length ("
                  .concat(e, ") > maxStrLength (")
                  .concat(this.maxStrLength, ")")
              );
            if (this.bytes.byteLength < this.pos + t + e) throw eA;
            let s = this.pos + t;
            return (
              (r =
                this.stateIsMapKey() &&
                (null == (i = this.keyDecoder) ? void 0 : i.canBeCached(e))
                  ? this.keyDecoder.decode(this.bytes, s, e)
                  : (function (e, t, i) {
                      if (!(i > 200)) return em(e, t, i);
                      let r = e.subarray(t, t + i);
                      return eb.decode(r);
                    })(this.bytes, s, e)),
              (this.pos += t + e),
              r
            );
          }
          stateIsMapKey() {
            return this.stack.length > 0 && this.stack.top().type === eE;
          }
          decodeBinary(e, t) {
            if (e > this.maxBinLength)
              throw new ed(
                "Max length exceeded: bin length ("
                  .concat(e, ") > maxBinLength (")
                  .concat(this.maxBinLength, ")")
              );
            if (!this.hasRemaining(e + t)) throw eA;
            let i = this.pos + t,
              r = this.bytes.subarray(i, i + e);
            return (this.pos += t + e), r;
          }
          decodeExtension(e, t) {
            if (e > this.maxExtLength)
              throw new ed(
                "Max length exceeded: ext length ("
                  .concat(e, ") > maxExtLength (")
                  .concat(this.maxExtLength, ")")
              );
            let i = this.view.getInt8(this.pos + t),
              r = this.decodeBinary(e, t + 1);
            return this.extensionCodec.decode(r, i, this.context);
          }
          lookU8() {
            return this.view.getUint8(this.pos);
          }
          lookU16() {
            return this.view.getUint16(this.pos);
          }
          lookU32() {
            return this.view.getUint32(this.pos);
          }
          readU8() {
            let e = this.view.getUint8(this.pos);
            return this.pos++, e;
          }
          readI8() {
            let e = this.view.getInt8(this.pos);
            return this.pos++, e;
          }
          readU16() {
            let e = this.view.getUint16(this.pos);
            return (this.pos += 2), e;
          }
          readI16() {
            let e = this.view.getInt16(this.pos);
            return (this.pos += 2), e;
          }
          readU32() {
            let e = this.view.getUint32(this.pos);
            return (this.pos += 4), e;
          }
          readI32() {
            let e = this.view.getInt32(this.pos);
            return (this.pos += 4), e;
          }
          readU64() {
            var e, t;
            let i =
              ((e = this.view),
              (t = this.pos),
              0x100000000 * e.getUint32(t) + e.getUint32(t + 4));
            return (this.pos += 8), i;
          }
          readI64() {
            let e = ep(this.view, this.pos);
            return (this.pos += 8), e;
          }
          readU64AsBigInt() {
            let e = this.view.getBigUint64(this.pos);
            return (this.pos += 8), e;
          }
          readI64AsBigInt() {
            let e = this.view.getBigInt64(this.pos);
            return (this.pos += 8), e;
          }
          readF32() {
            let e = this.view.getFloat32(this.pos);
            return (this.pos += 4), e;
          }
          readF64() {
            let e = this.view.getFloat64(this.pos);
            return (this.pos += 8), e;
          }
          constructor(e) {
            var t, i, r, s, n, o, a, c, l;
            (this.totalPos = 0),
              (this.pos = 0),
              (this.view = e_),
              (this.bytes = eS),
              (this.headByte = -1),
              (this.stack = new eP()),
              (this.entered = !1),
              (this.extensionCodec =
                null != (t = null == e ? void 0 : e.extensionCodec)
                  ? t
                  : eg.defaultCodec),
              (this.context = null == e ? void 0 : e.context),
              (this.useBigInt64 =
                null != (i = null == e ? void 0 : e.useBigInt64) && i),
              (this.rawStrings =
                null != (r = null == e ? void 0 : e.rawStrings) && r),
              (this.maxStrLength =
                null != (s = null == e ? void 0 : e.maxStrLength)
                  ? s
                  : 0xffffffff),
              (this.maxBinLength =
                null != (n = null == e ? void 0 : e.maxBinLength)
                  ? n
                  : 0xffffffff),
              (this.maxArrayLength =
                null != (o = null == e ? void 0 : e.maxArrayLength)
                  ? o
                  : 0xffffffff),
              (this.maxMapLength =
                null != (a = null == e ? void 0 : e.maxMapLength)
                  ? a
                  : 0xffffffff),
              (this.maxExtLength =
                null != (c = null == e ? void 0 : e.maxExtLength)
                  ? c
                  : 0xffffffff),
              (this.keyDecoder =
                (null == e ? void 0 : e.keyDecoder) !== void 0
                  ? e.keyDecoder
                  : eO),
              (this.mapKeyConverter =
                null != (l = null == e ? void 0 : e.mapKeyConverter) ? l : ex);
          }
        }
        class eR {
          clone() {
            return new eR({
              extensionCodec: this.extensionCodec,
              context: this.context,
              useBigInt64: this.useBigInt64,
              maxDepth: this.maxDepth,
              initialBufferSize: this.initialBufferSize,
              sortKeys: this.sortKeys,
              forceFloat32: this.forceFloat32,
              ignoreUndefined: this.ignoreUndefined,
              forceIntegerToFloat: this.forceIntegerToFloat,
            });
          }
          reinitializeState() {
            this.pos = 0;
          }
          encodeSharedRef(e) {
            if (this.entered) return this.clone().encodeSharedRef(e);
            try {
              return (
                (this.entered = !0),
                this.reinitializeState(),
                this.doEncode(e, 1),
                this.bytes.subarray(0, this.pos)
              );
            } finally {
              this.entered = !1;
            }
          }
          encode(e) {
            if (this.entered) return this.clone().encode(e);
            try {
              return (
                (this.entered = !0),
                this.reinitializeState(),
                this.doEncode(e, 1),
                this.bytes.slice(0, this.pos)
              );
            } finally {
              this.entered = !1;
            }
          }
          doEncode(e, t) {
            if (t > this.maxDepth)
              throw Error("Too deep objects in depth ".concat(t));
            null == e
              ? this.encodeNil()
              : "boolean" == typeof e
              ? this.encodeBoolean(e)
              : "number" == typeof e
              ? this.forceIntegerToFloat
                ? this.encodeNumberAsFloat(e)
                : this.encodeNumber(e)
              : "string" == typeof e
              ? this.encodeString(e)
              : this.useBigInt64 && "bigint" == typeof e
              ? this.encodeBigInt64(e)
              : this.encodeObject(e, t);
          }
          ensureBufferSizeToWrite(e) {
            let t = this.pos + e;
            this.view.byteLength < t && this.resizeBuffer(2 * t);
          }
          resizeBuffer(e) {
            let t = new ArrayBuffer(e),
              i = new Uint8Array(t),
              r = new DataView(t);
            i.set(this.bytes), (this.view = r), (this.bytes = i);
          }
          encodeNil() {
            this.writeU8(192);
          }
          encodeBoolean(e) {
            !1 === e ? this.writeU8(194) : this.writeU8(195);
          }
          encodeNumber(e) {
            !this.forceIntegerToFloat && Number.isSafeInteger(e)
              ? e >= 0
                ? e < 128
                  ? this.writeU8(e)
                  : e < 256
                  ? (this.writeU8(204), this.writeU8(e))
                  : e < 65536
                  ? (this.writeU8(205), this.writeU16(e))
                  : e < 0x100000000
                  ? (this.writeU8(206), this.writeU32(e))
                  : this.useBigInt64
                  ? this.encodeNumberAsFloat(e)
                  : (this.writeU8(207), this.writeU64(e))
                : e >= -32
                ? this.writeU8(224 | (e + 32))
                : e >= -128
                ? (this.writeU8(208), this.writeI8(e))
                : e >= -32768
                ? (this.writeU8(209), this.writeI16(e))
                : e >= -0x80000000
                ? (this.writeU8(210), this.writeI32(e))
                : this.useBigInt64
                ? this.encodeNumberAsFloat(e)
                : (this.writeU8(211), this.writeI64(e))
              : this.encodeNumberAsFloat(e);
          }
          encodeNumberAsFloat(e) {
            this.forceFloat32
              ? (this.writeU8(202), this.writeF32(e))
              : (this.writeU8(203), this.writeF64(e));
          }
          encodeBigInt64(e) {
            e >= BigInt(0)
              ? (this.writeU8(207), this.writeBigUint64(e))
              : (this.writeU8(211), this.writeBigInt64(e));
          }
          writeStringHeader(e) {
            if (e < 32) this.writeU8(160 + e);
            else if (e < 256) this.writeU8(217), this.writeU8(e);
            else if (e < 65536) this.writeU8(218), this.writeU16(e);
            else if (e < 0x100000000) this.writeU8(219), this.writeU32(e);
            else throw Error("Too long string: ".concat(e, " bytes in UTF-8"));
          }
          encodeString(e) {
            let t = (function (e) {
              let t = e.length,
                i = 0,
                r = 0;
              for (; r < t; ) {
                let s = e.charCodeAt(r++);
                if ((0xffffff80 & s) == 0) {
                  i++;
                  continue;
                }
                if ((0xfffff800 & s) == 0) i += 2;
                else {
                  if (s >= 55296 && s <= 56319 && r < t) {
                    let t = e.charCodeAt(r);
                    (64512 & t) == 56320 &&
                      (++r, (s = ((1023 & s) << 10) + (1023 & t) + 65536));
                  }
                  (0xffff0000 & s) == 0 ? (i += 3) : (i += 4);
                }
              }
              return i;
            })(e);
            this.ensureBufferSizeToWrite(5 + t),
              this.writeStringHeader(t),
              (function (e, t, i) {
                if (e.length > 50) ey.encodeInto(e, t.subarray(i));
                else
                  !(function (e, t, i) {
                    let r = e.length,
                      s = i,
                      n = 0;
                    for (; n < r; ) {
                      let i = e.charCodeAt(n++);
                      if ((0xffffff80 & i) == 0) {
                        t[s++] = i;
                        continue;
                      }
                      if ((0xfffff800 & i) == 0) t[s++] = ((i >> 6) & 31) | 192;
                      else {
                        if (i >= 55296 && i <= 56319 && n < r) {
                          let t = e.charCodeAt(n);
                          (64512 & t) == 56320 &&
                            (++n,
                            (i = ((1023 & i) << 10) + (1023 & t) + 65536));
                        }
                        (0xffff0000 & i) == 0
                          ? (t[s++] = ((i >> 12) & 15) | 224)
                          : ((t[s++] = ((i >> 18) & 7) | 240),
                            (t[s++] = ((i >> 12) & 63) | 128)),
                          (t[s++] = ((i >> 6) & 63) | 128);
                      }
                      t[s++] = (63 & i) | 128;
                    }
                  })(e, t, i);
              })(e, this.bytes, this.pos),
              (this.pos += t);
          }
          encodeObject(e, t) {
            let i = this.extensionCodec.tryToEncode(e, this.context);
            if (null != i) this.encodeExtension(i);
            else if (Array.isArray(e)) this.encodeArray(e, t);
            else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
            else if ("object" == typeof e) this.encodeMap(e, t);
            else
              throw Error(
                "Unrecognized object: ".concat(
                  Object.prototype.toString.apply(e)
                )
              );
          }
          encodeBinary(e) {
            let t = e.byteLength;
            if (t < 256) this.writeU8(196), this.writeU8(t);
            else if (t < 65536) this.writeU8(197), this.writeU16(t);
            else if (t < 0x100000000) this.writeU8(198), this.writeU32(t);
            else throw Error("Too large binary: ".concat(t));
            let i = ev(e);
            this.writeU8a(i);
          }
          encodeArray(e, t) {
            let i = e.length;
            if (i < 16) this.writeU8(144 + i);
            else if (i < 65536) this.writeU8(220), this.writeU16(i);
            else if (i < 0x100000000) this.writeU8(221), this.writeU32(i);
            else throw Error("Too large array: ".concat(i));
            for (let i of e) this.doEncode(i, t + 1);
          }
          countWithoutUndefined(e, t) {
            let i = 0;
            for (let r of t) void 0 !== e[r] && i++;
            return i;
          }
          encodeMap(e, t) {
            let i = Object.keys(e);
            this.sortKeys && i.sort();
            let r = this.ignoreUndefined
              ? this.countWithoutUndefined(e, i)
              : i.length;
            if (r < 16) this.writeU8(128 + r);
            else if (r < 65536) this.writeU8(222), this.writeU16(r);
            else if (r < 0x100000000) this.writeU8(223), this.writeU32(r);
            else throw Error("Too large map object: ".concat(r));
            for (let r of i) {
              let i = e[r];
              (this.ignoreUndefined && void 0 === i) ||
                (this.encodeString(r), this.doEncode(i, t + 1));
            }
          }
          encodeExtension(e) {
            if ("function" == typeof e.data) {
              let t = e.data(this.pos + 6),
                i = t.length;
              if (i >= 0x100000000)
                throw Error("Too large extension object: ".concat(i));
              this.writeU8(201),
                this.writeU32(i),
                this.writeI8(e.type),
                this.writeU8a(t);
              return;
            }
            let t = e.data.length;
            if (1 === t) this.writeU8(212);
            else if (2 === t) this.writeU8(213);
            else if (4 === t) this.writeU8(214);
            else if (8 === t) this.writeU8(215);
            else if (16 === t) this.writeU8(216);
            else if (t < 256) this.writeU8(199), this.writeU8(t);
            else if (t < 65536) this.writeU8(200), this.writeU16(t);
            else if (t < 0x100000000) this.writeU8(201), this.writeU32(t);
            else throw Error("Too large extension object: ".concat(t));
            this.writeI8(e.type), this.writeU8a(e.data);
          }
          writeU8(e) {
            this.ensureBufferSizeToWrite(1),
              this.view.setUint8(this.pos, e),
              this.pos++;
          }
          writeU8a(e) {
            let t = e.length;
            this.ensureBufferSizeToWrite(t),
              this.bytes.set(e, this.pos),
              (this.pos += t);
          }
          writeI8(e) {
            this.ensureBufferSizeToWrite(1),
              this.view.setInt8(this.pos, e),
              this.pos++;
          }
          writeU16(e) {
            this.ensureBufferSizeToWrite(2),
              this.view.setUint16(this.pos, e),
              (this.pos += 2);
          }
          writeI16(e) {
            this.ensureBufferSizeToWrite(2),
              this.view.setInt16(this.pos, e),
              (this.pos += 2);
          }
          writeU32(e) {
            this.ensureBufferSizeToWrite(4),
              this.view.setUint32(this.pos, e),
              (this.pos += 4);
          }
          writeI32(e) {
            this.ensureBufferSizeToWrite(4),
              this.view.setInt32(this.pos, e),
              (this.pos += 4);
          }
          writeF32(e) {
            this.ensureBufferSizeToWrite(4),
              this.view.setFloat32(this.pos, e),
              (this.pos += 4);
          }
          writeF64(e) {
            this.ensureBufferSizeToWrite(8),
              this.view.setFloat64(this.pos, e),
              (this.pos += 8);
          }
          writeU64(e) {
            var t, i;
            this.ensureBufferSizeToWrite(8),
              (t = this.view),
              (i = this.pos),
              t.setUint32(i, e / 0x100000000),
              t.setUint32(i + 4, e),
              (this.pos += 8);
          }
          writeI64(e) {
            this.ensureBufferSizeToWrite(8),
              eu(this.view, this.pos, e),
              (this.pos += 8);
          }
          writeBigUint64(e) {
            this.ensureBufferSizeToWrite(8),
              this.view.setBigUint64(this.pos, e),
              (this.pos += 8);
          }
          writeBigInt64(e) {
            this.ensureBufferSizeToWrite(8),
              this.view.setBigInt64(this.pos, e),
              (this.pos += 8);
          }
          constructor(e) {
            var t, i, r, s, n, o, a, c;
            (this.entered = !1),
              (this.extensionCodec =
                null != (t = null == e ? void 0 : e.extensionCodec)
                  ? t
                  : eg.defaultCodec),
              (this.context = null == e ? void 0 : e.context),
              (this.useBigInt64 =
                null != (i = null == e ? void 0 : e.useBigInt64) && i),
              (this.maxDepth =
                null != (r = null == e ? void 0 : e.maxDepth) ? r : 100),
              (this.initialBufferSize =
                null != (s = null == e ? void 0 : e.initialBufferSize)
                  ? s
                  : 2048),
              (this.sortKeys =
                null != (n = null == e ? void 0 : e.sortKeys) && n),
              (this.forceFloat32 =
                null != (o = null == e ? void 0 : e.forceFloat32) && o),
              (this.ignoreUndefined =
                null != (a = null == e ? void 0 : e.ignoreUndefined) && a),
              (this.forceIntegerToFloat =
                null != (c = null == e ? void 0 : e.forceIntegerToFloat) && c),
              (this.pos = 0),
              (this.view = new DataView(
                new ArrayBuffer(this.initialBufferSize)
              )),
              (this.bytes = new Uint8Array(this.view.buffer));
          }
        }
        function eT(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function eN(e, t) {
          return (
            !!Array.isArray(t) &&
            (0 === t.length ||
              (e
                ? t.every((e) => "string" == typeof e)
                : t.every((e) => Number.isSafeInteger(e))))
          );
        }
        function eU(e, t) {
          if ("string" != typeof t)
            throw Error("".concat(e, ": string expected"));
          return !0;
        }
        function ek(e) {
          if (!Number.isSafeInteger(e))
            throw Error("invalid integer: ".concat(e));
        }
        function eD(e) {
          if (!Array.isArray(e)) throw Error("array expected");
        }
        function eq(e, t) {
          if (!eN(!0, t))
            throw Error("".concat(e, ": array of strings expected"));
        }
        function eB(e, t) {
          if (!eN(!1, t))
            throw Error("".concat(e, ": array of numbers expected"));
        }
        function ej() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          let r = (e) => e,
            s = (e, t) => (i) => e(t(i));
          return {
            encode: t.map((e) => e.encode).reduceRight(s, r),
            decode: t.map((e) => e.decode).reduce(s, r),
          };
        }
        function eL(e) {
          let t = "string" == typeof e ? e.split("") : e,
            i = t.length;
          eq("alphabet", t);
          let r = new Map(t.map((e, t) => [e, t]));
          return {
            encode: (r) => (
              eD(r),
              r.map((r) => {
                if (!Number.isSafeInteger(r) || r < 0 || r >= i)
                  throw Error(
                    'alphabet.encode: digit index outside alphabet "'
                      .concat(r, '". Allowed: ')
                      .concat(e)
                  );
                return t[r];
              })
            ),
            decode: (t) => (
              eD(t),
              t.map((t) => {
                eU("alphabet.decode", t);
                let i = r.get(t);
                if (void 0 === i)
                  throw Error(
                    'Unknown letter: "'.concat(t, '". Allowed: ').concat(e)
                  );
                return i;
              })
            ),
          };
        }
        function eM() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return (
            eU("join", e),
            {
              encode: (t) => (eq("join.decode", t), t.join(e)),
              decode: (t) => (eU("join.decode", t), t.split(e)),
            }
          );
        }
        function ez(e, t, i) {
          if (t < 2)
            throw Error(
              "convertRadix: invalid from=".concat(
                t,
                ", base cannot be less than 2"
              )
            );
          if (i < 2)
            throw Error(
              "convertRadix: invalid to=".concat(
                i,
                ", base cannot be less than 2"
              )
            );
          if ((eD(e), !e.length)) return [];
          let r = 0,
            s = [],
            n = Array.from(e, (e) => {
              if ((ek(e), e < 0 || e >= t))
                throw Error("invalid integer: ".concat(e));
              return e;
            }),
            o = n.length;
          for (;;) {
            let e = 0,
              a = !0;
            for (let s = r; s < o; s++) {
              let o = n[s],
                c = t * e,
                l = c + o;
              if (!Number.isSafeInteger(l) || c / t !== e || l - o !== c)
                throw Error("convertRadix: carry overflow");
              let h = l / i;
              e = l % i;
              let d = Math.floor(h);
              if (((n[s] = d), !Number.isSafeInteger(d) || d * i + e !== l))
                throw Error("convertRadix: carry overflow");
              a && (d ? (a = !1) : (r = s));
            }
            if ((s.push(e), a)) break;
          }
          for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) s.push(0);
          return s.reverse();
        }
        let eH = (e, t) => (0 === t ? e : eH(t, e % t)),
          eF = (e, t) => e + (t - eH(e, t)),
          eV = (() => {
            let e = [];
            for (let t = 0; t < 40; t++) e.push(2 ** t);
            return e;
          })();
        function eK(e, t, i, r) {
          if ((eD(e), t <= 0 || t > 32))
            throw Error("convertRadix2: wrong from=".concat(t));
          if (i <= 0 || i > 32)
            throw Error("convertRadix2: wrong to=".concat(i));
          if (eF(t, i) > 32)
            throw Error(
              "convertRadix2: carry overflow from="
                .concat(t, " to=")
                .concat(i, " carryBits=")
                .concat(eF(t, i))
            );
          let s = 0,
            n = 0,
            o = eV[t],
            a = eV[i] - 1,
            c = [];
          for (let r of e) {
            if ((ek(r), r >= o))
              throw Error(
                "convertRadix2: invalid data word="
                  .concat(r, " from=")
                  .concat(t)
              );
            if (((s = (s << t) | r), n + t > 32))
              throw Error(
                "convertRadix2: carry overflow pos="
                  .concat(n, " from=")
                  .concat(t)
              );
            for (n += t; n >= i; n -= i) c.push(((s >> (n - i)) & a) >>> 0);
            let e = eV[n];
            if (void 0 === e) throw Error("invalid carry");
            s &= e - 1;
          }
          if (((s = (s << (i - n)) & a), !r && n >= t))
            throw Error("Excess padding");
          if (!r && s > 0) throw Error("Non-zero padding: ".concat(s));
          return r && n > 0 && c.push(s >>> 0), c;
        }
        let eW = ej(
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if ((ek(e), e <= 0 || e > 32))
                throw Error("radix2: bits should be in (0..32]");
              if (eF(8, e) > 32 || eF(e, 8) > 32)
                throw Error("radix2: carry overflow");
              return {
                encode: (i) => {
                  if (!eT(i))
                    throw Error("radix2.encode input should be Uint8Array");
                  return eK(Array.from(i), 8, e, !t);
                },
                decode: (i) => (
                  eB("radix2.decode", i), Uint8Array.from(eK(i, e, 8, t))
                ),
              };
            })(5),
            eL("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "=";
              return (
                ek(e),
                eU("padding", t),
                {
                  encode(i) {
                    for (eq("padding.encode", i); (i.length * e) % 8; )
                      i.push(t);
                    return i;
                  },
                  decode(i) {
                    eq("padding.decode", i);
                    let r = i.length;
                    if ((r * e) % 8)
                      throw Error(
                        "padding: invalid, string should have whole number of bytes"
                      );
                    for (; r > 0 && i[r - 1] === t; r--)
                      if (((r - 1) * e) % 8 == 0)
                        throw Error(
                          "padding: invalid, string has too much padding"
                        );
                    return i.slice(0, r);
                  },
                }
              );
            })(5),
            eM("")
          ),
          eG =
            "function" == typeof Uint8Array.from([]).toBase64 &&
            "function" == typeof Uint8Array.fromBase64;
        (t = 58), ek(58);
        "function" == typeof Uint8Array.from([]).toHex && Uint8Array.fromHex;
        function eJ(e) {
          return null != globalThis.Buffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e;
        }
        function eY() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return null != globalThis.Buffer &&
            null != globalThis.Buffer.allocUnsafe
            ? eJ(globalThis.Buffer.allocUnsafe(e))
            : new Uint8Array(e);
        }
        function eX(e, t) {
          t || (t = e.reduce((e, t) => e + t.length, 0));
          let i = eY(t),
            r = 0;
          for (let t of e) i.set(t, r), (r += t.length);
          return eJ(i);
        }
        e.i(171258);
        var eZ = e.i(349253);
        function eQ(e, t, i, r) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: i },
            decoder: { decode: r },
          };
        }
        let e$ = eQ(
            "utf8",
            "u",
            (e) => "u" + new TextDecoder("utf8").decode(e),
            (e) => new TextEncoder().encode(e.substring(1))
          ),
          e0 = eQ(
            "ascii",
            "a",
            (e) => {
              let t = "a";
              for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
              return t;
            },
            (e) => {
              let t = eY((e = e.substring(1)).length);
              for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
              return t;
            }
          ),
          e1 = {
            utf8: e$,
            "utf-8": e$,
            hex: eZ.bases.base16,
            latin1: e0,
            ascii: e0,
            binary: e0,
            ...eZ.bases,
          };
        function e2(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8",
            i = e1[t];
          if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? eJ(globalThis.Buffer.from(e, "utf-8"))
            : i.decoder.decode("".concat(i.prefix).concat(e));
        }
        function e6(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8",
            i = e1[t];
          if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? globalThis.Buffer.from(
                e.buffer,
                e.byteOffset,
                e.byteLength
              ).toString("utf8")
            : i.encoder.encode(e).substring(1);
        }
        var e8 = e.i(420650),
          e3 = e.i(7781);
        function e5(e) {
          let [t, i] = e.split(":");
          return { namespace: t, reference: i };
        }
        function e4(e, t) {
          return e.includes(":") ? [e] : t.chains || [];
        }
        var e9 = Object.defineProperty,
          e7 = Object.defineProperties,
          te = Object.getOwnPropertyDescriptors,
          tt = Object.getOwnPropertySymbols,
          ti = Object.prototype.hasOwnProperty,
          tr = Object.prototype.propertyIsEnumerable,
          ts = (e, t, i) =>
            t in e
              ? e9(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          tn = (e, t) => {
            for (var i in t || (t = {})) ti.call(t, i) && ts(e, i, t[i]);
            if (tt) for (var i of tt(t)) tr.call(t, i) && ts(e, i, t[i]);
            return e;
          };
        let to = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        };
        function ta() {
          return (
            "u" > typeof r.default &&
            "u" > typeof r.default.versions &&
            "u" > typeof r.default.versions.node
          );
        }
        function tc() {
          return (
            !(0, N.getDocument)() &&
            !!(0, N.getNavigator)() &&
            "ReactNative" === navigator.product
          );
        }
        function tl() {
          return !ta() && !!(0, N.getNavigator)() && !!(0, N.getDocument)();
        }
        function th() {
          return tc()
            ? to.reactNative
            : ta()
            ? to.node
            : tl()
            ? to.browser
            : to.unknown;
        }
        function td() {
          var e;
          try {
            return tc() &&
              "u" >
                typeof (null == globalThis ? void 0 : globalThis.Application)
              ? null == (e = globalThis.Application)
                ? void 0
                : e.applicationId
              : void 0;
          } catch (e) {
            return;
          }
        }
        function tu() {
          return (
            (0, U.getWindowMetadata)() || {
              name: "",
              description: "",
              url: "",
              icons: [""],
            }
          );
        }
        function tp(e, t, i) {
          let r = (function () {
              if (
                th() === to.reactNative &&
                "u" > typeof (null == globalThis ? void 0 : globalThis.Platform)
              ) {
                let { OS: e, Version: t } = globalThis.Platform;
                return [e, t].join("-");
              }
              let e = (0, T.detect)();
              if (null === e) return "unknown";
              let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
              return "browser" === e.type
                ? [t, e.name, e.version].join("-")
                : [t, e.version].join("-");
            })(),
            s = (function () {
              var e;
              let t = th();
              return t === to.browser
                ? [
                    t,
                    (null == (e = (0, N.getLocation)()) ? void 0 : e.host) ||
                      "unknown",
                  ].join(":")
                : t;
            })();
          return [[e, t].join("-"), ["js", i].join("-"), r, s].join("/");
        }
        function tf(e, t) {
          return e.filter((e) => t.includes(e)).length === e.length;
        }
        function tg(e) {
          return Object.fromEntries(e.entries());
        }
        function ty(e) {
          return new Map(Object.entries(e));
        }
        function tm() {
          let e,
            t,
            i,
            r,
            s =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : O.FIVE_MINUTES,
            n = arguments.length > 1 ? arguments[1] : void 0,
            o = (0, O.toMiliseconds)(s || O.FIVE_MINUTES);
          return {
            resolve: (t) => {
              i && e && (clearTimeout(i), e(t), (r = Promise.resolve(t)));
            },
            reject: (e) => {
              i && t && (clearTimeout(i), t(e));
            },
            done: () =>
              new Promise((s, a) => {
                if (r) return s(r);
                (i = setTimeout(() => {
                  let e = Error(n);
                  (r = Promise.reject(e)), a(e);
                }, o)),
                  (e = s),
                  (t = a);
              }),
          };
        }
        function tb(e, t, i) {
          return new Promise(async (r, s) => {
            let n = setTimeout(() => s(Error(i)), t);
            try {
              let t = await e;
              r(t);
            } catch (e) {
              s(e);
            }
            clearTimeout(n);
          });
        }
        function tv(e, t) {
          if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
          if ("topic" === e.toLowerCase()) {
            if ("string" != typeof t)
              throw Error(
                'Value must be "string" for expirer target type: topic'
              );
            return "topic:".concat(t);
          }
          if ("id" === e.toLowerCase()) {
            if ("number" != typeof t)
              throw Error('Value must be "number" for expirer target type: id');
            return "id:".concat(t);
          }
          throw Error("Unknown expirer target type: ".concat(e));
        }
        function tw(e) {
          let [t, i] = e.split(":"),
            r = { id: void 0, topic: void 0 };
          if ("topic" === t && "string" == typeof i) r.topic = i;
          else if ("id" === t && Number.isInteger(Number(i))) r.id = Number(i);
          else
            throw Error(
              "Invalid target, expected id:number or topic:string, got "
                .concat(t, ":")
                .concat(i)
            );
          return r;
        }
        function tE(e, t) {
          return (0, O.fromMiliseconds)(
            (t || Date.now()) + (0, O.toMiliseconds)(e)
          );
        }
        function tI(e) {
          return Date.now() >= (0, O.toMiliseconds)(e);
        }
        function tx(e, t) {
          return "".concat(e).concat(t ? ":".concat(t) : "");
        }
        function tP() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          return [...new Set([...e, ...t])];
        }
        async function t_(e) {
          var t, r;
          let { id: s, topic: n, wcDeepLink: o } = e;
          try {
            if (!o) return;
            let e = "string" == typeof o ? JSON.parse(o) : o,
              a = null == e ? void 0 : e.href;
            if ("string" != typeof a) return;
            let c = (function (e, t, r) {
                let s = "requestId=".concat(t, "&sessionTopic=").concat(r);
                e.endsWith("/") && (e = e.slice(0, -1));
                let n = "".concat(e);
                if (e.startsWith("https://t.me")) {
                  let t = e.includes("?") ? "&startapp=" : "?startapp=";
                  n = ""
                    .concat(n)
                    .concat(t)
                    .concat(
                      (function (e) {
                        let t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          r = i.Buffer.from(e).toString("base64");
                        return t ? r.replace(/[=]/g, "") : r;
                      })(s, !0)
                    );
                } else n = "".concat(n, "/wc?").concat(s);
                return n;
              })(a, s, n),
              l = th();
            if (l === to.browser) {
              let e;
              if (!(null != (t = (0, N.getDocument)()) && t.hasFocus()))
                return void console.warn(
                  "Document does not have focus, skipping deeplink."
                );
              (r = c),
                (e = "_self"),
                !(function () {
                  try {
                    return window.self !== window.top;
                  } catch (e) {
                    return !1;
                  }
                })()
                  ? (("u" > typeof window &&
                      (window.TelegramWebviewProxy ||
                        window.Telegram ||
                        window.TelegramWebviewProxyProto)) ||
                      r.startsWith("https://") ||
                      r.startsWith("http://")) &&
                    (e = "_blank")
                  : (e = "_top"),
                window.open(r, e, "noreferrer noopener");
            } else
              l === to.reactNative &&
                "u" >
                  typeof (null == globalThis ? void 0 : globalThis.Linking) &&
                (await globalThis.Linking.openURL(c));
          } catch (e) {
            console.error(e);
          }
        }
        async function tS(e, t) {
          let i = "";
          try {
            if (tl() && (i = localStorage.getItem(t))) return i;
            i = await e.getItem(t);
          } catch (e) {
            console.error(e);
          }
          return i;
        }
        function tA(e, t) {
          if (!e.includes(t)) return null;
          let i = e.split(/([&,?,=])/),
            r = i.indexOf(t);
          return i[r + 2];
        }
        function tO() {
          return "u" > typeof crypto && null != crypto && crypto.randomUUID
            ? crypto.randomUUID()
            : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
                let t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              });
        }
        function tC() {
          return "u" > typeof r.default && "true" === r.default.env.IS_VITEST;
        }
        function tR(e) {
          return i.Buffer.from(e, "base64").toString("utf-8");
        }
        let tT = BigInt(0x100000000 - 1),
          tN = BigInt(32);
        function tU(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return t
            ? { h: Number(e & tT), l: Number((e >> tN) & tT) }
            : { h: 0 | Number((e >> tN) & tT), l: 0 | Number(e & tT) };
        }
        function tk(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = e.length,
            r = new Uint32Array(i),
            s = new Uint32Array(i);
          for (let n = 0; n < i; n++) {
            let { h: i, l: o } = tU(e[n], t);
            [r[n], s[n]] = [i, o];
          }
          return [r, s];
        }
        let tD = (e, t, i) => e >>> i,
          tq = (e, t, i) => (e << (32 - i)) | (t >>> i),
          tB = (e, t, i) => (e >>> i) | (t << (32 - i)),
          tj = (e, t, i) => (e << (32 - i)) | (t >>> i),
          tL = (e, t, i) => (e << (64 - i)) | (t >>> (i - 32)),
          tM = (e, t, i) => (e >>> (i - 32)) | (t << (64 - i));
        function tz(e, t, i, r) {
          let s = (t >>> 0) + (r >>> 0);
          return { h: (e + i + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
        }
        let tH = (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0),
          tF = (e, t, i, r) => (t + i + r + ((e / 0x100000000) | 0)) | 0,
          tV = (e, t, i, r) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0),
          tK = (e, t, i, r, s) => (t + i + r + s + ((e / 0x100000000) | 0)) | 0,
          tW = (e, t, i, r, s) =>
            (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0),
          tG = (e, t, i, r, s, n) =>
            (t + i + r + s + n + ((e / 0x100000000) | 0)) | 0,
          tJ =
            "object" == typeof globalThis && "crypto" in globalThis
              ? globalThis.crypto
              : void 0;
        function tY(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function tX(e) {
          if (!Number.isSafeInteger(e) || e < 0)
            throw Error("positive integer expected, got " + e);
        }
        function tZ(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            i[r - 1] = arguments[r];
          if (!tY(e)) throw Error("Uint8Array expected");
          if (i.length > 0 && !i.includes(e.length))
            throw Error(
              "Uint8Array expected of length " + i + ", got length=" + e.length
            );
        }
        function tQ(e) {
          if ("function" != typeof e || "function" != typeof e.create)
            throw Error("Hash should be wrapped by utils.createHasher");
          tX(e.outputLen), tX(e.blockLen);
        }
        function t$(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }
        function t0(e, t) {
          tZ(e);
          let i = t.outputLen;
          if (e.length < i)
            throw Error(
              "digestInto() expects output buffer of length at least " + i
            );
        }
        function t1(e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }
        function t2() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (let e = 0; e < t.length; e++) t[e].fill(0);
        }
        function t6(e) {
          return new DataView(e.buffer, e.byteOffset, e.byteLength);
        }
        function t8(e, t) {
          return (e << (32 - t)) | (e >>> t);
        }
        let t3 = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
        function t5(e) {
          return (
            ((e << 24) & 0xff000000) |
            ((e << 8) & 0xff0000) |
            ((e >>> 8) & 65280) |
            ((e >>> 24) & 255)
          );
        }
        let t4 = t3 ? (e) => e : (e) => t5(e),
          t9 = t3
            ? (e) => e
            : function (e) {
                for (let t = 0; t < e.length; t++) e[t] = t5(e[t]);
                return e;
              },
          t7 =
            "function" == typeof Uint8Array.from([]).toHex &&
            "function" == typeof Uint8Array.fromHex,
          ie = Array.from({ length: 256 }, (e, t) =>
            t.toString(16).padStart(2, "0")
          );
        function it(e) {
          if ((tZ(e), t7)) return e.toHex();
          let t = "";
          for (let i = 0; i < e.length; i++) t += ie[e[i]];
          return t;
        }
        let ii = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
        function ir(e) {
          return e >= ii._0 && e <= ii._9
            ? e - ii._0
            : e >= ii.A && e <= ii.F
            ? e - (ii.A - 10)
            : e >= ii.a && e <= ii.f
            ? e - (ii.a - 10)
            : void 0;
        }
        function is(e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          if (t7) return Uint8Array.fromHex(e);
          let t = e.length,
            i = t / 2;
          if (t % 2)
            throw Error("hex string expected, got unpadded hex of length " + t);
          let r = new Uint8Array(i);
          for (let t = 0, s = 0; t < i; t++, s += 2) {
            let i = ir(e.charCodeAt(s)),
              n = ir(e.charCodeAt(s + 1));
            if (void 0 === i || void 0 === n)
              throw Error(
                'hex string expected, got non-hex character "' +
                  (e[s] + e[s + 1]) +
                  '" at index ' +
                  s
              );
            r[t] = 16 * i + n;
          }
          return r;
        }
        function io(e) {
          return (
            "string" == typeof e &&
              (e = (function (e) {
                if ("string" != typeof e) throw Error("string expected");
                return new Uint8Array(new TextEncoder().encode(e));
              })(e)),
            tZ(e),
            e
          );
        }
        function ia() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          let r = 0;
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            tZ(i), (r += i.length);
          }
          let s = new Uint8Array(r);
          for (let e = 0, i = 0; e < t.length; e++) {
            let r = t[e];
            s.set(r, i), (i += r.length);
          }
          return s;
        }
        class ic {}
        function il(e) {
          let t = (t) => e().update(io(t)).digest(),
            i = e();
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = () => e()),
            t
          );
        }
        function ih() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
          if (tJ && "function" == typeof tJ.getRandomValues)
            return tJ.getRandomValues(new Uint8Array(e));
          if (tJ && "function" == typeof tJ.randomBytes)
            return Uint8Array.from(tJ.randomBytes(e));
          throw Error("crypto.getRandomValues must be defined");
        }
        let id = BigInt(0),
          iu = BigInt(1),
          ip = BigInt(2),
          ig = BigInt(7),
          iy = BigInt(256),
          im = BigInt(113),
          ib = [],
          iv = [],
          iw = [];
        for (let e = 0, t = iu, i = 1, r = 0; e < 24; e++) {
          ([i, r] = [r, (2 * i + 3 * r) % 5]),
            ib.push(2 * (5 * r + i)),
            iv.push((((e + 1) * (e + 2)) / 2) % 64);
          let s = id;
          for (let e = 0; e < 7; e++)
            (t = ((t << iu) ^ ((t >> ig) * im)) % iy) & ip &&
              (s ^= iu << ((iu << BigInt(e)) - iu));
          iw.push(s);
        }
        let iE = tk(iw, !0),
          iI = iE[0],
          ix = iE[1],
          iP = (e, t, i) =>
            i > 32
              ? ((e, t, i) => (t << (i - 32)) | (e >>> (64 - i)))(e, t, i)
              : ((e, t, i) => (e << i) | (t >>> (32 - i)))(e, t, i),
          i_ = (e, t, i) =>
            i > 32
              ? ((e, t, i) => (e << (i - 32)) | (t >>> (64 - i)))(e, t, i)
              : ((e, t, i) => (t << i) | (e >>> (32 - i)))(e, t, i);
        class iS extends ic {
          clone() {
            return this._cloneInto();
          }
          keccak() {
            t9(this.state32),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 24,
                  i = new Uint32Array(10);
                for (let r = 24 - t; r < 24; r++) {
                  for (let t = 0; t < 10; t++)
                    i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                  for (let t = 0; t < 10; t += 2) {
                    let r = (t + 8) % 10,
                      s = (t + 2) % 10,
                      n = i[s],
                      o = i[s + 1],
                      a = iP(n, o, 1) ^ i[r],
                      c = i_(n, o, 1) ^ i[r + 1];
                    for (let i = 0; i < 50; i += 10)
                      (e[t + i] ^= a), (e[t + i + 1] ^= c);
                  }
                  let t = e[2],
                    s = e[3];
                  for (let i = 0; i < 24; i++) {
                    let r = iv[i],
                      n = iP(t, s, r),
                      o = i_(t, s, r),
                      a = ib[i];
                    (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                  }
                  for (let t = 0; t < 50; t += 10) {
                    for (let r = 0; r < 10; r++) i[r] = e[t + r];
                    for (let r = 0; r < 10; r++)
                      e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                  }
                  (e[0] ^= iI[r]), (e[1] ^= ix[r]);
                }
                t2(i);
              })(this.state32, this.rounds),
              t9(this.state32),
              (this.posOut = 0),
              (this.pos = 0);
          }
          update(e) {
            t$(this), tZ((e = io(e)));
            let { blockLen: t, state: i } = this,
              r = e.length;
            for (let s = 0; s < r; ) {
              let n = Math.min(t - this.pos, r - s);
              for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
              this.pos === t && this.keccak();
            }
            return this;
          }
          finish() {
            if (this.finished) return;
            this.finished = !0;
            let { state: e, suffix: t, pos: i, blockLen: r } = this;
            (e[i] ^= t),
              (128 & t) != 0 && i === r - 1 && this.keccak(),
              (e[r - 1] ^= 128),
              this.keccak();
          }
          writeInto(e) {
            t$(this, !1), tZ(e), this.finish();
            let t = this.state,
              { blockLen: i } = this;
            for (let r = 0, s = e.length; r < s; ) {
              this.posOut >= i && this.keccak();
              let n = Math.min(i - this.posOut, s - r);
              e.set(t.subarray(this.posOut, this.posOut + n), r),
                (this.posOut += n),
                (r += n);
            }
            return e;
          }
          xofInto(e) {
            if (!this.enableXOF)
              throw Error("XOF is not possible for this instance");
            return this.writeInto(e);
          }
          xof(e) {
            return tX(e), this.xofInto(new Uint8Array(e));
          }
          digestInto(e) {
            if ((t0(e, this), this.finished))
              throw Error("digest() was already called");
            return this.writeInto(e), this.destroy(), e;
          }
          digest() {
            return this.digestInto(new Uint8Array(this.outputLen));
          }
          destroy() {
            (this.destroyed = !0), t2(this.state);
          }
          _cloneInto(e) {
            let {
              blockLen: t,
              suffix: i,
              outputLen: r,
              rounds: s,
              enableXOF: n,
            } = this;
            return (
              e || (e = new iS(t, i, r, n, s)),
              e.state32.set(this.state32),
              (e.pos = this.pos),
              (e.posOut = this.posOut),
              (e.finished = this.finished),
              (e.rounds = s),
              (e.suffix = i),
              (e.outputLen = r),
              (e.enableXOF = n),
              (e.destroyed = this.destroyed),
              e
            );
          }
          constructor(e, t, i, r = !1, s = 24) {
            if (
              (super(),
              (this.pos = 0),
              (this.posOut = 0),
              (this.finished = !1),
              (this.destroyed = !1),
              (this.enableXOF = !1),
              (this.blockLen = e),
              (this.suffix = t),
              (this.outputLen = i),
              (this.enableXOF = r),
              (this.rounds = s),
              tX(i),
              !(0 < e && e < 200))
            )
              throw Error("only keccak-f1600 function is supported");
            (this.state = new Uint8Array(200)), (this.state32 = t1(this.state));
          }
        }
        let iA = il(() => new iS(136, 1, 32));
        class iO extends ic {
          update(e) {
            t$(this), tZ((e = io(e)));
            let { view: t, buffer: i, blockLen: r } = this,
              s = e.length;
            for (let n = 0; n < s; ) {
              let o = Math.min(r - this.pos, s - n);
              if (o === r) {
                let t = t6(e);
                for (; r <= s - n; n += r) this.process(t, n);
                continue;
              }
              i.set(e.subarray(n, n + o), this.pos),
                (this.pos += o),
                (n += o),
                this.pos === r && (this.process(t, 0), (this.pos = 0));
            }
            return (this.length += e.length), this.roundClean(), this;
          }
          digestInto(e) {
            t$(this), t0(e, this), (this.finished = !0);
            let { buffer: t, view: i, blockLen: r, isLE: s } = this,
              { pos: n } = this;
            (t[n++] = 128),
              t2(this.buffer.subarray(n)),
              this.padOffset > r - n && (this.process(i, 0), (n = 0));
            for (let e = n; e < r; e++) t[e] = 0;
            (function (e, t, i, r) {
              if ("function" == typeof e.setBigUint64)
                return e.setBigUint64(t, i, r);
              let s = BigInt(32),
                n = BigInt(0xffffffff),
                o = Number((i >> s) & n),
                a = Number(i & n),
                c = 4 * !!r,
                l = 4 * !r;
              e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
            })(i, r - 8, BigInt(8 * this.length), s),
              this.process(i, 0);
            let o = t6(e),
              a = this.outputLen;
            if (a % 4)
              throw Error("_sha2: outputLen should be aligned to 32bit");
            let c = a / 4,
              l = this.get();
            if (c > l.length) throw Error("_sha2: outputLen bigger than state");
            for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          _cloneInto(e) {
            e || (e = new this.constructor()), e.set(...this.get());
            let {
              blockLen: t,
              buffer: i,
              length: r,
              finished: s,
              destroyed: n,
              pos: o,
            } = this;
            return (
              (e.destroyed = n),
              (e.finished = s),
              (e.length = r),
              (e.pos = o),
              r % t && e.buffer.set(i),
              e
            );
          }
          clone() {
            return this._cloneInto();
          }
          constructor(e, t, i, r) {
            super(),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.padOffset = i),
              (this.isLE = r),
              (this.buffer = new Uint8Array(e)),
              (this.view = t6(this.buffer));
          }
        }
        let iC = Uint32Array.from([
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          iR = Uint32Array.from([
            0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
            0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
            0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
            0xbefa4fa4,
          ]),
          iT = Uint32Array.from([
            0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
            0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
            0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
            0x137e2179,
          ]),
          iN = Uint32Array.from([
            0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
            0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
            0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
            0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc,
            0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
            0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
            0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
            0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
            0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
            0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
            0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
            0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
            0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
          ]),
          iU = new Uint32Array(64);
        class ik extends iO {
          get() {
            let { A: e, B: t, C: i, D: r, E: s, F: n, G: o, H: a } = this;
            return [e, t, i, r, s, n, o, a];
          }
          set(e, t, i, r, s, n, o, a) {
            (this.A = 0 | e),
              (this.B = 0 | t),
              (this.C = 0 | i),
              (this.D = 0 | r),
              (this.E = 0 | s),
              (this.F = 0 | n),
              (this.G = 0 | o),
              (this.H = 0 | a);
          }
          process(e, t) {
            for (let i = 0; i < 16; i++, t += 4) iU[i] = e.getUint32(t, !1);
            for (let e = 16; e < 64; e++) {
              let t = iU[e - 15],
                i = iU[e - 2],
                r = t8(t, 7) ^ t8(t, 18) ^ (t >>> 3),
                s = t8(i, 17) ^ t8(i, 19) ^ (i >>> 10);
              iU[e] = (s + iU[e - 7] + r + iU[e - 16]) | 0;
            }
            let { A: i, B: r, C: s, D: n, E: o, F: a, G: c, H: l } = this;
            for (let e = 0; e < 64; e++) {
              var h, d, u, p;
              let t =
                  (l +
                    (t8(o, 6) ^ t8(o, 11) ^ t8(o, 25)) +
                    (((h = o) & a) ^ (~h & c)) +
                    iN[e] +
                    iU[e]) |
                  0,
                f =
                  ((t8(i, 2) ^ t8(i, 13) ^ t8(i, 22)) +
                    (((d = i) & (u = r)) ^ (d & (p = s)) ^ (u & p))) |
                  0;
              (l = c),
                (c = a),
                (a = o),
                (o = (n + t) | 0),
                (n = s),
                (s = r),
                (r = i),
                (i = (t + f) | 0);
            }
            (i = (i + this.A) | 0),
              (r = (r + this.B) | 0),
              (s = (s + this.C) | 0),
              (n = (n + this.D) | 0),
              (o = (o + this.E) | 0),
              (a = (a + this.F) | 0),
              (c = (c + this.G) | 0),
              (l = (l + this.H) | 0),
              this.set(i, r, s, n, o, a, c, l);
          }
          roundClean() {
            t2(iU);
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), t2(this.buffer);
          }
          constructor(e = 32) {
            super(64, e, 8, !1),
              (this.A = 0 | iC[0]),
              (this.B = 0 | iC[1]),
              (this.C = 0 | iC[2]),
              (this.D = 0 | iC[3]),
              (this.E = 0 | iC[4]),
              (this.F = 0 | iC[5]),
              (this.G = 0 | iC[6]),
              (this.H = 0 | iC[7]);
          }
        }
        let iD = tk(
            [
              "0x428a2f98d728ae22",
              "0x7137449123ef65cd",
              "0xb5c0fbcfec4d3b2f",
              "0xe9b5dba58189dbbc",
              "0x3956c25bf348b538",
              "0x59f111f1b605d019",
              "0x923f82a4af194f9b",
              "0xab1c5ed5da6d8118",
              "0xd807aa98a3030242",
              "0x12835b0145706fbe",
              "0x243185be4ee4b28c",
              "0x550c7dc3d5ffb4e2",
              "0x72be5d74f27b896f",
              "0x80deb1fe3b1696b1",
              "0x9bdc06a725c71235",
              "0xc19bf174cf692694",
              "0xe49b69c19ef14ad2",
              "0xefbe4786384f25e3",
              "0x0fc19dc68b8cd5b5",
              "0x240ca1cc77ac9c65",
              "0x2de92c6f592b0275",
              "0x4a7484aa6ea6e483",
              "0x5cb0a9dcbd41fbd4",
              "0x76f988da831153b5",
              "0x983e5152ee66dfab",
              "0xa831c66d2db43210",
              "0xb00327c898fb213f",
              "0xbf597fc7beef0ee4",
              "0xc6e00bf33da88fc2",
              "0xd5a79147930aa725",
              "0x06ca6351e003826f",
              "0x142929670a0e6e70",
              "0x27b70a8546d22ffc",
              "0x2e1b21385c26c926",
              "0x4d2c6dfc5ac42aed",
              "0x53380d139d95b3df",
              "0x650a73548baf63de",
              "0x766a0abb3c77b2a8",
              "0x81c2c92e47edaee6",
              "0x92722c851482353b",
              "0xa2bfe8a14cf10364",
              "0xa81a664bbc423001",
              "0xc24b8b70d0f89791",
              "0xc76c51a30654be30",
              "0xd192e819d6ef5218",
              "0xd69906245565a910",
              "0xf40e35855771202a",
              "0x106aa07032bbd1b8",
              "0x19a4c116b8d2d0c8",
              "0x1e376c085141ab53",
              "0x2748774cdf8eeb99",
              "0x34b0bcb5e19b48a8",
              "0x391c0cb3c5c95a63",
              "0x4ed8aa4ae3418acb",
              "0x5b9cca4f7763e373",
              "0x682e6ff3d6b2b8a3",
              "0x748f82ee5defb2fc",
              "0x78a5636f43172f60",
              "0x84c87814a1f0ab72",
              "0x8cc702081a6439ec",
              "0x90befffa23631e28",
              "0xa4506cebde82bde9",
              "0xbef9a3f7b2c67915",
              "0xc67178f2e372532b",
              "0xca273eceea26619c",
              "0xd186b8c721c0c207",
              "0xeada7dd6cde0eb1e",
              "0xf57d4f7fee6ed178",
              "0x06f067aa72176fba",
              "0x0a637dc5a2c898a6",
              "0x113f9804bef90dae",
              "0x1b710b35131c471b",
              "0x28db77f523047d84",
              "0x32caab7b40c72493",
              "0x3c9ebe0a15c9bebc",
              "0x431d67c49c100d4c",
              "0x4cc5d4becb3e42b6",
              "0x597f299cfc657e2a",
              "0x5fcb6fab3ad6faec",
              "0x6c44198c4a475817",
            ].map((e) => BigInt(e))
          ),
          iq = iD[0],
          iB = iD[1],
          ij = new Uint32Array(80),
          iL = new Uint32Array(80);
        class iM extends iO {
          get() {
            let {
              Ah: e,
              Al: t,
              Bh: i,
              Bl: r,
              Ch: s,
              Cl: n,
              Dh: o,
              Dl: a,
              Eh: c,
              El: l,
              Fh: h,
              Fl: d,
              Gh: u,
              Gl: p,
              Hh: f,
              Hl: g,
            } = this;
            return [e, t, i, r, s, n, o, a, c, l, h, d, u, p, f, g];
          }
          set(e, t, i, r, s, n, o, a, c, l, h, d, u, p, f, g) {
            (this.Ah = 0 | e),
              (this.Al = 0 | t),
              (this.Bh = 0 | i),
              (this.Bl = 0 | r),
              (this.Ch = 0 | s),
              (this.Cl = 0 | n),
              (this.Dh = 0 | o),
              (this.Dl = 0 | a),
              (this.Eh = 0 | c),
              (this.El = 0 | l),
              (this.Fh = 0 | h),
              (this.Fl = 0 | d),
              (this.Gh = 0 | u),
              (this.Gl = 0 | p),
              (this.Hh = 0 | f),
              (this.Hl = 0 | g);
          }
          process(e, t) {
            for (let i = 0; i < 16; i++, t += 4)
              (ij[i] = e.getUint32(t)), (iL[i] = e.getUint32((t += 4)));
            for (let e = 16; e < 80; e++) {
              let t = 0 | ij[e - 15],
                i = 0 | iL[e - 15],
                r = tB(t, i, 1) ^ tB(t, i, 8) ^ tD(t, i, 7),
                s = tj(t, i, 1) ^ tj(t, i, 8) ^ tq(t, i, 7),
                n = 0 | ij[e - 2],
                o = 0 | iL[e - 2],
                a = tB(n, o, 19) ^ tL(n, o, 61) ^ tD(n, o, 6),
                c = tV(
                  s,
                  tj(n, o, 19) ^ tM(n, o, 61) ^ tq(n, o, 6),
                  iL[e - 7],
                  iL[e - 16]
                ),
                l = tK(c, r, a, ij[e - 7], ij[e - 16]);
              (ij[e] = 0 | l), (iL[e] = 0 | c);
            }
            let {
              Ah: i,
              Al: r,
              Bh: s,
              Bl: n,
              Ch: o,
              Cl: a,
              Dh: c,
              Dl: l,
              Eh: h,
              El: d,
              Fh: u,
              Fl: p,
              Gh: f,
              Gl: g,
              Hh: y,
              Hl: m,
            } = this;
            for (let e = 0; e < 80; e++) {
              let t = tB(h, d, 14) ^ tB(h, d, 18) ^ tL(h, d, 41),
                b = tj(h, d, 14) ^ tj(h, d, 18) ^ tM(h, d, 41),
                v = (h & u) ^ (~h & f),
                w = tW(m, b, (d & p) ^ (~d & g), iB[e], iL[e]),
                E = tG(w, y, t, v, iq[e], ij[e]),
                I = 0 | w,
                x = tB(i, r, 28) ^ tL(i, r, 34) ^ tL(i, r, 39),
                P = tj(i, r, 28) ^ tM(i, r, 34) ^ tM(i, r, 39),
                _ = (i & s) ^ (i & o) ^ (s & o),
                S = (r & n) ^ (r & a) ^ (n & a);
              (y = 0 | f),
                (m = 0 | g),
                (f = 0 | u),
                (g = 0 | p),
                (u = 0 | h),
                (p = 0 | d),
                ({ h: h, l: d } = tz(0 | c, 0 | l, 0 | E, 0 | I)),
                (c = 0 | o),
                (l = 0 | a),
                (o = 0 | s),
                (a = 0 | n),
                (s = 0 | i),
                (n = 0 | r);
              let A = tH(I, P, S);
              (i = tF(A, E, x, _)), (r = 0 | A);
            }
            ({ h: i, l: r } = tz(0 | this.Ah, 0 | this.Al, 0 | i, 0 | r)),
              ({ h: s, l: n } = tz(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
              ({ h: o, l: a } = tz(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
              ({ h: c, l: l } = tz(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
              ({ h: h, l: d } = tz(0 | this.Eh, 0 | this.El, 0 | h, 0 | d)),
              ({ h: u, l: p } = tz(0 | this.Fh, 0 | this.Fl, 0 | u, 0 | p)),
              ({ h: f, l: g } = tz(0 | this.Gh, 0 | this.Gl, 0 | f, 0 | g)),
              ({ h: y, l: m } = tz(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | m)),
              this.set(i, r, s, n, o, a, c, l, h, d, u, p, f, g, y, m);
          }
          roundClean() {
            t2(ij, iL);
          }
          destroy() {
            t2(this.buffer),
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          }
          constructor(e = 64) {
            super(128, e, 16, !1),
              (this.Ah = 0 | iT[0]),
              (this.Al = 0 | iT[1]),
              (this.Bh = 0 | iT[2]),
              (this.Bl = 0 | iT[3]),
              (this.Ch = 0 | iT[4]),
              (this.Cl = 0 | iT[5]),
              (this.Dh = 0 | iT[6]),
              (this.Dl = 0 | iT[7]),
              (this.Eh = 0 | iT[8]),
              (this.El = 0 | iT[9]),
              (this.Fh = 0 | iT[10]),
              (this.Fl = 0 | iT[11]),
              (this.Gh = 0 | iT[12]),
              (this.Gl = 0 | iT[13]),
              (this.Hh = 0 | iT[14]),
              (this.Hl = 0 | iT[15]);
          }
        }
        class iz extends iM {
          constructor() {
            super(48),
              (this.Ah = 0 | iR[0]),
              (this.Al = 0 | iR[1]),
              (this.Bh = 0 | iR[2]),
              (this.Bl = 0 | iR[3]),
              (this.Ch = 0 | iR[4]),
              (this.Cl = 0 | iR[5]),
              (this.Dh = 0 | iR[6]),
              (this.Dl = 0 | iR[7]),
              (this.Eh = 0 | iR[8]),
              (this.El = 0 | iR[9]),
              (this.Fh = 0 | iR[10]),
              (this.Fl = 0 | iR[11]),
              (this.Gh = 0 | iR[12]),
              (this.Gl = 0 | iR[13]),
              (this.Hh = 0 | iR[14]),
              (this.Hl = 0 | iR[15]);
          }
        }
        let iH = Uint32Array.from([
          0x22312194, 0xfc2bf72c, 0x9f555fa3, 0xc84c64c2, 0x2393b86b,
          0x6f53b151, 0x96387719, 0x5940eabd, 0x96283ee2, 0xa88effe3,
          0xbe5e1e25, 0x53863992, 0x2b0199fc, 0x2c85b8aa, 0xeb72ddc, 0x81c52ca2,
        ]);
        class iF extends iM {
          constructor() {
            super(32),
              (this.Ah = 0 | iH[0]),
              (this.Al = 0 | iH[1]),
              (this.Bh = 0 | iH[2]),
              (this.Bl = 0 | iH[3]),
              (this.Ch = 0 | iH[4]),
              (this.Cl = 0 | iH[5]),
              (this.Dh = 0 | iH[6]),
              (this.Dl = 0 | iH[7]),
              (this.Eh = 0 | iH[8]),
              (this.El = 0 | iH[9]),
              (this.Fh = 0 | iH[10]),
              (this.Fl = 0 | iH[11]),
              (this.Gh = 0 | iH[12]),
              (this.Gl = 0 | iH[13]),
              (this.Hh = 0 | iH[14]),
              (this.Hl = 0 | iH[15]);
          }
        }
        let iV = il(() => new ik()),
          iK = il(() => new iM()),
          iW = il(() => new iz()),
          iG = il(() => new iF()),
          iJ = Uint8Array.from([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
          ]),
          iY = Uint32Array.from([
            0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b,
            0x3c6ef372, 0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f,
            0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179,
            0x5be0cd19,
          ]),
          iX = new Uint32Array(32);
        function iZ(e, t, i, r, s, n) {
          let o = s[n],
            a = s[n + 1],
            c = iX[2 * e],
            l = iX[2 * e + 1],
            h = iX[2 * t],
            d = iX[2 * t + 1],
            u = iX[2 * i],
            p = iX[2 * i + 1],
            f = iX[2 * r],
            g = iX[2 * r + 1],
            y = tH(c, h, o);
          (l = tF(y, l, d, a)),
            (c = 0 | y),
            ({ Dh: g, Dl: f } = { Dh: g ^ l, Dl: f ^ c }),
            ({ Dh: g, Dl: f } = { Dh: f, Dl: g }),
            ({ h: p, l: u } = tz(p, u, g, f)),
            ({ Bh: d, Bl: h } = { Bh: d ^ p, Bl: h ^ u }),
            ({ Bh: d, Bl: h } = { Bh: tB(d, h, 24), Bl: tj(d, h, 24) }),
            (iX[2 * e] = c),
            (iX[2 * e + 1] = l),
            (iX[2 * t] = h),
            (iX[2 * t + 1] = d),
            (iX[2 * i] = u),
            (iX[2 * i + 1] = p),
            (iX[2 * r] = f),
            (iX[2 * r + 1] = g);
        }
        function iQ(e, t, i, r, s, n) {
          let o = s[n],
            a = s[n + 1],
            c = iX[2 * e],
            l = iX[2 * e + 1],
            h = iX[2 * t],
            d = iX[2 * t + 1],
            u = iX[2 * i],
            p = iX[2 * i + 1],
            f = iX[2 * r],
            g = iX[2 * r + 1],
            y = tH(c, h, o);
          (l = tF(y, l, d, a)),
            (c = 0 | y),
            ({ Dh: g, Dl: f } = { Dh: g ^ l, Dl: f ^ c }),
            ({ Dh: g, Dl: f } = { Dh: tB(g, f, 16), Dl: tj(g, f, 16) }),
            ({ h: p, l: u } = tz(p, u, g, f)),
            ({ Bh: d, Bl: h } = { Bh: d ^ p, Bl: h ^ u }),
            ({ Bh: d, Bl: h } = { Bh: tL(d, h, 63), Bl: tM(d, h, 63) }),
            (iX[2 * e] = c),
            (iX[2 * e + 1] = l),
            (iX[2 * t] = h),
            (iX[2 * t + 1] = d),
            (iX[2 * i] = u),
            (iX[2 * i + 1] = p),
            (iX[2 * r] = f),
            (iX[2 * r + 1] = g);
        }
        class i$ extends ic {
          update(e) {
            t$(this), tZ((e = io(e)));
            let { blockLen: t, buffer: i, buffer32: r } = this,
              s = e.length,
              n = e.byteOffset,
              o = e.buffer;
            for (let a = 0; a < s; ) {
              this.pos === t &&
                (t9(r), this.compress(r, 0, !1), t9(r), (this.pos = 0));
              let c = Math.min(t - this.pos, s - a),
                l = n + a;
              if (c === t && !(l % 4) && a + c < s) {
                let e = new Uint32Array(o, l, Math.floor((s - a) / 4));
                t9(e);
                for (let i = 0; a + t < s; i += r.length, a += t)
                  (this.length += t), this.compress(e, i, !1);
                t9(e);
                continue;
              }
              i.set(e.subarray(a, a + c), this.pos),
                (this.pos += c),
                (this.length += c),
                (a += c);
            }
            return this;
          }
          digestInto(e) {
            t$(this), t0(e, this);
            let { pos: t, buffer32: i } = this;
            (this.finished = !0),
              t2(this.buffer.subarray(t)),
              t9(i),
              this.compress(i, 0, !0),
              t9(i);
            let r = t1(e);
            this.get().forEach((e, t) => (r[t] = t4(e)));
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          _cloneInto(e) {
            let {
              buffer: t,
              length: i,
              finished: r,
              destroyed: s,
              outputLen: n,
              pos: o,
            } = this;
            return (
              e || (e = new this.constructor({ dkLen: n })),
              e.set(...this.get()),
              e.buffer.set(t),
              (e.destroyed = s),
              (e.finished = r),
              (e.length = i),
              (e.pos = o),
              (e.outputLen = n),
              e
            );
          }
          clone() {
            return this._cloneInto();
          }
          constructor(e, t) {
            super(),
              (this.finished = !1),
              (this.destroyed = !1),
              (this.length = 0),
              (this.pos = 0),
              tX(e),
              tX(t),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.buffer = new Uint8Array(e)),
              (this.buffer32 = t1(this.buffer));
          }
        }
        class i0 extends i$ {
          get() {
            let {
              v0l: e,
              v0h: t,
              v1l: i,
              v1h: r,
              v2l: s,
              v2h: n,
              v3l: o,
              v3h: a,
              v4l: c,
              v4h: l,
              v5l: h,
              v5h: d,
              v6l: u,
              v6h: p,
              v7l: f,
              v7h: g,
            } = this;
            return [e, t, i, r, s, n, o, a, c, l, h, d, u, p, f, g];
          }
          set(e, t, i, r, s, n, o, a, c, l, h, d, u, p, f, g) {
            (this.v0l = 0 | e),
              (this.v0h = 0 | t),
              (this.v1l = 0 | i),
              (this.v1h = 0 | r),
              (this.v2l = 0 | s),
              (this.v2h = 0 | n),
              (this.v3l = 0 | o),
              (this.v3h = 0 | a),
              (this.v4l = 0 | c),
              (this.v4h = 0 | l),
              (this.v5l = 0 | h),
              (this.v5h = 0 | d),
              (this.v6l = 0 | u),
              (this.v6h = 0 | p),
              (this.v7l = 0 | f),
              (this.v7h = 0 | g);
          }
          compress(e, t, i) {
            this.get().forEach((e, t) => (iX[t] = e)), iX.set(iY, 16);
            let { h: r, l: s } = tU(BigInt(this.length));
            (iX[24] = iY[8] ^ s),
              (iX[25] = iY[9] ^ r),
              i && ((iX[28] = ~iX[28]), (iX[29] = ~iX[29]));
            let n = 0;
            for (let i = 0; i < 12; i++)
              iZ(0, 4, 8, 12, e, t + 2 * iJ[n++]),
                iQ(0, 4, 8, 12, e, t + 2 * iJ[n++]),
                iZ(1, 5, 9, 13, e, t + 2 * iJ[n++]),
                iQ(1, 5, 9, 13, e, t + 2 * iJ[n++]),
                iZ(2, 6, 10, 14, e, t + 2 * iJ[n++]),
                iQ(2, 6, 10, 14, e, t + 2 * iJ[n++]),
                iZ(3, 7, 11, 15, e, t + 2 * iJ[n++]),
                iQ(3, 7, 11, 15, e, t + 2 * iJ[n++]),
                iZ(0, 5, 10, 15, e, t + 2 * iJ[n++]),
                iQ(0, 5, 10, 15, e, t + 2 * iJ[n++]),
                iZ(1, 6, 11, 12, e, t + 2 * iJ[n++]),
                iQ(1, 6, 11, 12, e, t + 2 * iJ[n++]),
                iZ(2, 7, 8, 13, e, t + 2 * iJ[n++]),
                iQ(2, 7, 8, 13, e, t + 2 * iJ[n++]),
                iZ(3, 4, 9, 14, e, t + 2 * iJ[n++]),
                iQ(3, 4, 9, 14, e, t + 2 * iJ[n++]);
            (this.v0l ^= iX[0] ^ iX[16]),
              (this.v0h ^= iX[1] ^ iX[17]),
              (this.v1l ^= iX[2] ^ iX[18]),
              (this.v1h ^= iX[3] ^ iX[19]),
              (this.v2l ^= iX[4] ^ iX[20]),
              (this.v2h ^= iX[5] ^ iX[21]),
              (this.v3l ^= iX[6] ^ iX[22]),
              (this.v3h ^= iX[7] ^ iX[23]),
              (this.v4l ^= iX[8] ^ iX[24]),
              (this.v4h ^= iX[9] ^ iX[25]),
              (this.v5l ^= iX[10] ^ iX[26]),
              (this.v5h ^= iX[11] ^ iX[27]),
              (this.v6l ^= iX[12] ^ iX[28]),
              (this.v6h ^= iX[13] ^ iX[29]),
              (this.v7l ^= iX[14] ^ iX[30]),
              (this.v7h ^= iX[15] ^ iX[31]),
              t2(iX);
          }
          destroy() {
            (this.destroyed = !0),
              t2(this.buffer32),
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          }
          constructor(e = {}) {
            let t = void 0 === e.dkLen ? 64 : e.dkLen;
            super(128, t),
              (this.v0l = 0 | iY[0]),
              (this.v0h = 0 | iY[1]),
              (this.v1l = 0 | iY[2]),
              (this.v1h = 0 | iY[3]),
              (this.v2l = 0 | iY[4]),
              (this.v2h = 0 | iY[5]),
              (this.v3l = 0 | iY[6]),
              (this.v3h = 0 | iY[7]),
              (this.v4l = 0 | iY[8]),
              (this.v4h = 0 | iY[9]),
              (this.v5l = 0 | iY[10]),
              (this.v5h = 0 | iY[11]),
              (this.v6l = 0 | iY[12]),
              (this.v6h = 0 | iY[13]),
              (this.v7l = 0 | iY[14]),
              (this.v7h = 0 | iY[15]),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  s = arguments.length > 4 ? arguments[4] : void 0;
                if ((tX(i), e < 0 || e > i))
                  throw Error("outputLen bigger than keyLen");
                let { key: n, salt: o, personalization: a } = t;
                if (void 0 !== n && (n.length < 1 || n.length > i))
                  throw Error("key length must be undefined or 1.." + i);
                if (void 0 !== o && o.length !== r)
                  throw Error("salt must be undefined or " + r);
                if (void 0 !== a && a.length !== s)
                  throw Error("personalization must be undefined or " + s);
              })(t, e, 64, 16, 16);
            let { key: i, personalization: r, salt: s } = e,
              n = 0;
            if (
              (void 0 !== i && (n = (i = io(i)).length),
              (this.v0l ^= this.outputLen | (n << 8) | 0x1010000),
              void 0 !== s)
            ) {
              let e = t1((s = io(s)));
              (this.v4l ^= t4(e[0])),
                (this.v4h ^= t4(e[1])),
                (this.v5l ^= t4(e[2])),
                (this.v5h ^= t4(e[3]));
            }
            if (void 0 !== r) {
              let e = t1((r = io(r)));
              (this.v6l ^= t4(e[0])),
                (this.v6h ^= t4(e[1])),
                (this.v7l ^= t4(e[2])),
                (this.v7h ^= t4(e[3]));
            }
            if (void 0 !== i) {
              let e = new Uint8Array(this.blockLen);
              e.set(i), this.update(e);
            }
          }
        }
        let i1 = (function (e) {
          let t = (t, i) => e(i).update(io(t)).digest(),
            i = e({});
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        })((e) => new i0(e));
        function i2(e) {
          let t = "\x19Ethereum Signed Message:\n".concat(e.length),
            r = new TextEncoder().encode(t + e);
          return "0x" + i.Buffer.from(iA(r)).toString("hex");
        }
        async function i6(e, t, i, r, s, n) {
          switch (i.t) {
            case "eip191":
              return await i8(e, t, i.s);
            case "eip1271":
              return await i3(e, t, i.s, r, s, n);
            default:
              throw Error(
                "verifySignature failed: Attempted to verify CacaoSignature with unknown type: ".concat(
                  i.t
                )
              );
          }
        }
        async function i8(e, t, i) {
          return (
            (await ea({ hash: i2(t), signature: i })).toLowerCase() ===
            e.toLowerCase()
          );
        }
        async function i3(e, t, i, r, s, n) {
          let o = e5(r);
          if (!o.namespace || !o.reference)
            throw Error(
              "isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ".concat(
                r
              )
            );
          try {
            let o = "0x1626ba7e",
              a = i.substring(2),
              c = (a.length / 2).toString(16).padStart(64, "0"),
              l = (t.startsWith("0x") ? t : i2(t)).substring(2),
              h =
                o +
                l +
                "0000000000000000000000000000000000000000000000000000000000000040" +
                c +
                a,
              d = await fetch(
                ""
                  .concat(n || "https://rpc.walletconnect.org/v1", "/?chainId=")
                  .concat(r, "&projectId=")
                  .concat(s),
                {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify({
                    id: Date.now() + Math.floor(1e3 * Math.random()),
                    jsonrpc: "2.0",
                    method: "eth_call",
                    params: [{ to: e, data: h }, "latest"],
                  }),
                }
              ),
              { result: u } = await d.json();
            return (
              !!u && u.slice(0, o.length).toLowerCase() === o.toLowerCase()
            );
          } catch (e) {
            return console.error("isValidEip1271Signature: ", e), !1;
          }
        }
        function i5(e) {
          let t = new Uint8Array(
            iV(
              (function (e) {
                if (e instanceof Uint8Array) return e;
                if (Array.isArray(e)) return new Uint8Array(e);
                if ("object" == typeof e && null != e && e.data)
                  return new Uint8Array(Object.values(e.data));
                if ("object" == typeof e && e)
                  return new Uint8Array(Object.values(e));
                throw Error(
                  "getNearUint8ArrayFromBytes: Unexpected result type from bytes array"
                );
              })(e)
            )
          );
          return ec.default.encode(t);
        }
        function i4(e) {
          var t;
          let r = ((t = i.Buffer.from(e, "base64")), new eC(void 0).decode(t))
            .txn;
          if (!r)
            throw Error("Invalid signed transaction: missing 'txn' field");
          let s = new eR(void 0).encodeSharedRef(r),
            n = i.Buffer.from("TX"),
            o = iG(i.Buffer.concat([n, i.Buffer.from(s)]));
          return eW.encode(o).replace(/=+$/, "");
        }
        function i9(e) {
          let t = [],
            r = BigInt(e);
          for (; r >= BigInt(128); )
            t.push(Number((r & BigInt(127)) | BigInt(128))), (r >>= BigInt(7));
          return t.push(Number(r)), i.Buffer.from(t);
        }
        var i7 = Object.defineProperty,
          re = Object.defineProperties,
          rt = Object.getOwnPropertyDescriptors,
          ri = Object.getOwnPropertySymbols,
          rr = Object.prototype.hasOwnProperty,
          rs = Object.prototype.propertyIsEnumerable,
          rn = (e, t, i) =>
            t in e
              ? i7(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i);
        let ro = (e) => (null == e ? void 0 : e.split(":")),
          ra = (e) => {
            let t = e && ro(e);
            if (t) return t[2] + ":" + t[3];
          },
          rc = (e) => {
            let t = e && ro(e);
            if (t) return t.pop();
          };
        async function rl(e) {
          let { cacao: t, projectId: i } = e,
            { s: r, p: s } = t,
            n = rh(s, s.iss),
            o = rc(s.iss);
          return await i6(o, n, r, ra(s.iss), i);
        }
        let rh = (e, t) => {
          let i = "".concat(
              e.domain,
              " wants you to sign in with your Ethereum account:"
            ),
            r = rc(t);
          if (!e.aud && !e.uri)
            throw Error(
              "Either `aud` or `uri` is required to construct the message"
            );
          let s = e.statement || void 0,
            n = "URI: ".concat(e.aud || e.uri),
            o = "Version: ".concat(e.version),
            a = "Chain ID: ".concat(
              ((e) => {
                let t = e && ro(e);
                if (t) return e.includes("did:pkh:") ? t[3] : t[1];
              })(t)
            ),
            c = "Nonce: ".concat(e.nonce),
            l = "Issued At: ".concat(e.iat),
            h = e.exp ? "Expiration Time: ".concat(e.exp) : void 0,
            d = e.nbf ? "Not Before: ".concat(e.nbf) : void 0,
            u = e.requestId ? "Request ID: ".concat(e.requestId) : void 0,
            p = e.resources
              ? "Resources:".concat(
                  e.resources.map((e) => "\n- ".concat(e)).join("")
                )
              : void 0,
            f = ry(e.resources);
          return (
            f &&
              (s = (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = arguments.length > 1 ? arguments[1] : void 0;
                rd(t);
                let i =
                  "I further authorize the stated URI to perform the following actions on my behalf: ";
                if (e.includes(i)) return e;
                let r = [],
                  s = 0;
                Object.keys(t.att).forEach((e) => {
                  let i = Object.keys(t.att[e]).map((e) => ({
                    ability: e.split("/")[0],
                    action: e.split("/")[1],
                  }));
                  i.sort((e, t) => e.action.localeCompare(t.action));
                  let n = {};
                  i.forEach((e) => {
                    n[e.ability] || (n[e.ability] = []),
                      n[e.ability].push(e.action);
                  });
                  let o = Object.keys(n).map(
                    (t) => (
                      s++,
                      "("
                        .concat(s, ") '")
                        .concat(t, "': '")
                        .concat(n[t].join("', '"), "' for '")
                        .concat(e, "'.")
                    )
                  );
                  r.push(o.join(", ").replace(".,", "."));
                });
                let n = r.join(" "),
                  o = "".concat(i).concat(n);
                return "".concat(e ? e + " " : "").concat(o);
              })(s, rp(f))),
            [i, r, "", s, "", n, o, a, c, l, h, d, u, p]
              .filter((e) => null != e)
              .join("\n")
          );
        };
        function rd(e) {
          if (!e) throw Error("No recap provided, value is undefined");
          if (!e.att) throw Error("No `att` property found");
          let t = Object.keys(e.att);
          if (!(null != t && t.length))
            throw Error("No resources found in `att` property");
          t.forEach((t) => {
            let i = e.att[t];
            if (Array.isArray(i) || "object" != typeof i)
              throw Error("Resource must be an object: ".concat(t));
            if (!Object.keys(i).length)
              throw Error("Resource object is empty: ".concat(t));
            Object.keys(i).forEach((e) => {
              let t = i[e];
              if (!Array.isArray(t))
                throw Error(
                  "Ability limits "
                    .concat(e, " must be an array of objects, found: ")
                    .concat(t)
                );
              if (!t.length)
                throw Error(
                  "Value of ".concat(
                    e,
                    " is empty array, must be an array with objects"
                  )
                );
              t.forEach((t) => {
                if ("object" != typeof t)
                  throw Error(
                    "Ability limits ("
                      .concat(e, ") must be an array of objects, found: ")
                      .concat(t)
                  );
              });
            });
          });
        }
        function ru(e) {
          return (
            rd(e),
            "urn:recap:".concat(
              i.Buffer.from(JSON.stringify(e))
                .toString("base64")
                .replace(/=/g, "")
            )
          );
        }
        function rp(e) {
          var t;
          let r =
            ((t = e.replace("urn:recap:", "")),
            JSON.parse(i.Buffer.from(t, "base64").toString("utf-8")));
          return rd(r), r;
        }
        function rf(e) {
          var t;
          let i = rp(e);
          rd(i);
          let r = null == (t = i.att) ? void 0 : t.eip155;
          return r ? Object.keys(r).map((e) => e.split("/")[1]) : [];
        }
        function rg(e) {
          let t = rp(e);
          rd(t);
          let i = [];
          return (
            Object.values(t.att).forEach((e) => {
              Object.values(e).forEach((e) => {
                var t;
                null != (t = null == e ? void 0 : e[0]) &&
                  t.chains &&
                  i.push(e[0].chains);
              });
            }),
            [...new Set(i.flat())]
          );
        }
        function ry(e) {
          if (!e) return;
          let t = null == e ? void 0 : e[e.length - 1];
          return t && t.includes("urn:recap:") ? t : void 0;
        }
        function rm(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function rb(e) {
          if ("boolean" != typeof e)
            throw Error("boolean expected, not ".concat(e));
        }
        function rv(e) {
          if (!Number.isSafeInteger(e) || e < 0)
            throw Error("positive integer expected, got " + e);
        }
        function rw(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            i[r - 1] = arguments[r];
          if (!rm(e)) throw Error("Uint8Array expected");
          if (i.length > 0 && !i.includes(e.length))
            throw Error(
              "Uint8Array expected of length " + i + ", got length=" + e.length
            );
        }
        function rE(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }
        function rI(e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }
        function rx() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (let e = 0; e < t.length; e++) t[e].fill(0);
        }
        let rP = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
        function r_(e) {
          if ("string" == typeof e)
            e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e);
          else if (rm(e)) e = rO(e);
          else throw Error("Uint8Array expected, got " + typeof e);
          return e;
        }
        function rS(e, t) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (void 0 === t) return new Uint8Array(e);
          if (t.length !== e)
            throw Error(
              "invalid output length, expected " + e + ", got: " + t.length
            );
          if (i && t.byteOffset % 4 != 0)
            throw Error("invalid output, must be aligned");
          return t;
        }
        function rA(e, t, i, r) {
          if ("function" == typeof e.setBigUint64)
            return e.setBigUint64(t, i, r);
          let s = BigInt(32),
            n = BigInt(0xffffffff),
            o = Number((i >> s) & n),
            a = Number(i & n),
            c = 4 * !!r,
            l = 4 * !r;
          e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
        }
        function rO(e) {
          return Uint8Array.from(e);
        }
        let rC = (e) =>
            Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
          rR = rC("expand 16-byte k"),
          rT = rC("expand 32-byte k"),
          rN = rI(rR),
          rU = rI(rT);
        function rk(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function rD(e) {
          return e.byteOffset % 4 == 0;
        }
        let rq = 0x100000000 - 1,
          rB = new Uint32Array(),
          rj = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
        class rL {
          process(e, t) {
            let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              { h: r, r: s } = this,
              n = s[0],
              o = s[1],
              a = s[2],
              c = s[3],
              l = s[4],
              h = s[5],
              d = s[6],
              u = s[7],
              p = s[8],
              f = s[9],
              g = rj(e, t + 0),
              y = rj(e, t + 2),
              m = rj(e, t + 4),
              b = rj(e, t + 6),
              v = rj(e, t + 8),
              w = rj(e, t + 10),
              E = rj(e, t + 12),
              I = rj(e, t + 14),
              x = r[0] + (8191 & g),
              P = r[1] + (((g >>> 13) | (y << 3)) & 8191),
              _ = r[2] + (((y >>> 10) | (m << 6)) & 8191),
              S = r[3] + (((m >>> 7) | (b << 9)) & 8191),
              A = r[4] + (((b >>> 4) | (v << 12)) & 8191),
              O = r[5] + ((v >>> 1) & 8191),
              C = r[6] + (((v >>> 14) | (w << 2)) & 8191),
              R = r[7] + (((w >>> 11) | (E << 5)) & 8191),
              T = r[8] + (((E >>> 8) | (I << 8)) & 8191),
              N = r[9] + ((I >>> 5) | (2048 * !i)),
              U = 0,
              k = 0 + x * n + 5 * f * P + 5 * p * _ + 5 * u * S + 5 * d * A;
            (U = k >>> 13),
              (k &= 8191),
              (k += 5 * h * O + 5 * l * C + 5 * c * R + 5 * a * T + 5 * o * N),
              (U += k >>> 13),
              (k &= 8191);
            let D = U + x * o + P * n + 5 * f * _ + 5 * p * S + 5 * u * A;
            (U = D >>> 13),
              (D &= 8191),
              (D += 5 * d * O + 5 * h * C + 5 * l * R + 5 * c * T + 5 * a * N),
              (U += D >>> 13),
              (D &= 8191);
            let q = U + x * a + P * o + _ * n + 5 * f * S + 5 * p * A;
            (U = q >>> 13),
              (q &= 8191),
              (q += 5 * u * O + 5 * d * C + 5 * h * R + 5 * l * T + 5 * c * N),
              (U += q >>> 13),
              (q &= 8191);
            let B = U + x * c + P * a + _ * o + S * n + 5 * f * A;
            (U = B >>> 13),
              (B &= 8191),
              (B += 5 * p * O + 5 * u * C + 5 * d * R + 5 * h * T + 5 * l * N),
              (U += B >>> 13),
              (B &= 8191);
            let j = U + x * l + P * c + _ * a + S * o + A * n;
            (U = j >>> 13),
              (j &= 8191),
              (j += 5 * f * O + 5 * p * C + 5 * u * R + 5 * d * T + 5 * h * N),
              (U += j >>> 13),
              (j &= 8191);
            let L = U + x * h + P * l + _ * c + S * a + A * o;
            (U = L >>> 13),
              (L &= 8191),
              (L += O * n + 5 * f * C + 5 * p * R + 5 * u * T + 5 * d * N),
              (U += L >>> 13),
              (L &= 8191);
            let M = U + x * d + P * h + _ * l + S * c + A * a;
            (U = M >>> 13),
              (M &= 8191),
              (M += O * o + C * n + 5 * f * R + 5 * p * T + 5 * u * N),
              (U += M >>> 13),
              (M &= 8191);
            let z = U + x * u + P * d + _ * h + S * l + A * c;
            (U = z >>> 13),
              (z &= 8191),
              (z += O * a + C * o + R * n + 5 * f * T + 5 * p * N),
              (U += z >>> 13),
              (z &= 8191);
            let H = U + x * p + P * u + _ * d + S * h + A * l;
            (U = H >>> 13),
              (H &= 8191),
              (H += O * c + C * a + R * o + T * n + 5 * f * N),
              (U += H >>> 13),
              (H &= 8191);
            let F = U + x * f + P * p + _ * u + S * d + A * h;
            (U = F >>> 13),
              (F &= 8191),
              (F += O * l + C * c + R * a + T * o + N * n),
              (U += F >>> 13),
              (F &= 8191),
              (k = 8191 & (U = ((U = ((U << 2) + U) | 0) + k) | 0)),
              (U >>>= 13),
              (D += U),
              (r[0] = k),
              (r[1] = D),
              (r[2] = q),
              (r[3] = B),
              (r[4] = j),
              (r[5] = L),
              (r[6] = M),
              (r[7] = z),
              (r[8] = H),
              (r[9] = F);
          }
          finalize() {
            let { h: e, pad: t } = this,
              i = new Uint16Array(10),
              r = e[1] >>> 13;
            e[1] &= 8191;
            for (let t = 2; t < 10; t++)
              (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
            (e[0] += 5 * r),
              (r = e[0] >>> 13),
              (e[0] &= 8191),
              (e[1] += r),
              (r = e[1] >>> 13),
              (e[1] &= 8191),
              (e[2] += r),
              (i[0] = e[0] + 5),
              (r = i[0] >>> 13),
              (i[0] &= 8191);
            for (let t = 1; t < 10; t++)
              (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
            i[9] -= 8192;
            let s = (1 ^ r) - 1;
            for (let e = 0; e < 10; e++) i[e] &= s;
            s = ~s;
            for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
            (e[0] = (e[0] | (e[1] << 13)) & 65535),
              (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
              (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
              (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
              (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
              (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
              (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
              (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
            let n = e[0] + t[0];
            e[0] = 65535 & n;
            for (let i = 1; i < 8; i++)
              (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
            rx(i);
          }
          update(e) {
            rE(this), rw((e = r_(e)));
            let { buffer: t, blockLen: i } = this,
              r = e.length;
            for (let s = 0; s < r; ) {
              let n = Math.min(i - this.pos, r - s);
              if (n === i) {
                for (; i <= r - s; s += i) this.process(e, s);
                continue;
              }
              t.set(e.subarray(s, s + n), this.pos),
                (this.pos += n),
                (s += n),
                this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
            }
            return this;
          }
          destroy() {
            rx(this.h, this.r, this.buffer, this.pad);
          }
          digestInto(e) {
            rE(this),
              (function (e, t) {
                rw(e);
                let i = t.outputLen;
                if (e.length < i)
                  throw Error(
                    "digestInto() expects output buffer of length at least " + i
                  );
              })(e, this),
              (this.finished = !0);
            let { buffer: t, h: i } = this,
              { pos: r } = this;
            if (r) {
              for (t[r++] = 1; r < 16; r++) t[r] = 0;
              this.process(t, 0, !0);
            }
            this.finalize();
            let s = 0;
            for (let t = 0; t < 8; t++)
              (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
            return e;
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          constructor(e) {
            (this.blockLen = 16),
              (this.outputLen = 16),
              (this.buffer = new Uint8Array(16)),
              (this.r = new Uint16Array(10)),
              (this.h = new Uint16Array(10)),
              (this.pad = new Uint16Array(8)),
              (this.pos = 0),
              (this.finished = !1),
              rw((e = r_(e)), 32);
            let t = rj(e, 0),
              i = rj(e, 2),
              r = rj(e, 4),
              s = rj(e, 6),
              n = rj(e, 8),
              o = rj(e, 10),
              a = rj(e, 12),
              c = rj(e, 14);
            (this.r[0] = 8191 & t),
              (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
              (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
              (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
              (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
              (this.r[5] = (n >>> 1) & 8190),
              (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
              (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
              (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
              (this.r[9] = (c >>> 5) & 127);
            for (let t = 0; t < 8; t++) this.pad[t] = rj(e, 16 + 2 * t);
          }
        }
        let rM = (function (e) {
            let t = (t, i) => e(i).update(r_(t)).digest(),
              i = e(new Uint8Array(32));
            return (
              (t.outputLen = i.outputLen),
              (t.blockLen = i.blockLen),
              (t.create = (t) => e(t)),
              t
            );
          })((e) => new rL(e)),
          rz = (function (e, t) {
            let {
              allowShortKeys: i,
              extendNonceFn: r,
              counterLength: s,
              counterRight: n,
              rounds: o,
            } = (function (e, t) {
              if (null == t || "object" != typeof t)
                throw Error("options must be defined");
              return Object.assign(e, t);
            })(
              {
                allowShortKeys: !1,
                counterLength: 8,
                counterRight: !1,
                rounds: 20,
              },
              t
            );
            if ("function" != typeof e) throw Error("core must be a function");
            return (
              rv(s),
              rv(o),
              rb(n),
              rb(i),
              function (t, a, c, l) {
                let h =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0;
                rw(t), rw(a), rw(c);
                let d = c.length;
                if (
                  (void 0 === l && (l = new Uint8Array(d)),
                  rw(l),
                  rv(h),
                  h < 0 || h >= rq)
                )
                  throw Error("arx: counter overflow");
                if (l.length < d)
                  throw Error(
                    "arx: output ("
                      .concat(l.length, ") is shorter than data (")
                      .concat(d, ")")
                  );
                let u = [],
                  p = t.length,
                  f,
                  g;
                if (32 === p) u.push((f = rO(t))), (g = rU);
                else if (16 === p && i)
                  (f = new Uint8Array(32)).set(t),
                    f.set(t, 16),
                    (g = rN),
                    u.push(f);
                else
                  throw Error(
                    "arx: invalid 32-byte key, got length=".concat(p)
                  );
                rD(a) || u.push((a = rO(a)));
                let y = rI(f);
                if (r) {
                  if (24 !== a.length)
                    throw Error("arx: extended nonce must be 24 bytes");
                  r(g, y, rI(a.subarray(0, 16)), y), (a = a.subarray(16));
                }
                let m = 16 - s;
                if (m !== a.length)
                  throw Error("arx: nonce must be ".concat(m, " or 16 bytes"));
                if (12 !== m) {
                  let e = new Uint8Array(12);
                  e.set(a, n ? 0 : 12 - a.length), (a = e), u.push(a);
                }
                return (
                  (function (e, t, i, r, s, n, o, a) {
                    let c = s.length,
                      l = new Uint8Array(64),
                      h = rI(l),
                      d = rD(s) && rD(n),
                      u = d ? rI(s) : rB,
                      p = d ? rI(n) : rB;
                    for (let f = 0; f < c; o++) {
                      if ((e(t, i, r, h, o, a), o >= rq))
                        throw Error("arx: counter overflow");
                      let g = Math.min(64, c - f);
                      if (d && 64 === g) {
                        let e = f / 4;
                        if (f % 4 != 0)
                          throw Error("arx: invalid block position");
                        for (let t = 0, i; t < 16; t++)
                          p[(i = e + t)] = u[i] ^ h[t];
                        f += 64;
                        continue;
                      }
                      for (let e = 0, t; e < g; e++)
                        n[(t = f + e)] = s[t] ^ l[e];
                      f += g;
                    }
                  })(e, g, y, rI(a), c, l, h, o),
                  rx(...u),
                  l
                );
              }
            );
          })(
            function (e, t, i, r, s) {
              let n =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 20,
                o = e[0],
                a = e[1],
                c = e[2],
                l = e[3],
                h = t[0],
                d = t[1],
                u = t[2],
                p = t[3],
                f = t[4],
                g = t[5],
                y = t[6],
                m = t[7],
                b = i[0],
                v = i[1],
                w = i[2],
                E = o,
                I = a,
                x = c,
                P = l,
                _ = h,
                S = d,
                A = u,
                O = p,
                C = f,
                R = g,
                T = y,
                N = m,
                U = s,
                k = b,
                D = v,
                q = w;
              for (let e = 0; e < n; e += 2)
                (C = (C + (U = rk(U ^ (E = (E + _) | 0), 16))) | 0),
                  (E = (E + (_ = rk(_ ^ C, 12))) | 0),
                  (C = (C + (U = rk(U ^ E, 8))) | 0),
                  (_ = rk(_ ^ C, 7)),
                  (R = (R + (k = rk(k ^ (I = (I + S) | 0), 16))) | 0),
                  (I = (I + (S = rk(S ^ R, 12))) | 0),
                  (R = (R + (k = rk(k ^ I, 8))) | 0),
                  (S = rk(S ^ R, 7)),
                  (T = (T + (D = rk(D ^ (x = (x + A) | 0), 16))) | 0),
                  (x = (x + (A = rk(A ^ T, 12))) | 0),
                  (T = (T + (D = rk(D ^ x, 8))) | 0),
                  (A = rk(A ^ T, 7)),
                  (N = (N + (q = rk(q ^ (P = (P + O) | 0), 16))) | 0),
                  (P = (P + (O = rk(O ^ N, 12))) | 0),
                  (N = (N + (q = rk(q ^ P, 8))) | 0),
                  (O = rk(O ^ N, 7)),
                  (T = (T + (q = rk(q ^ (E = (E + S) | 0), 16))) | 0),
                  (E = (E + (S = rk(S ^ T, 12))) | 0),
                  (T = (T + (q = rk(q ^ E, 8))) | 0),
                  (S = rk(S ^ T, 7)),
                  (N = (N + (U = rk(U ^ (I = (I + A) | 0), 16))) | 0),
                  (I = (I + (A = rk(A ^ N, 12))) | 0),
                  (N = (N + (U = rk(U ^ I, 8))) | 0),
                  (A = rk(A ^ N, 7)),
                  (C = (C + (k = rk(k ^ (x = (x + O) | 0), 16))) | 0),
                  (x = (x + (O = rk(O ^ C, 12))) | 0),
                  (C = (C + (k = rk(k ^ x, 8))) | 0),
                  (O = rk(O ^ C, 7)),
                  (R = (R + (D = rk(D ^ (P = (P + _) | 0), 16))) | 0),
                  (P = (P + (_ = rk(_ ^ R, 12))) | 0),
                  (R = (R + (D = rk(D ^ P, 8))) | 0),
                  (_ = rk(_ ^ R, 7));
              let B = 0;
              (r[B++] = (o + E) | 0),
                (r[B++] = (a + I) | 0),
                (r[B++] = (c + x) | 0),
                (r[B++] = (l + P) | 0),
                (r[B++] = (h + _) | 0),
                (r[B++] = (d + S) | 0),
                (r[B++] = (u + A) | 0),
                (r[B++] = (p + O) | 0),
                (r[B++] = (f + C) | 0),
                (r[B++] = (g + R) | 0),
                (r[B++] = (y + T) | 0),
                (r[B++] = (m + N) | 0),
                (r[B++] = (s + U) | 0),
                (r[B++] = (b + k) | 0),
                (r[B++] = (v + D) | 0),
                (r[B++] = (w + q) | 0);
            },
            { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
          ),
          rH = new Uint8Array(16),
          rF = (e, t) => {
            e.update(t);
            let i = t.length % 16;
            i && e.update(rH.subarray(i));
          },
          rV = new Uint8Array(32);
        function rK(e, t, i, r, s) {
          let n = e(t, i, rV),
            o = rM.create(n);
          s && rF(o, s), rF(o, r);
          let a = (function (e, t, i) {
            rb(i);
            let r = new Uint8Array(16),
              s = new DataView(r.buffer, r.byteOffset, r.byteLength);
            return rA(s, 0, BigInt(t), i), rA(s, 8, BigInt(e), i), r;
          })(r.length, s ? s.length : 0, !0);
          o.update(a);
          let c = o.digest();
          return rx(n, a), c;
        }
        let rW = ((e, t) => {
          function i(i) {
            for (
              var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              s[n - 1] = arguments[n];
            if ((rw(i), !rP))
              throw Error("Non little-endian hardware is not yet supported");
            if (void 0 !== e.nonceLength) {
              let t = s[0];
              if (!t) throw Error("nonce / iv required");
              e.varSizeNonce ? rw(t) : rw(t, e.nonceLength);
            }
            let o = e.tagLength;
            o && void 0 !== s[1] && rw(s[1]);
            let a = t(i, ...s),
              c = (e, t) => {
                if (void 0 !== t) {
                  if (2 !== e) throw Error("cipher output not supported");
                  rw(t);
                }
              },
              l = !1;
            return {
              encrypt(e, t) {
                if (l)
                  throw Error("cannot encrypt() twice with same key + nonce");
                return (l = !0), rw(e), c(a.encrypt.length, t), a.encrypt(e, t);
              },
              decrypt(e, t) {
                if ((rw(e), o && e.length < o))
                  throw Error(
                    "invalid ciphertext length: smaller than tagLength=" + o
                  );
                return c(a.decrypt.length, t), a.decrypt(e, t);
              },
            };
          }
          return Object.assign(i, e), i;
        })(
          { blockSize: 64, nonceLength: 12, tagLength: 16 },
          ((e) => (t, i, r) => ({
            encrypt(s, n) {
              let o = s.length;
              (n = rS(o + 16, n, !1)).set(s);
              let a = n.subarray(0, -16);
              e(t, i, a, a, 1);
              let c = rK(e, t, i, a, r);
              return n.set(c, o), rx(c), n;
            },
            decrypt(s, n) {
              n = rS(s.length - 16, n, !1);
              let o = s.subarray(0, -16),
                a = s.subarray(-16),
                c = rK(e, t, i, o, r);
              if (
                !(function (e, t) {
                  if (e.length !== t.length) return !1;
                  let i = 0;
                  for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                  return 0 === i;
                })(a, c)
              )
                throw Error("invalid tag");
              return n.set(s.subarray(0, -16)), e(t, i, n, n, 1), rx(c), n;
            },
          }))(rz)
        );
        class rG extends ic {
          update(e) {
            return t$(this), this.iHash.update(e), this;
          }
          digestInto(e) {
            t$(this),
              tZ(e, this.outputLen),
              (this.finished = !0),
              this.iHash.digestInto(e),
              this.oHash.update(e),
              this.oHash.digestInto(e),
              this.destroy();
          }
          digest() {
            let e = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(e), e;
          }
          _cloneInto(e) {
            e || (e = Object.create(Object.getPrototypeOf(this), {}));
            let {
              oHash: t,
              iHash: i,
              finished: r,
              destroyed: s,
              blockLen: n,
              outputLen: o,
            } = this;
            return (
              (e.finished = r),
              (e.destroyed = s),
              (e.blockLen = n),
              (e.outputLen = o),
              (e.oHash = t._cloneInto(e.oHash)),
              (e.iHash = i._cloneInto(e.iHash)),
              e
            );
          }
          clone() {
            return this._cloneInto();
          }
          destroy() {
            (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
          }
          constructor(e, t) {
            super(), (this.finished = !1), (this.destroyed = !1), tQ(e);
            let i = io(t);
            if (
              ((this.iHash = e.create()),
              "function" != typeof this.iHash.update)
            )
              throw Error(
                "Expected instance of class which extends utils.Hash"
              );
            (this.blockLen = this.iHash.blockLen),
              (this.outputLen = this.iHash.outputLen);
            let r = this.blockLen,
              s = new Uint8Array(r);
            s.set(i.length > r ? e.create().update(i).digest() : i);
            for (let e = 0; e < s.length; e++) s[e] ^= 54;
            this.iHash.update(s), (this.oHash = e.create());
            for (let e = 0; e < s.length; e++) s[e] ^= 106;
            this.oHash.update(s), t2(s);
          }
        }
        let rJ = (e, t, i) => new rG(e, t).update(i).digest();
        rJ.create = (e, t) => new rG(e, t);
        let rY = Uint8Array.from([0]),
          rX = Uint8Array.of(),
          rZ = BigInt(0),
          rQ = BigInt(1);
        function r$(e, t) {
          if ("boolean" != typeof t)
            throw Error(e + " boolean expected, got " + t);
        }
        function r0(e) {
          let t = e.toString(16);
          return 1 & t.length ? "0" + t : t;
        }
        function r1(e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          return "" === e ? rZ : BigInt("0x" + e);
        }
        function r2(e) {
          return tZ(e), r1(it(Uint8Array.from(e).reverse()));
        }
        function r6(e, t) {
          return is(e.toString(16).padStart(2 * t, "0"));
        }
        function r8(e, t) {
          return r6(e, t).reverse();
        }
        function r3(e, t, i) {
          let r;
          if ("string" == typeof t)
            try {
              r = is(t);
            } catch (t) {
              throw Error(e + " must be hex string or Uint8Array, cause: " + t);
            }
          else if (tY(t)) r = Uint8Array.from(t);
          else throw Error(e + " must be hex string or Uint8Array");
          let s = r.length;
          if ("number" == typeof i && s !== i)
            throw Error(e + " of length " + i + " expected, got " + s);
          return r;
        }
        let r5 = (e) => "bigint" == typeof e && rZ <= e;
        function r4(e, t, i, r) {
          if (!(r5(t) && r5(i) && r5(r)) || !(i <= t) || !(t < r))
            throw Error(
              "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
            );
        }
        let r9 = (e) => (rQ << BigInt(e)) - rQ;
        function r7(e, t) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!e || "object" != typeof e)
            throw Error("expected valid options object");
          function r(t, i, r) {
            let s = e[t];
            if (r && void 0 === s) return;
            let n = typeof s;
            if (n !== i || null === s)
              throw Error(
                'param "'
                  .concat(t, '" is invalid: expected ')
                  .concat(i, ", got ")
                  .concat(n)
              );
          }
          Object.entries(t).forEach((e) => {
            let [t, i] = e;
            return r(t, i, !1);
          }),
            Object.entries(i).forEach((e) => {
              let [t, i] = e;
              return r(t, i, !0);
            });
        }
        function se(e) {
          let t = new WeakMap();
          return function (i) {
            for (
              var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              s[n - 1] = arguments[n];
            let o = t.get(i);
            if (void 0 !== o) return o;
            let a = e(i, ...s);
            return t.set(i, a), a;
          };
        }
        let st = BigInt(0),
          si = BigInt(1),
          sr = BigInt(2),
          ss = BigInt(3),
          sn = BigInt(4),
          so = BigInt(5),
          sa = BigInt(8);
        function sc(e, t) {
          let i = e % t;
          return i >= st ? i : t + i;
        }
        function sl(e, t, i) {
          let r = e;
          for (; t-- > st; ) (r *= r), (r %= i);
          return r;
        }
        function sh(e, t) {
          if (e === st) throw Error("invert: expected non-zero number");
          if (t <= st)
            throw Error("invert: expected positive modulus, got " + t);
          let i = sc(e, t),
            r = t,
            s = st,
            n = si;
          for (; i !== st; ) {
            let e = r / i,
              t = r % i,
              o = s - n * e;
            (r = i), (i = t), (s = n), (n = o);
          }
          if (r !== si) throw Error("invert: does not exist");
          return sc(s, t);
        }
        function sd(e, t) {
          let i = (e.ORDER + si) / sn,
            r = e.pow(t, i);
          if (!e.eql(e.sqr(r), t)) throw Error("Cannot find square root");
          return r;
        }
        function su(e, t) {
          let i = (e.ORDER - so) / sa,
            r = e.mul(t, sr),
            s = e.pow(r, i),
            n = e.mul(t, s),
            o = e.mul(e.mul(n, sr), s),
            a = e.mul(n, e.sub(o, e.ONE));
          if (!e.eql(e.sqr(a), t)) throw Error("Cannot find square root");
          return a;
        }
        let sp = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
        function sf(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Array(t.length).fill(i ? e.ZERO : void 0),
            s = t.reduce(
              (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
              e.ONE
            ),
            n = e.inv(s);
          return (
            t.reduceRight(
              (t, i, s) =>
                e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i)),
              n
            ),
            r
          );
        }
        function sg(e, t) {
          let i = (e.ORDER - si) / sr,
            r = e.pow(t, i),
            s = e.eql(r, e.ONE),
            n = e.eql(r, e.ZERO),
            o = e.eql(r, e.neg(e.ONE));
          if (!s && !n && !o) throw Error("invalid Legendre symbol result");
          return s ? 1 : n ? 0 : -1;
        }
        function sy(e, t) {
          let i,
            r,
            s,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= st)
            throw Error("invalid field: expected ORDER > 0, got " + e);
          if ("object" == typeof t && null != t) {
            if (o.sqrt || n)
              throw Error("cannot specify opts in two arguments");
            t.BITS && (i = t.BITS),
              t.sqrt && (r = t.sqrt),
              "boolean" == typeof t.isLE && (n = t.isLE);
          } else "number" == typeof t && (i = t), o.sqrt && (r = o.sqrt);
          let { nBitLength: a, nByteLength: c } = (function (e, t) {
            void 0 !== t && tX(t);
            let i = void 0 !== t ? t : e.toString(2).length,
              r = Math.ceil(i / 8);
            return { nBitLength: i, nByteLength: r };
          })(e, i);
          if (c > 2048)
            throw Error("invalid field: expected ORDER of <= 2048 bytes");
          let l = Object.freeze({
            ORDER: e,
            isLE: n,
            BITS: a,
            BYTES: c,
            MASK: r9(a),
            ZERO: st,
            ONE: si,
            create: (t) => sc(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t)
                throw Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return st <= t && t < e;
            },
            is0: (e) => e === st,
            isValidNot0: (e) => !l.is0(e) && l.isValid(e),
            isOdd: (e) => (e & si) === si,
            neg: (t) => sc(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => sc(t * t, e),
            add: (t, i) => sc(t + i, e),
            sub: (t, i) => sc(t - i, e),
            mul: (t, i) => sc(t * i, e),
            pow: (e, t) =>
              (function (e, t, i) {
                if (i < st)
                  throw Error("invalid exponent, negatives unsupported");
                if (i === st) return e.ONE;
                if (i === si) return t;
                let r = e.ONE,
                  s = t;
                for (; i > st; )
                  i & si && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= si);
                return r;
              })(l, e, t),
            div: (t, i) => sc(t * sh(i, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => sh(t, e),
            sqrt:
              r ||
              ((t) => (
                s ||
                  (s =
                    e % sn === ss
                      ? sd
                      : e % sa === so
                      ? su
                      : (function (e) {
                          if (e < BigInt(3))
                            throw Error("sqrt is not defined for small field");
                          let t = e - si,
                            i = 0;
                          for (; t % sr === st; ) (t /= sr), i++;
                          let r = sr,
                            s = sy(e);
                          for (; 1 === sg(s, r); )
                            if (r++ > 1e3)
                              throw Error(
                                "Cannot find square root: probably non-prime P"
                              );
                          if (1 === i) return sd;
                          let n = s.pow(r, t),
                            o = (t + si) / sr;
                          return function (e, r) {
                            if (e.is0(r)) return r;
                            if (1 !== sg(e, r))
                              throw Error("Cannot find square root");
                            let s = i,
                              a = e.mul(e.ONE, n),
                              c = e.pow(r, t),
                              l = e.pow(r, o);
                            for (; !e.eql(c, e.ONE); ) {
                              if (e.is0(c)) return e.ZERO;
                              let t = 1,
                                i = e.sqr(c);
                              for (; !e.eql(i, e.ONE); )
                                if ((t++, (i = e.sqr(i)), t === s))
                                  throw Error("Cannot find square root");
                              let r = si << BigInt(s - t - 1),
                                n = e.pow(a, r);
                              (s = t),
                                (a = e.sqr(n)),
                                (c = e.mul(c, a)),
                                (l = e.mul(l, n));
                            }
                            return l;
                          };
                        })(e)),
                s(l, t)
              )),
            toBytes: (e) => (n ? r8(e, c) : r6(e, c)),
            fromBytes: (e) => {
              if (e.length !== c)
                throw Error(
                  "Field.fromBytes: expected " + c + " bytes, got " + e.length
                );
              return n ? r2(e) : r1(it(e));
            },
            invertBatch: (e) => sf(l, e),
            cmov: (e, t, i) => (i ? t : e),
          });
          return Object.freeze(l);
        }
        function sm(e) {
          if ("bigint" != typeof e) throw Error("field order must be bigint");
          return Math.ceil(e.toString(2).length / 8);
        }
        function sb(e) {
          let t = sm(e);
          return t + Math.ceil(t / 2);
        }
        let sv = BigInt(0),
          sw = BigInt(1);
        function sE(e, t) {
          let i = t.negate();
          return e ? i : t;
        }
        function sI(e, t) {
          if (!Number.isSafeInteger(e) || e <= 0 || e > t)
            throw Error(
              "invalid window size, expected [1.." + t + "], got W=" + e
            );
        }
        function sx(e, t) {
          sI(e, t);
          let i = Math.ceil(t / e) + 1,
            r = 2 ** (e - 1),
            s = 2 ** e;
          return {
            windows: i,
            windowSize: r,
            mask: r9(e),
            maxNumber: s,
            shiftBy: BigInt(e),
          };
        }
        function sP(e, t, i) {
          let { windowSize: r, mask: s, maxNumber: n, shiftBy: o } = i,
            a = Number(e & s),
            c = e >> o;
          a > r && ((a -= n), (c += sw));
          let l = t * r;
          return {
            nextN: c,
            offset: l + Math.abs(a) - 1,
            isZero: 0 === a,
            isNeg: a < 0,
            isNegF: t % 2 != 0,
            offsetF: l,
          };
        }
        let s_ = new WeakMap(),
          sS = new WeakMap();
        function sA(e) {
          return sS.get(e) || 1;
        }
        function sO(e) {
          if (e !== sv) throw Error("invalid wNAF");
        }
        function sC(e, t) {
          if (!t) return sy(e);
          if (t.ORDER !== e)
            throw Error("Field.ORDER must match order: Fp == p, Fn == n");
          return (
            r7(
              t,
              sp.reduce((e, t) => ((e[t] = "function"), e), {
                ORDER: "bigint",
                MASK: "bigint",
                BYTES: "number",
                BITS: "number",
              })
            ),
            t
          );
        }
        BigInt(0), BigInt(1), BigInt(2), BigInt(8);
        let sR = BigInt(0),
          sT = BigInt(1),
          sN = BigInt(2);
        BigInt(0);
        let sU = BigInt(1),
          sk = BigInt(2),
          sD = BigInt(3),
          sq = BigInt(5),
          sB = BigInt(8),
          sj = {
            p: BigInt(
              "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
            ),
            n: BigInt(
              "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
            ),
            h: sB,
            a: BigInt(
              "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
            ),
            d: BigInt(
              "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
            ),
            Gx: BigInt(
              "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
            ),
            Gy: BigInt(
              "0x6666666666666666666666666666666666666666666666666666666666666658"
            ),
          };
        function sL(e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        }
        let sM = (() => {
          let e = sj.p;
          return (function (e) {
            let {
                P: t,
                type: i,
                adjustScalarBytes: r,
                powPminus2: s,
                randomBytes: n,
              } = (r7(e, {
                adjustScalarBytes: "function",
                powPminus2: "function",
              }),
              Object.freeze({ ...e })),
              o = "x25519" === i;
            if (!o && "x448" !== i) throw Error("invalid type");
            let a = n || ih,
              c = o ? 255 : 448,
              l = o ? 32 : 56,
              h = BigInt(o ? 9 : 5),
              d = BigInt(o ? 121665 : 39081),
              u = o ? sN ** BigInt(254) : sN ** BigInt(447),
              p =
                u +
                (o
                  ? BigInt(8) * sN ** BigInt(251) - sT
                  : BigInt(4) * sN ** BigInt(445) - sT) +
                sT,
              f = (e) => sc(e, t),
              g = r8(f(h), l);
            function y(e, i) {
              let n = (function (e, i) {
                r4("u", e, sR, t), r4("scalar", i, u, p);
                let r = sT,
                  n = sR,
                  o = e,
                  a = sT,
                  l = sR;
                for (let t = BigInt(c - 1); t >= sR; t--) {
                  let s = (i >> t) & sT;
                  (l ^= s),
                    ({ x_2: r, x_3: o } = b(l, r, o)),
                    ({ x_2: n, x_3: a } = b(l, n, a)),
                    (l = s);
                  let c = r + n,
                    h = f(c * c),
                    u = r - n,
                    p = f(u * u),
                    g = h - p,
                    y = o + a,
                    m = f((o - a) * c),
                    v = f(y * u),
                    w = m + v,
                    E = m - v;
                  (o = f(w * w)),
                    (a = f(e * f(E * E))),
                    (r = f(h * p)),
                    (n = f(g * (h + f(d * g))));
                }
                return (
                  ({ x_2: r, x_3: o } = b(l, r, o)),
                  ({ x_2: n, x_3: a } = b(l, n, a)),
                  f(r * s(n))
                );
              })(
                (function (e) {
                  let t = r3("u coordinate", e, l);
                  return o && (t[31] &= 127), f(r2(t));
                })(i),
                r2(r(r3("scalar", e, l)))
              );
              if (n === sR)
                throw Error("invalid private or public key received");
              return r8(f(n), l);
            }
            function m(e) {
              return y(e, g);
            }
            function b(e, t, i) {
              let r = f(e * (t - i));
              return { x_2: (t = f(t - r)), x_3: (i = f(i + r)) };
            }
            return {
              scalarMult: y,
              scalarMultBase: m,
              getSharedSecret: (e, t) => y(e, t),
              getPublicKey: (e) => m(e),
              utils: { randomPrivateKey: () => a(l) },
              GuBytes: g.slice(),
            };
          })({
            P: e,
            type: "x25519",
            powPminus2: (t) => {
              let { pow_p_5_8: i, b2: r } = (function (e) {
                let t = BigInt(10),
                  i = BigInt(20),
                  r = BigInt(40),
                  s = BigInt(80),
                  n = sj.p,
                  o = (((e * e) % n) * e) % n,
                  a = (sl(o, sk, n) * o) % n,
                  c = (sl(a, sU, n) * e) % n,
                  l = (sl(c, sq, n) * c) % n,
                  h = (sl(l, t, n) * l) % n,
                  d = (sl(h, i, n) * h) % n,
                  u = (sl(d, r, n) * d) % n,
                  p = (sl(u, s, n) * u) % n,
                  f = (sl(p, s, n) * u) % n,
                  g = (sl(f, t, n) * l) % n;
                return { pow_p_5_8: (sl(g, sk, n) * e) % n, b2: o };
              })(t);
              return sc(sl(i, sD, e) * r, e);
            },
            adjustScalarBytes: sL,
          });
        })();
        function sz(e) {
          void 0 !== e.lowS && r$("lowS", e.lowS),
            void 0 !== e.prehash && r$("prehash", e.prehash);
        }
        let sH = {
            Err: class extends Error {
              constructor(e = "") {
                super(e);
              }
            },
            _tlv: {
              encode: (e, t) => {
                let { Err: i } = sH;
                if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
                if (1 & t.length) throw new i("tlv.encode: unpadded data");
                let r = t.length / 2,
                  s = r0(r);
                if ((s.length / 2) & 128)
                  throw new i("tlv.encode: long form length too big");
                let n = r > 127 ? r0((s.length / 2) | 128) : "";
                return r0(e) + n + s + t;
              },
              decode(e, t) {
                let { Err: i } = sH,
                  r = 0;
                if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
                if (t.length < 2 || t[r++] !== e)
                  throw new i("tlv.decode: wrong tlv");
                let s = t[r++],
                  n = 0;
                if (128 & s) {
                  let e = 127 & s;
                  if (!e)
                    throw new i(
                      "tlv.decode(long): indefinite length not supported"
                    );
                  if (e > 4)
                    throw new i("tlv.decode(long): byte length is too big");
                  let o = t.subarray(r, r + e);
                  if (o.length !== e)
                    throw new i("tlv.decode: length bytes not complete");
                  if (0 === o[0])
                    throw new i("tlv.decode(long): zero leftmost byte");
                  for (let e of o) n = (n << 8) | e;
                  if (((r += e), n < 128))
                    throw new i("tlv.decode(long): not minimal encoding");
                } else n = s;
                let o = t.subarray(r, r + n);
                if (o.length !== n)
                  throw new i("tlv.decode: wrong value length");
                return { v: o, l: t.subarray(r + n) };
              },
            },
            _int: {
              encode(e) {
                let { Err: t } = sH;
                if (e < sF)
                  throw new t("integer: negative integers are not allowed");
                let i = r0(e);
                if (
                  (8 & Number.parseInt(i[0], 16) && (i = "00" + i),
                  1 & i.length)
                )
                  throw new t("unexpected DER parsing assertion: unpadded hex");
                return i;
              },
              decode(e) {
                let { Err: t } = sH;
                if (128 & e[0])
                  throw new t("invalid signature integer: negative");
                if (0 === e[0] && !(128 & e[1]))
                  throw new t(
                    "invalid signature integer: unnecessary leading zero"
                  );
                return r1(it(e));
              },
            },
            toSig(e) {
              let { Err: t, _int: i, _tlv: r } = sH,
                s = r3("signature", e),
                { v: n, l: o } = r.decode(48, s);
              if (o.length)
                throw new t("invalid signature: left bytes after parsing");
              let { v: a, l: c } = r.decode(2, n),
                { v: l, l: h } = r.decode(2, c);
              if (h.length)
                throw new t("invalid signature: left bytes after parsing");
              return { r: i.decode(a), s: i.decode(l) };
            },
            hexFromSig(e) {
              let { _tlv: t, _int: i } = sH,
                r = t.encode(2, i.encode(e.r)),
                s = t.encode(2, i.encode(e.s));
              return t.encode(48, r + s);
            },
          },
          sF = BigInt(0),
          sV = BigInt(1),
          sK = BigInt(2),
          sW = BigInt(3),
          sG = BigInt(4);
        function sJ(e, t, i) {
          let { BYTES: r } = e;
          return function (s) {
            let n;
            if ("bigint" == typeof s) n = s;
            else {
              let i = r3("private key", s);
              if (t) {
                if (!t.includes(2 * i.length))
                  throw Error("invalid private key");
                let e = new Uint8Array(r);
                e.set(i, e.length - i.length), (i = e);
              }
              try {
                n = e.fromBytes(i);
              } catch (e) {
                throw Error(
                  "invalid private key: expected ui8a of size "
                    .concat(r, ", got ")
                    .concat(typeof s)
                );
              }
            }
            if ((i && (n = e.create(n)), !e.isValidNot0(n)))
              throw Error("invalid private key: out of range [1..N-1]");
            return n;
          };
        }
        function sY(e) {
          return Uint8Array.of(e ? 2 : 3);
        }
        function sX(e, t) {
          let i = (t) =>
            (function (e) {
              let {
                  CURVE: t,
                  curveOpts: i,
                  ecdsaOpts: r,
                } = (function (e) {
                  let { CURVE: t, curveOpts: i } = (function (e) {
                    let t = {
                        a: e.a,
                        b: e.b,
                        p: e.Fp.ORDER,
                        n: e.n,
                        h: e.h,
                        Gx: e.Gx,
                        Gy: e.Gy,
                      },
                      i = {
                        Fp: e.Fp,
                        Fn: sy(t.n, e.nBitLength),
                        allowedPrivateKeyLengths: e.allowedPrivateKeyLengths,
                        allowInfinityPoint: e.allowInfinityPoint,
                        endo: e.endo,
                        wrapPrivateKey: e.wrapPrivateKey,
                        isTorsionFree: e.isTorsionFree,
                        clearCofactor: e.clearCofactor,
                        fromBytes: e.fromBytes,
                        toBytes: e.toBytes,
                      };
                    return { CURVE: t, curveOpts: i };
                  })(e);
                  return {
                    CURVE: t,
                    curveOpts: i,
                    ecdsaOpts: {
                      hash: e.hash,
                      hmac: e.hmac,
                      randomBytes: e.randomBytes,
                      lowS: e.lowS,
                      bits2int: e.bits2int,
                      bits2int_modN: e.bits2int_modN,
                    },
                  };
                })(e),
                s = (function (e, t) {
                  let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  r7(
                    t,
                    { hash: "function" },
                    {
                      hmac: "function",
                      lowS: "boolean",
                      randomBytes: "function",
                      bits2int: "function",
                      bits2int_modN: "function",
                    }
                  );
                  let r = t.randomBytes || ih,
                    s =
                      t.hmac ||
                      function (e) {
                        for (
                          var i = arguments.length,
                            r = Array(i > 1 ? i - 1 : 0),
                            s = 1;
                          s < i;
                          s++
                        )
                          r[s - 1] = arguments[s];
                        return rJ(t.hash, e, ia(...r));
                      },
                    { Fp: n, Fn: o } = e,
                    { ORDER: a, BITS: c } = o;
                  function l(e, t) {
                    if (!o.isValidNot0(t))
                      throw Error(
                        "invalid signature ".concat(
                          e,
                          ": out of range 1..CURVE.n"
                        )
                      );
                  }
                  class h {
                    static fromCompact(e) {
                      let t = o.BYTES,
                        i = r3("compactSignature", e, 2 * t);
                      return new h(
                        o.fromBytes(i.subarray(0, t)),
                        o.fromBytes(i.subarray(t, 2 * t))
                      );
                    }
                    static fromDER(e) {
                      let { r: t, s: i } = sH.toSig(r3("DER", e));
                      return new h(t, i);
                    }
                    assertValidity() {}
                    addRecoveryBit(e) {
                      return new h(this.r, this.s, e);
                    }
                    recoverPublicKey(t) {
                      let i = n.ORDER,
                        { r: r, s: s, recovery: c } = this;
                      if (null == c || ![0, 1, 2, 3].includes(c))
                        throw Error("recovery id invalid");
                      if (a * sK < i && c > 1)
                        throw Error("recovery id is ambiguous for h>1 curve");
                      let l = 2 === c || 3 === c ? r + a : r;
                      if (!n.isValid(l))
                        throw Error("recovery id 2 or 3 invalid");
                      let h = n.toBytes(l),
                        d = e.fromHex(ia(sY((1 & c) == 0), h)),
                        u = o.inv(l),
                        p = f(r3("msgHash", t)),
                        g = o.create(-p * u),
                        y = o.create(s * u),
                        m = e.BASE.multiplyUnsafe(g).add(d.multiplyUnsafe(y));
                      if (m.is0()) throw Error("point at infinify");
                      return m.assertValidity(), m;
                    }
                    hasHighS() {
                      return this.s > a >> sV;
                    }
                    normalizeS() {
                      return this.hasHighS()
                        ? new h(this.r, o.neg(this.s), this.recovery)
                        : this;
                    }
                    toBytes(e) {
                      if ("compact" === e)
                        return ia(o.toBytes(this.r), o.toBytes(this.s));
                      if ("der" === e) return is(sH.hexFromSig(this));
                      throw Error("invalid format");
                    }
                    toDERRawBytes() {
                      return this.toBytes("der");
                    }
                    toDERHex() {
                      return it(this.toBytes("der"));
                    }
                    toCompactRawBytes() {
                      return this.toBytes("compact");
                    }
                    toCompactHex() {
                      return it(this.toBytes("compact"));
                    }
                    constructor(e, t, i) {
                      l("r", e),
                        l("s", t),
                        (this.r = e),
                        (this.s = t),
                        null != i && (this.recovery = i),
                        Object.freeze(this);
                    }
                  }
                  let d = sJ(o, i.allowedPrivateKeyLengths, i.wrapPrivateKey);
                  function u(t) {
                    if ("bigint" == typeof t) return !1;
                    if (t instanceof e) return !0;
                    let r = r3("key", t).length,
                      s = n.BYTES,
                      a = s + 1;
                    if (!(i.allowedPrivateKeyLengths || o.BYTES === a))
                      return r === a || r === 2 * s + 1;
                  }
                  let p =
                      t.bits2int ||
                      function (e) {
                        if (e.length > 8192) throw Error("input is too large");
                        let t = r1(it(e)),
                          i = 8 * e.length - c;
                        return i > 0 ? t >> BigInt(i) : t;
                      },
                    f =
                      t.bits2int_modN ||
                      function (e) {
                        return o.create(p(e));
                      },
                    g = r9(c);
                  function y(e) {
                    return r4("num < 2^" + c, e, sF, g), o.toBytes(e);
                  }
                  let m = { lowS: t.lowS, prehash: !1 },
                    b = { lowS: t.lowS, prehash: !1 };
                  return (
                    e.BASE.precompute(8),
                    Object.freeze({
                      getPublicKey: function (t) {
                        let i =
                          !(arguments.length > 1) ||
                          void 0 === arguments[1] ||
                          arguments[1];
                        return e.fromPrivateKey(t).toBytes(i);
                      },
                      getSharedSecret: function (t, i) {
                        let r =
                          !(arguments.length > 2) ||
                          void 0 === arguments[2] ||
                          arguments[2];
                        if (!0 === u(t))
                          throw Error("first arg must be private key");
                        if (!1 === u(i))
                          throw Error("second arg must be public key");
                        return e.fromHex(i).multiply(d(t)).toBytes(r);
                      },
                      sign: function (i, c) {
                        let l =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : m,
                          { seed: u, k2sig: g } = (function (i, s) {
                            let c =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : m;
                            if (["recovered", "canonical"].some((e) => e in c))
                              throw Error(
                                "sign() legacy options not supported"
                              );
                            let { hash: l } = t,
                              { lowS: u, prehash: g, extraEntropy: b } = c;
                            null == u && (u = !0),
                              (i = r3("msgHash", i)),
                              sz(c),
                              g && (i = r3("prehashed msgHash", l(i)));
                            let v = f(i),
                              w = d(s),
                              E = [y(w), y(v)];
                            if (null != b && !1 !== b) {
                              let e = !0 === b ? r(n.BYTES) : b;
                              E.push(r3("extraEntropy", e));
                            }
                            return {
                              seed: ia(...E),
                              k2sig: function (t) {
                                var i;
                                let r = p(t);
                                if (!o.isValidNot0(r)) return;
                                let s = o.inv(r),
                                  n = e.BASE.multiply(r).toAffine(),
                                  c = o.create(n.x);
                                if (c === sF) return;
                                let l = o.create(s * o.create(v + c * w));
                                if (l === sF) return;
                                let d = (2 * (n.x !== c)) | Number(n.y & sV),
                                  f = l;
                                return (
                                  u &&
                                    l > a >> sV &&
                                    ((f = (i = l) > a >> sV ? o.neg(i) : i),
                                    (d ^= 1)),
                                  new h(c, f, d)
                                );
                              },
                            };
                          })(i, c, l);
                        return (function (e, t, i) {
                          if ("number" != typeof e || e < 2)
                            throw Error("hashLen must be a number");
                          if ("number" != typeof t || t < 2)
                            throw Error("qByteLen must be a number");
                          if ("function" != typeof i)
                            throw Error("hmacFn must be a function");
                          let r = (e) => new Uint8Array(e),
                            s = (e) => Uint8Array.of(e),
                            n = r(e),
                            o = r(e),
                            a = 0,
                            c = () => {
                              n.fill(1), o.fill(0), (a = 0);
                            },
                            l = function () {
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              return i(o, n, ...t);
                            },
                            h = function () {
                              let e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : r(0);
                              (o = l(s(0), e)),
                                (n = l()),
                                0 !== e.length && ((o = l(s(1), e)), (n = l()));
                            },
                            d = () => {
                              if (a++ >= 1e3)
                                throw Error("drbg: tried 1000 values");
                              let e = 0,
                                i = [];
                              for (; e < t; ) {
                                let t = (n = l()).slice();
                                i.push(t), (e += n.length);
                              }
                              return ia(...i);
                            };
                          return (e, t) => {
                            let i;
                            for (c(), h(e); !(i = t(d())); ) h();
                            return c(), i;
                          };
                        })(
                          t.hash.outputLen,
                          o.BYTES,
                          s
                        )(u, g);
                      },
                      verify: function (i, r, s) {
                        let n,
                          a,
                          c =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : b;
                        (r = r3("msgHash", r)), (s = r3("publicKey", s)), sz(c);
                        let { lowS: l, prehash: d, format: u } = c;
                        if ("strict" in c)
                          throw Error("options.strict was renamed to lowS");
                        if (
                          void 0 !== u &&
                          !["compact", "der", "js"].includes(u)
                        )
                          throw Error(
                            'format must be "compact", "der" or "js"'
                          );
                        let p = "string" == typeof i || tY(i),
                          g =
                            !p &&
                            !u &&
                            "object" == typeof i &&
                            null !== i &&
                            "bigint" == typeof i.r &&
                            "bigint" == typeof i.s;
                        if (!p && !g)
                          throw Error(
                            "invalid signature, expected Uint8Array, hex string or Signature instance"
                          );
                        try {
                          if (g)
                            if (void 0 === u || "js" === u) n = new h(i.r, i.s);
                            else throw Error("invalid format");
                          if (p) {
                            try {
                              "compact" !== u && (n = h.fromDER(i));
                            } catch (e) {
                              if (!(e instanceof sH.Err)) throw e;
                            }
                            n || "der" === u || (n = h.fromCompact(i));
                          }
                          a = e.fromHex(s);
                        } catch (e) {
                          return !1;
                        }
                        if (!n || (l && n.hasHighS())) return !1;
                        d && (r = t.hash(r));
                        let { r: y, s: m } = n,
                          v = f(r),
                          w = o.inv(m),
                          E = o.create(v * w),
                          I = o.create(y * w),
                          x = e.BASE.multiplyUnsafe(E).add(a.multiplyUnsafe(I));
                        return !x.is0() && o.create(x.x) === y;
                      },
                      utils: {
                        isValidPrivateKey(e) {
                          try {
                            return d(e), !0;
                          } catch (e) {
                            return !1;
                          }
                        },
                        normPrivateKeyToScalar: d,
                        randomPrivateKey: () =>
                          (function (e, t) {
                            let i =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                              r = e.length,
                              s = sm(t),
                              n = sb(t);
                            if (r < 16 || r < n || r > 1024)
                              throw Error(
                                "expected " +
                                  n +
                                  "-1024 bytes of input, got " +
                                  r
                              );
                            let o = sc(i ? r2(e) : r1(it(e)), t - si) + si;
                            return i ? r8(o, s) : r6(o, s);
                          })(r(sb(a)), a),
                        precompute() {
                          let t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 8,
                            i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : e.BASE;
                          return i.precompute(t, !1);
                        },
                      },
                      Point: e,
                      Signature: h,
                    })
                  );
                })(
                  (function (e) {
                    var t, i, r;
                    let s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { Fp: n, Fn: o } = (function (e, t) {
                        let i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        if (!t || "object" != typeof t)
                          throw Error(
                            "expected valid ".concat(e, " CURVE object")
                          );
                        for (let e of ["p", "n", "h"]) {
                          let i = t[e];
                          if (!("bigint" == typeof i && i > sv))
                            throw Error(
                              "CURVE.".concat(e, " must be positive bigint")
                            );
                        }
                        let r = sC(t.p, i.Fp),
                          s = sC(t.n, i.Fn);
                        for (let i of [
                          "Gx",
                          "Gy",
                          "a",
                          "weierstrass" === e ? "b" : "d",
                        ])
                          if (!r.isValid(t[i]))
                            throw Error(
                              "CURVE.".concat(
                                i,
                                " must be valid field element of CURVE.Fp"
                              )
                            );
                        return { Fp: r, Fn: s };
                      })("weierstrass", e, s),
                      { h: a, n: c } = e;
                    r7(
                      s,
                      {},
                      {
                        allowInfinityPoint: "boolean",
                        clearCofactor: "function",
                        isTorsionFree: "function",
                        fromBytes: "function",
                        toBytes: "function",
                        endo: "object",
                        wrapPrivateKey: "boolean",
                      }
                    );
                    let { endo: l } = s;
                    if (
                      l &&
                      (!n.is0(e.a) ||
                        "bigint" != typeof l.beta ||
                        "function" != typeof l.splitScalar)
                    )
                      throw Error(
                        'invalid endo: expected "beta": bigint and "splitScalar": function'
                      );
                    function h() {
                      if (!n.isOdd)
                        throw Error(
                          "compression is not supported: Field does not have .isOdd()"
                        );
                    }
                    let d =
                        s.toBytes ||
                        function (e, t, i) {
                          let { x: r, y: s } = t.toAffine(),
                            o = n.toBytes(r);
                          return (r$("isCompressed", i), i)
                            ? (h(), ia(sY(!n.isOdd(s)), o))
                            : ia(Uint8Array.of(4), o, n.toBytes(s));
                        },
                      u =
                        s.fromBytes ||
                        function (e) {
                          tZ(e);
                          let t = n.BYTES,
                            i = t + 1,
                            r = 2 * t + 1,
                            s = e.length,
                            o = e[0],
                            a = e.subarray(1);
                          if (s === i && (2 === o || 3 === o)) {
                            let e,
                              t = n.fromBytes(a);
                            if (!n.isValid(t))
                              throw Error(
                                "bad point: is not on curve, wrong x"
                              );
                            let i = p(t);
                            try {
                              e = n.sqrt(i);
                            } catch (e) {
                              throw Error(
                                "bad point: is not on curve, sqrt error" +
                                  (e instanceof Error ? ": " + e.message : "")
                              );
                            }
                            return (
                              h(),
                              ((1 & o) == 1) !== n.isOdd(e) && (e = n.neg(e)),
                              { x: t, y: e }
                            );
                          }
                          if (s === r && 4 === o) {
                            let e = n.fromBytes(a.subarray(0 * t, +t)),
                              i = n.fromBytes(a.subarray(+t, 2 * t));
                            if (!f(e, i))
                              throw Error("bad point: is not on curve");
                            return { x: e, y: i };
                          }
                          throw Error(
                            "bad point: got length "
                              .concat(s, ", expected compressed=")
                              .concat(i, " or uncompressed=")
                              .concat(r)
                          );
                        },
                      p =
                        ((t = e.a),
                        (i = e.b),
                        function (e) {
                          let r = n.sqr(e),
                            s = n.mul(r, e);
                          return n.add(n.add(s, n.mul(e, t)), i);
                        });
                    function f(e, t) {
                      let i = n.sqr(t),
                        r = p(e);
                      return n.eql(i, r);
                    }
                    if (!f(e.Gx, e.Gy))
                      throw Error("bad curve params: generator point");
                    let g = n.mul(n.pow(e.a, sW), sG),
                      y = n.mul(n.sqr(e.b), BigInt(27));
                    if (n.is0(n.add(g, y)))
                      throw Error("bad curve params: a or b");
                    function m(e, t) {
                      let i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (!n.isValid(t) || (i && n.is0(t)))
                        throw Error("bad point coordinate ".concat(e));
                      return t;
                    }
                    function b(e) {
                      if (!(e instanceof I))
                        throw Error("ProjectivePoint expected");
                    }
                    let v = se((e, t) => {
                        let { px: i, py: r, pz: s } = e;
                        if (n.eql(s, n.ONE)) return { x: i, y: r };
                        let o = e.is0();
                        null == t && (t = o ? n.ONE : n.inv(s));
                        let a = n.mul(i, t),
                          c = n.mul(r, t),
                          l = n.mul(s, t);
                        if (o) return { x: n.ZERO, y: n.ZERO };
                        if (!n.eql(l, n.ONE)) throw Error("invZ was invalid");
                        return { x: a, y: c };
                      }),
                      w = se((e) => {
                        if (e.is0()) {
                          if (s.allowInfinityPoint && !n.is0(e.py)) return;
                          throw Error("bad point: ZERO");
                        }
                        let { x: t, y: i } = e.toAffine();
                        if (!n.isValid(t) || !n.isValid(i))
                          throw Error("bad point: x or y not field elements");
                        if (!f(t, i))
                          throw Error("bad point: equation left != right");
                        if (!e.isTorsionFree())
                          throw Error("bad point: not in prime-order subgroup");
                        return !0;
                      });
                    function E(e, t, i, r, s) {
                      return (
                        (i = new I(n.mul(i.px, e), i.py, i.pz)),
                        (t = sE(r, t)),
                        (i = sE(s, i)),
                        t.add(i)
                      );
                    }
                    class I {
                      static fromAffine(e) {
                        let { x: t, y: i } = e || {};
                        if (!e || !n.isValid(t) || !n.isValid(i))
                          throw Error("invalid affine point");
                        if (e instanceof I)
                          throw Error("projective point not allowed");
                        return n.is0(t) && n.is0(i)
                          ? I.ZERO
                          : new I(t, i, n.ONE);
                      }
                      get x() {
                        return this.toAffine().x;
                      }
                      get y() {
                        return this.toAffine().y;
                      }
                      static normalizeZ(e) {
                        let t = sf(
                          I.Fp,
                          e.map((e) => e.pz)
                        );
                        return e
                          .map((e, i) => e.toAffine(t[i]))
                          .map(I.fromAffine);
                      }
                      static fromBytes(e) {
                        return tZ(e), I.fromHex(e);
                      }
                      static fromHex(e) {
                        let t = I.fromAffine(u(r3("pointHex", e)));
                        return t.assertValidity(), t;
                      }
                      static fromPrivateKey(e) {
                        let t = sJ(
                          o,
                          s.allowedPrivateKeyLengths,
                          s.wrapPrivateKey
                        );
                        return I.BASE.multiply(t(e));
                      }
                      static msm(e, t) {
                        return (function (e, t, i, r) {
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, i) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + i);
                            });
                          })(i, e),
                            (function (e, t) {
                              if (!Array.isArray(e))
                                throw Error("array of scalars expected");
                              e.forEach((e, i) => {
                                if (!t.isValid(e))
                                  throw Error("invalid scalar at index " + i);
                              });
                            })(r, t);
                          let s = i.length,
                            n = r.length;
                          if (s !== n)
                            throw Error(
                              "arrays of points and scalars must have equal length"
                            );
                          let o = e.ZERO,
                            a = (function (e) {
                              let t;
                              for (t = 0; e > rZ; e >>= rQ, t += 1);
                              return t;
                            })(BigInt(s)),
                            c = 1;
                          a > 12
                            ? (c = a - 3)
                            : a > 4
                            ? (c = a - 2)
                            : a > 0 && (c = 2);
                          let l = r9(c),
                            h = Array(Number(l) + 1).fill(o),
                            d = Math.floor((t.BITS - 1) / c) * c,
                            u = o;
                          for (let e = d; e >= 0; e -= c) {
                            h.fill(o);
                            for (let t = 0; t < n; t++) {
                              let s = Number((r[t] >> BigInt(e)) & l);
                              h[s] = h[s].add(i[t]);
                            }
                            let t = o;
                            for (let e = h.length - 1, i = o; e > 0; e--)
                              (i = i.add(h[e])), (t = t.add(i));
                            if (((u = u.add(t)), 0 !== e))
                              for (let e = 0; e < c; e++) u = u.double();
                          }
                          return u;
                        })(I, o, e, t);
                      }
                      precompute() {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 8,
                          t =
                            !(arguments.length > 1) ||
                            void 0 === arguments[1] ||
                            arguments[1];
                        return (
                          P.setWindowSize(this, e), t || this.multiply(sW), this
                        );
                      }
                      _setWindowSize(e) {
                        this.precompute(e);
                      }
                      assertValidity() {
                        w(this);
                      }
                      hasEvenY() {
                        let { y: e } = this.toAffine();
                        if (!n.isOdd)
                          throw Error("Field doesn't support isOdd");
                        return !n.isOdd(e);
                      }
                      equals(e) {
                        b(e);
                        let { px: t, py: i, pz: r } = this,
                          { px: s, py: o, pz: a } = e,
                          c = n.eql(n.mul(t, a), n.mul(s, r)),
                          l = n.eql(n.mul(i, a), n.mul(o, r));
                        return c && l;
                      }
                      negate() {
                        return new I(this.px, n.neg(this.py), this.pz);
                      }
                      double() {
                        let { a: t, b: i } = e,
                          r = n.mul(i, sW),
                          { px: s, py: o, pz: a } = this,
                          c = n.ZERO,
                          l = n.ZERO,
                          h = n.ZERO,
                          d = n.mul(s, s),
                          u = n.mul(o, o),
                          p = n.mul(a, a),
                          f = n.mul(s, o);
                        return (
                          (f = n.add(f, f)),
                          (h = n.mul(s, a)),
                          (h = n.add(h, h)),
                          (c = n.mul(t, h)),
                          (l = n.mul(r, p)),
                          (l = n.add(c, l)),
                          (c = n.sub(u, l)),
                          (l = n.add(u, l)),
                          (l = n.mul(c, l)),
                          (c = n.mul(f, c)),
                          (h = n.mul(r, h)),
                          (p = n.mul(t, p)),
                          (f = n.sub(d, p)),
                          (f = n.mul(t, f)),
                          (f = n.add(f, h)),
                          (h = n.add(d, d)),
                          (d = n.add(h, d)),
                          (d = n.add(d, p)),
                          (d = n.mul(d, f)),
                          (l = n.add(l, d)),
                          (p = n.mul(o, a)),
                          (p = n.add(p, p)),
                          (d = n.mul(p, f)),
                          (c = n.sub(c, d)),
                          (h = n.mul(p, u)),
                          (h = n.add(h, h)),
                          new I(c, l, (h = n.add(h, h)))
                        );
                      }
                      add(t) {
                        b(t);
                        let { px: i, py: r, pz: s } = this,
                          { px: o, py: a, pz: c } = t,
                          l = n.ZERO,
                          h = n.ZERO,
                          d = n.ZERO,
                          u = e.a,
                          p = n.mul(e.b, sW),
                          f = n.mul(i, o),
                          g = n.mul(r, a),
                          y = n.mul(s, c),
                          m = n.add(i, r),
                          v = n.add(o, a);
                        (m = n.mul(m, v)),
                          (v = n.add(f, g)),
                          (m = n.sub(m, v)),
                          (v = n.add(i, s));
                        let w = n.add(o, c);
                        return (
                          (v = n.mul(v, w)),
                          (w = n.add(f, y)),
                          (v = n.sub(v, w)),
                          (w = n.add(r, s)),
                          (l = n.add(a, c)),
                          (w = n.mul(w, l)),
                          (l = n.add(g, y)),
                          (w = n.sub(w, l)),
                          (d = n.mul(u, v)),
                          (l = n.mul(p, y)),
                          (d = n.add(l, d)),
                          (l = n.sub(g, d)),
                          (d = n.add(g, d)),
                          (h = n.mul(l, d)),
                          (g = n.add(f, f)),
                          (g = n.add(g, f)),
                          (y = n.mul(u, y)),
                          (v = n.mul(p, v)),
                          (g = n.add(g, y)),
                          (y = n.sub(f, y)),
                          (y = n.mul(u, y)),
                          (v = n.add(v, y)),
                          (f = n.mul(g, v)),
                          (h = n.add(h, f)),
                          (f = n.mul(w, v)),
                          (l = n.mul(m, l)),
                          (l = n.sub(l, f)),
                          (f = n.mul(m, g)),
                          (d = n.mul(w, d)),
                          new I(l, h, (d = n.add(d, f)))
                        );
                      }
                      subtract(e) {
                        return this.add(e.negate());
                      }
                      is0() {
                        return this.equals(I.ZERO);
                      }
                      multiply(e) {
                        let t,
                          i,
                          { endo: r } = s;
                        if (!o.isValidNot0(e))
                          throw Error("invalid scalar: out of range");
                        let n = (e) => P.wNAFCached(this, e, I.normalizeZ);
                        if (r) {
                          let {
                              k1neg: s,
                              k1: o,
                              k2neg: a,
                              k2: c,
                            } = r.splitScalar(e),
                            { p: l, f: h } = n(o),
                            { p: d, f: u } = n(c);
                          (i = h.add(u)), (t = E(r.beta, l, d, s, a));
                        } else {
                          let { p: r, f: s } = n(e);
                          (t = r), (i = s);
                        }
                        return I.normalizeZ([t, i])[0];
                      }
                      multiplyUnsafe(e) {
                        let { endo: t } = s;
                        if (!o.isValid(e))
                          throw Error("invalid scalar: out of range");
                        if (e === sF || this.is0()) return I.ZERO;
                        if (e === sV) return this;
                        if (P.hasPrecomputes(this)) return this.multiply(e);
                        if (!t) return P.wNAFCachedUnsafe(this, e);
                        {
                          let {
                              k1neg: i,
                              k1: r,
                              k2neg: s,
                              k2: n,
                            } = t.splitScalar(e),
                            { p1: o, p2: a } = (function (e, t, i, r) {
                              let s = t,
                                n = e.ZERO,
                                o = e.ZERO;
                              for (; i > sv || r > sv; )
                                i & sw && (n = n.add(s)),
                                  r & sw && (o = o.add(s)),
                                  (s = s.double()),
                                  (i >>= sw),
                                  (r >>= sw);
                              return { p1: n, p2: o };
                            })(I, this, r, n);
                          return E(t.beta, o, a, i, s);
                        }
                      }
                      multiplyAndAddUnsafe(e, t, i) {
                        let r = this.multiplyUnsafe(t).add(e.multiplyUnsafe(i));
                        return r.is0() ? void 0 : r;
                      }
                      toAffine(e) {
                        return v(this, e);
                      }
                      isTorsionFree() {
                        let { isTorsionFree: e } = s;
                        return (
                          a === sV ||
                          (e ? e(I, this) : P.wNAFCachedUnsafe(this, c).is0())
                        );
                      }
                      clearCofactor() {
                        let { clearCofactor: e } = s;
                        return a === sV
                          ? this
                          : e
                          ? e(I, this)
                          : this.multiplyUnsafe(a);
                      }
                      toBytes() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return (
                          r$("isCompressed", e),
                          this.assertValidity(),
                          d(I, this, e)
                        );
                      }
                      toRawBytes() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return this.toBytes(e);
                      }
                      toHex() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return it(this.toBytes(e));
                      }
                      toString() {
                        return "<Point ".concat(
                          this.is0() ? "ZERO" : this.toHex(),
                          ">"
                        );
                      }
                      constructor(e, t, i) {
                        (this.px = m("x", e)),
                          (this.py = m("y", t, !0)),
                          (this.pz = m("z", i)),
                          Object.freeze(this);
                      }
                    }
                    (I.BASE = new I(e.Gx, e.Gy, n.ONE)),
                      (I.ZERO = new I(n.ZERO, n.ONE, n.ZERO)),
                      (I.Fp = n),
                      (I.Fn = o);
                    let x = o.BITS,
                      P =
                        ((r = s.endo ? Math.ceil(x / 2) : x),
                        {
                          constTimeNegate: sE,
                          hasPrecomputes: (e) => 1 !== sA(e),
                          unsafeLadder(e, t) {
                            let i =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : I.ZERO,
                              r = e;
                            for (; t > sv; )
                              t & sw && (i = i.add(r)),
                                (r = r.double()),
                                (t >>= sw);
                            return i;
                          },
                          precomputeWindow(e, t) {
                            let { windows: i, windowSize: s } = sx(t, r),
                              n = [],
                              o = e,
                              a = o;
                            for (let e = 0; e < i; e++) {
                              (a = o), n.push(a);
                              for (let e = 1; e < s; e++)
                                (a = a.add(o)), n.push(a);
                              o = a.double();
                            }
                            return n;
                          },
                          wNAF(e, t, i) {
                            let s = I.ZERO,
                              n = I.BASE,
                              o = sx(e, r);
                            for (let e = 0; e < o.windows; e++) {
                              let {
                                nextN: r,
                                offset: a,
                                isZero: c,
                                isNeg: l,
                                isNegF: h,
                                offsetF: d,
                              } = sP(i, e, o);
                              (i = r),
                                c
                                  ? (n = n.add(sE(h, t[d])))
                                  : (s = s.add(sE(l, t[a])));
                            }
                            return sO(i), { p: s, f: n };
                          },
                          wNAFUnsafe(e, t, i) {
                            let s =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : I.ZERO,
                              n = sx(e, r);
                            for (let e = 0; e < n.windows && i !== sv; e++) {
                              let {
                                nextN: r,
                                offset: o,
                                isZero: a,
                                isNeg: c,
                              } = sP(i, e, n);
                              if (((i = r), !a)) {
                                let e = t[o];
                                s = s.add(c ? e.negate() : e);
                              }
                            }
                            return sO(i), s;
                          },
                          getPrecomputes(e, t, i) {
                            let r = s_.get(t);
                            return (
                              r ||
                                ((r = this.precomputeWindow(t, e)),
                                1 !== e &&
                                  ("function" == typeof i && (r = i(r)),
                                  s_.set(t, r))),
                              r
                            );
                          },
                          wNAFCached(e, t, i) {
                            let r = sA(e);
                            return this.wNAF(
                              r,
                              this.getPrecomputes(r, e, i),
                              t
                            );
                          },
                          wNAFCachedUnsafe(e, t, i, r) {
                            let s = sA(e);
                            return 1 === s
                              ? this.unsafeLadder(e, t, r)
                              : this.wNAFUnsafe(
                                  s,
                                  this.getPrecomputes(s, e, i),
                                  t,
                                  r
                                );
                          },
                          setWindowSize(e, t) {
                            sI(t, r), sS.set(e, t), s_.delete(e);
                          },
                        });
                    return I;
                  })(t, i),
                  r,
                  i
                );
              return Object.assign({}, s, {
                ProjectivePoint: s.Point,
                CURVE: e,
              });
            })({ ...e, hash: t });
          return { ...i(t), create: i };
        }
        let sZ = {
            p: BigInt(
              "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
            ),
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            h: BigInt(1),
            a: BigInt(
              "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
            ),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
          },
          sQ = {
            p: BigInt(
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
            ),
            n: BigInt(
              "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
            ),
            h: BigInt(1),
            a: BigInt(
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
            ),
            b: BigInt(
              "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
            ),
            Gx: BigInt(
              "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
            ),
            Gy: BigInt(
              "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
            ),
          },
          s$ = {
            p: BigInt(
              "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            ),
            n: BigInt(
              "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
            ),
            h: BigInt(1),
            a: BigInt(
              "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
            ),
            b: BigInt(
              "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
            ),
            Gx: BigInt(
              "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
            ),
            Gy: BigInt(
              "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
            ),
          },
          s0 = sy(sZ.p),
          s1 = sy(sQ.p),
          s2 = sy(s$.p),
          s6 = sX({ ...sZ, Fp: s0, lowS: !1 }, iV);
        sX({ ...sQ, Fp: s1, lowS: !1 }, iW),
          sX(
            {
              ...s$,
              Fp: s2,
              lowS: !1,
              allowedPrivateKeyLengths: [130, 131, 132],
            },
            iK
          );
        let s8 = "base10",
          s3 = "base16",
          s5 = "base64pad",
          s4 = "base64url",
          s9 = "utf8";
        function s7() {
          return e6(ih(32), s3);
        }
        function ne(e) {
          return e6(iV(e2(e, s3)), s3);
        }
        function nt(e) {
          return e6(iV(e2(e, s9)), s3);
        }
        function ni(e) {
          return e2("".concat(e), s8);
        }
        function nr(e) {
          return Number(e6(e, s8));
        }
        function ns(e) {
          return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        function nn(e) {
          let t = e.replace(/-/g, "+").replace(/_/g, "/"),
            i = (4 - (t.length % 4)) % 4;
          return t + "=".repeat(i);
        }
        function no(e) {
          if (2 === nr(e.type)) return e6(eX([e.type, e.sealed]), s5);
          if (1 === nr(e.type)) {
            if (typeof e.senderPublicKey > "u")
              throw Error("Missing sender public key for type 1 envelope");
            return e6(eX([e.type, e.senderPublicKey, e.iv, e.sealed]), s5);
          }
          return e6(eX([e.type, e.iv, e.sealed]), s5);
        }
        function na(e) {
          let t = e2((e.encoding || s5) === s4 ? nn(e.encoded) : e.encoded, s5),
            i = t.slice(0, 1);
          if (1 === nr(i)) {
            let e = t.slice(1, 33),
              r = t.slice(33, 45);
            return { type: i, sealed: t.slice(45), iv: r, senderPublicKey: e };
          }
          if (2 === nr(i)) return { type: i, sealed: t.slice(1), iv: ih(12) };
          let r = t.slice(1, 13);
          return { type: i, sealed: t.slice(13), iv: r };
        }
        function nc(e) {
          let t = (null == e ? void 0 : e.type) || 0;
          if (1 === t) {
            if (typeof (null == e ? void 0 : e.senderPublicKey) > "u")
              throw Error("missing sender public key");
            if (typeof (null == e ? void 0 : e.receiverPublicKey) > "u")
              throw Error("missing receiver public key");
          }
          return {
            type: t,
            senderPublicKey: null == e ? void 0 : e.senderPublicKey,
            receiverPublicKey: null == e ? void 0 : e.receiverPublicKey,
          };
        }
        function nl(e) {
          return (
            1 === e.type &&
            "string" == typeof e.senderPublicKey &&
            "string" == typeof e.receiverPublicKey
          );
        }
        function nh(e) {
          return (null == e ? void 0 : e.relay) || { protocol: "irn" };
        }
        function nd(e) {
          let t = e8.RELAY_JSONRPC[e];
          if (typeof t > "u")
            throw Error("Relay Protocol not supported: ".concat(e));
          return t;
        }
        function nu(e) {
          var t;
          if (!e.includes("wc:")) {
            let t = tR(e);
            null != t && t.includes("wc:") && (e = t);
          }
          let i = (e = (e = e.includes("wc://")
              ? e.replace("wc://", "")
              : e).includes("wc:")
              ? e.replace("wc:", "")
              : e).indexOf(":"),
            r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
            s = e.substring(0, i),
            n = e.substring(i + 1, r).split("@"),
            o = new URLSearchParams("u" > typeof r ? e.substring(r) : ""),
            a = {};
          o.forEach((e, t) => {
            a[t] = e;
          });
          let c = "string" == typeof a.methods ? a.methods.split(",") : void 0;
          return {
            protocol: s,
            topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
            version: parseInt(n[1], 10),
            symKey: a.symKey,
            relay: (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-",
                i = {},
                r = "relay" + t;
              return (
                Object.keys(e).forEach((t) => {
                  if (t.startsWith(r)) {
                    let s = t.replace(r, ""),
                      n = e[t];
                    i[s] = n;
                  }
                }),
                i
              );
            })(a),
            methods: c,
            expiryTimestamp: a.expiryTimestamp
              ? parseInt(a.expiryTimestamp, 10)
              : void 0,
          };
        }
        function np(e) {
          let t = new URLSearchParams(),
            i = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-",
                i = {};
              return (
                Object.keys(e).forEach((r) => {
                  e[r] && (i["relay" + t + r] = e[r]);
                }),
                i
              );
            })(e.relay);
          Object.keys(i)
            .sort()
            .forEach((e) => {
              t.set(e, i[e]);
            }),
            t.set("symKey", e.symKey),
            e.expiryTimestamp &&
              t.set("expiryTimestamp", e.expiryTimestamp.toString()),
            e.methods && t.set("methods", e.methods.join(","));
          let r = t.toString();
          return ""
            .concat(e.protocol, ":")
            .concat(e.topic, "@")
            .concat(e.version, "?")
            .concat(r);
        }
        function nf(e, t, i) {
          return "".concat(e, "?wc_ev=").concat(i, "&topic=").concat(t);
        }
        var ng = Object.defineProperty,
          ny = Object.defineProperties,
          nm = Object.getOwnPropertyDescriptors,
          nb = Object.getOwnPropertySymbols,
          nv = Object.prototype.hasOwnProperty,
          nw = Object.prototype.propertyIsEnumerable,
          nE = (e, t, i) =>
            t in e
              ? ng(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          nI = (e, t) => {
            for (var i in t || (t = {})) nv.call(t, i) && nE(e, i, t[i]);
            if (nb) for (var i of nb(t)) nw.call(t, i) && nE(e, i, t[i]);
            return e;
          },
          nx = (e, t) => ny(e, nm(t));
        function nP(e) {
          let t = [];
          return (
            e.forEach((e) => {
              let [i, r] = e.split(":");
              t.push("".concat(i, ":").concat(r));
            }),
            t
          );
        }
        function n_(e) {
          return e.includes(":");
        }
        function nS(e) {
          return n_(e) ? e.split(":")[0] : e;
        }
        function nA(e) {
          var t, i, r;
          let s = {};
          if (!nk(e)) return s;
          for (let [n, o] of Object.entries(e)) {
            let e = n_(n) ? [n] : o.chains,
              a = o.methods || [],
              c = o.events || [],
              l = nS(n);
            s[l] = nx(nI({}, s[l]), {
              chains: tP(e, null == (t = s[l]) ? void 0 : t.chains),
              methods: tP(a, null == (i = s[l]) ? void 0 : i.methods),
              events: tP(c, null == (r = s[l]) ? void 0 : r.events),
            });
          }
          return s;
        }
        function nO(e, t) {
          let i = (function (e) {
            let t = {};
            return (
              null == e ||
                e.forEach((e) => {
                  var i;
                  let [r, s] = e.split(":");
                  t[r] ||
                    (t[r] = {
                      accounts: [],
                      chains: [],
                      events: [],
                      methods: [],
                    }),
                    t[r].accounts.push(e),
                    null == (i = t[r].chains) ||
                      i.push("".concat(r, ":").concat(s));
                }),
              t
            );
          })((t = t.map((e) => e.replace("did:pkh:", ""))));
          for (let [t, r] of Object.entries(i))
            r.methods ? (r.methods = tP(r.methods, e)) : (r.methods = e),
              (r.events = ["chainChanged", "accountsChanged"]);
          return i;
        }
        let nC = {
            INVALID_METHOD: { message: "Invalid method.", code: 1001 },
            INVALID_EVENT: { message: "Invalid event.", code: 1002 },
            INVALID_UPDATE_REQUEST: {
              message: "Invalid update request.",
              code: 1003,
            },
            INVALID_EXTEND_REQUEST: {
              message: "Invalid extend request.",
              code: 1004,
            },
            INVALID_SESSION_SETTLE_REQUEST: {
              message: "Invalid session settle request.",
              code: 1005,
            },
            UNAUTHORIZED_METHOD: {
              message: "Unauthorized method.",
              code: 3001,
            },
            UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
            UNAUTHORIZED_UPDATE_REQUEST: {
              message: "Unauthorized update request.",
              code: 3003,
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
              message: "Unauthorized extend request.",
              code: 3004,
            },
            USER_REJECTED: { message: "User rejected.", code: 5e3 },
            USER_REJECTED_CHAINS: {
              message: "User rejected chains.",
              code: 5001,
            },
            USER_REJECTED_METHODS: {
              message: "User rejected methods.",
              code: 5002,
            },
            USER_REJECTED_EVENTS: {
              message: "User rejected events.",
              code: 5003,
            },
            UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
            UNSUPPORTED_METHODS: {
              message: "Unsupported methods.",
              code: 5101,
            },
            UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
            UNSUPPORTED_ACCOUNTS: {
              message: "Unsupported accounts.",
              code: 5103,
            },
            UNSUPPORTED_NAMESPACE_KEY: {
              message: "Unsupported namespace key.",
              code: 5104,
            },
            USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
            SESSION_SETTLEMENT_FAILED: {
              message: "Session settlement failed.",
              code: 7e3,
            },
            WC_METHOD_UNSUPPORTED: {
              message: "Unsupported wc_ method.",
              code: 10001,
            },
          },
          nR = {
            NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
            NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
            RESTORE_WILL_OVERRIDE: {
              message: "Restore will override.",
              code: 3,
            },
            RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
            MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
            EXPIRED: { message: "Expired.", code: 6 },
            UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
            MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
            NON_CONFORMING_NAMESPACES: {
              message: "Non conforming namespaces.",
              code: 9,
            },
          };
        function nT(e, t) {
          let { message: i, code: r } = nR[e];
          return { message: t ? "".concat(i, " ").concat(t) : i, code: r };
        }
        function nN(e, t) {
          let { message: i, code: r } = nC[e];
          return { message: t ? "".concat(i, " ").concat(t) : i, code: r };
        }
        function nU(e, t) {
          return (
            !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
          );
        }
        function nk(e) {
          return (
            Object.getPrototypeOf(e) === Object.prototype &&
            Object.keys(e).length
          );
        }
        function nD(e) {
          return typeof e > "u";
        }
        function nq(e, t) {
          return !!(t && nD(e)) || ("string" == typeof e && !!e.trim().length);
        }
        function nB(e, t) {
          return !!(t && nD(e)) || ("number" == typeof e && !isNaN(e));
        }
        function nj(e) {
          return !!(nq(e, !1) && e.includes(":")) && 2 === e.split(":").length;
        }
        function nL(e) {
          let t = !0;
          return (
            nU(e) ? e.length && (t = e.every((e) => nq(e, !1))) : (t = !1), t
          );
        }
        function nM(e, t) {
          let i = null;
          return (
            Object.values(e).forEach((e) => {
              var r;
              let s;
              if (i) return;
              let n =
                ((r = "".concat(t, ", namespace")),
                (s = null),
                nL(null == e ? void 0 : e.methods)
                  ? nL(null == e ? void 0 : e.events) ||
                    (s = nN(
                      "UNSUPPORTED_EVENTS",
                      "".concat(
                        r,
                        ", events should be an array of strings or empty array for no events"
                      )
                    ))
                  : (s = nN(
                      "UNSUPPORTED_METHODS",
                      "".concat(
                        r,
                        ", methods should be an array of strings or empty array for no methods"
                      )
                    )),
                s);
              n && (i = n);
            }),
            i
          );
        }
        function nz(e, t) {
          let i = null;
          if (e && nk(e)) {
            let r,
              s = nM(e, t);
            s && (i = s);
            let n =
              ((r = null),
              Object.values(e).forEach((e) => {
                var i, s;
                let n;
                if (r) return;
                let o =
                  ((i = null == e ? void 0 : e.accounts),
                  (s = "".concat(t, " namespace")),
                  (n = null),
                  nU(i)
                    ? i.forEach((e) => {
                        n ||
                          (function (e) {
                            if (nq(e, !1) && e.includes(":")) {
                              let t = e.split(":");
                              if (3 === t.length) {
                                let e = t[0] + ":" + t[1];
                                return !!t[2] && nj(e);
                              }
                            }
                            return !1;
                          })(e) ||
                          (n = nN(
                            "UNSUPPORTED_ACCOUNTS",
                            ""
                              .concat(s, ", account ")
                              .concat(
                                e,
                                ' should be a string and conform to "namespace:chainId:address" format'
                              )
                          ));
                      })
                    : (n = nN(
                        "UNSUPPORTED_ACCOUNTS",
                        "".concat(
                          s,
                          ', accounts should be an array of strings conforming to "namespace:chainId:address" format'
                        )
                      )),
                  n);
                o && (r = o);
              }),
              r);
            n && (i = n);
          } else
            i = nT(
              "MISSING_OR_INVALID",
              "".concat(t, ", namespaces should be an object with data")
            );
          return i;
        }
        function nH(e) {
          return nq(e.protocol, !0);
        }
        function nF(e) {
          return "u" > typeof e;
        }
        function nV(e, t) {
          return !(
            !nj(t) ||
            !(function (e) {
              let t = [];
              return (
                Object.values(e).forEach((e) => {
                  t.push(...nP(e.accounts));
                }),
                t
              );
            })(e).includes(t)
          );
        }
        function nK(e, t, i) {
          let r = null,
            s = (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((i) => {
                  var r;
                  i.includes(":")
                    ? (t[i] = e[i])
                    : null == (r = e[i].chains) ||
                      r.forEach((r) => {
                        t[r] = { methods: e[i].methods, events: e[i].events };
                      });
                }),
                t
              );
            })(e),
            n = (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((i) => {
                  if (i.includes(":")) t[i] = e[i];
                  else {
                    let r = nP(e[i].accounts);
                    null == r ||
                      r.forEach((r) => {
                        t[r] = {
                          accounts: e[i].accounts.filter((e) =>
                            e.includes("".concat(r, ":"))
                          ),
                          methods: e[i].methods,
                          events: e[i].events,
                        };
                      });
                  }
                }),
                t
              );
            })(t),
            o = Object.keys(s),
            a = Object.keys(n),
            c = nW(Object.keys(e)),
            l = nW(Object.keys(t)),
            h = c.filter((e) => !l.includes(e));
          return (
            h.length &&
              (r = nT(
                "NON_CONFORMING_NAMESPACES",
                ""
                  .concat(
                    i,
                    " namespaces keys don't satisfy requiredNamespaces.\n      Required: "
                  )
                  .concat(h.toString(), "\n      Received: ")
                  .concat(Object.keys(t).toString())
              )),
            tf(o, a) ||
              (r = nT(
                "NON_CONFORMING_NAMESPACES",
                ""
                  .concat(
                    i,
                    " namespaces chains don't satisfy required namespaces.\n      Required: "
                  )
                  .concat(o.toString(), "\n      Approved: ")
                  .concat(a.toString())
              )),
            Object.keys(t).forEach((e) => {
              if (!e.includes(":") || r) return;
              let s = nP(t[e].accounts);
              s.includes(e) ||
                (r = nT(
                  "NON_CONFORMING_NAMESPACES",
                  ""
                    .concat(
                      i,
                      " namespaces accounts don't satisfy namespace accounts for "
                    )
                    .concat(e, "\n        Required: ")
                    .concat(e, "\n        Approved: ")
                    .concat(s.toString())
                ));
            }),
            o.forEach((e) => {
              r ||
                (tf(s[e].methods, n[e].methods)
                  ? tf(s[e].events, n[e].events) ||
                    (r = nT(
                      "NON_CONFORMING_NAMESPACES",
                      ""
                        .concat(
                          i,
                          " namespaces events don't satisfy namespace events for "
                        )
                        .concat(e)
                    ))
                  : (r = nT(
                      "NON_CONFORMING_NAMESPACES",
                      ""
                        .concat(
                          i,
                          " namespaces methods don't satisfy namespace methods for "
                        )
                        .concat(e)
                    )));
            }),
            r
          );
        }
        function nW(e) {
          return [
            ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
          ];
        }
        function nG() {
          let e = th();
          return new Promise((t) => {
            switch (e) {
              case to.browser:
                var i;
                t(tl() && (null == (i = navigator) ? void 0 : i.onLine));
                break;
              case to.reactNative:
                t(nJ());
                break;
              case to.node:
              default:
                t(!0);
            }
          });
        }
        async function nJ() {
          if (tc() && null != globalThis && globalThis.NetInfo) {
            let e = await (null == globalThis
              ? void 0
              : globalThis.NetInfo.fetch());
            return null == e ? void 0 : e.isConnected;
          }
          return !0;
        }
        let nY = {};
        class nX {
          static get(e) {
            return nY[e];
          }
          static set(e, t) {
            nY[e] = t;
          }
          static delete(e) {
            delete nY[e];
          }
        }
        function nZ(e) {
          return new Uint8Array(
            e
              .replace(/^0x/, "")
              .match(/.{1,2}/g)
              .map((e) => parseInt(e, 16))
          );
        }
        var nQ = e.i(272727);
        e.i(289922);
        var n$ = e.i(314669),
          n0 = e.i(255616),
          n1 = e.i(167134);
        let n2 = "core",
          n6 = "".concat("wc", "@2:").concat(n2, ":"),
          n8 = { logger: "error" },
          n3 = { database: ":memory:" },
          n5 = "client_ed25519_seed",
          n4 = O.ONE_DAY,
          n9 = O.SIX_HOURS,
          n7 = "wss://relay.walletconnect.org",
          oe = {
            message: "relayer_message",
            message_ack: "relayer_message_ack",
            connect: "relayer_connect",
            disconnect: "relayer_disconnect",
            error: "relayer_error",
            connection_stalled: "relayer_connection_stalled",
            publish: "relayer_publish",
          },
          ot = {
            payload: "payload",
            connect: "connect",
            disconnect: "disconnect",
            error: "error",
          },
          oi = "2.21.3",
          or = { link_mode: "link_mode", relay: "relay" },
          os = { inbound: "inbound", outbound: "outbound" },
          on = "WALLETCONNECT_LINK_MODE_APPS",
          oo = {
            created: "subscription_created",
            deleted: "subscription_deleted",
            sync: "subscription_sync",
            resubscribed: "subscription_resubscribed",
          },
          oa =
            (O.THIRTY_DAYS,
            O.FIVE_SECONDS,
            O.THIRTY_DAYS,
            {
              wc_pairingDelete: {
                req: { ttl: O.ONE_DAY, prompt: !1, tag: 1e3 },
                res: { ttl: O.ONE_DAY, prompt: !1, tag: 1001 },
              },
              wc_pairingPing: {
                req: { ttl: O.THIRTY_SECONDS, prompt: !1, tag: 1002 },
                res: { ttl: O.THIRTY_SECONDS, prompt: !1, tag: 1003 },
              },
              unregistered_method: {
                req: { ttl: O.ONE_DAY, prompt: !1, tag: 0 },
                res: { ttl: O.ONE_DAY, prompt: !1, tag: 0 },
              },
            }),
          oc = {
            create: "pairing_create",
            expire: "pairing_expire",
            delete: "pairing_delete",
            ping: "pairing_ping",
          },
          ol = {
            created: "history_created",
            updated: "history_updated",
            deleted: "history_deleted",
            sync: "history_sync",
          },
          oh = {
            created: "expirer_created",
            deleted: "expirer_deleted",
            expired: "expirer_expired",
            sync: "expirer_sync",
          },
          od = (O.ONE_DAY, "https://verify.walletconnect.org"),
          ou = "".concat(od, "/v3"),
          op = ["https://verify.walletconnect.com", od],
          of = {
            pairing_started: "pairing_started",
            pairing_uri_validation_success: "pairing_uri_validation_success",
            pairing_uri_not_expired: "pairing_uri_not_expired",
            store_new_pairing: "store_new_pairing",
            subscribing_pairing_topic: "subscribing_pairing_topic",
            subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
            existing_pairing: "existing_pairing",
            pairing_not_expired: "pairing_not_expired",
            emit_inactive_pairing: "emit_inactive_pairing",
            emit_session_proposal: "emit_session_proposal",
          },
          og = {
            no_internet_connection: "no_internet_connection",
            malformed_pairing_uri: "malformed_pairing_uri",
            active_pairing_already_exists: "active_pairing_already_exists",
            subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
            pairing_expired: "pairing_expired",
            proposal_listener_not_found: "proposal_listener_not_found",
          },
          oy = {
            session_approve_started: "session_approve_started",
            session_namespaces_validation_success:
              "session_namespaces_validation_success",
            subscribing_session_topic: "subscribing_session_topic",
            subscribe_session_topic_success: "subscribe_session_topic_success",
            publishing_session_approve: "publishing_session_approve",
            session_approve_publish_success: "session_approve_publish_success",
            store_session: "store_session",
            publishing_session_settle: "publishing_session_settle",
            session_settle_publish_success: "session_settle_publish_success",
          },
          om = {
            no_internet_connection: "no_internet_connection",
            proposal_expired: "proposal_expired",
            subscribe_session_topic_failure: "subscribe_session_topic_failure",
            session_approve_publish_failure: "session_approve_publish_failure",
            session_settle_publish_failure: "session_settle_publish_failure",
            session_approve_namespace_validation_failure:
              "session_approve_namespace_validation_failure",
            proposal_not_found: "proposal_not_found",
          },
          ob = {
            authenticated_session_approve_started:
              "authenticated_session_approve_started",
            create_authenticated_session_topic:
              "create_authenticated_session_topic",
            cacaos_verified: "cacaos_verified",
            store_authenticated_session: "store_authenticated_session",
            subscribing_authenticated_session_topic:
              "subscribing_authenticated_session_topic",
            subscribe_authenticated_session_topic_success:
              "subscribe_authenticated_session_topic_success",
            publishing_authenticated_session_approve:
              "publishing_authenticated_session_approve",
          },
          ov = {
            no_internet_connection: "no_internet_connection",
            invalid_cacao: "invalid_cacao",
            subscribe_authenticated_session_topic_failure:
              "subscribe_authenticated_session_topic_failure",
            authenticated_session_approve_publish_failure:
              "authenticated_session_approve_publish_failure",
            authenticated_session_pending_request_not_found:
              "authenticated_session_pending_request_not_found",
          };
        var ow = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              o = n.charCodeAt(0);
            if (255 !== i[o]) throw TypeError(n + " is ambiguous");
            i[o] = s;
          }
          var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function d(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
                e[t];

              ) {
                var h = i[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var d = 0, u = n - 1;
                  (0 !== h || d < s) && -1 !== u;
                  u--, d++
                )
                  (h += (a * o[u]) >>> 0),
                    (o[u] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw Error("Non-zero carry");
                (s = d), t++;
              }
              if (" " !== e[t]) {
                for (var p = n - s; p !== n && 0 === o[p]; ) p++;
                for (var f = new Uint8Array(r + (n - p)), g = r; p !== n; )
                  f[g++] = o[p++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
                s !== n;

              ) {
                for (
                  var d = t[s], u = 0, p = o - 1;
                  (0 !== d || u < r) && -1 !== p;
                  p--, u++
                )
                  (d += (256 * l[p]) >>> 0),
                    (l[p] = d % a >>> 0),
                    (d = (d / a) >>> 0);
                if (0 !== d) throw Error("Non-zero carry");
                (r = u), s++;
              }
              for (var f = o - r; f !== o && 0 === l[f]; ) f++;
              for (var g = c.repeat(i); f < o; ++f) g += e.charAt(l[f]);
              return g;
            },
            decodeUnsafe: d,
            decode: function (e) {
              var i = d(e);
              if (i) return i;
              throw Error("Non-".concat(t, " character"));
            },
          };
        };
        let oE = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        };
        class oI {
          encode(e) {
            if (e instanceof Uint8Array)
              return "".concat(this.prefix).concat(this.baseEncode(e));
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.prefix = t), (this.baseEncode = i);
          }
        }
        class ox {
          decode(e) {
            if ("string" == typeof e) {
              if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(
                  "Unable to decode multibase string "
                    .concat(JSON.stringify(e), ", ")
                    .concat(
                      this.name,
                      " decoder only supports inputs prefixed with "
                    )
                    .concat(this.prefix)
                );
              return this.baseDecode(e.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(e) {
            return o_(this, e);
          }
          constructor(e, t, i) {
            if (
              ((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0))
            )
              throw Error("Invalid prefix character");
            (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
          }
        }
        class oP {
          or(e) {
            return o_(this, e);
          }
          decode(e) {
            let t = e[0],
              i = this.decoders[t];
            if (i) return i.decode(e);
            throw RangeError(
              "Unable to decode multibase string "
                .concat(JSON.stringify(e), ", only inputs prefixed with ")
                .concat(Object.keys(this.decoders), " are supported")
            );
          }
          constructor(e) {
            this.decoders = e;
          }
        }
        let o_ = (e, t) =>
          new oP({
            ...(e.decoders || { [e.prefix]: e }),
            ...(t.decoders || { [t.prefix]: t }),
          });
        class oS {
          encode(e) {
            return this.encoder.encode(e);
          }
          decode(e) {
            return this.decoder.decode(e);
          }
          constructor(e, t, i, r) {
            (this.name = e),
              (this.prefix = t),
              (this.baseEncode = i),
              (this.baseDecode = r),
              (this.encoder = new oI(e, t, i)),
              (this.decoder = new ox(e, t, r));
          }
        }
        let oA = (e) => {
            let { name: t, prefix: i, encode: r, decode: s } = e;
            return new oS(t, i, r, s);
          },
          oO = (e) => {
            let { prefix: t, name: i, alphabet: r } = e,
              { encode: s, decode: n } = ow(r, i);
            return oA({
              prefix: t,
              name: i,
              encode: s,
              decode: (e) => oE(n(e)),
            });
          },
          oC = (e) => {
            let { name: t, prefix: i, bitsPerChar: r, alphabet: s } = e;
            return oA({
              prefix: i,
              name: t,
              encode: (e) =>
                ((e, t, i) => {
                  let r = "=" === t[t.length - 1],
                    s = (1 << i) - 1,
                    n = "",
                    o = 0,
                    a = 0;
                  for (let r = 0; r < e.length; ++r)
                    for (a = (a << 8) | e[r], o += 8; o > i; )
                      (o -= i), (n += t[s & (a >> o)]);
                  if ((o && (n += t[s & (a << (i - o))]), r))
                    for (; (n.length * i) & 7; ) n += "=";
                  return n;
                })(e, s, r),
              decode: (e) =>
                ((e, t, i, r) => {
                  let s = {};
                  for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                  let n = e.length;
                  for (; "=" === e[n - 1]; ) --n;
                  let o = new Uint8Array(((n * i) / 8) | 0),
                    a = 0,
                    c = 0,
                    l = 0;
                  for (let t = 0; t < n; ++t) {
                    let n = s[e[t]];
                    if (void 0 === n)
                      throw SyntaxError("Non-".concat(r, " character"));
                    (c = (c << i) | n),
                      (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
                  }
                  if (a >= i || 255 & (c << (8 - a)))
                    throw SyntaxError("Unexpected end of data");
                  return o;
                })(e, s, r, t),
            });
          };
        var oR = Object.freeze({
            __proto__: null,
            identity: oA({
              prefix: "\0",
              name: "identity",
              encode: (e) => new TextDecoder().decode(e),
              decode: (e) => new TextEncoder().encode(e),
            }),
          }),
          oT = Object.freeze({
            __proto__: null,
            base2: oC({
              prefix: "0",
              name: "base2",
              alphabet: "01",
              bitsPerChar: 1,
            }),
          }),
          oN = Object.freeze({
            __proto__: null,
            base8: oC({
              prefix: "7",
              name: "base8",
              alphabet: "01234567",
              bitsPerChar: 3,
            }),
          }),
          oU = Object.freeze({
            __proto__: null,
            base10: oO({ prefix: "9", name: "base10", alphabet: "0123456789" }),
          }),
          ok = Object.freeze({
            __proto__: null,
            base16: oC({
              prefix: "f",
              name: "base16",
              alphabet: "0123456789abcdef",
              bitsPerChar: 4,
            }),
            base16upper: oC({
              prefix: "F",
              name: "base16upper",
              alphabet: "0123456789ABCDEF",
              bitsPerChar: 4,
            }),
          });
        let oD = oC({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5,
          }),
          oq = oC({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5,
          }),
          oB = oC({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5,
          }),
          oj = oC({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5,
          }),
          oL = oC({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5,
          }),
          oM = oC({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5,
          }),
          oz = oC({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          });
        var oH = Object.freeze({
            __proto__: null,
            base32: oD,
            base32upper: oq,
            base32pad: oB,
            base32padupper: oj,
            base32hex: oL,
            base32hexupper: oM,
            base32hexpad: oz,
            base32hexpadupper: oC({
              prefix: "T",
              name: "base32hexpadupper",
              alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
              bitsPerChar: 5,
            }),
            base32z: oC({
              prefix: "h",
              name: "base32z",
              alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
              bitsPerChar: 5,
            }),
          }),
          oF = Object.freeze({
            __proto__: null,
            base36: oO({
              prefix: "k",
              name: "base36",
              alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
            }),
            base36upper: oO({
              prefix: "K",
              name: "base36upper",
              alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            }),
          }),
          oV = Object.freeze({
            __proto__: null,
            base58btc: oO({
              name: "base58btc",
              prefix: "z",
              alphabet:
                "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
            }),
            base58flickr: oO({
              name: "base58flickr",
              prefix: "Z",
              alphabet:
                "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
            }),
          });
        let oK = oC({
            prefix: "m",
            name: "base64",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6,
          }),
          oW = oC({
            prefix: "M",
            name: "base64pad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6,
          });
        var oG = Object.freeze({
          __proto__: null,
          base64: oK,
          base64pad: oW,
          base64url: oC({
            prefix: "u",
            name: "base64url",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6,
          }),
          base64urlpad: oC({
            prefix: "U",
            name: "base64urlpad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6,
          }),
        });
        let oJ = Array.from(
            "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
          ),
          oY = oJ.reduce((e, t, i) => ((e[i] = t), e), []),
          oX = oJ.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
        var oZ = Object.freeze({
          __proto__: null,
          base256emoji: oA({
            prefix: "🚀",
            name: "base256emoji",
            encode: function (e) {
              return e.reduce((e, t) => (e += oY[t]), "");
            },
            decode: function (e) {
              let t = [];
              for (let i of e) {
                let e = oX[i.codePointAt(0)];
                if (void 0 === e)
                  throw Error("Non-base256emoji character: ".concat(i));
                t.push(e);
              }
              return new Uint8Array(t);
            },
          }),
        });
        function oQ(e, t, i) {
          (t = t || []), (i = i || 0);
          for (var r = i; e >= 0x80000000; )
            (t[i++] = (255 & e) | 128), (e /= 128);
          for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
          return (t[i] = 0 | e), (oQ.bytes = i - r + 1), t;
        }
        var o$ = {
          encode: oQ,
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
              ? 2
              : e < 2097152
              ? 3
              : e < 0x10000000
              ? 4
              : e < 0x800000000
              ? 5
              : e < 0x40000000000
              ? 6
              : e < 0x2000000000000
              ? 7
              : e < 0x100000000000000
              ? 8
              : e < 0x8000000000000000
              ? 9
              : 10;
          },
        };
        let o0 = function (e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return o$.encode(e, t, i), t;
          },
          o1 = (e) => o$.encodingLength(e),
          o2 = (e, t) => {
            let i = t.byteLength,
              r = o1(e),
              s = r + o1(i),
              n = new Uint8Array(s + i);
            return o0(e, n, 0), o0(i, n, r), n.set(t, s), new o6(e, i, t, n);
          };
        class o6 {
          constructor(e, t, i, r) {
            (this.code = e),
              (this.size = t),
              (this.digest = i),
              (this.bytes = r);
          }
        }
        let o8 = (e) => {
          let { name: t, code: i, encode: r } = e;
          return new o3(t, i, r);
        };
        class o3 {
          digest(e) {
            if (e instanceof Uint8Array) {
              let t = this.encode(e);
              return t instanceof Uint8Array
                ? o2(this.code, t)
                : t.then((e) => o2(this.code, e));
            }
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.code = t), (this.encode = i);
          }
        }
        let o5 = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t));
        var o4 = Object.freeze({
            __proto__: null,
            sha256: o8({ name: "sha2-256", code: 18, encode: o5("SHA-256") }),
            sha512: o8({ name: "sha2-512", code: 19, encode: o5("SHA-512") }),
          }),
          o9 = Object.freeze({
            __proto__: null,
            identity: {
              code: 0,
              name: "identity",
              encode: oE,
              digest: (e) => o2(0, oE(e)),
            },
          });
        new TextEncoder(), new TextDecoder();
        let o7 = {
          ...oR,
          ...oT,
          ...oN,
          ...oU,
          ...ok,
          ...oH,
          ...oF,
          ...oV,
          ...oG,
          ...oZ,
        };
        function ae(e) {
          return null != globalThis.Buffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e;
        }
        function at(e, t, i, r) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: i },
            decoder: { decode: r },
          };
        }
        ({ ...o4, ...o9 });
        let ai = at(
            "utf8",
            "u",
            (e) => "u" + new TextDecoder("utf8").decode(e),
            (e) => new TextEncoder().encode(e.substring(1))
          ),
          ar = at(
            "ascii",
            "a",
            (e) => {
              let t = "a";
              for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
              return t;
            },
            (e) => {
              let t = (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return null != globalThis.Buffer &&
                  null != globalThis.Buffer.allocUnsafe
                  ? ae(globalThis.Buffer.allocUnsafe(e))
                  : new Uint8Array(e);
              })((e = e.substring(1)).length);
              for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
              return t;
            }
          ),
          as = {
            utf8: ai,
            "utf-8": ai,
            hex: o7.base16,
            latin1: ar,
            ascii: ar,
            binary: ar,
            ...o7,
          };
        var an = Object.defineProperty,
          ao = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? an(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class aa {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          async setKeyChain(e) {
            await this.core.storage.setItem(this.storageKey, tg(e));
          }
          async getKeyChain() {
            let e = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof e ? ty(e) : void 0;
          }
          async persist() {
            await this.setKeyChain(this.keychain);
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            (this.core = e),
              (this.logger = t),
              ao(this, "keychain", new Map()),
              ao(this, "name", "keychain"),
              ao(this, "version", "0.3"),
              ao(this, "initialized", !1),
              ao(this, "storagePrefix", n6),
              ao(this, "init", async () => {
                if (!this.initialized) {
                  let e = await this.getKeyChain();
                  "u" > typeof e && (this.keychain = e),
                    (this.initialized = !0);
                }
              }),
              ao(
                this,
                "has",
                (e) => (this.isInitialized(), this.keychain.has(e))
              ),
              ao(this, "set", async (e, t) => {
                this.isInitialized(),
                  this.keychain.set(e, t),
                  await this.persist();
              }),
              ao(this, "get", (e) => {
                this.isInitialized();
                let t = this.keychain.get(e);
                if (typeof t > "u") {
                  let { message: t } = nT(
                    "NO_MATCHING_KEY",
                    "".concat(this.name, ": ").concat(e)
                  );
                  throw Error(t);
                }
                return t;
              }),
              ao(this, "del", async (e) => {
                this.isInitialized(),
                  this.keychain.delete(e),
                  await this.persist();
              }),
              (this.core = e),
              (this.logger = (0, a.generateChildLogger)(t, this.name));
          }
        }
        var ac = Object.defineProperty,
          al = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? ac(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class ah {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          async setPrivateKey(e, t) {
            return await this.keychain.set(e, t), e;
          }
          getPrivateKey(e) {
            return this.keychain.get(e);
          }
          async getClientSeed() {
            let e = "";
            try {
              e = this.keychain.get(n5);
            } catch (t) {
              (e = s7()), await this.keychain.set(n5, e);
            }
            return (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "utf8",
                i = as[t];
              if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
              return ("utf8" === t || "utf-8" === t) &&
                null != globalThis.Buffer &&
                null != globalThis.Buffer.from
                ? ae(globalThis.Buffer.from(e, "utf-8"))
                : i.decoder.decode("".concat(i.prefix).concat(e));
            })(e, "base16");
          }
          getSymKey(e) {
            return this.keychain.get(e);
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t, i) {
            (this.core = e),
              (this.logger = t),
              al(this, "name", "crypto"),
              al(this, "keychain"),
              al(this, "randomSessionIdentifier", s7()),
              al(this, "initialized", !1),
              al(this, "init", async () => {
                this.initialized ||
                  (await this.keychain.init(), (this.initialized = !0));
              }),
              al(
                this,
                "hasKeys",
                (e) => (this.isInitialized(), this.keychain.has(e))
              ),
              al(this, "getClientId", async () => {
                this.isInitialized();
                let e = await this.getClientSeed(),
                  t = R.generateKeyPair(e);
                return R.encodeIss(t.publicKey);
              }),
              al(this, "generateKeyPair", () => {
                this.isInitialized();
                let e = (function () {
                  let e = sM.utils.randomPrivateKey(),
                    t = sM.getPublicKey(e);
                  return { privateKey: e6(e, s3), publicKey: e6(t, s3) };
                })();
                return this.setPrivateKey(e.publicKey, e.privateKey);
              }),
              al(this, "signJWT", async (e) => {
                this.isInitialized();
                let t = await this.getClientSeed(),
                  i = R.generateKeyPair(t),
                  r = this.randomSessionIdentifier;
                return await R.signJWT(r, e, n4, i);
              }),
              al(this, "generateSharedKey", (e, t, i) => {
                this.isInitialized();
                let r = (function (e, t) {
                  var i;
                  let r,
                    s = sM.getSharedSecret(e2(e, s3), e2(t, s3));
                  return e6(
                    ((r = void 0),
                    (function (e, t, i) {
                      let r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 32;
                      tQ(e), tX(r);
                      let s = e.outputLen;
                      if (r > 255 * s)
                        throw Error("Length should be <= 255*HashLen");
                      let n = Math.ceil(r / s);
                      void 0 === i && (i = rX);
                      let o = new Uint8Array(n * s),
                        a = rJ.create(e, t),
                        c = a._cloneInto(),
                        l = new Uint8Array(a.outputLen);
                      for (let e = 0; e < n; e++)
                        (rY[0] = e + 1),
                          c
                            .update(0 === e ? rX : l)
                            .update(i)
                            .update(rY)
                            .digestInto(l),
                          o.set(l, s * e),
                          a._cloneInto(c);
                      return a.destroy(), c.destroy(), t2(l, rY), o.slice(0, r);
                    })(
                      iV,
                      ((i = void 0),
                      tQ(iV),
                      void 0 === i && (i = new Uint8Array(iV.outputLen)),
                      rJ(iV, io(i), io(s))),
                      r,
                      32
                    )),
                    s3
                  );
                })(this.getPrivateKey(e), t);
                return this.setSymKey(r, i);
              }),
              al(this, "setSymKey", async (e, t) => {
                this.isInitialized();
                let i = t || ne(e);
                return await this.keychain.set(i, e), i;
              }),
              al(this, "deleteKeyPair", async (e) => {
                this.isInitialized(), await this.keychain.del(e);
              }),
              al(this, "deleteSymKey", async (e) => {
                this.isInitialized(), await this.keychain.del(e);
              }),
              al(this, "encode", async (e, t, i) => {
                this.isInitialized();
                let r = nc(i),
                  s = (0, C.safeJsonStringify)(t);
                if (2 === r.type)
                  return (function (e, t) {
                    let i = ni(2),
                      r = ih(12),
                      s = no({ type: i, sealed: e2(e, s9), iv: r });
                    return t === s4 ? ns(s) : s;
                  })(s, null == i ? void 0 : i.encoding);
                if (nl(r)) {
                  let t = r.senderPublicKey,
                    i = r.receiverPublicKey;
                  e = await this.generateSharedKey(t, i);
                }
                let n = this.getSymKey(e),
                  { type: o, senderPublicKey: a } = r;
                return (function (e) {
                  let t = ni("u" > typeof e.type ? e.type : 0);
                  if (1 === nr(t) && typeof e.senderPublicKey > "u")
                    throw Error(
                      "Missing sender public key for type 1 envelope"
                    );
                  let i =
                      "u" > typeof e.senderPublicKey
                        ? e2(e.senderPublicKey, s3)
                        : void 0,
                    r = "u" > typeof e.iv ? e2(e.iv, s3) : ih(12),
                    s = no({
                      type: t,
                      sealed: rW(e2(e.symKey, s3), r).encrypt(
                        e2(e.message, s9)
                      ),
                      iv: r,
                      senderPublicKey: i,
                    });
                  return e.encoding === s4 ? ns(s) : s;
                })({
                  type: o,
                  symKey: n,
                  message: s,
                  senderPublicKey: a,
                  encoding: null == i ? void 0 : i.encoding,
                });
              }),
              al(this, "decode", async (e, t, i) => {
                this.isInitialized();
                let r = (function (e, t) {
                  let i = na({
                    encoded: e,
                    encoding: null == t ? void 0 : t.encoding,
                  });
                  return nc({
                    type: nr(i.type),
                    senderPublicKey:
                      "u" > typeof i.senderPublicKey
                        ? e6(i.senderPublicKey, s3)
                        : void 0,
                    receiverPublicKey: null == t ? void 0 : t.receiverPublicKey,
                  });
                })(t, i);
                if (2 === r.type) {
                  let e = (function (e, t) {
                    let { sealed: i } = na({ encoded: e, encoding: t });
                    return e6(i, s9);
                  })(t, null == i ? void 0 : i.encoding);
                  return (0, C.safeJsonParse)(e);
                }
                if (nl(r)) {
                  let t = r.receiverPublicKey,
                    i = r.senderPublicKey;
                  e = await this.generateSharedKey(t, i);
                }
                try {
                  let r = this.getSymKey(e),
                    s = (function (e) {
                      let t = e2(e.symKey, s3),
                        { sealed: i, iv: r } = na({
                          encoded: e.encoded,
                          encoding: e.encoding,
                        }),
                        s = rW(t, r).decrypt(i);
                      if (null === s) throw Error("Failed to decrypt");
                      return e6(s, s9);
                    })({
                      symKey: r,
                      encoded: t,
                      encoding: null == i ? void 0 : i.encoding,
                    });
                  return (0, C.safeJsonParse)(s);
                } catch (t) {
                  this.logger.error(
                    "Failed to decode message from topic: '"
                      .concat(e, "', clientId: '")
                      .concat(await this.getClientId(), "'")
                  ),
                    this.logger.error(t);
                }
              }),
              al(this, "getPayloadType", function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s5;
                return nr(na({ encoded: e, encoding: t }).type);
              }),
              al(this, "getPayloadSenderPublicKey", function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : s5,
                  i = na({ encoded: e, encoding: t });
                return i.senderPublicKey ? e6(i.senderPublicKey, s3) : void 0;
              }),
              (this.core = e),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              (this.keychain = i || new aa(this.core, this.logger));
          }
        }
        var ad = Object.defineProperty,
          au = Object.defineProperties,
          ap = Object.getOwnPropertyDescriptors,
          af = Object.getOwnPropertySymbols,
          ag = Object.prototype.hasOwnProperty,
          ay = Object.prototype.propertyIsEnumerable,
          am = (e, t, i) =>
            t in e
              ? ad(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          ab = (e, t, i) => am(e, "symbol" != typeof t ? t + "" : t, i);
        class av extends g {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get storageKeyWithoutClientAck() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name +
              "_withoutClientAck"
            );
          }
          async setRelayerMessages(e) {
            await this.core.storage.setItem(this.storageKey, tg(e));
          }
          async setRelayerMessagesWithoutClientAck(e) {
            await this.core.storage.setItem(
              this.storageKeyWithoutClientAck,
              tg(e)
            );
          }
          async getRelayerMessages() {
            let e = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof e ? ty(e) : void 0;
          }
          async getRelayerMessagesWithoutClientAck() {
            let e = await this.core.storage.getItem(
              this.storageKeyWithoutClientAck
            );
            return "u" > typeof e ? ty(e) : void 0;
          }
          async persist() {
            await this.setRelayerMessages(this.messages),
              await this.setRelayerMessagesWithoutClientAck(
                this.messagesWithoutClientAck
              );
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            super(e, t),
              (this.logger = e),
              (this.core = t),
              ab(this, "messages", new Map()),
              ab(this, "messagesWithoutClientAck", new Map()),
              ab(this, "name", "messages"),
              ab(this, "version", "0.3"),
              ab(this, "initialized", !1),
              ab(this, "storagePrefix", n6),
              ab(this, "init", async () => {
                if (!this.initialized) {
                  this.logger.trace("Initialized");
                  try {
                    let e = await this.getRelayerMessages();
                    "u" > typeof e && (this.messages = e);
                    let t = await this.getRelayerMessagesWithoutClientAck();
                    "u" > typeof t && (this.messagesWithoutClientAck = t),
                      this.logger.debug(
                        "Successfully Restored records for ".concat(this.name)
                      ),
                      this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size,
                      });
                  } catch (e) {
                    this.logger.debug(
                      "Failed to Restore records for ".concat(this.name)
                    ),
                      this.logger.error(e);
                  } finally {
                    this.initialized = !0;
                  }
                }
              }),
              ab(this, "set", async (e, t, i) => {
                this.isInitialized();
                let r = nt(t),
                  s = this.messages.get(e);
                if ((typeof s > "u" && (s = {}), "u" > typeof s[r])) return r;
                if (((s[r] = t), this.messages.set(e, s), i === os.inbound)) {
                  let i = this.messagesWithoutClientAck.get(e) || {};
                  this.messagesWithoutClientAck.set(
                    e,
                    au(
                      ((e, t) => {
                        for (var i in t || (t = {}))
                          ag.call(t, i) && am(e, i, t[i]);
                        if (af)
                          for (var i of af(t)) ay.call(t, i) && am(e, i, t[i]);
                        return e;
                      })({}, i),
                      ap({ [r]: t })
                    )
                  );
                }
                return await this.persist(), r;
              }),
              ab(this, "get", (e) => {
                this.isInitialized();
                let t = this.messages.get(e);
                return typeof t > "u" && (t = {}), t;
              }),
              ab(this, "getWithoutAck", (e) => {
                this.isInitialized();
                let t = {};
                for (let i of e) {
                  let e = this.messagesWithoutClientAck.get(i) || {};
                  t[i] = Object.values(e);
                }
                return t;
              }),
              ab(
                this,
                "has",
                (e, t) => (
                  this.isInitialized(), "u" > typeof this.get(e)[nt(t)]
                )
              ),
              ab(this, "ack", async (e, t) => {
                this.isInitialized();
                let i = this.messagesWithoutClientAck.get(e);
                if (typeof i > "u") return;
                let r = nt(t);
                delete i[r],
                  0 === Object.keys(i).length
                    ? this.messagesWithoutClientAck.delete(e)
                    : this.messagesWithoutClientAck.set(e, i),
                  await this.persist();
              }),
              ab(this, "del", async (e) => {
                this.isInitialized(),
                  this.messages.delete(e),
                  this.messagesWithoutClientAck.delete(e),
                  await this.persist();
              }),
              (this.logger = (0, a.generateChildLogger)(e, this.name)),
              (this.core = t);
          }
        }
        var aw = Object.defineProperty,
          aE = Object.defineProperties,
          aI = Object.getOwnPropertyDescriptors,
          ax = Object.getOwnPropertySymbols,
          aP = Object.prototype.hasOwnProperty,
          a_ = Object.prototype.propertyIsEnumerable,
          aS = (e, t, i) =>
            t in e
              ? aw(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          aA = (e, t) => {
            for (var i in t || (t = {})) aP.call(t, i) && aS(e, i, t[i]);
            if (ax) for (var i of ax(t)) a_.call(t, i) && aS(e, i, t[i]);
            return e;
          },
          aO = (e, t) => aE(e, aI(t)),
          aC = (e, t, i) => aS(e, "symbol" != typeof t ? t + "" : t, i);
        class aR extends y {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          async rpcPublish(e) {
            var t, i, r, s;
            let {
                topic: n,
                message: o,
                ttl: a = n9,
                prompt: c,
                tag: l,
                id: h,
                attestation: d,
                tvf: u,
              } = e,
              p = {
                method: nd(nh().protocol).publish,
                params: aA(
                  {
                    topic: n,
                    message: o,
                    ttl: a,
                    prompt: c,
                    tag: l,
                    attestation: d,
                  },
                  u
                ),
                id: h,
              };
            nD(null == (t = p.params) ? void 0 : t.prompt) &&
              (null == (i = p.params) || delete i.prompt),
              nD(null == (r = p.params) ? void 0 : r.tag) &&
                (null == (s = p.params) || delete s.tag),
              this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "message",
                direction: "outgoing",
                request: p,
              });
            let f = await this.relayer.request(p);
            return (
              this.relayer.events.emit(oe.publish, e),
              this.logger.debug("Successfully Published Payload"),
              f
            );
          }
          removeRequestFromQueue(e) {
            this.queue.delete(e);
          }
          checkQueue() {
            this.queue.forEach(async (e, t) => {
              let i = e.attempt + 1;
              this.queue.set(t, aO(aA({}, e), { attempt: i }));
              let { topic: r, message: s, opts: n, attestation: o } = e;
              this.logger.warn(
                {},
                "Publisher: queue->publishing: "
                  .concat(e.opts.id, ", tag: ")
                  .concat(e.opts.tag, ", attempt: ")
                  .concat(i)
              ),
                await this.rpcPublish(
                  aO(aA({}, e), {
                    topic: r,
                    message: s,
                    ttl: n.ttl,
                    prompt: n.prompt,
                    tag: n.tag,
                    id: n.id,
                    attestation: o,
                    tvf: n.tvf,
                  })
                ),
                this.logger.warn(
                  {},
                  "Publisher: queue->published: ".concat(e.opts.id)
                );
            });
          }
          registerEventListeners() {
            this.relayer.core.heartbeat.on(n.HEARTBEAT_EVENTS.pulse, () => {
              if (this.needsTransportRestart) {
                (this.needsTransportRestart = !1),
                  this.relayer.events.emit(oe.connection_stalled);
                return;
              }
              this.checkQueue();
            }),
              this.relayer.on(oe.message_ack, (e) => {
                this.removeRequestFromQueue(e.id.toString());
              });
          }
          constructor(e, t) {
            super(e, t),
              (this.relayer = e),
              (this.logger = t),
              aC(this, "events", new s.EventEmitter()),
              aC(this, "name", "publisher"),
              aC(this, "queue", new Map()),
              aC(this, "publishTimeout", (0, O.toMiliseconds)(O.ONE_MINUTE)),
              aC(
                this,
                "initialPublishTimeout",
                (0, O.toMiliseconds)(15 * O.ONE_SECOND)
              ),
              aC(this, "needsTransportRestart", !1),
              aC(this, "publish", async (e, t, i) => {
                var r;
                this.logger.debug("Publishing Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: i },
                  });
                let s = (null == i ? void 0 : i.ttl) || n9,
                  n = nh(i),
                  o = (null == i ? void 0 : i.prompt) || !1,
                  a = (null == i ? void 0 : i.tag) || 0,
                  c =
                    (null == i ? void 0 : i.id) ||
                    (0, n$.getBigIntRpcId)().toString(),
                  l = {
                    topic: e,
                    message: t,
                    opts: {
                      ttl: s,
                      relay: n,
                      prompt: o,
                      tag: a,
                      id: c,
                      attestation: null == i ? void 0 : i.attestation,
                      tvf: null == i ? void 0 : i.tvf,
                    },
                  },
                  h = "Failed to publish payload, please try again. id:"
                    .concat(c, " tag:")
                    .concat(a);
                try {
                  let r = new Promise(async (r) => {
                    let n = (e) => {
                      let { id: t } = e;
                      l.opts.id === t &&
                        (this.removeRequestFromQueue(t),
                        this.relayer.events.removeListener(oe.publish, n),
                        r(l));
                    };
                    this.relayer.events.on(oe.publish, n);
                    let h = tb(
                      new Promise((r, n) => {
                        this.rpcPublish({
                          topic: e,
                          message: t,
                          ttl: s,
                          prompt: o,
                          tag: a,
                          id: c,
                          attestation: null == i ? void 0 : i.attestation,
                          tvf: null == i ? void 0 : i.tvf,
                        })
                          .then(r)
                          .catch((e) => {
                            this.logger.warn(e, null == e ? void 0 : e.message),
                              n(e);
                          });
                      }),
                      this.initialPublishTimeout,
                      "Failed initial publish, retrying.... id:"
                        .concat(c, " tag:")
                        .concat(a)
                    );
                    try {
                      await h, this.events.removeListener(oe.publish, n);
                    } catch (e) {
                      this.queue.set(c, aO(aA({}, l), { attempt: 1 })),
                        this.logger.warn(e, null == e ? void 0 : e.message);
                    }
                  });
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { id: c, topic: e, message: t, opts: i },
                  }),
                    await tb(r, this.publishTimeout, h);
                } catch (e) {
                  if (
                    (this.logger.debug("Failed to Publish Payload"),
                    this.logger.error(e),
                    null != (r = null == i ? void 0 : i.internal) &&
                      r.throwOnFailedPublish)
                  )
                    throw e;
                } finally {
                  this.queue.delete(c);
                }
              }),
              aC(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              aC(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              aC(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              aC(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              (this.relayer = e),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              this.registerEventListeners();
          }
        }
        var aT = Object.defineProperty,
          aN = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? aT(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class aU {
          get topics() {
            return Array.from(this.map.keys());
          }
          constructor() {
            aN(this, "map", new Map()),
              aN(this, "set", (e, t) => {
                let i = this.get(e);
                this.exists(e, t) || this.map.set(e, [...i, t]);
              }),
              aN(this, "get", (e) => this.map.get(e) || []),
              aN(this, "exists", (e, t) => this.get(e).includes(t)),
              aN(this, "delete", (e, t) => {
                if (typeof t > "u") return void this.map.delete(e);
                if (!this.map.has(e)) return;
                let i = this.get(e);
                if (!this.exists(e, t)) return;
                let r = i.filter((e) => e !== t);
                if (!r.length) return void this.map.delete(e);
                this.map.set(e, r);
              }),
              aN(this, "clear", () => {
                this.map.clear();
              });
          }
        }
        var ak = Object.defineProperty,
          aD = Object.defineProperties,
          aq = Object.getOwnPropertyDescriptors,
          aB = Object.getOwnPropertySymbols,
          aj = Object.prototype.hasOwnProperty,
          aL = Object.prototype.propertyIsEnumerable,
          aM = (e, t, i) =>
            t in e
              ? ak(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          az = (e, t) => {
            for (var i in t || (t = {})) aj.call(t, i) && aM(e, i, t[i]);
            if (aB) for (var i of aB(t)) aL.call(t, i) && aM(e, i, t[i]);
            return e;
          },
          aH = (e, t) => aD(e, aq(t)),
          aF = (e, t, i) => aM(e, "symbol" != typeof t ? t + "" : t, i);
        class aV extends v {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.relayer.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get length() {
            return this.subscriptions.size;
          }
          get ids() {
            return Array.from(this.subscriptions.keys());
          }
          get values() {
            return Array.from(this.subscriptions.values());
          }
          get topics() {
            return this.topicMap.topics;
          }
          get hasAnyTopics() {
            return (
              this.topicMap.topics.length > 0 ||
              this.pending.size > 0 ||
              this.cached.length > 0 ||
              this.subscriptions.size > 0
            );
          }
          hasSubscription(e, t) {
            let i = !1;
            try {
              i = this.getSubscription(e).topic === t;
            } catch (e) {}
            return i;
          }
          reset() {
            (this.cached = []), (this.initialized = !0);
          }
          onDisable() {
            this.values.length > 0 && (this.cached = this.values),
              this.subscriptions.clear(),
              this.topicMap.clear();
          }
          async unsubscribeByTopic(e, t) {
            let i = this.topicMap.get(e);
            await Promise.all(
              i.map(async (i) => await this.unsubscribeById(e, i, t))
            );
          }
          async unsubscribeById(e, t, i) {
            this.logger.debug("Unsubscribing Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
            try {
              let r = nh(i);
              await this.restartToComplete({ topic: e, id: t, relay: r }),
                await this.rpcUnsubscribe(e, t, r);
              let s = nN(
                "USER_DISCONNECTED",
                "".concat(this.name, ", ").concat(e)
              );
              await this.onUnsubscribe(e, t, s),
                this.logger.debug("Successfully Unsubscribed Topic"),
                this.logger.trace({
                  type: "method",
                  method: "unsubscribe",
                  params: { topic: e, id: t, opts: i },
                });
            } catch (e) {
              throw (
                (this.logger.debug("Failed to Unsubscribe Topic"),
                this.logger.error(e),
                e)
              );
            }
          }
          async rpcSubscribe(e, t, i) {
            var r;
            (i && (null == i ? void 0 : i.transportType) !== or.relay) ||
              (await this.restartToComplete({ topic: e, id: e, relay: t }));
            let s = { method: nd(t.protocol).subscribe, params: { topic: e } };
            this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: s,
              });
            let n =
              null == (r = null == i ? void 0 : i.internal)
                ? void 0
                : r.throwOnFailedPublish;
            try {
              let t = await this.getSubscriptionId(e);
              if ((null == i ? void 0 : i.transportType) === or.link_mode)
                return (
                  setTimeout(() => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  }, (0, O.toMiliseconds)(O.ONE_SECOND)),
                  t
                );
              let r = new Promise(async (t) => {
                  let i = (r) => {
                    r.topic === e &&
                      (this.events.removeListener(oo.created, i), t(r.id));
                  };
                  this.events.on(oo.created, i);
                  try {
                    let r = await tb(
                      new Promise((e, t) => {
                        this.relayer
                          .request(s)
                          .catch((e) => {
                            this.logger.warn(e, null == e ? void 0 : e.message),
                              t(e);
                          })
                          .then(e);
                      }),
                      this.initialSubscribeTimeout,
                      "Subscribing to ".concat(e, " failed, please try again")
                    );
                    this.events.removeListener(oo.created, i), t(r);
                  } catch (e) {}
                }),
                o = await tb(
                  r,
                  this.subscribeTimeout,
                  "Subscribing to ".concat(e, " failed, please try again")
                );
              if (!o && n)
                throw Error(
                  "Subscribing to ".concat(e, " failed, please try again")
                );
              return o ? t : null;
            } catch (e) {
              if (
                (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                this.relayer.events.emit(oe.connection_stalled),
                n)
              )
                throw e;
            }
            return null;
          }
          async rpcBatchSubscribe(e) {
            if (!e.length) return;
            let t = {
              method: nd(e[0].relay.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
            this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: t,
              });
            try {
              await await tb(
                new Promise((e) => {
                  this.relayer
                    .request(t)
                    .catch((e) => this.logger.warn(e))
                    .then(e);
                }),
                this.subscribeTimeout,
                "rpcBatchSubscribe failed, please try again"
              );
            } catch (e) {
              this.relayer.events.emit(oe.connection_stalled);
            }
          }
          async rpcBatchFetchMessages(e) {
            let t;
            if (!e.length) return;
            let i = {
              method: nd(e[0].relay.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
            this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i,
              });
            try {
              t = await await tb(
                new Promise((e, t) => {
                  this.relayer
                    .request(i)
                    .catch((e) => {
                      this.logger.warn(e), t(e);
                    })
                    .then(e);
                }),
                this.subscribeTimeout,
                "rpcBatchFetchMessages failed, please try again"
              );
            } catch (e) {
              this.relayer.events.emit(oe.connection_stalled);
            }
            return t;
          }
          rpcUnsubscribe(e, t, i) {
            let r = {
              method: nd(i.protocol).unsubscribe,
              params: { topic: e, id: t },
            };
            return (
              this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: r,
              }),
              this.relayer.request(r)
            );
          }
          onSubscribe(e, t) {
            this.setSubscription(e, aH(az({}, t), { id: e })),
              this.pending.delete(t.topic);
          }
          onBatchSubscribe(e) {
            e.length &&
              e.forEach((e) => {
                this.setSubscription(e.id, az({}, e)),
                  this.pending.delete(e.topic);
              });
          }
          async onUnsubscribe(e, t, i) {
            this.events.removeAllListeners(t),
              this.hasSubscription(t, e) && this.deleteSubscription(t, i),
              await this.relayer.messages.del(e);
          }
          async setRelayerSubscriptions(e) {
            await this.relayer.core.storage.setItem(this.storageKey, e);
          }
          async getRelayerSubscriptions() {
            return await this.relayer.core.storage.getItem(this.storageKey);
          }
          setSubscription(e, t) {
            this.logger.debug("Setting subscription"),
              this.logger.trace({
                type: "method",
                method: "setSubscription",
                id: e,
                subscription: t,
              }),
              this.addSubscription(e, t);
          }
          addSubscription(e, t) {
            this.subscriptions.set(e, az({}, t)),
              this.topicMap.set(t.topic, e),
              this.events.emit(oo.created, t);
          }
          getSubscription(e) {
            this.logger.debug("Getting subscription"),
              this.logger.trace({
                type: "method",
                method: "getSubscription",
                id: e,
              });
            let t = this.subscriptions.get(e);
            if (!t) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw Error(t);
            }
            return t;
          }
          deleteSubscription(e, t) {
            this.logger.debug("Deleting subscription"),
              this.logger.trace({
                type: "method",
                method: "deleteSubscription",
                id: e,
                reason: t,
              });
            let i = this.getSubscription(e);
            this.subscriptions.delete(e),
              this.topicMap.delete(i.topic, e),
              this.events.emit(oo.deleted, aH(az({}, i), { reason: t }));
          }
          async persist() {
            await this.setRelayerSubscriptions(this.values),
              this.events.emit(oo.sync);
          }
          async onRestart() {
            if (this.cached.length) {
              let e = [...this.cached],
                t = Math.ceil(
                  this.cached.length / this.batchSubscribeTopicsLimit
                );
              for (let i = 0; i < t; i++) {
                let t = e.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(t);
              }
            }
            this.events.emit(oo.resubscribed);
          }
          async restore() {
            try {
              let e = await this.getRelayerSubscriptions();
              if (typeof e > "u" || !e.length) return;
              if (this.subscriptions.size) {
                let { message: e } = nT("RESTORE_WILL_OVERRIDE", this.name);
                throw (
                  (this.logger.error(e),
                  this.logger.error(
                    ""
                      .concat(this.name, ": ")
                      .concat(JSON.stringify(this.values))
                  ),
                  Error(e))
                );
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored subscriptions for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  subscriptions: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore subscriptions for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          async batchSubscribe(e) {
            e.length &&
              (await this.rpcBatchSubscribe(e),
              this.onBatchSubscribe(
                await Promise.all(
                  e.map(async (e) =>
                    aH(az({}, e), { id: await this.getSubscriptionId(e.topic) })
                  )
                )
              ));
          }
          async batchFetchMessages(e) {
            var t;
            if (!e.length) return;
            this.logger.trace(
              "Fetching batch messages for ".concat(e.length, " subscriptions")
            );
            let i = await this.rpcBatchFetchMessages(e);
            i &&
              i.messages &&
              (await ((t = (0, O.toMiliseconds)(O.ONE_SECOND)),
              new Promise((e) => setTimeout(e, t))),
              await this.relayer.handleBatchMessageEvents(i.messages));
          }
          async onConnect() {
            await this.restart(), this.reset();
          }
          onDisconnect() {
            this.onDisable();
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          async restartToComplete(e) {
            this.relayer.connected ||
              this.relayer.connecting ||
              (this.cached.push(e), await this.relayer.transportOpen());
          }
          async getClientId() {
            return (
              this.clientId ||
                (this.clientId = await this.relayer.core.crypto.getClientId()),
              this.clientId
            );
          }
          async getSubscriptionId(e) {
            return nt(e + (await this.getClientId()));
          }
          constructor(e, t) {
            super(e, t),
              (this.relayer = e),
              (this.logger = t),
              aF(this, "subscriptions", new Map()),
              aF(this, "topicMap", new aU()),
              aF(this, "events", new s.EventEmitter()),
              aF(this, "name", "subscription"),
              aF(this, "version", "0.3"),
              aF(this, "pending", new Map()),
              aF(this, "cached", []),
              aF(this, "initialized", !1),
              aF(this, "storagePrefix", n6),
              aF(this, "subscribeTimeout", (0, O.toMiliseconds)(O.ONE_MINUTE)),
              aF(
                this,
                "initialSubscribeTimeout",
                (0, O.toMiliseconds)(15 * O.ONE_SECOND)
              ),
              aF(this, "clientId"),
              aF(this, "batchSubscribeTopicsLimit", 500),
              aF(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  this.registerEventListeners(),
                  await this.restore()),
                  (this.initialized = !0);
              }),
              aF(this, "subscribe", async (e, t) => {
                this.isInitialized(),
                  this.logger.debug("Subscribing Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  });
                try {
                  let i = nh(t),
                    r = {
                      topic: e,
                      relay: i,
                      transportType: null == t ? void 0 : t.transportType,
                    };
                  this.pending.set(e, r);
                  let s = await this.rpcSubscribe(e, i, t);
                  return (
                    "string" == typeof s &&
                      (this.onSubscribe(s, r),
                      this.logger.debug("Successfully Subscribed Topic"),
                      this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: { topic: e, opts: t },
                      })),
                    s
                  );
                } catch (e) {
                  throw (
                    (this.logger.debug("Failed to Subscribe Topic"),
                    this.logger.error(e),
                    e)
                  );
                }
              }),
              aF(this, "unsubscribe", async (e, t) => {
                this.isInitialized(),
                  "u" > typeof (null == t ? void 0 : t.id)
                    ? await this.unsubscribeById(e, t.id, t)
                    : await this.unsubscribeByTopic(e, t);
              }),
              aF(
                this,
                "isSubscribed",
                (e) =>
                  new Promise((t) => {
                    t(this.topicMap.topics.includes(e));
                  })
              ),
              aF(
                this,
                "isKnownTopic",
                (e) =>
                  new Promise((t) => {
                    t(
                      this.topicMap.topics.includes(e) ||
                        this.pending.has(e) ||
                        this.cached.some((t) => t.topic === e)
                    );
                  })
              ),
              aF(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              aF(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              aF(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              aF(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              aF(this, "start", async () => {
                await this.onConnect();
              }),
              aF(this, "stop", async () => {
                await this.onDisconnect();
              }),
              aF(this, "restart", async () => {
                await this.restore(), await this.onRestart();
              }),
              aF(this, "checkPending", async () => {
                if (
                  0 === this.pending.size &&
                  (!this.initialized || !this.relayer.connected)
                )
                  return;
                let e = [];
                this.pending.forEach((t) => {
                  e.push(t);
                }),
                  await this.batchSubscribe(e);
              }),
              aF(this, "registerEventListeners", () => {
                this.relayer.core.heartbeat.on(
                  n.HEARTBEAT_EVENTS.pulse,
                  async () => {
                    await this.checkPending();
                  }
                ),
                  this.events.on(oo.created, async (e) => {
                    let t = oo.created;
                    this.logger.info("Emitting ".concat(t)),
                      this.logger.debug({ type: "event", event: t, data: e }),
                      await this.persist();
                  }),
                  this.events.on(oo.deleted, async (e) => {
                    let t = oo.deleted;
                    this.logger.info("Emitting ".concat(t)),
                      this.logger.debug({ type: "event", event: t, data: e }),
                      await this.persist();
                  });
              }),
              (this.relayer = e),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              (this.clientId = "");
          }
        }
        var aK = Object.defineProperty,
          aW = Object.getOwnPropertySymbols,
          aG = Object.prototype.hasOwnProperty,
          aJ = Object.prototype.propertyIsEnumerable,
          aY = (e, t, i) =>
            t in e
              ? aK(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          aX = (e, t) => {
            for (var i in t || (t = {})) aG.call(t, i) && aY(e, i, t[i]);
            if (aW) for (var i of aW(t)) aJ.call(t, i) && aY(e, i, t[i]);
            return e;
          },
          aZ = (e, t, i) => aY(e, "symbol" != typeof t ? t + "" : t, i);
        class aQ extends m {
          async init() {
            this.logger.trace("Initialized"),
              this.registerEventListeners(),
              await Promise.all([this.messages.init(), this.subscriber.init()]),
              (this.initialized = !0),
              this.transportOpen().catch((e) =>
                this.logger.warn(e, null == e ? void 0 : e.message)
              );
          }
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get connected() {
            var e, t, i;
            return (
              (null ==
              (i =
                null ==
                (t = null == (e = this.provider) ? void 0 : e.connection)
                  ? void 0
                  : t.socket)
                ? void 0
                : i.readyState) === 1
            );
          }
          get connecting() {
            var e, t, i;
            return (
              (null ==
              (i =
                null ==
                (t = null == (e = this.provider) ? void 0 : e.connection)
                  ? void 0
                  : t.socket)
                ? void 0
                : i.readyState) === 0 || void 0 !== this.connectPromise
            );
          }
          async publish(e, t, i) {
            this.isInitialized(),
              await this.publisher.publish(e, t, i),
              await this.recordMessageEvent(
                {
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                  transportType: or.relay,
                },
                os.outbound
              );
          }
          async subscribe(e, t) {
            var i, r, s;
            this.isInitialized(),
              (null != t &&
                t.transportType &&
                (null == t ? void 0 : t.transportType) !== "relay") ||
                (await this.toEstablishConnection());
            let n =
                typeof (null == (i = null == t ? void 0 : t.internal)
                  ? void 0
                  : i.throwOnFailedPublish) > "u" ||
                (null == (r = null == t ? void 0 : t.internal)
                  ? void 0
                  : r.throwOnFailedPublish),
              o =
                (null == (s = this.subscriber.topicMap.get(e))
                  ? void 0
                  : s[0]) || "",
              a,
              c = (t) => {
                t.topic === e && (this.subscriber.off(oo.created, c), a());
              };
            return (
              await Promise.all([
                new Promise((e) => {
                  (a = e), this.subscriber.on(oo.created, c);
                }),
                new Promise(async (i, r) => {
                  (o =
                    (await this.subscriber
                      .subscribe(
                        e,
                        aX({ internal: { throwOnFailedPublish: n } }, t)
                      )
                      .catch((e) => {
                        n && r(e);
                      })) || o),
                    i();
                }),
              ]),
              o
            );
          }
          async unsubscribe(e, t) {
            this.isInitialized(), await this.subscriber.unsubscribe(e, t);
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async transportDisconnect() {
            this.provider.disconnect &&
            (this.hasExperiencedNetworkDisruption || this.connected)
              ? await tb(
                  this.provider.disconnect(),
                  2e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.onProviderDisconnect();
          }
          async transportClose() {
            (this.transportExplicitlyClosed = !0),
              await this.transportDisconnect();
          }
          async transportOpen(e) {
            if (!this.subscriber.hasAnyTopics)
              return void this.logger.warn(
                "Starting WS connection skipped because the client has no topics to work with."
              );
            if (
              (this.connectPromise
                ? (this.logger.debug(
                    {},
                    "Waiting for existing connection attempt to resolve..."
                  ),
                  await this.connectPromise,
                  this.logger.debug({}, "Existing connection attempt resolved"))
                : ((this.connectPromise = new Promise(async (t, i) => {
                    await this.connect(e)
                      .then(t)
                      .catch(i)
                      .finally(() => {
                        this.connectPromise = void 0;
                      });
                  })),
                  await this.connectPromise),
              !this.connected)
            )
              throw Error(
                "Couldn't establish socket connection to the relay server: ".concat(
                  this.relayUrl
                )
              );
          }
          async restartTransport(e) {
            this.logger.debug({}, "Restarting transport..."),
              this.connectionAttemptInProgress ||
                ((this.relayUrl = e || this.relayUrl),
                await this.confirmOnlineStateOrThrow(),
                await this.transportClose(),
                await this.transportOpen());
          }
          async confirmOnlineStateOrThrow() {
            if (!(await nG()))
              throw Error(
                "No internet connection detected. Please restart your network and try again."
              );
          }
          async handleBatchMessageEvents(e) {
            if ((null == e ? void 0 : e.length) === 0)
              return void this.logger.trace(
                "Batch message events is empty. Ignoring..."
              );
            let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
            for (let e of (this.logger.debug(
              "Batch of ".concat(t.length, " message events sorted")
            ),
            t))
              try {
                await this.onMessageEvent(e);
              } catch (e) {
                this.logger.warn(
                  e,
                  "Error while processing batch message event: " +
                    (null == e ? void 0 : e.message)
                );
              }
            this.logger.trace(
              "Batch of ".concat(t.length, " message events processed")
            );
          }
          async onLinkMessageEvent(e, t) {
            let { topic: i } = e;
            if (!t.sessionExists) {
              let e = tE(O.FIVE_MINUTES);
              await this.core.pairing.pairings.set(i, {
                topic: i,
                expiry: e,
                relay: { protocol: "irn" },
                active: !1,
              });
            }
            this.events.emit(oe.message, e),
              await this.recordMessageEvent(e, os.inbound);
          }
          async connect(e) {
            await this.confirmOnlineStateOrThrow(),
              e &&
                e !== this.relayUrl &&
                ((this.relayUrl = e), await this.transportDisconnect()),
              (this.connectionAttemptInProgress = !0),
              (this.transportExplicitlyClosed = !1);
            let t = 1;
            for (; t < 6; ) {
              try {
                if (this.transportExplicitlyClosed) break;
                this.logger.debug(
                  {},
                  "Connecting to "
                    .concat(this.relayUrl, ", attempt: ")
                    .concat(t, "...")
                ),
                  await this.createProvider(),
                  await new Promise(async (e, t) => {
                    let i = () => {
                      t(
                        Error("Connection interrupted while trying to connect")
                      );
                    };
                    this.provider.once(ot.disconnect, i),
                      await tb(
                        new Promise((e, t) => {
                          this.provider.connect().then(e).catch(t);
                        }),
                        this.connectTimeout,
                        "Socket stalled when trying to connect to ".concat(
                          this.relayUrl
                        )
                      )
                        .catch((e) => {
                          t(e);
                        })
                        .finally(() => {
                          this.provider.off(ot.disconnect, i),
                            clearTimeout(this.reconnectTimeout);
                        }),
                      await new Promise(async (e, i) => {
                        let r = () => {
                          t(
                            Error(
                              "Connection interrupted while trying to subscribe"
                            )
                          );
                        };
                        this.provider.once(ot.disconnect, r),
                          await this.subscriber
                            .start()
                            .then(e)
                            .catch(i)
                            .finally(() => {
                              this.provider.off(ot.disconnect, r);
                            });
                      }),
                      (this.hasExperiencedNetworkDisruption = !1),
                      e();
                  });
              } catch (e) {
                await this.subscriber.stop(),
                  this.logger.warn({}, e.message),
                  (this.hasExperiencedNetworkDisruption = !0);
              } finally {
                this.connectionAttemptInProgress = !1;
              }
              if (this.connected) {
                this.logger.debug(
                  {},
                  "Connected to "
                    .concat(this.relayUrl, " successfully on attempt: ")
                    .concat(t)
                );
                break;
              }
              await new Promise((e) => setTimeout(e, (0, O.toMiliseconds)(+t))),
                t++;
            }
          }
          startPingTimeout() {
            var e, t, i, r, s;
            if (ta())
              try {
                null !=
                  (t = null == (e = this.provider) ? void 0 : e.connection) &&
                  t.socket &&
                  (null ==
                    (s =
                      null ==
                      (r = null == (i = this.provider) ? void 0 : i.connection)
                        ? void 0
                        : r.socket) ||
                    s.on("ping", () => {
                      this.resetPingTimeout();
                    })),
                  this.resetPingTimeout();
              } catch (e) {
                this.logger.warn(e, null == e ? void 0 : e.message);
              }
          }
          async createProvider() {
            this.provider.connection && this.unregisterProviderListeners();
            let e = await this.core.crypto.signJWT(this.relayUrl);
            (this.provider = new nQ.JsonRpcProvider(
              new n1.default(
                (function (e) {
                  let {
                      protocol: t,
                      version: i,
                      relayUrl: r,
                      sdkVersion: s,
                      auth: n,
                      projectId: o,
                      useOnCloseEvent: a,
                      bundleId: c,
                      packageName: l,
                    } = e,
                    h = r.split("?"),
                    d = tp(t, i, s),
                    u = (function (e, t) {
                      let i = new URLSearchParams(e);
                      for (let e of Object.keys(t).sort())
                        if (t.hasOwnProperty(e)) {
                          let r = t[e];
                          void 0 !== r && i.set(e, r);
                        }
                      return i.toString();
                    })(h[1] || "", {
                      auth: n,
                      ua: d,
                      projectId: o,
                      useOnCloseEvent: a || void 0,
                      packageName: l || void 0,
                      bundleId: c || void 0,
                    });
                  return h[0] + "?" + u;
                })({
                  sdkVersion: oi,
                  protocol: this.protocol,
                  version: this.version,
                  relayUrl: this.relayUrl,
                  projectId: this.projectId,
                  auth: e,
                  useOnCloseEvent: !0,
                  bundleId: this.bundleId,
                  packageName: this.packageName,
                })
              )
            )),
              this.registerProviderListeners();
          }
          async recordMessageEvent(e, t) {
            let { topic: i, message: r } = e;
            await this.messages.set(i, r, t);
          }
          async shouldIgnoreMessageEvent(e) {
            let { topic: t, message: i } = e;
            if (!i || 0 === i.length)
              return (
                this.logger.warn("Ignoring invalid/empty message: ".concat(i)),
                !0
              );
            if (!(await this.subscriber.isKnownTopic(t)))
              return (
                this.logger.warn(
                  "Ignoring message for unknown topic ".concat(t)
                ),
                !0
              );
            let r = this.messages.has(t, i);
            return (
              r && this.logger.warn("Ignoring duplicate message: ".concat(i)), r
            );
          }
          async onProviderPayload(e) {
            if (
              (this.logger.debug("Incoming Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e,
              }),
              (0, n0.isJsonRpcRequest)(e))
            ) {
              if (!e.method.endsWith("_subscription")) return;
              let t = e.params,
                {
                  topic: i,
                  message: r,
                  publishedAt: s,
                  attestation: n,
                } = t.data,
                o = {
                  topic: i,
                  message: r,
                  publishedAt: s,
                  transportType: or.relay,
                  attestation: n,
                };
              this.logger.debug("Emitting Relayer Payload"),
                this.logger.trace(aX({ type: "event", event: t.id }, o)),
                this.events.emit(t.id, o),
                await this.acknowledgePayload(e),
                await this.onMessageEvent(o);
            } else
              (0, n0.isJsonRpcResponse)(e) &&
                this.events.emit(oe.message_ack, e);
          }
          async onMessageEvent(e) {
            (await this.shouldIgnoreMessageEvent(e)) ||
              (await this.recordMessageEvent(e, os.inbound),
              this.events.emit(oe.message, e));
          }
          async acknowledgePayload(e) {
            let t = (0, n$.formatJsonRpcResult)(e.id, !0);
            await this.provider.connection.send(t);
          }
          unregisterProviderListeners() {
            this.provider.off(ot.payload, this.onPayloadHandler),
              this.provider.off(ot.connect, this.onConnectHandler),
              this.provider.off(ot.disconnect, this.onDisconnectHandler),
              this.provider.off(ot.error, this.onProviderErrorHandler),
              clearTimeout(this.pingTimeout);
          }
          async registerEventListeners() {
            let e = await nG();
            (function (e) {
              var t, i, r;
              switch (th()) {
                case to.browser:
                  (t = e),
                    !tc() &&
                      tl() &&
                      (window.addEventListener("online", () => t(!0)),
                      window.addEventListener("offline", () => t(!1)));
                  break;
                case to.reactNative:
                  (i = e),
                    tc() &&
                      null != globalThis &&
                      globalThis.NetInfo &&
                      (null == (r = globalThis) ||
                        r.NetInfo.addEventListener((e) =>
                          i(null == e ? void 0 : e.isConnected)
                        ));
                case to.node:
              }
            })(async (t) => {
              e !== t &&
                ((e = t),
                t
                  ? await this.transportOpen().catch((e) =>
                      this.logger.error(e, null == e ? void 0 : e.message)
                    )
                  : ((this.hasExperiencedNetworkDisruption = !0),
                    await this.transportDisconnect(),
                    (this.transportExplicitlyClosed = !1)));
            }),
              this.core.heartbeat.on(n.HEARTBEAT_EVENTS.pulse, async () => {
                var e;
                if (
                  !this.transportExplicitlyClosed &&
                  !this.connected &&
                  (!(tl() && (0, N.getDocument)()) ||
                    (null == (e = (0, N.getDocument)())
                      ? void 0
                      : e.visibilityState) === "visible")
                )
                  try {
                    await this.confirmOnlineStateOrThrow(),
                      await this.transportOpen();
                  } catch (e) {
                    this.logger.warn(e, null == e ? void 0 : e.message);
                  }
              });
          }
          async onProviderDisconnect() {
            clearTimeout(this.pingTimeout),
              this.events.emit(oe.disconnect),
              (this.connectionAttemptInProgress = !1),
              !this.reconnectInProgress &&
                ((this.reconnectInProgress = !0),
                await this.subscriber.stop(),
                this.subscriber.hasAnyTopics &&
                  (this.transportExplicitlyClosed ||
                    (this.reconnectTimeout = setTimeout(async () => {
                      await this.transportOpen().catch((e) =>
                        this.logger.error(e, null == e ? void 0 : e.message)
                      ),
                        (this.reconnectTimeout = void 0),
                        (this.reconnectInProgress = !1);
                    }, (0, O.toMiliseconds)(0.1)))));
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          async toEstablishConnection() {
            if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
              if (this.connectPromise) return void (await this.connectPromise);
              await this.connect();
            }
          }
          constructor(e) {
            super(e),
              aZ(this, "protocol", "wc"),
              aZ(this, "version", 2),
              aZ(this, "core"),
              aZ(this, "logger"),
              aZ(this, "events", new s.EventEmitter()),
              aZ(this, "provider"),
              aZ(this, "messages"),
              aZ(this, "subscriber"),
              aZ(this, "publisher"),
              aZ(this, "name", "relayer"),
              aZ(this, "transportExplicitlyClosed", !1),
              aZ(this, "initialized", !1),
              aZ(this, "connectionAttemptInProgress", !1),
              aZ(this, "relayUrl"),
              aZ(this, "projectId"),
              aZ(this, "packageName"),
              aZ(this, "bundleId"),
              aZ(this, "hasExperiencedNetworkDisruption", !1),
              aZ(this, "pingTimeout"),
              aZ(
                this,
                "heartBeatTimeout",
                (0, O.toMiliseconds)(O.THIRTY_SECONDS + O.FIVE_SECONDS)
              ),
              aZ(this, "reconnectTimeout"),
              aZ(this, "connectPromise"),
              aZ(this, "reconnectInProgress", !1),
              aZ(this, "requestsInFlight", []),
              aZ(
                this,
                "connectTimeout",
                (0, O.toMiliseconds)(15 * O.ONE_SECOND)
              ),
              aZ(this, "request", async (e) => {
                var t, i;
                this.logger.debug("Publishing Request Payload");
                let r = e.id || (0, n$.getBigIntRpcId)().toString();
                await this.toEstablishConnection();
                try {
                  this.logger.trace(
                    {
                      id: r,
                      method: e.method,
                      topic: null == (t = e.params) ? void 0 : t.topic,
                    },
                    "relayer.request - publishing..."
                  );
                  let s = ""
                    .concat(r, ":")
                    .concat((null == (i = e.params) ? void 0 : i.tag) || "");
                  this.requestsInFlight.push(s);
                  let n = await this.provider.request(e);
                  return (
                    (this.requestsInFlight = this.requestsInFlight.filter(
                      (e) => e !== s
                    )),
                    n
                  );
                } catch (e) {
                  throw (
                    (this.logger.debug("Failed to Publish Request: ".concat(r)),
                    e)
                  );
                }
              }),
              aZ(this, "resetPingTimeout", () => {
                ta() &&
                  (clearTimeout(this.pingTimeout),
                  (this.pingTimeout = setTimeout(() => {
                    var e, t, i, r;
                    try {
                      this.logger.debug(
                        {},
                        "pingTimeout: Connection stalled, terminating..."
                      ),
                        null ==
                          (r =
                            null ==
                            (i =
                              null ==
                              (t =
                                null == (e = this.provider)
                                  ? void 0
                                  : e.connection)
                                ? void 0
                                : t.socket)
                              ? void 0
                              : i.terminate) || r.call(i);
                    } catch (e) {
                      this.logger.warn(e, null == e ? void 0 : e.message);
                    }
                  }, this.heartBeatTimeout)));
              }),
              aZ(this, "onPayloadHandler", (e) => {
                this.onProviderPayload(e), this.resetPingTimeout();
              }),
              aZ(this, "onConnectHandler", () => {
                this.logger.warn({}, "Relayer connected 🛜"),
                  this.startPingTimeout(),
                  this.events.emit(oe.connect);
              }),
              aZ(this, "onDisconnectHandler", () => {
                this.logger.warn({}, "Relayer disconnected 🛑"),
                  (this.requestsInFlight = []),
                  this.onProviderDisconnect();
              }),
              aZ(this, "onProviderErrorHandler", (e) => {
                this.logger.fatal("Fatal socket error: ".concat(e.message)),
                  this.events.emit(oe.error, e),
                  this.logger.fatal(
                    "Fatal socket error received, closing transport"
                  ),
                  this.transportClose();
              }),
              aZ(this, "registerProviderListeners", () => {
                this.provider.on(ot.payload, this.onPayloadHandler),
                  this.provider.on(ot.connect, this.onConnectHandler),
                  this.provider.on(ot.disconnect, this.onDisconnectHandler),
                  this.provider.on(ot.error, this.onProviderErrorHandler);
              }),
              (this.core = e.core),
              (this.logger =
                "u" > typeof e.logger && "string" != typeof e.logger
                  ? (0, a.generateChildLogger)(e.logger, this.name)
                  : (0, c.pino)(
                      (0, a.getDefaultLoggerOptions)({
                        level: e.logger || "error",
                      })
                    )),
              (this.messages = new av(this.logger, e.core)),
              (this.subscriber = new aV(this, this.logger)),
              (this.publisher = new aR(this, this.logger)),
              (this.relayUrl = (null == e ? void 0 : e.relayUrl) || n7),
              (this.projectId = e.projectId),
              tc() &&
              "u" >
                typeof (null == globalThis ? void 0 : globalThis.Platform) &&
              (null == globalThis ? void 0 : globalThis.Platform.OS) ===
                "android"
                ? (this.packageName = td())
                : tc() &&
                  "u" >
                    typeof (null == globalThis
                      ? void 0
                      : globalThis.Platform) &&
                  (null == globalThis ? void 0 : globalThis.Platform.OS) ===
                    "ios" &&
                  (this.bundleId = td()),
              (this.provider = {});
          }
        }
        function a$(e) {
          return Object.getOwnPropertySymbols(e).filter((t) =>
            Object.prototype.propertyIsEnumerable.call(e, t)
          );
        }
        function a0(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(e);
        }
        let a1 = "[object Arguments]",
          a2 = "[object Object]";
        function a6() {}
        function a8(e) {
          if (!e || "object" != typeof e) return !1;
          let t = Object.getPrototypeOf(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
        }
        var a3 = Object.defineProperty,
          a5 = Object.getOwnPropertySymbols,
          a4 = Object.prototype.hasOwnProperty,
          a9 = Object.prototype.propertyIsEnumerable,
          a7 = (e, t, i) =>
            t in e
              ? a3(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          ce = (e, t) => {
            for (var i in t || (t = {})) a4.call(t, i) && a7(e, i, t[i]);
            if (a5) for (var i of a5(t)) a9.call(t, i) && a7(e, i, t[i]);
            return e;
          },
          ct = (e, t, i) => a7(e, "symbol" != typeof t ? t + "" : t, i);
        class ci extends b {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get length() {
            return this.map.size;
          }
          get keys() {
            return Array.from(this.map.keys());
          }
          get values() {
            return Array.from(this.map.values());
          }
          addToRecentlyDeleted(e) {
            this.recentlyDeleted.push(e),
              this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
                this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
          }
          async setDataStore(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getDataStore() {
            return await this.core.storage.getItem(this.storageKey);
          }
          getData(e) {
            let t = this.map.get(e);
            if (!t) {
              if (this.recentlyDeleted.includes(e)) {
                let { message: t } = nT(
                  "MISSING_OR_INVALID",
                  "Record was recently deleted - "
                    .concat(this.name, ": ")
                    .concat(e)
                );
                throw (this.logger.error(t), Error(t));
              }
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw (this.logger.error(t), Error(t));
            }
            return t;
          }
          async persist() {
            await this.setDataStore(this.values);
          }
          async restore() {
            try {
              let e = await this.getDataStore();
              if (typeof e > "u" || !e.length) return;
              if (this.map.size) {
                let { message: e } = nT("RESTORE_WILL_OVERRIDE", this.name);
                throw (this.logger.error(e), Error(e));
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored value for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  value: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore value for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t, r, s = n6, n) {
            super(e, t, r, s),
              (this.core = e),
              (this.logger = t),
              (this.name = r),
              ct(this, "map", new Map()),
              ct(this, "version", "0.3"),
              ct(this, "cached", []),
              ct(this, "initialized", !1),
              ct(this, "getKey"),
              ct(this, "storagePrefix", n6),
              ct(this, "recentlyDeleted", []),
              ct(this, "recentlyDeletedLimit", 200),
              ct(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  await this.restore(),
                  this.cached.forEach((e) => {
                    this.getKey && null !== e && !nD(e)
                      ? this.map.set(this.getKey(e), e)
                      : (function (e) {
                          var t;
                          return null == (t = null == e ? void 0 : e.proposer)
                            ? void 0
                            : t.publicKey;
                        })(e)
                      ? this.map.set(e.id, e)
                      : (function (e) {
                          return null == e ? void 0 : e.topic;
                        })(e) && this.map.set(e.topic, e);
                  }),
                  (this.cached = []),
                  (this.initialized = !0));
              }),
              ct(this, "set", async (e, t) => {
                this.isInitialized(),
                  this.map.has(e)
                    ? await this.update(e, t)
                    : (this.logger.debug("Setting value"),
                      this.logger.trace({
                        type: "method",
                        method: "set",
                        key: e,
                        value: t,
                      }),
                      this.map.set(e, t),
                      await this.persist());
              }),
              ct(
                this,
                "get",
                (e) => (
                  this.isInitialized(),
                  this.logger.debug("Getting value"),
                  this.logger.trace({ type: "method", method: "get", key: e }),
                  this.getData(e)
                )
              ),
              ct(
                this,
                "getAll",
                (e) => (
                  this.isInitialized(),
                  e
                    ? this.values.filter((t) =>
                        Object.keys(e).every((r) => {
                          var s;
                          return (
                            (s = t[r]),
                            (function e(t, r, s, n, o, a, c) {
                              let l = c(t, r, s, n, o, a);
                              if (void 0 !== l) return l;
                              if (typeof t == typeof r)
                                switch (typeof t) {
                                  case "bigint":
                                  case "string":
                                  case "boolean":
                                  case "symbol":
                                  case "undefined":
                                  case "function":
                                    return t === r;
                                  case "number":
                                    return t === r || Object.is(t, r);
                                }
                              return (function t(r, s, n, o) {
                                if (Object.is(r, s)) return !0;
                                let a = a0(r),
                                  c = a0(s);
                                if (
                                  (a === a1 && (a = a2),
                                  c === a1 && (c = a2),
                                  a !== c)
                                )
                                  return !1;
                                switch (a) {
                                  case "[object String]":
                                    return r.toString() === s.toString();
                                  case "[object Number]": {
                                    let e = r.valueOf(),
                                      t = s.valueOf();
                                    return (
                                      e === t ||
                                      (Number.isNaN(e) && Number.isNaN(t))
                                    );
                                  }
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Symbol]":
                                    return Object.is(r.valueOf(), s.valueOf());
                                  case "[object RegExp]":
                                    return (
                                      r.source === s.source &&
                                      r.flags === s.flags
                                    );
                                  case "[object Function]":
                                    return r === s;
                                }
                                let l = (n = null != n ? n : new Map()).get(r),
                                  h = n.get(s);
                                if (null != l && null != h) return l === s;
                                n.set(r, s), n.set(s, r);
                                try {
                                  switch (a) {
                                    case "[object Map]":
                                      if (r.size !== s.size) return !1;
                                      for (let [t, i] of r.entries())
                                        if (
                                          !s.has(t) ||
                                          !e(i, s.get(t), t, r, s, n, o)
                                        )
                                          return !1;
                                      return !0;
                                    case "[object Set]": {
                                      if (r.size !== s.size) return !1;
                                      let t = Array.from(r.values()),
                                        i = Array.from(s.values());
                                      for (let a = 0; a < t.length; a++) {
                                        let c = t[a],
                                          l = i.findIndex((t) =>
                                            e(c, t, void 0, r, s, n, o)
                                          );
                                        if (-1 === l) return !1;
                                        i.splice(l, 1);
                                      }
                                      return !0;
                                    }
                                    case "[object Array]":
                                    case "[object Uint8Array]":
                                    case "[object Uint8ClampedArray]":
                                    case "[object Uint16Array]":
                                    case "[object Uint32Array]":
                                    case "[object BigUint64Array]":
                                    case "[object Int8Array]":
                                    case "[object Int16Array]":
                                    case "[object Int32Array]":
                                    case "[object BigInt64Array]":
                                    case "[object Float32Array]":
                                    case "[object Float64Array]":
                                      if (
                                        ("u" > typeof i.Buffer &&
                                          i.Buffer.isBuffer(r) !==
                                            i.Buffer.isBuffer(s)) ||
                                        r.length !== s.length
                                      )
                                        return !1;
                                      for (let t = 0; t < r.length; t++)
                                        if (!e(r[t], s[t], t, r, s, n, o))
                                          return !1;
                                      return !0;
                                    case "[object ArrayBuffer]":
                                      return (
                                        r.byteLength === s.byteLength &&
                                        t(
                                          new Uint8Array(r),
                                          new Uint8Array(s),
                                          n,
                                          o
                                        )
                                      );
                                    case "[object DataView]":
                                      return (
                                        r.byteLength === s.byteLength &&
                                        r.byteOffset === s.byteOffset &&
                                        t(
                                          new Uint8Array(r),
                                          new Uint8Array(s),
                                          n,
                                          o
                                        )
                                      );
                                    case "[object Error]":
                                      return (
                                        r.name === s.name &&
                                        r.message === s.message
                                      );
                                    case a2: {
                                      if (
                                        !(
                                          t(
                                            r.constructor,
                                            s.constructor,
                                            n,
                                            o
                                          ) ||
                                          (a8(r) && a8(s))
                                        )
                                      )
                                        return !1;
                                      let i = [...Object.keys(r), ...a$(r)],
                                        a = [...Object.keys(s), ...a$(s)];
                                      if (i.length !== a.length) return !1;
                                      for (let t = 0; t < i.length; t++) {
                                        let a = i[t],
                                          c = r[a];
                                        if (!Object.hasOwn(s, a)) return !1;
                                        let l = s[a];
                                        if (!e(c, l, a, r, s, n, o)) return !1;
                                      }
                                      return !0;
                                    }
                                    default:
                                      return !1;
                                  }
                                } finally {
                                  n.delete(r), n.delete(s);
                                }
                              })(t, r, a, c);
                            })(s, e[r], void 0, void 0, void 0, void 0, a6)
                          );
                        })
                      )
                    : this.values
                )
              ),
              ct(this, "update", async (e, t) => {
                this.isInitialized(),
                  this.logger.debug("Updating value"),
                  this.logger.trace({
                    type: "method",
                    method: "update",
                    key: e,
                    update: t,
                  });
                let i = ce(ce({}, this.getData(e)), t);
                this.map.set(e, i), await this.persist();
              }),
              ct(this, "delete", async (e, t) => {
                this.isInitialized(),
                  this.map.has(e) &&
                    (this.logger.debug("Deleting value"),
                    this.logger.trace({
                      type: "method",
                      method: "delete",
                      key: e,
                      reason: t,
                    }),
                    this.map.delete(e),
                    this.addToRecentlyDeleted(e),
                    await this.persist());
              }),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              (this.storagePrefix = s),
              (this.getKey = n);
          }
        }
        var cr = Object.defineProperty,
          cs = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? cr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class cn {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          registerRelayerEvents() {
            this.core.relayer.on(oe.message, async (e) => {
              let { topic: t, message: i, transportType: r } = e;
              if (
                this.pairings.keys.includes(t) &&
                r !== or.link_mode &&
                !this.ignoredPayloadTypes.includes(
                  this.core.crypto.getPayloadType(i)
                )
              )
                try {
                  let e = await this.core.crypto.decode(t, i);
                  (0, n0.isJsonRpcRequest)(e)
                    ? (this.core.history.set(t, e),
                      await this.onRelayEventRequest({ topic: t, payload: e }))
                    : (0, n0.isJsonRpcResponse)(e) &&
                      (await this.core.history.resolve(e),
                      await this.onRelayEventResponse({ topic: t, payload: e }),
                      this.core.history.delete(t, e.id)),
                    await this.core.relayer.messages.ack(t, i);
                } catch (e) {
                  this.logger.error(e);
                }
            });
          }
          registerExpirerEvents() {
            this.core.expirer.on(oh.expired, async (e) => {
              let { topic: t } = tw(e.target);
              t &&
                this.pairings.keys.includes(t) &&
                (await this.deletePairing(t, !0),
                this.events.emit(oc.expire, { topic: t }));
            });
          }
          constructor(e, t) {
            (this.core = e),
              (this.logger = t),
              cs(this, "name", "pairing"),
              cs(this, "version", "0.3"),
              cs(this, "events", new s.default()),
              cs(this, "pairings"),
              cs(this, "initialized", !1),
              cs(this, "storagePrefix", n6),
              cs(this, "ignoredPayloadTypes", [1]),
              cs(this, "registeredMethods", []),
              cs(this, "init", async () => {
                this.initialized ||
                  (await this.pairings.init(),
                  await this.cleanup(),
                  this.registerRelayerEvents(),
                  this.registerExpirerEvents(),
                  (this.initialized = !0),
                  this.logger.trace("Initialized"));
              }),
              cs(this, "register", (e) => {
                let { methods: t } = e;
                this.isInitialized(),
                  (this.registeredMethods = [
                    ...new Set([...this.registeredMethods, ...t]),
                  ]);
              }),
              cs(this, "create", async (e) => {
                this.isInitialized();
                let t = s7(),
                  i = await this.core.crypto.setSymKey(t),
                  r = tE(O.FIVE_MINUTES),
                  s = { protocol: "irn" },
                  n = {
                    topic: i,
                    expiry: r,
                    relay: s,
                    active: !1,
                    methods: null == e ? void 0 : e.methods,
                  },
                  o = np({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: i,
                    symKey: t,
                    relay: s,
                    expiryTimestamp: r,
                    methods: null == e ? void 0 : e.methods,
                  });
                return (
                  this.events.emit(oc.create, n),
                  this.core.expirer.set(i, r),
                  await this.pairings.set(i, n),
                  await this.core.relayer.subscribe(i, {
                    transportType: null == e ? void 0 : e.transportType,
                  }),
                  { topic: i, uri: o }
                );
              }),
              cs(this, "pair", async (e) => {
                let t;
                this.isInitialized();
                let i = this.core.eventClient.createEvent({
                  properties: {
                    topic: null == e ? void 0 : e.uri,
                    trace: [of.pairing_started],
                  },
                });
                this.isValidPair(e, i);
                let {
                  topic: r,
                  symKey: s,
                  relay: n,
                  expiryTimestamp: o,
                  methods: a,
                } = nu(e.uri);
                if (
                  ((i.props.properties.topic = r),
                  i.addTrace(of.pairing_uri_validation_success),
                  i.addTrace(of.pairing_uri_not_expired),
                  this.pairings.keys.includes(r))
                ) {
                  if (
                    ((t = this.pairings.get(r)),
                    i.addTrace(of.existing_pairing),
                    t.active)
                  )
                    throw (
                      (i.setError(og.active_pairing_already_exists),
                      Error(
                        "Pairing already exists: ".concat(
                          r,
                          ". Please try again with a new connection URI."
                        )
                      ))
                    );
                  i.addTrace(of.pairing_not_expired);
                }
                let c = o || tE(O.FIVE_MINUTES),
                  l = { topic: r, relay: n, expiry: c, active: !1, methods: a };
                this.core.expirer.set(r, c),
                  await this.pairings.set(r, l),
                  i.addTrace(of.store_new_pairing),
                  e.activatePairing && (await this.activate({ topic: r })),
                  this.events.emit(oc.create, l),
                  i.addTrace(of.emit_inactive_pairing),
                  this.core.crypto.keychain.has(r) ||
                    (await this.core.crypto.setSymKey(s, r)),
                  i.addTrace(of.subscribing_pairing_topic);
                try {
                  await this.core.relayer.confirmOnlineStateOrThrow();
                } catch (e) {
                  i.setError(og.no_internet_connection);
                }
                try {
                  await this.core.relayer.subscribe(r, { relay: n });
                } catch (e) {
                  throw (i.setError(og.subscribe_pairing_topic_failure), e);
                }
                return i.addTrace(of.subscribe_pairing_topic_success), l;
              }),
              cs(this, "activate", async (e) => {
                let { topic: t } = e;
                this.isInitialized();
                let i = tE(O.FIVE_MINUTES);
                this.core.expirer.set(t, i),
                  await this.pairings.update(t, { active: !0, expiry: i });
              }),
              cs(this, "ping", async (e) => {
                this.isInitialized(),
                  await this.isValidPing(e),
                  this.logger.warn(
                    "ping() is deprecated and will be removed in the next major release."
                  );
                let { topic: t } = e;
                if (this.pairings.keys.includes(t)) {
                  let e = await this.sendRequest(t, "wc_pairingPing", {}),
                    { done: i, resolve: r, reject: s } = tm();
                  this.events.once(tx("pairing_ping", e), (e) => {
                    let { error: t } = e;
                    t ? s(t) : r();
                  }),
                    await i();
                }
              }),
              cs(this, "updateExpiry", async (e) => {
                let { topic: t, expiry: i } = e;
                this.isInitialized(),
                  await this.pairings.update(t, { expiry: i });
              }),
              cs(this, "updateMetadata", async (e) => {
                let { topic: t, metadata: i } = e;
                this.isInitialized(),
                  await this.pairings.update(t, { peerMetadata: i });
              }),
              cs(
                this,
                "getPairings",
                () => (this.isInitialized(), this.pairings.values)
              ),
              cs(this, "disconnect", async (e) => {
                this.isInitialized(), await this.isValidDisconnect(e);
                let { topic: t } = e;
                this.pairings.keys.includes(t) &&
                  (await this.sendRequest(
                    t,
                    "wc_pairingDelete",
                    nN("USER_DISCONNECTED")
                  ),
                  await this.deletePairing(t));
              }),
              cs(this, "formatUriFromPairing", (e) => {
                this.isInitialized();
                let { topic: t, relay: i, expiry: r, methods: s } = e,
                  n = this.core.crypto.keychain.get(t);
                return np({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: n,
                  relay: i,
                  expiryTimestamp: r,
                  methods: s,
                });
              }),
              cs(this, "sendRequest", async (e, t, i) => {
                let r = (0, n$.formatJsonRpcRequest)(t, i),
                  s = await this.core.crypto.encode(e, r),
                  n = oa[t].req;
                return (
                  this.core.history.set(e, r),
                  this.core.relayer.publish(e, s, n),
                  r.id
                );
              }),
              cs(this, "sendResult", async (e, t, i) => {
                let r = (0, n$.formatJsonRpcResult)(e, i),
                  s = await this.core.crypto.encode(t, r),
                  n =
                    oa[(await this.core.history.get(t, e)).request.method].res;
                await this.core.relayer.publish(t, s, n),
                  await this.core.history.resolve(r);
              }),
              cs(this, "sendError", async (e, t, i) => {
                let r = (0, n$.formatJsonRpcError)(e, i),
                  s = await this.core.crypto.encode(t, r),
                  n = (await this.core.history.get(t, e)).request.method,
                  o = oa[n] ? oa[n].res : oa.unregistered_method.res;
                await this.core.relayer.publish(t, s, o),
                  await this.core.history.resolve(r);
              }),
              cs(this, "deletePairing", async (e, t) => {
                await this.core.relayer.unsubscribe(e),
                  await Promise.all([
                    this.pairings.delete(e, nN("USER_DISCONNECTED")),
                    this.core.crypto.deleteSymKey(e),
                    t ? Promise.resolve() : this.core.expirer.del(e),
                  ]);
              }),
              cs(this, "cleanup", async () => {
                let e = this.pairings.getAll().filter((e) => tI(e.expiry));
                await Promise.all(e.map((e) => this.deletePairing(e.topic)));
              }),
              cs(this, "onRelayEventRequest", async (e) => {
                let { topic: t, payload: i } = e;
                switch (i.method) {
                  case "wc_pairingPing":
                    return await this.onPairingPingRequest(t, i);
                  case "wc_pairingDelete":
                    return await this.onPairingDeleteRequest(t, i);
                  default:
                    return await this.onUnknownRpcMethodRequest(t, i);
                }
              }),
              cs(this, "onRelayEventResponse", async (e) => {
                let { topic: t, payload: i } = e,
                  r = (await this.core.history.get(t, i.id)).request.method;
                return "wc_pairingPing" === r
                  ? this.onPairingPingResponse(t, i)
                  : this.onUnknownRpcMethodResponse(r);
              }),
              cs(this, "onPairingPingRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidPing({ topic: e }),
                    await this.sendResult(i, e, !0),
                    this.events.emit(oc.ping, { id: i, topic: e });
                } catch (t) {
                  await this.sendError(i, e, t), this.logger.error(t);
                }
              }),
              cs(this, "onPairingPingResponse", (e, t) => {
                let { id: i } = t;
                setTimeout(() => {
                  (0, n0.isJsonRpcResult)(t)
                    ? this.events.emit(tx("pairing_ping", i), {})
                    : (0, n0.isJsonRpcError)(t) &&
                      this.events.emit(tx("pairing_ping", i), {
                        error: t.error,
                      });
                }, 500);
              }),
              cs(this, "onPairingDeleteRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidDisconnect({ topic: e }),
                    await this.deletePairing(e),
                    this.events.emit(oc.delete, { id: i, topic: e });
                } catch (t) {
                  await this.sendError(i, e, t), this.logger.error(t);
                }
              }),
              cs(this, "onUnknownRpcMethodRequest", async (e, t) => {
                let { id: i, method: r } = t;
                try {
                  if (this.registeredMethods.includes(r)) return;
                  let t = nN("WC_METHOD_UNSUPPORTED", r);
                  await this.sendError(i, e, t), this.logger.error(t);
                } catch (t) {
                  await this.sendError(i, e, t), this.logger.error(t);
                }
              }),
              cs(this, "onUnknownRpcMethodResponse", (e) => {
                this.registeredMethods.includes(e) ||
                  this.logger.error(nN("WC_METHOD_UNSUPPORTED", e));
              }),
              cs(this, "isValidPair", (e, t) => {
                var i;
                if (!nF(e)) {
                  let { message: i } = nT(
                    "MISSING_OR_INVALID",
                    "pair() params: ".concat(e)
                  );
                  throw (t.setError(og.malformed_pairing_uri), Error(i));
                }
                if (
                  !(function (e) {
                    function t(e) {
                      try {
                        return "u" > typeof new URL(e);
                      } catch (e) {
                        return !1;
                      }
                    }
                    try {
                      if (nq(e, !1)) {
                        if (t(e)) return !0;
                        let i = tR(e);
                        return t(i);
                      }
                    } catch (e) {}
                    return !1;
                  })(e.uri)
                ) {
                  let { message: i } = nT(
                    "MISSING_OR_INVALID",
                    "pair() uri: ".concat(e.uri)
                  );
                  throw (t.setError(og.malformed_pairing_uri), Error(i));
                }
                let r = nu(null == e ? void 0 : e.uri);
                if (
                  !(null != (i = null == r ? void 0 : r.relay) && i.protocol)
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "pair() uri#relay-protocol"
                  );
                  throw (t.setError(og.malformed_pairing_uri), Error(e));
                }
                if (!(null != r && r.symKey)) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "pair() uri#symKey"
                  );
                  throw (t.setError(og.malformed_pairing_uri), Error(e));
                }
                if (
                  null != r &&
                  r.expiryTimestamp &&
                  (0, O.toMiliseconds)(null == r ? void 0 : r.expiryTimestamp) <
                    Date.now()
                ) {
                  t.setError(og.pairing_expired);
                  let { message: e } = nT(
                    "EXPIRED",
                    "pair() URI has expired. Please try again with a new connection URI."
                  );
                  throw Error(e);
                }
              }),
              cs(this, "isValidPing", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "ping() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidPairingTopic(t);
              }),
              cs(this, "isValidDisconnect", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "disconnect() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidPairingTopic(t);
              }),
              cs(this, "isValidPairingTopic", async (e) => {
                if (!nq(e, !1)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "pairing topic should be a string: ".concat(e)
                  );
                  throw Error(t);
                }
                if (!this.pairings.keys.includes(e)) {
                  let { message: t } = nT(
                    "NO_MATCHING_KEY",
                    "pairing topic doesn't exist: ".concat(e)
                  );
                  throw Error(t);
                }
                if (tI(this.pairings.get(e).expiry)) {
                  await this.deletePairing(e);
                  let { message: t } = nT(
                    "EXPIRED",
                    "pairing topic: ".concat(e)
                  );
                  throw Error(t);
                }
              }),
              (this.core = e),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              (this.pairings = new ci(
                this.core,
                this.logger,
                this.name,
                this.storagePrefix
              ));
          }
        }
        var co = Object.defineProperty,
          ca = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? co(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class cc extends f {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get size() {
            return this.records.size;
          }
          get keys() {
            return Array.from(this.records.keys());
          }
          get values() {
            return Array.from(this.records.values());
          }
          get pending() {
            let e = [];
            return (
              this.values.forEach((t) => {
                if ("u" > typeof t.response) return;
                let i = {
                  topic: t.topic,
                  request: (0, n$.formatJsonRpcRequest)(
                    t.request.method,
                    t.request.params,
                    t.id
                  ),
                  chainId: t.chainId,
                };
                return e.push(i);
              }),
              e
            );
          }
          async setJsonRpcRecords(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getJsonRpcRecords() {
            return await this.core.storage.getItem(this.storageKey);
          }
          getRecord(e) {
            this.isInitialized();
            let t = this.records.get(e);
            if (!t) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw Error(t);
            }
            return t;
          }
          async persist() {
            await this.setJsonRpcRecords(this.values),
              this.events.emit(ol.sync);
          }
          async restore() {
            try {
              let e = await this.getJsonRpcRecords();
              if (typeof e > "u" || !e.length) return;
              if (this.records.size) {
                let { message: e } = nT("RESTORE_WILL_OVERRIDE", this.name);
                throw (this.logger.error(e), Error(e));
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored records for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  records: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore records for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          registerEventListeners() {
            this.events.on(ol.created, (e) => {
              let t = ol.created;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
              this.events.on(ol.updated, (e) => {
                let t = ol.updated;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, record: e });
              }),
              this.events.on(ol.deleted, (e) => {
                let t = ol.deleted;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, record: e });
              }),
              this.core.heartbeat.on(n.HEARTBEAT_EVENTS.pulse, () => {
                this.cleanup();
              });
          }
          cleanup() {
            try {
              this.isInitialized();
              let e = !1;
              this.records.forEach((t) => {
                (0, O.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                  (this.logger.info(
                    "Deleting expired history log: ".concat(t.id)
                  ),
                  this.records.delete(t.id),
                  this.events.emit(ol.deleted, t, !1),
                  (e = !0));
              }),
                e && this.persist();
            } catch (e) {
              this.logger.warn(e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            super(e, t),
              (this.core = e),
              (this.logger = t),
              ca(this, "records", new Map()),
              ca(this, "events", new s.EventEmitter()),
              ca(this, "name", "history"),
              ca(this, "version", "0.3"),
              ca(this, "cached", []),
              ca(this, "initialized", !1),
              ca(this, "storagePrefix", n6),
              ca(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  await this.restore(),
                  this.cached.forEach((e) => this.records.set(e.id, e)),
                  (this.cached = []),
                  this.registerEventListeners(),
                  (this.initialized = !0));
              }),
              ca(this, "set", (e, t, i) => {
                if (
                  (this.isInitialized(),
                  this.logger.debug("Setting JSON-RPC request history record"),
                  this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: e,
                    request: t,
                    chainId: i,
                  }),
                  this.records.has(t.id))
                )
                  return;
                let r = {
                  id: t.id,
                  topic: e,
                  request: { method: t.method, params: t.params || null },
                  chainId: i,
                  expiry: tE(O.THIRTY_DAYS),
                };
                this.records.set(r.id, r),
                  this.persist(),
                  this.events.emit(ol.created, r);
              }),
              ca(this, "resolve", async (e) => {
                if (
                  (this.isInitialized(),
                  this.logger.debug(
                    "Updating JSON-RPC response history record"
                  ),
                  this.logger.trace({
                    type: "method",
                    method: "update",
                    response: e,
                  }),
                  !this.records.has(e.id))
                )
                  return;
                let t = await this.getRecord(e.id);
                typeof t.response > "u" &&
                  ((t.response = (0, n0.isJsonRpcError)(e)
                    ? { error: e.error }
                    : { result: e.result }),
                  this.records.set(t.id, t),
                  this.persist(),
                  this.events.emit(ol.updated, t));
              }),
              ca(
                this,
                "get",
                async (e, t) => (
                  this.isInitialized(),
                  this.logger.debug("Getting record"),
                  this.logger.trace({
                    type: "method",
                    method: "get",
                    topic: e,
                    id: t,
                  }),
                  await this.getRecord(t)
                )
              ),
              ca(this, "delete", (e, t) => {
                this.isInitialized(),
                  this.logger.debug("Deleting record"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    id: t,
                  }),
                  this.values.forEach((i) => {
                    i.topic === e &&
                      (("u" > typeof t && i.id !== t) ||
                        (this.records.delete(i.id),
                        this.events.emit(ol.deleted, i)));
                  }),
                  this.persist();
              }),
              ca(
                this,
                "exists",
                async (e, t) => (
                  this.isInitialized(),
                  !!this.records.has(t) && (await this.getRecord(t)).topic === e
                )
              ),
              ca(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              ca(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              ca(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              ca(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              (this.logger = (0, a.generateChildLogger)(t, this.name));
          }
        }
        var cl = Object.defineProperty,
          ch = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? cl(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class cd extends w {
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get length() {
            return this.expirations.size;
          }
          get keys() {
            return Array.from(this.expirations.keys());
          }
          get values() {
            return Array.from(this.expirations.values());
          }
          formatTarget(e) {
            if ("string" == typeof e) return tv("topic", e);
            if ("number" == typeof e) return tv("id", e);
            let { message: t } = nT(
              "UNKNOWN_TYPE",
              "Target type: ".concat(typeof e)
            );
            throw Error(t);
          }
          async setExpirations(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getExpirations() {
            return await this.core.storage.getItem(this.storageKey);
          }
          async persist() {
            await this.setExpirations(this.values), this.events.emit(oh.sync);
          }
          async restore() {
            try {
              let e = await this.getExpirations();
              if (typeof e > "u" || !e.length) return;
              if (this.expirations.size) {
                let { message: e } = nT("RESTORE_WILL_OVERRIDE", this.name);
                throw (this.logger.error(e), Error(e));
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored expirations for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  expirations: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore expirations for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          getExpiration(e) {
            let t = this.expirations.get(e);
            if (!t) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw (this.logger.warn(t), Error(t));
            }
            return t;
          }
          checkExpiry(e, t) {
            let { expiry: i } = t;
            (0, O.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
          }
          expire(e, t) {
            this.expirations.delete(e),
              this.events.emit(oh.expired, { target: e, expiration: t });
          }
          checkExpirations() {
            this.core.relayer.connected &&
              this.expirations.forEach((e, t) => this.checkExpiry(t, e));
          }
          registerEventListeners() {
            this.core.heartbeat.on(n.HEARTBEAT_EVENTS.pulse, () =>
              this.checkExpirations()
            ),
              this.events.on(oh.created, (e) => {
                let t = oh.created;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, data: e }),
                  this.persist();
              }),
              this.events.on(oh.expired, (e) => {
                let t = oh.expired;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, data: e }),
                  this.persist();
              }),
              this.events.on(oh.deleted, (e) => {
                let t = oh.deleted;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, data: e }),
                  this.persist();
              });
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            super(e, t),
              (this.core = e),
              (this.logger = t),
              ch(this, "expirations", new Map()),
              ch(this, "events", new s.EventEmitter()),
              ch(this, "name", "expirer"),
              ch(this, "version", "0.3"),
              ch(this, "cached", []),
              ch(this, "initialized", !1),
              ch(this, "storagePrefix", n6),
              ch(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  await this.restore(),
                  this.cached.forEach((e) => this.expirations.set(e.target, e)),
                  (this.cached = []),
                  this.registerEventListeners(),
                  (this.initialized = !0));
              }),
              ch(this, "has", (e) => {
                try {
                  let t = this.formatTarget(e);
                  return "u" > typeof this.getExpiration(t);
                } catch (e) {
                  return !1;
                }
              }),
              ch(this, "set", (e, t) => {
                this.isInitialized();
                let i = this.formatTarget(e),
                  r = { target: i, expiry: t };
                this.expirations.set(i, r),
                  this.checkExpiry(i, r),
                  this.events.emit(oh.created, { target: i, expiration: r });
              }),
              ch(this, "get", (e) => {
                this.isInitialized();
                let t = this.formatTarget(e);
                return this.getExpiration(t);
              }),
              ch(this, "del", (e) => {
                if ((this.isInitialized(), this.has(e))) {
                  let t = this.formatTarget(e),
                    i = this.getExpiration(t);
                  this.expirations.delete(t),
                    this.events.emit(oh.deleted, { target: t, expiration: i });
                }
              }),
              ch(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              ch(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              ch(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              ch(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              (this.logger = (0, a.generateChildLogger)(t, this.name));
          }
        }
        var cu = Object.defineProperty,
          cp = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? cu(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class cf extends E {
          get storeKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//verify:public:key"
            );
          }
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          startAbortTimer(e) {
            return (
              (this.abortController = new AbortController()),
              setTimeout(
                () => this.abortController.abort(),
                (0, O.toMiliseconds)(e)
              )
            );
          }
          constructor(e, t, r) {
            super(e, t, r),
              (this.core = e),
              (this.logger = t),
              (this.store = r),
              cp(this, "name", "verify-api"),
              cp(this, "abortController"),
              cp(this, "isDevEnv"),
              cp(this, "verifyUrlV3", ou),
              cp(this, "storagePrefix", n6),
              cp(this, "version", 2),
              cp(this, "publicKey"),
              cp(this, "fetchPromise"),
              cp(this, "init", async () => {
                var e;
                this.isDevEnv ||
                  ((this.publicKey = await this.store.getItem(this.storeKey)),
                  this.publicKey &&
                    (0, O.toMiliseconds)(
                      null == (e = this.publicKey) ? void 0 : e.expiresAt
                    ) < Date.now() &&
                    (this.logger.debug("verify v2 public key expired"),
                    await this.removePublicKey()));
              }),
              cp(this, "register", async (e) => {
                if (!tl() || this.isDevEnv) return;
                let t = window.location.origin,
                  { id: i, decryptedId: r } = e,
                  s = ""
                    .concat(this.verifyUrlV3, "/attestation?projectId=")
                    .concat(this.core.projectId, "&origin=")
                    .concat(t, "&id=")
                    .concat(i, "&decryptedId=")
                    .concat(r);
                try {
                  let e = (0, N.getDocument)(),
                    t = this.startAbortTimer(5 * O.ONE_SECOND),
                    r = await new Promise((r, n) => {
                      let o = () => {
                        window.removeEventListener("message", c),
                          e.body.removeChild(a),
                          n("attestation aborted");
                      };
                      this.abortController.signal.addEventListener("abort", o);
                      let a = e.createElement("iframe");
                      (a.src = s),
                        (a.style.display = "none"),
                        a.addEventListener("error", o, {
                          signal: this.abortController.signal,
                        });
                      let c = (s) => {
                        if (s.data && "string" == typeof s.data)
                          try {
                            let n = JSON.parse(s.data);
                            if ("verify_attestation" === n.type) {
                              if (
                                (0, R.decodeJWT)(n.attestation).payload.id !== i
                              )
                                return;
                              clearInterval(t),
                                e.body.removeChild(a),
                                this.abortController.signal.removeEventListener(
                                  "abort",
                                  o
                                ),
                                window.removeEventListener("message", c),
                                r(null === n.attestation ? "" : n.attestation);
                            }
                          } catch (e) {
                            this.logger.warn(e);
                          }
                      };
                      e.body.appendChild(a),
                        window.addEventListener("message", c, {
                          signal: this.abortController.signal,
                        });
                    });
                  return this.logger.debug("jwt attestation", r), r;
                } catch (e) {
                  this.logger.warn(e);
                }
                return "";
              }),
              cp(this, "resolve", async (e) => {
                if (this.isDevEnv) return "";
                let { attestationId: t, hash: i, encryptedId: r } = e;
                if ("" === t)
                  return void this.logger.debug(
                    "resolve: attestationId is empty, skipping"
                  );
                if (t) {
                  if ((0, R.decodeJWT)(t).payload.id !== r) return;
                  let e = await this.isValidJwtAttestation(t);
                  if (e)
                    return e.isVerified
                      ? e
                      : void this.logger.warn(
                          "resolve: jwt attestation: origin url not verified"
                        );
                }
                if (!i) return;
                let s = this.getVerifyUrl(null == e ? void 0 : e.verifyUrl);
                return this.fetchAttestation(i, s);
              }),
              cp(this, "fetchAttestation", async (e, t) => {
                this.logger.debug(
                  "resolving attestation: ".concat(e, " from url: ").concat(t)
                );
                let i = this.startAbortTimer(5 * O.ONE_SECOND),
                  r = await fetch(
                    ""
                      .concat(t, "/attestation/")
                      .concat(e, "?v2Supported=true"),
                    { signal: this.abortController.signal }
                  );
                return (
                  clearTimeout(i), 200 === r.status ? await r.json() : void 0
                );
              }),
              cp(this, "getVerifyUrl", (e) => {
                let t = e || od;
                return (
                  op.includes(t) ||
                    (this.logger.info(
                      "verify url: "
                        .concat(
                          t,
                          ", not included in trusted list, assigning default: "
                        )
                        .concat(od)
                    ),
                    (t = od)),
                  t
                );
              }),
              cp(this, "fetchPublicKey", async () => {
                try {
                  this.logger.debug(
                    "fetching public key from: ".concat(this.verifyUrlV3)
                  );
                  let e = this.startAbortTimer(O.FIVE_SECONDS),
                    t = await fetch(
                      "".concat(this.verifyUrlV3, "/public-key"),
                      { signal: this.abortController.signal }
                    );
                  return clearTimeout(e), await t.json();
                } catch (e) {
                  this.logger.warn(e);
                }
              }),
              cp(this, "persistPublicKey", async (e) => {
                this.logger.debug("persisting public key to local storage", e),
                  await this.store.setItem(this.storeKey, e),
                  (this.publicKey = e);
              }),
              cp(this, "removePublicKey", async () => {
                this.logger.debug("removing verify v2 public key from storage"),
                  await this.store.removeItem(this.storeKey),
                  (this.publicKey = void 0);
              }),
              cp(this, "isValidJwtAttestation", async (e) => {
                let t = await this.getPublicKey();
                try {
                  if (t) return this.validateAttestation(e, t);
                } catch (e) {
                  this.logger.error(e),
                    this.logger.warn("error validating attestation");
                }
                let i = await this.fetchAndPersistPublicKey();
                try {
                  if (i) return this.validateAttestation(e, i);
                } catch (e) {
                  this.logger.error(e),
                    this.logger.warn("error validating attestation");
                }
              }),
              cp(this, "getPublicKey", async () =>
                this.publicKey
                  ? this.publicKey
                  : await this.fetchAndPersistPublicKey()
              ),
              cp(this, "fetchAndPersistPublicKey", async () => {
                if (this.fetchPromise)
                  return await this.fetchPromise, this.publicKey;
                this.fetchPromise = new Promise(async (e) => {
                  let t = await this.fetchPublicKey();
                  t && (await this.persistPublicKey(t), e(t));
                });
                let e = await this.fetchPromise;
                return (this.fetchPromise = void 0), e;
              }),
              cp(this, "validateAttestation", (e, t) => {
                let r = (function (e, t) {
                    let [r, s, n] = e.split("."),
                      o = i.Buffer.from(nn(n), "base64");
                    if (64 !== o.length)
                      throw Error("Invalid signature length");
                    let a = o.slice(0, 32),
                      c = o.slice(32, 64),
                      l = iV("".concat(r, ".").concat(s)),
                      h = (function (e) {
                        let t = i.Buffer.from(e.x, "base64"),
                          r = i.Buffer.from(e.y, "base64");
                        return eX([new Uint8Array([4]), t, r]);
                      })(t);
                    if (!s6.verify(eX([a, c]), l, h))
                      throw Error("Invalid signature");
                    return (0, R.decodeJWT)(e).payload;
                  })(e, t.publicKey),
                  s = {
                    hasExpired: (0, O.toMiliseconds)(r.exp) < Date.now(),
                    payload: r,
                  };
                if (s.hasExpired)
                  throw (
                    (this.logger.warn("resolve: jwt attestation expired"),
                    Error("JWT attestation expired"))
                  );
                return {
                  origin: s.payload.origin,
                  isScam: s.payload.isScam,
                  isVerified: s.payload.isVerified,
                };
              }),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              (this.abortController = new AbortController()),
              (this.isDevEnv = tC()),
              this.init();
          }
        }
        var cg = Object.defineProperty,
          cy = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? cg(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class cm extends I {
          constructor(e, t) {
            super(e, t),
              (this.projectId = e),
              (this.logger = t),
              cy(this, "context", "echo"),
              cy(this, "registerDeviceToken", async (e) => {
                let {
                    clientId: t,
                    token: i,
                    notificationType: r,
                    enableEncrypted: s = !1,
                  } = e,
                  n = ""
                    .concat("https://echo.walletconnect.com", "/")
                    .concat(this.projectId, "/clients");
                await fetch(n, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    client_id: t,
                    type: r,
                    token: i,
                    always_raw: s,
                  }),
                });
              }),
              (this.logger = (0, a.generateChildLogger)(t, this.context));
          }
        }
        var cb = Object.defineProperty,
          cv = Object.getOwnPropertySymbols,
          cw = Object.prototype.hasOwnProperty,
          cE = Object.prototype.propertyIsEnumerable,
          cI = (e, t, i) =>
            t in e
              ? cb(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          cx = (e, t) => {
            for (var i in t || (t = {})) cw.call(t, i) && cI(e, i, t[i]);
            if (cv) for (var i of cv(t)) cE.call(t, i) && cI(e, i, t[i]);
            return e;
          },
          cP = (e, t, i) => cI(e, "symbol" != typeof t ? t + "" : t, i);
        class c_ extends x {
          get storageKey() {
            return (
              this.storagePrefix +
              this.storageVersion +
              this.core.customStoragePrefix +
              "//" +
              this.context
            );
          }
          constructor(e, t, i = !0) {
            super(e, t, i),
              (this.core = e),
              (this.logger = t),
              cP(this, "context", "event-client"),
              cP(this, "storagePrefix", n6),
              cP(this, "storageVersion", 0.1),
              cP(this, "events", new Map()),
              cP(this, "shouldPersist", !1),
              cP(this, "init", async () => {
                if (!tC())
                  try {
                    let e = {
                      eventId: tO(),
                      timestamp: Date.now(),
                      domain: this.getAppDomain(),
                      props: {
                        event: "INIT",
                        type: "",
                        properties: {
                          client_id: await this.core.crypto.getClientId(),
                          user_agent: tp(
                            this.core.relayer.protocol,
                            this.core.relayer.version,
                            oi
                          ),
                        },
                      },
                    };
                    await this.sendEvent([e]);
                  } catch (e) {
                    this.logger.warn(e);
                  }
              }),
              cP(this, "createEvent", (e) => {
                let {
                    event: t = "ERROR",
                    type: i = "",
                    properties: { topic: r, trace: s },
                  } = e,
                  n = tO(),
                  o = this.core.projectId || "",
                  a = cx(
                    {
                      eventId: n,
                      timestamp: Date.now(),
                      props: {
                        event: t,
                        type: i,
                        properties: { topic: r, trace: s },
                      },
                      bundleId: o,
                      domain: this.getAppDomain(),
                    },
                    this.setMethods(n)
                  );
                return (
                  this.telemetryEnabled &&
                    (this.events.set(n, a), (this.shouldPersist = !0)),
                  a
                );
              }),
              cP(this, "getEvent", (e) => {
                let { eventId: t, topic: i } = e;
                if (t) return this.events.get(t);
                let r = Array.from(this.events.values()).find(
                  (e) => e.props.properties.topic === i
                );
                if (r) return cx(cx({}, r), this.setMethods(r.eventId));
              }),
              cP(this, "deleteEvent", (e) => {
                let { eventId: t } = e;
                this.events.delete(t), (this.shouldPersist = !0);
              }),
              cP(this, "setEventListeners", () => {
                this.core.heartbeat.on(n.HEARTBEAT_EVENTS.pulse, async () => {
                  this.shouldPersist && (await this.persist()),
                    this.events.forEach((e) => {
                      (0, O.fromMiliseconds)(Date.now()) -
                        (0, O.fromMiliseconds)(e.timestamp) >
                        86400 &&
                        (this.events.delete(e.eventId),
                        (this.shouldPersist = !0));
                    });
                });
              }),
              cP(this, "setMethods", (e) => ({
                addTrace: (t) => this.addTrace(e, t),
                setError: (t) => this.setError(e, t),
              })),
              cP(this, "addTrace", (e, t) => {
                let i = this.events.get(e);
                i &&
                  (i.props.properties.trace.push(t),
                  this.events.set(e, i),
                  (this.shouldPersist = !0));
              }),
              cP(this, "setError", (e, t) => {
                let i = this.events.get(e);
                i &&
                  ((i.props.type = t),
                  (i.timestamp = Date.now()),
                  this.events.set(e, i),
                  (this.shouldPersist = !0));
              }),
              cP(this, "persist", async () => {
                await this.core.storage.setItem(
                  this.storageKey,
                  Array.from(this.events.values())
                ),
                  (this.shouldPersist = !1);
              }),
              cP(this, "restore", async () => {
                try {
                  let e =
                    (await this.core.storage.getItem(this.storageKey)) || [];
                  if (!e.length) return;
                  e.forEach((e) => {
                    this.events.set(
                      e.eventId,
                      cx(cx({}, e), this.setMethods(e.eventId))
                    );
                  });
                } catch (e) {
                  this.logger.warn(e);
                }
              }),
              cP(this, "submit", async () => {
                if (!this.telemetryEnabled || 0 === this.events.size) return;
                let e = [];
                for (let [t, i] of this.events) i.props.type && e.push(i);
                if (0 !== e.length)
                  try {
                    if ((await this.sendEvent(e)).ok)
                      for (let t of e)
                        this.events.delete(t.eventId),
                          (this.shouldPersist = !0);
                  } catch (e) {
                    this.logger.warn(e);
                  }
              }),
              cP(this, "sendEvent", async (e) => {
                let t = this.getAppDomain() ? "" : "&sp=desktop";
                return await fetch(
                  ""
                    .concat(
                      "https://pulse.walletconnect.org/batch",
                      "?projectId="
                    )
                    .concat(this.core.projectId, "&st=events_sdk&sv=js-")
                    .concat(oi)
                    .concat(t),
                  { method: "POST", body: JSON.stringify(e) }
                );
              }),
              cP(this, "getAppDomain", () => tu().url),
              (this.logger = (0, a.generateChildLogger)(t, this.context)),
              (this.telemetryEnabled = i),
              i
                ? this.restore().then(async () => {
                    await this.submit(), this.setEventListeners();
                  })
                : this.persist();
          }
        }
        var cS = Object.defineProperty,
          cA = Object.getOwnPropertySymbols,
          cO = Object.prototype.hasOwnProperty,
          cC = Object.prototype.propertyIsEnumerable,
          cR = (e, t, i) =>
            t in e
              ? cS(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          cT = (e, t) => {
            for (var i in t || (t = {})) cO.call(t, i) && cR(e, i, t[i]);
            if (cA) for (var i of cA(t)) cC.call(t, i) && cR(e, i, t[i]);
            return e;
          },
          cN = (e, t, i) => cR(e, "symbol" != typeof t ? t + "" : t, i);
        class cU extends u {
          static async init(e) {
            let t = new cU(e);
            await t.initialize();
            let i = await t.crypto.getClientId();
            return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
          }
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          async start() {
            this.initialized || (await this.initialize());
          }
          async getLogsBlob() {
            var e;
            return null == (e = this.logChunkController)
              ? void 0
              : e.logsToBlob({ clientId: await this.crypto.getClientId() });
          }
          async addLinkModeSupportedApp(e) {
            this.linkModeSupportedApps.includes(e) ||
              (this.linkModeSupportedApps.push(e),
              await this.storage.setItem(on, this.linkModeSupportedApps));
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.crypto.init(),
                await this.history.init(),
                await this.expirer.init(),
                await this.relayer.init(),
                await this.heartbeat.init(),
                await this.pairing.init(),
                (this.linkModeSupportedApps =
                  (await this.storage.getItem(on)) || []),
                (this.initialized = !0),
                this.logger.info("Core Initialization Success");
            } catch (e) {
              throw (
                (this.logger.warn(
                  "Core Initialization Failure at epoch ".concat(Date.now()),
                  e
                ),
                this.logger.error(e.message),
                e)
              );
            }
          }
          getGlobalCore() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            try {
              if (this.isGlobalCoreDisabled()) return;
              let t = "_walletConnectCore_".concat(e),
                i = "".concat(t, "_count");
              return (
                (globalThis[i] = (globalThis[i] || 0) + 1),
                globalThis[i] > 1 &&
                  console.warn(
                    "WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ".concat(
                      globalThis[i],
                      " times."
                    )
                  ),
                globalThis[t]
              );
            } catch (e) {
              console.warn("Failed to get global WalletConnect core", e);
              return;
            }
          }
          setGlobalCore(e) {
            var t;
            try {
              if (this.isGlobalCoreDisabled()) return;
              let i = "_walletConnectCore_".concat(
                (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
              );
              globalThis[i] = e;
            } catch (e) {
              console.warn("Failed to set global WalletConnect core", e);
            }
          }
          isGlobalCoreDisabled() {
            try {
              return (
                "u" > typeof r.default &&
                "true" === r.default.env.DISABLE_GLOBAL_CORE
              );
            } catch (e) {
              return !0;
            }
          }
          constructor(e) {
            var t;
            super(e),
              cN(this, "protocol", "wc"),
              cN(this, "version", 2),
              cN(this, "name", n2),
              cN(this, "relayUrl"),
              cN(this, "projectId"),
              cN(this, "customStoragePrefix"),
              cN(this, "events", new s.EventEmitter()),
              cN(this, "logger"),
              cN(this, "heartbeat"),
              cN(this, "relayer"),
              cN(this, "crypto"),
              cN(this, "storage"),
              cN(this, "history"),
              cN(this, "expirer"),
              cN(this, "pairing"),
              cN(this, "verify"),
              cN(this, "echoClient"),
              cN(this, "linkModeSupportedApps"),
              cN(this, "eventClient"),
              cN(this, "initialized", !1),
              cN(this, "logChunkController"),
              cN(this, "on", (e, t) => this.events.on(e, t)),
              cN(this, "once", (e, t) => this.events.once(e, t)),
              cN(this, "off", (e, t) => this.events.off(e, t)),
              cN(this, "removeListener", (e, t) =>
                this.events.removeListener(e, t)
              ),
              cN(this, "dispatchEnvelope", (e) => {
                let { topic: t, message: i, sessionExists: r } = e;
                if (!t || !i) return;
                let s = {
                  topic: t,
                  message: i,
                  publishedAt: Date.now(),
                  transportType: or.link_mode,
                };
                this.relayer.onLinkMessageEvent(s, { sessionExists: r });
              });
            let i = this.getGlobalCore(
              null == e ? void 0 : e.customStoragePrefix
            );
            if (i)
              try {
                return (
                  (this.customStoragePrefix = i.customStoragePrefix),
                  (this.logger = i.logger),
                  (this.heartbeat = i.heartbeat),
                  (this.crypto = i.crypto),
                  (this.history = i.history),
                  (this.expirer = i.expirer),
                  (this.storage = i.storage),
                  (this.relayer = i.relayer),
                  (this.pairing = i.pairing),
                  (this.verify = i.verify),
                  (this.echoClient = i.echoClient),
                  (this.linkModeSupportedApps = i.linkModeSupportedApps),
                  (this.eventClient = i.eventClient),
                  (this.initialized = i.initialized),
                  (this.logChunkController = i.logChunkController),
                  i
                );
              } catch (e) {
                console.warn("Failed to copy global core", e);
              }
            (this.projectId = null == e ? void 0 : e.projectId),
              (this.relayUrl = (null == e ? void 0 : e.relayUrl) || n7),
              (this.customStoragePrefix =
                null != e && e.customStoragePrefix
                  ? ":".concat(e.customStoragePrefix)
                  : "");
            let r = (0, a.getDefaultLoggerOptions)({
                level:
                  "string" == typeof (null == e ? void 0 : e.logger) && e.logger
                    ? e.logger
                    : n8.logger,
                name: n2,
              }),
              { logger: c, chunkLoggerController: l } = (0,
              a.generatePlatformLogger)({
                opts: r,
                maxSizeInBytes: null == e ? void 0 : e.maxLogBlobSizeInBytes,
                loggerOverride: null == e ? void 0 : e.logger,
              });
            (this.logChunkController = l),
              null != (t = this.logChunkController) &&
                t.downloadLogsBlobInBrowser &&
                (window.downloadLogsBlobInBrowser = async () => {
                  var e, t;
                  null != (e = this.logChunkController) &&
                    e.downloadLogsBlobInBrowser &&
                    (null == (t = this.logChunkController) ||
                      t.downloadLogsBlobInBrowser({
                        clientId: await this.crypto.getClientId(),
                      }));
                }),
              (this.logger = (0, a.generateChildLogger)(c, this.name)),
              (this.heartbeat = new n.HeartBeat()),
              (this.crypto = new ah(
                this,
                this.logger,
                null == e ? void 0 : e.keychain
              )),
              (this.history = new cc(this, this.logger)),
              (this.expirer = new cd(this, this.logger)),
              (this.storage =
                null != e && e.storage
                  ? e.storage
                  : new o.default(
                      cT(cT({}, n3), null == e ? void 0 : e.storageOptions)
                    )),
              (this.relayer = new aQ({
                core: this,
                logger: this.logger,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
              })),
              (this.pairing = new cn(this, this.logger)),
              (this.verify = new cf(this, this.logger, this.storage)),
              (this.echoClient = new cm(this.projectId || "", this.logger)),
              (this.linkModeSupportedApps = []),
              (this.eventClient = new c_(
                this,
                this.logger,
                null == e ? void 0 : e.telemetryEnabled
              )),
              this.setGlobalCore(this);
          }
        }
        let ck = "client",
          cD = "".concat("wc", "@").concat(2, ":").concat(ck, ":"),
          cq = { name: ck, logger: "error" },
          cB = "WALLETCONNECT_DEEPLINK_CHOICE",
          cj = (O.THIRTY_DAYS, "Proposal expired"),
          cL = O.SEVEN_DAYS,
          cM = {
            wc_sessionPropose: {
              req: { ttl: O.FIVE_MINUTES, prompt: !0, tag: 1100 },
              res: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1101 },
              reject: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1120 },
              autoReject: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1121 },
            },
            wc_sessionSettle: {
              req: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1102 },
              res: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1103 },
            },
            wc_sessionUpdate: {
              req: { ttl: O.ONE_DAY, prompt: !1, tag: 1104 },
              res: { ttl: O.ONE_DAY, prompt: !1, tag: 1105 },
            },
            wc_sessionExtend: {
              req: { ttl: O.ONE_DAY, prompt: !1, tag: 1106 },
              res: { ttl: O.ONE_DAY, prompt: !1, tag: 1107 },
            },
            wc_sessionRequest: {
              req: { ttl: O.FIVE_MINUTES, prompt: !0, tag: 1108 },
              res: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1109 },
            },
            wc_sessionEvent: {
              req: { ttl: O.FIVE_MINUTES, prompt: !0, tag: 1110 },
              res: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1111 },
            },
            wc_sessionDelete: {
              req: { ttl: O.ONE_DAY, prompt: !1, tag: 1112 },
              res: { ttl: O.ONE_DAY, prompt: !1, tag: 1113 },
            },
            wc_sessionPing: {
              req: { ttl: O.ONE_DAY, prompt: !1, tag: 1114 },
              res: { ttl: O.ONE_DAY, prompt: !1, tag: 1115 },
            },
            wc_sessionAuthenticate: {
              req: { ttl: O.ONE_HOUR, prompt: !0, tag: 1116 },
              res: { ttl: O.ONE_HOUR, prompt: !1, tag: 1117 },
              reject: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1118 },
              autoReject: { ttl: O.FIVE_MINUTES, prompt: !1, tag: 1119 },
            },
          },
          cz = { min: O.FIVE_MINUTES, max: O.SEVEN_DAYS },
          cH = { idle: "IDLE", active: "ACTIVE" },
          cF = {
            eth_sendTransaction: { key: "" },
            eth_sendRawTransaction: { key: "" },
            wallet_sendCalls: { key: "" },
            solana_signTransaction: { key: "signature" },
            solana_signAllTransactions: { key: "transactions" },
            solana_signAndSendTransaction: { key: "signature" },
            sui_signAndExecuteTransaction: { key: "digest" },
            sui_signTransaction: { key: "" },
            hedera_signAndExecuteTransaction: { key: "transactionId" },
            hedera_executeTransaction: { key: "transactionId" },
            near_signTransaction: { key: "" },
            near_signTransactions: { key: "" },
            tron_signTransaction: { key: "txID" },
            xrpl_signTransaction: { key: "" },
            xrpl_signTransactionFor: { key: "" },
            algo_signTxn: { key: "" },
            sendTransfer: { key: "txid" },
            stacks_stxTransfer: { key: "txId" },
            polkadot_signTransaction: { key: "" },
            cosmos_signDirect: { key: "" },
          },
          cV = [
            "wc_sessionPropose",
            "wc_sessionRequest",
            "wc_authRequest",
            "wc_sessionAuthenticate",
          ],
          cK = "".concat("wc", "@", 1.5, ":").concat("auth", ":"),
          cW = "".concat(cK, ":PUB_KEY");
        var cG = Object.defineProperty,
          cJ = Object.defineProperties,
          cY = Object.getOwnPropertyDescriptors,
          cX = Object.getOwnPropertySymbols,
          cZ = Object.prototype.hasOwnProperty,
          cQ = Object.prototype.propertyIsEnumerable,
          c$ = (e, t, i) =>
            t in e
              ? cG(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          c0 = (e, t) => {
            for (var i in t || (t = {})) cZ.call(t, i) && c$(e, i, t[i]);
            if (cX) for (var i of cX(t)) cQ.call(t, i) && c$(e, i, t[i]);
            return e;
          },
          c1 = (e, t) => cJ(e, cY(t)),
          c2 = (e, t, i) => c$(e, "symbol" != typeof t ? t + "" : t, i);
        class c6 extends A {
          async processPendingMessageEvents() {
            try {
              let e = this.client.session.keys,
                t = this.client.core.relayer.messages.getWithoutAck(e);
              for (let [e, i] of Object.entries(t))
                for (let t of i)
                  try {
                    await this.onProviderMessageEvent({
                      topic: e,
                      message: t,
                      publishedAt: Date.now(),
                    });
                  } catch (i) {
                    this.client.logger.warn(
                      "Error processing pending message event for topic: "
                        .concat(e, ", message: ")
                        .concat(t)
                    );
                  }
            } catch (e) {
              this.client.logger.warn("processPendingMessageEvents failed", e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = nT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          async confirmOnlineStateOrThrow() {
            await this.client.core.relayer.confirmOnlineStateOrThrow();
          }
          registerRelayerEvents() {
            this.client.core.relayer.on(oe.message, (e) => {
              this.onProviderMessageEvent(e);
            });
          }
          async onRelayMessage(e) {
            let { topic: t, message: i, attestation: r, transportType: s } = e,
              { publicKey: n } = this.client.auth.authKeys.keys.includes(cW)
                ? this.client.auth.authKeys.get(cW)
                : { responseTopic: void 0, publicKey: void 0 };
            try {
              let e = await this.client.core.crypto.decode(t, i, {
                receiverPublicKey: n,
                encoding: s === or.link_mode ? s4 : s5,
              });
              (0, n0.isJsonRpcRequest)(e)
                ? (this.client.core.history.set(t, e),
                  await this.onRelayEventRequest({
                    topic: t,
                    payload: e,
                    attestation: r,
                    transportType: s,
                    encryptedId: nt(i),
                  }))
                : (0, n0.isJsonRpcResponse)(e)
                ? (await this.client.core.history.resolve(e),
                  await this.onRelayEventResponse({
                    topic: t,
                    payload: e,
                    transportType: s,
                  }),
                  this.client.core.history.delete(t, e.id))
                : await this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: e,
                    transportType: s,
                  }),
                await this.client.core.relayer.messages.ack(t, i);
            } catch (e) {
              this.client.logger.error(e);
            }
          }
          registerExpirerEvents() {
            this.client.core.expirer.on(oh.expired, async (e) => {
              let { topic: t, id: i } = tw(e.target);
              return i && this.client.pendingRequest.keys.includes(i)
                ? await this.deletePendingSessionRequest(i, nT("EXPIRED"), !0)
                : i && this.client.auth.requests.keys.includes(i)
                ? await this.deletePendingAuthRequest(i, nT("EXPIRED"), !0)
                : void (t
                    ? this.client.session.keys.includes(t) &&
                      (await this.deleteSession({
                        topic: t,
                        expirerHasDeleted: !0,
                      }),
                      this.client.events.emit("session_expire", { topic: t }))
                    : i &&
                      (await this.deleteProposal(i, !0),
                      this.client.events.emit("proposal_expire", { id: i })));
            });
          }
          registerPairingEvents() {
            this.client.core.pairing.events.on(oc.create, (e) =>
              this.onPairingCreated(e)
            ),
              this.client.core.pairing.events.on(oc.delete, (e) => {
                this.addToRecentlyDeleted(e.topic, "pairing");
              });
          }
          isValidPairingTopic(e) {
            if (!nq(e, !1)) {
              let { message: t } = nT(
                "MISSING_OR_INVALID",
                "pairing topic should be a string: ".concat(e)
              );
              throw Error(t);
            }
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "pairing topic doesn't exist: ".concat(e)
              );
              throw Error(t);
            }
            if (tI(this.client.core.pairing.pairings.get(e).expiry)) {
              let { message: t } = nT("EXPIRED", "pairing topic: ".concat(e));
              throw Error(t);
            }
          }
          async isValidSessionTopic(e) {
            if (!nq(e, !1)) {
              let { message: t } = nT(
                "MISSING_OR_INVALID",
                "session topic should be a string: ".concat(e)
              );
              throw Error(t);
            }
            if (
              (this.checkRecentlyDeleted(e),
              !this.client.session.keys.includes(e))
            ) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "session topic doesn't exist: ".concat(e)
              );
              throw Error(t);
            }
            if (tI(this.client.session.get(e).expiry)) {
              await this.deleteSession({ topic: e });
              let { message: t } = nT("EXPIRED", "session topic: ".concat(e));
              throw Error(t);
            }
            if (!this.client.core.crypto.keychain.has(e)) {
              let { message: t } = nT(
                "MISSING_OR_INVALID",
                "session topic does not exist in keychain: ".concat(e)
              );
              throw (await this.deleteSession({ topic: e }), Error(t));
            }
          }
          async isValidSessionOrPairingTopic(e) {
            if (
              (this.checkRecentlyDeleted(e),
              this.client.session.keys.includes(e))
            )
              await this.isValidSessionTopic(e);
            else if (this.client.core.pairing.pairings.keys.includes(e))
              this.isValidPairingTopic(e);
            else if (nq(e, !1)) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "session or pairing topic doesn't exist: ".concat(e)
              );
              throw Error(t);
            } else {
              let { message: t } = nT(
                "MISSING_OR_INVALID",
                "session or pairing topic should be a string: ".concat(e)
              );
              throw Error(t);
            }
          }
          async isValidProposalId(e) {
            if ("number" != typeof e) {
              let { message: t } = nT(
                "MISSING_OR_INVALID",
                "proposal id should be a number: ".concat(e)
              );
              throw Error(t);
            }
            if (!this.client.proposal.keys.includes(e)) {
              let { message: t } = nT(
                "NO_MATCHING_KEY",
                "proposal id doesn't exist: ".concat(e)
              );
              throw Error(t);
            }
            if (tI(this.client.proposal.get(e).expiryTimestamp)) {
              await this.deleteProposal(e);
              let { message: t } = nT("EXPIRED", "proposal id: ".concat(e));
              throw Error(t);
            }
          }
          constructor(e) {
            var t;
            super(e),
              (t = this),
              c2(this, "name", "engine"),
              c2(this, "events", new s.default()),
              c2(this, "initialized", !1),
              c2(this, "requestQueue", { state: cH.idle, queue: [] }),
              c2(this, "sessionRequestQueue", { state: cH.idle, queue: [] }),
              c2(this, "requestQueueDelay", O.ONE_SECOND),
              c2(this, "expectedPairingMethodMap", new Map()),
              c2(this, "recentlyDeletedMap", new Map()),
              c2(this, "recentlyDeletedLimit", 200),
              c2(this, "relayMessageCache", []),
              c2(this, "pendingSessions", new Map()),
              c2(this, "init", async () => {
                this.initialized ||
                  (await this.cleanup(),
                  this.registerRelayerEvents(),
                  this.registerExpirerEvents(),
                  this.registerPairingEvents(),
                  await this.registerLinkModeListeners(),
                  this.client.core.pairing.register({
                    methods: Object.keys(cM),
                  }),
                  (this.initialized = !0),
                  setTimeout(async () => {
                    await this.processPendingMessageEvents(),
                      (this.sessionRequestQueue.queue =
                        this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  }, (0, O.toMiliseconds)(this.requestQueueDelay)));
              }),
              c2(this, "connect", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                let t = c1(c0({}, e), {
                  requiredNamespaces: e.requiredNamespaces || {},
                  optionalNamespaces: e.optionalNamespaces || {},
                });
                await this.isValidConnect(t),
                  (t.optionalNamespaces = (function (e, t) {
                    var i, r, s, n, o, a;
                    let c = nA(e),
                      l = nA(t),
                      h = {};
                    for (let e of Object.keys(c).concat(Object.keys(l)))
                      h[e] = {
                        chains: tP(
                          null == (i = c[e]) ? void 0 : i.chains,
                          null == (r = l[e]) ? void 0 : r.chains
                        ),
                        methods: tP(
                          null == (s = c[e]) ? void 0 : s.methods,
                          null == (n = l[e]) ? void 0 : n.methods
                        ),
                        events: tP(
                          null == (o = c[e]) ? void 0 : o.events,
                          null == (a = l[e]) ? void 0 : a.events
                        ),
                      };
                    return h;
                  })(t.requiredNamespaces, t.optionalNamespaces)),
                  (t.requiredNamespaces = {});
                let {
                    pairingTopic: i,
                    requiredNamespaces: r,
                    optionalNamespaces: s,
                    sessionProperties: n,
                    scopedProperties: o,
                    relays: a,
                  } = t,
                  c = i,
                  l,
                  h = !1;
                try {
                  if (c) {
                    let e = this.client.core.pairing.pairings.get(c);
                    this.client.logger.warn(
                      "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                    ),
                      (h = e.active);
                  }
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "connect() -> pairing.get(".concat(c, ") failed")
                    ),
                    e)
                  );
                }
                if (!c || !h) {
                  let { topic: e, uri: t } =
                    await this.client.core.pairing.create();
                  (c = e), (l = t);
                }
                if (!c) {
                  let { message: e } = nT(
                    "NO_MATCHING_KEY",
                    "connect() pairing topic: ".concat(c)
                  );
                  throw Error(e);
                }
                let d = await this.client.core.crypto.generateKeyPair(),
                  u = cM.wc_sessionPropose.req.ttl || O.FIVE_MINUTES,
                  p = tE(u),
                  f = c1(
                    c0(
                      c0(
                        {
                          requiredNamespaces: r,
                          optionalNamespaces: s,
                          relays: null != a ? a : [{ protocol: "irn" }],
                          proposer: {
                            publicKey: d,
                            metadata: this.client.metadata,
                          },
                          expiryTimestamp: p,
                          pairingTopic: c,
                        },
                        n && { sessionProperties: n }
                      ),
                      o && { scopedProperties: o }
                    ),
                    { id: (0, n$.payloadId)() }
                  ),
                  g = tx("session_connect", f.id),
                  { reject: y, resolve: m, done: b } = tm(u, cj),
                  v = (e) => {
                    let { id: t } = e;
                    t === f.id &&
                      (this.client.events.off("proposal_expire", v),
                      this.pendingSessions.delete(f.id),
                      this.events.emit(g, { error: { message: cj, code: 0 } }));
                  };
                return (
                  this.client.events.on("proposal_expire", v),
                  this.events.once(g, (e) => {
                    let { error: t, session: i } = e;
                    this.client.events.off("proposal_expire", v),
                      t ? y(t) : i && m(i);
                  }),
                  await this.sendRequest({
                    topic: c,
                    method: "wc_sessionPropose",
                    params: f,
                    throwOnFailedPublish: !0,
                    clientRpcId: f.id,
                  }),
                  await this.setProposal(f.id, f),
                  { uri: l, approval: b }
                );
              }),
              c2(this, "pair", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  return await this.client.core.pairing.pair(e);
                } catch (e) {
                  throw (this.client.logger.error("pair() failed"), e);
                }
              }),
              c2(this, "approve", async (e) => {
                var t, i, r;
                let s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic:
                      null == (t = null == e ? void 0 : e.id)
                        ? void 0
                        : t.toString(),
                    trace: [oy.session_approve_started],
                  },
                });
                try {
                  this.isInitialized(), await this.confirmOnlineStateOrThrow();
                } catch (e) {
                  throw (s.setError(om.no_internet_connection), e);
                }
                try {
                  await this.isValidProposalId(null == e ? void 0 : e.id);
                } catch (t) {
                  throw (
                    (this.client.logger.error(
                      "approve() -> proposal.get(".concat(
                        null == e ? void 0 : e.id,
                        ") failed"
                      )
                    ),
                    s.setError(om.proposal_not_found),
                    t)
                  );
                }
                try {
                  await this.isValidApprove(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "approve() -> isValidApprove() failed"
                    ),
                    s.setError(om.session_approve_namespace_validation_failure),
                    e)
                  );
                }
                let {
                    id: n,
                    relayProtocol: o,
                    namespaces: a,
                    sessionProperties: c,
                    scopedProperties: l,
                    sessionConfig: h,
                  } = e,
                  d = this.client.proposal.get(n);
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                });
                let {
                    pairingTopic: u,
                    proposer: p,
                    requiredNamespaces: f,
                    optionalNamespaces: g,
                  } = d,
                  y =
                    null == (i = this.client.core.eventClient)
                      ? void 0
                      : i.getEvent({ topic: u });
                y ||
                  (y =
                    null == (r = this.client.core.eventClient)
                      ? void 0
                      : r.createEvent({
                          type: oy.session_approve_started,
                          properties: {
                            topic: u,
                            trace: [
                              oy.session_approve_started,
                              oy.session_namespaces_validation_success,
                            ],
                          },
                        }));
                let m = await this.client.core.crypto.generateKeyPair(),
                  b = p.publicKey,
                  v = await this.client.core.crypto.generateSharedKey(m, b),
                  w = c0(
                    c0(
                      c0(
                        {
                          relay: { protocol: null != o ? o : "irn" },
                          namespaces: a,
                          controller: {
                            publicKey: m,
                            metadata: this.client.metadata,
                          },
                          expiry: tE(cL),
                        },
                        c && { sessionProperties: c }
                      ),
                      l && { scopedProperties: l }
                    ),
                    h && { sessionConfig: h }
                  ),
                  E = or.relay;
                y.addTrace(oy.subscribing_session_topic);
                try {
                  await this.client.core.relayer.subscribe(v, {
                    transportType: E,
                  });
                } catch (e) {
                  throw (y.setError(om.subscribe_session_topic_failure), e);
                }
                y.addTrace(oy.subscribe_session_topic_success);
                let I = c1(c0({}, w), {
                  topic: v,
                  requiredNamespaces: f,
                  optionalNamespaces: g,
                  pairingTopic: u,
                  acknowledged: !1,
                  self: w.controller,
                  peer: { publicKey: p.publicKey, metadata: p.metadata },
                  controller: m,
                  transportType: or.relay,
                });
                await this.client.session.set(v, I),
                  y.addTrace(oy.store_session);
                try {
                  y.addTrace(oy.publishing_session_settle),
                    await this.sendRequest({
                      topic: v,
                      method: "wc_sessionSettle",
                      params: w,
                      throwOnFailedPublish: !0,
                    }).catch((e) => {
                      throw (
                        (null == y ||
                          y.setError(om.session_settle_publish_failure),
                        e)
                      );
                    }),
                    y.addTrace(oy.session_settle_publish_success),
                    y.addTrace(oy.publishing_session_approve),
                    await this.sendResult({
                      id: n,
                      topic: u,
                      result: {
                        relay: { protocol: null != o ? o : "irn" },
                        responderPublicKey: m,
                      },
                      throwOnFailedPublish: !0,
                    }).catch((e) => {
                      throw (
                        (null == y ||
                          y.setError(om.session_approve_publish_failure),
                        e)
                      );
                    }),
                    y.addTrace(oy.session_approve_publish_success);
                } catch (e) {
                  throw (
                    (this.client.logger.error(e),
                    this.client.session.delete(v, nN("USER_DISCONNECTED")),
                    await this.client.core.relayer.unsubscribe(v),
                    e)
                  );
                }
                return (
                  this.client.core.eventClient.deleteEvent({
                    eventId: y.eventId,
                  }),
                  await this.client.core.pairing.updateMetadata({
                    topic: u,
                    metadata: p.metadata,
                  }),
                  await this.deleteProposal(n),
                  await this.client.core.pairing.activate({ topic: u }),
                  await this.setExpiry(v, tE(cL)),
                  {
                    topic: v,
                    acknowledged: () =>
                      Promise.resolve(this.client.session.get(v)),
                  }
                );
              }),
              c2(this, "reject", async (e) => {
                let t;
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidReject(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "reject() -> isValidReject() failed"
                    ),
                    e)
                  );
                }
                let { id: i, reason: r } = e;
                try {
                  t = this.client.proposal.get(i).pairingTopic;
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "reject() -> proposal.get(".concat(i, ") failed")
                    ),
                    e)
                  );
                }
                t &&
                  (await this.sendError({
                    id: i,
                    topic: t,
                    error: r,
                    rpcOpts: cM.wc_sessionPropose.reject,
                  })),
                  await this.deleteProposal(i);
              }),
              c2(this, "update", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidUpdate(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "update() -> isValidUpdate() failed"
                    ),
                    e)
                  );
                }
                let { topic: t, namespaces: i } = e,
                  { done: r, resolve: s, reject: n } = tm(),
                  o = (0, n$.payloadId)(),
                  a = (0, n$.getBigIntRpcId)().toString(),
                  c = this.client.session.get(t).namespaces;
                return (
                  this.events.once(tx("session_update", o), (e) => {
                    let { error: t } = e;
                    t ? n(t) : s();
                  }),
                  await this.client.session.update(t, { namespaces: i }),
                  await this.sendRequest({
                    topic: t,
                    method: "wc_sessionUpdate",
                    params: { namespaces: i },
                    throwOnFailedPublish: !0,
                    clientRpcId: o,
                    relayRpcId: a,
                  }).catch((e) => {
                    this.client.logger.error(e),
                      this.client.session.update(t, { namespaces: c }),
                      n(e);
                  }),
                  { acknowledged: r }
                );
              }),
              c2(this, "extend", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidExtend(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "extend() -> isValidExtend() failed"
                    ),
                    e)
                  );
                }
                let { topic: t } = e,
                  i = (0, n$.payloadId)(),
                  { done: r, resolve: s, reject: n } = tm();
                return (
                  this.events.once(tx("session_extend", i), (e) => {
                    let { error: t } = e;
                    t ? n(t) : s();
                  }),
                  await this.setExpiry(t, tE(cL)),
                  this.sendRequest({
                    topic: t,
                    method: "wc_sessionExtend",
                    params: {},
                    clientRpcId: i,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    n(e);
                  }),
                  { acknowledged: r }
                );
              }),
              c2(this, "request", async (e) => {
                this.isInitialized();
                try {
                  await this.isValidRequest(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "request() -> isValidRequest() failed"
                    ),
                    e)
                  );
                }
                let {
                    chainId: t,
                    request: i,
                    topic: r,
                    expiry: s = cM.wc_sessionRequest.req.ttl,
                  } = e,
                  n = this.client.session.get(r);
                (null == n ? void 0 : n.transportType) === or.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let o = (0, n$.payloadId)(),
                  a = (0, n$.getBigIntRpcId)().toString(),
                  {
                    done: c,
                    resolve: l,
                    reject: h,
                  } = tm(s, "Request expired. Please try again.");
                this.events.once(tx("session_request", o), (e) => {
                  let { error: t, result: i } = e;
                  t ? h(t) : l(i);
                });
                let d = "wc_sessionRequest",
                  u = this.getAppLinkIfEnabled(
                    n.peer.metadata,
                    n.transportType
                  );
                if (u)
                  return (
                    await this.sendRequest({
                      clientRpcId: o,
                      relayRpcId: a,
                      topic: r,
                      method: d,
                      params: {
                        request: c1(c0({}, i), { expiryTimestamp: tE(s) }),
                        chainId: t,
                      },
                      expiry: s,
                      throwOnFailedPublish: !0,
                      appLink: u,
                    }).catch((e) => h(e)),
                    this.client.events.emit("session_request_sent", {
                      topic: r,
                      request: i,
                      chainId: t,
                      id: o,
                    }),
                    await c()
                  );
                let p = {
                  request: c1(c0({}, i), { expiryTimestamp: tE(s) }),
                  chainId: t,
                };
                return await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: o,
                      relayRpcId: a,
                      topic: r,
                      method: d,
                      params: p,
                      expiry: s,
                      throwOnFailedPublish: !0,
                      tvf: this.getTVFParams(o, p),
                    }).catch((e) => h(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: r,
                        request: i,
                        chainId: t,
                        id: o,
                      }),
                      e();
                  }),
                  new Promise(async (e) => {
                    var t;
                    if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                      let e = await tS(this.client.core.storage, cB);
                      await t_({ id: o, topic: r, wcDeepLink: e });
                    }
                    e();
                  }),
                  c(),
                ]).then((e) => e[2]);
              }),
              c2(this, "respond", async (e) => {
                this.isInitialized(), await this.isValidRespond(e);
                let { topic: t, response: i } = e,
                  { id: r } = i,
                  s = this.client.session.get(t);
                s.transportType === or.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let n = this.getAppLinkIfEnabled(
                  s.peer.metadata,
                  s.transportType
                );
                (0, n0.isJsonRpcResult)(i)
                  ? await this.sendResult({
                      id: r,
                      topic: t,
                      result: i.result,
                      throwOnFailedPublish: !0,
                      appLink: n,
                    })
                  : (0, n0.isJsonRpcError)(i) &&
                    (await this.sendError({
                      id: r,
                      topic: t,
                      error: i.error,
                      appLink: n,
                    })),
                  this.cleanupAfterResponse(e);
              }),
              c2(this, "ping", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidPing(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error("ping() -> isValidPing() failed"),
                    e)
                  );
                }
                let { topic: t } = e;
                if (this.client.session.keys.includes(t)) {
                  let e = (0, n$.payloadId)(),
                    i = (0, n$.getBigIntRpcId)().toString(),
                    { done: r, resolve: s, reject: n } = tm();
                  this.events.once(tx("session_ping", e), (e) => {
                    let { error: t } = e;
                    t ? n(t) : s();
                  }),
                    await Promise.all([
                      this.sendRequest({
                        topic: t,
                        method: "wc_sessionPing",
                        params: {},
                        throwOnFailedPublish: !0,
                        clientRpcId: e,
                        relayRpcId: i,
                      }),
                      r(),
                    ]);
                } else
                  this.client.core.pairing.pairings.keys.includes(t) &&
                    (this.client.logger.warn(
                      "ping() on pairing topic is deprecated and will be removed in the next major release."
                    ),
                    await this.client.core.pairing.ping({ topic: t }));
              }),
              c2(this, "emit", async (e) => {
                this.isInitialized(),
                  await this.confirmOnlineStateOrThrow(),
                  await this.isValidEmit(e);
                let { topic: t, event: i, chainId: r } = e,
                  s = (0, n$.getBigIntRpcId)().toString(),
                  n = (0, n$.payloadId)();
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionEvent",
                  params: { event: i, chainId: r },
                  throwOnFailedPublish: !0,
                  relayRpcId: s,
                  clientRpcId: n,
                });
              }),
              c2(this, "disconnect", async (e) => {
                this.isInitialized(),
                  await this.confirmOnlineStateOrThrow(),
                  await this.isValidDisconnect(e);
                let { topic: t } = e;
                if (this.client.session.keys.includes(t))
                  await this.sendRequest({
                    topic: t,
                    method: "wc_sessionDelete",
                    params: nN("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0,
                  }),
                    await this.deleteSession({ topic: t, emitEvent: !1 });
                else if (this.client.core.pairing.pairings.keys.includes(t))
                  await this.client.core.pairing.disconnect({ topic: t });
                else {
                  let { message: e } = nT(
                    "MISMATCHED_TOPIC",
                    "Session or pairing topic not found: ".concat(t)
                  );
                  throw Error(e);
                }
              }),
              c2(
                this,
                "find",
                (e) => (
                  this.isInitialized(),
                  this.client.session.getAll().filter((t) =>
                    (function (e, t) {
                      let { requiredNamespaces: i } = t,
                        r = Object.keys(e.namespaces),
                        s = Object.keys(i),
                        n = !0;
                      return (
                        !!tf(s, r) &&
                        (r.forEach((t) => {
                          let {
                              accounts: r,
                              methods: s,
                              events: o,
                            } = e.namespaces[t],
                            a = nP(r),
                            c = i[t];
                          (tf(e4(t, c), a) &&
                            tf(c.methods, s) &&
                            tf(c.events, o)) ||
                            (n = !1);
                        }),
                        n)
                      );
                    })(t, e)
                  )
                )
              ),
              c2(this, "getPendingSessionRequests", () =>
                this.client.pendingRequest.getAll()
              ),
              c2(this, "authenticate", async (e, t) => {
                var i, r, s;
                let n;
                this.isInitialized(), this.isValidAuthenticate(e);
                let o =
                    t &&
                    this.client.core.linkModeSupportedApps.includes(t) &&
                    (null == (i = this.client.metadata.redirect)
                      ? void 0
                      : i.linkMode),
                  a = o ? or.link_mode : or.relay;
                a === or.relay && (await this.confirmOnlineStateOrThrow());
                let {
                    chains: c,
                    statement: l = "",
                    uri: h,
                    domain: d,
                    nonce: u,
                    type: p,
                    exp: f,
                    nbf: g,
                    methods: y = [],
                    expiry: m,
                  } = e,
                  b = [...(e.resources || [])],
                  { topic: v, uri: w } = await this.client.core.pairing.create({
                    methods: ["wc_sessionAuthenticate"],
                    transportType: a,
                  });
                this.client.logger.info({
                  message: "Generated new pairing",
                  pairing: { topic: v, uri: w },
                });
                let E = await this.client.core.crypto.generateKeyPair(),
                  I = ne(E);
                if (
                  (await Promise.all([
                    this.client.auth.authKeys.set(cW, {
                      responseTopic: I,
                      publicKey: E,
                    }),
                    this.client.auth.pairingTopics.set(I, {
                      topic: I,
                      pairingTopic: v,
                    }),
                  ]),
                  await this.client.core.relayer.subscribe(I, {
                    transportType: a,
                  }),
                  this.client.logger.info(
                    "sending request to new pairing topic: ".concat(v)
                  ),
                  y.length > 0)
                ) {
                  let { namespace: e } = e5(c[0]),
                    t = ru(
                      (function (e, t, i) {
                        let r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : {};
                        return (
                          null == i || i.sort((e, t) => e.localeCompare(t)),
                          {
                            att: {
                              [e]: (function (e, t) {
                                let i =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {};
                                return Object.assign(
                                  {},
                                  ...(t =
                                    null == t
                                      ? void 0
                                      : t.sort((e, t) =>
                                          e.localeCompare(t)
                                        )).map((t) => ({
                                    ["".concat(e, "/").concat(t)]: [i],
                                  }))
                                );
                              })(t, i, r),
                            },
                          }
                        );
                      })(e, "request", y)
                    );
                  ry(b) &&
                    ((r = t),
                    (s = b.pop()),
                    (t = ru(
                      (function (e, t) {
                        rd(e), rd(t);
                        let i = Object.keys(e.att)
                            .concat(Object.keys(t.att))
                            .sort((e, t) => e.localeCompare(t)),
                          r = { att: {} };
                        return (
                          i.forEach((i) => {
                            var s, n;
                            Object.keys(
                              (null == (s = e.att) ? void 0 : s[i]) || {}
                            )
                              .concat(
                                Object.keys(
                                  (null == (n = t.att) ? void 0 : n[i]) || {}
                                )
                              )
                              .sort((e, t) => e.localeCompare(t))
                              .forEach((s) => {
                                var n, o;
                                r.att[i] = re(
                                  ((e, t) => {
                                    for (var i in t || (t = {}))
                                      rr.call(t, i) && rn(e, i, t[i]);
                                    if (ri)
                                      for (var i of ri(t))
                                        rs.call(t, i) && rn(e, i, t[i]);
                                    return e;
                                  })({}, r.att[i]),
                                  rt({
                                    [s]:
                                      (null == (n = e.att[i])
                                        ? void 0
                                        : n[s]) ||
                                      (null == (o = t.att[i]) ? void 0 : o[s]),
                                  })
                                );
                              });
                          }),
                          r
                        );
                      })(rp(r), rp(s))
                    ))),
                    b.push(t);
                }
                let x =
                    m && m > cM.wc_sessionAuthenticate.req.ttl
                      ? m
                      : cM.wc_sessionAuthenticate.req.ttl,
                  P = {
                    authPayload: {
                      type: null != p ? p : "caip122",
                      chains: c,
                      statement: l,
                      aud: h,
                      domain: d,
                      version: "1",
                      nonce: u,
                      iat: new Date().toISOString(),
                      exp: f,
                      nbf: g,
                      resources: b,
                    },
                    requester: { publicKey: E, metadata: this.client.metadata },
                    expiryTimestamp: tE(x),
                  },
                  _ = {
                    requiredNamespaces: {},
                    optionalNamespaces: {
                      eip155: {
                        chains: c,
                        methods: [...new Set(["personal_sign", ...y])],
                        events: ["chainChanged", "accountsChanged"],
                      },
                    },
                    relays: [{ protocol: "irn" }],
                    pairingTopic: v,
                    proposer: { publicKey: E, metadata: this.client.metadata },
                    expiryTimestamp: tE(cM.wc_sessionPropose.req.ttl),
                    id: (0, n$.payloadId)(),
                  },
                  { done: S, resolve: A, reject: O } = tm(x, "Request expired"),
                  C = (0, n$.payloadId)(),
                  R = tx("session_connect", _.id),
                  T = tx("session_request", C),
                  N = async (e) => {
                    let { error: t, session: i } = e;
                    this.events.off(T, U), t ? O(t) : i && A({ session: i });
                  },
                  U = async (e) => {
                    var i, r, s;
                    let n;
                    if (
                      (await this.deletePendingAuthRequest(C, {
                        message: "fulfilled",
                        code: 0,
                      }),
                      e.error)
                    ) {
                      let t = nN(
                        "WC_METHOD_UNSUPPORTED",
                        "wc_sessionAuthenticate"
                      );
                      return e.error.code === t.code
                        ? void 0
                        : (this.events.off(R, N), O(e.error.message));
                    }
                    await this.deleteProposal(_.id), this.events.off(R, N);
                    let { cacaos: o, responder: c } = e.result,
                      l = [],
                      h = [];
                    for (let e of o) {
                      (await rl({
                        cacao: e,
                        projectId: this.client.core.projectId,
                      })) ||
                        (this.client.logger.error(
                          e,
                          "Signature verification failed"
                        ),
                        O(
                          nN(
                            "SESSION_SETTLEMENT_FAILED",
                            "Signature verification failed"
                          )
                        ));
                      let { p: t } = e,
                        i = ry(t.resources),
                        r = [ra(t.iss)],
                        s = rc(t.iss);
                      if (i) {
                        let e = rf(i),
                          t = rg(i);
                        l.push(...e), r.push(...t);
                      }
                      for (let e of r) h.push("".concat(e, ":").concat(s));
                    }
                    let d = await this.client.core.crypto.generateSharedKey(
                      E,
                      c.publicKey
                    );
                    l.length > 0 &&
                      ((n = {
                        topic: d,
                        acknowledged: !0,
                        self: { publicKey: E, metadata: this.client.metadata },
                        peer: c,
                        controller: c.publicKey,
                        expiry: tE(cL),
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        relay: { protocol: "irn" },
                        pairingTopic: v,
                        namespaces: nO([...new Set(l)], [...new Set(h)]),
                        transportType: a,
                      }),
                      await this.client.core.relayer.subscribe(d, {
                        transportType: a,
                      }),
                      await this.client.session.set(d, n),
                      v &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: v,
                          metadata: c.metadata,
                        })),
                      (n = this.client.session.get(d))),
                      null != (i = this.client.metadata.redirect) &&
                        i.linkMode &&
                        null != (r = c.metadata.redirect) &&
                        r.linkMode &&
                        null != (s = c.metadata.redirect) &&
                        s.universal &&
                        t &&
                        (this.client.core.addLinkModeSupportedApp(
                          c.metadata.redirect.universal
                        ),
                        this.client.session.update(d, {
                          transportType: or.link_mode,
                        })),
                      A({ auths: o, session: n });
                  };
                this.events.once(R, N), this.events.once(T, U);
                try {
                  if (o) {
                    let e = (0, n$.formatJsonRpcRequest)(
                      "wc_sessionAuthenticate",
                      P,
                      C
                    );
                    this.client.core.history.set(v, e);
                    let i = await this.client.core.crypto.encode("", e, {
                      type: 2,
                      encoding: s4,
                    });
                    n = nf(t, v, i);
                  } else
                    await Promise.all([
                      this.sendRequest({
                        topic: v,
                        method: "wc_sessionAuthenticate",
                        params: P,
                        expiry: e.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: C,
                      }),
                      this.sendRequest({
                        topic: v,
                        method: "wc_sessionPropose",
                        params: _,
                        expiry: cM.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: _.id,
                      }),
                    ]);
                } catch (e) {
                  throw (this.events.off(R, N), this.events.off(T, U), e);
                }
                return (
                  await this.setProposal(_.id, _),
                  await this.setAuthRequest(C, {
                    request: c1(c0({}, P), { verifyContext: {} }),
                    pairingTopic: v,
                    transportType: a,
                  }),
                  { uri: null != n ? n : w, response: S }
                );
              }),
              c2(this, "approveSessionAuthenticate", async (e) => {
                let t,
                  { id: i, auths: r } = e,
                  s = this.client.core.eventClient.createEvent({
                    properties: {
                      topic: i.toString(),
                      trace: [ob.authenticated_session_approve_started],
                    },
                  });
                try {
                  this.isInitialized();
                } catch (e) {
                  throw (s.setError(ov.no_internet_connection), e);
                }
                let n = this.getPendingAuthRequest(i);
                if (!n)
                  throw (
                    (s.setError(
                      ov.authenticated_session_pending_request_not_found
                    ),
                    Error(
                      "Could not find pending auth request with id ".concat(i)
                    ))
                  );
                let o = n.transportType || or.relay;
                o === or.relay && (await this.confirmOnlineStateOrThrow());
                let a = n.requester.publicKey,
                  c = await this.client.core.crypto.generateKeyPair(),
                  l = ne(a),
                  h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                  d = [],
                  u = [];
                for (let e of r) {
                  if (
                    !(await rl({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    }))
                  ) {
                    s.setError(ov.invalid_cacao);
                    let e = nN(
                      "SESSION_SETTLEMENT_FAILED",
                      "Signature verification failed"
                    );
                    throw (
                      (await this.sendError({
                        id: i,
                        topic: l,
                        error: e,
                        encodeOpts: h,
                      }),
                      Error(e.message))
                    );
                  }
                  s.addTrace(ob.cacaos_verified);
                  let { p: t } = e,
                    r = ry(t.resources),
                    n = [ra(t.iss)],
                    o = rc(t.iss);
                  if (r) {
                    let e = rf(r),
                      t = rg(r);
                    d.push(...e), n.push(...t);
                  }
                  for (let e of n) u.push("".concat(e, ":").concat(o));
                }
                let p = await this.client.core.crypto.generateSharedKey(c, a);
                if (
                  (s.addTrace(ob.create_authenticated_session_topic),
                  (null == d ? void 0 : d.length) > 0)
                ) {
                  (t = {
                    topic: p,
                    acknowledged: !0,
                    self: { publicKey: c, metadata: this.client.metadata },
                    peer: { publicKey: a, metadata: n.requester.metadata },
                    controller: a,
                    expiry: tE(cL),
                    authentication: r,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: { protocol: "irn" },
                    pairingTopic: n.pairingTopic,
                    namespaces: nO([...new Set(d)], [...new Set(u)]),
                    transportType: o,
                  }),
                    s.addTrace(ob.subscribing_authenticated_session_topic);
                  try {
                    await this.client.core.relayer.subscribe(p, {
                      transportType: o,
                    });
                  } catch (e) {
                    throw (
                      (s.setError(
                        ov.subscribe_authenticated_session_topic_failure
                      ),
                      e)
                    );
                  }
                  s.addTrace(ob.subscribe_authenticated_session_topic_success),
                    await this.client.session.set(p, t),
                    s.addTrace(ob.store_authenticated_session),
                    await this.client.core.pairing.updateMetadata({
                      topic: n.pairingTopic,
                      metadata: n.requester.metadata,
                    });
                }
                s.addTrace(ob.publishing_authenticated_session_approve);
                try {
                  await this.sendResult({
                    topic: l,
                    id: i,
                    result: {
                      cacaos: r,
                      responder: {
                        publicKey: c,
                        metadata: this.client.metadata,
                      },
                    },
                    encodeOpts: h,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      ov.authenticated_session_approve_publish_failure
                    ),
                    e)
                  );
                }
                return (
                  await this.client.auth.requests.delete(i, {
                    message: "fulfilled",
                    code: 0,
                  }),
                  await this.client.core.pairing.activate({
                    topic: n.pairingTopic,
                  }),
                  this.client.core.eventClient.deleteEvent({
                    eventId: s.eventId,
                  }),
                  { session: t }
                );
              }),
              c2(this, "rejectSessionAuthenticate", async (e) => {
                this.isInitialized();
                let { id: t, reason: i } = e,
                  r = this.getPendingAuthRequest(t);
                if (!r)
                  throw Error(
                    "Could not find pending auth request with id ".concat(t)
                  );
                r.transportType === or.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let s = r.requester.publicKey,
                  n = await this.client.core.crypto.generateKeyPair(),
                  o = ne(s);
                await this.sendError({
                  id: t,
                  topic: o,
                  error: i,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: s,
                    senderPublicKey: n,
                  },
                  rpcOpts: cM.wc_sessionAuthenticate.reject,
                  appLink: this.getAppLinkIfEnabled(
                    r.requester.metadata,
                    r.transportType
                  ),
                }),
                  await this.client.auth.requests.delete(t, {
                    message: "rejected",
                    code: 0,
                  }),
                  await this.deleteProposal(t);
              }),
              c2(this, "formatAuthMessage", (e) => {
                this.isInitialized();
                let { request: t, iss: i } = e;
                return rh(t, i);
              }),
              c2(this, "processRelayMessageCache", () => {
                setTimeout(async () => {
                  if (0 !== this.relayMessageCache.length)
                    for (; this.relayMessageCache.length > 0; )
                      try {
                        let e = this.relayMessageCache.shift();
                        e && (await this.onRelayMessage(e));
                      } catch (e) {
                        this.client.logger.error(e);
                      }
                }, 50);
              }),
              c2(this, "cleanupDuplicatePairings", async (e) => {
                if (e.pairingTopic)
                  try {
                    let t = this.client.core.pairing.pairings.get(
                        e.pairingTopic
                      ),
                      i = this.client.core.pairing.pairings
                        .getAll()
                        .filter((i) => {
                          var r, s;
                          return (
                            (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                            (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                              e.peer.metadata.url &&
                            i.topic &&
                            i.topic !== t.topic
                          );
                        });
                    if (0 === i.length) return;
                    this.client.logger.info(
                      "Cleaning up ".concat(i.length, " duplicate pairing(s)")
                    ),
                      await Promise.all(
                        i.map((e) =>
                          this.client.core.pairing.disconnect({
                            topic: e.topic,
                          })
                        )
                      ),
                      this.client.logger.info(
                        "Duplicate pairings clean up finished"
                      );
                  } catch (e) {
                    this.client.logger.error(e);
                  }
              }),
              c2(this, "deleteSession", async (e) => {
                var t;
                let {
                    topic: i,
                    expirerHasDeleted: r = !1,
                    emitEvent: s = !0,
                    id: n = 0,
                  } = e,
                  { self: o } = this.client.session.get(i);
                await this.client.core.relayer.unsubscribe(i),
                  await this.client.session.delete(i, nN("USER_DISCONNECTED")),
                  this.addToRecentlyDeleted(i, "session"),
                  this.client.core.crypto.keychain.has(o.publicKey) &&
                    (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                  this.client.core.crypto.keychain.has(i) &&
                    (await this.client.core.crypto.deleteSymKey(i)),
                  r || this.client.core.expirer.del(i),
                  this.client.core.storage
                    .removeItem(cB)
                    .catch((e) => this.client.logger.warn(e)),
                  this.getPendingSessionRequests().forEach((e) => {
                    e.topic === i &&
                      this.deletePendingSessionRequest(
                        e.id,
                        nN("USER_DISCONNECTED")
                      );
                  }),
                  i ===
                    (null == (t = this.sessionRequestQueue.queue[0])
                      ? void 0
                      : t.topic) && (this.sessionRequestQueue.state = cH.idle),
                  s &&
                    this.client.events.emit("session_delete", {
                      id: n,
                      topic: i,
                    });
              }),
              c2(this, "deleteProposal", async (e, t) => {
                if (t)
                  try {
                    let t = this.client.proposal.get(e),
                      i = this.client.core.eventClient.getEvent({
                        topic: t.pairingTopic,
                      });
                    null == i || i.setError(om.proposal_expired);
                  } catch (e) {}
                await Promise.all([
                  this.client.proposal.delete(e, nN("USER_DISCONNECTED")),
                  t ? Promise.resolve() : this.client.core.expirer.del(e),
                ]),
                  this.addToRecentlyDeleted(e, "proposal");
              }),
              c2(this, "deletePendingSessionRequest", async function (e, i) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                await Promise.all([
                  t.client.pendingRequest.delete(e, i),
                  r ? Promise.resolve() : t.client.core.expirer.del(e),
                ]),
                  t.addToRecentlyDeleted(e, "request"),
                  (t.sessionRequestQueue.queue =
                    t.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                  r &&
                    ((t.sessionRequestQueue.state = cH.idle),
                    t.client.events.emit("session_request_expire", { id: e }));
              }),
              c2(this, "deletePendingAuthRequest", async function (e, i) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                await Promise.all([
                  t.client.auth.requests.delete(e, i),
                  r ? Promise.resolve() : t.client.core.expirer.del(e),
                ]);
              }),
              c2(this, "setExpiry", async (e, t) => {
                this.client.session.keys.includes(e) &&
                  (this.client.core.expirer.set(e, t),
                  await this.client.session.update(e, { expiry: t }));
              }),
              c2(this, "setProposal", async (e, t) => {
                this.client.core.expirer.set(
                  e,
                  tE(cM.wc_sessionPropose.req.ttl)
                ),
                  await this.client.proposal.set(e, t);
              }),
              c2(this, "setAuthRequest", async (e, t) => {
                let {
                  request: i,
                  pairingTopic: r,
                  transportType: s = or.relay,
                } = t;
                this.client.core.expirer.set(e, i.expiryTimestamp),
                  await this.client.auth.requests.set(e, {
                    authPayload: i.authPayload,
                    requester: i.requester,
                    expiryTimestamp: i.expiryTimestamp,
                    id: e,
                    pairingTopic: r,
                    verifyContext: i.verifyContext,
                    transportType: s,
                  });
              }),
              c2(this, "setPendingSessionRequest", async (e) => {
                let { id: t, topic: i, params: r, verifyContext: s } = e,
                  n =
                    r.request.expiryTimestamp ||
                    tE(cM.wc_sessionRequest.req.ttl);
                this.client.core.expirer.set(t, n),
                  await this.client.pendingRequest.set(t, {
                    id: t,
                    topic: i,
                    params: r,
                    verifyContext: s,
                  });
              }),
              c2(this, "sendRequest", async (e) => {
                let t,
                  i,
                  {
                    topic: r,
                    method: s,
                    params: n,
                    expiry: o,
                    relayRpcId: a,
                    clientRpcId: c,
                    throwOnFailedPublish: l,
                    appLink: h,
                    tvf: d,
                  } = e,
                  u = (0, n$.formatJsonRpcRequest)(s, n, c),
                  p = !!h;
                try {
                  let e = p ? s4 : s5;
                  t = await this.client.core.crypto.encode(r, u, {
                    encoding: e,
                  });
                } catch (e) {
                  throw (
                    (await this.cleanup(),
                    this.client.logger.error(
                      "sendRequest() -> core.crypto.encode() for topic ".concat(
                        r,
                        " failed"
                      )
                    ),
                    e)
                  );
                }
                if (cV.includes(s)) {
                  let e = nt(JSON.stringify(u)),
                    r = nt(t);
                  i = await this.client.core.verify.register({
                    id: r,
                    decryptedId: e,
                  });
                }
                let f = cM[s].req;
                if (
                  ((f.attestation = i),
                  o && (f.ttl = o),
                  a && (f.id = a),
                  this.client.core.history.set(r, u),
                  p)
                ) {
                  let e = nf(h, r, t);
                  await globalThis.Linking.openURL(e, this.client.name);
                } else {
                  let e = cM[s].req;
                  o && (e.ttl = o),
                    a && (e.id = a),
                    (e.tvf = c1(c0({}, d), { correlationId: u.id })),
                    l
                      ? ((e.internal = c1(c0({}, e.internal), {
                          throwOnFailedPublish: !0,
                        })),
                        await this.client.core.relayer.publish(r, t, e))
                      : this.client.core.relayer
                          .publish(r, t, e)
                          .catch((e) => this.client.logger.error(e));
                }
                return u.id;
              }),
              c2(this, "sendResult", async (e) => {
                let t,
                  i,
                  r,
                  {
                    id: s,
                    topic: n,
                    result: o,
                    throwOnFailedPublish: a,
                    encodeOpts: c,
                    appLink: l,
                  } = e,
                  h = (0, n$.formatJsonRpcResult)(s, o),
                  d =
                    l &&
                    "u" >
                      typeof (null == globalThis ? void 0 : globalThis.Linking);
                try {
                  let e = d ? s4 : s5;
                  t = await this.client.core.crypto.encode(
                    n,
                    h,
                    c1(c0({}, c || {}), { encoding: e })
                  );
                } catch (e) {
                  throw (
                    (await this.cleanup(),
                    this.client.logger.error(
                      "sendResult() -> core.crypto.encode() for topic ".concat(
                        n,
                        " failed"
                      )
                    ),
                    e)
                  );
                }
                try {
                  let e = (i = await this.client.core.history.get(n, s))
                    .request;
                  try {
                    r = this.getTVFParams(s, e.params, o);
                  } catch (e) {
                    this.client.logger.warn(
                      "sendResult() -> getTVFParams() failed: ".concat(
                        null == e ? void 0 : e.message
                      )
                    );
                  }
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "sendResult() -> history.get("
                        .concat(n, ", ")
                        .concat(s, ") failed")
                    ),
                    e)
                  );
                }
                if (d) {
                  let e = nf(l, n, t);
                  await globalThis.Linking.openURL(e, this.client.name);
                } else {
                  let e = cM[i.request.method].res;
                  (e.tvf = c1(c0({}, r), { correlationId: s })),
                    a
                      ? ((e.internal = c1(c0({}, e.internal), {
                          throwOnFailedPublish: !0,
                        })),
                        await this.client.core.relayer.publish(n, t, e))
                      : this.client.core.relayer
                          .publish(n, t, e)
                          .catch((e) => this.client.logger.error(e));
                }
                await this.client.core.history.resolve(h);
              }),
              c2(this, "sendError", async (e) => {
                let t,
                  i,
                  {
                    id: r,
                    topic: s,
                    error: n,
                    encodeOpts: o,
                    rpcOpts: a,
                    appLink: c,
                  } = e,
                  l = (0, n$.formatJsonRpcError)(r, n),
                  h =
                    c &&
                    "u" >
                      typeof (null == globalThis ? void 0 : globalThis.Linking);
                try {
                  let e = h ? s4 : s5;
                  t = await this.client.core.crypto.encode(
                    s,
                    l,
                    c1(c0({}, o || {}), { encoding: e })
                  );
                } catch (e) {
                  throw (
                    (await this.cleanup(),
                    this.client.logger.error(
                      "sendError() -> core.crypto.encode() for topic ".concat(
                        s,
                        " failed"
                      )
                    ),
                    e)
                  );
                }
                try {
                  i = await this.client.core.history.get(s, r);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "sendError() -> history.get("
                        .concat(s, ", ")
                        .concat(r, ") failed")
                    ),
                    e)
                  );
                }
                if (h) {
                  let e = nf(c, s, t);
                  await globalThis.Linking.openURL(e, this.client.name);
                } else {
                  let e = i.request.method,
                    r = a || cM[e].res;
                  this.client.core.relayer.publish(s, t, r);
                }
                await this.client.core.history.resolve(l);
              }),
              c2(this, "cleanup", async () => {
                let e = [],
                  t = [];
                this.client.session.getAll().forEach((t) => {
                  let i = !1;
                  tI(t.expiry) && (i = !0),
                    this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                    i && e.push(t.topic);
                }),
                  this.client.proposal.getAll().forEach((e) => {
                    tI(e.expiryTimestamp) && t.push(e.id);
                  }),
                  await Promise.all([
                    ...e.map((e) => this.deleteSession({ topic: e })),
                    ...t.map((e) => this.deleteProposal(e)),
                  ]);
              }),
              c2(this, "onProviderMessageEvent", async (e) => {
                !this.initialized || this.relayMessageCache.length > 0
                  ? this.relayMessageCache.push(e)
                  : await this.onRelayMessage(e);
              }),
              c2(this, "onRelayEventRequest", async (e) => {
                this.requestQueue.queue.push(e),
                  await this.processRequestsQueue();
              }),
              c2(this, "processRequestsQueue", async () => {
                if (this.requestQueue.state === cH.active)
                  return void this.client.logger.info(
                    "Request queue already active, skipping..."
                  );
                for (
                  this.client.logger.info(
                    "Request queue starting with ".concat(
                      this.requestQueue.queue.length,
                      " requests"
                    )
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = cH.active;
                  let e = this.requestQueue.queue.shift();
                  if (e)
                    try {
                      await this.processRequest(e);
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = cH.idle;
              }),
              c2(this, "processRequest", async (e) => {
                let {
                    topic: t,
                    payload: i,
                    attestation: r,
                    transportType: s,
                    encryptedId: n,
                  } = e,
                  o = i.method;
                if (
                  !this.shouldIgnorePairingRequest({
                    topic: t,
                    requestMethod: o,
                  })
                )
                  switch (o) {
                    case "wc_sessionPropose":
                      return await this.onSessionProposeRequest({
                        topic: t,
                        payload: i,
                        attestation: r,
                        encryptedId: n,
                      });
                    case "wc_sessionSettle":
                      return await this.onSessionSettleRequest(t, i);
                    case "wc_sessionUpdate":
                      return await this.onSessionUpdateRequest(t, i);
                    case "wc_sessionExtend":
                      return await this.onSessionExtendRequest(t, i);
                    case "wc_sessionPing":
                      return await this.onSessionPingRequest(t, i);
                    case "wc_sessionDelete":
                      return await this.onSessionDeleteRequest(t, i);
                    case "wc_sessionRequest":
                      return await this.onSessionRequest({
                        topic: t,
                        payload: i,
                        attestation: r,
                        encryptedId: n,
                        transportType: s,
                      });
                    case "wc_sessionEvent":
                      return await this.onSessionEventRequest(t, i);
                    case "wc_sessionAuthenticate":
                      return await this.onSessionAuthenticateRequest({
                        topic: t,
                        payload: i,
                        attestation: r,
                        encryptedId: n,
                        transportType: s,
                      });
                    default:
                      return this.client.logger.info(
                        "Unsupported request method ".concat(o)
                      );
                  }
              }),
              c2(this, "onRelayEventResponse", async (e) => {
                let { topic: t, payload: i, transportType: r } = e,
                  s = (await this.client.core.history.get(t, i.id)).request
                    .method;
                switch (s) {
                  case "wc_sessionPropose":
                    return this.onSessionProposeResponse(t, i, r);
                  case "wc_sessionSettle":
                    return this.onSessionSettleResponse(t, i);
                  case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(t, i);
                  case "wc_sessionExtend":
                    return this.onSessionExtendResponse(t, i);
                  case "wc_sessionPing":
                    return this.onSessionPingResponse(t, i);
                  case "wc_sessionRequest":
                    return this.onSessionRequestResponse(t, i);
                  case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(t, i);
                  default:
                    return this.client.logger.info(
                      "Unsupported response method ".concat(s)
                    );
                }
              }),
              c2(this, "onRelayEventUnknownPayload", (e) => {
                let { topic: t } = e,
                  { message: i } = nT(
                    "MISSING_OR_INVALID",
                    "Decoded payload on topic ".concat(
                      t,
                      " is not identifiable as a JSON-RPC request or a response."
                    )
                  );
                throw Error(i);
              }),
              c2(this, "shouldIgnorePairingRequest", (e) => {
                let { topic: t, requestMethod: i } = e,
                  r = this.expectedPairingMethodMap.get(t);
                return (
                  !(!r || r.includes(i)) &&
                  !!(
                    r.includes("wc_sessionAuthenticate") &&
                    this.client.events.listenerCount("session_authenticate") > 0
                  )
                );
              }),
              c2(this, "onSessionProposeRequest", async (e) => {
                let {
                    topic: t,
                    payload: i,
                    attestation: r,
                    encryptedId: s,
                  } = e,
                  { params: n, id: o } = i;
                try {
                  let e = this.client.core.eventClient.getEvent({ topic: t });
                  0 === this.client.events.listenerCount("session_proposal") &&
                    (console.warn("No listener for session_proposal event"),
                    null == e || e.setError(og.proposal_listener_not_found)),
                    this.isValidConnect(c0({}, i.params));
                  let a = n.expiryTimestamp || tE(cM.wc_sessionPropose.req.ttl),
                    c = c0(
                      {
                        id: o,
                        pairingTopic: t,
                        expiryTimestamp: a,
                        attestation: r,
                        encryptedId: s,
                      },
                      n
                    );
                  await this.setProposal(o, c);
                  let l = await this.getVerifyContext({
                    attestationId: r,
                    hash: nt(JSON.stringify(i)),
                    encryptedId: s,
                    metadata: c.proposer.metadata,
                  });
                  null == e || e.addTrace(of.emit_session_proposal),
                    this.client.events.emit("session_proposal", {
                      id: o,
                      params: c,
                      verifyContext: l,
                    });
                } catch (e) {
                  await this.sendError({
                    id: o,
                    topic: t,
                    error: e,
                    rpcOpts: cM.wc_sessionPropose.autoReject,
                  }),
                    this.client.logger.error(e);
                }
              }),
              c2(this, "onSessionProposeResponse", async (e, t, i) => {
                let { id: r } = t;
                if ((0, n0.isJsonRpcResult)(t)) {
                  let { result: s } = t;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: s,
                  });
                  let n = this.client.proposal.get(r);
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: n,
                  });
                  let o = n.proposer.publicKey;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: o,
                  });
                  let a = s.responderPublicKey;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: a,
                  });
                  let c = await this.client.core.crypto.generateSharedKey(o, a);
                  this.pendingSessions.set(r, {
                    sessionTopic: c,
                    pairingTopic: e,
                    proposalId: r,
                    publicKey: o,
                  });
                  let l = await this.client.core.relayer.subscribe(c, {
                    transportType: i,
                  });
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: l,
                  }),
                    await this.client.core.pairing.activate({ topic: e });
                } else if ((0, n0.isJsonRpcError)(t)) {
                  await this.deleteProposal(r);
                  let e = tx("session_connect", r);
                  if (0 === this.events.listenerCount(e))
                    throw Error(
                      "emitting ".concat(e, " without any listeners, 954")
                    );
                  this.events.emit(e, { error: t.error });
                }
              }),
              c2(this, "onSessionSettleRequest", async (e, t) => {
                let { id: i, params: r } = t;
                try {
                  this.isValidSessionSettleRequest(r);
                  let {
                      relay: i,
                      controller: s,
                      expiry: n,
                      namespaces: o,
                      sessionProperties: a,
                      scopedProperties: c,
                      sessionConfig: l,
                    } = t.params,
                    h = [...this.pendingSessions.values()].find(
                      (t) => t.sessionTopic === e
                    );
                  if (!h)
                    return this.client.logger.error(
                      "Pending session not found for topic ".concat(e)
                    );
                  let d = this.client.proposal.get(h.proposalId),
                    u = c1(
                      c0(
                        c0(
                          c0(
                            {
                              topic: e,
                              relay: i,
                              expiry: n,
                              namespaces: o,
                              acknowledged: !0,
                              pairingTopic: h.pairingTopic,
                              requiredNamespaces: d.requiredNamespaces,
                              optionalNamespaces: d.optionalNamespaces,
                              controller: s.publicKey,
                              self: {
                                publicKey: h.publicKey,
                                metadata: this.client.metadata,
                              },
                              peer: {
                                publicKey: s.publicKey,
                                metadata: s.metadata,
                              },
                            },
                            a && { sessionProperties: a }
                          ),
                          c && { scopedProperties: c }
                        ),
                        l && { sessionConfig: l }
                      ),
                      { transportType: or.relay }
                    );
                  await this.client.session.set(u.topic, u),
                    await this.setExpiry(u.topic, u.expiry),
                    await this.client.core.pairing.updateMetadata({
                      topic: h.pairingTopic,
                      metadata: u.peer.metadata,
                    }),
                    this.client.events.emit("session_connect", { session: u }),
                    this.events.emit(tx("session_connect", h.proposalId), {
                      session: u,
                    }),
                    this.pendingSessions.delete(h.proposalId),
                    this.deleteProposal(h.proposalId, !1),
                    this.cleanupDuplicatePairings(u),
                    await this.sendResult({ id: t.id, topic: e, result: !0 });
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              c2(this, "onSessionSettleResponse", async (e, t) => {
                let { id: i } = t;
                (0, n0.isJsonRpcResult)(t)
                  ? (await this.client.session.update(e, { acknowledged: !0 }),
                    this.events.emit(tx("session_approve", i), {}))
                  : (0, n0.isJsonRpcError)(t) &&
                    (await this.client.session.delete(
                      e,
                      nN("USER_DISCONNECTED")
                    ),
                    this.events.emit(tx("session_approve", i), {
                      error: t.error,
                    }));
              }),
              c2(this, "onSessionUpdateRequest", async (e, t) => {
                let { params: i, id: r } = t;
                try {
                  let t = "".concat(e, "_session_update"),
                    s = nX.get(t);
                  if (s && this.isRequestOutOfSync(s, r)) {
                    this.client.logger.warn(
                      "Discarding out of sync request - ".concat(r)
                    ),
                      this.sendError({
                        id: r,
                        topic: e,
                        error: nN("INVALID_UPDATE_REQUEST"),
                      });
                    return;
                  }
                  this.isValidUpdate(c0({ topic: e }, i));
                  try {
                    nX.set(t, r),
                      await this.client.session.update(e, {
                        namespaces: i.namespaces,
                      }),
                      await this.sendResult({ id: r, topic: e, result: !0 });
                  } catch (e) {
                    throw (nX.delete(t), e);
                  }
                  this.client.events.emit("session_update", {
                    id: r,
                    topic: e,
                    params: i,
                  });
                } catch (t) {
                  await this.sendError({ id: r, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              c2(
                this,
                "isRequestOutOfSync",
                (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
              ),
              c2(this, "onSessionUpdateResponse", (e, t) => {
                let { id: i } = t,
                  r = tx("session_update", i);
                if (0 === this.events.listenerCount(r))
                  throw Error("emitting ".concat(r, " without any listeners"));
                (0, n0.isJsonRpcResult)(t)
                  ? this.events.emit(tx("session_update", i), {})
                  : (0, n0.isJsonRpcError)(t) &&
                    this.events.emit(tx("session_update", i), {
                      error: t.error,
                    });
              }),
              c2(this, "onSessionExtendRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidExtend({ topic: e }),
                    await this.setExpiry(e, tE(cL)),
                    await this.sendResult({ id: i, topic: e, result: !0 }),
                    this.client.events.emit("session_extend", {
                      id: i,
                      topic: e,
                    });
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              c2(this, "onSessionExtendResponse", (e, t) => {
                let { id: i } = t,
                  r = tx("session_extend", i);
                if (0 === this.events.listenerCount(r))
                  throw Error("emitting ".concat(r, " without any listeners"));
                (0, n0.isJsonRpcResult)(t)
                  ? this.events.emit(tx("session_extend", i), {})
                  : (0, n0.isJsonRpcError)(t) &&
                    this.events.emit(tx("session_extend", i), {
                      error: t.error,
                    });
              }),
              c2(this, "onSessionPingRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidPing({ topic: e }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.client.events.emit("session_ping", {
                      id: i,
                      topic: e,
                    });
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              c2(this, "onSessionPingResponse", (e, t) => {
                let { id: i } = t,
                  r = tx("session_ping", i);
                setTimeout(() => {
                  if (0 === this.events.listenerCount(r))
                    throw Error(
                      "emitting ".concat(r, " without any listeners 2176")
                    );
                  (0, n0.isJsonRpcResult)(t)
                    ? this.events.emit(tx("session_ping", i), {})
                    : (0, n0.isJsonRpcError)(t) &&
                      this.events.emit(tx("session_ping", i), {
                        error: t.error,
                      });
                }, 500);
              }),
              c2(this, "onSessionDeleteRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidDisconnect({ topic: e, reason: t.params }),
                    Promise.all([
                      new Promise((t) => {
                        this.client.core.relayer.once(oe.publish, async () => {
                          t(await this.deleteSession({ topic: e, id: i }));
                        });
                      }),
                      this.sendResult({ id: i, topic: e, result: !0 }),
                      this.cleanupPendingSentRequestsForTopic({
                        topic: e,
                        error: nN("USER_DISCONNECTED"),
                      }),
                    ]).catch((e) => this.client.logger.error(e));
                } catch (e) {
                  this.client.logger.error(e);
                }
              }),
              c2(this, "onSessionRequest", async (e) => {
                var t, i, r;
                let {
                    topic: s,
                    payload: n,
                    attestation: o,
                    encryptedId: a,
                    transportType: c,
                  } = e,
                  { id: l, params: h } = n;
                try {
                  await this.isValidRequest(c0({ topic: s }, h));
                  let e = this.client.session.get(s),
                    n = await this.getVerifyContext({
                      attestationId: o,
                      hash: nt(
                        JSON.stringify(
                          (0, n$.formatJsonRpcRequest)(
                            "wc_sessionRequest",
                            h,
                            l
                          )
                        )
                      ),
                      encryptedId: a,
                      metadata: e.peer.metadata,
                      transportType: c,
                    }),
                    d = { id: l, topic: s, params: h, verifyContext: n };
                  await this.setPendingSessionRequest(d),
                    c === or.link_mode &&
                      null != (t = e.peer.metadata.redirect) &&
                      t.universal &&
                      this.client.core.addLinkModeSupportedApp(
                        null == (i = e.peer.metadata.redirect)
                          ? void 0
                          : i.universal
                      ),
                    null != (r = this.client.signConfig) &&
                    r.disableRequestQueue
                      ? this.emitSessionRequest(d)
                      : (this.addSessionRequestToSessionRequestQueue(d),
                        this.processSessionRequestQueue());
                } catch (e) {
                  await this.sendError({ id: l, topic: s, error: e }),
                    this.client.logger.error(e);
                }
              }),
              c2(this, "onSessionRequestResponse", (e, t) => {
                let { id: i } = t,
                  r = tx("session_request", i);
                if (0 === this.events.listenerCount(r))
                  throw Error("emitting ".concat(r, " without any listeners"));
                (0, n0.isJsonRpcResult)(t)
                  ? this.events.emit(tx("session_request", i), {
                      result: t.result,
                    })
                  : (0, n0.isJsonRpcError)(t) &&
                    this.events.emit(tx("session_request", i), {
                      error: t.error,
                    });
              }),
              c2(this, "onSessionEventRequest", async (e, t) => {
                let { id: i, params: r } = t;
                try {
                  let t = "".concat(e, "_session_event_").concat(r.event.name),
                    s = nX.get(t);
                  if (s && this.isRequestOutOfSync(s, i))
                    return void this.client.logger.info(
                      "Discarding out of sync request - ".concat(i)
                    );
                  this.isValidEmit(c0({ topic: e }, r)),
                    this.client.events.emit("session_event", {
                      id: i,
                      topic: e,
                      params: r,
                    }),
                    nX.set(t, i);
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              c2(this, "onSessionAuthenticateResponse", (e, t) => {
                let { id: i } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionAuthenticateResponse",
                  topic: e,
                  payload: t,
                }),
                  (0, n0.isJsonRpcResult)(t)
                    ? this.events.emit(tx("session_request", i), {
                        result: t.result,
                      })
                    : (0, n0.isJsonRpcError)(t) &&
                      this.events.emit(tx("session_request", i), {
                        error: t.error,
                      });
              }),
              c2(this, "onSessionAuthenticateRequest", async (e) => {
                var t;
                let {
                  topic: i,
                  payload: r,
                  attestation: s,
                  encryptedId: n,
                  transportType: o,
                } = e;
                try {
                  let {
                      requester: e,
                      authPayload: a,
                      expiryTimestamp: c,
                    } = r.params,
                    l = await this.getVerifyContext({
                      attestationId: s,
                      hash: nt(JSON.stringify(r)),
                      encryptedId: n,
                      metadata: e.metadata,
                      transportType: o,
                    }),
                    h = {
                      requester: e,
                      pairingTopic: i,
                      id: r.id,
                      authPayload: a,
                      verifyContext: l,
                      expiryTimestamp: c,
                    };
                  await this.setAuthRequest(r.id, {
                    request: h,
                    pairingTopic: i,
                    transportType: o,
                  }),
                    o === or.link_mode &&
                      null != (t = e.metadata.redirect) &&
                      t.universal &&
                      this.client.core.addLinkModeSupportedApp(
                        e.metadata.redirect.universal
                      ),
                    this.client.events.emit("session_authenticate", {
                      topic: i,
                      params: r.params,
                      id: r.id,
                      verifyContext: l,
                    });
                } catch (n) {
                  this.client.logger.error(n);
                  let e = r.params.requester.publicKey,
                    t = await this.client.core.crypto.generateKeyPair(),
                    s = this.getAppLinkIfEnabled(
                      r.params.requester.metadata,
                      o
                    );
                  await this.sendError({
                    id: r.id,
                    topic: i,
                    error: n,
                    encodeOpts: {
                      type: 1,
                      receiverPublicKey: e,
                      senderPublicKey: t,
                    },
                    rpcOpts: cM.wc_sessionAuthenticate.autoReject,
                    appLink: s,
                  });
                }
              }),
              c2(this, "addSessionRequestToSessionRequestQueue", (e) => {
                this.sessionRequestQueue.queue.push(e);
              }),
              c2(this, "cleanupAfterResponse", (e) => {
                this.deletePendingSessionRequest(e.response.id, {
                  message: "fulfilled",
                  code: 0,
                }),
                  setTimeout(() => {
                    (this.sessionRequestQueue.state = cH.idle),
                      this.processSessionRequestQueue();
                  }, (0, O.toMiliseconds)(this.requestQueueDelay));
              }),
              c2(this, "cleanupPendingSentRequestsForTopic", (e) => {
                let { topic: t, error: i } = e,
                  r = this.client.core.history.pending;
                r.length > 0 &&
                  r
                    .filter(
                      (e) =>
                        e.topic === t &&
                        "wc_sessionRequest" === e.request.method
                    )
                    .forEach((e) => {
                      let t = tx("session_request", e.request.id);
                      if (0 === this.events.listenerCount(t))
                        throw Error(
                          "emitting ".concat(t, " without any listeners")
                        );
                      this.events.emit(tx("session_request", e.request.id), {
                        error: i,
                      });
                    });
              }),
              c2(this, "processSessionRequestQueue", () => {
                if (this.sessionRequestQueue.state === cH.active)
                  return void this.client.logger.info(
                    "session request queue is already active."
                  );
                let e = this.sessionRequestQueue.queue[0];
                if (!e)
                  return void this.client.logger.info(
                    "session request queue is empty."
                  );
                try {
                  (this.sessionRequestQueue.state = cH.active),
                    this.emitSessionRequest(e);
                } catch (e) {
                  this.client.logger.error(e);
                }
              }),
              c2(this, "emitSessionRequest", (e) => {
                this.client.events.emit("session_request", e);
              }),
              c2(this, "onPairingCreated", (e) => {
                if (
                  (e.methods &&
                    this.expectedPairingMethodMap.set(e.topic, e.methods),
                  e.active)
                )
                  return;
                let t = this.client.proposal
                  .getAll()
                  .find((t) => t.pairingTopic === e.topic);
                t &&
                  this.onSessionProposeRequest({
                    topic: e.topic,
                    payload: (0, n$.formatJsonRpcRequest)(
                      "wc_sessionPropose",
                      c1(c0({}, t), {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                        relays: t.relays,
                        proposer: t.proposer,
                        sessionProperties: t.sessionProperties,
                        scopedProperties: t.scopedProperties,
                      }),
                      t.id
                    ),
                    attestation: t.attestation,
                    encryptedId: t.encryptedId,
                  });
              }),
              c2(this, "isValidConnect", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "connect() params: ".concat(JSON.stringify(e))
                  );
                  throw Error(t);
                }
                let {
                  pairingTopic: t,
                  requiredNamespaces: i,
                  optionalNamespaces: r,
                  sessionProperties: s,
                  scopedProperties: n,
                  relays: o,
                } = e;
                if (
                  (nD(t) || (await this.isValidPairingTopic(t)),
                  !(function (e, t) {
                    let i = !1;
                    return (
                      t && !e
                        ? (i = !0)
                        : e &&
                          nU(e) &&
                          e.length &&
                          e.forEach((e) => {
                            i = nH(e);
                          }),
                      i
                    );
                  })(o, !0))
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "connect() relays: ".concat(o)
                  );
                  throw Error(e);
                }
                if (!nD(i) && 0 !== nk(i)) {
                  let e =
                    "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                  ["fatal", "error", "silent"].includes(
                    this.client.logger.level
                  )
                    ? console.warn(e)
                    : this.client.logger.warn(e),
                    this.validateNamespaces(i, "requiredNamespaces");
                }
                if (
                  (nD(r) ||
                    0 === nk(r) ||
                    this.validateNamespaces(r, "optionalNamespaces"),
                  nD(s) || this.validateSessionProps(s, "sessionProperties"),
                  !nD(n))
                ) {
                  this.validateSessionProps(n, "scopedProperties");
                  let e = Object.keys(i || {}).concat(Object.keys(r || {}));
                  if (!Object.keys(n).every((t) => e.includes(t)))
                    throw Error(
                      "Scoped properties must be a subset of required/optional namespaces, received: "
                        .concat(
                          JSON.stringify(n),
                          ", required/optional namespaces: "
                        )
                        .concat(JSON.stringify(e))
                    );
                }
              }),
              c2(this, "validateNamespaces", (e, t) => {
                let i = (function (e, t, i) {
                  let r = null;
                  if (e && nk(e)) {
                    let s,
                      n = nM(e, t);
                    n && (r = n);
                    let o =
                      ((s = null),
                      Object.entries(e).forEach((e) => {
                        var r, n;
                        let o,
                          [a, c] = e;
                        if (s) return;
                        let l =
                          ((r = e4(a, c)),
                          (n = "".concat(t, " ").concat(i)),
                          (o = null),
                          nU(r) && r.length
                            ? r.forEach((e) => {
                                o ||
                                  nj(e) ||
                                  (o = nN(
                                    "UNSUPPORTED_CHAINS",
                                    ""
                                      .concat(n, ", chain ")
                                      .concat(
                                        e,
                                        ' should be a string and conform to "namespace:chainId" format'
                                      )
                                  ));
                              })
                            : nj(a) ||
                              (o = nN(
                                "UNSUPPORTED_CHAINS",
                                "".concat(
                                  n,
                                  ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'
                                )
                              )),
                          o);
                        l && (s = l);
                      }),
                      s);
                    o && (r = o);
                  } else
                    r = nT(
                      "MISSING_OR_INVALID",
                      ""
                        .concat(t, ", ")
                        .concat(i, " should be an object with data")
                    );
                  return r;
                })(e, "connect()", t);
                if (i) throw Error(i.message);
              }),
              c2(this, "isValidApprove", async (e) => {
                if (!nF(e))
                  throw Error(
                    nT("MISSING_OR_INVALID", "approve() params: ".concat(e))
                      .message
                  );
                let {
                  id: t,
                  namespaces: i,
                  relayProtocol: r,
                  sessionProperties: s,
                  scopedProperties: n,
                } = e;
                this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
                let o = this.client.proposal.get(t),
                  a = nz(i, "approve()");
                if (a) throw Error(a.message);
                let c = nK(o.requiredNamespaces, i, "approve()");
                if (c) throw Error(c.message);
                if (!nq(r, !0)) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "approve() relayProtocol: ".concat(r)
                  );
                  throw Error(e);
                }
                if (
                  (nD(s) || this.validateSessionProps(s, "sessionProperties"),
                  !nD(n))
                ) {
                  this.validateSessionProps(n, "scopedProperties");
                  let e = new Set(Object.keys(i));
                  if (!Object.keys(n).every((t) => e.has(t)))
                    throw Error(
                      "Scoped properties must be a subset of approved namespaces, received: "
                        .concat(JSON.stringify(n), ", approved namespaces: ")
                        .concat(Array.from(e).join(", "))
                    );
                }
              }),
              c2(this, "isValidReject", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "reject() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { id: t, reason: i } = e;
                if (
                  (this.checkRecentlyDeleted(t),
                  await this.isValidProposalId(t),
                  !(function (e) {
                    return !(
                      !e ||
                      "object" != typeof e ||
                      !e.code ||
                      !nB(e.code, !1) ||
                      !e.message ||
                      !nq(e.message, !1)
                    );
                  })(i))
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "reject() reason: ".concat(JSON.stringify(i))
                  );
                  throw Error(e);
                }
              }),
              c2(this, "isValidSessionSettleRequest", (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { relay: t, controller: i, namespaces: r, expiry: s } = e;
                if (!nH(t)) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() relay protocol should be a string"
                  );
                  throw Error(e);
                }
                let n = (function (e, t) {
                  let i = null;
                  return (
                    nq(null == e ? void 0 : e.publicKey, !1) ||
                      (i = nT(
                        "MISSING_OR_INVALID",
                        "".concat(
                          t,
                          " controller public key should be a string"
                        )
                      )),
                    i
                  );
                })(i, "onSessionSettleRequest()");
                if (n) throw Error(n.message);
                let o = nz(r, "onSessionSettleRequest()");
                if (o) throw Error(o.message);
                if (tI(s)) {
                  let { message: e } = nT(
                    "EXPIRED",
                    "onSessionSettleRequest()"
                  );
                  throw Error(e);
                }
              }),
              c2(this, "isValidUpdate", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "update() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t, namespaces: i } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                let r = this.client.session.get(t),
                  s = nz(i, "update()");
                if (s) throw Error(s.message);
                let n = nK(r.requiredNamespaces, i, "update()");
                if (n) throw Error(n.message);
              }),
              c2(this, "isValidExtend", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "extend() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              }),
              c2(this, "isValidRequest", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "request() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t, request: i, chainId: r, expiry: s } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                let { namespaces: n } = this.client.session.get(t);
                if (!nV(n, r)) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "request() chainId: ".concat(r)
                  );
                  throw Error(e);
                }
                if (
                  !(function (e) {
                    return !(nD(e) || !nq(e.method, !1));
                  })(i)
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "request() ".concat(JSON.stringify(i))
                  );
                  throw Error(e);
                }
                if (
                  !(function (e, t, i) {
                    return (
                      !!nq(i, !1) &&
                      (function (e, t) {
                        let i = [];
                        return (
                          Object.values(e).forEach((e) => {
                            nP(e.accounts).includes(t) && i.push(...e.methods);
                          }),
                          i
                        );
                      })(e, t).includes(i)
                    );
                  })(n, r, i.method)
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "request() method: ".concat(i.method)
                  );
                  throw Error(e);
                }
                if (
                  s &&
                  !(function (e, t) {
                    return nB(e, !1) && e <= t.max && e >= t.min;
                  })(s, cz)
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "request() expiry: "
                      .concat(
                        s,
                        ". Expiry must be a number (in seconds) between "
                      )
                      .concat(cz.min, " and ")
                      .concat(cz.max)
                  );
                  throw Error(e);
                }
              }),
              c2(this, "isValidRespond", async (e) => {
                var t;
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "respond() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: i, response: r } = e;
                try {
                  await this.isValidSessionTopic(i);
                } catch (i) {
                  throw (
                    (null != (t = null == e ? void 0 : e.response) &&
                      t.id &&
                      this.cleanupAfterResponse(e),
                    i)
                  );
                }
                if (
                  !(function (e) {
                    return !(
                      nD(e) ||
                      (nD(e.result) && nD(e.error)) ||
                      !nB(e.id, !1) ||
                      !nq(e.jsonrpc, !1)
                    );
                  })(r)
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "respond() response: ".concat(JSON.stringify(r))
                  );
                  throw Error(e);
                }
              }),
              c2(this, "isValidPing", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "ping() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidSessionOrPairingTopic(t);
              }),
              c2(this, "isValidEmit", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "emit() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t, event: i, chainId: r } = e;
                await this.isValidSessionTopic(t);
                let { namespaces: s } = this.client.session.get(t);
                if (!nV(s, r)) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "emit() chainId: ".concat(r)
                  );
                  throw Error(e);
                }
                if (
                  !(function (e) {
                    return !(nD(e) || !nq(e.name, !1));
                  })(i) ||
                  !(function (e, t, i) {
                    return (
                      !!nq(i, !1) &&
                      (function (e, t) {
                        let i = [];
                        return (
                          Object.values(e).forEach((e) => {
                            nP(e.accounts).includes(t) && i.push(...e.events);
                          }),
                          i
                        );
                      })(e, t).includes(i)
                    );
                  })(s, r, i.name)
                ) {
                  let { message: e } = nT(
                    "MISSING_OR_INVALID",
                    "emit() event: ".concat(JSON.stringify(i))
                  );
                  throw Error(e);
                }
              }),
              c2(this, "isValidDisconnect", async (e) => {
                if (!nF(e)) {
                  let { message: t } = nT(
                    "MISSING_OR_INVALID",
                    "disconnect() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidSessionOrPairingTopic(t);
              }),
              c2(this, "isValidAuthenticate", (e) => {
                let { chains: t, uri: i, domain: r, nonce: s } = e;
                if (!Array.isArray(t) || 0 === t.length)
                  throw Error(
                    "chains is required and must be a non-empty array"
                  );
                if (!nq(i, !1)) throw Error("uri is required parameter");
                if (!nq(r, !1)) throw Error("domain is required parameter");
                if (!nq(s, !1)) throw Error("nonce is required parameter");
                if ([...new Set(t.map((e) => e5(e).namespace))].length > 1)
                  throw Error(
                    "Multi-namespace requests are not supported. Please request single namespace only."
                  );
                let { namespace: n } = e5(t[0]);
                if ("eip155" !== n)
                  throw Error(
                    "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                  );
              }),
              c2(this, "getVerifyContext", async (e) => {
                let {
                    attestationId: t,
                    hash: i,
                    encryptedId: r,
                    metadata: s,
                    transportType: n,
                  } = e,
                  o = {
                    verified: {
                      verifyUrl: s.verifyUrl || od,
                      validation: "UNKNOWN",
                      origin: s.url || "",
                    },
                  };
                try {
                  if (n === or.link_mode) {
                    let e = this.getAppLinkIfEnabled(s, n);
                    return (
                      (o.verified.validation =
                        e && new URL(e).origin === new URL(s.url).origin
                          ? "VALID"
                          : "INVALID"),
                      o
                    );
                  }
                  let e = await this.client.core.verify.resolve({
                    attestationId: t,
                    hash: i,
                    encryptedId: r,
                    verifyUrl: s.verifyUrl,
                  });
                  e &&
                    ((o.verified.origin = e.origin),
                    (o.verified.isScam = e.isScam),
                    (o.verified.validation =
                      e.origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"));
                } catch (e) {
                  this.client.logger.warn(e);
                }
                return (
                  this.client.logger.debug(
                    "Verify context: ".concat(JSON.stringify(o))
                  ),
                  o
                );
              }),
              c2(this, "validateSessionProps", (e, t) => {
                Object.values(e).forEach((i, r) => {
                  if (null == i) {
                    let { message: s } = nT(
                      "MISSING_OR_INVALID",
                      ""
                        .concat(
                          t,
                          " must contain an existing value for each key. Received: "
                        )
                        .concat(i, " for key ")
                        .concat(Object.keys(e)[r])
                    );
                    throw Error(s);
                  }
                });
              }),
              c2(this, "getPendingAuthRequest", (e) => {
                let t = this.client.auth.requests.get(e);
                return "object" == typeof t ? t : void 0;
              }),
              c2(this, "addToRecentlyDeleted", (e, t) => {
                if (
                  (this.recentlyDeletedMap.set(e, t),
                  this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
                ) {
                  let e = 0,
                    t = this.recentlyDeletedLimit / 2;
                  for (let i of this.recentlyDeletedMap.keys()) {
                    if (e++ >= t) break;
                    this.recentlyDeletedMap.delete(i);
                  }
                }
              }),
              c2(this, "checkRecentlyDeleted", (e) => {
                let t = this.recentlyDeletedMap.get(e);
                if (t) {
                  let { message: i } = nT(
                    "MISSING_OR_INVALID",
                    "Record was recently deleted - ".concat(t, ": ").concat(e)
                  );
                  throw Error(i);
                }
              }),
              c2(this, "isLinkModeEnabled", (e, t) => {
                var i, r, s, n, o, a, c, l, h;
                return (
                  !!e &&
                  t === or.link_mode &&
                  (null ==
                  (r = null == (i = this.client.metadata) ? void 0 : i.redirect)
                    ? void 0
                    : r.linkMode) === !0 &&
                  (null ==
                  (n = null == (s = this.client.metadata) ? void 0 : s.redirect)
                    ? void 0
                    : n.universal) !== void 0 &&
                  (null ==
                  (a = null == (o = this.client.metadata) ? void 0 : o.redirect)
                    ? void 0
                    : a.universal) !== "" &&
                  (null == (c = null == e ? void 0 : e.redirect)
                    ? void 0
                    : c.universal) !== void 0 &&
                  (null == (l = null == e ? void 0 : e.redirect)
                    ? void 0
                    : l.universal) !== "" &&
                  (null == (h = null == e ? void 0 : e.redirect)
                    ? void 0
                    : h.linkMode) === !0 &&
                  this.client.core.linkModeSupportedApps.includes(
                    e.redirect.universal
                  ) &&
                  "u" >
                    typeof (null == globalThis ? void 0 : globalThis.Linking)
                );
              }),
              c2(this, "getAppLinkIfEnabled", (e, t) => {
                var i;
                return this.isLinkModeEnabled(e, t)
                  ? null == (i = null == e ? void 0 : e.redirect)
                    ? void 0
                    : i.universal
                  : void 0;
              }),
              c2(this, "handleLinkModeMessage", (e) => {
                let { url: t } = e;
                if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
                let i = tA(t, "topic") || "",
                  r = decodeURIComponent(tA(t, "wc_ev") || ""),
                  s = this.client.session.keys.includes(i);
                s &&
                  this.client.session.update(i, {
                    transportType: or.link_mode,
                  }),
                  this.client.core.dispatchEnvelope({
                    topic: i,
                    message: r,
                    sessionExists: s,
                  });
              }),
              c2(this, "registerLinkModeListeners", async () => {
                var e;
                if (
                  tC() ||
                  (tc() &&
                    null != (e = this.client.metadata.redirect) &&
                    e.linkMode)
                ) {
                  let e = null == globalThis ? void 0 : globalThis.Linking;
                  if ("u" > typeof e) {
                    e.addEventListener(
                      "url",
                      this.handleLinkModeMessage,
                      this.client.name
                    );
                    let t = await e.getInitialURL();
                    t &&
                      setTimeout(() => {
                        this.handleLinkModeMessage({ url: t });
                      }, 50);
                  }
                }
              }),
              c2(this, "getTVFParams", (e, t, i) => {
                var r, s, n;
                if (!(null != (r = t.request) && r.method)) return {};
                let o = {
                  correlationId: e,
                  rpcMethods: [t.request.method],
                  chainId: t.chainId,
                };
                try {
                  (o.txHashes = this.extractTxHashesFromResult(t.request, i)),
                    (o.contractAddresses = this.isValidContractData(
                      t.request.params
                    )
                      ? [
                          null ==
                          (n = null == (s = t.request.params) ? void 0 : s[0])
                            ? void 0
                            : n.to,
                        ]
                      : []);
                } catch (e) {
                  this.client.logger.warn("Error getting TVF params", e);
                }
                return o;
              }),
              c2(this, "isValidContractData", (e) => {
                var t;
                if (!e) return !1;
                try {
                  let i =
                    (null == e ? void 0 : e.data) ||
                    (null == (t = null == e ? void 0 : e[0]) ? void 0 : t.data);
                  if (!i.startsWith("0x")) return !1;
                  let r = i.slice(2);
                  return !!/^[0-9a-fA-F]*$/.test(r) && r.length % 2 == 0;
                } catch (e) {}
                return !1;
              }),
              c2(this, "extractTxHashesFromResult", (e, t) => {
                var r;
                try {
                  if (!t) return [];
                  let s = e.method,
                    n = cF[s];
                  if ("sui_signTransaction" === s)
                    return [
                      (function (e) {
                        let t = new Uint8Array(i.Buffer.from(e, "base64")),
                          r = Array.from("TransactionData::").map((e) =>
                            e.charCodeAt(0)
                          ),
                          s = new Uint8Array(r.length + t.length);
                        s.set(r), s.set(t, r.length);
                        let n = i1(s, { dkLen: 32 });
                        return ec.default.encode(n);
                      })(t.transactionBytes),
                    ];
                  if ("near_signTransaction" === s) return [i5(t)];
                  if ("near_signTransactions" === s) return t.map((e) => i5(e));
                  if (
                    "xrpl_signTransactionFor" === s ||
                    "xrpl_signTransaction" === s
                  )
                    return [null == (r = t.tx_json) ? void 0 : r.hash];
                  if ("polkadot_signTransaction" === s)
                    return [
                      (function (e) {
                        let t = Uint8Array.from(
                            i.Buffer.from(e.signature, "hex")
                          ),
                          r = (function (e) {
                            var t, i;
                            let { publicKey: r, signature: s, payload: n } = e,
                              o = nZ(n.method),
                              a =
                                128 |
                                parseInt(
                                  (null == (t = n.version)
                                    ? void 0
                                    : t.toString()) || "4"
                                ),
                              c = (function (e) {
                                let t = ec.default.decode(e)[0];
                                return 42 === t ? 0 : 60 === t ? 2 : 1;
                              })(n.address),
                              l =
                                "00" === n.era
                                  ? new Uint8Array([0])
                                  : nZ(n.era);
                            if (1 !== l.length && 2 !== l.length)
                              throw Error("Invalid era length");
                            let h = parseInt(n.nonce, 16),
                              d = new Uint8Array([255 & h, (h >> 8) & 255]),
                              u = new Uint8Array([
                                0,
                                ...r,
                                c,
                                ...s,
                                ...l,
                                ...d,
                                ...(function (e) {
                                  if (e < BigInt(1) << BigInt(6))
                                    return new Uint8Array([
                                      Number(e << BigInt(2)),
                                    ]);
                                  if (e < BigInt(1) << BigInt(14)) {
                                    let t = (e << BigInt(2)) | BigInt(1);
                                    return new Uint8Array([
                                      Number(t & BigInt(255)),
                                      Number((t >> BigInt(8)) & BigInt(255)),
                                    ]);
                                  }
                                  if (e < BigInt(1) << BigInt(30)) {
                                    let t = (e << BigInt(2)) | BigInt(2);
                                    return new Uint8Array([
                                      Number(t & BigInt(255)),
                                      Number((t >> BigInt(8)) & BigInt(255)),
                                      Number((t >> BigInt(16)) & BigInt(255)),
                                      Number((t >> BigInt(24)) & BigInt(255)),
                                    ]);
                                  }
                                  throw Error(
                                    "BigInt compact encoding not supported > 2^30"
                                  );
                                })(
                                  BigInt(
                                    "0x".concat(
                                      (i = n.tip).startsWith("0x")
                                        ? i.slice(2)
                                        : i
                                    )
                                  )
                                ),
                                ...o,
                              ]);
                            return new Uint8Array([
                              ...(function (e) {
                                if (e < 64) return new Uint8Array([e << 2]);
                                if (e < 16384) {
                                  let t = (e << 2) | 1;
                                  return new Uint8Array([
                                    255 & t,
                                    (t >> 8) & 255,
                                  ]);
                                }
                                if (e < 0x40000000) {
                                  let t = (e << 2) | 2;
                                  return new Uint8Array([
                                    255 & t,
                                    (t >> 8) & 255,
                                    (t >> 16) & 255,
                                    (t >> 24) & 255,
                                  ]);
                                }
                                throw Error(
                                  "Compact encoding > 2^30 not supported"
                                );
                              })(u.length + 1),
                              a,
                              ...u,
                            ]);
                          })({
                            publicKey: (function (e) {
                              let t = ec.default.decode(e);
                              if (t.length < 33)
                                throw Error(
                                  "Too short to contain a public key"
                                );
                              return t.slice(1, 33);
                            })(e.transaction.address),
                            signature: t,
                            payload: e.transaction,
                          });
                        var s = i.Buffer.from(r).toString("hex");
                        let n = nZ(s),
                          o = (0, e3.blake2b)(n, void 0, 32);
                        return "0x" + i.Buffer.from(o).toString("hex");
                      })({
                        transaction: e.params.transactionPayload,
                        signature: t.signature,
                      }),
                    ];
                  if ("algo_signTxn" === s)
                    return nU(t) ? t.map((e) => i4(e)) : [i4(t)];
                  if ("cosmos_signDirect" === s)
                    return [
                      (function (e) {
                        let t = i.Buffer.from(e.signed.bodyBytes, "base64"),
                          r = i.Buffer.from(e.signed.authInfoBytes, "base64"),
                          s = i.Buffer.from(e.signature.signature, "base64"),
                          n = [];
                        n.push(i.Buffer.from([10])),
                          n.push(i9(t.length)),
                          n.push(t),
                          n.push(i.Buffer.from([18])),
                          n.push(i9(r.length)),
                          n.push(r),
                          n.push(i.Buffer.from([26])),
                          n.push(i9(s.length)),
                          n.push(s);
                        let o = iV(i.Buffer.concat(n));
                        return i.Buffer.from(o).toString("hex").toUpperCase();
                      })(t),
                    ];
                  if ("string" == typeof t) return [t];
                  let o = t[n.key];
                  if (nU(o))
                    return "solana_signAllTransactions" === s
                      ? o.map((e) =>
                          (function (e) {
                            let t = atob(e),
                              r = new Uint8Array(t.length);
                            for (let e = 0; e < t.length; e++)
                              r[e] = t.charCodeAt(e);
                            let s = r[0];
                            if (0 === s) throw Error("No signatures found");
                            if (r.length < 1 + 64 * s)
                              throw Error(
                                "Transaction data too short for claimed signature count"
                              );
                            if (r.length < 100)
                              throw Error("Transaction too short");
                            let n = i.Buffer.from(e, "base64").slice(1, 65);
                            return ec.default.encode(n);
                          })(e)
                        )
                      : o;
                  if ("string" == typeof o) return [o];
                } catch (e) {
                  this.client.logger.warn(
                    "Error extracting tx hashes from result",
                    e
                  );
                }
                return [];
              });
          }
        }
        class c8 extends ci {
          constructor(e, t) {
            super(e, t, "proposal", cD), (this.core = e), (this.logger = t);
          }
        }
        class c3 extends ci {
          constructor(e, t) {
            super(e, t, "session", cD), (this.core = e), (this.logger = t);
          }
        }
        class c5 extends ci {
          constructor(e, t) {
            super(e, t, "request", cD, (e) => e.id),
              (this.core = e),
              (this.logger = t);
          }
        }
        class c4 extends ci {
          constructor(e, t) {
            super(e, t, "authKeys", cK, () => cW),
              (this.core = e),
              (this.logger = t);
          }
        }
        class c9 extends ci {
          constructor(e, t) {
            super(e, t, "pairingTopics", cK),
              (this.core = e),
              (this.logger = t);
          }
        }
        class c7 extends ci {
          constructor(e, t) {
            super(e, t, "requests", cK, (e) => e.id),
              (this.core = e),
              (this.logger = t);
          }
        }
        var le = Object.defineProperty,
          lt = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? le(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class li {
          async init() {
            await this.authKeys.init(),
              await this.pairingTopics.init(),
              await this.requests.init();
          }
          constructor(e, t) {
            (this.core = e),
              (this.logger = t),
              lt(this, "authKeys"),
              lt(this, "pairingTopics"),
              lt(this, "requests"),
              (this.authKeys = new c4(this.core, this.logger)),
              (this.pairingTopics = new c9(this.core, this.logger)),
              (this.requests = new c7(this.core, this.logger));
          }
        }
        var lr = Object.defineProperty,
          ls = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? lr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class ln extends S {
          static async init(e) {
            let t = new ln(e);
            return await t.initialize(), t;
          }
          get context() {
            return (0, a.getLoggerContext)(this.logger);
          }
          get pairing() {
            return this.core.pairing.pairings;
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.core.start(),
                await this.session.init(),
                await this.proposal.init(),
                await this.pendingRequest.init(),
                await this.auth.init(),
                await this.engine.init(),
                this.logger.info("SignClient Initialization Success"),
                setTimeout(() => {
                  this.engine.processRelayMessageCache();
                }, (0, O.toMiliseconds)(O.ONE_SECOND));
            } catch (e) {
              throw (
                (this.logger.info("SignClient Initialization Failure"),
                this.logger.error(e.message),
                e)
              );
            }
          }
          constructor(e) {
            super(e),
              ls(this, "protocol", "wc"),
              ls(this, "version", 2),
              ls(this, "name", cq.name),
              ls(this, "metadata"),
              ls(this, "core"),
              ls(this, "logger"),
              ls(this, "events", new s.EventEmitter()),
              ls(this, "engine"),
              ls(this, "session"),
              ls(this, "proposal"),
              ls(this, "pendingRequest"),
              ls(this, "auth"),
              ls(this, "signConfig"),
              ls(this, "on", (e, t) => this.events.on(e, t)),
              ls(this, "once", (e, t) => this.events.once(e, t)),
              ls(this, "off", (e, t) => this.events.off(e, t)),
              ls(this, "removeListener", (e, t) =>
                this.events.removeListener(e, t)
              ),
              ls(this, "removeAllListeners", (e) =>
                this.events.removeAllListeners(e)
              ),
              ls(this, "connect", async (e) => {
                try {
                  return await this.engine.connect(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "pair", async (e) => {
                try {
                  return await this.engine.pair(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "approve", async (e) => {
                try {
                  return await this.engine.approve(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "reject", async (e) => {
                try {
                  return await this.engine.reject(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "update", async (e) => {
                try {
                  return await this.engine.update(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "extend", async (e) => {
                try {
                  return await this.engine.extend(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "request", async (e) => {
                try {
                  return await this.engine.request(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "respond", async (e) => {
                try {
                  return await this.engine.respond(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "ping", async (e) => {
                try {
                  return await this.engine.ping(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "emit", async (e) => {
                try {
                  return await this.engine.emit(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "disconnect", async (e) => {
                try {
                  return await this.engine.disconnect(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "find", (e) => {
                try {
                  return this.engine.find(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "getPendingSessionRequests", () => {
                try {
                  return this.engine.getPendingSessionRequests();
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "authenticate", async (e, t) => {
                try {
                  return await this.engine.authenticate(e, t);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "formatAuthMessage", (e) => {
                try {
                  return this.engine.formatAuthMessage(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "approveSessionAuthenticate", async (e) => {
                try {
                  return await this.engine.approveSessionAuthenticate(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              ls(this, "rejectSessionAuthenticate", async (e) => {
                try {
                  return await this.engine.rejectSessionAuthenticate(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              (this.name = (null == e ? void 0 : e.name) || cq.name),
              (this.metadata = (function (e) {
                var t, i;
                let r = tu();
                try {
                  let s, n;
                  return (
                    null != e &&
                      e.url &&
                      r.url &&
                      new URL(e.url).host !== new URL(r.url).host &&
                      (console.warn(
                        "The configured WalletConnect 'metadata.url':"
                          .concat(e.url, " differs from the actual page url:")
                          .concat(
                            r.url,
                            ". This is probably unintended and can lead to issues."
                          )
                      ),
                      (e.url = r.url)),
                    null != (t = null == e ? void 0 : e.icons) &&
                      t.length &&
                      e.icons.length > 0 &&
                      (e.icons = e.icons.filter((e) => "" !== e)),
                    (s = tn(tn({}, r), e)),
                    (n = {
                      url: (null == e ? void 0 : e.url) || r.url,
                      name: (null == e ? void 0 : e.name) || r.name,
                      description:
                        (null == e ? void 0 : e.description) || r.description,
                      icons:
                        null != (i = null == e ? void 0 : e.icons) &&
                        i.length &&
                        e.icons.length > 0
                          ? e.icons
                          : r.icons,
                    }),
                    e7(s, te(n))
                  );
                } catch (t) {
                  return (
                    console.warn("Error populating app metadata", t), e || r
                  );
                }
              })(null == e ? void 0 : e.metadata)),
              (this.signConfig = null == e ? void 0 : e.signConfig);
            let t =
              "u" > typeof (null == e ? void 0 : e.logger) &&
              "string" != typeof (null == e ? void 0 : e.logger)
                ? e.logger
                : (0, c.pino)(
                    (0, a.getDefaultLoggerOptions)({
                      level: (null == e ? void 0 : e.logger) || cq.logger,
                    })
                  );
            (this.core = (null == e ? void 0 : e.core) || new cU(e)),
              (this.logger = (0, a.generateChildLogger)(t, this.name)),
              (this.session = new c3(this.core, this.logger)),
              (this.proposal = new c8(this.core, this.logger)),
              (this.pendingRequest = new c5(this.core, this.logger)),
              (this.engine = new c6(this)),
              (this.auth = new li(this.core, this.logger));
          }
        }
        var lo = e.i(512447);
        let la = "error",
          lc = "".concat("wc", "@2:").concat("universal_provider", ":"),
          ll = "https://rpc.walletconnect.org/v1/",
          lh = "generic",
          ld = "".concat(ll, "bundler"),
          lu = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
        function lp(e) {
          return null == e || ("object" != typeof e && "function" != typeof e);
        }
        function lf(e) {
          return Object.getOwnPropertySymbols(e).filter((t) =>
            Object.prototype.propertyIsEnumerable.call(e, t)
          );
        }
        function lg(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(e);
        }
        let ly = "[object String]",
          lm = "[object Number]",
          lb = "[object Boolean]",
          lv = "[object Arguments]";
        function lw(e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        }
        function lE(e, t, r) {
          let s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : new Map(),
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0,
            o = null == n ? void 0 : n(e, t, r, s);
          if (null != o) return o;
          if (lp(e)) return e;
          if (s.has(e)) return s.get(e);
          if (Array.isArray(e)) {
            let t = Array(e.length);
            s.set(e, t);
            for (let i = 0; i < e.length; i++) t[i] = lE(e[i], i, r, s, n);
            return (
              Object.hasOwn(e, "index") && (t.index = e.index),
              Object.hasOwn(e, "input") && (t.input = e.input),
              t
            );
          }
          if (e instanceof Date) return new Date(e.getTime());
          if (e instanceof RegExp) {
            let t = new RegExp(e.source, e.flags);
            return (t.lastIndex = e.lastIndex), t;
          }
          if (e instanceof Map) {
            let t = new Map();
            for (let [i, o] of (s.set(e, t), e)) t.set(i, lE(o, i, r, s, n));
            return t;
          }
          if (e instanceof Set) {
            let t = new Set();
            for (let i of (s.set(e, t), e)) t.add(lE(i, void 0, r, s, n));
            return t;
          }
          if ("u" > typeof i.Buffer && i.Buffer.isBuffer(e))
            return e.subarray();
          if (lw(e)) {
            let t = new (Object.getPrototypeOf(e).constructor)(e.length);
            s.set(e, t);
            for (let i = 0; i < e.length; i++) t[i] = lE(e[i], i, r, s, n);
            return t;
          }
          if (
            e instanceof ArrayBuffer ||
            ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
          )
            return e.slice(0);
          if (e instanceof DataView) {
            let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
            return s.set(e, t), lI(t, e, r, s, n), t;
          }
          if ("u" > typeof File && e instanceof File) {
            let t = new File([e], e.name, { type: e.type });
            return s.set(e, t), lI(t, e, r, s, n), t;
          }
          if (e instanceof Blob) {
            let t = new Blob([e], { type: e.type });
            return s.set(e, t), lI(t, e, r, s, n), t;
          }
          if (e instanceof Error) {
            let t = new e.constructor();
            return (
              s.set(e, t),
              (t.message = e.message),
              (t.name = e.name),
              (t.stack = e.stack),
              (t.cause = e.cause),
              lI(t, e, r, s, n),
              t
            );
          }
          if (
            "object" == typeof e &&
            (function (e) {
              switch (lg(e)) {
                case lv:
                case "[object Array]":
                case "[object ArrayBuffer]":
                case "[object DataView]":
                case lb:
                case "[object Date]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Map]":
                case lm:
                case "[object Object]":
                case "[object RegExp]":
                case "[object Set]":
                case ly:
                case "[object Symbol]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                  return !0;
                default:
                  return !1;
              }
            })(e)
          ) {
            let t = Object.create(Object.getPrototypeOf(e));
            return s.set(e, t), lI(t, e, r, s, n), t;
          }
          return e;
        }
        function lI(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e,
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            n = [...Object.keys(t), ...lf(t)];
          for (let o = 0; o < n.length; o++) {
            let a = n[o],
              c = Object.getOwnPropertyDescriptor(e, a);
            (null == c || c.writable) && (e[a] = lE(t[a], a, i, r, s));
          }
        }
        function lx(e) {
          var t;
          return (
            (t = (t, i, r, s) => {
              let n = void 0;
              if (null != n) return n;
              if ("object" == typeof e)
                switch (Object.prototype.toString.call(e)) {
                  case lm:
                  case ly:
                  case lb: {
                    let t = new e.constructor(null == e ? void 0 : e.valueOf());
                    return lI(t, e), t;
                  }
                  case lv: {
                    let t = {};
                    return (
                      lI(t, e),
                      (t.length = e.length),
                      (t[Symbol.iterator] = e[Symbol.iterator]),
                      t
                    );
                  }
                  default:
                    return;
                }
            }),
            lE(e, void 0, e, new Map(), t)
          );
        }
        function lP(e) {
          return (
            null !== e && "object" == typeof e && "[object Arguments]" === lg(e)
          );
        }
        function l_(e) {
          return "object" == typeof e && null !== e;
        }
        function lS() {}
        var lA = Object.defineProperty,
          lO = Object.defineProperties,
          lC = Object.getOwnPropertyDescriptors,
          lR = Object.getOwnPropertySymbols,
          lT = Object.prototype.hasOwnProperty,
          lN = Object.prototype.propertyIsEnumerable,
          lU = (e, t, i) =>
            t in e
              ? lA(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          lk = (e, t) => {
            for (var i in t || (t = {})) lT.call(t, i) && lU(e, i, t[i]);
            if (lR) for (var i of lR(t)) lN.call(t, i) && lU(e, i, t[i]);
            return e;
          },
          lD = (e, t) => lO(e, lC(t));
        function lq(e, t, i) {
          var r;
          let s = e5(e);
          return (
            (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
            ""
              .concat(ll, "?chainId=")
              .concat(s.namespace, ":")
              .concat(s.reference, "&projectId=")
              .concat(i)
          );
        }
        function lB(e) {
          return e.includes(":") ? e.split(":")[1] : e;
        }
        function lj(e) {
          return e.map((e) =>
            "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
          );
        }
        function lL() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (function (e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), s = 1;
              s < t;
              s++
            )
              r[s - 1] = arguments[s];
            return (function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), s = 1;
                s < t;
                s++
              )
                r[s - 1] = arguments[s];
              let n = r.slice(0, -1),
                o = r[r.length - 1],
                a = e;
              for (let e = 0; e < n.length; e++)
                a = (function e(t, r, s, n) {
                  if (
                    (lp(t) && (t = Object(t)),
                    null == r || "object" != typeof r)
                  )
                    return t;
                  if (n.has(r))
                    return (function (e) {
                      if (lp(e)) return e;
                      if (
                        Array.isArray(e) ||
                        lw(e) ||
                        e instanceof ArrayBuffer ||
                        ("u" > typeof SharedArrayBuffer &&
                          e instanceof SharedArrayBuffer)
                      )
                        return e.slice(0);
                      let t = Object.getPrototypeOf(e),
                        i = t.constructor;
                      if (
                        e instanceof Date ||
                        e instanceof Map ||
                        e instanceof Set
                      )
                        return new i(e);
                      if (e instanceof RegExp) {
                        let t = new i(e);
                        return (t.lastIndex = e.lastIndex), t;
                      }
                      if (e instanceof DataView)
                        return new i(e.buffer.slice(0));
                      if (e instanceof Error) {
                        let t = new i(e.message);
                        return (
                          (t.stack = e.stack),
                          (t.name = e.name),
                          (t.cause = e.cause),
                          t
                        );
                      }
                      return "u" > typeof File && e instanceof File
                        ? new i([e], e.name, {
                            type: e.type,
                            lastModified: e.lastModified,
                          })
                        : "object" == typeof e
                        ? Object.assign(Object.create(t), e)
                        : e;
                    })(n.get(r));
                  if ((n.set(r, t), Array.isArray(r))) {
                    var o;
                    r = r.slice();
                    for (let e = 0; e < r.length; e++)
                      r[e] = null != (o = r[e]) ? o : void 0;
                  }
                  let a = [...Object.keys(r), ...lf(r)];
                  for (let o = 0; o < a.length; o++) {
                    let c = a[o],
                      l = r[c],
                      h = t[c];
                    if (
                      (lP(l) && (l = { ...l }),
                      lP(h) && (h = { ...h }),
                      "u" > typeof i.Buffer &&
                        i.Buffer.isBuffer(l) &&
                        (l = lx(l)),
                      Array.isArray(l))
                    )
                      if ("object" == typeof h && null != h) {
                        let e = [],
                          t = Reflect.ownKeys(h);
                        for (let i = 0; i < t.length; i++) {
                          let r = t[i];
                          e[r] = h[r];
                        }
                        h = e;
                      } else h = [];
                    let d = s(h, l, c, t, r, n);
                    null != d
                      ? (t[c] = d)
                      : Array.isArray(l) || (l_(h) && l_(l))
                      ? (t[c] = e(h, l, s, n))
                      : null == h &&
                        (function (e) {
                          if ("object" != typeof e || null == e) return !1;
                          if (null === Object.getPrototypeOf(e)) return !0;
                          if (
                            "[object Object]" !==
                            Object.prototype.toString.call(e)
                          ) {
                            var t;
                            let i = e[Symbol.toStringTag];
                            return (
                              null != i &&
                              !!(null ==
                              (t = Object.getOwnPropertyDescriptor(
                                e,
                                Symbol.toStringTag
                              ))
                                ? void 0
                                : t.writable) &&
                              e.toString() === "[object ".concat(i, "]")
                            );
                          }
                          let i = e;
                          for (; null !== Object.getPrototypeOf(i); )
                            i = Object.getPrototypeOf(i);
                          return Object.getPrototypeOf(e) === i;
                        })(l)
                      ? (t[c] = e({}, l, s, n))
                      : null == h && lw(l)
                      ? (t[c] = lx(l))
                      : (void 0 === h || void 0 !== l) && (t[c] = l);
                  }
                  return t;
                })(a, n[e], o, new Map());
              return a;
            })(e, ...r, lS);
          })(lM(e), lM(t));
        }
        function lM(e) {
          var t, i, r, s, n;
          let o = {};
          if (!nk(e)) return o;
          for (let [a, c] of Object.entries(e)) {
            let e = n_(a) ? [a] : c.chains,
              l = c.methods || [],
              h = c.events || [],
              d = c.rpcMap || {},
              u = nS(a);
            (o[u] = lD(lk(lk({}, o[u]), c), {
              chains: tP(e, null == (t = o[u]) ? void 0 : t.chains),
              methods: tP(l, null == (i = o[u]) ? void 0 : i.methods),
              events: tP(h, null == (r = o[u]) ? void 0 : r.events),
            })),
              (nk(d) || nk((null == (s = o[u]) ? void 0 : s.rpcMap) || {})) &&
                (o[u].rpcMap = lk(
                  lk({}, d),
                  null == (n = o[u]) ? void 0 : n.rpcMap
                ));
          }
          return o;
        }
        function lz(e) {
          return e.includes(":") ? e.split(":")[2] : e;
        }
        function lH(e) {
          let t = {};
          for (let [i, r] of Object.entries(e)) {
            let e = r.methods || [],
              s = r.events || [],
              n = r.accounts || [],
              o = n_(i) ? [i] : r.chains ? r.chains : lj(r.accounts);
            t[i] = { chains: o, methods: e, events: s, accounts: n };
          }
          return t;
        }
        function lF(e) {
          return "number" == typeof e
            ? e
            : e.includes("0x")
            ? parseInt(e, 16)
            : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
            ? e
            : Number(e);
        }
        let lV = {},
          lK = (e) => lV[e],
          lW = (e, t) => {
            lV[e] = t;
          };
        var lG = Object.defineProperty,
          lJ = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? lG(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class lY {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return (
              (e &&
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])) ||
              []
            );
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = lB(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            lJ(this, "name", "polkadot"),
              lJ(this, "client"),
              lJ(this, "httpProviders"),
              lJ(this, "events"),
              lJ(this, "namespace"),
              lJ(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var lX = Object.defineProperty,
          lZ = Object.defineProperties,
          lQ = Object.getOwnPropertyDescriptors,
          l$ = Object.getOwnPropertySymbols,
          l0 = Object.prototype.hasOwnProperty,
          l1 = Object.prototype.propertyIsEnumerable,
          l2 = (e, t, i) =>
            t in e
              ? lX(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          l6 = (e, t) => {
            for (var i in t || (t = {})) l0.call(t, i) && l2(e, i, t[i]);
            if (l$) for (var i of l$(t)) l1.call(t, i) && l2(e, i, t[i]);
            return e;
          },
          l8 = (e, t) => lZ(e, lQ(t)),
          l3 = (e, t, i) => l2(e, "symbol" != typeof t ? t + "" : t, i);
        class l5 {
          async request(e) {
            switch (e.request.method) {
              case "eth_requestAccounts":
              case "eth_accounts":
                return this.getAccounts();
              case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(e);
              case "eth_chainId":
                return parseInt(this.getDefaultChain());
              case "wallet_getCapabilities":
                return await this.getCapabilities(e);
              case "wallet_getCallsStatus":
                return await this.getCallStatus(e);
            }
            return this.namespace.methods.includes(e.request.method)
              ? await this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
              (this.chainId = parseInt(e)),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId.toString();
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          createHttpProvider(e, t) {
            let i =
              t ||
              lq(
                "".concat(this.name, ":").concat(e),
                this.namespace,
                this.client.core.projectId
              );
            return new nQ.JsonRpcProvider(
              new lo.HttpConnection(i, lK("disableProviderPing"))
            );
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = parseInt(lB(t));
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          getHttpProvider() {
            let e = this.chainId,
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          async handleSwitchChain(e) {
            var t, i;
            let r = e.request.params
                ? null == (t = e.request.params[0])
                  ? void 0
                  : t.chainId
                : "0x0",
              s = parseInt((r = r.startsWith("0x") ? r : "0x".concat(r)), 16);
            if (this.isChainApproved(s)) this.setDefaultChain("".concat(s));
            else if (
              this.namespace.methods.includes("wallet_switchEthereumChain")
            )
              await this.client.request({
                topic: e.topic,
                request: { method: e.request.method, params: [{ chainId: r }] },
                chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
              }),
                this.setDefaultChain("".concat(s));
            else
              throw Error(
                "Failed to switch to chain 'eip155:".concat(
                  s,
                  "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."
                )
              );
            return null;
          }
          isChainApproved(e) {
            return this.namespace.chains.includes(
              "".concat(this.name, ":").concat(e)
            );
          }
          async getCapabilities(e) {
            var t, i, r, s, n;
            let o =
                null == (i = null == (t = e.request) ? void 0 : t.params)
                  ? void 0
                  : i[0],
              a =
                (null == (s = null == (r = e.request) ? void 0 : r.params)
                  ? void 0
                  : s[1]) || [],
              c = "".concat(o).concat(a.join(","));
            if (!o)
              throw Error(
                "Missing address parameter in `wallet_getCapabilities` request"
              );
            let l = this.client.session.get(e.topic),
              h =
                (null == (n = null == l ? void 0 : l.sessionProperties)
                  ? void 0
                  : n.capabilities) || {};
            if (null != h && h[c]) return null == h ? void 0 : h[c];
            let d = await this.client.request(e);
            try {
              await this.client.session.update(e.topic, {
                sessionProperties: l8(l6({}, l.sessionProperties || {}), {
                  capabilities: l8(l6({}, h || {}), { [c]: d }),
                }),
              });
            } catch (e) {
              console.warn("Failed to update session with capabilities", e);
            }
            return d;
          }
          async getCallStatus(e) {
            var t, i;
            let r = this.client.session.get(e.topic),
              s = null == (t = r.sessionProperties) ? void 0 : t.bundler_name;
            if (s) {
              let t = this.getBundlerUrl(e.chainId, s);
              try {
                return await this.getUserOperationReceipt(t, e);
              } catch (e) {
                console.warn("Failed to fetch call status from bundler", e, t);
              }
            }
            let n = null == (i = r.sessionProperties) ? void 0 : i.bundler_url;
            if (n)
              try {
                return await this.getUserOperationReceipt(n, e);
              } catch (e) {
                console.warn(
                  "Failed to fetch call status from custom bundler",
                  e,
                  n
                );
              }
            if (this.namespace.methods.includes(e.request.method))
              return await this.client.request(e);
            throw Error("Fetching call status not approved by the wallet.");
          }
          async getUserOperationReceipt(e, t) {
            var i;
            let r = new URL(e),
              s = await fetch(r, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                  (0, n$.formatJsonRpcRequest)("eth_getUserOperationReceipt", [
                    null == (i = t.request.params) ? void 0 : i[0],
                  ])
                ),
              });
            if (!s.ok)
              throw Error(
                "Failed to fetch user operation receipt - ".concat(s.status)
              );
            return await s.json();
          }
          getBundlerUrl(e, t) {
            return ""
              .concat(ld, "?projectId=")
              .concat(this.client.core.projectId, "&chainId=")
              .concat(e, "&bundler=")
              .concat(t);
          }
          constructor(e) {
            l3(this, "name", "eip155"),
              l3(this, "client"),
              l3(this, "chainId"),
              l3(this, "namespace"),
              l3(this, "httpProviders"),
              l3(this, "events"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.httpProviders = this.createHttpProviders()),
              (this.chainId = parseInt(this.getDefaultChain()));
          }
        }
        var l4 = Object.defineProperty,
          l9 = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? l4(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class l7 {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = lB(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            l9(this, "name", "solana"),
              l9(this, "client"),
              l9(this, "httpProviders"),
              l9(this, "events"),
              l9(this, "namespace"),
              l9(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var he = Object.defineProperty,
          ht = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? he(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hi {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(this.chainId)
              );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = lB(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            ht(this, "name", "cosmos"),
              ht(this, "client"),
              ht(this, "httpProviders"),
              ht(this, "events"),
              ht(this, "namespace"),
              ht(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hr = Object.defineProperty,
          hs = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? hr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hn {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (!this.httpProviders[e]) {
              let i =
                t ||
                lq(
                  "".concat(this.name, ":").concat(e),
                  this.namespace,
                  this.client.core.projectId
                );
              this.setHttpProvider(e, i);
            }
            (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(this.chainId)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                e[t] = this.createHttpProvider(
                  t,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return typeof i > "u"
              ? void 0
              : new nQ.JsonRpcProvider(
                  new lo.default(i, lK("disableProviderPing"))
                );
          }
          constructor(e) {
            hs(this, "name", "algorand"),
              hs(this, "client"),
              hs(this, "httpProviders"),
              hs(this, "events"),
              hs(this, "namespace"),
              hs(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var ho = Object.defineProperty,
          ha = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? ho(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hc {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(this.chainId)
              );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                let i = this.getCardanoRPCUrl(t),
                  r = lB(t);
                e[r] = this.createHttpProvider(r, i);
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          getCardanoRPCUrl(e) {
            let t = this.namespace.rpcMap;
            if (t) return t[e];
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || this.getCardanoRPCUrl(e);
            if (!i) throw Error("No RPC url provided for chainId: ".concat(e));
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            ha(this, "name", "cip34"),
              ha(this, "client"),
              ha(this, "httpProviders"),
              ha(this, "events"),
              ha(this, "namespace"),
              ha(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hl = Object.defineProperty,
          hh = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? hl(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hd {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = lB(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            hh(this, "name", "elrond"),
              hh(this, "client"),
              hh(this, "httpProviders"),
              hh(this, "events"),
              hh(this, "namespace"),
              hh(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hu = Object.defineProperty,
          hp = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? hu(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hf {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = lB(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            hp(this, "name", "multiversx"),
              hp(this, "client"),
              hp(this, "httpProviders"),
              hp(this, "events"),
              hp(this, "namespace"),
              hp(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hg = Object.defineProperty,
          hy = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? hg(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hm {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (((this.chainId = e), !this.httpProviders[e])) {
              let i =
                t || lq("".concat(this.name, ":").concat(e), this.namespace);
              this.setHttpProvider(e, i);
            }
            this.events.emit(
              lu.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(this.chainId)
            );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return (
              (e &&
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])) ||
              []
            );
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                e[t] = this.createHttpProvider(
                  t,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace);
            return typeof i > "u"
              ? void 0
              : new nQ.JsonRpcProvider(
                  new lo.default(i, lK("disableProviderPing"))
                );
          }
          constructor(e) {
            hy(this, "name", "near"),
              hy(this, "client"),
              hy(this, "httpProviders"),
              hy(this, "events"),
              hy(this, "namespace"),
              hy(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hb = Object.defineProperty,
          hv = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? hb(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hw {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (((this.chainId = e), !this.httpProviders[e])) {
              let i =
                t || lq("".concat(this.name, ":").concat(e), this.namespace);
              this.setHttpProvider(e, i);
            }
            this.events.emit(
              lu.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(this.chainId)
            );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return (
              (e &&
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])) ||
              []
            );
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                e[t] = this.createHttpProvider(t);
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace);
            return typeof i > "u"
              ? void 0
              : new nQ.JsonRpcProvider(new lo.default(i));
          }
          constructor(e) {
            hv(this, "name", "tezos"),
              hv(this, "client"),
              hv(this, "httpProviders"),
              hv(this, "events"),
              hv(this, "namespace"),
              hv(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hE = Object.defineProperty,
          hI = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? hE(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class hx {
          updateNamespace(e) {
            (this.namespace.chains = [
              ...new Set((this.namespace.chains || []).concat(e.chains || [])),
            ]),
              (this.namespace.accounts = [
                ...new Set(
                  (this.namespace.accounts || []).concat(e.accounts || [])
                ),
              ]),
              (this.namespace.methods = [
                ...new Set(
                  (this.namespace.methods || []).concat(e.methods || [])
                ),
              ]),
              (this.namespace.events = [
                ...new Set(
                  (this.namespace.events || []).concat(e.events || [])
                ),
              ]),
              (this.httpProviders = this.createHttpProviders());
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider(e.chainId).request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                lu.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            var e, t;
            let i = {};
            return (
              null ==
                (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
                t.forEach((e) => {
                  let t = e5(e);
                  i["".concat(t.namespace, ":").concat(t.reference)] =
                    this.createHttpProvider(e);
                }),
              i
            );
          }
          getHttpProvider(e) {
            let t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || lq(e, this.namespace, this.client.core.projectId);
            return new nQ.JsonRpcProvider(
              new lo.default(i, lK("disableProviderPing"))
            );
          }
          constructor(e) {
            hI(this, "name", lh),
              hI(this, "client"),
              hI(this, "httpProviders"),
              hI(this, "events"),
              hI(this, "namespace"),
              hI(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = lK("events")),
              (this.client = lK("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var hP = Object.defineProperty,
          h_ = Object.defineProperties,
          hS = Object.getOwnPropertyDescriptors,
          hA = Object.getOwnPropertySymbols,
          hO = Object.prototype.hasOwnProperty,
          hC = Object.prototype.propertyIsEnumerable,
          hR = (e, t, i) =>
            t in e
              ? hP(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          hT = (e, t) => {
            for (var i in t || (t = {})) hO.call(t, i) && hR(e, i, t[i]);
            if (hA) for (var i of hA(t)) hC.call(t, i) && hR(e, i, t[i]);
            return e;
          },
          hN = (e, t) => h_(e, hS(t)),
          hU = (e, t, i) => hR(e, "symbol" != typeof t ? t + "" : t, i);
        class hk {
          static async init(e) {
            let t = new hk(e);
            return await t.initialize(), t;
          }
          async request(e, t, i) {
            let [r, s] = this.validateChain(t);
            if (!this.session)
              throw Error("Please call connect() before request()");
            return await this.getProvider(r).request({
              request: hT({}, e),
              chainId: "".concat(r, ":").concat(s),
              topic: this.session.topic,
              expiry: i,
            });
          }
          sendAsync(e, t, i, r) {
            let s = new Date().getTime();
            this.request(e, i, r)
              .then((e) => t(null, (0, n$.formatJsonRpcResult)(s, e)))
              .catch((e) => t(e, void 0));
          }
          async enable() {
            if (!this.client) throw Error("Sign Client not initialized");
            return (
              this.session ||
                (await this.connect({
                  namespaces: this.namespaces,
                  optionalNamespaces: this.optionalNamespaces,
                  sessionProperties: this.sessionProperties,
                  scopedProperties: this.scopedProperties,
                })),
              await this.requestAccounts()
            );
          }
          async disconnect() {
            var e;
            if (!this.session)
              throw Error("Please call connect() before enable()");
            await this.client.disconnect({
              topic: null == (e = this.session) ? void 0 : e.topic,
              reason: nN("USER_DISCONNECTED"),
            }),
              await this.cleanup();
          }
          async connect(e) {
            if (!this.client) throw Error("Sign Client not initialized");
            if (
              (this.setNamespaces(e),
              await this.cleanupPendingPairings(),
              !e.skipPairing)
            )
              return await this.pair(e.pairingTopic);
          }
          async authenticate(e, t) {
            if (!this.client) throw Error("Sign Client not initialized");
            this.setNamespaces(e), await this.cleanupPendingPairings();
            let { uri: i, response: r } = await this.client.authenticate(e, t);
            i && ((this.uri = i), this.events.emit("display_uri", i));
            let s = await r();
            if (((this.session = s.session), this.session)) {
              let e = lH(this.session.namespaces);
              (this.namespaces = lL(this.namespaces, e)),
                await this.persist("namespaces", this.namespaces),
                this.onConnect();
            }
            return s;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          get isWalletConnect() {
            return !0;
          }
          async pair(e) {
            let { uri: t, approval: i } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
              scopedProperties: this.scopedProperties,
            });
            t && ((this.uri = t), this.events.emit("display_uri", t));
            let r = await i();
            this.session = r;
            let s = lH(r.namespaces);
            return (
              (this.namespaces = lL(this.namespaces, s)),
              await this.persist("namespaces", this.namespaces),
              await this.persist("optionalNamespaces", this.optionalNamespaces),
              this.onConnect(),
              this.session
            );
          }
          setDefaultChain(e, t) {
            try {
              if (!this.session) return;
              let [i, r] = this.validateChain(e),
                s = this.getProvider(i);
              s.name === lh
                ? s.setDefaultChain("".concat(i, ":").concat(r), t)
                : s.setDefaultChain(r, t);
            } catch (e) {
              if (!/Please call connect/.test(e.message)) throw e;
            }
          }
          async cleanupPendingPairings() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            this.logger.info("Cleaning up inactive pairings...");
            let t = this.client.pairing.getAll();
            if (nU(t)) {
              for (let i of t)
                e.deletePairings
                  ? this.client.core.expirer.set(i.topic, 0)
                  : await this.client.core.relayer.subscriber.unsubscribe(
                      i.topic
                    );
              this.logger.info("Inactive pairings cleared: ".concat(t.length));
            }
          }
          abortPairingAttempt() {
            this.logger.warn(
              "abortPairingAttempt is deprecated. This is now a no-op."
            );
          }
          async checkStorage() {
            (this.namespaces = (await this.getFromStore("namespaces")) || {}),
              (this.optionalNamespaces =
                (await this.getFromStore("optionalNamespaces")) || {}),
              this.session && this.createProviders();
          }
          async initialize() {
            this.logger.trace("Initialized"),
              await this.createClient(),
              await this.checkStorage(),
              this.registerEventListeners();
          }
          async createClient() {
            var e, t;
            if (
              ((this.client =
                this.providerOpts.client ||
                (await ln.init({
                  core: this.providerOpts.core,
                  logger: this.providerOpts.logger || la,
                  relayUrl:
                    this.providerOpts.relayUrl ||
                    "wss://relay.walletconnect.org",
                  projectId: this.providerOpts.projectId,
                  metadata: this.providerOpts.metadata,
                  storageOptions: this.providerOpts.storageOptions,
                  storage: this.providerOpts.storage,
                  name: this.providerOpts.name,
                  customStoragePrefix: this.providerOpts.customStoragePrefix,
                  telemetryEnabled: this.providerOpts.telemetryEnabled,
                }))),
              this.providerOpts.session)
            )
              try {
                this.session = this.client.session.get(
                  this.providerOpts.session.topic
                );
              } catch (i) {
                throw (
                  (this.logger.error("Failed to get session", i),
                  Error(
                    "The provided session: ".concat(
                      null ==
                        (t =
                          null == (e = this.providerOpts) ? void 0 : e.session)
                        ? void 0
                        : t.topic,
                      " doesn't exist in the Sign client"
                    )
                  ))
                );
              }
            else {
              let e = this.client.session.getAll();
              this.session = e[0];
            }
            this.logger.trace("SignClient Initialized");
          }
          createProviders() {
            if (!this.client) throw Error("Sign Client not initialized");
            if (!this.session)
              throw Error(
                "Session not initialized. Please call connect() before enable()"
              );
            let e = [
              ...new Set(
                Object.keys(this.session.namespaces).map((e) => nS(e))
              ),
            ];
            lW("client", this.client),
              lW("events", this.events),
              lW("disableProviderPing", this.disableProviderPing),
              e.forEach((e) => {
                if (!this.session) return;
                let t = (function (e, t) {
                    let i = Object.keys(t.namespaces).filter((t) =>
                      t.includes(e)
                    );
                    if (!i.length) return [];
                    let r = [];
                    return (
                      i.forEach((e) => {
                        let i = t.namespaces[e].accounts;
                        r.push(...i);
                      }),
                      r
                    );
                  })(e, this.session),
                  i = lj(t),
                  r = hN(
                    hT({}, lL(this.namespaces, this.optionalNamespaces)[e]),
                    { accounts: t, chains: i }
                  );
                switch (e) {
                  case "eip155":
                    this.rpcProviders[e] = new l5({ namespace: r });
                    break;
                  case "algorand":
                    this.rpcProviders[e] = new hn({ namespace: r });
                    break;
                  case "solana":
                    this.rpcProviders[e] = new l7({ namespace: r });
                    break;
                  case "cosmos":
                    this.rpcProviders[e] = new hi({ namespace: r });
                    break;
                  case "polkadot":
                    this.rpcProviders[e] = new lY({ namespace: r });
                    break;
                  case "cip34":
                    this.rpcProviders[e] = new hc({ namespace: r });
                    break;
                  case "elrond":
                    this.rpcProviders[e] = new hd({ namespace: r });
                    break;
                  case "multiversx":
                    this.rpcProviders[e] = new hf({ namespace: r });
                    break;
                  case "near":
                    this.rpcProviders[e] = new hm({ namespace: r });
                    break;
                  case "tezos":
                    this.rpcProviders[e] = new hw({ namespace: r });
                    break;
                  default:
                    this.rpcProviders[lh]
                      ? this.rpcProviders[lh].updateNamespace(r)
                      : (this.rpcProviders[lh] = new hx({ namespace: r }));
                }
              });
          }
          registerEventListeners() {
            if (typeof this.client > "u")
              throw Error("Sign Client is not initialized");
            this.client.on("session_ping", (e) => {
              var t;
              let { topic: i } = e;
              i === (null == (t = this.session) ? void 0 : t.topic) &&
                this.events.emit("session_ping", e);
            }),
              this.client.on("session_event", (e) => {
                var t;
                let { params: i, topic: r } = e;
                if (r !== (null == (t = this.session) ? void 0 : t.topic))
                  return;
                let { event: s } = i;
                if ("accountsChanged" === s.name) {
                  let e = s.data;
                  e && nU(e) && this.events.emit("accountsChanged", e.map(lz));
                } else if ("chainChanged" === s.name) {
                  let e = i.chainId,
                    t = i.event.data,
                    r = nS(e),
                    s = lF(e) !== lF(t) ? "".concat(r, ":").concat(lF(t)) : e;
                  this.onChainChanged(s);
                } else this.events.emit(s.name, s.data);
                this.events.emit("session_event", e);
              }),
              this.client.on("session_update", (e) => {
                var t, i;
                let { topic: r, params: s } = e;
                if (r !== (null == (t = this.session) ? void 0 : t.topic))
                  return;
                let { namespaces: n } = s,
                  o = null == (i = this.client) ? void 0 : i.session.get(r);
                (this.session = hN(hT({}, o), { namespaces: n })),
                  this.onSessionUpdate(),
                  this.events.emit("session_update", { topic: r, params: s });
              }),
              this.client.on("session_delete", async (e) => {
                var t;
                e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                  (await this.cleanup(),
                  this.events.emit("session_delete", e),
                  this.events.emit(
                    "disconnect",
                    hN(hT({}, nN("USER_DISCONNECTED")), { data: e.topic })
                  ));
              }),
              this.on(lu.DEFAULT_CHAIN_CHANGED, (e) => {
                this.onChainChanged(e, !0);
              });
          }
          getProvider(e) {
            return this.rpcProviders[e] || this.rpcProviders[lh];
          }
          onSessionUpdate() {
            Object.keys(this.rpcProviders).forEach((e) => {
              var t;
              this.getProvider(e).updateNamespace(
                null == (t = this.session) ? void 0 : t.namespaces[e]
              );
            });
          }
          setNamespaces(e) {
            let {
              namespaces: t = {},
              optionalNamespaces: i = {},
              sessionProperties: r,
              scopedProperties: s,
            } = e;
            (this.optionalNamespaces = lL(t, i)),
              (this.sessionProperties = r),
              (this.scopedProperties = s);
          }
          validateChain(e) {
            let [t, i] = (null == e ? void 0 : e.split(":")) || ["", ""];
            if (!this.namespaces || !Object.keys(this.namespaces).length)
              return [t, i];
            if (
              t &&
              !Object.keys(this.namespaces || {})
                .map((e) => nS(e))
                .includes(t)
            )
              throw Error(
                "Namespace '".concat(
                  t,
                  "' is not configured. Please call connect() first with namespace config."
                )
              );
            if (t && i) return [t, i];
            let r = nS(Object.keys(this.namespaces)[0]),
              s = this.rpcProviders[r].getDefaultChain();
            return [r, s];
          }
          async requestAccounts() {
            let [e] = this.validateChain();
            return await this.getProvider(e).requestAccounts();
          }
          async onChainChanged(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.namespaces) return;
            let [i, r] = this.validateChain(e);
            if (!r) return;
            this.updateNamespaceChain(i, r),
              this.events.emit("chainChanged", r);
            let s = this.getProvider(i).getDefaultChain();
            t || this.getProvider(i).setDefaultChain(r),
              this.emitAccountsChangedOnChainChange({
                namespace: i,
                previousChainId: s,
                newChainId: e,
              }),
              await this.persist("namespaces", this.namespaces);
          }
          emitAccountsChangedOnChainChange(e) {
            var t, i;
            let { namespace: r, previousChainId: s, newChainId: n } = e;
            try {
              if (s === n) return;
              let e =
                null ==
                (i = null == (t = this.session) ? void 0 : t.namespaces[r])
                  ? void 0
                  : i.accounts;
              if (!e) return;
              let o = e.filter((e) => e.includes("".concat(n, ":"))).map(lz);
              if (!nU(o)) return;
              this.events.emit("accountsChanged", o);
            } catch (e) {
              this.logger.warn(
                "Failed to emit accountsChanged on chain change",
                e
              );
            }
          }
          updateNamespaceChain(e, t) {
            if (!this.namespaces) return;
            let i = this.namespaces[e] ? e : "".concat(e, ":").concat(t);
            this.namespaces[i]
              ? this.namespaces[i] && (this.namespaces[i].defaultChain = t)
              : (this.namespaces[i] = {
                  chains: [],
                  methods: [],
                  events: [],
                  defaultChain: t,
                });
          }
          onConnect() {
            this.createProviders(),
              this.events.emit("connect", { session: this.session });
          }
          async cleanup() {
            (this.namespaces = void 0),
              (this.optionalNamespaces = void 0),
              (this.sessionProperties = void 0),
              await this.deleteFromStore("namespaces"),
              await this.deleteFromStore("optionalNamespaces"),
              await this.deleteFromStore("sessionProperties"),
              (this.session = void 0),
              await this.cleanupPendingPairings({ deletePairings: !0 }),
              await this.cleanupStorage();
          }
          async persist(e, t) {
            var i;
            let r = (null == (i = this.session) ? void 0 : i.topic) || "";
            await this.client.core.storage.setItem(
              "".concat(lc, "/").concat(e).concat(r),
              t
            );
          }
          async getFromStore(e) {
            var t;
            let i = (null == (t = this.session) ? void 0 : t.topic) || "";
            return await this.client.core.storage.getItem(
              "".concat(lc, "/").concat(e).concat(i)
            );
          }
          async deleteFromStore(e) {
            var t;
            let i = (null == (t = this.session) ? void 0 : t.topic) || "";
            await this.client.core.storage.removeItem(
              "".concat(lc, "/").concat(e).concat(i)
            );
          }
          async cleanupStorage() {
            var e;
            try {
              if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
                return;
              for (let e of await this.client.core.storage.getKeys())
                e.startsWith(lc) &&
                  (await this.client.core.storage.removeItem(e));
            } catch (e) {
              this.logger.warn("Failed to cleanup storage", e);
            }
          }
          constructor(e) {
            hU(this, "client"),
              hU(this, "namespaces"),
              hU(this, "optionalNamespaces"),
              hU(this, "sessionProperties"),
              hU(this, "scopedProperties"),
              hU(this, "events", new s.default()),
              hU(this, "rpcProviders", {}),
              hU(this, "session"),
              hU(this, "providerOpts"),
              hU(this, "logger"),
              hU(this, "uri"),
              hU(this, "disableProviderPing", !1),
              (this.providerOpts = e),
              (this.logger =
                "u" > typeof (null == e ? void 0 : e.logger) &&
                "string" != typeof (null == e ? void 0 : e.logger)
                  ? e.logger
                  : (0, c.pino)(
                      (0, a.getDefaultLoggerOptions)({
                        level: (null == e ? void 0 : e.logger) || la,
                      })
                    )),
              (this.disableProviderPing =
                (null == e ? void 0 : e.disableProviderPing) || !1);
          }
        }
        var hD = e.i(605726),
          hq = e.i(351667),
          hB = e.i(705258),
          hj = e.i(631867),
          hL = e.i(875073),
          hM = e.i(225335),
          hz = e.i(755111),
          hH = e.i(563493),
          hF = e.i(737460),
          hV = e.i(157653),
          hK = e.i(174797),
          hW = e.i(77217),
          hG = e.i(159055);
        let hJ = null,
          hY = {
            getSIWX: () => hF.OptionsController.state.siwx,
            async initializeIfEnabled() {
              let e = hF.OptionsController.state.siwx,
                t = hj.ChainController.getActiveCaipAddress();
              if (!(e && t)) return;
              let [i, r, s] = t.split(":");
              if (hj.ChainController.checkIfSupportedNetwork(i))
                try {
                  if (
                    (hJ && (await hJ),
                    (await e.getSessions("".concat(i, ":").concat(r), s))
                      .length)
                  )
                    return;
                  await hH.ModalController.open({ view: "SIWXSignMessage" });
                } catch (e) {
                  var n;
                  console.error("SIWXUtil:initializeIfEnabled", e),
                    hz.EventsController.sendEvent({
                      type: "track",
                      event: "SIWX_AUTH_ERROR",
                      properties: this.getSIWXEventProperties(),
                    }),
                    await (null == (n = hL.ConnectionController._getClient())
                      ? void 0
                      : n.disconnect().catch(console.error)),
                    hV.RouterController.reset("Connect"),
                    hK.SnackController.showError(
                      "A problem occurred while trying initialize authentication"
                    );
                }
            },
            async requestSignMessage() {
              let e = hF.OptionsController.state.siwx,
                t = hG.CoreHelperUtil.getPlainAddress(
                  hj.ChainController.getActiveCaipAddress()
                ),
                i = hj.ChainController.getActiveCaipNetwork(),
                r = hL.ConnectionController._getClient();
              if (!e) throw Error("SIWX is not enabled");
              if (!t) throw Error("No ActiveCaipAddress found");
              if (!i) throw Error("No ActiveCaipNetwork or client found");
              if (!r) throw Error("No ConnectionController client found");
              try {
                let s = await e.createMessage({
                    chainId: i.caipNetworkId,
                    accountAddress: t,
                  }),
                  n = s.toString();
                hM.ConnectorController.getConnectorId(i.chainNamespace) ===
                  hD.ConstantsUtil.CONNECTOR_ID.AUTH &&
                  hV.RouterController.pushTransactionStack({});
                let o = await r.signMessage(n);
                await e.addSession({ data: s, message: n, signature: o }),
                  hj.ChainController.setLastConnectedSIWECaipNetwork(i),
                  hH.ModalController.close(),
                  hz.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_SUCCESS",
                    properties: this.getSIWXEventProperties(),
                  });
              } catch (t) {
                let e = this.getSIWXEventProperties();
                (hH.ModalController.state.open &&
                  "ApproveTransaction" !== hV.RouterController.state.view) ||
                  (await hH.ModalController.open({ view: "SIWXSignMessage" })),
                  hK.SnackController.showError("Error signing message"),
                  hz.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: e,
                  }),
                  console.error("SWIXUtil:requestSignMessage", t);
              }
            },
            async cancelSignMessage() {
              try {
                var e;
                let t = this.getSIWX();
                if (
                  null == t || null == (e = t.getRequired) ? void 0 : e.call(t)
                ) {
                  let e = hj.ChainController.getLastConnectedSIWECaipNetwork();
                  if (e) {
                    let i = await (null == t
                      ? void 0
                      : t.getSessions(
                          null == e ? void 0 : e.caipNetworkId,
                          hG.CoreHelperUtil.getPlainAddress(
                            hj.ChainController.getActiveCaipAddress()
                          ) || ""
                        ));
                    i && i.length > 0
                      ? await hj.ChainController.switchActiveNetwork(e)
                      : await hL.ConnectionController.disconnect();
                  } else await hL.ConnectionController.disconnect();
                } else hH.ModalController.close();
                hH.ModalController.close(),
                  hz.EventsController.sendEvent({
                    event: "CLICK_CANCEL_SIWX",
                    type: "track",
                    properties: this.getSIWXEventProperties(),
                  });
              } catch (e) {
                console.error("SIWXUtil:cancelSignMessage", e);
              }
            },
            async getAllSessions() {
              let e = this.getSIWX(),
                t = hj.ChainController.getAllRequestedCaipNetworks(),
                i = [];
              return (
                await Promise.all(
                  t.map(async (t) => {
                    let r = await (null == e
                      ? void 0
                      : e.getSessions(
                          t.caipNetworkId,
                          hG.CoreHelperUtil.getPlainAddress(
                            hj.ChainController.getActiveCaipAddress()
                          ) || ""
                        ));
                    r && i.push(...r);
                  })
                ),
                i
              );
            },
            async getSessions(e) {
              let t = hF.OptionsController.state.siwx,
                i = null == e ? void 0 : e.address;
              if (!i) {
                let e = hj.ChainController.getActiveCaipAddress();
                i = hG.CoreHelperUtil.getPlainAddress(e);
              }
              let r = null == e ? void 0 : e.caipNetworkId;
              if (!r) {
                let e = hj.ChainController.getActiveCaipNetwork();
                r = null == e ? void 0 : e.caipNetworkId;
              }
              return t && i && r ? t.getSessions(r, i) : [];
            },
            async isSIWXCloseDisabled() {
              let e = this.getSIWX();
              if (e) {
                let i = "ApproveTransaction" === hV.RouterController.state.view,
                  r = "SIWXSignMessage" === hV.RouterController.state.view;
                if (i || r) {
                  var t;
                  return (
                    (null == (t = e.getRequired) ? void 0 : t.call(e)) &&
                    0 === (await this.getSessions()).length
                  );
                }
              }
              return !1;
            },
            async authConnectorAuthenticate(e) {
              var t;
              let {
                  authConnector: i,
                  chainId: r,
                  socialUri: s,
                  preferredAccountType: n,
                  chainNamespace: o,
                } = e,
                a = hY.getSIWX();
              if (!a || !o.includes(hD.ConstantsUtil.CHAIN.EVM)) {
                let e = await i.connect({
                  chainId: r,
                  socialUri: s,
                  preferredAccountType: n,
                });
                return {
                  address: e.address,
                  chainId: e.chainId,
                  accounts: e.accounts,
                };
              }
              let c = await a.createMessage({
                  chainId:
                    (null == (t = hj.ChainController.getActiveCaipNetwork())
                      ? void 0
                      : t.caipNetworkId) || "",
                  accountAddress: "<<AccountAddress>>",
                }),
                l = {
                  accountAddress: c.accountAddress,
                  chainId: c.chainId,
                  domain: c.domain,
                  uri: c.uri,
                  version: c.version,
                  nonce: c.nonce,
                  notBefore: c.notBefore,
                  statement: c.statement,
                  resources: c.resources,
                  requestId: c.requestId,
                  issuedAt: c.issuedAt,
                  expirationTime: c.expirationTime,
                  serializedMessage: c.toString(),
                },
                h = await i.connect({
                  chainId: r,
                  socialUri: s,
                  siwxMessage: l,
                  preferredAccountType: n,
                });
              if (
                ((l.accountAddress = h.address),
                (l.serializedMessage = h.message || ""),
                h.signature && h.message)
              ) {
                let e = hY.addEmbeddedWalletSession(l, h.message, h.signature);
                await e;
              }
              return {
                address: h.address,
                chainId: h.chainId,
                accounts: h.accounts,
              };
            },
            async addEmbeddedWalletSession(e, t, i) {
              if (hJ) return hJ;
              let r = hY.getSIWX();
              return r
                ? (hJ = r
                    .addSession({ data: e, message: t, signature: i })
                    .finally(() => {
                      hJ = null;
                    }))
                : Promise.resolve();
            },
            async universalProviderAuthenticate(e) {
              var t, i, r;
              let { universalProvider: s, chains: n, methods: o } = e,
                a = hY.getSIWX(),
                c = new Set(n.map((e) => e.split(":")[0]));
              if (!a || 1 !== c.size || !c.has("eip155")) return !1;
              let l = await a.createMessage({
                  chainId:
                    (null == (t = hj.ChainController.getActiveCaipNetwork())
                      ? void 0
                      : t.caipNetworkId) || "",
                  accountAddress: "",
                }),
                h = await s.authenticate({
                  nonce: l.nonce,
                  domain: l.domain,
                  uri: l.uri,
                  exp: l.expirationTime,
                  iat: l.issuedAt,
                  nbf: l.notBefore,
                  requestId: l.requestId,
                  version: l.version,
                  resources: l.resources,
                  statement: l.statement,
                  chainId: l.chainId,
                  methods: o,
                  chains: [l.chainId, ...n.filter((e) => e !== l.chainId)],
                });
              if (
                (hK.SnackController.showLoading("Authenticating...", {
                  autoClose: !1,
                }),
                hB.AccountController.setConnectedWalletInfo(
                  {
                    ...h.session.peer.metadata,
                    name: h.session.peer.metadata.name,
                    icon:
                      null == (i = h.session.peer.metadata.icons)
                        ? void 0
                        : i[0],
                    type: "WALLET_CONNECT",
                  },
                  Array.from(c)[0]
                ),
                null == h || null == (r = h.auths) ? void 0 : r.length)
              ) {
                let e = h.auths.map((e) => {
                  let t = s.client.formatAuthMessage({
                    request: e.p,
                    iss: e.p.iss,
                  });
                  return {
                    data: {
                      ...e.p,
                      accountAddress: e.p.iss.split(":").slice(-1).join(""),
                      chainId: e.p.iss.split(":").slice(2, 4).join(":"),
                      uri: e.p.aud,
                      version: e.p.version || l.version,
                      expirationTime: e.p.exp,
                      issuedAt: e.p.iat,
                      notBefore: e.p.nbf,
                    },
                    message: t,
                    signature: e.s.s,
                    cacao: e,
                  };
                });
                try {
                  await a.setSessions(e),
                    hz.EventsController.sendEvent({
                      type: "track",
                      event: "SIWX_AUTH_SUCCESS",
                      properties: hY.getSIWXEventProperties(),
                    });
                } catch (e) {
                  throw (
                    (console.error(
                      "SIWX:universalProviderAuth - failed to set sessions",
                      e
                    ),
                    hz.EventsController.sendEvent({
                      type: "track",
                      event: "SIWX_AUTH_ERROR",
                      properties: hY.getSIWXEventProperties(),
                    }),
                    await s.disconnect().catch(console.error),
                    e)
                  );
                } finally {
                  hK.SnackController.hide();
                }
              }
              return !0;
            },
            getSIWXEventProperties() {
              var e;
              let t = hj.ChainController.state.activeChain;
              if (!t)
                throw Error(
                  "SIWXUtil:getSIWXEventProperties - namespace is required"
                );
              return {
                network:
                  (null == (e = hj.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : e.caipNetworkId) || "",
                isSmartAccount:
                  (0, hW.getPreferredAccountType)(t) ===
                  hq.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
              };
            },
            async clearSessions() {
              let e = this.getSIWX();
              e && (await e.setSessions([]));
            },
          };
      },
      [969030],
    ],
  },
]);

//# sourceMappingURL=800fae88ce695798.js.map
