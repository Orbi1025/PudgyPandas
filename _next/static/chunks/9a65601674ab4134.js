(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    610210: (t) => {
      "use strict";
      function e() {
        for (var t, e, r = 0, n = ""; r < arguments.length; )
          (t = arguments[r++]) &&
            (e = (function t(e) {
              var r,
                n,
                a = "";
              if ("string" == typeof e || "number" == typeof e) a += e;
              else if ("object" == typeof e)
                if (Array.isArray(e))
                  for (r = 0; r < e.length; r++)
                    e[r] && (n = t(e[r])) && (a && (a += " "), (a += n));
                else for (r in e) e[r] && (a && (a += " "), (a += r));
              return a;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
      t.s({ clsx: () => e, default: () => r });
      let r = e;
    },
    895450: [
      (t) => {
        "use strict";
        t.s(
          { localBatchGatewayRequest: () => g, localBatchGatewayUrl: () => h },
          895450
        );
        var e = t.i(275982),
          r = t.i(587716);
        t.s({ decodeFunctionData: () => c }, 213422);
        var n = t.i(787769),
          a = t.i(410647),
          i = t.i(575189),
          o = t.i(687681),
          s = t.i(443923);
        function c(t) {
          let { abi: e, data: r } = t,
            c = (0, a.slice)(r, 0, 4),
            u = e.find(
              (t) =>
                "function" === t.type &&
                c === (0, i.toFunctionSelector)((0, s.formatAbiItem)(t))
            );
          if (!u)
            throw new n.AbiFunctionSignatureNotFoundError(c, {
              docsPath: "/docs/contract/decodeFunctionData",
            });
          return {
            functionName: u.name,
            args:
              "inputs" in u && u.inputs && u.inputs.length > 0
                ? (0, o.decodeAbiParameters)(u.inputs, (0, a.slice)(r, 4))
                : void 0,
          };
        }
        t.s({ encodeErrorResult: () => f }, 401981);
        var u = t.i(115481),
          l = t.i(750671),
          d = t.i(69864);
        let y = "/docs/contract/encodeErrorResult";
        function f(t) {
          let { abi: e, errorName: r, args: a } = t,
            o = e[0];
          if (r) {
            let t = (0, d.getAbiItem)({ abi: e, args: a, name: r });
            if (!t) throw new n.AbiErrorNotFoundError(r, { docsPath: y });
            o = t;
          }
          if ("error" !== o.type)
            throw new n.AbiErrorNotFoundError(void 0, { docsPath: y });
          let c = (0, s.formatAbiItem)(o),
            f = (0, i.toFunctionSelector)(c),
            p = "0x";
          if (a && a.length > 0) {
            if (!o.inputs)
              throw new n.AbiErrorInputsNotFoundError(o.name, { docsPath: y });
            p = (0, l.encodeAbiParameters)(o.inputs, a);
          }
          return (0, u.concatHex)([f, p]);
        }
        t.s({ encodeFunctionResult: () => m }, 240614);
        let p = "/docs/contract/encodeFunctionResult";
        function m(t) {
          let { abi: e, functionName: r, result: a } = t,
            i = e[0];
          if (r) {
            let t = (0, d.getAbiItem)({ abi: e, name: r });
            if (!t) throw new n.AbiFunctionNotFoundError(r, { docsPath: p });
            i = t;
          }
          if ("function" !== i.type)
            throw new n.AbiFunctionNotFoundError(void 0, { docsPath: p });
          if (!i.outputs)
            throw new n.AbiFunctionOutputsNotFoundError(i.name, {
              docsPath: p,
            });
          let o = (() => {
            if (0 === i.outputs.length) return [];
            if (1 === i.outputs.length) return [a];
            if (Array.isArray(a)) return a;
            throw new n.InvalidArrayError(a);
          })();
          return (0, l.encodeAbiParameters)(i.outputs, o);
        }
        let h = "x-batch-gateway:true";
        async function g(t) {
          let { data: n, ccipRequest: a } = t,
            {
              args: [i],
            } = c({ abi: e.batchGatewayAbi, data: n }),
            o = [],
            s = [];
          return (
            await Promise.all(
              i.map(async (t, n) => {
                try {
                  (s[n] = t.urls.includes(h)
                    ? await g({ data: t.data, ccipRequest: a })
                    : await a(t)),
                    (o[n] = !1);
                } catch (t) {
                  var i;
                  (o[n] = !0),
                    (s[n] =
                      "HttpRequestError" === (i = t).name && i.status
                        ? f({
                            abi: e.batchGatewayAbi,
                            errorName: "HttpError",
                            args: [i.status, i.shortMessage],
                          })
                        : f({
                            abi: [r.solidityError],
                            errorName: "Error",
                            args: [
                              "shortMessage" in i ? i.shortMessage : i.message,
                            ],
                          }));
                }
              })
            ),
            m({ abi: e.batchGatewayAbi, functionName: "query", result: [o, s] })
          );
        }
      },
      [213422, 401981, 240614],
    ],
    987880: [
      (t) => {
        "use strict";
        t.s({ hashMessage: () => s }, 987880);
        var e = t.i(831826);
        t.s({ toPrefixedMessage: () => o }, 877635),
          t.s({ presignMessagePrefix: () => r }, 580044);
        let r = "\x19Ethereum Signed Message:\n";
        var n = t.i(115481),
          a = t.i(265288),
          i = t.i(994290);
        function o(t) {
          let e =
              "string" == typeof t
                ? (0, i.stringToHex)(t)
                : "string" == typeof t.raw
                ? t.raw
                : (0, i.bytesToHex)(t.raw),
            o = (0, i.stringToHex)("".concat(r).concat((0, a.size)(e)));
          return (0, n.concat)([o, e]);
        }
        function s(t, r) {
          return (0, e.keccak256)(o(t), r);
        }
        t.s(
          { hashDomain: () => A, hashStruct: () => P, hashTypedData: () => I },
          754444
        );
        var c = t.i(750671);
        t.s(
          {
            domainSeparator: () => E,
            getTypesForEIP712Domain: () => w,
            serializeTypedData: () => b,
            validateTypedData: () => v,
          },
          216788
        );
        var u = t.i(787769),
          l = t.i(948628);
        t.s(
          {
            InvalidDomainError: () => f,
            InvalidPrimaryTypeError: () => p,
            InvalidStructTypeError: () => m,
          },
          866575
        );
        var d = t.i(383478),
          y = t.i(500780);
        class f extends y.BaseError {
          constructor({ domain: t }) {
            super('Invalid domain "'.concat((0, d.stringify)(t), '".'), {
              metaMessages: ["Must be a valid EIP-712 domain."],
            });
          }
        }
        class p extends y.BaseError {
          constructor({ primaryType: t, types: e }) {
            super(
              "Invalid primary type `"
                .concat(t, "` must be one of `")
                .concat(JSON.stringify(Object.keys(e)), "`."),
              {
                docsPath:
                  "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
                metaMessages: [
                  "Check that the primary type is a key in `types`.",
                ],
              }
            );
          }
        }
        class m extends y.BaseError {
          constructor({ type: t }) {
            super('Struct type "'.concat(t, '" is invalid.'), {
              metaMessages: ["Struct type must not be a Solidity type."],
              name: "InvalidStructTypeError",
            });
          }
        }
        var h = t.i(259123),
          g = t.i(227289);
        function b(t) {
          let { domain: e, message: r, primaryType: n, types: a } = t,
            i = (t, e) => {
              let r = { ...e };
              for (let e of t) {
                let { name: t, type: n } = e;
                "address" === n && (r[t] = r[t].toLowerCase());
              }
              return r;
            },
            o = a.EIP712Domain && e ? i(a.EIP712Domain, e) : {},
            s = (() => {
              if ("EIP712Domain" !== n) return i(a[n], r);
            })();
          return (0, d.stringify)({
            domain: o,
            message: s,
            primaryType: n,
            types: a,
          });
        }
        function v(t) {
          let { domain: e, message: r, primaryType: n, types: o } = t,
            s = (t, e) => {
              for (let r of t) {
                let { name: t, type: n } = r,
                  c = e[t],
                  d = n.match(g.integerRegex);
                if (d && ("number" == typeof c || "bigint" == typeof c)) {
                  let [t, e, r] = d;
                  (0, i.numberToHex)(c, {
                    signed: "int" === e,
                    size: Number.parseInt(r) / 8,
                  });
                }
                if (
                  "address" === n &&
                  "string" == typeof c &&
                  !(0, h.isAddress)(c)
                )
                  throw new l.InvalidAddressError({ address: c });
                let y = n.match(g.bytesRegex);
                if (y) {
                  let [t, e] = y;
                  if (e && (0, a.size)(c) !== Number.parseInt(e))
                    throw new u.BytesSizeMismatchError({
                      expectedSize: Number.parseInt(e),
                      givenSize: (0, a.size)(c),
                    });
                }
                let f = o[n];
                f &&
                  ((function (t) {
                    if (
                      "address" === t ||
                      "bool" === t ||
                      "string" === t ||
                      t.startsWith("bytes") ||
                      t.startsWith("uint") ||
                      t.startsWith("int")
                    )
                      throw new m({ type: t });
                  })(n),
                  s(f, c));
              }
            };
          if (o.EIP712Domain && e) {
            if ("object" != typeof e) throw new f({ domain: e });
            s(o.EIP712Domain, e);
          }
          if ("EIP712Domain" !== n)
            if (o[n]) s(o[n], r);
            else throw new p({ primaryType: n, types: o });
        }
        function w(t) {
          let { domain: e } = t;
          return [
            "string" == typeof (null == e ? void 0 : e.name) && {
              name: "name",
              type: "string",
            },
            (null == e ? void 0 : e.version) && {
              name: "version",
              type: "string",
            },
            ("number" == typeof (null == e ? void 0 : e.chainId) ||
              "bigint" == typeof (null == e ? void 0 : e.chainId)) && {
              name: "chainId",
              type: "uint256",
            },
            (null == e ? void 0 : e.verifyingContract) && {
              name: "verifyingContract",
              type: "address",
            },
            (null == e ? void 0 : e.salt) && { name: "salt", type: "bytes32" },
          ].filter(Boolean);
        }
        function E(t) {
          let { domain: e } = t;
          return A({ domain: e, types: { EIP712Domain: w({ domain: e }) } });
        }
        function I(t) {
          let { domain: r = {}, message: a, primaryType: i } = t,
            o = { EIP712Domain: w({ domain: r }), ...t.types };
          v({ domain: r, message: a, primaryType: i, types: o });
          let s = ["0x1901"];
          return (
            r && s.push(A({ domain: r, types: o })),
            "EIP712Domain" !== i &&
              s.push(P({ data: a, primaryType: i, types: o })),
            (0, e.keccak256)((0, n.concat)(s))
          );
        }
        function A(t) {
          let { domain: e, types: r } = t;
          return P({ data: e, primaryType: "EIP712Domain", types: r });
        }
        function P(t) {
          let { data: r, primaryType: n, types: a } = t,
            o = (function t(r) {
              let { data: n, primaryType: a, types: o } = r,
                s = [{ type: "bytes32" }],
                u = [
                  (function (t) {
                    let { primaryType: r, types: n } = t,
                      a = (0, i.toHex)(
                        (function (t) {
                          let { primaryType: e, types: r } = t,
                            n = "",
                            a = (function t(e) {
                              let { primaryType: r, types: n } = e,
                                a =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : new Set(),
                                i = r.match(/^\w*/u),
                                o = null == i ? void 0 : i[0];
                              if (a.has(o) || void 0 === n[o]) return a;
                              for (let e of (a.add(o), n[o]))
                                t({ primaryType: e.type, types: n }, a);
                              return a;
                            })({ primaryType: e, types: r });
                          for (let t of (a.delete(e),
                          [e, ...Array.from(a).sort()]))
                            n += "".concat(t, "(").concat(
                              r[t]
                                .map((t) => {
                                  let { name: e, type: r } = t;
                                  return "".concat(r, " ").concat(e);
                                })
                                .join(","),
                              ")"
                            );
                          return n;
                        })({ primaryType: r, types: n })
                      );
                    return (0, e.keccak256)(a);
                  })({ primaryType: a, types: o }),
                ];
              for (let r of o[a]) {
                let [a, l] = (function r(n) {
                  let { types: a, name: o, type: s, value: u } = n;
                  if (void 0 !== a[s])
                    return [
                      { type: "bytes32" },
                      (0, e.keccak256)(
                        t({ data: u, primaryType: s, types: a })
                      ),
                    ];
                  if ("bytes" === s) {
                    let t = u.length % 2 ? "0" : "";
                    return (
                      (u = "0x".concat(t + u.slice(2))),
                      [{ type: "bytes32" }, (0, e.keccak256)(u)]
                    );
                  }
                  if ("string" === s)
                    return [
                      { type: "bytes32" },
                      (0, e.keccak256)((0, i.toHex)(u)),
                    ];
                  if (s.lastIndexOf("]") === s.length - 1) {
                    let t = s.slice(0, s.lastIndexOf("[")),
                      n = u.map((e) =>
                        r({ name: o, type: t, types: a, value: e })
                      );
                    return [
                      { type: "bytes32" },
                      (0, e.keccak256)(
                        (0, c.encodeAbiParameters)(
                          n.map((t) => {
                            let [e] = t;
                            return e;
                          }),
                          n.map((t) => {
                            let [, e] = t;
                            return e;
                          })
                        )
                      ),
                    ];
                  }
                  return [{ type: s }, u];
                })({ types: o, name: r.name, type: r.type, value: n[r.name] });
                s.push(a), u.push(l);
              }
              return (0, c.encodeAbiParameters)(s, u);
            })({ data: r, primaryType: n, types: a });
          return (0, e.keccak256)(o);
        }
      },
      [580044, 877635, 866575, 216788, 754444],
    ],
  },
]);

//# sourceMappingURL=58ab4b3a2d157ea5.js.map
