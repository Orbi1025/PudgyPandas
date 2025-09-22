(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    787769: [
      (e) => {
        "use strict";
        function t(e) {
          let { includeName: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
            throw new k(e.type);
          return ""
            .concat(e.name, "(")
            .concat(n(e.inputs, { includeName: t }), ")");
        }
        function n(e) {
          let { includeName: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return e
            ? e
                .map((e) =>
                  (function (e, t) {
                    let { includeName: r } = t;
                    return e.type.startsWith("tuple")
                      ? "("
                          .concat(n(e.components, { includeName: r }), ")")
                          .concat(e.type.slice(5))
                      : e.type + (r && e.name ? " ".concat(e.name) : "");
                  })(e, { includeName: t })
                )
                .join(t ? ", " : ",")
            : "";
        }
        e.s(
          {
            AbiConstructorNotFoundError: () => o,
            AbiConstructorParamsNotFoundError: () => i,
            AbiDecodingDataSizeInvalidError: () => s,
            AbiDecodingDataSizeTooSmallError: () => c,
            AbiDecodingZeroDataError: () => u,
            AbiEncodingArrayLengthMismatchError: () => l,
            AbiEncodingBytesSizeMismatchError: () => d,
            AbiEncodingLengthMismatchError: () => p,
            AbiErrorInputsNotFoundError: () => m,
            AbiErrorNotFoundError: () => f,
            AbiErrorSignatureNotFoundError: () => g,
            AbiEventNotFoundError: () => y,
            AbiEventSignatureEmptyTopicsError: () => h,
            AbiEventSignatureNotFoundError: () => b,
            AbiFunctionNotFoundError: () => v,
            AbiFunctionOutputsNotFoundError: () => E,
            AbiFunctionSignatureNotFoundError: () => A,
            AbiItemAmbiguityError: () => w,
            BytesSizeMismatchError: () => x,
            DecodeLogDataMismatch: () => B,
            DecodeLogTopicsMismatch: () => T,
            InvalidAbiDecodingTypeError: () => N,
            InvalidAbiEncodingTypeError: () => I,
            InvalidArrayError: () => F,
            InvalidDefinitionTypeError: () => k,
            UnsupportedPackedAbiType: () => S,
          },
          787769
        ),
          e.s({ formatAbiItem: () => t, formatAbiParams: () => n }, 443923);
        var r = e.i(265288),
          a = e.i(500780);
        class o extends a.BaseError {
          constructor({ docsPath: e }) {
            super(
              "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
              { docsPath: e, name: "AbiConstructorNotFoundError" }
            );
          }
        }
        class i extends a.BaseError {
          constructor({ docsPath: e }) {
            super(
              "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
              { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
            );
          }
        }
        class s extends a.BaseError {
          constructor({ data: e, size: t }) {
            super(
              [
                "Data size of ".concat(t, " bytes is invalid."),
                "Size must be in increments of 32 bytes (size % 32 === 0).",
              ].join("\n"),
              {
                metaMessages: ["Data: ".concat(e, " (").concat(t, " bytes)")],
                name: "AbiDecodingDataSizeInvalidError",
              }
            );
          }
        }
        class c extends a.BaseError {
          constructor({ data: e, params: t, size: r }) {
            super(
              [
                "Data size of ".concat(
                  r,
                  " bytes is too small for given parameters."
                ),
              ].join("\n"),
              {
                metaMessages: [
                  "Params: (".concat(n(t, { includeName: !0 }), ")"),
                  "Data:   ".concat(e, " (").concat(r, " bytes)"),
                ],
                name: "AbiDecodingDataSizeTooSmallError",
              }
            ),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "params", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "size", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.data = e),
              (this.params = t),
              (this.size = r);
          }
        }
        class u extends a.BaseError {
          constructor() {
            super('Cannot decode zero data ("0x") with ABI parameters.', {
              name: "AbiDecodingZeroDataError",
            });
          }
        }
        class l extends a.BaseError {
          constructor({ expectedLength: e, givenLength: t, type: n }) {
            super(
              [
                "ABI encoding array length mismatch for type ".concat(n, "."),
                "Expected length: ".concat(e),
                "Given length: ".concat(t),
              ].join("\n"),
              { name: "AbiEncodingArrayLengthMismatchError" }
            );
          }
        }
        class d extends a.BaseError {
          constructor({ expectedSize: e, value: t }) {
            super(
              'Size of bytes "'
                .concat(t, '" (bytes')
                .concat((0, r.size)(t), ") does not match expected size (bytes")
                .concat(e, ")."),
              { name: "AbiEncodingBytesSizeMismatchError" }
            );
          }
        }
        class p extends a.BaseError {
          constructor({ expectedLength: e, givenLength: t }) {
            super(
              [
                "ABI encoding params/values length mismatch.",
                "Expected length (params): ".concat(e),
                "Given length (values): ".concat(t),
              ].join("\n"),
              { name: "AbiEncodingLengthMismatchError" }
            );
          }
        }
        class m extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Arguments (`args`) were provided to "'
                  .concat(e, '", but "')
                  .concat(
                    e,
                    '" on the ABI does not contain any parameters (`inputs`).'
                  ),
                "Cannot encode error result without knowing what the parameter types are.\nMake sure you are using the correct ABI and that the inputs exist on it.",
              ].join("\n"),
              { docsPath: t, name: "AbiErrorInputsNotFoundError" }
            );
          }
        }
        class f extends a.BaseError {
          constructor(e, { docsPath: t } = {}) {
            super(
              [
                "Error ".concat(
                  e ? '"'.concat(e, '" ') : "",
                  "not found on ABI."
                ),
                "Make sure you are using the correct ABI and that the error exists on it.",
              ].join("\n"),
              { docsPath: t, name: "AbiErrorNotFoundError" }
            );
          }
        }
        class g extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Encoded error signature "'.concat(e, '" not found on ABI.'),
                "Make sure you are using the correct ABI and that the error exists on it.",
                "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(
                  e,
                  "."
                ),
              ].join("\n"),
              { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
            ),
              Object.defineProperty(this, "signature", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.signature = e);
          }
        }
        class h extends a.BaseError {
          constructor({ docsPath: e }) {
            super("Cannot extract event signature from empty topics.", {
              docsPath: e,
              name: "AbiEventSignatureEmptyTopicsError",
            });
          }
        }
        class b extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Encoded event signature "'.concat(e, '" not found on ABI.'),
                "Make sure you are using the correct ABI and that the event exists on it.",
                "You can look up the signature here: https://openchain.xyz/signatures?query=".concat(
                  e,
                  "."
                ),
              ].join("\n"),
              { docsPath: t, name: "AbiEventSignatureNotFoundError" }
            );
          }
        }
        class y extends a.BaseError {
          constructor(e, { docsPath: t } = {}) {
            super(
              [
                "Event ".concat(
                  e ? '"'.concat(e, '" ') : "",
                  "not found on ABI."
                ),
                "Make sure you are using the correct ABI and that the event exists on it.",
              ].join("\n"),
              { docsPath: t, name: "AbiEventNotFoundError" }
            );
          }
        }
        class v extends a.BaseError {
          constructor(e, { docsPath: t } = {}) {
            super(
              [
                "Function ".concat(
                  e ? '"'.concat(e, '" ') : "",
                  "not found on ABI."
                ),
                "Make sure you are using the correct ABI and that the function exists on it.",
              ].join("\n"),
              { docsPath: t, name: "AbiFunctionNotFoundError" }
            );
          }
        }
        class E extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Function "'.concat(
                  e,
                  '" does not contain any `outputs` on ABI.'
                ),
                "Cannot decode function result without knowing what the parameter types are.\nMake sure you are using the correct ABI and that the function exists on it.",
              ].join("\n"),
              { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
            );
          }
        }
        class A extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Encoded function signature "'.concat(e, '" not found on ABI.'),
                "Make sure you are using the correct ABI and that the function exists on it.",
                "You can look up the signature here: https://openchain.xyz/signatures?query=".concat(
                  e,
                  "."
                ),
              ].join("\n"),
              { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
            );
          }
        }
        class w extends a.BaseError {
          constructor(e, n) {
            super("Found ambiguous types in overloaded ABI items.", {
              metaMessages: [
                "`".concat(e.type, "` in `").concat(t(e.abiItem), "`, and"),
                "`".concat(n.type, "` in `").concat(t(n.abiItem), "`"),
                "",
                "These types encode differently and cannot be distinguished at runtime.",
                "Remove one of the ambiguous items in the ABI.",
              ],
              name: "AbiItemAmbiguityError",
            });
          }
        }
        class x extends a.BaseError {
          constructor({ expectedSize: e, givenSize: t }) {
            super("Expected bytes".concat(e, ", got bytes").concat(t, "."), {
              name: "BytesSizeMismatchError",
            });
          }
        }
        class B extends a.BaseError {
          constructor({ abiItem: e, data: t, params: r, size: a }) {
            super(
              [
                "Data size of ".concat(
                  a,
                  " bytes is too small for non-indexed event parameters."
                ),
              ].join("\n"),
              {
                metaMessages: [
                  "Params: (".concat(n(r, { includeName: !0 }), ")"),
                  "Data:   ".concat(t, " (").concat(a, " bytes)"),
                ],
                name: "DecodeLogDataMismatch",
              }
            ),
              Object.defineProperty(this, "abiItem", {
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
              Object.defineProperty(this, "params", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "size", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.abiItem = e),
              (this.data = t),
              (this.params = r),
              (this.size = a);
          }
        }
        class T extends a.BaseError {
          constructor({ abiItem: e, param: n }) {
            super(
              [
                "Expected a topic for indexed event parameter"
                  .concat(n.name ? ' "'.concat(n.name, '"') : "", ' on event "')
                  .concat(t(e, { includeName: !0 }), '".'),
              ].join("\n"),
              { name: "DecodeLogTopicsMismatch" }
            ),
              Object.defineProperty(this, "abiItem", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.abiItem = e);
          }
        }
        class I extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Type "'.concat(e, '" is not a valid encoding type.'),
                "Please provide a valid ABI type.",
              ].join("\n"),
              { docsPath: t, name: "InvalidAbiEncodingType" }
            );
          }
        }
        class N extends a.BaseError {
          constructor(e, { docsPath: t }) {
            super(
              [
                'Type "'.concat(e, '" is not a valid decoding type.'),
                "Please provide a valid ABI type.",
              ].join("\n"),
              { docsPath: t, name: "InvalidAbiDecodingType" }
            );
          }
        }
        class F extends a.BaseError {
          constructor(e) {
            super(['Value "'.concat(e, '" is not a valid array.')].join("\n"), {
              name: "InvalidArrayError",
            });
          }
        }
        class k extends a.BaseError {
          constructor(e) {
            super(
              [
                '"'.concat(e, '" is not a valid definition type.'),
                'Valid types: "function", "event", "error"',
              ].join("\n"),
              { name: "InvalidDefinitionTypeError" }
            );
          }
        }
        class S extends a.BaseError {
          constructor(e) {
            super(
              'Type "'.concat(e, '" is not supported for packed encoding.'),
              { name: "UnsupportedPackedAbiType" }
            );
          }
        }
      },
      [443923],
    ],
    410647: (e) => {
      "use strict";
      e.s({ slice: () => a, sliceBytes: () => s, sliceHex: () => c });
      var t = e.i(140373),
        n = e.i(212629),
        r = e.i(265288);
      function a(e, t, r) {
        let { strict: a } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (0, n.isHex)(e, { strict: !1 })
          ? c(e, t, r, { strict: a })
          : s(e, t, r, { strict: a });
      }
      function o(e, n) {
        if ("number" == typeof n && n > 0 && n > (0, r.size)(e) - 1)
          throw new t.SliceOffsetOutOfBoundsError({
            offset: n,
            position: "start",
            size: (0, r.size)(e),
          });
      }
      function i(e, n, a) {
        if (
          "number" == typeof n &&
          "number" == typeof a &&
          (0, r.size)(e) !== a - n
        )
          throw new t.SliceOffsetOutOfBoundsError({
            offset: a,
            position: "end",
            size: (0, r.size)(e),
          });
      }
      function s(e, t, n) {
        let { strict: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        o(e, t);
        let a = e.slice(t, n);
        return r && i(a, t, n), a;
      }
      function c(e, t, n) {
        let { strict: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        o(e, t);
        let a = "0x".concat(
          e
            .replace("0x", "")
            .slice((null != t ? t : 0) * 2, (null != n ? n : e.length) * 2)
        );
        return r && i(a, t, n), a;
      }
    },
    300045: (e) => {
      "use strict";
      e.s({ hashSignature: () => r });
      var t = e.i(919717),
        n = e.i(831826);
      function r(e) {
        return (0, n.keccak256)((0, t.toBytes)(e));
      }
    },
    60531: (e) => {
      "use strict";
      function t(e, t) {
        let n = e.exec(t);
        return null == n ? void 0 : n.groups;
      }
      e.s({
        bytesRegex: () => n,
        execTyped: () => t,
        integerRegex: () => r,
        isTupleRegex: () => a,
      });
      let n = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        r =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        a = /^\(.+?\).*?$/;
    },
    691989: [
      (e) => {
        "use strict";
        e.s({ toSignatureHash: () => c }, 691989);
        var t = e.i(300045);
        e.s({ toSignature: () => s }, 157880),
          e.s({ formatAbiItem: () => o }, 313274),
          e.s({ formatAbiParameters: () => a }, 301787);
        var n = e.i(60531);
        let r = RegExp("^tuple(?<array>(\\[(\\d*)\\])*)$");
        function a(e) {
          let t = "",
            a = e.length;
          for (let o = 0; o < a; o++)
            (t += (function e(t) {
              let a = t.type;
              if (r.test(t.type) && "components" in t) {
                var o;
                a = "(";
                let i = t.components.length;
                for (let n = 0; n < i; n++)
                  (a += e(t.components[n])), n < i - 1 && (a += ", ");
                let s = (0, n.execTyped)(r, t.type);
                return (
                  (a += ")".concat(
                    null != (o = null == s ? void 0 : s.array) ? o : ""
                  )),
                  e({ ...t, type: a })
                );
              }
              return ("indexed" in t &&
                t.indexed &&
                (a = "".concat(a, " indexed")),
              t.name)
                ? "".concat(a, " ").concat(t.name)
                : a;
            })(e[o])),
              o !== a - 1 && (t += ", ");
          return t;
        }
        function o(e) {
          var t;
          return "function" === e.type
            ? "function "
                .concat(e.name, "(")
                .concat(a(e.inputs), ")")
                .concat(
                  e.stateMutability && "nonpayable" !== e.stateMutability
                    ? " ".concat(e.stateMutability)
                    : ""
                )
                .concat(
                  (null == (t = e.outputs) ? void 0 : t.length)
                    ? " returns (".concat(a(e.outputs), ")")
                    : ""
                )
            : "event" === e.type
            ? "event ".concat(e.name, "(").concat(a(e.inputs), ")")
            : "error" === e.type
            ? "error ".concat(e.name, "(").concat(a(e.inputs), ")")
            : "constructor" === e.type
            ? "constructor("
                .concat(a(e.inputs), ")")
                .concat("payable" === e.stateMutability ? " payable" : "")
            : "fallback" === e.type
            ? "fallback() external".concat(
                "payable" === e.stateMutability ? " payable" : ""
              )
            : "receive() external payable";
        }
        var i = e.i(500780);
        let s = (e) =>
          (function (e) {
            let t = !0,
              n = "",
              r = 0,
              a = "",
              o = !1;
            for (let i = 0; i < e.length; i++) {
              let s = e[i];
              if (
                (["(", ")", ","].includes(s) && (t = !0),
                "(" === s && r++,
                ")" === s && r--,
                t)
              ) {
                if (0 === r) {
                  if (" " === s && ["event", "function", ""].includes(a))
                    a = "";
                  else if (((a += s), ")" === s)) {
                    o = !0;
                    break;
                  }
                  continue;
                }
                if (" " === s) {
                  "," !== e[i - 1] &&
                    "," !== n &&
                    ",(" !== n &&
                    ((n = ""), (t = !1));
                  continue;
                }
                (a += s), (n += s);
              }
            }
            if (!o) throw new i.BaseError("Unable to normalize signature.");
            return a;
          })("string" == typeof e ? e : o(e));
        function c(e) {
          return (0, t.hashSignature)(s(e));
        }
      },
      [301787, 313274, 157880],
    ],
    575189: (e) => {
      "use strict";
      e.s({ toFunctionSelector: () => r });
      var t = e.i(410647),
        n = e.i(691989);
      let r = (e) => (0, t.slice)((0, n.toSignatureHash)(e), 0, 4);
    },
    750671: [
      (e) => {
        "use strict";
        e.s(
          { encodeAbiParameters: () => f, getArrayComponents: () => h },
          750671
        );
        var t = e.i(787769),
          n = e.i(948628),
          r = e.i(500780),
          a = e.i(207312),
          o = e.i(259123),
          i = e.i(115481),
          s = e.i(561160),
          c = e.i(265288),
          u = e.i(410647),
          l = e.i(994290);
        e.s(
          { arrayRegex: () => d, bytesRegex: () => p, integerRegex: () => m },
          227289
        );
        let d = /^(.*)\[([0-9]*)\]$/,
          p = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
          m =
            /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
        function f(e, d) {
          if (e.length !== d.length)
            throw new t.AbiEncodingLengthMismatchError({
              expectedLength: e.length,
              givenLength: d.length,
            });
          let p = g(
            (function (e) {
              let { params: d, values: p } = e,
                f = [];
              for (let e = 0; e < d.length; e++)
                f.push(
                  (function e(d) {
                    let { param: p, value: f } = d,
                      b = h(p.type);
                    if (b) {
                      let [n, r] = b;
                      return (function (n, r) {
                        let { length: a, param: o } = r,
                          s = null === a;
                        if (!Array.isArray(n)) throw new t.InvalidArrayError(n);
                        if (!s && n.length !== a)
                          throw new t.AbiEncodingArrayLengthMismatchError({
                            expectedLength: a,
                            givenLength: n.length,
                            type: "".concat(o.type, "[").concat(a, "]"),
                          });
                        let c = !1,
                          u = [];
                        for (let t = 0; t < n.length; t++) {
                          let r = e({ param: o, value: n[t] });
                          r.dynamic && (c = !0), u.push(r);
                        }
                        if (s || c) {
                          let e = g(u);
                          if (s) {
                            let t = (0, l.numberToHex)(u.length, { size: 32 });
                            return {
                              dynamic: !0,
                              encoded: u.length > 0 ? (0, i.concat)([t, e]) : t,
                            };
                          }
                          if (c) return { dynamic: !0, encoded: e };
                        }
                        return {
                          dynamic: !1,
                          encoded: (0, i.concat)(
                            u.map((e) => {
                              let { encoded: t } = e;
                              return t;
                            })
                          ),
                        };
                      })(f, { length: n, param: { ...p, type: r } });
                    }
                    if ("tuple" === p.type)
                      return (function (t, n) {
                        let { param: r } = n,
                          a = !1,
                          o = [];
                        for (let n = 0; n < r.components.length; n++) {
                          let i = r.components[n],
                            s = Array.isArray(t) ? n : i.name,
                            c = e({ param: i, value: t[s] });
                          o.push(c), c.dynamic && (a = !0);
                        }
                        return {
                          dynamic: a,
                          encoded: a
                            ? g(o)
                            : (0, i.concat)(
                                o.map((e) => {
                                  let { encoded: t } = e;
                                  return t;
                                })
                              ),
                        };
                      })(f, { param: p });
                    if ("address" === p.type) {
                      var y,
                        v = f;
                      if (!(0, o.isAddress)(v))
                        throw new n.InvalidAddressError({ address: v });
                      return {
                        dynamic: !1,
                        encoded: (0, s.padHex)(v.toLowerCase()),
                      };
                    }
                    if ("bool" === p.type) {
                      var E = f;
                      if ("boolean" != typeof E)
                        throw new r.BaseError(
                          'Invalid boolean value: "'
                            .concat(E, '" (type: ')
                            .concat(typeof E, "). Expected: `true` or `false`.")
                        );
                      return {
                        dynamic: !1,
                        encoded: (0, s.padHex)((0, l.boolToHex)(E)),
                      };
                    }
                    if (p.type.startsWith("uint") || p.type.startsWith("int")) {
                      let e = p.type.startsWith("int"),
                        [, , t = "256"] = null != (y = m.exec(p.type)) ? y : [];
                      return (function (e, t) {
                        let { signed: n, size: r = 256 } = t;
                        if ("number" == typeof r) {
                          let t = 2n ** (BigInt(r) - (n ? 1n : 0n)) - 1n,
                            o = n ? -t - 1n : 0n;
                          if (e > t || e < o)
                            throw new a.IntegerOutOfRangeError({
                              max: t.toString(),
                              min: o.toString(),
                              signed: n,
                              size: r / 8,
                              value: e.toString(),
                            });
                        }
                        return {
                          dynamic: !1,
                          encoded: (0, l.numberToHex)(e, {
                            size: 32,
                            signed: n,
                          }),
                        };
                      })(f, { signed: e, size: Number(t) });
                    }
                    if (p.type.startsWith("bytes"))
                      return (function (e, n) {
                        let { param: r } = n,
                          [, a] = r.type.split("bytes"),
                          o = (0, c.size)(e);
                        if (!a) {
                          let t = e;
                          return (
                            o % 32 != 0 &&
                              (t = (0, s.padHex)(t, {
                                dir: "right",
                                size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                              })),
                            {
                              dynamic: !0,
                              encoded: (0, i.concat)([
                                (0, s.padHex)(
                                  (0, l.numberToHex)(o, { size: 32 })
                                ),
                                t,
                              ]),
                            }
                          );
                        }
                        if (o !== Number.parseInt(a))
                          throw new t.AbiEncodingBytesSizeMismatchError({
                            expectedSize: Number.parseInt(a),
                            value: e,
                          });
                        return {
                          dynamic: !1,
                          encoded: (0, s.padHex)(e, { dir: "right" }),
                        };
                      })(f, { param: p });
                    if ("string" === p.type) {
                      var A = f;
                      let e = (0, l.stringToHex)(A),
                        t = Math.ceil((0, c.size)(e) / 32),
                        n = [];
                      for (let r = 0; r < t; r++)
                        n.push(
                          (0, s.padHex)((0, u.slice)(e, 32 * r, (r + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, i.concat)([
                          (0, s.padHex)(
                            (0, l.numberToHex)((0, c.size)(e), { size: 32 })
                          ),
                          ...n,
                        ]),
                      };
                    }
                    throw new t.InvalidAbiEncodingTypeError(p.type, {
                      docsPath: "/docs/contract/encodeAbiParameters",
                    });
                  })({ param: d[e], value: p[e] })
                );
              return f;
            })({ params: e, values: d })
          );
          return 0 === p.length ? "0x" : p;
        }
        function g(e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let { dynamic: r, encoded: a } = e[n];
            r ? (t += 32) : (t += (0, c.size)(a));
          }
          let n = [],
            r = [],
            a = 0;
          for (let o = 0; o < e.length; o++) {
            let { dynamic: i, encoded: s } = e[o];
            i
              ? (n.push((0, l.numberToHex)(t + a, { size: 32 })),
                r.push(s),
                (a += (0, c.size)(s)))
              : n.push(s);
          }
          return (0, i.concat)([...n, ...r]);
        }
        function h(e) {
          let t = e.match(/^(.*)\[(\d+)?\]$/);
          return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
        }
      },
      [227289],
    ],
    964592: (e) => {
      "use strict";
      e.s({ toEventSelector: () => t });
      let t = e.i(691989).toSignatureHash;
    },
    906420: [
      (e) => {
        "use strict";
        e.s({ encodeFunctionData: () => p }, 906420);
        var t = e.i(115481),
          n = e.i(750671);
        e.s({ prepareEncodeFunctionData: () => d }, 255471);
        var r = e.i(787769),
          a = e.i(575189),
          o = e.i(443923);
        e.s({ getAbiItem: () => u }, 69864);
        var i = e.i(212629),
          s = e.i(259123),
          c = e.i(964592);
        function u(e) {
          let t,
            { abi: n, args: o = [], name: u } = e,
            l = (0, i.isHex)(u, { strict: !1 }),
            d = n.filter((e) =>
              l
                ? "function" === e.type
                  ? (0, a.toFunctionSelector)(e) === u
                  : "event" === e.type && (0, c.toEventSelector)(e) === u
                : "name" in e && e.name === u
            );
          if (0 !== d.length) {
            if (1 === d.length) return d[0];
            for (let e of d) {
              if ("inputs" in e) {
                if (!o || 0 === o.length) {
                  if (!e.inputs || 0 === e.inputs.length) return e;
                  continue;
                }
                if (
                  e.inputs &&
                  0 !== e.inputs.length &&
                  e.inputs.length === o.length &&
                  o.every((t, n) => {
                    let r = "inputs" in e && e.inputs[n];
                    return (
                      !!r &&
                      (function e(t, n) {
                        let r = typeof t,
                          a = n.type;
                        switch (a) {
                          case "address":
                            return (0, s.isAddress)(t, { strict: !1 });
                          case "bool":
                            return "boolean" === r;
                          case "function":
                          case "string":
                            return "string" === r;
                          default:
                            if ("tuple" === a && "components" in n)
                              return Object.values(n.components).every((n, r) =>
                                e(Object.values(t)[r], n)
                              );
                            if (
                              /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                a
                              )
                            )
                              return "number" === r || "bigint" === r;
                            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                              return "string" === r || t instanceof Uint8Array;
                            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                              return (
                                Array.isArray(t) &&
                                t.every((t) =>
                                  e(t, {
                                    ...n,
                                    type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                                  })
                                )
                              );
                            return !1;
                        }
                      })(t, r)
                    );
                  })
                ) {
                  if (t && "inputs" in t && t.inputs) {
                    let n = (function e(t, n, r) {
                      for (let a in t) {
                        let o = t[a],
                          i = n[a];
                        if (
                          "tuple" === o.type &&
                          "tuple" === i.type &&
                          "components" in o &&
                          "components" in i
                        )
                          return e(o.components, i.components, r[a]);
                        let c = [o.type, i.type];
                        if (
                          (c.includes("address") && c.includes("bytes20")) ||
                          (((c.includes("address") && c.includes("string")) ||
                            (c.includes("address") && c.includes("bytes"))) &&
                            (0, s.isAddress)(r[a], { strict: !1 }))
                        )
                          return c;
                      }
                    })(e.inputs, t.inputs, o);
                    if (n)
                      throw new r.AbiItemAmbiguityError(
                        { abiItem: e, type: n[0] },
                        { abiItem: t, type: n[1] }
                      );
                  }
                  t = e;
                }
              }
            }
            return t || d[0];
          }
        }
        let l = "/docs/contract/encodeFunctionData";
        function d(e) {
          let { abi: t, args: n, functionName: i } = e,
            s = t[0];
          if (i) {
            let e = u({ abi: t, args: n, name: i });
            if (!e) throw new r.AbiFunctionNotFoundError(i, { docsPath: l });
            s = e;
          }
          if ("function" !== s.type)
            throw new r.AbiFunctionNotFoundError(void 0, { docsPath: l });
          return {
            abi: [s],
            functionName: (0, a.toFunctionSelector)((0, o.formatAbiItem)(s)),
          };
        }
        function p(e) {
          var r;
          let { args: a } = e,
            { abi: o, functionName: i } =
              1 === e.abi.length &&
              (null == (r = e.functionName) ? void 0 : r.startsWith("0x"))
                ? e
                : d(e),
            s = o[0],
            c =
              "inputs" in s && s.inputs
                ? (0, n.encodeAbiParameters)(s.inputs, null != a ? a : [])
                : void 0;
          return (0, t.concatHex)([i, null != c ? c : "0x"]);
        }
      },
      [69864, 255471],
    ],
    849993: (e) => {
      "use strict";
      e.s({ getContractError: () => i });
      var t = e.i(787769),
        n = e.i(500780),
        r = e.i(994790),
        a = e.i(926777),
        o = e.i(592677);
      function i(e, i) {
        let {
            abi: s,
            address: c,
            args: u,
            docsPath: l,
            functionName: d,
            sender: p,
          } = i,
          m =
            e instanceof r.RawContractError
              ? e
              : e instanceof n.BaseError
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: f, data: g, details: h, message: b, shortMessage: y } = m,
          v =
            e instanceof t.AbiDecodingZeroDataError
              ? new r.ContractFunctionZeroDataError({ functionName: d })
              : [3, o.InternalRpcError.code].includes(f) && (g || h || b || y)
              ? new r.ContractFunctionRevertedError({
                  abi: s,
                  data: "object" == typeof g ? g.data : g,
                  functionName: d,
                  message:
                    m instanceof a.RpcRequestError ? h : null != y ? y : b,
                })
              : e;
        return new r.ContractFunctionExecutionError(v, {
          abi: s,
          args: u,
          contractAddress: c,
          docsPath: l,
          functionName: d,
          sender: p,
        });
      }
    },
    107511: (e) => {
      "use strict";
      e.s({ readContract: () => i });
      var t = e.i(622157),
        n = e.i(906420),
        r = e.i(849993),
        a = e.i(477379),
        o = e.i(315573);
      async function i(e, i) {
        let { abi: s, address: c, args: u, functionName: l, ...d } = i,
          p = (0, n.encodeFunctionData)({ abi: s, args: u, functionName: l });
        try {
          let { data: n } = await (0, a.getAction)(
            e,
            o.call,
            "call"
          )({ ...d, data: p, to: c });
          return (0, t.decodeFunctionResult)({
            abi: s,
            args: u,
            functionName: l,
            data: n || "0x",
          });
        } catch (e) {
          throw (0, r.getContractError)(e, {
            abi: s,
            address: c,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    362360: (e) => {
      "use strict";
      e.s({ multicall: () => d });
      var t = e.i(275982),
        n = e.i(787769),
        r = e.i(500780),
        a = e.i(994790),
        o = e.i(622157),
        i = e.i(906420),
        s = e.i(768759),
        c = e.i(849993),
        u = e.i(477379),
        l = e.i(107511);
      async function d(e, d) {
        var p;
        let {
            account: m,
            allowFailure: f = !0,
            batchSize: g,
            blockNumber: h,
            blockTag: b,
            multicallAddress: y,
            stateOverride: v,
          } = d,
          E = d.contracts,
          A =
            null != g
              ? g
              : ("object" ==
                  typeof (null == (p = e.batch) ? void 0 : p.multicall) &&
                  e.batch.multicall.batchSize) ||
                1024,
          w = y;
        if (!w) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          w = (0, s.getChainContractAddress)({
            blockNumber: h,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let x = [[]],
          B = 0,
          T = 0;
        for (let e = 0; e < E.length; e++) {
          let { abi: t, address: n, args: r, functionName: a } = E[e];
          try {
            let e = (0, i.encodeFunctionData)({
              abi: t,
              args: r,
              functionName: a,
            });
            (T += (e.length - 2) / 2),
              A > 0 &&
                T > A &&
                x[B].length > 0 &&
                (B++, (T = (e.length - 2) / 2), (x[B] = [])),
              (x[B] = [...x[B], { allowFailure: !0, callData: e, target: n }]);
          } catch (o) {
            let e = (0, c.getContractError)(o, {
              abi: t,
              address: n,
              args: r,
              docsPath: "/docs/contract/multicall",
              functionName: a,
              sender: m,
            });
            if (!f) throw e;
            x[B] = [...x[B], { allowFailure: !0, callData: "0x", target: n }];
          }
        }
        let I = await Promise.allSettled(
            x.map((n) =>
              (0, u.getAction)(
                e,
                l.readContract,
                "readContract"
              )({
                abi: t.multicall3Abi,
                account: m,
                address: w,
                args: [n],
                blockNumber: h,
                blockTag: b,
                functionName: "aggregate3",
                stateOverride: v,
              })
            )
          ),
          N = [];
        for (let e = 0; e < I.length; e++) {
          let t = I[e];
          if ("rejected" === t.status) {
            if (!f) throw t.reason;
            for (let n = 0; n < x[e].length; n++)
              N.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: i, success: s } = r[t],
              { callData: u } = x[e][t],
              { abi: l, address: d, functionName: p, args: m } = E[N.length];
            try {
              if ("0x" === u) throw new n.AbiDecodingZeroDataError();
              if (!s) throw new a.RawContractError({ data: i });
              let e = (0, o.decodeFunctionResult)({
                abi: l,
                args: m,
                data: i,
                functionName: p,
              });
              N.push(f ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, c.getContractError)(t, {
                abi: l,
                address: d,
                args: m,
                docsPath: "/docs/contract/multicall",
                functionName: p,
              });
              if (!f) throw e;
              N.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (N.length !== E.length)
          throw new r.BaseError("multicall results mismatch");
        return N;
      }
    },
    94874: (e) => {
      "use strict";
      e.s({ getTransaction: () => a });
      var t = e.i(658213),
        n = e.i(994290),
        r = e.i(581241);
      async function a(e, a) {
        var o, i, s;
        let {
            blockHash: c,
            blockNumber: u,
            blockTag: l,
            hash: d,
            index: p,
          } = a,
          m = l || "latest",
          f = void 0 !== u ? (0, n.numberToHex)(u) : void 0,
          g = null;
        if (
          !(g = d
            ? await e.request(
                { method: "eth_getTransactionByHash", params: [d] },
                { dedupe: !0 }
              )
            : c
            ? await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [c, (0, n.numberToHex)(p)],
                },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [f || m, (0, n.numberToHex)(p)],
                },
                { dedupe: !!f }
              ))
        )
          throw new t.TransactionNotFoundError({
            blockHash: c,
            blockNumber: u,
            blockTag: m,
            hash: d,
            index: p,
          });
        return (
          (null == (s = e.chain) ||
          null == (i = s.formatters) ||
          null == (o = i.transaction)
            ? void 0
            : o.format) || r.formatTransaction
        )(g);
      }
    },
    308989: (e) => {
      "use strict";
      e.s({ observe: () => a });
      let t = new Map(),
        n = new Map(),
        r = 0;
      function a(e, a, o) {
        let i = ++r,
          s = () => t.get(e) || [],
          c = () => {
            let r = s();
            if (!r.some((e) => e.id === i)) return;
            let a = n.get(e);
            if (1 === r.length && a) {
              let e = a();
              e instanceof Promise && e.catch(() => {});
            }
            let o = s();
            t.set(
              e,
              o.filter((e) => e.id !== i)
            );
          },
          u = s();
        if ((t.set(e, [...u, { id: i, fns: a }]), u && u.length > 0)) return c;
        let l = {};
        for (let e in a)
          l[e] = function () {
            for (
              var t, n, r = arguments.length, a = Array(r), o = 0;
              o < r;
              o++
            )
              a[o] = arguments[o];
            let i = s();
            if (0 !== i.length)
              for (let r of i) null == (t = (n = r.fns)[e]) || t.call(n, ...a);
          };
        let d = o(l);
        return "function" == typeof d && n.set(e, d), c;
      }
    },
    519464: (e) => {
      "use strict";
      function t(e) {
        let { args: t, eventName: n } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      e.s({ formatLog: () => t });
    },
    960905: (e) => {
      "use strict";
      e.s({
        defineTransactionReceipt: () => s,
        formatTransactionReceipt: () => i,
        receiptStatuses: () => o,
      });
      var t = e.i(864198),
        n = e.i(771770),
        r = e.i(519464),
        a = e.i(581241);
      let o = { "0x0": "reverted", "0x1": "success" };
      function i(e) {
        let n = {
          ...e,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          contractAddress: e.contractAddress ? e.contractAddress : null,
          cumulativeGasUsed: e.cumulativeGasUsed
            ? BigInt(e.cumulativeGasUsed)
            : null,
          effectiveGasPrice: e.effectiveGasPrice
            ? BigInt(e.effectiveGasPrice)
            : null,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
          logs: e.logs ? e.logs.map((e) => (0, r.formatLog)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, t.hexToNumber)(e.transactionIndex)
            : null,
          status: e.status ? o[e.status] : null,
          type: e.type ? a.transactionType[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (n.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (n.blobGasUsed = BigInt(e.blobGasUsed)),
          n
        );
      }
      let s = (0, n.defineFormatter)("transactionReceipt", i);
    },
    384091: (e) => {
      "use strict";
      e.s({ getTransactionReceipt: () => r });
      var t = e.i(658213),
        n = e.i(960905);
      async function r(e, r) {
        var a, o, i;
        let { hash: s } = r,
          c = await e.request(
            { method: "eth_getTransactionReceipt", params: [s] },
            { dedupe: !0 }
          );
        if (!c) throw new t.TransactionReceiptNotFoundError({ hash: s });
        return (
          (null == (i = e.chain) ||
          null == (o = i.formatters) ||
          null == (a = o.transactionReceipt)
            ? void 0
            : a.format) || n.formatTransactionReceipt
        )(c);
      }
    },
    207212: (e) => {
      "use strict";
      e.s({ poll: () => n });
      var t = e.i(972670);
      function n(e, n) {
        let { emitOnBegin: r, initialWaitTime: a, interval: o } = n,
          i = !0,
          s = () => (i = !1);
        return (
          (async () => {
            var n;
            let c;
            r && (c = await e({ unpoll: s }));
            let u = null != (n = await (null == a ? void 0 : a(c))) ? n : o;
            await (0, t.wait)(u);
            let l = async () => {
              i && (await e({ unpoll: s }), await (0, t.wait)(o), l());
            };
            l();
          })(),
          s
        );
      }
    },
    446985: [
      (e) => {
        "use strict";
        e.s({ getBlockNumber: () => o }, 446985),
          e.s({ getCache: () => r, withCache: () => a }, 739128);
        let t = new Map(),
          n = new Map();
        function r(e) {
          let r = (e, t) => ({
              clear: () => t.delete(e),
              get: () => t.get(e),
              set: (n) => t.set(e, n),
            }),
            a = r(e, t),
            o = r(e, n);
          return {
            clear: () => {
              a.clear(), o.clear();
            },
            promise: a,
            response: o,
          };
        }
        async function a(e, t) {
          let { cacheKey: n, cacheTime: a = 1 / 0 } = t,
            o = r(n),
            i = o.response.get();
          if (i && a > 0 && new Date().getTime() - i.created.getTime() < a)
            return i.data;
          let s = o.promise.get();
          s || ((s = e()), o.promise.set(s));
          try {
            let e = await s;
            return o.response.set({ created: new Date(), data: e }), e;
          } finally {
            o.promise.clear();
          }
        }
        async function o(e) {
          let t,
            { cacheTime: n = e.cacheTime } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return BigInt(
            await a(() => e.request({ method: "eth_blockNumber" }), {
              cacheKey: ((t = e.uid), "blockNumber.".concat(t)),
              cacheTime: n,
            })
          );
        }
      },
      [739128],
    ],
    460029: [
      (e) => {
        "use strict";
        e.s({ waitForTransactionReceipt: () => g }, 460029);
        var t = e.i(381325),
          n = e.i(658213),
          r = e.i(477379),
          a = e.i(308989),
          o = e.i(78903),
          i = e.i(82428),
          s = e.i(383478),
          c = e.i(508914),
          u = e.i(94874),
          l = e.i(384091);
        e.s({ watchBlockNumber: () => f }, 657389);
        var d = e.i(864198),
          p = e.i(207212),
          m = e.i(446985);
        function f(e, t) {
          let n,
            {
              emitOnBegin: o = !1,
              emitMissed: i = !1,
              onBlockNumber: c,
              onError: u,
              poll: l,
              pollingInterval: f = e.pollingInterval,
            } = t;
          return (
            void 0 !== l
              ? l
              : "webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type))
          )
            ? (() => {
                let t = (0, s.stringify)(["watchBlockNumber", e.uid, o, i, f]);
                return (0, a.observe)(
                  t,
                  { onBlockNumber: c, onError: u },
                  (t) =>
                    (0, p.poll)(
                      async () => {
                        try {
                          let a = await (0, r.getAction)(
                            e,
                            m.getBlockNumber,
                            "getBlockNumber"
                          )({ cacheTime: 0 });
                          if (n) {
                            if (a === n) return;
                            if (a - n > 1 && i)
                              for (let e = n + 1n; e < a; e++)
                                t.onBlockNumber(e, n), (n = e);
                          }
                          (!n || a > n) && (t.onBlockNumber(a, n), (n = a));
                        } catch (e) {
                          var a;
                          null == (a = t.onError) || a.call(t, e);
                        }
                      },
                      { emitOnBegin: o, interval: f }
                    )
                );
              })()
            : (() => {
                let t = (0, s.stringify)(["watchBlockNumber", e.uid, o, i]);
                return (0, a.observe)(
                  t,
                  { onBlockNumber: c, onError: u },
                  (t) => {
                    let r = !0,
                      a = () => (r = !1);
                    return (
                      (async () => {
                        try {
                          let o = (() => {
                              if ("fallback" === e.transport.type) {
                                let t = e.transport.transports.find(
                                  (e) =>
                                    "webSocket" === e.config.type ||
                                    "ipc" === e.config.type
                                );
                                return t ? t.value : e.transport;
                              }
                              return e.transport;
                            })(),
                            { unsubscribe: i } = await o.subscribe({
                              params: ["newHeads"],
                              onData(e) {
                                var a;
                                if (!r) return;
                                let o = (0, d.hexToBigInt)(
                                  null == (a = e.result) ? void 0 : a.number
                                );
                                t.onBlockNumber(o, n), (n = o);
                              },
                              onError(e) {
                                var n;
                                null == (n = t.onError) || n.call(t, e);
                              },
                            });
                          (a = i), r || a();
                        } catch (e) {
                          null == u || u(e);
                        }
                      })(),
                      () => a()
                    );
                  }
                );
              })();
        }
        async function g(e, d) {
          var p;
          let m,
            g,
            h,
            b,
            y,
            {
              checkReplacement: v = !0,
              confirmations: E = 1,
              hash: A,
              onReplaced: w,
              retryCount: x = 6,
              retryDelay: B = (e) => {
                let { count: t } = e;
                return 200 * ~~(1 << t);
              },
              timeout: T = 18e4,
            } = d,
            I = (0, s.stringify)(["waitForTransactionReceipt", e.uid, A]),
            N = d.pollingInterval
              ? d.pollingInterval
              : (
                  null == (p = e.chain)
                    ? void 0
                    : p.experimental_preconfirmationTime
                )
              ? e.chain.experimental_preconfirmationTime
              : e.pollingInterval,
            F = !1,
            { promise: k, resolve: S, reject: z } = (0, o.withResolvers)(),
            D = T
              ? setTimeout(() => {
                  y(),
                    b(),
                    z(new n.WaitForTransactionReceiptTimeoutError({ hash: A }));
                }, T)
              : void 0;
          return (
            (b = (0, a.observe)(
              I,
              { onReplaced: w, resolve: S, reject: z },
              async (a) => {
                if (
                  (h = await (0, r.getAction)(
                    e,
                    l.getTransactionReceipt,
                    "getTransactionReceipt"
                  )({ hash: A }).catch(() => void 0)) &&
                  E <= 1
                ) {
                  clearTimeout(D), a.resolve(h), b();
                  return;
                }
                y = (0, r.getAction)(
                  e,
                  f,
                  "watchBlockNumber"
                )({
                  emitMissed: !0,
                  emitOnBegin: !0,
                  poll: !0,
                  pollingInterval: N,
                  async onBlockNumber(o) {
                    let s = (e) => {
                        clearTimeout(D), y(), e(), b();
                      },
                      d = o;
                    if (!F)
                      try {
                        if (h) {
                          if (
                            E > 1 &&
                            (!h.blockNumber || d - h.blockNumber + 1n < E)
                          )
                            return;
                          s(() => a.resolve(h));
                          return;
                        }
                        if (
                          (v &&
                            !m &&
                            ((F = !0),
                            await (0, i.withRetry)(
                              async () => {
                                (m = await (0, r.getAction)(
                                  e,
                                  u.getTransaction,
                                  "getTransaction"
                                )({ hash: A })).blockNumber &&
                                  (d = m.blockNumber);
                              },
                              { delay: B, retryCount: x }
                            ),
                            (F = !1)),
                          (h = await (0, r.getAction)(
                            e,
                            l.getTransactionReceipt,
                            "getTransactionReceipt"
                          )({ hash: A })),
                          E > 1 &&
                            (!h.blockNumber || d - h.blockNumber + 1n < E))
                        )
                          return;
                        s(() => a.resolve(h));
                      } catch (o) {
                        if (
                          o instanceof n.TransactionNotFoundError ||
                          o instanceof n.TransactionReceiptNotFoundError
                        ) {
                          if (!m) {
                            F = !1;
                            return;
                          }
                          try {
                            (g = m), (F = !0);
                            let n = await (0, i.withRetry)(
                              () =>
                                (0, r.getAction)(
                                  e,
                                  c.getBlock,
                                  "getBlock"
                                )({ blockNumber: d, includeTransactions: !0 }),
                              {
                                delay: B,
                                retryCount: x,
                                shouldRetry: (e) => {
                                  let { error: n } = e;
                                  return n instanceof t.BlockNotFoundError;
                                },
                              }
                            );
                            F = !1;
                            let o = n.transactions.find((e) => {
                              let { from: t, nonce: n } = e;
                              return t === g.from && n === g.nonce;
                            });
                            if (
                              !o ||
                              ((h = await (0, r.getAction)(
                                e,
                                l.getTransactionReceipt,
                                "getTransactionReceipt"
                              )({ hash: o.hash })),
                              E > 1 &&
                                (!h.blockNumber || d - h.blockNumber + 1n < E))
                            )
                              return;
                            let u = "replaced";
                            o.to === g.to &&
                            o.value === g.value &&
                            o.input === g.input
                              ? (u = "repriced")
                              : o.from === o.to &&
                                0n === o.value &&
                                (u = "cancelled"),
                              s(() => {
                                var e;
                                null == (e = a.onReplaced) ||
                                  e.call(a, {
                                    reason: u,
                                    replacedTransaction: g,
                                    transaction: o,
                                    transactionReceipt: h,
                                  }),
                                  a.resolve(h);
                              });
                          } catch (e) {
                            s(() => a.reject(e));
                          }
                        } else s(() => a.reject(o));
                      }
                  },
                });
              }
            )),
            k
          );
        }
      },
      [657389],
    ],
    740900: (e) => {
      "use strict";
      function t(e, t) {
        var n, r;
        let { method: a } = t,
          o = {};
        return (
          "fallback" === e.transport.type &&
            (null == (n = (r = e.transport).onResponse) ||
              n.call(r, (e) => {
                let { method: t, response: n, status: r, transport: i } = e;
                "success" === r && a === t && (o[n] = i.request);
              })),
          (t) => o[t] || e.request
        );
      }
      e.s({ createFilterRequestScope: () => t });
    },
    129789: (e) => {
      "use strict";
      e.s({ createPendingTransactionFilter: () => n });
      var t = e.i(740900);
      async function n(e) {
        let n = (0, t.createFilterRequestScope)(e, {
            method: "eth_newPendingTransactionFilter",
          }),
          r = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: r, request: n(r), type: "transaction" };
      }
    },
    171534: [
      (e) => {
        "use strict";
        e.s({ parseEventLogs: () => p }, 171534);
        var t = e.i(787769),
          n = e.i(429921),
          r = e.i(919717),
          a = e.i(831826),
          o = e.i(964592);
        e.s({ decodeEventLog: () => d }, 812699);
        var i = e.i(265288),
          s = e.i(269832),
          c = e.i(687681),
          u = e.i(443923);
        let l = "/docs/contract/decodeEventLog";
        function d(e) {
          let { abi: n, data: r, strict: a, topics: d } = e,
            p = null == a || a,
            [m, ...f] = d;
          if (!m)
            throw new t.AbiEventSignatureEmptyTopicsError({ docsPath: l });
          let g = n.find(
            (e) =>
              "event" === e.type &&
              m === (0, o.toEventSelector)((0, u.formatAbiItem)(e))
          );
          if (!(g && "name" in g) || "event" !== g.type)
            throw new t.AbiEventSignatureNotFoundError(m, { docsPath: l });
          let { name: h, inputs: b } = g,
            y = null == b ? void 0 : b.some((e) => !("name" in e && e.name)),
            v = y ? [] : {},
            E = b
              .map((e, t) => [e, t])
              .filter((e) => {
                let [t] = e;
                return "indexed" in t && t.indexed;
              });
          for (let e = 0; e < E.length; e++) {
            let [n, r] = E[e],
              a = f[e];
            if (!a)
              throw new t.DecodeLogTopicsMismatch({ abiItem: g, param: n });
            v[y ? r : n.name || r] = (function (e) {
              let { param: t, value: n } = e;
              return "string" === t.type ||
                "bytes" === t.type ||
                "tuple" === t.type ||
                t.type.match(/^(.*)\[(\d+)?\]$/)
                ? n
                : ((0, c.decodeAbiParameters)([t], n) || [])[0];
            })({ param: n, value: a });
          }
          let A = b.filter((e) => !("indexed" in e && e.indexed));
          if (A.length > 0) {
            if (r && "0x" !== r)
              try {
                let e = (0, c.decodeAbiParameters)(A, r);
                if (e) {
                  var w;
                  if (y)
                    for (let t = 0; t < b.length; t++)
                      v[t] = null != (w = v[t]) ? w : e.shift();
                  else for (let t = 0; t < A.length; t++) v[A[t].name] = e[t];
                }
              } catch (e) {
                if (p) {
                  if (
                    e instanceof t.AbiDecodingDataSizeTooSmallError ||
                    e instanceof s.PositionOutOfBoundsError
                  )
                    throw new t.DecodeLogDataMismatch({
                      abiItem: g,
                      data: r,
                      params: A,
                      size: (0, i.size)(r),
                    });
                  throw e;
                }
              }
            else if (p)
              throw new t.DecodeLogDataMismatch({
                abiItem: g,
                data: "0x",
                params: A,
                size: 0,
              });
          }
          return {
            eventName: h,
            args: Object.values(v).length > 0 ? v : void 0,
          };
        }
        function p(e) {
          let { abi: i, args: s, logs: c, strict: u = !0 } = e,
            l = (() => {
              if (e.eventName)
                return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
            })();
          return c
            .map((e) => {
              try {
                let t = i.find(
                  (t) =>
                    "event" === t.type &&
                    e.topics[0] === (0, o.toEventSelector)(t)
                );
                if (!t) return null;
                let c = d({ ...e, abi: [t], strict: u });
                if (
                  (l && !l.includes(c.eventName)) ||
                  !(function (e) {
                    let { args: t, inputs: o, matchArgs: i } = e;
                    if (!i) return !0;
                    if (!t) return !1;
                    function s(e, t, o) {
                      try {
                        if ("address" === e.type)
                          return (0, n.isAddressEqual)(t, o);
                        if ("string" === e.type || "bytes" === e.type)
                          return (0, a.keccak256)((0, r.toBytes)(t)) === o;
                        return t === o;
                      } catch (e) {
                        return !1;
                      }
                    }
                    return Array.isArray(t) && Array.isArray(i)
                      ? i.every((e, n) => {
                          if (null == e) return !0;
                          let r = o[n];
                          return (
                            !!r &&
                            (Array.isArray(e) ? e : [e]).some((e) =>
                              s(r, e, t[n])
                            )
                          );
                        })
                      : !(
                          "object" != typeof t ||
                          Array.isArray(t) ||
                          "object" != typeof i ||
                          Array.isArray(i)
                        ) &&
                          Object.entries(i).every((e) => {
                            let [n, r] = e;
                            if (null == r) return !0;
                            let a = o.find((e) => e.name === n);
                            return (
                              !!a &&
                              (Array.isArray(r) ? r : [r]).some((e) =>
                                s(a, e, t[n])
                              )
                            );
                          });
                  })({ args: c.args, inputs: t.inputs, matchArgs: s })
                )
                  return null;
                return { ...c, ...e };
              } catch (a) {
                let n, r;
                if (a instanceof t.AbiEventSignatureNotFoundError) return null;
                if (
                  a instanceof t.DecodeLogDataMismatch ||
                  a instanceof t.DecodeLogTopicsMismatch
                ) {
                  var c;
                  if (u) return null;
                  (n = a.abiItem.name),
                    (r =
                      null == (c = a.abiItem.inputs)
                        ? void 0
                        : c.some((e) => !("name" in e && e.name)));
                }
                return { ...e, args: r ? [] : {}, eventName: n };
              }
            })
            .filter(Boolean);
        }
      },
      [812699],
    ],
    579681: (e) => {
      "use strict";
      e.s({ getFilterChanges: () => r });
      var t = e.i(171534),
        n = e.i(519464);
      async function r(e, r) {
        let { filter: a } = r,
          o = "strict" in a && a.strict,
          i = await a.request({
            method: "eth_getFilterChanges",
            params: [a.id],
          });
        if ("string" == typeof i[0]) return i;
        let s = i.map((e) => (0, n.formatLog)(e));
        return "abi" in a && a.abi
          ? (0, t.parseEventLogs)({ abi: a.abi, logs: s, strict: o })
          : s;
      }
    },
    237301: (e) => {
      "use strict";
      async function t(e, t) {
        let { filter: n } = t;
        return n.request({ method: "eth_uninstallFilter", params: [n.id] });
      }
      e.s({ uninstallFilter: () => t });
    },
    59948: (e) => {
      "use strict";
      e.s({ watchPendingTransactions: () => c });
      var t = e.i(477379),
        n = e.i(308989),
        r = e.i(207212),
        a = e.i(383478),
        o = e.i(129789),
        i = e.i(579681),
        s = e.i(237301);
      function c(e, c) {
        let u,
          l,
          {
            batch: d = !0,
            onError: p,
            onTransactions: m,
            poll: f,
            pollingInterval: g = e.pollingInterval,
          } = c;
        return (
          void 0 !== f
            ? f
            : "webSocket" !== e.transport.type && "ipc" !== e.transport.type
        )
          ? (() => {
              let c = (0, a.stringify)([
                "watchPendingTransactions",
                e.uid,
                d,
                g,
              ]);
              return (0, n.observe)(
                c,
                { onTransactions: m, onError: p },
                (n) => {
                  let a,
                    c = (0, r.poll)(
                      async () => {
                        try {
                          if (!a)
                            try {
                              a = await (0, t.getAction)(
                                e,
                                o.createPendingTransactionFilter,
                                "createPendingTransactionFilter"
                              )({});
                              return;
                            } catch (e) {
                              throw (c(), e);
                            }
                          let r = await (0, t.getAction)(
                            e,
                            i.getFilterChanges,
                            "getFilterChanges"
                          )({ filter: a });
                          if (0 === r.length) return;
                          if (d) n.onTransactions(r);
                          else for (let e of r) n.onTransactions([e]);
                        } catch (e) {
                          var r;
                          null == (r = n.onError) || r.call(n, e);
                        }
                      },
                      { emitOnBegin: !0, interval: g }
                    );
                  return async () => {
                    a &&
                      (await (0, t.getAction)(
                        e,
                        s.uninstallFilter,
                        "uninstallFilter"
                      )({ filter: a })),
                      c();
                  };
                }
              );
            })()
          : ((u = !0),
            (l = () => (u = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!u) return;
                    let t = e.result;
                    m([t]);
                  },
                  onError(e) {
                    null == p || p(e);
                  },
                });
                (l = t), u || l();
              } catch (e) {
                null == p || p(e);
              }
            })(),
            () => l());
      }
    },
  },
]);

//# sourceMappingURL=4909752926b9f798.js.map
