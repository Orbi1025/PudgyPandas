(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    623394: (t) => {
      var { m: e, e: r } = t;
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    337878: (t) => {
      var { m: e, e: r } = t;
      {
        let t,
          e = [
            0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532,
            581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588,
            1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034,
            3196, 3362, 3532, 3706,
          ];
        (r.getSymbolSize = function (t) {
          if (!t) throw Error('"version" cannot be null or undefined');
          if (t < 1 || t > 40)
            throw Error('"version" should be in range from 1 to 40');
          return 4 * t + 17;
        }),
          (r.getSymbolTotalCodewords = function (t) {
            return e[t];
          }),
          (r.getBCHDigit = function (t) {
            let e = 0;
            for (; 0 !== t; ) e++, (t >>>= 1);
            return e;
          }),
          (r.setToSJISFunction = function (e) {
            if ("function" != typeof e)
              throw Error('"toSJISFunc" is not a valid function.');
            t = e;
          }),
          (r.isKanjiModeEnabled = function () {
            return void 0 !== t;
          }),
          (r.toSJIS = function (e) {
            return t(e);
          });
      }
    },
    993342: (t) => {
      var { m: e, e: r } = t;
      (r.L = { bit: 1 }),
        (r.M = { bit: 0 }),
        (r.Q = { bit: 3 }),
        (r.H = { bit: 2 }),
        (r.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (r.from = function (t, e) {
          if (r.isValid(t)) return t;
          try {
            if ("string" != typeof t) throw Error("Param is not a string");
            switch (t.toLowerCase()) {
              case "l":
              case "low":
                return r.L;
              case "m":
              case "medium":
                return r.M;
              case "q":
              case "quartile":
                return r.Q;
              case "h":
              case "high":
                return r.H;
              default:
                throw Error("Unknown EC Level: " + t);
            }
          } catch (t) {
            return e;
          }
        });
    },
    307682: (t) => {
      var { m: e, e: r } = t;
      function n() {
        (this.buffer = []), (this.length = 0);
      }
      (n.prototype = {
        get: function (t) {
          let e = Math.floor(t / 8);
          return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1;
        },
        put: function (t, e) {
          for (let r = 0; r < e; r++)
            this.putBit(((t >>> (e - r - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          let e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = n);
    },
    16640: (t) => {
      var { m: e, e: r } = t;
      function n(t) {
        if (!t || t < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (n.prototype.set = function (t, e, r, n) {
        let o = t * this.size + e;
        (this.data[o] = r), n && (this.reservedBit[o] = !0);
      }),
        (n.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (n.prototype.xor = function (t, e, r) {
          this.data[t * this.size + e] ^= r;
        }),
        (n.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (e.exports = n);
    },
    704286: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(337878).getSymbolSize;
        (r.getRowColCoords = function (t) {
          if (1 === t) return [];
          let r = Math.floor(t / 7) + 2,
            n = e(t),
            o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * r - 2)),
            i = [n - 7];
          for (let t = 1; t < r - 1; t++) i[t] = i[t - 1] - o;
          return i.push(6), i.reverse();
        }),
          (r.getPositions = function (t) {
            let e = [],
              n = r.getRowColCoords(t),
              o = n.length;
            for (let t = 0; t < o; t++)
              for (let r = 0; r < o; r++)
                (0 !== t || 0 !== r) &&
                  (0 !== t || r !== o - 1) &&
                  (t !== o - 1 || 0 !== r) &&
                  e.push([n[t], n[r]]);
            return e;
          });
      }
    },
    913564: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(337878).getSymbolSize;
        r.getPositions = function (t) {
          let r = e(t);
          return [
            [0, 0],
            [r - 7, 0],
            [0, r - 7],
          ];
        };
      }
    },
    501378: (t) => {
      var { m: e, e: r } = t;
      {
        r.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        let t = { N1: 3, N2: 3, N3: 40, N4: 10 };
        (r.isValid = function (t) {
          return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
        }),
          (r.from = function (t) {
            return r.isValid(t) ? parseInt(t, 10) : void 0;
          }),
          (r.getPenaltyN1 = function (e) {
            let r = e.size,
              n = 0,
              o = 0,
              i = 0,
              a = null,
              l = null;
            for (let u = 0; u < r; u++) {
              (o = i = 0), (a = l = null);
              for (let s = 0; s < r; s++) {
                let r = e.get(u, s);
                r === a
                  ? o++
                  : (o >= 5 && (n += t.N1 + (o - 5)), (a = r), (o = 1)),
                  (r = e.get(s, u)) === l
                    ? i++
                    : (i >= 5 && (n += t.N1 + (i - 5)), (l = r), (i = 1));
              }
              o >= 5 && (n += t.N1 + (o - 5)), i >= 5 && (n += t.N1 + (i - 5));
            }
            return n;
          }),
          (r.getPenaltyN2 = function (e) {
            let r = e.size,
              n = 0;
            for (let t = 0; t < r - 1; t++)
              for (let o = 0; o < r - 1; o++) {
                let r =
                  e.get(t, o) +
                  e.get(t, o + 1) +
                  e.get(t + 1, o) +
                  e.get(t + 1, o + 1);
                (4 === r || 0 === r) && n++;
              }
            return n * t.N2;
          }),
          (r.getPenaltyN3 = function (e) {
            let r = e.size,
              n = 0,
              o = 0,
              i = 0;
            for (let t = 0; t < r; t++) {
              o = i = 0;
              for (let a = 0; a < r; a++)
                (o = ((o << 1) & 2047) | e.get(t, a)),
                  a >= 10 && (1488 === o || 93 === o) && n++,
                  (i = ((i << 1) & 2047) | e.get(a, t)),
                  a >= 10 && (1488 === i || 93 === i) && n++;
            }
            return n * t.N3;
          }),
          (r.getPenaltyN4 = function (e) {
            let r = 0,
              n = e.data.length;
            for (let t = 0; t < n; t++) r += e.data[t];
            return Math.abs(Math.ceil((100 * r) / n / 5) - 10) * t.N4;
          }),
          (r.applyMask = function (t, e) {
            let n = e.size;
            for (let o = 0; o < n; o++)
              for (let i = 0; i < n; i++)
                e.isReserved(i, o) ||
                  e.xor(
                    i,
                    o,
                    (function (t, e, n) {
                      switch (t) {
                        case r.Patterns.PATTERN000:
                          return (e + n) % 2 == 0;
                        case r.Patterns.PATTERN001:
                          return e % 2 == 0;
                        case r.Patterns.PATTERN010:
                          return n % 3 == 0;
                        case r.Patterns.PATTERN011:
                          return (e + n) % 3 == 0;
                        case r.Patterns.PATTERN100:
                          return (
                            (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0
                          );
                        case r.Patterns.PATTERN101:
                          return ((e * n) % 2) + ((e * n) % 3) == 0;
                        case r.Patterns.PATTERN110:
                          return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0;
                        case r.Patterns.PATTERN111:
                          return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0;
                        default:
                          throw Error("bad maskPattern:" + t);
                      }
                    })(t, i, o)
                  );
          }),
          (r.getBestMask = function (t, e) {
            let n = Object.keys(r.Patterns).length,
              o = 0,
              i = 1 / 0;
            for (let a = 0; a < n; a++) {
              e(a), r.applyMask(a, t);
              let n =
                r.getPenaltyN1(t) +
                r.getPenaltyN2(t) +
                r.getPenaltyN3(t) +
                r.getPenaltyN4(t);
              r.applyMask(a, t), n < i && ((i = n), (o = a));
            }
            return o;
          });
      }
    },
    244725: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(993342),
          n = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
            4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4,
            8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16,
            6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17,
            23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29,
            35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45,
            15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19,
            37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45,
            62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
          ],
          o = [
            7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26,
            48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60,
            110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260,
            308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
            144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196,
            364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476,
            690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870,
            1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
            1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290,
            1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
            1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770,
            2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040,
            2430,
          ];
        (r.getBlocksCount = function (t, r) {
          switch (r) {
            case e.L:
              return n[(t - 1) * 4 + 0];
            case e.M:
              return n[(t - 1) * 4 + 1];
            case e.Q:
              return n[(t - 1) * 4 + 2];
            case e.H:
              return n[(t - 1) * 4 + 3];
            default:
              return;
          }
        }),
          (r.getTotalCodewordsCount = function (t, r) {
            switch (r) {
              case e.L:
                return o[(t - 1) * 4 + 0];
              case e.M:
                return o[(t - 1) * 4 + 1];
              case e.Q:
                return o[(t - 1) * 4 + 2];
              case e.H:
                return o[(t - 1) * 4 + 3];
              default:
                return;
            }
          });
      }
    },
    722294: (t) => {
      var { m: e, e: r } = t;
      {
        let t = new Uint8Array(512),
          e = new Uint8Array(256);
        !(function () {
          let r = 1;
          for (let n = 0; n < 255; n++)
            (t[n] = r), (e[r] = n), 256 & (r <<= 1) && (r ^= 285);
          for (let e = 255; e < 512; e++) t[e] = t[e - 255];
        })(),
          (r.log = function (t) {
            if (t < 1) throw Error("log(" + t + ")");
            return e[t];
          }),
          (r.exp = function (e) {
            return t[e];
          }),
          (r.mul = function (r, n) {
            return 0 === r || 0 === n ? 0 : t[e[r] + e[n]];
          });
      }
    },
    398004: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(722294);
        (r.mul = function (t, r) {
          let n = new Uint8Array(t.length + r.length - 1);
          for (let o = 0; o < t.length; o++)
            for (let i = 0; i < r.length; i++) n[o + i] ^= e.mul(t[o], r[i]);
          return n;
        }),
          (r.mod = function (t, r) {
            let n = new Uint8Array(t);
            for (; n.length - r.length >= 0; ) {
              let t = n[0];
              for (let o = 0; o < r.length; o++) n[o] ^= e.mul(r[o], t);
              let o = 0;
              for (; o < n.length && 0 === n[o]; ) o++;
              n = n.slice(o);
            }
            return n;
          }),
          (r.generateECPolynomial = function (t) {
            let n = new Uint8Array([1]);
            for (let o = 0; o < t; o++)
              n = r.mul(n, new Uint8Array([1, e.exp(o)]));
            return n;
          });
      }
    },
    314639: (t) => {
      var { m: e, e: r } = t;
      {
        let r = t.r(398004);
        function n(t) {
          (this.genPoly = void 0),
            (this.degree = t),
            this.degree && this.initialize(this.degree);
        }
        (n.prototype.initialize = function (t) {
          (this.degree = t),
            (this.genPoly = r.generateECPolynomial(this.degree));
        }),
          (n.prototype.encode = function (t) {
            if (!this.genPoly) throw Error("Encoder not initialized");
            let e = new Uint8Array(t.length + this.degree);
            e.set(t);
            let n = r.mod(e, this.genPoly),
              o = this.degree - n.length;
            if (o > 0) {
              let t = new Uint8Array(this.degree);
              return t.set(n, o), t;
            }
            return n;
          }),
          (e.exports = n);
      }
    },
    785830: (t) => {
      var { m: e, e: r } = t;
      r.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    313332: (t) => {
      var { m: e, e: r } = t;
      {
        let t = "[0-9]+",
          e =
            "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
          n =
            "(?:(?![A-Z0-9 $%*+\\-./:]|" +
            (e = e.replace(/u/g, "\\u")) +
            ")(?:.|[\r\n]))+";
        (r.KANJI = RegExp(e, "g")),
          (r.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
          (r.BYTE = RegExp(n, "g")),
          (r.NUMERIC = RegExp(t, "g")),
          (r.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
        let o = RegExp("^" + e + "$"),
          i = RegExp("^" + t + "$"),
          a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        (r.testKanji = function (t) {
          return o.test(t);
        }),
          (r.testNumeric = function (t) {
            return i.test(t);
          }),
          (r.testAlphanumeric = function (t) {
            return a.test(t);
          });
      }
    },
    309678: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(785830),
          n = t.r(313332);
        (r.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (r.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (r.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (r.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (r.MIXED = { bit: -1 }),
          (r.getCharCountIndicator = function (t, r) {
            if (!t.ccBits) throw Error("Invalid mode: " + t);
            if (!e.isValid(r)) throw Error("Invalid version: " + r);
            return r >= 1 && r < 10
              ? t.ccBits[0]
              : r < 27
              ? t.ccBits[1]
              : t.ccBits[2];
          }),
          (r.getBestModeForData = function (t) {
            return n.testNumeric(t)
              ? r.NUMERIC
              : n.testAlphanumeric(t)
              ? r.ALPHANUMERIC
              : n.testKanji(t)
              ? r.KANJI
              : r.BYTE;
          }),
          (r.toString = function (t) {
            if (t && t.id) return t.id;
            throw Error("Invalid mode");
          }),
          (r.isValid = function (t) {
            return t && t.bit && t.ccBits;
          }),
          (r.from = function (t, e) {
            if (r.isValid(t)) return t;
            try {
              if ("string" != typeof t) throw Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return r.NUMERIC;
                case "alphanumeric":
                  return r.ALPHANUMERIC;
                case "kanji":
                  return r.KANJI;
                case "byte":
                  return r.BYTE;
                default:
                  throw Error("Unknown mode: " + t);
              }
            } catch (t) {
              return e;
            }
          });
      }
    },
    213056: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(337878),
          o = t.r(244725),
          i = t.r(993342),
          a = t.r(309678),
          l = t.r(785830),
          u = e.getBCHDigit(7973);
        function n(t, e) {
          return a.getCharCountIndicator(t, e) + 4;
        }
        (r.from = function (t, e) {
          return l.isValid(t) ? parseInt(t, 10) : e;
        }),
          (r.getCapacity = function (t, r, i) {
            if (!l.isValid(t)) throw Error("Invalid QR Code version");
            void 0 === i && (i = a.BYTE);
            let u =
              (e.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, r)) *
              8;
            if (i === a.MIXED) return u;
            let s = u - n(i, t);
            switch (i) {
              case a.NUMERIC:
                return Math.floor((s / 10) * 3);
              case a.ALPHANUMERIC:
                return Math.floor((s / 11) * 2);
              case a.KANJI:
                return Math.floor(s / 13);
              case a.BYTE:
              default:
                return Math.floor(s / 8);
            }
          }),
          (r.getBestVersionForData = function (t, e) {
            let o,
              l = i.from(e, i.M);
            if (Array.isArray(t)) {
              if (t.length > 1) {
                for (let e = 1; e <= 40; e++)
                  if (
                    (function (t, e) {
                      let r = 0;
                      return (
                        t.forEach(function (t) {
                          let o = n(t.mode, e);
                          r += o + t.getBitsLength();
                        }),
                        r
                      );
                    })(t, e) <= r.getCapacity(e, l, a.MIXED)
                  )
                    return e;
                return;
              }
              if (0 === t.length) return 1;
              o = t[0];
            } else o = t;
            return (function (t, e, n) {
              for (let o = 1; o <= 40; o++)
                if (e <= r.getCapacity(o, n, t)) return o;
            })(o.mode, o.getLength(), l);
          }),
          (r.getEncodedBits = function (t) {
            if (!l.isValid(t) || t < 7) throw Error("Invalid QR Code version");
            let r = t << 12;
            for (; e.getBCHDigit(r) - u >= 0; )
              r ^= 7973 << (e.getBCHDigit(r) - u);
            return (t << 12) | r;
          });
      }
    },
    736856: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(337878),
          n = e.getBCHDigit(1335);
        r.getEncodedBits = function (t, r) {
          let o = (t.bit << 3) | r,
            i = o << 10;
          for (; e.getBCHDigit(i) - n >= 0; )
            i ^= 1335 << (e.getBCHDigit(i) - n);
          return ((o << 10) | i) ^ 21522;
        };
      }
    },
    611392: (t) => {
      var { m: e, e: r } = t;
      {
        let r = t.r(309678);
        function n(t) {
          (this.mode = r.NUMERIC), (this.data = t.toString());
        }
        (n.getBitsLength = function (t) {
          return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
        }),
          (n.prototype.getLength = function () {
            return this.data.length;
          }),
          (n.prototype.getBitsLength = function () {
            return n.getBitsLength(this.data.length);
          }),
          (n.prototype.write = function (t) {
            let e, r;
            for (e = 0; e + 3 <= this.data.length; e += 3)
              (r = parseInt(this.data.substr(e, 3), 10)), t.put(r, 10);
            let n = this.data.length - e;
            n > 0 &&
              ((r = parseInt(this.data.substr(e), 10)), t.put(r, 3 * n + 1));
          }),
          (e.exports = n);
      }
    },
    810568: (t) => {
      var { m: e, e: r } = t;
      {
        let r = t.r(309678),
          o = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "$",
            "%",
            "*",
            "+",
            "-",
            ".",
            "/",
            ":",
          ];
        function n(t) {
          (this.mode = r.ALPHANUMERIC), (this.data = t);
        }
        (n.getBitsLength = function (t) {
          return 11 * Math.floor(t / 2) + (t % 2) * 6;
        }),
          (n.prototype.getLength = function () {
            return this.data.length;
          }),
          (n.prototype.getBitsLength = function () {
            return n.getBitsLength(this.data.length);
          }),
          (n.prototype.write = function (t) {
            let e;
            for (e = 0; e + 2 <= this.data.length; e += 2) {
              let r = 45 * o.indexOf(this.data[e]);
              (r += o.indexOf(this.data[e + 1])), t.put(r, 11);
            }
            this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
          }),
          (e.exports = n);
      }
    },
    30633: (t) => {
      "use strict";
      var { m: e, e: r } = t;
      e.exports = function (t) {
        for (var e = [], r = t.length, n = 0; n < r; n++) {
          var o = t.charCodeAt(n);
          if (o >= 55296 && o <= 56319 && r > n + 1) {
            var i = t.charCodeAt(n + 1);
            i >= 56320 &&
              i <= 57343 &&
              ((o = (o - 55296) * 1024 + i - 56320 + 65536), (n += 1));
          }
          if (o < 128) {
            e.push(o);
            continue;
          }
          if (o < 2048) {
            e.push((o >> 6) | 192), e.push((63 & o) | 128);
            continue;
          }
          if (o < 55296 || (o >= 57344 && o < 65536)) {
            e.push((o >> 12) | 224),
              e.push(((o >> 6) & 63) | 128),
              e.push((63 & o) | 128);
            continue;
          }
          if (o >= 65536 && o <= 1114111) {
            e.push((o >> 18) | 240),
              e.push(((o >> 12) & 63) | 128),
              e.push(((o >> 6) & 63) | 128),
              e.push((63 & o) | 128);
            continue;
          }
          e.push(239, 191, 189);
        }
        return new Uint8Array(e).buffer;
      };
    },
    987720: (t) => {
      var { m: e, e: r } = t;
      {
        let r = t.r(30633),
          o = t.r(309678);
        function n(t) {
          (this.mode = o.BYTE),
            "string" == typeof t && (t = r(t)),
            (this.data = new Uint8Array(t));
        }
        (n.getBitsLength = function (t) {
          return 8 * t;
        }),
          (n.prototype.getLength = function () {
            return this.data.length;
          }),
          (n.prototype.getBitsLength = function () {
            return n.getBitsLength(this.data.length);
          }),
          (n.prototype.write = function (t) {
            for (let e = 0, r = this.data.length; e < r; e++)
              t.put(this.data[e], 8);
          }),
          (e.exports = n);
      }
    },
    712129: (t) => {
      var { m: e, e: r } = t;
      {
        let r = t.r(309678),
          o = t.r(337878);
        function n(t) {
          (this.mode = r.KANJI), (this.data = t);
        }
        (n.getBitsLength = function (t) {
          return 13 * t;
        }),
          (n.prototype.getLength = function () {
            return this.data.length;
          }),
          (n.prototype.getBitsLength = function () {
            return n.getBitsLength(this.data.length);
          }),
          (n.prototype.write = function (t) {
            let e;
            for (e = 0; e < this.data.length; e++) {
              let r = o.toSJIS(this.data[e]);
              if (r >= 33088 && r <= 40956) r -= 33088;
              else if (r >= 57408 && r <= 60351) r -= 49472;
              else
                throw Error(
                  "Invalid SJIS character: " +
                    this.data[e] +
                    "\nMake sure your charset is UTF-8"
                );
              (r = ((r >>> 8) & 255) * 192 + (255 & r)), t.put(r, 13);
            }
          }),
          (e.exports = n);
      }
    },
    337074: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(309678),
          u = t.r(611392),
          s = t.r(810568),
          f = t.r(987720),
          h = t.r(712129),
          c = t.r(313332),
          g = t.r(337878),
          d = t.r(575263);
        function n(t) {
          return unescape(encodeURIComponent(t)).length;
        }
        function o(t, e, r) {
          let n,
            o = [];
          for (; null !== (n = t.exec(r)); )
            o.push({
              data: n[0],
              index: n.index,
              mode: e,
              length: n[0].length,
            });
          return o;
        }
        function i(t) {
          let r,
            n,
            i = o(c.NUMERIC, e.NUMERIC, t),
            a = o(c.ALPHANUMERIC, e.ALPHANUMERIC, t);
          return (
            g.isKanjiModeEnabled()
              ? ((r = o(c.BYTE, e.BYTE, t)), (n = o(c.KANJI, e.KANJI, t)))
              : ((r = o(c.BYTE_KANJI, e.BYTE, t)), (n = [])),
            i
              .concat(a, r, n)
              .sort(function (t, e) {
                return t.index - e.index;
              })
              .map(function (t) {
                return { data: t.data, mode: t.mode, length: t.length };
              })
          );
        }
        function a(t, r) {
          switch (r) {
            case e.NUMERIC:
              return u.getBitsLength(t);
            case e.ALPHANUMERIC:
              return s.getBitsLength(t);
            case e.KANJI:
              return h.getBitsLength(t);
            case e.BYTE:
              return f.getBitsLength(t);
          }
        }
        function l(t, r) {
          let n,
            o = e.getBestModeForData(t);
          if ((n = e.from(r, o)) !== e.BYTE && n.bit < o.bit)
            throw Error(
              '"' +
                t +
                '" cannot be encoded with mode ' +
                e.toString(n) +
                ".\n Suggested mode is: " +
                e.toString(o)
            );
          switch (
            (n === e.KANJI && !g.isKanjiModeEnabled() && (n = e.BYTE), n)
          ) {
            case e.NUMERIC:
              return new u(t);
            case e.ALPHANUMERIC:
              return new s(t);
            case e.KANJI:
              return new h(t);
            case e.BYTE:
              return new f(t);
          }
        }
        (r.fromArray = function (t) {
          return t.reduce(function (t, e) {
            return (
              "string" == typeof e
                ? t.push(l(e, null))
                : e.data && t.push(l(e.data, e.mode)),
              t
            );
          }, []);
        }),
          (r.fromString = function (t, o) {
            let l = (function (t, r) {
                let n = {},
                  o = { start: {} },
                  i = ["start"];
                for (let l = 0; l < t.length; l++) {
                  let u = t[l],
                    s = [];
                  for (let t = 0; t < u.length; t++) {
                    let f = u[t],
                      h = "" + l + t;
                    s.push(h), (n[h] = { node: f, lastCount: 0 }), (o[h] = {});
                    for (let t = 0; t < i.length; t++) {
                      let l = i[t];
                      n[l] && n[l].node.mode === f.mode
                        ? ((o[l][h] =
                            a(n[l].lastCount + f.length, f.mode) -
                            a(n[l].lastCount, f.mode)),
                          (n[l].lastCount += f.length))
                        : (n[l] && (n[l].lastCount = f.length),
                          (o[l][h] =
                            a(f.length, f.mode) +
                            4 +
                            e.getCharCountIndicator(f.mode, r)));
                    }
                  }
                  i = s;
                }
                for (let t = 0; t < i.length; t++) o[i[t]].end = 0;
                return { map: o, table: n };
              })(
                (function (t) {
                  let r = [];
                  for (let o = 0; o < t.length; o++) {
                    let i = t[o];
                    switch (i.mode) {
                      case e.NUMERIC:
                        r.push([
                          i,
                          {
                            data: i.data,
                            mode: e.ALPHANUMERIC,
                            length: i.length,
                          },
                          { data: i.data, mode: e.BYTE, length: i.length },
                        ]);
                        break;
                      case e.ALPHANUMERIC:
                        r.push([
                          i,
                          { data: i.data, mode: e.BYTE, length: i.length },
                        ]);
                        break;
                      case e.KANJI:
                        r.push([
                          i,
                          { data: i.data, mode: e.BYTE, length: n(i.data) },
                        ]);
                        break;
                      case e.BYTE:
                        r.push([
                          { data: i.data, mode: e.BYTE, length: n(i.data) },
                        ]);
                    }
                  }
                  return r;
                })(i(t, g.isKanjiModeEnabled())),
                o
              ),
              u = d.find_path(l.map, "start", "end"),
              s = [];
            for (let t = 1; t < u.length - 1; t++) s.push(l.table[u[t]].node);
            return r.fromArray(
              s.reduce(function (t, e) {
                let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return (
                  r && r.mode === e.mode
                    ? (t[t.length - 1].data += e.data)
                    : t.push(e),
                  t
                );
              }, [])
            );
          }),
          (r.rawSplit = function (t) {
            return r.fromArray(i(t, g.isKanjiModeEnabled()));
          });
      }
    },
    267334: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(337878),
          o = t.r(993342),
          i = t.r(307682),
          a = t.r(16640),
          l = t.r(704286),
          u = t.r(913564),
          s = t.r(501378),
          f = t.r(244725),
          h = t.r(314639),
          c = t.r(213056),
          g = t.r(736856),
          d = t.r(309678),
          p = t.r(337074);
        function n(t, e, r) {
          let n,
            o,
            i = t.size,
            a = g.getEncodedBits(e, r);
          for (n = 0; n < 15; n++)
            (o = ((a >> n) & 1) == 1),
              n < 6
                ? t.set(n, 8, o, !0)
                : n < 8
                ? t.set(n + 1, 8, o, !0)
                : t.set(i - 15 + n, 8, o, !0),
              n < 8
                ? t.set(8, i - n - 1, o, !0)
                : n < 9
                ? t.set(8, 15 - n - 1 + 1, o, !0)
                : t.set(8, 15 - n - 1, o, !0);
          t.set(i - 8, 8, 1, !0);
        }
        r.create = function (t, r) {
          let g, m;
          if (void 0 === t || "" === t) throw Error("No input text");
          let E = o.M;
          return (
            void 0 !== r &&
              ((E = o.from(r.errorCorrectionLevel, o.M)),
              (g = c.from(r.version)),
              (m = s.from(r.maskPattern)),
              r.toSJISFunc && e.setToSJISFunction(r.toSJISFunc)),
            (function (t, r, o, g) {
              let m;
              if (Array.isArray(t)) m = p.fromArray(t);
              else if ("string" == typeof t) {
                let e = r;
                if (!e) {
                  let r = p.rawSplit(t);
                  e = c.getBestVersionForData(r, o);
                }
                m = p.fromString(t, e || 40);
              } else throw Error("Invalid data");
              let E = c.getBestVersionForData(m, o);
              if (!E)
                throw Error(
                  "The amount of data is too big to be stored in a QR Code"
                );
              if (r) {
                if (r < E)
                  throw Error(
                    "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                      E +
                      ".\n"
                  );
              } else r = E;
              let y = (function (t, r, n) {
                  let o = new i();
                  n.forEach(function (e) {
                    o.put(e.mode.bit, 4),
                      o.put(e.getLength(), d.getCharCountIndicator(e.mode, t)),
                      e.write(o);
                  });
                  let a =
                    (e.getSymbolTotalCodewords(t) -
                      f.getTotalCodewordsCount(t, r)) *
                    8;
                  for (
                    o.getLengthInBits() + 4 <= a && o.put(0, 4);
                    o.getLengthInBits() % 8 != 0;

                  )
                    o.putBit(0);
                  let l = (a - o.getLengthInBits()) / 8;
                  for (let t = 0; t < l; t++) o.put(t % 2 ? 17 : 236, 8);
                  return (function (t, r, n) {
                    let o,
                      i,
                      a = e.getSymbolTotalCodewords(r),
                      l = a - f.getTotalCodewordsCount(r, n),
                      u = f.getBlocksCount(r, n),
                      s = a % u,
                      c = u - s,
                      g = Math.floor(a / u),
                      d = Math.floor(l / u),
                      p = d + 1,
                      m = g - d,
                      E = new h(m),
                      y = 0,
                      w = Array(u),
                      A = Array(u),
                      v = 0,
                      C = new Uint8Array(t.buffer);
                    for (let t = 0; t < u; t++) {
                      let e = t < c ? d : p;
                      (w[t] = C.slice(y, y + e)),
                        (A[t] = E.encode(w[t])),
                        (y += e),
                        (v = Math.max(v, e));
                    }
                    let B = new Uint8Array(a),
                      N = 0;
                    for (o = 0; o < v; o++)
                      for (i = 0; i < u; i++)
                        o < w[i].length && (B[N++] = w[i][o]);
                    for (o = 0; o < m; o++)
                      for (i = 0; i < u; i++) B[N++] = A[i][o];
                    return B;
                  })(o, t, r);
                })(r, o, m),
                w = new a(e.getSymbolSize(r));
              !(function (t, e) {
                let r = t.size,
                  n = u.getPositions(e);
                for (let e = 0; e < n.length; e++) {
                  let o = n[e][0],
                    i = n[e][1];
                  for (let e = -1; e <= 7; e++)
                    if (!(o + e <= -1) && !(r <= o + e))
                      for (let n = -1; n <= 7; n++)
                        i + n <= -1 ||
                          r <= i + n ||
                          ((e >= 0 && e <= 6 && (0 === n || 6 === n)) ||
                          (n >= 0 && n <= 6 && (0 === e || 6 === e)) ||
                          (e >= 2 && e <= 4 && n >= 2 && n <= 4)
                            ? t.set(o + e, i + n, !0, !0)
                            : t.set(o + e, i + n, !1, !0));
                }
              })(w, r);
              let A = w.size;
              for (let t = 8; t < A - 8; t++) {
                let e = t % 2 == 0;
                w.set(t, 6, e, !0), w.set(6, t, e, !0);
              }
              return (
                !(function (t, e) {
                  let r = l.getPositions(e);
                  for (let e = 0; e < r.length; e++) {
                    let n = r[e][0],
                      o = r[e][1];
                    for (let e = -2; e <= 2; e++)
                      for (let r = -2; r <= 2; r++)
                        -2 === e ||
                        2 === e ||
                        -2 === r ||
                        2 === r ||
                        (0 === e && 0 === r)
                          ? t.set(n + e, o + r, !0, !0)
                          : t.set(n + e, o + r, !1, !0);
                  }
                })(w, r),
                n(w, o, 0),
                r >= 7 &&
                  (function (t, e) {
                    let r,
                      n,
                      o,
                      i = t.size,
                      a = c.getEncodedBits(e);
                    for (let e = 0; e < 18; e++)
                      (r = Math.floor(e / 3)),
                        (n = (e % 3) + i - 8 - 3),
                        (o = ((a >> e) & 1) == 1),
                        t.set(r, n, o, !0),
                        t.set(n, r, o, !0);
                  })(w, r),
                !(function (t, e) {
                  let r = t.size,
                    n = -1,
                    o = r - 1,
                    i = 7,
                    a = 0;
                  for (let l = r - 1; l > 0; l -= 2)
                    for (6 === l && l--; ; ) {
                      for (let r = 0; r < 2; r++)
                        if (!t.isReserved(o, l - r)) {
                          let n = !1;
                          a < e.length && (n = ((e[a] >>> i) & 1) == 1),
                            t.set(o, l - r, n),
                            -1 == --i && (a++, (i = 7));
                        }
                      if ((o += n) < 0 || r <= o) {
                        (o -= n), (n = -n);
                        break;
                      }
                    }
                })(w, y),
                isNaN(g) && (g = s.getBestMask(w, n.bind(null, w, o))),
                s.applyMask(g, w),
                n(w, o, g),
                {
                  modules: w,
                  version: r,
                  errorCorrectionLevel: o,
                  maskPattern: g,
                  segments: m,
                }
              );
            })(t, g, E, m)
          );
        };
      }
    },
    27152: (t) => {
      var { m: e, e: r } = t;
      function n(t) {
        if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
          throw Error("Color should be defined as hex string");
        let e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw Error("Invalid hex color: " + t);
        (3 === e.length || 4 === e.length) &&
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        let r = parseInt(e.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (r.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        let e =
            void 0 === t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          r = t.width && t.width >= 21 ? t.width : void 0,
          o = t.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
          margin: e,
          color: {
            dark: n(t.color.dark || "#000000ff"),
            light: n(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (r.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (r.getImageWidth = function (t, e) {
          let n = r.getScale(t, e);
          return Math.floor((t + 2 * e.margin) * n);
        }),
        (r.qrToImageData = function (t, e, n) {
          let o = e.modules.size,
            i = e.modules.data,
            a = r.getScale(o, n),
            l = Math.floor((o + 2 * n.margin) * a),
            u = n.margin * a,
            s = [n.color.light, n.color.dark];
          for (let e = 0; e < l; e++)
            for (let r = 0; r < l; r++) {
              let f = (e * l + r) * 4,
                h = n.color.light;
              e >= u &&
                r >= u &&
                e < l - u &&
                r < l - u &&
                (h =
                  s[
                    +!!i[Math.floor((e - u) / a) * o + Math.floor((r - u) / a)]
                  ]),
                (t[f++] = h.r),
                (t[f++] = h.g),
                (t[f++] = h.b),
                (t[f] = h.a);
            }
        });
    },
    489141: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(27152);
        (r.render = function (t, r, n) {
          var o;
          let i = n,
            a = r;
          void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)),
            r ||
              (a = (function () {
                try {
                  return document.createElement("canvas");
                } catch (t) {
                  throw Error("You need to specify a canvas element");
                }
              })()),
            (i = e.getOptions(i));
          let l = e.getImageWidth(t.modules.size, i),
            u = a.getContext("2d"),
            s = u.createImageData(l, l);
          return (
            e.qrToImageData(s.data, t, i),
            (o = a),
            u.clearRect(0, 0, o.width, o.height),
            o.style || (o.style = {}),
            (o.height = l),
            (o.width = l),
            (o.style.height = l + "px"),
            (o.style.width = l + "px"),
            u.putImageData(s, 0, 0),
            a
          );
        }),
          (r.renderToDataURL = function (t, e, n) {
            let o = n;
            void 0 !== o || (e && e.getContext) || ((o = e), (e = void 0)),
              o || (o = {});
            let i = r.render(t, e, o),
              a = o.type || "image/png",
              l = o.rendererOpts || {};
            return i.toDataURL(a, l.quality);
          });
      }
    },
    831567: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(27152);
        function n(t, e) {
          let r = t.a / 255,
            n = e + '="' + t.hex + '"';
          return r < 1
            ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
            : n;
        }
        function o(t, e, r) {
          let n = t + e;
          return void 0 !== r && (n += " " + r), n;
        }
        r.render = function (t, r, i) {
          let a = e.getOptions(r),
            l = t.modules.size,
            u = t.modules.data,
            s = l + 2 * a.margin,
            f = a.color.light.a
              ? "<path " +
                n(a.color.light, "fill") +
                ' d="M0 0h' +
                s +
                "v" +
                s +
                'H0z"/>'
              : "",
            h =
              "<path " +
              n(a.color.dark, "stroke") +
              ' d="' +
              (function (t, e, r) {
                let n = "",
                  i = 0,
                  a = !1,
                  l = 0;
                for (let u = 0; u < t.length; u++) {
                  let s = Math.floor(u % e),
                    f = Math.floor(u / e);
                  s || a || (a = !0),
                    t[u]
                      ? (l++,
                        (u > 0 && s > 0 && t[u - 1]) ||
                          ((n += a ? o("M", s + r, 0.5 + f + r) : o("m", i, 0)),
                          (i = 0),
                          (a = !1)),
                        (s + 1 < e && t[u + 1]) || ((n += o("h", l)), (l = 0)))
                      : i++;
                }
                return n;
              })(u, l, a.margin) +
              '"/>',
            c =
              '<svg xmlns="http://www.w3.org/2000/svg" ' +
              (a.width
                ? 'width="' + a.width + '" height="' + a.width + '" '
                : "") +
              ('viewBox="0 0 ' + s + " ") +
              s +
              '" shape-rendering="crispEdges">' +
              f +
              h +
              "</svg>\n";
          return "function" == typeof i && i(null, c), c;
        };
      }
    },
    531578: (t) => {
      var { m: e, e: r } = t;
      {
        let e = t.r(623394),
          o = t.r(267334),
          i = t.r(489141),
          a = t.r(831567);
        function n(t, r, n, i, a) {
          let l = [].slice.call(arguments, 1),
            u = l.length,
            s = "function" == typeof l[u - 1];
          if (!s && !e()) throw Error("Callback required as last argument");
          if (s) {
            if (u < 2) throw Error("Too few arguments provided");
            2 === u
              ? ((a = n), (n = r), (r = i = void 0))
              : 3 === u &&
                (r.getContext && void 0 === a
                  ? ((a = i), (i = void 0))
                  : ((a = i), (i = n), (n = r), (r = void 0)));
          } else {
            if (u < 1) throw Error("Too few arguments provided");
            return (
              1 === u
                ? ((n = r), (r = i = void 0))
                : 2 !== u || r.getContext || ((i = n), (n = r), (r = void 0)),
              new Promise(function (e, a) {
                try {
                  let a = o.create(n, i);
                  e(t(a, r, i));
                } catch (t) {
                  a(t);
                }
              })
            );
          }
          try {
            let e = o.create(n, i);
            a(null, t(e, r, i));
          } catch (t) {
            a(t);
          }
        }
        (r.create = o.create),
          (r.toCanvas = n.bind(null, i.render)),
          (r.toDataURL = n.bind(null, i.renderToDataURL)),
          (r.toString = n.bind(null, function (t, e, r) {
            return a.render(t, r);
          }));
      }
    },
  },
]);

//# sourceMappingURL=df458f47e42406d2.js.map
