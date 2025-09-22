(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    180822: (t) => {
      "use strict";
      var { m: i, e: r } = t;
      (r.byteLength = function (t) {
        var i = u(t),
          r = i[0],
          e = i[1];
        return ((r + e) * 3) / 4 - e;
      }),
        (r.toByteArray = function (t) {
          var i,
            r,
            e = u(t),
            h = e[0],
            f = e[1],
            s = new o(((h + f) * 3) / 4 - f),
            a = 0,
            l = f > 0 ? h - 4 : h;
          for (r = 0; r < l; r += 4)
            (i =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (s[a++] = (i >> 16) & 255),
              (s[a++] = (i >> 8) & 255),
              (s[a++] = 255 & i);
          return (
            2 === f &&
              ((i = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (s[a++] = 255 & i)),
            1 === f &&
              ((i =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (s[a++] = (i >> 8) & 255),
              (s[a++] = 255 & i)),
            s
          );
        }),
        (r.fromByteArray = function (t) {
          for (
            var i, r = t.length, n = r % 3, o = [], h = 0, f = r - n;
            h < f;
            h += 16383
          )
            o.push(
              (function (t, i, r) {
                for (var n, o = [], h = i; h < r; h += 3)
                  (n =
                    ((t[h] << 16) & 0xff0000) +
                    ((t[h + 1] << 8) & 65280) +
                    (255 & t[h + 2])),
                    o.push(
                      e[(n >> 18) & 63] +
                        e[(n >> 12) & 63] +
                        e[(n >> 6) & 63] +
                        e[63 & n]
                    );
                return o.join("");
              })(t, h, h + 16383 > f ? f : h + 16383)
            );
          return (
            1 === n
              ? o.push(e[(i = t[r - 1]) >> 2] + e[(i << 4) & 63] + "==")
              : 2 === n &&
                o.push(
                  e[(i = (t[r - 2] << 8) + t[r - 1]) >> 10] +
                    e[(i >> 4) & 63] +
                    e[(i << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var e = [],
          n = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          h =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          f = 0,
          s = h.length;
        f < s;
        ++f
      )
        (e[f] = h[f]), (n[h.charCodeAt(f)] = f);
      function u(t) {
        var i = t.length;
        if (i % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = i);
        var e = r === i ? 0 : 4 - (r % 4);
        return [r, e];
      }
      (n[45] = 62), (n[95] = 63);
    },
    666802: (t) => {
      var { m: i, e: r } = t;
      (r.read = function (t, i, r, e, n) {
        var o,
          h,
          f = 8 * n - e - 1,
          s = (1 << f) - 1,
          u = s >> 1,
          a = -7,
          l = r ? n - 1 : 0,
          p = r ? -1 : 1,
          m = t[i + l];
        for (
          l += p, o = m & ((1 << -a) - 1), m >>= -a, a += f;
          a > 0;
          o = 256 * o + t[i + l], l += p, a -= 8
        );
        for (
          h = o & ((1 << -a) - 1), o >>= -a, a += e;
          a > 0;
          h = 256 * h + t[i + l], l += p, a -= 8
        );
        if (0 === o) o = 1 - u;
        else {
          if (o === s) return h ? NaN : (1 / 0) * (m ? -1 : 1);
          (h += Math.pow(2, e)), (o -= u);
        }
        return (m ? -1 : 1) * h * Math.pow(2, o - e);
      }),
        (r.write = function (t, i, r, e, n, o) {
          var h,
            f,
            s,
            u = 8 * o - n - 1,
            a = (1 << u) - 1,
            l = a >> 1,
            p = 5960464477539062e-23 * (23 === n),
            m = e ? 0 : o - 1,
            c = e ? 1 : -1,
            d = +(i < 0 || (0 === i && 1 / i < 0));
          for (
            isNaN((i = Math.abs(i))) || i === 1 / 0
              ? ((f = +!!isNaN(i)), (h = a))
              : ((h = Math.floor(Math.log(i) / Math.LN2)),
                i * (s = Math.pow(2, -h)) < 1 && (h--, (s *= 2)),
                h + l >= 1 ? (i += p / s) : (i += p * Math.pow(2, 1 - l)),
                i * s >= 2 && (h++, (s /= 2)),
                h + l >= a
                  ? ((f = 0), (h = a))
                  : h + l >= 1
                  ? ((f = (i * s - 1) * Math.pow(2, n)), (h += l))
                  : ((f = i * Math.pow(2, l - 1) * Math.pow(2, n)), (h = 0)));
            n >= 8;
            t[r + m] = 255 & f, m += c, f /= 256, n -= 8
          );
          for (
            h = (h << n) | f, u += n;
            u > 0;
            t[r + m] = 255 & h, m += c, h /= 256, u -= 8
          );
          t[r + m - c] |= 128 * d;
        });
    },
    523966: (t) => {
      "use strict";
      var { m: i, e: r } = t;
      {
        let i = t.r(180822),
          N = t.r(666802),
          C =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        function e(t) {
          if (t > 0x7fffffff)
            throw RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
          let i = new Uint8Array(t);
          return Object.setPrototypeOf(i, n.prototype), i;
        }
        function n(t, i, r) {
          if ("number" == typeof t) {
            if ("string" == typeof i)
              throw TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return f(t);
          }
          return o(t, i, r);
        }
        function o(t, i, r) {
          if ("string" == typeof t) {
            var o = t,
              h = i;
            if (
              (("string" != typeof h || "" === h) && (h = "utf8"),
              !n.isEncoding(h))
            )
              throw TypeError("Unknown encoding: " + h);
            let r = 0 | l(o, h),
              f = e(r),
              s = f.write(o, h);
            return s !== r && (f = f.slice(0, s)), f;
          }
          if (ArrayBuffer.isView(t)) {
            var f = t;
            if (L(f, Uint8Array)) {
              let t = new Uint8Array(f);
              return u(t.buffer, t.byteOffset, t.byteLength);
            }
            return s(f);
          }
          if (null == t)
            throw TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          if (
            L(t, ArrayBuffer) ||
            (t && L(t.buffer, ArrayBuffer)) ||
            ("undefined" != typeof SharedArrayBuffer &&
              (L(t, SharedArrayBuffer) ||
                (t && L(t.buffer, SharedArrayBuffer))))
          )
            return u(t, i, r);
          if ("number" == typeof t)
            throw TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          let p = t.valueOf && t.valueOf();
          if (null != p && p !== t) return n.from(p, i, r);
          let m = (function (t) {
            if (n.isBuffer(t)) {
              let i = 0 | a(t.length),
                r = e(i);
              return 0 === r.length || t.copy(r, 0, 0, i), r;
            }
            return void 0 !== t.length
              ? "number" != typeof t.length ||
                (function (t) {
                  return t != t;
                })(t.length)
                ? e(0)
                : s(t)
              : "Buffer" === t.type && Array.isArray(t.data)
              ? s(t.data)
              : void 0;
          })(t);
          if (m) return m;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof t[Symbol.toPrimitive]
          )
            return n.from(t[Symbol.toPrimitive]("string"), i, r);
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        }
        function h(t) {
          if ("number" != typeof t)
            throw TypeError('"size" argument must be of type number');
          if (t < 0)
            throw RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
        }
        function f(t) {
          return h(t), e(t < 0 ? 0 : 0 | a(t));
        }
        function s(t) {
          let i = t.length < 0 ? 0 : 0 | a(t.length),
            r = e(i);
          for (let e = 0; e < i; e += 1) r[e] = 255 & t[e];
          return r;
        }
        function u(t, i, r) {
          let e;
          if (i < 0 || t.byteLength < i)
            throw RangeError('"offset" is outside of buffer bounds');
          if (t.byteLength < i + (r || 0))
            throw RangeError('"length" is outside of buffer bounds');
          return (
            Object.setPrototypeOf(
              (e =
                void 0 === i && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, i)
                  : new Uint8Array(t, i, r)),
              n.prototype
            ),
            e
          );
        }
        function a(t) {
          if (t >= 0x7fffffff)
            throw RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
            );
          return 0 | t;
        }
        function l(t, i) {
          if (n.isBuffer(t)) return t.length;
          if (ArrayBuffer.isView(t) || L(t, ArrayBuffer)) return t.byteLength;
          if ("string" != typeof t)
            throw TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof t
            );
          let r = t.length,
            e = arguments.length > 2 && !0 === arguments[2];
          if (!e && 0 === r) return 0;
          let o = !1;
          for (;;)
            switch (i) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
                return R(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return S(t).length;
              default:
                if (o) return e ? -1 : R(t).length;
                (i = ("" + i).toLowerCase()), (o = !0);
            }
        }
        function p(t, r, e) {
          let n = !1;
          if (
            ((void 0 === r || r < 0) && (r = 0),
            r > this.length ||
              ((void 0 === e || e > this.length) && (e = this.length),
              e <= 0 || (e >>>= 0) <= (r >>>= 0)))
          )
            return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return (function (t, i, r) {
                  let e = t.length;
                  (!i || i < 0) && (i = 0), (!r || r < 0 || r > e) && (r = e);
                  let n = "";
                  for (let e = i; e < r; ++e) n += Z[t[e]];
                  return n;
                })(this, r, e);
              case "utf8":
              case "utf-8":
                return g(this, r, e);
              case "ascii":
                return (function (t, i, r) {
                  let e = "";
                  r = Math.min(t.length, r);
                  for (let n = i; n < r; ++n)
                    e += String.fromCharCode(127 & t[n]);
                  return e;
                })(this, r, e);
              case "latin1":
              case "binary":
                return (function (t, i, r) {
                  let e = "";
                  r = Math.min(t.length, r);
                  for (let n = i; n < r; ++n) e += String.fromCharCode(t[n]);
                  return e;
                })(this, r, e);
              case "base64":
                var o, h, f;
                return (
                  (o = this),
                  (h = r),
                  (f = e),
                  0 === h && f === o.length
                    ? i.fromByteArray(o)
                    : i.fromByteArray(o.slice(h, f))
                );
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (function (t, i, r) {
                  let e = t.slice(i, r),
                    n = "";
                  for (let t = 0; t < e.length - 1; t += 2)
                    n += String.fromCharCode(e[t] + 256 * e[t + 1]);
                  return n;
                })(this, r, e);
              default:
                if (n) throw TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (n = !0);
            }
        }
        function m(t, i, r) {
          let e = t[i];
          (t[i] = t[r]), (t[r] = e);
        }
        function c(t, i, r, e, o) {
          var h;
          if (0 === t.length) return -1;
          if (
            ("string" == typeof r
              ? ((e = r), (r = 0))
              : r > 0x7fffffff
              ? (r = 0x7fffffff)
              : r < -0x80000000 && (r = -0x80000000),
            (h = r *= 1) != h && (r = o ? 0 : t.length - 1),
            r < 0 && (r = t.length + r),
            r >= t.length)
          )
            if (o) return -1;
            else r = t.length - 1;
          else if (r < 0)
            if (!o) return -1;
            else r = 0;
          if (("string" == typeof i && (i = n.from(i, e)), n.isBuffer(i)))
            return 0 === i.length ? -1 : d(t, i, r, e, o);
          if ("number" == typeof i) {
            if (((i &= 255), "function" == typeof Uint8Array.prototype.indexOf))
              if (o) return Uint8Array.prototype.indexOf.call(t, i, r);
              else return Uint8Array.prototype.lastIndexOf.call(t, i, r);
            return d(t, [i], r, e, o);
          }
          throw TypeError("val must be string, number or Buffer");
        }
        function d(t, i, r, e, n) {
          let o,
            h = 1,
            f = t.length,
            s = i.length;
          if (
            void 0 !== e &&
            ("ucs2" === (e = String(e).toLowerCase()) ||
              "ucs-2" === e ||
              "utf16le" === e ||
              "utf-16le" === e)
          ) {
            if (t.length < 2 || i.length < 2) return -1;
            (h = 2), (f /= 2), (s /= 2), (r /= 2);
          }
          function u(t, i) {
            return 1 === h ? t[i] : t.readUInt16BE(i * h);
          }
          if (n) {
            let e = -1;
            for (o = r; o < f; o++)
              if (u(t, o) === u(i, -1 === e ? 0 : o - e)) {
                if ((-1 === e && (e = o), o - e + 1 === s)) return e * h;
              } else -1 !== e && (o -= o - e), (e = -1);
          } else
            for (r + s > f && (r = f - s), o = r; o >= 0; o--) {
              let r = !0;
              for (let e = 0; e < s; e++)
                if (u(t, o + e) !== u(i, e)) {
                  r = !1;
                  break;
                }
              if (r) return o;
            }
          return -1;
        }
        function g(t, i, r) {
          r = Math.min(t.length, r);
          let e = [],
            n = i;
          for (; n < r; ) {
            let i = t[n],
              o = null,
              h = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
            if (n + h <= r) {
              let r, e, f, s;
              switch (h) {
                case 1:
                  i < 128 && (o = i);
                  break;
                case 2:
                  (192 & (r = t[n + 1])) == 128 &&
                    (s = ((31 & i) << 6) | (63 & r)) > 127 &&
                    (o = s);
                  break;
                case 3:
                  (r = t[n + 1]),
                    (e = t[n + 2]),
                    (192 & r) == 128 &&
                      (192 & e) == 128 &&
                      (s = ((15 & i) << 12) | ((63 & r) << 6) | (63 & e)) >
                        2047 &&
                      (s < 55296 || s > 57343) &&
                      (o = s);
                  break;
                case 4:
                  (r = t[n + 1]),
                    (e = t[n + 2]),
                    (f = t[n + 3]),
                    (192 & r) == 128 &&
                      (192 & e) == 128 &&
                      (192 & f) == 128 &&
                      (s =
                        ((15 & i) << 18) |
                        ((63 & r) << 12) |
                        ((63 & e) << 6) |
                        (63 & f)) > 65535 &&
                      s < 1114112 &&
                      (o = s);
              }
            }
            null === o
              ? ((o = 65533), (h = 1))
              : o > 65535 &&
                ((o -= 65536),
                e.push(((o >>> 10) & 1023) | 55296),
                (o = 56320 | (1023 & o))),
              e.push(o),
              (n += h);
          }
          var o = e;
          let h = o.length;
          if (h <= 4096) return String.fromCharCode.apply(String, o);
          let f = "",
            s = 0;
          for (; s < h; )
            f += String.fromCharCode.apply(String, o.slice(s, (s += 4096)));
          return f;
        }
        function y(t, i, r) {
          if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
          if (t + i > r)
            throw RangeError("Trying to access beyond buffer length");
        }
        function v(t, i, r, e, o, h) {
          if (!n.isBuffer(t))
            throw TypeError('"buffer" argument must be a Buffer instance');
          if (i > o || i < h)
            throw RangeError('"value" argument is out of bounds');
          if (r + e > t.length) throw RangeError("Index out of range");
        }
        function M(t, i, r, e, n) {
          A(i, e, n, t, r, 7);
          let o = Number(i & BigInt(0xffffffff));
          (t[r++] = o),
            (o >>= 8),
            (t[r++] = o),
            (o >>= 8),
            (t[r++] = o),
            (o >>= 8),
            (t[r++] = o);
          let h = Number((i >> BigInt(32)) & BigInt(0xffffffff));
          return (
            (t[r++] = h),
            (h >>= 8),
            (t[r++] = h),
            (h >>= 8),
            (t[r++] = h),
            (h >>= 8),
            (t[r++] = h),
            r
          );
        }
        function w(t, i, r, e, n) {
          A(i, e, n, t, r, 7);
          let o = Number(i & BigInt(0xffffffff));
          (t[r + 7] = o),
            (o >>= 8),
            (t[r + 6] = o),
            (o >>= 8),
            (t[r + 5] = o),
            (o >>= 8),
            (t[r + 4] = o);
          let h = Number((i >> BigInt(32)) & BigInt(0xffffffff));
          return (
            (t[r + 3] = h),
            (h >>= 8),
            (t[r + 2] = h),
            (h >>= 8),
            (t[r + 1] = h),
            (h >>= 8),
            (t[r] = h),
            r + 8
          );
        }
        function b(t, i, r, e, n, o) {
          if (r + e > t.length || r < 0) throw RangeError("Index out of range");
        }
        function x(t, i, r, e, n) {
          return (
            (i *= 1),
            (r >>>= 0),
            n || b(t, i, r, 4, 34028234663852886e22, -34028234663852886e22),
            N.write(t, i, r, e, 23, 4),
            r + 4
          );
        }
        function B(t, i, r, e, n) {
          return (
            (i *= 1),
            (r >>>= 0),
            n || b(t, i, r, 8, 17976931348623157e292, -17976931348623157e292),
            N.write(t, i, r, e, 52, 8),
            r + 8
          );
        }
        (r.Buffer = n),
          (r.SlowBuffer = function (t) {
            return +t != t && (t = 0), n.alloc(+t);
          }),
          (r.INSPECT_MAX_BYTES = 50),
          (r.kMaxLength = 0x7fffffff),
          (n.TYPED_ARRAY_SUPPORT = (function () {
            try {
              let t = new Uint8Array(1),
                i = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(i, Uint8Array.prototype),
                Object.setPrototypeOf(t, i),
                42 === t.foo()
              );
            } catch (t) {
              return !1;
            }
          })()),
          n.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(n.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (n.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(n.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (n.isBuffer(this)) return this.byteOffset;
            },
          }),
          (n.poolSize = 8192),
          (n.from = function (t, i, r) {
            return o(t, i, r);
          }),
          Object.setPrototypeOf(n.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(n, Uint8Array),
          (n.alloc = function (t, i, r) {
            return (h(t), t <= 0)
              ? e(t)
              : void 0 !== i
              ? "string" == typeof r
                ? e(t).fill(i, r)
                : e(t).fill(i)
              : e(t);
          }),
          (n.allocUnsafe = function (t) {
            return f(t);
          }),
          (n.allocUnsafeSlow = function (t) {
            return f(t);
          }),
          (n.isBuffer = function (t) {
            return null != t && !0 === t._isBuffer && t !== n.prototype;
          }),
          (n.compare = function (t, i) {
            if (
              (L(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)),
              L(i, Uint8Array) && (i = n.from(i, i.offset, i.byteLength)),
              !n.isBuffer(t) || !n.isBuffer(i))
            )
              throw TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (t === i) return 0;
            let r = t.length,
              e = i.length;
            for (let n = 0, o = Math.min(r, e); n < o; ++n)
              if (t[n] !== i[n]) {
                (r = t[n]), (e = i[n]);
                break;
              }
            return r < e ? -1 : +(e < r);
          }),
          (n.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (n.concat = function (t, i) {
            let r;
            if (!Array.isArray(t))
              throw TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return n.alloc(0);
            if (void 0 === i)
              for (r = 0, i = 0; r < t.length; ++r) i += t[r].length;
            let e = n.allocUnsafe(i),
              o = 0;
            for (r = 0; r < t.length; ++r) {
              let i = t[r];
              if (L(i, Uint8Array))
                o + i.length > e.length
                  ? (n.isBuffer(i) || (i = n.from(i)), i.copy(e, o))
                  : Uint8Array.prototype.set.call(e, i, o);
              else if (n.isBuffer(i)) i.copy(e, o);
              else
                throw TypeError('"list" argument must be an Array of Buffers');
              o += i.length;
            }
            return e;
          }),
          (n.byteLength = l),
          (n.prototype._isBuffer = !0),
          (n.prototype.swap16 = function () {
            let t = this.length;
            if (t % 2 != 0)
              throw RangeError("Buffer size must be a multiple of 16-bits");
            for (let i = 0; i < t; i += 2) m(this, i, i + 1);
            return this;
          }),
          (n.prototype.swap32 = function () {
            let t = this.length;
            if (t % 4 != 0)
              throw RangeError("Buffer size must be a multiple of 32-bits");
            for (let i = 0; i < t; i += 4)
              m(this, i, i + 3), m(this, i + 1, i + 2);
            return this;
          }),
          (n.prototype.swap64 = function () {
            let t = this.length;
            if (t % 8 != 0)
              throw RangeError("Buffer size must be a multiple of 64-bits");
            for (let i = 0; i < t; i += 8)
              m(this, i, i + 7),
                m(this, i + 1, i + 6),
                m(this, i + 2, i + 5),
                m(this, i + 3, i + 4);
            return this;
          }),
          (n.prototype.toString = function () {
            let t = this.length;
            return 0 === t
              ? ""
              : 0 == arguments.length
              ? g(this, 0, t)
              : p.apply(this, arguments);
          }),
          (n.prototype.toLocaleString = n.prototype.toString),
          (n.prototype.equals = function (t) {
            if (!n.isBuffer(t)) throw TypeError("Argument must be a Buffer");
            return this === t || 0 === n.compare(this, t);
          }),
          (n.prototype.inspect = function () {
            let t = "",
              i = r.INSPECT_MAX_BYTES;
            return (
              (t = this.toString("hex", 0, i)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > i && (t += " ... "),
              "<Buffer " + t + ">"
            );
          }),
          C && (n.prototype[C] = n.prototype.inspect),
          (n.prototype.compare = function (t, i, r, e, o) {
            if (
              (L(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)),
              !n.isBuffer(t))
            )
              throw TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof t
              );
            if (
              (void 0 === i && (i = 0),
              void 0 === r && (r = t ? t.length : 0),
              void 0 === e && (e = 0),
              void 0 === o && (o = this.length),
              i < 0 || r > t.length || e < 0 || o > this.length)
            )
              throw RangeError("out of range index");
            if (e >= o && i >= r) return 0;
            if (e >= o) return -1;
            if (i >= r) return 1;
            if (((i >>>= 0), (r >>>= 0), (e >>>= 0), (o >>>= 0), this === t))
              return 0;
            let h = o - e,
              f = r - i,
              s = Math.min(h, f),
              u = this.slice(e, o),
              a = t.slice(i, r);
            for (let t = 0; t < s; ++t)
              if (u[t] !== a[t]) {
                (h = u[t]), (f = a[t]);
                break;
              }
            return h < f ? -1 : +(f < h);
          }),
          (n.prototype.includes = function (t, i, r) {
            return -1 !== this.indexOf(t, i, r);
          }),
          (n.prototype.indexOf = function (t, i, r) {
            return c(this, t, i, r, !0);
          }),
          (n.prototype.lastIndexOf = function (t, i, r) {
            return c(this, t, i, r, !1);
          }),
          (n.prototype.write = function (t, i, r, e) {
            var n, o, h, f, s, u, a, l;
            if (void 0 === i) (e = "utf8"), (r = this.length), (i = 0);
            else if (void 0 === r && "string" == typeof i)
              (e = i), (r = this.length), (i = 0);
            else if (isFinite(i))
              (i >>>= 0),
                isFinite(r)
                  ? ((r >>>= 0), void 0 === e && (e = "utf8"))
                  : ((e = r), (r = void 0));
            else
              throw Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            let p = this.length - i;
            if (
              ((void 0 === r || r > p) && (r = p),
              (t.length > 0 && (r < 0 || i < 0)) || i > this.length)
            )
              throw RangeError("Attempt to write outside buffer bounds");
            e || (e = "utf8");
            let m = !1;
            for (;;)
              switch (e) {
                case "hex":
                  return (function (t, i, r, e) {
                    let n;
                    r = Number(r) || 0;
                    let o = t.length - r;
                    e ? (e = Number(e)) > o && (e = o) : (e = o);
                    let h = i.length;
                    for (e > h / 2 && (e = h / 2), n = 0; n < e; ++n) {
                      var f;
                      let e = parseInt(i.substr(2 * n, 2), 16);
                      if ((f = e) != f) break;
                      t[r + n] = e;
                    }
                    return n;
                  })(this, t, i, r);
                case "utf8":
                case "utf-8":
                  return (n = i), (o = r), T(R(t, this.length - n), this, n, o);
                case "ascii":
                case "latin1":
                case "binary":
                  return (
                    (h = i),
                    (f = r),
                    T(
                      (function (t) {
                        let i = [];
                        for (let r = 0; r < t.length; ++r)
                          i.push(255 & t.charCodeAt(r));
                        return i;
                      })(t),
                      this,
                      h,
                      f
                    )
                  );
                case "base64":
                  return (s = i), (u = r), T(S(t), this, s, u);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (
                    (a = i),
                    (l = r),
                    T(
                      (function (t, i) {
                        let r,
                          e,
                          n = [];
                        for (let o = 0; o < t.length && !((i -= 2) < 0); ++o)
                          (e = (r = t.charCodeAt(o)) >> 8),
                            n.push(r % 256),
                            n.push(e);
                        return n;
                      })(t, this.length - a),
                      this,
                      a,
                      l
                    )
                  );
                default:
                  if (m) throw TypeError("Unknown encoding: " + e);
                  (e = ("" + e).toLowerCase()), (m = !0);
              }
          }),
          (n.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          }),
          (n.prototype.slice = function (t, i) {
            let r = this.length;
            (t = ~~t),
              (i = void 0 === i ? r : ~~i),
              t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              i < 0 ? (i += r) < 0 && (i = 0) : i > r && (i = r),
              i < t && (i = t);
            let e = this.subarray(t, i);
            return Object.setPrototypeOf(e, n.prototype), e;
          }),
          (n.prototype.readUintLE = n.prototype.readUIntLE =
            function (t, i, r) {
              (t >>>= 0), (i >>>= 0), r || y(t, i, this.length);
              let e = this[t],
                n = 1,
                o = 0;
              for (; ++o < i && (n *= 256); ) e += this[t + o] * n;
              return e;
            }),
          (n.prototype.readUintBE = n.prototype.readUIntBE =
            function (t, i, r) {
              (t >>>= 0), (i >>>= 0), r || y(t, i, this.length);
              let e = this[t + --i],
                n = 1;
              for (; i > 0 && (n *= 256); ) e += this[t + --i] * n;
              return e;
            }),
          (n.prototype.readUint8 = n.prototype.readUInt8 =
            function (t, i) {
              return (t >>>= 0), i || y(t, 1, this.length), this[t];
            }),
          (n.prototype.readUint16LE = n.prototype.readUInt16LE =
            function (t, i) {
              return (
                (t >>>= 0),
                i || y(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
          (n.prototype.readUint16BE = n.prototype.readUInt16BE =
            function (t, i) {
              return (
                (t >>>= 0),
                i || y(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
          (n.prototype.readUint32LE = n.prototype.readUInt32LE =
            function (t, i) {
              return (
                (t >>>= 0),
                i || y(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  0x1000000 * this[t + 3]
              );
            }),
          (n.prototype.readUint32BE = n.prototype.readUInt32BE =
            function (t, i) {
              return (
                (t >>>= 0),
                i || y(t, 4, this.length),
                0x1000000 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
          (n.prototype.readBigUInt64LE = k(function (t) {
            I((t >>>= 0), "offset");
            let i = this[t],
              r = this[t + 7];
            (void 0 === i || void 0 === r) && U(t, this.length - 8);
            let e =
                i + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t],
              n =
                this[++t] + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * r;
            return BigInt(e) + (BigInt(n) << BigInt(32));
          })),
          (n.prototype.readBigUInt64BE = k(function (t) {
            I((t >>>= 0), "offset");
            let i = this[t],
              r = this[t + 7];
            (void 0 === i || void 0 === r) && U(t, this.length - 8);
            let e =
                0x1000000 * i + 65536 * this[++t] + 256 * this[++t] + this[++t],
              n =
                0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
            return (BigInt(e) << BigInt(32)) + BigInt(n);
          })),
          (n.prototype.readIntLE = function (t, i, r) {
            (t >>>= 0), (i >>>= 0), r || y(t, i, this.length);
            let e = this[t],
              n = 1,
              o = 0;
            for (; ++o < i && (n *= 256); ) e += this[t + o] * n;
            return e >= (n *= 128) && (e -= Math.pow(2, 8 * i)), e;
          }),
          (n.prototype.readIntBE = function (t, i, r) {
            (t >>>= 0), (i >>>= 0), r || y(t, i, this.length);
            let e = i,
              n = 1,
              o = this[t + --e];
            for (; e > 0 && (n *= 256); ) o += this[t + --e] * n;
            return o >= (n *= 128) && (o -= Math.pow(2, 8 * i)), o;
          }),
          (n.prototype.readInt8 = function (t, i) {
            return ((t >>>= 0), i || y(t, 1, this.length), 128 & this[t])
              ? -((255 - this[t] + 1) * 1)
              : this[t];
          }),
          (n.prototype.readInt16LE = function (t, i) {
            (t >>>= 0), i || y(t, 2, this.length);
            let r = this[t] | (this[t + 1] << 8);
            return 32768 & r ? 0xffff0000 | r : r;
          }),
          (n.prototype.readInt16BE = function (t, i) {
            (t >>>= 0), i || y(t, 2, this.length);
            let r = this[t + 1] | (this[t] << 8);
            return 32768 & r ? 0xffff0000 | r : r;
          }),
          (n.prototype.readInt32LE = function (t, i) {
            return (
              (t >>>= 0),
              i || y(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (n.prototype.readInt32BE = function (t, i) {
            return (
              (t >>>= 0),
              i || y(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (n.prototype.readBigInt64LE = k(function (t) {
            I((t >>>= 0), "offset");
            let i = this[t],
              r = this[t + 7];
            return (
              (void 0 === i || void 0 === r) && U(t, this.length - 8),
              (BigInt(
                this[t + 4] +
                  256 * this[t + 5] +
                  65536 * this[t + 6] +
                  (r << 24)
              ) <<
                BigInt(32)) +
                BigInt(
                  i +
                    256 * this[++t] +
                    65536 * this[++t] +
                    0x1000000 * this[++t]
                )
            );
          })),
          (n.prototype.readBigInt64BE = k(function (t) {
            I((t >>>= 0), "offset");
            let i = this[t],
              r = this[t + 7];
            return (
              (void 0 === i || void 0 === r) && U(t, this.length - 8),
              (BigInt(
                (i << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
              ) <<
                BigInt(32)) +
                BigInt(
                  0x1000000 * this[++t] +
                    65536 * this[++t] +
                    256 * this[++t] +
                    r
                )
            );
          })),
          (n.prototype.readFloatLE = function (t, i) {
            return (
              (t >>>= 0), i || y(t, 4, this.length), N.read(this, t, !0, 23, 4)
            );
          }),
          (n.prototype.readFloatBE = function (t, i) {
            return (
              (t >>>= 0), i || y(t, 4, this.length), N.read(this, t, !1, 23, 4)
            );
          }),
          (n.prototype.readDoubleLE = function (t, i) {
            return (
              (t >>>= 0), i || y(t, 8, this.length), N.read(this, t, !0, 52, 8)
            );
          }),
          (n.prototype.readDoubleBE = function (t, i) {
            return (
              (t >>>= 0), i || y(t, 8, this.length), N.read(this, t, !1, 52, 8)
            );
          }),
          (n.prototype.writeUintLE = n.prototype.writeUIntLE =
            function (t, i, r, e) {
              if (((t *= 1), (i >>>= 0), (r >>>= 0), !e)) {
                let e = Math.pow(2, 8 * r) - 1;
                v(this, t, i, r, e, 0);
              }
              let n = 1,
                o = 0;
              for (this[i] = 255 & t; ++o < r && (n *= 256); )
                this[i + o] = (t / n) & 255;
              return i + r;
            }),
          (n.prototype.writeUintBE = n.prototype.writeUIntBE =
            function (t, i, r, e) {
              if (((t *= 1), (i >>>= 0), (r >>>= 0), !e)) {
                let e = Math.pow(2, 8 * r) - 1;
                v(this, t, i, r, e, 0);
              }
              let n = r - 1,
                o = 1;
              for (this[i + n] = 255 & t; --n >= 0 && (o *= 256); )
                this[i + n] = (t / o) & 255;
              return i + r;
            }),
          (n.prototype.writeUint8 = n.prototype.writeUInt8 =
            function (t, i, r) {
              return (
                (t *= 1),
                (i >>>= 0),
                r || v(this, t, i, 1, 255, 0),
                (this[i] = 255 & t),
                i + 1
              );
            }),
          (n.prototype.writeUint16LE = n.prototype.writeUInt16LE =
            function (t, i, r) {
              return (
                (t *= 1),
                (i >>>= 0),
                r || v(this, t, i, 2, 65535, 0),
                (this[i] = 255 & t),
                (this[i + 1] = t >>> 8),
                i + 2
              );
            }),
          (n.prototype.writeUint16BE = n.prototype.writeUInt16BE =
            function (t, i, r) {
              return (
                (t *= 1),
                (i >>>= 0),
                r || v(this, t, i, 2, 65535, 0),
                (this[i] = t >>> 8),
                (this[i + 1] = 255 & t),
                i + 2
              );
            }),
          (n.prototype.writeUint32LE = n.prototype.writeUInt32LE =
            function (t, i, r) {
              return (
                (t *= 1),
                (i >>>= 0),
                r || v(this, t, i, 4, 0xffffffff, 0),
                (this[i + 3] = t >>> 24),
                (this[i + 2] = t >>> 16),
                (this[i + 1] = t >>> 8),
                (this[i] = 255 & t),
                i + 4
              );
            }),
          (n.prototype.writeUint32BE = n.prototype.writeUInt32BE =
            function (t, i, r) {
              return (
                (t *= 1),
                (i >>>= 0),
                r || v(this, t, i, 4, 0xffffffff, 0),
                (this[i] = t >>> 24),
                (this[i + 1] = t >>> 16),
                (this[i + 2] = t >>> 8),
                (this[i + 3] = 255 & t),
                i + 4
              );
            }),
          (n.prototype.writeBigUInt64LE = k(function (t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return M(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (n.prototype.writeBigUInt64BE = k(function (t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return w(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (n.prototype.writeIntLE = function (t, i, r, e) {
            if (((t *= 1), (i >>>= 0), !e)) {
              let e = Math.pow(2, 8 * r - 1);
              v(this, t, i, r, e - 1, -e);
            }
            let n = 0,
              o = 1,
              h = 0;
            for (this[i] = 255 & t; ++n < r && (o *= 256); )
              t < 0 && 0 === h && 0 !== this[i + n - 1] && (h = 1),
                (this[i + n] = (((t / o) | 0) - h) & 255);
            return i + r;
          }),
          (n.prototype.writeIntBE = function (t, i, r, e) {
            if (((t *= 1), (i >>>= 0), !e)) {
              let e = Math.pow(2, 8 * r - 1);
              v(this, t, i, r, e - 1, -e);
            }
            let n = r - 1,
              o = 1,
              h = 0;
            for (this[i + n] = 255 & t; --n >= 0 && (o *= 256); )
              t < 0 && 0 === h && 0 !== this[i + n + 1] && (h = 1),
                (this[i + n] = (((t / o) | 0) - h) & 255);
            return i + r;
          }),
          (n.prototype.writeInt8 = function (t, i, r) {
            return (
              (t *= 1),
              (i >>>= 0),
              r || v(this, t, i, 1, 127, -128),
              t < 0 && (t = 255 + t + 1),
              (this[i] = 255 & t),
              i + 1
            );
          }),
          (n.prototype.writeInt16LE = function (t, i, r) {
            return (
              (t *= 1),
              (i >>>= 0),
              r || v(this, t, i, 2, 32767, -32768),
              (this[i] = 255 & t),
              (this[i + 1] = t >>> 8),
              i + 2
            );
          }),
          (n.prototype.writeInt16BE = function (t, i, r) {
            return (
              (t *= 1),
              (i >>>= 0),
              r || v(this, t, i, 2, 32767, -32768),
              (this[i] = t >>> 8),
              (this[i + 1] = 255 & t),
              i + 2
            );
          }),
          (n.prototype.writeInt32LE = function (t, i, r) {
            return (
              (t *= 1),
              (i >>>= 0),
              r || v(this, t, i, 4, 0x7fffffff, -0x80000000),
              (this[i] = 255 & t),
              (this[i + 1] = t >>> 8),
              (this[i + 2] = t >>> 16),
              (this[i + 3] = t >>> 24),
              i + 4
            );
          }),
          (n.prototype.writeInt32BE = function (t, i, r) {
            return (
              (t *= 1),
              (i >>>= 0),
              r || v(this, t, i, 4, 0x7fffffff, -0x80000000),
              t < 0 && (t = 0xffffffff + t + 1),
              (this[i] = t >>> 24),
              (this[i + 1] = t >>> 16),
              (this[i + 2] = t >>> 8),
              (this[i + 3] = 255 & t),
              i + 4
            );
          }),
          (n.prototype.writeBigInt64LE = k(function (t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return M(
              this,
              t,
              i,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (n.prototype.writeBigInt64BE = k(function (t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return w(
              this,
              t,
              i,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (n.prototype.writeFloatLE = function (t, i, r) {
            return x(this, t, i, !0, r);
          }),
          (n.prototype.writeFloatBE = function (t, i, r) {
            return x(this, t, i, !1, r);
          }),
          (n.prototype.writeDoubleLE = function (t, i, r) {
            return B(this, t, i, !0, r);
          }),
          (n.prototype.writeDoubleBE = function (t, i, r) {
            return B(this, t, i, !1, r);
          }),
          (n.prototype.copy = function (t, i, r, e) {
            if (!n.isBuffer(t)) throw TypeError("argument should be a Buffer");
            if (
              (r || (r = 0),
              e || 0 === e || (e = this.length),
              i >= t.length && (i = t.length),
              i || (i = 0),
              e > 0 && e < r && (e = r),
              e === r || 0 === t.length || 0 === this.length)
            )
              return 0;
            if (i < 0) throw RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
              throw RangeError("Index out of range");
            if (e < 0) throw RangeError("sourceEnd out of bounds");
            e > this.length && (e = this.length),
              t.length - i < e - r && (e = t.length - i + r);
            let o = e - r;
            return (
              this === t && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(i, r, e)
                : Uint8Array.prototype.set.call(t, this.subarray(r, e), i),
              o
            );
          }),
          (n.prototype.fill = function (t, i, r, e) {
            let o;
            if ("string" == typeof t) {
              if (
                ("string" == typeof i
                  ? ((e = i), (i = 0), (r = this.length))
                  : "string" == typeof r && ((e = r), (r = this.length)),
                void 0 !== e && "string" != typeof e)
              )
                throw TypeError("encoding must be a string");
              if ("string" == typeof e && !n.isEncoding(e))
                throw TypeError("Unknown encoding: " + e);
              if (1 === t.length) {
                let i = t.charCodeAt(0);
                (("utf8" === e && i < 128) || "latin1" === e) && (t = i);
              }
            } else
              "number" == typeof t
                ? (t &= 255)
                : "boolean" == typeof t && (t = Number(t));
            if (i < 0 || this.length < i || this.length < r)
              throw RangeError("Out of range index");
            if (r <= i) return this;
            if (
              ((i >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (o = i; o < r; ++o) this[o] = t;
            else {
              let h = n.isBuffer(t) ? t : n.from(t, e),
                f = h.length;
              if (0 === f)
                throw TypeError(
                  'The value "' + t + '" is invalid for argument "value"'
                );
              for (o = 0; o < r - i; ++o) this[o + i] = h[o % f];
            }
            return this;
          });
        let P = {};
        function _(t, i, r) {
          P[t] = class extends r {
            get code() {
              return t;
            }
            set code(t) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: t,
                writable: !0,
              });
            }
            toString() {
              return ""
                .concat(this.name, " [")
                .concat(t, "]: ")
                .concat(this.message);
            }
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: i.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = "".concat(this.name, " [").concat(t, "]")),
                this.stack,
                delete this.name;
            }
          };
        }
        function E(t) {
          let i = "",
            r = t.length,
            e = +("-" === t[0]);
          for (; r >= e + 4; r -= 3)
            i = "_".concat(t.slice(r - 3, r)).concat(i);
          return "".concat(t.slice(0, r)).concat(i);
        }
        function A(t, i, r, e, n, o) {
          if (t > r || t < i) {
            let e,
              n = "bigint" == typeof i ? "n" : "";
            throw (
              ((e =
                o > 3
                  ? 0 === i || i === BigInt(0)
                    ? ">= 0"
                        .concat(n, " and < 2")
                        .concat(n, " ** ")
                        .concat((o + 1) * 8)
                        .concat(n)
                    : ">= -(2"
                        .concat(n, " ** ")
                        .concat((o + 1) * 8 - 1)
                        .concat(n, ") and < 2 ** ") +
                      "".concat((o + 1) * 8 - 1).concat(n)
                  : ">= ".concat(i).concat(n, " and <= ").concat(r).concat(n)),
              new P.ERR_OUT_OF_RANGE("value", e, t))
            );
          }
          I(n, "offset"),
            (void 0 === e[n] || void 0 === e[n + o]) &&
              U(n, e.length - (o + 1));
        }
        function I(t, i) {
          if ("number" != typeof t)
            throw new P.ERR_INVALID_ARG_TYPE(i, "number", t);
        }
        function U(t, i, r) {
          if (Math.floor(t) !== t)
            throw (
              (I(t, r), new P.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
            );
          if (i < 0) throw new P.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new P.ERR_OUT_OF_RANGE(
            r || "offset",
            ">= ".concat(+!!r, " and <= ").concat(i),
            t
          );
        }
        _(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (t) {
            return t
              ? "".concat(t, " is outside of buffer bounds")
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          _(
            "ERR_INVALID_ARG_TYPE",
            function (t, i) {
              return 'The "'
                .concat(t, '" argument must be of type number. Received type ')
                .concat(typeof i);
            },
            TypeError
          ),
          _(
            "ERR_OUT_OF_RANGE",
            function (t, i, r) {
              let e = 'The value of "'.concat(t, '" is out of range.'),
                n = r;
              return (
                Number.isInteger(r) && Math.abs(r) > 0x100000000
                  ? (n = E(String(r)))
                  : "bigint" == typeof r &&
                    ((n = String(r)),
                    (r > BigInt(2) ** BigInt(32) ||
                      r < -(BigInt(2) ** BigInt(32))) &&
                      (n = E(n)),
                    (n += "n")),
                (e += " It must be ".concat(i, ". Received ").concat(n))
              );
            },
            RangeError
          );
        let q = /[^+/0-9A-Za-z-_]/g;
        function R(t, i) {
          let r;
          i = i || 1 / 0;
          let e = t.length,
            n = null,
            o = [];
          for (let h = 0; h < e; ++h) {
            if ((r = t.charCodeAt(h)) > 55295 && r < 57344) {
              if (!n) {
                if (r > 56319 || h + 1 === e) {
                  (i -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                n = r;
                continue;
              }
              if (r < 56320) {
                (i -= 3) > -1 && o.push(239, 191, 189), (n = r);
                continue;
              }
              r = (((n - 55296) << 10) | (r - 56320)) + 65536;
            } else n && (i -= 3) > -1 && o.push(239, 191, 189);
            if (((n = null), r < 128)) {
              if ((i -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((i -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((i -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else if (r < 1114112) {
              if ((i -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            } else throw Error("Invalid code point");
          }
          return o;
        }
        function S(t) {
          return i.toByteArray(
            (function (t) {
              if ((t = (t = t.split("=")[0]).trim().replace(q, "")).length < 2)
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function T(t, i, r, e) {
          let n;
          for (n = 0; n < e && !(n + r >= i.length) && !(n >= t.length); ++n)
            i[n + r] = t[n];
          return n;
        }
        function L(t, i) {
          return (
            t instanceof i ||
            (null != t &&
              null != t.constructor &&
              null != t.constructor.name &&
              t.constructor.name === i.name)
          );
        }
        let Z = (function () {
          let t = "0123456789abcdef",
            i = Array(256);
          for (let r = 0; r < 16; ++r) {
            let e = 16 * r;
            for (let n = 0; n < 16; ++n) i[e + n] = t[r] + t[n];
          }
          return i;
        })();
        function k(t) {
          return "undefined" == typeof BigInt ? O : t;
        }
        function O() {
          throw Error("BigInt not supported");
        }
      }
    },
    433767: (t) => {
      var { m: i, e: r } = t;
      !(function (t, i) {
        "use strict";
        function r(t, i) {
          if (!t) throw Error(i || "Assertion failed");
        }
        function e(t, i) {
          t.super_ = i;
          var r = function () {};
          (r.prototype = i.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function n(t, i, r) {
          if (n.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === i || "be" === i) && ((r = i), (i = 10)),
              this._init(t || 0, i || 10, r || "be"));
        }
        (t.exports = n), (n.BN = n), (n.wordSize = 26);
        try {
          a =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : void 0;
        } catch (t) {}
        function o(t, i) {
          var e = t.charCodeAt(i);
          return e >= 48 && e <= 57
            ? e - 48
            : e >= 65 && e <= 70
            ? e - 55
            : e >= 97 && e <= 102
            ? e - 87
            : void r(!1, "Invalid character in " + t);
        }
        function h(t, i, r) {
          var e = o(t, r);
          return r - 1 >= i && (e |= o(t, r - 1) << 4), e;
        }
        function f(t, i, e, n) {
          for (var o = 0, h = 0, f = Math.min(t.length, e), s = i; s < f; s++) {
            var u = t.charCodeAt(s) - 48;
            (o *= n),
              (h = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
              r(u >= 0 && h < n, "Invalid character"),
              (o += h);
          }
          return o;
        }
        function s(t, i) {
          (t.words = i.words),
            (t.length = i.length),
            (t.negative = i.negative),
            (t.red = i.red);
        }
        if (
          ((n.isBN = function (t) {
            return (
              t instanceof n ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === n.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (n.max = function (t, i) {
            return t.cmp(i) > 0 ? t : i;
          }),
          (n.min = function (t, i) {
            return 0 > t.cmp(i) ? t : i;
          }),
          (n.prototype._init = function (t, i, e) {
            if ("number" == typeof t) return this._initNumber(t, i, e);
            if ("object" == typeof t) return this._initArray(t, i, e);
            "hex" === i && (i = 16), r(i === (0 | i) && i >= 2 && i <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === i
                  ? this._parseHex(t, n, e)
                  : (this._parseBase(t, i, n),
                    "le" === e && this._initArray(this.toArray(), i, e)));
          }),
          (n.prototype._initNumber = function (t, i, e) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 0x4000000
                ? ((this.words = [0x3ffffff & t]), (this.length = 1))
                : t < 0x10000000000000
                ? ((this.words = [0x3ffffff & t, (t / 0x4000000) & 0x3ffffff]),
                  (this.length = 2))
                : (r(t < 0x20000000000000),
                  (this.words = [
                    0x3ffffff & t,
                    (t / 0x4000000) & 0x3ffffff,
                    1,
                  ]),
                  (this.length = 3)),
              "le" === e && this._initArray(this.toArray(), i, e);
          }),
          (n.prototype._initArray = function (t, i, e) {
            if ((r("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var n, o, h = 0; h < this.length; h++) this.words[h] = 0;
            var f = 0;
            if ("be" === e)
              for (h = t.length - 1, n = 0; h >= 0; h -= 3)
                (o = t[h] | (t[h - 1] << 8) | (t[h - 2] << 16)),
                  (this.words[n] |= (o << f) & 0x3ffffff),
                  (this.words[n + 1] = (o >>> (26 - f)) & 0x3ffffff),
                  (f += 24) >= 26 && ((f -= 26), n++);
            else if ("le" === e)
              for (h = 0, n = 0; h < t.length; h += 3)
                (o = t[h] | (t[h + 1] << 8) | (t[h + 2] << 16)),
                  (this.words[n] |= (o << f) & 0x3ffffff),
                  (this.words[n + 1] = (o >>> (26 - f)) & 0x3ffffff),
                  (f += 24) >= 26 && ((f -= 26), n++);
            return this._strip();
          }),
          (n.prototype._parseHex = function (t, i, r) {
            (this.length = Math.ceil((t.length - i) / 6)),
              (this.words = Array(this.length));
            for (var e, n = 0; n < this.length; n++) this.words[n] = 0;
            var o = 0,
              f = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= i; n -= 2)
                (e = h(t, i, n) << o),
                  (this.words[f] |= 0x3ffffff & e),
                  o >= 18
                    ? ((o -= 18), (f += 1), (this.words[f] |= e >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - i) % 2 == 0 ? i + 1 : i;
                n < t.length;
                n += 2
              )
                (e = h(t, i, n) << o),
                  (this.words[f] |= 0x3ffffff & e),
                  o >= 18
                    ? ((o -= 18), (f += 1), (this.words[f] |= e >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (n.prototype._parseBase = function (t, i, r) {
            (this.words = [0]), (this.length = 1);
            for (var e = 0, n = 1; n <= 0x3ffffff; n *= i) e++;
            e--, (n = (n / i) | 0);
            for (
              var o = t.length - r,
                h = o % e,
                s = Math.min(o, o - h) + r,
                u = 0,
                a = r;
              a < s;
              a += e
            )
              (u = f(t, a, a + e, i)),
                this.imuln(n),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== h) {
              var l = 1;
              for (u = f(t, a, t.length, i), a = 0; a < h; a++) l *= i;
              this.imuln(l),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this._strip();
          }),
          (n.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (n.prototype._move = function (t) {
            s(t, this);
          }),
          (n.prototype.clone = function () {
            var t = new n(null);
            return this.copy(t), t;
          }),
          (n.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (n.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (n.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            n.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
          } catch (t) {
            n.prototype.inspect = u;
          }
        else n.prototype.inspect = u;
        function u() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var a,
          l = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          p = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          m = [
            0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400,
            0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000,
            0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40,
            0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
            0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f,
            0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400,
          ];
        function c(t, i, r) {
          r.negative = i.negative ^ t.negative;
          var e = (t.length + i.length) | 0;
          (r.length = e), (e = (e - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | i.words[0],
            h = n * o,
            f = 0x3ffffff & h,
            s = (h / 0x4000000) | 0;
          r.words[0] = f;
          for (var u = 1; u < e; u++) {
            for (
              var a = s >>> 26,
                l = 0x3ffffff & s,
                p = Math.min(u, i.length - 1),
                m = Math.max(0, u - t.length + 1);
              m <= p;
              m++
            ) {
              var c = (u - m) | 0;
              (a +=
                ((h = (n = 0 | t.words[c]) * (o = 0 | i.words[m]) + l) /
                  0x4000000) |
                0),
                (l = 0x3ffffff & h);
            }
            (r.words[u] = 0 | l), (s = 0 | a);
          }
          return 0 !== s ? (r.words[u] = 0 | s) : r.length--, r._strip();
        }
        (n.prototype.toString = function (t, i) {
          if (((i = 0 | i || 1), 16 === (t = t || 10) || "hex" === t)) {
            for (var e = "", n = 0, o = 0, h = 0; h < this.length; h++) {
              var f = this.words[h],
                s = (((f << n) | o) & 0xffffff).toString(16);
              (o = (f >>> (24 - n)) & 0xffffff),
                (n += 2) >= 26 && ((n -= 26), h--),
                (e =
                  0 !== o || h !== this.length - 1
                    ? l[6 - s.length] + s + e
                    : s + e);
            }
            for (0 !== o && (e = o.toString(16) + e); e.length % i != 0; )
              e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var u = p[t],
              a = m[t];
            e = "";
            var c = this.clone();
            for (c.negative = 0; !c.isZero(); ) {
              var d = c.modrn(a).toString(t);
              e = (c = c.idivn(a)).isZero() ? d + e : l[u - d.length] + d + e;
            }
            for (this.isZero() && (e = "0" + e); e.length % i != 0; )
              e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e;
          }
          r(!1, "Base should be between 2 and 36");
        }),
          (n.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 0x4000000 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 0x10000000000000 + 0x4000000 * this.words[1])
                : this.length > 2 &&
                  r(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (n.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (n.prototype.toBuffer = function (t, i) {
              return this.toArrayLike(a, t, i);
            }),
          (n.prototype.toArray = function (t, i) {
            return this.toArrayLike(Array, t, i);
          }),
          (n.prototype.toArrayLike = function (t, i, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            r(n <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0");
            var h = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === i ? "LE" : "BE")](h, n), h;
          }),
          (n.prototype._toArrayLikeLE = function (t, i) {
            for (var r = 0, e = 0, n = 0, o = 0; n < this.length; n++) {
              var h = (this.words[n] << o) | e;
              (t[r++] = 255 & h),
                r < t.length && (t[r++] = (h >> 8) & 255),
                r < t.length && (t[r++] = (h >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (h >> 24) & 255),
                    (e = 0),
                    (o = 0))
                  : ((e = h >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = e; r < t.length; ) t[r++] = 0;
          }),
          (n.prototype._toArrayLikeBE = function (t, i) {
            for (
              var r = t.length - 1, e = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var h = (this.words[n] << o) | e;
              (t[r--] = 255 & h),
                r >= 0 && (t[r--] = (h >> 8) & 255),
                r >= 0 && (t[r--] = (h >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (h >> 24) & 255), (e = 0), (o = 0))
                  : ((e = h >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = e; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (n.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (n.prototype._countBits = function (t) {
                var i = t,
                  r = 0;
                return (
                  i >= 4096 && ((r += 13), (i >>>= 13)),
                  i >= 64 && ((r += 7), (i >>>= 7)),
                  i >= 8 && ((r += 4), (i >>>= 4)),
                  i >= 2 && ((r += 2), (i >>>= 2)),
                  r + i
                );
              }),
          (n.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var i = t,
              r = 0;
            return (
              (8191 & i) == 0 && ((r += 13), (i >>>= 13)),
              (127 & i) == 0 && ((r += 7), (i >>>= 7)),
              (15 & i) == 0 && ((r += 4), (i >>>= 4)),
              (3 & i) == 0 && ((r += 2), (i >>>= 2)),
              (1 & i) == 0 && r++,
              r
            );
          }),
          (n.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              i = this._countBits(t);
            return (this.length - 1) * 26 + i;
          }),
          (n.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, i = 0; i < this.length; i++) {
              var r = this._zeroBits(this.words[i]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (n.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (n.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (n.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (n.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (n.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (n.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (n.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var i = 0; i < t.length; i++)
              this.words[i] = this.words[i] | t.words[i];
            return this._strip();
          }),
          (n.prototype.ior = function (t) {
            return r((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (n.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (n.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (n.prototype.iuand = function (t) {
            var i;
            i = this.length > t.length ? t : this;
            for (var r = 0; r < i.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = i.length), this._strip();
          }),
          (n.prototype.iand = function (t) {
            return r((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (n.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (n.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (n.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((i = this), (r = t))
              : ((i = t), (r = this));
            for (var i, r, e = 0; e < r.length; e++)
              this.words[e] = i.words[e] ^ r.words[e];
            if (this !== i)
              for (; e < i.length; e++) this.words[e] = i.words[e];
            return (this.length = i.length), this._strip();
          }),
          (n.prototype.ixor = function (t) {
            return r((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (n.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (n.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (n.prototype.inotn = function (t) {
            r("number" == typeof t && t >= 0);
            var i = 0 | Math.ceil(t / 26),
              e = t % 26;
            this._expand(i), e > 0 && i--;
            for (var n = 0; n < i; n++)
              this.words[n] = 0x3ffffff & ~this.words[n];
            return (
              e > 0 &&
                (this.words[n] = ~this.words[n] & (0x3ffffff >> (26 - e))),
              this._strip()
            );
          }),
          (n.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (n.prototype.setn = function (t, i) {
            r("number" == typeof t && t >= 0);
            var e = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(e + 1),
              i
                ? (this.words[e] = this.words[e] | (1 << n))
                : (this.words[e] = this.words[e] & ~(1 << n)),
              this._strip()
            );
          }),
          (n.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (i = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (i = this.isub(t)),
                (t.negative = 1),
                i._normSign()
              );
            this.length > t.length
              ? ((r = this), (e = t))
              : ((r = t), (e = this));
            for (var i, r, e, n = 0, o = 0; o < e.length; o++)
              (i = (0 | r.words[o]) + (0 | e.words[o]) + n),
                (this.words[o] = 0x3ffffff & i),
                (n = i >>> 26);
            for (; 0 !== n && o < r.length; o++)
              (i = (0 | r.words[o]) + n),
                (this.words[o] = 0x3ffffff & i),
                (n = i >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (n.prototype.add = function (t) {
            var i;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (i = this.sub(t)), (t.negative ^= 1), i)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (i = t.sub(this)), (this.negative = 1), i)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (n.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var i,
                r,
                e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
            for (var o = 0, h = 0; h < r.length; h++)
              (o = (e = (0 | i.words[h]) - (0 | r.words[h]) + o) >> 26),
                (this.words[h] = 0x3ffffff & e);
            for (; 0 !== o && h < i.length; h++)
              (o = (e = (0 | i.words[h]) + o) >> 26),
                (this.words[h] = 0x3ffffff & e);
            if (0 === o && h < i.length && i !== this)
              for (; h < i.length; h++) this.words[h] = i.words[h];
            return (
              (this.length = Math.max(this.length, h)),
              i !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (n.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var d = function (t, i, r) {
          var e,
            n,
            o,
            h = t.words,
            f = i.words,
            s = r.words,
            u = 0,
            a = 0 | h[0],
            l = 8191 & a,
            p = a >>> 13,
            m = 0 | h[1],
            c = 8191 & m,
            d = m >>> 13,
            g = 0 | h[2],
            y = 8191 & g,
            v = g >>> 13,
            M = 0 | h[3],
            w = 8191 & M,
            b = M >>> 13,
            x = 0 | h[4],
            B = 8191 & x,
            _ = x >>> 13,
            E = 0 | h[5],
            A = 8191 & E,
            I = E >>> 13,
            U = 0 | h[6],
            R = 8191 & U,
            S = U >>> 13,
            T = 0 | h[7],
            L = 8191 & T,
            k = T >>> 13,
            O = 0 | h[8],
            N = 8191 & O,
            C = O >>> 13,
            P = 0 | h[9],
            q = 8191 & P,
            Z = P >>> 13,
            j = 0 | f[0],
            z = 8191 & j,
            F = j >>> 13,
            D = 0 | f[1],
            Y = 8191 & D,
            G = D >>> 13,
            K = 0 | f[2],
            V = 8191 & K,
            H = K >>> 13,
            J = 0 | f[3],
            W = 8191 & J,
            X = J >>> 13,
            Q = 0 | f[4],
            $ = 8191 & Q,
            tt = Q >>> 13,
            ti = 0 | f[5],
            tr = 8191 & ti,
            te = ti >>> 13,
            tn = 0 | f[6],
            to = 8191 & tn,
            th = tn >>> 13,
            tf = 0 | f[7],
            ts = 8191 & tf,
            tu = tf >>> 13,
            ta = 0 | f[8],
            tl = 8191 & ta,
            tp = ta >>> 13,
            tm = 0 | f[9],
            tc = 8191 & tm,
            td = tm >>> 13;
          (r.negative = t.negative ^ i.negative),
            (r.length = 19),
            (e = Math.imul(l, z));
          var tg =
            (((u + e) | 0) +
              ((8191 & (n = ((n = Math.imul(l, F)) + Math.imul(p, z)) | 0)) <<
                13)) |
            0;
          (u = ((((o = Math.imul(p, F)) + (n >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 0x3ffffff),
            (e = Math.imul(c, z)),
            (n = ((n = Math.imul(c, F)) + Math.imul(d, z)) | 0),
            (o = Math.imul(d, F)),
            (e = (e + Math.imul(l, Y)) | 0);
          var ty =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, G)) | 0) + Math.imul(p, Y)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, G)) | 0) + (n >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 0x3ffffff),
            (e = Math.imul(y, z)),
            (n = ((n = Math.imul(y, F)) + Math.imul(v, z)) | 0),
            (o = Math.imul(v, F)),
            (e = (e + Math.imul(c, Y)) | 0),
            (n = ((n = (n + Math.imul(c, G)) | 0) + Math.imul(d, Y)) | 0),
            (o = (o + Math.imul(d, G)) | 0),
            (e = (e + Math.imul(l, V)) | 0);
          var tv =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, H)) | 0) + Math.imul(p, V)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, H)) | 0) + (n >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 0x3ffffff),
            (e = Math.imul(w, z)),
            (n = ((n = Math.imul(w, F)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, F)),
            (e = (e + Math.imul(y, Y)) | 0),
            (n = ((n = (n + Math.imul(y, G)) | 0) + Math.imul(v, Y)) | 0),
            (o = (o + Math.imul(v, G)) | 0),
            (e = (e + Math.imul(c, V)) | 0),
            (n = ((n = (n + Math.imul(c, H)) | 0) + Math.imul(d, V)) | 0),
            (o = (o + Math.imul(d, H)) | 0),
            (e = (e + Math.imul(l, W)) | 0);
          var tM =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, X)) | 0) + Math.imul(p, W)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, X)) | 0) + (n >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 0x3ffffff),
            (e = Math.imul(B, z)),
            (n = ((n = Math.imul(B, F)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, F)),
            (e = (e + Math.imul(w, Y)) | 0),
            (n = ((n = (n + Math.imul(w, G)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, G)) | 0),
            (e = (e + Math.imul(y, V)) | 0),
            (n = ((n = (n + Math.imul(y, H)) | 0) + Math.imul(v, V)) | 0),
            (o = (o + Math.imul(v, H)) | 0),
            (e = (e + Math.imul(c, W)) | 0),
            (n = ((n = (n + Math.imul(c, X)) | 0) + Math.imul(d, W)) | 0),
            (o = (o + Math.imul(d, X)) | 0),
            (e = (e + Math.imul(l, $)) | 0);
          var tw =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(p, $)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, tt)) | 0) + (n >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 0x3ffffff),
            (e = Math.imul(A, z)),
            (n = ((n = Math.imul(A, F)) + Math.imul(I, z)) | 0),
            (o = Math.imul(I, F)),
            (e = (e + Math.imul(B, Y)) | 0),
            (n = ((n = (n + Math.imul(B, G)) | 0) + Math.imul(_, Y)) | 0),
            (o = (o + Math.imul(_, G)) | 0),
            (e = (e + Math.imul(w, V)) | 0),
            (n = ((n = (n + Math.imul(w, H)) | 0) + Math.imul(b, V)) | 0),
            (o = (o + Math.imul(b, H)) | 0),
            (e = (e + Math.imul(y, W)) | 0),
            (n = ((n = (n + Math.imul(y, X)) | 0) + Math.imul(v, W)) | 0),
            (o = (o + Math.imul(v, X)) | 0),
            (e = (e + Math.imul(c, $)) | 0),
            (n = ((n = (n + Math.imul(c, tt)) | 0) + Math.imul(d, $)) | 0),
            (o = (o + Math.imul(d, tt)) | 0),
            (e = (e + Math.imul(l, tr)) | 0);
          var tb =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, te)) | 0) + Math.imul(p, tr)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, te)) | 0) + (n >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 0x3ffffff),
            (e = Math.imul(R, z)),
            (n = ((n = Math.imul(R, F)) + Math.imul(S, z)) | 0),
            (o = Math.imul(S, F)),
            (e = (e + Math.imul(A, Y)) | 0),
            (n = ((n = (n + Math.imul(A, G)) | 0) + Math.imul(I, Y)) | 0),
            (o = (o + Math.imul(I, G)) | 0),
            (e = (e + Math.imul(B, V)) | 0),
            (n = ((n = (n + Math.imul(B, H)) | 0) + Math.imul(_, V)) | 0),
            (o = (o + Math.imul(_, H)) | 0),
            (e = (e + Math.imul(w, W)) | 0),
            (n = ((n = (n + Math.imul(w, X)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, X)) | 0),
            (e = (e + Math.imul(y, $)) | 0),
            (n = ((n = (n + Math.imul(y, tt)) | 0) + Math.imul(v, $)) | 0),
            (o = (o + Math.imul(v, tt)) | 0),
            (e = (e + Math.imul(c, tr)) | 0),
            (n = ((n = (n + Math.imul(c, te)) | 0) + Math.imul(d, tr)) | 0),
            (o = (o + Math.imul(d, te)) | 0),
            (e = (e + Math.imul(l, to)) | 0);
          var tx =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, th)) | 0) + Math.imul(p, to)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, th)) | 0) + (n >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 0x3ffffff),
            (e = Math.imul(L, z)),
            (n = ((n = Math.imul(L, F)) + Math.imul(k, z)) | 0),
            (o = Math.imul(k, F)),
            (e = (e + Math.imul(R, Y)) | 0),
            (n = ((n = (n + Math.imul(R, G)) | 0) + Math.imul(S, Y)) | 0),
            (o = (o + Math.imul(S, G)) | 0),
            (e = (e + Math.imul(A, V)) | 0),
            (n = ((n = (n + Math.imul(A, H)) | 0) + Math.imul(I, V)) | 0),
            (o = (o + Math.imul(I, H)) | 0),
            (e = (e + Math.imul(B, W)) | 0),
            (n = ((n = (n + Math.imul(B, X)) | 0) + Math.imul(_, W)) | 0),
            (o = (o + Math.imul(_, X)) | 0),
            (e = (e + Math.imul(w, $)) | 0),
            (n = ((n = (n + Math.imul(w, tt)) | 0) + Math.imul(b, $)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (e = (e + Math.imul(y, tr)) | 0),
            (n = ((n = (n + Math.imul(y, te)) | 0) + Math.imul(v, tr)) | 0),
            (o = (o + Math.imul(v, te)) | 0),
            (e = (e + Math.imul(c, to)) | 0),
            (n = ((n = (n + Math.imul(c, th)) | 0) + Math.imul(d, to)) | 0),
            (o = (o + Math.imul(d, th)) | 0),
            (e = (e + Math.imul(l, ts)) | 0);
          var tB =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tu)) | 0) + Math.imul(p, ts)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, tu)) | 0) + (n >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 0x3ffffff),
            (e = Math.imul(N, z)),
            (n = ((n = Math.imul(N, F)) + Math.imul(C, z)) | 0),
            (o = Math.imul(C, F)),
            (e = (e + Math.imul(L, Y)) | 0),
            (n = ((n = (n + Math.imul(L, G)) | 0) + Math.imul(k, Y)) | 0),
            (o = (o + Math.imul(k, G)) | 0),
            (e = (e + Math.imul(R, V)) | 0),
            (n = ((n = (n + Math.imul(R, H)) | 0) + Math.imul(S, V)) | 0),
            (o = (o + Math.imul(S, H)) | 0),
            (e = (e + Math.imul(A, W)) | 0),
            (n = ((n = (n + Math.imul(A, X)) | 0) + Math.imul(I, W)) | 0),
            (o = (o + Math.imul(I, X)) | 0),
            (e = (e + Math.imul(B, $)) | 0),
            (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(_, $)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (e = (e + Math.imul(w, tr)) | 0),
            (n = ((n = (n + Math.imul(w, te)) | 0) + Math.imul(b, tr)) | 0),
            (o = (o + Math.imul(b, te)) | 0),
            (e = (e + Math.imul(y, to)) | 0),
            (n = ((n = (n + Math.imul(y, th)) | 0) + Math.imul(v, to)) | 0),
            (o = (o + Math.imul(v, th)) | 0),
            (e = (e + Math.imul(c, ts)) | 0),
            (n = ((n = (n + Math.imul(c, tu)) | 0) + Math.imul(d, ts)) | 0),
            (o = (o + Math.imul(d, tu)) | 0),
            (e = (e + Math.imul(l, tl)) | 0);
          var t_ =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tp)) | 0) + Math.imul(p, tl)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, tp)) | 0) + (n >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 0x3ffffff),
            (e = Math.imul(q, z)),
            (n = ((n = Math.imul(q, F)) + Math.imul(Z, z)) | 0),
            (o = Math.imul(Z, F)),
            (e = (e + Math.imul(N, Y)) | 0),
            (n = ((n = (n + Math.imul(N, G)) | 0) + Math.imul(C, Y)) | 0),
            (o = (o + Math.imul(C, G)) | 0),
            (e = (e + Math.imul(L, V)) | 0),
            (n = ((n = (n + Math.imul(L, H)) | 0) + Math.imul(k, V)) | 0),
            (o = (o + Math.imul(k, H)) | 0),
            (e = (e + Math.imul(R, W)) | 0),
            (n = ((n = (n + Math.imul(R, X)) | 0) + Math.imul(S, W)) | 0),
            (o = (o + Math.imul(S, X)) | 0),
            (e = (e + Math.imul(A, $)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(I, $)) | 0),
            (o = (o + Math.imul(I, tt)) | 0),
            (e = (e + Math.imul(B, tr)) | 0),
            (n = ((n = (n + Math.imul(B, te)) | 0) + Math.imul(_, tr)) | 0),
            (o = (o + Math.imul(_, te)) | 0),
            (e = (e + Math.imul(w, to)) | 0),
            (n = ((n = (n + Math.imul(w, th)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, th)) | 0),
            (e = (e + Math.imul(y, ts)) | 0),
            (n = ((n = (n + Math.imul(y, tu)) | 0) + Math.imul(v, ts)) | 0),
            (o = (o + Math.imul(v, tu)) | 0),
            (e = (e + Math.imul(c, tl)) | 0),
            (n = ((n = (n + Math.imul(c, tp)) | 0) + Math.imul(d, tl)) | 0),
            (o = (o + Math.imul(d, tp)) | 0),
            (e = (e + Math.imul(l, tc)) | 0);
          var tE =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, td)) | 0) + Math.imul(p, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(p, td)) | 0) + (n >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 0x3ffffff),
            (e = Math.imul(q, Y)),
            (n = ((n = Math.imul(q, G)) + Math.imul(Z, Y)) | 0),
            (o = Math.imul(Z, G)),
            (e = (e + Math.imul(N, V)) | 0),
            (n = ((n = (n + Math.imul(N, H)) | 0) + Math.imul(C, V)) | 0),
            (o = (o + Math.imul(C, H)) | 0),
            (e = (e + Math.imul(L, W)) | 0),
            (n = ((n = (n + Math.imul(L, X)) | 0) + Math.imul(k, W)) | 0),
            (o = (o + Math.imul(k, X)) | 0),
            (e = (e + Math.imul(R, $)) | 0),
            (n = ((n = (n + Math.imul(R, tt)) | 0) + Math.imul(S, $)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (e = (e + Math.imul(A, tr)) | 0),
            (n = ((n = (n + Math.imul(A, te)) | 0) + Math.imul(I, tr)) | 0),
            (o = (o + Math.imul(I, te)) | 0),
            (e = (e + Math.imul(B, to)) | 0),
            (n = ((n = (n + Math.imul(B, th)) | 0) + Math.imul(_, to)) | 0),
            (o = (o + Math.imul(_, th)) | 0),
            (e = (e + Math.imul(w, ts)) | 0),
            (n = ((n = (n + Math.imul(w, tu)) | 0) + Math.imul(b, ts)) | 0),
            (o = (o + Math.imul(b, tu)) | 0),
            (e = (e + Math.imul(y, tl)) | 0),
            (n = ((n = (n + Math.imul(y, tp)) | 0) + Math.imul(v, tl)) | 0),
            (o = (o + Math.imul(v, tp)) | 0),
            (e = (e + Math.imul(c, tc)) | 0);
          var tA =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(c, td)) | 0) + Math.imul(d, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(d, td)) | 0) + (n >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 0x3ffffff),
            (e = Math.imul(q, V)),
            (n = ((n = Math.imul(q, H)) + Math.imul(Z, V)) | 0),
            (o = Math.imul(Z, H)),
            (e = (e + Math.imul(N, W)) | 0),
            (n = ((n = (n + Math.imul(N, X)) | 0) + Math.imul(C, W)) | 0),
            (o = (o + Math.imul(C, X)) | 0),
            (e = (e + Math.imul(L, $)) | 0),
            (n = ((n = (n + Math.imul(L, tt)) | 0) + Math.imul(k, $)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (e = (e + Math.imul(R, tr)) | 0),
            (n = ((n = (n + Math.imul(R, te)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, te)) | 0),
            (e = (e + Math.imul(A, to)) | 0),
            (n = ((n = (n + Math.imul(A, th)) | 0) + Math.imul(I, to)) | 0),
            (o = (o + Math.imul(I, th)) | 0),
            (e = (e + Math.imul(B, ts)) | 0),
            (n = ((n = (n + Math.imul(B, tu)) | 0) + Math.imul(_, ts)) | 0),
            (o = (o + Math.imul(_, tu)) | 0),
            (e = (e + Math.imul(w, tl)) | 0),
            (n = ((n = (n + Math.imul(w, tp)) | 0) + Math.imul(b, tl)) | 0),
            (o = (o + Math.imul(b, tp)) | 0),
            (e = (e + Math.imul(y, tc)) | 0);
          var tI =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(y, td)) | 0) + Math.imul(v, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(v, td)) | 0) + (n >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 0x3ffffff),
            (e = Math.imul(q, W)),
            (n = ((n = Math.imul(q, X)) + Math.imul(Z, W)) | 0),
            (o = Math.imul(Z, X)),
            (e = (e + Math.imul(N, $)) | 0),
            (n = ((n = (n + Math.imul(N, tt)) | 0) + Math.imul(C, $)) | 0),
            (o = (o + Math.imul(C, tt)) | 0),
            (e = (e + Math.imul(L, tr)) | 0),
            (n = ((n = (n + Math.imul(L, te)) | 0) + Math.imul(k, tr)) | 0),
            (o = (o + Math.imul(k, te)) | 0),
            (e = (e + Math.imul(R, to)) | 0),
            (n = ((n = (n + Math.imul(R, th)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, th)) | 0),
            (e = (e + Math.imul(A, ts)) | 0),
            (n = ((n = (n + Math.imul(A, tu)) | 0) + Math.imul(I, ts)) | 0),
            (o = (o + Math.imul(I, tu)) | 0),
            (e = (e + Math.imul(B, tl)) | 0),
            (n = ((n = (n + Math.imul(B, tp)) | 0) + Math.imul(_, tl)) | 0),
            (o = (o + Math.imul(_, tp)) | 0),
            (e = (e + Math.imul(w, tc)) | 0);
          var tU =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, td)) | 0) + Math.imul(b, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(b, td)) | 0) + (n >>> 13)) | 0) +
              (tU >>> 26)) |
            0),
            (tU &= 0x3ffffff),
            (e = Math.imul(q, $)),
            (n = ((n = Math.imul(q, tt)) + Math.imul(Z, $)) | 0),
            (o = Math.imul(Z, tt)),
            (e = (e + Math.imul(N, tr)) | 0),
            (n = ((n = (n + Math.imul(N, te)) | 0) + Math.imul(C, tr)) | 0),
            (o = (o + Math.imul(C, te)) | 0),
            (e = (e + Math.imul(L, to)) | 0),
            (n = ((n = (n + Math.imul(L, th)) | 0) + Math.imul(k, to)) | 0),
            (o = (o + Math.imul(k, th)) | 0),
            (e = (e + Math.imul(R, ts)) | 0),
            (n = ((n = (n + Math.imul(R, tu)) | 0) + Math.imul(S, ts)) | 0),
            (o = (o + Math.imul(S, tu)) | 0),
            (e = (e + Math.imul(A, tl)) | 0),
            (n = ((n = (n + Math.imul(A, tp)) | 0) + Math.imul(I, tl)) | 0),
            (o = (o + Math.imul(I, tp)) | 0),
            (e = (e + Math.imul(B, tc)) | 0);
          var tR =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, td)) | 0) + Math.imul(_, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(_, td)) | 0) + (n >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 0x3ffffff),
            (e = Math.imul(q, tr)),
            (n = ((n = Math.imul(q, te)) + Math.imul(Z, tr)) | 0),
            (o = Math.imul(Z, te)),
            (e = (e + Math.imul(N, to)) | 0),
            (n = ((n = (n + Math.imul(N, th)) | 0) + Math.imul(C, to)) | 0),
            (o = (o + Math.imul(C, th)) | 0),
            (e = (e + Math.imul(L, ts)) | 0),
            (n = ((n = (n + Math.imul(L, tu)) | 0) + Math.imul(k, ts)) | 0),
            (o = (o + Math.imul(k, tu)) | 0),
            (e = (e + Math.imul(R, tl)) | 0),
            (n = ((n = (n + Math.imul(R, tp)) | 0) + Math.imul(S, tl)) | 0),
            (o = (o + Math.imul(S, tp)) | 0),
            (e = (e + Math.imul(A, tc)) | 0);
          var tS =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, td)) | 0) + Math.imul(I, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(I, td)) | 0) + (n >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 0x3ffffff),
            (e = Math.imul(q, to)),
            (n = ((n = Math.imul(q, th)) + Math.imul(Z, to)) | 0),
            (o = Math.imul(Z, th)),
            (e = (e + Math.imul(N, ts)) | 0),
            (n = ((n = (n + Math.imul(N, tu)) | 0) + Math.imul(C, ts)) | 0),
            (o = (o + Math.imul(C, tu)) | 0),
            (e = (e + Math.imul(L, tl)) | 0),
            (n = ((n = (n + Math.imul(L, tp)) | 0) + Math.imul(k, tl)) | 0),
            (o = (o + Math.imul(k, tp)) | 0),
            (e = (e + Math.imul(R, tc)) | 0);
          var tT =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(R, td)) | 0) + Math.imul(S, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(S, td)) | 0) + (n >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 0x3ffffff),
            (e = Math.imul(q, ts)),
            (n = ((n = Math.imul(q, tu)) + Math.imul(Z, ts)) | 0),
            (o = Math.imul(Z, tu)),
            (e = (e + Math.imul(N, tl)) | 0),
            (n = ((n = (n + Math.imul(N, tp)) | 0) + Math.imul(C, tl)) | 0),
            (o = (o + Math.imul(C, tp)) | 0),
            (e = (e + Math.imul(L, tc)) | 0);
          var tL =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(L, td)) | 0) + Math.imul(k, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(k, td)) | 0) + (n >>> 13)) | 0) +
              (tL >>> 26)) |
            0),
            (tL &= 0x3ffffff),
            (e = Math.imul(q, tl)),
            (n = ((n = Math.imul(q, tp)) + Math.imul(Z, tl)) | 0),
            (o = Math.imul(Z, tp)),
            (e = (e + Math.imul(N, tc)) | 0);
          var tk =
            (((u + e) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(N, td)) | 0) + Math.imul(C, tc)) | 0)) <<
                13)) |
            0;
          (u =
            ((((o = (o + Math.imul(C, td)) | 0) + (n >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 0x3ffffff),
            (e = Math.imul(q, tc));
          var tO =
            (((u + e) | 0) +
              ((8191 & (n = ((n = Math.imul(q, td)) + Math.imul(Z, tc)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((o = Math.imul(Z, td)) + (n >>> 13)) | 0) + (tO >>> 26)) | 0),
            (tO &= 0x3ffffff),
            (s[0] = tg),
            (s[1] = ty),
            (s[2] = tv),
            (s[3] = tM),
            (s[4] = tw),
            (s[5] = tb),
            (s[6] = tx),
            (s[7] = tB),
            (s[8] = t_),
            (s[9] = tE),
            (s[10] = tA),
            (s[11] = tI),
            (s[12] = tU),
            (s[13] = tR),
            (s[14] = tS),
            (s[15] = tT),
            (s[16] = tL),
            (s[17] = tk),
            (s[18] = tO),
            0 !== u && ((s[19] = u), r.length++),
            r
          );
        };
        function g(t, i, r) {
          (r.negative = i.negative ^ t.negative),
            (r.length = t.length + i.length);
          for (var e = 0, n = 0, o = 0; o < r.length - 1; o++) {
            var h = n;
            n = 0;
            for (
              var f = 0x3ffffff & e,
                s = Math.min(o, i.length - 1),
                u = Math.max(0, o - t.length + 1);
              u <= s;
              u++
            ) {
              var a = o - u,
                l = (0 | t.words[a]) * (0 | i.words[u]),
                p = 0x3ffffff & l;
              (h = (h + ((l / 0x4000000) | 0)) | 0),
                (f = 0x3ffffff & (p = (p + f) | 0)),
                (n += (h = (h + (p >>> 26)) | 0) >>> 26),
                (h &= 0x3ffffff);
            }
            (r.words[o] = f), (e = h), (h = n);
          }
          return 0 !== e ? (r.words[o] = e) : r.length--, r._strip();
        }
        function y(t, i) {
          (this.x = t), (this.y = i);
        }
        Math.imul || (d = c),
          (n.prototype.mulTo = function (t, i) {
            var r,
              e = this.length + t.length;
            return (
              10 === this.length && 10 === t.length
                ? (r = d(this, t, i))
                : e < 63
                ? (r = c(this, t, i))
                : (r = g(this, t, i)),
              r
            );
          }),
          (y.prototype.makeRBT = function (t) {
            for (
              var i = Array(t), r = n.prototype._countBits(t) - 1, e = 0;
              e < t;
              e++
            )
              i[e] = this.revBin(e, r, t);
            return i;
          }),
          (y.prototype.revBin = function (t, i, r) {
            if (0 === t || t === r - 1) return t;
            for (var e = 0, n = 0; n < i; n++)
              (e |= (1 & t) << (i - n - 1)), (t >>= 1);
            return e;
          }),
          (y.prototype.permute = function (t, i, r, e, n, o) {
            for (var h = 0; h < o; h++) (e[h] = i[t[h]]), (n[h] = r[t[h]]);
          }),
          (y.prototype.transform = function (t, i, r, e, n, o) {
            this.permute(o, t, i, r, e, n);
            for (var h = 1; h < n; h <<= 1)
              for (
                var f = h << 1,
                  s = Math.cos((2 * Math.PI) / f),
                  u = Math.sin((2 * Math.PI) / f),
                  a = 0;
                a < n;
                a += f
              )
                for (var l = s, p = u, m = 0; m < h; m++) {
                  var c = r[a + m],
                    d = e[a + m],
                    g = r[a + m + h],
                    y = e[a + m + h],
                    v = l * g - p * y;
                  (y = l * y + p * g),
                    (g = v),
                    (r[a + m] = c + g),
                    (e[a + m] = d + y),
                    (r[a + m + h] = c - g),
                    (e[a + m + h] = d - y),
                    m !== f &&
                      ((v = s * l - u * p), (p = s * p + u * l), (l = v));
                }
          }),
          (y.prototype.guessLen13b = function (t, i) {
            var r = 1 | Math.max(i, t),
              e = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + e);
          }),
          (y.prototype.conjugate = function (t, i, r) {
            if (!(r <= 1))
              for (var e = 0; e < r / 2; e++) {
                var n = t[e];
                (t[e] = t[r - e - 1]),
                  (t[r - e - 1] = n),
                  (n = i[e]),
                  (i[e] = -i[r - e - 1]),
                  (i[r - e - 1] = -n);
              }
          }),
          (y.prototype.normalize13b = function (t, i) {
            for (var r = 0, e = 0; e < i / 2; e++) {
              var n =
                8192 * Math.round(t[2 * e + 1] / i) +
                Math.round(t[2 * e] / i) +
                r;
              (t[e] = 0x3ffffff & n),
                (r = n < 0x4000000 ? 0 : (n / 0x4000000) | 0);
            }
            return t;
          }),
          (y.prototype.convert13b = function (t, i, e, n) {
            for (var o = 0, h = 0; h < i; h++)
              (o += 0 | t[h]),
                (e[2 * h] = 8191 & o),
                (o >>>= 13),
                (e[2 * h + 1] = 8191 & o),
                (o >>>= 13);
            for (h = 2 * i; h < n; ++h) e[h] = 0;
            r(0 === o), r((-8192 & o) == 0);
          }),
          (y.prototype.stub = function (t) {
            for (var i = Array(t), r = 0; r < t; r++) i[r] = 0;
            return i;
          }),
          (y.prototype.mulp = function (t, i, r) {
            var e = 2 * this.guessLen13b(t.length, i.length),
              n = this.makeRBT(e),
              o = this.stub(e),
              h = Array(e),
              f = Array(e),
              s = Array(e),
              u = Array(e),
              a = Array(e),
              l = Array(e),
              p = r.words;
            (p.length = e),
              this.convert13b(t.words, t.length, h, e),
              this.convert13b(i.words, i.length, u, e),
              this.transform(h, o, f, s, e, n),
              this.transform(u, o, a, l, e, n);
            for (var m = 0; m < e; m++) {
              var c = f[m] * a[m] - s[m] * l[m];
              (s[m] = f[m] * l[m] + s[m] * a[m]), (f[m] = c);
            }
            return (
              this.conjugate(f, s, e),
              this.transform(f, s, p, o, e, n),
              this.conjugate(p, o, e),
              this.normalize13b(p, e),
              (r.negative = t.negative ^ i.negative),
              (r.length = t.length + i.length),
              r._strip()
            );
          }),
          (n.prototype.mul = function (t) {
            var i = new n(null);
            return (i.words = Array(this.length + t.length)), this.mulTo(t, i);
          }),
          (n.prototype.mulf = function (t) {
            var i = new n(null);
            return (i.words = Array(this.length + t.length)), g(this, t, i);
          }),
          (n.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (n.prototype.imuln = function (t) {
            var i = t < 0;
            i && (t = -t), r("number" == typeof t), r(t < 0x4000000);
            for (var e = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                h = (0x3ffffff & o) + (0x3ffffff & e);
              (e >>= 26),
                (e += ((o / 0x4000000) | 0) + (h >>> 26)),
                (this.words[n] = 0x3ffffff & h);
            }
            return (
              0 !== e && ((this.words[n] = e), this.length++),
              (this.length = 0 === t ? 1 : this.length),
              i ? this.ineg() : this
            );
          }),
          (n.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (n.prototype.sqr = function () {
            return this.mul(this);
          }),
          (n.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (n.prototype.pow = function (t) {
            var i = (function (t) {
              for (var i = Array(t.bitLength()), r = 0; r < i.length; r++) {
                var e = (r / 26) | 0,
                  n = r % 26;
                i[r] = (t.words[e] >>> n) & 1;
              }
              return i;
            })(t);
            if (0 === i.length) return new n(1);
            for (
              var r = this, e = 0;
              e < i.length && 0 === i[e];
              e++, r = r.sqr()
            );
            if (++e < i.length)
              for (var o = r.sqr(); e < i.length; e++, o = o.sqr())
                0 !== i[e] && (r = r.mul(o));
            return r;
          }),
          (n.prototype.iushln = function (t) {
            r("number" == typeof t && t >= 0);
            var i,
              e = t % 26,
              n = (t - e) / 26,
              o = (0x3ffffff >>> (26 - e)) << (26 - e);
            if (0 !== e) {
              var h = 0;
              for (i = 0; i < this.length; i++) {
                var f = this.words[i] & o,
                  s = ((0 | this.words[i]) - f) << e;
                (this.words[i] = s | h), (h = f >>> (26 - e));
              }
              h && ((this.words[i] = h), this.length++);
            }
            if (0 !== n) {
              for (i = this.length - 1; i >= 0; i--)
                this.words[i + n] = this.words[i];
              for (i = 0; i < n; i++) this.words[i] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (n.prototype.ishln = function (t) {
            return r(0 === this.negative), this.iushln(t);
          }),
          (n.prototype.iushrn = function (t, i, e) {
            r("number" == typeof t && t >= 0);
            var n = i ? (i - (i % 26)) / 26 : 0,
              o = t % 26,
              h = Math.min((t - o) / 26, this.length),
              f = 0x3ffffff ^ ((0x3ffffff >>> o) << o);
            if (((n -= h), (n = Math.max(0, n)), e)) {
              for (var s = 0; s < h; s++) e.words[s] = this.words[s];
              e.length = h;
            }
            if (0 === h);
            else if (this.length > h)
              for (this.length -= h, s = 0; s < this.length; s++)
                this.words[s] = this.words[s + h];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (s = this.length - 1; s >= 0 && (0 !== u || s >= n); s--) {
              var a = 0 | this.words[s];
              (this.words[s] = (u << (26 - o)) | (a >>> o)), (u = a & f);
            }
            return (
              e && 0 !== u && (e.words[e.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (n.prototype.ishrn = function (t, i, e) {
            return r(0 === this.negative), this.iushrn(t, i, e);
          }),
          (n.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (n.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (n.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (n.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (n.prototype.testn = function (t) {
            r("number" == typeof t && t >= 0);
            var i = t % 26,
              e = (t - i) / 26;
            return !(this.length <= e) && !!(this.words[e] & (1 << i));
          }),
          (n.prototype.imaskn = function (t) {
            r("number" == typeof t && t >= 0);
            var i = t % 26,
              e = (t - i) / 26;
            return (r(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= e)
              ? this
              : (0 !== i && e++,
                (this.length = Math.min(e, this.length)),
                0 !== i &&
                  (this.words[this.length - 1] &=
                    0x3ffffff ^ ((0x3ffffff >>> i) << i)),
                this._strip());
          }),
          (n.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (n.prototype.iaddn = function (t) {
            return (r("number" == typeof t), r(t < 0x4000000), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (n.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++)
              (this.words[i] -= 0x4000000),
                i === this.length - 1
                  ? (this.words[i + 1] = 1)
                  : this.words[i + 1]++;
            return (this.length = Math.max(this.length, i + 1)), this;
          }),
          (n.prototype.isubn = function (t) {
            if ((r("number" == typeof t), r(t < 0x4000000), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var i = 0; i < this.length && this.words[i] < 0; i++)
                (this.words[i] += 0x4000000), (this.words[i + 1] -= 1);
            return this._strip();
          }),
          (n.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (n.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (n.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (n.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (n.prototype._ishlnsubmul = function (t, i, e) {
            var n,
              o,
              h = t.length + e;
            this._expand(h);
            var f = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + e]) + f;
              var s = (0 | t.words[n]) * i;
              (o -= 0x3ffffff & s),
                (f = (o >> 26) - ((s / 0x4000000) | 0)),
                (this.words[n + e] = 0x3ffffff & o);
            }
            for (; n < this.length - e; n++)
              (f = (o = (0 | this.words[n + e]) + f) >> 26),
                (this.words[n + e] = 0x3ffffff & o);
            if (0 === f) return this._strip();
            for (r(-1 === f), f = 0, n = 0; n < this.length; n++)
              (f = (o = -(0 | this.words[n]) + f) >> 26),
                (this.words[n] = 0x3ffffff & o);
            return (this.negative = 1), this._strip();
          }),
          (n.prototype._wordDiv = function (t, i) {
            var r,
              e = this.length - t.length,
              o = this.clone(),
              h = t,
              f = 0 | h.words[h.length - 1];
            0 != (e = 26 - this._countBits(f)) &&
              ((h = h.ushln(e)), o.iushln(e), (f = 0 | h.words[h.length - 1]));
            var s = o.length - h.length;
            if ("mod" !== i) {
              ((r = new n(null)).length = s + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var a = o.clone()._ishlnsubmul(h, 1, s);
            0 === a.negative && ((o = a), r && (r.words[s] = 1));
            for (var l = s - 1; l >= 0; l--) {
              var p =
                (0 | o.words[h.length + l]) * 0x4000000 +
                (0 | o.words[h.length + l - 1]);
              for (
                p = Math.min((p / f) | 0, 0x3ffffff), o._ishlnsubmul(h, p, l);
                0 !== o.negative;

              )
                p--,
                  (o.negative = 0),
                  o._ishlnsubmul(h, 1, l),
                  o.isZero() || (o.negative ^= 1);
              r && (r.words[l] = p);
            }
            return (
              r && r._strip(),
              o._strip(),
              "div" !== i && 0 !== e && o.iushrn(e),
              { div: r || null, mod: o }
            );
          }),
          (n.prototype.divmod = function (t, i, e) {
            var o, h, f;
            return (r(!t.isZero()), this.isZero())
              ? { div: new n(0), mod: new n(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((f = this.neg().divmod(t, i)),
                "mod" !== i && (o = f.div.neg()),
                "div" !== i &&
                  ((h = f.mod.neg()), e && 0 !== h.negative && h.iadd(t)),
                { div: o, mod: h })
              : 0 === this.negative && 0 !== t.negative
              ? ((f = this.divmod(t.neg(), i)),
                "mod" !== i && (o = f.div.neg()),
                { div: o, mod: f.mod })
              : (this.negative & t.negative) != 0
              ? ((f = this.neg().divmod(t.neg(), i)),
                "div" !== i &&
                  ((h = f.mod.neg()), e && 0 !== h.negative && h.isub(t)),
                { div: f.div, mod: h })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new n(0), mod: this }
              : 1 === t.length
              ? "div" === i
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === i
                ? { div: null, mod: new n(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new n(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, i);
          }),
          (n.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (n.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (n.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (n.prototype.divRound = function (t) {
            var i = this.divmod(t);
            if (i.mod.isZero()) return i.div;
            var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
              e = t.ushrn(1),
              n = t.andln(1),
              o = r.cmp(e);
            return o < 0 || (1 === n && 0 === o)
              ? i.div
              : 0 !== i.div.negative
              ? i.div.isubn(1)
              : i.div.iaddn(1);
          }),
          (n.prototype.modrn = function (t) {
            var i = t < 0;
            i && (t = -t), r(t <= 0x3ffffff);
            for (var e = 0x4000000 % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (e * n + (0 | this.words[o])) % t;
            return i ? -n : n;
          }),
          (n.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (n.prototype.idivn = function (t) {
            var i = t < 0;
            i && (t = -t), r(t <= 0x3ffffff);
            for (var e = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 0x4000000 * e;
              (this.words[n] = (o / t) | 0), (e = o % t);
            }
            return this._strip(), i ? this.ineg() : this;
          }),
          (n.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (n.prototype.egcd = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var i = this,
              e = t.clone();
            i = 0 !== i.negative ? i.umod(t) : i.clone();
            for (
              var o = new n(1), h = new n(0), f = new n(0), s = new n(1), u = 0;
              i.isEven() && e.isEven();

            )
              i.iushrn(1), e.iushrn(1), ++u;
            for (var a = e.clone(), l = i.clone(); !i.isZero(); ) {
              for (
                var p = 0, m = 1;
                (i.words[0] & m) == 0 && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (i.iushrn(p); p-- > 0; )
                  (o.isOdd() || h.isOdd()) && (o.iadd(a), h.isub(l)),
                    o.iushrn(1),
                    h.iushrn(1);
              for (
                var c = 0, d = 1;
                (e.words[0] & d) == 0 && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (f.isOdd() || s.isOdd()) && (f.iadd(a), s.isub(l)),
                    f.iushrn(1),
                    s.iushrn(1);
              i.cmp(e) >= 0
                ? (i.isub(e), o.isub(f), h.isub(s))
                : (e.isub(i), f.isub(o), s.isub(h));
            }
            return { a: f, b: s, gcd: e.iushln(u) };
          }),
          (n.prototype._invmp = function (t) {
            r(0 === t.negative), r(!t.isZero());
            var i,
              e = this,
              o = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var h = new n(1), f = new n(0), s = o.clone();
              e.cmpn(1) > 0 && o.cmpn(1) > 0;

            ) {
              for (
                var u = 0, a = 1;
                (e.words[0] & a) == 0 && u < 26;
                ++u, a <<= 1
              );
              if (u > 0)
                for (e.iushrn(u); u-- > 0; )
                  h.isOdd() && h.iadd(s), h.iushrn(1);
              for (
                var l = 0, p = 1;
                (o.words[0] & p) == 0 && l < 26;
                ++l, p <<= 1
              );
              if (l > 0)
                for (o.iushrn(l); l-- > 0; )
                  f.isOdd() && f.iadd(s), f.iushrn(1);
              e.cmp(o) >= 0 ? (e.isub(o), h.isub(f)) : (o.isub(e), f.isub(h));
            }
            return 0 > (i = 0 === e.cmpn(1) ? h : f).cmpn(0) && i.iadd(t), i;
          }),
          (n.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var i = this.clone(),
              r = t.clone();
            (i.negative = 0), (r.negative = 0);
            for (var e = 0; i.isEven() && r.isEven(); e++)
              i.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; i.isEven(); ) i.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = i.cmp(r);
              if (n < 0) {
                var o = i;
                (i = r), (r = o);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              i.isub(r);
            }
            return r.iushln(e);
          }),
          (n.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (n.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (n.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (n.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (n.prototype.bincn = function (t) {
            r("number" == typeof t);
            var i = t % 26,
              e = (t - i) / 26,
              n = 1 << i;
            if (this.length <= e)
              return this._expand(e + 1), (this.words[e] |= n), this;
            for (var o = n, h = e; 0 !== o && h < this.length; h++) {
              var f = 0 | this.words[h];
              (f += o), (o = f >>> 26), (f &= 0x3ffffff), (this.words[h] = f);
            }
            return 0 !== o && ((this.words[h] = o), this.length++), this;
          }),
          (n.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (n.prototype.cmpn = function (t) {
            var i,
              e = t < 0;
            if (0 !== this.negative && !e) return -1;
            if (0 === this.negative && e) return 1;
            if ((this._strip(), this.length > 1)) i = 1;
            else {
              e && (t = -t), r(t <= 0x3ffffff, "Number is too big");
              var n = 0 | this.words[0];
              i = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -i : i;
          }),
          (n.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var i = this.ucmp(t);
            return 0 !== this.negative ? 0 | -i : i;
          }),
          (n.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var i = 0, r = this.length - 1; r >= 0; r--) {
              var e = 0 | this.words[r],
                n = 0 | t.words[r];
              if (e !== n) {
                e < n ? (i = -1) : e > n && (i = 1);
                break;
              }
            }
            return i;
          }),
          (n.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (n.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (n.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (n.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (n.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (n.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (n.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (n.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (n.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (n.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (n.red = function (t) {
            return new _(t);
          }),
          (n.prototype.toRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              r(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (n.prototype.fromRed = function () {
            return (
              r(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (n.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (n.prototype.forceRed = function (t) {
            return (
              r(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (n.prototype.redAdd = function (t) {
            return (
              r(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (n.prototype.redIAdd = function (t) {
            return (
              r(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (n.prototype.redSub = function (t) {
            return (
              r(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (n.prototype.redISub = function (t) {
            return (
              r(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (n.prototype.redShl = function (t) {
            return (
              r(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (n.prototype.redMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (n.prototype.redIMul = function (t) {
            return (
              r(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (n.prototype.redSqr = function () {
            return (
              r(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (n.prototype.redISqr = function () {
            return (
              r(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (n.prototype.redSqrt = function () {
            return (
              r(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (n.prototype.redInvm = function () {
            return (
              r(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (n.prototype.redNeg = function () {
            return (
              r(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (n.prototype.redPow = function (t) {
            return (
              r(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var v = { k256: null, p224: null, p192: null, p25519: null };
        function M(t, i) {
          (this.name = t),
            (this.p = new n(i, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new n(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function w() {
          M.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function b() {
          M.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function x() {
          M.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function B() {
          M.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function _(t) {
          if ("string" == typeof t) {
            var i = n._prime(t);
            (this.m = i.p), (this.prime = i);
          } else
            r(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function E(t) {
          _.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new n(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (M.prototype._tmp = function () {
          var t = new n(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (M.prototype.ireduce = function (t) {
            var i,
              r = t;
            do
              this.split(r, this.tmp),
                (i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (i > this.n);
            var e = i < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === e
                ? ((r.words[0] = 0), (r.length = 1))
                : e > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (M.prototype.split = function (t, i) {
            t.iushrn(this.n, 0, i);
          }),
          (M.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          e(w, M),
          (w.prototype.split = function (t, i) {
            for (var r = Math.min(t.length, 9), e = 0; e < r; e++)
              i.words[e] = t.words[e];
            if (((i.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var n = t.words[9];
            for (e = 10, i.words[i.length++] = 4194303 & n; e < t.length; e++) {
              var o = 0 | t.words[e];
              (t.words[e - 10] = ((4194303 & o) << 4) | (n >>> 22)), (n = o);
            }
            (n >>>= 22),
              (t.words[e - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (w.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var i = 0, r = 0; r < t.length; r++) {
              var e = 0 | t.words[r];
              (i += 977 * e),
                (t.words[r] = 0x3ffffff & i),
                (i = 64 * e + ((i / 0x4000000) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          e(b, M),
          e(x, M),
          e(B, M),
          (B.prototype.imulK = function (t) {
            for (var i = 0, r = 0; r < t.length; r++) {
              var e = (0 | t.words[r]) * 19 + i,
                n = 0x3ffffff & e;
              (e >>>= 26), (t.words[r] = n), (i = e);
            }
            return 0 !== i && (t.words[t.length++] = i), t;
          }),
          (n._prime = function (t) {
            var i;
            if (v[t]) return v[t];
            if ("k256" === t) i = new w();
            else if ("p224" === t) i = new b();
            else if ("p192" === t) i = new x();
            else if ("p25519" === t) i = new B();
            else throw Error("Unknown prime " + t);
            return (v[t] = i), i;
          }),
          (_.prototype._verify1 = function (t) {
            r(0 === t.negative, "red works only with positives"),
              r(t.red, "red works only with red numbers");
          }),
          (_.prototype._verify2 = function (t, i) {
            r((t.negative | i.negative) == 0, "red works only with positives"),
              r(t.red && t.red === i.red, "red works only with red numbers");
          }),
          (_.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (s(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (_.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (_.prototype.add = function (t, i) {
            this._verify2(t, i);
            var r = t.add(i);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (_.prototype.iadd = function (t, i) {
            this._verify2(t, i);
            var r = t.iadd(i);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (_.prototype.sub = function (t, i) {
            this._verify2(t, i);
            var r = t.sub(i);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (_.prototype.isub = function (t, i) {
            this._verify2(t, i);
            var r = t.isub(i);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (_.prototype.shl = function (t, i) {
            return this._verify1(t), this.imod(t.ushln(i));
          }),
          (_.prototype.imul = function (t, i) {
            return this._verify2(t, i), this.imod(t.imul(i));
          }),
          (_.prototype.mul = function (t, i) {
            return this._verify2(t, i), this.imod(t.mul(i));
          }),
          (_.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (_.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (_.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var i = this.m.andln(3);
            if ((r(i % 2 == 1), 3 === i)) {
              var e = this.m.add(new n(1)).iushrn(2);
              return this.pow(t, e);
            }
            for (
              var o = this.m.subn(1), h = 0;
              !o.isZero() && 0 === o.andln(1);

            )
              h++, o.iushrn(1);
            r(!o.isZero());
            var f = new n(1).toRed(this),
              s = f.redNeg(),
              u = this.m.subn(1).iushrn(1),
              a = this.m.bitLength();
            for (
              a = new n(2 * a * a).toRed(this);
              0 !== this.pow(a, u).cmp(s);

            )
              a.redIAdd(s);
            for (
              var l = this.pow(a, o),
                p = this.pow(t, o.addn(1).iushrn(1)),
                m = this.pow(t, o),
                c = h;
              0 !== m.cmp(f);

            ) {
              for (var d = m, g = 0; 0 !== d.cmp(f); g++) d = d.redSqr();
              r(g < c);
              var y = this.pow(l, new n(1).iushln(c - g - 1));
              (p = p.redMul(y)), (l = y.redSqr()), (m = m.redMul(l)), (c = g);
            }
            return p;
          }),
          (_.prototype.invm = function (t) {
            var i = t._invmp(this.m);
            return 0 !== i.negative
              ? ((i.negative = 0), this.imod(i).redNeg())
              : this.imod(i);
          }),
          (_.prototype.pow = function (t, i) {
            if (i.isZero()) return new n(1).toRed(this);
            if (0 === i.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new n(1).toRed(this)), (r[1] = t);
            for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
            var o = r[0],
              h = 0,
              f = 0,
              s = i.bitLength() % 26;
            for (0 === s && (s = 26), e = i.length - 1; e >= 0; e--) {
              for (var u = i.words[e], a = s - 1; a >= 0; a--) {
                var l = (u >> a) & 1;
                if ((o !== r[0] && (o = this.sqr(o)), 0 === l && 0 === h)) {
                  f = 0;
                  continue;
                }
                (h <<= 1),
                  (h |= l),
                  (4 == ++f || (0 === e && 0 === a)) &&
                    ((o = this.mul(o, r[h])), (f = 0), (h = 0));
              }
              s = 26;
            }
            return o;
          }),
          (_.prototype.convertTo = function (t) {
            var i = t.umod(this.m);
            return i === t ? i.clone() : i;
          }),
          (_.prototype.convertFrom = function (t) {
            var i = t.clone();
            return (i.red = null), i;
          }),
          (n.mont = function (t) {
            return new E(t);
          }),
          e(E, _),
          (E.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (E.prototype.convertFrom = function (t) {
            var i = this.imod(t.mul(this.rinv));
            return (i.red = null), i;
          }),
          (E.prototype.imul = function (t, i) {
            if (t.isZero() || i.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(i),
              e = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(e).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (E.prototype.mul = function (t, i) {
            if (t.isZero() || i.isZero()) return new n(0)._forceRed(this);
            var r = t.mul(i),
              e = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              o = r.isub(e).iushrn(this.shift),
              h = o;
            return (
              o.cmp(this.m) >= 0
                ? (h = o.isub(this.m))
                : 0 > o.cmpn(0) && (h = o.iadd(this.m)),
              h._forceRed(this)
            );
          }),
          (E.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })(i, t.e);
    },
    900398: (t) => {
      var { m: i, e: r } = t,
        e = t.r(523966),
        n = e.Buffer;
      function o(t, i) {
        for (var r in t) i[r] = t[r];
      }
      function h(t, i, r) {
        return n(t, i, r);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
        ? (i.exports = e)
        : (o(e, r), (r.Buffer = h)),
        (h.prototype = Object.create(n.prototype)),
        o(n, h),
        (h.from = function (t, i, r) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return n(t, i, r);
        }),
        (h.alloc = function (t, i, r) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var e = n(t);
          return (
            void 0 !== i
              ? "string" == typeof r
                ? e.fill(i, r)
                : e.fill(i)
              : e.fill(0),
            e
          );
        }),
        (h.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return n(t);
        }),
        (h.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return e.SlowBuffer(t);
        });
    },
  },
]);

//# sourceMappingURL=086b889ee7298cc8.js.map
