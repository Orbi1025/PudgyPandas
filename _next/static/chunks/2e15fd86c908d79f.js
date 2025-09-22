(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    634036: (e) => {
      "use strict";
      e.s(
        {
          baseAccount: () => w,
          coinbaseWallet: () => m,
          injected: () => t.injected,
          metaMask: () => f,
          mock: () => u,
          safe: () => y,
          version: () => E,
          walletConnect: () => b,
        },
        634036
      ),
        e.s({}, 273793),
        e.s(
          {
            baseAccount: () => w,
            coinbaseWallet: () => m,
            injected: () => t.injected,
            metaMask: () => f,
            mock: () => u,
            safe: () => y,
            version: () => E,
            walletConnect: () => b,
          },
          194328
        );
      var t = e.i(207698),
        n = e.i(926777),
        i = e.i(592677),
        r = e.i(77619),
        a = e.i(864198),
        o = e.i(549798),
        s = e.i(831826),
        c = e.i(994290),
        d = e.i(709075),
        l = e.i(991315),
        h = e.i(91819);
      function u(e) {
        var t;
        let w,
          m = new Map(),
          g = null != (t = e.features) ? t : { defaultConnected: !1 },
          v = g.defaultConnected;
        return (0, h.createConnector)((t) => ({
          id: "mock",
          name: "Mock Connector",
          type: u.type,
          async setup() {
            w = t.chains[0].id;
          },
          async connect() {
            let { chainId: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (g.connectError) {
              if ("boolean" == typeof g.connectError)
                throw new i.UserRejectedRequestError(
                  Error("Failed to connect.")
                );
              throw g.connectError;
            }
            let t = await this.getProvider(),
              n = await t.request({ method: "eth_requestAccounts" }),
              r = await this.getChainId();
            return (
              e && r !== e && (r = (await this.switchChain({ chainId: e })).id),
              (v = !0),
              { accounts: n.map((e) => (0, o.getAddress)(e)), chainId: r }
            );
          },
          async disconnect() {
            v = !1;
          },
          async getAccounts() {
            if (!v) throw new l.ConnectorNotConnectedError();
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, o.getAddress)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider(),
              t = await e.request({ method: "eth_chainId" });
            return (0, a.fromHex)(t, "number");
          },
          async isAuthorized() {
            return !!g.reconnect && !!v && !!(await this.getAccounts()).length;
          },
          async switchChain(e) {
            let { chainId: n } = e,
              r = await this.getProvider(),
              a = t.chains.find((e) => e.id === n);
            if (!a)
              throw new i.SwitchChainError(new l.ChainNotConfiguredError());
            return (
              await r.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, c.numberToHex)(n) }],
              }),
              a
            );
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : t.emitter.emit("change", {
                  accounts: e.map((e) => (0, o.getAddress)(e)),
                });
          },
          onChainChanged(e) {
            let n = Number(e);
            t.emitter.emit("change", { chainId: n });
          },
          async onDisconnect(e) {
            t.emitter.emit("disconnect"), (v = !1);
          },
          async getProvider() {
            var o;
            let { chainId: l } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              h = (
                null != (o = t.chains.find((e) => e.id === l)) ? o : t.chains[0]
              ).rpcUrls.default.http[0],
              u = async (t) => {
                let { method: r, params: o } = t;
                if ("eth_chainId" === r) return (0, c.numberToHex)(w);
                if ("eth_requestAccounts" === r) return e.accounts;
                if ("eth_signTypedData_v4" === r && g.signTypedDataError) {
                  if ("boolean" == typeof g.signTypedDataError)
                    throw new i.UserRejectedRequestError(
                      Error("Failed to sign typed data.")
                    );
                  throw g.signTypedDataError;
                }
                if ("wallet_switchEthereumChain" === r) {
                  if (g.switchChainError) {
                    if ("boolean" == typeof g.switchChainError)
                      throw new i.UserRejectedRequestError(
                        Error("Failed to switch chain.")
                      );
                    throw g.switchChainError;
                  }
                  (w = (0, a.fromHex)(o[0].chainId, "number")),
                    this.onChainChanged(w.toString());
                  return;
                }
                if ("wallet_watchAsset" === r) {
                  if (g.watchAssetError) {
                    if ("boolean" == typeof g.watchAssetError)
                      throw new i.UserRejectedRequestError(
                        Error("Failed to switch chain.")
                      );
                    throw g.watchAssetError;
                  }
                  return v;
                }
                if ("wallet_getCapabilities" === r)
                  return {
                    "0x2105": {
                      paymasterService: {
                        supported:
                          "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" === o[0],
                      },
                      sessionKeys: { supported: !0 },
                    },
                    "0x14A34": {
                      paymasterService: {
                        supported:
                          "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" === o[0],
                      },
                    },
                  };
                if ("wallet_sendCalls" === r) {
                  let e = [],
                    t = o[0].calls;
                  for (let i of t) {
                    let { result: t, error: a } = await d.rpc.http(h, {
                      body: { method: "eth_sendTransaction", params: [i] },
                    });
                    if (a)
                      throw new n.RpcRequestError({
                        body: { method: r, params: o },
                        error: a,
                        url: h,
                      });
                    e.push(t);
                  }
                  let i = (0, s.keccak256)(
                    (0, c.stringToHex)(JSON.stringify(t))
                  );
                  return m.set(i, e), { id: i };
                }
                if ("wallet_getCallsStatus" === r) {
                  let e = m.get(o[0]);
                  if (!e)
                    return {
                      atomic: !1,
                      chainId: "0x1",
                      id: o[0],
                      status: 100,
                      receipts: [],
                      version: "2.0.0",
                    };
                  let t = (
                    await Promise.all(
                      e.map(async (e) => {
                        let { result: t, error: i } = await d.rpc.http(h, {
                          body: {
                            method: "eth_getTransactionReceipt",
                            params: [e],
                            id: 0,
                          },
                        });
                        if (i)
                          throw new n.RpcRequestError({
                            body: { method: r, params: o },
                            error: i,
                            url: h,
                          });
                        return t
                          ? {
                              blockHash: t.blockHash,
                              blockNumber: t.blockNumber,
                              gasUsed: t.gasUsed,
                              logs: t.logs,
                              status: t.status,
                              transactionHash: t.transactionHash,
                            }
                          : null;
                      })
                    )
                  ).filter((e) => null !== e);
                  return 0 === t.length
                    ? {
                        atomic: !1,
                        chainId: "0x1",
                        id: o[0],
                        status: 100,
                        receipts: [],
                        version: "2.0.0",
                      }
                    : {
                        atomic: !1,
                        chainId: "0x1",
                        id: o[0],
                        status: 200,
                        receipts: t,
                        version: "2.0.0",
                      };
                }
                if ("wallet_showCallsStatus" === r) return;
                if ("personal_sign" === r) {
                  if (g.signMessageError) {
                    if ("boolean" == typeof g.signMessageError)
                      throw new i.UserRejectedRequestError(
                        Error("Failed to sign message.")
                      );
                    throw g.signMessageError;
                  }
                  (r = "eth_sign"), (o = [o[1], o[0]]);
                }
                let l = { method: r, params: o },
                  { error: u, result: p } = await d.rpc.http(h, { body: l });
                if (u)
                  throw new n.RpcRequestError({ body: l, error: u, url: h });
                return p;
              };
            return (0, r.custom)({ request: u })({ retryCount: 0 });
          },
        }));
      }
      function w() {
        let t,
          n,
          r,
          a,
          s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, h.createConnector)((d) => ({
          id: "baseAccount",
          name: "Base Account",
          rdns: "app.base.account",
          type: "baseAccount",
          async connect() {
            let { chainId: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            try {
              let s = await this.getProvider(),
                c = (
                  await s.request({ method: "eth_requestAccounts", params: [] })
                ).map((e) => (0, o.getAddress)(e));
              n ||
                ((n = this.onAccountsChanged.bind(this)),
                s.on("accountsChanged", n)),
                r ||
                  ((r = this.onChainChanged.bind(this)),
                  s.on("chainChanged", r)),
                a ||
                  ((a = this.onDisconnect.bind(this)), s.on("disconnect", a));
              let d = await this.getChainId();
              if (e && d !== e) {
                var t;
                let n = await this.switchChain({ chainId: e }).catch((e) => {
                  if (e.code === i.UserRejectedRequestError.code) throw e;
                  return { id: d };
                });
                d = null != (t = null == n ? void 0 : n.id) ? t : d;
              }
              return { accounts: c, chainId: d };
            } catch (e) {
              if (
                /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                  e.message
                )
              )
                throw new i.UserRejectedRequestError(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            n && (e.removeListener("accountsChanged", n), (n = void 0)),
              r && (e.removeListener("chainChanged", r), (r = void 0)),
              a && (e.removeListener("disconnect", a), (a = void 0)),
              e.disconnect();
          },
          async getAccounts() {
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, o.getAddress)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            if (!t) {
              var n, i;
              let r =
                  "string" == typeof s.preference
                    ? { options: s.preference }
                    : {
                        ...s.preference,
                        options:
                          null !=
                          (i = null == (n = s.preference) ? void 0 : n.options)
                            ? i
                            : "all",
                      },
                { createBaseAccountSDK: a } = await e.r(502552)(e.i);
              t = a({
                ...s,
                appChainIds: d.chains.map((e) => e.id),
                preference: r,
              }).getProvider();
            }
            return t;
          },
          async isAuthorized() {
            try {
              return !!(await this.getAccounts()).length;
            } catch (e) {
              return !1;
            }
          },
          async switchChain(e) {
            let { addEthereumChainParameter: t, chainId: n } = e,
              r = d.chains.find((e) => e.id === n);
            if (!r)
              throw new i.SwitchChainError(new l.ChainNotConfiguredError());
            let a = await this.getProvider();
            try {
              return (
                await a.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.numberToHex)(r.id) }],
                }),
                r
              );
            } catch (e) {
              if (4902 === e.code)
                try {
                  var o, s, h, u, w, m, g;
                  let e, i;
                  (e = (null == t ? void 0 : t.blockExplorerUrls)
                    ? t.blockExplorerUrls
                    : (null == (o = r.blockExplorers) ? void 0 : o.default.url)
                    ? [null == (s = r.blockExplorers) ? void 0 : s.default.url]
                    : []),
                    (i = (
                      null == t || null == (h = t.rpcUrls) ? void 0 : h.length
                    )
                      ? t.rpcUrls
                      : [
                          null !=
                          (w =
                            null == (u = r.rpcUrls.default)
                              ? void 0
                              : u.http[0])
                            ? w
                            : "",
                        ]);
                  let d = {
                    blockExplorerUrls: e,
                    chainId: (0, c.numberToHex)(n),
                    chainName:
                      null != (m = null == t ? void 0 : t.chainName)
                        ? m
                        : r.name,
                    iconUrls: null == t ? void 0 : t.iconUrls,
                    nativeCurrency:
                      null != (g = null == t ? void 0 : t.nativeCurrency)
                        ? g
                        : r.nativeCurrency,
                    rpcUrls: i,
                  };
                  return (
                    await a.request({
                      method: "wallet_addEthereumChain",
                      params: [d],
                    }),
                    r
                  );
                } catch (e) {
                  throw new i.UserRejectedRequestError(e);
                }
              throw new i.SwitchChainError(e);
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : d.emitter.emit("change", {
                  accounts: e.map((e) => (0, o.getAddress)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            d.emitter.emit("change", { chainId: t });
          },
          async onDisconnect(e) {
            d.emitter.emit("disconnect");
            let t = await this.getProvider();
            n && (t.removeListener("accountsChanged", n), (n = void 0)),
              r && (t.removeListener("chainChanged", r), (r = void 0)),
              a && (t.removeListener("disconnect", a), (a = void 0));
          },
        }));
      }
      function m() {
        var t, n;
        let r,
          a,
          s,
          d,
          u,
          w,
          g,
          v,
          p,
          C =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "3" === C.version || C.headlessMode
          ? ((t = C),
            (0, h.createConnector)((n) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: m.type,
              async connect() {
                let { chainId: e } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                try {
                  let n = await this.getProvider(),
                    r = (
                      await n.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, o.getAddress)(e));
                  s ||
                    ((s = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", s)),
                    d ||
                      ((d = this.onChainChanged.bind(this)),
                      n.on("chainChanged", d)),
                    u ||
                      ((u = this.onDisconnect.bind(this)),
                      n.on("disconnect", u));
                  let a = await this.getChainId();
                  if (e && a !== e) {
                    var t;
                    let n = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === i.UserRejectedRequestError.code) throw e;
                        return { id: a };
                      }
                    );
                    a = null != (t = null == n ? void 0 : n.id) ? t : a;
                  }
                  return { accounts: r, chainId: a };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new i.UserRejectedRequestError(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                s && (e.removeListener("accountsChanged", s), (s = void 0)),
                  d && (e.removeListener("chainChanged", d), (d = void 0)),
                  u && (e.removeListener("disconnect", u), (u = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.getAddress)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!a) {
                  var i;
                  let o =
                      null ==
                      (i = (r = new (await (async () => {
                        let { default: t } = await e.r(548148)(e.i);
                        return "function" != typeof t &&
                          "function" == typeof t.default
                          ? t.default
                          : t;
                      })())({ ...t, reloadOnDisconnect: !1 })).walletExtension)
                        ? void 0
                        : i.getChainId(),
                    s =
                      n.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === o
                      ) || n.chains[0],
                    c = t.chainId || (null == s ? void 0 : s.id),
                    d =
                      t.jsonRpcUrl ||
                      (null == s ? void 0 : s.rpcUrls.default.http[0]);
                  a = r.makeWeb3Provider(d, c);
                }
                return a;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch (e) {
                  return !1;
                }
              },
              async switchChain(e) {
                let { addEthereumChainParameter: t, chainId: r } = e,
                  a = n.chains.find((e) => e.id === r);
                if (!a)
                  throw new i.SwitchChainError(new l.ChainNotConfiguredError());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, c.numberToHex)(a.id) }],
                    }),
                    a
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      var s, d, h, u, w, m, g;
                      let e, n;
                      (e = (null == t ? void 0 : t.blockExplorerUrls)
                        ? t.blockExplorerUrls
                        : (
                            null == (s = a.blockExplorers)
                              ? void 0
                              : s.default.url
                          )
                        ? [
                            null == (d = a.blockExplorers)
                              ? void 0
                              : d.default.url,
                          ]
                        : []),
                        (n = (
                          null == t || null == (h = t.rpcUrls)
                            ? void 0
                            : h.length
                        )
                          ? t.rpcUrls
                          : [
                              null !=
                              (w =
                                null == (u = a.rpcUrls.default)
                                  ? void 0
                                  : u.http[0])
                                ? w
                                : "",
                            ]);
                      let i = {
                        blockExplorerUrls: e,
                        chainId: (0, c.numberToHex)(r),
                        chainName:
                          null != (m = null == t ? void 0 : t.chainName)
                            ? m
                            : a.name,
                        iconUrls: null == t ? void 0 : t.iconUrls,
                        nativeCurrency:
                          null != (g = null == t ? void 0 : t.nativeCurrency)
                            ? g
                            : a.nativeCurrency,
                        rpcUrls: n,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [i],
                        }),
                        a
                      );
                    } catch (e) {
                      throw new i.UserRejectedRequestError(e);
                    }
                  throw new i.SwitchChainError(e);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : n.emitter.emit("change", {
                      accounts: e.map((e) => (0, o.getAddress)(e)),
                    });
              },
              onChainChanged(e) {
                let t = Number(e);
                n.emitter.emit("change", { chainId: t });
              },
              async onDisconnect(e) {
                n.emitter.emit("disconnect");
                let t = await this.getProvider();
                s && (t.removeListener("accountsChanged", s), (s = void 0)),
                  d && (t.removeListener("chainChanged", d), (d = void 0)),
                  u && (t.removeListener("disconnect", u), (u = void 0));
              },
            })))
          : ((n = C),
            (0, h.createConnector)((t) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: m.type,
              async connect() {
                let { chainId: e, ...t } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                try {
                  let r = await this.getProvider(),
                    a = (
                      await r.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in t && t.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, o.getAddress)(e));
                  g ||
                    ((g = this.onAccountsChanged.bind(this)),
                    r.on("accountsChanged", g)),
                    v ||
                      ((v = this.onChainChanged.bind(this)),
                      r.on("chainChanged", v)),
                    p ||
                      ((p = this.onDisconnect.bind(this)),
                      r.on("disconnect", p));
                  let s = await this.getChainId();
                  if (e && s !== e) {
                    var n;
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === i.UserRejectedRequestError.code) throw e;
                        return { id: s };
                      }
                    );
                    s = null != (n = null == t ? void 0 : t.id) ? n : s;
                  }
                  return { accounts: a, chainId: s };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new i.UserRejectedRequestError(e);
                  throw e;
                }
              },
              async disconnect() {
                var e;
                let t = await this.getProvider();
                g && (t.removeListener("accountsChanged", g), (g = void 0)),
                  v && (t.removeListener("chainChanged", v), (v = void 0)),
                  p && (t.removeListener("disconnect", p), (p = void 0)),
                  t.disconnect(),
                  null == (e = t.close) || e.call(t);
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.getAddress)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!w) {
                  var i, r;
                  let a =
                      "string" == typeof n.preference
                        ? { options: n.preference }
                        : {
                            ...n.preference,
                            options:
                              null !=
                              (r =
                                null == (i = n.preference) ? void 0 : i.options)
                                ? r
                                : "all",
                          },
                    { createCoinbaseWalletSDK: o } = await e.r(702808)(e.i);
                  w = o({
                    ...n,
                    appChainIds: t.chains.map((e) => e.id),
                    preference: a,
                  }).getProvider();
                }
                return w;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch (e) {
                  return !1;
                }
              },
              async switchChain(e) {
                let { addEthereumChainParameter: n, chainId: r } = e,
                  a = t.chains.find((e) => e.id === r);
                if (!a)
                  throw new i.SwitchChainError(new l.ChainNotConfiguredError());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, c.numberToHex)(a.id) }],
                    }),
                    a
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      var s, d, h, u, w, m, g;
                      let e, t;
                      (e = (null == n ? void 0 : n.blockExplorerUrls)
                        ? n.blockExplorerUrls
                        : (
                            null == (s = a.blockExplorers)
                              ? void 0
                              : s.default.url
                          )
                        ? [
                            null == (d = a.blockExplorers)
                              ? void 0
                              : d.default.url,
                          ]
                        : []),
                        (t = (
                          null == n || null == (h = n.rpcUrls)
                            ? void 0
                            : h.length
                        )
                          ? n.rpcUrls
                          : [
                              null !=
                              (w =
                                null == (u = a.rpcUrls.default)
                                  ? void 0
                                  : u.http[0])
                                ? w
                                : "",
                            ]);
                      let i = {
                        blockExplorerUrls: e,
                        chainId: (0, c.numberToHex)(r),
                        chainName:
                          null != (m = null == n ? void 0 : n.chainName)
                            ? m
                            : a.name,
                        iconUrls: null == n ? void 0 : n.iconUrls,
                        nativeCurrency:
                          null != (g = null == n ? void 0 : n.nativeCurrency)
                            ? g
                            : a.nativeCurrency,
                        rpcUrls: t,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [i],
                        }),
                        a
                      );
                    } catch (e) {
                      throw new i.UserRejectedRequestError(e);
                    }
                  throw new i.SwitchChainError(e);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : t.emitter.emit("change", {
                      accounts: e.map((e) => (0, o.getAddress)(e)),
                    });
              },
              onChainChanged(e) {
                let n = Number(e);
                t.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(e) {
                t.emitter.emit("disconnect");
                let n = await this.getProvider();
                g && (n.removeListener("accountsChanged", g), (g = void 0)),
                  v && (n.removeListener("chainChanged", v), (v = void 0)),
                  p && (n.removeListener("disconnect", p), (p = void 0));
              },
            })));
      }
      (u.type = "mock"), (m.type = "coinbaseWallet");
      var g = e.i(631138);
      function v(e) {
        var t, n, i;
        let { chain: r } = e,
          a = r.rpcUrls.default.http[0];
        if (!e.transports) return [a];
        let o =
          null == (n = e.transports) || null == (t = n[r.id])
            ? void 0
            : t.call(n, { chain: r });
        return (
          (null == o || null == (i = o.value) ? void 0 : i.transports) || [o]
        ).map((e) => {
          let { value: t } = e;
          return (null == t ? void 0 : t.url) || a;
        });
      }
      var p = e.i(82428),
        C = e.i(656722);
      function f() {
        let t,
          n,
          r,
          s,
          d,
          u,
          w,
          m,
          y =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, h.createConnector)((h) => ({
          id: "metaMaskSDK",
          name: "MetaMask",
          rdns: ["io.metamask", "io.metamask.mobile"],
          type: f.type,
          async setup() {
            let e = await this.getProvider();
            (null == e ? void 0 : e.on) &&
              (u || ((u = this.onConnect.bind(this)), e.on("connect", u)),
              s ||
                ((s = this.onAccountsChanged.bind(this)),
                e.on("accountsChanged", s)));
          },
          async connect() {
            let { chainId: e, isReconnecting: n } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = await this.getProvider();
            w || ((w = this.onDisplayUri), r.on("display_uri", w));
            let a = [];
            n && (a = await this.getAccounts().catch(() => []));
            try {
              let n, l;
              (null == a ? void 0 : a.length) ||
                (y.connectAndSign || y.connectWith
                  ? (y.connectAndSign
                      ? (n = await t.connectAndSign({ msg: y.connectAndSign }))
                      : y.connectWith &&
                        (l = await t.connectWith({
                          method: y.connectWith.method,
                          params: y.connectWith.params,
                        })),
                    (a = await this.getAccounts()))
                  : (a = (await t.connect()).map((e) => (0, o.getAddress)(e))));
              let h = await this.getChainId();
              if (e && h !== e) {
                var c;
                let t = await this.switchChain({ chainId: e }).catch((e) => {
                  if (e.code === i.UserRejectedRequestError.code) throw e;
                  return { id: h };
                });
                h = null != (c = null == t ? void 0 : t.id) ? c : h;
              }
              return (
                w && (r.removeListener("display_uri", w), (w = void 0)),
                n
                  ? r.emit("connectAndSign", {
                      accounts: a,
                      chainId: h,
                      signResponse: n,
                    })
                  : l &&
                    r.emit("connectWith", {
                      accounts: a,
                      chainId: h,
                      connectWithResponse: l,
                    }),
                u && (r.removeListener("connect", u), (u = void 0)),
                s ||
                  ((s = this.onAccountsChanged.bind(this)),
                  r.on("accountsChanged", s)),
                d ||
                  ((d = this.onChainChanged.bind(this)),
                  r.on("chainChanged", d)),
                m ||
                  ((m = this.onDisconnect.bind(this)), r.on("disconnect", m)),
                { accounts: a, chainId: h }
              );
            } catch (e) {
              if (e.code === i.UserRejectedRequestError.code)
                throw new i.UserRejectedRequestError(e);
              if (e.code === i.ResourceUnavailableRpcError.code)
                throw new i.ResourceUnavailableRpcError(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            d && (e.removeListener("chainChanged", d), (d = void 0)),
              m && (e.removeListener("disconnect", m), (m = void 0)),
              u || ((u = this.onConnect.bind(this)), e.on("connect", u)),
              await t.terminate();
          },
          async getAccounts() {
            let e = await this.getProvider();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, o.getAddress)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            return Number(
              e.getChainId() ||
                (await (null == e
                  ? void 0
                  : e.request({ method: "eth_chainId" })))
            );
          },
          async getProvider() {
            async function i() {
              var n, i, r, a, o, s;
              let d = await (async () => {
                  let { default: t } = await e.r(639800)(e.i);
                  return "function" != typeof t &&
                    "function" == typeof t.default
                    ? t.default
                    : t;
                })(),
                l = {};
              for (let e of h.chains)
                l[(0, c.numberToHex)(e.id)] =
                  null == (n = v({ chain: e, transports: h.transports }))
                    ? void 0
                    : n[0];
              t = new d({
                _source: "wagmi",
                forceDeleteProvider: !1,
                forceInjectProvider: !1,
                injectProvider: !1,
                ...y,
                readonlyRPCMap: l,
                dappMetadata: {
                  ...y.dappMetadata,
                  name: (null == (i = y.dappMetadata) ? void 0 : i.name)
                    ? null == (r = y.dappMetadata)
                      ? void 0
                      : r.name
                    : "wagmi",
                  url: (null == (a = y.dappMetadata) ? void 0 : a.url)
                    ? null == (o = y.dappMetadata)
                      ? void 0
                      : o.url
                    : "undefined" != typeof window
                    ? window.location.origin
                    : "https://wagmi.sh",
                },
                useDeeplink: null == (s = y.useDeeplink) || s,
              });
              let u = await t.init(),
                w = (null == u ? void 0 : u.activeProvider)
                  ? u.activeProvider
                  : t.getProvider();
              if (!w) throw new g.ProviderNotFoundError();
              return w;
            }
            return n || (r || (r = i()), (n = await r)), n;
          },
          async isAuthorized() {
            try {
              return !!(
                await (0, p.withRetry)(
                  () =>
                    (0, C.withTimeout)(() => this.getAccounts(), {
                      timeout: 200,
                    }),
                  { delay: 201, retryCount: 3 }
                )
              ).length;
            } catch (e) {
              return !1;
            }
          },
          async switchChain(e) {
            let { addEthereumChainParameter: t, chainId: n } = e,
              r = await this.getProvider(),
              o = h.chains.find((e) => e.id === n);
            if (!o)
              throw new i.SwitchChainError(new l.ChainNotConfiguredError());
            try {
              return (
                await r.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.numberToHex)(n) }],
                }),
                await C(),
                await f(n),
                o
              );
            } catch (e) {
              var s, d, u, w, m, g, v;
              if (e.code === i.UserRejectedRequestError.code)
                throw new i.UserRejectedRequestError(e);
              if (
                4902 === e.code ||
                (null == e ||
                null == (d = e.data) ||
                null == (s = d.originalError)
                  ? void 0
                  : s.code) === 4902
              )
                try {
                  return (
                    await r.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          blockExplorerUrls: (() => {
                            var e;
                            let { default: n, ...i } =
                              null != (e = o.blockExplorers) ? e : {};
                            return (null == t ? void 0 : t.blockExplorerUrls)
                              ? t.blockExplorerUrls
                              : n
                              ? [n.url, ...Object.values(i).map((e) => e.url)]
                              : void 0;
                          })(),
                          chainId: (0, c.numberToHex)(n),
                          chainName:
                            null != (u = null == t ? void 0 : t.chainName)
                              ? u
                              : o.name,
                          iconUrls: null == t ? void 0 : t.iconUrls,
                          nativeCurrency:
                            null != (w = null == t ? void 0 : t.nativeCurrency)
                              ? w
                              : o.nativeCurrency,
                          rpcUrls: (
                            null == t || null == (m = t.rpcUrls)
                              ? void 0
                              : m.length
                          )
                            ? t.rpcUrls
                            : [
                                null !=
                                (v =
                                  null == (g = o.rpcUrls.default)
                                    ? void 0
                                    : g.http[0])
                                  ? v
                                  : "",
                              ],
                        },
                      ],
                    }),
                    await C(),
                    await f(n),
                    o
                  );
                } catch (e) {
                  if (e.code === i.UserRejectedRequestError.code)
                    throw new i.UserRejectedRequestError(e);
                  throw new i.SwitchChainError(e);
                }
              throw new i.SwitchChainError(e);
            }
            async function C() {
              await (0, p.withRetry)(
                async () => {
                  let e = (0, a.hexToNumber)(
                    await r.request({ method: "eth_chainId" })
                  );
                  if (e !== n)
                    throw Error("User rejected switch after adding network.");
                  return e;
                },
                { delay: 50, retryCount: 20 }
              );
            }
            async function f(e) {
              await new Promise((t) => {
                let n = (i) => {
                  "chainId" in i &&
                    i.chainId === e &&
                    (h.emitter.off("change", n), t());
                };
                h.emitter.on("change", n),
                  h.emitter.emit("change", { chainId: e });
              });
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length)
              if (!t.isExtensionActive()) return;
              else this.onDisconnect();
            else if (h.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e });
            } else
              h.emitter.emit("change", {
                accounts: e.map((e) => (0, o.getAddress)(e)),
              });
          },
          onChainChanged(e) {
            let t = Number(e);
            h.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = await this.getAccounts();
            if (0 === t.length) return;
            let n = Number(e.chainId);
            h.emitter.emit("connect", { accounts: t, chainId: n });
            let i = await this.getProvider();
            u && (i.removeListener("connect", u), (u = void 0)),
              s ||
                ((s = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", s)),
              d ||
                ((d = this.onChainChanged.bind(this)), i.on("chainChanged", d)),
              m || ((m = this.onDisconnect.bind(this)), i.on("disconnect", m));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (h.emitter.emit("disconnect"),
              d && (t.removeListener("chainChanged", d), (d = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              u || ((u = this.onConnect.bind(this)), t.on("connect", u)));
          },
          onDisplayUri(e) {
            h.emitter.emit("message", { type: "display_uri", data: e });
          },
        }));
      }
      function y() {
        let t,
          n,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { shimDisconnect: r = !1 } = i;
        return (0, h.createConnector)((a) => ({
          id: "safe",
          name: "Safe",
          type: y.type,
          async connect() {
            var e;
            let t = await this.getProvider();
            if (!t) throw new g.ProviderNotFoundError();
            let i = await this.getAccounts(),
              o = await this.getChainId();
            return (
              n || ((n = this.onDisconnect.bind(this)), t.on("disconnect", n)),
              r &&
                (await (null == (e = a.storage)
                  ? void 0
                  : e.removeItem("safe.disconnected"))),
              { accounts: i, chainId: o }
            );
          },
          async disconnect() {
            var e;
            let t = await this.getProvider();
            if (!t) throw new g.ProviderNotFoundError();
            n && (t.removeListener("disconnect", n), (n = void 0)),
              r &&
                (await (null == (e = a.storage)
                  ? void 0
                  : e.setItem("safe.disconnected", !0)));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new g.ProviderNotFoundError();
            return (await e.request({ method: "eth_accounts" })).map(
              o.getAddress
            );
          },
          async getProvider() {
            var n, r;
            if (
              "undefined" != typeof window &&
              (null == (n = window) ? void 0 : n.parent) !== window
            ) {
              if (!t) {
                let { default: n } = await e.r(954929)(e.i),
                  a = new n(i),
                  o = await (0, C.withTimeout)(() => a.safe.getInfo(), {
                    timeout: null != (r = i.unstable_getInfoTimeout) ? r : 10,
                  });
                if (!o) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let t = await e.r(232650)(e.i);
                  return "function" != typeof t.SafeAppProvider &&
                    "function" == typeof t.default.SafeAppProvider
                    ? t.default.SafeAppProvider
                    : t.SafeAppProvider;
                })())(o, a);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new g.ProviderNotFoundError();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              var e;
              if (
                r &&
                (await (null == (e = a.storage)
                  ? void 0
                  : e.getItem("safe.disconnected")))
              )
                return !1;
              return !!(await this.getAccounts()).length;
            } catch (e) {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            a.emitter.emit("disconnect");
          },
        }));
      }
      function b(t) {
        var n;
        let r,
          a,
          s,
          d,
          u,
          w,
          m,
          p,
          C = null == (n = t.isNewChainsStale) || n;
        return (0, h.createConnector)((n) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: b.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (u || ((u = this.onConnect.bind(this)), e.on("connect", u)),
              m ||
                ((m = this.onSessionDelete.bind(this)),
                e.on("session_delete", m)));
          },
          async connect() {
            let { chainId: e, ...t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            try {
              let i = await this.getProvider();
              if (!i) throw new g.ProviderNotFoundError();
              w || ((w = this.onDisplayUri), i.on("display_uri", w));
              let l = e;
              if (!l) {
                var r, a, c;
                let e =
                  null !=
                  (c = await (null == (r = n.storage)
                    ? void 0
                    : r.getItem("state")))
                    ? c
                    : {};
                l = n.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : null == (a = n.chains[0])
                  ? void 0
                  : a.id;
              }
              if (!l) throw Error("No chains found on connector.");
              let h = await this.isChainsStale();
              if ((i.session && h && (await i.disconnect()), !i.session || h)) {
                let e = n.chains.filter((e) => e.id !== l).map((e) => e.id);
                await i.connect({
                  optionalChains: [l, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(n.chains.map((e) => e.id));
              }
              let v = (await i.enable()).map((e) => (0, o.getAddress)(e)),
                C = await this.getChainId();
              return (
                w && (i.removeListener("display_uri", w), (w = void 0)),
                u && (i.removeListener("connect", u), (u = void 0)),
                s ||
                  ((s = this.onAccountsChanged.bind(this)),
                  i.on("accountsChanged", s)),
                d ||
                  ((d = this.onChainChanged.bind(this)),
                  i.on("chainChanged", d)),
                p ||
                  ((p = this.onDisconnect.bind(this)), i.on("disconnect", p)),
                m ||
                  ((m = this.onSessionDelete.bind(this)),
                  i.on("session_delete", m)),
                { accounts: v, chainId: C }
              );
            } catch (e) {
              if (
                /(user rejected|connection request reset)/i.test(
                  null == e ? void 0 : e.message
                )
              )
                throw new i.UserRejectedRequestError(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await (null == e ? void 0 : e.disconnect());
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              d &&
                (null == e || e.removeListener("chainChanged", d),
                (d = void 0)),
                p &&
                  (null == e || e.removeListener("disconnect", p),
                  (p = void 0)),
                u ||
                  ((u = this.onConnect.bind(this)),
                  null == e || e.on("connect", u)),
                s &&
                  (null == e || e.removeListener("accountsChanged", s),
                  (s = void 0)),
                m &&
                  (null == e || e.removeListener("session_delete", m),
                  (m = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) =>
              (0, o.getAddress)(e)
            );
          },
          async getProvider() {
            var i;
            let { chainId: o } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            async function s() {
              var i;
              let r = n.chains.map((e) => e.id);
              if (!r.length) return;
              let { EthereumProvider: a } = await e.r(857927)(e.i);
              return await a.init({
                ...t,
                disableProviderPing: !0,
                optionalChains: r,
                projectId: t.projectId,
                rpcMap: Object.fromEntries(
                  n.chains.map((e) => {
                    let [t] = v({ chain: e, transports: n.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: null == (i = t.showQrModal) || i,
              });
            }
            return (
              r ||
                (a || (a = s()),
                null == (r = await a) || r.events.setMaxListeners(1 / 0)),
              o &&
                (await (null == (i = this.switchChain)
                  ? void 0
                  : i.call(this, { chainId: o }))),
              r
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch (e) {
              return !1;
            }
          },
          async switchChain(e) {
            let { addEthereumChainParameter: t, chainId: r } = e,
              a = await this.getProvider();
            if (!a) throw new g.ProviderNotFoundError();
            let o = n.chains.find((e) => e.id === r);
            if (!o)
              throw new i.SwitchChainError(new l.ChainNotConfiguredError());
            try {
              await Promise.all([
                new Promise((e) => {
                  let t = (i) => {
                    let { chainId: a } = i;
                    a === r && (n.emitter.off("change", t), e());
                  };
                  n.emitter.on("change", t);
                }),
                a.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.numberToHex)(r) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, r]), o;
            } catch (e) {
              if (/(user rejected)/i.test(e.message))
                throw new i.UserRejectedRequestError(e);
              try {
                var s, d, h, u, w;
                let e, n;
                (e = (null == t ? void 0 : t.blockExplorerUrls)
                  ? t.blockExplorerUrls
                  : (null == (s = o.blockExplorers) ? void 0 : s.default.url)
                  ? [null == (d = o.blockExplorers) ? void 0 : d.default.url]
                  : []),
                  (n = (
                    null == t || null == (h = t.rpcUrls) ? void 0 : h.length
                  )
                    ? t.rpcUrls
                    : [...o.rpcUrls.default.http]);
                let i = {
                  blockExplorerUrls: e,
                  chainId: (0, c.numberToHex)(r),
                  chainName:
                    null != (u = null == t ? void 0 : t.chainName) ? u : o.name,
                  iconUrls: null == t ? void 0 : t.iconUrls,
                  nativeCurrency:
                    null != (w = null == t ? void 0 : t.nativeCurrency)
                      ? w
                      : o.nativeCurrency,
                  rpcUrls: n,
                };
                await a.request({
                  method: "wallet_addEthereumChain",
                  params: [i],
                });
                let l = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...l, r]), o;
              } catch (e) {
                throw new i.UserRejectedRequestError(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : n.emitter.emit("change", {
                  accounts: e.map((e) => (0, o.getAddress)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            n.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              i = await this.getAccounts();
            n.emitter.emit("connect", { accounts: i, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), n.emitter.emit("disconnect");
            let t = await this.getProvider();
            s && (t.removeListener("accountsChanged", s), (s = void 0)),
              d && (t.removeListener("chainChanged", d), (d = void 0)),
              p && (t.removeListener("disconnect", p), (p = void 0)),
              m && (t.removeListener("session_delete", m), (m = void 0)),
              u || ((u = this.onConnect.bind(this)), t.on("connect", u));
          },
          onDisplayUri(e) {
            n.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds() {
            var e, t, n;
            if (!r) return [];
            let i =
              null == (n = r.session) ||
              null == (t = n.namespaces.eip155) ||
              null == (e = t.accounts)
                ? void 0
                : e.map((e) => Number.parseInt(e.split(":")[1] || ""));
            return null != i ? i : [];
          },
          async getRequestedChainsIds() {
            var e, t;
            return null !=
              (t = await (null == (e = n.storage)
                ? void 0
                : e.getItem(this.requestedChainsStorageKey)))
              ? t
              : [];
          },
          async isChainsStale() {
            if (!C) return !1;
            let e = n.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let i = await this.getRequestedChainsIds();
            return !e.every((e) => i.includes(e));
          },
          async setRequestedChainsIds(e) {
            var t;
            await (null == (t = n.storage)
              ? void 0
              : t.setItem(this.requestedChainsStorageKey, e));
          },
          get requestedChainsStorageKey() {
            return "".concat(this.id, ".requestedChains");
          },
        }));
      }
      (f.type = "metaMask"), (y.type = "safe"), (b.type = "walletConnect");
      let E = "5.9.0";
      e.i(273793), e.i(194328);
    },
  },
]);

//# sourceMappingURL=2a92ebc505074b4e.js.map
