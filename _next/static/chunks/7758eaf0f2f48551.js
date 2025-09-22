(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    233349: (e) => {
      "use strict";
      e.s({ createClient: () => r, rpcSchema: () => o });
      var t = e.i(326875),
        n = e.i(505642);
      function r(e) {
        var r, o, i, a;
        let {
            batch: s,
            chain: c,
            ccipRead: u,
            key: l = "base",
            name: d = "Base Client",
            type: h = "base",
          } = e,
          p =
            null != (r = e.experimental_blockTag)
              ? r
              : "number" ==
                typeof (null == c ? void 0 : c.experimental_preconfirmationTime)
              ? "pending"
              : void 0,
          m = Math.min(
            Math.max(
              Math.floor(
                (null != (o = null == c ? void 0 : c.blockTime) ? o : 12e3) / 2
              ),
              500
            ),
            4e3
          ),
          f = null != (i = e.pollingInterval) ? i : m,
          g = null != (a = e.cacheTime) ? a : f,
          v = e.account ? (0, t.parseAccount)(e.account) : void 0,
          {
            config: b,
            request: w,
            value: y,
          } = e.transport({ chain: c, pollingInterval: f }),
          x = {
            account: v,
            batch: s,
            cacheTime: g,
            ccipRead: u,
            chain: c,
            key: l,
            name: d,
            pollingInterval: f,
            request: w,
            transport: { ...b, ...y },
            type: h,
            uid: (0, n.uid)(),
            ...(p ? { experimental_blockTag: p } : {}),
          };
        return Object.assign(x, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in x) delete r[e];
              let o = { ...t, ...r };
              return Object.assign(o, { extend: e(o) });
            };
          })(x),
        });
      }
      function o() {
        return null;
      }
    },
    757859: (e) => {
      "use strict";
      e.s({ getBalance: () => r });
      var t,
        n = e.i(994290);
      async function r(e, r) {
        let {
            address: o,
            blockNumber: i,
            blockTag: a = null != (t = e.experimental_blockTag) ? t : "latest",
          } = r,
          s = "bigint" == typeof i ? (0, n.numberToHex)(i) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [o, s || a] })
        );
      }
    },
    477379: (e) => {
      "use strict";
      function t(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let o = e[n];
        return "function" == typeof o ? o : (n) => t(e, n);
      }
      e.s({ getAction: () => t });
    },
    710456: [
      (e) => {
        "use strict";
        e.s(
          { estimateFeesPerGas: () => E, internal_estimateFeesPerGas: () => P },
          710456
        ),
          e.s(
            {
              BaseFeeScalarError: () => o,
              Eip1559FeesNotSupportedError: () => i,
              MaxFeePerGasTooLowError: () => a,
            },
            758292
          );
        var t,
          n = e.i(588732),
          r = e.i(500780);
        class o extends r.BaseError {
          constructor() {
            super("`baseFeeMultiplier` must be greater than 1.", {
              name: "BaseFeeScalarError",
            });
          }
        }
        class i extends r.BaseError {
          constructor() {
            super("Chain does not support EIP-1559 fees.", {
              name: "Eip1559FeesNotSupportedError",
            });
          }
        }
        class a extends r.BaseError {
          constructor({ maxPriorityFeePerGas: e }) {
            super(
              "`maxFeePerGas` cannot be less than the `maxPriorityFeePerGas` (".concat(
                (0, n.formatGwei)(e),
                " gwei)."
              ),
              { name: "MaxFeePerGasTooLowError" }
            );
          }
        }
        var s = e.i(477379);
        e.s(
          {
            estimateMaxPriorityFeePerGas: () => y,
            internal_estimateMaxPriorityFeePerGas: () => x,
          },
          488495
        );
        var c = e.i(864198);
        e.s({ getBlock: () => b }, 508914),
          e.s({ BlockNotFoundError: () => l }, 381325);
        var u = r;
        class l extends u.BaseError {
          constructor({ blockHash: e, blockNumber: t }) {
            let n = "Block";
            e && (n = 'Block at hash "'.concat(e, '"')),
              t && (n = 'Block at number "'.concat(t, '"')),
              super("".concat(n, " could not be found."), {
                name: "BlockNotFoundError",
              });
          }
        }
        var d = e.i(994290);
        e.s({ defineBlock: () => v, formatBlock: () => g }, 510901);
        var h = e.i(771770);
        e.s(
          {
            defineTransaction: () => f,
            formatTransaction: () => m,
            transactionType: () => p,
          },
          581241
        );
        let p = {
          "0x0": "legacy",
          "0x1": "eip2930",
          "0x2": "eip1559",
          "0x3": "eip4844",
          "0x4": "eip7702",
        };
        function m(e) {
          let t = {
            ...e,
            blockHash: e.blockHash ? e.blockHash : null,
            blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
            chainId: e.chainId ? (0, c.hexToNumber)(e.chainId) : void 0,
            gas: e.gas ? BigInt(e.gas) : void 0,
            gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
            maxFeePerBlobGas: e.maxFeePerBlobGas
              ? BigInt(e.maxFeePerBlobGas)
              : void 0,
            maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
            maxPriorityFeePerGas: e.maxPriorityFeePerGas
              ? BigInt(e.maxPriorityFeePerGas)
              : void 0,
            nonce: e.nonce ? (0, c.hexToNumber)(e.nonce) : void 0,
            to: e.to ? e.to : null,
            transactionIndex: e.transactionIndex
              ? Number(e.transactionIndex)
              : null,
            type: e.type ? p[e.type] : void 0,
            typeHex: e.type ? e.type : void 0,
            value: e.value ? BigInt(e.value) : void 0,
            v: e.v ? BigInt(e.v) : void 0,
          };
          return (
            e.authorizationList &&
              (t.authorizationList = e.authorizationList.map((e) => ({
                address: e.address,
                chainId: Number(e.chainId),
                nonce: Number(e.nonce),
                r: e.r,
                s: e.s,
                yParity: Number(e.yParity),
              }))),
            (t.yParity = (() => {
              if (e.yParity) return Number(e.yParity);
              if ("bigint" == typeof t.v) {
                if (0n === t.v || 27n === t.v) return 0;
                if (1n === t.v || 28n === t.v) return 1;
                if (t.v >= 35n) return +(t.v % 2n === 0n);
              }
            })()),
            "legacy" === t.type &&
              (delete t.accessList,
              delete t.maxFeePerBlobGas,
              delete t.maxFeePerGas,
              delete t.maxPriorityFeePerGas,
              delete t.yParity),
            "eip2930" === t.type &&
              (delete t.maxFeePerBlobGas,
              delete t.maxFeePerGas,
              delete t.maxPriorityFeePerGas),
            "eip1559" === t.type && delete t.maxFeePerBlobGas,
            t
          );
        }
        let f = (0, h.defineFormatter)("transaction", m);
        function g(e) {
          var t;
          let n = (null != (t = e.transactions) ? t : []).map((e) =>
            "string" == typeof e ? e : m(e)
          );
          return {
            ...e,
            baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
            blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
            difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
            excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
            gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
            gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
            hash: e.hash ? e.hash : null,
            logsBloom: e.logsBloom ? e.logsBloom : null,
            nonce: e.nonce ? e.nonce : null,
            number: e.number ? BigInt(e.number) : null,
            size: e.size ? BigInt(e.size) : void 0,
            timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
            transactions: n,
            totalDifficulty: e.totalDifficulty
              ? BigInt(e.totalDifficulty)
              : null,
          };
        }
        let v = (0, h.defineFormatter)("block", g);
        async function b(e) {
          var n, r, o;
          let {
              blockHash: i,
              blockNumber: a,
              blockTag: s = null != (t = e.experimental_blockTag)
                ? t
                : "latest",
              includeTransactions: c,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            u = null != c && c,
            h = void 0 !== a ? (0, d.numberToHex)(a) : void 0,
            p = null;
          if (
            !(p = i
              ? await e.request(
                  { method: "eth_getBlockByHash", params: [i, u] },
                  { dedupe: !0 }
                )
              : await e.request(
                  { method: "eth_getBlockByNumber", params: [h || s, u] },
                  { dedupe: !!h }
                ))
          )
            throw new l({ blockHash: i, blockNumber: a });
          return (
            (null == (o = e.chain) ||
            null == (r = o.formatters) ||
            null == (n = r.block)
              ? void 0
              : n.format) || g
          )(p);
        }
        async function w(e) {
          return BigInt(await e.request({ method: "eth_gasPrice" }));
        }
        async function y(e, t) {
          return x(e, t);
        }
        async function x(e, t) {
          let { block: n, chain: r = e.chain, request: o } = t || {};
          try {
            var a, u, l;
            let t =
              null !=
              (l =
                null == r || null == (a = r.fees)
                  ? void 0
                  : a.maxPriorityFeePerGas)
                ? l
                : null == r || null == (u = r.fees)
                ? void 0
                : u.defaultPriorityFee;
            if ("function" == typeof t) {
              let r = n || (await (0, s.getAction)(e, b, "getBlock")({})),
                i = await t({ block: r, client: e, request: o });
              if (null === i) throw Error();
              return i;
            }
            if (void 0 !== t) return t;
            let i = await e.request({ method: "eth_maxPriorityFeePerGas" });
            return (0, c.hexToBigInt)(i);
          } catch (a) {
            let [t, r] = await Promise.all([
              n ? Promise.resolve(n) : (0, s.getAction)(e, b, "getBlock")({}),
              (0, s.getAction)(e, w, "getGasPrice")({}),
            ]);
            if ("bigint" != typeof t.baseFeePerGas) throw new i();
            let o = r - t.baseFeePerGas;
            if (o < 0n) return 0n;
            return o;
          }
        }
        async function E(e, t) {
          return P(e, t);
        }
        async function P(e, t) {
          var n, r, a, c, u;
          let {
              block: l,
              chain: d = e.chain,
              request: h,
              type: p = "eip1559",
            } = t || {},
            m = await (async () => {
              var t, n, r;
              return "function" ==
                typeof (null == d || null == (t = d.fees)
                  ? void 0
                  : t.baseFeeMultiplier)
                ? d.fees.baseFeeMultiplier({ block: l, client: e, request: h })
                : null !=
                  (r =
                    null == d || null == (n = d.fees)
                      ? void 0
                      : n.baseFeeMultiplier)
                ? r
                : 1.2;
            })();
          if (m < 1) throw new o();
          let f =
              null !=
              (a = null == (n = m.toString().split(".")[1]) ? void 0 : n.length)
                ? a
                : 0,
            g = 10 ** f,
            v = (e) => (e * BigInt(Math.ceil(m * g))) / BigInt(g),
            y = l || (await (0, s.getAction)(e, b, "getBlock")({}));
          if (
            "function" ==
            typeof (null == d || null == (r = d.fees)
              ? void 0
              : r.estimateFeesPerGas)
          ) {
            let t = await d.fees.estimateFeesPerGas({
              block: l,
              client: e,
              multiply: v,
              request: h,
              type: p,
            });
            if (null !== t) return t;
          }
          if ("eip1559" === p) {
            if ("bigint" != typeof y.baseFeePerGas) throw new i();
            let t =
                "bigint" == typeof (null == h ? void 0 : h.maxPriorityFeePerGas)
                  ? h.maxPriorityFeePerGas
                  : await x(e, { block: y, chain: d, request: h }),
              n = v(y.baseFeePerGas);
            return {
              maxFeePerGas:
                null != (c = null == h ? void 0 : h.maxFeePerGas) ? c : n + t,
              maxPriorityFeePerGas: t,
            };
          }
          return {
            gasPrice:
              null != (u = null == h ? void 0 : h.gasPrice)
                ? u
                : v(await (0, s.getAction)(e, w, "getGasPrice")({})),
          };
        }
        e.s({ getGasPrice: () => w }, 267693);
      },
      [758292, 381325, 581241, 510901, 508914, 267693, 488495],
    ],
    605956: [
      (e) => {
        "use strict";
        e.s({ recoverAuthorizationAddress: () => b }, 605956),
          e.s({ recoverAddress: () => u }, 509182);
        var t = e.i(549798),
          n = e.i(831826);
        e.s({ recoverPublicKey: () => s }, 996992);
        var r = e.i(212629),
          o = e.i(265288),
          i = e.i(864198),
          a = e.i(994290);
        async function s(t) {
          let { hash: n, signature: s } = t,
            u = (0, r.isHex)(n) ? n : (0, a.toHex)(n),
            { secp256k1: l } = await e.r(619762)(e.i),
            d = (() => {
              if ("object" == typeof s && "r" in s && "s" in s) {
                let { r: e, s: t, v: n, yParity: r } = s,
                  o = c(Number(null != r ? r : n));
                return new l.Signature(
                  (0, i.hexToBigInt)(e),
                  (0, i.hexToBigInt)(t)
                ).addRecoveryBit(o);
              }
              let e = (0, r.isHex)(s) ? s : (0, a.toHex)(s);
              if (65 !== (0, o.size)(e))
                throw Error("invalid signature length");
              let t = c((0, i.hexToNumber)("0x".concat(e.slice(130))));
              return l.Signature.fromCompact(
                e.substring(2, 130)
              ).addRecoveryBit(t);
            })()
              .recoverPublicKey(u.substring(2))
              .toHex(!1);
          return "0x".concat(d);
        }
        function c(e) {
          if (0 === e || 1 === e) return e;
          if (27 === e) return 0;
          if (28 === e) return 1;
          throw Error("Invalid yParityOrV value");
        }
        async function u(e) {
          let { hash: r, signature: o } = e;
          var i = await s({ hash: r, signature: o });
          let a = (0, n.keccak256)("0x".concat(i.substring(4))).substring(26);
          return (0, t.checksumAddress)("0x".concat(a));
        }
        var l = e.i(115481),
          d = e.i(919717);
        e.s({ bytesToRlp: () => f, hexToRlp: () => g, toRlp: () => m }, 293871);
        var h = e.i(500780),
          p = e.i(840891);
        function m(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "hex",
            n = (function e(t) {
              return Array.isArray(t)
                ? (function (e) {
                    let t = e.reduce((e, t) => e + t.length, 0),
                      n = v(t);
                    return {
                      length: t <= 55 ? 1 + t : 1 + n + t,
                      encode(r) {
                        for (let { encode: o } of (t <= 55
                          ? r.pushByte(192 + t)
                          : (r.pushByte(247 + n),
                            1 === n
                              ? r.pushUint8(t)
                              : 2 === n
                              ? r.pushUint16(t)
                              : 3 === n
                              ? r.pushUint24(t)
                              : r.pushUint32(t)),
                        e))
                          o(r);
                      },
                    };
                  })(t.map((t) => e(t)))
                : (function (e) {
                    let t = "string" == typeof e ? (0, d.hexToBytes)(e) : e,
                      n = v(t.length);
                    return {
                      length:
                        1 === t.length && t[0] < 128
                          ? 1
                          : t.length <= 55
                          ? 1 + t.length
                          : 1 + n + t.length,
                      encode(e) {
                        (1 === t.length && t[0] < 128) ||
                          (t.length <= 55
                            ? e.pushByte(128 + t.length)
                            : (e.pushByte(183 + n),
                              1 === n
                                ? e.pushUint8(t.length)
                                : 2 === n
                                ? e.pushUint16(t.length)
                                : 3 === n
                                ? e.pushUint24(t.length)
                                : e.pushUint32(t.length))),
                          e.pushBytes(t);
                      },
                    };
                  })(t);
            })(e),
            r = (0, p.createCursor)(new Uint8Array(n.length));
          return (n.encode(r), "hex" === t)
            ? (0, a.bytesToHex)(r.bytes)
            : r.bytes;
        }
        function f(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "bytes";
          return m(e, t);
        }
        function g(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "hex";
          return m(e, t);
        }
        function v(e) {
          if (e < 256) return 1;
          if (e < 65536) return 2;
          if (e < 0x1000000) return 3;
          if (e < 0x100000000) return 4;
          throw new h.BaseError("Length is too large.");
        }
        async function b(e) {
          let { authorization: t, signature: r } = e;
          return u({
            hash: (function (e) {
              var t;
              let { chainId: r, nonce: o, to: i } = e,
                s = null != (t = e.contractAddress) ? t : e.address,
                c = (0, n.keccak256)(
                  (0, l.concatHex)([
                    "0x05",
                    m([
                      r ? (0, a.numberToHex)(r) : "0x",
                      s,
                      o ? (0, a.numberToHex)(o) : "0x",
                    ]),
                  ])
                );
              return "bytes" === i ? (0, d.hexToBytes)(c) : c;
            })(t),
            signature: null != r ? r : t,
          });
        }
      },
      [996992, 509182, 293871],
    ],
    227899: [
      (e) => {
        "use strict";
        e.s({ getEstimateGasError: () => c }, 227899),
          e.s({ EstimateGasExecutionError: () => i }, 611233);
        var t = e.i(817008),
          n = e.i(588732),
          r = e.i(500780),
          o = e.i(658213);
        class i extends r.BaseError {
          constructor(
            e,
            {
              account: r,
              docsPath: i,
              chain: a,
              data: s,
              gas: c,
              gasPrice: u,
              maxFeePerGas: l,
              maxPriorityFeePerGas: d,
              nonce: h,
              to: p,
              value: m,
            }
          ) {
            var f;
            super(e.shortMessage, {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Estimate Gas Arguments:",
                (0, o.prettyPrint)({
                  from: null == r ? void 0 : r.address,
                  to: p,
                  value:
                    void 0 !== m &&
                    ""
                      .concat((0, t.formatEther)(m), " ")
                      .concat(
                        (null == a || null == (f = a.nativeCurrency)
                          ? void 0
                          : f.symbol) || "ETH"
                      ),
                  data: s,
                  gas: c,
                  gasPrice:
                    void 0 !== u && "".concat((0, n.formatGwei)(u), " gwei"),
                  maxFeePerGas:
                    void 0 !== l && "".concat((0, n.formatGwei)(l), " gwei"),
                  maxPriorityFeePerGas:
                    void 0 !== d && "".concat((0, n.formatGwei)(d), " gwei"),
                  nonce: h,
                }),
              ].filter(Boolean),
              name: "EstimateGasExecutionError",
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
        var a = e.i(434076),
          s = e.i(334554);
        function c(e, t) {
          let { docsPath: n, ...r } = t;
          return new i(
            (() => {
              let t = (0, s.getNodeError)(e, r);
              return t instanceof a.UnknownNodeError ? e : t;
            })(),
            { docsPath: n, ...r }
          );
        }
      },
      [611233],
    ],
    595828: (e) => {
      "use strict";
      e.s({ estimateGas: () => h });
      var t = e.i(326875),
        n = e.i(500780),
        r = e.i(605956),
        o = e.i(994290),
        i = e.i(227899),
        a = e.i(712808),
        s = e.i(494316),
        c = e.i(631128),
        u = e.i(385070),
        l = e.i(936154),
        d = e.i(757859);
      async function h(e, h) {
        let { account: p = e.account } = h,
          m = p ? (0, t.parseAccount)(p) : void 0;
        try {
          var f, g, v;
          let {
              accessList: t,
              authorizationList: i,
              blobs: p,
              blobVersionedHashes: w,
              blockNumber: y,
              blockTag: x,
              data: E,
              gas: P,
              gasPrice: T,
              maxFeePerBlobGas: I,
              maxFeePerGas: B,
              maxPriorityFeePerGas: R,
              nonce: F,
              value: C,
              stateOverride: G,
              ...U
            } = await (0, l.prepareTransactionRequest)(e, {
              ...h,
              parameters:
                (null == m ? void 0 : m.type) === "local"
                  ? void 0
                  : ["blobVersionedHashes"],
            }),
            N = ("bigint" == typeof y ? (0, o.numberToHex)(y) : void 0) || x,
            A = (0, c.serializeStateOverride)(G),
            H = await (async () =>
              U.to
                ? U.to
                : i && i.length > 0
                ? await (0, r.recoverAuthorizationAddress)({
                    authorization: i[0],
                  }).catch(() => {
                    throw new n.BaseError(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, u.assertRequest)(h);
          let M =
              null == (v = e.chain) ||
              null == (g = v.formatters) ||
              null == (f = g.transactionRequest)
                ? void 0
                : f.format,
            k = (M || s.formatTransactionRequest)({
              ...(0, a.extract)(U, { format: M }),
              from: null == m ? void 0 : m.address,
              accessList: t,
              authorizationList: i,
              blobs: p,
              blobVersionedHashes: w,
              data: E,
              gas: P,
              gasPrice: T,
              maxFeePerBlobGas: I,
              maxFeePerGas: B,
              maxPriorityFeePerGas: R,
              nonce: F,
              to: H,
              value: C,
            });
          function b(t) {
            var n;
            let { block: r, request: o, rpcStateOverride: i } = t;
            return e.request({
              method: "eth_estimateGas",
              params: i
                ? [
                    o,
                    null != (n = null != r ? r : e.experimental_blockTag)
                      ? n
                      : "latest",
                    i,
                  ]
                : r
                ? [o, r]
                : [o],
            });
          }
          let S = BigInt(
            await b({ block: N, request: k, rpcStateOverride: A })
          );
          if (i) {
            let t = await (0, d.getBalance)(e, { address: k.from }),
              n = await Promise.all(
                i.map(async (e) => {
                  let { address: n } = e,
                    r = await b({
                      block: N,
                      request: {
                        authorizationList: void 0,
                        data: E,
                        from: null == m ? void 0 : m.address,
                        to: n,
                        value: (0, o.numberToHex)(t),
                      },
                      rpcStateOverride: A,
                    }).catch(() => 100000n);
                  return 2n * BigInt(r);
                })
              );
            S += n.reduce((e, t) => e + t, 0n);
          }
          return S;
        } catch (t) {
          throw (0, i.getEstimateGasError)(t, {
            ...h,
            account: m,
            chain: e.chain,
          });
        }
      }
    },
    412544: [
      (e) => {
        "use strict";
        e.s({ getTransactionCount: () => r }, 412544);
        var t = e.i(864198),
          n = e.i(994290);
        async function r(e, r) {
          let { address: o, blockTag: i = "latest", blockNumber: a } = r,
            s = await e.request(
              {
                method: "eth_getTransactionCount",
                params: [o, "bigint" == typeof a ? (0, n.numberToHex)(a) : i],
              },
              { dedupe: !!a }
            );
          return (0, t.hexToNumber)(s);
        }
        e.s({ blobsToCommitments: () => i }, 306825);
        var o = e.i(919717);
        function i(e) {
          var t;
          let { kzg: r } = e,
            i =
              null != (t = e.to)
                ? t
                : "string" == typeof e.blobs[0]
                ? "hex"
                : "bytes",
            a =
              "string" == typeof e.blobs[0]
                ? e.blobs.map((e) => (0, o.hexToBytes)(e))
                : e.blobs,
            s = [];
          for (let e of a) s.push(Uint8Array.from(r.blobToKzgCommitment(e)));
          return "bytes" === i ? s : s.map((e) => (0, n.bytesToHex)(e));
        }
        function a(e) {
          var t;
          let { kzg: r } = e,
            i =
              null != (t = e.to)
                ? t
                : "string" == typeof e.blobs[0]
                ? "hex"
                : "bytes",
            a =
              "string" == typeof e.blobs[0]
                ? e.blobs.map((e) => (0, o.hexToBytes)(e))
                : e.blobs,
            s =
              "string" == typeof e.commitments[0]
                ? e.commitments.map((e) => (0, o.hexToBytes)(e))
                : e.commitments,
            c = [];
          for (let e = 0; e < a.length; e++) {
            let t = a[e],
              n = s[e];
            c.push(Uint8Array.from(r.computeBlobKzgProof(t, n)));
          }
          return "bytes" === i ? c : c.map((e) => (0, n.bytesToHex)(e));
        }
        e.s({ blobsToProofs: () => a }, 724328),
          e.s({ commitmentsToVersionedHashes: () => d }, 36060),
          e.s({ commitmentToVersionedHash: () => l }, 581900),
          e.s({ sha256: () => u }, 271482);
        var s = e.i(404149),
          c = e.i(212629);
        function u(e, t) {
          let r = (0, s.sha256)(
            (0, c.isHex)(e, { strict: !1 }) ? (0, o.toBytes)(e) : e
          );
          return "bytes" === (t || "hex") ? r : (0, n.toHex)(r);
        }
        function l(e) {
          var t;
          let { commitment: r, version: o = 1 } = e,
            i = null != (t = e.to) ? t : "string" == typeof r ? "hex" : "bytes",
            a = u(r, "bytes");
          return a.set([o], 0), "bytes" === i ? a : (0, n.bytesToHex)(a);
        }
        function d(e) {
          var t;
          let { commitments: n, version: r } = e,
            o =
              null != (t = e.to)
                ? t
                : "string" == typeof n[0]
                ? "hex"
                : "bytes",
            i = [];
          for (let e of n) i.push(l({ commitment: e, to: o, version: r }));
          return i;
        }
        e.s({ toBlobSidecars: () => x }, 204834),
          e.s({ toBlobs: () => y }, 230464);
        e.s(
          {
            BlobSizeTooLargeError: () => m,
            EmptyBlobError: () => f,
            InvalidVersionedHashSizeError: () => g,
            InvalidVersionedHashVersionError: () => v,
          },
          351149
        ),
          e.s({ versionedHashVersionKzg: () => h }, 527059);
        let h = 1;
        var p = e.i(500780);
        class m extends p.BaseError {
          constructor({ maxSize: e, size: t }) {
            super("Blob size is too large.", {
              metaMessages: [
                "Max: ".concat(e, " bytes"),
                "Given: ".concat(t, " bytes"),
              ],
              name: "BlobSizeTooLargeError",
            });
          }
        }
        class f extends p.BaseError {
          constructor() {
            super("Blob data must not be empty.", { name: "EmptyBlobError" });
          }
        }
        class g extends p.BaseError {
          constructor({ hash: e, size: t }) {
            super('Versioned hash "'.concat(e, '" size is invalid.'), {
              metaMessages: ["Expected: 32", "Received: ".concat(t)],
              name: "InvalidVersionedHashSizeError",
            });
          }
        }
        class v extends p.BaseError {
          constructor({ hash: e, version: t }) {
            super('Versioned hash "'.concat(e, '" version is invalid.'), {
              metaMessages: ["Expected: ".concat(h), "Received: ".concat(t)],
              name: "InvalidVersionedHashVersionError",
            });
          }
        }
        var b = e.i(840891),
          w = e.i(265288);
        function y(e) {
          var t;
          let r =
              null != (t = e.to)
                ? t
                : "string" == typeof e.data
                ? "hex"
                : "bytes",
            i = "string" == typeof e.data ? (0, o.hexToBytes)(e.data) : e.data,
            a = (0, w.size)(i);
          if (!a) throw new f();
          if (a > 761855) throw new m({ maxSize: 761855, size: a });
          let s = [],
            c = !0,
            u = 0;
          for (; c; ) {
            let e = (0, b.createCursor)(new Uint8Array(131072)),
              t = 0;
            for (; t < 4096; ) {
              let n = i.slice(u, u + 31);
              if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                e.pushByte(128), (c = !1);
                break;
              }
              t++, (u += 31);
            }
            s.push(e);
          }
          return "bytes" === r
            ? s.map((e) => e.bytes)
            : s.map((e) => (0, n.bytesToHex)(e.bytes));
        }
        function x(e) {
          var t, n, r;
          let { data: o, kzg: s, to: c } = e,
            u = null != (t = e.blobs) ? t : y({ data: o, to: c }),
            l =
              null != (n = e.commitments) ? n : i({ blobs: u, kzg: s, to: c }),
            d =
              null != (r = e.proofs)
                ? r
                : a({ blobs: u, commitments: l, kzg: s, to: c }),
            h = [];
          for (let e = 0; e < u.length; e++)
            h.push({ blob: u[e], commitment: l[e], proof: d[e] });
          return h;
        }
        e.s({ getTransactionType: () => P }, 16632);
        var E = e.i(658213);
        function P(e) {
          if (e.type) return e.type;
          if (void 0 !== e.authorizationList) return "eip7702";
          if (
            void 0 !== e.blobs ||
            void 0 !== e.blobVersionedHashes ||
            void 0 !== e.maxFeePerBlobGas ||
            void 0 !== e.sidecars
          )
            return "eip4844";
          if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
            return "eip1559";
          if (void 0 !== e.gasPrice)
            return void 0 !== e.accessList ? "eip2930" : "legacy";
          throw new E.InvalidSerializableTransactionError({ transaction: e });
        }
      },
      [
        306825, 724328, 271482, 581900, 36060, 527059, 351149, 230464, 204834,
        16632,
      ],
    ],
    262267: (e) => {
      "use strict";
      e.s({ getChainId: () => n });
      var t = e.i(864198);
      async function n(e) {
        let n = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, t.hexToNumber)(n);
      }
    },
    936154: (e) => {
      "use strict";
      e.s({ defaultParameters: () => f, prepareTransactionRequest: () => v });
      var t = e.i(326875),
        n = e.i(710456),
        r = e.i(595828),
        o = e.i(508914),
        i = e.i(412544),
        a = e.i(758292),
        s = e.i(306825),
        c = e.i(724328),
        u = e.i(36060),
        l = e.i(204834),
        d = e.i(477379),
        h = e.i(385070),
        p = e.i(16632),
        m = e.i(262267);
      let f = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        g = new Map();
      async function v(e, v) {
        let b,
          w,
          {
            account: y = e.account,
            blobs: x,
            chain: E,
            gas: P,
            kzg: T,
            nonce: I,
            nonceManager: B,
            parameters: R = f,
            type: F,
          } = v,
          C = y ? (0, t.parseAccount)(y) : y,
          G = { ...v, ...(C ? { from: null == C ? void 0 : C.address } : {}) };
        async function U() {
          return (
            b ||
            (b = await (0, d.getAction)(
              e,
              o.getBlock,
              "getBlock"
            )({ blockTag: "latest" }))
          );
        }
        async function N() {
          return (
            w ||
            (E
              ? E.id
              : void 0 !== v.chainId
              ? v.chainId
              : (w = await (0, d.getAction)(e, m.getChainId, "getChainId")({})))
          );
        }
        if (R.includes("nonce") && void 0 === I && C)
          if (B) {
            let t = await N();
            G.nonce = await B.consume({
              address: C.address,
              chainId: t,
              client: e,
            });
          } else
            G.nonce = await (0, d.getAction)(
              e,
              i.getTransactionCount,
              "getTransactionCount"
            )({ address: C.address, blockTag: "pending" });
        if (
          (R.includes("blobVersionedHashes") || R.includes("sidecars")) &&
          x &&
          T
        ) {
          let e = (0, s.blobsToCommitments)({ blobs: x, kzg: T });
          if (
            (R.includes("blobVersionedHashes") &&
              (G.blobVersionedHashes = (0, u.commitmentsToVersionedHashes)({
                commitments: e,
                to: "hex",
              })),
            R.includes("sidecars"))
          ) {
            let t = (0, c.blobsToProofs)({ blobs: x, commitments: e, kzg: T });
            G.sidecars = (0, l.toBlobSidecars)({
              blobs: x,
              commitments: e,
              proofs: t,
              to: "hex",
            });
          }
        }
        if (
          (R.includes("chainId") && (G.chainId = await N()),
          (R.includes("fees") || R.includes("type")) && void 0 === F)
        )
          try {
            G.type = (0, p.getTransactionType)(G);
          } catch (n) {
            let t = g.get(e.uid);
            if (void 0 === t) {
              let n = await U();
              (t = "bigint" == typeof (null == n ? void 0 : n.baseFeePerGas)),
                g.set(e.uid, t);
            }
            G.type = t ? "eip1559" : "legacy";
          }
        if (R.includes("fees"))
          if ("legacy" !== G.type && "eip2930" !== G.type) {
            if (
              void 0 === G.maxFeePerGas ||
              void 0 === G.maxPriorityFeePerGas
            ) {
              let t = await U(),
                { maxFeePerGas: r, maxPriorityFeePerGas: o } = await (0,
                n.internal_estimateFeesPerGas)(e, {
                  block: t,
                  chain: E,
                  request: G,
                });
              if (
                void 0 === v.maxPriorityFeePerGas &&
                v.maxFeePerGas &&
                v.maxFeePerGas < o
              )
                throw new a.MaxFeePerGasTooLowError({
                  maxPriorityFeePerGas: o,
                });
              (G.maxPriorityFeePerGas = o), (G.maxFeePerGas = r);
            }
          } else {
            if (void 0 !== v.maxFeePerGas || void 0 !== v.maxPriorityFeePerGas)
              throw new a.Eip1559FeesNotSupportedError();
            if (void 0 === v.gasPrice) {
              let t = await U(),
                { gasPrice: r } = await (0, n.internal_estimateFeesPerGas)(e, {
                  block: t,
                  chain: E,
                  request: G,
                  type: "legacy",
                });
              G.gasPrice = r;
            }
          }
        return (
          R.includes("gas") &&
            void 0 === P &&
            (G.gas = await (0, d.getAction)(
              e,
              r.estimateGas,
              "estimateGas"
            )({
              ...G,
              account: C ? { address: C.address, type: "json-rpc" } : C,
            })),
          (0, h.assertRequest)(G),
          delete G.parameters,
          G
        );
      }
    },
    31876: (e) => {
      "use strict";
      e.s({
        AccountNotFoundError: () => n,
        AccountTypeNotSupportedError: () => r,
      });
      var t = e.i(500780);
      class n extends t.BaseError {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class r extends t.BaseError {
        constructor({ docsPath: e, metaMessages: t, type: n }) {
          super('Account type "'.concat(n, '" is not supported.'), {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    357868: (e) => {
      "use strict";
      e.s({ assertCurrentChain: () => n });
      var t = e.i(710546);
      function n(e) {
        let { chain: n, currentChainId: r } = e;
        if (!n) throw new t.ChainNotFoundError();
        if (r !== n.id)
          throw new t.ChainMismatchError({ chain: n, currentChainId: r });
      }
    },
    753315: (e) => {
      "use strict";
      e.s({ getTransactionError: () => o });
      var t = e.i(434076),
        n = e.i(658213),
        r = e.i(334554);
      function o(e, o) {
        let { docsPath: i, ...a } = o,
          s = (() => {
            let n = (0, r.getNodeError)(e, a);
            return n instanceof t.UnknownNodeError ? e : n;
          })();
        return new n.TransactionExecutionError(s, { docsPath: i, ...a });
      }
    },
    229383: (e) => {
      "use strict";
      async function t(e, t) {
        let { serializedTransaction: n } = t;
        return e.request(
          { method: "eth_sendRawTransaction", params: [n] },
          { retryCount: 0 }
        );
      }
      e.s({ sendRawTransaction: () => t });
    },
    913948: (e) => {
      "use strict";
      e.s({ sendTransaction: () => g });
      var t = e.i(326875),
        n = e.i(31876),
        r = e.i(500780),
        o = e.i(605956),
        i = e.i(357868),
        a = e.i(753315),
        s = e.i(712808),
        c = e.i(494316),
        u = e.i(477379),
        l = e.i(230755),
        d = e.i(385070),
        h = e.i(262267),
        p = e.i(936154),
        m = e.i(229383);
      let f = new l.LruMap(128);
      async function g(e, l) {
        let {
          account: g = e.account,
          chain: v = e.chain,
          accessList: b,
          authorizationList: w,
          blobs: y,
          data: x,
          gas: E,
          gasPrice: P,
          maxFeePerBlobGas: T,
          maxFeePerGas: I,
          maxPriorityFeePerGas: B,
          nonce: R,
          type: F,
          value: C,
          ...G
        } = l;
        if (void 0 === g)
          throw new n.AccountNotFoundError({
            docsPath: "/docs/actions/wallet/sendTransaction",
          });
        let U = g ? (0, t.parseAccount)(g) : null;
        try {
          var N, A, H, M;
          (0, d.assertRequest)(l);
          let t = await (async () =>
            l.to
              ? l.to
              : null !== l.to && w && w.length > 0
              ? await (0, o.recoverAuthorizationAddress)({
                  authorization: w[0],
                }).catch(() => {
                  throw new r.BaseError(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if ((null == U ? void 0 : U.type) === "json-rpc" || null === U) {
            let n;
            null !== v &&
              ((n = await (0, u.getAction)(e, h.getChainId, "getChainId")({})),
              (0, i.assertCurrentChain)({ currentChainId: n, chain: v }));
            let r =
                null == (H = e.chain) ||
                null == (A = H.formatters) ||
                null == (N = A.transactionRequest)
                  ? void 0
                  : N.format,
              o = (r || c.formatTransactionRequest)({
                ...(0, s.extract)(G, { format: r }),
                accessList: b,
                authorizationList: w,
                blobs: y,
                chainId: n,
                data: x,
                from: null == U ? void 0 : U.address,
                gas: E,
                gasPrice: P,
                maxFeePerBlobGas: T,
                maxFeePerGas: I,
                maxPriorityFeePerGas: B,
                nonce: R,
                to: t,
                type: F,
                value: C,
              }),
              a = f.get(e.uid);
            try {
              return await e.request(
                {
                  method: a ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [o],
                },
                { retryCount: 0 }
              );
            } catch (t) {
              if (!1 === a) throw t;
              if (
                "InvalidInputRpcError" === t.name ||
                "InvalidParamsRpcError" === t.name ||
                "MethodNotFoundRpcError" === t.name ||
                "MethodNotSupportedRpcError" === t.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [o] },
                    { retryCount: 0 }
                  )
                  .then((t) => (f.set(e.uid, !0), t))
                  .catch((n) => {
                    if (
                      "MethodNotFoundRpcError" === n.name ||
                      "MethodNotSupportedRpcError" === n.name
                    )
                      throw (f.set(e.uid, !1), t);
                    throw n;
                  });
              throw t;
            }
          }
          if ((null == U ? void 0 : U.type) === "local") {
            let n = await (0, u.getAction)(
                e,
                p.prepareTransactionRequest,
                "prepareTransactionRequest"
              )({
                account: U,
                accessList: b,
                authorizationList: w,
                blobs: y,
                chain: v,
                data: x,
                gas: E,
                gasPrice: P,
                maxFeePerBlobGas: T,
                maxFeePerGas: I,
                maxPriorityFeePerGas: B,
                nonce: R,
                nonceManager: U.nonceManager,
                parameters: [...p.defaultParameters, "sidecars"],
                type: F,
                value: C,
                ...G,
                to: t,
              }),
              r =
                null == v || null == (M = v.serializers)
                  ? void 0
                  : M.transaction,
              o = await U.signTransaction(n, { serializer: r });
            return await (0, u.getAction)(
              e,
              m.sendRawTransaction,
              "sendRawTransaction"
            )({ serializedTransaction: o });
          }
          if ((null == U ? void 0 : U.type) === "smart")
            throw new n.AccountTypeNotSupportedError({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new n.AccountTypeNotSupportedError({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: null == U ? void 0 : U.type,
          });
        } catch (e) {
          if (e instanceof n.AccountTypeNotSupportedError) throw e;
          throw (0, a.getTransactionError)(e, {
            ...l,
            account: U,
            chain: l.chain || void 0,
          });
        }
      }
    },
    324345: [
      (e) => {
        "use strict";
        e.s({ http: () => s }, 324345);
        var t = e.i(926777);
        e.s({ UrlRequiredError: () => r }, 200411);
        var n = e.i(500780);
        class r extends n.BaseError {
          constructor() {
            super(
              "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
              { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
            );
          }
        }
        var o = e.i(309697),
          i = e.i(506868),
          a = e.i(801938);
        function s(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              batch: s,
              fetchOptions: c,
              key: u = "http",
              methods: l,
              name: d = "HTTP JSON-RPC",
              onFetchRequest: h,
              onFetchResponse: p,
              retryDelay: m,
              raw: f,
            } = n;
          return (g) => {
            var v, b;
            let { chain: w, retryCount: y, timeout: x } = g,
              { batchSize: E = 1e3, wait: P = 0 } =
                "object" == typeof s ? s : {},
              T = null != (v = n.retryCount) ? v : y,
              I = null != (b = null != x ? x : n.timeout) ? b : 1e4,
              B = e || (null == w ? void 0 : w.rpcUrls.default.http[0]);
            if (!B) throw new r();
            let R = (0, i.getHttpRpcClient)(B, {
              fetchOptions: c,
              onRequest: h,
              onResponse: p,
              timeout: I,
            });
            return (0, a.createTransport)(
              {
                key: u,
                methods: l,
                name: d,
                async request(e) {
                  let { method: n, params: r } = e,
                    i = { method: n, params: r },
                    { schedule: a } = (0, o.createBatchScheduler)({
                      id: B,
                      wait: P,
                      shouldSplitBatch: (e) => e.length > E,
                      fn: (e) => R.request({ body: e }),
                      sort: (e, t) => e.id - t.id,
                    }),
                    c = async (e) =>
                      s ? a(e) : [await R.request({ body: e })],
                    [{ error: u, result: l }] = await c(i);
                  if (f) return { error: u, result: l };
                  if (u)
                    throw new t.RpcRequestError({ body: i, error: u, url: B });
                  return l;
                },
                retryCount: T,
                retryDelay: m,
                timeout: I,
                type: "http",
              },
              { fetchOptions: c, url: B }
            );
          };
        }
      },
      [200411],
    ],
    434076: [
      (e) => {
        "use strict";
        e.s(
          {
            ExecutionRevertedError: () => s,
            FeeCapTooHighError: () => c,
            FeeCapTooLowError: () => u,
            InsufficientFundsError: () => p,
            IntrinsicGasTooHighError: () => m,
            IntrinsicGasTooLowError: () => f,
            NonceMaxValueError: () => h,
            NonceTooHighError: () => l,
            NonceTooLowError: () => d,
            TipAboveFeeCapError: () => v,
            TransactionTypeNotSupportedError: () => g,
            UnknownNodeError: () => b,
          },
          434076
        ),
          e.s({ formatGwei: () => i }, 588732),
          e.s(
            { etherUnits: () => t, gweiUnits: () => n, weiUnits: () => r },
            468472
          );
        let t = { gwei: 9, wei: 18 },
          n = { ether: -9, wei: 9 },
          r = { ether: -18, gwei: -9 };
        var o = e.i(211410);
        function i(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "wei";
          return (0, o.formatUnits)(e, n[t]);
        }
        var a = e.i(500780);
        class s extends a.BaseError {
          constructor({ cause: e, message: t } = {}) {
            var n;
            let r =
              null == t || null == (n = t.replace("execution reverted: ", ""))
                ? void 0
                : n.replace("execution reverted", "");
            super(
              "Execution reverted ".concat(
                r ? "with reason: ".concat(r) : "for an unknown reason",
                "."
              ),
              { cause: e, name: "ExecutionRevertedError" }
            );
          }
        }
        Object.defineProperty(s, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
          Object.defineProperty(s, "nodeMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: /execution reverted/,
          });
        class c extends a.BaseError {
          constructor({ cause: e, maxFeePerGas: t } = {}) {
            super(
              "The fee cap (`maxFeePerGas`".concat(
                t ? " = ".concat(i(t), " gwei") : "",
                ") cannot be higher than the maximum allowed value (2^256-1)."
              ),
              { cause: e, name: "FeeCapTooHighError" }
            );
          }
        }
        Object.defineProperty(c, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
        });
        class u extends a.BaseError {
          constructor({ cause: e, maxFeePerGas: t } = {}) {
            super(
              "The fee cap (`maxFeePerGas`".concat(
                t ? " = ".concat(i(t)) : "",
                " gwei) cannot be lower than the block base fee."
              ),
              { cause: e, name: "FeeCapTooLowError" }
            );
          }
        }
        Object.defineProperty(u, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
        });
        class l extends a.BaseError {
          constructor({ cause: e, nonce: t } = {}) {
            super(
              "Nonce provided for the transaction ".concat(
                t ? "(".concat(t, ") ") : "",
                "is higher than the next one expected."
              ),
              { cause: e, name: "NonceTooHighError" }
            );
          }
        }
        Object.defineProperty(l, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /nonce too high/,
        });
        class d extends a.BaseError {
          constructor({ cause: e, nonce: t } = {}) {
            super(
              [
                "Nonce provided for the transaction ".concat(
                  t ? "(".concat(t, ") ") : "",
                  "is lower than the current nonce of the account."
                ),
                "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
              ].join("\n"),
              { cause: e, name: "NonceTooLowError" }
            );
          }
        }
        Object.defineProperty(d, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /nonce too low|transaction already imported|already known/,
        });
        class h extends a.BaseError {
          constructor({ cause: e, nonce: t } = {}) {
            super(
              "Nonce provided for the transaction ".concat(
                t ? "(".concat(t, ") ") : "",
                "exceeds the maximum allowed nonce."
              ),
              { cause: e, name: "NonceMaxValueError" }
            );
          }
        }
        Object.defineProperty(h, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /nonce has max value/,
        });
        class p extends a.BaseError {
          constructor({ cause: e } = {}) {
            super(
              "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
              {
                cause: e,
                metaMessages: [
                  "This error could arise when the account does not have enough funds to:",
                  " - pay for the total gas fee,",
                  " - pay for the value to send.",
                  " ",
                  "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                  " - `gas` is the amount of gas needed for transaction to execute,",
                  " - `gas fee` is the gas fee,",
                  " - `value` is the amount of ether to send to the recipient.",
                ],
                name: "InsufficientFundsError",
              }
            );
          }
        }
        Object.defineProperty(p, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /insufficient funds|exceeds transaction sender account balance/,
        });
        class m extends a.BaseError {
          constructor({ cause: e, gas: t } = {}) {
            super(
              "The amount of gas ".concat(
                t ? "(".concat(t, ") ") : "",
                "provided for the transaction exceeds the limit allowed for the block."
              ),
              { cause: e, name: "IntrinsicGasTooHighError" }
            );
          }
        }
        Object.defineProperty(m, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /intrinsic gas too high|gas limit reached/,
        });
        class f extends a.BaseError {
          constructor({ cause: e, gas: t } = {}) {
            super(
              "The amount of gas ".concat(
                t ? "(".concat(t, ") ") : "",
                "provided for the transaction is too low."
              ),
              { cause: e, name: "IntrinsicGasTooLowError" }
            );
          }
        }
        Object.defineProperty(f, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /intrinsic gas too low/,
        });
        class g extends a.BaseError {
          constructor({ cause: e }) {
            super("The transaction type is not supported for this chain.", {
              cause: e,
              name: "TransactionTypeNotSupportedError",
            });
          }
        }
        Object.defineProperty(g, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /transaction type not valid/,
        });
        class v extends a.BaseError {
          constructor({
            cause: e,
            maxPriorityFeePerGas: t,
            maxFeePerGas: n,
          } = {}) {
            super(
              [
                "The provided tip (`maxPriorityFeePerGas`"
                  .concat(
                    t ? " = ".concat(i(t), " gwei") : "",
                    ") cannot be higher than the fee cap (`maxFeePerGas`"
                  )
                  .concat(n ? " = ".concat(i(n), " gwei") : "", ")."),
              ].join("\n"),
              { cause: e, name: "TipAboveFeeCapError" }
            );
          }
        }
        Object.defineProperty(v, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
        });
        class b extends a.BaseError {
          constructor({ cause: e }) {
            super(
              "An error occurred while executing: ".concat(
                null == e ? void 0 : e.shortMessage
              ),
              { cause: e, name: "UnknownNodeError" }
            );
          }
        }
      },
      [468472, 588732],
    ],
    972670: (e) => {
      "use strict";
      async function t(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      e.s({ wait: () => t });
    },
    256759: (e) => {
      "use strict";
      e.s({ withDedupe: () => n });
      let t = new (e.i(230755).LruMap)(8192);
      function n(e, n) {
        let { enabled: r = !0, id: o } = n;
        if (!r || !o) return e();
        if (t.get(o)) return t.get(o);
        let i = e().finally(() => t.delete(o));
        return t.set(o, i), i;
      }
    },
    82428: (e) => {
      "use strict";
      e.s({ withRetry: () => n });
      var t = e.i(972670);
      function n(e) {
        let {
          delay: n = 100,
          retryCount: r = 2,
          shouldRetry: o = () => !0,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((i, a) => {
          let s = async function () {
            let { count: c = 0 } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              u = async (e) => {
                let { error: r } = e,
                  o = "function" == typeof n ? n({ count: c, error: r }) : n;
                o && (await (0, t.wait)(o)), s({ count: c + 1 });
              };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c < r && (await o({ count: c, error: e })))
                return u({ error: e });
              a(e);
            }
          };
          s();
        });
      }
    },
    485093: (e) => {
      "use strict";
      e.s({ buildRequest: () => c });
      var t = e.i(500780),
        n = e.i(926777),
        r = e.i(592677),
        o = e.i(994290),
        i = e.i(256759),
        a = e.i(82428),
        s = e.i(383478);
      function c(e) {
        let c =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return async function (u) {
          var l;
          let d =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              dedupe: h = !1,
              methods: p,
              retryDelay: m = 150,
              retryCount: f = 3,
              uid: g,
            } = { ...c, ...d },
            { method: v } = u;
          if (
            (null == p || null == (l = p.exclude) ? void 0 : l.includes(v)) ||
            ((null == p ? void 0 : p.include) && !p.include.includes(v))
          )
            throw new r.MethodNotSupportedRpcError(
              Error("method not supported"),
              { method: v }
            );
          let b = h
            ? (0, o.stringToHex)("".concat(g, ".").concat((0, s.stringify)(u)))
            : void 0;
          return (0, i.withDedupe)(
            () =>
              (0, a.withRetry)(
                async () => {
                  try {
                    return await e(u);
                  } catch (e) {
                    switch (e.code) {
                      case r.ParseRpcError.code:
                        throw new r.ParseRpcError(e);
                      case r.InvalidRequestRpcError.code:
                        throw new r.InvalidRequestRpcError(e);
                      case r.MethodNotFoundRpcError.code:
                        throw new r.MethodNotFoundRpcError(e, {
                          method: u.method,
                        });
                      case r.InvalidParamsRpcError.code:
                        throw new r.InvalidParamsRpcError(e);
                      case r.InternalRpcError.code:
                        throw new r.InternalRpcError(e);
                      case r.InvalidInputRpcError.code:
                        throw new r.InvalidInputRpcError(e);
                      case r.ResourceNotFoundRpcError.code:
                        throw new r.ResourceNotFoundRpcError(e);
                      case r.ResourceUnavailableRpcError.code:
                        throw new r.ResourceUnavailableRpcError(e);
                      case r.TransactionRejectedRpcError.code:
                        throw new r.TransactionRejectedRpcError(e);
                      case r.MethodNotSupportedRpcError.code:
                        throw new r.MethodNotSupportedRpcError(e, {
                          method: u.method,
                        });
                      case r.LimitExceededRpcError.code:
                        throw new r.LimitExceededRpcError(e);
                      case r.JsonRpcVersionUnsupportedError.code:
                        throw new r.JsonRpcVersionUnsupportedError(e);
                      case r.UserRejectedRequestError.code:
                        throw new r.UserRejectedRequestError(e);
                      case r.UnauthorizedProviderError.code:
                        throw new r.UnauthorizedProviderError(e);
                      case r.UnsupportedProviderMethodError.code:
                        throw new r.UnsupportedProviderMethodError(e);
                      case r.ProviderDisconnectedError.code:
                        throw new r.ProviderDisconnectedError(e);
                      case r.ChainDisconnectedError.code:
                        throw new r.ChainDisconnectedError(e);
                      case r.SwitchChainError.code:
                        throw new r.SwitchChainError(e);
                      case r.UnsupportedNonOptionalCapabilityError.code:
                        throw new r.UnsupportedNonOptionalCapabilityError(e);
                      case r.UnsupportedChainIdError.code:
                        throw new r.UnsupportedChainIdError(e);
                      case r.DuplicateIdError.code:
                        throw new r.DuplicateIdError(e);
                      case r.UnknownBundleIdError.code:
                        throw new r.UnknownBundleIdError(e);
                      case r.BundleTooLargeError.code:
                        throw new r.BundleTooLargeError(e);
                      case r.AtomicReadyWalletRejectedUpgradeError.code:
                        throw new r.AtomicReadyWalletRejectedUpgradeError(e);
                      case r.AtomicityNotSupportedError.code:
                        throw new r.AtomicityNotSupportedError(e);
                      case 5e3:
                        throw new r.UserRejectedRequestError(e);
                      default:
                        if (e instanceof t.BaseError) throw e;
                        throw new r.UnknownRpcError(e);
                    }
                  }
                },
                {
                  delay: (e) => {
                    let { count: t, error: r } = e;
                    if (r && r instanceof n.HttpRequestError) {
                      var o;
                      let e =
                        null == r || null == (o = r.headers)
                          ? void 0
                          : o.get("Retry-After");
                      if (null == e ? void 0 : e.match(/\d/))
                        return 1e3 * Number.parseInt(e);
                    }
                    return ~~(1 << t) * m;
                  },
                  retryCount: f,
                  shouldRetry: (e) => {
                    var t;
                    let { error: o } = e;
                    return "code" in (t = o) && "number" == typeof t.code
                      ? -1 === t.code ||
                          t.code === r.LimitExceededRpcError.code ||
                          t.code === r.InternalRpcError.code
                      : !(t instanceof n.HttpRequestError) ||
                          !t.status ||
                          403 === t.status ||
                          408 === t.status ||
                          413 === t.status ||
                          429 === t.status ||
                          500 === t.status ||
                          502 === t.status ||
                          503 === t.status ||
                          504 === t.status ||
                          !1;
                  },
                }
              ),
            { enabled: h, id: b }
          );
        };
      }
    },
    505642: (e) => {
      "use strict";
      let t;
      e.s({ uid: () => r });
      let n = 256;
      function r() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 11;
        if (!t || n + e > 512) {
          (t = ""), (n = 0);
          for (let e = 0; e < 256; e++)
            t += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return t.substring(n, n++ + e);
      }
    },
    801938: (e) => {
      "use strict";
      e.s({ createTransport: () => r });
      var t = e.i(485093),
        n = e.i(505642);
      function r(e, r) {
        let {
            key: o,
            methods: i,
            name: a,
            request: s,
            retryCount: c = 3,
            retryDelay: u = 150,
            timeout: l,
            type: d,
          } = e,
          h = (0, n.uid)();
        return {
          config: {
            key: o,
            methods: i,
            name: a,
            request: s,
            retryCount: c,
            retryDelay: u,
            timeout: l,
            type: d,
          },
          request: (0, t.buildRequest)(s, {
            methods: i,
            retryCount: c,
            retryDelay: u,
            uid: h,
          }),
          value: r,
        };
      }
    },
    656722: (e) => {
      "use strict";
      function t(e, t) {
        let {
          errorInstance: n = Error("timed out"),
          timeout: r,
          signal: o,
        } = t;
        return new Promise((t, i) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              r > 0 &&
                (a = setTimeout(() => {
                  o ? s.abort() : i(n);
                }, r)),
                t(await e({ signal: (null == s ? void 0 : s.signal) || null }));
            } catch (e) {
              (null == e ? void 0 : e.name) === "AbortError" && i(n), i(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      e.s({ withTimeout: () => t });
    },
    506868: [
      (e) => {
        "use strict";
        e.s({ getHttpRpcClient: () => i }, 506868);
        var t = e.i(926777),
          n = e.i(656722),
          r = e.i(383478);
        e.s({ idCache: () => o }, 361703);
        let o = {
          current: 0,
          take() {
            return this.current++;
          },
          reset() {
            this.current = 0;
          },
        };
        function i(e) {
          let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            async request(a) {
              var s, c, u, l;
              let {
                  body: d,
                  onRequest: h = i.onRequest,
                  onResponse: p = i.onResponse,
                  timeout: m = null != (s = i.timeout) ? s : 1e4,
                } = a,
                f = {
                  ...(null != (c = i.fetchOptions) ? c : {}),
                  ...(null != (u = a.fetchOptions) ? u : {}),
                },
                { headers: g, method: v, signal: b } = f;
              try {
                let i,
                  a = await (0, n.withTimeout)(
                    async (t) => {
                      var n, i, a;
                      let { signal: s } = t,
                        c = {
                          ...f,
                          body: Array.isArray(d)
                            ? (0, r.stringify)(
                                d.map((e) => {
                                  var t;
                                  return {
                                    jsonrpc: "2.0",
                                    id: null != (t = e.id) ? t : o.take(),
                                    ...e,
                                  };
                                })
                              )
                            : (0, r.stringify)({
                                jsonrpc: "2.0",
                                id: null != (n = d.id) ? n : o.take(),
                                ...d,
                              }),
                          headers: { "Content-Type": "application/json", ...g },
                          method: v || "POST",
                          signal: b || (m > 0 ? s : null),
                        },
                        u = new Request(e, c),
                        l =
                          null != (i = await (null == h ? void 0 : h(u, c)))
                            ? i
                            : { ...c, url: e };
                      return await fetch(null != (a = l.url) ? a : e, l);
                    },
                    {
                      errorInstance: new t.TimeoutError({ body: d, url: e }),
                      timeout: m,
                      signal: !0,
                    }
                  );
                if (
                  (p && (await p(a)),
                  null == (l = a.headers.get("Content-Type"))
                    ? void 0
                    : l.startsWith("application/json"))
                )
                  i = await a.json();
                else {
                  i = await a.text();
                  try {
                    i = JSON.parse(i || "{}");
                  } catch (e) {
                    if (a.ok) throw e;
                    i = { error: i };
                  }
                }
                if (!a.ok)
                  throw new t.HttpRequestError({
                    body: d,
                    details: (0, r.stringify)(i.error) || a.statusText,
                    headers: a.headers,
                    status: a.status,
                    url: e,
                  });
                return i;
              } catch (n) {
                if (
                  n instanceof t.HttpRequestError ||
                  n instanceof t.TimeoutError
                )
                  throw n;
                throw new t.HttpRequestError({ body: d, cause: n, url: e });
              }
            },
          };
        }
      },
      [361703],
    ],
    989915: (e) => {
      "use strict";
      function t(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      e.s({ defineChain: () => t });
    },
    115481: (e) => {
      "use strict";
      function t(e) {
        return "string" == typeof e[0] ? r(e) : n(e);
      }
      function n(e) {
        let t = 0;
        for (let n of e) t += n.length;
        let n = new Uint8Array(t),
          r = 0;
        for (let t of e) n.set(t, r), (r += t.length);
        return n;
      }
      function r(e) {
        return "0x".concat(e.reduce((e, t) => e + t.replace("0x", ""), ""));
      }
      e.s({ concat: () => t, concatBytes: () => n, concatHex: () => r });
    },
    326875: (e) => {
      "use strict";
      function t(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
      e.s({ parseAccount: () => t });
    },
    840891: [
      (e) => {
        "use strict";
        e.s({ createCursor: () => a }, 840891),
          e.s(
            {
              NegativeOffsetError: () => n,
              PositionOutOfBoundsError: () => r,
              RecursiveReadLimitExceededError: () => o,
            },
            269832
          );
        var t = e.i(500780);
        class n extends t.BaseError {
          constructor({ offset: e }) {
            super("Offset `".concat(e, "` cannot be negative."), {
              name: "NegativeOffsetError",
            });
          }
        }
        class r extends t.BaseError {
          constructor({ length: e, position: t }) {
            super(
              "Position `"
                .concat(t, "` is out of bounds (`0 < position < ")
                .concat(e, "`)."),
              { name: "PositionOutOfBoundsError" }
            );
          }
        }
        class o extends t.BaseError {
          constructor({ count: e, limit: t }) {
            super(
              "Recursive read limit of `"
                .concat(t, "` exceeded (recursive read count: `")
                .concat(e, "`)."),
              { name: "RecursiveReadLimitExceededError" }
            );
          }
        }
        let i = {
          bytes: new Uint8Array(),
          dataView: new DataView(new ArrayBuffer(0)),
          position: 0,
          positionReadCount: new Map(),
          recursiveReadCount: 0,
          recursiveReadLimit: 1 / 0,
          assertReadLimit() {
            if (this.recursiveReadCount >= this.recursiveReadLimit)
              throw new o({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit,
              });
          },
          assertPosition(e) {
            if (e < 0 || e > this.bytes.length - 1)
              throw new r({ length: this.bytes.length, position: e });
          },
          decrementPosition(e) {
            if (e < 0) throw new n({ offset: e });
            let t = this.position - e;
            this.assertPosition(t), (this.position = t);
          },
          getReadCount(e) {
            return this.positionReadCount.get(e || this.position) || 0;
          },
          incrementPosition(e) {
            if (e < 0) throw new n({ offset: e });
            let t = this.position + e;
            this.assertPosition(t), (this.position = t);
          },
          inspectByte(e) {
            let t = null != e ? e : this.position;
            return this.assertPosition(t), this.bytes[t];
          },
          inspectBytes(e, t) {
            let n = null != t ? t : this.position;
            return (
              this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
            );
          },
          inspectUint8(e) {
            let t = null != e ? e : this.position;
            return this.assertPosition(t), this.bytes[t];
          },
          inspectUint16(e) {
            let t = null != e ? e : this.position;
            return this.assertPosition(t + 1), this.dataView.getUint16(t);
          },
          inspectUint24(e) {
            let t = null != e ? e : this.position;
            return (
              this.assertPosition(t + 2),
              (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
            );
          },
          inspectUint32(e) {
            let t = null != e ? e : this.position;
            return this.assertPosition(t + 3), this.dataView.getUint32(t);
          },
          pushByte(e) {
            this.assertPosition(this.position),
              (this.bytes[this.position] = e),
              this.position++;
          },
          pushBytes(e) {
            this.assertPosition(this.position + e.length - 1),
              this.bytes.set(e, this.position),
              (this.position += e.length);
          },
          pushUint8(e) {
            this.assertPosition(this.position),
              (this.bytes[this.position] = e),
              this.position++;
          },
          pushUint16(e) {
            this.assertPosition(this.position + 1),
              this.dataView.setUint16(this.position, e),
              (this.position += 2);
          },
          pushUint24(e) {
            this.assertPosition(this.position + 2),
              this.dataView.setUint16(this.position, e >> 8),
              this.dataView.setUint8(this.position + 2, 255 & e),
              (this.position += 3);
          },
          pushUint32(e) {
            this.assertPosition(this.position + 3),
              this.dataView.setUint32(this.position, e),
              (this.position += 4);
          },
          readByte() {
            this.assertReadLimit(), this._touch();
            let e = this.inspectByte();
            return this.position++, e;
          },
          readBytes(e, t) {
            this.assertReadLimit(), this._touch();
            let n = this.inspectBytes(e);
            return (this.position += null != t ? t : e), n;
          },
          readUint8() {
            this.assertReadLimit(), this._touch();
            let e = this.inspectUint8();
            return (this.position += 1), e;
          },
          readUint16() {
            this.assertReadLimit(), this._touch();
            let e = this.inspectUint16();
            return (this.position += 2), e;
          },
          readUint24() {
            this.assertReadLimit(), this._touch();
            let e = this.inspectUint24();
            return (this.position += 3), e;
          },
          readUint32() {
            this.assertReadLimit(), this._touch();
            let e = this.inspectUint32();
            return (this.position += 4), e;
          },
          get remaining() {
            return this.bytes.length - this.position;
          },
          setPosition(e) {
            let t = this.position;
            return (
              this.assertPosition(e),
              (this.position = e),
              () => (this.position = t)
            );
          },
          _touch() {
            if (this.recursiveReadLimit === 1 / 0) return;
            let e = this.getReadCount();
            this.positionReadCount.set(this.position, e + 1),
              e > 0 && this.recursiveReadCount++;
          },
        };
        function a(e) {
          let { recursiveReadLimit: t = 8192 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = Object.create(i);
          return (
            (n.bytes = e),
            (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
            (n.positionReadCount = new Map()),
            (n.recursiveReadLimit = t),
            n
          );
        }
      },
      [269832],
    ],
    817008: (e) => {
      "use strict";
      e.s({ formatEther: () => r });
      var t = e.i(468472),
        n = e.i(211410);
      function r(e) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wei";
        return (0, n.formatUnits)(e, t.etherUnits[r]);
      }
    },
    663376: (e) => {
      "use strict";
      e.s({
        AccountStateConflictError: () => n,
        StateAssignmentConflictError: () => r,
        prettyStateOverride: () => i,
      });
      var t = e.i(500780);
      class n extends t.BaseError {
        constructor({ address: e }) {
          super('State for account "'.concat(e, '" is set multiple times.'), {
            name: "AccountStateConflictError",
          });
        }
      }
      class r extends t.BaseError {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function o(e) {
        return e.reduce((e, t) => {
          let { slot: n, value: r } = t;
          return "".concat(e, "        ").concat(n, ": ").concat(r, "\n");
        }, "");
      }
      function i(e) {
        return e
          .reduce((e, t) => {
            let { address: n, ...r } = t,
              i = "".concat(e, "    ").concat(n, ":\n");
            return (
              r.nonce && (i += "      nonce: ".concat(r.nonce, "\n")),
              r.balance && (i += "      balance: ".concat(r.balance, "\n")),
              r.code && (i += "      code: ".concat(r.code, "\n")),
              r.state && ((i += "      state:\n"), (i += o(r.state))),
              r.stateDiff &&
                ((i += "      stateDiff:\n"), (i += o(r.stateDiff))),
              i
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    658213: (e) => {
      "use strict";
      e.s({
        FeeConflictError: () => i,
        InvalidLegacyVError: () => a,
        InvalidSerializableTransactionError: () => s,
        InvalidSerializedTransactionError: () => u,
        InvalidSerializedTransactionTypeError: () => c,
        InvalidStorageKeySizeError: () => l,
        TransactionExecutionError: () => d,
        TransactionNotFoundError: () => h,
        TransactionReceiptNotFoundError: () => p,
        WaitForTransactionReceiptTimeoutError: () => m,
        prettyPrint: () => o,
      });
      var t = e.i(817008),
        n = e.i(588732),
        r = e.i(500780);
      function o(e) {
        let t = Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return void 0 === n || !1 === n ? null : [t, n];
            })
            .filter(Boolean),
          n = t.reduce((e, t) => {
            let [n] = t;
            return Math.max(e, n.length);
          }, 0);
        return t
          .map((e) => {
            let [t, r] = e;
            return "  ".concat("".concat(t, ":").padEnd(n + 1), "  ").concat(r);
          })
          .join("\n");
      }
      class i extends r.BaseError {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      class a extends r.BaseError {
        constructor({ v: e }) {
          super('Invalid `v` value "'.concat(e, '". Expected 27 or 28.'), {
            name: "InvalidLegacyVError",
          });
        }
      }
      class s extends r.BaseError {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              o(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class c extends r.BaseError {
        constructor({ serializedType: e }) {
          super('Serialized transaction type "'.concat(e, '" is invalid.'), {
            name: "InvalidSerializedTransactionType",
          }),
            Object.defineProperty(this, "serializedType", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.serializedType = e);
        }
      }
      class u extends r.BaseError {
        constructor({ attributes: e, serializedTransaction: t, type: n }) {
          let r = Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return void 0 === n ? t : void 0;
            })
            .filter(Boolean);
          super(
            'Invalid serialized transaction of type "'.concat(
              n,
              '" was provided.'
            ),
            {
              metaMessages: [
                'Serialized Transaction: "'.concat(t, '"'),
                r.length > 0 ? "Missing Attributes: ".concat(r.join(", ")) : "",
              ].filter(Boolean),
              name: "InvalidSerializedTransactionError",
            }
          ),
            Object.defineProperty(this, "serializedTransaction", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "type", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.serializedTransaction = t),
            (this.type = n);
        }
      }
      class l extends r.BaseError {
        constructor({ storageKey: e }) {
          super(
            'Size for storage key "'
              .concat(e, '" is invalid. Expected 32 bytes. Got ')
              .concat(Math.floor((e.length - 2) / 2), " bytes."),
            { name: "InvalidStorageKeySizeError" }
          );
        }
      }
      class d extends r.BaseError {
        constructor(
          e,
          {
            account: r,
            docsPath: i,
            chain: a,
            data: s,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: p,
            value: m,
          }
        ) {
          var f;
          super(e.shortMessage, {
            cause: e,
            docsPath: i,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              o({
                chain:
                  a &&
                  ""
                    .concat(null == a ? void 0 : a.name, " (id: ")
                    .concat(null == a ? void 0 : a.id, ")"),
                from: null == r ? void 0 : r.address,
                to: p,
                value:
                  void 0 !== m &&
                  ""
                    .concat((0, t.formatEther)(m), " ")
                    .concat(
                      (null == a || null == (f = a.nativeCurrency)
                        ? void 0
                        : f.symbol) || "ETH"
                    ),
                data: s,
                gas: c,
                gasPrice:
                  void 0 !== u && "".concat((0, n.formatGwei)(u), " gwei"),
                maxFeePerGas:
                  void 0 !== l && "".concat((0, n.formatGwei)(l), " gwei"),
                maxPriorityFeePerGas:
                  void 0 !== d && "".concat((0, n.formatGwei)(d), " gwei"),
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
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
      class h extends r.BaseError {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: o,
        }) {
          let i = "Transaction";
          n &&
            void 0 !== o &&
            (i = 'Transaction at block time "'
              .concat(n, '" at index "')
              .concat(o, '"')),
            e &&
              void 0 !== o &&
              (i = 'Transaction at block hash "'
                .concat(e, '" at index "')
                .concat(o, '"')),
            t &&
              void 0 !== o &&
              (i = 'Transaction at block number "'
                .concat(t, '" at index "')
                .concat(o, '"')),
            r && (i = 'Transaction with hash "'.concat(r, '"')),
            super("".concat(i, " could not be found."), {
              name: "TransactionNotFoundError",
            });
        }
      }
      class p extends r.BaseError {
        constructor({ hash: e }) {
          super(
            'Transaction receipt with hash "'.concat(
              e,
              '" could not be found. The Transaction may not be processed on a block yet.'
            ),
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class m extends r.BaseError {
        constructor({ hash: e }) {
          super(
            'Timed out while waiting for transaction with hash "'.concat(
              e,
              '" to be confirmed.'
            ),
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    710546: (e) => {
      "use strict";
      e.s({
        ChainDoesNotSupportContract: () => n,
        ChainMismatchError: () => r,
        ChainNotFoundError: () => o,
        ClientChainNotConfiguredError: () => i,
        InvalidChainIdError: () => a,
      });
      var t = e.i(500780);
      class n extends t.BaseError {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(
            'Chain "'
              .concat(t.name, '" does not support contract "')
              .concat(n.name, '".'),
            {
              metaMessages: [
                "This could be due to any of the following:",
                ...(e && n.blockCreated && n.blockCreated > e
                  ? [
                      '- The contract "'
                        .concat(n.name, '" was not deployed until block ')
                        .concat(n.blockCreated, " (current block ")
                        .concat(e, ")."),
                    ]
                  : [
                      '- The chain does not have the contract "'.concat(
                        n.name,
                        '" configured.'
                      ),
                    ]),
              ],
              name: "ChainDoesNotSupportContract",
            }
          );
        }
      }
      class r extends t.BaseError {
        constructor({ chain: e, currentChainId: t }) {
          super(
            "The current chain of the wallet (id: "
              .concat(
                t,
                ") does not match the target chain for the transaction (id: "
              )
              .concat(e.id, " – ")
              .concat(e.name, ")."),
            {
              metaMessages: [
                "Current Chain ID:  ".concat(t),
                "Expected Chain ID: ".concat(e.id, " – ").concat(e.name),
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class o extends t.BaseError {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class i extends t.BaseError {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      class a extends t.BaseError {
        constructor({ chainId: e }) {
          super(
            "number" == typeof e
              ? 'Chain ID "'.concat(e, '" is invalid.')
              : "Chain ID is invalid.",
            { name: "InvalidChainIdError" }
          );
        }
      }
    },
    334554: [
      (e) => {
        "use strict";
        e.s({ getNodeError: () => r }, 334554);
        var t = e.i(500780),
          n = e.i(434076);
        function r(e, r) {
          let o = (e.details || "").toLowerCase(),
            i =
              e instanceof t.BaseError
                ? e.walk(
                    (e) =>
                      (null == e ? void 0 : e.code) ===
                      n.ExecutionRevertedError.code
                  )
                : e;
          return i instanceof t.BaseError
            ? new n.ExecutionRevertedError({ cause: e, message: i.details })
            : n.ExecutionRevertedError.nodeMessage.test(o)
            ? new n.ExecutionRevertedError({ cause: e, message: e.details })
            : n.FeeCapTooHighError.nodeMessage.test(o)
            ? new n.FeeCapTooHighError({
                cause: e,
                maxFeePerGas: null == r ? void 0 : r.maxFeePerGas,
              })
            : n.FeeCapTooLowError.nodeMessage.test(o)
            ? new n.FeeCapTooLowError({
                cause: e,
                maxFeePerGas: null == r ? void 0 : r.maxFeePerGas,
              })
            : n.NonceTooHighError.nodeMessage.test(o)
            ? new n.NonceTooHighError({
                cause: e,
                nonce: null == r ? void 0 : r.nonce,
              })
            : n.NonceTooLowError.nodeMessage.test(o)
            ? new n.NonceTooLowError({
                cause: e,
                nonce: null == r ? void 0 : r.nonce,
              })
            : n.NonceMaxValueError.nodeMessage.test(o)
            ? new n.NonceMaxValueError({
                cause: e,
                nonce: null == r ? void 0 : r.nonce,
              })
            : n.InsufficientFundsError.nodeMessage.test(o)
            ? new n.InsufficientFundsError({ cause: e })
            : n.IntrinsicGasTooHighError.nodeMessage.test(o)
            ? new n.IntrinsicGasTooHighError({
                cause: e,
                gas: null == r ? void 0 : r.gas,
              })
            : n.IntrinsicGasTooLowError.nodeMessage.test(o)
            ? new n.IntrinsicGasTooLowError({
                cause: e,
                gas: null == r ? void 0 : r.gas,
              })
            : n.TransactionTypeNotSupportedError.nodeMessage.test(o)
            ? new n.TransactionTypeNotSupportedError({ cause: e })
            : n.TipAboveFeeCapError.nodeMessage.test(o)
            ? new n.TipAboveFeeCapError({
                cause: e,
                maxFeePerGas: null == r ? void 0 : r.maxFeePerGas,
                maxPriorityFeePerGas:
                  null == r ? void 0 : r.maxPriorityFeePerGas,
              })
            : new n.UnknownNodeError({ cause: e });
        }
        function o(e, t) {
          let { format: n } = t;
          if (!n) return {};
          let r = {};
          return (
            !(function t(n) {
              for (let o of Object.keys(n))
                o in e && (r[o] = e[o]),
                  n[o] &&
                    "object" == typeof n[o] &&
                    !Array.isArray(n[o]) &&
                    t(n[o]);
            })(n(e || {})),
            r
          );
        }
        e.i(926777),
          e.i(592677),
          e.s({ extract: () => o }, 712808),
          e.s(
            {
              defineTransactionRequest: () => u,
              formatTransactionRequest: () => c,
              rpcTransactionType: () => s,
            },
            494316
          );
        var i = e.i(994290);
        function a(e, t) {
          return (n) => {
            let { exclude: r, format: o } = n;
            return {
              exclude: r,
              format: (e) => {
                let n = t(e);
                if (r) for (let e of r) delete n[e];
                return { ...n, ...o(e) };
              },
              type: e,
            };
          };
        }
        e.s({ defineFormatter: () => a }, 771770);
        let s = {
          legacy: "0x0",
          eip2930: "0x1",
          eip1559: "0x2",
          eip4844: "0x3",
          eip7702: "0x4",
        };
        function c(e) {
          let t = {};
          return (
            void 0 !== e.authorizationList &&
              (t.authorizationList = e.authorizationList.map((e) => ({
                address: e.address,
                r: e.r ? (0, i.numberToHex)(BigInt(e.r)) : e.r,
                s: e.s ? (0, i.numberToHex)(BigInt(e.s)) : e.s,
                chainId: (0, i.numberToHex)(e.chainId),
                nonce: (0, i.numberToHex)(e.nonce),
                ...(void 0 !== e.yParity
                  ? { yParity: (0, i.numberToHex)(e.yParity) }
                  : {}),
                ...(void 0 !== e.v && void 0 === e.yParity
                  ? { v: (0, i.numberToHex)(e.v) }
                  : {}),
              }))),
            void 0 !== e.accessList && (t.accessList = e.accessList),
            void 0 !== e.blobVersionedHashes &&
              (t.blobVersionedHashes = e.blobVersionedHashes),
            void 0 !== e.blobs &&
              ("string" != typeof e.blobs[0]
                ? (t.blobs = e.blobs.map((e) => (0, i.bytesToHex)(e)))
                : (t.blobs = e.blobs)),
            void 0 !== e.data && (t.data = e.data),
            void 0 !== e.from && (t.from = e.from),
            void 0 !== e.gas && (t.gas = (0, i.numberToHex)(e.gas)),
            void 0 !== e.gasPrice &&
              (t.gasPrice = (0, i.numberToHex)(e.gasPrice)),
            void 0 !== e.maxFeePerBlobGas &&
              (t.maxFeePerBlobGas = (0, i.numberToHex)(e.maxFeePerBlobGas)),
            void 0 !== e.maxFeePerGas &&
              (t.maxFeePerGas = (0, i.numberToHex)(e.maxFeePerGas)),
            void 0 !== e.maxPriorityFeePerGas &&
              (t.maxPriorityFeePerGas = (0, i.numberToHex)(
                e.maxPriorityFeePerGas
              )),
            void 0 !== e.nonce && (t.nonce = (0, i.numberToHex)(e.nonce)),
            void 0 !== e.to && (t.to = e.to),
            void 0 !== e.type && (t.type = s[e.type]),
            void 0 !== e.value && (t.value = (0, i.numberToHex)(e.value)),
            t
          );
        }
        let u = a("transactionRequest", c);
      },
      [712808, 771770, 494316],
    ],
    631128: (e) => {
      "use strict";
      e.s({ serializeStateOverride: () => s });
      var t = e.i(948628),
        n = e.i(140373),
        r = e.i(663376),
        o = e.i(259123),
        i = e.i(994290);
      function a(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, t) => {
            let { slot: r, value: o } = t;
            if (66 !== r.length)
              throw new n.InvalidBytesLengthError({
                size: r.length,
                targetSize: 66,
                type: "hex",
              });
            if (66 !== o.length)
              throw new n.InvalidBytesLengthError({
                size: o.length,
                targetSize: 66,
                type: "hex",
              });
            return (e[r] = o), e;
          }, {});
      }
      function s(e) {
        if (!e) return;
        let n = {};
        for (let { address: s, ...c } of e) {
          if (!(0, o.isAddress)(s, { strict: !1 }))
            throw new t.InvalidAddressError({ address: s });
          if (n[s]) throw new r.AccountStateConflictError({ address: s });
          n[s] = (function (e) {
            let { balance: t, nonce: n, state: o, stateDiff: s, code: c } = e,
              u = {};
            if (
              (void 0 !== c && (u.code = c),
              void 0 !== t && (u.balance = (0, i.numberToHex)(t)),
              void 0 !== n && (u.nonce = (0, i.numberToHex)(n)),
              void 0 !== o && (u.state = a(o)),
              void 0 !== s)
            ) {
              if (u.state) throw new r.StateAssignmentConflictError();
              u.stateDiff = a(s);
            }
            return u;
          })(c);
        }
        return n;
      }
    },
    385070: [
      (e) => {
        "use strict";
        e.s({ assertRequest: () => eJ }, 385070);
        var t = e.i(326875);
        e.s(
          {
            maxInt104: () => m,
            maxInt112: () => f,
            maxInt120: () => g,
            maxInt128: () => v,
            maxInt136: () => b,
            maxInt144: () => w,
            maxInt152: () => y,
            maxInt16: () => r,
            maxInt160: () => x,
            maxInt168: () => E,
            maxInt176: () => P,
            maxInt184: () => T,
            maxInt192: () => I,
            maxInt200: () => B,
            maxInt208: () => R,
            maxInt216: () => F,
            maxInt224: () => C,
            maxInt232: () => G,
            maxInt24: () => o,
            maxInt240: () => U,
            maxInt248: () => N,
            maxInt256: () => A,
            maxInt32: () => i,
            maxInt40: () => a,
            maxInt48: () => s,
            maxInt56: () => c,
            maxInt64: () => u,
            maxInt72: () => l,
            maxInt8: () => n,
            maxInt80: () => d,
            maxInt88: () => h,
            maxInt96: () => p,
            maxUint104: () => eT,
            maxUint112: () => eI,
            maxUint120: () => eB,
            maxUint128: () => eR,
            maxUint136: () => eF,
            maxUint144: () => eC,
            maxUint152: () => eG,
            maxUint16: () => ep,
            maxUint160: () => eU,
            maxUint168: () => eN,
            maxUint176: () => eA,
            maxUint184: () => eH,
            maxUint192: () => eM,
            maxUint200: () => ek,
            maxUint208: () => eS,
            maxUint216: () => eL,
            maxUint224: () => ez,
            maxUint232: () => eq,
            maxUint24: () => em,
            maxUint240: () => eO,
            maxUint248: () => ej,
            maxUint256: () => eV,
            maxUint32: () => ef,
            maxUint40: () => eg,
            maxUint48: () => ev,
            maxUint56: () => eb,
            maxUint64: () => ew,
            maxUint72: () => ey,
            maxUint8: () => eh,
            maxUint80: () => ex,
            maxUint88: () => eE,
            maxUint96: () => eP,
            minInt104: () => K,
            minInt112: () => W,
            minInt120: () => J,
            minInt128: () => Q,
            minInt136: () => X,
            minInt144: () => Y,
            minInt152: () => Z,
            minInt16: () => M,
            minInt160: () => $,
            minInt168: () => ee,
            minInt176: () => et,
            minInt184: () => en,
            minInt192: () => er,
            minInt200: () => eo,
            minInt208: () => ei,
            minInt216: () => ea,
            minInt224: () => es,
            minInt232: () => ec,
            minInt24: () => k,
            minInt240: () => eu,
            minInt248: () => el,
            minInt256: () => ed,
            minInt32: () => S,
            minInt40: () => L,
            minInt48: () => z,
            minInt56: () => q,
            minInt64: () => O,
            minInt72: () => j,
            minInt8: () => H,
            minInt80: () => V,
            minInt88: () => _,
            minInt96: () => D,
          },
          77707
        );
        let n = 2n ** (8n - 1n) - 1n,
          r = 2n ** (16n - 1n) - 1n,
          o = 2n ** (24n - 1n) - 1n,
          i = 2n ** (32n - 1n) - 1n,
          a = 2n ** (40n - 1n) - 1n,
          s = 2n ** (48n - 1n) - 1n,
          c = 2n ** (56n - 1n) - 1n,
          u = 2n ** (64n - 1n) - 1n,
          l = 2n ** (72n - 1n) - 1n,
          d = 2n ** (80n - 1n) - 1n,
          h = 2n ** (88n - 1n) - 1n,
          p = 2n ** (96n - 1n) - 1n,
          m = 2n ** (104n - 1n) - 1n,
          f = 2n ** (112n - 1n) - 1n,
          g = 2n ** (120n - 1n) - 1n,
          v = 2n ** (128n - 1n) - 1n,
          b = 2n ** (136n - 1n) - 1n,
          w = 2n ** (144n - 1n) - 1n,
          y = 2n ** (152n - 1n) - 1n,
          x = 2n ** (160n - 1n) - 1n,
          E = 2n ** (168n - 1n) - 1n,
          P = 2n ** (176n - 1n) - 1n,
          T = 2n ** (184n - 1n) - 1n,
          I = 2n ** (192n - 1n) - 1n,
          B = 2n ** (200n - 1n) - 1n,
          R = 2n ** (208n - 1n) - 1n,
          F = 2n ** (216n - 1n) - 1n,
          C = 2n ** (224n - 1n) - 1n,
          G = 2n ** (232n - 1n) - 1n,
          U = 2n ** (240n - 1n) - 1n,
          N = 2n ** (248n - 1n) - 1n,
          A = 2n ** (256n - 1n) - 1n,
          H = -(2n ** (8n - 1n)),
          M = -(2n ** (16n - 1n)),
          k = -(2n ** (24n - 1n)),
          S = -(2n ** (32n - 1n)),
          L = -(2n ** (40n - 1n)),
          z = -(2n ** (48n - 1n)),
          q = -(2n ** (56n - 1n)),
          O = -(2n ** (64n - 1n)),
          j = -(2n ** (72n - 1n)),
          V = -(2n ** (80n - 1n)),
          _ = -(2n ** (88n - 1n)),
          D = -(2n ** (96n - 1n)),
          K = -(2n ** (104n - 1n)),
          W = -(2n ** (112n - 1n)),
          J = -(2n ** (120n - 1n)),
          Q = -(2n ** (128n - 1n)),
          X = -(2n ** (136n - 1n)),
          Y = -(2n ** (144n - 1n)),
          Z = -(2n ** (152n - 1n)),
          $ = -(2n ** (160n - 1n)),
          ee = -(2n ** (168n - 1n)),
          et = -(2n ** (176n - 1n)),
          en = -(2n ** (184n - 1n)),
          er = -(2n ** (192n - 1n)),
          eo = -(2n ** (200n - 1n)),
          ei = -(2n ** (208n - 1n)),
          ea = -(2n ** (216n - 1n)),
          es = -(2n ** (224n - 1n)),
          ec = -(2n ** (232n - 1n)),
          eu = -(2n ** (240n - 1n)),
          el = -(2n ** (248n - 1n)),
          ed = -(2n ** (256n - 1n)),
          eh = 2n ** 8n - 1n,
          ep = 2n ** 16n - 1n,
          em = 2n ** 24n - 1n,
          ef = 2n ** 32n - 1n,
          eg = 2n ** 40n - 1n,
          ev = 2n ** 48n - 1n,
          eb = 2n ** 56n - 1n,
          ew = 2n ** 64n - 1n,
          ey = 2n ** 72n - 1n,
          ex = 2n ** 80n - 1n,
          eE = 2n ** 88n - 1n,
          eP = 2n ** 96n - 1n,
          eT = 2n ** 104n - 1n,
          eI = 2n ** 112n - 1n,
          eB = 2n ** 120n - 1n,
          eR = 2n ** 128n - 1n,
          eF = 2n ** 136n - 1n,
          eC = 2n ** 144n - 1n,
          eG = 2n ** 152n - 1n,
          eU = 2n ** 160n - 1n,
          eN = 2n ** 168n - 1n,
          eA = 2n ** 176n - 1n,
          eH = 2n ** 184n - 1n,
          eM = 2n ** 192n - 1n,
          ek = 2n ** 200n - 1n,
          eS = 2n ** 208n - 1n,
          eL = 2n ** 216n - 1n,
          ez = 2n ** 224n - 1n,
          eq = 2n ** 232n - 1n,
          eO = 2n ** 240n - 1n,
          ej = 2n ** 248n - 1n,
          eV = 2n ** 256n - 1n;
        var e_ = e.i(948628),
          eD = e.i(434076),
          eK = e.i(658213),
          eW = e.i(259123);
        function eJ(e) {
          let {
              account: n,
              gasPrice: r,
              maxFeePerGas: o,
              maxPriorityFeePerGas: i,
              to: a,
            } = e,
            s = n ? (0, t.parseAccount)(n) : void 0;
          if (s && !(0, eW.isAddress)(s.address))
            throw new e_.InvalidAddressError({ address: s.address });
          if (a && !(0, eW.isAddress)(a))
            throw new e_.InvalidAddressError({ address: a });
          if (void 0 !== r && (void 0 !== o || void 0 !== i))
            throw new eK.FeeConflictError();
          if (o && o > eV) throw new eD.FeeCapTooHighError({ maxFeePerGas: o });
          if (i && o && i > o)
            throw new eD.TipAboveFeeCapError({
              maxFeePerGas: o,
              maxPriorityFeePerGas: i,
            });
        }
      },
      [77707],
    ],
  },
]);

//# sourceMappingURL=d57c507dc1979a09.js.map
