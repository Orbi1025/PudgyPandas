(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    188274: (e) => {
      "use strict";
      e.s({ ParseUtil: () => t });
      let t = {
        validateCaipAddress(e) {
          var t;
          if ((null == (t = e.split(":")) ? void 0 : t.length) !== 3)
            throw Error("Invalid CAIP Address");
          return e;
        },
        parseCaipAddress(e) {
          let t = e.split(":");
          if (3 !== t.length)
            throw Error("Invalid CAIP-10 address: ".concat(e));
          let [n, r, o] = t;
          if (!n || !r || !o)
            throw Error("Invalid CAIP-10 address: ".concat(e));
          return { chainNamespace: n, chainId: r, address: o };
        },
        parseCaipNetworkId(e) {
          let t = e.split(":");
          if (2 !== t.length)
            throw Error("Invalid CAIP-2 network id: ".concat(e));
          let [n, r] = t;
          if (!n || !r) throw Error("Invalid CAIP-2 network id: ".concat(e));
          return { chainNamespace: n, chainId: r };
        },
      };
    },
    605726: (e) => {
      "use strict";
      e.s({ ConstantsUtil: () => n });
      var t = e.i(174519);
      let n = {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
          WALLET_CONNECT: "walletConnect",
          INJECTED: "injected",
          WALLET_STANDARD: "announced",
          COINBASE: "coinbaseWallet",
          COINBASE_SDK: "coinbaseWalletSDK",
          SAFE: "safe",
          LEDGER: "ledger",
          OKX: "okx",
          EIP6963: "eip6963",
          AUTH: "ID_AUTH",
        },
        CONNECTOR_NAMES: { AUTH: "Auth" },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
        LIMITS: { PENDING_TRANSACTIONS: 99 },
        CHAIN: {
          EVM: "eip155",
          SOLANA: "solana",
          POLKADOT: "polkadot",
          BITCOIN: "bip122",
        },
        CHAIN_NAME_MAP: {
          eip155: "EVM Networks",
          solana: "Solana",
          polkadot: "Polkadot",
          bip122: "Bitcoin",
          cosmos: "Cosmos",
        },
        ADAPTER_TYPES: {
          BITCOIN: "bitcoin",
          SOLANA: "solana",
          WAGMI: "wagmi",
          ETHERS: "ethers",
          ETHERS5: "ethers5",
        },
        USDT_CONTRACT_ADDRESSES: [
          "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
          "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
          "0x919C1c267BC06a7039e03fcc2eF738525769109c",
          "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
          "0x55d398326f99059fF775485246999027B3197955",
          "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        ],
        HTTP_STATUS_CODES: {
          SERVER_ERROR: 500,
          TOO_MANY_REQUESTS: 429,
          SERVICE_UNAVAILABLE: 503,
          FORBIDDEN: 403,
        },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network",
        SECURE_SITE_SDK_ORIGIN:
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        REMOTE_FEATURES_ALERTS: {
          MULTI_WALLET_NOT_ENABLED: {
            DEFAULT: {
              shortMessage: "Multi-Wallet Not Enabled",
              longMessage:
                "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.",
            },
            CONNECTIONS_HOOK: {
              shortMessage: "Multi-Wallet Not Enabled",
              longMessage:
                "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.",
            },
            CONNECTION_HOOK: {
              shortMessage: "Multi-Wallet Not Enabled",
              longMessage:
                "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.",
            },
          },
        },
      };
    },
    351667: (e) => {
      "use strict";
      e.s({
        DEFAULT_LOG_LEVEL: () => r,
        SECURE_SITE_SDK: () => n,
        SECURE_SITE_SDK_VERSION: () => o,
        W3mFrameConstants: () => a,
        W3mFrameRpcConstants: () => i,
      });
      var t = e.i(174519);
      let n =
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL
            : void 0) || "https://secure.walletconnect.org/sdk",
        r =
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL
            : void 0) || "error",
        o =
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION
            : void 0) || "4",
        a = {
          APP_EVENT_KEY: "@w3m-app/",
          FRAME_EVENT_KEY: "@w3m-frame/",
          RPC_METHOD_KEY: "RPC_",
          STORAGE_KEY: "@appkit-wallet/",
          SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
          EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
          LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
          LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
          EMAIL: "EMAIL",
          PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
          SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
          SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
          SOCIAL_USERNAME: "SOCIAL_USERNAME",
          APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
          APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
          APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
          APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
          APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
          APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
          APP_GET_USER: "@w3m-app/GET_USER",
          APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
          APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
          APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
          APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
          APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
          APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
          APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
          APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
          APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
          APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
          APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:
            "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
          APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
          APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
          APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
          APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
          APP_RELOAD: "@w3m-app/RELOAD",
          APP_RPC_ABORT: "@w3m-app/RPC_ABORT",
          FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
          FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
          FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
          FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
          FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
          FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
          FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
          FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
          FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
          FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
          FRAME_CONNECT_FARCASTER_SUCCESS:
            "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
          FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
          FRAME_GET_FARCASTER_URI_SUCCESS:
            "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
          FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
          FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
            "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
          FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
            "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
          FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
          FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
          FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
          FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
          FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
          FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
          FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
          FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
          FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
          FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
          FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
          FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
          FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
          FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
            "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
          FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
            "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
          FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
            "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
          FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
            "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
          FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
          FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
          FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
          FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
          FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
            "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
          FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
            "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
          FRAME_INIT_SMART_ACCOUNT_SUCCESS:
            "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
          FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
          FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
            "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
          FRAME_SET_PREFERRED_ACCOUNT_ERROR:
            "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
          FRAME_READY: "@w3m-frame/READY",
          FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
          FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
          FRAME_RPC_ABORT_SUCCESS: "@w3m-frame/RPC_ABORT_SUCCESS",
          FRAME_RPC_ABORT_ERROR: "@w3m-frame/RPC_ABORT_ERROR",
          RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
          RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
          RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT",
        },
        i = {
          SAFE_RPC_METHODS: [
            "eth_accounts",
            "eth_blockNumber",
            "eth_call",
            "eth_chainId",
            "eth_estimateGas",
            "eth_feeHistory",
            "eth_gasPrice",
            "eth_getAccount",
            "eth_getBalance",
            "eth_getBlockByHash",
            "eth_getBlockByNumber",
            "eth_getBlockReceipts",
            "eth_getBlockTransactionCountByHash",
            "eth_getBlockTransactionCountByNumber",
            "eth_getCode",
            "eth_getFilterChanges",
            "eth_getFilterLogs",
            "eth_getLogs",
            "eth_getProof",
            "eth_getStorageAt",
            "eth_getTransactionByBlockHashAndIndex",
            "eth_getTransactionByBlockNumberAndIndex",
            "eth_getTransactionByHash",
            "eth_getTransactionCount",
            "eth_getTransactionReceipt",
            "eth_getUncleCountByBlockHash",
            "eth_getUncleCountByBlockNumber",
            "eth_maxPriorityFeePerGas",
            "eth_newBlockFilter",
            "eth_newFilter",
            "eth_newPendingTransactionFilter",
            "eth_sendRawTransaction",
            "eth_syncing",
            "eth_uninstallFilter",
            "wallet_getCapabilities",
            "wallet_getCallsStatus",
            "eth_getUserOperationReceipt",
            "eth_estimateUserOperationGas",
            "eth_getUserOperationByHash",
            "eth_supportedEntryPoints",
            "wallet_getAssets",
          ],
          NOT_SAFE_RPC_METHODS: [
            "personal_sign",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "solana_signMessage",
            "solana_signTransaction",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction",
            "wallet_sendCalls",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "eth_sendUserOperation",
          ],
          GET_CHAIN_ID: "eth_chainId",
          RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
          RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
          ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" },
        };
    },
    352385: (e) => {
      "use strict";
      e.s({ NetworkUtil: () => n });
      var t = e.i(605726);
      let n = {
        caipNetworkIdToNumber: (e) => (e ? Number(e.split(":")[1]) : void 0),
        parseEvmChainId(e) {
          return "string" == typeof e ? this.caipNetworkIdToNumber(e) : e;
        },
        getNetworksByNamespace: (e, t) =>
          (null == e ? void 0 : e.filter((e) => e.chainNamespace === t)) || [],
        getFirstNetworkByNamespace(e, t) {
          return this.getNetworksByNamespace(e, t)[0];
        },
        getNetworkNameByCaipNetworkId(e, n) {
          var r;
          if (!n) return;
          let o = e.find((e) => e.caipNetworkId === n);
          if (o) return o.name;
          let [a] = n.split(":");
          return (
            (null == (r = t.ConstantsUtil.CHAIN_NAME_MAP) ? void 0 : r[a]) ||
            void 0
          );
        },
      };
    },
    861600: [
      (e) => {
        "use strict";
        e.s(
          {
            proxy: () =>
              function e() {
                let t,
                  n,
                  r,
                  o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (!m(o)) throw Error("object required");
                let a = f.get(o);
                if (a) return a;
                let i = E[0],
                  l = new Set(),
                  s = function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : ++E[0];
                    i !== t && ((i = t), l.forEach((n) => n(e, t)));
                  },
                  c = E[1],
                  d = (e) => (t, n) => {
                    let r = [...t];
                    (r[1] = [e, ...r[1]]), s(r, n);
                  },
                  p = new Map(),
                  w = !0,
                  v = new Proxy(
                    o,
                    ((t = () => w),
                    (n = (e, t) => {
                      let n = !h.has(t) && g.get(t);
                      if (n) {
                        if (
                          (C.env ? C.env.MODE : void 0) !== "production" &&
                          p.has(e)
                        )
                          throw Error("prop listener already exists");
                        if (l.size) {
                          let t = n[2](d(e));
                          p.set(e, [n, t]);
                        } else p.set(e, [n]);
                      }
                    }),
                    (r = (e) => {
                      var t;
                      let n = p.get(e);
                      n && (p.delete(e), null == (t = n[1]) || t.call(n));
                    }),
                    {
                      deleteProperty(e, t) {
                        let n = Reflect.get(e, t);
                        r(t);
                        let o = Reflect.deleteProperty(e, t);
                        return o && s(["delete", [t], n]), o;
                      },
                      set(o, a, i, l) {
                        let c,
                          d = !t() && Reflect.has(o, a),
                          p = Reflect.get(o, a, l);
                        if (d && (A(p, i) || (f.has(i) && A(p, f.get(i)))))
                          return !0;
                        r(a), m(i) && (i = u(i) || i);
                        let C =
                          !g.has(i) &&
                          m((c = i)) &&
                          !h.has(c) &&
                          (Array.isArray(c) || !(Symbol.iterator in c)) &&
                          !(c instanceof WeakMap) &&
                          !(c instanceof WeakSet) &&
                          !(c instanceof Error) &&
                          !(c instanceof Number) &&
                          !(c instanceof Date) &&
                          !(c instanceof String) &&
                          !(c instanceof RegExp) &&
                          !(c instanceof ArrayBuffer) &&
                          !(c instanceof Promise)
                            ? e(i)
                            : i;
                        return (
                          n(a, C),
                          Reflect.set(o, a, C, l),
                          s(["set", [a], i, p]),
                          !0
                        );
                      },
                    })
                  );
                f.set(o, v);
                let b = [
                  o,
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ++E[1];
                    return (
                      c === e ||
                        l.size ||
                        ((c = e),
                        p.forEach((t) => {
                          let [n] = t,
                            r = n[1](e);
                          r > i && (i = r);
                        })),
                      i
                    );
                  },
                  (e) => (
                    l.add(e),
                    1 === l.size &&
                      p.forEach((e, t) => {
                        let [n, r] = e;
                        if ((C.env ? C.env.MODE : void 0) !== "production" && r)
                          throw Error("remove already exists");
                        let o = n[2](d(t));
                        p.set(t, [n, o]);
                      }),
                    () => {
                      l.delete(e),
                        0 === l.size &&
                          p.forEach((e, t) => {
                            let [n, r] = e;
                            r && (r(), p.set(t, [n]));
                          });
                    }
                  ),
                ];
                return (
                  g.set(v, b),
                  Reflect.ownKeys(o).forEach((e) => {
                    let t = Object.getOwnPropertyDescriptor(o, e);
                    "value" in t && t.writable && (v[e] = o[e]);
                  }),
                  (w = !1),
                  v
                );
              },
            ref: () => N,
            snapshot: () => _,
            subscribe: () => b,
            unstable_getInternalStates: () => S,
          },
          861600
        ),
          e.s(
            {
              affectedToPathList: () => p,
              createProxy: () => s,
              getUntracked: () => u,
              isChanged: () => c,
              markToTrack: () => d,
            },
            740487
          );
        let t = Symbol(),
          n = Symbol(),
          r = Object.getPrototypeOf,
          o = new WeakMap(),
          a = (e) =>
            e &&
            (o.has(e)
              ? o.get(e)
              : r(e) === Object.prototype || r(e) === Array.prototype),
          i = (e) => "object" == typeof e && null !== e,
          l = (e) => e[n] || e,
          s = (e, o, i, c) => {
            if (!a(e)) return e;
            let u = c && c.get(e);
            if (!u) {
              let t = l(e);
              (u = Object.values(Object.getOwnPropertyDescriptors(t)).some(
                (e) => !e.configurable && !e.writable
              )
                ? [
                    t,
                    ((e) => {
                      if (Array.isArray(e)) return Array.from(e);
                      let t = Object.getOwnPropertyDescriptors(e);
                      return (
                        Object.values(t).forEach((e) => {
                          e.configurable = !0;
                        }),
                        Object.create(r(e), t)
                      );
                    })(t),
                  ]
                : [t]),
                null == c || c.set(e, u);
            }
            let [d, p] = u,
              C = i && i.get(d);
            return (
              (!C || !!p !== C[1].f) &&
                (((C = ((e, r) => {
                  let o = { f: r },
                    a = !1,
                    i = (t, n) => {
                      if (!a) {
                        let r = o.a.get(e);
                        if ((r || ((r = {}), o.a.set(e, r)), "w" === t))
                          r.w = !0;
                        else {
                          let e = r[t];
                          e || ((e = new Set()), (r[t] = e)), e.add(n);
                        }
                      }
                    },
                    l = {
                      get: (t, r) =>
                        r === n
                          ? e
                          : (i("k", r), s(Reflect.get(t, r), o.a, o.c, o.t)),
                      has: (n, r) =>
                        r === t
                          ? ((a = !0), o.a.delete(e), !0)
                          : (i("h", r), Reflect.has(n, r)),
                      getOwnPropertyDescriptor: (e, t) => (
                        i("o", t), Reflect.getOwnPropertyDescriptor(e, t)
                      ),
                      ownKeys: (e) => (i("w"), Reflect.ownKeys(e)),
                    };
                  return r && (l.set = l.deleteProperty = () => !1), [l, o];
                })(d, !!p))[1].p = new Proxy(p || d, C[0])),
                i && i.set(d, C)),
              (C[1].a = o),
              (C[1].c = i),
              (C[1].t = c),
              C[1].p
            );
          },
          c = function (e, t, n, r) {
            let o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : Object.is;
            if (o(e, t)) return !1;
            if (!i(e) || !i(t)) return !0;
            let a = n.get(l(e));
            if (!a) return !0;
            if (r) {
              if (r.get(e) === t) return !1;
              r.set(e, t);
            }
            let s = null;
            for (let n of a.h || [])
              if ((s = Reflect.has(e, n) !== Reflect.has(t, n))) return s;
            if (!0 === a.w) {
              if (
                (s = ((e, t) => {
                  let n = Reflect.ownKeys(e),
                    r = Reflect.ownKeys(t);
                  return n.length !== r.length || n.some((e, t) => e !== r[t]);
                })(e, t))
              )
                return s;
            } else
              for (let n of a.o || []) {
                let r = !!Reflect.getOwnPropertyDescriptor(e, n);
                if ((s = !!Reflect.getOwnPropertyDescriptor(t, n) !== r))
                  return s;
              }
            for (let i of a.k || []) if ((s = c(e[i], t[i], n, r, o))) return s;
            if (null === s) throw Error("invalid used");
            return s;
          },
          u = (e) => (a(e) && e[n]) || null,
          d = function (e) {
            let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1];
            o.set(e, t);
          },
          p = (e, t, n) => {
            let r = [],
              o = new WeakSet(),
              a = (e, s) => {
                var c, u, d;
                if (o.has(e)) return;
                i(e) && o.add(e);
                let p = i(e) && t.get(l(e));
                if (p) {
                  if (
                    (null == (c = p.h) ||
                      c.forEach((e) => {
                        let t = ":has(".concat(String(e), ")");
                        r.push(s ? [...s, t] : [t]);
                      }),
                    !0 === p.w)
                  ) {
                    let e = ":ownKeys";
                    r.push(s ? [...s, e] : [e]);
                  } else
                    null == (u = p.o) ||
                      u.forEach((e) => {
                        let t = ":hasOwn(".concat(String(e), ")");
                        r.push(s ? [...s, t] : [t]);
                      });
                  null == (d = p.k) ||
                    d.forEach((t) => {
                      (!n ||
                        "value" in
                          (Object.getOwnPropertyDescriptor(e, t) || {})) &&
                        a(e[t], s ? [...s, t] : [t]);
                    });
                } else s && r.push(s);
              };
            return a(e), r;
          },
          C = {
            get url() {
              return `file://${e.P(
                "node_modules/.pnpm/valtio@2.1.5_@types+react@19.1.0_react@19.1.0/node_modules/valtio/esm/vanilla.mjs"
              )}`;
            },
          },
          m = (e) => "object" == typeof e && null !== e,
          w = (e, t) => {
            let n = v.get(e);
            if ((null == n ? void 0 : n[0]) === t) return n[1];
            let r = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              d(r, !0),
              v.set(e, [t, r]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(r, t)) return;
                let n = Reflect.get(e, t),
                  { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, t),
                  a = { value: n, enumerable: o, configurable: !0 };
                if (h.has(n)) d(n, !1);
                else if (g.has(n)) {
                  let [e, t] = g.get(n);
                  a.value = w(e, t());
                }
                Object.defineProperty(r, t, a);
              }),
              Object.preventExtensions(r)
            );
          },
          g = new WeakMap(),
          h = new WeakSet(),
          v = new WeakMap(),
          E = [1, 1],
          f = new WeakMap(),
          A = Object.is;
        function b(e, t, n) {
          let r,
            o = g.get(e);
          (C.env ? C.env.MODE : void 0) === "production" ||
            o ||
            console.warn("Please use proxy object");
          let a = [],
            i = o[2],
            l = !1,
            s = i((e) => {
              if ((a.push(e), n)) return void t(a.splice(0));
              r ||
                (r = Promise.resolve().then(() => {
                  (r = void 0), l && t(a.splice(0));
                }));
            });
          return (
            (l = !0),
            () => {
              (l = !1), s();
            }
          );
        }
        function _(e) {
          let t = g.get(e);
          (C.env ? C.env.MODE : void 0) === "production" ||
            t ||
            console.warn("Please use proxy object");
          let [n, r] = t;
          return w(n, r());
        }
        function N(e) {
          return h.add(e), e;
        }
        function S() {
          return {
            proxyStateMap: g,
            refSet: h,
            snapCache: v,
            versionHolder: E,
            proxyCache: f,
          };
        }
      },
      [740487],
    ],
    159055: [
      (e) => {
        "use strict";
        e.s({ CoreHelperUtil: () => p }, 159055);
        var t = e.i(605726);
        e.s(
          {
            ConstantsUtil: () => i,
            MELD_PUBLIC_KEY: () => a,
            ONRAMP_PROVIDERS: () => o,
          },
          76107
        );
        var n = e.i(174519);
        let r =
            (void 0 !== n.default && void 0 !== n.default.env
              ? n.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
              : void 0) || "https://secure.walletconnect.org",
          o = [
            {
              label: "Meld.io",
              name: "meld",
              feeRange: "1-2%",
              url: "https://meldcrypto.com",
              supportedChains: ["eip155", "solana"],
            },
          ],
          a = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
          i = {
            FOUR_MINUTES_MS: 24e4,
            TEN_SEC_MS: 1e4,
            FIVE_SEC_MS: 5e3,
            THREE_SEC_MS: 3e3,
            ONE_SEC_MS: 1e3,
            SECURE_SITE: r,
            SECURE_SITE_DASHBOARD: "".concat(r, "/dashboard"),
            SECURE_SITE_FAVICON: "".concat(r, "/images/favicon.png"),
            RESTRICTED_TIMEZONES: [
              "ASIA/SHANGHAI",
              "ASIA/URUMQI",
              "ASIA/CHONGQING",
              "ASIA/HARBIN",
              "ASIA/KASHGAR",
              "ASIA/MACAU",
              "ASIA/HONG_KONG",
              "ASIA/MACAO",
              "ASIA/BEIJING",
              "ASIA/HARBIN",
            ],
            SWAP_SUGGESTED_TOKENS: [
              "ETH",
              "UNI",
              "1INCH",
              "AAVE",
              "SOL",
              "ADA",
              "AVAX",
              "DOT",
              "LINK",
              "NITRO",
              "GAIA",
              "MILK",
              "TRX",
              "NEAR",
              "GNO",
              "WBTC",
              "DAI",
              "WETH",
              "USDC",
              "USDT",
              "ARB",
              "BAL",
              "BICO",
              "CRV",
              "ENS",
              "MATIC",
              "OP",
            ],
            SWAP_POPULAR_TOKENS: [
              "ETH",
              "UNI",
              "1INCH",
              "AAVE",
              "SOL",
              "ADA",
              "AVAX",
              "DOT",
              "LINK",
              "NITRO",
              "GAIA",
              "MILK",
              "TRX",
              "NEAR",
              "GNO",
              "WBTC",
              "DAI",
              "WETH",
              "USDC",
              "USDT",
              "ARB",
              "BAL",
              "BICO",
              "CRV",
              "ENS",
              "MATIC",
              "OP",
              "METAL",
              "DAI",
              "CHAMP",
              "WOLF",
              "SALE",
              "BAL",
              "BUSD",
              "MUST",
              "BTCpx",
              "ROUTE",
              "HEX",
              "WELT",
              "amDAI",
              "VSQ",
              "VISION",
              "AURUM",
              "pSP",
              "SNX",
              "VC",
              "LINK",
              "CHP",
              "amUSDT",
              "SPHERE",
              "FOX",
              "GIDDY",
              "GFC",
              "OMEN",
              "OX_OLD",
              "DE",
              "WNT",
            ],
            BALANCE_SUPPORTED_CHAINS: [
              t.ConstantsUtil.CHAIN.EVM,
              t.ConstantsUtil.CHAIN.SOLANA,
            ],
            SWAP_SUPPORTED_NETWORKS: [
              "eip155:1",
              "eip155:42161",
              "eip155:10",
              "eip155:324",
              "eip155:8453",
              "eip155:56",
              "eip155:137",
              "eip155:100",
              "eip155:43114",
              "eip155:250",
              "eip155:8217",
              "eip155:1313161554",
            ],
            NAMES_SUPPORTED_CHAIN_NAMESPACES: [t.ConstantsUtil.CHAIN.EVM],
            ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
              t.ConstantsUtil.CHAIN.EVM,
              t.ConstantsUtil.CHAIN.SOLANA,
            ],
            ACTIVITY_ENABLED_CHAIN_NAMESPACES: [t.ConstantsUtil.CHAIN.EVM],
            NATIVE_TOKEN_ADDRESS: {
              eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
              solana: "So11111111111111111111111111111111111111111",
              polkadot: "0x",
              bip122: "0x",
              cosmos: "0x",
            },
            CONVERT_SLIPPAGE_TOLERANCE: 1,
            CONNECT_LABELS: {
              MOBILE: "Open and continue in the wallet app",
              WEB: "Open and continue in the wallet app",
            },
            SEND_SUPPORTED_NAMESPACES: [
              t.ConstantsUtil.CHAIN.EVM,
              t.ConstantsUtil.CHAIN.SOLANA,
            ],
            DEFAULT_REMOTE_FEATURES: {
              swaps: ["1inch"],
              onramp: ["meld"],
              email: !0,
              socials: [
                "google",
                "x",
                "discord",
                "farcaster",
                "github",
                "apple",
                "facebook",
              ],
              activity: !0,
              reownBranding: !0,
              multiWallet: !1,
            },
            DEFAULT_REMOTE_FEATURES_DISABLED: {
              email: !1,
              socials: !1,
              swaps: !1,
              onramp: !1,
              activity: !1,
              reownBranding: !1,
            },
            DEFAULT_FEATURES: {
              receive: !0,
              send: !0,
              emailShowWallets: !0,
              connectorTypeOrder: [
                "walletConnect",
                "recent",
                "injected",
                "featured",
                "custom",
                "external",
                "recommended",
              ],
              analytics: !0,
              allWallets: !0,
              legalCheckbox: !1,
              smartSessions: !1,
              collapseWallets: !1,
              walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
              connectMethodsOrder: void 0,
              pay: !1,
            },
            DEFAULT_SOCIALS: [
              "google",
              "x",
              "farcaster",
              "discord",
              "apple",
              "github",
              "facebook",
            ],
            DEFAULT_ACCOUNT_TYPES: {
              bip122: "payment",
              eip155: "smartAccount",
              polkadot: "eoa",
              solana: "eoa",
            },
            ADAPTER_TYPES: {
              UNIVERSAL: "universal",
              SOLANA: "solana",
              WAGMI: "wagmi",
              ETHERS: "ethers",
              ETHERS5: "ethers5",
              BITCOIN: "bitcoin",
            },
            SIWX_DEFAULTS: { signOutOnDisconnect: !0 },
          };
        e.s({ StorageUtil: () => d }, 527410),
          e.s(
            {
              SafeLocalStorage: () => c,
              SafeLocalStorageKeys: () => l,
              getSafeConnectorIdKey: () => s,
              isSafe: () => u,
            },
            347547
          );
        let l = {
          WALLET_ID: "@appkit/wallet_id",
          WALLET_NAME: "@appkit/wallet_name",
          SOLANA_WALLET: "@appkit/solana_wallet",
          SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
          ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
          CONNECTED_SOCIAL: "@appkit/connected_social",
          CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
          RECENT_WALLETS: "@appkit/recent_wallets",
          DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          ACTIVE_NAMESPACE: "@appkit/active_namespace",
          CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
          CONNECTION_STATUS: "@appkit/connection_status",
          SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
          SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
          TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
          NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
          PORTFOLIO_CACHE: "@appkit/portfolio_cache",
          ENS_CACHE: "@appkit/ens_cache",
          IDENTITY_CACHE: "@appkit/identity_cache",
          PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
          CONNECTIONS: "@appkit/connections",
          DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
        };
        function s(e) {
          if (!e)
            throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");
          return "@appkit/".concat(e, ":connected_connector_id");
        }
        let c = {
          setItem(e, t) {
            u() && void 0 !== t && localStorage.setItem(e, t);
          },
          getItem(e) {
            if (u()) return localStorage.getItem(e) || void 0;
          },
          removeItem(e) {
            u() && localStorage.removeItem(e);
          },
          clear() {
            u() && localStorage.clear();
          },
        };
        function u() {
          return (
            "undefined" != typeof window && "undefined" != typeof localStorage
          );
        }
        let d = {
            cacheExpiry: {
              portfolio: 3e4,
              nativeBalance: 3e4,
              ens: 3e5,
              identity: 3e5,
            },
            isCacheExpired: (e, t) => Date.now() - e > t,
            getActiveNetworkProps() {
              let e = d.getActiveNamespace(),
                t = d.getActiveCaipNetworkId(),
                n = t ? t.split(":")[1] : void 0;
              return {
                namespace: e,
                caipNetworkId: t,
                chainId: n ? (isNaN(Number(n)) ? n : Number(n)) : void 0,
              };
            },
            setWalletConnectDeepLink(e) {
              let { name: t, href: n } = e;
              try {
                c.setItem(
                  l.DEEPLINK_CHOICE,
                  JSON.stringify({ href: n, name: t })
                );
              } catch (e) {
                console.info("Unable to set WalletConnect deep link");
              }
            },
            getWalletConnectDeepLink() {
              try {
                let e = c.getItem(l.DEEPLINK_CHOICE);
                if (e) return JSON.parse(e);
              } catch (e) {
                console.info("Unable to get WalletConnect deep link");
              }
            },
            deleteWalletConnectDeepLink() {
              try {
                c.removeItem(l.DEEPLINK_CHOICE);
              } catch (e) {
                console.info("Unable to delete WalletConnect deep link");
              }
            },
            setActiveNamespace(e) {
              try {
                c.setItem(l.ACTIVE_NAMESPACE, e);
              } catch (e) {
                console.info("Unable to set active namespace");
              }
            },
            setActiveCaipNetworkId(e) {
              try {
                c.setItem(l.ACTIVE_CAIP_NETWORK_ID, e),
                  d.setActiveNamespace(e.split(":")[0]);
              } catch (e) {
                console.info("Unable to set active caip network id");
              }
            },
            getActiveCaipNetworkId() {
              try {
                return c.getItem(l.ACTIVE_CAIP_NETWORK_ID);
              } catch (e) {
                console.info("Unable to get active caip network id");
                return;
              }
            },
            deleteActiveCaipNetworkId() {
              try {
                c.removeItem(l.ACTIVE_CAIP_NETWORK_ID);
              } catch (e) {
                console.info("Unable to delete active caip network id");
              }
            },
            deleteConnectedConnectorId(e) {
              try {
                let t = s(e);
                c.removeItem(t);
              } catch (e) {
                console.info("Unable to delete connected connector id");
              }
            },
            setAppKitRecent(e) {
              try {
                let t = d.getRecentWallets();
                t.find((t) => t.id === e.id) ||
                  (t.unshift(e),
                  t.length > 2 && t.pop(),
                  c.setItem(l.RECENT_WALLETS, JSON.stringify(t)));
              } catch (e) {
                console.info("Unable to set AppKit recent");
              }
            },
            getRecentWallets() {
              try {
                let e = c.getItem(l.RECENT_WALLETS);
                return e ? JSON.parse(e) : [];
              } catch (e) {
                console.info("Unable to get AppKit recent");
              }
              return [];
            },
            setConnectedConnectorId(e, t) {
              try {
                let n = s(e);
                c.setItem(n, t);
              } catch (e) {
                console.info("Unable to set Connected Connector Id");
              }
            },
            getActiveNamespace() {
              try {
                return c.getItem(l.ACTIVE_NAMESPACE);
              } catch (e) {
                console.info("Unable to get active namespace");
              }
            },
            getConnectedConnectorId(e) {
              if (e)
                try {
                  let t = s(e);
                  return c.getItem(t);
                } catch (t) {
                  console.info(
                    "Unable to get connected connector id in namespace",
                    e
                  );
                }
            },
            setConnectedSocialProvider(e) {
              try {
                c.setItem(l.CONNECTED_SOCIAL, e);
              } catch (e) {
                console.info("Unable to set connected social provider");
              }
            },
            getConnectedSocialProvider() {
              try {
                return c.getItem(l.CONNECTED_SOCIAL);
              } catch (e) {
                console.info("Unable to get connected social provider");
              }
            },
            deleteConnectedSocialProvider() {
              try {
                c.removeItem(l.CONNECTED_SOCIAL);
              } catch (e) {
                console.info("Unable to delete connected social provider");
              }
            },
            getConnectedSocialUsername() {
              try {
                return c.getItem(l.CONNECTED_SOCIAL_USERNAME);
              } catch (e) {
                console.info("Unable to get connected social username");
              }
            },
            getStoredActiveCaipNetworkId() {
              var e;
              let t = c.getItem(l.ACTIVE_CAIP_NETWORK_ID);
              return null == t || null == (e = t.split(":")) ? void 0 : e[1];
            },
            setConnectionStatus(e) {
              try {
                c.setItem(l.CONNECTION_STATUS, e);
              } catch (e) {
                console.info("Unable to set connection status");
              }
            },
            getConnectionStatus() {
              try {
                return c.getItem(l.CONNECTION_STATUS);
              } catch (e) {
                return;
              }
            },
            getConnectedNamespaces() {
              try {
                let e = c.getItem(l.CONNECTED_NAMESPACES);
                if (!(null == e ? void 0 : e.length)) return [];
                return e.split(",");
              } catch (e) {
                return [];
              }
            },
            setConnectedNamespaces(e) {
              try {
                let t = Array.from(new Set(e));
                c.setItem(l.CONNECTED_NAMESPACES, t.join(","));
              } catch (e) {
                console.info("Unable to set namespaces in storage");
              }
            },
            addConnectedNamespace(e) {
              try {
                let t = d.getConnectedNamespaces();
                t.includes(e) || (t.push(e), d.setConnectedNamespaces(t));
              } catch (e) {
                console.info("Unable to add connected namespace");
              }
            },
            removeConnectedNamespace(e) {
              try {
                let t = d.getConnectedNamespaces(),
                  n = t.indexOf(e);
                n > -1 && (t.splice(n, 1), d.setConnectedNamespaces(t));
              } catch (e) {
                console.info("Unable to remove connected namespace");
              }
            },
            getTelegramSocialProvider() {
              try {
                return c.getItem(l.TELEGRAM_SOCIAL_PROVIDER);
              } catch (e) {
                return (
                  console.info("Unable to get telegram social provider"), null
                );
              }
            },
            setTelegramSocialProvider(e) {
              try {
                c.setItem(l.TELEGRAM_SOCIAL_PROVIDER, e);
              } catch (e) {
                console.info("Unable to set telegram social provider");
              }
            },
            removeTelegramSocialProvider() {
              try {
                c.removeItem(l.TELEGRAM_SOCIAL_PROVIDER);
              } catch (e) {
                console.info("Unable to remove telegram social provider");
              }
            },
            getBalanceCache() {
              let e = {};
              try {
                let t = c.getItem(l.PORTFOLIO_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get balance cache");
              }
              return e;
            },
            removeAddressFromBalanceCache(e) {
              try {
                let t = d.getBalanceCache();
                c.setItem(
                  l.PORTFOLIO_CACHE,
                  JSON.stringify({ ...t, [e]: void 0 })
                );
              } catch (t) {
                console.info("Unable to remove address from balance cache", e);
              }
            },
            getBalanceCacheForCaipAddress(e) {
              try {
                let t = d.getBalanceCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio)
                )
                  return t.balance;
                d.removeAddressFromBalanceCache(e);
              } catch (t) {
                console.info("Unable to get balance cache for address", e);
              }
            },
            updateBalanceCache(e) {
              try {
                let t = d.getBalanceCache();
                (t[e.caipAddress] = e),
                  c.setItem(l.PORTFOLIO_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update balance cache", e);
              }
            },
            getNativeBalanceCache() {
              let e = {};
              try {
                let t = c.getItem(l.NATIVE_BALANCE_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get balance cache");
              }
              return e;
            },
            removeAddressFromNativeBalanceCache(e) {
              try {
                let t = d.getBalanceCache();
                c.setItem(
                  l.NATIVE_BALANCE_CACHE,
                  JSON.stringify({ ...t, [e]: void 0 })
                );
              } catch (t) {
                console.info("Unable to remove address from balance cache", e);
              }
            },
            getNativeBalanceCacheForCaipAddress(e) {
              try {
                let t = d.getNativeBalanceCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(
                    t.timestamp,
                    this.cacheExpiry.nativeBalance
                  )
                )
                  return t;
                console.info("Discarding cache for address", e),
                  d.removeAddressFromBalanceCache(e);
              } catch (t) {
                console.info("Unable to get balance cache for address", e);
              }
            },
            updateNativeBalanceCache(e) {
              try {
                let t = d.getNativeBalanceCache();
                (t[e.caipAddress] = e),
                  c.setItem(l.NATIVE_BALANCE_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update balance cache", e);
              }
            },
            getEnsCache() {
              let e = {};
              try {
                let t = c.getItem(l.ENS_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get ens name cache");
              }
              return e;
            },
            getEnsFromCacheForAddress(e) {
              try {
                let t = d.getEnsCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens)
                )
                  return t.ens;
                d.removeEnsFromCache(e);
              } catch (t) {
                console.info("Unable to get ens name from cache", e);
              }
            },
            updateEnsCache(e) {
              try {
                let t = d.getEnsCache();
                (t[e.address] = e), c.setItem(l.ENS_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update ens name cache", e);
              }
            },
            removeEnsFromCache(e) {
              try {
                let t = d.getEnsCache();
                c.setItem(l.ENS_CACHE, JSON.stringify({ ...t, [e]: void 0 }));
              } catch (t) {
                console.info("Unable to remove ens name from cache", e);
              }
            },
            getIdentityCache() {
              let e = {};
              try {
                let t = c.getItem(l.IDENTITY_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get identity cache");
              }
              return e;
            },
            getIdentityFromCacheForAddress(e) {
              try {
                let t = d.getIdentityCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity)
                )
                  return t.identity;
                d.removeIdentityFromCache(e);
              } catch (t) {
                console.info("Unable to get identity from cache", e);
              }
            },
            updateIdentityCache(e) {
              try {
                let t = d.getIdentityCache();
                (t[e.address] = {
                  identity: e.identity,
                  timestamp: e.timestamp,
                }),
                  c.setItem(l.IDENTITY_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update identity cache", e);
              }
            },
            removeIdentityFromCache(e) {
              try {
                let t = d.getIdentityCache();
                c.setItem(
                  l.IDENTITY_CACHE,
                  JSON.stringify({ ...t, [e]: void 0 })
                );
              } catch (t) {
                console.info("Unable to remove identity from cache", e);
              }
            },
            clearAddressCache() {
              try {
                c.removeItem(l.PORTFOLIO_CACHE),
                  c.removeItem(l.NATIVE_BALANCE_CACHE),
                  c.removeItem(l.ENS_CACHE),
                  c.removeItem(l.IDENTITY_CACHE);
              } catch (e) {
                console.info("Unable to clear address cache");
              }
            },
            setPreferredAccountTypes(e) {
              try {
                c.setItem(l.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
              } catch (t) {
                console.info("Unable to set preferred account types", e);
              }
            },
            getPreferredAccountTypes() {
              try {
                let e = c.getItem(l.PREFERRED_ACCOUNT_TYPES);
                if (!e) return {};
                return JSON.parse(e);
              } catch (e) {
                console.info("Unable to get preferred account types");
              }
              return {};
            },
            setConnections(e, n) {
              try {
                var r;
                let o = d.getConnections(),
                  a = null != (r = o[n]) ? r : [],
                  i = new Map();
                for (let e of a) i.set(e.connectorId, { ...e });
                for (let n of e) {
                  let e = i.get(n.connectorId),
                    r = n.connectorId === t.ConstantsUtil.CONNECTOR_ID.AUTH;
                  if (e && !r) {
                    let t = new Set(
                        e.accounts.map((e) => e.address.toLowerCase())
                      ),
                      r = n.accounts.filter(
                        (e) => !t.has(e.address.toLowerCase())
                      );
                    e.accounts.push(...r);
                  } else i.set(n.connectorId, { ...n });
                }
                let s = { ...o, [n]: Array.from(i.values()) };
                c.setItem(l.CONNECTIONS, JSON.stringify(s));
              } catch (e) {
                console.error("Unable to sync connections to storage", e);
              }
            },
            getConnections() {
              try {
                let e = c.getItem(l.CONNECTIONS);
                if (!e) return {};
                return JSON.parse(e);
              } catch (e) {
                return (
                  console.error("Unable to get connections from storage", e), {}
                );
              }
            },
            deleteAddressFromConnection(e) {
              let { connectorId: t, address: n, namespace: r } = e;
              try {
                var o;
                let e = d.getConnections(),
                  a = null != (o = e[r]) ? o : [],
                  i = new Map(a.map((e) => [e.connectorId, e])),
                  s = i.get(t);
                if (s) {
                  let e = s.accounts.filter(
                    (e) => e.address.toLowerCase() !== n.toLowerCase()
                  );
                  0 === e.length
                    ? i.delete(t)
                    : i.set(t, {
                        ...s,
                        accounts: s.accounts.filter(
                          (e) => e.address.toLowerCase() !== n.toLowerCase()
                        ),
                      });
                }
                c.setItem(
                  l.CONNECTIONS,
                  JSON.stringify({ ...e, [r]: Array.from(i.values()) })
                );
              } catch (e) {
                console.error(
                  'Unable to remove address "'
                    .concat(n, '" from connector "')
                    .concat(t, '" in namespace "')
                    .concat(r, '"')
                );
              }
            },
            getDisconnectedConnectorIds() {
              try {
                let e = c.getItem(l.DISCONNECTED_CONNECTOR_IDS);
                if (!e) return {};
                return JSON.parse(e);
              } catch (e) {
                console.info("Unable to get disconnected connector ids");
              }
              return {};
            },
            addDisconnectedConnectorId(e, t) {
              try {
                var n;
                let r = d.getDisconnectedConnectorIds(),
                  o = null != (n = r[t]) ? n : [];
                o.push(e),
                  c.setItem(
                    l.DISCONNECTED_CONNECTOR_IDS,
                    JSON.stringify({ ...r, [t]: Array.from(new Set(o)) })
                  );
              } catch (n) {
                console.error(
                  'Unable to set disconnected connector id "'
                    .concat(e, '" for namespace "')
                    .concat(t, '"')
                );
              }
            },
            removeDisconnectedConnectorId(e, t) {
              try {
                var n;
                let r = d.getDisconnectedConnectorIds(),
                  o = null != (n = r[t]) ? n : [];
                (o = o.filter((t) => t.toLowerCase() !== e.toLowerCase())),
                  c.setItem(
                    l.DISCONNECTED_CONNECTOR_IDS,
                    JSON.stringify({ ...r, [t]: Array.from(new Set(o)) })
                  );
              } catch (n) {
                console.error(
                  'Unable to remove disconnected connector id "'
                    .concat(e, '" for namespace "')
                    .concat(t, '"')
                );
              }
            },
            isConnectorDisconnected(e, t) {
              try {
                var n;
                return (
                  null != (n = d.getDisconnectedConnectorIds()[t]) ? n : []
                ).some((t) => t.toLowerCase() === e.toLowerCase());
              } catch (n) {
                console.info(
                  'Unable to get disconnected connector id "'
                    .concat(e, '" for namespace "')
                    .concat(t, '"')
                );
              }
              return !1;
            },
          },
          p = {
            isMobile() {
              if (this.isClient()) {
                var e, t;
                return !!(
                  ((null == (e = window) ? void 0 : e.matchMedia) &&
                    "function" == typeof window.matchMedia &&
                    (null == (t = window.matchMedia("(pointer:coarse)"))
                      ? void 0
                      : t.matches)) ||
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                    navigator.userAgent
                  )
                );
              }
              return !1;
            },
            checkCaipNetwork(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              return null == e
                ? void 0
                : e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase());
            },
            isAndroid() {
              var e;
              if (!this.isMobile()) return !1;
              let t =
                null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase();
              return p.isMobile() && t.includes("android");
            },
            isIos() {
              var e;
              if (!this.isMobile()) return !1;
              let t =
                null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase();
              return t.includes("iphone") || t.includes("ipad");
            },
            isSafari() {
              var e;
              return (
                !!this.isClient() &&
                (null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase()
                ).includes("safari")
              );
            },
            isClient: () => "undefined" != typeof window,
            isPairingExpired: (e) => !e || e - Date.now() <= i.TEN_SEC_MS,
            isAllowedRetry(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.ONE_SEC_MS;
              return Date.now() - e >= t;
            },
            copyToClopboard(e) {
              navigator.clipboard.writeText(e);
            },
            isIframe() {
              try {
                var e, t;
                return (
                  (null == (e = window) ? void 0 : e.self) !==
                  (null == (t = window) ? void 0 : t.top)
                );
              } catch (e) {
                return !1;
              }
            },
            isSafeApp() {
              if (p.isClient() && window.self !== window.top)
                try {
                  var e, t, n;
                  let r =
                    null == (n = window) ||
                    null == (t = n.location) ||
                    null == (e = t.ancestorOrigins)
                      ? void 0
                      : e[0];
                  if (r) {
                    let e = new URL(r),
                      t = new URL("https://app.safe.global");
                    return e.hostname === t.hostname;
                  }
                } catch (e) {}
              return !1;
            },
            getPairingExpiry: () => Date.now() + i.FOUR_MINUTES_MS,
            getNetworkId: (e) => (null == e ? void 0 : e.split(":")[1]),
            getPlainAddress: (e) => (null == e ? void 0 : e.split(":")[2]),
            wait: async (e) =>
              new Promise((t) => {
                setTimeout(t, e);
              }),
            debounce(e) {
              let t,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 500;
              return function () {
                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
                  o[a] = arguments[a];
                t && clearTimeout(t),
                  (t = setTimeout(function () {
                    e(...o);
                  }, n));
              };
            },
            isHttpUrl: (e) =>
              e.startsWith("http://") || e.startsWith("https://"),
            formatNativeUrl(e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
              if (p.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
              let r = e,
                o = n;
              r.includes("://") ||
                ((r = e.replaceAll("/", "").replaceAll(":", "")),
                (r = "".concat(r, "://"))),
                r.endsWith("/") || (r = "".concat(r, "/")),
                !o ||
                  (null == o ? void 0 : o.endsWith("/")) ||
                  (o = "".concat(o, "/")),
                this.isTelegram() &&
                  this.isAndroid() &&
                  (t = encodeURIComponent(t));
              let a = encodeURIComponent(t);
              return {
                redirect: "".concat(r, "wc?uri=").concat(a),
                redirectUniversalLink: o
                  ? "".concat(o, "wc?uri=").concat(a)
                  : void 0,
                href: r,
              };
            },
            formatUniversalUrl(e, t) {
              if (!p.isHttpUrl(e)) return this.formatNativeUrl(e, t);
              let n = e;
              n.endsWith("/") || (n = "".concat(n, "/"));
              let r = encodeURIComponent(t);
              return { redirect: "".concat(n, "wc?uri=").concat(r), href: n };
            },
            getOpenTargetForPlatform(e) {
              return "popupWindow" === e
                ? e
                : this.isTelegram()
                ? d.getTelegramSocialProvider()
                  ? "_top"
                  : "_blank"
                : e;
            },
            openHref(e, t, n) {
              var r;
              null == (r = window) ||
                r.open(
                  e,
                  this.getOpenTargetForPlatform(t),
                  n || "noreferrer noopener"
                );
            },
            returnOpenHref(e, t, n) {
              var r;
              return null == (r = window)
                ? void 0
                : r.open(
                    e,
                    this.getOpenTargetForPlatform(t),
                    n || "noreferrer noopener"
                  );
            },
            isTelegram: () =>
              "undefined" != typeof window &&
              (!!window.TelegramWebviewProxy ||
                !!window.Telegram ||
                !!window.TelegramWebviewProxyProto),
            isPWA() {
              var e, t, n, r;
              if ("undefined" == typeof window) return !1;
              let o =
                  null != (e = window) &&
                  !!e.matchMedia &&
                  "function" == typeof window.matchMedia &&
                  (null == (t = window.matchMedia("(display-mode: standalone)"))
                    ? void 0
                    : t.matches),
                a =
                  null == (r = window) || null == (n = r.navigator)
                    ? void 0
                    : n.standalone;
              return !!(o || a);
            },
            preloadImage: async (e) =>
              Promise.race([
                new Promise((t, n) => {
                  let r = new Image();
                  (r.onload = t),
                    (r.onerror = n),
                    (r.crossOrigin = "anonymous"),
                    (r.src = e);
                }),
                p.wait(2e3),
              ]),
            formatBalance(e, t) {
              let n = "0.000";
              if ("string" == typeof e) {
                let t = Number(e);
                if (t) {
                  let e = Math.floor(1e3 * t) / 1e3;
                  e && (n = e.toString());
                }
              }
              return "".concat(n).concat(t ? " ".concat(t) : "");
            },
            formatBalance2(e, t) {
              let n;
              if ("0" === e) n = "0";
              else if ("string" == typeof e) {
                let t = Number(e);
                if (t) {
                  var r;
                  n =
                    null == (r = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u))
                      ? void 0
                      : r[0];
                }
              }
              return {
                value: null != n ? n : "0",
                rest: "0" === n ? "000" : "",
                symbol: t,
              };
            },
            getApiUrl: () => t.ConstantsUtil.W3M_API_URL,
            getBlockchainApiUrl: () => t.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,
            getAnalyticsUrl: () => t.ConstantsUtil.PULSE_API_URL,
            getUUID() {
              var e;
              return (null == (e = crypto) ? void 0 : e.randomUUID)
                ? crypto.randomUUID()
                : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/gu,
                    (e) => {
                      let t = (16 * Math.random()) | 0;
                      return ("x" === e ? t : (3 & t) | 8).toString(16);
                    }
                  );
            },
            parseError(e) {
              var t, n;
              return "string" == typeof e
                ? e
                : "string" ==
                  typeof (null == e ||
                  null == (n = e.issues) ||
                  null == (t = n[0])
                    ? void 0
                    : t.message)
                ? e.issues[0].message
                : e instanceof Error
                ? e.message
                : "Unknown error";
            },
            sortRequestedNetworks(e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n = {};
              return (
                t &&
                  e &&
                  (e.forEach((e, t) => {
                    n[e] = t;
                  }),
                  t.sort((e, t) => {
                    let r = n[e.id],
                      o = n[t.id];
                    return void 0 !== r && void 0 !== o
                      ? r - o
                      : void 0 !== r
                      ? -1
                      : 1 * (void 0 !== o);
                  })),
                t
              );
            },
            calculateBalance(e) {
              let t = 0;
              for (let r of e) {
                var n;
                t += null != (n = r.value) ? n : 0;
              }
              return t;
            },
            formatTokenBalance(e) {
              let [t, n] = e.toFixed(2).split(".");
              return { dollars: t, pennies: n };
            },
            isAddress(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "eip155";
              switch (t) {
                case "eip155":
                  if (
                    /^(?:0x)?[0-9a-f]{40}$/iu.test(e) &&
                    (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) ||
                      /^(?:0x)?[0-9A-F]{40}$/iu.test(e))
                  )
                    return !0;
                  return !1;
                case "solana":
                  return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
                default:
                  return !1;
              }
            },
            uniqueBy(e, t) {
              let n = new Set();
              return e.filter((e) => {
                let r = e[t];
                return !n.has(r) && (n.add(r), !0);
              });
            },
            generateSdkVersion(e, t, n) {
              let r =
                0 === e.length
                  ? i.ADAPTER_TYPES.UNIVERSAL
                  : e.map((e) => e.adapterType).join(",");
              return "".concat(t, "-").concat(r, "-").concat(n);
            },
            createAccount: (e, t, n, r, o) => ({
              namespace: e,
              address: t,
              type: n,
              publicKey: r,
              path: o,
            }),
            isCaipAddress(e) {
              if ("string" != typeof e) return !1;
              let n = e.split(":"),
                r = n[0];
              return (
                3 === n.filter(Boolean).length &&
                r in t.ConstantsUtil.CHAIN_NAME_MAP
              );
            },
            getAccount: (e) =>
              e
                ? "string" == typeof e
                  ? { address: e, chainId: void 0 }
                  : { address: e.address, chainId: e.chainId }
                : { address: void 0, chainId: void 0 },
            isMac() {
              var e;
              let t =
                null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase();
              return t.includes("macintosh") && !t.includes("safari");
            },
            formatTelegramSocialLoginUrl(e) {
              var t;
              let n = "--".concat(
                  encodeURIComponent(
                    null == (t = window) ? void 0 : t.location.href
                  )
                ),
                r = "state=";
              if ("auth.magic.link" === new URL(e).host) {
                let t = "provider_authorization_url=",
                  o = e.substring(e.indexOf(t) + t.length),
                  a = this.injectIntoUrl(decodeURIComponent(o), r, n);
                return e.replace(o, encodeURIComponent(a));
              }
              return this.injectIntoUrl(e, r, n);
            },
            injectIntoUrl(e, t, n) {
              let r = e.indexOf(t);
              if (-1 === r)
                throw Error(
                  "".concat(t, " parameter not found in the URL: ").concat(e)
                );
              let o = e.indexOf("&", r),
                a = t.length,
                i = -1 !== o ? o : e.length,
                l = e.substring(0, r + a),
                s = e.substring(r + a, i);
              return l + (s + n) + e.substring(o);
            },
          };
      },
      [76107, 347547, 527410],
    ],
    253675: (e) => {
      "use strict";
      async function t() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let r = await fetch(...t);
        if (!r.ok)
          throw Error("HTTP status code: ".concat(r.status), { cause: r });
        return r;
      }
      e.s({ FetchUtil: () => n });
      class n {
        async get(e) {
          let { headers: n, signal: r, cache: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, { method: "GET", headers: n, signal: r, cache: o })
          ).json();
        }
        async getBlob(e) {
          let { headers: n, signal: r, ...o } = e,
            a = this.createUrl(o);
          return (await t(a, { method: "GET", headers: n, signal: r })).blob();
        }
        async post(e) {
          let { body: n, headers: r, signal: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, {
              method: "POST",
              headers: r,
              body: n ? JSON.stringify(n) : void 0,
              signal: o,
            })
          ).json();
        }
        async put(e) {
          let { body: n, headers: r, signal: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, {
              method: "PUT",
              headers: r,
              body: n ? JSON.stringify(n) : void 0,
              signal: o,
            })
          ).json();
        }
        async delete(e) {
          let { body: n, headers: r, signal: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, {
              method: "DELETE",
              headers: r,
              body: n ? JSON.stringify(n) : void 0,
              signal: o,
            })
          ).json();
        }
        createUrl(e) {
          let { path: t, params: n } = e,
            r = new URL(t, this.baseUrl);
          return (
            n &&
              Object.entries(n).forEach((e) => {
                let [t, n] = e;
                n && r.searchParams.append(t, n);
              }),
            this.clientId && r.searchParams.append("clientId", this.clientId),
            r
          );
        }
        constructor({ baseUrl: e, clientId: t }) {
          (this.baseUrl = e), (this.clientId = t);
        }
      }
    },
    24732: (e) => {
      "use strict";
      e.s({ proxyMap: () => i, subscribeKey: () => n });
      var t = e.i(861600);
      function n(e, n, r, o) {
        let a = e[n];
        return (0, t.subscribe)(
          e,
          () => {
            let t = e[n];
            Object.is(a, t) || r((a = t));
          },
          o
        );
      }
      Symbol();
      let { proxyStateMap: r, snapCache: o } = (0,
        t.unstable_getInternalStates)(),
        a = (e) => r.has(e);
      function i(e) {
        let n = [],
          r = 0,
          i = new Map(),
          l = new WeakMap(),
          s = (e) => l.get(e) || i;
        if (e) {
          if ("function" != typeof e[Symbol.iterator])
            throw TypeError(
              "proxyMap:\n	initial state must be iterable\n		tip: structure should be [[key, value]]"
            );
          for (let [t, o] of e) i.set(t, r), (n[r++] = o);
        }
        let c = {
            data: n,
            index: r,
            epoch: 0,
            get size() {
              return (
                a(this) ||
                  (() => {
                    let e = o.get(c),
                      t = null == e ? void 0 : e[1];
                    if (t && !l.has(t)) {
                      let e = new Map(i);
                      l.set(t, e);
                    }
                  })(),
                s(this).size
              );
            },
            get(e) {
              let t = s(this).get(e);
              return void 0 === t ? void this.epoch : this.data[t];
            },
            has(e) {
              let t = s(this);
              return this.epoch, t.has(e);
            },
            set(e, t) {
              if (!a(this))
                throw Error("Cannot perform mutations on a snapshot");
              let n = i.get(e);
              return (
                void 0 === n
                  ? (i.set(e, this.index), (this.data[this.index++] = t))
                  : (this.data[n] = t),
                this.epoch++,
                this
              );
            },
            delete(e) {
              if (!a(this))
                throw Error("Cannot perform mutations on a snapshot");
              let t = i.get(e);
              return (
                void 0 !== t &&
                (delete this.data[t], i.delete(e), this.epoch++, !0)
              );
            },
            clear() {
              if (!a(this))
                throw Error("Cannot perform mutations on a snapshot");
              (this.data.length = 0), (this.index = 0), this.epoch++, i.clear();
            },
            forEach(e) {
              this.epoch,
                s(this).forEach((t, n) => {
                  e(this.data[t], n, this);
                });
            },
            *entries() {
              for (let [e, t] of (this.epoch, s(this))) yield [e, this.data[t]];
            },
            *keys() {
              for (let e of (this.epoch, s(this).keys())) yield e;
            },
            *values() {
              for (let e of (this.epoch, s(this).values())) yield this.data[e];
            },
            [Symbol.iterator]() {
              return this.entries();
            },
            get [Symbol.toStringTag]() {
              return "Map";
            },
            toJSON() {
              return new Map(this.entries());
            },
          },
          u = (0, t.proxy)(c);
        return (
          Object.defineProperties(u, {
            size: { enumerable: !1 },
            index: { enumerable: !1 },
            epoch: { enumerable: !1 },
            data: { enumerable: !1 },
            toJSON: { enumerable: !1 },
          }),
          Object.seal(u),
          u
        );
      }
      let { proxyStateMap: l, snapCache: s } = (0,
      t.unstable_getInternalStates)();
    },
    737460: (e) => {
      "use strict";
      e.s({ OptionsController: () => l }, 737460);
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(76107),
        o = e.i(159055);
      let a = {
          getFeatureValue(e, t) {
            let n = null == t ? void 0 : t[e];
            return void 0 === n ? r.ConstantsUtil.DEFAULT_FEATURES[e] : n;
          },
          filterSocialsByPlatform(e) {
            if (!e || !e.length) return e;
            if (o.CoreHelperUtil.isTelegram()) {
              if (o.CoreHelperUtil.isIos())
                return e.filter((e) => "google" !== e);
              if (o.CoreHelperUtil.isMac()) return e.filter((e) => "x" !== e);
              if (o.CoreHelperUtil.isAndroid())
                return e.filter((e) => !["facebook", "x"].includes(e));
            }
            return e;
          },
        },
        i = (0, t.proxy)({
          features: r.ConstantsUtil.DEFAULT_FEATURES,
          projectId: "",
          sdkType: "appkit",
          sdkVersion: "html-wagmi-undefined",
          defaultAccountTypes: r.ConstantsUtil.DEFAULT_ACCOUNT_TYPES,
          enableNetworkSwitch: !0,
          experimental_preferUniversalLinks: !1,
          remoteFeatures: {},
        }),
        l = {
          state: i,
          subscribeKey: (e, t) => (0, n.subscribeKey)(i, e, t),
          setOptions(e) {
            Object.assign(i, e);
          },
          setRemoteFeatures(e) {
            var t, n;
            if (!e) return;
            let r = { ...i.remoteFeatures, ...e };
            (i.remoteFeatures = r),
              (null == (t = i.remoteFeatures) ? void 0 : t.socials) &&
                (i.remoteFeatures.socials = a.filterSocialsByPlatform(
                  i.remoteFeatures.socials
                )),
              (null == (n = i.features) ? void 0 : n.pay) &&
                ((i.remoteFeatures.email = !1),
                (i.remoteFeatures.socials = !1));
          },
          setFeatures(e) {
            var t;
            if (!e) return;
            i.features || (i.features = r.ConstantsUtil.DEFAULT_FEATURES);
            let n = { ...i.features, ...e };
            (i.features = n),
              (null == (t = i.features) ? void 0 : t.pay) &&
                i.remoteFeatures &&
                ((i.remoteFeatures.email = !1),
                (i.remoteFeatures.socials = !1));
          },
          setProjectId(e) {
            i.projectId = e;
          },
          setCustomRpcUrls(e) {
            i.customRpcUrls = e;
          },
          setAllWallets(e) {
            i.allWallets = e;
          },
          setIncludeWalletIds(e) {
            i.includeWalletIds = e;
          },
          setExcludeWalletIds(e) {
            i.excludeWalletIds = e;
          },
          setFeaturedWalletIds(e) {
            i.featuredWalletIds = e;
          },
          setTokens(e) {
            i.tokens = e;
          },
          setTermsConditionsUrl(e) {
            i.termsConditionsUrl = e;
          },
          setPrivacyPolicyUrl(e) {
            i.privacyPolicyUrl = e;
          },
          setCustomWallets(e) {
            i.customWallets = e;
          },
          setIsSiweEnabled(e) {
            i.isSiweEnabled = e;
          },
          setIsUniversalProvider(e) {
            i.isUniversalProvider = e;
          },
          setSdkVersion(e) {
            i.sdkVersion = e;
          },
          setMetadata(e) {
            i.metadata = e;
          },
          setDisableAppend(e) {
            i.disableAppend = e;
          },
          setEIP6963Enabled(e) {
            i.enableEIP6963 = e;
          },
          setDebug(e) {
            i.debug = e;
          },
          setEnableWalletConnect(e) {
            i.enableWalletConnect = e;
          },
          setEnableWalletGuide(e) {
            i.enableWalletGuide = e;
          },
          setEnableAuthLogger(e) {
            i.enableAuthLogger = e;
          },
          setEnableWallets(e) {
            i.enableWallets = e;
          },
          setPreferUniversalLinks(e) {
            i.experimental_preferUniversalLinks = e;
          },
          setSIWX(e) {
            if (e)
              for (let [t, n] of Object.entries(r.ConstantsUtil.SIWX_DEFAULTS))
                null != e[t] || (e[t] = n);
            i.siwx = e;
          },
          setConnectMethodsOrder(e) {
            i.features = { ...i.features, connectMethodsOrder: e };
          },
          setWalletFeaturesOrder(e) {
            i.features = { ...i.features, walletFeaturesOrder: e };
          },
          setSocialsOrder(e) {
            i.remoteFeatures = { ...i.remoteFeatures, socials: e };
          },
          setCollapseWallets(e) {
            i.features = { ...i.features, collapseWallets: e };
          },
          setEnableEmbedded(e) {
            i.enableEmbedded = e;
          },
          setAllowUnsupportedChain(e) {
            i.allowUnsupportedChain = e;
          },
          setManualWCControl(e) {
            i.manualWCControl = e;
          },
          setEnableNetworkSwitch(e) {
            i.enableNetworkSwitch = e;
          },
          setEnableReconnect(e) {
            i.enableReconnect = e;
          },
          setDefaultAccountTypes() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              n && (i.defaultAccountTypes[t] = n);
            });
          },
          setUniversalProviderConfigOverride(e) {
            i.universalProviderConfigOverride = e;
          },
          getUniversalProviderConfigOverride: () =>
            i.universalProviderConfigOverride,
          getSnapshot: () => (0, t.snapshot)(i),
        };
    },
    778221: (e) => {
      "use strict";
      e.s({ AppKitError: () => u, withErrorBoundary: () => p }, 778221);
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(159055),
        o = e.i(253675),
        a = e.i(737460);
      let i = Object.freeze({ enabled: !0, events: [] }),
        l = new o.FetchUtil({
          baseUrl: r.CoreHelperUtil.getAnalyticsUrl(),
          clientId: null,
        }),
        s = (0, t.proxy)({ ...i }),
        c = {
          state: s,
          subscribeKey: (e, t) => (0, n.subscribeKey)(s, e, t),
          async sendError(e, t) {
            if (!s.enabled) return;
            let n = Date.now();
            if (
              s.events.filter(
                (e) =>
                  n - new Date(e.properties.timestamp || "").getTime() < 6e4
              ).length >= 5
            )
              return;
            let o = {
              type: "error",
              event: t,
              properties: {
                errorType: e.name,
                errorMessage: e.message,
                stackTrace: e.stack,
                timestamp: new Date().toISOString(),
              },
            };
            s.events.push(o);
            try {
              if ("undefined" == typeof window) return;
              let {
                projectId: n,
                sdkType: o,
                sdkVersion: i,
              } = a.OptionsController.state;
              await l.post({
                path: "/e",
                params: { projectId: n, st: o, sv: i || "html-wagmi-4.2.2" },
                body: {
                  eventId: r.CoreHelperUtil.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: new Date().toISOString(),
                  props: {
                    type: "error",
                    event: t,
                    errorType: e.name,
                    errorMessage: e.message,
                    stackTrace: e.stack,
                  },
                },
              });
            } catch (e) {}
          },
          enable() {
            s.enabled = !0;
          },
          disable() {
            s.enabled = !1;
          },
          clearEvents() {
            s.events = [];
          },
        };
      class u extends Error {
        constructor(e, t, n) {
          super(e),
            (this.name = "AppKitError"),
            (this.category = t),
            (this.originalError = n),
            Object.setPrototypeOf(this, u.prototype);
          let r = !1;
          if (n instanceof Error && "string" == typeof n.stack && n.stack) {
            let e = n.stack,
              t = e.indexOf("\n");
            if (t > -1) {
              let n = e.substring(t + 1);
              (this.stack = ""
                .concat(this.name, ": ")
                .concat(this.message, "\n")
                .concat(n)),
                (r = !0);
            }
          }
          !r &&
            (Error.captureStackTrace
              ? Error.captureStackTrace(this, u)
              : this.stack ||
                (this.stack = "".concat(this.name, ": ").concat(this.message)));
        }
      }
      function d(e, t) {
        let n =
          e instanceof u
            ? e
            : new u(e instanceof Error ? e.message : String(e), t, e);
        throw (c.sendError(n, n.category), n);
      }
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "INTERNAL_SDK_ERROR",
          n = {};
        return (
          Object.keys(e).forEach((r) => {
            let o = e[r];
            if ("function" == typeof o) {
              let e = o;
              (e =
                "AsyncFunction" === o.constructor.name
                  ? async function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      try {
                        return await o(...n);
                      } catch (e) {
                        return d(e, t);
                      }
                    }
                  : function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      try {
                        return o(...n);
                      } catch (e) {
                        return d(e, t);
                      }
                    }),
                (n[r] = e);
            } else n[r] = o;
          }),
          n
        );
      }
    },
    517889: (e) => {
      "use strict";
      function t(e, t) {
        return "light" === t
          ? {
              "--w3m-accent":
                (null == e ? void 0 : e["--w3m-accent"]) ||
                "hsla(231, 100%, 70%, 1)",
              "--w3m-background": "#fff",
            }
          : {
              "--w3m-accent":
                (null == e ? void 0 : e["--w3m-accent"]) ||
                "hsla(230, 100%, 67%, 1)",
              "--w3m-background": "#121313",
            };
      }
      e.s({ getW3mThemeVariables: () => t });
    },
    201024: (e) => {
      "use strict";
      e.s({ CUSTOM_DEEPLINK_WALLETS: () => n, MobileWalletUtil: () => r });
      var t = e.i(605726);
      let n = {
          PHANTOM: {
            id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            url: "https://phantom.app",
          },
          SOLFLARE: {
            id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            url: "https://solflare.com",
          },
          COINBASE: {
            id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            url: "https://go.cb-w.com",
          },
        },
        r = {
          handleMobileDeeplinkRedirect(e, r) {
            let o = window.location.href,
              a = encodeURIComponent(o);
            if (e === n.PHANTOM.id && !("phantom" in window)) {
              let e = o.startsWith("https") ? "https" : "http",
                t = o.split("/")[2],
                r = encodeURIComponent("".concat(e, "://").concat(t));
              window.location.href = ""
                .concat(n.PHANTOM.url, "/ul/browse/")
                .concat(a, "?ref=")
                .concat(r);
            }
            e !== n.SOLFLARE.id ||
              "solflare" in window ||
              (window.location.href = ""
                .concat(n.SOLFLARE.url, "/ul/v1/browse/")
                .concat(a, "?ref=")
                .concat(a)),
              r !== t.ConstantsUtil.CHAIN.SOLANA ||
                e !== n.COINBASE.id ||
                "coinbaseSolana" in window ||
                (window.location.href = ""
                  .concat(n.COINBASE.url, "/dapp?cb_url=")
                  .concat(a));
          },
        };
    },
    841768: (e) => {
      "use strict";
      e.s({ AssetController: () => a });
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(778221);
      let o = (0, t.proxy)({
          walletImages: {},
          networkImages: {},
          chainImages: {},
          connectorImages: {},
          tokenImages: {},
          currencyImages: {},
        }),
        a = (0, r.withErrorBoundary)({
          state: o,
          subscribeNetworkImages: (e) =>
            (0, t.subscribe)(o.networkImages, () => e(o.networkImages)),
          subscribeKey: (e, t) => (0, n.subscribeKey)(o, e, t),
          subscribe: (e) => (0, t.subscribe)(o, () => e(o)),
          setWalletImage(e, t) {
            o.walletImages[e] = t;
          },
          setNetworkImage(e, t) {
            o.networkImages[e] = t;
          },
          setChainImage(e, t) {
            o.chainImages[e] = t;
          },
          setConnectorImage(e, t) {
            o.connectorImages = { ...o.connectorImages, [e]: t };
          },
          setTokenImage(e, t) {
            o.tokenImages[e] = t;
          },
          setCurrencyImage(e, t) {
            o.currencyImages[e] = t;
          },
        });
    },
    596373: (e) => {
      "use strict";
      e.s({ AssetUtil: () => i });
      var t = e.i(861600),
        n = e.i(69393),
        r = e.i(841768);
      let o = {
          eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
          solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
          polkadot: "",
          bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
          cosmos: "",
        },
        a = (0, t.proxy)({ networkImagePromises: {} }),
        i = {
          async fetchWalletImage(e) {
            if (e)
              return (
                await n.ApiController._fetchWalletImage(e),
                this.getWalletImageById(e)
              );
          },
          async fetchNetworkImage(e) {
            if (!e) return;
            let t = this.getNetworkImageById(e);
            return (
              t ||
              (a.networkImagePromises[e] ||
                (a.networkImagePromises[e] =
                  n.ApiController._fetchNetworkImage(e)),
              await a.networkImagePromises[e],
              this.getNetworkImageById(e))
            );
          },
          getWalletImageById(e) {
            if (e) return r.AssetController.state.walletImages[e];
          },
          getWalletImage: (e) =>
            (null == e ? void 0 : e.image_url)
              ? null == e
                ? void 0
                : e.image_url
              : (null == e ? void 0 : e.image_id)
              ? r.AssetController.state.walletImages[e.image_id]
              : void 0,
          getNetworkImage(e) {
            var t, n, o;
            return (null == e || null == (t = e.assets) ? void 0 : t.imageUrl)
              ? null == e || null == (o = e.assets)
                ? void 0
                : o.imageUrl
              : (null == e || null == (n = e.assets) ? void 0 : n.imageId)
              ? r.AssetController.state.networkImages[e.assets.imageId]
              : void 0;
          },
          getNetworkImageById(e) {
            if (e) return r.AssetController.state.networkImages[e];
          },
          getConnectorImage(e) {
            var t;
            return (null == e ? void 0 : e.imageUrl)
              ? e.imageUrl
              : (null == e || null == (t = e.info) ? void 0 : t.icon)
              ? e.info.icon
              : (null == e ? void 0 : e.imageId)
              ? r.AssetController.state.connectorImages[e.imageId]
              : void 0;
          },
          getChainImage: (e) => r.AssetController.state.networkImages[o[e]],
        };
    },
    362168: (e) => {
      "use strict";
      e.s({ AlertController: () => i });
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(778221),
        o = e.i(737460);
      let a = (0, t.proxy)({ message: "", variant: "info", open: !1 }),
        i = (0, r.withErrorBoundary)({
          state: a,
          subscribeKey: (e, t) => (0, n.subscribeKey)(a, e, t),
          open(e, t) {
            let { debug: n } = o.OptionsController.state,
              { shortMessage: r, longMessage: i } = e;
            n && ((a.message = r), (a.variant = t), (a.open = !0)),
              i && console.error("function" == typeof i ? i() : i);
          },
          close() {
            (a.open = !1), (a.message = ""), (a.variant = "info");
          },
        });
    },
    755111: (e) => {
      "use strict";
      e.s({ EventsController: () => C });
      var t = e.i(861600),
        n = e.i(605726),
        r = e.i(347547),
        o = e.i(159055),
        a = e.i(253675),
        i = e.i(705258),
        l = e.i(362168),
        s = e.i(737460);
      let c = o.CoreHelperUtil.getAnalyticsUrl(),
        u = new a.FetchUtil({ baseUrl: c, clientId: null }),
        d = ["MODAL_CREATED"],
        p = (0, t.proxy)({
          timestamp: Date.now(),
          reportedErrors: {},
          data: { type: "track", event: "MODAL_CREATED" },
        }),
        C = {
          state: p,
          subscribe: (e) => (0, t.subscribe)(p, () => e(p)),
          getSdkProperties() {
            let {
              projectId: e,
              sdkType: t,
              sdkVersion: n,
            } = s.OptionsController.state;
            return { projectId: e, st: t, sv: n || "html-wagmi-4.2.2" };
          },
          async _sendAnalyticsEvent(e) {
            try {
              let t = i.AccountController.state.address;
              if (d.includes(e.data.event) || "undefined" == typeof window)
                return;
              await u.post({
                path: "/e",
                params: C.getSdkProperties(),
                body: {
                  eventId: o.CoreHelperUtil.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: e.timestamp,
                  props: { ...e.data, address: t },
                },
              }),
                (p.reportedErrors.FORBIDDEN = !1);
            } catch (e) {
              e instanceof Error &&
                e.cause instanceof Response &&
                e.cause.status ===
                  n.ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN &&
                !p.reportedErrors.FORBIDDEN &&
                (l.AlertController.open(
                  {
                    shortMessage: "Invalid App Configuration",
                    longMessage: "Origin ".concat(
                      (0, r.isSafe)() ? window.origin : "uknown",
                      " not found on Allowlist - update configuration on cloud.reown.com"
                    ),
                  },
                  "error"
                ),
                (p.reportedErrors.FORBIDDEN = !0));
            }
          },
          sendEvent(e) {
            var t;
            (p.timestamp = Date.now()),
              (p.data = e),
              ((null == (t = s.OptionsController.state.features)
                ? void 0
                : t.analytics) ||
                "INITIALIZE" === e.event) &&
                C._sendAnalyticsEvent(p);
          },
        };
    },
    69393: (e) => {
      "use strict";
      e.s({ ApiController: () => h });
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(605726),
        o = e.i(596373),
        a = e.i(159055),
        i = e.i(253675),
        l = e.i(201024),
        s = e.i(527410),
        c = e.i(841768),
        u = e.i(631867),
        d = e.i(225335),
        p = e.i(755111),
        C = e.i(737460);
      let m = a.CoreHelperUtil.getApiUrl(),
        w = new i.FetchUtil({ baseUrl: m, clientId: null }),
        g = (0, t.proxy)({
          promises: {},
          page: 1,
          count: 0,
          featured: [],
          allFeatured: [],
          recommended: [],
          allRecommended: [],
          wallets: [],
          filteredWallets: [],
          search: [],
          isAnalyticsEnabled: !1,
          excludedWallets: [],
          isFetchingRecommendedWallets: !1,
        }),
        h = {
          state: g,
          subscribeKey: (e, t) => (0, n.subscribeKey)(g, e, t),
          _getSdkProperties() {
            let {
              projectId: e,
              sdkType: t,
              sdkVersion: n,
            } = C.OptionsController.state;
            return {
              projectId: e,
              st: t || "appkit",
              sv: n || "html-wagmi-4.2.2",
            };
          },
          _filterOutExtensions: (e) =>
            C.OptionsController.state.isUniversalProvider
              ? e.filter(
                  (e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)
                )
              : e,
          async _fetchWalletImage(e) {
            let t = "".concat(w.baseUrl, "/getWalletImage/").concat(e),
              n = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setWalletImage(e, URL.createObjectURL(n));
          },
          async _fetchNetworkImage(e) {
            let t = "".concat(w.baseUrl, "/public/getAssetImage/").concat(e),
              n = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setNetworkImage(e, URL.createObjectURL(n));
          },
          async _fetchConnectorImage(e) {
            let t = "".concat(w.baseUrl, "/public/getAssetImage/").concat(e),
              n = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setConnectorImage(e, URL.createObjectURL(n));
          },
          async _fetchCurrencyImage(e) {
            let t = "".concat(w.baseUrl, "/public/getCurrencyImage/").concat(e),
              n = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setCurrencyImage(e, URL.createObjectURL(n));
          },
          async _fetchTokenImage(e) {
            let t = "".concat(w.baseUrl, "/public/getTokenImage/").concat(e),
              n = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setTokenImage(e, URL.createObjectURL(n));
          },
          _filterWalletsByPlatform: (e) =>
            a.CoreHelperUtil.isMobile()
              ? null == e
                ? void 0
                : e.filter(
                    (e) =>
                      !!e.mobile_link ||
                      e.id === l.CUSTOM_DEEPLINK_WALLETS.COINBASE.id ||
                      ("solana" === u.ChainController.state.activeChain &&
                        (e.id === l.CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id ||
                          e.id === l.CUSTOM_DEEPLINK_WALLETS.PHANTOM.id))
                  )
              : e,
          fetchProjectConfig: async () =>
            (
              await w.get({
                path: "/appkit/v1/config",
                params: h._getSdkProperties(),
              })
            ).features,
          async fetchAllowedOrigins() {
            try {
              let { allowedOrigins: e } = await w.get({
                path: "/projects/v1/origins",
                params: h._getSdkProperties(),
              });
              return e;
            } catch (e) {
              if (e instanceof Error && e.cause instanceof Response) {
                let t = e.cause.status;
                if (t === r.ConstantsUtil.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)
                  throw Error("RATE_LIMITED", { cause: e });
                if (
                  t >= r.ConstantsUtil.HTTP_STATUS_CODES.SERVER_ERROR &&
                  t < 600
                )
                  throw Error("SERVER_ERROR", { cause: e });
              }
              return [];
            }
          },
          async fetchNetworkImages() {
            let e = u.ChainController.getAllRequestedCaipNetworks(),
              t =
                null == e
                  ? void 0
                  : e
                      .map((e) => {
                        let { assets: t } = e;
                        return null == t ? void 0 : t.imageId;
                      })
                      .filter(Boolean)
                      .filter((e) => !o.AssetUtil.getNetworkImageById(e));
            t &&
              (await Promise.allSettled(t.map((e) => h._fetchNetworkImage(e))));
          },
          async fetchConnectorImages() {
            let { connectors: e } = d.ConnectorController.state,
              t = e
                .map((e) => {
                  let { imageId: t } = e;
                  return t;
                })
                .filter(Boolean);
            await Promise.allSettled(t.map((e) => h._fetchConnectorImage(e)));
          },
          async fetchCurrencyImages() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            await Promise.allSettled(e.map((e) => h._fetchCurrencyImage(e)));
          },
          async fetchTokenImages() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            await Promise.allSettled(e.map((e) => h._fetchTokenImage(e)));
          },
          async fetchWallets(e) {
            var t, n;
            let r = null != (n = e.exclude) ? n : [];
            h._getSdkProperties().sv.startsWith("html-core-") &&
              r.push(
                ...Object.values(l.CUSTOM_DEEPLINK_WALLETS).map((e) => e.id)
              );
            let o = await w.get({
              path: "/getWallets",
              params: {
                ...h._getSdkProperties(),
                ...e,
                page: String(e.page),
                entries: String(e.entries),
                include: null == (t = e.include) ? void 0 : t.join(","),
                exclude: r.join(","),
              },
            });
            return {
              data:
                h._filterWalletsByPlatform(null == o ? void 0 : o.data) || [],
              count: null == o ? void 0 : o.count,
            };
          },
          async fetchFeaturedWallets() {
            let { featuredWalletIds: e } = C.OptionsController.state;
            if (null == e ? void 0 : e.length) {
              var t;
              let n = {
                  ...h._getSdkProperties(),
                  page: 1,
                  entries: null != (t = null == e ? void 0 : e.length) ? t : 4,
                  include: e,
                },
                { data: r } = await h.fetchWallets(n),
                o = [...r].sort((t, n) => e.indexOf(t.id) - e.indexOf(n.id)),
                a = o.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(a.map((e) => h._fetchWalletImage(e))),
                (g.featured = o),
                (g.allFeatured = o);
            }
          },
          async fetchRecommendedWallets() {
            try {
              g.isFetchingRecommendedWallets = !0;
              let {
                  includeWalletIds: e,
                  excludeWalletIds: t,
                  featuredWalletIds: n,
                } = C.OptionsController.state,
                r = [...(null != t ? t : []), ...(null != n ? n : [])].filter(
                  Boolean
                ),
                o = u.ChainController.getRequestedCaipNetworkIds().join(","),
                { data: a, count: i } = await h.fetchWallets({
                  page: 1,
                  entries: 4,
                  include: e,
                  exclude: r,
                  chains: o,
                }),
                l = s.StorageUtil.getRecentWallets(),
                c = a.map((e) => e.image_id).filter(Boolean),
                d = l.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(
                [...c, ...d].map((e) => h._fetchWalletImage(e))
              ),
                (g.recommended = a),
                (g.allRecommended = a),
                (g.count = null != i ? i : 0);
            } catch (e) {
            } finally {
              g.isFetchingRecommendedWallets = !1;
            }
          },
          async fetchWalletsByPage(e) {
            let { page: t } = e,
              {
                includeWalletIds: n,
                excludeWalletIds: r,
                featuredWalletIds: o,
              } = C.OptionsController.state,
              i = u.ChainController.getRequestedCaipNetworkIds().join(","),
              l = [
                ...g.recommended.map((e) => {
                  let { id: t } = e;
                  return t;
                }),
                ...(null != r ? r : []),
                ...(null != o ? o : []),
              ].filter(Boolean),
              { data: s, count: c } = await h.fetchWallets({
                page: t,
                entries: 40,
                include: n,
                exclude: l,
                chains: i,
              }),
              d = s
                .slice(0, 20)
                .map((e) => e.image_id)
                .filter(Boolean);
            await Promise.allSettled(d.map((e) => h._fetchWalletImage(e))),
              (g.wallets = a.CoreHelperUtil.uniqueBy(
                [...g.wallets, ...h._filterOutExtensions(s)],
                "id"
              ).filter((e) => {
                var t;
                return null == (t = e.chains)
                  ? void 0
                  : t.some((e) => i.includes(e));
              })),
              (g.count = c > g.count ? c : g.count),
              (g.page = t);
          },
          async initializeExcludedWallets(e) {
            let { ids: t } = e,
              n = { page: 1, entries: t.length, include: t },
              { data: r } = await h.fetchWallets(n);
            r &&
              r.forEach((e) => {
                g.excludedWallets.push({ rdns: e.rdns, name: e.name });
              });
          },
          async searchWallet(e) {
            let { search: t, badge: n } = e,
              { includeWalletIds: r, excludeWalletIds: o } =
                C.OptionsController.state,
              i = u.ChainController.getRequestedCaipNetworkIds().join(",");
            g.search = [];
            let l = {
                page: 1,
                entries: 100,
                search: null == t ? void 0 : t.trim(),
                badge_type: n,
                include: r,
                exclude: o,
                chains: i,
              },
              { data: s } = await h.fetchWallets(l);
            p.EventsController.sendEvent({
              type: "track",
              event: "SEARCH_WALLET",
              properties: {
                badge: null != n ? n : "",
                search: null != t ? t : "",
              },
            });
            let c = s.map((e) => e.image_id).filter(Boolean);
            await Promise.allSettled([
              ...c.map((e) => h._fetchWalletImage(e)),
              a.CoreHelperUtil.wait(300),
            ]),
              (g.search = h._filterOutExtensions(s));
          },
          initPromise(e, t) {
            let n = g.promises[e];
            return n || (g.promises[e] = t());
          },
          prefetch() {
            let {
              fetchConnectorImages: e = !0,
              fetchFeaturedWallets: t = !0,
              fetchRecommendedWallets: n = !0,
              fetchNetworkImages: r = !0,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            return Promise.allSettled(
              [
                e && h.initPromise("connectorImages", h.fetchConnectorImages),
                t && h.initPromise("featuredWallets", h.fetchFeaturedWallets),
                n &&
                  h.initPromise(
                    "recommendedWallets",
                    h.fetchRecommendedWallets
                  ),
                r && h.initPromise("networkImages", h.fetchNetworkImages),
              ].filter(Boolean)
            );
          },
          prefetchAnalyticsConfig() {
            var e;
            (null == (e = C.OptionsController.state.features)
              ? void 0
              : e.analytics) && h.fetchAnalyticsConfig();
          },
          async fetchAnalyticsConfig() {
            try {
              let { isAnalyticsEnabled: e } = await w.get({
                path: "/getAnalyticsConfig",
                params: h._getSdkProperties(),
              });
              C.OptionsController.setFeatures({ analytics: e });
            } catch (e) {
              C.OptionsController.setFeatures({ analytics: !1 });
            }
          },
          filterByNamespaces(e) {
            if (!(null == e ? void 0 : e.length)) {
              (g.featured = g.allFeatured), (g.recommended = g.allRecommended);
              return;
            }
            let t = u.ChainController.getRequestedCaipNetworkIds().join(",");
            (g.featured = g.allFeatured.filter((e) => {
              var n;
              return null == (n = e.chains)
                ? void 0
                : n.some((e) => t.includes(e));
            })),
              (g.recommended = g.allRecommended.filter((e) => {
                var n;
                return null == (n = e.chains)
                  ? void 0
                  : n.some((e) => t.includes(e));
              })),
              (g.filteredWallets = g.wallets.filter((e) => {
                var n;
                return null == (n = e.chains)
                  ? void 0
                  : n.some((e) => t.includes(e));
              }));
          },
          clearFilterByNamespaces() {
            g.filteredWallets = [];
          },
          setFilterByNamespace(e) {
            if (!e) {
              (g.featured = g.allFeatured), (g.recommended = g.allRecommended);
              return;
            }
            let t = u.ChainController.getRequestedCaipNetworkIds().join(",");
            (g.featured = g.allFeatured.filter((e) => {
              var n;
              return null == (n = e.chains)
                ? void 0
                : n.some((e) => t.includes(e));
            })),
              (g.recommended = g.allRecommended.filter((e) => {
                var n;
                return null == (n = e.chains)
                  ? void 0
                  : n.some((e) => t.includes(e));
              })),
              (g.filteredWallets = g.wallets.filter((e) => {
                var n;
                return null == (n = e.chains)
                  ? void 0
                  : n.some((e) => t.includes(e));
              }));
          },
        };
    },
    899767: (e) => {
      "use strict";
      e.s({ NetworkUtil: () => i });
      var t = e.i(605726),
        n = e.i(705258),
        r = e.i(631867),
        o = e.i(225335),
        a = e.i(157653);
      let i = {
        onSwitchNetwork(e) {
          let { network: i, ignoreSwitchConfirmation: l = !1 } = e,
            s = r.ChainController.state.activeCaipNetwork,
            c = a.RouterController.state.data;
          if (i.id === (null == s ? void 0 : s.id)) return;
          let u = n.AccountController.getCaipAddress(
              r.ChainController.state.activeChain
            ),
            d = i.chainNamespace !== r.ChainController.state.activeChain,
            p = n.AccountController.getCaipAddress(i.chainNamespace),
            C =
              o.ConnectorController.getConnectorId(
                r.ChainController.state.activeChain
              ) === t.ConstantsUtil.CONNECTOR_ID.AUTH,
            m = t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (e) => e === i.chainNamespace
            );
          l || (C && m)
            ? a.RouterController.push("SwitchNetwork", { ...c, network: i })
            : u && d && !p
            ? a.RouterController.push("SwitchActiveChain", {
                switchToChain: i.chainNamespace,
                navigateTo: "Connect",
                navigateWithReplace: !0,
                network: i,
              })
            : a.RouterController.push("SwitchNetwork", { ...c, network: i });
        },
      };
    },
    339910: (e) => {
      "use strict";
      e.s({ PublicStateController: () => o });
      var t = e.i(861600),
        n = e.i(24732);
      let r = (0, t.proxy)({
          loading: !1,
          open: !1,
          selectedNetworkId: void 0,
          activeChain: void 0,
          initialized: !1,
        }),
        o = {
          state: r,
          subscribe: (e) => (0, t.subscribe)(r, () => e(r)),
          subscribeOpen: (e) => (0, n.subscribeKey)(r, "open", e),
          set(e) {
            Object.assign(r, { ...r, ...e });
          },
        };
    },
    563493: (e) => {
      "use strict";
      e.s({ ModalController: () => w });
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(159055),
        o = e.i(899767),
        a = e.i(778221),
        i = e.i(69393),
        l = e.i(631867),
        s = e.i(875073),
        c = e.i(225335),
        u = e.i(755111),
        d = e.i(737460),
        p = e.i(339910),
        C = e.i(157653);
      let m = (0, t.proxy)({
          loading: !1,
          loadingNamespaceMap: new Map(),
          open: !1,
          shake: !1,
          namespace: void 0,
        }),
        w = (0, a.withErrorBoundary)({
          state: m,
          subscribe: (e) => (0, t.subscribe)(m, () => e(m)),
          subscribeKey: (e, t) => (0, n.subscribeKey)(m, e, t),
          async open(e) {
            var t, n;
            let a = null == e ? void 0 : e.namespace,
              g = l.ChainController.state.activeChain,
              h = a && a !== g,
              v =
                null ==
                (t = l.ChainController.getAccountData(
                  null == e ? void 0 : e.namespace
                ))
                  ? void 0
                  : t.caipAddress;
            if (
              (s.ConnectionController.state.wcBasic
                ? i.ApiController.prefetch({
                    fetchNetworkImages: !1,
                    fetchConnectorImages: !1,
                  })
                : await i.ApiController.prefetch(),
              c.ConnectorController.setFilterByNamespace(
                null == e ? void 0 : e.namespace
              ),
              w.setLoading(!0, a),
              a && h)
            ) {
              let e =
                (null == (n = l.ChainController.getNetworkData(a))
                  ? void 0
                  : n.caipNetwork) ||
                l.ChainController.getRequestedCaipNetworks(a)[0];
              e &&
                o.NetworkUtil.onSwitchNetwork({
                  network: e,
                  ignoreSwitchConfirmation: !0,
                });
            } else {
              let t = l.ChainController.state.noAdapters;
              d.OptionsController.state.manualWCControl || (t && !v)
                ? r.CoreHelperUtil.isMobile()
                  ? C.RouterController.reset("AllWallets")
                  : C.RouterController.reset("ConnectingWalletConnectBasic")
                : (null == e ? void 0 : e.view)
                ? C.RouterController.reset(e.view, e.data)
                : v
                ? C.RouterController.reset("Account")
                : C.RouterController.reset("Connect");
            }
            (m.open = !0),
              p.PublicStateController.set({ open: !0 }),
              u.EventsController.sendEvent({
                type: "track",
                event: "MODAL_OPEN",
                properties: { connected: !!v },
              });
          },
          close() {
            let e = d.OptionsController.state.enableEmbedded,
              t = !!l.ChainController.state.activeCaipAddress;
            m.open &&
              u.EventsController.sendEvent({
                type: "track",
                event: "MODAL_CLOSE",
                properties: { connected: t },
              }),
              (m.open = !1),
              C.RouterController.reset("Connect"),
              w.clearLoading(),
              e
                ? t
                  ? C.RouterController.replace("Account")
                  : C.RouterController.push("Connect")
                : p.PublicStateController.set({ open: !1 }),
              s.ConnectionController.resetUri();
          },
          setLoading(e, t) {
            t && m.loadingNamespaceMap.set(t, e),
              (m.loading = e),
              p.PublicStateController.set({ loading: e });
          },
          clearLoading() {
            m.loadingNamespaceMap.clear(), (m.loading = !1);
          },
          shake() {
            m.shake ||
              ((m.shake = !0),
              setTimeout(() => {
                m.shake = !1;
              }, 500));
          },
        });
    },
    157653: (e) => {
      "use strict";
      e.s({ RouterController: () => u });
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(778221),
        o = e.i(705258),
        a = e.i(631867),
        i = e.i(225335),
        l = e.i(563493),
        s = e.i(737460);
      let c = (0, t.proxy)({
          view: "Connect",
          history: ["Connect"],
          transactionStack: [],
        }),
        u = (0, r.withErrorBoundary)({
          state: c,
          subscribeKey: (e, t) => (0, n.subscribeKey)(c, e, t),
          pushTransactionStack(e) {
            c.transactionStack.push(e);
          },
          popTransactionStack(e) {
            let t = c.transactionStack.pop();
            if (!t) return;
            let { onSuccess: n, onError: r, onCancel: o } = t;
            switch (e) {
              case "success":
                null == n || n();
                break;
              case "error":
                null == r || r(), u.goBack();
                break;
              case "cancel":
                null == o || o(), u.goBack();
            }
          },
          push(e, t) {
            e !== c.view && ((c.view = e), c.history.push(e), (c.data = t));
          },
          reset(e, t) {
            (c.view = e), (c.history = [e]), (c.data = t);
          },
          replace(e, t) {
            c.history.at(-1) !== e &&
              ((c.view = e),
              (c.history[c.history.length - 1] = e),
              (c.data = t));
          },
          goBack() {
            var e;
            let n = a.ChainController.state.activeCaipAddress,
              r = "ConnectingFarcaster" === u.state.view,
              d = !n && r;
            if (c.history.length > 1) {
              c.history.pop();
              let [e] = c.history.slice(-1);
              e && (n && "Connect" === e ? (c.view = "Account") : (c.view = e));
            } else l.ModalController.close();
            (null == (e = c.data) ? void 0 : e.wallet) &&
              (c.data.wallet = void 0),
              setTimeout(() => {
                if (d) {
                  var e, n, r;
                  o.AccountController.setFarcasterUrl(
                    void 0,
                    a.ChainController.state.activeChain
                  );
                  let l = i.ConnectorController.getAuthConnector();
                  null == l || null == (e = l.provider) || e.reload();
                  let c = (0, t.snapshot)(s.OptionsController.state);
                  null == l ||
                    null == (r = l.provider) ||
                    null == (n = r.syncDappData) ||
                    n.call(r, {
                      metadata: c.metadata,
                      sdkVersion: c.sdkVersion,
                      projectId: c.projectId,
                      sdkType: c.sdkType,
                    });
                }
              }, 100);
          },
          goBackToIndex(e) {
            if (c.history.length > 1) {
              c.history = c.history.slice(0, e + 1);
              let [t] = c.history.slice(-1);
              t && (c.view = t);
            }
          },
          goBackOrCloseModal() {
            u.state.history.length > 1 ? u.goBack() : l.ModalController.close();
          },
        });
    },
    225335: [
      (e) => {
        "use strict";
        e.s({ ConnectorController: () => E }, 225335);
        var t = e.i(861600),
          n = e.i(24732),
          r = e.i(605726),
          o = e.i(517889),
          a = e.i(351667),
          i = e.i(77217),
          l = e.i(201024),
          s = e.i(527410),
          c = e.i(778221),
          u = e.i(69393),
          d = e.i(631867),
          p = e.i(737460),
          C = e.i(157653);
        e.s({ ThemeController: () => g }, 350666);
        let m = (0, t.proxy)({
            themeMode: "dark",
            themeVariables: {},
            w3mThemeVariables: void 0,
          }),
          w = {
            state: m,
            subscribe: (e) => (0, t.subscribe)(m, () => e(m)),
            setThemeMode(e) {
              m.themeMode = e;
              try {
                let t = E.getAuthConnector();
                if (t) {
                  let n = w.getSnapshot().themeVariables;
                  t.provider.syncTheme({
                    themeMode: e,
                    themeVariables: n,
                    w3mThemeVariables: (0, o.getW3mThemeVariables)(n, e),
                  });
                }
              } catch (e) {
                console.info("Unable to sync theme to auth connector");
              }
            },
            setThemeVariables(e) {
              m.themeVariables = { ...m.themeVariables, ...e };
              try {
                let e = E.getAuthConnector();
                if (e) {
                  let t = w.getSnapshot().themeVariables;
                  e.provider.syncTheme({
                    themeVariables: t,
                    w3mThemeVariables: (0, o.getW3mThemeVariables)(
                      m.themeVariables,
                      m.themeMode
                    ),
                  });
                }
              } catch (e) {
                console.info("Unable to sync theme to auth connector");
              }
            },
            getSnapshot: () => (0, t.snapshot)(m),
          },
          g = (0, c.withErrorBoundary)(w),
          h = {
            eip155: void 0,
            solana: void 0,
            polkadot: void 0,
            bip122: void 0,
            cosmos: void 0,
          },
          v = (0, t.proxy)({
            allConnectors: [],
            connectors: [],
            activeConnector: void 0,
            filterByNamespace: void 0,
            activeConnectorIds: { ...h },
            filterByNamespaceMap: {
              eip155: !0,
              solana: !0,
              polkadot: !0,
              bip122: !0,
              cosmos: !0,
            },
          }),
          E = (0, c.withErrorBoundary)({
            state: v,
            subscribe: (e) =>
              (0, t.subscribe)(v, () => {
                e(v);
              }),
            subscribeKey: (e, t) => (0, n.subscribeKey)(v, e, t),
            initialize(e) {
              e.forEach((e) => {
                let t = s.StorageUtil.getConnectedConnectorId(e);
                t && E.setConnectorId(t, e);
              });
            },
            setActiveConnector(e) {
              e && (v.activeConnector = (0, t.ref)(e));
            },
            setConnectors(e) {
              e.filter(
                (e) =>
                  !v.allConnectors.some(
                    (t) =>
                      t.id === e.id &&
                      E.getConnectorName(t.name) ===
                        E.getConnectorName(e.name) &&
                      t.chain === e.chain
                  )
              ).forEach((e) => {
                "MULTI_CHAIN" !== e.type && v.allConnectors.push((0, t.ref)(e));
              });
              let n = E.getEnabledNamespaces(),
                r = E.getEnabledConnectors(n);
              v.connectors = E.mergeMultiChainConnectors(r);
            },
            filterByNamespaces(e) {
              Object.keys(v.filterByNamespaceMap).forEach((e) => {
                v.filterByNamespaceMap[e] = !1;
              }),
                e.forEach((e) => {
                  v.filterByNamespaceMap[e] = !0;
                }),
                E.updateConnectorsForEnabledNamespaces();
            },
            filterByNamespace(e, t) {
              (v.filterByNamespaceMap[e] = t),
                E.updateConnectorsForEnabledNamespaces();
            },
            updateConnectorsForEnabledNamespaces() {
              let e = E.getEnabledNamespaces(),
                t = E.getEnabledConnectors(e),
                n = E.areAllNamespacesEnabled();
              (v.connectors = E.mergeMultiChainConnectors(t)),
                n
                  ? u.ApiController.clearFilterByNamespaces()
                  : u.ApiController.filterByNamespaces(e);
            },
            getEnabledNamespaces: () =>
              Object.entries(v.filterByNamespaceMap)
                .filter((e) => {
                  let [t, n] = e;
                  return n;
                })
                .map((e) => {
                  let [t] = e;
                  return t;
                }),
            getEnabledConnectors: (e) =>
              v.allConnectors.filter((t) => e.includes(t.chain)),
            areAllNamespacesEnabled: () =>
              Object.values(v.filterByNamespaceMap).every((e) => e),
            mergeMultiChainConnectors(e) {
              let t = E.generateConnectorMapByName(e),
                n = [];
              return (
                t.forEach((e) => {
                  let t = e[0],
                    o =
                      (null == t ? void 0 : t.id) ===
                      r.ConstantsUtil.CONNECTOR_ID.AUTH;
                  e.length > 1 && t
                    ? n.push({
                        name: t.name,
                        imageUrl: t.imageUrl,
                        imageId: t.imageId,
                        connectors: [...e],
                        type: o ? "AUTH" : "MULTI_CHAIN",
                        chain: "eip155",
                        id: (null == t ? void 0 : t.id) || "",
                      })
                    : t && n.push(t);
                }),
                n
              );
            },
            generateConnectorMapByName(e) {
              let t = new Map();
              return (
                e.forEach((e) => {
                  let { name: n } = e,
                    r = E.getConnectorName(n);
                  if (!r) return;
                  let o = t.get(r) || [];
                  o.find((t) => t.chain === e.chain) || o.push(e), t.set(r, o);
                }),
                t
              );
            },
            getConnectorName: (e) => (e && { "Trust Wallet": "Trust" }[e]) || e,
            getUniqueConnectorsByName(e) {
              let t = [];
              return (
                e.forEach((e) => {
                  t.find((t) => t.chain === e.chain) || t.push(e);
                }),
                t
              );
            },
            addConnector(e) {
              if (e.id === r.ConstantsUtil.CONNECTOR_ID.AUTH) {
                var n, a, i;
                let r = (0, t.snapshot)(p.OptionsController.state),
                  l = g.getSnapshot().themeMode,
                  s = g.getSnapshot().themeVariables;
                null == e ||
                  null == (a = e.provider) ||
                  null == (n = a.syncDappData) ||
                  n.call(a, {
                    metadata: r.metadata,
                    sdkVersion: r.sdkVersion,
                    projectId: r.projectId,
                    sdkType: r.sdkType,
                  }),
                  null == e ||
                    null == (i = e.provider) ||
                    i.syncTheme({
                      themeMode: l,
                      themeVariables: s,
                      w3mThemeVariables: (0, o.getW3mThemeVariables)(s, l),
                    }),
                  E.setConnectors([e]);
              } else E.setConnectors([e]);
            },
            getAuthConnector(e) {
              var t;
              let n = e || d.ChainController.state.activeChain,
                o = v.connectors.find(
                  (e) => e.id === r.ConstantsUtil.CONNECTOR_ID.AUTH
                );
              if (o)
                return (
                  null == o || null == (t = o.connectors) ? void 0 : t.length
                )
                  ? o.connectors.find((e) => e.chain === n)
                  : o;
            },
            getAnnouncedConnectorRdns: () =>
              v.connectors
                .filter((e) => "ANNOUNCED" === e.type)
                .map((e) => {
                  var t;
                  return null == (t = e.info) ? void 0 : t.rdns;
                }),
            getConnectorById: (e) => v.allConnectors.find((t) => t.id === e),
            getConnector: (e, t) =>
              v.allConnectors
                .filter((e) => e.chain === d.ChainController.state.activeChain)
                .find((n) => {
                  var r;
                  return (
                    n.explorerId === e ||
                    (null == (r = n.info) ? void 0 : r.rdns) === t
                  );
                }),
            syncIfAuthConnector(e) {
              var n, r;
              if ("ID_AUTH" !== e.id) return;
              let a = (0, t.snapshot)(p.OptionsController.state),
                i = g.getSnapshot().themeMode,
                l = g.getSnapshot().themeVariables;
              null == e ||
                null == (r = e.provider) ||
                null == (n = r.syncDappData) ||
                n.call(r, {
                  metadata: a.metadata,
                  sdkVersion: a.sdkVersion,
                  sdkType: a.sdkType,
                  projectId: a.projectId,
                }),
                e.provider.syncTheme({
                  themeMode: i,
                  themeVariables: l,
                  w3mThemeVariables: (0, o.getW3mThemeVariables)(l, i),
                });
            },
            getConnectorsByNamespace(e) {
              let t = v.allConnectors.filter((t) => t.chain === e);
              return E.mergeMultiChainConnectors(t);
            },
            canSwitchToSmartAccount: (e) =>
              d.ChainController.checkIfSmartAccountEnabled() &&
              (0, i.getPreferredAccountType)(e) ===
                a.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,
            selectWalletConnector(e) {
              let t = E.getConnector(e.id, e.rdns);
              l.MobileWalletUtil.handleMobileDeeplinkRedirect(
                (null == t ? void 0 : t.explorerId) || e.id,
                d.ChainController.state.activeChain
              ),
                t
                  ? C.RouterController.push("ConnectingExternal", {
                      connector: t,
                    })
                  : C.RouterController.push("ConnectingWalletConnect", {
                      wallet: e,
                    });
            },
            getConnectors: (e) =>
              e
                ? E.getConnectorsByNamespace(e)
                : E.mergeMultiChainConnectors(v.allConnectors),
            setFilterByNamespace(e) {
              (v.filterByNamespace = e),
                (v.connectors = E.getConnectors(e)),
                u.ApiController.setFilterByNamespace(e);
            },
            setConnectorId(e, t) {
              e &&
                ((v.activeConnectorIds = { ...v.activeConnectorIds, [t]: e }),
                s.StorageUtil.setConnectedConnectorId(t, e));
            },
            removeConnectorId(e) {
              (v.activeConnectorIds = { ...v.activeConnectorIds, [e]: void 0 }),
                s.StorageUtil.deleteConnectedConnectorId(e);
            },
            getConnectorId(e) {
              if (e) return v.activeConnectorIds[e];
            },
            isConnected: (e) =>
              e
                ? !!v.activeConnectorIds[e]
                : Object.values(v.activeConnectorIds).some((e) => !!e),
            resetConnectorIds() {
              v.activeConnectorIds = { ...h };
            },
          });
      },
      [350666],
    ],
    348666: (e) => {
      "use strict";
      e.s({ ConnectorControllerUtil: () => w });
      var t = e.i(188274),
        n = e.i(605726),
        r = e.i(351667),
        o = e.i(705258),
        a = e.i(631867),
        i = e.i(875073),
        l = e.i(225335),
        s = e.i(755111),
        c = e.i(563493),
        u = e.i(157653),
        d = e.i(77217),
        p = e.i(76107),
        C = e.i(159055),
        m = e.i(527410);
      let w = {
        checkNamespaceConnectorId: (e, t) =>
          l.ConnectorController.getConnectorId(e) === t,
        isSocialProvider: (e) =>
          p.ConstantsUtil.DEFAULT_REMOTE_FEATURES.socials.includes(e),
        connectWalletConnect(e) {
          let {
            walletConnect: n,
            connector: r,
            closeModalOnConnect: o = !0,
            redirectViewOnModalClose: i = "Connect",
            onOpen: s,
            onConnect: d,
          } = e;
          return new Promise((e, p) => {
            if (
              (n && l.ConnectorController.setActiveConnector(r),
              null == s || s(C.CoreHelperUtil.isMobile() && n),
              i)
            ) {
              let e = c.ModalController.subscribeKey("open", (t) => {
                t ||
                  (u.RouterController.state.view !== i &&
                    u.RouterController.replace(i),
                  e(),
                  p(Error("Modal closed")));
              });
            }
            let m = a.ChainController.subscribeKey("activeCaipAddress", (n) => {
              n &&
                (null == d || d(),
                o && c.ModalController.close(),
                m(),
                e(t.ParseUtil.parseCaipAddress(n)));
            });
          });
        },
        connectExternal: (e) =>
          new Promise((n, r) => {
            let o = a.ChainController.subscribeKey("activeCaipAddress", (e) => {
              e &&
                (c.ModalController.close(),
                o(),
                n(t.ParseUtil.parseCaipAddress(e)));
            });
            i.ConnectionController.connectExternal(e, e.chain).catch(() => {
              o(), r(Error("Connection rejected"));
            });
          }),
        connectSocial(e) {
          let {
              social: r,
              closeModalOnConnect: u = !0,
              onOpenFarcaster: d,
              onConnect: p,
            } = e,
            w = o.AccountController.state.socialWindow,
            g = o.AccountController.state.socialProvider,
            h = !1,
            v = null,
            E = a.ChainController.subscribeKey("activeCaipAddress", (e) => {
              e && (u && c.ModalController.close(), E());
            });
          return new Promise((e, u) => {
            async function E(r) {
              var c, d;
              if (null == (c = r.data) ? void 0 : c.resultUri)
                if (r.origin === n.ConstantsUtil.SECURE_SITE_SDK_ORIGIN) {
                  window.removeEventListener("message", E, !1);
                  try {
                    let n = l.ConnectorController.getAuthConnector();
                    if (n && !h) {
                      w &&
                        (w.close(),
                        o.AccountController.setSocialWindow(
                          void 0,
                          a.ChainController.state.activeChain
                        ),
                        (w = o.AccountController.state.socialWindow)),
                        (h = !0);
                      let l = r.data.resultUri;
                      if (
                        (g &&
                          s.EventsController.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                            properties: { provider: g },
                          }),
                        g)
                      ) {
                        m.StorageUtil.setConnectedSocialProvider(g),
                          await i.ConnectionController.connectExternal(
                            { id: n.id, type: n.type, socialUri: l },
                            n.chain
                          );
                        let r = a.ChainController.state.activeCaipAddress;
                        if (!r) return void u(Error("Failed to connect"));
                        e(t.ParseUtil.parseCaipAddress(r)),
                          s.EventsController.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_SUCCESS",
                            properties: {
                              provider: g,
                              caipNetworkId:
                                null ==
                                (d = a.ChainController.getActiveCaipNetwork())
                                  ? void 0
                                  : d.caipNetworkId,
                            },
                          });
                      }
                    }
                  } catch (e) {
                    g &&
                      s.EventsController.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_ERROR",
                        properties: { provider: g },
                      }),
                      u(Error("Failed to connect"));
                  }
                } else
                  g &&
                    s.EventsController.sendEvent({
                      type: "track",
                      event: "SOCIAL_LOGIN_ERROR",
                      properties: { provider: g },
                    });
            }
            !(async function () {
              if (
                (r &&
                  (o.AccountController.setSocialProvider(
                    r,
                    a.ChainController.state.activeChain
                  ),
                  (g = o.AccountController.state.socialProvider),
                  s.EventsController.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_STARTED",
                    properties: { provider: g },
                  })),
                "farcaster" === g)
              ) {
                null == d || d();
                let e = c.ModalController.subscribeKey("open", (t) => {
                    t ||
                      "farcaster" !== r ||
                      (u(Error("Popup closed")), null == p || p(), e());
                  }),
                  t = l.ConnectorController.getAuthConnector();
                if (t && !o.AccountController.state.farcasterUrl)
                  try {
                    let { url: e } = await t.provider.getFarcasterUri();
                    o.AccountController.setFarcasterUrl(
                      e,
                      a.ChainController.state.activeChain
                    );
                  } catch (e) {
                    u(Error("Failed to connect to farcaster"));
                  }
              } else {
                let e = l.ConnectorController.getAuthConnector();
                v = C.CoreHelperUtil.returnOpenHref(
                  "".concat(n.ConstantsUtil.SECURE_SITE_SDK_ORIGIN, "/loading"),
                  "popupWindow",
                  "width=600,height=800,scrollbars=yes"
                );
                try {
                  if (e && g) {
                    let { uri: t } = await e.provider.getSocialRedirectUri({
                      provider: g,
                    });
                    if (v && t) {
                      o.AccountController.setSocialWindow(
                        v,
                        a.ChainController.state.activeChain
                      ),
                        (w = o.AccountController.state.socialWindow),
                        (v.location.href = t);
                      let e = setInterval(() => {
                        (null == w ? void 0 : w.closed) &&
                          !h &&
                          (u(Error("Popup closed")), clearInterval(e));
                      }, 1e3);
                      window.addEventListener("message", E, !1);
                    } else
                      null == v || v.close(),
                        u(Error("Failed to initiate social connection"));
                  }
                } catch (e) {
                  u(Error("Failed to initiate social connection")),
                    null == v || v.close();
                }
              }
            })();
          });
        },
        connectEmail(e) {
          let {
            closeModalOnConnect: n = !0,
            redirectViewOnModalClose: r = "Connect",
            onOpen: o,
            onConnect: i,
          } = e;
          return new Promise((e, l) => {
            if ((null == o || o(), r)) {
              let e = c.ModalController.subscribeKey("open", (t) => {
                t ||
                  (u.RouterController.state.view !== r &&
                    u.RouterController.replace(r),
                  e(),
                  l(Error("Modal closed")));
              });
            }
            let s = a.ChainController.subscribeKey("activeCaipAddress", (r) => {
              r &&
                (null == i || i(),
                n && c.ModalController.close(),
                s(),
                e(t.ParseUtil.parseCaipAddress(r)));
            });
          });
        },
        async updateEmail() {
          var e;
          let t = m.StorageUtil.getConnectedConnectorId(
              a.ChainController.state.activeChain
            ),
            r = l.ConnectorController.getAuthConnector();
          if (!r) throw Error("No auth connector found");
          if (t !== n.ConstantsUtil.CONNECTOR_ID.AUTH)
            throw Error("Not connected to email or social");
          let o = null != (e = r.provider.getEmail()) ? e : "";
          return (
            u.RouterController.push("UpdateEmailWallet", {
              email: o,
              redirectView: void 0,
            }),
            new Promise((e, t) => {
              let n = setInterval(() => {
                  var t;
                  let i = null != (t = r.provider.getEmail()) ? t : "";
                  i !== o &&
                    (c.ModalController.close(),
                    clearInterval(n),
                    a(),
                    e({ email: i }));
                }, 1e3),
                a = c.ModalController.subscribeKey("open", (e) => {
                  e ||
                    ("Connect" !== u.RouterController.state.view &&
                      u.RouterController.push("Connect"),
                    clearInterval(n),
                    a(),
                    t(Error("Modal closed")));
                });
            })
          );
        },
        canSwitchToSmartAccount: (e) =>
          a.ChainController.checkIfSmartAccountEnabled() &&
          (0, d.getPreferredAccountType)(e) ===
            r.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,
      };
    },
    77217: (e) => {
      "use strict";
      e.s({
        getActiveNetworkTokenAddress: () => r,
        getPreferredAccountType: () => o,
      }),
        e.i(605726);
      var t = e.i(631867);
      e.i(348666);
      var n = e.i(76107);
      function r() {
        var e, r;
        let o =
            (null == (e = t.ChainController.state.activeCaipNetwork)
              ? void 0
              : e.chainNamespace) || "eip155",
          a =
            (null == (r = t.ChainController.state.activeCaipNetwork)
              ? void 0
              : r.id) || 1,
          i = n.ConstantsUtil.NATIVE_TOKEN_ADDRESS[o];
        return "".concat(o, ":").concat(a, ":").concat(i);
      }
      function o(e) {
        var n;
        return null == (n = t.ChainController.getAccountData(e))
          ? void 0
          : n.preferredAccountType;
      }
    },
    489040: (e) => {
      "use strict";
      e.s({ ConnectionControllerUtil: () => o });
      var t = e.i(875073),
        n = e.i(225335),
        r = e.i(737460);
      let o = {
        getConnectionStatus(e, r) {
          let o = n.ConnectorController.state.activeConnectorIds[r],
            a = t.ConnectionController.getConnections(r);
          return o && e.connectorId === o
            ? "connected"
            : a.some(
                (t) =>
                  t.connectorId.toLowerCase() === e.connectorId.toLowerCase()
              )
            ? "active"
            : "disconnected";
        },
        excludeConnectorAddressFromConnections(e) {
          let { connections: t, connectorId: n, addresses: r } = e;
          return t.map((e) => {
            if (n && e.connectorId.toLowerCase() === n.toLowerCase() && r) {
              let t = e.accounts.filter(
                (e) =>
                  !r.some((t) => t.toLowerCase() === e.address.toLowerCase())
              );
              return { ...e, accounts: t };
            }
            return e;
          });
        },
        excludeExistingConnections(e, t) {
          let n = new Set(e);
          return t.filter((e) => !n.has(e.connectorId));
        },
        getConnectionsByConnectorId: (e, t) =>
          e.filter((e) => e.connectorId.toLowerCase() === t.toLowerCase()),
        getConnectionsData(e) {
          var a, i;
          let l = !!(null == (a = r.OptionsController.state.remoteFeatures)
              ? void 0
              : a.multiWallet),
            s = n.ConnectorController.state.activeConnectorIds[e],
            c = t.ConnectionController.getConnections(e),
            u = (
              null !=
              (i = t.ConnectionController.state.recentConnections.get(e))
                ? i
                : []
            ).filter((e) =>
              n.ConnectorController.getConnectorById(e.connectorId)
            ),
            d = o.excludeExistingConnections(
              [...c.map((e) => e.connectorId), ...(s ? [s] : [])],
              u
            );
          return l
            ? { connections: c, recentConnections: d }
            : {
                connections: c.filter(
                  (e) =>
                    e.connectorId.toLowerCase() ===
                    (null == s ? void 0 : s.toLowerCase())
                ),
                recentConnections: [],
              };
        },
      };
    },
    174797: (e) => {
      "use strict";
      e.s({ SnackController: () => i });
      var t = e.i(861600),
        n = e.i(24732),
        r = e.i(159055);
      let o = Object.freeze({
          message: "",
          variant: "success",
          svg: void 0,
          open: !1,
          autoClose: !0,
        }),
        a = (0, t.proxy)({ ...o }),
        i = {
          state: a,
          subscribeKey: (e, t) => (0, n.subscribeKey)(a, e, t),
          showLoading(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            this._showMessage({ message: e, variant: "loading", ...t });
          },
          showSuccess(e) {
            this._showMessage({ message: e, variant: "success" });
          },
          showSvg(e, t) {
            this._showMessage({ message: e, svg: t });
          },
          showError(e) {
            let t = r.CoreHelperUtil.parseError(e);
            this._showMessage({ message: t, variant: "error" });
          },
          hide() {
            (a.message = o.message),
              (a.variant = o.variant),
              (a.svg = o.svg),
              (a.open = o.open),
              (a.autoClose = o.autoClose);
          },
          _showMessage(e) {
            let {
              message: t,
              svg: n,
              variant: r = "success",
              autoClose: i = o.autoClose,
            } = e;
            a.open
              ? ((a.open = !1),
                setTimeout(() => {
                  (a.message = t),
                    (a.variant = r),
                    (a.svg = n),
                    (a.open = !0),
                    (a.autoClose = i);
                }, 150))
              : ((a.message = t),
                (a.variant = r),
                (a.svg = n),
                (a.open = !0),
                (a.autoClose = i));
          },
        };
    },
    875073: [
      (e) => {
        "use strict";
        let t;
        e.s({ ConnectionController: () => S }, 875073);
        var n = e.i(861600),
          r = e.i(24732),
          o = e.i(605726),
          a = e.i(188274),
          i = e.i(77217),
          l = e.i(489040),
          s = e.i(348666),
          c = e.i(159055),
          u = e.i(527410),
          d = e.i(778221),
          p = e.i(705258),
          C = e.i(631867),
          m = e.i(225335),
          w = e.i(755111),
          g = e.i(563493),
          h = e.i(157653);
        e.s({ TransactionsController: () => _ }, 801459);
        var v = e.i(351667),
          E = e.i(394589),
          f = e.i(737460),
          A = e.i(174797);
        let b = (0, n.proxy)({
            transactions: [],
            transactionsByYear: {},
            lastNetworkInView: void 0,
            loading: !1,
            empty: !1,
            next: void 0,
          }),
          _ = (0, d.withErrorBoundary)(
            {
              state: b,
              subscribe: (e) => (0, n.subscribe)(b, () => e(b)),
              setLastNetworkInView(e) {
                b.lastNetworkInView = e;
              },
              async fetchTransactions(e) {
                if (!e)
                  throw Error(
                    "Transactions can't be fetched without an accountAddress"
                  );
                b.loading = !0;
                try {
                  var t;
                  let n = await E.BlockchainApiController.fetchTransactions({
                      account: e,
                      cursor: b.next,
                      chainId:
                        null == (t = C.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : t.caipNetworkId,
                    }),
                    r = _.filterSpamTransactions(n.data),
                    o = _.filterByConnectedChain(r),
                    a = [...b.transactions, ...o];
                  (b.loading = !1),
                    (b.transactions = a),
                    (b.transactionsByYear = _.groupTransactionsByYearAndMonth(
                      b.transactionsByYear,
                      o
                    )),
                    (b.empty = 0 === a.length),
                    (b.next = n.next ? n.next : void 0);
                } catch (n) {
                  let t = C.ChainController.state.activeChain;
                  w.EventsController.sendEvent({
                    type: "track",
                    event: "ERROR_FETCH_TRANSACTIONS",
                    properties: {
                      address: e,
                      projectId: f.OptionsController.state.projectId,
                      cursor: b.next,
                      isSmartAccount:
                        (0, i.getPreferredAccountType)(t) ===
                        v.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    },
                  }),
                    A.SnackController.showError("Failed to fetch transactions"),
                    (b.loading = !1),
                    (b.empty = !0),
                    (b.next = void 0);
                }
              },
              groupTransactionsByYearAndMonth() {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                return (
                  t.forEach((t) => {
                    var n, r;
                    let o = new Date(t.metadata.minedAt).getFullYear(),
                      a = new Date(t.metadata.minedAt).getMonth(),
                      i = null != (n = e[o]) ? n : {},
                      l = (null != (r = i[a]) ? r : []).filter(
                        (e) => e.id !== t.id
                      );
                    e[o] = {
                      ...i,
                      [a]: [...l, t].sort(
                        (e, t) =>
                          new Date(t.metadata.minedAt).getTime() -
                          new Date(e.metadata.minedAt).getTime()
                      ),
                    };
                  }),
                  e
                );
              },
              filterSpamTransactions: (e) =>
                e.filter(
                  (e) =>
                    !e.transfers.every((e) => {
                      var t;
                      return (
                        (null == (t = e.nft_info)
                          ? void 0
                          : t.flags.is_spam) === !0
                      );
                    })
                ),
              filterByConnectedChain(e) {
                var t;
                let n =
                  null == (t = C.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : t.caipNetworkId;
                return e.filter((e) => e.metadata.chain === n);
              },
              clearCursor() {
                b.next = void 0;
              },
              resetTransactions() {
                (b.transactions = []),
                  (b.transactionsByYear = {}),
                  (b.lastNetworkInView = void 0),
                  (b.loading = !1),
                  (b.empty = !1),
                  (b.next = void 0);
              },
            },
            "API_ERROR"
          ),
          N = (0, n.proxy)({
            connections: new Map(),
            recentConnections: new Map(),
            isSwitchingConnection: !1,
            wcError: !1,
            buffering: !1,
            status: "disconnected",
          }),
          S = (0, d.withErrorBoundary)({
            state: N,
            subscribe: (e) => (0, n.subscribe)(N, () => e(N)),
            subscribeKey: (e, t) => (0, r.subscribeKey)(N, e, t),
            _getClient: () => N._client,
            setClient(e) {
              N._client = (0, n.ref)(e);
            },
            initialize(e) {
              let t = e.filter((e) => !!e.namespace).map((e) => e.namespace);
              S.syncStorageConnections(t);
            },
            syncStorageConnections(e) {
              let t = u.StorageUtil.getConnections();
              for (let r of null != e
                ? e
                : Array.from(C.ChainController.state.chains.keys())) {
                var n;
                let e = null != (n = t[r]) ? n : [],
                  o = new Map(N.recentConnections);
                o.set(r, e), (N.recentConnections = o);
              }
            },
            getConnections(e) {
              var t;
              return e && null != (t = N.connections.get(e)) ? t : [];
            },
            hasAnyConnection: (e) =>
              Array.from(S.state.connections.values())
                .flatMap((e) => e)
                .some((t) => {
                  let { connectorId: n } = t;
                  return n === e;
                }),
            async connectWalletConnect() {
              var e, n, r, o;
              if (
                c.CoreHelperUtil.isTelegram() ||
                (c.CoreHelperUtil.isSafari() && c.CoreHelperUtil.isIos())
              ) {
                if (t) {
                  await t, (t = void 0);
                  return;
                }
                if (
                  !c.CoreHelperUtil.isPairingExpired(
                    null == N ? void 0 : N.wcPairingExpiry
                  )
                ) {
                  let e = N.wcUri;
                  N.wcUri = e;
                  return;
                }
                (t =
                  null == (n = S._getClient()) ||
                  null == (e = n.connectWalletConnect)
                    ? void 0
                    : e.call(n).catch(() => void 0)),
                  (S.state.status = "connecting"),
                  await t,
                  (t = void 0),
                  (N.wcPairingExpiry = void 0),
                  (S.state.status = "connected");
              } else
                await (null == (o = S._getClient()) ||
                null == (r = o.connectWalletConnect)
                  ? void 0
                  : r.call(o));
            },
            async connectExternal(e, t) {
              var n, r;
              let o =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                a = await (null == (r = S._getClient()) ||
                null == (n = r.connectExternal)
                  ? void 0
                  : n.call(r, e));
              return o && C.ChainController.setActiveNamespace(t), a;
            },
            async reconnectExternal(e) {
              var t, n;
              await (null == (n = S._getClient()) ||
              null == (t = n.reconnectExternal)
                ? void 0
                : t.call(n, e));
              let r = e.chain || C.ChainController.state.activeChain;
              r && m.ConnectorController.setConnectorId(e.id, r);
            },
            async setPreferredAccountType(e, t) {
              var n;
              if (!t) return;
              g.ModalController.setLoading(
                !0,
                C.ChainController.state.activeChain
              );
              let r = m.ConnectorController.getAuthConnector();
              r &&
                (p.AccountController.setPreferredAccountType(e, t),
                await r.provider.setPreferredAccount(e),
                u.StorageUtil.setPreferredAccountTypes(
                  Object.entries(C.ChainController.state.chains).reduce(
                    (e, t) => {
                      let [n, r] = t,
                        o = (0, i.getPreferredAccountType)(n);
                      return void 0 !== o && (e[n] = o), e;
                    },
                    {}
                  )
                ),
                await S.reconnectExternal(r),
                g.ModalController.setLoading(
                  !1,
                  C.ChainController.state.activeChain
                ),
                w.EventsController.sendEvent({
                  type: "track",
                  event: "SET_PREFERRED_ACCOUNT_TYPE",
                  properties: {
                    accountType: e,
                    network:
                      (null == (n = C.ChainController.state.activeCaipNetwork)
                        ? void 0
                        : n.caipNetworkId) || "",
                  },
                }));
            },
            async signMessage(e) {
              var t;
              return null == (t = S._getClient()) ? void 0 : t.signMessage(e);
            },
            parseUnits(e, t) {
              var n;
              return null == (n = S._getClient()) ? void 0 : n.parseUnits(e, t);
            },
            formatUnits(e, t) {
              var n;
              return null == (n = S._getClient())
                ? void 0
                : n.formatUnits(e, t);
            },
            async sendTransaction(e) {
              var t;
              return null == (t = S._getClient())
                ? void 0
                : t.sendTransaction(e);
            },
            async getCapabilities(e) {
              var t;
              return null == (t = S._getClient())
                ? void 0
                : t.getCapabilities(e);
            },
            async grantPermissions(e) {
              var t;
              return null == (t = S._getClient())
                ? void 0
                : t.grantPermissions(e);
            },
            async walletGetAssets(e) {
              var t, n;
              return null !=
                (n =
                  null == (t = S._getClient()) ? void 0 : t.walletGetAssets(e))
                ? n
                : {};
            },
            async estimateGas(e) {
              var t;
              return null == (t = S._getClient()) ? void 0 : t.estimateGas(e);
            },
            async writeContract(e) {
              var t;
              return null == (t = S._getClient()) ? void 0 : t.writeContract(e);
            },
            async getEnsAddress(e) {
              var t;
              return null == (t = S._getClient()) ? void 0 : t.getEnsAddress(e);
            },
            async getEnsAvatar(e) {
              var t;
              return null == (t = S._getClient()) ? void 0 : t.getEnsAvatar(e);
            },
            checkInstalled(e) {
              var t, n;
              return (
                (null == (n = S._getClient()) || null == (t = n.checkInstalled)
                  ? void 0
                  : t.call(n, e)) || !1
              );
            },
            resetWcConnection() {
              (N.wcUri = void 0),
                (N.wcPairingExpiry = void 0),
                (N.wcLinking = void 0),
                (N.recentWallet = void 0),
                (N.status = "disconnected"),
                _.resetTransactions(),
                u.StorageUtil.deleteWalletConnectDeepLink();
            },
            resetUri() {
              (N.wcUri = void 0), (N.wcPairingExpiry = void 0), (t = void 0);
            },
            finalizeWcConnection() {
              var e, t, n;
              let { wcLinking: r, recentWallet: o } = S.state;
              r && u.StorageUtil.setWalletConnectDeepLink(r),
                o && u.StorageUtil.setAppKitRecent(o),
                w.EventsController.sendEvent({
                  type: "track",
                  event: "CONNECT_SUCCESS",
                  properties: {
                    method: r ? "mobile" : "qrcode",
                    name:
                      (null == (t = h.RouterController.state.data) ||
                      null == (e = t.wallet)
                        ? void 0
                        : e.name) || "Unknown",
                    caipNetworkId:
                      null == (n = C.ChainController.getActiveCaipNetwork())
                        ? void 0
                        : n.caipNetworkId,
                  },
                });
            },
            setWcBasic(e) {
              N.wcBasic = e;
            },
            setUri(e) {
              (N.wcUri = e),
                (N.wcPairingExpiry = c.CoreHelperUtil.getPairingExpiry());
            },
            setWcLinking(e) {
              N.wcLinking = e;
            },
            setWcError(e) {
              (N.wcError = e), (N.buffering = !1);
            },
            setRecentWallet(e) {
              N.recentWallet = e;
            },
            setBuffering(e) {
              N.buffering = e;
            },
            setStatus(e) {
              N.status = e;
            },
            setIsSwitchingConnection(e) {
              N.isSwitchingConnection = e;
            },
            async disconnect() {
              let {
                id: e,
                namespace: t,
                initialDisconnect: n,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              try {
                var r;
                await (null == (r = S._getClient())
                  ? void 0
                  : r.disconnect({
                      id: e,
                      chainNamespace: t,
                      initialDisconnect: n,
                    }));
              } catch (e) {
                throw new d.AppKitError(
                  "Failed to disconnect",
                  "INTERNAL_SDK_ERROR",
                  e
                );
              }
            },
            setConnections(e, t) {
              let n = new Map(N.connections);
              n.set(t, e), (N.connections = n);
            },
            async handleAuthAccountSwitch(e) {
              var t, n;
              let { address: r, namespace: o } = e,
                a =
                  null == (n = p.AccountController.state.user) ||
                  null == (t = n.accounts)
                    ? void 0
                    : t.find((e) => "smartAccount" === e.type),
                i =
                  a &&
                  a.address.toLowerCase() === r.toLowerCase() &&
                  s.ConnectorControllerUtil.canSwitchToSmartAccount(o)
                    ? "smartAccount"
                    : "eoa";
              await S.setPreferredAccountType(i, o);
            },
            async handleActiveConnection(e) {
              let { connection: t, namespace: n, address: r } = e,
                a = m.ConnectorController.getConnectorById(t.connectorId),
                i = t.connectorId === o.ConstantsUtil.CONNECTOR_ID.AUTH;
              if (!a)
                throw Error(
                  "No connector found for connection: ".concat(t.connectorId)
                );
              if (i)
                i &&
                  r &&
                  (await S.handleAuthAccountSwitch({
                    address: r,
                    namespace: n,
                  }));
              else {
                let e = await S.connectExternal(
                  {
                    id: a.id,
                    type: a.type,
                    provider: a.provider,
                    address: r,
                    chain: n,
                  },
                  n
                );
                return null == e ? void 0 : e.address;
              }
              return r;
            },
            async handleDisconnectedConnection(e) {
              var t, n;
              let r,
                {
                  connection: a,
                  namespace: i,
                  address: l,
                  closeModalOnConnect: c,
                } = e,
                u = m.ConnectorController.getConnectorById(a.connectorId),
                d =
                  null == (n = a.auth) || null == (t = n.name)
                    ? void 0
                    : t.toLowerCase(),
                p = a.connectorId === o.ConstantsUtil.CONNECTOR_ID.AUTH,
                C =
                  a.connectorId === o.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
              if (!u)
                throw Error(
                  "No connector found for connection: ".concat(a.connectorId)
                );
              if (p)
                if (d && s.ConnectorControllerUtil.isSocialProvider(d)) {
                  let { address: e } =
                    await s.ConnectorControllerUtil.connectSocial({
                      social: d,
                      closeModalOnConnect: c,
                      onOpenFarcaster() {
                        g.ModalController.open({ view: "ConnectingFarcaster" });
                      },
                      onConnect() {
                        h.RouterController.replace("ProfileWallets");
                      },
                    });
                  r = e;
                } else {
                  let { address: e } =
                    await s.ConnectorControllerUtil.connectEmail({
                      closeModalOnConnect: c,
                      onOpen() {
                        g.ModalController.open({ view: "EmailLogin" });
                      },
                      onConnect() {
                        h.RouterController.replace("ProfileWallets");
                      },
                    });
                  r = e;
                }
              else if (C) {
                let { address: e } =
                  await s.ConnectorControllerUtil.connectWalletConnect({
                    walletConnect: !0,
                    connector: u,
                    closeModalOnConnect: c,
                    onOpen(e) {
                      g.ModalController.open({
                        view: e ? "AllWallets" : "ConnectingWalletConnect",
                      });
                    },
                    onConnect() {
                      h.RouterController.replace("ProfileWallets");
                    },
                  });
                r = e;
              } else {
                let e = await S.connectExternal(
                  { id: u.id, type: u.type, provider: u.provider, chain: i },
                  i
                );
                e && (r = e.address);
              }
              return (
                p &&
                  l &&
                  (await S.handleAuthAccountSwitch({
                    address: l,
                    namespace: i,
                  })),
                r
              );
            },
            async switchConnection(e) {
              let t,
                {
                  connection: n,
                  address: r,
                  namespace: o,
                  closeModalOnConnect: i,
                  onChange: s,
                } = e,
                c = p.AccountController.getCaipAddress(o);
              if (c) {
                let { address: e } = a.ParseUtil.parseCaipAddress(c);
                t = e;
              }
              let u = l.ConnectionControllerUtil.getConnectionStatus(n, o);
              switch (u) {
                case "connected":
                case "active": {
                  let e = await S.handleActiveConnection({
                    connection: n,
                    namespace: o,
                    address: r,
                  });
                  if (t && e) {
                    let n = e.toLowerCase() !== t.toLowerCase();
                    null == s ||
                      s({
                        address: e,
                        namespace: o,
                        hasSwitchedAccount: n,
                        hasSwitchedWallet: "active" === u,
                      });
                  }
                  break;
                }
                case "disconnected": {
                  let e = await S.handleDisconnectedConnection({
                    connection: n,
                    namespace: o,
                    address: r,
                    closeModalOnConnect: i,
                  });
                  e &&
                    (null == s ||
                      s({
                        address: e,
                        namespace: o,
                        hasSwitchedAccount: !0,
                        hasSwitchedWallet: !0,
                      }));
                  break;
                }
                default:
                  throw Error("Invalid connection status: ".concat(u));
              }
            },
          });
      },
      [801459],
    ],
    214696: (e) => {
      "use strict";
      e.s({ NumberUtil: () => n });
      var t = e.i(719553);
      let n = {
        bigNumber: (e) => new t.default(e ? e : 0),
        multiply(e, n) {
          if (void 0 === e || void 0 === n) return new t.default(0);
          let r = new t.default(e),
            o = new t.default(n);
          return r.times(o);
        },
        formatNumberToLocalString(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return void 0 === e
            ? "0.00"
            : "number" == typeof e
            ? e.toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              })
            : parseFloat(e).toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              });
        },
        parseLocalStringToNumber: (e) =>
          void 0 === e ? 0 : parseFloat(e.replace(/,/gu, "")),
      };
    },
    631867: [
      (e) => {
        "use strict";
        e.s({ ChainController: () => P }, 631867);
        var t = e.i(861600),
          n = e.i(24732),
          r = e.i(605726),
          o = e.i(352385),
          a = e.i(76107),
          i = e.i(159055),
          l = e.i(527410),
          s = e.i(778221),
          c = e.i(705258),
          u = e.i(875073),
          d = e.i(225335),
          p = e.i(755111),
          C = e.i(563493),
          m = e.i(737460),
          w = e.i(339910),
          g = e.i(157653);
        e.s({ SendController: () => R }, 663563);
        var h = e.i(214696);
        e.s({ ContractUtil: () => A }, 943740);
        let v = [
            {
              type: "function",
              name: "transfer",
              stateMutability: "nonpayable",
              inputs: [
                { name: "_to", type: "address" },
                { name: "_value", type: "uint256" },
              ],
              outputs: [{ name: "", type: "bool" }],
            },
            {
              type: "function",
              name: "transferFrom",
              stateMutability: "nonpayable",
              inputs: [
                { name: "_from", type: "address" },
                { name: "_to", type: "address" },
                { name: "_value", type: "uint256" },
              ],
              outputs: [{ name: "", type: "bool" }],
            },
          ],
          E = [
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
          ],
          f = [
            {
              type: "function",
              name: "transfer",
              stateMutability: "nonpayable",
              inputs: [
                { name: "recipient", type: "address" },
                { name: "amount", type: "uint256" },
              ],
              outputs: [],
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
              outputs: [{ name: "", type: "bool" }],
            },
          ],
          A = {
            getERC20Abi: (e) =>
              r.ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(e) ? f : v,
            getSwapAbi: () => E,
          };
        var b = e.i(351667),
          _ = e.i(737645),
          N = e.i(77217);
        e.s({ SwapApiUtil: () => I }, 968548);
        var S = e.i(394589);
        let I = {
          async getTokenList() {
            var e;
            let t = P.state.activeCaipNetwork,
              n = await S.BlockchainApiController.fetchSwapTokens({
                chainId: null == t ? void 0 : t.caipNetworkId,
              });
            return (
              (null == n || null == (e = n.tokens)
                ? void 0
                : e.map((e) => ({
                    ...e,
                    eip2612: !1,
                    quantity: { decimals: "0", numeric: "0" },
                    price: 0,
                    value: 0,
                  }))) || []
            );
          },
          async fetchGasPrice() {
            let e = P.state.activeCaipNetwork;
            if (!e) return null;
            try {
              if ("solana" !== e.chainNamespace)
                return await S.BlockchainApiController.fetchGasPrice({
                  chainId: e.caipNetworkId,
                });
              {
                var t;
                let e =
                  null ==
                  (t = await (null === u.ConnectionController ||
                  void 0 === u.ConnectionController
                    ? void 0
                    : u.ConnectionController.estimateGas({
                        chainNamespace: "solana",
                      })))
                    ? void 0
                    : t.toString();
                return { standard: e, fast: e, instant: e };
              }
            } catch (e) {
              return null;
            }
          },
          async fetchSwapAllowance(e) {
            let {
                tokenAddress: t,
                userAddress: n,
                sourceTokenAmount: r,
                sourceTokenDecimals: o,
              } = e,
              a = await S.BlockchainApiController.fetchSwapAllowance({
                tokenAddress: t,
                userAddress: n,
              });
            if ((null == a ? void 0 : a.allowance) && r && o) {
              let e = u.ConnectionController.parseUnits(r, o) || 0;
              return BigInt(a.allowance) >= e;
            }
            return !1;
          },
          async getMyTokensWithBalance(e) {
            let t = await _.BalanceUtil.getMyTokensWithBalance(e);
            return (
              c.AccountController.setTokenBalance(t, P.state.activeChain),
              this.mapBalancesToSwapTokens(t)
            );
          },
          mapBalancesToSwapTokens: (e) =>
            (null == e
              ? void 0
              : e.map((e) => ({
                  ...e,
                  address: (null == e ? void 0 : e.address)
                    ? e.address
                    : (0, N.getActiveNetworkTokenAddress)(),
                  decimals: parseInt(e.quantity.decimals, 10),
                  logoUri: e.iconUrl,
                  eip2612: !1,
                }))) || [],
        };
        var T = e.i(174797);
        let y = (0, t.proxy)({ tokenBalances: [], loading: !1 }),
          R = (0, s.withErrorBoundary)({
            state: y,
            subscribe: (e) => (0, t.subscribe)(y, () => e(y)),
            subscribeKey: (e, t) => (0, n.subscribeKey)(y, e, t),
            setToken(e) {
              e && (y.token = (0, t.ref)(e));
            },
            setTokenAmount(e) {
              y.sendTokenAmount = e;
            },
            setReceiverAddress(e) {
              y.receiverAddress = e;
            },
            setReceiverProfileImageUrl(e) {
              y.receiverProfileImageUrl = e;
            },
            setReceiverProfileName(e) {
              y.receiverProfileName = e;
            },
            setNetworkBalanceInUsd(e) {
              y.networkBalanceInUSD = e;
            },
            setLoading(e) {
              y.loading = e;
            },
            async sendToken() {
              try {
                var e;
                switch (
                  (R.setLoading(!0),
                  null == (e = P.state.activeCaipNetwork)
                    ? void 0
                    : e.chainNamespace)
                ) {
                  case "eip155":
                    await R.sendEvmToken();
                    return;
                  case "solana":
                    await R.sendSolanaToken();
                    return;
                  default:
                    throw Error("Unsupported chain");
                }
              } finally {
                R.setLoading(!1);
              }
            },
            async sendEvmToken() {
              var e, t, n;
              let r = P.state.activeChain;
              if (!r)
                throw Error(
                  "SendController:sendEvmToken - activeChainNamespace is required"
                );
              let o = (0, N.getPreferredAccountType)(r);
              if (!R.state.sendTokenAmount || !R.state.receiverAddress)
                throw Error("An amount and receiver address are required");
              if (!R.state.token) throw Error("A token is required");
              (null == (e = R.state.token) ? void 0 : e.address)
                ? (p.EventsController.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                      isSmartAccount:
                        o ===
                        b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                      token: R.state.token.address,
                      amount: R.state.sendTokenAmount,
                      network:
                        (null == (t = P.state.activeCaipNetwork)
                          ? void 0
                          : t.caipNetworkId) || "",
                    },
                  }),
                  await R.sendERC20Token({
                    receiverAddress: R.state.receiverAddress,
                    tokenAddress: R.state.token.address,
                    sendTokenAmount: R.state.sendTokenAmount,
                    decimals: R.state.token.quantity.decimals,
                  }))
                : (p.EventsController.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                      isSmartAccount:
                        o ===
                        b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                      token: R.state.token.symbol || "",
                      amount: R.state.sendTokenAmount,
                      network:
                        (null == (n = P.state.activeCaipNetwork)
                          ? void 0
                          : n.caipNetworkId) || "",
                    },
                  }),
                  await R.sendNativeToken({
                    receiverAddress: R.state.receiverAddress,
                    sendTokenAmount: R.state.sendTokenAmount,
                    decimals: R.state.token.quantity.decimals,
                  }));
            },
            async fetchTokenBalance(e) {
              var t, n;
              y.loading = !0;
              let r =
                  null == (t = P.state.activeCaipNetwork)
                    ? void 0
                    : t.caipNetworkId,
                o =
                  null == (n = P.state.activeCaipNetwork)
                    ? void 0
                    : n.chainNamespace,
                l = P.state.activeCaipAddress,
                s = l ? i.CoreHelperUtil.getPlainAddress(l) : void 0;
              if (
                y.lastRetry &&
                !i.CoreHelperUtil.isAllowedRetry(
                  y.lastRetry,
                  30 * a.ConstantsUtil.ONE_SEC_MS
                )
              )
                return (y.loading = !1), [];
              try {
                if (s && r && o) {
                  let e = await _.BalanceUtil.getMyTokensWithBalance();
                  return (y.tokenBalances = e), (y.lastRetry = void 0), e;
                }
              } catch (t) {
                (y.lastRetry = Date.now()),
                  null == e || e(t),
                  T.SnackController.showError("Token Balance Unavailable");
              } finally {
                y.loading = !1;
              }
              return [];
            },
            fetchNetworkBalance() {
              if (0 === y.tokenBalances.length) return;
              let e = I.mapBalancesToSwapTokens(y.tokenBalances);
              if (!e) return;
              let t = e.find(
                (e) => e.address === (0, N.getActiveNetworkTokenAddress)()
              );
              t &&
                (y.networkBalanceInUSD = t
                  ? h.NumberUtil.multiply(
                      t.quantity.numeric,
                      t.price
                    ).toString()
                  : "0");
            },
            async sendNativeToken(e) {
              var t, n, o;
              g.RouterController.pushTransactionStack({});
              let a = e.receiverAddress,
                i = c.AccountController.state.address,
                l = u.ConnectionController.parseUnits(
                  e.sendTokenAmount.toString(),
                  Number(e.decimals)
                );
              await u.ConnectionController.sendTransaction({
                chainNamespace: r.ConstantsUtil.CHAIN.EVM,
                to: a,
                address: i,
                data: "0x",
                value: null != l ? l : BigInt(0),
              }),
                p.EventsController.sendEvent({
                  type: "track",
                  event: "SEND_SUCCESS",
                  properties: {
                    isSmartAccount:
                      (0, N.getPreferredAccountType)("eip155") ===
                      b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token:
                      (null == (t = R.state.token) ? void 0 : t.symbol) || "",
                    amount: e.sendTokenAmount,
                    network:
                      (null == (n = P.state.activeCaipNetwork)
                        ? void 0
                        : n.caipNetworkId) || "",
                  },
                }),
                null == (o = u.ConnectionController._getClient()) ||
                  o.updateBalance("eip155"),
                R.resetSend();
            },
            async sendERC20Token(e) {
              g.RouterController.pushTransactionStack({
                onSuccess() {
                  g.RouterController.replace("Account");
                },
              });
              let t = u.ConnectionController.parseUnits(
                e.sendTokenAmount.toString(),
                Number(e.decimals)
              );
              if (
                c.AccountController.state.address &&
                e.sendTokenAmount &&
                e.receiverAddress &&
                e.tokenAddress
              ) {
                let n = i.CoreHelperUtil.getPlainAddress(e.tokenAddress);
                if (!n)
                  throw Error(
                    "SendController:sendERC20Token - tokenAddress is required"
                  );
                await u.ConnectionController.writeContract({
                  fromAddress: c.AccountController.state.address,
                  tokenAddress: n,
                  args: [e.receiverAddress, null != t ? t : BigInt(0)],
                  method: "transfer",
                  abi: A.getERC20Abi(n),
                  chainNamespace: r.ConstantsUtil.CHAIN.EVM,
                }),
                  R.resetSend();
              }
            },
            async sendSolanaToken() {
              var e;
              if (!R.state.sendTokenAmount || !R.state.receiverAddress)
                throw Error("An amount and receiver address are required");
              g.RouterController.pushTransactionStack({
                onSuccess() {
                  g.RouterController.replace("Account");
                },
              }),
                await u.ConnectionController.sendTransaction({
                  chainNamespace: "solana",
                  to: R.state.receiverAddress,
                  value: R.state.sendTokenAmount,
                }),
                null == (e = u.ConnectionController._getClient()) ||
                  e.updateBalance("solana"),
                R.resetSend();
            },
            resetSend() {
              (y.token = void 0),
                (y.sendTokenAmount = void 0),
                (y.receiverAddress = void 0),
                (y.receiverProfileImageUrl = void 0),
                (y.receiverProfileName = void 0),
                (y.loading = !1),
                (y.tokenBalances = []);
            },
          }),
          k = {
            currentTab: 0,
            tokenBalance: [],
            smartAccountDeployed: !1,
            addressLabels: new Map(),
            user: void 0,
            preferredAccountType: void 0,
          },
          O = {
            caipNetwork: void 0,
            supportsAllNetworks: !0,
            smartAccountEnabledNetworks: [],
          },
          U = (0, t.proxy)({
            chains: (0, n.proxyMap)(),
            activeCaipAddress: void 0,
            activeChain: void 0,
            activeCaipNetwork: void 0,
            noAdapters: !1,
            universalAdapter: {
              networkControllerClient: void 0,
              connectionControllerClient: void 0,
            },
            isSwitchingNamespace: !1,
          }),
          P = (0, s.withErrorBoundary)({
            state: U,
            subscribe: (e) =>
              (0, t.subscribe)(U, () => {
                e(U);
              }),
            subscribeKey: (e, t) => (0, n.subscribeKey)(U, e, t),
            subscribeChainProp(e, n, r) {
              let o;
              return (0, t.subscribe)(U.chains, () => {
                let t = r || U.activeChain;
                if (t) {
                  var a;
                  let r = null == (a = U.chains.get(t)) ? void 0 : a[e];
                  o !== r && ((o = r), n(r));
                }
              });
            },
            initialize(e, n, r) {
              var o;
              let { chainId: a, namespace: i } =
                  l.StorageUtil.getActiveNetworkProps(),
                s =
                  null == n
                    ? void 0
                    : n.find(
                        (e) =>
                          e.id.toString() ===
                          (null == a ? void 0 : a.toString())
                      ),
                c =
                  e.find((e) => (null == e ? void 0 : e.namespace) === i) ||
                  (null == e ? void 0 : e[0]),
                u = e.map((e) => e.namespace).filter((e) => void 0 !== e),
                d = new Set(
                  m.OptionsController.state.enableEmbedded
                    ? [...u]
                    : [
                        ...(null !=
                        (o =
                          null == n ? void 0 : n.map((e) => e.chainNamespace))
                          ? o
                          : []),
                      ]
                );
              ((null == e ? void 0 : e.length) !== 0 && c) ||
                (U.noAdapters = !0),
                !U.noAdapters &&
                  ((U.activeChain = null == c ? void 0 : c.namespace),
                  (U.activeCaipNetwork = s),
                  P.setChainNetworkData(null == c ? void 0 : c.namespace, {
                    caipNetwork: s,
                  }),
                  U.activeChain &&
                    w.PublicStateController.set({
                      activeChain: null == c ? void 0 : c.namespace,
                    })),
                d.forEach((e) => {
                  let o =
                      null == n
                        ? void 0
                        : n.filter((t) => t.chainNamespace === e),
                    a = l.StorageUtil.getPreferredAccountTypes() || {},
                    i = {
                      ...m.OptionsController.state.defaultAccountTypes,
                      ...a,
                    };
                  P.state.chains.set(e, {
                    namespace: e,
                    networkState: (0, t.proxy)({
                      ...O,
                      caipNetwork: null == o ? void 0 : o[0],
                    }),
                    accountState: (0, t.proxy)({
                      ...k,
                      preferredAccountType: i[e],
                    }),
                    caipNetworks: null != o ? o : [],
                    ...r,
                  }),
                    P.setRequestedCaipNetworks(null != o ? o : [], e);
                });
            },
            removeAdapter(e) {
              if (U.activeChain === e) {
                let r = Array.from(U.chains.entries()).find((t) => {
                  let [n] = t;
                  return n !== e;
                });
                if (r) {
                  var t, n;
                  let e =
                    null == (n = r[1]) || null == (t = n.caipNetworks)
                      ? void 0
                      : t[0];
                  e && P.setActiveCaipNetwork(e);
                }
              }
              U.chains.delete(e);
            },
            addAdapter(e, t, n) {
              var r;
              let {
                networkControllerClient: o,
                connectionControllerClient: a,
              } = t;
              if (!e.namespace)
                throw Error(
                  "ChainController:addAdapter - adapter must have a namespace"
                );
              U.chains.set(e.namespace, {
                namespace: e.namespace,
                networkState: { ...O, caipNetwork: n[0] },
                accountState: k,
                caipNetworks: n,
                connectionControllerClient: a,
                networkControllerClient: o,
              }),
                P.setRequestedCaipNetworks(
                  null !=
                    (r =
                      null == n
                        ? void 0
                        : n.filter((t) => t.chainNamespace === e.namespace))
                    ? r
                    : [],
                  e.namespace
                );
            },
            addNetwork(e) {
              let t = U.chains.get(e.chainNamespace);
              if (t) {
                var n;
                let r = [...(t.caipNetworks || [])];
                (null == (n = t.caipNetworks)
                  ? void 0
                  : n.find((t) => t.id === e.id)) || r.push(e),
                  U.chains.set(e.chainNamespace, { ...t, caipNetworks: r }),
                  P.setRequestedCaipNetworks(r, e.chainNamespace),
                  d.ConnectorController.filterByNamespace(e.chainNamespace, !0);
              }
            },
            removeNetwork(e, t) {
              let n = U.chains.get(e);
              if (n) {
                var r, o, a;
                let i =
                    (null == (r = U.activeCaipNetwork) ? void 0 : r.id) === t,
                  l = [
                    ...((null == (o = n.caipNetworks)
                      ? void 0
                      : o.filter((e) => e.id !== t)) || []),
                  ];
                i &&
                  (null == n || null == (a = n.caipNetworks) ? void 0 : a[0]) &&
                  P.setActiveCaipNetwork(n.caipNetworks[0]),
                  U.chains.set(e, { ...n, caipNetworks: l }),
                  P.setRequestedCaipNetworks(l || [], e),
                  0 === l.length &&
                    d.ConnectorController.filterByNamespace(e, !1);
              }
            },
            setAdapterNetworkState(e, t) {
              let n = U.chains.get(e);
              n &&
                ((n.networkState = { ...(n.networkState || O), ...t }),
                U.chains.set(e, n));
            },
            setChainAccountData(e, t) {
              if (
                (arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                !e)
              )
                throw Error("Chain is required to update chain account data");
              let n = U.chains.get(e);
              if (n) {
                let r = { ...(n.accountState || k), ...t };
                U.chains.set(e, { ...n, accountState: r }),
                  (1 === U.chains.size || U.activeChain === e) &&
                    (t.caipAddress && (U.activeCaipAddress = t.caipAddress),
                    c.AccountController.replaceState(r));
              }
            },
            setChainNetworkData(e, t) {
              if (!e) return;
              let n = U.chains.get(e);
              if (n) {
                let r = { ...(n.networkState || O), ...t };
                U.chains.set(e, { ...n, networkState: r });
              }
            },
            setAccountProp(e, t, n) {
              let r =
                !(arguments.length > 3) ||
                void 0 === arguments[3] ||
                arguments[3];
              P.setChainAccountData(n, { [e]: t }, r);
            },
            setActiveNamespace(e) {
              var t, n;
              U.activeChain = e;
              let r = e ? U.chains.get(e) : void 0,
                o =
                  null == r || null == (t = r.networkState)
                    ? void 0
                    : t.caipNetwork;
              (null == o ? void 0 : o.id) &&
                e &&
                ((U.activeCaipAddress =
                  null == r || null == (n = r.accountState)
                    ? void 0
                    : n.caipAddress),
                (U.activeCaipNetwork = o),
                P.setChainNetworkData(e, { caipNetwork: o }),
                l.StorageUtil.setActiveCaipNetworkId(
                  null == o ? void 0 : o.caipNetworkId
                ),
                w.PublicStateController.set({
                  activeChain: e,
                  selectedNetworkId: null == o ? void 0 : o.caipNetworkId,
                }));
            },
            setActiveCaipNetwork(e) {
              var t, n, r;
              if (!e) return;
              U.activeChain !== e.chainNamespace &&
                P.setIsSwitchingNamespace(!0);
              let o = U.chains.get(e.chainNamespace);
              (U.activeChain = e.chainNamespace),
                (U.activeCaipNetwork = e),
                P.setChainNetworkData(e.chainNamespace, { caipNetwork: e }),
                (null == o || null == (t = o.accountState) ? void 0 : t.address)
                  ? (U.activeCaipAddress = ""
                      .concat(e.chainNamespace, ":")
                      .concat(e.id, ":")
                      .concat(
                        null == o || null == (r = o.accountState)
                          ? void 0
                          : r.address
                      ))
                  : (U.activeCaipAddress = void 0),
                P.setAccountProp(
                  "caipAddress",
                  U.activeCaipAddress,
                  e.chainNamespace
                ),
                o && c.AccountController.replaceState(o.accountState),
                R.resetSend(),
                w.PublicStateController.set({
                  activeChain: U.activeChain,
                  selectedNetworkId:
                    null == (n = U.activeCaipNetwork)
                      ? void 0
                      : n.caipNetworkId,
                }),
                l.StorageUtil.setActiveCaipNetworkId(e.caipNetworkId),
                P.checkIfSupportedNetwork(e.chainNamespace) ||
                  !m.OptionsController.state.enableNetworkSwitch ||
                  m.OptionsController.state.allowUnsupportedChain ||
                  u.ConnectionController.state.wcBasic ||
                  P.showUnsupportedChainUI();
            },
            addCaipNetwork(e) {
              if (!e) return;
              let t = U.chains.get(e.chainNamespace);
              if (t) {
                var n;
                null == t || null == (n = t.caipNetworks) || n.push(e);
              }
            },
            async switchActiveNamespace(e) {
              var t;
              if (!e) return;
              let n = e !== P.state.activeChain,
                r = null == (t = P.getNetworkData(e)) ? void 0 : t.caipNetwork,
                o = P.getCaipNetworkByNamespace(e, null == r ? void 0 : r.id);
              n && o && (await P.switchActiveNetwork(o));
            },
            async switchActiveNetwork(e) {
              var t;
              let n = P.state.activeChain;
              if (!n)
                throw Error(
                  "ChainController:switchActiveNetwork - namespace is required"
                );
              let r = P.state.chains.get(n),
                o = !(null == r || null == (t = r.caipNetworks)
                  ? void 0
                  : t.some((e) => {
                      var t;
                      return (
                        e.id ===
                        (null == (t = U.activeCaipNetwork) ? void 0 : t.id)
                      );
                    })),
                a = P.getNetworkControllerClient(e.chainNamespace);
              if (a) {
                try {
                  await a.switchCaipNetwork(e), o && C.ModalController.close();
                } catch (e) {
                  g.RouterController.goBack();
                }
                p.EventsController.sendEvent({
                  type: "track",
                  event: "SWITCH_NETWORK",
                  properties: { network: e.caipNetworkId },
                });
              }
            },
            getNetworkControllerClient(e) {
              let t = e || U.activeChain;
              if (!t)
                throw Error(
                  "ChainController:getNetworkControllerClient - chain is required"
                );
              let n = U.chains.get(t);
              if (!n) throw Error("Chain adapter not found");
              if (!n.networkControllerClient)
                throw Error("NetworkController client not set");
              return n.networkControllerClient;
            },
            getConnectionControllerClient(e) {
              let t = e || U.activeChain;
              if (!t)
                throw Error(
                  "Chain is required to get connection controller client"
                );
              let n = U.chains.get(t);
              if (!(null == n ? void 0 : n.connectionControllerClient))
                throw Error("ConnectionController client not set");
              return n.connectionControllerClient;
            },
            getAccountProp(e, t) {
              var n;
              let r = U.activeChain;
              if ((t && (r = t), !r)) return;
              let o = null == (n = U.chains.get(r)) ? void 0 : n.accountState;
              if (o) return o[e];
            },
            getNetworkProp(e, t) {
              var n;
              let r = null == (n = U.chains.get(t)) ? void 0 : n.networkState;
              if (r) return r[e];
            },
            getRequestedCaipNetworks(e) {
              let t = U.chains.get(e),
                {
                  approvedCaipNetworkIds: n = [],
                  requestedCaipNetworks: r = [],
                } = (null == t ? void 0 : t.networkState) || {};
              return i.CoreHelperUtil.sortRequestedNetworks(n, r).filter((e) =>
                null == e ? void 0 : e.id
              );
            },
            getAllRequestedCaipNetworks() {
              let e = [];
              return (
                U.chains.forEach((t) => {
                  if (!t.namespace)
                    throw Error(
                      "ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace"
                    );
                  let n = P.getRequestedCaipNetworks(t.namespace);
                  e.push(...n);
                }),
                e
              );
            },
            setRequestedCaipNetworks(e, t) {
              P.setAdapterNetworkState(t, { requestedCaipNetworks: e });
              let n = Array.from(
                new Set(
                  P.getAllRequestedCaipNetworks().map((e) => e.chainNamespace)
                )
              );
              d.ConnectorController.filterByNamespaces(n);
            },
            getAllApprovedCaipNetworkIds() {
              let e = [];
              return (
                U.chains.forEach((t) => {
                  if (!t.namespace)
                    throw Error(
                      "ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace"
                    );
                  let n = P.getApprovedCaipNetworkIds(t.namespace);
                  e.push(...n);
                }),
                e
              );
            },
            getActiveCaipNetwork(e) {
              if (e) {
                var t, n;
                return null == (n = U.chains.get(e)) ||
                  null == (t = n.networkState)
                  ? void 0
                  : t.caipNetwork;
              }
              return U.activeCaipNetwork;
            },
            getActiveCaipAddress: () => U.activeCaipAddress,
            getApprovedCaipNetworkIds(e) {
              var t;
              let n = U.chains.get(e);
              return (
                (null == n || null == (t = n.networkState)
                  ? void 0
                  : t.approvedCaipNetworkIds) || []
              );
            },
            async setApprovedCaipNetworksData(e) {
              let t = P.getNetworkControllerClient(),
                n = await (null == t
                  ? void 0
                  : t.getApprovedCaipNetworksData());
              P.setAdapterNetworkState(e, {
                approvedCaipNetworkIds:
                  null == n ? void 0 : n.approvedCaipNetworkIds,
                supportsAllNetworks: null == n ? void 0 : n.supportsAllNetworks,
              });
            },
            checkIfSupportedNetwork(e, t) {
              let n = t || U.activeCaipNetwork,
                r = P.getRequestedCaipNetworks(e);
              return (
                !r.length ||
                (null == r
                  ? void 0
                  : r.some((e) => e.id === (null == n ? void 0 : n.id)))
              );
            },
            checkIfSupportedChainId(e) {
              if (!U.activeChain) return !0;
              let t = P.getRequestedCaipNetworks(U.activeChain);
              return null == t ? void 0 : t.some((t) => t.id === e);
            },
            setSmartAccountEnabledNetworks(e, t) {
              P.setAdapterNetworkState(t, { smartAccountEnabledNetworks: e });
            },
            checkIfSmartAccountEnabled() {
              var e;
              let t = o.NetworkUtil.caipNetworkIdToNumber(
                  null == (e = U.activeCaipNetwork) ? void 0 : e.caipNetworkId
                ),
                n = U.activeChain;
              if (!n || !t) return !1;
              let r = P.getNetworkProp("smartAccountEnabledNetworks", n);
              return !!(null == r ? void 0 : r.includes(Number(t)));
            },
            showUnsupportedChainUI() {
              C.ModalController.open({ view: "UnsupportedChain" });
            },
            checkIfNamesSupported() {
              let e = U.activeCaipNetwork;
              return !!(
                (null == e ? void 0 : e.chainNamespace) &&
                a.ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(
                  e.chainNamespace
                )
              );
            },
            resetNetwork(e) {
              P.setAdapterNetworkState(e, {
                approvedCaipNetworkIds: void 0,
                supportsAllNetworks: !0,
              });
            },
            resetAccount(e) {
              if (!e) throw Error("Chain is required to set account prop");
              let t = m.OptionsController.state.defaultAccountTypes[e],
                n = P.getAccountProp("preferredAccountType", e);
              (U.activeCaipAddress = void 0),
                P.setChainAccountData(e, {
                  smartAccountDeployed: !1,
                  currentTab: 0,
                  caipAddress: void 0,
                  address: void 0,
                  balance: void 0,
                  balanceSymbol: void 0,
                  profileName: void 0,
                  profileImage: void 0,
                  addressExplorerUrl: void 0,
                  tokenBalance: [],
                  connectedWalletInfo: void 0,
                  preferredAccountType: t || n,
                  socialProvider: void 0,
                  socialWindow: void 0,
                  farcasterUrl: void 0,
                  user: void 0,
                  status: "disconnected",
                }),
                d.ConnectorController.removeConnectorId(e);
            },
            setIsSwitchingNamespace(e) {
              U.isSwitchingNamespace = e;
            },
            getFirstCaipNetworkSupportsAuthConnector() {
              let e = [];
              if (
                (U.chains.forEach((t) => {
                  r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
                    (e) => e === t.namespace
                  ) &&
                    t.namespace &&
                    e.push(t.namespace);
                }),
                e.length > 0)
              ) {
                var t, n;
                let r = e[0];
                return r
                  ? null == (n = U.chains.get(r)) ||
                    null == (t = n.caipNetworks)
                    ? void 0
                    : t[0]
                  : void 0;
              }
            },
            getAccountData(e) {
              var t;
              return e
                ? null == (t = P.state.chains.get(e))
                  ? void 0
                  : t.accountState
                : c.AccountController.state;
            },
            getNetworkData(e) {
              var t;
              let n = e || U.activeChain;
              if (n)
                return null == (t = P.state.chains.get(n))
                  ? void 0
                  : t.networkState;
            },
            getCaipNetworkByNamespace(e, t) {
              var n, r, o;
              if (!e) return;
              let a = P.state.chains.get(e),
                i =
                  null == a || null == (n = a.caipNetworks)
                    ? void 0
                    : n.find((e) => e.id === t);
              return (
                i ||
                (null == a || null == (r = a.networkState)
                  ? void 0
                  : r.caipNetwork) ||
                (null == a || null == (o = a.caipNetworks) ? void 0 : o[0])
              );
            },
            getRequestedCaipNetworkIds() {
              let e = d.ConnectorController.state.filterByNamespace;
              return (e ? [U.chains.get(e)] : Array.from(U.chains.values()))
                .flatMap((e) => (null == e ? void 0 : e.caipNetworks) || [])
                .map((e) => e.caipNetworkId);
            },
            getCaipNetworks: (e) =>
              e
                ? P.getRequestedCaipNetworks(e)
                : P.getAllRequestedCaipNetworks(),
            setLastConnectedSIWECaipNetwork(e) {
              U.lastConnectedSIWECaipNetwork = e;
            },
            getLastConnectedSIWECaipNetwork: () =>
              U.lastConnectedSIWECaipNetwork,
          });
      },
      [943740, 968548, 663563],
    ],
    394589: (e) => {
      "use strict";
      e.s({ BlockchainApiController: () => C });
      var t = e.i(861600),
        n = e.i(76107),
        r = e.i(159055),
        o = e.i(253675),
        a = e.i(527410),
        i = e.i(705258),
        l = e.i(631867),
        s = e.i(737460),
        c = e.i(174797);
      let u = {
          purchaseCurrencies: [
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "USD Coin",
              symbol: "USDC",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "Ether",
              symbol: "ETH",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
          ],
          paymentCurrencies: [
            {
              id: "USD",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
            {
              id: "EUR",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
          ],
        },
        d = r.CoreHelperUtil.getBlockchainApiUrl(),
        p = (0, t.proxy)({
          clientId: null,
          api: new o.FetchUtil({ baseUrl: d, clientId: null }),
          supportedChains: { http: [], ws: [] },
        }),
        C = {
          state: p,
          async get(e) {
            let { st: t, sv: n } = C.getSdkProperties(),
              r = s.OptionsController.state.projectId,
              o = { ...(e.params || {}), st: t, sv: n, projectId: r };
            return p.api.get({ ...e, params: o });
          },
          getSdkProperties() {
            let { sdkType: e, sdkVersion: t } = s.OptionsController.state;
            return { st: e || "unknown", sv: t || "unknown" };
          },
          async isNetworkSupported(e) {
            if (!e) return !1;
            try {
              p.supportedChains.http.length || (await C.getSupportedNetworks());
            } catch (e) {
              return !1;
            }
            return p.supportedChains.http.includes(e);
          },
          async getSupportedNetworks() {
            try {
              let e = await C.get({ path: "v1/supported-chains" });
              return (p.supportedChains = e), e;
            } catch (e) {
              return p.supportedChains;
            }
          },
          async fetchIdentity(e) {
            let { address: t, caipNetworkId: n } = e;
            if (!(await C.isNetworkSupported(n)))
              return { avatar: "", name: "" };
            let o = a.StorageUtil.getIdentityFromCacheForAddress(t);
            if (o) return o;
            let i = await C.get({
              path: "/v1/identity/".concat(t),
              params: {
                sender: l.ChainController.state.activeCaipAddress
                  ? r.CoreHelperUtil.getPlainAddress(
                      l.ChainController.state.activeCaipAddress
                    )
                  : void 0,
              },
            });
            return (
              a.StorageUtil.updateIdentityCache({
                address: t,
                identity: i,
                timestamp: Date.now(),
              }),
              i
            );
          },
          async fetchTransactions(e) {
            var t;
            let { account: n, cursor: r, signal: o, cache: a, chainId: i } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/account/".concat(n, "/history"),
                  params: { cursor: r, chainId: i },
                  signal: o,
                  cache: a,
                })
              : { data: [], next: void 0 };
          },
          async fetchSwapQuote(e) {
            var t;
            let { amount: n, userAddress: r, from: o, to: a, gasPrice: i } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/convert/quotes",
                  headers: { "Content-Type": "application/json" },
                  params: {
                    amount: n,
                    userAddress: r,
                    from: o,
                    to: a,
                    gasPrice: i,
                  },
                })
              : { quotes: [] };
          },
          async fetchSwapTokens(e) {
            var t;
            let { chainId: n } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({ path: "/v1/convert/tokens", params: { chainId: n } })
              : { tokens: [] };
          },
          async fetchTokenPrice(e) {
            var t;
            let { addresses: n } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? p.api.post({
                  path: "/v1/fungible/price",
                  body: {
                    currency: "usd",
                    addresses: n,
                    projectId: s.OptionsController.state.projectId,
                  },
                  headers: { "Content-Type": "application/json" },
                })
              : { fungibles: [] };
          },
          async fetchSwapAllowance(e) {
            var t;
            let { tokenAddress: n, userAddress: r } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/convert/allowance",
                  params: { tokenAddress: n, userAddress: r },
                  headers: { "Content-Type": "application/json" },
                })
              : { allowance: "0" };
          },
          async fetchGasPrice(e) {
            var t;
            let { chainId: n } = e,
              { st: r, sv: o } = C.getSdkProperties();
            if (
              !(await C.isNetworkSupported(
                null == (t = l.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw Error("Network not supported for Gas Price");
            return C.get({
              path: "/v1/convert/gas-price",
              headers: { "Content-Type": "application/json" },
              params: { chainId: n, st: r, sv: o },
            });
          },
          async generateSwapCalldata(e) {
            var t;
            let {
              amount: r,
              from: o,
              to: a,
              userAddress: i,
              disableEstimate: c,
            } = e;
            if (
              !(await C.isNetworkSupported(
                null == (t = l.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw Error("Network not supported for Swaps");
            return p.api.post({
              path: "/v1/convert/build-transaction",
              headers: { "Content-Type": "application/json" },
              body: {
                amount: r,
                eip155: {
                  slippage: n.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,
                },
                projectId: s.OptionsController.state.projectId,
                from: o,
                to: a,
                userAddress: i,
                disableEstimate: c,
              },
            });
          },
          async generateApproveCalldata(e) {
            var t;
            let { from: n, to: r, userAddress: o } = e,
              { st: a, sv: i } = C.getSdkProperties();
            if (
              !(await C.isNetworkSupported(
                null == (t = l.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw Error("Network not supported for Swaps");
            return C.get({
              path: "/v1/convert/build-approve",
              headers: { "Content-Type": "application/json" },
              params: { userAddress: o, from: n, to: r, st: a, sv: i },
            });
          },
          async getBalance(e, t, n) {
            var r;
            let { st: o, sv: i } = C.getSdkProperties();
            if (
              !(await C.isNetworkSupported(
                null == (r = l.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : r.caipNetworkId
              ))
            )
              return (
                c.SnackController.showError("Token Balance Unavailable"),
                { balances: [] }
              );
            let s = "".concat(t, ":").concat(e),
              u = a.StorageUtil.getBalanceCacheForCaipAddress(s);
            if (u) return u;
            let d = await C.get({
              path: "/v1/account/".concat(e, "/balance"),
              params: {
                currency: "usd",
                chainId: t,
                forceUpdate: n,
                st: o,
                sv: i,
              },
            });
            return (
              a.StorageUtil.updateBalanceCache({
                caipAddress: s,
                balance: d,
                timestamp: Date.now(),
              }),
              d
            );
          },
          async lookupEnsName(e) {
            var t;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/profile/account/".concat(e),
                  params: { apiVersion: "2" },
                })
              : { addresses: {}, attributes: [] };
          },
          async reverseLookupEnsName(e) {
            var t;
            let { address: n } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/profile/reverse/".concat(n),
                  params: {
                    sender: i.AccountController.state.address,
                    apiVersion: "2",
                  },
                })
              : [];
          },
          async getEnsNameSuggestions(e) {
            var t;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/profile/suggestions/".concat(e),
                  params: { zone: "reown.id" },
                })
              : { suggestions: [] };
          },
          async registerEnsName(e) {
            var t;
            let { coinType: n, address: r, message: o, signature: a } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? p.api.post({
                  path: "/v1/profile/account",
                  body: { coin_type: n, address: r, message: o, signature: a },
                  headers: { "Content-Type": "application/json" },
                })
              : { success: !1 };
          },
          async generateOnRampURL(e) {
            var t;
            let {
              destinationWallets: n,
              partnerUserId: r,
              defaultNetwork: o,
              purchaseAmount: a,
              paymentAmount: i,
            } = e;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? (
                  await p.api.post({
                    path: "/v1/generators/onrampurl",
                    params: { projectId: s.OptionsController.state.projectId },
                    body: {
                      destinationWallets: n,
                      defaultNetwork: o,
                      partnerUserId: r,
                      defaultExperience: "buy",
                      presetCryptoAmount: a,
                      presetFiatAmount: i,
                    },
                  })
                ).url
              : "";
          },
          async getOnrampOptions() {
            var e;
            if (
              !(await C.isNetworkSupported(
                null == (e = l.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : e.caipNetworkId
              ))
            )
              return { paymentCurrencies: [], purchaseCurrencies: [] };
            try {
              return await C.get({ path: "/v1/onramp/options" });
            } catch (e) {
              return u;
            }
          },
          async getOnrampQuote(e) {
            let {
              purchaseCurrency: t,
              paymentCurrency: n,
              amount: r,
              network: o,
            } = e;
            try {
              var a;
              if (
                !(await C.isNetworkSupported(
                  null == (a = l.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : a.caipNetworkId
                ))
              )
                return null;
              return await p.api.post({
                path: "/v1/onramp/quote",
                params: { projectId: s.OptionsController.state.projectId },
                body: {
                  purchaseCurrency: t,
                  paymentCurrency: n,
                  amount: r,
                  network: o,
                },
              });
            } catch (e) {
              return {
                networkFee: { amount: r, currency: n.id },
                paymentSubtotal: { amount: r, currency: n.id },
                paymentTotal: { amount: r, currency: n.id },
                purchaseAmount: { amount: r, currency: n.id },
                quoteId: "mocked-quote-id",
              };
            }
          },
          async getSmartSessions(e) {
            var t;
            return (await C.isNetworkSupported(
              null == (t = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({ path: "/v1/sessions/".concat(e) })
              : [];
          },
          async revokeSmartSession(e, t, n) {
            var r;
            return (await C.isNetworkSupported(
              null == (r = l.ChainController.state.activeCaipNetwork)
                ? void 0
                : r.caipNetworkId
            ))
              ? p.api.post({
                  path: "/v1/sessions/".concat(e, "/revoke"),
                  params: { projectId: s.OptionsController.state.projectId },
                  body: { pci: t, signature: n },
                })
              : { success: !1 };
          },
          setClientId(e) {
            (p.clientId = e),
              (p.api = new o.FetchUtil({ baseUrl: d, clientId: e }));
          },
        };
    },
    705258: [
      (e) => {
        "use strict";
        e.s({ AccountController: () => g }, 705258);
        var t = e.i(861600);
        e.s({ BalanceUtil: () => u }, 737645);
        var n = e.i(605726),
          r = e.i(394589),
          o = e.i(631867),
          a = e.i(875073),
          i = e.i(225335),
          l = e.i(211410);
        let s = {
          createBalance(e, t) {
            let n = {
              name: e.metadata.name || "",
              symbol: e.metadata.symbol || "",
              decimals: e.metadata.decimals || 0,
              value: e.metadata.value || 0,
              price: e.metadata.price || 0,
              iconUrl: e.metadata.iconUrl || "",
            };
            return {
              name: n.name,
              symbol: n.symbol,
              chainId: t,
              address:
                "native" === e.address
                  ? void 0
                  : this.convertAddressToCAIP10Address(e.address, t),
              value: n.value,
              price: n.price,
              quantity: {
                decimals: n.decimals.toString(),
                numeric: this.convertHexToBalance({
                  hex: e.balance,
                  decimals: n.decimals,
                }),
              },
              iconUrl: n.iconUrl,
            };
          },
          convertHexToBalance(e) {
            let { hex: t, decimals: n } = e;
            return (0, l.formatUnits)(BigInt(t), n);
          },
          convertAddressToCAIP10Address: (e, t) => "".concat(t, ":").concat(e),
          createCAIP2ChainId: (e, t) =>
            "".concat(t, ":").concat(parseInt(e, 16)),
          getChainIdHexFromCAIP2ChainId(e) {
            let t = e.split(":");
            if (t.length < 2 || !t[1]) return "0x0";
            let n = parseInt(t[1], 10);
            return isNaN(n) ? "0x0" : "0x".concat(n.toString(16));
          },
          isWalletGetAssetsResponse(e) {
            return (
              "object" == typeof e &&
              null !== e &&
              Object.values(e).every(
                (e) => Array.isArray(e) && e.every((e) => this.isValidAsset(e))
              )
            );
          },
          isValidAsset: (e) =>
            "object" == typeof e &&
            null !== e &&
            "string" == typeof e.address &&
            "string" == typeof e.balance &&
            ("ERC20" === e.type || "NATIVE" === e.type) &&
            "object" == typeof e.metadata &&
            null !== e.metadata &&
            "string" == typeof e.metadata.name &&
            "string" == typeof e.metadata.symbol &&
            "number" == typeof e.metadata.decimals &&
            "number" == typeof e.metadata.price &&
            "string" == typeof e.metadata.iconUrl,
        };
        var c = e.i(527410);
        let u = {
          async getMyTokensWithBalance(e) {
            let t = g.state.address,
              a = o.ChainController.state.activeCaipNetwork,
              l =
                i.ConnectorController.getConnectorId("eip155") ===
                n.ConstantsUtil.CONNECTOR_ID.AUTH;
            if (!t || !a) return [];
            let s = "".concat(a.caipNetworkId, ":").concat(t),
              u = c.StorageUtil.getBalanceCacheForCaipAddress(s);
            if (u) return u.balances;
            if (a.chainNamespace === n.ConstantsUtil.CHAIN.EVM && l) {
              let e = await this.getEIP155Balances(t, a);
              if (e) return this.filterLowQualityTokens(e);
            }
            let d = await r.BlockchainApiController.getBalance(
              t,
              a.caipNetworkId,
              e
            );
            return this.filterLowQualityTokens(d.balances);
          },
          async getEIP155Balances(e, t) {
            try {
              var n, r;
              let o = s.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),
                i = await a.ConnectionController.getCapabilities(e);
              if (
                !(null == i ||
                null == (r = i[o]) ||
                null == (n = r.assetDiscovery)
                  ? void 0
                  : n.supported)
              )
                return null;
              let l = await a.ConnectionController.walletGetAssets({
                account: e,
                chainFilter: [o],
              });
              if (!s.isWalletGetAssetsResponse(l)) return null;
              let u = (l[o] || []).map((e) =>
                s.createBalance(e, t.caipNetworkId)
              );
              return (
                c.StorageUtil.updateBalanceCache({
                  caipAddress: "".concat(t.caipNetworkId, ":").concat(e),
                  balance: { balances: u },
                  timestamp: Date.now(),
                }),
                u
              );
            } catch (e) {
              return null;
            }
          },
          filterLowQualityTokens: (e) =>
            e.filter((e) => "0" !== e.quantity.decimals),
        };
        var d = e.i(76107),
          p = e.i(159055),
          C = e.i(778221),
          m = e.i(174797);
        let w = (0, t.proxy)({
            currentTab: 0,
            tokenBalance: [],
            smartAccountDeployed: !1,
            addressLabels: new Map(),
          }),
          g = (0, C.withErrorBoundary)({
            state: w,
            replaceState(e) {
              e && Object.assign(w, (0, t.ref)(e));
            },
            subscribe: (e) =>
              o.ChainController.subscribeChainProp("accountState", (t) => {
                if (t) return e(t);
              }),
            subscribeKey(e, t, n) {
              let r;
              return o.ChainController.subscribeChainProp(
                "accountState",
                (n) => {
                  if (n) {
                    let o = n[e];
                    r !== o && ((r = o), t(o));
                  }
                },
                n
              );
            },
            setStatus(e, t) {
              o.ChainController.setAccountProp("status", e, t);
            },
            getCaipAddress: (e) =>
              o.ChainController.getAccountProp("caipAddress", e),
            setCaipAddress(e, t) {
              let n = e ? p.CoreHelperUtil.getPlainAddress(e) : void 0;
              t === o.ChainController.state.activeChain &&
                (o.ChainController.state.activeCaipAddress = e),
                o.ChainController.setAccountProp("caipAddress", e, t),
                o.ChainController.setAccountProp("address", n, t);
            },
            setBalance(e, t, n) {
              o.ChainController.setAccountProp("balance", e, n),
                o.ChainController.setAccountProp("balanceSymbol", t, n);
            },
            setProfileName(e, t) {
              o.ChainController.setAccountProp("profileName", e, t);
            },
            setProfileImage(e, t) {
              o.ChainController.setAccountProp("profileImage", e, t);
            },
            setUser(e, t) {
              o.ChainController.setAccountProp("user", e, t);
            },
            setAddressExplorerUrl(e, t) {
              o.ChainController.setAccountProp("addressExplorerUrl", e, t);
            },
            setSmartAccountDeployed(e, t) {
              o.ChainController.setAccountProp("smartAccountDeployed", e, t);
            },
            setCurrentTab(e) {
              o.ChainController.setAccountProp(
                "currentTab",
                e,
                o.ChainController.state.activeChain
              );
            },
            setTokenBalance(e, t) {
              e && o.ChainController.setAccountProp("tokenBalance", e, t);
            },
            setShouldUpdateToAddress(e, t) {
              o.ChainController.setAccountProp("shouldUpdateToAddress", e, t);
            },
            addAddressLabel(e, t, n) {
              let r =
                o.ChainController.getAccountProp("addressLabels", n) ||
                new Map();
              r.set(e, t),
                o.ChainController.setAccountProp("addressLabels", r, n);
            },
            removeAddressLabel(e, t) {
              let n =
                o.ChainController.getAccountProp("addressLabels", t) ||
                new Map();
              n.delete(e),
                o.ChainController.setAccountProp("addressLabels", n, t);
            },
            setConnectedWalletInfo(e, t) {
              o.ChainController.setAccountProp("connectedWalletInfo", e, t, !1);
            },
            setPreferredAccountType(e, t) {
              o.ChainController.setAccountProp("preferredAccountType", e, t);
            },
            setSocialProvider(e, t) {
              e && o.ChainController.setAccountProp("socialProvider", e, t);
            },
            setSocialWindow(e, n) {
              o.ChainController.setAccountProp(
                "socialWindow",
                e ? (0, t.ref)(e) : void 0,
                n
              );
            },
            setFarcasterUrl(e, t) {
              o.ChainController.setAccountProp("farcasterUrl", e, t);
            },
            async fetchTokenBalance(e) {
              var t, n;
              w.balanceLoading = !0;
              let r =
                  null == (t = o.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : t.caipNetworkId,
                a =
                  null == (n = o.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : n.chainNamespace,
                i = o.ChainController.state.activeCaipAddress,
                l = i ? p.CoreHelperUtil.getPlainAddress(i) : void 0;
              if (
                w.lastRetry &&
                !p.CoreHelperUtil.isAllowedRetry(
                  w.lastRetry,
                  30 * d.ConstantsUtil.ONE_SEC_MS
                )
              )
                return (w.balanceLoading = !1), [];
              try {
                if (l && r && a) {
                  let e = await u.getMyTokensWithBalance();
                  return (
                    g.setTokenBalance(e, a),
                    (w.lastRetry = void 0),
                    (w.balanceLoading = !1),
                    e
                  );
                }
              } catch (t) {
                (w.lastRetry = Date.now()),
                  null == e || e(t),
                  m.SnackController.showError("Token Balance Unavailable");
              } finally {
                w.balanceLoading = !1;
              }
              return [];
            },
            resetAccount(e) {
              o.ChainController.resetAccount(e);
            },
          });
      },
      [737645],
    ],
    229803: (e) => {
      "use strict";
      e.s({ MathUtil: () => t });
      let t = {
        interpolate(e, t, n) {
          if (2 !== e.length || 2 !== t.length)
            throw Error(
              "inputRange and outputRange must be an array of length 2"
            );
          let r = e[0] || 0,
            o = e[1] || 0,
            a = t[0] || 0,
            i = t[1] || 0;
          return n < r ? a : n > o ? i : ((i - a) / (o - r)) * (n - r) + a;
        },
      };
    },
    433829: [
      (e) => {
        "use strict";
        let t, n, r;
        e.s({}, 433829),
          e.i(229803),
          e.s(
            {
              colorStyles: () => E,
              elementStyles: () => v,
              initializeTheming: () => C,
              resetStyles: () => h,
              setColorTheme: () => m,
              setThemeVariables: () => w,
            },
            361156
          );
        var o = e.i(213384);
        e.i(478795);
        var a = e.i(126790),
          i = e.i(517889);
        function l() {
          let e = (0, o._)([
            "\n      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n      @keyframes w3m-shake {\n        0% {\n          transform: scale(1) rotate(0deg);\n        }\n        20% {\n          transform: scale(1) rotate(-1deg);\n        }\n        40% {\n          transform: scale(1) rotate(1.5deg);\n        }\n        60% {\n          transform: scale(1) rotate(-1.5deg);\n        }\n        80% {\n          transform: scale(1) rotate(1deg);\n        }\n        100% {\n          transform: scale(1) rotate(0deg);\n        }\n      }\n      @keyframes w3m-iframe-fade-out {\n        0% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n      @keyframes w3m-iframe-zoom-in {\n        0% {\n          transform: translateY(50px);\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(0px);\n          opacity: 1;\n        }\n      }\n      @keyframes w3m-iframe-zoom-in-mobile {\n        0% {\n          transform: scale(0.95);\n          opacity: 0;\n        }\n        100% {\n          transform: scale(1);\n          opacity: 1;\n        }\n      }\n      :root {\n        --w3m-modal-width: 360px;\n        --w3m-color-mix-strength: ",
            ";\n        --w3m-font-family: ",
            ";\n        --w3m-font-size-master: ",
            ";\n        --w3m-border-radius-master: ",
            ";\n        --w3m-z-index: ",
            ";\n\n        --wui-font-family: var(--w3m-font-family);\n\n        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);\n        --wui-font-size-micro: var(--w3m-font-size-master);\n        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);\n        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);\n        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);\n        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);\n        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);\n        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);\n        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);\n        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);\n\n        --wui-border-radius-5xs: var(--w3m-border-radius-master);\n        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);\n        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);\n        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);\n        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);\n        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);\n        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);\n        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);\n        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);\n\n        --wui-font-weight-light: 400;\n        --wui-font-weight-regular: 500;\n        --wui-font-weight-medium: 600;\n        --wui-font-weight-bold: 700;\n\n        --wui-letter-spacing-2xl: -1.6px;\n        --wui-letter-spacing-medium-title: -0.96px;\n        --wui-letter-spacing-title-6: -0.88px;\n        --wui-letter-spacing-large: -0.8px;\n        --wui-letter-spacing-medium: -0.72px;\n        --wui-letter-spacing-paragraph: -0.64px;\n        --wui-letter-spacing-small: -0.56px;\n        --wui-letter-spacing-tiny: -0.48px;\n        --wui-letter-spacing-micro: -0.2px;\n        --wui-letter-spacing-mini: -0.16px;\n\n        --wui-spacing-0: 0px;\n        --wui-spacing-4xs: 2px;\n        --wui-spacing-3xs: 4px;\n        --wui-spacing-xxs: 6px;\n        --wui-spacing-2xs: 7px;\n        --wui-spacing-xs: 8px;\n        --wui-spacing-1xs: 10px;\n        --wui-spacing-s: 12px;\n        --wui-spacing-m: 14px;\n        --wui-spacing-l: 16px;\n        --wui-spacing-2l: 18px;\n        --wui-spacing-xl: 20px;\n        --wui-spacing-xxl: 24px;\n        --wui-spacing-2xl: 32px;\n        --wui-spacing-3xl: 40px;\n        --wui-spacing-4xl: 90px;\n        --wui-spacing-5xl: 95px;\n\n        --wui-icon-box-size-xxs: 14px;\n        --wui-icon-box-size-xs: 20px;\n        --wui-icon-box-size-sm: 24px;\n        --wui-icon-box-size-md: 32px;\n        --wui-icon-box-size-mdl: 36px;\n        --wui-icon-box-size-lg: 40px;\n        --wui-icon-box-size-2lg: 48px;\n        --wui-icon-box-size-xl: 64px;\n\n        --wui-icon-size-inherit: inherit;\n        --wui-icon-size-xxs: 10px;\n        --wui-icon-size-xs: 12px;\n        --wui-icon-size-sm: 14px;\n        --wui-icon-size-md: 16px;\n        --wui-icon-size-mdl: 18px;\n        --wui-icon-size-lg: 20px;\n        --wui-icon-size-xl: 24px;\n        --wui-icon-size-xxl: 28px;\n\n        --wui-wallet-image-size-inherit: inherit;\n        --wui-wallet-image-size-sm: 40px;\n        --wui-wallet-image-size-md: 56px;\n        --wui-wallet-image-size-lg: 80px;\n\n        --wui-visual-size-size-inherit: inherit;\n        --wui-visual-size-sm: 40px;\n        --wui-visual-size-md: 55px;\n        --wui-visual-size-lg: 80px;\n\n        --wui-box-size-md: 100px;\n        --wui-box-size-lg: 120px;\n\n        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);\n        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);\n\n        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);\n        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);\n        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);\n\n        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);\n\n        --wui-duration-lg: 200ms;\n        --wui-duration-md: 125ms;\n        --wui-duration-sm: 75ms;\n\n        --wui-path-network-sm: path(\n          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'\n        );\n\n        --wui-path-network-md: path(\n          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'\n        );\n\n        --wui-path-network-lg: path(\n          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'\n        );\n\n        --wui-width-network-sm: 36px;\n        --wui-width-network-md: 48px;\n        --wui-width-network-lg: 86px;\n\n        --wui-height-network-sm: 40px;\n        --wui-height-network-md: 54px;\n        --wui-height-network-lg: 96px;\n\n        --wui-icon-size-network-xs: 12px;\n        --wui-icon-size-network-sm: 16px;\n        --wui-icon-size-network-md: 24px;\n        --wui-icon-size-network-lg: 42px;\n\n        --wui-color-inherit: inherit;\n\n        --wui-color-inverse-100: #fff;\n        --wui-color-inverse-000: #000;\n\n        --wui-cover: rgba(20, 20, 20, 0.8);\n\n        --wui-color-modal-bg: var(--wui-color-modal-bg-base);\n\n        --wui-color-accent-100: var(--wui-color-accent-base-100);\n        --wui-color-accent-090: var(--wui-color-accent-base-090);\n        --wui-color-accent-080: var(--wui-color-accent-base-080);\n\n        --wui-color-success-100: var(--wui-color-success-base-100);\n        --wui-color-success-125: var(--wui-color-success-base-125);\n\n        --wui-color-warning-100: var(--wui-color-warning-base-100);\n\n        --wui-color-error-100: var(--wui-color-error-base-100);\n        --wui-color-error-125: var(--wui-color-error-base-125);\n\n        --wui-color-blue-100: var(--wui-color-blue-base-100);\n        --wui-color-blue-90: var(--wui-color-blue-base-90);\n\n        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);\n        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);\n        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);\n        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);\n\n        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);\n\n        --wui-avatar-border: var(--wui-avatar-border-base);\n\n        --wui-thumbnail-border: var(--wui-thumbnail-border-base);\n\n        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);\n\n        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);\n      }\n\n      @supports (background: color-mix(in srgb, white 50%, black)) {\n        :root {\n          --wui-color-modal-bg: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-modal-bg-base)\n          );\n\n          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);\n\n          --wui-color-accent-100: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 100%,\n            transparent\n          );\n          --wui-color-accent-090: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 90%,\n            transparent\n          );\n          --wui-color-accent-080: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 80%,\n            transparent\n          );\n          --wui-color-accent-glass-090: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 90%,\n            transparent\n          );\n          --wui-color-accent-glass-080: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 80%,\n            transparent\n          );\n          --wui-color-accent-glass-020: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 20%,\n            transparent\n          );\n          --wui-color-accent-glass-015: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 15%,\n            transparent\n          );\n          --wui-color-accent-glass-010: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 10%,\n            transparent\n          );\n          --wui-color-accent-glass-005: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 5%,\n            transparent\n          );\n          --wui-color-accent-002: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 2%,\n            transparent\n          );\n\n          --wui-color-fg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-100)\n          );\n          --wui-color-fg-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-125)\n          );\n          --wui-color-fg-150: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-150)\n          );\n          --wui-color-fg-175: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-175)\n          );\n          --wui-color-fg-200: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-200)\n          );\n          --wui-color-fg-225: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-225)\n          );\n          --wui-color-fg-250: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-250)\n          );\n          --wui-color-fg-275: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-275)\n          );\n          --wui-color-fg-300: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-300)\n          );\n          --wui-color-fg-325: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-325)\n          );\n          --wui-color-fg-350: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-350)\n          );\n\n          --wui-color-bg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-100)\n          );\n          --wui-color-bg-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-125)\n          );\n          --wui-color-bg-150: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-150)\n          );\n          --wui-color-bg-175: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-175)\n          );\n          --wui-color-bg-200: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-200)\n          );\n          --wui-color-bg-225: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-225)\n          );\n          --wui-color-bg-250: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-250)\n          );\n          --wui-color-bg-275: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-275)\n          );\n          --wui-color-bg-300: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-300)\n          );\n          --wui-color-bg-325: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-325)\n          );\n          --wui-color-bg-350: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-350)\n          );\n\n          --wui-color-success-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-success-base-100)\n          );\n          --wui-color-success-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-success-base-125)\n          );\n\n          --wui-color-warning-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-warning-base-100)\n          );\n\n          --wui-color-error-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-error-base-100)\n          );\n          --wui-color-blue-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-blue-base-100)\n          );\n          --wui-color-blue-90: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-blue-base-90)\n          );\n          --wui-color-error-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-error-base-125)\n          );\n\n          --wui-icon-box-bg-error-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-error-base-100)\n          );\n          --wui-icon-box-bg-accent-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-blue-base-100)\n          );\n          --wui-icon-box-bg-success-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-success-base-100)\n          );\n          --wui-icon-box-bg-inverse-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-inverse-base-100)\n          );\n\n          --wui-all-wallets-bg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-all-wallets-bg-100)\n          );\n\n          --wui-avatar-border: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-avatar-border-base)\n          );\n\n          --wui-thumbnail-border: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-thumbnail-border-base)\n          );\n\n          --wui-wallet-button-bg: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-wallet-button-bg-base)\n          );\n        }\n      }\n    ",
          ]);
          return (
            (l = function () {
              return e;
            }),
            e
          );
        }
        function s() {
          let e = (0, o._)([
            "\n      :root {\n        --w3m-color-mix: ",
            ";\n        --w3m-accent: ",
            ";\n        --w3m-default: #fff;\n\n        --wui-color-modal-bg-base: ",
            ";\n        --wui-color-accent-base-100: var(--w3m-accent);\n\n        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);\n        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);\n        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);\n        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);\n\n        --wui-color-fg-100: #e4e7e7;\n        --wui-color-fg-125: #d0d5d5;\n        --wui-color-fg-150: #a8b1b1;\n        --wui-color-fg-175: #a8b0b0;\n        --wui-color-fg-200: #949e9e;\n        --wui-color-fg-225: #868f8f;\n        --wui-color-fg-250: #788080;\n        --wui-color-fg-275: #788181;\n        --wui-color-fg-300: #6e7777;\n        --wui-color-fg-325: #9a9a9a;\n        --wui-color-fg-350: #363636;\n\n        --wui-color-bg-100: #141414;\n        --wui-color-bg-125: #191a1a;\n        --wui-color-bg-150: #1e1f1f;\n        --wui-color-bg-175: #222525;\n        --wui-color-bg-200: #272a2a;\n        --wui-color-bg-225: #2c3030;\n        --wui-color-bg-250: #313535;\n        --wui-color-bg-275: #363b3b;\n        --wui-color-bg-300: #3b4040;\n        --wui-color-bg-325: #252525;\n        --wui-color-bg-350: #ffffff;\n\n        --wui-color-success-base-100: #26d962;\n        --wui-color-success-base-125: #30a46b;\n\n        --wui-color-warning-base-100: #f3a13f;\n\n        --wui-color-error-base-100: #f25a67;\n        --wui-color-error-base-125: #df4a34;\n\n        --wui-color-blue-base-100: rgba(102, 125, 255, 1);\n        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);\n\n        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);\n        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);\n        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);\n        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);\n        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);\n        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);\n        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);\n        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);\n        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);\n        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);\n\n        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);\n\n        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);\n\n        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);\n        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);\n        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);\n        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);\n        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);\n        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);\n        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);\n        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);\n        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);\n        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);\n\n        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);\n\n        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);\n        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);\n        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);\n        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);\n        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);\n        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);\n        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);\n        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);\n        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);\n        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);\n        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);\n\n        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);\n\n        --wui-icon-box-bg-error-base-100: #3c2426;\n        --wui-icon-box-bg-blue-base-100: #20303f;\n        --wui-icon-box-bg-success-base-100: #1f3a28;\n        --wui-icon-box-bg-inverse-base-100: #243240;\n\n        --wui-all-wallets-bg-100: #222b35;\n\n        --wui-avatar-border-base: #252525;\n\n        --wui-thumbnail-border-base: #252525;\n\n        --wui-wallet-button-bg-base: var(--wui-color-bg-125);\n\n        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);\n      }\n    ",
          ]);
          return (
            (s = function () {
              return e;
            }),
            e
          );
        }
        function c() {
          let e = (0, o._)([
            "\n      :root {\n        --w3m-color-mix: ",
            ";\n        --w3m-accent: ",
            ";\n        --w3m-default: #000;\n\n        --wui-color-modal-bg-base: ",
            ";\n        --wui-color-accent-base-100: var(--w3m-accent);\n\n        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);\n        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);\n        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);\n\n        --wui-color-fg-100: #141414;\n        --wui-color-fg-125: #2d3131;\n        --wui-color-fg-150: #474d4d;\n        --wui-color-fg-175: #636d6d;\n        --wui-color-fg-200: #798686;\n        --wui-color-fg-225: #828f8f;\n        --wui-color-fg-250: #8b9797;\n        --wui-color-fg-275: #95a0a0;\n        --wui-color-fg-300: #9ea9a9;\n        --wui-color-fg-325: #9a9a9a;\n        --wui-color-fg-350: #d0d0d0;\n\n        --wui-color-bg-100: #ffffff;\n        --wui-color-bg-125: #f5fafa;\n        --wui-color-bg-150: #f3f8f8;\n        --wui-color-bg-175: #eef4f4;\n        --wui-color-bg-200: #eaf1f1;\n        --wui-color-bg-225: #e5eded;\n        --wui-color-bg-250: #e1e9e9;\n        --wui-color-bg-275: #dce7e7;\n        --wui-color-bg-300: #d8e3e3;\n        --wui-color-bg-325: #f3f3f3;\n        --wui-color-bg-350: #202020;\n\n        --wui-color-success-base-100: #26b562;\n        --wui-color-success-base-125: #30a46b;\n\n        --wui-color-warning-base-100: #f3a13f;\n\n        --wui-color-error-base-100: #f05142;\n        --wui-color-error-base-125: #df4a34;\n\n        --wui-color-blue-base-100: rgba(102, 125, 255, 1);\n        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);\n\n        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);\n        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);\n        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);\n        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);\n        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);\n        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);\n        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);\n        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);\n        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);\n        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);\n\n        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);\n\n        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);\n\n        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);\n        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);\n        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);\n        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);\n        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);\n        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);\n        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);\n        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);\n        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);\n        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);\n\n        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);\n\n        --wui-icon-box-bg-error-base-100: #f4dfdd;\n        --wui-icon-box-bg-blue-base-100: #d9ecfb;\n        --wui-icon-box-bg-success-base-100: #daf0e4;\n        --wui-icon-box-bg-inverse-base-100: #dcecfc;\n\n        --wui-all-wallets-bg-100: #e8f1fa;\n\n        --wui-avatar-border-base: #f3f4f4;\n\n        --wui-thumbnail-border-base: #eaefef;\n\n        --wui-wallet-button-bg-base: var(--wui-color-bg-125);\n\n        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);\n        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);\n        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);\n        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);\n        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);\n        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);\n        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);\n        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);\n        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);\n        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);\n        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);\n\n        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);\n\n        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);\n      }\n    ",
          ]);
          return (
            (c = function () {
              return e;
            }),
            e
          );
        }
        function u() {
          let e = (0, o._)([
            "\n  *,\n  *::after,\n  *::before,\n  :host {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-style: normal;\n    text-rendering: optimizeSpeed;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    font-family: var(--wui-font-family);\n    backface-visibility: hidden;\n  }\n",
          ]);
          return (
            (u = function () {
              return e;
            }),
            e
          );
        }
        function d() {
          let e = (0, o._)([
            "\n  button,\n  a {\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    transition:\n      color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: background-color, color, border, box-shadow, border-radius;\n    outline: none;\n    border: none;\n    column-gap: var(--wui-spacing-3xs);\n    background-color: transparent;\n    text-decoration: none;\n  }\n\n  wui-flex {\n    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: border-radius;\n  }\n\n  button:disabled > wui-wallet-image,\n  button:disabled > wui-all-wallets-image,\n  button:disabled > wui-network-image,\n  button:disabled > wui-image,\n  button:disabled > wui-transaction-visual,\n  button:disabled > wui-logo {\n    filter: grayscale(1);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled {\n      background-color: var(--wui-color-gray-glass-005);\n    }\n\n    button:active:enabled {\n      background-color: var(--wui-color-gray-glass-010);\n    }\n  }\n\n  button:disabled > wui-icon-box {\n    opacity: 0.5;\n  }\n\n  input {\n    border: none;\n    outline: none;\n    appearance: none;\n  }\n",
          ]);
          return (
            (d = function () {
              return e;
            }),
            e
          );
        }
        function p() {
          let e = (0, o._)([
            "\n  .wui-color-inherit {\n    color: var(--wui-color-inherit);\n  }\n\n  .wui-color-accent-100 {\n    color: var(--wui-color-accent-100);\n  }\n\n  .wui-color-error-100 {\n    color: var(--wui-color-error-100);\n  }\n\n  .wui-color-blue-100 {\n    color: var(--wui-color-blue-100);\n  }\n\n  .wui-color-blue-90 {\n    color: var(--wui-color-blue-90);\n  }\n\n  .wui-color-error-125 {\n    color: var(--wui-color-error-125);\n  }\n\n  .wui-color-success-100 {\n    color: var(--wui-color-success-100);\n  }\n\n  .wui-color-success-125 {\n    color: var(--wui-color-success-125);\n  }\n\n  .wui-color-inverse-100 {\n    color: var(--wui-color-inverse-100);\n  }\n\n  .wui-color-inverse-000 {\n    color: var(--wui-color-inverse-000);\n  }\n\n  .wui-color-fg-100 {\n    color: var(--wui-color-fg-100);\n  }\n\n  .wui-color-fg-200 {\n    color: var(--wui-color-fg-200);\n  }\n\n  .wui-color-fg-300 {\n    color: var(--wui-color-fg-300);\n  }\n\n  .wui-color-fg-325 {\n    color: var(--wui-color-fg-325);\n  }\n\n  .wui-color-fg-350 {\n    color: var(--wui-color-fg-350);\n  }\n\n  .wui-bg-color-inherit {\n    background-color: var(--wui-color-inherit);\n  }\n\n  .wui-bg-color-blue-100 {\n    background-color: var(--wui-color-accent-100);\n  }\n\n  .wui-bg-color-error-100 {\n    background-color: var(--wui-color-error-100);\n  }\n\n  .wui-bg-color-error-125 {\n    background-color: var(--wui-color-error-125);\n  }\n\n  .wui-bg-color-success-100 {\n    background-color: var(--wui-color-success-100);\n  }\n\n  .wui-bg-color-success-125 {\n    background-color: var(--wui-color-success-100);\n  }\n\n  .wui-bg-color-inverse-100 {\n    background-color: var(--wui-color-inverse-100);\n  }\n\n  .wui-bg-color-inverse-000 {\n    background-color: var(--wui-color-inverse-000);\n  }\n\n  .wui-bg-color-fg-100 {\n    background-color: var(--wui-color-fg-100);\n  }\n\n  .wui-bg-color-fg-200 {\n    background-color: var(--wui-color-fg-200);\n  }\n\n  .wui-bg-color-fg-300 {\n    background-color: var(--wui-color-fg-300);\n  }\n\n  .wui-color-fg-325 {\n    background-color: var(--wui-color-fg-325);\n  }\n\n  .wui-color-fg-350 {\n    background-color: var(--wui-color-fg-350);\n  }\n",
          ]);
          return (
            (p = function () {
              return e;
            }),
            e
          );
        }
        function C(e, o) {
          (t = document.createElement("style")),
            (n = document.createElement("style")),
            (r = document.createElement("style")),
            (t.textContent = g(e).core.cssText),
            (n.textContent = g(e).dark.cssText),
            (r.textContent = g(e).light.cssText),
            document.head.appendChild(t),
            document.head.appendChild(n),
            document.head.appendChild(r),
            m(o);
        }
        function m(e) {
          n &&
            r &&
            ("light" === e
              ? (n.removeAttribute("media"), (r.media = "enabled"))
              : (r.removeAttribute("media"), (n.media = "enabled")));
        }
        function w(e) {
          t &&
            n &&
            r &&
            ((t.textContent = g(e).core.cssText),
            (n.textContent = g(e).dark.cssText),
            (r.textContent = g(e).light.cssText));
        }
        function g(e) {
          return {
            core: (0, a.css)(
              l(),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-color-mix-strength"])
                  ? "".concat(e["--w3m-color-mix-strength"], "%")
                  : "0%"
              ),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-font-family"]) ||
                  "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;"
              ),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-font-size-master"]) || "10px"
              ),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-border-radius-master"]) || "4px"
              ),
              (0, a.unsafeCSS)((null == e ? void 0 : e["--w3m-z-index"]) || 999)
            ),
            light: (0, a.css)(
              s(),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-color-mix"]) || "#fff"
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "dark")["--w3m-accent"]
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "dark")["--w3m-background"]
              )
            ),
            dark: (0, a.css)(
              c(),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-color-mix"]) || "#000"
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "light")["--w3m-accent"]
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "light")["--w3m-background"]
              )
            ),
          };
        }
        let h = (0, a.css)(u()),
          v = (0, a.css)(d()),
          E = (0, a.css)(p());
        e.s({ UiHelperUtil: () => f }, 111607);
        let f = {
          getSpacingStyles: (e, t) =>
            Array.isArray(e)
              ? e[t]
                ? "var(--wui-spacing-".concat(e[t], ")")
                : void 0
              : "string" == typeof e
              ? "var(--wui-spacing-".concat(e, ")")
              : void 0,
          getFormattedDate: (e) =>
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
            }).format(e),
          getHostName(e) {
            try {
              return new URL(e).hostname;
            } catch (e) {
              return "";
            }
          },
          getTruncateString(e) {
            let { string: t, charsStart: n, charsEnd: r, truncate: o } = e;
            return t.length <= n + r
              ? t
              : "end" === o
              ? "".concat(t.substring(0, n), "...")
              : "start" === o
              ? "...".concat(t.substring(t.length - r))
              : ""
                  .concat(t.substring(0, Math.floor(n)), "...")
                  .concat(t.substring(t.length - Math.floor(r)));
          },
          generateAvatarColors(e) {
            let t = e
                .toLowerCase()
                .replace(/^0x/iu, "")
                .replace(/[^a-f0-9]/gu, "")
                .substring(0, 6)
                .padEnd(6, "0"),
              n = this.hexToRgb(t),
              r = getComputedStyle(document.documentElement).getPropertyValue(
                "--w3m-border-radius-master"
              ),
              o = 100 - 3 * Number(null == r ? void 0 : r.replace("px", "")),
              a = "".concat(o, "% ").concat(o, "% at 65% 40%"),
              i = [];
            for (let e = 0; e < 5; e += 1) {
              let t = this.tintColor(n, 0.15 * e);
              i.push(
                "rgb(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ")")
              );
            }
            return "\n    --local-color-1: "
              .concat(i[0], ";\n    --local-color-2: ")
              .concat(i[1], ";\n    --local-color-3: ")
              .concat(i[2], ";\n    --local-color-4: ")
              .concat(i[3], ";\n    --local-color-5: ")
              .concat(i[4], ";\n    --local-radial-circle: ")
              .concat(a, "\n   ");
          },
          hexToRgb(e) {
            let t = parseInt(e, 16);
            return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
          },
          tintColor(e, t) {
            let [n, r, o] = e;
            return [
              Math.round(n + (255 - n) * t),
              Math.round(r + (255 - r) * t),
              Math.round(o + (255 - o) * t),
            ];
          },
          isNumber: (e) => /^[0-9]+$/u.test(e),
          getColorTheme(e) {
            if (e) return e;
            if (
              "undefined" != typeof window &&
              window.matchMedia &&
              "function" == typeof window.matchMedia
            ) {
              var t;
              return (
                null == (t = window.matchMedia("(prefers-color-scheme: dark)"))
                  ? void 0
                  : t.matches
              )
                ? "dark"
                : "light";
            }
            return "dark";
          },
          splitBalance(e) {
            let t = e.split(".");
            return 2 === t.length ? [t[0], t[1]] : ["0", "00"];
          },
          roundNumber: (e, t, n) =>
            e.toString().length >= t ? Number(e).toFixed(n) : e,
          formatNumberToLocalString(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
            return void 0 === e
              ? "0.00"
              : "number" == typeof e
              ? e.toLocaleString("en-US", {
                  maximumFractionDigits: t,
                  minimumFractionDigits: t,
                })
              : parseFloat(e).toLocaleString("en-US", {
                  maximumFractionDigits: t,
                  minimumFractionDigits: t,
                });
          },
        };
        e.s({ TransactionUtil: () => k }, 703610),
          e.s({ DateUtil: () => T }, 419158);
        var A = e.i(266199),
          b = e.i(529302),
          _ = e.i(838628),
          N = e.i(342026);
        A.default.extend(_.default), A.default.extend(N.default);
        let S = {
            ...b.default,
            name: "en-web3-modal",
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "%d sec",
              m: "1 min",
              mm: "%d min",
              h: "1 hr",
              hh: "%d hrs",
              d: "1 d",
              dd: "%d d",
              M: "1 mo",
              MM: "%d mo",
              y: "1 yr",
              yy: "%d yr",
            },
          },
          I = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
        A.default.locale("en-web3-modal", S);
        let T = {
            getMonthNameByIndex: (e) => I[e],
            getYear() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Date().toISOString();
              return (0, A.default)(e).year();
            },
            getRelativeDateFromNow: (e) =>
              (0, A.default)(e).locale("en-web3-modal").fromNow(!0),
            formatDate(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "DD MMM";
              return (0, A.default)(e).format(t);
            },
          },
          y = ["receive", "deposit", "borrow", "claim"],
          R = ["withdraw", "repay", "burn"],
          k = {
            getTransactionGroupTitle(e, t) {
              let n = T.getYear(),
                r = T.getMonthNameByIndex(t);
              return e === n ? r : "".concat(r, " ").concat(e);
            },
            getTransactionImages(e) {
              let [t, n] = e,
                r = !!t && (null == e ? void 0 : e.every((e) => !!e.nft_info)),
                o = (null == e ? void 0 : e.length) > 1;
              return (null == e ? void 0 : e.length) !== 2 || r
                ? o
                  ? e.map((e) => this.getTransactionImage(e))
                  : [this.getTransactionImage(t)]
                : [this.getTransactionImage(n), this.getTransactionImage(t)];
            },
            getTransactionImage: (e) => ({
              type: k.getTransactionTransferTokenType(e),
              url: k.getTransactionImageURL(e),
            }),
            getTransactionImageURL(e) {
              var t, n, r, o, a;
              let i,
                l = !!(null == e ? void 0 : e.nft_info),
                s = !!(null == e ? void 0 : e.fungible_info);
              return (
                e && l
                  ? (i =
                      null == e ||
                      null == (r = e.nft_info) ||
                      null == (n = r.content) ||
                      null == (t = n.preview)
                        ? void 0
                        : t.url)
                  : e &&
                    s &&
                    (i =
                      null == e ||
                      null == (a = e.fungible_info) ||
                      null == (o = a.icon)
                        ? void 0
                        : o.url),
                i
              );
            },
            getTransactionTransferTokenType: (e) =>
              (null == e ? void 0 : e.fungible_info)
                ? "FUNGIBLE"
                : (null == e ? void 0 : e.nft_info)
                ? "NFT"
                : void 0,
            getTransactionDescriptions(e) {
              var t, n, r;
              let o =
                  null == e || null == (t = e.metadata)
                    ? void 0
                    : t.operationType,
                a = null == e ? void 0 : e.transfers,
                i =
                  (null == e || null == (n = e.transfers) ? void 0 : n.length) >
                  0,
                l =
                  (null == e || null == (r = e.transfers) ? void 0 : r.length) >
                  1,
                s =
                  i &&
                  (null == a
                    ? void 0
                    : a.every((e) => !!(null == e ? void 0 : e.fungible_info))),
                [c, u] = a,
                d = this.getTransferDescription(c),
                p = this.getTransferDescription(u);
              if (!i)
                return ("send" === o || "receive" === o) && s
                  ? [
                      (d = f.getTruncateString({
                        string: null == e ? void 0 : e.metadata.sentFrom,
                        charsStart: 4,
                        charsEnd: 6,
                        truncate: "middle",
                      })),
                      f.getTruncateString({
                        string: null == e ? void 0 : e.metadata.sentTo,
                        charsStart: 4,
                        charsEnd: 6,
                        truncate: "middle",
                      }),
                    ]
                  : [e.metadata.status];
              if (l)
                return a.map((e) => this.getTransferDescription(e)).reverse();
              let C = "";
              return (
                y.includes(o) ? (C = "+") : R.includes(o) && (C = "-"),
                [(d = C.concat(d))]
              );
            },
            getTransferDescription(e) {
              let t = "";
              if (!e) return t;
              if (null == e ? void 0 : e.nft_info) {
                var n;
                t =
                  (null == e || null == (n = e.nft_info) ? void 0 : n.name) ||
                  "-";
              } else
                (null == e ? void 0 : e.fungible_info) &&
                  (t = this.getFungibleTransferDescription(e) || "-");
              return t;
            },
            getFungibleTransferDescription(e) {
              var t;
              return e
                ? [
                    this.getQuantityFixedValue(
                      null == e ? void 0 : e.quantity.numeric
                    ),
                    null == e || null == (t = e.fungible_info)
                      ? void 0
                      : t.symbol,
                  ]
                    .join(" ")
                    .trim()
                : null;
            },
            getQuantityFixedValue: (e) => (e ? parseFloat(e).toFixed(3) : null),
          };
        function O(e) {
          return function (t) {
            return "function" == typeof t
              ? (customElements.get(e) || customElements.define(e, t), t)
              : (function (e, t) {
                  let { kind: n, elements: r } = t;
                  return {
                    kind: n,
                    elements: r,
                    finisher(t) {
                      customElements.get(e) || customElements.define(e, t);
                    },
                  };
                })(e, t);
          };
        }
        e.s({ customElement: () => O }, 665747);
      },
      [361156, 111607, 419158, 703610, 665747],
    ],
  },
]);

//# sourceMappingURL=8156b8bdd568b516.js.map
