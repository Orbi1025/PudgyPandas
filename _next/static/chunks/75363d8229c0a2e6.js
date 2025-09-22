(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    587716: (e) => {
      "use strict";
      e.s({
        panicReasons: () => t,
        solidityError: () => n,
        solidityPanic: () => a,
      });
      let t = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        n = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        a = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    687681: [
      (e) => {
        "use strict";
        e.s({ decodeAbiParameters: () => v }, 687681);
        var t = e.i(787769),
          n = e.i(549798),
          a = e.i(840891),
          r = e.i(265288),
          i = e.i(410647),
          s = e.i(569103);
        e.s(
          {
            bytesToBigInt: () => c,
            bytesToBool: () => p,
            bytesToNumber: () => y,
            bytesToString: () => m,
            fromBytes: () => d,
          },
          490429
        );
        var o = e.i(207312),
          u = e.i(864198),
          l = e.i(994290);
        function d(e, t) {
          let n = "string" == typeof t ? { to: t } : t,
            a = n.to;
          return "number" === a
            ? y(e, n)
            : "bigint" === a
            ? c(e, n)
            : "boolean" === a
            ? p(e, n)
            : "string" === a
            ? m(e, n)
            : (0, l.bytesToHex)(e, n);
        }
        function c(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          void 0 !== t.size && (0, u.assertSize)(e, { size: t.size });
          let n = (0, l.bytesToHex)(e, t);
          return (0, u.hexToBigInt)(n, t);
        }
        function p(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e;
          if (
            (void 0 !== t.size &&
              ((0, u.assertSize)(n, { size: t.size }), (n = (0, s.trim)(n))),
            n.length > 1 || n[0] > 1)
          )
            throw new o.InvalidBytesBooleanError(n);
          return !!n[0];
        }
        function y(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          void 0 !== t.size && (0, u.assertSize)(e, { size: t.size });
          let n = (0, l.bytesToHex)(e, t);
          return (0, u.hexToNumber)(n, t);
        }
        function m(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e;
          return (
            void 0 !== t.size &&
              ((0, u.assertSize)(n, { size: t.size }),
              (n = (0, s.trim)(n, { dir: "right" }))),
            new TextDecoder().decode(n)
          );
        }
        var b = e.i(919717),
          f = e.i(750671);
        function v(e, o) {
          let u = "string" == typeof o ? (0, b.hexToBytes)(o) : o,
            d = (0, a.createCursor)(u);
          if (0 === (0, r.size)(u) && e.length > 0)
            throw new t.AbiDecodingZeroDataError();
          if ((0, r.size)(o) && 32 > (0, r.size)(o))
            throw new t.AbiDecodingDataSizeTooSmallError({
              data: "string" == typeof o ? o : (0, l.bytesToHex)(o),
              params: e,
              size: (0, r.size)(o),
            });
          let v = 0,
            h = [];
          for (let a = 0; a < e.length; ++a) {
            let r = e[a];
            d.setPosition(v);
            let [o, u] = (function e(a, r, o) {
              let { staticPosition: u } = o,
                d = (0, f.getArrayComponents)(r.type);
              if (d) {
                let [t, n] = d;
                return (function (t, n, a) {
                  let { length: r, staticPosition: i } = a;
                  if (!r) {
                    let a = i + y(t.readBytes(32)),
                      r = a + 32;
                    t.setPosition(a);
                    let s = y(t.readBytes(32)),
                      o = g(n),
                      u = 0,
                      l = [];
                    for (let a = 0; a < s; ++a) {
                      t.setPosition(r + (o ? 32 * a : u));
                      let [i, s] = e(t, n, { staticPosition: r });
                      (u += s), l.push(i);
                    }
                    return t.setPosition(i + 32), [l, 32];
                  }
                  if (g(n)) {
                    let a = i + y(t.readBytes(32)),
                      s = [];
                    for (let i = 0; i < r; ++i) {
                      t.setPosition(a + 32 * i);
                      let [r] = e(t, n, { staticPosition: a });
                      s.push(r);
                    }
                    return t.setPosition(i + 32), [s, 32];
                  }
                  let s = 0,
                    o = [];
                  for (let a = 0; a < r; ++a) {
                    let [a, r] = e(t, n, { staticPosition: i + s });
                    (s += r), o.push(a);
                  }
                  return [o, s];
                })(a, { ...r, type: n }, { length: t, staticPosition: u });
              }
              if ("tuple" === r.type)
                return (function (t, n, a) {
                  let { staticPosition: r } = a,
                    i =
                      0 === n.components.length ||
                      n.components.some((e) => {
                        let { name: t } = e;
                        return !t;
                      }),
                    s = i ? [] : {},
                    o = 0;
                  if (g(n)) {
                    let a = r + y(t.readBytes(32));
                    for (let r = 0; r < n.components.length; ++r) {
                      let u = n.components[r];
                      t.setPosition(a + o);
                      let [l, d] = e(t, u, { staticPosition: a });
                      (o += d), (s[i ? r : null == u ? void 0 : u.name] = l);
                    }
                    return t.setPosition(r + 32), [s, 32];
                  }
                  for (let a = 0; a < n.components.length; ++a) {
                    let u = n.components[a],
                      [l, d] = e(t, u, { staticPosition: r });
                    (s[i ? a : null == u ? void 0 : u.name] = l), (o += d);
                  }
                  return [s, o];
                })(a, r, { staticPosition: u });
              if ("address" === r.type) {
                var b = a;
                let e = b.readBytes(32);
                return [
                  (0, n.checksumAddress)(
                    (0, l.bytesToHex)((0, i.sliceBytes)(e, -20))
                  ),
                  32,
                ];
              }
              if ("bool" === r.type)
                return [p(a.readBytes(32), { size: 32 }), 32];
              if (r.type.startsWith("bytes"))
                return (function (e, t, n) {
                  let { staticPosition: a } = n,
                    [r, i] = t.type.split("bytes");
                  if (!i) {
                    let t = y(e.readBytes(32));
                    e.setPosition(a + t);
                    let n = y(e.readBytes(32));
                    if (0 === n) return e.setPosition(a + 32), ["0x", 32];
                    let r = e.readBytes(n);
                    return e.setPosition(a + 32), [(0, l.bytesToHex)(r), 32];
                  }
                  return [
                    (0, l.bytesToHex)(e.readBytes(Number.parseInt(i), 32)),
                    32,
                  ];
                })(a, r, { staticPosition: u });
              if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                var v = a,
                  h = r;
                let e = h.type.startsWith("int"),
                  t = Number.parseInt(h.type.split("int")[1] || "256"),
                  n = v.readBytes(32);
                return [t > 48 ? c(n, { signed: e }) : y(n, { signed: e }), 32];
              }
              if ("string" === r.type)
                return (function (e, t) {
                  let { staticPosition: n } = t,
                    a = y(e.readBytes(32));
                  e.setPosition(n + a);
                  let r = y(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["", 32];
                  let i = e.readBytes(r, 32),
                    o = m((0, s.trim)(i));
                  return e.setPosition(n + 32), [o, 32];
                })(a, { staticPosition: u });
              throw new t.InvalidAbiDecodingTypeError(r.type, {
                docsPath: "/docs/contract/decodeAbiParameters",
              });
            })(d, r, { staticPosition: 0 });
            (v += u), h.push(o);
          }
          return h;
        }
        function g(e) {
          var t;
          let { type: n } = e;
          if ("string" === n || "bytes" === n || n.endsWith("[]")) return !0;
          if ("tuple" === n)
            return null == (t = e.components) ? void 0 : t.some(g);
          let a = (0, f.getArrayComponents)(e.type);
          return !!(a && g({ ...e, type: a[1] }));
        }
      },
      [490429],
    ],
    994790: [
      (e) => {
        "use strict";
        e.s(
          {
            CallExecutionError: () => g,
            ContractFunctionExecutionError: () => h,
            ContractFunctionRevertedError: () => w,
            ContractFunctionZeroDataError: () => x,
            CounterfactualDeploymentFailedError: () => E,
            RawContractError: () => A,
          },
          994790
        );
        var t = e.i(326875),
          n = e.i(587716);
        e.s({ decodeErrorResult: () => u }, 284034);
        var a = e.i(787769),
          r = e.i(410647),
          i = e.i(575189),
          s = e.i(687681),
          o = e.i(443923);
        function u(e) {
          let { abi: t, data: u } = e,
            l = (0, r.slice)(u, 0, 4);
          if ("0x" === l) throw new a.AbiDecodingZeroDataError();
          let d = [...(t || []), n.solidityError, n.solidityPanic].find(
            (e) =>
              "error" === e.type &&
              l === (0, i.toFunctionSelector)((0, o.formatAbiItem)(e))
          );
          if (!d)
            throw new a.AbiErrorSignatureNotFoundError(l, {
              docsPath: "/docs/contract/decodeErrorResult",
            });
          return {
            abiItem: d,
            args:
              "inputs" in d && d.inputs && d.inputs.length > 0
                ? (0, s.decodeAbiParameters)(d.inputs, (0, r.slice)(u, 4))
                : void 0,
            errorName: d.name,
          };
        }
        var l = e.i(383478);
        function d(e) {
          let {
            abiItem: t,
            args: n,
            includeFunctionName: a = !0,
            includeName: r = !1,
          } = e;
          if ("name" in t && "inputs" in t && t.inputs)
            return ""
              .concat(a ? t.name : "", "(")
              .concat(
                t.inputs
                  .map((e, t) =>
                    ""
                      .concat(r && e.name ? "".concat(e.name, ": ") : "")
                      .concat(
                        "object" == typeof n[t] ? (0, l.stringify)(n[t]) : n[t]
                      )
                  )
                  .join(", "),
                ")"
              );
        }
        var c = e.i(69864),
          p = e.i(817008),
          y = e.i(588732),
          m = e.i(500780),
          b = e.i(663376),
          f = e.i(658213),
          v = e.i(685180);
        class g extends m.BaseError {
          constructor(
            e,
            {
              account: n,
              docsPath: a,
              chain: r,
              data: i,
              gas: s,
              gasPrice: o,
              maxFeePerGas: u,
              maxPriorityFeePerGas: l,
              nonce: d,
              to: c,
              value: m,
              stateOverride: v,
            }
          ) {
            var g;
            let h = n ? (0, t.parseAccount)(n) : void 0,
              w = (0, f.prettyPrint)({
                from: null == h ? void 0 : h.address,
                to: c,
                value:
                  void 0 !== m &&
                  ""
                    .concat((0, p.formatEther)(m), " ")
                    .concat(
                      (null == r || null == (g = r.nativeCurrency)
                        ? void 0
                        : g.symbol) || "ETH"
                    ),
                data: i,
                gas: s,
                gasPrice:
                  void 0 !== o && "".concat((0, y.formatGwei)(o), " gwei"),
                maxFeePerGas:
                  void 0 !== u && "".concat((0, y.formatGwei)(u), " gwei"),
                maxPriorityFeePerGas:
                  void 0 !== l && "".concat((0, y.formatGwei)(l), " gwei"),
                nonce: d,
              });
            v && (w += "\n".concat((0, b.prettyStateOverride)(v))),
              super(e.shortMessage, {
                cause: e,
                docsPath: a,
                metaMessages: [
                  ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                  "Raw Call Arguments:",
                  w,
                ].filter(Boolean),
                name: "CallExecutionError",
              }),
              Object.defineProperty(this, "cause", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.cause = e);
          }
        }
        class h extends m.BaseError {
          constructor(
            e,
            {
              abi: t,
              args: n,
              contractAddress: a,
              docsPath: r,
              functionName: i,
              sender: s,
            }
          ) {
            var u;
            let l = (0, c.getAbiItem)({ abi: t, args: n, name: i }),
              p = l
                ? d({
                    abiItem: l,
                    args: n,
                    includeFunctionName: !1,
                    includeName: !1,
                  })
                : void 0,
              y = l ? (0, o.formatAbiItem)(l, { includeName: !0 }) : void 0,
              m = (0, f.prettyPrint)({
                address: a && (0, v.getContractAddress)(a),
                function: y,
                args:
                  p &&
                  "()" !== p &&
                  ""
                    .concat(
                      [
                        ...Array(
                          null != (u = null == i ? void 0 : i.length) ? u : 0
                        ).keys(),
                      ]
                        .map(() => " ")
                        .join("")
                    )
                    .concat(p),
                sender: s,
              });
            super(
              e.shortMessage ||
                'An unknown error occurred while executing the contract function "'.concat(
                  i,
                  '".'
                ),
              {
                cause: e,
                docsPath: r,
                metaMessages: [
                  ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                  m && "Contract Call:",
                  m,
                ].filter(Boolean),
                name: "ContractFunctionExecutionError",
              }
            ),
              Object.defineProperty(this, "abi", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "args", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "cause", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "contractAddress", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "formattedArgs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "functionName", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "sender", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.abi = t),
              (this.args = n),
              (this.cause = e),
              (this.contractAddress = a),
              (this.functionName = i),
              (this.sender = s);
          }
        }
        class w extends m.BaseError {
          constructor({ abi: e, data: t, functionName: r, message: i }) {
            let s, l, c, p, y;
            if (t && "0x" !== t)
              try {
                let {
                  abiItem: a,
                  errorName: r,
                  args: i,
                } = (y = u({ abi: e, data: t }));
                if ("Error" === r) c = i[0];
                else if ("Panic" === r) {
                  let [e] = i;
                  c = n.panicReasons[e];
                } else {
                  var m;
                  let e = a
                      ? (0, o.formatAbiItem)(a, { includeName: !0 })
                      : void 0,
                    t =
                      a && i
                        ? d({
                            abiItem: a,
                            args: i,
                            includeFunctionName: !1,
                            includeName: !1,
                          })
                        : void 0;
                  l = [
                    e ? "Error: ".concat(e) : "",
                    t && "()" !== t
                      ? "       "
                          .concat(
                            [
                              ...Array(
                                null != (m = null == r ? void 0 : r.length)
                                  ? m
                                  : 0
                              ).keys(),
                            ]
                              .map(() => " ")
                              .join("")
                          )
                          .concat(t)
                      : "",
                  ];
                }
              } catch (e) {
                s = e;
              }
            else i && (c = i);
            s instanceof a.AbiErrorSignatureNotFoundError &&
              ((p = s.signature),
              (l = [
                'Unable to decode signature "'.concat(
                  p,
                  '" as it was not found on the provided ABI.'
                ),
                "Make sure you are using the correct ABI and that the error exists on it.",
                "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(
                  p,
                  "."
                ),
              ])),
              super(
                (c && "execution reverted" !== c) || p
                  ? [
                      'The contract function "'
                        .concat(r, '" reverted with the following ')
                        .concat(p ? "signature" : "reason", ":"),
                      c || p,
                    ].join("\n")
                  : 'The contract function "'.concat(r, '" reverted.'),
                {
                  cause: s,
                  metaMessages: l,
                  name: "ContractFunctionRevertedError",
                }
              ),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "raw", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "reason", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "signature", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.data = y),
              (this.raw = t),
              (this.reason = c),
              (this.signature = p);
          }
        }
        class x extends m.BaseError {
          constructor({ functionName: e }) {
            super(
              'The contract function "'.concat(e, '" returned no data ("0x").'),
              {
                metaMessages: [
                  "This could be due to any of the following:",
                  '  - The contract does not have the function "'.concat(
                    e,
                    '",'
                  ),
                  "  - The parameters passed to the contract function may be invalid, or",
                  "  - The address is not a contract.",
                ],
                name: "ContractFunctionZeroDataError",
              }
            );
          }
        }
        class E extends m.BaseError {
          constructor({ factory: e }) {
            super(
              "Deployment for counterfactual contract call failed".concat(
                e ? ' for factory "'.concat(e, '".') : ""
              ),
              {
                metaMessages: [
                  "Please ensure:",
                  "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                  "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
                ],
                name: "CounterfactualDeploymentFailedError",
              }
            );
          }
        }
        class A extends m.BaseError {
          constructor({ data: e, message: t }) {
            super(t || "", { name: "RawContractError" }),
              Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3,
              }),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.data = e);
          }
        }
      },
      [284034],
    ],
    275982: (e) => {
      "use strict";
      e.s({
        addressResolverAbi: () => o,
        batchGatewayAbi: () => n,
        erc1155Abi: () => c,
        erc20Abi: () => l,
        erc20Abi_bytes32: () => d,
        erc4626Abi: () => y,
        erc721Abi: () => p,
        multicall3Abi: () => t,
        textResolverAbi: () => s,
        universalResolverResolveAbi: () => r,
        universalResolverReverseAbi: () => i,
        universalSignatureValidatorAbi: () => u,
      });
      let t = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        n = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        a = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        r = [
          ...a,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        i = [
          ...a,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        s = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        o = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        l = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ],
        d = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "decimals",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint8" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "bytes32" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "bytes32" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ],
        c = [
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "uint256", name: "balance", type: "uint256" },
              { internalType: "uint256", name: "needed", type: "uint256" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "ERC1155InsufficientBalance",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "approver", type: "address" },
            ],
            name: "ERC1155InvalidApprover",
            type: "error",
          },
          {
            inputs: [
              { internalType: "uint256", name: "idsLength", type: "uint256" },
              {
                internalType: "uint256",
                name: "valuesLength",
                type: "uint256",
              },
            ],
            name: "ERC1155InvalidArrayLength",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "ERC1155InvalidOperator",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "receiver", type: "address" },
            ],
            name: "ERC1155InvalidReceiver",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
            ],
            name: "ERC1155InvalidSender",
            type: "error",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
              { internalType: "address", name: "owner", type: "address" },
            ],
            name: "ERC1155MissingApprovalForAll",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
              },
              {
                indexed: !1,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
              },
            ],
            name: "TransferBatch",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "TransferSingle",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "string",
                name: "value",
                type: "string",
              },
              {
                indexed: !0,
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
            ],
            name: "URI",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "uint256", name: "id", type: "uint256" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
              },
              { internalType: "uint256[]", name: "ids", type: "uint256[]" },
            ],
            name: "balanceOfBatch",
            outputs: [
              { internalType: "uint256[]", name: "", type: "uint256[]" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
              { internalType: "address", name: "operator", type: "address" },
            ],
            name: "isApprovedForAll",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256[]", name: "ids", type: "uint256[]" },
              { internalType: "uint256[]", name: "values", type: "uint256[]" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "safeBatchTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "id", type: "uint256" },
              { internalType: "uint256", name: "value", type: "uint256" },
              { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "operator", type: "address" },
              { internalType: "bool", name: "approved", type: "bool" },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
            ],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "uri",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        p = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !0, name: "tokenId", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "ApprovalForAll",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "operator", type: "address" },
              { indexed: !1, name: "approved", type: "bool" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !0, name: "tokenId", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "payable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "tokenId", type: "uint256" },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "getApproved",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ type: "address" }],
          },
          {
            type: "function",
            name: "isApprovedForAll",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "operator", type: "address" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "ownerOf",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ name: "owner", type: "address" }],
          },
          {
            type: "function",
            name: "safeTransferFrom",
            stateMutability: "payable",
            inputs: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "tokenId", type: "uint256" },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "safeTransferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "id", type: "uint256" },
              { name: "data", type: "bytes" },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "setApprovalForAll",
            stateMutability: "nonpayable",
            inputs: [
              { name: "operator", type: "address" },
              { name: "approved", type: "bool" },
            ],
            outputs: [],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "tokenByIndex",
            stateMutability: "view",
            inputs: [{ name: "index", type: "uint256" }],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "tokenByIndex",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "index", type: "uint256" },
            ],
            outputs: [{ name: "tokenId", type: "uint256" }],
          },
          {
            type: "function",
            name: "tokenURI",
            stateMutability: "view",
            inputs: [{ name: "tokenId", type: "uint256" }],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "payable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "tokenId", type: "uint256" },
            ],
            outputs: [],
          },
        ],
        y = [
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "sender", type: "address" },
              { indexed: !0, name: "receiver", type: "address" },
              { indexed: !1, name: "assets", type: "uint256" },
              { indexed: !1, name: "shares", type: "uint256" },
            ],
            name: "Deposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "sender", type: "address" },
              { indexed: !0, name: "receiver", type: "address" },
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !1, name: "assets", type: "uint256" },
              { indexed: !1, name: "shares", type: "uint256" },
            ],
            name: "Withdraw",
            type: "event",
          },
          {
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "asset",
            outputs: [{ name: "assetTokenAddress", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "shares", type: "uint256" }],
            name: "convertToAssets",
            outputs: [{ name: "assets", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "assets", type: "uint256" }],
            name: "convertToShares",
            outputs: [{ name: "shares", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "assets", type: "uint256" },
              { name: "receiver", type: "address" },
            ],
            name: "deposit",
            outputs: [{ name: "shares", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "caller", type: "address" }],
            name: "maxDeposit",
            outputs: [{ name: "maxAssets", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "caller", type: "address" }],
            name: "maxMint",
            outputs: [{ name: "maxShares", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owner", type: "address" }],
            name: "maxRedeem",
            outputs: [{ name: "maxShares", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "owner", type: "address" }],
            name: "maxWithdraw",
            outputs: [{ name: "maxAssets", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "shares", type: "uint256" },
              { name: "receiver", type: "address" },
            ],
            name: "mint",
            outputs: [{ name: "assets", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "assets", type: "uint256" }],
            name: "previewDeposit",
            outputs: [{ name: "shares", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "shares", type: "uint256" }],
            name: "previewMint",
            outputs: [{ name: "assets", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "shares", type: "uint256" }],
            name: "previewRedeem",
            outputs: [{ name: "assets", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "assets", type: "uint256" }],
            name: "previewWithdraw",
            outputs: [{ name: "shares", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "shares", type: "uint256" },
              { name: "receiver", type: "address" },
              { name: "owner", type: "address" },
            ],
            name: "redeem",
            outputs: [{ name: "assets", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "totalAssets",
            outputs: [{ name: "totalManagedAssets", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "to", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "assets", type: "uint256" },
              { name: "receiver", type: "address" },
              { name: "owner", type: "address" },
            ],
            name: "withdraw",
            outputs: [{ name: "shares", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ];
    },
    622157: (e) => {
      "use strict";
      e.s({ decodeFunctionResult: () => i });
      var t = e.i(787769),
        n = e.i(687681),
        a = e.i(69864);
      let r = "/docs/contract/decodeFunctionResult";
      function i(e) {
        let { abi: i, args: s, functionName: o, data: u } = e,
          l = i[0];
        if (o) {
          let e = (0, a.getAbiItem)({ abi: i, args: s, name: o });
          if (!e) throw new t.AbiFunctionNotFoundError(o, { docsPath: r });
          l = e;
        }
        if ("function" !== l.type)
          throw new t.AbiFunctionNotFoundError(void 0, { docsPath: r });
        if (!l.outputs)
          throw new t.AbiFunctionOutputsNotFoundError(l.name, { docsPath: r });
        let d = (0, n.decodeAbiParameters)(l.outputs, u);
        return d && d.length > 1 ? d : d && 1 === d.length ? d[0] : void 0;
      }
    },
    768759: (e) => {
      "use strict";
      e.s({ getChainContractAddress: () => n });
      var t = e.i(710546);
      function n(e) {
        var n;
        let { blockNumber: a, chain: r, contract: i } = e,
          s = null == r || null == (n = r.contracts) ? void 0 : n[i];
        if (!s)
          throw new t.ChainDoesNotSupportContract({
            chain: r,
            contract: { name: i },
          });
        if (a && s.blockCreated && s.blockCreated > a)
          throw new t.ChainDoesNotSupportContract({
            blockNumber: a,
            chain: r,
            contract: { name: i, blockCreated: s.blockCreated },
          });
        return s.address;
      }
    },
    650494: (e) => {
      "use strict";
      e.s({
        eventModifiers: () => A,
        execConstructorSignature: () => f,
        execErrorSignature: () => r,
        execEventSignature: () => o,
        execFallbackSignature: () => h,
        execFunctionSignature: () => d,
        execStructSignature: () => y,
        functionModifiers: () => M,
        isConstructorSignature: () => b,
        isErrorSignature: () => a,
        isEventSignature: () => s,
        isFallbackSignature: () => g,
        isFunctionSignature: () => l,
        isReceiveSignature: () => x,
        isStructSignature: () => p,
        modifiers: () => E,
      });
      var t = e.i(60531);
      let n = RegExp(
        "^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\\((?<parameters>.*?)\\)$"
      );
      function a(e) {
        return n.test(e);
      }
      function r(e) {
        return (0, t.execTyped)(n, e);
      }
      let i = RegExp(
        "^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\\((?<parameters>.*?)\\)$"
      );
      function s(e) {
        return i.test(e);
      }
      function o(e) {
        return (0, t.execTyped)(i, e);
      }
      let u = RegExp(
        "^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\\((?<parameters>.*?)\\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\\s?\\((?<returns>.*?)\\))?$"
      );
      function l(e) {
        return u.test(e);
      }
      function d(e) {
        return (0, t.execTyped)(u, e);
      }
      let c = RegExp(
        "^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \\{(?<properties>.*?)\\}$"
      );
      function p(e) {
        return c.test(e);
      }
      function y(e) {
        return (0, t.execTyped)(c, e);
      }
      let m = RegExp(
        "^constructor\\((?<parameters>.*?)\\)(?:\\s(?<stateMutability>payable{1}))?$"
      );
      function b(e) {
        return m.test(e);
      }
      function f(e) {
        return (0, t.execTyped)(m, e);
      }
      let v = RegExp(
        "^fallback\\(\\) external(?:\\s(?<stateMutability>payable{1}))?$"
      );
      function g(e) {
        return v.test(e);
      }
      function h(e) {
        return (0, t.execTyped)(v, e);
      }
      let w = /^receive\(\) external payable$/;
      function x(e) {
        return w.test(e);
      }
      let E = new Set(["memory", "indexed", "storage", "calldata"]),
        A = new Set(["indexed"]),
        M = new Set(["calldata", "memory", "storage"]);
    },
    218408: (e) => {
      "use strict";
      e.s({ BaseError: () => t }, 218408);
      class t extends Error {
        constructor(e, n = {}) {
          var a;
          let r =
              n.cause instanceof t
                ? n.cause.details
                : (null == (a = n.cause) ? void 0 : a.message)
                ? n.cause.message
                : n.details,
            i = (n.cause instanceof t && n.cause.docsPath) || n.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(n.metaMessages ? [...n.metaMessages, ""] : []),
              ...(i ? ["Docs: https://abitype.dev".concat(i)] : []),
              ...(r ? ["Details: ".concat(r)] : []),
              "Version: abitype@".concat("1.0.8"),
            ].join("\n")
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
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            n.cause && (this.cause = n.cause),
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = n.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    457352: (e) => {
      "use strict";
      e.s({
        InvalidAbiItemError: () => n,
        UnknownSolidityTypeError: () => r,
        UnknownTypeError: () => a,
      });
      var t = e.i(218408);
      class n extends t.BaseError {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: "parseAbiItem(".concat(JSON.stringify(e, null, 2), ")"),
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class a extends t.BaseError {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              'Type "'.concat(
                e,
                '" is not a valid ABI type. Perhaps you forgot to include a struct signature?'
              ),
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class r extends t.BaseError {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: ['Type "'.concat(e, '" is not a valid ABI type.')],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    202365: (e) => {
      "use strict";
      e.s({
        InvalidAbiParameterError: () => n,
        InvalidAbiParametersError: () => a,
        InvalidAbiTypeParameterError: () => u,
        InvalidFunctionModifierError: () => o,
        InvalidModifierError: () => s,
        InvalidParameterError: () => r,
        SolidityProtectedKeywordError: () => i,
      });
      var t = e.i(218408);
      class n extends t.BaseError {
        constructor({ param: e }) {
          super("Failed to parse ABI parameter.", {
            details: "parseAbiParameter(".concat(
              JSON.stringify(e, null, 2),
              ")"
            ),
            docsPath: "/api/human#parseabiparameter-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiParameterError",
            });
        }
      }
      class a extends t.BaseError {
        constructor({ params: e }) {
          super("Failed to parse ABI parameters.", {
            details: "parseAbiParameters(".concat(
              JSON.stringify(e, null, 2),
              ")"
            ),
            docsPath: "/api/human#parseabiparameters-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiParametersError",
            });
        }
      }
      class r extends t.BaseError {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class i extends t.BaseError {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              '"'.concat(
                t,
                '" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html'
              ),
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class s extends t.BaseError {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              'Modifier "'
                .concat(n, '" not allowed')
                .concat(t ? ' in "'.concat(t, '" type') : "", "."),
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class o extends t.BaseError {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              'Modifier "'
                .concat(n, '" not allowed')
                .concat(t ? ' in "'.concat(t, '" type') : "", "."),
              'Data location can only be specified for array, struct, or mapping types, but "'.concat(
                n,
                '" was given.'
              ),
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class u extends t.BaseError {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
    866293: (e) => {
      "use strict";
      e.s({
        InvalidSignatureError: () => n,
        InvalidStructSignatureError: () => r,
        UnknownSignatureError: () => a,
      });
      var t = e.i(218408);
      class n extends t.BaseError {
        constructor({ signature: e, type: t }) {
          super("Invalid ".concat(t, " signature."), { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class a extends t.BaseError {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class r extends t.BaseError {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    544682: (e) => {
      "use strict";
      e.s({ CircularReferenceError: () => n });
      var t = e.i(218408);
      class n extends t.BaseError {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: ['Struct "'.concat(e, '" is a circular reference.')],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
    },
    577010: (e) => {
      "use strict";
      e.s({ InvalidParenthesisError: () => n });
      var t = e.i(218408);
      class n extends t.BaseError {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              '"'
                .concat(e.trim(), '" has too many ')
                .concat(t > 0 ? "opening" : "closing", " parentheses."),
            ],
            details: 'Depth "'.concat(t, '"'),
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
    },
    930640: [
      (e) => {
        "use strict";
        e.s({ parseAbi: () => h }, 930640);
        var t = e.i(650494);
        e.s({ parseStructs: () => v }, 318054);
        var n = e.i(60531),
          a = e.i(457352),
          r = e.i(202365),
          i = e.i(866293),
          s = e.i(544682);
        e.s(
          {
            isSolidityType: () => b,
            parseAbiParameter: () => y,
            parseSignature: () => l,
            splitParameters: () => m,
          },
          69482
        );
        var o = e.i(577010);
        let u = new Map([
          ["address", { type: "address" }],
          ["bool", { type: "bool" }],
          ["bytes", { type: "bytes" }],
          ["bytes32", { type: "bytes32" }],
          ["int", { type: "int256" }],
          ["int256", { type: "int256" }],
          ["string", { type: "string" }],
          ["uint", { type: "uint256" }],
          ["uint8", { type: "uint8" }],
          ["uint16", { type: "uint16" }],
          ["uint24", { type: "uint24" }],
          ["uint32", { type: "uint32" }],
          ["uint64", { type: "uint64" }],
          ["uint96", { type: "uint96" }],
          ["uint112", { type: "uint112" }],
          ["uint160", { type: "uint160" }],
          ["uint192", { type: "uint192" }],
          ["uint256", { type: "uint256" }],
          ["address owner", { type: "address", name: "owner" }],
          ["address to", { type: "address", name: "to" }],
          ["bool approved", { type: "bool", name: "approved" }],
          ["bytes _data", { type: "bytes", name: "_data" }],
          ["bytes data", { type: "bytes", name: "data" }],
          ["bytes signature", { type: "bytes", name: "signature" }],
          ["bytes32 hash", { type: "bytes32", name: "hash" }],
          ["bytes32 r", { type: "bytes32", name: "r" }],
          ["bytes32 root", { type: "bytes32", name: "root" }],
          ["bytes32 s", { type: "bytes32", name: "s" }],
          ["string name", { type: "string", name: "name" }],
          ["string symbol", { type: "string", name: "symbol" }],
          ["string tokenURI", { type: "string", name: "tokenURI" }],
          ["uint tokenId", { type: "uint256", name: "tokenId" }],
          ["uint8 v", { type: "uint8", name: "v" }],
          ["uint256 balance", { type: "uint256", name: "balance" }],
          ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
          ["uint256 value", { type: "uint256", name: "value" }],
          [
            "event:address indexed from",
            { type: "address", name: "from", indexed: !0 },
          ],
          [
            "event:address indexed to",
            { type: "address", name: "to", indexed: !0 },
          ],
          [
            "event:uint indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
          [
            "event:uint256 indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
        ]);
        function l(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ((0, t.isFunctionSignature)(e))
            return (function (e) {
              var n;
              let a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = (0, t.execFunctionSignature)(e);
              if (!r)
                throw new i.InvalidSignatureError({
                  signature: e,
                  type: "function",
                });
              let s = m(r.parameters),
                o = [],
                u = s.length;
              for (let e = 0; e < u; e++)
                o.push(
                  y(s[e], {
                    modifiers: t.functionModifiers,
                    structs: a,
                    type: "function",
                  })
                );
              let l = [];
              if (r.returns) {
                let e = m(r.returns),
                  n = e.length;
                for (let r = 0; r < n; r++)
                  l.push(
                    y(e[r], {
                      modifiers: t.functionModifiers,
                      structs: a,
                      type: "function",
                    })
                  );
              }
              return {
                name: r.name,
                type: "function",
                stateMutability:
                  null != (n = r.stateMutability) ? n : "nonpayable",
                inputs: o,
                outputs: l,
              };
            })(e, n);
          if ((0, t.isEventSignature)(e))
            return (function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a = (0, t.execEventSignature)(e);
              if (!a)
                throw new i.InvalidSignatureError({
                  signature: e,
                  type: "event",
                });
              let r = m(a.parameters),
                s = [],
                o = r.length;
              for (let e = 0; e < o; e++)
                s.push(
                  y(r[e], {
                    modifiers: t.eventModifiers,
                    structs: n,
                    type: "event",
                  })
                );
              return { name: a.name, type: "event", inputs: s };
            })(e, n);
          if ((0, t.isErrorSignature)(e))
            return (function (e) {
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a = (0, t.execErrorSignature)(e);
              if (!a)
                throw new i.InvalidSignatureError({
                  signature: e,
                  type: "error",
                });
              let r = m(a.parameters),
                s = [],
                o = r.length;
              for (let e = 0; e < o; e++)
                s.push(y(r[e], { structs: n, type: "error" }));
              return { name: a.name, type: "error", inputs: s };
            })(e, n);
          if ((0, t.isConstructorSignature)(e))
            return (function (e) {
              var n;
              let a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = (0, t.execConstructorSignature)(e);
              if (!r)
                throw new i.InvalidSignatureError({
                  signature: e,
                  type: "constructor",
                });
              let s = m(r.parameters),
                o = [],
                u = s.length;
              for (let e = 0; e < u; e++)
                o.push(y(s[e], { structs: a, type: "constructor" }));
              return {
                type: "constructor",
                stateMutability:
                  null != (n = r.stateMutability) ? n : "nonpayable",
                inputs: o,
              };
            })(e, n);
          if ((0, t.isFallbackSignature)(e)) {
            var a,
              r = e;
            let n = (0, t.execFallbackSignature)(r);
            if (!n)
              throw new i.InvalidSignatureError({
                signature: r,
                type: "fallback",
              });
            return {
              type: "fallback",
              stateMutability:
                null != (a = n.stateMutability) ? a : "nonpayable",
            };
          }
          if ((0, t.isReceiveSignature)(e))
            return { type: "receive", stateMutability: "payable" };
          throw new i.UnknownSignatureError({ signature: e });
        }
        let d = RegExp(
            "^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\\[\\d*?\\])+?)?(?:\\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$"
          ),
          c = RegExp(
            "^\\((?<type>.+?)\\)(?<array>(?:\\[\\d*?\\])+?)?(?:\\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$"
          ),
          p = /^u?int$/;
        function y(e, i) {
          var s, o, l, v, g, h;
          let w,
            x = (function (e, t, n) {
              let a = "";
              if (n)
                for (let e of Object.entries(n)) {
                  if (!e) continue;
                  let t = "";
                  for (let n of e[1])
                    t += "["
                      .concat(n.type)
                      .concat(n.name ? ":".concat(n.name) : "", "]");
                  a += "(".concat(e[0], "{").concat(t, "})");
                }
              return t ? "".concat(t, ":").concat(e).concat(a) : e;
            })(e, null == i ? void 0 : i.type, null == i ? void 0 : i.structs);
          if (u.has(x)) return u.get(x);
          let E = n.isTupleRegex.test(e),
            A = (0, n.execTyped)(E ? c : d, e);
          if (!A) throw new r.InvalidParameterError({ param: e });
          if (
            A.name &&
            ("address" === (g = A.name) ||
              "bool" === g ||
              "function" === g ||
              "string" === g ||
              "tuple" === g ||
              n.bytesRegex.test(g) ||
              n.integerRegex.test(g) ||
              f.test(g))
          )
            throw new r.SolidityProtectedKeywordError({
              param: e,
              name: A.name,
            });
          let M = A.name ? { name: A.name } : {},
            S = "indexed" === A.modifier ? { indexed: !0 } : {},
            T = null != (s = null == i ? void 0 : i.structs) ? s : {},
            P = {};
          if (E) {
            w = "tuple";
            let e = m(A.type),
              t = [],
              n = e.length;
            for (let a = 0; a < n; a++) t.push(y(e[a], { structs: T }));
            P = { components: t };
          } else if (A.type in T)
            (w = "tuple"), (P = { components: T[A.type] });
          else if (p.test(A.type)) w = "".concat(A.type, "256");
          else if (
            ((w = A.type), (null == i ? void 0 : i.type) !== "struct" && !b(w))
          )
            throw new a.UnknownSolidityTypeError({ type: w });
          if (A.modifier) {
            if (
              !(null == i || null == (l = i.modifiers) || null == (o = l.has)
                ? void 0
                : o.call(l, A.modifier))
            )
              throw new r.InvalidModifierError({
                param: e,
                type: null == i ? void 0 : i.type,
                modifier: A.modifier,
              });
            if (
              t.functionModifiers.has(A.modifier) &&
              ((h = w),
              !A.array && "bytes" !== h && "string" !== h && "tuple" !== h)
            )
              throw new r.InvalidFunctionModifierError({
                param: e,
                type: null == i ? void 0 : i.type,
                modifier: A.modifier,
              });
          }
          let I = {
            type: "".concat(w).concat(null != (v = A.array) ? v : ""),
            ...M,
            ...S,
            ...P,
          };
          return u.set(x, I), I;
        }
        function m(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "",
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            r = e.trim().length;
          for (let i = 0; i < r; i++) {
            let r = e[i],
              s = e.slice(i + 1);
            switch (r) {
              case ",":
                return 0 === a
                  ? m(s, [...t, n.trim()])
                  : m(s, t, "".concat(n).concat(r), a);
              case "(":
                return m(s, t, "".concat(n).concat(r), a + 1);
              case ")":
                return m(s, t, "".concat(n).concat(r), a - 1);
              default:
                return m(s, t, "".concat(n).concat(r), a);
            }
          }
          if ("" === n) return t;
          if (0 !== a)
            throw new o.InvalidParenthesisError({ current: n, depth: a });
          return t.push(n.trim()), t;
        }
        function b(e) {
          return (
            "address" === e ||
            "bool" === e ||
            "function" === e ||
            "string" === e ||
            n.bytesRegex.test(e) ||
            n.integerRegex.test(e)
          );
        }
        let f =
          /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
        function v(e) {
          let o = {},
            u = e.length;
          for (let n = 0; n < u; n++) {
            let a = e[n];
            if (!(0, t.isStructSignature)(a)) continue;
            let r = (0, t.execStructSignature)(a);
            if (!r)
              throw new i.InvalidSignatureError({
                signature: a,
                type: "struct",
              });
            let s = r.properties.split(";"),
              u = [],
              l = s.length;
            for (let e = 0; e < l; e++) {
              let t = s[e].trim();
              if (!t) continue;
              let n = y(t, { type: "struct" });
              u.push(n);
            }
            if (!u.length)
              throw new i.InvalidStructSignatureError({ signature: a });
            o[r.name] = u;
          }
          let l = {},
            d = Object.entries(o),
            c = d.length;
          for (let e = 0; e < c; e++) {
            let [t, i] = d[e];
            l[t] = (function e(t, i) {
              let o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : new Set(),
                u = [],
                l = t.length;
              for (let c = 0; c < l; c++) {
                let l = t[c];
                if (n.isTupleRegex.test(l.type)) u.push(l);
                else {
                  let t = (0, n.execTyped)(g, l.type);
                  if (!(null == t ? void 0 : t.type))
                    throw new r.InvalidAbiTypeParameterError({
                      abiParameter: l,
                    });
                  let { array: c, type: p } = t;
                  if (p in i) {
                    var d;
                    if (o.has(p))
                      throw new s.CircularReferenceError({ type: p });
                    u.push({
                      ...l,
                      type: "tuple".concat(null != c ? c : ""),
                      components: e(
                        null != (d = i[p]) ? d : [],
                        i,
                        new Set([...o, p])
                      ),
                    });
                  } else if (b(p)) u.push(l);
                  else throw new a.UnknownTypeError({ type: p });
                }
              }
              return u;
            })(i, o);
          }
          return l;
        }
        let g = RegExp(
          "^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\\[\\d*?\\])+?)?$"
        );
        function h(e) {
          let n = v(e),
            a = [],
            r = e.length;
          for (let i = 0; i < r; i++) {
            let r = e[i];
            (0, t.isStructSignature)(r) || a.push(l(r, n));
          }
          return a;
        }
      },
      [69482, 318054],
    ],
    688905: [
      (e) => {
        "use strict";
        e.s({ toRpc: () => Y }, 688905),
          e.s(
            {
              IntegerOutOfRangeError: () => L,
              SizeExceedsPaddingSizeError: () => J,
              SizeOverflowError: () => W,
              SliceOffsetOutOfBoundsError: () => q,
              concat: () => O,
              from: () => R,
              fromBoolean: () => C,
              fromBytes: () => F,
              fromNumber: () => j,
              fromString: () => k,
              padLeft: () => N,
              padRight: () => D,
              size: () => U,
              slice: () => _,
              toBigInt: () => $,
              toNumber: () => H,
              validate: () => Z,
            },
            198960
          ),
          e.i(806459),
          e.s(
            {
              SizeExceedsPaddingSizeError: () => I,
              SizeOverflowError: () => T,
              SliceOffsetOutOfBoundsError: () => P,
              from: () => c,
              fromHex: () => p,
              fromString: () => y,
              random: () => m,
              size: () => b,
              slice: () => f,
              toBigInt: () => v,
              toBoolean: () => g,
              toNumber: () => h,
              toString: () => w,
              trimLeft: () => x,
              trimRight: () => E,
              validate: () => A,
            },
            27601
          ),
          e.s({ BaseError: () => t }, 433907);
        class t extends Error {
          walk(e) {
            return (function e(t, n) {
              return (null == n ? void 0 : n(t))
                ? t
                : t && "object" == typeof t && "cause" in t && t.cause
                ? e(t.cause, n)
                : n
                ? null
                : t;
            })(this, e);
          }
          constructor(e, n = {}) {
            let a = (() => {
                var e;
                if (n.cause instanceof t) {
                  if (n.cause.details) return n.cause.details;
                  if (n.cause.shortMessage) return n.cause.shortMessage;
                }
                return n.cause &&
                  "details" in n.cause &&
                  "string" == typeof n.cause.details
                  ? n.cause.details
                  : (null == (e = n.cause) ? void 0 : e.message)
                  ? n.cause.message
                  : n.details;
              })(),
              r = (n.cause instanceof t && n.cause.docsPath) || n.docsPath,
              i = "".concat("https://oxlib.sh").concat(null != r ? r : "");
            super(
              [
                e || "An error occurred.",
                ...(n.metaMessages ? ["", ...n.metaMessages] : []),
                ...(a || r
                  ? [
                      "",
                      a ? "Details: ".concat(a) : void 0,
                      r ? "See: ".concat(i) : void 0,
                    ]
                  : []),
              ]
                .filter((e) => "string" == typeof e)
                .join("\n"),
              n.cause ? { cause: n.cause } : void 0
            ),
              Object.defineProperty(this, "details", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "docs", {
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
              Object.defineProperty(this, "shortMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "cause", {
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
              Object.defineProperty(this, "version", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ox@".concat("0.1.1"),
              }),
              (this.cause = n.cause),
              (this.details = a),
              (this.docs = i),
              (this.docsPath = r),
              (this.shortMessage = e);
          }
        }
        function n(e, t, n) {
          return JSON.stringify(
            e,
            (e, n) =>
              "function" == typeof t
                ? t(e, n)
                : "bigint" == typeof n
                ? n.toString() + "#__bigint"
                : n,
            n
          );
        }
        function a(e, t) {
          if (b(e) > t) throw new T({ givenSize: b(e), maxSize: t });
        }
        e.s({ stringify: () => n }, 28658);
        let r = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
        function i(e) {
          return e >= r.zero && e <= r.nine
            ? e - r.zero
            : e >= r.A && e <= r.F
            ? e - (r.A - 10)
            : e >= r.a && e <= r.f
            ? e - (r.a - 10)
            : void 0;
        }
        function s(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { dir: n = "left" } = t,
            a = e,
            r = 0;
          for (let e = 0; e < a.length - 1; e++)
            if ("0" === a["left" === n ? e : a.length - e - 1].toString()) r++;
            else break;
          return "left" === n ? a.slice(r) : a.slice(0, a.length - r);
        }
        function o(e, t) {
          if (U(e) > t) throw new W({ givenSize: U(e), maxSize: t });
        }
        function u(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { dir: n, size: a = 32 } = t;
          if (0 === a) return e;
          let r = e.replace("0x", "");
          if (r.length > 2 * a)
            throw new J({
              size: Math.ceil(r.length / 2),
              targetSize: a,
              type: "Hex",
            });
          return "0x".concat(
            r["right" === n ? "padEnd" : "padStart"](2 * a, "0")
          );
        }
        let l = new TextDecoder(),
          d = new TextEncoder();
        function c(e) {
          var t;
          return e instanceof Uint8Array
            ? e
            : "string" == typeof e
            ? p(e)
            : (t = e) instanceof Uint8Array
            ? t
            : new Uint8Array(t);
        }
        function p(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: a } = n,
            r = e;
          a && (o(e, a), (r = D(e, a)));
          let s = r.slice(2);
          s.length % 2 && (s = "0".concat(s));
          let u = s.length / 2,
            l = new Uint8Array(u);
          for (let e = 0, n = 0; e < u; e++) {
            let a = i(s.charCodeAt(n++)),
              r = i(s.charCodeAt(n++));
            if (void 0 === a || void 0 === r)
              throw new t(
                'Invalid byte sequence ("'
                  .concat(s[n - 2])
                  .concat(s[n - 1], '" in "')
                  .concat(s, '").')
              );
            l[e] = 16 * a + r;
          }
          return l;
        }
        function y(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t,
            r = d.encode(e);
          return "number" == typeof n
            ? (a(r, n),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { dir: n, size: a = 32 } = t;
                if (0 === a) return e;
                if (e.length > a)
                  throw new I({ size: e.length, targetSize: a, type: "Bytes" });
                let r = new Uint8Array(a);
                for (let t = 0; t < a; t++) {
                  let i = "right" === n;
                  r[i ? t : a - t - 1] = e[i ? t : e.length - t - 1];
                }
                return r;
              })(r, { dir: "right", size: n }))
            : r;
        }
        function m(e) {
          return crypto.getRandomValues(new Uint8Array(e));
        }
        function b(e) {
          return e.length;
        }
        function f(e, t, n) {
          let a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            { strict: r } = a;
          if ("number" == typeof t && t > 0 && t > b(e) - 1)
            throw new P({ offset: t, position: "start", size: b(e) });
          let i = e.slice(t, n);
          return (
            r &&
              (function (e, t, n) {
                if (
                  "number" == typeof t &&
                  "number" == typeof n &&
                  b(e) !== n - t
                )
                  throw new P({ offset: n, position: "end", size: b(e) });
              })(i, t, n),
            i
          );
        }
        function v(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t;
          return void 0 !== n && a(e, n), $(F(e, t), t);
        }
        function g(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t,
            r = e;
          if ((void 0 !== n && (a(r, n), (r = x(r))), r.length > 1 || r[0] > 1))
            throw new M(r);
          return !!r[0];
        }
        function h(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t;
          return void 0 !== n && a(e, n), H(F(e, t), t);
        }
        function w(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t,
            r = e;
          return void 0 !== n && (a(r, n), (r = E(r))), l.decode(r);
        }
        function x(e) {
          return s(e, { dir: "left" });
        }
        function E(e) {
          return s(e, { dir: "right" });
        }
        function A(e) {
          try {
            if (
              !(e instanceof Uint8Array) &&
              (!e ||
                "object" != typeof e ||
                !("BYTES_PER_ELEMENT" in e) ||
                1 !== e.BYTES_PER_ELEMENT ||
                "Uint8Array" !== e.constructor.name)
            )
              throw new S(e);
            return !0;
          } catch (e) {
            return !1;
          }
        }
        class M extends t {
          constructor(e) {
            super("Bytes value `".concat(e, "` is not a valid boolean."), {
              metaMessages: [
                "The bytes array must contain a single byte of either a `0` or `1` value.",
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.InvalidBytesBooleanError",
              });
          }
        }
        class S extends t {
          constructor(e) {
            super(
              "Value `"
                .concat("object" == typeof e ? n(e) : e, "` of type `")
                .concat(typeof e, "` is an invalid Bytes value."),
              { metaMessages: ["Bytes values must be of type `Bytes`."] }
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.InvalidBytesTypeError",
              });
          }
        }
        class T extends t {
          constructor({ givenSize: e, maxSize: t }) {
            super(
              "Size cannot exceed `"
                .concat(t, "` bytes. Given size: `")
                .concat(e, "` bytes.")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SizeOverflowError",
              });
          }
        }
        class P extends t {
          constructor({ offset: e, position: t, size: n }) {
            super(
              "Slice "
                .concat("start" === t ? "starting" : "ending", " at offset `")
                .concat(e, "` is out-of-bounds (size: `")
                .concat(n, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SliceOffsetOutOfBoundsError",
              });
          }
        }
        class I extends t {
          constructor({ size: e, targetSize: t, type: n }) {
            super(
              ""
                .concat(n.charAt(0).toUpperCase())
                .concat(n.slice(1).toLowerCase(), " size (`")
                .concat(e, "`) exceeds padding size (`")
                .concat(t, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SizeExceedsPaddingSizeError",
              });
          }
        }
        let B = new TextEncoder(),
          z = Array.from({ length: 256 }, (e, t) =>
            t.toString(16).padStart(2, "0")
          );
        function O() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return "0x".concat(t.reduce((e, t) => e + t.replace("0x", ""), ""));
        }
        function R(e) {
          return e instanceof Uint8Array
            ? F(e)
            : Array.isArray(e)
            ? F(new Uint8Array(e))
            : e;
        }
        function C(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = "0x".concat(Number(e));
          return "number" == typeof t.size ? (o(n, t.size), N(n, t.size)) : n;
        }
        function F(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = "";
          for (let t = 0; t < e.length; t++) n += z[e[t]];
          let a = "0x".concat(n);
          return "number" == typeof t.size ? (o(a, t.size), D(a, t.size)) : a;
        }
        function j(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: a, size: r } = n,
            i = BigInt(e);
          r
            ? (t = a
                ? (1n << (8n * BigInt(r) - 1n)) - 1n
                : 2n ** (8n * BigInt(r)) - 1n)
            : "number" == typeof e && (t = BigInt(Number.MAX_SAFE_INTEGER));
          let s = "bigint" == typeof t && a ? -t - 1n : 0;
          if ((t && i > t) || i < s) {
            let n = "bigint" == typeof e ? "n" : "";
            throw new L({
              max: t ? "".concat(t).concat(n) : void 0,
              min: "".concat(s).concat(n),
              signed: a,
              size: r,
              value: "".concat(e).concat(n),
            });
          }
          let o = (a && i < 0 ? (1n << BigInt(8 * r)) + BigInt(i) : i).toString(
              16
            ),
            u = "0x".concat(o);
          return r ? N(u, r) : u;
        }
        function k(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return F(B.encode(e), t);
        }
        function N(e, t) {
          return u(e, { dir: "left", size: t });
        }
        function D(e, t) {
          return u(e, { dir: "right", size: t });
        }
        function _(e, t, n) {
          let a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            { strict: r } = a;
          if ("number" == typeof t && t > 0 && t > U(e) - 1)
            throw new q({ offset: t, position: "start", size: U(e) });
          let i = "0x".concat(
            e
              .replace("0x", "")
              .slice((null != t ? t : 0) * 2, (null != n ? n : e.length) * 2)
          );
          return (
            r &&
              (function (e, t, n) {
                if (
                  "number" == typeof t &&
                  "number" == typeof n &&
                  U(e) !== n - t
                )
                  throw new q({ offset: n, position: "end", size: U(e) });
              })(i, t, n),
            i
          );
        }
        function U(e) {
          return Math.ceil((e.length - 2) / 2);
        }
        function $(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: n } = t;
          t.size && o(e, t.size);
          let a = BigInt(e);
          if (!n) return a;
          let r = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
          return a <= r >> 1n ? a : a - r - 1n;
        }
        function H(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: n, size: a } = t;
          return n || a ? Number($(e, t)) : Number(e);
        }
        function Z(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { strict: n = !1 } = t;
          try {
            return (
              !(function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { strict: n = !1 } = t;
                if (!e || "string" != typeof e) throw new V(e);
                if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                  throw new G(e);
              })(e, { strict: n }),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        class L extends t {
          constructor({ max: e, min: t, signed: n, size: a, value: r }) {
            super(
              "Number `"
                .concat(r, "` is not in safe")
                .concat(a ? " ".concat(8 * a, "-bit") : "")
                .concat(n ? " signed" : " unsigned", " integer range ")
                .concat(
                  e
                    ? "(`".concat(t, "` to `").concat(e, "`)")
                    : "(above `".concat(t, "`)")
                )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.IntegerOutOfRangeError",
              });
          }
        }
        class V extends t {
          constructor(e) {
            super(
              "Value `"
                .concat("object" == typeof e ? n(e) : e, "` of type `")
                .concat(typeof e, "` is an invalid hex type."),
              {
                metaMessages: [
                  'Hex types must be represented as `"0x${string}"`.',
                ],
              }
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.InvalidHexTypeError",
              });
          }
        }
        class G extends t {
          constructor(e) {
            super("Value `".concat(e, "` is an invalid hex value."), {
              metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.InvalidHexValueError",
              });
          }
        }
        class W extends t {
          constructor({ givenSize: e, maxSize: t }) {
            super(
              "Size cannot exceed `"
                .concat(t, "` bytes. Given size: `")
                .concat(e, "` bytes.")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.SizeOverflowError",
              });
          }
        }
        class q extends t {
          constructor({ offset: e, position: t, size: n }) {
            super(
              "Slice "
                .concat("start" === t ? "starting" : "ending", " at offset `")
                .concat(e, "` is out-of-bounds (size: `")
                .concat(n, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.SliceOffsetOutOfBoundsError",
              });
          }
        }
        class J extends t {
          constructor({ size: e, targetSize: t, type: n }) {
            super(
              ""
                .concat(n.charAt(0).toUpperCase())
                .concat(n.slice(1).toLowerCase(), " size (`")
                .concat(e, "`) exceeds padding size (`")
                .concat(t, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.SizeExceedsPaddingSizeError",
              });
          }
        }
        function K(e) {
          return {
            address: e.address,
            amount: j(e.amount),
            index: j(e.index),
            validatorIndex: j(e.validatorIndex),
          };
        }
        function Y(e) {
          return {
            ...("bigint" == typeof e.baseFeePerGas && {
              baseFeePerGas: j(e.baseFeePerGas),
            }),
            ...("bigint" == typeof e.blobBaseFee && {
              blobBaseFee: j(e.blobBaseFee),
            }),
            ...("string" == typeof e.feeRecipient && {
              feeRecipient: e.feeRecipient,
            }),
            ...("bigint" == typeof e.gasLimit && { gasLimit: j(e.gasLimit) }),
            ...("bigint" == typeof e.number && { number: j(e.number) }),
            ...("bigint" == typeof e.prevRandao && {
              prevRandao: j(e.prevRandao),
            }),
            ...("bigint" == typeof e.time && { time: j(e.time) }),
            ...(e.withdrawals && { withdrawals: e.withdrawals.map(K) }),
          };
        }
      },
      [433907, 28658, 27601, 198960],
    ],
    185532: [
      (e) => {
        "use strict";
        e.s({ aggregate3Signature: () => t }, 185532);
        let t = "0x82ad56cb";
        e.s(
          {
            deploylessCallViaBytecodeBytecode: () => n,
            deploylessCallViaFactoryBytecode: () => a,
            universalSignatureValidatorByteCode: () => r,
          },
          194870
        );
        let n =
            "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
          a =
            "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
          r =
            "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
      },
      [194870],
    ],
    667702: (e) => {
      "use strict";
      e.s({ encodeDeployData: () => i });
      var t = e.i(787769),
        n = e.i(115481),
        a = e.i(750671);
      let r = "/docs/contract/encodeDeployData";
      function i(e) {
        let { abi: i, args: s, bytecode: o } = e;
        if (!s || 0 === s.length) return o;
        let u = i.find((e) => "type" in e && "constructor" === e.type);
        if (!u) throw new t.AbiConstructorNotFoundError({ docsPath: r });
        if (!("inputs" in u) || !u.inputs || 0 === u.inputs.length)
          throw new t.AbiConstructorParamsNotFoundError({ docsPath: r });
        let l = (0, a.encodeAbiParameters)(u.inputs, s);
        return (0, n.concatHex)([o, l]);
      }
    },
    315573: [
      (e) => {
        "use strict";
        e.s({ call: () => A }, 315573);
        var t = e.i(930640),
          n = e.i(688905),
          a = e.i(326875),
          r = e.i(275982),
          i = e.i(185532),
          s = e.i(194870),
          o = e.i(500780),
          u = e.i(710546),
          l = e.i(994790),
          d = e.i(622157),
          c = e.i(667702),
          p = e.i(906420),
          y = e.i(768759),
          m = e.i(994290);
        e.s({ getCallError: () => v }, 227494);
        var b = e.i(434076),
          f = e.i(334554);
        function v(e, t) {
          let { docsPath: n, ...a } = t,
            r = (() => {
              let t = (0, f.getNodeError)(e, a);
              return t instanceof b.UnknownNodeError ? e : t;
            })();
          return new l.CallExecutionError(r, { docsPath: n, ...a });
        }
        var g = e.i(712808),
          h = e.i(494316),
          w = e.i(309697),
          x = e.i(631128),
          E = e.i(385070);
        async function A(r, d) {
          var p, y, b, f, w;
          let {
              account: A = r.account,
              authorizationList: S,
              batch: T = !!(null == (p = r.batch) ? void 0 : p.multicall),
              blockNumber: P,
              blockTag: I = null != (y = r.experimental_blockTag)
                ? y
                : "latest",
              accessList: B,
              blobs: z,
              blockOverrides: O,
              code: R,
              data: C,
              factory: F,
              factoryData: j,
              gas: k,
              gasPrice: N,
              maxFeePerBlobGas: D,
              maxFeePerGas: _,
              maxPriorityFeePerGas: U,
              nonce: $,
              to: H,
              value: Z,
              stateOverride: L,
              ...V
            } = d,
            G = A ? (0, a.parseAccount)(A) : void 0;
          if (R && (F || j))
            throw new o.BaseError(
              "Cannot provide both `code` & `factory`/`factoryData` as parameters."
            );
          if (R && H)
            throw new o.BaseError(
              "Cannot provide both `code` & `to` as parameters."
            );
          let W = R && C,
            q = F && j && H && C,
            J = W || q,
            K = W
              ? (function (e) {
                  let { code: n, data: a } = e;
                  return (0, c.encodeDeployData)({
                    abi: (0, t.parseAbi)(["constructor(bytes, bytes)"]),
                    bytecode: s.deploylessCallViaBytecodeBytecode,
                    args: [n, a],
                  });
                })({ code: R, data: C })
              : q
              ? (function (e) {
                  let { data: n, factory: a, factoryData: r, to: i } = e;
                  return (0, c.encodeDeployData)({
                    abi: (0, t.parseAbi)([
                      "constructor(address, bytes, address, bytes)",
                    ]),
                    bytecode: s.deploylessCallViaFactoryBytecode,
                    args: [i, n, a, r],
                  });
                })({ data: C, factory: F, factoryData: j, to: H })
              : C;
          try {
            (0, E.assertRequest)(d);
            let e =
                ("bigint" == typeof P ? (0, m.numberToHex)(P) : void 0) || I,
              t = O ? n.toRpc(O) : void 0,
              a = (0, x.serializeStateOverride)(L),
              s =
                null == (w = r.chain) ||
                null == (f = w.formatters) ||
                null == (b = f.transactionRequest)
                  ? void 0
                  : b.format,
              o = (s || h.formatTransactionRequest)({
                ...(0, g.extract)(V, { format: s }),
                from: null == G ? void 0 : G.address,
                accessList: B,
                authorizationList: S,
                blobs: z,
                data: K,
                gas: k,
                gasPrice: N,
                maxFeePerBlobGas: D,
                maxFeePerGas: _,
                maxPriorityFeePerGas: U,
                nonce: $,
                to: J ? void 0 : H,
                value: Z,
              });
            if (
              T &&
              (function (e) {
                let { request: t } = e,
                  { data: n, to: a, ...r } = t;
                return (
                  !(!n || n.startsWith(i.aggregate3Signature)) &&
                  !!a &&
                  !(Object.values(r).filter((e) => void 0 !== e).length > 0)
                );
              })({ request: o }) &&
              !a &&
              !t
            )
              try {
                return await M(r, { ...o, blockNumber: P, blockTag: I });
              } catch (e) {
                if (
                  !(e instanceof u.ClientChainNotConfiguredError) &&
                  !(e instanceof u.ChainDoesNotSupportContract)
                )
                  throw e;
              }
            let l = (() => {
                let n = [o, e];
                return a && t
                  ? [...n, a, t]
                  : a
                  ? [...n, a]
                  : t
                  ? [...n, {}, t]
                  : n;
              })(),
              c = await r.request({ method: "eth_call", params: l });
            if ("0x" === c) return { data: void 0 };
            return { data: c };
          } catch (i) {
            let t = (function (e) {
                var t;
                if (!(e instanceof o.BaseError)) return;
                let n = e.walk();
                return "object" == typeof (null == n ? void 0 : n.data)
                  ? null == (t = n.data)
                    ? void 0
                    : t.data
                  : n.data;
              })(i),
              { offchainLookup: n, offchainLookupSignature: a } = await e.r(
                253481
              )(e.i);
            if (
              !1 !== r.ccipRead &&
              (null == t ? void 0 : t.slice(0, 10)) === a &&
              H
            )
              return { data: await n(r, { data: t, to: H }) };
            if (J && (null == t ? void 0 : t.slice(0, 10)) === "0x101bb98d")
              throw new l.CounterfactualDeploymentFailedError({ factory: F });
            throw v(i, { ...d, account: G, chain: r.chain });
          }
        }
        async function M(e, t) {
          var n, a;
          let { batchSize: i = 1024, wait: s = 0 } =
              "object" == typeof (null == (n = e.batch) ? void 0 : n.multicall)
                ? e.batch.multicall
                : {},
            {
              blockNumber: o,
              blockTag: c = null != (a = e.experimental_blockTag)
                ? a
                : "latest",
              data: b,
              multicallAddress: f,
              to: v,
            } = t,
            g = f;
          if (!g) {
            if (!e.chain) throw new u.ClientChainNotConfiguredError();
            g = (0, y.getChainContractAddress)({
              blockNumber: o,
              chain: e.chain,
              contract: "multicall3",
            });
          }
          let h = ("bigint" == typeof o ? (0, m.numberToHex)(o) : void 0) || c,
            { schedule: x } = (0, w.createBatchScheduler)({
              id: "".concat(e.uid, ".").concat(h),
              wait: s,
              shouldSplitBatch: (e) =>
                e.reduce((e, t) => {
                  let { data: n } = t;
                  return e + (n.length - 2);
                }, 0) >
                2 * i,
              fn: async (t) => {
                let n = t.map((e) => ({
                    allowFailure: !0,
                    callData: e.data,
                    target: e.to,
                  })),
                  a = (0, p.encodeFunctionData)({
                    abi: r.multicall3Abi,
                    args: [n],
                    functionName: "aggregate3",
                  }),
                  i = await e.request({
                    method: "eth_call",
                    params: [{ data: a, to: g }, h],
                  });
                return (0, d.decodeFunctionResult)({
                  abi: r.multicall3Abi,
                  args: [n],
                  functionName: "aggregate3",
                  data: i || "0x",
                });
              },
            }),
            [{ returnData: E, success: A }] = await x({ data: b, to: v });
          if (!A) throw new l.RawContractError({ data: E });
          return "0x" === E ? { data: void 0 } : { data: E };
        }
      },
      [227494],
    ],
    429921: (e) => {
      "use strict";
      e.s({ isAddressEqual: () => a });
      var t = e.i(948628),
        n = e.i(259123);
      function a(e, a) {
        if (!(0, n.isAddress)(e, { strict: !1 }))
          throw new t.InvalidAddressError({ address: e });
        if (!(0, n.isAddress)(a, { strict: !1 }))
          throw new t.InvalidAddressError({ address: a });
        return e.toLowerCase() === a.toLowerCase();
      }
    },
  },
]);

//# sourceMappingURL=7a533789401f46d8.js.map
