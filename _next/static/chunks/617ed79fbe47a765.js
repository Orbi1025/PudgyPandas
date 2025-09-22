(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    151381: [
      (e) => {
        "use strict";
        e.s({ WalletModalContext: () => a, useWalletModal: () => o }, 151381);
        var t,
          n = e.i(756253);
        let r = {
          setVisible(e) {
            console.error(i("call", "setVisible"));
          },
          visible: !1,
        };
        function i(e, t) {
          return (
            "You have tried to " +
            " ".concat(e, ' "').concat(t, '"') +
            " on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext"
          );
        }
        Object.defineProperty(r, "visible", {
          get: () => (console.error(i("read", "visible")), !1),
        });
        let a = (0, n.createContext)(r);
        function o() {
          return (0, n.useContext)(a);
        }
        e.s(
          { PhantomWalletAdapter: () => C, PhantomWalletName: () => D },
          2174
        ),
          e.s(
            {
              BaseMessageSignerWalletAdapter: () => A,
              BaseSignerWalletAdapter: () => j,
            },
            327243
          ),
          e.s(
            {
              BaseWalletAdapter: () => N,
              WalletReadyState: () => t,
              isIosAndRedirectable: () => I,
              scopePollingDetectionStrategy: () => E,
            },
            167028
          ),
          e.i(391323);
        var s = e.i(867968);
        e.s(
          {
            WalletAccountError: () => m,
            WalletConfigError: () => d,
            WalletConnectionError: () => f,
            WalletDisconnectedError: () => h,
            WalletDisconnectionError: () => g,
            WalletError: () => l,
            WalletLoadError: () => u,
            WalletNotConnectedError: () => y,
            WalletNotReadyError: () => c,
            WalletPublicKeyError: () => p,
            WalletSendTransactionError: () => w,
            WalletSignInError: () => b,
            WalletSignMessageError: () => v,
            WalletSignTransactionError: () => M,
          },
          400731
        );
        class l extends Error {
          constructor(e, t) {
            super(e), (this.error = t);
          }
        }
        class c extends l {
          constructor() {
            super(...arguments), (this.name = "WalletNotReadyError");
          }
        }
        class u extends l {
          constructor() {
            super(...arguments), (this.name = "WalletLoadError");
          }
        }
        class d extends l {
          constructor() {
            super(...arguments), (this.name = "WalletConfigError");
          }
        }
        class f extends l {
          constructor() {
            super(...arguments), (this.name = "WalletConnectionError");
          }
        }
        class h extends l {
          constructor() {
            super(...arguments), (this.name = "WalletDisconnectedError");
          }
        }
        class g extends l {
          constructor() {
            super(...arguments), (this.name = "WalletDisconnectionError");
          }
        }
        class m extends l {
          constructor() {
            super(...arguments), (this.name = "WalletAccountError");
          }
        }
        class p extends l {
          constructor() {
            super(...arguments), (this.name = "WalletPublicKeyError");
          }
        }
        class y extends l {
          constructor() {
            super(...arguments), (this.name = "WalletNotConnectedError");
          }
        }
        class w extends l {
          constructor() {
            super(...arguments), (this.name = "WalletSendTransactionError");
          }
        }
        class M extends l {
          constructor() {
            super(...arguments), (this.name = "WalletSignTransactionError");
          }
        }
        class v extends l {
          constructor() {
            super(...arguments), (this.name = "WalletSignMessageError");
          }
        }
        class b extends l {
          constructor() {
            super(...arguments), (this.name = "WalletSignInError");
          }
        }
        !(function (e) {
          (e.Installed = "Installed"),
            (e.NotDetected = "NotDetected"),
            (e.Loadable = "Loadable"),
            (e.Unsupported = "Unsupported");
        })(t || (t = {}));
        class N extends s.default {
          get connected() {
            return !!this.publicKey;
          }
          async autoConnect() {
            await this.connect();
          }
          async prepareTransaction(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = this.publicKey;
            if (!r) throw new y();
            return (
              (e.feePayer = e.feePayer || r),
              (e.recentBlockhash =
                e.recentBlockhash ||
                (
                  await t.getLatestBlockhash({
                    commitment: n.preflightCommitment,
                    minContextSlot: n.minContextSlot,
                  })
                ).blockhash),
              e
            );
          }
        }
        function E(e) {
          if ("undefined" == typeof window || "undefined" == typeof document)
            return;
          let t = [];
          function n() {
            if (e()) for (let e of t) e();
          }
          let r = setInterval(n, 1e3);
          t.push(() => clearInterval(r)),
            "loading" === document.readyState &&
              (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
              t.push(() =>
                document.removeEventListener("DOMContentLoaded", n)
              )),
            "complete" !== document.readyState &&
              (window.addEventListener("load", n, { once: !0 }),
              t.push(() => window.removeEventListener("load", n))),
            n();
        }
        function I() {
          if (!navigator) return !1;
          let e = navigator.userAgent.toLowerCase(),
            t = e.includes("iphone") || e.includes("ipad"),
            n = e.includes("safari");
          return t && n;
        }
        function S(e) {
          return "version" in e;
        }
        e.s({ isVersionedTransaction: () => S }, 183909);
        class j extends N {
          async sendTransaction(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = !0;
            try {
              if (S(e)) {
                if (!this.supportedTransactionVersions)
                  throw new w(
                    "Sending versioned transactions isn't supported by this wallet"
                  );
                if (!this.supportedTransactionVersions.has(e.version))
                  throw new w(
                    "Sending transaction version ".concat(
                      e.version,
                      " isn't supported by this wallet"
                    )
                  );
                try {
                  let r = (e = await this.signTransaction(e)).serialize();
                  return await t.sendRawTransaction(r, n);
                } catch (e) {
                  if (e instanceof M) throw ((r = !1), e);
                  throw new w(null == e ? void 0 : e.message, e);
                }
              }
              try {
                let { signers: r, ...i } = n;
                (e = await this.prepareTransaction(e, t, i)),
                  (null == r ? void 0 : r.length) && e.partialSign(...r);
                let a = (e = await this.signTransaction(e)).serialize();
                return await t.sendRawTransaction(a, i);
              } catch (e) {
                if (e instanceof M) throw ((r = !1), e);
                throw new w(null == e ? void 0 : e.message, e);
              }
            } catch (e) {
              throw (r && this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            for (let t of e)
              if (S(t)) {
                if (!this.supportedTransactionVersions)
                  throw new M(
                    "Signing versioned transactions isn't supported by this wallet"
                  );
                if (!this.supportedTransactionVersions.has(t.version))
                  throw new M(
                    "Signing transaction version ".concat(
                      t.version,
                      " isn't supported by this wallet"
                    )
                  );
              }
            let t = [];
            for (let n of e) t.push(await this.signTransaction(n));
            return t;
          }
        }
        class A extends j {}
        var T = e.i(184405);
        let D = "Phantom";
        class C extends A {
          get publicKey() {
            return this._publicKey;
          }
          get connecting() {
            return this._connecting;
          }
          get readyState() {
            return this._readyState;
          }
          async autoConnect() {
            this.readyState === t.Installed && (await this.connect());
          }
          async connect() {
            try {
              var e;
              let n;
              if (this.connected || this.connecting) return;
              if (this.readyState === t.Loadable) {
                let e = encodeURIComponent(window.location.href),
                  t = encodeURIComponent(window.location.origin);
                window.location.href = "https://phantom.app/ul/browse/"
                  .concat(e, "?ref=")
                  .concat(t);
                return;
              }
              if (this.readyState !== t.Installed) throw new c();
              this._connecting = !0;
              let r =
                (null == (e = window.phantom) ? void 0 : e.solana) ||
                window.solana;
              if (!r.isConnected)
                try {
                  await r.connect();
                } catch (e) {
                  throw new f(null == e ? void 0 : e.message, e);
                }
              if (!r.publicKey) throw new m();
              try {
                n = new T.PublicKey(r.publicKey.toBytes());
              } catch (e) {
                throw new p(null == e ? void 0 : e.message, e);
              }
              r.on("disconnect", this._disconnected),
                r.on("accountChanged", this._accountChanged),
                (this._wallet = r),
                (this._publicKey = n),
                this.emit("connect", n);
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              this._connecting = !1;
            }
          }
          async disconnect() {
            let e = this._wallet;
            if (e) {
              e.off("disconnect", this._disconnected),
                e.off("accountChanged", this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null);
              try {
                await e.disconnect();
              } catch (e) {
                this.emit("error", new g(null == e ? void 0 : e.message, e));
              }
            }
            this.emit("disconnect");
          }
          async sendTransaction(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            try {
              let r = this._wallet;
              if (!r) throw new y();
              try {
                let { signers: i, ...a } = n;
                S(e)
                  ? (null == i ? void 0 : i.length) && e.sign(i)
                  : ((e = await this.prepareTransaction(e, t, a)),
                    (null == i ? void 0 : i.length) && e.partialSign(...i)),
                  (a.preflightCommitment =
                    a.preflightCommitment || t.commitment);
                let { signature: o } = await r.signAndSendTransaction(e, a);
                return o;
              } catch (e) {
                if (e instanceof l) throw e;
                throw new w(null == e ? void 0 : e.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signTransaction(e) {
            try {
              let t = this._wallet;
              if (!t) throw new y();
              try {
                return (await t.signTransaction(e)) || e;
              } catch (e) {
                throw new M(null == e ? void 0 : e.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            try {
              let t = this._wallet;
              if (!t) throw new y();
              try {
                return (await t.signAllTransactions(e)) || e;
              } catch (e) {
                throw new M(null == e ? void 0 : e.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signMessage(e) {
            try {
              let t = this._wallet;
              if (!t) throw new y();
              try {
                let { signature: n } = await t.signMessage(e);
                return n;
              } catch (e) {
                throw new v(null == e ? void 0 : e.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          constructor(e = {}) {
            super(),
              (this.name = D),
              (this.url = "https://phantom.app"),
              (this.icon =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg=="),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              (this._readyState =
                "undefined" == typeof window || "undefined" == typeof document
                  ? t.Unsupported
                  : t.NotDetected),
              (this._disconnected = () => {
                let e = this._wallet;
                e &&
                  (e.off("disconnect", this._disconnected),
                  e.off("accountChanged", this._accountChanged),
                  (this._wallet = null),
                  (this._publicKey = null),
                  this.emit("error", new h()),
                  this.emit("disconnect"));
              }),
              (this._accountChanged = (e) => {
                let t = this._publicKey;
                if (t) {
                  try {
                    e = new T.PublicKey(e.toBytes());
                  } catch (e) {
                    this.emit(
                      "error",
                      new p(null == e ? void 0 : e.message, e)
                    );
                    return;
                  }
                  t.equals(e) ||
                    ((this._publicKey = e), this.emit("connect", e));
                }
              }),
              (this._connecting = !1),
              (this._wallet = null),
              (this._publicKey = null),
              this._readyState !== t.Unsupported &&
                (I()
                  ? ((this._readyState = t.Loadable),
                    this.emit("readyStateChange", this._readyState))
                  : E(() => {
                      var e, n, r;
                      return (
                        ((null != (n = window.phantom) &&
                          null != (e = n.solana) &&
                          !!e.isPhantom) ||
                          (null != (r = window.solana) && !!r.isPhantom)) &&
                        ((this._readyState = t.Installed),
                        this.emit("readyStateChange", this._readyState),
                        !0)
                      );
                    }));
          }
        }
      },
      [400731, 167028, 183909, 327243, 2174],
    ],
    718358: (e) => {
      "use strict";
      e.s({ default: () => E }, 718358);
      var t = e.i(150840),
        n = e.i(113029),
        r = e.i(79401),
        i = e.i(905170);
      e.i(505758);
      var a = e.i(804055),
        o = e.i(151381),
        s = e.i(107906),
        l = e.i(289267),
        c = e.i(2174),
        u = e.i(756253);
      let d = (e) => {
        let { title: n, renderContent: r, onOpenChange: d, ...f } = e,
          h = (0, a.useAppKit)(),
          { setVisible: g } = (0, o.useWalletModal)(),
          m = async () => {
            g(!0), null == d || d(!1);
          },
          { connectPhantomMobile: p } = (() => {
            let {
                select: e,
                connect: t,
                connected: n,
                wallets: r,
              } = (0, l.useWallet)(),
              i = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent),
              a = async () => {
                if (i)
                  try {
                    n
                      ? console.log("Phantom already connected or not found.")
                      : (console.log("Reconnecting Phantom after return..."),
                        e(c.PhantomWalletName),
                        await new Promise((e) => setTimeout(e, 600)),
                        await t());
                  } catch (e) {
                    console.error("Phantom return connection failed:", e);
                  }
              };
            return (
              (0, u.useEffect)(() => {
                if (!i) return;
                let e = new URLSearchParams(window.location.search);
                if (
                  e.get("phantom_redirect") ||
                  localStorage.getItem("phantom_connection_pending")
                ) {
                  if (
                    (console.log(
                      "Detected Phantom return via localStorage flag"
                    ),
                    localStorage.removeItem("phantom_connection_pending"),
                    e.get("phantom_redirect"))
                  ) {
                    let e = window.location.href.split("?")[0];
                    window.history.replaceState({}, "", e);
                  }
                  a();
                }
              }, [e, t, n, r]),
              {
                connectPhantomMobile: async (e) => {
                  let { onConnect: t } = e;
                  if (
                    (() => {
                      var e, t;
                      let n =
                          null == (t = window) || null == (e = t.phantom)
                            ? void 0
                            : e.solana,
                        r = /Mobile|Android|iPhone/.test(navigator.userAgent);
                      return n && r;
                    })()
                  ) {
                    console.log(
                      "Detected Phantom in-app browser, attempting to connect..."
                    ),
                      await a(),
                      t && t();
                    return;
                  }
                  try {
                    localStorage.setItem("phantom_connection_pending", "true");
                    let e = new URL(window.location.href);
                    e.searchParams.set("phantom_redirect", "true");
                    let t = e.toString(),
                      n = "https://phantom.app/ul/browse/"
                        .concat(encodeURIComponent(t), "?ref=")
                        .concat(encodeURIComponent(t));
                    window.open(n, "_blank");
                  } catch (e) {
                    console.error("Phantom mobile connect failed:", e),
                      localStorage.removeItem("phantom_connection_pending");
                  }
                },
              }
            );
          })(),
          y = async () => {
            try {
              await p({
                onConnect: () => {
                  null == d || d(!1);
                },
              });
            } catch (e) {
              console.error("Solana connect failed:", e);
            }
          };
        return (0, t.jsxs)(i.Dialog, {
          onOpenChange: d,
          ...f,
          children: [
            (0, t.jsx)(i.DialogOverlay, {
              className:
                "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in-0",
            }),
            (0, t.jsx)(i.DialogTitle, { className: "sr-only", children: n }),
            (0, t.jsx)(i.DialogContent, {
              className:
                "fixed left-1/2 top-1/2 z-50 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]",
              children: (0, t.jsxs)("div", {
                className: "relative",
                children: [
                  (0, t.jsxs)(i.DialogClose, {
                    className:
                      "absolute right-0 top-0 p-2 hover:text-primary cursor-pointer",
                    children: [
                      (0, t.jsx)(s.FaTimes, { size: 20 }),
                      (0, t.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
                  r({
                    handleClickConnectEVM: () => {
                      h.open(), null == d || d(!1);
                    },
                    handleClickConnectSolanaDesktop: m,
                    handleClickConnectSolanaMobile: y,
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var f = e.i(428880);
      let h = (e) => {
        let {
          network: n,
          onClick: i,
          className: a,
          networkClassName: o,
          tokenClassName: s,
        } = e;
        return (0, t.jsx)("button", {
          className: (0, r.cn)(
            "bg-black text-white px-4 py-2 hover:text-primary cursor-pointer text-left",
            a
          ),
          type: "button",
          onClick: i,
          children: (0, t.jsxs)("div", {
            className: "flex items-center justify-between gap-1",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: (0, r.cn)("font-bold text-xl", o),
                    children: "evm" === n ? "EVM" : "SOL",
                  }),
                  (0, t.jsx)("div", {
                    className: (0, r.cn)("text-sm text-grey-light", s),
                    children: "evm" === n ? "ETH / BSC" : "Solana",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                children:
                  "evm" === n
                    ? (0, t.jsxs)("svg", {
                        width: "37",
                        height: "23",
                        viewBox: "0 0 37 23",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, t.jsx)("path", {
                            d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23Z",
                            fill: "#627EEA",
                          }),
                          (0, t.jsx)("path", {
                            d: "M11.8574 2.87537V9.25068L17.2459 11.6585L11.8574 2.87537Z",
                            fill: "white",
                            fillOpacity: "0.602",
                          }),
                          (0, t.jsx)("path", {
                            d: "M11.8579 2.87518L6.46875 11.6583L11.8579 9.2505V2.87518Z",
                            fill: "white",
                          }),
                          (0, t.jsx)("path", {
                            d: "M11.8574 15.79V20.122L17.2495 12.662L11.8574 15.79Z",
                            fill: "white",
                            fillOpacity: "0.602",
                          }),
                          (0, t.jsx)("path", {
                            d: "M11.8579 20.122V15.7893L6.46875 12.662L11.8579 20.122Z",
                            fill: "white",
                          }),
                          (0, t.jsx)("path", {
                            d: "M11.8574 14.7872L17.2459 11.6585L11.8574 9.25211V14.7872Z",
                            fill: "white",
                            fillOpacity: "0.2",
                          }),
                          (0, t.jsx)("path", {
                            d: "M6.46875 11.6585L11.8579 14.7872V9.25211L6.46875 11.6585Z",
                            fill: "white",
                            fillOpacity: "0.602",
                          }),
                          (0, t.jsx)("circle", {
                            cx: "24.916",
                            cy: "11.5",
                            r: "11.5",
                            fill: "#F3BA2F",
                          }),
                          (0, t.jsx)("path", {
                            d: "M22.1244 10.3526L24.916 7.56101L27.7091 10.3541L29.3335 8.72969L24.916 4.31226L20.5 8.72826L22.1244 10.3526ZM17.7285 11.4998L19.3529 9.87538L20.9773 11.4998L19.3529 13.1241L17.7285 11.4998ZM22.1244 12.6469L24.916 15.4385L27.7091 12.6454L29.3335 14.2691L24.916 18.6873L20.5 14.2713L20.4979 14.2691L22.1244 12.6469ZM28.8548 11.4998L30.4791 9.87538L32.1035 11.4998L30.4791 13.1241L28.8548 11.4998ZM26.5634 11.4983H26.5648V11.4998L24.916 13.1486L23.2694 11.5026L23.2665 11.4998L23.2694 11.4976L23.5576 11.2087L23.6977 11.0685L24.916 9.85094L26.5641 11.499L26.5634 11.4983Z",
                            fill: "white",
                          }),
                        ],
                      })
                    : (0, t.jsx)(f.default, {
                        src: "/wallet/solana.svg",
                        alt: "Solana",
                        width: 23,
                        height: 23,
                      }),
              }),
            ],
          }),
        });
      };
      var g = e.i(972651),
        m = e.i(164897),
        p = e.i(530890),
        y = e.i(34790);
      let w = (e) => {
        let { title: n, renderContent: r, onOpenChange: a, ...o } = e,
          {
            paymentMethods: l,
            groupedPaymentMethods: c,
            selectedPaymentMethod: u,
            setSelectedPaymentMethod: d,
          } = (0, y.useWalletProvider)();
        return (0, t.jsxs)(i.Dialog, {
          onOpenChange: a,
          ...o,
          children: [
            (0, t.jsx)(i.DialogOverlay, {
              className:
                "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in-0",
            }),
            (0, t.jsx)(i.DialogTitle, { className: "sr-only", children: n }),
            (0, t.jsxs)(i.DialogContent, {
              className:
                "fixed left-1/2 top-1/2 z-50 w-full max-w-[484px] -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]",
              children: [
                (0, t.jsx)("div", {
                  className: "relative",
                  children: (0, t.jsxs)(i.DialogClose, {
                    className:
                      "absolute right-0 top-0 p-2 text-white hover:text-primary cursor-pointer",
                    children: [
                      (0, t.jsx)(s.FaTimes, { size: 20 }),
                      (0, t.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
                }),
                r({
                  paymentMethods: l,
                  groupedPaymentMethods: c,
                  selectedPaymentMethod: u,
                  handleSwitchPaymentMethod: (e) => {
                    if (
                      (null == u ? void 0 : u.name) === e.name &&
                      (null == u ? void 0 : u.network) === e.network
                    ) {
                      null == a || a(!1);
                      return;
                    }
                    d(e), null == a || a(!1);
                  },
                }),
              ],
            }),
          ],
        });
      };
      var M = e.i(513546);
      let v = {
          ETH: "Ethereum",
          USDT: "USD Tether",
          BNB: "Binance Coin",
          SOL: "Solana",
          USDC: "USD Coin",
        },
        b = (e) => {
          let {
            isActive: n = !1,
            label: i,
            caip2id: a,
            customIcon: o,
            ...s
          } = e;
          return (0, t.jsxs)("button", {
            type: "button",
            className: (0, r.cn)(
              "cursor-pointer font-bold font-yuanmo rounded border-[3px] border-white p-2 flex items-center justify-center gap-1 text-sm",
              {
                "bg-white": n,
                "bg-black text-white hover:bg-white hover:text-black": !n,
              }
            ),
            ...s,
            children: [
              o &&
                (0, t.jsx)("span", {
                  className: "hidden min-[420px]:flex items-center",
                  children: o,
                }),
              a &&
                (0, t.jsx)("span", {
                  className: "hidden min-[420px]:block",
                  children: (0, t.jsx)(M.NetworkIcon, {
                    caip2id: a,
                    variant: n ? "mono" : "branded",
                  }),
                }),
              i,
            ],
          });
        },
        N = () => {
          let e = (0, g.useTranslations)("wallet"),
            {
              paymentMethods: i,
              groupedPaymentMethods: a,
              selectedPaymentMethod: o,
              setSelectedPaymentMethod: s,
            } = (0, y.useWalletProvider)(),
            [l, c] = (0, u.useState)("ethereum"),
            [d, f] = (0, u.useState)(!1),
            h = () => f(!0),
            N = () => f(!1);
          (0, u.useEffect)(
            () => (
              n.eventBus.on("payment-method-dialog:show", h),
              n.eventBus.on("payment-method-dialog:hide", N),
              () => {
                n.eventBus.off("payment-method-dialog:show", h),
                  n.eventBus.off("payment-method-dialog:hide", N);
              }
            ),
            []
          );
          let E = [
              {
                key: p.NETWORKS.ethereum.key,
                label: p.NETWORKS.ethereum.label,
                caip2id: p.NETWORKS.ethereum.caip2id,
                title: p.NETWORKS.ethereum.title,
              },
              {
                key: p.NETWORKS.bsc.key,
                label: p.NETWORKS.bsc.label,
                caip2id: p.NETWORKS.bsc.caip2id,
                title: p.NETWORKS.bsc.title,
              },
              {
                key: p.NETWORKS.solana.key,
                label: p.NETWORKS.solana.label,
                caip2id: p.NETWORKS.solana.caip2id,
                title: p.NETWORKS.solana.title,
              },
            ],
            I = E.find((e) => e.key === l),
            S = a[I.key] || [];
          p.NETWORKS[m.websiteConfig.token.network],
            i.find((e) => "solana" === e.network && "SOL" === e.name);
          let [j, A] = (0, u.useState)(!1),
            T = i.find(
              (e) =>
                e.name === (null == o ? void 0 : o.name) &&
                e.network === (null == o ? void 0 : o.network)
            ),
            D = S.reduce((e, t) => ((e[t.name] = (e[t.name] || 0) + 1), e), {}),
            C = S.map((e) => ({ ...e, showNetwork: D[e.name] > 1 }));
          return (0, t.jsx)(w, {
            title: "Select Payment Method",
            open: d,
            onOpenChange: f,
            renderContent: () =>
              (0, t.jsxs)("div", {
                className: "bg-black text-center rounded border-[3px]",
                children: [
                  (0, t.jsxs)("div", {
                    className: "p-4",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "font-yuanmo text-white font-bold text-lg uppercase mb-3",
                        children: e("paymentMethodDialogTitle"),
                      }),
                      (0, t.jsx)("div", {
                        className: "grid gap-4 grid-cols-3",
                        children: E.map((e) =>
                          (0, t.jsx)(
                            b,
                            {
                              isActive: l === e.key,
                              label: e.label,
                              caip2id: e.caip2id,
                              onClick: () => c(e.key),
                            },
                            e.key
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "bg-white pt-3 rounded-b",
                    children: [
                      (0, t.jsx)("div", {
                        className: "font-bold text-lg mb-2",
                        children:
                          (null == I ? void 0 : I.title) || e("comingSoon"),
                      }),
                      (0, t.jsx)("div", {
                        className: "pb-",
                        children: C.map((e, i) => {
                          let a =
                            (null == o ? void 0 : o.name) === e.name &&
                            (null == T ? void 0 : T.network) === e.network;
                          return (0, t.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: (0, r.cn)(
                                "cursor-pointer flex items-center gap-4 text-base w-full p-2",
                                {
                                  "bg-blue border-y-2": a,
                                  "hover:bg-blue": !a,
                                  "rounded-b": i === C.length - 1,
                                }
                              ),
                              onClick: () =>
                                ((e) => {
                                  if (
                                    (null == o ? void 0 : o.name) === e.name &&
                                    (null == o ? void 0 : o.network) ===
                                      e.network
                                  )
                                    return void n.eventBus.emit(
                                      "payment-method-dialog:hide"
                                    );
                                  s(e),
                                    n.eventBus.emit(
                                      "payment-method-dialog:hide"
                                    );
                                })(e),
                              children: [
                                (0, t.jsx)("div", {
                                  className: "relative ",
                                  children: (0, t.jsx)(M.TokenIcon, {
                                    symbol: e.name,
                                    variant: "background",
                                    size: 36,
                                    className: "rounded-full",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex gap-2 items-baseline",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "font-bold text-lg",
                                      children: e.name,
                                    }),
                                    (0, t.jsxs)("span", {
                                      className: (0, r.cn)("text-grey-medium", {
                                        "text-black": a,
                                      }),
                                      children: [
                                        v[e.name],
                                        (null == e ? void 0 : e.showNetwork) &&
                                          (0, t.jsxs)("span", {
                                            className: "uppercase",
                                            children: [" [", e.network, "]"],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            i
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          });
        },
        E = () => {
          let e = (0, g.useTranslations)("wallet"),
            [i, a] = (0, u.useState)(!1),
            o = () => a(!0),
            s = () => a(!1);
          (0, u.useEffect)(
            () => (
              n.eventBus.on("wallet-connect-dialog:show", o),
              n.eventBus.on("wallet-connect-dialog:hide", s),
              () => {
                n.eventBus.off("wallet-connect-dialog:show", o),
                  n.eventBus.off("wallet-connect-dialog:hide", s);
              }
            ),
            []
          );
          let l = (0, r.cn)(
            "border-[3px] border-black bg-blue rounded text-black",
            "hover:text-black hover:bg-blue/60"
          );
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(d, {
                open: i,
                onOpenChange: a,
                title: e("connectDialogTitle"),
                renderContent: (n) => {
                  let {
                    handleClickConnectEVM: i,
                    handleClickConnectSolanaDesktop: a,
                    handleClickConnectSolanaMobile: o,
                  } = n;
                  return (0, t.jsxs)("div", {
                    className:
                      "bg-white text-center rounded border-[3px] border-black",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "bg-black text-white font-yuanmo py-1 lg:py-2 font-black text-xl uppercase",
                        children: e("connectDialogTitle"),
                      }),
                      (0, t.jsxs)("div", {
                        className: "grid xs:grid-cols-2 gap-4 p-4",
                        children: [
                          (0, t.jsx)(h, {
                            network: "evm",
                            onClick: i,
                            className: l,
                            networkClassName: "font-yuanmo",
                            tokenClassName: "font-bold",
                          }),
                          (0, t.jsx)(h, {
                            network: "solana",
                            onClick: a,
                            className: (0, r.cn)(l, "hidden lg:block"),
                            networkClassName: "font-yuanmo",
                            tokenClassName: "font-bold",
                          }),
                          (0, t.jsx)(h, {
                            network: "solana",
                            onClick: o,
                            className: (0, r.cn)(l, "lg:hidden"),
                            networkClassName: "font-yuanmo",
                            tokenClassName: "font-bold",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              }),
              (0, t.jsx)(N, {}),
            ],
          });
        };
    },
    819982: (e) => {
      "use strict";
      function t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      e.s(
        { getCookie: () => i, hasCookie: () => a, setCookie: () => r },
        819982
      );
      var n = (function e(n, r) {
        function i(e, i, a) {
          if ("undefined" != typeof document) {
            "number" == typeof (a = t({}, r, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var o = "";
            for (var s in a)
              a[s] &&
                ((o += "; " + s),
                !0 !== a[s] && (o += "=" + a[s].split(";")[0]));
            return (document.cookie = e + "=" + n.write(i, e) + o);
          }
        }
        return Object.create(
          {
            set: i,
            get: function (e) {
              if ("undefined" != typeof document && (!arguments.length || e)) {
                for (
                  var t = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  var a = t[i].split("="),
                    o = a.slice(1).join("=");
                  try {
                    var s = decodeURIComponent(a[0]);
                    if (((r[s] = n.read(o, s)), e === s)) break;
                  } catch (e) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, n) {
              i(e, "", t({}, n, { expires: -1 }));
            },
            withAttributes: function (n) {
              return e(this.converter, t({}, this.attributes, n));
            },
            withConverter: function (n) {
              return e(t({}, this.converter, n), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(n) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
      let r = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7;
          n.set(e, t, { expires: r, path: "/" });
        },
        i = (e) => n.get(e),
        a = (e) => void 0 !== n.get(e);
    },
    855426: (e) => {
      "use strict";
      e.s({ default: () => g }, 855426);
      var t = e.i(150840),
        n = e.i(998319),
        r = e.i(28961),
        i = e.i(905170),
        a = e.i(819982),
        o = e.i(699677),
        s = e.i(756253),
        l = e.i(107906),
        c = e.i(671678),
        u = e.i(577788);
      let d = new Map();
      async function f(t, n) {
        let r = "".concat(t, "/").concat(n),
          i = d.get(r);
        if (i) return i;
        let a = await e
          .f({
            "../../messages/de.json": {
              id: () => 719232,
              module: () => e.r(719232)(e.i),
            },
            "../../messages/en.json": {
              id: () => 841480,
              module: () => e.r(841480)(e.i),
            },
            "../../messages/es.json": {
              id: () => 744475,
              module: () => e.r(744475)(e.i),
            },
            "../../messages/fr.json": {
              id: () => 603176,
              module: () => e.r(603176)(e.i),
            },
            "../../messages/it.json": {
              id: () => 620189,
              module: () => e.r(620189)(e.i),
            },
            "../../messages/ja.json": {
              id: () => 942914,
              module: () => e.r(942914)(e.i),
            },
            "../../messages/ko.json": {
              id: () => 19324,
              module: () => e.r(19324)(e.i),
            },
            "../../messages/nl.json": {
              id: () => 489866,
              module: () => e.r(489866)(e.i),
            },
            "../../messages/pl.json": {
              id: () => 119503,
              module: () => e.r(119503)(e.i),
            },
            "../../messages/pt.json": {
              id: () => 133776,
              module: () => e.r(133776)(e.i),
            },
            "../../messages/ro.json": {
              id: () => 599556,
              module: () => e.r(599556)(e.i),
            },
            "../../messages/sk.json": {
              id: () => 287201,
              module: () => e.r(287201)(e.i),
            },
            "../../messages/th.json": {
              id: () => 870971,
              module: () => e.r(870971)(e.i),
            },
            "../../messages/tr.json": {
              id: () => 419440,
              module: () => e.r(419440)(e.i),
            },
            "../../messages/vn.json": {
              id: () => 472694,
              module: () => e.r(472694)(e.i),
            },
            "../../messages/zh.json": {
              id: () => 479050,
              module: () => e.r(479050)(e.i),
            },
          })
          .import("../../messages/".concat(t, ".json"));
        return d.set(r, a.default), a.default;
      }
      let h = (e) => {
          let { detectedLanguage: n, ...a } = e,
            o = ((e, t) => {
              let [n, r] = (0, s.useState)(null);
              return (
                (0, s.useEffect)(() => {
                  let n = !0;
                  return (
                    f(e, t).then((e) => {
                      n && r(e);
                    }),
                    () => {
                      n = !1;
                    }
                  );
                }, [e, t]),
                (0, s.useMemo)(
                  () =>
                    n
                      ? (function (e) {
                          let {
                            _cache: t = (0, u.d)(),
                            _formatters: n = (0, u.b)(t),
                            getMessageFallback: r = u.f,
                            messages: i,
                            namespace: a,
                            onError: o = u.g,
                            ...s
                          } = e;
                          return (function (e, t) {
                            let { messages: n, namespace: r, ...i } = e;
                            return (
                              (n = n["!"]),
                              (r = (0, u.r)(r, "!")),
                              (0, u.e)({ ...i, messages: n, namespace: r })
                            );
                          })(
                            {
                              ...s,
                              onError: o,
                              cache: t,
                              formatters: n,
                              getMessageFallback: r,
                              messages: { "!": i },
                              namespace: a ? "!.".concat(a) : "!",
                            },
                            "!"
                          );
                        })({ locale: e, messages: n, namespace: t })
                      : null,
                  [n, e, t]
                )
              );
            })(n, "switchLangDialog");
          return o
            ? (0, t.jsxs)(i.Dialog, {
                ...a,
                children: [
                  (0, t.jsx)(i.DialogOverlay, {
                    className:
                      "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in-0",
                  }),
                  (0, t.jsx)(i.DialogTitle, {
                    className: "sr-only",
                    children: o.rich("title", r.richText),
                  }),
                  (0, t.jsx)(i.DialogContent, {
                    className:
                      "fixed left-1/2 top-1/2 z-50 w-full max-w-[386px] -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] bg-black text-center rounded border-[3px]",
                    children: (0, t.jsxs)("div", {
                      className: "relative overflow-hidden text-black",
                      children: [
                        (0, t.jsxs)(i.DialogClose, {
                          className:
                            "absolute right-0 top-0 p-2 text-white hover:text-primary cursor-pointer",
                          children: [
                            (0, t.jsx)(l.FaTimes, { size: 20 }),
                            (0, t.jsx)("span", {
                              className: "sr-only",
                              children: "Close",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "font-yuanmo text-white font-bold text-lg uppercase py-2",
                          children: o("title"),
                        }),
                        (0, t.jsxs)("div", {
                          className: "bg-white text-center rounded-b p-4",
                          children: [
                            (0, t.jsx)("div", {
                              className: "font-bold text-lg mb-2",
                              children: o("detected", {
                                lang: n.toUpperCase(),
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "text-base mb-3",
                              children: o("confirm"),
                            }),
                            (0, t.jsxs)("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                (0, t.jsx)(c.default, {
                                  variant: "white",
                                  onClick: () => {
                                    var e;
                                    null == (e = a.onOpenChange) ||
                                      e.call(a, !1);
                                  },
                                  children: o("no"),
                                }),
                                (0, t.jsx)(c.default, {
                                  variant: "blue",
                                  onClick: () => {
                                    window.location.href = "/".concat(n);
                                  },
                                  children: o("yes"),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (0, t.jsx)(t.Fragment, {});
        },
        g = () => {
          let [e, r] = (0, s.useState)(!1),
            [i, l] = (0, s.useState)(null),
            c = (0, o.useLocale)();
          return ((0, s.useEffect)(() => {
            (() => {
              var e, t, i, o;
              if ((0, a.hasCookie)("lang_detect_ignore")) return;
              (0, a.setCookie)("lang_detect_ignore", "1", 365);
              let s =
                null == (o = navigator) ||
                null == (i = o.language) ||
                null == (t = i.split("-")) ||
                null == (e = t[0])
                  ? void 0
                  : e.toLowerCase();
              s &&
                n.enabledLanguages.find((e) => e.code === s) &&
                (l(s), c !== s && r(!0));
            })();
          }, []),
          i)
            ? (0, t.jsx)(h, { open: e, onOpenChange: r, detectedLanguage: i })
            : (0, t.jsx)(t.Fragment, {});
        };
    },
    43936: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    997248: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        r = e.r(43936);
      function i() {}
      function a() {}
      (a.resetWarningCache = i),
        (t.exports = function () {
          function e(e, t, n, i, a, o) {
            if (o !== r) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    246457: (e) => {
      var { m: t, e: n } = e;
      t.exports = e.r(997248)();
    },
    428601: (e) => {
      var { m: t, e: n } = e,
        r = e.i(174519);
      (function () {
        var e, n, i, a;
        "undefined" != typeof performance &&
        null !== performance &&
        performance.now
          ? (t.exports = function () {
              return performance.now();
            })
          : void 0 !== r.default && null !== r.default && r.default.hrtime
          ? ((t.exports = function () {
              return (e() - a) / 1e6;
            }),
            (n = r.default.hrtime),
            (a =
              (e = function () {
                var e;
                return 1e9 * (e = n())[0] + e[1];
              })() -
              1e9 * r.default.uptime()))
          : Date.now
          ? ((t.exports = function () {
              return Date.now() - i;
            }),
            (i = Date.now()))
          : ((t.exports = function () {
              return new Date().getTime() - i;
            }),
            (i = new Date().getTime()));
      }.call(e.e));
    },
    33568: (e) => {
      for (
        var { m: t, e: n } = e,
          r = e.r(428601),
          i = "undefined" == typeof window ? globalThis : window,
          a = ["moz", "webkit"],
          o = "AnimationFrame",
          s = i["request" + o],
          l = i["cancel" + o] || i["cancelRequest" + o],
          c = 0;
        !s && c < a.length;
        c++
      )
        (s = i[a[c] + "Request" + o]),
          (l = i[a[c] + "Cancel" + o] || i[a[c] + "CancelRequest" + o]);
      if (!s || !l) {
        var u = 0,
          d = 0,
          f = [],
          h = 1e3 / 60;
        (s = function (e) {
          if (0 === f.length) {
            var t = r(),
              n = Math.max(0, h - (t - u));
            (u = n + t),
              setTimeout(function () {
                var e = f.slice(0);
                f.length = 0;
                for (var t = 0; t < e.length; t++)
                  if (!e[t].cancelled)
                    try {
                      e[t].callback(u);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
              }, Math.round(n));
          }
          return f.push({ handle: ++d, callback: e, cancelled: !1 }), d;
        }),
          (l = function (e) {
            for (var t = 0; t < f.length; t++)
              f[t].handle === e && (f[t].cancelled = !0);
          });
      }
      (t.exports = function (e) {
        return s.call(i, e);
      }),
        (t.exports.cancel = function () {
          l.apply(i, arguments);
        }),
        (t.exports.polyfill = function (e) {
          e || (e = i),
            (e.requestAnimationFrame = s),
            (e.cancelAnimationFrame = l);
        });
    },
    485435: (e) => {
      "use strict";
      let t;
      e.s({ ToasterProvider: () => c, useToaster: () => u }, 485435);
      var n = e.i(150840),
        r = e.i(756253);
      let i = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        },
        a = new Uint8Array(16),
        o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      let s = function (e, n, r) {
          var s, l, c;
          if (i.randomUUID && !n && !e) return i.randomUUID();
          let u =
            null !=
            (c =
              null != (l = (e = e || {}).random)
                ? l
                : null == (s = e.rng)
                ? void 0
                : s.call(e))
              ? c
              : (function () {
                  if (!t) {
                    if ("undefined" == typeof crypto || !crypto.getRandomValues)
                      throw Error(
                        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                      );
                    t = crypto.getRandomValues.bind(crypto);
                  }
                  return t(a);
                })();
          if (u.length < 16) throw Error("Random bytes length must be >= 16");
          if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), n)) {
            if ((r = r || 0) < 0 || r + 16 > n.length)
              throw RangeError(
                "UUID byte range "
                  .concat(r, ":")
                  .concat(r + 15, " is out of buffer bounds")
              );
            for (let e = 0; e < 16; ++e) n[r + e] = u[e];
            return n;
          }
          return (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return (
              o[e[t + 0]] +
              o[e[t + 1]] +
              o[e[t + 2]] +
              o[e[t + 3]] +
              "-" +
              o[e[t + 4]] +
              o[e[t + 5]] +
              "-" +
              o[e[t + 6]] +
              o[e[t + 7]] +
              "-" +
              o[e[t + 8]] +
              o[e[t + 9]] +
              "-" +
              o[e[t + 10]] +
              o[e[t + 11]] +
              o[e[t + 12]] +
              o[e[t + 13]] +
              o[e[t + 14]] +
              o[e[t + 15]]
            ).toLowerCase();
          })(u);
        },
        l = (0, r.createContext)({ toasts: [], addToast: () => {} }),
        c = (e) => {
          let { children: t } = e,
            [i, a] = (0, r.useState)([]),
            o = (0, r.useCallback)((e) => {
              var t;
              let n = s(),
                r = null != (t = e.duration) ? t : 3e3;
              a((t) => [...t, { ...e, id: n, visible: !0 }]),
                setTimeout(() => {
                  a((e) =>
                    e.map((e) => (e.id === n ? { ...e, visible: !1 } : e))
                  ),
                    setTimeout(() => {
                      a((e) => e.filter((e) => e.id !== n));
                    }, 300);
                }, r);
            }, []);
          return (0, n.jsx)(l.Provider, {
            value: { toasts: i, addToast: o },
            children: t,
          });
        },
        u = () => (0, r.useContext)(l);
    },
    860730: (e) => {
      "use strict";
      e.s({ default: () => th }, 860730);
      var t,
        n = e.i(150840),
        r = e.i(164897),
        i = e.i(952223),
        a = e.i(699677),
        o = e.i(756253),
        s = e.i(246457),
        l = ["date", "verboseDate", "tooltip", "children"];
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        var n = e.date,
          r = e.verboseDate,
          i = e.tooltip,
          a = e.children,
          s = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]),
                  !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]);
            }
            return i;
          })(e, l),
          u = (0, o.useMemo)(
            function () {
              return n.toISOString();
            },
            [n]
          );
        return o.default.createElement(
          "time",
          c({ ref: t }, s, { dateTime: u, title: i ? r : void 0 }),
          a
        );
      }
      (u = o.default.forwardRef(u)).propTypes = {
        date: s.default.instanceOf(Date).isRequired,
        verboseDate: s.default.string,
        tooltip: s.default.bool.isRequired,
        children: s.default.string.isRequired,
      };
      var d = "en",
        f = {},
        h = {};
      function g(e) {
        return f[e] ? e : h[e.toLowerCase()] ? h[e.toLowerCase()] : void 0;
      }
      function m(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.localeMatcher || "lookup";
        switch (n) {
          case "lookup":
          case "best fit":
            var r = e,
              i = g(r);
            if (i) return i;
            for (var a = r.split("-"); r.length > 1; ) {
              a.pop();
              var o = g((r = a.join("-")));
              if (o) return o;
            }
            return;
          default:
            throw RangeError('Invalid "localeMatcher" option: '.concat(n));
        }
      }
      var p = {
        af: function (e) {
          return 1 == e ? "one" : "other";
        },
        am: function (e) {
          return e >= 0 && e <= 1 ? "one" : "other";
        },
        ar: function (e) {
          var t = String(e).split("."),
            n = Number(t[0]) == e && t[0].slice(-2);
          return 0 == e
            ? "zero"
            : 1 == e
            ? "one"
            : 2 == e
            ? "two"
            : n >= 3 && n <= 10
            ? "few"
            : n >= 11 && n <= 99
            ? "many"
            : "other";
        },
        ast: function (e) {
          var t = !String(e).split(".")[1];
          return 1 == e && t ? "one" : "other";
        },
        be: function (e) {
          var t = String(e).split("."),
            n = Number(t[0]) == e,
            r = n && t[0].slice(-1),
            i = n && t[0].slice(-2);
          return 1 == r && 11 != i
            ? "one"
            : r >= 2 && r <= 4 && (i < 12 || i > 14)
            ? "few"
            : (n && 0 == r) || (r >= 5 && r <= 9) || (i >= 11 && i <= 14)
            ? "many"
            : "other";
        },
        br: function (e) {
          var t = String(e).split("."),
            n = Number(t[0]) == e,
            r = n && t[0].slice(-1),
            i = n && t[0].slice(-2),
            a = n && t[0].slice(-6);
          return 1 == r && 11 != i && 71 != i && 91 != i
            ? "one"
            : 2 == r && 12 != i && 72 != i && 92 != i
            ? "two"
            : (3 == r || 4 == r || 9 == r) &&
              (i < 10 || i > 19) &&
              (i < 70 || i > 79) &&
              (i < 90 || i > 99)
            ? "few"
            : 0 != e && n && 0 == a
            ? "many"
            : "other";
        },
        bs: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = t[1] || "",
            i = !t[1],
            a = n.slice(-1),
            o = n.slice(-2),
            s = r.slice(-1),
            l = r.slice(-2);
          return (i && 1 == a && 11 != o) || (1 == s && 11 != l)
            ? "one"
            : (i && a >= 2 && a <= 4 && (o < 12 || o > 14)) ||
              (s >= 2 && s <= 4 && (l < 12 || l > 14))
            ? "few"
            : "other";
        },
        ca: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-6);
          return 1 == e && r ? "one" : 0 != n && 0 == i && r ? "many" : "other";
        },
        ceb: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = t[1] || "",
            i = !t[1],
            a = n.slice(-1),
            o = r.slice(-1);
          return (i && (1 == n || 2 == n || 3 == n)) ||
            (i && 4 != a && 6 != a && 9 != a) ||
            (!i && 4 != o && 6 != o && 9 != o)
            ? "one"
            : "other";
        },
        cs: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1];
          return 1 == e && r
            ? "one"
            : n >= 2 && n <= 4 && r
            ? "few"
            : r
            ? "other"
            : "many";
        },
        cy: function (e) {
          return 0 == e
            ? "zero"
            : 1 == e
            ? "one"
            : 2 == e
            ? "two"
            : 3 == e
            ? "few"
            : 6 == e
            ? "many"
            : "other";
        },
        da: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = Number(t[0]) == e;
          return 1 != e && (r || (0 != n && 1 != n)) ? "other" : "one";
        },
        dsb: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = t[1] || "",
            i = !t[1],
            a = n.slice(-2),
            o = r.slice(-2);
          return (i && 1 == a) || 1 == o
            ? "one"
            : (i && 2 == a) || 2 == o
            ? "two"
            : (i && (3 == a || 4 == a)) || 3 == o || 4 == o
            ? "few"
            : "other";
        },
        dz: function (e) {
          return "other";
        },
        es: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-6);
          return 1 == e ? "one" : 0 != n && 0 == i && r ? "many" : "other";
        },
        ff: function (e) {
          return e >= 0 && e < 2 ? "one" : "other";
        },
        fr: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-6);
          return e >= 0 && e < 2
            ? "one"
            : 0 != n && 0 == i && r
            ? "many"
            : "other";
        },
        ga: function (e) {
          var t = Number(String(e).split(".")[0]) == e;
          return 1 == e
            ? "one"
            : 2 == e
            ? "two"
            : t && e >= 3 && e <= 6
            ? "few"
            : t && e >= 7 && e <= 10
            ? "many"
            : "other";
        },
        gd: function (e) {
          var t = Number(String(e).split(".")[0]) == e;
          return 1 == e || 11 == e
            ? "one"
            : 2 == e || 12 == e
            ? "two"
            : (t && e >= 3 && e <= 10) || (t && e >= 13 && e <= 19)
            ? "few"
            : "other";
        },
        he: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1];
          return (1 == n && r) || (0 == n && !r)
            ? "one"
            : 2 == n && r
            ? "two"
            : "other";
        },
        is: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = (t[1] || "").replace(/0+$/, ""),
            i = Number(t[0]) == e,
            a = n.slice(-1),
            o = n.slice(-2);
          return (i && 1 == a && 11 != o) || (r % 10 == 1 && r % 100 != 11)
            ? "one"
            : "other";
        },
        ksh: function (e) {
          return 0 == e ? "zero" : 1 == e ? "one" : "other";
        },
        lt: function (e) {
          var t = String(e).split("."),
            n = t[1] || "",
            r = Number(t[0]) == e,
            i = r && t[0].slice(-1),
            a = r && t[0].slice(-2);
          return 1 == i && (a < 11 || a > 19)
            ? "one"
            : i >= 2 && i <= 9 && (a < 11 || a > 19)
            ? "few"
            : 0 != n
            ? "many"
            : "other";
        },
        lv: function (e) {
          var t = String(e).split("."),
            n = t[1] || "",
            r = n.length,
            i = Number(t[0]) == e,
            a = i && t[0].slice(-1),
            o = i && t[0].slice(-2),
            s = n.slice(-2),
            l = n.slice(-1);
          return (i && 0 == a) ||
            (o >= 11 && o <= 19) ||
            (2 == r && s >= 11 && s <= 19)
            ? "zero"
            : (1 == a && 11 != o) ||
              (2 == r && 1 == l && 11 != s) ||
              (2 != r && 1 == l)
            ? "one"
            : "other";
        },
        mk: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = t[1] || "",
            i = !t[1],
            a = n.slice(-1),
            o = n.slice(-2),
            s = r.slice(-1),
            l = r.slice(-2);
          return (i && 1 == a && 11 != o) || (1 == s && 11 != l)
            ? "one"
            : "other";
        },
        mt: function (e) {
          var t = String(e).split("."),
            n = Number(t[0]) == e && t[0].slice(-2);
          return 1 == e
            ? "one"
            : 2 == e
            ? "two"
            : 0 == e || (n >= 3 && n <= 10)
            ? "few"
            : n >= 11 && n <= 19
            ? "many"
            : "other";
        },
        pa: function (e) {
          return 0 == e || 1 == e ? "one" : "other";
        },
        pl: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-1),
            a = n.slice(-2);
          return 1 == e && r
            ? "one"
            : r && i >= 2 && i <= 4 && (a < 12 || a > 14)
            ? "few"
            : (r && 1 != n && (0 == i || 1 == i)) ||
              (r && i >= 5 && i <= 9) ||
              (r && a >= 12 && a <= 14)
            ? "many"
            : "other";
        },
        pt: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-6);
          return 0 == n || 1 == n
            ? "one"
            : 0 != n && 0 == i && r
            ? "many"
            : "other";
        },
        ro: function (e) {
          var t = String(e).split("."),
            n = !t[1],
            r = Number(t[0]) == e && t[0].slice(-2);
          return 1 == e && n
            ? "one"
            : !n || 0 == e || (1 != e && r >= 1 && r <= 19)
            ? "few"
            : "other";
        },
        ru: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-1),
            a = n.slice(-2);
          return r && 1 == i && 11 != a
            ? "one"
            : r && i >= 2 && i <= 4 && (a < 12 || a > 14)
            ? "few"
            : (r && 0 == i) ||
              (r && i >= 5 && i <= 9) ||
              (r && a >= 11 && a <= 14)
            ? "many"
            : "other";
        },
        se: function (e) {
          return 1 == e ? "one" : 2 == e ? "two" : "other";
        },
        si: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = t[1] || "";
          return 0 == e || 1 == e || (0 == n && 1 == r) ? "one" : "other";
        },
        sl: function (e) {
          var t = String(e).split("."),
            n = t[0],
            r = !t[1],
            i = n.slice(-2);
          return r && 1 == i
            ? "one"
            : r && 2 == i
            ? "two"
            : (r && (3 == i || 4 == i)) || !r
            ? "few"
            : "other";
        },
      };
      function y(e) {
        return "pt-PT" === e
          ? e
          : (function (e) {
              var t = e.match(w);
              if (!t) throw TypeError("Invalid locale: ".concat(e));
              return t[1];
            })(e);
      }
      (p.as = p.am),
        (p.az = p.af),
        (p.bg = p.af),
        (p.bn = p.am),
        (p.brx = p.af),
        (p.ce = p.af),
        (p.chr = p.af),
        (p.de = p.ast),
        (p.ee = p.af),
        (p.el = p.af),
        (p.en = p.ast),
        (p.et = p.ast),
        (p.eu = p.af),
        (p.fa = p.am),
        (p.fi = p.ast),
        (p.fil = p.ceb),
        (p.fo = p.af),
        (p.fur = p.af),
        (p.fy = p.ast),
        (p.gl = p.ast),
        (p.gu = p.am),
        (p.ha = p.af),
        (p.hi = p.am),
        (p.hr = p.bs),
        (p.hsb = p.dsb),
        (p.hu = p.af),
        (p.hy = p.ff),
        (p.ia = p.ast),
        (p.id = p.dz),
        (p.ig = p.dz),
        (p.it = p.ca),
        (p.ja = p.dz),
        (p.jgo = p.af),
        (p.jv = p.dz),
        (p.ka = p.af),
        (p.kea = p.dz),
        (p.kk = p.af),
        (p.kl = p.af),
        (p.km = p.dz),
        (p.kn = p.am),
        (p.ko = p.dz),
        (p.ks = p.af),
        (p.ku = p.af),
        (p.ky = p.af),
        (p.lb = p.af),
        (p.lkt = p.dz),
        (p.lo = p.dz),
        (p.ml = p.af),
        (p.mn = p.af),
        (p.mr = p.af),
        (p.ms = p.dz),
        (p.my = p.dz),
        (p.nb = p.af),
        (p.ne = p.af),
        (p.nl = p.ast),
        (p.nn = p.af),
        (p.no = p.af),
        (p.or = p.af),
        (p.pcm = p.am),
        (p.ps = p.af),
        (p.rm = p.af),
        (p.sah = p.dz),
        (p.sc = p.ast),
        (p.sd = p.af),
        (p.sk = p.cs),
        (p.so = p.af),
        (p.sq = p.af),
        (p.sr = p.bs),
        (p.su = p.dz),
        (p.sv = p.ast),
        (p.sw = p.ast),
        (p.ta = p.af),
        (p.te = p.af),
        (p.th = p.dz),
        (p.ti = p.pa),
        (p.tk = p.af),
        (p.to = p.dz),
        (p.tr = p.af),
        (p.ug = p.af),
        (p.uk = p.ru),
        (p.ur = p.ast),
        (p.uz = p.af),
        (p.vi = p.dz),
        (p.wae = p.af),
        (p.wo = p.dz),
        (p.xh = p.af),
        (p.yi = p.ast),
        (p.yo = p.dz),
        (p.yue = p.dz),
        (p.zh = p.dz),
        (p.zu = p.am);
      var w = /^([a-z0-9]+)/i;
      function M(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var v = (function () {
        var e, t;
        function n(e, t) {
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          var r = n.supportedLocalesOf(e);
          if (0 === r.length) throw RangeError("Unsupported locale: " + e);
          if (t && "cardinal" !== t.type)
            throw RangeError('Only "cardinal" "type" is supported');
          this.$ = p[y(r[0])];
        }
        return (
          (e = [
            {
              key: "select",
              value: function (e) {
                return this.$(e);
              },
            },
          ]),
          (t = [
            {
              key: "supportedLocalesOf",
              value: function (e) {
                return (
                  "string" == typeof e && (e = [e]),
                  e.filter(function (e) {
                    return p[y(e)];
                  })
                );
              },
            },
          ]),
          e && M(n.prototype, e),
          t && M(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })();
      function b(e) {
        return (b =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function I(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var a = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return S(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return S(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var j = [
          "second",
          "minute",
          "hour",
          "day",
          "week",
          "month",
          "quarter",
          "year",
        ],
        A = ["auto", "always"],
        T = ["long", "short", "narrow"],
        D = ["lookup", "best fit"],
        C = (function () {
          var e;
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            var r = n.numeric,
              i = n.style,
              a = n.localeMatcher;
            if (
              ((this.numeric = "always"),
              (this.style = "long"),
              (this.localeMatcher = "lookup"),
              void 0 !== r)
            ) {
              if (0 > A.indexOf(r))
                throw RangeError('Invalid "numeric" option: '.concat(r));
              this.numeric = r;
            }
            if (void 0 !== i) {
              if (0 > T.indexOf(i))
                throw RangeError('Invalid "style" option: '.concat(i));
              this.style = i;
            }
            if (void 0 !== a) {
              if (0 > D.indexOf(a))
                throw RangeError('Invalid "localeMatcher" option: '.concat(a));
              this.localeMatcher = a;
            }
            if (
              ("string" == typeof e && (e = [e]),
              e.push(d),
              (this.locale = t.supportedLocalesOf(e, {
                localeMatcher: this.localeMatcher,
              })[0]),
              !this.locale)
            )
              throw Error("No supported locale was found");
            v.supportedLocalesOf(this.locale).length > 0
              ? (this.pluralRules = new v(this.locale))
              : console.warn(
                  '"'.concat(this.locale, '" locale is not supported')
                ),
              "undefined" != typeof Intl && Intl.NumberFormat
                ? ((this.numberFormat = new Intl.NumberFormat(this.locale)),
                  (this.numberingSystem =
                    this.numberFormat.resolvedOptions().numberingSystem))
                : (this.numberingSystem = "latn"),
              (this.locale = m(this.locale, {
                localeMatcher: this.localeMatcher,
              }));
          }
          return (
            (e = [
              {
                key: "format",
                value: function () {
                  var e = O(arguments),
                    t = I(e, 2),
                    n = t[0],
                    r = t[1];
                  return this.getRule(n, r).replace(
                    "{0}",
                    this.formatNumber(Math.abs(n))
                  );
                },
              },
              {
                key: "formatToParts",
                value: function () {
                  var e = O(arguments),
                    t = I(e, 2),
                    n = t[0],
                    r = t[1],
                    i = this.getRule(n, r),
                    a = i.indexOf("{0}");
                  if (a < 0) return [{ type: "literal", value: i }];
                  var o = [];
                  return (
                    a > 0 && o.push({ type: "literal", value: i.slice(0, a) }),
                    (o = o.concat(
                      this.formatNumberToParts(Math.abs(n)).map(function (e) {
                        return E(E({}, e), {}, { unit: r });
                      })
                    )),
                    a + 3 < i.length - 1 &&
                      o.push({ type: "literal", value: i.slice(a + 3) }),
                    o
                  );
                },
              },
              {
                key: "getRule",
                value: function (e, t) {
                  var n,
                    r = f[this.locale][this.style][t];
                  if ("string" == typeof r) return r;
                  if ("auto" === this.numeric) {
                    if (-2 === e || -1 === e) {
                      var i =
                        r["previous".concat(-1 === e ? "" : "-" + Math.abs(e))];
                      if (i) return i;
                    } else if (1 === e || 2 === e) {
                      var a =
                        r["next".concat(1 === e ? "" : "-" + Math.abs(e))];
                      if (a) return a;
                    } else if (0 === e && r.current) return r.current;
                  }
                  var o =
                    r[
                      (n = e) < 0 || (0 === n && 1 / n == -1 / 0)
                        ? "past"
                        : "future"
                    ];
                  return "string" == typeof o
                    ? o
                    : o[
                        (this.pluralRules &&
                          this.pluralRules.select(Math.abs(e))) ||
                          "other"
                      ] || o.other;
                },
              },
              {
                key: "formatNumber",
                value: function (e) {
                  return this.numberFormat
                    ? this.numberFormat.format(e)
                    : String(e);
                },
              },
              {
                key: "formatNumberToParts",
                value: function (e) {
                  return this.numberFormat && this.numberFormat.formatToParts
                    ? this.numberFormat.formatToParts(e)
                    : [{ type: "integer", value: this.formatNumber(e) }];
                },
              },
              {
                key: "resolvedOptions",
                value: function () {
                  return {
                    locale: this.locale,
                    style: this.style,
                    numeric: this.numeric,
                    numberingSystem: this.numberingSystem,
                  };
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })();
      (C.supportedLocalesOf = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" == typeof e) e = [e];
        else if (!Array.isArray(e))
          throw TypeError('Invalid "locales" argument');
        return e.filter(function (e) {
          return m(e, t);
        });
      }),
        (C.addLocale = function (e) {
          if (!e) throw Error("No locale data passed");
          (f[e.locale] = e), (h[e.locale.toLowerCase()] = e.locale);
        }),
        (C.setDefaultLocale = function (e) {
          d = e;
        }),
        (C.getDefaultLocale = function () {
          return d;
        }),
        (C.PluralRules = v);
      var L = 'Invalid "unit" argument';
      function O(e) {
        if (e.length < 2) throw TypeError('"unit" argument is required');
        return [
          (function (e) {
            if (((e = Number(e)), Number.isFinite && !Number.isFinite(e)))
              throw RangeError(
                "".concat('Invalid "number" argument', ": ").concat(e)
              );
            return e;
          })(e[0]),
          (function (e) {
            if ("symbol" === b(e)) throw TypeError(L);
            if (
              "string" != typeof e ||
              ("s" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
              0 > j.indexOf(e))
            )
              throw RangeError("".concat(L, ": ").concat(e));
            return e;
          })(e[1]),
        ];
      }
      function x(e) {
        return (x =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var z = (function () {
        var e;
        function t() {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          this.cache = {};
        }
        return (
          (e = [
            {
              key: "get",
              value: function () {
                for (
                  var e = this.cache, t = arguments.length, n = Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                for (var i = 0; i < n.length; i++) {
                  var a = n[i];
                  if ("object" !== x(e)) return;
                  e = e[a];
                }
                return e;
              },
            },
            {
              key: "put",
              value: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                for (
                  var r = t.pop(), i = t.pop(), a = this.cache, o = 0;
                  o < t.length;
                  o++
                ) {
                  var s = t[o];
                  "object" !== x(a[s]) && (a[s] = {}), (a = a[s]);
                }
                return (a[i] = r);
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(t.prototype, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      })();
      function _(e) {
        return (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function k(e) {
        return (k =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var W = {}.constructor;
      function R(e) {
        switch (e) {
          case "second":
            return 1;
          case "minute":
            return 60;
          case "hour":
            return 3600;
          case "day":
            return 86400;
          case "week":
            return 604800;
          case "month":
            return 2630016;
          case "year":
            return 0x1e18558;
        }
      }
      function U(e) {
        return void 0 !== e.factor ? e.factor : R(e.unit || e.formatAs) || 1;
      }
      function B(e) {
        return "floor" === e ? Math.floor : Math.round;
      }
      function Y(e) {
        return "floor" === e ? 1 : 0.5;
      }
      function Q(e) {
        return (Q =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function F(e, t) {
        var n,
          r = t.prevStep,
          i = t.timestamp,
          a = t.now,
          o = t.future,
          s = t.round;
        return (
          r &&
            (r.id || r.unit) &&
            (n = e["threshold_for_".concat(r.id || r.unit)]),
          void 0 === n &&
            void 0 !== e.threshold &&
            "function" == typeof (n = e.threshold) &&
            (n = n(a, o)),
          void 0 === n && (n = e.minTime),
          "object" === Q(n) &&
            (n = r && r.id && void 0 !== n[r.id] ? n[r.id] : n.default),
          "function" == typeof n &&
            (n = n(i, {
              future: o,
              getMinTimeForUnit: function (e, t) {
                return H(e, t || (r && r.formatAs), { round: s });
              },
            })),
          void 0 === n &&
            e.test &&
            (n = 0x1fffffffffffff * !e.test(i, { now: a, future: o })),
          void 0 === n &&
            (r
              ? e.formatAs &&
                r.formatAs &&
                (n = H(e.formatAs, r.formatAs, { round: s }))
              : (n = 0)),
          void 0 === n &&
            console.warn(
              "[javascript-time-ago] A step should specify `minTime`:\n" +
                JSON.stringify(e, null, 2)
            ),
          n
        );
      }
      function H(e, t, n) {
        var r,
          i = n.round,
          a = R(e);
        if (((r = "now" === t ? R(e) : R(t)), void 0 !== a && void 0 !== r))
          return a - r * (1 - Y(i));
      }
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var G = {};
      function K(e) {
        return G[e];
      }
      function V(e) {
        if (!e) throw Error("[javascript-time-ago] No locale data passed.");
        G[e.locale] = e;
      }
      let q = {
        steps: [
          { formatAs: "now" },
          { formatAs: "second" },
          { formatAs: "minute" },
          { formatAs: "hour" },
          { formatAs: "day" },
          { formatAs: "week" },
          { formatAs: "month" },
          { formatAs: "year" },
        ],
        labels: "long",
      };
      function J(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let $ = X(
          X({}, q),
          {},
          {
            steps: q.steps.filter(function (e) {
              return "second" !== e.formatAs;
            }),
          }
        ),
        ee = [
          { factor: 1, unit: "now" },
          { threshold: 1, threshold_for_now: 45.5, factor: 1, unit: "second" },
          { threshold: 45.5, factor: 60, unit: "minute" },
          { threshold: 150, granularity: 5, factor: 60, unit: "minute" },
          { threshold: 1350, factor: 1800, unit: "half-hour" },
          {
            threshold: 2550,
            threshold_for_minute: 3150,
            factor: 3600,
            unit: "hour",
          },
          { threshold: (20.5 / 24) * 86400, factor: 86400, unit: "day" },
          { threshold: 475200, factor: 604800, unit: "week" },
          { threshold: 2116800, factor: 2630016, unit: "month" },
          { threshold: 0x1a55fc0, factor: 0x1e18558, unit: "year" },
        ],
        et = {
          gradation: ee,
          flavour: "long",
          units: ["now", "minute", "hour", "day", "week", "month", "year"],
        },
        en = {
          gradation: ee,
          flavour: "long-time",
          units: ["now", "minute", "hour", "day", "week", "month", "year"],
        };
      function er(e) {
        return e instanceof Date ? e : new Date(e);
      }
      var ei = [
          { formatAs: "second" },
          { formatAs: "minute" },
          { formatAs: "hour" },
        ],
        ea = {};
      ("undefined" == typeof Intl ? "undefined" : _(Intl)) === "object" &&
      "function" == typeof Intl.DateTimeFormat
        ? ei.push(
            {
              minTime: function (e, t) {
                return t.future, (0, t.getMinTimeForUnit)("day");
              },
              format: function (e, t) {
                return (
                  ea[t] || (ea[t] = {}),
                  ea[t].dayMonth ||
                    (ea[t].dayMonth = new Intl.DateTimeFormat(t, {
                      month: "short",
                      day: "numeric",
                    })),
                  ea[t].dayMonth.format(er(e))
                );
              },
            },
            {
              minTime: function (e, t) {
                if (!t.future)
                  return (
                    (new Date(new Date(e).getFullYear() + 1, 0).getTime() - e) /
                    1e3
                  );
                var n = new Date(new Date(e).getFullYear(), 0).getTime() - 1;
                return (e - n) / 1e3;
              },
              format: function (e, t) {
                return (
                  ea[t] || (ea[t] = {}),
                  ea[t].dayMonthYear ||
                    (ea[t].dayMonthYear = new Intl.DateTimeFormat(t, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })),
                  ea[t].dayMonthYear.format(er(e))
                );
              },
            }
          )
        : ei.push(
            { formatAs: "day" },
            { formatAs: "week" },
            { formatAs: "month" },
            { formatAs: "year" }
          );
      let eo = { steps: ei, labels: ["mini", "short-time", "narrow", "short"] };
      function es(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? es(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : es(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let ec = el(
        el({}, eo),
        {},
        { steps: [{ formatAs: "now" }].concat(eo.steps) }
      );
      function eu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eu(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eu(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let ef = ed(
        ed({}, eo),
        {},
        {
          steps: eo.steps.filter(function (e) {
            return "second" !== e.formatAs;
          }),
        }
      );
      function eh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eh(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eh(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let em = eg(
        eg({}, ef),
        {},
        { steps: [{ formatAs: "now" }].concat(ef.steps) }
      );
      function ep(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ep(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ep(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let ew = ey(
          ey({}, eo),
          {},
          {
            steps: eo.steps
              .filter(function (e) {
                return "second" !== e.formatAs;
              })
              .map(function (e) {
                return "minute" === e.formatAs
                  ? ey(ey({}, e), {}, { minTime: 60 })
                  : e;
              }),
          }
        ),
        eM = {
          steps: [
            { formatAs: "second" },
            { formatAs: "minute" },
            { formatAs: "hour" },
            { formatAs: "day" },
            { formatAs: "month" },
            { formatAs: "year" },
          ],
          labels: ["mini", "short-time", "narrow", "short"],
        };
      function ev(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ev(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ev(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let eN = eb(
        eb({}, eM),
        {},
        { steps: [{ formatAs: "now" }].concat(eM.steps) }
      );
      function eE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eI(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eE(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eE(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let eS = eI(
        eI({}, eM),
        {},
        {
          steps: eM.steps.filter(function (e) {
            return "second" !== e.formatAs;
          }),
        }
      );
      function ej(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                var r, i, a;
                (r = e),
                  (i = t),
                  (a = n[t]),
                  i in r
                    ? Object.defineProperty(r, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ej(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let eT = eA(
        eA({}, eS),
        {},
        { steps: [{ formatAs: "now" }].concat(eS.steps) }
      );
      function eD(e) {
        return (eD =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function eC(e, t) {
        if (e) {
          if ("string" == typeof e) return eL(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return eL(e, t);
        }
      }
      function eL(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var eO = (function () {
          var e;
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.polyfill;
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            "string" == typeof e && (e = [e]),
              (this.locale = (function (e, t) {
                for (
                  var n,
                    r = (function (e, t) {
                      var n =
                        ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                      if (n) return (n = n.call(e)).next.bind(n);
                      if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return P(e, void 0);
                            var n = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            if (
                              ("Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n)
                            )
                              return Array.from(e);
                            if (
                              "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            )
                              return P(e, t);
                          }
                        })(e))
                      ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        };
                      }
                      throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })(e);
                  !(n = r()).done;

                ) {
                  var i = n.value;
                  if (t(i)) return i;
                  for (var a = i.split("-"); a.length > 1; )
                    if ((a.pop(), t((i = a.join("-"))))) return i;
                }
                throw Error(
                  "No locale data has been registered for any of the locales: ".concat(
                    e.join(", ")
                  )
                );
              })(e.concat(t.getDefaultLocale()), K)),
              "undefined" != typeof Intl &&
                Intl.NumberFormat &&
                (this.numberFormat = new Intl.NumberFormat(this.locale)),
              !1 === r
                ? ((this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat),
                  (this.IntlPluralRules = Intl.PluralRules))
                : ((this.IntlRelativeTimeFormat = C),
                  (this.IntlPluralRules = C.PluralRules)),
              (this.relativeTimeFormatCache = new z()),
              (this.pluralRulesCache = new z());
          }
          return (
            (e = [
              {
                key: "format",
                value: function (e, t, n) {
                  n ||
                    (t &&
                    !(function (e) {
                      var t;
                      return (
                        "string" == typeof e ||
                        (void 0 !== k((t = e)) &&
                          null !== t &&
                          t.constructor === W &&
                          (Array.isArray(e.steps) ||
                            Array.isArray(e.gradation) ||
                            Array.isArray(e.flavour) ||
                            "string" == typeof e.flavour ||
                            Array.isArray(e.labels) ||
                            "string" == typeof e.labels ||
                            Array.isArray(e.units) ||
                            "function" == typeof e.custom))
                      );
                    })(t)
                      ? ((n = t), (t = void 0))
                      : (n = {})),
                    t || (t = $),
                    "string" == typeof t &&
                      (t = (function (e) {
                        switch (e) {
                          case "default":
                          case "round":
                            return q;
                          case "round-minute":
                            return $;
                          case "approximate":
                          default:
                            return et;
                          case "time":
                          case "approximate-time":
                            return en;
                          case "mini":
                            return eM;
                          case "mini-now":
                            return eN;
                          case "mini-minute":
                            return eS;
                          case "mini-minute-now":
                            return eT;
                          case "twitter":
                            return eo;
                          case "twitter-now":
                            return ec;
                          case "twitter-minute":
                            return ef;
                          case "twitter-minute-now":
                            return em;
                          case "twitter-first-minute":
                            return ew;
                        }
                      })(t));
                  var r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c,
                    u,
                    d,
                    f,
                    h,
                    g = (function (e) {
                      var t;
                      if (
                        e.constructor === Date ||
                        ("object" === eD((t = e)) &&
                          "function" == typeof t.getTime)
                      )
                        return e.getTime();
                      if ("number" == typeof e) return e;
                      throw Error(
                        "Unsupported relative time formatter input: "
                          .concat(eD(e), ", ")
                          .concat(e)
                      );
                    })(e),
                    m = this.getLabels(t.flavour || t.labels),
                    p = m.labels,
                    y = m.labelsType;
                  void 0 !== t.now && (h = t.now),
                    void 0 === h && void 0 !== n.now && (h = n.now),
                    void 0 === h && (h = Date.now());
                  var w = (h - g) / 1e3,
                    M = n.future || w < 0,
                    v =
                      ((r = p),
                      (i = K(this.locale).now),
                      (a = K(this.locale).long),
                      (o = M),
                      (s = r.now || (i && i.now))
                        ? "string" == typeof s
                          ? s
                          : o
                          ? s.future
                          : s.past
                        : a && a.second && a.second.current
                        ? a.second.current
                        : void 0);
                  if (t.custom) {
                    var b = t.custom({
                      now: h,
                      date: new Date(g),
                      time: g,
                      elapsed: w,
                      locale: this.locale,
                    });
                    if (void 0 !== b) return b;
                  }
                  var N =
                      ((l = t.units),
                      (c = p),
                      (u = v),
                      (d = Object.keys(c)),
                      u && d.push("now"),
                      l &&
                        (d = l.filter(function (e) {
                          return "now" === e || d.indexOf(e) >= 0;
                        })),
                      d),
                    E = n.round || t.round,
                    I =
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(
                        (f = (function (e, t, n) {
                          var r,
                            i,
                            a = n.now,
                            o = n.future,
                            s = n.round,
                            l = n.units,
                            c = n.getNextStep,
                            u = (function (e, t, n) {
                              var r = n.now,
                                i = n.future,
                                a = n.round;
                              if (0 !== e.length) {
                                var o = (function e(t, n, r) {
                                  var i =
                                      arguments.length > 3 &&
                                      void 0 !== arguments[3]
                                        ? arguments[3]
                                        : 0,
                                    a = F(
                                      t[i],
                                      (function (e) {
                                        for (
                                          var t = 1;
                                          t < arguments.length;
                                          t++
                                        ) {
                                          var n =
                                            null != arguments[t]
                                              ? arguments[t]
                                              : {};
                                          t % 2
                                            ? Z(Object(n), !0).forEach(
                                                function (t) {
                                                  var r, i, a;
                                                  (r = e),
                                                    (i = t),
                                                    (a = n[t]),
                                                    i in r
                                                      ? Object.defineProperty(
                                                          r,
                                                          i,
                                                          {
                                                            value: a,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                          }
                                                        )
                                                      : (r[i] = a);
                                                }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                e,
                                                Object.getOwnPropertyDescriptors(
                                                  n
                                                )
                                              )
                                            : Z(Object(n)).forEach(function (
                                                t
                                              ) {
                                                Object.defineProperty(
                                                  e,
                                                  t,
                                                  Object.getOwnPropertyDescriptor(
                                                    n,
                                                    t
                                                  )
                                                );
                                              });
                                        }
                                        return e;
                                      })(
                                        {
                                          prevStep: t[i - 1],
                                          timestamp: r.now - 1e3 * n,
                                        },
                                        r
                                      )
                                    );
                                  return void 0 === a || Math.abs(n) < a
                                    ? i - 1
                                    : i === t.length - 1
                                    ? i
                                    : e(t, n, r, i + 1);
                                })(e, t, {
                                  now: r,
                                  future: i || t < 0,
                                  round: a,
                                });
                                if (-1 !== o) {
                                  var s = e[o];
                                  return s.granularity &&
                                    0 ==
                                      B(a)(Math.abs(t) / U(s) / s.granularity) *
                                        s.granularity &&
                                    o > 0
                                    ? e[o - 1]
                                    : s;
                                }
                              }
                            })(
                              ((r = e),
                              (i = l),
                              (e = r.filter(function (e) {
                                var t = e.unit,
                                  n = e.formatAs;
                                return !(t = t || n) || i.indexOf(t) >= 0;
                              }))),
                              t,
                              { now: a, future: o, round: s }
                            );
                          if (c) {
                            if (u) {
                              var d = e[e.indexOf(u) - 1],
                                f = e[e.indexOf(u) + 1];
                              return [d, u, f];
                            }
                            return [void 0, void 0, e[0]];
                          }
                          return u;
                        })(t.gradation || t.steps || $.steps, w, {
                          now: h,
                          units: N,
                          round: E,
                          future: M,
                          getNextStep: !0,
                        }))
                      ) ||
                      (function (e, t) {
                        var n,
                          r,
                          i =
                            null == e
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                        if (null != i) {
                          var a = [],
                            o = !0,
                            s = !1;
                          try {
                            for (
                              i = i.call(e);
                              !(o = (n = i.next()).done) &&
                              (a.push(n.value), a.length !== t);
                              o = !0
                            );
                          } catch (e) {
                            (s = !0), (r = e);
                          } finally {
                            try {
                              o || null == i.return || i.return();
                            } finally {
                              if (s) throw r;
                            }
                          }
                          return a;
                        }
                      })(f, 3) ||
                      eC(f, 3) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    S = I[0],
                    j = I[1],
                    A = I[2],
                    T =
                      this.formatDateForStep(g, j, w, {
                        labels: p,
                        labelsType: y,
                        nowLabel: v,
                        now: h,
                        future: M,
                        round: E,
                      }) || "";
                  return n.getTimeToNextUpdate
                    ? [
                        T,
                        (function (e, t, n) {
                          var r,
                            i = n.prevStep,
                            a = n.nextStep,
                            o = n.now,
                            s = n.future,
                            l = n.round,
                            c = e.getTime ? e.getTime() : e,
                            u = function (e) {
                              return (function (e, t, n) {
                                var r = n.now,
                                  i = n.round;
                                if (R(e)) {
                                  var a,
                                    o,
                                    s,
                                    l,
                                    c = 1e3 * R(e),
                                    u = Math.abs(t - r),
                                    d = B(i)(u / c) * c;
                                  if (t > r)
                                    if (!(d > 0)) return u - d + 1;
                                    else {
                                      return (
                                        u -
                                        d +
                                        ((a = i), (o = c), (1 - Y(a)) * o + 1)
                                      );
                                    }
                                  return (
                                    -(u - d) + ((s = i), (l = c), Y(s) * l)
                                  );
                                }
                              })(e, c, { now: o, round: l });
                            },
                            d = (function (e, t, n) {
                              var r = n.now,
                                i = n.future,
                                a = n.round,
                                o = n.prevStep;
                              if (e) {
                                var s = (function (e, t, n) {
                                  var r = n.now,
                                    i = n.future,
                                    a = F(e, {
                                      timestamp: t,
                                      now: r,
                                      future: i,
                                      round: n.round,
                                      prevStep: n.prevStep,
                                    });
                                  if (void 0 !== a)
                                    if (i) return t - 1e3 * a + 1;
                                    else
                                      return 0 === a && t === r
                                        ? 31536e9
                                        : t + 1e3 * a;
                                })(e, t, {
                                  now: r,
                                  future: i,
                                  round: a,
                                  prevStep: o,
                                });
                                if (void 0 === s) return;
                                return s - r;
                              }
                              return i ? t - r + 1 : 31536e9;
                            })(s ? t : a, c, {
                              future: s,
                              now: o,
                              round: l,
                              prevStep: s ? i : t,
                            });
                          if (void 0 !== d) {
                            if (
                              t &&
                              (t.getTimeToNextUpdate &&
                                (r = t.getTimeToNextUpdate(c, {
                                  getTimeToNextUpdateForUnit: u,
                                  getRoundFunction: B,
                                  now: o,
                                  future: s,
                                  round: l,
                                })),
                              void 0 === r)
                            ) {
                              var f = t.unit || t.formatAs;
                              f && (r = u(f));
                            }
                            return void 0 === r ? d : Math.min(r, d);
                          }
                        })(g, j, {
                          nextStep: A,
                          prevStep: S,
                          now: h,
                          future: M,
                          round: E,
                        }),
                      ]
                    : T;
                },
              },
              {
                key: "formatDateForStep",
                value: function (e, t, n, r) {
                  var i = this,
                    a = r.labels,
                    o = r.labelsType,
                    s = r.nowLabel,
                    l = r.now,
                    c = r.future,
                    u = r.round;
                  if (t) {
                    if (t.format)
                      return t.format(e, this.locale, {
                        formatAs: function (e, t) {
                          return i.formatValue(t, e, { labels: a, future: c });
                        },
                        now: l,
                        future: c,
                      });
                    var d = t.unit || t.formatAs;
                    if (!d)
                      throw Error(
                        "[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(
                          JSON.stringify(t)
                        )
                      );
                    if ("now" === d) return s;
                    var f = Math.abs(n) / U(t);
                    t.granularity &&
                      (f = B(u)(f / t.granularity) * t.granularity);
                    var h = -1 * Math.sign(n) * B(u)(f);
                    switch ((0 === h && (h = c ? 0 : -0), o)) {
                      case "long":
                      case "short":
                      case "narrow":
                        return this.getFormatter(o).format(h, d);
                      default:
                        return this.formatValue(h, d, { labels: a, future: c });
                    }
                  }
                },
              },
              {
                key: "formatValue",
                value: function (e, t, n) {
                  var r = n.labels,
                    i = n.future;
                  return this.getFormattingRule(r, t, e, { future: i }).replace(
                    "{0}",
                    this.formatNumber(Math.abs(e))
                  );
                },
              },
              {
                key: "getFormattingRule",
                value: function (e, t, n, r) {
                  var i = r.future;
                  if ((this.locale, "string" == typeof (e = e[t]))) return e;
                  var a =
                    e[
                      0 === n
                        ? i
                          ? "future"
                          : "past"
                        : n < 0
                        ? "past"
                        : "future"
                    ] || e;
                  return "string" == typeof a
                    ? a
                    : a[this.getPluralRules().select(Math.abs(n))] || a.other;
                },
              },
              {
                key: "formatNumber",
                value: function (e) {
                  return this.numberFormat
                    ? this.numberFormat.format(e)
                    : String(e);
                },
              },
              {
                key: "getFormatter",
                value: function (e) {
                  return (
                    this.relativeTimeFormatCache.get(this.locale, e) ||
                    this.relativeTimeFormatCache.put(
                      this.locale,
                      e,
                      new this.IntlRelativeTimeFormat(this.locale, { style: e })
                    )
                  );
                },
              },
              {
                key: "getPluralRules",
                value: function () {
                  return (
                    this.pluralRulesCache.get(this.locale) ||
                    this.pluralRulesCache.put(
                      this.locale,
                      new this.IntlPluralRules(this.locale)
                    )
                  );
                },
              },
              {
                key: "getLabels",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  "string" == typeof e && (e = [e]),
                    (e = (e = e.map(function (e) {
                      switch (e) {
                        case "tiny":
                        case "mini-time":
                          return "mini";
                        default:
                          return e;
                      }
                    })).concat("long"));
                  for (
                    var t,
                      n = K(this.locale),
                      r = (function (e, t) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (n) return (n = n.call(e)).next.bind(n);
                        if (Array.isArray(e) || (n = eC(e))) {
                          n && (e = n);
                          var r = 0;
                          return function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          };
                        }
                        throw TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(e);
                    !(t = r()).done;

                  ) {
                    var i = t.value;
                    if (n[i]) return { labelsType: i, labels: n[i] };
                  }
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(),
        ex = "en";
      (eO.getDefaultLocale = function () {
        return ex;
      }),
        (eO.setDefaultLocale = function (e) {
          return (ex = e);
        }),
        (eO.addDefaultLocale = function (e) {
          if (t)
            return console.error(
              "[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`."
            );
          (t = !0), eO.setDefaultLocale(e.locale), eO.addLocale(e);
        }),
        (eO.addLocale = function (e) {
          V(e), C.addLocale(e);
        }),
        (eO.locale = eO.addLocale),
        (eO.addLabels = function (e, t, n) {
          var r = K(e);
          r || (V({ locale: e }), (r = K(e))), (r[t] = n);
        });
      var ez =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function e_(e, t) {
        if (e.length !== t.length) return !1;
        for (var n, r, i = 0; i < e.length; i++)
          if (!((n = e[i]) === (r = t[i]) || (ez(n) && ez(r))) && 1) return !1;
        return !0;
      }
      function eP(e) {
        return (eP =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ek() {
        return (
          ("undefined" == typeof Intl ? "undefined" : eP(Intl)) === "object" &&
          "function" == typeof Intl.DateTimeFormat
        );
      }
      function eW(e) {
        return (eW =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var eR = (function () {
          var e;
          function t() {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            this.cache = {};
          }
          return (
            (e = [
              {
                key: "get",
                value: function () {
                  for (
                    var e = this.cache,
                      t = arguments.length,
                      n = Array(t),
                      r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  for (var i = 0; i < n.length; i++) {
                    var a = n[i];
                    if ("object" !== eW(e)) return;
                    e = e[a];
                  }
                  return e;
                },
              },
              {
                key: "put",
                value: function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  for (
                    var r = t.pop(), i = t.pop(), a = this.cache, o = 0;
                    o < t.length;
                    o++
                  ) {
                    var s = t[o];
                    "object" !== eW(a[s]) && (a[s] = {}), (a = a[s]);
                  }
                  return (a[i] = r);
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(t.prototype, e),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        })(),
        eU = new eR(),
        eB = ek(),
        eY = function (e) {
          return e.toString();
        };
      let eQ = (function (e, t) {
        void 0 === t && (t = e_);
        var n = null;
        function r() {
          for (var r = [], i = 0; i < arguments.length; i++)
            r[i] = arguments[i];
          if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
          var a = e.apply(this, r);
          return (n = { lastResult: a, lastArgs: r, lastThis: this }), a;
        }
        return (
          (r.clear = function () {
            n = null;
          }),
          r
        );
      })(function (e, t) {
        if (!eB) return eY;
        var n,
          r,
          i = eF[(r = (n = e).toString())]
            ? eF[r]
            : (eF[r] = (function (e) {
                if (ek()) return Intl.DateTimeFormat.supportedLocalesOf(e)[0];
              })(n)),
          a = JSON.stringify(t),
          o =
            eU.get(String(i), a) ||
            eU.put(String(i), a, new Intl.DateTimeFormat(i, t));
        return function (e) {
          return o.format(e);
        };
      });
      var eF = {};
      function eH(e) {
        return (eH =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var eZ = new eR(),
        eG = e.i(33568);
      function eK(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      let eV = {
        instances: [],
        add: function (e) {
          var t = this,
            n = 0 === this.instances.length;
          return (
            eJ(this.instances, e),
            n && this.start(),
            {
              stop: function () {
                eX(t.instances, e), 0 === t.instances.length && t.stop();
              },
              forceUpdate: function () {
                eq(e, t.instances);
              },
            }
          );
        },
        tick: function () {
          for (var e = Date.now(); ; ) {
            var t = this.instances[0];
            if (e >= t.nextUpdateTime) eq(t, this.instances);
            else break;
          }
        },
        scheduleNextTick: function () {
          var e = this;
          this.scheduledTick = (0, eG.default)(function () {
            e.tick(), e.scheduleNextTick();
          });
        },
        start: function () {
          this.scheduleNextTick();
        },
        stop: function () {
          eG.default.cancel(this.scheduledTick);
        },
      };
      function eq(e, t) {
        var n, r, i, a;
        (i = (r =
          (function (e) {
            if (Array.isArray(e)) return e;
          })((n = e.getNextValue())) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var a = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (a.push(n.value), a.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(n, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return eK(e, 2);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return eK(e, t);
            }
          })(n, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })())[0]),
          (a = r[1]),
          e.setValue(i),
          (e.nextUpdateTime = a),
          eX(t, e),
          eJ(t, e);
      }
      function eJ(e, t) {
        var n,
          r,
          i =
            ((n = e),
            (r = t.nextUpdateTime),
            (function (e, t) {
              if (0 === e.length) return 0;
              for (var n, r = 0, i = e.length - 1; r <= i; ) {
                var a = t(e[(n = Math.floor((i + r) / 2))]);
                if (0 === a) return n;
                if (a < 0) {
                  if ((r = n + 1) > i) return r;
                } else if ((i = n - 1) < r) return r;
              }
            })(n, function (e) {
              return e.nextUpdateTime === r ? 0 : e.nextUpdateTime > r ? 1 : -1;
            }));
        e.splice(i, 0, t);
      }
      function eX(e, t) {
        var n = e.indexOf(t);
        e.splice(n, 1);
      }
      function e$(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n,
              r,
              i =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
            if (null != i) {
              var a = [],
                o = !0,
                s = !1;
              try {
                for (
                  i = i.call(e);
                  !(o = (n = i.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  o = !0
                );
              } catch (e) {
                (s = !0), (r = e);
              } finally {
                try {
                  o || null == i.return || i.return();
                } finally {
                  if (s) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return e0(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n)
              )
                return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return e0(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function e0(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var e1 = {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        },
        e4 = s.default.oneOfType,
        e2 = s.default.arrayOf,
        e3 = s.default.string,
        e5 = s.default.number,
        e6 = s.default.shape,
        e8 = s.default.func,
        e9 = e4([
          e6({ minTime: e5, formatAs: e3.isRequired }),
          e6({ test: e8, formatAs: e3.isRequired }),
          e6({ minTime: e5, format: e8.isRequired }),
          e6({ test: e8, format: e8.isRequired }),
        ]),
        e7 = e4([
          e3,
          e6({
            steps: e2(e9).isRequired,
            labels: e4([e3, e2(e3)]).isRequired,
            round: e3,
          }),
        ]),
        te = [
          "date",
          "future",
          "timeStyle",
          "round",
          "minTimeLeft",
          "locale",
          "locales",
          "formatVerboseDate",
          "verboseDateFormat",
          "updateInterval",
          "tick",
          "now",
          "timeOffset",
          "polyfill",
          "tooltip",
          "component",
          "container",
          "wrapperComponent",
          "wrapperProps",
        ];
      function tt() {
        return (tt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function tn(e) {
        var t,
          n,
          r,
          i,
          a,
          s,
          l,
          c,
          d,
          f,
          h,
          g,
          m,
          p,
          y,
          w,
          M,
          v,
          b,
          N,
          E,
          I,
          S,
          j,
          A,
          T,
          D,
          C,
          L,
          O,
          x,
          z = e.date,
          _ = e.future,
          P = e.timeStyle,
          k = e.round,
          W = e.minTimeLeft,
          R = e.locale,
          U = e.locales,
          B = e.formatVerboseDate,
          Y = e.verboseDateFormat,
          Q = e.updateInterval,
          F = e.tick,
          H = e.now,
          Z = e.timeOffset,
          G = e.polyfill,
          K = e.tooltip,
          V = e.component,
          q = void 0 === V ? u : V,
          J = e.container,
          X = e.wrapperComponent,
          $ = e.wrapperProps,
          ee = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]),
                  !(t.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]);
            }
            return i;
          })(e, te),
          et =
            ((n = (t = {
              date: z,
              future: _,
              timeStyle: P,
              round: k,
              minTimeLeft: W,
              locale: R,
              locales: void 0 === U ? [] : U,
              formatVerboseDate: B,
              verboseDateFormat: Y,
              updateInterval: Q,
              tick: F,
              now: H,
              timeOffset: Z,
              polyfill: G,
            }).date),
            (r = t.future),
            (i = t.locale),
            (a = t.locales),
            (s = t.timeStyle),
            (l = t.round),
            (c = t.minTimeLeft),
            (d = t.formatVerboseDate),
            (h = void 0 === (f = t.verboseDateFormat) ? e1 : f),
            (g = t.updateInterval),
            (p = void 0 === (m = t.tick) || m),
            (y = t.now),
            (M = void 0 === (w = t.timeOffset) ? 0 : w),
            (v = t.polyfill),
            (b = (0, o.useMemo)(
              function () {
                return i && (a = [i]), a.concat(eO.getDefaultLocale());
              },
              [i, a]
            )),
            (N = (0, o.useMemo)(
              function () {
                var e;
                return (
                  (e = String(b) + ":" + String(v)),
                  eZ.get(e) || eZ.put(e, new eO(b, { polyfill: v }))
                );
              },
              [b, v]
            )),
            (n = (0, o.useMemo)(
              function () {
                var e, t, r;
                return (t = e = n) instanceof Date ||
                  ("object" === eH((r = t)) && "function" == typeof r.getTime)
                  ? e
                  : new Date(e);
              },
              [n]
            )),
            (E = (0, o.useCallback)(
              function () {
                var e,
                  t = (y || Date.now()) - M;
                if (
                  (r && t >= n.getTime() && ((t = n.getTime()), (e = !0)),
                  void 0 !== c)
                ) {
                  var i = n.getTime() - 1e3 * c;
                  t > i && ((t = i), (e = !0));
                }
                var a = e$(
                    N.format(n, s, {
                      getTimeToNextUpdate: !0,
                      now: t,
                      future: r,
                      round: l,
                    }),
                    2
                  ),
                  o = a[0],
                  u = a[1];
                return [o, t + (u = e ? 31536e9 : g || u || 6e4)];
              },
              [n, r, s, g, l, c, N, y]
            )),
            ((I = (0, o.useRef)()).current = E),
            (j = (S = e$((0, o.useMemo)(E, []), 2))[0]),
            (A = S[1]),
            (D = (T = e$((0, o.useState)(j), 2))[0]),
            (C = T[1]),
            (L = (0, o.useRef)()),
            (0, o.useEffect)(
              function () {
                if (p)
                  return (
                    (L.current = eV.add({
                      getNextValue: function () {
                        return I.current();
                      },
                      setValue: C,
                      nextUpdateTime: A,
                    })),
                    function () {
                      return L.current.stop();
                    }
                  );
              },
              [p]
            ),
            (0, o.useEffect)(
              function () {
                L.current ? L.current.forceUpdate() : C(e$(E(), 1)[0]);
              },
              [E]
            ),
            (O = (0, o.useMemo)(
              function () {
                return eQ(b, h);
              },
              [b, h]
            )),
            (x = (0, o.useMemo)(
              function () {
                return d ? d(n) : O(n);
              },
              [n, d, O]
            )),
            { date: n, formattedDate: D, verboseDate: x }),
          en = et.date,
          er = et.verboseDate,
          ei = et.formattedDate,
          ea = o.default.createElement(
            q,
            tt({ date: en, verboseDate: er, tooltip: void 0 === K || K }, ee),
            ei
          ),
          eo = X || J;
        return eo
          ? o.default.createElement(eo, tt({}, $, { verboseDate: er }), ea)
          : ea;
      }
      tn.propTypes = {
        date: s.default.oneOfType([
          s.default.instanceOf(Date),
          s.default.number,
        ]).isRequired,
        locale: s.default.string,
        locales: s.default.arrayOf(s.default.string),
        future: s.default.bool,
        timeStyle: e7,
        round: s.default.string,
        minTimeLeft: s.default.number,
        component: s.default.elementType,
        tooltip: s.default.bool,
        formatVerboseDate: s.default.func,
        verboseDateFormat: s.default.object,
        updateInterval: s.default.oneOfType([
          s.default.number,
          s.default.arrayOf(
            s.default.shape({
              threshold: s.default.number,
              interval: s.default.number.isRequired,
            })
          ),
        ]),
        tick: s.default.bool,
        now: s.default.number,
        timeOffset: s.default.number,
        polyfill: s.default.bool,
        wrapperComponent: s.default.elementType,
        wrapperProps: s.default.object,
      };
      let tr = (tn = o.default.memo(tn)),
        ti = new Set(),
        ta = async (t) => {
          if (!ti.has(t))
            try {
              let n;
              switch (t) {
                case "en":
                  n = await e.r(461950)(e.i);
                  break;
                case "zh":
                  n = await e.r(58621)(e.i);
                  break;
                case "de":
                  n = await e.r(710659)(e.i);
                  break;
                case "nl":
                  n = await e.r(152046)(e.i);
                  break;
                case "ja":
                  n = await e.r(570363)(e.i);
                  break;
                case "ko":
                  n = await e.r(282699)(e.i);
                  break;
                case "fr":
                  n = await e.r(909929)(e.i);
                  break;
                case "es":
                  n = await e.r(916294)(e.i);
                  break;
                case "it":
                  n = await e.r(973511)(e.i);
                  break;
                case "pl":
                  n = await e.r(556577)(e.i);
                  break;
                case "ro":
                  n = await e.r(81373)(e.i);
                  break;
                case "vn":
                  n = await e.r(376972)(e.i);
                  break;
                case "sk":
                  n = await e.r(175379)(e.i);
                  break;
                case "pt":
                  n = await e.r(70266)(e.i);
                  break;
                case "tr":
                  n = await e.r(943165)(e.i);
                  break;
                case "th":
                  n = await e.r(516360)(e.i);
                  break;
                default:
                  console.warn(
                    "Unsupported locale '".concat(t, "', falling back to 'en'")
                  ),
                    (n = await e.r(461950)(e.i));
              }
              eO.addLocale(n.default), ti.add(t);
            } catch (e) {
              console.error("Failed to load time-ago locale for ".concat(t), e);
            }
        },
        to = (e) => {
          let { date: t } = e,
            r = (0, a.useLocale)(),
            [i, s] = (0, o.useState)(!1);
          return ((0, o.useEffect)(() => {
            ta(r).then(() => s(!0));
          }, [r]),
          i)
            ? (0, n.jsx)(tr, { date: new Date(t), locale: r })
            : null;
        };
      var ts = e.i(819982),
        tl = e.i(377450),
        tc = e.i(485435),
        tu = e.i(737893),
        td = e.i(972651);
      let tf = (e) => {
          let { tx: t } = e,
            i = (0, td.useTranslations)("ticker");
          return (0, n.jsx)("div", {
            className:
              "flex items-center text-xs sm:text-sm font-bold uppercase gap-2",
            children: (0, n.jsxs)("span", {
              children: [
                "[",
                t.fromAddress,
                "] ",
                i("walletBought"),
                " ",
                (0, n.jsx)("span", {
                  className: "text-primary",
                  children: (0, tu.formatWithCommas)(t.amountSold),
                }),
                " ",
                r.websiteConfig.token.symbol,
                " ",
                (0, n.jsx)(to, { date: t.timestamp }),
              ],
            }),
          });
        },
        th = () => {
          let { addToast: e } = (0, tc.useToaster)(),
            [t, r] = (0, o.useState)(!0),
            a = (0, o.useRef)(new Set()),
            { state: s } = (0, tl.usePresaleContext)(),
            { data: l } = (0, i.useQuery)({
              queryKey: ["purchase-ticker"],
              queryFn: () =>
                fetch("/api/recent-transactions").then((e) => e.json()),
              refetchInterval: 1e4,
              refetchOnReconnect: !0,
              refetchOnWindowFocus: !0,
            }),
            c = (t) => {
              e({ message: (0, n.jsx)(tf, { tx: t }), duration: 3e3 });
            };
          return (
            (0, o.useEffect)(() => {
              if (!l || !Array.isArray(l)) return;
              let e = window.innerWidth < 768 ? 4 : 12,
                n = l.filter((e) => !a.current.has(e.txHash));
              if (0 === n.length) return;
              n.forEach((e) => a.current.add(e.txHash));
              let i = n.length > e ? n.slice(0, e) : n;
              if (0 !== i.length) {
                if ((0, ts.hasCookie)("user-last-seen"))
                  try {
                    let e = new Date((0, ts.getCookie)("user-last-seen") || "");
                    if (
                      ((i = i.filter((t) => new Date(t.timestamp) > e)),
                      0 === i.length)
                    )
                      return;
                  } catch (e) {}
                i.reverse(),
                  t
                    ? (r(!1),
                      s.hasEnded ||
                        setTimeout(() => {
                          i.forEach((e) => c(e)),
                            (0, ts.setCookie)(
                              "show-initial-ticker-toast",
                              "true",
                              1
                            );
                        }, 1500))
                    : i.forEach(c),
                  (0, ts.setCookie)(
                    "user-last-seen",
                    new Date().toISOString(),
                    3
                  );
              }
            }, [l]),
            (0, n.jsx)(n.Fragment, {})
          );
        };
    },
    687861: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = function (e) {
            let {
              html: n,
              height: i = null,
              width: a = null,
              children: o,
              dataNtpc: s = "",
            } = e;
            return (
              (0, r.useEffect)(() => {
                s &&
                  performance.mark("mark_feature_usage", {
                    detail: { feature: "next-third-parties-".concat(s) },
                  });
              }, [s]),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  o,
                  n
                    ? (0, t.jsx)("div", {
                        style: {
                          height: null != i ? "".concat(i, "px") : "auto",
                          width: null != a ? "".concat(a, "px") : "auto",
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: { __html: n },
                      })
                    : null,
                ],
              })
            );
          });
        let t = e.r(150840),
          r = e.r(756253);
      }
    },
    732839: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          Object.defineProperty(n, "setAttributesFromProps", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let e = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule",
          },
          a = [
            "onLoad",
            "onReady",
            "dangerouslySetInnerHTML",
            "children",
            "onError",
            "strategy",
            "stylesheets",
          ];
        function r(e) {
          return ["async", "defer", "noModule"].includes(e);
        }
        function i(t, n) {
          for (let [i, o] of Object.entries(n)) {
            if (!n.hasOwnProperty(i) || a.includes(i) || void 0 === o) continue;
            let s = e[i] || i.toLowerCase();
            "SCRIPT" === t.tagName && r(s)
              ? (t[s] = !!o)
              : t.setAttribute(s, String(o)),
              (!1 === o ||
                ("SCRIPT" === t.tagName && r(s) && (!o || "false" === o))) &&
                (t.setAttribute(s, ""), t.removeAttribute(s));
          }
        }
        ("function" == typeof n.default ||
          ("object" == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (t.exports = n.default));
      }
    },
    175971: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(n, {
            cancelIdleCallback: function () {
              return r;
            },
            requestIdleCallback: function () {
              return e;
            },
          });
        let e =
            ("undefined" != typeof self &&
              self.requestIdleCallback &&
              self.requestIdleCallback.bind(window)) ||
            function (e) {
              let t = Date.now();
              return self.setTimeout(function () {
                e({
                  didTimeout: !1,
                  timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - t));
                  },
                });
              }, 1);
            },
          r =
            ("undefined" != typeof self &&
              self.cancelIdleCallback &&
              self.cancelIdleCallback.bind(window)) ||
            function (e) {
              return clearTimeout(e);
            };
        ("function" == typeof n.default ||
          ("object" == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (t.exports = n.default));
      }
    },
    447893: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          !(function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(n, {
            default: function () {
              return y;
            },
            handleClientScriptLoad: function () {
              return r;
            },
            initScriptLoader: function () {
              return i;
            },
          });
        let o = e.r(651948),
          s = e.r(713179),
          l = e.r(150840),
          c = o._(e.r(317317)),
          u = s._(e.r(756253)),
          d = e.r(402092),
          f = e.r(732839),
          h = e.r(175971),
          g = new Map(),
          m = new Set(),
          p = (e) => {
            let {
                src: t,
                id: n,
                onLoad: r = () => {},
                onReady: i = null,
                dangerouslySetInnerHTML: a,
                children: o = "",
                strategy: s = "afterInteractive",
                onError: l,
                stylesheets: u,
              } = e,
              d = n || t;
            if (d && m.has(d)) return;
            if (g.has(t)) {
              m.add(d), g.get(t).then(r, l);
              return;
            }
            let h = () => {
                i && i(), m.add(d);
              },
              p = document.createElement("script"),
              y = new Promise((e, t) => {
                p.addEventListener("load", function (t) {
                  e(), r && r.call(this, t), h();
                }),
                  p.addEventListener("error", function (e) {
                    t(e);
                  });
              }).catch(function (e) {
                l && l(e);
              });
            a
              ? ((p.innerHTML = a.__html || ""), h())
              : o
              ? ((p.textContent =
                  "string" == typeof o
                    ? o
                    : Array.isArray(o)
                    ? o.join("")
                    : ""),
                h())
              : t && ((p.src = t), g.set(t, y)),
              (0, f.setAttributesFromProps)(p, e),
              "worker" === s && p.setAttribute("type", "text/partytown"),
              p.setAttribute("data-nscript", s),
              u &&
                ((e) => {
                  if (c.default.preinit)
                    return e.forEach((e) => {
                      c.default.preinit(e, { as: "style" });
                    });
                  if ("undefined" != typeof window) {
                    let t = document.head;
                    e.forEach((e) => {
                      let n = document.createElement("link");
                      (n.type = "text/css"),
                        (n.rel = "stylesheet"),
                        (n.href = e),
                        t.appendChild(n);
                    });
                  }
                })(u),
              document.body.appendChild(p);
          };
        function r(e) {
          let { strategy: t = "afterInteractive" } = e;
          "lazyOnload" === t
            ? window.addEventListener("load", () => {
                (0, h.requestIdleCallback)(() => p(e));
              })
            : p(e);
        }
        function i(e) {
          e.forEach(r),
            [
              ...document.querySelectorAll(
                '[data-nscript="beforeInteractive"]'
              ),
              ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
            ].forEach((e) => {
              let t = e.id || e.getAttribute("src");
              m.add(t);
            });
        }
        function a(e) {
          let {
              id: t,
              src: n = "",
              onLoad: r = () => {},
              onReady: i = null,
              strategy: a = "afterInteractive",
              onError: o,
              stylesheets: s,
              ...f
            } = e,
            {
              updateScripts: g,
              scripts: y,
              getIsSsr: w,
              appDir: M,
              nonce: v,
            } = (0, u.useContext)(d.HeadManagerContext);
          v = f.nonce || v;
          let b = (0, u.useRef)(!1);
          (0, u.useEffect)(() => {
            let e = t || n;
            b.current || (i && e && m.has(e) && i(), (b.current = !0));
          }, [i, t, n]);
          let N = (0, u.useRef)(!1);
          if (
            ((0, u.useEffect)(() => {
              if (!N.current) {
                if ("afterInteractive" === a) p(e);
                else
                  "lazyOnload" === a &&
                    ("complete" === document.readyState
                      ? (0, h.requestIdleCallback)(() => p(e))
                      : window.addEventListener("load", () => {
                          (0, h.requestIdleCallback)(() => p(e));
                        }));
                N.current = !0;
              }
            }, [e, a]),
            ("beforeInteractive" === a || "worker" === a) &&
              (g
                ? ((y[a] = (y[a] || []).concat([
                    {
                      id: t,
                      src: n,
                      onLoad: r,
                      onReady: i,
                      onError: o,
                      ...f,
                      nonce: v,
                    },
                  ])),
                  g(y))
                : w && w()
                ? m.add(t || n)
                : w && !w() && p({ ...e, nonce: v })),
            M)
          ) {
            if (
              (s &&
                s.forEach((e) => {
                  c.default.preinit(e, { as: "style" });
                }),
              "beforeInteractive" === a)
            )
              if (!n)
                return (
                  f.dangerouslySetInnerHTML &&
                    ((f.children = f.dangerouslySetInnerHTML.__html),
                    delete f.dangerouslySetInnerHTML),
                  (0, l.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                      __html:
                        "(self.__next_s=self.__next_s||[]).push(" +
                        JSON.stringify([0, { ...f, id: t }]) +
                        ")",
                    },
                  })
                );
              else
                return (
                  c.default.preload(
                    n,
                    f.integrity
                      ? {
                          as: "script",
                          integrity: f.integrity,
                          nonce: v,
                          crossOrigin: f.crossOrigin,
                        }
                      : { as: "script", nonce: v, crossOrigin: f.crossOrigin }
                  ),
                  (0, l.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                      __html:
                        "(self.__next_s=self.__next_s||[]).push(" +
                        JSON.stringify([n, { ...f, id: t }]) +
                        ")",
                    },
                  })
                );
            "afterInteractive" === a &&
              n &&
              c.default.preload(
                n,
                f.integrity
                  ? {
                      as: "script",
                      integrity: f.integrity,
                      nonce: v,
                      crossOrigin: f.crossOrigin,
                    }
                  : { as: "script", nonce: v, crossOrigin: f.crossOrigin }
              );
          }
          return null;
        }
        Object.defineProperty(a, "__nextScript", { value: !0 });
        let y = a;
        ("function" == typeof n.default ||
          ("object" == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, "__esModule", { value: !0 }),
          Object.assign(n.default, n),
          (t.exports = n.default));
      }
    },
    396309: (e) => {
      var { m: t, e: n } = e;
      t.exports = e.r(447893);
    },
    674819: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        var r =
          (e.e && e.e.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.sendGTMEvent = void 0),
          (n.GoogleTagManager = function (e) {
            let {
              gtmId: n,
              gtmScriptUrl: r = "https://www.googletagmanager.com/gtm.js",
              dataLayerName: s = "dataLayer",
              auth: l,
              preview: c,
              dataLayer: u,
              nonce: d,
            } = e;
            o = s;
            let f = "dataLayer" !== s ? "&l=".concat(s) : "";
            return (
              (0, i.useEffect)(() => {
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-gtm" },
                });
              }, []),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(a.default, {
                    id: "_next-gtm-init",
                    dangerouslySetInnerHTML: {
                      __html:
                        "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                          .concat(
                            u
                              ? "w[l].push(".concat(JSON.stringify(u), ")")
                              : "",
                            "\n      })(window,'"
                          )
                          .concat(s, "');"),
                    },
                    nonce: d,
                  }),
                  (0, t.jsx)(a.default, {
                    id: "_next-gtm",
                    "data-ntpc": "GTM",
                    src: ""
                      .concat(r, "?id=")
                      .concat(n)
                      .concat(f)
                      .concat(l ? "&gtm_auth=".concat(l) : "")
                      .concat(
                        c ? "&gtm_preview=".concat(c, "&gtm_cookies_win=x") : ""
                      ),
                    nonce: d,
                  }),
                ],
              })
            );
          });
        let t = e.r(150840),
          i = e.r(756253),
          a = r(e.r(396309)),
          o = "dataLayer";
        n.sendGTMEvent = (e, t) => {
          let n = t || o;
          (window[n] = window[n] || []), window[n].push(e);
        };
      }
    },
    340734: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        let t;
        var r =
          (e.e && e.e.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.GoogleAnalytics = function (e) {
            let {
              gaId: n,
              debugMode: r,
              dataLayerName: s = "dataLayer",
              nonce: l,
            } = e;
            return (
              void 0 === t && (t = s),
              (0, a.useEffect)(() => {
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-ga" },
                });
              }, []),
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(o.default, {
                    id: "_next-ga-init",
                    dangerouslySetInnerHTML: {
                      __html: "\n          window['"
                        .concat(s, "'] = window['")
                        .concat(
                          s,
                          "'] || [];\n          function gtag(){window['"
                        )
                        .concat(
                          s,
                          "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                        )
                        .concat(n, "' ")
                        .concat(r ? ",{ 'debug_mode': true }" : "", ");"),
                    },
                    nonce: l,
                  }),
                  (0, i.jsx)(o.default, {
                    id: "_next-ga",
                    src: "https://www.googletagmanager.com/gtag/js?id=".concat(
                      n
                    ),
                    nonce: l,
                  }),
                ],
              })
            );
          }),
          (n.sendGAEvent = function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            if (void 0 === t)
              return void console.warn(
                "@next/third-parties: GA has not been initialized"
              );
            window[t]
              ? window[t].push(arguments)
              : console.warn(
                  "@next/third-parties: GA dataLayer ".concat(
                    t,
                    " does not exist"
                  )
                );
          });
        let i = e.r(150840),
          a = e.r(756253),
          o = r(e.r(396309));
      }
    },
    988748: (e) => {
      "use strict";
      e.s({ QueryProvider: () => z }, 988748);
      var t,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        u,
        d,
        f,
        h = e.i(150840),
        g = e.i(632859),
        m = e.i(526050),
        p = e.i(607618),
        y = e.i(70827),
        w = e.i(406371),
        M = e.i(912353),
        v = e.i(14047),
        b = e.i(502373),
        N =
          ((t = new WeakMap()),
          class extends b.Subscribable {
            build(e, t, n) {
              var r;
              let i = t.queryKey,
                a =
                  null != (r = t.queryHash)
                    ? r
                    : (0, w.hashQueryKeyByOptions)(i, t),
                o = this.get(a);
              return (
                o ||
                  ((o = new M.Query({
                    client: e,
                    queryKey: i,
                    queryHash: a,
                    options: e.defaultQueryOptions(t),
                    state: n,
                    defaultOptions: e.getQueryDefaults(i),
                  })),
                  this.add(o)),
                o
              );
            }
            add(e) {
              (0, g._)(this, t).has(e.queryHash) ||
                ((0, g._)(this, t).set(e.queryHash, e),
                this.notify({ type: "added", query: e }));
            }
            remove(e) {
              let n = (0, g._)(this, t).get(e.queryHash);
              n &&
                (e.destroy(),
                n === e && (0, g._)(this, t).delete(e.queryHash),
                this.notify({ type: "removed", query: e }));
            }
            clear() {
              v.notifyManager.batch(() => {
                this.getAll().forEach((e) => {
                  this.remove(e);
                });
              });
            }
            get(e) {
              return (0, g._)(this, t).get(e);
            }
            getAll() {
              return [...(0, g._)(this, t).values()];
            }
            find(e) {
              let t = { exact: !0, ...e };
              return this.getAll().find((e) => (0, w.matchQuery)(t, e));
            }
            findAll() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = this.getAll();
              return Object.keys(e).length > 0
                ? t.filter((t) => (0, w.matchQuery)(e, t))
                : t;
            }
            notify(e) {
              v.notifyManager.batch(() => {
                this.listeners.forEach((t) => {
                  t(e);
                });
              });
            }
            onFocus() {
              v.notifyManager.batch(() => {
                this.getAll().forEach((e) => {
                  e.onFocus();
                });
              });
            }
            onOnline() {
              v.notifyManager.batch(() => {
                this.getAll().forEach((e) => {
                  e.onOnline();
                });
              });
            }
            constructor(e = {}) {
              super(),
                (0, m._)(this, t, { writable: !0, value: void 0 }),
                (this.config = e),
                (0, p._)(this, t, new Map());
            }
          }),
        E = e.i(917402),
        I = b,
        S =
          ((n = new WeakMap()),
          (r = new WeakMap()),
          (i = new WeakMap()),
          class extends I.Subscribable {
            build(e, t, n) {
              let r = new E.Mutation({
                mutationCache: this,
                mutationId: ++(0, y._)(this, i).value,
                options: e.defaultMutationOptions(t),
                state: n,
              });
              return this.add(r), r;
            }
            add(e) {
              (0, g._)(this, n).add(e);
              let t = j(e);
              if ("string" == typeof t) {
                let n = (0, g._)(this, r).get(t);
                n ? n.push(e) : (0, g._)(this, r).set(t, [e]);
              }
              this.notify({ type: "added", mutation: e });
            }
            remove(e) {
              if ((0, g._)(this, n).delete(e)) {
                let t = j(e);
                if ("string" == typeof t) {
                  let n = (0, g._)(this, r).get(t);
                  if (n)
                    if (n.length > 1) {
                      let t = n.indexOf(e);
                      -1 !== t && n.splice(t, 1);
                    } else n[0] === e && (0, g._)(this, r).delete(t);
                }
              }
              this.notify({ type: "removed", mutation: e });
            }
            canRun(e) {
              let t = j(e);
              if ("string" != typeof t) return !0;
              {
                let n = (0, g._)(this, r).get(t),
                  i =
                    null == n
                      ? void 0
                      : n.find((e) => "pending" === e.state.status);
                return !i || i === e;
              }
            }
            runNext(e) {
              let t = j(e);
              if ("string" != typeof t) return Promise.resolve();
              {
                var n, i;
                let a =
                  null == (n = (0, g._)(this, r).get(t))
                    ? void 0
                    : n.find((t) => t !== e && t.state.isPaused);
                return null != (i = null == a ? void 0 : a.continue())
                  ? i
                  : Promise.resolve();
              }
            }
            clear() {
              v.notifyManager.batch(() => {
                (0, g._)(this, n).forEach((e) => {
                  this.notify({ type: "removed", mutation: e });
                }),
                  (0, g._)(this, n).clear(),
                  (0, g._)(this, r).clear();
              });
            }
            getAll() {
              return Array.from((0, g._)(this, n));
            }
            find(e) {
              let t = { exact: !0, ...e };
              return this.getAll().find((e) => (0, w.matchMutation)(t, e));
            }
            findAll() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return this.getAll().filter((t) => (0, w.matchMutation)(e, t));
            }
            notify(e) {
              v.notifyManager.batch(() => {
                this.listeners.forEach((t) => {
                  t(e);
                });
              });
            }
            resumePausedMutations() {
              let e = this.getAll().filter((e) => e.state.isPaused);
              return v.notifyManager.batch(() =>
                Promise.all(e.map((e) => e.continue().catch(w.noop)))
              );
            }
            constructor(e = {}) {
              super(),
                (0, m._)(this, n, { writable: !0, value: void 0 }),
                (0, m._)(this, r, { writable: !0, value: void 0 }),
                (0, m._)(this, i, { writable: !0, value: void 0 }),
                (this.config = e),
                (0, p._)(this, n, new Set()),
                (0, p._)(this, r, new Map()),
                (0, p._)(this, i, 0);
            }
          });
      function j(e) {
        var t;
        return null == (t = e.options.scope) ? void 0 : t.id;
      }
      var A = e.i(545221),
        T = e.i(785895);
      function D(e) {
        return {
          onFetch: (t, n) => {
            var r, i, a, o, s;
            let l = t.options,
              c =
                null == (a = t.fetchOptions) ||
                null == (i = a.meta) ||
                null == (r = i.fetchMore)
                  ? void 0
                  : r.direction,
              u = (null == (o = t.state.data) ? void 0 : o.pages) || [],
              d = (null == (s = t.state.data) ? void 0 : s.pageParams) || [],
              f = { pages: [], pageParams: [] },
              h = 0,
              g = async () => {
                let n = !1,
                  r = (0, w.ensureQueryFn)(t.options, t.fetchOptions),
                  i = async (e, i, a) => {
                    if (n) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let o = (() => {
                        let e = {
                          client: t.client,
                          queryKey: t.queryKey,
                          pageParam: i,
                          direction: a ? "backward" : "forward",
                          meta: t.options.meta,
                        };
                        return (
                          Object.defineProperty(e, "signal", {
                            enumerable: !0,
                            get: () => (
                              t.signal.aborted
                                ? (n = !0)
                                : t.signal.addEventListener("abort", () => {
                                    n = !0;
                                  }),
                              t.signal
                            ),
                          }),
                          e
                        );
                      })(),
                      s = await r(o),
                      { maxPages: l } = t.options,
                      c = a ? w.addToStart : w.addToEnd;
                    return {
                      pages: c(e.pages, s, l),
                      pageParams: c(e.pageParams, i, l),
                    };
                  };
                if (c && u.length) {
                  let e = "backward" === c,
                    t = { pages: u, pageParams: d },
                    n = (
                      e
                        ? function (e, t) {
                            var n;
                            let { pages: r, pageParams: i } = t;
                            return r.length > 0
                              ? null == (n = e.getPreviousPageParam)
                                ? void 0
                                : n.call(e, r[0], r, i[0], i)
                              : void 0;
                          }
                        : C
                    )(l, t);
                  f = await i(t, n, e);
                } else {
                  let t = null != e ? e : u.length;
                  do {
                    var a;
                    let e =
                      0 === h
                        ? null != (a = d[0])
                          ? a
                          : l.initialPageParam
                        : C(l, f);
                    if (h > 0 && null == e) break;
                    (f = await i(f, e)), h++;
                  } while (h < t);
                }
                return f;
              };
            t.options.persister
              ? (t.fetchFn = () => {
                  var e, r;
                  return null == (e = (r = t.options).persister)
                    ? void 0
                    : e.call(
                        r,
                        g,
                        {
                          client: t.client,
                          queryKey: t.queryKey,
                          meta: t.options.meta,
                          signal: t.signal,
                        },
                        n
                      );
                })
              : (t.fetchFn = g);
          },
        };
      }
      function C(e, t) {
        let { pages: n, pageParams: r } = t,
          i = n.length - 1;
        return n.length > 0 ? e.getNextPageParam(n[i], n, r[i], r) : void 0;
      }
      var L =
          ((a = new WeakMap()),
          (o = new WeakMap()),
          (s = new WeakMap()),
          (l = new WeakMap()),
          (c = new WeakMap()),
          (u = new WeakMap()),
          (d = new WeakMap()),
          (f = new WeakMap()),
          class {
            mount() {
              (0, y._)(this, u).value++,
                1 === (0, g._)(this, u) &&
                  ((0, p._)(
                    this,
                    d,
                    A.focusManager.subscribe(async (e) => {
                      e &&
                        (await this.resumePausedMutations(),
                        (0, g._)(this, a).onFocus());
                    })
                  ),
                  (0, p._)(
                    this,
                    f,
                    T.onlineManager.subscribe(async (e) => {
                      e &&
                        (await this.resumePausedMutations(),
                        (0, g._)(this, a).onOnline());
                    })
                  ));
            }
            unmount() {
              var e, t;
              (0, y._)(this, u).value--,
                0 === (0, g._)(this, u) &&
                  (null == (e = (0, g._)(this, d)) || e.call(this),
                  (0, p._)(this, d, void 0),
                  null == (t = (0, g._)(this, f)) || t.call(this),
                  (0, p._)(this, f, void 0));
            }
            isFetching(e) {
              return (0, g._)(this, a).findAll({
                ...e,
                fetchStatus: "fetching",
              }).length;
            }
            isMutating(e) {
              return (0, g._)(this, o).findAll({ ...e, status: "pending" })
                .length;
            }
            getQueryData(e) {
              var t;
              let n = this.defaultQueryOptions({ queryKey: e });
              return null == (t = (0, g._)(this, a).get(n.queryHash))
                ? void 0
                : t.state.data;
            }
            ensureQueryData(e) {
              let t = this.defaultQueryOptions(e),
                n = (0, g._)(this, a).build(this, t),
                r = n.state.data;
              return void 0 === r
                ? this.fetchQuery(e)
                : (e.revalidateIfStale &&
                    n.isStaleByTime((0, w.resolveStaleTime)(t.staleTime, n)) &&
                    this.prefetchQuery(t),
                  Promise.resolve(r));
            }
            getQueriesData(e) {
              return (0, g._)(this, a)
                .findAll(e)
                .map((e) => {
                  let { queryKey: t, state: n } = e;
                  return [t, n.data];
                });
            }
            setQueryData(e, t, n) {
              let r = this.defaultQueryOptions({ queryKey: e }),
                i = (0, g._)(this, a).get(r.queryHash),
                o = null == i ? void 0 : i.state.data,
                s = (0, w.functionalUpdate)(t, o);
              if (void 0 !== s)
                return (0, g._)(this, a)
                  .build(this, r)
                  .setData(s, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
              return v.notifyManager.batch(() =>
                (0, g._)(this, a)
                  .findAll(e)
                  .map((e) => {
                    let { queryKey: r } = e;
                    return [r, this.setQueryData(r, t, n)];
                  })
              );
            }
            getQueryState(e) {
              var t;
              let n = this.defaultQueryOptions({ queryKey: e });
              return null == (t = (0, g._)(this, a).get(n.queryHash))
                ? void 0
                : t.state;
            }
            removeQueries(e) {
              let t = (0, g._)(this, a);
              v.notifyManager.batch(() => {
                t.findAll(e).forEach((e) => {
                  t.remove(e);
                });
              });
            }
            resetQueries(e, t) {
              let n = (0, g._)(this, a);
              return v.notifyManager.batch(
                () => (
                  n.findAll(e).forEach((e) => {
                    e.reset();
                  }),
                  this.refetchQueries({ type: "active", ...e }, t)
                )
              );
            }
            cancelQueries(e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = { revert: !0, ...t };
              return Promise.all(
                v.notifyManager.batch(() =>
                  (0, g._)(this, a)
                    .findAll(e)
                    .map((e) => e.cancel(n))
                )
              )
                .then(w.noop)
                .catch(w.noop);
            }
            invalidateQueries(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return v.notifyManager.batch(() => {
                var n, r;
                return ((0, g._)(this, a)
                  .findAll(e)
                  .forEach((e) => {
                    e.invalidate();
                  }),
                (null == e ? void 0 : e.refetchType) === "none")
                  ? Promise.resolve()
                  : this.refetchQueries(
                      {
                        ...e,
                        type:
                          null !=
                          (r =
                            null != (n = null == e ? void 0 : e.refetchType)
                              ? n
                              : null == e
                              ? void 0
                              : e.type)
                            ? r
                            : "active",
                      },
                      t
                    );
              });
            }
            refetchQueries(e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = { ...n, cancelRefetch: null == (t = n.cancelRefetch) || t };
              return Promise.all(
                v.notifyManager.batch(() =>
                  (0, g._)(this, a)
                    .findAll(e)
                    .filter((e) => !e.isDisabled() && !e.isStatic())
                    .map((e) => {
                      let t = e.fetch(void 0, r);
                      return (
                        r.throwOnError || (t = t.catch(w.noop)),
                        "paused" === e.state.fetchStatus ? Promise.resolve() : t
                      );
                    })
                )
              ).then(w.noop);
            }
            fetchQuery(e) {
              let t = this.defaultQueryOptions(e);
              void 0 === t.retry && (t.retry = !1);
              let n = (0, g._)(this, a).build(this, t);
              return n.isStaleByTime((0, w.resolveStaleTime)(t.staleTime, n))
                ? n.fetch(t)
                : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
              return this.fetchQuery(e).then(w.noop).catch(w.noop);
            }
            fetchInfiniteQuery(e) {
              return (e.behavior = D(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
              return this.fetchInfiniteQuery(e).then(w.noop).catch(w.noop);
            }
            ensureInfiniteQueryData(e) {
              return (e.behavior = D(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
              return T.onlineManager.isOnline()
                ? (0, g._)(this, o).resumePausedMutations()
                : Promise.resolve();
            }
            getQueryCache() {
              return (0, g._)(this, a);
            }
            getMutationCache() {
              return (0, g._)(this, o);
            }
            getDefaultOptions() {
              return (0, g._)(this, s);
            }
            setDefaultOptions(e) {
              (0, p._)(this, s, e);
            }
            setQueryDefaults(e, t) {
              (0, g._)(this, l).set((0, w.hashKey)(e), {
                queryKey: e,
                defaultOptions: t,
              });
            }
            getQueryDefaults(e) {
              let t = [...(0, g._)(this, l).values()],
                n = {};
              return (
                t.forEach((t) => {
                  (0, w.partialMatchKey)(e, t.queryKey) &&
                    Object.assign(n, t.defaultOptions);
                }),
                n
              );
            }
            setMutationDefaults(e, t) {
              (0, g._)(this, c).set((0, w.hashKey)(e), {
                mutationKey: e,
                defaultOptions: t,
              });
            }
            getMutationDefaults(e) {
              let t = [...(0, g._)(this, c).values()],
                n = {};
              return (
                t.forEach((t) => {
                  (0, w.partialMatchKey)(e, t.mutationKey) &&
                    Object.assign(n, t.defaultOptions);
                }),
                n
              );
            }
            defaultQueryOptions(e) {
              if (e._defaulted) return e;
              let t = {
                ...(0, g._)(this, s).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0,
              };
              return (
                t.queryHash ||
                  (t.queryHash = (0, w.hashQueryKeyByOptions)(t.queryKey, t)),
                void 0 === t.refetchOnReconnect &&
                  (t.refetchOnReconnect = "always" !== t.networkMode),
                void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
                !t.networkMode &&
                  t.persister &&
                  (t.networkMode = "offlineFirst"),
                t.queryFn === w.skipToken && (t.enabled = !1),
                t
              );
            }
            defaultMutationOptions(e) {
              return (null == e ? void 0 : e._defaulted)
                ? e
                : {
                    ...(0, g._)(this, s).mutations,
                    ...((null == e ? void 0 : e.mutationKey) &&
                      this.getMutationDefaults(e.mutationKey)),
                    ...e,
                    _defaulted: !0,
                  };
            }
            clear() {
              (0, g._)(this, a).clear(), (0, g._)(this, o).clear();
            }
            constructor(e = {}) {
              (0, m._)(this, a, { writable: !0, value: void 0 }),
                (0, m._)(this, o, { writable: !0, value: void 0 }),
                (0, m._)(this, s, { writable: !0, value: void 0 }),
                (0, m._)(this, l, { writable: !0, value: void 0 }),
                (0, m._)(this, c, { writable: !0, value: void 0 }),
                (0, m._)(this, u, { writable: !0, value: void 0 }),
                (0, m._)(this, d, { writable: !0, value: void 0 }),
                (0, m._)(this, f, { writable: !0, value: void 0 }),
                (0, p._)(this, a, e.queryCache || new N()),
                (0, p._)(this, o, e.mutationCache || new S()),
                (0, p._)(this, s, e.defaultOptions || {}),
                (0, p._)(this, l, new Map()),
                (0, p._)(this, c, new Map()),
                (0, p._)(this, u, 0);
            }
          }),
        O = e.i(185872);
      let x = new L(),
        z = (e) => {
          let { children: t } = e;
          return (0, h.jsx)(O.QueryClientProvider, { client: x, children: t });
        };
    },
    621105: (e) => {
      "use strict";
      e.s({ default: () => i });
      var t = e.i(150840),
        n = e.i(79401),
        r = e.i(485435);
      let i = (e) => {
        let { toasts: i } = (0, r.useToaster)();
        return (0, t.jsx)("div", {
          className: (0, n.cn)(
            "fixed bottom-4 left-4 space-y-2 z-50",
            e.className
          ),
          children: i.map((r) =>
            (0, t.jsx)(
              "div",
              {
                className: (0, n.cn)(
                  "transition-all",
                  r.visible ? "animate-slide-in-up" : "animate-slide-out-up",
                  {
                    "bg-green-500": "success" === r.type,
                    "bg-red-500": "error" === r.type,
                    "bg-blue-500": "info" === r.type,
                  },
                  e.itemClassName
                ),
                children: r.message,
              },
              r.id
            )
          ),
        });
      };
    },
    601606: (e) => {
      "use strict";
      let t;
      e.s({ AppKitProvider: () => eG, useAppKit: () => eZ }, 601606);
      var n = e.i(150840),
        r = e.i(991315);
      async function i(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new r.ConnectorAlreadyConnectedError();
        try {
          var i;
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...a } = t,
            o = await n.connect(a),
            s = o.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await (null == (i = e.storage)
              ? void 0
              : i.setItem("recentConnectorId", n.id)),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: s,
                chainId: o.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: s, chainId: o.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = e.i(233349);
      let o = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => o(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => o(t)(e),
            };
          }
        },
        s = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            a = {
              setState: r,
              getState: i,
              getInitialState: () => o,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            o = (t = e(r, i, a));
          return a;
        },
        l = (e) => (e ? s(e) : s);
      var c = e.i(207698);
      e.i(391323);
      var u = e.i(724195);
      class d {
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          let i = n[0];
          this._emitter.emit(e, { uid: this.uid, ...i });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new u.EventEmitter(),
            });
        }
      }
      function f(e, t) {
        return JSON.parse(e, (e, n) => {
          var r;
          let i = n;
          return (
            (null == i ? void 0 : i.__type) === "bigint" &&
              (i = BigInt(i.value)),
            (null == i ? void 0 : i.__type) === "Map" && (i = new Map(i.value)),
            null != (r = null == t ? void 0 : t(e, i)) ? r : i
          );
        });
      }
      function h(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function g(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function m(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              i = [],
              a = [];
            return function (o, s) {
              if ("object" == typeof s)
                if (i.length) {
                  let e = g(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), a.splice(e)),
                    (a[a.length] = o);
                  let n = g(i, s);
                  if (0 !== n)
                    return r
                      ? t.call(this, o, s, h(a, n))
                      : "[ref=".concat(h(a, n), "]");
                } else (i[0] = s), (a[0] = o);
              return n ? e.call(this, o, s) : s;
            };
          })((e, n) => {
            var r;
            let i = n;
            return (
              "bigint" == typeof i &&
                (i = { __type: "bigint", value: n.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(n.entries()) }),
              null != (r = null == t ? void 0 : t(e, i)) ? r : i
            );
          }, r),
          null != n ? n : void 0
        );
      }
      function p(e) {
        let {
          deserialize: t = f,
          key: n = "wagmi",
          serialize: r = m,
          storage: i = y,
        } = e;
        function a(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...i,
          key: n,
          async getItem(e, r) {
            var o;
            let s = i.getItem("".concat(n, ".").concat(e)),
              l = await a(s);
            return l ? (null != (o = t(l)) ? o : null) : null != r ? r : null;
          },
          async setItem(e, t) {
            let o = "".concat(n, ".").concat(e);
            null === t ? await a(i.removeItem(o)) : await a(i.setItem(o, r(t)));
          },
          async removeItem(e) {
            await a(i.removeItem("".concat(n, ".").concat(e)));
          },
        };
      }
      let y = { getItem: () => null, setItem: () => {}, removeItem: () => {} },
        w = 256;
      var M = e.i(827650);
      function v(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = null == n ? void 0 : n.accounts,
          i = null == r ? void 0 : r[0],
          a = e.chains.find((e) => e.id === (null == n ? void 0 : n.chainId)),
          o = e.state.status;
        switch (o) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: a,
              chainId: null == n ? void 0 : n.chainId,
              connector: null == n ? void 0 : n.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: o,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: a,
              chainId: null == n ? void 0 : n.chainId,
              connector: null == n ? void 0 : n.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: o,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: a,
              chainId: null == n ? void 0 : n.chainId,
              connector: null == n ? void 0 : n.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: o,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: o,
            };
        }
      }
      var b = e.i(211410),
        N = e.i(864198),
        E = e.i(569103),
        I = e.i(757859),
        S = e.i(867430),
        j = e.i(468472);
      function A(e) {
        return "number" == typeof e
          ? e
          : "wei" === e
          ? 0
          : Math.abs(j.weiUnits[e]);
      }
      var T = e.i(994790),
        D = e.i(362360);
      async function C(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: i, ...a } = t,
          o = e.getClient({ chainId: r });
        return (0, S.getAction)(
          o,
          D.multicall,
          "multicall"
        )({ allowFailure: n, contracts: i, ...a });
      }
      var L = e.i(107511);
      async function O(e, t) {
        let { allowFailure: n = !0, blockNumber: r, blockTag: i, ...a } = t,
          o = t.contracts;
        try {
          let t = {};
          for (let [n, r] of o.entries()) {
            var s, l;
            let i = null != (l = r.chainId) ? l : e.state.chainId;
            t[i] || (t[i] = []),
              null == (s = t[i]) || s.push({ contract: r, index: n });
          }
          let c = (
              await Promise.all(
                Object.entries(t).map((t) => {
                  let [o, s] = t;
                  return C(e, {
                    ...a,
                    allowFailure: n,
                    blockNumber: r,
                    blockTag: i,
                    chainId: Number.parseInt(o),
                    contracts: s.map((e) => {
                      let { contract: t } = e;
                      return t;
                    }),
                  });
                })
              )
            ).flat(),
            u = Object.values(t).flatMap((e) =>
              e.map((e) => {
                let { index: t } = e;
                return t;
              })
            );
          return c.reduce((e, t, n) => (e && (e[u[n]] = t), e), []);
        } catch (a) {
          if (a instanceof T.ContractFunctionExecutionError) throw a;
          let t = () =>
            o.map((t) =>
              (function (e, t) {
                let { chainId: n, ...r } = t,
                  i = e.getClient({ chainId: n });
                return (0, S.getAction)(i, L.readContract, "readContract")(r);
              })(e, { ...t, blockNumber: r, blockTag: i })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function x(e, t) {
        var n;
        let {
          address: r,
          blockNumber: i,
          blockTag: a,
          chainId: o,
          token: s,
          unit: l = "ether",
        } = t;
        if (s)
          try {
            return await z(e, {
              balanceAddress: r,
              chainId: o,
              symbolType: "string",
              tokenAddress: s,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await z(e, {
                  balanceAddress: r,
                  chainId: o,
                  symbolType: "bytes32",
                  tokenAddress: s,
                }),
                n = (0, N.hexToString)((0, E.trim)(t.symbol, { dir: "right" }));
              return { ...t, symbol: n };
            }
            throw t;
          }
        let c = e.getClient({ chainId: o }),
          u = (0, S.getAction)(c, I.getBalance, "getBalance"),
          d = await u(
            i ? { address: r, blockNumber: i } : { address: r, blockTag: a }
          ),
          f = null != (n = e.chains.find((e) => e.id === o)) ? n : c.chain;
        return {
          decimals: f.nativeCurrency.decimals,
          formatted: (0, b.formatUnits)(d, A(l)),
          symbol: f.nativeCurrency.symbol,
          value: d,
        };
      }
      async function z(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: i,
            tokenAddress: a,
            unit: o,
          } = t,
          s = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
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
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: a,
          },
          [l, c, u] = await O(e, {
            allowFailure: !1,
            contracts: [
              { ...s, functionName: "balanceOf", args: [n], chainId: r },
              { ...s, functionName: "decimals", chainId: r },
              { ...s, functionName: "symbol", chainId: r },
            ],
          }),
          d = (0, b.formatUnits)(null != l ? l : "0", A(null != o ? o : c));
        return { decimals: c, formatted: d, symbol: u, value: l };
      }
      function _(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          let n, r;
          if (e.constructor !== t.constructor) return !1;
          if (Array.isArray(e) && Array.isArray(t)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!_(e[r], t[r])) return !1;
            return !0;
          }
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
          let i = Object.keys(e);
          if ((n = i.length) !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--; )
            if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (n && !_(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      let P = [];
      function k(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || _(P, t) ? P : ((P = t), t);
      }
      var W = e.i(936154);
      async function R(e, t) {
        let { account: n, chainId: r, ...i } = t,
          a = null != n ? n : v(e).address,
          o = e.getClient({ chainId: r });
        return (0, S.getAction)(
          o,
          W.prepareTransactionRequest,
          "prepareTransactionRequest"
        )({ ...i, ...(a ? { account: a } : {}) });
      }
      var U = e.i(341968),
        B = e.i(629393),
        Y = e.i(457885);
      async function Q(e, t) {
        let n,
          { account: r, connector: i, ...a } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, Y.getConnectorClient)(e, {
                  account: r,
                  connector: i,
                })),
          (0, S.getAction)(
            n,
            B.signMessage,
            "signMessage"
          )({ ...a, ...(r ? { account: r } : {}) })
        );
      }
      var F = e.i(631138);
      async function H(e, t) {
        var n, i;
        let { addEthereumChainParameter: a, chainId: o } = t,
          s = e.state.connections.get(
            null != (i = null == (n = t.connector) ? void 0 : n.uid)
              ? i
              : e.state.current
          );
        if (s) {
          let e = s.connector;
          if (!e.switchChain)
            throw new F.SwitchChainNotSupportedError({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: a,
            chainId: o,
          });
        }
        let l = e.chains.find((e) => e.id === o);
        if (!l) throw new r.ChainNotConfiguredError();
        return e.setState((e) => ({ ...e, chainId: o })), l;
      }
      async function Z(e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (n.connector) t = n.connector;
        else {
          let { connections: n, current: r } = e.state,
            i = n.get(r);
          t = null == i ? void 0 : i.connector;
        }
        let r = e.state.connections;
        t &&
          (await t.disconnect(),
          t.emitter.off("change", e._internal.events.change),
          t.emitter.off("disconnect", e._internal.events.disconnect),
          t.emitter.on("connect", e._internal.events.connect),
          r.delete(t.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          var i, a;
          let t = e.state.current;
          if (!t) return;
          let n =
            null == (i = e.state.connections.get(t)) ? void 0 : i.connector;
          if (!n) return;
          await (null == (a = e.storage)
            ? void 0
            : a.setItem("recentConnectorId", n.id));
        }
      }
      var G = e.i(595828);
      async function K(e, t) {
        let n,
          { chainId: r, connector: i, ...a } = t;
        n = t.account
          ? t.account
          : (
              await (0, Y.getConnectorClient)(e, {
                account: t.account,
                chainId: r,
                connector: i,
              })
            ).account;
        let o = e.getClient({ chainId: r });
        return (0, S.getAction)(
          o,
          G.estimateGas,
          "estimateGas"
        )({ ...a, account: n });
      }
      var V = e.i(35676),
        q = e.i(512477);
      async function J(e, t) {
        let n,
          { account: r, chainId: i, connector: a, ...o } = t;
        n =
          "object" == typeof r && (null == r ? void 0 : r.type) === "local"
            ? e.getClient({ chainId: i })
            : await (0, Y.getConnectorClient)(e, {
                account: null != r ? r : void 0,
                chainId: i,
                connector: a,
              });
        let s = (0, S.getAction)(n, q.writeContract, "writeContract");
        return await s({
          ...o,
          ...(r ? { account: r } : {}),
          chain: i ? { id: i } : null,
        });
      }
      var X = e.i(315573),
        $ = e.i(94874),
        ee = e.i(460029);
      async function et(e, t) {
        let { chainId: n, timeout: r = 0, ...i } = t,
          a = e.getClient({ chainId: n }),
          o = (0, S.getAction)(
            a,
            ee.waitForTransactionReceipt,
            "waitForTransactionReceipt"
          ),
          s = await o({ ...i, timeout: r });
        if ("reverted" === s.status) {
          let e = (0, S.getAction)(a, $.getTransaction, "getTransaction"),
            t = await e({ hash: s.transactionHash }),
            n = (0, S.getAction)(a, X.call, "call"),
            r = await n({
              ...t,
              data: t.input,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            (null == r ? void 0 : r.data)
              ? (0, N.hexToString)("0x".concat(r.data.substring(138)))
              : "unknown reason"
          );
        }
        return { ...s, chainId: a.chain.id };
      }
      var en = e.i(59948),
        er = e.i(831274);
      e.i(501624), e.i(350423), e.i(52164);
      var ei = e.i(159055);
      e.i(203218);
      var ea = e.i(605726),
        eo = e.i(352385),
        es = e.i(631867),
        el = e.i(737460),
        ec = e.i(527410),
        eu = e.i(488103),
        ed = e.i(28529),
        ef = e.i(398618),
        eh = e.i(6142),
        eg = e.i(508800),
        em = e.i(91819),
        ep = e.i(592677),
        ey = e.i(549798),
        ew = e.i(362168),
        eM = e.i(225335),
        ev = e.i(646559),
        eb = e.i(77217),
        eN = e.i(672142),
        eE = e.i(604320);
      e.i(969030);
      var eI = e.i(994290),
        eS = e.i(912117);
      function ej(e, t) {
        var n;
        let i,
          a,
          o,
          s,
          l,
          c,
          u,
          d = null == (n = e.isNewChainsStale) || n;
        return (0, em.createConnector)((e) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: ej.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (s || ((s = this.onConnect.bind(this)), e.on("connect", s)),
              c ||
                ((c = this.onSessionDelete.bind(this)),
                e.on("session_delete", c)));
          },
          async connect() {
            let { ...e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            try {
              var t, n, r;
              let i = es.ChainController.getCaipNetworks(),
                d = await this.getProvider();
              if (!d) throw new F.ProviderNotFoundError();
              l || ((l = this.onDisplayUri), d.on("display_uri", l));
              let f = await this.isChainsStale();
              d.session && f && (await d.disconnect());
              let h =
                el.OptionsController.state.universalProviderConfigOverride;
              if (!d.session || f) {
                let t = eS.WcHelpersUtil.createNamespaces(i, h);
                await d.connect({
                  optionalNamespaces: t,
                  ...("pairingTopic" in e
                    ? { pairingTopic: e.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(i.map((e) => Number(e.id)));
              }
              let g = await this.getAccounts(),
                m = await this.getChainId(),
                p =
                  null == (r = d.session) ||
                  null == (n = r.namespaces) ||
                  null == (t = n.eip155)
                    ? void 0
                    : t.chains,
                y =
                  null == p
                    ? void 0
                    : p.some((e) => Number(e.split(":")[1]) === m),
                w = 1;
              y
                ? (w = m)
                : (null == p ? void 0 : p[0]) &&
                  (w = Number(p[0].split(":")[1])),
                l && (d.removeListener("display_uri", l), (l = void 0)),
                s && (d.removeListener("connect", s), (s = void 0)),
                a ||
                  ((a = this.onAccountsChanged.bind(this)),
                  d.on("accountsChanged", a)),
                o ||
                  ((o = this.onChainChanged.bind(this)),
                  d.on("chainChanged", o)),
                u ||
                  ((u = this.onDisconnect.bind(this)), d.on("disconnect", u)),
                c ||
                  ((c = this.onSessionDelete.bind(this)),
                  d.on("session_delete", c));
              let M = null == h ? void 0 : h.defaultChain;
              return (
                d.setDefaultChain(null != M ? M : "eip155:".concat(w)),
                { accounts: g, chainId: w }
              );
            } catch (e) {
              if (
                /(user rejected|connection request reset)/i.test(
                  null == e ? void 0 : e.message
                )
              )
                throw new ep.UserRejectedRequestError(e);
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
              o &&
                (null == e || e.removeListener("chainChanged", o),
                (o = void 0)),
                u &&
                  (null == e || e.removeListener("disconnect", u),
                  (u = void 0)),
                s ||
                  ((s = this.onConnect.bind(this)),
                  null == e || e.on("connect", s)),
                a &&
                  (null == e || e.removeListener("accountsChanged", a),
                  (a = void 0)),
                c &&
                  (null == e || e.removeListener("session_delete", c),
                  (c = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            var e, t, n, r;
            let i = await this.getProvider();
            if (!(null == i || null == (e = i.session) ? void 0 : e.namespaces))
              return [];
            let a =
                null == i ||
                null == (n = i.session) ||
                null == (t = n.namespaces[ea.ConstantsUtil.CHAIN.EVM])
                  ? void 0
                  : t.accounts,
              o =
                null != (r = null == a ? void 0 : a.map((e) => e.split(":")[2]))
                  ? r
                  : [],
              s = new Set();
            return o.filter((e) => {
              let t = null == e ? void 0 : e.toLowerCase();
              return !s.has(t) && (s.add(t), !0);
            });
          },
          async getProvider() {
            var e, n;
            let { chainId: r } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            i ||
              null == (i = await t.getUniversalProvider()) ||
              i.events.setMaxListeners(1 / 0);
            let a = ec.StorageUtil.getActiveNamespace(),
              o = null == (e = t.getCaipNetwork()) ? void 0 : e.id;
            if (r && o !== r && a) {
              let e = ec.StorageUtil.getStoredActiveCaipNetworkId(),
                r = a ? t.getCaipNetworks(a) : [],
                i = null == r ? void 0 : r.find((t) => t.id === e);
              i &&
                i.chainNamespace === ea.ConstantsUtil.CHAIN.EVM &&
                (await (null == (n = this.switchChain)
                  ? void 0
                  : n.call(this, { chainId: Number(i.id) })));
            }
            return i;
          },
          async getChainId() {
            var e, n, r, i;
            let a =
              null == (e = t.getCaipNetwork(ea.ConstantsUtil.CHAIN.EVM))
                ? void 0
                : e.id;
            if (a) return a;
            let o =
                null == (i = (await this.getProvider()).session) ||
                null == (r = i.namespaces[ea.ConstantsUtil.CHAIN.EVM]) ||
                null == (n = r.chains)
                  ? void 0
                  : n[0],
              s = es.ChainController.getCaipNetworks().find((e) => e.id === o);
            return null == s ? void 0 : s.id;
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
          async switchChain(t) {
            let { addEthereumChainParameter: n, chainId: i } = t,
              a = await this.getProvider();
            if (!a) throw new F.ProviderNotFoundError();
            let o = es.ChainController.getCaipNetworks().find(
              (e) => e.id === i
            );
            if (!o)
              throw new ep.SwitchChainError(new r.ChainNotConfiguredError());
            try {
              await a.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, eI.numberToHex)(i) }],
              }),
                (null == o ? void 0 : o.caipNetworkId) &&
                  a.setDefaultChain(null == o ? void 0 : o.caipNetworkId),
                e.emitter.emit("change", { chainId: Number(i) });
              let t = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...t, i]), { ...o, id: o.id };
            } catch (e) {
              if (/(?:user rejected)/iu.test(e.message))
                throw new ep.UserRejectedRequestError(e);
              try {
                var s, l, c, u;
                let e;
                e = (null == n ? void 0 : n.blockExplorerUrls)
                  ? n.blockExplorerUrls
                  : (null == (c = o.blockExplorers) ? void 0 : c.default.url)
                  ? [null == (u = o.blockExplorers) ? void 0 : u.default.url]
                  : [];
                let t =
                    (null == (l = o.rpcUrls) || null == (s = l.chainDefault)
                      ? void 0
                      : s.http) || [],
                  r = {
                    blockExplorerUrls: e,
                    chainId: (0, eI.numberToHex)(i),
                    chainName: o.name,
                    iconUrls: null == n ? void 0 : n.iconUrls,
                    nativeCurrency: o.nativeCurrency,
                    rpcUrls: t,
                  };
                await a.request({
                  method: "wallet_addEthereumChain",
                  params: [r],
                });
                let d = await this.getRequestedChainsIds();
                return (
                  this.setRequestedChainsIds([...d, i]), { ...o, id: o.id }
                );
              } catch (e) {
                throw new ep.UserRejectedRequestError(e);
              }
            }
          },
          onAccountsChanged(t) {
            0 === t.length
              ? this.onDisconnect()
              : e.emitter.emit("change", {
                  accounts: t.map((e) => (0, ey.getAddress)(e)),
                });
          },
          onChainChanged(t) {
            let n = Number(t);
            e.emitter.emit("change", { chainId: n });
          },
          onConnect(e) {
            this.setRequestedChainsIds(
              es.ChainController.getCaipNetworks().map((e) => Number(e.id))
            );
          },
          async onDisconnect(t) {
            this.setRequestedChainsIds([]), e.emitter.emit("disconnect");
            let n = await this.getProvider();
            a && (n.removeListener("accountsChanged", a), (a = void 0)),
              o && (n.removeListener("chainChanged", o), (o = void 0)),
              u && (n.removeListener("disconnect", u), (u = void 0)),
              c && (n.removeListener("session_delete", c), (c = void 0)),
              s || ((s = this.onConnect.bind(this)), n.on("connect", s));
          },
          onDisplayUri(t) {
            e.emitter.emit("message", { type: "display_uri", data: t });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds() {
            var e, t, n, r;
            if (!(null == i || null == (e = i.session) ? void 0 : e.namespaces))
              return [];
            let a =
              null == i ||
              null == (n = i.session) ||
              null == (t = n.namespaces[ea.ConstantsUtil.CHAIN.EVM])
                ? void 0
                : t.accounts;
            return null !=
              (r =
                null == a
                  ? void 0
                  : a.map((e) => {
                      var t;
                      return Number.parseInt(
                        null != (t = e.split(":")[1]) ? t : ""
                      );
                    }))
              ? r
              : [];
          },
          async getRequestedChainsIds() {
            var t, n;
            return [
              ...new Set(
                null !=
                (n = await (null == (t = e.storage)
                  ? void 0
                  : t.getItem(this.requestedChainsStorageKey)))
                  ? n
                  : []
              ),
            ];
          },
          async isChainsStale() {
            if (!d) return !1;
            let t = e.chains.map((e) => e.id),
              n = this.getNamespaceChainsIds();
            if (n.length && !n.some((e) => t.includes(e))) return !1;
            let r = await this.getRequestedChainsIds();
            return !t.every((e) => r.includes(Number(e)));
          },
          async setRequestedChainsIds(t) {
            var n;
            await (null == (n = e.storage)
              ? void 0
              : n.setItem(this.requestedChainsStorageKey, t));
          },
          get requestedChainsStorageKey() {
            return "".concat(this.id, ".requestedChains");
          },
        }));
      }
      ej.type = "walletConnect";
      var eA = e.i(861600),
        eT = e.i(24732);
      let eD = (0, eA.proxy)({ pendingTransactions: 0 }),
        eC = {
          state: eD,
          subscribeKey: (e, t) => (0, eT.subscribeKey)(eD, e, t),
          increase(e) {
            eD[e] += 1;
          },
          decrease(e) {
            eD[e] -= 1;
          },
          reset(e) {
            eD[e] = 0;
          },
        };
      async function eL(t) {
        if (ei.CoreHelperUtil.isSafeApp()) {
          let { safe: n } = await e.r(163766)(e.i);
          if (n && !t.some((e) => "safe" === e.type)) return n();
        }
        return null;
      }
      async function eO(t) {
        try {
          let { coinbaseWallet: n } = await e.r(163766)(e.i);
          if (n && !t.some((e) => "coinbaseWalletSDK" === e.id)) return n();
        } catch (e) {
          console.error("Failed to import Coinbase Wallet SDK:", e);
        }
        return null;
      }
      e.i(538752);
      let ex = { enable: !1, pollingInterval: 3e4 };
      class ez extends eh.AdapterBlueprint {
        construct(e) {
          this.checkChainId(), this.setupWatchers();
        }
        async getAccounts(e) {
          var t;
          let n = this.getWagmiConnector(e.id);
          if (!n) return { accounts: [] };
          if (n.id === ea.ConstantsUtil.CONNECTOR_ID.AUTH) {
            let e = await n.getProvider();
            if (!(null == e ? void 0 : e.user)) return { accounts: [] };
            let { address: t, accounts: r } = e.user;
            return Promise.resolve({
              accounts: (r || [{ address: t, type: "eoa" }]).map((e) =>
                ei.CoreHelperUtil.createAccount("eip155", e.address, e.type)
              ),
            });
          }
          let { addresses: r, address: i } = v(this.wagmiConfig);
          return Promise.resolve({
            accounts:
              ((t = [...new Set(r || [i])]),
              t.map((e) =>
                ei.CoreHelperUtil.createAccount("eip155", e || "", "eoa")
              )),
          });
        }
        checkChainId() {
          let { chainId: e } = v(this.wagmiConfig);
          e && this.emit("switchNetwork", { chainId: e });
        }
        getWagmiConnector(e) {
          return this.wagmiConfig.connectors.find((t) => t.id === e);
        }
        createConfig(e) {
          var n;
          this.wagmiChains = e.networks.filter(
            (e) => e.chainNamespace === ea.ConstantsUtil.CHAIN.EVM
          );
          let i = {},
            s = [...(null != (n = e.connectors) ? n : [])];
          this.wagmiChains.forEach((t) => {
            var n, r;
            let a = null == (n = e.transports) ? void 0 : n[t.id],
              o = eu.CaipNetworksUtil.getCaipNetworkId(t);
            a
              ? (i[t.id] = eu.CaipNetworksUtil.extendWagmiTransports(
                  t,
                  e.projectId,
                  a
                ))
              : (i[t.id] = eu.CaipNetworksUtil.getViemTransport(
                  t,
                  e.projectId,
                  null == (r = e.customRpcUrls) ? void 0 : r[o]
                ));
          }),
            (this.wagmiConfig = (function (e) {
              var n;
              let i,
                s,
                u,
                {
                  multiInjectedProviderDiscovery: f = !0,
                  storage: h = p({
                    storage: (function () {
                      let e =
                        "undefined" != typeof window && window.localStorage
                          ? window.localStorage
                          : y;
                      return {
                        getItem: (t) => e.getItem(t),
                        removeItem(t) {
                          e.removeItem(t);
                        },
                        setItem(t, n) {
                          try {
                            e.setItem(t, n);
                          } catch (e) {}
                        },
                      };
                    })(),
                  }),
                  syncConnectedChain: g = !0,
                  ssr: m = !1,
                  ...v
                } = e,
                b =
                  "undefined" != typeof window && f
                    ? (function () {
                        let e = new Set(),
                          t = [],
                          n = () =>
                            (function (e) {
                              if ("undefined" == typeof window) return;
                              let t = (t) => e(t.detail);
                              return (
                                window.addEventListener(
                                  "eip6963:announceProvider",
                                  t
                                ),
                                window.dispatchEvent(
                                  new CustomEvent("eip6963:requestProvider")
                                ),
                                () =>
                                  window.removeEventListener(
                                    "eip6963:announceProvider",
                                    t
                                  )
                              );
                            })((n) => {
                              t.some((e) => {
                                let { info: t } = e;
                                return t.uuid === n.info.uuid;
                              }) ||
                                ((t = [...t, n]),
                                e.forEach((e) => e(t, { added: [n] })));
                            }),
                          r = n();
                        return {
                          _listeners: () => e,
                          clear() {
                            e.forEach((e) => e([], { removed: [...t] })),
                              (t = []);
                          },
                          destroy() {
                            this.clear(), e.clear(), null == r || r();
                          },
                          findProvider(e) {
                            let { rdns: n } = e;
                            return t.find((e) => e.info.rdns === n);
                          },
                          getProviders: () => t,
                          reset() {
                            this.clear(), null == r || r(), (r = n());
                          },
                          subscribe(n) {
                            let { emitImmediately: r } =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return (
                              e.add(n),
                              r && n(t, { added: t }),
                              () => e.delete(n)
                            );
                          },
                        };
                      })()
                    : void 0,
                N = l(() => v.chains),
                E = l(() => {
                  var e;
                  let t = [],
                    n = new Set();
                  for (let r of null != (e = v.connectors) ? e : []) {
                    let e = I(r);
                    if ((t.push(e), !m && e.rdns))
                      for (let t of "string" == typeof e.rdns
                        ? [e.rdns]
                        : e.rdns)
                        n.add(t);
                  }
                  if (!m && b)
                    for (let e of b.getProviders())
                      n.has(e.info.rdns) || t.push(I(S(e)));
                  return t;
                });
              function I(e) {
                var n;
                let r = new d(
                    (function () {
                      let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 11;
                      if (!t || w + e > 512) {
                        (t = ""), (w = 0);
                        for (let e = 0; e < 256; e++)
                          t += ((256 + 256 * Math.random()) | 0)
                            .toString(16)
                            .substring(1);
                      }
                      return t.substring(w, w++ + e);
                    })()
                  ),
                  i = {
                    ...e({
                      emitter: r,
                      chains: N.getState(),
                      storage: h,
                      transports: v.transports,
                    }),
                    emitter: r,
                    uid: r.uid,
                  };
                return (
                  r.on("connect", O), null == (n = i.setup) || n.call(i), i
                );
              }
              function S(e) {
                let { info: t } = e,
                  n = e.provider;
                return (0, c.injected)({
                  target: { ...t, id: t.rdns, provider: n },
                });
              }
              let j = new Map();
              function A() {
                return {
                  chainId: N.getState()[0].id,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                };
              }
              let T = "0.0.0-canary-";
              i = M.version.startsWith(T)
                ? Number.parseInt(M.version.replace(T, ""))
                : Number.parseInt(
                    null != (n = M.version.split(".")[0]) ? n : "0"
                  );
              let D = l(
                ((u = h
                  ? ((s = {
                      migrate(e, t) {
                        if (t === i) return e;
                        let n = A(),
                          r = C(e, n.chainId);
                        return { ...n, chainId: r };
                      },
                      name: "store",
                      partialize: (e) => ({
                        connections: {
                          __type: "Map",
                          value: Array.from(e.connections.entries()).map(
                            (e) => {
                              let [t, n] = e,
                                {
                                  id: r,
                                  name: i,
                                  type: a,
                                  uid: o,
                                } = n.connector;
                              return [
                                t,
                                {
                                  ...n,
                                  connector: {
                                    id: r,
                                    name: i,
                                    type: a,
                                    uid: o,
                                  },
                                },
                              ];
                            }
                          ),
                        },
                        chainId: e.chainId,
                        current: e.current,
                      }),
                      merge(e, t) {
                        "object" == typeof e &&
                          e &&
                          "status" in e &&
                          delete e.status;
                        let n = C(e, t.chainId);
                        return { ...t, ...e, chainId: n };
                      },
                      skipHydration: m,
                      storage: h,
                      version: i,
                    }),
                    (e, t, n) => {
                      let r,
                        i = {
                          storage: (function (e, t) {
                            let n;
                            try {
                              n = e();
                            } catch (e) {
                              return;
                            }
                            return {
                              getItem: (e) => {
                                var t;
                                let r = (e) =>
                                    null === e ? null : JSON.parse(e, void 0),
                                  i = null != (t = n.getItem(e)) ? t : null;
                                return i instanceof Promise ? i.then(r) : r(i);
                              },
                              setItem: (e, t) =>
                                n.setItem(e, JSON.stringify(t, void 0)),
                              removeItem: (e) => n.removeItem(e),
                            };
                          })(() => localStorage),
                          partialize: (e) => e,
                          version: 0,
                          merge: (e, t) => ({ ...t, ...e }),
                          ...s,
                        },
                        a = !1,
                        l = new Set(),
                        c = new Set(),
                        u = i.storage;
                      if (!u)
                        return A(
                          function () {
                            for (
                              var t = arguments.length, n = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              n[r] = arguments[r];
                            console.warn(
                              "[zustand persist middleware] Unable to update item '".concat(
                                i.name,
                                "', the given storage is currently unavailable."
                              )
                            ),
                              e(...n);
                          },
                          t,
                          n
                        );
                      let d = () => {
                          let e = i.partialize({ ...t() });
                          return u.setItem(i.name, {
                            state: e,
                            version: i.version,
                          });
                        },
                        f = n.setState;
                      n.setState = (e, t) => {
                        f(e, t), d();
                      };
                      let h = A(
                        function () {
                          for (
                            var t = arguments.length, n = Array(t), r = 0;
                            r < t;
                            r++
                          )
                            n[r] = arguments[r];
                          e(...n), d();
                        },
                        t,
                        n
                      );
                      n.getInitialState = () => h;
                      let g = () => {
                        var n, s;
                        if (!u) return;
                        (a = !1),
                          l.forEach((e) => {
                            var n;
                            return e(null != (n = t()) ? n : h);
                          });
                        let f =
                          (null == (s = i.onRehydrateStorage)
                            ? void 0
                            : s.call(i, null != (n = t()) ? n : h)) || void 0;
                        return o(u.getItem.bind(u))(i.name)
                          .then((e) => {
                            if (e)
                              if (
                                "number" != typeof e.version ||
                                e.version === i.version
                              )
                                return [!1, e.state];
                              else {
                                if (i.migrate)
                                  return [!0, i.migrate(e.state, e.version)];
                                console.error(
                                  "State loaded from storage couldn't be migrated since no migrate function was provided"
                                );
                              }
                            return [!1, void 0];
                          })
                          .then((n) => {
                            var a;
                            let [o, s] = n;
                            if (
                              (e(
                                (r = i.merge(s, null != (a = t()) ? a : h)),
                                !0
                              ),
                              o)
                            )
                              return d();
                          })
                          .then(() => {
                            null == f || f(r, void 0),
                              (r = t()),
                              (a = !0),
                              c.forEach((e) => e(r));
                          })
                          .catch((e) => {
                            null == f || f(void 0, e);
                          });
                      };
                      return (
                        (n.persist = {
                          setOptions: (e) => {
                            (i = { ...i, ...e }), e.storage && (u = e.storage);
                          },
                          clearStorage: () => {
                            null == u || u.removeItem(i.name);
                          },
                          getOptions: () => i,
                          rehydrate: () => g(),
                          hasHydrated: () => a,
                          onHydrate: (e) => (
                            l.add(e),
                            () => {
                              l.delete(e);
                            }
                          ),
                          onFinishHydration: (e) => (
                            c.add(e),
                            () => {
                              c.delete(e);
                            }
                          ),
                        }),
                        i.skipHydration || g(),
                        r || h
                      );
                    })
                  : A),
                (e, t, n) => {
                  let r = n.subscribe;
                  return (
                    (n.subscribe = (e, t, i) => {
                      let a = e;
                      if (t) {
                        let r =
                            (null == i ? void 0 : i.equalityFn) || Object.is,
                          o = e(n.getState());
                        (a = (n) => {
                          let i = e(n);
                          if (!r(o, i)) {
                            let e = o;
                            t((o = i), e);
                          }
                        }),
                          (null == i ? void 0 : i.fireImmediately) && t(o, o);
                      }
                      return r(a);
                    }),
                    u(e, t, n)
                  );
                })
              );
              function C(e, t) {
                return e &&
                  "object" == typeof e &&
                  "chainId" in e &&
                  "number" == typeof e.chainId &&
                  N.getState().some((t) => t.id === e.chainId)
                  ? e.chainId
                  : t;
              }
              function L(e) {
                D.setState((t) => {
                  var n, r;
                  let i = t.connections.get(e.uid);
                  return i
                    ? {
                        ...t,
                        connections: new Map(t.connections).set(e.uid, {
                          accounts: null != (n = e.accounts) ? n : i.accounts,
                          chainId: null != (r = e.chainId) ? r : i.chainId,
                          connector: i.connector,
                        }),
                      }
                    : t;
                });
              }
              function O(e) {
                "connecting" !== D.getState().status &&
                  "reconnecting" !== D.getState().status &&
                  D.setState((t) => {
                    let n = E.getState().find((t) => t.uid === e.uid);
                    return n
                      ? (n.emitter.listenerCount("connect") &&
                          n.emitter.off("connect", L),
                        n.emitter.listenerCount("change") ||
                          n.emitter.on("change", L),
                        n.emitter.listenerCount("disconnect") ||
                          n.emitter.on("disconnect", x),
                        {
                          ...t,
                          connections: new Map(t.connections).set(e.uid, {
                            accounts: e.accounts,
                            chainId: e.chainId,
                            connector: n,
                          }),
                          current: e.uid,
                          status: "connected",
                        })
                      : t;
                  });
              }
              function x(e) {
                D.setState((t) => {
                  let n = t.connections.get(e.uid);
                  if (n) {
                    let e = n.connector;
                    e.emitter.listenerCount("change") &&
                      n.connector.emitter.off("change", L),
                      e.emitter.listenerCount("disconnect") &&
                        n.connector.emitter.off("disconnect", x),
                      e.emitter.listenerCount("connect") ||
                        n.connector.emitter.on("connect", O);
                  }
                  if ((t.connections.delete(e.uid), 0 === t.connections.size))
                    return {
                      ...t,
                      connections: new Map(),
                      current: null,
                      status: "disconnected",
                    };
                  let r = t.connections.values().next().value;
                  return {
                    ...t,
                    connections: new Map(t.connections),
                    current: r.connector.uid,
                  };
                });
              }
              return (
                D.setState(A()),
                g &&
                  D.subscribe(
                    (e) => {
                      var t;
                      let { connections: n, current: r } = e;
                      return r
                        ? null == (t = n.get(r))
                          ? void 0
                          : t.chainId
                        : void 0;
                    },
                    (e) => {
                      if (N.getState().some((t) => t.id === e))
                        return D.setState((t) => ({
                          ...t,
                          chainId: null != e ? e : t.chainId,
                        }));
                    }
                  ),
                null == b ||
                  b.subscribe((e) => {
                    let t = new Set(),
                      n = new Set();
                    for (let e of E.getState())
                      if ((t.add(e.id), e.rdns))
                        for (let t of "string" == typeof e.rdns
                          ? [e.rdns]
                          : e.rdns)
                          n.add(t);
                    let r = [];
                    for (let i of e) {
                      if (n.has(i.info.rdns)) continue;
                      let e = I(S(i));
                      t.has(e.id) || r.push(e);
                    }
                    (!h || D.persist.hasHydrated()) &&
                      E.setState((e) => [...e, ...r], !0);
                  }),
                {
                  get chains() {
                    return N.getState();
                  },
                  get connectors() {
                    return E.getState();
                  },
                  storage: h,
                  getClient: function () {
                    var e, t;
                    let n,
                      i =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      o = null != (e = i.chainId) ? e : D.getState().chainId,
                      s = N.getState().find((e) => e.id === o);
                    if (i.chainId && !s) throw new r.ChainNotConfiguredError();
                    {
                      let e = j.get(D.getState().chainId);
                      if (e && !s) return e;
                      if (!s) throw new r.ChainNotConfiguredError();
                    }
                    {
                      let e = j.get(o);
                      if (e) return e;
                    }
                    if (v.client) n = v.client({ chain: s });
                    else {
                      let e = s.id,
                        r = N.getState().map((e) => e.id),
                        i = {};
                      for (let [t, n] of Object.entries(v))
                        if (
                          "chains" !== t &&
                          "client" !== t &&
                          "connectors" !== t &&
                          "transports" !== t
                        )
                          if ("object" == typeof n)
                            if (e in n) i[t] = n[e];
                            else {
                              if (r.some((e) => e in n)) continue;
                              i[t] = n;
                            }
                          else i[t] = n;
                      n = (0, a.createClient)({
                        ...i,
                        chain: s,
                        batch: null != (t = i.batch) ? t : { multicall: !0 },
                        transport: (t) =>
                          v.transports[e]({ ...t, connectors: E }),
                      });
                    }
                    return j.set(o, n), n;
                  },
                  get state() {
                    return D.getState();
                  },
                  setState(e) {
                    let t;
                    t = "function" == typeof e ? e(D.getState()) : e;
                    let n = A();
                    "object" != typeof t && (t = n),
                      Object.keys(n).some((e) => !(e in t)) && (t = n),
                      D.setState(t, !0);
                  },
                  subscribe: (e, t, n) =>
                    D.subscribe(
                      e,
                      t,
                      n ? { ...n, fireImmediately: n.emitImmediately } : void 0
                    ),
                  _internal: {
                    mipd: b,
                    store: D,
                    ssr: !!m,
                    syncConnectedChain: g,
                    transports: v.transports,
                    chains: {
                      setState(e) {
                        let t = "function" == typeof e ? e(N.getState()) : e;
                        if (0 !== t.length) return N.setState(t, !0);
                      },
                      subscribe: (e) => N.subscribe(e),
                    },
                    connectors: {
                      providerDetailToConnector: S,
                      setup: I,
                      setState: (e) =>
                        E.setState(
                          "function" == typeof e ? e(E.getState()) : e,
                          !0
                        ),
                      subscribe: (e) => E.subscribe(e),
                    },
                    events: { change: L, connect: O, disconnect: x },
                  },
                }
              );
            })({
              ...e,
              chains: this.wagmiChains,
              connectors: s,
              transports: i,
            }));
        }
        setupWatchPendingTransactions() {
          if (
            !this.pendingTransactionsFilter.enable ||
            this.unwatchPendingTransactions
          )
            return;
          this.unwatchPendingTransactions = (function (e, t) {
            let n,
              r,
              { syncConnectedChain: i = e._internal.syncConnectedChain, ...a } =
                t,
              o = (t) => {
                n && n();
                let r = e.getClient({ chainId: t });
                return (n = (0, S.getAction)(
                  r,
                  en.watchPendingTransactions,
                  "watchPendingTransactions"
                )(a));
              },
              s = o(t.chainId);
            return (
              i &&
                !t.chainId &&
                (r = e.subscribe(
                  (e) => {
                    let { chainId: t } = e;
                    return t;
                  },
                  async (e) => o(e)
                )),
              () => {
                null == s || s(), null == r || r();
              }
            );
          })(this.wagmiConfig, {
            pollingInterval: this.pendingTransactionsFilter.pollingInterval,
            onError: () => {},
            onTransactions: () => {
              this.emit("pendingTransactions"),
                eC.increase("pendingTransactions");
            },
          });
          let e = eC.subscribeKey("pendingTransactions", (t) => {
            if (t >= ea.ConstantsUtil.LIMITS.PENDING_TRANSACTIONS) {
              var n;
              null == (n = this.unwatchPendingTransactions) || n.call(this),
                e();
            }
          });
        }
        setupWatchers() {
          !(function (e, t) {
            let { onChange: n } = t;
            e.subscribe(() => v(e), n, {
              equalityFn(e, t) {
                let { connector: n, ...r } = e,
                  { connector: i, ...a } = t;
                return (
                  _(r, a) &&
                  (null == n ? void 0 : n.id) === (null == i ? void 0 : i.id) &&
                  (null == n ? void 0 : n.uid) === (null == i ? void 0 : i.uid)
                );
              },
            });
          })(this.wagmiConfig, {
            onChange: (e, t) => {
              if (
                ("disconnected" === e.status &&
                  t.address &&
                  this.emit("disconnect"),
                (null == e ? void 0 : e.chainId) &&
                  (null == e ? void 0 : e.chainId) !==
                    (null == t ? void 0 : t.chainId) &&
                  this.emit("switchNetwork", { chainId: e.chainId }),
                "connected" === e.status)
              ) {
                var n;
                let r = e.address !== (null == t ? void 0 : t.address),
                  i =
                    e.connector.id !==
                    (null == (n = t.connector) ? void 0 : n.id),
                  a = "connected" !== t.status;
                (r || i || a) &&
                  (this.setupWatchPendingTransactions(),
                  this.handleAccountChanged({
                    address: e.address,
                    chainId: e.chainId,
                    connector: e.connector,
                  }));
              }
            },
          }),
            (function (e, t) {
              let { onChange: n } = t;
              e.subscribe(() => k(e), n, { equalityFn: _ });
            })(this.wagmiConfig, {
              onChange: (e) => {
                this.clearConnections(),
                  this.addConnection(
                    ...e.map((e) => {
                      let t = this.getCaipNetworks().find(
                          (t) => t.id === e.chainId
                        ),
                        n =
                          e.connector.id === ea.ConstantsUtil.CONNECTOR_ID.AUTH;
                      return {
                        accounts: e.accounts.map((e) => ({ address: e })),
                        caipNetwork: t,
                        connectorId: e.connector.id,
                        auth: n
                          ? {
                              name: ec.StorageUtil.getConnectedSocialProvider(),
                              username:
                                ec.StorageUtil.getConnectedSocialUsername(),
                            }
                          : void 0,
                      };
                    })
                  );
              },
            });
        }
        async addThirdPartyConnectors(e) {
          let t = [];
          if (!1 !== e.enableCoinbase) {
            let e = await eO(this.wagmiConfig.connectors);
            e && t.push(e);
          }
          let n = await eL(this.wagmiConfig.connectors);
          n && t.push(n),
            await Promise.all(
              t.map((t) => {
                let n = this.wagmiConfig._internal.connectors.setup(t);
                return (
                  this.wagmiConfig._internal.connectors.setState((e) => [
                    ...e,
                    n,
                  ]),
                  this.addWagmiConnector(n, e)
                );
              })
            );
        }
        addWagmiConnectors(e, t) {
          var n, r, i, a, o;
          let s = [];
          !1 !== e.enableWalletConnect && s.push(ej(e, t)),
            !1 !== e.enableEIP6963 &&
              s.push((0, c.injected)({ shimDisconnect: !0 }));
          let l =
              null ==
                (o =
                  null == t || null == (n = t.remoteFeatures)
                    ? void 0
                    : n.email) || o,
            u =
              Array.isArray(
                null == t || null == (r = t.remoteFeatures) ? void 0 : r.socials
              ) &&
              (null == t ||
              null == (a = t.remoteFeatures) ||
              null == (i = a.socials)
                ? void 0
                : i.length) > 0;
          (l || u) &&
            s.push(
              (function (e) {
                let t,
                  n,
                  r = [];
                function i(e) {
                  return eo.NetworkUtil.parseEvmChainId(e) || 1;
                }
                async function a() {
                  let n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a = (function () {
                      if (!t) {
                        var n;
                        t = eE.W3mFrameProviderSingleton.getInstance({
                          projectId: e.options.projectId,
                          chainId:
                            null ==
                            (n = es.ChainController.getActiveCaipNetwork())
                              ? void 0
                              : n.caipNetworkId,
                          enableLogger: e.options.enableAuthLogger,
                          onTimeout: (e) => {
                            "iframe_load_failed" === e
                              ? ew.AlertController.open(
                                  eN.ErrorUtil.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                                  "error"
                                )
                              : "iframe_request_timeout" === e
                              ? ew.AlertController.open(
                                  eN.ErrorUtil.ALERT_ERRORS
                                    .IFRAME_REQUEST_TIMEOUT,
                                  "error"
                                )
                              : "unverified_domain" === e &&
                                ew.AlertController.open(
                                  eN.ErrorUtil.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                                  "error"
                                );
                          },
                          abortController:
                            eN.ErrorUtil.EmbeddedWalletAbortController,
                          getActiveCaipNetwork: (e) =>
                            es.ChainController.getActiveCaipNetwork(e),
                        });
                      }
                      return t;
                    })(),
                    o = n.chainId;
                  if (n.isReconnecting) {
                    var s;
                    let t = eo.NetworkUtil.parseEvmChainId(
                        a.getLastUsedChainId() || ""
                      ),
                      n = null == (s = e.chains) ? void 0 : s[0].id;
                    if (!(o = t || n))
                      throw Error("ChainId not found in provider");
                  }
                  let l = (0, eb.getPreferredAccountType)("eip155"),
                    {
                      address: c,
                      chainId: u,
                      accounts: d,
                    } = await ev.SIWXUtil.authConnectorAuthenticate({
                      authConnector: a,
                      chainId: o,
                      preferredAccountType: l,
                      socialUri: n.socialUri,
                      chainNamespace: ea.ConstantsUtil.CHAIN.EVM,
                    });
                  r = (null == d ? void 0 : d.map((e) => e.address)) || [c];
                  let f = i(u);
                  return {
                    accounts: r,
                    account: c,
                    chainId: f,
                    chain: { id: f, unsuported: !1 },
                  };
                }
                return (0, em.createConnector)((t) => ({
                  id: ea.ConstantsUtil.CONNECTOR_ID.AUTH,
                  name: ea.ConstantsUtil.CONNECTOR_NAMES.AUTH,
                  type: "AUTH",
                  chain: ea.ConstantsUtil.CHAIN.EVM,
                  async connect() {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    if (n) return n;
                    n ||
                      (n = new Promise((t) => {
                        t(a(e));
                      }));
                    let t = await n;
                    return (n = void 0), t;
                  },
                  async disconnect() {
                    let e = await this.getProvider();
                    await e.disconnect();
                  },
                  getAccounts: () =>
                    (null == r ? void 0 : r.length)
                      ? (t.emitter.emit("change", { accounts: r }),
                        Promise.resolve(r))
                      : Promise.resolve([]),
                  async getProvider() {
                    if (!this.provider) {
                      var t;
                      this.provider = eE.W3mFrameProviderSingleton.getInstance({
                        projectId: e.options.projectId,
                        chainId:
                          null ==
                          (t = es.ChainController.getActiveCaipNetwork())
                            ? void 0
                            : t.caipNetworkId,
                        enableLogger: e.options.enableAuthLogger,
                        abortController:
                          eN.ErrorUtil.EmbeddedWalletAbortController,
                        onTimeout: (e) => {
                          "iframe_load_failed" === e
                            ? ew.AlertController.open(
                                eN.ErrorUtil.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                                "error"
                              )
                            : "iframe_request_timeout" === e
                            ? ew.AlertController.open(
                                eN.ErrorUtil.ALERT_ERRORS
                                  .IFRAME_REQUEST_TIMEOUT,
                                "error"
                              )
                            : "unverified_domain" === e &&
                              ew.AlertController.open(
                                eN.ErrorUtil.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                                "error"
                              );
                        },
                        getActiveCaipNetwork: (e) =>
                          es.ChainController.getActiveCaipNetwork(e),
                      });
                    }
                    return Promise.resolve(this.provider);
                  },
                  async getChainId() {
                    let e = await this.getProvider(),
                      { chainId: t } = await e.getChainId();
                    return i(t);
                  },
                  async isAuthorized() {
                    let e =
                      es.ChainController.state.activeChain ===
                      ea.ConstantsUtil.CHAIN.EVM;
                    return (
                      (!ea.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(
                        (e) =>
                          eM.ConnectorController.getConnectorId(e) ===
                          ea.ConstantsUtil.CONNECTOR_ID.AUTH
                      ) ||
                        !!e) &&
                      Promise.resolve(
                        (await this.getProvider()).getLoginEmailUsed()
                      )
                    );
                  },
                  async switchChain(e) {
                    let { chainId: n } = e;
                    try {
                      var i;
                      let e = t.chains.find((e) => e.id === n);
                      if (!e)
                        throw new ep.SwitchChainError(
                          Error("chain not found on connector.")
                        );
                      let a = await this.getProvider(),
                        o = (0, eb.getPreferredAccountType)("eip155"),
                        s = await a.connect({
                          chainId: n,
                          preferredAccountType: o,
                        });
                      return (
                        (r = (null == s || null == (i = s.accounts)
                          ? void 0
                          : i.map((e) => e.address)) || [s.address]),
                        t.emitter.emit("change", {
                          chainId: Number(n),
                          accounts: r,
                        }),
                        e
                      );
                    } catch (e) {
                      if (e instanceof Error) throw new ep.SwitchChainError(e);
                      throw e;
                    }
                  },
                  onAccountsChanged(e) {
                    0 === e.length
                      ? this.onDisconnect()
                      : t.emitter.emit("change", {
                          accounts: e.map(ey.getAddress),
                        });
                  },
                  onChainChanged(e) {
                    let n = Number(e);
                    t.emitter.emit("change", { chainId: n });
                  },
                  async onDisconnect(e) {
                    let t = await this.getProvider();
                    await t.disconnect();
                  },
                }));
              })({
                chains: this.wagmiChains,
                options: {
                  projectId: e.projectId,
                  enableAuthLogger: e.enableAuthLogger,
                },
              })
            ),
            s.forEach((e) => {
              let t = this.wagmiConfig._internal.connectors.setup(e);
              this.wagmiConfig._internal.connectors.setState((e) => [...e, t]);
            });
        }
        async handleAccountChanged(e) {
          var t, n;
          let { address: r, chainId: i, connector: a } = e;
          if (!this.namespace)
            throw Error(
              "WagmiAdapter:handleAccountChanged - namespace is required"
            );
          let o = await a.getProvider().catch(() => void 0);
          this.emit("accountChanged", {
            address: r,
            chainId: i,
            connector: {
              id: a.id,
              name:
                null != (t = ef.PresetsUtil.ConnectorNamesMap[a.id])
                  ? t
                  : a.name,
              imageId: ef.PresetsUtil.ConnectorImageIds[a.id],
              type:
                null != (n = ef.PresetsUtil.ConnectorTypesMap[a.type])
                  ? n
                  : "EXTERNAL",
              info:
                a.id === ea.ConstantsUtil.CONNECTOR_ID.INJECTED
                  ? void 0
                  : { rdns: a.id },
              provider: o,
              chain: this.namespace,
              chains: [],
            },
          });
        }
        async signMessage(e) {
          try {
            return {
              signature: await Q(this.wagmiConfig, {
                message: e.message,
                account: e.address,
              }),
            };
          } catch (e) {
            throw Error("WagmiAdapter:signMessage - Sign message failed");
          }
        }
        async sendTransaction(e) {
          let { chainId: t, address: n } = v(this.wagmiConfig),
            r = {
              account: n,
              to: e.to,
              value: Number.isNaN(Number(e.value))
                ? BigInt(0)
                : BigInt(e.value),
              gas: e.gas ? BigInt(e.gas) : void 0,
              gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
              data: e.data,
              chainId: t,
              type: "legacy",
              parameters: ["nonce"],
            };
          await R(this.wagmiConfig, r);
          let i = await (0, V.sendTransaction)(this.wagmiConfig, r);
          return (
            await et(this.wagmiConfig, { hash: i, timeout: 25e3 }), { hash: i }
          );
        }
        async writeContract(e) {
          var t;
          let { caipNetwork: n, ...r } = e,
            i = Number(eo.NetworkUtil.caipNetworkIdToNumber(n.caipNetworkId));
          return {
            hash: await J(this.wagmiConfig, {
              chain: null == (t = this.wagmiChains) ? void 0 : t[i],
              chainId: i,
              address: r.tokenAddress,
              account: r.fromAddress,
              abi: r.abi,
              functionName: r.method,
              args: r.args,
              __mode: "prepared",
            }),
          };
        }
        async estimateGas(e) {
          try {
            return {
              gas: await K(this.wagmiConfig, {
                account: e.address,
                to: e.to,
                data: e.data,
                type: "legacy",
              }),
            };
          } catch (e) {
            throw Error("WagmiAdapter:estimateGas - error estimating gas");
          }
        }
        parseUnits(e) {
          return (0, er.parseUnits)(e.value, e.decimals);
        }
        formatUnits(e) {
          return (0, b.formatUnits)(e.value, e.decimals);
        }
        async addWagmiConnector(e, t) {
          var n, r, i, a;
          if (!this.namespace)
            throw Error(
              "WagmiAdapter:addWagmiConnector - namespace is required"
            );
          if (
            (e.type === ea.ConstantsUtil.CONNECTOR_ID.INJECTED &&
              !1 === t.enableEIP6963) ||
            e.id === ea.ConstantsUtil.CONNECTOR_ID.AUTH ||
            e.id === ea.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
          )
            return;
          let o = await e.getProvider().catch(() => void 0);
          this.addConnector({
            id: e.id,
            explorerId: ef.PresetsUtil.ConnectorExplorerIds[e.id],
            imageUrl:
              null !=
              (r =
                null == t || null == (n = t.connectorImages) ? void 0 : n[e.id])
                ? r
                : e.icon,
            name:
              null != (i = ef.PresetsUtil.ConnectorNamesMap[e.id]) ? i : e.name,
            imageId: ef.PresetsUtil.ConnectorImageIds[e.id],
            type:
              null != (a = ef.PresetsUtil.ConnectorTypesMap[e.type])
                ? a
                : "EXTERNAL",
            info:
              e.id === ea.ConstantsUtil.CONNECTOR_ID.INJECTED
                ? void 0
                : { rdns: e.id },
            provider: o,
            chain: this.namespace,
            chains: [],
          });
        }
        async syncConnectors(e, t) {
          !(function (e, t) {
            let { onChange: n } = t;
            e._internal.connectors.subscribe((e, t) => {
              n(Object.values(e), t);
            });
          })(this.wagmiConfig, {
            onChange: (t) => {
              t.forEach((t) => this.addWagmiConnector(t, e));
            },
          }),
            this.addWagmiConnectors(e, t),
            await Promise.all(
              this.wagmiConfig.connectors.map((t) =>
                this.addWagmiConnector(t, e)
              )
            ),
            this.addThirdPartyConnectors(e);
        }
        async syncConnections() {
          return Promise.resolve();
        }
        async syncConnection(e) {
          var t, n;
          let { id: r, chainId: a } = e,
            o = k(this.wagmiConfig).find((e) => e.connector.id === r),
            s = this.getWagmiConnector(r),
            l = await (null == s ? void 0 : s.getProvider());
          if (
            ei.CoreHelperUtil.isSafeApp() &&
            r === ea.ConstantsUtil.CONNECTOR_ID.SAFE &&
            !(null == o ? void 0 : o.accounts.length)
          ) {
            let e = this.getWagmiConnector("safe");
            if (e) {
              let t = await i(this.wagmiConfig, {
                  connector: e,
                  chainId: Number(a),
                }),
                r = await e.getProvider();
              return {
                chainId: Number(a),
                address: t.accounts[0],
                provider: r,
                type:
                  null == o || null == (n = o.connector.type)
                    ? void 0
                    : n.toUpperCase(),
                id: null == o ? void 0 : o.connector.id,
              };
            }
          }
          return {
            chainId: Number(null == o ? void 0 : o.chainId),
            address: null == o ? void 0 : o.accounts[0],
            provider: l,
            type:
              null == o || null == (t = o.connector.type)
                ? void 0
                : t.toUpperCase(),
            id: null == o ? void 0 : o.connector.id,
          };
        }
        async connectWalletConnect(e) {
          let t = this.getWalletConnectConnector();
          await t.authenticate();
          let n = this.getWagmiConnector("walletConnect");
          if (!n)
            throw Error(
              "UniversalAdapter:connectWalletConnect - connector not found"
            );
          let r = await i(this.wagmiConfig, {
            connector: n,
            chainId: e ? Number(e) : void 0,
          });
          return (
            r.chainId !== Number(e) &&
              (await H(this.wagmiConfig, { chainId: r.chainId })),
            { clientId: await t.provider.client.core.crypto.getClientId() }
          );
        }
        async connect(e) {
          var t, n, r, a, o;
          let {
              id: s,
              address: l,
              provider: c,
              type: u,
              info: d,
              chainId: f,
              socialUri: h,
            } = e,
            g = this.getWagmiConnector(s);
          if (!g)
            throw Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          c &&
            d &&
            g.id === ea.ConstantsUtil.CONNECTOR_ID.EIP6963 &&
            (null == (r = g.setEip6963Wallet) ||
              r.call(g, { provider: c, info: d }));
          let m =
            null == (n = this.wagmiConfig.state) || null == (t = n.connections)
              ? void 0
              : t.get(g.uid);
          if (m) {
            await (null == (a = this.wagmiConfig.storage)
              ? void 0
              : a.setItem("recentConnectorId", g.id));
            let e = [...m.accounts].sort((e, t) =>
              ed.HelpersUtil.isLowerCaseMatch(e, l)
                ? -1
                : +!!ed.HelpersUtil.isLowerCaseMatch(t, l)
            );
            return (
              null == (o = this.wagmiConfig) ||
                o.setState((t) => ({
                  ...t,
                  connections: new Map(t.connections).set(g.uid, {
                    accounts: e,
                    chainId: m.chainId,
                    connector: m.connector,
                  }),
                  current: g.uid,
                  status: "connected",
                })),
              { address: e[0], chainId: m.chainId, provider: c, type: u, id: s }
            );
          }
          let p = await i(this.wagmiConfig, {
            connector: g,
            chainId: f ? Number(f) : void 0,
            socialUri: h,
          });
          return {
            address: p.accounts[0],
            chainId: p.chainId,
            provider: c,
            type: u,
            id: s,
          };
        }
        get connections() {
          return Array.from(this.wagmiConfig.state.connections.values()).map(
            (e) => ({
              accounts: e.accounts.map((e) => ({ address: e })),
              connectorId: e.connector.id,
            })
          );
        }
        async reconnect(e) {
          let { id: t } = e,
            n = this.getWagmiConnector(t);
          if (!n)
            throw Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          await (0, U.reconnect)(this.wagmiConfig, { connectors: [n] });
        }
        async getBalance(e) {
          let t = e.address,
            n = this.getCaipNetworks().find((t) => t.id === e.chainId);
          if (!t) return Promise.resolve({ balance: "0.00", symbol: "ETH" });
          if (n && this.wagmiConfig) {
            let t = "".concat(n.caipNetworkId, ":").concat(e.address),
              r = this.balancePromises[t];
            if (r) return r;
            let i = ec.StorageUtil.getNativeBalanceCacheForCaipAddress(t);
            return i
              ? { balance: i.balance, symbol: i.symbol }
              : ((this.balancePromises[t] = new Promise(async (r) => {
                  try {
                    var i, a;
                    let o = Number(e.chainId),
                      s = await x(this.wagmiConfig, {
                        address: e.address,
                        chainId: o,
                        token:
                          null == (a = e.tokens) ||
                          null == (i = a[n.caipNetworkId])
                            ? void 0
                            : i.address,
                      });
                    ec.StorageUtil.updateNativeBalanceCache({
                      caipAddress: t,
                      balance: s.formatted,
                      symbol: s.symbol,
                      timestamp: Date.now(),
                    }),
                      r({ balance: s.formatted, symbol: s.symbol });
                  } catch (e) {
                    console.warn(
                      "Appkit:WagmiAdapter:getBalance - Error getting balance",
                      e
                    ),
                      r({ balance: "0.00", symbol: "ETH" });
                  }
                }).finally(() => {
                  delete this.balancePromises[t];
                })),
                this.balancePromises[t] || { balance: "0.00", symbol: "ETH" });
          }
          return { balance: "", symbol: "" };
        }
        getWalletConnectProvider() {
          var e;
          return null == (e = this.getWagmiConnector("walletConnect"))
            ? void 0
            : e.provider;
        }
        async disconnect(e) {
          if (e.id) {
            let t = this.getWagmiConnector(e.id),
              n = k(this.wagmiConfig).find((t) =>
                ed.HelpersUtil.isLowerCaseMatch(t.connector.id, e.id)
              );
            return (await Z(this.wagmiConfig, { connector: t }),
            !1 === el.OptionsController.state.enableReconnect &&
              this.deleteConnection(e.id),
            n)
              ? {
                  connections: [
                    {
                      accounts: n.accounts.map((e) => ({ address: e })),
                      connectorId: n.connector.id,
                    },
                  ],
                }
              : { connections: [] };
          }
          return this.disconnectAll();
        }
        async disconnectAll() {
          let e = k(this.wagmiConfig),
            t = await Promise.allSettled(
              e.map(async (e) => {
                let t = this.getWagmiConnector(e.connector.id);
                return t && (await Z(this.wagmiConfig, { connector: t })), e;
              })
            );
          return (
            this.wagmiConfig.state.connections.clear(),
            {
              connections: t
                .filter((e) => "fulfilled" === e.status)
                .map((e) => {
                  let { value: t } = e;
                  return {
                    accounts: t.accounts.map((e) => ({ address: e })),
                    connectorId: t.connector.id,
                  };
                }),
            }
          );
        }
        async switchNetwork(e) {
          var t, n, r, i, a, o, s, l, c, u, d, f, h, g, m, p;
          let { caipNetwork: y } = e,
            w = this.wagmiConfig.chains.find(
              (e) => e.id.toString() === y.id.toString()
            );
          await H(this.wagmiConfig, {
            chainId: y.id,
            addEthereumChainParameter: {
              chainName: null != (d = null == w ? void 0 : w.name) ? d : y.name,
              nativeCurrency:
                null != (f = null == w ? void 0 : w.nativeCurrency)
                  ? f
                  : y.nativeCurrency,
              rpcUrls: [
                null !=
                (g =
                  null !=
                  (h =
                    null == (r = y.rpcUrls) ||
                    null == (n = r.chainDefault) ||
                    null == (t = n.http)
                      ? void 0
                      : t[0])
                    ? h
                    : null == w ||
                      null == (o = w.rpcUrls) ||
                      null == (a = o.default) ||
                      null == (i = a.http)
                    ? void 0
                    : i[0])
                  ? g
                  : "",
              ],
              blockExplorerUrls: [
                null !=
                (p =
                  null !=
                  (m =
                    null == w ||
                    null == (l = w.blockExplorers) ||
                    null == (s = l.default)
                      ? void 0
                      : s.url)
                    ? m
                    : null == (u = y.blockExplorers) || null == (c = u.default)
                    ? void 0
                    : c.url)
                  ? p
                  : "",
              ],
            },
          }),
            await super.switchNetwork(e);
        }
        async getCapabilities(e) {
          var t, n;
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:getCapabilities - wagmiConfig is undefined"
            );
          let r = k(this.wagmiConfig)[0],
            i = r ? this.getWagmiConnector(r.connector.id) : null;
          if (!i)
            throw Error(
              "connectionControllerClient:getCapabilities - connector is undefined"
            );
          let a = await i.getProvider();
          if (!a)
            throw Error(
              "connectionControllerClient:getCapabilities - provider is undefined"
            );
          let o =
            null == (n = a.session) || null == (t = n.sessionProperties)
              ? void 0
              : t.capabilities;
          if (o) {
            let t = (function (e) {
              try {
                return JSON.parse(e);
              } catch (e) {
                throw Error("Error parsing wallet capabilities");
              }
            })(o)[e];
            if (t) return t;
          }
          return await a.request({
            method: "wallet_getCapabilities",
            params: [e],
          });
        }
        async grantPermissions(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:grantPermissions - wagmiConfig is undefined"
            );
          let t = k(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:grantPermissions - connector is undefined"
            );
          let r = await n.getProvider();
          if (!r)
            throw Error(
              "connectionControllerClient:grantPermissions - provider is undefined"
            );
          return r.request({ method: "wallet_grantPermissions", params: e });
        }
        async revokePermissions(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:revokePermissions - wagmiConfig is undefined"
            );
          let t = k(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:revokePermissions - connector is undefined"
            );
          let r = await n.getProvider();
          if (!r)
            throw Error(
              "connectionControllerClient:revokePermissions - provider is undefined"
            );
          return r.request({ method: "wallet_revokePermissions", params: e });
        }
        async walletGetAssets(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:walletGetAssets - wagmiConfig is undefined"
            );
          let t = k(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:walletGetAssets - connector is undefined"
            );
          let r = await n.getProvider();
          if (!r)
            throw Error(
              "connectionControllerClient:walletGetAssets - provider is undefined"
            );
          return r.request({ method: "wallet_getAssets", params: [e] });
        }
        setAuthProvider(e) {
          if (!this.namespace)
            throw Error("WagmiAdapter:setAuthProvider - namespace is required");
          this.addConnector({
            id: ea.ConstantsUtil.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: ea.ConstantsUtil.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId:
              ef.PresetsUtil.ConnectorImageIds[
                ea.ConstantsUtil.CONNECTOR_ID.AUTH
              ],
            chain: this.namespace,
            chains: [],
          });
        }
        async setUniversalProvider(e) {
          return (
            e.on("connect", () => {
              let e = k(this.wagmiConfig),
                t = this.getWagmiConnector("walletConnect");
              if (t && !e.find((e) => e.connector.id === t.id)) {
                if ("eip155" === es.ChainController.state.activeChain) return;
                (0, U.reconnect)(this.wagmiConfig, { connectors: [t] });
              }
            }),
            this.addConnector(
              new eg.WalletConnectConnector({
                provider: e,
                caipNetworks: this.getCaipNetworks(),
                namespace: "eip155",
              })
            ),
            Promise.resolve()
          );
        }
        constructor(e) {
          var t;
          let n = eu.CaipNetworksUtil.extendCaipNetworks(e.networks, {
            projectId: e.projectId,
            customNetworkImageUrls: {},
            customRpcUrls: e.customRpcUrls,
          });
          super(),
            (this.balancePromises = {}),
            (this.namespace = ea.ConstantsUtil.CHAIN.EVM),
            (this.adapterType = ea.ConstantsUtil.ADAPTER_TYPES.WAGMI),
            (this.projectId = e.projectId),
            (this.pendingTransactionsFilter = {
              ...ex,
              ...(null != (t = e.pendingTransactionsFilter) ? t : {}),
            }),
            this.createConfig({ ...e, networks: n }),
            this.checkChainId();
        }
      }
      e.i(107007);
      var e_ = e.i(631007),
        eP = e.i(724638);
      e.i(505758);
      var ek = e.i(794214),
        eW = e.i(292044),
        eR = e.i(756253),
        eU = e.i(481104);
      let eB = eW.chainConfig.appKit.projectId,
        eY = {
          name: eW.chainConfig.appKit.projectName,
          description: "",
          url: window.location.origin,
          icons: ["".concat(window.location.origin, "/icon.svg")],
        },
        eQ = new ez({
          networks: [eP.mainnet, e_.bsc],
          projectId: eB,
          ssr: !0,
          storage: p({
            storage: {
              getItem(e) {
                if ("undefined" == typeof window) return null;
                let t = (function (e, t) {
                  let n = e
                    .split("; ")
                    .find((e) => e.startsWith("".concat(t, "=")));
                  if (n) return n.substring(t.length + 1);
                })(document.cookie, e);
                return null != t ? t : null;
              },
              setItem(e, t) {
                "undefined" != typeof window &&
                  (document.cookie = ""
                    .concat(e, "=")
                    .concat(t, ";path=/;samesite=Lax"));
              },
              removeItem(e) {
                "undefined" != typeof window &&
                  (document.cookie = "".concat(e, "=;max-age=-1;path=/"));
              },
            },
          }),
          transports: {},
        }),
        eF = (0, ek.createAppKit)({
          projectId: eB,
          networks: [eP.mainnet, e_.bsc],
          adapters: [eQ],
          metadata: eY,
          features: {
            email: !1,
            socials: !1,
            swaps: !1,
            onramp: !1,
            legalCheckbox: !1,
          },
          enableWalletGuide: !0,
          excludeWalletIds: [
            "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
          ],
        }),
        eH = (0, eR.createContext)(eF),
        eZ = () => (0, eR.useContext)(eH),
        eG = (e) => {
          let { children: t } = e;
          return (0, n.jsx)(eU.WagmiProvider, {
            config: eQ.wagmiConfig,
            children: (0, n.jsx)(eH.Provider, { value: eF, children: t }),
          });
        };
    },
    938377: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.WalletWindowClosedError =
            n.WalletWindowBlockedError =
            n.WalletTimeoutError =
            n.WalletSignInError =
            n.WalletSignMessageError =
            n.WalletSignTransactionError =
            n.WalletSendTransactionError =
            n.WalletNotConnectedError =
            n.WalletKeypairError =
            n.WalletPublicKeyError =
            n.WalletAccountError =
            n.WalletDisconnectionError =
            n.WalletDisconnectedError =
            n.WalletConnectionError =
            n.WalletConfigError =
            n.WalletLoadError =
            n.WalletNotReadyError =
            n.WalletError =
              void 0);
        class e extends Error {
          constructor(e, t) {
            super(e), (this.error = t);
          }
        }
        (n.WalletError = e),
          (n.WalletNotReadyError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletNotReadyError");
            }
          }),
          (n.WalletLoadError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletLoadError");
            }
          }),
          (n.WalletConfigError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletConfigError");
            }
          }),
          (n.WalletConnectionError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletConnectionError");
            }
          }),
          (n.WalletDisconnectedError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletDisconnectedError");
            }
          }),
          (n.WalletDisconnectionError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletDisconnectionError");
            }
          }),
          (n.WalletAccountError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletAccountError");
            }
          }),
          (n.WalletPublicKeyError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletPublicKeyError");
            }
          }),
          (n.WalletKeypairError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletKeypairError");
            }
          }),
          (n.WalletNotConnectedError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletNotConnectedError");
            }
          }),
          (n.WalletSendTransactionError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletSendTransactionError");
            }
          }),
          (n.WalletSignTransactionError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletSignTransactionError");
            }
          }),
          (n.WalletSignMessageError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletSignMessageError");
            }
          }),
          (n.WalletSignInError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletSignInError");
            }
          }),
          (n.WalletTimeoutError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletTimeoutError");
            }
          }),
          (n.WalletWindowBlockedError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletWindowBlockedError");
            }
          }),
          (n.WalletWindowClosedError = class extends e {
            constructor() {
              super(...arguments), (this.name = "WalletWindowClosedError");
            }
          });
      }
    },
    180720: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        var r,
          i =
            (e.e && e.e.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, a) {
                function o(e) {
                  try {
                    l(r.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(r.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(o, s);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
          a =
            (e.e && e.e.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.BaseWalletAdapter = n.WalletReadyState = n.EventEmitter = void 0),
          (n.scopePollingDetectionStrategy = function (e) {
            if ("undefined" == typeof window || "undefined" == typeof document)
              return;
            let t = [];
            function n() {
              if (e()) for (let e of t) e();
            }
            let r = setInterval(n, 1e3);
            t.push(() => clearInterval(r)),
              "loading" === document.readyState &&
                (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
                t.push(() =>
                  document.removeEventListener("DOMContentLoaded", n)
                )),
              "complete" !== document.readyState &&
                (window.addEventListener("load", n, { once: !0 }),
                t.push(() => window.removeEventListener("load", n))),
              n();
          }),
          (n.isIosAndRedirectable = function () {
            if (!navigator) return !1;
            let e = navigator.userAgent.toLowerCase(),
              t = e.includes("iphone") || e.includes("ipad"),
              n = e.includes("safari");
            return t && n;
          });
        let t = a(e.r(139333));
        n.EventEmitter = t.default;
        let o = e.r(938377);
        !(function (e) {
          (e.Installed = "Installed"),
            (e.NotDetected = "NotDetected"),
            (e.Loadable = "Loadable"),
            (e.Unsupported = "Unsupported");
        })(r || (n.WalletReadyState = r = {}));
        class s extends t.default {
          get connected() {
            return !!this.publicKey;
          }
          autoConnect() {
            return i(this, void 0, void 0, function* () {
              yield this.connect();
            });
          }
          prepareTransaction(e, t) {
            return i(this, arguments, void 0, function* (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = this.publicKey;
              if (!r) throw new o.WalletNotConnectedError();
              return (
                (e.feePayer = e.feePayer || r),
                (e.recentBlockhash =
                  e.recentBlockhash ||
                  (yield t.getLatestBlockhash({
                    commitment: n.preflightCommitment,
                    minContextSlot: n.minContextSlot,
                  })).blockhash),
                e
              );
            });
          }
        }
        n.BaseWalletAdapter = s;
      }
    },
    816130: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isVersionedTransaction = function (e) {
          return "version" in e;
        });
    },
    693021: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        var r =
            (e.e && e.e.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, a) {
                function o(e) {
                  try {
                    l(r.next(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function s(e) {
                  try {
                    l(r.throw(e));
                  } catch (e) {
                    a(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(o, s);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (e.e && e.e.__rest) ||
            function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, r = Object.getOwnPropertySymbols(e);
                  i < r.length;
                  i++
                )
                  0 > t.indexOf(r[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                    (n[r[i]] = e[r[i]]);
              return n;
            };
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.BaseSignInMessageSignerWalletAdapter =
            n.BaseMessageSignerWalletAdapter =
            n.BaseSignerWalletAdapter =
              void 0);
        let t = e.r(180720),
          a = e.r(938377),
          o = e.r(816130);
        class s extends t.BaseWalletAdapter {
          sendTransaction(e, t) {
            return r(this, arguments, void 0, function* (e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = !0;
              try {
                if ((0, o.isVersionedTransaction)(e)) {
                  if (!this.supportedTransactionVersions)
                    throw new a.WalletSendTransactionError(
                      "Sending versioned transactions isn't supported by this wallet"
                    );
                  if (!this.supportedTransactionVersions.has(e.version))
                    throw new a.WalletSendTransactionError(
                      "Sending transaction version ".concat(
                        e.version,
                        " isn't supported by this wallet"
                      )
                    );
                  try {
                    let r = (e = yield this.signTransaction(e)).serialize();
                    return yield t.sendRawTransaction(r, n);
                  } catch (e) {
                    if (e instanceof a.WalletSignTransactionError)
                      throw ((r = !1), e);
                    throw new a.WalletSendTransactionError(
                      null == e ? void 0 : e.message,
                      e
                    );
                  }
                }
                try {
                  let { signers: r } = n,
                    a = i(n, ["signers"]);
                  (e = yield this.prepareTransaction(e, t, a)),
                    (null == r ? void 0 : r.length) && e.partialSign(...r);
                  let o = (e = yield this.signTransaction(e)).serialize();
                  return yield t.sendRawTransaction(o, a);
                } catch (e) {
                  if (e instanceof a.WalletSignTransactionError)
                    throw ((r = !1), e);
                  throw new a.WalletSendTransactionError(
                    null == e ? void 0 : e.message,
                    e
                  );
                }
              } catch (e) {
                throw (r && this.emit("error", e), e);
              }
            });
          }
          signAllTransactions(e) {
            return r(this, void 0, void 0, function* () {
              for (let t of e)
                if ((0, o.isVersionedTransaction)(t)) {
                  if (!this.supportedTransactionVersions)
                    throw new a.WalletSignTransactionError(
                      "Signing versioned transactions isn't supported by this wallet"
                    );
                  if (!this.supportedTransactionVersions.has(t.version))
                    throw new a.WalletSignTransactionError(
                      "Signing transaction version ".concat(
                        t.version,
                        " isn't supported by this wallet"
                      )
                    );
                }
              let t = [];
              for (let n of e) t.push(yield this.signTransaction(n));
              return t;
            });
          }
        }
        n.BaseSignerWalletAdapter = s;
        class l extends s {}
        (n.BaseMessageSignerWalletAdapter = l),
          (n.BaseSignInMessageSignerWalletAdapter = class extends l {});
      }
    },
    704680: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SolanaSignAndSendTransaction = void 0),
        (n.SolanaSignAndSendTransaction = "solana:signAndSendTransaction");
    },
    757118: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SolanaSignIn = void 0),
        (n.SolanaSignIn = "solana:signIn");
    },
    194762: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SolanaSignMessage = void 0),
        (n.SolanaSignMessage = "solana:signMessage");
    },
    981740: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SolanaSignTransaction = void 0),
        (n.SolanaSignTransaction = "solana:signTransaction");
    },
    491105: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SignAndSendAllTransactions = void 0),
        (n.SignAndSendAllTransactions = "solana:signAndSendAllTransactions");
    },
    967008: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        r =
          (e.e && e.e.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (e.e && e.e.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        i(e.r(704680), n),
        i(e.r(757118), n),
        i(e.r(194762), n),
        i(e.r(981740), n),
        i(e.r(491105), n);
    },
    327040: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Connect = n.StandardConnect = void 0),
        (n.StandardConnect = "standard:connect"),
        (n.Connect = n.StandardConnect);
    },
    520241: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Disconnect = n.StandardDisconnect = void 0),
        (n.StandardDisconnect = "standard:disconnect"),
        (n.Disconnect = n.StandardDisconnect);
    },
    588369: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Events = n.StandardEvents = void 0),
        (n.StandardEvents = "standard:events"),
        (n.Events = n.StandardEvents);
    },
    742230: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        r =
          (e.e && e.e.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (e.e && e.e.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        i(e.r(327040), n),
        i(e.r(520241), n),
        i(e.r(588369), n);
    },
    416723: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isWalletAdapterCompatibleStandardWallet = function (e) {
            return (
              r.StandardConnect in e.features &&
              r.StandardEvents in e.features &&
              (t.SolanaSignAndSendTransaction in e.features ||
                t.SolanaSignTransaction in e.features)
            );
          });
        let t = e.r(967008),
          r = e.r(742230);
      }
    },
    359279: (e) => {
      "use strict";
      var t,
        { m: n, e: r } = e;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WalletAdapterNetwork = void 0),
        (function (e) {
          (e.Mainnet = "mainnet-beta"),
            (e.Testnet = "testnet"),
            (e.Devnet = "devnet");
        })(t || (r.WalletAdapterNetwork = t = {}));
    },
    386886: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        r =
          (e.e && e.e.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (e.e && e.e.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        i(e.r(180720), n),
        i(e.r(938377), n),
        i(e.r(693021), n),
        i(e.r(416723), n),
        i(e.r(816130), n),
        i(e.r(359279), n);
    },
    18913: (e) => {
      var { m: t, e: n } = e;
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    676133: (e) => {
      var { m: t, e: n } = e;
      {
        let e,
          t = [
            0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532,
            581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588,
            1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034,
            3196, 3362, 3532, 3706,
          ];
        (n.getSymbolSize = function (e) {
          if (!e) throw Error('"version" cannot be null or undefined');
          if (e < 1 || e > 40)
            throw Error('"version" should be in range from 1 to 40');
          return 4 * e + 17;
        }),
          (n.getSymbolTotalCodewords = function (e) {
            return t[e];
          }),
          (n.getBCHDigit = function (e) {
            let t = 0;
            for (; 0 !== e; ) t++, (e >>>= 1);
            return t;
          }),
          (n.setToSJISFunction = function (t) {
            if ("function" != typeof t)
              throw Error('"toSJISFunc" is not a valid function.');
            e = t;
          }),
          (n.isKanjiModeEnabled = function () {
            return void 0 !== e;
          }),
          (n.toSJIS = function (t) {
            return e(t);
          });
      }
    },
    93999: (e) => {
      var { m: t, e: n } = e;
      (n.L = { bit: 1 }),
        (n.M = { bit: 0 }),
        (n.Q = { bit: 3 }),
        (n.H = { bit: 2 }),
        (n.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (n.from = function (e, t) {
          if (n.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "l":
              case "low":
                return n.L;
              case "m":
              case "medium":
                return n.M;
              case "q":
              case "quartile":
                return n.Q;
              case "h":
              case "high":
                return n.H;
              default:
                throw Error("Unknown EC Level: " + e);
            }
          } catch (e) {
            return t;
          }
        });
    },
    402299: (e) => {
      var { m: t, e: n } = e;
      function r() {
        (this.buffer = []), (this.length = 0);
      }
      (r.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let n = 0; n < t; n++)
            this.putBit(((e >>> (t - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = r);
    },
    654987: (e) => {
      var { m: t, e: n } = e;
      function r(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (r.prototype.set = function (e, t, n, r) {
        let i = e * this.size + t;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
      }),
        (r.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (r.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (r.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (t.exports = r);
    },
    636136: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(676133).getSymbolSize;
        (n.getRowColCoords = function (e) {
          if (1 === e) return [];
          let n = Math.floor(e / 7) + 2,
            r = t(e),
            i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * n - 2)),
            a = [r - 7];
          for (let e = 1; e < n - 1; e++) a[e] = a[e - 1] - i;
          return a.push(6), a.reverse();
        }),
          (n.getPositions = function (e) {
            let t = [],
              r = n.getRowColCoords(e),
              i = r.length;
            for (let e = 0; e < i; e++)
              for (let n = 0; n < i; n++)
                (0 !== e || 0 !== n) &&
                  (0 !== e || n !== i - 1) &&
                  (e !== i - 1 || 0 !== n) &&
                  t.push([r[e], r[n]]);
            return t;
          });
      }
    },
    635450: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(676133).getSymbolSize;
        n.getPositions = function (e) {
          let n = t(e);
          return [
            [0, 0],
            [n - 7, 0],
            [0, n - 7],
          ];
        };
      }
    },
    854743: (e) => {
      var { m: t, e: n } = e;
      {
        n.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        let e = { N1: 3, N2: 3, N3: 40, N4: 10 };
        (n.isValid = function (e) {
          return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
        }),
          (n.from = function (e) {
            return n.isValid(e) ? parseInt(e, 10) : void 0;
          }),
          (n.getPenaltyN1 = function (t) {
            let n = t.size,
              r = 0,
              i = 0,
              a = 0,
              o = null,
              s = null;
            for (let l = 0; l < n; l++) {
              (i = a = 0), (o = s = null);
              for (let c = 0; c < n; c++) {
                let n = t.get(l, c);
                n === o
                  ? i++
                  : (i >= 5 && (r += e.N1 + (i - 5)), (o = n), (i = 1)),
                  (n = t.get(c, l)) === s
                    ? a++
                    : (a >= 5 && (r += e.N1 + (a - 5)), (s = n), (a = 1));
              }
              i >= 5 && (r += e.N1 + (i - 5)), a >= 5 && (r += e.N1 + (a - 5));
            }
            return r;
          }),
          (n.getPenaltyN2 = function (t) {
            let n = t.size,
              r = 0;
            for (let e = 0; e < n - 1; e++)
              for (let i = 0; i < n - 1; i++) {
                let n =
                  t.get(e, i) +
                  t.get(e, i + 1) +
                  t.get(e + 1, i) +
                  t.get(e + 1, i + 1);
                (4 === n || 0 === n) && r++;
              }
            return r * e.N2;
          }),
          (n.getPenaltyN3 = function (t) {
            let n = t.size,
              r = 0,
              i = 0,
              a = 0;
            for (let e = 0; e < n; e++) {
              i = a = 0;
              for (let o = 0; o < n; o++)
                (i = ((i << 1) & 2047) | t.get(e, o)),
                  o >= 10 && (1488 === i || 93 === i) && r++,
                  (a = ((a << 1) & 2047) | t.get(o, e)),
                  o >= 10 && (1488 === a || 93 === a) && r++;
            }
            return r * e.N3;
          }),
          (n.getPenaltyN4 = function (t) {
            let n = 0,
              r = t.data.length;
            for (let e = 0; e < r; e++) n += t.data[e];
            return Math.abs(Math.ceil((100 * n) / r / 5) - 10) * e.N4;
          }),
          (n.applyMask = function (e, t) {
            let r = t.size;
            for (let i = 0; i < r; i++)
              for (let a = 0; a < r; a++)
                t.isReserved(a, i) ||
                  t.xor(
                    a,
                    i,
                    (function (e, t, r) {
                      switch (e) {
                        case n.Patterns.PATTERN000:
                          return (t + r) % 2 == 0;
                        case n.Patterns.PATTERN001:
                          return t % 2 == 0;
                        case n.Patterns.PATTERN010:
                          return r % 3 == 0;
                        case n.Patterns.PATTERN011:
                          return (t + r) % 3 == 0;
                        case n.Patterns.PATTERN100:
                          return (
                            (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0
                          );
                        case n.Patterns.PATTERN101:
                          return ((t * r) % 2) + ((t * r) % 3) == 0;
                        case n.Patterns.PATTERN110:
                          return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
                        case n.Patterns.PATTERN111:
                          return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
                        default:
                          throw Error("bad maskPattern:" + e);
                      }
                    })(e, a, i)
                  );
          }),
          (n.getBestMask = function (e, t) {
            let r = Object.keys(n.Patterns).length,
              i = 0,
              a = 1 / 0;
            for (let o = 0; o < r; o++) {
              t(o), n.applyMask(o, e);
              let r =
                n.getPenaltyN1(e) +
                n.getPenaltyN2(e) +
                n.getPenaltyN3(e) +
                n.getPenaltyN4(e);
              n.applyMask(o, e), r < a && ((a = r), (i = o));
            }
            return i;
          });
      }
    },
    876160: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(93999),
          r = [
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
          i = [
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
        (n.getBlocksCount = function (e, n) {
          switch (n) {
            case t.L:
              return r[(e - 1) * 4 + 0];
            case t.M:
              return r[(e - 1) * 4 + 1];
            case t.Q:
              return r[(e - 1) * 4 + 2];
            case t.H:
              return r[(e - 1) * 4 + 3];
            default:
              return;
          }
        }),
          (n.getTotalCodewordsCount = function (e, n) {
            switch (n) {
              case t.L:
                return i[(e - 1) * 4 + 0];
              case t.M:
                return i[(e - 1) * 4 + 1];
              case t.Q:
                return i[(e - 1) * 4 + 2];
              case t.H:
                return i[(e - 1) * 4 + 3];
              default:
                return;
            }
          });
      }
    },
    660950: (e) => {
      var { m: t, e: n } = e;
      {
        let e = new Uint8Array(512),
          t = new Uint8Array(256);
        !(function () {
          let n = 1;
          for (let r = 0; r < 255; r++)
            (e[r] = n), (t[n] = r), 256 & (n <<= 1) && (n ^= 285);
          for (let t = 255; t < 512; t++) e[t] = e[t - 255];
        })(),
          (n.log = function (e) {
            if (e < 1) throw Error("log(" + e + ")");
            return t[e];
          }),
          (n.exp = function (t) {
            return e[t];
          }),
          (n.mul = function (n, r) {
            return 0 === n || 0 === r ? 0 : e[t[n] + t[r]];
          });
      }
    },
    553597: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(660950);
        (n.mul = function (e, n) {
          let r = new Uint8Array(e.length + n.length - 1);
          for (let i = 0; i < e.length; i++)
            for (let a = 0; a < n.length; a++) r[i + a] ^= t.mul(e[i], n[a]);
          return r;
        }),
          (n.mod = function (e, n) {
            let r = new Uint8Array(e);
            for (; r.length - n.length >= 0; ) {
              let e = r[0];
              for (let i = 0; i < n.length; i++) r[i] ^= t.mul(n[i], e);
              let i = 0;
              for (; i < r.length && 0 === r[i]; ) i++;
              r = r.slice(i);
            }
            return r;
          }),
          (n.generateECPolynomial = function (e) {
            let r = new Uint8Array([1]);
            for (let i = 0; i < e; i++)
              r = n.mul(r, new Uint8Array([1, t.exp(i)]));
            return r;
          });
      }
    },
    88803: (e) => {
      var { m: t, e: n } = e;
      {
        let n = e.r(553597);
        function r(e) {
          (this.genPoly = void 0),
            (this.degree = e),
            this.degree && this.initialize(this.degree);
        }
        (r.prototype.initialize = function (e) {
          (this.degree = e),
            (this.genPoly = n.generateECPolynomial(this.degree));
        }),
          (r.prototype.encode = function (e) {
            if (!this.genPoly) throw Error("Encoder not initialized");
            let t = new Uint8Array(e.length + this.degree);
            t.set(e);
            let r = n.mod(t, this.genPoly),
              i = this.degree - r.length;
            if (i > 0) {
              let e = new Uint8Array(this.degree);
              return e.set(r, i), e;
            }
            return r;
          }),
          (t.exports = r);
      }
    },
    125943: (e) => {
      var { m: t, e: n } = e;
      n.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    781613: (e) => {
      var { m: t, e: n } = e;
      {
        let e = "[0-9]+",
          t =
            "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
          r =
            "(?:(?![A-Z0-9 $%*+\\-./:]|" +
            (t = t.replace(/u/g, "\\u")) +
            ")(?:.|[\r\n]))+";
        (n.KANJI = RegExp(t, "g")),
          (n.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
          (n.BYTE = RegExp(r, "g")),
          (n.NUMERIC = RegExp(e, "g")),
          (n.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
        let i = RegExp("^" + t + "$"),
          a = RegExp("^" + e + "$"),
          o = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        (n.testKanji = function (e) {
          return i.test(e);
        }),
          (n.testNumeric = function (e) {
            return a.test(e);
          }),
          (n.testAlphanumeric = function (e) {
            return o.test(e);
          });
      }
    },
    146445: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(125943),
          r = e.r(781613);
        (n.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (n.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13],
          }),
          (n.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (n.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (n.MIXED = { bit: -1 }),
          (n.getCharCountIndicator = function (e, n) {
            if (!e.ccBits) throw Error("Invalid mode: " + e);
            if (!t.isValid(n)) throw Error("Invalid version: " + n);
            return n >= 1 && n < 10
              ? e.ccBits[0]
              : n < 27
              ? e.ccBits[1]
              : e.ccBits[2];
          }),
          (n.getBestModeForData = function (e) {
            return r.testNumeric(e)
              ? n.NUMERIC
              : r.testAlphanumeric(e)
              ? n.ALPHANUMERIC
              : r.testKanji(e)
              ? n.KANJI
              : n.BYTE;
          }),
          (n.toString = function (e) {
            if (e && e.id) return e.id;
            throw Error("Invalid mode");
          }),
          (n.isValid = function (e) {
            return e && e.bit && e.ccBits;
          }),
          (n.from = function (e, t) {
            if (n.isValid(e)) return e;
            try {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return n.NUMERIC;
                case "alphanumeric":
                  return n.ALPHANUMERIC;
                case "kanji":
                  return n.KANJI;
                case "byte":
                  return n.BYTE;
                default:
                  throw Error("Unknown mode: " + e);
              }
            } catch (e) {
              return t;
            }
          });
      }
    },
    28934: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(676133),
          i = e.r(876160),
          a = e.r(93999),
          o = e.r(146445),
          s = e.r(125943),
          l = t.getBCHDigit(7973);
        function r(e, t) {
          return o.getCharCountIndicator(e, t) + 4;
        }
        (n.from = function (e, t) {
          return s.isValid(e) ? parseInt(e, 10) : t;
        }),
          (n.getCapacity = function (e, n, a) {
            if (!s.isValid(e)) throw Error("Invalid QR Code version");
            void 0 === a && (a = o.BYTE);
            let l =
              (t.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, n)) *
              8;
            if (a === o.MIXED) return l;
            let c = l - r(a, e);
            switch (a) {
              case o.NUMERIC:
                return Math.floor((c / 10) * 3);
              case o.ALPHANUMERIC:
                return Math.floor((c / 11) * 2);
              case o.KANJI:
                return Math.floor(c / 13);
              case o.BYTE:
              default:
                return Math.floor(c / 8);
            }
          }),
          (n.getBestVersionForData = function (e, t) {
            let i,
              s = a.from(t, a.M);
            if (Array.isArray(e)) {
              if (e.length > 1) {
                for (let t = 1; t <= 40; t++)
                  if (
                    (function (e, t) {
                      let n = 0;
                      return (
                        e.forEach(function (e) {
                          let i = r(e.mode, t);
                          n += i + e.getBitsLength();
                        }),
                        n
                      );
                    })(e, t) <= n.getCapacity(t, s, o.MIXED)
                  )
                    return t;
                return;
              }
              if (0 === e.length) return 1;
              i = e[0];
            } else i = e;
            return (function (e, t, r) {
              for (let i = 1; i <= 40; i++)
                if (t <= n.getCapacity(i, r, e)) return i;
            })(i.mode, i.getLength(), s);
          }),
          (n.getEncodedBits = function (e) {
            if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
            let n = e << 12;
            for (; t.getBCHDigit(n) - l >= 0; )
              n ^= 7973 << (t.getBCHDigit(n) - l);
            return (e << 12) | n;
          });
      }
    },
    685879: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(676133),
          r = t.getBCHDigit(1335);
        n.getEncodedBits = function (e, n) {
          let i = (e.bit << 3) | n,
            a = i << 10;
          for (; t.getBCHDigit(a) - r >= 0; )
            a ^= 1335 << (t.getBCHDigit(a) - r);
          return ((i << 10) | a) ^ 21522;
        };
      }
    },
    861735: (e) => {
      var { m: t, e: n } = e;
      {
        let n = e.r(146445);
        function r(e) {
          (this.mode = n.NUMERIC), (this.data = e.toString());
        }
        (r.getBitsLength = function (e) {
          return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
        }),
          (r.prototype.getLength = function () {
            return this.data.length;
          }),
          (r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length);
          }),
          (r.prototype.write = function (e) {
            let t, n;
            for (t = 0; t + 3 <= this.data.length; t += 3)
              (n = parseInt(this.data.substr(t, 3), 10)), e.put(n, 10);
            let r = this.data.length - t;
            r > 0 &&
              ((n = parseInt(this.data.substr(t), 10)), e.put(n, 3 * r + 1));
          }),
          (t.exports = r);
      }
    },
    78744: (e) => {
      var { m: t, e: n } = e;
      {
        let n = e.r(146445),
          i = [
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
        function r(e) {
          (this.mode = n.ALPHANUMERIC), (this.data = e);
        }
        (r.getBitsLength = function (e) {
          return 11 * Math.floor(e / 2) + (e % 2) * 6;
        }),
          (r.prototype.getLength = function () {
            return this.data.length;
          }),
          (r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length);
          }),
          (r.prototype.write = function (e) {
            let t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
              let n = 45 * i.indexOf(this.data[t]);
              (n += i.indexOf(this.data[t + 1])), e.put(n, 11);
            }
            this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
          }),
          (t.exports = r);
      }
    },
    246184: (e) => {
      var { m: t, e: n } = e;
      {
        let n = e.r(146445);
        function r(e) {
          (this.mode = n.BYTE),
            "string" == typeof e
              ? (this.data = new TextEncoder().encode(e))
              : (this.data = new Uint8Array(e));
        }
        (r.getBitsLength = function (e) {
          return 8 * e;
        }),
          (r.prototype.getLength = function () {
            return this.data.length;
          }),
          (r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length);
          }),
          (r.prototype.write = function (e) {
            for (let t = 0, n = this.data.length; t < n; t++)
              e.put(this.data[t], 8);
          }),
          (t.exports = r);
      }
    },
    496677: (e) => {
      var { m: t, e: n } = e;
      {
        let n = e.r(146445),
          i = e.r(676133);
        function r(e) {
          (this.mode = n.KANJI), (this.data = e);
        }
        (r.getBitsLength = function (e) {
          return 13 * e;
        }),
          (r.prototype.getLength = function () {
            return this.data.length;
          }),
          (r.prototype.getBitsLength = function () {
            return r.getBitsLength(this.data.length);
          }),
          (r.prototype.write = function (e) {
            let t;
            for (t = 0; t < this.data.length; t++) {
              let n = i.toSJIS(this.data[t]);
              if (n >= 33088 && n <= 40956) n -= 33088;
              else if (n >= 57408 && n <= 60351) n -= 49472;
              else
                throw Error(
                  "Invalid SJIS character: " +
                    this.data[t] +
                    "\nMake sure your charset is UTF-8"
                );
              (n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13);
            }
          }),
          (t.exports = r);
      }
    },
    981779: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(146445),
          l = e.r(861735),
          c = e.r(78744),
          u = e.r(246184),
          d = e.r(496677),
          f = e.r(781613),
          h = e.r(676133),
          g = e.r(575263);
        function r(e) {
          return unescape(encodeURIComponent(e)).length;
        }
        function i(e, t, n) {
          let r,
            i = [];
          for (; null !== (r = e.exec(n)); )
            i.push({
              data: r[0],
              index: r.index,
              mode: t,
              length: r[0].length,
            });
          return i;
        }
        function a(e) {
          let n,
            r,
            a = i(f.NUMERIC, t.NUMERIC, e),
            o = i(f.ALPHANUMERIC, t.ALPHANUMERIC, e);
          return (
            h.isKanjiModeEnabled()
              ? ((n = i(f.BYTE, t.BYTE, e)), (r = i(f.KANJI, t.KANJI, e)))
              : ((n = i(f.BYTE_KANJI, t.BYTE, e)), (r = [])),
            a
              .concat(o, n, r)
              .sort(function (e, t) {
                return e.index - t.index;
              })
              .map(function (e) {
                return { data: e.data, mode: e.mode, length: e.length };
              })
          );
        }
        function o(e, n) {
          switch (n) {
            case t.NUMERIC:
              return l.getBitsLength(e);
            case t.ALPHANUMERIC:
              return c.getBitsLength(e);
            case t.KANJI:
              return d.getBitsLength(e);
            case t.BYTE:
              return u.getBitsLength(e);
          }
        }
        function s(e, n) {
          let r,
            i = t.getBestModeForData(e);
          if ((r = t.from(n, i)) !== t.BYTE && r.bit < i.bit)
            throw Error(
              '"' +
                e +
                '" cannot be encoded with mode ' +
                t.toString(r) +
                ".\n Suggested mode is: " +
                t.toString(i)
            );
          switch (
            (r === t.KANJI && !h.isKanjiModeEnabled() && (r = t.BYTE), r)
          ) {
            case t.NUMERIC:
              return new l(e);
            case t.ALPHANUMERIC:
              return new c(e);
            case t.KANJI:
              return new d(e);
            case t.BYTE:
              return new u(e);
          }
        }
        (n.fromArray = function (e) {
          return e.reduce(function (e, t) {
            return (
              "string" == typeof t
                ? e.push(s(t, null))
                : t.data && e.push(s(t.data, t.mode)),
              e
            );
          }, []);
        }),
          (n.fromString = function (e, i) {
            let s = (function (e, n) {
                let r = {},
                  i = { start: {} },
                  a = ["start"];
                for (let s = 0; s < e.length; s++) {
                  let l = e[s],
                    c = [];
                  for (let e = 0; e < l.length; e++) {
                    let u = l[e],
                      d = "" + s + e;
                    c.push(d), (r[d] = { node: u, lastCount: 0 }), (i[d] = {});
                    for (let e = 0; e < a.length; e++) {
                      let s = a[e];
                      r[s] && r[s].node.mode === u.mode
                        ? ((i[s][d] =
                            o(r[s].lastCount + u.length, u.mode) -
                            o(r[s].lastCount, u.mode)),
                          (r[s].lastCount += u.length))
                        : (r[s] && (r[s].lastCount = u.length),
                          (i[s][d] =
                            o(u.length, u.mode) +
                            4 +
                            t.getCharCountIndicator(u.mode, n)));
                    }
                  }
                  a = c;
                }
                for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
                return { map: i, table: r };
              })(
                (function (e) {
                  let n = [];
                  for (let i = 0; i < e.length; i++) {
                    let a = e[i];
                    switch (a.mode) {
                      case t.NUMERIC:
                        n.push([
                          a,
                          {
                            data: a.data,
                            mode: t.ALPHANUMERIC,
                            length: a.length,
                          },
                          { data: a.data, mode: t.BYTE, length: a.length },
                        ]);
                        break;
                      case t.ALPHANUMERIC:
                        n.push([
                          a,
                          { data: a.data, mode: t.BYTE, length: a.length },
                        ]);
                        break;
                      case t.KANJI:
                        n.push([
                          a,
                          { data: a.data, mode: t.BYTE, length: r(a.data) },
                        ]);
                        break;
                      case t.BYTE:
                        n.push([
                          { data: a.data, mode: t.BYTE, length: r(a.data) },
                        ]);
                    }
                  }
                  return n;
                })(a(e, h.isKanjiModeEnabled())),
                i
              ),
              l = g.find_path(s.map, "start", "end"),
              c = [];
            for (let e = 1; e < l.length - 1; e++) c.push(s.table[l[e]].node);
            return n.fromArray(
              c.reduce(function (e, t) {
                let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return (
                  n && n.mode === t.mode
                    ? (e[e.length - 1].data += t.data)
                    : e.push(t),
                  e
                );
              }, [])
            );
          }),
          (n.rawSplit = function (e) {
            return n.fromArray(a(e, h.isKanjiModeEnabled()));
          });
      }
    },
    902575: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(676133),
          i = e.r(93999),
          a = e.r(402299),
          o = e.r(654987),
          s = e.r(636136),
          l = e.r(635450),
          c = e.r(854743),
          u = e.r(876160),
          d = e.r(88803),
          f = e.r(28934),
          h = e.r(685879),
          g = e.r(146445),
          m = e.r(981779);
        function r(e, t, n) {
          let r,
            i,
            a = e.size,
            o = h.getEncodedBits(t, n);
          for (r = 0; r < 15; r++)
            (i = ((o >> r) & 1) == 1),
              r < 6
                ? e.set(r, 8, i, !0)
                : r < 8
                ? e.set(r + 1, 8, i, !0)
                : e.set(a - 15 + r, 8, i, !0),
              r < 8
                ? e.set(8, a - r - 1, i, !0)
                : r < 9
                ? e.set(8, 15 - r - 1 + 1, i, !0)
                : e.set(8, 15 - r - 1, i, !0);
          e.set(a - 8, 8, 1, !0);
        }
        n.create = function (e, n) {
          let h, p;
          if (void 0 === e || "" === e) throw Error("No input text");
          let y = i.M;
          return (
            void 0 !== n &&
              ((y = i.from(n.errorCorrectionLevel, i.M)),
              (h = f.from(n.version)),
              (p = c.from(n.maskPattern)),
              n.toSJISFunc && t.setToSJISFunction(n.toSJISFunc)),
            (function (e, n, i, h) {
              let p;
              if (Array.isArray(e)) p = m.fromArray(e);
              else if ("string" == typeof e) {
                let t = n;
                if (!t) {
                  let n = m.rawSplit(e);
                  t = f.getBestVersionForData(n, i);
                }
                p = m.fromString(e, t || 40);
              } else throw Error("Invalid data");
              let y = f.getBestVersionForData(p, i);
              if (!y)
                throw Error(
                  "The amount of data is too big to be stored in a QR Code"
                );
              if (n) {
                if (n < y)
                  throw Error(
                    "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                      y +
                      ".\n"
                  );
              } else n = y;
              let w = (function (e, n, r) {
                  let i = new a();
                  r.forEach(function (t) {
                    i.put(t.mode.bit, 4),
                      i.put(t.getLength(), g.getCharCountIndicator(t.mode, e)),
                      t.write(i);
                  });
                  let o =
                    (t.getSymbolTotalCodewords(e) -
                      u.getTotalCodewordsCount(e, n)) *
                    8;
                  for (
                    i.getLengthInBits() + 4 <= o && i.put(0, 4);
                    i.getLengthInBits() % 8 != 0;

                  )
                    i.putBit(0);
                  let s = (o - i.getLengthInBits()) / 8;
                  for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                  return (function (e, n, r) {
                    let i,
                      a,
                      o = t.getSymbolTotalCodewords(n),
                      s = o - u.getTotalCodewordsCount(n, r),
                      l = u.getBlocksCount(n, r),
                      c = o % l,
                      f = l - c,
                      h = Math.floor(o / l),
                      g = Math.floor(s / l),
                      m = g + 1,
                      p = h - g,
                      y = new d(p),
                      w = 0,
                      M = Array(l),
                      v = Array(l),
                      b = 0,
                      N = new Uint8Array(e.buffer);
                    for (let e = 0; e < l; e++) {
                      let t = e < f ? g : m;
                      (M[e] = N.slice(w, w + t)),
                        (v[e] = y.encode(M[e])),
                        (w += t),
                        (b = Math.max(b, t));
                    }
                    let E = new Uint8Array(o),
                      I = 0;
                    for (i = 0; i < b; i++)
                      for (a = 0; a < l; a++)
                        i < M[a].length && (E[I++] = M[a][i]);
                    for (i = 0; i < p; i++)
                      for (a = 0; a < l; a++) E[I++] = v[a][i];
                    return E;
                  })(i, e, n);
                })(n, i, p),
                M = new o(t.getSymbolSize(n));
              !(function (e, t) {
                let n = e.size,
                  r = l.getPositions(t);
                for (let t = 0; t < r.length; t++) {
                  let i = r[t][0],
                    a = r[t][1];
                  for (let t = -1; t <= 7; t++)
                    if (!(i + t <= -1) && !(n <= i + t))
                      for (let r = -1; r <= 7; r++)
                        a + r <= -1 ||
                          n <= a + r ||
                          ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                          (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                          (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                            ? e.set(i + t, a + r, !0, !0)
                            : e.set(i + t, a + r, !1, !0));
                }
              })(M, n);
              let v = M.size;
              for (let e = 8; e < v - 8; e++) {
                let t = e % 2 == 0;
                M.set(e, 6, t, !0), M.set(6, e, t, !0);
              }
              return (
                !(function (e, t) {
                  let n = s.getPositions(t);
                  for (let t = 0; t < n.length; t++) {
                    let r = n[t][0],
                      i = n[t][1];
                    for (let t = -2; t <= 2; t++)
                      for (let n = -2; n <= 2; n++)
                        -2 === t ||
                        2 === t ||
                        -2 === n ||
                        2 === n ||
                        (0 === t && 0 === n)
                          ? e.set(r + t, i + n, !0, !0)
                          : e.set(r + t, i + n, !1, !0);
                  }
                })(M, n),
                r(M, i, 0),
                n >= 7 &&
                  (function (e, t) {
                    let n,
                      r,
                      i,
                      a = e.size,
                      o = f.getEncodedBits(t);
                    for (let t = 0; t < 18; t++)
                      (n = Math.floor(t / 3)),
                        (r = (t % 3) + a - 8 - 3),
                        (i = ((o >> t) & 1) == 1),
                        e.set(n, r, i, !0),
                        e.set(r, n, i, !0);
                  })(M, n),
                !(function (e, t) {
                  let n = e.size,
                    r = -1,
                    i = n - 1,
                    a = 7,
                    o = 0;
                  for (let s = n - 1; s > 0; s -= 2)
                    for (6 === s && s--; ; ) {
                      for (let n = 0; n < 2; n++)
                        if (!e.isReserved(i, s - n)) {
                          let r = !1;
                          o < t.length && (r = ((t[o] >>> a) & 1) == 1),
                            e.set(i, s - n, r),
                            -1 == --a && (o++, (a = 7));
                        }
                      if ((i += r) < 0 || n <= i) {
                        (i -= r), (r = -r);
                        break;
                      }
                    }
                })(M, w),
                isNaN(h) && (h = c.getBestMask(M, r.bind(null, M, i))),
                c.applyMask(h, M),
                r(M, i, h),
                {
                  modules: M,
                  version: n,
                  errorCorrectionLevel: i,
                  maskPattern: h,
                  segments: p,
                }
              );
            })(e, h, y, p)
          );
        };
      }
    },
    940635: (e) => {
      var { m: t, e: n } = e;
      function r(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (n.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          n = e.width && e.width >= 21 ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: n,
          scale: n ? 4 : i,
          margin: t,
          color: {
            dark: r(e.color.dark || "#000000ff"),
            light: r(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (n.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (n.getImageWidth = function (e, t) {
          let r = n.getScale(e, t);
          return Math.floor((e + 2 * t.margin) * r);
        }),
        (n.qrToImageData = function (e, t, r) {
          let i = t.modules.size,
            a = t.modules.data,
            o = n.getScale(i, r),
            s = Math.floor((i + 2 * r.margin) * o),
            l = r.margin * o,
            c = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let u = (t * s + n) * 4,
                d = r.color.light;
              t >= l &&
                n >= l &&
                t < s - l &&
                n < s - l &&
                (d =
                  c[
                    +!!a[Math.floor((t - l) / o) * i + Math.floor((n - l) / o)]
                  ]),
                (e[u++] = d.r),
                (e[u++] = d.g),
                (e[u++] = d.b),
                (e[u] = d.a);
            }
        });
    },
    983190: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(940635);
        (n.render = function (e, n, r) {
          var i;
          let a = r,
            o = n;
          void 0 !== a || (n && n.getContext) || ((a = n), (n = void 0)),
            n ||
              (o = (function () {
                try {
                  return document.createElement("canvas");
                } catch (e) {
                  throw Error("You need to specify a canvas element");
                }
              })()),
            (a = t.getOptions(a));
          let s = t.getImageWidth(e.modules.size, a),
            l = o.getContext("2d"),
            c = l.createImageData(s, s);
          return (
            t.qrToImageData(c.data, e, a),
            (i = o),
            l.clearRect(0, 0, i.width, i.height),
            i.style || (i.style = {}),
            (i.height = s),
            (i.width = s),
            (i.style.height = s + "px"),
            (i.style.width = s + "px"),
            l.putImageData(c, 0, 0),
            o
          );
        }),
          (n.renderToDataURL = function (e, t, r) {
            let i = r;
            void 0 !== i || (t && t.getContext) || ((i = t), (t = void 0)),
              i || (i = {});
            let a = n.render(e, t, i),
              o = i.type || "image/png",
              s = i.rendererOpts || {};
            return a.toDataURL(o, s.quality);
          });
      }
    },
    927890: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(940635);
        function r(e, t) {
          let n = e.a / 255,
            r = t + '="' + e.hex + '"';
          return n < 1
            ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
            : r;
        }
        function i(e, t, n) {
          let r = e + t;
          return void 0 !== n && (r += " " + n), r;
        }
        n.render = function (e, n, a) {
          let o = t.getOptions(n),
            s = e.modules.size,
            l = e.modules.data,
            c = s + 2 * o.margin,
            u = o.color.light.a
              ? "<path " +
                r(o.color.light, "fill") +
                ' d="M0 0h' +
                c +
                "v" +
                c +
                'H0z"/>'
              : "",
            d =
              "<path " +
              r(o.color.dark, "stroke") +
              ' d="' +
              (function (e, t, n) {
                let r = "",
                  a = 0,
                  o = !1,
                  s = 0;
                for (let l = 0; l < e.length; l++) {
                  let c = Math.floor(l % t),
                    u = Math.floor(l / t);
                  c || o || (o = !0),
                    e[l]
                      ? (s++,
                        (l > 0 && c > 0 && e[l - 1]) ||
                          ((r += o ? i("M", c + n, 0.5 + u + n) : i("m", a, 0)),
                          (a = 0),
                          (o = !1)),
                        (c + 1 < t && e[l + 1]) || ((r += i("h", s)), (s = 0)))
                      : a++;
                }
                return r;
              })(l, s, o.margin) +
              '"/>',
            f =
              '<svg xmlns="http://www.w3.org/2000/svg" ' +
              (o.width
                ? 'width="' + o.width + '" height="' + o.width + '" '
                : "") +
              ('viewBox="0 0 ' + c + " ") +
              c +
              '" shape-rendering="crispEdges">' +
              u +
              d +
              "</svg>\n";
          return "function" == typeof a && a(null, f), f;
        };
      }
    },
    326934: (e) => {
      var { m: t, e: n } = e;
      {
        let t = e.r(18913),
          i = e.r(902575),
          a = e.r(983190),
          o = e.r(927890);
        function r(e, n, r, a, o) {
          let s = [].slice.call(arguments, 1),
            l = s.length,
            c = "function" == typeof s[l - 1];
          if (!c && !t()) throw Error("Callback required as last argument");
          if (c) {
            if (l < 2) throw Error("Too few arguments provided");
            2 === l
              ? ((o = r), (r = n), (n = a = void 0))
              : 3 === l &&
                (n.getContext && void 0 === o
                  ? ((o = a), (a = void 0))
                  : ((o = a), (a = r), (r = n), (n = void 0)));
          } else {
            if (l < 1) throw Error("Too few arguments provided");
            return (
              1 === l
                ? ((r = n), (n = a = void 0))
                : 2 !== l || n.getContext || ((a = r), (r = n), (n = void 0)),
              new Promise(function (t, o) {
                try {
                  let o = i.create(r, a);
                  t(e(o, n, a));
                } catch (e) {
                  o(e);
                }
              })
            );
          }
          try {
            let t = i.create(r, a);
            o(null, e(t, n, a));
          } catch (e) {
            o(e);
          }
        }
        (n.create = i.create),
          (n.toCanvas = r.bind(null, a.render)),
          (n.toDataURL = r.bind(null, a.renderToDataURL)),
          (n.toString = r.bind(null, function (e, t, n) {
            return o.render(e, n);
          }));
      }
    },
    861102: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SOLANA_CHAINS =
          n.SOLANA_LOCALNET_CHAIN =
          n.SOLANA_TESTNET_CHAIN =
          n.SOLANA_DEVNET_CHAIN =
          n.SOLANA_MAINNET_CHAIN =
            void 0),
        (n.isSolanaChain = function (e) {
          return n.SOLANA_CHAINS.includes(e);
        }),
        (n.SOLANA_MAINNET_CHAIN = "solana:mainnet"),
        (n.SOLANA_DEVNET_CHAIN = "solana:devnet"),
        (n.SOLANA_TESTNET_CHAIN = "solana:testnet"),
        (n.SOLANA_LOCALNET_CHAIN = "solana:localnet"),
        (n.SOLANA_CHAINS = [
          n.SOLANA_MAINNET_CHAIN,
          n.SOLANA_DEVNET_CHAIN,
          n.SOLANA_TESTNET_CHAIN,
          n.SOLANA_LOCALNET_CHAIN,
        ]);
    },
    322825: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.getCommitment = function (e) {
          switch (e) {
            case "processed":
            case "confirmed":
            case "finalized":
            case void 0:
              return e;
            case "recent":
              return "processed";
            case "single":
            case "singleGossip":
              return "confirmed";
            case "max":
            case "root":
              return "finalized";
            default:
              return;
          }
        });
    },
    687519: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.LOCALNET_ENDPOINT =
            n.TESTNET_ENDPOINT =
            n.DEVNET_ENDPOINT =
            n.MAINNET_ENDPOINT =
              void 0),
          (n.getChainForEndpoint = function (e) {
            return e.includes(n.MAINNET_ENDPOINT)
              ? t.SOLANA_MAINNET_CHAIN
              : /\bdevnet\b/i.test(e)
              ? t.SOLANA_DEVNET_CHAIN
              : /\btestnet\b/i.test(e)
              ? t.SOLANA_TESTNET_CHAIN
              : /\blocalhost\b/i.test(e) || /\b127\.0\.0\.1\b/.test(e)
              ? t.SOLANA_LOCALNET_CHAIN
              : t.SOLANA_MAINNET_CHAIN;
          }),
          (n.getEndpointForChain = function (e, r) {
            return (
              r ||
              (e === t.SOLANA_MAINNET_CHAIN
                ? n.MAINNET_ENDPOINT
                : e === t.SOLANA_DEVNET_CHAIN
                ? n.DEVNET_ENDPOINT
                : e === t.SOLANA_TESTNET_CHAIN
                ? n.TESTNET_ENDPOINT
                : e === t.SOLANA_LOCALNET_CHAIN
                ? n.LOCALNET_ENDPOINT
                : n.MAINNET_ENDPOINT)
            );
          });
        let t = e.r(861102);
        (n.MAINNET_ENDPOINT = "https://api.mainnet-beta.solana.com"),
          (n.DEVNET_ENDPOINT = "https://api.devnet.solana.com"),
          (n.TESTNET_ENDPOINT = "https://api.testnet.solana.com"),
          (n.LOCALNET_ENDPOINT = "http://localhost:8899");
      }
    },
    256360: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isNegativeLE = void 0),
          (n.mod = r),
          (n.pow = function (e, t, n) {
            return u(g(n), e, t);
          }),
          (n.pow2 = function (e, t, n) {
            let r = e;
            for (; t-- > y; ) (r *= r), (r %= n);
            return r;
          }),
          (n.invert = i),
          (n.tonelliShanks = l),
          (n.FpSqrt = c),
          (n.validateField = function (e) {
            let n = A.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "number",
              BITS: "number",
            });
            return (0, t._validateObject)(e, n), e;
          }),
          (n.FpPow = u),
          (n.FpInvertBatch = d),
          (n.FpDiv = function (e, t, n) {
            return e.mul(t, "bigint" == typeof n ? i(n, e.ORDER) : e.inv(n));
          }),
          (n.FpLegendre = f),
          (n.FpIsSquare = function (e, t) {
            return 1 === f(e, t);
          }),
          (n.nLength = h),
          (n.Field = g),
          (n.FpSqrtOdd = function (e, t) {
            if (!e.isOdd) throw Error("Field doesn't have isOdd");
            let n = e.sqrt(t);
            return e.isOdd(n) ? n : e.neg(n);
          }),
          (n.FpSqrtEven = function (e, t) {
            if (!e.isOdd) throw Error("Field doesn't have isOdd");
            let n = e.sqrt(t);
            return e.isOdd(n) ? e.neg(n) : n;
          }),
          (n.hashToPrivateScalar = function (e, n) {
            let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = (e = (0, t.ensureBytes)("privateHash", e)).length,
              o = h(n).nByteLength + 8;
            if (o < 24 || a < o || a > 1024)
              throw Error(
                "hashToPrivateScalar: expected " +
                  o +
                  "-1024 bytes of input, got " +
                  a
              );
            return (
              r(
                i ? (0, t.bytesToNumberLE)(e) : (0, t.bytesToNumberBE)(e),
                n - w
              ) + w
            );
          }),
          (n.getFieldBytesLength = m),
          (n.getMinHashLength = p),
          (n.mapHashToField = function (e, n) {
            let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = e.length,
              o = m(n),
              s = p(n);
            if (a < 16 || a < s || a > 1024)
              throw Error("expected " + s + "-1024 bytes of input, got " + a);
            let l =
              r(
                i ? (0, t.bytesToNumberLE)(e) : (0, t.bytesToNumberBE)(e),
                n - w
              ) + w;
            return i
              ? (0, t.numberToBytesLE)(l, o)
              : (0, t.numberToBytesBE)(l, o);
          });
        let t = e.r(533719),
          y = BigInt(0),
          w = BigInt(1),
          M = BigInt(2),
          v = BigInt(3),
          b = BigInt(4),
          N = BigInt(5),
          E = BigInt(7),
          I = BigInt(8),
          S = BigInt(9),
          j = BigInt(16);
        function r(e, t) {
          let n = e % t;
          return n >= y ? n : t + n;
        }
        function i(e, t) {
          if (e === y) throw Error("invert: expected non-zero number");
          if (t <= y)
            throw Error("invert: expected positive modulus, got " + t);
          let n = r(e, t),
            i = t,
            a = y,
            o = w,
            s = w,
            l = y;
          for (; n !== y; ) {
            let e = i / n,
              t = i % n,
              r = a - s * e,
              c = o - l * e;
            (i = n), (n = t), (a = s), (o = l), (s = r), (l = c);
          }
          if (i !== w) throw Error("invert: does not exist");
          return r(a, t);
        }
        function a(e, t, n) {
          if (!e.eql(e.sqr(t), n)) throw Error("Cannot find square root");
        }
        function o(e, t) {
          let n = (e.ORDER + w) / b,
            r = e.pow(t, n);
          return a(e, r, t), r;
        }
        function s(e, t) {
          let n = (e.ORDER - N) / I,
            r = e.mul(t, M),
            i = e.pow(r, n),
            o = e.mul(t, i),
            s = e.mul(e.mul(o, M), i),
            l = e.mul(o, e.sub(s, e.ONE));
          return a(e, l, t), l;
        }
        function l(e) {
          if (e < v) throw Error("sqrt is not defined for small field");
          let t = e - w,
            n = 0;
          for (; t % M === y; ) (t /= M), n++;
          let r = M,
            i = g(e);
          for (; 1 === f(i, r); )
            if (r++ > 1e3)
              throw Error("Cannot find square root: probably non-prime P");
          if (1 === n) return o;
          let a = i.pow(r, t),
            s = (t + w) / M;
          return function (e, r) {
            if (e.is0(r)) return r;
            if (1 !== f(e, r)) throw Error("Cannot find square root");
            let i = n,
              o = e.mul(e.ONE, a),
              l = e.pow(r, t),
              c = e.pow(r, s);
            for (; !e.eql(l, e.ONE); ) {
              if (e.is0(l)) return e.ZERO;
              let t = 1,
                n = e.sqr(l);
              for (; !e.eql(n, e.ONE); )
                if ((t++, (n = e.sqr(n)), t === i))
                  throw Error("Cannot find square root");
              let r = w << BigInt(i - t - 1),
                a = e.pow(o, r);
              (i = t), (o = e.sqr(a)), (l = e.mul(l, o)), (c = e.mul(c, a));
            }
            return c;
          };
        }
        function c(e) {
          return e % b === v
            ? o
            : e % I === N
            ? s
            : e % j === S
            ? (function (e) {
                let t = g(e),
                  n = l(e),
                  r = n(t, t.neg(t.ONE)),
                  i = n(t, r),
                  o = n(t, t.neg(r)),
                  s = (e + E) / j;
                return (e, t) => {
                  let n = e.pow(t, s),
                    l = e.mul(n, r),
                    c = e.mul(n, i),
                    u = e.mul(n, o),
                    d = e.eql(e.sqr(l), t),
                    f = e.eql(e.sqr(c), t);
                  (n = e.cmov(n, l, d)), (l = e.cmov(u, c, f));
                  let h = e.eql(e.sqr(l), t),
                    g = e.cmov(n, l, h);
                  return a(e, g, t), g;
                };
              })(e)
            : l(e);
        }
        n.isNegativeLE = (e, t) => (r(e, t) & w) === w;
        let A = [
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
        function u(e, t, n) {
          if (n < y) throw Error("invalid exponent, negatives unsupported");
          if (n === y) return e.ONE;
          if (n === w) return t;
          let r = e.ONE,
            i = t;
          for (; n > y; ) n & w && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= w);
          return r;
        }
        function d(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Array(t.length).fill(n ? e.ZERO : void 0),
            i = t.reduce(
              (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
              e.ONE
            ),
            a = e.inv(i);
          return (
            t.reduceRight(
              (t, n, i) =>
                e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
              a
            ),
            r
          );
        }
        function f(e, t) {
          let n = (e.ORDER - w) / M,
            r = e.pow(t, n),
            i = e.eql(r, e.ONE),
            a = e.eql(r, e.ZERO),
            o = e.eql(r, e.neg(e.ONE));
          if (!i && !a && !o) throw Error("invalid Legendre symbol result");
          return i ? 1 : a ? 0 : -1;
        }
        function h(e, n) {
          void 0 !== n && (0, t.anumber)(n);
          let r = void 0 !== n ? n : e.toString(2).length,
            i = Math.ceil(r / 8);
          return { nBitLength: r, nByteLength: i };
        }
        function g(e, n) {
          let a,
            o,
            s,
            l,
            f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            g =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= y)
            throw Error("invalid field: expected ORDER > 0, got " + e);
          let m = !1;
          if ("object" == typeof n && null != n) {
            if (g.sqrt || f)
              throw Error("cannot specify opts in two arguments");
            n.BITS && (a = n.BITS),
              n.sqrt && (o = n.sqrt),
              "boolean" == typeof n.isLE && (f = n.isLE),
              "boolean" == typeof n.modOnDecode && (m = n.modOnDecode),
              (s = n.allowedLengths);
          } else "number" == typeof n && (a = n), g.sqrt && (o = g.sqrt);
          let { nBitLength: p, nByteLength: M } = h(e, a);
          if (M > 2048)
            throw Error("invalid field: expected ORDER of <= 2048 bytes");
          let v = Object.freeze({
            ORDER: e,
            isLE: f,
            BITS: p,
            BYTES: M,
            MASK: (0, t.bitMask)(p),
            ZERO: y,
            ONE: w,
            allowedLengths: s,
            create: (t) => r(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t)
                throw Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return y <= t && t < e;
            },
            is0: (e) => e === y,
            isValidNot0: (e) => !v.is0(e) && v.isValid(e),
            isOdd: (e) => (e & w) === w,
            neg: (t) => r(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => r(t * t, e),
            add: (t, n) => r(t + n, e),
            sub: (t, n) => r(t - n, e),
            mul: (t, n) => r(t * n, e),
            pow: (e, t) => u(v, e, t),
            div: (t, n) => r(t * i(n, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => i(t, e),
            sqrt: o || ((t) => (l || (l = c(e)), l(v, t))),
            toBytes: (e) =>
              f ? (0, t.numberToBytesLE)(e, M) : (0, t.numberToBytesBE)(e, M),
            fromBytes: function (n) {
              let i =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1];
              if (s) {
                if (!s.includes(n.length) || n.length > M)
                  throw Error(
                    "Field.fromBytes: expected " + s + " bytes, got " + n.length
                  );
                let e = new Uint8Array(M);
                e.set(n, f ? 0 : e.length - n.length), (n = e);
              }
              if (n.length !== M)
                throw Error(
                  "Field.fromBytes: expected " + M + " bytes, got " + n.length
                );
              let a = f ? (0, t.bytesToNumberLE)(n) : (0, t.bytesToNumberBE)(n);
              if ((m && (a = r(a, e)), !i && !v.isValid(a)))
                throw Error("invalid field element: outside of range 0..ORDER");
              return a;
            },
            invertBatch: (e) => d(v, e),
            cmov: (e, t, n) => (n ? t : e),
          });
          return Object.freeze(v);
        }
        function m(e) {
          if ("bigint" != typeof e) throw Error("field order must be bigint");
          return Math.ceil(e.toString(2).length / 8);
        }
        function p(e) {
          let t = m(e);
          return t + Math.ceil(t / 2);
        }
      }
    },
    783832: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.wNAF = void 0),
          (n.negateCt = r),
          (n.normalizeZ = function (e, t) {
            let n = (0, f.FpInvertBatch)(
              e.Fp,
              t.map((e) => e.Z)
            );
            return t.map((t, r) => e.fromAffine(t.toAffine(n[r])));
          }),
          (n.mulEndoUnsafe = function (e, t, n, r) {
            let i = t,
              a = e.ZERO,
              o = e.ZERO;
            for (; n > h || r > h; )
              n & g && (a = a.add(i)),
                r & g && (o = o.add(i)),
                (i = i.double()),
                (n >>= g),
                (r >>= g);
            return { p1: a, p2: o };
          }),
          (n.pippenger = function (e, n, r, i) {
            s(r, e), l(i, n);
            let a = r.length,
              o = i.length;
            if (a !== o)
              throw Error(
                "arrays of points and scalars must have equal length"
              );
            let c = e.ZERO,
              u = (0, t.bitLen)(BigInt(a)),
              d = 1;
            u > 12 ? (d = u - 3) : u > 4 ? (d = u - 2) : u > 0 && (d = 2);
            let f = (0, t.bitMask)(d),
              h = Array(Number(f) + 1).fill(c),
              g = Math.floor((n.BITS - 1) / d) * d,
              m = c;
            for (let e = g; e >= 0; e -= d) {
              h.fill(c);
              for (let t = 0; t < o; t++) {
                let n = Number((i[t] >> BigInt(e)) & f);
                h[n] = h[n].add(r[t]);
              }
              let t = c;
              for (let e = h.length - 1, n = c; e > 0; e--)
                (n = n.add(h[e])), (t = t.add(n));
              if (((m = m.add(t)), 0 !== e))
                for (let e = 0; e < d; e++) m = m.double();
            }
            return m;
          }),
          (n.precomputeMSMUnsafe = function (e, n, r, a) {
            i(a, n.BITS), s(r, e);
            let o = e.ZERO,
              c = 2 ** a - 1,
              u = Math.ceil(n.BITS / a),
              d = (0, t.bitMask)(a),
              f = r.map((e) => {
                let t = [];
                for (let n = 0, r = e; n < c; n++) t.push(r), (r = r.add(e));
                return t;
              });
            return (e) => {
              if ((l(e, n), e.length > r.length))
                throw Error(
                  "array of scalars must be smaller than array of points"
                );
              let t = o;
              for (let n = 0; n < u; n++) {
                if (t !== o) for (let e = 0; e < a; e++) t = t.double();
                let r = BigInt(u * a - (n + 1) * a);
                for (let n = 0; n < e.length; n++) {
                  let i = Number((e[n] >> r) & d);
                  i && (t = t.add(f[n][i - 1]));
                }
              }
              return t;
            };
          }),
          (n.validateBasic = function (e) {
            return (
              (0, f.validateField)(e.Fp),
              (0, t.validateObject)(
                e,
                { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
                { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
              ),
              Object.freeze({
                ...(0, f.nLength)(e.n, e.nBitLength),
                ...e,
                ...{ p: e.Fp.ORDER },
              })
            );
          }),
          (n._createCurveFields = function (e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (!t || "object" != typeof t)
              throw Error("expected valid ".concat(e, " CURVE object"));
            for (let e of ["p", "n", "h"]) {
              let n = t[e];
              if (!("bigint" == typeof n && n > h))
                throw Error("CURVE.".concat(e, " must be positive bigint"));
            }
            let r = d(t.p, n.Fp),
              i = d(t.n, n.Fn);
            for (let n of ["Gx", "Gy", "a", "weierstrass" === e ? "b" : "d"])
              if (!r.isValid(t[n]))
                throw Error(
                  "CURVE.".concat(n, " must be valid field element of CURVE.Fp")
                );
            return { Fp: r, Fn: i };
          });
        let t = e.r(533719),
          f = e.r(256360),
          h = BigInt(0),
          g = BigInt(1);
        function r(e, t) {
          let n = t.negate();
          return e ? n : t;
        }
        function i(e, t) {
          if (!Number.isSafeInteger(e) || e <= 0 || e > t)
            throw Error(
              "invalid window size, expected [1.." + t + "], got W=" + e
            );
        }
        function a(e, n) {
          i(e, n);
          let r = Math.ceil(n / e) + 1,
            a = 2 ** (e - 1),
            o = 2 ** e;
          return {
            windows: r,
            windowSize: a,
            mask: (0, t.bitMask)(e),
            maxNumber: o,
            shiftBy: BigInt(e),
          };
        }
        function o(e, t, n) {
          let { windowSize: r, mask: i, maxNumber: a, shiftBy: o } = n,
            s = Number(e & i),
            l = e >> o;
          s > r && ((s -= a), (l += g));
          let c = t * r,
            u = c + Math.abs(s) - 1,
            d = 0 === s;
          return {
            nextN: l,
            offset: u,
            isZero: d,
            isNeg: s < 0,
            isNegF: t % 2 != 0,
            offsetF: c,
          };
        }
        function s(e, t) {
          if (!Array.isArray(e)) throw Error("array expected");
          e.forEach((e, n) => {
            if (!(e instanceof t)) throw Error("invalid point at index " + n);
          });
        }
        function l(e, t) {
          if (!Array.isArray(e)) throw Error("array of scalars expected");
          e.forEach((e, n) => {
            if (!t.isValid(e)) throw Error("invalid scalar at index " + n);
          });
        }
        let m = new WeakMap(),
          p = new WeakMap();
        function c(e) {
          return p.get(e) || 1;
        }
        function u(e) {
          if (e !== h) throw Error("invalid wNAF");
        }
        function d(e, t) {
          if (!t) return (0, f.Field)(e);
          if (t.ORDER !== e)
            throw Error("Field.ORDER must match order: Fp == p, Fn == n");
          return (0, f.validateField)(t), t;
        }
        n.wNAF = class {
          _unsafeLadder(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.ZERO,
              r = e;
            for (; t > h; )
              t & g && (n = n.add(r)), (r = r.double()), (t >>= g);
            return n;
          }
          precomputeWindow(e, t) {
            let { windows: n, windowSize: r } = a(t, this.bits),
              i = [],
              o = e,
              s = o;
            for (let e = 0; e < n; e++) {
              (s = o), i.push(s);
              for (let e = 1; e < r; e++) (s = s.add(o)), i.push(s);
              o = s.double();
            }
            return i;
          }
          wNAF(e, t, n) {
            if (!this.Fn.isValid(n)) throw Error("invalid scalar");
            let i = this.ZERO,
              s = this.BASE,
              l = a(e, this.bits);
            for (let e = 0; e < l.windows; e++) {
              let {
                nextN: a,
                offset: c,
                isZero: u,
                isNeg: d,
                isNegF: f,
                offsetF: h,
              } = o(n, e, l);
              (n = a), u ? (s = s.add(r(f, t[h]))) : (i = i.add(r(d, t[c])));
            }
            return u(n), { p: i, f: s };
          }
          wNAFUnsafe(e, t, n) {
            let r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : this.ZERO,
              i = a(e, this.bits);
            for (let e = 0; e < i.windows && n !== h; e++) {
              let { nextN: a, offset: s, isZero: l, isNeg: c } = o(n, e, i);
              if (((n = a), !l)) {
                let e = t[s];
                r = r.add(c ? e.negate() : e);
              }
            }
            return u(n), r;
          }
          getPrecomputes(e, t, n) {
            let r = m.get(t);
            return (
              r ||
                ((r = this.precomputeWindow(t, e)),
                1 !== e && ("function" == typeof n && (r = n(r)), m.set(t, r))),
              r
            );
          }
          cached(e, t, n) {
            let r = c(e);
            return this.wNAF(r, this.getPrecomputes(r, e, n), t);
          }
          unsafe(e, t, n, r) {
            let i = c(e);
            return 1 === i
              ? this._unsafeLadder(e, t, r)
              : this.wNAFUnsafe(i, this.getPrecomputes(i, e, n), t, r);
          }
          createCache(e, t) {
            i(t, this.bits), p.set(e, t), m.delete(e);
          }
          hasCache(e) {
            return 1 !== c(e);
          }
          constructor(e, t) {
            (this.BASE = e.BASE),
              (this.ZERO = e.ZERO),
              (this.Fn = e.Fn),
              (this.bits = t);
          }
        };
      }
    },
    10373: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PrimeEdwardsPoint = void 0),
          (n.edwards = r),
          (n.eddsa = i),
          (n.twistedEdwards = function (e) {
            let {
                CURVE: t,
                curveOpts: n,
                hash: a,
                eddsaOpts: s,
              } = (function (e) {
                let t = {
                    a: e.a,
                    d: e.d,
                    p: e.Fp.ORDER,
                    n: e.n,
                    h: e.h,
                    Gx: e.Gx,
                    Gy: e.Gy,
                  },
                  n = {
                    Fp: e.Fp,
                    Fn: (0, o.Field)(t.n, e.nBitLength, !0),
                    uvRatio: e.uvRatio,
                  },
                  r = {
                    randomBytes: e.randomBytes,
                    adjustScalarBytes: e.adjustScalarBytes,
                    domain: e.domain,
                    prehash: e.prehash,
                    mapToCurve: e.mapToCurve,
                  };
                return { CURVE: t, curveOpts: n, hash: e.hash, eddsaOpts: r };
              })(e),
              l = i(r(t, n), a, s);
            return Object.assign({}, l, { ExtendedPoint: l.Point, CURVE: e });
          });
        let t = e.r(533719),
          a = e.r(783832),
          o = e.r(256360),
          s = BigInt(0),
          l = BigInt(1),
          c = BigInt(2),
          u = BigInt(8);
        function r(e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { Fp: r, Fn: i } = (0, a._createCurveFields)("edwards", e, n),
            { h: o, n: d } = e;
          (0, t._validateObject)(n, {}, { uvRatio: "function" });
          let f = c << (BigInt(8 * i.BYTES) - l),
            h = (e) => r.create(e),
            g =
              n.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: r.sqrt(r.div(e, t)) };
                } catch (e) {
                  return { isValid: !1, value: s };
                }
              });
          if (
            !(function (e, t, n, r) {
              let i = e.sqr(n),
                a = e.sqr(r),
                o = e.add(e.mul(t.a, i), a),
                s = e.add(e.ONE, e.mul(t.d, e.mul(i, a)));
              return e.eql(o, s);
            })(r, e, e.Gx, e.Gy)
          )
            throw Error("bad curve params: generator point");
          function m(e, n) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = r ? l : s;
            return (0, t.aInRange)("coordinate " + e, n, i, f), n;
          }
          function p(e) {
            if (!(e instanceof M)) throw Error("ExtendedPoint expected");
          }
          let y = (0, t.memoized)((e, t) => {
              let { X: n, Y: i, Z: a } = e,
                o = e.is0();
              null == t && (t = o ? u : r.inv(a));
              let c = h(n * t),
                d = h(i * t),
                f = r.mul(a, t);
              if (o) return { x: s, y: l };
              if (f !== l) throw Error("invZ was invalid");
              return { x: c, y: d };
            }),
            w = (0, t.memoized)((t) => {
              let { a: n, d: r } = e;
              if (t.is0()) throw Error("bad point: ZERO");
              let { X: i, Y: a, Z: o, T: s } = t,
                l = h(i * i),
                c = h(a * a),
                u = h(o * o),
                d = h(u * u),
                f = h(l * n);
              if (h(u * h(f + c)) !== h(d + h(r * h(l * c))))
                throw Error("bad point: equation left != right (1)");
              if (h(i * a) !== h(o * s))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class M {
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            get ex() {
              return this.X;
            }
            get ey() {
              return this.Y;
            }
            get ez() {
              return this.Z;
            }
            get et() {
              return this.T;
            }
            static normalizeZ(e) {
              return (0, a.normalizeZ)(M, e);
            }
            static msm(e, t) {
              return (0, a.pippenger)(M, i, e, t);
            }
            _setWindowSize(e) {
              this.precompute(e);
            }
            static fromAffine(e) {
              if (e instanceof M) throw Error("extended point not allowed");
              let { x: t, y: n } = e || {};
              return m("x", t), m("y", n), new M(t, n, l, h(t * n));
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
              return v.createCache(this, e), t || this.multiply(c), this;
            }
            assertValidity() {
              w(this);
            }
            equals(e) {
              p(e);
              let { X: t, Y: n, Z: r } = this,
                { X: i, Y: a, Z: o } = e,
                s = h(t * o),
                l = h(i * r),
                c = h(n * o),
                u = h(a * r);
              return s === l && c === u;
            }
            is0() {
              return this.equals(M.ZERO);
            }
            negate() {
              return new M(h(-this.X), this.Y, this.Z, h(-this.T));
            }
            double() {
              let { a: t } = e,
                { X: n, Y: r, Z: i } = this,
                a = h(n * n),
                o = h(r * r),
                s = h(c * h(i * i)),
                l = h(t * a),
                u = n + r,
                d = h(h(u * u) - a - o),
                f = l + o,
                g = f - s,
                m = l - o,
                p = h(d * g),
                y = h(f * m),
                w = h(d * m);
              return new M(p, y, h(g * f), w);
            }
            add(t) {
              p(t);
              let { a: n, d: r } = e,
                { X: i, Y: a, Z: o, T: s } = this,
                { X: l, Y: c, Z: u, T: d } = t,
                f = h(i * l),
                g = h(a * c),
                m = h(s * r * d),
                y = h(o * u),
                w = h((i + a) * (l + c) - f - g),
                v = y - m,
                b = y + m,
                N = h(g - n * f),
                E = h(w * v),
                I = h(b * N),
                S = h(w * N);
              return new M(E, I, h(v * b), S);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            multiply(e) {
              (0, t.aInRange)("scalar", e, l, d);
              let { p: n, f: r } = v.cached(this, e, (e) =>
                (0, a.normalizeZ)(M, e)
              );
              return (0, a.normalizeZ)(M, [n, r])[0];
            }
            multiplyUnsafe(e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : M.ZERO;
              return ((0, t.aInRange)("scalar", e, s, d), e === s)
                ? M.ZERO
                : this.is0() || e === l
                ? this
                : v.unsafe(this, e, (e) => (0, a.normalizeZ)(M, e), n);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(o).is0();
            }
            isTorsionFree() {
              return v.unsafe(this, d).is0();
            }
            toAffine(e) {
              return y(this, e);
            }
            clearCofactor() {
              return o === l ? this : this.multiplyUnsafe(o);
            }
            static fromBytes(e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return (0, t.abytes)(e), M.fromHex(e, n);
            }
            static fromHex(n) {
              let i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                { d: a, a: o } = e,
                c = r.BYTES;
              (n = (0, t.ensureBytes)("pointHex", n, c)),
                (0, t.abool)("zip215", i);
              let u = n.slice(),
                d = n[c - 1];
              u[c - 1] = -129 & d;
              let m = (0, t.bytesToNumberLE)(u),
                p = i ? f : r.ORDER;
              (0, t.aInRange)("pointHex.y", m, s, p);
              let y = h(m * m),
                { isValid: w, value: v } = g(h(y - l), h(a * y - o));
              if (!w) throw Error("Point.fromHex: invalid y coordinate");
              let b = (v & l) === l,
                N = (128 & d) != 0;
              if (!i && v === s && N)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return N !== b && (v = h(-v)), M.fromAffine({ x: v, y: m });
            }
            toBytes() {
              let { x: e, y: n } = this.toAffine(),
                i = (0, t.numberToBytesLE)(n, r.BYTES);
              return (i[i.length - 1] |= e & l ? 128 : 0), i;
            }
            toRawBytes() {
              return this.toBytes();
            }
            toHex() {
              return (0, t.bytesToHex)(this.toBytes());
            }
            toString() {
              return "<Point ".concat(this.is0() ? "ZERO" : this.toHex(), ">");
            }
            constructor(e, t, n, r) {
              (this.X = m("x", e)),
                (this.Y = m("y", t)),
                (this.Z = m("z", n, !0)),
                (this.T = m("t", r)),
                Object.freeze(this);
            }
          }
          (M.BASE = new M(e.Gx, e.Gy, l, h(e.Gx * e.Gy))),
            (M.ZERO = new M(s, l, l, s)),
            (M.Fp = r),
            (M.Fn = i);
          let v = new a.wNAF(M, 8 * i.BYTES);
          return M;
        }
        function i(e, n, r) {
          if ("function" != typeof n)
            throw Error('"hash" function param is required');
          (0, t._validateObject)(
            r,
            {},
            {
              adjustScalarBytes: "function",
              randomBytes: "function",
              domain: "function",
              prehash: "function",
              mapToCurve: "function",
            }
          );
          let { prehash: i } = r,
            { BASE: a, Fp: o, Fn: c } = e,
            u = c.ORDER,
            d = r.randomBytes || t.randomBytes,
            f = r.adjustScalarBytes || ((e) => e),
            h =
              r.domain ||
              ((e, n, r) => {
                if (((0, t.abool)("phflag", r), n.length || r))
                  throw Error("Contexts/pre-hash are not supported");
                return e;
              });
          function g(e) {
            var n;
            return (n = (0, t.bytesToNumberLE)(e)), c.create(n);
          }
          function m(e) {
            let {
                head: r,
                prefix: i,
                scalar: s,
              } = (function (e) {
                let r = o.BYTES;
                e = (0, t.ensureBytes)("private key", e, r);
                let i = (0, t.ensureBytes)("hashed private key", n(e), 2 * r),
                  a = f(i.slice(0, r)),
                  s = i.slice(r, 2 * r),
                  l = g(a);
                return { head: a, prefix: s, scalar: l };
              })(e),
              l = a.multiply(s),
              c = l.toBytes();
            return { head: r, prefix: i, scalar: s, point: l, pointBytes: c };
          }
          function p(e) {
            return m(e).pointBytes;
          }
          function y() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Uint8Array.of();
            for (
              var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              a[o - 1] = arguments[o];
            return g(
              n(
                h(
                  (0, t.concatBytes)(...a),
                  (0, t.ensureBytes)("context", e),
                  !!i
                )
              )
            );
          }
          let w = { zip215: !0 };
          a.precompute(8);
          let M = o.BYTES,
            v = { secret: M, public: M, signature: 2 * M, seed: M };
          function b() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : d(v.seed);
            return e;
          }
          let N = {
            getExtendedPublicKey: m,
            randomSecretKey: b,
            isValidSecretKey: function (e) {
              try {
                return !!c.fromBytes(e, !1);
              } catch (e) {
                return !1;
              }
            },
            isValidPublicKey: function (t, n) {
              try {
                return !!e.fromBytes(t, n);
              } catch (e) {
                return !1;
              }
            },
            randomPrivateKey: b,
            toMontgomery(t) {
              let { y: n } = e.fromBytes(t),
                r = 32 === M;
              if (!r && 57 !== M) throw Error("only defined for 25519 and 448");
              let i = r ? o.div(l + n, l - n) : o.div(n - l, n + l);
              return o.toBytes(i);
            },
            toMontgomeryPriv: (e) => (
              (0, t.abytes)(e, M), f(n(e.subarray(0, M))).subarray(0, M)
            ),
            precompute() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 8,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e.BASE;
              return n.precompute(t, !1);
            },
          };
          return Object.freeze({
            keygen: function (e) {
              let t = N.randomSecretKey(e);
              return { secretKey: t, publicKey: p(t) };
            },
            getPublicKey: p,
            sign: function (e, n) {
              var r;
              let l =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              (e = (0, t.ensureBytes)("message", e)), i && (e = i(e));
              let { prefix: d, scalar: f, pointBytes: h } = m(n),
                g = y(l.context, d, e),
                p = a.multiply(g).toBytes(),
                w = ((r = g + y(l.context, p, h, e) * f), c.create(r));
              (0, t.aInRange)("signature.s", w, s, u);
              let M = o.BYTES,
                v = (0, t.concatBytes)(p, (0, t.numberToBytesLE)(w, M));
              return (0, t.ensureBytes)("result", v, 2 * M);
            },
            verify: function (n, r, s) {
              let l,
                c,
                u,
                d =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : w,
                { context: f, zip215: h } = d,
                g = o.BYTES;
              (n = (0, t.ensureBytes)("signature", n, 2 * g)),
                (r = (0, t.ensureBytes)("message", r)),
                (s = (0, t.ensureBytes)("publicKey", s, g)),
                void 0 !== h && (0, t.abool)("zip215", h),
                i && (r = i(r));
              let m = (0, t.bytesToNumberLE)(n.slice(g, 2 * g));
              try {
                (l = e.fromHex(s, h)),
                  (c = e.fromHex(n.slice(0, g), h)),
                  (u = a.multiplyUnsafe(m));
              } catch (e) {
                return !1;
              }
              if (!h && l.isSmallOrder()) return !1;
              let p = y(f, c.toBytes(), l.toBytes(), r);
              return c
                .add(l.multiplyUnsafe(p))
                .subtract(u)
                .clearCofactor()
                .is0();
            },
            utils: N,
            Point: e,
            info: { type: "edwards", lengths: v },
          });
        }
        n.PrimeEdwardsPoint = class {
          static fromBytes(e) {
            throw Error("fromBytes must be implemented by subclass");
          }
          static fromHex(e) {
            throw Error("fromHex must be implemented by subclass");
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          clearCofactor() {
            return this;
          }
          assertValidity() {
            this.ep.assertValidity();
          }
          toAffine(e) {
            return this.ep.toAffine(e);
          }
          toRawBytes() {
            return this.toBytes();
          }
          toHex() {
            return (0, t.bytesToHex)(this.toBytes());
          }
          toString() {
            return this.toHex();
          }
          isTorsionFree() {
            return !0;
          }
          isSmallOrder() {
            return !1;
          }
          add(e) {
            return this.assertSame(e), this.init(this.ep.add(e.ep));
          }
          subtract(e) {
            return this.assertSame(e), this.init(this.ep.subtract(e.ep));
          }
          multiply(e) {
            return this.init(this.ep.multiply(e));
          }
          multiplyUnsafe(e) {
            return this.init(this.ep.multiplyUnsafe(e));
          }
          double() {
            return this.init(this.ep.double());
          }
          negate() {
            return this.init(this.ep.negate());
          }
          precompute(e, t) {
            return this.init(this.ep.precompute(e, t));
          }
          constructor(e) {
            this.ep = e;
          }
        };
      }
    },
    530443: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n._DST_scalar = void 0),
          (n.expand_message_xmd = o),
          (n.expand_message_xof = s),
          (n.hash_to_field = l),
          (n.isogenyMap = function (e, t) {
            let n = t.map((e) => Array.from(e).reverse());
            return (t, r) => {
              let [i, a, o, s] = n.map((n) =>
                  n.reduce((n, r) => e.add(e.mul(n, t), r))
                ),
                [l, u] = (0, c.FpInvertBatch)(e, [a, s], !0);
              return (
                (t = e.mul(i, l)), (r = e.mul(r, e.mul(o, u))), { x: t, y: r }
              );
            };
          }),
          (n.createHasher = function (e, t, r) {
            if ("function" != typeof t)
              throw Error("mapToCurve() must be defined");
            function i(n) {
              return e.fromAffine(t(n));
            }
            function a(t) {
              let n = t.clearCofactor();
              return n.equals(e.ZERO) ? e.ZERO : (n.assertValidity(), n);
            }
            return {
              defaults: r,
              hashToCurve(e, t) {
                let n = l(e, 2, Object.assign({}, r, t)),
                  o = i(n[0]),
                  s = i(n[1]);
                return a(o.add(s));
              },
              encodeToCurve(e, t) {
                let n = r.encodeDST ? { DST: r.encodeDST } : {};
                return a(i(l(e, 1, Object.assign({}, r, n, t))[0]));
              },
              mapToCurve(e) {
                if (!Array.isArray(e)) throw Error("expected array of bigints");
                for (let t of e)
                  if ("bigint" != typeof t)
                    throw Error("expected array of bigints");
                return a(i(e));
              },
              hashToScalar: (t, i) =>
                l(
                  t,
                  1,
                  Object.assign(
                    {},
                    r,
                    { p: e.Fn.ORDER, m: 1, DST: n._DST_scalar },
                    i
                  )
                )[0][0],
            };
          });
        let t = e.r(533719),
          c = e.r(256360),
          u = t.bytesToNumberBE;
        function r(e, t) {
          if ((i(e), i(t), e < 0 || e >= 1 << (8 * t)))
            throw Error("invalid I2OSP input: " + e);
          let n = Array.from({ length: t }).fill(0);
          for (let r = t - 1; r >= 0; r--) (n[r] = 255 & e), (e >>>= 8);
          return new Uint8Array(n);
        }
        function i(e) {
          if (!Number.isSafeInteger(e)) throw Error("number expected");
        }
        function a(e) {
          if (!(0, t.isBytes)(e) && "string" != typeof e)
            throw Error("DST must be Uint8Array or string");
          return "string" == typeof e ? (0, t.utf8ToBytes)(e) : e;
        }
        function o(e, n, o, s) {
          (0, t.abytes)(e),
            i(o),
            (n = a(n)).length > 255 &&
              (n = s(
                (0, t.concatBytes)((0, t.utf8ToBytes)("H2C-OVERSIZE-DST-"), n)
              ));
          let { outputLen: l, blockLen: c } = s,
            u = Math.ceil(o / l);
          if (o > 65535 || u > 255)
            throw Error("expand_message_xmd: invalid lenInBytes");
          let d = (0, t.concatBytes)(n, r(n.length, 1)),
            f = r(0, c),
            h = r(o, 2),
            g = Array(u),
            m = s((0, t.concatBytes)(f, e, h, r(0, 1), d));
          g[0] = s((0, t.concatBytes)(m, r(1, 1), d));
          for (let e = 1; e <= u; e++) {
            let n = [
              (function (e, t) {
                let n = new Uint8Array(e.length);
                for (let r = 0; r < e.length; r++) n[r] = e[r] ^ t[r];
                return n;
              })(m, g[e - 1]),
              r(e + 1, 1),
              d,
            ];
            g[e] = s((0, t.concatBytes)(...n));
          }
          return (0, t.concatBytes)(...g).slice(0, o);
        }
        function s(e, n, o, s, l) {
          if (((0, t.abytes)(e), i(o), (n = a(n)).length > 255)) {
            let e = Math.ceil((2 * s) / 8);
            n = l
              .create({ dkLen: e })
              .update((0, t.utf8ToBytes)("H2C-OVERSIZE-DST-"))
              .update(n)
              .digest();
          }
          if (o > 65535 || n.length > 255)
            throw Error("expand_message_xof: invalid lenInBytes");
          return l
            .create({ dkLen: o })
            .update(e)
            .update(r(o, 2))
            .update(n)
            .update(r(n.length, 1))
            .digest();
        }
        function l(e, n, r) {
          let a;
          (0, t._validateObject)(r, {
            p: "bigint",
            m: "number",
            k: "number",
            hash: "function",
          });
          let { p: l, k: d, m: f, hash: h, expand: g, DST: m } = r;
          if (!(0, t.isHash)(r.hash)) throw Error("expected valid hash");
          (0, t.abytes)(e), i(n);
          let p = Math.ceil((l.toString(2).length + d) / 8),
            y = n * f * p;
          if ("xmd" === g) a = o(e, m, y, h);
          else if ("xof" === g) a = s(e, m, y, d, h);
          else if ("_internal_pass" === g) a = e;
          else throw Error('expand must be "xmd" or "xof"');
          let w = Array(n);
          for (let e = 0; e < n; e++) {
            let t = Array(f);
            for (let n = 0; n < f; n++) {
              let r = p * (n + e * f),
                i = a.subarray(r, r + p);
              t[n] = (0, c.mod)(u(i), l);
            }
            w[e] = t;
          }
          return w;
        }
        n._DST_scalar = (0, t.utf8ToBytes)("HashToScalar-");
      }
    },
    592468: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.montgomery = function (e) {
            let {
                P: n,
                type: s,
                adjustScalarBytes: l,
                powPminus2: c,
                randomBytes: u,
              } = ((0, t._validateObject)(e, {
                adjustScalarBytes: "function",
                powPminus2: "function",
              }),
              Object.freeze({ ...e })),
              d = "x25519" === s;
            if (!d && "x448" !== s) throw Error("invalid type");
            let f = u || t.randomBytes,
              h = d ? 255 : 448,
              g = d ? 32 : 56,
              m = d ? BigInt(9) : BigInt(5),
              p = d ? BigInt(121665) : BigInt(39081),
              y = d ? o ** BigInt(254) : o ** BigInt(447),
              w =
                y +
                (d
                  ? BigInt(8) * o ** BigInt(251) - a
                  : BigInt(4) * o ** BigInt(445) - a) +
                a,
              M = (e) => (0, r.mod)(e, n),
              v = b(m);
            function b(e) {
              return (0, t.numberToBytesLE)(M(e), g);
            }
            function N(e, r) {
              let o = (function (e, r) {
                (0, t.aInRange)("u", e, i, n),
                  (0, t.aInRange)("scalar", r, y, w);
                let o = a,
                  s = i,
                  l = e,
                  u = a,
                  d = i;
                for (let t = BigInt(h - 1); t >= i; t--) {
                  let n = (r >> t) & a;
                  (d ^= n),
                    ({ x_2: o, x_3: l } = I(d, o, l)),
                    ({ x_2: s, x_3: u } = I(d, s, u)),
                    (d = n);
                  let i = o + s,
                    c = M(i * i),
                    f = o - s,
                    h = M(f * f),
                    g = c - h,
                    m = l + u,
                    y = M((l - u) * i),
                    w = M(m * f),
                    v = y + w,
                    b = y - w;
                  (l = M(v * v)),
                    (u = M(e * M(b * b))),
                    (o = M(c * h)),
                    (s = M(g * (c + M(p * g))));
                }
                return (
                  ({ x_2: o, x_3: l } = I(d, o, l)),
                  ({ x_2: s, x_3: u } = I(d, s, u)),
                  M(o * c(s))
                );
              })(
                (function (e) {
                  let n = (0, t.ensureBytes)("u coordinate", e, g);
                  return d && (n[31] &= 127), M((0, t.bytesToNumberLE)(n));
                })(r),
                (0, t.bytesToNumberLE)(l((0, t.ensureBytes)("scalar", e, g)))
              );
              if (o === i)
                throw Error("invalid private or public key received");
              return b(o);
            }
            function E(e) {
              return N(e, v);
            }
            function I(e, t, n) {
              let r = M(e * (t - n));
              return { x_2: (t = M(t - r)), x_3: (n = M(n + r)) };
            }
            let S = function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : f(g);
                return e;
              },
              j = { randomSecretKey: S, randomPrivateKey: S };
            return {
              keygen: function (e) {
                let t = j.randomSecretKey(e);
                return { secretKey: t, publicKey: E(t) };
              },
              getSharedSecret: (e, t) => N(e, t),
              getPublicKey: (e) => E(e),
              scalarMult: N,
              scalarMultBase: E,
              utils: j,
              GuBytes: v.slice(),
              info: {
                type: "montgomery",
                lengths: { secret: g, public: g, seed: g },
              },
            };
          });
        let t = e.r(533719),
          r = e.r(256360),
          i = BigInt(0),
          a = BigInt(1),
          o = BigInt(2);
      }
    },
    687403: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.ED25519_TORSION_SUBGROUP =
            n.hash_to_ristretto255 =
            n.hashToRistretto255 =
            n.encodeToCurve =
            n.hashToCurve =
            n.ristretto255_hasher =
            n.ristretto255 =
            n.RistrettoPoint =
            n.ed25519_hasher =
            n.edwardsToMontgomery =
            n.x25519 =
            n.ed25519ph =
            n.ed25519ctx =
            n.ed25519 =
              void 0),
          (n.edwardsToMontgomeryPub = s),
          (n.edwardsToMontgomeryPriv = function (e) {
            return n.ed25519.utils.toMontgomeryPriv(
              (0, p.ensureBytes)("pub", e)
            );
          });
        let t = e.r(91023),
          u = e.r(51840),
          d = e.r(783832),
          f = e.r(10373),
          h = e.r(530443),
          g = e.r(256360),
          m = e.r(592468),
          p = e.r(533719),
          y = BigInt(0),
          w = BigInt(1),
          M = BigInt(2),
          v = BigInt(3),
          b = BigInt(5),
          N = BigInt(8),
          E = {
            p: BigInt(
              "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
            ),
            n: BigInt(
              "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
            ),
            h: N,
            a: BigInt(
              "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
            ),
            d: BigInt(
              "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
            ),
            Gx: BigInt(
              "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
            ),
            Gy: BigInt(
              "0x6666666666666666666666666666666666666666666666666666666666666658"
            ),
          };
        function r(e) {
          let t = BigInt(10),
            n = BigInt(20),
            r = BigInt(40),
            i = BigInt(80),
            a = E.p,
            o = (((e * e) % a) * e) % a,
            s = ((0, g.pow2)(o, M, a) * o) % a,
            l = ((0, g.pow2)(s, w, a) * e) % a,
            c = ((0, g.pow2)(l, b, a) * l) % a,
            u = ((0, g.pow2)(c, t, a) * c) % a,
            d = ((0, g.pow2)(u, n, a) * u) % a,
            f = ((0, g.pow2)(d, r, a) * d) % a,
            h = ((0, g.pow2)(f, i, a) * f) % a,
            m = ((0, g.pow2)(h, i, a) * f) % a,
            p = ((0, g.pow2)(m, t, a) * c) % a;
          return { pow_p_5_8: ((0, g.pow2)(p, M, a) * e) % a, b2: o };
        }
        function i(e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        }
        let I = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
        function a(e, t) {
          let n = E.p,
            i = (0, g.mod)(t * t * t, n),
            a = r(e * (0, g.mod)(i * i * t, n)).pow_p_5_8,
            o = (0, g.mod)(e * i * a, n),
            s = (0, g.mod)(t * o * o, n),
            l = o,
            c = (0, g.mod)(o * I, n),
            u = s === e,
            d = s === (0, g.mod)(-e, n),
            f = s === (0, g.mod)(-e * I, n);
          return (
            u && (o = l),
            (d || f) && (o = c),
            (0, g.isNegativeLE)(o, n) && (o = (0, g.mod)(-o, n)),
            { isValid: u || d, value: o }
          );
        }
        let S = (0, g.Field)(E.p, { isLE: !0 }),
          j = (0, g.Field)(E.n, { isLE: !0 }),
          A = { ...E, Fp: S, hash: t.sha512, adjustScalarBytes: i, uvRatio: a };
        function o(e, t, n) {
          if (t.length > 255) throw Error("Context is too big");
          return (0, u.concatBytes)(
            (0, u.utf8ToBytes)("SigEd25519 no Ed25519 collisions"),
            new Uint8Array([+!!n, t.length]),
            t,
            e
          );
        }
        function s(e) {
          return n.ed25519.utils.toMontgomery((0, p.ensureBytes)("pub", e));
        }
        (n.ed25519 = (0, f.twistedEdwards)(A)),
          (n.ed25519ctx = (0, f.twistedEdwards)({ ...A, domain: o })),
          (n.ed25519ph = (0, f.twistedEdwards)(
            Object.assign({}, A, { domain: o, prehash: t.sha512 })
          )),
          (n.x25519 = (() => {
            let e = E.p;
            return (0, m.montgomery)({
              P: e,
              type: "x25519",
              powPminus2: (t) => {
                let { pow_p_5_8: n, b2: i } = r(t);
                return (0, g.mod)((0, g.pow2)(n, v, e) * i, e);
              },
              adjustScalarBytes: i,
            });
          })()),
          (n.edwardsToMontgomery = s);
        let T = (S.ORDER + v) / N,
          D = S.pow(M, T),
          C = S.sqrt(S.neg(S.ONE)),
          L = (0, g.FpSqrtEven)(S, S.neg(BigInt(486664)));
        n.ed25519_hasher = (0, h.createHasher)(
          n.ed25519.Point,
          (e) =>
            (function (e) {
              let {
                  xMn: t,
                  xMd: n,
                  yMn: r,
                  yMd: i,
                } = (function (e) {
                  let t = (S.ORDER - b) / N,
                    n = BigInt(486662),
                    r = S.sqr(e);
                  r = S.mul(r, M);
                  let i = S.add(r, S.ONE),
                    a = S.neg(n),
                    o = S.sqr(i),
                    s = S.mul(o, i),
                    l = S.mul(r, n);
                  (l = S.mul(l, a)), (l = S.add(l, o)), (l = S.mul(l, a));
                  let c = S.sqr(s);
                  (o = S.sqr(c)),
                    (c = S.mul(c, s)),
                    (c = S.mul(c, l)),
                    (o = S.mul(o, c));
                  let u = S.pow(o, t);
                  u = S.mul(u, c);
                  let d = S.mul(u, C);
                  (o = S.sqr(u)), (o = S.mul(o, s));
                  let f = S.eql(o, l),
                    h = S.cmov(d, u, f),
                    g = S.mul(a, r),
                    m = S.mul(u, e);
                  m = S.mul(m, D);
                  let p = S.mul(m, C),
                    y = S.mul(l, r);
                  (o = S.sqr(m)), (o = S.mul(o, s));
                  let v = S.eql(o, y),
                    E = S.cmov(p, m, v);
                  (o = S.sqr(h)), (o = S.mul(o, s));
                  let I = S.eql(o, l),
                    j = S.cmov(g, a, I),
                    A = S.cmov(E, h, I),
                    T = S.isOdd(A);
                  return {
                    xMn: j,
                    xMd: i,
                    yMn: (A = S.cmov(A, S.neg(A), I !== T)),
                    yMd: w,
                  };
                })(e),
                a = S.mul(t, i);
              a = S.mul(a, L);
              let o = S.mul(n, r),
                s = S.sub(t, n),
                l = S.add(t, n),
                c = S.mul(o, l),
                u = S.eql(c, S.ZERO);
              (a = S.cmov(a, S.ZERO, u)),
                (o = S.cmov(o, S.ONE, u)),
                (s = S.cmov(s, S.ONE, u)),
                (l = S.cmov(l, S.ONE, u));
              let [d, f] = (0, g.FpInvertBatch)(S, [o, l], !0);
              return { x: S.mul(a, d), y: S.mul(s, f) };
            })(e[0]),
          {
            DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
            encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
            p: S.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: t.sha512,
          }
        );
        let O = BigInt(
            "25063068953384623474111414158702152701244531502492656460079210482610430750235"
          ),
          x = BigInt(
            "54469307008909316920995813868745141605393597292927456921205312896311721017578"
          ),
          z = BigInt(
            "1159843021668779879193775521855586647937357759715417654439879720876111806838"
          ),
          _ = BigInt(
            "40440834346308536858101042469323190826248399146238708352240133220865137265952"
          ),
          P = (e) => a(w, e),
          k = BigInt(
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          ),
          W = (e) => n.ed25519.CURVE.Fp.create((0, p.bytesToNumberLE)(e) & k);
        function l(e) {
          let { d: t } = n.ed25519.CURVE,
            r = n.ed25519.CURVE.Fp.ORDER,
            i = n.ed25519.CURVE.Fp.create,
            o = i(I * e * e),
            s = i((o + w) * z),
            l = BigInt(-1),
            c = i((l - t * o) * i(o + t)),
            { isValid: u, value: d } = a(s, c),
            f = i(d * e);
          (0, g.isNegativeLE)(f, r) || (f = i(-f)), u || (d = f), u || (l = o);
          let h = i(l * (o - w) * _ - c),
            m = d * d,
            p = i((d + d) * c),
            y = i(h * O),
            M = i(w - m),
            v = i(w + m);
          return new n.ed25519.Point(i(p * v), i(M * y), i(y * v), i(p * M));
        }
        function c(e) {
          (0, u.abytes)(e, 64);
          let t = l(W(e.subarray(0, 32))),
            n = l(W(e.subarray(32, 64)));
          return new R(t.add(n));
        }
        class R extends f.PrimeEdwardsPoint {
          static fromAffine(e) {
            return new R(n.ed25519.Point.fromAffine(e));
          }
          assertSame(e) {
            if (!(e instanceof R)) throw Error("RistrettoPoint expected");
          }
          init(e) {
            return new R(e);
          }
          static hashToCurve(e) {
            return c((0, p.ensureBytes)("ristrettoHash", e, 64));
          }
          static fromBytes(e) {
            (0, u.abytes)(e, 32);
            let { a: t, d: r } = n.ed25519.CURVE,
              i = S.ORDER,
              a = S.create,
              o = W(e);
            if (
              !(0, p.equalBytes)((0, p.numberToBytesLE)(o, 32), e) ||
              (0, g.isNegativeLE)(o, i)
            )
              throw Error("invalid ristretto255 encoding 1");
            let s = a(o * o),
              l = a(w + t * s),
              c = a(w - t * s),
              d = a(l * l),
              f = a(c * c),
              h = a(t * r * d - f),
              { isValid: m, value: M } = P(a(h * f)),
              v = a(M * c),
              b = a(M * v * h),
              N = a((o + o) * v);
            (0, g.isNegativeLE)(N, i) && (N = a(-N));
            let E = a(l * b),
              I = a(N * E);
            if (!m || (0, g.isNegativeLE)(I, i) || E === y)
              throw Error("invalid ristretto255 encoding 2");
            return new R(new n.ed25519.Point(N, E, w, I));
          }
          static fromHex(e) {
            return R.fromBytes((0, p.ensureBytes)("ristrettoHex", e, 32));
          }
          static msm(e, t) {
            return (0, d.pippenger)(R, n.ed25519.Point.Fn, e, t);
          }
          toBytes() {
            let e,
              { X: t, Y: n, Z: r, T: i } = this.ep,
              a = S.ORDER,
              o = S.create,
              s = o(o(r + n) * o(r - n)),
              l = o(t * n),
              c = o(l * l),
              { value: u } = P(o(s * c)),
              d = o(u * s),
              f = o(u * l),
              h = o(d * f * i);
            if ((0, g.isNegativeLE)(i * h, a)) {
              let r = o(n * I),
                i = o(t * I);
              (t = r), (n = i), (e = o(d * x));
            } else e = f;
            (0, g.isNegativeLE)(t * h, a) && (n = o(-n));
            let m = o((r - n) * e);
            return (
              (0, g.isNegativeLE)(m, a) && (m = o(-m)),
              (0, p.numberToBytesLE)(m, 32)
            );
          }
          equals(e) {
            this.assertSame(e);
            let { X: t, Y: n } = this.ep,
              { X: r, Y: i } = e.ep,
              a = S.create,
              o = a(t * i) === a(n * r),
              s = a(n * i) === a(t * r);
            return o || s;
          }
          is0() {
            return this.equals(R.ZERO);
          }
          constructor(e) {
            super(e);
          }
        }
        (R.BASE = new R(n.ed25519.Point.BASE)),
          (R.ZERO = new R(n.ed25519.Point.ZERO)),
          (R.Fp = S),
          (R.Fn = j),
          (n.RistrettoPoint = R),
          (n.ristretto255 = { Point: R }),
          (n.ristretto255_hasher = {
            hashToCurve(e, n) {
              let r =
                (null == n ? void 0 : n.DST) ||
                "ristretto255_XMD:SHA-512_R255MAP_RO_";
              return c((0, h.expand_message_xmd)(e, r, 64, t.sha512));
            },
            hashToScalar(e) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { DST: h._DST_scalar };
              return j.create(
                (0, p.bytesToNumberLE)(
                  (0, h.expand_message_xmd)(e, n.DST, 64, t.sha512)
                )
              );
            },
          }),
          (n.hashToCurve = n.ed25519_hasher.hashToCurve),
          (n.encodeToCurve = n.ed25519_hasher.encodeToCurve),
          (n.hashToRistretto255 = n.ristretto255_hasher.hashToCurve),
          (n.hash_to_ristretto255 = n.ristretto255_hasher.hashToCurve),
          (n.ED25519_TORSION_SUBGROUP = [
            "0100000000000000000000000000000000000000000000000000000000000000",
            "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
            "0000000000000000000000000000000000000000000000000000000000000080",
            "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
            "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
            "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
            "0000000000000000000000000000000000000000000000000000000000000000",
            "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa",
          ]);
      }
    },
    542649: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      function r(e, t) {
        if (e === t) return !0;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.arraysEqual = r),
        (n.bytesEqual = function (e, t) {
          return r(e, t);
        });
    },
    598978: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.verifyMessageSignature = r),
          (n.verifySignMessage = function (e, t) {
            let {
                message: n,
                account: { publicKey: i },
              } = e,
              { signedMessage: a, signature: o } = t;
            return r({
              message: n,
              signedMessage: a,
              signature: o,
              publicKey: i,
            });
          });
        let t = e.r(687403),
          i = e.r(542649);
        function r(e) {
          let { message: n, signedMessage: r, signature: a, publicKey: o } = e;
          return (0, i.bytesEqual)(n, r) && t.ed25519.verify(a, r, o);
        }
      }
    },
    847124: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.verifySignIn = function (e, n) {
            let {
                signedMessage: i,
                signature: a,
                account: { publicKey: o },
              } = n,
              s = r(e, n);
            return (
              !!s &&
              (0, t.verifyMessageSignature)({
                message: s,
                signedMessage: i,
                signature: a,
                publicKey: o,
              })
            );
          }),
          (n.deriveSignInMessage = r),
          (n.deriveSignInMessageText = i),
          (n.parseSignInMessage = a),
          (n.parseSignInMessageText = o),
          (n.createSignInMessage = function (e) {
            let t = s(e);
            return new TextEncoder().encode(t);
          }),
          (n.createSignInMessageText = s);
        let t = e.r(598978),
          l = e.r(542649);
        function r(e, t) {
          let n = i(e, t);
          return n ? new TextEncoder().encode(n) : null;
        }
        function i(e, t) {
          let n = a(t.signedMessage);
          if (
            !n ||
            (e.domain && e.domain !== n.domain) ||
            (e.address && e.address !== n.address) ||
            e.statement !== n.statement ||
            e.uri !== n.uri ||
            e.version !== n.version ||
            e.chainId !== n.chainId ||
            e.nonce !== n.nonce ||
            e.issuedAt !== n.issuedAt ||
            e.expirationTime !== n.expirationTime ||
            e.notBefore !== n.notBefore ||
            e.requestId !== n.requestId
          )
            return null;
          if (e.resources) {
            if (!n.resources || !(0, l.arraysEqual)(e.resources, n.resources))
              return null;
          } else if (n.resources) return null;
          return s(n);
        }
        function a(e) {
          return o(new TextDecoder().decode(e));
        }
        let c = ""
            .concat("(?:\\nURI: (?<uri>[^\\n]+))?")
            .concat("(?:\\nVersion: (?<version>[^\\n]+))?")
            .concat("(?:\\nChain ID: (?<chainId>[^\\n]+))?")
            .concat("(?:\\nNonce: (?<nonce>[^\\n]+))?")
            .concat("(?:\\nIssued At: (?<issuedAt>[^\\n]+))?")
            .concat("(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?")
            .concat("(?:\\nNot Before: (?<notBefore>[^\\n]+))?")
            .concat("(?:\\nRequest ID: (?<requestId>[^\\n]+))?")
            .concat("(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?"),
          u = new RegExp(
            "^"
              .concat(
                "(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n"
              )
              .concat("(?<address>[^\\n]+)(?:\\n|$)")
              .concat("(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??")
              .concat(c, "\\n*$")
          );
        function o(e) {
          var t;
          let n = u.exec(e);
          if (!n) return null;
          let r = n.groups;
          return r
            ? {
                domain: r.domain,
                address: r.address,
                statement: r.statement,
                uri: r.uri,
                version: r.version,
                nonce: r.nonce,
                chainId: r.chainId,
                issuedAt: r.issuedAt,
                expirationTime: r.expirationTime,
                notBefore: r.notBefore,
                requestId: r.requestId,
                resources:
                  null == (t = r.resources) ? void 0 : t.split("\n- ").slice(1),
              }
            : null;
        }
        function s(e) {
          let t = "".concat(
            e.domain,
            " wants you to sign in with your Solana account:\n"
          );
          (t += "".concat(e.address)),
            e.statement && (t += "\n\n".concat(e.statement));
          let n = [];
          if (
            (e.uri && n.push("URI: ".concat(e.uri)),
            e.version && n.push("Version: ".concat(e.version)),
            e.chainId && n.push("Chain ID: ".concat(e.chainId)),
            e.nonce && n.push("Nonce: ".concat(e.nonce)),
            e.issuedAt && n.push("Issued At: ".concat(e.issuedAt)),
            e.expirationTime &&
              n.push("Expiration Time: ".concat(e.expirationTime)),
            e.notBefore && n.push("Not Before: ".concat(e.notBefore)),
            e.requestId && n.push("Request ID: ".concat(e.requestId)),
            e.resources)
          )
            for (let t of (n.push("Resources:"), e.resources))
              n.push("- ".concat(t));
          return n.length && (t += "\n\n".concat(n.join("\n"))), t;
        }
      }
    },
    887547: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        r =
          (e.e && e.e.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, i);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (e.e && e.e.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                r(t, e, n);
          };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        i(e.r(322825), n),
        i(e.r(687519), n),
        i(e.r(847124), n),
        i(e.r(598978), n);
    },
    119898: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        let t;
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e.r(887547);
        let I = {
          ERROR_ASSOCIATION_PORT_OUT_OF_RANGE:
            "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
          ERROR_REFLECTOR_ID_OUT_OF_RANGE: "ERROR_REFLECTOR_ID_OUT_OF_RANGE",
          ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
          ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
          ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
          ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
          ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
          ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION",
          ERROR_BROWSER_NOT_SUPPORTED: "ERROR_BROWSER_NOT_SUPPORTED",
        };
        class S extends Error {
          constructor(...e) {
            let [t, n, r] = e;
            super(n),
              (this.code = t),
              (this.data = r),
              (this.name = "SolanaMobileWalletAdapterError");
          }
        }
        class j extends Error {
          constructor(...e) {
            let [t, n, r, i] = e;
            super(r),
              (this.code = n),
              (this.data = i),
              (this.jsonRpcMessageId = t),
              (this.name = "SolanaMobileWalletAdapterProtocolError");
          }
        }
        function i(e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function a(e, t) {
          let n = window.btoa(String.fromCharCode.call(null, ...e));
          return t
            ? n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            : n;
        }
        function o(e, t) {
          return i(this, void 0, void 0, function* () {
            let n = yield crypto.subtle.exportKey("raw", e),
              r = yield crypto.subtle.sign(
                { hash: "SHA-256", name: "ECDSA" },
                t,
                n
              ),
              i = new Uint8Array(n.byteLength + r.byteLength);
            return (
              i.set(new Uint8Array(n), 0),
              i.set(new Uint8Array(r), n.byteLength),
              i
            );
          });
        }
        let A = "solana:signTransactions",
          T = "solana:cloneAuthorization";
        function s(e, t) {
          return new Proxy(
            {},
            {
              get: (n, a) =>
                "then" === a
                  ? null
                  : (null == n[a] &&
                      (n[a] = function (n) {
                        return i(this, void 0, void 0, function* () {
                          let { method: o, params: s } = (function (e, t, n) {
                              let r = t,
                                i = e
                                  .toString()
                                  .replace(/[A-Z]/g, (e) =>
                                    "_".concat(e.toLowerCase())
                                  )
                                  .toLowerCase();
                              switch (e) {
                                case "authorize": {
                                  let { chain: e } = r;
                                  if ("legacy" === n) {
                                    switch (e) {
                                      case "solana:testnet":
                                        e = "testnet";
                                        break;
                                      case "solana:devnet":
                                        e = "devnet";
                                        break;
                                      case "solana:mainnet":
                                        e = "mainnet-beta";
                                        break;
                                      default:
                                        e = r.cluster;
                                    }
                                    r.cluster = e;
                                  } else {
                                    switch (e) {
                                      case "testnet":
                                      case "devnet":
                                        e = "solana:".concat(e);
                                        break;
                                      case "mainnet-beta":
                                        e = "solana:mainnet";
                                    }
                                    r.chain = e;
                                  }
                                }
                                case "reauthorize": {
                                  let { auth_token: e, identity: t } = r;
                                  e &&
                                    ("legacy" === n
                                      ? ((i = "reauthorize"),
                                        (r = { auth_token: e, identity: t }))
                                      : (i = "authorize"));
                                }
                              }
                              return { method: i, params: r };
                            })(a, n, e),
                            l = yield t(o, s);
                          return (
                            "authorize" === o &&
                              s.sign_in_payload &&
                              !l.sign_in_result &&
                              (l.sign_in_result = yield (function (e, t, n) {
                                var a;
                                return i(this, void 0, void 0, function* () {
                                  var i, o;
                                  let s =
                                      null != (a = e.domain)
                                        ? a
                                        : window.location.host,
                                    l = t.accounts[0].address,
                                    c =
                                      ((i = Object.assign(
                                        Object.assign({}, e),
                                        { domain: s, address: l }
                                      )),
                                      (o = r.createSignInMessageText(i)),
                                      window.btoa(o)),
                                    u = yield n("sign_messages", {
                                      addresses: [l],
                                      payloads: [c],
                                    });
                                  return {
                                    address: l,
                                    signed_message: c,
                                    signature: u.signed_payloads[0].slice(
                                      c.length
                                    ),
                                  };
                                });
                              })(s.sign_in_payload, l, t)),
                            (function (e, t, n) {
                              if ("getCapabilities" === e)
                                switch (n) {
                                  case "legacy": {
                                    let e = [A];
                                    return (
                                      !0 === t.supports_clone_authorization &&
                                        e.push(T),
                                      Object.assign(Object.assign({}, t), {
                                        features: e,
                                      })
                                    );
                                  }
                                  case "v1":
                                    return Object.assign(Object.assign({}, t), {
                                      supports_sign_and_send_transactions: !0,
                                      supports_clone_authorization:
                                        t.features.includes(T),
                                    });
                                }
                              return t;
                            })(a, l, e)
                          );
                        });
                      }),
                    n[a]),
              defineProperty: () => !1,
              deleteProperty: () => !1,
            }
          );
        }
        function l(e, n) {
          return i(this, void 0, void 0, function* () {
            let r = e.slice(0, 4),
              i = e.slice(4, 16),
              a = e.slice(16),
              o = yield crypto.subtle.decrypt(c(r, i), n, a);
            return (void 0 === t && (t = new TextDecoder("utf-8")), t).decode(
              o
            );
          });
        }
        function c(e, t) {
          return { additionalData: e, iv: t, name: "AES-GCM", tagLength: 128 };
        }
        function u() {
          return i(this, void 0, void 0, function* () {
            return yield crypto.subtle.generateKey(
              { name: "ECDSA", namedCurve: "P-256" },
              !1,
              ["sign"]
            );
          });
        }
        function d() {
          return i(this, void 0, void 0, function* () {
            return yield crypto.subtle.generateKey(
              { name: "ECDH", namedCurve: "P-256" },
              !1,
              ["deriveKey", "deriveBits"]
            );
          });
        }
        function f(e) {
          let t = "",
            n = new Uint8Array(e),
            r = n.byteLength;
          for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
          return window.btoa(t);
        }
        function h(e) {
          if (e < 49152 || e > 65535)
            throw new S(
              I.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,
              "Association port number must be between 49152 and 65535. ".concat(
                e,
                " given."
              ),
              { port: e }
            );
          return e;
        }
        function g(e) {
          return e.replace(
            /[/+=]/g,
            (e) => ({ "/": "_", "+": "-", "=": "." }[e])
          );
        }
        function m(e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        }
        function p(e, t) {
          let n = null;
          if (t) {
            try {
              n = new URL(t);
            } catch (e) {}
            if ((null == n ? void 0 : n.protocol) !== "https:")
              throw new S(
                I.ERROR_FORBIDDEN_WALLET_BASE_URL,
                "Base URLs supplied by wallets must be valid `https` URLs"
              );
          }
          return (
            n || (n = new URL("".concat("solana-wallet", ":/"))),
            new URL(
              e.startsWith("/") ? e : [...m(n.pathname), ...m(e)].join("/"),
              n
            )
          );
        }
        function y(e, t) {
          return i(this, void 0, void 0, function* () {
            return (function (e, t, n) {
              return i(this, void 0, void 0, function* () {
                let r = (function (e) {
                    if (e >= 0x100000000)
                      throw Error(
                        "Outbound sequence number overflow. The maximum sequence number is 32-bytes."
                      );
                    let t = new ArrayBuffer(4);
                    return (
                      new DataView(t).setUint32(0, e, !1), new Uint8Array(t)
                    );
                  })(t),
                  i = new Uint8Array(12);
                crypto.getRandomValues(i);
                let a = yield crypto.subtle.encrypt(
                    c(r, i),
                    n,
                    new TextEncoder().encode(e)
                  ),
                  o = new Uint8Array(
                    r.byteLength + i.byteLength + a.byteLength
                  );
                return (
                  o.set(new Uint8Array(r), 0),
                  o.set(new Uint8Array(i), r.byteLength),
                  o.set(new Uint8Array(a), r.byteLength + i.byteLength),
                  o
                );
              });
            })(JSON.stringify(e), e.id, t);
          });
        }
        function w(e, t) {
          return i(this, void 0, void 0, function* () {
            let n = JSON.parse(yield l(e, t));
            if (Object.hasOwnProperty.call(n, "error"))
              throw new j(n.id, n.error.code, n.error.message);
            return n;
          });
        }
        function M(e, t, n) {
          return i(this, void 0, void 0, function* () {
            let [r, i] = yield Promise.all([
                crypto.subtle.exportKey("raw", t),
                crypto.subtle.importKey(
                  "raw",
                  e.slice(0, 65),
                  { name: "ECDH", namedCurve: "P-256" },
                  !1,
                  []
                ),
              ]),
              a = yield crypto.subtle.deriveBits(
                { name: "ECDH", public: i },
                n,
                256
              ),
              o = yield crypto.subtle.importKey("raw", a, "HKDF", !1, [
                "deriveKey",
              ]);
            return yield crypto.subtle.deriveKey(
              {
                name: "HKDF",
                hash: "SHA-256",
                salt: new Uint8Array(r),
                info: new Uint8Array(),
              },
              o,
              { name: "AES-GCM", length: 128 },
              !1,
              ["encrypt", "decrypt"]
            );
          });
        }
        function v(e, t) {
          return i(this, void 0, void 0, function* () {
            let n = JSON.parse(yield l(e, t)),
              r = "legacy";
            if (Object.hasOwnProperty.call(n, "v"))
              switch (n.v) {
                case 1:
                case "1":
                case "v1":
                  r = "v1";
                  break;
                case "legacy":
                  r = "legacy";
                  break;
                default:
                  throw new S(
                    I.ERROR_INVALID_PROTOCOL_VERSION,
                    "Unknown/unsupported protocol version: ".concat(n.v)
                  );
              }
            return { protocol_version: r };
          });
        }
        let D = { Firefox: 0, Other: 1 },
          C = null,
          L = {
            retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3],
            timeoutMs: 3e4,
          },
          O = "com.solana.mobilewalletadapter.v1",
          x = "com.solana.mobilewalletadapter.v1.base64";
        function b() {
          if ("undefined" == typeof window || !0 !== window.isSecureContext)
            throw new S(
              I.ERROR_SECURE_CONTEXT_REQUIRED,
              "The mobile wallet adapter protocol must be used in a secure context (`https`)."
            );
        }
        function N(e) {
          let t;
          try {
            t = new URL(e);
          } catch (e) {
            throw new S(
              I.ERROR_FORBIDDEN_WALLET_BASE_URL,
              "Invalid base URL supplied by wallet"
            );
          }
          if ("https:" !== t.protocol)
            throw new S(
              I.ERROR_FORBIDDEN_WALLET_BASE_URL,
              "Base URLs supplied by wallets must be valid `https` URLs"
            );
        }
        function E(e) {
          return new DataView(e).getUint32(0, !1);
        }
        (n.SolanaCloneAuthorization = T),
          (n.SolanaMobileWalletAdapterError = S),
          (n.SolanaMobileWalletAdapterErrorCode = I),
          (n.SolanaMobileWalletAdapterProtocolError = j),
          (n.SolanaMobileWalletAdapterProtocolErrorCode = {
            ERROR_AUTHORIZATION_FAILED: -1,
            ERROR_INVALID_PAYLOADS: -2,
            ERROR_NOT_SIGNED: -3,
            ERROR_NOT_SUBMITTED: -4,
            ERROR_TOO_MANY_PAYLOADS: -5,
            ERROR_ATTEST_ORIGIN_ANDROID: -100,
          }),
          (n.SolanaSignInWithSolana = "solana:signInWithSolana"),
          (n.SolanaSignTransactions = A),
          (n.startRemoteScenario = function (e) {
            return i(this, void 0, void 0, function* () {
              let t, n, r, l, c;
              b();
              let h = yield u(),
                m = "wss://".concat(
                  null == e ? void 0 : e.remoteHostAuthority,
                  "/reflect"
                ),
                A = (() => {
                  let e = [...L.retryDelayScheduleMs];
                  return () => (e.length > 1 ? e.shift() : e[0]);
                })(),
                T = 1,
                D = 0,
                C = { __type: "disconnected" },
                z = (e) =>
                  i(this, void 0, void 0, function* () {
                    var t;
                    return "base64" != n
                      ? yield e.data.arrayBuffer()
                      : ((t = yield e.data),
                        new Uint8Array(
                          window
                            .atob(t)
                            .split("")
                            .map((e) => e.charCodeAt(0))
                        )).buffer;
                  }),
                _ = yield new Promise((o, s) => {
                  let c,
                    u = () =>
                      i(this, void 0, void 0, function* () {
                        if ("connecting" !== C.__type)
                          return void console.warn(
                            "Expected adapter state to be `connecting` at the moment the websocket opens. " +
                              "Got `".concat(C.__type, "`.")
                          );
                        (n = r.protocol.includes(x) ? "base64" : "binary"),
                          r.removeEventListener("open", u);
                      }),
                    d = (e) => {
                      e.wasClean
                        ? (C = { __type: "disconnected" })
                        : s(
                            new S(
                              I.ERROR_SESSION_CLOSED,
                              "The wallet session dropped unexpectedly ("
                                .concat(e.code, ": ")
                                .concat(e.reason, ")."),
                              { closeEvent: e }
                            )
                          ),
                        l();
                    },
                    y = (e) =>
                      i(this, void 0, void 0, function* () {
                        l(),
                          Date.now() - t >= L.timeoutMs
                            ? s(
                                new S(
                                  I.ERROR_SESSION_TIMEOUT,
                                  "Failed to connect to the wallet websocket at ".concat(
                                    m,
                                    "."
                                  )
                                )
                              )
                            : (yield new Promise((e) => {
                                let t = A();
                                c = window.setTimeout(e, t);
                              }),
                              M());
                      }),
                    w = (t) =>
                      i(this, void 0, void 0, function* () {
                        let n = yield z(t);
                        if ("connecting" === C.__type) {
                          if (0 == n.byteLength)
                            throw Error(
                              "Encountered unexpected message while connecting"
                            );
                          let t = (function (e) {
                            let { value: t, offset: n } = (function (e) {
                              var t,
                                n = new Uint8Array(e),
                                r = e.byteLength,
                                i = 0,
                                a = 0;
                              do {
                                if (a >= r || a > 10)
                                  throw RangeError("Failed to decode varint");
                                i |= (127 & (t = n[a++])) << (7 * a);
                              } while (t >= 128);
                              return { value: i, offset: a };
                            })(e);
                            return new Uint8Array(e.slice(n, n + t));
                          })(n);
                          C = {
                            __type: "reflector_id_received",
                            reflectorId: t,
                          };
                          let s = yield (function (e, t, n, r) {
                            let o =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : ["v1"];
                            return i(this, void 0, void 0, function* () {
                              let i = f(
                                  yield crypto.subtle.exportKey("raw", e)
                                ),
                                s = p("v1/associate/remote", r);
                              return (
                                s.searchParams.set("association", g(i)),
                                s.searchParams.set("reflector", "".concat(t)),
                                s.searchParams.set("id", "".concat(a(n, !0))),
                                o.forEach((e) => {
                                  s.searchParams.set("v", e);
                                }),
                                s
                              );
                            });
                          })(
                            h.publicKey,
                            e.remoteHostAuthority,
                            t,
                            null == e ? void 0 : e.baseUri
                          );
                          r.removeEventListener("message", w), o(s);
                        }
                      }),
                    M = () => {
                      l && l(),
                        (C = { __type: "connecting", associationKeypair: h }),
                        void 0 === t && (t = Date.now()),
                        (r = new WebSocket(m, [O, x])).addEventListener(
                          "open",
                          u
                        ),
                        r.addEventListener("close", d),
                        r.addEventListener("error", y),
                        r.addEventListener("message", w),
                        (l = () => {
                          window.clearTimeout(c),
                            r.removeEventListener("open", u),
                            r.removeEventListener("close", d),
                            r.removeEventListener("error", y),
                            r.removeEventListener("message", w);
                        });
                    };
                  M();
                }),
                P = !1;
              return {
                associationUrl: _,
                close: () => {
                  r.close(), c();
                },
                wallet: new Promise((e, t) => {
                  let u = {},
                    f = (l) =>
                      i(this, void 0, void 0, function* () {
                        let c = yield z(l);
                        switch (C.__type) {
                          case "reflector_id_received":
                            if (0 !== c.byteLength)
                              throw Error(
                                "Encountered unexpected message while awaiting reflection"
                              );
                            let f = yield d(),
                              g = yield o(f.publicKey, h.privateKey);
                            "base64" == n ? r.send(a(g)) : r.send(g),
                              (C = {
                                __type: "hello_req_sent",
                                associationPublicKey: h.publicKey,
                                ecdhPrivateKey: f.privateKey,
                              });
                            break;
                          case "connected":
                            try {
                              let e = c.slice(0, 4),
                                t = E(e);
                              if (t !== D + 1)
                                throw Error(
                                  "Encrypted message has invalid sequence number"
                                );
                              D = t;
                              let n = yield w(c, C.sharedSecret),
                                r = u[n.id];
                              delete u[n.id], r.resolve(n.result);
                            } catch (e) {
                              if (e instanceof j) {
                                let t = u[e.jsonRpcMessageId];
                                delete u[e.jsonRpcMessageId], t.reject(e);
                              } else throw e;
                            }
                            break;
                          case "hello_req_sent": {
                            let o = yield M(
                                c,
                                C.associationPublicKey,
                                C.ecdhPrivateKey
                              ),
                              l = c.slice(65),
                              d =
                                0 !== l.byteLength
                                  ? yield i(this, void 0, void 0, function* () {
                                      let e = E(l.slice(0, 4));
                                      if (e !== D + 1)
                                        throw Error(
                                          "Encrypted message has invalid sequence number"
                                        );
                                      return (D = e), v(l, o);
                                    })
                                  : { protocol_version: "legacy" };
                            C = {
                              __type: "connected",
                              sharedSecret: o,
                              sessionProperties: d,
                            };
                            let f = s(d.protocol_version, (e, t) =>
                              i(this, void 0, void 0, function* () {
                                let i = T++,
                                  s = yield y(
                                    {
                                      id: i,
                                      jsonrpc: "2.0",
                                      method: e,
                                      params: null != t ? t : {},
                                    },
                                    o
                                  );
                                return (
                                  "base64" == n ? r.send(a(s)) : r.send(s),
                                  new Promise((t, n) => {
                                    u[i] = {
                                      resolve(r) {
                                        switch (e) {
                                          case "authorize":
                                          case "reauthorize": {
                                            let { wallet_uri_base: e } = r;
                                            if (null != e)
                                              try {
                                                N(e);
                                              } catch (e) {
                                                n(e);
                                                return;
                                              }
                                          }
                                        }
                                        t(r);
                                      },
                                      reject: n,
                                    };
                                  })
                                );
                              })
                            );
                            P = !0;
                            try {
                              e(f);
                            } catch (e) {
                              t(e);
                            }
                          }
                        }
                      });
                  r.addEventListener("message", f),
                    (c = () => {
                      r.removeEventListener("message", f),
                        l(),
                        P ||
                          t(
                            new S(
                              I.ERROR_SESSION_CLOSED,
                              "The wallet session was closed before connection.",
                              {
                                closeEvent: new CloseEvent(
                                  "socket was closed before connection"
                                ),
                              }
                            )
                          );
                    });
                }),
              };
            });
          }),
          (n.transact = function (e, t) {
            return i(this, void 0, void 0, function* () {
              let n;
              b();
              let r = yield u(),
                a = yield (function (e, t) {
                  return i(this, void 0, void 0, function* () {
                    let n = h(49152 + Math.floor(16384 * Math.random())),
                      r = yield (function (e, t, n) {
                        let r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : ["v1"];
                        return i(this, void 0, void 0, function* () {
                          let i = h(t),
                            a = f(yield crypto.subtle.exportKey("raw", e)),
                            o = p("v1/associate/local", n);
                          return (
                            o.searchParams.set("association", g(a)),
                            o.searchParams.set("port", "".concat(i)),
                            r.forEach((e) => {
                              o.searchParams.set("v", e);
                            }),
                            o
                          );
                        });
                      })(e, n, t);
                    return (
                      yield (function (e) {
                        return i(this, void 0, void 0, function* () {
                          if ("https:" === e.protocol)
                            window.location.assign(e);
                          else
                            try {
                              switch (
                                -1 !== navigator.userAgent.indexOf("Firefox/")
                                  ? D.Firefox
                                  : D.Other
                              ) {
                                case D.Firefox:
                                  null == C &&
                                    (((C =
                                      document.createElement(
                                        "iframe"
                                      )).style.display = "none"),
                                    document.body.appendChild(C)),
                                    (C.contentWindow.location.href =
                                      e.toString());
                                  break;
                                case D.Other: {
                                  let t = new Promise((e, t) => {
                                    function n() {
                                      clearTimeout(i),
                                        window.removeEventListener("blur", r);
                                    }
                                    function r() {
                                      n(), e();
                                    }
                                    window.addEventListener("blur", r);
                                    let i = setTimeout(() => {
                                      n(), t();
                                    }, 3e3);
                                  });
                                  window.location.assign(e), yield t;
                                }
                              }
                            } catch (e) {
                              throw new S(
                                I.ERROR_WALLET_NOT_FOUND,
                                "Found no installed wallet that supports the mobile wallet protocol."
                              );
                            }
                        });
                      })(r),
                      n
                    );
                  });
                })(r.publicKey, null == t ? void 0 : t.baseUri),
                l = "ws://localhost:".concat(a, "/solana-wallet"),
                c = (() => {
                  let e = [...L.retryDelayScheduleMs];
                  return () => (e.length > 1 ? e.shift() : e[0]);
                })(),
                m = 1,
                A = 0,
                T = { __type: "disconnected" };
              return new Promise((t, a) => {
                let u,
                  f,
                  h,
                  g = {},
                  p = () =>
                    i(this, void 0, void 0, function* () {
                      if ("connecting" !== T.__type)
                        return void console.warn(
                          "Expected adapter state to be `connecting` at the moment the websocket opens. " +
                            "Got `".concat(T.__type, "`.")
                        );
                      u.removeEventListener("open", p);
                      let { associationKeypair: e } = T,
                        t = yield d();
                      u.send(yield o(t.publicKey, e.privateKey)),
                        (T = {
                          __type: "hello_req_sent",
                          associationPublicKey: e.publicKey,
                          ecdhPrivateKey: t.privateKey,
                        });
                    }),
                  b = (e) => {
                    e.wasClean
                      ? (T = { __type: "disconnected" })
                      : a(
                          new S(
                            I.ERROR_SESSION_CLOSED,
                            "The wallet session dropped unexpectedly ("
                              .concat(e.code, ": ")
                              .concat(e.reason, ")."),
                            { closeEvent: e }
                          )
                        ),
                      f();
                  },
                  D = (e) =>
                    i(this, void 0, void 0, function* () {
                      f(),
                        Date.now() - n >= L.timeoutMs
                          ? a(
                              new S(
                                I.ERROR_SESSION_TIMEOUT,
                                "Failed to connect to the wallet websocket at ".concat(
                                  l,
                                  "."
                                )
                              )
                            )
                          : (yield new Promise((e) => {
                              let t = c();
                              h = window.setTimeout(e, t);
                            }),
                            x());
                    }),
                  C = (n) =>
                    i(this, void 0, void 0, function* () {
                      let l = yield n.data.arrayBuffer();
                      switch (T.__type) {
                        case "connecting":
                          if (0 !== l.byteLength)
                            throw Error(
                              "Encountered unexpected message while connecting"
                            );
                          let c = yield d();
                          u.send(yield o(c.publicKey, r.privateKey)),
                            (T = {
                              __type: "hello_req_sent",
                              associationPublicKey: r.publicKey,
                              ecdhPrivateKey: c.privateKey,
                            });
                          break;
                        case "connected":
                          try {
                            let e = l.slice(0, 4),
                              t = E(e);
                            if (t !== A + 1)
                              throw Error(
                                "Encrypted message has invalid sequence number"
                              );
                            A = t;
                            let n = yield w(l, T.sharedSecret),
                              r = g[n.id];
                            delete g[n.id], r.resolve(n.result);
                          } catch (e) {
                            if (e instanceof j) {
                              let t = g[e.jsonRpcMessageId];
                              delete g[e.jsonRpcMessageId], t.reject(e);
                            } else throw e;
                          }
                          break;
                        case "hello_req_sent": {
                          if (0 === l.byteLength) {
                            let e = yield d();
                            u.send(yield o(e.publicKey, r.privateKey)),
                              (T = {
                                __type: "hello_req_sent",
                                associationPublicKey: r.publicKey,
                                ecdhPrivateKey: e.privateKey,
                              });
                            break;
                          }
                          let n = yield M(
                              l,
                              T.associationPublicKey,
                              T.ecdhPrivateKey
                            ),
                            c = l.slice(65),
                            h =
                              0 !== c.byteLength
                                ? yield i(this, void 0, void 0, function* () {
                                    let e = E(c.slice(0, 4));
                                    if (e !== A + 1)
                                      throw Error(
                                        "Encrypted message has invalid sequence number"
                                      );
                                    return (A = e), v(c, n);
                                  })
                                : { protocol_version: "legacy" };
                          T = {
                            __type: "connected",
                            sharedSecret: n,
                            sessionProperties: h,
                          };
                          let p = s(h.protocol_version, (e, t) =>
                            i(this, void 0, void 0, function* () {
                              let r = m++;
                              return (
                                u.send(
                                  yield y(
                                    {
                                      id: r,
                                      jsonrpc: "2.0",
                                      method: e,
                                      params: null != t ? t : {},
                                    },
                                    n
                                  )
                                ),
                                new Promise((t, n) => {
                                  g[r] = {
                                    resolve(r) {
                                      switch (e) {
                                        case "authorize":
                                        case "reauthorize": {
                                          let { wallet_uri_base: e } = r;
                                          if (null != e)
                                            try {
                                              N(e);
                                            } catch (e) {
                                              n(e);
                                              return;
                                            }
                                        }
                                      }
                                      t(r);
                                    },
                                    reject: n,
                                  };
                                })
                              );
                            })
                          );
                          try {
                            t(yield e(p));
                          } catch (e) {
                            a(e);
                          } finally {
                            f(), u.close();
                          }
                        }
                      }
                    }),
                  x = () => {
                    f && f(),
                      (T = { __type: "connecting", associationKeypair: r }),
                      void 0 === n && (n = Date.now()),
                      (u = new WebSocket(l, [O])).addEventListener("open", p),
                      u.addEventListener("close", b),
                      u.addEventListener("error", D),
                      u.addEventListener("message", C),
                      (f = () => {
                        window.clearTimeout(h),
                          u.removeEventListener("open", p),
                          u.removeEventListener("close", b),
                          u.removeEventListener("error", D),
                          u.removeEventListener("message", C);
                      });
                  };
                x();
              });
            });
          });
      }
    },
    753255: (e) => {
      "use strict";
      e.s({ startRemoteScenario: () => d, transact: () => u });
      var t = e.i(184405),
        n = e.i(119898),
        r = e.i(199844);
      function i(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function a(e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function o(e) {
        return window.btoa(String.fromCharCode.call(null, ...e));
      }
      function s(e) {
        return new Uint8Array(
          window
            .atob(e)
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      }
      function l(e) {
        return o(
          "version" in e
            ? e.serialize()
            : e.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
        );
      }
      function c(e) {
        let n = e[0] * t.SIGNATURE_LENGTH_IN_BYTES + 1;
        return "legacy" ===
          t.VersionedMessage.deserializeMessageVersion(e.slice(n, e.length))
          ? t.Transaction.from(e)
          : t.VersionedTransaction.deserialize(e);
      }
      function u(e, t) {
        return a(this, void 0, void 0, function* () {
          return yield (0, n.transact)((t) => e(f(t)), t);
        });
      }
      function d(e) {
        return a(this, void 0, void 0, function* () {
          let {
            wallet: t,
            close: r,
            associationUrl: i,
          } = yield (0, n.startRemoteScenario)(e);
          return { wallet: t.then((e) => f(e)), close: r, associationUrl: i };
        });
      }
      function f(e) {
        return new Proxy(
          {},
          {
            get(t, n) {
              if (null == t[n])
                switch (n) {
                  case "signAndSendTransactions":
                    t[n] = function (t) {
                      var {
                          minContextSlot: n,
                          commitment: o,
                          skipPreflight: c,
                          maxRetries: u,
                          waitForCommitmentToSendNextTransaction: d,
                          transactions: f,
                        } = t,
                        h = i(t, [
                          "minContextSlot",
                          "commitment",
                          "skipPreflight",
                          "maxRetries",
                          "waitForCommitmentToSendNextTransaction",
                          "transactions",
                        ]);
                      return a(this, void 0, void 0, function* () {
                        let t = f.map(l),
                          i = {
                            min_context_slot: n,
                            commitment: o,
                            skip_preflight: c,
                            max_retries: u,
                            wait_for_commitment_to_send_next_transaction: d,
                          },
                          { signatures: a } = yield e.signAndSendTransactions(
                            Object.assign(
                              Object.assign(
                                Object.assign({}, h),
                                Object.values(i).some((e) => null != e)
                                  ? { options: i }
                                  : null
                              ),
                              { payloads: t }
                            )
                          );
                        return a.map(s).map(r.default.encode);
                      });
                    };
                    break;
                  case "signMessages":
                    t[n] = function (t) {
                      var { payloads: n } = t,
                        r = i(t, ["payloads"]);
                      return a(this, void 0, void 0, function* () {
                        let t = n.map(o),
                          { signed_payloads: i } = yield e.signMessages(
                            Object.assign(Object.assign({}, r), { payloads: t })
                          );
                        return i.map(s);
                      });
                    };
                    break;
                  case "signTransactions":
                    t[n] = function (t) {
                      var { transactions: n } = t,
                        r = i(t, ["transactions"]);
                      return a(this, void 0, void 0, function* () {
                        let t = n.map(l),
                          { signed_payloads: i } = yield e.signTransactions(
                            Object.assign(Object.assign({}, r), { payloads: t })
                          );
                        return i.map(s).map(c);
                      });
                    };
                    break;
                  default:
                    t[n] = e[n];
                }
              return t[n];
            },
            defineProperty: () => !1,
            deleteProperty: () => !1,
          }
        );
      }
    },
    639686: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r,
          i,
          a,
          o,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          g,
          m,
          p,
          y,
          w,
          M,
          v,
          b,
          N,
          E,
          I,
          S,
          j,
          A,
          T,
          D,
          C,
          L,
          O,
          x,
          z,
          _,
          P,
          k,
          W,
          R,
          U,
          B,
          Y,
          Q,
          F,
          H,
          Z,
          G,
          K,
          V,
          q,
          J,
          X,
          $,
          ee,
          et,
          en,
          er,
          ei,
          ea,
          eo,
          es,
          el,
          ec,
          eu,
          ed,
          ef,
          eh,
          eg,
          em,
          ep,
          ey,
          ew,
          eM,
          ev,
          eb,
          eN,
          eE,
          eI,
          eS,
          ej,
          eA,
          eT = e.r(967008),
          eD = e.r(184405),
          eC = e.r(326934),
          eL = e.r(742230),
          eO = e.r(861102),
          ex = e.r(753255),
          ez = e.r(199844);
        function e_(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var eP = e_(eC),
          ek = e_(ez);
        function eW(e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function eR(e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function eU(e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        }
        class t {
          init() {
            return eW(this, void 0, void 0, function* () {
              console.log("Injecting modal"), eR(this, r, "m", s).call(this);
            });
          }
          addEventListener(e, t) {
            var n;
            return (
              (null == (n = eR(this, a, "f")[e]) ? void 0 : n.push(t)) ||
                (eR(this, a, "f")[e] = [t]),
              () => this.removeEventListener(e, t)
            );
          }
          removeEventListener(e, t) {
            var n;
            eR(this, a, "f")[e] =
              null == (n = eR(this, a, "f")[e])
                ? void 0
                : n.filter((e) => t !== e);
          }
          constructor() {
            var e = this;
            r.add(this),
              i.set(this, null),
              a.set(this, {}),
              o.set(this, !1),
              (this.dom = null),
              (this.open = () => {
                console.debug("Modal open"),
                  eR(this, r, "m", l).call(this),
                  eR(this, i, "f") && (eR(this, i, "f").style.display = "flex");
              }),
              (this.close = function () {
                var t;
                let n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
                console.debug("Modal close"),
                  eR(e, r, "m", c).call(e),
                  eR(e, i, "f") && (eR(e, i, "f").style.display = "none"),
                  null == (t = eR(e, a, "f").close) || t.forEach((e) => e(n));
              }),
              u.set(this, (e) => {
                "Escape" === e.key && this.close(e);
              }),
              (this.init = this.init.bind(this)),
              eU(
                this,
                i,
                document.getElementById(
                  "mobile-wallet-adapter-embedded-root-ui"
                ),
                "f"
              );
          }
        }
        (i = new WeakMap()),
          (a = new WeakMap()),
          (o = new WeakMap()),
          (u = new WeakMap()),
          (r = new WeakSet()),
          (s = function () {
            if (
              document.getElementById("mobile-wallet-adapter-embedded-root-ui")
            ) {
              eR(this, i, "f") ||
                eU(
                  this,
                  i,
                  document.getElementById(
                    "mobile-wallet-adapter-embedded-root-ui"
                  ),
                  "f"
                );
              return;
            }
            eU(this, i, document.createElement("div"), "f"),
              (eR(this, i, "f").id = "mobile-wallet-adapter-embedded-root-ui"),
              (eR(this, i, "f").innerHTML =
                '\n<div class="mobile-wallet-adapter-embedded-modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">\n    <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>\n	<div class="mobile-wallet-adapter-embedded-modal-card">\n		<div>\n			<button data-modal-close class="mobile-wallet-adapter-embedded-modal-close">\n				<svg width="14" height="14">\n					<path d="M 6.7125,8.3036995 1.9082,13.108199 c -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 C 0.1056,12.896899 0,12.631699 0,12.312499 c 0,-0.3192 0.1056,-0.5844 0.3167,-0.7958 L 5.1212,6.7124995 0.3167,1.9082 C 0.1056,1.6969 0,1.4317 0,1.1125 0,0.7933 0.1056,0.5281 0.3167,0.3167 0.5281,0.1056 0.7933,0 1.1125,0 1.4317,0 1.6969,0.1056 1.9082,0.3167 L 6.7125,5.1212 11.5167,0.3167 C 11.7281,0.1056 11.9933,0 12.3125,0 c 0.3192,0 0.5844,0.1056 0.7957,0.3167 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 L 8.3037001,6.7124995 13.1082,11.516699 c 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 z" />\n				</svg>\n			</button>\n		</div>\n		<div class="mobile-wallet-adapter-embedded-modal-content"></div>\n	</div>\n</div>\n'),
              (eR(this, i, "f").style.display = "none");
            let e = eR(this, i, "f").querySelector(
              ".mobile-wallet-adapter-embedded-modal-content"
            );
            e && (e.innerHTML = this.contentHtml);
            let t = document.createElement("style");
            (t.id = "mobile-wallet-adapter-embedded-modal-styles"),
              (t.textContent =
                '\n.mobile-wallet-adapter-embedded-modal-container {\n    display: flex; /* Use flexbox to center content */\n    justify-content: center; /* Center horizontally */\n    align-items: center; /* Center vertically */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    overflow-y: auto; /* enable scrolling */\n}\n\n.mobile-wallet-adapter-embedded-modal-card {\n    display: flex;\n    flex-direction: column;\n    margin: auto 20px;\n    max-width: 780px;\n    padding: 20px;\n    border-radius: 24px;\n    background: #ffffff;\n    font-family: "Inter Tight", "PT Sans", Calibri, sans-serif;\n    transform: translateY(-200%);\n    animation: slide-in 0.5s forwards;\n}\n\n@keyframes slide-in {\n    100% { transform: translateY(0%); }\n}\n\n.mobile-wallet-adapter-embedded-modal-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    cursor: pointer;\n    background: #e4e9e9;\n    border: none;\n    border-radius: 50%;\n}\n\n.mobile-wallet-adapter-embedded-modal-close:focus-visible {\n    outline-color: red;\n}\n\n.mobile-wallet-adapter-embedded-modal-close svg {\n    fill: #546266;\n    transition: fill 200ms ease 0s;\n}\n\n.mobile-wallet-adapter-embedded-modal-close:hover svg {\n    fill: #fff;\n}\n' +
                this.contentStyles);
            let n = document.createElement("div");
            (n.innerHTML =
              '\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">\n'),
              (this.dom = n.attachShadow({ mode: "closed" })),
              this.dom.appendChild(t),
              this.dom.appendChild(eR(this, i, "f")),
              document.body.appendChild(n);
          }),
          (l = function () {
            !eR(this, i, "f") ||
              eR(this, o, "f") ||
              ([
                ...eR(this, i, "f").querySelectorAll("[data-modal-close]"),
              ].forEach((e) =>
                null == e ? void 0 : e.addEventListener("click", this.close)
              ),
              window.addEventListener("load", this.close),
              document.addEventListener("keydown", eR(this, u, "f")),
              eU(this, o, !0, "f"));
          }),
          (c = function () {
            if (eR(this, o, "f"))
              window.removeEventListener("load", this.close),
                document.removeEventListener("keydown", eR(this, u, "f")),
                eR(this, i, "f") &&
                  ([
                    ...eR(this, i, "f").querySelectorAll("[data-modal-close]"),
                  ].forEach((e) =>
                    null == e
                      ? void 0
                      : e.removeEventListener("click", this.close)
                  ),
                  eU(this, o, !1, "f"));
          });
        class eK extends t {
          initWithQR(e) {
            let t = Object.create(null, { init: { get: () => super.init } });
            return eW(this, void 0, void 0, function* () {
              t.init.call(this), this.populateQRCode(e);
            });
          }
          populateQRCode(e) {
            var t;
            return eW(this, void 0, void 0, function* () {
              let n =
                null == (t = this.dom)
                  ? void 0
                  : t.getElementById(
                      "mobile-wallet-adapter-embedded-modal-qr-code-container"
                    );
              if (n) {
                let t = yield eP.default.toCanvas(e, { width: 200, margin: 0 });
                null !== n.firstElementChild
                  ? n.replaceChild(t, n.firstElementChild)
                  : n.appendChild(t);
              } else console.error("QRCode Container not found");
            });
          }
          constructor() {
            super(...arguments),
              (this.contentStyles = eq),
              (this.contentHtml = eV);
          }
        }
        let eV =
            '\n<div class="mobile-wallet-adapter-embedded-modal-qr-content">\n    <div>\n        <svg class="mobile-wallet-adapter-embedded-modal-icon" width="100%" height="100%">\n            <circle r="52" cx="53" cy="53" fill="#99b3be" stroke="#000000" stroke-width="2"/>\n            <path d="m 53,82.7305 c -3.3116,0 -6.1361,-1.169 -8.4735,-3.507 -2.338,-2.338 -3.507,-5.1625 -3.507,-8.4735 0,-3.3116 1.169,-6.1364 3.507,-8.4744 2.3374,-2.338 5.1619,-3.507 8.4735,-3.507 3.3116,0 6.1361,1.169 8.4735,3.507 2.338,2.338 3.507,5.1628 3.507,8.4744 0,3.311 -1.169,6.1355 -3.507,8.4735 -2.3374,2.338 -5.1619,3.507 -8.4735,3.507 z m 0.007,-5.25 c 1.8532,0 3.437,-0.6598 4.7512,-1.9793 1.3149,-1.3195 1.9723,-2.9058 1.9723,-4.7591 0,-1.8526 -0.6598,-3.4364 -1.9793,-4.7512 -1.3195,-1.3149 -2.9055,-1.9723 -4.7582,-1.9723 -1.8533,0 -3.437,0.6598 -4.7513,1.9793 -1.3148,1.3195 -1.9722,2.9058 -1.9722,4.7591 0,1.8527 0.6597,3.4364 1.9792,4.7512 1.3195,1.3149 2.9056,1.9723 4.7583,1.9723 z m -28,-33.5729 -3.85,-3.6347 c 4.1195,-4.025 8.8792,-7.1984 14.2791,-9.52 5.4005,-2.3223 11.2551,-3.4834 17.5639,-3.4834 6.3087,0 12.1634,1.1611 17.5639,3.4834 5.3999,2.3216 10.1596,5.495 14.2791,9.52 l -3.85,3.6347 C 77.2999,40.358 73.0684,37.5726 68.2985,35.5514 63.5292,33.5301 58.4296,32.5195 53,32.5195 c -5.4297,0 -10.5292,1.0106 -15.2985,3.0319 -4.7699,2.0212 -9.0014,4.8066 -12.6945,8.3562 z m 44.625,10.8771 c -2.2709,-2.1046 -4.7962,-3.7167 -7.5758,-4.8361 -2.7795,-1.12 -5.7983,-1.68 -9.0562,-1.68 -3.2579,0 -6.2621,0.56 -9.0125,1.68 -2.7504,1.1194 -5.2903,2.7315 -7.6195,4.8361 L 32.5189,51.15 c 2.8355,-2.6028 5.9777,-4.6086 9.4263,-6.0174 3.4481,-1.4087 7.133,-2.1131 11.0548,-2.1131 3.9217,0 7.5979,0.7044 11.0285,2.1131 3.43,1.4088 6.5631,3.4146 9.3992,6.0174 z"/>\n        </svg>\n        <div class="mobile-wallet-adapter-embedded-modal-title">Remote Mobile Wallet Adapter</div>\n    </div>\n    <div>\n        <div>\n            <h4 class="mobile-wallet-adapter-embedded-modal-qr-label">\n                Open your wallet and scan this code\n            </h4>\n        </div>\n        <div id="mobile-wallet-adapter-embedded-modal-qr-code-container" class="mobile-wallet-adapter-embedded-modal-qr-code-container"></div>\n    </div>\n</div>\n<div class="mobile-wallet-adapter-embedded-modal-divider"><hr></div>\n<div class="mobile-wallet-adapter-embedded-modal-footer">\n    <div class="mobile-wallet-adapter-embedded-modal-subtitle">\n        Follow the instructions on your device. When you\'re finished, this screen will update.\n    </div>\n    <div class="mobile-wallet-adapter-embedded-modal-progress-badge">\n        <div>\n            <div class="spinner">\n                <div class="leftWrapper">\n                    <div class="left">\n                        <div class="circle"></div>\n                    </div>\n                </div>\n                <div class="rightWrapper">\n                    <div class="right">\n                        <div class="circle"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div>Waiting for scan</div>\n    </div>\n</div>\n',
          eq =
            '\n.mobile-wallet-adapter-embedded-modal-qr-content {\n    display: flex; \n    margin-top: 10px;\n    padding: 10px;\n}\n\n.mobile-wallet-adapter-embedded-modal-qr-content > div:first-child {\n    display: flex;\n    flex-direction: column;\n    flex: 2;\n    margin-top: auto;\n    margin-right: 30px;\n}\n\n.mobile-wallet-adapter-embedded-modal-qr-content > div:nth-child(2) {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    margin-left: auto;\n}\n\n.mobile-wallet-adapter-embedded-modal-footer {\n    display: flex;\n    padding: 10px;\n}\n\n.mobile-wallet-adapter-embedded-modal-icon {}\n\n.mobile-wallet-adapter-embedded-modal-title {\n    color: #000000;\n    font-size: 2.5em;\n    font-weight: 600;\n}\n\n.mobile-wallet-adapter-embedded-modal-qr-label {\n    text-align: right;\n    color: #000000;\n}\n\n.mobile-wallet-adapter-embedded-modal-qr-code-container {\n    margin-left: auto;\n}\n\n.mobile-wallet-adapter-embedded-modal-divider {\n    margin-top: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.mobile-wallet-adapter-embedded-modal-divider hr {\n    border-top: 1px solid #D9DEDE;\n}\n\n.mobile-wallet-adapter-embedded-modal-subtitle {\n    margin: auto;\n    margin-right: 60px;\n    padding: 20px;\n    color: #6E8286;\n}\n\n.mobile-wallet-adapter-embedded-modal-progress-badge {\n    display: flex;\n    background: #F7F8F8;\n    height: 56px;\n    min-width: 200px;\n    margin: auto;\n    padding-left: 20px;\n    padding-right: 20px;\n    border-radius: 18px;\n    color: #A8B6B8;\n    align-items: center;\n}\n\n.mobile-wallet-adapter-embedded-modal-progress-badge > div:first-child {\n    margin-left: auto;\n    margin-right: 20px;\n}\n\n.mobile-wallet-adapter-embedded-modal-progress-badge > div:nth-child(2) {\n    margin-right: auto;\n}\n\n/* Smaller screens */\n@media all and (max-width: 600px) {\n    .mobile-wallet-adapter-embedded-modal-card {\n        text-align: center;\n    }\n    .mobile-wallet-adapter-embedded-modal-qr-content {\n        flex-direction: column;\n    }\n    .mobile-wallet-adapter-embedded-modal-qr-content > div:first-child {\n        margin: auto;\n    }\n    .mobile-wallet-adapter-embedded-modal-qr-content > div:nth-child(2) {\n        margin: auto;\n        flex: 2 auto;\n    }\n    .mobile-wallet-adapter-embedded-modal-footer {\n        flex-direction: column;\n    }\n    .mobile-wallet-adapter-embedded-modal-icon {\n        display: none;\n    }\n    .mobile-wallet-adapter-embedded-modal-title {\n        font-size: 1.5em;\n    }\n    .mobile-wallet-adapter-embedded-modal-subtitle {\n        margin-right: unset;\n    }\n    .mobile-wallet-adapter-embedded-modal-qr-label {\n        text-align: center;\n    }\n    .mobile-wallet-adapter-embedded-modal-qr-code-container {\n        margin: auto;\n    }\n}\n\n/* Spinner */\n@keyframes spinLeft {\n    0% {\n        transform: rotate(20deg);\n    }\n    50% {\n        transform: rotate(160deg);\n    }\n    100% {\n        transform: rotate(20deg);\n    }\n}\n@keyframes spinRight {\n    0% {\n        transform: rotate(160deg);\n    }\n    50% {\n        transform: rotate(20deg);\n    }\n    100% {\n        transform: rotate(160deg);\n    }\n}\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(2520deg);\n    }\n}\n\n.spinner {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    margin: auto;\n    animation: spin 10s linear infinite;\n}\n.spinner::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n.right, .rightWrapper, .left, .leftWrapper {\n    position: absolute;\n    top: 0;\n    overflow: hidden;\n    width: .75em;\n    height: 1.5em;\n}\n.left, .leftWrapper {\n    left: 0;\n}\n.right {\n    left: -12px;\n}\n.rightWrapper {\n    right: 0;\n}\n.circle {\n    border: .125em solid #A8B6B8;\n    width: 1.25em; /* 1.5em - 2*0.125em border */\n    height: 1.25em; /* 1.5em - 2*0.125em border */\n    border-radius: 0.75em; /* 0.5*1.5em spinner size 8 */\n}\n.left {\n    transform-origin: 100% 50%;\n    animation: spinLeft 2.5s cubic-bezier(.2,0,.8,1) infinite;\n}\n.right {\n    transform-origin: 100% 50%;\n    animation: spinRight 2.5s cubic-bezier(.2,0,.8,1) infinite;\n}\n',
          eJ =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuNUgxN0MxNy44Mjg0IDIuNSAxOC41IDMuMTcxNTcgMTguNSA0VjIwQzE4LjUgMjAuODI4NCAxNy44Mjg0IDIxLjUgMTcgMjEuNUg3QzYuMTcxNTcgMjEuNSA1LjUgMjAuODI4NCA1LjUgMjBWNEM1LjUgMy4xNzE1NyA2LjE3MTU3IDIuNSA3IDIuNVpNMyA0QzMgMS43OTA4NiA0Ljc5MDg2IDAgNyAwSDE3QzE5LjIwOTEgMCAyMSAxLjc5MDg2IDIxIDRWMjBDMjEgMjIuMjA5MSAxOS4yMDkxIDI0IDE3IDI0SDdDNC43OTA4NiAyNCAzIDIyLjIwOTEgMyAyMFY0Wk0xMSA0LjYxNTM4QzEwLjQ0NzcgNC42MTUzOCAxMCA1LjA2MzEgMTAgNS42MTUzOFY2LjM4NDYyQzEwIDYuOTM2OSAxMC40NDc3IDcuMzg0NjIgMTEgNy4zODQ2MkgxM0MxMy41NTIzIDcuMzg0NjIgMTQgNi45MzY5IDE0IDYuMzg0NjJWNS42MTUzOEMxNCA1LjA2MzEgMTMuNTUyMyA0LjYxNTM4IDEzIDQuNjE1MzhIMTFaIiBmaWxsPSIjRENCOEZGIi8+Cjwvc3ZnPgo=";
        function eB(e) {
          return "version" in e;
        }
        function eY(e) {
          return window.btoa(String.fromCharCode.call(null, ...e));
        }
        function eQ(e) {
          return new Uint8Array(
            window
              .atob(e)
              .split("")
              .map((e) => e.charCodeAt(0))
          );
        }
        let eX = "Mobile Wallet Adapter",
          e$ = [
            eT.SolanaSignAndSendTransaction,
            eT.SolanaSignTransaction,
            eT.SolanaSignMessage,
            eT.SolanaSignIn,
          ];
        class e0 {
          get version() {
            return eR(this, h, "f");
          }
          get name() {
            return eR(this, g, "f");
          }
          get url() {
            return eR(this, m, "f");
          }
          get icon() {
            return eR(this, p, "f");
          }
          get chains() {
            return eR(this, N, "f");
          }
          get features() {
            return Object.assign(
              {
                [eL.StandardConnect]: {
                  version: "1.0.0",
                  connect: eR(this, D, "f"),
                },
                [eL.StandardDisconnect]: {
                  version: "1.0.0",
                  disconnect: eR(this, z, "f"),
                },
                [eL.StandardEvents]: { version: "1.0.0", on: eR(this, j, "f") },
                [eT.SolanaSignMessage]: {
                  version: "1.0.0",
                  signMessage: eR(this, Y, "f"),
                },
                [eT.SolanaSignIn]: {
                  version: "1.0.0",
                  signIn: eR(this, Q, "f"),
                },
              },
              eR(this, I, "f")
            );
          }
          get accounts() {
            var e, t;
            return null !=
              (t = null == (e = eR(this, w, "f")) ? void 0 : e.accounts)
              ? t
              : [];
          }
          get connected() {
            return !!eR(this, w, "f");
          }
          get isAuthorized() {
            return !!eR(this, w, "f");
          }
          get currentAuthorization() {
            return eR(this, w, "f");
          }
          get cachedAuthorizationResult() {
            return eR(this, M, "f").get();
          }
          constructor(e) {
            var t = this;
            d.add(this),
              f.set(this, {}),
              h.set(this, "1.0.0"),
              g.set(this, eX),
              m.set(this, "https://solanamobile.com/wallets"),
              p.set(this, eJ),
              y.set(this, void 0),
              w.set(this, void 0),
              M.set(this, void 0),
              v.set(this, !1),
              b.set(this, 0),
              N.set(this, []),
              E.set(this, void 0),
              I.set(this, void 0),
              S.set(this, void 0),
              j.set(this, (e, t) => {
                var n;
                return (
                  (null == (n = eR(this, f, "f")[e]) ? void 0 : n.push(t)) ||
                    (eR(this, f, "f")[e] = [t]),
                  () => eR(this, d, "m", T).call(this, e, t)
                );
              }),
              D.set(this, function () {
                let { silent: e } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return eW(t, void 0, void 0, function* () {
                  if (eR(this, v, "f") || this.connected)
                    return { accounts: this.accounts };
                  eU(this, v, !0, "f");
                  try {
                    if (e) {
                      let e = yield eR(this, M, "f").get();
                      if (!e) return { accounts: this.accounts };
                      yield eR(this, L, "f").call(this, e);
                    } else yield eR(this, C, "f").call(this);
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  } finally {
                    eU(this, v, !1, "f");
                  }
                  return { accounts: this.accounts };
                });
              }),
              C.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  try {
                    let t = yield eR(this, M, "f").get();
                    if (t) return eR(this, L, "f").call(this, t), t;
                    let n = yield eR(this, E, "f").select(eR(this, N, "f"));
                    return yield eR(this, _, "f").call(this, (t) =>
                      eW(this, void 0, void 0, function* () {
                        let [r, i] = yield Promise.all([
                            t.getCapabilities(),
                            t.authorize({
                              chain: n,
                              identity: eR(this, y, "f"),
                              sign_in_payload: e,
                            }),
                          ]),
                          a = eR(this, k, "f").call(this, i.accounts),
                          o = Object.assign(Object.assign({}, i), {
                            accounts: a,
                            chain: n,
                          });
                        return (
                          Promise.all([
                            eR(this, O, "f").call(this, r),
                            eR(this, M, "f").set(o),
                            eR(this, L, "f").call(this, o),
                          ]),
                          o
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                })
              ),
              L.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  var t;
                  let n =
                    null == eR(this, w, "f") ||
                    (null == (t = eR(this, w, "f"))
                      ? void 0
                      : t.accounts.length) !== e.accounts.length ||
                    eR(this, w, "f").accounts.some(
                      (t, n) => t.address !== e.accounts[n].address
                    );
                  eU(this, w, e, "f"),
                    n &&
                      eR(this, d, "m", A).call(this, "change", {
                        accounts: this.accounts,
                      });
                })
              ),
              O.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  let t = e.features.includes("solana:signTransactions"),
                    n = e.supports_sign_and_send_transactions,
                    r =
                      eT.SolanaSignAndSendTransaction in this.features !== n ||
                      eT.SolanaSignTransaction in this.features !== t;
                  eU(
                    this,
                    I,
                    Object.assign(
                      Object.assign(
                        {},
                        (n || (!n && !t)) && {
                          [eT.SolanaSignAndSendTransaction]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signAndSendTransaction: eR(this, U, "f"),
                          },
                        }
                      ),
                      t && {
                        [eT.SolanaSignTransaction]: {
                          version: "1.0.0",
                          supportedTransactionVersions: ["legacy", 0],
                          signTransaction: eR(this, B, "f"),
                        },
                      }
                    ),
                    "f"
                  ),
                    r &&
                      eR(this, d, "m", A).call(this, "change", {
                        features: this.features,
                      });
                })
              ),
              x.set(this, (e, t, n) =>
                eW(this, void 0, void 0, function* () {
                  try {
                    let r = yield e.authorize({
                        auth_token: t,
                        identity: eR(this, y, "f"),
                        chain: n,
                      }),
                      i = eR(this, k, "f").call(this, r.accounts),
                      a = Object.assign(Object.assign({}, r), {
                        accounts: i,
                        chain: n,
                      });
                    Promise.all([
                      eR(this, M, "f").set(a),
                      eR(this, L, "f").call(this, a),
                    ]);
                  } catch (e) {
                    throw (
                      (eR(this, z, "f").call(this),
                      Error(
                        (e instanceof Error && e.message) || "Unknown error"
                      ))
                    );
                  }
                })
              ),
              z.set(this, () =>
                eW(this, void 0, void 0, function* () {
                  var e;
                  eR(this, M, "f").clear(),
                    eU(this, v, !1, "f"),
                    eU(this, b, ((e = eR(this, b, "f")), ++e), "f"),
                    eU(this, w, void 0, "f"),
                    eR(this, d, "m", A).call(this, "change", {
                      accounts: this.accounts,
                    });
                })
              ),
              _.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  var t;
                  let n =
                      null == (t = eR(this, w, "f"))
                        ? void 0
                        : t.wallet_uri_base,
                    r = eR(this, b, "f");
                  try {
                    return yield ex.transact(e, n ? { baseUri: n } : void 0);
                  } catch (e) {
                    throw (
                      (eR(this, b, "f") !== r && (yield new Promise(() => {})),
                      e instanceof Error &&
                        "SolanaMobileWalletAdapterError" === e.name &&
                        "ERROR_WALLET_NOT_FOUND" === e.code &&
                        (yield eR(this, S, "f").call(this, this)),
                      e)
                    );
                  }
                })
              ),
              P.set(this, () => {
                if (!eR(this, w, "f")) throw Error("Wallet not connected");
                return {
                  authToken: eR(this, w, "f").auth_token,
                  chain: eR(this, w, "f").chain,
                };
              }),
              k.set(this, (e) =>
                e.map((e) => {
                  var t, n;
                  let r = eQ(e.address);
                  return {
                    address: ek.default.encode(r),
                    publicKey: r,
                    label: e.label,
                    icon: e.icon,
                    chains: null != (t = e.chains) ? t : eR(this, N, "f"),
                    features: null != (n = e.features) ? n : e$,
                  };
                })
              ),
              W.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  let { authToken: t, chain: n } = eR(this, P, "f").call(this);
                  try {
                    return yield eR(this, _, "f").call(this, (r) =>
                      eW(this, void 0, void 0, function* () {
                        return (
                          yield eR(this, x, "f").call(this, r, t, n),
                          yield r.signTransactions({ transactions: e })
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                })
              ),
              R.set(this, (e, t) =>
                eW(this, void 0, void 0, function* () {
                  let { authToken: n, chain: r } = eR(this, P, "f").call(this);
                  try {
                    return yield eR(this, _, "f").call(this, (i) =>
                      eW(this, void 0, void 0, function* () {
                        let [a, o] = yield Promise.all([
                          i.getCapabilities(),
                          eR(this, x, "f").call(this, i, n, r),
                        ]);
                        if (a.supports_sign_and_send_transactions)
                          return (yield i.signAndSendTransactions(
                            Object.assign(Object.assign({}, t), {
                              transactions: [e],
                            })
                          ))[0];
                        throw Error(
                          "connected wallet does not support signAndSendTransaction"
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                })
              ),
              U.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let e = [];
                  for (let t of n) {
                    let n = eD.VersionedTransaction.deserialize(t.transaction),
                      r = yield eR(this, R, "f").call(this, n, t.options);
                    e.push({ signature: ek.default.decode(r) });
                  }
                  return e;
                });
              }),
              B.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let e = n.map((e) => {
                    let { transaction: t } = e;
                    return eD.VersionedTransaction.deserialize(t);
                  });
                  return (yield eR(this, W, "f").call(this, e)).map((e) => ({
                    signedTransaction: eB(e)
                      ? e.serialize()
                      : new Uint8Array(
                          e.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1,
                          })
                        ),
                  }));
                });
              }),
              Y.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let { authToken: e, chain: t } = eR(this, P, "f").call(this),
                    r = n.map((e) => {
                      let { account: t } = e;
                      return eY(t.publicKey);
                    }),
                    i = n.map((e) => {
                      let { message: t } = e;
                      return t;
                    });
                  try {
                    return yield eR(this, _, "f").call(this, (n) =>
                      eW(this, void 0, void 0, function* () {
                        return (
                          yield eR(this, x, "f").call(this, n, e, t),
                          (yield n.signMessages({
                            addresses: r,
                            payloads: i,
                          })).map((e) => ({
                            signedMessage: e,
                            signature: e.slice(-64),
                          }))
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                });
              }),
              Q.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let e = [];
                  if (!(n.length > 1))
                    return [yield eR(this, F, "f").call(this, n[0])];
                  for (let t of n) e.push(yield eR(this, F, "f").call(this, t));
                  return e;
                });
              }),
              F.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  var t, n;
                  eU(this, v, !0, "f");
                  try {
                    let r = yield eR(this, C, "f").call(
                      this,
                      Object.assign(Object.assign({}, e), {
                        domain:
                          null != (t = null == e ? void 0 : e.domain)
                            ? t
                            : window.location.host,
                      })
                    );
                    if (!r.sign_in_result)
                      throw Error(
                        "Sign in failed, no sign in result returned by wallet"
                      );
                    let i = r.sign_in_result.address;
                    return {
                      account: Object.assign(
                        Object.assign(
                          {},
                          null != (n = r.accounts.find((e) => e.address == i))
                            ? n
                            : { address: i }
                        ),
                        { publicKey: eQ(i) }
                      ),
                      signedMessage: eQ(r.sign_in_result.signed_message),
                      signature: eQ(r.sign_in_result.signature),
                    };
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  } finally {
                    eU(this, v, !1, "f");
                  }
                })
              ),
              eU(this, M, e.authorizationCache, "f"),
              eU(this, y, e.appIdentity, "f"),
              eU(this, N, e.chains, "f"),
              eU(this, E, e.chainSelector, "f"),
              eU(this, S, e.onWalletNotFound, "f"),
              eU(
                this,
                I,
                {
                  [eT.SolanaSignAndSendTransaction]: {
                    version: "1.0.0",
                    supportedTransactionVersions: ["legacy", 0],
                    signAndSendTransaction: eR(this, U, "f"),
                  },
                },
                "f"
              );
          }
        }
        (f = new WeakMap()),
          (h = new WeakMap()),
          (g = new WeakMap()),
          (m = new WeakMap()),
          (p = new WeakMap()),
          (y = new WeakMap()),
          (w = new WeakMap()),
          (M = new WeakMap()),
          (v = new WeakMap()),
          (b = new WeakMap()),
          (N = new WeakMap()),
          (E = new WeakMap()),
          (I = new WeakMap()),
          (S = new WeakMap()),
          (j = new WeakMap()),
          (D = new WeakMap()),
          (C = new WeakMap()),
          (L = new WeakMap()),
          (O = new WeakMap()),
          (x = new WeakMap()),
          (z = new WeakMap()),
          (_ = new WeakMap()),
          (P = new WeakMap()),
          (k = new WeakMap()),
          (W = new WeakMap()),
          (R = new WeakMap()),
          (U = new WeakMap()),
          (B = new WeakMap()),
          (Y = new WeakMap()),
          (Q = new WeakMap()),
          (F = new WeakMap()),
          (d = new WeakSet()),
          (A = function (e) {
            for (
              var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            null == (t = eR(this, f, "f")[e]) ||
              t.forEach((e) => e.apply(null, r));
          }),
          (T = function (e, t) {
            var n;
            eR(this, f, "f")[e] =
              null == (n = eR(this, f, "f")[e])
                ? void 0
                : n.filter((e) => t !== e);
          });
        class e1 {
          get version() {
            return eR(this, G, "f");
          }
          get name() {
            return eR(this, K, "f");
          }
          get url() {
            return eR(this, V, "f");
          }
          get icon() {
            return eR(this, q, "f");
          }
          get chains() {
            return eR(this, en, "f");
          }
          get features() {
            return Object.assign(
              {
                [eL.StandardConnect]: {
                  version: "1.0.0",
                  connect: eR(this, ed, "f"),
                },
                [eL.StandardDisconnect]: {
                  version: "1.0.0",
                  disconnect: eR(this, ep, "f"),
                },
                [eL.StandardEvents]: {
                  version: "1.0.0",
                  on: eR(this, el, "f"),
                },
                [eT.SolanaSignMessage]: {
                  version: "1.0.0",
                  signMessage: eR(this, eI, "f"),
                },
                [eT.SolanaSignIn]: {
                  version: "1.0.0",
                  signIn: eR(this, eS, "f"),
                },
              },
              eR(this, ei, "f")
            );
          }
          get accounts() {
            var e, t;
            return null !=
              (t = null == (e = eR(this, X, "f")) ? void 0 : e.accounts)
              ? t
              : [];
          }
          get connected() {
            return !!eR(this, es, "f") && !!eR(this, X, "f");
          }
          get isAuthorized() {
            return !!eR(this, X, "f");
          }
          get currentAuthorization() {
            return eR(this, X, "f");
          }
          get cachedAuthorizationResult() {
            return eR(this, $, "f").get();
          }
          constructor(e) {
            var t = this;
            H.add(this),
              Z.set(this, {}),
              G.set(this, "1.0.0"),
              K.set(this, eX),
              V.set(this, "https://solanamobile.com/wallets"),
              q.set(this, eJ),
              J.set(this, void 0),
              X.set(this, void 0),
              $.set(this, void 0),
              ee.set(this, !1),
              et.set(this, 0),
              en.set(this, []),
              er.set(this, void 0),
              ei.set(this, void 0),
              ea.set(this, void 0),
              eo.set(this, void 0),
              es.set(this, void 0),
              el.set(this, (e, t) => {
                var n;
                return (
                  (null == (n = eR(this, Z, "f")[e]) ? void 0 : n.push(t)) ||
                    (eR(this, Z, "f")[e] = [t]),
                  () => eR(this, H, "m", eu).call(this, e, t)
                );
              }),
              ed.set(this, function () {
                let { silent: e } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return eW(t, void 0, void 0, function* () {
                  if (eR(this, ee, "f") || this.connected)
                    return { accounts: this.accounts };
                  eU(this, ee, !0, "f");
                  try {
                    yield eR(this, ef, "f").call(this);
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  } finally {
                    eU(this, ee, !1, "f");
                  }
                  return { accounts: this.accounts };
                });
              }),
              ef.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  try {
                    let t = yield eR(this, $, "f").get();
                    if (t) return eR(this, eh, "f").call(this, t), t;
                    eR(this, es, "f") && eU(this, es, void 0, "f");
                    let n = yield eR(this, er, "f").select(eR(this, en, "f"));
                    return yield eR(this, ey, "f").call(this, (t) =>
                      eW(this, void 0, void 0, function* () {
                        let [r, i] = yield Promise.all([
                            t.getCapabilities(),
                            t.authorize({
                              chain: n,
                              identity: eR(this, J, "f"),
                              sign_in_payload: e,
                            }),
                          ]),
                          a = eR(this, eM, "f").call(this, i.accounts),
                          o = Object.assign(Object.assign({}, i), {
                            accounts: a,
                            chain: n,
                          });
                        return (
                          Promise.all([
                            eR(this, eg, "f").call(this, r),
                            eR(this, $, "f").set(o),
                            eR(this, eh, "f").call(this, o),
                          ]),
                          o
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                })
              ),
              eh.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  var t;
                  let n =
                    null == eR(this, X, "f") ||
                    (null == (t = eR(this, X, "f"))
                      ? void 0
                      : t.accounts.length) !== e.accounts.length ||
                    eR(this, X, "f").accounts.some(
                      (t, n) => t.address !== e.accounts[n].address
                    );
                  eU(this, X, e, "f"),
                    n &&
                      eR(this, H, "m", ec).call(this, "change", {
                        accounts: this.accounts,
                      });
                })
              ),
              eg.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  let t = e.features.includes("solana:signTransactions"),
                    n =
                      e.supports_sign_and_send_transactions ||
                      e.features.includes("solana:signAndSendTransaction"),
                    r =
                      eT.SolanaSignAndSendTransaction in this.features !== n ||
                      eT.SolanaSignTransaction in this.features !== t;
                  eU(
                    this,
                    ei,
                    Object.assign(
                      Object.assign(
                        {},
                        n && {
                          [eT.SolanaSignAndSendTransaction]: {
                            version: "1.0.0",
                            supportedTransactionVersions:
                              e.supported_transaction_versions,
                            signAndSendTransaction: eR(this, eN, "f"),
                          },
                        }
                      ),
                      t && {
                        [eT.SolanaSignTransaction]: {
                          version: "1.0.0",
                          supportedTransactionVersions:
                            e.supported_transaction_versions,
                          signTransaction: eR(this, eE, "f"),
                        },
                      }
                    ),
                    "f"
                  ),
                    r &&
                      eR(this, H, "m", ec).call(this, "change", {
                        features: this.features,
                      });
                })
              ),
              em.set(this, (e, t, n) =>
                eW(this, void 0, void 0, function* () {
                  try {
                    let r = yield e.authorize({
                        auth_token: t,
                        identity: eR(this, J, "f"),
                      }),
                      i = eR(this, eM, "f").call(this, r.accounts),
                      a = Object.assign(Object.assign({}, r), {
                        accounts: i,
                        chain: n,
                      });
                    Promise.all([
                      eR(this, $, "f").set(a),
                      eR(this, eh, "f").call(this, a),
                    ]);
                  } catch (e) {
                    throw (
                      (eR(this, ep, "f").call(this),
                      Error(
                        (e instanceof Error && e.message) || "Unknown error"
                      ))
                    );
                  }
                })
              ),
              ep.set(this, () =>
                eW(this, void 0, void 0, function* () {
                  var e, t;
                  null == (e = eR(this, es, "f")) || e.close(),
                    eR(this, $, "f").clear(),
                    eU(this, ee, !1, "f"),
                    eU(this, et, ((t = eR(this, et, "f")), ++t), "f"),
                    eU(this, X, void 0, "f"),
                    eU(this, es, void 0, "f"),
                    eR(this, H, "m", ec).call(this, "change", {
                      accounts: this.accounts,
                    });
                })
              ),
              ey.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  var t;
                  let n =
                      null == (t = eR(this, X, "f"))
                        ? void 0
                        : t.wallet_uri_base,
                    r = Object.assign(
                      Object.assign({}, n ? { baseUri: n } : void 0),
                      { remoteHostAuthority: eR(this, eo, "f") }
                    ),
                    i = eR(this, et, "f"),
                    a = new eK();
                  if (eR(this, es, "f")) return e(eR(this, es, "f").wallet);
                  try {
                    let {
                        associationUrl: t,
                        close: n,
                        wallet: i,
                      } = yield ex.startRemoteScenario(r),
                      o = a.addEventListener("close", (e) => {
                        e && n();
                      });
                    return (
                      a.initWithQR(t.toString()),
                      a.open(),
                      eU(this, es, { close: n, wallet: yield i }, "f"),
                      o(),
                      a.close(),
                      yield e(eR(this, es, "f").wallet)
                    );
                  } catch (e) {
                    throw (
                      (a.close(),
                      eR(this, et, "f") !== i && (yield new Promise(() => {})),
                      e instanceof Error &&
                        "SolanaMobileWalletAdapterError" === e.name &&
                        "ERROR_WALLET_NOT_FOUND" === e.code &&
                        (yield eR(this, ea, "f").call(this, this)),
                      e)
                    );
                  }
                })
              ),
              ew.set(this, () => {
                if (!eR(this, X, "f")) throw Error("Wallet not connected");
                return {
                  authToken: eR(this, X, "f").auth_token,
                  chain: eR(this, X, "f").chain,
                };
              }),
              eM.set(this, (e) =>
                e.map((e) => {
                  var t, n;
                  let r = eQ(e.address);
                  return {
                    address: ek.default.encode(r),
                    publicKey: r,
                    label: e.label,
                    icon: e.icon,
                    chains: null != (t = e.chains) ? t : eR(this, en, "f"),
                    features: null != (n = e.features) ? n : e$,
                  };
                })
              ),
              ev.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  let { authToken: t, chain: n } = eR(this, ew, "f").call(this);
                  try {
                    return yield eR(this, ey, "f").call(this, (r) =>
                      eW(this, void 0, void 0, function* () {
                        return (
                          yield eR(this, em, "f").call(this, r, t, n),
                          yield r.signTransactions({ transactions: e })
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                })
              ),
              eb.set(this, (e, t) =>
                eW(this, void 0, void 0, function* () {
                  let { authToken: n, chain: r } = eR(this, ew, "f").call(this);
                  try {
                    return yield eR(this, ey, "f").call(this, (i) =>
                      eW(this, void 0, void 0, function* () {
                        let [a, o] = yield Promise.all([
                          i.getCapabilities(),
                          eR(this, em, "f").call(this, i, n, r),
                        ]);
                        if (a.supports_sign_and_send_transactions)
                          return (yield i.signAndSendTransactions(
                            Object.assign(Object.assign({}, t), {
                              transactions: [e],
                            })
                          ))[0];
                        throw Error(
                          "connected wallet does not support signAndSendTransaction"
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                })
              ),
              eN.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let e = [];
                  for (let t of n) {
                    let n = eD.VersionedTransaction.deserialize(t.transaction),
                      r = yield eR(this, eb, "f").call(this, n, t.options);
                    e.push({ signature: ek.default.decode(r) });
                  }
                  return e;
                });
              }),
              eE.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let e = n.map((e) => {
                    let { transaction: t } = e;
                    return eD.VersionedTransaction.deserialize(t);
                  });
                  return (yield eR(this, ev, "f").call(this, e)).map((e) => ({
                    signedTransaction: eB(e)
                      ? e.serialize()
                      : new Uint8Array(
                          e.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1,
                          })
                        ),
                  }));
                });
              }),
              eI.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let { authToken: e, chain: t } = eR(this, ew, "f").call(this),
                    r = n.map((e) => {
                      let { account: t } = e;
                      return eY(t.publicKey);
                    }),
                    i = n.map((e) => {
                      let { message: t } = e;
                      return t;
                    });
                  try {
                    return yield eR(this, ey, "f").call(this, (n) =>
                      eW(this, void 0, void 0, function* () {
                        return (
                          yield eR(this, em, "f").call(this, n, e, t),
                          (yield n.signMessages({
                            addresses: r,
                            payloads: i,
                          })).map((e) => ({
                            signedMessage: e,
                            signature: e.slice(-64),
                          }))
                        );
                      })
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  }
                });
              }),
              eS.set(this, function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return eW(t, void 0, void 0, function* () {
                  let e = [];
                  if (!(n.length > 1))
                    return [yield eR(this, ej, "f").call(this, n[0])];
                  for (let t of n)
                    e.push(yield eR(this, ej, "f").call(this, t));
                  return e;
                });
              }),
              ej.set(this, (e) =>
                eW(this, void 0, void 0, function* () {
                  var t, n;
                  eU(this, ee, !0, "f");
                  try {
                    let r = yield eR(this, ef, "f").call(
                      this,
                      Object.assign(Object.assign({}, e), {
                        domain:
                          null != (t = null == e ? void 0 : e.domain)
                            ? t
                            : window.location.host,
                      })
                    );
                    if (!r.sign_in_result)
                      throw Error(
                        "Sign in failed, no sign in result returned by wallet"
                      );
                    let i = r.sign_in_result.address;
                    return {
                      account: Object.assign(
                        Object.assign(
                          {},
                          null != (n = r.accounts.find((e) => e.address == i))
                            ? n
                            : { address: i }
                        ),
                        { publicKey: eQ(i) }
                      ),
                      signedMessage: eQ(r.sign_in_result.signed_message),
                      signature: eQ(r.sign_in_result.signature),
                    };
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error"
                    );
                  } finally {
                    eU(this, ee, !1, "f");
                  }
                })
              ),
              eU(this, $, e.authorizationCache, "f"),
              eU(this, J, e.appIdentity, "f"),
              eU(this, en, e.chains, "f"),
              eU(this, er, e.chainSelector, "f"),
              eU(this, eo, e.remoteHostAuthority, "f"),
              eU(this, ea, e.onWalletNotFound, "f"),
              eU(
                this,
                ei,
                {
                  [eT.SolanaSignAndSendTransaction]: {
                    version: "1.0.0",
                    supportedTransactionVersions: ["legacy", 0],
                    signAndSendTransaction: eR(this, eN, "f"),
                  },
                },
                "f"
              );
          }
        }
        (Z = new WeakMap()),
          (G = new WeakMap()),
          (K = new WeakMap()),
          (V = new WeakMap()),
          (q = new WeakMap()),
          (J = new WeakMap()),
          (X = new WeakMap()),
          ($ = new WeakMap()),
          (ee = new WeakMap()),
          (et = new WeakMap()),
          (en = new WeakMap()),
          (er = new WeakMap()),
          (ei = new WeakMap()),
          (ea = new WeakMap()),
          (eo = new WeakMap()),
          (es = new WeakMap()),
          (el = new WeakMap()),
          (ed = new WeakMap()),
          (ef = new WeakMap()),
          (eh = new WeakMap()),
          (eg = new WeakMap()),
          (em = new WeakMap()),
          (ep = new WeakMap()),
          (ey = new WeakMap()),
          (ew = new WeakMap()),
          (eM = new WeakMap()),
          (ev = new WeakMap()),
          (eb = new WeakMap()),
          (eN = new WeakMap()),
          (eE = new WeakMap()),
          (eI = new WeakMap()),
          (eS = new WeakMap()),
          (ej = new WeakMap()),
          (H = new WeakSet()),
          (ec = function (e) {
            for (
              var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            null == (t = eR(this, Z, "f")[e]) ||
              t.forEach((e) => e.apply(null, r));
          }),
          (eu = function (e, t) {
            var n;
            eR(this, Z, "f")[e] =
              null == (n = eR(this, Z, "f")[e])
                ? void 0
                : n.filter((e) => t !== e);
          });
        var eF = function (e, t, n, r, i) {
            if ("m" === r) throw TypeError("Private method is not writable");
            if ("a" === r && !i)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n
            );
          },
          eH = function (e, t, n, r) {
            if ("a" === n && !r)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? r
              : "a" === n
              ? r.call(e)
              : r
              ? r.value
              : t.get(e);
          };
        function eZ(e) {
          let t = (t) => {
            let { register: n } = t;
            return n(e);
          };
          try {
            window.dispatchEvent(new e4(t));
          } catch (e) {
            console.error(
              "wallet-standard:register-wallet event could not be dispatched\n",
              e
            );
          }
          try {
            window.addEventListener("wallet-standard:app-ready", (e) => {
              let { detail: n } = e;
              return t(n);
            });
          } catch (e) {
            console.error(
              "wallet-standard:app-ready event listener could not be added\n",
              e
            );
          }
        }
        class e4 extends Event {
          get detail() {
            return eH(this, eA, "f");
          }
          get type() {
            return "wallet-standard:register-wallet";
          }
          preventDefault() {
            throw Error("preventDefault cannot be called");
          }
          stopImmediatePropagation() {
            throw Error("stopImmediatePropagation cannot be called");
          }
          stopPropagation() {
            throw Error("stopPropagation cannot be called");
          }
          constructor(e) {
            super("wallet-standard:register-wallet", {
              bubbles: !1,
              cancelable: !1,
              composed: !1,
            }),
              eA.set(this, void 0),
              eF(this, eA, e, "f");
          }
        }
        eA = new WeakMap();
        class e2 extends t {
          initWithError(e) {
            super.init(), this.populateError(e);
          }
          populateError(e) {
            var t, n;
            let r =
                null == (t = this.dom)
                  ? void 0
                  : t.getElementById("mobile-wallet-adapter-error-message"),
              i =
                null == (n = this.dom)
                  ? void 0
                  : n.getElementById("mobile-wallet-adapter-error-action");
            if (r) {
              if ("SolanaMobileWalletAdapterError" === e.name)
                switch (e.code) {
                  case "ERROR_WALLET_NOT_FOUND":
                    (r.innerHTML =
                      "To use mobile wallet adapter, you must have a compatible mobile wallet application installed on your device."),
                      i &&
                        i.addEventListener("click", () => {
                          window.location.href =
                            "https://solanamobile.com/wallets";
                        });
                    return;
                  case "ERROR_BROWSER_NOT_SUPPORTED":
                    (r.innerHTML =
                      "This browser appears to be incompatible with mobile wallet adapter. Open this page in a compatible mobile browser app and try again."),
                      i && (i.style.display = "none");
                    return;
                }
              r.innerHTML = "An unexpected error occurred: ".concat(e.message);
            } else console.log("Failed to locate error dialog element");
          }
          constructor() {
            super(...arguments),
              (this.contentStyles = e5),
              (this.contentHtml = e3);
          }
        }
        let e3 =
            '\n<svg class="mobile-wallet-adapter-embedded-modal-error-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M 280,-80 Q 197,-80 138.5,-138.5 80,-197 80,-280 80,-363 138.5,-421.5 197,-480 280,-480 q 83,0 141.5,58.5 58.5,58.5 58.5,141.5 0,83 -58.5,141.5 Q 363,-80 280,-80 Z M 824,-120 568,-376 Q 556,-389 542.5,-402.5 529,-416 516,-428 q 38,-24 61,-64 23,-40 23,-88 0,-75 -52.5,-127.5 Q 495,-760 420,-760 345,-760 292.5,-707.5 240,-655 240,-580 q 0,6 0.5,11.5 0.5,5.5 1.5,11.5 -18,2 -39.5,8 -21.5,6 -38.5,14 -2,-11 -3,-22 -1,-11 -1,-23 0,-109 75.5,-184.5 Q 311,-840 420,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,43 -13.5,81.5 Q 653,-460 629,-428 l 251,252 z m -615,-61 71,-71 70,71 29,-28 -71,-71 71,-71 -28,-28 -71,71 -71,-71 -28,28 71,71 -71,71 z"/></svg>\n<div class="mobile-wallet-adapter-embedded-modal-title">We can\'t find a wallet.</div>\n<div id="mobile-wallet-adapter-error-message" class="mobile-wallet-adapter-embedded-modal-subtitle"></div>\n<div>\n    <button data-error-action id="mobile-wallet-adapter-error-action" class="mobile-wallet-adapter-embedded-modal-error-action">\n        Find a wallet\n    </button>\n</div>\n',
          e5 =
            "\n.mobile-wallet-adapter-embedded-modal-content {\n    text-align: center;\n}\n\n.mobile-wallet-adapter-embedded-modal-error-icon {\n    margin-top: 24px;\n}\n\n.mobile-wallet-adapter-embedded-modal-title {\n    margin: 18px 100px auto 100px;\n    color: #000000;\n    font-size: 2.75em;\n    font-weight: 600;\n}\n\n.mobile-wallet-adapter-embedded-modal-subtitle {\n    margin: 30px 60px 40px 60px;\n    color: #000000;\n    font-size: 1.25em;\n    font-weight: 400;\n}\n\n.mobile-wallet-adapter-embedded-modal-error-action {\n    display: block;\n    width: 100%;\n    height: 56px;\n    /*margin-top: 40px;*/\n    font-size: 1.25em;\n    /*line-height: 24px;*/\n    /*letter-spacing: -1%;*/\n    background: #000000;\n    color: #FFFFFF;\n    border-radius: 18px;\n}\n\n/* Smaller screens */\n@media all and (max-width: 600px) {\n    .mobile-wallet-adapter-embedded-modal-title {\n        font-size: 1.5em;\n        margin-right: 12px;\n        margin-left: 12px;\n    }\n    .mobile-wallet-adapter-embedded-modal-subtitle {\n        margin-right: 12px;\n        margin-left: 12px;\n    }\n}\n";
        function eG() {
          return eW(this, void 0, void 0, function* () {
            if ("undefined" != typeof window) {
              let e = window.navigator.userAgent.toLowerCase(),
                t = new e2();
              e.includes("wv")
                ? t.initWithError({
                    name: "SolanaMobileWalletAdapterError",
                    code: "ERROR_BROWSER_NOT_SUPPORTED",
                    message: "",
                  })
                : t.initWithError({
                    name: "SolanaMobileWalletAdapterError",
                    code: "ERROR_WALLET_NOT_FOUND",
                    message: "",
                  }),
                t.open();
            }
          });
        }
        let e6 = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
        (n.LocalSolanaMobileWalletAdapterWallet = e0),
          (n.RemoteSolanaMobileWalletAdapterWallet = e1),
          (n.SolanaMobileWalletAdapterWalletName = eX),
          (n.createDefaultAuthorizationCache = function () {
            let e;
            try {
              e = window.localStorage;
            } catch (e) {}
            return {
              clear() {
                return eW(this, void 0, void 0, function* () {
                  if (e)
                    try {
                      e.removeItem(e6);
                    } catch (e) {}
                });
              },
              get() {
                return eW(this, void 0, void 0, function* () {
                  if (e)
                    try {
                      let t = JSON.parse(e.getItem(e6));
                      if (!t || !t.accounts) return t || void 0;
                      {
                        let e = t.accounts.map((e) =>
                          Object.assign(Object.assign({}, e), {
                            publicKey:
                              "publicKey" in e
                                ? new Uint8Array(Object.values(e.publicKey))
                                : new eD.PublicKey(e.address).toBytes(),
                          })
                        );
                        return Object.assign(Object.assign({}, t), {
                          accounts: e,
                        });
                      }
                    } catch (e) {}
                });
              },
              set(t) {
                return eW(this, void 0, void 0, function* () {
                  if (e)
                    try {
                      e.setItem(e6, JSON.stringify(t));
                    } catch (e) {}
                });
              },
            };
          }),
          (n.createDefaultChainSelector = function () {
            return {
              select(e) {
                return eW(this, void 0, void 0, function* () {
                  return 1 === e.length
                    ? e[0]
                    : e.includes(eO.SOLANA_MAINNET_CHAIN)
                    ? eO.SOLANA_MAINNET_CHAIN
                    : e[0];
                });
              },
            };
          }),
          (n.createDefaultWalletNotFoundHandler = function () {
            return () =>
              eW(this, void 0, void 0, function* () {
                eG();
              });
          }),
          (n.defaultErrorModalWalletNotFoundHandler = eG),
          (n.registerMwa = function (e) {
            "undefined" != typeof window &&
            window.isSecureContext &&
            "undefined" != typeof document &&
            /android/i.test(navigator.userAgent)
              ? eZ(new e0(e))
              : "undefined" != typeof window &&
                window.isSecureContext &&
                "undefined" != typeof document &&
                !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) &&
                void 0 !== e.remoteHostAuthority &&
                eZ(
                  new e1(
                    Object.assign(Object.assign({}, e), {
                      remoteHostAuthority: e.remoteHostAuthority,
                    })
                  )
                );
          });
      }
    },
    145776: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r,
          i,
          a,
          o,
          s,
          l,
          c,
          u,
          d,
          f,
          h,
          g,
          m,
          p = e.r(386886),
          y = e.r(184405),
          w = e.r(967008),
          M = e.r(639686);
        function v(e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function b(e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function N(e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        }
        let t = "standard:connect";
        function E(e) {
          return window.btoa(String.fromCharCode.call(null, ...e));
        }
        function I(e) {
          switch (e) {
            case "mainnet-beta":
              return "solana:mainnet";
            case "testnet":
              return "solana:testnet";
            case "devnet":
              return "solana:devnet";
            default:
              return e;
          }
        }
        class j extends p.BaseSignInMessageSignerWalletAdapter {
          get publicKey() {
            var e;
            if (!b(this, c, "f") && b(this, l, "f"))
              try {
                N(this, c, new y.PublicKey(b(this, l, "f").publicKey), "f");
              } catch (e) {
                throw new p.WalletPublicKeyError(
                  (e instanceof Error && (null == e ? void 0 : e.message)) ||
                    "Unknown error",
                  e
                );
              }
            return null != (e = b(this, c, "f")) ? e : null;
          }
          get connected() {
            return b(this, i, "f").connected;
          }
          get connecting() {
            return b(this, a, "f");
          }
          get readyState() {
            return b(this, o, "f");
          }
          autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
            return v(this, void 0, void 0, function* () {
              return yield this.autoConnect();
            });
          }
          autoConnect() {
            return v(this, void 0, void 0, function* () {
              b(this, r, "m", d).call(this, !0);
            });
          }
          connect() {
            return v(this, void 0, void 0, function* () {
              b(this, r, "m", d).call(this);
            });
          }
          performAuthorization(e) {
            return v(this, void 0, void 0, function* () {
              try {
                let n = yield b(this, i, "f").cachedAuthorizationResult;
                if (n)
                  return (
                    yield b(this, i, "f").features[t].connect({ silent: !0 }), n
                  );
                return (
                  e
                    ? yield b(this, i, "f").features[w.SolanaSignIn].signIn(e)
                    : yield b(this, i, "f").features[t].connect(),
                  yield yield b(this, i, "f").cachedAuthorizationResult
                );
              } catch (e) {
                throw new p.WalletConnectionError(
                  (e instanceof Error && e.message) || "Unknown error",
                  e
                );
              }
            });
          }
          disconnect() {
            return v(this, void 0, void 0, function* () {
              return yield b(this, r, "m", m).call(this, () =>
                v(this, void 0, void 0, function* () {
                  N(this, a, !1, "f"),
                    N(this, c, void 0, "f"),
                    N(this, l, void 0, "f"),
                    yield b(this, i, "f").features[
                      "standard:disconnect"
                    ].disconnect(),
                    this.emit("disconnect");
                })
              );
            });
          }
          signIn(e) {
            return v(this, void 0, void 0, function* () {
              return b(this, r, "m", m).call(this, () =>
                v(this, void 0, void 0, function* () {
                  var t;
                  if (
                    b(this, o, "f") !== p.WalletReadyState.Installed &&
                    b(this, o, "f") !== p.WalletReadyState.Loadable
                  )
                    throw new p.WalletNotReadyError();
                  N(this, a, !0, "f");
                  try {
                    let n = yield b(this, i, "f").features[
                      w.SolanaSignIn
                    ].signIn(
                      Object.assign(Object.assign({}, e), {
                        domain:
                          null != (t = null == e ? void 0 : e.domain)
                            ? t
                            : window.location.host,
                      })
                    );
                    if (n.length > 0) return n[0];
                    throw Error(
                      "Sign in failed, no sign in result returned by wallet"
                    );
                  } catch (e) {
                    throw new p.WalletConnectionError(
                      (e instanceof Error && e.message) || "Unknown error",
                      e
                    );
                  } finally {
                    N(this, a, !1, "f");
                  }
                })
              );
            });
          }
          signMessage(e) {
            return v(this, void 0, void 0, function* () {
              return yield b(this, r, "m", m).call(this, () =>
                v(this, void 0, void 0, function* () {
                  let t = b(this, r, "m", h).call(this);
                  try {
                    return (yield b(this, i, "f").features[
                      w.SolanaSignMessage
                    ].signMessage({ account: t, message: e }))[0].signature;
                  } catch (e) {
                    throw new p.WalletSignMessageError(
                      null == e ? void 0 : e.message,
                      e
                    );
                  }
                })
              );
            });
          }
          sendTransaction(e, t, n) {
            return v(this, void 0, void 0, function* () {
              return yield b(this, r, "m", m).call(this, () =>
                v(this, void 0, void 0, function* () {
                  let a = b(this, r, "m", h).call(this);
                  try {
                    if (
                      w.SolanaSignAndSendTransaction in b(this, i, "f").features
                    ) {
                      let t = I(b(this, i, "f").currentAuthorization.chain),
                        [r] = (yield b(this, i, "f").features[
                          w.SolanaSignAndSendTransaction
                        ].signAndSendTransaction({
                          account: a,
                          transaction: e.serialize(),
                          chain: t,
                          options: n
                            ? {
                                skipPreflight: n.skipPreflight,
                                maxRetries: n.maxRetries,
                              }
                            : void 0,
                        })).map((e) => E(e.signature));
                      return r;
                    }
                    {
                      let [i] = yield b(this, r, "m", g).call(this, [e]);
                      if ("version" in i) return yield t.sendTransaction(i);
                      {
                        let e = i.serialize();
                        return yield t.sendRawTransaction(
                          e,
                          Object.assign(Object.assign({}, n), {
                            preflightCommitment: (function () {
                              let e, r;
                              switch (t.commitment) {
                                case "confirmed":
                                case "finalized":
                                case "processed":
                                  e = t.commitment;
                                  break;
                                default:
                                  e = "finalized";
                              }
                              switch (
                                null == n ? void 0 : n.preflightCommitment
                              ) {
                                case "confirmed":
                                case "finalized":
                                case "processed":
                                  r = n.preflightCommitment;
                                  break;
                                case void 0:
                                  r = e;
                                  break;
                                default:
                                  r = "finalized";
                              }
                              let i =
                                  "finalized" === r ? 2 : +("confirmed" === r),
                                a =
                                  "finalized" === e ? 2 : +("confirmed" === e);
                              return i < a ? r : e;
                            })(),
                          })
                        );
                      }
                    }
                  } catch (e) {
                    throw new p.WalletSendTransactionError(
                      null == e ? void 0 : e.message,
                      e
                    );
                  }
                })
              );
            });
          }
          signTransaction(e) {
            return v(this, void 0, void 0, function* () {
              return yield b(this, r, "m", m).call(this, () =>
                v(this, void 0, void 0, function* () {
                  let [t] = yield b(this, r, "m", g).call(this, [e]);
                  return t;
                })
              );
            });
          }
          signAllTransactions(e) {
            return v(this, void 0, void 0, function* () {
              return yield b(this, r, "m", m).call(this, () =>
                v(this, void 0, void 0, function* () {
                  return yield b(this, r, "m", g).call(this, e);
                })
              );
            });
          }
          constructor(e, t) {
            super(),
              r.add(this),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              i.set(this, void 0),
              a.set(this, !1),
              o.set(
                this,
                "undefined" != typeof window &&
                  window.isSecureContext &&
                  "undefined" != typeof document &&
                  /android/i.test(navigator.userAgent)
                  ? p.WalletReadyState.Loadable
                  : p.WalletReadyState.Unsupported
              ),
              s.set(this, void 0),
              l.set(this, void 0),
              c.set(this, void 0),
              u.set(this, (e) =>
                v(this, void 0, void 0, function* () {
                  if (e.accounts && e.accounts.length > 0) {
                    b(this, r, "m", f).call(this);
                    let t = yield b(this, s, "f").call(this, e.accounts);
                    t !== b(this, l, "f") &&
                      (N(this, l, t, "f"),
                      N(this, c, void 0, "f"),
                      this.emit("connect", this.publicKey));
                  }
                })
              ),
              N(
                this,
                s,
                (e) =>
                  v(this, void 0, void 0, function* () {
                    var n;
                    let r = yield t.addressSelector.select(
                      e.map((e) => {
                        let { publicKey: t } = e;
                        return E(t);
                      })
                    );
                    return null !=
                      (n = e.find((e) => {
                        let { publicKey: t } = e;
                        return E(t) === r;
                      }))
                      ? n
                      : e[0];
                  }),
                "f"
              ),
              N(this, i, e, "f"),
              b(this, i, "f").features["standard:events"].on(
                "change",
                b(this, u, "f")
              ),
              (this.name = b(this, i, "f").name),
              (this.icon = b(this, i, "f").icon),
              (this.url = b(this, i, "f").url);
          }
        }
        (i = new WeakMap()),
          (a = new WeakMap()),
          (o = new WeakMap()),
          (s = new WeakMap()),
          (l = new WeakMap()),
          (c = new WeakMap()),
          (u = new WeakMap()),
          (r = new WeakSet()),
          (d = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return v(this, void 0, void 0, function* () {
              if (!this.connecting && !this.connected)
                return yield b(this, r, "m", m).call(this, () =>
                  v(this, void 0, void 0, function* () {
                    if (
                      b(this, o, "f") !== p.WalletReadyState.Installed &&
                      b(this, o, "f") !== p.WalletReadyState.Loadable
                    )
                      throw new p.WalletNotReadyError();
                    N(this, a, !0, "f");
                    try {
                      yield b(this, i, "f").features[t].connect({ silent: e });
                    } catch (e) {
                      throw new p.WalletConnectionError(
                        (e instanceof Error && e.message) || "Unknown error",
                        e
                      );
                    } finally {
                      N(this, a, !1, "f");
                    }
                  })
                );
            });
          }),
          (f = function () {
            b(this, o, "f") !== p.WalletReadyState.Installed &&
              this.emit(
                "readyStateChange",
                N(this, o, p.WalletReadyState.Installed, "f")
              );
          }),
          (h = function () {
            if (!b(this, i, "f").isAuthorized || !b(this, l, "f"))
              throw new p.WalletNotConnectedError();
            return b(this, l, "f");
          }),
          (g = function (e) {
            return v(this, void 0, void 0, function* () {
              let t = b(this, r, "m", h).call(this);
              try {
                if (w.SolanaSignTransaction in b(this, i, "f").features)
                  return b(this, i, "f")
                    .features[w.SolanaSignTransaction].signTransaction(
                      ...e.map((e) => ({
                        account: t,
                        transaction: e.serialize(),
                      }))
                    )
                    .then((e) =>
                      e.map((e) => {
                        let t = e.signedTransaction,
                          n = t[0],
                          r = y.VersionedMessage.deserializeMessageVersion(
                            t.slice(64 * n + 1, t.length)
                          );
                        return "legacy" === r
                          ? y.Transaction.from(t)
                          : y.VersionedTransaction.deserialize(t);
                      })
                    );
                throw Error(
                  "Connected wallet does not support signing transactions"
                );
              } catch (e) {
                throw new p.WalletSignTransactionError(
                  null == e ? void 0 : e.message,
                  e
                );
              }
            });
          }),
          (m = function (e) {
            return v(this, void 0, void 0, function* () {
              try {
                return yield e();
              } catch (e) {
                throw (this.emit("error", e), e);
              }
            });
          });
        class A extends j {
          constructor(e) {
            var t;
            let n = I(null != (t = e.chain) ? t : e.cluster);
            super(
              new M.LocalSolanaMobileWalletAdapterWallet({
                appIdentity: e.appIdentity,
                authorizationCache: {
                  set: e.authorizationResultCache.set,
                  get: () =>
                    v(this, void 0, void 0, function* () {
                      let t = yield e.authorizationResultCache.get();
                      return t && "chain" in t
                        ? t
                        : t
                        ? Object.assign(Object.assign({}, t), { chain: n })
                        : void 0;
                    }),
                  clear: e.authorizationResultCache.clear,
                },
                chains: [n],
                chainSelector: M.createDefaultChainSelector(),
                onWalletNotFound: () =>
                  v(this, void 0, void 0, function* () {
                    e.onWalletNotFound(this);
                  }),
              }),
              { addressSelector: e.addressSelector, chain: n }
            );
          }
        }
        function S(e) {
          return v(this, void 0, void 0, function* () {
            return M.defaultErrorModalWalletNotFoundHandler();
          });
        }
        (n.LocalSolanaMobileWalletAdapter = A),
          (n.RemoteSolanaMobileWalletAdapter = class extends j {
            constructor(e) {
              let t = I(e.chain);
              super(
                new M.RemoteSolanaMobileWalletAdapterWallet({
                  appIdentity: e.appIdentity,
                  authorizationCache: {
                    set: e.authorizationResultCache.set,
                    get: () =>
                      v(this, void 0, void 0, function* () {
                        let n = yield e.authorizationResultCache.get();
                        return n && "chain" in n
                          ? n
                          : n
                          ? Object.assign(Object.assign({}, n), { chain: t })
                          : void 0;
                      }),
                    clear: e.authorizationResultCache.clear,
                  },
                  chains: [t],
                  chainSelector: M.createDefaultChainSelector(),
                  remoteHostAuthority: e.remoteHostAuthority,
                  onWalletNotFound: () =>
                    v(this, void 0, void 0, function* () {
                      e.onWalletNotFound(this);
                    }),
                }),
                { addressSelector: e.addressSelector, chain: t }
              );
            }
          }),
          (n.SolanaMobileWalletAdapter = class extends A {}),
          (n.SolanaMobileWalletAdapterWalletName = "Mobile Wallet Adapter"),
          (n.createDefaultAddressSelector = function () {
            return {
              select(e) {
                return v(this, void 0, void 0, function* () {
                  return e[0];
                });
              },
            };
          }),
          (n.createDefaultAuthorizationResultCache = function () {
            return M.createDefaultAuthorizationCache();
          }),
          (n.createDefaultWalletNotFoundHandler = function () {
            return S;
          });
      }
    },
    958312: (e) => {
      "use strict";
      let t, n, r;
      e.s({ default: () => ti }, 958312);
      var i,
        a,
        o,
        s,
        l,
        c,
        u,
        d,
        f,
        h,
        g,
        m,
        p,
        y,
        w,
        M,
        v,
        b,
        N,
        E,
        I,
        S,
        j,
        A,
        T,
        D,
        C,
        L,
        O,
        x,
        z,
        _,
        P,
        k,
        W,
        R = e.i(150840),
        U = e.i(184405),
        B = e.i(756253),
        Y = e.i(547957);
      let Q = (e) => {
        let {
            children: t,
            endpoint: n,
            config: r = { commitment: "confirmed" },
          } = e,
          i = (0, B.useMemo)(() => new U.Connection(n, r), [n, r]);
        return B.default.createElement(
          Y.ConnectionContext.Provider,
          { value: { connection: i } },
          t
        );
      };
      var F = e.i(145776),
        H = e.i(553510),
        Z = e.i(250732);
      let G = "standard:connect",
        K = "standard:events",
        V = function (e) {
          return (
            G in e.features &&
            K in e.features &&
            (H.SolanaSignAndSendTransaction in e.features ||
              Z.SolanaSignTransaction in e.features)
          );
        };
      var q = e.i(167028),
        J = e.i(183909),
        X = e.i(400731);
      let $ = "solana:signIn";
      var ee = e.i(127259);
      let et = "solana:mainnet",
        en = "solana:devnet",
        er = "solana:testnet";
      function ei(e) {
        switch (e) {
          case "processed":
          case "confirmed":
          case "finalized":
          case void 0:
            return e;
          case "recent":
            return "processed";
          case "single":
          case "singleGossip":
            return "confirmed";
          case "max":
          case "root":
            return "finalized";
          default:
            return;
        }
      }
      let ea = "standard:disconnect";
      new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      var eo = e.i(199844),
        es = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        el = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        };
      class ec extends q.BaseWalletAdapter {
        get name() {
          return es(this, d, "f").name;
        }
        get url() {
          return "https://github.com/solana-labs/wallet-standard";
        }
        get icon() {
          return es(this, d, "f").icon;
        }
        get readyState() {
          return es(this, f, "f");
        }
        get publicKey() {
          return es(this, o, "f");
        }
        get connecting() {
          return es(this, s, "f");
        }
        get supportedTransactionVersions() {
          return es(this, u, "f");
        }
        get wallet() {
          return es(this, d, "f");
        }
        get standard() {
          return !0;
        }
        destroy() {
          el(this, a, null, "f"),
            el(this, o, null, "f"),
            el(this, s, !1, "f"),
            el(this, l, !1, "f");
          let e = es(this, c, "f");
          e && (el(this, c, null, "f"), e());
        }
        async autoConnect() {
          return es(this, i, "m", h).call(this, { silent: !0 });
        }
        async connect() {
          return es(this, i, "m", h).call(this);
        }
        async disconnect() {
          if (ea in es(this, d, "f").features)
            try {
              el(this, l, !0, "f"),
                await es(this, d, "f").features[ea].disconnect();
            } catch (e) {
              this.emit(
                "error",
                new X.WalletDisconnectionError(
                  null == e ? void 0 : e.message,
                  e
                )
              );
            } finally {
              el(this, l, !1, "f");
            }
          es(this, i, "m", m).call(this);
        }
        async sendTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            var r;
            let i,
              o = es(this, a, "f");
            if (!o) throw new X.WalletNotConnectedError();
            if (H.SolanaSignAndSendTransaction in es(this, d, "f").features)
              if (o.features.includes(H.SolanaSignAndSendTransaction))
                i = H.SolanaSignAndSendTransaction;
              else if (
                Z.SolanaSignTransaction in es(this, d, "f").features &&
                o.features.includes(Z.SolanaSignTransaction)
              )
                i = Z.SolanaSignTransaction;
              else throw new X.WalletAccountError();
            else if (Z.SolanaSignTransaction in es(this, d, "f").features) {
              if (!o.features.includes(Z.SolanaSignTransaction))
                throw new X.WalletAccountError();
              i = Z.SolanaSignTransaction;
            } else throw new X.WalletConfigError();
            let s = (r = t.rpcEndpoint).includes(
              "https://api.mainnet-beta.solana.com"
            )
              ? et
              : /\bdevnet\b/i.test(r)
              ? en
              : /\btestnet\b/i.test(r)
              ? er
              : /\blocalhost\b/i.test(r) || /\b127\.0\.0\.1\b/.test(r)
              ? "solana:localnet"
              : et;
            if (!o.chains.includes(s)) throw new X.WalletSendTransactionError();
            try {
              let r,
                { signers: a, ...l } = n;
              if (
                ((0, J.isVersionedTransaction)(e)
                  ? ((null == a ? void 0 : a.length) && e.sign(a),
                    (r = e.serialize()))
                  : ((e = await this.prepareTransaction(e, t, l)),
                    (null == a ? void 0 : a.length) && e.partialSign(...a),
                    (r = new Uint8Array(
                      e.serialize({
                        requireAllSignatures: !1,
                        verifySignatures: !1,
                      })
                    ))),
                i === H.SolanaSignAndSendTransaction)
              ) {
                let [e] = await es(this, d, "f").features[
                  H.SolanaSignAndSendTransaction
                ].signAndSendTransaction({
                  account: o,
                  chain: s,
                  transaction: r,
                  options: {
                    preflightCommitment: ei(
                      l.preflightCommitment || t.commitment
                    ),
                    skipPreflight: l.skipPreflight,
                    maxRetries: l.maxRetries,
                    minContextSlot: l.minContextSlot,
                  },
                });
                return eo.default.encode(e.signature);
              }
              {
                let [e] = await es(this, d, "f").features[
                  Z.SolanaSignTransaction
                ].signTransaction({
                  account: o,
                  chain: s,
                  transaction: r,
                  options: {
                    preflightCommitment: ei(
                      l.preflightCommitment || t.commitment
                    ),
                    minContextSlot: l.minContextSlot,
                  },
                });
                return await t.sendRawTransaction(e.signedTransaction, {
                  ...l,
                  preflightCommitment: ei(
                    l.preflightCommitment || t.commitment
                  ),
                });
              }
            } catch (e) {
              if (e instanceof X.WalletError) throw e;
              throw new X.WalletSendTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor({ wallet: e }) {
          super(),
            i.add(this),
            a.set(this, void 0),
            o.set(this, void 0),
            s.set(this, void 0),
            l.set(this, void 0),
            c.set(this, void 0),
            u.set(this, void 0),
            d.set(this, void 0),
            f.set(
              this,
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.Installed
            ),
            y.set(this, (e) => {
              if ("accounts" in e) {
                let e = es(this, d, "f").accounts[0];
                es(this, a, "f") &&
                  !es(this, l, "f") &&
                  e !== es(this, a, "f") &&
                  (e
                    ? es(this, i, "m", g).call(this, e)
                    : (this.emit("error", new X.WalletDisconnectedError()),
                      es(this, i, "m", m).call(this)));
              }
              "features" in e && es(this, i, "m", p).call(this);
            }),
            el(this, d, e, "f"),
            el(this, a, null, "f"),
            el(this, o, null, "f"),
            el(this, s, !1, "f"),
            el(this, l, !1, "f"),
            el(
              this,
              c,
              es(this, d, "f").features[K].on("change", es(this, y, "f")),
              "f"
            ),
            es(this, i, "m", p).call(this);
        }
      }
      (a = new WeakMap()),
        (o = new WeakMap()),
        (s = new WeakMap()),
        (l = new WeakMap()),
        (c = new WeakMap()),
        (u = new WeakMap()),
        (d = new WeakMap()),
        (f = new WeakMap()),
        (y = new WeakMap()),
        (i = new WeakSet()),
        (h = async function (e) {
          try {
            if (this.connected || this.connecting) return;
            if (es(this, f, "f") !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            if ((el(this, s, !0, "f"), !es(this, d, "f").accounts.length))
              try {
                await es(this, d, "f").features[G].connect(e);
              } catch (e) {
                throw new X.WalletConnectionError(
                  null == e ? void 0 : e.message,
                  e
                );
              }
            let t = es(this, d, "f").accounts[0];
            if (!t) throw new X.WalletAccountError();
            es(this, i, "m", g).call(this, t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            el(this, s, !1, "f");
          }
        }),
        (g = function (e) {
          let t;
          try {
            t = new U.PublicKey(e.address);
          } catch (e) {
            throw new X.WalletPublicKeyError(null == e ? void 0 : e.message, e);
          }
          el(this, a, e, "f"),
            el(this, o, t, "f"),
            es(this, i, "m", p).call(this),
            this.emit("connect", t);
        }),
        (m = function () {
          el(this, a, null, "f"),
            el(this, o, null, "f"),
            es(this, i, "m", p).call(this),
            this.emit("disconnect");
        }),
        (p = function () {
          var e, t;
          let n =
            H.SolanaSignAndSendTransaction in es(this, d, "f").features
              ? es(this, d, "f").features[H.SolanaSignAndSendTransaction]
                  .supportedTransactionVersions
              : es(this, d, "f").features[Z.SolanaSignTransaction]
                  .supportedTransactionVersions;
          el(
            this,
            u,
            !(function (e, t) {
              if (e === t) return !0;
              let n = e.length;
              if (n !== t.length) return !1;
              for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
              return !0;
            })(n, ["legacy"])
              ? new Set(n)
              : null,
            "f"
          ),
            Z.SolanaSignTransaction in es(this, d, "f").features &&
            (null == (e = es(this, a, "f"))
              ? void 0
              : e.features.includes(Z.SolanaSignTransaction))
              ? ((this.signTransaction = es(this, i, "m", w)),
                (this.signAllTransactions = es(this, i, "m", M)))
              : (delete this.signTransaction, delete this.signAllTransactions),
            ee.SolanaSignMessage in es(this, d, "f").features &&
            (null == (t = es(this, a, "f"))
              ? void 0
              : t.features.includes(ee.SolanaSignMessage))
              ? (this.signMessage = es(this, i, "m", v))
              : delete this.signMessage,
            $ in es(this, d, "f").features
              ? (this.signIn = es(this, i, "m", b))
              : delete this.signIn;
        }),
        (w = async function (e) {
          try {
            let t = es(this, a, "f");
            if (!t) throw new X.WalletNotConnectedError();
            if (!(Z.SolanaSignTransaction in es(this, d, "f").features))
              throw new X.WalletConfigError();
            if (!t.features.includes(Z.SolanaSignTransaction))
              throw new X.WalletAccountError();
            try {
              let n = (
                await es(this, d, "f").features[
                  Z.SolanaSignTransaction
                ].signTransaction({
                  account: t,
                  transaction: (0, J.isVersionedTransaction)(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                })
              )[0].signedTransaction;
              return (0, J.isVersionedTransaction)(e)
                ? U.VersionedTransaction.deserialize(n)
                : U.Transaction.from(n);
            } catch (e) {
              if (e instanceof X.WalletError) throw e;
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (M = async function (e) {
          try {
            let t = es(this, a, "f");
            if (!t) throw new X.WalletNotConnectedError();
            if (!(Z.SolanaSignTransaction in es(this, d, "f").features))
              throw new X.WalletConfigError();
            if (!t.features.includes(Z.SolanaSignTransaction))
              throw new X.WalletAccountError();
            try {
              let n = await es(this, d, "f").features[
                Z.SolanaSignTransaction
              ].signTransaction(
                ...e.map((e) => ({
                  account: t,
                  transaction: (0, J.isVersionedTransaction)(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                }))
              );
              return e.map((e, t) => {
                let r = n[t].signedTransaction;
                return (0, J.isVersionedTransaction)(e)
                  ? U.VersionedTransaction.deserialize(r)
                  : U.Transaction.from(r);
              });
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (v = async function (e) {
          try {
            let t = es(this, a, "f");
            if (!t) throw new X.WalletNotConnectedError();
            if (!(ee.SolanaSignMessage in es(this, d, "f").features))
              throw new X.WalletConfigError();
            if (!t.features.includes(ee.SolanaSignMessage))
              throw new X.WalletAccountError();
            try {
              return (
                await es(this, d, "f").features[
                  ee.SolanaSignMessage
                ].signMessage({ account: t, message: e })
              )[0].signature;
            } catch (e) {
              throw new X.WalletSignMessageError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (b = async function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          try {
            let t;
            if (!($ in es(this, d, "f").features))
              throw new X.WalletConfigError();
            try {
              [t] = await es(this, d, "f").features[$].signIn(e);
            } catch (e) {
              throw new X.WalletSignInError(null == e ? void 0 : e.message, e);
            }
            if (!t) throw new X.WalletSignInError();
            return es(this, i, "m", g).call(this, t.account), t;
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        });
      var eu = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        ed = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        };
      let ef = new Set(),
        eh = {};
      function eg() {
        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return (r = r.filter((e) => !ef.has(e))).length
          ? (r.forEach((e) => {
              (t = void 0), ef.add(e);
            }),
            null == (e = eh.register) || e.forEach((e) => ey(() => e(...r))),
            function () {
              var e;
              r.forEach((e) => {
                (t = void 0), ef.delete(e);
              }),
                null == (e = eh.unregister) ||
                  e.forEach((e) => ey(() => e(...r)));
            })
          : () => {};
      }
      function em() {
        return t || (t = [...ef]), t;
      }
      function ep(e, t) {
        var n;
        return (
          (null == (n = eh[e]) ? void 0 : n.push(t)) || (eh[e] = [t]),
          function () {
            var n;
            eh[e] = null == (n = eh[e]) ? void 0 : n.filter((e) => t !== e);
          }
        );
      }
      function ey(e) {
        try {
          e();
        } catch (e) {
          console.error(e);
        }
      }
      class ew extends Event {
        get detail() {
          return eu(this, N, "f");
        }
        get type() {
          return "wallet-standard:app-ready";
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
        constructor(e) {
          super("wallet-standard:app-ready", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            N.set(this, void 0),
            ed(this, N, e, "f");
        }
      }
      function eM(e) {
        let t = (0, B.useRef)(void 0);
        return (
          void 0 === t.current && (t.current = { value: e() }), t.current.value
        );
      }
      function ev(e) {
        return e.filter(V).map((e) => new ec({ wallet: e }));
      }
      (N = new WeakMap()),
        !(function (e) {
          (e[(e.DESKTOP_WEB = 0)] = "DESKTOP_WEB"),
            (e[(e.MOBILE_WEB = 1)] = "MOBILE_WEB");
        })(E || (E = {}));
      var eb = X;
      class eN extends eb.WalletError {
        constructor() {
          super(...arguments), (this.name = "WalletNotSelectedError");
        }
      }
      var eE = e.i(289267);
      function eI(e) {
        let {
            children: t,
            wallets: n,
            adapter: r,
            isUnloadingRef: i,
            onAutoConnectRequest: a,
            onConnectError: o,
            onError: s,
            onSelectWallet: l,
          } = e,
          c = (0, B.useRef)(!1),
          [u, d] = (0, B.useState)(!1),
          f = (0, B.useRef)(!1),
          [h, g] = (0, B.useState)(!1),
          [m, p] = (0, B.useState)(() => {
            var e;
            return null != (e = null == r ? void 0 : r.publicKey) ? e : null;
          }),
          [y, w] = (0, B.useState)(() => {
            var e;
            return null != (e = null == r ? void 0 : r.connected) && e;
          }),
          M = (0, B.useRef)(s);
        (0, B.useEffect)(
          () => (
            (M.current = s),
            () => {
              M.current = void 0;
            }
          ),
          [s]
        );
        let v = (0, B.useRef)(
            (e, t) => (
              !i.current &&
                (M.current
                  ? M.current(e, t)
                  : (console.error(e, t),
                    e instanceof X.WalletNotReadyError &&
                      "undefined" != typeof window &&
                      t &&
                      window.open(t.url, "_blank"))),
              e
            )
          ),
          [b, N] = (0, B.useState)(() =>
            n
              .map((e) => ({ adapter: e, readyState: e.readyState }))
              .filter((e) => {
                let { readyState: t } = e;
                return t !== q.WalletReadyState.Unsupported;
              })
          );
        (0, B.useEffect)(() => {
          function e(e) {
            N((t) => {
              let n = t.findIndex((e) => {
                let { adapter: t } = e;
                return t === this;
              });
              if (-1 === n) return t;
              let { adapter: r } = t[n];
              return [
                ...t.slice(0, n),
                { adapter: r, readyState: e },
                ...t.slice(n + 1),
              ].filter((e) => {
                let { readyState: t } = e;
                return t !== q.WalletReadyState.Unsupported;
              });
            });
          }
          return (
            N((e) =>
              n
                .map((t, n) => {
                  let r = e[n];
                  return r && r.adapter === t && r.readyState === t.readyState
                    ? r
                    : { adapter: t, readyState: t.readyState };
                })
                .filter((e) => {
                  let { readyState: t } = e;
                  return t !== q.WalletReadyState.Unsupported;
                })
            ),
            n.forEach((t) => t.on("readyStateChange", e, t)),
            () => {
              n.forEach((t) => t.off("readyStateChange", e, t));
            }
          );
        }, [r, n]);
        let E = (0, B.useMemo)(() => {
          var e;
          return null != (e = b.find((e) => e.adapter === r)) ? e : null;
        }, [r, b]);
        (0, B.useEffect)(() => {
          if (!r) return;
          let e = (e) => {
              p(e), (c.current = !1), d(!1), w(!0), (f.current = !1), g(!1);
            },
            t = () => {
              i.current ||
                (p(null),
                (c.current = !1),
                d(!1),
                w(!1),
                (f.current = !1),
                g(!1));
            },
            n = (e) => {
              v.current(e, r);
            };
          return (
            r.on("connect", e),
            r.on("disconnect", t),
            r.on("error", n),
            () => {
              r.off("connect", e),
                r.off("disconnect", t),
                r.off("error", n),
                t();
            }
          );
        }, [r, i]);
        let I = (0, B.useRef)(!1);
        (0, B.useEffect)(
          () => () => {
            I.current = !1;
          },
          [r]
        ),
          (0, B.useEffect)(() => {
            I.current ||
              c.current ||
              y ||
              !a ||
              ((null == E ? void 0 : E.readyState) !==
                q.WalletReadyState.Installed &&
                (null == E ? void 0 : E.readyState) !==
                  q.WalletReadyState.Loadable) ||
              ((c.current = !0),
              d(!0),
              (I.current = !0),
              (async function () {
                try {
                  await a();
                } catch (e) {
                  o();
                } finally {
                  d(!1), (c.current = !1);
                }
              })());
          }, [y, a, o, E]);
        let S = (0, B.useCallback)(
            async (e, t, n) => {
              if (!r) throw v.current(new eN());
              if (!y) throw v.current(new X.WalletNotConnectedError(), r);
              return await r.sendTransaction(e, t, n);
            },
            [r, y]
          ),
          j = (0, B.useMemo)(
            () =>
              r && "signTransaction" in r
                ? async (e) => {
                    if (!y) throw v.current(new X.WalletNotConnectedError(), r);
                    return await r.signTransaction(e);
                  }
                : void 0,
            [r, y]
          ),
          A = (0, B.useMemo)(
            () =>
              r && "signAllTransactions" in r
                ? async (e) => {
                    if (!y) throw v.current(new X.WalletNotConnectedError(), r);
                    return await r.signAllTransactions(e);
                  }
                : void 0,
            [r, y]
          ),
          T = (0, B.useMemo)(
            () =>
              r && "signMessage" in r
                ? async (e) => {
                    if (!y) throw v.current(new X.WalletNotConnectedError(), r);
                    return await r.signMessage(e);
                  }
                : void 0,
            [r, y]
          ),
          D = (0, B.useMemo)(
            () =>
              r && "signIn" in r ? async (e) => await r.signIn(e) : void 0,
            [r]
          ),
          C = (0, B.useCallback)(async () => {
            if (
              c.current ||
              f.current ||
              (null == E ? void 0 : E.adapter.connected)
            )
              return;
            if (!E) throw v.current(new eN());
            let { adapter: e, readyState: t } = E;
            if (
              t !== q.WalletReadyState.Installed &&
              t !== q.WalletReadyState.Loadable
            )
              throw v.current(new X.WalletNotReadyError(), e);
            (c.current = !0), d(!0);
            try {
              await e.connect();
            } catch (e) {
              throw (o(), e);
            } finally {
              d(!1), (c.current = !1);
            }
          }, [o, E]),
          L = (0, B.useCallback)(async () => {
            if (!f.current && r) {
              (f.current = !0), g(!0);
              try {
                await r.disconnect();
              } finally {
                g(!1), (f.current = !1);
              }
            }
          }, [r]);
        return B.default.createElement(
          eE.WalletContext.Provider,
          {
            value: {
              autoConnect: !!a,
              wallets: b,
              wallet: E,
              publicKey: m,
              connected: y,
              connecting: u,
              disconnecting: h,
              select: l,
              connect: C,
              disconnect: L,
              sendTransaction: S,
              signTransaction: j,
              signAllTransactions: A,
              signMessage: T,
              signIn: D,
            },
          },
          t
        );
      }
      function eS(e) {
        return (
          (function (e) {
            let { adapters: t, userAgentString: n } = e;
            return t.some(
              (e) =>
                e.name !== F.SolanaMobileWalletAdapterWalletName &&
                e.readyState === q.WalletReadyState.Installed
            )
              ? E.DESKTOP_WEB
              : n &&
                /android/i.test(n) &&
                !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                  n
                )
              ? E.MOBILE_WEB
              : E.DESKTOP_WEB;
          })({
            adapters: e,
            userAgentString: (function () {
              if (void 0 === n) {
                var e, t;
                n =
                  null !=
                  (t =
                    null == (e = globalThis.navigator) ? void 0 : e.userAgent)
                    ? t
                    : null;
              }
              return n;
            })(),
          }) === E.MOBILE_WEB
        );
      }
      function ej(e) {
        let {
            children: t,
            wallets: n,
            autoConnect: i,
            localStorageKey: a = "walletName",
            onError: o,
          } = e,
          { connection: s } = (0, Y.useConnection)(),
          l = (function (e) {
            let t = eM(() => new Set()),
              { get: n, on: i } = eM(() =>
                (function () {
                  if (
                    r ||
                    ((r = (function () {
                      if (
                        r ||
                        ((r = Object.freeze({ register: eg, get: em, on: ep })),
                        "undefined" == typeof window)
                      )
                        return r;
                      let e = Object.freeze({ register: eg });
                      try {
                        window.addEventListener(
                          "wallet-standard:register-wallet",
                          (t) => {
                            let { detail: n } = t;
                            return n(e);
                          }
                        );
                      } catch (e) {
                        console.error(
                          "wallet-standard:register-wallet event listener could not be added\n",
                          e
                        );
                      }
                      try {
                        window.dispatchEvent(new ew(e));
                      } catch (e) {
                        console.error(
                          "wallet-standard:app-ready event could not be dispatched\n",
                          e
                        );
                      }
                      return r;
                    })()),
                    "undefined" == typeof window)
                  )
                    return r;
                  let e = window.navigator.wallets || [];
                  if (!Array.isArray(e))
                    return (
                      console.error("window.navigator.wallets is not an array"),
                      r
                    );
                  let { register: t } = r,
                    n = function () {
                      for (
                        var e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return n.forEach((e) => ey(() => e({ register: t })));
                    };
                  try {
                    Object.defineProperty(window.navigator, "wallets", {
                      value: Object.freeze({ push: n }),
                    });
                  } catch (e) {
                    return (
                      console.error(
                        "window.navigator.wallets could not be set"
                      ),
                      r
                    );
                  }
                  return n(...e), r;
                })()
              ),
              [a, o] = (0, B.useState)(() => ev(n()));
            (0, B.useEffect)(() => {
              let e = [
                i("register", function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return o((e) => [...e, ...ev(t)]);
                }),
                i("unregister", function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return o((e) =>
                    e.filter((e) => t.some((t) => t === e.wallet))
                  );
                }),
              ];
              return () => e.forEach((e) => e());
            }, [i]);
            let s = (function (e) {
              let t = (0, B.useRef)(void 0);
              return (
                (0, B.useEffect)(() => {
                  t.current = e;
                }),
                t.current
              );
            })(a);
            return (
              (0, B.useEffect)(() => {
                if (!s) return;
                let e = new Set(a);
                new Set(s.filter((t) => !e.has(t))).forEach((e) => e.destroy());
              }, [s, a]),
              (0, B.useEffect)(() => () => a.forEach((e) => e.destroy()), []),
              (0, B.useMemo)(
                () => [
                  ...a,
                  ...e.filter((e) => {
                    let { name: n } = e;
                    return (
                      !a.some((e) => e.name === n) ||
                      (t.has(n) ||
                        (t.add(n),
                        console.warn(
                          ""
                            .concat(
                              n,
                              " was registered as a Standard Wallet. The Wallet Adapter for "
                            )
                            .concat(n, " can be removed from your app.")
                        )),
                      !1)
                    );
                  }),
                ],
                [a, e, t]
              )
            );
          })(n),
          c = (0, B.useMemo)(() => {
            var e;
            if (!eS(l)) return null;
            let t = l.find(
              (e) => e.name === F.SolanaMobileWalletAdapterWalletName
            );
            return t
              ? t
              : new F.SolanaMobileWalletAdapter({
                  addressSelector: (0, F.createDefaultAddressSelector)(),
                  appIdentity: {
                    uri: (function () {
                      let e = globalThis.location;
                      if (e) return "".concat(e.protocol, "//").concat(e.host);
                    })(),
                  },
                  authorizationResultCache: (0,
                  F.createDefaultAuthorizationResultCache)(),
                  cluster: (e = null == s ? void 0 : s.rpcEndpoint)
                    ? /devnet/i.test(e)
                      ? "devnet"
                      : /testnet/i.test(e)
                      ? "testnet"
                      : "mainnet-beta"
                    : "mainnet-beta",
                  onWalletNotFound: (0, F.createDefaultWalletNotFoundHandler)(),
                });
          }, [l, null == s ? void 0 : s.rpcEndpoint]),
          u = (0, B.useMemo)(
            () => (null == c || -1 !== l.indexOf(c) ? l : [c, ...l]),
            [l, c]
          ),
          [d, f] = (function (e, t) {
            let n = (0, B.useState)(() => {
                try {
                  let t = localStorage.getItem(e);
                  if (t) return JSON.parse(t);
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
                return null;
              }),
              r = n[0],
              i = (0, B.useRef)(!0);
            return (
              (0, B.useEffect)(() => {
                if (i.current) {
                  i.current = !1;
                  return;
                }
                try {
                  null === r
                    ? localStorage.removeItem(e)
                    : localStorage.setItem(e, JSON.stringify(r));
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
              }, [r, e]),
              n
            );
          })(a, 0),
          h = (0, B.useMemo)(() => {
            var e;
            return null != (e = u.find((e) => e.name === d)) ? e : null;
          }, [u, d]),
          g = (0, B.useCallback)(
            (e) => {
              d !== e &&
                (h &&
                  h.name !== F.SolanaMobileWalletAdapterWalletName &&
                  h.disconnect(),
                f(e));
            },
            [h, f, d]
          );
        (0, B.useEffect)(() => {
          if (h)
            return (
              h.on("disconnect", e),
              () => {
                h.off("disconnect", e);
              }
            );
          function e() {
            y.current || f(null);
          }
        }, [h, l, f, d]);
        let m = (0, B.useRef)(!1),
          p = (0, B.useMemo)(() => {
            if (i && h)
              return async () => {
                (!0 === i || (await i(h))) &&
                  (m.current ? await h.connect() : await h.autoConnect());
              };
          }, [i, h]),
          y = (0, B.useRef)(!1);
        (0, B.useEffect)(() => {
          if (d === F.SolanaMobileWalletAdapterWalletName && eS(l)) {
            y.current = !1;
            return;
          }
          function e() {
            y.current = !0;
          }
          return (
            window.addEventListener("beforeunload", e),
            () => {
              window.removeEventListener("beforeunload", e);
            }
          );
        }, [l, d]);
        let w = (0, B.useCallback)(() => {
            h && g(null);
          }, [h, g]),
          M = (0, B.useCallback)(
            (e) => {
              (m.current = !0), g(e);
            },
            [g]
          );
        return B.default.createElement(
          eI,
          {
            wallets: u,
            adapter: h,
            isUnloadingRef: y,
            onAutoConnectRequest: p,
            onConnectError: w,
            onError: o,
            onSelectWallet: M,
          },
          t
        );
      }
      var eA = e.i(151381),
        eT = e.i(317317);
      let eD = (e) => {
          let { id: t, children: n, expanded: r = !1 } = e,
            i = (0, B.useRef)(null),
            a = (0, B.useRef)(!0);
          return (
            (0, B.useLayoutEffect)(() => {
              r
                ? (() => {
                    let e = i.current;
                    e &&
                      requestAnimationFrame(() => {
                        e.style.height = e.scrollHeight + "px";
                      });
                  })()
                : (() => {
                    let e = i.current;
                    e &&
                      requestAnimationFrame(() => {
                        (e.style.height = e.offsetHeight + "px"),
                          (e.style.overflow = "hidden"),
                          requestAnimationFrame(() => {
                            e.style.height = "0";
                          });
                      });
                  })();
            }, [r]),
            (0, B.useLayoutEffect)(() => {
              let e = i.current;
              if (e)
                return (
                  a.current && (t(), (a.current = !1)),
                  e.addEventListener("transitionend", n),
                  () => e.removeEventListener("transitionend", n)
                );
              function t() {
                e &&
                  ((e.style.overflow = r ? "initial" : "hidden"),
                  r && (e.style.height = "auto"));
              }
              function n(n) {
                e && n.target === e && "height" === n.propertyName && t();
              }
            }, [r]),
            B.default.createElement(
              "div",
              {
                className: "wallet-adapter-collapse",
                id: t,
                ref: i,
                role: "region",
                style: {
                  height: 0,
                  transition: a.current ? void 0 : "height 250ms ease-out",
                },
              },
              n
            )
          );
        },
        eC = (e) =>
          B.default.createElement(
            "button",
            {
              className: "wallet-adapter-button ".concat(e.className || ""),
              disabled: e.disabled,
              style: e.style,
              onClick: e.onClick,
              tabIndex: e.tabIndex || 0,
              type: "button",
            },
            e.startIcon &&
              B.default.createElement(
                "i",
                { className: "wallet-adapter-button-start-icon" },
                e.startIcon
              ),
            e.children,
            e.endIcon &&
              B.default.createElement(
                "i",
                { className: "wallet-adapter-button-end-icon" },
                e.endIcon
              )
          ),
        eL = (e) => {
          let { wallet: t, ...n } = e;
          return (
            t &&
            B.default.createElement("img", {
              src: t.adapter.icon,
              alt: "".concat(t.adapter.name, " icon"),
              ...n,
            })
          );
        },
        eO = (e) => {
          let { handleClick: t, tabIndex: n, wallet: r } = e;
          return B.default.createElement(
            "li",
            null,
            B.default.createElement(
              eC,
              {
                onClick: t,
                startIcon: B.default.createElement(eL, { wallet: r }),
                tabIndex: n,
              },
              r.adapter.name,
              r.readyState === q.WalletReadyState.Installed &&
                B.default.createElement("span", null, "Detected")
            )
          );
        },
        ex = () =>
          B.default.createElement(
            "svg",
            {
              width: "97",
              height: "96",
              viewBox: "0 0 97 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            B.default.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "48",
              fill: "url(#paint0_linear_880_5115)",
              fillOpacity: "0.1",
            }),
            B.default.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "47",
              stroke: "url(#paint1_linear_880_5115)",
              strokeOpacity: "0.4",
              strokeWidth: "2",
            }),
            B.default.createElement(
              "g",
              { clipPath: "url(#clip0_880_5115)" },
              B.default.createElement("path", {
                d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                fill: "url(#paint2_linear_880_5115)",
              }),
              B.default.createElement("path", {
                d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                fill: "url(#paint3_linear_880_5115)",
              })
            ),
            B.default.createElement(
              "defs",
              null,
              B.default.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                B.default.createElement("stop", { stopColor: "#9945FF" }),
                B.default.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                B.default.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                B.default.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                B.default.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                B.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#00D18C",
                })
              ),
              B.default.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                B.default.createElement("stop", { stopColor: "#9945FF" }),
                B.default.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                B.default.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                B.default.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                B.default.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                B.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#00D18C",
                })
              ),
              B.default.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_880_5115",
                  x1: "25.9583",
                  y1: "68.7101",
                  x2: "67.2337",
                  y2: "23.7879",
                  gradientUnits: "userSpaceOnUse",
                },
                B.default.createElement("stop", { stopColor: "#9945FF" }),
                B.default.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                B.default.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                B.default.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                B.default.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                B.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#00D18C",
                })
              ),
              B.default.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_880_5115",
                  x1: "58.3326",
                  y1: "49.4467",
                  x2: "61.0002",
                  y2: "45.4453",
                  gradientUnits: "userSpaceOnUse",
                },
                B.default.createElement("stop", { stopColor: "#9945FF" }),
                B.default.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                B.default.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                B.default.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                B.default.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                B.default.createElement("stop", {
                  offset: "1",
                  stopColor: "#00D18C",
                })
              ),
              B.default.createElement(
                "clipPath",
                { id: "clip0_880_5115" },
                B.default.createElement("rect", {
                  width: "48",
                  height: "48",
                  fill: "white",
                  transform: "translate(24.5 24)",
                })
              )
            )
          ),
        ez = (e) => {
          let { className: t = "", container: n = "body" } = e,
            r = (0, B.useRef)(null),
            { wallets: i, select: a } = (0, eE.useWallet)(),
            { setVisible: o } = (0, eA.useWalletModal)(),
            [s, l] = (0, B.useState)(!1),
            [c, u] = (0, B.useState)(!1),
            [d, f] = (0, B.useState)(null),
            [h, g] = (0, B.useMemo)(() => {
              let e = [],
                t = [];
              for (let n of i)
                n.readyState === q.WalletReadyState.Installed
                  ? e.push(n)
                  : t.push(n);
              return e.length ? [e, t] : [t, []];
            }, [i]),
            m = (0, B.useCallback)(() => {
              u(!1), setTimeout(() => o(!1), 150);
            }, [o]),
            p = (0, B.useCallback)(
              (e) => {
                e.preventDefault(), m();
              },
              [m]
            ),
            y = (0, B.useCallback)(
              (e, t) => {
                a(t), p(e);
              },
              [a, p]
            ),
            w = (0, B.useCallback)(() => l(!s), [s]),
            M = (0, B.useCallback)(
              (e) => {
                let t = r.current;
                if (!t) return;
                let n = t.querySelectorAll("button"),
                  i = n[0],
                  a = n[n.length - 1];
                e.shiftKey
                  ? document.activeElement === i &&
                    (a.focus(), e.preventDefault())
                  : document.activeElement === a &&
                    (i.focus(), e.preventDefault());
              },
              [r]
            );
          return (
            (0, B.useLayoutEffect)(() => {
              let e = (e) => {
                  "Escape" === e.key ? m() : "Tab" === e.key && M(e);
                },
                { overflow: t } = window.getComputedStyle(document.body);
              return (
                setTimeout(() => u(!0), 0),
                (document.body.style.overflow = "hidden"),
                window.addEventListener("keydown", e, !1),
                () => {
                  (document.body.style.overflow = t),
                    window.removeEventListener("keydown", e, !1);
                }
              );
            }, [m, M]),
            (0, B.useLayoutEffect)(() => f(document.querySelector(n)), [n]),
            d &&
              (0, eT.createPortal)(
                B.default.createElement(
                  "div",
                  {
                    "aria-labelledby": "wallet-adapter-modal-title",
                    "aria-modal": "true",
                    className: "wallet-adapter-modal "
                      .concat(c && "wallet-adapter-modal-fade-in", " ")
                      .concat(t),
                    ref: r,
                    role: "dialog",
                  },
                  B.default.createElement(
                    "div",
                    { className: "wallet-adapter-modal-container" },
                    B.default.createElement(
                      "div",
                      { className: "wallet-adapter-modal-wrapper" },
                      B.default.createElement(
                        "button",
                        {
                          onClick: p,
                          className: "wallet-adapter-modal-button-close",
                        },
                        B.default.createElement(
                          "svg",
                          { width: "14", height: "14" },
                          B.default.createElement("path", {
                            d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z",
                          })
                        )
                      ),
                      h.length
                        ? B.default.createElement(
                            B.default.Fragment,
                            null,
                            B.default.createElement(
                              "h1",
                              { className: "wallet-adapter-modal-title" },
                              "Connect a wallet on Solana to continue"
                            ),
                            B.default.createElement(
                              "ul",
                              { className: "wallet-adapter-modal-list" },
                              h.map((e) =>
                                B.default.createElement(eO, {
                                  key: e.adapter.name,
                                  handleClick: (t) => y(t, e.adapter.name),
                                  wallet: e,
                                })
                              ),
                              g.length
                                ? B.default.createElement(
                                    eD,
                                    {
                                      expanded: s,
                                      id: "wallet-adapter-modal-collapse",
                                    },
                                    g.map((e) =>
                                      B.default.createElement(eO, {
                                        key: e.adapter.name,
                                        handleClick: (t) =>
                                          y(t, e.adapter.name),
                                        tabIndex: s ? 0 : -1,
                                        wallet: e,
                                      })
                                    )
                                  )
                                : null
                            ),
                            g.length
                              ? B.default.createElement(
                                  "button",
                                  {
                                    className: "wallet-adapter-modal-list-more",
                                    onClick: w,
                                    tabIndex: 0,
                                  },
                                  B.default.createElement(
                                    "span",
                                    null,
                                    s ? "Less " : "More ",
                                    "options"
                                  ),
                                  B.default.createElement(
                                    "svg",
                                    {
                                      width: "13",
                                      height: "7",
                                      viewBox: "0 0 13 7",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: "".concat(
                                        s
                                          ? "wallet-adapter-modal-list-more-icon-rotate"
                                          : ""
                                      ),
                                    },
                                    B.default.createElement("path", {
                                      d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                    })
                                  )
                                )
                              : null
                          )
                        : B.default.createElement(
                            B.default.Fragment,
                            null,
                            B.default.createElement(
                              "h1",
                              { className: "wallet-adapter-modal-title" },
                              "You'll need a wallet on Solana to continue"
                            ),
                            B.default.createElement(
                              "div",
                              { className: "wallet-adapter-modal-middle" },
                              B.default.createElement(ex, null)
                            ),
                            g.length
                              ? B.default.createElement(
                                  B.default.Fragment,
                                  null,
                                  B.default.createElement(
                                    "button",
                                    {
                                      className:
                                        "wallet-adapter-modal-list-more",
                                      onClick: w,
                                      tabIndex: 0,
                                    },
                                    B.default.createElement(
                                      "span",
                                      null,
                                      s
                                        ? "Hide "
                                        : "Already have a wallet? View ",
                                      "options"
                                    ),
                                    B.default.createElement(
                                      "svg",
                                      {
                                        width: "13",
                                        height: "7",
                                        viewBox: "0 0 13 7",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "".concat(
                                          s
                                            ? "wallet-adapter-modal-list-more-icon-rotate"
                                            : ""
                                        ),
                                      },
                                      B.default.createElement("path", {
                                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                      })
                                    )
                                  ),
                                  B.default.createElement(
                                    eD,
                                    {
                                      expanded: s,
                                      id: "wallet-adapter-modal-collapse",
                                    },
                                    B.default.createElement(
                                      "ul",
                                      {
                                        className: "wallet-adapter-modal-list",
                                      },
                                      g.map((e) =>
                                        B.default.createElement(eO, {
                                          key: e.adapter.name,
                                          handleClick: (t) =>
                                            y(t, e.adapter.name),
                                          tabIndex: s ? 0 : -1,
                                          wallet: e,
                                        })
                                      )
                                    )
                                  )
                                )
                              : null
                          )
                    )
                  ),
                  B.default.createElement("div", {
                    className: "wallet-adapter-modal-overlay",
                    onMouseDown: p,
                  })
                ),
                d
              )
          );
        },
        e_ = (e) => {
          let { children: t, ...n } = e,
            [r, i] = (0, B.useState)(!1);
          return B.default.createElement(
            eA.WalletModalContext.Provider,
            { value: { visible: r, setVisible: i } },
            t,
            r && B.default.createElement(ez, { ...n })
          );
        };
      var eP = e.i(327243);
      class ek extends eP.BaseMessageSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let e, t;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            let n = window.clover_solana;
            try {
              e = await n.getAccount();
            } catch (e) {
              throw new X.WalletAccountError(null == e ? void 0 : e.message, e);
            }
            try {
              t = new U.PublicKey(e);
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            (this._wallet = n), (this._publicKey = t), this.emit("connect", t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          this._wallet && ((this._wallet = null), (this._publicKey = null)),
            this.emit("disconnect");
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              let { signature: n } = await t.signMessage(e);
              return Uint8Array.from(n);
            } catch (e) {
              throw new X.WalletSignMessageError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Clover"),
            (this.url = "https://clv.org"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM2LjQ4IDBIMTEuNTJDNS4xNTc2OCAwIDAgNS4xNTc2OCAwIDExLjUyVjM2LjQ4QzAgNDIuODQyMyA1LjE1NzY4IDQ4IDExLjUyIDQ4SDM2LjQ4QzQyLjg0MjMgNDggNDggNDIuODQyMyA0OCAzNi40OFYxMS41MkM0OCA1LjE1NzY4IDQyLjg0MjMgMCAzNi40OCAwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzc5MTBfMTYzMzUxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjAwMDYgMzkuMzYwNkMzMi40ODM3IDM5LjM2MDYgMzkuMzYwNiAzMi40ODM3IDM5LjM2MDYgMjQuMDAwNkMzOS4zNjA2IDE1LjUxNzUgMzIuNDgzNyA4LjY0MDYyIDI0LjAwMDYgOC42NDA2MkMxNS41MTc1IDguNjQwNjIgOC42NDA2MiAxNS41MTc1IDguNjQwNjIgMjQuMDAwNkM4LjY0MDYyIDMyLjQ4MzcgMTUuNTE3NSAzOS4zNjA2IDI0LjAwMDYgMzkuMzYwNlpNMjEuMjg5OSAxNS44Njg4SDI2LjcxMVYyMS4zNDdIMjEuMjkwNFYyNi42NTRIMjYuNzExVjMyLjEzMjJIMjEuMjg5OVYyNi44MjUySDE1Ljg2OTNWMjEuMzQ3SDIxLjI4OTlWMTUuODY4OFpNMjYuNzEyIDIxLjM0N0gzMi4xMzMxVjI2LjgyNTJIMjYuNzEyVjIxLjM0N1oiIGZpbGw9ImJsYWNrIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNzkxMF8xNjMzNTEiIHgxPSI0OCIgeTE9Ii0xLjQzMDUxZS0wNiIgeDI9IjEuNDMwNTFlLTA2IiB5Mj0iNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0E5RkZFMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NkQ1RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4="),
            (this.supportedTransactionVersions = null),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.NotDetected),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== q.WalletReadyState.Unsupported &&
              (0, q.scopePollingDetectionStrategy)(() => {
                var e;
                return (
                  null != (e = window.clover_solana) &&
                  !!e.isCloverWallet &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              });
        }
      }
      var eW = e.i(710841),
        eR = eP,
        eU = e.i(86352);
      class eB extends eR.BaseMessageSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get connected() {
          var e;
          return !!(null == (e = this._wallet) ? void 0 : e.isConnected());
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let e, t;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            let n = window.coin98.sol;
            try {
              e = (await n.connect())[0];
            } catch (e) {
              throw new X.WalletAccountError(null == e ? void 0 : e.message, e);
            }
            try {
              t = new U.PublicKey(e);
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            (this._wallet = n), (this._publicKey = t), this.emit("connect", t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._wallet;
          if (e) {
            (this._wallet = null), (this._publicKey = null);
            try {
              await e.disconnect();
            } catch (e) {
              this.emit(
                "error",
                new X.WalletDisconnectionError(
                  null == e ? void 0 : e.message,
                  e
                )
              );
            }
          }
          this.emit("disconnect");
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              let n = await t.request({ method: "sol_sign", params: [e] }),
                r = new U.PublicKey(n.publicKey),
                i = eU.default.decode(n.signature);
              return e.addSignature(r, eW.Buffer.from(i)), e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              let n = await t.request({
                  method: "sol_signAllTransactions",
                  params: [e],
                }),
                r = new U.PublicKey(n.publicKey),
                i = n.signatures;
              return e.map((e, t) => {
                let n = eU.default.decode(i[t]);
                return e.addSignature(r, eW.Buffer.from(n)), e;
              });
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              let n = await t.request({
                method: "sol_signMessage",
                params: [e],
              });
              return eU.default.decode(n.signature);
            } catch (e) {
              throw new X.WalletSignMessageError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Coin98"),
            (this.url = "https://coin98.com"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo="),
            (this.supportedTransactionVersions = null),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.NotDetected),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== q.WalletReadyState.Unsupported &&
              (0, q.scopePollingDetectionStrategy)(() => {
                var e;
                return (
                  null != (e = window.coin98) &&
                  !!e.sol &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              });
        }
      }
      var eY = eP;
      class eQ extends eY.BaseMessageSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let e;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            let t = window.coinbaseSolana;
            try {
              await t.connect();
            } catch (e) {
              throw new X.WalletConnectionError(
                null == e ? void 0 : e.message,
                e
              );
            }
            if (!t.publicKey) throw new X.WalletAccountError();
            try {
              e = new U.PublicKey(t.publicKey.toBytes());
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            t.on("disconnect", this._disconnected),
              (this._wallet = t),
              (this._publicKey = e),
              this.emit("connect", e);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._wallet;
          if (e) {
            e.off("disconnect", this._disconnected),
              (this._wallet = null),
              (this._publicKey = null);
            try {
              await e.disconnect();
            } catch (e) {
              this.emit(
                "error",
                new X.WalletDisconnectionError(
                  null == e ? void 0 : e.message,
                  e
                )
              );
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            let r = this._wallet;
            if (!r) throw new X.WalletNotConnectedError();
            try {
              let { signers: i, ...a } = n;
              (0, J.isVersionedTransaction)(e)
                ? (null == i ? void 0 : i.length) && e.sign(i)
                : ((e = await this.prepareTransaction(e, t, a)),
                  (null == i ? void 0 : i.length) && e.partialSign(...i)),
                (a.preflightCommitment = a.preflightCommitment || t.commitment);
              let { signature: o } = await r.signAndSendTransaction(e, a);
              return o;
            } catch (e) {
              if (e instanceof X.WalletError) throw e;
              throw new X.WalletSendTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              let { signature: n } = await t.signMessage(e);
              return n;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Coinbase Wallet"),
            (this.url =
              "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSI1MTIiIHI9IjUxMiIgZmlsbD0iIzAwNTJGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1MiA1MTJDMTUyIDcxMC44MjMgMzEzLjE3NyA4NzIgNTEyIDg3MkM3MTAuODIzIDg3MiA4NzIgNzEwLjgyMyA4NzIgNTEyQzg3MiAzMTMuMTc3IDcxMC44MjMgMTUyIDUxMiAxNTJDMzEzLjE3NyAxNTIgMTUyIDMxMy4xNzcgMTUyIDUxMlpNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.NotDetected),
            (this._disconnected = () => {
              let e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new X.WalletDisconnectedError()),
                this.emit("disconnect"));
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== q.WalletReadyState.Unsupported &&
              (0, q.scopePollingDetectionStrategy)(() => {
                var e;
                return (
                  null != (e = window) &&
                  !!e.coinbaseSolana &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              });
        }
      }
      var eF = eP;
      e.i(481806);
      var eH = e.i(302323);
      function eZ(e) {
        return (0x80000000 | e) >>> 0;
      }
      async function eG(e, t) {
        let n = await eV(e, 5, 0, t);
        return new U.PublicKey(n);
      }
      async function eK(e, t, n) {
        let r = eW.Buffer.alloc(1);
        r.writeUInt8(1, 0);
        let i = (0, J.isVersionedTransaction)(t)
            ? t.message.serialize()
            : t.serializeMessage(),
          a = eW.Buffer.concat([r, n, i]);
        return await eV(e, 6, 1, a);
      }
      async function eV(e, t, n, r) {
        let i = 0,
          a = 0;
        if (r.length > 255)
          for (; r.length - a > 255; ) {
            let o = r.slice(a, a + 255);
            if (2 !== (await e.send(224, t, n, 2 | i, o)).length)
              throw new eH.TransportStatusError(eH.StatusCodes.INCORRECT_DATA);
            (i |= 1), (a += 255);
          }
        let o = r.slice(a),
          s = await e.send(224, t, n, i, o);
        return s.slice(0, s.length - 2);
      }
      class eq extends eF.BaseSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let t, n, r;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Loadable)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            try {
              t = (await e.r(268919)(e.i)).default;
            } catch (e) {
              throw new X.WalletLoadError(null == e ? void 0 : e.message, e);
            }
            try {
              n = await t.create();
            } catch (e) {
              throw new X.WalletConnectionError(
                null == e ? void 0 : e.message,
                e
              );
            }
            try {
              r = await eG(n, this._derivationPath);
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            n.on("disconnect", this._disconnected),
              (this._transport = n),
              (this._publicKey = r),
              this.emit("connect", r);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._transport;
          if (e) {
            e.off("disconnect", this._disconnected),
              (this._transport = null),
              (this._publicKey = null);
            try {
              await e.close();
            } catch (e) {
              this.emit(
                "error",
                new X.WalletDisconnectionError(
                  null == e ? void 0 : e.message,
                  e
                )
              );
            }
          }
          this.emit("disconnect");
        }
        async signTransaction(e) {
          try {
            let t = this._transport,
              n = this._publicKey;
            if (!t || !n) throw new X.WalletNotConnectedError();
            try {
              let r = await eK(t, e, this._derivationPath);
              e.addSignature(n, r);
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
            return e;
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Ledger"),
            (this.url = "https://ledger.com"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+"),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" != typeof window &&
              "undefined" != typeof document &&
              "undefined" != typeof navigator &&
              navigator.hid
                ? q.WalletReadyState.Loadable
                : q.WalletReadyState.Unsupported),
            (this._disconnected = () => {
              let e = this._transport;
              e &&
                (e.off("disconnect", this._disconnected),
                (this._transport = null),
                (this._publicKey = null),
                this.emit("error", new X.WalletDisconnectedError()),
                this.emit("disconnect"));
            }),
            (this._derivationPath =
              e.derivationPath ||
              (function (e, t) {
                let n = eW.Buffer.alloc(17),
                  r = n.writeUInt8(4, 0);
                return (
                  (r = n.writeUInt32BE(eZ(44), r)),
                  (r = n.writeUInt32BE(eZ(501), r)),
                  (r = n.writeUInt32BE(eZ(e), r)),
                  n.writeUInt32BE(eZ(t), r),
                  n
                );
              })(0, 0)),
            (this._connecting = !1),
            (this._transport = null),
            (this._publicKey = null);
        }
      }
      var eJ = eP;
      class eX extends eJ.BaseSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let e, t;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            let n = window.solana;
            try {
              e = await n.getAccount();
            } catch (e) {
              throw new X.WalletAccountError(null == e ? void 0 : e.message, e);
            }
            try {
              t = new U.PublicKey(e);
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            window.addEventListener("message", this._messaged),
              (this._wallet = n),
              (this._publicKey = t),
              this.emit("connect", t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          this._wallet &&
            (window.removeEventListener("message", this._messaged),
            (this._wallet = null),
            (this._publicKey = null)),
            this.emit("disconnect");
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "MathWallet"),
            (this.url = "https://mathwallet.org"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMCAwaDEyOHYxMjhoLTEyOHoiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJtOTAuODQ3MDA4NiA1Ny43NjEwMDIzYy0yLjI3NzAzNjMtMi4yNzcwMzYzLTIuMjc3MDM2My01Ljk2ODg0MTYgMC04LjI0NTg3NzggMi4yNzcwMzYyLTIuMjc3MDM2MyA1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2NiAyLjI3NzAzNjIgMi4yNzcwMzY2IDUuOTY4ODQxNSAwIDguMjQ1ODc3OC0yLjI3NzAzNjMgMi4yNzcwMzYyLTUuOTY4ODQxNiAyLjI3NzAzNjItOC4yNDU4Nzc4IDB6bS0xOS41ODM5NTk4IDE5LjU4Mzk1OTdjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMzAuOTIyMDQyMi0xMC4zMDczNDcyYy0xLjcwNzc3OC0xLjcwNzc3NzItMS43MDc3NzgtNC40NzY2MzEyIDAtNi4xODQ0MDg0IDEuNzA3Nzc3LTEuNzA3Nzc3MiA0LjQ3NjYzMS0xLjcwNzc3NzIgNi4xODQ0MDggMHMxLjcwNzc3NyA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEgMS43MDc3NzcyLTYuMTg0NDA4IDB6bS0xMC4zMDczNDc3IDEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMjEuNjQ1NDI4Ny0xLjAzMDczNDdjLTEuMTM4NTE4LTEuMTM4NTE4MS0xLjEzODUxOC0yLjk4NDQyMDggMC00LjEyMjkzODkgMS4xMzg1MTktMS4xMzg1MTgxIDIuOTg0NDIxLTEuMTM4NTE4MSA0LjEyMjkzOSAwIDEuMTM4NTE5IDEuMTM4NTE4MSAxLjEzODUxOSAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTggMS4xMzg1MTgxLTIuOTg0NDIgMS4xMzg1MTgxLTQuMTIyOTM5IDB6bS0xMC4zMDczNDcgMTAuMzA3MzQ3MmMtMS4xMzg1MTgtMS4xMzg1MTgxLTEuMTM4NTE4LTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxOC0xLjEzODUxODEgMi45ODQ0MjEtMS4xMzg1MTgxIDQuMTIyOTM5IDAgMS4xMzg1MTggMS4xMzg1MTgyIDEuMTM4NTE4IDIuOTg0NDIwOCAwIDQuMTIyOTM4OS0xLjEzODUxOCAxLjEzODUxODItMi45ODQ0MjEgMS4xMzg1MTgyLTQuMTIyOTM5IDB6bS0yMi42NzYxNjM3LTE4LjU1MzIyNWMtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3M2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2Mi0yLjI3NzAzNjMgNS45Njg4NDE1LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjIgMi4yNzcwMzYyIDIuMjc3MDM2MiA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYzIDIuMjc3MDM2Mi01Ljk2ODg0MTYgMi4yNzcwMzYyLTguMjQ1ODc3OCAwem0tMjAuNzEwNTA2IDBjLTIuMjc3MDM2Mi0yLjI3NzAzNjMtMi4yNzcwMzYyLTUuOTY4ODQxNiAwLTguMjQ1ODc3OCAyLjI3NzAzNjMtMi4yNzcwMzYzIDUuOTY4ODQxNi0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDIuMjc3MDM2MiAyLjI3NzAzNjMgNS45Njg4NDE1IDAgOC4yNDU4Nzc4LTIuMjc3MDM2MiAyLjI3NzAzNjItNS45Njg4NDE1IDIuMjc3MDM2Mi04LjI0NTg3NzggMHptLTE5LjU4Mzk1OTcgMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0zMC45MjIwNDE3LTEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMiAwLTYuMTg0NDA4NHM0LjQ3NjYzMTItMS43MDc3NzcyIDYuMTg0NDA4NCAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEyIDEuNzA3Nzc3Mi02LjE4NDQwODQgMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3MmMtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0tNDAuMTk4NjU0My0xLjAzMDczNDdjLTEuMTM4NTE4MTMtMS4xMzg1MTgxLTEuMTM4NTE4MTMtMi45ODQ0MjA4IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA4LTEuMTM4NTE4MSA0LjEyMjkzODkgMHMxLjEzODUxODEgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTIuOTg0NDIwOCAxLjEzODUxODEtNC4xMjI5Mzg5IDB6bTEwLjMwNzM0NzMgMTAuMzA3MzQ3MmMtMS4xMzg1MTgyLTEuMTM4NTE4MS0xLjEzODUxODItMi45ODQ0MjA3IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA3LTEuMTM4NTE4MSA0LjEyMjkzODggMCAxLjEzODUxODIgMS4xMzg1MTgyIDEuMTM4NTE4MiAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTgxIDEuMTM4NTE4Mi0yLjk4NDQyMDcgMS4xMzg1MTgyLTQuMTIyOTM4OCAwem00MS4yMjkzODg5IDBjLTEuMTM4NTE4MS0xLjEzODUxODEtMS4xMzg1MTgxLTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxODItMS4xMzg1MTgxIDIuOTg0NDIwOC0xLjEzODUxODEgNC4xMjI5Mzg5IDAgMS4xMzg1MTgyIDEuMTM4NTE4MiAxLjEzODUxODIgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTEuMTM4NTE4MSAxLjEzODUxODItMi45ODQ0MjA3IDEuMTM4NTE4Mi00LjEyMjkzODkgMHptLTQyLjI2MDEyMzctMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzEyIDAtNi4xODQ0MDg0czQuNDc2NjMxMi0xLjcwNzc3NzIgNi4xODQ0MDg0IDAgMS43MDc3NzcyIDQuNDc2NjMxMiAwIDYuMTg0NDA4NC00LjQ3NjYzMTIgMS43MDc3NzcyLTYuMTg0NDA4NCAwem0xOS41ODM5NTk4IDEuMDMwNzM0N2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzMgMTAuMzA3MzQ3M2MtMi4yNzcwMzYyLTIuMjc3MDM2My0yLjI3NzAzNjItNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2My0yLjI3NzAzNjMgNS45Njg4NDE2LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjMgMi4yNzcwMzYyIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYyIDIuMjc3MDM2Mi01Ljk2ODg0MTUgMi4yNzcwMzYyLTguMjQ1ODc3OCAweiIvPjwvZz48L3N2Zz4="),
            (this.supportedTransactionVersions = null),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.NotDetected),
            (this._messaged = (e) => {
              let t = e.data;
              t &&
                "mathwallet_internal" === t.origin &&
                "lockStatusChanged" === t.type &&
                !t.payload &&
                this._disconnected();
            }),
            (this._disconnected = () => {
              this._wallet &&
                (window.removeEventListener("message", this._messaged),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new X.WalletDisconnectedError()),
                this.emit("disconnect"));
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== q.WalletReadyState.Unsupported &&
              (0, q.scopePollingDetectionStrategy)(() => {
                var e;
                return (
                  null != (e = window.solana) &&
                  !!e.isMathWallet &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              });
        }
      }
      var e$ = e.i(2174),
        e0 = eP,
        e1 = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        e4 = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        };
      class e2 extends Event {
        get detail() {
          return e1(this, I, "f");
        }
        get type() {
          return "wallet-standard:register-wallet";
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
        constructor(e) {
          super("wallet-standard:register-wallet", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            I.set(this, void 0),
            e4(this, I, e, "f");
        }
      }
      I = new WeakMap();
      var e3 = function (e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        e5 = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        };
      class e6 {
        get version() {
          return e3(this, A, "f");
        }
        get name() {
          return e3(this, T, "f");
        }
        get icon() {
          return e3(this, D, "f");
        }
        get chains() {
          return [et, en, er];
        }
        get features() {
          return {
            [G]: { version: "1.0.0", connect: e3(this, z, "f") },
            [ea]: { version: "1.0.0", disconnect: e3(this, _, "f") },
            [K]: { version: "1.0.0", on: e3(this, L, "f") },
            [H.SolanaSignAndSendTransaction]: {
              version: "1.0.0",
              supportedTransactionVersions: ["legacy", 0],
              signAndSendTransaction: e3(this, P, "f"),
            },
            [Z.SolanaSignTransaction]: {
              version: "1.0.0",
              supportedTransactionVersions: ["legacy", 0],
              signTransaction: e3(this, k, "f"),
            },
            [ee.SolanaSignMessage]: {
              version: "1.0.0",
              signMessage: e3(this, W, "f"),
            },
          };
        }
        get accounts() {
          return e3(this, C, "f") ? e3(this, C, "f").standardAccounts : [];
        }
        constructor() {
          var t = this;
          S.add(this),
            j.set(this, {}),
            A.set(this, "1.0.0"),
            T.set(this, "MetaMask"),
            D.set(
              this,
              "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="
            ),
            C.set(this, null),
            L.set(this, (e, t) => {
              var n;
              return (
                (null == (n = e3(this, j, "f")[e]) ? void 0 : n.push(t)) ||
                  (e3(this, j, "f")[e] = [t]),
                () => e3(this, S, "m", x).call(this, e, t)
              );
            }),
            z.set(this, async () => {
              if (!e3(this, C, "f")) {
                let t;
                try {
                  t = (await e.r(825e3)(e.i)).default;
                } catch (e) {
                  throw Error("Unable to load Solflare MetaMask SDK");
                }
                e5(this, C, new t(), "f"),
                  e3(this, C, "f").on("standard_change", (e) =>
                    e3(this, S, "m", O).call(this, "change", e)
                  );
              }
              return (
                this.accounts.length || (await e3(this, C, "f").connect()),
                { accounts: this.accounts }
              );
            }),
            _.set(this, async () => {
              e3(this, C, "f") && (await e3(this, C, "f").disconnect());
            }),
            P.set(this, async function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              if (!e3(t, C, "f")) throw new X.WalletNotConnectedError();
              return await e3(t, C, "f").standardSignAndSendTransaction(...n);
            }),
            k.set(this, async function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              if (!e3(t, C, "f")) throw new X.WalletNotConnectedError();
              return await e3(t, C, "f").standardSignTransaction(...n);
            }),
            W.set(this, async function () {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              if (!e3(t, C, "f")) throw new X.WalletNotConnectedError();
              return await e3(t, C, "f").standardSignMessage(...n);
            });
        }
      }
      (j = new WeakMap()),
        (A = new WeakMap()),
        (T = new WeakMap()),
        (D = new WeakMap()),
        (C = new WeakMap()),
        (L = new WeakMap()),
        (z = new WeakMap()),
        (_ = new WeakMap()),
        (P = new WeakMap()),
        (k = new WeakMap()),
        (W = new WeakMap()),
        (S = new WeakSet()),
        (O = function (e) {
          for (
            var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          null == (t = e3(this, j, "f")[e]) ||
            t.forEach((e) => e.apply(null, r));
        }),
        (x = function (e, t) {
          var n;
          e3(this, j, "f")[e] =
            null == (n = e3(this, j, "f")[e])
              ? void 0
              : n.filter((e) => t !== e);
        });
      let e8 = !1;
      async function e9() {
        let e = "solflare-detect-metamask";
        function t() {
          window.postMessage(
            {
              target: "metamask-contentscript",
              data: {
                name: "metamask-provider",
                data: { id: e, jsonrpc: "2.0", method: "wallet_getSnaps" },
              },
            },
            window.location.origin
          );
        }
        function n(r) {
          var i, a;
          let o = r.data;
          (null == o ? void 0 : o.target) === "metamask-inpage" &&
            (null == (i = o.data) ? void 0 : i.name) === "metamask-provider" &&
            ((null == (a = o.data.data) ? void 0 : a.id) === e
              ? (window.removeEventListener("message", n),
                o.data.data.error ||
                  (function () {
                    if (!e8) {
                      var e = new e6();
                      let t = (t) => {
                        let { register: n } = t;
                        return n(e);
                      };
                      try {
                        window.dispatchEvent(new e2(t));
                      } catch (e) {
                        console.error(
                          "wallet-standard:register-wallet event could not be dispatched\n",
                          e
                        );
                      }
                      try {
                        window.addEventListener(
                          "wallet-standard:app-ready",
                          (e) => {
                            let { detail: n } = e;
                            return t(n);
                          }
                        );
                      } catch (e) {
                        console.error(
                          "wallet-standard:app-ready event listener could not be added\n",
                          e
                        );
                      }
                      e8 = !0;
                    }
                  })())
              : t());
        }
        window.addEventListener("message", n),
          window.setTimeout(
            () => window.removeEventListener("message", n),
            5e3
          ),
          t();
      }
      class e7 extends e0.BaseMessageSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get connected() {
          var e;
          return !!(null == (e = this._wallet) ? void 0 : e.connected);
        }
        get readyState() {
          return this._readyState;
        }
        async autoConnect() {
          (this.readyState === q.WalletReadyState.Loadable &&
            (0, q.isIosAndRedirectable)()) ||
            (await this.connect());
        }
        async connect() {
          try {
            let t, n, r;
            if (this.connected || this.connecting) return;
            if (
              this._readyState !== q.WalletReadyState.Loadable &&
              this._readyState !== q.WalletReadyState.Installed
            )
              throw new X.WalletNotReadyError();
            if (
              this.readyState === q.WalletReadyState.Loadable &&
              (0, q.isIosAndRedirectable)()
            ) {
              let e = encodeURIComponent(window.location.href),
                t = encodeURIComponent(window.location.origin);
              window.location.href = "https://solflare.com/ul/v1/browse/"
                .concat(e, "?ref=")
                .concat(t);
              return;
            }
            try {
              t = (await e.r(821183)(e.i)).default;
            } catch (e) {
              throw new X.WalletLoadError(null == e ? void 0 : e.message, e);
            }
            try {
              n = new t({ network: this._config.network });
            } catch (e) {
              throw new X.WalletConfigError(null == e ? void 0 : e.message, e);
            }
            if (((this._connecting = !0), !n.connected))
              try {
                await n.connect();
              } catch (e) {
                throw new X.WalletConnectionError(
                  null == e ? void 0 : e.message,
                  e
                );
              }
            if (!n.publicKey) throw new X.WalletConnectionError();
            try {
              r = new U.PublicKey(n.publicKey.toBytes());
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            n.on("disconnect", this._disconnected),
              n.on("accountChanged", this._accountChanged),
              (this._wallet = n),
              (this._publicKey = r),
              this.emit("connect", r);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._wallet;
          if (e) {
            e.off("disconnect", this._disconnected),
              e.off("accountChanged", this._accountChanged),
              (this._wallet = null),
              (this._publicKey = null);
            try {
              await e.disconnect();
            } catch (e) {
              this.emit(
                "error",
                new X.WalletDisconnectionError(
                  null == e ? void 0 : e.message,
                  e
                )
              );
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            let r = this._wallet;
            if (!r) throw new X.WalletNotConnectedError();
            try {
              let { signers: i, ...a } = n;
              return (
                (0, J.isVersionedTransaction)(e)
                  ? (null == i ? void 0 : i.length) && e.sign(i)
                  : ((e = await this.prepareTransaction(e, t, a)),
                    (null == i ? void 0 : i.length) && e.partialSign(...i)),
                (a.preflightCommitment = a.preflightCommitment || t.commitment),
                await r.signAndSendTransaction(e, a)
              );
            } catch (e) {
              if (e instanceof X.WalletError) throw e;
              throw new X.WalletSendTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return await t.signMessage(e, "utf8");
            } catch (e) {
              throw new X.WalletSignMessageError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Solflare"),
            (this.url = "https://solflare.com"),
            (this.icon =
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJTIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMjA1MGE7c3Ryb2tlOiNmZmVmNDY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOi41cHg7fS5jbHMtMntmaWxsOiNmZmVmNDY7fTwvc3R5bGU+PC9kZWZzPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iMTIiIHJ5PSIxMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjIzLDI2LjQybDIuNDYtMi4zOCw0LjU5LDEuNWMzLjAxLDEsNC41MSwyLjg0LDQuNTEsNS40MywwLDEuOTYtLjc1LDMuMjYtMi4yNSw0LjkzbC0uNDYuNS4xNy0xLjE3Yy42Ny00LjI2LS41OC02LjA5LTQuNzItNy40M2wtNC4zLTEuMzhoMFpNMTguMDUsMTEuODVsMTIuNTIsNC4xNy0yLjcxLDIuNTktNi41MS0yLjE3Yy0yLjI1LS43NS0zLjAxLTEuOTYtMy4zLTQuNTF2LS4wOGgwWk0xNy4zLDMzLjA2bDIuODQtMi43MSw1LjM0LDEuNzVjMi44LjkyLDMuNzYsMi4xMywzLjQ2LDUuMThsLTExLjY1LTQuMjJoMFpNMTMuNzEsMjAuOTVjMC0uNzkuNDItMS41NCwxLjEzLTIuMTcuNzUsMS4wOSwyLjA1LDIuMDUsNC4wOSwyLjcxbDQuNDIsMS40Ni0yLjQ2LDIuMzgtNC4zNC0xLjQyYy0yLS42Ny0yLjg0LTEuNjctMi44NC0yLjk2TTI2LjgyLDQyLjg3YzkuMTgtNi4wOSwxNC4xMS0xMC4yMywxNC4xMS0xNS4zMiwwLTMuMzgtMi01LjI2LTYuNDMtNi43MmwtMy4zNC0xLjEzLDkuMTQtOC43Ny0xLjg0LTEuOTYtMi43MSwyLjM4LTEyLjgxLTQuMjJjLTMuOTcsMS4yOS04Ljk3LDUuMDktOC45Nyw4Ljg5LDAsLjQyLjA0LjgzLjE3LDEuMjktMy4zLDEuODgtNC42MywzLjYzLTQuNjMsNS44LDAsMi4wNSwxLjA5LDQuMDksNC41NSw1LjIybDIuNzUuOTItOS41Miw5LjE0LDEuODQsMS45NiwyLjk2LTIuNzEsMTQuNzMsNS4yMmgwWiIvPjwvc3ZnPg=="),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.Loadable),
            (this._disconnected = () => {
              let e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new X.WalletDisconnectedError()),
                this.emit("disconnect"));
            }),
            (this._accountChanged = (e) => {
              if (!e) return;
              let t = this._publicKey;
              if (t) {
                try {
                  e = new U.PublicKey(e.toBytes());
                } catch (e) {
                  this.emit(
                    "error",
                    new X.WalletPublicKeyError(
                      null == e ? void 0 : e.message,
                      e
                    )
                  );
                  return;
                }
                t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
              }
            }),
            (this._connecting = !1),
            (this._publicKey = null),
            (this._wallet = null),
            (this._config = e),
            this._readyState !== q.WalletReadyState.Unsupported &&
              ((0, q.scopePollingDetectionStrategy)(() => {
                var e;
                return (
                  ((null != (e = window.solflare) && !!e.isSolflare) ||
                    !!window.SolflareApp) &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              }),
              e9());
        }
      }
      var te = eP;
      class tt extends te.BaseSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get connected() {
          var e;
          return !!(null == (e = this._wallet) ? void 0 : e.currentAccount);
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let e, t;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            let n = window.solong;
            try {
              e = await n.selectAccount();
            } catch (e) {
              throw new X.WalletAccountError(null == e ? void 0 : e.message, e);
            }
            try {
              t = new U.PublicKey(e);
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            (this._wallet = n), (this._publicKey = t), this.emit("connect", t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          this._wallet && ((this._wallet = null), (this._publicKey = null)),
            this.emit("disconnect");
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Solong"),
            (this.url = "https://solongwallet.io"),
            (this.icon =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAGlklEQVR4Ae3bA5DsyhfH8TNr49r2/du2bdu2bdu2zcdNrm3b9toz533rvctUn3Umk9p01WfdvVW/6nROBxJVS1rSkpa0pCUtaUlLWtKSpl4VXos3GJ4sujQFuUKfWl+qT730arzB8Ex9YksKcgXjFOCVeIPhBYydB8mawQ+yiGC8n0EN6zAVcgXhpQjoq1DDdsyDAAB9Pwo1HMC9INk0FIM8Bt1Qh9WohQQCvD+BtEMdtmC8I7y5aIE67MV0SBwDvB3qsE/UHwMJIpC/QB1OYiLEEeCPoQ7nMRcSwwDrao3Zl8aTIEGEUYlL0IAMXuQOr66UvsegDm+ExDJAPNiafSg0AlyIbmjAWX1aQzEkiH6T0QkNaEdpnAN8NNRhPcSF9e9el2ebBhyAuNBvGtLQgIuQOAd4D6jDMRQbM3AmOqEBDfq0xjJIEP3GohkakEFVjAP0y401sAsLnAE+pb6EsC5AA9J4sHsG+kX0PQR1eFJ8AwTWQh0+DjFm4a1Qh2/AOoz/BHX4ZdwD/CDU4aioX2GUMW+AOnB2bqiBBDHe86EOTYw5GRKJwQ/ijUM91OGTxgysxSmowzeNw7j08m5DHX4l7Igg2TY0g9hbLBZ+f7oxC98CdWjDvYzD+MVQh07GfEQsZyDgVWA71OGvorfnQQCAcqaYUFZDHW6j/itAoB70GcergzqsEa0rhGTTEA7mP0koK4xdyeOMmvBBhJU2zsjPMw7lu9O3zShpXheHk4hhcZ4w26AOG4RSxDiUfwZ12KdPqy+FBDHeV6EOZxizIg6HsMGbiQ5jdjzBXRfeefGg3tgbv9BYC0fhZE7sjUMY9Pf9rdcI5XtQh39BjBA/C3VYnM0zcgiDek+GOhzh93mQoMs7kIxze/eMhnxIEOPNM9bcFtTEeAb6I419axu/m2CsgxU4Aw1A/UxIUM/bO/9+cVkDDd5x42x8N1iH8Taow0NhHcZLoQ5Pi/MMzDMW+DTu7g6vIY9AdkAdHmaUMyn6roA6PD22AeLB6DbWplHG7LubfY+kfiIkiH5T0AJ1uFtMA1xUzOc1UIclzvCeXF+o7DygDlvds29RgVVzYj+K4xhgEX4NdcjgecE++rSL+ZdLmIxRB77Ose7l4XPIQB3eF8M60C/n8++ghltE/QLIFfqUiyUE8kOoYSW7jmLIFXeN4X0NaajDDlG/NG6XswrxKdxu+G/weh27j3wCej9uN9zEOjc3sObl4S243XBLhDfWE0mAMQjwZfhxDng7pG/8Sj4/ER/Gd/BdfBhPRGW2A/wxNAfcBOnFCHwZZ6GGs/gqapMAb/QEnIT20Uk8IQkQeB7aof3UihcM9wDvhyboANHXv1+IdWBOB2hsIftto+iSPEif8aGPcjrA50GHyPMiOIT9B/N5apaMgQT8D2poxMdwt8s+hkao4X9ZDxBTIdHwy/h8AeqQxhMhAU9BB9ThPMqHTYCYjU6owy3uPstSfL4Z6uZPC+Mk8gOomz8DEg3vXshAHb4MMXwZarhXGDPwa739w2j48623BPAniOFPUMPsMAL8INTw9AgDrLZOCmjFPEjA3WD1aUJVGAG+CGr4ECRCy6GGg3iyaF0+n/PwFByEGpaJ+qkw1sB7QA3/hUTozdBetFymvXhTWGVMOc7bp36/FhKRamNW9dcxZmpZiI+32ad+vAQSoWejGzpAXXh22Fek3wY1rDD2kVnijR3ExYQMPgkJOUB/nFW0Is3vnw6JhlHX9a4N70Iq/ACBv0MNu7J9WxHw7jaA2deFOtw32zeVHtHLWvMN0dtSkOzwS3spYy7iH1hx2d/wYdyTvnkR3BdeQjjerVBDN14JyZIfQWH5RC7e1rw32npZV54LCc+SPD5/HgqYD3WW5+gTqt6X+rA4v0701hRkKF0+bL+HTM9Hgv/MHH60wyvHWigsafwA1ZAhMguLoL34kbDcQEI1uAH8mcbuxPHImf8i5EMGxqvER9EI7cUqVMTl0Y6HoxHaBzvxNkyC9EEe7oEv4Sy0D/YQ+IS4ver1JNT38z7sWnwbb8TT8Cg8Gs/Gu/Ar7EEXtI/2ud7Ni0GAYCbiJDQiazA57k9nTcdqaJb9UtSvitXbmjavCJ9AMzRkJ/B80boUJBLhDe7Nw1/QCR1i9fgKRg6HByzvjZ/hInQQMjiCT2PSMHxC1a/l8wvwGxyG9kEaW/EtPI4xiiE5JcLrd6PxcLwM78SH8EG8Fc/H/UUXVUByGh8SSYBJgEmASYCJJMAkwBi6A3xCqZhiBz8+AAAAAElFTkSuQmCC"),
            (this.supportedTransactionVersions = null),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.NotDetected),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== q.WalletReadyState.Unsupported &&
              (0, q.scopePollingDetectionStrategy)(
                () =>
                  !!window.solong &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
              );
        }
      }
      var tn = eP;
      class tr extends tn.BaseMessageSignerWalletAdapter {
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get connected() {
          var e;
          return !!(null == (e = this._wallet) ? void 0 : e.isConnected);
        }
        get readyState() {
          return this._readyState;
        }
        async connect() {
          try {
            let e;
            if (this.connected || this.connecting) return;
            if (this._readyState !== q.WalletReadyState.Installed)
              throw new X.WalletNotReadyError();
            this._connecting = !0;
            let t = window.trustwallet.solana;
            if (!t.isConnected)
              try {
                await t.connect();
              } catch (e) {
                throw new X.WalletConnectionError(
                  null == e ? void 0 : e.message,
                  e
                );
              }
            if (!t.publicKey) throw new X.WalletAccountError();
            try {
              e = new U.PublicKey(t.publicKey.toBytes());
            } catch (e) {
              throw new X.WalletPublicKeyError(
                null == e ? void 0 : e.message,
                e
              );
            }
            t.on("disconnect", this._disconnected),
              (this._wallet = t),
              (this._publicKey = e),
              this.emit("connect", e);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._wallet;
          if (e) {
            e.off("disconnect", this._disconnected),
              (this._wallet = null),
              (this._publicKey = null);
            try {
              await e.disconnect();
            } catch (e) {
              this.emit(
                "error",
                new X.WalletDisconnectionError(
                  null == e ? void 0 : e.message,
                  e
                )
              );
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          try {
            let r = this._wallet;
            if (!r) throw new X.WalletNotConnectedError();
            try {
              let { signers: i, ...a } = n;
              (e = await this.prepareTransaction(e, t, a)),
                (null == i ? void 0 : i.length) && e.partialSign(...i),
                (a.preflightCommitment = a.preflightCommitment || t.commitment);
              let { signature: o } = await r.signAndSendTransaction(e, a);
              return o;
            } catch (e) {
              if (e instanceof X.WalletError) throw e;
              throw new X.WalletSendTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new X.WalletSignTransactionError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new X.WalletNotConnectedError();
            try {
              let { signature: n } = await t.signMessage(e);
              return n;
            } catch (e) {
              throw new X.WalletSignMessageError(
                null == e ? void 0 : e.message,
                e
              );
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        constructor(e = {}) {
          super(),
            (this.name = "Trust"),
            (this.url = "https://trustwallet.com"),
            (this.icon =
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTJ7ZmlsbDojMDUwMGZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTEyMy4yNiIgeTE9IjE4NjUuNzgiIHgyPSI5NTQuNjEiIHkyPSIxMzM3LjUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMTgyKSBzY2FsZSgxIC0xKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjAyIiBzdG9wLWNvbG9yPSJibHVlIi8+PHN0b3Agb2Zmc2V0PSIuMDgiIHN0b3AtY29sb3I9IiMwMDk0ZmYiLz48c3RvcCBvZmZzZXQ9Ii4xNiIgc3RvcC1jb2xvcj0iIzQ4ZmY5MSIvPjxzdG9wIG9mZnNldD0iLjQyIiBzdG9wLWNvbG9yPSIjMDA5NGZmIi8+PHN0b3Agb2Zmc2V0PSIuNjgiIHN0b3AtY29sb3I9IiMwMDM4ZmYiLz48c3RvcCBvZmZzZXQ9Ii45IiBzdG9wLWNvbG9yPSIjMDUwMGZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNzM4LjcxLDQyMy40MWwyMjEuNDUtNzIuM3Y1MDAuNTJjLTE1OC4xOC02Ni43NC0yMjEuNDUtMTk0LjY1LTIyMS40NS0yNjYuOTR2LTE2MS4yOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMTgxLjYyLDQyMy40MWwtMjIxLjQ1LTcyLjN2NTAwLjUyYzE1OC4xOC02Ni43NCwyMjEuNDUtMTk0LjY1LDIyMS40NS0yNjYuOTR2LTE2MS4yOFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im04MjUuOTEsMjMwLjg1aDMwLjl2MTcuMzFjMTAuMTMtMTUuNTYsMjEuNzgtMTcuMzEsMzguODQtMTcuMzF2MzAuNmgtNy43N2MtMjAuNDQsMC0zMC4yMyw5LjYyLTMwLjIzLDI4LjY3djMyLjUyaC0zMS43NXYtOTEuNzlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtOTk4Ljc4LDMyMi42M2gtMzEuNzV2LTguNzVjLTYuOTMsOC4wNS0xNi4zOCwxMS41NC0yOC4wMywxMS41NC0yMi4xMiwwLTM0LjYyLTEzLjExLTM0LjYyLTM3LjI0di01Ny4zNGgzMS43NXY1MC4xOGMwLDExLjM2LDUuNTcsMTgsMTUuMDIsMThzMTUuODgtNi40NywxNS44OC0xNy40OHYtNTAuN2gzMS43NXY5MS43OVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0xMDA2LjU0LDI5NC4zaDI5LjczYzEuMzYsNi42NCw1LjkxLDkuNDMsMTYuODgsOS40Myw4Ljk1LDAsMTQuMTktMi4wOSwxNC4xOS01Ljk0LDAtMi45OC0yLjU0LTQuOS05Ljc5LTYuNDdsLTIzLjk4LTUuNDJjLTE2LjA0LTMuNjYtMjQuMTUtMTIuOTMtMjQuMTUtMjcuOCwwLTE5LjU5LDE0LjM1LTI5LjczLDQyLjIxLTI5LjczczQxLjU0LDkuODgsNDMuOTEsMzEuMDRoLTI5LjU1Yy0uNS01LjU5LTYuMjUtOS4wMS0xNS43LTkuMDEtNy41OSwwLTEyLjQ5LDIuNDQtMTIuNDksNi4xMiwwLDMuMTQsMy4yLDUuNTksOS42Myw3LjE4bDI1LjE2LDYuMTJjMTYuNTQsNC4wMSwyNC40OSwxMi40MSwyNC40OSwyNi4wNSwwLDE4Ljg5LTE2LjM4LDMwLjA4LTQ0LjIzLDMwLjA4cy00Ni4yNy0xMi4wNi00Ni4yNy0zMS42NWgtLjAzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTExODEuNjIsMjU5LjR2LTI4LjU1aC03OC4zNXYyOC41NmgyMy4zOHY2My4yMmgzMS41OHYtNjMuMjRoMjMuMzlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtODE3LjA4LDI1OS40di0yOC41NWgtNzguMzV2MjguNTZoMjMuMzh2NjMuMjJoMzEuNTh2LTYzLjI0aDIzLjM4WiIvPjwvc3ZnPg=="),
            (this.supportedTransactionVersions = null),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? q.WalletReadyState.Unsupported
                : q.WalletReadyState.NotDetected),
            (this._disconnected = () => {
              let e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new X.WalletDisconnectedError()),
                this.emit("disconnect"));
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== q.WalletReadyState.Unsupported &&
              (0, q.scopePollingDetectionStrategy)(() => {
                var e, t;
                return (
                  null != (t = window.trustwallet) &&
                  null != (e = t.solana) &&
                  !!e.isTrust &&
                  ((this._readyState = q.WalletReadyState.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
                );
              });
        }
      }
      let ti = (e) => {
        let { children: t } = e,
          n = (0, B.useMemo)(
            () => "".concat(window.location.origin, "/api/trpc"),
            []
          ),
          r = (0, B.useMemo)(
            () => [
              new e$.PhantomWalletAdapter(),
              new tr(),
              new eQ(),
              new eB(),
              new eq(),
              new tt(),
              new e7(),
              new eX(),
              new ek(),
            ],
            []
          );
        return (0, R.jsx)(Q, {
          endpoint: n,
          children: (0, R.jsx)(ej, {
            wallets: r,
            onError: (e) => {
              var t, n, r;
              console.error("Solana wallet error:", e),
                (null == e || null == (t = e.message)
                  ? void 0
                  : t.includes("User rejected")) ||
                (null == e || null == (n = e.message)
                  ? void 0
                  : n.includes("cancelled"))
                  ? console.log("User cancelled wallet connection")
                  : (null == e || null == (r = e.message)
                      ? void 0
                      : r.includes("WalletNotFoundError")) &&
                    console.log(
                      "Wallet not found - may need to install wallet app"
                    );
            },
            autoConnect: !0,
            children: (0, R.jsx)(e_, { children: t }),
          }),
        });
      };
    },
    914905: (e) => {
      "use strict";
      e.s({ default: () => r });
      var t = e.i(699677),
        n = e.i(150840);
      function r(e) {
        let { locale: r, ...i } = e;
        if (!r) throw Error(void 0);
        return (0, n.jsx)(t.IntlProvider, { locale: r, ...i });
      }
    },
  },
]);

//# sourceMappingURL=cb942ae3c5b1e4ff.js.map
