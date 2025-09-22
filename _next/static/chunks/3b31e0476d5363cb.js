(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    502345: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, not ".concat(e));
      }
      function a(e) {
        if ("boolean" != typeof e)
          throw Error("boolean expected, not ".concat(e));
      }
      function i(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function s(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if (!i(e)) throw Error("Uint8Array expected");
        if (n.length > 0 && !n.includes(e.length))
          throw Error(
            "Uint8Array expected of length "
              .concat(n, ", not of length=")
              .concat(e.length)
          );
      }
      function o(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(e.outputLen), r(e.blockLen);
      }
      function c(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function u(e, t) {
        s(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least ".concat(n)
          );
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.output =
          n.exists =
          n.hash =
          n.bytes =
          n.bool =
          n.number =
          n.isBytes =
            void 0),
        (n.number = r),
        (n.bool = a),
        (n.isBytes = i),
        (n.bytes = s),
        (n.hash = o),
        (n.exists = c),
        (n.output = u),
        (n.default = {
          number: r,
          bool: a,
          bytes: s,
          hash: o,
          exists: c,
          output: u,
        });
    },
    700090: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.add5L =
            n.add5H =
            n.add4H =
            n.add4L =
            n.add3H =
            n.add3L =
            n.add =
            n.rotlBL =
            n.rotlBH =
            n.rotlSL =
            n.rotlSH =
            n.rotr32L =
            n.rotr32H =
            n.rotrBL =
            n.rotrBH =
            n.rotrSL =
            n.rotrSH =
            n.shrSL =
            n.shrSH =
            n.toBig =
            n.split =
            n.fromBig =
              void 0);
        let e = BigInt(0x100000000 - 1),
          t = BigInt(32);
        function r(n) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return r
            ? { h: Number(n & e), l: Number((n >> t) & e) }
            : { h: 0 | Number((n >> t) & e), l: 0 | Number(n & e) };
        }
        function a(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = new Uint32Array(e.length),
            a = new Uint32Array(e.length);
          for (let i = 0; i < e.length; i++) {
            let { h: s, l: o } = r(e[i], t);
            [n[i], a[i]] = [s, o];
          }
          return [n, a];
        }
        (n.fromBig = r), (n.split = a);
        let s = (e, n) => (BigInt(e >>> 0) << t) | BigInt(n >>> 0);
        n.toBig = s;
        let o = (e, t, n) => e >>> n;
        n.shrSH = o;
        let c = (e, t, n) => (e << (32 - n)) | (t >>> n);
        n.shrSL = c;
        let u = (e, t, n) => (e >>> n) | (t << (32 - n));
        n.rotrSH = u;
        let l = (e, t, n) => (e << (32 - n)) | (t >>> n);
        n.rotrSL = l;
        let d = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
        n.rotrBH = d;
        let h = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
        n.rotrBL = h;
        let p = (e, t) => t;
        n.rotr32H = p;
        let m = (e, t) => e;
        n.rotr32L = m;
        let f = (e, t, n) => (e << n) | (t >>> (32 - n));
        n.rotlSH = f;
        let g = (e, t, n) => (t << n) | (e >>> (32 - n));
        n.rotlSL = g;
        let b = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
        n.rotlBH = b;
        let y = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
        function i(e, t, n, r) {
          let a = (t >>> 0) + (r >>> 0);
          return { h: (e + n + ((a / 0x100000000) | 0)) | 0, l: 0 | a };
        }
        (n.rotlBL = y), (n.add = i);
        let w = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
        n.add3L = w;
        let v = (e, t, n, r) => (t + n + r + ((e / 0x100000000) | 0)) | 0;
        n.add3H = v;
        let k = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
        n.add4L = k;
        let x = (e, t, n, r, a) =>
          (t + n + r + a + ((e / 0x100000000) | 0)) | 0;
        n.add4H = x;
        let A = (e, t, n, r, a) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (a >>> 0);
        n.add5L = A;
        let S = (e, t, n, r, a, i) =>
          (t + n + r + a + i + ((e / 0x100000000) | 0)) | 0;
        (n.add5H = S),
          (n.default = {
            fromBig: r,
            split: a,
            toBig: s,
            shrSH: o,
            shrSL: c,
            rotrSH: u,
            rotrSL: l,
            rotrBH: d,
            rotrBL: h,
            rotr32H: p,
            rotr32L: m,
            rotlSH: f,
            rotlSL: g,
            rotlBH: b,
            rotlBL: y,
            add: i,
            add3L: w,
            add3H: v,
            add4L: k,
            add4H: x,
            add5H: S,
            add5L: A,
          });
      }
    },
    480339: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.crypto = void 0),
        (n.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    37585: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.randomBytes =
            n.wrapXOFConstructorWithOpts =
            n.wrapConstructorWithOpts =
            n.wrapConstructor =
            n.checkOpts =
            n.Hash =
            n.concatBytes =
            n.toBytes =
            n.utf8ToBytes =
            n.asyncLoop =
            n.nextTick =
            n.hexToBytes =
            n.bytesToHex =
            n.byteSwap32 =
            n.byteSwapIfBE =
            n.byteSwap =
            n.isLE =
            n.rotl =
            n.rotr =
            n.createView =
            n.u32 =
            n.u8 =
            n.isBytes =
              void 0);
        let t = e.r(480339),
          o = e.r(502345);
        (n.isBytes = function (e) {
          return (
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          );
        }),
          (n.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
          (n.u32 = (e) =>
            new Uint32Array(
              e.buffer,
              e.byteOffset,
              Math.floor(e.byteLength / 4)
            )),
          (n.createView = (e) =>
            new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
          (n.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
          (n.isLE =
            68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]),
          (n.byteSwap = (e) =>
            ((e << 24) & 0xff000000) |
            ((e << 8) & 0xff0000) |
            ((e >>> 8) & 65280) |
            ((e >>> 24) & 255)),
          (n.byteSwapIfBE = n.isLE ? (e) => e : (e) => (0, n.byteSwap)(e)),
          (n.byteSwap32 = function (e) {
            for (let t = 0; t < e.length; t++) e[t] = (0, n.byteSwap)(e[t]);
          });
        let c = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
        n.bytesToHex = function (e) {
          (0, o.bytes)(e);
          let t = "";
          for (let n = 0; n < e.length; n++) t += c[e[n]];
          return t;
        };
        let u = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
        function r(e) {
          return e >= u._0 && e <= u._9
            ? e - u._0
            : e >= u._A && e <= u._F
            ? e - (u._A - 10)
            : e >= u._a && e <= u._f
            ? e - (u._a - 10)
            : void 0;
        }
        async function a(e, t, r) {
          let a = Date.now();
          for (let i = 0; i < e; i++) {
            r(i);
            let e = Date.now() - a;
            (e >= 0 && e < t) || (await (0, n.nextTick)(), (a += e));
          }
        }
        function i(e) {
          if ("string" != typeof e)
            throw Error("utf8ToBytes expected string, got ".concat(typeof e));
          return new Uint8Array(new TextEncoder().encode(e));
        }
        function s(e) {
          return "string" == typeof e && (e = i(e)), (0, o.bytes)(e), e;
        }
        (n.hexToBytes = function (e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          let t = e.length,
            n = t / 2;
          if (t % 2)
            throw Error(
              "padded hex string expected, got unpadded hex of length " + t
            );
          let a = new Uint8Array(n);
          for (let t = 0, i = 0; t < n; t++, i += 2) {
            let n = r(e.charCodeAt(i)),
              s = r(e.charCodeAt(i + 1));
            if (void 0 === n || void 0 === s)
              throw Error(
                'hex string expected, got non-hex character "' +
                  (e[i] + e[i + 1]) +
                  '" at index ' +
                  i
              );
            a[t] = 16 * n + s;
          }
          return a;
        }),
          (n.nextTick = async () => {}),
          (n.asyncLoop = a),
          (n.utf8ToBytes = i),
          (n.toBytes = s),
          (n.concatBytes = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            let r = 0;
            for (let e = 0; e < t.length; e++) {
              let n = t[e];
              (0, o.bytes)(n), (r += n.length);
            }
            let a = new Uint8Array(r);
            for (let e = 0, n = 0; e < t.length; e++) {
              let r = t[e];
              a.set(r, n), (n += r.length);
            }
            return a;
          }),
          (n.Hash = class {
            clone() {
              return this._cloneInto();
            }
          });
        let l = {}.toString;
        (n.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== l.call(t))
            throw Error("Options should be object or undefined");
          return Object.assign(e, t);
        }),
          (n.wrapConstructor = function (e) {
            let t = (t) => e().update(s(t)).digest(),
              n = e();
            return (
              (t.outputLen = n.outputLen),
              (t.blockLen = n.blockLen),
              (t.create = () => e()),
              t
            );
          }),
          (n.wrapConstructorWithOpts = function (e) {
            let t = (t, n) => e(n).update(s(t)).digest(),
              n = e({});
            return (
              (t.outputLen = n.outputLen),
              (t.blockLen = n.blockLen),
              (t.create = (t) => e(t)),
              t
            );
          }),
          (n.wrapXOFConstructorWithOpts = function (e) {
            let t = (t, n) => e(n).update(s(t)).digest(),
              n = e({});
            return (
              (t.outputLen = n.outputLen),
              (t.blockLen = n.blockLen),
              (t.create = (t) => e(t)),
              t
            );
          }),
          (n.randomBytes = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 32;
            if (t.crypto && "function" == typeof t.crypto.getRandomValues)
              return t.crypto.getRandomValues(new Uint8Array(e));
            throw Error("crypto.getRandomValues must be defined");
          });
      }
    },
    180112: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.shake256 =
            n.shake128 =
            n.keccak_512 =
            n.keccak_384 =
            n.keccak_256 =
            n.keccak_224 =
            n.sha3_512 =
            n.sha3_384 =
            n.sha3_256 =
            n.sha3_224 =
            n.Keccak =
            n.keccakP =
              void 0);
        let t = e.r(502345),
          a = e.r(700090),
          i = e.r(37585),
          s = [],
          o = [],
          c = [],
          u = BigInt(0),
          l = BigInt(1),
          d = BigInt(2),
          h = BigInt(7),
          p = BigInt(256),
          m = BigInt(113);
        for (let e = 0, t = l, n = 1, r = 0; e < 24; e++) {
          ([n, r] = [r, (2 * n + 3 * r) % 5]),
            s.push(2 * (5 * r + n)),
            o.push((((e + 1) * (e + 2)) / 2) % 64);
          let a = u;
          for (let e = 0; e < 7; e++)
            (t = ((t << l) ^ ((t >> h) * m)) % p) & d &&
              (a ^= l << ((l << BigInt(e)) - l));
          c.push(a);
        }
        let [f, g] = (0, a.split)(c, !0),
          b = (e, t, n) =>
            n > 32 ? (0, a.rotlBH)(e, t, n) : (0, a.rotlSH)(e, t, n),
          y = (e, t, n) =>
            n > 32 ? (0, a.rotlBL)(e, t, n) : (0, a.rotlSL)(e, t, n);
        function r(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 24,
            n = new Uint32Array(10);
          for (let r = 24 - t; r < 24; r++) {
            for (let t = 0; t < 10; t++)
              n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
            for (let t = 0; t < 10; t += 2) {
              let r = (t + 8) % 10,
                a = (t + 2) % 10,
                i = n[a],
                s = n[a + 1],
                o = b(i, s, 1) ^ n[r],
                c = y(i, s, 1) ^ n[r + 1];
              for (let n = 0; n < 50; n += 10)
                (e[t + n] ^= o), (e[t + n + 1] ^= c);
            }
            let t = e[2],
              a = e[3];
            for (let n = 0; n < 24; n++) {
              let r = o[n],
                i = b(t, a, r),
                c = y(t, a, r),
                u = s[n];
              (t = e[u]), (a = e[u + 1]), (e[u] = i), (e[u + 1] = c);
            }
            for (let t = 0; t < 50; t += 10) {
              for (let r = 0; r < 10; r++) n[r] = e[t + r];
              for (let r = 0; r < 10; r++)
                e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
            }
            (e[0] ^= f[r]), (e[1] ^= g[r]);
          }
          n.fill(0);
        }
        n.keccakP = r;
        class w extends i.Hash {
          keccak() {
            i.isLE || (0, i.byteSwap32)(this.state32),
              r(this.state32, this.rounds),
              i.isLE || (0, i.byteSwap32)(this.state32),
              (this.posOut = 0),
              (this.pos = 0);
          }
          update(e) {
            (0, t.exists)(this);
            let { blockLen: n, state: r } = this,
              a = (e = (0, i.toBytes)(e)).length;
            for (let t = 0; t < a; ) {
              let i = Math.min(n - this.pos, a - t);
              for (let n = 0; n < i; n++) r[this.pos++] ^= e[t++];
              this.pos === n && this.keccak();
            }
            return this;
          }
          finish() {
            if (this.finished) return;
            this.finished = !0;
            let { state: e, suffix: t, pos: n, blockLen: r } = this;
            (e[n] ^= t),
              (128 & t) != 0 && n === r - 1 && this.keccak(),
              (e[r - 1] ^= 128),
              this.keccak();
          }
          writeInto(e) {
            (0, t.exists)(this, !1), (0, t.bytes)(e), this.finish();
            let n = this.state,
              { blockLen: r } = this;
            for (let t = 0, a = e.length; t < a; ) {
              this.posOut >= r && this.keccak();
              let i = Math.min(r - this.posOut, a - t);
              e.set(n.subarray(this.posOut, this.posOut + i), t),
                (this.posOut += i),
                (t += i);
            }
            return e;
          }
          xofInto(e) {
            if (!this.enableXOF)
              throw Error("XOF is not possible for this instance");
            return this.writeInto(e);
          }
          xof(e) {
            return (0, t.number)(e), this.xofInto(new Uint8Array(e));
          }
          digestInto(e) {
            if (((0, t.output)(e, this), this.finished))
              throw Error("digest() was already called");
            return this.writeInto(e), this.destroy(), e;
          }
          digest() {
            return this.digestInto(new Uint8Array(this.outputLen));
          }
          destroy() {
            (this.destroyed = !0), this.state.fill(0);
          }
          _cloneInto(e) {
            let {
              blockLen: t,
              suffix: n,
              outputLen: r,
              rounds: a,
              enableXOF: i,
            } = this;
            return (
              e || (e = new w(t, n, r, i, a)),
              e.state32.set(this.state32),
              (e.pos = this.pos),
              (e.posOut = this.posOut),
              (e.finished = this.finished),
              (e.rounds = a),
              (e.suffix = n),
              (e.outputLen = r),
              (e.enableXOF = i),
              (e.destroyed = this.destroyed),
              e
            );
          }
          constructor(e, n, r, a = !1, s = 24) {
            if (
              (super(),
              (this.blockLen = e),
              (this.suffix = n),
              (this.outputLen = r),
              (this.enableXOF = a),
              (this.rounds = s),
              (this.pos = 0),
              (this.posOut = 0),
              (this.finished = !1),
              (this.destroyed = !1),
              (0, t.number)(r),
              0 >= this.blockLen || this.blockLen >= 200)
            )
              throw Error("Sha3 supports only keccak-f1600 function");
            (this.state = new Uint8Array(200)),
              (this.state32 = (0, i.u32)(this.state));
          }
        }
        n.Keccak = w;
        let v = (e, t, n) => (0, i.wrapConstructor)(() => new w(t, e, n));
        (n.sha3_224 = v(6, 144, 28)),
          (n.sha3_256 = v(6, 136, 32)),
          (n.sha3_384 = v(6, 104, 48)),
          (n.sha3_512 = v(6, 72, 64)),
          (n.keccak_224 = v(1, 144, 28)),
          (n.keccak_256 = v(1, 136, 32)),
          (n.keccak_384 = v(1, 104, 48)),
          (n.keccak_512 = v(1, 72, 64));
        let k = (e, t, n) =>
          (0, i.wrapXOFConstructorWithOpts)(function () {
            let r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return new w(t, e, void 0 === r.dkLen ? n : r.dkLen, !0);
          });
        (n.shake128 = k(31, 168, 16)), (n.shake256 = k(31, 136, 32));
      }
    },
    879189: (e) => {
      var { m: t, e: n } = e;
      {
        var r = e.i(710841);
        let { keccak_256: n } = e.r(180112);
        function a(e) {
          return r.Buffer.allocUnsafe(e).fill(0);
        }
        function i(e, t) {
          let n = e.toString(16);
          n.length % 2 != 0 && (n = "0" + n);
          let a = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
          for (; a.length < t; ) a.unshift(0);
          return r.Buffer.from(a);
        }
        function s(e, t, n) {
          let r = a(t);
          return ((e = o(e)), n)
            ? e.length < t
              ? (e.copy(r), r)
              : e.slice(0, t)
            : e.length < t
            ? (e.copy(r, t - e.length), r)
            : e.slice(-t);
        }
        function o(e) {
          if (!r.Buffer.isBuffer(e))
            if (Array.isArray(e)) e = r.Buffer.from(e);
            else if ("string" == typeof e)
              e = u(e) ? r.Buffer.from(c(l(e)), "hex") : r.Buffer.from(e);
            else if ("number" == typeof e)
              e = (function (e) {
                let t = (function (e) {
                  let t = e.toString(16);
                  return "0x".concat(t);
                })(e);
                return new r.Buffer(c(t.slice(2)), "hex");
              })(e);
            else if (null == e) e = r.Buffer.allocUnsafe(0);
            else if ("bigint" == typeof e) e = i(e);
            else if (e.toArray) e = r.Buffer.from(e.toArray());
            else throw Error("invalid type");
          return e;
        }
        function c(e) {
          return e.length % 2 ? "0" + e : e;
        }
        function u(e) {
          return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
        }
        function l(e) {
          return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
        }
        t.exports = {
          zeros: a,
          setLength: s,
          setLengthRight: function (e, t) {
            return s(e, t, !0);
          },
          isHexString: u,
          stripHexPrefix: l,
          toBuffer: o,
          bufferToHex: function (e) {
            return "0x" + (e = o(e)).toString("hex");
          },
          keccak: function (e, t) {
            if (((e = o(e)), t || (t = 256), 256 !== t))
              throw Error("unsupported");
            return r.Buffer.from(n(new Uint8Array(e)));
          },
          bitLengthFromBigInt: function (e) {
            return e.toString(2).length;
          },
          bufferBEFromBigInt: i,
          twosFromBigInt: function (e, t) {
            return (
              (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
              ((1n << BigInt(t)) - 1n)
            );
          },
        };
      }
    },
    959936: (e) => {
      var { m: t, e: n } = e;
      {
        var r = e.i(710841);
        let n = e.r(879189);
        function a(e) {
          if (e.startsWith("int[")) return "int256" + e.slice(3);
          if ("int" === e) return "int256";
          if (e.startsWith("uint[")) return "uint256" + e.slice(4);
          if ("uint" === e) return "uint256";
          if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
          else if ("fixed" === e) return "fixed128x128";
          else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
          else if ("ufixed" === e) return "ufixed128x128";
          return e;
        }
        function i(e) {
          return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
        }
        function s(e) {
          var t = /^\D+(\d+)x(\d+)$/.exec(e);
          return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
        }
        function o(e) {
          var t = e.match(/(.*)\[(.*?)\]$/);
          return t
            ? "" === t[2]
              ? "dynamic"
              : Number.parseInt(t[2], 10)
            : null;
        }
        function c(e) {
          var t = typeof e;
          if ("string" === t || "number" === t) return BigInt(e);
          if ("bigint" === t) return e;
          throw Error("Argument is not a number");
        }
        function u(e, t) {
          if ("address" === e) return u("uint160", c(t));
          if ("bool" === e) return u("uint8", +!!t);
          if ("string" === e) return u("bytes", new r.Buffer(t, "utf8"));
          if ((p = e).lastIndexOf("]") === p.length - 1) {
            if (void 0 === t.length) throw Error("Not an array?");
            if ("dynamic" !== (a = o(e)) && 0 !== a && t.length > a)
              throw Error("Elements exceed array size: " + a);
            for (h in ((d = []),
            (e = e.slice(0, e.lastIndexOf("["))),
            "string" == typeof t && (t = JSON.parse(t)),
            t))
              d.push(u(e, t[h]));
            if ("dynamic" === a) {
              var a,
                l,
                d,
                h,
                p,
                m = u("uint256", t.length);
              d.unshift(m);
            }
            return r.Buffer.concat(d);
          } else if ("bytes" === e)
            return (
              (t = new r.Buffer(t)),
              (d = r.Buffer.concat([u("uint256", t.length), t])),
              t.length % 32 != 0 &&
                (d = r.Buffer.concat([d, n.zeros(32 - (t.length % 32))])),
              d
            );
          else if (e.startsWith("bytes")) {
            if ((a = i(e)) < 1 || a > 32)
              throw Error("Invalid bytes<N> width: " + a);
            return n.setLengthRight(t, 32);
          } else if (e.startsWith("uint")) {
            if ((a = i(e)) % 8 || a < 8 || a > 256)
              throw Error("Invalid uint<N> width: " + a);
            l = c(t);
            let r = n.bitLengthFromBigInt(l);
            if (r > a)
              throw Error("Supplied uint exceeds width: " + a + " vs " + r);
            if (l < 0) throw Error("Supplied uint is negative");
            return n.bufferBEFromBigInt(l, 32);
          } else if (e.startsWith("int")) {
            if ((a = i(e)) % 8 || a < 8 || a > 256)
              throw Error("Invalid int<N> width: " + a);
            l = c(t);
            let r = n.bitLengthFromBigInt(l);
            if (r > a)
              throw Error("Supplied int exceeds width: " + a + " vs " + r);
            let s = n.twosFromBigInt(l, 256);
            return n.bufferBEFromBigInt(s, 32);
          } else if (e.startsWith("ufixed")) {
            if (((a = s(e)), (l = c(t)) < 0))
              throw Error("Supplied ufixed is negative");
            return u("uint256", l * BigInt(2) ** BigInt(a[1]));
          } else if (e.startsWith("fixed"))
            return (a = s(e)), u("int256", c(t) * BigInt(2) ** BigInt(a[1]));
          throw Error("Unsupported or invalid type: " + e);
        }
        function l(e, t) {
          if (e.length !== t.length)
            throw Error("Number of types are not matching the values");
          for (var s, o, u = [], l = 0; l < e.length; l++) {
            var d = a(e[l]),
              h = t[l];
            if ("bytes" === d) u.push(h);
            else if ("string" === d) u.push(new r.Buffer(h, "utf8"));
            else if ("bool" === d) u.push(new r.Buffer(h ? "01" : "00", "hex"));
            else if ("address" === d) u.push(n.setLength(h, 20));
            else if (d.startsWith("bytes")) {
              if ((s = i(d)) < 1 || s > 32)
                throw Error("Invalid bytes<N> width: " + s);
              u.push(n.setLengthRight(h, s));
            } else if (d.startsWith("uint")) {
              if ((s = i(d)) % 8 || s < 8 || s > 256)
                throw Error("Invalid uint<N> width: " + s);
              o = c(h);
              let e = n.bitLengthFromBigInt(o);
              if (e > s)
                throw Error("Supplied uint exceeds width: " + s + " vs " + e);
              u.push(n.bufferBEFromBigInt(o, s / 8));
            } else if (d.startsWith("int")) {
              if ((s = i(d)) % 8 || s < 8 || s > 256)
                throw Error("Invalid int<N> width: " + s);
              o = c(h);
              let e = n.bitLengthFromBigInt(o);
              if (e > s)
                throw Error("Supplied int exceeds width: " + s + " vs " + e);
              let t = n.twosFromBigInt(o, s);
              u.push(n.bufferBEFromBigInt(t, s / 8));
            } else throw Error("Unsupported or invalid type: " + d);
          }
          return r.Buffer.concat(u);
        }
        t.exports = {
          rawEncode: function (e, t) {
            var n = [],
              i = [],
              s = 32 * e.length;
            for (var c in e) {
              var l = a(e[c]),
                d = u(l, t[c]);
              "string" === l || "bytes" === l || "dynamic" === o(l)
                ? (n.push(u("uint256", s)), i.push(d), (s += d.length))
                : n.push(d);
            }
            return r.Buffer.concat(n.concat(i));
          },
          solidityPack: l,
          soliditySHA3: function (e, t) {
            return n.keccak(l(e, t));
          },
        };
      }
    },
    892071: (e) => {
      var { m: t, e: n } = e;
      {
        var r = e.i(710841);
        let n = e.r(879189),
          a = e.r(959936),
          i = {
            type: "object",
            properties: {
              types: {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: { type: "string" },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              primaryType: { type: "string" },
              domain: { type: "object" },
              message: { type: "object" },
            },
            required: ["types", "primaryType", "domain", "message"],
          },
          s = {
            encodeData(e, t, i) {
              let s =
                  !(arguments.length > 3) ||
                  void 0 === arguments[3] ||
                  arguments[3],
                o = ["bytes32"],
                c = [this.hashType(e, i)];
              if (s) {
                let u = (e, t, o) => {
                  if (void 0 !== i[t])
                    return [
                      "bytes32",
                      null == o
                        ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                        : n.keccak(this.encodeData(t, o, i, s)),
                    ];
                  if (void 0 === o)
                    throw Error(
                      "missing value for field "
                        .concat(e, " of type ")
                        .concat(t)
                    );
                  if ("bytes" === t) return ["bytes32", n.keccak(o)];
                  if ("string" === t)
                    return (
                      "string" == typeof o && (o = r.Buffer.from(o, "utf8")),
                      ["bytes32", n.keccak(o)]
                    );
                  if (t.lastIndexOf("]") === t.length - 1) {
                    let r = t.slice(0, t.lastIndexOf("[")),
                      i = o.map((t) => u(e, r, t));
                    return [
                      "bytes32",
                      n.keccak(
                        a.rawEncode(
                          i.map((e) => {
                            let [t] = e;
                            return t;
                          }),
                          i.map((e) => {
                            let [, t] = e;
                            return t;
                          })
                        )
                      ),
                    ];
                  }
                  return [t, o];
                };
                for (let n of i[e]) {
                  let [e, r] = u(n.name, n.type, t[n.name]);
                  o.push(e), c.push(r);
                }
              } else
                for (let a of i[e]) {
                  let e = t[a.name];
                  if (void 0 !== e)
                    if ("bytes" === a.type)
                      o.push("bytes32"), (e = n.keccak(e)), c.push(e);
                    else if ("string" === a.type)
                      o.push("bytes32"),
                        "string" == typeof e && (e = r.Buffer.from(e, "utf8")),
                        (e = n.keccak(e)),
                        c.push(e);
                    else if (void 0 !== i[a.type])
                      o.push("bytes32"),
                        (e = n.keccak(this.encodeData(a.type, e, i, s))),
                        c.push(e);
                    else if (a.type.lastIndexOf("]") === a.type.length - 1)
                      throw Error(
                        "Arrays currently unimplemented in encodeData"
                      );
                    else o.push(a.type), c.push(e);
                }
              return a.rawEncode(o, c);
            },
            encodeType(e, t) {
              let n = "",
                r = this.findTypeDependencies(e, t).filter((t) => t !== e);
              for (let a of (r = [e].concat(r.sort()))) {
                if (!t[a]) throw Error("No type definition specified: " + a);
                n +=
                  a +
                  "(" +
                  t[a]
                    .map((e) => {
                      let { name: t, type: n } = e;
                      return n + " " + t;
                    })
                    .join(",") +
                  ")";
              }
              return n;
            },
            findTypeDependencies(e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
              if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
                return n;
              for (let r of (n.push(e), t[e]))
                for (let e of this.findTypeDependencies(r.type, t, n))
                  n.includes(e) || n.push(e);
              return n;
            },
            hashStruct(e, t, r) {
              let a =
                !(arguments.length > 3) ||
                void 0 === arguments[3] ||
                arguments[3];
              return n.keccak(this.encodeData(e, t, r, a));
            },
            hashType(e, t) {
              return n.keccak(this.encodeType(e, t));
            },
            sanitizeData(e) {
              let t = {};
              for (let n in i.properties) e[n] && (t[n] = e[n]);
              return (
                t.types &&
                  (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
                t
              );
            },
            hash(e) {
              let t =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                a = this.sanitizeData(e),
                i = [r.Buffer.from("1901", "hex")];
              return (
                i.push(this.hashStruct("EIP712Domain", a.domain, a.types, t)),
                "EIP712Domain" !== a.primaryType &&
                  i.push(this.hashStruct(a.primaryType, a.message, a.types, t)),
                n.keccak(r.Buffer.concat(i))
              );
            },
          };
        t.exports = {
          TYPED_MESSAGE_SCHEMA: i,
          TypedDataUtils: s,
          hashForSignTypedDataLegacy: function (e) {
            return (function (e) {
              let t = Error("Expect argument to be non-empty array");
              if ("object" != typeof e || !e.length) throw t;
              let r = e.map(function (e) {
                  return "bytes" === e.type ? n.toBuffer(e.value) : e.value;
                }),
                i = e.map(function (e) {
                  return e.type;
                }),
                s = e.map(function (e) {
                  if (!e.name) throw t;
                  return e.type + " " + e.name;
                });
              return a.soliditySHA3(
                ["bytes32", "bytes32"],
                [
                  a.soliditySHA3(Array(e.length).fill("string"), s),
                  a.soliditySHA3(i, r),
                ]
              );
            })(e.data);
          },
          hashForSignTypedData_v3: function (e) {
            return s.hash(e.data, !1);
          },
          hashForSignTypedData_v4: function (e) {
            return s.hash(e.data);
          },
        };
      }
    },
    146401: (e) => {
      "use strict";
      e.s(
        {
          CoinbaseWalletSDK: () => nD,
          createCoinbaseWalletSDK: () => nU,
          default: () => nR,
          getCryptoKeyAccount: () => tn,
          removeCryptoKey: () => tr,
        },
        146401
      ),
        e.s({ default: () => nR }, 264082);
      var t,
        n,
        r,
        a,
        i = e.i(184637),
        s = e.i(91075);
      let o = "4.3.6",
        c = "@coinbase/wallet-sdk",
        u = (0, s.createStore)(
          (0, i.persist)(
            function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign({}, (() => ({ chains: [] }))(...t)),
                          (() => ({ keys: {} }))(...t)
                        ),
                        (() => ({ account: {} }))(...t)
                      ),
                      (() => ({ subAccount: void 0 }))(...t)
                    ),
                    (() => ({ spendPermissions: [] }))(...t)
                  ),
                  (() => ({ config: { version: o } }))(...t)
                ),
                (() => ({ subAccountConfig: {} }))(...t)
              );
            },
            {
              name: "cbwsdk.store",
              storage: (0, i.createJSONStorage)(() => localStorage),
              partialize: (e) => ({
                chains: e.chains,
                keys: e.keys,
                account: e.account,
                subAccount: e.subAccount,
                spendPermissions: e.spendPermissions,
                config: e.config,
              }),
            }
          )
        ),
        l = {
          get: () => u.getState().config,
          set: (e) => {
            u.setState((t) => ({
              config: Object.assign(Object.assign({}, t.config), e),
            }));
          },
        },
        d = Object.assign(Object.assign({}, u), {
          subAccounts: {
            get: () => u.getState().subAccount,
            set: (e) => {
              u.setState((t) => ({
                subAccount: t.subAccount
                  ? Object.assign(Object.assign({}, t.subAccount), e)
                  : Object.assign({ address: e.address }, e),
              }));
            },
            clear: () => {
              u.setState({ subAccount: void 0 });
            },
          },
          subAccountsConfig: {
            get: () => u.getState().subAccountConfig,
            set: (e) => {
              u.setState((t) => ({
                subAccountConfig: Object.assign(
                  Object.assign({}, t.subAccountConfig),
                  e
                ),
              }));
            },
            clear: () => {
              u.setState({ subAccountConfig: {} });
            },
          },
          spendPermissions: {
            get: () => u.getState().spendPermissions,
            set: (e) => {
              u.setState({ spendPermissions: e });
            },
            clear: () => {
              u.setState({ spendPermissions: [] });
            },
          },
          account: {
            get: () => u.getState().account,
            set: (e) => {
              u.setState((t) => ({
                account: Object.assign(Object.assign({}, t.account), e),
              }));
            },
            clear: () => {
              u.setState({ account: {} });
            },
          },
          chains: {
            get: () => u.getState().chains,
            set: (e) => {
              u.setState({ chains: e });
            },
            clear: () => {
              u.setState({ chains: [] });
            },
          },
          keys: {
            get: (e) => u.getState().keys[e],
            set: (e, t) => {
              u.setState((n) => ({
                keys: Object.assign(Object.assign({}, n.keys), { [e]: t }),
              }));
            },
            clear: () => {
              u.setState({ keys: {} });
            },
          },
          config: l,
        }),
        h = () =>
          new Promise((e, t) => {
            if (window.ClientAnalytics) return e();
            try {
              let t = document.createElement("script");
              (t.textContent =
                '!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClientAnalytics=t():e.ClientAnalytics=t()}(this,(function(){return(()=>{var e={792:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},562:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],a=0;a<4;a++)8*r+6*a<=8*e.length?n.push(t.charAt(i>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\\/]/gi,"");for(var n=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(r))>>>6-2*i);return n}},e.exports=n},335:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},762:(e,t,n)=>{var r,i,a,o,s;r=n(562),i=n(792).utf8,a=n(335),o=n(792).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):i.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,u=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var f=s._ff,v=s._gg,g=s._hh,b=s._ii;for(m=0;m<n.length;m+=16){var h=u,w=l,y=d,T=p;u=f(u,l,d,p,n[m+0],7,-680876936),p=f(p,u,l,d,n[m+1],12,-389564586),d=f(d,p,u,l,n[m+2],17,606105819),l=f(l,d,p,u,n[m+3],22,-1044525330),u=f(u,l,d,p,n[m+4],7,-176418897),p=f(p,u,l,d,n[m+5],12,1200080426),d=f(d,p,u,l,n[m+6],17,-1473231341),l=f(l,d,p,u,n[m+7],22,-45705983),u=f(u,l,d,p,n[m+8],7,1770035416),p=f(p,u,l,d,n[m+9],12,-1958414417),d=f(d,p,u,l,n[m+10],17,-42063),l=f(l,d,p,u,n[m+11],22,-1990404162),u=f(u,l,d,p,n[m+12],7,1804603682),p=f(p,u,l,d,n[m+13],12,-40341101),d=f(d,p,u,l,n[m+14],17,-1502002290),u=v(u,l=f(l,d,p,u,n[m+15],22,1236535329),d,p,n[m+1],5,-165796510),p=v(p,u,l,d,n[m+6],9,-1069501632),d=v(d,p,u,l,n[m+11],14,643717713),l=v(l,d,p,u,n[m+0],20,-373897302),u=v(u,l,d,p,n[m+5],5,-701558691),p=v(p,u,l,d,n[m+10],9,38016083),d=v(d,p,u,l,n[m+15],14,-660478335),l=v(l,d,p,u,n[m+4],20,-405537848),u=v(u,l,d,p,n[m+9],5,568446438),p=v(p,u,l,d,n[m+14],9,-1019803690),d=v(d,p,u,l,n[m+3],14,-187363961),l=v(l,d,p,u,n[m+8],20,1163531501),u=v(u,l,d,p,n[m+13],5,-1444681467),p=v(p,u,l,d,n[m+2],9,-51403784),d=v(d,p,u,l,n[m+7],14,1735328473),u=g(u,l=v(l,d,p,u,n[m+12],20,-1926607734),d,p,n[m+5],4,-378558),p=g(p,u,l,d,n[m+8],11,-2022574463),d=g(d,p,u,l,n[m+11],16,1839030562),l=g(l,d,p,u,n[m+14],23,-35309556),u=g(u,l,d,p,n[m+1],4,-1530992060),p=g(p,u,l,d,n[m+4],11,1272893353),d=g(d,p,u,l,n[m+7],16,-155497632),l=g(l,d,p,u,n[m+10],23,-1094730640),u=g(u,l,d,p,n[m+13],4,681279174),p=g(p,u,l,d,n[m+0],11,-358537222),d=g(d,p,u,l,n[m+3],16,-722521979),l=g(l,d,p,u,n[m+6],23,76029189),u=g(u,l,d,p,n[m+9],4,-640364487),p=g(p,u,l,d,n[m+12],11,-421815835),d=g(d,p,u,l,n[m+15],16,530742520),u=b(u,l=g(l,d,p,u,n[m+2],23,-995338651),d,p,n[m+0],6,-198630844),p=b(p,u,l,d,n[m+7],10,1126891415),d=b(d,p,u,l,n[m+14],15,-1416354905),l=b(l,d,p,u,n[m+5],21,-57434055),u=b(u,l,d,p,n[m+12],6,1700485571),p=b(p,u,l,d,n[m+3],10,-1894986606),d=b(d,p,u,l,n[m+10],15,-1051523),l=b(l,d,p,u,n[m+1],21,-2054922799),u=b(u,l,d,p,n[m+8],6,1873313359),p=b(p,u,l,d,n[m+15],10,-30611744),d=b(d,p,u,l,n[m+6],15,-1560198380),l=b(l,d,p,u,n[m+13],21,1309151649),u=b(u,l,d,p,n[m+4],6,-145523070),p=b(p,u,l,d,n[m+11],10,-1120210379),d=b(d,p,u,l,n[m+2],15,718787259),l=b(l,d,p,u,n[m+9],21,-343485551),u=u+h>>>0,l=l+w>>>0,d=d+y>>>0,p=p+T>>>0}return r.endian([u,l,d,p])})._ff=function(e,t,n,r,i,a,o){var s=e+(t&n|~t&r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._gg=function(e,t,n,r,i,a,o){var s=e+(t&r|n&~r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._hh=function(e,t,n,r,i,a,o){var s=e+(t^n^r)+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._ii=function(e,t,n,r,i,a,o){var s=e+(n^(t|~r))+(i>>>0)+o;return(s<<a|s>>>32-a)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},2:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Perfume:()=>ze,incrementUjNavigation:()=>Le,markStep:()=>Re,markStepOnce:()=>qe});var r,i,a={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{},enableNavigationTracking:!0},o=window,s=o.console,c=o.navigator,u=o.performance,l=function(){return c.deviceMemory},d=function(){return c.hardwareConcurrency},p="mark.",m=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},f="4g",v=!1,g={},b={value:0},h={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},w={value:0},y={value:0},T={},k={isHidden:!1,didChange:!1},_=function(){k.isHidden=!1,document.hidden&&(k.isHidden=document.hidden,k.didChange=!0)},S=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){s.warn("Perfume.js:",e)}return null},E=function(){return!!(d()&&d()<=4)||!!(l()&&l()<=4)},x=function(e,t){switch(e){case"slow-2g":case"2g":case"3g":return!0;default:return E()||t}},O=function(e){return parseFloat(e.toFixed(4))},j=function(e){return"number"!=typeof e?null:O(e/Math.pow(1024,2))},N=function(e,t,n,r,i){var s,u=function(){a.analyticsTracker&&(k.isHidden&&!["CLS","INP"].includes(e)||a.analyticsTracker({attribution:r,metricName:e,data:t,navigatorInformation:c?{deviceMemory:l()||0,hardwareConcurrency:d()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:E(),isLowEndExperience:x(f,v)}:{},rating:n,navigationType:i}))};["CLS","INP"].includes(e)?u():(s=u,"requestIdleCallback"in o?o.requestIdleCallback(s,{timeout:3e3}):s())},I=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<b.value)){var t=e.duration-50;t>0&&(w.value+=t,y.value+=t)}}))};!function(e){e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable"}(r||(r={}));var P,M,B,C,D,A=((i={})[r.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},i[r.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},i[r.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},i[r.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},i[r.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4},i),L={RT:[100,200],TBT:[200,600],NTBT:[200,600]},U=function(e,t){return L[e]?t<=L[e][0]?"good":t<=L[e][1]?"needsImprovement":"poor":null},R=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=O(t[e]))})),N(e,t,null,n||{})},q=function(e){var t=e.attribution,n=e.name,r=e.rating,i=e.value,o=e.navigationType;"FCP"===n&&(b.value=i),["FCP","LCP"].includes(n)&&!T[0]&&(T[0]=S("longtask",I)),"FID"===n&&setTimeout((function(){k.didChange||(q({attribution:t,name:"TBT",rating:U("TBT",w.value),value:w.value,navigationType:o}),R("dataConsumption",h.value))}),1e4);var s=O(i);s<=a.maxTime&&s>=0&&N(n,s,r,t,o)},F=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},z=function(e){if("loading"===document.readyState)return"loading";var t=F();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},K=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},$=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,i=r.id?"#"+r.id:K(r)+(r.className&&r.className.length?"."+r.className.replace(/\\s+/g,"."):"");if(n.length+i.length>(t||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;e=r.parentNode}}catch(e){}return n},Q=-1,W=function(){return Q},H=function(e){addEventListener("pageshow",(function(t){t.persisted&&(Q=t.timeStamp,e(t))}),!0)},V=function(){var e=F();return e&&e.activationStart||0},J=function(e,t){var n=F(),r="navigate";return W()>=0?r="back-forward-cache":n&&(r=document.prerendering||V()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},X=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Z=function(e,t,n,r){var i,a;return function(o){t.value>=0&&(o||r)&&((a=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=a,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},Y=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},ee=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},te=-1,ne=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},re=function(e){"hidden"===document.visibilityState&&te>-1&&(te="visibilitychange"===e.type?e.timeStamp:0,ae())},ie=function(){addEventListener("visibilitychange",re,!0),addEventListener("prerenderingchange",re,!0)},ae=function(){removeEventListener("visibilitychange",re,!0),removeEventListener("prerenderingchange",re,!0)},oe=function(){return te<0&&(te=ne(),ie(),H((function(){setTimeout((function(){te=ne(),ie()}),0)}))),{get firstHiddenTime(){return te}}},se=function(e,t){t=t||{},ee((function(){var n,r=[1800,3e3],i=oe(),a=J("FCP"),o=X("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-V(),0),a.entries.push(e),n(!0)))}))}));o&&(n=Z(e,a,r,t.reportAllChanges),H((function(i){a=J("FCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,n(!0)}))})))}))},ce={passive:!0,capture:!0},ue=new Date,le=function(e,t){P||(P=t,M=e,B=new Date,me(removeEventListener),de())},de=function(){if(M>=0&&M<B-ue){var e={entryType:"first-input",name:P.type,target:P.target,cancelable:P.cancelable,startTime:P.timeStamp,processingStart:P.timeStamp+M};C.forEach((function(t){t(e)})),C=[]}},pe=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){le(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,ce),removeEventListener("pointercancel",r,ce)};addEventListener("pointerup",n,ce),addEventListener("pointercancel",r,ce)}(t,e):le(t,e)}},me=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,pe,ce)}))},fe=0,ve=1/0,ge=0,be=function(e){e.forEach((function(e){e.interactionId&&(ve=Math.min(ve,e.interactionId),ge=Math.max(ge,e.interactionId),fe=ge?(ge-ve)/7+1:0)}))},he=function(){return D?fe:performance.interactionCount||0},we=0,ye=function(){return he()-we},Te=[],ke={},_e=function(e){var t=Te[Te.length-1],n=ke[e.interactionId];if(n||Te.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};ke[r.id]=r,Te.push(r)}Te.sort((function(e,t){return t.latency-e.latency})),Te.splice(10).forEach((function(e){delete ke[e.id]}))}},Se={},Ee=function e(t){document.prerendering?ee((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},xe=function(e,t){t=t||{};var n=[800,1800],r=J("TTFB"),i=Z(e,r,n,t.reportAllChanges);Ee((function(){var a=F();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;r.value=Math.max(o-V(),0),r.entries=[a],i(!0),H((function(){r=J("TTFB",0),(i=Z(e,r,n,t.reportAllChanges))(!0)}))}}))},Oe=function(e){e.forEach((function(e){e.identifier&&q({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},je=function(e){e.forEach((function(e){if(a.isResourceTiming&&R("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;h.value[e.initiatorType]+=t,h.value.total+=t}}))},Ne=function(){!function(e,t){xe((function(e){!function(e){if(e.entries.length){var t=e.entries[0],n=t.activationStart||0,r=Math.max(t.domainLookupStart-n,0),i=Math.max(t.connectStart-n,0),a=Math.max(t.requestStart-n,0);e.attribution={waitingTime:r,dnsTime:i-r,connectionTime:a-i,requestTime:e.value-a,navigationEntry:t}}else e.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),function(e){e.value>0&&q(e)}(e)}),t)}(0,a.reportOptions.ttfb),function(e,t){!function(e,t){t=t||{},ee((function(){var e,n=[.1,.25],r=J("CLS"),i=-1,a=0,o=[],s=function(e){i>-1&&function(e){!function(e){if(e.entries.length){var t=e.entries.reduce((function(e,t){return e&&e.value>t.value?e:t}));if(t&&t.sources&&t.sources.length){var n=(r=t.sources).find((function(e){return e.node&&1===e.node.nodeType}))||r[0];if(n)return void(e.attribution={largestShiftTarget:$(n.node),largestShiftTime:t.startTime,largestShiftValue:t.value,largestShiftSource:n,largestShiftEntry:t,loadState:z(t.startTime)})}}var r;e.attribution={}}(e),function(e){q(e)}(e)}(e)},c=function(t){t.forEach((function(t){if(!t.hadRecentInput){var n=o[0],i=o[o.length-1];a&&t.startTime-i.startTime<1e3&&t.startTime-n.startTime<5e3?(a+=t.value,o.push(t)):(a=t.value,o=[t]),a>r.value&&(r.value=a,r.entries=o,e())}}))},u=X("layout-shift",c);u&&(e=Z(s,r,n,t.reportAllChanges),se((function(t){i=t.value,r.value<0&&(r.value=0,e())})),G((function(){c(u.takeRecords()),e(!0)})),H((function(){a=0,i=-1,r=J("CLS",0),e=Z(s,r,n,t.reportAllChanges),Y((function(){return e()}))})))}))}(0,t)}(0,a.reportOptions.cls),function(e,t){se((function(e){!function(e){if(e.entries.length){var t=F(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,i=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:i,firstByteToFCP:e.value-i,loadState:z(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:z(W())}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[100,300],i=oe(),a=J("FID"),o=function(e){e.startTime<i.firstHiddenTime&&(a.value=e.processingStart-e.startTime,a.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=X("first-input",s);n=Z(e,a,r,t.reportAllChanges),c&&G((function(){s(c.takeRecords()),c.disconnect()}),!0),c&&H((function(){var i;a=J("FID"),n=Z(e,a,r,t.reportAllChanges),C=[],M=-1,P=null,me(addEventListener),i=o,C.push(i),de()}))}))}((function(e){!function(e){var t=e.entries[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.fid),function(e,t){!function(e,t){t=t||{},ee((function(){var n,r=[2500,4e3],i=oe(),a=J("LCP"),o=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-V(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[t],n())}},s=X("largest-contentful-paint",o);if(s){n=Z(e,a,r,t.reportAllChanges);var c=function(){Se[a.id]||(o(s.takeRecords()),s.disconnect(),Se[a.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,c,{once:!0,capture:!0})})),G(c,!0),H((function(i){a=J("LCP"),n=Z(e,a,r,t.reportAllChanges),Y((function(){a.value=performance.now()-i.timeStamp,Se[a.id]=!0,n(!0)}))}))}}))}((function(e){!function(e){if(e.entries.length){var t=F();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],i=r.url&&performance.getEntriesByType("resource").filter((function(e){return e.name===r.url}))[0],a=Math.max(0,t.responseStart-n),o=Math.max(a,i?(i.requestStart||i.startTime)-n:0),s=Math.max(o,i?i.responseEnd-n:0),c=Math.max(s,r?r.startTime-n:0),u={element:$(r.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:s-o,elementRenderDelay:c-s,navigationEntry:t,lcpEntry:r};return r.url&&(u.url=r.url),i&&(u.lcpResourceEntry=i),void(e.attribution=u)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}}(e),function(e){q(e)}(e)}),t)}(0,a.reportOptions.lcp),function(e,t){!function(e,t){t=t||{},ee((function(){var n=[200,500];"interactionCount"in performance||D||(D=X("event",be,{type:"event",buffered:!0,durationThreshold:0}));var r,i=J("INP"),a=function(e){e.forEach((function(e){e.interactionId&&_e(e),"first-input"===e.entryType&&!Te.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&_e(e)}));var t,n=(t=Math.min(Te.length-1,Math.floor(ye()/50)),Te[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=X("event",a,{durationThreshold:t.durationThreshold||40});r=Z(e,i,n,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),G((function(){a(o.takeRecords()),i.value<0&&ye()>0&&(i.value=0,i.entries=[]),r(!0)})),H((function(){Te=[],we=he(),i=J("INP"),r=Z(e,i,n,t.reportAllChanges)})))}))}((function(t){!function(e){if(e.entries.length){var t=e.entries.sort((function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)}))[0];e.attribution={eventTarget:$(t.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:z(t.startTime)}}else e.attribution={}}(t),e(t)}),t)}((function(e){return q(e)}),a.reportOptions.inp),a.isResourceTiming&&S("resource",je),a.isElementTiming&&S("element",Oe)},Ie=function(e){var t="usageDetails"in e?e.usageDetails:{};R("storageEstimate",{quota:j(e.quota),usage:j(e.usage),caches:j(t.caches),indexedDB:j(t.indexedDB),serviceWorker:j(t.serviceWorkerRegistrations)})},Pe={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},Me=function(e){delete Pe.active[e]},Be=function(){return Pe.navigationSteps},Ce=function(e){var t;return null!==(t=Be()[e])&&void 0!==t?t:{}},De=function(e,t,n){var r="step."+e,i=u.getEntriesByName(p+t).length>0;if(u.getEntriesByName(p+n).length>0&&a.steps){var o=A[a.steps[e].threshold],s=o.maxOutlierThreshold,c=o.vitalsThresholds;if(i){var l=u.measure(r,p+t,p+n),d=l.duration;if(d<=s){var m=function(e,t){return e<=t[0]?"good":e<=t[1]?"needsImprovement":"poor"}(d,c);d>=0&&(N("userJourneyStep",d,m,{stepName:e},void 0),u.measure("step.".concat(e,"_vitals_").concat(m),{start:l.startTime+l.duration,end:l.startTime+l.duration,detail:{type:"stepVital",duration:d}}))}}}},Ae=function(){var e=Be(),t=Pe.startMarkToStepsMap,n=Object.keys(e).length;if(0===n)return{};var r={},i=n-1,a=Ce(i);if(Object.keys(a).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))})),n>1){var o=Ce(i-1);Object.keys(o).forEach((function(e){var n,i=null!==(n=t[e])&&void 0!==n?n:[];Object.keys(i).forEach((function(e){r[e]=!0}))}))}return r},Le=function(){var e,t=Object.keys(Pe.navigationSteps).length;Pe.navigationSteps[t]={};var n=Ae();null===(e=a.onMarkStep)||void 0===e||e.call(a,"",Object.keys(n))},Ue=function(e){var t,n,r,i,o,s,c;if(Pe.finalMarkToStepsMap[e]){!function(e){var t=Pe.navigationSteps,n=Pe.finalMarkToStepsMap,r=Object.keys(t).length;if(0!==r){var i=r-1,a=Ce(i);if(a&&n[e]){var o=n[e];o&&Object.keys(o).forEach((function(e){if(a[e]){var n=Ce(i)||{};n[e]=!1,t[i]=n}if(r>1){var o=i-1,s=Ce(o);s[e]&&(s[e]=!1,t[o]=s)}}))}}}(e);var u=Pe.finalMarkToStepsMap[e];Object.keys(u).forEach((function(t){var n=u[t];n.forEach(Me),Promise.all(n.map((function(n){return function(e,t,n,r){return new(n||(n=Promise))((function(e,t){function i(e){try{o(r.next(e))}catch(e){t(e)}}function a(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}o((r=r.apply(undefined,[])).next())}))}(0,0,void 0,(function(){return function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(r){switch(r.label){case 0:return[4,De(n,t,e)];case 1:return r.sent(),[2]}}))}))}))).catch((function(){}))}))}else r=e,i=Pe.navigationSteps,o=Object.keys(i).length,(c=Ce(s=(o>0?o:1)-1)||[])[r]=!0,i[s]=c,function(e){var t,n=null!==(t=Pe.startMarkToStepsMap[e])&&void 0!==t?t:[];Object.keys(n).forEach((function(e){Pe.active[e]||(Pe.active[e]=!0)}))}(e);if(a.enableNavigationTracking){var l=Ae();null===(t=a.onMarkStep)||void 0===t||t.call(a,e,Object.keys(l))}else null===(n=a.onMarkStep)||void 0===n||n.call(a,e,Object.keys(Pe.active))},Re=function(e){u.mark(p+e),Ue(e)},qe=function(e){0===u.getEntriesByName(p+e).length&&(u.mark(p+e),Ue(e))},Fe=0,ze=function(){function e(e){if(void 0===e&&(e={}),this.v="9.0.0-rc.3",a.analyticsTracker=e.analyticsTracker,a.isResourceTiming=!!e.resourceTiming,a.isElementTiming=!!e.elementTiming,a.maxTime=e.maxMeasureTime||a.maxTime,a.reportOptions=e.reportOptions||a.reportOptions,a.steps=e.steps,a.onMarkStep=e.onMarkStep,a.enableNavigationTracking=e.enableNavigationTracking,m()){"PerformanceObserver"in o&&Ne(),void 0!==document.hidden&&document.addEventListener("visibilitychange",_);var t=function(){if(!m())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart,redirectTime:e.redirectEnd-e.redirectStart}}();R("navigationTiming",t),t.redirectTime&&q({attribution:{},name:"RT",rating:U("RT",t.redirectTime),value:t.redirectTime}),R("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(f=e.effectiveType,v=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(Ie),a.steps&&a.steps&&(Pe.startMarkToStepsMap={},Pe.finalMarkToStepsMap={},Pe.active={},Pe.navigationSteps={},Object.entries(a.steps).forEach((function(e){var t,n,r=e[0],i=e[1].marks,a=i[0],o=i[1],s=null!==(n=Pe.startMarkToStepsMap[a])&&void 0!==n?n:{};if(s[r]=!0,Pe.startMarkToStepsMap[a]=s,Pe.finalMarkToStepsMap[o]){var c=Pe.finalMarkToStepsMap[o][a]||[];c.push(r),Pe.finalMarkToStepsMap[o][a]=c}else Pe.finalMarkToStepsMap[o]=((t={})[a]=[r],t)})))}}return e.prototype.start=function(e){m()&&!g[e]&&(g[e]=!0,u.mark("mark_".concat(e,"_start")))},e.prototype.end=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n=!0),m()&&g[e]){u.mark("mark_".concat(e,"_end")),delete g[e];var r=function(e){u.measure(e,"mark_".concat(e,"_start"),"mark_".concat(e,"_end"));var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e);n&&R(e,O(r),t)}},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete g[e],u.clearMarks&&(u.clearMarks("mark_".concat(e,"_start")),u.clearMarks("mark_".concat(e,"_end")))},e.prototype.markNTBT=function(){var e=this;this.start("ntbt"),y.value=0,clearTimeout(Fe),Fe=setTimeout((function(){e.end("ntbt",{},!1),q({attribution:{},name:"NTBT",rating:U("NTBT",y.value),value:y.value}),y.value=0}),2e3)},e}()},426:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,i={};function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function o(){}function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},o.prototype=a.prototype;var c=s.prototype=new o;c.constructor=s,r(c,a.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;var u={current:null};t.useCallback=function(e,t){return u.current.useCallback(e,t)},t.useEffect=function(e,t){return u.current.useEffect(e,t)},t.useRef=function(e){return u.current.useRef(e)}},784:(e,t,n)=>{"use strict";e.exports=n(426)},353:function(e,t,n){var r;!function(i,a){"use strict";var o="function",s="undefined",c="object",u="string",l="major",d="model",p="name",m="type",f="vendor",v="version",g="architecture",b="console",h="mobile",w="tablet",y="smarttv",T="wearable",k="embedded",_="Amazon",S="Apple",E="ASUS",x="BlackBerry",O="Browser",j="Chrome",N="Firefox",I="Google",P="Huawei",M="LG",B="Microsoft",C="Motorola",D="Opera",A="Samsung",L="Sharp",U="Sony",R="Xiaomi",q="Zebra",F="Facebook",z="Chromium OS",K="Mac OS",$=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},Q=function(e,t){return typeof e===u&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===u)return e=e.replace(/^\\s\\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var n,r,i,s,u,l,d=0;d<t.length&&!u;){var p=t[d],m=t[d+1];for(n=r=0;n<p.length&&!u&&p[n];)if(u=p[n++].exec(e))for(i=0;i<m.length;i++)l=u[++r],typeof(s=m[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):a:this[s[0]]=l?s[1].call(this,l,s[2]):a:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):a):this[s]=l||a;d+=2}},J=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(Q(t[n][r],e))return"?"===n?a:n}else if(Q(t[n],e))return"?"===n?a:n;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[v,[p,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[v,[p,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[p,v],[/opios[\\/ ]+([\\w\\.]+)/i],[v,[p,D+" Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[v,[p,D]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\\/([-\\w\\.]+)/i,/(heytap|ovi)browser\\/([\\d\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[p,v],[/(?:\\buc??browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[v,[p,"UC"+O]],[/microm.+\\bqbcore\\/([\\w\\.]+)/i,/\\bqbcore\\/([\\w\\.]+).+microm/i],[v,[p,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[v,[p,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[v,[p,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[v,[p,"IE"]],[/ya(?:search)?browser\\/([\\w\\.]+)/i],[v,[p,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],v],[/\\bfocus\\/([\\w\\.]+)/i],[v,[p,N+" Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[v,[p,D+" Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[v,[p,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[v,[p,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[v,[p,D+" Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[v,[p,"MIUI "+O]],[/fxios\\/([-\\w\\.]+)/i],[v,[p,N]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\\/([\\w\\.]+)/i],[[p,/(.+)/,"$1 "+O],v],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[p,/_/g," "],v],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[p,v],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i,/\\[(linkedin)app\\]/i],[p],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[p,F],v],[/(kakao(?:talk|story))[\\/ ]([\\w\\.]+)/i,/(naver)\\(.*?(\\d+\\.[\\w\\.]+).*\\)/i,/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[p,v],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[v,[p,"GSA"]],[/musical_ly(?:.+app_?version\\/|_)([\\w\\.]+)/i],[v,[p,"TikTok"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[v,[p,j+" Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[p,j+" WebView"],v],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[v,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[p,v],[/version\\/([\\w\\.\\,]+) .*mobile\\/\\w+ (safari)/i],[v,[p,"Mobile Safari"]],[/version\\/([\\w(\\.|\\,)]+) .*(mobile ?safari|safari)/i],[v,p],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[p,[v,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[p,v],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[p,"Netscape"],v],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[v,[p,N+" Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i,/panasonic;(viera)/i],[p,v],[/(cobalt)\\/([\\w\\.]+)/i],[p,[v,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,W]],[/((?:i[346]|x)86)[;\\)]/i],[[g,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[g,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[g,/ower/,"",W]],[/(sun4\\w)[;\\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[g,W]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[ptx]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[f,A],[m,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|sc[g-]?[\\d]+a?|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[d,[f,A],[m,h]],[/(?:\\/|\\()(ip(?:hone|od)[\\w, ]*)(?:\\/|;)/i],[d,[f,S],[m,h]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[d,[f,S],[m,w]],[/(macintosh);/i],[d,[f,S]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[d,[f,L],[m,h]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[d,[f,P],[m,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}e?-[atu]?[ln][\\dx][012359c][adn]?)\\b(?!.+d\\/s)/i],[d,[f,P],[m,h]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,h]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[d,/_/g," "],[f,R],[m,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007|a101op)\\b/i],[d,[f,"OPPO"],[m,h]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[d,[f,"Vivo"],[m,h]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[d,[f,"Realme"],[m,h]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[d,[f,C],[m,h]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[d,[f,C],[m,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[f,M],[m,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[d,[f,M],[m,h]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[d,[f,"Lenovo"],[m,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[d,/_/g," "],[f,"Nokia"],[m,h]],[/(pixel c)\\b/i],[d,[f,I],[m,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[d,[f,I],[m,h]],[/droid.+ (a?\\d[0-2]{2}so|[c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[d,[f,U],[m,h]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[d,"Xperia Tablet"],[f,U],[m,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[d,[f,"OnePlus"],[m,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[d,[f,_],[m,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[d,/(.+)/g,"Fire Phone $1"],[f,_],[m,h]],[/(playbook);[-\\w\\),; ]+(rim)/i],[d,f,[m,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[d,[f,x],[m,h]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[d,[f,E],[m,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[d,[f,E],[m,h]],[/(nexus 9)/i],[d,[f,"HTC"],[m,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\\.))|sony(?!-bra))[-_ ]?([-\\w]*)/i],[f,[d,/_/g," "],[m,h]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[d,[f,"Acer"],[m,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[d,[f,"Meizu"],[m,h]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[f,d,[m,h]],[/(kobo)\\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[f,d,[m,w]],[/(surface duo)/i],[d,[f,B],[m,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[d,[f,"Fairphone"],[m,h]],[/(u304aa)/i],[d,[f,"AT&T"],[m,h]],[/\\bsie-(\\w*)/i],[d,[f,"Siemens"],[m,h]],[/\\b(rct\\w+) b/i],[d,[f,"RCA"],[m,w]],[/\\b(venue[\\d ]{2,7}) b/i],[d,[f,"Dell"],[m,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[d,[f,"Verizon"],[m,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[d,[f,"Barnes & Noble"],[m,w]],[/\\b(tm\\d{3}\\w+) b/i],[d,[f,"NuVision"],[m,w]],[/\\b(k88) b/i],[d,[f,"ZTE"],[m,w]],[/\\b(nx\\d{3}j) b/i],[d,[f,"ZTE"],[m,h]],[/\\b(gen\\d{3}) b.+49h/i],[d,[f,"Swiss"],[m,h]],[/\\b(zur\\d{3}) b/i],[d,[f,"Swiss"],[m,w]],[/\\b((zeki)?tb.*\\b) b/i],[d,[f,"Zeki"],[m,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[f,"Dragon Touch"],d,[m,w]],[/\\b(ns-?\\w{0,9}) b/i],[d,[f,"Insignia"],[m,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[d,[f,"NextBook"],[m,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],d,[m,h]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[f,"LvTel"],d,[m,h]],[/\\b(ph-1) /i],[d,[f,"Essential"],[m,h]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[d,[f,"Envizen"],[m,w]],[/\\b(trio[-\\w\\. ]+) b/i],[d,[f,"MachSpeed"],[m,w]],[/\\btu_(1491) b/i],[d,[f,"Rotor"],[m,w]],[/(shield[\\w ]+) b/i],[d,[f,"Nvidia"],[m,w]],[/(sprint) (\\w+)/i],[f,d,[m,h]],[/(kin\\.[onetw]{3})/i],[[d,/\\./g," "],[f,B],[m,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[d,[f,q],[m,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[d,[f,q],[m,h]],[/smart-tv.+(samsung)/i],[f,[m,y]],[/hbbtv.+maple;(\\d+)/i],[[d,/^/,"SmartTV"],[f,A],[m,y]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[f,M],[m,y]],[/(apple) ?tv/i],[f,[d,S+" TV"],[m,y]],[/crkey/i],[[d,j+"cast"],[f,I],[m,y]],[/droid.+aft(\\w)( bui|\\))/i],[d,[f,_],[m,y]],[/\\(dtv[\\);].+(aquos)/i,/(aquos-tv[\\w ]+)\\)/i],[d,[f,L],[m,y]],[/(bravia[\\w ]+)( bui|\\))/i],[d,[f,U],[m,y]],[/(mitv-\\w{5}) bui/i],[d,[f,R],[m,y]],[/Hbbtv.*(technisat) (.*);/i],[f,d,[m,y]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w\\+ ]*; *([\\w\\d][^;]*);([^;]*)/i],[[f,H],[d,H],[m,y]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[m,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,d,[m,b]],[/droid.+; (shield) bui/i],[d,[f,"Nvidia"],[m,b]],[/(playstation [345portablevi]+)/i],[d,[f,U],[m,b]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[d,[f,B],[m,b]],[/((pebble))app/i],[f,d,[m,T]],[/(watch)(?: ?os[,\\/]|\\d,\\d\\/)[\\d\\.]+/i],[d,[f,S],[m,T]],[/droid.+; (glass) \\d/i],[d,[f,I],[m,T]],[/droid.+; (wt63?0{2,3})\\)/i],[d,[f,q],[m,T]],[/(quest( 2| pro)?)/i],[d,[f,F],[m,T]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[f,[m,k]],[/(aeobc)\\b/i],[d,[f,_],[m,k]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[d,[m,h]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[d,[m,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[m,w]],[/(phone|mobile(?:[;\\/]| [ \\w\\/\\.]*safari)|pda(?=.+windows ce))/i],[[m,h]],[/(android[-\\w\\. ]{0,9});.+buil/i],[d,[f,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[v,[p,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[v,[p,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i,/\\b(libweb)/i],[p,v],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[v,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,v],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[p,[v,J,X]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[p,"Windows"],[v,J,X]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/ios;fbsv\\/([\\d\\.]+)/i,/cfnetwork\\/.+darwin/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[p,K],[v,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86|harmonyos)/i],[v,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[p,v],[/\\(bb(10);/i],[v,[p,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[v,[p,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[v,[p,N+" OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[v,[p,"webOS"]],[/watch(?: ?os[,\\/]|\\d,\\d\\/)([\\d\\.]+)/i],[v,[p,"watchOS"]],[/crkey\\/([\\d\\.]+)/i],[v,[p,j+"cast"]],[/(cros) [\\w]+(?:\\)| ([\\w\\.]+)\\b)/i],[[p,z],v],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\\/(\\d+\\.[\\w\\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[p,v],[/(sunos) ?([\\w\\.\\d]*)/i],[[p,"Solaris"],v],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\\w\\.]*)/i],[p,v]]},Z=function(e,t){if(typeof e===c&&(t=e,e=a),!(this instanceof Z))return new Z(e,t).getResult();var n=typeof i!==s&&i.navigator?i.navigator:a,r=e||(n&&n.userAgent?n.userAgent:""),b=n&&n.userAgentData?n.userAgentData:a,y=t?function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n}(G,t):G,T=n&&n.userAgent==r;return this.getBrowser=function(){var e,t={};return t[p]=a,t[v]=a,V.call(t,r,y.browser),t[l]=typeof(e=t[v])===u?e.replace(/[^\\d\\.]/g,"").split(".")[0]:a,T&&n&&n.brave&&typeof n.brave.isBrave==o&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[g]=a,V.call(e,r,y.cpu),e},this.getDevice=function(){var e={};return e[f]=a,e[d]=a,e[m]=a,V.call(e,r,y.device),T&&!e[m]&&b&&b.mobile&&(e[m]=h),T&&"Macintosh"==e[d]&&n&&typeof n.standalone!==s&&n.maxTouchPoints&&n.maxTouchPoints>2&&(e[d]="iPad",e[m]=w),e},this.getEngine=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.engine),e},this.getOS=function(){var e={};return e[p]=a,e[v]=a,V.call(e,r,y.os),T&&!e[p]&&b&&"Unknown"!=b.platform&&(e[p]=b.platform.replace(/chrome os/i,z).replace(/macos/i,K)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===u&&e.length>350?H(e,350):e,this},this.setUA(r),this};Z.VERSION="1.0.35",Z.BROWSER=$([p,v,l]),Z.CPU=$([g]),Z.DEVICE=$([d,f,m,b,h,y,w,T,k]),Z.ENGINE=Z.OS=$([p,v]),typeof t!==s?(e.exports&&(t=e.exports=Z),t.UAParser=Z):n.amdO?(r=function(){return Z}.call(t,n,t,e))===a||(e.exports=r):typeof i!==s&&(i.UAParser=Z);var Y=typeof i!==s&&(i.jQuery||i.Zepto);if(Y&&!Y.ua){var ee=new Z;Y.ua=ee.getResult(),Y.ua.get=function(){return ee.getUA()},Y.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var n in t)Y.ua[n]=t[n]}}}("object"==typeof window?window:this)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.amdO={},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{ActionType:()=>f,AmplitudePlatformName:()=>g,AnalyticsEventImportance:()=>l,AnalyticsQueries:()=>e,AuthStatus:()=>b,ComponentType:()=>m,IThresholdTier:()=>Jt,MetricType:()=>d,PlatformName:()=>v,SessionActions:()=>h,SessionAutomatedEvents:()=>w,SessionRank:()=>y,SubjectType:()=>p,UserTypeCommerce:()=>c,UserTypeInsto:()=>i,UserTypeRetail:()=>t,UserTypeRetailBusinessBanking:()=>s,UserTypeRetailEmployeeInternal:()=>a,UserTypeRetailEmployeePersonal:()=>o,UserTypeWallet:()=>u,automatedEvents:()=>xn,automatedMappingConfig:()=>In,clearMarkEntry:()=>Vn,clearPerformanceMarkEntries:()=>Xn,config:()=>A,createEventConfig:()=>On,createNewSpan:()=>Ln,createNewTrace:()=>Un,device:()=>W,endPerfMark:()=>Jn,exposeExperiment:()=>wn,flushQueue:()=>or,generateUUID:()=>V,getAnalyticsHeaders:()=>sr,getReferrerData:()=>le,getTracingHeaders:()=>An,getTracingId:()=>Dn,getUrlHostname:()=>pe,getUrlParams:()=>me,getUrlPathname:()=>fe,getUserContext:()=>ar,identify:()=>Tn,identifyFlow:()=>xe,identity:()=>H,identityFlow:()=>Se,incrementUjNavigation:()=>an,init:()=>yn,initNextJsTrackPageview:()=>_n,initTrackPageview:()=>kn,isEventKeyFormatValid:()=>we,isSessionEnded:()=>pt,location:()=>re,logEvent:()=>$t,logMetric:()=>Ht,logPageView:()=>on,logTrace:()=>Rn,markNTBT:()=>tn,markStep:()=>nn,markStepOnce:()=>rn,onVisibilityChange:()=>ln,optIn:()=>En,optOut:()=>Sn,perfMark:()=>Wn,persistentData:()=>oe,postMessage:()=>K,recordSessionDuration:()=>pn,removeFromIdentifyFlow:()=>Ee,savePersistentData:()=>st,sendScheduledEvents:()=>Bt,setBreadcrumbs:()=>ie,setConfig:()=>U,setLocation:()=>ae,setPagePath:()=>ve,setPageview:()=>Kt,setPersistentData:()=>se,setSessionStart:()=>dt,setTime:()=>Ue,startPerfMark:()=>Hn,timeStone:()=>Le,useEventLogger:()=>Yn,useLogEventOnMount:()=>tr,usePerformanceMarks:()=>rr});let e=function(e){return e.fbclid="fbclid",e.gclid="gclid",e.msclkid="msclkid",e.ptclid="ptclid",e.ttclid="ttclid",e.utm_source="utm_source",e.utm_medium="utm_medium",e.utm_campaign="utm_campaign",e.utm_term="utm_term",e.utm_content="utm_content",e}({});const t=0,i=1,a=2,o=3,s=4,c=5,u=6;let l=function(e){return e.low="low",e.high="high",e}({}),d=function(e){return e.count="count",e.rate="rate",e.gauge="gauge",e.distribution="distribution",e.histogram="histogram",e}({}),p=function(e){return e.commerce_merchant="commerce_merchant",e.device="device",e.edp_fingerprint_id="edp_fingerprint_id",e.nft_user="nft_user",e.user="user",e.wallet_user="wallet_user",e.uuid="user_uuid",e}({}),m=function(e){return e.unknown="unknown",e.banner="banner",e.button="button",e.card="card",e.chart="chart",e.content_script="content_script",e.dropdown="dropdown",e.link="link",e.page="page",e.modal="modal",e.table="table",e.search_bar="search_bar",e.service_worker="service_worker",e.text="text",e.text_input="text_input",e.tray="tray",e.checkbox="checkbox",e.icon="icon",e}({}),f=function(e){return e.unknown="unknown",e.blur="blur",e.click="click",e.change="change",e.dismiss="dismiss",e.focus="focus",e.hover="hover",e.select="select",e.measurement="measurement",e.move="move",e.process="process",e.render="render",e.scroll="scroll",e.view="view",e.search="search",e.keyPress="keyPress",e}({}),v=function(e){return e.unknown="unknown",e.web="web",e.android="android",e.ios="ios",e.mobile_web="mobile_web",e.tablet_web="tablet_web",e.server="server",e.windows="windows",e.macos="macos",e.extension="extension",e}({}),g=function(e){return e.web="Web",e.ios="iOS",e.android="Android",e}({}),b=function(e){return e[e.notLoggedIn=0]="notLoggedIn",e[e.loggedIn=1]="loggedIn",e}({}),h=function(e){return e.ac="ac",e.af="af",e.ah="ah",e.al="al",e.am="am",e.ar="ar",e.as="as",e}({}),w=function(e){return e.pv="pv",e}({}),y=function(e){return e.xs="xs",e.s="s",e.m="m",e.l="l",e.xl="xl",e.xxl="xxl",e}({});const T="https://analytics-service-dev.cbhq.net",k=3e5,_=5e3,S="analytics-db",E="experiment-exposure-db",x="Analytics SDK:",O=Object.values(e),j="pageview",N="session_duration",I={navigationTiming:{eventName:"perf_navigation_timing"},redirectTime:{eventName:"perf_redirect_time"},RT:{eventName:"perf_redirect_time"},TTFB:{eventName:"perf_time_to_first_byte"},networkInformation:{eventName:"perf_network_information"},storageEstimate:{eventName:"perf_storage_estimate"},FCP:{eventName:"perf_first_contentful_paint"},FID:{eventName:"perf_first_input_delay"},LCP:{eventName:"perf_largest_contentful_paint"},CLS:{eventName:"perf_cumulative_layout_shift"},TBT:{eventName:"perf_total_blocking_time"},NTBT:{eventName:"perf_navigation_total_blocking_time"},INP:{eventName:"perf_interact_to_next_paint"},ET:{eventName:"perf_element_timing"},userJourneyStep:{eventName:"perf_user_journey_step"}},P="1",M="web";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const C=/^(https?:\\/\\/)/;function D(e){return{eventsEndpoint:e+"/amp",metricsEndPoint:e+"/metrics",exposureEndpoint:e+"/track-exposures",tracesEndpoint:e+"/traces"}}const A=B({authCookie:"logged_in",amplitudeApiKey:"",batchEventsPeriod:_,batchEventsThreshold:30,batchMetricsPeriod:_,batchMetricsThreshold:30,batchTracesPeriod:_,batchTracesThreshold:30,headers:{},interactionManager:null,isAlwaysAuthed:!1,isProd:!1,isInternalApplication:!1,onError:(e,t)=>{console.error(x,e,t)},platform:v.unknown,projectName:"",ricTimeoutScheduleEvent:1e3,ricTimeoutSetDevice:500,showDebugLogging:!1,trackUserId:!1,version:null,apiEndpoint:T},D(T),{steps:{}}),L=[].reduce(((e,t)=>n=>e(t(n))),(e=>{if(!e.isProd)return e.isInternalApplication?(e.apiEndpoint="https://analytics-service-internal-dev.cbhq.net",B({},e,D(e.apiEndpoint))):e;const t=(e=>e.apiEndpoint?C.test(e.apiEndpoint)?e.apiEndpoint:`https://${e.apiEndpoint}`:e.isInternalApplication?"https://analytics-service-internal.cbhq.net":"https://as.coinbase.com")(e);return B({},e,{apiEndpoint:t},D(t))})),U=e=>{const{batchEventsThreshold:t,batchMetricsThreshold:n,batchTracesThreshold:r}=e,i=[t,n,r];for(const e of i)if((e||0)>30){console.warn("You are setting the threshhold for the batch limit to be greater than 30. This may cause request overload.");break}Object.assign(A,L(e))},R=[v.web,v.mobile_web,v.tablet_web];function q(){return"android"===A.platform}function F(){return"ios"===A.platform}function z(){return R.includes(A.platform)}function K(e){if(z()&&navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.controller)try{navigator.serviceWorker.controller.postMessage(e)}catch(e){e instanceof Error&&A.onError(e)}}var $=n(353),Q=n.n($);const W={amplitudeOSName:null,amplitudeOSVersion:null,amplitudeDeviceModel:null,amplitudePlatform:null,browserName:null,browserMajor:null,osName:null,userAgent:null,width:null,height:null},H={countryCode:null,deviceId:null,device_os:null,isOptOut:!1,languageCode:null,locale:null,jwt:null,session_lcc_id:null,userAgent:null,userId:null},V=e=>e?(e^16*Math.random()>>e/4).toString(16):"10000000-1000-4000-8000-100000000000".replace(/[018]/g,V),J=()=>A.isAlwaysAuthed||!!H.userId,X=()=>{const e={};return H.countryCode&&(e.country_code=H.countryCode),e},G=()=>{const{platform:e}=A;if(e===v.web)switch(!0){case window.matchMedia("(max-width: 560px)").matches:return v.mobile_web;case window.matchMedia("(max-width: 1024px, min-width: 561px)").matches:return v.tablet_web}return e},Z=()=>{var e,t,n,r,i;z()?("requestIdleCallback"in window?window.requestIdleCallback(ne,{timeout:A.ricTimeoutSetDevice}):ne(),W.amplitudePlatform=g.web,W.userAgent=(null==(e=window)||null==(e=e.navigator)?void 0:e.userAgent)||null,ee({height:null!=(t=null==(n=window)?void 0:n.innerHeight)?t:null,width:null!=(r=null==(i=window)?void 0:i.innerWidth)?r:null})):F()?(W.amplitudePlatform=g.ios,W.userAgent=H.userAgent,W.userAgent&&ne()):q()&&(W.userAgent=H.userAgent,W.amplitudePlatform=g.android,W.userAgent&&ne())},Y=e=>{Object.assign(H,e),z()&&K({identity:{isAuthed:!!H.userId,locale:H.locale||null}})},ee=e=>{W.height=e.height,W.width=e.width},te=()=>{U({platform:G()}),z()&&K({config:{platform:A.platform}})},ne=()=>{var e;performance.mark&&performance.mark("ua_parser_start");const t=new(Q())(null!=(e=W.userAgent)?e:"").getResult();W.browserName=t.browser.name||null,W.browserMajor=t.browser.major||null,W.osName=t.os.name||null,W.amplitudeOSName=W.browserName,W.amplitudeOSVersion=W.browserMajor,W.amplitudeDeviceModel=W.osName,K({device:{browserName:W.browserName,osName:W.osName}}),performance.mark&&(performance.mark("ua_parser_end"),performance.measure("ua_parser","ua_parser_start","ua_parser_end"))},re={breadcrumbs:[],initialUAAData:{},pageKey:"",pageKeyRegex:{},pagePath:"",prevPageKey:"",prevPagePath:""};function ie(e){Object.assign(re,{breadcrumbs:e})}function ae(e){Object.assign(re,e)}const oe={eventId:0,sequenceNumber:0,sessionId:0,lastEventTime:0,sessionStart:0,sessionUUID:null,userId:null,ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0};function se(e){Object.assign(oe,e)}function ce(){var e,t;return null!=(e=null==(t=document)?void 0:t.referrer)?e:""}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}const le=()=>{const e=ce();if(!e)return{};const t=new URL(e);return t.hostname===pe()?{}:{referrer:e,referring_domain:t.hostname}},de=()=>{const e=new URLSearchParams(me()),t={};return O.forEach((n=>{e.has(n)&&(t[n]=(e.get(n)||"").toLowerCase())})),t},pe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.hostname)||""},me=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.search)||""},fe=()=>{var e;return(null==(e=window)||null==(e=e.location)?void 0:e.pathname)||""},ve=()=>{const e=A.overrideWindowLocation?re.pagePath:fe()+me();e&&e!==re.pagePath&&(e!==re.pagePath&&ge(),re.pagePath=e,re.pageKeyRegex&&Object.keys(re.pageKeyRegex).some((e=>{if(re.pageKeyRegex[e].test(re.pagePath))return re.pageKey=e,!0})))},ge=()=>{if(z()){const e=ce();if(!re.prevPagePath&&e){const t=new URL(e);if(t.hostname===pe())return void(re.prevPagePath=t.pathname)}}re.prevPagePath=re.pagePath,re.prevPageKey=re.pageKey},be=e=>{z()&&Object.assign(e,z()?(Object.keys(re.initialUAAData).length>0||(new URLSearchParams(me()),re.initialUAAData=ue({},(()=>{const e={};return O.forEach((t=>{oe[t]&&(e[t]=oe[t])})),e})(),de(),le())),re.initialUAAData):re.initialUAAData)},he=/^[a-zd]+(_[a-zd]+)*$/;function we(e){return he.test(e)}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}const Te=["action","component_type","component_name","context","logging_id"],ke=["num_non_hardware_accounts","ujs"],_e="ujs_",Se={};function Ee(e){e.forEach((e=>{ke.includes(e)&&delete Se[e]}))}function xe(e){var t;const n=Object.entries(e).reduce(((e,t)=>{const[n,r]=t;return!Te.includes(n)&&ke.includes(n)?we(n)?ye({},e,{[n]:r}):(A.onError(new Error("IdentityFlow property names must have snake case format"),{[n]:r}),e):e}),{});null!=(t=n.ujs)&&t.length&&(n.ujs=n.ujs.map((e=>`${_e}${e}`))),Object.assign(Se,n)}function Oe(){return A.platform!==v.unknown||(A.onError(new Error("SDK platform not initialized")),!1)}const je={eventsQueue:[],eventsScheduled:!1,metricsQueue:[],metricsScheduled:!1,tracesQueue:[],tracesScheduled:!1};function Ne(e){Object.assign(je,e)}const Ie={ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0},Pe={ac:20,af:5,ah:1,al:1,am:0,ar:10,as:20},Me={pv:25},Be={xs:0,s:1,m:1,l:2,xl:2,xxl:2},Ce=e=>e<15?y.xs:e<60?y.s:e<240?y.m:e<960?y.l:e<3840?y.xl:y.xxl,De=e=>{Object.assign(Ie,e)};function Ae(){return(new Date).getTime()}const Le={timeStart:Ae(),timeOnPagePath:0,timeOnPageKey:0,prevTimeOnPagePath:0,prevTimeOnPageKey:0,sessionDuration:0,sessionEnd:0,sessionStart:0,prevSessionDuration:0};function Ue(e){Object.assign(Le,e)}const Re=(e,t)=>t.some((t=>e instanceof t));let qe,Fe;const ze=new WeakMap,Ke=new WeakMap,$e=new WeakMap,Qe=new WeakMap,We=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ke.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$e.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fe||(Fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Xe(this),e),Je(ze.get(this))}:function(...e){return Je(t.apply(Xe(this),e))}:function(e,...n){const r=t.call(Xe(this),e,...n);return $e.set(r,e.sort?e.sort():[e]),Je(r)}:(e instanceof IDBTransaction&&function(e){if(Ke.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ke.set(e,t)}(e),Re(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,He):e);var t}function Je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Je(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ze.set(t,e)})).catch((()=>{})),We.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=Ve(e);return t!==e&&(Qe.set(e,t),We.set(t,e)),t}const Xe=e=>We.get(e),Ge=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],Ye=new Map;function et(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return Ye.set(t,a),a}var tt;tt=He,He={...tt,get:(e,t,n)=>et(e,t)||tt.get(e,t,n),has:(e,t)=>!!et(e,t)||tt.has(e,t)};const nt={isReady:!1,idbKeyval:null};function rt(e){Object.assign(nt,e)}const it={},at=async e=>{if(!nt.idbKeyval)return Promise.resolve(null);try{return await nt.idbKeyval.get(e)}catch(e){return A.onError(new Error("IndexedDB:Get:InternalError")),Promise.resolve(null)}},ot=async(e,t)=>{if(nt.idbKeyval)try{await nt.idbKeyval.set(e,t)}catch(e){A.onError(new Error("IndexedDB:Set:InternalError"))}},st=()=>{"server"!==A.platform&&(se({sessionStart:Le.sessionStart,ac:Ie.ac,af:Ie.af,ah:Ie.ah,al:Ie.al,am:Ie.am,ar:Ie.ar,as:Ie.as,pv:Ie.pv}),H.userId&&se({userId:H.userId}),ot(S,oe))},ct="rgb(5,177,105)",ut=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`%c ${x}`,a=`color:${ct};font-size:11px;`,o=`Importance: ${r}`;console.group(i,a,t,o),n.forEach((e=>{e.event_type?console.log(e.event_type,e):console.log(e)})),console.groupEnd()},lt=e=>{const{metricName:t,data:n}=e,r=e.importance||l.low;if(!A.showDebugLogging||!console)return;const i=`color:${ct};font-size:11px;`,a=`%c ${x}`,o=`Importance: ${r}`;console.log(a,i,t,n,o)},dt=()=>{const e=Ae();oe.sessionId&&oe.lastEventTime&&oe.sessionUUID&&!pt(e)||(oe.sessionId=e,oe.sessionUUID=V(),Ue({sessionStart:e}),lt({metricName:"Started new session:",data:{persistentData:oe,timeStone:Le}})),oe.lastEventTime=e},pt=e=>e-oe.lastEventTime>18e5;function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const ft=e=>{var t;(e=>{switch(e.action){case f.click:Ie.ac+=1;break;case f.focus:Ie.af+=1;break;case f.hover:Ie.ah+=1;break;case f.move:Ie.am+=1;break;case f.scroll:Ie.al+=1;break;case f.search:Ie.ar+=1;break;case f.select:Ie.as+=1}})(t=e),t.event_type!==j?t.event_type===N&&((e=>{if(!e.session_rank)return;const t=e.session_rank;Object.values(h).forEach((e=>{Ie.sqs+=Ie[e]*Pe[e]})),Object.values(w).forEach((e=>{Ie.sqs+=Ie[e]*Me[e]})),Ie.sqs*=Be[t]})(t),Object.assign(t,Ie),De({ac:0,af:0,ah:0,al:0,am:0,ar:0,as:0,pv:0,sqs:0})):Ie.pv+=1;const n=e.event_type;delete e.event_type;const r=e.deviceId?e.deviceId:null,i=e.timestamp;return delete e.timestamp,se({eventId:oe.eventId+1}),se({sequenceNumber:oe.sequenceNumber+1}),dt(),st(),{device_id:H.deviceId||r||null,user_id:H.userId,timestamp:i,event_id:oe.eventId,session_id:oe.sessionId||-1,event_type:n,version_name:A.version||null,platform:W.amplitudePlatform,os_name:W.amplitudeOSName,os_version:W.amplitudeOSVersion,device_model:W.amplitudeDeviceModel,language:H.languageCode,event_properties:mt({},e,{session_uuid:oe.sessionUUID,height:W.height,width:W.width}),user_properties:X(),uuid:V(),library:{name:"@cbhq/client-analytics",version:"10.6.0"},sequence_number:oe.sequenceNumber,user_agent:W.userAgent||H.userAgent}},vt=e=>e.map((e=>ft(e)));function gt(){return gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gt.apply(this,arguments)}const bt=e=>e.map((e=>(e=>{const t=e.tags||{},n=gt({authed:J()?"true":"false",platform:A.platform},t,{project_name:A.projectName,version_name:A.version||null});return{metric_name:e.metricName,page_path:e.pagePath||null,value:e.value,tags:n,type:e.metricType}})(e))),ht=e=>0!==je.metricsQueue.length&&(je.metricsQueue.length>=A.batchMetricsThreshold||(je.metricsScheduled||(je.metricsScheduled=!0,setTimeout((()=>{je.metricsScheduled=!1,e(bt(je.metricsQueue)),je.metricsQueue=[]}),A.batchMetricsPeriod)),!1)),wt=e=>0!==je.tracesQueue.length&&(je.tracesQueue.length>=A.batchTracesThreshold||(je.tracesScheduled||(je.tracesScheduled=!0,setTimeout((()=>{je.tracesScheduled=!1,e(je.tracesQueue),je.tracesQueue=[]}),A.batchTracesPeriod)),!1)),yt=e=>{var t;z()&&null!=(t=window)&&t.requestIdleCallback?window.requestIdleCallback(e,{timeout:A.ricTimeoutScheduleEvent}):(q()||F())&&A.interactionManager?A.interactionManager.runAfterInteractions(e):e()};function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}const kt="application/x-www-form-urlencoded; charset=UTF-8",_t=e=>{const{data:t,importance:n,isJSON:r,onError:i,url:a}=e,o=r?"application/json":kt,s=n||l.low,c=r?JSON.stringify(t):new URLSearchParams(t).toString();function u(){const e=new XMLHttpRequest;e.open("POST",a,!0),Object.keys(A.headers||{}).forEach((t=>{e.setRequestHeader(t,A.headers[t])})),e.setRequestHeader("Content-Type",kt),H.jwt&&e.setRequestHeader("authorization",`Bearer ${H.jwt}`),e.send(c)}if(!z()||r||!("sendBeacon"in navigator)||s!==l.low||A.headers&&0!==Object.keys(A.headers).length)if(z()&&!r)u();else{const e=Tt({},A.headers,{"Content-Type":o});H.jwt&&(e.Authorization=`Bearer ${H.jwt}`),fetch(a,{method:"POST",mode:"no-cors",headers:e,body:c}).catch((e=>{i(e,{context:"AnalyticsSDKApiError"})}))}else{const e=new Blob([c],{type:kt});try{navigator.sendBeacon.bind(navigator)(a,e)||u()}catch(e){console.error(e),u()}}};var St=n(762),Et=n.n(St);const xt=(e,t,n)=>{const r=e||"";return Et()("2"+r+t+n)};function Ot(){return Ot=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ot.apply(this,arguments)}class jt extends Error{constructor(e){super(e),this.name="CircularJsonReference",this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}class Nt extends jt{constructor(...e){super(...e),this.name="DomReferenceInAnalyticsEvent"}}function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}const Pt=(e,t=l.low)=>{var n;e&&je.eventsQueue.push(e),nt.isReady&&(!A.trackUserId||H.userId?(t===l.high||(n=Mt,0!==je.eventsQueue.length&&(je.eventsQueue.length>=A.batchEventsThreshold||(je.eventsScheduled||(je.eventsScheduled=!0,setTimeout((()=>{je.eventsScheduled=!1,n(vt(je.eventsQueue)),je.eventsQueue=[]}),A.batchEventsPeriod)),0))))&&Bt():je.eventsQueue.length>10&&(A.trackUserId=!1,A.onError(new Error("userId not set in Logged-in"))))},Mt=(e,t=l.low)=>{if(H.isOptOut||0===e.length)return;let n;try{n=JSON.stringify(e)}catch(t){const r=e.map((e=>e.event_type)).join(", "),[i,a]=(e=>{try{const n=[];for(const r of e){const e=Ot({},r);r.event_properties&&(e.event_properties=Ot({},e.event_properties,{currentTarget:null,target:null,relatedTarget:null,_dispatchInstances:null,_targetInst:null,view:(t=r.event_properties.view,["string","number","boolean"].includes(typeof t)?r.event_properties.view:null)})),n.push(e)}return[!0,JSON.stringify(n)]}catch(e){return[!1,""]}var t})(e);if(!i)return void A.onError(new jt(t instanceof Error?t.message:"unknown"),{listEventType:r});n=a,A.onError(new Nt("Found DOM element reference"),{listEventType:r,stringifiedEventData:n})}const r=Ae().toString(),i=It({},{e:n,v:"2",upload_time:r},{client:A.amplitudeApiKey,checksum:xt(A.amplitudeApiKey,n,r)});_t({url:A.eventsEndpoint,data:i,importance:t,onError:A.onError}),ut({metricName:"Batch Events",data:e,importance:t})},Bt=()=>{Mt(vt(je.eventsQueue)),Ne({eventsQueue:[]})};function Ct(){return Ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ct.apply(this,arguments)}const Dt=Object.values(f),At=Object.values(m),Lt=e=>Dt.includes(e)?e:f.unknown,Ut=e=>At.includes(e)?e:m.unknown,Rt=(e,t,n)=>{const r={auth:J()?b.loggedIn:b.notLoggedIn,action:Lt(e),component_type:Ut(t),logging_id:n,platform:A.platform,project_name:A.projectName};return"number"==typeof H.userTypeEnum&&(r.user_type_enum=H.userTypeEnum),r},qt=e=>{const t=Ae();if(!e)return A.onError(new Error("missing logData")),Ct({},Rt(f.unknown,m.unknown),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});const n=Ct({},e,Rt(e.action,e.componentType,e.loggingId),{locale:H.locale,session_lcc_id:H.session_lcc_id,timestamp:t,time_start:Le.timeStart});return delete n.componentType,delete n.loggingId,n},Ft={blacklistRegex:[],isEnabled:!1};function zt(){return{page_key:re.pageKey,page_path:re.pagePath,prev_page_key:re.prevPageKey,prev_page_path:re.prevPagePath}}function Kt(e){Object.assign(Ft,e)}function $t(e,t,n=l.low){if(H.isOptOut)return;if(!Oe())return;const r=qt(t);!function(e){Ft.isEnabled&&(ve(),Object.assign(e,zt()))}(r),be(r),function(e){Object.keys(Se).length>0&&Object.assign(e,Se)}(r),r.has_double_fired=!1,r.event_type=e,n===l.high?Pt(r,n):yt((()=>{Pt(r)}))}function Qt(e,t=!1){t?_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.metricsEndPoint,data:{metrics:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Metrics",data:e})}function Wt(){return Wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wt.apply(this,arguments)}function Ht(e){if(!Oe())return;v.server!==A.platform&&!e.pagePath&&re.pagePath&&(e.pagePath=re.pagePath);const t=Object.keys(Se).length?Wt({},e.tags,Se):e.tags;t&&Object.assign(e,{tags:t}),je.metricsQueue.push(e),ht(Qt)&&(Qt(bt(je.metricsQueue)),je.metricsQueue=[])}function Vt(){return Vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vt.apply(this,arguments)}let Jt=function(e){return e.instant="instant",e.quick="quick",e.moderate="moderate",e.slow="slow",e.unavoidable="unavoidable",e}({});function Xt(e){return e.toLowerCase()}let Gt={};const Zt=(e,t)=>{null!=A&&A.onMarkStep&&A.onMarkStep(e,t),xe({ujs:t})};let Yt;const en={Perfume:()=>{},markStep:e=>{},markStepOnce:e=>{},incrementUjNavigation:()=>{}},tn=()=>{z()&&Yt&&Yt.markNTBT&&Yt.markNTBT()},nn=e=>{z()&&Yt&&en.markStep&&en.markStep(e)},rn=e=>{z()&&Yt&&en.markStepOnce&&en.markStepOnce(e)},an=()=>{z()&&Yt&&en.incrementUjNavigation&&en.incrementUjNavigation()};function on(e={callMarkNTBT:!0}){"unknown"!==A.platform&&(Ft.blacklistRegex.some((e=>e.test(fe())))||($t(j,{action:f.render,componentType:m.page}),e.callMarkNTBT&&tn()))}let sn=!1,cn=!1;const un=e=>{sn=!e.persisted},ln=(e,t="hidden",n=!1)=>{cn||(addEventListener("pagehide",un),addEventListener("beforeunload",(()=>{})),cn=!0),addEventListener("visibilitychange",(({timeStamp:n})=>{document.visibilityState===t&&e({timeStamp:n,isUnloading:sn})}),{capture:!0,once:n})},dn=36e3;function pn(){const e=pt(Ae());if(e&&(O.forEach((e=>{oe[e]&&delete oe[e]})),st()),!oe.lastEventTime||!Le.sessionStart||!e)return;const t=Math.round((oe.lastEventTime-Le.sessionStart)/1e3);if(t<1||t>dn)return;const n=Ce(t);$t(N,{action:f.measurement,componentType:m.page,session_duration:t,session_end:oe.lastEventTime,session_start:Le.sessionStart,session_rank:n})}function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)}const fn=[],vn=[],gn=()=>{const e=fn.shift();e&&e()},bn=()=>{const e=vn.shift();e&&e()};let hn={};function wn(e){const t=function(e){return{test_name:e.testName,group_name:e.group,subject_id:e.subjectId,exposed_at:Ae(),subject_type:e.subjectType,platform:A.platform}}(e);hn[e.testName]=hn[e.testName]||0,hn[e.testName]+k>Ae()?lt({metricName:`Event: exposeExperiment ${e.testName} not sent`,data:t}):(hn[e.testName]=Ae(),ot(E,hn),lt({metricName:`Event: exposeExperiment ${e.testName} sent`,data:t}),_t({url:A.exposureEndpoint,data:[t],onError:(t,n)=>{hn[e.testName]=0,ot(E,hn),A.onError(t,n)},isJSON:!0,importance:l.high}))}const yn=e=>{var t,r,i;U(e),z()&&(H.languageCode=(null==(t=navigator)?void 0:t.languages[0])||(null==(r=navigator)?void 0:r.language)||""),te(),(()=>{var e;if(z()&&null!=(e=window)&&e.indexedDB){const e=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Je(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Je(o.result),e.oldVersion,e.newVersion,Je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}});rt({idbKeyval:{get:async t=>(await e).get("keyval",t),set:async(t,n)=>(await e).put("keyval",n,t),delete:async t=>(await e).delete("keyval",t),keys:async()=>(await e).getAllKeys("keyval")}})}else rt({idbKeyval:{get:async e=>new Promise((t=>{t(it[e])})),set:async(e,t)=>new Promise((n=>{it[e]=t,n(e)})),delete:async e=>new Promise((()=>{delete it[e]})),keys:async()=>new Promise((e=>{e(Object.keys(it))}))}})})(),lt({metricName:"Initialized Analytics:",data:{deviceId:H.deviceId}}),fn.push((()=>{Pt()})),(async()=>{const e=await at(S);rt({isReady:!0}),gn(),e&&(bn(),se({eventId:e.eventId||oe.eventId,sequenceNumber:e.sequenceNumber||oe.sequenceNumber,sessionId:e.sessionId||oe.sessionId,lastEventTime:e.lastEventTime||oe.lastEventTime,sessionUUID:e.sessionUUID||oe.sessionUUID}),function(e){se(mn({},function(e){const t={};return O.forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e),de()))}(e),Ue({sessionStart:e.sessionStart||oe.sessionStart}),De({ac:e.ac||Ie.ac,af:e.af||Ie.af,ah:e.ah||Ie.ah,al:e.al||Ie.al,am:e.am||Ie.am,ar:e.ar||Ie.ar,as:e.as||Ie.as,pv:e.pv||Ie.pv}),A.trackUserId&&Y({userId:e.userId||H.userId}),pn(),lt({metricName:"Initialized Analytics IndexedDB:",data:e}))})(),async function(){at(E).then((e=>{hn=null!=e?e:{}})).catch((e=>{e instanceof Error&&A.onError(e)}))}(),Z(),z()&&(ln((()=>{se({lastEventTime:Ae()}),st(),Bt()}),"hidden"),ln((()=>{pn()}),"visible")),z()&&(i=()=>{var e,t,n,r;te(),ee({width:null!=(e=null==(t=window)?void 0:t.innerWidth)?e:null,height:null!=(n=null==(r=window)?void 0:r.innerHeight)?n:null})},addEventListener("resize",(()=>{requestAnimationFrame((()=>{i()}))}))),(()=>{if(z())try{const e=n(2);en.markStep=e.markStep,en.markStepOnce=e.markStepOnce,en.incrementUjNavigation=e.incrementUjNavigation,Yt=new e.Perfume({analyticsTracker:e=>{const{data:t,attribution:n,metricName:r,navigatorInformation:i,rating:a}=e,o=I[r],s=(null==n?void 0:n.category)||null;if(!o&&!s)return;const c=(null==i?void 0:i.deviceMemory)||0,u=(null==i?void 0:i.hardwareConcurrency)||0,l=(null==i?void 0:i.isLowEndDevice)||!1,p=(null==i?void 0:i.isLowEndExperience)||!1,v=(null==i?void 0:i.serviceWorkerStatus)||"unsupported",g=Vt({deviceMemory:c,hardwareConcurrency:u,isLowEndDevice:l,isLowEndExperience:p,serviceWorkerStatus:v},Gt),b={is_low_end_device:l,is_low_end_experience:p,page_key:re.pageKey||"",save_data:t.saveData||!1,service_worker:v,is_perf_metric:!0};if("navigationTiming"===r)t&&"number"==typeof t.redirectTime&&Ht({metricName:I.redirectTime.eventName,metricType:d.histogram,tags:b,value:t.redirectTime||0});else if("TTFB"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),Ht({metricName:I.TTFB.eventName,metricType:d.histogram,tags:Vt({},b),value:t}),a&&Ht({metricName:`perf_web_vitals_ttfb_${a}`,metricType:d.count,tags:b,value:1});else if("networkInformation"===r)null!=t&&t.effectiveType&&(Gt=t,$t(o.eventName,{action:f.measurement,componentType:m.page,networkInformationDownlink:t.downlink,networkInformationEffectiveType:t.effectiveType,networkInformationRtt:t.rtt,networkInformationSaveData:t.saveData,navigatorDeviceMemory:c,navigatorHardwareConcurrency:u}));else if("storageEstimate"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page},t,g)),Ht({metricName:"perf_storage_estimate_caches",metricType:d.histogram,tags:b,value:t.caches}),Ht({metricName:"perf_storage_estimate_indexed_db",metricType:d.histogram,tags:b,value:t.indexedDB});else if("CLS"===r)$t(o.eventName,Vt({action:f.measurement,componentType:m.page,score:100*t||null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_cls_${a}`,metricType:d.count,tags:b,value:1});else if("FID"===r){const e=(null==n?void 0:n.performanceEntry)||null,r=parseInt((null==e?void 0:e.processingStart)||"");$t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,processingStart:null!=e&&e.processingStart?r:null,startTime:null!=e&&e.startTime?parseInt(e.startTime):null,vitalsScore:a||null},g)),a&&Ht({metricName:`perf_web_vitals_fidVitals_${a}`,metricType:d.count,tags:b,value:1})}else"userJourneyStep"===r?($t("perf_user_journey_step",Vt({action:f.measurement,componentType:m.page,duration:t||null,rating:null!=a?a:null,step_name:(null==n?void 0:n.stepName)||""},g)),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}_vitals_${a}`,metricType:d.count,tags:b,value:1}),Ht({metricName:`user_journey_step.${A.projectName}.${A.platform}.${(null==n?void 0:n.stepName)||""}`,metricType:d.distribution,tags:b,value:t||null})):I[r]&&t&&($t(o.eventName,Vt({action:f.measurement,componentType:m.page,duration:t||null,vitalsScore:a||null},g)),a&&(Ht({metricName:`perf_web_vitals_${Xt(r)}_${a}`,metricType:d.count,tags:b,value:1}),"LCP"===r&&Ht({metricName:`perf_web_vitals_${Xt(r)}`,metricType:d.distribution,tags:b,value:t})))},maxMeasureTime:3e4,steps:A.steps,onMarkStep:Zt})}catch(e){e instanceof Error&&A.onError(e)}})()},Tn=e=>{Y(e),e.userAgent&&Z(),lt({metricName:"Identify:",data:{countryCode:H.countryCode,deviceId:H.deviceId,userId:H.userId}})},kn=({blacklistRegex:e,pageKeyRegex:t,browserHistory:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.listen((()=>{on()}))},_n=({blacklistRegex:e,pageKeyRegex:t,nextJsRouter:n})=>{Kt({blacklistRegex:e||[],isEnabled:!0}),ae({pageKeyRegex:t}),on({callMarkNTBT:!1}),n.events.on("routeChangeComplete",(()=>{on()}))},Sn=()=>{Y({isOptOut:!0}),ot(S,{})},En=()=>{Y({isOptOut:!1})},xn={Button:{label:"cb_button",uuid:"e921a074-40e6-4371-8700-134d5cd633e6",componentType:m.button}};function On(e,t,n){return{componentName:e,actions:t,data:n}}function jn(){return jn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)}function Nn(e,t,n){const{componentName:r,data:i}=n;$t(e.label,jn({componentType:e.componentType,action:t,loggingId:e.uuid,component_name:r},i))}const In={actionMapping:{onPress:f.click,onHover:f.hover},handlers:{Button:{[f.click]:e=>Nn(xn.Button,f.click,e),[f.hover]:e=>Nn(xn.Button,f.hover,e)}}};function Pn(e,t=!1){t?_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError}):yt((()=>{_t({url:A.tracesEndpoint,data:{traces:e},isJSON:!0,onError:A.onError})})),ut({metricName:"Batch Traces",data:e})}function Mn(){return Mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mn.apply(this,arguments)}const Bn=1e6;function Cn(e){return e*Bn}function Dn(e=function(){var e;return null==(e=window)?void 0:e.crypto}()){const t=new Uint32Array(2);return null==e||e.getRandomValues(t),((BigInt(t[0])<<BigInt(32))+BigInt(t[1])).toString()}function An(e,t){return{"x-datadog-origin":"rum","x-datadog-parent-id":t,"x-datadog-sampling-priority":"1","x-datadog-trace-id":e}}function Ln(e){var t;const{name:n,traceId:r,spanId:i,start:a,duration:o,resource:s,meta:c}=e;return{duration:o?Cn(o):0,name:n,resource:s,service:A.projectName,span_id:null!=i?i:Dn(),start:a?Cn(a):0,trace_id:null!=r?r:Dn(),parent_id:P,type:M,meta:Mn({platform:A.platform},re.pageKey?{page_key:re.pageKey}:{},null!=(t=Se.ujs)&&t.length?{last_ujs:Se.ujs[Se.ujs.length-1]}:{},null!=c?c:{})}}function Un(e){return[Ln(e)]}function Rn(e,t){Oe()&&function(e){return e.length>0}(e)&&(t&&function(e,t){e.forEach((e=>function(e,t){const n=Mn({},e.meta,t.meta),r={start:t.start?Cn(t.start):e.start,duration:t.duration?Cn(t.duration):e.duration};Object.assign(e,t,Mn({meta:n},r))}(e,t)))}(e,t),je.tracesQueue.push(e),wt(Pn)&&(Pn(je.tracesQueue),je.tracesQueue=[]))}function qn(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function Fn(){return Fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fn.apply(this,arguments)}function zn(){return void 0!==typeof window&&"performance"in window&&"mark"in performance&&"getEntriesByName"in performance}function Kn(e,t){return`perf_${e}${null!=t&&t.label?`_${t.label}`:""}`}function $n(e,t,n){return`${Kn(e,n)}__${t}`}let Qn={};function Wn(e,t,n){if(!zn())return;const r=$n(e,t,n);if(performance.mark(r),"end"===t){const t=Kn(e,n);!function(e,t,n){try{performance.measure(e,t,n)}catch(e){A.onError(e)}}(t,$n(e,"start",n),r);const i=performance.getEntriesByName(t).pop();i&&Ht(Fn({metricName:e,metricType:d.distribution,value:i.duration},null!=n&&n.tags?{tags:n.tags}:{}))}}function Hn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]||(Wn(e,"start",t),Qn[n]=!0)}function Vn(e,t){const n=$n(e,"start",t),r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(Qn,[n].map(qn));Qn=r}function Jn(e,t){if(!zn())return;const n=$n(e,"start",t);Qn[n]&&(Wn(e,"end",t),Vn(e,t))}function Xn(){zn()&&(performance.clearMarks(),Qn={})}var Gn=n(784);function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}function Yn(e,t,n=l.low){const r=(0,Gn.useRef)(t);return(0,Gn.useEffect)((()=>{r.current=t}),[t]),(0,Gn.useCallback)((t=>{$t(e,Zn({},r.current,t),n)}),[e,n])}function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}function tr(e,t,n=l.low){(0,Gn.useEffect)((()=>{const r=er({},t,{action:f.render});$t(e,r,n)}),[])}function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=function(e,t){return{markStartPerf:(0,Gn.useCallback)((()=>Hn(e,t)),[e,t]),markEndPerf:(0,Gn.useCallback)((n=>Jn(e,nr({},t,n))),[e,t])}};function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}function ar(){return Object.entries(ir({},Se,zt(),{sessionUUID:oe.sessionUUID,userId:oe.userId})).reduce(((e,t)=>{return null!=(n=t[1])&&""!==n?ir({},e,{[t[0]]:t[1]}):e;var n}),{})}async function or(){return new Promise((e=>{Mt(vt(je.eventsQueue)),Qt(bt(je.metricsQueue),!0),Pn(je.tracesQueue,!0),Ne({eventsQueue:[],metricsQueue:[],tracesQueue:[]}),e()}))}function sr(){return{"X-CB-Device-ID":H.deviceId||"unknown","X-CB-Is-Logged-In":H.userId?"true":"false","X-CB-Pagekey":re.pageKey||"unknown","X-CB-UJS":(e=Se.ujs,void 0===e||0===e.length?"":e.join(",")),"X-CB-Platform":A.platform||"unknown","X-CB-Project-Name":A.projectName||"unknown","X-CB-Session-UUID":oe.sessionUUID||"unknown","X-CB-Version-Name":A.version?String(A.version):"unknown"};var e}})(),r})()}));'),
                (t.type = "text/javascript"),
                document.head.appendChild(t),
                p(),
                document.head.removeChild(t),
                e();
            } catch (e) {
              console.error("Failed to execute inlined telemetry script"), t();
            }
          }),
        p = () => {
          var e, t, n;
          if ("undefined" != typeof window) {
            let r =
              null !=
              (n =
                null != (e = d.config.get().deviceId)
                  ? e
                  : null == (t = window.crypto)
                  ? void 0
                  : t.randomUUID())
                ? n
                : "";
            if (window.ClientAnalytics) {
              let {
                init: e,
                identify: t,
                PlatformName: n,
              } = window.ClientAnalytics;
              e({
                isProd: !0,
                amplitudeApiKey: "c66737ad47ec354ced777935b0af822e",
                platform: n.web,
                projectName: "base_account_sdk",
                showDebugLogging: !1,
                version: "1.0.0",
                apiEndpoint: "https://cca-lite.coinbase.com",
              }),
                t({ deviceId: r }),
                d.config.set({ deviceId: r });
            }
          }
        };
      var m = e.i(710841);
      let f = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        g = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        b = "Unspecified error message.";
      function y(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (v(g, t)) return g[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function w(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function v(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function k(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let x = {
        rpc: {
          parse: (e) => A(f.rpc.parse, e),
          invalidRequest: (e) => A(f.rpc.invalidRequest, e),
          invalidParams: (e) => A(f.rpc.invalidParams, e),
          methodNotFound: (e) => A(f.rpc.methodNotFound, e),
          internal: (e) => A(f.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return A(t, e);
          },
          invalidInput: (e) => A(f.rpc.invalidInput, e),
          resourceNotFound: (e) => A(f.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => A(f.rpc.resourceUnavailable, e),
          transactionRejected: (e) => A(f.rpc.transactionRejected, e),
          methodNotSupported: (e) => A(f.rpc.methodNotSupported, e),
          limitExceeded: (e) => A(f.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => S(f.provider.userRejectedRequest, e),
          unauthorized: (e) => S(f.provider.unauthorized, e),
          unsupportedMethod: (e) => S(f.provider.unsupportedMethod, e),
          disconnected: (e) => S(f.provider.disconnected, e),
          chainDisconnected: (e) => S(f.provider.chainDisconnected, e),
          unsupportedChain: (e) => S(f.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new E(t, n, r);
          },
        },
      };
      function A(e, t) {
        let [n, r] = I(t);
        return new T(e, n || y(e), r);
      }
      function S(e, t) {
        let [n, r] = I(t);
        return new E(e, n || y(e), r);
      }
      function I(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class T extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class E extends T {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      function _(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "code" in e &&
          "data" in e &&
          -32090 === e.code &&
          "object" == typeof e.data &&
          null !== e.data &&
          "type" in e.data &&
          "INSUFFICIENT_FUNDS" === e.data.type
        );
      }
      function C(e) {
        return "object" == typeof e && null !== e && "details" in e;
      }
      function O(e) {
        return Math.floor(e);
      }
      let P = /^[0-9]*$/,
        M = /^[a-f0-9]*$/;
      function j(e) {
        return N(crypto.getRandomValues(new Uint8Array(e)));
      }
      function N(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function L(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function D(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.toString("hex");
        return t ? "0x".concat(n) : n;
      }
      function R(e) {
        return D(Z(e), !0);
      }
      function B(e) {
        return e.toString(10);
      }
      function U(e) {
        return "0x".concat(BigInt(e).toString(16));
      }
      function q(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function H(e) {
        return q(e) ? e.slice(2) : e;
      }
      function W(e) {
        return q(e) ? "0x".concat(e.slice(2)) : "0x".concat(e);
      }
      function z(e) {
        if ("string" != typeof e) return !1;
        let t = H(e).toLowerCase();
        return M.test(t);
      }
      function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ("string" == typeof e) {
          let n = H(e).toLowerCase();
          if (M.test(n)) return t ? "0x".concat(n) : n;
        }
        throw x.rpc.invalidParams(
          '"'.concat(String(e), '" is not a hexadecimal string')
        );
      }
      function K(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = F(e, !1);
        return n.length % 2 == 1 && (n = "0".concat(n)), t ? "0x".concat(n) : n;
      }
      function V(e) {
        if ("string" == typeof e) {
          let t = H(e).toLowerCase();
          if (z(t) && 40 === t.length) return W(t);
        }
        throw x.rpc.invalidParams(
          "Invalid Ethereum address: ".concat(String(e))
        );
      }
      function Z(e) {
        if (m.Buffer.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (z(e)) {
            let t = K(e, !1);
            return m.Buffer.from(t, "hex");
          }
          return m.Buffer.from(e, "utf8");
        }
        throw x.rpc.invalidParams("Not binary data: ".concat(String(e)));
      }
      function J(e) {
        if ("number" == typeof e && Number.isInteger(e)) return O(e);
        if ("string" == typeof e) {
          if (P.test(e)) return O(Number(e));
          if (z(e)) return O(Number(BigInt(K(e, !0))));
        }
        throw x.rpc.invalidParams("Not an integer: ".concat(String(e)));
      }
      function G(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(J(e));
        if ("string" == typeof e) {
          if (P.test(e)) return BigInt(e);
          if (z(e)) return BigInt(K(e, !0));
        }
        throw x.rpc.invalidParams("Not an integer: ".concat(String(e)));
      }
      let { checkCrossOriginOpenerPolicy: Q, getCrossOriginOpenerPolicy: $ } =
        (() => {
          let e;
          return {
            getCrossOriginOpenerPolicy: () => (void 0 === e ? "undefined" : e),
            checkCrossOriginOpenerPolicy: async () => {
              if ("undefined" == typeof window) {
                e = "non-browser-env";
                return;
              }
              try {
                let t = ""
                    .concat(window.location.origin)
                    .concat(window.location.pathname),
                  n = await fetch(t, { method: "HEAD" });
                if (!n.ok) throw Error("HTTP error! status: ".concat(n.status));
                let r = n.headers.get("Cross-Origin-Opener-Policy");
                (e = null != r ? r : "null"),
                  "same-origin" === e &&
                    console.error(
                      "Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.\n\nPlease see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information."
                    );
              } catch (t) {
                console.error(
                  "Error checking Cross-Origin-Opener-Policy:",
                  t.message
                ),
                  (e = "error");
              }
            },
          };
        })();
      async function Y(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          r = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": o,
              "X-Cbw-Sdk-Platform": c,
            },
          }),
          { result: a, error: i } = await r.json();
        if (i) throw i;
        return a;
      }
      function X(e) {
        var t, n;
        let { metadata: r, preference: a } = e,
          { appName: i, appLogoUrl: s, appChainIds: o } = r;
        if ("smartWalletOnly" !== a.options) {
          let e = globalThis.coinbaseWalletExtension;
          if (e) return null == (t = e.setAppInfo) || t.call(e, i, s, o, a), e;
        }
        let c = (function () {
          var e, t;
          try {
            let n = globalThis;
            return null != (e = n.ethereum)
              ? e
              : null == (t = n.top)
              ? void 0
              : t.ethereum;
          } catch (e) {
            return;
          }
        })();
        if (null == c ? void 0 : c.isCoinbaseBrowser)
          return null == (n = c.setAppInfo) || n.call(c, i, s, o, a), c;
      }
      function ee(e) {
        if (e) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
            throw Error("Invalid options: ".concat(e.options));
          if (
            e.attribution &&
            void 0 !== e.attribution.auto &&
            void 0 !== e.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
          if (e.telemetry && "boolean" != typeof e.telemetry)
            throw Error("Telemetry must be a boolean");
        }
      }
      function et(e) {
        if ("function" != typeof e) throw Error("toAccount is not a function");
      }
      let en = "https://rpc.wallet.coinbase.com",
        er = "https://www.walletlink.org";
      function ea(e, t, n) {
        var r, a, i, s;
        window.ClientAnalytics &&
          (null == (r = window.ClientAnalytics) ||
            r.logEvent(
              e,
              Object.assign(Object.assign({}, t), {
                sdkVersion: o,
                appName:
                  null !=
                  (i =
                    null == (a = d.config.get().metadata) ? void 0 : a.appName)
                    ? i
                    : "",
                appOrigin: window.location.origin,
                appPreferredSigner:
                  null == (s = d.config.get().preference) ? void 0 : s.options,
              }),
              n
            ));
      }
      !(function (e) {
        (e.unknown = "unknown"),
          (e.banner = "banner"),
          (e.button = "button"),
          (e.card = "card"),
          (e.chart = "chart"),
          (e.content_script = "content_script"),
          (e.dropdown = "dropdown"),
          (e.link = "link"),
          (e.page = "page"),
          (e.modal = "modal"),
          (e.table = "table"),
          (e.search_bar = "search_bar"),
          (e.service_worker = "service_worker"),
          (e.text = "text"),
          (e.text_input = "text_input"),
          (e.tray = "tray"),
          (e.checkbox = "checkbox"),
          (e.icon = "icon");
      })(t || (t = {})),
        (function (e) {
          (e.unknown = "unknown"),
            (e.blur = "blur"),
            (e.click = "click"),
            (e.change = "change"),
            (e.dismiss = "dismiss"),
            (e.focus = "focus"),
            (e.hover = "hover"),
            (e.select = "select"),
            (e.measurement = "measurement"),
            (e.move = "move"),
            (e.process = "process"),
            (e.render = "render"),
            (e.scroll = "scroll"),
            (e.view = "view"),
            (e.search = "search"),
            (e.keyPress = "keyPress"),
            (e.error = "error");
        })(n || (n = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(r || (r = {}));
      let ei = (e) => {
          let { snackbarContext: a } = e;
          ea(
            "snackbar.".concat(a, ".shown"),
            { action: n.render, componentType: t.modal, snackbarContext: a },
            r.high
          );
        },
        es = (e) => {
          let { snackbarContext: a, snackbarAction: i } = e;
          ea(
            "snackbar.".concat(a, ".action_clicked"),
            {
              action: n.click,
              componentType: t.button,
              snackbarContext: a,
              snackbarAction: i,
            },
            r.high
          );
        };
      function eo() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      var ec = e.i(610210),
        eu = e.i(844841),
        el = e.i(929828);
      function ed() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      class eh {
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, eu.render)(
              (0, eu.h)(
                "div",
                null,
                (0, eu.h)(
                  ep,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map((e) => {
                    let [t, n] = e;
                    return (0, eu.h)(em, Object.assign({}, n, { key: t }));
                  })
                )
              ),
              this.root
            );
        }
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ed());
        }
      }
      let ep = (e) =>
          (0, eu.h)(
            "div",
            { class: (0, ec.clsx)("-cbwsdk-snackbar-container") },
            (0, eu.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, eu.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        em = (e) => {
          let { autoExpand: t, message: n, menuItems: r } = e,
            [a, i] = (0, el.useState)(!0),
            [s, o] = (0, el.useState)(null != t && t);
          return (
            (0, el.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  i(!1);
                }, 1),
                window.setTimeout(() => {
                  o(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, eu.h)(
              "div",
              {
                class: (0, ec.clsx)(
                  "-cbwsdk-snackbar-instance",
                  a && "-cbwsdk-snackbar-instance-hidden",
                  s && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, eu.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    o(!s);
                  },
                },
                (0, eu.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, eu.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  n
                ),
                (0, eu.h)(
                  "div",
                  { class: "-gear-container" },
                  !s &&
                    (0, eu.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, eu.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, eu.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              r &&
                r.length > 0 &&
                (0, eu.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  r.map((e, t) =>
                    (0, eu.h)(
                      "div",
                      {
                        class: (0, ec.clsx)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, eu.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, eu.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, eu.h)(
                        "span",
                        {
                          class: (0, ec.clsx)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        },
        ef =
          "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z";
      class eg {
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eo();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: ef,
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
        constructor() {
          (this.attached = !1), (this.snackbar = new eh());
        }
      }
      let eb = {
          isRed: !1,
          info: "Retry",
          svgWidth: "10",
          svgHeight: "11",
          path: ef,
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
        },
        ey = null;
      function ew() {
        if (!ey) {
          let e = document.createElement("div");
          (e.className = "-cbwsdk-css-reset"),
            document.body.appendChild(e),
            (ey = new eh()).attach(e);
        }
        return ey;
      }
      class ev {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: a,
          preference: i,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage((t) => {
                let { requestId: n } = t;
                return n === e.id;
              });
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let a = n.data;
                  e(a) &&
                    (t(a),
                    window.removeEventListener("message", r),
                    this.listeners.delete(r));
                };
                window.addEventListener("message", r),
                  this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach((e, t) => {
                  let { reject: n } = e;
                  n(x.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : (ea(
                    "communicator.popup_setup.started",
                    { action: n.unknown, componentType: t.unknown },
                    r.high
                  ),
                  (this.popup = await (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 700) / 2 + window.screenY;
                    function r() {
                      let r = "wallet_".concat(crypto.randomUUID()),
                        a = window.open(
                          e,
                          r,
                          "width="
                            .concat(420, ", height=")
                            .concat(700, ", left=")
                            .concat(t, ", top=")
                            .concat(n)
                        );
                      return (null == a || a.focus(), a) ? a : null;
                    }
                    var a = e;
                    for (let [e, t] of Object.entries({
                      sdkName: c,
                      sdkVersion: o,
                      origin: window.location.origin,
                      coop: $(),
                    }))
                      a.searchParams.has(e) ||
                        a.searchParams.append(e, t.toString());
                    let i = r();
                    if (!i) {
                      let e = ew();
                      return new Promise((t, n) => {
                        ei({ snackbarContext: "popup_blocked" }),
                          e.presentItem({
                            autoExpand: !0,
                            message: "Popup was blocked. Try again.",
                            menuItems: [
                              Object.assign(Object.assign({}, eb), {
                                onClick: () => {
                                  es({
                                    snackbarContext: "popup_blocked",
                                    snackbarAction: "confirm",
                                  }),
                                    (i = r())
                                      ? t(i)
                                      : n(
                                          x.rpc.internal(
                                            "Popup window was blocked"
                                          )
                                        ),
                                    e.clear();
                                },
                              }),
                            ],
                          });
                      });
                    }
                    return Promise.resolve(i);
                  })(this.url)),
                  this.onMessage((e) => {
                    let { event: t } = e;
                    return "PopupUnload" === t;
                  })
                    .then(() => {
                      this.disconnect(),
                        ea(
                          "communicator.popup_unload.received",
                          { action: n.unknown, componentType: t.unknown },
                          r.high
                        );
                    })
                    .catch(() => {}),
                  this.onMessage((e) => {
                    let { event: t } = e;
                    return "PopupLoaded" === t;
                  })
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: o,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw x.rpc.internal();
                      return (
                        ea(
                          "communicator.popup_setup.completed",
                          { action: n.unknown, componentType: t.unknown },
                          r.high
                        ),
                        this.popup
                      );
                    }))),
            (this.url = new URL(e)),
            (this.metadata = a),
            (this.preference = i);
        }
      }
      function ek(e) {
        return void 0 !== e.errorMessage;
      }
      e.i(391323);
      var ex = e.i(724195);
      class eA extends ex.EventEmitter {}
      class eS {
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            "string" == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return "-"
            .concat(this.scope)
            .concat(this.module ? ":".concat(this.module) : "", ":")
            .concat(e);
        }
        static clearAll() {
          new eS("CBWSDK").clear(), new eS("walletlink").clear();
        }
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
      }
      let eI = (0, s.createStore)(() => ({ correlationIds: new Map() })),
        eT = {
          get: (e) => eI.getState().correlationIds.get(e),
          set: (e, t) => {
            eI.setState((n) => {
              let r = new Map(n.correlationIds);
              return r.set(e, t), { correlationIds: r };
            });
          },
          delete: (e) => {
            eI.setState((t) => {
              let n = new Map(t.correlationIds);
              return n.delete(e), { correlationIds: n };
            });
          },
          clear: () => {
            eI.setState({ correlationIds: new Map() });
          },
        };
      var eE = e.i(864198),
        e_ = e.i(429921),
        eC = e.i(994290);
      let eO = (e) =>
        "message" in e && "string" == typeof e.message ? e.message : "";
      var eP = e.i(530033),
        eM = e.i(989915),
        ej = e.i(324345),
        eN = e.i(177066);
      let eL = (0, s.createStore)(() => ({}));
      function eD(e) {
        e.forEach((e) => {
          var t, n, r, a, i, s, o, c;
          if (!e.rpcUrl) return;
          let u = (0, eM.defineChain)({
              id: e.id,
              rpcUrls: { default: { http: [e.rpcUrl] } },
              name:
                null != (n = null == (t = e.nativeCurrency) ? void 0 : t.name)
                  ? n
                  : "",
              nativeCurrency: {
                name:
                  null != (a = null == (r = e.nativeCurrency) ? void 0 : r.name)
                    ? a
                    : "",
                symbol:
                  null !=
                  (s = null == (i = e.nativeCurrency) ? void 0 : i.symbol)
                    ? s
                    : "",
                decimals:
                  null !=
                  (c = null == (o = e.nativeCurrency) ? void 0 : o.decimal)
                    ? c
                    : 18,
              },
            }),
            l = (0, eP.createPublicClient)({
              chain: u,
              transport: (0, ej.http)(e.rpcUrl),
            }),
            d = (0, eN.createBundlerClient)({
              client: l,
              transport: (0, ej.http)(e.rpcUrl),
            });
          eL.setState({ [e.id]: { client: l, bundlerClient: d } });
        });
      }
      function eR(e) {
        var t;
        return null == (t = eL.getState()[e]) ? void 0 : t.client;
      }
      function eB(e, t, n) {
        if (null == e)
          throw null != t
            ? t
            : x.rpc.invalidParams({
                message: null != n ? n : "value must be present",
                data: e,
              });
      }
      function eU(e, t) {
        if (!Array.isArray(e))
          throw x.rpc.invalidParams({
            message: null != t ? t : "value must be an array",
            data: e,
          });
      }
      var eq = e.i(259123),
        eH = e.i(212629);
      function eW(e) {
        if ("object" != typeof e || null === e)
          throw x.rpc.internal("sub account info is not an object");
        if (!("address" in e)) throw x.rpc.internal("sub account is invalid");
        if (
          "address" in e &&
          "string" == typeof e.address &&
          !(0, eq.isAddress)(e.address)
        )
          throw x.rpc.internal("sub account address is invalid");
        if (
          "factory" in e &&
          "string" == typeof e.factory &&
          !(0, eq.isAddress)(e.factory)
        )
          throw x.rpc.internal("sub account factory address is invalid");
        if (
          "factoryData" in e &&
          "string" == typeof e.factoryData &&
          !(0, eH.isHex)(e.factoryData)
        )
          throw x.rpc.internal("sub account factory data is invalid");
      }
      async function ez() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function eF(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function eK(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function eV(e, t) {
        let { iv: n, cipherText: r } = t,
          a = await crypto.subtle.decrypt({ name: "AES-GCM", iv: n }, e, r);
        return new TextDecoder().decode(a);
      }
      function eZ(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function eJ(e, t) {
        let n = eZ(e);
        return N(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function eG(e, t) {
        let n = eZ(e),
          r = L(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function eQ(e, t) {
        return eK(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function e$(e, t) {
        return JSON.parse(await eV(t, e));
      }
      var eY = e.i(209175),
        eX = e.i(312006),
        e0 = e.i(571472),
        e1 = e.i(17335),
        e2 = e.i(97417),
        e3 = e.i(987880),
        e5 = e.i(754444),
        e4 = e.i(80654);
      let e6 = "activeId",
        e8 = (function (e, t) {
          let n =
            "undefined" != typeof indexedDB
              ? (0, e4.createStore)(e, t)
              : void 0;
          return {
            getItem: async (e) => {
              let t = await (0, e4.get)(e, n);
              return t || null;
            },
            removeItem: async (e) => (0, e4.del)(e, n),
            setItem: async (e, t) => (0, e4.set)(e, t, n),
          };
        })("cbwsdk", "keys");
      async function e7() {
        let e = await e2.WebCryptoP256.createKeyPair({ extractable: !1 }),
          t = eY.Hex.slice(eX.PublicKey.toHex(e.publicKey), 1);
        return await e8.setItem(t, e), await e8.setItem(e6, t), e;
      }
      async function e9() {
        let e = await e8.getItem(e6);
        if (!e) return null;
        let t = await e8.getItem(e);
        return t || null;
      }
      async function te() {
        let e = await e9();
        if (!e) {
          let e = await e7(),
            t = eY.Hex.slice(eX.PublicKey.toHex(e.publicKey), 1);
          return await e8.setItem(t, e), await e8.setItem(e6, t), e;
        }
        return e;
      }
      async function tt() {
        let e = await te(),
          t = eY.Hex.slice(eX.PublicKey.toHex(e.publicKey), 1),
          n = async (t) => {
            let { payload: n, metadata: r } = e1.WebAuthnP256.getSignPayload({
                challenge: t,
                origin: "https://keys.coinbase.com",
                userVerification: "preferred",
              }),
              a = await e2.WebCryptoP256.sign({
                payload: n,
                privateKey: e.privateKey,
              });
            return { signature: e0.Signature.toHex(a), raw: {}, webauthn: r };
          };
        return {
          id: t,
          publicKey: t,
          async sign(e) {
            let { hash: t } = e;
            return n(t);
          },
          async signMessage(e) {
            let { message: t } = e;
            return n((0, e3.hashMessage)(t));
          },
          signTypedData: async (e) => n((0, e5.hashTypedData)(e)),
          type: "webAuthn",
        };
      }
      async function tn() {
        return { account: await tt() };
      }
      async function tr() {
        let e = await e9();
        e &&
          (await e8.removeItem(
            eY.Hex.slice(eX.PublicKey.toHex(e.publicKey), 1)
          ),
          await e8.removeItem(e6));
      }
      let ta = { storageKey: "ownPrivateKey", keyType: "private" },
        ti = { storageKey: "ownPublicKey", keyType: "public" },
        ts = { storageKey: "peerPublicKey", keyType: "public" };
      class to {
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(ts, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            d.keys.clear();
        }
        async generateKeyPair() {
          let e = await ez();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(ta, e.privateKey),
            await this.storeKey(ti, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(ta)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(ti)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(ts)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await eF(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = d.keys.get(e.storageKey);
          return t ? eG(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await eJ(e.keyType, t);
          d.keys.set(e.storageKey, n);
        }
        constructor() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
      }
      var tc = e.i(831826),
        tu = e.i(410647);
      function tl(e, t) {
        if ("object" == typeof e && null !== e)
          return t
            .split(/[.[\]]+/)
            .filter(Boolean)
            .reduce((e, t) => {
              if ("object" == typeof e && null !== e) return e[t];
            }, e);
      }
      var td = e.i(249423);
      let th = "0x0ba5ed0c6aa8c49038f819e587e2633c4a9f428a",
        tp = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad",
        tm = [
          { inputs: [], stateMutability: "nonpayable", type: "constructor" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "AlreadyOwner",
            type: "error",
          },
          { inputs: [], name: "Initialized", type: "error" },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidEthereumAddressOwner",
            type: "error",
          },
          {
            inputs: [{ name: "key", type: "uint256" }],
            name: "InvalidNonceKey",
            type: "error",
          },
          {
            inputs: [{ name: "owner", type: "bytes" }],
            name: "InvalidOwnerBytesLength",
            type: "error",
          },
          { inputs: [], name: "LastOwner", type: "error" },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "NoOwnerAtIndex",
            type: "error",
          },
          {
            inputs: [{ name: "ownersRemaining", type: "uint256" }],
            name: "NotLastOwner",
            type: "error",
          },
          {
            inputs: [{ name: "selector", type: "bytes4" }],
            name: "SelectorNotAllowed",
            type: "error",
          },
          { inputs: [], name: "Unauthorized", type: "error" },
          { inputs: [], name: "UnauthorizedCallContext", type: "error" },
          { inputs: [], name: "UpgradeFailed", type: "error" },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "expectedOwner", type: "bytes" },
              { name: "actualOwner", type: "bytes" },
            ],
            name: "WrongOwnerAtIndex",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "AddOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "index", type: "uint256" },
              { indexed: !1, name: "owner", type: "bytes" },
            ],
            name: "RemoveOwner",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "implementation", type: "address" }],
            name: "Upgraded",
            type: "event",
          },
          { stateMutability: "payable", type: "fallback" },
          {
            inputs: [],
            name: "REPLAYABLE_NONCE_KEY",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owner", type: "address" }],
            name: "addOwnerAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "addOwnerPublicKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "functionSelector", type: "bytes4" }],
            name: "canSkipChainIdValidation",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "domainSeparator",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "eip712Domain",
            outputs: [
              { name: "fields", type: "bytes1" },
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
              { name: "salt", type: "bytes32" },
              { name: "extensions", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "entryPoint",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "target", type: "address" },
              { name: "value", type: "uint256" },
              { name: "data", type: "bytes" },
            ],
            name: "execute",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "value", type: "uint256" },
                  { name: "data", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "executeBatch",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "calls", type: "bytes[]" }],
            name: "executeWithoutChainIdValidation",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
            ],
            name: "getUserOpHashWithoutChainId",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "$", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owners", type: "bytes[]" }],
            name: "initialize",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "isOwnerAddress",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "bytes" }],
            name: "isOwnerBytes",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "x", type: "bytes32" },
              { name: "y", type: "bytes32" },
            ],
            name: "isOwnerPublicKey",
            outputs: [{ name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "hash", type: "bytes32" },
              { name: "signature", type: "bytes" },
            ],
            name: "isValidSignature",
            outputs: [{ name: "result", type: "bytes4" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "nextOwnerIndex",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "index", type: "uint256" }],
            name: "ownerAtIndex",
            outputs: [{ name: "", type: "bytes" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ownerCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "proxiableUUID",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeLastOwner",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "index", type: "uint256" },
              { name: "owner", type: "bytes" },
            ],
            name: "removeOwnerAtIndex",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "removedOwnersCount",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "hash", type: "bytes32" }],
            name: "replaySafeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "newImplementation", type: "address" },
              { name: "data", type: "bytes" },
            ],
            name: "upgradeToAndCall",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
              { name: "userOpHash", type: "bytes32" },
              { name: "missingAccountFunds", type: "uint256" },
            ],
            name: "validateUserOp",
            outputs: [{ name: "validationData", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        tf = [
          {
            inputs: [{ name: "implementation_", type: "address" }],
            stateMutability: "payable",
            type: "constructor",
          },
          { inputs: [], name: "OwnerRequired", type: "error" },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "createAccount",
            outputs: [{ name: "account", type: "address" }],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [
              { name: "owners", type: "bytes[]" },
              { name: "nonce", type: "uint256" },
            ],
            name: "getAddress",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "implementation",
            outputs: [{ name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "initCodeHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
        ];
      function tg(e) {
        var t;
        if (!Array.isArray(e.params)) return null;
        switch (e.method) {
          case "personal_sign":
            return e.params[1];
          case "eth_signTypedData_v4":
            return e.params[0];
          case "eth_signTransaction":
          case "eth_sendTransaction":
          case "wallet_sendCalls":
            return null == (t = e.params[0]) ? void 0 : t.from;
          default:
            return null;
        }
      }
      function tb(e) {
        var t;
        if (
          !e ||
          !Array.isArray(e) ||
          !(null == (t = e[0]) ? void 0 : t.chainId) ||
          ("string" != typeof e[0].chainId && "number" != typeof e[0].chainId)
        )
          throw x.rpc.invalidParams();
      }
      function ty(e, t) {
        let n = Object.assign({}, e);
        if (t && e.method.startsWith("wallet_")) {
          let e = tl(n, "params.0.capabilities");
          if ((void 0 === e && (e = {}), "object" != typeof e))
            throw x.rpc.invalidParams();
          (e = Object.assign(Object.assign({}, t), e)),
            n.params &&
              Array.isArray(n.params) &&
              (n.params[0] = Object.assign(Object.assign({}, n.params[0]), {
                capabilities: e,
              }));
        }
        return n;
      }
      async function tw() {
        var e;
        let t = null != (e = d.subAccountsConfig.get()) ? e : {},
          n = {};
        if (t.enableAutoSubAccounts) {
          let { account: e } = t.toOwnerAccount
            ? await t.toOwnerAccount()
            : await tn();
          if (!e) throw x.provider.unauthorized("No owner account found");
          n.addSubAccount = {
            account: {
              type: "create",
              keys: [
                {
                  type: e.address ? "address" : "webauthn-p256",
                  publicKey: e.address || e.publicKey,
                },
              ],
            },
          };
        }
        d.subAccountsConfig.set({ capabilities: n });
      }
      async function tv(e) {
        var t;
        let { client: n, id: r } = e,
          a = await (0, td.waitForCallsStatus)(n, { id: r });
        if ("success" === a.status)
          return null == (t = a.receipts) ? void 0 : t[0].transactionHash;
        throw x.rpc.internal("failed to send transaction");
      }
      function tk(e) {
        let { calls: t, from: n, chainId: r, capabilities: a } = e,
          i = l.get().paymasterUrls,
          s = {
            method: "wallet_sendCalls",
            params: [
              {
                version: "1.0",
                calls: t,
                chainId: (0, eC.numberToHex)(r),
                from: n,
                atomicRequired: !0,
                capabilities: a,
              },
            ],
          };
        return (
          (null == i ? void 0 : i[r]) &&
            (s = ty(s, {
              paymasterService: { url: null == i ? void 0 : i[r] },
            })),
          s
        );
      }
      async function tx() {
        let e = ew();
        return await new Promise((t) => {
          ei({ snackbarContext: "sub_account_insufficient_balance" }),
            e.presentItem({
              autoExpand: !0,
              message: "Insufficient spend permission. Choose how to proceed:",
              menuItems: [
                {
                  isRed: !1,
                  info: "Create new Spend Permission",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    es({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "create_permission",
                    }),
                      e.clear(),
                      t("update_permission");
                  },
                },
                {
                  isRed: !1,
                  info: "Continue in Popup",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    es({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "continue_in_popup",
                    }),
                      e.clear(),
                      t("continue_popup");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    es({
                      snackbarContext: "sub_account_insufficient_balance",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      function tA(e, t) {
        let n = e.filter((e) => e !== t);
        return [t, ...n];
      }
      function tS(e, t) {
        return [...e.filter((e) => e !== t), t];
      }
      async function tI() {
        let e = d.spendPermissions.get(),
          t = d.subAccounts.get(),
          n = d.account.get().accounts;
        return n
          ? {
              accounts:
                null == n
                  ? void 0
                  : n.map((n) => ({
                      address: n,
                      capabilities: {
                        subAccounts: t ? [t] : void 0,
                        spendPermissions:
                          e.length > 0 ? { permissions: e } : void 0,
                      },
                    })),
            }
          : null;
      }
      var tT = e.i(919717),
        tE = e.i(569103);
      function t_(e) {
        return btoa(String.fromCharCode(...new Uint8Array(e)))
          .replaceAll("+", "-")
          .replaceAll("/", "_")
          .replace(/=+$/, "");
      }
      var tC = e.i(257669),
        tO = e.i(500780),
        tP = e.i(213422),
        tM = e.i(750671),
        tj = e.i(906420),
        tN = e.i(472156),
        tL = e.i(944091),
        tD = e.i(265288),
        tR = e.i(230928),
        tB = e.i(753304),
        tU = e.i(941559),
        tq = e.i(130338),
        tH = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, r = Object.getOwnPropertySymbols(e);
              a < r.length;
              a++
            )
              0 > t.indexOf(r[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          return n;
        };
      async function tW(e) {
        let {
            owner: t,
            ownerIndex: n,
            address: r,
            client: a,
            factoryData: i,
          } = e,
          s = {
            abi: tR.entryPoint06Abi,
            address: tB.entryPoint06Address,
            version: "0.6",
          },
          o = { abi: tf, address: th };
        return (0, tq.toSmartAccount)({
          client: a,
          entryPoint: s,
          extend: { abi: tm, factory: o },
          async decodeCalls(e) {
            let t = (0, tP.decodeFunctionData)({ abi: tm, data: e });
            if ("execute" === t.functionName)
              return [{ to: t.args[0], value: t.args[1], data: t.args[2] }];
            if ("executeBatch" === t.functionName)
              return t.args[0].map((e) => ({
                to: e.target,
                value: e.value,
                data: e.data,
              }));
            throw new tO.BaseError(
              'unable to decode calls for "'.concat(t.functionName, '"')
            );
          },
          async encodeCalls(e) {
            var t, n;
            return 1 === e.length
              ? (0, tj.encodeFunctionData)({
                  abi: tm,
                  functionName: "execute",
                  args: [
                    e[0].to,
                    null != (t = e[0].value) ? t : BigInt(0),
                    null != (n = e[0].data) ? n : "0x",
                  ],
                })
              : (0, tj.encodeFunctionData)({
                  abi: tm,
                  functionName: "executeBatch",
                  args: [
                    e.map((e) => {
                      var t, n;
                      return {
                        data: null != (t = e.data) ? t : "0x",
                        target: e.to,
                        value: null != (n = e.value) ? n : BigInt(0),
                      };
                    }),
                  ],
                });
          },
          getAddress: async () => r,
          getFactoryArgs: async () => ({ factory: o.address, factoryData: i }),
          getStubSignature: async () =>
            "webAuthn" === t.type
              ? "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000170000000000000000000000000000000000000000000000000000000000000001949fc7c88032b9fcb5f6efc7a7b8c63668eae9871b765e23123bb473ff57aa831a7c0d9276168ebcc29f2875a0239cffdf2a9cd1c2007c5c77c071db9264df1d000000000000000000000000000000000000000000000000000000000000002549960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d97630500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7b2274797065223a22776562617574686e2e676574222c226368616c6c656e6765223a2273496a396e6164474850596759334b7156384f7a4a666c726275504b474f716d59576f4d57516869467773222c226f726967696e223a2268747470733a2f2f7369676e2e636f696e626173652e636f6d222c2263726f73734f726967696e223a66616c73657d00000000000000000000000000000000000000000000"
              : tK({
                  ownerIndex: n,
                  signature:
                    "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c",
                }),
          async sign(e) {
            let r = tF({
              address: await this.getAddress(),
              chainId: a.chain.id,
              hash: e.hash,
            });
            return tK({
              ownerIndex: n,
              signature: await tz({ hash: r, owner: t }),
            });
          },
          async signMessage(e) {
            let { message: r } = e,
              i = tF({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: (0, e3.hashMessage)(r),
              });
            return tK({
              ownerIndex: n,
              signature: await tz({ hash: i, owner: t }),
            });
          },
          async signTypedData(e) {
            let { domain: r, types: i, primaryType: s, message: o } = e,
              c = tF({
                address: await this.getAddress(),
                chainId: a.chain.id,
                hash: (0, e5.hashTypedData)({
                  domain: r,
                  message: o,
                  primaryType: s,
                  types: i,
                }),
              });
            return tK({
              ownerIndex: n,
              signature: await tz({ hash: c, owner: t }),
            });
          },
          async signUserOperation(e) {
            let { chainId: r = a.chain.id } = e,
              i = tH(e, ["chainId"]),
              o = await this.getAddress(),
              c = (0, tU.getUserOperationHash)({
                chainId: r,
                entryPointAddress: s.address,
                entryPointVersion: s.version,
                userOperation: Object.assign(Object.assign({}, i), {
                  sender: o,
                }),
              });
            return tK({
              ownerIndex: n,
              signature: await tz({ hash: c, owner: t }),
            });
          },
          userOperation: {
            async estimateGas(e) {
              var n;
              if ("webAuthn" === t.type)
                return {
                  verificationGasLimit: BigInt(
                    Math.max(
                      Number(
                        null != (n = e.verificationGasLimit) ? n : BigInt(0)
                      ),
                      8e5
                    )
                  ),
                };
            },
          },
        });
      }
      async function tz(e) {
        let { hash: t, owner: n } = e;
        if ("webAuthn" === n.type) {
          let { signature: e, webauthn: r } = await n.sign({ hash: t });
          return (function (e) {
            let { webauthn: t, signature: n } = e,
              { r, s: a } = tC.fromHex(n);
            return (0, tM.encodeAbiParameters)(
              [
                {
                  components: [
                    { name: "authenticatorData", type: "bytes" },
                    { name: "clientDataJSON", type: "bytes" },
                    { name: "challengeIndex", type: "uint256" },
                    { name: "typeIndex", type: "uint256" },
                    { name: "r", type: "uint256" },
                    { name: "s", type: "uint256" },
                  ],
                  type: "tuple",
                },
              ],
              [
                {
                  authenticatorData: t.authenticatorData,
                  clientDataJSON: (0, eC.stringToHex)(t.clientDataJSON),
                  challengeIndex: BigInt(t.challengeIndex),
                  typeIndex: BigInt(t.typeIndex),
                  r,
                  s: a,
                },
              ]
            );
          })({ signature: e, webauthn: r });
        }
        if (n.sign) return n.sign({ hash: t });
        throw new tO.BaseError("`owner` does not support raw sign.");
      }
      function tF(e) {
        let { address: t, chainId: n, hash: r } = e;
        return (0, e5.hashTypedData)({
          domain: {
            chainId: n,
            name: "Coinbase Smart Wallet",
            verifyingContract: t,
            version: "1",
          },
          types: {
            CoinbaseSmartWalletMessage: [{ name: "hash", type: "bytes32" }],
          },
          primaryType: "CoinbaseSmartWalletMessage",
          message: { hash: r },
        });
      }
      function tK(e) {
        let { ownerIndex: t = 0 } = e,
          n = (() => {
            if (65 !== (0, tD.size)(e.signature)) return e.signature;
            let t = (0, tL.parseSignature)(e.signature);
            return (0, tN.encodePacked)(
              ["bytes32", "bytes32", "uint8"],
              [t.r, t.s, 0 === t.yParity ? 27 : 28]
            );
          })();
        return (0, tM.encodeAbiParameters)(
          [
            {
              components: [
                { name: "ownerIndex", type: "uint8" },
                { name: "signatureData", type: "bytes" },
              ],
              type: "tuple",
            },
          ],
          [{ ownerIndex: t, signatureData: n }]
        );
      }
      async function tV(e) {
        var t;
        let {
            address: n,
            client: r,
            factory: a,
            factoryData: i,
            owner: s,
            ownerIndex: o,
            parentAddress: c,
            attribution: u,
          } = e,
          l = { address: n, factory: a, factoryData: i },
          d = null == (t = r.chain) ? void 0 : t.id;
        if (!d) throw x.rpc.internal("chainId not found");
        let h = await tW({
            owner: s,
            ownerIndex: null != o ? o : 1,
            address: n,
            client: r,
            factoryData: i,
          }),
          p = async (e) => {
            var t, n, a, i, o;
            try {
              switch (e.method) {
                case "wallet_addSubAccount":
                  return l;
                case "eth_accounts":
                  return [l.address];
                case "eth_coinbase":
                  return l.address;
                case "net_version":
                  return d.toString();
                case "eth_chainId":
                  return (0, eC.numberToHex)(d);
                case "eth_sendTransaction": {
                  eU(e.params);
                  let i = e.params[0];
                  eB(i.to, x.rpc.invalidParams("to is required"));
                  let s = {
                      to: i.to,
                      data: F(null != (t = i.data) ? t : "0x", !0),
                      value: F(null != (n = i.value) ? n : "0x", !0),
                      from: null != (a = i.from) ? a : l.address,
                    },
                    o = tk({ calls: [s], chainId: d, from: s.from }),
                    c = await p(o);
                  return tv({ client: r, id: c });
                }
                case "wallet_sendCalls": {
                  let t;
                  eU(e.params);
                  let n = tl(e.params[0], "chainId");
                  if (!n) throw x.rpc.invalidParams("chainId is required");
                  if (!(0, eH.isHex)(n))
                    throw x.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw x.rpc.invalidParams("params are required");
                  if (!("calls" in e.params[0]))
                    throw x.rpc.invalidParams("calls are required");
                  let r = {
                    method: "wallet_prepareCalls",
                    params: [
                      {
                        version: "1.0",
                        calls: e.params[0].calls,
                        chainId: n,
                        from: l.address,
                        capabilities:
                          "capabilities" in e.params[0]
                            ? e.params[0].capabilities
                            : {},
                      },
                    ],
                  };
                  c &&
                    (r = ty(r, {
                      funding: [
                        {
                          type: "spendPermission",
                          data: {
                            autoApply: !0,
                            sources: [c],
                            preference: "PREFER_DIRECT_BALANCE",
                          },
                        },
                      ],
                    }));
                  let a = await p(r),
                    u = await (null == (i = s.sign)
                      ? void 0
                      : i.call(s, {
                          hash: (0, eE.hexToString)(a.signatureRequest.hash),
                        }));
                  if (!u) throw x.rpc.internal("signature not found");
                  return (
                    (t = (0, eH.isHex)(u)
                      ? {
                          type: "secp256k1",
                          data: { address: s.address, signature: u },
                        }
                      : {
                          type: "webauthn",
                          data: {
                            signature: JSON.stringify(
                              (function (e) {
                                let { webauthn: t, signature: n, id: r } = e,
                                  a = e0.Signature.fromHex(n);
                                return {
                                  id: r,
                                  rawId: t_((0, tT.stringToBytes)(r)),
                                  response: {
                                    authenticatorData: t_(
                                      (0, tT.hexToBytes)(t.authenticatorData)
                                    ),
                                    clientDataJSON: t_(
                                      (0, tT.stringToBytes)(t.clientDataJSON)
                                    ),
                                    signature: t_(
                                      (function (e, t) {
                                        let n = (0, tT.hexToBytes)(
                                            (0, tE.trim)((0, eC.numberToHex)(e))
                                          ),
                                          r = (0, tT.hexToBytes)(
                                            (0, tE.trim)((0, eC.numberToHex)(t))
                                          ),
                                          a = n.length,
                                          i = r.length,
                                          s = a + i + 4,
                                          o = new Uint8Array(s + 2);
                                        return (
                                          (o[0] = 48),
                                          (o[1] = s),
                                          (o[2] = 2),
                                          (o[3] = a),
                                          o.set(n, 4),
                                          (o[a + 4] = 2),
                                          (o[a + 5] = i),
                                          o.set(r, a + 6),
                                          o
                                        );
                                      })(a.r, a.s)
                                    ),
                                  },
                                  type: JSON.parse(t.clientDataJSON).type,
                                };
                              })(
                                Object.assign(
                                  { id: null != (o = s.id) ? o : "1" },
                                  u
                                )
                              )
                            ),
                            publicKey: s.publicKey,
                          },
                        }),
                    (
                      await p({
                        method: "wallet_sendPreparedCalls",
                        params: [
                          {
                            version: "1.0",
                            type: a.type,
                            data: a.userOp,
                            chainId: a.chainId,
                            signature: t,
                          },
                        ],
                      })
                    )[0]
                  );
                }
                case "wallet_sendPreparedCalls": {
                  eU(e.params);
                  let t = tl(e.params[0], "chainId");
                  if (!t) throw x.rpc.invalidParams("chainId is required");
                  if (!(0, eH.isHex)(t))
                    throw x.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  return await r.request({
                    method: "wallet_sendPreparedCalls",
                    params: e.params,
                  });
                }
                case "wallet_prepareCalls": {
                  eU(e.params);
                  let t = tl(e.params[0], "chainId");
                  if (!t) throw x.rpc.invalidParams("chainId is required");
                  if (!(0, eH.isHex)(t))
                    throw x.rpc.invalidParams(
                      "chainId must be a hex encoded integer"
                    );
                  if (!e.params[0])
                    throw x.rpc.invalidParams("params are required");
                  if (!tl(e.params[0], "calls"))
                    throw x.rpc.invalidParams("calls are required");
                  let n = e.params[0];
                  return (
                    !u ||
                      !n.capabilities ||
                      "attribution" in n.capabilities ||
                      (n.capabilities.attribution = u),
                    await r.request({
                      method: "wallet_prepareCalls",
                      params: [
                        Object.assign(Object.assign({}, e.params[0]), {
                          chainId: t,
                        }),
                      ],
                    })
                  );
                }
                case "personal_sign": {
                  if ((eU(e.params), !(0, eH.isHex)(e.params[0])))
                    throw x.rpc.invalidParams(
                      "message must be a hex encoded string"
                    );
                  let t = (0, eE.hexToString)(e.params[0]);
                  return h.signMessage({ message: t });
                }
                case "eth_signTypedData_v4": {
                  eU(e.params);
                  let t =
                    "string" == typeof e.params[1]
                      ? JSON.parse(e.params[1])
                      : e.params[1];
                  return h.signTypedData(t);
                }
                default:
                  throw x.rpc.methodNotSupported();
              }
            } catch (e) {
              if (C(e)) {
                let t = (function (e) {
                  try {
                    let t = JSON.parse(e.details);
                    return new T(t.code, t.message, t.data);
                  } catch (e) {
                    return null;
                  }
                })(e);
                if (t) throw t;
              }
              throw e;
            }
          };
        return { request: p };
      }
      var tZ = e.i(549798),
        tJ = e.i(561160),
        tG = e.i(133620),
        tQ = e.i(107511);
      async function t$(e) {
        let {
          address: t,
          client: n,
          publicKey: r,
          factory: a,
          factoryData: i,
        } = e;
        if (!(await (0, tG.getCode)(n, { address: t })) && a && i) {
          if ((0, tZ.getAddress)(a) !== (0, tZ.getAddress)(th))
            throw x.rpc.internal("unknown factory address");
          let e = (0, tP.decodeFunctionData)({ abi: tf, data: i });
          if ("createAccount" !== e.functionName)
            throw x.rpc.internal("unknown factory function");
          let [t] = e.args;
          return t.findIndex((e) => e.toLowerCase() === tY(r).toLowerCase());
        }
        let s = await (0, tQ.readContract)(n, {
          address: t,
          abi: tm,
          functionName: "ownerCount",
        });
        for (let e = Number(s) - 1; e >= 0; e--) {
          let a = await (0, tQ.readContract)(n, {
              address: t,
              abi: tm,
              functionName: "ownerAtIndex",
              args: [BigInt(e)],
            }),
            i = tY(r);
          if (a.toLowerCase() === i.toLowerCase()) return e;
        }
        return -1;
      }
      function tY(e) {
        return (0, eq.isAddress)(e) ? (0, tJ.pad)(e) : e;
      }
      var tX = e.i(687681);
      async function t0() {
        let e = ew();
        return new Promise((t) => {
          ei({ snackbarContext: "sub_account_add_owner" }),
            e.presentItem({
              autoExpand: !0,
              message: "App requires a signer update",
              menuItems: [
                {
                  isRed: !1,
                  info: "Confirm",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    es({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "confirm",
                    }),
                      e.clear(),
                      t("authenticate");
                  },
                },
                {
                  isRed: !0,
                  info: "Cancel",
                  svgWidth: "10",
                  svgHeight: "11",
                  path: "",
                  defaultFillRule: "evenodd",
                  defaultClipRule: "evenodd",
                  onClick: () => {
                    es({
                      snackbarContext: "sub_account_add_owner",
                      snackbarAction: "cancel",
                    }),
                      e.clear(),
                      t("cancel");
                  },
                },
              ],
            });
        });
      }
      async function t1(e) {
        var t, n;
        let { ownerAccount: r, globalAccountRequest: a } = e,
          i = d.account.get(),
          s = d.subAccounts.get(),
          o =
            null == (t = i.accounts)
              ? void 0
              : t.find(
                  (e) =>
                    e.toLowerCase() !==
                    (null == s ? void 0 : s.address.toLowerCase())
                );
        eB(o, x.provider.unauthorized("no global account")),
          eB(
            null == (n = i.chain) ? void 0 : n.id,
            x.provider.unauthorized("no chain id")
          ),
          eB(
            null == s ? void 0 : s.address,
            x.provider.unauthorized("no sub account")
          );
        let c = [];
        if (
          ("local" === r.type &&
            r.address &&
            c.push({
              to: s.address,
              data: (0, tj.encodeFunctionData)({
                abi: tm,
                functionName: "addOwnerAddress",
                args: [r.address],
              }),
              value: (0, eC.toHex)(0),
            }),
          r.publicKey)
        ) {
          let [e, t] = (0, tX.decodeAbiParameters)(
            [{ type: "bytes32" }, { type: "bytes32" }],
            r.publicKey
          );
          c.push({
            to: s.address,
            data: (0, tj.encodeFunctionData)({
              abi: tm,
              functionName: "addOwnerPublicKey",
              args: [e, t],
            }),
            value: (0, eC.toHex)(0),
          });
        }
        let u = {
          method: "wallet_sendCalls",
          params: [
            {
              version: "1",
              calls: c,
              chainId: (0, eC.numberToHex)(84532),
              from: o,
            },
          ],
        };
        if ("cancel" === (await t0()))
          throw x.provider.unauthorized("user cancelled");
        let l = await a(u),
          h = eR(i.chain.id);
        if (
          (eB(
            h,
            x.rpc.internal("client not found for chainId ".concat(i.chain.id))
          ),
          "success" !== (await (0, td.waitForCallsStatus)(h, { id: l })).status)
        )
          throw x.rpc.internal("add owner call failed");
        let p = await t$({
          address: s.address,
          publicKey: "local" === r.type && r.address ? r.address : r.publicKey,
          client: h,
        });
        if (-1 === p) throw x.rpc.internal("failed to find owner index");
        return p;
      }
      var t2 = e.i(275982);
      async function t3(e) {
        var t, n, r;
        let a,
          i,
          {
            errorData: s,
            globalAccountAddress: o,
            subAccountAddress: c,
            client: u,
            request: l,
            subAccountRequest: d,
            globalAccountRequest: h,
          } = e,
          p = null == (t = u.chain) ? void 0 : t.id;
        eB(p, x.rpc.internal("invalid chainId"));
        let m = (function (e) {
            var t;
            let { errorData: n, sourceAddress: r } = e,
              a = [];
            for (let [e, { amount: i, sources: s }] of Object.entries(
              null != (t = null == n ? void 0 : n.required) ? t : {}
            )) {
              if (
                0 ===
                s.filter(
                  (e) =>
                    (0, eE.hexToBigInt)(e.balance) >= (0, eE.hexToBigInt)(i) &&
                    e.address.toLowerCase() ===
                      (null == r ? void 0 : r.toLowerCase())
                ).length
              )
                throw Error(
                  "Source address has insufficient balance for a token"
                );
              a.push({ token: e, requiredAmount: (0, eE.hexToBigInt)(i) });
            }
            return a;
          })({ errorData: s, sourceAddress: o }),
          f = await tx();
        if ("cancel" === f) throw Error("User cancelled funding");
        if ("update_permission" === f) {
          if (1 === m.length) {
            let e = m[0],
              t = (function (e) {
                let { spendPermission: t, chainId: n } = e;
                return {
                  domain: {
                    name: "Spend Permission Manager",
                    version: "1",
                    chainId: n,
                    verifyingContract: tp,
                  },
                  types: {
                    SpendPermission: [
                      { name: "account", type: "address" },
                      { name: "spender", type: "address" },
                      { name: "token", type: "address" },
                      { name: "allowance", type: "uint160" },
                      { name: "period", type: "uint48" },
                      { name: "start", type: "uint48" },
                      { name: "end", type: "uint48" },
                      { name: "salt", type: "uint256" },
                      { name: "extraData", type: "bytes" },
                    ],
                  },
                  primaryType: "SpendPermission",
                  message: {
                    account: t.account,
                    spender: t.spender,
                    token: t.token,
                    allowance: t.allowance,
                    period: t.period,
                    start: t.start,
                    end: t.end,
                    salt: t.salt,
                    extraData: t.extraData,
                  },
                };
              })({
                spendPermission: {
                  token: e.token,
                  allowance: (0, eC.numberToHex)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: o,
                  spender: c,
                  start: 0,
                  end: 0xffffffffffff,
                  salt: (0, eC.numberToHex)(
                    BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
                  ),
                  extraData: "0x",
                },
                chainId: p,
              });
            a = { method: "eth_signTypedData_v4", params: [o, t] };
          } else {
            let e = (function (e) {
              let { spendPermissionBatch: t, chainId: n } = e;
              return {
                domain: {
                  name: "Spend Permission Manager",
                  version: "1",
                  chainId: n,
                  verifyingContract: tp,
                },
                types: {
                  SpendPermissionBatch: [
                    { name: "account", type: "address" },
                    { name: "period", type: "uint48" },
                    { name: "start", type: "uint48" },
                    { name: "end", type: "uint48" },
                    { name: "permissions", type: "PermissionDetails[]" },
                  ],
                  PermissionDetails: [
                    { name: "spender", type: "address" },
                    { name: "token", type: "address" },
                    { name: "allowance", type: "uint160" },
                    { name: "salt", type: "uint256" },
                    { name: "extraData", type: "bytes" },
                  ],
                },
                primaryType: "SpendPermissionBatch",
                message: {
                  account: t.account,
                  period: t.period,
                  start: t.start,
                  end: t.end,
                  permissions: t.permissions.map((e) => ({
                    spender: e.spender,
                    token: e.token,
                    allowance: e.allowance,
                    salt: e.salt,
                    extraData: e.extraData,
                  })),
                },
              };
            })({
              spendPermissionBatch: {
                account: o,
                period: 86400,
                start: 0,
                end: 0xffffffffffff,
                permissions: m.map((e) => ({
                  token: e.token,
                  allowance: (0, eC.numberToHex)(e.requiredAmount * BigInt(3)),
                  period: 86400,
                  account: o,
                  spender: c,
                  salt: "0x0",
                  extraData: "0x",
                })),
              },
              chainId: p,
            });
            a = { method: "eth_signTypedData_v4", params: [o, e] };
          }
          try {
            await h(a);
          } catch (e) {
            throw (
              (console.error(e), Error("User denied spend permission request"))
            );
          }
          return d(l);
        }
        let g = m.map((e) =>
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" === e.token.toLowerCase()
            ? {
                to: c,
                value: (0, eC.numberToHex)(e.requiredAmount),
                data: "0x",
              }
            : {
                to: e.token,
                value: "0x0",
                data: (0, tj.encodeFunctionData)({
                  abi: t2.erc20Abi,
                  functionName: "transfer",
                  args: [c, e.requiredAmount],
                }),
              }
        );
        if (
          "wallet_sendCalls" === l.method &&
          "object" == typeof (n = l.params) &&
          null !== n &&
          "calls" in n
        )
          i = l.params[0];
        else if (
          "eth_sendTransaction" === l.method &&
          Array.isArray((r = l.params)) &&
          1 === r.length &&
          "object" == typeof r[0] &&
          null !== r[0] &&
          "to" in r[0]
        )
          i = tk({ calls: [l.params[0]], chainId: p, from: l.params[0].from })
            .params[0];
        else throw Error("Could not get original call");
        let b = [
            ...g,
            {
              data: (0, tj.encodeFunctionData)({
                abi: tm,
                functionName: "executeBatch",
                args: [
                  i.calls.map((e) => {
                    var t, n;
                    return {
                      target: e.to,
                      value: (0, eE.hexToBigInt)(
                        null != (t = e.value) ? t : "0x0"
                      ),
                      data: null != (n = e.data) ? n : "0x",
                    };
                  }),
                ],
              }),
              to: c,
              value: "0x0",
            },
          ],
          y = await h({
            method: "wallet_sendCalls",
            params: [
              Object.assign(Object.assign({}, i), { calls: b, from: o }),
            ],
          });
        return "eth_sendTransaction" === l.method
          ? tv({ client: u, id: y })
          : y;
      }
      class t5 {
        async handshake(e) {
          var a, i, s;
          let o = eT.get(e);
          ((e) => {
            var a;
            let { method: i, correlationId: s } = e;
            ea(
              "scw_signer.handshake.started",
              {
                action: n.unknown,
                componentType: t.unknown,
                method: i,
                correlationId: s,
                enableAutoSubAccounts:
                  null == (a = d.subAccountsConfig.get())
                    ? void 0
                    : a.enableAutoSubAccounts,
              },
              r.high
            );
          })({ method: e.method, correlationId: o });
          try {
            await (null == (i = (a = this.communicator).waitForPopupLoaded)
              ? void 0
              : i.call(a));
            let c = await this.createRequestMessage(
                {
                  handshake: {
                    method: e.method,
                    params: null != (s = e.params) ? s : [],
                  },
                },
                o
              ),
              u = await this.communicator.postRequestAndWaitForResponse(c);
            if ("failure" in u.content) throw u.content.failure;
            let l = await eG("public", u.sender);
            await this.keyManager.setPeerPublicKey(l);
            let h = await this.decryptResponseMessage(u);
            this.handleResponse(e, h),
              ((e) => {
                var a;
                let { method: i, correlationId: s } = e;
                ea(
                  "scw_signer.handshake.completed",
                  {
                    action: n.unknown,
                    componentType: t.unknown,
                    method: i,
                    correlationId: s,
                    enableAutoSubAccounts:
                      null == (a = d.subAccountsConfig.get())
                        ? void 0
                        : a.enableAutoSubAccounts,
                  },
                  r.high
                );
              })({ method: e.method, correlationId: o });
          } catch (a) {
            throw (
              (((e) => {
                var a;
                let { method: i, correlationId: s, errorMessage: o } = e;
                ea(
                  "scw_signer.handshake.error",
                  {
                    action: n.error,
                    componentType: t.unknown,
                    method: i,
                    correlationId: s,
                    errorMessage: o,
                    enableAutoSubAccounts:
                      null == (a = d.subAccountsConfig.get())
                        ? void 0
                        : a.enableAutoSubAccounts,
                  },
                  r.high
                );
              })({ method: e.method, correlationId: o, errorMessage: eO(a) }),
              a)
            );
          }
        }
        async request(e) {
          let a = eT.get(e);
          ((e) => {
            var a;
            let { method: i, correlationId: s } = e;
            ea(
              "scw_signer.request.started",
              {
                action: n.unknown,
                componentType: t.unknown,
                method: i,
                correlationId: s,
                enableAutoSubAccounts:
                  null == (a = d.subAccountsConfig.get())
                    ? void 0
                    : a.enableAutoSubAccounts,
              },
              r.high
            );
          })({ method: e.method, correlationId: a });
          try {
            let i = await this._request(e);
            return (
              ((e) => {
                var a;
                let { method: i, correlationId: s } = e;
                ea(
                  "scw_signer.request.completed",
                  {
                    action: n.unknown,
                    componentType: t.unknown,
                    method: i,
                    correlationId: s,
                    enableAutoSubAccounts:
                      null == (a = d.subAccountsConfig.get())
                        ? void 0
                        : a.enableAutoSubAccounts,
                  },
                  r.high
                );
              })({ method: e.method, correlationId: a }),
              i
            );
          } catch (i) {
            throw (
              (((e) => {
                var a;
                let { method: i, correlationId: s, errorMessage: o } = e;
                ea(
                  "scw_signer.request.error",
                  {
                    action: n.error,
                    componentType: t.unknown,
                    method: i,
                    correlationId: s,
                    errorMessage: o,
                    enableAutoSubAccounts:
                      null == (a = d.subAccountsConfig.get())
                        ? void 0
                        : a.enableAutoSubAccounts,
                  },
                  r.high
                );
              })({ method: e.method, correlationId: a, errorMessage: eO(i) }),
              i)
            );
          }
        }
        async _request(e) {
          var a, i, s, o, c, u, l, h, p, m, f, g, b, y;
          if (0 === this.accounts.length)
            switch (e.method) {
              case "eth_requestAccounts":
                return (
                  await (null ==
                  (i = (a = this.communicator).waitForPopupLoaded)
                    ? void 0
                    : i.call(a)),
                  await tw(),
                  await this.request({
                    method: "wallet_connect",
                    params: [
                      {
                        version: "1",
                        capabilities: Object.assign(
                          {},
                          null !=
                            (o =
                              null == (s = d.subAccountsConfig.get())
                                ? void 0
                                : s.capabilities)
                            ? o
                            : {}
                        ),
                      },
                    ],
                  }),
                  this.accounts
                );
              case "wallet_switchEthereumChain":
                tb(e.params), (this.chain.id = Number(e.params[0].chainId));
                return;
              case "wallet_connect": {
                await (null == (u = (c = this.communicator).waitForPopupLoaded)
                  ? void 0
                  : u.call(c)),
                  await tw();
                let t = {};
                (function (e, t) {
                  var n;
                  if (!Array.isArray(null == e ? void 0 : e.params)) return !1;
                  let r = null == (n = e.params[0]) ? void 0 : n.capabilities;
                  return !!r && "object" == typeof r && t in r;
                })(e, "addSubAccount") &&
                  (t =
                    null !=
                    (h =
                      null == (l = d.subAccountsConfig.get())
                        ? void 0
                        : l.capabilities)
                      ? h
                      : {});
                let n = ty(e, t);
                return this.sendRequestToPopup(n);
              }
              case "wallet_sendCalls":
              case "wallet_sign":
                return this.sendRequestToPopup(e);
              default:
                throw x.provider.unauthorized();
            }
          if (this.shouldRequestUseSubAccountSigner(e)) {
            let a = eT.get(e);
            ((e) => {
              var a;
              let { method: i, correlationId: s } = e;
              ea(
                "scw_sub_account.request.started",
                {
                  action: n.unknown,
                  componentType: t.unknown,
                  method: i,
                  correlationId: s,
                  enableAutoSubAccounts:
                    null == (a = d.subAccountsConfig.get())
                      ? void 0
                      : a.enableAutoSubAccounts,
                },
                r.high
              );
            })({ method: e.method, correlationId: a });
            try {
              let i = await this.sendRequestToSubAccountSigner(e);
              return (
                ((e) => {
                  var a;
                  let { method: i, correlationId: s } = e;
                  ea(
                    "scw_sub_account.request.completed",
                    {
                      action: n.unknown,
                      componentType: t.unknown,
                      method: i,
                      correlationId: s,
                      enableAutoSubAccounts:
                        null == (a = d.subAccountsConfig.get())
                          ? void 0
                          : a.enableAutoSubAccounts,
                    },
                    r.high
                  );
                })({ method: e.method, correlationId: a }),
                i
              );
            } catch (i) {
              throw (
                (((e) => {
                  var a;
                  let { method: i, correlationId: s, errorMessage: o } = e;
                  ea(
                    "scw_sub_account.request.error",
                    {
                      action: n.error,
                      componentType: t.unknown,
                      method: i,
                      correlationId: s,
                      errorMessage: o,
                      enableAutoSubAccounts:
                        null == (a = d.subAccountsConfig.get())
                          ? void 0
                          : a.enableAutoSubAccounts,
                    },
                    r.high
                  );
                })({ method: e.method, correlationId: a, errorMessage: eO(i) }),
                i)
              );
            }
          }
          switch (e.method) {
            case "eth_requestAccounts":
            case "eth_accounts": {
              let e = d.subAccounts.get(),
                t = d.subAccountsConfig.get();
              return (
                (null == e ? void 0 : e.address) &&
                  (this.accounts = (
                    null == t ? void 0 : t.enableAutoSubAccounts
                  )
                    ? tA(this.accounts, e.address)
                    : tS(this.accounts, e.address)),
                null == (p = this.callback) ||
                  p.call(this, "connect", {
                    chainId: (0, eC.numberToHex)(this.chain.id),
                  }),
                this.accounts
              );
            }
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return (0, eC.numberToHex)(this.chain.id);
            case "wallet_getCapabilities":
              return this.handleGetCapabilitiesRequest(e);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            case "wallet_connect": {
              let t = await tI();
              if (t) return t;
              await (null == (f = (m = this.communicator).waitForPopupLoaded)
                ? void 0
                : f.call(m)),
                await tw();
              let n = d.subAccountsConfig.get(),
                r = ty(
                  e,
                  null != (g = null == n ? void 0 : n.capabilities) ? g : {}
                );
              return (
                null == (b = this.callback) ||
                  b.call(this, "connect", {
                    chainId: (0, eC.numberToHex)(this.chain.id),
                  }),
                this.sendRequestToPopup(r)
              );
            }
            case "wallet_getSubAccounts": {
              let t = d.subAccounts.get();
              if (null == t ? void 0 : t.address) return { subAccounts: [t] };
              if (!this.chain.rpcUrl)
                throw x.rpc.internal("No RPC URL set for chain");
              let n = await Y(e, this.chain.rpcUrl);
              if (
                (eU(n.subAccounts, "subAccounts"), n.subAccounts.length > 0)
              ) {
                eW(n.subAccounts[0]);
                let e = n.subAccounts[0];
                d.subAccounts.set({
                  address: e.address,
                  factory: e.factory,
                  factoryData: e.factoryData,
                });
              }
              return n;
            }
            case "wallet_addSubAccount":
              return this.addSubAccount(e);
            case "coinbase_fetchPermissions": {
              !(function (e) {
                if (
                  "coinbase_fetchPermissions" !== e.method ||
                  void 0 !== e.params
                ) {
                  if (
                    "coinbase_fetchPermissions" === e.method &&
                    Array.isArray(e.params) &&
                    1 === e.params.length &&
                    "object" == typeof e.params[0]
                  ) {
                    if (
                      "string" != typeof e.params[0].account ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw x.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].account must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].chainId ||
                      !e.params[0].chainId.startsWith("0x")
                    )
                      throw x.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].chainId must be a hex string"
                      );
                    if (
                      "string" != typeof e.params[0].spender ||
                      !e.params[0].spender.startsWith("0x")
                    )
                      throw x.rpc.invalidParams(
                        "FetchPermissions - Invalid params: params[0].spender must be a hex string"
                      );
                    return;
                  }
                  throw x.rpc.invalidParams();
                }
              })(e);
              let t = (function (e) {
                  var t, n, r;
                  if (void 0 !== e.params) return e;
                  let a =
                      null == (t = d.getState().account.accounts)
                        ? void 0
                        : t[0],
                    i =
                      null == (n = d.getState().account.chain) ? void 0 : n.id,
                    s =
                      null == (r = d.getState().subAccount)
                        ? void 0
                        : r.address;
                  if (!a || !s || !i)
                    throw x.rpc.invalidParams(
                      "FetchPermissions - one or more of account, sub account, or chain id is missing, connect to sub account via wallet_connect first"
                    );
                  return {
                    method: "coinbase_fetchPermissions",
                    params: [
                      {
                        account: a,
                        chainId: (0, eC.numberToHex)(i),
                        spender: s,
                      },
                    ],
                  };
                })(e),
                n = await Y(t, en),
                r = (0, eE.hexToNumber)(
                  null == (y = t.params) ? void 0 : y[0].chainId
                );
              return (
                d.spendPermissions.set(
                  n.permissions.map((e) =>
                    Object.assign(Object.assign({}, e), { chainId: r })
                  )
                ),
                n
              );
            }
            default:
              if (!this.chain.rpcUrl)
                throw x.rpc.internal("No RPC URL set for chain");
              return Y(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            a = await this.decryptResponseMessage(r);
          return this.handleResponse(e, a);
        }
        async handleResponse(e, t) {
          var n, r, a, i, s;
          let o = t.result;
          if ("error" in o) throw o.error;
          switch (e.method) {
            case "eth_requestAccounts": {
              let e = o.value;
              (this.accounts = e),
                d.account.set({ accounts: e, chain: this.chain }),
                null == (n = this.callback) ||
                  n.call(this, "accountsChanged", e);
              break;
            }
            case "wallet_connect": {
              let e = o.value,
                t = e.accounts.map((e) => e.address);
              (this.accounts = t), d.account.set({ accounts: t });
              let n = e.accounts.at(0),
                s = null == n ? void 0 : n.capabilities;
              if (null == s ? void 0 : s.subAccounts) {
                let e = null == s ? void 0 : s.subAccounts;
                eU(e, "subAccounts"),
                  eW(e[0]),
                  d.subAccounts.set({
                    address: e[0].address,
                    factory: e[0].factory,
                    factoryData: e[0].factoryData,
                  });
              }
              let c = [this.accounts[0]],
                u = d.subAccounts.get(),
                l = d.subAccountsConfig.get();
              (null == u ? void 0 : u.address) &&
                (this.accounts = (null == l ? void 0 : l.enableAutoSubAccounts)
                  ? tA(this.accounts, u.address)
                  : tS(this.accounts, u.address));
              let h =
                null ==
                (a =
                  null == (r = null == e ? void 0 : e.accounts)
                    ? void 0
                    : r[0].capabilities)
                  ? void 0
                  : a.spendPermissions;
              h &&
                "permissions" in h &&
                d.spendPermissions.set(null == h ? void 0 : h.permissions),
                null == (i = this.callback) ||
                  i.call(this, "accountsChanged", c);
              break;
            }
            case "wallet_addSubAccount": {
              eW(o.value);
              let e = o.value;
              d.subAccounts.set(e);
              let t = d.subAccountsConfig.get();
              (this.accounts = (null == t ? void 0 : t.enableAutoSubAccounts)
                ? tA(this.accounts, e.address)
                : tS(this.accounts, e.address)),
                null == (s = this.callback) ||
                  s.call(this, "accountsChanged", this.accounts);
            }
          }
          return o.value;
        }
        async cleanup() {
          var e, t;
          let n = d.config.get().metadata;
          await this.keyManager.clear(),
            d.account.clear(),
            d.subAccounts.clear(),
            d.spendPermissions.clear(),
            d.chains.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t =
                  null == (e = null == n ? void 0 : n.appChainIds)
                    ? void 0
                    : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          tb(e.params);
          let t = J(e.params[0].chainId);
          if (this.updateChain(t)) return null;
          let n = await this.sendRequestToPopup(e);
          return null === n && this.updateChain(t), n;
        }
        async handleGetCapabilitiesRequest(e) {
          var t = e.params;
          if (
            !t ||
            !Array.isArray(t) ||
            (1 !== t.length && 2 !== t.length) ||
            "string" != typeof t[0] ||
            !(0, eq.isAddress)(t[0])
          )
            throw x.rpc.invalidParams();
          if (2 === t.length) {
            if (!Array.isArray(t[1])) throw x.rpc.invalidParams();
            for (let e of t[1])
              if ("string" != typeof e || !e.startsWith("0x"))
                throw x.rpc.invalidParams();
          }
          let n = e.params[0],
            r = e.params[1];
          if (!this.accounts.some((e) => (0, e_.isAddressEqual)(e, n)))
            throw x.provider.unauthorized(
              "no active account found when getting capabilities"
            );
          let a = d.getState().account.capabilities;
          if (!a) return {};
          if (!r || 0 === r.length) return a;
          let i = new Set(r.map((e) => (0, eE.hexToNumber)(e)));
          return Object.fromEntries(
            Object.entries(a).filter((e) => {
              let [t] = e;
              try {
                let e = (0, eE.hexToNumber)(t);
                return i.has(e);
              } catch (e) {
                return !1;
              }
            })
          );
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw x.provider.unauthorized(
              "No shared secret found when encrypting request"
            );
          let n = await eQ({ action: e, chainId: this.chain.id }, t),
            r = eT.get(e),
            a = await this.createRequestMessage({ encrypted: n }, r);
          return this.communicator.postRequestAndWaitForResponse(a);
        }
        async createRequestMessage(e, t) {
          let n = await eJ("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            correlationId: t,
            sender: n,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n, r;
          let a = e.content;
          if ("failure" in a) throw a.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i)
            throw x.provider.unauthorized(
              "Invalid session: no shared secret found when decrypting response"
            );
          let s = await e$(a.encrypted, i),
            o = null == (t = s.data) ? void 0 : t.chains;
          if (o) {
            let e = null == (n = s.data) ? void 0 : n.nativeCurrencies,
              t = Object.entries(o).map((t) => {
                let [n, r] = t,
                  a = null == e ? void 0 : e[Number(n)];
                return Object.assign(
                  { id: Number(n), rpcUrl: r },
                  a ? { nativeCurrency: a } : {}
                );
              });
            d.chains.set(t), this.updateChain(this.chain.id, t), eD(t);
          }
          let c = null == (r = s.data) ? void 0 : r.capabilities;
          return c && d.account.set({ capabilities: c }), s;
        }
        updateChain(e, t) {
          var n;
          let r = d.getState(),
            a = null != t ? t : r.chains,
            i = null == a ? void 0 : a.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              d.account.set({ chain: i }),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", U(i.id))),
            !0)
          );
        }
        async addSubAccount(e) {
          var t, n, r, a;
          let i = d.getState().subAccount,
            s = d.subAccountsConfig.get();
          if (null == i ? void 0 : i.address)
            return (
              (this.accounts = (null == s ? void 0 : s.enableAutoSubAccounts)
                ? tA(this.accounts, i.address)
                : tS(this.accounts, i.address)),
              null == (t = this.callback) ||
                t.call(this, "accountsChanged", this.accounts),
              i
            );
          if (
            (await (null == (r = (n = this.communicator).waitForPopupLoaded)
              ? void 0
              : r.call(n)),
            Array.isArray(e.params) &&
              e.params.length > 0 &&
              e.params[0].account &&
              "create" === e.params[0].account.type)
          ) {
            let t;
            if (e.params[0].account.keys && e.params[0].account.keys.length > 0)
              t = e.params[0].account.keys;
            else {
              let e = null != (a = d.subAccountsConfig.get()) ? a : {},
                { account: n } = e.toOwnerAccount
                  ? await e.toOwnerAccount()
                  : await tn();
              if (!n)
                throw x.provider.unauthorized(
                  "could not get subaccount owner account when adding sub account"
                );
              t = [
                {
                  type: n.address ? "address" : "webauthn-p256",
                  publicKey: n.address || n.publicKey,
                },
              ];
            }
            e.params[0].account.keys = t;
          }
          let o = await this.sendRequestToPopup(e);
          return eW(o), o;
        }
        shouldRequestUseSubAccountSigner(e) {
          let t = tg(e),
            n = d.subAccounts.get();
          return (
            !!t &&
            t.toLowerCase() === (null == n ? void 0 : n.address.toLowerCase())
          );
        }
        async sendRequestToSubAccountSigner(e) {
          var a;
          let i = d.subAccounts.get(),
            s = d.subAccountsConfig.get(),
            o = d.config.get();
          eB(
            null == i ? void 0 : i.address,
            x.provider.unauthorized(
              "no active sub account when sending request to sub account signer"
            )
          );
          let c = (null == s ? void 0 : s.toOwnerAccount)
            ? await s.toOwnerAccount()
            : await tn();
          eB(
            null == c ? void 0 : c.account,
            x.provider.unauthorized(
              "no active sub account owner when sending request to sub account signer"
            )
          ),
            void 0 === tg(e) &&
              (e = (function (e, t) {
                if (!Array.isArray(e.params)) throw x.rpc.invalidParams();
                let n = [...e.params];
                switch (e.method) {
                  case "eth_signTransaction":
                  case "eth_sendTransaction":
                  case "wallet_sendCalls":
                    n[0].from = t;
                    break;
                  case "eth_signTypedData_v4":
                    n[0] = t;
                    break;
                  case "personal_sign":
                    n[1] = t;
                }
                return Object.assign(Object.assign({}, e), { params: n });
              })(e, i.address));
          let u = eR(this.chain.id);
          eB(
            u,
            x.rpc.internal(
              "client not found for chainId ".concat(
                this.chain.id,
                " when sending request to sub account signer"
              )
            )
          );
          let l = this.accounts.find(
            (e) => e.toLowerCase() !== i.address.toLowerCase()
          );
          eB(
            l,
            x.provider.unauthorized(
              "no global account found when sending request to sub account signer"
            )
          );
          let h = (function (e) {
              let { attribution: t, dappOrigin: n } = e;
              if (t) {
                if ("auto" in t && t.auto && n)
                  return (0, tu.slice)(
                    (0, tc.keccak256)((0, eC.toHex)(n)),
                    0,
                    16
                  );
                if ("dataSuffix" in t) return t.dataSuffix;
              }
            })({
              attribution: null == (a = o.preference) ? void 0 : a.attribution,
              dappOrigin: window.location.origin,
            }),
            p =
              "local" === c.account.type
                ? c.account.address
                : c.account.publicKey,
            m = await t$({
              address: i.address,
              factory: i.factory,
              factoryData: i.factoryData,
              publicKey: p,
              client: u,
            });
          if (-1 === m) {
            let a = eT.get(e);
            ((e) => {
              var a;
              let { method: i, correlationId: s } = e;
              ea(
                "scw_sub_account.add_owner.started",
                {
                  action: n.unknown,
                  componentType: t.unknown,
                  method: i,
                  correlationId: s,
                  enableAutoSubAccounts:
                    null == (a = d.subAccountsConfig.get())
                      ? void 0
                      : a.enableAutoSubAccounts,
                },
                r.high
              );
            })({ method: e.method, correlationId: a });
            try {
              (m = await t1({
                ownerAccount: c.account,
                globalAccountRequest: this.sendRequestToPopup.bind(this),
              })),
                ((e) => {
                  var a;
                  let { method: i, correlationId: s } = e;
                  ea(
                    "scw_sub_account.add_owner.completed",
                    {
                      action: n.unknown,
                      componentType: t.unknown,
                      method: i,
                      correlationId: s,
                      enableAutoSubAccounts:
                        null == (a = d.subAccountsConfig.get())
                          ? void 0
                          : a.enableAutoSubAccounts,
                    },
                    r.high
                  );
                })({ method: e.method, correlationId: a });
            } catch (i) {
              return (
                ((e) => {
                  var a;
                  let { method: i, correlationId: s, errorMessage: o } = e;
                  ea(
                    "scw_sub_account.add_owner.error",
                    {
                      action: n.error,
                      componentType: t.unknown,
                      method: i,
                      correlationId: s,
                      errorMessage: o,
                      enableAutoSubAccounts:
                        null == (a = d.subAccountsConfig.get())
                          ? void 0
                          : a.enableAutoSubAccounts,
                    },
                    r.high
                  );
                })({ method: e.method, correlationId: a, errorMessage: eO(i) }),
                x.provider.unauthorized(
                  "failed to add sub account owner when sending request to sub account signer"
                )
              );
            }
          }
          let { request: f } = await tV({
            address: i.address,
            owner: c.account,
            client: u,
            factory: i.factory,
            factoryData: i.factoryData,
            parentAddress: l,
            attribution: h ? { suffix: h } : void 0,
            ownerIndex: m,
          });
          try {
            return await f(e);
          } catch (o) {
            let a;
            if (C(o)) a = JSON.parse(o.details);
            else if (_(o)) a = o;
            else throw o;
            if (!(_(a) && a.data) || !a.data) throw o;
            let s = eT.get(e);
            ((e) => {
              var a;
              let { method: i, correlationId: s } = e;
              ea(
                "scw_sub_account.insufficient_balance.error_handling.started",
                {
                  action: n.unknown,
                  componentType: t.unknown,
                  method: i,
                  correlationId: s,
                  enableAutoSubAccounts:
                    null == (a = d.subAccountsConfig.get())
                      ? void 0
                      : a.enableAutoSubAccounts,
                },
                r.high
              );
            })({ method: e.method, correlationId: s });
            try {
              let o = await t3({
                errorData: a.data,
                globalAccountAddress: l,
                subAccountAddress: i.address,
                client: u,
                request: e,
                subAccountRequest: f,
                globalAccountRequest: this.request.bind(this),
              });
              return (
                ((e) => {
                  var a;
                  let { method: i, correlationId: s } = e;
                  ea(
                    "scw_sub_account.insufficient_balance.error_handling.completed",
                    {
                      action: n.unknown,
                      componentType: t.unknown,
                      method: i,
                      correlationId: s,
                      enableAutoSubAccounts:
                        null == (a = d.subAccountsConfig.get())
                          ? void 0
                          : a.enableAutoSubAccounts,
                    },
                    r.high
                  );
                })({ method: e.method, correlationId: s }),
                o
              );
            } catch (a) {
              throw (
                (console.error(a),
                ((e) => {
                  var a;
                  let { method: i, correlationId: s, errorMessage: o } = e;
                  ea(
                    "scw_sub_account.insufficient_balance.error_handling.error",
                    {
                      action: n.error,
                      componentType: t.unknown,
                      method: i,
                      correlationId: s,
                      errorMessage: o,
                      enableAutoSubAccounts:
                        null == (a = d.subAccountsConfig.get())
                          ? void 0
                          : a.enableAutoSubAccounts,
                    },
                    r.high
                  );
                })({ method: e.method, correlationId: s, errorMessage: eO(a) }),
                o)
              );
            }
          }
        }
        constructor(e) {
          var t, n, r, a;
          (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new to());
          let { account: i, chains: s } = d.getState();
          (this.accounts = null != (t = i.accounts) ? t : []),
            (this.chain =
              null != (n = i.chain)
                ? n
                : {
                    id:
                      null !=
                      (a = null == (r = e.metadata.appChainIds) ? void 0 : r[0])
                        ? a
                        : 1,
                  }),
            s && eD(s);
        }
      }
      let t4 = () => {
        ea(
          "walletlink_signer.walletlink_connection.connection_failed",
          { action: n.measurement, componentType: t.unknown },
          r.high
        );
      };
      var t6 = e.i(892071);
      let t8 = "Addresses";
      class t7 {
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey(
              "raw",
              L(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            a = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              r,
              a.encode(e)
            ),
            s = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(s),
            u = new Uint8Array(o);
          return N(new Uint8Array([...n, ...c, ...u]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, r) => {
            (async () => {
              let a = await crypto.subtle.importKey(
                  "raw",
                  L(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = L(e),
                s = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                u = { name: "AES-GCM", iv: new Uint8Array(s) };
              try {
                let e = await window.crypto.subtle.decrypt(u, a, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
        constructor(e) {
          this.secret = e;
        }
      }
      class t9 {
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(
                ""
                  .concat(this.linkAPIUrl, "/events/")
                  .concat(e.eventId, "/seen"),
                { method: "POST", headers: { Authorization: this.auth } }
              )
            )
          ).catch((e) => console.error("Unable to mark events as seen:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(
            "".concat(this.linkAPIUrl, "/events?unseen=true"),
            { headers: { Authorization: this.auth } }
          );
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error("Check unseen events failed: ".concat(r));
            let a =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(a), a;
          }
          throw Error("Check unseen events failed: ".concat(t.status));
        }
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = "".concat(t, ":").concat(n);
          this.auth = "Basic ".concat(btoa(r));
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(a || (a = {}));
      class ne {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          if (this.isDisconnecting)
            throw Error(
              "WebSocket is disconnecting, cannot reconnect on same instance"
            );
          return new Promise((e, t) => {
            var n;
            let r;
            try {
              this.webSocket = r = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, a.CONNECTING),
              (r.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  r.readyState !== WebSocket.OPEN &&
                    t(
                      Error(
                        "websocket error ".concat(e.code, ": ").concat(e.reason)
                      )
                    ),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, a.DISCONNECTED);
              }),
              (r.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, a.CONNECTED),
                  ne.pendingData.length > 0 &&
                    ([...ne.pendingData].forEach((e) => this.sendData(e)),
                    (ne.pendingData = []));
              }),
              (r.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            (this.isDisconnecting = !0),
              this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, a.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            ne.pendingData.push(e), this.isDisconnecting || this.connect();
            return;
          }
          if (t.readyState !== WebSocket.OPEN)
            return void ne.pendingData.push(e);
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
        cleanup() {
          ne.activeInstances.delete(this.instanceId);
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.isDisconnecting = !1),
            (this.url = e.replace(/^http/, "ws")),
            (this.instanceId = ne.instanceCounter++),
            ne.activeInstances.add(this.instanceId);
        }
      }
      (ne.instanceCounter = 0),
        (ne.activeInstances = new Set()),
        (ne.pendingData = []);
      class nt {
        createWebSocket() {
          let e = new ne(
            "".concat(this.linkAPIUrl, "/rpc"),
            this.WebSocketClass
          );
          return (
            (this.activeWsInstance = e),
            e.setConnectionStateListener(async (t) => {
              if (e !== this.activeWsInstance) return;
              let n = !1;
              switch (t) {
                case a.DISCONNECTED:
                  this.heartbeatIntervalId &&
                    (clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = void 0)),
                    (this.lastHeartbeatResponse = 0),
                    (n = !1),
                    this.destroyed ||
                      (async () => {
                        if (this.isReconnecting) return;
                        this.isReconnecting = !0;
                        let t = 3e3 * (0 !== this.reconnectAttempts);
                        await new Promise((e) => setTimeout(e, t)),
                          this.destroyed || e !== this.activeWsInstance
                            ? (this.isReconnecting = !1)
                            : (this.reconnectAttempts++,
                              "cleanup" in this.ws &&
                                "function" == typeof this.ws.cleanup &&
                                this.ws.cleanup(),
                              (this.ws = this.createWebSocket()),
                              this.ws
                                .connect()
                                .catch(() => {
                                  t4();
                                })
                                .finally(() => {
                                  this.isReconnecting = !1;
                                }));
                      })();
                  break;
                case a.CONNECTED:
                  this.reconnectAttempts = 0;
                  try {
                    (n = await this.handleConnected()),
                      this.fetchUnseenEventsAPI().catch(() => {});
                  } catch (e) {
                    break;
                  }
                  (this.connected = n),
                    this.updateLastHeartbeat(),
                    this.heartbeatIntervalId &&
                      clearInterval(this.heartbeatIntervalId),
                    (this.heartbeatIntervalId = window.setInterval(() => {
                      this.heartbeat();
                    }, 1e4)),
                    setTimeout(() => {
                      this.heartbeat();
                    }, 100);
                case a.CONNECTING:
              }
              t !== a.CONNECTED && (this.connected = n);
            }),
            e.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            e
          );
        }
        setupVisibilityChangeHandler() {
          (this.visibilityChangeHandler = () => {
            document.hidden ||
              this.destroyed ||
              (this.connected
                ? this.heartbeat()
                : this.reconnectWithFreshWebSocket());
          }),
            (this.focusHandler = () => {
              this.destroyed ||
                this.connected ||
                this.reconnectWithFreshWebSocket();
            }),
            document.addEventListener(
              "visibilitychange",
              this.visibilityChangeHandler
            ),
            window.addEventListener("focus", this.focusHandler),
            window.addEventListener("pageshow", (e) => {
              e.persisted && this.focusHandler && this.focusHandler();
            });
        }
        reconnectWithFreshWebSocket() {
          if (this.destroyed) return;
          let e = this.ws;
          (this.activeWsInstance = void 0),
            e.disconnect(),
            "cleanup" in e && "function" == typeof e.cleanup && e.cleanup(),
            (this.ws = this.createWebSocket()),
            this.ws.connect().catch(() => {
              t4();
            });
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: O(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            (this.activeWsInstance = void 0),
            this.heartbeatIntervalId &&
              (clearInterval(this.heartbeatIntervalId),
              (this.heartbeatIntervalId = void 0)),
            this.visibilityChangeHandler &&
              document.removeEventListener(
                "visibilitychange",
                this.visibilityChangeHandler
              ),
            this.focusHandler &&
              window.removeEventListener("focus", this.focusHandler),
            this.ws.disconnect(),
            "cleanup" in this.ws &&
              "function" == typeof this.ws.cleanup &&
              this.ws.cleanup(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" === e.type && "Web3Response" === e.event)
            try {
              let n = await this.cipher.decrypt(e.data),
                r = JSON.parse(n);
              if ("WEB3_RESPONSE" !== r.type) return;
              null == (t = this.listener) ||
                t.handleWeb3ResponseMessage(r.id, r.response);
            } catch (e) {}
        }
        async checkUnseenEvents() {
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          try {
            (await this.http.fetchUnseenEvents()).forEach((e) => {
              this.handleIncomingEvent(e);
            });
          } catch (e) {
            ea(
              "walletlink_signer.walletlink_connection.fetch_unseen_events_failed",
              { action: n.measurement, componentType: t.unknown },
              r.high
            );
          }
        }
        async publishEvent(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            a = {
              type: "PublishEvent",
              id: O(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(a);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          if (this.connected)
            try {
              this.ws.sendData("h");
            } catch (e) {}
        }
        async makeRequest(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { timeout: 6e4 },
            r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, a) => {
                t = window.setTimeout(() => {
                  a(Error("request ".concat(r, " timed out")));
                }, n.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (n) => {
                  clearTimeout(t), e(n), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: O(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: O(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: O(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = O(1)),
            (this.reconnectAttempts = 0),
            (this.isReconnecting = !1),
            (this._connected = !1),
            (this._linked = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              try {
                let n = await this.cipher.decrypt(e);
                null == (t = this.listener) || t.accountUpdated(n);
              } catch (e) {}
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.metadataUpdated(e, r);
              } catch (e) {}
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              try {
                let r = await this.cipher.decrypt(e),
                  a = await this.cipher.decrypt(t);
                null == (n = this.listener) || n.chainUpdated(r, a);
              } catch (e) {}
            }),
            (this.session = e),
            (this.cipher = new t7(e.secret)),
            (this.listener = n),
            (this.linkAPIUrl = t),
            (this.WebSocketClass = WebSocket);
          let r = this.createWebSocket();
          (this.ws = r),
            (this.http = new t9(t, e.id, e.key)),
            this.setupVisibilityChangeHandler();
        }
      }
      class nn {
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = W(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
      }
      function nr(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (n.length > 0 && !n.includes(e.length))
          throw Error(
            "Uint8Array expected of length "
              .concat(n, ", not of length=")
              .concat(e.length)
          );
      }
      function na(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      "object" == typeof globalThis &&
        "crypto" in globalThis &&
        globalThis.crypto;
      let ni = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        ns = (e, t) => (e << (32 - t)) | (e >>> t);
      new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      let no = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function nc(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(
                  "utf8ToBytes expected string, got ".concat(typeof e)
                );
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          nr(e),
          e
        );
      }
      class nu {
        clone() {
          return this._cloneInto();
        }
      }
      let nl = (e, t, n) => (e & t) ^ (~e & n),
        nd = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      class nh extends nu {
        update(e) {
          na(this);
          let { view: t, buffer: n, blockLen: r } = this,
            a = (e = nc(e)).length;
          for (let i = 0; i < a; ) {
            let s = Math.min(r - this.pos, a - i);
            if (s === r) {
              let t = ni(e);
              for (; r <= a - i; i += r) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + s), this.pos),
              (this.pos += s),
              (i += s),
              this.pos === r && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          na(this);
          nr(e);
          let t = this.outputLen;
          if (e.length < t)
            throw Error(
              "digestInto() expects output buffer of length at least ".concat(t)
            );
          this.finished = !0;
          let { buffer: n, view: r, blockLen: a, isLE: i } = this,
            { pos: s } = this;
          (n[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > a - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < a; e++) n[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let a = BigInt(32),
              i = BigInt(0xffffffff),
              s = Number((n >> a) & i),
              o = Number(n & i),
              c = 4 * !!r,
              u = 4 * !r;
            e.setUint32(t + c, s, r), e.setUint32(t + u, o, r);
          })(r, a - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let o = ni(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: a,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = a),
            (e.destroyed = i),
            r % t && e.buffer.set(n),
            e
          );
        }
        constructor(e, t, n, r) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = ni(this.buffer));
        }
      }
      let np = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        nm = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        nf = new Uint32Array(64);
      class ng extends nh {
        get() {
          let { A: e, B: t, C: n, D: r, E: a, F: i, G: s, H: o } = this;
          return [e, t, n, r, a, i, s, o];
        }
        set(e, t, n, r, a, i, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | a),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) nf[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = nf[e - 15],
              n = nf[e - 2],
              r = ns(t, 7) ^ ns(t, 18) ^ (t >>> 3),
              a = ns(n, 17) ^ ns(n, 19) ^ (n >>> 10);
            nf[e] = (a + nf[e - 7] + r + nf[e - 16]) | 0;
          }
          let { A: n, B: r, C: a, D: i, E: s, F: o, G: c, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (u +
                  (ns(s, 6) ^ ns(s, 11) ^ ns(s, 25)) +
                  nl(s, o, c) +
                  np[e] +
                  nf[e]) |
                0,
              l = ((ns(n, 2) ^ ns(n, 13) ^ ns(n, 22)) + nd(n, r, a)) | 0;
            (u = c),
              (c = o),
              (o = s),
              (s = (i + t) | 0),
              (i = a),
              (a = r),
              (r = n),
              (n = (t + l) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (a = (a + this.C) | 0),
            (i = (i + this.D) | 0),
            (s = (s + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, a, i, s, o, c, u);
        }
        roundClean() {
          nf.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | nm[0]),
            (this.B = 0 | nm[1]),
            (this.C = 0 | nm[2]),
            (this.D = 0 | nm[3]),
            (this.E = 0 | nm[4]),
            (this.F = 0 | nm[5]),
            (this.G = 0 | nm[6]),
            (this.H = 0 | nm[7]);
        }
      }
      let nb = (function (e) {
          let t = (t) => e().update(nc(t)).digest(),
            n = e();
          return (
            (t.outputLen = n.outputLen),
            (t.blockLen = n.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new ng()),
        ny = "session:id",
        nw = "session:secret",
        nv = "session:linked";
      class nk {
        static create(e) {
          return new nk(e, j(16), j(32)).save();
        }
        static load(e) {
          let t = e.getItem(ny),
            n = e.getItem(nv),
            r = e.getItem(nw);
          return t && r ? new nk(e, t, r, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(ny, this.id),
            this.storage.setItem(nw, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(nv, this._linked ? "1" : "0");
        }
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (function (e) {
              nr(e);
              let t = "";
              for (let n = 0; n < e.length; n++) t += no[e[n]];
              return t;
            })(nb("".concat(t, ", ").concat(n, " WalletLink")))),
            (this._linked = !!r);
        }
      }
      class nx {
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            eo();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, eu.render)(null, this.root),
            e &&
              (0, eu.render)(
                (0, eu.h)(
                  nA,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
        constructor() {
          (this.root = null), (this.darkMode = ed());
        }
      }
      let nA = (e) => {
        let {
          title: t,
          buttonText: n,
          darkMode: r,
          onButtonClick: a,
          onDismiss: i,
        } = e;
        return (0, eu.h)(
          ep,
          { darkMode: r },
          (0, eu.h)(
            "div",
            { class: "-cbwsdk-redirect-dialog" },
            (0, eu.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
            ),
            (0, eu.h)("div", {
              class: "-cbwsdk-redirect-dialog-backdrop",
              onClick: i,
            }),
            (0, eu.h)(
              "div",
              {
                class: (0, ec.clsx)(
                  "-cbwsdk-redirect-dialog-box",
                  r ? "dark" : "light"
                ),
              },
              (0, eu.h)("p", null, t),
              (0, eu.h)("button", { onClick: a }, n)
            )
          )
        );
      };
      class nS {
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectToCoinbaseWallet(e),
            setTimeout(() => {
              this.redirectDialog.present({
                title: "Redirecting to Coinbase Wallet...",
                buttonText: "Open",
                onButtonClick: () => {
                  this.redirectToCoinbaseWallet(e);
                },
              });
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
        constructor() {
          (this.attached = !1), (this.redirectDialog = new nx());
        }
      }
      class nI {
        subscribe() {
          let e = nk.load(this.storage) || nk.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new nt({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new nS() : new eg();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = nk.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && eS.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: B(e.weiValue),
              data: D(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? B(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? B(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? B(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? B(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: B(e.weiValue),
              data: D(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? B(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? B(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? B(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? B(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: D(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = j(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((a, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), ek(e))) return i(Error(e.errorMessage));
                a(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof nS)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            nI.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              nI.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let a =
            null != (r = null == n ? void 0 : n.message)
              ? r
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: a });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            r = j(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (ek(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              nI.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, a, i) {
          let s = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: a },
                chainId: i,
              },
            },
            o = null,
            c = j(8),
            u = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, s.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: u,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ek(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        addEthereumChain(e, t, n, r, a, i) {
          let s = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: a,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = j(8),
            u = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, s.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: u,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ek(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, s);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            a = j(8),
            i = (e) => {
              this.publishWeb3RequestCanceledEvent(a),
                this.handleErrorResponse(a, n.method, e),
                null == r || r();
            };
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: i,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(a, (n) =>
                (null == r || r(), ek(n) && n.errorCode)
                  ? t(
                      x.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : ek(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(a, n);
            })
          );
        }
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(t8);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  r = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  r ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                nI.accountRequestCallbackIds.size > 0 &&
                  (Array.from(nI.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  nI.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: r } = this.subscribe();
          (this._session = t),
            (this.connection = r),
            (this.relayEventManager = new nn()),
            (this.ui = n),
            this.ui.attach();
        }
      }
      nI.accountRequestCallbackIds = new Set();
      let nT = "DefaultChainId",
        nE = "DefaultJsonRpcUrl";
      class n_ {
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake(e) {
          let a = "eth_requestAccounts",
            i = eT.get(e);
          ((e) => {
            let { method: a, correlationId: i } = e;
            ea(
              "walletlink_signer.handshake.started",
              {
                action: n.unknown,
                componentType: t.unknown,
                method: a,
                correlationId: i,
              },
              r.high
            );
          })({ method: a, correlationId: i });
          try {
            await this._eth_requestAccounts(),
              ((e) => {
                let { method: a, correlationId: i } = e;
                ea(
                  "walletlink_signer.handshake.completed",
                  {
                    action: n.unknown,
                    componentType: t.unknown,
                    method: a,
                    correlationId: i,
                  },
                  r.high
                );
              })({ method: a, correlationId: i });
          } catch (e) {
            throw (
              (((e) => {
                let { method: a, correlationId: i, errorMessage: s } = e;
                ea(
                  "walletlink_signer.handshake.error",
                  {
                    action: n.error,
                    componentType: t.unknown,
                    method: a,
                    correlationId: i,
                    errorMessage: s,
                  },
                  r.high
                );
              })({ method: a, correlationId: i, errorMessage: eO(e) }),
              e)
            );
          }
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(nE)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(nE, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(nT, t.toString(10)),
            J(t) !== r &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", U(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw x.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw x.rpc.invalidParams(
              "Asset of type '".concat(t.type, "' is not supported")
            );
          if (!(null == t ? void 0 : t.options))
            throw x.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw x.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: r, symbol: a, image: i, decimals: s } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              r,
              a,
              s,
              i,
              null == n ? void 0 : n.toString()
            );
          return !ek(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if ((null == (t = r.rpcUrls) ? void 0 : t.length) === 0)
            throw x.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!r.chainName || "" === r.chainName.trim())
            throw x.rpc.invalidParams("chainName is a required field");
          if (!r.nativeCurrency)
            throw x.rpc.invalidParams("nativeCurrency is a required field");
          let a = Number.parseInt(r.chainId, 16);
          if (a === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: s = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: u = [],
              nativeCurrency: l,
            } = r,
            d = await i.addEthereumChain(a.toString(), s, u, o, c, l);
          if (ek(d)) return !1;
          if ((null == (n = d.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(s[0], a), null;
          throw x.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (ek(r)) throw r;
          let a = r.result;
          return (
            a.isApproved &&
              a.rpcUrl.length > 0 &&
              this.updateProviderInfo(a.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let r = e.map((e) => V(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null == (n = this.callback) || n.call(this, "accountsChanged", r),
            this._storage.setItem(t8, r.join(" ")));
        }
        async request(e) {
          let a = eT.get(e);
          ((e) => {
            let { method: a, correlationId: i } = e;
            ea(
              "walletlink_signer.request.started",
              {
                action: n.unknown,
                componentType: t.unknown,
                method: a,
                correlationId: i,
              },
              r.high
            );
          })({ method: e.method, correlationId: a });
          try {
            let i = await this._request(e);
            return (
              ((e) => {
                let { method: a, correlationId: i } = e;
                ea(
                  "walletlink_signer.request.completed",
                  {
                    action: n.unknown,
                    componentType: t.unknown,
                    method: a,
                    correlationId: i,
                  },
                  r.high
                );
              })({ method: e.method, correlationId: a }),
              i
            );
          } catch (i) {
            throw (
              (((e) => {
                let { method: a, correlationId: i, errorMessage: s } = e;
                ea(
                  "walletlink_signer.request.error",
                  {
                    action: n.error,
                    componentType: t.unknown,
                    method: a,
                    correlationId: i,
                    errorMessage: s,
                  },
                  r.high
                );
              })({ method: e.method, correlationId: a, errorMessage: eO(i) }),
              i)
            );
          }
        }
        async _request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return U(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw x.rpc.internal("No RPC URL set for chain");
              return Y(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = V(e);
          if (!this._addresses.map((e) => V(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? V(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? V(e.to) : null,
            r = null != e.value ? G(e.value) : BigInt(0),
            a = e.data ? Z(e.data) : m.Buffer.alloc(0),
            i = null != e.nonce ? J(e.nonce) : null,
            s = null != e.gasPrice ? G(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? G(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas ? G(e.maxPriorityFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: a,
            nonce: i,
            gasPriceInWei: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? G(e.gas) : null,
            chainId: e.chainId ? J(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw x.rpc.invalidParams();
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: R(n[0]),
                signature: R(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (ek(a)) throw a;
          return a.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(nT)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: U(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (ek(r)) throw r;
          if (!r.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(r.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: U(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign(e) {
          let { params: t } = e;
          if (!Array.isArray(t)) throw x.rpc.invalidParams();
          let n = t[1],
            r = t[0];
          this._ensureKnownAddress(n);
          let a = this.initializeRelay(),
            i = await a.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: V(n),
                message: R(r),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (ek(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (ek(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = Z(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (ek(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (ek(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw x.rpc.invalidParams();
          let r = n[+("eth_signTypedData_v1" === t)],
            a = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(r);
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: V(r),
                message: D(
                  {
                    eth_signTypedData_v1: t6.default.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: t6.default.hashForSignTypedData_v3,
                    eth_signTypedData_v4: t6.default.hashForSignTypedData_v4,
                    eth_signTypedData: t6.default.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw x.rpc.invalidParams(
                        "Not a JSON string or an object: ".concat(String(e))
                      );
                    })(a),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(a, null, 2),
                addPrefix: !1,
              },
            });
          if (ek(s)) throw s;
          return s.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new nI({
                linkAPIUrl: er,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new eS("walletlink", er)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(t8);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => V(e)));
          }
          this.initializeRelay();
        }
      }
      let nC = "SignerType",
        nO = new eS("CBWSDK", "SignerConfigurator");
      function nP(e) {
        if (e) return e instanceof t5 ? "scw" : "walletlink";
      }
      async function nM(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: r,
          callback: a,
        } = e;
        nj(t, n, a, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: r,
            }),
          },
          { data: s } = await t.postRequestAndWaitForResponse(i);
        return s;
      }
      async function nj(e, t, n, r) {
        await e.onMessage((e) => {
          let { event: t } = e;
          return "WalletLinkSessionRequest" === t;
        });
        let a = new n_({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: a.getSession() },
        }),
          await a.handshake(r),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      var nN = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, r = Object.getOwnPropertySymbols(e);
            a < r.length;
            a++
          )
            0 > t.indexOf(r[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        return n;
      };
      class nL extends eA {
        async request(e) {
          let a = crypto.randomUUID();
          eT.set(e, a),
            ((e) => {
              let { method: a, correlationId: i } = e;
              ea(
                "provider.request.started",
                {
                  action: n.unknown,
                  componentType: t.unknown,
                  method: a,
                  correlationId: i,
                },
                r.high
              );
            })({ method: e.method, correlationId: a });
          try {
            let i = await this._request(e);
            return (
              ((e) => {
                let { method: a, signerType: i, correlationId: s } = e;
                ea(
                  "provider.request.responded",
                  {
                    action: n.unknown,
                    componentType: t.unknown,
                    method: a,
                    signerType: i,
                    correlationId: s,
                  },
                  r.high
                );
              })({
                method: e.method,
                signerType: nP(this.signer),
                correlationId: a,
              }),
              i
            );
          } catch (i) {
            throw (
              (((e) => {
                let {
                  method: a,
                  correlationId: i,
                  signerType: s,
                  errorMessage: o,
                } = e;
                ea(
                  "provider.request.error",
                  {
                    action: n.error,
                    componentType: t.unknown,
                    method: a,
                    signerType: s,
                    correlationId: i,
                    errorMessage: o,
                  },
                  r.high
                );
              })({
                method: e.method,
                correlationId: a,
                signerType: nP(this.signer),
                errorMessage: i instanceof Error ? i.message : "",
              }),
              i)
            );
          } finally {
            eT.delete(e);
          }
        }
        async _request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw x.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw x.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw x.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw x.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t,
                    n = d.subAccountsConfig.get();
                  t = (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? "scw"
                    : await this.requestSignerSelection(e);
                  let r = this.initSigner(t);
                  "scw" === t && (null == n ? void 0 : n.enableAutoSubAccounts)
                    ? (await r.handshake({ method: "handshake" }),
                      await r.request(e))
                    : await r.handshake(e),
                    (this.signer = r),
                    nO.setItem(nC, t);
                  break;
                }
                case "wallet_connect": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return (this.signer = t), n;
                }
                case "wallet_sendCalls":
                case "wallet_sign": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return await Y(e, en);
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return U(1);
                default:
                  throw x.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === f.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e) {
                      var t, n;
                      let { shouldIncludeStack: r = !1 } =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        v(e, "code") &&
                        Number.isInteger((t = e.code)) &&
                        (g[t.toString()] || ((n = t) >= -32099 && n <= -32e3))
                      )
                        (a.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((a.message = e.message),
                              v(e, "data") && (a.data = e.data))
                            : ((a.message = y(a.code)),
                              (a.data = { originalError: w(e) }));
                      else
                        (a.code = f.rpc.internal),
                          (a.message = k(e, "message") ? e.message : b),
                          (a.data = { originalError: w(e) });
                      return (
                        r && (a.stack = k(e, "stack") ? e.stack : void 0), a
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: f.rpc.internal };
                        if (ek(e)) {
                          let n = e.errorMessage,
                            r =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? f.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", o),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            ea(
              "provider.enable_function.called",
              { action: n.measurement, componentType: t.unknown },
              r.high
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            eS.clearAll(),
            eT.clear(),
            this.emit(
              "disconnect",
              x.provider.disconnected("User initiated disconnection")
            );
        }
        async requestSignerSelection(e) {
          ea(
            "signer.selection.requested",
            { action: n.unknown, componentType: t.unknown },
            r.high
          );
          let a = await nM({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
          return (
            ea(
              "signer.selection.responded",
              { action: n.unknown, componentType: t.unknown, signerType: a },
              r.high
            ),
            a
          );
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: r,
            callback: a,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new t5({ metadata: n, callback: a, communicator: r });
            case "walletlink":
              return new n_({ metadata: n, callback: a });
          }
        }
        constructor(e) {
          var { metadata: a } = e,
            i = e.preference,
            { keysUrl: s } = i,
            o = nN(i, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = a),
            (this.preference = o),
            (this.communicator = new ev({
              url: s,
              metadata: a,
              preference: o,
            }));
          let c = nO.getItem(nC);
          c &&
            ((this.signer = this.initSigner(c)),
            ((e) => {
              let { signerType: a } = e;
              ea(
                "provider.signer.loaded_from_storage",
                {
                  action: n.measurement,
                  componentType: t.unknown,
                  signerType: a,
                },
                r.low
              );
            })({ signerType: c }));
        }
      }
      class nD {
        makeWeb3Provider() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { options: "all" };
          ee(t), !1 !== t.telemetry && h(), d.config.set({ preference: t });
          let n = { metadata: this.metadata, preference: t };
          return null != (e = X(n)) ? e : new nL(n);
        }
        getCoinbaseWalletLogo(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 240;
          switch (e) {
            case "standard":
            default:
              return (
                (t = n),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E "
                  )
              );
            case "circle":
              return (
                (t = n),
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E"
                  )
              );
            case "text":
              return (
                (t = (0.1 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E"
                  )
              );
            case "textWithLogo":
              return (
                (t = (0.25 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E"
                  )
              );
            case "textLight":
              return (
                (t = (0.1 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E"
                  )
              );
            case "textWithLogoLight":
              return (
                (t = (0.25 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E"
                  )
              );
          }
        }
        constructor(e) {
          d.persist.rehydrate(),
            (this.metadata = {
              appName: e.appName || "Dapp",
              appLogoUrl:
                e.appLogoUrl ||
                (function () {
                  let e =
                      document.querySelector('link[sizes="192x192"]') ||
                      document.querySelector('link[sizes="180x180"]') ||
                      document.querySelector('link[rel="icon"]') ||
                      document.querySelector('link[rel="shortcut icon"]'),
                    { protocol: t, host: n } = document.location,
                    r = e ? e.getAttribute("href") : null;
                  return !r ||
                    r.startsWith("javascript:") ||
                    r.startsWith("vbscript:")
                    ? "".concat(t, "//").concat(n, "/favicon.ico")
                    : r.startsWith("http://") ||
                      r.startsWith("https://") ||
                      r.startsWith("data:")
                    ? r
                    : r.startsWith("//")
                    ? t + r
                    : "".concat(t, "//").concat(n).concat(r);
                })(),
              appChainIds: e.appChainIds || [],
            }),
            d.config.set({ metadata: this.metadata }),
            Q();
        }
      }
      let nR = nD;
      e.s(
        {
          CoinbaseWalletSDK: () => nD,
          createCoinbaseWalletSDK: () => nU,
          default: () => nR,
          getCryptoKeyAccount: () => tn,
          removeCryptoKey: () => tr,
        },
        206210
      );
      let nB = { options: "all" };
      function nU(e) {
        var t, n, r, a;
        let i = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(nB, null != (t = e.preference) ? t : {}),
          paymasterUrls: e.paymasterUrls,
        };
        (null == (n = e.subAccounts) ? void 0 : n.toOwnerAccount) &&
          et(e.subAccounts.toOwnerAccount),
          d.subAccountsConfig.set({
            toOwnerAccount:
              null == (r = e.subAccounts) ? void 0 : r.toOwnerAccount,
            enableAutoSubAccounts:
              null == (a = e.subAccounts) ? void 0 : a.enableAutoSubAccounts,
          }),
          d.config.set(i),
          d.persist.rehydrate(),
          Q(),
          !1 !== i.preference.telemetry && h(),
          ee(i.preference);
        let s = null,
          o = {
            getProvider: () => (
              s ||
                (s = (function (e) {
                  var t;
                  let n = { metadata: e.metadata, preference: e.preference };
                  return null != (t = X(n)) ? t : new nL(n);
                })(i)),
              (s.sdk = o),
              s
            ),
            subAccount: {
              async create(e) {
                var t, n;
                return (
                  eB(
                    null == (t = d.getState().subAccount) ? void 0 : t.address,
                    Error("subaccount already exists")
                  ),
                  await (null == (n = o.getProvider())
                    ? void 0
                    : n.request({
                        method: "wallet_addSubAccount",
                        params: [{ version: "1", account: e }],
                      }))
                );
              },
              async get() {
                var e, t;
                let n = d.subAccounts.get();
                if (null == n ? void 0 : n.address) return n;
                let r =
                  null ==
                  (t = (
                    await (null == (e = o.getProvider())
                      ? void 0
                      : e.request({
                          method: "wallet_connect",
                          params: [{ version: "1", capabilities: {} }],
                        }))
                  ).accounts[0].capabilities)
                    ? void 0
                    : t.subAccounts;
                return Array.isArray(r) ? r[0] : null;
              },
              async addOwner(e) {
                var t, n;
                let { address: r, publicKey: a, chainId: i } = e,
                  s = d.subAccounts.get(),
                  c = d.account.get();
                eB(c, Error("account does not exist")),
                  eB(
                    null == s ? void 0 : s.address,
                    Error("subaccount does not exist")
                  );
                let u = [];
                if (a) {
                  let [e, t] = (0, tX.decodeAbiParameters)(
                    [{ type: "bytes32" }, { type: "bytes32" }],
                    a
                  );
                  u.push({
                    to: s.address,
                    data: (0, tj.encodeFunctionData)({
                      abi: tm,
                      functionName: "addOwnerPublicKey",
                      args: [e, t],
                    }),
                    value: (0, eC.toHex)(0),
                  });
                }
                return (
                  r &&
                    u.push({
                      to: s.address,
                      data: (0, tj.encodeFunctionData)({
                        abi: tm,
                        functionName: "addOwnerAddress",
                        args: [r],
                      }),
                      value: (0, eC.toHex)(0),
                    }),
                  await (null == (t = o.getProvider())
                    ? void 0
                    : t.request({
                        method: "wallet_sendCalls",
                        params: [
                          {
                            calls: u,
                            chainId: (0, eC.toHex)(i),
                            from: null == (n = c.accounts) ? void 0 : n[0],
                            version: "1",
                          },
                        ],
                      }))
                );
              },
              setToOwnerAccount(e) {
                et(e), d.subAccountsConfig.set({ toOwnerAccount: e });
              },
            },
          };
        return o;
      }
      e.i(264082), e.i(206210);
    },
  },
]);

//# sourceMappingURL=723470a375f135c8.js.map
