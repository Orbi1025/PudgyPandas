(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    184637: [
      (e) => {
        "use strict";
        let t;
        function n(e, t) {
          let n;
          try {
            n = e();
          } catch (e) {
            return;
          }
          return {
            getItem: (e) => {
              var a;
              let r = (e) =>
                  null === e
                    ? null
                    : JSON.parse(e, null == t ? void 0 : t.reviver),
                i = null != (a = n.getItem(e)) ? a : null;
              return i instanceof Promise ? i.then(r) : r(i);
            },
            setItem: (e, a) =>
              n.setItem(e, JSON.stringify(a, null == t ? void 0 : t.replacer)),
            removeItem: (e) => n.removeItem(e),
          };
        }
        e.s({ createJSONStorage: () => n, persist: () => r }, 184637);
        let a = (e) => (t) => {
            try {
              let n = e(t);
              if (n instanceof Promise) return n;
              return {
                then: (e) => a(e)(n),
                catch(e) {
                  return this;
                },
              };
            } catch (e) {
              return {
                then(e) {
                  return this;
                },
                catch: (t) => a(t)(e),
              };
            }
          },
          r = (e, t) => (r, i, o) => {
            let s,
              c = {
                storage: n(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
              },
              u = !1,
              l = new Set(),
              f = new Set(),
              d = c.storage;
            if (!d)
              return e(
                function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  console.warn(
                    "[zustand persist middleware] Unable to update item '".concat(
                      c.name,
                      "', the given storage is currently unavailable."
                    )
                  ),
                    r(...t);
                },
                i,
                o
              );
            let p = () => {
                let e = c.partialize({ ...i() });
                return d.setItem(c.name, { state: e, version: c.version });
              },
              m = o.setState;
            o.setState = (e, t) => {
              m(e, t), p();
            };
            let y = e(
              function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                r(...t), p();
              },
              i,
              o
            );
            o.getInitialState = () => y;
            let g = () => {
              var e, t;
              if (!d) return;
              (u = !1),
                l.forEach((e) => {
                  var t;
                  return e(null != (t = i()) ? t : y);
                });
              let n =
                (null == (t = c.onRehydrateStorage)
                  ? void 0
                  : t.call(c, null != (e = i()) ? e : y)) || void 0;
              return a(d.getItem.bind(d))(c.name)
                .then((e) => {
                  if (e)
                    if ("number" != typeof e.version || e.version === c.version)
                      return [!1, e.state];
                    else {
                      if (c.migrate) {
                        let t = c.migrate(e.state, e.version);
                        return t instanceof Promise
                          ? t.then((e) => [!0, e])
                          : [!0, t];
                      }
                      console.error(
                        "State loaded from storage couldn't be migrated since no migrate function was provided"
                      );
                    }
                  return [!1, void 0];
                })
                .then((e) => {
                  var t;
                  let [n, a] = e;
                  if ((r((s = c.merge(a, null != (t = i()) ? t : y)), !0), n))
                    return p();
                })
                .then(() => {
                  null == n || n(s, void 0),
                    (s = i()),
                    (u = !0),
                    f.forEach((e) => e(s));
                })
                .catch((e) => {
                  null == n || n(void 0, e);
                });
            };
            return (
              (o.persist = {
                setOptions: (e) => {
                  (c = { ...c, ...e }), e.storage && (d = e.storage);
                },
                clearStorage: () => {
                  null == d || d.removeItem(c.name);
                },
                getOptions: () => c,
                rehydrate: () => g(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                  l.add(e),
                  () => {
                    l.delete(e);
                  }
                ),
                onFinishHydration: (e) => (
                  f.add(e),
                  () => {
                    f.delete(e);
                  }
                ),
              }),
              c.skipHydration || g(),
              s || y
            );
          };
        e.s({ createStore: () => o }, 91075);
        let i = (e) => {
            let t,
              n = new Set(),
              a = (e, a) => {
                let r = "function" == typeof e ? e(t) : e;
                if (!Object.is(r, t)) {
                  let e = t;
                  (t = (null != a ? a : "object" != typeof r || null === r)
                    ? r
                    : Object.assign({}, t, r)),
                    n.forEach((n) => n(t, e));
                }
              },
              r = () => t,
              i = {
                setState: a,
                getState: r,
                getInitialState: () => o,
                subscribe: (e) => (n.add(e), () => n.delete(e)),
              },
              o = (t = e(a, r, i));
            return i;
          },
          o = (e) => (e ? i(e) : i);
        e.s(
          {
            Fragment: () => E,
            createElement: () => P,
            h: () => P,
            options: () => c,
            render: () => z,
          },
          844841
        );
        var s,
          c,
          u,
          l,
          f,
          d,
          p,
          m,
          y,
          g,
          b = {},
          _ = [],
          h =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
          v = Array.isArray;
        function w(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function x(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        function P(e, t, n) {
          var a,
            r,
            i,
            o = {};
          for (i in t)
            "key" == i ? (a = t[i]) : "ref" == i ? (r = t[i]) : (o[i] = t[i]);
          if (
            (arguments.length > 2 &&
              (o.children = arguments.length > 3 ? s.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
          )
            for (i in e.defaultProps)
              void 0 === o[i] && (o[i] = e.defaultProps[i]);
          return O(e, o, a, r, null);
        }
        function O(e, t, n, a, r) {
          var i = {
            type: e,
            props: t,
            key: n,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == r ? ++u : r,
            __i: -1,
            __u: 0,
          };
          return null == r && null != c.vnode && c.vnode(i), i;
        }
        function E(e) {
          return e.children;
        }
        function S(e, t) {
          (this.props = e), (this.context = t);
        }
        function G(e, t) {
          if (null == t) return e.__ ? G(e.__, e.__i + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? G(e) : null;
        }
        function B(e) {
          ((!e.__d && (e.__d = !0) && l.push(e) && !A.__r++) ||
            f !== c.debounceRendering) &&
            ((f = c.debounceRendering) || d)(A);
        }
        function A() {
          var e, t, n, a, r, i, o, s;
          for (l.sort(p); (e = l.shift()); )
            e.__d &&
              ((t = l.length),
              (a = void 0),
              (i = (r = (n = e).__v).__e),
              (o = []),
              (s = []),
              n.__P &&
                (((a = w({}, r)).__v = r.__v + 1),
                c.vnode && c.vnode(a),
                k(
                  n.__P,
                  a,
                  r,
                  n.__n,
                  n.__P.namespaceURI,
                  32 & r.__u ? [i] : null,
                  o,
                  null == i ? G(r) : i,
                  !!(32 & r.__u),
                  s
                ),
                (a.__v = r.__v),
                (a.__.__k[a.__i] = a),
                L(o, a, s),
                a.__e != i &&
                  (function e(t) {
                    var n, a;
                    if (null != (t = t.__) && null != t.__c) {
                      for (
                        t.__e = t.__c.base = null, n = 0;
                        n < t.__k.length;
                        n++
                      )
                        if (null != (a = t.__k[n]) && null != a.__e) {
                          t.__e = t.__c.base = a.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(a)),
              l.length > t && l.sort(p));
          A.__r = 0;
        }
        function I(e, t, n, a, r, i, o, s, u, l, f) {
          var d,
            p,
            m,
            y,
            g,
            h = (a && a.__k) || _,
            w = t.length;
          for (
            n.__d = u,
              (function (e, t, n) {
                var a,
                  r,
                  i,
                  o,
                  s,
                  u = t.length,
                  l = n.length,
                  f = l,
                  d = 0;
                for (e.__k = [], a = 0; a < u; a++)
                  null != (r = t[a]) &&
                  "boolean" != typeof r &&
                  "function" != typeof r
                    ? ((o = a + d),
                      ((r = e.__k[a] =
                        "string" == typeof r ||
                        "number" == typeof r ||
                        "bigint" == typeof r ||
                        r.constructor == String
                          ? O(null, r, null, null, null)
                          : v(r)
                          ? O(E, { children: r }, null, null, null)
                          : void 0 === r.constructor && r.__b > 0
                          ? O(
                              r.type,
                              r.props,
                              r.key,
                              r.ref ? r.ref : null,
                              r.__v
                            )
                          : r).__ = e),
                      (r.__b = e.__b + 1),
                      (i = null),
                      -1 !==
                        (s = r.__i =
                          (function (e, t, n, a) {
                            var r = e.key,
                              i = e.type,
                              o = n - 1,
                              s = n + 1,
                              c = t[n];
                            if (
                              null === c ||
                              (c &&
                                r == c.key &&
                                i === c.type &&
                                0 == (131072 & c.__u))
                            )
                              return n;
                            if (a > +(null != c && 0 == (131072 & c.__u)))
                              for (; o >= 0 || s < t.length; ) {
                                if (o >= 0) {
                                  if (
                                    (c = t[o]) &&
                                    0 == (131072 & c.__u) &&
                                    r == c.key &&
                                    i === c.type
                                  )
                                    return o;
                                  o--;
                                }
                                if (s < t.length) {
                                  if (
                                    (c = t[s]) &&
                                    0 == (131072 & c.__u) &&
                                    r == c.key &&
                                    i === c.type
                                  )
                                    return s;
                                  s++;
                                }
                              }
                            return -1;
                          })(r, n, o, f)) &&
                        (f--, (i = n[s]) && (i.__u |= 131072)),
                      null == i || null === i.__v
                        ? (-1 == s && d--,
                          "function" != typeof r.type && (r.__u |= 65536))
                        : s !== o &&
                          (s == o - 1
                            ? d--
                            : s == o + 1
                            ? d++
                            : (s > o ? d-- : d++, (r.__u |= 65536))))
                    : (r = e.__k[a] = null);
                if (f)
                  for (a = 0; a < l; a++)
                    null != (i = n[a]) &&
                      0 == (131072 & i.__u) &&
                      (i.__e == e.__d && (e.__d = G(i)),
                      (function e(t, n, a) {
                        var r, i;
                        if (
                          (c.unmount && c.unmount(t),
                          (r = t.ref) &&
                            ((r.current && r.current !== t.__e) ||
                              F(r, null, n)),
                          null != (r = t.__c))
                        ) {
                          if (r.componentWillUnmount)
                            try {
                              r.componentWillUnmount();
                            } catch (e) {
                              c.__e(e, n);
                            }
                          r.base = r.__P = null;
                        }
                        if ((r = t.__k))
                          for (i = 0; i < r.length; i++)
                            r[i] &&
                              e(r[i], n, a || "function" != typeof t.type);
                        a || x(t.__e), (t.__c = t.__ = t.__e = t.__d = void 0);
                      })(i, i));
              })(n, t, h),
              u = n.__d,
              d = 0;
            d < w;
            d++
          )
            null != (m = n.__k[d]) &&
              ((p = -1 === m.__i ? b : h[m.__i] || b),
              (m.__i = d),
              k(e, m, p, r, i, o, s, u, l, f),
              (y = m.__e),
              m.ref &&
                p.ref != m.ref &&
                (p.ref && F(p.ref, null, m), f.push(m.ref, m.__c || y, m)),
              null == g && null != y && (g = y),
              65536 & m.__u || p.__k === m.__k
                ? (u = (function e(t, n, a) {
                    var r, i;
                    if ("function" == typeof t.type) {
                      for (r = t.__k, i = 0; r && i < r.length; i++)
                        r[i] && ((r[i].__ = t), (n = e(r[i], n, a)));
                      return n;
                    }
                    t.__e != n &&
                      (n && t.type && !a.contains(n) && (n = G(t)),
                      a.insertBefore(t.__e, n || null),
                      (n = t.__e));
                    do n = n && n.nextSibling;
                    while (null != n && 8 === n.nodeType);
                    return n;
                  })(m, u, e))
                : "function" == typeof m.type && void 0 !== m.__d
                ? (u = m.__d)
                : y && (u = y.nextSibling),
              (m.__d = void 0),
              (m.__u &= -196609));
          (n.__d = u), (n.__e = g);
        }
        function D(e, t, n) {
          "-" === t[0]
            ? e.setProperty(t, null == n ? "" : n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || h.test(t)
                  ? n
                  : n + "px");
        }
        function C(e, t, n, a, r) {
          var i;
          e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof a && (e.style.cssText = a = ""), a))
                for (t in a) (n && t in n) || D(e.style, t, "");
              if (n) for (t in n) (a && n[t] === a[t]) || D(e.style, t, n[t]);
            }
          else if ("o" === t[0] && "n" === t[1])
            (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
              (t =
                t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                  ? t.toLowerCase().slice(2)
                  : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + i] = n),
              n
                ? a
                  ? (n.u = a.u)
                  : ((n.u = m), e.addEventListener(t, i ? g : y, i))
                : e.removeEventListener(t, i ? g : y, i);
          else {
            if ("http://www.w3.org/2000/svg" == r)
              t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "width" != t &&
              "height" != t &&
              "href" != t &&
              "list" != t &&
              "form" != t &&
              "tabIndex" != t &&
              "download" != t &&
              "rowSpan" != t &&
              "colSpan" != t &&
              "role" != t &&
              "popover" != t &&
              t in e
            )
              try {
                e[t] = null == n ? "" : n;
                break e;
              } catch (e) {}
            "function" == typeof n ||
              (null == n || (!1 === n && "-" !== t[4])
                ? e.removeAttribute(t)
                : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
          }
        }
        function U(e) {
          return function (t) {
            if (this.l) {
              var n = this.l[t.type + e];
              if (null == t.t) t.t = m++;
              else if (t.t < n.u) return;
              return n(c.event ? c.event(t) : t);
            }
          };
        }
        function k(e, t, n, a, r, i, o, u, l, f) {
          var d,
            p,
            m,
            y,
            g,
            _,
            h,
            P,
            O,
            B,
            A,
            D,
            U,
            k,
            L,
            F,
            z = t.type;
          if (void 0 !== t.constructor) return null;
          128 & n.__u && ((l = !!(32 & n.__u)), (i = [(u = t.__e = n.__e)])),
            (d = c.__b) && d(t);
          e: if ("function" == typeof z)
            try {
              if (
                ((P = t.props),
                (O = "prototype" in z && z.prototype.render),
                (B = (d = z.contextType) && a[d.__c]),
                (A = d ? (B ? B.props.value : d.__) : a),
                n.__c
                  ? (h = (p = t.__c = n.__c).__ = p.__E)
                  : (O
                      ? (t.__c = p = new z(P, A))
                      : ((t.__c = p = new S(P, A)),
                        (p.constructor = z),
                        (p.render = T)),
                    B && B.sub(p),
                    (p.props = P),
                    p.state || (p.state = {}),
                    (p.context = A),
                    (p.__n = a),
                    (m = p.__d = !0),
                    (p.__h = []),
                    (p._sb = [])),
                O && null == p.__s && (p.__s = p.state),
                O &&
                  null != z.getDerivedStateFromProps &&
                  (p.__s == p.state && (p.__s = w({}, p.__s)),
                  w(p.__s, z.getDerivedStateFromProps(P, p.__s))),
                (y = p.props),
                (g = p.state),
                (p.__v = t),
                m)
              )
                O &&
                  null == z.getDerivedStateFromProps &&
                  null != p.componentWillMount &&
                  p.componentWillMount(),
                  O &&
                    null != p.componentDidMount &&
                    p.__h.push(p.componentDidMount);
              else {
                if (
                  (O &&
                    null == z.getDerivedStateFromProps &&
                    P !== y &&
                    null != p.componentWillReceiveProps &&
                    p.componentWillReceiveProps(P, A),
                  !p.__e &&
                    ((null != p.shouldComponentUpdate &&
                      !1 === p.shouldComponentUpdate(P, p.__s, A)) ||
                      t.__v === n.__v))
                ) {
                  for (
                    t.__v !== n.__v &&
                      ((p.props = P), (p.state = p.__s), (p.__d = !1)),
                      t.__e = n.__e,
                      t.__k = n.__k,
                      t.__k.some(function (e) {
                        e && (e.__ = t);
                      }),
                      D = 0;
                    D < p._sb.length;
                    D++
                  )
                    p.__h.push(p._sb[D]);
                  (p._sb = []), p.__h.length && o.push(p);
                  break e;
                }
                null != p.componentWillUpdate &&
                  p.componentWillUpdate(P, p.__s, A),
                  O &&
                    null != p.componentDidUpdate &&
                    p.__h.push(function () {
                      p.componentDidUpdate(y, g, _);
                    });
              }
              if (
                ((p.context = A),
                (p.props = P),
                (p.__P = e),
                (p.__e = !1),
                (U = c.__r),
                (k = 0),
                O)
              ) {
                for (
                  p.state = p.__s,
                    p.__d = !1,
                    U && U(t),
                    d = p.render(p.props, p.state, p.context),
                    L = 0;
                  L < p._sb.length;
                  L++
                )
                  p.__h.push(p._sb[L]);
                p._sb = [];
              } else
                do
                  (p.__d = !1),
                    U && U(t),
                    (d = p.render(p.props, p.state, p.context)),
                    (p.state = p.__s);
                while (p.__d && ++k < 25);
              (p.state = p.__s),
                null != p.getChildContext &&
                  (a = w(w({}, a), p.getChildContext())),
                O &&
                  !m &&
                  null != p.getSnapshotBeforeUpdate &&
                  (_ = p.getSnapshotBeforeUpdate(y, g)),
                I(
                  e,
                  v(
                    (F =
                      null != d && d.type === E && null == d.key
                        ? d.props.children
                        : d)
                  )
                    ? F
                    : [F],
                  t,
                  n,
                  a,
                  r,
                  i,
                  o,
                  u,
                  l,
                  f
                ),
                (p.base = t.__e),
                (t.__u &= -161),
                p.__h.length && o.push(p),
                h && (p.__E = p.__ = null);
            } catch (e) {
              if (((t.__v = null), l || null != i)) {
                for (
                  t.__u |= l ? 160 : 32;
                  u && 8 === u.nodeType && u.nextSibling;

                )
                  u = u.nextSibling;
                (i[i.indexOf(u)] = null), (t.__e = u);
              } else (t.__e = n.__e), (t.__k = n.__k);
              c.__e(e, t, n);
            }
          else
            null == i && t.__v === n.__v
              ? ((t.__k = n.__k), (t.__e = n.__e))
              : (t.__e = (function (e, t, n, a, r, i, o, u, l) {
                  var f,
                    d,
                    p,
                    m,
                    y,
                    g,
                    _,
                    h = n.props,
                    w = t.props,
                    P = t.type;
                  if (
                    ("svg" === P
                      ? (r = "http://www.w3.org/2000/svg")
                      : "math" === P
                      ? (r = "http://www.w3.org/1998/Math/MathML")
                      : r || (r = "http://www.w3.org/1999/xhtml"),
                    null != i)
                  ) {
                    for (f = 0; f < i.length; f++)
                      if (
                        (y = i[f]) &&
                        "setAttribute" in y == !!P &&
                        (P ? y.localName === P : 3 === y.nodeType)
                      ) {
                        (e = y), (i[f] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null === P) return document.createTextNode(w);
                    (e = document.createElementNS(r, P, w.is && w)),
                      u && (c.__m && c.__m(t, i), (u = !1)),
                      (i = null);
                  }
                  if (null === P)
                    h === w || (u && e.data === w) || (e.data = w);
                  else {
                    if (
                      ((i = i && s.call(e.childNodes)),
                      (h = n.props || b),
                      !u && null != i)
                    )
                      for (h = {}, f = 0; f < e.attributes.length; f++)
                        h[(y = e.attributes[f]).name] = y.value;
                    for (f in h)
                      if (((y = h[f]), "children" == f));
                      else if ("dangerouslySetInnerHTML" == f) p = y;
                      else if (!(f in w)) {
                        if (
                          ("value" == f && "defaultValue" in w) ||
                          ("checked" == f && "defaultChecked" in w)
                        )
                          continue;
                        C(e, f, null, y, r);
                      }
                    for (f in w)
                      (y = w[f]),
                        "children" == f
                          ? (m = y)
                          : "dangerouslySetInnerHTML" == f
                          ? (d = y)
                          : "value" == f
                          ? (g = y)
                          : "checked" == f
                          ? (_ = y)
                          : (u && "function" != typeof y) ||
                            h[f] === y ||
                            C(e, f, y, h[f], r);
                    if (d)
                      u ||
                        (p &&
                          (d.__html === p.__html ||
                            d.__html === e.innerHTML)) ||
                        (e.innerHTML = d.__html),
                        (t.__k = []);
                    else if (
                      (p && (e.innerHTML = ""),
                      I(
                        e,
                        v(m) ? m : [m],
                        t,
                        n,
                        a,
                        "foreignObject" === P
                          ? "http://www.w3.org/1999/xhtml"
                          : r,
                        i,
                        o,
                        i ? i[0] : n.__k && G(n, 0),
                        u,
                        l
                      ),
                      null != i)
                    )
                      for (f = i.length; f--; ) x(i[f]);
                    u ||
                      ((f = "value"),
                      "progress" === P && null == g
                        ? e.removeAttribute("value")
                        : void 0 === g ||
                          (g === e[f] &&
                            ("progress" !== P || g) &&
                            ("option" !== P || g === h[f])) ||
                          C(e, f, g, h[f], r),
                      (f = "checked"),
                      void 0 !== _ && _ !== e[f] && C(e, f, _, h[f], r));
                  }
                  return e;
                })(n.__e, t, n, a, r, i, o, l, f));
          (d = c.diffed) && d(t);
        }
        function L(e, t, n) {
          t.__d = void 0;
          for (var a = 0; a < n.length; a++) F(n[a], n[++a], n[++a]);
          c.__c && c.__c(t, e),
            e.some(function (t) {
              try {
                (e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  });
              } catch (e) {
                c.__e(e, t.__v);
              }
            });
        }
        function F(e, t, n) {
          try {
            if ("function" == typeof e) {
              var a = "function" == typeof e.__u;
              a && e.__u(), (a && null == t) || (e.__u = e(t));
            } else e.current = t;
          } catch (e) {
            c.__e(e, n);
          }
        }
        function T(e, t, n) {
          return this.constructor(e, n);
        }
        function z(e, t, n) {
          var a, r, i, o;
          c.__ && c.__(e, t),
            (r = (a = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (i = []),
            (o = []),
            k(
              t,
              (e = ((!a && n) || t).__k = P(E, null, [e])),
              r || b,
              b,
              t.namespaceURI,
              !a && n
                ? [n]
                : r
                ? null
                : t.firstChild
                ? s.call(t.childNodes)
                : null,
              i,
              !a && n ? n : r ? r.__e : t.firstChild,
              a,
              o
            ),
            L(i, e, o);
        }
        (s = _.slice),
          (c = {
            __e: function (e, t, n, a) {
              for (var r, i, o; (t = t.__); )
                if ((r = t.__c) && !r.__)
                  try {
                    if (
                      ((i = r.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (r.setState(i.getDerivedStateFromError(e)),
                        (o = r.__d)),
                      null != r.componentDidCatch &&
                        (r.componentDidCatch(e, a || {}), (o = r.__d)),
                      o)
                    )
                      return (r.__E = r);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (u = 0),
          (S.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = w({}, this.state))),
              "function" == typeof e && (e = e(w({}, n), this.props)),
              e && w(n, e),
              null != e && this.__v && (t && this._sb.push(t), B(this));
          }),
          (S.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), B(this));
          }),
          (S.prototype.render = E),
          (l = []),
          (d =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (p = function (e, t) {
            return e.__v.__b - t.__v.__b;
          }),
          (A.__r = 0),
          (m = 0),
          (y = U(!1)),
          (g = U(!0)),
          e.s(
            { useEffect: () => ee, useMemo: () => et, useState: () => Q },
            929828
          );
        var j,
          H,
          M,
          V,
          N = 0,
          R = [],
          q = c,
          K = q.__b,
          W = q.__r,
          J = q.diffed,
          Y = q.__c,
          $ = q.unmount,
          X = q.__;
        function Z(e, t) {
          q.__h && q.__h(H, e, N || t), (N = 0);
          var n = H.__H || (H.__H = { __: [], __h: [] });
          return e >= n.__.length && n.__.push({}), n.__[e];
        }
        function Q(e) {
          return (
            (N = 1),
            (function (e, t, n) {
              var a = Z(j++, 2);
              if (
                ((a.t = e),
                !a.__c &&
                  ((a.__ = [
                    es(void 0, t),
                    function (e) {
                      var t = a.__N ? a.__N[0] : a.__[0],
                        n = a.t(t, e);
                      t !== n && ((a.__N = [n, a.__[1]]), a.__c.setState({}));
                    },
                  ]),
                  (a.__c = H),
                  !H.u))
              ) {
                var r = function (e, t, n) {
                  if (!a.__c.__H) return !0;
                  var r = a.__c.__H.__.filter(function (e) {
                    return !!e.__c;
                  });
                  if (
                    r.every(function (e) {
                      return !e.__N;
                    })
                  )
                    return !i || i.call(this, e, t, n);
                  var o = !1;
                  return (
                    r.forEach(function (e) {
                      if (e.__N) {
                        var t = e.__[0];
                        (e.__ = e.__N),
                          (e.__N = void 0),
                          t !== e.__[0] && (o = !0);
                      }
                    }),
                    !(!o && a.__c.props === e) && (!i || i.call(this, e, t, n))
                  );
                };
                H.u = !0;
                var i = H.shouldComponentUpdate,
                  o = H.componentWillUpdate;
                (H.componentWillUpdate = function (e, t, n) {
                  if (this.__e) {
                    var a = i;
                    (i = void 0), r(e, t, n), (i = a);
                  }
                  o && o.call(this, e, t, n);
                }),
                  (H.shouldComponentUpdate = r);
              }
              return a.__N || a.__;
            })(es, e)
          );
        }
        function ee(e, t) {
          var n = Z(j++, 3);
          !q.__s && eo(n.__H, t) && ((n.__ = e), (n.i = t), H.__H.__h.push(n));
        }
        function et(e, t) {
          var n = Z(j++, 7);
          return eo(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
        }
        function en() {
          for (var e; (e = R.shift()); )
            if (e.__P && e.__H)
              try {
                e.__H.__h.forEach(er), e.__H.__h.forEach(ei), (e.__H.__h = []);
              } catch (t) {
                (e.__H.__h = []), q.__e(t, e.__v);
              }
        }
        (q.__b = function (e) {
          (H = null), K && K(e);
        }),
          (q.__ = function (e, t) {
            e && t.__k && t.__k.__m && (e.__m = t.__k.__m), X && X(e, t);
          }),
          (q.__r = function (e) {
            W && W(e), (j = 0);
            var t = (H = e.__c).__H;
            t &&
              (M === H
                ? ((t.__h = []),
                  (H.__h = []),
                  t.__.forEach(function (e) {
                    e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                  }))
                : (t.__h.forEach(er),
                  t.__h.forEach(ei),
                  (t.__h = []),
                  (j = 0))),
              (M = H);
          }),
          (q.diffed = function (e) {
            J && J(e);
            var t = e.__c;
            t &&
              t.__H &&
              (t.__H.__h.length &&
                ((1 !== R.push(t) && V === q.requestAnimationFrame) ||
                  (
                    (V = q.requestAnimationFrame) ||
                    function (e) {
                      var t,
                        n = function () {
                          clearTimeout(a),
                            ea && cancelAnimationFrame(t),
                            setTimeout(e);
                        },
                        a = setTimeout(n, 100);
                      ea && (t = requestAnimationFrame(n));
                    }
                  )(en)),
              t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i), (e.i = void 0);
              })),
              (M = H = null);
          }),
          (q.__c = function (e, t) {
            t.some(function (e) {
              try {
                e.__h.forEach(er),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || ei(e);
                  }));
              } catch (n) {
                t.some(function (e) {
                  e.__h && (e.__h = []);
                }),
                  (t = []),
                  q.__e(n, e.__v);
              }
            }),
              Y && Y(e, t);
          }),
          (q.unmount = function (e) {
            $ && $(e);
            var t,
              n = e.__c;
            n &&
              n.__H &&
              (n.__H.__.forEach(function (e) {
                try {
                  er(e);
                } catch (e) {
                  t = e;
                }
              }),
              (n.__H = void 0),
              t && q.__e(t, n.__v));
          });
        var ea = "function" == typeof requestAnimationFrame;
        function er(e) {
          var t = H,
            n = e.__c;
          "function" == typeof n && ((e.__c = void 0), n()), (H = t);
        }
        function ei(e) {
          var t = H;
          (e.__c = e.__()), (H = t);
        }
        function eo(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
              return t !== e[n];
            })
          );
        }
        function es(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        e.s({ createBundlerClient: () => tw }, 177066);
        var ec = e.i(233349),
          eu = e.i(262267),
          el = e.i(326875),
          ef = e.i(31876),
          ed = e.i(477379),
          ep = e.i(631128),
          em = e.i(500780),
          ey = e.i(994790),
          eg = e.i(284034),
          eb = em;
        class e_ extends eb.BaseError {
          constructor({ cause: e }) {
            super("Smart Account is not deployed.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
                "- An incorrect `sender` address is provided.",
              ],
              name: "AccountNotDeployedError",
            });
          }
        }
        Object.defineProperty(e_, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa20/,
        });
        class eh extends eb.BaseError {
          constructor({ cause: e, data: t, message: n } = {}) {
            var a;
            let r =
              null == n || null == (a = n.replace("execution reverted: ", ""))
                ? void 0
                : a.replace("execution reverted", "");
            super(
              "Execution reverted ".concat(
                r ? "with reason: ".concat(r) : "for an unknown reason",
                "."
              ),
              { cause: e, name: "ExecutionRevertedError" }
            ),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.data = t);
          }
        }
        Object.defineProperty(eh, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32521,
        }),
          Object.defineProperty(eh, "message", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: /execution reverted/,
          });
        class ev extends eb.BaseError {
          constructor({ cause: e }) {
            super("Failed to send funds to beneficiary.", {
              cause: e,
              name: "FailedToSendToBeneficiaryError",
            });
          }
        }
        Object.defineProperty(ev, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa91/,
        });
        class ew extends eb.BaseError {
          constructor({ cause: e }) {
            super("Gas value overflowed.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- one of the gas values exceeded 2**120 (uint120)",
              ].filter(Boolean),
              name: "GasValuesOverflowError",
            });
          }
        }
        Object.defineProperty(ew, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa94/,
        });
        class ex extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "The `handleOps` function was called by the Bundler with a gas limit too low.",
              { cause: e, name: "HandleOpsOutOfGasError" }
            );
          }
        }
        Object.defineProperty(ex, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa95/,
        });
        class eP extends eb.BaseError {
          constructor({ cause: e, factory: t, factoryData: n, initCode: a }) {
            super("Failed to simulate deployment for Smart Account.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- Invalid `factory`/`factoryData` or `initCode` properties are present",
                "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
                "- Smart Account deployment execution reverted with an error\n",
                t && "factory: ".concat(t),
                n && "factoryData: ".concat(n),
                a && "initCode: ".concat(a),
              ].filter(Boolean),
              name: "InitCodeFailedError",
            });
          }
        }
        Object.defineProperty(eP, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa13/,
        });
        class eO extends eb.BaseError {
          constructor({ cause: e, factory: t, factoryData: n, initCode: a }) {
            super(
              "Smart Account initialization implementation did not create an account.",
              {
                cause: e,
                metaMessages: [
                  "This could arise when:",
                  "- `factory`/`factoryData` or `initCode` properties are invalid",
                  "- Smart Account initialization implementation is incorrect\n",
                  t && "factory: ".concat(t),
                  n && "factoryData: ".concat(n),
                  a && "initCode: ".concat(a),
                ].filter(Boolean),
                name: "InitCodeMustCreateSenderError",
              }
            );
          }
        }
        Object.defineProperty(eO, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa15/,
        });
        class eE extends eb.BaseError {
          constructor({
            cause: e,
            factory: t,
            factoryData: n,
            initCode: a,
            sender: r,
          }) {
            super(
              "Smart Account initialization implementation does not return the expected sender.",
              {
                cause: e,
                metaMessages: [
                  "This could arise when:",
                  "Smart Account initialization implementation does not return a sender address\n",
                  t && "factory: ".concat(t),
                  n && "factoryData: ".concat(n),
                  a && "initCode: ".concat(a),
                  r && "sender: ".concat(r),
                ].filter(Boolean),
                name: "InitCodeMustReturnSenderError",
              }
            );
          }
        }
        Object.defineProperty(eE, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa14/,
        });
        class eS extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "Smart Account does not have sufficient funds to execute the User Operation.",
              {
                cause: e,
                metaMessages: [
                  "This could arise when:",
                  "- the Smart Account does not have sufficient funds to cover the required prefund, or",
                  "- a Paymaster was not provided",
                ].filter(Boolean),
                name: "InsufficientPrefundError",
              }
            );
          }
        }
        Object.defineProperty(eS, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa21/,
        });
        class eG extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "Bundler attempted to call an invalid function on the EntryPoint.",
              { cause: e, name: "InternalCallOnlyError" }
            );
          }
        }
        Object.defineProperty(eG, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa92/,
        });
        class eB extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "Bundler used an invalid aggregator for handling aggregated User Operations.",
              { cause: e, name: "InvalidAggregatorError" }
            );
          }
        }
        Object.defineProperty(eB, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa96/,
        });
        class eA extends eb.BaseError {
          constructor({ cause: e, nonce: t }) {
            super("Invalid Smart Account nonce used for User Operation.", {
              cause: e,
              metaMessages: [t && "nonce: ".concat(t)].filter(Boolean),
              name: "InvalidAccountNonceError",
            });
          }
        }
        Object.defineProperty(eA, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa25/,
        });
        class eI extends eb.BaseError {
          constructor({ cause: e }) {
            super("Bundler has not set a beneficiary address.", {
              cause: e,
              name: "InvalidBeneficiaryError",
            });
          }
        }
        Object.defineProperty(eI, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa90/,
        });
        class eD extends eb.BaseError {
          constructor({ cause: e }) {
            super("Invalid fields set on User Operation.", {
              cause: e,
              name: "InvalidFieldsError",
            });
          }
        }
        Object.defineProperty(eD, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32602,
        });
        class eC extends eb.BaseError {
          constructor({ cause: e, paymasterAndData: t }) {
            super("Paymaster properties provided are invalid.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the `paymasterAndData` property is of an incorrect length\n",
                t && "paymasterAndData: ".concat(t),
              ].filter(Boolean),
              name: "InvalidPaymasterAndDataError",
            });
          }
        }
        Object.defineProperty(eC, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa93/,
        });
        class eU extends eb.BaseError {
          constructor({ cause: e }) {
            super("Paymaster deposit for the User Operation is too low.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the Paymaster has deposited less than the expected amount via the `deposit` function",
              ].filter(Boolean),
              name: "PaymasterDepositTooLowError",
            });
          }
        }
        Object.defineProperty(eU, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32508,
        }),
          Object.defineProperty(eU, "message", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: /aa31/,
          });
        class ek extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "The `validatePaymasterUserOp` function on the Paymaster reverted.",
              { cause: e, name: "PaymasterFunctionRevertedError" }
            );
          }
        }
        Object.defineProperty(ek, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa33/,
        });
        class eL extends eb.BaseError {
          constructor({ cause: e }) {
            super("The Paymaster contract has not been deployed.", {
              cause: e,
              name: "PaymasterNotDeployedError",
            });
          }
        }
        Object.defineProperty(eL, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa30/,
        });
        class eF extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
              { cause: e, name: "PaymasterRateLimitError" }
            );
          }
        }
        Object.defineProperty(eF, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32504,
        });
        class eT extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
              { cause: e, name: "PaymasterStakeTooLowError" }
            );
          }
        }
        Object.defineProperty(eT, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32505,
        });
        class ez extends eb.BaseError {
          constructor({ cause: e }) {
            super("Paymaster `postOp` function reverted.", {
              cause: e,
              name: "PaymasterPostOpFunctionRevertedError",
            });
          }
        }
        Object.defineProperty(ez, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa50/,
        });
        class ej extends eb.BaseError {
          constructor({ cause: e, factory: t, factoryData: n, initCode: a }) {
            super("Smart Account has already been deployed.", {
              cause: e,
              metaMessages: [
                "Remove the following properties and try again:",
                t && "`factory`",
                n && "`factoryData`",
                a && "`initCode`",
              ].filter(Boolean),
              name: "SenderAlreadyConstructedError",
            });
          }
        }
        Object.defineProperty(ej, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa10/,
        });
        class eH extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).",
              { cause: e, name: "SignatureCheckFailedError" }
            );
          }
        }
        Object.defineProperty(eH, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32507,
        });
        class eM extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "The `validateUserOp` function on the Smart Account reverted.",
              { cause: e, name: "SmartAccountFunctionRevertedError" }
            );
          }
        }
        Object.defineProperty(eM, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa23/,
        });
        class eV extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "UserOperation rejected because account specified unsupported signature aggregator.",
              { cause: e, name: "UnsupportedSignatureAggregatorError" }
            );
          }
        }
        Object.defineProperty(eV, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32506,
        });
        class eN extends eb.BaseError {
          constructor({ cause: e }) {
            super("User Operation expired.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied",
              ].filter(Boolean),
              name: "UserOperationExpiredError",
            });
          }
        }
        Object.defineProperty(eN, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa22/,
        });
        class eR extends eb.BaseError {
          constructor({ cause: e }) {
            super("Paymaster for User Operation expired.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied",
              ].filter(Boolean),
              name: "UserOperationPaymasterExpiredError",
            });
          }
        }
        Object.defineProperty(eR, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa32/,
        });
        class eq extends eb.BaseError {
          constructor({ cause: e }) {
            super("Signature provided for the User Operation is invalid.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account",
              ].filter(Boolean),
              name: "UserOperationSignatureError",
            });
          }
        }
        Object.defineProperty(eq, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa24/,
        });
        class eK extends eb.BaseError {
          constructor({ cause: e }) {
            super("Signature provided for the User Operation is invalid.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster",
              ].filter(Boolean),
              name: "UserOperationPaymasterSignatureError",
            });
          }
        }
        Object.defineProperty(eK, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa34/,
        });
        class eW extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.",
              { cause: e, name: "UserOperationRejectedByEntryPointError" }
            );
          }
        }
        Object.defineProperty(eW, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32500,
        });
        class eJ extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "User Operation rejected by Paymaster's `validatePaymasterUserOp`.",
              { cause: e, name: "UserOperationRejectedByPaymasterError" }
            );
          }
        }
        Object.defineProperty(eJ, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32501,
        });
        class eY extends eb.BaseError {
          constructor({ cause: e }) {
            super("User Operation rejected with op code validation error.", {
              cause: e,
              name: "UserOperationRejectedByOpCodeError",
            });
          }
        }
        Object.defineProperty(eY, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32502,
        });
        class e$ extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).",
              { cause: e, name: "UserOperationOutOfTimeRangeError" }
            );
          }
        }
        Object.defineProperty(e$, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32503,
        });
        class eX extends eb.BaseError {
          constructor({ cause: e }) {
            super(
              "An error occurred while executing user operation: ".concat(
                null == e ? void 0 : e.shortMessage
              ),
              { cause: e, name: "UnknownBundlerError" }
            );
          }
        }
        class eZ extends eb.BaseError {
          constructor({ cause: e }) {
            super("User Operation verification gas limit exceeded.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the gas used for verification exceeded the `verificationGasLimit`",
              ].filter(Boolean),
              name: "VerificationGasLimitExceededError",
            });
          }
        }
        Object.defineProperty(eZ, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa40/,
        });
        class eQ extends eb.BaseError {
          constructor({ cause: e }) {
            super("User Operation verification gas limit is too low.", {
              cause: e,
              metaMessages: [
                "This could arise when:",
                "- the `verificationGasLimit` is too low to verify the User Operation",
              ].filter(Boolean),
              name: "VerificationGasLimitTooLowError",
            });
          }
        }
        Object.defineProperty(eQ, "message", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /aa41/,
        });
        var e0 = em,
          e1 = e.i(658213),
          e2 = e.i(588732);
        class e6 extends e0.BaseError {
          constructor(
            e,
            {
              callData: t,
              callGasLimit: n,
              docsPath: a,
              factory: r,
              factoryData: i,
              initCode: o,
              maxFeePerGas: s,
              maxPriorityFeePerGas: c,
              nonce: u,
              paymaster: l,
              paymasterAndData: f,
              paymasterData: d,
              paymasterPostOpGasLimit: p,
              paymasterVerificationGasLimit: m,
              preVerificationGas: y,
              sender: g,
              signature: b,
              verificationGasLimit: _,
            }
          ) {
            super(e.shortMessage, {
              cause: e,
              docsPath: a,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Request Arguments:",
                (0, e1.prettyPrint)({
                  callData: t,
                  callGasLimit: n,
                  factory: r,
                  factoryData: i,
                  initCode: o,
                  maxFeePerGas:
                    void 0 !== s && "".concat((0, e2.formatGwei)(s), " gwei"),
                  maxPriorityFeePerGas:
                    void 0 !== c && "".concat((0, e2.formatGwei)(c), " gwei"),
                  nonce: u,
                  paymaster: l,
                  paymasterAndData: f,
                  paymasterData: d,
                  paymasterPostOpGasLimit: p,
                  paymasterVerificationGasLimit: m,
                  preVerificationGas: y,
                  sender: g,
                  signature: b,
                  verificationGasLimit: _,
                }),
              ].filter(Boolean),
              name: "UserOperationExecutionError",
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
        class e5 extends e0.BaseError {
          constructor({ hash: e }) {
            super(
              'User Operation receipt with hash "'.concat(
                e,
                '" could not be found. The User Operation may not have been processed yet.'
              ),
              { name: "UserOperationReceiptNotFoundError" }
            );
          }
        }
        class e3 extends e0.BaseError {
          constructor({ hash: e }) {
            super(
              'User Operation with hash "'.concat(e, '" could not be found.'),
              { name: "UserOperationNotFoundError" }
            );
          }
        }
        class e8 extends e0.BaseError {
          constructor({ hash: e }) {
            super(
              'Timed out while waiting for User Operation with hash "'.concat(
                e,
                '" to be confirmed.'
              ),
              { name: "WaitForUserOperationReceiptTimeoutError" }
            );
          }
        }
        let e4 = [eh, eD, eU, eF, eT, eH, eV, e$, eW, eJ, eY];
        function e7(e, t) {
          let { calls: n, docsPath: a, ...r } = t;
          return new e6(
            (() => {
              let t = (function (e, t) {
                let n = (e.details || "").toLowerCase();
                if (e_.message.test(n)) return new e_({ cause: e });
                if (ev.message.test(n)) return new ev({ cause: e });
                if (ew.message.test(n)) return new ew({ cause: e });
                if (ex.message.test(n)) return new ex({ cause: e });
                if (eP.message.test(n))
                  return new eP({
                    cause: e,
                    factory: t.factory,
                    factoryData: t.factoryData,
                    initCode: t.initCode,
                  });
                if (eO.message.test(n))
                  return new eO({
                    cause: e,
                    factory: t.factory,
                    factoryData: t.factoryData,
                    initCode: t.initCode,
                  });
                if (eE.message.test(n))
                  return new eE({
                    cause: e,
                    factory: t.factory,
                    factoryData: t.factoryData,
                    initCode: t.initCode,
                    sender: t.sender,
                  });
                if (eS.message.test(n)) return new eS({ cause: e });
                if (eG.message.test(n)) return new eG({ cause: e });
                if (eA.message.test(n))
                  return new eA({ cause: e, nonce: t.nonce });
                if (eB.message.test(n)) return new eB({ cause: e });
                if (eI.message.test(n)) return new eI({ cause: e });
                if (eC.message.test(n)) return new eC({ cause: e });
                if (eU.message.test(n)) return new eU({ cause: e });
                if (ek.message.test(n)) return new ek({ cause: e });
                if (eL.message.test(n)) return new eL({ cause: e });
                if (ez.message.test(n)) return new ez({ cause: e });
                if (eM.message.test(n)) return new eM({ cause: e });
                if (ej.message.test(n))
                  return new ej({
                    cause: e,
                    factory: t.factory,
                    factoryData: t.factoryData,
                    initCode: t.initCode,
                  });
                if (eN.message.test(n)) return new eN({ cause: e });
                if (eR.message.test(n)) return new eR({ cause: e });
                if (eK.message.test(n)) return new eK({ cause: e });
                if (eq.message.test(n)) return new eq({ cause: e });
                if (eZ.message.test(n)) return new eZ({ cause: e });
                if (eQ.message.test(n)) return new eQ({ cause: e });
                let a = e.walk((e) => e4.some((t) => t.code === e.code));
                if (a) {
                  if (a.code === eh.code)
                    return new eh({
                      cause: e,
                      data: a.data,
                      message: a.details,
                    });
                  if (a.code === eD.code) return new eD({ cause: e });
                  if (a.code === eU.code) return new eU({ cause: e });
                  if (a.code === eF.code) return new eF({ cause: e });
                  if (a.code === eT.code) return new eT({ cause: e });
                  if (a.code === eH.code) return new eH({ cause: e });
                  if (a.code === eV.code) return new eV({ cause: e });
                  if (a.code === e$.code) return new e$({ cause: e });
                  if (a.code === eW.code) return new eW({ cause: e });
                  if (a.code === eJ.code) return new eJ({ cause: e });
                  if (a.code === eY.code) return new eY({ cause: e });
                }
                return new eX({ cause: e });
              })(e, r);
              if (n && t instanceof eh) {
                let e,
                  a =
                    (t.walk((t) => {
                      var n, a, r, i;
                      if (
                        "string" == typeof t.data ||
                        "string" ==
                          typeof (null == (n = t.data)
                            ? void 0
                            : n.revertData) ||
                        (!(t instanceof em.BaseError) &&
                          "string" == typeof t.message)
                      ) {
                        let n =
                          null ==
                          (a = (i =
                            (null == (r = t.data) ? void 0 : r.revertData) ||
                            t.data ||
                            t.message).match)
                            ? void 0
                            : a.call(i, /(0x[A-Za-z0-9]*)/);
                        if (n) return (e = n[1]), !0;
                      }
                      return !1;
                    }),
                    e),
                  r = null == n ? void 0 : n.filter((e) => e.abi);
                if (a && r.length > 0)
                  return (function (e) {
                    let { calls: t, revertData: n } = e,
                      {
                        abi: a,
                        functionName: r,
                        args: i,
                        to: o,
                      } = (() => {
                        let e = null == t ? void 0 : t.filter((e) => !!e.abi);
                        if (1 === e.length) return e[0];
                        let a = e.filter((e) => {
                          try {
                            return !!(0, eg.decodeErrorResult)({
                              abi: e.abi,
                              data: n,
                            });
                          } catch (e) {
                            return !1;
                          }
                        });
                        return 1 === a.length
                          ? a[0]
                          : {
                              abi: [],
                              functionName: e.reduce(
                                (e, t) =>
                                  ""
                                    .concat(e ? "".concat(e, " | ") : "")
                                    .concat(t.functionName),
                                ""
                              ),
                              args: void 0,
                              to: void 0,
                            };
                      })(),
                      s =
                        "0x" === n
                          ? new ey.ContractFunctionZeroDataError({
                              functionName: r,
                            })
                          : new ey.ContractFunctionRevertedError({
                              abi: a,
                              data: n,
                              functionName: r,
                            });
                    return new ey.ContractFunctionExecutionError(s, {
                      abi: a,
                      args: i,
                      contractAddress: o,
                      functionName: r,
                    });
                  })({ calls: r, revertData: a });
              }
              return t;
            })(),
            { docsPath: a, ...r }
          );
        }
        var e9 = e.i(994290),
          te = e.i(561160);
        function tt(e) {
          var t;
          let n = {};
          return (
            void 0 !== e.callData && (n.callData = e.callData),
            void 0 !== e.callGasLimit &&
              (n.callGasLimit = (0, e9.numberToHex)(e.callGasLimit)),
            void 0 !== e.factory && (n.factory = e.factory),
            void 0 !== e.factoryData && (n.factoryData = e.factoryData),
            void 0 !== e.initCode && (n.initCode = e.initCode),
            void 0 !== e.maxFeePerGas &&
              (n.maxFeePerGas = (0, e9.numberToHex)(e.maxFeePerGas)),
            void 0 !== e.maxPriorityFeePerGas &&
              (n.maxPriorityFeePerGas = (0, e9.numberToHex)(
                e.maxPriorityFeePerGas
              )),
            void 0 !== e.nonce && (n.nonce = (0, e9.numberToHex)(e.nonce)),
            void 0 !== e.paymaster && (n.paymaster = e.paymaster),
            void 0 !== e.paymasterAndData &&
              (n.paymasterAndData = e.paymasterAndData || "0x"),
            void 0 !== e.paymasterData && (n.paymasterData = e.paymasterData),
            void 0 !== e.paymasterPostOpGasLimit &&
              (n.paymasterPostOpGasLimit = (0, e9.numberToHex)(
                e.paymasterPostOpGasLimit
              )),
            void 0 !== e.paymasterVerificationGasLimit &&
              (n.paymasterVerificationGasLimit = (0, e9.numberToHex)(
                e.paymasterVerificationGasLimit
              )),
            void 0 !== e.preVerificationGas &&
              (n.preVerificationGas = (0, e9.numberToHex)(
                e.preVerificationGas
              )),
            void 0 !== e.sender && (n.sender = e.sender),
            void 0 !== e.signature && (n.signature = e.signature),
            void 0 !== e.verificationGasLimit &&
              (n.verificationGasLimit = (0, e9.numberToHex)(
                e.verificationGasLimit
              )),
            void 0 !== e.authorization &&
              (n.eip7702Auth = {
                address: (t = e.authorization).address,
                chainId: (0, e9.numberToHex)(t.chainId),
                nonce: (0, e9.numberToHex)(t.nonce),
                r: t.r
                  ? (0, e9.numberToHex)(BigInt(t.r), { size: 32 })
                  : (0, te.pad)("0x", { size: 32 }),
                s: t.s
                  ? (0, e9.numberToHex)(BigInt(t.s), { size: 32 })
                  : (0, te.pad)("0x", { size: 32 }),
                yParity: t.yParity
                  ? (0, e9.numberToHex)(t.yParity, { size: 1 })
                  : (0, te.pad)("0x", { size: 32 }),
              }),
            n
          );
        }
        var tn = e.i(766728),
          ta = e.i(710456),
          tr = e.i(906420),
          ti = e.i(115481),
          to = e.i(864198);
        async function ts(e, t) {
          var n, a, r;
          let { chainId: i, entryPointAddress: o, context: s, ...c } = t,
            u = tt(c),
            {
              paymasterPostOpGasLimit: l,
              paymasterVerificationGasLimit: f,
              ...d
            } = await e.request({
              method: "pm_getPaymasterData",
              params: [
                {
                  ...u,
                  callGasLimit: null != (n = u.callGasLimit) ? n : "0x0",
                  verificationGasLimit:
                    null != (a = u.verificationGasLimit) ? a : "0x0",
                  preVerificationGas:
                    null != (r = u.preVerificationGas) ? r : "0x0",
                },
                o,
                (0, e9.numberToHex)(i),
                s,
              ],
            });
          return {
            ...d,
            ...(l && { paymasterPostOpGasLimit: (0, to.hexToBigInt)(l) }),
            ...(f && { paymasterVerificationGasLimit: (0, to.hexToBigInt)(f) }),
          };
        }
        async function tc(e, t) {
          var n, a, r;
          let { chainId: i, entryPointAddress: o, context: s, ...c } = t,
            u = tt(c),
            {
              paymasterPostOpGasLimit: l,
              paymasterVerificationGasLimit: f,
              ...d
            } = await e.request({
              method: "pm_getPaymasterStubData",
              params: [
                {
                  ...u,
                  callGasLimit: null != (n = u.callGasLimit) ? n : "0x0",
                  verificationGasLimit:
                    null != (a = u.verificationGasLimit) ? a : "0x0",
                  preVerificationGas:
                    null != (r = u.preVerificationGas) ? r : "0x0",
                },
                o,
                (0, e9.numberToHex)(i),
                s,
              ],
            });
          return {
            ...d,
            ...(l && { paymasterPostOpGasLimit: (0, to.hexToBigInt)(l) }),
            ...(f && { paymasterVerificationGasLimit: (0, to.hexToBigInt)(f) }),
          };
        }
        let tu = [
          "factory",
          "fees",
          "gas",
          "paymaster",
          "nonce",
          "signature",
          "authorization",
        ];
        async function tl(e, t) {
          var n, a, r, i, o, s, c;
          let u,
            {
              account: l = e.account,
              parameters: f = tu,
              stateOverride: d,
            } = t;
          if (!l) throw new ef.AccountNotFoundError();
          let p = (0, el.parseAccount)(l),
            m =
              null != (n = t.paymaster) ? n : null == e ? void 0 : e.paymaster,
            y = "string" == typeof m ? m : void 0,
            { getPaymasterStubData: g, getPaymasterData: b } = (() => {
              if (!0 === m)
                return {
                  getPaymasterStubData: (t) =>
                    (0, ed.getAction)(e, tc, "getPaymasterStubData")(t),
                  getPaymasterData: (t) =>
                    (0, ed.getAction)(e, ts, "getPaymasterData")(t),
                };
              if ("object" == typeof m) {
                let { getPaymasterStubData: e, getPaymasterData: t } = m;
                return {
                  getPaymasterStubData: t && e ? e : t,
                  getPaymasterData: t && e ? t : void 0,
                };
              }
              return { getPaymasterStubData: void 0, getPaymasterData: void 0 };
            })(),
            _ = t.paymasterContext
              ? t.paymasterContext
              : null == e
              ? void 0
              : e.paymasterContext,
            h = { ...t, paymaster: y, sender: p.address },
            [v, w, x, P, O] = await Promise.all([
              (async () =>
                t.calls
                  ? p.encodeCalls(
                      t.calls.map((e) =>
                        e.abi
                          ? {
                              data: (0, tr.encodeFunctionData)(e),
                              to: e.to,
                              value: e.value,
                            }
                          : e
                      )
                    )
                  : t.callData)(),
              (async () => {
                if (!f.includes("factory")) return;
                if (t.initCode) return { initCode: t.initCode };
                if (t.factory && t.factoryData)
                  return { factory: t.factory, factoryData: t.factoryData };
                let { factory: e, factoryData: n } = await p.getFactoryArgs();
                return "0.6" === p.entryPoint.version
                  ? { initCode: e && n ? (0, ti.concat)([e, n]) : void 0 }
                  : { factory: e, factoryData: n };
              })(),
              (async () => {
                var n, a;
                if (f.includes("fees")) {
                  if (
                    "bigint" == typeof t.maxFeePerGas &&
                    "bigint" == typeof t.maxPriorityFeePerGas
                  )
                    return h;
                  if (
                    null == e || null == (n = e.userOperation)
                      ? void 0
                      : n.estimateFeesPerGas
                  ) {
                    let t = await e.userOperation.estimateFeesPerGas({
                      account: p,
                      bundlerClient: e,
                      userOperation: h,
                    });
                    return { ...h, ...t };
                  }
                  try {
                    let n = null != (a = e.client) ? a : e,
                      r = await (0, ed.getAction)(
                        n,
                        ta.estimateFeesPerGas,
                        "estimateFeesPerGas"
                      )({ chain: n.chain, type: "eip1559" });
                    return {
                      maxFeePerGas:
                        "bigint" == typeof t.maxFeePerGas
                          ? t.maxFeePerGas
                          : BigInt(2n * r.maxFeePerGas),
                      maxPriorityFeePerGas:
                        "bigint" == typeof t.maxPriorityFeePerGas
                          ? t.maxPriorityFeePerGas
                          : BigInt(2n * r.maxPriorityFeePerGas),
                    };
                  } catch (e) {
                    return;
                  }
                }
              })(),
              (async () => {
                if (f.includes("nonce"))
                  return "bigint" == typeof t.nonce ? t.nonce : p.getNonce();
              })(),
              (async () => {
                if (f.includes("authorization")) {
                  if ("object" == typeof t.authorization)
                    return t.authorization;
                  if (p.authorization && !(await p.isDeployed()))
                    return {
                      ...(await (0, tn.prepareAuthorization)(
                        p.client,
                        p.authorization
                      )),
                      r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
                      s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                      yParity: 1,
                    };
                }
              })(),
            ]);
          async function E() {
            return (
              u ||
              (e.chain
                ? e.chain.id
                : (u = await (0, ed.getAction)(
                    e,
                    eu.getChainId,
                    "getChainId"
                  )({})))
            );
          }
          void 0 !== v && (h.callData = v),
            void 0 !== w && (h = { ...h, ...w }),
            void 0 !== x && (h = { ...h, ...x }),
            void 0 !== P && (h.nonce = P),
            void 0 !== O && (h.authorization = O),
            f.includes("signature") &&
              (void 0 !== t.signature
                ? (h.signature = t.signature)
                : (h.signature = await p.getStubSignature(h))),
            "0.6" !== p.entryPoint.version || h.initCode || (h.initCode = "0x");
          let S = !1;
          if (f.includes("paymaster") && g && !y && !t.paymasterAndData) {
            let {
              isFinal: e = !1,
              sponsor: t,
              ...n
            } = await g({
              chainId: await E(),
              entryPointAddress: p.entryPoint.address,
              context: _,
              ...h,
            });
            (S = e), (h = { ...h, ...n });
          }
          if (
            ("0.6" !== p.entryPoint.version ||
              h.paymasterAndData ||
              (h.paymasterAndData = "0x"),
            f.includes("gas"))
          ) {
            if (null == (a = p.userOperation) ? void 0 : a.estimateGas) {
              let e = await p.userOperation.estimateGas(h);
              h = { ...h, ...e };
            }
            if (
              void 0 === h.callGasLimit ||
              void 0 === h.preVerificationGas ||
              void 0 === h.verificationGasLimit ||
              (h.paymaster && void 0 === h.paymasterPostOpGasLimit) ||
              (h.paymaster && void 0 === h.paymasterVerificationGasLimit)
            ) {
              let t = await (0, ed.getAction)(
                e,
                tf,
                "estimateUserOperationGas"
              )({
                account: p,
                callGasLimit: 0n,
                preVerificationGas: 0n,
                verificationGasLimit: 0n,
                stateOverride: d,
                ...(h.paymaster
                  ? {
                      paymasterPostOpGasLimit: 0n,
                      paymasterVerificationGasLimit: 0n,
                    }
                  : {}),
                ...h,
              });
              h = {
                ...h,
                callGasLimit: null != (r = h.callGasLimit) ? r : t.callGasLimit,
                preVerificationGas:
                  null != (i = h.preVerificationGas) ? i : t.preVerificationGas,
                verificationGasLimit:
                  null != (o = h.verificationGasLimit)
                    ? o
                    : t.verificationGasLimit,
                paymasterPostOpGasLimit:
                  null != (s = h.paymasterPostOpGasLimit)
                    ? s
                    : t.paymasterPostOpGasLimit,
                paymasterVerificationGasLimit:
                  null != (c = h.paymasterVerificationGasLimit)
                    ? c
                    : t.paymasterVerificationGasLimit,
              };
            }
          }
          if (f.includes("paymaster") && b && !y && !t.paymasterAndData && !S) {
            let e = await b({
              chainId: await E(),
              entryPointAddress: p.entryPoint.address,
              context: _,
              ...h,
            });
            h = { ...h, ...e };
          }
          return (
            delete h.calls,
            delete h.parameters,
            delete h.paymasterContext,
            "string" != typeof h.paymaster && delete h.paymaster,
            h
          );
        }
        async function tf(e, t) {
          let {
            account: n = e.account,
            entryPointAddress: a,
            stateOverride: r,
          } = t;
          if (!n && !t.sender) throw new ef.AccountNotFoundError();
          let i = n ? (0, el.parseAccount)(n) : void 0,
            o = (0, ep.serializeStateOverride)(r),
            s = i
              ? await (0, ed.getAction)(
                  e,
                  tl,
                  "prepareUserOperation"
                )({
                  ...t,
                  parameters: [
                    "authorization",
                    "factory",
                    "nonce",
                    "paymaster",
                    "signature",
                  ],
                })
              : t;
          try {
            let t = [
              tt(s),
              null != a
                ? a
                : null == i || null == (c = i.entryPoint)
                ? void 0
                : c.address,
            ];
            var c,
              u = await e.request({
                method: "eth_estimateUserOperationGas",
                params: o ? [...t, o] : [...t],
              });
            let n = {};
            return (
              u.callGasLimit && (n.callGasLimit = BigInt(u.callGasLimit)),
              u.preVerificationGas &&
                (n.preVerificationGas = BigInt(u.preVerificationGas)),
              u.verificationGasLimit &&
                (n.verificationGasLimit = BigInt(u.verificationGasLimit)),
              u.paymasterPostOpGasLimit &&
                (n.paymasterPostOpGasLimit = BigInt(u.paymasterPostOpGasLimit)),
              u.paymasterVerificationGasLimit &&
                (n.paymasterVerificationGasLimit = BigInt(
                  u.paymasterVerificationGasLimit
                )),
              n
            );
          } catch (n) {
            let e = t.calls;
            throw e7(n, { ...s, ...(e ? { calls: e } : {}) });
          }
        }
        async function td(e, t) {
          let { hash: n } = t,
            a = await e.request(
              { method: "eth_getUserOperationByHash", params: [n] },
              { dedupe: !0 }
            );
          if (!a) throw new e3({ hash: n });
          let {
            blockHash: r,
            blockNumber: i,
            entryPoint: o,
            transactionHash: s,
            userOperation: c,
          } = a;
          return {
            blockHash: r,
            blockNumber: BigInt(i),
            entryPoint: o,
            transactionHash: s,
            userOperation: (function (e) {
              let t = { ...e };
              return (
                e.callGasLimit && (t.callGasLimit = BigInt(e.callGasLimit)),
                e.maxFeePerGas && (t.maxFeePerGas = BigInt(e.maxFeePerGas)),
                e.maxPriorityFeePerGas &&
                  (t.maxPriorityFeePerGas = BigInt(e.maxPriorityFeePerGas)),
                e.nonce && (t.nonce = BigInt(e.nonce)),
                e.paymasterPostOpGasLimit &&
                  (t.paymasterPostOpGasLimit = BigInt(
                    e.paymasterPostOpGasLimit
                  )),
                e.paymasterVerificationGasLimit &&
                  (t.paymasterVerificationGasLimit = BigInt(
                    e.paymasterVerificationGasLimit
                  )),
                e.preVerificationGas &&
                  (t.preVerificationGas = BigInt(e.preVerificationGas)),
                e.verificationGasLimit &&
                  (t.verificationGasLimit = BigInt(e.verificationGasLimit)),
                t
              );
            })(c),
          };
        }
        var tp = e.i(519464),
          tm = e.i(960905);
        async function ty(e, t) {
          let { hash: n } = t,
            a = await e.request(
              { method: "eth_getUserOperationReceipt", params: [n] },
              { dedupe: !0 }
            );
          if (!a) throw new e5({ hash: n });
          let r = { ...a };
          return (
            a.actualGasCost && (r.actualGasCost = BigInt(a.actualGasCost)),
            a.actualGasUsed && (r.actualGasUsed = BigInt(a.actualGasUsed)),
            a.logs && (r.logs = a.logs.map((e) => (0, tp.formatLog)(e))),
            a.receipt &&
              (r.receipt = (0, tm.formatTransactionReceipt)(r.receipt)),
            r
          );
        }
        async function tg(e, t) {
          var n, a;
          let { account: r = e.account, entryPointAddress: i } = t;
          if (!r && !t.sender) throw new ef.AccountNotFoundError();
          let o = r ? (0, el.parseAccount)(r) : void 0,
            s = o
              ? await (0, ed.getAction)(e, tl, "prepareUserOperation")(t)
              : t,
            c =
              t.signature ||
              (await (null == o || null == (n = o.signUserOperation)
                ? void 0
                : n.call(o, s))),
            u = tt({ ...s, signature: c });
          try {
            return await e.request(
              {
                method: "eth_sendUserOperation",
                params: [
                  u,
                  null != i
                    ? i
                    : null == o || null == (a = o.entryPoint)
                    ? void 0
                    : a.address,
                ],
              },
              { retryCount: 0 }
            );
          } catch (n) {
            let e = t.calls;
            throw e7(n, { ...s, ...(e ? { calls: e } : {}), signature: c });
          }
        }
        var tb = e.i(308989),
          t_ = e.i(207212),
          th = e.i(383478);
        function tv(e) {
          return {
            estimateUserOperationGas: (t) => tf(e, t),
            getChainId: () => (0, eu.getChainId)(e),
            getSupportedEntryPoints: () =>
              e.request({ method: "eth_supportedEntryPoints" }),
            getUserOperation: (t) => td(e, t),
            getUserOperationReceipt: (t) => ty(e, t),
            prepareUserOperation: (t) => tl(e, t),
            sendUserOperation: (t) => tg(e, t),
            waitForUserOperationReceipt: (t) =>
              (function (e, t) {
                let {
                    hash: n,
                    pollingInterval: a = e.pollingInterval,
                    retryCount: r,
                    timeout: i = 12e4,
                  } = t,
                  o = 0,
                  s = (0, th.stringify)([
                    "waitForUserOperationReceipt",
                    e.uid,
                    n,
                  ]);
                return new Promise((t, c) => {
                  let u = (0, tb.observe)(s, { resolve: t, reject: c }, (t) => {
                    let s = (e) => {
                        c(), e(), u();
                      },
                      c = (0, t_.poll)(
                        async () => {
                          r && o >= r && s(() => t.reject(new e8({ hash: n })));
                          try {
                            let a = await (0, ed.getAction)(
                              e,
                              ty,
                              "getUserOperationReceipt"
                            )({ hash: n });
                            s(() => t.resolve(a));
                          } catch (e) {
                            "UserOperationReceiptNotFoundError" !== e.name &&
                              s(() => t.reject(e));
                          }
                          o++;
                        },
                        { emitOnBegin: !0, interval: a }
                      );
                    return (
                      i &&
                        setTimeout(
                          () => s(() => t.reject(new e8({ hash: n }))),
                          i
                        ),
                      c
                    );
                  });
                });
              })(e, t),
          };
        }
        function tw(e) {
          var t;
          let {
            client: n,
            key: a = "bundler",
            name: r = "Bundler Client",
            paymaster: i,
            paymasterContext: o,
            transport: s,
            userOperation: c,
          } = e;
          return Object.assign(
            (0, ec.createClient)({
              ...e,
              chain: null != (t = e.chain) ? t : null == n ? void 0 : n.chain,
              key: a,
              name: r,
              transport: s,
              type: "bundlerClient",
            }),
            { client: n, paymaster: i, paymasterContext: o, userOperation: c }
          ).extend(tv);
        }
        e.s({ Hex: () => nf }, 209175),
          e.s(
            {
              IntegerOutOfRangeError: () => na,
              InvalidHexBooleanError: () => nr,
              InvalidHexTypeError: () => ni,
              InvalidHexValueError: () => no,
              InvalidLengthError: () => ns,
              SizeExceedsPaddingSizeError: () => nl,
              SizeOverflowError: () => nc,
              SliceOffsetOutOfBoundsError: () => nu,
              assert: () => tK,
              concat: () => tW,
              from: () => tJ,
              fromBoolean: () => tY,
              fromBytes: () => t$,
              fromNumber: () => tX,
              fromString: () => tZ,
              isEqual: () => tQ,
              padLeft: () => t0,
              padRight: () => t1,
              random: () => t2,
              size: () => t5,
              slice: () => t6,
              toBigInt: () => t4,
              toBoolean: () => t7,
              toBytes: () => t9,
              toNumber: () => ne,
              toString: () => nt,
              trimLeft: () => t3,
              trimRight: () => t8,
              validate: () => nn,
            },
            432453
          );
        var tx = e.i(806459);
        class tP extends Error {
          walk(e) {
            return (function e(t, n) {
              return (null == n ? void 0 : n(t))
                ? t
                : t && "object" == typeof t && "cause" in t && t.cause
                ? e(t.cause, n)
                : n
                ? null
                : t;
            })(this, e);
          }
          constructor(e, t = {}) {
            let n = (() => {
                var e;
                if (t.cause instanceof tP) {
                  if (t.cause.details) return t.cause.details;
                  if (t.cause.shortMessage) return t.cause.shortMessage;
                }
                return (null == (e = t.cause) ? void 0 : e.message)
                  ? t.cause.message
                  : t.details;
              })(),
              a = (t.cause instanceof tP && t.cause.docsPath) || t.docsPath,
              r = "".concat("https://oxlib.sh").concat(null != a ? a : "");
            super(
              [
                e || "An error occurred.",
                ...(t.metaMessages ? ["", ...t.metaMessages] : []),
                ...(n || a
                  ? [
                      "",
                      n ? "Details: ".concat(n) : void 0,
                      a ? "See: ".concat(r) : void 0,
                    ]
                  : []),
              ]
                .filter((e) => "string" == typeof e)
                .join("\n"),
              t.cause ? { cause: t.cause } : void 0
            ),
              Object.defineProperty(this, "details", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "docs", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "docsPath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shortMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "cause", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseError",
              }),
              Object.defineProperty(this, "version", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ox@".concat("0.1.1"),
              }),
              (this.cause = t.cause),
              (this.details = n),
              (this.docs = r),
              (this.docsPath = a),
              (this.shortMessage = e);
          }
        }
        function tO(e, t, n) {
          return JSON.stringify(
            e,
            (e, n) =>
              "function" == typeof t
                ? t(e, n)
                : "bigint" == typeof n
                ? n.toString() + "#__bigint"
                : n,
            n
          );
        }
        function tE(e, t) {
          if (tT(e) > t) throw new tM({ givenSize: tT(e), maxSize: t });
        }
        let tS = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
        function tG(e) {
          return e >= tS.zero && e <= tS.nine
            ? e - tS.zero
            : e >= tS.A && e <= tS.F
            ? e - (tS.A - 10)
            : e >= tS.a && e <= tS.f
            ? e - (tS.a - 10)
            : void 0;
        }
        function tB(e, t) {
          if (t5(e) > t) throw new nc({ givenSize: t5(e), maxSize: t });
        }
        function tA(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { dir: n, size: a = 32 } = t;
          if (0 === a) return e;
          let r = e.replace("0x", "");
          if (r.length > 2 * a)
            throw new nl({
              size: Math.ceil(r.length / 2),
              targetSize: a,
              type: "Hex",
            });
          return "0x".concat(
            r["right" === n ? "padEnd" : "padStart"](2 * a, "0")
          );
        }
        function tI(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { dir: n = "left" } = t,
            a = e.replace("0x", ""),
            r = 0;
          for (let e = 0; e < a.length - 1; e++)
            if ("0" === a["left" === n ? e : a.length - e - 1].toString()) r++;
            else break;
          return "0" ===
            (a = "left" === n ? a.slice(r) : a.slice(0, a.length - r))
            ? "0x"
            : "right" === n && a.length % 2 == 1
            ? "0x".concat(a, "0")
            : "0x".concat(a);
        }
        let tD = new TextEncoder();
        function tC() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          let a = 0;
          for (let e of t) a += e.length;
          let r = new Uint8Array(a);
          for (let e = 0, n = 0; e < t.length; e++) {
            let a = t[e];
            r.set(a, n), (n += a.length);
          }
          return r;
        }
        function tU(e) {
          return e instanceof Uint8Array
            ? e
            : "string" == typeof e
            ? tL(e)
            : tk(e);
        }
        function tk(e) {
          return e instanceof Uint8Array ? e : new Uint8Array(e);
        }
        function tL(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t,
            a = e;
          n && (tB(e, n), (a = t1(e, n)));
          let r = a.slice(2);
          r.length % 2 && (r = "0".concat(r));
          let i = r.length / 2,
            o = new Uint8Array(i);
          for (let e = 0, t = 0; e < i; e++) {
            let n = tG(r.charCodeAt(t++)),
              a = tG(r.charCodeAt(t++));
            if (void 0 === n || void 0 === a)
              throw new tP(
                'Invalid byte sequence ("'
                  .concat(r[t - 2])
                  .concat(r[t - 1], '" in "')
                  .concat(r, '").')
              );
            o[e] = 16 * n + a;
          }
          return o;
        }
        function tF(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t,
            a = tD.encode(e);
          return "number" == typeof n
            ? (tE(a, n),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { dir: n, size: a = 32 } = t;
                if (0 === a) return e;
                if (e.length > a)
                  throw new tN({
                    size: e.length,
                    targetSize: a,
                    type: "Bytes",
                  });
                let r = new Uint8Array(a);
                for (let t = 0; t < a; t++) {
                  let i = "right" === n;
                  r[i ? t : a - t - 1] = e[i ? t : e.length - t - 1];
                }
                return r;
              })(a, { dir: "right", size: n }))
            : a;
        }
        function tT(e) {
          return e.length;
        }
        function tz(e, t, n) {
          let a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            { strict: r } = a;
          if ("number" == typeof t && t > 0 && t > tT(e) - 1)
            throw new tV({ offset: t, position: "start", size: tT(e) });
          let i = e.slice(t, n);
          return (
            r &&
              (function (e, t, n) {
                if (
                  "number" == typeof t &&
                  "number" == typeof n &&
                  tT(e) !== n - t
                )
                  throw new tV({ offset: n, position: "end", size: tT(e) });
              })(i, t, n),
            i
          );
        }
        function tj(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t;
          return void 0 !== n && tE(e, n), t4(t$(e, t), t);
        }
        class tH extends tP {
          constructor(e) {
            super(
              "Value `"
                .concat("object" == typeof e ? tO(e) : e, "` of type `")
                .concat(typeof e, "` is an invalid Bytes value."),
              { metaMessages: ["Bytes values must be of type `Bytes`."] }
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.InvalidBytesTypeError",
              });
          }
        }
        class tM extends tP {
          constructor({ givenSize: e, maxSize: t }) {
            super(
              "Size cannot exceed `"
                .concat(t, "` bytes. Given size: `")
                .concat(e, "` bytes.")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SizeOverflowError",
              });
          }
        }
        class tV extends tP {
          constructor({ offset: e, position: t, size: n }) {
            super(
              "Slice "
                .concat("start" === t ? "starting" : "ending", " at offset `")
                .concat(e, "` is out-of-bounds (size: `")
                .concat(n, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SliceOffsetOutOfBoundsError",
              });
          }
        }
        class tN extends tP {
          constructor({ size: e, targetSize: t, type: n }) {
            super(
              ""
                .concat(n.charAt(0).toUpperCase())
                .concat(n.slice(1).toLowerCase(), " size (`")
                .concat(e, "`) exceeds padding size (`")
                .concat(t, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Bytes.SizeExceedsPaddingSizeError",
              });
          }
        }
        let tR = new TextEncoder(),
          tq = Array.from({ length: 256 }, (e, t) =>
            t.toString(16).padStart(2, "0")
          );
        function tK(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { strict: n = !1 } = t;
          if (!e || "string" != typeof e) throw new ni(e);
          if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
            throw new no(e);
        }
        function tW() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return "0x".concat(t.reduce((e, t) => e + t.replace("0x", ""), ""));
        }
        function tJ(e) {
          return e instanceof Uint8Array
            ? t$(e)
            : Array.isArray(e)
            ? t$(new Uint8Array(e))
            : e;
        }
        function tY(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = "0x".concat(Number(e));
          return "number" == typeof t.size ? (tB(n, t.size), t0(n, t.size)) : n;
        }
        function t$(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = "";
          for (let t = 0; t < e.length; t++) n += tq[e[t]];
          let a = "0x".concat(n);
          return "number" == typeof t.size ? (tB(a, t.size), t1(a, t.size)) : a;
        }
        function tX(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: a, size: r } = n,
            i = BigInt(e);
          r
            ? (t = a
                ? (1n << (8n * BigInt(r) - 1n)) - 1n
                : 2n ** (8n * BigInt(r)) - 1n)
            : "number" == typeof e && (t = BigInt(Number.MAX_SAFE_INTEGER));
          let o = "bigint" == typeof t && a ? -t - 1n : 0;
          if ((t && i > t) || i < o) {
            let n = "bigint" == typeof e ? "n" : "";
            throw new na({
              max: t ? "".concat(t).concat(n) : void 0,
              min: "".concat(o).concat(n),
              signed: a,
              size: r,
              value: "".concat(e).concat(n),
            });
          }
          let s = (a && i < 0 ? (1n << BigInt(8 * r)) + BigInt(i) : i).toString(
              16
            ),
            c = "0x".concat(s);
          return r ? t0(c, r) : c;
        }
        function tZ(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t$(tR.encode(e), t);
        }
        function tQ(e, t) {
          return (0, tx.equalBytes)(tL(e), tL(t));
        }
        function t0(e, t) {
          return tA(e, { dir: "left", size: t });
        }
        function t1(e, t) {
          return tA(e, { dir: "right", size: t });
        }
        function t2(e) {
          return t$(crypto.getRandomValues(new Uint8Array(e)));
        }
        function t6(e, t, n) {
          let a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            { strict: r } = a;
          if ("number" == typeof t && t > 0 && t > t5(e) - 1)
            throw new nu({ offset: t, position: "start", size: t5(e) });
          let i = "0x".concat(
            e
              .replace("0x", "")
              .slice((null != t ? t : 0) * 2, (null != n ? n : e.length) * 2)
          );
          return (
            r &&
              (function (e, t, n) {
                if (
                  "number" == typeof t &&
                  "number" == typeof n &&
                  t5(e) !== n - t
                )
                  throw new nu({ offset: n, position: "end", size: t5(e) });
              })(i, t, n),
            i
          );
        }
        function t5(e) {
          return Math.ceil((e.length - 2) / 2);
        }
        function t3(e) {
          return tI(e, { dir: "left" });
        }
        function t8(e) {
          return tI(e, { dir: "right" });
        }
        function t4(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: n } = t;
          t.size && tB(e, t.size);
          let a = BigInt(e);
          if (!n) return a;
          let r = (1n << (8n * BigInt((e.length - 2) / 2))) - 1n;
          return a <= r >> 1n ? a : a - r - 1n;
        }
        function t7(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t.size && tB(e, t.size);
          let n = t3(e);
          if ("0x" === n) return !1;
          if ("0x1" === n) return !0;
          throw new nr(e);
        }
        function t9(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return tL(e, t);
        }
        function ne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: n, size: a } = t;
          return n || a ? Number(t4(e, t)) : Number(e);
        }
        function nt(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { size: n } = t,
            a = tL(e);
          return (
            n &&
              (tE(a, n),
              (a = (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { dir: n = "left" } = t,
                  a = e,
                  r = 0;
                for (let e = 0; e < a.length - 1; e++)
                  if ("0" === a["left" === n ? e : a.length - e - 1].toString())
                    r++;
                  else break;
                return "left" === n ? a.slice(r) : a.slice(0, a.length - r);
              })(a, { dir: "right" }))),
            new TextDecoder().decode(a)
          );
        }
        function nn(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { strict: n = !1 } = t;
          try {
            return tK(e, { strict: n }), !0;
          } catch (e) {
            return !1;
          }
        }
        class na extends tP {
          constructor({ max: e, min: t, signed: n, size: a, value: r }) {
            super(
              "Number `"
                .concat(r, "` is not in safe")
                .concat(a ? " ".concat(8 * a, "-bit") : "")
                .concat(n ? " signed" : " unsigned", " integer range ")
                .concat(
                  e
                    ? "(`".concat(t, "` to `").concat(e, "`)")
                    : "(above `".concat(t, "`)")
                )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.IntegerOutOfRangeError",
              });
          }
        }
        class nr extends tP {
          constructor(e) {
            super('Hex value `"'.concat(e, '"` is not a valid boolean.'), {
              metaMessages: [
                'The hex value must be `"0x0"` (false) or `"0x1"` (true).',
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.InvalidHexBooleanError",
              });
          }
        }
        class ni extends tP {
          constructor(e) {
            super(
              "Value `"
                .concat("object" == typeof e ? tO(e) : e, "` of type `")
                .concat(typeof e, "` is an invalid hex type."),
              {
                metaMessages: [
                  'Hex types must be represented as `"0x${string}"`.',
                ],
              }
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.InvalidHexTypeError",
              });
          }
        }
        class no extends tP {
          constructor(e) {
            super("Value `".concat(e, "` is an invalid hex value."), {
              metaMessages: [
                'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.InvalidHexValueError",
              });
          }
        }
        class ns extends tP {
          constructor(e) {
            super(
              'Hex value `"'
                .concat(e, '"` is an odd length (')
                .concat(e.length - 2, " nibbles)."),
              { metaMessages: ["It must be an even length."] }
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.InvalidLengthError",
              });
          }
        }
        class nc extends tP {
          constructor({ givenSize: e, maxSize: t }) {
            super(
              "Size cannot exceed `"
                .concat(t, "` bytes. Given size: `")
                .concat(e, "` bytes.")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.SizeOverflowError",
              });
          }
        }
        class nu extends tP {
          constructor({ offset: e, position: t, size: n }) {
            super(
              "Slice "
                .concat("start" === t ? "starting" : "ending", " at offset `")
                .concat(e, "` is out-of-bounds (size: `")
                .concat(n, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.SliceOffsetOutOfBoundsError",
              });
          }
        }
        class nl extends tP {
          constructor({ size: e, targetSize: t, type: n }) {
            super(
              ""
                .concat(n.charAt(0).toUpperCase())
                .concat(n.slice(1).toLowerCase(), " size (`")
                .concat(e, "`) exceeds padding size (`")
                .concat(t, "`).")
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Hex.SizeExceedsPaddingSizeError",
              });
          }
        }
        var nf = e.i(432453);
        function nd(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { compressed: n } = t,
            { prefix: a, x: r, y: i } = e;
          if (!1 === n || ("bigint" == typeof r && "bigint" == typeof i)) {
            if (4 !== a) throw new nw({ prefix: a, cause: new nP() });
            return;
          }
          if (!0 === n || ("bigint" == typeof r && void 0 === i)) {
            if (3 !== a && 2 !== a)
              throw new nw({ prefix: a, cause: new nx() });
            return;
          }
          throw new nv({ publicKey: e });
        }
        function np(e) {
          let { x: t, y: n } = e;
          return { prefix: n % 2n === 0n ? 2 : 3, x: t };
        }
        function nm(e) {
          let t = (() => {
            if (nn(e)) return ng(e);
            if (
              (function (e) {
                try {
                  if (
                    !(e instanceof Uint8Array) &&
                    (!e ||
                      "object" != typeof e ||
                      !("BYTES_PER_ELEMENT" in e) ||
                      1 !== e.BYTES_PER_ELEMENT ||
                      "Uint8Array" !== e.constructor.name)
                  )
                    throw new tH(e);
                  return !0;
                } catch (e) {
                  return !1;
                }
              })(e)
            )
              return ny(e);
            let { prefix: t, x: n, y: a } = e;
            return "bigint" == typeof n && "bigint" == typeof a
              ? { prefix: null != t ? t : 4, x: n, y: a }
              : { prefix: t, x: n };
          })();
          return nd(t), t;
        }
        function ny(e) {
          return ng(t$(e));
        }
        function ng(e) {
          if (132 !== e.length && 130 !== e.length && 68 !== e.length)
            throw new nO({ publicKey: e });
          if (130 === e.length)
            return {
              prefix: 4,
              x: BigInt(t6(e, 0, 32)),
              y: BigInt(t6(e, 32, 64)),
            };
          if (132 === e.length) {
            let t = Number(t6(e, 0, 1));
            return {
              prefix: t,
              x: BigInt(t6(e, 1, 33)),
              y: BigInt(t6(e, 33, 65)),
            };
          }
          return { prefix: Number(t6(e, 0, 1)), x: BigInt(t6(e, 1, 33)) };
        }
        function nb(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return tL(n_(e, t));
        }
        function n_(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          nd(e);
          let { prefix: n, x: a, y: r } = e,
            { includePrefix: i = !0 } = t;
          return tW(
            i ? tX(n, { size: 1 }) : "0x",
            tX(a, { size: 32 }),
            "bigint" == typeof r ? tX(r, { size: 32 }) : "0x"
          );
        }
        function nh(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            return nd(e, t), !0;
          } catch (e) {
            return !1;
          }
        }
        e.s({ PublicKey: () => nE }, 312006),
          e.s(
            {
              InvalidCompressedPrefixError: () => nx,
              InvalidError: () => nv,
              InvalidPrefixError: () => nw,
              InvalidSerializedSizeError: () => nO,
              InvalidUncompressedPrefixError: () => nP,
              assert: () => nd,
              compress: () => np,
              from: () => nm,
              fromBytes: () => ny,
              fromHex: () => ng,
              toBytes: () => nb,
              toHex: () => n_,
              validate: () => nh,
            },
            34871
          );
        class nv extends tP {
          constructor({ publicKey: e }) {
            super("Value `".concat(tO(e), "` is not a valid public key."), {
              metaMessages: [
                "Public key must contain:",
                "- an `x` and `prefix` value (compressed)",
                "- an `x`, `y`, and `prefix` value (uncompressed)",
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "PublicKey.InvalidError",
              });
          }
        }
        class nw extends tP {
          constructor({ prefix: e, cause: t }) {
            super('Prefix "'.concat(e, '" is invalid.'), { cause: t }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "PublicKey.InvalidPrefixError",
              });
          }
        }
        class nx extends tP {
          constructor() {
            super("Prefix must be 2 or 3 for compressed public keys."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "PublicKey.InvalidCompressedPrefixError",
              });
          }
        }
        class nP extends tP {
          constructor() {
            super("Prefix must be 4 for uncompressed public keys."),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "PublicKey.InvalidUncompressedPrefixError",
              });
          }
        }
        class nO extends tP {
          constructor({ publicKey: e }) {
            super("Value `".concat(e, "` is an invalid public key size."), {
              metaMessages: [
                "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
                "Received ".concat(t5(tJ(e)), " bytes."),
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "PublicKey.InvalidSerializedSizeError",
              });
          }
        }
        var nE = e.i(34871);
        e.s({ Signature: () => n0 }, 571472),
          e.s(
            {
              InvalidRError: () => n$,
              InvalidSError: () => nX,
              InvalidSerializedSizeError: () => nJ,
              InvalidVError: () => nQ,
              InvalidYParityError: () => nZ,
              MissingPropertiesError: () => nY,
              assert: () => nB,
              extract: () => nD,
              from: () => nC,
              fromBytes: () => nA,
              fromDerBytes: () => nU,
              fromDerHex: () => nk,
              fromHex: () => nI,
              fromLegacy: () => nL,
              fromRpc: () => nF,
              fromTuple: () => nT,
              toBytes: () => nz,
              toDerBytes: () => nH,
              toDerHex: () => nM,
              toHex: () => nj,
              toLegacy: () => nV,
              toRpc: () => nN,
              toTuple: () => nR,
              vToYParity: () => nK,
              validate: () => nq,
              yParityToV: () => nW,
            },
            257669
          );
        var nS = e.i(721772);
        let nG = 2n ** 256n - 1n;
        function nB(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { recovered: n } = t;
          if (void 0 === e.r || void 0 === e.s || (n && void 0 === e.yParity))
            throw new nY({ signature: e });
          if (e.r < 0n || e.r > nG) throw new n$({ value: e.r });
          if (e.s < 0n || e.s > nG) throw new nX({ value: e.s });
          if (
            "number" == typeof e.yParity &&
            0 !== e.yParity &&
            1 !== e.yParity
          )
            throw new nZ({ value: e.yParity });
        }
        function nA(e) {
          return nI(t$(e));
        }
        function nI(e) {
          if (130 !== e.length && 132 !== e.length)
            throw new nJ({ signature: e });
          let t = BigInt(t6(e, 0, 32)),
            n = BigInt(t6(e, 32, 64)),
            a = (() => {
              let t = Number("0x".concat(e.slice(130)));
              if (!Number.isNaN(t))
                try {
                  return nK(t);
                } catch (e) {
                  throw new nZ({ value: t });
                }
            })();
          return void 0 === a ? { r: t, s: n } : { r: t, s: n, yParity: a };
        }
        function nD(e) {
          if (void 0 !== e.r && void 0 !== e.s) return nC(e);
        }
        function nC(e) {
          let t =
            "string" == typeof e
              ? nI(e)
              : e instanceof Uint8Array
              ? nA(e)
              : "string" == typeof e.r
              ? nF(e)
              : e.v
              ? nL(e)
              : {
                  r: e.r,
                  s: e.s,
                  ...(void 0 !== e.yParity ? { yParity: e.yParity } : {}),
                };
          return nB(t), t;
        }
        function nU(e) {
          return nk(t$(e));
        }
        function nk(e) {
          let { r: t, s: n } = nS.secp256k1.Signature.fromDER(tJ(e).slice(2));
          return { r: t, s: n };
        }
        function nL(e) {
          return { r: e.r, s: e.s, yParity: nK(e.v) };
        }
        function nF(e) {
          let t = (() => {
            let t = e.v ? Number(e.v) : void 0,
              n = e.yParity ? Number(e.yParity) : void 0;
            if (
              ("number" == typeof t && "number" != typeof n && (n = nK(t)),
              "number" != typeof n)
            )
              throw new nZ({ value: e.yParity });
            return n;
          })();
          return { r: BigInt(e.r), s: BigInt(e.s), yParity: t };
        }
        function nT(e) {
          let [t, n, a] = e;
          return nC({
            r: "0x" === n ? 0n : BigInt(n),
            s: "0x" === a ? 0n : BigInt(a),
            yParity: "0x" === t ? 0 : Number(t),
          });
        }
        function nz(e) {
          return tL(nj(e));
        }
        function nj(e) {
          nB(e);
          let t = e.r,
            n = e.s;
          return tW(
            tX(t, { size: 32 }),
            tX(n, { size: 32 }),
            "number" == typeof e.yParity ? tX(nW(e.yParity), { size: 1 }) : "0x"
          );
        }
        function nH(e) {
          return new nS.secp256k1.Signature(e.r, e.s).toDERRawBytes();
        }
        function nM(e) {
          let t = new nS.secp256k1.Signature(e.r, e.s);
          return "0x".concat(t.toDERHex());
        }
        function nV(e) {
          return { r: e.r, s: e.s, v: nW(e.yParity) };
        }
        function nN(e) {
          let { r: t, s: n, yParity: a } = e;
          return {
            r: tX(t, { size: 32 }),
            s: tX(n, { size: 32 }),
            yParity: 0 === a ? "0x0" : "0x1",
          };
        }
        function nR(e) {
          let { r: t, s: n, yParity: a } = e;
          return [
            a ? "0x01" : "0x",
            0n === t ? "0x" : t3(tX(t)),
            0n === n ? "0x" : t3(tX(n)),
          ];
        }
        function nq(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          try {
            return nB(e, t), !0;
          } catch (e) {
            return !1;
          }
        }
        function nK(e) {
          if (0 === e || 27 === e) return 0;
          if (1 === e || 28 === e) return 1;
          if (e >= 35) return +(e % 2 == 0);
          throw new nQ({ value: e });
        }
        function nW(e) {
          if (0 === e) return 27;
          if (1 === e) return 28;
          throw new nZ({ value: e });
        }
        class nJ extends tP {
          constructor({ signature: e }) {
            super("Value `".concat(e, "` is an invalid signature size."), {
              metaMessages: [
                "Expected: 64 bytes or 65 bytes.",
                "Received ".concat(t5(tJ(e)), " bytes."),
              ],
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Signature.InvalidSerializedSizeError",
              });
          }
        }
        class nY extends tP {
          constructor({ signature: e }) {
            super(
              "Signature `".concat(
                tO(e),
                "` is missing either an `r`, `s`, or `yParity` property."
              )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Signature.MissingPropertiesError",
              });
          }
        }
        class n$ extends tP {
          constructor({ value: e }) {
            super(
              "Value `".concat(
                e,
                "` is an invalid r value. r must be a positive integer less than 2^256."
              )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Signature.InvalidRError",
              });
          }
        }
        class nX extends tP {
          constructor({ value: e }) {
            super(
              "Value `".concat(
                e,
                "` is an invalid s value. s must be a positive integer less than 2^256."
              )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Signature.InvalidSError",
              });
          }
        }
        class nZ extends tP {
          constructor({ value: e }) {
            super(
              "Value `".concat(
                e,
                "` is an invalid y-parity value. Y-parity must be 0 or 1."
              )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Signature.InvalidYParityError",
              });
          }
        }
        class nQ extends tP {
          constructor({ value: e }) {
            super(
              "Value `".concat(
                e,
                "` is an invalid v value. v must be 27, 28 or >=35."
              )
            ),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "Signature.InvalidVError",
              });
          }
        }
        var n0 = e.i(257669);
        e.s({ WebAuthnP256: () => aP }, 17335),
          e.s(
            {
              CredentialCreationFailedError: () => aw,
              CredentialRequestFailedError: () => ax,
              createChallenge: () => ad,
              createCredential: () => ap,
              getAuthenticatorData: () => am,
              getClientDataJSON: () => ay,
              getCredentialCreationOptions: () => ag,
              getCredentialRequestOptions: () => ab,
              getSignPayload: () => a_,
              sign: () => ah,
              verify: () => av,
            },
            541934
          );
        let n1 = new TextEncoder(),
          n2 = new TextDecoder(),
          n6 = Object.fromEntries(
            Array.from(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
            ).map((e, t) => [t, e.charCodeAt(0)])
          ),
          n5 = {
            ...Object.fromEntries(
              Array.from(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              ).map((e, t) => [e.charCodeAt(0), t])
            ),
            61: 0,
            45: 62,
            95: 63,
          };
        function n3(e) {
          let t = e.replace(/=+$/, ""),
            n = t.length,
            a = new Uint8Array(n + 3);
          n1.encodeInto(t + "===", a);
          for (let e = 0, n = 0; e < t.length; e += 4, n += 3) {
            let t =
              (n5[a[e]] << 18) +
              (n5[a[e + 1]] << 12) +
              (n5[a[e + 2]] << 6) +
              n5[a[e + 3]];
            (a[n] = t >> 16), (a[n + 1] = (t >> 8) & 255), (a[n + 2] = 255 & t);
          }
          return new Uint8Array(
            a.buffer,
            0,
            (n >> 2) * 3 + (n % 4 && (n % 4) - 1)
          );
        }
        e.i(434396);
        var n8 = e.i(627582),
          n4 = e.i(404149);
        function n7(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
            a = (0, n4.sha256)(tU(e));
          return "Bytes" === n ? a : t$(a);
        }
        var n9 = e.i(172322),
          ae = e.i(703009),
          at = e.i(459510),
          an = e.i(882677),
          aa = e.i(41598);
        let ar = {
            p: BigInt(
              "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
            ),
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            h: BigInt(1),
            a: BigInt(
              "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
            ),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
          },
          ai = {
            p: BigInt(
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
            ),
            n: BigInt(
              "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
            ),
            h: BigInt(1),
            a: BigInt(
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
            ),
            b: BigInt(
              "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
            ),
            Gx: BigInt(
              "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
            ),
            Gy: BigInt(
              "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
            ),
          },
          ao = {
            p: BigInt(
              "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            ),
            n: BigInt(
              "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
            ),
            h: BigInt(1),
            a: BigInt(
              "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
            ),
            b: BigInt(
              "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
            ),
            Gx: BigInt(
              "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
            ),
            Gy: BigInt(
              "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
            ),
          },
          as = (0, an.Field)(ar.p),
          ac = (0, an.Field)(ai.p),
          au = (0, an.Field)(ao.p),
          al = (0, ae.createCurve)({ ...ar, Fp: as, lowS: !1 }, n9.sha256);
        async function af(e) {
          try {
            let t = e.getPublicKey();
            if (!t) throw new aw();
            let n = new Uint8Array(t),
              a = await crypto.subtle.importKey(
                "spki",
                new Uint8Array(n),
                { name: "ECDSA", namedCurve: "P-256", hash: "SHA-256" },
                !0,
                ["verify"]
              ),
              r = new Uint8Array(await crypto.subtle.exportKey("raw", a));
            return nm(r);
          } catch (i) {
            if ("Permission denied to access object" !== i.message) throw i;
            let t = new Uint8Array(e.attestationObject),
              n = (e) => {
                let n = new Uint8Array([e, 88, 32]);
                for (let e = 0; e < t.length - n.length; e++)
                  if (n.every((n, a) => t[e + a] === n)) return e + n.length;
                throw new aw();
              },
              a = n(33),
              r = n(34);
            return nm(
              new Uint8Array([4, ...t.slice(a, a + 32), ...t.slice(r, r + 32)])
            );
          }
        }
        (0, at.createHasher)(
          al.Point,
          (function (e, t) {
            let n = (0, aa.mapToCurveSimpleSWU)(e.Fp, t);
            return (e) => n(e[0]);
          })(al.Point, {
            A: ar.a,
            B: ar.b,
            Z: al.Point.Fp.create(BigInt("-10")),
          }),
          {
            DST: "P256_XMD:SHA-256_SSWU_RO_",
            encodeDST: "P256_XMD:SHA-256_SSWU_NU_",
            p: ar.p,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: n9.sha256,
          }
        ),
          (0, ae.createCurve)({ ...ai, Fp: ac, lowS: !1 }, n9.sha384),
          (0, ae.createCurve)(
            {
              ...ao,
              Fp: au,
              lowS: !1,
              allowedPrivateKeyLengths: [130, 131, 132],
            },
            n9.sha512
          );
        let ad = Uint8Array.from([
          105, 171, 180, 181, 160, 222, 75, 198, 42, 42, 32, 31, 141, 37, 186,
          233,
        ]);
        async function ap(e) {
          let {
              createFn: t = window.navigator.credentials.create.bind(
                window.navigator.credentials
              ),
              ...n
            } = e,
            a = ag(n);
          try {
            let e = await t(a);
            if (!e) throw new aw();
            let n = e.response,
              r = await af(n);
            return { id: e.id, publicKey: r, raw: e };
          } catch (e) {
            throw new aw({ cause: e });
          }
        }
        function am() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              flag: t = 5,
              rpId: n = window.location.hostname,
              signCount: a = 0,
            } = e,
            r = n7(tZ(n));
          return tW(r, tX(t, { size: 1 }), tX(a, { size: 4 }));
        }
        function ay(e) {
          let {
            challenge: t,
            crossOrigin: n = !1,
            extraClientData: a,
            origin: r = window.location.origin,
          } = e;
          return JSON.stringify({
            type: "webauthn.get",
            challenge: (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  { pad: n = !0, url: a = !1 } = t,
                  r = new Uint8Array(4 * Math.ceil(e.length / 3));
                for (let t = 0, n = 0; n < e.length; t += 4, n += 3) {
                  let a = (e[n] << 16) + (e[n + 1] << 8) + (0 | e[n + 2]);
                  (r[t] = n6[a >> 18]),
                    (r[t + 1] = n6[(a >> 12) & 63]),
                    (r[t + 2] = n6[(a >> 6) & 63]),
                    (r[t + 3] = n6[63 & a]);
                }
                let i = e.length % 3,
                  o = 4 * Math.floor(e.length / 3) + (i && i + 1),
                  s = n2.decode(new Uint8Array(r.buffer, 0, o));
                return (
                  n && 1 === i && (s += "=="),
                  n && 2 === i && (s += "="),
                  a && (s = s.replaceAll("+", "-").replaceAll("/", "_")),
                  s
                );
              })(tL(e), t);
            })(t, { url: !0, pad: !1 }),
            origin: r,
            crossOrigin: n,
            ...a,
          });
        }
        function ag(e) {
          var t, n, a;
          let {
              attestation: r = "none",
              authenticatorSelection: i = {
                residentKey: "preferred",
                requireResidentKey: !1,
                userVerification: "required",
              },
              challenge: o = ad,
              excludeCredentialIds: s,
              name: c,
              rp: u = {
                id: window.location.hostname,
                name: window.document.title,
              },
              user: l,
              extensions: f,
            } = e,
            d = null != (t = null == l ? void 0 : l.name) ? t : c;
          return {
            publicKey: {
              attestation: r,
              authenticatorSelection: i,
              challenge: o,
              ...(s
                ? {
                    excludeCredentials:
                      null == s
                        ? void 0
                        : s.map((e) => ({ id: n3(e), type: "public-key" })),
                  }
                : {}),
              pubKeyCredParams: [{ type: "public-key", alg: -7 }],
              rp: u,
              user: {
                id:
                  null != (n = null == l ? void 0 : l.id)
                    ? n
                    : (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          { as: n = "string" == typeof e ? "Hex" : "Bytes" } =
                            t,
                          a = (0, n8.keccak_256)(tU(e));
                        return "Bytes" === n ? a : t$(a);
                      })(tF(d), { as: "Bytes" }),
                name: d,
                displayName:
                  null != (a = null == l ? void 0 : l.displayName) ? a : d,
              },
              extensions: f,
            },
          };
        }
        function ab(e) {
          let {
            credentialId: t,
            challenge: n,
            rpId: a = window.location.hostname,
            userVerification: r = "required",
          } = e;
          return {
            publicKey: {
              ...(t
                ? { allowCredentials: [{ id: n3(t), type: "public-key" }] }
                : {}),
              challenge: tL(n),
              rpId: a,
              userVerification: r,
            },
          };
        }
        function a_(e) {
          let {
              challenge: t,
              crossOrigin: n,
              extraClientData: a,
              flag: r,
              origin: i,
              rpId: o,
              signCount: s,
              userVerification: c = "required",
            } = e,
            u = am({ flag: r, rpId: o, signCount: s }),
            l = ay({
              challenge: t,
              crossOrigin: n,
              extraClientData: a,
              origin: i,
            }),
            f = n7(tZ(l)),
            d = l.indexOf('"challenge"'),
            p = l.indexOf('"type"');
          return {
            metadata: {
              authenticatorData: u,
              clientDataJSON: l,
              challengeIndex: d,
              typeIndex: p,
              userVerificationRequired: "required" === c,
            },
            payload: tW(u, f),
          };
        }
        async function ah(e) {
          let {
              getFn: t = window.navigator.credentials.get.bind(
                window.navigator.credentials
              ),
              ...n
            } = e,
            a = ab(n);
          try {
            let e = await t(a);
            if (!e) throw new ax();
            let n = e.response,
              r = String.fromCharCode(...new Uint8Array(n.clientDataJSON)),
              i = r.indexOf('"challenge"'),
              o = r.indexOf('"type"'),
              s = (function (e) {
                let t = 0 === e[4] ? 5 : 4,
                  n = t + 32,
                  a = 0 === e[n + 2] ? n + 3 : n + 2,
                  r = BigInt(t$(e.slice(t, n))),
                  i = BigInt(t$(e.slice(a)));
                return { r, s: i > al.CURVE.n / 2n ? al.CURVE.n - i : i };
              })(new Uint8Array(n.signature));
            return {
              metadata: {
                authenticatorData: t$(new Uint8Array(n.authenticatorData)),
                clientDataJSON: r,
                challengeIndex: i,
                typeIndex: o,
                userVerificationRequired:
                  "required" === a.publicKey.userVerification,
              },
              signature: s,
              raw: e,
            };
          } catch (e) {
            throw new ax({ cause: e });
          }
        }
        function av(e) {
          let {
              challenge: t,
              hash: n = !0,
              metadata: a,
              publicKey: r,
              signature: i,
            } = e,
            {
              authenticatorData: o,
              challengeIndex: s,
              clientDataJSON: c,
              typeIndex: u,
              userVerificationRequired: l,
            } = a,
            f = tL(o);
          if (f.length < 37) return !1;
          let d = f[32];
          if (
            (1 & d) != 1 ||
            (l && (4 & d) != 4) ||
            ((8 & d) != 8 && (16 & d) == 16)
          )
            return !1;
          let p = '"type":"webauthn.get"';
          if (p !== c.slice(Number(u), p.length + 1)) return !1;
          let m = c.slice(Number(s)).match(/^"challenge":"(.*?)"/);
          if (!m) return !1;
          let [y, g] = m;
          if (t$(n3(g)) !== t) return !1;
          let {
            hash: b,
            payload: _,
            publicKey: h,
            signature: v,
          } = {
            hash: n,
            payload: tC(f, n7(tF(c), { as: "Bytes" })),
            publicKey: r,
            signature: i,
          };
          return al.verify(
            v,
            _ instanceof Uint8Array ? _ : tL(_),
            n_(h).substring(2),
            ...(b ? [{ prehash: !0, lowS: !0 }] : [])
          );
        }
        class aw extends tP {
          constructor({ cause: e } = {}) {
            super("Failed to create credential.", { cause: e }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "WebAuthnP256.CredentialCreationFailedError",
              });
          }
        }
        class ax extends tP {
          constructor({ cause: e } = {}) {
            super("Failed to request credential.", { cause: e }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "WebAuthnP256.CredentialRequestFailedError",
              });
          }
        }
        var aP = e.i(541934);
        async function aO() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { extractable: t = !1 } = e,
            n = await globalThis.crypto.subtle.generateKey(
              { name: "ECDSA", namedCurve: "P-256" },
              t,
              ["sign", "verify"]
            ),
            a = nm(
              new Uint8Array(
                await globalThis.crypto.subtle.exportKey("raw", n.publicKey)
              )
            );
          return { privateKey: n.privateKey, publicKey: a };
        }
        async function aE(e) {
          let { payload: t, privateKey: n } = e,
            a = tk(
              new Uint8Array(
                await globalThis.crypto.subtle.sign(
                  { name: "ECDSA", hash: "SHA-256" },
                  n,
                  tU(t)
                )
              )
            ),
            r = tj(tz(a, 0, 32)),
            i = tj(tz(a, 32, 64));
          return i > al.CURVE.n / 2n && (i = al.CURVE.n - i), { r, s: i };
        }
        async function aS(e) {
          let { payload: t, signature: n } = e,
            a = await globalThis.crypto.subtle.importKey(
              "raw",
              nb(e.publicKey),
              { name: "ECDSA", namedCurve: "P-256" },
              !0,
              ["verify"]
            );
          return await globalThis.crypto.subtle.verify(
            { name: "ECDSA", hash: "SHA-256" },
            a,
            tC(tL(tX(n.r, void 0)), tL(tX(n.s, void 0))),
            tU(t)
          );
        }
        e.s({ WebCryptoP256: () => aG }, 97417),
          e.s(
            { createKeyPair: () => aO, sign: () => aE, verify: () => aS },
            932147
          );
        var aG = e.i(932147);
        function aB(e) {
          return new Promise((t, n) => {
            (e.oncomplete = e.onsuccess = () => t(e.result)),
              (e.onabort = e.onerror = () => n(e.error));
          });
        }
        function aA(e, t) {
          let n = indexedDB.open(e);
          n.onupgradeneeded = () => n.result.createObjectStore(t);
          let a = aB(n);
          return (e, n) => a.then((a) => n(a.transaction(t, e).objectStore(t)));
        }
        function aI() {
          return t || (t = aA("keyval-store", "keyval")), t;
        }
        function aD(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : aI();
          return t("readonly", (t) => aB(t.get(e)));
        }
        function aC(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : aI();
          return n("readwrite", (n) => (n.put(t, e), aB(n.transaction)));
        }
        function aU(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : aI();
          return t("readwrite", (t) => (t.delete(e), aB(t.transaction)));
        }
        e.s(
          {
            createStore: () => aA,
            del: () => aU,
            get: () => aD,
            set: () => aC,
          },
          80654
        ),
          e.s({ entryPoint06Abi: () => ak }, 230928);
        let ak = [
          {
            inputs: [
              { name: "preOpGas", type: "uint256" },
              { name: "paid", type: "uint256" },
              { name: "validAfter", type: "uint48" },
              { name: "validUntil", type: "uint48" },
              { name: "targetSuccess", type: "bool" },
              { name: "targetResult", type: "bytes" },
            ],
            name: "ExecutionResult",
            type: "error",
          },
          {
            inputs: [
              { name: "opIndex", type: "uint256" },
              { name: "reason", type: "string" },
            ],
            name: "FailedOp",
            type: "error",
          },
          {
            inputs: [{ name: "sender", type: "address" }],
            name: "SenderAddressResult",
            type: "error",
          },
          {
            inputs: [{ name: "aggregator", type: "address" }],
            name: "SignatureValidationFailed",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "preOpGas", type: "uint256" },
                  { name: "prefund", type: "uint256" },
                  { name: "sigFailed", type: "bool" },
                  { name: "validAfter", type: "uint48" },
                  { name: "validUntil", type: "uint48" },
                  { name: "paymasterContext", type: "bytes" },
                ],
                name: "returnInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "senderInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "factoryInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "paymasterInfo",
                type: "tuple",
              },
            ],
            name: "ValidationResult",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "preOpGas", type: "uint256" },
                  { name: "prefund", type: "uint256" },
                  { name: "sigFailed", type: "bool" },
                  { name: "validAfter", type: "uint48" },
                  { name: "validUntil", type: "uint48" },
                  { name: "paymasterContext", type: "bytes" },
                ],
                name: "returnInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "senderInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "factoryInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "paymasterInfo",
                type: "tuple",
              },
              {
                components: [
                  { name: "aggregator", type: "address" },
                  {
                    components: [
                      { name: "stake", type: "uint256" },
                      { name: "unstakeDelaySec", type: "uint256" },
                    ],
                    name: "stakeInfo",
                    type: "tuple",
                  },
                ],
                name: "aggregatorInfo",
                type: "tuple",
              },
            ],
            name: "ValidationResultWithAggregation",
            type: "error",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "userOpHash", type: "bytes32" },
              { indexed: !0, name: "sender", type: "address" },
              { indexed: !1, name: "factory", type: "address" },
              { indexed: !1, name: "paymaster", type: "address" },
            ],
            name: "AccountDeployed",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "account", type: "address" },
              { indexed: !1, name: "totalDeposit", type: "uint256" },
            ],
            name: "Deposited",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
            name: "SignatureAggregatorChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "account", type: "address" },
              { indexed: !1, name: "totalStaked", type: "uint256" },
              { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "StakeLocked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "account", type: "address" },
              { indexed: !1, name: "withdrawTime", type: "uint256" },
            ],
            name: "StakeUnlocked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "account", type: "address" },
              { indexed: !1, name: "withdrawAddress", type: "address" },
              { indexed: !1, name: "amount", type: "uint256" },
            ],
            name: "StakeWithdrawn",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "userOpHash", type: "bytes32" },
              { indexed: !0, name: "sender", type: "address" },
              { indexed: !0, name: "paymaster", type: "address" },
              { indexed: !1, name: "nonce", type: "uint256" },
              { indexed: !1, name: "success", type: "bool" },
              { indexed: !1, name: "actualGasCost", type: "uint256" },
              { indexed: !1, name: "actualGasUsed", type: "uint256" },
            ],
            name: "UserOperationEvent",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "userOpHash", type: "bytes32" },
              { indexed: !0, name: "sender", type: "address" },
              { indexed: !1, name: "nonce", type: "uint256" },
              { indexed: !1, name: "revertReason", type: "bytes" },
            ],
            name: "UserOperationRevertReason",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, name: "account", type: "address" },
              { indexed: !1, name: "withdrawAddress", type: "address" },
              { indexed: !1, name: "amount", type: "uint256" },
            ],
            name: "Withdrawn",
            type: "event",
          },
          {
            inputs: [],
            name: "SIG_VALIDATION_FAILED",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "initCode", type: "bytes" },
              { name: "sender", type: "address" },
              { name: "paymasterAndData", type: "bytes" },
            ],
            name: "_validateSenderAndPaymaster",
            outputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
            name: "addStake",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "depositTo",
            outputs: [],
            stateMutability: "payable",
            type: "function",
          },
          {
            inputs: [{ name: "", type: "address" }],
            name: "deposits",
            outputs: [
              { name: "deposit", type: "uint112" },
              { name: "staked", type: "bool" },
              { name: "stake", type: "uint112" },
              { name: "unstakeDelaySec", type: "uint32" },
              { name: "withdrawTime", type: "uint48" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "account", type: "address" }],
            name: "getDepositInfo",
            outputs: [
              {
                components: [
                  { name: "deposit", type: "uint112" },
                  { name: "staked", type: "bool" },
                  { name: "stake", type: "uint112" },
                  { name: "unstakeDelaySec", type: "uint32" },
                  { name: "withdrawTime", type: "uint48" },
                ],
                name: "info",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { name: "sender", type: "address" },
              { name: "key", type: "uint192" },
            ],
            name: "getNonce",
            outputs: [{ name: "nonce", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ name: "initCode", type: "bytes" }],
            name: "getSenderAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
            ],
            name: "getUserOpHash",
            outputs: [{ name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  {
                    components: [
                      { name: "sender", type: "address" },
                      { name: "nonce", type: "uint256" },
                      { name: "initCode", type: "bytes" },
                      { name: "callData", type: "bytes" },
                      { name: "callGasLimit", type: "uint256" },
                      { name: "verificationGasLimit", type: "uint256" },
                      { name: "preVerificationGas", type: "uint256" },
                      { name: "maxFeePerGas", type: "uint256" },
                      { name: "maxPriorityFeePerGas", type: "uint256" },
                      { name: "paymasterAndData", type: "bytes" },
                      { name: "signature", type: "bytes" },
                    ],
                    name: "userOps",
                    type: "tuple[]",
                  },
                  { name: "aggregator", type: "address" },
                  { name: "signature", type: "bytes" },
                ],
                name: "opsPerAggregator",
                type: "tuple[]",
              },
              { name: "beneficiary", type: "address" },
            ],
            name: "handleAggregatedOps",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "ops",
                type: "tuple[]",
              },
              { name: "beneficiary", type: "address" },
            ],
            name: "handleOps",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "key", type: "uint192" }],
            name: "incrementNonce",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "callData", type: "bytes" },
              {
                components: [
                  {
                    components: [
                      { name: "sender", type: "address" },
                      { name: "nonce", type: "uint256" },
                      { name: "callGasLimit", type: "uint256" },
                      { name: "verificationGasLimit", type: "uint256" },
                      { name: "preVerificationGas", type: "uint256" },
                      { name: "paymaster", type: "address" },
                      { name: "maxFeePerGas", type: "uint256" },
                      { name: "maxPriorityFeePerGas", type: "uint256" },
                    ],
                    name: "mUserOp",
                    type: "tuple",
                  },
                  { name: "userOpHash", type: "bytes32" },
                  { name: "prefund", type: "uint256" },
                  { name: "contextOffset", type: "uint256" },
                  { name: "preOpGas", type: "uint256" },
                ],
                name: "opInfo",
                type: "tuple",
              },
              { name: "context", type: "bytes" },
            ],
            name: "innerHandleOp",
            outputs: [{ name: "actualGasCost", type: "uint256" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "", type: "address" },
              { name: "", type: "uint192" },
            ],
            name: "nonceSequenceNumber",
            outputs: [{ name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "op",
                type: "tuple",
              },
              { name: "target", type: "address" },
              { name: "targetCallData", type: "bytes" },
            ],
            name: "simulateHandleOp",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOp",
                type: "tuple",
              },
            ],
            name: "simulateValidation",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "unlockStake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ name: "withdrawAddress", type: "address" }],
            name: "withdrawStake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { name: "withdrawAddress", type: "address" },
              { name: "withdrawAmount", type: "uint256" },
            ],
            name: "withdrawTo",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ];
        e.s({ entryPoint06Address: () => aL }, 753304);
        let aL = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
        e.s({ getUserOperationHash: () => aV }, 941559);
        var aF = e.i(750671),
          aT = e.i(831826),
          az = e.i(754444);
        function aj(e) {
          let { authorization: t, factory: n, factoryData: a } = e;
          if (
            "0x7702" === n ||
            "0x7702000000000000000000000000000000000000" === n
          ) {
            if (!t) return "0x7702000000000000000000000000000000000000";
            let e = t.address;
            return (0, ti.concat)([e, null != a ? a : "0x"]);
          }
          return n ? (0, ti.concat)([n, null != a ? a : "0x"]) : "0x";
        }
        function aH(e) {
          var t, n;
          let {
              callGasLimit: a,
              callData: r,
              maxPriorityFeePerGas: i,
              maxFeePerGas: o,
              paymaster: s,
              paymasterData: c,
              paymasterPostOpGasLimit: u,
              paymasterVerificationGasLimit: l,
              sender: f,
              signature: d = "0x",
              verificationGasLimit: p,
            } = e,
            m = (0, ti.concat)([
              (0, te.pad)((0, e9.numberToHex)(p || 0n), { size: 16 }),
              (0, te.pad)((0, e9.numberToHex)(a || 0n), { size: 16 }),
            ]),
            y = aj(e),
            g = (0, ti.concat)([
              (0, te.pad)((0, e9.numberToHex)(i || 0n), { size: 16 }),
              (0, te.pad)((0, e9.numberToHex)(o || 0n), { size: 16 }),
            ]),
            b = null != (t = e.nonce) ? t : 0n;
          return {
            accountGasLimits: m,
            callData: r,
            initCode: y,
            gasFees: g,
            nonce: b,
            paymasterAndData: s
              ? (0, ti.concat)([
                  s,
                  (0, te.pad)((0, e9.numberToHex)(l || 0n), { size: 16 }),
                  (0, te.pad)((0, e9.numberToHex)(u || 0n), { size: 16 }),
                  c || "0x",
                ])
              : "0x",
            preVerificationGas: null != (n = e.preVerificationGas) ? n : 0n,
            sender: f,
            signature: d,
          };
        }
        let aM = {
          PackedUserOperation: [
            { type: "address", name: "sender" },
            { type: "uint256", name: "nonce" },
            { type: "bytes", name: "initCode" },
            { type: "bytes", name: "callData" },
            { type: "bytes32", name: "accountGasLimits" },
            { type: "uint256", name: "preVerificationGas" },
            { type: "bytes32", name: "gasFees" },
            { type: "bytes", name: "paymasterAndData" },
          ],
        };
        function aV(e) {
          let { chainId: t, entryPointAddress: n, entryPointVersion: a } = e,
            r = e.userOperation,
            {
              authorization: i,
              callData: o = "0x",
              callGasLimit: s,
              maxFeePerGas: c,
              maxPriorityFeePerGas: u,
              nonce: l,
              paymasterAndData: f = "0x",
              preVerificationGas: d,
              sender: p,
              verificationGasLimit: m,
            } = r;
          if ("0.8" === a)
            return (0, az.hashTypedData)(
              (function (e) {
                let { chainId: t, entryPointAddress: n, userOperation: a } = e;
                return {
                  types: aM,
                  primaryType: "PackedUserOperation",
                  domain: {
                    name: "ERC4337",
                    version: "1",
                    chainId: t,
                    verifyingContract: n,
                  },
                  message: aH(a),
                };
              })({ chainId: t, entryPointAddress: n, userOperation: r })
            );
          let y = (() => {
            if ("0.6" === a) {
              var e, t;
              let n = aj({
                authorization: i,
                factory: null == (e = r.initCode) ? void 0 : e.slice(0, 42),
                factoryData: null == (t = r.initCode) ? void 0 : t.slice(42),
              });
              return (0, aF.encodeAbiParameters)(
                [
                  { type: "address" },
                  { type: "uint256" },
                  { type: "bytes32" },
                  { type: "bytes32" },
                  { type: "uint256" },
                  { type: "uint256" },
                  { type: "uint256" },
                  { type: "uint256" },
                  { type: "uint256" },
                  { type: "bytes32" },
                ],
                [
                  p,
                  l,
                  (0, aT.keccak256)(n),
                  (0, aT.keccak256)(o),
                  s,
                  m,
                  d,
                  c,
                  u,
                  (0, aT.keccak256)(f),
                ]
              );
            }
            if ("0.7" === a) {
              let e = aH(r);
              return (0, aF.encodeAbiParameters)(
                [
                  { type: "address" },
                  { type: "uint256" },
                  { type: "bytes32" },
                  { type: "bytes32" },
                  { type: "bytes32" },
                  { type: "uint256" },
                  { type: "bytes32" },
                  { type: "bytes32" },
                ],
                [
                  e.sender,
                  e.nonce,
                  (0, aT.keccak256)(e.initCode),
                  (0, aT.keccak256)(e.callData),
                  e.accountGasLimits,
                  e.preVerificationGas,
                  e.gasFees,
                  (0, aT.keccak256)(e.paymasterAndData),
                ]
              );
            }
            throw Error('entryPointVersion "'.concat(a, '" not supported.'));
          })();
          return (0, aT.keccak256)(
            (0, aF.encodeAbiParameters)(
              [{ type: "bytes32" }, { type: "address" }, { type: "uint256" }],
              [(0, aT.keccak256)(y), n, BigInt(t)]
            )
          );
        }
        e.s({ toSmartAccount: () => aJ }, 130338);
        var aN = e.i(930640),
          aR = e.i(133620),
          aq = e.i(107511),
          aK = e.i(677386),
          aW = e.i(883449);
        async function aJ(e) {
          let {
              extend: t,
              nonceKeyManager: n = (0, aK.createNonceManager)({
                source: { get: () => Date.now(), set() {} },
              }),
              ...a
            } = e,
            r = !1,
            i = await e.getAddress();
          return {
            ...t,
            ...a,
            address: i,
            async getFactoryArgs() {
              return "isDeployed" in this && (await this.isDeployed())
                ? { factory: void 0, factoryData: void 0 }
                : e.getFactoryArgs();
            },
            async getNonce(t) {
              var a;
              let r =
                null != (a = null == t ? void 0 : t.key)
                  ? a
                  : BigInt(
                      await n.consume({
                        address: i,
                        chainId: e.client.chain.id,
                        client: e.client,
                      })
                    );
              return e.getNonce
                ? await e.getNonce({ ...t, key: r })
                : await (0, aq.readContract)(e.client, {
                    abi: (0, aN.parseAbi)([
                      "function getNonce(address, uint192) pure returns (uint256)",
                    ]),
                    address: e.entryPoint.address,
                    functionName: "getNonce",
                    args: [i, r],
                  });
            },
            isDeployed: async () =>
              !!r ||
              (r = !!(await (0, ed.getAction)(
                e.client,
                aR.getCode,
                "getCode"
              )({ address: i }))),
            ...(e.sign
              ? {
                  async sign(t) {
                    let [{ factory: n, factoryData: a }, r] = await Promise.all(
                      [this.getFactoryArgs(), e.sign(t)]
                    );
                    return n && a
                      ? (0, aW.serializeErc6492Signature)({
                          address: n,
                          data: a,
                          signature: r,
                        })
                      : r;
                  },
                }
              : {}),
            async signMessage(t) {
              let [{ factory: n, factoryData: a }, r] = await Promise.all([
                this.getFactoryArgs(),
                e.signMessage(t),
              ]);
              return n && a && "0x7702" !== n
                ? (0, aW.serializeErc6492Signature)({
                    address: n,
                    data: a,
                    signature: r,
                  })
                : r;
            },
            async signTypedData(t) {
              let [{ factory: n, factoryData: a }, r] = await Promise.all([
                this.getFactoryArgs(),
                e.signTypedData(t),
              ]);
              return n && a && "0x7702" !== n
                ? (0, aW.serializeErc6492Signature)({
                    address: n,
                    data: a,
                    signature: r,
                  })
                : r;
            },
            type: "smart",
          };
        }
      },
      [
        91075, 844841, 929828, 177066, 209175, 312006, 257669, 571472, 17335,
        97417, 80654, 230928, 753304, 941559, 130338,
      ],
    ],
  },
]);

//# sourceMappingURL=7378526d1a940747.js.map
