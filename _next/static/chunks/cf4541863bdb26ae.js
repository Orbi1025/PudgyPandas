(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    669188: [
      (e) => {
        "use strict";
        e.s(
          {
            _createCurveFields: () => Y,
            mulEndoUnsafe: () => j,
            negateCt: () => Z,
            normalizeZ: () => C,
            pippenger: () => k,
            wNAF: () => M,
          },
          669188
        );
        var t = e.i(806459);
        e.s(
          {
            Field: () => R,
            FpInvertBatch: () => x,
            FpSqrtEven: () => T,
            getMinHashLength: () => q,
            isNegativeLE: () => E,
            mapHashToField: () => A,
            mod: () => h,
            nLength: () => S,
            pow2: () => m,
            validateField: () => B,
          },
          882677
        );
        var r = e.i(458365);
        let n = BigInt(0),
          i = BigInt(1),
          o = BigInt(2),
          a = BigInt(3),
          s = BigInt(4),
          l = BigInt(5),
          f = BigInt(7),
          d = BigInt(8),
          u = BigInt(9),
          c = BigInt(16);
        function h(e, t) {
          let r = e % t;
          return r >= n ? r : t + r;
        }
        function m(e, t, r) {
          let i = e;
          for (; t-- > n; ) (i *= i), (i %= r);
          return i;
        }
        function g(e, t) {
          if (e === n) throw Error("invert: expected non-zero number");
          if (t <= n)
            throw Error("invert: expected positive modulus, got " + t);
          let r = h(e, t),
            o = t,
            a = n,
            s = i,
            l = i,
            f = n;
          for (; r !== n; ) {
            let e = o / r,
              t = o % r,
              n = a - l * e,
              i = s - f * e;
            (o = r), (r = t), (a = l), (s = f), (l = n), (f = i);
          }
          if (o !== i) throw Error("invert: does not exist");
          return h(a, t);
        }
        function p(e, t, r) {
          if (!e.eql(e.sqr(t), r)) throw Error("Cannot find square root");
        }
        function b(e, t) {
          let r = (e.ORDER + i) / s,
            n = e.pow(t, r);
          return p(e, n, t), n;
        }
        function y(e, t) {
          let r = (e.ORDER - l) / d,
            n = e.mul(t, o),
            i = e.pow(n, r),
            a = e.mul(t, i),
            s = e.mul(e.mul(a, o), i),
            f = e.mul(a, e.sub(s, e.ONE));
          return p(e, f, t), f;
        }
        function w(e) {
          if (e < a) throw Error("sqrt is not defined for small field");
          let t = e - i,
            r = 0;
          for (; t % o === n; ) (t /= o), r++;
          let s = o,
            l = R(e);
          for (; 1 === O(l, s); )
            if (s++ > 1e3)
              throw Error("Cannot find square root: probably non-prime P");
          if (1 === r) return b;
          let f = l.pow(s, t),
            d = (t + i) / o;
          return function (e, n) {
            if (e.is0(n)) return n;
            if (1 !== O(e, n)) throw Error("Cannot find square root");
            let o = r,
              a = e.mul(e.ONE, f),
              s = e.pow(n, t),
              l = e.pow(n, d);
            for (; !e.eql(s, e.ONE); ) {
              if (e.is0(s)) return e.ZERO;
              let t = 1,
                r = e.sqr(s);
              for (; !e.eql(r, e.ONE); )
                if ((t++, (r = e.sqr(r)), t === o))
                  throw Error("Cannot find square root");
              let n = i << BigInt(o - t - 1),
                f = e.pow(a, n);
              (o = t), (a = e.sqr(f)), (s = e.mul(s, a)), (l = e.mul(l, f));
            }
            return l;
          };
        }
        let E = (e, t) => (h(e, t) & i) === i,
          v = [
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
        function B(e) {
          let r = v.reduce((e, t) => ((e[t] = "function"), e), {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number",
          });
          return (0, t._validateObject)(e, r), e;
        }
        function x(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = Array(t.length).fill(r ? e.ZERO : void 0),
            i = t.reduce(
              (t, r, i) => (e.is0(r) ? t : ((n[i] = t), e.mul(t, r))),
              e.ONE
            ),
            o = e.inv(i);
          return (
            t.reduceRight(
              (t, r, i) =>
                e.is0(r) ? t : ((n[i] = e.mul(t, n[i])), e.mul(t, r)),
              o
            ),
            n
          );
        }
        function O(e, t) {
          let r = (e.ORDER - i) / o,
            n = e.pow(t, r),
            a = e.eql(n, e.ONE),
            s = e.eql(n, e.ZERO),
            l = e.eql(n, e.neg(e.ONE));
          if (!a && !s && !l) throw Error("invalid Legendre symbol result");
          return a ? 1 : s ? 0 : -1;
        }
        function S(e, t) {
          void 0 !== t && (0, r.anumber)(t);
          let n = void 0 !== t ? t : e.toString(2).length,
            i = Math.ceil(n / 8);
          return { nBitLength: n, nByteLength: i };
        }
        function R(e, r) {
          let o,
            m,
            E,
            v,
            B = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            O =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= n)
            throw Error("invalid field: expected ORDER > 0, got " + e);
          let T = !1;
          if ("object" == typeof r && null != r) {
            if (O.sqrt || B)
              throw Error("cannot specify opts in two arguments");
            r.BITS && (o = r.BITS),
              r.sqrt && (m = r.sqrt),
              "boolean" == typeof r.isLE && (B = r.isLE),
              "boolean" == typeof r.modOnDecode && (T = r.modOnDecode),
              (E = r.allowedLengths);
          } else "number" == typeof r && (o = r), O.sqrt && (m = O.sqrt);
          let { nBitLength: I, nByteLength: q } = S(e, o);
          if (q > 2048)
            throw Error("invalid field: expected ORDER of <= 2048 bytes");
          let A = Object.freeze({
            ORDER: e,
            isLE: B,
            BITS: I,
            BYTES: q,
            MASK: (0, t.bitMask)(I),
            ZERO: n,
            ONE: i,
            allowedLengths: E,
            create: (t) => h(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t)
                throw Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return n <= t && t < e;
            },
            is0: (e) => e === n,
            isValidNot0: (e) => !A.is0(e) && A.isValid(e),
            isOdd: (e) => (e & i) === i,
            neg: (t) => h(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => h(t * t, e),
            add: (t, r) => h(t + r, e),
            sub: (t, r) => h(t - r, e),
            mul: (t, r) => h(t * r, e),
            pow: (e, t) =>
              (function (e, t, r) {
                if (r < n)
                  throw Error("invalid exponent, negatives unsupported");
                if (r === n) return e.ONE;
                if (r === i) return t;
                let o = e.ONE,
                  a = t;
                for (; r > n; )
                  r & i && (o = e.mul(o, a)), (a = e.sqr(a)), (r >>= i);
                return o;
              })(A, e, t),
            div: (t, r) => h(t * g(r, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => g(t, e),
            sqrt:
              m ||
              ((t) => (
                v ||
                  (v =
                    e % s === a
                      ? b
                      : e % d === l
                      ? y
                      : e % c === u
                      ? (function (e) {
                          let t = R(e),
                            r = w(e),
                            n = r(t, t.neg(t.ONE)),
                            i = r(t, n),
                            o = r(t, t.neg(n)),
                            a = (e + f) / c;
                          return (e, t) => {
                            let r = e.pow(t, a),
                              s = e.mul(r, n),
                              l = e.mul(r, i),
                              f = e.mul(r, o),
                              d = e.eql(e.sqr(s), t),
                              u = e.eql(e.sqr(l), t);
                            (r = e.cmov(r, s, d)), (s = e.cmov(f, l, u));
                            let c = e.eql(e.sqr(s), t),
                              h = e.cmov(r, s, c);
                            return p(e, h, t), h;
                          };
                        })(e)
                      : w(e)),
                v(A, t)
              )),
            toBytes: (e) =>
              B ? (0, t.numberToBytesLE)(e, q) : (0, t.numberToBytesBE)(e, q),
            fromBytes: function (r) {
              let n =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1];
              if (E) {
                if (!E.includes(r.length) || r.length > q)
                  throw Error(
                    "Field.fromBytes: expected " + E + " bytes, got " + r.length
                  );
                let e = new Uint8Array(q);
                e.set(r, B ? 0 : e.length - r.length), (r = e);
              }
              if (r.length !== q)
                throw Error(
                  "Field.fromBytes: expected " + q + " bytes, got " + r.length
                );
              let i = B ? (0, t.bytesToNumberLE)(r) : (0, t.bytesToNumberBE)(r);
              if ((T && (i = h(i, e)), !n && !A.isValid(i)))
                throw Error("invalid field element: outside of range 0..ORDER");
              return i;
            },
            invertBatch: (e) => x(A, e),
            cmov: (e, t, r) => (r ? t : e),
          });
          return Object.freeze(A);
        }
        function T(e, t) {
          if (!e.isOdd) throw Error("Field doesn't have isOdd");
          let r = e.sqrt(t);
          return e.isOdd(r) ? e.neg(r) : r;
        }
        function I(e) {
          if ("bigint" != typeof e) throw Error("field order must be bigint");
          return Math.ceil(e.toString(2).length / 8);
        }
        function q(e) {
          let t = I(e);
          return t + Math.ceil(t / 2);
        }
        function A(e, r) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = e.length,
            a = I(r),
            s = q(r);
          if (o < 16 || o < s || o > 1024)
            throw Error("expected " + s + "-1024 bytes of input, got " + o);
          let l =
            h(
              n ? (0, t.bytesToNumberLE)(e) : (0, t.bytesToNumberBE)(e),
              r - i
            ) + i;
          return n
            ? (0, t.numberToBytesLE)(l, a)
            : (0, t.numberToBytesBE)(l, a);
        }
        let N = BigInt(0),
          F = BigInt(1);
        function Z(e, t) {
          let r = t.negate();
          return e ? r : t;
        }
        function C(e, t) {
          let r = x(
            e.Fp,
            t.map((e) => e.Z)
          );
          return t.map((t, n) => e.fromAffine(t.toAffine(r[n])));
        }
        function U(e, t) {
          if (!Number.isSafeInteger(e) || e <= 0 || e > t)
            throw Error(
              "invalid window size, expected [1.." + t + "], got W=" + e
            );
        }
        function H(e, r) {
          U(e, r);
          let n = Math.ceil(r / e) + 1,
            i = 2 ** (e - 1),
            o = 2 ** e;
          return {
            windows: n,
            windowSize: i,
            mask: (0, t.bitMask)(e),
            maxNumber: o,
            shiftBy: BigInt(e),
          };
        }
        function V(e, t, r) {
          let { windowSize: n, mask: i, maxNumber: o, shiftBy: a } = r,
            s = Number(e & i),
            l = e >> a;
          s > n && ((s -= o), (l += F));
          let f = t * n,
            d = f + Math.abs(s) - 1,
            u = 0 === s;
          return {
            nextN: l,
            offset: d,
            isZero: u,
            isNeg: s < 0,
            isNegF: t % 2 != 0,
            offsetF: f,
          };
        }
        let D = new WeakMap(),
          _ = new WeakMap();
        function P(e) {
          return _.get(e) || 1;
        }
        function L(e) {
          if (e !== N) throw Error("invalid wNAF");
        }
        class M {
          _unsafeLadder(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.ZERO,
              n = e;
            for (; t > N; )
              t & F && (r = r.add(n)), (n = n.double()), (t >>= F);
            return r;
          }
          precomputeWindow(e, t) {
            let { windows: r, windowSize: n } = H(t, this.bits),
              i = [],
              o = e,
              a = o;
            for (let e = 0; e < r; e++) {
              (a = o), i.push(a);
              for (let e = 1; e < n; e++) (a = a.add(o)), i.push(a);
              o = a.double();
            }
            return i;
          }
          wNAF(e, t, r) {
            if (!this.Fn.isValid(r)) throw Error("invalid scalar");
            let n = this.ZERO,
              i = this.BASE,
              o = H(e, this.bits);
            for (let e = 0; e < o.windows; e++) {
              let {
                nextN: a,
                offset: s,
                isZero: l,
                isNeg: f,
                isNegF: d,
                offsetF: u,
              } = V(r, e, o);
              (r = a), l ? (i = i.add(Z(d, t[u]))) : (n = n.add(Z(f, t[s])));
            }
            return L(r), { p: n, f: i };
          }
          wNAFUnsafe(e, t, r) {
            let n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : this.ZERO,
              i = H(e, this.bits);
            for (let e = 0; e < i.windows && r !== N; e++) {
              let { nextN: o, offset: a, isZero: s, isNeg: l } = V(r, e, i);
              if (((r = o), !s)) {
                let e = t[a];
                n = n.add(l ? e.negate() : e);
              }
            }
            return L(r), n;
          }
          getPrecomputes(e, t, r) {
            let n = D.get(t);
            return (
              n ||
                ((n = this.precomputeWindow(t, e)),
                1 !== e && ("function" == typeof r && (n = r(n)), D.set(t, n))),
              n
            );
          }
          cached(e, t, r) {
            let n = P(e);
            return this.wNAF(n, this.getPrecomputes(n, e, r), t);
          }
          unsafe(e, t, r, n) {
            let i = P(e);
            return 1 === i
              ? this._unsafeLadder(e, t, n)
              : this.wNAFUnsafe(i, this.getPrecomputes(i, e, r), t, n);
          }
          createCache(e, t) {
            U(t, this.bits), _.set(e, t), D.delete(e);
          }
          hasCache(e) {
            return 1 !== P(e);
          }
          constructor(e, t) {
            (this.BASE = e.BASE),
              (this.ZERO = e.ZERO),
              (this.Fn = e.Fn),
              (this.bits = t);
          }
        }
        function j(e, t, r, n) {
          let i = t,
            o = e.ZERO,
            a = e.ZERO;
          for (; r > N || n > N; )
            r & F && (o = o.add(i)),
              n & F && (a = a.add(i)),
              (i = i.double()),
              (r >>= F),
              (n >>= F);
          return { p1: o, p2: a };
        }
        function k(e, r, n, i) {
          if (!Array.isArray(n)) throw Error("array expected");
          n.forEach((t, r) => {
            if (!(t instanceof e)) throw Error("invalid point at index " + r);
          });
          if (!Array.isArray(i)) throw Error("array of scalars expected");
          i.forEach((e, t) => {
            if (!r.isValid(e)) throw Error("invalid scalar at index " + t);
          });
          let o = n.length,
            a = i.length;
          if (o !== a)
            throw Error("arrays of points and scalars must have equal length");
          let s = e.ZERO,
            l = (0, t.bitLen)(BigInt(o)),
            f = 1;
          l > 12 ? (f = l - 3) : l > 4 ? (f = l - 2) : l > 0 && (f = 2);
          let d = (0, t.bitMask)(f),
            u = Array(Number(d) + 1).fill(s),
            c = Math.floor((r.BITS - 1) / f) * f,
            h = s;
          for (let e = c; e >= 0; e -= f) {
            u.fill(s);
            for (let t = 0; t < a; t++) {
              let r = Number((i[t] >> BigInt(e)) & d);
              u[r] = u[r].add(n[t]);
            }
            let t = s;
            for (let e = u.length - 1, r = s; e > 0; e--)
              (r = r.add(u[e])), (t = t.add(r));
            if (((h = h.add(t)), 0 !== e))
              for (let e = 0; e < f; e++) h = h.double();
          }
          return h;
        }
        function z(e, t) {
          if (!t) return R(e);
          if (t.ORDER !== e)
            throw Error("Field.ORDER must match order: Fp == p, Fn == n");
          return B(t), t;
        }
        function Y(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!t || "object" != typeof t)
            throw Error("expected valid ".concat(e, " CURVE object"));
          for (let e of ["p", "n", "h"]) {
            let r = t[e];
            if (!("bigint" == typeof r && r > N))
              throw Error("CURVE.".concat(e, " must be positive bigint"));
          }
          let n = z(t.p, r.Fp),
            i = z(t.n, r.Fn);
          for (let r of ["Gx", "Gy", "a", "weierstrass" === e ? "b" : "d"])
            if (!n.isValid(t[r]))
              throw Error(
                "CURVE.".concat(r, " must be valid field element of CURVE.Fp")
              );
          return { Fp: n, Fn: i };
        }
      },
      [882677],
    ],
    459510: (e) => {
      "use strict";
      e.s({
        _DST_scalar: () => u,
        createHasher: () => c,
        expand_message_xmd: () => l,
        isogenyMap: () => d,
      });
      var t = e.i(806459),
        r = e.i(458365),
        n = e.i(882677);
      let i = t.bytesToNumberBE;
      function o(e, t) {
        if ((a(e), a(t), e < 0 || e >= 1 << (8 * t)))
          throw Error("invalid I2OSP input: " + e);
        let r = Array.from({ length: t }).fill(0);
        for (let n = t - 1; n >= 0; n--) (r[n] = 255 & e), (e >>>= 8);
        return new Uint8Array(r);
      }
      function a(e) {
        if (!Number.isSafeInteger(e)) throw Error("number expected");
      }
      function s(e) {
        if (!(0, r.isBytes)(e) && "string" != typeof e)
          throw Error("DST must be Uint8Array or string");
        return "string" == typeof e ? (0, r.utf8ToBytes)(e) : e;
      }
      function l(e, t, n, i) {
        (0, r.abytes)(e),
          a(n),
          (t = s(t)).length > 255 &&
            (t = i(
              (0, r.concatBytes)((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)
            ));
        let { outputLen: l, blockLen: f } = i,
          d = Math.ceil(n / l);
        if (n > 65535 || d > 255)
          throw Error("expand_message_xmd: invalid lenInBytes");
        let u = (0, r.concatBytes)(t, o(t.length, 1)),
          c = o(0, f),
          h = o(n, 2),
          m = Array(d),
          g = i((0, r.concatBytes)(c, e, h, o(0, 1), u));
        m[0] = i((0, r.concatBytes)(g, o(1, 1), u));
        for (let e = 1; e <= d; e++) {
          let t = [
            (function (e, t) {
              let r = new Uint8Array(e.length);
              for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
              return r;
            })(g, m[e - 1]),
            o(e + 1, 1),
            u,
          ];
          m[e] = i((0, r.concatBytes)(...t));
        }
        return (0, r.concatBytes)(...m).slice(0, n);
      }
      function f(e, f, d) {
        let u;
        (0, t._validateObject)(d, {
          p: "bigint",
          m: "number",
          k: "number",
          hash: "function",
        });
        let { p: c, k: h, m, hash: g, expand: p, DST: b } = d;
        if (!(0, t.isHash)(d.hash)) throw Error("expected valid hash");
        (0, r.abytes)(e), a(f);
        let y = Math.ceil((c.toString(2).length + h) / 8),
          w = f * m * y;
        if ("xmd" === p) u = l(e, b, w, g);
        else if ("xof" === p)
          u = (function (e, t, n, i, l) {
            if (((0, r.abytes)(e), a(n), (t = s(t)).length > 255)) {
              let e = Math.ceil((2 * i) / 8);
              t = l
                .create({ dkLen: e })
                .update((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"))
                .update(t)
                .digest();
            }
            if (n > 65535 || t.length > 255)
              throw Error("expand_message_xof: invalid lenInBytes");
            return l
              .create({ dkLen: n })
              .update(e)
              .update(o(n, 2))
              .update(t)
              .update(o(t.length, 1))
              .digest();
          })(e, b, w, h, g);
        else if ("_internal_pass" === p) u = e;
        else throw Error('expand must be "xmd" or "xof"');
        let E = Array(f);
        for (let e = 0; e < f; e++) {
          let t = Array(m);
          for (let r = 0; r < m; r++) {
            let o = y * (r + e * m),
              a = u.subarray(o, o + y);
            t[r] = (0, n.mod)(i(a), c);
          }
          E[e] = t;
        }
        return E;
      }
      function d(e, t) {
        let r = t.map((e) => Array.from(e).reverse());
        return (t, i) => {
          let [o, a, s, l] = r.map((r) =>
              r.reduce((r, n) => e.add(e.mul(r, t), n))
            ),
            [f, d] = (0, n.FpInvertBatch)(e, [a, l], !0);
          return (t = e.mul(o, f)), (i = e.mul(i, e.mul(s, d))), { x: t, y: i };
        };
      }
      let u = (0, r.utf8ToBytes)("HashToScalar-");
      function c(e, t, r) {
        if ("function" != typeof t) throw Error("mapToCurve() must be defined");
        function n(r) {
          return e.fromAffine(t(r));
        }
        function i(t) {
          let r = t.clearCofactor();
          return r.equals(e.ZERO) ? e.ZERO : (r.assertValidity(), r);
        }
        return {
          defaults: r,
          hashToCurve(e, t) {
            let o = f(e, 2, Object.assign({}, r, t)),
              a = n(o[0]),
              s = n(o[1]);
            return i(a.add(s));
          },
          encodeToCurve(e, t) {
            let o = r.encodeDST ? { DST: r.encodeDST } : {};
            return i(n(f(e, 1, Object.assign({}, r, o, t))[0]));
          },
          mapToCurve(e) {
            if (!Array.isArray(e)) throw Error("expected array of bigints");
            for (let t of e)
              if ("bigint" != typeof t)
                throw Error("expected array of bigints");
            return i(n(e));
          },
          hashToScalar: (t, n) =>
            f(
              t,
              1,
              Object.assign({}, r, { p: e.Fn.ORDER, m: 1, DST: u }, n)
            )[0][0],
        };
      }
    },
    391323: [
      (e) => {
        "use strict";
        e.s({}, 391323);
        var t = e.i(139333);
        e.s({ default: () => r }, 867968);
        let r = t.default;
        e.s({ EventEmitter: () => n.default }, 724195);
        var n = t;
      },
      [867968, 724195],
    ],
    703009: [
      (e) => {
        "use strict";
        e.s({ createCurve: () => y }, 703009),
          e.s(
            {
              _normFnElement: () => m,
              mapToCurveSimpleSWU: () => p,
              weierstrass: () => b,
            },
            41598
          );
        var t = e.i(46293),
          r = e.i(458365),
          n = e.i(806459),
          i = e.i(669188),
          o = e.i(882677);
        let a = (e, t) => (e + (e >= 0 ? t : -t) / u) / t;
        function s(e) {
          void 0 !== e.lowS && (0, n.abool)("lowS", e.lowS),
            void 0 !== e.prehash && (0, n.abool)("prehash", e.prehash);
        }
        let l = {
            Err: class extends Error {
              constructor(e = "") {
                super(e);
              }
            },
            _tlv: {
              encode: (e, t) => {
                let { Err: r } = l;
                if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
                if (1 & t.length) throw new r("tlv.encode: unpadded data");
                let i = t.length / 2,
                  o = (0, n.numberToHexUnpadded)(i);
                if ((o.length / 2) & 128)
                  throw new r("tlv.encode: long form length too big");
                let a =
                  i > 127
                    ? (0, n.numberToHexUnpadded)((o.length / 2) | 128)
                    : "";
                return (0, n.numberToHexUnpadded)(e) + a + o + t;
              },
              decode(e, t) {
                let { Err: r } = l,
                  n = 0;
                if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
                if (t.length < 2 || t[n++] !== e)
                  throw new r("tlv.decode: wrong tlv");
                let i = t[n++],
                  o = 0;
                if (128 & i) {
                  let e = 127 & i;
                  if (!e)
                    throw new r(
                      "tlv.decode(long): indefinite length not supported"
                    );
                  if (e > 4)
                    throw new r("tlv.decode(long): byte length is too big");
                  let a = t.subarray(n, n + e);
                  if (a.length !== e)
                    throw new r("tlv.decode: length bytes not complete");
                  if (0 === a[0])
                    throw new r("tlv.decode(long): zero leftmost byte");
                  for (let e of a) o = (o << 8) | e;
                  if (((n += e), o < 128))
                    throw new r("tlv.decode(long): not minimal encoding");
                } else o = i;
                let a = t.subarray(n, n + o);
                if (a.length !== o)
                  throw new r("tlv.decode: wrong value length");
                return { v: a, l: t.subarray(n + o) };
              },
            },
            _int: {
              encode(e) {
                let { Err: t } = l;
                if (e < f)
                  throw new t("integer: negative integers are not allowed");
                let r = (0, n.numberToHexUnpadded)(e);
                if (
                  (8 & Number.parseInt(r[0], 16) && (r = "00" + r),
                  1 & r.length)
                )
                  throw new t("unexpected DER parsing assertion: unpadded hex");
                return r;
              },
              decode(e) {
                let { Err: t } = l;
                if (128 & e[0])
                  throw new t("invalid signature integer: negative");
                if (0 === e[0] && !(128 & e[1]))
                  throw new t(
                    "invalid signature integer: unnecessary leading zero"
                  );
                return (0, n.bytesToNumberBE)(e);
              },
            },
            toSig(e) {
              let { Err: t, _int: r, _tlv: i } = l,
                o = (0, n.ensureBytes)("signature", e),
                { v: a, l: s } = i.decode(48, o);
              if (s.length)
                throw new t("invalid signature: left bytes after parsing");
              let { v: f, l: d } = i.decode(2, a),
                { v: u, l: c } = i.decode(2, d);
              if (c.length)
                throw new t("invalid signature: left bytes after parsing");
              return { r: r.decode(f), s: r.decode(u) };
            },
            hexFromSig(e) {
              let { _tlv: t, _int: r } = l,
                n = t.encode(2, r.encode(e.r)),
                i = t.encode(2, r.encode(e.s));
              return t.encode(48, n + i);
            },
          },
          f = BigInt(0),
          d = BigInt(1),
          u = BigInt(2),
          c = BigInt(3),
          h = BigInt(4);
        function m(e, t) {
          let r,
            { BYTES: i } = e;
          if ("bigint" == typeof t) r = t;
          else {
            let o = (0, n.ensureBytes)("private key", t);
            try {
              r = e.fromBytes(o);
            } catch (e) {
              throw Error(
                "invalid private key: expected ui8a of size "
                  .concat(i, ", got ")
                  .concat(typeof t)
              );
            }
          }
          if (!e.isValidNot0(r))
            throw Error("invalid private key: out of range [1..N-1]");
          return r;
        }
        function g(e) {
          return Uint8Array.of(e ? 2 : 3);
        }
        function p(e, t) {
          (0, o.validateField)(e);
          let { A: r, B: n, Z: i } = t;
          if (!e.isValid(r) || !e.isValid(n) || !e.isValid(i))
            throw Error("mapToCurveSimpleSWU: invalid opts");
          let a = (function (e, t) {
            let r = e.ORDER,
              n = f;
            for (let e = r - d; e % u === f; e /= u) n += d;
            let i = n,
              o = u << (i - d - d),
              a = o * u,
              s = (r - d) / a,
              l = (s - d) / u,
              m = a - d,
              g = e.pow(t, s),
              p = e.pow(t, (s + d) / u),
              b = (t, r) => {
                let n = g,
                  a = e.pow(r, m),
                  s = e.sqr(a);
                s = e.mul(s, r);
                let f = e.mul(t, s);
                (f = e.pow(f, l)),
                  (f = e.mul(f, a)),
                  (a = e.mul(f, r)),
                  (s = e.mul(f, t));
                let c = e.mul(s, a);
                f = e.pow(c, o);
                let h = e.eql(f, e.ONE);
                (a = e.mul(s, p)),
                  (f = e.mul(c, n)),
                  (s = e.cmov(a, s, h)),
                  (c = e.cmov(f, c, h));
                for (let t = i; t > d; t--) {
                  let r = t - u;
                  r = u << (r - d);
                  let i = e.pow(c, r),
                    o = e.eql(i, e.ONE);
                  (a = e.mul(s, n)),
                    (n = e.mul(n, n)),
                    (i = e.mul(c, n)),
                    (s = e.cmov(a, s, o)),
                    (c = e.cmov(i, c, o));
                }
                return { isValid: h, value: s };
              };
            if (e.ORDER % h === c) {
              let r = (e.ORDER - c) / h,
                n = e.sqrt(e.neg(t));
              b = (t, i) => {
                let o = e.sqr(i),
                  a = e.mul(t, i);
                o = e.mul(o, a);
                let s = e.pow(o, r);
                s = e.mul(s, a);
                let l = e.mul(s, n),
                  f = e.mul(e.sqr(s), i),
                  d = e.eql(f, t),
                  u = e.cmov(l, s, d);
                return { isValid: d, value: u };
              };
            }
            return b;
          })(e, i);
          if (!e.isOdd) throw Error("Field does not have .isOdd()");
          return (t) => {
            let s, l, f, d, u, c, h, m;
            (s = e.sqr(t)),
              (s = e.mul(s, i)),
              (l = e.sqr(s)),
              (l = e.add(l, s)),
              (f = e.add(l, e.ONE)),
              (f = e.mul(f, n)),
              (d = e.cmov(i, e.neg(l), !e.eql(l, e.ZERO))),
              (d = e.mul(d, r)),
              (l = e.sqr(f)),
              (c = e.sqr(d)),
              (u = e.mul(c, r)),
              (l = e.add(l, u)),
              (l = e.mul(l, f)),
              (c = e.mul(c, d)),
              (u = e.mul(c, n)),
              (l = e.add(l, u)),
              (h = e.mul(s, f));
            let { isValid: g, value: p } = a(l, c);
            (m = e.mul(s, t)),
              (m = e.mul(m, p)),
              (h = e.cmov(h, f, g)),
              (m = e.cmov(m, p, g));
            let b = e.isOdd(t) === e.isOdd(m);
            m = e.cmov(e.neg(m), m, b);
            let y = (0, o.FpInvertBatch)(e, [d], !0)[0];
            return { x: (h = e.mul(h, y)), y: m };
          };
        }
        function b(e) {
          let {
              CURVE: p,
              curveOpts: b,
              hash: y,
              ecdsaOpts: w,
            } = (function (e) {
              let { CURVE: t, curveOpts: r } = (function (e) {
                  let t = {
                      a: e.a,
                      b: e.b,
                      p: e.Fp.ORDER,
                      n: e.n,
                      h: e.h,
                      Gx: e.Gx,
                      Gy: e.Gy,
                    },
                    r = e.Fp,
                    n = e.allowedPrivateKeyLengths
                      ? Array.from(
                          new Set(
                            e.allowedPrivateKeyLengths.map((e) =>
                              Math.ceil(e / 2)
                            )
                          )
                        )
                      : void 0,
                    i = {
                      Fp: r,
                      Fn: (0, o.Field)(t.n, {
                        BITS: e.nBitLength,
                        allowedLengths: n,
                        modOnDecode: e.wrapPrivateKey,
                      }),
                      allowInfinityPoint: e.allowInfinityPoint,
                      endo: e.endo,
                      isTorsionFree: e.isTorsionFree,
                      clearCofactor: e.clearCofactor,
                      fromBytes: e.fromBytes,
                      toBytes: e.toBytes,
                    };
                  return { CURVE: t, curveOpts: i };
                })(e),
                n = {
                  hmac: e.hmac,
                  randomBytes: e.randomBytes,
                  lowS: e.lowS,
                  bits2int: e.bits2int,
                  bits2int_modN: e.bits2int_modN,
                };
              return { CURVE: t, curveOpts: r, hash: e.hash, ecdsaOpts: n };
            })(e),
            E = (function (e, i) {
              let a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              (0, r.ahash)(i),
                (0, n._validateObject)(
                  a,
                  {},
                  {
                    hmac: "function",
                    lowS: "boolean",
                    randomBytes: "function",
                    bits2int: "function",
                    bits2int_modN: "function",
                  }
                );
              let c = a.randomBytes || r.randomBytes,
                h =
                  a.hmac ||
                  function (e) {
                    for (
                      var n = arguments.length,
                        o = Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    return (0, t.hmac)(i, e, (0, r.concatBytes)(...o));
                  },
                { Fp: p, Fn: b } = e,
                { ORDER: y, BITS: w } = b,
                E = (0, o.getMinHashLength)(y),
                v = {
                  secret: b.BYTES,
                  public: 1 + p.BYTES,
                  publicUncompressed: 1 + 2 * p.BYTES,
                  signature: 2 * b.BYTES,
                  seed: E,
                };
              function B(e, t) {
                if (!b.isValidNot0(t))
                  throw Error(
                    "invalid signature ".concat(e, ": out of range 1..CURVE.n")
                  );
              }
              class x {
                static fromBytes(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "compact";
                  if ("compact" === t) {
                    let t = b.BYTES;
                    (0, r.abytes)(e, 2 * t);
                    let n = e.subarray(0, t),
                      i = e.subarray(t, 2 * t);
                    return new x(b.fromBytes(n), b.fromBytes(i));
                  }
                  if ("der" === t) {
                    (0, r.abytes)(e);
                    let { r: t, s: n } = l.toSig(e);
                    return new x(t, n);
                  }
                  throw Error("invalid format");
                }
                static fromHex(e, t) {
                  return this.fromBytes((0, r.hexToBytes)(e), t);
                }
                addRecoveryBit(e) {
                  return new x(this.r, this.s, e);
                }
                recoverPublicKey(t) {
                  let i = p.ORDER,
                    { r: o, s: a, recovery: s } = this;
                  if (null == s || ![0, 1, 2, 3].includes(s))
                    throw Error("recovery id invalid");
                  if (y * u < i && s > 1)
                    throw Error("recovery id is ambiguous for h>1 curve");
                  let l = 2 === s || 3 === s ? o + y : o;
                  if (!p.isValid(l)) throw Error("recovery id 2 or 3 invalid");
                  let f = p.toBytes(l),
                    d = e.fromHex((0, r.concatBytes)(g((1 & s) == 0), f)),
                    c = b.inv(l),
                    h = A((0, n.ensureBytes)("msgHash", t)),
                    m = b.create(-h * c),
                    w = b.create(a * c),
                    E = e.BASE.multiplyUnsafe(m).add(d.multiplyUnsafe(w));
                  if (E.is0()) throw Error("point at infinify");
                  return E.assertValidity(), E;
                }
                hasHighS() {
                  return this.s > y >> d;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new x(this.r, b.neg(this.s), this.recovery)
                    : this;
                }
                toBytes() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "compact";
                  if ("compact" === e)
                    return (0, r.concatBytes)(
                      b.toBytes(this.r),
                      b.toBytes(this.s)
                    );
                  if ("der" === e) return (0, r.hexToBytes)(l.hexFromSig(this));
                  throw Error("invalid format");
                }
                toHex(e) {
                  return (0, r.bytesToHex)(this.toBytes(e));
                }
                assertValidity() {}
                static fromCompact(e) {
                  return x.fromBytes((0, n.ensureBytes)("sig", e), "compact");
                }
                static fromDER(e) {
                  return x.fromBytes((0, n.ensureBytes)("sig", e), "der");
                }
                toDERRawBytes() {
                  return this.toBytes("der");
                }
                toDERHex() {
                  return (0, r.bytesToHex)(this.toBytes("der"));
                }
                toCompactRawBytes() {
                  return this.toBytes("compact");
                }
                toCompactHex() {
                  return (0, r.bytesToHex)(this.toBytes("compact"));
                }
                constructor(e, t, r) {
                  B("r", e),
                    B("s", t),
                    (this.r = e),
                    (this.s = t),
                    null != r && (this.recovery = r),
                    Object.freeze(this);
                }
              }
              function O(e) {
                try {
                  return !!m(b, e);
                } catch (e) {
                  return !1;
                }
              }
              function S() {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : c(E);
                return (0, o.mapHashToField)(e, y);
              }
              let R = {
                isValidSecretKey: O,
                isValidPublicKey: function (t, r) {
                  try {
                    let n = t.length;
                    if (
                      (!0 === r && n !== v.public) ||
                      (!1 === r && n !== v.publicUncompressed)
                    )
                      return !1;
                    return !!e.fromBytes(t);
                  } catch (e) {
                    return !1;
                  }
                },
                randomSecretKey: S,
                isValidPrivateKey: O,
                randomPrivateKey: S,
                normPrivateKeyToScalar: (e) => m(b, e),
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
              function T(t) {
                let r =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1];
                return e.BASE.multiply(m(b, t)).toBytes(r);
              }
              function I(t) {
                if ("bigint" == typeof t) return !1;
                if (t instanceof e) return !0;
                if (b.allowedLengths || v.secret === v.public) return;
                let r = (0, n.ensureBytes)("key", t).length;
                return r === v.public || r === v.publicUncompressed;
              }
              let q =
                  a.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let t = (0, n.bytesToNumberBE)(e),
                      r = 8 * e.length - w;
                    return r > 0 ? t >> BigInt(r) : t;
                  },
                A =
                  a.bits2int_modN ||
                  function (e) {
                    return b.create(q(e));
                  },
                N = (0, n.bitMask)(w);
              function F(e) {
                return (0, n.aInRange)("num < 2^" + w, e, f, N), b.toBytes(e);
              }
              let Z = { lowS: a.lowS, prehash: !1 },
                C = { lowS: a.lowS, prehash: !1 };
              return (
                e.BASE.precompute(8),
                Object.freeze({
                  keygen: function (e) {
                    let t = R.randomSecretKey(e);
                    return { secretKey: t, publicKey: T(t) };
                  },
                  getPublicKey: T,
                  sign: function (t, o) {
                    let a =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : Z,
                      { seed: l, k2sig: u } = (function (t, o) {
                        let a =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : Z;
                        if (["recovered", "canonical"].some((e) => e in a))
                          throw Error("sign() legacy options not supported");
                        let { lowS: l, prehash: u, extraEntropy: h } = a;
                        null == l && (l = !0),
                          (t = (0, n.ensureBytes)("msgHash", t)),
                          s(a),
                          u &&
                            (t = (0, n.ensureBytes)("prehashed msgHash", i(t)));
                        let g = A(t),
                          p = m(b, o),
                          w = [F(p), F(g)];
                        if (null != h && !1 !== h) {
                          let e = !0 === h ? c(v.secret) : h;
                          w.push((0, n.ensureBytes)("extraEntropy", e));
                        }
                        return {
                          seed: (0, r.concatBytes)(...w),
                          k2sig: function (t) {
                            var r;
                            let n = q(t);
                            if (!b.isValidNot0(n)) return;
                            let i = b.inv(n),
                              o = e.BASE.multiply(n).toAffine(),
                              a = b.create(o.x);
                            if (a === f) return;
                            let s = b.create(i * b.create(g + a * p));
                            if (s === f) return;
                            let u = (2 * (o.x !== a)) | Number(o.y & d),
                              c = s;
                            return (
                              l &&
                                s > y >> d &&
                                ((c = (r = s) > y >> d ? b.neg(r) : r),
                                (u ^= 1)),
                              new x(a, c, u)
                            );
                          },
                        };
                      })(t, o, a);
                    return (0, n.createHmacDrbg)(i.outputLen, b.BYTES, h)(l, u);
                  },
                  verify: function (t, o, a) {
                    let f,
                      d,
                      u =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : C;
                    (o = (0, n.ensureBytes)("msgHash", o)),
                      (a = (0, n.ensureBytes)("publicKey", a)),
                      s(u);
                    let { lowS: c, prehash: h, format: m } = u;
                    if ("strict" in u)
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 === m) {
                      let e = "string" == typeof t || (0, r.isBytes)(t),
                        n =
                          !e &&
                          null !== t &&
                          "object" == typeof t &&
                          "bigint" == typeof t.r &&
                          "bigint" == typeof t.s;
                      if (!e && !n)
                        throw Error(
                          "invalid signature, expected Uint8Array, hex string or Signature instance"
                        );
                      if (n) f = new x(t.r, t.s);
                      else if (e) {
                        try {
                          f = x.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof l.Err)) throw e;
                        }
                        if (!f)
                          try {
                            f = x.fromCompact(t);
                          } catch (e) {
                            return !1;
                          }
                      }
                    } else if ("compact" === m || "der" === m) {
                      if ("string" != typeof t && !(0, r.isBytes)(t))
                        throw Error(
                          '"der" / "compact" format expects Uint8Array signature'
                        );
                      f = x.fromBytes((0, n.ensureBytes)("sig", t), m);
                    } else if ("js" === m) {
                      if (!(t instanceof x))
                        throw Error('"js" format expects Signature instance');
                      f = t;
                    } else
                      throw Error('format must be "compact", "der" or "js"');
                    if (!f) return !1;
                    try {
                      if (((d = e.fromHex(a)), c && f.hasHighS())) return !1;
                      h && (o = i(o));
                      let { r: t, s: r } = f,
                        n = A(o),
                        s = b.inv(r),
                        l = b.create(n * s),
                        u = b.create(t * s),
                        m = e.BASE.multiplyUnsafe(l).add(d.multiplyUnsafe(u));
                      if (m.is0()) return !1;
                      return b.create(m.x) === t;
                    } catch (e) {
                      return !1;
                    }
                  },
                  getSharedSecret: function (t, r) {
                    let n =
                      !(arguments.length > 2) ||
                      void 0 === arguments[2] ||
                      arguments[2];
                    if (!0 === I(t))
                      throw Error("first arg must be private key");
                    if (!1 === I(r))
                      throw Error("second arg must be public key");
                    let i = m(b, t);
                    return e.fromHex(r).multiply(i).toBytes(n);
                  },
                  utils: R,
                  Point: e,
                  Signature: x,
                  info: {
                    type: "weierstrass",
                    lengths: v,
                    publicKeyHasPrefix: !0,
                  },
                })
              );
            })(
              (function (e) {
                var t, o;
                let s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { Fp: l, Fn: u } = (0, i._createCurveFields)(
                    "weierstrass",
                    e,
                    s
                  ),
                  { h: p, n: b } = e;
                (0, n._validateObject)(
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
                let { endo: y } = s;
                if (
                  y &&
                  (!l.is0(e.a) ||
                    "bigint" != typeof y.beta ||
                    !Array.isArray(y.basises))
                )
                  throw Error(
                    'invalid endo: expected "beta": bigint and "basises": array'
                  );
                function w() {
                  if (!l.isOdd)
                    throw Error(
                      "compression is not supported: Field does not have .isOdd()"
                    );
                }
                let E =
                    s.toBytes ||
                    function (e, t, i) {
                      let { x: o, y: a } = t.toAffine(),
                        s = l.toBytes(o);
                      if (((0, n.abool)("isCompressed", i), !i))
                        return (0, r.concatBytes)(
                          Uint8Array.of(4),
                          s,
                          l.toBytes(a)
                        );
                      {
                        w();
                        let e = !l.isOdd(a);
                        return (0, r.concatBytes)(g(e), s);
                      }
                    },
                  v =
                    s.fromBytes ||
                    function (e) {
                      (0, r.abytes)(e);
                      let t = l.BYTES,
                        n = t + 1,
                        i = 2 * t + 1,
                        o = e.length,
                        a = e[0],
                        s = e.subarray(1);
                      if (o === n && (2 === a || 3 === a)) {
                        let e,
                          t = l.fromBytes(s);
                        if (!l.isValid(t))
                          throw Error("bad point: is not on curve, wrong x");
                        let r = B(t);
                        try {
                          e = l.sqrt(r);
                        } catch (e) {
                          throw Error(
                            "bad point: is not on curve, sqrt error" +
                              (e instanceof Error ? ": " + e.message : "")
                          );
                        }
                        return (
                          w(),
                          ((1 & a) == 1) !== l.isOdd(e) && (e = l.neg(e)),
                          { x: t, y: e }
                        );
                      }
                      if (o === i && 4 === a) {
                        let e = l.fromBytes(s.subarray(0 * t, +t)),
                          r = l.fromBytes(s.subarray(+t, 2 * t));
                        if (!x(e, r)) throw Error("bad point: is not on curve");
                        return { x: e, y: r };
                      }
                      throw Error(
                        "bad point: got length "
                          .concat(o, ", expected compressed=")
                          .concat(n, " or uncompressed=")
                          .concat(i)
                      );
                    },
                  B =
                    ((t = e.a),
                    (o = e.b),
                    function (e) {
                      let r = l.sqr(e),
                        n = l.mul(r, e);
                      return l.add(l.add(n, l.mul(e, t)), o);
                    });
                function x(e, t) {
                  let r = l.sqr(t),
                    n = B(e);
                  return l.eql(r, n);
                }
                if (!x(e.Gx, e.Gy))
                  throw Error("bad curve params: generator point");
                let O = l.mul(l.pow(e.a, c), h),
                  S = l.mul(l.sqr(e.b), BigInt(27));
                if (l.is0(l.add(O, S))) throw Error("bad curve params: a or b");
                function R(e, t) {
                  let r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (!l.isValid(t) || (r && l.is0(t)))
                    throw Error("bad point coordinate ".concat(e));
                  return t;
                }
                function T(e) {
                  if (!(e instanceof F))
                    throw Error("ProjectivePoint expected");
                }
                function I(e) {
                  if (!y || !y.basises) throw Error("no endo");
                  return (function (e, t, r) {
                    let [[i, o], [s, l]] = t,
                      u = a(l * e, r),
                      c = a(-o * e, r),
                      h = e - u * i - c * s,
                      m = -u * o - c * l,
                      g = h < f,
                      p = m < f;
                    g && (h = -h), p && (m = -m);
                    let b = (0, n.bitMask)(Math.ceil((0, n.bitLen)(r) / 2)) + d;
                    if (h < f || h >= b || m < f || m >= b)
                      throw Error("splitScalar (endomorphism): failed, k=" + e);
                    return { k1neg: g, k1: h, k2neg: p, k2: m };
                  })(e, y.basises, u.ORDER);
                }
                let q = (0, n.memoized)((e, t) => {
                    let { X: r, Y: n, Z: i } = e;
                    if (l.eql(i, l.ONE)) return { x: r, y: n };
                    let o = e.is0();
                    null == t && (t = o ? l.ONE : l.inv(i));
                    let a = l.mul(r, t),
                      s = l.mul(n, t),
                      f = l.mul(i, t);
                    if (o) return { x: l.ZERO, y: l.ZERO };
                    if (!l.eql(f, l.ONE)) throw Error("invZ was invalid");
                    return { x: a, y: s };
                  }),
                  A = (0, n.memoized)((e) => {
                    if (e.is0()) {
                      if (s.allowInfinityPoint && !l.is0(e.Y)) return;
                      throw Error("bad point: ZERO");
                    }
                    let { x: t, y: r } = e.toAffine();
                    if (!l.isValid(t) || !l.isValid(r))
                      throw Error("bad point: x or y not field elements");
                    if (!x(t, r))
                      throw Error("bad point: equation left != right");
                    if (!e.isTorsionFree())
                      throw Error("bad point: not in prime-order subgroup");
                    return !0;
                  });
                function N(e, t, r, n, o) {
                  return (
                    (r = new F(l.mul(r.X, e), r.Y, r.Z)),
                    (t = (0, i.negateCt)(n, t)),
                    (r = (0, i.negateCt)(o, r)),
                    t.add(r)
                  );
                }
                class F {
                  static fromAffine(e) {
                    let { x: t, y: r } = e || {};
                    if (!e || !l.isValid(t) || !l.isValid(r))
                      throw Error("invalid affine point");
                    if (e instanceof F)
                      throw Error("projective point not allowed");
                    return l.is0(t) && l.is0(r) ? F.ZERO : new F(t, r, l.ONE);
                  }
                  get x() {
                    return this.toAffine().x;
                  }
                  get y() {
                    return this.toAffine().y;
                  }
                  get px() {
                    return this.X;
                  }
                  get py() {
                    return this.X;
                  }
                  get pz() {
                    return this.Z;
                  }
                  static normalizeZ(e) {
                    return (0, i.normalizeZ)(F, e);
                  }
                  static fromBytes(e) {
                    return (0, r.abytes)(e), F.fromHex(e);
                  }
                  static fromHex(e) {
                    let t = F.fromAffine(v((0, n.ensureBytes)("pointHex", e)));
                    return t.assertValidity(), t;
                  }
                  static fromPrivateKey(e) {
                    return F.BASE.multiply(m(u, e));
                  }
                  static msm(e, t) {
                    return (0, i.pippenger)(F, u, e, t);
                  }
                  _setWindowSize(e) {
                    this.precompute(e);
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
                    return C.createCache(this, e), t || this.multiply(c), this;
                  }
                  assertValidity() {
                    A(this);
                  }
                  hasEvenY() {
                    let { y: e } = this.toAffine();
                    if (!l.isOdd) throw Error("Field doesn't support isOdd");
                    return !l.isOdd(e);
                  }
                  equals(e) {
                    T(e);
                    let { X: t, Y: r, Z: n } = this,
                      { X: i, Y: o, Z: a } = e,
                      s = l.eql(l.mul(t, a), l.mul(i, n)),
                      f = l.eql(l.mul(r, a), l.mul(o, n));
                    return s && f;
                  }
                  negate() {
                    return new F(this.X, l.neg(this.Y), this.Z);
                  }
                  double() {
                    let { a: t, b: r } = e,
                      n = l.mul(r, c),
                      { X: i, Y: o, Z: a } = this,
                      s = l.ZERO,
                      f = l.ZERO,
                      d = l.ZERO,
                      u = l.mul(i, i),
                      h = l.mul(o, o),
                      m = l.mul(a, a),
                      g = l.mul(i, o);
                    return (
                      (g = l.add(g, g)),
                      (d = l.mul(i, a)),
                      (d = l.add(d, d)),
                      (s = l.mul(t, d)),
                      (f = l.mul(n, m)),
                      (f = l.add(s, f)),
                      (s = l.sub(h, f)),
                      (f = l.add(h, f)),
                      (f = l.mul(s, f)),
                      (s = l.mul(g, s)),
                      (d = l.mul(n, d)),
                      (m = l.mul(t, m)),
                      (g = l.sub(u, m)),
                      (g = l.mul(t, g)),
                      (g = l.add(g, d)),
                      (d = l.add(u, u)),
                      (u = l.add(d, u)),
                      (u = l.add(u, m)),
                      (u = l.mul(u, g)),
                      (f = l.add(f, u)),
                      (m = l.mul(o, a)),
                      (m = l.add(m, m)),
                      (u = l.mul(m, g)),
                      (s = l.sub(s, u)),
                      (d = l.mul(m, h)),
                      (d = l.add(d, d)),
                      new F(s, f, (d = l.add(d, d)))
                    );
                  }
                  add(t) {
                    T(t);
                    let { X: r, Y: n, Z: i } = this,
                      { X: o, Y: a, Z: s } = t,
                      f = l.ZERO,
                      d = l.ZERO,
                      u = l.ZERO,
                      h = e.a,
                      m = l.mul(e.b, c),
                      g = l.mul(r, o),
                      p = l.mul(n, a),
                      b = l.mul(i, s),
                      y = l.add(r, n),
                      w = l.add(o, a);
                    (y = l.mul(y, w)),
                      (w = l.add(g, p)),
                      (y = l.sub(y, w)),
                      (w = l.add(r, i));
                    let E = l.add(o, s);
                    return (
                      (w = l.mul(w, E)),
                      (E = l.add(g, b)),
                      (w = l.sub(w, E)),
                      (E = l.add(n, i)),
                      (f = l.add(a, s)),
                      (E = l.mul(E, f)),
                      (f = l.add(p, b)),
                      (E = l.sub(E, f)),
                      (u = l.mul(h, w)),
                      (f = l.mul(m, b)),
                      (u = l.add(f, u)),
                      (f = l.sub(p, u)),
                      (u = l.add(p, u)),
                      (d = l.mul(f, u)),
                      (p = l.add(g, g)),
                      (p = l.add(p, g)),
                      (b = l.mul(h, b)),
                      (w = l.mul(m, w)),
                      (p = l.add(p, b)),
                      (b = l.sub(g, b)),
                      (b = l.mul(h, b)),
                      (w = l.add(w, b)),
                      (g = l.mul(p, w)),
                      (d = l.add(d, g)),
                      (g = l.mul(E, w)),
                      (f = l.mul(y, f)),
                      (f = l.sub(f, g)),
                      (g = l.mul(y, p)),
                      (u = l.mul(E, u)),
                      new F(f, d, (u = l.add(u, g)))
                    );
                  }
                  subtract(e) {
                    return this.add(e.negate());
                  }
                  is0() {
                    return this.equals(F.ZERO);
                  }
                  multiply(e) {
                    let t,
                      r,
                      { endo: n } = s;
                    if (!u.isValidNot0(e))
                      throw Error("invalid scalar: out of range");
                    let o = (e) =>
                      C.cached(this, e, (e) => (0, i.normalizeZ)(F, e));
                    if (n) {
                      let { k1neg: i, k1: a, k2neg: s, k2: l } = I(e),
                        { p: f, f: d } = o(a),
                        { p: u, f: c } = o(l);
                      (r = d.add(c)), (t = N(n.beta, f, u, i, s));
                    } else {
                      let { p: n, f: i } = o(e);
                      (t = n), (r = i);
                    }
                    return (0, i.normalizeZ)(F, [t, r])[0];
                  }
                  multiplyUnsafe(e) {
                    let { endo: t } = s;
                    if (!u.isValid(e))
                      throw Error("invalid scalar: out of range");
                    if (e === f || this.is0()) return F.ZERO;
                    if (e === d) return this;
                    if (C.hasCache(this)) return this.multiply(e);
                    if (!t) return C.unsafe(this, e);
                    {
                      let { k1neg: r, k1: n, k2neg: o, k2: a } = I(e),
                        { p1: s, p2: l } = (0, i.mulEndoUnsafe)(F, this, n, a);
                      return N(t.beta, s, l, r, o);
                    }
                  }
                  multiplyAndAddUnsafe(e, t, r) {
                    let n = this.multiplyUnsafe(t).add(e.multiplyUnsafe(r));
                    return n.is0() ? void 0 : n;
                  }
                  toAffine(e) {
                    return q(this, e);
                  }
                  isTorsionFree() {
                    let { isTorsionFree: e } = s;
                    return (
                      p === d || (e ? e(F, this) : C.unsafe(this, b).is0())
                    );
                  }
                  clearCofactor() {
                    let { clearCofactor: e } = s;
                    return p === d
                      ? this
                      : e
                      ? e(F, this)
                      : this.multiplyUnsafe(p);
                  }
                  isSmallOrder() {
                    return this.multiplyUnsafe(p).is0();
                  }
                  toBytes() {
                    let e =
                      !(arguments.length > 0) ||
                      void 0 === arguments[0] ||
                      arguments[0];
                    return (
                      (0, n.abool)("isCompressed", e),
                      this.assertValidity(),
                      E(F, this, e)
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
                    return (0, r.bytesToHex)(this.toBytes(e));
                  }
                  toString() {
                    return "<Point ".concat(
                      this.is0() ? "ZERO" : this.toHex(),
                      ">"
                    );
                  }
                  constructor(e, t, r) {
                    (this.X = R("x", e)),
                      (this.Y = R("y", t, !0)),
                      (this.Z = R("z", r)),
                      Object.freeze(this);
                  }
                }
                (F.BASE = new F(e.Gx, e.Gy, l.ONE)),
                  (F.ZERO = new F(l.ZERO, l.ONE, l.ZERO)),
                  (F.Fp = l),
                  (F.Fn = u);
                let Z = u.BITS,
                  C = new i.wNAF(F, s.endo ? Math.ceil(Z / 2) : Z);
                return F;
              })(p, b),
              y,
              w
            );
          return Object.assign({}, E, { ProjectivePoint: E.Point, CURVE: e });
        }
        function y(e, t) {
          let r = (t) => b({ ...e, hash: t });
          return { ...r(t), create: r };
        }
      },
      [41598],
    ],
    721772: (e) => {
      "use strict";
      e.s({ secp256k1: () => h });
      var t = e.i(172322),
        r = e.i(458365),
        n = e.i(703009),
        i = e.i(459510),
        o = e.i(882677),
        a = e.i(41598),
        s = e.i(806459);
      let l = {
          p: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
          ),
          h: BigInt(1),
          a: BigInt(0),
          b: BigInt(7),
          Gx: BigInt(
            "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
          ),
          Gy: BigInt(
            "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
          ),
        },
        f = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
          ),
          basises: [
            [
              BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
            ],
            [
              BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            ],
          ],
        },
        d = BigInt(0),
        u = BigInt(2),
        c = (0, o.Field)(l.p, void 0, void 0, {
          sqrt: function (e) {
            let t = l.p,
              r = BigInt(3),
              n = BigInt(6),
              i = BigInt(11),
              a = BigInt(22),
              s = BigInt(23),
              f = BigInt(44),
              d = BigInt(88),
              h = (e * e * e) % t,
              m = (h * h * e) % t,
              g = ((0, o.pow2)(m, r, t) * m) % t,
              p = ((0, o.pow2)(g, r, t) * m) % t,
              b = ((0, o.pow2)(p, u, t) * h) % t,
              y = ((0, o.pow2)(b, i, t) * b) % t,
              w = ((0, o.pow2)(y, a, t) * y) % t,
              E = ((0, o.pow2)(w, f, t) * w) % t,
              v = ((0, o.pow2)(E, d, t) * E) % t,
              B = ((0, o.pow2)(v, f, t) * w) % t,
              x = ((0, o.pow2)(B, r, t) * m) % t,
              O = ((0, o.pow2)(x, s, t) * y) % t,
              S = ((0, o.pow2)(O, n, t) * h) % t,
              R = (0, o.pow2)(S, u, t);
            if (!c.eql(c.sqr(R), e)) throw Error("Cannot find square root");
            return R;
          },
        }),
        h = (0, n.createCurve)({ ...l, Fp: c, lowS: !0, endo: f }, t.sha256);
      h.Point;
      s.bytesToNumberBE;
      let m = (0, i.isogenyMap)(
          c,
          [
            [
              "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
              "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
              "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
              "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
            ],
            [
              "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
              "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
            [
              "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
              "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
              "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
              "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
            ],
            [
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
              "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
              "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
          ].map((e) => e.map((e) => BigInt(e)))
        ),
        g = (0, a.mapToCurveSimpleSWU)(c, {
          A: BigInt(
            "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
          ),
          B: BigInt("1771"),
          Z: c.create(BigInt("-11")),
        });
      (0, i.createHasher)(
        h.Point,
        (e) => {
          let { x: t, y: r } = g(c.create(e[0]));
          return m(t, r);
        },
        {
          DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
          encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
          p: c.ORDER,
          m: 1,
          k: 128,
          expand: "xmd",
          hash: t.sha256,
        }
      );
    },
  },
]);

//# sourceMappingURL=3fb23bcd7f4a77ab.js.map
