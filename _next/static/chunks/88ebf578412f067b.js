(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    491104: (e) => {
      "use strict";
      e.s(
        {
          encodeToCurve: () => eP,
          hashToCurve: () => eT,
          schnorr: () => eA,
          secp256k1: () => ep,
          secp256k1_hasher: () => eN,
        },
        491104
      );
      var t = e.i(172322),
        r = e.i(458365),
        n = e.i(46293);
      let i = BigInt(0),
        o = BigInt(1);
      function a(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function l(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function f(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? i : BigInt("0x" + e);
      }
      function s(e) {
        return f((0, r.bytesToHex)(e));
      }
      function u(e) {
        return (
          (0, r.abytes)(e), f((0, r.bytesToHex)(Uint8Array.from(e).reverse()))
        );
      }
      function d(e, t) {
        return (0, r.hexToBytes)(e.toString(16).padStart(2 * t, "0"));
      }
      function c(e, t) {
        return d(e, t).reverse();
      }
      function h(e, t, n) {
        let i;
        if ("string" == typeof t)
          try {
            i = (0, r.hexToBytes)(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if ((0, r.isBytes)(t)) i = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let o = i.length;
        if ("number" == typeof n && o !== n)
          throw Error(e + " of length " + n + " expected, got " + o);
        return i;
      }
      let m = (e) => "bigint" == typeof e && i <= e;
      function p(e, t, r) {
        return m(e) && m(t) && m(r) && t <= e && e < r;
      }
      function g(e, t, r, n) {
        if (!p(t, r, n))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
          );
      }
      let y = (e) => (o << BigInt(e)) - o;
      function b(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e || "object" != typeof e)
          throw Error("expected valid options object");
        function n(t, r, n) {
          let i = e[t];
          if (n && void 0 === i) return;
          let o = typeof i;
          if (o !== r || null === i)
            throw Error(
              'param "'
                .concat(t, '" is invalid: expected ')
                .concat(r, ", got ")
                .concat(o)
            );
        }
        Object.entries(t).forEach((e) => {
          let [t, r] = e;
          return n(t, r, !1);
        }),
          Object.entries(r).forEach((e) => {
            let [t, r] = e;
            return n(t, r, !0);
          });
      }
      function w(e) {
        let t = new WeakMap();
        return function (r) {
          for (
            var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            i[o - 1] = arguments[o];
          let a = t.get(r);
          if (void 0 !== a) return a;
          let l = e(r, ...i);
          return t.set(r, l), l;
        };
      }
      let E = BigInt(0),
        v = BigInt(1),
        B = BigInt(2),
        x = BigInt(3),
        O = BigInt(4),
        S = BigInt(5),
        R = BigInt(8);
      function A(e, t) {
        let r = e % t;
        return r >= E ? r : t + r;
      }
      function I(e, t, r) {
        let n = e;
        for (; t-- > E; ) (n *= n), (n %= r);
        return n;
      }
      function q(e, t) {
        if (e === E) throw Error("invert: expected non-zero number");
        if (t <= E) throw Error("invert: expected positive modulus, got " + t);
        let r = A(e, t),
          n = t,
          i = E,
          o = v,
          a = v,
          l = E;
        for (; r !== E; ) {
          let e = n / r,
            t = n % r,
            f = i - a * e,
            s = o - l * e;
          (n = r), (r = t), (i = a), (o = l), (a = f), (l = s);
        }
        if (n !== v) throw Error("invert: does not exist");
        return A(i, t);
      }
      function N(e, t) {
        let r = (e.ORDER + v) / O,
          n = e.pow(t, r);
        if (!e.eql(e.sqr(n), t)) throw Error("Cannot find square root");
        return n;
      }
      function T(e, t) {
        let r = (e.ORDER - S) / R,
          n = e.mul(t, B),
          i = e.pow(n, r),
          o = e.mul(t, i),
          a = e.mul(e.mul(o, B), i),
          l = e.mul(o, e.sub(a, e.ONE));
        if (!e.eql(e.sqr(l), t)) throw Error("Cannot find square root");
        return l;
      }
      let P = [
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
      function C(e) {
        return (
          b(
            e,
            P.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "number",
              BITS: "number",
            })
          ),
          e
        );
      }
      function U(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
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
      function V(e, t) {
        let r = (e.ORDER - v) / B,
          n = e.pow(t, r),
          i = e.eql(n, e.ONE),
          o = e.eql(n, e.ZERO),
          a = e.eql(n, e.neg(e.ONE));
        if (!i && !o && !a) throw Error("invalid Legendre symbol result");
        return i ? 1 : o ? 0 : -1;
      }
      function F(e, t) {
        let n,
          i,
          o,
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e <= E) throw Error("invalid field: expected ORDER > 0, got " + e);
        if ("object" == typeof t && null != t) {
          if (l.sqrt || a) throw Error("cannot specify opts in two arguments");
          t.BITS && (n = t.BITS),
            t.sqrt && (i = t.sqrt),
            "boolean" == typeof t.isLE && (a = t.isLE);
        } else "number" == typeof t && (n = t), l.sqrt && (i = l.sqrt);
        let { nBitLength: f, nByteLength: h } = (function (e, t) {
          void 0 !== t && (0, r.anumber)(t);
          let n = void 0 !== t ? t : e.toString(2).length,
            i = Math.ceil(n / 8);
          return { nBitLength: n, nByteLength: i };
        })(e, n);
        if (h > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let m = Object.freeze({
          ORDER: e,
          isLE: a,
          BITS: f,
          BYTES: h,
          MASK: y(f),
          ZERO: E,
          ONE: v,
          create: (t) => A(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return E <= t && t < e;
          },
          is0: (e) => e === E,
          isValidNot0: (e) => !m.is0(e) && m.isValid(e),
          isOdd: (e) => (e & v) === v,
          neg: (t) => A(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => A(t * t, e),
          add: (t, r) => A(t + r, e),
          sub: (t, r) => A(t - r, e),
          mul: (t, r) => A(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < E) throw Error("invalid exponent, negatives unsupported");
              if (r === E) return e.ONE;
              if (r === v) return t;
              let n = e.ONE,
                i = t;
              for (; r > E; )
                r & v && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= v);
              return n;
            })(m, e, t),
          div: (t, r) => A(t * q(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => q(t, e),
          sqrt:
            i ||
            ((t) => (
              o ||
                (o =
                  e % O === x
                    ? N
                    : e % R === S
                    ? T
                    : (function (e) {
                        if (e < BigInt(3))
                          throw Error("sqrt is not defined for small field");
                        let t = e - v,
                          r = 0;
                        for (; t % B === E; ) (t /= B), r++;
                        let n = B,
                          i = F(e);
                        for (; 1 === V(i, n); )
                          if (n++ > 1e3)
                            throw Error(
                              "Cannot find square root: probably non-prime P"
                            );
                        if (1 === r) return N;
                        let o = i.pow(n, t),
                          a = (t + v) / B;
                        return function (e, n) {
                          if (e.is0(n)) return n;
                          if (1 !== V(e, n))
                            throw Error("Cannot find square root");
                          let i = r,
                            l = e.mul(e.ONE, o),
                            f = e.pow(n, t),
                            s = e.pow(n, a);
                          for (; !e.eql(f, e.ONE); ) {
                            if (e.is0(f)) return e.ZERO;
                            let t = 1,
                              r = e.sqr(f);
                            for (; !e.eql(r, e.ONE); )
                              if ((t++, (r = e.sqr(r)), t === i))
                                throw Error("Cannot find square root");
                            let n = v << BigInt(i - t - 1),
                              o = e.pow(l, n);
                            (i = t),
                              (l = e.sqr(o)),
                              (f = e.mul(f, l)),
                              (s = e.mul(s, o));
                          }
                          return s;
                        };
                      })(e)),
              o(m, t)
            )),
          toBytes: (e) => (a ? c(e, h) : d(e, h)),
          fromBytes: (e) => {
            if (e.length !== h)
              throw Error(
                "Field.fromBytes: expected " + h + " bytes, got " + e.length
              );
            return a ? u(e) : s(e);
          },
          invertBatch: (e) => U(m, e),
          cmov: (e, t, r) => (r ? t : e),
        });
        return Object.freeze(m);
      }
      function Z(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function D(e) {
        let t = Z(e);
        return t + Math.ceil(t / 2);
      }
      let z = BigInt(0),
        K = BigInt(1);
      function H(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function _(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function j(e, t) {
        _(e, t);
        let r = Math.ceil(t / e) + 1,
          n = 2 ** (e - 1),
          i = 2 ** e;
        return {
          windows: r,
          windowSize: n,
          mask: y(e),
          maxNumber: i,
          shiftBy: BigInt(e),
        };
      }
      function k(e, t, r) {
        let { windowSize: n, mask: i, maxNumber: o, shiftBy: a } = r,
          l = Number(e & i),
          f = e >> a;
        l > n && ((l -= o), (f += K));
        let s = t * n,
          u = s + Math.abs(l) - 1,
          d = 0 === l;
        return {
          nextN: f,
          offset: u,
          isZero: d,
          isNeg: l < 0,
          isNegF: t % 2 != 0,
          offsetF: s,
        };
      }
      let L = new WeakMap(),
        M = new WeakMap();
      function G(e) {
        return M.get(e) || 1;
      }
      function W(e) {
        if (e !== z) throw Error("invalid wNAF");
      }
      function Y(e, t) {
        if (!t) return F(e);
        if (t.ORDER !== e)
          throw Error("Field.ORDER must match order: Fp == p, Fn == n");
        return C(t), t;
      }
      function X(e) {
        void 0 !== e.lowS && a("lowS", e.lowS),
          void 0 !== e.prehash && a("prehash", e.prehash);
      }
      let J = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = J;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              let n = t.length / 2,
                i = l(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let o = n > 127 ? l((i.length / 2) | 128) : "";
              return l(e) + o + i + t;
            },
            decode(e, t) {
              let { Err: r } = J,
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
              if (a.length !== o) throw new r("tlv.decode: wrong value length");
              return { v: a, l: t.subarray(n + o) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = J;
              if (e < Q)
                throw new t("integer: negative integers are not allowed");
              let r = l(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              let { Err: t } = J;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return s(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: n } = J,
              i = h("signature", e),
              { v: o, l: a } = n.decode(48, i);
            if (a.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: l, l: f } = n.decode(2, o),
              { v: s, l: u } = n.decode(2, f);
            if (u.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(l), s: r.decode(s) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = J,
              n = t.encode(2, r.encode(e.r)),
              i = t.encode(2, r.encode(e.s));
            return t.encode(48, n + i);
          },
        },
        Q = BigInt(0),
        $ = BigInt(1),
        ee = BigInt(2),
        et = BigInt(3),
        er = BigInt(4);
      function en(e, t, r) {
        let { BYTES: n } = e;
        return function (i) {
          let o;
          if ("bigint" == typeof i) o = i;
          else {
            let r = h("private key", i);
            if (t) {
              if (!t.includes(2 * r.length)) throw Error("invalid private key");
              let e = new Uint8Array(n);
              e.set(r, e.length - r.length), (r = e);
            }
            try {
              o = e.fromBytes(r);
            } catch (e) {
              throw Error(
                "invalid private key: expected ui8a of size "
                  .concat(n, ", got ")
                  .concat(typeof i)
              );
            }
          }
          if ((r && (o = e.create(o)), !e.isValidNot0(o)))
            throw Error("invalid private key: out of range [1..N-1]");
          return o;
        };
      }
      function ei(e) {
        return Uint8Array.of(e ? 2 : 3);
      }
      function eo(e, t) {
        if ((ea(e), ea(t), e < 0 || e >= 1 << (8 * t)))
          throw Error("invalid I2OSP input: " + e);
        let r = Array.from({ length: t }).fill(0);
        for (let n = t - 1; n >= 0; n--) (r[n] = 255 & e), (e >>>= 8);
        return new Uint8Array(r);
      }
      function ea(e) {
        if (!Number.isSafeInteger(e)) throw Error("number expected");
      }
      function el(e, t, n) {
        var i;
        let o;
        b(n, { p: "bigint", m: "number", k: "number", hash: "function" });
        let { p: a, k: l, m: f, hash: u, expand: d, DST: c } = n;
        if (!(0, r.isBytes)(c) && "string" != typeof c)
          throw Error("DST must be string or uint8array");
        if (
          !(
            "function" == typeof (i = n.hash) &&
            Number.isSafeInteger(i.outputLen)
          )
        )
          throw Error("expected valid hash");
        (0, r.abytes)(e), ea(t);
        let h = "string" == typeof c ? (0, r.utf8ToBytes)(c) : c,
          m = Math.ceil((a.toString(2).length + l) / 8),
          p = t * f * m;
        if ("xmd" === d)
          o = (function (e, t, n, i) {
            (0, r.abytes)(e),
              (0, r.abytes)(t),
              ea(n),
              t.length > 255 &&
                (t = i(
                  (0, r.concatBytes)((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)
                ));
            let { outputLen: o, blockLen: a } = i,
              l = Math.ceil(n / o);
            if (n > 65535 || l > 255)
              throw Error("expand_message_xmd: invalid lenInBytes");
            let f = (0, r.concatBytes)(t, eo(t.length, 1)),
              s = eo(0, a),
              u = eo(n, 2),
              d = Array(l),
              c = i((0, r.concatBytes)(s, e, u, eo(0, 1), f));
            d[0] = i((0, r.concatBytes)(c, eo(1, 1), f));
            for (let e = 1; e <= l; e++) {
              let t = [
                (function (e, t) {
                  let r = new Uint8Array(e.length);
                  for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
                  return r;
                })(c, d[e - 1]),
                eo(e + 1, 1),
                f,
              ];
              d[e] = i((0, r.concatBytes)(...t));
            }
            return (0, r.concatBytes)(...d).slice(0, n);
          })(e, h, p, u);
        else if ("xof" === d)
          o = (function (e, t, n, i, o) {
            if (((0, r.abytes)(e), (0, r.abytes)(t), ea(n), t.length > 255)) {
              let e = Math.ceil((2 * i) / 8);
              t = o
                .create({ dkLen: e })
                .update((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"))
                .update(t)
                .digest();
            }
            if (n > 65535 || t.length > 255)
              throw Error("expand_message_xof: invalid lenInBytes");
            return o
              .create({ dkLen: n })
              .update(e)
              .update(eo(n, 2))
              .update(t)
              .update(eo(t.length, 1))
              .digest();
          })(e, h, p, l, u);
        else if ("_internal_pass" === d) o = e;
        else throw Error('expand must be "xmd" or "xof"');
        let g = Array(t);
        for (let e = 0; e < t; e++) {
          let t = Array(f);
          for (let r = 0; r < f; r++) {
            let n = m * (r + e * f),
              i = o.subarray(n, n + m);
            t[r] = A(s(i), a);
          }
          g[e] = t;
        }
        return g;
      }
      let ef = {
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
        es = BigInt(0),
        eu = BigInt(1),
        ed = BigInt(2),
        ec = (e, t) => (e + t / ed) / t;
      function eh(e) {
        let t = ef.p,
          r = BigInt(3),
          n = BigInt(6),
          i = BigInt(11),
          o = BigInt(22),
          a = BigInt(23),
          l = BigInt(44),
          f = BigInt(88),
          s = (e * e * e) % t,
          u = (s * s * e) % t,
          d = (I(u, r, t) * u) % t,
          c = (I(d, r, t) * u) % t,
          h = (I(c, ed, t) * s) % t,
          m = (I(h, i, t) * h) % t,
          p = (I(m, o, t) * m) % t,
          g = (I(p, l, t) * p) % t,
          y = (I(g, f, t) * g) % t,
          b = (I(y, l, t) * p) % t,
          w = (I(b, r, t) * u) % t,
          E = (I(w, a, t) * m) % t,
          v = (I(E, n, t) * s) % t,
          B = I(v, ed, t);
        if (!em.eql(em.sqr(B), e)) throw Error("Cannot find square root");
        return B;
      }
      let em = F(ef.p, void 0, void 0, { sqrt: eh }),
        ep = (function (e, t) {
          let l = (t) =>
            (function (e) {
              let {
                  CURVE: t,
                  curveOpts: l,
                  ecdsaOpts: f,
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
                      r = {
                        Fp: e.Fp,
                        Fn: F(t.n, e.nBitLength),
                        allowedPrivateKeyLengths: e.allowedPrivateKeyLengths,
                        allowInfinityPoint: e.allowInfinityPoint,
                        endo: e.endo,
                        wrapPrivateKey: e.wrapPrivateKey,
                        isTorsionFree: e.isTorsionFree,
                        clearCofactor: e.clearCofactor,
                        fromBytes: e.fromBytes,
                        toBytes: e.toBytes,
                      };
                    return { CURVE: t, curveOpts: r };
                  })(e);
                  return {
                    CURVE: t,
                    curveOpts: r,
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
                m = (function (e, t) {
                  let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  b(
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
                  let o = t.randomBytes || r.randomBytes,
                    a =
                      t.hmac ||
                      function (e) {
                        for (
                          var i = arguments.length,
                            o = Array(i > 1 ? i - 1 : 0),
                            a = 1;
                          a < i;
                          a++
                        )
                          o[a - 1] = arguments[a];
                        return (0, n.hmac)(t.hash, e, (0, r.concatBytes)(...o));
                      },
                    { Fp: l, Fn: f } = e,
                    { ORDER: m, BITS: p } = f;
                  function w(e, t) {
                    if (!f.isValidNot0(t))
                      throw Error(
                        "invalid signature ".concat(
                          e,
                          ": out of range 1..CURVE.n"
                        )
                      );
                  }
                  class E {
                    static fromCompact(e) {
                      let t = f.BYTES,
                        r = h("compactSignature", e, 2 * t);
                      return new E(
                        f.fromBytes(r.subarray(0, t)),
                        f.fromBytes(r.subarray(t, 2 * t))
                      );
                    }
                    static fromDER(e) {
                      let { r: t, s: r } = J.toSig(h("DER", e));
                      return new E(t, r);
                    }
                    assertValidity() {}
                    addRecoveryBit(e) {
                      return new E(this.r, this.s, e);
                    }
                    recoverPublicKey(t) {
                      let n = l.ORDER,
                        { r: i, s: o, recovery: a } = this;
                      if (null == a || ![0, 1, 2, 3].includes(a))
                        throw Error("recovery id invalid");
                      if (m * ee < n && a > 1)
                        throw Error("recovery id is ambiguous for h>1 curve");
                      let s = 2 === a || 3 === a ? i + m : i;
                      if (!l.isValid(s))
                        throw Error("recovery id 2 or 3 invalid");
                      let u = l.toBytes(s),
                        d = e.fromHex((0, r.concatBytes)(ei((1 & a) == 0), u)),
                        c = f.inv(s),
                        p = S(h("msgHash", t)),
                        g = f.create(-p * c),
                        y = f.create(o * c),
                        b = e.BASE.multiplyUnsafe(g).add(d.multiplyUnsafe(y));
                      if (b.is0()) throw Error("point at infinify");
                      return b.assertValidity(), b;
                    }
                    hasHighS() {
                      return this.s > m >> $;
                    }
                    normalizeS() {
                      return this.hasHighS()
                        ? new E(this.r, f.neg(this.s), this.recovery)
                        : this;
                    }
                    toBytes(e) {
                      if ("compact" === e)
                        return (0, r.concatBytes)(
                          f.toBytes(this.r),
                          f.toBytes(this.s)
                        );
                      if ("der" === e)
                        return (0, r.hexToBytes)(J.hexFromSig(this));
                      throw Error("invalid format");
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
                      w("r", e),
                        w("s", t),
                        (this.r = e),
                        (this.s = t),
                        null != r && (this.recovery = r),
                        Object.freeze(this);
                    }
                  }
                  let B = en(f, i.allowedPrivateKeyLengths, i.wrapPrivateKey);
                  function x(t) {
                    if ("bigint" == typeof t) return !1;
                    if (t instanceof e) return !0;
                    let r = h("key", t).length,
                      n = l.BYTES,
                      o = n + 1;
                    if (!i.allowedPrivateKeyLengths && f.BYTES !== o)
                      return r === o || r === 2 * n + 1;
                  }
                  let O =
                      t.bits2int ||
                      function (e) {
                        if (e.length > 8192) throw Error("input is too large");
                        let t = s(e),
                          r = 8 * e.length - p;
                        return r > 0 ? t >> BigInt(r) : t;
                      },
                    S =
                      t.bits2int_modN ||
                      function (e) {
                        return f.create(O(e));
                      },
                    R = y(p);
                  function I(e) {
                    return g("num < 2^" + p, e, Q, R), f.toBytes(e);
                  }
                  let q = { lowS: t.lowS, prehash: !1 },
                    N = { lowS: t.lowS, prehash: !1 };
                  return (
                    e.BASE.precompute(8),
                    Object.freeze({
                      getPublicKey: function (t) {
                        let r =
                          !(arguments.length > 1) ||
                          void 0 === arguments[1] ||
                          arguments[1];
                        return e.fromPrivateKey(t).toBytes(r);
                      },
                      getSharedSecret: function (t, r) {
                        let n =
                          !(arguments.length > 2) ||
                          void 0 === arguments[2] ||
                          arguments[2];
                        if (!0 === x(t))
                          throw Error("first arg must be private key");
                        if (!1 === x(r))
                          throw Error("second arg must be public key");
                        return e.fromHex(r).multiply(B(t)).toBytes(n);
                      },
                      sign: function (n, i) {
                        let s =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : q,
                          { seed: u, k2sig: d } = (function (n, i) {
                            let a =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : q;
                            if (["recovered", "canonical"].some((e) => e in a))
                              throw Error(
                                "sign() legacy options not supported"
                              );
                            let { hash: s } = t,
                              { lowS: u, prehash: d, extraEntropy: c } = a;
                            null == u && (u = !0),
                              (n = h("msgHash", n)),
                              X(a),
                              d && (n = h("prehashed msgHash", s(n)));
                            let p = S(n),
                              g = B(i),
                              y = [I(g), I(p)];
                            if (null != c && !1 !== c) {
                              let e = !0 === c ? o(l.BYTES) : c;
                              y.push(h("extraEntropy", e));
                            }
                            return {
                              seed: (0, r.concatBytes)(...y),
                              k2sig: function (t) {
                                var r;
                                let n = O(t);
                                if (!f.isValidNot0(n)) return;
                                let i = f.inv(n),
                                  o = e.BASE.multiply(n).toAffine(),
                                  a = f.create(o.x);
                                if (a === Q) return;
                                let l = f.create(i * f.create(p + a * g));
                                if (l === Q) return;
                                let s = (2 * (o.x !== a)) | Number(o.y & $),
                                  d = l;
                                return (
                                  u &&
                                    l > m >> $ &&
                                    ((d = (r = l) > m >> $ ? f.neg(r) : r),
                                    (s ^= 1)),
                                  new E(a, d, s)
                                );
                              },
                            };
                          })(n, i, s);
                        return (function (e, t, n) {
                          if ("number" != typeof e || e < 2)
                            throw Error("hashLen must be a number");
                          if ("number" != typeof t || t < 2)
                            throw Error("qByteLen must be a number");
                          if ("function" != typeof n)
                            throw Error("hmacFn must be a function");
                          let i = (e) => new Uint8Array(e),
                            o = (e) => Uint8Array.of(e),
                            a = i(e),
                            l = i(e),
                            f = 0,
                            s = () => {
                              a.fill(1), l.fill(0), (f = 0);
                            },
                            u = function () {
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              return n(l, a, ...t);
                            },
                            d = function () {
                              let e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : i(0);
                              (l = u(o(0), e)),
                                (a = u()),
                                0 !== e.length && ((l = u(o(1), e)), (a = u()));
                            },
                            c = () => {
                              if (f++ >= 1e3)
                                throw Error("drbg: tried 1000 values");
                              let e = 0,
                                n = [];
                              for (; e < t; ) {
                                let t = (a = u()).slice();
                                n.push(t), (e += a.length);
                              }
                              return (0, r.concatBytes)(...n);
                            };
                          return (e, t) => {
                            let r;
                            for (s(), d(e); !(r = t(c())); ) d();
                            return s(), r;
                          };
                        })(
                          t.hash.outputLen,
                          f.BYTES,
                          a
                        )(u, d);
                      },
                      verify: function (n, i, o) {
                        let a,
                          l,
                          s =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : N;
                        (i = h("msgHash", i)), (o = h("publicKey", o)), X(s);
                        let { lowS: u, prehash: d, format: c } = s;
                        if ("strict" in s)
                          throw Error("options.strict was renamed to lowS");
                        if (
                          void 0 !== c &&
                          !["compact", "der", "js"].includes(c)
                        )
                          throw Error(
                            'format must be "compact", "der" or "js"'
                          );
                        let m = "string" == typeof n || (0, r.isBytes)(n),
                          p =
                            !m &&
                            !c &&
                            "object" == typeof n &&
                            null !== n &&
                            "bigint" == typeof n.r &&
                            "bigint" == typeof n.s;
                        if (!m && !p)
                          throw Error(
                            "invalid signature, expected Uint8Array, hex string or Signature instance"
                          );
                        try {
                          if (p)
                            if (void 0 === c || "js" === c) a = new E(n.r, n.s);
                            else throw Error("invalid format");
                          if (m) {
                            try {
                              "compact" !== c && (a = E.fromDER(n));
                            } catch (e) {
                              if (!(e instanceof J.Err)) throw e;
                            }
                            a || "der" === c || (a = E.fromCompact(n));
                          }
                          l = e.fromHex(o);
                        } catch (e) {
                          return !1;
                        }
                        if (!a || (u && a.hasHighS())) return !1;
                        d && (i = t.hash(i));
                        let { r: g, s: y } = a,
                          b = S(i),
                          w = f.inv(y),
                          v = f.create(b * w),
                          B = f.create(g * w),
                          x = e.BASE.multiplyUnsafe(v).add(l.multiplyUnsafe(B));
                        return !x.is0() && f.create(x.x) === g;
                      },
                      utils: {
                        isValidPrivateKey(e) {
                          try {
                            return B(e), !0;
                          } catch (e) {
                            return !1;
                          }
                        },
                        normPrivateKeyToScalar: B,
                        randomPrivateKey: () =>
                          (function (e, t) {
                            let r =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                              n = e.length,
                              i = Z(t),
                              o = D(t);
                            if (n < 16 || n < o || n > 1024)
                              throw Error(
                                "expected " +
                                  o +
                                  "-1024 bytes of input, got " +
                                  n
                              );
                            let a = A(r ? u(e) : s(e), t - v) + v;
                            return r ? c(a, i) : d(a, i);
                          })(o(D(m)), m),
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
                      },
                      Point: e,
                      Signature: E,
                    })
                  );
                })(
                  (function (e) {
                    var t, n, l;
                    let f =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { Fp: s, Fn: u } = (function (e, t) {
                        let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        if (!t || "object" != typeof t)
                          throw Error(
                            "expected valid ".concat(e, " CURVE object")
                          );
                        for (let e of ["p", "n", "h"]) {
                          let r = t[e];
                          if (!("bigint" == typeof r && r > z))
                            throw Error(
                              "CURVE.".concat(e, " must be positive bigint")
                            );
                        }
                        let n = Y(t.p, r.Fp),
                          i = Y(t.n, r.Fn);
                        for (let r of [
                          "Gx",
                          "Gy",
                          "a",
                          "weierstrass" === e ? "b" : "d",
                        ])
                          if (!n.isValid(t[r]))
                            throw Error(
                              "CURVE.".concat(
                                r,
                                " must be valid field element of CURVE.Fp"
                              )
                            );
                        return { Fp: n, Fn: i };
                      })("weierstrass", e, f),
                      { h: d, n: c } = e;
                    b(
                      f,
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
                    let { endo: m } = f;
                    if (
                      m &&
                      (!s.is0(e.a) ||
                        "bigint" != typeof m.beta ||
                        "function" != typeof m.splitScalar)
                    )
                      throw Error(
                        'invalid endo: expected "beta": bigint and "splitScalar": function'
                      );
                    function p() {
                      if (!s.isOdd)
                        throw Error(
                          "compression is not supported: Field does not have .isOdd()"
                        );
                    }
                    let g =
                        f.toBytes ||
                        function (e, t, n) {
                          let { x: i, y: o } = t.toAffine(),
                            l = s.toBytes(i);
                          if ((a("isCompressed", n), !n))
                            return (0, r.concatBytes)(
                              Uint8Array.of(4),
                              l,
                              s.toBytes(o)
                            );
                          {
                            p();
                            let e = !s.isOdd(o);
                            return (0, r.concatBytes)(ei(e), l);
                          }
                        },
                      E =
                        f.fromBytes ||
                        function (e) {
                          (0, r.abytes)(e);
                          let t = s.BYTES,
                            n = t + 1,
                            i = 2 * t + 1,
                            o = e.length,
                            a = e[0],
                            l = e.subarray(1);
                          if (o === n && (2 === a || 3 === a)) {
                            let e,
                              t = s.fromBytes(l);
                            if (!s.isValid(t))
                              throw Error(
                                "bad point: is not on curve, wrong x"
                              );
                            let r = v(t);
                            try {
                              e = s.sqrt(r);
                            } catch (e) {
                              throw Error(
                                "bad point: is not on curve, sqrt error" +
                                  (e instanceof Error ? ": " + e.message : "")
                              );
                            }
                            return (
                              p(),
                              ((1 & a) == 1) !== s.isOdd(e) && (e = s.neg(e)),
                              { x: t, y: e }
                            );
                          }
                          if (o === i && 4 === a) {
                            let e = s.fromBytes(l.subarray(0 * t, +t)),
                              r = s.fromBytes(l.subarray(+t, 2 * t));
                            if (!B(e, r))
                              throw Error("bad point: is not on curve");
                            return { x: e, y: r };
                          }
                          throw Error(
                            "bad point: got length "
                              .concat(o, ", expected compressed=")
                              .concat(n, " or uncompressed=")
                              .concat(i)
                          );
                        },
                      v =
                        ((t = e.a),
                        (n = e.b),
                        function (e) {
                          let r = s.sqr(e),
                            i = s.mul(r, e);
                          return s.add(s.add(i, s.mul(e, t)), n);
                        });
                    function B(e, t) {
                      let r = s.sqr(t),
                        n = v(e);
                      return s.eql(r, n);
                    }
                    if (!B(e.Gx, e.Gy))
                      throw Error("bad curve params: generator point");
                    let x = s.mul(s.pow(e.a, et), er),
                      O = s.mul(s.sqr(e.b), BigInt(27));
                    if (s.is0(s.add(x, O)))
                      throw Error("bad curve params: a or b");
                    function S(e, t) {
                      let r =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (!s.isValid(t) || (r && s.is0(t)))
                        throw Error("bad point coordinate ".concat(e));
                      return t;
                    }
                    function R(e) {
                      if (!(e instanceof N))
                        throw Error("ProjectivePoint expected");
                    }
                    let A = w((e, t) => {
                        let { px: r, py: n, pz: i } = e;
                        if (s.eql(i, s.ONE)) return { x: r, y: n };
                        let o = e.is0();
                        null == t && (t = o ? s.ONE : s.inv(i));
                        let a = s.mul(r, t),
                          l = s.mul(n, t),
                          f = s.mul(i, t);
                        if (o) return { x: s.ZERO, y: s.ZERO };
                        if (!s.eql(f, s.ONE)) throw Error("invZ was invalid");
                        return { x: a, y: l };
                      }),
                      I = w((e) => {
                        if (e.is0()) {
                          if (f.allowInfinityPoint && !s.is0(e.py)) return;
                          throw Error("bad point: ZERO");
                        }
                        let { x: t, y: r } = e.toAffine();
                        if (!s.isValid(t) || !s.isValid(r))
                          throw Error("bad point: x or y not field elements");
                        if (!B(t, r))
                          throw Error("bad point: equation left != right");
                        if (!e.isTorsionFree())
                          throw Error("bad point: not in prime-order subgroup");
                        return !0;
                      });
                    function q(e, t, r, n, i) {
                      return (
                        (r = new N(s.mul(r.px, e), r.py, r.pz)),
                        (t = H(n, t)),
                        (r = H(i, r)),
                        t.add(r)
                      );
                    }
                    class N {
                      static fromAffine(e) {
                        let { x: t, y: r } = e || {};
                        if (!e || !s.isValid(t) || !s.isValid(r))
                          throw Error("invalid affine point");
                        if (e instanceof N)
                          throw Error("projective point not allowed");
                        return s.is0(t) && s.is0(r)
                          ? N.ZERO
                          : new N(t, r, s.ONE);
                      }
                      get x() {
                        return this.toAffine().x;
                      }
                      get y() {
                        return this.toAffine().y;
                      }
                      static normalizeZ(e) {
                        let t = U(
                          N.Fp,
                          e.map((e) => e.pz)
                        );
                        return e
                          .map((e, r) => e.toAffine(t[r]))
                          .map(N.fromAffine);
                      }
                      static fromBytes(e) {
                        return (0, r.abytes)(e), N.fromHex(e);
                      }
                      static fromHex(e) {
                        let t = N.fromAffine(E(h("pointHex", e)));
                        return t.assertValidity(), t;
                      }
                      static fromPrivateKey(e) {
                        let t = en(
                          u,
                          f.allowedPrivateKeyLengths,
                          f.wrapPrivateKey
                        );
                        return N.BASE.multiply(t(e));
                      }
                      static msm(e, t) {
                        return (function (e, t, r, n) {
                          if (!Array.isArray(r)) throw Error("array expected");
                          r.forEach((t, r) => {
                            if (!(t instanceof e))
                              throw Error("invalid point at index " + r);
                          });
                          if (!Array.isArray(n))
                            throw Error("array of scalars expected");
                          n.forEach((e, r) => {
                            if (!t.isValid(e))
                              throw Error("invalid scalar at index " + r);
                          });
                          let a = r.length,
                            l = n.length;
                          if (a !== l)
                            throw Error(
                              "arrays of points and scalars must have equal length"
                            );
                          let f = e.ZERO,
                            s = (function (e) {
                              let t;
                              for (t = 0; e > i; e >>= o, t += 1);
                              return t;
                            })(BigInt(a)),
                            u = 1;
                          s > 12
                            ? (u = s - 3)
                            : s > 4
                            ? (u = s - 2)
                            : s > 0 && (u = 2);
                          let d = y(u),
                            c = Array(Number(d) + 1).fill(f),
                            h = Math.floor((t.BITS - 1) / u) * u,
                            m = f;
                          for (let e = h; e >= 0; e -= u) {
                            c.fill(f);
                            for (let t = 0; t < l; t++) {
                              let i = Number((n[t] >> BigInt(e)) & d);
                              c[i] = c[i].add(r[t]);
                            }
                            let t = f;
                            for (let e = c.length - 1, r = f; e > 0; e--)
                              (r = r.add(c[e])), (t = t.add(r));
                            if (((m = m.add(t)), 0 !== e))
                              for (let e = 0; e < u; e++) m = m.double();
                          }
                          return m;
                        })(N, u, e, t);
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
                          P.setWindowSize(this, e), t || this.multiply(et), this
                        );
                      }
                      _setWindowSize(e) {
                        this.precompute(e);
                      }
                      assertValidity() {
                        I(this);
                      }
                      hasEvenY() {
                        let { y: e } = this.toAffine();
                        if (!s.isOdd)
                          throw Error("Field doesn't support isOdd");
                        return !s.isOdd(e);
                      }
                      equals(e) {
                        R(e);
                        let { px: t, py: r, pz: n } = this,
                          { px: i, py: o, pz: a } = e,
                          l = s.eql(s.mul(t, a), s.mul(i, n)),
                          f = s.eql(s.mul(r, a), s.mul(o, n));
                        return l && f;
                      }
                      negate() {
                        return new N(this.px, s.neg(this.py), this.pz);
                      }
                      double() {
                        let { a: t, b: r } = e,
                          n = s.mul(r, et),
                          { px: i, py: o, pz: a } = this,
                          l = s.ZERO,
                          f = s.ZERO,
                          u = s.ZERO,
                          d = s.mul(i, i),
                          c = s.mul(o, o),
                          h = s.mul(a, a),
                          m = s.mul(i, o);
                        return (
                          (m = s.add(m, m)),
                          (u = s.mul(i, a)),
                          (u = s.add(u, u)),
                          (l = s.mul(t, u)),
                          (f = s.mul(n, h)),
                          (f = s.add(l, f)),
                          (l = s.sub(c, f)),
                          (f = s.add(c, f)),
                          (f = s.mul(l, f)),
                          (l = s.mul(m, l)),
                          (u = s.mul(n, u)),
                          (h = s.mul(t, h)),
                          (m = s.sub(d, h)),
                          (m = s.mul(t, m)),
                          (m = s.add(m, u)),
                          (u = s.add(d, d)),
                          (d = s.add(u, d)),
                          (d = s.add(d, h)),
                          (d = s.mul(d, m)),
                          (f = s.add(f, d)),
                          (h = s.mul(o, a)),
                          (h = s.add(h, h)),
                          (d = s.mul(h, m)),
                          (l = s.sub(l, d)),
                          (u = s.mul(h, c)),
                          (u = s.add(u, u)),
                          new N(l, f, (u = s.add(u, u)))
                        );
                      }
                      add(t) {
                        R(t);
                        let { px: r, py: n, pz: i } = this,
                          { px: o, py: a, pz: l } = t,
                          f = s.ZERO,
                          u = s.ZERO,
                          d = s.ZERO,
                          c = e.a,
                          h = s.mul(e.b, et),
                          m = s.mul(r, o),
                          p = s.mul(n, a),
                          g = s.mul(i, l),
                          y = s.add(r, n),
                          b = s.add(o, a);
                        (y = s.mul(y, b)),
                          (b = s.add(m, p)),
                          (y = s.sub(y, b)),
                          (b = s.add(r, i));
                        let w = s.add(o, l);
                        return (
                          (b = s.mul(b, w)),
                          (w = s.add(m, g)),
                          (b = s.sub(b, w)),
                          (w = s.add(n, i)),
                          (f = s.add(a, l)),
                          (w = s.mul(w, f)),
                          (f = s.add(p, g)),
                          (w = s.sub(w, f)),
                          (d = s.mul(c, b)),
                          (f = s.mul(h, g)),
                          (d = s.add(f, d)),
                          (f = s.sub(p, d)),
                          (d = s.add(p, d)),
                          (u = s.mul(f, d)),
                          (p = s.add(m, m)),
                          (p = s.add(p, m)),
                          (g = s.mul(c, g)),
                          (b = s.mul(h, b)),
                          (p = s.add(p, g)),
                          (g = s.sub(m, g)),
                          (g = s.mul(c, g)),
                          (b = s.add(b, g)),
                          (m = s.mul(p, b)),
                          (u = s.add(u, m)),
                          (m = s.mul(w, b)),
                          (f = s.mul(y, f)),
                          (f = s.sub(f, m)),
                          (m = s.mul(y, p)),
                          (d = s.mul(w, d)),
                          new N(f, u, (d = s.add(d, m)))
                        );
                      }
                      subtract(e) {
                        return this.add(e.negate());
                      }
                      is0() {
                        return this.equals(N.ZERO);
                      }
                      multiply(e) {
                        let t,
                          r,
                          { endo: n } = f;
                        if (!u.isValidNot0(e))
                          throw Error("invalid scalar: out of range");
                        let i = (e) => P.wNAFCached(this, e, N.normalizeZ);
                        if (n) {
                          let {
                              k1neg: o,
                              k1: a,
                              k2neg: l,
                              k2: f,
                            } = n.splitScalar(e),
                            { p: s, f: u } = i(a),
                            { p: d, f: c } = i(f);
                          (r = u.add(c)), (t = q(n.beta, s, d, o, l));
                        } else {
                          let { p: n, f: o } = i(e);
                          (t = n), (r = o);
                        }
                        return N.normalizeZ([t, r])[0];
                      }
                      multiplyUnsafe(e) {
                        let { endo: t } = f;
                        if (!u.isValid(e))
                          throw Error("invalid scalar: out of range");
                        if (e === Q || this.is0()) return N.ZERO;
                        if (e === $) return this;
                        if (P.hasPrecomputes(this)) return this.multiply(e);
                        if (!t) return P.wNAFCachedUnsafe(this, e);
                        {
                          let {
                              k1neg: r,
                              k1: n,
                              k2neg: i,
                              k2: o,
                            } = t.splitScalar(e),
                            { p1: a, p2: l } = (function (e, t, r, n) {
                              let i = t,
                                o = e.ZERO,
                                a = e.ZERO;
                              for (; r > z || n > z; )
                                r & K && (o = o.add(i)),
                                  n & K && (a = a.add(i)),
                                  (i = i.double()),
                                  (r >>= K),
                                  (n >>= K);
                              return { p1: o, p2: a };
                            })(N, this, n, o);
                          return q(t.beta, a, l, r, i);
                        }
                      }
                      multiplyAndAddUnsafe(e, t, r) {
                        let n = this.multiplyUnsafe(t).add(e.multiplyUnsafe(r));
                        return n.is0() ? void 0 : n;
                      }
                      toAffine(e) {
                        return A(this, e);
                      }
                      isTorsionFree() {
                        let { isTorsionFree: e } = f;
                        return (
                          d === $ ||
                          (e ? e(N, this) : P.wNAFCachedUnsafe(this, c).is0())
                        );
                      }
                      clearCofactor() {
                        let { clearCofactor: e } = f;
                        return d === $
                          ? this
                          : e
                          ? e(N, this)
                          : this.multiplyUnsafe(d);
                      }
                      toBytes() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return (
                          a("isCompressed", e),
                          this.assertValidity(),
                          g(N, this, e)
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
                        (this.px = S("x", e)),
                          (this.py = S("y", t, !0)),
                          (this.pz = S("z", r)),
                          Object.freeze(this);
                      }
                    }
                    (N.BASE = new N(e.Gx, e.Gy, s.ONE)),
                      (N.ZERO = new N(s.ZERO, s.ONE, s.ZERO)),
                      (N.Fp = s),
                      (N.Fn = u);
                    let T = u.BITS,
                      P =
                        ((l = f.endo ? Math.ceil(T / 2) : T),
                        {
                          constTimeNegate: H,
                          hasPrecomputes: (e) => 1 !== G(e),
                          unsafeLadder(e, t) {
                            let r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : N.ZERO,
                              n = e;
                            for (; t > z; )
                              t & K && (r = r.add(n)),
                                (n = n.double()),
                                (t >>= K);
                            return r;
                          },
                          precomputeWindow(e, t) {
                            let { windows: r, windowSize: n } = j(t, l),
                              i = [],
                              o = e,
                              a = o;
                            for (let e = 0; e < r; e++) {
                              (a = o), i.push(a);
                              for (let e = 1; e < n; e++)
                                (a = a.add(o)), i.push(a);
                              o = a.double();
                            }
                            return i;
                          },
                          wNAF(e, t, r) {
                            let n = N.ZERO,
                              i = N.BASE,
                              o = j(e, l);
                            for (let e = 0; e < o.windows; e++) {
                              let {
                                nextN: a,
                                offset: l,
                                isZero: f,
                                isNeg: s,
                                isNegF: u,
                                offsetF: d,
                              } = k(r, e, o);
                              (r = a),
                                f
                                  ? (i = i.add(H(u, t[d])))
                                  : (n = n.add(H(s, t[l])));
                            }
                            return W(r), { p: n, f: i };
                          },
                          wNAFUnsafe(e, t, r) {
                            let n =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : N.ZERO,
                              i = j(e, l);
                            for (let e = 0; e < i.windows && r !== z; e++) {
                              let {
                                nextN: o,
                                offset: a,
                                isZero: l,
                                isNeg: f,
                              } = k(r, e, i);
                              if (((r = o), !l)) {
                                let e = t[a];
                                n = n.add(f ? e.negate() : e);
                              }
                            }
                            return W(r), n;
                          },
                          getPrecomputes(e, t, r) {
                            let n = L.get(t);
                            return (
                              n ||
                                ((n = this.precomputeWindow(t, e)),
                                1 !== e &&
                                  ("function" == typeof r && (n = r(n)),
                                  L.set(t, n))),
                              n
                            );
                          },
                          wNAFCached(e, t, r) {
                            let n = G(e);
                            return this.wNAF(
                              n,
                              this.getPrecomputes(n, e, r),
                              t
                            );
                          },
                          wNAFCachedUnsafe(e, t, r, n) {
                            let i = G(e);
                            return 1 === i
                              ? this.unsafeLadder(e, t, n)
                              : this.wNAFUnsafe(
                                  i,
                                  this.getPrecomputes(i, e, r),
                                  t,
                                  n
                                );
                          },
                          setWindowSize(e, t) {
                            _(t, l), M.set(e, t), L.delete(e);
                          },
                        });
                    return N;
                  })(t, l),
                  f,
                  l
                );
              return Object.assign({}, m, {
                ProjectivePoint: m.Point,
                CURVE: e,
              });
            })({ ...e, hash: t });
          return { ...l(t), create: l };
        })(
          {
            ...ef,
            Fp: em,
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = ef.n,
                  r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  n = -eu * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  o = BigInt("0x100000000000000000000000000000000"),
                  a = ec(r * e, t),
                  l = ec(-n * e, t),
                  f = A(e - a * r - l * i, t),
                  s = A(-a * n - l * r, t),
                  u = f > o,
                  d = s > o;
                if ((u && (f = t - f), d && (s = t - s), f > o || s > o))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: f, k2neg: d, k2: s };
              },
            },
          },
          t.sha256
        ),
        eg = {};
      function ey(e) {
        for (
          var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          i[o - 1] = arguments[o];
        let a = eg[e];
        if (void 0 === a) {
          let n = (0, t.sha256)(Uint8Array.from(e, (e) => e.charCodeAt(0)));
          (a = (0, r.concatBytes)(n, n)), (eg[e] = a);
        }
        return (0, t.sha256)((0, r.concatBytes)(a, ...i));
      }
      let eb = (e) => e.toBytes(!0).slice(1),
        ew = (e) => d(e, 32),
        eE = (e) => A(e, ef.p),
        ev = (e) => A(e, ef.n),
        eB = ep.Point;
      function ex(e) {
        let t = ep.utils.normPrivateKeyToScalar(e),
          r = eB.fromPrivateKey(t);
        return { scalar: r.y % ed === es ? t : ev(-t), bytes: eb(r) };
      }
      function eO(e) {
        g("x", e, eu, ef.p);
        let t = eE(e * e),
          r = eh(eE(t * e + BigInt(7)));
        r % ed !== es && (r = eE(-r));
        let n = eB.fromAffine({ x: e, y: r });
        return n.assertValidity(), n;
      }
      function eS() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return ev(s(ey("BIP0340/challenge", ...t)));
      }
      function eR(e, t, r) {
        let n = h("signature", e, 64),
          i = h("message", t),
          o = h("publicKey", r, 32);
        try {
          let e = eO(s(o)),
            t = s(n.subarray(0, 32));
          if (!p(t, eu, ef.p)) return !1;
          let r = s(n.subarray(32, 64));
          if (!p(r, eu, ef.n)) return !1;
          let a = eS(ew(t), eb(e), i),
            l = eB.BASE.multiplyUnsafe(r).add(e.multiplyUnsafe(ev(-a))),
            { x: f, y: u } = l.toAffine();
          if (l.is0() || u % ed !== es || f !== t) return !1;
          return !0;
        } catch (e) {
          return !1;
        }
      }
      let eA = {
          getPublicKey: function (e) {
            return ex(e).bytes;
          },
          sign: function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : (0, r.randomBytes)(32),
              i = h("message", e),
              { bytes: o, scalar: a } = ex(t),
              l = ew(a ^ s(ey("BIP0340/aux", h("auxRand", n, 32)))),
              f = ev(s(ey("BIP0340/nonce", l, o, i)));
            if (f === es) throw Error("sign failed: k is zero");
            let { bytes: u, scalar: d } = ex(f),
              c = eS(u, o, i),
              m = new Uint8Array(64);
            if ((m.set(u, 0), m.set(ew(ev(d + c * a)), 32), !eR(m, i, o)))
              throw Error("sign: Invalid signature produced");
            return m;
          },
          verify: eR,
          utils: {
            randomPrivateKey: ep.utils.randomPrivateKey,
            lift_x: eO,
            pointToBytes: eb,
            numberToBytesBE: d,
            bytesToNumberBE: s,
            taggedHash: ey,
            mod: A,
          },
        },
        eI = (function (e, t) {
          let r = t.map((e) => Array.from(e).reverse());
          return (t, n) => {
            let [i, o, a, l] = r.map((r) =>
                r.reduce((r, n) => e.add(e.mul(r, t), n))
              ),
              [f, s] = U(e, [o, l], !0);
            return (
              (t = e.mul(i, f)), (n = e.mul(n, e.mul(a, s))), { x: t, y: n }
            );
          };
        })(
          em,
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
        eq = (function (e, t) {
          C(e);
          let { A: r, B: n, Z: i } = t;
          if (!e.isValid(r) || !e.isValid(n) || !e.isValid(i))
            throw Error("mapToCurveSimpleSWU: invalid opts");
          let o = (function (e, t) {
            let r = e.ORDER,
              n = Q;
            for (let e = r - $; e % ee === Q; e /= ee) n += $;
            let i = n,
              o = ee << (i - $ - $),
              a = o * ee,
              l = (r - $) / a,
              f = (l - $) / ee,
              s = a - $,
              u = e.pow(t, l),
              d = e.pow(t, (l + $) / ee),
              c = (t, r) => {
                let n = u,
                  a = e.pow(r, s),
                  l = e.sqr(a);
                l = e.mul(l, r);
                let c = e.mul(t, l);
                (c = e.pow(c, f)),
                  (c = e.mul(c, a)),
                  (a = e.mul(c, r)),
                  (l = e.mul(c, t));
                let h = e.mul(l, a);
                c = e.pow(h, o);
                let m = e.eql(c, e.ONE);
                (a = e.mul(l, d)),
                  (c = e.mul(h, n)),
                  (l = e.cmov(a, l, m)),
                  (h = e.cmov(c, h, m));
                for (let t = i; t > $; t--) {
                  let r = t - ee;
                  r = ee << (r - $);
                  let i = e.pow(h, r),
                    o = e.eql(i, e.ONE);
                  (a = e.mul(l, n)),
                    (n = e.mul(n, n)),
                    (i = e.mul(h, n)),
                    (l = e.cmov(a, l, o)),
                    (h = e.cmov(i, h, o));
                }
                return { isValid: m, value: l };
              };
            if (e.ORDER % er === et) {
              let r = (e.ORDER - et) / er,
                n = e.sqrt(e.neg(t));
              c = (t, i) => {
                let o = e.sqr(i),
                  a = e.mul(t, i);
                o = e.mul(o, a);
                let l = e.pow(o, r);
                l = e.mul(l, a);
                let f = e.mul(l, n),
                  s = e.mul(e.sqr(l), i),
                  u = e.eql(s, t),
                  d = e.cmov(f, l, u);
                return { isValid: u, value: d };
              };
            }
            return c;
          })(e, i);
          if (!e.isOdd) throw Error("Field does not have .isOdd()");
          return (t) => {
            let a, l, f, s, u, d, c, h;
            (a = e.sqr(t)),
              (a = e.mul(a, i)),
              (l = e.sqr(a)),
              (l = e.add(l, a)),
              (f = e.add(l, e.ONE)),
              (f = e.mul(f, n)),
              (s = e.cmov(i, e.neg(l), !e.eql(l, e.ZERO))),
              (s = e.mul(s, r)),
              (l = e.sqr(f)),
              (d = e.sqr(s)),
              (u = e.mul(d, r)),
              (l = e.add(l, u)),
              (l = e.mul(l, f)),
              (d = e.mul(d, s)),
              (u = e.mul(d, n)),
              (l = e.add(l, u)),
              (c = e.mul(a, f));
            let { isValid: m, value: p } = o(l, d);
            (h = e.mul(a, t)),
              (h = e.mul(h, p)),
              (c = e.cmov(c, f, m)),
              (h = e.cmov(h, p, m));
            let g = e.isOdd(t) === e.isOdd(h);
            h = e.cmov(e.neg(h), h, g);
            let y = U(e, [s], !0)[0];
            return { x: (c = e.mul(c, y)), y: h };
          };
        })(em, {
          A: BigInt(
            "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
          ),
          B: BigInt("1771"),
          Z: em.create(BigInt("-11")),
        }),
        eN = (function (e, t, r) {
          if ("function" != typeof t)
            throw Error("mapToCurve() must be defined");
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
              let o = r.DST ? r.DST : {},
                a = el(e, 2, Object.assign({}, r, o, t)),
                l = n(a[0]),
                f = n(a[1]);
              return i(l.add(f));
            },
            encodeToCurve(e, t) {
              let o = r.encodeDST ? r.encodeDST : {};
              return i(n(el(e, 1, Object.assign({}, r, o, t))[0]));
            },
            mapToCurve(e) {
              if (!Array.isArray(e)) throw Error("expected array of bigints");
              for (let t of e)
                if ("bigint" != typeof t)
                  throw Error("expected array of bigints");
              return i(n(e));
            },
          };
        })(
          ep.Point,
          (e) => {
            let { x: t, y: r } = eq(em.create(e[0]));
            return eI(t, r);
          },
          {
            DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
            encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
            p: em.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: t.sha256,
          }
        ),
        eT = eN.hashToCurve,
        eP = eN.encodeToCurve;
    },
  },
]);

//# sourceMappingURL=2fe4ddabb4793ded.js.map
