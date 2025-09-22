(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    292428: (t) => {
      "use strict";
      t.s(
        {
          AppKitAccountButton: () => D,
          AppKitButton: () => M,
          AppKitConnectButton: () => tn,
          AppKitNetworkButton: () => tC,
          W3mAccountButton: () => U,
          W3mAccountSettingsView: () => tY,
          W3mAccountView: () => nv,
          W3mAllWalletsView: () => oA,
          W3mButton: () => F,
          W3mChooseAccountNameView: () => sr,
          W3mConnectButton: () => te,
          W3mConnectView: () => l$,
          W3mConnectWalletsView: () => sN,
          W3mConnectingExternalView: () => af,
          W3mConnectingMultiChainView: () => ax,
          W3mConnectingWcBasicView: () => a4,
          W3mConnectingWcView: () => a0,
          W3mDownloadsView: () => sp,
          W3mGetWalletView: () => sm,
          W3mNetworkButton: () => tv,
          W3mNetworkSwitchView: () => sV,
          W3mNetworksView: () => s8,
          W3mProfileWalletsView: () => iw,
          W3mRouter: () => cX.W3mRouter,
          W3mSIWXSignMessageView: () => cY,
          W3mSwitchActiveChainView: () => cr,
          W3mUnsupportedChainView: () => cb,
          W3mWalletCompatibleNetworksView: () => cO,
          W3mWhatIsANetworkView: () => cc,
          W3mWhatIsAWalletView: () => sA,
        },
        292428
      ),
        t.s(
          { AppKitAccountButton: () => D, W3mAccountButton: () => U },
          911602
        );
      var e = t.i(213384);
      t.i(478795);
      var n = t.i(506930),
        i = t.i(302084);
      t.i(964439);
      var o = t.i(780157),
        r = t.i(197626);
      t.i(721721);
      var l = t.i(965911),
        a = t.i(705258),
        s = t.i(841768),
        c = t.i(596373),
        u = t.i(631867),
        d = t.i(159055),
        p = t.i(563493),
        h = t.i(737460);
      t.i(433829);
      var w = t.i(665747),
        f = n;
      t.i(715030), t.i(55912), t.i(160541), t.i(885464);
      var m = t.i(361156),
        g = t.i(111607);
      t.i(738045), t.i(374230);
      var b = t.i(126790);
      function v() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n  }\n\n  button {\n    border-radius: var(--wui-border-radius-3xl);\n    background: var(--wui-color-gray-glass-002);\n    display: flex;\n    gap: var(--wui-spacing-xs);\n    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)\n      var(--wui-spacing-xs);\n    border: 1px solid var(--wui-color-gray-glass-005);\n  }\n\n  button:disabled {\n    background: var(--wui-color-gray-glass-015);\n  }\n\n  button:disabled > wui-text {\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  button:disabled > wui-flex > wui-text {\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  button:disabled > wui-image,\n  button:disabled > wui-flex > wui-avatar {\n    filter: grayscale(1);\n  }\n\n  button:has(wui-image) {\n    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)\n      var(--wui-spacing-xs);\n  }\n\n  wui-text {\n    color: var(--wui-color-fg-100);\n  }\n\n  wui-flex > wui-text {\n    color: var(--wui-color-fg-200);\n  }\n\n  wui-image,\n  wui-icon-box {\n    border-radius: var(--wui-border-radius-3xl);\n    width: 24px;\n    height: 24px;\n    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);\n  }\n\n  wui-flex {\n    border-radius: var(--wui-border-radius-3xl);\n    border: 1px solid var(--wui-color-gray-glass-005);\n    background: var(--wui-color-gray-glass-005);\n    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);\n  }\n\n  button.local-no-balance {\n    border-radius: 0px;\n    border: none;\n    background: transparent;\n  }\n\n  wui-avatar {\n    width: 20px;\n    height: 20px;\n    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);\n  }\n\n  @media (max-width: 500px) {\n    button {\n      gap: 0px;\n      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;\n      height: 32px;\n    }\n    wui-image,\n    wui-icon-box,\n    button > wui-text {\n      visibility: hidden;\n      width: 0px;\n      height: 0px;\n    }\n    button {\n      border-radius: 0px;\n      border: none;\n      background: transparent;\n      padding: 0px;\n    }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled > wui-flex > wui-text {\n      color: var(--wui-color-fg-175);\n    }\n\n    button:active:enabled > wui-flex > wui-text {\n      color: var(--wui-color-fg-175);\n    }\n  }\n",
        ]);
        return (
          (v = function () {
            return t;
          }),
          t
        );
      }
      let C = (0, b.css)(v());
      function y() {
        let t = (0, e._)([
          "\n      <button\n        ?disabled=",
          "\n        class=",
          "\n      >\n        ",
          '\n        <wui-flex gap="xxs" alignItems="center">\n          <wui-avatar\n            .imageSrc=',
          "\n            alt=",
          "\n            address=",
          '\n          ></wui-avatar>\n          <wui-text variant="paragraph-600" color="inherit">\n            ',
          "\n          </wui-text>\n        </wui-flex>\n      </button>\n    ",
        ]);
        return (
          (y = function () {
            return t;
          }),
          t
        );
      }
      function x() {
        let t = (0, e._)([
          ' <wui-icon-box\n          size="sm"\n          iconColor="error-100"\n          backgroundColor="error-100"\n          icon="warningCircle"\n          data-testid="wui-account-button-unsupported-chain"\n        ></wui-icon-box>\n        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>',
        ]);
        return (
          (x = function () {
            return t;
          }),
          t
        );
      }
      function k() {
        let t = (0, e._)(["<wui-image src=", "></wui-image>"]);
        return (
          (k = function () {
            return t;
          }),
          t
        );
      }
      function E() {
        let t = (0, e._)([
          '\n            <wui-icon-box\n              size="sm"\n              iconColor="fg-200"\n              backgroundColor="fg-300"\n              icon="networkPlaceholder"\n            ></wui-icon-box>\n          ',
        ]);
        return (
          (E = function () {
            return t;
          }),
          t
        );
      }
      function S() {
        let t = (0, e._)([
          '<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>',
        ]);
        return (
          (S = function () {
            return t;
          }),
          t
        );
      }
      function A() {
        let t = (0, e._)([
          '<wui-text variant="paragraph-600" color="inherit"> ',
          "</wui-text>",
        ]);
        return (
          (A = function () {
            return t;
          }),
          t
        );
      }
      function R() {
        let t = (0, e._)(["", " ", ""]);
        return (
          (R = function () {
            return t;
          }),
          t
        );
      }
      var I = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let T = class extends f.LitElement {
        render() {
          return (0, i.html)(
            y(),
            this.disabled,
            (0, l.ifDefined)(this.balance ? void 0 : "local-no-balance"),
            this.balanceTemplate(),
            this.avatarSrc,
            this.address,
            this.address,
            this.address
              ? g.UiHelperUtil.getTruncateString({
                  string: this.profileName || this.address,
                  charsStart: this.profileName ? 18 : this.charsStart,
                  charsEnd: this.profileName ? 0 : this.charsEnd,
                  truncate: this.profileName ? "end" : "middle",
                })
              : null
          );
        }
        balanceTemplate() {
          if (this.isUnsupportedChain) return (0, i.html)(x());
          if (this.balance) {
            let t = this.networkSrc
                ? (0, i.html)(k(), this.networkSrc)
                : (0, i.html)(E()),
              e = this.loading
                ? (0, i.html)(S())
                : (0, i.html)(A(), this.balance);
            return (0, i.html)(R(), t, e);
          }
          return null;
        }
        constructor() {
          super(...arguments),
            (this.networkSrc = void 0),
            (this.avatarSrc = void 0),
            (this.balance = void 0),
            (this.isUnsupportedChain = void 0),
            (this.disabled = !1),
            (this.loading = !1),
            (this.address = ""),
            (this.profileName = ""),
            (this.charsStart = 4),
            (this.charsEnd = 6);
        }
      };
      function O() {
        let t = (0, e._)([
          "\n      <wui-account-button\n        .disabled=",
          "\n        .isUnsupportedChain=",
          "\n        address=",
          "\n        profileName=",
          "\n        networkSrc=",
          "\n        avatarSrc=",
          "\n        balance=",
          "\n        @click=",
          "\n        data-testid=",
          "\n        .charsStart=",
          "\n        .charsEnd=",
          "\n        ?loading=",
          "\n      >\n      </wui-account-button>\n    ",
        ]);
        return (
          (O = function () {
            return t;
          }),
          t
        );
      }
      (T.styles = [m.resetStyles, m.elementStyles, C]),
        I([(0, o.property)()], T.prototype, "networkSrc", void 0),
        I([(0, o.property)()], T.prototype, "avatarSrc", void 0),
        I([(0, o.property)()], T.prototype, "balance", void 0),
        I(
          [(0, o.property)({ type: Boolean })],
          T.prototype,
          "isUnsupportedChain",
          void 0
        ),
        I(
          [(0, o.property)({ type: Boolean })],
          T.prototype,
          "disabled",
          void 0
        ),
        I([(0, o.property)({ type: Boolean })], T.prototype, "loading", void 0),
        I([(0, o.property)()], T.prototype, "address", void 0),
        I([(0, o.property)()], T.prototype, "profileName", void 0),
        I([(0, o.property)()], T.prototype, "charsStart", void 0),
        I([(0, o.property)()], T.prototype, "charsEnd", void 0),
        (T = I([(0, w.customElement)("wui-account-button")], T));
      var _ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      class N extends n.LitElement {
        connectedCallback() {
          super.connectedCallback(),
            this.setAccountData(
              u.ChainController.getAccountData(this.namespace)
            ),
            this.setNetworkData(
              u.ChainController.getNetworkData(this.namespace)
            );
        }
        firstUpdated() {
          let t = this.namespace;
          t
            ? this.unsubscribe.push(
                u.ChainController.subscribeChainProp(
                  "accountState",
                  (t) => {
                    this.setAccountData(t);
                  },
                  t
                ),
                u.ChainController.subscribeChainProp(
                  "networkState",
                  (e) => {
                    this.setNetworkData(e),
                      (this.isSupported =
                        u.ChainController.checkIfSupportedNetwork(
                          t,
                          null == e ? void 0 : e.caipNetwork
                        ));
                  },
                  t
                )
              )
            : this.unsubscribe.push(
                s.AssetController.subscribeNetworkImages(() => {
                  this.networkImage = c.AssetUtil.getNetworkImage(this.network);
                }),
                u.ChainController.subscribeKey("activeCaipAddress", (t) => {
                  this.caipAddress = t;
                }),
                a.AccountController.subscribeKey(
                  "balance",
                  (t) => (this.balanceVal = t)
                ),
                a.AccountController.subscribeKey(
                  "balanceSymbol",
                  (t) => (this.balanceSymbol = t)
                ),
                a.AccountController.subscribeKey(
                  "profileName",
                  (t) => (this.profileName = t)
                ),
                a.AccountController.subscribeKey(
                  "profileImage",
                  (t) => (this.profileImage = t)
                ),
                u.ChainController.subscribeKey("activeCaipNetwork", (t) => {
                  (this.network = t),
                    (this.networkImage = c.AssetUtil.getNetworkImage(t)),
                    (this.isSupported =
                      null == t ||
                      !t.chainNamespace ||
                      u.ChainController.checkIfSupportedNetwork(
                        null == t ? void 0 : t.chainNamespace
                      )),
                    this.fetchNetworkImage(t);
                })
              );
        }
        updated() {
          this.fetchNetworkImage(this.network);
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          if (!u.ChainController.state.activeChain) return null;
          let t = "show" === this.balance,
            e = "string" != typeof this.balanceVal;
          return (0, i.html)(
            O(),
            !!this.disabled,
            !h.OptionsController.state.allowUnsupportedChain &&
              !this.isSupported,
            (0, l.ifDefined)(
              d.CoreHelperUtil.getPlainAddress(this.caipAddress)
            ),
            (0, l.ifDefined)(this.profileName),
            (0, l.ifDefined)(this.networkImage),
            (0, l.ifDefined)(this.profileImage),
            t
              ? d.CoreHelperUtil.formatBalance(
                  this.balanceVal,
                  this.balanceSymbol
                )
              : "",
            this.onClick.bind(this),
            "account-button".concat(
              this.namespace ? "-".concat(this.namespace) : ""
            ),
            this.charsStart,
            this.charsEnd,
            e
          );
        }
        onClick() {
          this.isSupported || h.OptionsController.state.allowUnsupportedChain
            ? p.ModalController.open({ namespace: this.namespace })
            : p.ModalController.open({ view: "UnsupportedChain" });
        }
        async fetchNetworkImage(t) {
          var e, n;
          (null == t || null == (e = t.assets) ? void 0 : e.imageId) &&
            (this.networkImage = await c.AssetUtil.fetchNetworkImage(
              null == t || null == (n = t.assets) ? void 0 : n.imageId
            ));
        }
        setAccountData(t) {
          t &&
            ((this.caipAddress = t.caipAddress),
            (this.balanceVal = t.balance),
            (this.balanceSymbol = t.balanceSymbol),
            (this.profileName = t.profileName),
            (this.profileImage = t.profileImage));
        }
        setNetworkData(t) {
          t &&
            ((this.network = t.caipNetwork),
            (this.networkImage = c.AssetUtil.getNetworkImage(t.caipNetwork)));
        }
        constructor() {
          super(...arguments),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.balance = "show"),
            (this.charsStart = 4),
            (this.charsEnd = 6),
            (this.namespace = void 0),
            (this.isSupported =
              !!h.OptionsController.state.allowUnsupportedChain ||
              !u.ChainController.state.activeChain ||
              u.ChainController.checkIfSupportedNetwork(
                u.ChainController.state.activeChain
              ));
        }
      }
      _([(0, o.property)({ type: Boolean })], N.prototype, "disabled", void 0),
        _([(0, o.property)()], N.prototype, "balance", void 0),
        _([(0, o.property)()], N.prototype, "charsStart", void 0),
        _([(0, o.property)()], N.prototype, "charsEnd", void 0),
        _([(0, o.property)()], N.prototype, "namespace", void 0),
        _([(0, r.state)()], N.prototype, "caipAddress", void 0),
        _([(0, r.state)()], N.prototype, "balanceVal", void 0),
        _([(0, r.state)()], N.prototype, "balanceSymbol", void 0),
        _([(0, r.state)()], N.prototype, "profileName", void 0),
        _([(0, r.state)()], N.prototype, "profileImage", void 0),
        _([(0, r.state)()], N.prototype, "network", void 0),
        _([(0, r.state)()], N.prototype, "networkImage", void 0),
        _([(0, r.state)()], N.prototype, "isSupported", void 0);
      let U = class extends N {};
      U = _([(0, w.customElement)("w3m-account-button")], U);
      let D = class extends N {};
      (D = _([(0, w.customElement)("appkit-account-button")], D)),
        t.s({ AppKitButton: () => M, W3mButton: () => F }, 201140);
      var W = n;
      function P() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    width: max-content;\n  }\n",
        ]);
        return (
          (P = function () {
            return t;
          }),
          t
        );
      }
      let L = (0, b.css)(P());
      function j() {
        let t = (0, e._)([
          "\n          <appkit-account-button\n            .disabled=",
          "\n            balance=",
          "\n            .charsStart=",
          "\n            .charsEnd=",
          "\n            namespace=",
          "\n          >\n          </appkit-account-button>\n        ",
        ]);
        return (
          (j = function () {
            return t;
          }),
          t
        );
      }
      function B() {
        let t = (0, e._)([
          "\n          <appkit-connect-button\n            size=",
          "\n            label=",
          "\n            loadingLabel=",
          "\n            namespace=",
          "\n          ></appkit-connect-button>\n        ",
        ]);
        return (
          (B = function () {
            return t;
          }),
          t
        );
      }
      var z = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      class H extends W.LitElement {
        connectedCallback() {
          var t, e;
          super.connectedCallback(),
            (this.caipAddress = this.namespace
              ? null ==
                  (e = u.ChainController.state.chains.get(this.namespace)) ||
                null == (t = e.accountState)
                ? void 0
                : t.caipAddress
              : u.ChainController.state.activeCaipAddress);
        }
        firstUpdated() {
          this.namespace
            ? this.unsubscribe.push(
                u.ChainController.subscribeChainProp(
                  "accountState",
                  (t) => {
                    this.caipAddress = null == t ? void 0 : t.caipAddress;
                  },
                  this.namespace
                )
              )
            : this.unsubscribe.push(
                u.ChainController.subscribeKey(
                  "activeCaipAddress",
                  (t) => (this.caipAddress = t)
                )
              );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return this.caipAddress
            ? (0, i.html)(
                j(),
                !!this.disabled,
                (0, l.ifDefined)(this.balance),
                (0, l.ifDefined)(this.charsStart),
                (0, l.ifDefined)(this.charsEnd),
                (0, l.ifDefined)(this.namespace)
              )
            : (0, i.html)(
                B(),
                (0, l.ifDefined)(this.size),
                (0, l.ifDefined)(this.label),
                (0, l.ifDefined)(this.loadingLabel),
                (0, l.ifDefined)(this.namespace)
              );
        }
        constructor() {
          super(...arguments),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.balance = void 0),
            (this.size = void 0),
            (this.label = void 0),
            (this.loadingLabel = void 0),
            (this.charsStart = 4),
            (this.charsEnd = 6),
            (this.namespace = void 0);
        }
      }
      (H.styles = L),
        z(
          [(0, o.property)({ type: Boolean })],
          H.prototype,
          "disabled",
          void 0
        ),
        z([(0, o.property)()], H.prototype, "balance", void 0),
        z([(0, o.property)()], H.prototype, "size", void 0),
        z([(0, o.property)()], H.prototype, "label", void 0),
        z([(0, o.property)()], H.prototype, "loadingLabel", void 0),
        z([(0, o.property)()], H.prototype, "charsStart", void 0),
        z([(0, o.property)()], H.prototype, "charsEnd", void 0),
        z([(0, o.property)()], H.prototype, "namespace", void 0),
        z([(0, r.state)()], H.prototype, "caipAddress", void 0);
      let F = class extends H {};
      F = z([(0, w.customElement)("w3m-button")], F);
      let M = class extends H {};
      (M = z([(0, w.customElement)("appkit-button")], M)),
        t.s(
          { AppKitConnectButton: () => tn, W3mConnectButton: () => te },
          538177
        );
      var V = n,
        K = n;
      function G() {
        let t = (0, e._)([
          "\n  :host {\n    position: relative;\n    display: block;\n  }\n\n  button {\n    background: var(--wui-color-accent-100);\n    border: 1px solid var(--wui-color-gray-glass-010);\n    border-radius: var(--wui-border-radius-m);\n    gap: var(--wui-spacing-xs);\n  }\n\n  button.loading {\n    background: var(--wui-color-gray-glass-010);\n    border: 1px solid var(--wui-color-gray-glass-010);\n    pointer-events: none;\n  }\n\n  button:disabled {\n    background-color: var(--wui-color-gray-glass-015);\n    border: 1px solid var(--wui-color-gray-glass-010);\n  }\n\n  button:disabled > wui-text {\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled {\n      background-color: var(--wui-color-accent-090);\n    }\n\n    button:active:enabled {\n      background-color: var(--wui-color-accent-080);\n    }\n  }\n\n  button:focus-visible {\n    border: 1px solid var(--wui-color-gray-glass-010);\n    background-color: var(--wui-color-accent-090);\n    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);\n    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);\n    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);\n  }\n\n  button[data-size='sm'] {\n    padding: 6.75px 10px 7.25px;\n  }\n\n  ::slotted(*) {\n    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: opacity;\n    opacity: var(--local-opacity-100);\n  }\n\n  button > wui-text {\n    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: opacity;\n    opacity: var(--local-opacity-100);\n    color: var(--wui-color-inverse-100);\n  }\n\n  button[data-size='md'] {\n    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);\n  }\n\n  button[data-size='md'] + wui-text {\n    padding-left: var(--wui-spacing-3xs);\n  }\n\n  @media (max-width: 500px) {\n    button[data-size='md'] {\n      height: 32px;\n      padding: 5px 12px;\n    }\n\n    button[data-size='md'] > wui-text > slot {\n      font-size: 14px !important;\n    }\n  }\n\n  wui-loading-spinner {\n    width: 14px;\n    height: 14px;\n  }\n\n  wui-loading-spinner::slotted(svg) {\n    width: 10px !important;\n    height: 10px !important;\n  }\n\n  button[data-size='sm'] > wui-loading-spinner {\n    width: 12px;\n    height: 12px;\n  }\n",
        ]);
        return (
          (G = function () {
            return t;
          }),
          t
        );
      }
      let q = (0, b.css)(G());
      function Y() {
        let t = (0, e._)([
          "\n      <button data-size=",
          " ?disabled=",
          ">\n        ",
          "\n        <wui-text variant=",
          " color=",
          ">\n          <slot></slot>\n        </wui-text>\n      </button>\n    ",
        ]);
        return (
          (Y = function () {
            return t;
          }),
          t
        );
      }
      function X() {
        let t = (0, e._)([
          "<wui-loading-spinner size=",
          ' color="accent-100"></wui-loading-spinner>',
        ]);
        return (
          (X = function () {
            return t;
          }),
          t
        );
      }
      var Q = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let Z = class extends K.LitElement {
        render() {
          let t = "md" === this.size ? "paragraph-600" : "small-600";
          return (0, i.html)(
            Y(),
            this.size,
            this.loading,
            this.loadingTemplate(),
            t,
            this.loading ? "accent-100" : "inherit"
          );
        }
        loadingTemplate() {
          return this.loading ? (0, i.html)(X(), this.size) : null;
        }
        constructor() {
          super(...arguments), (this.size = "md"), (this.loading = !1);
        }
      };
      function J() {
        let t = (0, e._)([
          "\n      <wui-connect-button\n        size=",
          "\n        .loading=",
          "\n        @click=",
          "\n        data-testid=",
          "\n      >\n        ",
          "\n      </wui-connect-button>\n    ",
        ]);
        return (
          (J = function () {
            return t;
          }),
          t
        );
      }
      (Z.styles = [m.resetStyles, m.elementStyles, q]),
        Q([(0, o.property)()], Z.prototype, "size", void 0),
        Q([(0, o.property)({ type: Boolean })], Z.prototype, "loading", void 0),
        (Z = Q([(0, w.customElement)("wui-connect-button")], Z));
      var $ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      class tt extends V.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(
            J(),
            (0, l.ifDefined)(this.size),
            this.loading,
            this.onClick.bind(this),
            "connect-button".concat(
              this.namespace ? "-".concat(this.namespace) : ""
            ),
            this.loading ? this.loadingLabel : this.label
          );
        }
        onClick() {
          this.open
            ? p.ModalController.close()
            : this.loading ||
              p.ModalController.open({
                view: "Connect",
                namespace: this.namespace,
              });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.size = "md"),
            (this.label = "Connect Wallet"),
            (this.loadingLabel = "Connecting..."),
            (this.open = p.ModalController.state.open),
            (this.loading = this.namespace
              ? p.ModalController.state.loadingNamespaceMap.get(this.namespace)
              : p.ModalController.state.loading),
            this.unsubscribe.push(
              p.ModalController.subscribe((t) => {
                (this.open = t.open),
                  (this.loading = this.namespace
                    ? t.loadingNamespaceMap.get(this.namespace)
                    : t.loading);
              })
            );
        }
      }
      $([(0, o.property)()], tt.prototype, "size", void 0),
        $([(0, o.property)()], tt.prototype, "label", void 0),
        $([(0, o.property)()], tt.prototype, "loadingLabel", void 0),
        $([(0, o.property)()], tt.prototype, "namespace", void 0),
        $([(0, r.state)()], tt.prototype, "open", void 0),
        $([(0, r.state)()], tt.prototype, "loading", void 0);
      let te = class extends tt {};
      te = $([(0, w.customElement)("w3m-connect-button")], te);
      let tn = class extends tt {};
      (tn = $([(0, w.customElement)("appkit-connect-button")], tn)),
        t.s(
          { AppKitNetworkButton: () => tC, W3mNetworkButton: () => tv },
          610939
        );
      var ti = n,
        to = t.i(755111),
        tr = n;
      function tl() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n  }\n\n  button {\n    border-radius: var(--wui-border-radius-3xl);\n    display: flex;\n    gap: var(--wui-spacing-xs);\n    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)\n      var(--wui-spacing-xs);\n    border: 1px solid var(--wui-color-gray-glass-010);\n    background-color: var(--wui-color-gray-glass-005);\n    color: var(--wui-color-fg-100);\n  }\n\n  button:disabled {\n    border: 1px solid var(--wui-color-gray-glass-005);\n    background-color: var(--wui-color-gray-glass-015);\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled {\n      background-color: var(--wui-color-gray-glass-010);\n    }\n\n    button:active:enabled {\n      background-color: var(--wui-color-gray-glass-015);\n    }\n  }\n\n  wui-image,\n  wui-icon-box {\n    border-radius: var(--wui-border-radius-3xl);\n    width: 24px;\n    height: 24px;\n    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);\n  }\n",
        ]);
        return (
          (tl = function () {
            return t;
          }),
          t
        );
      }
      let ta = (0, b.css)(tl());
      function ts() {
        let t = (0, e._)([
          '\n      <button data-testid="wui-network-button" ?disabled=',
          ">\n        ",
          '\n        <wui-text variant="paragraph-600" color="inherit">\n          <slot></slot>\n        </wui-text>\n      </button>\n    ',
        ]);
        return (
          (ts = function () {
            return t;
          }),
          t
        );
      }
      function tc() {
        let t = (0, e._)([
          '\n        <wui-icon-box\n          size="sm"\n          iconColor="error-100"\n          backgroundColor="error-100"\n          icon="warningCircle"\n        ></wui-icon-box>\n      ',
        ]);
        return (
          (tc = function () {
            return t;
          }),
          t
        );
      }
      function tu() {
        let t = (0, e._)(["<wui-image src=", "></wui-image>"]);
        return (
          (tu = function () {
            return t;
          }),
          t
        );
      }
      function td() {
        let t = (0, e._)([
          '\n      <wui-icon-box\n        size="sm"\n        iconColor="inverse-100"\n        backgroundColor="fg-100"\n        icon="networkPlaceholder"\n      ></wui-icon-box>\n    ',
        ]);
        return (
          (td = function () {
            return t;
          }),
          t
        );
      }
      var tp = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let th = class extends tr.LitElement {
        render() {
          return (0, i.html)(ts(), this.disabled, this.visualTemplate());
        }
        visualTemplate() {
          return this.isUnsupportedChain
            ? (0, i.html)(tc())
            : this.imageSrc
            ? (0, i.html)(tu(), this.imageSrc)
            : (0, i.html)(td());
        }
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.isUnsupportedChain = void 0),
            (this.disabled = !1);
        }
      };
      function tw() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    width: max-content;\n  }\n",
        ]);
        return (
          (tw = function () {
            return t;
          }),
          t
        );
      }
      (th.styles = [m.resetStyles, m.elementStyles, ta]),
        tp([(0, o.property)()], th.prototype, "imageSrc", void 0),
        tp(
          [(0, o.property)({ type: Boolean })],
          th.prototype,
          "isUnsupportedChain",
          void 0
        ),
        tp(
          [(0, o.property)({ type: Boolean })],
          th.prototype,
          "disabled",
          void 0
        ),
        (th = tp([(0, w.customElement)("wui-network-button")], th));
      let tf = (0, b.css)(tw());
      function tm() {
        let t = (0, e._)([
          "\n      <wui-network-button\n        .disabled=",
          "\n        .isUnsupportedChain=",
          "\n        imageSrc=",
          "\n        @click=",
          '\n        data-testid="w3m-network-button"\n      >\n        ',
          "\n        <slot></slot>\n      </wui-network-button>\n    ",
        ]);
        return (
          (tm = function () {
            return t;
          }),
          t
        );
      }
      var tg = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      class tb extends ti.LitElement {
        firstUpdated() {
          var t, e;
          c.AssetUtil.fetchNetworkImage(
            null == (e = this.network) || null == (t = e.assets)
              ? void 0
              : t.imageId
          );
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let t =
            !this.network ||
            u.ChainController.checkIfSupportedNetwork(
              this.network.chainNamespace
            );
          return (0, i.html)(
            tm(),
            !!(this.disabled || this.loading),
            !h.OptionsController.state.allowUnsupportedChain && !t,
            (0, l.ifDefined)(this.networkImage),
            this.onClick.bind(this),
            this.getLabel()
          );
        }
        getLabel() {
          return this.network
            ? this.isSupported ||
              h.OptionsController.state.allowUnsupportedChain
              ? this.network.name
              : "Switch Network"
            : this.label
            ? this.label
            : this.caipAddress
            ? "Unknown Network"
            : "Select Network";
        }
        onClick() {
          this.loading ||
            (to.EventsController.sendEvent({
              type: "track",
              event: "CLICK_NETWORKS",
            }),
            p.ModalController.open({ view: "Networks" }));
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.disabled = !1),
            (this.network = u.ChainController.state.activeCaipNetwork),
            (this.networkImage = c.AssetUtil.getNetworkImage(this.network)),
            (this.caipAddress = u.ChainController.state.activeCaipAddress),
            (this.loading = p.ModalController.state.loading),
            (this.isSupported =
              !!h.OptionsController.state.allowUnsupportedChain ||
              !u.ChainController.state.activeChain ||
              u.ChainController.checkIfSupportedNetwork(
                u.ChainController.state.activeChain
              )),
            this.unsubscribe.push(
              s.AssetController.subscribeNetworkImages(() => {
                this.networkImage = c.AssetUtil.getNetworkImage(this.network);
              }),
              u.ChainController.subscribeKey("activeCaipAddress", (t) => {
                this.caipAddress = t;
              }),
              u.ChainController.subscribeKey("activeCaipNetwork", (t) => {
                var e;
                (this.network = t),
                  (this.networkImage = c.AssetUtil.getNetworkImage(t)),
                  (this.isSupported =
                    null == t ||
                    !t.chainNamespace ||
                    u.ChainController.checkIfSupportedNetwork(
                      t.chainNamespace
                    )),
                  c.AssetUtil.fetchNetworkImage(
                    null == t || null == (e = t.assets) ? void 0 : e.imageId
                  );
              }),
              p.ModalController.subscribeKey(
                "loading",
                (t) => (this.loading = t)
              )
            );
        }
      }
      (tb.styles = tf),
        tg(
          [(0, o.property)({ type: Boolean })],
          tb.prototype,
          "disabled",
          void 0
        ),
        tg([(0, o.property)({ type: String })], tb.prototype, "label", void 0),
        tg([(0, r.state)()], tb.prototype, "network", void 0),
        tg([(0, r.state)()], tb.prototype, "networkImage", void 0),
        tg([(0, r.state)()], tb.prototype, "caipAddress", void 0),
        tg([(0, r.state)()], tb.prototype, "loading", void 0),
        tg([(0, r.state)()], tb.prototype, "isSupported", void 0);
      let tv = class extends tb {};
      tv = tg([(0, w.customElement)("w3m-network-button")], tv);
      let tC = class extends tb {};
      tC = tg([(0, w.customElement)("appkit-network-button")], tC);
      var ty = t.i(742227);
      t.s({ W3mAccountSettingsView: () => tY }, 115505);
      var tx = n,
        tk = t.i(605726),
        tE = t.i(875073),
        tS = t.i(225335),
        tA = t.i(76107),
        tR = t.i(157653),
        tI = t.i(663563),
        tT = t.i(174797),
        tO = t.i(77217);
      t.i(972942), t.i(327531), t.i(81654);
      var t_ = n;
      function tN() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n  }\n\n  button {\n    width: 100%;\n    display: block;\n    padding-top: var(--wui-spacing-l);\n    padding-bottom: var(--wui-spacing-l);\n    padding-left: var(--wui-spacing-s);\n    padding-right: var(--wui-spacing-2l);\n    border-radius: var(--wui-border-radius-s);\n    background-color: var(--wui-color-accent-glass-010);\n  }\n\n  button:hover {\n    background-color: var(--wui-color-accent-glass-015) !important;\n  }\n\n  button:active {\n    background-color: var(--wui-color-accent-glass-020) !important;\n  }\n",
        ]);
        return (
          (tN = function () {
            return t;
          }),
          t
        );
      }
      t.i(227626), t.i(983999);
      let tU = (0, b.css)(tN());
      function tD() {
        let t = (0, e._)([
          '\n      <button>\n        <wui-flex gap="m" alignItems="center" justifyContent="space-between">\n          <wui-icon-box\n            size="lg"\n            iconcolor="accent-100"\n            backgroundcolor="accent-100"\n            icon=',
          '\n            background="transparent"\n          ></wui-icon-box>\n\n          <wui-flex flexDirection="column" gap="3xs">\n            <wui-text variant="paragraph-500" color="fg-100">',
          '</wui-text>\n            <wui-text variant="small-400" color="fg-200">',
          '</wui-text>\n          </wui-flex>\n\n          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>\n        </wui-flex>\n      </button>\n    ',
        ]);
        return (
          (tD = function () {
            return t;
          }),
          t
        );
      }
      var tW = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let tP = class extends t_.LitElement {
        render() {
          return (0, i.html)(tD(), this.icon, this.label, this.description);
        }
        constructor() {
          super(...arguments),
            (this.label = ""),
            (this.description = ""),
            (this.icon = "wallet");
        }
      };
      (tP.styles = [m.resetStyles, m.elementStyles, tU]),
        tW([(0, o.property)()], tP.prototype, "label", void 0),
        tW([(0, o.property)()], tP.prototype, "description", void 0),
        tW([(0, o.property)()], tP.prototype, "icon", void 0),
        (tP = tW([(0, w.customElement)("wui-notice-card")], tP)),
        t.i(156411);
      var tL = t.i(351667),
        tj = n,
        tB = t.i(527410);
      function tz() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        variant="icon"\n        iconVariant="overlay"\n        icon=',
          "\n        iconSize=",
          '\n        data-testid="w3m-account-email-update"\n        ?chevron=',
          "\n        @click=",
          '\n      >\n        <wui-text variant="paragraph-500" color="fg-100">',
          "</wui-text>\n      </wui-list-item>\n    ",
        ]);
        return (
          (tz = function () {
            return t;
          }),
          t
        );
      }
      var tH = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let tF = class extends tj.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          var t, e;
          let n = tS.ConnectorController.getConnectorId(this.namespace),
            o = tS.ConnectorController.getAuthConnector();
          if (!o || n !== tk.ConstantsUtil.CONNECTOR_ID.AUTH)
            return (this.style.cssText = "display: none"), null;
          let r = null != (t = o.provider.getEmail()) ? t : "";
          return r || this.socialUsername
            ? (0, i.html)(
                tz(),
                null != (e = this.socialProvider) ? e : "mail",
                this.socialProvider ? "xxl" : "sm",
                !this.socialProvider,
                () => {
                  this.onGoToUpdateEmail(r, this.socialProvider);
                },
                this.getAuthName(r)
              )
            : ((this.style.cssText = "display: none"), null);
        }
        onGoToUpdateEmail(t, e) {
          e ||
            tR.RouterController.push("UpdateEmailWallet", {
              email: t,
              redirectView: "Account",
            });
        }
        getAuthName(t) {
          return this.socialUsername
            ? "discord" === this.socialProvider &&
              this.socialUsername.endsWith("0")
              ? this.socialUsername.slice(0, -1)
              : this.socialUsername
            : t.length > 30
            ? "".concat(t.slice(0, -3), "...")
            : t;
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.socialProvider = tB.StorageUtil.getConnectedSocialProvider()),
            (this.socialUsername = tB.StorageUtil.getConnectedSocialUsername()),
            (this.namespace = u.ChainController.state.activeChain),
            this.unsubscribe.push(
              u.ChainController.subscribeKey("activeChain", (t) => {
                this.namespace = t;
              })
            );
        }
      };
      function tM() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        gap="l"\n        .padding=',
          "\n      >\n        <wui-avatar\n          alt=",
          "\n          address=",
          "\n          imageSrc=",
          '\n          size="2lg"\n        ></wui-avatar>\n        <wui-flex flexDirection="column" alignItems="center">\n          <wui-flex gap="3xs" alignItems="center" justifyContent="center">\n            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">\n              ',
          '\n            </wui-text>\n            <wui-icon-link\n              size="md"\n              icon="copy"\n              iconColor="fg-200"\n              @click=',
          '\n            ></wui-icon-link>\n          </wui-flex>\n        </wui-flex>\n      </wui-flex>\n      <wui-flex flexDirection="column" gap="m">\n        <wui-flex flexDirection="column" gap="xs" .padding=',
          ">\n          ",
          "\n          <w3m-account-auth-button></w3m-account-auth-button>\n          <wui-list-item\n            .variant=",
          '\n            iconVariant="overlay"\n            icon="networkPlaceholder"\n            imageSrc=',
          "\n            ?chevron=",
          "\n            @click=",
          '\n            data-testid="account-switch-network-button"\n          >\n            <wui-text variant="paragraph-500" color="fg-100">\n              ',
          "\n            </wui-text>\n          </wui-list-item>\n          ",
          " ",
          '\n          <wui-list-item\n            variant="icon"\n            iconVariant="overlay"\n            icon="disconnect"\n            ?chevron=',
          "\n            .loading=",
          "\n            @click=",
          '\n            data-testid="disconnect-button"\n          >\n            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>\n          </wui-list-item>\n        </wui-flex>\n      </wui-flex>\n    ',
        ]);
        return (
          (tM = function () {
            return t;
          }),
          t
        );
      }
      function tV() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        variant="icon"\n        iconVariant="overlay"\n        icon="id"\n        iconSize="sm"\n        ?chevron=',
          "\n        @click=",
          '\n        data-testid="account-choose-name-button"\n      >\n        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>\n      </wui-list-item>\n    ',
        ]);
        return (
          (tV = function () {
            return t;
          }),
          t
        );
      }
      function tK() {
        let t = (0, e._)([
          "\n      <wui-notice-card\n        @click=",
          '\n        label="Upgrade your wallet"\n        description="Transition to a self-custodial wallet"\n        icon="wallet"\n        data-testid="w3m-wallet-upgrade-card"\n      ></wui-notice-card>\n    ',
        ]);
        return (
          (tK = function () {
            return t;
          }),
          t
        );
      }
      function tG() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        variant="icon"\n        iconVariant="overlay"\n        icon="swapHorizontalBold"\n        iconSize="sm"\n        ?chevron=',
          "\n        ?loading=",
          "\n        @click=",
          '\n        data-testid="account-toggle-preferred-account-type"\n      >\n        <wui-text variant="paragraph-500" color="fg-100">',
          "</wui-text>\n      </wui-list-item>\n    ",
        ]);
        return (
          (tG = function () {
            return t;
          }),
          t
        );
      }
      tH([(0, r.state)()], tF.prototype, "namespace", void 0),
        (tF = tH([(0, w.customElement)("w3m-account-auth-button")], tF));
      var tq = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let tY = class extends tx.LitElement {
        disconnectedCallback() {
          this.usubscribe.forEach((t) => t());
        }
        render() {
          var t, e, n, o, r;
          if (!this.address)
            throw Error("w3m-account-settings-view: No account provided");
          let a =
            this.networkImages[
              null !=
              (o =
                null == (e = this.network) || null == (t = e.assets)
                  ? void 0
                  : t.imageId)
                ? o
                : ""
            ];
          return (0, i.html)(
            tM(),
            ["0", "xl", "m", "xl"],
            this.address,
            this.address,
            (0, l.ifDefined)(this.profileImage),
            g.UiHelperUtil.getTruncateString({
              string: this.address,
              charsStart: 4,
              charsEnd: 6,
              truncate: "middle",
            }),
            this.onCopyAddress,
            ["0", "l", "m", "l"],
            this.authCardTemplate(),
            a ? "image" : "icon",
            (0, l.ifDefined)(a),
            this.isAllowedNetworkSwitch(),
            this.onNetworks.bind(this),
            null != (r = null == (n = this.network) ? void 0 : n.name)
              ? r
              : "Unknown",
            this.togglePreferredAccountBtnTemplate(),
            this.chooseNameButtonTemplate(),
            !1,
            this.disconnecting,
            this.onDisconnect.bind(this)
          );
        }
        chooseNameButtonTemplate() {
          var t;
          let e = null == (t = this.network) ? void 0 : t.chainNamespace,
            n = tS.ConnectorController.getConnectorId(e),
            o = tS.ConnectorController.getAuthConnector();
          return u.ChainController.checkIfNamesSupported() &&
            o &&
            n === tk.ConstantsUtil.CONNECTOR_ID.AUTH &&
            !this.profileName
            ? (0, i.html)(tV(), !0, this.onChooseName.bind(this))
            : null;
        }
        authCardTemplate() {
          var t;
          let e = tS.ConnectorController.getConnectorId(
              null == (t = this.network) ? void 0 : t.chainNamespace
            ),
            n = tS.ConnectorController.getAuthConnector(),
            { origin: o } = location;
          return !n ||
            e !== tk.ConstantsUtil.CONNECTOR_ID.AUTH ||
            o.includes(tA.ConstantsUtil.SECURE_SITE)
            ? null
            : (0, i.html)(tK(), this.onGoToUpgradeView.bind(this));
        }
        isAllowedNetworkSwitch() {
          let t = u.ChainController.getAllRequestedCaipNetworks(),
            e = !!t && t.length > 1,
            n =
              null == t
                ? void 0
                : t.find((t) => {
                    var e;
                    let { id: n } = t;
                    return n === (null == (e = this.network) ? void 0 : e.id);
                  });
          return e || !n;
        }
        onCopyAddress() {
          try {
            this.address &&
              (d.CoreHelperUtil.copyToClopboard(this.address),
              tT.SnackController.showSuccess("Address copied"));
          } catch (t) {
            tT.SnackController.showError("Failed to copy");
          }
        }
        togglePreferredAccountBtnTemplate() {
          var t;
          let e = null == (t = this.network) ? void 0 : t.chainNamespace,
            n = u.ChainController.checkIfSmartAccountEnabled(),
            o = tS.ConnectorController.getConnectorId(e);
          return tS.ConnectorController.getAuthConnector() &&
            o === tk.ConstantsUtil.CONNECTOR_ID.AUTH &&
            n
            ? (this.switched ||
                (this.text =
                  (0, tO.getPreferredAccountType)(e) ===
                  tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
                    ? "Switch to your EOA"
                    : "Switch to your Smart Account"),
              (0, i.html)(
                tG(),
                !0,
                this.loading,
                this.changePreferredAccountType.bind(this),
                this.text
              ))
            : null;
        }
        onChooseName() {
          tR.RouterController.push("ChooseAccountName");
        }
        async changePreferredAccountType() {
          var t;
          let e = null == (t = this.network) ? void 0 : t.chainNamespace,
            n = u.ChainController.checkIfSmartAccountEnabled(),
            i =
              (0, tO.getPreferredAccountType)(e) !==
                tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT && n
                ? tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
                : tL.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;
          tS.ConnectorController.getAuthConnector() &&
            ((this.loading = !0),
            await tE.ConnectionController.setPreferredAccountType(i, e),
            (this.text =
              i === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
                ? "Switch to your EOA"
                : "Switch to your Smart Account"),
            (this.switched = !0),
            tI.SendController.resetSend(),
            (this.loading = !1),
            this.requestUpdate());
        }
        onNetworks() {
          this.isAllowedNetworkSwitch() && tR.RouterController.push("Networks");
        }
        async onDisconnect() {
          try {
            var t, e;
            this.disconnecting = !0;
            let n = null == (t = this.network) ? void 0 : t.chainNamespace,
              i = tE.ConnectionController.getConnections(n).length > 0,
              o = n && tS.ConnectorController.state.activeConnectorIds[n],
              r = null == (e = this.remoteFeatures) ? void 0 : e.multiWallet;
            await tE.ConnectionController.disconnect(
              r ? { id: o, namespace: n } : {}
            ),
              i &&
                r &&
                (tR.RouterController.push("ProfileWallets"),
                tT.SnackController.showSuccess("Wallet deleted"));
          } catch (t) {
            to.EventsController.sendEvent({
              type: "track",
              event: "DISCONNECT_ERROR",
            }),
              tT.SnackController.showError("Failed to disconnect");
          } finally {
            this.disconnecting = !1;
          }
        }
        onGoToUpgradeView() {
          to.EventsController.sendEvent({
            type: "track",
            event: "EMAIL_UPGRADE_FROM_MODAL",
          }),
            tR.RouterController.push("UpgradeEmailWallet");
        }
        constructor() {
          super(),
            (this.usubscribe = []),
            (this.networkImages = s.AssetController.state.networkImages),
            (this.address = a.AccountController.state.address),
            (this.profileImage = a.AccountController.state.profileImage),
            (this.profileName = a.AccountController.state.profileName),
            (this.network = u.ChainController.state.activeCaipNetwork),
            (this.disconnecting = !1),
            (this.loading = !1),
            (this.switched = !1),
            (this.text = ""),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            this.usubscribe.push(
              a.AccountController.subscribe((t) => {
                t.address &&
                  ((this.address = t.address),
                  (this.profileImage = t.profileImage),
                  (this.profileName = t.profileName));
              }),
              u.ChainController.subscribeKey("activeCaipNetwork", (t) => {
                (null == t ? void 0 : t.id) && (this.network = t);
              }),
              h.OptionsController.subscribeKey("remoteFeatures", (t) => {
                this.remoteFeatures = t;
              })
            );
        }
      };
      tq([(0, r.state)()], tY.prototype, "address", void 0),
        tq([(0, r.state)()], tY.prototype, "profileImage", void 0),
        tq([(0, r.state)()], tY.prototype, "profileName", void 0),
        tq([(0, r.state)()], tY.prototype, "network", void 0),
        tq([(0, r.state)()], tY.prototype, "disconnecting", void 0),
        tq([(0, r.state)()], tY.prototype, "loading", void 0),
        tq([(0, r.state)()], tY.prototype, "switched", void 0),
        tq([(0, r.state)()], tY.prototype, "text", void 0),
        tq([(0, r.state)()], tY.prototype, "remoteFeatures", void 0),
        (tY = tq([(0, w.customElement)("w3m-account-settings-view")], tY)),
        t.s({ W3mAccountView: () => nv }, 829177);
      var tX = n,
        tQ = n;
      t.i(679175), t.i(916906);
      var tZ = n;
      function tJ() {
        let t = (0, e._)([
          "\n  :host {\n    display: inline-flex;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-3xl);\n    padding: var(--wui-spacing-3xs);\n    position: relative;\n    height: 36px;\n    min-height: 36px;\n    overflow: hidden;\n  }\n\n  :host::before {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    top: 4px;\n    left: 4px;\n    display: block;\n    width: var(--local-tab-width);\n    height: 28px;\n    border-radius: var(--wui-border-radius-3xl);\n    background-color: var(--wui-color-gray-glass-002);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);\n    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));\n    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: background-color, opacity;\n  }\n\n  :host([data-type='flex'])::before {\n    left: 3px;\n    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));\n  }\n\n  :host([data-type='flex']) {\n    display: flex;\n    padding: 0px 0px 0px 12px;\n    gap: 4px;\n  }\n\n  :host([data-type='flex']) > button > wui-text {\n    position: absolute;\n    left: 18px;\n    opacity: 0;\n  }\n\n  button[data-active='true'] > wui-icon,\n  button[data-active='true'] > wui-text {\n    color: var(--wui-color-fg-100);\n  }\n\n  button[data-active='false'] > wui-icon,\n  button[data-active='false'] > wui-text {\n    color: var(--wui-color-fg-200);\n  }\n\n  button[data-active='true']:disabled,\n  button[data-active='false']:disabled {\n    background-color: transparent;\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  button[data-active='true']:disabled > wui-text {\n    color: var(--wui-color-fg-200);\n  }\n\n  button[data-active='false']:disabled > wui-text {\n    color: var(--wui-color-fg-300);\n  }\n\n  button > wui-icon,\n  button > wui-text {\n    pointer-events: none;\n    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);\n    will-change: color;\n  }\n\n  button {\n    width: var(--local-tab-width);\n    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: background-color;\n  }\n\n  :host([data-type='flex']) > button {\n    width: 34px;\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  button:hover:enabled,\n  button:active:enabled {\n    background-color: transparent !important;\n  }\n\n  button:hover:enabled > wui-icon,\n  button:active:enabled > wui-icon {\n    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);\n    color: var(--wui-color-fg-125);\n  }\n\n  button:hover:enabled > wui-text,\n  button:active:enabled > wui-text {\n    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);\n    color: var(--wui-color-fg-125);\n  }\n\n  button {\n    border-radius: var(--wui-border-radius-3xl);\n  }\n",
        ]);
        return (
          (tJ = function () {
            return t;
          }),
          t
        );
      }
      let t$ = (0, b.css)(tJ());
      function t0() {
        let t = (0, e._)([
          "\n        <button\n          ?disabled=",
          "\n          @click=",
          "\n          data-active=",
          '\n          data-testid="tab-',
          '"\n        >\n          ',
          '\n          <wui-text variant="small-600" color="inherit"> ',
          " </wui-text>\n        </button>\n      ",
        ]);
        return (
          (t0 = function () {
            return t;
          }),
          t
        );
      }
      function t3() {
        let t = (0, e._)([
          '<wui-icon size="xs" color="inherit" name=',
          "></wui-icon>",
        ]);
        return (
          (t3 = function () {
            return t;
          }),
          t
        );
      }
      var t1 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let t5 = class extends tZ.LitElement {
        render() {
          return (
            (this.isDense = this.tabs.length > 3),
            (this.style.cssText = "\n      --local-tab: "
              .concat(this.activeTab, ";\n      --local-tab-width: ")
              .concat(this.localTabWidth, ";\n    ")),
            (this.dataset.type = this.isDense ? "flex" : "block"),
            this.tabs.map((t, e) => {
              var n;
              let o = e === this.activeTab;
              return (0, i.html)(
                t0(),
                this.disabled,
                () => this.onTabClick(e),
                o,
                null == (n = t.label) ? void 0 : n.toLowerCase(),
                this.iconTemplate(t),
                t.label
              );
            })
          );
        }
        firstUpdated() {
          this.shadowRoot &&
            this.isDense &&
            ((this.buttons = [...this.shadowRoot.querySelectorAll("button")]),
            setTimeout(() => {
              this.animateTabs(0, !0);
            }, 0));
        }
        iconTemplate(t) {
          return t.icon ? (0, i.html)(t3(), t.icon) : null;
        }
        onTabClick(t) {
          this.buttons && this.animateTabs(t, !1),
            (this.activeTab = t),
            this.onTabChange(t);
        }
        animateTabs(t, e) {
          let n = this.buttons[this.activeTab],
            i = this.buttons[t],
            o = null == n ? void 0 : n.querySelector("wui-text"),
            r = null == i ? void 0 : i.querySelector("wui-text"),
            l = null == i ? void 0 : i.getBoundingClientRect(),
            a = null == r ? void 0 : r.getBoundingClientRect();
          n &&
            o &&
            !e &&
            t !== this.activeTab &&
            (o.animate([{ opacity: 0 }], {
              duration: 50,
              easing: "ease",
              fill: "forwards",
            }),
            n.animate([{ width: "34px" }], {
              duration: 500,
              easing: "ease",
              fill: "forwards",
            })),
            i &&
              l &&
              a &&
              r &&
              (t !== this.activeTab || e) &&
              ((this.localTabWidth = "".concat(
                Math.round(l.width + a.width) + 6,
                "px"
              )),
              i.animate([{ width: "".concat(l.width + a.width, "px") }], {
                duration: 500 * !e,
                fill: "forwards",
                easing: "ease",
              }),
              r.animate([{ opacity: 1 }], {
                duration: 125 * !e,
                delay: 200 * !e,
                fill: "forwards",
                easing: "ease",
              }));
        }
        constructor() {
          super(...arguments),
            (this.tabs = []),
            (this.onTabChange = () => null),
            (this.buttons = []),
            (this.disabled = !1),
            (this.localTabWidth = "100px"),
            (this.activeTab = 0),
            (this.isDense = !1);
        }
      };
      (t5.styles = [m.resetStyles, m.elementStyles, t$]),
        t1([(0, o.property)({ type: Array })], t5.prototype, "tabs", void 0),
        t1([(0, o.property)()], t5.prototype, "onTabChange", void 0),
        t1([(0, o.property)({ type: Array })], t5.prototype, "buttons", void 0),
        t1(
          [(0, o.property)({ type: Boolean })],
          t5.prototype,
          "disabled",
          void 0
        ),
        t1([(0, o.property)()], t5.prototype, "localTabWidth", void 0),
        t1([(0, r.state)()], t5.prototype, "activeTab", void 0),
        t1([(0, r.state)()], t5.prototype, "isDense", void 0),
        (t5 = t1([(0, w.customElement)("wui-tabs")], t5)),
        t.i(335835);
      var t2 = n;
      function t6() {
        let t = (0, e._)([
          "\n  button {\n    display: flex;\n    align-items: center;\n    padding: var(--wui-spacing-xxs);\n    border-radius: var(--wui-border-radius-xxs);\n    column-gap: var(--wui-spacing-xs);\n  }\n\n  wui-image,\n  .icon-box {\n    width: var(--wui-spacing-xxl);\n    height: var(--wui-spacing-xxl);\n    border-radius: var(--wui-border-radius-3xs);\n  }\n\n  wui-text {\n    flex: 1;\n  }\n\n  .icon-box {\n    position: relative;\n  }\n\n  .icon-box[data-active='true'] {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  .circle {\n    position: absolute;\n    left: 16px;\n    top: 15px;\n    width: var(--wui-spacing-1xs);\n    height: var(--wui-spacing-1xs);\n    background-color: var(--wui-color-success-100);\n    border: 2px solid var(--wui-color-modal-bg);\n    border-radius: 50%;\n  }\n",
        ]);
        return (
          (t6 = function () {
            return t;
          }),
          t
        );
      }
      let t4 = (0, b.css)(t6());
      function t7() {
        let t = (0, e._)([
          "\n      <button>\n        ",
          " ",
          " ",
          "\n      </button>\n    ",
        ]);
        return (
          (t7 = function () {
            return t;
          }),
          t
        );
      }
      function t8() {
        let t = (0, e._)([
          "<wui-icon\n          size=",
          '\n          color="fg-200"\n          name=',
          '\n          class="icon"\n        ></wui-icon>',
        ]);
        return (
          (t8 = function () {
            return t;
          }),
          t
        );
      }
      function t9() {
        let t = (0, e._)(["<wui-image src=", " alt=", "></wui-image>"]);
        return (
          (t9 = function () {
            return t;
          }),
          t
        );
      }
      function et() {
        let t = (0, e._)([
          '\n      <wui-flex\n        alignItems="center"\n        justifyContent="center"\n        class="icon-box"\n        data-active=',
          "\n      >\n        ",
          '\n        <wui-flex class="circle"></wui-flex>\n      </wui-flex>\n    ',
        ]);
        return (
          (et = function () {
            return t;
          }),
          t
        );
      }
      function ee() {
        let t = (0, e._)([
          '\n      <wui-text variant="paragraph-500" color="fg-100">\n        ',
          "\n      </wui-text>\n    ",
        ]);
        return (
          (ee = function () {
            return t;
          }),
          t
        );
      }
      function en() {
        let t = (0, e._)([
          '<wui-icon name="chevronBottom" size="xs" color="fg-200"></wui-icon>',
        ]);
        return (
          (en = function () {
            return t;
          }),
          t
        );
      }
      var ei = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let eo = class extends t2.LitElement {
        render() {
          return (0, i.html)(
            t7(),
            this.leftImageTemplate(),
            this.textTemplate(),
            this.rightImageTemplate()
          );
        }
        leftImageTemplate() {
          let t = this.icon
            ? (0, i.html)(t8(), this.iconSize, this.icon)
            : (0, i.html)(t9(), this.imageSrc, this.alt);
          return (0, i.html)(et(), !!this.icon, t);
        }
        textTemplate() {
          return (0, i.html)(
            ee(),
            g.UiHelperUtil.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 16 : this.charsStart,
              charsEnd: this.profileName ? 0 : this.charsEnd,
              truncate: this.profileName ? "end" : "middle",
            })
          );
        }
        rightImageTemplate() {
          return (0, i.html)(en());
        }
        constructor() {
          super(...arguments),
            (this.address = ""),
            (this.profileName = ""),
            (this.alt = ""),
            (this.imageSrc = ""),
            (this.icon = void 0),
            (this.iconSize = "md"),
            (this.loading = !1),
            (this.charsStart = 4),
            (this.charsEnd = 6);
        }
      };
      function er() {
        let t = (0, e._)([
          "\n  wui-flex {\n    width: 100%;\n  }\n\n  :host > wui-flex:first-child {\n    transform: translateY(calc(var(--wui-spacing-xxs) * -1));\n  }\n\n  wui-icon-link {\n    margin-right: calc(var(--wui-icon-box-size-md) * -1);\n  }\n\n  wui-notice-card {\n    margin-bottom: var(--wui-spacing-3xs);\n  }\n\n  wui-list-item > wui-text {\n    flex: 1;\n  }\n\n  w3m-transactions-view {\n    max-height: 200px;\n  }\n\n  .tab-content-container {\n    height: 300px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    scrollbar-width: none;\n  }\n\n  .tab-content-container::-webkit-scrollbar {\n    display: none;\n  }\n\n  .account-button {\n    width: auto;\n    border: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--wui-spacing-s);\n    height: 48px;\n    padding: var(--wui-spacing-xs);\n    padding-right: var(--wui-spacing-s);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: 24px;\n    transition: background-color 0.2s linear;\n  }\n\n  .account-button:hover {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  .avatar-container {\n    position: relative;\n  }\n\n  wui-avatar.avatar {\n    width: 32px;\n    height: 32px;\n    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);\n  }\n\n  wui-wallet-switch {\n    margin-top: var(--wui-spacing-xs);\n  }\n\n  wui-avatar.network-avatar {\n    width: 16px;\n    height: 16px;\n    position: absolute;\n    left: 100%;\n    top: 100%;\n    transform: translate(-75%, -75%);\n    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);\n  }\n\n  .account-links {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .account-links wui-flex {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    background: red;\n    align-items: center;\n    justify-content: center;\n    height: 48px;\n    padding: 10px;\n    flex: 1 0 0;\n    border-radius: var(--XS, 16px);\n    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));\n    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));\n    transition:\n      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),\n      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: background-color, opacity;\n  }\n\n  .account-links wui-flex:hover {\n    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));\n  }\n\n  .account-links wui-flex wui-icon {\n    width: var(--S, 20px);\n    height: var(--S, 20px);\n  }\n\n  .account-links wui-flex wui-icon svg path {\n    stroke: #667dff;\n  }\n",
        ]);
        return (
          (er = function () {
            return t;
          }),
          t
        );
      }
      (eo.styles = [m.resetStyles, m.elementStyles, t4]),
        ei([(0, o.property)()], eo.prototype, "address", void 0),
        ei([(0, o.property)()], eo.prototype, "profileName", void 0),
        ei([(0, o.property)()], eo.prototype, "alt", void 0),
        ei([(0, o.property)()], eo.prototype, "imageSrc", void 0),
        ei([(0, o.property)()], eo.prototype, "icon", void 0),
        ei([(0, o.property)()], eo.prototype, "iconSize", void 0),
        ei(
          [(0, o.property)({ type: Boolean })],
          eo.prototype,
          "loading",
          void 0
        ),
        ei(
          [(0, o.property)({ type: Number })],
          eo.prototype,
          "charsStart",
          void 0
        ),
        ei(
          [(0, o.property)({ type: Number })],
          eo.prototype,
          "charsEnd",
          void 0
        ),
        (eo = ei([(0, w.customElement)("wui-wallet-switch")], eo));
      let el = (0, b.css)(er());
      function ea() {
        let t = (0, e._)([
          '<wui-flex\n        flexDirection="column"\n        .padding=',
          '\n        alignItems="center"\n        gap="s"\n      >\n        <wui-avatar\n          alt=',
          "\n          address=",
          "\n          imageSrc=",
          '\n          data-testid="single-account-avatar"\n        ></wui-avatar>\n        <wui-wallet-switch\n          profileName=',
          "\n          address=",
          "\n          imageSrc=",
          "\n          alt=",
          "\n          @click=",
          '\n          data-testid="wui-wallet-switch"\n        ></wui-wallet-switch>\n        <wui-flex flexDirection="column" alignItems="center">\n          <wui-text variant="paragraph-500" color="fg-200">\n            ',
          "\n          </wui-text>\n        </wui-flex>\n        ",
          '\n      </wui-flex>\n\n      <wui-flex flexDirection="column" gap="xs" .padding=',
          ">\n        ",
          " <w3m-account-auth-button></w3m-account-auth-button>\n        ",
          " ",
          '\n        <wui-list-item\n          variant="icon"\n          iconVariant="overlay"\n          icon="disconnect"\n          ?chevron=',
          "\n          .loading=",
          "\n          @click=",
          '\n          data-testid="disconnect-button"\n        >\n          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>\n        </wui-list-item>\n      </wui-flex>',
        ]);
        return (
          (ea = function () {
            return t;
          }),
          t
        );
      }
      function es() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        data-testid="w3m-account-default-onramp-button"\n        iconVariant="blue"\n        icon="card"\n        ?chevron=',
          "\n        @click=",
          '\n      >\n        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>\n      </wui-list-item>\n    ',
        ]);
        return (
          (es = function () {
            return t;
          }),
          t
        );
      }
      function ec() {
        let t = (0, e._)([
          ' <wui-list-item\n          iconVariant="blue"\n          icon="clock"\n          iconSize="sm"\n          ?chevron=',
          "\n          @click=",
          '\n          data-testid="w3m-account-default-activity-button"\n        >\n          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>\n        </wui-list-item>',
        ]);
        return (
          (ec = function () {
            return t;
          }),
          t
        );
      }
      function eu() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        iconVariant="blue"\n        icon="recycleHorizontal"\n        ?chevron=',
          "\n        @click=",
          '\n        data-testid="w3m-account-default-swaps-button"\n      >\n        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>\n      </wui-list-item>\n    ',
        ]);
        return (
          (eu = function () {
            return t;
          }),
          t
        );
      }
      function ed() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        iconVariant="blue"\n        icon="send"\n        ?chevron=',
          "\n        @click=",
          '\n        data-testid="w3m-account-default-send-button"\n      >\n        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>\n      </wui-list-item>\n    ',
        ]);
        return (
          (ed = function () {
            return t;
          }),
          t
        );
      }
      function ep() {
        let t = (0, e._)([
          "\n      <wui-notice-card\n        @click=",
          '\n        label="Upgrade your wallet"\n        description="Transition to a self-custodial wallet"\n        icon="wallet"\n        data-testid="w3m-wallet-upgrade-card"\n      ></wui-notice-card>\n    ',
        ]);
        return (
          (ep = function () {
            return t;
          }),
          t
        );
      }
      function eh() {
        let t = (0, e._)([
          '\n      <wui-button size="md" variant="neutral" @click=',
          '>\n        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>\n        Block Explorer\n        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>\n      </wui-button>\n    ',
        ]);
        return (
          (eh = function () {
            return t;
          }),
          t
        );
      }
      var ew = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let ef = class extends tQ.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          if (!this.caipAddress || !this.namespace) return null;
          let t = this.activeConnectorIds[this.namespace],
            e = t ? tS.ConnectorController.getConnectorById(t) : void 0,
            n = c.AssetUtil.getConnectorImage(e);
          return (0, i.html)(
            ea(),
            ["0", "xl", "m", "xl"],
            (0, l.ifDefined)(this.caipAddress),
            (0, l.ifDefined)(
              d.CoreHelperUtil.getPlainAddress(this.caipAddress)
            ),
            (0, l.ifDefined)(
              null === this.profileImage ? void 0 : this.profileImage
            ),
            this.profileName,
            this.address,
            n,
            null == e ? void 0 : e.name,
            this.onGoToProfileWalletsView.bind(this),
            d.CoreHelperUtil.formatBalance(this.balance, this.balanceSymbol),
            this.explorerBtnTemplate(),
            ["0", "s", "s", "s"],
            this.authCardTemplate(),
            this.orderedFeaturesTemplate(),
            this.activityTemplate(),
            !1,
            this.disconnecting,
            this.onDisconnect.bind(this)
          );
        }
        onrampTemplate() {
          var t;
          if (!this.namespace) return null;
          let e = null == (t = this.remoteFeatures) ? void 0 : t.onramp,
            n = tA.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(
              this.namespace
            );
          return e && n
            ? (0, i.html)(es(), !0, this.handleClickPay.bind(this))
            : null;
        }
        orderedFeaturesTemplate() {
          var t;
          return (
            (null == (t = this.features) ? void 0 : t.walletFeaturesOrder) ||
            tA.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder
          ).map((t) => {
            switch (t) {
              case "onramp":
                return this.onrampTemplate();
              case "swaps":
                return this.swapsTemplate();
              case "send":
                return this.sendTemplate();
              default:
                return null;
            }
          });
        }
        activityTemplate() {
          var t;
          return this.namespace &&
            (null == (t = this.remoteFeatures) ? void 0 : t.activity) &&
            tA.ConstantsUtil.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(
              this.namespace
            )
            ? (0, i.html)(ec(), !0, this.onTransactions.bind(this))
            : null;
        }
        swapsTemplate() {
          var t;
          let e = null == (t = this.remoteFeatures) ? void 0 : t.swaps,
            n =
              u.ChainController.state.activeChain ===
              tk.ConstantsUtil.CHAIN.EVM;
          return e && n
            ? (0, i.html)(eu(), !0, this.handleClickSwap.bind(this))
            : null;
        }
        sendTemplate() {
          var t;
          let e = null == (t = this.features) ? void 0 : t.send,
            n = u.ChainController.state.activeChain;
          if (!n)
            throw Error("SendController:sendTemplate - namespace is required");
          let o = tA.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(n);
          return e && o
            ? (0, i.html)(ed(), !0, this.handleClickSend.bind(this))
            : null;
        }
        authCardTemplate() {
          let t = u.ChainController.state.activeChain;
          if (!t)
            throw Error(
              "AuthCardTemplate:authCardTemplate - namespace is required"
            );
          let e = tS.ConnectorController.getConnectorId(t),
            n = tS.ConnectorController.getAuthConnector(),
            { origin: o } = location;
          return !n ||
            e !== tk.ConstantsUtil.CONNECTOR_ID.AUTH ||
            o.includes(tA.ConstantsUtil.SECURE_SITE)
            ? null
            : (0, i.html)(ep(), this.onGoToUpgradeView.bind(this));
        }
        handleClickPay() {
          tR.RouterController.push("OnRampProviders");
        }
        handleClickSwap() {
          tR.RouterController.push("Swap");
        }
        handleClickSend() {
          tR.RouterController.push("WalletSend");
        }
        explorerBtnTemplate() {
          return a.AccountController.state.addressExplorerUrl
            ? (0, i.html)(eh(), this.onExplorer.bind(this))
            : null;
        }
        onTransactions() {
          to.EventsController.sendEvent({
            type: "track",
            event: "CLICK_TRANSACTIONS",
            properties: {
              isSmartAccount:
                (0, tO.getPreferredAccountType)(
                  u.ChainController.state.activeChain
                ) === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            tR.RouterController.push("Transactions");
        }
        async onDisconnect() {
          try {
            var t;
            this.disconnecting = !0;
            let e =
                tE.ConnectionController.getConnections(this.namespace).length >
                0,
              n =
                this.namespace &&
                tS.ConnectorController.state.activeConnectorIds[this.namespace],
              i = null == (t = this.remoteFeatures) ? void 0 : t.multiWallet;
            await tE.ConnectionController.disconnect(
              i ? { id: n, namespace: this.namespace } : {}
            ),
              e &&
                i &&
                (tR.RouterController.push("ProfileWallets"),
                tT.SnackController.showSuccess("Wallet deleted"));
          } catch (t) {
            to.EventsController.sendEvent({
              type: "track",
              event: "DISCONNECT_ERROR",
            }),
              tT.SnackController.showError("Failed to disconnect");
          } finally {
            this.disconnecting = !1;
          }
        }
        onExplorer() {
          let t = a.AccountController.state.addressExplorerUrl;
          t && d.CoreHelperUtil.openHref(t, "_blank");
        }
        onGoToUpgradeView() {
          to.EventsController.sendEvent({
            type: "track",
            event: "EMAIL_UPGRADE_FROM_MODAL",
          }),
            tR.RouterController.push("UpgradeEmailWallet");
        }
        onGoToProfileWalletsView() {
          tR.RouterController.push("ProfileWallets");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.caipAddress = a.AccountController.state.caipAddress),
            (this.address = d.CoreHelperUtil.getPlainAddress(
              a.AccountController.state.caipAddress
            )),
            (this.profileImage = a.AccountController.state.profileImage),
            (this.profileName = a.AccountController.state.profileName),
            (this.disconnecting = !1),
            (this.balance = a.AccountController.state.balance),
            (this.balanceSymbol = a.AccountController.state.balanceSymbol),
            (this.features = h.OptionsController.state.features),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            (this.namespace = u.ChainController.state.activeChain),
            (this.activeConnectorIds =
              tS.ConnectorController.state.activeConnectorIds),
            this.unsubscribe.push(
              a.AccountController.subscribeKey("caipAddress", (t) => {
                (this.address = d.CoreHelperUtil.getPlainAddress(t)),
                  (this.caipAddress = t);
              }),
              a.AccountController.subscribeKey(
                "balance",
                (t) => (this.balance = t)
              ),
              a.AccountController.subscribeKey(
                "balanceSymbol",
                (t) => (this.balanceSymbol = t)
              ),
              a.AccountController.subscribeKey(
                "profileName",
                (t) => (this.profileName = t)
              ),
              a.AccountController.subscribeKey(
                "profileImage",
                (t) => (this.profileImage = t)
              ),
              h.OptionsController.subscribeKey(
                "features",
                (t) => (this.features = t)
              ),
              h.OptionsController.subscribeKey(
                "remoteFeatures",
                (t) => (this.remoteFeatures = t)
              ),
              tS.ConnectorController.subscribeKey("activeConnectorIds", (t) => {
                this.activeConnectorIds = t;
              }),
              u.ChainController.subscribeKey(
                "activeChain",
                (t) => (this.namespace = t)
              ),
              u.ChainController.subscribeKey("activeCaipNetwork", (t) => {
                (null == t ? void 0 : t.chainNamespace) &&
                  (this.namespace = null == t ? void 0 : t.chainNamespace);
              })
            );
        }
      };
      (ef.styles = el),
        ew([(0, r.state)()], ef.prototype, "caipAddress", void 0),
        ew([(0, r.state)()], ef.prototype, "address", void 0),
        ew([(0, r.state)()], ef.prototype, "profileImage", void 0),
        ew([(0, r.state)()], ef.prototype, "profileName", void 0),
        ew([(0, r.state)()], ef.prototype, "disconnecting", void 0),
        ew([(0, r.state)()], ef.prototype, "balance", void 0),
        ew([(0, r.state)()], ef.prototype, "balanceSymbol", void 0),
        ew([(0, r.state)()], ef.prototype, "features", void 0),
        ew([(0, r.state)()], ef.prototype, "remoteFeatures", void 0),
        ew([(0, r.state)()], ef.prototype, "namespace", void 0),
        ew([(0, r.state)()], ef.prototype, "activeConnectorIds", void 0),
        (ef = ew([(0, w.customElement)("w3m-account-default-widget")], ef));
      var em = n,
        eg = n;
      function eb() {
        let t = (0, e._)([
          "\n  span {\n    font-weight: 500;\n    font-size: 40px;\n    color: var(--wui-color-fg-100);\n    line-height: 130%; /* 52px */\n    letter-spacing: -1.6px;\n    text-align: center;\n  }\n\n  .pennies {\n    color: var(--wui-color-fg-200);\n  }\n",
        ]);
        return (
          (eb = function () {
            return t;
          }),
          t
        );
      }
      let ev = (0, b.css)(eb());
      function eC() {
        let t = (0, e._)([
          "<span>$",
          '<span class="pennies">.',
          "</span></span>",
        ]);
        return (
          (eC = function () {
            return t;
          }),
          t
        );
      }
      var ey = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let ex = class extends eg.LitElement {
        render() {
          return (0, i.html)(eC(), this.dollars, this.pennies);
        }
        constructor() {
          super(...arguments), (this.dollars = "0"), (this.pennies = "00");
        }
      };
      (ex.styles = [m.resetStyles, ev]),
        ey([(0, o.property)()], ex.prototype, "dollars", void 0),
        ey([(0, o.property)()], ex.prototype, "pennies", void 0),
        (ex = ey([(0, w.customElement)("wui-balance")], ex)),
        t.i(99398);
      var ek = n;
      function eE() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);\n    border-radius: var(--wui-border-radius-xxs);\n\n    color: var(--wui-color-bg-100);\n    position: relative;\n  }\n\n  :host([data-variant='shade']) {\n    background-color: var(--wui-color-bg-150);\n    border: 1px solid var(--wui-color-gray-glass-005);\n  }\n\n  :host([data-variant='shade']) > wui-text {\n    color: var(--wui-color-fg-150);\n  }\n\n  :host([data-variant='fill']) {\n    background-color: var(--wui-color-fg-100);\n    border: none;\n  }\n\n  wui-icon {\n    position: absolute;\n    width: 12px !important;\n    height: 4px !important;\n  }\n\n  wui-icon[data-placement='top'] {\n    bottom: 0px;\n    left: 50%;\n    transform: translate(-50%, 95%);\n  }\n\n  wui-icon[data-placement='bottom'] {\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, -95%) rotate(180deg);\n  }\n\n  wui-icon[data-placement='right'] {\n    top: 50%;\n    left: 0;\n    transform: translate(-65%, -50%) rotate(90deg);\n  }\n\n  wui-icon[data-placement='left'] {\n    top: 50%;\n    right: 0%;\n    transform: translate(65%, -50%) rotate(270deg);\n  }\n",
        ]);
        return (
          (eE = function () {
            return t;
          }),
          t
        );
      }
      let eS = (0, b.css)(eE());
      function eA() {
        let t = (0, e._)([
          "<wui-icon\n        data-placement=",
          '\n        color="fg-100"\n        size="inherit"\n        name=',
          '\n      ></wui-icon>\n      <wui-text color="inherit" variant="small-500">',
          "</wui-text>",
        ]);
        return (
          (eA = function () {
            return t;
          }),
          t
        );
      }
      var eR = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let eI = class extends ek.LitElement {
        render() {
          return (
            (this.dataset.variant = this.variant),
            (0, i.html)(
              eA(),
              this.placement,
              "fill" === this.variant ? "cursor" : "cursorTransparent",
              this.message
            )
          );
        }
        constructor() {
          super(...arguments),
            (this.placement = "top"),
            (this.variant = "fill"),
            (this.message = "");
        }
      };
      (eI.styles = [m.resetStyles, m.elementStyles, eS]),
        eR([(0, o.property)()], eI.prototype, "placement", void 0),
        eR([(0, o.property)()], eI.prototype, "variant", void 0),
        eR([(0, o.property)()], eI.prototype, "message", void 0),
        (eI = eR([(0, w.customElement)("wui-tooltip")], eI));
      var eT = t.i(456997),
        eO = t.i(508431);
      let e_ = {
        getTabsByNamespace(t) {
          var e;
          return t && t === tk.ConstantsUtil.CHAIN.EVM
            ? (null == (e = h.OptionsController.state.remoteFeatures)
                ? void 0
                : e.activity) === !1
              ? eO.ConstantsUtil.ACCOUNT_TABS.filter(
                  (t) => "Activity" !== t.label
                )
              : eO.ConstantsUtil.ACCOUNT_TABS
            : [];
        },
      };
      var eN = n;
      function eU() {
        let t = (0, e._)([
          "\n  :host {\n    width: 100%;\n    max-height: 280px;\n    overflow: scroll;\n    scrollbar-width: none;\n  }\n\n  :host::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (eU = function () {
            return t;
          }),
          t
        );
      }
      t.i(923162);
      let eD = (0, b.css)(eU());
      function eW() {
        let t = (0, e._)([
          '<w3m-activity-list page="account"></w3m-activity-list>',
        ]);
        return (
          (eW = function () {
            return t;
          }),
          t
        );
      }
      let eP = class extends eN.LitElement {
        render() {
          return (0, i.html)(eW());
        }
      };
      (eP.styles = eD),
        (eP = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("w3m-account-activity-widget")], eP));
      var eL = n;
      function ej() {
        let t = (0, e._)([
          "\n  .contentContainer {\n    height: 280px;\n  }\n\n  .contentContainer > wui-icon-box {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--wui-border-radius-xxs);\n  }\n\n  .contentContainer > .textContent {\n    width: 65%;\n  }\n",
        ]);
        return (
          (ej = function () {
            return t;
          }),
          t
        );
      }
      t.i(464275), t.i(985606);
      let eB = (0, b.css)(ej());
      function ez() {
        let t = (0, e._)(["", ""]);
        return (
          (ez = function () {
            return t;
          }),
          t
        );
      }
      function eH() {
        let t = (0, e._)([
          ' <wui-flex\n      class="contentContainer"\n      alignItems="center"\n      justifyContent="center"\n      flexDirection="column"\n      gap="l"\n    >\n      <wui-icon-box\n        icon="wallet"\n        size="inherit"\n        iconColor="fg-200"\n        backgroundColor="fg-200"\n        iconSize="lg"\n      ></wui-icon-box>\n      <wui-flex\n        class="textContent"\n        gap="xs"\n        flexDirection="column"\n        justifyContent="center"\n        flexDirection="column"\n      >\n        <wui-text\n          variant="paragraph-500"\n          align="center"\n          color="fg-100"\n          data-testid="nft-template-title"\n          >Coming soon</wui-text\n        >\n        <wui-text\n          variant="small-400"\n          align="center"\n          color="fg-200"\n          data-testid="nft-template-description"\n          >Stay tuned for our upcoming NFT feature</wui-text\n        >\n      </wui-flex>\n      <wui-link @click=',
          ' data-testid="link-receive-funds"\n        >Receive funds</wui-link\n      >\n    </wui-flex>',
        ]);
        return (
          (eH = function () {
            return t;
          }),
          t
        );
      }
      let eF = class extends eL.LitElement {
        render() {
          return (0, i.html)(ez(), this.nftTemplate());
        }
        nftTemplate() {
          return (0, i.html)(eH(), this.onReceiveClick.bind(this));
        }
        onReceiveClick() {
          tR.RouterController.push("WalletReceive");
        }
      };
      (eF.styles = eB),
        (eF = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("w3m-account-nfts-widget")], eF));
      var eM = n,
        eV = n;
      function eK() {
        let t = (0, e._)([
          "\n  button {\n    width: 100%;\n    display: flex;\n    gap: var(--wui-spacing-s);\n    align-items: center;\n    justify-content: flex-start;\n    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n  }\n\n  wui-icon-box {\n    width: var(--wui-spacing-2xl);\n    height: var(--wui-spacing-2xl);\n  }\n\n  wui-flex {\n    width: auto;\n  }\n",
        ]);
        return (
          (eK = function () {
            return t;
          }),
          t
        );
      }
      t.i(428608);
      let eG = (0, b.css)(eK());
      function eq() {
        let t = (0, e._)([
          "\n      <button ?disabled=",
          ">\n        <wui-icon-box\n          iconColor=",
          "\n          backgroundColor=",
          '\n          size="inherit"\n          icon=',
          '\n          iconSize="md"\n        ></wui-icon-box>\n        <wui-flex flexDirection="column" justifyContent="spaceBetween">\n          ',
          '\n          <wui-text variant="small-400" color="fg-200"> ',
          "</wui-text></wui-flex\n        >\n      </button>\n    ",
        ]);
        return (
          (eq = function () {
            return t;
          }),
          t
        );
      }
      function eY() {
        let t = (0, e._)([
          ' <wui-flex alignItems="center" gap="xxs"\n        ><wui-text variant="paragraph-500" color="fg-100">',
          '</wui-text\n        ><wui-tag tagType="main" size="md">',
          "</wui-tag>\n      </wui-flex>",
        ]);
        return (
          (eY = function () {
            return t;
          }),
          t
        );
      }
      function eX() {
        let t = (0, e._)([
          '<wui-text variant="paragraph-500" color="fg-100">',
          "</wui-text>",
        ]);
        return (
          (eX = function () {
            return t;
          }),
          t
        );
      }
      var eQ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let eZ = class extends eV.LitElement {
        render() {
          return (0, i.html)(
            eq(),
            this.disabled,
            this.iconColor,
            this.iconBackgroundColor,
            this.icon,
            this.titleTemplate(),
            this.description
          );
        }
        titleTemplate() {
          return this.tag
            ? (0, i.html)(eY(), this.text, this.tag)
            : (0, i.html)(eX(), this.text);
        }
        constructor() {
          super(...arguments),
            (this.icon = "card"),
            (this.text = ""),
            (this.description = ""),
            (this.tag = void 0),
            (this.iconBackgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.disabled = !1);
        }
      };
      function eJ() {
        let t = (0, e._)([
          "\n  :host {\n    width: 100%;\n  }\n\n  wui-flex {\n    width: 100%;\n  }\n\n  .contentContainer {\n    max-height: 280px;\n    overflow: scroll;\n    scrollbar-width: none;\n  }\n\n  .contentContainer::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (eJ = function () {
            return t;
          }),
          t
        );
      }
      (eZ.styles = [m.resetStyles, m.elementStyles, eG]),
        eQ([(0, o.property)()], eZ.prototype, "icon", void 0),
        eQ([(0, o.property)()], eZ.prototype, "text", void 0),
        eQ([(0, o.property)()], eZ.prototype, "description", void 0),
        eQ([(0, o.property)()], eZ.prototype, "tag", void 0),
        eQ([(0, o.property)()], eZ.prototype, "iconBackgroundColor", void 0),
        eQ([(0, o.property)()], eZ.prototype, "iconColor", void 0),
        eQ(
          [(0, o.property)({ type: Boolean })],
          eZ.prototype,
          "disabled",
          void 0
        ),
        (eZ = eQ([(0, w.customElement)("wui-list-description")], eZ)),
        t.i(194171);
      let e$ = (0, b.css)(eJ());
      function e0() {
        let t = (0, e._)(["", ""]);
        return (
          (e0 = function () {
            return t;
          }),
          t
        );
      }
      function e3() {
        let t = (0, e._)([
          '<wui-flex class="contentContainer" flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>",
        ]);
        return (
          (e3 = function () {
            return t;
          }),
          t
        );
      }
      function e1() {
        let t = (0, e._)([
          ' <wui-flex flexDirection="column" gap="xs"\n      >',
          "\n      <wui-list-description\n        @click=",
          '\n        text="Receive funds"\n        description="Transfer tokens on your wallet"\n        icon="arrowBottomCircle"\n        iconColor="fg-200"\n        iconBackgroundColor="fg-200"\n        data-testid="receive-funds"\n      ></wui-list-description\n    ></wui-flex>',
        ]);
        return (
          (e1 = function () {
            return t;
          }),
          t
        );
      }
      function e5() {
        let t = (0, e._)([
          "<wui-list-description\n        @click=",
          '\n        text="Buy Crypto"\n        description="Easy with card or bank account"\n        icon="card"\n        iconColor="success-100"\n        iconBackgroundColor="success-100"\n        tag="popular"\n        data-testid="buy-crypto"\n      ></wui-list-description>',
        ]);
        return (
          (e5 = function () {
            return t;
          }),
          t
        );
      }
      function e2() {
        let t = (0, e._)([""]);
        return (
          (e2 = function () {
            return t;
          }),
          t
        );
      }
      function e6() {
        let t = (0, e._)([
          "<wui-list-token\n          tokenName=",
          "\n          tokenImageUrl=",
          "\n          tokenAmount=",
          "\n          tokenValue=",
          "\n          tokenCurrency=",
          "\n        ></wui-list-token>",
        ]);
        return (
          (e6 = function () {
            return t;
          }),
          t
        );
      }
      var e4 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let e7 = class extends eM.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(e0(), this.tokenTemplate());
        }
        tokenTemplate() {
          var t;
          return this.tokenBalance &&
            (null == (t = this.tokenBalance) ? void 0 : t.length) > 0
            ? (0, i.html)(e3(), this.tokenItemTemplate())
            : (0, i.html)(
                e1(),
                this.onRampTemplate(),
                this.onReceiveClick.bind(this)
              );
        }
        onRampTemplate() {
          var t;
          return (null == (t = this.remoteFeatures) ? void 0 : t.onramp)
            ? (0, i.html)(e5(), this.onBuyClick.bind(this))
            : (0, i.html)(e2());
        }
        tokenItemTemplate() {
          var t;
          return null == (t = this.tokenBalance)
            ? void 0
            : t.map((t) =>
                (0, i.html)(
                  e6(),
                  t.name,
                  t.iconUrl,
                  t.quantity.numeric,
                  t.value,
                  t.symbol
                )
              );
        }
        onReceiveClick() {
          tR.RouterController.push("WalletReceive");
        }
        onBuyClick() {
          to.EventsController.sendEvent({
            type: "track",
            event: "SELECT_BUY_CRYPTO",
            properties: {
              isSmartAccount:
                (0, tO.getPreferredAccountType)(
                  u.ChainController.state.activeChain
                ) === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            tR.RouterController.push("OnRampProviders");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tokenBalance = a.AccountController.state.tokenBalance),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            this.unsubscribe.push(
              a.AccountController.subscribe((t) => {
                this.tokenBalance = t.tokenBalance;
              }),
              h.OptionsController.subscribeKey("remoteFeatures", (t) => {
                this.remoteFeatures = t;
              })
            );
        }
      };
      function e8() {
        let t = (0, e._)([
          "\n  wui-flex {\n    width: 100%;\n  }\n\n  wui-promo {\n    position: absolute;\n    top: -32px;\n  }\n\n  wui-profile-button {\n    margin-top: calc(-1 * var(--wui-spacing-2l));\n  }\n\n  wui-promo + wui-profile-button {\n    margin-top: var(--wui-spacing-2l);\n  }\n\n  wui-tabs {\n    width: 100%;\n  }\n\n  .contentContainer {\n    height: 280px;\n  }\n\n  .contentContainer > wui-icon-box {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--wui-border-radius-xxs);\n  }\n\n  .contentContainer > .textContent {\n    width: 65%;\n  }\n",
        ]);
        return (
          (e8 = function () {
            return t;
          }),
          t
        );
      }
      (e7.styles = e$),
        e4([(0, r.state)()], e7.prototype, "tokenBalance", void 0),
        e4([(0, r.state)()], e7.prototype, "remoteFeatures", void 0),
        (e7 = e4([(0, w.customElement)("w3m-account-tokens-widget")], e7)),
        t.i(710577),
        t.i(731549);
      let e9 = (0, b.css)(e8());
      function nt() {
        let t = (0, e._)([
          '<wui-flex\n      flexDirection="column"\n      .padding=',
          '\n      alignItems="center"\n      gap="m"\n      data-testid="w3m-account-wallet-features-widget"\n    >\n      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="xs">\n        <wui-wallet-switch\n          profileName=',
          "\n          address=",
          "\n          icon=",
          "\n          iconSize=",
          "\n          alt=",
          "\n          @click=",
          '\n          data-testid="wui-wallet-switch"\n        ></wui-wallet-switch>\n\n        ',
          "\n      </wui-flex>\n      ",
          " ",
          " ",
          "\n    </wui-flex>",
        ]);
        return (
          (nt = function () {
            return t;
          }),
          t
        );
      }
      function ne() {
        let t = (0, e._)(['<wui-flex gap="s">\n      ', "\n    </wui-flex>"]);
        return (
          (ne = function () {
            return t;
          }),
          t
        );
      }
      function nn() {
        let t = (0, e._)([
          '\n      <w3m-tooltip-trigger text="Buy">\n        <wui-icon-button\n          data-testid="wallet-features-onramp-button"\n          @click=',
          '\n          icon="card"\n        ></wui-icon-button>\n      </w3m-tooltip-trigger>\n    ',
        ]);
        return (
          (nn = function () {
            return t;
          }),
          t
        );
      }
      function ni() {
        let t = (0, e._)([
          '\n      <w3m-tooltip-trigger text="Swap">\n        <wui-icon-button\n          data-testid="wallet-features-swaps-button"\n          @click=',
          '\n          icon="recycleHorizontal"\n        >\n        </wui-icon-button>\n      </w3m-tooltip-trigger>\n    ',
        ]);
        return (
          (ni = function () {
            return t;
          }),
          t
        );
      }
      function no() {
        let t = (0, e._)([
          '\n      <w3m-tooltip-trigger text="Receive">\n        <wui-icon-button\n          data-testid="wallet-features-receive-button"\n          @click=',
          '\n          icon="arrowBottomCircle"\n        >\n        </wui-icon-button>\n      </w3m-tooltip-trigger>\n    ',
        ]);
        return (
          (no = function () {
            return t;
          }),
          t
        );
      }
      function nr() {
        let t = (0, e._)([
          '\n      <w3m-tooltip-trigger text="Send">\n        <wui-icon-button\n          data-testid="wallet-features-send-button"\n          @click=',
          '\n          icon="send"\n        ></wui-icon-button>\n      </w3m-tooltip-trigger>\n    ',
        ]);
        return (
          (nr = function () {
            return t;
          }),
          t
        );
      }
      function nl() {
        let t = (0, e._)([
          "<w3m-account-tokens-widget></w3m-account-tokens-widget>",
        ]);
        return (
          (nl = function () {
            return t;
          }),
          t
        );
      }
      function na() {
        let t = (0, e._)([
          "<w3m-account-nfts-widget></w3m-account-nfts-widget>",
        ]);
        return (
          (na = function () {
            return t;
          }),
          t
        );
      }
      function ns() {
        let t = (0, e._)([
          "<w3m-account-activity-widget></w3m-account-activity-widget>",
        ]);
        return (
          (ns = function () {
            return t;
          }),
          t
        );
      }
      function nc() {
        let t = (0, e._)([
          "<w3m-account-tokens-widget></w3m-account-tokens-widget>",
        ]);
        return (
          (nc = function () {
            return t;
          }),
          t
        );
      }
      function nu() {
        let t = (0, e._)([
          "<wui-balance dollars=",
          " pennies=",
          "></wui-balance>",
        ]);
        return (
          (nu = function () {
            return t;
          }),
          t
        );
      }
      function nd() {
        let t = (0, e._)([
          '<wui-balance dollars="0" pennies="00"></wui-balance>',
        ]);
        return (
          (nd = function () {
            return t;
          }),
          t
        );
      }
      function np() {
        let t = (0, e._)([
          "<wui-tabs\n      .onTabChange=",
          "\n      .activeTab=",
          "\n      localTabWidth=",
          "\n      .tabs=",
          "\n    ></wui-tabs>",
        ]);
        return (
          (np = function () {
            return t;
          }),
          t
        );
      }
      var nh = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let nw = class extends em.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t()),
            clearInterval(this.watchTokenBalance);
        }
        firstUpdated() {
          a.AccountController.fetchTokenBalance();
        }
        render() {
          if (!this.address)
            throw Error("w3m-account-view: No account provided");
          if (!this.namespace) return null;
          let t = this.activeConnectorIds[this.namespace],
            e = t ? tS.ConnectorController.getConnectorById(t) : void 0,
            { icon: n, iconSize: o } = this.getAuthData();
          return (0, i.html)(
            nt(),
            ["0", "xl", "m", "xl"],
            this.profileName,
            this.address,
            n,
            o,
            null == e ? void 0 : e.name,
            this.onGoToProfileWalletsView.bind(this),
            this.tokenBalanceTemplate(),
            this.orderedWalletFeatures(),
            this.tabsTemplate(),
            this.listContentTemplate()
          );
        }
        orderedWalletFeatures() {
          var t;
          let e =
            (null == (t = this.features) ? void 0 : t.walletFeaturesOrder) ||
            tA.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder;
          return e.every((t) => {
            var e, n;
            return "send" === t || "receive" === t
              ? !(null == (e = this.features) ? void 0 : e[t])
              : ("swaps" !== t && "onramp" !== t) ||
                  !(null == (n = this.remoteFeatures) ? void 0 : n[t]);
          })
            ? null
            : (0, i.html)(
                ne(),
                e.map((t) => {
                  switch (t) {
                    case "onramp":
                      return this.onrampTemplate();
                    case "swaps":
                      return this.swapsTemplate();
                    case "receive":
                      return this.receiveTemplate();
                    case "send":
                      return this.sendTemplate();
                    default:
                      return null;
                  }
                })
              );
        }
        onrampTemplate() {
          var t;
          return (null == (t = this.remoteFeatures) ? void 0 : t.onramp)
            ? (0, i.html)(nn(), this.onBuyClick.bind(this))
            : null;
        }
        swapsTemplate() {
          var t;
          let e = null == (t = this.remoteFeatures) ? void 0 : t.swaps,
            n =
              u.ChainController.state.activeChain ===
              tk.ConstantsUtil.CHAIN.EVM;
          return e && n ? (0, i.html)(ni(), this.onSwapClick.bind(this)) : null;
        }
        receiveTemplate() {
          var t;
          return (null == (t = this.features) ? void 0 : t.receive)
            ? (0, i.html)(no(), this.onReceiveClick.bind(this))
            : null;
        }
        sendTemplate() {
          var t;
          let e = null == (t = this.features) ? void 0 : t.send,
            n = u.ChainController.state.activeChain,
            o = tA.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(n);
          return e && o ? (0, i.html)(nr(), this.onSendClick.bind(this)) : null;
        }
        watchSwapValues() {
          this.watchTokenBalance = setInterval(
            () =>
              a.AccountController.fetchTokenBalance((t) =>
                this.onTokenBalanceError(t)
              ),
            1e4
          );
        }
        onTokenBalanceError(t) {
          t instanceof Error &&
            t.cause instanceof Response &&
            t.cause.status ===
              tk.ConstantsUtil.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE &&
            clearInterval(this.watchTokenBalance);
        }
        listContentTemplate() {
          return 0 === this.currentTab
            ? (0, i.html)(nl())
            : 1 === this.currentTab
            ? (0, i.html)(na())
            : 2 === this.currentTab
            ? (0, i.html)(ns())
            : (0, i.html)(nc());
        }
        tokenBalanceTemplate() {
          var t;
          if (
            this.tokenBalance &&
            (null == (t = this.tokenBalance) ? void 0 : t.length) >= 0
          ) {
            let t = d.CoreHelperUtil.calculateBalance(this.tokenBalance),
              { dollars: e = "0", pennies: n = "00" } =
                d.CoreHelperUtil.formatTokenBalance(t);
            return (0, i.html)(nu(), e, n);
          }
          return (0, i.html)(nd());
        }
        tabsTemplate() {
          let t = e_.getTabsByNamespace(u.ChainController.state.activeChain);
          if (0 === t.length) return null;
          let e = d.CoreHelperUtil.isMobile() && window.innerWidth < 430,
            n = "104px";
          return (
            (n = e
              ? "".concat((window.innerWidth - 48) / t.length, "px")
              : 2 === t.length
              ? "156px"
              : "104px"),
            (0, i.html)(
              np(),
              this.onTabChange.bind(this),
              this.currentTab,
              n,
              t
            )
          );
        }
        onTabChange(t) {
          a.AccountController.setCurrentTab(t);
        }
        onBuyClick() {
          tR.RouterController.push("OnRampProviders");
        }
        onSwapClick() {
          var t, e, n;
          (null == (t = this.network) ? void 0 : t.caipNetworkId) &&
          !tA.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(
            null == (e = this.network) ? void 0 : e.caipNetworkId
          )
            ? tR.RouterController.push("UnsupportedChain", {
                swapUnsupportedChain: !0,
              })
            : (to.EventsController.sendEvent({
                type: "track",
                event: "OPEN_SWAP",
                properties: {
                  network:
                    (null == (n = this.network) ? void 0 : n.caipNetworkId) ||
                    "",
                  isSmartAccount:
                    (0, tO.getPreferredAccountType)(
                      u.ChainController.state.activeChain
                    ) === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                },
              }),
              tR.RouterController.push("Swap"));
        }
        getAuthData() {
          var t;
          let e = tB.StorageUtil.getConnectedSocialProvider(),
            n = tB.StorageUtil.getConnectedSocialUsername(),
            i = tS.ConnectorController.getAuthConnector(),
            o =
              null != (t = null == i ? void 0 : i.provider.getEmail()) ? t : "";
          return {
            name: eT.ConnectorUtil.getAuthName({
              email: o,
              socialUsername: n,
              socialProvider: e,
            }),
            icon: null != e ? e : "mail",
            iconSize: e ? "xl" : "md",
          };
        }
        onReceiveClick() {
          tR.RouterController.push("WalletReceive");
        }
        onGoToProfileWalletsView() {
          tR.RouterController.push("ProfileWallets");
        }
        onSendClick() {
          var t;
          to.EventsController.sendEvent({
            type: "track",
            event: "OPEN_SEND",
            properties: {
              network:
                (null == (t = this.network) ? void 0 : t.caipNetworkId) || "",
              isSmartAccount:
                (0, tO.getPreferredAccountType)(
                  u.ChainController.state.activeChain
                ) === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
            },
          }),
            tR.RouterController.push("WalletSend");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.address = a.AccountController.state.address),
            (this.profileName = a.AccountController.state.profileName),
            (this.network = u.ChainController.state.activeCaipNetwork),
            (this.currentTab = a.AccountController.state.currentTab),
            (this.tokenBalance = a.AccountController.state.tokenBalance),
            (this.features = h.OptionsController.state.features),
            (this.namespace = u.ChainController.state.activeChain),
            (this.activeConnectorIds =
              tS.ConnectorController.state.activeConnectorIds),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            this.unsubscribe.push(
              a.AccountController.subscribe((t) => {
                t.address
                  ? ((this.address = t.address),
                    (this.profileName = t.profileName),
                    (this.currentTab = t.currentTab),
                    (this.tokenBalance = t.tokenBalance))
                  : p.ModalController.close();
              }),
              tS.ConnectorController.subscribeKey("activeConnectorIds", (t) => {
                this.activeConnectorIds = t;
              }),
              u.ChainController.subscribeKey(
                "activeChain",
                (t) => (this.namespace = t)
              ),
              u.ChainController.subscribeKey(
                "activeCaipNetwork",
                (t) => (this.network = t)
              ),
              h.OptionsController.subscribeKey(
                "features",
                (t) => (this.features = t)
              ),
              h.OptionsController.subscribeKey(
                "remoteFeatures",
                (t) => (this.remoteFeatures = t)
              )
            ),
            this.watchSwapValues();
        }
      };
      function nf() {
        let t = (0, e._)(["\n      ", "\n    "]);
        return (
          (nf = function () {
            return t;
          }),
          t
        );
      }
      function nm() {
        let t = (0, e._)([
          "<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>",
        ]);
        return (
          (nm = function () {
            return t;
          }),
          t
        );
      }
      function ng() {
        let t = (0, e._)([
          "<w3m-account-default-widget></w3m-account-default-widget>",
        ]);
        return (
          (ng = function () {
            return t;
          }),
          t
        );
      }
      (nw.styles = e9),
        nh([(0, r.state)()], nw.prototype, "watchTokenBalance", void 0),
        nh([(0, r.state)()], nw.prototype, "address", void 0),
        nh([(0, r.state)()], nw.prototype, "profileName", void 0),
        nh([(0, r.state)()], nw.prototype, "network", void 0),
        nh([(0, r.state)()], nw.prototype, "currentTab", void 0),
        nh([(0, r.state)()], nw.prototype, "tokenBalance", void 0),
        nh([(0, r.state)()], nw.prototype, "features", void 0),
        nh([(0, r.state)()], nw.prototype, "namespace", void 0),
        nh([(0, r.state)()], nw.prototype, "activeConnectorIds", void 0),
        nh([(0, r.state)()], nw.prototype, "remoteFeatures", void 0),
        (nw = nh(
          [(0, w.customElement)("w3m-account-wallet-features-widget")],
          nw
        ));
      var nb = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let nv = class extends tX.LitElement {
        render() {
          if (!this.namespace) return null;
          let t = tS.ConnectorController.getConnectorId(this.namespace),
            e = tS.ConnectorController.getAuthConnector();
          return (0, i.html)(
            nf(),
            e && t === tk.ConstantsUtil.CONNECTOR_ID.AUTH
              ? this.walletFeaturesTemplate()
              : this.defaultTemplate()
          );
        }
        walletFeaturesTemplate() {
          return (0, i.html)(nm());
        }
        defaultTemplate() {
          return (0, i.html)(ng());
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.namespace = u.ChainController.state.activeChain),
            this.unsubscribe.push(
              u.ChainController.subscribeKey("activeChain", (t) => {
                this.namespace = t;
              })
            );
        }
      };
      nb([(0, r.state)()], nv.prototype, "namespace", void 0),
        (nv = nb([(0, w.customElement)("w3m-account-view")], nv)),
        t.s({ W3mProfileWalletsView: () => iw }, 136184);
      var nC = n;
      t.i(509250);
      var ny = t.i(382047),
        nx = t.i(188274),
        nk = t.i(489040),
        nE = t.i(229803),
        nS = n;
      function nA() {
        let t = (0, e._)([
          "\n  wui-image {\n    width: var(--wui-spacing-2xl);\n    height: var(--wui-spacing-2xl);\n    border-radius: var(--wui-border-radius-3xs);\n  }\n\n  wui-image,\n  .icon-box {\n    width: var(--wui-spacing-2xl);\n    height: var(--wui-spacing-2xl);\n    border-radius: var(--wui-border-radius-3xs);\n  }\n\n  wui-icon:not(.custom-icon, .icon-badge) {\n    cursor: pointer;\n  }\n\n  .icon-box {\n    position: relative;\n    background-color: var(--wui-color-gray-glass-002);\n  }\n\n  .icon-badge {\n    position: absolute;\n    top: 18px;\n    left: 23px;\n    z-index: 3;\n    background-color: var(--wui-color-gray-glass-005);\n    border: 2px solid var(--wui-color-modal-bg);\n    border-radius: 50%;\n    padding: var(--wui-spacing-4xs);\n  }\n",
        ]);
        return (
          (nA = function () {
            return t;
          }),
          t
        );
      }
      t.i(44158), t.i(333570);
      let nR = (0, b.css)(nA());
      function nI() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" rowGap="xs">\n        ',
          " ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (nI = function () {
            return t;
          }),
          t
        );
      }
      function nT() {
        let t = (0, e._)([
          '<wui-icon-link\n              iconColor="fg-200"\n              size="sm"\n              icon="threeDots"\n              @click=',
          '\n              data-testid="wui-active-profile-wallet-item-more-button"\n            ></wui-icon-link>',
        ]);
        return (
          (nT = function () {
            return t;
          }),
          t
        );
      }
      function nO() {
        let t = (0, e._)([
          '\n      <wui-flex alignItems="flex-start" justifyContent="space-between">\n        ',
          '\n        <wui-icon-link\n          iconColor="fg-200"\n          size="sm"\n          icon="copy"\n          @click=',
          '\n        ></wui-icon-link>\n        <wui-icon-link\n          iconColor="fg-200"\n          size="sm"\n          icon="externalLink"\n          @click=',
          "\n        ></wui-icon-link>\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (nO = function () {
            return t;
          }),
          t
        );
      }
      function n_() {
        let t = (0, e._)([
          ' <wui-flex flexDirection="column">',
          "</wui-flex> ",
        ]);
        return (
          (n_ = function () {
            return t;
          }),
          t
        );
      }
      function nN() {
        let t = (0, e._)([
          '<wui-icon\n                  color="fg-175"\n                  size=',
          "\n                  name=",
          '\n                  class="icon-badge"\n                ></wui-icon>',
        ]);
        return (
          (nN = function () {
            return t;
          }),
          t
        );
      }
      function nU() {
        let t = (0, e._)([
          '\n        <wui-flex flexGrow="1" alignItems="center">\n          <wui-flex alignItems="center" justifyContent="center" class="icon-box">\n            <wui-icon\n              size=',
          '\n              color="fg-200"\n              name=',
          '\n              class="custom-icon"\n            ></wui-icon>\n\n            ',
          "\n          </wui-flex>\n        </wui-flex>\n      ",
        ]);
        return (
          (nU = function () {
            return t;
          }),
          t
        );
      }
      function nD() {
        let t = (0, e._)([
          '\n      <wui-flex flexGrow="1" alignItems="center">\n        <wui-image objectFit="contain" src=',
          " alt=",
          "></wui-image>\n      </wui-flex>\n    ",
        ]);
        return (
          (nD = function () {
            return t;
          }),
          t
        );
      }
      function nW() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" rowGap="s">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (nW = function () {
            return t;
          }),
          t
        );
      }
      function nP() {
        let t = (0, e._)([
          '<wui-text variant="micro-600" color="fg-200">',
          "</wui-text>",
        ]);
        return (
          (nP = function () {
            return t;
          }),
          t
        );
      }
      function nL() {
        let t = (0, e._)(["<wui-tag variant=", ' size="xs">', "</wui-tag>"]);
        return (
          (nL = function () {
            return t;
          }),
          t
        );
      }
      function nj() {
        let t = (0, e._)([
          '<wui-text variant="tiny-500" color="fg-200">',
          "</wui-text>",
        ]);
        return (
          (nj = function () {
            return t;
          }),
          t
        );
      }
      function nB() {
        let t = (0, e._)([
          '\n      <wui-flex justifyContent="space-between" alignItems=',
          ' columnGap="3xs">\n        <wui-flex flexDirection="column" rowGap="4xs">\n          ',
          '\n\n          <wui-flex alignItems="center" columnGap="3xs">\n            <wui-text variant="small-500" color="fg-100">\n              ',
          "\n            </wui-text>\n\n            ",
          "\n          </wui-flex>\n\n          ",
          "\n        </wui-flex>\n\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (nB = function () {
            return t;
          }),
          t
        );
      }
      function nz() {
        let t = (0, e._)([
          '\n      <wui-button\n        size="xs"\n        variant=',
          "\n        @click=",
          "\n        data-testid=",
          "\n      >\n        ",
          "\n      </wui-button>\n    ",
        ]);
        return (
          (nz = function () {
            return t;
          }),
          t
        );
      }
      var nH = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let nF = class extends nS.LitElement {
        render() {
          return (0, i.html)(nI(), this.topTemplate(), this.bottomTemplate());
        }
        topTemplate() {
          return (0, i.html)(
            nO(),
            this.imageOrIconTemplate(),
            this.dispatchCopyEvent,
            this.dispatchExternalLinkEvent,
            this.enableMoreButton
              ? (0, i.html)(nT(), this.dispatchMoreButtonEvent)
              : null
          );
        }
        bottomTemplate() {
          return (0, i.html)(n_(), this.contentTemplate());
        }
        imageOrIconTemplate() {
          return this.icon
            ? (0, i.html)(
                nU(),
                this.iconSize,
                this.icon,
                this.iconBadge
                  ? (0, i.html)(nN(), this.iconBadgeSize, this.iconBadge)
                  : null
              )
            : (0, i.html)(nD(), this.imageSrc, this.alt);
        }
        contentTemplate() {
          return 0 === this.content.length
            ? null
            : (0, i.html)(
                nW(),
                this.content.map((t) => this.labelAndTagTemplate(t))
              );
        }
        labelAndTagTemplate(t) {
          let {
            address: e,
            profileName: n,
            label: o,
            description: r,
            enableButton: l,
            buttonType: a,
            buttonLabel: s,
            buttonVariant: c,
            tagVariant: u,
            tagLabel: d,
            alignItems: p = "flex-end",
          } = t;
          return (0, i.html)(
            nB(),
            p,
            o ? (0, i.html)(nP(), o) : null,
            g.UiHelperUtil.getTruncateString({
              string: n || e,
              charsStart: n ? 16 : this.charsStart,
              charsEnd: n ? 0 : this.charsEnd,
              truncate: n ? "end" : "middle",
            }),
            u && d ? (0, i.html)(nL(), u, d) : null,
            r ? (0, i.html)(nj(), r) : null,
            l
              ? this.buttonTemplate({
                  buttonType: a,
                  buttonLabel: s,
                  buttonVariant: c,
                })
              : null
          );
        }
        buttonTemplate(t) {
          let { buttonType: e, buttonLabel: n, buttonVariant: o } = t;
          return (0, i.html)(
            nz(),
            o,
            "disconnect" === e
              ? this.dispatchDisconnectEvent.bind(this)
              : this.dispatchSwitchEvent.bind(this),
            "disconnect" === e
              ? "wui-active-profile-wallet-item-disconnect-button"
              : "wui-active-profile-wallet-item-switch-button",
            n
          );
        }
        dispatchDisconnectEvent() {
          this.dispatchEvent(
            new CustomEvent("disconnect", { bubbles: !0, composed: !0 })
          );
        }
        dispatchSwitchEvent() {
          this.dispatchEvent(
            new CustomEvent("switch", { bubbles: !0, composed: !0 })
          );
        }
        dispatchExternalLinkEvent() {
          this.dispatchEvent(
            new CustomEvent("externalLink", { bubbles: !0, composed: !0 })
          );
        }
        dispatchMoreButtonEvent() {
          this.dispatchEvent(
            new CustomEvent("more", { bubbles: !0, composed: !0 })
          );
        }
        dispatchCopyEvent() {
          this.dispatchEvent(
            new CustomEvent("copy", { bubbles: !0, composed: !0 })
          );
        }
        constructor() {
          super(...arguments),
            (this.address = ""),
            (this.profileName = ""),
            (this.content = []),
            (this.alt = ""),
            (this.imageSrc = ""),
            (this.icon = void 0),
            (this.iconSize = "md"),
            (this.iconBadge = void 0),
            (this.iconBadgeSize = "md"),
            (this.buttonVariant = "neutral"),
            (this.enableMoreButton = !1),
            (this.charsStart = 4),
            (this.charsEnd = 6);
        }
      };
      (nF.styles = [m.resetStyles, m.elementStyles, nR]),
        nH([(0, o.property)()], nF.prototype, "address", void 0),
        nH([(0, o.property)()], nF.prototype, "profileName", void 0),
        nH([(0, o.property)({ type: Array })], nF.prototype, "content", void 0),
        nH([(0, o.property)()], nF.prototype, "alt", void 0),
        nH([(0, o.property)()], nF.prototype, "imageSrc", void 0),
        nH([(0, o.property)()], nF.prototype, "icon", void 0),
        nH([(0, o.property)()], nF.prototype, "iconSize", void 0),
        nH([(0, o.property)()], nF.prototype, "iconBadge", void 0),
        nH([(0, o.property)()], nF.prototype, "iconBadgeSize", void 0),
        nH([(0, o.property)()], nF.prototype, "buttonVariant", void 0),
        nH(
          [(0, o.property)({ type: Boolean })],
          nF.prototype,
          "enableMoreButton",
          void 0
        ),
        nH(
          [(0, o.property)({ type: Number })],
          nF.prototype,
          "charsStart",
          void 0
        ),
        nH(
          [(0, o.property)({ type: Number })],
          nF.prototype,
          "charsEnd",
          void 0
        ),
        (nF = nH([(0, w.customElement)("wui-active-profile-wallet-item")], nF));
      var nM = n;
      function nV() {
        let t = (0, e._)([
          "\n  wui-image,\n  .icon-box {\n    width: var(--wui-spacing-2xl);\n    height: var(--wui-spacing-2xl);\n    border-radius: var(--wui-border-radius-3xs);\n  }\n\n  .right-icon {\n    cursor: pointer;\n  }\n\n  .icon-box {\n    position: relative;\n    background-color: var(--wui-color-gray-glass-002);\n  }\n\n  .icon-badge {\n    position: absolute;\n    top: 18px;\n    left: 23px;\n    z-index: 3;\n    background-color: var(--wui-color-gray-glass-005);\n    border: 2px solid var(--wui-color-modal-bg);\n    border-radius: 50%;\n    padding: var(--wui-spacing-4xs);\n  }\n",
        ]);
        return (
          (nV = function () {
            return t;
          }),
          t
        );
      }
      let nK = (0, b.css)(nV());
      function nG() {
        let t = (0, e._)([
          '\n      <wui-flex alignItems="center" columnGap="xs">\n        ',
          " ",
          "\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (nG = function () {
            return t;
          }),
          t
        );
      }
      function nq() {
        let t = (0, e._)([
          '<wui-icon\n                  color="fg-175"\n                  size=',
          "\n                  name=",
          '\n                  class="icon-badge"\n                ></wui-icon>',
        ]);
        return (
          (nq = function () {
            return t;
          }),
          t
        );
      }
      function nY() {
        let t = (0, e._)([
          '\n        <wui-flex alignItems="center" justifyContent="center" class="icon-box">\n          <wui-flex alignItems="center" justifyContent="center" class="icon-box">\n            <wui-icon\n              size=',
          '\n              color="fg-200"\n              name=',
          '\n              class="custom-icon"\n            ></wui-icon>\n            ',
          "\n          </wui-flex>\n        </wui-flex>\n      ",
        ]);
        return (
          (nY = function () {
            return t;
          }),
          t
        );
      }
      function nX() {
        let t = (0, e._)([
          '<wui-image objectFit="contain" src=',
          " alt=",
          "></wui-image>",
        ]);
        return (
          (nX = function () {
            return t;
          }),
          t
        );
      }
      function nQ() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        flexGrow="1"\n        justifyContent="flex-start"\n        alignItems="flex-start"\n      >\n        <wui-text variant="small-500" color="fg-100">\n          ',
          "\n        </wui-text>\n      </wui-flex>\n    ",
        ]);
        return (
          (nQ = function () {
            return t;
          }),
          t
        );
      }
      function nZ() {
        let t = (0, e._)([
          '\n      <wui-flex columnGap="3xs" alignItems="center" justifyContent="center">\n        <wui-button\n          size="xs"\n          variant=',
          "\n          .loading=",
          "\n          @click=",
          '\n          data-testid="wui-inactive-profile-wallet-item-button"\n        >\n          ',
          '\n        </wui-button>\n\n        <wui-icon-link\n          iconColor="fg-200"\n          size=',
          "\n          icon=",
          '\n          class="right-icon"\n          @click=',
          "\n        ></wui-icon-link>\n      </wui-flex>\n    ",
        ]);
        return (
          (nZ = function () {
            return t;
          }),
          t
        );
      }
      var nJ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let n$ = class extends nM.LitElement {
        render() {
          return (0, i.html)(
            nG(),
            this.imageOrIconTemplate(),
            this.labelAndDescriptionTemplate(),
            this.buttonActionTemplate()
          );
        }
        imageOrIconTemplate() {
          return this.icon
            ? (0, i.html)(
                nY(),
                this.iconSize,
                this.icon,
                this.iconBadge
                  ? (0, i.html)(nq(), this.iconBadgeSize, this.iconBadge)
                  : null
              )
            : (0, i.html)(nX(), this.imageSrc, this.alt);
        }
        labelAndDescriptionTemplate() {
          return (0, i.html)(
            nQ(),
            g.UiHelperUtil.getTruncateString({
              string: this.profileName || this.address,
              charsStart: this.profileName ? 16 : this.charsStart,
              charsEnd: this.profileName ? 0 : this.charsEnd,
              truncate: this.profileName ? "end" : "middle",
            })
          );
        }
        buttonActionTemplate() {
          return (0, i.html)(
            nZ(),
            this.buttonVariant,
            this.loading,
            this.handleButtonClick,
            this.buttonLabel,
            this.rightIconSize,
            this.rightIcon,
            this.handleIconClick
          );
        }
        handleButtonClick() {
          this.dispatchEvent(
            new CustomEvent("buttonClick", { bubbles: !0, composed: !0 })
          );
        }
        handleIconClick() {
          this.dispatchEvent(
            new CustomEvent("iconClick", { bubbles: !0, composed: !0 })
          );
        }
        constructor() {
          super(...arguments),
            (this.address = ""),
            (this.profileName = ""),
            (this.alt = ""),
            (this.buttonLabel = ""),
            (this.buttonVariant = "accent"),
            (this.imageSrc = ""),
            (this.icon = void 0),
            (this.iconSize = "md"),
            (this.iconBadgeSize = "md"),
            (this.rightIcon = "off"),
            (this.rightIconSize = "md"),
            (this.loading = !1),
            (this.charsStart = 4),
            (this.charsEnd = 6);
        }
      };
      (n$.styles = [m.resetStyles, m.elementStyles, nK]),
        nJ([(0, o.property)()], n$.prototype, "address", void 0),
        nJ([(0, o.property)()], n$.prototype, "profileName", void 0),
        nJ([(0, o.property)()], n$.prototype, "alt", void 0),
        nJ([(0, o.property)()], n$.prototype, "buttonLabel", void 0),
        nJ([(0, o.property)()], n$.prototype, "buttonVariant", void 0),
        nJ([(0, o.property)()], n$.prototype, "imageSrc", void 0),
        nJ([(0, o.property)()], n$.prototype, "icon", void 0),
        nJ([(0, o.property)()], n$.prototype, "iconSize", void 0),
        nJ([(0, o.property)()], n$.prototype, "iconBadge", void 0),
        nJ([(0, o.property)()], n$.prototype, "iconBadgeSize", void 0),
        nJ([(0, o.property)()], n$.prototype, "rightIcon", void 0),
        nJ([(0, o.property)()], n$.prototype, "rightIconSize", void 0),
        nJ(
          [(0, o.property)({ type: Boolean })],
          n$.prototype,
          "loading",
          void 0
        ),
        nJ(
          [(0, o.property)({ type: Number })],
          n$.prototype,
          "charsStart",
          void 0
        ),
        nJ(
          [(0, o.property)({ type: Number })],
          n$.prototype,
          "charsEnd",
          void 0
        ),
        (n$ = nJ(
          [(0, w.customElement)("wui-inactive-profile-wallet-item")],
          n$
        )),
        t.i(865048);
      var n0 = t.i(28529);
      let n3 = {
        getAuthData(t) {
          var e, n, i, o, r;
          let l = t.connectorId === tk.ConstantsUtil.CONNECTOR_ID.AUTH;
          if (!l)
            return { isAuth: !1, icon: void 0, iconSize: void 0, name: void 0 };
          let a =
              null != (i = null == t || null == (e = t.auth) ? void 0 : e.name)
                ? i
                : tB.StorageUtil.getConnectedSocialProvider(),
            s =
              null !=
              (o = null == t || null == (n = t.auth) ? void 0 : n.username)
                ? o
                : tB.StorageUtil.getConnectedSocialUsername(),
            c = tS.ConnectorController.getAuthConnector(),
            u =
              null != (r = null == c ? void 0 : c.provider.getEmail()) ? r : "";
          return {
            isAuth: !0,
            icon: null != a ? a : "mail",
            iconSize: a ? "xl" : "md",
            name: l
              ? eT.ConnectorUtil.getAuthName({
                  email: u,
                  socialUsername: s,
                  socialProvider: a,
                })
              : void 0,
          };
        },
      };
      function n1() {
        let t = (0, e._)([
          "\n  :host {\n    --connect-scroll--top-opacity: 0;\n    --connect-scroll--bottom-opacity: 0;\n  }\n\n  .balance-amount {\n    flex: 1;\n  }\n\n  .wallet-list {\n    scrollbar-width: none;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: opacity;\n    mask-image: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n      black 40px,\n      black calc(100% - 40px),\n      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n    );\n  }\n\n  .active-wallets {\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n  }\n\n  .active-wallets-box {\n    height: 330px;\n  }\n\n  .empty-wallet-list-box {\n    height: 400px;\n  }\n\n  .empty-box {\n    width: 100%;\n    padding: var(--wui-spacing-l);\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n  }\n\n  wui-separator {\n    margin: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;\n  }\n\n  .active-connection {\n    padding: var(--wui-spacing-xs);\n  }\n\n  .recent-connection {\n    padding: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;\n  }\n\n  @media (max-width: 430px) {\n    .active-wallets-box,\n    .empty-wallet-list-box {\n      height: auto;\n      max-height: clamp(360px, 470px, 80vh);\n    }\n  }\n",
        ]);
        return (
          (n1 = function () {
            return t;
          }),
          t
        );
      }
      let n5 = (0, b.css)(n1());
      function n2() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" .padding=',
          ' gap="l">\n        ',
          " ",
          " ",
          "\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (n2 = function () {
            return t;
          }),
          t
        );
      }
      function n6() {
        let t = (0, e._)([
          "\n        <wui-tabs\n          .onTabChange=",
          "\n          .activeTab=",
          "\n          localTabWidth=",
          "\n          .tabs=",
          "\n        ></wui-tabs>\n      ",
        ]);
        return (
          (n6 = function () {
            return t;
          }),
          t
        );
      }
      function n4() {
        let t = (0, e._)([
          '\n      <wui-flex alignItems="center" columnGap="3xs">\n        <wui-icon\n          name=',
          '\n          size="lg"\n        ></wui-icon>\n        <wui-text color="fg-200" variant="small-400"\n          >',
          '</wui-text\n        >\n        <wui-text\n          color="fg-100"\n          variant="small-400"\n          class="balance-amount"\n          data-testid="balance-amount"\n        >\n          ',
          '\n        </wui-text>\n        <wui-link\n          color="fg-200"\n          @click=',
          "\n          ?disabled=",
          '\n          data-testid="disconnect-all-button"\n        >\n          Disconnect All\n        </wui-link>\n      </wui-flex>\n    ',
        ]);
        return (
          (n4 = function () {
            return t;
          }),
          t
        );
      }
      function n7() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" class=',
          ' rowGap="s">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (n7 = function () {
            return t;
          }),
          t
        );
      }
      function n8() {
        let t = (0, e._)([
          '<wui-flex\n            flexDirection="column"\n            .padding=',
          '\n            class="active-wallets"\n          >\n            ',
          " ",
          "\n          </wui-flex>",
        ]);
        return (
          (n8 = function () {
            return t;
          }),
          t
        );
      }
      function n9() {
        let t = (0, e._)(["\n      ", "\n      ", "\n    "]);
        return (
          (n9 = function () {
            return t;
          }),
          t
        );
      }
      function it() {
        let t = (0, e._)(["<wui-separator></wui-separator>"]);
        return (
          (it = function () {
            return t;
          }),
          t
        );
      }
      function ie() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" .padding=',
          ">\n        <wui-active-profile-wallet-item\n          address=",
          "\n          alt=",
          "\n          .content=",
          "\n          .charsStart=",
          "\n          .charsEnd=",
          "\n          .icon=",
          "\n          .iconSize=",
          "\n          .iconBadge=",
          "\n          .iconBadgeSize=",
          "\n          imageSrc=",
          "\n          ?enableMoreButton=",
          "\n          @copy=",
          "\n          @disconnect=",
          "\n          @switch=",
          "\n          @externalLink=",
          "\n          @more=",
          '\n          data-testid="wui-active-profile-wallet-item"\n        ></wui-active-profile-wallet-item>\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (ie = function () {
            return t;
          }),
          t
        );
      }
      function ii() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" .padding=',
          ">\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (ii = function () {
            return t;
          }),
          t
        );
      }
      function io() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" .padding=',
          ' rowGap="xs">\n        <wui-text color="fg-200" variant="micro-500" data-testid="recently-connected-text"\n          >RECENTLY CONNECTED</wui-text\n        >\n        <wui-flex flexDirection="column" .padding=',
          ">\n          ",
          "\n        </wui-flex>\n      </wui-flex>\n    ",
        ]);
        return (
          (io = function () {
            return t;
          }),
          t
        );
      }
      function ir() {
        let t = (0, e._)(["<wui-separator></wui-separator>"]);
        return (
          (ir = function () {
            return t;
          }),
          t
        );
      }
      function il() {
        let t = (0, e._)([
          '\n            <wui-flex flexDirection="column">\n              ',
          "\n              <wui-inactive-profile-wallet-item\n                address=",
          "\n                alt=",
          "\n                buttonLabel=",
          "\n                buttonVariant=",
          "\n                rightIcon=",
          '\n                rightIconSize="sm"\n                class=',
          "\n                data-testid=",
          "\n                imageSrc=",
          "\n                .iconBadge=",
          "\n                .iconBadgeSize=",
          "\n                .icon=",
          "\n                .iconSize=",
          "\n                .loading=",
          "\n                .showBalance=",
          "\n                .charsStart=",
          "\n                .charsEnd=",
          "\n                @buttonClick=",
          "\n                @iconClick=",
          "\n              ></wui-inactive-profile-wallet-item>\n            </wui-flex>\n          ",
        ]);
        return (
          (il = function () {
            return t;
          }),
          t
        );
      }
      function ia() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        variant="icon"\n        iconVariant="overlay"\n        icon="plus"\n        iconSize="sm"\n        ?chevron=',
          "\n        @click=",
          '\n        data-testid="add-connection-button"\n      >\n        <wui-text variant="paragraph-500" color="fg-200">',
          "</wui-text>\n      </wui-list-item>\n    ",
        ]);
        return (
          (ia = function () {
            return t;
          }),
          t
        );
      }
      function is() {
        let t = (0, e._)([
          '\n      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">\n        <wui-flex\n          flexDirection="column"\n          alignItems="center"\n          justifyContent="center"\n          rowGap="s"\n          class="empty-box"\n        >\n          <wui-icon-box\n            size="lg"\n            icon="wallet"\n            background="gray"\n            iconColor="fg-200"\n            backgroundColor="glass-002"\n          ></wui-icon-box>\n\n          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="3xs">\n            <wui-text color="fg-100" variant="paragraph-500" data-testid="empty-state-text"\n              >No wallet connected</wui-text\n            >\n            <wui-text color="fg-200" variant="tiny-500" data-testid="empty-state-description"\n              >',
          '</wui-text\n            >\n          </wui-flex>\n\n          <wui-button\n            variant="neutral"\n            size="md"\n            @click=',
          '\n            data-testid="empty-state-button"\n          >\n            <wui-icon color="inherit" slot="iconLeft" name="plus"></wui-icon>\n            ',
          "\n          </wui-button>\n        </wui-flex>\n      </wui-flex>\n    ",
        ]);
        return (
          (is = function () {
            return t;
          }),
          t
        );
      }
      var ic = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let iu = {
          ADDRESS_DISPLAY: { START: 4, END: 6 },
          BADGE: { SIZE: "md", ICON: "lightbulb" },
          SCROLL_THRESHOLD: 50,
          OPACITY_RANGE: [0, 1],
        },
        id = { eip155: "ethereum", solana: "solana", bip122: "bitcoin" },
        ip = [
          { namespace: "eip155", icon: id.eip155, label: "EVM" },
          { namespace: "solana", icon: id.solana, label: "Solana" },
          { namespace: "bip122", icon: id.bip122, label: "Bitcoin" },
        ],
        ih = {
          eip155: {
            title: "Add EVM Wallet",
            description: "Add your first EVM wallet",
          },
          solana: {
            title: "Add Solana Wallet",
            description: "Add your first Solana wallet",
          },
          bip122: {
            title: "Add Bitcoin Wallet",
            description: "Add your first Bitcoin wallet",
          },
        },
        iw = class extends nC.LitElement {
          disconnectedCallback() {
            var t, e, n;
            this.unsubscribers.forEach((t) => t()),
              null == (t = this.resizeObserver) || t.disconnect(),
              null == (e = this.tabsResizeObserver) || e.disconnect(),
              this.removeScrollListener(),
              null == (n = this.chainListener) || n.call(this);
          }
          firstUpdated() {
            var t, e;
            let n =
                null == (t = this.shadowRoot)
                  ? void 0
                  : t.querySelector(".wallet-list"),
              i =
                null == (e = this.shadowRoot)
                  ? void 0
                  : e.querySelector("wui-tabs");
            if (!n) return;
            let o = () => this.updateScrollOpacity(n);
            if (
              (requestAnimationFrame(o),
              n.addEventListener("scroll", o),
              (this.resizeObserver = new ResizeObserver(o)),
              this.resizeObserver.observe(n),
              o(),
              i)
            ) {
              let t = () => {
                let t = ip.filter((t) =>
                  this.namespaces.includes(t.namespace)
                ).length;
                if (t > 1) {
                  var e;
                  let n =
                    null == (e = this.getBoundingClientRect())
                      ? void 0
                      : e.width;
                  (this.tabWidth = "".concat((n - 32 - 8) / t, "px")),
                    this.requestUpdate();
                }
              };
              (this.tabsResizeObserver = new ResizeObserver(t)),
                this.tabsResizeObserver.observe(this),
                t();
            }
          }
          render() {
            let t = this.namespace;
            if (!t) throw Error("Namespace is not set");
            return (0, i.html)(
              n2(),
              ["0", "l", "l", "l"],
              this.renderTabs(),
              this.renderHeader(t),
              this.renderConnections(t),
              this.renderAddConnectionButton(t)
            );
          }
          renderTabs() {
            let t = ip.filter((t) => this.namespaces.includes(t.namespace));
            return t.length > 1
              ? (0, i.html)(
                  n6(),
                  (t) => this.handleTabChange(t),
                  this.currentTab,
                  this.tabWidth,
                  t
                )
              : null;
          }
          renderHeader(t) {
            var e;
            let n =
              this.getActiveConnections(t).flatMap((t) => {
                let { accounts: e } = t;
                return e;
              }).length + +!!this.caipAddress;
            return (0, i.html)(
              n4(),
              null != (e = id[t]) ? e : id.eip155,
              n > 1 ? "Wallets" : "Wallet",
              n,
              () => tE.ConnectionController.disconnect({ namespace: t }),
              !this.hasAnyConnections(t)
            );
          }
          renderConnections(t) {
            let e = this.hasAnyConnections(t);
            return (0, i.html)(
              n7(),
              (0, ny.classMap)({
                "wallet-list": !0,
                "active-wallets-box": e,
                "empty-wallet-list-box": !e,
              }),
              e ? this.renderActiveConnections(t) : this.renderEmptyState(t)
            );
          }
          renderActiveConnections(t) {
            let e = this.getActiveConnections(t),
              n = this.activeConnectorIds[t],
              o = this.getPlainAddress();
            return (0, i.html)(
              n9(),
              o || n || e.length > 0
                ? (0, i.html)(
                    n8(),
                    ["l", "0", "xs", "0"],
                    this.renderActiveProfile(t),
                    this.renderActiveConnectionsList(t)
                  )
                : null,
              this.renderRecentConnections(t)
            );
          }
          renderActiveProfile(t) {
            let e = this.activeConnectorIds[t];
            if (!e) return null;
            let { connections: n } =
                nk.ConnectionControllerUtil.getConnectionsData(t),
              o = tS.ConnectorController.getConnectorById(e),
              r = c.AssetUtil.getConnectorImage(o),
              l = this.getPlainAddress();
            if (!l) return null;
            let a = t === tk.ConstantsUtil.CHAIN.BITCOIN,
              s = n3.getAuthData({ connectorId: e, accounts: [] }),
              u =
                this.getActiveConnections(t).flatMap((t) => t.accounts).length >
                0,
              d = n.find((t) => t.connectorId === e),
              p =
                null == d
                  ? void 0
                  : d.accounts.filter(
                      (t) => !n0.HelpersUtil.isLowerCaseMatch(t.address, l)
                    );
            return (0, i.html)(
              ie(),
              ["0", "l", "0", "l"],
              l,
              null == o ? void 0 : o.name,
              this.getProfileContent({
                address: l,
                connections: n,
                connectorId: e,
                namespace: t,
              }),
              iu.ADDRESS_DISPLAY.START,
              iu.ADDRESS_DISPLAY.END,
              s.icon,
              s.iconSize,
              this.isSmartAccount(l) ? iu.BADGE.ICON : void 0,
              this.isSmartAccount(l) ? iu.BADGE.SIZE : void 0,
              r,
              s.isAuth,
              () => this.handleCopyAddress(l),
              () => this.handleDisconnect(t, { id: e }),
              () => {
                a &&
                  d &&
                  (null == p ? void 0 : p[0]) &&
                  this.handleSwitchWallet(d, p[0].address, t);
              },
              () => this.handleExternalLink(l),
              () => this.handleMore(),
              u ? (0, i.html)(it()) : null
            );
          }
          renderActiveConnectionsList(t) {
            let e = this.getActiveConnections(t);
            return 0 === e.length
              ? null
              : (0, i.html)(
                  ii(),
                  ["0", "xs", "0", "xs"],
                  this.renderConnectionList(e, !1, t)
                );
          }
          renderRecentConnections(t) {
            let { recentConnections: e } =
              nk.ConnectionControllerUtil.getConnectionsData(t);
            return 0 === e.flatMap((t) => t.accounts).length
              ? null
              : (0, i.html)(
                  io(),
                  ["0", "xs", "0", "xs"],
                  ["0", "xs", "0", "xs"],
                  this.renderConnectionList(e, !0, t)
                );
          }
          renderConnectionList(t, e, n) {
            return t
              .filter((t) => t.accounts.length > 0)
              .map((t, o) => {
                var r;
                let l = tS.ConnectorController.getConnectorById(t.connectorId),
                  a = null != (r = c.AssetUtil.getConnectorImage(l)) ? r : "",
                  s = n3.getAuthData(t);
                return t.accounts.map((r, l) => {
                  let c = this.isAccountLoading(t.connectorId, r.address);
                  return (0, i.html)(
                    il(),
                    0 !== o || 0 !== l ? (0, i.html)(ir()) : null,
                    r.address,
                    t.connectorId,
                    e ? "Connect" : "Switch",
                    e ? "neutral" : "accent",
                    e ? "bin" : "off",
                    e ? "recent-connection" : "active-connection",
                    e ? "recent-connection" : "active-connection",
                    a,
                    this.isSmartAccount(r.address) ? iu.BADGE.ICON : void 0,
                    this.isSmartAccount(r.address) ? iu.BADGE.SIZE : void 0,
                    s.icon,
                    s.iconSize,
                    c,
                    !1,
                    iu.ADDRESS_DISPLAY.START,
                    iu.ADDRESS_DISPLAY.END,
                    () => this.handleSwitchWallet(t, r.address, n),
                    () =>
                      this.handleWalletAction({
                        connection: t,
                        address: r.address,
                        isRecentConnection: e,
                        namespace: n,
                      })
                  );
                });
              });
          }
          renderAddConnectionButton(t) {
            if (
              (!this.isMultiWalletEnabled() && this.caipAddress) ||
              !this.hasAnyConnections(t)
            )
              return null;
            let { title: e } = this.getChainLabelInfo(t);
            return (0, i.html)(ia(), !0, () => this.handleAddConnection(t), e);
          }
          renderEmptyState(t) {
            let { title: e, description: n } = this.getChainLabelInfo(t);
            return (0, i.html)(is(), n, () => this.handleAddConnection(t), e);
          }
          handleTabChange(t) {
            let e = this.namespaces[t];
            if (e) {
              var n, i, o;
              null == (n = this.chainListener) || n.call(this),
                (this.currentTab = this.namespaces.indexOf(e)),
                (this.namespace = e),
                (this.caipAddress =
                  null == (i = u.ChainController.getAccountData(e))
                    ? void 0
                    : i.caipAddress),
                (this.profileName =
                  null == (o = u.ChainController.getAccountData(e))
                    ? void 0
                    : o.profileName),
                (this.chainListener = u.ChainController.subscribeChainProp(
                  "accountState",
                  (t) => {
                    this.caipAddress = null == t ? void 0 : t.caipAddress;
                  },
                  e
                ));
            }
          }
          async handleSwitchWallet(t, e, n) {
            try {
              (this.isSwitching = !0),
                (this.lastSelectedConnectorId = t.connectorId),
                (this.lastSelectedAddress = e),
                await tE.ConnectionController.switchConnection({
                  connection: t,
                  address: e,
                  namespace: n,
                  closeModalOnConnect: !1,
                  onChange(t) {
                    let { hasSwitchedAccount: e, hasSwitchedWallet: n } = t;
                    n
                      ? tT.SnackController.showSuccess("Wallet switched")
                      : e && tT.SnackController.showSuccess("Account switched");
                  },
                });
            } catch (t) {
              tT.SnackController.showError("Failed to switch wallet");
            } finally {
              this.isSwitching = !1;
            }
          }
          handleWalletAction(t) {
            let {
              connection: e,
              address: n,
              isRecentConnection: i,
              namespace: o,
            } = t;
            i
              ? (tB.StorageUtil.deleteAddressFromConnection({
                  connectorId: e.connectorId,
                  address: n,
                  namespace: o,
                }),
                tE.ConnectionController.syncStorageConnections(),
                tT.SnackController.showSuccess("Wallet deleted"))
              : this.handleDisconnect(o, { id: e.connectorId });
          }
          async handleDisconnect(t, e) {
            let { id: n } = e;
            try {
              await tE.ConnectionController.disconnect({ id: n, namespace: t }),
                tT.SnackController.showSuccess("Wallet disconnected");
            } catch (t) {
              tT.SnackController.showError("Failed to disconnect wallet");
            }
          }
          handleCopyAddress(t) {
            d.CoreHelperUtil.copyToClopboard(t),
              tT.SnackController.showSuccess("Address copied");
          }
          handleMore() {
            tR.RouterController.push("AccountSettings");
          }
          handleExternalLink(t) {
            var e, n;
            let i =
              null == (n = this.caipNetwork) || null == (e = n.blockExplorers)
                ? void 0
                : e.default.url;
            i &&
              d.CoreHelperUtil.openHref(
                "".concat(i, "/address/").concat(t),
                "_blank"
              );
          }
          handleAddConnection(t) {
            tS.ConnectorController.setFilterByNamespace(t),
              tR.RouterController.push("Connect");
          }
          getChainLabelInfo(t) {
            var e;
            return null != (e = ih[t])
              ? e
              : { title: "Add Wallet", description: "Add your first wallet" };
          }
          isSmartAccount(t) {
            var e, n;
            if (!this.namespace) return !1;
            let i =
              null == (n = this.user) || null == (e = n.accounts)
                ? void 0
                : e.find((t) => "smartAccount" === t.type);
            return !!i && !!t && n0.HelpersUtil.isLowerCaseMatch(i.address, t);
          }
          getPlainAddress() {
            return this.caipAddress
              ? d.CoreHelperUtil.getPlainAddress(this.caipAddress)
              : void 0;
          }
          getActiveConnections(t) {
            let e = this.activeConnectorIds[t],
              { connections: n } =
                nk.ConnectionControllerUtil.getConnectionsData(t),
              [i] = n.filter((t) =>
                n0.HelpersUtil.isLowerCaseMatch(t.connectorId, e)
              );
            if (!e) return n;
            let o = t === tk.ConstantsUtil.CHAIN.BITCOIN,
              { address: r } = this.caipAddress
                ? nx.ParseUtil.parseCaipAddress(this.caipAddress)
                : {},
              l = [...(r ? [r] : [])];
            return (
              o && i && (l = i.accounts.map((t) => t.address) || []),
              nk.ConnectionControllerUtil.excludeConnectorAddressFromConnections(
                { connectorId: e, addresses: l, connections: n }
              )
            );
          }
          hasAnyConnections(t) {
            let e = this.getActiveConnections(t),
              { recentConnections: n } =
                nk.ConnectionControllerUtil.getConnectionsData(t);
            return !!this.caipAddress || e.length > 0 || n.length > 0;
          }
          isAccountLoading(t, e) {
            return (
              n0.HelpersUtil.isLowerCaseMatch(
                this.lastSelectedConnectorId,
                t
              ) &&
              n0.HelpersUtil.isLowerCaseMatch(this.lastSelectedAddress, e) &&
              this.isSwitching
            );
          }
          getProfileContent(t) {
            let {
                address: e,
                connections: n,
                connectorId: i,
                namespace: o,
              } = t,
              [r] = n.filter((t) =>
                n0.HelpersUtil.isLowerCaseMatch(t.connectorId, i)
              );
            if (
              o === tk.ConstantsUtil.CHAIN.BITCOIN &&
              (null == r
                ? void 0
                : r.accounts.every((t) => "string" == typeof t.type))
            )
              return this.getBitcoinProfileContent(r.accounts, e);
            let l = n3.getAuthData({ connectorId: i, accounts: [] });
            return [
              {
                address: e,
                tagLabel: "Active",
                tagVariant: "success",
                enableButton: !0,
                profileName: this.profileName,
                buttonType: "disconnect",
                buttonLabel: "Disconnect",
                buttonVariant: "neutral",
                ...(l.isAuth
                  ? {
                      description: this.isSmartAccount(e)
                        ? "Smart Account"
                        : "EOA Account",
                    }
                  : {}),
              },
            ];
          }
          getBitcoinProfileContent(t, e) {
            let n = t.length > 1,
              i = this.getPlainAddress();
            return t.map((t) => {
              let o = n0.HelpersUtil.isLowerCaseMatch(t.address, i),
                r = "PAYMENT";
              return (
                "ordinal" === t.type && (r = "ORDINALS"),
                {
                  address: t.address,
                  tagLabel: n0.HelpersUtil.isLowerCaseMatch(t.address, e)
                    ? "Active"
                    : void 0,
                  tagVariant: n0.HelpersUtil.isLowerCaseMatch(t.address, e)
                    ? "success"
                    : void 0,
                  enableButton: !0,
                  ...(n
                    ? {
                        label: r,
                        alignItems: "flex-end",
                        buttonType: o ? "disconnect" : "switch",
                        buttonLabel: o ? "Disconnect" : "Switch",
                        buttonVariant: o ? "neutral" : "accent",
                      }
                    : {
                        alignItems: "center",
                        buttonType: "disconnect",
                        buttonLabel: "Disconnect",
                        buttonVariant: "neutral",
                      }),
                }
              );
            });
          }
          removeScrollListener() {
            var t;
            let e =
              null == (t = this.shadowRoot)
                ? void 0
                : t.querySelector(".wallet-list");
            e &&
              e.removeEventListener("scroll", () =>
                this.handleConnectListScroll()
              );
          }
          handleConnectListScroll() {
            var t;
            let e =
              null == (t = this.shadowRoot)
                ? void 0
                : t.querySelector(".wallet-list");
            e && this.updateScrollOpacity(e);
          }
          isMultiWalletEnabled() {
            var t;
            return !!(null == (t = this.remoteFeatures)
              ? void 0
              : t.multiWallet);
          }
          updateScrollOpacity(t) {
            t.style.setProperty(
              "--connect-scroll--top-opacity",
              nE.MathUtil.interpolate(
                [0, iu.SCROLL_THRESHOLD],
                iu.OPACITY_RANGE,
                t.scrollTop
              ).toString()
            ),
              t.style.setProperty(
                "--connect-scroll--bottom-opacity",
                nE.MathUtil.interpolate(
                  [0, iu.SCROLL_THRESHOLD],
                  iu.OPACITY_RANGE,
                  t.scrollHeight - t.scrollTop - t.offsetHeight
                ).toString()
              );
          }
          constructor() {
            var t, e;
            super(),
              (this.unsubscribers = []),
              (this.currentTab = 0),
              (this.namespace = u.ChainController.state.activeChain),
              (this.namespaces = Array.from(
                u.ChainController.state.chains.keys()
              )),
              (this.caipAddress = void 0),
              (this.profileName = void 0),
              (this.activeConnectorIds =
                tS.ConnectorController.state.activeConnectorIds),
              (this.lastSelectedAddress = ""),
              (this.lastSelectedConnectorId = ""),
              (this.isSwitching = !1),
              (this.caipNetwork = u.ChainController.state.activeCaipNetwork),
              (this.user = a.AccountController.state.user),
              (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
              (this.tabWidth = ""),
              (this.currentTab = this.namespace
                ? this.namespaces.indexOf(this.namespace)
                : 0),
              (this.caipAddress =
                null == (t = u.ChainController.getAccountData(this.namespace))
                  ? void 0
                  : t.caipAddress),
              (this.profileName =
                null == (e = u.ChainController.getAccountData(this.namespace))
                  ? void 0
                  : e.profileName),
              this.unsubscribers.push(
                tE.ConnectionController.subscribeKey("connections", () =>
                  this.requestUpdate()
                ),
                tE.ConnectionController.subscribeKey("recentConnections", () =>
                  this.requestUpdate()
                ),
                tS.ConnectorController.subscribeKey(
                  "activeConnectorIds",
                  (t) => {
                    this.activeConnectorIds = t;
                  }
                ),
                u.ChainController.subscribeKey(
                  "activeCaipNetwork",
                  (t) => (this.caipNetwork = t)
                ),
                a.AccountController.subscribeKey(
                  "user",
                  (t) => (this.user = t)
                ),
                h.OptionsController.subscribeKey(
                  "remoteFeatures",
                  (t) => (this.remoteFeatures = t)
                )
              ),
              (this.chainListener = u.ChainController.subscribeChainProp(
                "accountState",
                (t) => {
                  (this.caipAddress = null == t ? void 0 : t.caipAddress),
                    (this.profileName = null == t ? void 0 : t.profileName);
                },
                this.namespace
              ));
          }
        };
      (iw.styles = n5),
        ic([(0, r.state)()], iw.prototype, "currentTab", void 0),
        ic([(0, r.state)()], iw.prototype, "namespace", void 0),
        ic([(0, r.state)()], iw.prototype, "namespaces", void 0),
        ic([(0, r.state)()], iw.prototype, "caipAddress", void 0),
        ic([(0, r.state)()], iw.prototype, "profileName", void 0),
        ic([(0, r.state)()], iw.prototype, "activeConnectorIds", void 0),
        ic([(0, r.state)()], iw.prototype, "lastSelectedAddress", void 0),
        ic([(0, r.state)()], iw.prototype, "lastSelectedConnectorId", void 0),
        ic([(0, r.state)()], iw.prototype, "isSwitching", void 0),
        ic([(0, r.state)()], iw.prototype, "caipNetwork", void 0),
        ic([(0, r.state)()], iw.prototype, "user", void 0),
        ic([(0, r.state)()], iw.prototype, "remoteFeatures", void 0),
        ic([(0, r.state)()], iw.prototype, "tabWidth", void 0),
        (iw = ic([(0, w.customElement)("w3m-profile-wallets-view")], iw)),
        t.s({ W3mAllWalletsView: () => oA }, 747679);
      var im = n,
        ig = n,
        ib = n;
      t.i(17696);
      var iv = t.i(930780);
      function iC() {
        let t = (0, e._)([
          "\n  :host {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  label {\n    position: relative;\n    display: inline-block;\n    width: 32px;\n    height: 22px;\n  }\n\n  input {\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n\n  span {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--wui-color-blue-100);\n    border-width: 1px;\n    border-style: solid;\n    border-color: var(--wui-color-gray-glass-002);\n    border-radius: 999px;\n    transition:\n      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),\n      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);\n    will-change: background-color, border-color;\n  }\n\n  span:before {\n    position: absolute;\n    content: '';\n    height: 16px;\n    width: 16px;\n    left: 3px;\n    top: 2px;\n    background-color: var(--wui-color-inverse-100);\n    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);\n    will-change: transform;\n    border-radius: 50%;\n  }\n\n  input:checked + span {\n    border-color: var(--wui-color-gray-glass-005);\n    background-color: var(--wui-color-blue-100);\n  }\n\n  input:not(:checked) + span {\n    background-color: var(--wui-color-gray-glass-010);\n  }\n\n  input:checked + span:before {\n    transform: translateX(calc(100% - 7px));\n  }\n",
        ]);
        return (
          (iC = function () {
            return t;
          }),
          t
        );
      }
      let iy = (0, b.css)(iC());
      function ix() {
        let t = (0, e._)([
          "\n      <label>\n        <input\n          ",
          '\n          type="checkbox"\n          ?checked=',
          "\n          @change=",
          "\n        />\n        <span></span>\n      </label>\n    ",
        ]);
        return (
          (ix = function () {
            return t;
          }),
          t
        );
      }
      var ik = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let iE = class extends ib.LitElement {
        render() {
          return (0, i.html)(
            ix(),
            (0, iv.ref)(this.inputElementRef),
            (0, l.ifDefined)(this.checked),
            this.dispatchChangeEvent.bind(this)
          );
        }
        dispatchChangeEvent() {
          var t;
          this.dispatchEvent(
            new CustomEvent("switchChange", {
              detail:
                null == (t = this.inputElementRef.value) ? void 0 : t.checked,
              bubbles: !0,
              composed: !0,
            })
          );
        }
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, iv.createRef)()),
            (this.checked = void 0);
        }
      };
      function iS() {
        let t = (0, e._)([
          "\n  :host {\n    height: 100%;\n  }\n\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: var(--wui-spacing-1xs);\n    padding: var(--wui-spacing-xs) var(--wui-spacing-s);\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);\n    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: background-color;\n    cursor: pointer;\n  }\n\n  wui-switch {\n    pointer-events: none;\n  }\n",
        ]);
        return (
          (iS = function () {
            return t;
          }),
          t
        );
      }
      (iE.styles = [m.resetStyles, m.elementStyles, m.colorStyles, iy]),
        ik(
          [(0, o.property)({ type: Boolean })],
          iE.prototype,
          "checked",
          void 0
        ),
        (iE = ik([(0, w.customElement)("wui-switch")], iE));
      let iA = (0, b.css)(iS());
      function iR() {
        let t = (0, e._)([
          '\n      <button>\n        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>\n        <wui-switch ?checked=',
          "></wui-switch>\n      </button>\n    ",
        ]);
        return (
          (iR = function () {
            return t;
          }),
          t
        );
      }
      var iI = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let iT = class extends ig.LitElement {
        render() {
          return (0, i.html)(iR(), (0, l.ifDefined)(this.checked));
        }
        constructor() {
          super(...arguments), (this.checked = void 0);
        }
      };
      (iT.styles = [m.resetStyles, m.elementStyles, iA]),
        iI(
          [(0, o.property)({ type: Boolean })],
          iT.prototype,
          "checked",
          void 0
        ),
        (iT = iI([(0, w.customElement)("wui-certified-switch")], iT));
      var iO = n,
        i_ = n;
      function iN() {
        let t = (0, e._)([
          "\n  button {\n    background-color: var(--wui-color-fg-300);\n    border-radius: var(--wui-border-radius-4xs);\n    width: 16px;\n    height: 16px;\n  }\n\n  button:disabled {\n    background-color: var(--wui-color-bg-300);\n  }\n\n  wui-icon {\n    color: var(--wui-color-bg-200) !important;\n  }\n\n  button:focus-visible {\n    background-color: var(--wui-color-fg-250);\n    border: 1px solid var(--wui-color-accent-100);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled {\n      background-color: var(--wui-color-fg-250);\n    }\n\n    button:active:enabled {\n      background-color: var(--wui-color-fg-225);\n    }\n  }\n",
        ]);
        return (
          (iN = function () {
            return t;
          }),
          t
        );
      }
      let iU = (0, b.css)(iN());
      function iD() {
        let t = (0, e._)([
          '\n      <button>\n        <wui-icon color="inherit" size="xxs" name=',
          "></wui-icon>\n      </button>\n    ",
        ]);
        return (
          (iD = function () {
            return t;
          }),
          t
        );
      }
      var iW = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let iP = class extends i_.LitElement {
        render() {
          return (0, i.html)(iD(), this.icon);
        }
        constructor() {
          super(...arguments), (this.icon = "copy");
        }
      };
      function iL() {
        let t = (0, e._)([
          "\n  :host {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n  }\n",
        ]);
        return (
          (iL = function () {
            return t;
          }),
          t
        );
      }
      (iP.styles = [m.resetStyles, m.elementStyles, iU]),
        iW([(0, o.property)()], iP.prototype, "icon", void 0),
        (iP = iW([(0, w.customElement)("wui-input-element")], iP)),
        t.i(914974);
      let ij = (0, b.css)(iL());
      function iB() {
        let t = (0, e._)([
          "\n      <wui-input-text\n        ",
          '\n        placeholder="Search wallet"\n        icon="search"\n        type="search"\n        enterKeyHint="search"\n        size="sm"\n      >\n        <wui-input-element @click=',
          ' icon="close"></wui-input-element>\n      </wui-input-text>\n    ',
        ]);
        return (
          (iB = function () {
            return t;
          }),
          t
        );
      }
      let iz = class extends iO.LitElement {
        render() {
          return (0, i.html)(
            iB(),
            (0, iv.ref)(this.inputComponentRef),
            this.clearValue
          );
        }
        clearValue() {
          let t = this.inputComponentRef.value,
            e = null == t ? void 0 : t.inputElementRef.value;
          e && ((e.value = ""), e.focus(), e.dispatchEvent(new Event("input")));
        }
        constructor() {
          super(...arguments), (this.inputComponentRef = (0, iv.createRef)());
        }
      };
      (iz.styles = [m.resetStyles, ij]),
        (iz = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("wui-search-bar")], iz));
      var iH = n,
        iF = t.i(69393),
        iM = n,
        iV = t.i(21321);
      function iK() {
        let t = (0, e._)([
          "\n  :host {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 104px;\n    row-gap: var(--wui-spacing-xs);\n    padding: var(--wui-spacing-xs) 10px;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);\n    position: relative;\n  }\n\n  wui-shimmer[data-type='network'] {\n    border: none;\n    -webkit-clip-path: var(--wui-path-network);\n    clip-path: var(--wui-path-network);\n  }\n\n  svg {\n    position: absolute;\n    width: 48px;\n    height: 54px;\n    z-index: 1;\n  }\n\n  svg > path {\n    stroke: var(--wui-color-gray-glass-010);\n    stroke-width: 1px;\n  }\n\n  @media (max-width: 350px) {\n    :host {\n      width: 100%;\n    }\n  }\n",
        ]);
        return (
          (iK = function () {
            return t;
          }),
          t
        );
      }
      t.i(485910);
      let iG = (0, b.css)(iK());
      function iq() {
        let t = (0, e._)([
          "\n      ",
          '\n      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>\n    ',
        ]);
        return (
          (iq = function () {
            return t;
          }),
          t
        );
      }
      function iY() {
        let t = (0, e._)([
          " <wui-shimmer\n          data-type=",
          '\n          width="48px"\n          height="54px"\n          borderRadius="xs"\n        ></wui-shimmer>\n        ',
          "",
        ]);
        return (
          (iY = function () {
            return t;
          }),
          t
        );
      }
      function iX() {
        let t = (0, e._)([
          '<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>',
        ]);
        return (
          (iX = function () {
            return t;
          }),
          t
        );
      }
      var iQ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let iZ = class extends iM.LitElement {
        render() {
          return (0, i.html)(iq(), this.shimmerTemplate());
        }
        shimmerTemplate() {
          return "network" === this.type
            ? (0, i.html)(iY(), this.type, iV.networkSvgMd)
            : (0, i.html)(iX());
        }
        constructor() {
          super(...arguments), (this.type = "wallet");
        }
      };
      (iZ.styles = [m.resetStyles, m.elementStyles, iG]),
        iQ([(0, o.property)()], iZ.prototype, "type", void 0),
        (iZ = iQ([(0, w.customElement)("wui-card-select-loader")], iZ));
      var iJ = n;
      function i$() {
        let t = (0, e._)([
          "\n  :host {\n    display: grid;\n    width: inherit;\n    height: inherit;\n  }\n",
        ]);
        return (
          (i$ = function () {
            return t;
          }),
          t
        );
      }
      let i0 = (0, b.css)(i$());
      function i3() {
        let t = (0, e._)(["<slot></slot>"]);
        return (
          (i3 = function () {
            return t;
          }),
          t
        );
      }
      var i1 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let i5 = class extends iJ.LitElement {
        render() {
          return (
            (this.style.cssText = "\n      grid-template-rows: "
              .concat(this.gridTemplateRows, ";\n      grid-template-columns: ")
              .concat(this.gridTemplateColumns, ";\n      justify-items: ")
              .concat(this.justifyItems, ";\n      align-items: ")
              .concat(this.alignItems, ";\n      justify-content: ")
              .concat(this.justifyContent, ";\n      align-content: ")
              .concat(this.alignContent, ";\n      column-gap: ")
              .concat(
                this.columnGap &&
                  "var(--wui-spacing-".concat(this.columnGap, ")"),
                ";\n      row-gap: "
              )
              .concat(
                this.rowGap && "var(--wui-spacing-".concat(this.rowGap, ")"),
                ";\n      gap: "
              )
              .concat(
                this.gap && "var(--wui-spacing-".concat(this.gap, ")"),
                ";\n      padding-top: "
              )
              .concat(
                this.padding &&
                  g.UiHelperUtil.getSpacingStyles(this.padding, 0),
                ";\n      padding-right: "
              )
              .concat(
                this.padding &&
                  g.UiHelperUtil.getSpacingStyles(this.padding, 1),
                ";\n      padding-bottom: "
              )
              .concat(
                this.padding &&
                  g.UiHelperUtil.getSpacingStyles(this.padding, 2),
                ";\n      padding-left: "
              )
              .concat(
                this.padding &&
                  g.UiHelperUtil.getSpacingStyles(this.padding, 3),
                ";\n      margin-top: "
              )
              .concat(
                this.margin && g.UiHelperUtil.getSpacingStyles(this.margin, 0),
                ";\n      margin-right: "
              )
              .concat(
                this.margin && g.UiHelperUtil.getSpacingStyles(this.margin, 1),
                ";\n      margin-bottom: "
              )
              .concat(
                this.margin && g.UiHelperUtil.getSpacingStyles(this.margin, 2),
                ";\n      margin-left: "
              )
              .concat(
                this.margin && g.UiHelperUtil.getSpacingStyles(this.margin, 3),
                ";\n    "
              )),
            (0, i.html)(i3())
          );
        }
      };
      (i5.styles = [m.resetStyles, i0]),
        i1([(0, o.property)()], i5.prototype, "gridTemplateRows", void 0),
        i1([(0, o.property)()], i5.prototype, "gridTemplateColumns", void 0),
        i1([(0, o.property)()], i5.prototype, "justifyItems", void 0),
        i1([(0, o.property)()], i5.prototype, "alignItems", void 0),
        i1([(0, o.property)()], i5.prototype, "justifyContent", void 0),
        i1([(0, o.property)()], i5.prototype, "alignContent", void 0),
        i1([(0, o.property)()], i5.prototype, "columnGap", void 0),
        i1([(0, o.property)()], i5.prototype, "rowGap", void 0),
        i1([(0, o.property)()], i5.prototype, "gap", void 0),
        i1([(0, o.property)()], i5.prototype, "padding", void 0),
        i1([(0, o.property)()], i5.prototype, "margin", void 0),
        (i5 = i1([(0, w.customElement)("wui-grid")], i5));
      var i2 = t.i(46416),
        i6 = n;
      function i4() {
        let t = (0, e._)([
          "\n  button {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: 104px;\n    row-gap: var(--wui-spacing-xs);\n    padding: var(--wui-spacing-s) var(--wui-spacing-0);\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);\n    transition:\n      color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: background-color, color, border-radius;\n    outline: none;\n    border: none;\n  }\n\n  button > wui-flex > wui-text {\n    color: var(--wui-color-fg-100);\n    max-width: 86px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    justify-content: center;\n  }\n\n  button > wui-flex > wui-text.certified {\n    max-width: 66px;\n  }\n\n  button:hover:enabled {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  button:disabled > wui-flex > wui-text {\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  [data-selected='true'] {\n    background-color: var(--wui-color-accent-glass-020);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    [data-selected='true']:hover:enabled {\n      background-color: var(--wui-color-accent-glass-015);\n    }\n  }\n\n  [data-selected='true']:active:enabled {\n    background-color: var(--wui-color-accent-glass-010);\n  }\n\n  @media (max-width: 350px) {\n    button {\n      width: 100%;\n    }\n  }\n",
        ]);
        return (
          (i4 = function () {
            return t;
          }),
          t
        );
      }
      t.i(73802), t.i(714126);
      let i7 = (0, b.css)(i4());
      function i8() {
        let t = (0, e._)([
          '<wui-icon size="sm" name="walletConnectBrown"></wui-icon>',
        ]);
        return (
          (i8 = function () {
            return t;
          }),
          t
        );
      }
      function i9() {
        let t = (0, e._)([
          "\n      <button>\n        ",
          '\n        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">\n          <wui-text\n            variant="tiny-500"\n            color="inherit"\n            class=',
          "\n            >",
          "</wui-text\n          >\n          ",
          "\n        </wui-flex>\n      </button>\n    ",
        ]);
        return (
          (i9 = function () {
            return t;
          }),
          t
        );
      }
      function ot() {
        let t = (0, e._)([
          '\n      <wui-wallet-image\n        size="md"\n        imageSrc=',
          "\n        name=",
          "\n        .installed=",
          '\n        badgeSize="sm"\n      >\n      </wui-wallet-image>\n    ',
        ]);
        return (
          (ot = function () {
            return t;
          }),
          t
        );
      }
      function oe() {
        let t = (0, e._)([
          '<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>',
        ]);
        return (
          (oe = function () {
            return t;
          }),
          t
        );
      }
      var on = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let oi = class extends i6.LitElement {
        firstUpdated() {
          this.observer.observe(this);
        }
        disconnectedCallback() {
          this.observer.disconnect();
        }
        render() {
          var t, e;
          let n =
            (null == (t = this.wallet) ? void 0 : t.badge_type) === "certified";
          return (0, i.html)(
            i9(),
            this.imageTemplate(),
            (0, l.ifDefined)(n ? "certified" : void 0),
            null == (e = this.wallet) ? void 0 : e.name,
            n ? (0, i.html)(i8()) : null
          );
        }
        imageTemplate() {
          var t, e;
          return (this.visible || this.imageSrc) && !this.imageLoading
            ? (0, i.html)(
                ot(),
                (0, l.ifDefined)(this.imageSrc),
                null == (t = this.wallet) ? void 0 : t.name,
                null == (e = this.wallet) ? void 0 : e.installed
              )
            : this.shimmerTemplate();
        }
        shimmerTemplate() {
          return (0, i.html)(oe());
        }
        async fetchImageSrc() {
          this.wallet &&
            ((this.imageSrc = c.AssetUtil.getWalletImage(this.wallet)),
            this.imageSrc ||
              ((this.imageLoading = !0),
              (this.imageSrc = await c.AssetUtil.fetchWalletImage(
                this.wallet.image_id
              )),
              (this.imageLoading = !1)));
        }
        constructor() {
          super(),
            (this.observer = new IntersectionObserver(() => void 0)),
            (this.visible = !1),
            (this.imageSrc = void 0),
            (this.imageLoading = !1),
            (this.wallet = void 0),
            (this.observer = new IntersectionObserver(
              (t) => {
                t.forEach((t) => {
                  t.isIntersecting
                    ? ((this.visible = !0), this.fetchImageSrc())
                    : (this.visible = !1);
                });
              },
              { threshold: 0.01 }
            ));
        }
      };
      function oo() {
        let t = (0, e._)([
          "\n  wui-grid {\n    max-height: clamp(360px, 400px, 80vh);\n    overflow: scroll;\n    scrollbar-width: none;\n    grid-auto-rows: min-content;\n    grid-template-columns: repeat(auto-fill, 104px);\n  }\n\n  @media (max-width: 350px) {\n    wui-grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  wui-grid[data-scroll='false'] {\n    overflow: hidden;\n  }\n\n  wui-grid::-webkit-scrollbar {\n    display: none;\n  }\n\n  wui-loading-spinner {\n    padding-top: var(--wui-spacing-l);\n    padding-bottom: var(--wui-spacing-l);\n    justify-content: center;\n    grid-column: 1 / span 4;\n  }\n",
        ]);
        return (
          (oo = function () {
            return t;
          }),
          t
        );
      }
      (oi.styles = i7),
        on([(0, r.state)()], oi.prototype, "visible", void 0),
        on([(0, r.state)()], oi.prototype, "imageSrc", void 0),
        on([(0, r.state)()], oi.prototype, "imageLoading", void 0),
        on([(0, o.property)()], oi.prototype, "wallet", void 0),
        (oi = on([(0, w.customElement)("w3m-all-wallets-list-item")], oi));
      let or = (0, b.css)(oo());
      function ol() {
        let t = (0, e._)([
          "\n      <wui-grid\n        data-scroll=",
          "\n        .padding=",
          '\n        columnGap="xxs"\n        rowGap="l"\n        justifyContent="space-between"\n      >\n        ',
          "\n        ",
          "\n      </wui-grid>\n    ",
        ]);
        return (
          (ol = function () {
            return t;
          }),
          t
        );
      }
      function oa() {
        let t = (0, e._)([
          '\n        <wui-card-select-loader type="wallet" id=',
          "></wui-card-select-loader>\n      ",
        ]);
        return (
          (oa = function () {
            return t;
          }),
          t
        );
      }
      function os() {
        let t = (0, e._)([
          "\n        <w3m-all-wallets-list-item\n          @click=",
          "\n          .wallet=",
          "\n        ></w3m-all-wallets-list-item>\n      ",
        ]);
        return (
          (os = function () {
            return t;
          }),
          t
        );
      }
      var oc = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let ou = "local-paginator",
        od = class extends iH.LitElement {
          firstUpdated() {
            this.initialFetch(), this.createPaginationObserver();
          }
          disconnectedCallback() {
            var t;
            this.unsubscribe.forEach((t) => t()),
              null == (t = this.paginationObserver) || t.disconnect();
          }
          render() {
            return (0, i.html)(
              ol(),
              !this.loading,
              ["0", "s", "s", "s"],
              this.loading ? this.shimmerTemplate(16) : this.walletsTemplate(),
              this.paginationLoaderTemplate()
            );
          }
          async initialFetch() {
            var t;
            this.loading = !0;
            let e =
              null == (t = this.shadowRoot)
                ? void 0
                : t.querySelector("wui-grid");
            e &&
              (await iF.ApiController.fetchWalletsByPage({ page: 1 }),
              await e.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }).finished,
              (this.loading = !1),
              e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }));
          }
          shimmerTemplate(t, e) {
            return [...Array(t)].map(() =>
              (0, i.html)(oa(), (0, l.ifDefined)(e))
            );
          }
          walletsTemplate() {
            var t;
            let e =
              (null == (t = this.filteredWallets) ? void 0 : t.length) > 0
                ? d.CoreHelperUtil.uniqueBy(
                    [
                      ...this.featured,
                      ...this.recommended,
                      ...this.filteredWallets,
                    ],
                    "id"
                  )
                : d.CoreHelperUtil.uniqueBy(
                    [...this.featured, ...this.recommended, ...this.wallets],
                    "id"
                  );
            return i2.WalletUtil.markWalletsAsInstalled(e).map((t) =>
              (0, i.html)(os(), () => this.onConnectWallet(t), t)
            );
          }
          paginationLoaderTemplate() {
            let {
                wallets: t,
                recommended: e,
                featured: n,
                count: i,
              } = iF.ApiController.state,
              o = window.innerWidth < 352 ? 3 : 4,
              r = t.length + e.length,
              l = Math.ceil(r / o) * o - r + o;
            return ((l -= t.length ? n.length % o : 0), 0 === i && n.length > 0)
              ? null
              : 0 === i || [...n, ...t, ...e].length < i
              ? this.shimmerTemplate(l, ou)
              : null;
          }
          createPaginationObserver() {
            var t;
            let e =
              null == (t = this.shadowRoot)
                ? void 0
                : t.querySelector("#".concat(ou));
            e &&
              ((this.paginationObserver = new IntersectionObserver((t) => {
                let [e] = t;
                if ((null == e ? void 0 : e.isIntersecting) && !this.loading) {
                  let {
                    page: t,
                    count: e,
                    wallets: n,
                  } = iF.ApiController.state;
                  n.length < e &&
                    iF.ApiController.fetchWalletsByPage({ page: t + 1 });
                }
              })),
              this.paginationObserver.observe(e));
          }
          onConnectWallet(t) {
            tS.ConnectorController.selectWalletConnector(t);
          }
          constructor() {
            super(),
              (this.unsubscribe = []),
              (this.paginationObserver = void 0),
              (this.loading = !iF.ApiController.state.wallets.length),
              (this.wallets = iF.ApiController.state.wallets),
              (this.recommended = iF.ApiController.state.recommended),
              (this.featured = iF.ApiController.state.featured),
              (this.filteredWallets = iF.ApiController.state.filteredWallets),
              this.unsubscribe.push(
                iF.ApiController.subscribeKey(
                  "wallets",
                  (t) => (this.wallets = t)
                ),
                iF.ApiController.subscribeKey(
                  "recommended",
                  (t) => (this.recommended = t)
                ),
                iF.ApiController.subscribeKey(
                  "featured",
                  (t) => (this.featured = t)
                ),
                iF.ApiController.subscribeKey(
                  "filteredWallets",
                  (t) => (this.filteredWallets = t)
                )
              );
          }
        };
      (od.styles = or),
        oc([(0, r.state)()], od.prototype, "loading", void 0),
        oc([(0, r.state)()], od.prototype, "wallets", void 0),
        oc([(0, r.state)()], od.prototype, "recommended", void 0),
        oc([(0, r.state)()], od.prototype, "featured", void 0),
        oc([(0, r.state)()], od.prototype, "filteredWallets", void 0),
        (od = oc([(0, w.customElement)("w3m-all-wallets-list")], od));
      var op = n;
      function oh() {
        let t = (0, e._)([
          "\n  wui-grid,\n  wui-loading-spinner,\n  wui-flex {\n    height: 360px;\n  }\n\n  wui-grid {\n    overflow: scroll;\n    scrollbar-width: none;\n    grid-auto-rows: min-content;\n    grid-template-columns: repeat(auto-fill, 104px);\n  }\n\n  wui-grid[data-scroll='false'] {\n    overflow: hidden;\n  }\n\n  wui-grid::-webkit-scrollbar {\n    display: none;\n  }\n\n  wui-loading-spinner {\n    justify-content: center;\n    align-items: center;\n  }\n\n  @media (max-width: 350px) {\n    wui-grid {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n",
        ]);
        return (
          (oh = function () {
            return t;
          }),
          t
        );
      }
      t.i(270253);
      let ow = (0, b.css)(oh());
      function of() {
        let t = (0, e._)([
          '<wui-loading-spinner color="accent-100"></wui-loading-spinner>',
        ]);
        return (
          (of = function () {
            return t;
          }),
          t
        );
      }
      function om() {
        let t = (0, e._)([
          '\n        <wui-flex\n          data-testid="no-wallet-found"\n          justifyContent="center"\n          alignItems="center"\n          gap="s"\n          flexDirection="column"\n        >\n          <wui-icon-box\n            size="lg"\n            iconColor="fg-200"\n            backgroundColor="fg-300"\n            icon="wallet"\n            background="transparent"\n          ></wui-icon-box>\n          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">\n            No Wallet found\n          </wui-text>\n        </wui-flex>\n      ',
        ]);
        return (
          (om = function () {
            return t;
          }),
          t
        );
      }
      function og() {
        let t = (0, e._)([
          "\n            <w3m-all-wallets-list-item\n              @click=",
          "\n              .wallet=",
          '\n              data-testid="wallet-search-item-',
          '"\n            ></w3m-all-wallets-list-item>\n          ',
        ]);
        return (
          (og = function () {
            return t;
          }),
          t
        );
      }
      function ob() {
        let t = (0, e._)([
          '\n      <wui-grid\n        data-testid="wallet-list"\n        .padding=',
          '\n        rowGap="l"\n        columnGap="xs"\n        justifyContent="space-between"\n      >\n        ',
          "\n      </wui-grid>\n    ",
        ]);
        return (
          (ob = function () {
            return t;
          }),
          t
        );
      }
      var ov = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let oC = class extends op.LitElement {
        render() {
          return (
            this.onSearch(),
            this.loading ? (0, i.html)(of()) : this.walletsTemplate()
          );
        }
        async onSearch() {
          (this.query.trim() !== this.prevQuery.trim() ||
            this.badge !== this.prevBadge) &&
            ((this.prevQuery = this.query),
            (this.prevBadge = this.badge),
            (this.loading = !0),
            await iF.ApiController.searchWallet({
              search: this.query,
              badge: this.badge,
            }),
            (this.loading = !1));
        }
        walletsTemplate() {
          let { search: t } = iF.ApiController.state,
            e = i2.WalletUtil.markWalletsAsInstalled(t);
          return t.length
            ? (0, i.html)(
                ob(),
                ["0", "s", "s", "s"],
                e.map((t) =>
                  (0, i.html)(og(), () => this.onConnectWallet(t), t, t.id)
                )
              )
            : (0, i.html)(om());
        }
        onConnectWallet(t) {
          tS.ConnectorController.selectWalletConnector(t);
        }
        constructor() {
          super(...arguments),
            (this.prevQuery = ""),
            (this.prevBadge = void 0),
            (this.loading = !0),
            (this.query = "");
        }
      };
      function oy() {
        let t = (0, e._)([
          "<w3m-all-wallets-search\n            query=",
          "\n            badge=",
          "\n          ></w3m-all-wallets-search>",
        ]);
        return (
          (oy = function () {
            return t;
          }),
          t
        );
      }
      function ox() {
        let t = (0, e._)([
          "<w3m-all-wallets-list badge=",
          "></w3m-all-wallets-list>",
        ]);
        return (
          (ox = function () {
            return t;
          }),
          t
        );
      }
      function ok() {
        let t = (0, e._)([
          "\n      <wui-flex .padding=",
          ' gap="xs">\n        <wui-search-bar @inputChange=',
          "></wui-search-bar>\n        <wui-certified-switch\n          ?checked=",
          "\n          @click=",
          '\n          data-testid="wui-certified-switch"\n        ></wui-certified-switch>\n        ',
          "\n      </wui-flex>\n      ",
          "\n    ",
        ]);
        return (
          (ok = function () {
            return t;
          }),
          t
        );
      }
      function oE() {
        let t = (0, e._)([
          '\n        <wui-icon-box\n          size="lg"\n          iconSize="xl"\n          iconColor="accent-100"\n          backgroundColor="accent-100"\n          icon="qrCode"\n          background="transparent"\n          border\n          borderColor="wui-accent-glass-010"\n          @click=',
          "\n        ></wui-icon-box>\n      ",
        ]);
        return (
          (oE = function () {
            return t;
          }),
          t
        );
      }
      (oC.styles = ow),
        ov([(0, r.state)()], oC.prototype, "loading", void 0),
        ov([(0, o.property)()], oC.prototype, "query", void 0),
        ov([(0, o.property)()], oC.prototype, "badge", void 0),
        (oC = ov([(0, w.customElement)("w3m-all-wallets-search")], oC));
      var oS = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let oA = class extends im.LitElement {
        render() {
          let t = this.search.length >= 2;
          return (0, i.html)(
            ok(),
            ["0", "s", "s", "s"],
            this.onInputChange.bind(this),
            this.badge,
            this.onClick.bind(this),
            this.qrButtonTemplate(),
            t || this.badge
              ? (0, i.html)(oy(), this.search, (0, l.ifDefined)(this.badge))
              : (0, i.html)(ox(), (0, l.ifDefined)(this.badge))
          );
        }
        onInputChange(t) {
          this.onDebouncedSearch(t.detail);
        }
        onClick() {
          if ("certified" === this.badge) {
            this.badge = void 0;
            return;
          }
          (this.badge = "certified"),
            tT.SnackController.showSvg("Only WalletConnect certified", {
              icon: "walletConnectBrown",
              iconColor: "accent-100",
            });
        }
        qrButtonTemplate() {
          return d.CoreHelperUtil.isMobile()
            ? (0, i.html)(oE(), this.onWalletConnectQr.bind(this))
            : null;
        }
        onWalletConnectQr() {
          tR.RouterController.push("ConnectingWalletConnect");
        }
        constructor() {
          super(...arguments),
            (this.search = ""),
            (this.onDebouncedSearch = d.CoreHelperUtil.debounce((t) => {
              this.search = t;
            }));
        }
      };
      oS([(0, r.state)()], oA.prototype, "search", void 0),
        oS([(0, r.state)()], oA.prototype, "badge", void 0),
        (oA = oS([(0, w.customElement)("w3m-all-wallets-view")], oA)),
        t.s({ W3mConnectView: () => l$ }, 411862);
      var oR = n,
        oI = t.i(858531),
        oT = n;
      function oO() {
        let t = (0, e._)([
          "\n  button {\n    column-gap: var(--wui-spacing-s);\n    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);\n    width: 100%;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n    color: var(--wui-color-fg-100);\n    justify-content: center;\n    align-items: center;\n  }\n\n  button:disabled {\n    background-color: var(--wui-color-gray-glass-015);\n    color: var(--wui-color-gray-glass-015);\n  }\n",
        ]);
        return (
          (oO = function () {
            return t;
          }),
          t
        );
      }
      let o_ = (0, b.css)(oO());
      function oN() {
        let t = (0, e._)([
          "\n      <button ?disabled=",
          " tabindex=",
          '>\n        <wui-text align="center" variant="paragraph-500" color="inherit">',
          "</wui-text>\n      </button>\n    ",
        ]);
        return (
          (oN = function () {
            return t;
          }),
          t
        );
      }
      var oU = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let oD = class extends oT.LitElement {
        render() {
          return (0, i.html)(
            oN(),
            this.disabled,
            (0, l.ifDefined)(this.tabIdx),
            this.text
          );
        }
        constructor() {
          super(...arguments),
            (this.text = ""),
            (this.disabled = !1),
            (this.tabIdx = void 0);
        }
      };
      (oD.styles = [m.resetStyles, m.elementStyles, o_]),
        oU([(0, o.property)()], oD.prototype, "text", void 0),
        oU(
          [(0, o.property)({ type: Boolean })],
          oD.prototype,
          "disabled",
          void 0
        ),
        oU([(0, o.property)()], oD.prototype, "tabIdx", void 0),
        (oD = oU([(0, w.customElement)("wui-list-button")], oD));
      var oW = t.i(538752),
        oP = n;
      function oL() {
        let t = (0, e._)([
          "\n  wui-separator {\n    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);\n    width: calc(100% + var(--wui-spacing-s) * 2);\n  }\n\n  wui-email-input {\n    width: 100%;\n  }\n\n  form {\n    width: 100%;\n    display: block;\n    position: relative;\n  }\n\n  wui-icon-link,\n  wui-loading-spinner {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  wui-icon-link {\n    right: var(--wui-spacing-xs);\n  }\n\n  wui-loading-spinner {\n    right: var(--wui-spacing-m);\n  }\n\n  wui-text {\n    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);\n  }\n",
        ]);
        return (
          (oL = function () {
            return t;
          }),
          t
        );
      }
      t.i(355873);
      let oj = (0, b.css)(oL());
      function oB() {
        let t = (0, e._)([
          "\n      <form ",
          " @submit=",
          ">\n        <wui-email-input\n          @focus=",
          "\n          .disabled=",
          "\n          @inputChange=",
          "\n          tabIdx=",
          "\n          ?disabled=",
          "\n        >\n        </wui-email-input>\n\n        ",
          "",
          '\n        <input type="submit" hidden />\n      </form>\n      ',
          "\n    ",
        ]);
        return (
          (oB = function () {
            return t;
          }),
          t
        );
      }
      function oz() {
        let t = (0, e._)([
          '\n          <wui-icon-link\n            size="sm"\n            icon="chevronRight"\n            iconcolor="accent-100"\n            @click=',
          "\n          >\n          </wui-icon-link>\n        ",
        ]);
        return (
          (oz = function () {
            return t;
          }),
          t
        );
      }
      function oH() {
        let t = (0, e._)([
          '<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>',
        ]);
        return (
          (oH = function () {
            return t;
          }),
          t
        );
      }
      function oF() {
        let t = (0, e._)([
          '<wui-text variant="tiny-500" color="error-100">',
          "</wui-text>",
        ]);
        return (
          (oF = function () {
            return t;
          }),
          t
        );
      }
      var oM = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let oV = class extends oP.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        firstUpdated() {
          var t;
          null == (t = this.formRef.value) ||
            t.addEventListener("keydown", (t) => {
              "Enter" === t.key && this.onSubmitEmail(t);
            });
        }
        render() {
          let t = tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.AUTH
          );
          return (0, i.html)(
            oB(),
            (0, iv.ref)(this.formRef),
            this.onSubmitEmail.bind(this),
            this.onFocusEvent.bind(this),
            this.loading,
            this.onEmailInputChange.bind(this),
            (0, l.ifDefined)(this.tabIdx),
            t,
            this.submitButtonTemplate(),
            this.loadingTemplate(),
            this.templateError()
          );
        }
        submitButtonTemplate() {
          return !this.loading && this.email.length > 3
            ? (0, i.html)(oz(), this.onSubmitEmail.bind(this))
            : null;
        }
        loadingTemplate() {
          return this.loading ? (0, i.html)(oH()) : null;
        }
        templateError() {
          return this.error ? (0, i.html)(oF(), this.error) : null;
        }
        onEmailInputChange(t) {
          (this.email = t.detail.trim()), (this.error = "");
        }
        async onSubmitEmail(t) {
          if (
            !tk.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (t) => t === u.ChainController.state.activeChain
            )
          ) {
            let t =
              u.ChainController.getFirstCaipNetworkSupportsAuthConnector();
            if (t)
              return void tR.RouterController.push("SwitchNetwork", {
                network: t,
              });
          }
          try {
            if (this.loading) return;
            (this.loading = !0), t.preventDefault();
            let n = tS.ConnectorController.getAuthConnector();
            if (!n)
              throw Error("w3m-email-login-widget: Auth connector not found");
            let { action: i } = await n.provider.connectEmail({
              email: this.email,
            });
            if (
              (to.EventsController.sendEvent({
                type: "track",
                event: "EMAIL_SUBMITTED",
              }),
              "VERIFY_OTP" === i)
            )
              to.EventsController.sendEvent({
                type: "track",
                event: "EMAIL_VERIFICATION_CODE_SENT",
              }),
                tR.RouterController.push("EmailVerifyOtp", {
                  email: this.email,
                });
            else if ("VERIFY_DEVICE" === i)
              tR.RouterController.push("EmailVerifyDevice", {
                email: this.email,
              });
            else if ("CONNECT" === i) {
              var e;
              let t =
                null == (e = this.remoteFeatures) ? void 0 : e.multiWallet;
              await tE.ConnectionController.connectExternal(
                n,
                u.ChainController.state.activeChain
              ),
                t
                  ? (tR.RouterController.replace("ProfileWallets"),
                    tT.SnackController.showSuccess("New Wallet Added"))
                  : tR.RouterController.replace("Account");
            }
          } catch (e) {
            let t = d.CoreHelperUtil.parseError(e);
            (null == t ? void 0 : t.includes("Invalid email"))
              ? (this.error = "Invalid email. Try again.")
              : tT.SnackController.showError(e);
          } finally {
            this.loading = !1;
          }
        }
        onFocusEvent() {
          to.EventsController.sendEvent({
            type: "track",
            event: "EMAIL_LOGIN_SELECTED",
          });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.formRef = (0, iv.createRef)()),
            (this.email = ""),
            (this.loading = !1),
            (this.error = ""),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            this.unsubscribe.push(
              h.OptionsController.subscribeKey("remoteFeatures", (t) => {
                this.remoteFeatures = t;
              })
            );
        }
      };
      (oV.styles = oj),
        oM([(0, o.property)()], oV.prototype, "tabIdx", void 0),
        oM([(0, r.state)()], oV.prototype, "email", void 0),
        oM([(0, r.state)()], oV.prototype, "loading", void 0),
        oM([(0, r.state)()], oV.prototype, "error", void 0),
        oM([(0, r.state)()], oV.prototype, "remoteFeatures", void 0),
        (oV = oM([(0, w.customElement)("w3m-email-login-widget")], oV)),
        t.i(136114),
        t.i(468375);
      var oK = n,
        oG = t.i(362168),
        oq = t.i(181482);
      t.i(665482);
      var oY = n;
      function oX() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    width: 100%;\n  }\n\n  button {\n    width: 100%;\n    height: 56px;\n    background: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n  }\n",
        ]);
        return (
          (oX = function () {
            return t;
          }),
          t
        );
      }
      t.i(128585);
      let oQ = (0, b.css)(oX());
      function oZ() {
        let t = (0, e._)([
          "\n      <button ?disabled=",
          " tabindex=",
          ">\n        <wui-logo logo=",
          "></wui-logo>\n      </button>\n    ",
        ]);
        return (
          (oZ = function () {
            return t;
          }),
          t
        );
      }
      var oJ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let o$ = class extends oY.LitElement {
        render() {
          return (0, i.html)(
            oZ(),
            this.disabled,
            (0, l.ifDefined)(this.tabIdx),
            this.logo
          );
        }
        constructor() {
          super(...arguments),
            (this.logo = "google"),
            (this.disabled = !1),
            (this.tabIdx = void 0);
        }
      };
      (o$.styles = [m.resetStyles, m.elementStyles, oQ]),
        oJ([(0, o.property)()], o$.prototype, "logo", void 0),
        oJ(
          [(0, o.property)({ type: Boolean })],
          o$.prototype,
          "disabled",
          void 0
        ),
        oJ([(0, o.property)()], o$.prototype, "tabIdx", void 0),
        (o$ = oJ([(0, w.customElement)("wui-logo-select")], o$));
      var o0 = t.i(805914);
      function o3() {
        let t = (0, e._)([
          "\n  wui-separator {\n    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)\n      calc(var(--wui-spacing-m) * -1);\n    width: calc(100% + var(--wui-spacing-s) * 2);\n  }\n",
        ]);
        return (
          (o3 = function () {
            return t;
          }),
          t
        );
      }
      let o1 = (0, b.css)(o3());
      function o5() {
        let t = (0, e._)([
          '\n      <wui-flex\n        class="container"\n        flexDirection="column"\n        gap="xs"\n        data-testid="w3m-social-login-widget"\n      >\n        ',
          "",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (o5 = function () {
            return t;
          }),
          t
        );
      }
      function o2() {
        let t = (0, e._)([
          "<wui-logo-select\n              data-testid=",
          "\n              @click=",
          "\n              logo=",
          "\n              tabIdx=",
          "\n              ?disabled=",
          "\n            ></wui-logo-select>",
        ]);
        return (
          (o2 = function () {
            return t;
          }),
          t
        );
      }
      function o6() {
        let t = (0, e._)([
          ' <wui-flex gap="xs">\n        ',
          "\n      </wui-flex>",
        ]);
        return (
          (o6 = function () {
            return t;
          }),
          t
        );
      }
      function o4() {
        let t = (0, e._)([
          " <wui-list-social\n      data-testid=",
          "\n      @click=",
          "\n      logo=",
          '\n      align="center"\n      name=',
          "\n      tabIdx=",
          "\n      ?disabled=",
          "\n    ></wui-list-social>",
        ]);
        return (
          (o4 = function () {
            return t;
          }),
          t
        );
      }
      function o7() {
        let t = (0, e._)([
          "<wui-logo-select\n              data-testid=",
          "\n              @click=",
          "\n              logo=",
          "\n              tabIdx=",
          "\n              ?focusable=",
          "\n              ?disabled=",
          "\n            ></wui-logo-select>",
        ]);
        return (
          (o7 = function () {
            return t;
          }),
          t
        );
      }
      function o8() {
        let t = (0, e._)([
          '<wui-flex gap="xs">\n        ',
          '\n        <wui-logo-select\n          logo="more"\n          tabIdx=',
          "\n          @click=",
          "\n          ?disabled=",
          '\n          data-testid="social-selector-more"\n        ></wui-logo-select>\n      </wui-flex>',
        ]);
        return (
          (o8 = function () {
            return t;
          }),
          t
        );
      }
      function o9() {
        let t = (0, e._)([
          "<wui-logo-select\n            data-testid=",
          "\n            @click=",
          "\n            logo=",
          "\n            tabIdx=",
          "\n            ?focusable=",
          "\n            ?disabled=",
          "\n          ></wui-logo-select>",
        ]);
        return (
          (o9 = function () {
            return t;
          }),
          t
        );
      }
      function rt() {
        let t = (0, e._)(['<wui-flex gap="xs">\n      ', "\n    </wui-flex>"]);
        return (
          (rt = function () {
            return t;
          }),
          t
        );
      }
      var re = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rn = class extends oK.LitElement {
        connectedCallback() {
          super.connectedCallback(), this.handlePwaFrameLoad();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(
            o5(),
            this.topViewTemplate(),
            this.bottomViewTemplate()
          );
        }
        topViewTemplate() {
          var t;
          let e = "explore" === this.walletGuide,
            n = null == (t = this.remoteFeatures) ? void 0 : t.socials;
          return !n && e
            ? ((n = tA.ConstantsUtil.DEFAULT_SOCIALS),
              this.renderTopViewContent(n))
            : n
            ? this.renderTopViewContent(n)
            : null;
        }
        renderTopViewContent(t) {
          return 2 === t.length
            ? (0, i.html)(
                o6(),
                t.slice(0, 2).map((t) =>
                  (0, i.html)(
                    o2(),
                    "social-selector-".concat(t),
                    () => {
                      this.onSocialClick(t);
                    },
                    t,
                    (0, l.ifDefined)(this.tabIdx),
                    this.isPwaLoading || this.hasConnection()
                  )
                )
              )
            : (0, i.html)(
                o4(),
                "social-selector-".concat(t[0]),
                () => {
                  this.onSocialClick(t[0]);
                },
                (0, l.ifDefined)(t[0]),
                "Continue with ".concat(t[0]),
                (0, l.ifDefined)(this.tabIdx),
                this.isPwaLoading || this.hasConnection()
              );
        }
        bottomViewTemplate() {
          var t;
          let e = null == (t = this.remoteFeatures) ? void 0 : t.socials,
            n = "explore" === this.walletGuide;
          return ((this.authConnector && e && 0 !== e.length) ||
            !n ||
            (e = tA.ConstantsUtil.DEFAULT_SOCIALS),
          !e || e.length <= 2)
            ? null
            : e && e.length > 6
            ? (0, i.html)(
                o8(),
                e.slice(1, 5).map((t) =>
                  (0, i.html)(
                    o7(),
                    "social-selector-".concat(t),
                    () => {
                      this.onSocialClick(t);
                    },
                    t,
                    (0, l.ifDefined)(this.tabIdx),
                    void 0 !== this.tabIdx && this.tabIdx >= 0,
                    this.isPwaLoading || this.hasConnection()
                  )
                ),
                (0, l.ifDefined)(this.tabIdx),
                this.onMoreSocialsClick.bind(this),
                this.isPwaLoading || this.hasConnection()
              )
            : e
            ? (0, i.html)(
                rt(),
                e.slice(1, e.length).map((t) =>
                  (0, i.html)(
                    o9(),
                    "social-selector-".concat(t),
                    () => {
                      this.onSocialClick(t);
                    },
                    t,
                    (0, l.ifDefined)(this.tabIdx),
                    void 0 !== this.tabIdx && this.tabIdx >= 0,
                    this.isPwaLoading || this.hasConnection()
                  )
                )
              )
            : null;
        }
        onMoreSocialsClick() {
          tR.RouterController.push("ConnectSocials");
        }
        async onSocialClick(t) {
          if (
            !tk.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (t) => t === u.ChainController.state.activeChain
            )
          ) {
            let t =
              u.ChainController.getFirstCaipNetworkSupportsAuthConnector();
            if (t)
              return void tR.RouterController.push("SwitchNetwork", {
                network: t,
              });
          }
          t && (await (0, oq.executeSocialLogin)(t));
        }
        async handlePwaFrameLoad() {
          if (d.CoreHelperUtil.isPWA()) {
            this.isPwaLoading = !0;
            try {
              var t;
              (null == (t = this.authConnector)
                ? void 0
                : t.provider) instanceof o0.W3mFrameProvider &&
                (await this.authConnector.provider.init());
            } catch (t) {
              oG.AlertController.open(
                {
                  shortMessage: "Error loading embedded wallet in PWA",
                  longMessage: t.message,
                },
                "error"
              );
            } finally {
              this.isPwaLoading = !1;
            }
          }
        }
        hasConnection() {
          return tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.AUTH
          );
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.walletGuide = "get-started"),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            (this.authConnector = this.connectors.find(
              (t) => "AUTH" === t.type
            )),
            (this.isPwaLoading = !1),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey("connectors", (t) => {
                (this.connectors = t),
                  (this.authConnector = this.connectors.find(
                    (t) => "AUTH" === t.type
                  ));
              }),
              h.OptionsController.subscribeKey(
                "remoteFeatures",
                (t) => (this.remoteFeatures = t)
              )
            );
        }
      };
      (rn.styles = o1),
        re([(0, o.property)()], rn.prototype, "walletGuide", void 0),
        re([(0, o.property)()], rn.prototype, "tabIdx", void 0),
        re([(0, r.state)()], rn.prototype, "connectors", void 0),
        re([(0, r.state)()], rn.prototype, "remoteFeatures", void 0),
        re([(0, r.state)()], rn.prototype, "authConnector", void 0),
        re([(0, r.state)()], rn.prototype, "isPwaLoading", void 0),
        (rn = re([(0, w.customElement)("w3m-social-login-widget")], rn));
      var ri = n;
      function ro() {
        let t = (0, e._)([
          "\n  wui-flex {\n    width: 100%;\n  }\n\n  .wallet-guide {\n    width: 100%;\n  }\n\n  .chip-box {\n    width: fit-content;\n    background-color: var(--wui-color-gray-glass-005);\n    border-radius: var(--wui-border-radius-3xl);\n  }\n",
        ]);
        return (
          (ro = function () {
            return t;
          }),
          t
        );
      }
      t.i(672982);
      let rr = (0, b.css)(ro());
      function rl() {
        let t = (0, e._)([
          '<wui-flex\n          class="wallet-guide"\n          flexDirection="column"\n          alignItems="center"\n          justifyContent="center"\n          rowGap="xs"\n          data-testid="w3m-wallet-guide-explore"\n        >\n          <wui-text variant="small-400" color="fg-200" align="center">\n            Looking for a self-custody wallet?\n          </wui-text>\n\n          <wui-flex class="chip-box">\n            <wui-chip\n              imageIcon="walletConnectLightBrown"\n              icon="externalLink"\n              variant="transparent"\n              href="https://walletguide.walletconnect.network"\n              title="Find one on WalletGuide"\n            ></wui-chip>\n          </wui-flex>\n        </wui-flex>',
        ]);
        return (
          (rl = function () {
            return t;
          }),
          t
        );
      }
      function ra() {
        let t = (0, e._)([
          '<wui-flex\n          columnGap="4xs"\n          flexDirection="row"\n          alignItems="center"\n          justifyContent="center"\n          .padding=',
          '\n        >\n          <wui-text variant="small-400" class="title" color="fg-200"\n            >Haven\'t got a wallet?</wui-text\n          >\n          <wui-link\n            data-testid="w3m-wallet-guide-get-started"\n            color="blue-100"\n            class="get-started-link"\n            @click=',
          "\n            tabIdx=",
          "\n          >\n            Get started\n          </wui-link>\n        </wui-flex>",
        ]);
        return (
          (ra = function () {
            return t;
          }),
          t
        );
      }
      var rs = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rc = class extends ri.LitElement {
        render() {
          return "explore" === this.walletGuide
            ? (0, i.html)(rl())
            : (0, i.html)(
                ra(),
                ["s", "0", "s", "0"],
                this.onGetStarted,
                (0, l.ifDefined)(this.tabIdx)
              );
        }
        onGetStarted() {
          tR.RouterController.push("Create");
        }
        constructor() {
          super(...arguments), (this.walletGuide = "get-started");
        }
      };
      (rc.styles = rr),
        rs([(0, o.property)()], rc.prototype, "tabIdx", void 0),
        rs([(0, o.property)()], rc.prototype, "walletGuide", void 0),
        (rc = rs([(0, w.customElement)("w3m-wallet-guide")], rc));
      var ru = n,
        rd = n,
        rp = n,
        rh = n;
      function rw() {
        let t = (0, e._)([
          "\n  :host {\n    position: relative;\n    border-radius: var(--wui-border-radius-xxs);\n    width: 40px;\n    height: 40px;\n    overflow: hidden;\n    background: var(--wui-color-gray-glass-002);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: var(--wui-spacing-4xs);\n    padding: 3.75px !important;\n  }\n\n  :host::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: inherit;\n    border: 1px solid var(--wui-color-gray-glass-010);\n    pointer-events: none;\n  }\n\n  :host > wui-wallet-image {\n    width: 14px;\n    height: 14px;\n    border-radius: var(--wui-border-radius-5xs);\n  }\n\n  :host > wui-flex {\n    padding: 2px;\n    position: fixed;\n    overflow: hidden;\n    left: 34px;\n    bottom: 8px;\n    background: var(--dark-background-150, #1e1f1f);\n    border-radius: 50%;\n    z-index: 2;\n    display: flex;\n  }\n",
        ]);
        return (
          (rw = function () {
            return t;
          }),
          t
        );
      }
      let rf = (0, b.css)(rw());
      function rm() {
        let t = (0, e._)([
          '\n            <wui-wallet-image\n              size="inherit"\n              imageSrc=',
          "\n              name=",
          "\n            ></wui-wallet-image>\n          ",
        ]);
        return (
          (rm = function () {
            return t;
          }),
          t
        );
      }
      function rg() {
        let t = (0, e._)([
          ' <wui-wallet-image size="inherit" name=""></wui-wallet-image>',
        ]);
        return (
          (rg = function () {
            return t;
          }),
          t
        );
      }
      function rb() {
        let t = (0, e._)([
          "",
          "\n      ",
          '\n      <wui-flex>\n        <wui-icon-box\n          size="xxs"\n          iconSize="xxs"\n          iconcolor="success-100"\n          backgroundcolor="success-100"\n          icon="checkmark"\n          background="opaque"\n        ></wui-icon-box>\n      </wui-flex>',
        ]);
        return (
          (rb = function () {
            return t;
          }),
          t
        );
      }
      var rv = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rC = class extends rh.LitElement {
        render() {
          let t = this.walletImages.length < 4;
          return (0, i.html)(
            rb(),
            this.walletImages.slice(0, 4).map((t) => {
              let { src: e, walletName: n } = t;
              return (0, i.html)(rm(), e, (0, l.ifDefined)(n));
            }),
            t
              ? [...Array(4 - this.walletImages.length)].map(() =>
                  (0, i.html)(rg())
                )
              : null
          );
        }
        constructor() {
          super(...arguments), (this.walletImages = []);
        }
      };
      function ry() {
        let t = (0, e._)([
          "\n  button {\n    column-gap: var(--wui-spacing-s);\n    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);\n    width: 100%;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n    color: var(--wui-color-fg-100);\n  }\n\n  button > wui-text:nth-child(2) {\n    display: flex;\n    flex: 1;\n  }\n\n  button:disabled {\n    background-color: var(--wui-color-gray-glass-015);\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  button:disabled > wui-tag {\n    background-color: var(--wui-color-gray-glass-010);\n    color: var(--wui-color-fg-300);\n  }\n\n  wui-icon {\n    color: var(--wui-color-fg-200) !important;\n  }\n",
        ]);
        return (
          (ry = function () {
            return t;
          }),
          t
        );
      }
      (rC.styles = [m.resetStyles, rf]),
        rv(
          [(0, o.property)({ type: Array })],
          rC.prototype,
          "walletImages",
          void 0
        ),
        (rC = rv([(0, w.customElement)("wui-all-wallets-image")], rC));
      let rx = (0, b.css)(ry());
      function rk() {
        let t = (0, e._)([
          "\n      <button ?disabled=",
          " tabindex=",
          ">\n        ",
          " ",
          '\n        <wui-text variant="paragraph-500" color="inherit">',
          "</wui-text>\n        ",
          "\n      </button>\n    ",
        ]);
        return (
          (rk = function () {
            return t;
          }),
          t
        );
      }
      function rE() {
        let t = (0, e._)([
          " <wui-all-wallets-image .imageeSrc=",
          "> </wui-all-wallets-image> ",
        ]);
        return (
          (rE = function () {
            return t;
          }),
          t
        );
      }
      function rS() {
        let t = (0, e._)([
          " <wui-wallet-image .walletIcon=",
          ' size="sm"> </wui-wallet-image> ',
        ]);
        return (
          (rS = function () {
            return t;
          }),
          t
        );
      }
      function rA() {
        let t = (0, e._)([
          '<wui-wallet-image\n        size="sm"\n        imageSrc=',
          "\n        name=",
          "\n        .installed=",
          "\n      ></wui-wallet-image>",
        ]);
        return (
          (rA = function () {
            return t;
          }),
          t
        );
      }
      function rR() {
        let t = (0, e._)([
          '<wui-wallet-image size="sm" name=',
          "></wui-wallet-image>",
        ]);
        return (
          (rR = function () {
            return t;
          }),
          t
        );
      }
      function rI() {
        let t = (0, e._)([
          '<wui-loading-spinner\n        size="lg"\n        color=',
          "\n      ></wui-loading-spinner>",
        ]);
        return (
          (rI = function () {
            return t;
          }),
          t
        );
      }
      function rT() {
        let t = (0, e._)(["<wui-tag variant=", ">", "</wui-tag>"]);
        return (
          (rT = function () {
            return t;
          }),
          t
        );
      }
      function rO() {
        let t = (0, e._)([
          '<wui-icon color="inherit" size="sm" name=',
          "></wui-icon>",
        ]);
        return (
          (rO = function () {
            return t;
          }),
          t
        );
      }
      var r_ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rN = class extends rp.LitElement {
        render() {
          return (0, i.html)(
            rk(),
            this.disabled,
            (0, l.ifDefined)(this.tabIdx),
            this.templateAllWallets(),
            this.templateWalletImage(),
            this.name,
            this.templateStatus()
          );
        }
        templateAllWallets() {
          return this.showAllWallets && this.imageSrc
            ? (0, i.html)(rE(), this.imageSrc)
            : this.showAllWallets && this.walletIcon
            ? (0, i.html)(rS(), this.walletIcon)
            : null;
        }
        templateWalletImage() {
          return !this.showAllWallets && this.imageSrc
            ? (0, i.html)(rA(), this.imageSrc, this.name, this.installed)
            : this.showAllWallets || this.imageSrc
            ? null
            : (0, i.html)(rR(), this.name);
        }
        templateStatus() {
          return this.loading
            ? (0, i.html)(rI(), this.loadingSpinnerColor)
            : this.tagLabel && this.tagVariant
            ? (0, i.html)(rT(), this.tagVariant, this.tagLabel)
            : this.icon
            ? (0, i.html)(rO(), this.icon)
            : null;
        }
        constructor() {
          super(...arguments),
            (this.walletImages = []),
            (this.imageSrc = ""),
            (this.name = ""),
            (this.tabIdx = void 0),
            (this.installed = !1),
            (this.disabled = !1),
            (this.showAllWallets = !1),
            (this.loading = !1),
            (this.loadingSpinnerColor = "accent-100");
        }
      };
      function rU() {
        let t = (0, e._)([
          '\n      <wui-list-wallet\n        name="All Wallets"\n        walletIcon="allWallets"\n        showAllWallets\n        @click=',
          "\n        tagLabel=",
          '\n        tagVariant="shade"\n        data-testid="all-wallets"\n        tabIdx=',
          "\n        .loading=",
          "\n        loadingSpinnerColor=",
          "\n        ?disabled=",
          "\n      ></wui-list-wallet>\n    ",
        ]);
        return (
          (rU = function () {
            return t;
          }),
          t
        );
      }
      (rN.styles = [m.resetStyles, m.elementStyles, rx]),
        r_(
          [(0, o.property)({ type: Array })],
          rN.prototype,
          "walletImages",
          void 0
        ),
        r_([(0, o.property)()], rN.prototype, "imageSrc", void 0),
        r_([(0, o.property)()], rN.prototype, "name", void 0),
        r_([(0, o.property)()], rN.prototype, "tagLabel", void 0),
        r_([(0, o.property)()], rN.prototype, "tagVariant", void 0),
        r_([(0, o.property)()], rN.prototype, "icon", void 0),
        r_([(0, o.property)()], rN.prototype, "walletIcon", void 0),
        r_([(0, o.property)()], rN.prototype, "tabIdx", void 0),
        r_(
          [(0, o.property)({ type: Boolean })],
          rN.prototype,
          "installed",
          void 0
        ),
        r_(
          [(0, o.property)({ type: Boolean })],
          rN.prototype,
          "disabled",
          void 0
        ),
        r_(
          [(0, o.property)({ type: Boolean })],
          rN.prototype,
          "showAllWallets",
          void 0
        ),
        r_(
          [(0, o.property)({ type: Boolean })],
          rN.prototype,
          "loading",
          void 0
        ),
        r_(
          [(0, o.property)({ type: String })],
          rN.prototype,
          "loadingSpinnerColor",
          void 0
        ),
        (rN = r_([(0, w.customElement)("wui-list-wallet")], rN));
      var rD = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rW = class extends rd.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let t = this.connectors.find((t) => "walletConnect" === t.id),
            { allWallets: e } = h.OptionsController.state;
          if (
            !t ||
            "HIDE" === e ||
            ("ONLY_MOBILE" === e && !d.CoreHelperUtil.isMobile())
          )
            return null;
          let n = iF.ApiController.state.featured.length,
            o = this.count + n,
            r = o < 10 ? o : 10 * Math.floor(o / 10),
            a = this.filteredCount > 0 ? this.filteredCount : r,
            s = "".concat(a);
          this.filteredCount > 0
            ? (s = "".concat(this.filteredCount))
            : a < o && (s = "".concat(a, "+"));
          let c = tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
          );
          return (0, i.html)(
            rU(),
            this.onAllWallets.bind(this),
            s,
            (0, l.ifDefined)(this.tabIdx),
            this.isFetchingRecommendedWallets,
            this.isFetchingRecommendedWallets ? "fg-300" : "accent-100",
            c
          );
        }
        onAllWallets() {
          to.EventsController.sendEvent({
            type: "track",
            event: "CLICK_ALL_WALLETS",
          }),
            tR.RouterController.push("AllWallets");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.count = iF.ApiController.state.count),
            (this.filteredCount =
              iF.ApiController.state.filteredWallets.length),
            (this.isFetchingRecommendedWallets =
              iF.ApiController.state.isFetchingRecommendedWallets),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              ),
              iF.ApiController.subscribeKey("count", (t) => (this.count = t)),
              iF.ApiController.subscribeKey(
                "filteredWallets",
                (t) => (this.filteredCount = t.length)
              ),
              iF.ApiController.subscribeKey(
                "isFetchingRecommendedWallets",
                (t) => (this.isFetchingRecommendedWallets = t)
              )
            );
        }
      };
      rD([(0, o.property)()], rW.prototype, "tabIdx", void 0),
        rD([(0, r.state)()], rW.prototype, "connectors", void 0),
        rD([(0, r.state)()], rW.prototype, "count", void 0),
        rD([(0, r.state)()], rW.prototype, "filteredCount", void 0),
        rD(
          [(0, r.state)()],
          rW.prototype,
          "isFetchingRecommendedWallets",
          void 0
        ),
        (rW = rD([(0, w.customElement)("w3m-all-wallets-widget")], rW));
      var rP = n,
        rL = n;
      function rj() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              name=",
          "\n              @click=",
          "\n              tagVariant=",
          "\n              tagLabel=",
          "\n              data-testid=",
          "\n              .installed=",
          "\n              tabIdx=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (rj = function () {
            return t;
          }),
          t
        );
      }
      function rB() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (rB = function () {
            return t;
          }),
          t
        );
      }
      var rz = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rH = class extends rL.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let t = this.connectors.filter((t) => "ANNOUNCED" === t.type);
          return (null == t ? void 0 : t.length)
            ? (0, i.html)(
                rB(),
                t.filter(eT.ConnectorUtil.showConnector).map((t) => {
                  var e, n;
                  let o = (
                    null != (e = this.connections.get(t.chain)) ? e : []
                  ).some((e) =>
                    n0.HelpersUtil.isLowerCaseMatch(e.connectorId, t.id)
                  );
                  return (0, i.html)(
                    rj(),
                    (0, l.ifDefined)(c.AssetUtil.getConnectorImage(t)),
                    null != (n = t.name) ? n : "Unknown",
                    () => this.onConnector(t),
                    o ? "shade" : "success",
                    o ? "connected" : "installed",
                    "wallet-selector-".concat(t.id),
                    !0,
                    (0, l.ifDefined)(this.tabIdx)
                  );
                })
              )
            : ((this.style.cssText = "display: none"), null);
        }
        onConnector(t) {
          "walletConnect" === t.id
            ? d.CoreHelperUtil.isMobile()
              ? tR.RouterController.push("AllWallets")
              : tR.RouterController.push("ConnectingWalletConnect")
            : tR.RouterController.push("ConnectingExternal", { connector: t });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.connections = tE.ConnectionController.state.connections),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              ),
              tE.ConnectionController.subscribeKey(
                "connections",
                (t) => (this.connections = t)
              )
            );
        }
      };
      rz([(0, o.property)()], rH.prototype, "tabIdx", void 0),
        rz([(0, r.state)()], rH.prototype, "connectors", void 0),
        rz([(0, r.state)()], rH.prototype, "connections", void 0),
        (rH = rz([(0, w.customElement)("w3m-connect-announced-widget")], rH));
      var rF = n;
      function rM() {
        let t = (0, e._)([
          "\n          <wui-list-wallet\n            imageSrc=",
          "\n            name=",
          "\n            @click=",
          "\n            data-testid=",
          "\n            tabIdx=",
          "\n            ?loading=",
          "\n            ?disabled=",
          "\n          >\n          </wui-list-wallet>\n        ",
        ]);
        return (
          (rM = function () {
            return t;
          }),
          t
        );
      }
      function rV() {
        let t = (0, e._)([
          '<wui-flex flexDirection="column" gap="xs">\n      ',
          "\n    </wui-flex>",
        ]);
        return (
          (rV = function () {
            return t;
          }),
          t
        );
      }
      var rK = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rG = class extends rF.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let { customWallets: t } = h.OptionsController.state;
          if (!(null == t ? void 0 : t.length))
            return (this.style.cssText = "display: none"), null;
          let e = this.filterOutDuplicateWallets(t),
            n = tE.ConnectionController.hasAnyConnection(
              tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
            );
          return (0, i.html)(
            rV(),
            e.map((t) => {
              var e;
              return (0, i.html)(
                rM(),
                (0, l.ifDefined)(c.AssetUtil.getWalletImage(t)),
                null != (e = t.name) ? e : "Unknown",
                () => this.onConnectWallet(t),
                "wallet-selector-".concat(t.id),
                (0, l.ifDefined)(this.tabIdx),
                this.loading,
                n
              );
            })
          );
        }
        filterOutDuplicateWallets(t) {
          let e = tB.StorageUtil.getRecentWallets(),
            n = this.connectors
              .map((t) => {
                var e;
                return null == (e = t.info) ? void 0 : e.rdns;
              })
              .filter(Boolean),
            i = e.map((t) => t.rdns).filter(Boolean),
            o = n.concat(i);
          if (o.includes("io.metamask.mobile") && d.CoreHelperUtil.isMobile()) {
            let t = o.indexOf("io.metamask.mobile");
            o[t] = "io.metamask";
          }
          return t.filter(
            (t) => !o.includes(String(null == t ? void 0 : t.rdns))
          );
        }
        onConnectWallet(t) {
          this.loading ||
            tR.RouterController.push("ConnectingWalletConnect", { wallet: t });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.loading = !1),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              )
            ),
            d.CoreHelperUtil.isTelegram() &&
              d.CoreHelperUtil.isIos() &&
              ((this.loading = !tE.ConnectionController.state.wcUri),
              this.unsubscribe.push(
                tE.ConnectionController.subscribeKey(
                  "wcUri",
                  (t) => (this.loading = !t)
                )
              ));
        }
      };
      rK([(0, o.property)()], rG.prototype, "tabIdx", void 0),
        rK([(0, r.state)()], rG.prototype, "connectors", void 0),
        rK([(0, r.state)()], rG.prototype, "loading", void 0),
        (rG = rK([(0, w.customElement)("w3m-connect-custom-widget")], rG));
      var rq = n;
      function rY() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              .installed=",
          "\n              name=",
          "\n              data-testid=",
          "\n              @click=",
          "\n              tabIdx=",
          "\n              ?disabled=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (rY = function () {
            return t;
          }),
          t
        );
      }
      function rX() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (rX = function () {
            return t;
          }),
          t
        );
      }
      var rQ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let rZ = class extends rq.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let t = this.connectors
            .filter((t) => "EXTERNAL" === t.type)
            .filter(eT.ConnectorUtil.showConnector)
            .filter((t) => t.id !== tk.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK);
          if (!(null == t ? void 0 : t.length))
            return (this.style.cssText = "display: none"), null;
          let e = tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
          );
          return (0, i.html)(
            rX(),
            t.map((t) => {
              var n;
              return (0, i.html)(
                rY(),
                (0, l.ifDefined)(c.AssetUtil.getConnectorImage(t)),
                !0,
                null != (n = t.name) ? n : "Unknown",
                "wallet-selector-external-".concat(t.id),
                () => this.onConnector(t),
                (0, l.ifDefined)(this.tabIdx),
                e
              );
            })
          );
        }
        onConnector(t) {
          tR.RouterController.push("ConnectingExternal", { connector: t });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              )
            );
        }
      };
      rQ([(0, o.property)()], rZ.prototype, "tabIdx", void 0),
        rQ([(0, r.state)()], rZ.prototype, "connectors", void 0),
        (rZ = rQ([(0, w.customElement)("w3m-connect-external-widget")], rZ));
      var rJ = n;
      function r$() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              data-testid=",
          "\n              imageSrc=",
          "\n              name=",
          "\n              @click=",
          "\n              tabIdx=",
          "\n              ?disabled=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (r$ = function () {
            return t;
          }),
          t
        );
      }
      function r0() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (r0 = function () {
            return t;
          }),
          t
        );
      }
      var r3 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let r1 = class extends rJ.LitElement {
        render() {
          if (!this.wallets.length)
            return (this.style.cssText = "display: none"), null;
          let t = tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
          );
          return (0, i.html)(
            r0(),
            this.wallets.map((e) => {
              var n;
              return (0, i.html)(
                r$(),
                "wallet-selector-featured-".concat(e.id),
                (0, l.ifDefined)(c.AssetUtil.getWalletImage(e)),
                null != (n = e.name) ? n : "Unknown",
                () => this.onConnectWallet(e),
                (0, l.ifDefined)(this.tabIdx),
                t
              );
            })
          );
        }
        onConnectWallet(t) {
          tS.ConnectorController.selectWalletConnector(t);
        }
        constructor() {
          super(...arguments), (this.tabIdx = void 0), (this.wallets = []);
        }
      };
      r3([(0, o.property)()], r1.prototype, "tabIdx", void 0),
        r3([(0, o.property)()], r1.prototype, "wallets", void 0),
        (r1 = r3([(0, w.customElement)("w3m-connect-featured-widget")], r1));
      var r5 = n;
      function r2() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              .installed=",
          "\n              name=",
          "\n              tagVariant=",
          "\n              tagLabel=",
          "\n              data-testid=",
          "\n              @click=",
          "\n              tabIdx=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (r2 = function () {
            return t;
          }),
          t
        );
      }
      function r6() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (r6 = function () {
            return t;
          }),
          t
        );
      }
      var r4 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let r7 = class extends r5.LitElement {
        render() {
          let t = this.connectors.filter(eT.ConnectorUtil.showConnector);
          return 0 === t.length
            ? ((this.style.cssText = "display: none"), null)
            : (0, i.html)(
                r6(),
                t.map((t) => {
                  var e, n;
                  let o = (
                    null != (e = this.connections.get(t.chain)) ? e : []
                  ).some((e) =>
                    n0.HelpersUtil.isLowerCaseMatch(e.connectorId, t.id)
                  );
                  return (0, i.html)(
                    r2(),
                    (0, l.ifDefined)(c.AssetUtil.getConnectorImage(t)),
                    !0,
                    null != (n = t.name) ? n : "Unknown",
                    o ? "shade" : "success",
                    o ? "connected" : "installed",
                    "wallet-selector-".concat(t.id),
                    () => this.onConnector(t),
                    (0, l.ifDefined)(this.tabIdx)
                  );
                })
              );
        }
        onConnector(t) {
          tS.ConnectorController.setActiveConnector(t),
            tR.RouterController.push("ConnectingExternal", { connector: t });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = []),
            (this.connections = tE.ConnectionController.state.connections),
            this.unsubscribe.push(
              tE.ConnectionController.subscribeKey(
                "connections",
                (t) => (this.connections = t)
              )
            );
        }
      };
      r4([(0, o.property)()], r7.prototype, "tabIdx", void 0),
        r4([(0, o.property)()], r7.prototype, "connectors", void 0),
        r4([(0, r.state)()], r7.prototype, "connections", void 0),
        (r7 = r4([(0, w.customElement)("w3m-connect-injected-widget")], r7));
      var r8 = n;
      function r9() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              .installed=",
          "\n              name=",
          '\n              tagVariant="shade"\n              tagLabel="multichain"\n              data-testid=',
          "\n              @click=",
          "\n              tabIdx=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (r9 = function () {
            return t;
          }),
          t
        );
      }
      function lt() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (lt = function () {
            return t;
          }),
          t
        );
      }
      var le = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let ln = class extends r8.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let t = this.connectors.filter(
            (t) => "MULTI_CHAIN" === t.type && "WalletConnect" !== t.name
          );
          return (null == t ? void 0 : t.length)
            ? (0, i.html)(
                lt(),
                t.map((t) => {
                  var e;
                  return (0, i.html)(
                    r9(),
                    (0, l.ifDefined)(c.AssetUtil.getConnectorImage(t)),
                    !0,
                    null != (e = t.name) ? e : "Unknown",
                    "wallet-selector-".concat(t.id),
                    () => this.onConnector(t),
                    (0, l.ifDefined)(this.tabIdx)
                  );
                })
              )
            : ((this.style.cssText = "display: none"), null);
        }
        onConnector(t) {
          tS.ConnectorController.setActiveConnector(t),
            tR.RouterController.push("ConnectingMultiChain");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              )
            );
        }
      };
      le([(0, o.property)()], ln.prototype, "tabIdx", void 0),
        le([(0, r.state)()], ln.prototype, "connectors", void 0),
        (ln = le([(0, w.customElement)("w3m-connect-multi-chain-widget")], ln));
      var li = n;
      function lo() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              name=",
          "\n              @click=",
          '\n              tagLabel="recent"\n              tagVariant="shade"\n              tabIdx=',
          "\n              ?loading=",
          "\n              ?disabled=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (lo = function () {
            return t;
          }),
          t
        );
      }
      function lr() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (lr = function () {
            return t;
          }),
          t
        );
      }
      var ll = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let la = class extends li.LitElement {
        render() {
          let t = tB.StorageUtil.getRecentWallets()
            .filter((t) => !i2.WalletUtil.isExcluded(t))
            .filter((t) => !this.hasWalletConnector(t))
            .filter((t) => this.isWalletCompatibleWithCurrentChain(t));
          if (!t.length) return (this.style.cssText = "display: none"), null;
          let e = tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
          );
          return (0, i.html)(
            lr(),
            t.map((t) => {
              var n;
              return (0, i.html)(
                lo(),
                (0, l.ifDefined)(c.AssetUtil.getWalletImage(t)),
                null != (n = t.name) ? n : "Unknown",
                () => this.onConnectWallet(t),
                (0, l.ifDefined)(this.tabIdx),
                this.loading,
                e
              );
            })
          );
        }
        onConnectWallet(t) {
          this.loading || tS.ConnectorController.selectWalletConnector(t);
        }
        hasWalletConnector(t) {
          return this.connectors.some(
            (e) => e.id === t.id || e.name === t.name
          );
        }
        isWalletCompatibleWithCurrentChain(t) {
          let e = u.ChainController.state.activeChain;
          return !e || !t.chains || t.chains.some((t) => e === t.split(":")[0]);
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.loading = !1),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              )
            ),
            d.CoreHelperUtil.isTelegram() &&
              d.CoreHelperUtil.isIos() &&
              ((this.loading = !tE.ConnectionController.state.wcUri),
              this.unsubscribe.push(
                tE.ConnectionController.subscribeKey(
                  "wcUri",
                  (t) => (this.loading = !t)
                )
              ));
        }
      };
      ll([(0, o.property)()], la.prototype, "tabIdx", void 0),
        ll([(0, r.state)()], la.prototype, "connectors", void 0),
        ll([(0, r.state)()], la.prototype, "loading", void 0),
        (la = ll([(0, w.customElement)("w3m-connect-recent-widget")], la));
      var ls = n;
      function lc() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              name=",
          "\n              @click=",
          "\n              tabIdx=",
          "\n              ?loading=",
          "\n              ?disabled=",
          "\n            >\n            </wui-list-wallet>\n          ",
        ]);
        return (
          (lc = function () {
            return t;
          }),
          t
        );
      }
      function lu() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (lu = function () {
            return t;
          }),
          t
        );
      }
      var ld = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let lp = class extends ls.LitElement {
        render() {
          let { connectors: t } = tS.ConnectorController.state,
            { customWallets: e, featuredWalletIds: n } =
              h.OptionsController.state,
            o = tB.StorageUtil.getRecentWallets(),
            r = t.find((t) => "walletConnect" === t.id),
            a = t
              .filter(
                (t) =>
                  "INJECTED" === t.type ||
                  "ANNOUNCED" === t.type ||
                  "MULTI_CHAIN" === t.type
              )
              .filter((t) => "Browser Wallet" !== t.name);
          if (!r) return null;
          if (n || e || !this.wallets.length)
            return (this.style.cssText = "display: none"), null;
          let s = Math.max(0, 2 - (a.length + o.length)),
            u = i2.WalletUtil.filterOutDuplicateWallets(this.wallets).slice(
              0,
              s
            );
          if (!u.length) return (this.style.cssText = "display: none"), null;
          let d = tE.ConnectionController.hasAnyConnection(
            tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
          );
          return (0, i.html)(
            lu(),
            u.map((t) => {
              var e;
              return (0, i.html)(
                lc(),
                (0, l.ifDefined)(c.AssetUtil.getWalletImage(t)),
                null != (e = null == t ? void 0 : t.name) ? e : "Unknown",
                () => this.onConnectWallet(t),
                (0, l.ifDefined)(this.tabIdx),
                this.loading,
                d
              );
            })
          );
        }
        onConnectWallet(t) {
          if (this.loading) return;
          let e = tS.ConnectorController.getConnector(t.id, t.rdns);
          e
            ? tR.RouterController.push("ConnectingExternal", { connector: e })
            : tR.RouterController.push("ConnectingWalletConnect", {
                wallet: t,
              });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.wallets = []),
            (this.loading = !1),
            d.CoreHelperUtil.isTelegram() &&
              d.CoreHelperUtil.isIos() &&
              ((this.loading = !tE.ConnectionController.state.wcUri),
              this.unsubscribe.push(
                tE.ConnectionController.subscribeKey(
                  "wcUri",
                  (t) => (this.loading = !t)
                )
              ));
        }
      };
      ld([(0, o.property)()], lp.prototype, "tabIdx", void 0),
        ld([(0, o.property)()], lp.prototype, "wallets", void 0),
        ld([(0, r.state)()], lp.prototype, "loading", void 0),
        (lp = ld([(0, w.customElement)("w3m-connect-recommended-widget")], lp));
      var lh = n;
      function lw() {
        let t = (0, e._)([
          "\n      <wui-list-wallet\n        imageSrc=",
          "\n        name=",
          "\n        @click=",
          '\n        tagLabel="qr code"\n        tagVariant="main"\n        tabIdx=',
          '\n        data-testid="wallet-selector-walletconnect"\n        ?disabled=',
          "\n      >\n      </wui-list-wallet>\n    ",
        ]);
        return (
          (lw = function () {
            return t;
          }),
          t
        );
      }
      var lf = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let lm = class extends lh.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          var t, e;
          if (d.CoreHelperUtil.isMobile())
            return (this.style.cssText = "display: none"), null;
          let n = this.connectors.find((t) => "walletConnect" === t.id);
          if (!n) return (this.style.cssText = "display: none"), null;
          let o =
              n.imageUrl ||
              this.connectorImages[
                null != (t = null == n ? void 0 : n.imageId) ? t : ""
              ],
            r = tE.ConnectionController.hasAnyConnection(
              tk.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
            );
          return (0, i.html)(
            lw(),
            (0, l.ifDefined)(o),
            null != (e = n.name) ? e : "Unknown",
            () => this.onConnector(n),
            (0, l.ifDefined)(this.tabIdx),
            r
          );
        }
        onConnector(t) {
          tS.ConnectorController.setActiveConnector(t),
            tR.RouterController.push("ConnectingWalletConnect");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.connectorImages = s.AssetController.state.connectorImages),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              ),
              s.AssetController.subscribeKey(
                "connectorImages",
                (t) => (this.connectorImages = t)
              )
            );
        }
      };
      function lg() {
        let t = (0, e._)([
          "\n  :host {\n    margin-top: var(--wui-spacing-3xs);\n  }\n  wui-separator {\n    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)\n      calc(var(--wui-spacing-m) * -1);\n    width: calc(100% + var(--wui-spacing-s) * 2);\n  }\n",
        ]);
        return (
          (lg = function () {
            return t;
          }),
          t
        );
      }
      lf([(0, o.property)()], lm.prototype, "tabIdx", void 0),
        lf([(0, r.state)()], lm.prototype, "connectors", void 0),
        lf([(0, r.state)()], lm.prototype, "connectorImages", void 0),
        (lm = lf(
          [(0, w.customElement)("w3m-connect-walletconnect-widget")],
          lm
        ));
      let lb = (0, b.css)(lg());
      function lv() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs"> ',
          " </wui-flex>\n    ",
        ]);
        return (
          (lv = function () {
            return t;
          }),
          t
        );
      }
      function lC() {
        let t = (0, e._)([
          "<w3m-connect-multi-chain-widget\n                  tabIdx=",
          "\n                ></w3m-connect-multi-chain-widget>",
        ]);
        return (
          (lC = function () {
            return t;
          }),
          t
        );
      }
      function ly() {
        let t = (0, e._)([
          "<w3m-connect-announced-widget\n                  tabIdx=",
          "\n                ></w3m-connect-announced-widget>",
        ]);
        return (
          (ly = function () {
            return t;
          }),
          t
        );
      }
      function lx() {
        let t = (0, e._)([
          "<w3m-connect-injected-widget\n                  .connectors=",
          "\n                  tabIdx=",
          "\n                ></w3m-connect-injected-widget>",
        ]);
        return (
          (lx = function () {
            return t;
          }),
          t
        );
      }
      function lk() {
        let t = (0, e._)([
          "\n            ",
          "\n            ",
          "\n            ",
          "\n          ",
        ]);
        return (
          (lk = function () {
            return t;
          }),
          t
        );
      }
      function lE() {
        let t = (0, e._)([
          "<w3m-connect-walletconnect-widget\n            tabIdx=",
          "\n          ></w3m-connect-walletconnect-widget>",
        ]);
        return (
          (lE = function () {
            return t;
          }),
          t
        );
      }
      function lS() {
        let t = (0, e._)([
          "<w3m-connect-recent-widget\n            tabIdx=",
          "\n          ></w3m-connect-recent-widget>",
        ]);
        return (
          (lS = function () {
            return t;
          }),
          t
        );
      }
      function lA() {
        let t = (0, e._)([
          "<w3m-connect-featured-widget\n            .wallets=",
          "\n            tabIdx=",
          "\n          ></w3m-connect-featured-widget>",
        ]);
        return (
          (lA = function () {
            return t;
          }),
          t
        );
      }
      function lR() {
        let t = (0, e._)([
          "<w3m-connect-custom-widget\n            tabIdx=",
          "\n          ></w3m-connect-custom-widget>",
        ]);
        return (
          (lR = function () {
            return t;
          }),
          t
        );
      }
      function lI() {
        let t = (0, e._)([
          "<w3m-connect-external-widget\n            tabIdx=",
          "\n          ></w3m-connect-external-widget>",
        ]);
        return (
          (lI = function () {
            return t;
          }),
          t
        );
      }
      function lT() {
        let t = (0, e._)([
          "<w3m-connect-recommended-widget\n            .wallets=",
          "\n            tabIdx=",
          "\n          ></w3m-connect-recommended-widget>",
        ]);
        return (
          (lT = function () {
            return t;
          }),
          t
        );
      }
      var lO = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let l_ = class extends rP.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(lv(), this.connectorListTemplate());
        }
        connectorListTemplate() {
          let {
            custom: t,
            recent: e,
            announced: n,
            injected: o,
            multiChain: r,
            recommended: a,
            featured: s,
            external: c,
          } = eT.ConnectorUtil.getConnectorsByType(
            this.connectors,
            this.recommended,
            this.featured
          );
          return eT.ConnectorUtil.getConnectorTypeOrder({
            custom: t,
            recent: e,
            announced: n,
            injected: o,
            multiChain: r,
            recommended: a,
            featured: s,
            external: c,
          }).map((t) => {
            switch (t) {
              case "injected":
                return (0, i.html)(
                  lk(),
                  r.length
                    ? (0, i.html)(lC(), (0, l.ifDefined)(this.tabIdx))
                    : null,
                  n.length
                    ? (0, i.html)(ly(), (0, l.ifDefined)(this.tabIdx))
                    : null,
                  o.length
                    ? (0, i.html)(lx(), o, (0, l.ifDefined)(this.tabIdx))
                    : null
                );
              case "walletConnect":
                return (0, i.html)(lE(), (0, l.ifDefined)(this.tabIdx));
              case "recent":
                return (0, i.html)(lS(), (0, l.ifDefined)(this.tabIdx));
              case "featured":
                return (0, i.html)(lA(), s, (0, l.ifDefined)(this.tabIdx));
              case "custom":
                return (0, i.html)(lR(), (0, l.ifDefined)(this.tabIdx));
              case "external":
                return (0, i.html)(lI(), (0, l.ifDefined)(this.tabIdx));
              case "recommended":
                return (0, i.html)(lT(), a, (0, l.ifDefined)(this.tabIdx));
              default:
                return console.warn("Unknown connector type: ".concat(t)), null;
            }
          });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tabIdx = void 0),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.recommended = iF.ApiController.state.recommended),
            (this.featured = iF.ApiController.state.featured),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "connectors",
                (t) => (this.connectors = t)
              ),
              iF.ApiController.subscribeKey(
                "recommended",
                (t) => (this.recommended = t)
              ),
              iF.ApiController.subscribeKey(
                "featured",
                (t) => (this.featured = t)
              )
            );
        }
      };
      function lN() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" gap="xs">\n        <w3m-connector-list tabIdx=',
          "></w3m-connector-list>\n        <w3m-all-wallets-widget tabIdx=",
          "></w3m-all-wallets-widget>\n      </wui-flex>\n    ",
        ]);
        return (
          (lN = function () {
            return t;
          }),
          t
        );
      }
      (l_.styles = lb),
        lO([(0, o.property)()], l_.prototype, "tabIdx", void 0),
        lO([(0, r.state)()], l_.prototype, "connectors", void 0),
        lO([(0, r.state)()], l_.prototype, "recommended", void 0),
        lO([(0, r.state)()], l_.prototype, "featured", void 0),
        (l_ = lO([(0, w.customElement)("w3m-connector-list")], l_));
      var lU = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let lD = class extends ru.LitElement {
        render() {
          return (0, i.html)(
            lN(),
            (0, l.ifDefined)(this.tabIdx),
            (0, l.ifDefined)(this.tabIdx)
          );
        }
        constructor() {
          super(...arguments), (this.tabIdx = void 0);
        }
      };
      function lW() {
        let t = (0, e._)([
          "\n  :host {\n    --connect-scroll--top-opacity: 0;\n    --connect-scroll--bottom-opacity: 0;\n    --connect-mask-image: none;\n  }\n\n  .connect {\n    max-height: clamp(360px, 470px, 80vh);\n    scrollbar-width: none;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: opacity;\n    mask-image: var(--connect-mask-image);\n  }\n\n  .guide {\n    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: opacity;\n  }\n\n  .connect::-webkit-scrollbar {\n    display: none;\n  }\n\n  .all-wallets {\n    flex-flow: column;\n  }\n\n  .connect.disabled,\n  .guide.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    user-select: none;\n  }\n\n  wui-separator {\n    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);\n    width: calc(100% + var(--wui-spacing-s) * 2);\n  }\n",
        ]);
        return (
          (lW = function () {
            return t;
          }),
          t
        );
      }
      lU([(0, o.property)()], lD.prototype, "tabIdx", void 0),
        (lD = lU([(0, w.customElement)("w3m-wallet-login-list")], lD));
      let lP = (0, b.css)(lW());
      function lL() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column">\n        ',
          '\n        <wui-flex\n          data-testid="w3m-connect-scroll-view"\n          flexDirection="column"\n          class=',
          '\n        >\n          <wui-flex\n            class="connect-methods"\n            flexDirection="column"\n            gap="s"\n            .padding=',
          "\n          >\n            ",
          "\n          </wui-flex>\n        </wui-flex>\n        ",
          "\n        <w3m-legal-footer></w3m-legal-footer>\n      </wui-flex>\n    ",
        ]);
        return (
          (lL = function () {
            return t;
          }),
          t
        );
      }
      function lj() {
        let t = (0, e._)(["", " ", ""]);
        return (
          (lj = function () {
            return t;
          }),
          t
        );
      }
      function lB() {
        let t = (0, e._)(["", "\n          ", ""]);
        return (
          (lB = function () {
            return t;
          }),
          t
        );
      }
      function lz() {
        let t = (0, e._)(["", "\n          ", ""]);
        return (
          (lz = function () {
            return t;
          }),
          t
        );
      }
      function lH() {
        let t = (0, e._)(["", ""]);
        return (
          (lH = function () {
            return t;
          }),
          t
        );
      }
      function lF() {
        let t = (0, e._)([
          '<wui-separator data-testid="wui-separator" text="or"></wui-separator>',
        ]);
        return (
          (lF = function () {
            return t;
          }),
          t
        );
      }
      function lM() {
        let t = (0, e._)([
          '<wui-separator\n              data-testid="w3m-email-login-or-separator"\n              text="or"\n            ></wui-separator>',
        ]);
        return (
          (lM = function () {
            return t;
          }),
          t
        );
      }
      function lV() {
        let t = (0, e._)([
          '<wui-separator data-testid="wui-separator" text="or"></wui-separator>',
        ]);
        return (
          (lV = function () {
            return t;
          }),
          t
        );
      }
      function lK() {
        let t = (0, e._)([
          "<w3m-email-login-widget\n      walletGuide=",
          "\n      tabIdx=",
          "\n    ></w3m-email-login-widget>",
        ]);
        return (
          (lK = function () {
            return t;
          }),
          t
        );
      }
      function lG() {
        let t = (0, e._)([
          "<w3m-social-login-widget\n      walletGuide=",
          "\n      tabIdx=",
          "\n    ></w3m-social-login-widget>",
        ]);
        return (
          (lG = function () {
            return t;
          }),
          t
        );
      }
      function lq() {
        let t = (0, e._)([
          '<wui-list-button\n        data-testid="w3m-collapse-wallets-button"\n        tabIdx=',
          "\n        @click=",
          '\n        text="Continue with a wallet"\n      ></wui-list-button>',
        ]);
        return (
          (lq = function () {
            return t;
          }),
          t
        );
      }
      function lY() {
        let t = (0, e._)([
          "<w3m-wallet-login-list tabIdx=",
          "></w3m-wallet-login-list>",
        ]);
        return (
          (lY = function () {
            return t;
          }),
          t
        );
      }
      function lX() {
        let t = (0, e._)([
          '<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>',
        ]);
        return (
          (lX = function () {
            return t;
          }),
          t
        );
      }
      function lQ() {
        let t = (0, e._)([
          "\n      ",
          "\n      <w3m-wallet-guide\n        class=",
          "\n        tabIdx=",
          "\n        walletGuide=",
          "\n      ></w3m-wallet-guide>\n    ",
        ]);
        return (
          (lQ = function () {
            return t;
          }),
          t
        );
      }
      function lZ() {
        let t = (0, e._)([
          '<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>',
        ]);
        return (
          (lZ = function () {
            return t;
          }),
          t
        );
      }
      var lJ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let l$ = class extends oR.LitElement {
        disconnectedCallback() {
          var t, e;
          this.unsubscribe.forEach((t) => t()),
            null == (t = this.resizeObserver) || t.disconnect();
          let n =
            null == (e = this.shadowRoot)
              ? void 0
              : e.querySelector(".connect");
          null == n ||
            n.removeEventListener(
              "scroll",
              this.handleConnectListScroll.bind(this)
            );
        }
        firstUpdated() {
          var t, e;
          let n =
            null == (t = this.shadowRoot)
              ? void 0
              : t.querySelector(".connect");
          n &&
            (requestAnimationFrame(this.handleConnectListScroll.bind(this)),
            null == n ||
              n.addEventListener(
                "scroll",
                this.handleConnectListScroll.bind(this)
              ),
            (this.resizeObserver = new ResizeObserver(() => {
              this.handleConnectListScroll();
            })),
            null == (e = this.resizeObserver) || e.observe(n),
            this.handleConnectListScroll());
        }
        render() {
          var t;
          let { termsConditionsUrl: e, privacyPolicyUrl: n } =
              h.OptionsController.state,
            o =
              null == (t = h.OptionsController.state.features)
                ? void 0
                : t.legalCheckbox,
            r =
              !!(e || n) &&
              !!o &&
              "get-started" === this.walletGuide &&
              !this.checked,
            l = h.OptionsController.state.enableWalletGuide,
            a = this.enableWallets,
            s = this.isSocialEnabled || this.authConnector,
            c = r ? -1 : void 0;
          return (0, i.html)(
            lL(),
            this.legalCheckboxTemplate(),
            (0, ny.classMap)({ connect: !0, disabled: r }),
            s && a && l && "get-started" === this.walletGuide
              ? ["3xs", "s", "0", "s"]
              : ["3xs", "s", "s", "s"],
            this.renderConnectMethod(c),
            this.guideTemplate(r)
          );
        }
        setEmailAndSocialEnableCheck(t, e) {
          (this.isEmailEnabled = (null == e ? void 0 : e.email) && !t),
            (this.isSocialEnabled =
              (null == e ? void 0 : e.socials) && e.socials.length > 0 && !t),
            (this.remoteFeatures = e),
            (this.noAdapters = t);
        }
        checkIfAuthEnabled(t) {
          let e = t
            .filter((t) => t.type === oW.ConstantsUtil.CONNECTOR_TYPE_AUTH)
            .map((t) => t.chain);
          return tk.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((t) =>
            e.includes(t)
          );
        }
        renderConnectMethod(t) {
          let e = i2.WalletUtil.getConnectOrderMethod(
            this.features,
            this.connectors
          );
          return (0, i.html)(
            lH(),
            e.map((e, n) => {
              switch (e) {
                case "email":
                  return (0, i.html)(
                    lj(),
                    this.emailTemplate(t),
                    this.separatorTemplate(n, "email")
                  );
                case "social":
                  return (0, i.html)(
                    lB(),
                    this.socialListTemplate(t),
                    this.separatorTemplate(n, "social")
                  );
                case "wallet":
                  return (0, i.html)(
                    lz(),
                    this.walletListTemplate(t),
                    this.separatorTemplate(n, "wallet")
                  );
                default:
                  return null;
              }
            })
          );
        }
        checkMethodEnabled(t) {
          switch (t) {
            case "wallet":
              return this.enableWallets;
            case "social":
              return this.isSocialEnabled && this.isAuthEnabled;
            case "email":
              return this.isEmailEnabled && this.isAuthEnabled;
            default:
              return null;
          }
        }
        checkIsThereNextMethod(t) {
          let e = i2.WalletUtil.getConnectOrderMethod(
            this.features,
            this.connectors
          )[t + 1];
          return e
            ? this.checkMethodEnabled(e)
              ? e
              : this.checkIsThereNextMethod(t + 1)
            : void 0;
        }
        separatorTemplate(t, e) {
          let n = this.checkIsThereNextMethod(t),
            o = "explore" === this.walletGuide;
          switch (e) {
            case "wallet":
              return this.enableWallets && n && !o ? (0, i.html)(lF()) : null;
            case "email":
              return this.isAuthEnabled &&
                this.isEmailEnabled &&
                "social" !== n &&
                n
                ? (0, i.html)(lM())
                : null;
            case "social":
              return this.isAuthEnabled &&
                this.isSocialEnabled &&
                "email" !== n &&
                n
                ? (0, i.html)(lV())
                : null;
            default:
              return null;
          }
        }
        emailTemplate(t) {
          return this.isEmailEnabled && this.isAuthEnabled
            ? (0, i.html)(lK(), this.walletGuide, (0, l.ifDefined)(t))
            : null;
        }
        socialListTemplate(t) {
          return this.isSocialEnabled && this.isAuthEnabled
            ? (0, i.html)(lG(), this.walletGuide, (0, l.ifDefined)(t))
            : null;
        }
        walletListTemplate(t) {
          var e, n;
          let o = this.enableWallets,
            r =
              (null == (e = this.features) ? void 0 : e.emailShowWallets) ===
              !1,
            a = null == (n = this.features) ? void 0 : n.collapseWallets;
          return o
            ? (d.CoreHelperUtil.isTelegram() &&
                (d.CoreHelperUtil.isSafari() || d.CoreHelperUtil.isIos()) &&
                tE.ConnectionController.connectWalletConnect().catch(
                  (t) => ({})
                ),
              "explore" === this.walletGuide)
              ? null
              : this.isAuthEnabled &&
                (this.isEmailEnabled || this.isSocialEnabled) &&
                (r || a)
              ? (0, i.html)(
                  lq(),
                  (0, l.ifDefined)(t),
                  this.onContinueWalletClick.bind(this)
                )
              : (0, i.html)(lY(), (0, l.ifDefined)(t))
            : null;
        }
        guideTemplate() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return h.OptionsController.state.enableWalletGuide &&
            (this.authConnector || this.isSocialEnabled)
            ? (0, i.html)(
                lQ(),
                "explore" !== this.walletGuide ||
                  u.ChainController.state.noAdapters
                  ? null
                  : (0, i.html)(lX()),
                (0, ny.classMap)({ guide: !0, disabled: t }),
                (0, l.ifDefined)(t ? -1 : void 0),
                this.walletGuide
              )
            : null;
        }
        legalCheckboxTemplate() {
          return "explore" === this.walletGuide ? null : (0, i.html)(lZ());
        }
        handleConnectListScroll() {
          var t;
          let e =
            null == (t = this.shadowRoot)
              ? void 0
              : t.querySelector(".connect");
          e &&
            (e.scrollHeight > 470
              ? (e.style.setProperty(
                  "--connect-mask-image",
                  "linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"
                ),
                e.style.setProperty(
                  "--connect-scroll--top-opacity",
                  nE.MathUtil.interpolate(
                    [0, 50],
                    [0, 1],
                    e.scrollTop
                  ).toString()
                ),
                e.style.setProperty(
                  "--connect-scroll--bottom-opacity",
                  nE.MathUtil.interpolate(
                    [0, 50],
                    [0, 1],
                    e.scrollHeight - e.scrollTop - e.offsetHeight
                  ).toString()
                ))
              : (e.style.setProperty("--connect-mask-image", "none"),
                e.style.setProperty("--connect-scroll--top-opacity", "0"),
                e.style.setProperty("--connect-scroll--bottom-opacity", "0")));
        }
        onContinueWalletClick() {
          tR.RouterController.push("ConnectWallets");
        }
        constructor() {
          var t, e;
          super(),
            (this.unsubscribe = []),
            (this.connectors = tS.ConnectorController.state.connectors),
            (this.authConnector = this.connectors.find(
              (t) => "AUTH" === t.type
            )),
            (this.features = h.OptionsController.state.features),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            (this.enableWallets = h.OptionsController.state.enableWallets),
            (this.noAdapters = u.ChainController.state.noAdapters),
            (this.walletGuide = "get-started"),
            (this.checked =
              oI.OptionsStateController.state.isLegalCheckboxChecked),
            (this.isEmailEnabled =
              (null == (t = this.remoteFeatures) ? void 0 : t.email) &&
              !u.ChainController.state.noAdapters),
            (this.isSocialEnabled =
              (null == (e = this.remoteFeatures) ? void 0 : e.socials) &&
              this.remoteFeatures.socials.length > 0 &&
              !u.ChainController.state.noAdapters),
            (this.isAuthEnabled = this.checkIfAuthEnabled(this.connectors)),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey("connectors", (t) => {
                (this.connectors = t),
                  (this.authConnector = this.connectors.find(
                    (t) => "AUTH" === t.type
                  )),
                  (this.isAuthEnabled = this.checkIfAuthEnabled(
                    this.connectors
                  ));
              }),
              h.OptionsController.subscribeKey("features", (t) => {
                this.features = t;
              }),
              h.OptionsController.subscribeKey("remoteFeatures", (t) => {
                (this.remoteFeatures = t),
                  this.setEmailAndSocialEnableCheck(
                    this.noAdapters,
                    this.remoteFeatures
                  );
              }),
              h.OptionsController.subscribeKey(
                "enableWallets",
                (t) => (this.enableWallets = t)
              ),
              u.ChainController.subscribeKey("noAdapters", (t) =>
                this.setEmailAndSocialEnableCheck(t, this.remoteFeatures)
              ),
              oI.OptionsStateController.subscribeKey(
                "isLegalCheckboxChecked",
                (t) => (this.checked = t)
              )
            );
        }
      };
      (l$.styles = lP),
        lJ([(0, r.state)()], l$.prototype, "connectors", void 0),
        lJ([(0, r.state)()], l$.prototype, "authConnector", void 0),
        lJ([(0, r.state)()], l$.prototype, "features", void 0),
        lJ([(0, r.state)()], l$.prototype, "remoteFeatures", void 0),
        lJ([(0, r.state)()], l$.prototype, "enableWallets", void 0),
        lJ([(0, r.state)()], l$.prototype, "noAdapters", void 0),
        lJ([(0, o.property)()], l$.prototype, "walletGuide", void 0),
        lJ([(0, r.state)()], l$.prototype, "checked", void 0),
        lJ([(0, r.state)()], l$.prototype, "isEmailEnabled", void 0),
        lJ([(0, r.state)()], l$.prototype, "isSocialEnabled", void 0),
        lJ([(0, r.state)()], l$.prototype, "isAuthEnabled", void 0),
        (l$ = lJ([(0, w.customElement)("w3m-connect-view")], l$)),
        t.s({ W3mConnectingExternalView: () => af }, 308192);
      var l0 = n,
        l3 = t.i(350666);
      t.i(667766);
      var l1 = n,
        l5 = n;
      function l2() {
        let t = (0, e._)([
          "\n  wui-flex {\n    width: 100%;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n  }\n",
        ]);
        return (
          (l2 = function () {
            return t;
          }),
          t
        );
      }
      t.i(761157);
      let l6 = (0, b.css)(l2());
      function l4() {
        let t = (0, e._)([
          '\n      <wui-flex\n        justifyContent="space-between"\n        alignItems="center"\n        .padding=',
          '\n      >\n        <wui-text variant="paragraph-500" color="fg-200">',
          '</wui-text>\n        <wui-chip-button size="sm" variant="shade" text=',
          ' icon="chevronRight">\n        </wui-chip-button>\n      </wui-flex>\n    ',
        ]);
        return (
          (l4 = function () {
            return t;
          }),
          t
        );
      }
      var l7 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let l8 = class extends l5.LitElement {
        render() {
          return (0, i.html)(
            l4(),
            ["1xs", "2l", "1xs", "2l"],
            this.label,
            this.buttonLabel
          );
        }
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.label = ""),
            (this.buttonLabel = "");
        }
      };
      function l9() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);\n  }\n",
        ]);
        return (
          (l9 = function () {
            return t;
          }),
          t
        );
      }
      (l8.styles = [m.resetStyles, m.elementStyles, l6]),
        l7(
          [(0, o.property)({ type: Boolean })],
          l8.prototype,
          "disabled",
          void 0
        ),
        l7([(0, o.property)()], l8.prototype, "label", void 0),
        l7([(0, o.property)()], l8.prototype, "buttonLabel", void 0),
        (l8 = l7([(0, w.customElement)("wui-cta-button")], l8));
      let at = (0, b.css)(l9());
      function ae() {
        let t = (0, e._)([
          "\n        <wui-cta-button\n          label=",
          '\n          buttonLabel="Get"\n          @click=',
          "\n        ></wui-cta-button>\n      ",
        ]);
        return (
          (ae = function () {
            return t;
          }),
          t
        );
      }
      function an() {
        let t = (0, e._)([
          "\n        <wui-cta-button\n          label=",
          '\n          buttonLabel="Get"\n          @click=',
          "\n        ></wui-cta-button>\n      ",
        ]);
        return (
          (an = function () {
            return t;
          }),
          t
        );
      }
      function ai() {
        let t = (0, e._)([
          "\n        <wui-cta-button\n          label=",
          '\n          buttonLabel="Get"\n          @click=',
          "\n        ></wui-cta-button>\n      ",
        ]);
        return (
          (ai = function () {
            return t;
          }),
          t
        );
      }
      function ao() {
        let t = (0, e._)([
          "\n        <wui-cta-button\n          label=",
          '\n          buttonLabel="Get"\n          @click=',
          "\n        ></wui-cta-button>\n      ",
        ]);
        return (
          (ao = function () {
            return t;
          }),
          t
        );
      }
      var ar = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let al = class extends l1.LitElement {
        render() {
          if (!this.wallet) return (this.style.display = "none"), null;
          let {
              name: t,
              app_store: e,
              play_store: n,
              chrome_store: o,
              homepage: r,
            } = this.wallet,
            l = d.CoreHelperUtil.isMobile(),
            a = d.CoreHelperUtil.isIos(),
            s = d.CoreHelperUtil.isAndroid(),
            c = [e, n, r, o].filter(Boolean).length > 1,
            u = g.UiHelperUtil.getTruncateString({
              string: t,
              charsStart: 12,
              charsEnd: 0,
              truncate: "end",
            });
          return c && !l
            ? (0, i.html)(ae(), "Don't have ".concat(u, "?"), () =>
                tR.RouterController.push("Downloads", { wallet: this.wallet })
              )
            : !c && r
            ? (0, i.html)(
                an(),
                "Don't have ".concat(u, "?"),
                this.onHomePage.bind(this)
              )
            : e && a
            ? (0, i.html)(
                ai(),
                "Don't have ".concat(u, "?"),
                this.onAppStore.bind(this)
              )
            : n && s
            ? (0, i.html)(
                ao(),
                "Don't have ".concat(u, "?"),
                this.onPlayStore.bind(this)
              )
            : ((this.style.display = "none"), null);
        }
        onAppStore() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.app_store) &&
            d.CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
        }
        onPlayStore() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.play_store) &&
            d.CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
        }
        onHomePage() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.homepage) &&
            d.CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
        }
        constructor() {
          super(...arguments), (this.wallet = void 0);
        }
      };
      function aa() {
        let t = (0, e._)([
          "\n  @keyframes shake {\n    0% {\n      transform: translateX(0);\n    }\n    25% {\n      transform: translateX(3px);\n    }\n    50% {\n      transform: translateX(-3px);\n    }\n    75% {\n      transform: translateX(3px);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n\n  wui-flex:first-child:not(:only-child) {\n    position: relative;\n  }\n\n  wui-loading-thumbnail {\n    position: absolute;\n  }\n\n  wui-icon-box {\n    position: absolute;\n    right: calc(var(--wui-spacing-3xs) * -1);\n    bottom: calc(var(--wui-spacing-3xs) * -1);\n    opacity: 0;\n    transform: scale(0.5);\n    transition-property: opacity, transform;\n    transition-duration: var(--wui-duration-lg);\n    transition-timing-function: var(--wui-ease-out-power-2);\n    will-change: opacity, transform;\n  }\n\n  wui-text[align='center'] {\n    width: 100%;\n    padding: 0px var(--wui-spacing-l);\n  }\n\n  [data-error='true'] wui-icon-box {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  [data-error='true'] > wui-flex:first-child {\n    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  }\n\n  [data-retry='false'] wui-link {\n    display: none;\n  }\n\n  [data-retry='true'] wui-link {\n    display: block;\n    opacity: 1;\n  }\n",
        ]);
        return (
          (aa = function () {
            return t;
          }),
          t
        );
      }
      (al.styles = [at]),
        ar([(0, o.property)({ type: Object })], al.prototype, "wallet", void 0),
        (al = ar([(0, w.customElement)("w3m-mobile-download-links")], al));
      let as = (0, b.css)(aa());
      function ac() {
        let t = (0, e._)([
          '\n              <wui-button\n                variant="accent"\n                size="md"\n                ?disabled=',
          "\n                @click=",
          '\n                data-testid="w3m-connecting-widget-secondary-button"\n              >\n                <wui-icon color="inherit" slot="iconLeft" name=',
          "></wui-icon>\n                ",
          "\n              </wui-button>\n            ",
        ]);
        return (
          (ac = function () {
            return t;
          }),
          t
        );
      }
      function au() {
        let t = (0, e._)([
          "\n            <wui-flex .padding=",
          ' justifyContent="center">\n              <wui-link @click=',
          ' color="fg-200" data-testid="wui-link-copy">\n                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>\n                Copy link\n              </wui-link>\n            </wui-flex>\n          ',
        ]);
        return (
          (au = function () {
            return t;
          }),
          t
        );
      }
      function ad() {
        let t = (0, e._)([
          "\n      <wui-flex\n        data-error=",
          "\n        data-retry=",
          '\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
          '\n        gap="xl"\n      >\n        <wui-flex justifyContent="center" alignItems="center">\n          <wui-wallet-image size="lg" imageSrc=',
          "></wui-wallet-image>\n\n          ",
          '\n\n          <wui-icon-box\n            backgroundColor="error-100"\n            background="opaque"\n            iconColor="error-100"\n            icon="close"\n            size="sm"\n            border\n            borderColor="wui-color-bg-125"\n          ></wui-icon-box>\n        </wui-flex>\n\n        <wui-flex flexDirection="column" alignItems="center" gap="xs">\n          <wui-text\n            align="center"\n            variant="paragraph-500"\n            color=',
          "\n          >\n            ",
          '\n          </wui-text>\n          <wui-text align="center" variant="small-500" color="fg-200">',
          "</wui-text>\n        </wui-flex>\n\n        ",
          "\n      </wui-flex>\n\n      ",
          "\n\n      <w3m-mobile-download-links .wallet=",
          "></w3m-mobile-download-links>\n    ",
        ]);
        return (
          (ad = function () {
            return t;
          }),
          t
        );
      }
      function ap() {
        let t = (0, e._)([
          "<wui-loading-thumbnail radius=",
          "></wui-loading-thumbnail>",
        ]);
        return (
          (ap = function () {
            return t;
          }),
          t
        );
      }
      var ah = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      class aw extends l0.LitElement {
        firstUpdated() {
          var t;
          null == (t = this.onAutoConnect) || t.call(this),
            (this.showRetry = !this.onAutoConnect);
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t()),
            tE.ConnectionController.setWcError(!1),
            clearTimeout(this.timeout);
        }
        render() {
          var t;
          null == (t = this.onRender) || t.call(this), this.onShowRetry();
          let e = this.error
              ? "Connection can be declined if a previous request is still active"
              : this.secondaryLabel,
            n = "";
          return (
            this.label
              ? (n = this.label)
              : ((n = "Continue in ".concat(this.name)),
                this.error && (n = "Connection declined")),
            (0, i.html)(
              ad(),
              (0, l.ifDefined)(this.error),
              this.showRetry,
              ["3xl", "xl", "xl", "xl"],
              (0, l.ifDefined)(this.imageSrc),
              this.error ? null : this.loaderTemplate(),
              this.error ? "error-100" : "fg-100",
              n,
              e,
              this.secondaryBtnLabel
                ? (0, i.html)(
                    ac(),
                    this.isRetrying || this.isLoading,
                    this.onTryAgain.bind(this),
                    this.secondaryBtnIcon,
                    this.secondaryBtnLabel
                  )
                : null,
              this.isWalletConnect
                ? (0, i.html)(au(), ["0", "xl", "xl", "xl"], this.onCopyUri)
                : null,
              this.wallet
            )
          );
        }
        onShowRetry() {
          if (this.error && !this.showRetry) {
            var t;
            this.showRetry = !0;
            let e =
              null == (t = this.shadowRoot)
                ? void 0
                : t.querySelector("wui-button");
            null == e ||
              e.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: "forwards",
                easing: "ease",
              });
          }
        }
        onTryAgain() {
          var t, e;
          tE.ConnectionController.setWcError(!1),
            this.onRetry
              ? ((this.isRetrying = !0),
                null == (t = this.onRetry) || t.call(this))
              : null == (e = this.onConnect) || e.call(this);
        }
        loaderTemplate() {
          let t =
              l3.ThemeController.state.themeVariables[
                "--w3m-border-radius-master"
              ],
            e = t ? parseInt(t.replace("px", ""), 10) : 4;
          return (0, i.html)(ap(), 9 * e);
        }
        onCopyUri() {
          try {
            this.uri &&
              (d.CoreHelperUtil.copyToClopboard(this.uri),
              tT.SnackController.showSuccess("Link copied"));
          } catch (t) {
            tT.SnackController.showError("Failed to copy");
          }
        }
        constructor() {
          var t, e, n, i, o, r, l, a;
          super(),
            (this.wallet =
              null == (t = tR.RouterController.state.data) ? void 0 : t.wallet),
            (this.connector =
              null == (e = tR.RouterController.state.data)
                ? void 0
                : e.connector),
            (this.timeout = void 0),
            (this.secondaryBtnIcon = "refresh"),
            (this.onConnect = void 0),
            (this.onRender = void 0),
            (this.onAutoConnect = void 0),
            (this.isWalletConnect = !0),
            (this.unsubscribe = []),
            (this.imageSrc =
              null != (o = c.AssetUtil.getWalletImage(this.wallet))
                ? o
                : c.AssetUtil.getConnectorImage(this.connector)),
            (this.name =
              null !=
              (l =
                null != (r = null == (n = this.wallet) ? void 0 : n.name)
                  ? r
                  : null == (i = this.connector)
                  ? void 0
                  : i.name)
                ? l
                : "Wallet"),
            (this.isRetrying = !1),
            (this.uri = tE.ConnectionController.state.wcUri),
            (this.error = tE.ConnectionController.state.wcError),
            (this.ready = !1),
            (this.showRetry = !1),
            (this.label = void 0),
            (this.secondaryBtnLabel = "Try again"),
            (this.secondaryLabel = "Accept connection request in the wallet"),
            (this.isLoading = !1),
            (this.isMobile = !1),
            (this.onRetry = void 0),
            this.unsubscribe.push(
              tE.ConnectionController.subscribeKey("wcUri", (t) => {
                if (((this.uri = t), this.isRetrying && this.onRetry)) {
                  var e;
                  (this.isRetrying = !1),
                    null == (e = this.onConnect) || e.call(this);
                }
              }),
              tE.ConnectionController.subscribeKey(
                "wcError",
                (t) => (this.error = t)
              )
            ),
            (d.CoreHelperUtil.isTelegram() || d.CoreHelperUtil.isSafari()) &&
              d.CoreHelperUtil.isIos() &&
              tE.ConnectionController.state.wcUri &&
              (null == (a = this.onConnect) || a.call(this));
        }
      }
      (aw.styles = as),
        ah([(0, r.state)()], aw.prototype, "isRetrying", void 0),
        ah([(0, r.state)()], aw.prototype, "uri", void 0),
        ah([(0, r.state)()], aw.prototype, "error", void 0),
        ah([(0, r.state)()], aw.prototype, "ready", void 0),
        ah([(0, r.state)()], aw.prototype, "showRetry", void 0),
        ah([(0, r.state)()], aw.prototype, "label", void 0),
        ah([(0, r.state)()], aw.prototype, "secondaryBtnLabel", void 0),
        ah([(0, r.state)()], aw.prototype, "secondaryLabel", void 0),
        ah([(0, r.state)()], aw.prototype, "isLoading", void 0),
        ah(
          [(0, o.property)({ type: Boolean })],
          aw.prototype,
          "isMobile",
          void 0
        ),
        ah([(0, o.property)()], aw.prototype, "onRetry", void 0);
      let af = class extends aw {
        disconnectedCallback() {
          this.externalViewUnsubscribe.forEach((t) => t());
        }
        async onConnectProxy() {
          var t, e;
          try {
            if (((this.error = !1), this.connector)) {
              if (this.isAlreadyConnected(this.connector)) return;
              (this.connector.id ===
                tk.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK &&
                this.error) ||
                (await tE.ConnectionController.connectExternal(
                  this.connector,
                  this.connector.chain
                ),
                to.EventsController.sendEvent({
                  type: "track",
                  event: "CONNECT_SUCCESS",
                  properties: {
                    method: "browser",
                    name: this.connector.name || "Unknown",
                    caipNetworkId:
                      null == (t = u.ChainController.getActiveCaipNetwork())
                        ? void 0
                        : t.caipNetworkId,
                  },
                }));
            }
          } catch (t) {
            to.EventsController.sendEvent({
              type: "track",
              event: "CONNECT_ERROR",
              properties: {
                message:
                  null != (e = null == t ? void 0 : t.message) ? e : "Unknown",
              },
            }),
              (this.error = !0);
          }
        }
        onConnectionsChange(t) {
          var e, n, i;
          if (
            (null == (e = this.connector) ? void 0 : e.chain) &&
            t.get(this.connector.chain) &&
            this.isAlreadyConnected(this.connector)
          ) {
            let e = null != (i = t.get(this.connector.chain)) ? i : [],
              o = null == (n = this.remoteFeatures) ? void 0 : n.multiWallet;
            if (0 === e.length) tR.RouterController.replace("Connect");
            else {
              let t = nk.ConnectionControllerUtil.getConnectionsByConnectorId(
                  this.connectionsByNamespace,
                  this.connector.id
                ).flatMap((t) => t.accounts),
                n = nk.ConnectionControllerUtil.getConnectionsByConnectorId(
                  e,
                  this.connector.id
                ).flatMap((t) => t.accounts);
              0 === n.length
                ? this.hasMultipleConnections && o
                  ? (tR.RouterController.replace("ProfileWallets"),
                    tT.SnackController.showSuccess("Wallet deleted"))
                  : p.ModalController.close()
                : !t.every((t) =>
                    n.some((e) =>
                      n0.HelpersUtil.isLowerCaseMatch(t.address, e.address)
                    )
                  ) &&
                  o &&
                  tR.RouterController.replace("ProfileWallets");
            }
          }
        }
        isAlreadyConnected(t) {
          return (
            !!t &&
            this.connectionsByNamespace.some((e) =>
              n0.HelpersUtil.isLowerCaseMatch(e.connectorId, t.id)
            )
          );
        }
        constructor() {
          var t, e, n, i;
          if (
            (super(),
            (this.externalViewUnsubscribe = []),
            (this.connectionsByNamespace =
              tE.ConnectionController.getConnections(
                null == (t = this.connector) ? void 0 : t.chain
              )),
            (this.hasMultipleConnections =
              this.connectionsByNamespace.length > 0),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            (this.currentActiveConnectorId =
              tS.ConnectorController.state.activeConnectorIds[
                null == (e = this.connector) ? void 0 : e.chain
              ]),
            !this.connector)
          )
            throw Error("w3m-connecting-view: No connector provided");
          let o = null == (n = this.connector) ? void 0 : n.chain;
          this.isAlreadyConnected(this.connector) &&
            ((this.secondaryBtnLabel = void 0),
            (this.label =
              "This account is already linked, change your account in ".concat(
                this.connector.name
              )),
            (this.secondaryLabel = "To link a new account, open ".concat(
              this.connector.name,
              " and switch to the account you want to link"
            ))),
            to.EventsController.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: {
                name: null != (i = this.connector.name) ? i : "Unknown",
                platform: "browser",
              },
            }),
            (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onAutoConnect = this.onConnectProxy.bind(this)),
            (this.isWalletConnect = !1),
            this.externalViewUnsubscribe.push(
              tS.ConnectorController.subscribeKey("activeConnectorIds", (t) => {
                var e;
                let n = t[o],
                  i =
                    null == (e = this.remoteFeatures) ? void 0 : e.multiWallet;
                n !== this.currentActiveConnectorId &&
                  (this.hasMultipleConnections && i
                    ? (tR.RouterController.replace("ProfileWallets"),
                      tT.SnackController.showSuccess("New Wallet Added"))
                    : p.ModalController.close());
              }),
              tE.ConnectionController.subscribeKey(
                "connections",
                this.onConnectionsChange.bind(this)
              )
            );
        }
      };
      (af = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-connecting-external-view")], af)),
        t.s({ W3mConnectingMultiChainView: () => ax }, 455795);
      var am = n;
      function ag() {
        let t = (0, e._)([
          "\n  wui-flex,\n  wui-list-wallet {\n    width: 100%;\n  }\n",
        ]);
        return (
          (ag = function () {
            return t;
          }),
          t
        );
      }
      let ab = (0, b.css)(ag());
      function av() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
          '\n        gap="xl"\n      >\n        <wui-flex justifyContent="center" alignItems="center">\n          <wui-wallet-image\n            size="lg"\n            imageSrc=',
          '\n          ></wui-wallet-image>\n        </wui-flex>\n        <wui-flex\n          flexDirection="column"\n          alignItems="center"\n          gap="xs"\n          .padding=',
          '\n        >\n          <wui-text variant="paragraph-500" color="fg-100">\n            Select Chain for ',
          '\n          </wui-text>\n          <wui-text align="center" variant="small-500" color="fg-200"\n            >Select which chain to connect to your multi chain wallet</wui-text\n          >\n        </wui-flex>\n        <wui-flex\n          flexGrow="1"\n          flexDirection="column"\n          alignItems="center"\n          gap="xs"\n          .padding=',
          "\n        >\n          ",
          "\n        </wui-flex>\n      </wui-flex>\n    ",
        ]);
        return (
          (av = function () {
            return t;
          }),
          t
        );
      }
      function aC() {
        let t = (0, e._)([
          "\n            <wui-list-wallet\n              imageSrc=",
          "\n              name=",
          "\n              @click=",
          '\n              data-testid="wui-list-chain-',
          '"\n            ></wui-list-wallet>\n          ',
        ]);
        return (
          (aC = function () {
            return t;
          }),
          t
        );
      }
      var ay = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let ax = class extends am.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          var t;
          return (0, i.html)(
            av(),
            ["m", "xl", "xl", "xl"],
            (0, l.ifDefined)(
              c.AssetUtil.getConnectorImage(this.activeConnector)
            ),
            ["0", "s", "0", "s"],
            null == (t = this.activeConnector) ? void 0 : t.name,
            ["xs", "0", "xs", "0"],
            this.networksTemplate()
          );
        }
        networksTemplate() {
          var t, e;
          return null == (e = this.activeConnector) ||
            null == (t = e.connectors)
            ? void 0
            : t.map((t) =>
                t.name
                  ? (0, i.html)(
                      aC(),
                      (0, l.ifDefined)(c.AssetUtil.getChainImage(t.chain)),
                      tk.ConstantsUtil.CHAIN_NAME_MAP[t.chain],
                      () => this.onConnector(t),
                      t.chain
                    )
                  : null
              );
        }
        onConnector(t) {
          var e, n;
          let i =
            null == (n = this.activeConnector) || null == (e = n.connectors)
              ? void 0
              : e.find((e) => e.chain === t.chain);
          if (!i)
            return void tT.SnackController.showError(
              "Failed to find connector"
            );
          "walletConnect" === i.id
            ? d.CoreHelperUtil.isMobile()
              ? tR.RouterController.push("AllWallets")
              : tR.RouterController.push("ConnectingWalletConnect")
            : tR.RouterController.push("ConnectingExternal", { connector: i });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.activeConnector =
              tS.ConnectorController.state.activeConnector),
            this.unsubscribe.push(
              tS.ConnectorController.subscribeKey(
                "activeConnector",
                (t) => (this.activeConnector = t)
              )
            );
        }
      };
      (ax.styles = ab),
        ay([(0, r.state)()], ax.prototype, "activeConnector", void 0),
        (ax = ay(
          [(0, w.customElement)("w3m-connecting-multi-chain-view")],
          ax
        )),
        t.s({ W3mConnectingWcView: () => a0 }, 802534);
      var ak = n,
        aE = t.i(488103),
        aS = n;
      function aA() {
        let t = (0, e._)([
          '\n      <wui-flex justifyContent="center" .padding=',
          ">\n        <wui-tabs .tabs=",
          " .onTabChange=",
          "></wui-tabs>\n      </wui-flex>\n    ",
        ]);
        return (
          (aA = function () {
            return t;
          }),
          t
        );
      }
      var aR = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let aI = class extends aS.LitElement {
        disconnectCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          let t = this.generateTabs();
          return (0, i.html)(
            aA(),
            ["0", "0", "l", "0"],
            t,
            this.onTabChange.bind(this)
          );
        }
        generateTabs() {
          let t = this.platforms.map((t) => {
            if ("browser" === t)
              return {
                label: "Browser",
                icon: "extension",
                platform: "browser",
              };
            if ("mobile" === t)
              return { label: "Mobile", icon: "mobile", platform: "mobile" };
            if ("qrcode" === t)
              return { label: "Mobile", icon: "mobile", platform: "qrcode" };
            if ("web" === t)
              return { label: "Webapp", icon: "browser", platform: "web" };
            if ("desktop" === t)
              return { label: "Desktop", icon: "desktop", platform: "desktop" };
            return {
              label: "Browser",
              icon: "extension",
              platform: "unsupported",
            };
          });
          return (
            (this.platformTabs = t.map((t) => {
              let { platform: e } = t;
              return e;
            })),
            t
          );
        }
        onTabChange(t) {
          let e = this.platformTabs[t];
          if (e) {
            var n;
            null == (n = this.onSelectPlatfrom) || n.call(this, e);
          }
        }
        constructor() {
          super(...arguments),
            (this.platformTabs = []),
            (this.unsubscribe = []),
            (this.platforms = []),
            (this.onSelectPlatfrom = void 0);
        }
      };
      aR([(0, o.property)({ type: Array })], aI.prototype, "platforms", void 0),
        aR([(0, o.property)()], aI.prototype, "onSelectPlatfrom", void 0),
        (aI = aR([(0, w.customElement)("w3m-connecting-header")], aI));
      let aT = class extends aw {
        async onConnectProxy() {
          var t, e, n;
          try {
            this.error = !1;
            let { connectors: n } = tS.ConnectorController.state,
              i = n.find((t) => {
                var e, n, i;
                return (
                  ("ANNOUNCED" === t.type &&
                    (null == (e = t.info) ? void 0 : e.rdns) ===
                      (null == (n = this.wallet) ? void 0 : n.rdns)) ||
                  "INJECTED" === t.type ||
                  t.name === (null == (i = this.wallet) ? void 0 : i.name)
                );
              });
            if (i) await tE.ConnectionController.connectExternal(i, i.chain);
            else throw Error("w3m-connecting-wc-browser: No connector found");
            p.ModalController.close(),
              to.EventsController.sendEvent({
                type: "track",
                event: "CONNECT_SUCCESS",
                properties: {
                  method: "browser",
                  name:
                    (null == (t = this.wallet) ? void 0 : t.name) || "Unknown",
                  caipNetworkId:
                    null == (e = u.ChainController.getActiveCaipNetwork())
                      ? void 0
                      : e.caipNetworkId,
                },
              });
          } catch (t) {
            to.EventsController.sendEvent({
              type: "track",
              event: "CONNECT_ERROR",
              properties: {
                message:
                  null != (n = null == t ? void 0 : t.message) ? n : "Unknown",
              },
            }),
              (this.error = !0);
          }
        }
        constructor() {
          if ((super(), !this.wallet))
            throw Error("w3m-connecting-wc-browser: No wallet provided");
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onAutoConnect = this.onConnectProxy.bind(this)),
            to.EventsController.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "browser" },
            });
        }
      };
      aT = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-connecting-wc-browser")], aT);
      let aO = class extends aw {
        onRenderProxy() {
          if (!this.ready && this.uri) {
            var t;
            (this.ready = !0), null == (t = this.onConnect) || t.call(this);
          }
        }
        onConnectProxy() {
          var t;
          if ((null == (t = this.wallet) ? void 0 : t.desktop_link) && this.uri)
            try {
              this.error = !1;
              let { desktop_link: t, name: e } = this.wallet,
                { redirect: n, href: i } = d.CoreHelperUtil.formatNativeUrl(
                  t,
                  this.uri
                );
              tE.ConnectionController.setWcLinking({ name: e, href: i }),
                tE.ConnectionController.setRecentWallet(this.wallet),
                d.CoreHelperUtil.openHref(n, "_blank");
            } catch (t) {
              this.error = !0;
            }
        }
        constructor() {
          if ((super(), !this.wallet))
            throw Error("w3m-connecting-wc-desktop: No wallet provided");
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.onRender = this.onRenderProxy.bind(this)),
            to.EventsController.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "desktop" },
            });
        }
      };
      aO = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-connecting-wc-desktop")], aO);
      var a_ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let aN = class extends aw {
        disconnectedCallback() {
          super.disconnectedCallback(), clearTimeout(this.btnLabelTimeout);
        }
        onHandleURI() {
          if (((this.isLoading = !this.uri), !this.ready && this.uri)) {
            var t;
            (this.ready = !0), null == (t = this.onConnect) || t.call(this);
          }
        }
        onTryAgain() {
          var t;
          tE.ConnectionController.setWcError(!1),
            null == (t = this.onConnect) || t.call(this);
        }
        constructor() {
          if (
            (super(),
            (this.btnLabelTimeout = void 0),
            (this.redirectDeeplink = void 0),
            (this.redirectUniversalLink = void 0),
            (this.target = void 0),
            (this.preferUniversalLinks =
              h.OptionsController.state.experimental_preferUniversalLinks),
            (this.isLoading = !0),
            (this.onConnect = () => {
              var t;
              if (
                (null == (t = this.wallet) ? void 0 : t.mobile_link) &&
                this.uri
              )
                try {
                  this.error = !1;
                  let { mobile_link: t, link_mode: e, name: n } = this.wallet,
                    {
                      redirect: i,
                      redirectUniversalLink: o,
                      href: r,
                    } = d.CoreHelperUtil.formatNativeUrl(t, this.uri, e);
                  (this.redirectDeeplink = i),
                    (this.redirectUniversalLink = o),
                    (this.target = d.CoreHelperUtil.isIframe()
                      ? "_top"
                      : "_self"),
                    tE.ConnectionController.setWcLinking({ name: n, href: r }),
                    tE.ConnectionController.setRecentWallet(this.wallet),
                    this.preferUniversalLinks && this.redirectUniversalLink
                      ? d.CoreHelperUtil.openHref(
                          this.redirectUniversalLink,
                          this.target
                        )
                      : d.CoreHelperUtil.openHref(
                          this.redirectDeeplink,
                          this.target
                        );
                } catch (t) {
                  to.EventsController.sendEvent({
                    type: "track",
                    event: "CONNECT_PROXY_ERROR",
                    properties: {
                      message:
                        t instanceof Error
                          ? t.message
                          : "Error parsing the deeplink",
                      uri: this.uri,
                      mobile_link: this.wallet.mobile_link,
                      name: this.wallet.name,
                    },
                  }),
                    (this.error = !0);
                }
            }),
            !this.wallet)
          )
            throw Error("w3m-connecting-wc-mobile: No wallet provided");
          (this.secondaryBtnLabel = "Open"),
            (this.secondaryLabel = tA.ConstantsUtil.CONNECT_LABELS.MOBILE),
            (this.secondaryBtnIcon = "externalLink"),
            this.onHandleURI(),
            this.unsubscribe.push(
              tE.ConnectionController.subscribeKey("wcUri", () => {
                this.onHandleURI();
              })
            ),
            to.EventsController.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "mobile" },
            });
        }
      };
      function aU() {
        let t = (0, e._)([
          "\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  wui-shimmer {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;\n  }\n\n  wui-qr-code {\n    opacity: 0;\n    animation-duration: 200ms;\n    animation-timing-function: ease;\n    animation-name: fadein;\n    animation-fill-mode: forwards;\n  }\n",
        ]);
        return (
          (aU = function () {
            return t;
          }),
          t
        );
      }
      a_([(0, r.state)()], aN.prototype, "redirectDeeplink", void 0),
        a_([(0, r.state)()], aN.prototype, "redirectUniversalLink", void 0),
        a_([(0, r.state)()], aN.prototype, "target", void 0),
        a_([(0, r.state)()], aN.prototype, "preferUniversalLinks", void 0),
        a_([(0, r.state)()], aN.prototype, "isLoading", void 0),
        (aN = a_([(0, w.customElement)("w3m-connecting-wc-mobile")], aN)),
        t.i(921245),
        t.i(268100);
      let aD = (0, b.css)(aU());
      function aW() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
          '\n        gap="xl"\n      >\n        <wui-shimmer borderRadius="l" width="100%"> ',
          ' </wui-shimmer>\n\n        <wui-text variant="paragraph-500" color="fg-100">\n          Scan this QR Code with your phone\n        </wui-text>\n        ',
          "\n      </wui-flex>\n      <w3m-mobile-download-links .wallet=",
          "></w3m-mobile-download-links>\n    ",
        ]);
        return (
          (aW = function () {
            return t;
          }),
          t
        );
      }
      function aP() {
        let t = (0, e._)([
          " <wui-qr-code\n      size=",
          "\n      theme=",
          "\n      uri=",
          "\n      imageSrc=",
          "\n      color=",
          "\n      alt=",
          '\n      data-testid="wui-qr-code"\n    ></wui-qr-code>',
        ]);
        return (
          (aP = function () {
            return t;
          }),
          t
        );
      }
      function aL() {
        let t = (0, e._)([
          "<wui-link\n      .disabled=",
          "\n      @click=",
          '\n      color="fg-200"\n      data-testid="copy-wc2-uri"\n    >\n      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>\n      Copy link\n    </wui-link>',
        ]);
        return (
          (aL = function () {
            return t;
          }),
          t
        );
      }
      let aj = class extends aw {
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(),
            null == (t = this.unsubscribe) || t.forEach((t) => t()),
            window.removeEventListener("resize", this.forceUpdate);
        }
        render() {
          return (
            this.onRenderProxy(),
            (0, i.html)(
              aW(),
              ["0", "xl", "xl", "xl"],
              this.qrCodeTemplate(),
              this.copyTemplate(),
              this.wallet
            )
          );
        }
        onRenderProxy() {
          !this.ready &&
            this.uri &&
            (this.timeout = setTimeout(() => {
              this.ready = !0;
            }, 200));
        }
        qrCodeTemplate() {
          if (!this.uri || !this.ready) return null;
          let t = this.getBoundingClientRect().width - 40,
            e = this.wallet ? this.wallet.name : void 0;
          return (
            tE.ConnectionController.setWcLinking(void 0),
            tE.ConnectionController.setRecentWallet(this.wallet),
            (0, i.html)(
              aP(),
              t,
              l3.ThemeController.state.themeMode,
              this.uri,
              (0, l.ifDefined)(c.AssetUtil.getWalletImage(this.wallet)),
              (0, l.ifDefined)(
                l3.ThemeController.state.themeVariables["--w3m-qr-color"]
              ),
              (0, l.ifDefined)(e)
            )
          );
        }
        copyTemplate() {
          let t = !this.uri || !this.ready;
          return (0, i.html)(aL(), t, this.onCopyUri);
        }
        constructor() {
          var t, e;
          super(),
            (this.forceUpdate = () => {
              this.requestUpdate();
            }),
            window.addEventListener("resize", this.forceUpdate),
            to.EventsController.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: {
                name:
                  null != (e = null == (t = this.wallet) ? void 0 : t.name)
                    ? e
                    : "WalletConnect",
                platform: "qrcode",
              },
            });
        }
      };
      (aj.styles = aD),
        (aj = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("w3m-connecting-wc-qrcode")], aj));
      var aB = n;
      function az() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
          '\n        gap="xl"\n      >\n        <wui-wallet-image\n          size="lg"\n          imageSrc=',
          '\n        ></wui-wallet-image>\n\n        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>\n      </wui-flex>\n\n      <w3m-mobile-download-links .wallet=',
          "></w3m-mobile-download-links>\n    ",
        ]);
        return (
          (az = function () {
            return t;
          }),
          t
        );
      }
      let aH = class extends aB.LitElement {
        render() {
          return (0, i.html)(
            az(),
            ["3xl", "xl", "xl", "xl"],
            (0, l.ifDefined)(c.AssetUtil.getWalletImage(this.wallet)),
            this.wallet
          );
        }
        constructor() {
          var t;
          if (
            (super(),
            (this.wallet =
              null == (t = tR.RouterController.state.data) ? void 0 : t.wallet),
            !this.wallet)
          )
            throw Error("w3m-connecting-wc-unsupported: No wallet provided");
          to.EventsController.sendEvent({
            type: "track",
            event: "SELECT_WALLET",
            properties: { name: this.wallet.name, platform: "browser" },
          });
        }
      };
      aH = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-connecting-wc-unsupported")], aH);
      var aF = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let aM = class extends aw {
        updateLoadingState() {
          this.isLoading = !this.uri;
        }
        onConnectProxy() {
          var t;
          if ((null == (t = this.wallet) ? void 0 : t.webapp_link) && this.uri)
            try {
              this.error = !1;
              let { webapp_link: t, name: e } = this.wallet,
                { redirect: n, href: i } = d.CoreHelperUtil.formatUniversalUrl(
                  t,
                  this.uri
                );
              tE.ConnectionController.setWcLinking({ name: e, href: i }),
                tE.ConnectionController.setRecentWallet(this.wallet),
                d.CoreHelperUtil.openHref(n, "_blank");
            } catch (t) {
              this.error = !0;
            }
        }
        constructor() {
          if ((super(), (this.isLoading = !0), !this.wallet))
            throw Error("w3m-connecting-wc-web: No wallet provided");
          (this.onConnect = this.onConnectProxy.bind(this)),
            (this.secondaryBtnLabel = "Open"),
            (this.secondaryLabel = tA.ConstantsUtil.CONNECT_LABELS.MOBILE),
            (this.secondaryBtnIcon = "externalLink"),
            this.updateLoadingState(),
            this.unsubscribe.push(
              tE.ConnectionController.subscribeKey("wcUri", () => {
                this.updateLoadingState();
              })
            ),
            to.EventsController.sendEvent({
              type: "track",
              event: "SELECT_WALLET",
              properties: { name: this.wallet.name, platform: "web" },
            });
        }
      };
      function aV() {
        let t = (0, e._)([
          "\n      ",
          "\n      <div>",
          "</div>\n      ",
          "\n    ",
        ]);
        return (
          (aV = function () {
            return t;
          }),
          t
        );
      }
      function aK() {
        let t = (0, e._)(["<wui-ux-by-reown></wui-ux-by-reown>"]);
        return (
          (aK = function () {
            return t;
          }),
          t
        );
      }
      function aG() {
        let t = (0, e._)([
          "<w3m-connecting-wc-browser></w3m-connecting-wc-browser>",
        ]);
        return (
          (aG = function () {
            return t;
          }),
          t
        );
      }
      function aq() {
        let t = (0, e._)(["<w3m-connecting-wc-web></w3m-connecting-wc-web>"]);
        return (
          (aq = function () {
            return t;
          }),
          t
        );
      }
      function aY() {
        let t = (0, e._)([
          "\n          <w3m-connecting-wc-desktop .onRetry=",
          ">\n          </w3m-connecting-wc-desktop>\n        ",
        ]);
        return (
          (aY = function () {
            return t;
          }),
          t
        );
      }
      function aX() {
        let t = (0, e._)([
          "\n          <w3m-connecting-wc-mobile isMobile .onRetry=",
          ">\n          </w3m-connecting-wc-mobile>\n        ",
        ]);
        return (
          (aX = function () {
            return t;
          }),
          t
        );
      }
      function aQ() {
        let t = (0, e._)([
          "<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>",
        ]);
        return (
          (aQ = function () {
            return t;
          }),
          t
        );
      }
      function aZ() {
        let t = (0, e._)([
          "<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>",
        ]);
        return (
          (aZ = function () {
            return t;
          }),
          t
        );
      }
      function aJ() {
        let t = (0, e._)([
          "\n      <w3m-connecting-header\n        .platforms=",
          "\n        .onSelectPlatfrom=",
          "\n      >\n      </w3m-connecting-header>\n    ",
        ]);
        return (
          (aJ = function () {
            return t;
          }),
          t
        );
      }
      aF([(0, r.state)()], aM.prototype, "isLoading", void 0),
        (aM = aF([(0, w.customElement)("w3m-connecting-wc-web")], aM));
      var a$ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let a0 = class extends ak.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(
            aV(),
            this.headerTemplate(),
            this.platformTemplate(),
            this.reownBrandingTemplate()
          );
        }
        reownBrandingTemplate() {
          var t;
          return (null == (t = this.remoteFeatures) ? void 0 : t.reownBranding)
            ? (0, i.html)(aK())
            : null;
        }
        async initializeConnection() {
          var t, e, n, i;
          let o =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (
            "browser" !== this.platform &&
            (!h.OptionsController.state.manualWCControl || o)
          )
            try {
              let { wcPairingExpiry: e, status: n } =
                tE.ConnectionController.state;
              if (
                o ||
                h.OptionsController.state.enableEmbedded ||
                d.CoreHelperUtil.isPairingExpired(e) ||
                "connecting" === n
              ) {
                let e = tE.ConnectionController.getConnections(
                    u.ChainController.state.activeChain
                  ),
                  n =
                    null == (t = this.remoteFeatures) ? void 0 : t.multiWallet,
                  i = e.length > 0;
                await tE.ConnectionController.connectWalletConnect(),
                  this.isSiwxEnabled ||
                    (i && n
                      ? (tR.RouterController.replace("ProfileWallets"),
                        tT.SnackController.showSuccess("New Wallet Added"))
                      : p.ModalController.close());
              }
            } catch (t) {
              if (
                t instanceof Error &&
                t.message.includes(
                  "An error occurred when attempting to switch chain"
                ) &&
                !h.OptionsController.state.enableNetworkSwitch &&
                u.ChainController.state.activeChain
              ) {
                u.ChainController.setActiveCaipNetwork(
                  aE.CaipNetworksUtil.getUnsupportedNetwork(
                    ""
                      .concat(u.ChainController.state.activeChain, ":")
                      .concat(
                        null == (e = u.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : e.id
                      )
                  )
                ),
                  u.ChainController.showUnsupportedChainUI();
                return;
              }
              to.EventsController.sendEvent({
                type: "track",
                event: "CONNECT_ERROR",
                properties: {
                  message:
                    null != (n = null == t ? void 0 : t.message)
                      ? n
                      : "Unknown",
                },
              }),
                tE.ConnectionController.setWcError(!0),
                tT.SnackController.showError(
                  null != (i = t.message) ? i : "Connection error"
                ),
                tE.ConnectionController.resetWcConnection(),
                tR.RouterController.goBack();
            }
        }
        determinePlatforms() {
          if (!this.wallet) {
            this.platforms.push("qrcode"), (this.platform = "qrcode");
            return;
          }
          if (this.platform) return;
          let {
              mobile_link: t,
              desktop_link: e,
              webapp_link: n,
              injected: i,
              rdns: o,
            } = this.wallet,
            r =
              null == i
                ? void 0
                : i
                    .map((t) => {
                      let { injected_id: e } = t;
                      return e;
                    })
                    .filter(Boolean),
            l = [...(o ? [o] : null != r ? r : [])],
            a = !h.OptionsController.state.isUniversalProvider && l.length,
            s = tE.ConnectionController.checkInstalled(l),
            c = a && s,
            p = e && !d.CoreHelperUtil.isMobile();
          c &&
            !u.ChainController.state.noAdapters &&
            this.platforms.push("browser"),
            t &&
              this.platforms.push(
                d.CoreHelperUtil.isMobile() ? "mobile" : "qrcode"
              ),
            n && this.platforms.push("web"),
            p && this.platforms.push("desktop"),
            c ||
              !a ||
              u.ChainController.state.noAdapters ||
              this.platforms.push("unsupported"),
            (this.platform = this.platforms[0]);
        }
        platformTemplate() {
          switch (this.platform) {
            case "browser":
              return (0, i.html)(aG());
            case "web":
              return (0, i.html)(aq());
            case "desktop":
              return (0, i.html)(aY(), () => this.initializeConnection(!0));
            case "mobile":
              return (0, i.html)(aX(), () => this.initializeConnection(!0));
            case "qrcode":
              return (0, i.html)(aQ());
            default:
              return (0, i.html)(aZ());
          }
        }
        headerTemplate() {
          return this.platforms.length > 1
            ? (0, i.html)(
                aJ(),
                this.platforms,
                this.onSelectPlatform.bind(this)
              )
            : null;
        }
        async onSelectPlatform(t) {
          var e;
          let n =
            null == (e = this.shadowRoot) ? void 0 : e.querySelector("div");
          n &&
            (await n.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 200,
              fill: "forwards",
              easing: "ease",
            }).finished,
            (this.platform = t),
            n.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 200,
              fill: "forwards",
              easing: "ease",
            }));
        }
        constructor() {
          var t;
          super(),
            (this.wallet =
              null == (t = tR.RouterController.state.data) ? void 0 : t.wallet),
            (this.unsubscribe = []),
            (this.platform = void 0),
            (this.platforms = []),
            (this.isSiwxEnabled = !!h.OptionsController.state.siwx),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            this.determinePlatforms(),
            this.initializeConnection(),
            this.unsubscribe.push(
              h.OptionsController.subscribeKey(
                "remoteFeatures",
                (t) => (this.remoteFeatures = t)
              )
            );
        }
      };
      a$([(0, r.state)()], a0.prototype, "platform", void 0),
        a$([(0, r.state)()], a0.prototype, "platforms", void 0),
        a$([(0, r.state)()], a0.prototype, "isSiwxEnabled", void 0),
        a$([(0, r.state)()], a0.prototype, "remoteFeatures", void 0),
        (a0 = a$([(0, w.customElement)("w3m-connecting-wc-view")], a0)),
        t.s({ W3mConnectingWcBasicView: () => a4 }, 110475);
      var a3 = n;
      function a1() {
        let t = (0, e._)(["<w3m-connector-list></w3m-connector-list>"]);
        return (
          (a1 = function () {
            return t;
          }),
          t
        );
      }
      function a5() {
        let t = (0, e._)([
          '<wui-flex\n        flexDirection="column"\n        gap="xs"\n        .margin=',
          "\n      >\n        ",
          "\n        <w3m-all-wallets-widget></w3m-all-wallets-widget>\n      </wui-flex>",
        ]);
        return (
          (a5 = function () {
            return t;
          }),
          t
        );
      }
      function a2() {
        let t = (0, e._)([
          '<wui-flex flexDirection="column" .padding=',
          '>\n      <w3m-connecting-wc-view></w3m-connecting-wc-view>\n      <wui-flex flexDirection="column" .padding=',
          ">\n        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex\n    ></wui-flex>",
        ]);
        return (
          (a2 = function () {
            return t;
          }),
          t
        );
      }
      var a6 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let a4 = class extends a3.LitElement {
        render() {
          if (this.isMobile) {
            let { featured: t, recommended: e } = iF.ApiController.state,
              { customWallets: n } = h.OptionsController.state,
              o = tB.StorageUtil.getRecentWallets(),
              r =
                t.length ||
                e.length ||
                (null == n ? void 0 : n.length) ||
                o.length;
            return (0, i.html)(
              a5(),
              ["3xs", "s", "s", "s"],
              r ? (0, i.html)(a1()) : null
            );
          }
          return (0, i.html)(a2(), ["0", "0", "l", "0"], ["0", "m", "0", "m"]);
        }
        constructor() {
          super(...arguments), (this.isMobile = d.CoreHelperUtil.isMobile());
        }
      };
      a6([(0, r.state)()], a4.prototype, "isMobile", void 0),
        (a4 = a6([(0, w.customElement)("w3m-connecting-wc-basic-view")], a4)),
        t.s({ W3mChooseAccountNameView: () => sr }, 480831);
      var a7 = n,
        a8 = t.i(364877);
      function a9() {
        let t = (0, e._)([
          "\n  .continue-button-container {\n    width: 100%;\n  }\n",
        ]);
        return (
          (a9 = function () {
            return t;
          }),
          t
        );
      }
      let st = (0, b.css)(a9());
      function se() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        gap="xxl"\n        .padding=',
          "\n      >\n        ",
          " ",
          "\n        <wui-link\n          @click=",
          '\n        >\n          Learn more about names\n          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>\n        </wui-link>\n      </wui-flex>\n    ',
        ]);
        return (
          (se = function () {
            return t;
          }),
          t
        );
      }
      function sn() {
        let t = (0, e._)([
          ' <wui-flex\n      flexDirection="column"\n      gap="xxl"\n      alignItems="center"\n      .padding=',
          '\n    >\n      <wui-flex gap="s" alignItems="center" justifyContent="center">\n        <wui-icon-box\n          icon="id"\n          size="xl"\n          iconSize="xxl"\n          iconColor="fg-200"\n          backgroundColor="fg-200"\n        ></wui-icon-box>\n      </wui-flex>\n      <wui-flex flexDirection="column" alignItems="center" gap="s">\n        <wui-text align="center" variant="medium-600" color="fg-100">\n          Choose your account name\n        </wui-text>\n        <wui-text align="center" variant="paragraph-400" color="fg-100">\n          Finally say goodbye to 0x addresses, name your account to make it easier to exchange\n          assets\n        </wui-text>\n      </wui-flex>\n    </wui-flex>',
        ]);
        return (
          (sn = function () {
            return t;
          }),
          t
        );
      }
      function si() {
        let t = (0, e._)([
          "<wui-flex\n      .padding=",
          '\n      gap="s"\n      class="continue-button-container"\n    >\n      <wui-button\n        fullWidth\n        .loading=',
          '\n        size="lg"\n        borderRadius="xs"\n        @click=',
          "\n        >Choose name\n      </wui-button>\n    </wui-flex>",
        ]);
        return (
          (si = function () {
            return t;
          }),
          t
        );
      }
      var so = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let sr = class extends a7.LitElement {
        render() {
          return (0, i.html)(
            se(),
            ["0", "0", "l", "0"],
            this.onboardingTemplate(),
            this.buttonsTemplate(),
            () => {
              d.CoreHelperUtil.openHref(a8.NavigationUtil.URLS.FAQ, "_blank");
            }
          );
        }
        onboardingTemplate() {
          return (0, i.html)(sn(), ["0", "xxl", "0", "xxl"]);
        }
        buttonsTemplate() {
          return (0, i.html)(
            si(),
            ["0", "2l", "0", "2l"],
            this.loading,
            this.handleContinue.bind(this)
          );
        }
        handleContinue() {
          tR.RouterController.push("RegisterAccountName"),
            to.EventsController.sendEvent({
              type: "track",
              event: "OPEN_ENS_FLOW",
              properties: {
                isSmartAccount:
                  (0, tO.getPreferredAccountType)(
                    u.ChainController.state.activeChain
                  ) === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
              },
            });
        }
        constructor() {
          super(...arguments), (this.loading = !1);
        }
      };
      (sr.styles = st),
        so([(0, r.state)()], sr.prototype, "loading", void 0),
        (sr = so([(0, w.customElement)("w3m-choose-account-name-view")], sr)),
        t.s({ W3mDownloadsView: () => sp }, 302416);
      var sl = n;
      function sa() {
        let t = (0, e._)([
          '\n      <wui-flex gap="xs" flexDirection="column" .padding=',
          ">\n        ",
          " ",
          " ",
          "\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (sa = function () {
            return t;
          }),
          t
        );
      }
      function ss() {
        let t = (0, e._)([
          '<wui-list-item\n      variant="icon"\n      icon="chromeStore"\n      iconVariant="square"\n      @click=',
          '\n      chevron\n    >\n      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>\n    </wui-list-item>',
        ]);
        return (
          (ss = function () {
            return t;
          }),
          t
        );
      }
      function sc() {
        let t = (0, e._)([
          '<wui-list-item\n      variant="icon"\n      icon="appStore"\n      iconVariant="square"\n      @click=',
          '\n      chevron\n    >\n      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>\n    </wui-list-item>',
        ]);
        return (
          (sc = function () {
            return t;
          }),
          t
        );
      }
      function su() {
        let t = (0, e._)([
          '<wui-list-item\n      variant="icon"\n      icon="playStore"\n      iconVariant="square"\n      @click=',
          '\n      chevron\n    >\n      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>\n    </wui-list-item>',
        ]);
        return (
          (su = function () {
            return t;
          }),
          t
        );
      }
      function sd() {
        let t = (0, e._)([
          '\n      <wui-list-item\n        variant="icon"\n        icon="browser"\n        iconVariant="square-blue"\n        @click=',
          '\n        chevron\n      >\n        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>\n      </wui-list-item>\n    ',
        ]);
        return (
          (sd = function () {
            return t;
          }),
          t
        );
      }
      let sp = class extends sl.LitElement {
        render() {
          if (!this.wallet) throw Error("w3m-downloads-view");
          return (0, i.html)(
            sa(),
            ["s", "s", "l", "s"],
            this.chromeTemplate(),
            this.iosTemplate(),
            this.androidTemplate(),
            this.homepageTemplate()
          );
        }
        chromeTemplate() {
          var t;
          return (null == (t = this.wallet) ? void 0 : t.chrome_store)
            ? (0, i.html)(ss(), this.onChromeStore.bind(this))
            : null;
        }
        iosTemplate() {
          var t;
          return (null == (t = this.wallet) ? void 0 : t.app_store)
            ? (0, i.html)(sc(), this.onAppStore.bind(this))
            : null;
        }
        androidTemplate() {
          var t;
          return (null == (t = this.wallet) ? void 0 : t.play_store)
            ? (0, i.html)(su(), this.onPlayStore.bind(this))
            : null;
        }
        homepageTemplate() {
          var t;
          return (null == (t = this.wallet) ? void 0 : t.homepage)
            ? (0, i.html)(sd(), this.onHomePage.bind(this))
            : null;
        }
        onChromeStore() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.chrome_store) &&
            d.CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
        }
        onAppStore() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.app_store) &&
            d.CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
        }
        onPlayStore() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.play_store) &&
            d.CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
        }
        onHomePage() {
          var t;
          (null == (t = this.wallet) ? void 0 : t.homepage) &&
            d.CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
        }
        constructor() {
          var t;
          super(...arguments),
            (this.wallet =
              null == (t = tR.RouterController.state.data) ? void 0 : t.wallet);
        }
      };
      (sp = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-downloads-view")], sp)),
        t.s({ W3mGetWalletView: () => sm }, 945291);
      var sh = n;
      function sw() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" .padding=',
          ' gap="xs">\n        ',
          '\n        <wui-list-wallet\n          name="Explore all"\n          showAllWallets\n          walletIcon="allWallets"\n          icon="externalLink"\n          @click=',
          "\n        ></wui-list-wallet>\n      </wui-flex>\n    ",
        ]);
        return (
          (sw = function () {
            return t;
          }),
          t
        );
      }
      function sf() {
        let t = (0, e._)([
          "\n        <wui-list-wallet\n          name=",
          '\n          tagVariant="main"\n          imageSrc=',
          "\n          @click=",
          "\n        ></wui-list-wallet>\n      ",
        ]);
        return (
          (sf = function () {
            return t;
          }),
          t
        );
      }
      let sm = class extends sh.LitElement {
        render() {
          return (0, i.html)(
            sw(),
            ["0", "s", "s", "s"],
            this.recommendedWalletsTemplate(),
            () => {
              d.CoreHelperUtil.openHref(
                "https://walletconnect.com/explorer?type=wallet",
                "_blank"
              );
            }
          );
        }
        recommendedWalletsTemplate() {
          let { recommended: t, featured: e } = iF.ApiController.state,
            { customWallets: n } = h.OptionsController.state;
          return [...e, ...(null != n ? n : []), ...t].slice(0, 4).map((t) => {
            var e;
            return (0, i.html)(
              sf(),
              null != (e = t.name) ? e : "Unknown",
              (0, l.ifDefined)(c.AssetUtil.getWalletImage(t)),
              () => {
                var e;
                d.CoreHelperUtil.openHref(
                  null != (e = t.homepage)
                    ? e
                    : "https://walletconnect.com/explorer",
                  "_blank"
                );
              }
            );
          });
        }
      };
      (sm = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-get-wallet-view")], sm)),
        t.s({ W3mWhatIsAWalletView: () => sA }, 330852);
      var sg = n,
        sb = n;
      function sv() {
        let t = (0, e._)(["<wui-visual name=", "></wui-visual>"]);
        return (
          (sv = function () {
            return t;
          }),
          t
        );
      }
      function sC() {
        let t = (0, e._)([
          '\n            <wui-flex flexDirection="column" alignItems="center" gap="xl">\n              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">\n                ',
          '\n              </wui-flex>\n            </wui-flex>\n            <wui-flex flexDirection="column" alignItems="center" gap="xxs">\n              <wui-text variant="paragraph-500" color="fg-100" align="center">\n                ',
          '\n              </wui-text>\n              <wui-text variant="small-500" color="fg-200" align="center">',
          "</wui-text>\n            </wui-flex>\n          ",
        ]);
        return (
          (sC = function () {
            return t;
          }),
          t
        );
      }
      function sy() {
        let t = (0, e._)([
          '\n      <wui-flex flexDirection="column" alignItems="center" gap="l">\n        ',
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (sy = function () {
            return t;
          }),
          t
        );
      }
      t.i(346412);
      var sx = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let sk = class extends sb.LitElement {
        render() {
          return (0, i.html)(
            sy(),
            this.data.map((t) =>
              (0, i.html)(
                sC(),
                t.images.map((t) => (0, i.html)(sv(), t)),
                t.title,
                t.text
              )
            )
          );
        }
        constructor() {
          super(...arguments), (this.data = []);
        }
      };
      function sE() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        .padding=',
          '\n        alignItems="center"\n        gap="xl"\n      >\n        <w3m-help-widget .data=',
          '></w3m-help-widget>\n        <wui-button variant="main" size="md" @click=',
          '>\n          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>\n          Get a wallet\n        </wui-button>\n      </wui-flex>\n    ',
        ]);
        return (
          (sE = function () {
            return t;
          }),
          t
        );
      }
      sx([(0, o.property)({ type: Array })], sk.prototype, "data", void 0),
        (sk = sx([(0, w.customElement)("w3m-help-widget")], sk));
      let sS = [
          {
            images: ["login", "profile", "lock"],
            title: "One login for all of web3",
            text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!",
          },
          {
            images: ["defi", "nft", "eth"],
            title: "A home for your digital assets",
            text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.",
          },
          {
            images: ["browser", "noun", "dao"],
            title: "Your gateway to a new web",
            text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.",
          },
        ],
        sA = class extends sg.LitElement {
          render() {
            return (0, i.html)(
              sE(),
              ["xxl", "xl", "xl", "xl"],
              sS,
              this.onGetWallet.bind(this)
            );
          }
          onGetWallet() {
            to.EventsController.sendEvent({
              type: "track",
              event: "CLICK_GET_WALLET",
            }),
              tR.RouterController.push("GetWallet");
          }
        };
      (sA = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-what-is-a-wallet-view")], sA)),
        t.s({ W3mConnectWalletsView: () => sN }, 374654);
      var sR = n;
      function sI() {
        let t = (0, e._)([
          "\n  wui-flex {\n    max-height: clamp(360px, 540px, 80vh);\n    overflow: scroll;\n    scrollbar-width: none;\n    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);\n    will-change: opacity;\n  }\n  wui-flex::-webkit-scrollbar {\n    display: none;\n  }\n  wui-flex.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    user-select: none;\n  }\n",
        ]);
        return (
          (sI = function () {
            return t;
          }),
          t
        );
      }
      let sT = (0, b.css)(sI());
      function sO() {
        let t = (0, e._)([
          '\n      <w3m-legal-checkbox></w3m-legal-checkbox>\n      <wui-flex\n        flexDirection="column"\n        .padding=',
          '\n        gap="xs"\n        class=',
          "\n      >\n        <w3m-wallet-login-list tabIdx=",
          "></w3m-wallet-login-list>\n      </wui-flex>\n      <w3m-legal-footer></w3m-legal-footer>\n    ",
        ]);
        return (
          (sO = function () {
            return t;
          }),
          t
        );
      }
      var s_ = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let sN = class extends sR.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          var t;
          let { termsConditionsUrl: e, privacyPolicyUrl: n } =
              h.OptionsController.state,
            o =
              null == (t = h.OptionsController.state.features)
                ? void 0
                : t.legalCheckbox,
            r = !!(e || n) && !!o,
            a = r && !this.checked;
          return (0, i.html)(
            sO(),
            r ? ["0", "s", "s", "s"] : "s",
            (0, l.ifDefined)(a ? "disabled" : void 0),
            (0, l.ifDefined)(a ? -1 : void 0)
          );
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.checked =
              oI.OptionsStateController.state.isLegalCheckboxChecked),
            this.unsubscribe.push(
              oI.OptionsStateController.subscribeKey(
                "isLegalCheckboxChecked",
                (t) => {
                  this.checked = t;
                }
              )
            );
        }
      };
      (sN.styles = sT),
        s_([(0, r.state)()], sN.prototype, "checked", void 0),
        (sN = s_([(0, w.customElement)("w3m-connect-wallets-view")], sN)),
        t.s({ W3mNetworkSwitchView: () => sV }, 178685);
      var sU = n,
        sD = n;
      function sW() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    width: var(--wui-box-size-lg);\n    height: var(--wui-box-size-lg);\n  }\n\n  svg {\n    width: var(--wui-box-size-lg);\n    height: var(--wui-box-size-lg);\n    fill: none;\n    stroke: transparent;\n    stroke-linecap: round;\n  }\n\n  use {\n    stroke: var(--wui-color-accent-100);\n    stroke-width: 2px;\n    stroke-dasharray: 54, 118;\n    stroke-dashoffset: 172;\n    animation: dash 1s linear infinite;\n  }\n\n  @keyframes dash {\n    to {\n      stroke-dashoffset: 0px;\n    }\n  }\n",
        ]);
        return (
          (sW = function () {
            return t;
          }),
          t
        );
      }
      let sP = (0, b.css)(sW());
      function sL() {
        let t = (0, e._)([
          '\n      <svg viewBox="0 0 54 59">\n        <path\n          id="wui-loader-path"\n          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"\n        />\n        <use xlink:href="#wui-loader-path"></use>\n      </svg>\n    ',
        ]);
        return (
          (sL = function () {
            return t;
          }),
          t
        );
      }
      let sj = class extends sD.LitElement {
        render() {
          return (0, i.html)(sL());
        }
      };
      function sB() {
        let t = (0, e._)([
          "\n  @keyframes shake {\n    0% {\n      transform: translateX(0);\n    }\n    25% {\n      transform: translateX(3px);\n    }\n    50% {\n      transform: translateX(-3px);\n    }\n    75% {\n      transform: translateX(3px);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n\n  wui-flex:first-child:not(:only-child) {\n    position: relative;\n  }\n\n  wui-loading-hexagon {\n    position: absolute;\n  }\n\n  wui-icon-box {\n    position: absolute;\n    right: 4px;\n    bottom: 0;\n    opacity: 0;\n    transform: scale(0.5);\n    z-index: 1;\n  }\n\n  wui-button {\n    display: none;\n  }\n\n  [data-error='true'] wui-icon-box {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  [data-error='true'] > wui-flex:first-child {\n    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  }\n\n  wui-button[data-retry='true'] {\n    display: block;\n    opacity: 1;\n  }\n",
        ]);
        return (
          (sB = function () {
            return t;
          }),
          t
        );
      }
      (sj.styles = [m.resetStyles, sP]),
        (sj = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("wui-loading-hexagon")], sj)),
        t.i(186009);
      let sz = (0, b.css)(sB());
      function sH() {
        let t = (0, e._)(["<wui-loading-hexagon></wui-loading-hexagon>"]);
        return (
          (sH = function () {
            return t;
          }),
          t
        );
      }
      function sF() {
        let t = (0, e._)([
          "\n      <wui-flex\n        data-error=",
          '\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
          '\n        gap="xl"\n      >\n        <wui-flex justifyContent="center" alignItems="center">\n          <wui-network-image\n            size="lg"\n            imageSrc=',
          "\n          ></wui-network-image>\n\n          ",
          '\n\n          <wui-icon-box\n            backgroundColor="error-100"\n            background="opaque"\n            iconColor="error-100"\n            icon="close"\n            size="sm"\n            ?border=',
          '\n            borderColor="wui-color-bg-125"\n          ></wui-icon-box>\n        </wui-flex>\n\n        <wui-flex flexDirection="column" alignItems="center" gap="xs">\n          <wui-text align="center" variant="paragraph-500" color="fg-100">',
          '</wui-text>\n          <wui-text align="center" variant="small-500" color="fg-200">',
          "</wui-text>\n        </wui-flex>\n\n        <wui-button\n          data-retry=",
          '\n          variant="accent"\n          size="md"\n          .disabled=',
          "\n          @click=",
          '\n        >\n          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>\n          Try again\n        </wui-button>\n      </wui-flex>\n    ',
        ]);
        return (
          (sF = function () {
            return t;
          }),
          t
        );
      }
      var sM = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let sV = class extends sU.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        firstUpdated() {
          this.onSwitchNetwork();
        }
        render() {
          if (!this.network)
            throw Error("w3m-network-switch-view: No network provided");
          this.onShowRetry();
          let t = this.getLabel(),
            e = this.getSubLabel();
          return (0, i.html)(
            sF(),
            this.error,
            ["3xl", "xl", "3xl", "xl"],
            (0, l.ifDefined)(c.AssetUtil.getNetworkImage(this.network)),
            this.error ? null : (0, i.html)(sH()),
            !0,
            t,
            e,
            this.showRetry,
            !this.error,
            this.onSwitchNetwork.bind(this)
          );
        }
        getSubLabel() {
          let t = tS.ConnectorController.getConnectorId(
            u.ChainController.state.activeChain
          );
          return tS.ConnectorController.getAuthConnector() &&
            t === tk.ConstantsUtil.CONNECTOR_ID.AUTH
            ? ""
            : this.error
            ? "Switch can be declined if chain is not supported by a wallet or previous request is still active"
            : "Accept connection request in your wallet";
        }
        getLabel() {
          let t = tS.ConnectorController.getConnectorId(
            u.ChainController.state.activeChain
          );
          if (
            tS.ConnectorController.getAuthConnector() &&
            t === tk.ConstantsUtil.CONNECTOR_ID.AUTH
          ) {
            var e, n;
            return "Switching to ".concat(
              null != (n = null == (e = this.network) ? void 0 : e.name)
                ? n
                : "Unknown",
              " network..."
            );
          }
          return this.error ? "Switch declined" : "Approve in wallet";
        }
        onShowRetry() {
          if (this.error && !this.showRetry) {
            var t;
            this.showRetry = !0;
            let e =
              null == (t = this.shadowRoot)
                ? void 0
                : t.querySelector("wui-button");
            null == e ||
              e.animate([{ opacity: 0 }, { opacity: 1 }], {
                fill: "forwards",
                easing: "ease",
              });
          }
        }
        onSwitchNetwork() {
          try {
            var t;
            (this.error = !1),
              u.ChainController.state.activeChain !==
                (null == (t = this.network) ? void 0 : t.chainNamespace) &&
                u.ChainController.setIsSwitchingNamespace(!0),
              this.network &&
                u.ChainController.switchActiveNetwork(this.network);
          } catch (t) {
            this.error = !0;
          }
        }
        constructor() {
          var t;
          super(),
            (this.network =
              null == (t = tR.RouterController.state.data)
                ? void 0
                : t.network),
            (this.unsubscribe = []),
            (this.showRetry = !1),
            (this.error = !1);
        }
      };
      (sV.styles = sz),
        sM([(0, r.state)()], sV.prototype, "showRetry", void 0),
        sM([(0, r.state)()], sV.prototype, "error", void 0),
        (sV = sM([(0, w.customElement)("w3m-network-switch-view")], sV)),
        t.s({ W3mNetworksView: () => s8 }, 699254);
      var sK = n,
        sG = t.i(899767);
      t.i(836884);
      var sq = n;
      function sY() {
        let t = (0, e._)([
          "\n  button {\n    column-gap: var(--wui-spacing-s);\n    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);\n    width: 100%;\n    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);\n    border-radius: var(--wui-border-radius-xs);\n    color: var(--wui-color-fg-100);\n  }\n\n  button > wui-text:nth-child(2) {\n    display: flex;\n    flex: 1;\n  }\n\n  button[data-transparent='true'] {\n    pointer-events: none;\n    background-color: transparent;\n  }\n\n  button:hover {\n    background-color: var(--wui-color-gray-glass-002);\n  }\n\n  button:active {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  wui-image {\n    width: var(--wui-spacing-3xl);\n    height: var(--wui-spacing-3xl);\n    border-radius: 100%;\n  }\n\n  button:disabled {\n    background-color: var(--wui-color-gray-glass-002);\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  button:disabled > wui-tag {\n    background-color: var(--wui-color-gray-glass-010);\n    color: var(--wui-color-fg-300);\n  }\n",
        ]);
        return (
          (sY = function () {
            return t;
          }),
          t
        );
      }
      t.i(100330);
      let sX = (0, b.css)(sY());
      function sQ() {
        let t = (0, e._)([
          "\n      <button data-transparent=",
          " ?disabled=",
          '>\n        <wui-flex gap="s" alignItems="center">\n          ',
          '\n          <wui-text variant="paragraph-500" color="inherit">',
          "</wui-text></wui-flex\n        >\n        ",
          "\n      </button>\n    ",
        ]);
        return (
          (sQ = function () {
            return t;
          }),
          t
        );
      }
      function sZ() {
        let t = (0, e._)([
          '<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>',
        ]);
        return (
          (sZ = function () {
            return t;
          }),
          t
        );
      }
      function sJ() {
        let t = (0, e._)([
          '<wui-image size="sm" src=',
          " name=",
          "></wui-image>",
        ]);
        return (
          (sJ = function () {
            return t;
          }),
          t
        );
      }
      function s$() {
        let t = (0, e._)([
          "<wui-network-image\n        ?round=",
          '\n        size="md"\n        name=',
          "\n      ></wui-network-image>",
        ]);
        return (
          (s$ = function () {
            return t;
          }),
          t
        );
      }
      var s0 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let s3 = class extends sq.LitElement {
        render() {
          return (0, i.html)(
            sQ(),
            this.transparent,
            this.disabled,
            this.templateNetworkImage(),
            this.name,
            this.checkmarkTemplate()
          );
        }
        checkmarkTemplate() {
          return this.selected ? (0, i.html)(sZ()) : null;
        }
        templateNetworkImage() {
          return this.imageSrc
            ? (0, i.html)(sJ(), this.imageSrc, this.name)
            : this.imageSrc
            ? null
            : (0, i.html)(s$(), !0, this.name);
        }
        constructor() {
          super(...arguments),
            (this.imageSrc = ""),
            (this.name = ""),
            (this.disabled = !1),
            (this.selected = !1),
            (this.transparent = !1);
        }
      };
      function s1() {
        let t = (0, e._)([
          "\n  .container {\n    max-height: 360px;\n    overflow: auto;\n  }\n\n  .container::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (s1 = function () {
            return t;
          }),
          t
        );
      }
      (s3.styles = [m.resetStyles, m.elementStyles, sX]),
        s0([(0, o.property)()], s3.prototype, "imageSrc", void 0),
        s0([(0, o.property)()], s3.prototype, "name", void 0),
        s0(
          [(0, o.property)({ type: Boolean })],
          s3.prototype,
          "disabled",
          void 0
        ),
        s0(
          [(0, o.property)({ type: Boolean })],
          s3.prototype,
          "selected",
          void 0
        ),
        s0(
          [(0, o.property)({ type: Boolean })],
          s3.prototype,
          "transparent",
          void 0
        ),
        (s3 = s0([(0, w.customElement)("wui-list-network")], s3));
      let s5 = (0, b.css)(s1());
      function s2() {
        let t = (0, e._)([
          "\n      ",
          '\n      <wui-flex\n        class="container"\n        .padding=',
          '\n        flexDirection="column"\n        gap="xs"\n      >\n        ',
          '\n      </wui-flex>\n\n      <wui-separator></wui-separator>\n\n      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">\n        <wui-text variant="small-400" color="fg-300" align="center">\n          Your connected wallet may not support some of the networks available for this dApp\n        </wui-text>\n        <wui-link @click=',
          '>\n          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>\n          What is a network\n        </wui-link>\n      </wui-flex>\n    ',
        ]);
        return (
          (s2 = function () {
            return t;
          }),
          t
        );
      }
      function s6() {
        let t = (0, e._)([
          '\n      <wui-flex gap="xs" .padding=',
          ">\n        <wui-input-text\n          @inputChange=",
          '\n          class="network-search-input"\n          size="md"\n          placeholder="Search network"\n          icon="search"\n        ></wui-input-text>\n      </wui-flex>\n    ',
        ]);
        return (
          (s6 = function () {
            return t;
          }),
          t
        );
      }
      function s4() {
        let t = (0, e._)([
          "\n        <wui-list-network\n          .selected=",
          "\n          imageSrc=",
          '\n          type="network"\n          name=',
          "\n          @click=",
          "\n          .disabled=",
          "\n          data-testid=",
          "\n        ></wui-list-network>\n      ",
        ]);
        return (
          (s4 = function () {
            return t;
          }),
          t
        );
      }
      var s7 = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let s8 = class extends sK.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(
            s2(),
            this.templateSearchInput(),
            ["0", "s", "s", "s"],
            this.networksTemplate(),
            this.onNetworkHelp.bind(this)
          );
        }
        templateSearchInput() {
          return (0, i.html)(
            s6(),
            ["0", "s", "s", "s"],
            this.onInputChange.bind(this)
          );
        }
        onInputChange(t) {
          this.onDebouncedSearch(t.detail);
        }
        onNetworkHelp() {
          to.EventsController.sendEvent({
            type: "track",
            event: "CLICK_NETWORK_HELP",
          }),
            tR.RouterController.push("WhatIsANetwork");
        }
        networksTemplate() {
          var t;
          let e = u.ChainController.getAllApprovedCaipNetworkIds(),
            n = d.CoreHelperUtil.sortRequestedNetworks(
              e,
              this.requestedCaipNetworks
            );
          return (
            this.search
              ? (this.filteredNetworks =
                  null == n
                    ? void 0
                    : n.filter((t) => {
                        var e;
                        return null == t || null == (e = t.name)
                          ? void 0
                          : e.toLowerCase().includes(this.search.toLowerCase());
                      }))
              : (this.filteredNetworks = n),
            null == (t = this.filteredNetworks)
              ? void 0
              : t.map((t) => {
                  var e, n, o;
                  return (0, i.html)(
                    s4(),
                    (null == (e = this.network) ? void 0 : e.id) === t.id,
                    (0, l.ifDefined)(c.AssetUtil.getNetworkImage(t)),
                    null != (n = t.name) ? n : t.id,
                    () => this.onSwitchNetwork(t),
                    this.getNetworkDisabled(t),
                    "w3m-network-switch-".concat(
                      null != (o = t.name) ? o : t.id
                    )
                  );
                })
          );
        }
        getNetworkDisabled(t) {
          let e = t.chainNamespace,
            n = a.AccountController.getCaipAddress(e),
            i = u.ChainController.getAllApprovedCaipNetworkIds(),
            o =
              !1 !== u.ChainController.getNetworkProp("supportsAllNetworks", e),
            r = tS.ConnectorController.getConnectorId(e),
            l = tS.ConnectorController.getAuthConnector(),
            s = r === tk.ConstantsUtil.CONNECTOR_ID.AUTH && l;
          return (
            !!n &&
            !o &&
            !s &&
            !(null == i ? void 0 : i.includes(t.caipNetworkId))
          );
        }
        onSwitchNetwork(t) {
          sG.NetworkUtil.onSwitchNetwork({ network: t });
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.network = u.ChainController.state.activeCaipNetwork),
            (this.requestedCaipNetworks = u.ChainController.getCaipNetworks()),
            (this.search = ""),
            (this.onDebouncedSearch = d.CoreHelperUtil.debounce((t) => {
              this.search = t;
            }, 100)),
            this.unsubscribe.push(
              s.AssetController.subscribeNetworkImages(() =>
                this.requestUpdate()
              ),
              u.ChainController.subscribeKey(
                "activeCaipNetwork",
                (t) => (this.network = t)
              ),
              u.ChainController.subscribe(() => {
                this.requestedCaipNetworks =
                  u.ChainController.getAllRequestedCaipNetworks();
              })
            );
        }
      };
      (s8.styles = s5),
        s7([(0, r.state)()], s8.prototype, "network", void 0),
        s7([(0, r.state)()], s8.prototype, "requestedCaipNetworks", void 0),
        s7([(0, r.state)()], s8.prototype, "filteredNetworks", void 0),
        s7([(0, r.state)()], s8.prototype, "search", void 0),
        (s8 = s7([(0, w.customElement)("w3m-networks-view")], s8)),
        t.s({ W3mSwitchActiveChainView: () => cr }, 55893);
      var s9 = n;
      function ct() {
        let t = (0, e._)([
          "\n  @keyframes shake {\n    0% {\n      transform: translateX(0);\n    }\n    25% {\n      transform: translateX(3px);\n    }\n    50% {\n      transform: translateX(-3px);\n    }\n    75% {\n      transform: translateX(3px);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n\n  wui-flex:first-child:not(:only-child) {\n    position: relative;\n  }\n\n  wui-loading-thumbnail {\n    position: absolute;\n  }\n\n  wui-visual {\n    width: var(--wui-wallet-image-size-lg);\n    height: var(--wui-wallet-image-size-lg);\n    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));\n    position: relative;\n    overflow: hidden;\n  }\n\n  wui-visual::after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    inset: 0;\n    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);\n  }\n\n  wui-icon-box {\n    position: absolute;\n    right: calc(var(--wui-spacing-3xs) * -1);\n    bottom: calc(var(--wui-spacing-3xs) * -1);\n    opacity: 0;\n    transform: scale(0.5);\n    transition:\n      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),\n      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);\n    will-change: opacity, transform;\n  }\n\n  wui-text[align='center'] {\n    width: 100%;\n    padding: 0px var(--wui-spacing-l);\n  }\n\n  [data-error='true'] wui-icon-box {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  [data-error='true'] > wui-flex:first-child {\n    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  }\n\n  [data-retry='false'] wui-link {\n    display: none;\n  }\n\n  [data-retry='true'] wui-link {\n    display: block;\n    opacity: 1;\n  }\n\n  wui-link {\n    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);\n  }\n\n  .capitalize {\n    text-transform: capitalize;\n  }\n",
        ]);
        return (
          (ct = function () {
            return t;
          }),
          t
        );
      }
      let ce = (0, b.css)(ct());
      function cn() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        alignItems="center"\n        .padding=',
          '\n        gap="xl"\n      >\n        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">\n          <wui-visual name=',
          "></wui-visual>\n          <wui-text\n            data-testid=",
          '\n            variant="paragraph-500"\n            color="fg-100"\n            align="center"\n            >Switch to <span class="capitalize">',
          '</span></wui-text\n          >\n          <wui-text variant="small-400" color="fg-200" align="center">\n            Connected wallet doesn\'t support connecting to ',
          ' chain. You\n            need to connect with a different wallet.\n          </wui-text>\n          <wui-button\n            data-testid="w3m-switch-active-chain-button"\n            size="md"\n            @click=',
          "\n            >Switch</wui-button\n          >\n        </wui-flex>\n      </wui-flex>\n    ",
        ]);
        return (
          (cn = function () {
            return t;
          }),
          t
        );
      }
      var ci = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let co = {
          eip155: "eth",
          solana: "solana",
          bip122: "bitcoin",
          polkadot: void 0,
        },
        cr = class extends s9.LitElement {
          firstUpdated() {
            this.unsubscribe.push(
              u.ChainController.subscribeKey(
                "activeChain",
                (t) => (this.activeChain = t)
              )
            );
          }
          disconnectedCallback() {
            this.unsubscribe.forEach((t) => t());
          }
          render() {
            let t = this.switchToChain
              ? tk.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain]
              : "supported";
            if (!this.switchToChain) return null;
            let e = tk.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain];
            return (0, i.html)(
              cn(),
              ["3xl", "xl", "xl", "xl"],
              (0, l.ifDefined)(co[this.switchToChain]),
              "w3m-switch-active-chain-to-".concat(e),
              e,
              t,
              this.switchActiveChain.bind(this)
            );
          }
          async switchActiveChain() {
            this.switchToChain &&
              (u.ChainController.setIsSwitchingNamespace(!0),
              tS.ConnectorController.setFilterByNamespace(this.switchToChain),
              this.caipNetwork
                ? await u.ChainController.switchActiveNetwork(this.caipNetwork)
                : u.ChainController.setActiveNamespace(this.switchToChain),
              tR.RouterController.reset("Connect"));
          }
          constructor() {
            var t, e;
            super(...arguments),
              (this.unsubscribe = []),
              (this.switchToChain =
                null == (t = tR.RouterController.state.data)
                  ? void 0
                  : t.switchToChain),
              (this.caipNetwork =
                null == (e = tR.RouterController.state.data)
                  ? void 0
                  : e.network),
              (this.activeChain = u.ChainController.state.activeChain);
          }
        };
      (cr.styles = ce),
        ci([(0, o.property)()], cr.prototype, "activeChain", void 0),
        (cr = ci([(0, w.customElement)("w3m-switch-active-chain-view")], cr)),
        t.s({ W3mWhatIsANetworkView: () => cc }, 821520);
      var cl = n;
      function ca() {
        let t = (0, e._)([
          '\n      <wui-flex\n        flexDirection="column"\n        .padding=',
          '\n        alignItems="center"\n        gap="xl"\n      >\n        <w3m-help-widget .data=',
          '></w3m-help-widget>\n        <wui-button\n          variant="main"\n          size="md"\n          @click=',
          '\n        >\n          Learn more\n          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>\n        </wui-button>\n      </wui-flex>\n    ',
        ]);
        return (
          (ca = function () {
            return t;
          }),
          t
        );
      }
      let cs = [
          {
            images: ["network", "layers", "system"],
            title: "The system’s nuts and bolts",
            text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.",
          },
          {
            images: ["noun", "defiAlt", "dao"],
            title: "Designed for different uses",
            text: "Each network is designed differently, and may therefore suit certain apps and experiences.",
          },
        ],
        cc = class extends cl.LitElement {
          render() {
            return (0, i.html)(ca(), ["xxl", "xl", "xl", "xl"], cs, () => {
              d.CoreHelperUtil.openHref(
                "https://ethereum.org/en/developers/docs/networks/",
                "_blank"
              );
            });
          }
        };
      (cc = (function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      })([(0, w.customElement)("w3m-what-is-a-network-view")], cc)),
        t.s({ W3mUnsupportedChainView: () => cb }, 427086);
      var cu = n;
      function cd() {
        let t = (0, e._)([
          "\n  :host > wui-flex {\n    max-height: clamp(360px, 540px, 80vh);\n    overflow: scroll;\n    scrollbar-width: none;\n  }\n\n  :host > wui-flex::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (cd = function () {
            return t;
          }),
          t
        );
      }
      let cp = (0, b.css)(cd());
      function ch() {
        let t = (0, e._)([
          '\n      <wui-flex class="container" flexDirection="column" gap="0">\n        <wui-flex\n          class="container"\n          flexDirection="column"\n          .padding=',
          '\n          alignItems="center"\n          gap="xl"\n        >\n          ',
          '\n        </wui-flex>\n\n        <wui-flex flexDirection="column" padding="s" gap="xs">\n          ',
          '\n        </wui-flex>\n\n        <wui-separator text="or"></wui-separator>\n        <wui-flex flexDirection="column" padding="s" gap="xs">\n          <wui-list-item\n            variant="icon"\n            iconVariant="overlay"\n            icon="disconnect"\n            ?chevron=',
          "\n            .loading=",
          "\n            @click=",
          '\n            data-testid="disconnect-button"\n          >\n            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>\n          </wui-list-item>\n        </wui-flex>\n      </wui-flex>\n    ',
        ]);
        return (
          (ch = function () {
            return t;
          }),
          t
        );
      }
      function cw() {
        let t = (0, e._)([
          '\n        <wui-text variant="small-400" color="fg-200" align="center">\n          The swap feature doesn’t support your current network. Switch to an available option to\n          continue.\n        </wui-text>\n      ',
        ]);
        return (
          (cw = function () {
            return t;
          }),
          t
        );
      }
      function cf() {
        let t = (0, e._)([
          '\n      <wui-text variant="small-400" color="fg-200" align="center">\n        This app doesn’t support your current network. Switch to an available option to continue.\n      </wui-text>\n    ',
        ]);
        return (
          (cf = function () {
            return t;
          }),
          t
        );
      }
      function cm() {
        let t = (0, e._)([
          "\n        <wui-list-network\n          imageSrc=",
          "\n          name=",
          "\n          @click=",
          "\n        >\n        </wui-list-network>\n      ",
        ]);
        return (
          (cm = function () {
            return t;
          }),
          t
        );
      }
      var cg = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let cb = class extends cu.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(
            ch(),
            ["m", "xl", "xs", "xl"],
            this.descriptionTemplate(),
            this.networksTemplate(),
            !1,
            this.disconnecting,
            this.onDisconnect.bind(this)
          );
        }
        descriptionTemplate() {
          return this.swapUnsupportedChain
            ? (0, i.html)(cw())
            : (0, i.html)(cf());
        }
        networksTemplate() {
          let t = u.ChainController.getAllRequestedCaipNetworks(),
            e = u.ChainController.getAllApprovedCaipNetworkIds(),
            n = d.CoreHelperUtil.sortRequestedNetworks(e, t);
          return (
            this.swapUnsupportedChain
              ? n.filter((t) =>
                  tA.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(
                    t.caipNetworkId
                  )
                )
              : n
          ).map((t) => {
            var e;
            return (0, i.html)(
              cm(),
              (0, l.ifDefined)(c.AssetUtil.getNetworkImage(t)),
              null != (e = t.name) ? e : "Unknown",
              () => this.onSwitchNetwork(t)
            );
          });
        }
        async onDisconnect() {
          try {
            var t;
            this.disconnecting = !0;
            let e = u.ChainController.state.activeChain,
              n = tE.ConnectionController.getConnections(e).length > 0,
              i = e && tS.ConnectorController.state.activeConnectorIds[e],
              o = null == (t = this.remoteFeatures) ? void 0 : t.multiWallet;
            await tE.ConnectionController.disconnect(
              o ? { id: i, namespace: e } : {}
            ),
              n &&
                o &&
                (tR.RouterController.push("ProfileWallets"),
                tT.SnackController.showSuccess("Wallet deleted"));
          } catch (t) {
            to.EventsController.sendEvent({
              type: "track",
              event: "DISCONNECT_ERROR",
            }),
              tT.SnackController.showError("Failed to disconnect");
          } finally {
            this.disconnecting = !1;
          }
        }
        async onSwitchNetwork(t) {
          let e = a.AccountController.state.caipAddress,
            n = u.ChainController.getAllApprovedCaipNetworkIds(),
            i =
              (u.ChainController.getNetworkProp(
                "supportsAllNetworks",
                t.chainNamespace
              ),
              tR.RouterController.state.data);
          e
            ? (null == n ? void 0 : n.includes(t.caipNetworkId))
              ? await u.ChainController.switchActiveNetwork(t)
              : tR.RouterController.push("SwitchNetwork", { ...i, network: t })
            : e ||
              (u.ChainController.setActiveCaipNetwork(t),
              tR.RouterController.push("Connect"));
        }
        constructor() {
          var t;
          super(),
            (this.swapUnsupportedChain =
              null == (t = tR.RouterController.state.data)
                ? void 0
                : t.swapUnsupportedChain),
            (this.unsubscribe = []),
            (this.disconnecting = !1),
            (this.remoteFeatures = h.OptionsController.state.remoteFeatures),
            this.unsubscribe.push(
              s.AssetController.subscribeNetworkImages(() =>
                this.requestUpdate()
              ),
              h.OptionsController.subscribeKey("remoteFeatures", (t) => {
                this.remoteFeatures = t;
              })
            );
        }
      };
      (cb.styles = cp),
        cg([(0, r.state)()], cb.prototype, "disconnecting", void 0),
        cg([(0, r.state)()], cb.prototype, "remoteFeatures", void 0),
        (cb = cg([(0, w.customElement)("w3m-unsupported-chain-view")], cb)),
        t.s({ W3mWalletCompatibleNetworksView: () => cO }, 292015);
      var cv = n,
        cC = n;
      function cy() {
        let t = (0, e._)([
          "\n  wui-flex {\n    width: 100%;\n    background-color: var(--wui-color-gray-glass-005);\n    border-radius: var(--wui-border-radius-s);\n    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)\n      var(--wui-spacing-1xs);\n  }\n",
        ]);
        return (
          (cy = function () {
            return t;
          }),
          t
        );
      }
      let cx = (0, b.css)(cy());
      function ck() {
        let t = (0, e._)([
          '\n      <wui-flex gap="1xs" alignItems="center">\n        <wui-icon-box\n          size="sm"\n          iconcolor="fg-200"\n          backgroundcolor="fg-200"\n          icon=',
          '\n          background="transparent"\n        ></wui-icon-box>\n        <wui-text variant="small-400" color="fg-200">',
          "</wui-text>\n      </wui-flex>\n    ",
        ]);
        return (
          (ck = function () {
            return t;
          }),
          t
        );
      }
      var cE = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let cS = class extends cC.LitElement {
        render() {
          return (0, i.html)(ck(), this.icon, this.text);
        }
        constructor() {
          super(...arguments), (this.icon = "externalLink"), (this.text = "");
        }
      };
      function cA() {
        let t = (0, e._)([
          "\n  :host > wui-flex {\n    max-height: clamp(360px, 540px, 80vh);\n    overflow: scroll;\n    scrollbar-width: none;\n  }\n\n  :host > wui-flex::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (cA = function () {
            return t;
          }),
          t
        );
      }
      (cS.styles = [m.resetStyles, m.elementStyles, cx]),
        cE([(0, o.property)()], cS.prototype, "icon", void 0),
        cE([(0, o.property)()], cS.prototype, "text", void 0),
        (cS = cE([(0, w.customElement)("wui-banner")], cS));
      let cR = (0, b.css)(cA());
      function cI() {
        let t = (0, e._)([
          ' <wui-flex\n      flexDirection="column"\n      .padding=',
          '\n      gap="xs"\n    >\n      <wui-banner\n        icon="warningCircle"\n        text="You can only receive assets on these networks"\n      ></wui-banner>\n      ',
          "\n    </wui-flex>",
        ]);
        return (
          (cI = function () {
            return t;
          }),
          t
        );
      }
      function cT() {
        let t = (0, e._)([
          "\n        <wui-list-network\n          imageSrc=",
          "\n          name=",
          "\n          ?transparent=",
          "\n        >\n        </wui-list-network>\n      ",
        ]);
        return (
          (cT = function () {
            return t;
          }),
          t
        );
      }
      let cO = class extends cv.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          return (0, i.html)(
            cI(),
            ["xs", "s", "m", "s"],
            this.networkTemplate()
          );
        }
        networkTemplate() {
          let t = u.ChainController.getAllRequestedCaipNetworks(),
            e = u.ChainController.getAllApprovedCaipNetworkIds(),
            n = u.ChainController.state.activeCaipNetwork,
            o = u.ChainController.checkIfSmartAccountEnabled(),
            r = d.CoreHelperUtil.sortRequestedNetworks(e, t);
          if (
            o &&
            (0, tO.getPreferredAccountType)(
              null == n ? void 0 : n.chainNamespace
            ) === tL.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
          ) {
            if (!n) return null;
            r = [n];
          }
          return r
            .filter(
              (t) =>
                t.chainNamespace === (null == n ? void 0 : n.chainNamespace)
            )
            .map((t) => {
              var e;
              return (0, i.html)(
                cT(),
                (0, l.ifDefined)(c.AssetUtil.getNetworkImage(t)),
                null != (e = t.name) ? e : "Unknown",
                !0
              );
            });
        }
        constructor() {
          super(), (this.unsubscribe = []);
        }
      };
      (cO.styles = cR),
        (cO = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("w3m-wallet-compatible-networks-view")], cO)),
        t.s({ W3mSIWXSignMessageView: () => cY }, 952469);
      var c_ = n,
        cN = t.i(646559),
        cU = n,
        cD = n;
      function cW() {
        let t = (0, e._)([
          "\n  :host {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: var(--wui-icon-box-size-xl);\n    height: var(--wui-icon-box-size-xl);\n    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);\n    border-radius: var(--local-border-radius);\n    overflow: hidden;\n  }\n\n  wui-icon {\n    width: 32px;\n    height: 32px;\n  }\n",
        ]);
        return (
          (cW = function () {
            return t;
          }),
          t
        );
      }
      let cP = (0, b.css)(cW());
      function cL() {
        let t = (0, e._)(["", ""]);
        return (
          (cL = function () {
            return t;
          }),
          t
        );
      }
      function cj() {
        let t = (0, e._)(["<wui-image src=", " alt=", "></wui-image>"]);
        return (
          (cj = function () {
            return t;
          }),
          t
        );
      }
      function cB() {
        let t = (0, e._)([
          '<wui-icon\n      data-parent-size="md"\n      size="inherit"\n      color="inherit"\n      name="walletPlaceholder"\n    ></wui-icon>',
        ]);
        return (
          (cB = function () {
            return t;
          }),
          t
        );
      }
      var cz = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let cH = class extends cD.LitElement {
        render() {
          return (
            (this.style.cssText = "--local-border-radius: ".concat(
              this.borderRadiusFull ? "1000px" : "20px",
              "; background-color: var(--wui-color-modal-bg);"
            )),
            (0, i.html)(cL(), this.templateVisual())
          );
        }
        templateVisual() {
          if (this.imageSrc) {
            var t;
            return (0, i.html)(
              cj(),
              this.imageSrc,
              null != (t = this.alt) ? t : ""
            );
          }
          return (0, i.html)(cB());
        }
      };
      function cF() {
        let t = (0, e._)([
          "\n  :host {\n    display: flex;\n    justify-content: center;\n    gap: var(--wui-spacing-2xl);\n  }\n\n  wui-visual-thumbnail:nth-child(1) {\n    z-index: 1;\n  }\n",
        ]);
        return (
          (cF = function () {
            return t;
          }),
          t
        );
      }
      (cH.styles = [m.resetStyles, cP]),
        cz([(0, o.property)()], cH.prototype, "imageSrc", void 0),
        cz([(0, o.property)()], cH.prototype, "alt", void 0),
        cz(
          [(0, o.property)({ type: Boolean })],
          cH.prototype,
          "borderRadiusFull",
          void 0
        ),
        (cH = cz([(0, w.customElement)("wui-visual-thumbnail")], cH));
      let cM = (0, b.css)(cF());
      function cV() {
        let t = (0, e._)([
          "\n      <wui-visual-thumbnail\n        ?borderRadiusFull=",
          "\n        .imageSrc=",
          "\n      ></wui-visual-thumbnail>\n      <wui-visual-thumbnail .imageSrc=",
          "></wui-visual-thumbnail>\n    ",
        ]);
        return (
          (cV = function () {
            return t;
          }),
          t
        );
      }
      let cK = class extends cU.LitElement {
        firstUpdated() {
          var t;
          let e =
            null == (t = this.shadowRoot)
              ? void 0
              : t.querySelectorAll("wui-visual-thumbnail");
          (null == e ? void 0 : e[0]) &&
            this.createAnimation(e[0], "translate(18px)"),
            (null == e ? void 0 : e[1]) &&
              this.createAnimation(e[1], "translate(-18px)");
        }
        render() {
          var t;
          return (0, i.html)(
            cV(),
            !0,
            null == (t = this.dappImageUrl) ? void 0 : t[0],
            this.walletImageUrl
          );
        }
        createAnimation(t, e) {
          t.animate([{ transform: "translateX(0px)" }, { transform: e }], {
            duration: 1600,
            easing: "cubic-bezier(0.56, 0, 0.48, 1)",
            direction: "alternate",
            iterations: 1 / 0,
          });
        }
        constructor() {
          var t, e;
          super(...arguments),
            (this.dappImageUrl =
              null == (t = h.OptionsController.state.metadata)
                ? void 0
                : t.icons),
            (this.walletImageUrl =
              null == (e = a.AccountController.state.connectedWalletInfo)
                ? void 0
                : e.icon);
        }
      };
      function cG() {
        let t = (0, e._)([
          '\n      <wui-flex justifyContent="center" .padding=',
          ">\n        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>\n      </wui-flex>\n      <wui-flex\n        .padding=",
          '\n        gap="s"\n        justifyContent="space-between"\n      >\n        <wui-text variant="paragraph-500" align="center" color="fg-100"\n          >',
          " needs to connect to your wallet</wui-text\n        >\n      </wui-flex>\n      <wui-flex\n        .padding=",
          '\n        gap="s"\n        justifyContent="space-between"\n      >\n        <wui-text variant="small-400" align="center" color="fg-200"\n          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect\n          you.</wui-text\n        >\n      </wui-flex>\n      <wui-flex .padding=',
          ' gap="s" justifyContent="space-between">\n        <wui-button\n          size="lg"\n          borderRadius="xs"\n          fullWidth\n          variant="neutral"\n          ?loading=',
          "\n          @click=",
          '\n          data-testid="w3m-connecting-siwe-cancel"\n        >\n          ',
          '\n        </wui-button>\n        <wui-button\n          size="lg"\n          borderRadius="xs"\n          fullWidth\n          variant="main"\n          @click=',
          "\n          ?loading=",
          '\n          data-testid="w3m-connecting-siwe-sign"\n        >\n          ',
          "\n        </wui-button>\n      </wui-flex>\n    ",
        ]);
        return (
          (cG = function () {
            return t;
          }),
          t
        );
      }
      (cK.styles = cM),
        (cK = (function (t, e, n, i) {
          var o,
            r = arguments.length,
            l =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            l = Reflect.decorate(t, e, n, i);
          else
            for (var a = t.length - 1; a >= 0; a--)
              (o = t[a]) &&
                (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
          return r > 3 && l && Object.defineProperty(e, n, l), l;
        })([(0, w.customElement)("w3m-siwx-sign-message-thumbnails")], cK));
      var cq = function (t, e, n, i) {
        var o,
          r = arguments.length,
          l =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(t, e, n, i);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (o = t[a]) &&
              (l = (r < 3 ? o(l) : r > 3 ? o(e, n, l) : o(e, n)) || l);
        return r > 3 && l && Object.defineProperty(e, n, l), l;
      };
      let cY = class extends c_.LitElement {
        render() {
          var t;
          return (0, i.html)(
            cG(),
            ["2xl", "0", "xxl", "0"],
            ["0", "4xl", "l", "4xl"],
            null != (t = this.dappName) ? t : "Dapp",
            ["0", "3xl", "l", "3xl"],
            ["l", "xl", "xl", "xl"],
            this.isCancelling,
            this.onCancel.bind(this),
            this.isCancelling ? "Cancelling..." : "Cancel",
            this.onSign.bind(this),
            this.isSigning,
            this.isSigning ? "Signing..." : "Sign"
          );
        }
        async onSign() {
          (this.isSigning = !0),
            await cN.SIWXUtil.requestSignMessage().finally(
              () => (this.isSigning = !1)
            );
        }
        async onCancel() {
          (this.isCancelling = !0),
            await cN.SIWXUtil.cancelSignMessage().finally(
              () => (this.isCancelling = !1)
            );
        }
        constructor() {
          var t;
          super(...arguments),
            (this.dappName =
              null == (t = h.OptionsController.state.metadata)
                ? void 0
                : t.name),
            (this.isCancelling = !1),
            (this.isSigning = !1);
        }
      };
      cq([(0, r.state)()], cY.prototype, "isCancelling", void 0),
        cq([(0, r.state)()], cY.prototype, "isSigning", void 0),
        (cY = cq([(0, w.customElement)("w3m-siwx-sign-message-view")], cY)),
        t.s({}, 145559),
        t.s(
          {
            AppKitAccountButton: () => D,
            AppKitButton: () => M,
            AppKitConnectButton: () => tn,
            AppKitNetworkButton: () => tC,
            W3mAccountButton: () => U,
            W3mAccountSettingsView: () => tY,
            W3mAccountView: () => nv,
            W3mAllWalletsView: () => oA,
            W3mButton: () => F,
            W3mChooseAccountNameView: () => sr,
            W3mConnectButton: () => te,
            W3mConnectView: () => l$,
            W3mConnectWalletsView: () => sN,
            W3mConnectingExternalView: () => af,
            W3mConnectingMultiChainView: () => ax,
            W3mConnectingWcBasicView: () => a4,
            W3mConnectingWcView: () => a0,
            W3mDownloadsView: () => sp,
            W3mGetWalletView: () => sm,
            W3mNetworkButton: () => tv,
            W3mNetworkSwitchView: () => sV,
            W3mNetworksView: () => s8,
            W3mProfileWalletsView: () => iw,
            W3mRouter: () => cX.W3mRouter,
            W3mSIWXSignMessageView: () => cY,
            W3mSwitchActiveChainView: () => cr,
            W3mUnsupportedChainView: () => cb,
            W3mWalletCompatibleNetworksView: () => cO,
            W3mWhatIsANetworkView: () => cc,
            W3mWhatIsAWalletView: () => sA,
          },
          698754
        ),
        t.i(911602),
        t.i(201140),
        t.i(538177),
        t.i(610939);
      var cX = ty;
      t.i(115505),
        t.i(829177),
        t.i(136184),
        t.i(747679),
        t.i(411862),
        t.i(308192),
        t.i(455795),
        t.i(802534),
        t.i(110475),
        t.i(480831),
        t.i(302416),
        t.i(945291),
        t.i(330852),
        t.i(374654),
        t.i(178685),
        t.i(699254),
        t.i(55893),
        t.i(821520),
        t.i(427086),
        t.i(292015),
        t.i(952469),
        t.i(145559),
        t.i(698754);
    },
  },
]);

//# sourceMappingURL=1e6fe69717281438.js.map
