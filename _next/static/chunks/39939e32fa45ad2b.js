(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    651370: (e) => {
      "use strict";
      e.s(
        {
          W3mSendSelectTokenView: () => er,
          W3mWalletSendPreviewView: () => eL,
          W3mWalletSendView: () => $,
        },
        651370
      ),
        e.s({ W3mWalletSendView: () => $ }, 587003);
      var n = e.i(213384);
      e.i(478795);
      var t = e.i(506930),
        i = e.i(302084);
      e.i(964439);
      var r = e.i(197626),
        o = e.i(631867),
        l = e.i(159055),
        s = e.i(157653),
        a = e.i(663563),
        u = e.i(448706);
      e.i(433829);
      var c = e.i(665747);
      e.i(679175), e.i(972942), e.i(464275);
      var d = t,
        h = e.i(780157);
      e.i(17696);
      var p = e.i(930780),
        f = e.i(875073);
      e.i(916906), e.i(156411);
      var w = e.i(126790);
      function m() {
        let e = (0, n._)([
          "\n  :host {\n    width: 100%;\n    height: 100px;\n    border-radius: var(--wui-border-radius-s);\n    border: 1px solid var(--wui-color-gray-glass-002);\n    background-color: var(--wui-color-gray-glass-002);\n    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);\n    will-change: background-color;\n    position: relative;\n  }\n\n  :host(:hover) {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  wui-flex {\n    width: 100%;\n    height: fit-content;\n  }\n\n  wui-button {\n    display: ruby;\n    color: var(--wui-color-fg-100);\n    margin: 0 var(--wui-spacing-xs);\n  }\n\n  .instruction {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 2;\n  }\n\n  .paste {\n    display: inline-flex;\n  }\n\n  textarea {\n    background: transparent;\n    width: 100%;\n    font-family: var(--w3m-font-family);\n    font-size: var(--wui-font-size-medium);\n    font-style: normal;\n    font-weight: var(--wui-font-weight-light);\n    line-height: 130%;\n    letter-spacing: var(--wui-letter-spacing-medium);\n    color: var(--wui-color-fg-100);\n    caret-color: var(--wui-color-accent-100);\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: textfield;\n    padding: 0px;\n    border: none;\n    outline: none;\n    appearance: none;\n    resize: none;\n    overflow: hidden;\n  }\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      let v = (0, w.css)(m());
      function g() {
        let e = (0, n._)([
          " <wui-flex\n      @click=",
          '\n      flexDirection="column"\n      justifyContent="center"\n      gap="4xs"\n      .padding=',
          "\n    >\n      <wui-text\n        ",
          '\n        class="instruction"\n        color="fg-300"\n        variant="medium-400"\n      >\n        Type or\n        <wui-button\n          class="paste"\n          size="md"\n          variant="neutral"\n          iconLeft="copy"\n          @click=',
          '\n        >\n          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>\n          Paste\n        </wui-button>\n        address\n      </wui-text>\n      <textarea\n        spellcheck="false"\n        ?disabled=',
          "\n        ",
          "\n        @input=",
          "\n        @blur=",
          "\n        .value=",
          '\n        autocomplete="off"\n      >\n',
          "</textarea\n      >\n    </wui-flex>",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var x = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let k = class extends d.LitElement {
        firstUpdated() {
          this.value && (this.instructionHidden = !0), this.checkHidden();
        }
        render() {
          var e, n;
          return (0, i.html)(
            g(),
            this.onBoxClick.bind(this),
            ["2xl", "l", "xl", "l"],
            (0, p.ref)(this.instructionElementRef),
            this.onPasteClick.bind(this),
            !this.instructionHidden,
            (0, p.ref)(this.inputElementRef),
            this.onInputChange.bind(this),
            this.onBlur.bind(this),
            null != (e = this.value) ? e : "",
            null != (n = this.value) ? n : ""
          );
        }
        async focusInput() {
          if (this.instructionElementRef.value) {
            var e;
            (this.instructionHidden = !0),
              await this.toggleInstructionFocus(!1),
              (this.instructionElementRef.value.style.pointerEvents = "none"),
              null == (e = this.inputElementRef.value) || e.focus(),
              this.inputElementRef.value &&
                (this.inputElementRef.value.selectionStart =
                  this.inputElementRef.value.selectionEnd =
                    this.inputElementRef.value.value.length);
          }
        }
        async focusInstruction() {
          if (this.instructionElementRef.value) {
            var e;
            (this.instructionHidden = !1),
              await this.toggleInstructionFocus(!0),
              (this.instructionElementRef.value.style.pointerEvents = "auto"),
              null == (e = this.inputElementRef.value) || e.blur();
          }
        }
        async toggleInstructionFocus(e) {
          this.instructionElementRef.value &&
            (await this.instructionElementRef.value.animate(
              [{ opacity: +!e }, { opacity: +!!e }],
              { duration: 100, easing: "ease", fill: "forwards" }
            ).finished);
        }
        onBoxClick() {
          this.value || this.instructionHidden || this.focusInput();
        }
        onBlur() {
          this.value ||
            !this.instructionHidden ||
            this.pasting ||
            this.focusInstruction();
        }
        checkHidden() {
          this.instructionHidden && this.focusInput();
        }
        async onPasteClick() {
          this.pasting = !0;
          let e = await navigator.clipboard.readText();
          a.SendController.setReceiverAddress(e), this.focusInput();
        }
        onInputChange(e) {
          var n;
          let t = e.target;
          (this.pasting = !1),
            (this.value = null == (n = e.target) ? void 0 : n.value),
            t.value && !this.instructionHidden && this.focusInput(),
            a.SendController.setLoading(!0),
            this.onDebouncedSearch(t.value);
        }
        setReceiverAddress(e) {
          a.SendController.setReceiverAddress(e),
            a.SendController.setReceiverProfileName(void 0),
            a.SendController.setReceiverProfileImageUrl(void 0),
            a.SendController.setLoading(!1);
        }
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, p.createRef)()),
            (this.instructionElementRef = (0, p.createRef)()),
            (this.instructionHidden = !!this.value),
            (this.pasting = !1),
            (this.onDebouncedSearch = l.CoreHelperUtil.debounce(async (e) => {
              if (!e.length) return void this.setReceiverAddress("");
              let n = o.ChainController.state.activeChain;
              if (l.CoreHelperUtil.isAddress(e, n))
                return void this.setReceiverAddress(e);
              try {
                let n = await f.ConnectionController.getEnsAddress(e);
                if (n) {
                  a.SendController.setReceiverProfileName(e),
                    a.SendController.setReceiverAddress(n);
                  let t = await f.ConnectionController.getEnsAvatar(e);
                  a.SendController.setReceiverProfileImageUrl(t || void 0);
                }
              } catch (n) {
                this.setReceiverAddress(e);
              } finally {
                a.SendController.setLoading(!1);
              }
            }));
        }
      };
      (k.styles = v),
        x([(0, h.property)()], k.prototype, "value", void 0),
        x([(0, r.state)()], k.prototype, "instructionHidden", void 0),
        x([(0, r.state)()], k.prototype, "pasting", void 0),
        (k = x([(0, c.customElement)("w3m-input-address")], k));
      var b = t,
        y = e.i(214696),
        C = e.i(111607),
        S = t,
        T = e.i(547170),
        A = e.i(361156);
      function R() {
        let e = (0, n._)([
          "\n  :host {\n    position: relative;\n    display: inline-block;\n  }\n\n  input {\n    background: transparent;\n    width: 100%;\n    height: auto;\n    font-family: var(--wui-font-family);\n    color: var(--wui-color-fg-100);\n\n    font-feature-settings: 'case' on;\n    font-size: 32px;\n    font-weight: var(--wui-font-weight-light);\n    caret-color: var(--wui-color-accent-100);\n    line-height: 130%;\n    letter-spacing: -1.28px;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: textfield;\n    padding: 0px;\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input::placeholder {\n    color: var(--wui-color-fg-275);\n  }\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      let E = (0, w.css)(R());
      function P() {
        let e = (0, n._)([
          "<input\n      ",
          '\n      type="text"\n      inputmode="decimal"\n      pattern="[0-9,.]*"\n      placeholder=',
          "\n      ?disabled=",
          "\n      autofocus\n      value=",
          "\n      @input=",
          "\n    /> ",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      var N = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let I = class extends S.LitElement {
        render() {
          var e, n;
          return (
            (null == (e = this.inputElementRef) ? void 0 : e.value) &&
              this.value &&
              (this.inputElementRef.value.value = this.value),
            (0, i.html)(
              P(),
              (0, p.ref)(this.inputElementRef),
              this.placeholder,
              this.disabled,
              null != (n = this.value) ? n : "",
              this.dispatchInputChangeEvent.bind(this)
            )
          );
        }
        dispatchInputChangeEvent(e) {
          var n, t;
          let i = e.data;
          if (i && (null == (n = this.inputElementRef) ? void 0 : n.value))
            if ("," === i) {
              let e = this.inputElementRef.value.value.replace(",", ".");
              (this.inputElementRef.value.value = e),
                (this.value = "".concat(this.value).concat(e));
            } else
              T.numbersRegex.test(i) ||
                (this.inputElementRef.value.value = this.value.replace(
                  RegExp(i.replace(T.specialCharactersRegex, "\\$&"), "gu"),
                  ""
                ));
          this.dispatchEvent(
            new CustomEvent("inputChange", {
              detail:
                null == (t = this.inputElementRef.value) ? void 0 : t.value,
              bubbles: !0,
              composed: !0,
            })
          );
        }
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, p.createRef)()),
            (this.disabled = !1),
            (this.value = ""),
            (this.placeholder = "0");
        }
      };
      function j() {
        let e = (0, n._)([
          "\n  :host {\n    width: 100%;\n    height: 100px;\n    border-radius: var(--wui-border-radius-s);\n    border: 1px solid var(--wui-color-gray-glass-002);\n    background-color: var(--wui-color-gray-glass-002);\n    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);\n    will-change: background-color;\n  }\n\n  :host(:hover) {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  wui-flex {\n    width: 100%;\n    height: fit-content;\n  }\n\n  wui-button {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  wui-input-amount {\n    mask-image: linear-gradient(\n      270deg,\n      transparent 0px,\n      transparent 8px,\n      black 24px,\n      black 25px,\n      black 32px,\n      black 100%\n    );\n  }\n\n  .totalValue {\n    width: 100%;\n  }\n",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      (I.styles = [A.resetStyles, A.elementStyles, E]),
        N(
          [(0, h.property)({ type: Boolean })],
          I.prototype,
          "disabled",
          void 0
        ),
        N([(0, h.property)({ type: String })], I.prototype, "value", void 0),
        N(
          [(0, h.property)({ type: String })],
          I.prototype,
          "placeholder",
          void 0
        ),
        (I = N([(0, c.customElement)("wui-input-amount")], I)),
        e.i(985606),
        e.i(951020);
      let _ = (0, w.css)(j());
      function B() {
        let e = (0, n._)([
          ' <wui-flex\n      flexDirection="column"\n      gap="4xs"\n      .padding=',
          '\n    >\n      <wui-flex alignItems="center">\n        <wui-input-amount\n          @inputChange=',
          "\n          ?disabled=",
          "\n          .value=",
          "\n        ></wui-input-amount>\n        ",
          '\n      </wui-flex>\n      <wui-flex alignItems="center" justifyContent="space-between">\n        ',
          '\n        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">\n          ',
          " ",
          "\n        </wui-flex>\n      </wui-flex>\n    </wui-flex>",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function U() {
        let e = (0, n._)([
          "<wui-token-button\n        text=",
          "\n        imageSrc=",
          "\n        @click=",
          "\n      >\n      </wui-token-button>",
        ]);
        return (
          (U = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        let e = (0, n._)([
          '<wui-button\n      size="md"\n      variant="accent"\n      @click=',
          "\n      >Select token</wui-button\n    >",
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        let e = (0, n._)([
          '<wui-text class="totalValue" variant="small-400" color="fg-200"\n        >',
          "</wui-text\n      >",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        let e = (0, n._)([
          ' <wui-text variant="small-400" color="error-100">\n          ',
          "\n        </wui-text>",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function H() {
        let e = (0, n._)([
          ' <wui-text variant="small-400" color="fg-200">\n        ',
          "\n      </wui-text>",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        let e = (0, n._)(["<wui-link @click=", ">Buy</wui-link>"]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      function W() {
        let e = (0, n._)(["<wui-link @click=", ">Max</wui-link>"]);
        return (
          (W = function () {
            return e;
          }),
          e
        );
      }
      var L = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let q = class extends b.LitElement {
        render() {
          return (0, i.html)(
            B(),
            ["xl", "s", "l", "l"],
            this.onInputChange.bind(this),
            !this.token,
            this.sendTokenAmount ? String(this.sendTokenAmount) : "",
            this.buttonTemplate(),
            this.sendValueTemplate(),
            this.maxAmountTemplate(),
            this.actionTemplate()
          );
        }
        buttonTemplate() {
          return this.token
            ? (0, i.html)(
                U(),
                this.token.symbol,
                this.token.iconUrl,
                this.handleSelectButtonClick.bind(this)
              )
            : (0, i.html)(O(), this.handleSelectButtonClick.bind(this));
        }
        handleSelectButtonClick() {
          s.RouterController.push("WalletSendSelectToken");
        }
        sendValueTemplate() {
          if (this.token && this.sendTokenAmount) {
            let e = this.token.price * this.sendTokenAmount;
            return (0, i.html)(
              D(),
              e
                ? "$".concat(C.UiHelperUtil.formatNumberToLocalString(e, 2))
                : "Incorrect value"
            );
          }
          return null;
        }
        maxAmountTemplate() {
          return this.token
            ? this.sendTokenAmount &&
              this.sendTokenAmount > Number(this.token.quantity.numeric)
              ? (0, i.html)(
                  z(),
                  C.UiHelperUtil.roundNumber(
                    Number(this.token.quantity.numeric),
                    6,
                    5
                  )
                )
              : (0, i.html)(
                  H(),
                  C.UiHelperUtil.roundNumber(
                    Number(this.token.quantity.numeric),
                    6,
                    5
                  )
                )
            : null;
        }
        actionTemplate() {
          return this.token
            ? this.sendTokenAmount &&
              this.sendTokenAmount > Number(this.token.quantity.numeric)
              ? (0, i.html)(V(), this.onBuyClick.bind(this))
              : (0, i.html)(W(), this.onMaxClick.bind(this))
            : null;
        }
        onInputChange(e) {
          a.SendController.setTokenAmount(e.detail);
        }
        onMaxClick() {
          if (this.token) {
            let e = y.NumberUtil.bigNumber(this.token.quantity.numeric);
            a.SendController.setTokenAmount(Number(e.toFixed(20)));
          }
        }
        onBuyClick() {
          s.RouterController.push("OnRampProviders");
        }
      };
      function F() {
        let e = (0, n._)([
          "\n  :host {\n    display: block;\n  }\n\n  wui-flex {\n    position: relative;\n  }\n\n  wui-icon-box {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--wui-border-radius-xs) !important;\n    border: 5px solid var(--wui-color-bg-125);\n    background: var(--wui-color-bg-175);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n  }\n\n  wui-button {\n    --local-border-radius: var(--wui-border-radius-xs) !important;\n  }\n\n  .inputContainer {\n    height: fit-content;\n  }\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      (q.styles = _),
        L([(0, h.property)({ type: Object })], q.prototype, "token", void 0),
        L(
          [(0, h.property)({ type: Number })],
          q.prototype,
          "sendTokenAmount",
          void 0
        ),
        (q = L([(0, c.customElement)("w3m-input-token")], q));
      let M = (0, w.css)(F());
      function Y() {
        let e = (0, n._)([
          ' <wui-flex flexDirection="column" .padding=',
          '>\n      <wui-flex class="inputContainer" gap="xs" flexDirection="column">\n        <w3m-input-token\n          .token=',
          "\n          .sendTokenAmount=",
          '\n        ></w3m-input-token>\n        <wui-icon-box\n          size="inherit"\n          backgroundColor="fg-300"\n          iconSize="lg"\n          iconColor="fg-250"\n          background="opaque"\n          icon="arrowBottom"\n        ></wui-icon-box>\n        <w3m-input-address\n          .value=',
          "\n        ></w3m-input-address>\n      </wui-flex>\n      <wui-flex .margin=",
          ">\n        <wui-button\n          @click=",
          "\n          ?disabled=",
          '\n          size="lg"\n          variant="main"\n          ?loading=',
          "\n          fullWidth\n        >\n          ",
          "\n        </wui-button>\n      </wui-flex>\n    </wui-flex>",
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      var K = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let $ = class extends t.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (
            this.getMessage(),
            (0, i.html)(
              Y(),
              ["0", "l", "l", "l"],
              this.token,
              this.sendTokenAmount,
              this.receiverProfileName
                ? this.receiverProfileName
                : this.receiverAddress,
              ["l", "0", "0", "0"],
              this.onButtonClick.bind(this),
              !this.message.startsWith("Preview Send"),
              this.loading,
              this.message
            )
          );
        }
        async fetchBalances() {
          await a.SendController.fetchTokenBalance(),
            a.SendController.fetchNetworkBalance();
        }
        async fetchNetworkPrice() {
          await u.SwapController.getNetworkTokenPrice();
        }
        onButtonClick() {
          s.RouterController.push("WalletSendPreview");
        }
        getMessage() {
          var e;
          (this.message = "Preview Send"),
            this.receiverAddress &&
              !l.CoreHelperUtil.isAddress(
                this.receiverAddress,
                o.ChainController.state.activeChain
              ) &&
              (this.message = "Invalid Address"),
            this.receiverAddress || (this.message = "Add Address"),
            this.sendTokenAmount &&
              this.token &&
              this.sendTokenAmount > Number(this.token.quantity.numeric) &&
              (this.message = "Insufficient Funds"),
            this.sendTokenAmount || (this.message = "Add Amount"),
            this.sendTokenAmount &&
              (null == (e = this.token) ? void 0 : e.price) &&
              (this.sendTokenAmount * this.token.price ||
                (this.message = "Incorrect Value")),
            this.token || (this.message = "Select Token");
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.token = a.SendController.state.token),
            (this.sendTokenAmount = a.SendController.state.sendTokenAmount),
            (this.receiverAddress = a.SendController.state.receiverAddress),
            (this.receiverProfileName =
              a.SendController.state.receiverProfileName),
            (this.loading = a.SendController.state.loading),
            (this.message = "Preview Send"),
            this.fetchNetworkPrice(),
            this.fetchBalances(),
            this.unsubscribe.push(
              a.SendController.subscribe((e) => {
                (this.token = e.token),
                  (this.sendTokenAmount = e.sendTokenAmount),
                  (this.receiverAddress = e.receiverAddress),
                  (this.receiverProfileName = e.receiverProfileName),
                  (this.loading = e.loading);
              })
            );
        }
      };
      ($.styles = M),
        K([(0, r.state)()], $.prototype, "token", void 0),
        K([(0, r.state)()], $.prototype, "sendTokenAmount", void 0),
        K([(0, r.state)()], $.prototype, "receiverAddress", void 0),
        K([(0, r.state)()], $.prototype, "receiverProfileName", void 0),
        K([(0, r.state)()], $.prototype, "loading", void 0),
        K([(0, r.state)()], $.prototype, "message", void 0),
        ($ = K([(0, c.customElement)("w3m-wallet-send-view")], $)),
        e.s({ W3mSendSelectTokenView: () => er }, 60671);
      var G = t;
      function J() {
        let e = (0, n._)([
          "\n  .contentContainer {\n    height: 440px;\n    overflow: scroll;\n    scrollbar-width: none;\n  }\n\n  .contentContainer::-webkit-scrollbar {\n    display: none;\n  }\n\n  wui-icon-box {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--wui-border-radius-xxs);\n  }\n",
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      e.i(836884), e.i(194171), e.i(865048);
      let Q = (0, w.css)(J());
      function X() {
        let e = (0, n._)([
          '\n      <wui-flex flexDirection="column">\n        ',
          " <wui-separator></wui-separator> ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        let e = (0, n._)([
          '\n      <wui-flex gap="xs" padding="s">\n        <wui-input-text\n          @inputChange=',
          '\n          class="network-search-input"\n          size="sm"\n          placeholder="Search token"\n          icon="search"\n        ></wui-input-text>\n      </wui-flex>\n    ',
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        let e = (0, n._)([
          "<wui-list-token\n                    @click=",
          "\n                    ?clickable=",
          "\n                    tokenName=",
          "\n                    tokenImageUrl=",
          "\n                    tokenAmount=",
          "\n                    tokenValue=",
          "\n                    tokenCurrency=",
          "\n                  ></wui-list-token>",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      function en() {
        let e = (0, n._)([
          "<wui-flex\n                .padding=",
          '\n                alignItems="center"\n                flexDirection="column"\n                gap="l"\n              >\n                <wui-icon-box\n                  icon="coinPlaceholder"\n                  size="inherit"\n                  iconColor="fg-200"\n                  backgroundColor="fg-200"\n                  iconSize="lg"\n                ></wui-icon-box>\n                <wui-flex\n                  class="textContent"\n                  gap="xs"\n                  flexDirection="column"\n                  justifyContent="center"\n                  flexDirection="column"\n                >\n                  <wui-text variant="paragraph-500" align="center" color="fg-100"\n                    >No tokens found</wui-text\n                  >\n                  <wui-text variant="small-400" align="center" color="fg-200"\n                    >Your tokens will appear here</wui-text\n                  >\n                </wui-flex>\n                <wui-link @click=',
          ">Buy</wui-link>\n              </wui-flex>",
        ]);
        return (
          (en = function () {
            return e;
          }),
          e
        );
      }
      function et() {
        let e = (0, n._)([
          '\n      <wui-flex\n        class="contentContainer"\n        flexDirection="column"\n        .padding=',
          '\n      >\n        <wui-flex justifyContent="flex-start" .padding=',
          '>\n          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>\n        </wui-flex>\n        <wui-flex flexDirection="column" gap="xs">\n          ',
          "\n        </wui-flex>\n      </wui-flex>\n    ",
        ]);
        return (
          (et = function () {
            return e;
          }),
          e
        );
      }
      var ei = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let er = class extends G.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          return (0, i.html)(
            X(),
            this.templateSearchInput(),
            this.templateTokens()
          );
        }
        templateSearchInput() {
          return (0, i.html)(Z(), this.onInputChange.bind(this));
        }
        templateTokens() {
          var e, n;
          return (
            (this.tokens =
              null == (e = this.tokenBalances)
                ? void 0
                : e.filter((e) => {
                    var n;
                    return (
                      e.chainId ===
                      (null == (n = o.ChainController.state.activeCaipNetwork)
                        ? void 0
                        : n.caipNetworkId)
                    );
                  })),
            this.search
              ? (this.filteredTokens =
                  null == (n = this.tokenBalances)
                    ? void 0
                    : n.filter((e) =>
                        e.name.toLowerCase().includes(this.search.toLowerCase())
                      ))
              : (this.filteredTokens = this.tokens),
            (0, i.html)(
              et(),
              ["0", "s", "0", "s"],
              ["m", "s", "s", "s"],
              this.filteredTokens && this.filteredTokens.length > 0
                ? this.filteredTokens.map((e) =>
                    (0, i.html)(
                      ee(),
                      this.handleTokenClick.bind(this, e),
                      !0,
                      e.name,
                      e.iconUrl,
                      e.quantity.numeric,
                      e.value,
                      e.symbol
                    )
                  )
                : (0, i.html)(
                    en(),
                    ["4xl", "0", "0", "0"],
                    this.onBuyClick.bind(this)
                  )
            )
          );
        }
        onBuyClick() {
          s.RouterController.push("OnRampProviders");
        }
        onInputChange(e) {
          this.onDebouncedSearch(e.detail);
        }
        handleTokenClick(e) {
          a.SendController.setToken(e),
            a.SendController.setTokenAmount(void 0),
            s.RouterController.goBack();
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.tokenBalances = a.SendController.state.tokenBalances),
            (this.search = ""),
            (this.onDebouncedSearch = l.CoreHelperUtil.debounce((e) => {
              this.search = e;
            })),
            this.unsubscribe.push(
              a.SendController.subscribe((e) => {
                this.tokenBalances = e.tokenBalances;
              })
            );
        }
      };
      (er.styles = Q),
        ei([(0, r.state)()], er.prototype, "tokenBalances", void 0),
        ei([(0, r.state)()], er.prototype, "tokens", void 0),
        ei([(0, r.state)()], er.prototype, "filteredTokens", void 0),
        ei([(0, r.state)()], er.prototype, "search", void 0),
        (er = ei(
          [(0, c.customElement)("w3m-wallet-send-select-token-view")],
          er
        )),
        e.s({ W3mWalletSendPreviewView: () => eL }, 600037);
      var eo = t,
        el = e.i(755111),
        es = e.i(174797),
        ea = e.i(77217),
        eu = t;
      function ec() {
        let e = (0, n._)([
          "\n  :host {\n    display: flex;\n    gap: var(--wui-spacing-xs);\n    border-radius: var(--wui-border-radius-3xl);\n    border: 1px solid var(--wui-color-gray-glass-002);\n    background: var(--wui-color-gray-glass-002);\n    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)\n      var(--wui-spacing-s);\n    align-items: center;\n  }\n\n  wui-avatar,\n  wui-icon,\n  wui-image {\n    width: 32px;\n    height: 32px;\n    border: 1px solid var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-3xl);\n    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);\n  }\n",
        ]);
        return (
          (ec = function () {
            return e;
          }),
          e
        );
      }
      e.i(227626), e.i(715030), e.i(160541), e.i(885464), e.i(738045);
      let ed = (0, w.css)(ec());
      function eh() {
        let e = (0, n._)([
          '<wui-text variant="large-500" color="fg-100">',
          "</wui-text>\n      ",
          "",
        ]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      function ep() {
        let e = (0, n._)([
          "<wui-avatar address=",
          " .imageSrc=",
          "></wui-avatar>",
        ]);
        return (
          (ep = function () {
            return e;
          }),
          e
        );
      }
      function ef() {
        let e = (0, n._)(["<wui-image src=", "></wui-image>"]);
        return (
          (ef = function () {
            return e;
          }),
          e
        );
      }
      function ew() {
        let e = (0, n._)([
          '<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>',
        ]);
        return (
          (ew = function () {
            return e;
          }),
          e
        );
      }
      var em = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let ev = class extends eu.LitElement {
        render() {
          return (0, i.html)(eh(), this.text, this.imageTemplate());
        }
        imageTemplate() {
          return this.isAddress
            ? (0, i.html)(ep(), this.address, this.imageSrc)
            : this.imageSrc
            ? (0, i.html)(ef(), this.imageSrc)
            : (0, i.html)(ew());
        }
        constructor() {
          super(...arguments),
            (this.text = ""),
            (this.address = ""),
            (this.isAddress = !1);
        }
      };
      (ev.styles = [A.resetStyles, A.elementStyles, ed]),
        em([(0, h.property)()], ev.prototype, "text", void 0),
        em([(0, h.property)()], ev.prototype, "address", void 0),
        em([(0, h.property)()], ev.prototype, "imageSrc", void 0),
        em(
          [(0, h.property)({ type: Boolean })],
          ev.prototype,
          "isAddress",
          void 0
        ),
        (ev = em([(0, c.customElement)("wui-preview-item")], ev));
      var eg = e.i(351667),
        ex = t;
      e.i(721721);
      var ek = e.i(965911),
        eb = e.i(596373),
        ey = t;
      function eC() {
        let e = (0, n._)([
          "\n  :host {\n    display: flex;\n    column-gap: var(--wui-spacing-s);\n    padding: 17px 18px 17px var(--wui-spacing-m);\n    width: 100%;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xs);\n    color: var(--wui-color-fg-250);\n  }\n\n  wui-image {\n    width: var(--wui-icon-size-lg);\n    height: var(--wui-icon-size-lg);\n    border-radius: var(--wui-border-radius-3xl);\n  }\n\n  wui-icon {\n    width: var(--wui-icon-size-lg);\n    height: var(--wui-icon-size-lg);\n  }\n",
        ]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      let eS = (0, w.css)(eC());
      function eT() {
        let e = (0, n._)([
          '\n      <wui-flex justifyContent="space-between" alignItems="center">\n        <wui-text variant="paragraph-500" color=',
          ">\n          ",
          "\n        </wui-text>\n        ",
          "\n      </wui-flex>\n    ",
        ]);
        return (
          (eT = function () {
            return e;
          }),
          e
        );
      }
      function eA() {
        let e = (0, n._)(["<wui-image src=", " alt=", "></wui-image>"]);
        return (
          (eA = function () {
            return e;
          }),
          e
        );
      }
      function eR() {
        let e = (0, n._)([
          ' <wui-text variant="paragraph-400" color="fg-100"> ',
          " </wui-text>",
        ]);
        return (
          (eR = function () {
            return e;
          }),
          e
        );
      }
      function eE() {
        let e = (0, n._)([
          '<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>',
        ]);
        return (
          (eE = function () {
            return e;
          }),
          e
        );
      }
      var eP = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let eN = class extends ey.LitElement {
        render() {
          return (0, i.html)(
            eT(),
            this.textValue ? "fg-200" : "fg-100",
            this.textTitle,
            this.templateContent()
          );
        }
        templateContent() {
          return this.imageSrc
            ? (0, i.html)(eA(), this.imageSrc, this.textTitle)
            : this.textValue
            ? (0, i.html)(eR(), this.textValue)
            : (0, i.html)(eE());
        }
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.textTitle = ""),
            (this.textValue = void 0);
        }
      };
      function eI() {
        let e = (0, n._)([
          "\n  :host {\n    display: flex;\n    width: auto;\n    flex-direction: column;\n    gap: var(--wui-border-radius-1xs);\n    border-radius: var(--wui-border-radius-s);\n    background: var(--wui-color-gray-glass-002);\n    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)\n      var(--wui-spacing-1xs);\n  }\n\n  wui-text {\n    padding: 0 var(--wui-spacing-1xs);\n  }\n\n  wui-flex {\n    margin-top: var(--wui-spacing-1xs);\n  }\n\n  .network {\n    cursor: pointer;\n    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);\n    will-change: background-color;\n  }\n\n  .network:focus-visible {\n    border: 1px solid var(--wui-color-accent-100);\n    background-color: var(--wui-color-gray-glass-005);\n    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);\n    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);\n    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);\n  }\n\n  .network:hover {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  .network:active {\n    background-color: var(--wui-color-gray-glass-010);\n  }\n",
        ]);
        return (
          (eI = function () {
            return e;
          }),
          e
        );
      }
      (eN.styles = [A.resetStyles, A.elementStyles, eS]),
        eP([(0, h.property)()], eN.prototype, "imageSrc", void 0),
        eP([(0, h.property)()], eN.prototype, "textTitle", void 0),
        eP([(0, h.property)()], eN.prototype, "textValue", void 0),
        (eN = eP([(0, c.customElement)("wui-list-content")], eN));
      let ej = (0, w.css)(eI());
      function e_() {
        let e = (0, n._)([
          ' <wui-text variant="small-400" color="fg-200">Details</wui-text>\n      <wui-flex flexDirection="column" gap="xxs">\n        <wui-list-content\n          textTitle="Address"\n          textValue=',
          "\n        >\n        </wui-list-content>\n        ",
          "\n      </wui-flex>",
        ]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      function eB() {
        let e = (0, n._)([
          " <wui-list-content\n        @click=",
          '\n        class="network"\n        textTitle="Network"\n        imageSrc=',
          "\n      ></wui-list-content>",
        ]);
        return (
          (eB = function () {
            return e;
          }),
          e
        );
      }
      var eU = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let eO = class extends ex.LitElement {
        render() {
          var e;
          return (0, i.html)(
            e_(),
            C.UiHelperUtil.getTruncateString({
              string: null != (e = this.receiverAddress) ? e : "",
              charsStart: 4,
              charsEnd: 4,
              truncate: "middle",
            }),
            this.networkTemplate()
          );
        }
        networkTemplate() {
          var e;
          return (null == (e = this.caipNetwork) ? void 0 : e.name)
            ? (0, i.html)(
                eB(),
                () => this.onNetworkClick(this.caipNetwork),
                (0, ek.ifDefined)(
                  eb.AssetUtil.getNetworkImage(this.caipNetwork)
                )
              )
            : null;
        }
        onNetworkClick(e) {
          e && s.RouterController.push("Networks", { network: e });
        }
      };
      function eD() {
        let e = (0, n._)([
          "\n  wui-avatar,\n  wui-image {\n    display: ruby;\n    width: 32px;\n    height: 32px;\n    border-radius: var(--wui-border-radius-3xl);\n  }\n\n  .sendButton {\n    width: 70%;\n    --local-width: 100% !important;\n    --local-border-radius: var(--wui-border-radius-xs) !important;\n  }\n\n  .cancelButton {\n    width: 30%;\n    --local-width: 100% !important;\n    --local-border-radius: var(--wui-border-radius-xs) !important;\n  }\n",
        ]);
        return (
          (eD = function () {
            return e;
          }),
          e
        );
      }
      (eO.styles = ej),
        eU([(0, h.property)()], eO.prototype, "receiverAddress", void 0),
        eU(
          [(0, h.property)({ type: Object })],
          eO.prototype,
          "caipNetwork",
          void 0
        ),
        (eO = eU([(0, c.customElement)("w3m-wallet-send-details")], eO));
      let ez = (0, w.css)(eD());
      function eH() {
        let e = (0, n._)([
          ' <wui-flex flexDirection="column" .padding=',
          '>\n      <wui-flex gap="xs" flexDirection="column" .padding=',
          '>\n        <wui-flex alignItems="center" justifyContent="space-between">\n          <wui-flex flexDirection="column" gap="4xs">\n            <wui-text variant="small-400" color="fg-150">Send</wui-text>\n            ',
          '\n          </wui-flex>\n          <wui-preview-item\n            text="',
          " ",
          '"\n            .imageSrc=',
          '\n          ></wui-preview-item>\n        </wui-flex>\n        <wui-flex>\n          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>\n        </wui-flex>\n        <wui-flex alignItems="center" justifyContent="space-between">\n          <wui-text variant="small-400" color="fg-150">To</wui-text>\n          <wui-preview-item\n            text="',
          '"\n            address=',
          "\n            .imageSrc=",
          "\n            .isAddress=",
          '\n          ></wui-preview-item>\n        </wui-flex>\n      </wui-flex>\n      <wui-flex flexDirection="column" .padding=',
          ">\n        <w3m-wallet-send-details\n          .caipNetwork=",
          "\n          .receiverAddress=",
          '\n        ></w3m-wallet-send-details>\n        <wui-flex justifyContent="center" gap="xxs" .padding=',
          '>\n          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>\n          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>\n        </wui-flex>\n        <wui-flex justifyContent="center" gap="s" .padding=',
          '>\n          <wui-button\n            class="cancelButton"\n            @click=',
          '\n            size="lg"\n            variant="neutral"\n          >\n            Cancel\n          </wui-button>\n          <wui-button\n            class="sendButton"\n            @click=',
          '\n            size="lg"\n            variant="main"\n            .loading=',
          "\n          >\n            Send\n          </wui-button>\n        </wui-flex>\n      </wui-flex></wui-flex\n    >",
        ]);
        return (
          (eH = function () {
            return e;
          }),
          e
        );
      }
      function eV() {
        let e = (0, n._)([
          '<wui-text variant="paragraph-400" color="fg-100"\n        >$',
          "</wui-text\n      >",
        ]);
        return (
          (eV = function () {
            return e;
          }),
          e
        );
      }
      var eW = function (e, n, t, i) {
        var r,
          o = arguments.length,
          l =
            o < 3
              ? n
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(n, t))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (r = e[s]) &&
              (l = (o < 3 ? r(l) : o > 3 ? r(n, t, l) : r(n, t)) || l);
        return o > 3 && l && Object.defineProperty(n, t, l), l;
      };
      let eL = class extends eo.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((e) => e());
        }
        render() {
          var e, n, t, r;
          return (0, i.html)(
            eH(),
            ["0", "l", "l", "l"],
            ["0", "xs", "0", "xs"],
            this.sendValueTemplate(),
            this.sendTokenAmount
              ? C.UiHelperUtil.roundNumber(this.sendTokenAmount, 6, 5)
              : "unknown",
            null == (e = this.token) ? void 0 : e.symbol,
            null == (n = this.token) ? void 0 : n.iconUrl,
            this.receiverProfileName
              ? C.UiHelperUtil.getTruncateString({
                  string: this.receiverProfileName,
                  charsStart: 20,
                  charsEnd: 0,
                  truncate: "end",
                })
              : C.UiHelperUtil.getTruncateString({
                  string: this.receiverAddress ? this.receiverAddress : "",
                  charsStart: 4,
                  charsEnd: 4,
                  truncate: "middle",
                }),
            null != (t = this.receiverAddress) ? t : "",
            null != (r = this.receiverProfileImageUrl) ? r : void 0,
            !0,
            ["xxl", "0", "0", "0"],
            this.caipNetwork,
            this.receiverAddress,
            ["s", "0", "0", "0"],
            ["l", "0", "0", "0"],
            this.onCancelClick.bind(this),
            this.onSendClick.bind(this),
            this.loading
          );
        }
        sendValueTemplate() {
          if (this.token && this.sendTokenAmount) {
            let e = this.token.price * this.sendTokenAmount;
            return (0, i.html)(eV(), e.toFixed(2));
          }
          return null;
        }
        async onSendClick() {
          if (!this.sendTokenAmount || !this.receiverAddress)
            return void es.SnackController.showError(
              "Please enter a valid amount and receiver address"
            );
          try {
            await a.SendController.sendToken(),
              es.SnackController.showSuccess("Transaction started"),
              s.RouterController.replace("Account");
          } catch (i) {
            var e, n;
            es.SnackController.showError(
              "Failed to send transaction. Please try again."
            ),
              console.error(
                "SendController:sendToken - failed to send transaction",
                i
              );
            let t = i instanceof Error ? i.message : "Unknown error";
            el.EventsController.sendEvent({
              type: "track",
              event: "SEND_ERROR",
              properties: {
                message: t,
                isSmartAccount:
                  (0, ea.getPreferredAccountType)(
                    o.ChainController.state.activeChain
                  ) === eg.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                token: (null == (e = this.token) ? void 0 : e.symbol) || "",
                amount: this.sendTokenAmount,
                network:
                  (null == (n = o.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : n.caipNetworkId) || "",
              },
            });
          }
        }
        onCancelClick() {
          s.RouterController.goBack();
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.token = a.SendController.state.token),
            (this.sendTokenAmount = a.SendController.state.sendTokenAmount),
            (this.receiverAddress = a.SendController.state.receiverAddress),
            (this.receiverProfileName =
              a.SendController.state.receiverProfileName),
            (this.receiverProfileImageUrl =
              a.SendController.state.receiverProfileImageUrl),
            (this.caipNetwork = o.ChainController.state.activeCaipNetwork),
            (this.loading = a.SendController.state.loading),
            this.unsubscribe.push(
              a.SendController.subscribe((e) => {
                (this.token = e.token),
                  (this.sendTokenAmount = e.sendTokenAmount),
                  (this.receiverAddress = e.receiverAddress),
                  (this.receiverProfileName = e.receiverProfileName),
                  (this.receiverProfileImageUrl = e.receiverProfileImageUrl),
                  (this.loading = e.loading);
              }),
              o.ChainController.subscribeKey(
                "activeCaipNetwork",
                (e) => (this.caipNetwork = e)
              )
            );
        }
      };
      (eL.styles = ez),
        eW([(0, r.state)()], eL.prototype, "token", void 0),
        eW([(0, r.state)()], eL.prototype, "sendTokenAmount", void 0),
        eW([(0, r.state)()], eL.prototype, "receiverAddress", void 0),
        eW([(0, r.state)()], eL.prototype, "receiverProfileName", void 0),
        eW([(0, r.state)()], eL.prototype, "receiverProfileImageUrl", void 0),
        eW([(0, r.state)()], eL.prototype, "caipNetwork", void 0),
        eW([(0, r.state)()], eL.prototype, "loading", void 0),
        (eL = eW([(0, c.customElement)("w3m-wallet-send-preview-view")], eL)),
        e.s({}, 366537),
        e.s(
          {
            W3mSendSelectTokenView: () => er,
            W3mWalletSendPreviewView: () => eL,
            W3mWalletSendView: () => $,
          },
          733009
        ),
        e.i(587003),
        e.i(60671),
        e.i(600037),
        e.i(366537),
        e.i(733009);
    },
  },
]);

//# sourceMappingURL=d1330d6a5f4add1c.js.map
