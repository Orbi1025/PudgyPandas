(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    709075: [
      (e) => {
        "use strict";
        e.s({ getSocket: () => i, rpc: () => u }, 709075);
        var t = e.i(506868);
        e.s({ getWebSocketRpcClient: () => l }, 156038);
        var s = e.i(926777),
          r = e.i(309697),
          n = e.i(656722),
          a = e.i(361703);
        let c = new Map();
        async function o(e) {
          let {
              getSocket: t,
              keepAlive: o = !0,
              key: l = "socket",
              reconnect: i = !0,
              url: u,
            } = e,
            { interval: d = 3e4 } = "object" == typeof o ? o : {},
            { attempts: f = 5, delay: h = 2e3 } = "object" == typeof i ? i : {},
            b = JSON.stringify({ keepAlive: o, key: l, url: u, reconnect: i }),
            p = c.get(b);
          if (p) return p;
          let v = 0,
            { schedule: k } = (0, r.createBatchScheduler)({
              id: b,
              fn: async () => {
                let e,
                  r,
                  l,
                  k = new Map(),
                  m = new Map(),
                  j = !1;
                function y() {
                  i && v < f
                    ? j ||
                      ((j = !0),
                      v++,
                      null == r || r.close(),
                      setTimeout(async () => {
                        await S().catch(console.error), (j = !1);
                      }, h))
                    : (k.clear(), m.clear());
                }
                async function S() {
                  let n = await t({
                    onClose() {
                      var e, t;
                      for (let t of k.values())
                        null == (e = t.onError) ||
                          e.call(t, new s.SocketClosedError({ url: u }));
                      for (let e of m.values())
                        null == (t = e.onError) ||
                          t.call(e, new s.SocketClosedError({ url: u }));
                      y();
                    },
                    onError(t) {
                      var s, r;
                      for (let r of ((e = t), k.values()))
                        null == (s = r.onError) || s.call(r, e);
                      for (let t of m.values())
                        null == (r = t.onError) || r.call(t, e);
                      y();
                    },
                    onOpen() {
                      (e = void 0), (v = 0);
                    },
                    onResponse(e) {
                      let t = "eth_subscription" === e.method,
                        s = t ? e.params.subscription : e.id,
                        r = t ? m : k,
                        n = r.get(s);
                      n && n.onResponse(e), t || r.delete(s);
                    },
                  });
                  if (
                    ((r = n),
                    o &&
                      (l && clearInterval(l),
                      (l = setInterval(() => {
                        var e;
                        return null == (e = r.ping) ? void 0 : e.call(r);
                      }, d))),
                    i && m.size > 0)
                  )
                    for (let [
                      e,
                      { onResponse: t, body: s, onError: r },
                    ] of m.entries())
                      s &&
                        (m.delete(e),
                        null == p ||
                          p.request({ body: s, onResponse: t, onError: r }));
                  return n;
                }
                return (
                  await S(),
                  (e = void 0),
                  (p = {
                    close() {
                      l && clearInterval(l), r.close(), c.delete(b);
                    },
                    get socket() {
                      return r;
                    },
                    request(t) {
                      var s;
                      let { body: n, onError: c, onResponse: o } = t;
                      e && c && c(e);
                      let l = null != (s = n.id) ? s : a.idCache.take(),
                        i = (e) => {
                          var t;
                          ("number" != typeof e.id || l === e.id) &&
                            ("eth_subscribe" === n.method &&
                              "string" == typeof e.result &&
                              m.set(e.result, {
                                onResponse: i,
                                onError: c,
                                body: n,
                              }),
                            "eth_unsubscribe" === n.method &&
                              m.delete(null == (t = n.params) ? void 0 : t[0]),
                            o(e));
                        };
                      k.set(l, { onResponse: i, onError: c });
                      try {
                        r.request({ body: { jsonrpc: "2.0", id: l, ...n } });
                      } catch (e) {
                        null == c || c(e);
                      }
                    },
                    requestAsync(e) {
                      let { body: t, timeout: r = 1e4 } = e;
                      return (0, n.withTimeout)(
                        () =>
                          new Promise((e, s) =>
                            this.request({ body: t, onError: s, onResponse: e })
                          ),
                        {
                          errorInstance: new s.TimeoutError({
                            body: t,
                            url: u,
                          }),
                          timeout: r,
                        }
                      );
                    },
                    requests: k,
                    subscriptions: m,
                    url: u,
                  }),
                  c.set(b, p),
                  [p]
                );
              },
            }),
            [m, [j]] = await k();
          return j;
        }
        async function l(t) {
          let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { keepAlive: n, reconnect: a } = r;
          return o({
            async getSocket(r) {
              let { onClose: n, onError: a, onOpen: c, onResponse: o } = r,
                l = await e
                  .r(433434)(e.i)
                  .then((e) => e.WebSocket),
                i = new l(t);
              function u() {
                i.removeEventListener("close", u),
                  i.removeEventListener("message", d),
                  i.removeEventListener("error", a),
                  i.removeEventListener("open", c),
                  n();
              }
              function d(e) {
                let { data: t } = e;
                try {
                  let e = JSON.parse(t);
                  o(e);
                } catch (e) {
                  a(e);
                }
              }
              i.addEventListener("close", u),
                i.addEventListener("message", d),
                i.addEventListener("error", a),
                i.addEventListener("open", c),
                i.readyState === l.CONNECTING &&
                  (await new Promise((e, t) => {
                    i && ((i.onopen = e), (i.onerror = t));
                  }));
              let { close: f } = i;
              return Object.assign(i, {
                close() {
                  f.bind(i)(), u();
                },
                ping() {
                  try {
                    if (i.readyState === i.CLOSED || i.readyState === i.CLOSING)
                      throw new s.WebSocketRequestError({
                        url: i.url,
                        cause: new s.SocketClosedError({ url: i.url }),
                      });
                    i.send(
                      JSON.stringify({
                        jsonrpc: "2.0",
                        method: "net_version",
                        params: [],
                      })
                    );
                  } catch (e) {
                    a(e);
                  }
                },
                request(e) {
                  let { body: t } = e;
                  if (i.readyState === i.CLOSED || i.readyState === i.CLOSING)
                    throw new s.WebSocketRequestError({
                      body: t,
                      url: i.url,
                      cause: new s.SocketClosedError({ url: i.url }),
                    });
                  return i.send(JSON.stringify(t));
                },
              });
            },
            keepAlive: n,
            reconnect: a,
            url: t,
          });
        }
        async function i(e) {
          let t = await l(e);
          return Object.assign(t.socket, {
            requests: t.requests,
            subscriptions: t.subscriptions,
          });
        }
        let u = {
          http: (e, s) => (0, t.getHttpRpcClient)(e).request(s),
          webSocket: function (e, t) {
            let { body: s, onError: r, onResponse: n } = t;
            return e.request({ body: s, onError: r, onResponse: n }), e;
          },
          webSocketAsync: async function (e, t) {
            let { body: s, timeout: r = 1e4 } = t;
            return e.requestAsync({ body: s, timeout: r });
          },
        };
      },
      [156038],
    ],
    433434: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/964591931c954fe1.js"].map((t) => e.l(t))
        ).then(() => t(781868))
      );
    },
    502552: (e) => {
      e.v((t) =>
        Promise.all(
          [
            "static/chunks/89a1bd556a2a6df9.js",
            "static/chunks/88ebf578412f067b.js",
            "static/chunks/d4288d76af91262f.js",
            "static/chunks/fed4c3a7db5c5288.js",
            "static/chunks/df36fda334aaf55d.js",
          ].map((t) => e.l(t))
        ).then(() => t(290133))
      );
    },
    702808: (e) => {
      e.v((t) =>
        Promise.all(
          [
            "static/chunks/9a65601674ab4134.js",
            "static/chunks/88ebf578412f067b.js",
            "static/chunks/df36fda334aaf55d.js",
            "static/chunks/3b31e0476d5363cb.js",
            "static/chunks/d4288d76af91262f.js",
          ].map((t) => e.l(t))
        ).then(() => t(146401))
      );
    },
    548148: (e) => {
      e.v((t) =>
        Promise.all(
          [
            "static/chunks/43bf7aa1f4520401.js",
            "static/chunks/44159aaea4f7e2c8.js",
            "static/chunks/dcaef48944db2ed7.js",
          ].map((t) => e.l(t))
        ).then(() => t(333094))
      );
    },
    639800: (e) => {
      e.v((t) =>
        Promise.all(
          [
            "static/chunks/e70322d8943023f9.js",
            "static/chunks/fc3197f6e3edf8bd.js",
          ].map((t) => e.l(t))
        ).then(() => t(758434))
      );
    },
    954929: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/765bd75e06883335.js"].map((t) => e.l(t))
        ).then(() => t(35438))
      );
    },
    232650: (e) => {
      e.v((t) =>
        Promise.all(
          [
            "static/chunks/f6eb974065411fd9.js",
            "static/chunks/1900b5def04bfb29.js",
          ].map((t) => e.l(t))
        ).then(() => t(943402))
      );
    },
    857927: (e) => {
      e.v((t) =>
        Promise.all(
          [
            "static/chunks/d5bfc3b0cfb4ee7a.js",
            "static/chunks/bed42eb1738df63d.js",
          ].map((t) => e.l(t))
        ).then(() => t(59254))
      );
    },
  },
]);

//# sourceMappingURL=305ab237c7d8a36e.js.map
