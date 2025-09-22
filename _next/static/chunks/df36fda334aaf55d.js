(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    590942: [
      (e) => {
        "use strict";
        e.s({ getEnsAddress: () => A }, 590942);
        var t = e.i(275982),
          r = e.i(622157),
          n = e.i(906420),
          a = e.i(768759),
          i = e.i(569103),
          s = e.i(994290),
          o = e.i(587716),
          l = e.i(500780),
          c = e.i(994790);
        function u(e, t) {
          var r, n, a, i, s, u;
          if (!(e instanceof l.BaseError)) return !1;
          let d = e.walk((e) => e instanceof c.ContractFunctionRevertedError);
          return (
            d instanceof c.ContractFunctionRevertedError &&
            (!!(
              (null == (r = d.data) ? void 0 : r.errorName) ===
                "ResolverNotFound" ||
              (null == (n = d.data) ? void 0 : n.errorName) ===
                "ResolverWildcardNotSupported" ||
              (null == (a = d.data) ? void 0 : a.errorName) ===
                "ResolverNotContract" ||
              (null == (i = d.data) ? void 0 : i.errorName) ===
                "ResolverError" ||
              (null == (s = d.data) ? void 0 : s.errorName) === "HttpError" ||
              (null == (u = d.reason)
                ? void 0
                : u.includes(
                    "Wildcard on non-extended resolvers is not supported"
                  ))
            ) ||
              ("reverse" === t && d.reason === o.panicReasons[50]))
          );
        }
        var d = e.i(895450);
        e.s({ namehash: () => v }, 670205);
        var f = e.i(115481),
          p = e.i(919717),
          m = e.i(831826),
          g = e.i(212629);
        function h(e) {
          if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
            return null;
          let t = "0x".concat(e.slice(1, 65));
          return (0, g.isHex)(t) ? t : null;
        }
        function v(e) {
          let t = new Uint8Array(32).fill(0);
          if (!e) return (0, s.bytesToHex)(t);
          let r = e.split(".");
          for (let e = r.length - 1; e >= 0; e -= 1) {
            let n = h(r[e]),
              a = n
                ? (0, p.toBytes)(n)
                : (0, m.keccak256)((0, p.stringToBytes)(r[e]), "bytes");
            t = (0, m.keccak256)((0, f.concat)([t, a]), "bytes");
          }
          return (0, s.bytesToHex)(t);
        }
        function b(e) {
          let t = new Uint8Array(32).fill(0);
          return e
            ? h(e) || (0, m.keccak256)((0, p.stringToBytes)(e))
            : (0, s.bytesToHex)(t);
        }
        function y(e) {
          let t = e.replace(/^\.|\.$/gm, "");
          if (0 === t.length) return new Uint8Array(1);
          let r = new Uint8Array((0, p.stringToBytes)(t).byteLength + 2),
            n = 0,
            a = t.split(".");
          for (let e = 0; e < a.length; e++) {
            var i;
            let t = (0, p.stringToBytes)(a[e]);
            t.byteLength > 255 &&
              (t = (0, p.stringToBytes)(
                ((i = b(a[e])), "[".concat(i.slice(2), "]"))
              )),
              (r[n] = t.length),
              r.set(t, n + 1),
              (n += t.length + 1);
          }
          return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r;
        }
        e.s({ labelhash: () => b }, 753197);
        var w = e.i(477379),
          E = e.i(107511);
        async function A(e, o) {
          let {
              blockNumber: l,
              blockTag: c,
              coinType: f,
              name: p,
              gatewayUrls: m,
              strict: g,
            } = o,
            { chain: h } = e,
            b = (() => {
              if (o.universalResolverAddress) return o.universalResolverAddress;
              if (!h)
                throw Error(
                  "client chain not configured. universalResolverAddress is required."
                );
              return (0, a.getChainContractAddress)({
                blockNumber: l,
                chain: h,
                contract: "ensUniversalResolver",
              });
            })(),
            A = null == h ? void 0 : h.ensTlds;
          if (A && !A.some((e) => p.endsWith(e))) return null;
          try {
            let a = (0, n.encodeFunctionData)({
                abi: t.addressResolverAbi,
                functionName: "addr",
                ...(null != f ? { args: [v(p), BigInt(f)] } : { args: [v(p)] }),
              }),
              o = {
                address: b,
                abi: t.universalResolverResolveAbi,
                functionName: "resolve",
                args: [
                  (0, s.toHex)(y(p)),
                  a,
                  null != m ? m : [d.localBatchGatewayUrl],
                ],
                blockNumber: l,
                blockTag: c,
              },
              u = (0, w.getAction)(e, E.readContract, "readContract"),
              g = await u(o);
            if ("0x" === g[0]) return null;
            let h = (0, r.decodeFunctionResult)({
              abi: t.addressResolverAbi,
              args: null != f ? [v(p), BigInt(f)] : void 0,
              functionName: "addr",
              data: g[0],
            });
            if ("0x" === h || "0x00" === (0, i.trim)(h)) return null;
            return h;
          } catch (e) {
            if (g) throw e;
            if (u(e, "resolve")) return null;
            throw e;
          }
        }
        e.s({ getEnsAvatar: () => _ }, 685103),
          e.s(
            {
              EnsAvatarInvalidMetadataError: () => B,
              EnsAvatarInvalidNftUriError: () => T,
              EnsAvatarUnsupportedNamespaceError: () => k,
              EnsAvatarUriResolutionError: () => C,
            },
            313203
          );
        var x = l;
        class B extends x.BaseError {
          constructor({ data: e }) {
            super(
              "Unable to extract image from metadata. The metadata may be malformed or invalid.",
              {
                metaMessages: [
                  "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                  "",
                  "Provided data: ".concat(JSON.stringify(e)),
                ],
                name: "EnsAvatarInvalidMetadataError",
              }
            );
          }
        }
        class T extends x.BaseError {
          constructor({ reason: e }) {
            super("ENS NFT avatar URI is invalid. ".concat(e), {
              name: "EnsAvatarInvalidNftUriError",
            });
          }
        }
        class C extends x.BaseError {
          constructor({ uri: e }) {
            super(
              'Unable to resolve ENS avatar URI "'.concat(
                e,
                '". The URI may be malformed, invalid, or does not respond with a valid image.'
              ),
              { name: "EnsAvatarUriResolutionError" }
            );
          }
        }
        class k extends x.BaseError {
          constructor({ namespace: e }) {
            super(
              'ENS NFT avatar namespace "'.concat(
                e,
                '" is not supported. Must be "erc721" or "erc1155".'
              ),
              { name: "EnsAvatarUnsupportedNamespaceError" }
            );
          }
        }
        let I = RegExp(
            "(?<protocol>https?:\\/\\/[^\\/]*|ipfs:\\/|ipns:\\/|ar:\\/)?(?<root>\\/)?(?<subpath>ipfs\\/|ipns\\/)?(?<target>[\\w\\-.]+)(?<subtarget>\\/.*)?"
          ),
          N = RegExp(
            "^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\\/(?<target>[\\w\\-.]+))?(?<subtarget>\\/.*)?$"
          ),
          R = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
          F = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
        async function S(e) {
          try {
            let t = await fetch(e, { method: "HEAD" });
            if (200 === t.status) {
              let e = t.headers.get("content-type");
              return null == e ? void 0 : e.startsWith("image/");
            }
            return !1;
          } catch (t) {
            if (
              ("object" == typeof t && void 0 !== t.response) ||
              !globalThis.hasOwnProperty("Image")
            )
              return !1;
            return new Promise((t) => {
              let r = new Image();
              (r.onload = () => {
                t(!0);
              }),
                (r.onerror = () => {
                  t(!1);
                }),
                (r.src = e);
            });
          }
        }
        function L(e, t) {
          return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
        }
        function P(e) {
          let { uri: t, gatewayUrls: r } = e,
            n = R.test(t);
          if (n) return { uri: t, isOnChain: !0, isEncoded: n };
          let a = L(null == r ? void 0 : r.ipfs, "https://ipfs.io"),
            i = L(null == r ? void 0 : r.arweave, "https://arweave.net"),
            s = t.match(I),
            {
              protocol: o,
              subpath: l,
              target: c,
              subtarget: u = "",
            } = (null == s ? void 0 : s.groups) || {},
            d = "ipns:/" === o || "ipns/" === l,
            f = "ipfs:/" === o || "ipfs/" === l || N.test(t);
          if (t.startsWith("http") && !d && !f) {
            let e = t;
            return (
              (null == r ? void 0 : r.arweave) &&
                (e = t.replace(
                  /https:\/\/arweave.net/g,
                  null == r ? void 0 : r.arweave
                )),
              { uri: e, isOnChain: !1, isEncoded: !1 }
            );
          }
          if ((d || f) && c)
            return {
              uri: ""
                .concat(a, "/")
                .concat(d ? "ipns" : "ipfs", "/")
                .concat(c)
                .concat(u),
              isOnChain: !1,
              isEncoded: !1,
            };
          if ("ar:/" === o && c)
            return {
              uri: ""
                .concat(i, "/")
                .concat(c)
                .concat(u || ""),
              isOnChain: !1,
              isEncoded: !1,
            };
          let p = t.replace(F, "");
          if (
            (p.startsWith("<svg") &&
              (p = "data:image/svg+xml;base64,".concat(btoa(p))),
            p.startsWith("data:") || p.startsWith("{"))
          )
            return { uri: p, isOnChain: !0, isEncoded: !1 };
          throw new C({ uri: t });
        }
        function z(e) {
          if (
            "object" != typeof e ||
            (!("image" in e) && !("image_url" in e) && !("image_data" in e))
          )
            throw new B({ data: e });
          return e.image || e.image_url || e.image_data;
        }
        async function H(e) {
          let { gatewayUrls: t, uri: r } = e;
          try {
            let e = await fetch(r).then((e) => e.json());
            return await D({ gatewayUrls: t, uri: z(e) });
          } catch (e) {
            throw new C({ uri: r });
          }
        }
        async function D(e) {
          let { gatewayUrls: t, uri: r } = e,
            { uri: n, isOnChain: a } = P({ uri: r, gatewayUrls: t });
          if (a || (await S(n))) return n;
          throw new C({ uri: r });
        }
        async function U(e, t) {
          let { nft: r } = t;
          if ("erc721" === r.namespace)
            return (0, E.readContract)(e, {
              address: r.contractAddress,
              abi: [
                {
                  name: "tokenURI",
                  type: "function",
                  stateMutability: "view",
                  inputs: [{ name: "tokenId", type: "uint256" }],
                  outputs: [{ name: "", type: "string" }],
                },
              ],
              functionName: "tokenURI",
              args: [BigInt(r.tokenID)],
            });
          if ("erc1155" === r.namespace)
            return (0, E.readContract)(e, {
              address: r.contractAddress,
              abi: [
                {
                  name: "uri",
                  type: "function",
                  stateMutability: "view",
                  inputs: [{ name: "_id", type: "uint256" }],
                  outputs: [{ name: "", type: "string" }],
                },
              ],
              functionName: "uri",
              args: [BigInt(r.tokenID)],
            });
          throw new k({ namespace: r.namespace });
        }
        async function O(e, t) {
          let { gatewayUrls: r, record: n } = t;
          return /eip155:/i.test(n)
            ? M(e, { gatewayUrls: r, record: n })
            : D({ uri: n, gatewayUrls: r });
        }
        async function M(e, t) {
          let { gatewayUrls: r, record: n } = t,
            a = (function (e) {
              let t = e;
              t.startsWith("did:nft:") &&
                (t = t.replace("did:nft:", "").replace(/_/g, "/"));
              let [r, n, a] = t.split("/"),
                [i, s] = r.split(":"),
                [o, l] = n.split(":");
              if (!i || "eip155" !== i.toLowerCase())
                throw new T({ reason: "Only EIP-155 supported" });
              if (!s) throw new T({ reason: "Chain ID not found" });
              if (!l) throw new T({ reason: "Contract address not found" });
              if (!a) throw new T({ reason: "Token ID not found" });
              if (!o) throw new T({ reason: "ERC namespace not found" });
              return {
                chainID: Number.parseInt(s),
                namespace: o.toLowerCase(),
                contractAddress: l,
                tokenID: a,
              };
            })(n),
            {
              uri: i,
              isOnChain: s,
              isEncoded: o,
            } = P({ uri: await U(e, { nft: a }), gatewayUrls: r });
          if (
            s &&
            (i.includes("data:application/json;base64,") || i.startsWith("{"))
          )
            return D({
              uri: z(
                JSON.parse(
                  o ? atob(i.replace("data:application/json;base64,", "")) : i
                )
              ),
              gatewayUrls: r,
            });
          let l = a.tokenID;
          return (
            "erc1155" === a.namespace &&
              (l = l.replace("0x", "").padStart(64, "0")),
            H({ gatewayUrls: r, uri: i.replace(/(?:0x)?{id}/, l) })
          );
        }
        async function q(e, i) {
          let {
              blockNumber: o,
              blockTag: l,
              key: c,
              name: f,
              gatewayUrls: p,
              strict: m,
            } = i,
            { chain: g } = e,
            h = (() => {
              if (i.universalResolverAddress) return i.universalResolverAddress;
              if (!g)
                throw Error(
                  "client chain not configured. universalResolverAddress is required."
                );
              return (0, a.getChainContractAddress)({
                blockNumber: o,
                chain: g,
                contract: "ensUniversalResolver",
              });
            })(),
            b = null == g ? void 0 : g.ensTlds;
          if (b && !b.some((e) => f.endsWith(e))) return null;
          try {
            let a = {
                address: h,
                abi: t.universalResolverResolveAbi,
                functionName: "resolve",
                args: [
                  (0, s.toHex)(y(f)),
                  (0, n.encodeFunctionData)({
                    abi: t.textResolverAbi,
                    functionName: "text",
                    args: [v(f), c],
                  }),
                  null != p ? p : [d.localBatchGatewayUrl],
                ],
                blockNumber: o,
                blockTag: l,
              },
              i = (0, w.getAction)(e, E.readContract, "readContract"),
              u = await i(a);
            if ("0x" === u[0]) return null;
            let m = (0, r.decodeFunctionResult)({
              abi: t.textResolverAbi,
              functionName: "text",
              data: u[0],
            });
            return "" === m ? null : m;
          } catch (e) {
            if (m) throw e;
            if (u(e, "resolve")) return null;
            throw e;
          }
        }
        async function _(e, t) {
          let {
              blockNumber: r,
              blockTag: n,
              assetGatewayUrls: a,
              name: i,
              gatewayUrls: s,
              strict: o,
              universalResolverAddress: l,
            } = t,
            c = await (0, w.getAction)(
              e,
              q,
              "getEnsText"
            )({
              blockNumber: r,
              blockTag: n,
              key: "avatar",
              name: i,
              universalResolverAddress: l,
              gatewayUrls: s,
              strict: o,
            });
          if (!c) return null;
          try {
            return await O(e, { record: c, gatewayUrls: a });
          } catch (e) {
            return null;
          }
        }
        async function j(e, r) {
          let {
              address: n,
              blockNumber: i,
              blockTag: o,
              gatewayUrls: l,
              strict: c,
              universalResolverAddress: d,
            } = r,
            f = d;
          if (!f) {
            if (!e.chain)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            f = (0, a.getChainContractAddress)({
              blockNumber: i,
              chain: e.chain,
              contract: "ensUniversalResolver",
            });
          }
          let p = "".concat(n.toLowerCase().substring(2), ".addr.reverse");
          try {
            let r = {
                address: f,
                abi: t.universalResolverReverseAbi,
                functionName: "reverse",
                args: [(0, s.toHex)(y(p))],
                blockNumber: i,
                blockTag: o,
              },
              a = (0, w.getAction)(e, E.readContract, "readContract"),
              [c, u] = l ? await a({ ...r, args: [...r.args, l] }) : await a(r);
            if (n.toLowerCase() !== u.toLowerCase()) return null;
            return c;
          } catch (e) {
            if (c) throw e;
            if (u(e, "reverse")) return null;
            throw e;
          }
        }
        async function G(e, t) {
          let { blockNumber: r, blockTag: n, name: i } = t,
            { chain: o } = e,
            l = (() => {
              if (t.universalResolverAddress) return t.universalResolverAddress;
              if (!o)
                throw Error(
                  "client chain not configured. universalResolverAddress is required."
                );
              return (0, a.getChainContractAddress)({
                blockNumber: r,
                chain: o,
                contract: "ensUniversalResolver",
              });
            })(),
            c = null == o ? void 0 : o.ensTlds;
          if (c && !c.some((e) => i.endsWith(e)))
            throw Error(
              ""
                .concat(i, " is not a valid ENS TLD (")
                .concat(null == c ? void 0 : c.join(", "), ') for chain "')
                .concat(o.name, '" (id: ')
                .concat(o.id, ").")
            );
          let [u] = await (0, w.getAction)(
            e,
            E.readContract,
            "readContract"
          )({
            address: l,
            abi: [
              {
                inputs: [{ type: "bytes" }],
                name: "findResolver",
                outputs: [{ type: "address" }, { type: "bytes32" }],
                stateMutability: "view",
                type: "function",
              },
            ],
            functionName: "findResolver",
            args: [(0, s.toHex)(y(i))],
            blockNumber: r,
            blockTag: n,
          });
          return u;
        }
        e.s({ getEnsText: () => q }, 768598),
          e.s({ getEnsName: () => j }, 431716),
          e.s({ getEnsResolver: () => G }, 586423),
          e.s({ createAccessList: () => K }, 660379);
        var W = e.i(326875),
          Z = e.i(227494),
          $ = e.i(712808),
          V = e.i(494316),
          J = e.i(385070);
        async function K(e, t) {
          let {
              account: r = e.account,
              blockNumber: n,
              blockTag: a = "latest",
              blobs: i,
              data: o,
              gas: l,
              gasPrice: c,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: f,
              to: p,
              value: m,
              ...g
            } = t,
            h = r ? (0, W.parseAccount)(r) : void 0;
          try {
            var v, b, y;
            (0, J.assertRequest)(t);
            let r = "bigint" == typeof n ? (0, s.numberToHex)(n) : void 0,
              w =
                null == (y = e.chain) ||
                null == (b = y.formatters) ||
                null == (v = b.transactionRequest)
                  ? void 0
                  : v.format,
              E = (w || V.formatTransactionRequest)({
                ...(0, $.extract)(g, { format: w }),
                from: null == h ? void 0 : h.address,
                blobs: i,
                data: o,
                gas: l,
                gasPrice: c,
                maxFeePerBlobGas: u,
                maxFeePerGas: d,
                maxPriorityFeePerGas: f,
                to: p,
                value: m,
              }),
              A = await e.request({
                method: "eth_createAccessList",
                params: [E, r || a],
              });
            return { accessList: A.accessList, gasUsed: BigInt(A.gasUsed) };
          } catch (r) {
            throw (0, Z.getCallError)(r, { ...t, account: h, chain: e.chain });
          }
        }
        e.s({ createBlockFilter: () => X }, 910837);
        var Q = e.i(740900);
        async function X(e) {
          let t = (0, Q.createFilterRequestScope)(e, {
              method: "eth_newBlockFilter",
            }),
            r = await e.request({ method: "eth_newBlockFilter" });
          return { id: r, request: t(r), type: "block" };
        }
      },
      [670205, 753197, 313203, 768598, 685103, 431716, 586423, 660379, 910837],
    ],
    139449: [
      (e) => {
        "use strict";
        e.s({ createContractEventFilter: () => g }, 139449),
          e.s({ encodeEventTopics: () => d }, 877303);
        var t = e.i(787769);
        e.s({ FilterTypeNotSupportedError: () => n }, 73551);
        var r = e.i(500780);
        class n extends r.BaseError {
          constructor(e) {
            super('Filter type "'.concat(e, '" is not supported.'), {
              name: "FilterTypeNotSupportedError",
            });
          }
        }
        var a = e.i(919717),
          i = e.i(831826),
          s = e.i(964592),
          o = e.i(750671),
          l = e.i(443923),
          c = e.i(69864);
        let u = "/docs/contract/encodeEventTopics";
        function d(e) {
          let { abi: r, eventName: n, args: a } = e,
            i = r[0];
          if (n) {
            let e = (0, c.getAbiItem)({ abi: r, name: n });
            if (!e) throw new t.AbiEventNotFoundError(n, { docsPath: u });
            i = e;
          }
          if ("event" !== i.type)
            throw new t.AbiEventNotFoundError(void 0, { docsPath: u });
          let o = (0, l.formatAbiItem)(i),
            d = (0, s.toEventSelector)(o),
            p = [];
          if (a && "inputs" in i) {
            var m, g, h;
            let e =
                null == (m = i.inputs)
                  ? void 0
                  : m.filter((e) => "indexed" in e && e.indexed),
              t = Array.isArray(a)
                ? a
                : Object.values(a).length > 0 &&
                  null != (g = null == e ? void 0 : e.map((e) => a[e.name]))
                ? g
                : [];
            t.length > 0 &&
              (p =
                null !=
                (h =
                  null == e
                    ? void 0
                    : e.map((e, r) =>
                        Array.isArray(t[r])
                          ? t[r].map((n, a) => f({ param: e, value: t[r][a] }))
                          : void 0 !== t[r] && null !== t[r]
                          ? f({ param: e, value: t[r] })
                          : null
                      ))
                  ? h
                  : []);
          }
          return [d, ...p];
        }
        function f(e) {
          let { param: t, value: r } = e;
          if ("string" === t.type || "bytes" === t.type)
            return (0, i.keccak256)((0, a.toBytes)(r));
          if ("tuple" === t.type || t.type.match(/^(.*)\[(\d+)?\]$/))
            throw new n(t.type);
          return (0, o.encodeAbiParameters)([t], [r]);
        }
        var p = e.i(994290),
          m = e.i(740900);
        async function g(e, t) {
          let {
              address: r,
              abi: n,
              args: a,
              eventName: i,
              fromBlock: s,
              strict: o,
              toBlock: l,
            } = t,
            c = (0, m.createFilterRequestScope)(e, { method: "eth_newFilter" }),
            u = i ? d({ abi: n, args: a, eventName: i }) : void 0,
            f = await e.request({
              method: "eth_newFilter",
              params: [
                {
                  address: r,
                  fromBlock: "bigint" == typeof s ? (0, p.numberToHex)(s) : s,
                  toBlock: "bigint" == typeof l ? (0, p.numberToHex)(l) : l,
                  topics: u,
                },
              ],
            });
          return {
            abi: n,
            args: a,
            eventName: i,
            id: f,
            request: c(f),
            strict: !!o,
            type: "event",
          };
        }
      },
      [73551, 877303],
    ],
    710667: (e) => {
      "use strict";
      e.s({ createEventFilter: () => a });
      var t = e.i(877303),
        r = e.i(994290),
        n = e.i(740900);
      async function a(e) {
        let {
            address: a,
            args: i,
            event: s,
            events: o,
            fromBlock: l,
            strict: c,
            toBlock: u,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          d = null != o ? o : s ? [s] : void 0,
          f = (0, n.createFilterRequestScope)(e, { method: "eth_newFilter" }),
          p = [];
        d &&
          ((p = [
            d.flatMap((e) =>
              (0, t.encodeEventTopics)({ abi: [e], eventName: e.name, args: i })
            ),
          ]),
          s && (p = p[0]));
        let m = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: a,
              fromBlock: "bigint" == typeof l ? (0, r.numberToHex)(l) : l,
              toBlock: "bigint" == typeof u ? (0, r.numberToHex)(u) : u,
              ...(p.length ? { topics: p } : {}),
            },
          ],
        });
        return {
          abi: d,
          args: i,
          eventName: s ? s.name : void 0,
          fromBlock: l,
          id: m,
          request: f(m),
          strict: !!c,
          toBlock: u,
          type: "event",
        };
      }
    },
    209499: (e) => {
      "use strict";
      e.s({ estimateContractGas: () => s });
      var t = e.i(326875),
        r = e.i(906420),
        n = e.i(849993),
        a = e.i(477379),
        i = e.i(595828);
      async function s(e, s) {
        let {
            abi: o,
            address: l,
            args: c,
            functionName: u,
            dataSuffix: d,
            ...f
          } = s,
          p = (0, r.encodeFunctionData)({ abi: o, args: c, functionName: u });
        try {
          return await (0, a.getAction)(
            e,
            i.estimateGas,
            "estimateGas"
          )({
            data: "".concat(p).concat(d ? d.replace("0x", "") : ""),
            to: l,
            ...f,
          });
        } catch (r) {
          let e = f.account ? (0, t.parseAccount)(f.account) : void 0;
          throw (0, n.getContractError)(r, {
            abi: o,
            address: l,
            args: c,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: u,
            sender: null == e ? void 0 : e.address,
          });
        }
      }
    },
    813453: [
      (e) => {
        "use strict";
        async function t(e) {
          return BigInt(await e.request({ method: "eth_blobBaseFee" }));
        }
        e.s({ getBlobBaseFee: () => t }, 813453),
          e.s({ getBlockTransactionCount: () => a }, 432448);
        var r = e.i(864198),
          n = e.i(994290);
        async function a(e) {
          let t,
            {
              blockHash: a,
              blockNumber: i,
              blockTag: s = "latest",
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            o = void 0 !== i ? (0, n.numberToHex)(i) : void 0;
          return (
            (t = a
              ? await e.request(
                  { method: "eth_getBlockTransactionCountByHash", params: [a] },
                  { dedupe: !0 }
                )
              : await e.request(
                  {
                    method: "eth_getBlockTransactionCountByNumber",
                    params: [o || s],
                  },
                  { dedupe: !!o }
                )),
            (0, r.hexToNumber)(t)
          );
        }
        async function i(e, t) {
          let { address: r, blockNumber: a, blockTag: i = "latest" } = t,
            s = void 0 !== a ? (0, n.numberToHex)(a) : void 0,
            o = await e.request(
              { method: "eth_getCode", params: [r, s || i] },
              { dedupe: !!s }
            );
          if ("0x" !== o) return o;
        }
        e.s({ getCode: () => i }, 133620);
      },
      [432448, 133620],
    ],
    811335: [
      (e) => {
        "use strict";
        e.s({ getContractEvents: () => l }, 811335);
        var t = e.i(69864),
          r = e.i(477379);
        e.s({ getLogs: () => o }, 208774);
        var n = e.i(877303),
          a = e.i(171534),
          i = e.i(994290),
          s = e.i(519464);
        async function o(e) {
          let {
              address: t,
              blockHash: r,
              fromBlock: o,
              toBlock: l,
              event: c,
              events: u,
              args: d,
              strict: f,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            p = null != u ? u : c ? [c] : void 0,
            m = [];
          p &&
            ((m = [
              p.flatMap((e) =>
                (0, n.encodeEventTopics)({
                  abi: [e],
                  eventName: e.name,
                  args: u ? void 0 : d,
                })
              ),
            ]),
            c && (m = m[0]));
          let g = (
            r
              ? await e.request({
                  method: "eth_getLogs",
                  params: [{ address: t, topics: m, blockHash: r }],
                })
              : await e.request({
                  method: "eth_getLogs",
                  params: [
                    {
                      address: t,
                      topics: m,
                      fromBlock:
                        "bigint" == typeof o ? (0, i.numberToHex)(o) : o,
                      toBlock: "bigint" == typeof l ? (0, i.numberToHex)(l) : l,
                    },
                  ],
                })
          ).map((e) => (0, s.formatLog)(e));
          return p
            ? (0, a.parseEventLogs)({
                abi: p,
                args: d,
                logs: g,
                strict: null != f && f,
              })
            : g;
        }
        async function l(e, n) {
          let {
              abi: a,
              address: i,
              args: s,
              blockHash: l,
              eventName: c,
              fromBlock: u,
              toBlock: d,
              strict: f,
            } = n,
            p = c ? (0, t.getAbiItem)({ abi: a, name: c }) : void 0,
            m = p ? void 0 : a.filter((e) => "event" === e.type);
          return (0, r.getAction)(
            e,
            o,
            "getLogs"
          )({
            address: i,
            args: s,
            blockHash: l,
            event: p,
            events: m,
            fromBlock: u,
            toBlock: d,
            strict: f,
          });
        }
      },
      [208774],
    ],
    248370: [
      (e) => {
        "use strict";
        e.s({ getEip712Domain: () => i }, 248370);
        var t = e.i(500780);
        class r extends t.BaseError {
          constructor({ address: e }) {
            super('No EIP-712 domain found on contract "'.concat(e, '".'), {
              metaMessages: [
                "Ensure that:",
                '- The contract is deployed at the address "'.concat(e, '".'),
                "- `eip712Domain()` function exists on the contract.",
                "- `eip712Domain()` function matches signature to ERC-5267 specification.",
              ],
              name: "Eip712DomainNotFoundError",
            });
          }
        }
        var n = e.i(477379),
          a = e.i(107511);
        async function i(e, t) {
          let { address: i, factory: o, factoryData: l } = t;
          try {
            let [t, r, c, u, d, f, p] = await (0, n.getAction)(
              e,
              a.readContract,
              "readContract"
            )({
              abi: s,
              address: i,
              functionName: "eip712Domain",
              factory: o,
              factoryData: l,
            });
            return {
              domain: {
                name: r,
                version: c,
                chainId: Number(u),
                verifyingContract: d,
                salt: f,
              },
              extensions: p,
              fields: t,
            };
          } catch (e) {
            if (
              "ContractFunctionExecutionError" === e.name &&
              "ContractFunctionZeroDataError" === e.cause.name
            )
              throw new r({ address: i });
            throw e;
          }
        }
        let s = [
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
        ];
        e.s({ getFeeHistory: () => l }, 261492);
        var o = e.i(994290);
        async function l(e, t) {
          var r, n;
          let {
              blockCount: a,
              blockNumber: i,
              blockTag: s = "latest",
              rewardPercentiles: l,
            } = t,
            c = "bigint" == typeof i ? (0, o.numberToHex)(i) : void 0;
          return {
            baseFeePerGas: (r = await e.request(
              {
                method: "eth_feeHistory",
                params: [(0, o.numberToHex)(a), c || s, l],
              },
              { dedupe: !!c }
            )).baseFeePerGas.map((e) => BigInt(e)),
            gasUsedRatio: r.gasUsedRatio,
            oldestBlock: BigInt(r.oldestBlock),
            reward:
              null == (n = r.reward)
                ? void 0
                : n.map((e) => e.map((e) => BigInt(e))),
          };
        }
        e.s({ getFilterLogs: () => d }, 588801);
        var c = e.i(171534),
          u = e.i(519464);
        async function d(e, t) {
          var r;
          let { filter: n } = t,
            a = null != (r = n.strict) && r,
            i = (
              await n.request({ method: "eth_getFilterLogs", params: [n.id] })
            ).map((e) => (0, u.formatLog)(e));
          return n.abi
            ? (0, c.parseEventLogs)({ abi: n.abi, logs: i, strict: a })
            : i;
        }
        e.s({ getProof: () => p }, 705233);
        var f = e.i(864198);
        async function p(e, t) {
          let { address: r, blockNumber: n, blockTag: a, storageKeys: i } = t,
            s = void 0 !== n ? (0, o.numberToHex)(n) : void 0;
          var l = await e.request({
            method: "eth_getProof",
            params: [r, i, s || (null != a ? a : "latest")],
          });
          return {
            ...l,
            balance: l.balance ? BigInt(l.balance) : void 0,
            nonce: l.nonce ? (0, f.hexToNumber)(l.nonce) : void 0,
            storageProof: l.storageProof
              ? l.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
              : void 0,
          };
        }
        async function m(e, t) {
          let {
              address: r,
              blockNumber: n,
              blockTag: a = "latest",
              slot: i,
            } = t,
            s = void 0 !== n ? (0, o.numberToHex)(n) : void 0;
          return await e.request({
            method: "eth_getStorageAt",
            params: [r, i, s || a],
          });
        }
        e.s({ getStorageAt: () => m }, 712593),
          e.s({ getTransactionConfirmations: () => v }, 278787);
        var g = e.i(446985),
          h = e.i(94874);
        async function v(e, t) {
          let { hash: r, transactionReceipt: a } = t,
            [i, s] = await Promise.all([
              (0, n.getAction)(e, g.getBlockNumber, "getBlockNumber")({}),
              r
                ? (0, n.getAction)(
                    e,
                    h.getTransaction,
                    "getTransaction"
                  )({ hash: r })
                : void 0,
            ]),
            o =
              (null == a ? void 0 : a.blockNumber) ||
              (null == s ? void 0 : s.blockNumber);
          return o ? i - o + 1n : 0n;
        }
        e.s({ simulateBlocks: () => S }, 429492);
        var b = e.i(688905),
          y = e.i(326875),
          w = e.i(787769),
          E = e.i(994790),
          A = e.i(434076),
          x = e.i(622157),
          B = e.i(906420),
          T = e.i(115481),
          C = e.i(849993),
          k = e.i(334554),
          I = e.i(510901),
          N = e.i(494316),
          R = e.i(631128),
          F = e.i(385070);
        async function S(e, t) {
          var r;
          let {
            blockNumber: n,
            blockTag: a = null != (r = e.experimental_blockTag) ? r : "latest",
            blocks: i,
            returnFullTransactions: s,
            traceTransfers: l,
            validation: c,
          } = t;
          try {
            let t = [];
            for (let e of i) {
              let r = e.blockOverrides ? b.toRpc(e.blockOverrides) : void 0,
                n = e.calls.map((e) => {
                  var t;
                  let r = e.account ? (0, y.parseAccount)(e.account) : void 0,
                    n = e.abi ? (0, B.encodeFunctionData)(e) : e.data,
                    a = {
                      ...e,
                      data: e.dataSuffix
                        ? (0, T.concat)([n || "0x", e.dataSuffix])
                        : n,
                      from:
                        null != (t = e.from)
                          ? t
                          : null == r
                          ? void 0
                          : r.address,
                    };
                  return (
                    (0, F.assertRequest)(a), (0, N.formatTransactionRequest)(a)
                  );
                }),
                a = e.stateOverrides
                  ? (0, R.serializeStateOverride)(e.stateOverrides)
                  : void 0;
              t.push({ blockOverrides: r, calls: n, stateOverrides: a });
            }
            let r = "bigint" == typeof n ? (0, o.numberToHex)(n) : void 0;
            return (
              await e.request({
                method: "eth_simulateV1",
                params: [
                  {
                    blockStateCalls: t,
                    returnFullTransactions: s,
                    traceTransfers: l,
                    validation: c,
                  },
                  r || a,
                ],
              })
            ).map((e, t) => ({
              ...(0, I.formatBlock)(e),
              calls: e.calls.map((e, r) => {
                var n, a, s;
                let { abi: o, args: l, functionName: c, to: d } = i[t].calls[r],
                  f =
                    null != (s = null == (n = e.error) ? void 0 : n.data)
                      ? s
                      : e.returnData,
                  p = BigInt(e.gasUsed),
                  m =
                    null == (a = e.logs)
                      ? void 0
                      : a.map((e) => (0, u.formatLog)(e)),
                  g = "0x1" === e.status ? "success" : "failure",
                  h =
                    o && "success" === g && "0x" !== f
                      ? (0, x.decodeFunctionResult)({
                          abi: o,
                          data: f,
                          functionName: c,
                        })
                      : null,
                  v = (() => {
                    var t;
                    let r;
                    if (
                      "success" !== g &&
                      ((null == (t = e.error) ? void 0 : t.data) === "0x"
                        ? (r = new w.AbiDecodingZeroDataError())
                        : e.error && (r = new E.RawContractError(e.error)),
                      r)
                    )
                      return (0, C.getContractError)(r, {
                        abi: null != o ? o : [],
                        address: null != d ? d : "0x",
                        args: l,
                        functionName: null != c ? c : "<unknown>",
                      });
                  })();
                return {
                  data: f,
                  gasUsed: p,
                  logs: m,
                  status: g,
                  ...("success" === g ? { result: h } : { error: v }),
                };
              }),
            }));
          } catch (t) {
            let e = (0, k.getNodeError)(t, {});
            if (e instanceof A.UnknownNodeError) throw t;
            throw e;
          }
        }
      },
      [261492, 588801, 705233, 712593, 278787, 429492],
    ],
    793991: (e) => {
      "use strict";
      e.s({ parseAbiItem: () => i });
      var t = e.i(457352),
        r = e.i(650494),
        n = e.i(318054),
        a = e.i(69482);
      function i(e) {
        let i;
        if ("string" == typeof e) i = (0, a.parseSignature)(e);
        else {
          let t = (0, n.parseStructs)(e),
            s = e.length;
          for (let n = 0; n < s; n++) {
            let s = e[n];
            if (!(0, r.isStructSignature)(s)) {
              i = (0, a.parseSignature)(s, t);
              break;
            }
          }
        }
        if (!i) throw new t.InvalidAbiItemError({ signature: e });
        return i;
      }
    },
    867110: [
      (e) => {
        "use strict";
        e.s(
          {
            InvalidSelectorSizeError: () => G,
            NotFoundError: () => j,
            from: () => U,
            fromAbi: () => O,
            getSelector: () => M,
          },
          867110
        );
        var t = e.i(313274),
          r = e.i(793991),
          n = e.i(433907);
        e.s({ ripemd160: () => A }, 434396);
        var a = e.i(144749),
          i = e.i(458365);
        let s = Uint32Array.from([
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          o = new Uint32Array(80);
        a.HashMD;
        (e, t) => Math.floor(0x100000000 * Math.abs(Math.sin(t + 1)));
        a.HashMD;
        let l = Uint8Array.from([
            7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
          ]),
          c = Uint8Array.from(
            Array(16)
              .fill(0)
              .map((e, t) => t)
          ),
          u = c.map((e) => (9 * e + 5) % 16),
          d = (() => {
            let e = [[c], [u]];
            for (let t = 0; t < 4; t++)
              for (let r of e) r.push(r[t].map((e) => l[e]));
            return e;
          })(),
          f = d[0],
          p = d[1],
          m = [
            [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
            [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
            [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
            [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
            [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
          ].map((e) => Uint8Array.from(e)),
          g = f.map((e, t) => e.map((e) => m[t][e])),
          h = p.map((e, t) => e.map((e) => m[t][e])),
          v = Uint32Array.from([
            0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e,
          ]),
          b = Uint32Array.from([
            0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0,
          ]);
        function y(e, t, r, n) {
          return 0 === e
            ? t ^ r ^ n
            : 1 === e
            ? (t & r) | (~t & n)
            : 2 === e
            ? (t | ~r) ^ n
            : 3 === e
            ? (t & n) | (r & ~n)
            : t ^ (r | ~n);
        }
        let w = new Uint32Array(16);
        class E extends a.HashMD {
          get() {
            let { h0: e, h1: t, h2: r, h3: n, h4: a } = this;
            return [e, t, r, n, a];
          }
          set(e, t, r, n, a) {
            (this.h0 = 0 | e),
              (this.h1 = 0 | t),
              (this.h2 = 0 | r),
              (this.h3 = 0 | n),
              (this.h4 = 0 | a);
          }
          process(e, t) {
            for (let r = 0; r < 16; r++, t += 4) w[r] = e.getUint32(t, !0);
            let r = 0 | this.h0,
              n = r,
              a = 0 | this.h1,
              s = a,
              o = 0 | this.h2,
              l = o,
              c = 0 | this.h3,
              u = c,
              d = 0 | this.h4,
              m = d;
            for (let e = 0; e < 5; e++) {
              let t = 4 - e,
                E = v[e],
                A = b[e],
                x = f[e],
                B = p[e],
                T = g[e],
                C = h[e];
              for (let t = 0; t < 16; t++) {
                let n =
                  ((0, i.rotl)(r + y(e, a, o, c) + w[x[t]] + E, T[t]) + d) | 0;
                (r = d),
                  (d = c),
                  (c = 0 | (0, i.rotl)(o, 10)),
                  (o = a),
                  (a = n);
              }
              for (let e = 0; e < 16; e++) {
                let r =
                  ((0, i.rotl)(n + y(t, s, l, u) + w[B[e]] + A, C[e]) + m) | 0;
                (n = m),
                  (m = u),
                  (u = 0 | (0, i.rotl)(l, 10)),
                  (l = s),
                  (s = r);
              }
            }
            this.set(
              (this.h1 + o + u) | 0,
              (this.h2 + c + m) | 0,
              (this.h3 + d + n) | 0,
              (this.h4 + r + s) | 0,
              (this.h0 + a + l) | 0
            );
          }
          roundClean() {
            (0, i.clean)(w);
          }
          destroy() {
            (this.destroyed = !0),
              (0, i.clean)(this.buffer),
              this.set(0, 0, 0, 0, 0);
          }
          constructor() {
            super(64, 20, 8, !0),
              (this.h0 = 0x67452301),
              (this.h1 = -0x10325477),
              (this.h2 = -0x67452302),
              (this.h3 = 0x10325476),
              (this.h4 = -0x3c2d1e10);
          }
        }
        let A = (0, i.createHasher)(() => new E());
        var x = e.i(627582);
        e.i(404149);
        var B = e.i(27601),
          T = e.i(198960);
        function C(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
            n = (0, x.keccak_256)(B.from(e));
          return "Bytes" === r ? n : T.fromBytes(n);
        }
        e.s({ assert: () => F, checksum: () => S, validate: () => L }, 707548);
        class k extends Map {
          get(e) {
            let t = super.get(e);
            return (
              super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)),
              t
            );
          }
          set(e, t) {
            if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
              let e = this.keys().next().value;
              e && this.delete(e);
            }
            return this;
          }
          constructor(e) {
            super(),
              Object.defineProperty(this, "maxSize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.maxSize = e);
          }
        }
        let I = { checksum: new k(8192) }.checksum;
        var N = n;
        e.i(28658),
          n.BaseError,
          n.BaseError,
          n.BaseError,
          n.BaseError,
          n.BaseError;
        let R = /^0x[a-fA-F0-9]{40}$/;
        function F(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { strict: r = !0 } = t;
          if (!R.test(e)) throw new P({ address: e, cause: new z() });
          if (r) {
            if (e.toLowerCase() === e) return;
            if (S(e) !== e) throw new P({ address: e, cause: new H() });
          }
        }
        function S(e) {
          if (I.has(e)) return I.get(e);
          F(e, { strict: !1 });
          let t = e.substring(2).toLowerCase(),
            r = C(B.fromString(t), { as: "Bytes" }),
            n = t.split("");
          for (let e = 0; e < 40; e += 2)
            r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
              (15 & r[e >> 1]) >= 8 &&
                n[e + 1] &&
                (n[e + 1] = n[e + 1].toUpperCase());
          let a = "0x".concat(n.join(""));
          return I.set(e, a), a;
        }
        function L(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { strict: r = !0 } = null != t ? t : {};
          try {
            return F(e, { strict: r }), !0;
          } catch (e) {
            return !1;
          }
        }
        class P extends N.BaseError {
          constructor({ address: e, cause: t }) {
            super('Address "'.concat(e, '" is invalid.'), { cause: t }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Address.InvalidAddressError",
              });
          }
        }
        class z extends N.BaseError {
          constructor() {
            super("Address is not a 20 byte (40 hexadecimal character) value."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Address.InvalidInputError",
              });
          }
        }
        class H extends N.BaseError {
          constructor() {
            super("Address does not match its checksum counterpart."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Address.InvalidChecksumError",
              });
          }
        }
        function D(e) {
          let t = !0,
            r = "",
            a = 0,
            i = "",
            s = !1;
          for (let n = 0; n < e.length; n++) {
            let o = e[n];
            if (
              (["(", ")", ","].includes(o) && (t = !0),
              "(" === o && a++,
              ")" === o && a--,
              t)
            ) {
              if (0 === a) {
                if (" " === o && ["event", "function", "error", ""].includes(i))
                  i = "";
                else if (((i += o), ")" === o)) {
                  s = !0;
                  break;
                }
                continue;
              }
              if (" " === o) {
                "," !== e[n - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (t = !1));
                continue;
              }
              (i += o), (r += o);
            }
          }
          if (!s) throw new n.BaseError("Unable to normalize signature.");
          return i;
        }
        function U(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { prepare: n = !0 } = t,
            a =
              Array.isArray(e) || "string" == typeof e ? r.parseAbiItem(e) : e;
          return { ...a, ...(n ? { hash: q(a) } : {}) };
        }
        function O(e, t, r) {
          let n,
            { args: a = [], prepare: i = !0 } = null != r ? r : {},
            s = T.validate(t, { strict: !1 }),
            o = e.filter((e) =>
              s
                ? "function" === e.type || "error" === e.type
                  ? M(e) === T.slice(t, 0, 4)
                  : "event" === e.type && q(e) === t
                : "name" in e && e.name === t
            );
          if (0 === o.length) throw new j({ name: t });
          if (1 === o.length)
            return { ...o[0], ...(i ? { hash: q(o[0]) } : {}) };
          for (let e of o) {
            if ("inputs" in e) {
              if (!a || 0 === a.length) {
                if (!e.inputs || 0 === e.inputs.length)
                  return { ...e, ...(i ? { hash: q(e) } : {}) };
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === a.length &&
                a.every((t, r) => {
                  let n = "inputs" in e && e.inputs[r];
                  return (
                    !!n &&
                    (function e(t, r) {
                      let n = typeof t,
                        a = r.type;
                      switch (a) {
                        case "address":
                          return L(t, { strict: !1 });
                        case "bool":
                          return "boolean" === n;
                        case "function":
                        case "string":
                          return "string" === n;
                        default:
                          if ("tuple" === a && "components" in r)
                            return Object.values(r.components).every((r, n) =>
                              e(Object.values(t)[n], r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              a
                            )
                          )
                            return "number" === n || "bigint" === n;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a))
                            return "string" === n || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...r,
                                  type: a.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, n)
                  );
                })
              ) {
                if (n && "inputs" in n && n.inputs) {
                  let t = (function e(t, r, n) {
                    for (let a in t) {
                      let i = t[a],
                        s = r[a];
                      if (
                        "tuple" === i.type &&
                        "tuple" === s.type &&
                        "components" in i &&
                        "components" in s
                      )
                        return e(i.components, s.components, n[a]);
                      let o = [i.type, s.type];
                      if (
                        (o.includes("address") && o.includes("bytes20")) ||
                        (((o.includes("address") && o.includes("string")) ||
                          (o.includes("address") && o.includes("bytes"))) &&
                          L(n[a], { strict: !1 }))
                      )
                        return o;
                    }
                  })(e.inputs, n.inputs, a);
                  if (t)
                    throw new _(
                      { abiItem: e, type: t[0] },
                      { abiItem: n, type: t[1] }
                    );
                }
                n = e;
              }
            }
          }
          let l = (() => {
            if (n) return n;
            let [e, ...t] = o;
            return { ...e, overloads: t };
          })();
          if (!l) throw new j({ name: t });
          return { ...l, ...(i ? { hash: q(l) } : {}) };
        }
        function M(e) {
          return T.slice(q(e), 0, 4);
        }
        function q(e) {
          return "string" != typeof e && "hash" in e && e.hash
            ? e.hash
            : C(T.fromString(D("string" == typeof e ? e : t.formatAbiItem(e))));
        }
        class _ extends n.BaseError {
          constructor(e, r) {
            super("Found ambiguous types in overloaded ABI Items.", {
              metaMessages: [
                "`"
                  .concat(e.type, "` in `")
                  .concat(D(t.formatAbiItem(e.abiItem)), "`, and"),
                "`"
                  .concat(r.type, "` in `")
                  .concat(D(t.formatAbiItem(r.abiItem)), "`"),
                "",
                "These types encode differently and cannot be distinguished at runtime.",
                "Remove one of the ambiguous items in the ABI.",
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiItem.AmbiguityError",
              });
          }
        }
        class j extends n.BaseError {
          constructor({ name: e, data: t, type: r = "item" }) {
            super(
              "ABI "
                .concat(r)
                .concat(
                  e
                    ? ' with name "'.concat(e, '"')
                    : t
                    ? ' with data "'.concat(t, '"')
                    : "",
                  " not found."
                )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiItem.NotFoundError",
              });
          }
        }
        class G extends n.BaseError {
          constructor({ data: e }) {
            super(
              "Selector size is invalid. Expected 4 bytes. Received "
                .concat(T.size(e), ' bytes ("')
                .concat(e, '").')
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiItem.InvalidSelectorSizeError",
              });
          }
        }
      },
      [434396, 707548],
    ],
    61499: (e) => {
      "use strict";
      e.s({ parseAbiParameters: () => i });
      var t = e.i(202365),
        r = e.i(650494),
        n = e.i(318054),
        a = e.i(69482);
      function i(e) {
        let i = [];
        if ("string" == typeof e) {
          let t = (0, a.splitParameters)(e),
            n = t.length;
          for (let e = 0; e < n; e++)
            i.push((0, a.parseAbiParameter)(t[e], { modifiers: r.modifiers }));
        } else {
          let t = (0, n.parseStructs)(e),
            s = e.length;
          for (let n = 0; n < s; n++) {
            let s = e[n];
            if ((0, r.isStructSignature)(s)) continue;
            let o = (0, a.splitParameters)(s),
              l = o.length;
            for (let e = 0; e < l; e++)
              i.push(
                (0, a.parseAbiParameter)(o[e], {
                  modifiers: r.modifiers,
                  structs: t,
                })
              );
          }
        }
        if (0 === i.length)
          throw new t.InvalidAbiParametersError({ params: e });
        return i;
      }
    },
    851617: [
      (e) => {
        "use strict";
        e.s({ simulateCalls: () => C }, 851617), e.i(313274);
        var t = e.i(867110);
        e.i(301787), e.i(61499);
        var r = e.i(707548);
        e.i(27601);
        var n = e.i(433907),
          a = e.i(198960);
        let i = /^(.*)\[([0-9]*)\]$/,
          s = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
          o =
            /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
        function l(e) {
          let t = 0;
          for (let r = 0; r < e.length; r++) {
            let { dynamic: n, encoded: i } = e[r];
            n ? (t += 32) : (t += a.size(i));
          }
          let r = [],
            n = [],
            i = 0;
          for (let s = 0; s < e.length; s++) {
            let { dynamic: o, encoded: l } = e[s];
            o
              ? (r.push(a.fromNumber(t + i, { size: 32 })),
                n.push(l),
                (i += a.size(l)))
              : r.push(l);
          }
          return a.concat(...r, ...n);
        }
        function c(e, t, i) {
          let { checksumAddress: s = !1 } = null != i ? i : {};
          if (e.length !== t.length)
            throw new p({ expectedLength: e.length, givenLength: t.length });
          let c = l(
            (function (e) {
              let { checksumAddress: t, parameters: i, values: s } = e,
                c = [];
              for (let e = 0; e < i.length; e++)
                c.push(
                  (function e(t) {
                    let { checksumAddress: i = !1, parameter: s, value: c } = t,
                      u = (function (e) {
                        let t = e.match(/^(.*)\[(\d+)?\]$/);
                        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
                      })(s.type);
                    if (u) {
                      let [t, r] = u;
                      return (function (t, r) {
                        let { checksumAddress: n, length: i, parameter: s } = r,
                          o = null === i;
                        if (!Array.isArray(t)) throw new m(t);
                        if (!o && t.length !== i)
                          throw new d({
                            expectedLength: i,
                            givenLength: t.length,
                            type: "".concat(s.type, "[").concat(i, "]"),
                          });
                        let c = !1,
                          u = [];
                        for (let r = 0; r < t.length; r++) {
                          let a = e({
                            checksumAddress: n,
                            parameter: s,
                            value: t[r],
                          });
                          a.dynamic && (c = !0), u.push(a);
                        }
                        if (o || c) {
                          let e = l(u);
                          if (o) {
                            let t = a.fromNumber(u.length, { size: 32 });
                            return {
                              dynamic: !0,
                              encoded: u.length > 0 ? a.concat(t, e) : t,
                            };
                          }
                          if (c) return { dynamic: !0, encoded: e };
                        }
                        return {
                          dynamic: !1,
                          encoded: a.concat(
                            ...u.map((e) => {
                              let { encoded: t } = e;
                              return t;
                            })
                          ),
                        };
                      })(c, {
                        checksumAddress: i,
                        length: t,
                        parameter: { ...s, type: r },
                      });
                    }
                    if ("tuple" === s.type)
                      return (function (t, r) {
                        let { checksumAddress: n, parameter: i } = r,
                          s = !1,
                          o = [];
                        for (let r = 0; r < i.components.length; r++) {
                          let a = i.components[r],
                            l = Array.isArray(t) ? r : a.name,
                            c = e({
                              checksumAddress: n,
                              parameter: a,
                              value: t[l],
                            });
                          o.push(c), c.dynamic && (s = !0);
                        }
                        return {
                          dynamic: s,
                          encoded: s
                            ? l(o)
                            : a.concat(
                                ...o.map((e) => {
                                  let { encoded: t } = e;
                                  return t;
                                })
                              ),
                        };
                      })(c, { checksumAddress: i, parameter: s });
                    if ("address" === s.type) {
                      var p,
                        h = c,
                        v = { checksum: i };
                      let { checksum: e = !1 } = v;
                      return (
                        r.assert(h, { strict: e }),
                        { dynamic: !1, encoded: a.padLeft(h.toLowerCase()) }
                      );
                    }
                    if ("bool" === s.type) {
                      var b = c;
                      if ("boolean" != typeof b)
                        throw new n.BaseError(
                          'Invalid boolean value: "'
                            .concat(b, '" (type: ')
                            .concat(typeof b, "). Expected: `true` or `false`.")
                        );
                      return {
                        dynamic: !1,
                        encoded: a.padLeft(a.fromBoolean(b)),
                      };
                    }
                    if (s.type.startsWith("uint") || s.type.startsWith("int")) {
                      let e = s.type.startsWith("int"),
                        [, , t = "256"] = null != (p = o.exec(s.type)) ? p : [];
                      return (function (e, t) {
                        let { signed: r, size: n } = t;
                        if ("number" == typeof n) {
                          let t = 2n ** (BigInt(n) - (r ? 1n : 0n)) - 1n,
                            i = r ? -t - 1n : 0n;
                          if (e > t || e < i)
                            throw new a.IntegerOutOfRangeError({
                              max: t.toString(),
                              min: i.toString(),
                              signed: r,
                              size: n / 8,
                              value: e.toString(),
                            });
                        }
                        return {
                          dynamic: !1,
                          encoded: a.fromNumber(e, { size: 32, signed: r }),
                        };
                      })(c, { signed: e, size: Number(t) });
                    }
                    if (s.type.startsWith("bytes"))
                      return (function (e, t) {
                        let { type: r } = t,
                          [, n] = r.split("bytes"),
                          i = a.size(e);
                        if (!n) {
                          let t = e;
                          return (
                            i % 32 != 0 &&
                              (t = a.padRight(
                                t,
                                32 * Math.ceil((e.length - 2) / 2 / 32)
                              )),
                            {
                              dynamic: !0,
                              encoded: a.concat(
                                a.padLeft(a.fromNumber(i, { size: 32 })),
                                t
                              ),
                            }
                          );
                        }
                        if (i !== Number.parseInt(n))
                          throw new f({
                            expectedSize: Number.parseInt(n),
                            value: e,
                          });
                        return { dynamic: !1, encoded: a.padRight(e) };
                      })(c, { type: s.type });
                    if ("string" === s.type) {
                      var y = c;
                      let e = a.fromString(y),
                        t = Math.ceil(a.size(e) / 32),
                        r = [];
                      for (let n = 0; n < t; n++)
                        r.push(a.padRight(a.slice(e, 32 * n, (n + 1) * 32)));
                      return {
                        dynamic: !0,
                        encoded: a.concat(
                          a.padRight(a.fromNumber(a.size(e), { size: 32 })),
                          ...r
                        ),
                      };
                    }
                    throw new g(s.type);
                  })({ checksumAddress: t, parameter: i[e], value: s[e] })
                );
              return c;
            })({ checksumAddress: s, parameters: e, values: t })
          );
          return 0 === c.length ? "0x" : c;
        }
        function u(e, t) {
          if (e.length !== t.length)
            throw new p({ expectedLength: e.length, givenLength: t.length });
          let r = [];
          for (let n = 0; n < e.length; n++) {
            let a = e[n],
              i = t[n];
            r.push(u.encode(a, i));
          }
          return a.concat(...r);
        }
        new Uint8Array(),
          new DataView(new ArrayBuffer(0)),
          n.BaseError,
          n.BaseError,
          n.BaseError,
          ((u || (u = {})).encode = function e(t, n) {
            let l =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("address" === t)
              return r.assert(n), a.padLeft(n.toLowerCase(), 32 * !!l);
            if ("string" === t) return a.fromString(n);
            if ("bytes" === t) return n;
            if ("bool" === t) return a.padLeft(a.fromBoolean(n), l ? 32 : 1);
            let c = t.match(o);
            if (c) {
              let [e, t, r = "256"] = c,
                i = Number.parseInt(r) / 8;
              return a.fromNumber(n, { size: l ? 32 : i, signed: "int" === t });
            }
            let u = t.match(s);
            if (u) {
              let [e, t] = u;
              if (Number.parseInt(t) !== (n.length - 2) / 2)
                throw new f({ expectedSize: Number.parseInt(t), value: n });
              return a.padRight(n, 32 * !!l);
            }
            let d = t.match(i);
            if (d && Array.isArray(n)) {
              let [t, r] = d,
                i = [];
              for (let t = 0; t < n.length; t++) i.push(e(r, n[t], !0));
              return 0 === i.length ? "0x" : a.concat(...i);
            }
            throw new g(t);
          }),
          n.BaseError,
          n.BaseError;
        class d extends n.BaseError {
          constructor({ expectedLength: e, givenLength: t, type: r }) {
            super(
              "Array length mismatch for type `"
                .concat(r, "`. Expected: `")
                .concat(e, "`. Given: `")
                .concat(t, "`.")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiParameters.ArrayLengthMismatchError",
              });
          }
        }
        class f extends n.BaseError {
          constructor({ expectedSize: e, value: t }) {
            super(
              'Size of bytes "'
                .concat(t, '" (bytes')
                .concat(a.size(t), ") does not match expected size (bytes")
                .concat(e, ").")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiParameters.BytesSizeMismatchError",
              });
          }
        }
        class p extends n.BaseError {
          constructor({ expectedLength: e, givenLength: t }) {
            super(
              [
                "ABI encoding parameters/values length mismatch.",
                "Expected length (parameters): ".concat(e),
                "Given length (values): ".concat(t),
              ].join("\n")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiParameters.LengthMismatchError",
              });
          }
        }
        class m extends n.BaseError {
          constructor(e) {
            super("Value `".concat(e, "` is not a valid array.")),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiParameters.InvalidArrayError",
              });
          }
        }
        class g extends n.BaseError {
          constructor(e) {
            super("Type `".concat(e, "` is not a valid ABI Type.")),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "AbiParameters.InvalidTypeError",
              });
          }
        }
        function h(e) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t.from(e, r);
        }
        var v = e.i(326875);
        e.s({ ethAddress: () => b, zeroAddress: () => y }, 761922);
        let b = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          y = "0x0000000000000000000000000000000000000000";
        var w = e.i(194870),
          E = e.i(500780),
          A = e.i(906420),
          x = e.i(864198),
          B = e.i(660379),
          T = e.i(429492);
        async function C(e, r) {
          var n, i, s, o, l, u, d, f;
          let {
              blockNumber: p,
              blockTag: m,
              calls: g,
              stateOverrides: C,
              traceAssetChanges: k,
              traceTransfers: I,
              validation: N,
            } = r,
            R = r.account ? (0, v.parseAccount)(r.account) : void 0;
          if (k && !R)
            throw new E.BaseError(
              "`account` is required when `traceAssetChanges` is true"
            );
          let F = R
              ? (function (e, t) {
                  var r;
                  let { bytecode: n, args: i } = t;
                  return a.concat(
                    n,
                    (null == (r = e.inputs) ? void 0 : r.length) &&
                      (null == i ? void 0 : i.length)
                      ? c(e.inputs, i)
                      : "0x"
                  );
                })(t.from("constructor(bytes, bytes)"), {
                  bytecode: w.deploylessCallViaBytecodeBytecode,
                  args: [
                    "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                    (function (e) {
                      for (
                        var r,
                          n = arguments.length,
                          i = Array(n > 1 ? n - 1 : 0),
                          s = 1;
                        s < n;
                        s++
                      )
                        i[s - 1] = arguments[s];
                      let { overloads: o } = e,
                        l = o
                          ? (function (e, r, n) {
                              let a = t.fromAbi(e, r, n);
                              if ("function" !== a.type)
                                throw new t.NotFoundError({
                                  name: r,
                                  type: "function",
                                });
                              return a;
                            })([e, ...o], e.name, { args: i[0] })
                          : e,
                        u = ((r = l), t.getSelector(r)),
                        d = i.length > 0 ? c(l.inputs, i[0]) : void 0;
                      return d ? a.concat(u, d) : u;
                    })(h("function getBalance(address)"), [R.address]),
                  ],
                })
              : void 0,
            S = k
              ? await Promise.all(
                  r.calls.map(async (t) => {
                    if (!t.data && !t.abi) return;
                    let { accessList: r } = await (0, B.createAccessList)(e, {
                      account: R.address,
                      ...t,
                      data: t.abi ? (0, A.encodeFunctionData)(t) : t.data,
                    });
                    return r.map((e) => {
                      let { address: t, storageKeys: r } = e;
                      return r.length > 0 ? t : null;
                    });
                  })
                ).then((e) => e.flat().filter(Boolean))
              : [],
            L = await (0, T.simulateBlocks)(e, {
              blockNumber: p,
              blockTag: m,
              blocks: [
                ...(k
                  ? [
                      { calls: [{ data: F }], stateOverrides: C },
                      {
                        calls: S.map((e, t) => ({
                          abi: [
                            h("function balanceOf(address) returns (uint256)"),
                          ],
                          functionName: "balanceOf",
                          args: [R.address],
                          to: e,
                          from: y,
                          nonce: t,
                        })),
                        stateOverrides: [{ address: y, nonce: 0 }],
                      },
                    ]
                  : []),
                {
                  calls: [...g, {}].map((e) => ({
                    ...e,
                    from: null == R ? void 0 : R.address,
                  })),
                  stateOverrides: C,
                },
                ...(k
                  ? [
                      { calls: [{ data: F }] },
                      {
                        calls: S.map((e, t) => ({
                          abi: [
                            h("function balanceOf(address) returns (uint256)"),
                          ],
                          functionName: "balanceOf",
                          args: [R.address],
                          to: e,
                          from: y,
                          nonce: t,
                        })),
                        stateOverrides: [{ address: y, nonce: 0 }],
                      },
                      {
                        calls: S.map((e, t) => ({
                          to: e,
                          abi: [h("function decimals() returns (uint256)")],
                          functionName: "decimals",
                          from: y,
                          nonce: t,
                        })),
                        stateOverrides: [{ address: y, nonce: 0 }],
                      },
                      {
                        calls: S.map((e, t) => ({
                          to: e,
                          abi: [
                            h("function tokenURI(uint256) returns (string)"),
                          ],
                          functionName: "tokenURI",
                          args: [0n],
                          from: y,
                          nonce: t,
                        })),
                        stateOverrides: [{ address: y, nonce: 0 }],
                      },
                      {
                        calls: S.map((e, t) => ({
                          to: e,
                          abi: [h("function symbol() returns (string)")],
                          functionName: "symbol",
                          from: y,
                          nonce: t,
                        })),
                        stateOverrides: [{ address: y, nonce: 0 }],
                      },
                    ]
                  : []),
              ],
              traceTransfers: I,
              validation: N,
            }),
            P = k ? L[2] : L[0],
            [z, H, , D, U, O, M, q] = k ? L : [],
            { calls: _, ...j } = P,
            G = null != (n = _.slice(0, -1)) ? n : [],
            W = [
              ...(null != (i = null == z ? void 0 : z.calls) ? i : []),
              ...(null != (s = null == H ? void 0 : H.calls) ? s : []),
            ].map((e) =>
              "success" === e.status ? (0, x.hexToBigInt)(e.data) : null
            ),
            Z = [
              ...(null != (o = null == D ? void 0 : D.calls) ? o : []),
              ...(null != (l = null == U ? void 0 : U.calls) ? l : []),
            ].map((e) =>
              "success" === e.status ? (0, x.hexToBigInt)(e.data) : null
            ),
            $ = (null != (u = null == O ? void 0 : O.calls) ? u : []).map((e) =>
              "success" === e.status ? e.result : null
            ),
            V = (null != (d = null == q ? void 0 : q.calls) ? d : []).map((e) =>
              "success" === e.status ? e.result : null
            ),
            J = (null != (f = null == M ? void 0 : M.calls) ? f : []).map((e) =>
              "success" === e.status ? e.result : null
            ),
            K = [];
          for (let [e, t] of Z.entries()) {
            let r = W[e];
            if ("bigint" != typeof t || "bigint" != typeof r) continue;
            let n = $[e - 1],
              a = V[e - 1],
              i = J[e - 1],
              s =
                0 === e
                  ? { address: b, decimals: 18, symbol: "ETH" }
                  : {
                      address: S[e - 1],
                      decimals: i || n ? Number(null != n ? n : 1) : void 0,
                      symbol: null != a ? a : void 0,
                    };
            K.some((e) => e.token.address === s.address) ||
              K.push({ token: s, value: { pre: r, post: t, diff: t - r } });
          }
          return { assetChanges: K, block: j, results: G };
        }
      },
      [761922],
    ],
    905874: (e) => {
      "use strict";
      e.s({ simulateContract: () => o });
      var t = e.i(326875),
        r = e.i(622157),
        n = e.i(906420),
        a = e.i(849993),
        i = e.i(477379),
        s = e.i(315573);
      async function o(e, o) {
        let {
            abi: l,
            address: c,
            args: u,
            dataSuffix: d,
            functionName: f,
            ...p
          } = o,
          m = p.account ? (0, t.parseAccount)(p.account) : e.account,
          g = (0, n.encodeFunctionData)({ abi: l, args: u, functionName: f });
        try {
          let { data: t } = await (0, i.getAction)(
              e,
              s.call,
              "call"
            )({
              batch: !1,
              data: "".concat(g).concat(d ? d.replace("0x", "") : ""),
              to: c,
              ...p,
              account: m,
            }),
            n = (0, r.decodeFunctionResult)({
              abi: l,
              args: u,
              functionName: f,
              data: t || "0x",
            }),
            a = l.filter((e) => "name" in e && e.name === o.functionName);
          return {
            result: n,
            request: {
              abi: a,
              address: c,
              args: u,
              dataSuffix: d,
              functionName: f,
              ...p,
              account: m,
            },
          };
        } catch (e) {
          throw (0, a.getContractError)(e, {
            abi: l,
            address: c,
            args: u,
            docsPath: "/docs/contract/simulateContract",
            functionName: f,
            sender: null == m ? void 0 : m.address,
          });
        }
      }
    },
    590059: [
      (e) => {
        "use strict";
        e.s({ verifyMessage: () => k }, 590059);
        var t,
          r = e.i(987880);
        e.s({ verifyHash: () => C }, 461733);
        var n = e.i(275982),
          a = e.i(194870),
          i = e.i(994790),
          s = e.i(667702),
          o = e.i(549798),
          l = e.i(429921),
          c = e.i(212629),
          u = e.i(994290),
          d = e.i(477379),
          f = e.i(906420),
          p = e.i(864198);
        e.s({ isErc6492Signature: () => v }, 147224),
          e.s({ erc6492MagicBytes: () => m, zeroHash: () => g }, 992638);
        let m =
            "0x6492649264926492649264926492649264926492649264926492649264926492",
          g =
            "0x0000000000000000000000000000000000000000000000000000000000000000";
        var h = e.i(410647);
        function v(e) {
          return (0, h.sliceHex)(e, -32) === m;
        }
        var b = e.i(509182);
        e.s({ serializeErc6492Signature: () => A }, 883449);
        var y = e.i(750671),
          w = e.i(115481),
          E = e.i(919717);
        function A(e) {
          let { address: t, data: r, signature: n, to: a = "hex" } = e,
            i = (0, w.concatHex)([
              (0, y.encodeAbiParameters)(
                [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
                [t, r, n]
              ),
              m,
            ]);
          return "hex" === a ? i : (0, E.hexToBytes)(i);
        }
        e.s({ serializeSignature: () => B }, 721362);
        var x = e.i(491104);
        function B(e) {
          let { r: t, s: r, to: n = "hex", v: a, yParity: i } = e,
            s = (() => {
              if (0 === i || 1 === i) return i;
              if (a && (27n === a || 28n === a || a >= 35n))
                return +(a % 2n === 0n);
              throw Error("Invalid `v` or `yParity` value");
            })(),
            o = "0x"
              .concat(
                new x.secp256k1.Signature(
                  (0, p.hexToBigInt)(t),
                  (0, p.hexToBigInt)(r)
                ).toCompactHex()
              )
              .concat(0 === s ? "1b" : "1c");
          return "hex" === n ? o : (0, E.hexToBytes)(o);
        }
        var T = e.i(315573);
        async function C(e, t) {
          var r, m, g;
          let {
              address: h,
              factory: y,
              factoryData: w,
              hash: E,
              signature: x,
              universalSignatureVerifierAddress: C = null == (g = e.chain) ||
              null == (m = g.contracts) ||
              null == (r = m.universalSignatureVerifier)
                ? void 0
                : r.address,
              ...k
            } = t,
            I = (0, c.isHex)(x)
              ? x
              : "object" == typeof x && "r" in x && "s" in x
              ? B(x)
              : (0, u.bytesToHex)(x),
            N = await (async () =>
              (!y && !w) || v(I)
                ? I
                : A({ address: y, data: w, signature: I }))();
          try {
            let t = C
                ? {
                    to: C,
                    data: (0, f.encodeFunctionData)({
                      abi: n.universalSignatureValidatorAbi,
                      functionName: "isValidSig",
                      args: [h, E, N],
                    }),
                    ...k,
                  }
                : {
                    data: (0, s.encodeDeployData)({
                      abi: n.universalSignatureValidatorAbi,
                      args: [h, E, N],
                      bytecode: a.universalSignatureValidatorByteCode,
                    }),
                    ...k,
                  },
              { data: r } = await (0, d.getAction)(e, T.call, "call")(t);
            return (0, p.hexToBool)(null != r ? r : "0x0");
          } catch (e) {
            try {
              if (
                (0, l.isAddressEqual)(
                  (0, o.getAddress)(h),
                  await (0, b.recoverAddress)({ hash: E, signature: x })
                )
              )
                return !0;
            } catch (e) {}
            if (e instanceof i.CallExecutionError) return !1;
            throw e;
          }
        }
        async function k(e, t) {
          let {
            address: n,
            message: a,
            factory: i,
            factoryData: s,
            signature: o,
            ...l
          } = t;
          return C(e, {
            address: n,
            factory: i,
            factoryData: s,
            hash: (0, r.hashMessage)(a),
            signature: o,
            ...l,
          });
        }
        e.s({ verifyTypedData: () => N }, 734126);
        var I = e.i(754444);
        async function N(e, t) {
          let {
            address: r,
            factory: n,
            factoryData: a,
            signature: i,
            message: s,
            primaryType: o,
            types: l,
            domain: c,
            ...u
          } = t;
          return C(e, {
            address: r,
            factory: n,
            factoryData: a,
            hash: (0, I.hashTypedData)({
              message: s,
              primaryType: o,
              types: l,
              domain: c,
            }),
            signature: i,
            ...u,
          });
        }
        e.s({ watchBlocks: () => P }, 692747);
        var R = e.i(308989),
          F = e.i(207212),
          S = e.i(383478),
          L = e.i(508914);
        function P(e, r) {
          let n,
            a,
            i,
            s,
            {
              blockTag: o = null != (t = e.experimental_blockTag)
                ? t
                : "latest",
              emitMissed: l = !1,
              emitOnBegin: c = !1,
              onBlock: u,
              onError: f,
              includeTransactions: p,
              poll: m,
              pollingInterval: g = e.pollingInterval,
            } = r,
            h =
              void 0 !== m
                ? m
                : "webSocket" !== e.transport.type &&
                  "ipc" !== e.transport.type &&
                  ("fallback" !== e.transport.type ||
                    ("webSocket" !== e.transport.transports[0].config.type &&
                      "ipc" !== e.transport.transports[0].config.type)),
            v = null != p && p;
          return h
            ? (() => {
                let t = (0, S.stringify)(["watchBlocks", e.uid, o, l, c, v, g]);
                return (0, R.observe)(t, { onBlock: u, onError: f }, (t) =>
                  (0, F.poll)(
                    async () => {
                      try {
                        let r = await (0, d.getAction)(
                          e,
                          L.getBlock,
                          "getBlock"
                        )({ blockTag: o, includeTransactions: v });
                        if (
                          null !== r.number &&
                          (null == s ? void 0 : s.number) != null
                        ) {
                          if (r.number === s.number) return;
                          if (r.number - s.number > 1 && l)
                            for (
                              let n = (null == s ? void 0 : s.number) + 1n;
                              n < r.number;
                              n++
                            ) {
                              let r = await (0, d.getAction)(
                                e,
                                L.getBlock,
                                "getBlock"
                              )({ blockNumber: n, includeTransactions: v });
                              t.onBlock(r, s), (s = r);
                            }
                        }
                        ((null == s ? void 0 : s.number) == null ||
                          ("pending" === o &&
                            (null == r ? void 0 : r.number) == null) ||
                          (null !== r.number && r.number > s.number)) &&
                          (t.onBlock(r, s), (s = r));
                      } catch (e) {
                        var r;
                        null == (r = t.onError) || r.call(t, e);
                      }
                    },
                    { emitOnBegin: c, interval: g }
                  )
                );
              })()
            : ((n = !0),
              (a = !0),
              (i = () => (n = !1)),
              (async () => {
                try {
                  c &&
                    (0, d.getAction)(
                      e,
                      L.getBlock,
                      "getBlock"
                    )({ blockTag: o, includeTransactions: v })
                      .then((e) => {
                        n && a && (u(e, void 0), (a = !1));
                      })
                      .catch(f);
                  let t = (() => {
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
                    { unsubscribe: r } = await t.subscribe({
                      params: ["newHeads"],
                      async onData(t) {
                        var r;
                        if (!n) return;
                        let i = await (0, d.getAction)(
                          e,
                          L.getBlock,
                          "getBlock"
                        )({
                          blockNumber:
                            null == (r = t.result) ? void 0 : r.number,
                          includeTransactions: v,
                        }).catch(() => {});
                        n && (u(i, s), (a = !1), (s = i));
                      },
                      onError(e) {
                        null == f || f(e);
                      },
                    });
                  (i = r), n || i();
                } catch (e) {
                  null == f || f(e);
                }
              })(),
              () => i());
        }
      },
      [992638, 147224, 883449, 721362, 461733, 734126, 692747],
    ],
    119353: (e) => {
      "use strict";
      e.s({ watchContractEvent: () => g });
      var t = e.i(787769),
        r = e.i(592677),
        n = e.i(812699),
        a = e.i(877303),
        i = e.i(519464),
        s = e.i(477379),
        o = e.i(308989),
        l = e.i(207212),
        c = e.i(383478),
        u = e.i(139449),
        d = e.i(446985),
        f = e.i(811335),
        p = e.i(579681),
        m = e.i(237301);
      function g(e, g) {
        let {
          abi: h,
          address: v,
          args: b,
          batch: y = !0,
          eventName: w,
          fromBlock: E,
          onError: A,
          onLogs: x,
          poll: B,
          pollingInterval: T = e.pollingInterval,
          strict: C,
        } = g;
        return (
          void 0 !== B
            ? B
            : "bigint" == typeof E ||
              ("webSocket" !== e.transport.type &&
                "ipc" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  ("webSocket" !== e.transport.transports[0].config.type &&
                    "ipc" !== e.transport.transports[0].config.type)))
        )
          ? (() => {
              let t = null != C && C,
                n = (0, c.stringify)([
                  "watchContractEvent",
                  v,
                  b,
                  y,
                  e.uid,
                  w,
                  T,
                  t,
                  E,
                ]);
              return (0, o.observe)(n, { onLogs: x, onError: A }, (n) => {
                let a, i;
                void 0 !== E && (a = E - 1n);
                let o = !1,
                  c = (0, l.poll)(
                    async () => {
                      if (!o) {
                        try {
                          i = await (0, s.getAction)(
                            e,
                            u.createContractEventFilter,
                            "createContractEventFilter"
                          )({
                            abi: h,
                            address: v,
                            args: b,
                            eventName: w,
                            strict: t,
                            fromBlock: E,
                          });
                        } catch (e) {}
                        o = !0;
                        return;
                      }
                      try {
                        let r;
                        if (i)
                          r = await (0, s.getAction)(
                            e,
                            p.getFilterChanges,
                            "getFilterChanges"
                          )({ filter: i });
                        else {
                          let n = await (0, s.getAction)(
                            e,
                            d.getBlockNumber,
                            "getBlockNumber"
                          )({});
                          (r =
                            a && a < n
                              ? await (0, s.getAction)(
                                  e,
                                  f.getContractEvents,
                                  "getContractEvents"
                                )({
                                  abi: h,
                                  address: v,
                                  args: b,
                                  eventName: w,
                                  fromBlock: a + 1n,
                                  toBlock: n,
                                  strict: t,
                                })
                              : []),
                            (a = n);
                        }
                        if (0 === r.length) return;
                        if (y) n.onLogs(r);
                        else for (let e of r) n.onLogs([e]);
                      } catch (e) {
                        var l;
                        i && e instanceof r.InvalidInputRpcError && (o = !1),
                          null == (l = n.onError) || l.call(n, e);
                      }
                    },
                    { emitOnBegin: !0, interval: T }
                  );
                return async () => {
                  i &&
                    (await (0, s.getAction)(
                      e,
                      m.uninstallFilter,
                      "uninstallFilter"
                    )({ filter: i })),
                    c();
                };
              });
            })()
          : (() => {
              let r = (0, c.stringify)([
                  "watchContractEvent",
                  v,
                  b,
                  y,
                  e.uid,
                  w,
                  T,
                  null != C && C,
                ]),
                s = !0,
                l = () => (s = !1);
              return (0, o.observe)(
                r,
                { onLogs: x, onError: A },
                (r) => (
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
                        c = w
                          ? (0, a.encodeEventTopics)({
                              abi: h,
                              eventName: w,
                              args: b,
                            })
                          : [],
                        { unsubscribe: u } = await o.subscribe({
                          params: ["logs", { address: v, topics: c }],
                          onData(e) {
                            if (!s) return;
                            let a = e.result;
                            try {
                              let { eventName: e, args: t } = (0,
                                n.decodeEventLog)({
                                  abi: h,
                                  data: a.data,
                                  topics: a.topics,
                                  strict: C,
                                }),
                                s = (0, i.formatLog)(a, {
                                  args: t,
                                  eventName: e,
                                });
                              r.onLogs([s]);
                            } catch (l) {
                              let e, n;
                              if (
                                l instanceof t.DecodeLogDataMismatch ||
                                l instanceof t.DecodeLogTopicsMismatch
                              ) {
                                var o;
                                if (C) return;
                                (e = l.abiItem.name),
                                  (n =
                                    null == (o = l.abiItem.inputs)
                                      ? void 0
                                      : o.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                              }
                              let s = (0, i.formatLog)(a, {
                                args: n ? [] : {},
                                eventName: e,
                              });
                              r.onLogs([s]);
                            }
                          },
                          onError(e) {
                            var t;
                            null == (t = r.onError) || t.call(r, e);
                          },
                        });
                      (l = u), s || l();
                    } catch (e) {
                      null == A || A(e);
                    }
                  })(),
                  () => l()
                )
              );
            })();
      }
    },
    530033: [
      (e) => {
        "use strict";
        e.s({ createPublicClient: () => eg }, 530033);
        var t = e.i(233349);
        e.s({ publicActions: () => em }, 326345);
        var r = e.i(590942),
          n = e.i(685103),
          a = e.i(431716),
          i = e.i(586423),
          s = e.i(768598),
          o = e.i(315573),
          l = e.i(660379),
          c = e.i(910837),
          u = e.i(139449),
          d = e.i(710667),
          f = e.i(129789),
          p = e.i(209499),
          m = e.i(710456),
          g = e.i(595828),
          h = e.i(488495),
          v = e.i(757859),
          b = e.i(813453),
          y = e.i(508914),
          w = e.i(446985),
          E = e.i(432448),
          A = e.i(262267),
          x = e.i(133620),
          B = e.i(811335),
          T = e.i(248370),
          C = e.i(261492),
          k = e.i(579681),
          I = e.i(588801),
          N = e.i(267693),
          R = e.i(208774),
          F = e.i(705233),
          S = e.i(712593),
          L = e.i(94874),
          P = e.i(278787),
          z = e.i(412544),
          H = e.i(384091),
          D = e.i(362360),
          U = e.i(107511),
          O = e.i(429492),
          M = e.i(851617),
          q = e.i(905874),
          _ = e.i(237301),
          j = e.i(590059),
          G = e.i(734126),
          W = e.i(460029),
          Z = e.i(657389),
          $ = e.i(692747),
          V = e.i(119353),
          J = e.i(877303),
          K = e.i(308989),
          Q = e.i(207212),
          X = e.i(383478),
          Y = e.i(787769),
          ee = e.i(592677),
          et = e.i(812699),
          er = e.i(519464),
          en = e.i(477379),
          ea = e.i(59948),
          ei = e.i(987880);
        let es = RegExp(
            "^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\\/\\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\\n)(?<address>0x[a-fA-F0-9]{40})\\n\\n(?:(?<statement>.*)\\n\\n)?"
          ),
          eo = RegExp(
            "(?:URI: (?<uri>.+))\\n(?:Version: (?<version>.+))\\n(?:Chain ID: (?<chainId>\\d+))\\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\\n(?:Issued At: (?<issuedAt>.+))(?:\\nExpiration Time: (?<expirationTime>.+))?(?:\\nNot Before: (?<notBefore>.+))?(?:\\nRequest ID: (?<requestId>.+))?"
          );
        var el = e.i(259123),
          ec = e.i(429921),
          eu = e.i(461733);
        async function ed(e, t) {
          let {
              address: r,
              domain: n,
              message: a,
              nonce: i,
              scheme: s,
              signature: o,
              time: l = new Date(),
              ...c
            } = t,
            u = (function (e) {
              var t, r, n, a, i;
              let {
                  scheme: s,
                  statement: o,
                  ...l
                } = null != (a = null == (t = e.match(es)) ? void 0 : t.groups)
                  ? a
                  : {},
                {
                  chainId: c,
                  expirationTime: u,
                  issuedAt: d,
                  notBefore: f,
                  requestId: p,
                  ...m
                } = null != (i = null == (r = e.match(eo)) ? void 0 : r.groups)
                  ? i
                  : {},
                g =
                  null == (n = e.split("Resources:")[1])
                    ? void 0
                    : n.split("\n- ").slice(1);
              return {
                ...l,
                ...m,
                ...(c ? { chainId: Number(c) } : {}),
                ...(u ? { expirationTime: new Date(u) } : {}),
                ...(d ? { issuedAt: new Date(d) } : {}),
                ...(f ? { notBefore: new Date(f) } : {}),
                ...(p ? { requestId: p } : {}),
                ...(g ? { resources: g } : {}),
                ...(s ? { scheme: s } : {}),
                ...(o ? { statement: o } : {}),
              };
            })(a);
          if (
            !u.address ||
            !(function (e) {
              let {
                address: t,
                domain: r,
                message: n,
                nonce: a,
                scheme: i,
                time: s = new Date(),
              } = e;
              if (
                (r && n.domain !== r) ||
                (a && n.nonce !== a) ||
                (i && n.scheme !== i) ||
                (n.expirationTime && s >= n.expirationTime) ||
                (n.notBefore && s < n.notBefore)
              )
                return !1;
              try {
                if (
                  !n.address ||
                  !(0, el.isAddress)(n.address, { strict: !1 }) ||
                  (t && !(0, ec.isAddressEqual)(n.address, t))
                )
                  return !1;
              } catch (e) {
                return !1;
              }
              return !0;
            })({
              address: r,
              domain: n,
              message: u,
              nonce: i,
              scheme: s,
              time: l,
            })
          )
            return !1;
          let d = (0, ei.hashMessage)(a);
          return (0, eu.verifyHash)(e, {
            address: u.address,
            hash: d,
            signature: o,
            ...c,
          });
        }
        var ef = e.i(936154),
          ep = e.i(229383);
        function em(e) {
          return {
            call: (t) => (0, o.call)(e, t),
            createAccessList: (t) => (0, l.createAccessList)(e, t),
            createBlockFilter: () => (0, c.createBlockFilter)(e),
            createContractEventFilter: (t) =>
              (0, u.createContractEventFilter)(e, t),
            createEventFilter: (t) => (0, d.createEventFilter)(e, t),
            createPendingTransactionFilter: () =>
              (0, f.createPendingTransactionFilter)(e),
            estimateContractGas: (t) => (0, p.estimateContractGas)(e, t),
            estimateGas: (t) => (0, g.estimateGas)(e, t),
            getBalance: (t) => (0, v.getBalance)(e, t),
            getBlobBaseFee: () => (0, b.getBlobBaseFee)(e),
            getBlock: (t) => (0, y.getBlock)(e, t),
            getBlockNumber: (t) => (0, w.getBlockNumber)(e, t),
            getBlockTransactionCount: (t) =>
              (0, E.getBlockTransactionCount)(e, t),
            getBytecode: (t) => (0, x.getCode)(e, t),
            getChainId: () => (0, A.getChainId)(e),
            getCode: (t) => (0, x.getCode)(e, t),
            getContractEvents: (t) => (0, B.getContractEvents)(e, t),
            getEip712Domain: (t) => (0, T.getEip712Domain)(e, t),
            getEnsAddress: (t) => (0, r.getEnsAddress)(e, t),
            getEnsAvatar: (t) => (0, n.getEnsAvatar)(e, t),
            getEnsName: (t) => (0, a.getEnsName)(e, t),
            getEnsResolver: (t) => (0, i.getEnsResolver)(e, t),
            getEnsText: (t) => (0, s.getEnsText)(e, t),
            getFeeHistory: (t) => (0, C.getFeeHistory)(e, t),
            estimateFeesPerGas: (t) => (0, m.estimateFeesPerGas)(e, t),
            getFilterChanges: (t) => (0, k.getFilterChanges)(e, t),
            getFilterLogs: (t) => (0, I.getFilterLogs)(e, t),
            getGasPrice: () => (0, N.getGasPrice)(e),
            getLogs: (t) => (0, R.getLogs)(e, t),
            getProof: (t) => (0, F.getProof)(e, t),
            estimateMaxPriorityFeePerGas: (t) =>
              (0, h.estimateMaxPriorityFeePerGas)(e, t),
            getStorageAt: (t) => (0, S.getStorageAt)(e, t),
            getTransaction: (t) => (0, L.getTransaction)(e, t),
            getTransactionConfirmations: (t) =>
              (0, P.getTransactionConfirmations)(e, t),
            getTransactionCount: (t) => (0, z.getTransactionCount)(e, t),
            getTransactionReceipt: (t) => (0, H.getTransactionReceipt)(e, t),
            multicall: (t) => (0, D.multicall)(e, t),
            prepareTransactionRequest: (t) =>
              (0, ef.prepareTransactionRequest)(e, t),
            readContract: (t) => (0, U.readContract)(e, t),
            sendRawTransaction: (t) => (0, ep.sendRawTransaction)(e, t),
            simulate: (t) => (0, O.simulateBlocks)(e, t),
            simulateBlocks: (t) => (0, O.simulateBlocks)(e, t),
            simulateCalls: (t) => (0, M.simulateCalls)(e, t),
            simulateContract: (t) => (0, q.simulateContract)(e, t),
            verifyMessage: (t) => (0, j.verifyMessage)(e, t),
            verifySiweMessage: (t) => ed(e, t),
            verifyTypedData: (t) => (0, G.verifyTypedData)(e, t),
            uninstallFilter: (t) => (0, _.uninstallFilter)(e, t),
            waitForTransactionReceipt: (t) =>
              (0, W.waitForTransactionReceipt)(e, t),
            watchBlocks: (t) => (0, $.watchBlocks)(e, t),
            watchBlockNumber: (t) => (0, Z.watchBlockNumber)(e, t),
            watchContractEvent: (t) => (0, V.watchContractEvent)(e, t),
            watchEvent: (t) =>
              (function (e, t) {
                let r,
                  n,
                  {
                    address: a,
                    args: i,
                    batch: s = !0,
                    event: o,
                    events: l,
                    fromBlock: c,
                    onError: u,
                    onLogs: f,
                    poll: p,
                    pollingInterval: m = e.pollingInterval,
                    strict: g,
                  } = t,
                  h =
                    void 0 !== p
                      ? p
                      : "bigint" == typeof c ||
                        ("webSocket" !== e.transport.type &&
                          "ipc" !== e.transport.type &&
                          ("fallback" !== e.transport.type ||
                            ("webSocket" !==
                              e.transport.transports[0].config.type &&
                              "ipc" !==
                                e.transport.transports[0].config.type))),
                  v = null != g && g;
                return h
                  ? (() => {
                      let t = (0, X.stringify)([
                        "watchEvent",
                        a,
                        i,
                        s,
                        e.uid,
                        o,
                        m,
                        c,
                      ]);
                      return (0, K.observe)(
                        t,
                        { onLogs: f, onError: u },
                        (t) => {
                          let r, n;
                          void 0 !== c && (r = c - 1n);
                          let u = !1,
                            f = (0, Q.poll)(
                              async () => {
                                if (!u) {
                                  try {
                                    n = await (0, en.getAction)(
                                      e,
                                      d.createEventFilter,
                                      "createEventFilter"
                                    )({
                                      address: a,
                                      args: i,
                                      event: o,
                                      events: l,
                                      strict: v,
                                      fromBlock: c,
                                    });
                                  } catch (e) {}
                                  u = !0;
                                  return;
                                }
                                try {
                                  let c;
                                  if (n)
                                    c = await (0, en.getAction)(
                                      e,
                                      k.getFilterChanges,
                                      "getFilterChanges"
                                    )({ filter: n });
                                  else {
                                    let t = await (0, en.getAction)(
                                      e,
                                      w.getBlockNumber,
                                      "getBlockNumber"
                                    )({});
                                    (c =
                                      r && r !== t
                                        ? await (0, en.getAction)(
                                            e,
                                            R.getLogs,
                                            "getLogs"
                                          )({
                                            address: a,
                                            args: i,
                                            event: o,
                                            events: l,
                                            fromBlock: r + 1n,
                                            toBlock: t,
                                          })
                                        : []),
                                      (r = t);
                                  }
                                  if (0 === c.length) return;
                                  if (s) t.onLogs(c);
                                  else for (let e of c) t.onLogs([e]);
                                } catch (e) {
                                  var f;
                                  n &&
                                    e instanceof ee.InvalidInputRpcError &&
                                    (u = !1),
                                    null == (f = t.onError) || f.call(t, e);
                                }
                              },
                              { emitOnBegin: !0, interval: m }
                            );
                          return async () => {
                            n &&
                              (await (0, en.getAction)(
                                e,
                                _.uninstallFilter,
                                "uninstallFilter"
                              )({ filter: n })),
                              f();
                          };
                        }
                      );
                    })()
                  : ((r = !0),
                    (n = () => (r = !1)),
                    (async () => {
                      try {
                        let t = (() => {
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
                          s = null != l ? l : o ? [o] : void 0,
                          c = [];
                        s &&
                          ((c = [
                            s.flatMap((e) =>
                              (0, J.encodeEventTopics)({
                                abi: [e],
                                eventName: e.name,
                                args: i,
                              })
                            ),
                          ]),
                          o && (c = c[0]));
                        let { unsubscribe: d } = await t.subscribe({
                          params: ["logs", { address: a, topics: c }],
                          onData(e) {
                            if (!r) return;
                            let t = e.result;
                            try {
                              let { eventName: e, args: r } = (0,
                                et.decodeEventLog)({
                                  abi: null != s ? s : [],
                                  data: t.data,
                                  topics: t.topics,
                                  strict: v,
                                }),
                                n = (0, er.formatLog)(t, {
                                  args: r,
                                  eventName: e,
                                });
                              f([n]);
                            } catch (i) {
                              let e, r;
                              if (
                                i instanceof Y.DecodeLogDataMismatch ||
                                i instanceof Y.DecodeLogTopicsMismatch
                              ) {
                                var n;
                                if (g) return;
                                (e = i.abiItem.name),
                                  (r =
                                    null == (n = i.abiItem.inputs)
                                      ? void 0
                                      : n.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                              }
                              let a = (0, er.formatLog)(t, {
                                args: r ? [] : {},
                                eventName: e,
                              });
                              f([a]);
                            }
                          },
                          onError(e) {
                            null == u || u(e);
                          },
                        });
                        (n = d), r || n();
                      } catch (e) {
                        null == u || u(e);
                      }
                    })(),
                    () => n());
              })(e, t),
            watchPendingTransactions: (t) =>
              (0, ea.watchPendingTransactions)(e, t),
          };
        }
        function eg(e) {
          let { key: r = "public", name: n = "Public Client" } = e;
          return (0, t.createClient)({
            ...e,
            key: r,
            name: n,
            type: "publicClient",
          }).extend(em);
        }
        e.s({ prepareAuthorization: () => eb }, 766728);
        var eh = e.i(326875),
          ev = e.i(31876);
        async function eb(e, t) {
          var r, n, a;
          let { account: i = e.account, chainId: s, nonce: o } = t;
          if (!i)
            throw new ev.AccountNotFoundError({
              docsPath: "/docs/eip7702/prepareAuthorization",
            });
          let l = (0, eh.parseAccount)(i),
            c = (() => {
              if (t.executor)
                return "self" === t.executor
                  ? t.executor
                  : (0, eh.parseAccount)(t.executor);
            })(),
            u = {
              address: null != (n = t.contractAddress) ? n : t.address,
              chainId: s,
              nonce: o,
            };
          return (
            void 0 === u.chainId &&
              (u.chainId =
                null != (a = null == (r = e.chain) ? void 0 : r.id)
                  ? a
                  : await (0, en.getAction)(e, A.getChainId, "getChainId")({})),
            void 0 === u.nonce &&
              ((u.nonce = await (0, en.getAction)(
                e,
                z.getTransactionCount,
                "getTransactionCount"
              )({ address: l.address, blockTag: "pending" })),
              ("self" === c ||
                ((null == c ? void 0 : c.address) &&
                  (0, ec.isAddressEqual)(c.address, l.address))) &&
                (u.nonce += 1)),
            u
          );
        }
      },
      [326345, 766728],
    ],
    249423: [
      (e) => {
        "use strict";
        e.s(
          {
            WaitForCallsStatusTimeoutError: () => A,
            waitForCallsStatus: () => E,
          },
          249423
        );
        var t = e.i(500780),
          r = e.i(308989),
          n = e.i(207212),
          a = e.i(78903),
          i = e.i(383478);
        e.s({ getCallsStatus: () => w }, 293228);
        var s = e.i(410647),
          o = e.i(569103),
          l = e.i(864198),
          c = e.i(960905);
        e.s(
          {
            fallbackMagicIdentifier: () => v,
            fallbackTransactionErrorMagicIdentifier: () => b,
            sendCalls: () => y,
          },
          322870
        );
        var u = e.i(326875),
          d = e.i(592677),
          f = e.i(906420),
          p = e.i(115481),
          m = e.i(994290),
          g = e.i(753315),
          h = e.i(913948);
        let v =
            "0x5792579257925792579257925792579257925792579257925792579257925792",
          b = (0, m.numberToHex)(0, { size: 32 });
        async function y(e, r) {
          let {
              account: n = e.account,
              capabilities: a,
              chain: i = e.chain,
              experimental_fallback: s,
              experimental_fallbackDelay: o = 32,
              forceAtomic: c = !1,
              id: y,
              version: w = "2.0.0",
            } = r,
            E = n ? (0, u.parseAccount)(n) : null,
            A = r.calls.map((e) => {
              let t = e.abi
                ? (0, f.encodeFunctionData)({
                    abi: e.abi,
                    functionName: e.functionName,
                    args: e.args,
                  })
                : e.data;
              return {
                data: e.dataSuffix && t ? (0, p.concat)([t, e.dataSuffix]) : t,
                to: e.to,
                value: e.value ? (0, m.numberToHex)(e.value) : void 0,
              };
            });
          try {
            let t = await e.request(
              {
                method: "wallet_sendCalls",
                params: [
                  {
                    atomicRequired: c,
                    calls: A,
                    capabilities: a,
                    chainId: (0, m.numberToHex)(i.id),
                    from: null == E ? void 0 : E.address,
                    id: y,
                    version: w,
                  },
                ],
              },
              { retryCount: 0 }
            );
            if ("string" == typeof t) return { id: t };
            return t;
          } catch (n) {
            if (
              s &&
              ("MethodNotFoundRpcError" === n.name ||
                "MethodNotSupportedRpcError" === n.name ||
                "UnknownRpcError" === n.name ||
                n.details
                  .toLowerCase()
                  .includes("does not exist / is not available") ||
                n.details
                  .toLowerCase()
                  .includes("missing or invalid. request()") ||
                n.details
                  .toLowerCase()
                  .includes("did not match any variant of untagged enum") ||
                n.details
                  .toLowerCase()
                  .includes("account upgraded to unsupported contract") ||
                n.details.toLowerCase().includes("eip-7702 not supported") ||
                n.details.toLowerCase().includes("unsupported wc_ method"))
            ) {
              if (a && Object.values(a).some((e) => !e.optional)) {
                let e =
                  "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
                throw new d.UnsupportedNonOptionalCapabilityError(
                  new t.BaseError(e, { details: e })
                );
              }
              if (c && A.length > 1) {
                let e =
                  "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
                throw new d.AtomicityNotSupportedError(
                  new t.BaseError(e, { details: e })
                );
              }
              let r = [];
              for (let t of A) {
                let n = (0, h.sendTransaction)(e, {
                  account: E,
                  chain: i,
                  data: t.data,
                  to: t.to,
                  value: t.value ? (0, l.hexToBigInt)(t.value) : void 0,
                });
                r.push(n),
                  o > 0 && (await new Promise((e) => setTimeout(e, o)));
              }
              let n = await Promise.allSettled(r);
              if (n.every((e) => "rejected" === e.status)) throw n[0].reason;
              let s = n.map((e) => ("fulfilled" === e.status ? e.value : b));
              return {
                id: (0, p.concat)([
                  ...s,
                  (0, m.numberToHex)(i.id, { size: 32 }),
                  v,
                ]),
              };
            }
            throw (0, g.getTransactionError)(n, {
              ...r,
              account: E,
              chain: r.chain,
            });
          }
        }
        async function w(e, t) {
          var r;
          async function n(t) {
            if (t.endsWith(v.slice(2))) {
              let r = (0, o.trim)((0, s.sliceHex)(t, -64, -32)),
                n = (0, s.sliceHex)(t, 0, -64)
                  .slice(2)
                  .match(/.{1,64}/g),
                a = await Promise.all(
                  n.map((t) =>
                    b.slice(2) !== t
                      ? e.request(
                          {
                            method: "eth_getTransactionReceipt",
                            params: ["0x".concat(t)],
                          },
                          { dedupe: !0 }
                        )
                      : void 0
                  )
                ),
                i = a.some((e) => null === e)
                  ? 100
                  : a.every((e) => (null == e ? void 0 : e.status) === "0x1")
                  ? 200
                  : a.every((e) => (null == e ? void 0 : e.status) === "0x0")
                  ? 500
                  : 600;
              return {
                atomic: !1,
                chainId: (0, l.hexToNumber)(r),
                receipts: a.filter(Boolean),
                status: i,
                version: "2.0.0",
              };
            }
            return e.request({ method: "wallet_getCallsStatus", params: [t] });
          }
          let {
              atomic: a = !1,
              chainId: i,
              receipts: u,
              version: d = "2.0.0",
              ...f
            } = await n(t.id),
            [p, m] = (() => {
              let e = f.status;
              return e >= 100 && e < 200
                ? ["pending", e]
                : e >= 200 && e < 300
                ? ["success", e]
                : e >= 300 && e < 700
                ? ["failure", e]
                : "CONFIRMED" === e
                ? ["success", 200]
                : "PENDING" === e
                ? ["pending", 100]
                : [void 0, e];
            })();
          return {
            ...f,
            atomic: a,
            chainId: i ? (0, l.hexToNumber)(i) : void 0,
            receipts:
              null !=
              (r =
                null == u
                  ? void 0
                  : u.map((e) => ({
                      ...e,
                      blockNumber: (0, l.hexToBigInt)(e.blockNumber),
                      gasUsed: (0, l.hexToBigInt)(e.gasUsed),
                      status: c.receiptStatuses[e.status],
                    })))
                ? r
                : [],
            statusCode: m,
            status: p,
            version: d,
          };
        }
        async function E(e, t) {
          let s,
            {
              id: o,
              pollingInterval: l = e.pollingInterval,
              status: c = (e) => {
                let { statusCode: t } = e;
                return t >= 200;
              },
              timeout: u = 6e4,
            } = t,
            d = (0, i.stringify)(["waitForCallsStatus", e.uid, o]),
            { promise: f, resolve: p, reject: m } = (0, a.withResolvers)(),
            g = (0, r.observe)(d, { resolve: p, reject: m }, (t) => {
              let r = (0, n.poll)(
                async () => {
                  let n = (e) => {
                    clearTimeout(s), r(), e(), g();
                  };
                  try {
                    let r = await w(e, { id: o });
                    if (!c(r)) return;
                    n(() => t.resolve(r));
                  } catch (e) {
                    n(() => t.reject(e));
                  }
                },
                { interval: l, emitOnBegin: !0 }
              );
              return r;
            });
          return (
            (s = u
              ? setTimeout(() => {
                  g(), clearTimeout(s), m(new A({ id: o }));
                }, u)
              : void 0),
            await f
          );
        }
        class A extends t.BaseError {
          constructor({ id: e }) {
            super(
              'Timed out while waiting for call bundle with id "'.concat(
                e,
                '" to be confirmed.'
              ),
              { name: "WaitForCallsStatusTimeoutError" }
            );
          }
        }
      },
      [322870, 293228],
    ],
    472156: (e) => {
      "use strict";
      e.s({ encodePacked: () => l });
      var t = e.i(787769),
        r = e.i(948628),
        n = e.i(259123),
        a = e.i(115481),
        i = e.i(561160),
        s = e.i(994290),
        o = e.i(227289);
      function l(e, l) {
        if (e.length !== l.length)
          throw new t.AbiEncodingLengthMismatchError({
            expectedLength: e.length,
            givenLength: l.length,
          });
        let c = [];
        for (let u = 0; u < e.length; u++) {
          let d = e[u],
            f = l[u];
          c.push(
            (function e(l, c) {
              let u =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if ("address" === l) {
                if (!(0, n.isAddress)(c))
                  throw new r.InvalidAddressError({ address: c });
                return (0, i.pad)(c.toLowerCase(), { size: u ? 32 : null });
              }
              if ("string" === l) return (0, s.stringToHex)(c);
              if ("bytes" === l) return c;
              if ("bool" === l)
                return (0, i.pad)((0, s.boolToHex)(c), { size: u ? 32 : 1 });
              let d = l.match(o.integerRegex);
              if (d) {
                let [e, t, r = "256"] = d,
                  n = Number.parseInt(r) / 8;
                return (0, s.numberToHex)(c, {
                  size: u ? 32 : n,
                  signed: "int" === t,
                });
              }
              let f = l.match(o.bytesRegex);
              if (f) {
                let [e, r] = f;
                if (Number.parseInt(r) !== (c.length - 2) / 2)
                  throw new t.BytesSizeMismatchError({
                    expectedSize: Number.parseInt(r),
                    givenSize: (c.length - 2) / 2,
                  });
                return (0, i.pad)(c, { dir: "right", size: u ? 32 : null });
              }
              let p = l.match(o.arrayRegex);
              if (p && Array.isArray(c)) {
                let [t, r] = p,
                  n = [];
                for (let t = 0; t < c.length; t++) n.push(e(r, c[t], !0));
                return 0 === n.length ? "0x" : (0, a.concatHex)(n);
              }
              throw new t.UnsupportedPackedAbiType(l);
            })(d, f)
          );
        }
        return (0, a.concatHex)(c);
      }
    },
    944091: (e) => {
      "use strict";
      e.s({ parseSignature: () => n });
      var t = e.i(491104),
        r = e.i(994290);
      function n(e) {
        let { r: n, s: a } = t.secp256k1.Signature.fromCompact(e.slice(2, 130)),
          i = Number("0x".concat(e.slice(130))),
          [s, o] = (() => {
            if (0 === i || 1 === i) return [void 0, i];
            if (27 === i) return [BigInt(i), 0];
            if (28 === i) return [BigInt(i), 1];
            throw Error("Invalid yParityOrV value");
          })();
        return void 0 !== s
          ? {
              r: (0, r.numberToHex)(n, { size: 32 }),
              s: (0, r.numberToHex)(a, { size: 32 }),
              v: s,
              yParity: o,
            }
          : {
              r: (0, r.numberToHex)(n, { size: 32 }),
              s: (0, r.numberToHex)(a, { size: 32 }),
              yParity: o,
            };
      }
    },
    677386: (e) => {
      "use strict";
      e.s({ createNonceManager: () => n, nonceManager: () => a });
      var t = e.i(412544),
        r = e.i(230755);
      function n(e) {
        let { source: t } = e,
          n = new Map(),
          a = new r.LruMap(8192),
          i = new Map(),
          s = (e) => {
            let { address: t, chainId: r } = e;
            return "".concat(t, ".").concat(r);
          };
        return {
          async consume(e) {
            let { address: r, chainId: n, client: i } = e,
              o = s({ address: r, chainId: n }),
              l = this.get({ address: r, chainId: n, client: i });
            this.increment({ address: r, chainId: n });
            let c = await l;
            return await t.set({ address: r, chainId: n }, c), a.set(o, c), c;
          },
          async increment(e) {
            var t;
            let { address: r, chainId: a } = e,
              i = s({ address: r, chainId: a }),
              o = null != (t = n.get(i)) ? t : 0;
            n.set(i, o + 1);
          },
          async get(e) {
            var r;
            let { address: o, chainId: l, client: c } = e,
              u = s({ address: o, chainId: l }),
              d = i.get(u);
            return (
              d ||
                ((d = (async () => {
                  try {
                    var e;
                    let r = await t.get({ address: o, chainId: l, client: c }),
                      n = null != (e = a.get(u)) ? e : 0;
                    if (n > 0 && r <= n) return n + 1;
                    return a.delete(u), r;
                  } finally {
                    this.reset({ address: o, chainId: l });
                  }
                })()),
                i.set(u, d)),
              (null != (r = n.get(u)) ? r : 0) + (await d)
            );
          },
          reset(e) {
            let { address: t, chainId: r } = e,
              a = s({ address: t, chainId: r });
            n.delete(a), i.delete(a);
          },
        };
      }
      let a = n({
        source: {
          async get(e) {
            let { address: r, client: n } = e;
            return (0, t.getTransactionCount)(n, {
              address: r,
              blockTag: "pending",
            });
          },
          set() {},
        },
      });
    },
  },
]);

//# sourceMappingURL=436db670b69062f8.js.map
