! function() {
    "use strict";
    var e, t, n, r, o, i, c, a = {},
        u = {};

    function f(e) {
        var t = u[e];
        if (void 0 !== t) return t.exports;
        var n = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return a[e].call(n.exports, n, n.exports, f), n.loaded = !0, n.exports
    }
    f.m = a, e = [], f.O = function(t, n, r, o) {
            if (!n) {
                var i = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    n = e[s][0], r = e[s][1], o = e[s][2];
                    for (var c = !0, a = 0; a < n.length; a++)(!1 & o || i >= o) && Object.keys(f.O).every((function(e) {
                        return f.O[e](n[a])
                    })) ? n.splice(a--, 1) : (c = !1, o < i && (i = o));
                    if (c) {
                        e.splice(s--, 1);
                        var u = r();
                        void 0 !== u && (t = u)
                    }
                }
                return t
            }
            o = o || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1];
            e[s] = [n, r, o]
        }, f.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return f.d(t, {
                a: t
            }), t
        }, n = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        }, f.t = function(e, r) {
            if (1 & r && (e = this(e)), 8 & r) return e;
            if ("object" == typeof e && e) {
                if (4 & r && e.__esModule) return e;
                if (16 & r && "function" == typeof e.then) return e
            }
            var o = Object.create(null);
            f.r(o);
            var i = {};
            t = t || [null, n({}), n([]), n(n)];
            for (var c = 2 & r && e;
                "object" == typeof c && !~t.indexOf(c); c = n(c)) Object.getOwnPropertyNames(c).forEach((function(t) {
                i[t] = function() {
                    return e[t]
                }
            }));
            return i.default = function() {
                return e
            }, f.d(o, i), o
        }, f.d = function(e, t) {
            for (var n in t) f.o(t, n) && !f.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, f.f = {}, f.e = function(e) {
            return Promise.all(Object.keys(f.f).reduce((function(t, n) {
                return f.f[n](e, t), t
            }), []))
        }, f.u = function(e) {
            return {
                102: "component---src-templates-category-js",
                204: "component---src-templates-difficulty-js",
                325: "a1a2a10ae78fdca08d61e4c8d775bf3dc8ee1e0c",
                386: "component---src-templates-puzzle-js",
                476: "component---src-pages-using-ssr-js",
                532: "styles",
                617: "component---src-pages-page-2-js",
                678: "component---src-pages-index-js",
                713: "component---src-pages-privacy-policy-js",
                883: "component---src-pages-404-js",
                970: "component---src-pages-using-typescript-tsx"
            }[e] + "-" + {
                102: "ff00ba0e2fe7f8313109",
                204: "25968d08d86af4b778bd",
                325: "c41f2857b347a579a269",
                386: "6794a0e7e4e4ca7c51d6",
                476: "aafbf115cf2361af3c37",
                532: "76d0f710a3751c75edf2",
                617: "2c30dffc3ec064acc6e6",
                678: "ce0b9279be12275f654a",
                713: "c08cd8ad0f21bc4fa8fb",
                883: "dbcb4f314c6c3df455d3",
                970: "e4171564e7dd88c27796"
            }[e] + ".js"
        }, f.miniCssF = function(e) {
            return "styles.79d72ea0bddaeeab04aa.css"
        }, f.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), f.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r = {}, o = "brainstellar:", f.l = function(e, t, n, i) {
            if (r[e]) r[e].push(t);
            else {
                var c, a;
                if (void 0 !== n)
                    for (var u = document.getElementsByTagName("script"), s = 0; s < u.length; s++) {
                        var l = u[s];
                        if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + n) {
                            c = l;
                            break
                        }
                    }
                c || (a = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, f.nc && c.setAttribute("nonce", f.nc), c.setAttribute("data-webpack", o + n), c.src = e), r[e] = [t];
                var d = function(t, n) {
                        c.onerror = c.onload = null, clearTimeout(p);
                        var o = r[e];
                        if (delete r[e], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((function(e) {
                                return e(n)
                            })), t) return t(n)
                    },
                    p = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: c
                    }), 12e4);
                c.onerror = d.bind(null, c.onerror), c.onload = d.bind(null, c.onload), a && document.head.appendChild(c)
            }
        }, f.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, f.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        }, f.p = "/", i = function(e) {
            return new Promise((function(t, n) {
                var r = f.miniCssF(e),
                    o = f.p + r;
                if (function(e, t) {
                        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                            var o = (c = n[r]).getAttribute("data-href") || c.getAttribute("href");
                            if ("stylesheet" === c.rel && (o === e || o === t)) return c
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                            var c;
                            if ((o = (c = i[r]).getAttribute("data-href")) === e || o === t) return c
                        }
                    }(r, o)) return t();
                ! function(e, t, n, r) {
                    var o = document.createElement("link");
                    o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(i) {
                        if (o.onerror = o.onload = null, "load" === i.type) n();
                        else {
                            var c = i && ("load" === i.type ? "missing" : i.type),
                                a = i && i.target && i.target.href || t,
                                u = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                            u.code = "CSS_CHUNK_LOAD_FAILED", u.type = c, u.request = a, o.parentNode.removeChild(o), r(u)
                        }
                    }, o.href = t, document.head.appendChild(o)
                }(e, o, t, n)
            }))
        }, c = {
            658: 0
        }, f.f.miniCss = function(e, t) {
            c[e] ? t.push(c[e]) : 0 !== c[e] && {
                532: 1
            }[e] && t.push(c[e] = i(e).then((function() {
                c[e] = 0
            }), (function(t) {
                throw delete c[e], t
            })))
        },
        function() {
            var e = {
                658: 0
            };
            f.f.j = function(t, n) {
                var r = f.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r) n.push(r[2]);
                    else if (/^(532|658)$/.test(t)) e[t] = 0;
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }));
                    n.push(r[2] = o);
                    var i = f.p + f.u(t),
                        c = new Error;
                    f.l(i, (function(n) {
                        if (f.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", c.name = "ChunkLoadError", c.type = o, c.request = i, r[1](c)
                        }
                    }), "chunk-" + t, t)
                }
            }, f.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, n) {
                    var r, o, i = n[0],
                        c = n[1],
                        a = n[2],
                        u = 0;
                    if (i.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (r in c) f.o(c, r) && (f.m[r] = c[r]);
                        if (a) var s = a(f)
                    }
                    for (t && t(n); u < i.length; u++) o = i[u], f.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return f.O(s)
                },
                n = self.webpackChunkbrainstellar = self.webpackChunkbrainstellar || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }()
}();
//# sourceMappingURL=webpack-runtime-8d190321a29a197b831c.js.map