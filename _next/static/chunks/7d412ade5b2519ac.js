(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    846514: (e) => {
      "use strict";
      var { m: t, e: r } = e,
        n = e.r(900398).Buffer;
      t.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var i = 0; i < e.length; i++) {
          var s = e.charAt(i),
            o = s.charCodeAt(0);
          if (255 !== t[o]) throw TypeError(s + " is ambiguous");
          t[o] = i;
        }
        var a = e.length,
          c = e.charAt(0),
          u = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function d(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return n.alloc(0);
          for (var r = 0, i = 0, s = 0; e[r] === c; ) i++, r++;
          for (
            var o = ((e.length - r) * u + 1) >>> 0, l = new Uint8Array(o);
            r < e.length;

          ) {
            var d = e.charCodeAt(r);
            if (d > 255) return;
            var h = t[d];
            if (255 === h) return;
            for (var f = 0, p = o - 1; (0 !== h || f < s) && -1 !== p; p--, f++)
              (h += (a * l[p]) >>> 0),
                (l[p] = h % 256 >>> 0),
                (h = (h / 256) >>> 0);
            if (0 !== h) throw Error("Non-zero carry");
            (s = f), r++;
          }
          for (var g = o - s; g !== o && 0 === l[g]; ) g++;
          var y = n.allocUnsafe(i + (o - g));
          y.fill(0, 0, i);
          for (var m = i; g !== o; ) y[m++] = l[g++];
          return y;
        }
        return {
          encode: function (t) {
            if (
              ((Array.isArray(t) || t instanceof Uint8Array) && (t = n.from(t)),
              !n.isBuffer(t))
            )
              throw TypeError("Expected Buffer");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, s = 0, o = t.length; s !== o && 0 === t[s]; )
              s++, r++;
            for (
              var u = ((o - s) * l + 1) >>> 0, d = new Uint8Array(u);
              s !== o;

            ) {
              for (
                var h = t[s], f = 0, p = u - 1;
                (0 !== h || f < i) && -1 !== p;
                p--, f++
              )
                (h += (256 * d[p]) >>> 0),
                  (d[p] = h % a >>> 0),
                  (h = (h / a) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (i = f), s++;
            }
            for (var g = u - i; g !== u && 0 === d[g]; ) g++;
            for (var y = c.repeat(r); g < u; ++g) y += e.charAt(d[g]);
            return y;
          },
          decodeUnsafe: d,
          decode: function (e) {
            var t = d(e);
            if (t) return t;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    389765: (e) => {
      var { m: t, e: r } = e;
      t.exports = e.r(846514)(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    636323: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      function n(e, t, r) {
        return t <= e && e <= r;
      }
      function i(e) {
        if (void 0 === e) return {};
        if (e === Object(e)) return e;
        throw TypeError("Could not convert argument to dictionary");
      }
      function s(e) {
        this.tokens = [].slice.call(e);
      }
      function o(e, t) {
        if (e) throw TypeError("Decoder error");
        return t || 65533;
      }
      s.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (e) {
          if (Array.isArray(e)) for (; e.length; ) this.tokens.unshift(e.pop());
          else this.tokens.unshift(e);
        },
        push: function (e) {
          if (Array.isArray(e)) for (; e.length; ) this.tokens.push(e.shift());
          else this.tokens.push(e);
        },
      };
      var a = "utf-8";
      function c(e, t) {
        if (!(this instanceof c)) return new c(e, t);
        if ((e = void 0 !== e ? String(e).toLowerCase() : a) !== a)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (t = i(t)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = !!t.fatal),
          (this._ignoreBOM = !!t.ignoreBOM),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
      }
      function u(e, t) {
        if (!(this instanceof u)) return new u(e, t);
        if ((e = void 0 !== e ? String(e).toLowerCase() : a) !== a)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (t = i(t)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: !!t.fatal }),
          Object.defineProperty(this, "encoding", { value: "utf-8" });
      }
      function l(e) {
        var t = e.fatal,
          r = 0,
          i = 0,
          s = 0,
          a = 128,
          c = 191;
        this.handler = function (e, u) {
          if (-1 === u && 0 !== s) return (s = 0), o(t);
          if (-1 === u) return -1;
          if (0 === s) {
            if (n(u, 0, 127)) return u;
            if (n(u, 194, 223)) (s = 1), (r = u - 192);
            else if (n(u, 224, 239))
              224 === u && (a = 160),
                237 === u && (c = 159),
                (s = 2),
                (r = u - 224);
            else {
              if (!n(u, 240, 244)) return o(t);
              240 === u && (a = 144),
                244 === u && (c = 143),
                (s = 3),
                (r = u - 240);
            }
            return (r <<= 6 * s), null;
          }
          if (!n(u, a, c))
            return (r = s = i = 0), (a = 128), (c = 191), e.prepend(u), o(t);
          if (
            ((a = 128),
            (c = 191),
            (i += 1),
            (r += (u - 128) << (6 * (s - i))),
            i !== s)
          )
            return null;
          var l = r;
          return (r = s = i = 0), l;
        };
      }
      function d(e) {
        e.fatal,
          (this.handler = function (e, t) {
            if (-1 === t) return -1;
            if (n(t, 0, 127)) return t;
            n(t, 128, 2047)
              ? ((r = 1), (i = 192))
              : n(t, 2048, 65535)
              ? ((r = 2), (i = 224))
              : n(t, 65536, 1114111) && ((r = 3), (i = 240));
            for (var r, i, s = [(t >> (6 * r)) + i]; r > 0; ) {
              var o = t >> (6 * (r - 1));
              s.push(128 | (63 & o)), (r -= 1);
            }
            return s;
          });
      }
      (c.prototype = {
        decode: function (e, t) {
          (r =
            "object" == typeof e && e instanceof ArrayBuffer
              ? new Uint8Array(e)
              : "object" == typeof e &&
                "buffer" in e &&
                e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              : new Uint8Array(0)),
            (t = i(t)),
            this._streaming ||
              ((this._decoder = new l({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = !!t.stream);
          for (
            var r, n, o = new s(r), a = [];
            !o.endOfStream() && -1 !== (n = this._decoder.handler(o, o.read()));

          )
            null !== n && (Array.isArray(n) ? a.push.apply(a, n) : a.push(n));
          if (!this._streaming) {
            do {
              if (-1 === (n = this._decoder.handler(o, o.read()))) break;
              if (null === n) continue;
              Array.isArray(n) ? a.push.apply(a, n) : a.push(n);
            } while (!o.endOfStream());
            this._decoder = null;
          }
          !a.length ||
            -1 === ["utf-8"].indexOf(this.encoding) ||
            this._ignoreBOM ||
            this._BOMseen ||
            (65279 === a[0]
              ? ((this._BOMseen = !0), a.shift())
              : (this._BOMseen = !0));
          for (var c = "", u = 0; u < a.length; ++u) {
            var d = a[u];
            d <= 65535
              ? (c += String.fromCharCode(d))
              : ((d -= 65536),
                (c += String.fromCharCode(
                  (d >> 10) + 55296,
                  (1023 & d) + 56320
                )));
          }
          return c;
        },
      }),
        (u.prototype = {
          encode: function (e, t) {
            (e = e ? String(e) : ""),
              (t = i(t)),
              this._streaming || (this._encoder = new d(this._options)),
              (this._streaming = !!t.stream);
            for (
              var r,
                n = [],
                o = new s(
                  (function (e) {
                    for (
                      var t = String(e), r = t.length, n = 0, i = [];
                      n < r;

                    ) {
                      var s = t.charCodeAt(n);
                      if (s < 55296 || s > 57343) i.push(s);
                      else if (56320 <= s && s <= 57343) i.push(65533);
                      else if (55296 <= s && s <= 56319)
                        if (n === r - 1) i.push(65533);
                        else {
                          var o = e.charCodeAt(n + 1);
                          if (56320 <= o && o <= 57343) {
                            var a = 1023 & s,
                              c = 1023 & o;
                            i.push(65536 + (a << 10) + c), (n += 1);
                          } else i.push(65533);
                        }
                      n += 1;
                    }
                    return i;
                  })(e)
                );
              !o.endOfStream() &&
              -1 !== (r = this._encoder.handler(o, o.read()));

            )
              Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
            if (!this._streaming) {
              for (; -1 !== (r = this._encoder.handler(o, o.read())); )
                Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
              this._encoder = null;
            }
            return new Uint8Array(n);
          },
        }),
        (r.TextEncoder = u),
        (r.TextDecoder = c);
    },
    884551: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      {
        var n = e.i(710841),
          i =
            (e.e && e.e.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    });
                }
              : function (e, t, r, n) {
                  void 0 === n && (n = r), (e[n] = t[r]);
                }),
          s =
            (e.e && e.e.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (e.e && e.e.__decorate) ||
            function (e, t, r, n) {
              var i,
                s = arguments.length,
                o =
                  s < 3
                    ? t
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, r))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                o = Reflect.decorate(e, t, r, n);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (i = e[a]) &&
                    (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
              return s > 3 && o && Object.defineProperty(t, r, o), o;
            },
          a =
            (e.e && e.e.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.hasOwnProperty.call(e, r) &&
                    i(t, e, r);
              return s(t, e), t;
            },
          c =
            (e.e && e.e.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.deserializeUnchecked =
            r.deserialize =
            r.serialize =
            r.BinaryReader =
            r.BinaryWriter =
            r.BorshError =
            r.baseDecode =
            r.baseEncode =
              void 0);
        let t = c(e.r(433767)),
          g = c(e.r(389765)),
          y = a(e.r(636323)),
          m = new (
            "function" != typeof TextDecoder ? y.TextDecoder : TextDecoder
          )("utf-8", { fatal: !0 });
        (r.baseEncode = function (e) {
          return (
            "string" == typeof e && (e = n.Buffer.from(e, "utf8")),
            g.default.encode(n.Buffer.from(e))
          );
        }),
          (r.baseDecode = function (e) {
            return n.Buffer.from(g.default.decode(e));
          });
        class b extends Error {
          addToFieldPath(e) {
            this.fieldPath.splice(0, 0, e),
              (this.message =
                this.originalMessage + ": " + this.fieldPath.join("."));
          }
          constructor(e) {
            super(e), (this.fieldPath = []), (this.originalMessage = e);
          }
        }
        r.BorshError = b;
        class k {
          maybeResize() {
            this.buf.length < 16 + this.length &&
              (this.buf = n.Buffer.concat([this.buf, n.Buffer.alloc(1024)]));
          }
          writeU8(e) {
            this.maybeResize(),
              this.buf.writeUInt8(e, this.length),
              (this.length += 1);
          }
          writeU16(e) {
            this.maybeResize(),
              this.buf.writeUInt16LE(e, this.length),
              (this.length += 2);
          }
          writeU32(e) {
            this.maybeResize(),
              this.buf.writeUInt32LE(e, this.length),
              (this.length += 4);
          }
          writeU64(e) {
            this.maybeResize(),
              this.writeBuffer(
                n.Buffer.from(new t.default(e).toArray("le", 8))
              );
          }
          writeU128(e) {
            this.maybeResize(),
              this.writeBuffer(
                n.Buffer.from(new t.default(e).toArray("le", 16))
              );
          }
          writeU256(e) {
            this.maybeResize(),
              this.writeBuffer(
                n.Buffer.from(new t.default(e).toArray("le", 32))
              );
          }
          writeU512(e) {
            this.maybeResize(),
              this.writeBuffer(
                n.Buffer.from(new t.default(e).toArray("le", 64))
              );
          }
          writeBuffer(e) {
            (this.buf = n.Buffer.concat([
              n.Buffer.from(this.buf.subarray(0, this.length)),
              e,
              n.Buffer.alloc(1024),
            ])),
              (this.length += e.length);
          }
          writeString(e) {
            this.maybeResize();
            let t = n.Buffer.from(e, "utf8");
            this.writeU32(t.length), this.writeBuffer(t);
          }
          writeFixedArray(e) {
            this.writeBuffer(n.Buffer.from(e));
          }
          writeArray(e, t) {
            for (let r of (this.maybeResize(), this.writeU32(e.length), e))
              this.maybeResize(), t(r);
          }
          toArray() {
            return this.buf.subarray(0, this.length);
          }
          constructor() {
            (this.buf = n.Buffer.alloc(1024)), (this.length = 0);
          }
        }
        function u(e, t, r) {
          let n = r.value;
          r.value = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            try {
              return n.apply(this, t);
            } catch (e) {
              if (
                e instanceof RangeError &&
                ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(
                  e.code
                ) >= 0
              )
                throw new b("Reached the end of buffer when deserializing");
              throw e;
            }
          };
        }
        r.BinaryWriter = k;
        class w {
          readU8() {
            let e = this.buf.readUInt8(this.offset);
            return (this.offset += 1), e;
          }
          readU16() {
            let e = this.buf.readUInt16LE(this.offset);
            return (this.offset += 2), e;
          }
          readU32() {
            let e = this.buf.readUInt32LE(this.offset);
            return (this.offset += 4), e;
          }
          readU64() {
            let e = this.readBuffer(8);
            return new t.default(e, "le");
          }
          readU128() {
            let e = this.readBuffer(16);
            return new t.default(e, "le");
          }
          readU256() {
            let e = this.readBuffer(32);
            return new t.default(e, "le");
          }
          readU512() {
            let e = this.readBuffer(64);
            return new t.default(e, "le");
          }
          readBuffer(e) {
            if (this.offset + e > this.buf.length)
              throw new b(
                "Expected buffer length ".concat(e, " isn't within bounds")
              );
            let t = this.buf.slice(this.offset, this.offset + e);
            return (this.offset += e), t;
          }
          readString() {
            let e = this.readU32(),
              t = this.readBuffer(e);
            try {
              return m.decode(t);
            } catch (e) {
              throw new b("Error decoding UTF-8 string: ".concat(e));
            }
          }
          readFixedArray(e) {
            return new Uint8Array(this.readBuffer(e));
          }
          readArray(e) {
            let t = this.readU32(),
              r = [];
            for (let n = 0; n < t; ++n) r.push(e());
            return r;
          }
          constructor(e) {
            (this.buf = e), (this.offset = 0);
          }
        }
        function l(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function d(e, t, r, n, i) {
          try {
            if ("string" == typeof n) i["write".concat(l(n))](r);
            else if (n instanceof Array)
              if ("number" == typeof n[0]) {
                if (r.length !== n[0])
                  throw new b(
                    "Expecting byte array of length "
                      .concat(n[0], ", but got ")
                      .concat(r.length, " bytes")
                  );
                i.writeFixedArray(r);
              } else if (2 === n.length && "number" == typeof n[1]) {
                if (r.length !== n[1])
                  throw new b(
                    "Expecting byte array of length "
                      .concat(n[1], ", but got ")
                      .concat(r.length, " bytes")
                  );
                for (let t = 0; t < n[1]; t++) d(e, null, r[t], n[0], i);
              } else
                i.writeArray(r, (r) => {
                  d(e, t, r, n[0], i);
                });
            else if (void 0 !== n.kind)
              switch (n.kind) {
                case "option":
                  null == r
                    ? i.writeU8(0)
                    : (i.writeU8(1), d(e, t, r, n.type, i));
                  break;
                case "map":
                  i.writeU32(r.size),
                    r.forEach((r, s) => {
                      d(e, t, s, n.key, i), d(e, t, r, n.value, i);
                    });
                  break;
                default:
                  throw new b("FieldType ".concat(n, " unrecognized"));
              }
            else h(e, r, i);
          } catch (e) {
            throw (e instanceof b && e.addToFieldPath(t), e);
          }
        }
        function h(e, t, r) {
          if ("function" == typeof t.borshSerialize)
            return void t.borshSerialize(r);
          let n = e.get(t.constructor);
          if (!n)
            throw new b(
              "Class ".concat(t.constructor.name, " is missing in schema")
            );
          if ("struct" === n.kind)
            n.fields.map((n) => {
              let [i, s] = n;
              d(e, i, t[i], s, r);
            });
          else if ("enum" === n.kind) {
            let i = t[n.field];
            for (let s = 0; s < n.values.length; ++s) {
              let [o, a] = n.values[s];
              if (o === i) {
                r.writeU8(s), d(e, o, t[o], a, r);
                break;
              }
            }
          } else
            throw new b(
              "Unexpected schema kind: "
                .concat(n.kind, " for ")
                .concat(t.constructor.name)
            );
        }
        function f(e, t, r, n) {
          try {
            if ("string" == typeof r) return n["read".concat(l(r))]();
            if (r instanceof Array)
              if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
              else {
                if ("number" != typeof r[1])
                  return n.readArray(() => f(e, t, r[0], n));
                let i = [];
                for (let t = 0; t < r[1]; t++) i.push(f(e, null, r[0], n));
                return i;
              }
            if ("option" === r.kind) {
              if (n.readU8()) return f(e, t, r.type, n);
              return;
            }
            if ("map" === r.kind) {
              let i = new Map(),
                s = n.readU32();
              for (let o = 0; o < s; o++) {
                let s = f(e, t, r.key, n),
                  o = f(e, t, r.value, n);
                i.set(s, o);
              }
              return i;
            }
            return p(e, r, n);
          } catch (e) {
            throw (e instanceof b && e.addToFieldPath(t), e);
          }
        }
        function p(e, t, r) {
          if ("function" == typeof t.borshDeserialize)
            return t.borshDeserialize(r);
          let n = e.get(t);
          if (!n) throw new b("Class ".concat(t.name, " is missing in schema"));
          if ("struct" === n.kind) {
            let n = {};
            for (let [i, s] of e.get(t).fields) n[i] = f(e, i, s, r);
            return new t(n);
          }
          if ("enum" === n.kind) {
            let i = r.readU8();
            if (i >= n.values.length)
              throw new b("Enum index: ".concat(i, " is out of range"));
            let [s, o] = n.values[i],
              a = f(e, s, o, r);
            return new t({ [s]: a });
          }
          throw new b(
            "Unexpected schema kind: "
              .concat(n.kind, " for ")
              .concat(t.constructor.name)
          );
        }
        o([u], w.prototype, "readU8", null),
          o([u], w.prototype, "readU16", null),
          o([u], w.prototype, "readU32", null),
          o([u], w.prototype, "readU64", null),
          o([u], w.prototype, "readU128", null),
          o([u], w.prototype, "readU256", null),
          o([u], w.prototype, "readU512", null),
          o([u], w.prototype, "readString", null),
          o([u], w.prototype, "readFixedArray", null),
          o([u], w.prototype, "readArray", null),
          (r.BinaryReader = w),
          (r.serialize = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : k,
              n = new r();
            return h(e, t, n), n.toArray();
          }),
          (r.deserialize = function (e, t, r) {
            let n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : w,
              i = new n(r),
              s = p(e, t, i);
            if (i.offset < r.length)
              throw new b(
                "Unexpected ".concat(
                  r.length - i.offset,
                  " bytes after deserialized data"
                )
              );
            return s;
          }),
          (r.deserializeUnchecked = function (e, t, r) {
            let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : w;
            return p(e, t, new n(r));
          });
      }
    },
    33e3: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.s16 =
            r.s8 =
            r.nu64be =
            r.u48be =
            r.u40be =
            r.u32be =
            r.u24be =
            r.u16be =
            r.nu64 =
            r.u48 =
            r.u40 =
            r.u32 =
            r.u24 =
            r.u16 =
            r.u8 =
            r.offset =
            r.greedy =
            r.Constant =
            r.UTF8 =
            r.CString =
            r.Blob =
            r.Boolean =
            r.BitField =
            r.BitStructure =
            r.VariantLayout =
            r.Union =
            r.UnionLayoutDiscriminator =
            r.UnionDiscriminator =
            r.Structure =
            r.Sequence =
            r.DoubleBE =
            r.Double =
            r.FloatBE =
            r.Float =
            r.NearInt64BE =
            r.NearInt64 =
            r.NearUInt64BE =
            r.NearUInt64 =
            r.IntBE =
            r.Int =
            r.UIntBE =
            r.UInt =
            r.OffsetLayout =
            r.GreedyCount =
            r.ExternalLayout =
            r.bindConstructorLayout =
            r.nameWithProperty =
            r.Layout =
            r.uint8ArrayToBuffer =
            r.checkUint8Array =
              void 0),
          (r.constant =
            r.utf8 =
            r.cstr =
            r.blob =
            r.unionLayoutDiscriminator =
            r.union =
            r.seq =
            r.bits =
            r.struct =
            r.f64be =
            r.f64 =
            r.f32be =
            r.f32 =
            r.ns64be =
            r.s48be =
            r.s40be =
            r.s32be =
            r.s24be =
            r.s16be =
            r.ns64 =
            r.s48 =
            r.s40 =
            r.s32 =
            r.s24 =
              void 0);
        let t = e.r(523966);
        function n(e) {
          if (!(e instanceof Uint8Array))
            throw TypeError("b must be a Uint8Array");
        }
        function i(e) {
          return n(e), t.Buffer.from(e.buffer, e.byteOffset, e.length);
        }
        (r.checkUint8Array = n), (r.uint8ArrayToBuffer = i);
        class u {
          makeDestinationObject() {
            return {};
          }
          getSpan(e, t) {
            if (0 > this.span) throw RangeError("indeterminate span");
            return this.span;
          }
          replicate(e) {
            let t = Object.create(this.constructor.prototype);
            return Object.assign(t, this), (t.property = e), t;
          }
          fromArray(e) {}
          constructor(e, t) {
            if (!Number.isInteger(e))
              throw TypeError("span must be an integer");
            (this.span = e), (this.property = t);
          }
        }
        function s(e, t) {
          return t.property ? e + "[" + t.property + "]" : e;
        }
        (r.Layout = u),
          (r.nameWithProperty = s),
          (r.bindConstructorLayout = function (e, t) {
            if ("function" != typeof e)
              throw TypeError("Class must be constructor");
            if (Object.prototype.hasOwnProperty.call(e, "layout_"))
              throw Error("Class is already bound to a layout");
            if (!(t && t instanceof u))
              throw TypeError("layout must be a Layout");
            if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
              throw Error("layout is already bound to a constructor");
            (e.layout_ = t),
              (t.boundConstructor_ = e),
              (t.makeDestinationObject = () => new e()),
              Object.defineProperty(e.prototype, "encode", {
                value(e, r) {
                  return t.encode(this, e, r);
                },
                writable: !0,
              }),
              Object.defineProperty(e, "decode", {
                value: (e, r) => t.decode(e, r),
                writable: !0,
              });
          });
        class l extends u {
          isCount() {
            throw Error("ExternalLayout is abstract");
          }
        }
        r.ExternalLayout = l;
        class d extends l {
          isCount() {
            return !0;
          }
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return n(e), Math.floor((e.length - t) / this.elementSpan);
          }
          encode(e, t, r) {
            return 0;
          }
          constructor(e = 1, t) {
            if (!Number.isInteger(e) || 0 >= e)
              throw TypeError("elementSpan must be a (positive) integer");
            super(-1, t), (this.elementSpan = e);
          }
        }
        r.GreedyCount = d;
        class h extends l {
          isCount() {
            return this.layout instanceof f || this.layout instanceof p;
          }
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return this.layout.decode(e, t + this.offset);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return this.layout.encode(e, t, r + this.offset);
          }
          constructor(e, t = 0, r) {
            if (!(e instanceof u)) throw TypeError("layout must be a Layout");
            if (!Number.isInteger(t))
              throw TypeError("offset must be integer or undefined");
            super(e.span, r || e.property),
              (this.layout = e),
              (this.offset = t);
          }
        }
        r.OffsetLayout = h;
        class f extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readUIntLE(t, this.span);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeUIntLE(e, r, this.span), this.span;
          }
          constructor(e, t) {
            if ((super(e, t), 6 < this.span))
              throw RangeError("span must not exceed 6 bytes");
          }
        }
        r.UInt = f;
        class p extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readUIntBE(t, this.span);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeUIntBE(e, r, this.span), this.span;
          }
          constructor(e, t) {
            if ((super(e, t), 6 < this.span))
              throw RangeError("span must not exceed 6 bytes");
          }
        }
        r.UIntBE = p;
        class g extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readIntLE(t, this.span);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeIntLE(e, r, this.span), this.span;
          }
          constructor(e, t) {
            if ((super(e, t), 6 < this.span))
              throw RangeError("span must not exceed 6 bytes");
          }
        }
        r.Int = g;
        class y extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readIntBE(t, this.span);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeIntBE(e, r, this.span), this.span;
          }
          constructor(e, t) {
            if ((super(e, t), 6 < this.span))
              throw RangeError("span must not exceed 6 bytes");
          }
        }
        function o(e) {
          let t = Math.floor(e / 0x100000000);
          return { hi32: t, lo32: e - 0x100000000 * t };
        }
        function a(e, t) {
          return 0x100000000 * e + t;
        }
        r.IntBE = y;
        class m extends u {
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = i(e),
              n = r.readUInt32LE(t);
            return a(r.readUInt32LE(t + 4), n);
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = o(e),
              s = i(t);
            return (
              s.writeUInt32LE(n.lo32, r), s.writeUInt32LE(n.hi32, r + 4), 8
            );
          }
          constructor(e) {
            super(8, e);
          }
        }
        r.NearUInt64 = m;
        class b extends u {
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = i(e);
            return a(r.readUInt32BE(t), r.readUInt32BE(t + 4));
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = o(e),
              s = i(t);
            return (
              s.writeUInt32BE(n.hi32, r), s.writeUInt32BE(n.lo32, r + 4), 8
            );
          }
          constructor(e) {
            super(8, e);
          }
        }
        r.NearUInt64BE = b;
        class k extends u {
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = i(e),
              n = r.readUInt32LE(t);
            return a(r.readInt32LE(t + 4), n);
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = o(e),
              s = i(t);
            return s.writeUInt32LE(n.lo32, r), s.writeInt32LE(n.hi32, r + 4), 8;
          }
          constructor(e) {
            super(8, e);
          }
        }
        r.NearInt64 = k;
        class w extends u {
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = i(e);
            return a(r.readInt32BE(t), r.readUInt32BE(t + 4));
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = o(e),
              s = i(t);
            return s.writeInt32BE(n.hi32, r), s.writeUInt32BE(n.lo32, r + 4), 8;
          }
          constructor(e) {
            super(8, e);
          }
        }
        r.NearInt64BE = w;
        class S extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readFloatLE(t);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeFloatLE(e, r), 4;
          }
          constructor(e) {
            super(4, e);
          }
        }
        r.Float = S;
        class v extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readFloatBE(t);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeFloatBE(e, r), 4;
          }
          constructor(e) {
            super(4, e);
          }
        }
        r.FloatBE = v;
        class I extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readDoubleLE(t);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeDoubleLE(e, r), 8;
          }
          constructor(e) {
            super(8, e);
          }
        }
        r.Double = I;
        class _ extends u {
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return i(e).readDoubleBE(t);
          }
          encode(e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return i(t).writeDoubleBE(e, r), 8;
          }
          constructor(e) {
            super(8, e);
          }
        }
        r.DoubleBE = _;
        class E extends u {
          getSpan(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            if (0 <= this.span) return this.span;
            let r = 0,
              n = this.count;
            if (
              (n instanceof l && (n = n.decode(e, t)),
              0 < this.elementLayout.span)
            )
              r = n * this.elementLayout.span;
            else {
              let i = 0;
              for (; i < n; ) (r += this.elementLayout.getSpan(e, t + r)), ++i;
            }
            return r;
          }
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = [],
              n = 0,
              i = this.count;
            for (i instanceof l && (i = i.decode(e, t)); n < i; )
              r.push(this.elementLayout.decode(e, t)),
                (t += this.elementLayout.getSpan(e, t)),
                (n += 1);
            return r;
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = this.elementLayout,
              i = e.reduce((e, i) => e + n.encode(i, t, r + e), 0);
            return (
              this.count instanceof l && this.count.encode(e.length, t, r), i
            );
          }
          constructor(e, t, r) {
            if (!(e instanceof u))
              throw TypeError("elementLayout must be a Layout");
            if (
              !(
                (t instanceof l && t.isCount()) ||
                (Number.isInteger(t) && 0 <= t)
              )
            )
              throw TypeError(
                "count must be non-negative integer or an unsigned integer ExternalLayout"
              );
            let n = -1;
            t instanceof l || !(0 < e.span) || (n = t * e.span),
              super(n, r),
              (this.elementLayout = e),
              (this.count = t);
          }
        }
        r.Sequence = E;
        class A extends u {
          getSpan(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            if (0 <= this.span) return this.span;
            let r = 0;
            try {
              r = this.fields.reduce((r, n) => {
                let i = n.getSpan(e, t);
                return (t += i), r + i;
              }, 0);
            } catch (e) {
              throw RangeError("indeterminate span");
            }
            return r;
          }
          decode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            n(e);
            let r = this.makeDestinationObject();
            for (let n of this.fields)
              if (
                (void 0 !== n.property && (r[n.property] = n.decode(e, t)),
                (t += n.getSpan(e, t)),
                this.decodePrefixes && e.length === t)
              )
                break;
            return r;
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = r,
              i = 0,
              s = 0;
            for (let n of this.fields) {
              let o = n.span;
              if (((s = 0 < o ? o : 0), void 0 !== n.property)) {
                let i = e[n.property];
                void 0 !== i &&
                  ((s = n.encode(i, t, r)), 0 > o && (o = n.getSpan(t, r)));
              }
              (i = r), (r += o);
            }
            return i + s - n;
          }
          fromArray(e) {
            let t = this.makeDestinationObject();
            for (let r of this.fields)
              void 0 !== r.property &&
                0 < e.length &&
                (t[r.property] = e.shift());
            return t;
          }
          layoutFor(e) {
            if ("string" != typeof e)
              throw TypeError("property must be string");
            for (let t of this.fields) if (t.property === e) return t;
          }
          offsetOf(e) {
            if ("string" != typeof e)
              throw TypeError("property must be string");
            let t = 0;
            for (let r of this.fields) {
              if (r.property === e) return t;
              0 > r.span ? (t = -1) : 0 <= t && (t += r.span);
            }
          }
          constructor(e, t, r) {
            if (
              !(Array.isArray(e) && e.reduce((e, t) => e && t instanceof u, !0))
            )
              throw TypeError("fields must be array of Layout instances");
            for (let n of ("boolean" == typeof t &&
              void 0 === r &&
              ((r = t), (t = void 0)),
            e))
              if (0 > n.span && void 0 === n.property)
                throw Error(
                  "fields cannot contain unnamed variable-length layout"
                );
            let n = -1;
            try {
              n = e.reduce((e, t) => e + t.getSpan(), 0);
            } catch (e) {}
            super(n, t), (this.fields = e), (this.decodePrefixes = !!r);
          }
        }
        r.Structure = A;
        class B {
          decode(e, t) {
            throw Error("UnionDiscriminator is abstract");
          }
          encode(e, t, r) {
            throw Error("UnionDiscriminator is abstract");
          }
          constructor(e) {
            this.property = e;
          }
        }
        r.UnionDiscriminator = B;
        class x extends B {
          decode(e, t) {
            return this.layout.decode(e, t);
          }
          encode(e, t, r) {
            return this.layout.encode(e, t, r);
          }
          constructor(e, t) {
            if (!(e instanceof l && e.isCount()))
              throw TypeError(
                "layout must be an unsigned integer ExternalLayout"
              );
            super(t || e.property || "variant"), (this.layout = e);
          }
        }
        r.UnionLayoutDiscriminator = x;
        class P extends u {
          getSpan(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            if (0 <= this.span) return this.span;
            let r = this.getVariant(e, t);
            if (!r)
              throw Error("unable to determine span for unrecognized variant");
            return r.getSpan(e, t);
          }
          defaultGetSourceVariant(e) {
            if (
              Object.prototype.hasOwnProperty.call(
                e,
                this.discriminator.property
              )
            ) {
              if (
                this.defaultLayout &&
                this.defaultLayout.property &&
                Object.prototype.hasOwnProperty.call(
                  e,
                  this.defaultLayout.property
                )
              )
                return;
              let t = this.registry[e[this.discriminator.property]];
              if (
                t &&
                (!t.layout ||
                  (t.property &&
                    Object.prototype.hasOwnProperty.call(e, t.property)))
              )
                return t;
            } else
              for (let t in this.registry) {
                let r = this.registry[t];
                if (
                  r.property &&
                  Object.prototype.hasOwnProperty.call(e, r.property)
                )
                  return r;
              }
            throw Error("unable to infer src variant");
          }
          decode(e) {
            let t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = this.discriminator,
              i = n.decode(e, r),
              s = this.registry[i];
            if (void 0 === s) {
              let s = this.defaultLayout,
                o = 0;
              this.usesPrefixDiscriminator && (o = n.layout.span),
                ((t = this.makeDestinationObject())[n.property] = i),
                (t[s.property] = s.decode(e, r + o));
            } else t = s.decode(e, r);
            return t;
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = this.getSourceVariant(e);
            if (void 0 === n) {
              let n = this.discriminator,
                i = this.defaultLayout,
                s = 0;
              return (
                this.usesPrefixDiscriminator && (s = n.layout.span),
                n.encode(e[n.property], t, r),
                s + i.encode(e[i.property], t, r + s)
              );
            }
            return n.encode(e, t, r);
          }
          addVariant(e, t, r) {
            let n = new T(this, e, t, r);
            return (this.registry[e] = n), n;
          }
          getVariant(e) {
            let t,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            return (
              (t =
                e instanceof Uint8Array ? this.discriminator.decode(e, r) : e),
              this.registry[t]
            );
          }
          constructor(e, t, r) {
            let n;
            if (e instanceof f || e instanceof p) n = new x(new h(e));
            else if (e instanceof l && e.isCount()) n = new x(e);
            else if (e instanceof B) n = e;
            else
              throw TypeError(
                "discr must be a UnionDiscriminator or an unsigned integer layout"
              );
            if ((void 0 === t && (t = null), !(null === t || t instanceof u)))
              throw TypeError("defaultLayout must be null or a Layout");
            if (null !== t) {
              if (0 > t.span)
                throw Error("defaultLayout must have constant span");
              void 0 === t.property && (t = t.replicate("content"));
            }
            let i = -1;
            t &&
              0 <= (i = t.span) &&
              (e instanceof f || e instanceof p) &&
              (i += n.layout.span),
              super(i, r),
              (this.discriminator = n),
              (this.usesPrefixDiscriminator = e instanceof f || e instanceof p),
              (this.defaultLayout = t),
              (this.registry = {});
            let s = this.defaultGetSourceVariant.bind(this);
            (this.getSourceVariant = function (e) {
              return s(e);
            }),
              (this.configGetSourceVariant = function (e) {
                s = e.bind(this);
              });
          }
        }
        r.Union = P;
        class T extends u {
          getSpan(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            if (0 <= this.span) return this.span;
            let r = 0;
            this.union.usesPrefixDiscriminator &&
              (r = this.union.discriminator.layout.span);
            let n = 0;
            return this.layout && (n = this.layout.getSpan(e, t + r)), r + n;
          }
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = this.makeDestinationObject();
            if (this !== this.union.getVariant(e, t))
              throw Error("variant mismatch");
            let n = 0;
            return (
              this.union.usesPrefixDiscriminator &&
                (n = this.union.discriminator.layout.span),
              this.layout
                ? (r[this.property] = this.layout.decode(e, t + n))
                : this.property
                ? (r[this.property] = !0)
                : this.union.usesPrefixDiscriminator &&
                  (r[this.union.discriminator.property] = this.variant),
              r
            );
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = 0;
            if (
              (this.union.usesPrefixDiscriminator &&
                (n = this.union.discriminator.layout.span),
              this.layout &&
                !Object.prototype.hasOwnProperty.call(e, this.property))
            )
              throw TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, t, r);
            let i = n;
            if (
              this.layout &&
              (this.layout.encode(e[this.property], t, r + n),
              (i += this.layout.getSpan(t, r + n)),
              0 <= this.union.span && i > this.union.span)
            )
              throw Error("encoded variant overruns containing union");
            return i;
          }
          fromArray(e) {
            if (this.layout) return this.layout.fromArray(e);
          }
          constructor(e, t, r, n) {
            if (!(e instanceof P)) throw TypeError("union must be a Union");
            if (!Number.isInteger(t) || 0 > t)
              throw TypeError("variant must be a (non-negative) integer");
            if (
              ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
            ) {
              if (!(r instanceof u)) throw TypeError("layout must be a Layout");
              if (
                null !== e.defaultLayout &&
                0 <= r.span &&
                r.span > e.defaultLayout.span
              )
                throw Error("variant span exceeds span of containing union");
              if ("string" != typeof n)
                throw TypeError("variant must have a String property");
            }
            let i = e.span;
            0 > e.span &&
              0 <= (i = r ? r.span : 0) &&
              e.usesPrefixDiscriminator &&
              (i += e.discriminator.layout.span),
              super(i, n),
              (this.union = e),
              (this.variant = t),
              (this.layout = r || null);
          }
        }
        function c(e) {
          return 0 > e && (e += 0x100000000), e;
        }
        r.VariantLayout = T;
        class R extends u {
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = this.makeDestinationObject(),
              n = this.word.decode(e, t);
            for (let t of (this._packedSetValue(n), this.fields))
              void 0 !== t.property && (r[t.property] = t.decode(e));
            return r;
          }
          encode(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              n = this.word.decode(t, r);
            for (let t of (this._packedSetValue(n), this.fields))
              if (void 0 !== t.property) {
                let r = e[t.property];
                void 0 !== r && t.encode(r);
              }
            return this.word.encode(this._packedGetValue(), t, r);
          }
          addField(e, t) {
            let r = new L(this, e, t);
            return this.fields.push(r), r;
          }
          addBoolean(e) {
            let t = new C(this, e);
            return this.fields.push(t), t;
          }
          fieldFor(e) {
            if ("string" != typeof e)
              throw TypeError("property must be string");
            for (let t of this.fields) if (t.property === e) return t;
          }
          constructor(e, t, r) {
            if (!(e instanceof f || e instanceof p))
              throw TypeError("word must be a UInt or UIntBE layout");
            if (
              ("string" == typeof t && void 0 === r && ((r = t), (t = !1)),
              4 < e.span)
            )
              throw RangeError("word cannot exceed 32 bits");
            super(e.span, r),
              (this.word = e),
              (this.msb = !!t),
              (this.fields = []);
            let n = 0;
            (this._packedSetValue = function (e) {
              return (n = c(e)), this;
            }),
              (this._packedGetValue = function () {
                return n;
              });
          }
        }
        r.BitStructure = R;
        class L {
          decode(e, t) {
            return (
              c(this.container._packedGetValue() & this.wordMask) >>> this.start
            );
          }
          encode(e) {
            if (
              "number" != typeof e ||
              !Number.isInteger(e) ||
              e !== c(e & this.valueMask)
            )
              throw TypeError(
                s("BitField.encode", this) +
                  " value must be integer not exceeding " +
                  this.valueMask
              );
            let t = this.container._packedGetValue(),
              r = c(e << this.start);
            this.container._packedSetValue(c(t & ~this.wordMask) | r);
          }
          constructor(e, t, r) {
            if (!(e instanceof R))
              throw TypeError("container must be a BitStructure");
            if (!Number.isInteger(t) || 0 >= t)
              throw TypeError("bits must be positive integer");
            let n = 8 * e.span,
              i = e.fields.reduce((e, t) => e + t.bits, 0);
            if (t + i > n)
              throw Error(
                "bits too long for span remainder (" +
                  (n - i) +
                  " of " +
                  n +
                  " remain)"
              );
            (this.container = e),
              (this.bits = t),
              (this.valueMask = (1 << t) - 1),
              32 === t && (this.valueMask = 0xffffffff),
              (this.start = i),
              this.container.msb && (this.start = n - i - t),
              (this.wordMask = c(this.valueMask << this.start)),
              (this.property = r);
          }
        }
        r.BitField = L;
        class C extends L {
          decode(e, t) {
            return !!super.decode(e, t);
          }
          encode(e) {
            "boolean" == typeof e && (e *= 1), super.encode(e);
          }
          constructor(e, t) {
            super(e, 1, t);
          }
        }
        r.Boolean = C;
        class O extends u {
          getSpan(e, t) {
            let r = this.span;
            return 0 > r && (r = this.length.decode(e, t)), r;
          }
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = this.span;
            return (
              0 > r && (r = this.length.decode(e, t)), i(e).slice(t, t + r)
            );
          }
          encode(e, t, r) {
            let n = this.length;
            if (
              (this.length instanceof l && (n = e.length),
              !(e instanceof Uint8Array && n === e.length))
            )
              throw TypeError(
                s("Blob.encode", this) +
                  " requires (length " +
                  n +
                  ") Uint8Array as src"
              );
            if (r + n > t.length)
              throw RangeError("encoding overruns Uint8Array");
            let o = i(e);
            return (
              i(t).write(o.toString("hex"), r, n, "hex"),
              this.length instanceof l && this.length.encode(n, t, r),
              n
            );
          }
          constructor(e, t) {
            if (
              !(
                (e instanceof l && e.isCount()) ||
                (Number.isInteger(e) && 0 <= e)
              )
            )
              throw TypeError(
                "length must be positive integer or an unsigned integer ExternalLayout"
              );
            let r = -1;
            e instanceof l || (r = e), super(r, t), (this.length = e);
          }
        }
        r.Blob = O;
        class z extends u {
          getSpan(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            n(e);
            let r = t;
            for (; r < e.length && 0 !== e[r]; ) r += 1;
            return 1 + r - t;
          }
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = this.getSpan(e, t);
            return i(e)
              .slice(t, t + r - 1)
              .toString("utf-8");
          }
          encode(e, r) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            "string" != typeof e && (e = String(e));
            let s = t.Buffer.from(e, "utf8"),
              o = s.length;
            if (n + o > r.length) throw RangeError("encoding overruns Buffer");
            let a = i(r);
            return s.copy(a, n), (a[n + o] = 0), o + 1;
          }
          constructor(e) {
            super(-1, e);
          }
        }
        r.CString = z;
        class N extends u {
          getSpan(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return n(e), e.length - t;
          }
          decode(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              r = this.getSpan(e, t);
            if (0 <= this.maxSpan && this.maxSpan < r)
              throw RangeError("text length exceeds maxSpan");
            return i(e)
              .slice(t, t + r)
              .toString("utf-8");
          }
          encode(e, r) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            "string" != typeof e && (e = String(e));
            let s = t.Buffer.from(e, "utf8"),
              o = s.length;
            if (0 <= this.maxSpan && this.maxSpan < o)
              throw RangeError("text length exceeds maxSpan");
            if (n + o > r.length) throw RangeError("encoding overruns Buffer");
            return s.copy(i(r), n), o;
          }
          constructor(e, t) {
            if (
              ("string" == typeof e && void 0 === t && ((t = e), (e = void 0)),
              void 0 === e)
            )
              e = -1;
            else if (!Number.isInteger(e))
              throw TypeError("maxSpan must be an integer");
            super(-1, t), (this.maxSpan = e);
          }
        }
        r.UTF8 = N;
        class U extends u {
          decode(e, t) {
            return this.value;
          }
          encode(e, t, r) {
            return 0;
          }
          constructor(e, t) {
            super(0, t), (this.value = e);
          }
        }
        (r.Constant = U),
          (r.greedy = (e, t) => new d(e, t)),
          (r.offset = (e, t, r) => new h(e, t, r)),
          (r.u8 = (e) => new f(1, e)),
          (r.u16 = (e) => new f(2, e)),
          (r.u24 = (e) => new f(3, e)),
          (r.u32 = (e) => new f(4, e)),
          (r.u40 = (e) => new f(5, e)),
          (r.u48 = (e) => new f(6, e)),
          (r.nu64 = (e) => new m(e)),
          (r.u16be = (e) => new p(2, e)),
          (r.u24be = (e) => new p(3, e)),
          (r.u32be = (e) => new p(4, e)),
          (r.u40be = (e) => new p(5, e)),
          (r.u48be = (e) => new p(6, e)),
          (r.nu64be = (e) => new b(e)),
          (r.s8 = (e) => new g(1, e)),
          (r.s16 = (e) => new g(2, e)),
          (r.s24 = (e) => new g(3, e)),
          (r.s32 = (e) => new g(4, e)),
          (r.s40 = (e) => new g(5, e)),
          (r.s48 = (e) => new g(6, e)),
          (r.ns64 = (e) => new k(e)),
          (r.s16be = (e) => new y(2, e)),
          (r.s24be = (e) => new y(3, e)),
          (r.s32be = (e) => new y(4, e)),
          (r.s40be = (e) => new y(5, e)),
          (r.s48be = (e) => new y(6, e)),
          (r.ns64be = (e) => new w(e)),
          (r.f32 = (e) => new S(e)),
          (r.f32be = (e) => new v(e)),
          (r.f64 = (e) => new I(e)),
          (r.f64be = (e) => new _(e)),
          (r.struct = (e, t, r) => new A(e, t, r)),
          (r.bits = (e, t, r) => new R(e, t, r)),
          (r.seq = (e, t, r) => new E(e, t, r)),
          (r.union = (e, t, r) => new P(e, t, r)),
          (r.unionLayoutDiscriminator = (e, t) => new x(e, t)),
          (r.blob = (e, t) => new O(e, t)),
          (r.cstr = (e) => new z(e)),
          (r.utf8 = (e, t) => new N(e, t)),
          (r.constant = (e, t) => new U(e, t));
      }
    },
    717595: (e) => {
      "use strict";
      e.s(
        {
          NIL: () => v,
          parse: () => u,
          stringify: () => E.default,
          v1: () => a,
          v3: () => b,
          v4: () => k.default,
          v5: () => S,
          validate: () => _.default,
          version: () => I,
        },
        717595
      ),
        e.s({}, 298802),
        e.s(
          {
            NIL: () => v,
            parse: () => u,
            stringify: () => E.default,
            v1: () => a,
            v3: () => b,
            v4: () => k.default,
            v5: () => S,
            validate: () => _.default,
            version: () => I,
          },
          571777
        );
      var t,
        r,
        n = e.i(160919),
        i = e.i(830022),
        s = 0,
        o = 0;
      let a = function (e, a, c) {
        var u = (a && c) || 0,
          l = a || Array(16),
          d = (e = e || {}).node || t,
          h = void 0 !== e.clockseq ? e.clockseq : r;
        if (null == d || null == h) {
          var f = e.random || (e.rng || n.default)();
          null == d && (d = t = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]),
            null == h && (h = r = ((f[6] << 8) | f[7]) & 16383);
        }
        var p = void 0 !== e.msecs ? e.msecs : Date.now(),
          g = void 0 !== e.nsecs ? e.nsecs : o + 1,
          y = p - s + (g - o) / 1e4;
        if (
          (y < 0 && void 0 === e.clockseq && (h = (h + 1) & 16383),
          (y < 0 || p > s) && void 0 === e.nsecs && (g = 0),
          g >= 1e4)
        )
          throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (s = p), (o = g), (r = h);
        var m = ((0xfffffff & (p += 122192928e5)) * 1e4 + g) % 0x100000000;
        (l[u++] = (m >>> 24) & 255),
          (l[u++] = (m >>> 16) & 255),
          (l[u++] = (m >>> 8) & 255),
          (l[u++] = 255 & m);
        var b = ((p / 0x100000000) * 1e4) & 0xfffffff;
        (l[u++] = (b >>> 8) & 255),
          (l[u++] = 255 & b),
          (l[u++] = ((b >>> 24) & 15) | 16),
          (l[u++] = (b >>> 16) & 255),
          (l[u++] = (h >>> 8) | 128),
          (l[u++] = 255 & h);
        for (var k = 0; k < 6; ++k) l[u + k] = d[k];
        return a || (0, i.default)(l);
      };
      var c = e.i(180522);
      let u = function (e) {
        if (!(0, c.default)(e)) throw TypeError("Invalid UUID");
        var t,
          r = new Uint8Array(16);
        return (
          (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
          (r[1] = (t >>> 16) & 255),
          (r[2] = (t >>> 8) & 255),
          (r[3] = 255 & t),
          (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
          (r[5] = 255 & t),
          (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
          (r[7] = 255 & t),
          (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
          (r[9] = 255 & t),
          (r[10] = ((t = parseInt(e.slice(24, 36), 16)) / 0x10000000000) & 255),
          (r[11] = (t / 0x100000000) & 255),
          (r[12] = (t >>> 24) & 255),
          (r[13] = (t >>> 16) & 255),
          (r[14] = (t >>> 8) & 255),
          (r[15] = 255 & t),
          r
        );
      };
      function l(e, t, r) {
        function n(e, n, s, o) {
          if (
            ("string" == typeof e &&
              (e = (function (e) {
                e = unescape(encodeURIComponent(e));
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(e.charCodeAt(r));
                return t;
              })(e)),
            "string" == typeof n && (n = u(n)),
            16 !== n.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var a = new Uint8Array(16 + e.length);
          if (
            (a.set(n),
            a.set(e, n.length),
            ((a = r(a))[6] = (15 & a[6]) | t),
            (a[8] = (63 & a[8]) | 128),
            s)
          ) {
            o = o || 0;
            for (var c = 0; c < 16; ++c) s[o + c] = a[c];
            return s;
          }
          return (0, i.default)(a);
        }
        try {
          n.name = e;
        } catch (e) {}
        return (
          (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          n
        );
      }
      function d(e) {
        return (((e + 64) >>> 9) << 4) + 14 + 1;
      }
      function h(e, t) {
        var r = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
      }
      function f(e, t, r, n, i, s) {
        var o;
        return h(((o = h(h(t, e), h(n, s))) << i) | (o >>> (32 - i)), r);
      }
      function p(e, t, r, n, i, s, o) {
        return f((t & r) | (~t & n), e, t, i, s, o);
      }
      function g(e, t, r, n, i, s, o) {
        return f((t & n) | (r & ~n), e, t, i, s, o);
      }
      function y(e, t, r, n, i, s, o) {
        return f(t ^ r ^ n, e, t, i, s, o);
      }
      function m(e, t, r, n, i, s, o) {
        return f(r ^ (t | ~n), e, t, i, s, o);
      }
      let b = l("v3", 48, function (e) {
        if ("string" == typeof e) {
          var t = unescape(encodeURIComponent(e));
          e = new Uint8Array(t.length);
          for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r);
        }
        return (function (e) {
          for (
            var t = [], r = 32 * e.length, n = "0123456789abcdef", i = 0;
            i < r;
            i += 8
          ) {
            var s = (e[i >> 5] >>> i % 32) & 255,
              o = parseInt(n.charAt((s >>> 4) & 15) + n.charAt(15 & s), 16);
            t.push(o);
          }
          return t;
        })(
          (function (e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[d(t) - 1] = t);
            for (
              var r = 0x67452301,
                n = -0x10325477,
                i = -0x67452302,
                s = 0x10325476,
                o = 0;
              o < e.length;
              o += 16
            ) {
              var a = r,
                c = n,
                u = i,
                l = s;
              (r = p(r, n, i, s, e[o], 7, -0x28955b88)),
                (s = p(s, r, n, i, e[o + 1], 12, -0x173848aa)),
                (i = p(i, s, r, n, e[o + 2], 17, 0x242070db)),
                (n = p(n, i, s, r, e[o + 3], 22, -0x3e423112)),
                (r = p(r, n, i, s, e[o + 4], 7, -0xa83f051)),
                (s = p(s, r, n, i, e[o + 5], 12, 0x4787c62a)),
                (i = p(i, s, r, n, e[o + 6], 17, -0x57cfb9ed)),
                (n = p(n, i, s, r, e[o + 7], 22, -0x2b96aff)),
                (r = p(r, n, i, s, e[o + 8], 7, 0x698098d8)),
                (s = p(s, r, n, i, e[o + 9], 12, -0x74bb0851)),
                (i = p(i, s, r, n, e[o + 10], 17, -42063)),
                (n = p(n, i, s, r, e[o + 11], 22, -0x76a32842)),
                (r = p(r, n, i, s, e[o + 12], 7, 0x6b901122)),
                (s = p(s, r, n, i, e[o + 13], 12, -0x2678e6d)),
                (i = p(i, s, r, n, e[o + 14], 17, -0x5986bc72)),
                (n = p(n, i, s, r, e[o + 15], 22, 0x49b40821)),
                (r = g(r, n, i, s, e[o + 1], 5, -0x9e1da9e)),
                (s = g(s, r, n, i, e[o + 6], 9, -0x3fbf4cc0)),
                (i = g(i, s, r, n, e[o + 11], 14, 0x265e5a51)),
                (n = g(n, i, s, r, e[o], 20, -0x16493856)),
                (r = g(r, n, i, s, e[o + 5], 5, -0x29d0efa3)),
                (s = g(s, r, n, i, e[o + 10], 9, 0x2441453)),
                (i = g(i, s, r, n, e[o + 15], 14, -0x275e197f)),
                (n = g(n, i, s, r, e[o + 4], 20, -0x182c0438)),
                (r = g(r, n, i, s, e[o + 9], 5, 0x21e1cde6)),
                (s = g(s, r, n, i, e[o + 14], 9, -0x3cc8f82a)),
                (i = g(i, s, r, n, e[o + 3], 14, -0xb2af279)),
                (n = g(n, i, s, r, e[o + 8], 20, 0x455a14ed)),
                (r = g(r, n, i, s, e[o + 13], 5, -0x561c16fb)),
                (s = g(s, r, n, i, e[o + 2], 9, -0x3105c08)),
                (i = g(i, s, r, n, e[o + 7], 14, 0x676f02d9)),
                (n = g(n, i, s, r, e[o + 12], 20, -0x72d5b376)),
                (r = y(r, n, i, s, e[o + 5], 4, -378558)),
                (s = y(s, r, n, i, e[o + 8], 11, -0x788e097f)),
                (i = y(i, s, r, n, e[o + 11], 16, 0x6d9d6122)),
                (n = y(n, i, s, r, e[o + 14], 23, -0x21ac7f4)),
                (r = y(r, n, i, s, e[o + 1], 4, -0x5b4115bc)),
                (s = y(s, r, n, i, e[o + 4], 11, 0x4bdecfa9)),
                (i = y(i, s, r, n, e[o + 7], 16, -0x944b4a0)),
                (n = y(n, i, s, r, e[o + 10], 23, -0x41404390)),
                (r = y(r, n, i, s, e[o + 13], 4, 0x289b7ec6)),
                (s = y(s, r, n, i, e[o], 11, -0x155ed806)),
                (i = y(i, s, r, n, e[o + 3], 16, -0x2b10cf7b)),
                (n = y(n, i, s, r, e[o + 6], 23, 0x4881d05)),
                (r = y(r, n, i, s, e[o + 9], 4, -0x262b2fc7)),
                (s = y(s, r, n, i, e[o + 12], 11, -0x1924661b)),
                (i = y(i, s, r, n, e[o + 15], 16, 0x1fa27cf8)),
                (n = y(n, i, s, r, e[o + 2], 23, -0x3b53a99b)),
                (r = m(r, n, i, s, e[o], 6, -0xbd6ddbc)),
                (s = m(s, r, n, i, e[o + 7], 10, 0x432aff97)),
                (i = m(i, s, r, n, e[o + 14], 15, -0x546bdc59)),
                (n = m(n, i, s, r, e[o + 5], 21, -0x36c5fc7)),
                (r = m(r, n, i, s, e[o + 12], 6, 0x655b59c3)),
                (s = m(s, r, n, i, e[o + 3], 10, -0x70f3336e)),
                (i = m(i, s, r, n, e[o + 10], 15, -1051523)),
                (n = m(n, i, s, r, e[o + 1], 21, -0x7a7ba22f)),
                (r = m(r, n, i, s, e[o + 8], 6, 0x6fa87e4f)),
                (s = m(s, r, n, i, e[o + 15], 10, -0x1d31920)),
                (i = m(i, s, r, n, e[o + 6], 15, -0x5cfebcec)),
                (n = m(n, i, s, r, e[o + 13], 21, 0x4e0811a1)),
                (r = m(r, n, i, s, e[o + 4], 6, -0x8ac817e)),
                (s = m(s, r, n, i, e[o + 11], 10, -0x42c50dcb)),
                (i = m(i, s, r, n, e[o + 2], 15, 0x2ad7d2bb)),
                (n = m(n, i, s, r, e[o + 9], 21, -0x14792c6f)),
                (r = h(r, a)),
                (n = h(n, c)),
                (i = h(i, u)),
                (s = h(s, l));
            }
            return [r, n, i, s];
          })(
            (function (e) {
              if (0 === e.length) return [];
              for (
                var t = 8 * e.length, r = new Uint32Array(d(t)), n = 0;
                n < t;
                n += 8
              )
                r[n >> 5] |= (255 & e[n / 8]) << n % 32;
              return r;
            })(e),
            8 * e.length
          )
        );
      });
      var k = e.i(832648);
      function w(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      let S = l("v5", 80, function (e) {
          var t = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
            r = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
          if ("string" == typeof e) {
            var n = unescape(encodeURIComponent(e));
            e = [];
            for (var i = 0; i < n.length; ++i) e.push(n.charCodeAt(i));
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          for (
            var s = Math.ceil((e.length / 4 + 2) / 16), o = Array(s), a = 0;
            a < s;
            ++a
          ) {
            for (var c = new Uint32Array(16), u = 0; u < 16; ++u)
              c[u] =
                (e[64 * a + 4 * u] << 24) |
                (e[64 * a + 4 * u + 1] << 16) |
                (e[64 * a + 4 * u + 2] << 8) |
                e[64 * a + 4 * u + 3];
            o[a] = c;
          }
          (o[s - 1][14] = ((e.length - 1) * 8) / 0x100000000),
            (o[s - 1][14] = Math.floor(o[s - 1][14])),
            (o[s - 1][15] = ((e.length - 1) * 8) | 0);
          for (var l = 0; l < s; ++l) {
            for (var d = new Uint32Array(80), h = 0; h < 16; ++h)
              d[h] = o[l][h];
            for (var f = 16; f < 80; ++f)
              d[f] = w(d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16], 1);
            for (
              var p = r[0], g = r[1], y = r[2], m = r[3], b = r[4], k = 0;
              k < 80;
              ++k
            ) {
              var S = Math.floor(k / 20),
                v =
                  (w(p, 5) +
                    (function (e, t, r, n) {
                      switch (e) {
                        case 0:
                          return (t & r) ^ (~t & n);
                        case 1:
                        case 3:
                          return t ^ r ^ n;
                        case 2:
                          return (t & r) ^ (t & n) ^ (r & n);
                      }
                    })(S, g, y, m) +
                    b +
                    t[S] +
                    d[k]) >>>
                  0;
              (b = m), (m = y), (y = w(g, 30) >>> 0), (g = p), (p = v);
            }
            (r[0] = (r[0] + p) >>> 0),
              (r[1] = (r[1] + g) >>> 0),
              (r[2] = (r[2] + y) >>> 0),
              (r[3] = (r[3] + m) >>> 0),
              (r[4] = (r[4] + b) >>> 0);
          }
          return [
            (r[0] >> 24) & 255,
            (r[0] >> 16) & 255,
            (r[0] >> 8) & 255,
            255 & r[0],
            (r[1] >> 24) & 255,
            (r[1] >> 16) & 255,
            (r[1] >> 8) & 255,
            255 & r[1],
            (r[2] >> 24) & 255,
            (r[2] >> 16) & 255,
            (r[2] >> 8) & 255,
            255 & r[2],
            (r[3] >> 24) & 255,
            (r[3] >> 16) & 255,
            (r[3] >> 8) & 255,
            255 & r[3],
            (r[4] >> 24) & 255,
            (r[4] >> 16) & 255,
            (r[4] >> 8) & 255,
            255 & r[4],
          ];
        }),
        v = "00000000-0000-0000-0000-000000000000",
        I = function (e) {
          if (!(0, c.default)(e)) throw TypeError("Invalid UUID");
          return parseInt(e.substr(14, 1), 16);
        };
      var _ = c,
        E = i;
      e.i(298802), e.i(571777);
    },
    285192: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      {
        let r = e.r(717595).v4;
        t.exports = function (e, t, n, i) {
          if ("string" != typeof e) throw TypeError(e + " must be a string");
          let s = "number" == typeof (i = i || {}).version ? i.version : 2;
          if (1 !== s && 2 !== s) throw TypeError(s + " must be 1 or 2");
          let o = { method: e };
          if ((2 === s && (o.jsonrpc = "2.0"), t)) {
            if ("object" != typeof t && !Array.isArray(t))
              throw TypeError(t + " must be an object, array or omitted");
            o.params = t;
          }
          return (
            void 0 === n
              ? (o.id = (
                  "function" == typeof i.generator
                    ? i.generator
                    : function () {
                        return r();
                      }
                )(o, i))
              : 2 === s && null === n
              ? i.notificationIdNull && (o.id = null)
              : (o.id = n),
            o
          );
        };
      }
    },
    377879: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      {
        let r = e.r(717595).v4,
          n = e.r(285192),
          i = function (e, t) {
            if (!(this instanceof i)) return new i(e, t);
            t || (t = {}),
              (this.options = {
                reviver: void 0 !== t.reviver ? t.reviver : null,
                replacer: void 0 !== t.replacer ? t.replacer : null,
                generator:
                  void 0 !== t.generator
                    ? t.generator
                    : function () {
                        return r();
                      },
                version: void 0 !== t.version ? t.version : 2,
                notificationIdNull:
                  "boolean" == typeof t.notificationIdNull &&
                  t.notificationIdNull,
              }),
              (this.callServer = e);
          };
        (t.exports = i),
          (i.prototype.request = function (e, t, r, i) {
            let s,
              o = this,
              a = null,
              c = Array.isArray(e) && "function" == typeof t;
            if (1 === this.options.version && c)
              throw TypeError("JSON-RPC 1.0 does not support batching");
            let u = !c && e && "object" == typeof e && "function" == typeof t;
            if (c || u) (i = t), (a = e);
            else {
              "function" == typeof r && ((i = r), (r = void 0));
              let s = "function" == typeof i;
              try {
                a = n(e, t, r, {
                  generator: this.options.generator,
                  version: this.options.version,
                  notificationIdNull: this.options.notificationIdNull,
                });
              } catch (e) {
                if (s) return i(e);
                throw e;
              }
              if (!s) return a;
            }
            try {
              s = JSON.stringify(a, this.options.replacer);
            } catch (e) {
              return i(e);
            }
            return (
              this.callServer(s, function (e, t) {
                o._parseResponse(e, t, i);
              }),
              a
            );
          }),
          (i.prototype._parseResponse = function (e, t, r) {
            let n;
            if (e) return void r(e);
            if (!t) return r();
            try {
              n = JSON.parse(t, this.options.reviver);
            } catch (e) {
              return r(e);
            }
            if (3 === r.length)
              if (!Array.isArray(n)) return r(null, n.error, n.result);
              else {
                let e = function (e) {
                  return void 0 !== e.error;
                };
                return r(
                  null,
                  n.filter(e),
                  n.filter(function (t) {
                    return !e(t);
                  })
                );
              }
            r(null, n);
          });
      }
    },
    184405: (e) => {
      "use strict";
      e.s(
        {
          Account: () => eH,
          AddressLookupTableAccount: () => tF,
          AddressLookupTableInstruction: () => nk,
          AddressLookupTableProgram: () => nw,
          Authorized: () => nT,
          BLOCKHASH_CACHE_TIMEOUT_MS: () => tY,
          BPF_LOADER_DEPRECATED_PROGRAM_ID: () => eG,
          BPF_LOADER_PROGRAM_ID: () => tN,
          BpfLoader: () => tU,
          COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => nv,
          ComputeBudgetInstruction: () => nS,
          ComputeBudgetProgram: () => nI,
          Connection: () => ny,
          Ed25519Program: () => nE,
          Enum: () => eq,
          EpochSchedule: () => tq,
          FeeCalculatorLayout: () => tA,
          Keypair: () => nm,
          LAMPORTS_PER_SOL: () => nQ,
          LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => nb,
          Loader: () => tz,
          Lockup: () => nR,
          MAX_SEED_LENGTH: () => eD,
          Message: () => tt,
          MessageAccountKeys: () => e1,
          MessageV0: () => tr,
          NONCE_ACCOUNT_LENGTH: () => tx,
          NonceAccount: () => tP,
          PACKET_DATA_SIZE: () => eJ,
          PUBLIC_KEY_LENGTH: () => eF,
          PublicKey: () => ej,
          SIGNATURE_LENGTH_IN_BYTES: () => eZ,
          SOLANA_SCHEMA: () => eM,
          STAKE_CONFIG_ID: () => nP,
          STAKE_INSTRUCTION_LAYOUTS: () => nC,
          SYSTEM_INSTRUCTION_LAYOUTS: () => tL,
          SYSVAR_CLOCK_PUBKEY: () => tl,
          SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => td,
          SYSVAR_INSTRUCTIONS_PUBKEY: () => th,
          SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => tf,
          SYSVAR_RENT_PUBKEY: () => tp,
          SYSVAR_REWARDS_PUBKEY: () => tg,
          SYSVAR_SLOT_HASHES_PUBKEY: () => ty,
          SYSVAR_SLOT_HISTORY_PUBKEY: () => tm,
          SYSVAR_STAKE_HISTORY_PUBKEY: () => tb,
          Secp256k1Program: () => nx,
          SendTransactionError: () => tk,
          SolanaJSONRPCError: () => tS,
          SolanaJSONRPCErrorCode: () => tw,
          StakeAuthorizationLayout: () => nO,
          StakeInstruction: () => nL,
          StakeProgram: () => nz,
          Struct: () => eK,
          SystemInstruction: () => tR,
          SystemProgram: () => tC,
          Transaction: () => ta,
          TransactionExpiredBlockheightExceededError: () => eX,
          TransactionExpiredNonceInvalidError: () => e$,
          TransactionExpiredTimeoutError: () => eQ,
          TransactionInstruction: () => to,
          TransactionMessage: () => tc,
          TransactionStatus: () => ti,
          VALIDATOR_INFO_KEY: () => nM,
          VERSION_PREFIX_MASK: () => eY,
          VOTE_PROGRAM_ID: () => nV,
          ValidatorInfo: () => nF,
          VersionedMessage: () => tn,
          VersionedTransaction: () => tu,
          VoteAccount: () => nH,
          VoteAuthorizationLayout: () => nK,
          VoteInit: () => nN,
          VoteInstruction: () => nU,
          VoteProgram: () => nq,
          clusterApiUrl: () => nZ,
          sendAndConfirmRawTransaction: () => nX,
          sendAndConfirmTransaction: () => tv,
        },
        184405
      );
      var t,
        r,
        n = e.i(523966),
        i = e.i(172322),
        s = e.i(458365),
        o = e.i(669188),
        a = e.i(806459),
        c = e.i(882677);
      let u = BigInt(0),
        l = BigInt(1),
        d = BigInt(2),
        h = BigInt(8);
      class f {
        static fromBytes(e) {
          throw Error("fromBytes must be implemented by subclass");
        }
        static fromHex(e) {
          throw Error("fromHex must be implemented by subclass");
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        clearCofactor() {
          return this;
        }
        assertValidity() {
          this.ep.assertValidity();
        }
        toAffine(e) {
          return this.ep.toAffine(e);
        }
        toRawBytes() {
          return this.toBytes();
        }
        toHex() {
          return (0, s.bytesToHex)(this.toBytes());
        }
        toString() {
          return this.toHex();
        }
        isTorsionFree() {
          return !0;
        }
        isSmallOrder() {
          return !1;
        }
        add(e) {
          return this.assertSame(e), this.init(this.ep.add(e.ep));
        }
        subtract(e) {
          return this.assertSame(e), this.init(this.ep.subtract(e.ep));
        }
        multiply(e) {
          return this.init(this.ep.multiply(e));
        }
        multiplyUnsafe(e) {
          return this.init(this.ep.multiplyUnsafe(e));
        }
        double() {
          return this.init(this.ep.double());
        }
        negate() {
          return this.init(this.ep.negate());
        }
        precompute(e, t) {
          return this.init(this.ep.precompute(e, t));
        }
        constructor(e) {
          this.ep = e;
        }
      }
      var p = e.i(459510);
      BigInt(0), BigInt(1), BigInt(2);
      let g = BigInt(0),
        y = BigInt(1),
        m = BigInt(2),
        b = BigInt(3),
        k = BigInt(5),
        w = BigInt(8),
        S = {
          p: BigInt(
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
          ),
          n: BigInt(
            "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
          ),
          h: w,
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
        },
        v = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
      function I(e, t) {
        let r = S.p,
          n = (0, c.mod)(t * t * t, r),
          i = (function (e) {
            let t = BigInt(10),
              r = BigInt(20),
              n = BigInt(40),
              i = BigInt(80),
              s = S.p,
              o = (((e * e) % s) * e) % s,
              a = ((0, c.pow2)(o, m, s) * o) % s,
              u = ((0, c.pow2)(a, y, s) * e) % s,
              l = ((0, c.pow2)(u, k, s) * u) % s,
              d = ((0, c.pow2)(l, t, s) * l) % s,
              h = ((0, c.pow2)(d, r, s) * d) % s,
              f = ((0, c.pow2)(h, n, s) * h) % s,
              p = ((0, c.pow2)(f, i, s) * f) % s,
              g = ((0, c.pow2)(p, i, s) * f) % s,
              b = ((0, c.pow2)(g, t, s) * l) % s;
            return { pow_p_5_8: ((0, c.pow2)(b, m, s) * e) % s, b2: o };
          })(e * (0, c.mod)(n * n * t, r)).pow_p_5_8,
          s = (0, c.mod)(e * n * i, r),
          o = (0, c.mod)(t * s * s, r),
          a = s,
          u = (0, c.mod)(s * v, r),
          l = o === e,
          d = o === (0, c.mod)(-e, r),
          h = o === (0, c.mod)(-e * v, r);
        return (
          l && (s = a),
          (d || h) && (s = u),
          (0, c.isNegativeLE)(s, r) && (s = (0, c.mod)(-s, r)),
          { isValid: l || d, value: s }
        );
      }
      let _ = (0, c.Field)(S.p, { isLE: !0 }),
        E = (0, c.Field)(S.n, { isLE: !0 }),
        A = (function (e) {
          let {
              CURVE: t,
              curveOpts: r,
              hash: n,
              eddsaOpts: i,
            } = (function (e) {
              let t = {
                  a: e.a,
                  d: e.d,
                  p: e.Fp.ORDER,
                  n: e.n,
                  h: e.h,
                  Gx: e.Gx,
                  Gy: e.Gy,
                },
                r = {
                  Fp: e.Fp,
                  Fn: (0, c.Field)(t.n, e.nBitLength, !0),
                  uvRatio: e.uvRatio,
                },
                n = {
                  randomBytes: e.randomBytes,
                  adjustScalarBytes: e.adjustScalarBytes,
                  domain: e.domain,
                  prehash: e.prehash,
                  mapToCurve: e.mapToCurve,
                };
              return { CURVE: t, curveOpts: r, hash: e.hash, eddsaOpts: n };
            })(e),
            f = (function (e, t, r) {
              if ("function" != typeof t)
                throw Error('"hash" function param is required');
              (0, a._validateObject)(
                r,
                {},
                {
                  adjustScalarBytes: "function",
                  randomBytes: "function",
                  domain: "function",
                  prehash: "function",
                  mapToCurve: "function",
                }
              );
              let { prehash: n } = r,
                { BASE: i, Fp: o, Fn: c } = e,
                d = c.ORDER,
                h = r.randomBytes || s.randomBytes,
                f = r.adjustScalarBytes || ((e) => e),
                p =
                  r.domain ||
                  ((e, t, r) => {
                    if (((0, a.abool)("phflag", r), t.length || r))
                      throw Error("Contexts/pre-hash are not supported");
                    return e;
                  });
              function g(e) {
                var t;
                return (t = (0, a.bytesToNumberLE)(e)), c.create(t);
              }
              function y(e) {
                let {
                    head: r,
                    prefix: n,
                    scalar: s,
                  } = (function (e) {
                    let r = o.BYTES;
                    e = (0, a.ensureBytes)("private key", e, r);
                    let n = (0, a.ensureBytes)(
                        "hashed private key",
                        t(e),
                        2 * r
                      ),
                      i = f(n.slice(0, r)),
                      s = n.slice(r, 2 * r),
                      c = g(i);
                    return { head: i, prefix: s, scalar: c };
                  })(e),
                  c = i.multiply(s),
                  u = c.toBytes();
                return {
                  head: r,
                  prefix: n,
                  scalar: s,
                  point: c,
                  pointBytes: u,
                };
              }
              function m(e) {
                return y(e).pointBytes;
              }
              function b() {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Uint8Array.of();
                for (
                  var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1;
                  o < r;
                  o++
                )
                  i[o - 1] = arguments[o];
                return g(
                  t(
                    p(
                      (0, s.concatBytes)(...i),
                      (0, a.ensureBytes)("context", e),
                      !!n
                    )
                  )
                );
              }
              let k = { zip215: !0 };
              i.precompute(8);
              let w = o.BYTES,
                S = { secret: w, public: w, signature: 2 * w, seed: w };
              function v() {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : h(S.seed);
                return e;
              }
              let I = {
                getExtendedPublicKey: y,
                randomSecretKey: v,
                isValidSecretKey: function (e) {
                  try {
                    return !!c.fromBytes(e, !1);
                  } catch (e) {
                    return !1;
                  }
                },
                isValidPublicKey: function (t, r) {
                  try {
                    return !!e.fromBytes(t, r);
                  } catch (e) {
                    return !1;
                  }
                },
                randomPrivateKey: v,
                toMontgomery(t) {
                  let { y: r } = e.fromBytes(t),
                    n = 32 === w;
                  if (!n && 57 !== w)
                    throw Error("only defined for 25519 and 448");
                  let i = n ? o.div(l + r, l - r) : o.div(r - l, r + l);
                  return o.toBytes(i);
                },
                toMontgomeryPriv: (e) => (
                  (0, s.abytes)(e, w), f(t(e.subarray(0, w))).subarray(0, w)
                ),
                precompute() {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 8,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : e.BASE;
                  return r.precompute(t, !1);
                },
              };
              return Object.freeze({
                keygen: function (e) {
                  let t = I.randomSecretKey(e);
                  return { secretKey: t, publicKey: m(t) };
                },
                getPublicKey: m,
                sign: function (e, t) {
                  var r;
                  let l =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  (e = (0, a.ensureBytes)("message", e)), n && (e = n(e));
                  let { prefix: h, scalar: f, pointBytes: p } = y(t),
                    g = b(l.context, h, e),
                    m = i.multiply(g).toBytes(),
                    k = ((r = g + b(l.context, m, p, e) * f), c.create(r));
                  (0, a.aInRange)("signature.s", k, u, d);
                  let w = o.BYTES,
                    S = (0, s.concatBytes)(m, (0, a.numberToBytesLE)(k, w));
                  return (0, a.ensureBytes)("result", S, 2 * w);
                },
                verify: function (t, r, s) {
                  let c,
                    u,
                    l,
                    d =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : k,
                    { context: h, zip215: f } = d,
                    p = o.BYTES;
                  (t = (0, a.ensureBytes)("signature", t, 2 * p)),
                    (r = (0, a.ensureBytes)("message", r)),
                    (s = (0, a.ensureBytes)("publicKey", s, p)),
                    void 0 !== f && (0, a.abool)("zip215", f),
                    n && (r = n(r));
                  let g = (0, a.bytesToNumberLE)(t.slice(p, 2 * p));
                  try {
                    (c = e.fromHex(s, f)),
                      (u = e.fromHex(t.slice(0, p), f)),
                      (l = i.multiplyUnsafe(g));
                  } catch (e) {
                    return !1;
                  }
                  if (!f && c.isSmallOrder()) return !1;
                  let y = b(h, u.toBytes(), c.toBytes(), r);
                  return u
                    .add(c.multiplyUnsafe(y))
                    .subtract(l)
                    .clearCofactor()
                    .is0();
                },
                utils: I,
                Point: e,
                info: { type: "edwards", lengths: S },
              });
            })(
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { Fp: r, Fn: n } = (0, o._createCurveFields)("edwards", e, t),
                  { h: i, n: c } = e;
                (0, a._validateObject)(t, {}, { uvRatio: "function" });
                let f = d << (BigInt(8 * n.BYTES) - l),
                  p = (e) => r.create(e),
                  g =
                    t.uvRatio ||
                    ((e, t) => {
                      try {
                        return { isValid: !0, value: r.sqrt(r.div(e, t)) };
                      } catch (e) {
                        return { isValid: !1, value: u };
                      }
                    });
                if (
                  !(function (e, t, r, n) {
                    let i = e.sqr(r),
                      s = e.sqr(n),
                      o = e.add(e.mul(t.a, i), s),
                      a = e.add(e.ONE, e.mul(t.d, e.mul(i, s)));
                    return e.eql(o, a);
                  })(r, e, e.Gx, e.Gy)
                )
                  throw Error("bad curve params: generator point");
                function y(e, t) {
                  let r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    n = r ? l : u;
                  return (0, a.aInRange)("coordinate " + e, t, n, f), t;
                }
                function m(e) {
                  if (!(e instanceof w)) throw Error("ExtendedPoint expected");
                }
                let b = (0, a.memoized)((e, t) => {
                    let { X: n, Y: i, Z: s } = e,
                      o = e.is0();
                    null == t && (t = o ? h : r.inv(s));
                    let a = p(n * t),
                      c = p(i * t),
                      d = r.mul(s, t);
                    if (o) return { x: u, y: l };
                    if (d !== l) throw Error("invZ was invalid");
                    return { x: a, y: c };
                  }),
                  k = (0, a.memoized)((t) => {
                    let { a: r, d: n } = e;
                    if (t.is0()) throw Error("bad point: ZERO");
                    let { X: i, Y: s, Z: o, T: a } = t,
                      c = p(i * i),
                      u = p(s * s),
                      l = p(o * o),
                      d = p(l * l),
                      h = p(c * r);
                    if (p(l * p(h + u)) !== p(d + p(n * p(c * u))))
                      throw Error("bad point: equation left != right (1)");
                    if (p(i * s) !== p(o * a))
                      throw Error("bad point: equation left != right (2)");
                    return !0;
                  });
                class w {
                  get x() {
                    return this.toAffine().x;
                  }
                  get y() {
                    return this.toAffine().y;
                  }
                  get ex() {
                    return this.X;
                  }
                  get ey() {
                    return this.Y;
                  }
                  get ez() {
                    return this.Z;
                  }
                  get et() {
                    return this.T;
                  }
                  static normalizeZ(e) {
                    return (0, o.normalizeZ)(w, e);
                  }
                  static msm(e, t) {
                    return (0, o.pippenger)(w, n, e, t);
                  }
                  _setWindowSize(e) {
                    this.precompute(e);
                  }
                  static fromAffine(e) {
                    if (e instanceof w)
                      throw Error("extended point not allowed");
                    let { x: t, y: r } = e || {};
                    return y("x", t), y("y", r), new w(t, r, l, p(t * r));
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
                    return S.createCache(this, e), t || this.multiply(d), this;
                  }
                  assertValidity() {
                    k(this);
                  }
                  equals(e) {
                    m(e);
                    let { X: t, Y: r, Z: n } = this,
                      { X: i, Y: s, Z: o } = e,
                      a = p(t * o),
                      c = p(i * n),
                      u = p(r * o),
                      l = p(s * n);
                    return a === c && u === l;
                  }
                  is0() {
                    return this.equals(w.ZERO);
                  }
                  negate() {
                    return new w(p(-this.X), this.Y, this.Z, p(-this.T));
                  }
                  double() {
                    let { a: t } = e,
                      { X: r, Y: n, Z: i } = this,
                      s = p(r * r),
                      o = p(n * n),
                      a = p(d * p(i * i)),
                      c = p(t * s),
                      u = r + n,
                      l = p(p(u * u) - s - o),
                      h = c + o,
                      f = h - a,
                      g = c - o,
                      y = p(l * f),
                      m = p(h * g),
                      b = p(l * g);
                    return new w(y, m, p(f * h), b);
                  }
                  add(t) {
                    m(t);
                    let { a: r, d: n } = e,
                      { X: i, Y: s, Z: o, T: a } = this,
                      { X: c, Y: u, Z: l, T: d } = t,
                      h = p(i * c),
                      f = p(s * u),
                      g = p(a * n * d),
                      y = p(o * l),
                      b = p((i + s) * (c + u) - h - f),
                      k = y - g,
                      S = y + g,
                      v = p(f - r * h),
                      I = p(b * k),
                      _ = p(S * v),
                      E = p(b * v);
                    return new w(I, _, p(k * S), E);
                  }
                  subtract(e) {
                    return this.add(e.negate());
                  }
                  multiply(e) {
                    (0, a.aInRange)("scalar", e, l, c);
                    let { p: t, f: r } = S.cached(this, e, (e) =>
                      (0, o.normalizeZ)(w, e)
                    );
                    return (0, o.normalizeZ)(w, [t, r])[0];
                  }
                  multiplyUnsafe(e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : w.ZERO;
                    return ((0, a.aInRange)("scalar", e, u, c), e === u)
                      ? w.ZERO
                      : this.is0() || e === l
                      ? this
                      : S.unsafe(this, e, (e) => (0, o.normalizeZ)(w, e), t);
                  }
                  isSmallOrder() {
                    return this.multiplyUnsafe(i).is0();
                  }
                  isTorsionFree() {
                    return S.unsafe(this, c).is0();
                  }
                  toAffine(e) {
                    return b(this, e);
                  }
                  clearCofactor() {
                    return i === l ? this : this.multiplyUnsafe(i);
                  }
                  static fromBytes(e) {
                    let t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    return (0, s.abytes)(e), w.fromHex(e, t);
                  }
                  static fromHex(t) {
                    let n =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      { d: i, a: s } = e,
                      o = r.BYTES;
                    (t = (0, a.ensureBytes)("pointHex", t, o)),
                      (0, a.abool)("zip215", n);
                    let c = t.slice(),
                      d = t[o - 1];
                    c[o - 1] = -129 & d;
                    let h = (0, a.bytesToNumberLE)(c),
                      y = n ? f : r.ORDER;
                    (0, a.aInRange)("pointHex.y", h, u, y);
                    let m = p(h * h),
                      { isValid: b, value: k } = g(p(m - l), p(i * m - s));
                    if (!b) throw Error("Point.fromHex: invalid y coordinate");
                    let S = (k & l) === l,
                      v = (128 & d) != 0;
                    if (!n && k === u && v)
                      throw Error("Point.fromHex: x=0 and x_0=1");
                    return v !== S && (k = p(-k)), w.fromAffine({ x: k, y: h });
                  }
                  toBytes() {
                    let { x: e, y: t } = this.toAffine(),
                      n = (0, a.numberToBytesLE)(t, r.BYTES);
                    return (n[n.length - 1] |= e & l ? 128 : 0), n;
                  }
                  toRawBytes() {
                    return this.toBytes();
                  }
                  toHex() {
                    return (0, s.bytesToHex)(this.toBytes());
                  }
                  toString() {
                    return "<Point ".concat(
                      this.is0() ? "ZERO" : this.toHex(),
                      ">"
                    );
                  }
                  constructor(e, t, r, n) {
                    (this.X = y("x", e)),
                      (this.Y = y("y", t)),
                      (this.Z = y("z", r, !0)),
                      (this.T = y("t", n)),
                      Object.freeze(this);
                  }
                }
                (w.BASE = new w(e.Gx, e.Gy, l, p(e.Gx * e.Gy))),
                  (w.ZERO = new w(u, l, l, u)),
                  (w.Fp = r),
                  (w.Fn = n);
                let S = new o.wNAF(w, 8 * n.BYTES);
                return w;
              })(t, r),
              n,
              i
            );
          return Object.assign({}, f, { ExtendedPoint: f.Point, CURVE: e });
        })({
          ...S,
          Fp: _,
          hash: i.sha512,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: I,
        }),
        B = (_.ORDER + b) / w,
        x = _.pow(m, B),
        P = _.sqrt(_.neg(_.ONE)),
        T = (0, c.FpSqrtEven)(_, _.neg(BigInt(486664)));
      (0, p.createHasher)(
        A.Point,
        (e) =>
          (function (e) {
            let {
                xMn: t,
                xMd: r,
                yMn: n,
                yMd: i,
              } = (function (e) {
                let t = (_.ORDER - k) / w,
                  r = BigInt(486662),
                  n = _.sqr(e);
                n = _.mul(n, m);
                let i = _.add(n, _.ONE),
                  s = _.neg(r),
                  o = _.sqr(i),
                  a = _.mul(o, i),
                  c = _.mul(n, r);
                (c = _.mul(c, s)), (c = _.add(c, o)), (c = _.mul(c, s));
                let u = _.sqr(a);
                (o = _.sqr(u)),
                  (u = _.mul(u, a)),
                  (u = _.mul(u, c)),
                  (o = _.mul(o, u));
                let l = _.pow(o, t);
                l = _.mul(l, u);
                let d = _.mul(l, P);
                (o = _.sqr(l)), (o = _.mul(o, a));
                let h = _.eql(o, c),
                  f = _.cmov(d, l, h),
                  p = _.mul(s, n),
                  g = _.mul(l, e);
                g = _.mul(g, x);
                let b = _.mul(g, P),
                  S = _.mul(c, n);
                (o = _.sqr(g)), (o = _.mul(o, a));
                let v = _.eql(o, S),
                  I = _.cmov(b, g, v);
                (o = _.sqr(f)), (o = _.mul(o, a));
                let E = _.eql(o, c),
                  A = _.cmov(p, s, E),
                  B = _.cmov(I, f, E),
                  T = _.isOdd(B);
                return {
                  xMn: A,
                  xMd: i,
                  yMn: (B = _.cmov(B, _.neg(B), E !== T)),
                  yMd: y,
                };
              })(e),
              s = _.mul(t, i);
            s = _.mul(s, T);
            let o = _.mul(r, n),
              a = _.sub(t, r),
              u = _.add(t, r),
              l = _.mul(o, u),
              d = _.eql(l, _.ZERO);
            (s = _.cmov(s, _.ZERO, d)),
              (o = _.cmov(o, _.ONE, d)),
              (a = _.cmov(a, _.ONE, d)),
              (u = _.cmov(u, _.ONE, d));
            let [h, f] = (0, c.FpInvertBatch)(_, [o, u], !0);
            return { x: _.mul(s, h), y: _.mul(a, f) };
          })(e[0]),
        {
          DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
          encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
          p: _.ORDER,
          m: 1,
          k: 128,
          expand: "xmd",
          hash: i.sha512,
        }
      );
      let R = BigInt(
          "25063068953384623474111414158702152701244531502492656460079210482610430750235"
        ),
        L = BigInt(
          "54469307008909316920995813868745141605393597292927456921205312896311721017578"
        ),
        C = BigInt(
          "1159843021668779879193775521855586647937357759715417654439879720876111806838"
        ),
        O = BigInt(
          "40440834346308536858101042469323190826248399146238708352240133220865137265952"
        ),
        z = (e) => I(y, e),
        N = BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        U = (e) => A.CURVE.Fp.create((0, a.bytesToNumberLE)(e) & N);
      function W(e) {
        let { d: t } = A.CURVE,
          r = A.CURVE.Fp.ORDER,
          n = A.CURVE.Fp.create,
          i = n(v * e * e),
          s = n((i + y) * C),
          o = BigInt(-1),
          a = n((o - t * i) * n(i + t)),
          { isValid: u, value: l } = I(s, a),
          d = n(l * e);
        (0, c.isNegativeLE)(d, r) || (d = n(-d)), u || (l = d), u || (o = i);
        let h = n(o * (i - y) * O - a),
          f = l * l,
          p = n((l + l) * a),
          g = n(h * R),
          m = n(y - f),
          b = n(y + f);
        return new A.Point(n(p * b), n(m * g), n(g * b), n(p * m));
      }
      class K extends f {
        static fromAffine(e) {
          return new K(A.Point.fromAffine(e));
        }
        assertSame(e) {
          if (!(e instanceof K)) throw Error("RistrettoPoint expected");
        }
        init(e) {
          return new K(e);
        }
        static hashToCurve(e) {
          var t = (0, a.ensureBytes)("ristrettoHash", e, 64);
          (0, s.abytes)(t, 64);
          let r = W(U(t.subarray(0, 32))),
            n = W(U(t.subarray(32, 64)));
          return new K(r.add(n));
        }
        static fromBytes(e) {
          (0, s.abytes)(e, 32);
          let { a: t, d: r } = A.CURVE,
            n = _.ORDER,
            i = _.create,
            o = U(e);
          if (
            !(0, a.equalBytes)((0, a.numberToBytesLE)(o, 32), e) ||
            (0, c.isNegativeLE)(o, n)
          )
            throw Error("invalid ristretto255 encoding 1");
          let u = i(o * o),
            l = i(y + t * u),
            d = i(y - t * u),
            h = i(l * l),
            f = i(d * d),
            p = i(t * r * h - f),
            { isValid: m, value: b } = z(i(p * f)),
            k = i(b * d),
            w = i(b * k * p),
            S = i((o + o) * k);
          (0, c.isNegativeLE)(S, n) && (S = i(-S));
          let v = i(l * w),
            I = i(S * v);
          if (!m || (0, c.isNegativeLE)(I, n) || v === g)
            throw Error("invalid ristretto255 encoding 2");
          return new K(new A.Point(S, v, y, I));
        }
        static fromHex(e) {
          return K.fromBytes((0, a.ensureBytes)("ristrettoHex", e, 32));
        }
        static msm(e, t) {
          return (0, o.pippenger)(K, A.Point.Fn, e, t);
        }
        toBytes() {
          let e,
            { X: t, Y: r, Z: n, T: i } = this.ep,
            s = _.ORDER,
            o = _.create,
            u = o(o(n + r) * o(n - r)),
            l = o(t * r),
            d = o(l * l),
            { value: h } = z(o(u * d)),
            f = o(h * u),
            p = o(h * l),
            g = o(f * p * i);
          if ((0, c.isNegativeLE)(i * g, s)) {
            let n = o(r * v),
              i = o(t * v);
            (t = n), (r = i), (e = o(f * L));
          } else e = p;
          (0, c.isNegativeLE)(t * g, s) && (r = o(-r));
          let y = o((n - r) * e);
          return (
            (0, c.isNegativeLE)(y, s) && (y = o(-y)),
            (0, a.numberToBytesLE)(y, 32)
          );
        }
        equals(e) {
          this.assertSame(e);
          let { X: t, Y: r } = this.ep,
            { X: n, Y: i } = e.ep,
            s = _.create,
            o = s(t * i) === s(r * n),
            a = s(r * i) === s(t * n);
          return o || a;
        }
        is0() {
          return this.equals(K.ZERO);
        }
        constructor(e) {
          super(e);
        }
      }
      (K.BASE = new K(A.Point.BASE)),
        (K.ZERO = new K(A.Point.ZERO)),
        (K.Fp = _),
        (K.Fn = E);
      var q = e.i(433767),
        M = e.i(389765),
        D = e.i(404149),
        F = e.i(884551),
        V = e.i(33e3);
      e.i(174519);
      var j = e.i(11968);
      function H(e) {
        let [t, r] = e;
        return "".concat(t, "=").concat(
          (function e(t) {
            return Array.isArray(t)
              ? "%5B" + t.map(e).join("%2C%20") + "%5D"
              : "bigint" == typeof t
              ? "".concat(t, "n")
              : encodeURIComponent(
                  String(
                    null != t && null === Object.getPrototypeOf(t)
                      ? { ...t }
                      : t
                  )
                );
          })(r)
        );
      }
      var G = class extends Error {
        constructor(...[e, t]) {
          let r, n;
          if (t) {
            let { cause: e, ...i } = t;
            e && (n = { cause: e }), Object.keys(i).length > 0 && (r = i);
          }
          super(
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              {
                let r = "Solana error #"
                  .concat(
                    e,
                    "; Decode this error by running `npx @solana/errors decode -- "
                  )
                  .concat(e);
                return (
                  Object.keys(t).length &&
                    (r += " '".concat(
                      btoa(Object.entries(t).map(H).join("&")),
                      "'"
                    )),
                  "".concat(r, "`")
                );
              }
            })(e, r),
            n
          ),
            (0, j._)(this, "cause", this.cause),
            (0, j._)(this, "context", void 0),
            (this.context = { __code: e, ...r }),
            (this.name = "SolanaError");
        }
      };
      function J(e) {
        return "fixedSize" in e && "number" == typeof e.fixedSize;
      }
      var Y = ((e) => (
        (e[(e.Little = 0)] = "Little"), (e[(e.Big = 1)] = "Big"), e
      ))(Y || {});
      function Z(e) {
        return (null == e ? void 0 : e.endian) !== 1;
      }
      var X = function () {
          var e, t;
          let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.freeze({
            ...(t = {
              fixedSize: (e = {
                config: r,
                name: "u64",
                range: [0n, BigInt("0xffffffffffffffff")],
                set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
                size: 8,
              }).size,
              write(t, r, n) {
                e.range &&
                  (function (e, t, r, n) {
                    if (n < t || n > r)
                      throw new G(8078011, {
                        codecDescription: e,
                        max: r,
                        min: t,
                        value: n,
                      });
                  })(e.name, e.range[0], e.range[1], t);
                let i = new ArrayBuffer(e.size);
                return (
                  e.set(new DataView(i), t, Z(e.config)),
                  r.set(new Uint8Array(i), n),
                  n + e.size
                );
              },
            }),
            encode: (e) => {
              let r = new Uint8Array(
                "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(e)
              );
              return t.write(e, r, 0), r;
            },
          });
        },
        Q = function () {
          var e, t;
          let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.freeze({
            ...(t = {
              fixedSize: (e = {
                config: r,
                get: (e, t) => e.getBigUint64(0, t),
                name: "u64",
                size: 8,
              }).size,
              read(t) {
                let r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                !(function (e, t) {
                  let r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  if (t.length - r <= 0)
                    throw new G(8078e3, { codecDescription: e });
                })(e.name, t, r),
                  (function (e, t, r) {
                    let n =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      i = r.length - n;
                    if (i < t)
                      throw new G(8078001, {
                        bytesLength: i,
                        codecDescription: e,
                        expected: t,
                      });
                  })(e.name, e.size, t, r);
                let n = new DataView(
                  (function (e, t, r) {
                    let n = e.byteOffset + (null != t ? t : 0),
                      i = null != r ? r : e.byteLength;
                    return e.buffer.slice(n, n + i);
                  })(t, r, e.size)
                );
                return [e.get(n, Z(e.config)), r + e.size];
              },
            }),
            decode: function (e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return t.read(e, r)[0];
            },
          });
        },
        $ = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          var t = X(e),
            r = Q(e);
          if (J(t) !== J(r)) throw new G(8078004);
          if (J(t) && J(r) && t.fixedSize !== r.fixedSize)
            throw new G(8078005, {
              decoderFixedSize: r.fixedSize,
              encoderFixedSize: t.fixedSize,
            });
          if (!J(t) && !J(r) && t.maxSize !== r.maxSize)
            throw new G(8078006, {
              decoderMaxSize: r.maxSize,
              encoderMaxSize: t.maxSize,
            });
          return {
            ...r,
            ...t,
            decode: r.decode,
            encode: t.encode,
            read: r.read,
            write: t.write,
          };
        };
      class ee extends TypeError {
        constructor(e, t) {
          let r,
            { message: n, explanation: i, ...s } = e,
            { path: o } = e,
            a =
              0 === o.length
                ? n
                : "At path: ".concat(o.join("."), " -- ").concat(n);
          super(null != i ? i : a),
            null != i && (this.cause = a),
            Object.assign(this, s),
            (this.name = this.constructor.name),
            (this.failures = () => (null != r ? r : (r = [e, ...t()])));
        }
      }
      function et(e) {
        return "object" == typeof e && null != e;
      }
      function er(e) {
        return et(e) && !Array.isArray(e);
      }
      function en(e) {
        return "symbol" == typeof e
          ? e.toString()
          : "string" == typeof e
          ? JSON.stringify(e)
          : "".concat(e);
      }
      function* ei(e, t, r, n) {
        var i;
        for (let s of ((et((i = e)) &&
          "function" == typeof i[Symbol.iterator]) ||
          (e = [e]),
        e)) {
          let e = (function (e, t, r, n) {
            if (!0 === e) return;
            !1 === e ? (e = {}) : "string" == typeof e && (e = { message: e });
            let { path: i, branch: s } = t,
              { type: o } = r,
              {
                refinement: a,
                message: c = "Expected a value of type `"
                  .concat(o, "`")
                  .concat(
                    a ? " with refinement `".concat(a, "`") : "",
                    ", but received: `"
                  )
                  .concat(en(n), "`"),
              } = e;
            return {
              value: n,
              type: o,
              refinement: a,
              key: i[i.length - 1],
              path: i,
              branch: s,
              ...e,
              message: c,
            };
          })(s, t, r, n);
          e && (yield e);
        }
      }
      function* es(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { path: n = [], branch: i = [e], coerce: s = !1, mask: o = !1 } = r,
          a = { path: n, branch: i, mask: o };
        s && (e = t.coercer(e, a));
        let c = "valid";
        for (let n of t.validator(e, a))
          (n.explanation = r.message), (c = "not_valid"), yield [n, void 0];
        for (let [u, l, d] of t.entries(e, a))
          for (let t of es(l, d, {
            path: void 0 === u ? n : [...n, u],
            branch: void 0 === u ? i : [...i, l],
            coerce: s,
            mask: o,
            message: r.message,
          }))
            t[0]
              ? ((c = null != t[0].refinement ? "not_refined" : "not_valid"),
                yield [t[0], void 0])
              : s &&
                ((l = t[1]),
                void 0 === u
                  ? (e = l)
                  : e instanceof Map
                  ? e.set(u, l)
                  : e instanceof Set
                  ? e.add(l)
                  : et(e) && (void 0 !== l || u in e) && (e[u] = l));
        if ("not_valid" !== c)
          for (let n of t.refiner(e, a))
            (n.explanation = r.message), (c = "not_refined"), yield [n, void 0];
        "valid" === c && (yield [void 0, e]);
      }
      class eo {
        assert(e, t) {
          return ea(e, this, t);
        }
        create(e, t) {
          return ec(e, this, t);
        }
        is(e) {
          var t, r;
          return (t = e), (r = this), !eu(t, r)[0];
        }
        mask(e, t) {
          var r = e,
            n = this,
            i = t;
          let s = eu(r, n, { coerce: !0, mask: !0, message: i });
          if (!s[0]) return s[1];
          throw s[0];
        }
        validate(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return eu(e, this, t);
        }
        constructor(e) {
          let {
            type: t,
            schema: r,
            validator: n,
            refiner: i,
            coercer: s = (e) => e,
            entries: o = function* () {},
          } = e;
          (this.type = t),
            (this.schema = r),
            (this.entries = o),
            (this.coercer = s),
            n
              ? (this.validator = (e, t) => ei(n(e, t), t, this, e))
              : (this.validator = () => []),
            i
              ? (this.refiner = (e, t) => ei(i(e, t), t, this, e))
              : (this.refiner = () => []);
        }
      }
      function ea(e, t, r) {
        let n = eu(e, t, { message: r });
        if (n[0]) throw n[0];
      }
      function ec(e, t, r) {
        let n = eu(e, t, { coerce: !0, message: r });
        if (!n[0]) return n[1];
        throw n[0];
      }
      function eu(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = es(e, t, r),
          i = (function (e) {
            let { done: t, value: r } = e.next();
            return t ? void 0 : r;
          })(n);
        return i[0]
          ? [
              new ee(i[0], function* () {
                for (let e of n) e[0] && (yield e[0]);
              }),
              void 0,
            ]
          : [void 0, i[1]];
      }
      function el(e, t) {
        return new eo({ type: e, schema: null, validator: t });
      }
      function ed(e) {
        return new eo({
          type: "array",
          schema: e,
          *entries(t) {
            if (e && Array.isArray(t))
              for (let [r, n] of t.entries()) yield [r, n, e];
          },
          coercer: (e) => (Array.isArray(e) ? e.slice() : e),
          validator: (e) =>
            Array.isArray(e) ||
            "Expected an array value, but received: ".concat(en(e)),
        });
      }
      function eh() {
        return el("boolean", (e) => "boolean" == typeof e);
      }
      function ef(e) {
        return el(
          "instance",
          (t) =>
            t instanceof e ||
            "Expected a `"
              .concat(e.name, "` instance, but received: ")
              .concat(en(t))
        );
      }
      function ep(e) {
        let t = en(e),
          r = typeof e;
        return new eo({
          type: "literal",
          schema:
            "string" === r || "number" === r || "boolean" === r ? e : null,
          validator: (r) =>
            r === e ||
            "Expected the literal `"
              .concat(t, "`, but received: ")
              .concat(en(r)),
        });
      }
      function eg(e) {
        return new eo({
          ...e,
          validator: (t, r) => null === t || e.validator(t, r),
          refiner: (t, r) => null === t || e.refiner(t, r),
        });
      }
      function ey() {
        return el(
          "number",
          (e) =>
            ("number" == typeof e && !isNaN(e)) ||
            "Expected a number, but received: ".concat(en(e))
        );
      }
      function em(e) {
        return new eo({
          ...e,
          validator: (t, r) => void 0 === t || e.validator(t, r),
          refiner: (t, r) => void 0 === t || e.refiner(t, r),
        });
      }
      function eb(e, t) {
        return new eo({
          type: "record",
          schema: null,
          *entries(r) {
            if (et(r))
              for (let n in r) {
                let i = r[n];
                yield [n, n, e], yield [n, i, t];
              }
          },
          validator: (e) =>
            er(e) || "Expected an object, but received: ".concat(en(e)),
          coercer: (e) => (er(e) ? { ...e } : e),
        });
      }
      function ek() {
        return el(
          "string",
          (e) =>
            "string" == typeof e ||
            "Expected a string, but received: ".concat(en(e))
        );
      }
      function ew(e) {
        let t = el("never", () => !1);
        return new eo({
          type: "tuple",
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              let n = Math.max(e.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
            }
          },
          validator: (e) =>
            Array.isArray(e) ||
            "Expected an array, but received: ".concat(en(e)),
          coercer: (e) => (Array.isArray(e) ? e.slice() : e),
        });
      }
      function eS(e) {
        let t = Object.keys(e);
        return new eo({
          type: "type",
          schema: e,
          *entries(r) {
            if (et(r)) for (let n of t) yield [n, r[n], e[n]];
          },
          validator: (e) =>
            er(e) || "Expected an object, but received: ".concat(en(e)),
          coercer: (e) => (er(e) ? { ...e } : e),
        });
      }
      function ev(e) {
        let t = e.map((e) => e.type).join(" | ");
        return new eo({
          type: "union",
          schema: null,
          coercer(t, r) {
            for (let n of e) {
              let [e, i] = n.validate(t, { coerce: !0, mask: r.mask });
              if (!e) return i;
            }
            return t;
          },
          validator(r, n) {
            let i = [];
            for (let t of e) {
              let [...e] = es(r, t, n),
                [s] = e;
              if (!s[0]) return [];
              for (let [t] of e) t && i.push(t);
            }
            return [
              "Expected the value to satisfy a union of `"
                .concat(t, "`, but received: ")
                .concat(en(r)),
              ...i,
            ];
          },
        });
      }
      function eI() {
        return el("unknown", () => !0);
      }
      function e_(e, t, r) {
        return new eo({
          ...e,
          coercer: (n, i) =>
            eu(n, t)[0] ? e.coercer(n, i) : e.coercer(r(n, i), i),
        });
      }
      var eE = e.i(377879);
      e.i(391323);
      var eA = e.i(724195),
        eB = class extends eA.EventEmitter {
          send(e, t, r) {
            let n = r || t;
            try {
              this.socket.send(e), n();
            } catch (e) {
              n(e);
            }
          }
          close(e, t) {
            this.socket.close(e, t);
          }
          addEventListener(e, t, r) {
            this.socket.addEventListener(e, t, r);
          }
          constructor(e, t, r) {
            super(),
              (0, j._)(this, "socket", void 0),
              (this.socket = new window.WebSocket(e, r)),
              (this.socket.onopen = () => this.emit("open")),
              (this.socket.onmessage = (e) => this.emit("message", e.data)),
              (this.socket.onerror = (e) => this.emit("error", e)),
              (this.socket.onclose = (e) => {
                this.emit("close", e.code, e.reason);
              });
          }
        },
        ex = class {
          encode(e) {
            return JSON.stringify(e);
          }
          decode(e) {
            return JSON.parse(e);
          }
        },
        eP = class extends eA.EventEmitter {
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(e, t, r, n) {
            return (
              n || "object" != typeof r || ((n = r), (r = null)),
              new Promise((i, s) => {
                if (!this.ready) return s(Error("socket not ready"));
                let o = this.generate_request_id(e, t);
                this.socket.send(
                  this.dataPack.encode({
                    jsonrpc: "2.0",
                    method: e,
                    params: t || void 0,
                    id: o,
                  }),
                  n,
                  (e) => {
                    if (e) return s(e);
                    (this.queue[o] = { promise: [i, s] }),
                      r &&
                        (this.queue[o].timeout = setTimeout(() => {
                          delete this.queue[o], s(Error("reply timeout"));
                        }, r));
                  }
                );
              })
            );
          }
          async login(e) {
            let t = await this.call("rpc.login", e);
            if (!t) throw Error("authentication failed");
            return t;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(e, t) {
            return new Promise((r, n) => {
              if (!this.ready) return n(Error("socket not ready"));
              this.socket.send(
                this.dataPack.encode({ jsonrpc: "2.0", method: e, params: t }),
                (e) => {
                  if (e) return n(e);
                  r();
                }
              );
            });
          }
          async subscribe(e) {
            "string" == typeof e && (e = [e]);
            let t = await this.call("rpc.on", e);
            if ("string" == typeof e && "ok" !== t[e])
              throw Error(
                "Failed subscribing to an event '" + e + "' with: " + t[e]
              );
            return t;
          }
          async unsubscribe(e) {
            "string" == typeof e && (e = [e]);
            let t = await this.call("rpc.off", e);
            if ("string" == typeof e && "ok" !== t[e])
              throw Error("Failed unsubscribing from an event with: " + t);
            return t;
          }
          close(e, t) {
            this.socket.close(e || 1e3, t);
          }
          setAutoReconnect(e) {
            this.reconnect = e;
          }
          setReconnectInterval(e) {
            this.reconnect_interval = e;
          }
          setMaxReconnects(e) {
            this.max_reconnects = e;
          }
          _connect(e, t) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(e, t)),
              this.socket.addEventListener("open", () => {
                (this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener("message", (e) => {
                let { data: t } = e;
                t instanceof ArrayBuffer && (t = n.Buffer.from(t).toString());
                try {
                  t = this.dataPack.decode(t);
                } catch (e) {
                  return;
                }
                if (t.notification && this.listeners(t.notification).length) {
                  if (!Object.keys(t.params).length)
                    return this.emit(t.notification);
                  let e = [t.notification];
                  if (t.params.constructor === Object) e.push(t.params);
                  else
                    for (let r = 0; r < t.params.length; r++)
                      e.push(t.params[r]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, e);
                  });
                }
                if (!this.queue[t.id])
                  return t.method
                    ? Promise.resolve().then(() => {
                        this.emit(t.method, null == t ? void 0 : t.params);
                      })
                    : void 0;
                "error" in t == "result" in t &&
                  this.queue[t.id].promise[1](
                    Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[t.id].timeout &&
                    clearTimeout(this.queue[t.id].timeout),
                  t.error
                    ? this.queue[t.id].promise[1](t.error)
                    : this.queue[t.id].promise[0](t.result),
                  delete this.queue[t.id];
              }),
              this.socket.addEventListener("error", (e) =>
                this.emit("error", e)
              ),
              this.socket.addEventListener("close", (r) => {
                let { code: n, reason: i } = r;
                this.ready && setTimeout(() => this.emit("close", n, i), 0),
                  (this.ready = !1),
                  (this.socket = void 0),
                  1e3 !== n &&
                    (this.current_reconnects++,
                    this.reconnect &&
                      (this.max_reconnects > this.current_reconnects ||
                        0 === this.max_reconnects) &&
                      (this.reconnect_timer_id = setTimeout(
                        () => this._connect(e, t),
                        this.reconnect_interval
                      )));
              });
          }
          constructor(
            e,
            t = "ws://localhost:8080",
            {
              autoconnect: r = !0,
              reconnect: n = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: s = 5,
              ...o
            } = {},
            a,
            c
          ) {
            super(),
              (0, j._)(this, "address", void 0),
              (0, j._)(this, "rpc_id", void 0),
              (0, j._)(this, "queue", void 0),
              (0, j._)(this, "options", void 0),
              (0, j._)(this, "autoconnect", void 0),
              (0, j._)(this, "ready", void 0),
              (0, j._)(this, "reconnect", void 0),
              (0, j._)(this, "reconnect_timer_id", void 0),
              (0, j._)(this, "reconnect_interval", void 0),
              (0, j._)(this, "max_reconnects", void 0),
              (0, j._)(this, "rest_options", void 0),
              (0, j._)(this, "current_reconnects", void 0),
              (0, j._)(this, "generate_request_id", void 0),
              (0, j._)(this, "socket", void 0),
              (0, j._)(this, "webSocketFactory", void 0),
              (0, j._)(this, "dataPack", void 0),
              (this.webSocketFactory = e),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = t),
              (this.autoconnect = r),
              (this.ready = !1),
              (this.reconnect = n),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = i),
              (this.max_reconnects = s),
              (this.rest_options = o),
              (this.current_reconnects = 0),
              (this.generate_request_id =
                a ||
                (() =>
                  "number" == typeof this.rpc_id
                    ? ++this.rpc_id
                    : Number(this.rpc_id) + 1)),
              c ? (this.dataPack = c) : (this.dataPack = new ex()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
        },
        eT = e.i(627582),
        eR = e.i(721772);
      let eL = A.utils.randomPrivateKey,
        eC = () => {
          let e = A.utils.randomPrivateKey(),
            t = eO(e),
            r = new Uint8Array(64);
          return r.set(e), r.set(t, 32), { publicKey: t, secretKey: r };
        },
        eO = A.getPublicKey;
      function ez(e) {
        try {
          return A.ExtendedPoint.fromHex(e), !0;
        } catch (e) {
          return !1;
        }
      }
      let eN = (e, t) => A.sign(e, t.slice(0, 32)),
        eU = A.verify,
        eW = (e) =>
          n.Buffer.isBuffer(e)
            ? e
            : e instanceof Uint8Array
            ? n.Buffer.from(e.buffer, e.byteOffset, e.byteLength)
            : n.Buffer.from(e);
      class eK {
        encode() {
          return n.Buffer.from((0, F.serialize)(eM, this));
        }
        static decode(e) {
          return (0, F.deserialize)(eM, this, e);
        }
        static decodeUnchecked(e) {
          return (0, F.deserializeUnchecked)(eM, this, e);
        }
        constructor(e) {
          Object.assign(this, e);
        }
      }
      class eq extends eK {
        constructor(e) {
          if ((super(e), (this.enum = ""), 1 !== Object.keys(e).length))
            throw Error("Enum can only take single value");
          Object.keys(e).map((e) => {
            this.enum = e;
          });
        }
      }
      let eM = new Map(),
        eD = 32,
        eF = 32,
        eV = 1;
      class ej extends eK {
        static unique() {
          let e = new ej(eV);
          return (eV += 1), new ej(e.toBuffer());
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return M.default.encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          let e = this.toBuffer();
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        toBuffer() {
          let e = this._bn.toArrayLike(n.Buffer);
          if (e.length === eF) return e;
          let t = n.Buffer.alloc(32);
          return e.copy(t, 32 - e.length), t;
        }
        get [Symbol.toStringTag]() {
          return "PublicKey(".concat(this.toString(), ")");
        }
        toString() {
          return this.toBase58();
        }
        static async createWithSeed(e, t, r) {
          let i = n.Buffer.concat([
            e.toBuffer(),
            n.Buffer.from(t),
            r.toBuffer(),
          ]);
          return new ej((0, D.sha256)(i));
        }
        static createProgramAddressSync(e, t) {
          let r = n.Buffer.alloc(0);
          e.forEach(function (e) {
            if (e.length > eD) throw TypeError("Max seed length exceeded");
            r = n.Buffer.concat([r, eW(e)]);
          }),
            (r = n.Buffer.concat([
              r,
              t.toBuffer(),
              n.Buffer.from("ProgramDerivedAddress"),
            ]));
          let i = (0, D.sha256)(r);
          if (ez(i))
            throw Error("Invalid seeds, address must fall off the curve");
          return new ej(i);
        }
        static async createProgramAddress(e, t) {
          return this.createProgramAddressSync(e, t);
        }
        static findProgramAddressSync(e, t) {
          let r,
            i = 255;
          for (; 0 != i; ) {
            try {
              let s = e.concat(n.Buffer.from([i]));
              r = this.createProgramAddressSync(s, t);
            } catch (e) {
              if (e instanceof TypeError) throw e;
              i--;
              continue;
            }
            return [r, i];
          }
          throw Error("Unable to find a viable program address nonce");
        }
        static async findProgramAddress(e, t) {
          return this.findProgramAddressSync(e, t);
        }
        static isOnCurve(e) {
          return ez(new ej(e).toBytes());
        }
        constructor(e) {
          if ((super({}), (this._bn = void 0), void 0 !== e._bn))
            this._bn = e._bn;
          else {
            if ("string" == typeof e) {
              let t = M.default.decode(e);
              if (t.length != eF) throw Error("Invalid public key input");
              this._bn = new q.default(t);
            } else this._bn = new q.default(e);
            if (this._bn.byteLength() > eF)
              throw Error("Invalid public key input");
          }
        }
      }
      (ej.default = new ej("11111111111111111111111111111111")),
        eM.set(ej, { kind: "struct", fields: [["_bn", "u256"]] });
      class eH {
        get publicKey() {
          return new ej(this._publicKey);
        }
        get secretKey() {
          return n.Buffer.concat([this._secretKey, this._publicKey], 64);
        }
        constructor(e) {
          if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
            let t = eW(e);
            if (64 !== e.length) throw Error("bad secret key size");
            (this._publicKey = t.slice(32, 64)),
              (this._secretKey = t.slice(0, 32));
          } else
            (this._secretKey = eW(eL())),
              (this._publicKey = eW(eO(this._secretKey)));
        }
      }
      let eG = new ej("BPFLoader1111111111111111111111111111111111"),
        eJ = 1232,
        eY = 127,
        eZ = 64;
      class eX extends Error {
        constructor(e) {
          super("Signature ".concat(e, " has expired: block height exceeded.")),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(eX.prototype, "name", {
        value: "TransactionExpiredBlockheightExceededError",
      });
      class eQ extends Error {
        constructor(e, t) {
          super(
            "Transaction was not confirmed in ".concat(
              t.toFixed(2),
              " seconds. It is "
            ) +
              "unknown if it succeeded or failed. Check signature " +
              "".concat(e, " using the Solana Explorer or CLI tools.")
          ),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(eQ.prototype, "name", {
        value: "TransactionExpiredTimeoutError",
      });
      class e$ extends Error {
        constructor(e) {
          super(
            "Signature ".concat(
              e,
              " has expired: the nonce is no longer valid."
            )
          ),
            (this.signature = void 0),
            (this.signature = e);
        }
      }
      Object.defineProperty(e$.prototype, "name", {
        value: "TransactionExpiredNonceInvalidError",
      });
      class e1 {
        keySegments() {
          let e = [this.staticAccountKeys];
          return (
            this.accountKeysFromLookups &&
              (e.push(this.accountKeysFromLookups.writable),
              e.push(this.accountKeysFromLookups.readonly)),
            e
          );
        }
        get(e) {
          for (let t of this.keySegments())
            if (e < t.length) return t[e];
            else e -= t.length;
        }
        get length() {
          return this.keySegments().flat().length;
        }
        compileInstructions(e) {
          if (this.length > 256)
            throw Error(
              "Account index overflow encountered during compilation"
            );
          let t = new Map();
          this.keySegments()
            .flat()
            .forEach((e, r) => {
              t.set(e.toBase58(), r);
            });
          let r = (e) => {
            let r = t.get(e.toBase58());
            if (void 0 === r)
              throw Error(
                "Encountered an unknown instruction account key during compilation"
              );
            return r;
          };
          return e.map((e) => ({
            programIdIndex: r(e.programId),
            accountKeyIndexes: e.keys.map((e) => r(e.pubkey)),
            data: e.data,
          }));
        }
        constructor(e, t) {
          (this.staticAccountKeys = void 0),
            (this.accountKeysFromLookups = void 0),
            (this.staticAccountKeys = e),
            (this.accountKeysFromLookups = t);
        }
      }
      let e0 = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "publicKey";
          return V.blob(32, e);
        },
        e2 = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "signature";
          return V.blob(64, e);
        },
        e6 = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "string",
            t = V.struct(
              [
                V.u32("length"),
                V.u32("lengthPadding"),
                V.blob(V.offset(V.u32(), -8), "chars"),
              ],
              e
            ),
            r = t.decode.bind(t),
            i = t.encode.bind(t);
          return (
            (t.decode = (e, t) => r(e, t).chars.toString()),
            (t.encode = (e, t, r) =>
              i({ chars: n.Buffer.from(e, "utf8") }, t, r)),
            (t.alloc = (e) =>
              V.u32().span + V.u32().span + n.Buffer.from(e, "utf8").length),
            t
          );
        };
      function e5(e) {
        let t = 0,
          r = 0;
        for (;;) {
          let n = e.shift();
          if (((t |= (127 & n) << (7 * r)), (r += 1), (128 & n) == 0)) break;
        }
        return t;
      }
      function e3(e, t) {
        let r = t;
        for (;;) {
          let t = 127 & r;
          if (0 == (r >>= 7)) {
            e.push(t);
            break;
          }
          (t |= 128), e.push(t);
        }
      }
      function e8(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      class e4 {
        static compile(e, t) {
          let r = new Map(),
            n = (e) => {
              let t = e.toBase58(),
                n = r.get(t);
              return (
                void 0 === n &&
                  ((n = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                  r.set(t, n)),
                n
              );
            },
            i = n(t);
          for (let t of ((i.isSigner = !0), (i.isWritable = !0), e))
            for (let e of ((n(t.programId).isInvoked = !0), t.keys)) {
              let t = n(e.pubkey);
              t.isSigner || (t.isSigner = e.isSigner),
                t.isWritable || (t.isWritable = e.isWritable);
            }
          return new e4(t, r);
        }
        getMessageComponents() {
          let e = [...this.keyMetaMap.entries()];
          e8(e.length <= 256, "Max static account keys length exceeded");
          let t = e.filter((e) => {
              let [, t] = e;
              return t.isSigner && t.isWritable;
            }),
            r = e.filter((e) => {
              let [, t] = e;
              return t.isSigner && !t.isWritable;
            }),
            n = e.filter((e) => {
              let [, t] = e;
              return !t.isSigner && t.isWritable;
            }),
            i = e.filter((e) => {
              let [, t] = e;
              return !t.isSigner && !t.isWritable;
            }),
            s = {
              numRequiredSignatures: t.length + r.length,
              numReadonlySignedAccounts: r.length,
              numReadonlyUnsignedAccounts: i.length,
            };
          {
            e8(t.length > 0, "Expected at least one writable signer key");
            let [e] = t[0];
            e8(
              e === this.payer.toBase58(),
              "Expected first writable signer key to be the fee payer"
            );
          }
          return [
            s,
            [
              ...t.map((e) => {
                let [t] = e;
                return new ej(t);
              }),
              ...r.map((e) => {
                let [t] = e;
                return new ej(t);
              }),
              ...n.map((e) => {
                let [t] = e;
                return new ej(t);
              }),
              ...i.map((e) => {
                let [t] = e;
                return new ej(t);
              }),
            ],
          ];
        }
        extractTableLookup(e) {
          let [t, r] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && e.isWritable
            ),
            [n, i] = this.drainKeysFoundInLookupTable(
              e.state.addresses,
              (e) => !e.isSigner && !e.isInvoked && !e.isWritable
            );
          if (0 !== t.length || 0 !== n.length)
            return [
              { accountKey: e.key, writableIndexes: t, readonlyIndexes: n },
              { writable: r, readonly: i },
            ];
        }
        drainKeysFoundInLookupTable(e, t) {
          let r = [],
            n = [];
          for (let [i, s] of this.keyMetaMap.entries())
            if (t(s)) {
              let t = new ej(i),
                s = e.findIndex((e) => e.equals(t));
              s >= 0 &&
                (e8(s < 256, "Max lookup table index exceeded"),
                r.push(s),
                n.push(t),
                this.keyMetaMap.delete(i));
            }
          return [r, n];
        }
        constructor(e, t) {
          (this.payer = void 0),
            (this.keyMetaMap = void 0),
            (this.payer = e),
            (this.keyMetaMap = t);
        }
      }
      let e7 = "Reached end of buffer unexpectedly";
      function e9(e) {
        if (0 === e.length) throw Error(e7);
        return e.shift();
      }
      function te(e) {
        for (
          var t, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
          i < r;
          i++
        )
          n[i - 1] = arguments[i];
        let [s] = n;
        if (
          2 === n.length
            ? s + (null != (t = n[1]) ? t : 0) > e.length
            : s >= e.length
        )
          throw Error(e7);
        return e.splice(...n);
      }
      class tt {
        get version() {
          return "legacy";
        }
        get staticAccountKeys() {
          return this.accountKeys;
        }
        get compiledInstructions() {
          return this.instructions.map((e) => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: M.default.decode(e.data),
          }));
        }
        get addressTableLookups() {
          return [];
        }
        getAccountKeys() {
          return new e1(this.staticAccountKeys);
        }
        static compile(e) {
          let [t, r] = e4
              .compile(e.instructions, e.payerKey)
              .getMessageComponents(),
            n = new e1(r)
              .compileInstructions(e.instructions)
              .map((e) => ({
                programIdIndex: e.programIdIndex,
                accounts: e.accountKeyIndexes,
                data: M.default.encode(e.data),
              }));
          return new tt({
            header: t,
            accountKeys: r,
            recentBlockhash: e.recentBlockhash,
            instructions: n,
          });
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures;
          if (!(e >= this.header.numRequiredSignatures))
            return e < t - this.header.numReadonlySignedAccounts;
          {
            let r =
              this.accountKeys.length -
              t -
              this.header.numReadonlyUnsignedAccounts;
            return e - t < r;
          }
        }
        isProgramId(e) {
          return this.indexToProgramIds.has(e);
        }
        programIds() {
          return [...this.indexToProgramIds.values()];
        }
        nonProgramIds() {
          return this.accountKeys.filter((e, t) => !this.isProgramId(t));
        }
        serialize() {
          let e = this.accountKeys.length,
            t = [];
          e3(t, e);
          let r = this.instructions.map((e) => {
              let { accounts: t, programIdIndex: r } = e,
                i = Array.from(M.default.decode(e.data)),
                s = [];
              e3(s, t.length);
              let o = [];
              return (
                e3(o, i.length),
                {
                  programIdIndex: r,
                  keyIndicesCount: n.Buffer.from(s),
                  keyIndices: t,
                  dataLength: n.Buffer.from(o),
                  data: i,
                }
              );
            }),
            i = [];
          e3(i, r.length);
          let s = n.Buffer.alloc(eJ);
          n.Buffer.from(i).copy(s);
          let o = i.length;
          r.forEach((e) => {
            let t = V.struct([
              V.u8("programIdIndex"),
              V.blob(e.keyIndicesCount.length, "keyIndicesCount"),
              V.seq(V.u8("keyIndex"), e.keyIndices.length, "keyIndices"),
              V.blob(e.dataLength.length, "dataLength"),
              V.seq(V.u8("userdatum"), e.data.length, "data"),
            ]).encode(e, s, o);
            o += t;
          }),
            (s = s.slice(0, o));
          let a = V.struct([
              V.blob(1, "numRequiredSignatures"),
              V.blob(1, "numReadonlySignedAccounts"),
              V.blob(1, "numReadonlyUnsignedAccounts"),
              V.blob(t.length, "keyCount"),
              V.seq(e0("key"), e, "keys"),
              e0("recentBlockhash"),
            ]),
            c = {
              numRequiredSignatures: n.Buffer.from([
                this.header.numRequiredSignatures,
              ]),
              numReadonlySignedAccounts: n.Buffer.from([
                this.header.numReadonlySignedAccounts,
              ]),
              numReadonlyUnsignedAccounts: n.Buffer.from([
                this.header.numReadonlyUnsignedAccounts,
              ]),
              keyCount: n.Buffer.from(t),
              keys: this.accountKeys.map((e) => eW(e.toBytes())),
              recentBlockhash: M.default.decode(this.recentBlockhash),
            },
            u = n.Buffer.alloc(2048),
            l = a.encode(c, u);
          return s.copy(u, l), u.slice(0, l + s.length);
        }
        static from(e) {
          let t = [...e],
            r = e9(t);
          if (r !== (r & eY))
            throw Error(
              "Versioned messages must be deserialized with VersionedMessage.deserialize()"
            );
          let i = e9(t),
            s = e9(t),
            o = e5(t),
            a = [];
          for (let e = 0; e < o; e++) {
            let e = te(t, 0, eF);
            a.push(new ej(n.Buffer.from(e)));
          }
          let c = te(t, 0, eF),
            u = e5(t),
            l = [];
          for (let e = 0; e < u; e++) {
            let e = e9(t),
              r = e5(t),
              i = te(t, 0, r),
              s = e5(t),
              o = te(t, 0, s),
              a = M.default.encode(n.Buffer.from(o));
            l.push({ programIdIndex: e, accounts: i, data: a });
          }
          return new tt({
            header: {
              numRequiredSignatures: r,
              numReadonlySignedAccounts: i,
              numReadonlyUnsignedAccounts: s,
            },
            recentBlockhash: M.default.encode(n.Buffer.from(c)),
            accountKeys: a,
            instructions: l,
          });
        }
        constructor(e) {
          (this.header = void 0),
            (this.accountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.instructions = void 0),
            (this.indexToProgramIds = new Map()),
            (this.header = e.header),
            (this.accountKeys = e.accountKeys.map((e) => new ej(e))),
            (this.recentBlockhash = e.recentBlockhash),
            (this.instructions = e.instructions),
            this.instructions.forEach((e) =>
              this.indexToProgramIds.set(
                e.programIdIndex,
                this.accountKeys[e.programIdIndex]
              )
            );
        }
      }
      class tr {
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (let t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new e1(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures,
            r = this.staticAccountKeys.length;
          if (e >= r)
            return (
              e - r <
              this.addressTableLookups.reduce(
                (e, t) => e + t.writableIndexes.length,
                0
              )
            );
          if (!(e >= this.header.numRequiredSignatures))
            return e < t - this.header.numReadonlySignedAccounts;
          {
            let n = r - t - this.header.numReadonlyUnsignedAccounts;
            return e - t < n;
          }
        }
        resolveAddressTableLookups(e) {
          let t = { writable: [], readonly: [] };
          for (let r of this.addressTableLookups) {
            let n = e.find((e) => e.key.equals(r.accountKey));
            if (!n)
              throw Error(
                "Failed to find address lookup table account for table key ".concat(
                  r.accountKey.toBase58()
                )
              );
            for (let e of r.writableIndexes)
              if (e < n.state.addresses.length)
                t.writable.push(n.state.addresses[e]);
              else
                throw Error(
                  "Failed to find address for index "
                    .concat(e, " in address lookup table ")
                    .concat(r.accountKey.toBase58())
                );
            for (let e of r.readonlyIndexes)
              if (e < n.state.addresses.length)
                t.readonly.push(n.state.addresses[e]);
              else
                throw Error(
                  "Failed to find address for index "
                    .concat(e, " in address lookup table ")
                    .concat(r.accountKey.toBase58())
                );
          }
          return t;
        }
        static compile(e) {
          let t = e4.compile(e.instructions, e.payerKey),
            r = [],
            n = { writable: [], readonly: [] };
          for (let i of e.addressLookupTableAccounts || []) {
            let e = t.extractTableLookup(i);
            if (void 0 !== e) {
              let [t, { writable: i, readonly: s }] = e;
              r.push(t), n.writable.push(...i), n.readonly.push(...s);
            }
          }
          let [i, s] = t.getMessageComponents(),
            o = new e1(s, n).compileInstructions(e.instructions);
          return new tr({
            header: i,
            staticAccountKeys: s,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: o,
            addressTableLookups: r,
          });
        }
        serialize() {
          let e = [];
          e3(e, this.staticAccountKeys.length);
          let t = this.serializeInstructions(),
            r = [];
          e3(r, this.compiledInstructions.length);
          let n = this.serializeAddressTableLookups(),
            i = [];
          e3(i, this.addressTableLookups.length);
          let s = V.struct([
              V.u8("prefix"),
              V.struct(
                [
                  V.u8("numRequiredSignatures"),
                  V.u8("numReadonlySignedAccounts"),
                  V.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              V.blob(e.length, "staticAccountKeysLength"),
              V.seq(e0(), this.staticAccountKeys.length, "staticAccountKeys"),
              e0("recentBlockhash"),
              V.blob(r.length, "instructionsLength"),
              V.blob(t.length, "serializedInstructions"),
              V.blob(i.length, "addressTableLookupsLength"),
              V.blob(n.length, "serializedAddressTableLookups"),
            ]),
            o = new Uint8Array(eJ),
            a = s.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((e) =>
                  e.toBytes()
                ),
                recentBlockhash: M.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(r),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(i),
                serializedAddressTableLookups: n,
              },
              o
            );
          return o.slice(0, a);
        }
        serializeInstructions() {
          let e = 0,
            t = new Uint8Array(eJ);
          for (let r of this.compiledInstructions) {
            let n = [];
            e3(n, r.accountKeyIndexes.length);
            let i = [];
            e3(i, r.data.length);
            let s = V.struct([
              V.u8("programIdIndex"),
              V.blob(n.length, "encodedAccountKeyIndexesLength"),
              V.seq(V.u8(), r.accountKeyIndexes.length, "accountKeyIndexes"),
              V.blob(i.length, "encodedDataLength"),
              V.blob(r.data.length, "data"),
            ]);
            e += s.encode(
              {
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(n),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(i),
                data: r.data,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0,
            t = new Uint8Array(eJ);
          for (let r of this.addressTableLookups) {
            let n = [];
            e3(n, r.writableIndexes.length);
            let i = [];
            e3(i, r.readonlyIndexes.length);
            let s = V.struct([
              e0("accountKey"),
              V.blob(n.length, "encodedWritableIndexesLength"),
              V.seq(V.u8(), r.writableIndexes.length, "writableIndexes"),
              V.blob(i.length, "encodedReadonlyIndexesLength"),
              V.seq(V.u8(), r.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            e += s.encode(
              {
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(n),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(i),
                readonlyIndexes: r.readonlyIndexes,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e],
            r = e9(t),
            n = r & eY;
          e8(r !== n, "Expected versioned message but received legacy message"),
            e8(
              0 === n,
              "Expected versioned message with version 0 but found version ".concat(
                n
              )
            );
          let i = {
              numRequiredSignatures: e9(t),
              numReadonlySignedAccounts: e9(t),
              numReadonlyUnsignedAccounts: e9(t),
            },
            s = [],
            o = e5(t);
          for (let e = 0; e < o; e++) s.push(new ej(te(t, 0, eF)));
          let a = M.default.encode(te(t, 0, eF)),
            c = e5(t),
            u = [];
          for (let e = 0; e < c; e++) {
            let e = e9(t),
              r = e5(t),
              n = te(t, 0, r),
              i = e5(t),
              s = new Uint8Array(te(t, 0, i));
            u.push({ programIdIndex: e, accountKeyIndexes: n, data: s });
          }
          let l = e5(t),
            d = [];
          for (let e = 0; e < l; e++) {
            let e = new ej(te(t, 0, eF)),
              r = e5(t),
              n = te(t, 0, r),
              i = e5(t),
              s = te(t, 0, i);
            d.push({ accountKey: e, writableIndexes: n, readonlyIndexes: s });
          }
          return new tr({
            header: i,
            staticAccountKeys: s,
            recentBlockhash: a,
            compiledInstructions: u,
            addressTableLookups: d,
          });
        }
        constructor(e) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups);
        }
      }
      let tn = {
          deserializeMessageVersion(e) {
            let t = e[0],
              r = t & eY;
            return r === t ? "legacy" : r;
          },
          deserialize: (e) => {
            let t = tn.deserializeMessageVersion(e);
            if ("legacy" === t) return tt.from(e);
            if (0 === t) return tr.deserialize(e);
            throw Error(
              "Transaction message version ".concat(
                t,
                " deserialization is not supported"
              )
            );
          },
        },
        ti = (function (e) {
          return (
            (e[(e.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
            (e[(e.PROCESSED = 1)] = "PROCESSED"),
            (e[(e.TIMED_OUT = 2)] = "TIMED_OUT"),
            (e[(e.NONCE_INVALID = 3)] = "NONCE_INVALID"),
            e
          );
        })({}),
        ts = n.Buffer.alloc(eZ).fill(0);
      class to {
        toJSON() {
          return {
            keys: this.keys.map((e) => {
              let { pubkey: t, isSigner: r, isWritable: n } = e;
              return { pubkey: t.toJSON(), isSigner: r, isWritable: n };
            }),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
        constructor(e) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = n.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data);
        }
      }
      class ta {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map((e) => {
              let { publicKey: t } = e;
              return t.toJSON();
            }),
          };
        }
        add() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw Error("No instructions");
          return (
            t.forEach((e) => {
              "instructions" in e
                ? (this.instructions = this.instructions.concat(e.instructions))
                : "data" in e && "programId" in e && "keys" in e
                ? this.instructions.push(e)
                : this.instructions.push(new to(e));
            }),
            this
          );
        }
        compileMessage() {
          let e, t, r;
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                (t =
                  this.instructions[0] != this.nonceInfo.nonceInstruction
                    ? [this.nonceInfo.nonceInstruction, ...this.instructions]
                    : this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw Error("Transaction recentBlockhash required");
          if (
            (t.length < 1 && console.warn("No instructions provided"),
            this.feePayer)
          )
            r = this.feePayer;
          else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            r = this.signatures[0].publicKey;
          else throw Error("Transaction fee payer required");
          for (let e = 0; e < t.length; e++)
            if (void 0 === t[e].programId)
              throw Error(
                "Transaction instruction index ".concat(
                  e,
                  " has undefined program id"
                )
              );
          let n = [],
            i = [];
          t.forEach((e) => {
            e.keys.forEach((e) => {
              i.push({ ...e });
            });
            let t = e.programId.toString();
            n.includes(t) || n.push(t);
          }),
            n.forEach((e) => {
              i.push({ pubkey: new ej(e), isSigner: !1, isWritable: !1 });
            });
          let s = [];
          i.forEach((e) => {
            let t = e.pubkey.toString(),
              r = s.findIndex((e) => e.pubkey.toString() === t);
            r > -1
              ? ((s[r].isWritable = s[r].isWritable || e.isWritable),
                (s[r].isSigner = s[r].isSigner || e.isSigner))
              : s.push(e);
          }),
            s.sort(function (e, t) {
              return e.isSigner !== t.isSigner
                ? e.isSigner
                  ? -1
                  : 1
                : e.isWritable !== t.isWritable
                ? e.isWritable
                  ? -1
                  : 1
                : e.pubkey
                    .toBase58()
                    .localeCompare(t.pubkey.toBase58(), "en", {
                      localeMatcher: "best fit",
                      usage: "sort",
                      sensitivity: "variant",
                      ignorePunctuation: !1,
                      numeric: !1,
                      caseFirst: "lower",
                    });
            });
          let o = s.findIndex((e) => e.pubkey.equals(r));
          if (o > -1) {
            let [e] = s.splice(o, 1);
            (e.isSigner = !0), (e.isWritable = !0), s.unshift(e);
          } else s.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
          for (let e of this.signatures) {
            let t = s.findIndex((t) => t.pubkey.equals(e.publicKey));
            if (t > -1)
              s[t].isSigner ||
                ((s[t].isSigner = !0),
                console.warn(
                  "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                ));
            else throw Error("unknown signer: ".concat(e.publicKey.toString()));
          }
          let a = 0,
            c = 0,
            u = 0,
            l = [],
            d = [];
          s.forEach((e) => {
            let { pubkey: t, isSigner: r, isWritable: n } = e;
            r
              ? (l.push(t.toString()), (a += 1), n || (c += 1))
              : (d.push(t.toString()), n || (u += 1));
          });
          let h = l.concat(d),
            f = t.map((e) => {
              let { data: t, programId: r } = e;
              return {
                programIdIndex: h.indexOf(r.toString()),
                accounts: e.keys.map((e) => h.indexOf(e.pubkey.toString())),
                data: M.default.encode(t),
              };
            });
          return (
            f.forEach((e) => {
              e8(e.programIdIndex >= 0), e.accounts.forEach((e) => e8(e >= 0));
            }),
            new tt({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: c,
                numReadonlyUnsignedAccounts: u,
              },
              accountKeys: h,
              recentBlockhash: e,
              instructions: f,
            })
          );
        }
        _compile() {
          let e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          return this.signatures.length === t.length &&
            this.signatures.every((e, r) => t[r].equals(e.publicKey))
            ? e
            : ((this.signatures = t.map((e) => ({
                signature: null,
                publicKey: e,
              }))),
              e);
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        async getEstimatedFee(e) {
          return (await e.getFeeForMessage(this.compileMessage())).value;
        }
        setSigners() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw Error("No signers");
          let n = new Set();
          this.signatures = t
            .filter((e) => {
              let t = e.toString();
              return !n.has(t) && (n.add(t), !0);
            })
            .map((e) => ({ signature: null, publicKey: e }));
        }
        sign() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw Error("No signers");
          let n = new Set(),
            i = [];
          for (let e of t) {
            let t = e.publicKey.toString();
            n.has(t) || (n.add(t), i.push(e));
          }
          this.signatures = i.map((e) => ({
            signature: null,
            publicKey: e.publicKey,
          }));
          let s = this._compile();
          this._partialSign(s, ...i);
        }
        partialSign() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 === t.length) throw Error("No signers");
          let n = new Set(),
            i = [];
          for (let e of t) {
            let t = e.publicKey.toString();
            n.has(t) || (n.add(t), i.push(e));
          }
          let s = this._compile();
          this._partialSign(s, ...i);
        }
        _partialSign(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
            n < t;
            n++
          )
            r[n - 1] = arguments[n];
          let i = e.serialize();
          r.forEach((e) => {
            let t = eN(i, e.secretKey);
            this._addSignature(e.publicKey, eW(t));
          });
        }
        addSignature(e, t) {
          this._compile(), this._addSignature(e, t);
        }
        _addSignature(e, t) {
          e8(64 === t.length);
          let r = this.signatures.findIndex((t) => e.equals(t.publicKey));
          if (r < 0) throw Error("unknown signer: ".concat(e.toString()));
          this.signatures[r].signature = n.Buffer.from(t);
        }
        verifySignatures() {
          let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          return !this._getMessageSignednessErrors(this.serializeMessage(), e);
        }
        _getMessageSignednessErrors(e, t) {
          let r = {};
          for (let { signature: n, publicKey: i } of this.signatures)
            null === n
              ? t && (r.missing || (r.missing = [])).push(i)
              : eU(n, e, i.toBytes()) ||
                (r.invalid || (r.invalid = [])).push(i);
          return r.invalid || r.missing ? r : void 0;
        }
        serialize(e) {
          let { requireAllSignatures: t, verifySignatures: r } = Object.assign(
              { requireAllSignatures: !0, verifySignatures: !0 },
              e
            ),
            n = this.serializeMessage();
          if (r) {
            let e = this._getMessageSignednessErrors(n, t);
            if (e) {
              let t = "Signature verification failed.";
              throw (
                (e.invalid &&
                  (t += "\nInvalid signature for public key"
                    .concat(1 === e.invalid.length ? "" : "(s)", " [`")
                    .concat(
                      e.invalid.map((e) => e.toBase58()).join("`, `"),
                      "`]."
                    )),
                e.missing &&
                  (t += "\nMissing signature for public key"
                    .concat(1 === e.missing.length ? "" : "(s)", " [`")
                    .concat(
                      e.missing.map((e) => e.toBase58()).join("`, `"),
                      "`]."
                    )),
                Error(t))
              );
            }
          }
          return this._serialize(n);
        }
        _serialize(e) {
          let { signatures: t } = this,
            r = [];
          e3(r, t.length);
          let i = r.length + 64 * t.length + e.length,
            s = n.Buffer.alloc(i);
          return (
            e8(t.length < 256),
            n.Buffer.from(r).copy(s, 0),
            t.forEach((e, t) => {
              let { signature: i } = e;
              null !== i &&
                (e8(64 === i.length, "signature has invalid length"),
                n.Buffer.from(i).copy(s, r.length + 64 * t));
            }),
            e.copy(s, r.length + 64 * t.length),
            e8(
              s.length <= eJ,
              "Transaction too large: ".concat(s.length, " > ").concat(eJ)
            ),
            s
          );
        }
        get keys() {
          return (
            e8(1 === this.instructions.length),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            e8(1 === this.instructions.length), this.instructions[0].programId
          );
        }
        get data() {
          return e8(1 === this.instructions.length), this.instructions[0].data;
        }
        static from(e) {
          let t = [...e],
            r = e5(t),
            i = [];
          for (let e = 0; e < r; e++) {
            let e = te(t, 0, eZ);
            i.push(M.default.encode(n.Buffer.from(e)));
          }
          return ta.populate(tt.from(t), i);
        }
        static populate(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            r = new ta();
          return (
            (r.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (r.feePayer = e.accountKeys[0]),
            t.forEach((t, n) => {
              let i = {
                signature:
                  t == M.default.encode(ts) ? null : M.default.decode(t),
                publicKey: e.accountKeys[n],
              };
              r.signatures.push(i);
            }),
            e.instructions.forEach((t) => {
              let n = t.accounts.map((t) => {
                let n = e.accountKeys[t];
                return {
                  pubkey: n,
                  isSigner:
                    r.signatures.some(
                      (e) => e.publicKey.toString() === n.toString()
                    ) || e.isAccountSigner(t),
                  isWritable: e.isAccountWritable(t),
                };
              });
              r.instructions.push(
                new to({
                  keys: n,
                  programId: e.accountKeys[t.programIdIndex],
                  data: M.default.decode(t.data),
                })
              );
            }),
            (r._message = e),
            (r._json = r.toJSON()),
            r
          );
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            !e)
          )
            return;
          if (
            (e.feePayer && (this.feePayer = e.feePayer),
            e.signatures && (this.signatures = e.signatures),
            Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
          ) {
            let { minContextSlot: t, nonceInfo: r } = e;
            (this.minNonceContextSlot = t), (this.nonceInfo = r);
          } else if (
            Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
          ) {
            let { blockhash: t, lastValidBlockHeight: r } = e;
            (this.recentBlockhash = t), (this.lastValidBlockHeight = r);
          } else {
            let { recentBlockhash: t, nonceInfo: r } = e;
            r && (this.nonceInfo = r), (this.recentBlockhash = t);
          }
        }
      }
      class tc {
        static decompile(e, t) {
          let { header: r, compiledInstructions: n, recentBlockhash: i } = e,
            {
              numRequiredSignatures: s,
              numReadonlySignedAccounts: o,
              numReadonlyUnsignedAccounts: a,
            } = r,
            c = s - o;
          e8(c > 0, "Message header is invalid");
          let u = e.staticAccountKeys.length - s - a;
          e8(u >= 0, "Message header is invalid");
          let l = e.getAccountKeys(t),
            d = l.get(0);
          if (void 0 === d)
            throw Error(
              "Failed to decompile message because no account keys were found"
            );
          let h = [];
          for (let e of n) {
            let t = [];
            for (let n of e.accountKeyIndexes) {
              let e,
                i = l.get(n);
              if (void 0 === i)
                throw Error(
                  "Failed to find key for account key index ".concat(n)
                );
              (e =
                n < s
                  ? n < c
                  : n < l.staticAccountKeys.length
                  ? n - s < u
                  : n - l.staticAccountKeys.length <
                    l.accountKeysFromLookups.writable.length),
                t.push({
                  pubkey: i,
                  isSigner: n < r.numRequiredSignatures,
                  isWritable: e,
                });
            }
            let n = l.get(e.programIdIndex);
            if (void 0 === n)
              throw Error(
                "Failed to find program id for program id index ".concat(
                  e.programIdIndex
                )
              );
            h.push(new to({ programId: n, data: eW(e.data), keys: t }));
          }
          return new tc({ payerKey: d, instructions: h, recentBlockhash: i });
        }
        compileToLegacyMessage() {
          return tt.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(e) {
          return tr.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e,
          });
        }
        constructor(e) {
          (this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = e.payerKey),
            (this.instructions = e.instructions),
            (this.recentBlockhash = e.recentBlockhash);
        }
      }
      class tu {
        get version() {
          return this.message.version;
        }
        serialize() {
          let e = this.message.serialize(),
            t = [];
          e3(t, this.signatures.length);
          let r = V.struct([
              V.blob(t.length, "encodedSignaturesLength"),
              V.seq(e2(), this.signatures.length, "signatures"),
              V.blob(e.length, "serializedMessage"),
            ]),
            n = new Uint8Array(2048),
            i = r.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              n
            );
          return n.slice(0, i);
        }
        static deserialize(e) {
          let t = [...e],
            r = [],
            n = e5(t);
          for (let e = 0; e < n; e++) r.push(new Uint8Array(te(t, 0, eZ)));
          return new tu(tn.deserialize(new Uint8Array(t)), r);
        }
        sign(e) {
          let t = this.message.serialize(),
            r = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (let n of e) {
            let e = r.findIndex((e) => e.equals(n.publicKey));
            e8(
              e >= 0,
              "Cannot sign with non signer key ".concat(n.publicKey.toBase58())
            ),
              (this.signatures[e] = eN(t, n.secretKey));
          }
        }
        addSignature(e, t) {
          e8(64 === t.byteLength, "Signature must be 64 bytes long");
          let r = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((t) => t.equals(e));
          e8(
            r >= 0,
            "Can not add signature; `".concat(
              e.toBase58(),
              "` is not required to sign this transaction"
            )
          ),
            (this.signatures[r] = t);
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), void 0 !== t)
          )
            e8(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = t);
          else {
            let t = [];
            for (let r = 0; r < e.header.numRequiredSignatures; r++)
              t.push(new Uint8Array(eZ));
            this.signatures = t;
          }
          this.message = e;
        }
      }
      let tl = new ej("SysvarC1ock11111111111111111111111111111111"),
        td = new ej("SysvarEpochSchedu1e111111111111111111111111"),
        th = new ej("Sysvar1nstructions1111111111111111111111111"),
        tf = new ej("SysvarRecentB1ockHashes11111111111111111111"),
        tp = new ej("SysvarRent111111111111111111111111111111111"),
        tg = new ej("SysvarRewards111111111111111111111111111111"),
        ty = new ej("SysvarS1otHashes111111111111111111111111111"),
        tm = new ej("SysvarS1otHistory11111111111111111111111111"),
        tb = new ej("SysvarStakeHistory1111111111111111111111111");
      class tk extends Error {
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          let e = this.transactionLogs;
          if (null == e || "object" != typeof e || !("then" in e)) return e;
        }
        async getLogs(e) {
          return (
            Array.isArray(this.transactionLogs) ||
              (this.transactionLogs = new Promise((t, r) => {
                e.getTransaction(this.signature)
                  .then((e) => {
                    if (e && e.meta && e.meta.logMessages) {
                      let r = e.meta.logMessages;
                      (this.transactionLogs = r), t(r);
                    } else r(Error("Log messages not found"));
                  })
                  .catch(r);
              })),
            await this.transactionLogs
          );
        }
        constructor({
          action: e,
          signature: t,
          transactionMessage: r,
          logs: n,
        }) {
          let i,
            s = n
              ? "Logs: \n".concat(JSON.stringify(n.slice(-10), null, 2), ". ")
              : "",
            o =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
          switch (e) {
            case "send":
              i =
                "Transaction ".concat(t, " resulted in an error. \n") +
                "".concat(r, ". ") +
                s +
                o;
              break;
            case "simulate":
              i = "Simulation failed. \nMessage: ".concat(r, ". \n") + s + o;
              break;
            default:
              i = "Unknown action '".concat(e, "'");
          }
          super(i),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = t),
            (this.transactionMessage = r),
            (this.transactionLogs = n || void 0);
        }
      }
      let tw = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      };
      class tS extends Error {
        constructor({ code: e, message: t, data: r }, n) {
          super(null != n ? "".concat(n, ": ").concat(t) : t),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = e),
            (this.data = r),
            (this.name = "SolanaJSONRPCError");
        }
      }
      async function tv(e, t, r, n) {
        let i,
          s = n && {
            skipPreflight: n.skipPreflight,
            preflightCommitment: n.preflightCommitment || n.commitment,
            maxRetries: n.maxRetries,
            minContextSlot: n.minContextSlot,
          },
          o = await e.sendTransaction(t, r, s);
        if (null != t.recentBlockhash && null != t.lastValidBlockHeight)
          i = (
            await e.confirmTransaction(
              {
                abortSignal: null == n ? void 0 : n.abortSignal,
                signature: o,
                blockhash: t.recentBlockhash,
                lastValidBlockHeight: t.lastValidBlockHeight,
              },
              n && n.commitment
            )
          ).value;
        else if (null != t.minNonceContextSlot && null != t.nonceInfo) {
          let { nonceInstruction: r } = t.nonceInfo,
            s = r.keys[0].pubkey;
          i = (
            await e.confirmTransaction(
              {
                abortSignal: null == n ? void 0 : n.abortSignal,
                minContextSlot: t.minNonceContextSlot,
                nonceAccountPubkey: s,
                nonceValue: t.nonceInfo.nonce,
                signature: o,
              },
              n && n.commitment
            )
          ).value;
        } else
          (null == n ? void 0 : n.abortSignal) != null &&
            console.warn(
              "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
            ),
            (i = (await e.confirmTransaction(o, n && n.commitment)).value);
        if (i.err) {
          if (null != o)
            throw new tk({
              action: "send",
              signature: o,
              transactionMessage: "Status: (".concat(JSON.stringify(i), ")"),
            });
          throw Error(
            "Transaction ".concat(o, " failed (").concat(JSON.stringify(i), ")")
          );
        }
        return o;
      }
      function tI(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function t_(e, t) {
        let r =
            e.layout.span >= 0
              ? e.layout.span
              : (function e(t, r) {
                  let n = (t) => {
                      if (t.span >= 0) return t.span;
                      if ("function" == typeof t.alloc)
                        return t.alloc(r[t.property]);
                      if ("count" in t && "elementLayout" in t) {
                        let e = r[t.property];
                        if (Array.isArray(e))
                          return e.length * n(t.elementLayout);
                      } else if ("fields" in t)
                        return e({ layout: t }, r[t.property]);
                      return 0;
                    },
                    i = 0;
                  return (
                    t.layout.fields.forEach((e) => {
                      i += n(e);
                    }),
                    i
                  );
                })(e, t),
          i = n.Buffer.alloc(r),
          s = Object.assign({ instruction: e.index }, t);
        return e.layout.encode(s, i), i;
      }
      function tE(e, t) {
        let r;
        try {
          r = e.layout.decode(t);
        } catch (e) {
          throw Error("invalid instruction; " + e);
        }
        if (r.instruction !== e.index)
          throw Error(
            "invalid instruction; instruction index mismatch "
              .concat(r.instruction, " != ")
              .concat(e.index)
          );
        return r;
      }
      let tA = V.nu64("lamportsPerSignature"),
        tB = V.struct([
          V.u32("version"),
          V.u32("state"),
          e0("authorizedPubkey"),
          e0("nonce"),
          V.struct([tA], "feeCalculator"),
        ]),
        tx = tB.span;
      class tP {
        static fromAccountData(e) {
          let t = tB.decode(eW(e), 0);
          return new tP({
            authorizedPubkey: new ej(t.authorizedPubkey),
            nonce: new ej(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
        constructor(e) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator);
        }
      }
      function tT(e) {
        let t = (0, V.blob)(8, e),
          r = t.decode.bind(t),
          n = t.encode.bind(t),
          i = $();
        return (
          (t.decode = (e, t) => {
            let n = r(e, t);
            return i.decode(n);
          }),
          (t.encode = (e, t, r) => n(i.encode(e), t, r)),
          t
        );
      }
      class tR {
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = V.u32("instruction").decode(e.data);
          for (let [e, n] of Object.entries(tL))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error("Instruction type incorrect; not a SystemInstruction");
          return t;
        }
        static decodeCreateAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t, space: r, programId: n } = tE(tL.Create, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            lamports: t,
            space: r,
            programId: new ej(n),
          };
        }
        static decodeTransfer(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { lamports: t } = tE(tL.Transfer, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            lamports: t,
          };
        }
        static decodeTransferWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            lamports: t,
            seed: r,
            programId: n,
          } = tE(tL.TransferWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            basePubkey: e.keys[1].pubkey,
            toPubkey: e.keys[2].pubkey,
            lamports: t,
            seed: r,
            programId: new ej(n),
          };
        }
        static decodeAllocate(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { space: t } = tE(tL.Allocate, e.data);
          return { accountPubkey: e.keys[0].pubkey, space: t };
        }
        static decodeAllocateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: r,
            space: n,
            programId: i,
          } = tE(tL.AllocateWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new ej(t),
            seed: r,
            space: n,
            programId: new ej(i),
          };
        }
        static decodeAssign(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let { programId: t } = tE(tL.Assign, e.data);
          return { accountPubkey: e.keys[0].pubkey, programId: new ej(t) };
        }
        static decodeAssignWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
          let {
            base: t,
            seed: r,
            programId: n,
          } = tE(tL.AssignWithSeed, e.data);
          return {
            accountPubkey: e.keys[0].pubkey,
            basePubkey: new ej(t),
            seed: r,
            programId: new ej(n),
          };
        }
        static decodeCreateWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let {
            base: t,
            seed: r,
            lamports: n,
            space: i,
            programId: s,
          } = tE(tL.CreateWithSeed, e.data);
          return {
            fromPubkey: e.keys[0].pubkey,
            newAccountPubkey: e.keys[1].pubkey,
            basePubkey: new ej(t),
            seed: r,
            lamports: n,
            space: i,
            programId: new ej(s),
          };
        }
        static decodeNonceInitialize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { authorized: t } = tE(tL.InitializeNonceAccount, e.data);
          return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new ej(t) };
        }
        static decodeNonceAdvance(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            tE(tL.AdvanceNonceAccount, e.data),
            {
              noncePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static decodeNonceWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
          let { lamports: t } = tE(tL.WithdrawNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        }
        static decodeNonceAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { authorized: t } = tE(tL.AuthorizeNonceAccount, e.data);
          return {
            noncePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[1].pubkey,
            newAuthorizedPubkey: new ej(t),
          };
        }
        static checkProgramId(e) {
          if (!e.equals(tC.programId))
            throw Error("invalid instruction; programId is not SystemProgram");
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw Error(
              "invalid instruction; found "
                .concat(e.length, " keys, expected at least ")
                .concat(t)
            );
        }
        constructor() {}
      }
      let tL = Object.freeze({
        Create: {
          index: 0,
          layout: V.struct([
            V.u32("instruction"),
            V.ns64("lamports"),
            V.ns64("space"),
            e0("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: V.struct([V.u32("instruction"), e0("programId")]),
        },
        Transfer: {
          index: 2,
          layout: V.struct([V.u32("instruction"), tT("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: V.struct([
            V.u32("instruction"),
            e0("base"),
            e6("seed"),
            V.ns64("lamports"),
            V.ns64("space"),
            e0("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: V.struct([V.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: V.struct([V.u32("instruction"), V.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: V.struct([V.u32("instruction"), e0("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: V.struct([V.u32("instruction"), e0("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: V.struct([V.u32("instruction"), V.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: V.struct([
            V.u32("instruction"),
            e0("base"),
            e6("seed"),
            V.ns64("space"),
            e0("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: V.struct([
            V.u32("instruction"),
            e0("base"),
            e6("seed"),
            e0("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: V.struct([
            V.u32("instruction"),
            tT("lamports"),
            e6("seed"),
            e0("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: V.struct([V.u32("instruction")]),
        },
      });
      class tC {
        static createAccount(e) {
          let t = t_(tL.Create, {
            lamports: e.lamports,
            space: e.space,
            programId: eW(e.programId.toBuffer()),
          });
          return new to({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static transfer(e) {
          let t, r;
          return (
            "basePubkey" in e
              ? ((t = t_(tL.TransferWithSeed, {
                  lamports: BigInt(e.lamports),
                  seed: e.seed,
                  programId: eW(e.programId.toBuffer()),
                })),
                (r = [
                  { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                  { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                  { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
                ]))
              : ((t = t_(tL.Transfer, { lamports: BigInt(e.lamports) })),
                (r = [
                  { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                  { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
                ])),
            new to({ keys: r, programId: this.programId, data: t })
          );
        }
        static assign(e) {
          let t, r;
          return (
            "basePubkey" in e
              ? ((t = t_(tL.AssignWithSeed, {
                  base: eW(e.basePubkey.toBuffer()),
                  seed: e.seed,
                  programId: eW(e.programId.toBuffer()),
                })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                  { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                ]))
              : ((t = t_(tL.Assign, { programId: eW(e.programId.toBuffer()) })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
                ])),
            new to({ keys: r, programId: this.programId, data: t })
          );
        }
        static createAccountWithSeed(e) {
          let t = t_(tL.CreateWithSeed, {
              base: eW(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: eW(e.programId.toBuffer()),
            }),
            r = [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
            ];
          return (
            e.basePubkey.equals(e.fromPubkey) ||
              r.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new to({ keys: r, programId: this.programId, data: t })
          );
        }
        static createNonceAccount(e) {
          let t = new ta();
          "basePubkey" in e && "seed" in e
            ? t.add(
                tC.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: tx,
                  programId: this.programId,
                })
              )
            : t.add(
                tC.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: tx,
                  programId: this.programId,
                })
              );
          let r = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return t.add(this.nonceInitialize(r)), t;
        }
        static nonceInitialize(e) {
          let t = t_(tL.InitializeNonceAccount, {
            authorized: eW(e.authorizedPubkey.toBuffer()),
          });
          return new to({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: tf, isSigner: !1, isWritable: !1 },
              { pubkey: tp, isSigner: !1, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceAdvance(e) {
          let t = t_(tL.AdvanceNonceAccount);
          return new to({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: tf, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceWithdraw(e) {
          let t = t_(tL.WithdrawNonceAccount, { lamports: e.lamports });
          return new to({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: tf, isSigner: !1, isWritable: !1 },
              { pubkey: tp, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static nonceAuthorize(e) {
          let t = t_(tL.AuthorizeNonceAccount, {
            authorized: eW(e.newAuthorizedPubkey.toBuffer()),
          });
          return new to({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: t,
          });
        }
        static allocate(e) {
          let t, r;
          return (
            "basePubkey" in e
              ? ((t = t_(tL.AllocateWithSeed, {
                  base: eW(e.basePubkey.toBuffer()),
                  seed: e.seed,
                  space: e.space,
                  programId: eW(e.programId.toBuffer()),
                })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                  { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                ]))
              : ((t = t_(tL.Allocate, { space: e.space })),
                (r = [
                  { pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 },
                ])),
            new to({ keys: r, programId: this.programId, data: t })
          );
        }
        constructor() {}
      }
      tC.programId = new ej("11111111111111111111111111111111");
      let tO = eJ - 300;
      class tz {
        static getMinNumSignatures(e) {
          return 2 * (Math.ceil(e / tz.chunkSize) + 1 + 1);
        }
        static async load(e, t, r, i, s) {
          {
            let n = await e.getMinimumBalanceForRentExemption(s.length),
              o = await e.getAccountInfo(r.publicKey, "confirmed"),
              a = null;
            if (null !== o) {
              if (o.executable)
                return (
                  console.error(
                    "Program load failed, account is already executable"
                  ),
                  !1
                );
              o.data.length !== s.length &&
                (a = a || new ta()).add(
                  tC.allocate({ accountPubkey: r.publicKey, space: s.length })
                ),
                o.owner.equals(i) ||
                  (a = a || new ta()).add(
                    tC.assign({ accountPubkey: r.publicKey, programId: i })
                  ),
                o.lamports < n &&
                  (a = a || new ta()).add(
                    tC.transfer({
                      fromPubkey: t.publicKey,
                      toPubkey: r.publicKey,
                      lamports: n - o.lamports,
                    })
                  );
            } else
              a = new ta().add(
                tC.createAccount({
                  fromPubkey: t.publicKey,
                  newAccountPubkey: r.publicKey,
                  lamports: n > 0 ? n : 1,
                  space: s.length,
                  programId: i,
                })
              );
            null !== a && (await tv(e, a, [t, r], { commitment: "confirmed" }));
          }
          let o = V.struct([
              V.u32("instruction"),
              V.u32("offset"),
              V.u32("bytesLength"),
              V.u32("bytesLengthPadding"),
              V.seq(V.u8("byte"), V.offset(V.u32(), -8), "bytes"),
            ]),
            a = tz.chunkSize,
            c = 0,
            u = s,
            l = [];
          for (; u.length > 0; ) {
            let s = u.slice(0, a),
              d = n.Buffer.alloc(a + 16);
            o.encode(
              {
                instruction: 0,
                offset: c,
                bytes: s,
                bytesLength: 0,
                bytesLengthPadding: 0,
              },
              d
            );
            let h = new ta().add({
              keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }],
              programId: i,
              data: d,
            });
            l.push(tv(e, h, [t, r], { commitment: "confirmed" })),
              e._rpcEndpoint.includes("solana.com") && (await tI(250)),
              (c += a),
              (u = u.slice(a));
          }
          await Promise.all(l);
          {
            let s = V.struct([V.u32("instruction")]),
              o = n.Buffer.alloc(s.span);
            s.encode({ instruction: 1 }, o);
            let a = new ta().add({
                keys: [
                  { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                  { pubkey: tp, isSigner: !1, isWritable: !1 },
                ],
                programId: i,
                data: o,
              }),
              c = "processed",
              u = await e.sendTransaction(a, [t, r], {
                preflightCommitment: c,
              }),
              { context: l, value: d } = await e.confirmTransaction(
                {
                  signature: u,
                  lastValidBlockHeight: a.lastValidBlockHeight,
                  blockhash: a.recentBlockhash,
                },
                c
              );
            if (d.err)
              throw Error(
                "Transaction "
                  .concat(u, " failed (")
                  .concat(JSON.stringify(d), ")")
              );
            for (;;) {
              try {
                if ((await e.getSlot({ commitment: c })) > l.slot) break;
              } catch (e) {}
              await new Promise((e) => setTimeout(e, Math.round(200)));
            }
          }
          return !0;
        }
        constructor() {}
      }
      tz.chunkSize = tO;
      let tN = new ej("BPFLoader2111111111111111111111111111111111");
      class tU {
        static getMinNumSignatures(e) {
          return tz.getMinNumSignatures(e);
        }
        static load(e, t, r, n, i) {
          return tz.load(e, t, r, i, n);
        }
      }
      var tW = (function (e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      })(
        (function () {
          if (r) return t;
          r = 1;
          var e = Object.prototype.toString,
            n =
              Object.keys ||
              function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t;
              };
          return (t = function (t) {
            var r = (function t(r, i) {
              var s, o, a, c, u, l, d;
              if (!0 === r) return "true";
              if (!1 === r) return "false";
              switch (typeof r) {
                case "object":
                  if (null === r) return null;
                  if (r.toJSON && "function" == typeof r.toJSON)
                    return t(r.toJSON(), i);
                  if ("[object Array]" === (d = e.call(r))) {
                    for (s = 0, a = "[", o = r.length - 1; s < o; s++)
                      a += t(r[s], !0) + ",";
                    return o > -1 && (a += t(r[s], !0)), a + "]";
                  }
                  if ("[object Object]" !== d) return JSON.stringify(r);
                  for (o = (c = n(r).sort()).length, a = "", s = 0; s < o; )
                    void 0 !== (l = t(r[(u = c[s])], !1)) &&
                      (a && (a += ","), (a += JSON.stringify(u) + ":" + l)),
                      s++;
                  return "{" + a + "}";
                case "function":
                case "undefined":
                  return i ? null : void 0;
                case "string":
                  return JSON.stringify(r);
                default:
                  return isFinite(r) ? r : null;
              }
            })(t, !1);
            if (void 0 !== r) return "" + r;
          });
        })()
      );
      function tK(e) {
        let t = 0;
        for (; e > 1; ) (e /= 2), t++;
        return t;
      }
      class tq {
        getEpoch(e) {
          return this.getEpochAndSlotIndex(e)[0];
        }
        getEpochAndSlotIndex(e) {
          if (e < this.firstNormalSlot) {
            var t;
            let r =
                tK(
                  0 === (t = e + 32 + 1)
                    ? 1
                    : (t--,
                      (t |= t >> 1),
                      (t |= t >> 2),
                      (t |= t >> 4),
                      (t |= t >> 8),
                      (t |= t >> 16),
                      (t |= t >> 32) + 1)
                ) -
                tK(32) -
                1,
              n = this.getSlotsInEpoch(r);
            return [r, e - (n - 32)];
          }
          {
            let t = e - this.firstNormalSlot,
              r = Math.floor(t / this.slotsPerEpoch);
            return [this.firstNormalEpoch + r, t % this.slotsPerEpoch];
          }
        }
        getFirstSlotInEpoch(e) {
          return e <= this.firstNormalEpoch
            ? (Math.pow(2, e) - 1) * 32
            : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
                this.firstNormalSlot;
        }
        getLastSlotInEpoch(e) {
          return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
        }
        getSlotsInEpoch(e) {
          return e < this.firstNormalEpoch
            ? Math.pow(2, e + tK(32))
            : this.slotsPerEpoch;
        }
        constructor(e, t, r, n, i) {
          (this.slotsPerEpoch = void 0),
            (this.leaderScheduleSlotOffset = void 0),
            (this.warmup = void 0),
            (this.firstNormalEpoch = void 0),
            (this.firstNormalSlot = void 0),
            (this.slotsPerEpoch = e),
            (this.leaderScheduleSlotOffset = t),
            (this.warmup = r),
            (this.firstNormalEpoch = n),
            (this.firstNormalSlot = i);
        }
      }
      var tM = globalThis.fetch;
      class tD extends eP {
        call() {
          for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          let i = null == (e = this.underlyingSocket) ? void 0 : e.readyState;
          return 1 === i
            ? super.call(...r)
            : Promise.reject(
                Error(
                  "Tried to call a JSON-RPC method `" +
                    r[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    i +
                    ")"
                )
              );
        }
        notify() {
          for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          let i = null == (e = this.underlyingSocket) ? void 0 : e.readyState;
          return 1 === i
            ? super.notify(...r)
            : Promise.reject(
                Error(
                  "Tried to send a JSON-RPC notification `" +
                    r[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    i +
                    ")"
                )
              );
        }
        constructor(e, t, r) {
          super(
            (e) => {
              let r = new eB(e, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...t,
              });
              return (
                "socket" in r
                  ? (this.underlyingSocket = r.socket)
                  : (this.underlyingSocket = r),
                r
              );
            },
            e,
            t,
            r
          ),
            (this.underlyingSocket = void 0);
        }
      }
      class tF {
        isActive() {
          let e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          let t = (function (e, t) {
              let r;
              try {
                r = e.layout.decode(t);
              } catch (e) {
                throw Error("invalid instruction; " + e);
              }
              if (r.typeIndex !== e.index)
                throw Error(
                  "invalid account data; account type mismatch "
                    .concat(r.typeIndex, " != ")
                    .concat(e.index)
                );
              return r;
            })(tV, e),
            r = e.length - 56;
          e8(r >= 0, "lookup table is invalid"),
            e8(r % 32 == 0, "lookup table is invalid");
          let { addresses: n } = V.struct([
            V.seq(e0(), r / 32, "addresses"),
          ]).decode(e.slice(56));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              0 !== t.authority.length ? new ej(t.authority[0]) : void 0,
            addresses: n.map((e) => new ej(e)),
          };
        }
        constructor(e) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state);
        }
      }
      let tV = {
          index: 1,
          layout: V.struct([
            V.u32("typeIndex"),
            tT("deactivationSlot"),
            V.nu64("lastExtendedSlot"),
            V.u8("lastExtendedStartIndex"),
            V.u8(),
            V.seq(e0(), V.offset(V.u8(), -1), "authority"),
          ]),
        },
        tj = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i,
        tH = e_(ef(ej), ek(), (e) => new ej(e)),
        tG = ew([ek(), ep("base64")]),
        tJ = e_(ef(n.Buffer), tG, (e) => n.Buffer.from(e[0], "base64")),
        tY = 3e4;
      function tZ(e) {
        let t, r;
        if ("string" == typeof e) t = e;
        else if (e) {
          let { commitment: n, ...i } = e;
          (t = n), (r = i);
        }
        return { commitment: t, config: r };
      }
      function tX(e) {
        return e.map((e) => {
          var t;
          return "memcmp" in e
            ? {
                ...e,
                memcmp: {
                  ...e.memcmp,
                  encoding: null != (t = e.memcmp.encoding) ? t : "base58",
                },
              }
            : e;
        });
      }
      function tQ(e) {
        return ev([
          eS({ jsonrpc: ep("2.0"), id: ek(), result: e }),
          eS({
            jsonrpc: ep("2.0"),
            id: ek(),
            error: eS({
              code: eI(),
              message: ek(),
              data: em(el("any", () => !0)),
            }),
          }),
        ]);
      }
      let t$ = tQ(eI());
      function t1(e) {
        return e_(tQ(e), t$, (t) =>
          "error" in t ? t : { ...t, result: ec(t.result, e) }
        );
      }
      function t0(e) {
        return t1(eS({ context: eS({ slot: ey() }), value: e }));
      }
      function t2(e) {
        return eS({ context: eS({ slot: ey() }), value: e });
      }
      function t6(e, t) {
        return 0 === e
          ? new tr({
              header: t.header,
              staticAccountKeys: t.accountKeys.map((e) => new ej(e)),
              recentBlockhash: t.recentBlockhash,
              compiledInstructions: t.instructions.map((e) => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: M.default.decode(e.data),
              })),
              addressTableLookups: t.addressTableLookups,
            })
          : new tt(t);
      }
      let t5 = eS({
          foundation: ey(),
          foundationTerm: ey(),
          initial: ey(),
          taper: ey(),
          terminal: ey(),
        }),
        t3 = t1(
          ed(
            eg(
              eS({
                epoch: ey(),
                effectiveSlot: ey(),
                amount: ey(),
                postBalance: ey(),
                commission: em(eg(ey())),
              })
            )
          )
        ),
        t8 = ed(eS({ slot: ey(), prioritizationFee: ey() })),
        t4 = eS({
          total: ey(),
          validator: ey(),
          foundation: ey(),
          epoch: ey(),
        }),
        t7 = eS({
          epoch: ey(),
          slotIndex: ey(),
          slotsInEpoch: ey(),
          absoluteSlot: ey(),
          blockHeight: em(ey()),
          transactionCount: em(ey()),
        }),
        t9 = eS({
          slotsPerEpoch: ey(),
          leaderScheduleSlotOffset: ey(),
          warmup: eh(),
          firstNormalEpoch: ey(),
          firstNormalSlot: ey(),
        }),
        re = eb(ek(), ed(ey())),
        rt = eg(ev([eS({}), ek()])),
        rr = eS({ err: rt }),
        rn = ep("receivedSignature"),
        ri = eS({ "solana-core": ek(), "feature-set": em(ey()) }),
        rs = eS({ program: ek(), programId: tH, parsed: eI() }),
        ro = eS({ programId: tH, accounts: ed(tH), data: ek() }),
        ra = t0(
          eS({
            err: eg(ev([eS({}), ek()])),
            logs: eg(ed(ek())),
            accounts: em(
              eg(
                ed(
                  eg(
                    eS({
                      executable: eh(),
                      owner: ek(),
                      lamports: ey(),
                      data: ed(ek()),
                      rentEpoch: em(ey()),
                    })
                  )
                )
              )
            ),
            unitsConsumed: em(ey()),
            returnData: em(
              eg(eS({ programId: ek(), data: ew([ek(), ep("base64")]) }))
            ),
            innerInstructions: em(
              eg(ed(eS({ index: ey(), instructions: ed(ev([rs, ro])) })))
            ),
          })
        ),
        rc = t0(
          eS({
            byIdentity: eb(ek(), ed(ey())),
            range: eS({ firstSlot: ey(), lastSlot: ey() }),
          })
        ),
        ru = t1(t5),
        rl = t1(t4),
        rd = t1(t8),
        rh = t1(t7),
        rf = t1(t9),
        rp = t1(re),
        rg = t1(ey()),
        ry = t0(
          eS({
            total: ey(),
            circulating: ey(),
            nonCirculating: ey(),
            nonCirculatingAccounts: ed(tH),
          })
        ),
        rm = eS({
          amount: ek(),
          uiAmount: eg(ey()),
          decimals: ey(),
          uiAmountString: em(ek()),
        }),
        rb = t0(
          ed(
            eS({
              address: tH,
              amount: ek(),
              uiAmount: eg(ey()),
              decimals: ey(),
              uiAmountString: em(ek()),
            })
          )
        ),
        rk = t0(
          ed(
            eS({
              pubkey: tH,
              account: eS({
                executable: eh(),
                owner: tH,
                lamports: ey(),
                data: tJ,
                rentEpoch: ey(),
              }),
            })
          )
        ),
        rw = eS({ program: ek(), parsed: eI(), space: ey() }),
        rS = t0(
          ed(
            eS({
              pubkey: tH,
              account: eS({
                executable: eh(),
                owner: tH,
                lamports: ey(),
                data: rw,
                rentEpoch: ey(),
              }),
            })
          )
        ),
        rv = t0(ed(eS({ lamports: ey(), address: tH }))),
        rI = eS({
          executable: eh(),
          owner: tH,
          lamports: ey(),
          data: tJ,
          rentEpoch: ey(),
        }),
        r_ = eS({ pubkey: tH, account: rI }),
        rE = e_(ev([ef(n.Buffer), rw]), ev([tG, rw]), (e) =>
          Array.isArray(e) ? ec(e, tJ) : e
        ),
        rA = eS({
          executable: eh(),
          owner: tH,
          lamports: ey(),
          data: rE,
          rentEpoch: ey(),
        }),
        rB = eS({ pubkey: tH, account: rA }),
        rx = eS({
          state: ev([
            ep("active"),
            ep("inactive"),
            ep("activating"),
            ep("deactivating"),
          ]),
          active: ey(),
          inactive: ey(),
        }),
        rP = t1(
          ed(
            eS({
              signature: ek(),
              slot: ey(),
              err: rt,
              memo: eg(ek()),
              blockTime: em(eg(ey())),
            })
          )
        ),
        rT = t1(
          ed(
            eS({
              signature: ek(),
              slot: ey(),
              err: rt,
              memo: eg(ek()),
              blockTime: em(eg(ey())),
            })
          )
        ),
        rR = eS({ subscription: ey(), result: t2(rI) }),
        rL = eS({ pubkey: tH, account: rI }),
        rC = eS({ subscription: ey(), result: t2(rL) }),
        rO = eS({ parent: ey(), slot: ey(), root: ey() }),
        rz = eS({ subscription: ey(), result: rO }),
        rN = ev([
          eS({
            type: ev([
              ep("firstShredReceived"),
              ep("completed"),
              ep("optimisticConfirmation"),
              ep("root"),
            ]),
            slot: ey(),
            timestamp: ey(),
          }),
          eS({
            type: ep("createdBank"),
            parent: ey(),
            slot: ey(),
            timestamp: ey(),
          }),
          eS({
            type: ep("frozen"),
            slot: ey(),
            timestamp: ey(),
            stats: eS({
              numTransactionEntries: ey(),
              numSuccessfulTransactions: ey(),
              numFailedTransactions: ey(),
              maxTransactionsPerEntry: ey(),
            }),
          }),
          eS({ type: ep("dead"), slot: ey(), timestamp: ey(), err: ek() }),
        ]),
        rU = eS({ subscription: ey(), result: rN }),
        rW = eS({ subscription: ey(), result: t2(ev([rr, rn])) }),
        rK = eS({ subscription: ey(), result: ey() }),
        rq = eS({
          pubkey: ek(),
          gossip: eg(ek()),
          tpu: eg(ek()),
          rpc: eg(ek()),
          version: eg(ek()),
        }),
        rM = eS({
          votePubkey: ek(),
          nodePubkey: ek(),
          activatedStake: ey(),
          epochVoteAccount: eh(),
          epochCredits: ed(ew([ey(), ey(), ey()])),
          commission: ey(),
          lastVote: ey(),
          rootSlot: eg(ey()),
        }),
        rD = t1(eS({ current: ed(rM), delinquent: ed(rM) })),
        rF = ev([ep("processed"), ep("confirmed"), ep("finalized")]),
        rV = eS({
          slot: ey(),
          confirmations: eg(ey()),
          err: rt,
          confirmationStatus: em(rF),
        }),
        rj = t0(ed(eg(rV))),
        rH = t1(ey()),
        rG = eS({
          accountKey: tH,
          writableIndexes: ed(ey()),
          readonlyIndexes: ed(ey()),
        }),
        rJ = eS({
          signatures: ed(ek()),
          message: eS({
            accountKeys: ed(ek()),
            header: eS({
              numRequiredSignatures: ey(),
              numReadonlySignedAccounts: ey(),
              numReadonlyUnsignedAccounts: ey(),
            }),
            instructions: ed(
              eS({ accounts: ed(ey()), data: ek(), programIdIndex: ey() })
            ),
            recentBlockhash: ek(),
            addressTableLookups: em(ed(rG)),
          }),
        }),
        rY = eS({
          pubkey: tH,
          signer: eh(),
          writable: eh(),
          source: em(ev([ep("transaction"), ep("lookupTable")])),
        }),
        rZ = eS({ accountKeys: ed(rY), signatures: ed(ek()) }),
        rX = eS({ parsed: eI(), program: ek(), programId: tH }),
        rQ = eS({ accounts: ed(tH), data: ek(), programId: tH }),
        r$ = e_(
          ev([rQ, rX]),
          ev([
            eS({ parsed: eI(), program: ek(), programId: ek() }),
            eS({ accounts: ed(ek()), data: ek(), programId: ek() }),
          ]),
          (e) => ("accounts" in e ? ec(e, rQ) : ec(e, rX))
        ),
        r1 = eS({
          signatures: ed(ek()),
          message: eS({
            accountKeys: ed(rY),
            instructions: ed(r$),
            recentBlockhash: ek(),
            addressTableLookups: em(eg(ed(rG))),
          }),
        }),
        r0 = eS({
          accountIndex: ey(),
          mint: ek(),
          owner: em(ek()),
          programId: em(ek()),
          uiTokenAmount: rm,
        }),
        r2 = eS({ writable: ed(tH), readonly: ed(tH) }),
        r6 = eS({
          err: rt,
          fee: ey(),
          innerInstructions: em(
            eg(
              ed(
                eS({
                  index: ey(),
                  instructions: ed(
                    eS({ accounts: ed(ey()), data: ek(), programIdIndex: ey() })
                  ),
                })
              )
            )
          ),
          preBalances: ed(ey()),
          postBalances: ed(ey()),
          logMessages: em(eg(ed(ek()))),
          preTokenBalances: em(eg(ed(r0))),
          postTokenBalances: em(eg(ed(r0))),
          loadedAddresses: em(r2),
          computeUnitsConsumed: em(ey()),
        }),
        r5 = eS({
          err: rt,
          fee: ey(),
          innerInstructions: em(
            eg(ed(eS({ index: ey(), instructions: ed(r$) })))
          ),
          preBalances: ed(ey()),
          postBalances: ed(ey()),
          logMessages: em(eg(ed(ek()))),
          preTokenBalances: em(eg(ed(r0))),
          postTokenBalances: em(eg(ed(r0))),
          loadedAddresses: em(r2),
          computeUnitsConsumed: em(ey()),
        }),
        r3 = ev([ep(0), ep("legacy")]),
        r8 = eS({
          pubkey: ek(),
          lamports: ey(),
          postBalance: eg(ey()),
          rewardType: eg(ek()),
          commission: em(eg(ey())),
        }),
        r4 = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              transactions: ed(
                eS({ transaction: rJ, meta: eg(r6), version: em(r3) })
              ),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
              blockHeight: eg(ey()),
            })
          )
        ),
        r7 = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
              blockHeight: eg(ey()),
            })
          )
        ),
        r9 = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              transactions: ed(
                eS({ transaction: rZ, meta: eg(r6), version: em(r3) })
              ),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
              blockHeight: eg(ey()),
            })
          )
        ),
        ne = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              transactions: ed(
                eS({ transaction: r1, meta: eg(r5), version: em(r3) })
              ),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
              blockHeight: eg(ey()),
            })
          )
        ),
        nt = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              transactions: ed(
                eS({ transaction: rZ, meta: eg(r5), version: em(r3) })
              ),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
              blockHeight: eg(ey()),
            })
          )
        ),
        nr = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
              blockHeight: eg(ey()),
            })
          )
        ),
        nn = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              transactions: ed(eS({ transaction: rJ, meta: eg(r6) })),
              rewards: em(ed(r8)),
              blockTime: eg(ey()),
            })
          )
        ),
        ni = t1(
          eg(
            eS({
              blockhash: ek(),
              previousBlockhash: ek(),
              parentSlot: ey(),
              signatures: ed(ek()),
              blockTime: eg(ey()),
            })
          )
        ),
        ns = t1(
          eg(
            eS({
              slot: ey(),
              meta: eg(r6),
              blockTime: em(eg(ey())),
              transaction: rJ,
              version: em(r3),
            })
          )
        ),
        no = t1(
          eg(
            eS({
              slot: ey(),
              transaction: r1,
              meta: eg(r5),
              blockTime: em(eg(ey())),
              version: em(r3),
            })
          )
        ),
        na = t0(eS({ blockhash: ek(), lastValidBlockHeight: ey() })),
        nc = t0(eh()),
        nu = t1(
          ed(
            eS({
              slot: ey(),
              numTransactions: ey(),
              numSlots: ey(),
              samplePeriodSecs: ey(),
            })
          )
        ),
        nl = t0(eg(eS({ feeCalculator: eS({ lamportsPerSignature: ey() }) }))),
        nd = t1(ek()),
        nh = t1(ek()),
        nf = eS({ err: rt, logs: ed(ek()), signature: ek() }),
        np = eS({ result: t2(nf), subscription: ey() }),
        ng = { "solana-client": "js/1.0.0-maintenance" };
      class ny {
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        async getBalanceAndContext(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgs([e.toBase58()], r, void 0, n),
            s = ec(await this._rpcRequest("getBalance", i), t0(ey()));
          if ("error" in s)
            throw new tS(
              s.error,
              "failed to get balance for ".concat(e.toBase58())
            );
          return s.result;
        }
        async getBalance(e, t) {
          return await this.getBalanceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw Error(
                "failed to get balance of account " + e.toBase58() + ": " + t
              );
            });
        }
        async getBlockTime(e) {
          let t = ec(await this._rpcRequest("getBlockTime", [e]), t1(eg(ey())));
          if ("error" in t)
            throw new tS(
              t.error,
              "failed to get block time for slot ".concat(e)
            );
          return t.result;
        }
        async getMinimumLedgerSlot() {
          let e = ec(await this._rpcRequest("minimumLedgerSlot", []), t1(ey()));
          if ("error" in e)
            throw new tS(e.error, "failed to get minimum ledger slot");
          return e.result;
        }
        async getFirstAvailableBlock() {
          let e = ec(await this._rpcRequest("getFirstAvailableBlock", []), rg);
          if ("error" in e)
            throw new tS(e.error, "failed to get first available block");
          return e.result;
        }
        async getSupply(e) {
          let t = {};
          t =
            "string" == typeof e
              ? { commitment: e }
              : e
              ? { ...e, commitment: (e && e.commitment) || this.commitment }
              : { commitment: this.commitment };
          let r = ec(await this._rpcRequest("getSupply", [t]), ry);
          if ("error" in r) throw new tS(r.error, "failed to get supply");
          return r.result;
        }
        async getTokenSupply(e, t) {
          let r = this._buildArgs([e.toBase58()], t),
            n = ec(await this._rpcRequest("getTokenSupply", r), t0(rm));
          if ("error" in n) throw new tS(n.error, "failed to get token supply");
          return n.result;
        }
        async getTokenAccountBalance(e, t) {
          let r = this._buildArgs([e.toBase58()], t),
            n = ec(await this._rpcRequest("getTokenAccountBalance", r), t0(rm));
          if ("error" in n)
            throw new tS(n.error, "failed to get token account balance");
          return n.result;
        }
        async getTokenAccountsByOwner(e, t, r) {
          let { commitment: n, config: i } = tZ(r),
            s = [e.toBase58()];
          "mint" in t
            ? s.push({ mint: t.mint.toBase58() })
            : s.push({ programId: t.programId.toBase58() });
          let o = this._buildArgs(s, n, "base64", i),
            a = ec(await this._rpcRequest("getTokenAccountsByOwner", o), rk);
          if ("error" in a)
            throw new tS(
              a.error,
              "failed to get token accounts owned by account ".concat(
                e.toBase58()
              )
            );
          return a.result;
        }
        async getParsedTokenAccountsByOwner(e, t, r) {
          let n = [e.toBase58()];
          "mint" in t
            ? n.push({ mint: t.mint.toBase58() })
            : n.push({ programId: t.programId.toBase58() });
          let i = this._buildArgs(n, r, "jsonParsed"),
            s = ec(await this._rpcRequest("getTokenAccountsByOwner", i), rS);
          if ("error" in s)
            throw new tS(
              s.error,
              "failed to get token accounts owned by account ".concat(
                e.toBase58()
              )
            );
          return s.result;
        }
        async getLargestAccounts(e) {
          let t = { ...e, commitment: (e && e.commitment) || this.commitment },
            r = t.filter || t.commitment ? [t] : [],
            n = ec(await this._rpcRequest("getLargestAccounts", r), rv);
          if ("error" in n)
            throw new tS(n.error, "failed to get largest accounts");
          return n.result;
        }
        async getTokenLargestAccounts(e, t) {
          let r = this._buildArgs([e.toBase58()], t),
            n = ec(await this._rpcRequest("getTokenLargestAccounts", r), rb);
          if ("error" in n)
            throw new tS(n.error, "failed to get token largest accounts");
          return n.result;
        }
        async getAccountInfoAndContext(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgs([e.toBase58()], r, "base64", n),
            s = ec(await this._rpcRequest("getAccountInfo", i), t0(eg(rI)));
          if ("error" in s)
            throw new tS(
              s.error,
              "failed to get info about account ".concat(e.toBase58())
            );
          return s.result;
        }
        async getParsedAccountInfo(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            s = ec(await this._rpcRequest("getAccountInfo", i), t0(eg(rA)));
          if ("error" in s)
            throw new tS(
              s.error,
              "failed to get info about account ".concat(e.toBase58())
            );
          return s.result;
        }
        async getAccountInfo(e, t) {
          try {
            return (await this.getAccountInfoAndContext(e, t)).value;
          } catch (t) {
            throw Error(
              "failed to get info about account " + e.toBase58() + ": " + t
            );
          }
        }
        async getMultipleParsedAccounts(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = e.map((e) => e.toBase58()),
            s = this._buildArgs([i], r, "jsonParsed", n),
            o = ec(
              await this._rpcRequest("getMultipleAccounts", s),
              t0(ed(eg(rA)))
            );
          if ("error" in o)
            throw new tS(o.error, "failed to get info for accounts ".concat(i));
          return o.result;
        }
        async getMultipleAccountsInfoAndContext(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = e.map((e) => e.toBase58()),
            s = this._buildArgs([i], r, "base64", n),
            o = ec(
              await this._rpcRequest("getMultipleAccounts", s),
              t0(ed(eg(rI)))
            );
          if ("error" in o)
            throw new tS(o.error, "failed to get info for accounts ".concat(i));
          return o.result;
        }
        async getMultipleAccountsInfo(e, t) {
          return (await this.getMultipleAccountsInfoAndContext(e, t)).value;
        }
        async getStakeActivation(e, t, r) {
          let { commitment: n, config: i } = tZ(t),
            s = this._buildArgs([e.toBase58()], n, void 0, {
              ...i,
              epoch: null != r ? r : null == i ? void 0 : i.epoch,
            }),
            o = ec(await this._rpcRequest("getStakeActivation", s), t1(rx));
          if ("error" in o)
            throw new tS(
              o.error,
              "failed to get Stake Activation ".concat(e.toBase58())
            );
          return o.result;
        }
        async getProgramAccounts(e, t) {
          let { commitment: r, config: n } = tZ(t),
            { encoding: i, ...s } = n || {},
            o = this._buildArgs([e.toBase58()], r, i || "base64", {
              ...s,
              ...(s.filters ? { filters: tX(s.filters) } : null),
            }),
            a = await this._rpcRequest("getProgramAccounts", o),
            c = ed(r_),
            u = !0 === s.withContext ? ec(a, t0(c)) : ec(a, t1(c));
          if ("error" in u)
            throw new tS(
              u.error,
              "failed to get accounts owned by program ".concat(e.toBase58())
            );
          return u.result;
        }
        async getParsedProgramAccounts(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgs([e.toBase58()], r, "jsonParsed", n),
            s = ec(await this._rpcRequest("getProgramAccounts", i), t1(ed(rB)));
          if ("error" in s)
            throw new tS(
              s.error,
              "failed to get accounts owned by program ".concat(e.toBase58())
            );
          return s.result;
        }
        async confirmTransaction(e, t) {
          let r, n;
          if ("string" == typeof e) r = e;
          else {
            var i;
            if (null == (i = e.abortSignal) ? void 0 : i.aborted)
              return Promise.reject(e.abortSignal.reason);
            r = e.signature;
          }
          try {
            n = M.default.decode(r);
          } catch (e) {
            throw Error("signature must be base58 encoded: " + r);
          }
          return (e8(64 === n.length, "signature has invalid length"),
          "string" == typeof e)
            ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
                commitment: t || this.commitment,
                signature: r,
              })
            : "lastValidBlockHeight" in e
            ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                commitment: t || this.commitment,
                strategy: e,
              })
            : await this.confirmTransactionUsingDurableNonceStrategy({
                commitment: t || this.commitment,
                strategy: e,
              });
        }
        getCancellationPromise(e) {
          return new Promise((t, r) => {
            null != e &&
              (e.aborted
                ? r(e.reason)
                : e.addEventListener("abort", () => {
                    r(e.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise(e) {
          let t,
            r,
            { commitment: n, signature: i } = e,
            s = !1;
          return {
            abortConfirmation: () => {
              r && (r(), (r = void 0)),
                null != t && (this.removeSignatureListener(t), (t = void 0));
            },
            confirmationPromise: new Promise((e, o) => {
              try {
                t = this.onSignature(
                  i,
                  (r, n) => {
                    (t = void 0),
                      e({
                        __type: ti.PROCESSED,
                        response: { context: n, value: r },
                      });
                  },
                  n
                );
                let a = new Promise((e) => {
                  null == t
                    ? e()
                    : (r = this._onSubscriptionStateChange(t, (t) => {
                        "subscribed" === t && e();
                      }));
                });
                (async () => {
                  if ((await a, s)) return;
                  let t = await this.getSignatureStatus(i);
                  if (s || null == t) return;
                  let { context: r, value: c } = t;
                  if (null != c)
                    if (null == c ? void 0 : c.err) o(c.err);
                    else {
                      switch (n) {
                        case "confirmed":
                        case "single":
                        case "singleGossip":
                          if ("processed" === c.confirmationStatus) return;
                          break;
                        case "finalized":
                        case "max":
                        case "root":
                          if (
                            "processed" === c.confirmationStatus ||
                            "confirmed" === c.confirmationStatus
                          )
                            return;
                      }
                      (s = !0),
                        e({
                          __type: ti.PROCESSED,
                          response: { context: r, value: c },
                        });
                    }
                })();
              } catch (e) {
                o(e);
              }
            }),
          };
        }
        async confirmTransactionUsingBlockHeightExceedanceStrategy(e) {
          let t,
            {
              commitment: r,
              strategy: {
                abortSignal: n,
                lastValidBlockHeight: i,
                signature: s,
              },
            } = e,
            o = !1,
            a = new Promise((e) => {
              let t = async () => {
                try {
                  return await this.getBlockHeight(r);
                } catch (e) {
                  return -1;
                }
              };
              (async () => {
                let r = await t();
                if (!o) {
                  for (; r <= i; )
                    if ((await tI(1e3), o || ((r = await t()), o))) return;
                  e({ __type: ti.BLOCKHEIGHT_EXCEEDED });
                }
              })();
            }),
            { abortConfirmation: c, confirmationPromise: u } =
              this.getTransactionConfirmationPromise({
                commitment: r,
                signature: s,
              }),
            l = this.getCancellationPromise(n);
          try {
            let e = await Promise.race([l, u, a]);
            if (e.__type === ti.PROCESSED) t = e.response;
            else throw new eX(s);
          } finally {
            (o = !0), c();
          }
          return t;
        }
        async confirmTransactionUsingDurableNonceStrategy(e) {
          let t,
            {
              commitment: r,
              strategy: {
                abortSignal: n,
                minContextSlot: i,
                nonceAccountPubkey: s,
                nonceValue: o,
                signature: a,
              },
            } = e,
            c = !1,
            u = new Promise((e) => {
              let t = o,
                n = null,
                a = async () => {
                  try {
                    let { context: e, value: t } =
                      await this.getNonceAndContext(s, {
                        commitment: r,
                        minContextSlot: i,
                      });
                    return (n = e.slot), null == t ? void 0 : t.nonce;
                  } catch (e) {
                    return t;
                  }
                };
              (async () => {
                if (((t = await a()), !c))
                  for (;;) {
                    if (o !== t)
                      return void e({
                        __type: ti.NONCE_INVALID,
                        slotInWhichNonceDidAdvance: n,
                      });
                    if ((await tI(2e3), c || ((t = await a()), c))) return;
                  }
              })();
            }),
            { abortConfirmation: l, confirmationPromise: d } =
              this.getTransactionConfirmationPromise({
                commitment: r,
                signature: a,
              }),
            h = this.getCancellationPromise(n);
          try {
            let e = await Promise.race([h, d, u]);
            if (e.__type === ti.PROCESSED) t = e.response;
            else {
              var f;
              let n;
              for (;;) {
                let t = await this.getSignatureStatus(a);
                if (null == t) break;
                if (
                  t.context.slot <
                  (null != (f = e.slotInWhichNonceDidAdvance) ? f : i)
                ) {
                  await tI(400);
                  continue;
                }
                n = t;
                break;
              }
              if (null == n ? void 0 : n.value) {
                let e = r || "finalized",
                  { confirmationStatus: i } = n.value;
                switch (e) {
                  case "processed":
                  case "recent":
                    if (
                      "processed" !== i &&
                      "confirmed" !== i &&
                      "finalized" !== i
                    )
                      throw new e$(a);
                    break;
                  case "confirmed":
                  case "single":
                  case "singleGossip":
                    if ("confirmed" !== i && "finalized" !== i) throw new e$(a);
                    break;
                  case "finalized":
                  case "max":
                  case "root":
                    if ("finalized" !== i) throw new e$(a);
                }
                t = { context: n.context, value: { err: n.value.err } };
              } else throw new e$(a);
            }
          } finally {
            (c = !0), l();
          }
          return t;
        }
        async confirmTransactionUsingLegacyTimeoutStrategy(e) {
          let t,
            r,
            { commitment: n, signature: i } = e,
            s = new Promise((e) => {
              let r = this._confirmTransactionInitialTimeout || 6e4;
              switch (n) {
                case "processed":
                case "recent":
                case "single":
                case "confirmed":
                case "singleGossip":
                  r = this._confirmTransactionInitialTimeout || 3e4;
              }
              t = setTimeout(
                () => e({ __type: ti.TIMED_OUT, timeoutMs: r }),
                r
              );
            }),
            { abortConfirmation: o, confirmationPromise: a } =
              this.getTransactionConfirmationPromise({
                commitment: n,
                signature: i,
              });
          try {
            let e = await Promise.race([a, s]);
            if (e.__type === ti.PROCESSED) r = e.response;
            else throw new eQ(i, e.timeoutMs / 1e3);
          } finally {
            clearTimeout(t), o();
          }
          return r;
        }
        async getClusterNodes() {
          let e = ec(await this._rpcRequest("getClusterNodes", []), t1(ed(rq)));
          if ("error" in e)
            throw new tS(e.error, "failed to get cluster nodes");
          return e.result;
        }
        async getVoteAccounts(e) {
          let t = this._buildArgs([], e),
            r = ec(await this._rpcRequest("getVoteAccounts", t), rD);
          if ("error" in r)
            throw new tS(r.error, "failed to get vote accounts");
          return r.result;
        }
        async getSlot(e) {
          let { commitment: t, config: r } = tZ(e),
            n = this._buildArgs([], t, void 0, r),
            i = ec(await this._rpcRequest("getSlot", n), t1(ey()));
          if ("error" in i) throw new tS(i.error, "failed to get slot");
          return i.result;
        }
        async getSlotLeader(e) {
          let { commitment: t, config: r } = tZ(e),
            n = this._buildArgs([], t, void 0, r),
            i = ec(await this._rpcRequest("getSlotLeader", n), t1(ek()));
          if ("error" in i) throw new tS(i.error, "failed to get slot leader");
          return i.result;
        }
        async getSlotLeaders(e, t) {
          let r = ec(
            await this._rpcRequest("getSlotLeaders", [e, t]),
            t1(ed(tH))
          );
          if ("error" in r) throw new tS(r.error, "failed to get slot leaders");
          return r.result;
        }
        async getSignatureStatus(e, t) {
          let { context: r, value: n } = await this.getSignatureStatuses(
            [e],
            t
          );
          return e8(1 === n.length), { context: r, value: n[0] };
        }
        async getSignatureStatuses(e, t) {
          let r = [e];
          t && r.push(t);
          let n = ec(await this._rpcRequest("getSignatureStatuses", r), rj);
          if ("error" in n)
            throw new tS(n.error, "failed to get signature status");
          return n.result;
        }
        async getTransactionCount(e) {
          let { commitment: t, config: r } = tZ(e),
            n = this._buildArgs([], t, void 0, r),
            i = ec(await this._rpcRequest("getTransactionCount", n), t1(ey()));
          if ("error" in i)
            throw new tS(i.error, "failed to get transaction count");
          return i.result;
        }
        async getTotalSupply(e) {
          return (
            await this.getSupply({
              commitment: e,
              excludeNonCirculatingAccountsList: !0,
            })
          ).value.total;
        }
        async getInflationGovernor(e) {
          let t = this._buildArgs([], e),
            r = ec(await this._rpcRequest("getInflationGovernor", t), ru);
          if ("error" in r) throw new tS(r.error, "failed to get inflation");
          return r.result;
        }
        async getInflationReward(e, t, r) {
          let { commitment: n, config: i } = tZ(r),
            s = this._buildArgs([e.map((e) => e.toBase58())], n, void 0, {
              ...i,
              epoch: null != t ? t : null == i ? void 0 : i.epoch,
            }),
            o = ec(await this._rpcRequest("getInflationReward", s), t3);
          if ("error" in o)
            throw new tS(o.error, "failed to get inflation reward");
          return o.result;
        }
        async getInflationRate() {
          let e = ec(await this._rpcRequest("getInflationRate", []), rl);
          if ("error" in e)
            throw new tS(e.error, "failed to get inflation rate");
          return e.result;
        }
        async getEpochInfo(e) {
          let { commitment: t, config: r } = tZ(e),
            n = this._buildArgs([], t, void 0, r),
            i = ec(await this._rpcRequest("getEpochInfo", n), rh);
          if ("error" in i) throw new tS(i.error, "failed to get epoch info");
          return i.result;
        }
        async getEpochSchedule() {
          let e = ec(await this._rpcRequest("getEpochSchedule", []), rf);
          if ("error" in e)
            throw new tS(e.error, "failed to get epoch schedule");
          let t = e.result;
          return new tq(
            t.slotsPerEpoch,
            t.leaderScheduleSlotOffset,
            t.warmup,
            t.firstNormalEpoch,
            t.firstNormalSlot
          );
        }
        async getLeaderSchedule() {
          let e = ec(await this._rpcRequest("getLeaderSchedule", []), rp);
          if ("error" in e)
            throw new tS(e.error, "failed to get leader schedule");
          return e.result;
        }
        async getMinimumBalanceForRentExemption(e, t) {
          let r = this._buildArgs([e], t),
            n = ec(
              await this._rpcRequest("getMinimumBalanceForRentExemption", r),
              rH
            );
          return "error" in n
            ? (console.warn(
                "Unable to fetch minimum balance for rent exemption"
              ),
              0)
            : n.result;
        }
        async getRecentBlockhashAndContext(e) {
          let {
            context: t,
            value: { blockhash: r },
          } = await this.getLatestBlockhashAndContext(e);
          return {
            context: t,
            value: {
              blockhash: r,
              feeCalculator: {
                get lamportsPerSignature() {
                  throw Error(
                    "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                  );
                },
                toJSON: () => ({}),
              },
            },
          };
        }
        async getRecentPerformanceSamples(e) {
          let t = ec(
            await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : []),
            nu
          );
          if ("error" in t)
            throw new tS(t.error, "failed to get recent performance samples");
          return t.result;
        }
        async getFeeCalculatorForBlockhash(e, t) {
          let r = this._buildArgs([e], t),
            n = ec(
              await this._rpcRequest("getFeeCalculatorForBlockhash", r),
              nl
            );
          if ("error" in n)
            throw new tS(n.error, "failed to get fee calculator");
          let { context: i, value: s } = n.result;
          return { context: i, value: null !== s ? s.feeCalculator : null };
        }
        async getFeeForMessage(e, t) {
          let r = eW(e.serialize()).toString("base64"),
            n = this._buildArgs([r], t),
            i = ec(await this._rpcRequest("getFeeForMessage", n), t0(eg(ey())));
          if ("error" in i)
            throw new tS(i.error, "failed to get fee for message");
          if (null === i.result) throw Error("invalid blockhash");
          return i.result;
        }
        async getRecentPrioritizationFees(e) {
          var t;
          let r =
              null == e || null == (t = e.lockedWritableAccounts)
                ? void 0
                : t.map((e) => e.toBase58()),
            n = (null == r ? void 0 : r.length) ? [r] : [],
            i = ec(
              await this._rpcRequest("getRecentPrioritizationFees", n),
              rd
            );
          if ("error" in i)
            throw new tS(i.error, "failed to get recent prioritization fees");
          return i.result;
        }
        async getRecentBlockhash(e) {
          try {
            return (await this.getRecentBlockhashAndContext(e)).value;
          } catch (e) {
            throw Error("failed to get recent blockhash: " + e);
          }
        }
        async getLatestBlockhash(e) {
          try {
            return (await this.getLatestBlockhashAndContext(e)).value;
          } catch (e) {
            throw Error("failed to get recent blockhash: " + e);
          }
        }
        async getLatestBlockhashAndContext(e) {
          let { commitment: t, config: r } = tZ(e),
            n = this._buildArgs([], t, void 0, r),
            i = ec(await this._rpcRequest("getLatestBlockhash", n), na);
          if ("error" in i)
            throw new tS(i.error, "failed to get latest blockhash");
          return i.result;
        }
        async isBlockhashValid(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgs([e], r, void 0, n),
            s = ec(await this._rpcRequest("isBlockhashValid", i), nc);
          if ("error" in s)
            throw new tS(
              s.error,
              "failed to determine if the blockhash `" + e + "`is valid"
            );
          return s.result;
        }
        async getVersion() {
          let e = ec(await this._rpcRequest("getVersion", []), t1(ri));
          if ("error" in e) throw new tS(e.error, "failed to get version");
          return e.result;
        }
        async getGenesisHash() {
          let e = ec(await this._rpcRequest("getGenesisHash", []), t1(ek()));
          if ("error" in e) throw new tS(e.error, "failed to get genesis hash");
          return e.result;
        }
        async getBlock(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            s = await this._rpcRequest("getBlock", i);
          try {
            switch (null == n ? void 0 : n.transactionDetails) {
              case "accounts": {
                let e = ec(s, r9);
                if ("error" in e) throw e.error;
                return e.result;
              }
              case "none": {
                let e = ec(s, r7);
                if ("error" in e) throw e.error;
                return e.result;
              }
              default: {
                let e = ec(s, r4);
                if ("error" in e) throw e.error;
                let { result: t } = e;
                return t
                  ? {
                      ...t,
                      transactions: t.transactions.map((e) => {
                        let { transaction: t, meta: r, version: n } = e;
                        return {
                          meta: r,
                          transaction: { ...t, message: t6(n, t.message) },
                          version: n,
                        };
                      }),
                    }
                  : null;
              }
            }
          } catch (e) {
            throw new tS(e, "failed to get confirmed block");
          }
        }
        async getParsedBlock(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            s = await this._rpcRequest("getBlock", i);
          try {
            switch (null == n ? void 0 : n.transactionDetails) {
              case "accounts": {
                let e = ec(s, nt);
                if ("error" in e) throw e.error;
                return e.result;
              }
              case "none": {
                let e = ec(s, nr);
                if ("error" in e) throw e.error;
                return e.result;
              }
              default: {
                let e = ec(s, ne);
                if ("error" in e) throw e.error;
                return e.result;
              }
            }
          } catch (e) {
            throw new tS(e, "failed to get block");
          }
        }
        async getBlockProduction(e) {
          let t, r;
          if ("string" == typeof e) r = e;
          else if (e) {
            let { commitment: n, ...i } = e;
            (r = n), (t = i);
          }
          let n = this._buildArgs([], r, "base64", t),
            i = ec(await this._rpcRequest("getBlockProduction", n), rc);
          if ("error" in i)
            throw new tS(i.error, "failed to get block production information");
          return i.result;
        }
        async getTransaction(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            s = ec(await this._rpcRequest("getTransaction", i), ns);
          if ("error" in s) throw new tS(s.error, "failed to get transaction");
          let o = s.result;
          return o
            ? {
                ...o,
                transaction: {
                  ...o.transaction,
                  message: t6(o.version, o.transaction.message),
                },
              }
            : o;
        }
        async getParsedTransaction(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            s = ec(await this._rpcRequest("getTransaction", i), no);
          if ("error" in s) throw new tS(s.error, "failed to get transaction");
          return s.result;
        }
        async getParsedTransactions(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = e.map((e) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", n),
            }));
          return (await this._rpcBatchRequest(i)).map((e) => {
            let t = ec(e, no);
            if ("error" in t)
              throw new tS(t.error, "failed to get transactions");
            return t.result;
          });
        }
        async getTransactions(e, t) {
          let { commitment: r, config: n } = tZ(t),
            i = e.map((e) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([e], r, void 0, n),
            }));
          return (await this._rpcBatchRequest(i)).map((e) => {
            let t = ec(e, ns);
            if ("error" in t)
              throw new tS(t.error, "failed to get transactions");
            let r = t.result;
            return r
              ? {
                  ...r,
                  transaction: {
                    ...r.transaction,
                    message: t6(r.version, r.transaction.message),
                  },
                }
              : r;
          });
        }
        async getConfirmedBlock(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t),
            n = ec(await this._rpcRequest("getBlock", r), nn);
          if ("error" in n)
            throw new tS(n.error, "failed to get confirmed block");
          let i = n.result;
          if (!i) throw Error("Confirmed block " + e + " not found");
          let s = {
            ...i,
            transactions: i.transactions.map((e) => {
              let { transaction: t, meta: r } = e,
                n = new tt(t.message);
              return { meta: r, transaction: { ...t, message: n } };
            }),
          };
          return {
            ...s,
            transactions: s.transactions.map((e) => {
              let { transaction: t, meta: r } = e;
              return {
                meta: r,
                transaction: ta.populate(t.message, t.signatures),
              };
            }),
          };
        }
        async getBlocks(e, t, r) {
          let n = this._buildArgsAtLeastConfirmed(
              void 0 !== t ? [e, t] : [e],
              r
            ),
            i = ec(await this._rpcRequest("getBlocks", n), t1(ed(ey())));
          if ("error" in i) throw new tS(i.error, "failed to get blocks");
          return i.result;
        }
        async getBlockSignatures(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            n = ec(await this._rpcRequest("getBlock", r), ni);
          if ("error" in n) throw new tS(n.error, "failed to get block");
          let i = n.result;
          if (!i) throw Error("Block " + e + " not found");
          return i;
        }
        async getConfirmedBlockSignatures(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
              transactionDetails: "signatures",
              rewards: !1,
            }),
            n = ec(await this._rpcRequest("getBlock", r), ni);
          if ("error" in n)
            throw new tS(n.error, "failed to get confirmed block");
          let i = n.result;
          if (!i) throw Error("Confirmed block " + e + " not found");
          return i;
        }
        async getConfirmedTransaction(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t),
            n = ec(await this._rpcRequest("getTransaction", r), ns);
          if ("error" in n) throw new tS(n.error, "failed to get transaction");
          let i = n.result;
          if (!i) return i;
          let s = new tt(i.transaction.message),
            o = i.transaction.signatures;
          return { ...i, transaction: ta.populate(s, o) };
        }
        async getParsedConfirmedTransaction(e, t) {
          let r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
            n = ec(await this._rpcRequest("getTransaction", r), no);
          if ("error" in n)
            throw new tS(n.error, "failed to get confirmed transaction");
          return n.result;
        }
        async getParsedConfirmedTransactions(e, t) {
          let r = e.map((e) => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
          }));
          return (await this._rpcBatchRequest(r)).map((e) => {
            let t = ec(e, no);
            if ("error" in t)
              throw new tS(t.error, "failed to get confirmed transactions");
            return t.result;
          });
        }
        async getConfirmedSignaturesForAddress(e, t, r) {
          let n = {},
            i = await this.getFirstAvailableBlock();
          for (; !("until" in n) && !(--t <= 0) && !(t < i); )
            try {
              let e = await this.getConfirmedBlockSignatures(t, "finalized");
              e.signatures.length > 0 &&
                (n.until = e.signatures[e.signatures.length - 1].toString());
            } catch (e) {
              if (e instanceof Error && e.message.includes("skipped")) continue;
              throw e;
            }
          let s = await this.getSlot("finalized");
          for (; !("before" in n) && !(++r > s); )
            try {
              let e = await this.getConfirmedBlockSignatures(r);
              e.signatures.length > 0 &&
                (n.before = e.signatures[e.signatures.length - 1].toString());
            } catch (e) {
              if (e instanceof Error && e.message.includes("skipped")) continue;
              throw e;
            }
          return (await this.getConfirmedSignaturesForAddress2(e, n)).map(
            (e) => e.signature
          );
        }
        async getConfirmedSignaturesForAddress2(e, t, r) {
          let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
            i = ec(
              await this._rpcRequest("getConfirmedSignaturesForAddress2", n),
              rP
            );
          if ("error" in i)
            throw new tS(
              i.error,
              "failed to get confirmed signatures for address"
            );
          return i.result;
        }
        async getSignaturesForAddress(e, t, r) {
          let n = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t),
            i = ec(await this._rpcRequest("getSignaturesForAddress", n), rT);
          if ("error" in i)
            throw new tS(i.error, "failed to get signatures for address");
          return i.result;
        }
        async getAddressLookupTable(e, t) {
          let { context: r, value: n } = await this.getAccountInfoAndContext(
              e,
              t
            ),
            i = null;
          return (
            null !== n &&
              (i = new tF({ key: e, state: tF.deserialize(n.data) })),
            { context: r, value: i }
          );
        }
        async getNonceAndContext(e, t) {
          let { context: r, value: n } = await this.getAccountInfoAndContext(
              e,
              t
            ),
            i = null;
          return (
            null !== n && (i = tP.fromAccountData(n.data)),
            { context: r, value: i }
          );
        }
        async getNonce(e, t) {
          return await this.getNonceAndContext(e, t)
            .then((e) => e.value)
            .catch((t) => {
              throw Error(
                "failed to get nonce for account " + e.toBase58() + ": " + t
              );
            });
        }
        async requestAirdrop(e, t) {
          let r = ec(
            await this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
            nd
          );
          if ("error" in r)
            throw new tS(
              r.error,
              "airdrop to ".concat(e.toBase58(), " failed")
            );
          return r.result;
        }
        async _blockhashWithExpiryBlockHeight(e) {
          if (!e) {
            for (; this._pollingBlockhash; ) await tI(100);
            let e = Date.now() - this._blockhashInfo.lastFetch;
            if (null !== this._blockhashInfo.latestBlockhash && !(e >= tY))
              return this._blockhashInfo.latestBlockhash;
          }
          return await this._pollNewBlockhash();
        }
        async _pollNewBlockhash() {
          this._pollingBlockhash = !0;
          try {
            let e = Date.now(),
              t = this._blockhashInfo.latestBlockhash,
              r = t ? t.blockhash : null;
            for (let e = 0; e < 50; e++) {
              let e = await this.getLatestBlockhash("finalized");
              if (r !== e.blockhash)
                return (
                  (this._blockhashInfo = {
                    latestBlockhash: e,
                    lastFetch: Date.now(),
                    transactionSignatures: [],
                    simulatedSignatures: [],
                  }),
                  e
                );
              await tI(200);
            }
            throw Error(
              "Unable to obtain a new blockhash after ".concat(
                Date.now() - e,
                "ms"
              )
            );
          } finally {
            this._pollingBlockhash = !1;
          }
        }
        async getStakeMinimumDelegation(e) {
          let { commitment: t, config: r } = tZ(e),
            n = this._buildArgs([], t, "base64", r),
            i = ec(
              await this._rpcRequest("getStakeMinimumDelegation", n),
              t0(ey())
            );
          if ("error" in i)
            throw new tS(i.error, "failed to get stake minimum delegation");
          return i.result;
        }
        async simulateTransaction(e, t, r) {
          let i;
          if ("message" in e) {
            let i = e.serialize(),
              s = n.Buffer.from(i).toString("base64");
            if (Array.isArray(t) || void 0 !== r)
              throw Error("Invalid arguments");
            let o = t || {};
            (o.encoding = "base64"),
              "commitment" in o || (o.commitment = this.commitment),
              t &&
                "object" == typeof t &&
                "innerInstructions" in t &&
                (o.innerInstructions = t.innerInstructions);
            let a = [s, o],
              c = ec(await this._rpcRequest("simulateTransaction", a), ra);
            if ("error" in c)
              throw Error("failed to simulate transaction: " + c.error.message);
            return c.result;
          }
          if (
            (e instanceof ta
              ? (((i = new ta()).feePayer = e.feePayer),
                (i.instructions = e.instructions),
                (i.nonceInfo = e.nonceInfo),
                (i.signatures = e.signatures))
              : ((i = ta.populate(e))._message = i._json = void 0),
            void 0 !== t && !Array.isArray(t))
          )
            throw Error("Invalid arguments");
          if (i.nonceInfo && t) i.sign(...t);
          else {
            let e = this._disableBlockhashCaching;
            for (;;) {
              let r = await this._blockhashWithExpiryBlockHeight(e);
              if (
                ((i.lastValidBlockHeight = r.lastValidBlockHeight),
                (i.recentBlockhash = r.blockhash),
                !t)
              )
                break;
              if ((i.sign(...t), !i.signature)) throw Error("!signature");
              let n = i.signature.toString("base64");
              if (
                this._blockhashInfo.simulatedSignatures.includes(n) ||
                this._blockhashInfo.transactionSignatures.includes(n)
              )
                e = !0;
              else {
                this._blockhashInfo.simulatedSignatures.push(n);
                break;
              }
            }
          }
          let s = i._compile(),
            o = s.serialize(),
            a = i._serialize(o).toString("base64"),
            c = { encoding: "base64", commitment: this.commitment };
          r &&
            (c.accounts = {
              encoding: "base64",
              addresses: (Array.isArray(r) ? r : s.nonProgramIds()).map((e) =>
                e.toBase58()
              ),
            }),
            t && (c.sigVerify = !0),
            t &&
              "object" == typeof t &&
              "innerInstructions" in t &&
              (c.innerInstructions = t.innerInstructions);
          let u = [a, c],
            l = ec(await this._rpcRequest("simulateTransaction", u), ra);
          if ("error" in l) {
            let e;
            if (
              "data" in l.error &&
              (e = l.error.data.logs) &&
              Array.isArray(e)
            ) {
              let t = "\n    ",
                r = t + e.join(t);
              console.error(l.error.message, r);
            }
            throw new tk({
              action: "simulate",
              signature: "",
              transactionMessage: l.error.message,
              logs: e,
            });
          }
          return l.result;
        }
        async sendTransaction(e, t, r) {
          if ("version" in e) {
            if (t && Array.isArray(t)) throw Error("Invalid arguments");
            let r = e.serialize();
            return await this.sendRawTransaction(r, t);
          }
          if (void 0 === t || !Array.isArray(t))
            throw Error("Invalid arguments");
          if (e.nonceInfo) e.sign(...t);
          else {
            let r = this._disableBlockhashCaching;
            for (;;) {
              let n = await this._blockhashWithExpiryBlockHeight(r);
              if (
                ((e.lastValidBlockHeight = n.lastValidBlockHeight),
                (e.recentBlockhash = n.blockhash),
                e.sign(...t),
                !e.signature)
              )
                throw Error("!signature");
              let i = e.signature.toString("base64");
              if (this._blockhashInfo.transactionSignatures.includes(i)) r = !0;
              else {
                this._blockhashInfo.transactionSignatures.push(i);
                break;
              }
            }
          }
          let n = e.serialize();
          return await this.sendRawTransaction(n, r);
        }
        async sendRawTransaction(e, t) {
          let r = eW(e).toString("base64");
          return await this.sendEncodedTransaction(r, t);
        }
        async sendEncodedTransaction(e, t) {
          let r = { encoding: "base64" },
            n = t && t.skipPreflight,
            i =
              !0 === n
                ? "processed"
                : (t && t.preflightCommitment) || this.commitment;
          t && null != t.maxRetries && (r.maxRetries = t.maxRetries),
            t &&
              null != t.minContextSlot &&
              (r.minContextSlot = t.minContextSlot),
            n && (r.skipPreflight = n),
            i && (r.preflightCommitment = i);
          let s = [e, r],
            o = ec(await this._rpcRequest("sendTransaction", s), nh);
          if ("error" in o) {
            let e;
            throw (
              ("data" in o.error && (e = o.error.data.logs),
              new tk({
                action: n ? "send" : "simulate",
                signature: "",
                transactionMessage: o.error.message,
                logs: e,
              }))
            );
          }
          return o.result;
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              (async () => {
                try {
                  await this._rpcWebSocket.notify("ping");
                } catch (e) {}
              })();
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(e) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message);
        }
        _wsOnClose(e) {
          if (
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            1e3 === e)
          )
            return void this._updateSubscriptions();
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach((e) => {
              let [t, r] = e;
              this._setSubscription(t, { ...r, state: "pending" });
            });
        }
        _setSubscription(e, t) {
          var r;
          let n = null == (r = this._subscriptionsByHash[e]) ? void 0 : r.state;
          if (((this._subscriptionsByHash[e] = t), n !== t.state)) {
            let r = this._subscriptionStateChangeCallbacksByHash[e];
            r &&
              r.forEach((e) => {
                try {
                  e(t.state);
                } catch (e) {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          var r;
          let n = this._subscriptionHashByClientSubscriptionId[e];
          if (null == n) return () => {};
          let i =
            (r = this._subscriptionStateChangeCallbacksByHash)[n] ||
            (r[n] = new Set());
          return (
            i.add(t),
            () => {
              i.delete(t),
                0 === i.size &&
                  delete this._subscriptionStateChangeCallbacksByHash[n];
            }
          );
        }
        async _updateSubscriptions() {
          if (0 === Object.keys(this._subscriptionsByHash).length) {
            this._rpcWebSocketConnected &&
              ((this._rpcWebSocketConnected = !1),
              (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                  this._rpcWebSocket.close();
                } catch (e) {
                  e instanceof Error &&
                    console.log(
                      "Error when closing socket connection: ".concat(e.message)
                    );
                }
              }, 500)));
            return;
          }
          if (
            (null !== this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null),
              (this._rpcWebSocketConnected = !0)),
            !this._rpcWebSocketConnected)
          )
            return void this._rpcWebSocket.connect();
          let e = this._rpcWebSocketGeneration,
            t = () => e === this._rpcWebSocketGeneration;
          await Promise.all(
            Object.keys(this._subscriptionsByHash).map(async (e) => {
              let r = this._subscriptionsByHash[e];
              if (void 0 !== r)
                switch (r.state) {
                  case "pending":
                  case "unsubscribed":
                    if (0 === r.callbacks.size) {
                      delete this._subscriptionsByHash[e],
                        "unsubscribed" === r.state &&
                          delete this
                            ._subscriptionCallbacksByServerSubscriptionId[
                            r.serverSubscriptionId
                          ],
                        await this._updateSubscriptions();
                      return;
                    }
                    await (async () => {
                      let { args: n, method: i } = r;
                      try {
                        this._setSubscription(e, {
                          ...r,
                          state: "subscribing",
                        });
                        let t = await this._rpcWebSocket.call(i, n);
                        this._setSubscription(e, {
                          ...r,
                          serverSubscriptionId: t,
                          state: "subscribed",
                        }),
                          (this._subscriptionCallbacksByServerSubscriptionId[
                            t
                          ] = r.callbacks),
                          await this._updateSubscriptions();
                      } catch (s) {
                        if (
                          (console.error(
                            "Received "
                              .concat(
                                s instanceof Error ? "" : "JSON-RPC ",
                                "error calling `"
                              )
                              .concat(i, "`"),
                            { args: n, error: s }
                          ),
                          !t())
                        )
                          return;
                        this._setSubscription(e, { ...r, state: "pending" }),
                          await this._updateSubscriptions();
                      }
                    })();
                    break;
                  case "subscribed":
                    0 === r.callbacks.size &&
                      (await (async () => {
                        let { serverSubscriptionId: n, unsubscribeMethod: i } =
                          r;
                        if (this._subscriptionsAutoDisposedByRpc.has(n))
                          this._subscriptionsAutoDisposedByRpc.delete(n);
                        else {
                          this._setSubscription(e, {
                            ...r,
                            state: "unsubscribing",
                          }),
                            this._setSubscription(e, {
                              ...r,
                              state: "unsubscribing",
                            });
                          try {
                            await this._rpcWebSocket.call(i, [n]);
                          } catch (n) {
                            if (
                              (n instanceof Error &&
                                console.error(
                                  "".concat(i, " error:"),
                                  n.message
                                ),
                              !t())
                            )
                              return;
                            this._setSubscription(e, {
                              ...r,
                              state: "subscribed",
                            }),
                              await this._updateSubscriptions();
                            return;
                          }
                        }
                        this._setSubscription(e, {
                          ...r,
                          state: "unsubscribed",
                        }),
                          await this._updateSubscriptions();
                      })());
                }
            })
          );
        }
        _handleServerNotification(e, t) {
          let r = this._subscriptionCallbacksByServerSubscriptionId[e];
          void 0 !== r &&
            r.forEach((e) => {
              try {
                e(...t);
              } catch (e) {
                console.error(e);
              }
            });
        }
        _wsOnAccountNotification(e) {
          let { result: t, subscription: r } = ec(e, rR);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          let r = this._nextClientSubscriptionId++,
            n = tW([e.method, t]),
            i = this._subscriptionsByHash[n];
          return (
            void 0 === i
              ? (this._subscriptionsByHash[n] = {
                  ...e,
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                })
              : i.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[r] = n),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[r] =
              async () => {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  r
                ],
                  delete this._subscriptionHashByClientSubscriptionId[r];
                let t = this._subscriptionsByHash[n];
                e8(
                  void 0 !== t,
                  "Could not find a `Subscription` when tearing down client subscription #".concat(
                    r
                  )
                ),
                  t.callbacks.delete(e.callback),
                  await this._updateSubscriptions();
              }),
            this._updateSubscriptions(),
            r
          );
        }
        onAccountChange(e, t, r) {
          let { commitment: n, config: i } = tZ(r),
            s = this._buildArgs(
              [e.toBase58()],
              n || this._commitment || "finalized",
              "base64",
              i
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            s
          );
        }
        async removeAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "account change");
        }
        _wsOnProgramAccountNotification(e) {
          let { result: t, subscription: r } = ec(e, rC);
          this._handleServerNotification(r, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, r, n) {
          let { commitment: i, config: s } = tZ(r),
            o = this._buildArgs(
              [e.toBase58()],
              i || this._commitment || "finalized",
              "base64",
              s || (n ? { filters: tX(n) } : void 0)
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            o
          );
        }
        async removeProgramAccountChangeListener(e) {
          await this._unsubscribeClientSubscription(
            e,
            "program account change"
          );
        }
        onLogs(e, t, r) {
          let n = this._buildArgs(
            ["object" == typeof e ? { mentions: [e.toString()] } : e],
            r || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            n
          );
        }
        async removeOnLogsListener(e) {
          await this._unsubscribeClientSubscription(e, "logs");
        }
        _wsOnLogsNotification(e) {
          let { result: t, subscription: r } = ec(e, np);
          this._handleServerNotification(r, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          let { result: t, subscription: r } = ec(e, rz);
          this._handleServerNotification(r, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        async removeSlotChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "slot change");
        }
        _wsOnSlotUpdatesNotification(e) {
          let { result: t, subscription: r } = ec(e, rU);
          this._handleServerNotification(r, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        async removeSlotUpdateListener(e) {
          await this._unsubscribeClientSubscription(e, "slot update");
        }
        async _unsubscribeClientSubscription(e, t) {
          let r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
          r
            ? await r()
            : console.warn(
                "Ignored unsubscribe request because an active subscription with id " +
                  "`".concat(e, "` for '").concat(t, "' events ") +
                  "could not be found."
              );
        }
        _buildArgs(e, t, r, n) {
          let i = t || this._commitment;
          if (i || r || n) {
            let t = {};
            r && (t.encoding = r),
              i && (t.commitment = i),
              n && (t = Object.assign(t, n)),
              e.push(t);
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, r, n) {
          let i = t || this._commitment;
          if (i && !["confirmed", "finalized"].includes(i))
            throw Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(e, t, r, n);
        }
        _wsOnSignatureNotification(e) {
          let { result: t, subscription: r } = ec(e, rW);
          "receivedSignature" !== t.value &&
            this._subscriptionsAutoDisposedByRpc.add(r),
            this._handleServerNotification(
              r,
              "receivedSignature" === t.value
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context]
            );
        }
        onSignature(e, t, r) {
          let n = this._buildArgs([e], r || this._commitment || "finalized"),
            i = this._makeSubscription(
              {
                callback: (e, r) => {
                  if ("status" === e.type) {
                    t(e.result, r);
                    try {
                      this.removeSignatureListener(i);
                    } catch (e) {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              n
            );
          return i;
        }
        onSignatureWithOptions(e, t, r) {
          let { commitment: n, ...i } = {
              ...r,
              commitment:
                (r && r.commitment) || this._commitment || "finalized",
            },
            s = this._buildArgs([e], n, void 0, i),
            o = this._makeSubscription(
              {
                callback: (e, r) => {
                  t(e, r);
                  try {
                    this.removeSignatureListener(o);
                  } catch (e) {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              s
            );
          return o;
        }
        async removeSignatureListener(e) {
          await this._unsubscribeClientSubscription(e, "signature result");
        }
        _wsOnRootNotification(e) {
          let { result: t, subscription: r } = ec(e, rK);
          this._handleServerNotification(r, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        async removeRootChangeListener(e) {
          await this._unsubscribeClientSubscription(e, "root change");
        }
        constructor(e, t) {
          var r;
          let n, i, s, o, a, c;
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              let e = {};
              return async (t) => {
                var r;
                let { commitment: n, config: i } = tZ(t),
                  s = this._buildArgs([], n, void 0, i),
                  o = tW(s);
                return (
                  (e[o] =
                    null != (r = e[o])
                      ? r
                      : (async () => {
                          try {
                            let e = await this._rpcRequest("getBlockHeight", s),
                              t = ec(e, t1(ey()));
                            if ("error" in t)
                              throw new tS(
                                t.error,
                                "failed to get block height information"
                              );
                            return t.result;
                          } finally {
                            delete e[o];
                          }
                        })()),
                  await e[o]
                );
              };
            })()),
            t && "string" == typeof t
              ? (this._commitment = t)
              : t &&
                ((this._commitment = t.commitment),
                (this._confirmTransactionInitialTimeout =
                  t.confirmTransactionInitialTimeout),
                (n = t.wsEndpoint),
                (i = t.httpHeaders),
                (s = t.fetch),
                (o = t.fetchMiddleware),
                (a = t.disableRetryOnRateLimit),
                (c = t.httpAgent)),
            (this._rpcEndpoint = (function (e) {
              if (!1 === /^https?:/.test(e))
                throw TypeError(
                  "Endpoint URL must start with `http:` or `https:`."
                );
              return e;
            })(e)),
            (this._rpcWsEndpoint =
              n ||
              (function (e) {
                let t = e.match(tj);
                if (null == t)
                  throw TypeError(
                    "Failed to validate endpoint URL `".concat(e, "`")
                  );
                let [r, n, i, s] = t,
                  o = e.startsWith("https:") ? "wss:" : "ws:",
                  a = null == i ? null : parseInt(i.slice(1), 10);
                return ""
                  .concat(o, "//")
                  .concat(n)
                  .concat(null == a ? "" : ":".concat(a + 1))
                  .concat(s);
              })(e)),
            (this._rpcClient = (function (e, t, r, n, i, s) {
              let o,
                a,
                c = r || tM;
              return (
                null != s &&
                  console.warn(
                    "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
                  ),
                n &&
                  (a = async (e, t) => {
                    let r = await new Promise((r, i) => {
                      try {
                        n(e, t, (e, t) => r([e, t]));
                      } catch (e) {
                        i(e);
                      }
                    });
                    return await c(...r);
                  }),
                new eE.default(async (r, n) => {
                  let s = {
                    method: "POST",
                    body: r,
                    agent: o,
                    headers: Object.assign(
                      { "Content-Type": "application/json" },
                      t || {},
                      ng
                    ),
                  };
                  try {
                    let t,
                      r = 5,
                      o = 500;
                    for (
                      ;
                      ((t = a ? await a(e, s) : await c(e, s)),
                      429 === t.status && !0 !== i) && ((r -= 1), 0 !== r);

                    ) {
                      console.error(
                        "Server responded with "
                          .concat(t.status, " ")
                          .concat(t.statusText, ".  Retrying after ")
                          .concat(o, "ms delay...")
                      ),
                        await tI(o),
                        (o *= 2);
                    }
                    let u = await t.text();
                    t.ok
                      ? n(null, u)
                      : n(
                          Error(
                            ""
                              .concat(t.status, " ")
                              .concat(t.statusText, ": ")
                              .concat(u)
                          )
                        );
                  } catch (e) {
                    e instanceof Error && n(e);
                  }
                }, {})
              );
            })(e, i, s, o, a, c)),
            (this._rpcRequest =
              ((r = this._rpcClient),
              (e, t) =>
                new Promise((n, i) => {
                  r.request(e, t, (e, t) => {
                    if (e) return void i(e);
                    n(t);
                  });
                }))),
            (this._rpcBatchRequest = (function (e) {
              return (t) =>
                new Promise((r, n) => {
                  0 === t.length && r([]);
                  let i = t.map((t) => e.request(t.methodName, t.args));
                  e.request(i, (e, t) => {
                    if (e) return void n(e);
                    r(t);
                  });
                });
            })(this._rpcClient)),
            (this._rpcWebSocket = new tD(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
      }
      class nm {
        static generate() {
          return new nm(eC());
        }
        static fromSecretKey(e, t) {
          if (64 !== e.byteLength) throw Error("bad secret key size");
          let r = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            let t = eO(e.slice(0, 32));
            for (let e = 0; e < 32; e++)
              if (r[e] !== t[e]) throw Error("provided secretKey is invalid");
          }
          return new nm({ publicKey: r, secretKey: e });
        }
        static fromSeed(e) {
          let t = eO(e),
            r = new Uint8Array(64);
          return r.set(e), r.set(t, 32), new nm({ publicKey: t, secretKey: r });
        }
        get publicKey() {
          return new ej(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
        constructor(e) {
          (this._keypair = void 0), (this._keypair = null != e ? e : eC());
        }
      }
      let nb = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: V.struct([
            V.u32("instruction"),
            tT("recentSlot"),
            V.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: V.struct([V.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: V.struct([
            V.u32("instruction"),
            tT(),
            V.seq(e0(), V.offset(V.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: V.struct([V.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: V.struct([V.u32("instruction")]),
        },
      });
      class nk {
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = V.u32("instruction").decode(e.data);
          for (let [e, n] of Object.entries(nb))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error(
              "Invalid Instruction. Should be a LookupTable Instruction"
            );
          return t;
        }
        static decodeCreateLookupTable(e) {
          this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
          let { recentSlot: t } = tE(nb.CreateLookupTable, e.data);
          return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t),
          };
        }
        static decodeExtendLookupTable(e) {
          if ((this.checkProgramId(e.programId), e.keys.length < 2))
            throw Error(
              "invalid instruction; found ".concat(
                e.keys.length,
                " keys, expected at least 2"
              )
            );
          let { addresses: t } = tE(nb.ExtendLookupTable, e.data);
          return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map((e) => new ej(e)),
          };
        }
        static decodeCloseLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
              lookupTable: e.keys[0].pubkey,
              authority: e.keys[1].pubkey,
              recipient: e.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(nw.programId))
            throw Error(
              "invalid instruction; programId is not AddressLookupTable Program"
            );
        }
        static checkKeysLength(e, t) {
          if (e.length < t)
            throw Error(
              "invalid instruction; found "
                .concat(e.length, " keys, expected at least ")
                .concat(t)
            );
        }
        constructor() {}
      }
      class nw {
        static createLookupTable(e) {
          let [t, r] = ej.findProgramAddressSync(
              [e.authority.toBuffer(), X().encode(e.recentSlot)],
              this.programId
            ),
            n = t_(nb.CreateLookupTable, {
              recentSlot: BigInt(e.recentSlot),
              bumpSeed: r,
            }),
            i = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: tC.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new to({ programId: this.programId, keys: i, data: n }), t];
        }
        static freezeLookupTable(e) {
          let t = t_(nb.FreezeLookupTable),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new to({ programId: this.programId, keys: r, data: t });
        }
        static extendLookupTable(e) {
          let t = t_(nb.ExtendLookupTable, {
              addresses: e.addresses.map((e) => e.toBytes()),
            }),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              r.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                { pubkey: tC.programId, isSigner: !1, isWritable: !1 }
              ),
            new to({ programId: this.programId, keys: r, data: t })
          );
        }
        static deactivateLookupTable(e) {
          let t = t_(nb.DeactivateLookupTable),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new to({ programId: this.programId, keys: r, data: t });
        }
        static closeLookupTable(e) {
          let t = t_(nb.CloseLookupTable),
            r = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new to({ programId: this.programId, keys: r, data: t });
        }
        constructor() {}
      }
      nw.programId = new ej("AddressLookupTab1e1111111111111111111111111");
      class nS {
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = V.u8("instruction").decode(e.data);
          for (let [e, n] of Object.entries(nv))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error(
              "Instruction type incorrect; not a ComputeBudgetInstruction"
            );
          return t;
        }
        static decodeRequestUnits(e) {
          this.checkProgramId(e.programId);
          let { units: t, additionalFee: r } = tE(nv.RequestUnits, e.data);
          return { units: t, additionalFee: r };
        }
        static decodeRequestHeapFrame(e) {
          this.checkProgramId(e.programId);
          let { bytes: t } = tE(nv.RequestHeapFrame, e.data);
          return { bytes: t };
        }
        static decodeSetComputeUnitLimit(e) {
          this.checkProgramId(e.programId);
          let { units: t } = tE(nv.SetComputeUnitLimit, e.data);
          return { units: t };
        }
        static decodeSetComputeUnitPrice(e) {
          this.checkProgramId(e.programId);
          let { microLamports: t } = tE(nv.SetComputeUnitPrice, e.data);
          return { microLamports: t };
        }
        static checkProgramId(e) {
          if (!e.equals(nI.programId))
            throw Error(
              "invalid instruction; programId is not ComputeBudgetProgram"
            );
        }
        constructor() {}
      }
      let nv = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: V.struct([
            V.u8("instruction"),
            V.u32("units"),
            V.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: V.struct([V.u8("instruction"), V.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: V.struct([V.u8("instruction"), V.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: V.struct([V.u8("instruction"), tT("microLamports")]),
        },
      });
      class nI {
        static requestUnits(e) {
          let t = t_(nv.RequestUnits, e);
          return new to({ keys: [], programId: this.programId, data: t });
        }
        static requestHeapFrame(e) {
          let t = t_(nv.RequestHeapFrame, e);
          return new to({ keys: [], programId: this.programId, data: t });
        }
        static setComputeUnitLimit(e) {
          let t = t_(nv.SetComputeUnitLimit, e);
          return new to({ keys: [], programId: this.programId, data: t });
        }
        static setComputeUnitPrice(e) {
          let t = t_(nv.SetComputeUnitPrice, {
            microLamports: BigInt(e.microLamports),
          });
          return new to({ keys: [], programId: this.programId, data: t });
        }
        constructor() {}
      }
      nI.programId = new ej("ComputeBudget111111111111111111111111111111");
      let n_ = V.struct([
        V.u8("numSignatures"),
        V.u8("padding"),
        V.u16("signatureOffset"),
        V.u16("signatureInstructionIndex"),
        V.u16("publicKeyOffset"),
        V.u16("publicKeyInstructionIndex"),
        V.u16("messageDataOffset"),
        V.u16("messageDataSize"),
        V.u16("messageInstructionIndex"),
      ]);
      class nE {
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: r,
            signature: i,
            instructionIndex: s,
          } = e;
          e8(
            32 === t.length,
            "Public Key must be "
              .concat(32, " bytes but received ")
              .concat(t.length, " bytes")
          ),
            e8(
              64 === i.length,
              "Signature must be "
                .concat(64, " bytes but received ")
                .concat(i.length, " bytes")
            );
          let o = n_.span,
            a = o + t.length,
            c = a + i.length,
            u = n.Buffer.alloc(c + r.length),
            l = null == s ? 65535 : s;
          return (
            n_.encode(
              {
                numSignatures: 1,
                padding: 0,
                signatureOffset: a,
                signatureInstructionIndex: l,
                publicKeyOffset: o,
                publicKeyInstructionIndex: l,
                messageDataOffset: c,
                messageDataSize: r.length,
                messageInstructionIndex: l,
              },
              u
            ),
            u.fill(t, o),
            u.fill(i, a),
            u.fill(r, c),
            new to({ keys: [], programId: nE.programId, data: u })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: r, instructionIndex: n } = e;
          e8(
            64 === t.length,
            "Private key must be "
              .concat(64, " bytes but received ")
              .concat(t.length, " bytes")
          );
          try {
            let e = nm.fromSecretKey(t),
              i = e.publicKey.toBytes(),
              s = eN(r, e.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: r,
              signature: s,
              instructionIndex: n,
            });
          } catch (e) {
            throw Error("Error creating instruction; ".concat(e));
          }
        }
        constructor() {}
      }
      (nE.programId = new ej("Ed25519SigVerify111111111111111111111111111")),
        eR.secp256k1.utils.isValidPrivateKey;
      let nA = eR.secp256k1.getPublicKey,
        nB = V.struct([
          V.u8("numSignatures"),
          V.u16("signatureOffset"),
          V.u8("signatureInstructionIndex"),
          V.u16("ethAddressOffset"),
          V.u8("ethAddressInstructionIndex"),
          V.u16("messageDataOffset"),
          V.u16("messageDataSize"),
          V.u8("messageInstructionIndex"),
          V.blob(20, "ethAddress"),
          V.blob(64, "signature"),
          V.u8("recoveryId"),
        ]);
      class nx {
        static publicKeyToEthAddress(e) {
          e8(
            64 === e.length,
            "Public key must be "
              .concat(64, " bytes but received ")
              .concat(e.length, " bytes")
          );
          try {
            return n.Buffer.from((0, eT.keccak_256)(eW(e))).slice(-20);
          } catch (e) {
            throw Error("Error constructing Ethereum address: ".concat(e));
          }
        }
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: r,
            signature: n,
            recoveryId: i,
            instructionIndex: s,
          } = e;
          return nx.createInstructionWithEthAddress({
            ethAddress: nx.publicKeyToEthAddress(t),
            message: r,
            signature: n,
            recoveryId: i,
            instructionIndex: s,
          });
        }
        static createInstructionWithEthAddress(e) {
          let t,
            {
              ethAddress: r,
              message: i,
              signature: s,
              recoveryId: o,
              instructionIndex: a = 0,
            } = e;
          e8(
            20 ===
              (t =
                "string" == typeof r
                  ? r.startsWith("0x")
                    ? n.Buffer.from(r.substr(2), "hex")
                    : n.Buffer.from(r, "hex")
                  : r).length,
            "Address must be "
              .concat(20, " bytes but received ")
              .concat(t.length, " bytes")
          );
          let c = 12 + t.length,
            u = c + s.length + 1,
            l = n.Buffer.alloc(nB.span + i.length);
          return (
            nB.encode(
              {
                numSignatures: 1,
                signatureOffset: c,
                signatureInstructionIndex: a,
                ethAddressOffset: 12,
                ethAddressInstructionIndex: a,
                messageDataOffset: u,
                messageDataSize: i.length,
                messageInstructionIndex: a,
                signature: eW(s),
                ethAddress: eW(t),
                recoveryId: o,
              },
              l
            ),
            l.fill(eW(i), nB.span),
            new to({ keys: [], programId: nx.programId, data: l })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: r, instructionIndex: i } = e;
          e8(
            32 === t.length,
            "Private key must be "
              .concat(32, " bytes but received ")
              .concat(t.length, " bytes")
          );
          try {
            let e = eW(t),
              s = nA(e, !1).slice(1),
              o = n.Buffer.from((0, eT.keccak_256)(eW(r))),
              [a, c] = ((e, t) => {
                let r = eR.secp256k1.sign(e, t);
                return [r.toCompactRawBytes(), r.recovery];
              })(o, e);
            return this.createInstructionWithPublicKey({
              publicKey: s,
              message: r,
              signature: a,
              recoveryId: c,
              instructionIndex: i,
            });
          } catch (e) {
            throw Error("Error creating instruction; ".concat(e));
          }
        }
        constructor() {}
      }
      nx.programId = new ej("KeccakSecp256k11111111111111111111111111111");
      let nP = new ej("StakeConfig11111111111111111111111111111111");
      class nT {
        constructor(e, t) {
          (this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t);
        }
      }
      class nR {
        constructor(e, t, r) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = r);
        }
      }
      nR.default = new nR(0, 0, ej.default);
      class nL {
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = V.u32("instruction").decode(e.data);
          for (let [e, n] of Object.entries(nC))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error("Instruction type incorrect; not a StakeInstruction");
          return t;
        }
        static decodeInitialize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let { authorized: t, lockup: r } = tE(nC.Initialize, e.data);
          return {
            stakePubkey: e.keys[0].pubkey,
            authorized: new nT(new ej(t.staker), new ej(t.withdrawer)),
            lockup: new nR(r.unixTimestamp, r.epoch, new ej(r.custodian)),
          };
        }
        static decodeDelegate(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 6),
            tE(nC.Delegate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              votePubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[5].pubkey,
            }
          );
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, stakeAuthorizationType: r } = tE(
              nC.Authorize,
              e.data
            ),
            n = {
              stakePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
              newAuthorizedPubkey: new ej(t),
              stakeAuthorizationType: { index: r },
            };
          return e.keys.length > 3 && (n.custodianPubkey = e.keys[3].pubkey), n;
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
          let {
              newAuthorized: t,
              stakeAuthorizationType: r,
              authoritySeed: n,
              authorityOwner: i,
            } = tE(nC.AuthorizeWithSeed, e.data),
            s = {
              stakePubkey: e.keys[0].pubkey,
              authorityBase: e.keys[1].pubkey,
              authoritySeed: n,
              authorityOwner: new ej(i),
              newAuthorizedPubkey: new ej(t),
              stakeAuthorizationType: { index: r },
            };
          return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey), s;
        }
        static decodeSplit(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = tE(nC.Split, e.data);
          return {
            stakePubkey: e.keys[0].pubkey,
            splitStakePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            lamports: t,
          };
        }
        static decodeMerge(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            tE(nC.Merge, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              sourceStakePubKey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
            }
          );
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
          let { lamports: t } = tE(nC.Withdraw, e.data),
            r = {
              stakePubkey: e.keys[0].pubkey,
              toPubkey: e.keys[1].pubkey,
              authorizedPubkey: e.keys[4].pubkey,
              lamports: t,
            };
          return e.keys.length > 5 && (r.custodianPubkey = e.keys[5].pubkey), r;
        }
        static decodeDeactivate(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            tE(nC.Deactivate, e.data),
            {
              stakePubkey: e.keys[0].pubkey,
              authorizedPubkey: e.keys[2].pubkey,
            }
          );
        }
        static checkProgramId(e) {
          if (!e.equals(nz.programId))
            throw Error("invalid instruction; programId is not StakeProgram");
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw Error(
              "invalid instruction; found "
                .concat(e.length, " keys, expected at least ")
                .concat(t)
            );
        }
        constructor() {}
      }
      let nC = Object.freeze({
          Initialize: {
            index: 0,
            layout: V.struct([
              V.u32("instruction"),
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "authorized";
                return V.struct([e0("staker"), e0("withdrawer")], e);
              })(),
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "lockup";
                return V.struct(
                  [V.ns64("unixTimestamp"), V.ns64("epoch"), e0("custodian")],
                  e
                );
              })(),
            ]),
          },
          Authorize: {
            index: 1,
            layout: V.struct([
              V.u32("instruction"),
              e0("newAuthorized"),
              V.u32("stakeAuthorizationType"),
            ]),
          },
          Delegate: { index: 2, layout: V.struct([V.u32("instruction")]) },
          Split: {
            index: 3,
            layout: V.struct([V.u32("instruction"), V.ns64("lamports")]),
          },
          Withdraw: {
            index: 4,
            layout: V.struct([V.u32("instruction"), V.ns64("lamports")]),
          },
          Deactivate: { index: 5, layout: V.struct([V.u32("instruction")]) },
          Merge: { index: 7, layout: V.struct([V.u32("instruction")]) },
          AuthorizeWithSeed: {
            index: 8,
            layout: V.struct([
              V.u32("instruction"),
              e0("newAuthorized"),
              V.u32("stakeAuthorizationType"),
              e6("authoritySeed"),
              e0("authorityOwner"),
            ]),
          },
        }),
        nO = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
      class nz {
        static initialize(e) {
          let { stakePubkey: t, authorized: r, lockup: n } = e,
            i = n || nR.default,
            s = t_(nC.Initialize, {
              authorized: {
                staker: eW(r.staker.toBuffer()),
                withdrawer: eW(r.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: i.unixTimestamp,
                epoch: i.epoch,
                custodian: eW(i.custodian.toBuffer()),
              },
            });
          return new to({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: tp, isSigner: !1, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static createAccountWithSeed(e) {
          let t = new ta();
          t.add(
            tC.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: n, lockup: i } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: n, lockup: i })
          );
        }
        static createAccount(e) {
          let t = new ta();
          t.add(
            tC.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: r, authorized: n, lockup: i } = e;
          return t.add(
            this.initialize({ stakePubkey: r, authorized: n, lockup: i })
          );
        }
        static delegate(e) {
          let { stakePubkey: t, authorizedPubkey: r, votePubkey: n } = e,
            i = t_(nC.Delegate);
          return new ta().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !1 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: tb, isSigner: !1, isWritable: !1 },
              { pubkey: nP, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static authorize(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: n,
              stakeAuthorizationType: i,
              custodianPubkey: s,
            } = e,
            o = t_(nC.Authorize, {
              newAuthorized: eW(n.toBuffer()),
              stakeAuthorizationType: i.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: tl, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && a.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            new ta().add({ keys: a, programId: this.programId, data: o })
          );
        }
        static authorizeWithSeed(e) {
          let {
              stakePubkey: t,
              authorityBase: r,
              authoritySeed: n,
              authorityOwner: i,
              newAuthorizedPubkey: s,
              stakeAuthorizationType: o,
              custodianPubkey: a,
            } = e,
            c = t_(nC.AuthorizeWithSeed, {
              newAuthorized: eW(s.toBuffer()),
              stakeAuthorizationType: o.index,
              authoritySeed: n,
              authorityOwner: eW(i.toBuffer()),
            }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
            ];
          return (
            a && u.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
            new ta().add({ keys: u, programId: this.programId, data: c })
          );
        }
        static splitInstruction(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              splitStakePubkey: n,
              lamports: i,
            } = e,
            s = t_(nC.Split, { lamports: i });
          return new to({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static split(e, t) {
          let r = new ta();
          return (
            r.add(
              tC.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId,
              })
            ),
            r.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e, t) {
          let {
              stakePubkey: r,
              authorizedPubkey: n,
              splitStakePubkey: i,
              basePubkey: s,
              seed: o,
              lamports: a,
            } = e,
            c = new ta();
          return (
            c.add(
              tC.allocate({
                accountPubkey: i,
                basePubkey: s,
                seed: o,
                space: this.space,
                programId: this.programId,
              })
            ),
            t &&
              t > 0 &&
              c.add(
                tC.transfer({
                  fromPubkey: e.authorizedPubkey,
                  toPubkey: i,
                  lamports: t,
                })
              ),
            c.add(
              this.splitInstruction({
                stakePubkey: r,
                authorizedPubkey: n,
                splitStakePubkey: i,
                lamports: a,
              })
            )
          );
        }
        static merge(e) {
          let { stakePubkey: t, sourceStakePubKey: r, authorizedPubkey: n } = e,
            i = t_(nC.Merge);
          return new ta().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !1, isWritable: !0 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: tb, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static withdraw(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: r,
              toPubkey: n,
              lamports: i,
              custodianPubkey: s,
            } = e,
            o = t_(nC.Withdraw, { lamports: i }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: tb, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && a.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            new ta().add({ keys: a, programId: this.programId, data: o })
          );
        }
        static deactivate(e) {
          let { stakePubkey: t, authorizedPubkey: r } = e,
            n = t_(nC.Deactivate);
          return new ta().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        constructor() {}
      }
      (nz.programId = new ej("Stake11111111111111111111111111111111111111")),
        (nz.space = 200);
      class nN {
        constructor(e, t, r, n) {
          (this.nodePubkey = void 0),
            (this.authorizedVoter = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.nodePubkey = e),
            (this.authorizedVoter = t),
            (this.authorizedWithdrawer = r),
            (this.commission = n);
        }
      }
      class nU {
        static decodeInstructionType(e) {
          let t;
          this.checkProgramId(e.programId);
          let r = V.u32("instruction").decode(e.data);
          for (let [e, n] of Object.entries(nW))
            if (n.index == r) {
              t = e;
              break;
            }
          if (!t)
            throw Error("Instruction type incorrect; not a VoteInstruction");
          return t;
        }
        static decodeInitializeAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
          let { voteInit: t } = tE(nW.InitializeAccount, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new nN(
              new ej(t.nodePubkey),
              new ej(t.authorizedVoter),
              new ej(t.authorizedWithdrawer),
              t.commission
            ),
          };
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, voteAuthorizationType: r } = tE(
            nW.Authorize,
            e.data
          );
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new ej(t),
            voteAuthorizationType: { index: r },
          };
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: t,
              currentAuthorityDerivedKeySeed: r,
              newAuthorized: n,
              voteAuthorizationType: i,
            },
          } = tE(nW.AuthorizeWithSeed, e.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new ej(t),
            currentAuthorityDerivedKeySeed: r,
            newAuthorizedPubkey: new ej(n),
            voteAuthorizationType: { index: i },
            votePubkey: e.keys[0].pubkey,
          };
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = tE(nW.Withdraw, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey,
          };
        }
        static checkProgramId(e) {
          if (!e.equals(nq.programId))
            throw Error("invalid instruction; programId is not VoteProgram");
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw Error(
              "invalid instruction; found "
                .concat(e.length, " keys, expected at least ")
                .concat(t)
            );
        }
        constructor() {}
      }
      let nW = Object.freeze({
          InitializeAccount: {
            index: 0,
            layout: V.struct([
              V.u32("instruction"),
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "voteInit";
                return V.struct(
                  [
                    e0("nodePubkey"),
                    e0("authorizedVoter"),
                    e0("authorizedWithdrawer"),
                    V.u8("commission"),
                  ],
                  e
                );
              })(),
            ]),
          },
          Authorize: {
            index: 1,
            layout: V.struct([
              V.u32("instruction"),
              e0("newAuthorized"),
              V.u32("voteAuthorizationType"),
            ]),
          },
          Withdraw: {
            index: 3,
            layout: V.struct([V.u32("instruction"), V.ns64("lamports")]),
          },
          UpdateValidatorIdentity: {
            index: 4,
            layout: V.struct([V.u32("instruction")]),
          },
          AuthorizeWithSeed: {
            index: 10,
            layout: V.struct([
              V.u32("instruction"),
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "voteAuthorizeWithSeedArgs";
                return V.struct(
                  [
                    V.u32("voteAuthorizationType"),
                    e0("currentAuthorityDerivedKeyOwnerPubkey"),
                    e6("currentAuthorityDerivedKeySeed"),
                    e0("newAuthorized"),
                  ],
                  e
                );
              })(),
            ]),
          },
        }),
        nK = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } });
      class nq {
        static initializeAccount(e) {
          let { votePubkey: t, nodePubkey: r, voteInit: n } = e,
            i = t_(nW.InitializeAccount, {
              voteInit: {
                nodePubkey: eW(n.nodePubkey.toBuffer()),
                authorizedVoter: eW(n.authorizedVoter.toBuffer()),
                authorizedWithdrawer: eW(n.authorizedWithdrawer.toBuffer()),
                commission: n.commission,
              },
            });
          return new to({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: tp, isSigner: !1, isWritable: !1 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static createAccount(e) {
          let t = new ta();
          return (
            t.add(
              tC.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              })
            )
          );
        }
        static authorize(e) {
          let {
              votePubkey: t,
              authorizedPubkey: r,
              newAuthorizedPubkey: n,
              voteAuthorizationType: i,
            } = e,
            s = t_(nW.Authorize, {
              newAuthorized: eW(n.toBuffer()),
              voteAuthorizationType: i.index,
            });
          return new ta().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static authorizeWithSeed(e) {
          let {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: r,
              currentAuthorityDerivedKeySeed: n,
              newAuthorizedPubkey: i,
              voteAuthorizationType: s,
              votePubkey: o,
            } = e,
            a = t_(nW.AuthorizeWithSeed, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: eW(r.toBuffer()),
                currentAuthorityDerivedKeySeed: n,
                newAuthorized: eW(i.toBuffer()),
                voteAuthorizationType: s.index,
              },
            });
          return new ta().add({
            keys: [
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: tl, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: a,
          });
        }
        static withdraw(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              lamports: n,
              toPubkey: i,
            } = e,
            s = t_(nW.Withdraw, { lamports: n });
          return new ta().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
        static safeWithdraw(e, t, r) {
          if (e.lamports > t - r)
            throw Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return nq.withdraw(e);
        }
        static updateValidatorIdentity(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: r,
              nodePubkey: n,
            } = e,
            i = t_(nW.UpdateValidatorIdentity);
          return new ta().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
              { pubkey: r, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        constructor() {}
      }
      (nq.programId = new ej("Vote111111111111111111111111111111111111111")),
        (nq.space = 3762);
      let nM = new ej("Va1idator1nfo111111111111111111111111111111"),
        nD = eS({
          name: ek(),
          website: em(ek()),
          details: em(ek()),
          iconUrl: em(ek()),
          keybaseUsername: em(ek()),
        });
      class nF {
        static fromConfigData(e) {
          let t = [...e];
          if (2 !== e5(t)) return null;
          let r = [];
          for (let e = 0; e < 2; e++) {
            let e = new ej(te(t, 0, eF)),
              n = 1 === e9(t);
            r.push({ publicKey: e, isSigner: n });
          }
          if (r[0].publicKey.equals(nM) && r[1].isSigner) {
            let e = JSON.parse(e6().decode(n.Buffer.from(t)));
            return ea(e, nD), new nF(r[1].publicKey, e);
          }
          return null;
        }
        constructor(e, t) {
          (this.key = void 0),
            (this.info = void 0),
            (this.key = e),
            (this.info = t);
        }
      }
      let nV = new ej("Vote111111111111111111111111111111111111111"),
        nj = V.struct([
          e0("nodePubkey"),
          e0("authorizedWithdrawer"),
          V.u8("commission"),
          V.nu64(),
          V.seq(
            V.struct([V.nu64("slot"), V.u32("confirmationCount")]),
            V.offset(V.u32(), -8),
            "votes"
          ),
          V.u8("rootSlotValid"),
          V.nu64("rootSlot"),
          V.nu64(),
          V.seq(
            V.struct([V.nu64("epoch"), e0("authorizedVoter")]),
            V.offset(V.u32(), -8),
            "authorizedVoters"
          ),
          V.struct(
            [
              V.seq(
                V.struct([
                  e0("authorizedPubkey"),
                  V.nu64("epochOfLastAuthorizedSwitch"),
                  V.nu64("targetEpoch"),
                ]),
                32,
                "buf"
              ),
              V.nu64("idx"),
              V.u8("isEmpty"),
            ],
            "priorVoters"
          ),
          V.nu64(),
          V.seq(
            V.struct([
              V.nu64("epoch"),
              V.nu64("credits"),
              V.nu64("prevCredits"),
            ]),
            V.offset(V.u32(), -8),
            "epochCredits"
          ),
          V.struct([V.nu64("slot"), V.nu64("timestamp")], "lastTimestamp"),
        ]);
      class nH {
        static fromAccountData(e) {
          let t = nj.decode(eW(e), 4),
            r = t.rootSlot;
          return (
            t.rootSlotValid || (r = null),
            new nH({
              nodePubkey: new ej(t.nodePubkey),
              authorizedWithdrawer: new ej(t.authorizedWithdrawer),
              commission: t.commission,
              votes: t.votes,
              rootSlot: r,
              authorizedVoters: t.authorizedVoters.map(nG),
              priorVoters: (function (e) {
                let { buf: t, idx: r, isEmpty: n } = e;
                return n
                  ? []
                  : [...t.slice(r + 1).map(nJ), ...t.slice(0, r).map(nJ)];
              })(t.priorVoters),
              epochCredits: t.epochCredits,
              lastTimestamp: t.lastTimestamp,
            })
          );
        }
        constructor(e) {
          (this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = e.nodePubkey),
            (this.authorizedWithdrawer = e.authorizedWithdrawer),
            (this.commission = e.commission),
            (this.rootSlot = e.rootSlot),
            (this.votes = e.votes),
            (this.authorizedVoters = e.authorizedVoters),
            (this.priorVoters = e.priorVoters),
            (this.epochCredits = e.epochCredits),
            (this.lastTimestamp = e.lastTimestamp);
        }
      }
      function nG(e) {
        let { authorizedVoter: t, epoch: r } = e;
        return { epoch: r, authorizedVoter: new ej(t) };
      }
      function nJ(e) {
        let {
          authorizedPubkey: t,
          epochOfLastAuthorizedSwitch: r,
          targetEpoch: n,
        } = e;
        return {
          authorizedPubkey: new ej(t),
          epochOfLastAuthorizedSwitch: r,
          targetEpoch: n,
        };
      }
      let nY = {
        http: {
          devnet: "http://api.devnet.solana.com",
          testnet: "http://api.testnet.solana.com",
          "mainnet-beta": "http://api.mainnet-beta.solana.com/",
        },
        https: {
          devnet: "https://api.devnet.solana.com",
          testnet: "https://api.testnet.solana.com",
          "mainnet-beta": "https://api.mainnet-beta.solana.com/",
        },
      };
      function nZ(e, t) {
        let r = !1 === t ? "http" : "https";
        if (!e) return nY[r].devnet;
        let n = nY[r][e];
        if (!n) throw Error("Unknown ".concat(r, " cluster: ").concat(e));
        return n;
      }
      async function nX(e, t, r, n) {
        let i, s;
        (r &&
          Object.prototype.hasOwnProperty.call(r, "lastValidBlockHeight")) ||
        (r && Object.prototype.hasOwnProperty.call(r, "nonceValue"))
          ? ((i = r), (s = n))
          : (s = r);
        let o = s && {
            skipPreflight: s.skipPreflight,
            preflightCommitment: s.preflightCommitment || s.commitment,
            minContextSlot: s.minContextSlot,
          },
          a = await e.sendRawTransaction(t, o),
          c = s && s.commitment,
          u = i ? e.confirmTransaction(i, c) : e.confirmTransaction(a, c),
          l = (await u).value;
        if (l.err) {
          if (null != a)
            throw new tk({
              action: (null == o ? void 0 : o.skipPreflight)
                ? "send"
                : "simulate",
              signature: a,
              transactionMessage: "Status: (".concat(JSON.stringify(l), ")"),
            });
          throw Error(
            "Raw transaction "
              .concat(a, " failed (")
              .concat(JSON.stringify(l), ")")
          );
        }
        return a;
      }
      let nQ = 1e9;
    },
  },
]);

//# sourceMappingURL=208c3a096f89f60d.js.map
