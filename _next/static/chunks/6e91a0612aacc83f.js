(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    840527: (e) => {
      "use strict";
      e.s({ OnRampController: () => C });
      var t = e.i(861600),
        r = e.i(24732),
        n = e.i(605726),
        a = e.i(76107),
        o = e.i(778221),
        i = e.i(69393),
        s = e.i(394589),
        l = e.i(631867),
        c = e.i(737460);
      let u = {
          id: "2b92315d-eab7-5bef-84fa-089a131333f5",
          name: "USD Coin",
          symbol: "USDC",
          networks: [
            {
              name: "ethereum-mainnet",
              display_name: "Ethereum",
              chain_id: "1",
              contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            },
            {
              name: "polygon-mainnet",
              display_name: "Polygon",
              chain_id: "137",
              contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            },
          ],
        },
        d = {
          id: "USD",
          payment_method_limits: [
            { id: "card", min: "10.00", max: "7500.00" },
            { id: "ach_bank_account", min: "10.00", max: "25000.00" },
          ],
        },
        f = {
          providers: a.ONRAMP_PROVIDERS,
          selectedProvider: null,
          error: null,
          purchaseCurrency: u,
          paymentCurrency: d,
          purchaseCurrencies: [u],
          paymentCurrencies: [],
          quotesLoading: !1,
        },
        p = (0, t.proxy)(f),
        C = (0, o.withErrorBoundary)({
          state: p,
          subscribe: (e) => (0, t.subscribe)(p, () => e(p)),
          subscribeKey: (e, t) => (0, r.subscribeKey)(p, e, t),
          setSelectedProvider(e) {
            if (e && "meld" === e.name) {
              var t;
              let r = l.ChainController.state.activeChain,
                o = r === n.ConstantsUtil.CHAIN.SOLANA ? "SOL" : "USDC",
                i =
                  null != (t = l.ChainController.getAccountProp("address", r))
                    ? t
                    : "",
                s = new URL(e.url);
              s.searchParams.append("publicKey", a.MELD_PUBLIC_KEY),
                s.searchParams.append("destinationCurrencyCode", o),
                s.searchParams.append("walletAddress", i),
                s.searchParams.append(
                  "externalCustomerId",
                  c.OptionsController.state.projectId
                ),
                (p.selectedProvider = { ...e, url: s.toString() });
            } else p.selectedProvider = e;
          },
          setOnrampProviders(e) {
            Array.isArray(e) && e.every((e) => "string" == typeof e)
              ? (p.providers = a.ONRAMP_PROVIDERS.filter((t) =>
                  e.includes(t.name)
                ))
              : (p.providers = []);
          },
          setPurchaseCurrency(e) {
            p.purchaseCurrency = e;
          },
          setPaymentCurrency(e) {
            p.paymentCurrency = e;
          },
          setPurchaseAmount(e) {
            C.state.purchaseAmount = e;
          },
          setPaymentAmount(e) {
            C.state.paymentAmount = e;
          },
          async getAvailableCurrencies() {
            let e = await s.BlockchainApiController.getOnrampOptions();
            (p.purchaseCurrencies = e.purchaseCurrencies),
              (p.paymentCurrencies = e.paymentCurrencies),
              (p.paymentCurrency = e.paymentCurrencies[0] || d),
              (p.purchaseCurrency = e.purchaseCurrencies[0] || u),
              await i.ApiController.fetchCurrencyImages(
                e.paymentCurrencies.map((e) => e.id)
              ),
              await i.ApiController.fetchTokenImages(
                e.purchaseCurrencies.map((e) => e.symbol)
              );
          },
          async getQuote() {
            p.quotesLoading = !0;
            try {
              var e, t;
              let r = await s.BlockchainApiController.getOnrampQuote({
                purchaseCurrency: p.purchaseCurrency,
                paymentCurrency: p.paymentCurrency,
                amount:
                  (null == (e = p.paymentAmount) ? void 0 : e.toString()) ||
                  "0",
                network: null == (t = p.purchaseCurrency) ? void 0 : t.symbol,
              });
              return (
                (p.quotesLoading = !1),
                (p.purchaseAmount = Number(
                  null == r ? void 0 : r.purchaseAmount.amount
                )),
                r
              );
            } catch (e) {
              return (p.error = e.message), (p.quotesLoading = !1), null;
            } finally {
              p.quotesLoading = !1;
            }
          },
          resetState() {
            (p.selectedProvider = null),
              (p.error = null),
              (p.purchaseCurrency = u),
              (p.paymentCurrency = d),
              (p.purchaseCurrencies = [u]),
              (p.paymentCurrencies = []),
              (p.paymentAmount = void 0),
              (p.purchaseAmount = void 0),
              (p.quotesLoading = !1);
          },
        });
    },
    718818: (e) => {
      "use strict";
      e.s({ GenIcon: () => l }, 718818);
      var t = e.i(756253),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = t.default.createContext && t.default.createContext(r),
        a = ["attr", "size", "title"];
      function o() {
        return (o = Object.assign.bind()).apply(this, arguments);
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                var n, a, o;
                (n = e),
                  (a = t),
                  (o = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function l(e) {
        return (r) =>
          t.default.createElement(
            c,
            o({ attr: s({}, e.attr) }, r),
            (function e(r) {
              return (
                r &&
                r.map((r, n) =>
                  t.default.createElement(
                    r.tag,
                    s({ key: n }, r.attr),
                    e(r.child)
                  )
                )
              );
            })(e.child)
          );
      }
      function c(e) {
        var i = (r) => {
          var n,
            { attr: i, size: l, title: c } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                a = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (a[r] = e[r]);
              }
              return a;
            })(e, a),
            d = l || r.size || "1em";
          return (
            r.className && (n = r.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            t.default.createElement(
              "svg",
              o(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                i,
                u,
                {
                  className: n,
                  style: s(s({ color: e.color || r.color }, r.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && t.default.createElement("title", null, c),
              e.children
            )
          );
        };
        return void 0 !== n
          ? t.default.createElement(n.Consumer, null, (e) => i(e))
          : i(r);
      }
    },
    686753: (e) => {
      "use strict";
      e.s({ EnsController: () => p }, 686753);
      var t = e.i(861600),
        r = e.i(24732);
      let n = {
        convertEVMChainIdToCoinType(e) {
          if (e >= 0x80000000) throw Error("Invalid chainId");
          return (0x80000000 | e) >>> 0;
        },
      };
      var a = e.i(527410),
        o = e.i(778221),
        i = e.i(705258),
        s = e.i(394589),
        l = e.i(631867),
        c = e.i(875073),
        u = e.i(225335),
        d = e.i(157653);
      let f = (0, t.proxy)({ suggestions: [], loading: !1 }),
        p = (0, o.withErrorBoundary)({
          state: f,
          subscribe: (e) => (0, t.subscribe)(f, () => e(f)),
          subscribeKey: (e, t) => (0, r.subscribeKey)(f, e, t),
          async resolveName(e) {
            try {
              return await s.BlockchainApiController.lookupEnsName(e);
            } catch (e) {
              var t, r;
              throw Error(
                (null == e || null == (r = e.reasons) || null == (t = r[0])
                  ? void 0
                  : t.description) || "Error resolving name"
              );
            }
          },
          async isNameRegistered(e) {
            try {
              return await s.BlockchainApiController.lookupEnsName(e), !0;
            } catch (e) {
              return !1;
            }
          },
          async getSuggestions(e) {
            try {
              return (
                (f.loading = !0),
                (f.suggestions = []),
                (f.suggestions =
                  (
                    await s.BlockchainApiController.getEnsNameSuggestions(e)
                  ).suggestions.map((e) => ({ ...e, name: e.name })) || []),
                f.suggestions
              );
            } catch (e) {
              throw Error(
                p.parseEnsApiError(e, "Error fetching name suggestions")
              );
            } finally {
              f.loading = !1;
            }
          },
          async getNamesForAddress(e) {
            try {
              if (!l.ChainController.state.activeCaipNetwork) return [];
              let t = a.StorageUtil.getEnsFromCacheForAddress(e);
              if (t) return t;
              let r = await s.BlockchainApiController.reverseLookupEnsName({
                address: e,
              });
              return (
                a.StorageUtil.updateEnsCache({
                  address: e,
                  ens: r,
                  timestamp: Date.now(),
                }),
                r
              );
            } catch (e) {
              throw Error(
                p.parseEnsApiError(e, "Error fetching names for address")
              );
            }
          },
          async registerName(e) {
            let t = l.ChainController.state.activeCaipNetwork,
              r = i.AccountController.state.address,
              a = u.ConnectorController.getAuthConnector();
            if (!t) throw Error("Network not found");
            if (!r || !a) throw Error("Address or auth connector not found");
            f.loading = !0;
            try {
              let a = JSON.stringify({
                name: e,
                attributes: {},
                timestamp: Math.floor(Date.now() / 1e3),
              });
              d.RouterController.pushTransactionStack({
                onCancel() {
                  d.RouterController.replace("RegisterAccountName");
                },
              });
              let o = await c.ConnectionController.signMessage(a);
              f.loading = !1;
              let l = t.id;
              if (!l) throw Error("Network not found");
              let u = n.convertEVMChainIdToCoinType(Number(l));
              await s.BlockchainApiController.registerEnsName({
                coinType: u,
                address: r,
                signature: o,
                message: a,
              }),
                i.AccountController.setProfileName(e, t.chainNamespace),
                d.RouterController.replace("RegisterAccountNameSuccess");
            } catch (r) {
              let t = p.parseEnsApiError(
                r,
                "Error registering name ".concat(e)
              );
              throw (
                (d.RouterController.replace("RegisterAccountName"), Error(t))
              );
            } finally {
              f.loading = !1;
            }
          },
          validateName: (e) => /^[a-zA-Z0-9-]{4,}$/u.test(e),
          parseEnsApiError(e, t) {
            var r, n;
            return (
              (null == e || null == (n = e.reasons) || null == (r = n[0])
                ? void 0
                : r.description) || t
            );
          },
        });
    },
    808691: (e) => {
      "use strict";
      e.s({
        __addDisposableResource: () => S,
        __assign: () => n,
        __asyncDelegator: () => g,
        __asyncGenerator: () => _,
        __asyncValues: () => v,
        __await: () => O,
        __awaiter: () => f,
        __classPrivateFieldGet: () => P,
        __classPrivateFieldIn: () => D,
        __classPrivateFieldSet: () => U,
        __createBinding: () => C,
        __decorate: () => o,
        __disposeResources: () => k,
        __esDecorate: () => s,
        __exportStar: () => E,
        __extends: () => r,
        __generator: () => p,
        __importDefault: () => R,
        __importStar: () => I,
        __makeTemplateObject: () => T,
        __metadata: () => d,
        __param: () => i,
        __propKey: () => c,
        __read: () => m,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => j,
        __runInitializers: () => l,
        __setFunctionName: () => u,
        __spread: () => h,
        __spreadArray: () => N,
        __spreadArrays: () => y,
        __values: () => b,
        default: () => L,
      });
      var t = function (e, r) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, r);
      };
      function r(e, r) {
        if ("function" != typeof r && null !== r)
          throw TypeError(
            "Class extends value " + String(r) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        t(e, r),
          (e.prototype =
            null === r
              ? Object.create(r)
              : ((n.prototype = r.prototype), new n()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var a in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, n = Object.getOwnPropertySymbols(e);
            a < n.length;
            a++
          )
            0 > t.indexOf(n[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
              (r[n[a]] = e[n[a]]);
        return r;
      }
      function o(e, t, r, n) {
        var a,
          o = arguments.length,
          i =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (a = e[s]) &&
              (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
        return o > 3 && i && Object.defineProperty(t, r, i), i;
      }
      function i(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function s(e, t, r, n, a, o) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            l = n.kind,
            c = "getter" === l ? "get" : "setter" === l ? "set" : "value",
            u = !t && e ? (n.static ? e : e.prototype) : null,
            d = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
            f = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var C = {};
          for (var E in n) C[E] = "access" === E ? {} : n[E];
          for (var E in n.access) C.access[E] = n.access[E];
          C.addInitializer = function (e) {
            if (f)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(i(e || null));
          };
          var b = (0, r[p])(
            "accessor" === l ? { get: d.get, set: d.set } : d[c],
            C
          );
          if ("accessor" === l) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b)
              throw TypeError("Object expected");
            (s = i(b.get)) && (d.get = s),
              (s = i(b.set)) && (d.set = s),
              (s = i(b.init)) && a.unshift(s);
          } else (s = i(b)) && ("field" === l ? a.unshift(s) : (d[c] = s));
        }
        u && Object.defineProperty(u, n.name, d), (f = !0);
      }
      function l(e, t, r) {
        for (var n = arguments.length > 2, a = 0; a < t.length; a++)
          r = n ? t[a].call(e, r) : t[a].call(e);
        return n ? r : void 0;
      }
      function c(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function u(e, t, r) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function f(e, t, r, n) {
        return new (r || (r = Promise))(function (a, o) {
          function i(e) {
            try {
              l(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(i, s);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function p(e, t) {
        var r,
          n,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          i = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (i.next = s(0)),
          (i.throw = s(1)),
          (i.return = s(2)),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(s) {
          return function (l) {
            var c = [s, l];
            if (r) throw TypeError("Generator is already executing.");
            for (; i && ((i = 0), c[0] && (o = 0)), o; )
              try {
                if (
                  ((r = 1),
                  n &&
                    (a =
                      2 & c[0]
                        ? n.return
                        : c[0]
                        ? n.throw || ((a = n.return) && a.call(n), 0)
                        : n.next) &&
                    !(a = a.call(n, c[1])).done)
                )
                  return a;
                switch (((n = 0), a && (c = [2 & c[0], a.value]), c[0])) {
                  case 0:
                  case 1:
                    a = c;
                    break;
                  case 4:
                    return o.label++, { value: c[1], done: !1 };
                  case 5:
                    o.label++, (n = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                      (6 === c[0] || 2 === c[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === c[0] && (!a || (c[1] > a[0] && c[1] < a[3]))) {
                      o.label = c[1];
                      break;
                    }
                    if (6 === c[0] && o.label < a[1]) {
                      (o.label = a[1]), (a = c);
                      break;
                    }
                    if (a && o.label < a[2]) {
                      (o.label = a[2]), o.ops.push(c);
                      break;
                    }
                    a[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                c = t.call(e, o);
              } catch (e) {
                (c = [6, e]), (n = 0);
              } finally {
                r = a = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      var C = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var a = Object.getOwnPropertyDescriptor(t, r);
            (!a ||
              ("get" in a ? !t.__esModule : a.writable || a.configurable)) &&
              (a = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, a);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function E(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            C(t, e, r);
      }
      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function m(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          a,
          o = r.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            i.push(n.value);
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      }
      function h() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(m(arguments[t]));
        return e;
      }
      function y() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), a = 0, t = 0; t < r; t++)
          for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++)
            n[a] = o[i];
        return n;
      }
      function N(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, a = 0, o = t.length; a < o; a++)
            (!n && a in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, a)), (n[a] = t[a]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function O(e) {
        return this instanceof O ? ((this.v = e), this) : new O(e);
      }
      function _(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          a = r.apply(e, t || []),
          o = [];
        return (
          (n = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          i("next"),
          i("throw"),
          i("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, c);
            };
          }),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function i(e, t) {
          a[e] &&
            ((n[e] = function (t) {
              return new Promise(function (r, n) {
                o.push([e, t, r, n]) > 1 || s(e, t);
              });
            }),
            t && (n[e] = t(n[e])));
        }
        function s(e, t) {
          try {
            var r;
            (r = a[e](t)).value instanceof O
              ? Promise.resolve(r.value.v).then(l, c)
              : u(o[0][2], r);
          } catch (e) {
            u(o[0][3], e);
          }
        }
        function l(e) {
          s("next", e);
        }
        function c(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function g(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, a) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: O(e[n](t)), done: !1 }
                  : a
                  ? a(t)
                  : t;
              }
            : a;
        }
      }
      function v(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = b(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, a) {
                var o, i, s;
                (o = n),
                  (i = a),
                  (s = (t = e[r](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    o({ value: e, done: s });
                  }, i);
              });
            };
        }
      }
      function T(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var w = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        A = function (e) {
          return (A =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
              return t;
            })(e);
        };
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = A(e), n = 0; n < r.length; n++)
            "default" !== r[n] && C(t, e, r[n]);
        return w(t, e), t;
      }
      function R(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function P(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function U(e, t, r, n, a) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !a)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? a.call(e, r) : a ? (a.value = r) : t.set(e, r), r;
      }
      function D(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function S(e, t, r) {
        if (null != t) {
          var n, a;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (a = n);
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          a &&
            (n = function () {
              try {
                a.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var M =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function k(e) {
        function t(t) {
          (e.error = e.hasError
            ? new M(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var r,
          n = 0;
        return (function a() {
          for (; (r = e.stack.pop()); )
            try {
              if (!r.async && 1 === n)
                return (n = 0), e.stack.push(r), Promise.resolve().then(a);
              if (r.dispose) {
                var o = r.dispose.call(r.value);
                if (r.async)
                  return (
                    (n |= 2),
                    Promise.resolve(o).then(a, function (e) {
                      return t(e), a();
                    })
                  );
              } else n |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === n)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function j(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, r, n, a, o) {
                return r
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !n || (a && o)
                  ? n + a + "." + o.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let L = {
        __extends: r,
        __assign: n,
        __rest: a,
        __decorate: o,
        __param: i,
        __esDecorate: s,
        __runInitializers: l,
        __propKey: c,
        __setFunctionName: u,
        __metadata: d,
        __awaiter: f,
        __generator: p,
        __createBinding: C,
        __exportStar: E,
        __values: b,
        __read: m,
        __spread: h,
        __spreadArrays: y,
        __spreadArray: N,
        __await: O,
        __asyncGenerator: _,
        __asyncDelegator: g,
        __asyncValues: v,
        __makeTemplateObject: T,
        __importStar: I,
        __importDefault: R,
        __classPrivateFieldGet: P,
        __classPrivateFieldSet: U,
        __classPrivateFieldIn: D,
        __addDisposableResource: S,
        __disposeResources: k,
        __rewriteRelativeImportExtension: j,
      };
    },
    254656: (e) => {
      "use strict";
      e.s({ fallback: () => o, shouldThrow: () => i });
      var t = e.i(434076),
        r = e.i(592677),
        n = e.i(972670),
        a = e.i(801938);
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            key: r = "fallback",
            name: o = "Fallback",
            rank: s = !1,
            shouldThrow: l = i,
            retryCount: c,
            retryDelay: u,
          } = t;
        return (t) => {
          let { chain: i, pollingInterval: d = 4e3, timeout: f, ...p } = t,
            C = e,
            E = () => {},
            b = (0, a.createTransport)(
              {
                key: r,
                name: o,
                async request(e) {
                  let t,
                    { method: r, params: n } = e,
                    a = async function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        o = C[e]({ ...p, chain: i, retryCount: 0, timeout: f });
                      try {
                        let e = await o.request({ method: r, params: n });
                        return (
                          E({
                            method: r,
                            params: n,
                            response: e,
                            transport: o,
                            status: "success",
                          }),
                          e
                        );
                      } catch (s) {
                        if (
                          (E({
                            error: s,
                            method: r,
                            params: n,
                            transport: o,
                            status: "error",
                          }),
                          l(s) ||
                            e === C.length - 1 ||
                            (null != t ||
                              (t = C.slice(e + 1).some((e) => {
                                let { include: t, exclude: n } =
                                  e({ chain: i }).config.methods || {};
                                return t ? t.includes(r) : !n || !n.includes(r);
                              })),
                            !t))
                        )
                          throw s;
                        return a(e + 1);
                      }
                    };
                  return a();
                },
                retryCount: c,
                retryDelay: u,
                type: "fallback",
              },
              {
                onResponse: (e) => (E = e),
                transports: C.map((e) => e({ chain: i, retryCount: 0 })),
              }
            );
          if (s) {
            var m;
            let e = "object" == typeof s ? s : {};
            !(function (e) {
              let {
                  chain: t,
                  interval: r = 4e3,
                  onTransports: a,
                  ping: o,
                  sampleCount: i = 10,
                  timeout: s = 1e3,
                  transports: l,
                  weights: c = {},
                } = e,
                { stability: u = 0.7, latency: d = 0.3 } = c,
                f = [],
                p = async () => {
                  let e = await Promise.all(
                    l.map(async (e) => {
                      let r,
                        n,
                        a = e({ chain: t, retryCount: 0, timeout: s }),
                        i = Date.now();
                      try {
                        await (o
                          ? o({ transport: a })
                          : a.request({ method: "net_listening" })),
                          (n = 1);
                      } catch (e) {
                        n = 0;
                      } finally {
                        r = Date.now();
                      }
                      return { latency: r - i, success: n };
                    })
                  );
                  f.push(e), f.length > i && f.shift();
                  let c = Math.max(
                    ...f.map((e) =>
                      Math.max(
                        ...e.map((e) => {
                          let { latency: t } = e;
                          return t;
                        })
                      )
                    )
                  );
                  a(
                    l
                      .map((e, t) => {
                        let r = f.map((e) => e[t].latency),
                          n = r.reduce((e, t) => e + t, 0) / r.length,
                          a = f.map((e) => e[t].success),
                          o = a.reduce((e, t) => e + t, 0) / a.length;
                        return 0 === o ? [0, t] : [d * (1 - n / c) + u * o, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map((e) => {
                        let [, t] = e;
                        return l[t];
                      })
                  ),
                    await (0, n.wait)(r),
                    p();
                };
              p();
            })({
              chain: i,
              interval: null != (m = e.interval) ? m : d,
              onTransports: (e) => (C = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: C,
              weights: e.weights,
            });
          }
          return b;
        };
      }
      function i(e) {
        return !!(
          "code" in e &&
          "number" == typeof e.code &&
          (e.code === r.TransactionRejectedRpcError.code ||
            e.code === r.UserRejectedRequestError.code ||
            t.ExecutionRevertedError.nodeMessage.test(e.message) ||
            5e3 === e.code)
        );
      }
    },
    538752: (e) => {
      "use strict";
      e.s({ ConstantsUtil: () => t });
      let t = {
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        EIP155: e.i(605726).ConstantsUtil.CHAIN.EVM,
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
          coinbaseWallet: "com.coinbase.wallet",
          coinbaseWalletSDK: "com.coinbase.wallet",
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH",
      };
    },
    508431: (e) => {
      "use strict";
      e.s({ ConstantsUtil: () => r });
      var t = e.i(174519);
      let r = {
        ACCOUNT_TABS: [
          { label: "Tokens" },
          { label: "NFTs" },
          { label: "Activity" },
        ],
        SECURE_SITE_ORIGIN:
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        VIEW_DIRECTION: { Next: "next", Prev: "prev" },
        DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
        ANIMATION_DURATIONS: {
          HeaderText: 120,
          ModalHeight: 150,
          ViewTransition: 150,
        },
      };
    },
    905379: [
      (e) => {
        "use strict";
        e.s({ W3mFrameHelpers: () => a }, 905379);
        let t = {
          transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
          signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u,
        };
        var r = e.i(351667);
        e.s({ W3mFrameStorage: () => n }, 444158);
        let n = {
            set(e, t) {
              a.isClient &&
                localStorage.setItem(
                  "".concat(r.W3mFrameConstants.STORAGE_KEY).concat(e),
                  t
                );
            },
            get: (e) =>
              a.isClient
                ? localStorage.getItem(
                    "".concat(r.W3mFrameConstants.STORAGE_KEY).concat(e)
                  )
                : null,
            delete(e, t) {
              a.isClient &&
                (t
                  ? localStorage.removeItem(e)
                  : localStorage.removeItem(
                      "".concat(r.W3mFrameConstants.STORAGE_KEY).concat(e)
                    ));
            },
          },
          a = {
            checkIfAllowedToTriggerEmail() {
              let e = n.get(r.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
              if (e) {
                let t = Date.now() - Number(e);
                if (t < 3e4) {
                  let e = Math.ceil((3e4 - t) / 1e3);
                  throw Error("Please try again after ".concat(e, " seconds"));
                }
              }
            },
            getTimeToNextEmailLogin() {
              let e = n.get(r.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
              if (e) {
                let t = Date.now() - Number(e);
                if (t < 3e4) return Math.ceil((3e4 - t) / 1e3);
              }
              return 0;
            },
            checkIfRequestExists: (e) =>
              r.W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(e.method) ||
              r.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(e.method),
            getResponseType: (e) =>
              "string" == typeof e &&
              ((null == e ? void 0 : e.match(t.transactionHash)) ||
                (null == e ? void 0 : e.match(t.signedMessage)))
                ? r.W3mFrameConstants.RPC_RESPONSE_TYPE_TX
                : r.W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT,
            checkIfRequestIsSafe: (e) =>
              r.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(e.method),
            isClient: "undefined" != typeof window,
          };
      },
      [444158],
    ],
    456997: [
      (e) => {
        "use strict";
        e.s({ ConnectorUtil: () => E }, 456997);
        var t,
          r,
          n = e.i(605726),
          a = e.i(69393),
          o = e.i(631867),
          i = e.i(875073),
          s = e.i(225335),
          l = e.i(159055),
          c = e.i(737460),
          u = e.i(527410);
        e.s({ HelpersUtil: () => f }, 28529);
        var d = e.i(538752);
        let f = {
          getCaipTokens(e) {
            if (!e) return;
            let t = {};
            return (
              Object.entries(e).forEach((e) => {
                let [r, n] = e;
                t["".concat(d.ConstantsUtil.EIP155, ":").concat(r)] = n;
              }),
              t
            );
          },
          isLowerCaseMatch: (e, t) =>
            (null == e ? void 0 : e.toLowerCase()) ===
            (null == t ? void 0 : t.toLowerCase()),
          getActiveNamespaceConnectedToAuth() {
            let e = o.ChainController.state.activeChain;
            return n.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (t) =>
                s.ConnectorController.getConnectorId(t) ===
                  n.ConstantsUtil.CONNECTOR_ID.AUTH && t === e
            );
          },
          withRetry(e) {
            let { conditionFn: t, intervalMs: r, maxRetries: n } = e,
              a = 0;
            return new Promise((e) => {
              async function o() {
                return ((a += 1), await t())
                  ? e(!0)
                  : a >= n
                  ? e(!1)
                  : (setTimeout(o, r), null);
              }
              o();
            });
          },
        };
        e.s({ WalletUtil: () => C }, 46416);
        var p = e.i(508431);
        let C = {
            filterOutDuplicatesByRDNS(e) {
              let t = c.OptionsController.state.enableEIP6963
                  ? s.ConnectorController.state.connectors
                  : [],
                r = u.StorageUtil.getRecentWallets(),
                n = t
                  .map((e) => {
                    var t;
                    return null == (t = e.info) ? void 0 : t.rdns;
                  })
                  .filter(Boolean),
                a = r.map((e) => e.rdns).filter(Boolean),
                o = n.concat(a);
              if (
                o.includes("io.metamask.mobile") &&
                l.CoreHelperUtil.isMobile()
              ) {
                let e = o.indexOf("io.metamask.mobile");
                o[e] = "io.metamask";
              }
              return e.filter(
                (e) =>
                  !(
                    ((null == e ? void 0 : e.rdns) &&
                      o.includes(String(e.rdns))) ||
                    (!(null == e ? void 0 : e.rdns) &&
                      t.some((t) => t.name === e.name))
                  ) && !0
              );
            },
            filterOutDuplicatesByIds(e) {
              let t = s.ConnectorController.state.connectors.filter(
                  (e) => "ANNOUNCED" === e.type || "INJECTED" === e.type
                ),
                r = u.StorageUtil.getRecentWallets(),
                n = t.map((e) => e.explorerId),
                a = r.map((e) => e.id),
                o = n.concat(a);
              return e.filter((e) => !o.includes(null == e ? void 0 : e.id));
            },
            filterOutDuplicateWallets(e) {
              let t = this.filterOutDuplicatesByRDNS(e);
              return this.filterOutDuplicatesByIds(t);
            },
            markWalletsAsInstalled(e) {
              let { connectors: t } = s.ConnectorController.state,
                { featuredWalletIds: r } = c.OptionsController.state,
                n = t
                  .filter((e) => "ANNOUNCED" === e.type)
                  .reduce((e, t) => {
                    var r;
                    return (
                      (null == (r = t.info) ? void 0 : r.rdns) &&
                        (e[t.info.rdns] = !0),
                      e
                    );
                  }, {});
              return e
                .map((e) => {
                  var t;
                  return {
                    ...e,
                    installed: !!e.rdns && !!n[null != (t = e.rdns) ? t : ""],
                  };
                })
                .sort((e, t) => {
                  let n = Number(t.installed) - Number(e.installed);
                  if (0 !== n) return n;
                  if (null == r ? void 0 : r.length) {
                    let n = r.indexOf(e.id),
                      a = r.indexOf(t.id);
                    if (-1 !== n && -1 !== a) return n - a;
                    if (-1 !== n) return -1;
                    if (-1 !== a) return 1;
                  }
                  return 0;
                });
            },
            getConnectOrderMethod(e, t) {
              var r;
              let n =
                  (null == e ? void 0 : e.connectMethodsOrder) ||
                  (null == (r = c.OptionsController.state.features)
                    ? void 0
                    : r.connectMethodsOrder),
                o = t || s.ConnectorController.state.connectors;
              if (n) return n;
              let { injected: i, announced: l } = E.getConnectorsByType(
                  o,
                  a.ApiController.state.recommended,
                  a.ApiController.state.featured
                ),
                u = i.filter(E.showConnector),
                d = l.filter(E.showConnector);
              return u.length || d.length
                ? ["wallet", "email", "social"]
                : p.ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER;
            },
            isExcluded(e) {
              let t =
                  !!e.rdns &&
                  a.ApiController.state.excludedWallets.some(
                    (t) => t.rdns === e.rdns
                  ),
                r =
                  !!e.name &&
                  a.ApiController.state.excludedWallets.some((t) =>
                    f.isLowerCaseMatch(t.name, e.name)
                  );
              return t || r;
            },
          },
          E = {
            getConnectorsByType(e, t, r) {
              let { customWallets: n } = c.OptionsController.state,
                a = u.StorageUtil.getRecentWallets(),
                o = C.filterOutDuplicateWallets(t),
                i = C.filterOutDuplicateWallets(r),
                s = e.filter((e) => "MULTI_CHAIN" === e.type),
                l = e.filter((e) => "ANNOUNCED" === e.type),
                d = e.filter((e) => "INJECTED" === e.type);
              return {
                custom: n,
                recent: a,
                external: e.filter((e) => "EXTERNAL" === e.type),
                multiChain: s,
                announced: l,
                injected: d,
                recommended: o,
                featured: i,
              };
            },
            showConnector(e) {
              var t;
              let r = null == (t = e.info) ? void 0 : t.rdns,
                n =
                  !!r &&
                  a.ApiController.state.excludedWallets.some(
                    (e) => !!e.rdns && e.rdns === r
                  ),
                o =
                  !!e.name &&
                  a.ApiController.state.excludedWallets.some((t) =>
                    f.isLowerCaseMatch(t.name, e.name)
                  );
              if (
                "INJECTED" === e.type &&
                (("Browser Wallet" === e.name &&
                  (!l.CoreHelperUtil.isMobile() ||
                    (l.CoreHelperUtil.isMobile() &&
                      !r &&
                      !i.ConnectionController.checkInstalled()))) ||
                  n ||
                  o)
              )
                return !1;
              return (
                ("ANNOUNCED" !== e.type && "EXTERNAL" !== e.type) || (!n && !o)
              );
            },
            getIsConnectedWithWC: () =>
              Array.from(o.ChainController.state.chains.values()).some(
                (e) =>
                  s.ConnectorController.getConnectorId(e.namespace) ===
                  n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
              ),
            getConnectorTypeOrder(e) {
              let {
                  recommended: n,
                  featured: a,
                  custom: o,
                  recent: i,
                  announced: s,
                  injected: l,
                  multiChain: u,
                  external: d,
                  overriddenConnectors: f = null !=
                  (r =
                    null == (t = c.OptionsController.state.features)
                      ? void 0
                      : t.connectorTypeOrder)
                    ? r
                    : [],
                } = e,
                p = [
                  {
                    type: "walletConnect",
                    isEnabled: c.OptionsController.state.enableWalletConnect,
                  },
                  { type: "recent", isEnabled: i.length > 0 },
                  {
                    type: "injected",
                    isEnabled: [...l, ...s, ...u].length > 0,
                  },
                  { type: "featured", isEnabled: a.length > 0 },
                  { type: "custom", isEnabled: o && o.length > 0 },
                  { type: "external", isEnabled: d.length > 0 },
                  { type: "recommended", isEnabled: n.length > 0 },
                ].filter((e) => e.isEnabled),
                C = new Set(p.map((e) => e.type)),
                E = f
                  .filter((e) => C.has(e))
                  .map((e) => ({ type: e, isEnabled: !0 })),
                b = p.filter((e) => {
                  let { type: t } = e;
                  return !E.some((e) => {
                    let { type: r } = e;
                    return r === t;
                  });
                });
              return Array.from(
                new Set(
                  [...E, ...b].map((e) => {
                    let { type: t } = e;
                    return t;
                  })
                )
              );
            },
            getAuthName(e) {
              let { email: t, socialUsername: r, socialProvider: n } = e;
              return r
                ? n && "discord" === n && r.endsWith("0")
                  ? r.slice(0, -1)
                  : r
                : t.length > 30
                ? "".concat(t.slice(0, -3), "...")
                : t;
            },
            async fetchProviderData(e) {
              try {
                var t, r;
                if (
                  ("Browser Wallet" === e.name &&
                    !l.CoreHelperUtil.isMobile()) ||
                  e.id === n.ConstantsUtil.CONNECTOR_ID.AUTH
                )
                  return { accounts: [], chainId: void 0 };
                let [a, o] = await Promise.all([
                  null == (t = e.provider)
                    ? void 0
                    : t.request({ method: "eth_accounts" }),
                  null == (r = e.provider)
                    ? void 0
                    : r
                        .request({ method: "eth_chainId" })
                        .then((e) => Number(e)),
                ]);
                return { accounts: a, chainId: o };
              } catch (t) {
                return (
                  console.warn(
                    "Failed to fetch provider data for ".concat(e.name),
                    t
                  ),
                  { accounts: [], chainId: void 0 }
                );
              }
            },
          };
        e.s({ CaipNetworksUtil: () => O }, 488103);
        var b = e.i(254656),
          m = e.i(324345);
        e.s({ PresetsUtil: () => h }, 398618);
        let h = {
          ConnectorExplorerIds: {
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE]:
              "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:
              "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [n.ConstantsUtil.CONNECTOR_ID.SAFE]:
              "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
            [n.ConstantsUtil.CONNECTOR_ID.LEDGER]:
              "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
            [n.ConstantsUtil.CONNECTOR_ID.OKX]:
              "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
            [d.ConstantsUtil.METMASK_CONNECTOR_NAME]:
              "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            [d.ConstantsUtil.TRUST_CONNECTOR_NAME]:
              "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            [d.ConstantsUtil.SOLFLARE_CONNECTOR_NAME]:
              "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            [d.ConstantsUtil.PHANTOM_CONNECTOR_NAME]:
              "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            [d.ConstantsUtil.COIN98_CONNECTOR_NAME]:
              "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
            [d.ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]:
              "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
            [d.ConstantsUtil.BACKPACK_CONNECTOR_NAME]:
              "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
            [d.ConstantsUtil.BITGET_CONNECTOR_NAME]:
              "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
            [d.ConstantsUtil.FRONTIER_CONNECTOR_NAME]:
              "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
            [d.ConstantsUtil.XVERSE_CONNECTOR_NAME]:
              "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
            [d.ConstantsUtil.LEATHER_CONNECTOR_NAME]:
              "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
          },
          NetworkImageIds: {
            1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
            42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
            43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
            56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
            250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
            10: "ab9c186a-c52f-464b-2906-ca59d760a400",
            137: "41d04d42-da3b-4453-8506-668cc0727900",
            5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
            295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
            0xaa36a7: "e909ea0a-f92a-4512-c8fc-748044ea6800",
            84532: "a18a7ecd-e307-4360-4746-283182228e00",
            1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
            130: "2257980a-3463-48c6-cbac-a42d2a956e00",
            10143: "0a728e83-bacb-46db-7844-948f05434900",
            100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
            9001: "f926ff41-260d-4028-635e-91913fc28e00",
            324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
            314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
            4689: "34e68754-e536-40da-c153-6ef2e7188a00",
            1088: "3897a66d-40b9-4833-162f-a2c90531c900",
            1284: "161038da-44ae-4ec7-1208-0ea569454b00",
            1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
            7777777: "845c60df-d429-4991-e687-91ae45791600",
            42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
            8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
            0x4e454152: "3ff73439-a619-4894-9262-4470c773a100",
            2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
            2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
            "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
              "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":
              "a1b58899-f671-4276-6a5e-56ca5bd59700",
            EtWTRABZaYq6iMfeYKouRu166VU2xqa1:
              "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "000000000019d6689c085ae165831e93":
              "0b4838db-0161-4ffe-022d-532bf03dba00",
            "000000000933ea01ad0ee984209779ba":
              "39354064-d79b-420b-065d-f980c4b78200",
          },
          ConnectorImageIds: {
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE]:
              "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:
              "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
            [n.ConstantsUtil.CONNECTOR_ID.SAFE]:
              "461db637-8616-43ce-035a-d89b8a1d5800",
            [n.ConstantsUtil.CONNECTOR_ID.LEDGER]:
              "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
            [n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:
              "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
            [n.ConstantsUtil.CONNECTOR_ID.INJECTED]:
              "07ba87ed-43aa-4adf-4540-9e6a2b9cae00",
          },
          ConnectorNamesMap: {
            [n.ConstantsUtil.CONNECTOR_ID.INJECTED]: "Browser Wallet",
            [n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE]: "Coinbase",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
            [n.ConstantsUtil.CONNECTOR_ID.LEDGER]: "Ledger",
            [n.ConstantsUtil.CONNECTOR_ID.SAFE]: "Safe",
          },
          ConnectorTypesMap: {
            [n.ConstantsUtil.CONNECTOR_ID.INJECTED]: "INJECTED",
            [n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
            [n.ConstantsUtil.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
            [n.ConstantsUtil.CONNECTOR_ID.AUTH]: "AUTH",
            [d.ConstantsUtil.CONNECTOR_TYPE_AUTH]: "AUTH",
          },
          WalletConnectRpcChainIds: [
            1, 5, 0xaa36a7, 10, 420, 42161, 421613, 137, 80001, 42220,
            0x4e454152, 0x4e454153, 56, 97, 43114, 43113, 100, 8453, 84531,
            7777777, 999, 324, 280,
          ],
        };
        function y(e, t) {
          let r = new URL("https://rpc.walletconnect.org/v1/");
          return (
            r.searchParams.set("chainId", e),
            r.searchParams.set("projectId", t),
            r.toString()
          );
        }
        let N = [
            "near:mainnet",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "eip155:1101",
            "eip155:56",
            "eip155:42161",
            "eip155:7777777",
            "eip155:59144",
            "eip155:324",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
            "eip155:5000",
            "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
            "eip155:80084",
            "eip155:5003",
            "eip155:100",
            "eip155:8453",
            "eip155:42220",
            "eip155:1313161555",
            "eip155:17000",
            "eip155:1",
            "eip155:300",
            "eip155:1313161554",
            "eip155:1329",
            "eip155:84532",
            "eip155:421614",
            "eip155:11155111",
            "eip155:8217",
            "eip155:43114",
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "eip155:999999999",
            "eip155:11155420",
            "eip155:80002",
            "eip155:97",
            "eip155:43113",
            "eip155:137",
            "eip155:10",
            "eip155:1301",
            "bip122:000000000019d6689c085ae165831e93",
            "bip122:000000000933ea01ad0ee984209779ba",
          ],
          O = {
            extendRpcUrlWithProjectId(e, t) {
              let r = !1;
              try {
                r = "rpc.walletconnect.org" === new URL(e).host;
              } catch (e) {
                r = !1;
              }
              if (r) {
                let r = new URL(e);
                return (
                  r.searchParams.has("projectId") ||
                    r.searchParams.set("projectId", t),
                  r.toString()
                );
              }
              return e;
            },
            isCaipNetwork: (e) => "chainNamespace" in e && "caipNetworkId" in e,
            getChainNamespace(e) {
              return this.isCaipNetwork(e)
                ? e.chainNamespace
                : n.ConstantsUtil.CHAIN.EVM;
            },
            getCaipNetworkId(e) {
              return this.isCaipNetwork(e)
                ? e.caipNetworkId
                : "".concat(n.ConstantsUtil.CHAIN.EVM, ":").concat(e.id);
            },
            getDefaultRpcUrl(e, t, r) {
              var n, a, o;
              let i =
                null == (o = e.rpcUrls) ||
                null == (a = o.default) ||
                null == (n = a.http)
                  ? void 0
                  : n[0];
              return N.includes(t) ? y(t, r) : i || "";
            },
            extendCaipNetwork(e, t) {
              var r, n, a, o, i, s, l;
              let {
                  customNetworkImageUrls: c,
                  projectId: u,
                  customRpcUrls: d,
                } = t,
                f = this.getChainNamespace(e),
                p = this.getCaipNetworkId(e),
                C =
                  null == (a = e.rpcUrls) ||
                  null == (n = a.default) ||
                  null == (r = n.http)
                    ? void 0
                    : r[0],
                E = this.getDefaultRpcUrl(e, p, u),
                b =
                  (null == e ||
                  null == (s = e.rpcUrls) ||
                  null == (i = s.chainDefault) ||
                  null == (o = i.http)
                    ? void 0
                    : o[0]) || C,
                m =
                  (null == d || null == (l = d[p])
                    ? void 0
                    : l.map((e) => e.url)) || [],
                y = [...m, ...(E ? [E] : [])],
                N = [...m];
              return (
                b && !N.includes(b) && N.push(b),
                {
                  ...e,
                  chainNamespace: f,
                  caipNetworkId: p,
                  assets: {
                    imageId: h.NetworkImageIds[e.id],
                    imageUrl: null == c ? void 0 : c[e.id],
                  },
                  rpcUrls: {
                    ...e.rpcUrls,
                    default: { http: y },
                    chainDefault: { http: N },
                  },
                }
              );
            },
            extendCaipNetworks(e, t) {
              let {
                customNetworkImageUrls: r,
                projectId: n,
                customRpcUrls: a,
              } = t;
              return e.map((e) =>
                O.extendCaipNetwork(e, {
                  customNetworkImageUrls: r,
                  customRpcUrls: a,
                  projectId: n,
                })
              );
            },
            getViemTransport(e, t, r) {
              var n, a, o;
              let i = [];
              return (
                null == r ||
                  r.forEach((e) => {
                    i.push((0, m.http)(e.url, e.config));
                  }),
                N.includes(e.caipNetworkId) &&
                  i.push(
                    (0, m.http)(y(e.caipNetworkId, t), {
                      fetchOptions: {
                        headers: { "Content-Type": "text/plain" },
                      },
                    })
                  ),
                null == e ||
                  null == (o = e.rpcUrls) ||
                  null == (a = o.default) ||
                  null == (n = a.http) ||
                  n.forEach((e) => {
                    i.push((0, m.http)(e));
                  }),
                (0, b.fallback)(i)
              );
            },
            extendWagmiTransports(e, t, r) {
              if (N.includes(e.caipNetworkId)) {
                let n = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
                return (0, b.fallback)([r, (0, m.http)(n)]);
              }
              return r;
            },
            getUnsupportedNetwork: (e) => ({
              id: e.split(":")[1],
              caipNetworkId: e,
              name: n.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,
              chainNamespace: e.split(":")[0],
              nativeCurrency: { name: "", decimals: 0, symbol: "" },
              rpcUrls: { default: { http: [] } },
            }),
            getCaipNetworkFromStorage(e) {
              var t;
              let r = u.StorageUtil.getActiveCaipNetworkId(),
                n = o.ChainController.getAllRequestedCaipNetworks(),
                a = Array.from(
                  (null == (t = o.ChainController.state.chains)
                    ? void 0
                    : t.keys()) || []
                ),
                i = null == r ? void 0 : r.split(":")[0],
                s = !!i && a.includes(i),
                l = null == n ? void 0 : n.find((e) => e.caipNetworkId === r);
              return s && !l && r
                ? this.getUnsupportedNetwork(r)
                : l || e || (null == n ? void 0 : n[0]);
            },
          };
      },
      [28529, 46416, 398618, 488103],
    ],
    780835: (e) => {
      "use strict";
      e.s({ ProviderUtil: () => o });
      var t = e.i(861600),
        r = e.i(24732);
      let n = {
          eip155: void 0,
          solana: void 0,
          polkadot: void 0,
          bip122: void 0,
          cosmos: void 0,
        },
        a = (0, t.proxy)({ providers: { ...n }, providerIds: { ...n } }),
        o = {
          state: a,
          subscribeKey: (e, t) => (0, r.subscribeKey)(a, e, t),
          subscribe: (e) =>
            (0, t.subscribe)(a, () => {
              e(a);
            }),
          subscribeProviders: (e) =>
            (0, t.subscribe)(a.providers, () => e(a.providers)),
          setProvider(e, r) {
            e && r && (a.providers[e] = (0, t.ref)(r));
          },
          getProvider(e) {
            if (e) return a.providers[e];
          },
          setProviderId(e, t) {
            t && (a.providerIds[e] = t);
          },
          getProviderId(e) {
            if (e) return a.providerIds[e];
          },
          reset() {
            (a.providers = { ...n }), (a.providerIds = { ...n });
          },
          resetChain(e) {
            (a.providers[e] = void 0), (a.providerIds[e] = void 0);
          },
        };
    },
    672142: (e) => {
      "use strict";
      e.s({ ErrorUtil: () => t });
      let t = {
        EmbeddedWalletAbortController: new AbortController(),
        UniversalProviderErrors: {
          UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: "Unauthorized: origin not allowed",
            alertErrorKey: "ORIGIN_NOT_ALLOWED",
          },
          JWT_VALIDATION_ERROR: {
            message: "JWT validation error: JWT Token is not yet valid",
            alertErrorKey: "JWT_TOKEN_NOT_VALID",
          },
          INVALID_KEY: {
            message: "Unauthorized: invalid key",
            alertErrorKey: "INVALID_PROJECT_ID",
          },
        },
        ALERT_ERRORS: {
          SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: "Network Not Found",
            longMessage:
              "Network not found. Please make sure it is included in 'networks' array in createAppKit function.",
          },
          ORIGIN_NOT_ALLOWED: {
            shortMessage: "Origin Not Allowed",
            longMessage: () =>
              "🔧 Origin ".concat(
                "undefined" != typeof window ? window.origin : "unknown",
                " not found on allow list. Please update your project configurations on dashboard.reown.com."
              ),
          },
          IFRAME_LOAD_FAILED: {
            shortMessage: "Network Error - Could not load embedded wallet",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please try again later.",
          },
          IFRAME_REQUEST_TIMEOUT: {
            shortMessage: "Embedded Wallet Request Timed Out",
            longMessage: () =>
              "There was an issue doing the request to the embedded wallet. Please try again later.",
          },
          UNVERIFIED_DOMAIN: {
            shortMessage: "Unverified Domain",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please verify that your domain is allowed at dashboard.reown.com.",
          },
          JWT_TOKEN_NOT_VALID: {
            shortMessage: "Session Expired",
            longMessage:
              "Invalid session found on UniversalProvider. Please check your time settings and connect again.",
          },
          INVALID_PROJECT_ID: {
            shortMessage: "Invalid Project ID",
            longMessage:
              "The project ID is invalid. Visit dashboard.reown.com to get a new one.",
          },
          PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: "Project ID Not Configured",
            longMessage:
              "Project ID Not Configured. Please update your project configurations on dashboard.reown.com.",
          },
          SERVER_ERROR_APP_CONFIGURATION: {
            shortMessage: "Server Error",
            longMessage: (e) =>
              "Failed to get App Configuration ".concat(e || ""),
          },
          RATE_LIMITED_APP_CONFIGURATION: {
            shortMessage: "Rate Limited",
            longMessage:
              "Rate limited when trying to get the App Configuration",
          },
        },
      };
    },
  },
]);

//# sourceMappingURL=8c595170eb2db916.js.map
