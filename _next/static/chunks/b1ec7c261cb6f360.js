(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    905170: (e) => {
      "use strict";
      e.s(
        {
          Dialog: () => eF,
          DialogClose: () => e1,
          DialogContent: () => ez,
          DialogOverlay: () => eY,
          DialogTitle: () => eJ,
        },
        905170
      );
      var t,
        n,
        r,
        o,
        i = e.i(756253);
      function a(e, t) {
        let { checkForDefaultPrevented: n = !0 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      function l(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => {
          let n = !1,
            r = t.map((t) => {
              let r = l(t, e);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let e = 0; e < r.length; e++) {
                let n = r[e];
                "function" == typeof n ? n() : l(t[e], null);
              }
            };
        };
      }
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return i.useCallback(u(...t), t);
      }
      var c = e.i(150840),
        d = (null == (n = globalThis) ? void 0 : n.document)
          ? i.useLayoutEffect
          : () => {},
        f = i[" useId ".trim().toString()] || (() => void 0),
        p = 0;
      function h(e) {
        let [t, n] = i.useState(f());
        return (
          d(() => {
            e || n((e) => (null != e ? e : String(p++)));
          }, [e]),
          e || (t ? "radix-".concat(t) : "")
        );
      }
      i[" useEffectEvent ".trim().toString()],
        i[" useInsertionEffect ".trim().toString()];
      var m = i[" useInsertionEffect ".trim().toString()] || d;
      Symbol("RADIX:SYNC_STATE");
      var g = e.i(317317);
      function y(e) {
        let t = (function (e) {
            let t = i.forwardRef((e, t) => {
              let { children: n, ...r } = e;
              if (i.isValidElement(n)) {
                var o, a, l;
                let e,
                  s,
                  c = (s =
                    (e =
                      null ==
                      (a = Object.getOwnPropertyDescriptor(
                        (o = n).props,
                        "ref"
                      ))
                        ? void 0
                        : a.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? o.ref
                    : (s =
                        (e =
                          null ==
                          (l = Object.getOwnPropertyDescriptor(o, "ref"))
                            ? void 0
                            : l.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? o.props.ref
                    : o.props.ref || o.ref,
                  d = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let o = e[r],
                        i = t[r];
                      /^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = function () {
                              for (
                                var e = arguments.length, t = Array(e), n = 0;
                                n < e;
                                n++
                              )
                                t[n] = arguments[n];
                              let r = i(...t);
                              return o(...t), r;
                            })
                          : o && (n[r] = o)
                        : "style" === r
                        ? (n[r] = { ...o, ...i })
                        : "className" === r &&
                          (n[r] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(r, n.props);
                return (
                  n.type !== i.Fragment && (d.ref = t ? u(t, c) : c),
                  i.cloneElement(n, d)
                );
              }
              return i.Children.count(n) > 1 ? i.Children.only(null) : null;
            });
            return (t.displayName = "".concat(e, ".SlotClone")), t;
          })(e),
          n = i.forwardRef((e, n) => {
            let { children: r, ...o } = e,
              a = i.Children.toArray(r),
              l = a.find(w);
            if (l) {
              let e = l.props.children,
                r = a.map((t) =>
                  t !== l
                    ? t
                    : i.Children.count(e) > 1
                    ? i.Children.only(null)
                    : i.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, c.jsx)(t, {
                ...o,
                ref: n,
                children: i.isValidElement(e)
                  ? i.cloneElement(e, void 0, r)
                  : null,
              });
            }
            return (0, c.jsx)(t, { ...o, ref: n, children: r });
          });
        return (n.displayName = "".concat(e, ".Slot")), n;
      }
      var E = Symbol("radix.slottable");
      function w(e) {
        return (
          i.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === E
        );
      }
      var b = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = y("Primitive.".concat(t)),
          r = i.forwardRef((e, r) => {
            let { asChild: o, ...i } = e;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, c.jsx)(o ? n : t, { ...i, ref: r })
            );
          });
        return (r.displayName = "Primitive.".concat(t)), { ...e, [t]: r };
      }, {});
      function C(e) {
        let t = i.useRef(e);
        return (
          i.useEffect(() => {
            t.current = e;
          }),
          i.useMemo(
            () =>
              function () {
                for (
                  var e, n = arguments.length, r = Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return null == (e = t.current) ? void 0 : e.call(t, ...r);
              },
            []
          )
        );
      }
      var _ = "dismissableLayer.update",
        N = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        R = i.forwardRef((e, t) => {
          var n, o;
          let {
              disableOutsidePointerEvents: l = !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: d,
              onFocusOutside: f,
              onInteractOutside: p,
              onDismiss: h,
              ...m
            } = e,
            g = i.useContext(N),
            [y, E] = i.useState(null),
            w =
              null != (o = null == y ? void 0 : y.ownerDocument)
                ? o
                : null == (n = globalThis)
                ? void 0
                : n.document,
            [, R] = i.useState({}),
            P = s(t, (e) => E(e)),
            A = Array.from(g.layers),
            [D] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
            T = A.indexOf(D),
            M = y ? A.indexOf(y) : -1,
            I = g.layersWithOutsidePointerEventsDisabled.size > 0,
            O = M >= T,
            L = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = C(e),
                o = i.useRef(!1),
                a = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            x("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", a.current),
                            (a.current = t),
                            n.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", a.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...g.branches].some((e) => e.contains(t));
              O &&
                !n &&
                (null == d || d(e),
                null == p || p(e),
                e.defaultPrevented || null == h || h());
            }, w),
            k = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = C(e),
                o = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      x(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...g.branches].some((e) => e.contains(t)) &&
                (null == f || f(e),
                null == p || p(e),
                e.defaultPrevented || null == h || h());
            }, w);
          return (
            !(function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = C(e);
              i.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && r(e);
                };
                return (
                  n.addEventListener("keydown", e, { capture: !0 }),
                  () => n.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [r, n]);
            })((e) => {
              M === g.layers.size - 1 &&
                (null == u || u(e),
                !e.defaultPrevented && h && (e.preventDefault(), h()));
            }, w),
            i.useEffect(() => {
              if (y)
                return (
                  l &&
                    (0 === g.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = w.body.style.pointerEvents),
                      (w.body.style.pointerEvents = "none")),
                    g.layersWithOutsidePointerEventsDisabled.add(y)),
                  g.layers.add(y),
                  S(),
                  () => {
                    l &&
                      1 === g.layersWithOutsidePointerEventsDisabled.size &&
                      (w.body.style.pointerEvents = r);
                  }
                );
            }, [y, w, l, g]),
            i.useEffect(
              () => () => {
                y &&
                  (g.layers.delete(y),
                  g.layersWithOutsidePointerEventsDisabled.delete(y),
                  S());
              },
              [y, g]
            ),
            i.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(_, e),
                () => document.removeEventListener(_, e)
              );
            }, []),
            (0, c.jsx)(b.div, {
              ...m,
              ref: P,
              style: {
                pointerEvents: I ? (O ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: a(e.onFocusCapture, k.onFocusCapture),
              onBlurCapture: a(e.onBlurCapture, k.onBlurCapture),
              onPointerDownCapture: a(
                e.onPointerDownCapture,
                L.onPointerDownCapture
              ),
            })
          );
        });
      function S() {
        let e = new CustomEvent(_);
        document.dispatchEvent(e);
      }
      function x(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        if ((t && i.addEventListener(e, t, { once: !0 }), o))
          i && g.flushSync(() => i.dispatchEvent(a));
        else i.dispatchEvent(a);
      }
      (R.displayName = "DismissableLayer"),
        (i.forwardRef((e, t) => {
          let n = i.useContext(N),
            r = i.useRef(null),
            o = s(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(b.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var P = "focusScope.autoFocusOnMount",
        A = "focusScope.autoFocusOnUnmount",
        D = { bubbles: !1, cancelable: !0 },
        T = i.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...l
            } = e,
            [u, d] = i.useState(null),
            f = C(o),
            p = C(a),
            h = i.useRef(null),
            m = s(t, (e) => d(e)),
            g = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (g.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (h.current = t)
                    : O(h.current, { select: !0 });
                },
                t = function (e) {
                  if (g.paused || !u) return;
                  let t = e.relatedTarget;
                  null !== t && (u.contains(t) || O(h.current, { select: !0 }));
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && O(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, g.paused]),
            i.useEffect(() => {
              if (u) {
                L.add(g);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(P, D);
                  u.addEventListener(P, f),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (O(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        M(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && O(u));
                }
                return () => {
                  u.removeEventListener(P, f),
                    setTimeout(() => {
                      let t = new CustomEvent(A, D);
                      u.addEventListener(A, p),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          O(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(A, p),
                        L.remove(g);
                    }, 0);
                };
              }
            }, [u, f, p, g]);
          let y = i.useCallback(
            (e) => {
              if ((!n && !r) || g.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = M(e);
                    return [I(t, e), I(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && O(i, { select: !0 }))
                    : (e.preventDefault(), n && O(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, g.paused]
          );
          return (0, c.jsx)(b.div, {
            tabIndex: -1,
            ...l,
            ref: m,
            onKeyDown: y,
          });
        });
      function M(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function I(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function O(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      T.displayName = "FocusScope";
      var L = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = k(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null == (n = (e = k(e, t))[0]) || n.resume();
          },
        };
      })();
      function k(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      i.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [l, u] = i.useState(!1);
        d(() => u(!0), []);
        let s =
          o ||
          (l &&
            (null == (r = globalThis) || null == (n = r.document)
              ? void 0
              : n.body));
        return s
          ? g.default.createPortal((0, c.jsx)(b.div, { ...a, ref: t }), s)
          : null;
      }).displayName = "Portal";
      var j = (e) => {
        let { present: t, children: n } = e,
          r = (function (e) {
            var t, n;
            let [r, o] = i.useState(),
              a = i.useRef(null),
              l = i.useRef(e),
              u = i.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                i.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              i.useEffect(() => {
                let e = F(a.current);
                u.current = "mounted" === s ? e : "none";
              }, [s]),
              d(() => {
                let t = a.current,
                  n = l.current;
                if (n !== e) {
                  let r = u.current,
                    o = F(t);
                  e
                    ? c("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (l.current = e);
                }
              }, [e, c]),
              d(() => {
                if (r) {
                  var e;
                  let t,
                    n = null != (e = r.ownerDocument.defaultView) ? e : window,
                    o = (e) => {
                      let o = F(a.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (c("ANIMATION_END"), !l.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = "forwards"),
                          (t = n.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    i = (e) => {
                      e.target === r && (u.current = F(a.current));
                    };
                  return (
                    r.addEventListener("animationstart", i),
                    r.addEventListener("animationcancel", o),
                    r.addEventListener("animationend", o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener("animationstart", i),
                        r.removeEventListener("animationcancel", o),
                        r.removeEventListener("animationend", o);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: i.useCallback((e) => {
                  (a.current = e ? getComputedStyle(e) : null), o(e);
                }, []),
              }
            );
          })(t),
          o =
            "function" == typeof n
              ? n({ present: r.isPresent })
              : i.Children.only(n),
          a = s(
            r.ref,
            (function (e) {
              var t, n;
              let r =
                  null == (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                    ? void 0
                    : t.get,
                o = r && "isReactWarning" in r && r.isReactWarning;
              return o
                ? e.ref
                : (o =
                    (r =
                      null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                        ? void 0
                        : n.get) &&
                    "isReactWarning" in r &&
                    r.isReactWarning)
                ? e.props.ref
                : e.props.ref || e.ref;
            })(o)
          );
        return "function" == typeof n || r.isPresent
          ? i.cloneElement(o, { ref: a })
          : null;
      };
      function F(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      j.displayName = "Presence";
      var W = 0;
      function U() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var B = e.i(808691),
        K = "right-scroll-bar-position",
        Y = "width-before-scroll-bar";
      function V(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var X = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        H = new WeakMap();
      function z(e) {
        return e;
      }
      var G = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = z),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    (n = []), o.forEach(e), (t = n);
                  }
                  var i = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  a(),
                    (n = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (o.options = (0, B.__assign)({ async: !0, ssr: !1 }, e)), o;
        })(),
        Z = function () {},
        q = i.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a,
            l = i.useRef(null),
            u = i.useState({
              onScrollCapture: Z,
              onWheelCapture: Z,
              onTouchMoveCapture: Z,
            }),
            s = u[0],
            c = u[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            h = e.removeScrollBar,
            m = e.enabled,
            g = e.shards,
            y = e.sideCar,
            E = e.noRelative,
            w = e.noIsolation,
            b = e.inert,
            C = e.allowPinchZoom,
            _ = e.as,
            N = e.gapMode,
            R = (0, B.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            S =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return V(t, e);
                });
              }),
              ((o = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = o.facade),
              X(
                function () {
                  var e = H.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = a.current;
                    t.forEach(function (e) {
                      r.has(e) || V(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || V(e, o);
                      });
                  }
                  H.set(a, n);
                },
                [n]
              ),
              a),
            x = (0, B.__assign)((0, B.__assign)({}, R), s);
          return i.createElement(
            i.Fragment,
            null,
            m &&
              i.createElement(y, {
                sideCar: G,
                removeScrollBar: h,
                shards: g,
                noRelative: E,
                noIsolation: w,
                inert: b,
                setCallbacks: c,
                allowPinchZoom: !!C,
                lockRef: l,
                gapMode: N,
              }),
            d
              ? i.cloneElement(
                  i.Children.only(f),
                  (0, B.__assign)((0, B.__assign)({}, x), { ref: S })
                )
              : i.createElement(
                  void 0 === _ ? "div" : _,
                  (0, B.__assign)({}, x, { className: p, ref: S }),
                  f
                )
          );
        });
      (q.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (q.classNames = { fullWidth: Y, zeroRight: K });
      var Q = function (e) {
        var t = e.sideCar,
          n = (0, B.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return i.createElement(r, (0, B.__assign)({}, n));
      };
      Q.isSideCarExport = !0;
      var J = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t =
                    o ||
                    ("undefined" != typeof __webpack_nonce__
                      ? __webpack_nonce__
                      : void 0);
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var r, i;
                (r = t).styleSheet
                  ? (r.styleSheet.cssText = n)
                  : r.appendChild(document.createTextNode(n)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        $ = function () {
          var e = J();
          return function (t, n) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        ee = function () {
          var e = $();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        et = { left: 0, top: 0, right: 0, gap: 0 },
        en = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        er = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [en(n), en(r), en(o)];
        },
        eo = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return et;
          var t = er(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        ei = ee(),
        ea = "data-scroll-locked",
        el = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(ea, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(K, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Y, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(K, " .")
              .concat(K, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Y, " .")
              .concat(Y, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(ea, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        eu = function () {
          var e = parseInt(document.body.getAttribute(ea) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        es = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(ea, (eu() + 1).toString()),
              function () {
                var e = eu() - 1;
                e <= 0
                  ? document.body.removeAttribute(ea)
                  : document.body.setAttribute(ea, e.toString());
              }
            );
          }, []);
        },
        ec = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          es();
          var a = i.useMemo(
            function () {
              return eo(o);
            },
            [o]
          );
          return i.createElement(ei, {
            styles: el(a, !t, o, n ? "" : "!important"),
          });
        },
        ed = !1;
      if ("undefined" != typeof window)
        try {
          var ef = Object.defineProperty({}, "passive", {
            get: function () {
              return (ed = !0), !0;
            },
          });
          window.addEventListener("test", ef, ef),
            window.removeEventListener("test", ef, ef);
        } catch (e) {
          ed = !1;
        }
      var ev = !!ed && { passive: !1 },
        ep = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        eh = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              em(e, r))
            ) {
              var o = eg(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        em = function (e, t) {
          return "v" === e ? ep(t, "overflowY") : ep(t, "overflowX");
        },
        eg = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ey = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            u = n.target,
            s = t.contains(u),
            c = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            if (!u) break;
            var h = eg(e, u),
              m = h[0],
              g = h[1] - h[2] - a * m;
            (m || g) && em(e, u) && ((f += g), (p += m));
            var y = u.parentNode;
            u = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
          } while (
            (!s && u !== document.body) ||
            (s && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (c = !0),
            c
          );
        },
        eE = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ew = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eb = function (e) {
          return e && "current" in e ? e.current : e;
        },
        eC = 0,
        e_ = [];
      let eN =
        ((t = function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(eC++)[0],
            a = i.useState(ee)[0],
            l = i.useRef(e);
          i.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, B.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(eb),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = i.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                i = eE(e),
                a = n.current,
                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                s = "deltaY" in e ? e.deltaY : a[1] - i[1],
                c = e.target,
                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = eh(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = eh(d, c))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return ey(p, t, e, "h" === p ? u : s, !0);
            }, []),
            s = i.useCallback(function (e) {
              if (e_.length && e_[e_.length - 1] === a) {
                var n = "deltaY" in e ? ew(e) : eE(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(eb)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = i.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = i.useCallback(function (e) {
              (n.current = eE(e)), (r.current = void 0);
            }, []),
            f = i.useCallback(function (t) {
              c(t.type, ew(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = i.useCallback(function (t) {
              c(t.type, eE(t), t.target, u(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              e_.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, ev),
              document.addEventListener("touchmove", s, ev),
              document.addEventListener("touchstart", d, ev),
              function () {
                (e_ = e_.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", s, ev),
                  document.removeEventListener("touchmove", s, ev),
                  document.removeEventListener("touchstart", d, ev);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            m = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            m
              ? i.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            h
              ? i.createElement(ec, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null
          );
        }),
        G.useMedium(t),
        Q);
      var eR = i.forwardRef(function (e, t) {
        return i.createElement(
          q,
          (0, B.__assign)({}, e, { ref: t, sideCar: eN })
        );
      });
      eR.classNames = q.classNames;
      var eS = new WeakMap(),
        ex = new WeakMap(),
        eP = {},
        eA = 0,
        eD = function (e) {
          return e && (e.host || eD(e.parentNode));
        },
        eT = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = eD(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          eP[n] || (eP[n] = new WeakMap());
          var i = eP[n],
            a = [],
            l = new Set(),
            u = new Set(o),
            s = function (e) {
              !e || l.has(e) || (l.add(e), s(e.parentNode));
            };
          o.forEach(s);
          var c = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) c(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      u = (eS.get(e) || 0) + 1,
                      s = (i.get(e) || 0) + 1;
                    eS.set(e, u),
                      i.set(e, s),
                      a.push(e),
                      1 === u && o && ex.set(e, !0),
                      1 === s && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            c(t),
            l.clear(),
            eA++,
            function () {
              a.forEach(function (e) {
                var t = eS.get(e) - 1,
                  o = i.get(e) - 1;
                eS.set(e, t),
                  i.set(e, o),
                  t || (ex.has(e) || e.removeAttribute(r), ex.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --eA ||
                  ((eS = new WeakMap()),
                  (eS = new WeakMap()),
                  (ex = new WeakMap()),
                  (eP = {}));
            }
          );
        },
        eM = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(
                r,
                Array.from(o.querySelectorAll("[aria-live], script"))
              ),
              eT(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        eI = "Dialog",
        [eO, eL] = (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = [],
            r = () => {
              let t = n.map((e) => i.createContext(e));
              return function (n) {
                let r = (null == n ? void 0 : n[e]) || t;
                return i.useMemo(
                  () => ({ ["__scope".concat(e)]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = i.createContext(r),
                  a = n.length;
                n = [...n, r];
                let l = (t) => {
                  var n;
                  let { scope: r, children: l, ...u } = t,
                    s = (null == r || null == (n = r[e]) ? void 0 : n[a]) || o,
                    d = i.useMemo(() => u, Object.values(u));
                  return (0, c.jsx)(s.Provider, { value: d, children: l });
                };
                return (
                  (l.displayName = t + "Provider"),
                  [
                    l,
                    function (n, l) {
                      var u;
                      let s =
                          (null == l || null == (u = l[e]) ? void 0 : u[a]) ||
                          o,
                        c = i.useContext(s);
                      if (c) return c;
                      if (void 0 !== r) return r;
                      throw Error(
                        "`".concat(n, "` must be used within `").concat(t, "`")
                      );
                    },
                  ]
                );
              },
              (function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                let r = t[0];
                if (1 === t.length) return r;
                let o = () => {
                  let e = t.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (t) {
                    let n = e.reduce((e, n) => {
                      let { useScope: r, scopeName: o } = n,
                        i = r(t)["__scope".concat(o)];
                      return { ...e, ...i };
                    }, {});
                    return i.useMemo(
                      () => ({ ["__scope".concat(r.scopeName)]: n }),
                      [n]
                    );
                  };
                };
                return (o.scopeName = r.scopeName), o;
              })(r, ...t),
            ]
          );
        })(eI),
        [ek, ej] = eO(eI),
        eF = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: l = !0,
            } = e,
            u = i.useRef(null),
            s = i.useRef(null),
            [d, f] = (function (e) {
              let {
                  prop: t,
                  defaultProp: n,
                  onChange: r = () => {},
                  caller: o,
                } = e,
                [a, l, u] = (function (e) {
                  let { defaultProp: t, onChange: n } = e,
                    [r, o] = i.useState(t),
                    a = i.useRef(r),
                    l = i.useRef(n);
                  return (
                    m(() => {
                      l.current = n;
                    }, [n]),
                    i.useEffect(() => {
                      if (a.current !== r) {
                        var e;
                        null == (e = l.current) || e.call(l, r),
                          (a.current = r);
                      }
                    }, [r, a]),
                    [r, o, l]
                  );
                })({ defaultProp: n, onChange: r }),
                s = void 0 !== t,
                c = s ? t : a;
              {
                let e = i.useRef(void 0 !== t);
                i.useEffect(() => {
                  let t = e.current;
                  if (t !== s) {
                    let e = s ? "controlled" : "uncontrolled";
                    console.warn(
                      ""
                        .concat(o, " is changing from ")
                        .concat(t ? "controlled" : "uncontrolled", " to ")
                        .concat(
                          e,
                          ". Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component."
                        )
                    );
                  }
                  e.current = s;
                }, [s, o]);
              }
              return [
                c,
                i.useCallback(
                  (e) => {
                    if (s) {
                      let r = "function" == typeof e ? e(t) : e;
                      if (r !== t) {
                        var n;
                        null == (n = u.current) || n.call(u, r);
                      }
                    } else l(e);
                  },
                  [s, t, l, u]
                ),
              ];
            })({
              prop: r,
              defaultProp: null != o && o,
              onChange: a,
              caller: eI,
            });
          return (0, c.jsx)(ek, {
            scope: t,
            triggerRef: u,
            contentRef: s,
            contentId: h(),
            titleId: h(),
            descriptionId: h(),
            open: d,
            onOpenChange: f,
            onOpenToggle: i.useCallback(() => f((e) => !e), [f]),
            modal: l,
            children: n,
          });
        };
      eF.displayName = eI;
      var eW = "DialogTrigger";
      i.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = ej(eW, n),
          i = s(t, o.triggerRef);
        return (0, c.jsx)(b.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": o.open,
          "aria-controls": o.contentId,
          "data-state": e5(o.open),
          ...r,
          ref: i,
          onClick: a(e.onClick, o.onOpenToggle),
        });
      }).displayName = eW;
      var [eU, eB] = eO("DialogPortal", { forceMount: void 0 }),
        eK = "DialogOverlay",
        eY = i.forwardRef((e, t) => {
          let n = eB(eK, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = ej(eK, e.__scopeDialog);
          return i.modal
            ? (0, c.jsx)(j, {
                present: r || i.open,
                children: (0, c.jsx)(eX, { ...o, ref: t }),
              })
            : null;
        });
      eY.displayName = eK;
      var eV = y("DialogOverlay.RemoveScroll"),
        eX = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ej(eK, n);
          return (0, c.jsx)(eR, {
            as: eV,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, c.jsx)(b.div, {
              "data-state": e5(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        eH = "DialogContent",
        ez = i.forwardRef((e, t) => {
          let n = eB(eH, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = ej(eH, e.__scopeDialog);
          return (0, c.jsx)(j, {
            present: r || i.open,
            children: i.modal
              ? (0, c.jsx)(eG, { ...o, ref: t })
              : (0, c.jsx)(eZ, { ...o, ref: t }),
          });
        });
      ez.displayName = eH;
      var eG = i.forwardRef((e, t) => {
          let n = ej(eH, e.__scopeDialog),
            r = i.useRef(null),
            o = s(t, n.contentRef, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e) return eM(e);
            }, []),
            (0, c.jsx)(eq, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: a(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null == (t = n.triggerRef.current) || t.focus();
              }),
              onPointerDownOutside: a(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: a(e.onFocusOutside, (e) => e.preventDefault()),
            })
          );
        }),
        eZ = i.forwardRef((e, t) => {
          let n = ej(eH, e.__scopeDialog),
            r = i.useRef(!1),
            o = i.useRef(!1);
          return (0, c.jsx)(eq, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var i, a;
              null == (i = e.onCloseAutoFocus) || i.call(e, t),
                t.defaultPrevented ||
                  (r.current || null == (a = n.triggerRef.current) || a.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              var i, a;
              null == (i = e.onInteractOutside) || i.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (o.current = !0));
              let l = t.target;
              (null == (a = n.triggerRef.current) ? void 0 : a.contains(l)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        eq = i.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              ...l
            } = e,
            u = ej(eH, n),
            d = i.useRef(null),
            f = s(t, d);
          return (
            i.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null != (e = n[0]) ? e : U()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null != (t = n[1]) ? t : U()
                ),
                W++,
                () => {
                  1 === W &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    W--;
                }
              );
            }, []),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(T, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: a,
                  children: (0, c.jsx)(R, {
                    role: "dialog",
                    id: u.contentId,
                    "aria-describedby": u.descriptionId,
                    "aria-labelledby": u.titleId,
                    "data-state": e5(u.open),
                    ...l,
                    ref: f,
                    onDismiss: () => u.onOpenChange(!1),
                  }),
                }),
                (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(e3, { titleId: u.titleId }),
                    (0, c.jsx)(e4, {
                      contentRef: d,
                      descriptionId: u.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        eQ = "DialogTitle",
        eJ = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ej(eQ, n);
          return (0, c.jsx)(b.h2, { id: o.titleId, ...r, ref: t });
        });
      eJ.displayName = eQ;
      var e$ = "DialogDescription";
      i.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = ej(e$, n);
        return (0, c.jsx)(b.p, { id: o.descriptionId, ...r, ref: t });
      }).displayName = e$;
      var e0 = "DialogClose",
        e1 = i.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = ej(e0, n);
          return (0, c.jsx)(b.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: a(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function e5(e) {
        return e ? "open" : "closed";
      }
      e1.displayName = e0;
      var e7 = "DialogTitleWarning",
        [e2, e8] = (function (e, t) {
          let n = i.createContext(t),
            r = (e) => {
              let { children: t, ...r } = e,
                o = i.useMemo(() => r, Object.values(r));
              return (0, c.jsx)(n.Provider, { value: o, children: t });
            };
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                let o = i.useContext(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(
                  "`".concat(r, "` must be used within `").concat(e, "`")
                );
              },
            ]
          );
        })(e7, { contentName: eH, titleName: eQ, docsSlug: "dialog" }),
        e3 = (e) => {
          let { titleId: t } = e,
            n = e8(e7),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            i.useEffect(() => {
              t && (document.getElementById(t) || console.error(r));
            }, [r, t]),
            null
          );
        },
        e4 = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = e8("DialogDescriptionWarning"),
            o =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            i.useEffect(() => {
              var e;
              let r =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && (document.getElementById(n) || console.warn(o));
            }, [o, t, n]),
            null
          );
        };
    },
    164897: (e) => {
      "use strict";
      e.s({ websiteConfig: () => n });
      var t = e.i(174519);
      let n = {
        baseUrl: "https://pudgypandas.io",
        isDevelop: "true" === t.default.env.NEXT_PUBLIC_IS_DEVELOP,
        gtmId: "GTM-52SML5L7",
        gtmUrl: "",
        gtmCustomScript:
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src=\"https://tr.pudgypandas.io/64acglbruo.js?\"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','1o=BhFPJTgqTlRdJj8uWStURxlIQExdQQcPUgUHBgseEwABERMRQg4M');",
        token: {
          name: t.default.env.TOKEN_NAME || "UNKNOWN_TOKEN",
          network: "ethereum",
          symbol: "PANDA",
          address: "0x48cbe46189083fa41cd237f384c0307d49b1dce9",
          auditUrl:
            "https://spywolf.co/audits/PudgyPandas_0x48cbe46189083fa41cd237f384c0307d49b1dce9.pdf",
          forcePresaleComingSoon: !1,
        },
        links: {
          raydium: "https://raydium.io/",
          coingecko: "",
          coinmarketcap: "",
        },
      };
    },
    28961: (e) => {
      "use strict";
      e.s({ richText: () => n });
      var t = e.i(150840);
      let n = {
        primary: (e) =>
          (0, t.jsx)("span", { className: "text-primary", children: e }),
        bold: (e) =>
          (0, t.jsx)("strong", { className: "font-bold", children: e }),
        italic: (e) => (0, t.jsx)("em", { className: "italic", children: e }),
        underline: (e) =>
          (0, t.jsx)("span", { className: "underline", children: e }),
      };
    },
    737893: (e) => {
      "use strict";
      e.s({ formatWithCommas: () => r, useAmountCalculation: () => o });
      var t = e.i(4718),
        n = e.i(756253);
      let r = (e) => e.toLocaleString(void 0, { maximumFractionDigits: 2 }),
        o = (e) => {
          let {
              payAmount: o,
              receiveAmount: i,
              setPayAmount: a,
              setReceiveAmount: l,
              setPreferPayOrReceive: u,
              setAmountsAreDirty: s,
              debounceDelay: c = 150,
            } = e,
            [d, f] = (0, n.useState)(o.toString()),
            [p, h] = (0, n.useState)(i.toString()),
            m = (0, n.useRef)(null),
            g = (0, t.useDebounce)(Number(d || "0"), c),
            y = (0, t.useDebounce)(Number(p || "0"), c);
          (0, n.useEffect)(() => {
            if ("PAY" === m.current) {
              if ((s(!0), "" === d)) {
                a(0), l(0);
                return;
              }
              u("PAY"), a(parseFloat(g.toFixed(6)));
            }
          }, [g, d, a, l, u, s]),
            (0, n.useEffect)(() => {
              if ("RECEIVE" === m.current) {
                if ((s(!0), "" === p)) {
                  l(0), a(0);
                  return;
                }
                u("RECEIVE"), isNaN(y) || l(y);
              }
            }, [y, p, l, a, u, s]),
            (0, n.useEffect)(() => {
              "PAY" !== m.current && f(parseFloat(o.toFixed(6)).toString());
            }, [o]),
            (0, n.useEffect)(() => {
              "RECEIVE" !== m.current && h(r(i));
            }, [i]);
          let E = (e) => {
            if ("" === e) return !0;
            let t = Number(e);
            return !isNaN(t) && t >= 0;
          };
          return {
            localPayAmount: d,
            localReceiveAmount: p,
            setLocalPayAmount: (e) => {
              E(e) && ((m.current = "PAY"), f(e));
            },
            setLocalReceiveAmount: (e) => {
              E(e) && ((m.current = "RECEIVE"), h(e));
            },
            debouncedPayAmount: g,
            debouncedReceiveAmount: y,
            clearAmounts: () => {
              (m.current = null), f(""), h(""), a(0), l(0);
            },
            setAmounts: (e, t) => {
              (m.current = null), f(e.toString()), h(t.toString()), a(e), l(t);
            },
            isValidNumber: E,
          };
        };
    },
    70827: (e) => {
      "use strict";
      e.s({ _: () => n }, 70827);
      var t = e.i(539139);
      function n(e, n) {
        var r = (0, t._)(e, n, "update");
        if (r.set) {
          if (!r.get)
            throw TypeError("attempted to read set only private field");
          return (
            "__destrWrapper" in r ||
              (r.__destrWrapper = {
                set value(v) {
                  r.set.call(e, v);
                },
                get value() {
                  return r.get.call(e);
                },
              }),
            r.__destrWrapper
          );
        }
        if (!r.writable)
          throw TypeError("attempted to set read only private field");
        return r;
      }
    },
    917402: (e) => {
      "use strict";
      e.s({ Mutation: () => p, getDefaultState: () => h });
      var t,
        n,
        r,
        o,
        i = e.i(632859),
        a = e.i(526050),
        l = e.i(607618),
        u = e.i(238193),
        s = e.i(526350),
        c = e.i(14047),
        d = e.i(667505),
        f = e.i(528593),
        p =
          ((t = new WeakMap()),
          (n = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakSet()),
          class extends d.Removable {
            setOptions(e) {
              (this.options = e), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
              return this.options.meta;
            }
            addObserver(e) {
              (0, i._)(this, t).includes(e) ||
                ((0, i._)(this, t).push(e),
                this.clearGcTimeout(),
                (0, i._)(this, n).notify({
                  type: "observerAdded",
                  mutation: this,
                  observer: e,
                }));
            }
            removeObserver(e) {
              (0, l._)(
                this,
                t,
                (0, i._)(this, t).filter((t) => t !== e)
              ),
                this.scheduleGc(),
                (0, i._)(this, n).notify({
                  type: "observerRemoved",
                  mutation: this,
                  observer: e,
                });
            }
            optionalRemove() {
              (0, i._)(this, t).length ||
                ("pending" === this.state.status
                  ? this.scheduleGc()
                  : (0, i._)(this, n).remove(this));
            }
            continue() {
              var e, t;
              return null !=
                (t = null == (e = (0, i._)(this, r)) ? void 0 : e.continue())
                ? t
                : this.execute(this.state.variables);
            }
            async execute(e) {
              var t, a, s, c, d, p, h, g, y, E, w, b, C, _, N, R, S, x, P, A, D;
              let T = () => {
                (0, u._)(this, o, m).call(this, { type: "continue" });
              };
              (0, l._)(
                this,
                r,
                (0, f.createRetryer)({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(e)
                      : Promise.reject(Error("No mutationFn found")),
                  onFail: (e, t) => {
                    (0, u._)(this, o, m).call(this, {
                      type: "failed",
                      failureCount: e,
                      error: t,
                    });
                  },
                  onPause: () => {
                    (0, u._)(this, o, m).call(this, { type: "pause" });
                  },
                  onContinue: T,
                  retry: null != (t = this.options.retry) ? t : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                  canRun: () => (0, i._)(this, n).canRun(this),
                })
              );
              let M = "pending" === this.state.status,
                I = !(0, i._)(this, r).canStart();
              try {
                if (M) T();
                else {
                  (0, u._)(this, o, m).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: I,
                  }),
                    await (null == (E = (w = (0, i._)(this, n).config).onMutate)
                      ? void 0
                      : E.call(w, e, this));
                  let t = await (null == (b = (C = this.options).onMutate)
                    ? void 0
                    : b.call(C, e));
                  t !== this.state.context &&
                    (0, u._)(this, o, m).call(this, {
                      type: "pending",
                      context: t,
                      variables: e,
                      isPaused: I,
                    });
                }
                let t = await (0, i._)(this, r).start();
                return (
                  await (null == (a = (s = (0, i._)(this, n).config).onSuccess)
                    ? void 0
                    : a.call(s, t, e, this.state.context, this)),
                  await (null == (c = (d = this.options).onSuccess)
                    ? void 0
                    : c.call(d, t, e, this.state.context)),
                  await (null == (p = (h = (0, i._)(this, n).config).onSettled)
                    ? void 0
                    : p.call(
                        h,
                        t,
                        null,
                        this.state.variables,
                        this.state.context,
                        this
                      )),
                  await (null == (g = (y = this.options).onSettled)
                    ? void 0
                    : g.call(y, t, null, e, this.state.context)),
                  (0, u._)(this, o, m).call(this, { type: "success", data: t }),
                  t
                );
              } catch (t) {
                try {
                  throw (
                    (await (null == (_ = (N = (0, i._)(this, n).config).onError)
                      ? void 0
                      : _.call(N, t, e, this.state.context, this)),
                    await (null == (R = (S = this.options).onError)
                      ? void 0
                      : R.call(S, t, e, this.state.context)),
                    await (null ==
                    (x = (P = (0, i._)(this, n).config).onSettled)
                      ? void 0
                      : x.call(
                          P,
                          void 0,
                          t,
                          this.state.variables,
                          this.state.context,
                          this
                        )),
                    await (null == (A = (D = this.options).onSettled)
                      ? void 0
                      : A.call(D, void 0, t, e, this.state.context)),
                    t)
                  );
                } finally {
                  (0, u._)(this, o, m).call(this, { type: "error", error: t });
                }
              } finally {
                (0, i._)(this, n).runNext(this);
              }
            }
            constructor(e) {
              super(),
                (0, s._)(this, o),
                (0, a._)(this, t, { writable: !0, value: void 0 }),
                (0, a._)(this, n, { writable: !0, value: void 0 }),
                (0, a._)(this, r, { writable: !0, value: void 0 }),
                (this.mutationId = e.mutationId),
                (0, l._)(this, n, e.mutationCache),
                (0, l._)(this, t, []),
                (this.state = e.state || h()),
                this.setOptions(e.options),
                this.scheduleGc();
            }
          });
      function h() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
      function m(e) {
        (this.state = ((t) => {
          switch (e.type) {
            case "failed":
              return {
                ...t,
                failureCount: e.failureCount,
                failureReason: e.error,
              };
            case "pause":
              return { ...t, isPaused: !0 };
            case "continue":
              return { ...t, isPaused: !1 };
            case "pending":
              return {
                ...t,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...t,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...t,
                data: void 0,
                error: e.error,
                failureCount: t.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error",
              };
          }
        })(this.state)),
          c.notifyManager.batch(() => {
            (0, i._)(this, t).forEach((t) => {
              t.onMutationUpdate(e);
            }),
              (0, i._)(this, n).notify({
                mutation: this,
                type: "updated",
                action: e,
              });
          });
      }
    },
    867430: (e) => {
      "use strict";
      function t(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let o = e[n];
        return "function" == typeof o ? o : (n) => t(e, n);
      }
      e.s({ getAction: () => t });
    },
    341968: (e) => {
      "use strict";
      e.s({ reconnect: () => n });
      let t = !1;
      async function n(e) {
        var n, r;
        let o,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t) return [];
        (t = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let a = [];
        if (null == (n = i.connectors) ? void 0 : n.length)
          for (let t of i.connectors) {
            let n;
            (n = "function" == typeof t ? e._internal.connectors.setup(t) : t),
              a.push(n);
          }
        else a.push(...e.connectors);
        try {
          o = await (null == (r = e.storage)
            ? void 0
            : r.getItem("recentConnectorId"));
        } catch (e) {}
        let l = {};
        for (let [, t] of e.state.connections) l[t.connector.id] = 1;
        o && (l[o] = 0);
        let u =
            Object.keys(l).length > 0
              ? [...a].sort((e, t) => {
                  var n, r;
                  return (
                    (null != (n = l[e.id]) ? n : 10) -
                    (null != (r = l[t.id]) ? r : 10)
                  );
                })
              : a,
          s = !1,
          c = [],
          d = [];
        for (let t of u) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || d.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(s ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: s ? e.current : t.uid, connections: n };
            }),
            c.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            d.push(n),
            (s = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (s
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (t = !1),
          c
        );
      }
    },
    35676: [
      (e) => {
        "use strict";
        e.s({ sendTransaction: () => s }, 35676);
        var t = e.i(913948),
          n = e.i(867430);
        e.s({ getConnectorClient: () => u }, 457885);
        var r = e.i(233349),
          o = e.i(77619),
          i = e.i(549798),
          a = e.i(326875),
          l = e.i(991315);
        async function u(e) {
          var t, n;
          let u,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          if (s.connector) {
            let { connector: t } = s;
            if (
              "reconnecting" === e.state.status &&
              !t.getAccounts &&
              !t.getChainId
            )
              throw new l.ConnectorUnavailableReconnectingError({
                connector: t,
              });
            let [n, r] = await Promise.all([
              t.getAccounts().catch((e) => {
                if (null === s.account) return [];
                throw e;
              }),
              t.getChainId(),
            ]);
            u = { accounts: n, chainId: r, connector: t };
          } else u = e.state.connections.get(e.state.current);
          if (!u) throw new l.ConnectorNotConnectedError();
          let c = null != (t = s.chainId) ? t : u.chainId,
            d = await u.connector.getChainId();
          if (d !== u.chainId)
            throw new l.ConnectorChainMismatchError({
              connectionChainId: u.chainId,
              connectorChainId: d,
            });
          let f = u.connector;
          if (f.getClient) return f.getClient({ chainId: c });
          let p = (0, a.parseAccount)(
            null != (n = s.account) ? n : u.accounts[0]
          );
          if (
            (p && (p.address = (0, i.getAddress)(p.address)),
            s.account &&
              !u.accounts.some(
                (e) => e.toLowerCase() === p.address.toLowerCase()
              ))
          )
            throw new l.ConnectorAccountNotFoundError({
              address: p.address,
              connector: f,
            });
          let h = e.chains.find((e) => e.id === c),
            m = await u.connector.getProvider({ chainId: c });
          return (0, r.createClient)({
            account: p,
            chain: h,
            name: "Connector Client",
            transport: (e) => (0, o.custom)(m)({ ...e, retryCount: 0 }),
          });
        }
        async function s(e, r) {
          var o;
          let i,
            { account: a, chainId: l, connector: s, ...c } = r;
          i =
            "object" == typeof a && (null == a ? void 0 : a.type) === "local"
              ? e.getClient({ chainId: l })
              : await u(e, {
                  account: null != a ? a : void 0,
                  chainId: l,
                  connector: s,
                });
          let d = (0, n.getAction)(i, t.sendTransaction, "sendTransaction");
          return await d({
            ...c,
            ...(a ? { account: a } : {}),
            chain: l ? { id: l } : null,
            gas: null != (o = c.gas) ? o : void 0,
          });
        }
      },
      [457885],
    ],
    292044: (e) => {
      "use strict";
      e.s({ chainConfig: () => n });
      var t = e.i(174519);
      let n = {
        appKit: {
          projectId: "380ffdab49e528fe2f4e8f048fb5bb0c",
          projectName: "PudgyPandas",
        },
        rpc: {
          ethereum: t.default.env.RPC_ETHEREUM || "",
          solana: t.default.env.RPC_SOLANA || "",
          bsc: t.default.env.RPC_BSC || "",
        },
      };
    },
    481104: (e) => {
      "use strict";
      e.s({ WagmiContext: () => o, WagmiProvider: () => i }, 481104);
      var t = e.i(756253),
        n = e.i(341968);
      function r(e) {
        let {
            children: r,
            config: o,
            initialState: i,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: l } = (function (e, t) {
            let { initialState: r, reconnectOnMount: o } = t;
            return (
              r &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...r,
                  chainId: e.chains.some((e) => e.id === r.chainId)
                    ? r.chainId
                    : e.chains[0].id,
                  connections: o ? r.connections : new Map(),
                  status: o ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        var n, r;
                        let o = new Set();
                        for (let e of null != t ? t : [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              o.add(t);
                        let i = [];
                        for (let t of null !=
                        (r =
                          null == (n = e._internal.mipd)
                            ? void 0
                            : n.getProviders())
                          ? r
                          : []) {
                          if (o.has(t.info.rdns)) continue;
                          let n =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            r = e._internal.connectors.setup(n);
                          i.push(r);
                        }
                        return [...t, ...i];
                      })),
                    o
                      ? (0, n.reconnect)(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(o, { initialState: i, reconnectOnMount: a });
        o._internal.ssr || l();
        let u = (0, t.useRef)(!0);
        return (
          (0, t.useEffect)(() => {
            if (u.current && o._internal.ssr)
              return (
                l(),
                () => {
                  u.current = !1;
                }
              );
          }, []),
          r
        );
      }
      let o = (0, t.createContext)(void 0);
      function i(e) {
        let { children: n, config: i } = e;
        return (0, t.createElement)(
          r,
          e,
          (0, t.createElement)(o.Provider, { value: i }, n)
        );
      }
    },
    547957: (e) => {
      "use strict";
      e.s({ ConnectionContext: () => n, useConnection: () => r });
      var t = e.i(756253);
      let n = (0, t.createContext)({});
      function r() {
        return (0, t.useContext)(n);
      }
    },
  },
]);

//# sourceMappingURL=763ae53aad923579.js.map
