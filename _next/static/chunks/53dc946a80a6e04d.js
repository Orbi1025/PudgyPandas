(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    700409: (e) => {
      "use strict";
      e.s(
        { AppKitModal: () => ez, W3mModal: () => eK, W3mModalBase: () => eM },
        700409
      ),
        e.s(
          { AppKitModal: () => ez, W3mModal: () => eK, W3mModalBase: () => eM },
          609540
        );
      var t = e.i(213384);
      e.i(478795);
      var n = e.i(506930),
        o = e.i(302084);
      e.i(964439);
      var r = e.i(780157),
        i = e.i(197626);
      e.i(721721);
      var a = e.i(965911),
        l = e.i(605726),
        s = e.i(188274),
        c = e.i(69393),
        u = e.i(631867),
        d = e.i(225335),
        p = e.i(159055),
        h = e.i(563493),
        w = e.i(157653),
        m = e.i(646559);
      let f = {
        isUnsupportedChainView: () =>
          "UnsupportedChain" === w.RouterController.state.view ||
          ("SwitchNetwork" === w.RouterController.state.view &&
            w.RouterController.state.history.includes("UnsupportedChain")),
        async safeClose() {
          if (
            this.isUnsupportedChainView() ||
            (await m.SIWXUtil.isSIWXCloseDisabled())
          )
            return void h.ModalController.shake();
          h.ModalController.close();
        },
      };
      var g = e.i(737460),
        v = e.i(174797),
        b = e.i(350666);
      e.i(433829);
      var C = e.i(111607),
        y = e.i(665747),
        k = e.i(361156),
        x = n,
        S = e.i(126790);
      function R() {
        let e = (0, t._)([
          "\n  :host {\n    display: block;\n    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);\n    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);\n    background-color: var(--wui-color-modal-bg);\n    overflow: hidden;\n  }\n\n  :host([data-embedded='true']) {\n    box-shadow:\n      0 0 0 1px var(--wui-color-gray-glass-005),\n      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);\n  }\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      let A = (0, S.css)(R());
      function E() {
        let e = (0, t._)(["<slot></slot>"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      let N = class extends x.LitElement {
        render() {
          return (0, o.html)(E());
        }
      };
      (N.styles = [k.resetStyles, A]),
        (N = (function (e, t, n, o) {
          var r,
            i = arguments.length,
            a =
              i < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, o);
          else
            for (var l = e.length - 1; l >= 0; l--)
              (r = e[l]) &&
                (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
          return i > 3 && a && Object.defineProperty(t, n, a), a;
        })([(0, y.customElement)("wui-card")], N)),
        e.i(972942);
      var T = n,
        O = e.i(362168),
        W = n;
      function P() {
        let e = (0, t._)([
          "\n  :host {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: var(--wui-spacing-s);\n    border-radius: var(--wui-border-radius-s);\n    border: 1px solid var(--wui-color-dark-glass-100);\n    box-sizing: border-box;\n    background-color: var(--wui-color-bg-325);\n    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);\n  }\n\n  wui-flex {\n    width: 100%;\n  }\n\n  wui-text {\n    word-break: break-word;\n    flex: 1;\n  }\n\n  .close {\n    cursor: pointer;\n  }\n\n  .icon-box {\n    height: 40px;\n    width: 40px;\n    border-radius: var(--wui-border-radius-3xs);\n    background-color: var(--local-icon-bg-value);\n  }\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      e.i(227626), e.i(160541), e.i(885464);
      let I = (0, S.css)(P());
      function _() {
        let e = (0, t._)([
          '\n      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">\n        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">\n          <wui-flex\n            flexDirection="row"\n            alignItems="center"\n            justifyContent="center"\n            class="icon-box"\n          >\n            <wui-icon color=',
          ' size="md" name=',
          '></wui-icon>\n          </wui-flex>\n          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"\n            >',
          '</wui-text\n          >\n        </wui-flex>\n        <wui-icon\n          class="close"\n          color="bg-350"\n          size="sm"\n          name="close"\n          @click=',
          "\n        ></wui-icon>\n      </wui-flex>\n    ",
        ]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      var B = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let U = class extends W.LitElement {
        render() {
          return (
            (this.style.cssText =
              "\n      --local-icon-bg-value: var(--wui-color-".concat(
                this.backgroundColor,
                ");\n   "
              )),
            (0, o.html)(
              _(),
              this.iconColor,
              this.icon,
              this.message,
              this.onClose
            )
          );
        }
        onClose() {
          O.AlertController.close();
        }
        constructor() {
          super(...arguments),
            (this.message = ""),
            (this.backgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.icon = "info");
        }
      };
      function L() {
        let e = (0, t._)([
          "\n  :host {\n    display: block;\n    position: absolute;\n    top: var(--wui-spacing-s);\n    left: var(--wui-spacing-l);\n    right: var(--wui-spacing-l);\n    opacity: 0;\n    pointer-events: none;\n  }\n",
        ]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      (U.styles = [k.resetStyles, I]),
        B([(0, r.property)()], U.prototype, "message", void 0),
        B([(0, r.property)()], U.prototype, "backgroundColor", void 0),
        B([(0, r.property)()], U.prototype, "iconColor", void 0),
        B([(0, r.property)()], U.prototype, "icon", void 0),
        (U = B([(0, y.customElement)("wui-alertbar")], U));
      let j = (0, S.css)(L());
      function D() {
        let e = (0, t._)([
          "\n      <wui-alertbar\n        message=",
          "\n        backgroundColor=",
          "\n        iconColor=",
          "\n        icon=",
          "\n      ></wui-alertbar>\n    ",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      var M = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let K = {
          info: {
            backgroundColor: "fg-350",
            iconColor: "fg-325",
            icon: "info",
          },
          success: {
            backgroundColor: "success-glass-reown-020",
            iconColor: "success-125",
            icon: "checkmark",
          },
          warning: {
            backgroundColor: "warning-glass-reown-020",
            iconColor: "warning-100",
            icon: "warningCircle",
          },
          error: {
            backgroundColor: "error-glass-reown-020",
            iconColor: "error-125",
            icon: "exclamationTriangle",
          },
        },
        z = class extends T.LitElement {
          disconnectedCallback() {
            this.unsubscribe.forEach((e) => e());
          }
          render() {
            let { message: e, variant: t } = O.AlertController.state,
              n = K[t];
            return (0, o.html)(
              D(),
              e,
              null == n ? void 0 : n.backgroundColor,
              null == n ? void 0 : n.iconColor,
              null == n ? void 0 : n.icon
            );
          }
          onOpen(e) {
            this.open
              ? (this.animate(
                  [
                    { opacity: 0, transform: "scale(0.85)" },
                    { opacity: 1, transform: "scale(1)" },
                  ],
                  { duration: 150, fill: "forwards", easing: "ease" }
                ),
                (this.style.cssText = "pointer-events: auto"))
              : e ||
                (this.animate(
                  [
                    { opacity: 1, transform: "scale(1)" },
                    { opacity: 0, transform: "scale(0.85)" },
                  ],
                  { duration: 150, fill: "forwards", easing: "ease" }
                ),
                (this.style.cssText = "pointer-events: none"));
          }
          constructor() {
            super(),
              (this.unsubscribe = []),
              (this.open = O.AlertController.state.open),
              this.onOpen(!0),
              this.unsubscribe.push(
                O.AlertController.subscribeKey("open", (e) => {
                  (this.open = e), this.onOpen(!1);
                })
              );
          }
        };
      (z.styles = j),
        M([(0, i.state)()], z.prototype, "open", void 0),
        (z = M([(0, y.customElement)("w3m-alertbar")], z));
      var H = n,
        Y = e.i(705258),
        X = e.i(841768),
        V = e.i(596373),
        q = e.i(755111);
      e.i(327531);
      var G = n;
      function F() {
        let e = (0, t._)([
          "\n  button {\n    display: block;\n    display: flex;\n    align-items: center;\n    padding: var(--wui-spacing-xxs);\n    gap: var(--wui-spacing-xxs);\n    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);\n    border-radius: var(--wui-border-radius-xxs);\n  }\n\n  wui-image {\n    border-radius: 100%;\n    width: var(--wui-spacing-xl);\n    height: var(--wui-spacing-xl);\n  }\n\n  wui-icon-box {\n    width: var(--wui-spacing-xl);\n    height: var(--wui-spacing-xl);\n  }\n\n  button:hover {\n    background-color: var(--wui-color-gray-glass-002);\n  }\n\n  button:active {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      e.i(715030), e.i(374230);
      let J = (0, S.css)(F());
      function Q() {
        let e = (0, t._)([
          "<button>\n      ",
          '\n      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>\n    </button>',
        ]);
        return (
          (Q = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        let e = (0, t._)([
          "<wui-image src=",
          ' alt="select visual"></wui-image>',
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function $() {
        let e = (0, t._)([
          '<wui-icon-box\n      size="xxs"\n      iconColor="fg-200"\n      backgroundColor="fg-100"\n      background="opaque"\n      icon="networkPlaceholder"\n    ></wui-icon-box>',
        ]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      var ee = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let et = class extends G.LitElement {
        render() {
          return (0, o.html)(Q(), this.imageTemplate());
        }
        imageTemplate() {
          return this.imageSrc
            ? (0, o.html)(Z(), this.imageSrc)
            : (0, o.html)($());
        }
        constructor() {
          super(...arguments), (this.imageSrc = "");
        }
      };
      (et.styles = [k.resetStyles, k.elementStyles, k.colorStyles, J]),
        ee([(0, r.property)()], et.prototype, "imageSrc", void 0),
        (et = ee([(0, y.customElement)("wui-select")], et)),
        e.i(335835),
        e.i(156411);
      var en = e.i(508431);
      function eo() {
        let e = (0, t._)([
          "\n  :host {\n    height: 64px;\n  }\n\n  wui-text {\n    text-transform: capitalize;\n  }\n\n  wui-flex.w3m-header-title {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  wui-flex.w3m-header-title[view-direction='prev'] {\n    animation:\n      slide-down-out 120ms forwards var(--wui-ease-out-power-2),\n      slide-down-in 120ms forwards var(--wui-ease-out-power-2);\n    animation-delay: 0ms, 200ms;\n  }\n\n  wui-flex.w3m-header-title[view-direction='next'] {\n    animation:\n      slide-up-out 120ms forwards var(--wui-ease-out-power-2),\n      slide-up-in 120ms forwards var(--wui-ease-out-power-2);\n    animation-delay: 0ms, 200ms;\n  }\n\n  wui-icon-link[data-hidden='true'] {\n    opacity: 0 !important;\n    pointer-events: none;\n  }\n\n  @keyframes slide-up-out {\n    from {\n      transform: translateY(0px);\n      opacity: 1;\n    }\n    to {\n      transform: translateY(3px);\n      opacity: 0;\n    }\n  }\n\n  @keyframes slide-up-in {\n    from {\n      transform: translateY(-3px);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes slide-down-out {\n    from {\n      transform: translateY(0px);\n      opacity: 1;\n    }\n    to {\n      transform: translateY(-3px);\n      opacity: 0;\n    }\n  }\n\n  @keyframes slide-down-in {\n    from {\n      transform: translateY(3px);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n",
        ]);
        return (
          (eo = function () {
            return e;
          }),
          e
        );
      }
      let er = (0, S.css)(eo());
      function ei() {
        let e = (0, t._)([
          "\n      <wui-flex .padding=",
          ' justifyContent="space-between" alignItems="center">\n        ',
          " ",
          " ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      function ea() {
        let e = (0, t._)([
          '<wui-flex>\n      <wui-icon-link\n        icon="clock"\n        @click=',
          '\n        data-testid="w3m-header-smart-sessions"\n      ></wui-icon-link>\n      ',
          "\n    </wui-flex> ",
        ]);
        return (
          (ea = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        let e = (0, t._)([
          '\n      <wui-icon-link\n        icon="close"\n        @click=',
          '\n        data-testid="w3m-header-close"\n      ></wui-icon-link>\n    ',
        ]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function es() {
        let e = (0, t._)(['<wui-tag variant="main">Beta</wui-tag>']);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function ec() {
        let e = (0, t._)([
          '\n      <wui-flex\n        view-direction="',
          '"\n        class="w3m-header-title"\n        alignItems="center"\n        gap="xs"\n      >\n        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"\n          >',
          "</wui-text\n        >\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (ec = function () {
            return e;
          }),
          e
        );
      }
      function eu() {
        let e = (0, t._)([
          '<wui-select\n        id="dynamic"\n        data-testid="w3m-account-select-network"\n        active-network=',
          "\n        @click=",
          "\n        imageSrc=",
          "\n      ></wui-select>",
        ]);
        return (
          (eu = function () {
            return e;
          }),
          e
        );
      }
      function ed() {
        let e = (0, t._)([
          '<wui-icon-link\n        data-testid="header-back"\n        id="dynamic"\n        icon="chevronLeft"\n        @click=',
          "\n      ></wui-icon-link>",
        ]);
        return (
          (ed = function () {
            return e;
          }),
          e
        );
      }
      function ep() {
        let e = (0, t._)([
          "<wui-icon-link\n      data-hidden=",
          '\n      id="dynamic"\n      icon="helpCircle"\n      @click=',
          "\n    ></wui-icon-link>",
        ]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      var eh = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let ew = ["SmartSessionList"];
      function em() {
        var e, t, n, o, r, i, a;
        let l =
            null == (t = w.RouterController.state.data) ||
            null == (e = t.connector)
              ? void 0
              : e.name,
          s =
            null == (o = w.RouterController.state.data) ||
            null == (n = o.wallet)
              ? void 0
              : n.name,
          c =
            null == (i = w.RouterController.state.data) ||
            null == (r = i.network)
              ? void 0
              : r.name,
          u = null != s ? s : l,
          p = d.ConnectorController.getConnectors(),
          h =
            1 === p.length &&
            (null == (a = p[0]) ? void 0 : a.id) === "w3m-email";
        return {
          Connect: "Connect ".concat(h ? "Email" : "", " Wallet"),
          Create: "Create Wallet",
          ChooseAccountName: void 0,
          Account: void 0,
          AccountSettings: void 0,
          AllWallets: "All Wallets",
          ApproveTransaction: "Approve Transaction",
          BuyInProgress: "Buy",
          ConnectingExternal: null != u ? u : "Connect Wallet",
          ConnectingWalletConnect: null != u ? u : "WalletConnect",
          ConnectingWalletConnectBasic: "WalletConnect",
          ConnectingSiwe: "Sign In",
          Convert: "Convert",
          ConvertSelectToken: "Select token",
          ConvertPreview: "Preview convert",
          Downloads: u ? "Get ".concat(u) : "Downloads",
          EmailLogin: "Email Login",
          EmailVerifyOtp: "Confirm Email",
          EmailVerifyDevice: "Register Device",
          GetWallet: "Get a wallet",
          Networks: "Choose Network",
          OnRampProviders: "Choose Provider",
          OnRampActivity: "Activity",
          OnRampTokenSelect: "Select Token",
          OnRampFiatSelect: "Select Currency",
          Pay: "How you pay",
          ProfileWallets: "Wallets",
          SwitchNetwork: null != c ? c : "Switch Network",
          Transactions: "Activity",
          UnsupportedChain: "Switch Network",
          UpgradeEmailWallet: "Upgrade your Wallet",
          UpdateEmailWallet: "Edit Email",
          UpdateEmailPrimaryOtp: "Confirm Current Email",
          UpdateEmailSecondaryOtp: "Confirm New Email",
          WhatIsABuy: "What is Buy?",
          RegisterAccountName: "Choose name",
          RegisterAccountNameSuccess: "",
          WalletReceive: "Receive",
          WalletCompatibleNetworks: "Compatible Networks",
          Swap: "Swap",
          SwapSelectToken: "Select token",
          SwapPreview: "Preview swap",
          WalletSend: "Send",
          WalletSendPreview: "Review send",
          WalletSendSelectToken: "Select Token",
          WhatIsANetwork: "What is a network?",
          WhatIsAWallet: "What is a wallet?",
          ConnectWallets: "Connect wallet",
          ConnectSocials: "All socials",
          ConnectingSocial: Y.AccountController.state.socialProvider
            ? Y.AccountController.state.socialProvider
            : "Connect Social",
          ConnectingMultiChain: "Select chain",
          ConnectingFarcaster: "Farcaster",
          SwitchActiveChain: "Switch chain",
          SmartSessionCreated: void 0,
          SmartSessionList: "Smart Sessions",
          SIWXSignMessage: "Sign In",
          PayLoading: "Payment in progress",
        };
      }
      let ef = class extends H.LitElement {
        disconnectCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (0, o.html)(
            ei(),
            this.getPadding(),
            this.leftHeaderTemplate(),
            this.titleTemplate(),
            this.rightHeaderTemplate()
          );
        }
        onWalletHelp() {
          q.EventsController.sendEvent({
            type: "track",
            event: "CLICK_WALLET_HELP",
          }),
            w.RouterController.push("WhatIsAWallet");
        }
        async onClose() {
          await f.safeClose();
        }
        rightHeaderTemplate() {
          var e, t;
          let n =
            null === g.OptionsController ||
            void 0 === g.OptionsController ||
            null == (t = g.OptionsController.state) ||
            null == (e = t.features)
              ? void 0
              : e.smartSessions;
          return "Account" === w.RouterController.state.view && n
            ? (0, o.html)(
                ea(),
                () => w.RouterController.push("SmartSessionList"),
                this.closeButtonTemplate()
              )
            : this.closeButtonTemplate();
        }
        closeButtonTemplate() {
          return (0, o.html)(el(), this.onClose.bind(this));
        }
        titleTemplate() {
          let e = ew.includes(this.view);
          return (0, o.html)(
            ec(),
            this.viewDirection,
            this.headerText,
            e ? (0, o.html)(es()) : null
          );
        }
        leftHeaderTemplate() {
          let { view: e } = w.RouterController.state,
            t = "Connect" === e,
            n = g.OptionsController.state.enableEmbedded,
            r = g.OptionsController.state.enableNetworkSwitch;
          if ("Account" === e && r) {
            var i;
            return (0, o.html)(
              eu(),
              (0, a.ifDefined)(null == (i = this.network) ? void 0 : i.name),
              this.onNetworks.bind(this),
              (0, a.ifDefined)(this.networkImage)
            );
          }
          return this.showBack &&
            !("ApproveTransaction" === e || "ConnectingSiwe" === e || (t && n))
            ? (0, o.html)(ed(), this.onGoBack.bind(this))
            : (0, o.html)(ep(), !t, this.onWalletHelp.bind(this));
        }
        onNetworks() {
          this.isAllowedNetworkSwitch() &&
            (q.EventsController.sendEvent({
              type: "track",
              event: "CLICK_NETWORKS",
            }),
            w.RouterController.push("Networks"));
        }
        isAllowedNetworkSwitch() {
          let e = u.ChainController.getAllRequestedCaipNetworks(),
            t = !!e && e.length > 1,
            n =
              null == e
                ? void 0
                : e.find((e) => {
                    var t;
                    let { id: n } = e;
                    return n === (null == (t = this.network) ? void 0 : t.id);
                  });
          return t || !n;
        }
        getPadding() {
          return this.heading ? ["l", "2l", "l", "2l"] : ["0", "2l", "0", "2l"];
        }
        onViewChange() {
          let { history: e } = w.RouterController.state,
            t = en.ConstantsUtil.VIEW_DIRECTION.Next;
          e.length < this.prevHistoryLength &&
            (t = en.ConstantsUtil.VIEW_DIRECTION.Prev),
            (this.prevHistoryLength = e.length),
            (this.viewDirection = t);
        }
        async onHistoryChange() {
          var e;
          let { history: t } = w.RouterController.state,
            n =
              null == (e = this.shadowRoot)
                ? void 0
                : e.querySelector("#dynamic");
          t.length > 1 && !this.showBack && n
            ? (await n.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }).finished,
              (this.showBack = !0),
              n.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }))
            : t.length <= 1 &&
              this.showBack &&
              n &&
              (await n.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }).finished,
              (this.showBack = !1),
              n.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 200,
                fill: "forwards",
                easing: "ease",
              }));
        }
        onGoBack() {
          w.RouterController.goBack();
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.heading = em()[w.RouterController.state.view]),
            (this.network = u.ChainController.state.activeCaipNetwork),
            (this.networkImage = V.AssetUtil.getNetworkImage(this.network)),
            (this.showBack = !1),
            (this.prevHistoryLength = 1),
            (this.view = w.RouterController.state.view),
            (this.viewDirection = ""),
            (this.headerText = em()[w.RouterController.state.view]),
            this.unsubscribe.push(
              X.AssetController.subscribeNetworkImages(() => {
                this.networkImage = V.AssetUtil.getNetworkImage(this.network);
              }),
              w.RouterController.subscribeKey("view", (e) => {
                setTimeout(() => {
                  (this.view = e), (this.headerText = em()[e]);
                }, en.ConstantsUtil.ANIMATION_DURATIONS.HeaderText),
                  this.onViewChange(),
                  this.onHistoryChange();
              }),
              u.ChainController.subscribeKey("activeCaipNetwork", (e) => {
                (this.network = e),
                  (this.networkImage = V.AssetUtil.getNetworkImage(
                    this.network
                  ));
              })
            );
        }
      };
      (ef.styles = er),
        eh([(0, i.state)()], ef.prototype, "heading", void 0),
        eh([(0, i.state)()], ef.prototype, "network", void 0),
        eh([(0, i.state)()], ef.prototype, "networkImage", void 0),
        eh([(0, i.state)()], ef.prototype, "showBack", void 0),
        eh([(0, i.state)()], ef.prototype, "prevHistoryLength", void 0),
        eh([(0, i.state)()], ef.prototype, "view", void 0),
        eh([(0, i.state)()], ef.prototype, "viewDirection", void 0),
        eh([(0, i.state)()], ef.prototype, "headerText", void 0),
        (ef = eh([(0, y.customElement)("w3m-header")], ef));
      var eg = n,
        ev = n;
      function eb() {
        let e = (0, t._)([
          "\n  :host {\n    display: flex;\n    column-gap: var(--wui-spacing-s);\n    align-items: center;\n    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);\n    border-radius: var(--wui-border-radius-s);\n    border: 1px solid var(--wui-color-gray-glass-005);\n    box-sizing: border-box;\n    background-color: var(--wui-color-bg-175);\n    box-shadow:\n      0px 14px 64px -4px rgba(0, 0, 0, 0.15),\n      0px 8px 22px -6px rgba(0, 0, 0, 0.15);\n\n    max-width: 300px;\n  }\n\n  :host wui-loading-spinner {\n    margin-left: var(--wui-spacing-3xs);\n  }\n",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      e.i(55912);
      let eC = (0, S.css)(eb());
      function ey() {
        let e = (0, t._)([
          "\n      ",
          '\n      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"\n        >',
          "</wui-text\n      >\n    ",
        ]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function ek() {
        let e = (0, t._)([
          '<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>',
        ]);
        return (
          (ek = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        let e = (0, t._)([
          '<wui-icon size="xl" color=',
          " name=",
          "></wui-icon>",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      function eS() {
        let e = (0, t._)([
          '<wui-icon-box\n      size="sm"\n      iconSize="xs"\n      iconColor=',
          "\n      backgroundColor=",
          "\n      icon=",
          '\n      background="opaque"\n    ></wui-icon-box>',
        ]);
        return (
          (eS = function () {
            return e;
          }),
          e
        );
      }
      var eR = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let eA = class extends ev.LitElement {
        render() {
          return (0, o.html)(ey(), this.templateIcon(), this.message);
        }
        templateIcon() {
          return this.loading
            ? (0, o.html)(ek())
            : "default" === this.iconType
            ? (0, o.html)(ex(), this.iconColor, this.icon)
            : (0, o.html)(
                eS(),
                this.iconColor,
                this.backgroundColor,
                this.icon
              );
        }
        constructor() {
          super(...arguments),
            (this.backgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.icon = "checkmark"),
            (this.message = ""),
            (this.loading = !1),
            (this.iconType = "default");
        }
      };
      function eE() {
        let e = (0, t._)([
          "\n  :host {\n    display: block;\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    top: 11px;\n    left: 50%;\n    width: max-content;\n  }\n",
        ]);
        return (
          (eE = function () {
            return e;
          }),
          e
        );
      }
      (eA.styles = [k.resetStyles, eC]),
        eR([(0, r.property)()], eA.prototype, "backgroundColor", void 0),
        eR([(0, r.property)()], eA.prototype, "iconColor", void 0),
        eR([(0, r.property)()], eA.prototype, "icon", void 0),
        eR([(0, r.property)()], eA.prototype, "message", void 0),
        eR([(0, r.property)()], eA.prototype, "loading", void 0),
        eR([(0, r.property)()], eA.prototype, "iconType", void 0),
        (eA = eR([(0, y.customElement)("wui-snackbar")], eA));
      let eN = (0, S.css)(eE());
      function eT() {
        let e = (0, t._)([
          "\n      <wui-snackbar\n        message=",
          "\n        backgroundColor=",
          "\n        iconColor=",
          "\n        icon=",
          "\n        .loading=",
          "\n      ></wui-snackbar>\n    ",
        ]);
        return (
          (eT = function () {
            return e;
          }),
          e
        );
      }
      var eO = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let eW = {
          loading: void 0,
          success: {
            backgroundColor: "success-100",
            iconColor: "success-100",
            icon: "checkmark",
          },
          error: {
            backgroundColor: "error-100",
            iconColor: "error-100",
            icon: "close",
          },
        },
        eP = class extends eg.LitElement {
          disconnectedCallback() {
            clearTimeout(this.timeout), this.unsubscribe.forEach((e) => e());
          }
          render() {
            var e;
            let { message: t, variant: n, svg: r } = v.SnackController.state,
              i = eW[n],
              { icon: a, iconColor: l } =
                null != (e = null != r ? r : i) ? e : {};
            return (0, o.html)(
              eT(),
              t,
              null == i ? void 0 : i.backgroundColor,
              l,
              a,
              "loading" === n
            );
          }
          onOpen() {
            clearTimeout(this.timeout),
              this.open
                ? (this.animate(
                    [
                      { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
                      { opacity: 1, transform: "translateX(-50%) scale(1)" },
                    ],
                    { duration: 150, fill: "forwards", easing: "ease" }
                  ),
                  this.timeout && clearTimeout(this.timeout),
                  v.SnackController.state.autoClose &&
                    (this.timeout = setTimeout(
                      () => v.SnackController.hide(),
                      2500
                    )))
                : this.animate(
                    [
                      { opacity: 1, transform: "translateX(-50%) scale(1)" },
                      { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
                    ],
                    { duration: 150, fill: "forwards", easing: "ease" }
                  );
          }
          constructor() {
            super(),
              (this.unsubscribe = []),
              (this.timeout = void 0),
              (this.open = v.SnackController.state.open),
              this.unsubscribe.push(
                v.SnackController.subscribeKey("open", (e) => {
                  (this.open = e), this.onOpen();
                })
              );
          }
        };
      function eI() {
        let e = (0, t._)([
          "\n  :host {\n    z-index: var(--w3m-z-index);\n    display: block;\n    backface-visibility: hidden;\n    will-change: opacity;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    pointer-events: none;\n    opacity: 0;\n    background-color: var(--wui-cover);\n    transition: opacity 0.2s var(--wui-ease-out-power-2);\n    will-change: opacity;\n  }\n\n  :host(.open) {\n    opacity: 1;\n  }\n\n  :host(.appkit-modal) {\n    position: relative;\n    pointer-events: unset;\n    background: none;\n    width: 100%;\n    opacity: 1;\n  }\n\n  wui-card {\n    max-width: var(--w3m-modal-width);\n    width: 100%;\n    position: relative;\n    animation: zoom-in 0.2s var(--wui-ease-out-power-2);\n    animation-fill-mode: backwards;\n    outline: none;\n    transition:\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: border-radius, background-color;\n  }\n\n  :host(.appkit-modal) wui-card {\n    max-width: 400px;\n  }\n\n  wui-card[shake='true'] {\n    animation:\n      zoom-in 0.2s var(--wui-ease-out-power-2),\n      w3m-shake 0.5s var(--wui-ease-out-power-2);\n  }\n\n  wui-flex {\n    overflow-x: hidden;\n    overflow-y: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-height: 700px) and (min-width: 431px) {\n    wui-flex {\n      align-items: flex-start;\n    }\n\n    wui-card {\n      margin: var(--wui-spacing-xxl) 0px;\n    }\n  }\n\n  @media (max-width: 430px) {\n    wui-flex {\n      align-items: flex-end;\n    }\n\n    wui-card {\n      max-width: 100%;\n      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);\n      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);\n      border-bottom: none;\n      animation: slide-in 0.2s var(--wui-ease-out-power-2);\n    }\n\n    wui-card[shake='true'] {\n      animation:\n        slide-in 0.2s var(--wui-ease-out-power-2),\n        w3m-shake 0.5s var(--wui-ease-out-power-2);\n    }\n  }\n\n  @keyframes zoom-in {\n    0% {\n      transform: scale(0.95) translateY(0);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  @keyframes slide-in {\n    0% {\n      transform: scale(1) translateY(50px);\n    }\n    100% {\n      transform: scale(1) translateY(0);\n    }\n  }\n\n  @keyframes w3m-shake {\n    0% {\n      transform: scale(1) rotate(0deg);\n    }\n    20% {\n      transform: scale(1) rotate(-1deg);\n    }\n    40% {\n      transform: scale(1) rotate(1.5deg);\n    }\n    60% {\n      transform: scale(1) rotate(-1.5deg);\n    }\n    80% {\n      transform: scale(1) rotate(1deg);\n    }\n    100% {\n      transform: scale(1) rotate(0deg);\n    }\n  }\n\n  @keyframes w3m-view-height {\n    from {\n      height: var(--prev-height);\n    }\n    to {\n      height: var(--new-height);\n    }\n  }\n",
        ]);
        return (
          (eI = function () {
            return e;
          }),
          e
        );
      }
      (eP.styles = eN),
        eO([(0, i.state)()], eP.prototype, "open", void 0),
        (eP = eO([(0, y.customElement)("w3m-snackbar")], eP)),
        e.i(731549),
        e.i(742227);
      let e_ = (0, S.css)(eI());
      function eB() {
        let e = (0, t._)(["", "\n        <w3m-tooltip></w3m-tooltip> "]);
        return (
          (eB = function () {
            return e;
          }),
          e
        );
      }
      function eU() {
        let e = (0, t._)([
          "\n          <wui-flex @click=",
          ' data-testid="w3m-modal-overlay">\n            ',
          "\n          </wui-flex>\n          <w3m-tooltip></w3m-tooltip>\n        ",
        ]);
        return (
          (eU = function () {
            return e;
          }),
          e
        );
      }
      function eL() {
        let e = (0, t._)([
          ' <wui-card\n      shake="',
          '"\n      data-embedded="',
          '"\n      role="alertdialog"\n      aria-modal="true"\n      tabindex="0"\n      data-testid="w3m-modal-card"\n    >\n      <w3m-header></w3m-header>\n      <w3m-router></w3m-router>\n      <w3m-snackbar></w3m-snackbar>\n      <w3m-alertbar></w3m-alertbar>\n    </wui-card>',
        ]);
        return (
          (eL = function () {
            return e;
          }),
          e
        );
      }
      var ej = function (e, t, n, o) {
        var r,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let eD = "scroll-lock";
      class eM extends n.LitElement {
        firstUpdated() {
          if (this.caipAddress) {
            if (this.enableEmbedded) {
              h.ModalController.close(), this.prefetch();
              return;
            }
            this.onNewAddress(this.caipAddress);
          }
          this.open && this.onOpen(), this.enableEmbedded && this.prefetch();
        }
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e()), this.onRemoveKeyboardListener();
        }
        render() {
          return ((this.style.cssText =
            "\n      --local-border-bottom-mobile-radius: ".concat(
              this.enableEmbedded
                ? "clamp(0px, var(--wui-border-radius-l), 44px)"
                : "0px",
              ";\n    "
            )),
          this.enableEmbedded)
            ? (0, o.html)(eB(), this.contentTemplate())
            : this.open
            ? (0, o.html)(
                eU(),
                this.onOverlayClick.bind(this),
                this.contentTemplate()
              )
            : null;
        }
        contentTemplate() {
          return (0, o.html)(
            eL(),
            this.shake,
            (0, a.ifDefined)(this.enableEmbedded)
          );
        }
        async onOverlayClick(e) {
          e.target === e.currentTarget && (await this.handleClose());
        }
        async handleClose() {
          await f.safeClose();
        }
        initializeTheming() {
          let { themeVariables: e, themeMode: t } = b.ThemeController.state,
            n = C.UiHelperUtil.getColorTheme(t);
          (0, k.initializeTheming)(e, n);
        }
        onClose() {
          (this.open = !1),
            this.classList.remove("open"),
            this.onScrollUnlock(),
            v.SnackController.hide(),
            this.onRemoveKeyboardListener();
        }
        onOpen() {
          (this.open = !0),
            this.classList.add("open"),
            this.onScrollLock(),
            this.onAddKeyboardListener();
        }
        onScrollLock() {
          let e = document.createElement("style");
          (e.dataset.w3m = eD),
            (e.textContent =
              "\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    "),
            document.head.appendChild(e);
        }
        onScrollUnlock() {
          let e = document.head.querySelector(
            'style[data-w3m="'.concat(eD, '"]')
          );
          e && e.remove();
        }
        onAddKeyboardListener() {
          var e;
          this.abortController = new AbortController();
          let t =
            null == (e = this.shadowRoot)
              ? void 0
              : e.querySelector("wui-card");
          null == t || t.focus(),
            window.addEventListener(
              "keydown",
              (e) => {
                if ("Escape" === e.key) this.handleClose();
                else if ("Tab" === e.key) {
                  let { tagName: n } = e.target;
                  !n ||
                    n.includes("W3M-") ||
                    n.includes("WUI-") ||
                    null == t ||
                    t.focus();
                }
              },
              this.abortController
            );
        }
        onRemoveKeyboardListener() {
          var e;
          null == (e = this.abortController) || e.abort(),
            (this.abortController = void 0);
        }
        async onNewAddress(e) {
          let t = u.ChainController.state.isSwitchingNamespace,
            n = "ProfileWallets" === w.RouterController.state.view;
          e
            ? await this.onConnected({
                caipAddress: e,
                isSwitchingNamespace: t,
                isInProfileView: n,
              })
            : t || this.enableEmbedded || n || h.ModalController.close(),
            await m.SIWXUtil.initializeIfEnabled(),
            (this.caipAddress = e),
            u.ChainController.setIsSwitchingNamespace(!1);
        }
        async onConnected(e) {
          if (e.isInProfileView) return;
          let {
              chainNamespace: t,
              chainId: n,
              address: o,
            } = s.ParseUtil.parseCaipAddress(e.caipAddress),
            r = "".concat(t, ":").concat(n),
            i = !p.CoreHelperUtil.getPlainAddress(this.caipAddress),
            a = await m.SIWXUtil.getSessions({ address: o, caipNetworkId: r }),
            l =
              !m.SIWXUtil.getSIWX() ||
              a.some((e) => e.data.accountAddress === o),
            c = e.isSwitchingNamespace && l && !this.enableEmbedded,
            u = this.enableEmbedded && i;
          c ? w.RouterController.goBack() : u && h.ModalController.close();
        }
        onNewNetwork(e) {
          var t, n, o;
          let r = this.caipNetwork,
            i =
              null == r || null == (t = r.caipNetworkId)
                ? void 0
                : t.toString(),
            a = null == r ? void 0 : r.chainNamespace,
            s =
              null == e || null == (n = e.caipNetworkId)
                ? void 0
                : n.toString(),
            c = null == e ? void 0 : e.chainNamespace,
            d = i !== s,
            p =
              (null == r ? void 0 : r.name) ===
              l.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,
            m = "ConnectingExternal" === w.RouterController.state.view,
            f = "ProfileWallets" === w.RouterController.state.view,
            g = !(null ==
            (o = u.ChainController.getAccountData(
              null == e ? void 0 : e.chainNamespace
            ))
              ? void 0
              : o.caipAddress),
            v = "UnsupportedChain" === w.RouterController.state.view,
            b = h.ModalController.state.open,
            C = !1;
          this.enableEmbedded &&
            "SwitchNetwork" === w.RouterController.state.view &&
            (C = !0),
            b &&
              !m &&
              !f &&
              (g
                ? d && (C = !0)
                : v
                ? (C = !0)
                : d && a === c && !p && (C = !0)),
            C &&
              "SIWXSignMessage" !== w.RouterController.state.view &&
              w.RouterController.goBack(),
            (this.caipNetwork = e);
        }
        prefetch() {
          this.hasPrefetched ||
            (c.ApiController.prefetch(),
            c.ApiController.fetchWalletsByPage({ page: 1 }),
            (this.hasPrefetched = !0));
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.abortController = void 0),
            (this.hasPrefetched = !1),
            (this.enableEmbedded = g.OptionsController.state.enableEmbedded),
            (this.open = h.ModalController.state.open),
            (this.caipAddress = u.ChainController.state.activeCaipAddress),
            (this.caipNetwork = u.ChainController.state.activeCaipNetwork),
            (this.shake = h.ModalController.state.shake),
            (this.filterByNamespace =
              d.ConnectorController.state.filterByNamespace),
            this.initializeTheming(),
            c.ApiController.prefetchAnalyticsConfig(),
            this.unsubscribe.push(
              h.ModalController.subscribeKey("open", (e) =>
                e ? this.onOpen() : this.onClose()
              ),
              h.ModalController.subscribeKey("shake", (e) => (this.shake = e)),
              u.ChainController.subscribeKey("activeCaipNetwork", (e) =>
                this.onNewNetwork(e)
              ),
              u.ChainController.subscribeKey("activeCaipAddress", (e) =>
                this.onNewAddress(e)
              ),
              g.OptionsController.subscribeKey(
                "enableEmbedded",
                (e) => (this.enableEmbedded = e)
              ),
              d.ConnectorController.subscribeKey("filterByNamespace", (e) => {
                var t;
                this.filterByNamespace === e ||
                  (null == (t = u.ChainController.getAccountData(e))
                    ? void 0
                    : t.caipAddress) ||
                  (c.ApiController.fetchRecommendedWallets(),
                  (this.filterByNamespace = e));
              })
            );
        }
      }
      (eM.styles = e_),
        ej(
          [(0, r.property)({ type: Boolean })],
          eM.prototype,
          "enableEmbedded",
          void 0
        ),
        ej([(0, i.state)()], eM.prototype, "open", void 0),
        ej([(0, i.state)()], eM.prototype, "caipAddress", void 0),
        ej([(0, i.state)()], eM.prototype, "caipNetwork", void 0),
        ej([(0, i.state)()], eM.prototype, "shake", void 0),
        ej([(0, i.state)()], eM.prototype, "filterByNamespace", void 0);
      let eK = class extends eM {};
      eK = ej([(0, y.customElement)("w3m-modal")], eK);
      let ez = class extends eM {};
      (ez = ej([(0, y.customElement)("appkit-modal")], ez)),
        e.s({}, 4357),
        e.s(
          { AppKitModal: () => ez, W3mModal: () => eK, W3mModalBase: () => eM },
          992354
        ),
        e.i(609540),
        e.i(4357),
        e.i(992354);
    },
  },
]);

//# sourceMappingURL=c5c8327e3e5ccd04.js.map
