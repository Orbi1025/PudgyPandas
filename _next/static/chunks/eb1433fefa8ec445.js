(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    710841: (e) => {
      var { m: t, e: r } = e;
      !(function () {
        var e = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = u(e),
                  r = t[0],
                  n = t[1];
                return ((r + n) * 3) / 4 - n;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    r,
                    o = u(e),
                    s = o[0],
                    f = o[1],
                    a = new i(((s + f) * 3) / 4 - f),
                    l = 0,
                    h = f > 0 ? s - 4 : s;
                  for (r = 0; r < h; r += 4)
                    (t =
                      (n[e.charCodeAt(r)] << 18) |
                      (n[e.charCodeAt(r + 1)] << 12) |
                      (n[e.charCodeAt(r + 2)] << 6) |
                      n[e.charCodeAt(r + 3)]),
                      (a[l++] = (t >> 16) & 255),
                      (a[l++] = (t >> 8) & 255),
                      (a[l++] = 255 & t);
                  return (
                    2 === f &&
                      ((t =
                        (n[e.charCodeAt(r)] << 2) |
                        (n[e.charCodeAt(r + 1)] >> 4)),
                      (a[l++] = 255 & t)),
                    1 === f &&
                      ((t =
                        (n[e.charCodeAt(r)] << 10) |
                        (n[e.charCodeAt(r + 1)] << 4) |
                        (n[e.charCodeAt(r + 2)] >> 2)),
                      (a[l++] = (t >> 8) & 255),
                      (a[l++] = 255 & t)),
                    a
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, n = e.length, i = n % 3, o = [], s = 0, f = n - i;
                    s < f;
                    s += 16383
                  )
                    o.push(
                      (function (e, t, n) {
                        for (var i, o = [], s = t; s < n; s += 3)
                          (i =
                            ((e[s] << 16) & 0xff0000) +
                            ((e[s + 1] << 8) & 65280) +
                            (255 & e[s + 2])),
                            o.push(
                              r[(i >> 18) & 63] +
                                r[(i >> 12) & 63] +
                                r[(i >> 6) & 63] +
                                r[63 & i]
                            );
                        return o.join("");
                      })(e, s, s + 16383 > f ? f : s + 16383)
                    );
                  return (
                    1 === i
                      ? o.push(r[(t = e[n - 1]) >> 2] + r[(t << 4) & 63] + "==")
                      : 2 === i &&
                        o.push(
                          r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] +
                            r[(t >> 4) & 63] +
                            r[(t << 2) & 63] +
                            "="
                        ),
                    o.join("")
                  );
                });
              for (
                var r = [],
                  n = [],
                  i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  o =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  s = 0,
                  f = o.length;
                s < f;
                ++s
              )
                (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
              function u(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                -1 === r && (r = t);
                var n = r === t ? 0 : 4 - (r % 4);
                return [r, n];
              }
              (n[45] = 62), (n[95] = 63);
            },
            72: function (e, t, r) {
              "use strict";
              var n = r(675),
                i = r(783),
                o =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function s(e) {
                if (e > 0x7fffffff)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, f.prototype), t;
              }
              function f(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return l(e);
                }
                return u(e, t, r);
              }
              function u(e, t, r) {
                if ("string" == typeof e) {
                  var n = e,
                    i = t;
                  if (
                    (("string" != typeof i || "" === i) && (i = "utf8"),
                    !f.isEncoding(i))
                  )
                    throw TypeError("Unknown encoding: " + i);
                  var o = 0 | p(n, i),
                    u = s(o),
                    a = u.write(n, i);
                  return a !== o && (u = u.slice(0, a)), u;
                }
                if (ArrayBuffer.isView(e)) return h(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  T(e, ArrayBuffer) ||
                  (e && T(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (T(e, SharedArrayBuffer) ||
                      (e && T(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, r) {
                    var n;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (n =
                          void 0 === t && void 0 === r
                            ? new Uint8Array(e)
                            : void 0 === r
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, r)),
                        f.prototype
                      ),
                      n
                    );
                  })(e, t, r);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var l = e.valueOf && e.valueOf();
                if (null != l && l !== e) return f.from(l, t, r);
                var g = (function (e) {
                  if (f.isBuffer(e)) {
                    var t = 0 | c(e.length),
                      r = s(t);
                    return 0 === r.length || e.copy(r, 0, 0, t), r;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length ||
                      (function (e) {
                        return e != e;
                      })(e.length)
                      ? s(0)
                      : h(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? h(e.data)
                    : void 0;
                })(e);
                if (g) return g;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return f.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function a(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function l(e) {
                return a(e), s(e < 0 ? 0 : 0 | c(e));
              }
              function h(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | c(e.length), r = s(t), n = 0;
                  n < t;
                  n += 1
                )
                  r[n] = 255 & e[n];
                return r;
              }
              (t.Buffer = f),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), f.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 0x7fffffff),
                (f.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                f.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(f.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (f.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(f.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (f.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (f.poolSize = 8192),
                (f.from = function (e, t, r) {
                  return u(e, t, r);
                }),
                Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(f, Uint8Array),
                (f.alloc = function (e, t, r) {
                  return (a(e), e <= 0)
                    ? s(e)
                    : void 0 !== t
                    ? "string" == typeof r
                      ? s(e).fill(t, r)
                      : s(e).fill(t)
                    : s(e);
                }),
                (f.allocUnsafe = function (e) {
                  return l(e);
                }),
                (f.allocUnsafeSlow = function (e) {
                  return l(e);
                });
              function c(e) {
                if (e >= 0x7fffffff)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function p(e, t) {
                if (f.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || T(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var r = e.length,
                  n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return B(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return _(e).length;
                    default:
                      if (i) return n ? -1 : B(e).length;
                      (t = ("" + t).toLowerCase()), (i = !0);
                  }
              }
              function g(e, t, r) {
                var i,
                  o,
                  s,
                  f = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0 || (r >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, r) {
                        var n = e.length;
                        (!t || t < 0) && (t = 0),
                          (!r || r < 0 || r > n) && (r = n);
                        for (var i = "", o = t; o < r; ++o) i += C[e[o]];
                        return i;
                      })(this, t, r);
                    case "utf8":
                    case "utf-8":
                      return b(this, t, r);
                    case "ascii":
                      return (function (e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var i = t; i < r; ++i)
                          n += String.fromCharCode(127 & e[i]);
                        return n;
                      })(this, t, r);
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        var n = "";
                        r = Math.min(e.length, r);
                        for (var i = t; i < r; ++i)
                          n += String.fromCharCode(e[i]);
                        return n;
                      })(this, t, r);
                    case "base64":
                      return (
                        (i = this),
                        (o = t),
                        (s = r),
                        0 === o && s === i.length
                          ? n.fromByteArray(i)
                          : n.fromByteArray(i.slice(o, s))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        for (
                          var n = e.slice(t, r), i = "", o = 0;
                          o < n.length;
                          o += 2
                        )
                          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i;
                      })(this, t, r);
                    default:
                      if (f) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (f = !0);
                  }
              }
              function y(e, t, r) {
                var n = e[t];
                (e[t] = e[r]), (e[r] = n);
              }
              function v(e, t, r, n, i) {
                var o;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 0x7fffffff
                    ? (r = 0x7fffffff)
                    : r < -0x80000000 && (r = -0x80000000),
                  (o = r *= 1) != o && (r = i ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                )
                  if (i) return -1;
                  else r = e.length - 1;
                else if (r < 0)
                  if (!i) return -1;
                  else r = 0;
                if (("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
                  return 0 === t.length ? -1 : d(e, t, r, n, i);
                if ("number" == typeof t) {
                  if (
                    ((t &= 255),
                    "function" == typeof Uint8Array.prototype.indexOf)
                  )
                    if (i) return Uint8Array.prototype.indexOf.call(e, t, r);
                    else return Uint8Array.prototype.lastIndexOf.call(e, t, r);
                  return d(e, [t], r, n, i);
                }
                throw TypeError("val must be string, number or Buffer");
              }
              function d(e, t, r, n, i) {
                var o,
                  s = 1,
                  f = e.length,
                  u = t.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (s = 2), (f /= 2), (u /= 2), (r /= 2);
                }
                function a(e, t) {
                  return 1 === s ? e[t] : e.readUInt16BE(t * s);
                }
                if (i) {
                  var l = -1;
                  for (o = r; o < f; o++)
                    if (a(e, o) === a(t, -1 === l ? 0 : o - l)) {
                      if ((-1 === l && (l = o), o - l + 1 === u)) return l * s;
                    } else -1 !== l && (o -= o - l), (l = -1);
                } else
                  for (r + u > f && (r = f - u), o = r; o >= 0; o--) {
                    for (var h = !0, c = 0; c < u; c++)
                      if (a(e, o + c) !== a(t, c)) {
                        h = !1;
                        break;
                      }
                    if (h) return o;
                  }
                return -1;
              }
              (f.isBuffer = function (e) {
                return null != e && !0 === e._isBuffer && e !== f.prototype;
              }),
                (f.compare = function (e, t) {
                  if (
                    (T(e, Uint8Array) &&
                      (e = f.from(e, e.offset, e.byteLength)),
                    T(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
                    !f.isBuffer(e) || !f.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
                    i < o;
                    ++i
                  )
                    if (e[i] !== t[i]) {
                      (r = e[i]), (n = t[i]);
                      break;
                    }
                  return r < n ? -1 : +(n < r);
                }),
                (f.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
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
                (f.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return f.alloc(0);
                  if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                  var r,
                    n = f.allocUnsafe(t),
                    i = 0;
                  for (r = 0; r < e.length; ++r) {
                    var o = e[r];
                    if ((T(o, Uint8Array) && (o = f.from(o)), !f.isBuffer(o)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(n, i), (i += o.length);
                  }
                  return n;
                }),
                (f.byteLength = p),
                (f.prototype._isBuffer = !0),
                (f.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                  return this;
                }),
                (f.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    y(this, t, t + 3), y(this, t + 1, t + 2);
                  return this;
                }),
                (f.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    y(this, t, t + 7),
                      y(this, t + 1, t + 6),
                      y(this, t + 2, t + 5),
                      y(this, t + 3, t + 4);
                  return this;
                }),
                (f.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? b(this, 0, e)
                    : g.apply(this, arguments);
                }),
                (f.prototype.toLocaleString = f.prototype.toString),
                (f.prototype.equals = function (e) {
                  if (!f.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === f.compare(this, e);
                }),
                (f.prototype.inspect = function () {
                  var e = "",
                    r = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                o && (f.prototype[o] = f.prototype.inspect),
                (f.prototype.compare = function (e, t, r, n, i) {
                  if (
                    (T(e, Uint8Array) &&
                      (e = f.from(e, e.offset, e.byteLength)),
                    !f.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    t < 0 || r > e.length || n < 0 || i > this.length)
                  )
                    throw RangeError("out of range index");
                  if (n >= i && t >= r) return 0;
                  if (n >= i) return -1;
                  if (t >= r) return 1;
                  if (
                    ((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var o = i - n,
                      s = r - t,
                      u = Math.min(o, s),
                      a = this.slice(n, i),
                      l = e.slice(t, r),
                      h = 0;
                    h < u;
                    ++h
                  )
                    if (a[h] !== l[h]) {
                      (o = a[h]), (s = l[h]);
                      break;
                    }
                  return o < s ? -1 : +(s < o);
                }),
                (f.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (f.prototype.indexOf = function (e, t, r) {
                  return v(this, e, t, r, !0);
                }),
                (f.prototype.lastIndexOf = function (e, t, r) {
                  return v(this, e, t, r, !1);
                });
              function b(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r; ) {
                  var o,
                    s,
                    f,
                    u,
                    a = e[i],
                    l = null,
                    h = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                  if (i + h <= r)
                    switch (h) {
                      case 1:
                        a < 128 && (l = a);
                        break;
                      case 2:
                        (192 & (o = e[i + 1])) == 128 &&
                          (u = ((31 & a) << 6) | (63 & o)) > 127 &&
                          (l = u);
                        break;
                      case 3:
                        (o = e[i + 1]),
                          (s = e[i + 2]),
                          (192 & o) == 128 &&
                            (192 & s) == 128 &&
                            (u =
                              ((15 & a) << 12) | ((63 & o) << 6) | (63 & s)) >
                              2047 &&
                            (u < 55296 || u > 57343) &&
                            (l = u);
                        break;
                      case 4:
                        (o = e[i + 1]),
                          (s = e[i + 2]),
                          (f = e[i + 3]),
                          (192 & o) == 128 &&
                            (192 & s) == 128 &&
                            (192 & f) == 128 &&
                            (u =
                              ((15 & a) << 18) |
                              ((63 & o) << 12) |
                              ((63 & s) << 6) |
                              (63 & f)) > 65535 &&
                            u < 1114112 &&
                            (l = u);
                    }
                  null === l
                    ? ((l = 65533), (h = 1))
                    : l > 65535 &&
                      ((l -= 65536),
                      n.push(((l >>> 10) & 1023) | 55296),
                      (l = 56320 | (1023 & l))),
                    n.push(l),
                    (i += h);
                }
                var c = n,
                  p = c.length;
                if (p <= 4096) return String.fromCharCode.apply(String, c);
                for (var g = "", y = 0; y < p; )
                  g += String.fromCharCode.apply(
                    String,
                    c.slice(y, (y += 4096))
                  );
                return g;
              }
              function m(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function w(e, t, r, n, i, o) {
                if (!f.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > i || t < o)
                  throw RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw RangeError("Index out of range");
              }
              function L(e, t, r, n, i, o) {
                if (r + n > e.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function E(e, t, r, n, o) {
                return (
                  (t *= 1),
                  (r >>>= 0),
                  o ||
                    L(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(e, t, r, n, 23, 4),
                  r + 4
                );
              }
              function O(e, t, r, n, o) {
                return (
                  (t *= 1),
                  (r >>>= 0),
                  o ||
                    L(
                      e,
                      t,
                      r,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  i.write(e, t, r, n, 52, 8),
                  r + 8
                );
              }
              (f.prototype.write = function (e, t, r, n) {
                if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                else if (void 0 === r && "string" == typeof t)
                  (n = t), (r = this.length), (t = 0);
                else if (isFinite(t))
                  (t >>>= 0),
                    isFinite(r)
                      ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                      : ((n = r), (r = void 0));
                else
                  throw Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                  );
                var i,
                  o,
                  s,
                  f,
                  u,
                  a,
                  l,
                  h,
                  c = this.length - t;
                if (
                  ((void 0 === r || r > c) && (r = c),
                  (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                )
                  throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var p = !1; ; )
                  switch (n) {
                    case "hex":
                      return (function (e, t, r, n) {
                        r = Number(r) || 0;
                        var i = e.length - r;
                        n ? (n = Number(n)) > i && (n = i) : (n = i);
                        var o = t.length;
                        n > o / 2 && (n = o / 2);
                        for (var s = 0; s < n; ++s) {
                          var f,
                            u = parseInt(t.substr(2 * s, 2), 16);
                          if ((f = u) != f) break;
                          e[r + s] = u;
                        }
                        return s;
                      })(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                      return (
                        (i = t), (o = r), S(B(e, this.length - i), this, i, o)
                      );
                    case "ascii":
                      return (s = t), (f = r), S(x(e), this, s, f);
                    case "latin1":
                    case "binary":
                      return (function (e, t, r, n) {
                        return S(x(t), e, r, n);
                      })(this, e, t, r);
                    case "base64":
                      return (u = t), (a = r), S(_(e), this, u, a);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (
                        (l = t),
                        (h = r),
                        S(
                          (function (e, t) {
                            for (
                              var r, n, i = [], o = 0;
                              o < e.length && !((t -= 2) < 0);
                              ++o
                            )
                              (n = (r = e.charCodeAt(o)) >> 8),
                                i.push(r % 256),
                                i.push(n);
                            return i;
                          })(e, this.length - l),
                          this,
                          l,
                          h
                        )
                      );
                    default:
                      if (p) throw TypeError("Unknown encoding: " + n);
                      (n = ("" + n).toLowerCase()), (p = !0);
                  }
              }),
                (f.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (f.prototype.slice = function (e, t) {
                  var r = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e);
                  var n = this.subarray(e, t);
                  return Object.setPrototypeOf(n, f.prototype), n;
                }),
                (f.prototype.readUIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || m(e, t, this.length);
                  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    n += this[e + o] * i;
                  return n;
                }),
                (f.prototype.readUIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || m(e, t, this.length);
                  for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                    n += this[e + --t] * i;
                  return n;
                }),
                (f.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || m(e, 1, this.length), this[e];
                }),
                (f.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (f.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (f.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      0x1000000 * this[e + 3]
                  );
                }),
                (f.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 4, this.length),
                    0x1000000 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (f.prototype.readIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || m(e, t, this.length);
                  for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                    n += this[e + o] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (f.prototype.readIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || m(e, t, this.length);
                  for (
                    var n = t, i = 1, o = this[e + --n];
                    n > 0 && (i *= 256);

                  )
                    o += this[e + --n] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (f.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || m(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (f.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || m(e, 2, this.length);
                  var r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 0xffff0000 | r : r;
                }),
                (f.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || m(e, 2, this.length);
                  var r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 0xffff0000 | r : r;
                }),
                (f.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (f.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (f.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 4, this.length),
                    i.read(this, e, !0, 23, 4)
                  );
                }),
                (f.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 4, this.length),
                    i.read(this, e, !1, 23, 4)
                  );
                }),
                (f.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 8, this.length),
                    i.read(this, e, !0, 52, 8)
                  );
                }),
                (f.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || m(e, 8, this.length),
                    i.read(this, e, !1, 52, 8)
                  );
                }),
                (f.prototype.writeUIntLE = function (e, t, r, n) {
                  if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    w(this, e, t, r, i, 0);
                  }
                  var o = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++s < r && (o *= 256); )
                    this[t + s] = (e / o) & 255;
                  return t + r;
                }),
                (f.prototype.writeUIntBE = function (e, t, r, n) {
                  if (((e *= 1), (t >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    w(this, e, t, r, i, 0);
                  }
                  var o = r - 1,
                    s = 1;
                  for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                    this[t + o] = (e / s) & 255;
                  return t + r;
                }),
                (f.prototype.writeUInt8 = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (f.prototype.writeUInt16LE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (f.prototype.writeUInt16BE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (f.prototype.writeUInt32LE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 0xffffffff, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (f.prototype.writeUInt32BE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 0xffffffff, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (f.prototype.writeIntLE = function (e, t, r, n) {
                  if (((e *= 1), (t >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    w(this, e, t, r, i - 1, -i);
                  }
                  var o = 0,
                    s = 1,
                    f = 0;
                  for (this[t] = 255 & e; ++o < r && (s *= 256); )
                    e < 0 && 0 === f && 0 !== this[t + o - 1] && (f = 1),
                      (this[t + o] = (((e / s) | 0) - f) & 255);
                  return t + r;
                }),
                (f.prototype.writeIntBE = function (e, t, r, n) {
                  if (((e *= 1), (t >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    w(this, e, t, r, i - 1, -i);
                  }
                  var o = r - 1,
                    s = 1,
                    f = 0;
                  for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                    e < 0 && 0 === f && 0 !== this[t + o + 1] && (f = 1),
                      (this[t + o] = (((e / s) | 0) - f) & 255);
                  return t + r;
                }),
                (f.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (f.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (f.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (f.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 0x7fffffff, -0x80000000),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (f.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e *= 1),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 0x7fffffff, -0x80000000),
                    e < 0 && (e = 0xffffffff + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (f.prototype.writeFloatLE = function (e, t, r) {
                  return E(this, e, t, !0, r);
                }),
                (f.prototype.writeFloatBE = function (e, t, r) {
                  return E(this, e, t, !1, r);
                }),
                (f.prototype.writeDoubleLE = function (e, t, r) {
                  return O(this, e, t, !0, r);
                }),
                (f.prototype.writeDoubleBE = function (e, t, r) {
                  return O(this, e, t, !1, r);
                }),
                (f.prototype.copy = function (e, t, r, n) {
                  if (!f.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (n < 0) throw RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length),
                    e.length - t < n - r && (n = e.length - t + r);
                  var i = n - r;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, r, n);
                  else if (this === e && r < t && t < n)
                    for (var o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
                  else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                  return i;
                }),
                (f.prototype.fill = function (e, t, r, n) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((n = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                      var i,
                        o = e.charCodeAt(0);
                      (("utf8" === n && o < 128) || "latin1" === n) && (e = o);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= t) return this;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (i = t; i < r; ++i) this[i] = e;
                  else {
                    var s = f.isBuffer(e) ? e : f.from(e, n),
                      u = s.length;
                    if (0 === u)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (i = 0; i < r - t; ++i) this[i + t] = s[i % u];
                  }
                  return this;
                });
              var A = /[^+/0-9A-Za-z-_]/g;
              function B(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                  if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319 || s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = (((i - 55296) << 10) | (r - 56320)) + 65536;
                  } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    o.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
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
              function x(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
                return t;
              }
              function _(e) {
                return n.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(A, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function S(e, t, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= t.length) && !(i >= e.length);
                  ++i
                )
                  t[i + r] = e[i];
                return i;
              }
              function T(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var C = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), r = 0;
                  r < 16;
                  ++r
                )
                  for (var n = 16 * r, i = 0; i < 16; ++i)
                    t[n + i] = e[r] + e[i];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, r, n, i) {
                var o,
                  s,
                  f = 8 * i - n - 1,
                  u = (1 << f) - 1,
                  a = u >> 1,
                  l = -7,
                  h = r ? i - 1 : 0,
                  c = r ? -1 : 1,
                  p = e[t + h];
                for (
                  h += c, o = p & ((1 << -l) - 1), p >>= -l, l += f;
                  l > 0;
                  o = 256 * o + e[t + h], h += c, l -= 8
                );
                for (
                  s = o & ((1 << -l) - 1), o >>= -l, l += n;
                  l > 0;
                  s = 256 * s + e[t + h], h += c, l -= 8
                );
                if (0 === o) o = 1 - a;
                else {
                  if (o === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
                  (s += Math.pow(2, n)), (o -= a);
                }
                return (p ? -1 : 1) * s * Math.pow(2, o - n);
              }),
                (t.write = function (e, t, r, n, i, o) {
                  var s,
                    f,
                    u,
                    a = 8 * o - i - 1,
                    l = (1 << a) - 1,
                    h = l >> 1,
                    c = 5960464477539062e-23 * (23 === i),
                    p = n ? 0 : o - 1,
                    g = n ? 1 : -1,
                    y = +(t < 0 || (0 === t && 1 / t < 0));
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((f = +!!isNaN(t)), (s = l))
                      : ((s = Math.floor(Math.log(t) / Math.LN2)),
                        t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                        s + h >= 1
                          ? (t += c / u)
                          : (t += c * Math.pow(2, 1 - h)),
                        t * u >= 2 && (s++, (u /= 2)),
                        s + h >= l
                          ? ((f = 0), (s = l))
                          : s + h >= 1
                          ? ((f = (t * u - 1) * Math.pow(2, i)), (s += h))
                          : ((f = t * Math.pow(2, h - 1) * Math.pow(2, i)),
                            (s = 0)));
                    i >= 8;
                    e[r + p] = 255 & f, p += g, f /= 256, i -= 8
                  );
                  for (
                    s = (s << i) | f, a += i;
                    a > 0;
                    e[r + p] = 255 & s, p += g, s /= 256, a -= 8
                  );
                  e[r + p - g] |= 128 * y;
                });
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var o = (r[t] = { exports: {} }),
            s = !0;
          try {
            e[t](o, o.exports, n), (s = !1);
          } finally {
            s && delete r[t];
          }
          return o.exports;
        }
        (n.ab =
          "/ROOT/node_modules/.pnpm/next@15.4.6_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/"),
          (t.exports = n(72));
      })();
    },
    216485: (e) => {
      "use strict";
      var t,
        { m: r, e: n } = e,
        i = "object" == typeof Reflect ? Reflect : null,
        o =
          i && "function" == typeof i.apply
            ? i.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var s =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function f() {
        f.init.call(this);
      }
      (r.exports = f),
        (r.exports.once = function (e, t) {
          return new Promise(function (r, n) {
            var i, o, s;
            function f(r) {
              e.removeListener(t, u), n(r);
            }
            function u() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", f),
                r([].slice.call(arguments));
            }
            d(e, t, u, { once: !0 }),
              "error" !== t &&
                ((i = e),
                (o = f),
                (s = { once: !0 }),
                "function" == typeof i.on && d(i, "error", o, s));
          });
        }),
        (f.EventEmitter = f),
        (f.prototype._events = void 0),
        (f.prototype._eventsCount = 0),
        (f.prototype._maxListeners = void 0);
      var u = 10;
      function a(e) {
        if ("function" != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function l(e) {
        return void 0 === e._maxListeners
          ? f.defaultMaxListeners
          : e._maxListeners;
      }
      function h(e, t, r, n) {
        if (
          (a(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = o[t] = n ? [r, s] : [s, r])
            : n
            ? s.unshift(r)
            : s.push(r),
          (i = l(e)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var i,
            o,
            s,
            f = Error(
              "Possible EventEmitter memory leak detected. " +
                s.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (f.name = "MaxListenersExceededWarning"),
            (f.emitter = e),
            (f.type = t),
            (f.count = s.length),
            console && console.warn && console.warn(f);
        }
        return e;
      }
      function c() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function p(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = c.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function g(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (e) {
              for (var t = Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : v(i, i.length);
      }
      function y(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function v(e, t) {
        for (var r = Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      function d(e, t, r, n) {
        if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else if ("function" == typeof e.addEventListener)
          e.addEventListener(t, function i(o) {
            n.once && e.removeEventListener(t, i), r(o);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
      }
      Object.defineProperty(f, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return u;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          u = e;
        },
      }),
        (f.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (f.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (f.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (f.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var n = "error" === e,
            i = this._events;
          if (void 0 !== i) n = n && void 0 === i.error;
          else if (!n) return !1;
          if (n) {
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var s,
              f = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw ((f.context = s), f);
          }
          var u = i[e];
          if (void 0 === u) return !1;
          if ("function" == typeof u) o(u, this, t);
          else
            for (var a = u.length, l = v(u, a), r = 0; r < a; ++r)
              o(l[r], this, t);
          return !0;
        }),
        (f.prototype.addListener = function (e, t) {
          return h(this, e, t, !1);
        }),
        (f.prototype.on = f.prototype.addListener),
        (f.prototype.prependListener = function (e, t) {
          return h(this, e, t, !0);
        }),
        (f.prototype.once = function (e, t) {
          return a(t), this.on(e, p(this, e, t)), this;
        }),
        (f.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, p(this, e, t)), this;
        }),
        (f.prototype.removeListener = function (e, t) {
          var r, n, i, o, s;
          if ((a(t), void 0 === (n = this._events) || void 0 === (r = n[e])))
            return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (i = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                (s = r[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (f.prototype.off = f.prototype.removeListener),
        (f.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var i,
              o = Object.keys(r);
            for (n = 0; n < o.length; ++n)
              "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (f.prototype.listeners = function (e) {
          return g(this, e, !0);
        }),
        (f.prototype.rawListeners = function (e) {
          return g(this, e, !1);
        }),
        (f.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : y.call(e, t);
        }),
        (f.prototype.listenerCount = y),
        (f.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    588782: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      function n(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      t.exports = function (e, t, r) {
        var i = (r && r.stringify) || n;
        if ("object" == typeof e && null !== e) {
          var o = t.length + 1;
          if (1 === o) return e;
          var s = Array(o);
          s[0] = i(e);
          for (var f = 1; f < o; f++) s[f] = i(t[f]);
          return s.join(" ");
        }
        if ("string" != typeof e) return e;
        var u = t.length;
        if (0 === u) return e;
        for (
          var a = "", l = 0, h = -1, c = (e && e.length) || 0, p = 0;
          p < c;

        ) {
          if (37 === e.charCodeAt(p) && p + 1 < c) {
            switch (((h = h > -1 ? h : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (l >= u || null == t[l]) break;
                h < p && (a += e.slice(h, p)),
                  (a += Number(t[l])),
                  (h = p + 2),
                  p++;
                break;
              case 105:
                if (l >= u || null == t[l]) break;
                h < p && (a += e.slice(h, p)),
                  (a += Math.floor(Number(t[l]))),
                  (h = p + 2),
                  p++;
                break;
              case 79:
              case 111:
              case 106:
                if (l >= u || void 0 === t[l]) break;
                h < p && (a += e.slice(h, p));
                var g = typeof t[l];
                if ("string" === g) {
                  (a += "'" + t[l] + "'"), (h = p + 2), p++;
                  break;
                }
                if ("function" === g) {
                  (a += t[l].name || "<anonymous>"), (h = p + 2), p++;
                  break;
                }
                (a += i(t[l])), (h = p + 2), p++;
                break;
              case 115:
                if (l >= u) break;
                h < p && (a += e.slice(h, p)),
                  (a += String(t[l])),
                  (h = p + 2),
                  p++;
                break;
              case 37:
                h < p && (a += e.slice(h, p)),
                  (a += "%"),
                  (h = p + 2),
                  p++,
                  l--;
            }
            ++l;
          }
          ++p;
        }
        return -1 === h ? e : (h < c && (a += e.slice(h)), a);
      };
    },
    405879: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      {
        let r = e.r(588782);
        t.exports = n;
        let p =
          (function () {
            function e(e) {
              return void 0 !== e && e;
            }
            try {
              if ("undefined" != typeof globalThis) return globalThis;
              return (
                Object.defineProperty(Object.prototype, "globalThis", {
                  get: function () {
                    return (
                      delete Object.prototype.globalThis,
                      (this.globalThis = this)
                    );
                  },
                  configurable: !0,
                }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {};
        function n(e) {
          var t, r;
          (e = e || {}).browser = e.browser || {};
          let u = e.browser.transmit;
          if (u && "function" != typeof u.send)
            throw Error("pino: transmit option must have a send function");
          let a = e.browser.write || p;
          e.browser.write && (e.browser.asObject = !0);
          let g = e.serializers || {},
            y =
              ((t = e.browser.serialize),
              Array.isArray(t)
                ? t.filter(function (e) {
                    return "!stdSerializers.err" !== e;
                  })
                : !0 === t && Object.keys(g)),
            v = e.browser.serialize;
          Array.isArray(e.browser.serialize) &&
            e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
            (v = !1),
            "function" == typeof a &&
              (a.error = a.fatal = a.warn = a.info = a.debug = a.trace = a),
            !1 === e.enabled && (e.level = "silent");
          let d = e.level || "info",
            b = Object.create(a);
          b.log || (b.log = l),
            Object.defineProperty(b, "levelVal", {
              get: function () {
                return "silent" === this.level
                  ? 1 / 0
                  : this.levels.values[this.level];
              },
            }),
            Object.defineProperty(b, "level", {
              get: function () {
                return this._level;
              },
              set: function (e) {
                if ("silent" !== e && !this.levels.values[e])
                  throw Error("unknown level " + e);
                (this._level = e),
                  i(m, b, "error", "log"),
                  i(m, b, "fatal", "error"),
                  i(m, b, "warn", "error"),
                  i(m, b, "info", "log"),
                  i(m, b, "debug", "log"),
                  i(m, b, "trace", "log");
              },
            });
          let m = {
            transmit: u,
            serialize: y,
            asObject: e.browser.asObject,
            levels: ["error", "fatal", "warn", "info", "debug", "trace"],
            timestamp:
              "function" == typeof (r = e).timestamp
                ? r.timestamp
                : !1 === r.timestamp
                ? h
                : c,
          };
          return (
            (b.levels = n.levels),
            (b.level = d),
            (b.setMaxListeners =
              b.getMaxListeners =
              b.emit =
              b.addListener =
              b.on =
              b.prependListener =
              b.once =
              b.prependOnceListener =
              b.removeListener =
              b.removeAllListeners =
              b.listeners =
              b.listenerCount =
              b.eventNames =
              b.write =
              b.flush =
                l),
            (b.serializers = g),
            (b._serialize = y),
            (b._stdErrSerialize = v),
            (b.child = function (t, r) {
              if (!t) throw Error("missing bindings for child Pino");
              (r = r || {}),
                y && t.serializers && (r.serializers = t.serializers);
              let n = r.serializers;
              if (y && n) {
                var i = Object.assign({}, g, n),
                  a = !0 === e.browser.serialize ? Object.keys(i) : y;
                delete t.serializers, o([t], a, i, this._stdErrSerialize);
              }
              function l(e) {
                (this._childLevel = (0 | e._childLevel) + 1),
                  (this.error = s(e, t, "error")),
                  (this.fatal = s(e, t, "fatal")),
                  (this.warn = s(e, t, "warn")),
                  (this.info = s(e, t, "info")),
                  (this.debug = s(e, t, "debug")),
                  (this.trace = s(e, t, "trace")),
                  i && ((this.serializers = i), (this._serialize = a)),
                  u && (this._logEvent = f([].concat(e._logEvent.bindings, t)));
              }
              return (l.prototype = this), new l(this);
            }),
            u && (b._logEvent = f()),
            b
          );
        }
        function i(e, t, i, s) {
          let u = Object.getPrototypeOf(t);
          (t[i] =
            t.levelVal > t.levels.values[i]
              ? l
              : u[i]
              ? u[i]
              : p[i] || p[s] || l),
            (function (e, t, i) {
              if (e.transmit || t[i] !== l) {
                var s;
                t[i] =
                  ((s = t[i]),
                  function () {
                    let u = e.timestamp(),
                      a = Array(arguments.length),
                      l =
                        Object.getPrototypeOf &&
                        Object.getPrototypeOf(this) === p
                          ? p
                          : this;
                    for (var h = 0; h < a.length; h++) a[h] = arguments[h];
                    if (
                      (e.serialize &&
                        !e.asObject &&
                        o(
                          a,
                          this._serialize,
                          this.serializers,
                          this._stdErrSerialize
                        ),
                      e.asObject
                        ? s.call(
                            l,
                            (function (e, t, i, s) {
                              e._serialize &&
                                o(
                                  i,
                                  e._serialize,
                                  e.serializers,
                                  e._stdErrSerialize
                                );
                              let f = i.slice(),
                                u = f[0],
                                a = {};
                              s && (a.time = s), (a.level = n.levels.values[t]);
                              let l = (0 | e._childLevel) + 1;
                              if (
                                (l < 1 && (l = 1),
                                null !== u && "object" == typeof u)
                              ) {
                                for (; l-- && "object" == typeof f[0]; )
                                  Object.assign(a, f.shift());
                                u = f.length ? r(f.shift(), f) : void 0;
                              } else
                                "string" == typeof u && (u = r(f.shift(), f));
                              return void 0 !== u && (a.msg = u), a;
                            })(this, i, a, u)
                          )
                        : s.apply(l, a),
                      e.transmit)
                    ) {
                      let r = e.transmit.level || t.level,
                        s = n.levels.values[r],
                        l = n.levels.values[i];
                      if (l < s) return;
                      !(function (e, t, r) {
                        let n = t.send,
                          i = t.ts,
                          s = t.methodLevel,
                          u = t.methodValue,
                          a = t.val,
                          l = e._logEvent.bindings;
                        o(
                          r,
                          e._serialize || Object.keys(e.serializers),
                          e.serializers,
                          void 0 === e._stdErrSerialize || e._stdErrSerialize
                        ),
                          (e._logEvent.ts = i),
                          (e._logEvent.messages = r.filter(function (e) {
                            return -1 === l.indexOf(e);
                          })),
                          (e._logEvent.level.label = s),
                          (e._logEvent.level.value = u),
                          n(s, e._logEvent, a),
                          (e._logEvent = f(l));
                      })(
                        this,
                        {
                          ts: u,
                          methodLevel: i,
                          methodValue: l,
                          transmitLevel: r,
                          transmitValue:
                            n.levels.values[e.transmit.level || t.level],
                          send: e.transmit.send,
                          val: t.levelVal,
                        },
                        a
                      );
                    }
                  });
              }
            })(e, t, i);
        }
        function o(e, t, r, i) {
          for (let o in e)
            if (i && e[o] instanceof Error) e[o] = n.stdSerializers.err(e[o]);
            else if ("object" == typeof e[o] && !Array.isArray(e[o]))
              for (let n in e[o])
                t && t.indexOf(n) > -1 && n in r && (e[o][n] = r[n](e[o][n]));
        }
        function s(e, t, r) {
          return function () {
            let n = Array(1 + arguments.length);
            n[0] = t;
            for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
            return e[r].apply(this, n);
          };
        }
        function f(e) {
          return {
            ts: 0,
            messages: [],
            bindings: e || [],
            level: { label: "", value: 0 },
          };
        }
        function u() {
          return {};
        }
        function a(e) {
          return e;
        }
        function l() {}
        function h() {
          return !1;
        }
        function c() {
          return Date.now();
        }
        (n.levels = {
          values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10,
          },
          labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal",
          },
        }),
          (n.stdSerializers = {
            mapHttpRequest: u,
            mapHttpResponse: u,
            wrapRequestSerializer: a,
            wrapResponseSerializer: a,
            wrapErrorSerializer: a,
            req: u,
            res: u,
            err: function (e) {
              let t = {
                type: e.constructor.name,
                msg: e.message,
                stack: e.stack,
              };
              for (let r in e) void 0 === t[r] && (t[r] = e[r]);
              return t;
            },
          }),
          (n.stdTimeFunctions = Object.assign(
            {},
            {
              nullTime: h,
              epochTime: c,
              unixTime: function () {
                return Math.round(Date.now() / 1e3);
              },
              isoTime: function () {
                return new Date(Date.now()).toISOString();
              },
            }
          ));
      }
    },
    973439: [
      (e) => {
        "use strict";
        e.s({}, 973439);
        var t = e.i(405879);
        function r(e) {
          if ("string" != typeof e)
            throw Error(
              "Cannot safe json parse value of type ".concat(typeof e)
            );
          try {
            return JSON.parse(
              e.replace(
                /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
                '$1"$2n"$3'
              ),
              (e, t) =>
                "string" == typeof t && t.match(/^\d+n$/)
                  ? BigInt(t.substring(0, t.length - 1))
                  : t
            );
          } catch (t) {
            return e;
          }
        }
        function n(e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(e, (e, t) =>
                "bigint" == typeof t ? t.toString() + "n" : t
              ) || "";
        }
        e.s({ safeJsonParse: () => r, safeJsonStringify: () => n }, 869740),
          e.s(
            {
              generateChildLogger: () => E,
              generatePlatformLogger: () => O,
              getDefaultLoggerOptions: () => w,
              getLoggerContext: () => L,
            },
            251909
          );
        let i = { level: "info" },
          o = "custom_context";
        class s {
          get value() {
            return this.nodeValue;
          }
          get size() {
            return this.sizeInBytes;
          }
          constructor(e) {
            (this.nodeValue = e),
              (this.sizeInBytes = new TextEncoder().encode(
                this.nodeValue
              ).length),
              (this.next = null);
          }
        }
        class f {
          append(e) {
            let t = new s(e);
            if (t.size > this.maxSizeInBytes)
              throw Error(
                "[LinkedList] Value too big to insert into list: "
                  .concat(e, " with size ")
                  .concat(t.size)
              );
            for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
            this.head ? this.tail && (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              this.lengthInNodes++,
              (this.sizeInBytes += t.size);
          }
          shift() {
            if (!this.head) return;
            let e = this.head;
            (this.head = this.head.next),
              this.head || (this.tail = null),
              this.lengthInNodes--,
              (this.sizeInBytes -= e.size);
          }
          toArray() {
            let e = [],
              t = this.head;
            for (; null !== t; ) e.push(t.value), (t = t.next);
            return e;
          }
          get length() {
            return this.lengthInNodes;
          }
          get size() {
            return this.sizeInBytes;
          }
          toOrderedArray() {
            return Array.from(this);
          }
          [Symbol.iterator]() {
            let e = this.head;
            return {
              next: () => {
                if (!e) return { done: !0, value: null };
                let t = e.value;
                return (e = e.next), { done: !1, value: t };
              },
            };
          }
          constructor(e) {
            (this.head = null),
              (this.tail = null),
              (this.lengthInNodes = 0),
              (this.maxSizeInBytes = e),
              (this.sizeInBytes = 0);
          }
        }
        class u {
          forwardToConsole(e, r) {
            r === t.levels.values.error
              ? console.error(e)
              : r === t.levels.values.warn
              ? console.warn(e)
              : r === t.levels.values.debug
              ? console.debug(e)
              : r === t.levels.values.trace
              ? console.trace(e)
              : console.log(e);
          }
          appendToLogs(e) {
            this.logs.append(
              n({ timestamp: new Date().toISOString(), log: e })
            );
            let t = "string" == typeof e ? JSON.parse(e).level : e.level;
            t >= this.levelValue && this.forwardToConsole(e, t);
          }
          getLogs() {
            return this.logs;
          }
          clearLogs() {
            this.logs = new f(this.MAX_LOG_SIZE_IN_BYTES);
          }
          getLogArray() {
            return Array.from(this.logs);
          }
          logsToBlob(e) {
            let t = this.getLogArray();
            return (
              t.push(n({ extraMetadata: e })),
              new Blob(t, { type: "application/json" })
            );
          }
          constructor(e, r = 1024e3) {
            (this.level = null != e ? e : "error"),
              (this.levelValue = t.levels.values[this.level]),
              (this.MAX_LOG_SIZE_IN_BYTES = r),
              (this.logs = new f(this.MAX_LOG_SIZE_IN_BYTES));
          }
        }
        class a {
          write(e) {
            this.baseChunkLogger.appendToLogs(e);
          }
          getLogs() {
            return this.baseChunkLogger.getLogs();
          }
          clearLogs() {
            this.baseChunkLogger.clearLogs();
          }
          getLogArray() {
            return this.baseChunkLogger.getLogArray();
          }
          logsToBlob(e) {
            return this.baseChunkLogger.logsToBlob(e);
          }
          downloadLogsBlobInBrowser(e) {
            let t = URL.createObjectURL(this.logsToBlob(e)),
              r = document.createElement("a");
            (r.href = t),
              (r.download = "walletconnect-logs-".concat(
                new Date().toISOString(),
                ".txt"
              )),
              document.body.appendChild(r),
              r.click(),
              document.body.removeChild(r),
              URL.revokeObjectURL(t);
          }
          constructor(e, t = 1024e3) {
            this.baseChunkLogger = new u(e, t);
          }
        }
        class l {
          write(e) {
            this.baseChunkLogger.appendToLogs(e);
          }
          getLogs() {
            return this.baseChunkLogger.getLogs();
          }
          clearLogs() {
            this.baseChunkLogger.clearLogs();
          }
          getLogArray() {
            return this.baseChunkLogger.getLogArray();
          }
          logsToBlob(e) {
            return this.baseChunkLogger.logsToBlob(e);
          }
          constructor(e, t = 1024e3) {
            this.baseChunkLogger = new u(e, t);
          }
        }
        var h = Object.defineProperty,
          c = Object.defineProperties,
          p = Object.getOwnPropertyDescriptors,
          g = Object.getOwnPropertySymbols,
          y = Object.prototype.hasOwnProperty,
          v = Object.prototype.propertyIsEnumerable,
          d = (e, t, r) =>
            t in e
              ? h(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r),
          b = (e, t) => {
            for (var r in t || (t = {})) y.call(t, r) && d(e, r, t[r]);
            if (g) for (var r of g(t)) v.call(t, r) && d(e, r, t[r]);
            return e;
          },
          m = (e, t) => c(e, p(t));
        function w(e) {
          return m(b({}, e), {
            level: (null == e ? void 0 : e.level) || i.level,
          });
        }
        function L(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
          return typeof e.bindings > "u"
            ? (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : o;
                return e[t] || "";
              })(e, t)
            : e.bindings().context || "";
        }
        function E(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o,
            n = (function (e, t) {
              let r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : o,
                n = L(e, r);
              return n.trim() ? "".concat(n, "/").concat(t) : t;
            })(e, t, r);
          return (function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : o;
            return (e[r] = t), e;
          })(e.child({ context: n }), n, r);
        }
        function O(e) {
          return "u" > typeof e.loggerOverride &&
            "string" != typeof e.loggerOverride
            ? { logger: e.loggerOverride, chunkLoggerController: null }
            : "u" > typeof window
            ? (function (e) {
                var r, n;
                let i = new a(
                  null == (r = e.opts) ? void 0 : r.level,
                  e.maxSizeInBytes
                );
                return {
                  logger: (0, t.default)(
                    m(b({}, e.opts), {
                      level: "trace",
                      browser: m(
                        b({}, null == (n = e.opts) ? void 0 : n.browser),
                        { write: (e) => i.write(e) }
                      ),
                    })
                  ),
                  chunkLoggerController: i,
                };
              })(e)
            : (function (e) {
                var r;
                let n = new l(
                  null == (r = e.opts) ? void 0 : r.level,
                  e.maxSizeInBytes
                );
                return {
                  logger: (0, t.default)(
                    m(b({}, e.opts), { level: "trace" }),
                    n
                  ),
                  chunkLoggerController: n,
                };
              })(e);
        }
      },
      [869740, 251909],
    ],
  },
]);

//# sourceMappingURL=00c443ed1ca00959.js.map
