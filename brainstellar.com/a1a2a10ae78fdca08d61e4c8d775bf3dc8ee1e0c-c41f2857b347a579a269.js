(self.webpackChunkbrainstellar = self.webpackChunkbrainstellar || []).push([
    [325], {
        4852: function(e) {
            "use strict";
            e.exports = Object.assign
        },
        5633: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(7294),
                o = n(1883),
                i = n(4593),
                a = n(2037);
            var c = () => {
                const {
                    theme: e,
                    setTheme: t
                } = (0, r.useContext)(a.N);
                return r.createElement("select", {
                    value: e,
                    onChange: e => {
                        t(e.target.value)
                    },
                    style: {
                        float: "right"
                    }
                }, r.createElement("option", {
                    value: "auto"
                }, "Auto"), r.createElement("option", {
                    value: "light"
                }, "Light"), r.createElement("option", {
                    value: "dark"
                }, "Dark"))
            };
            var u = e => {
                let {
                    siteTitle: t
                } = e;
                return r.createElement("header", {
                    style: {}
                }, r.createElement("div", {
                    className: "nav",
                    tabIndex: "-1"
                }, r.createElement("div", {
                    className: "container-nav"
                }, r.createElement("a", {
                    href: "/puzzles",
                    className: "nav-links pagename"
                }, r.createElement("img", {
                    src: "/favicon.gif",
                    style: {
                        border: "0px solid white",
                        padding: "0px",
                        marginRight: "10px",
                        borderRadius: "7px",
                        height: "35px",
                        width: "35px"
                    },
                    alt: "BRAINSTELLAR"
                }), " ", r.createElement("img", {
                    src: "/images/cover_transparent.png",
                    alt: "BRAINSTELLAR",
                    style: {
                        position: "relative",
                        top: "-7px",
                        height: "20px",
                        width: "211px"
                    }
                })), r.createElement(o.Link, {
                    to: "/puzzles/easy",
                    className: "nav-links"
                }, "Easy"), r.createElement(o.Link, {
                    to: "/puzzles/medium",
                    className: "nav-links"
                }, "Medium"), r.createElement(o.Link, {
                    to: "/puzzles/hard",
                    className: "nav-links"
                }, "Hard"), r.createElement(o.Link, {
                    to: "/puzzles/deadly",
                    className: "nav-links"
                }, "Deadly"), r.createElement(c, null))))
            };
            var s = () => r.createElement("footer", {
                style: {
                    textAlign: "center",
                    fontSize: "var(--font-sm)",
                    width: "100%",
                    position: "absolute",
                    bottom: "0px"
                }
            }, r.createElement("div", {
                className: "container-outer"
            }, r.createElement("div", {
                className: "stylishpage",
                style: {
                    margin: "0px",
                    padding: "0px"
                }
            }, r.createElement("div", {
                className: "bord1",
                style: {
                    margin: "0px",
                    padding: "0px"
                }
            }, r.createElement("div", {
                className: "bord2",
                style: {
                    margin: "0px",
                    padding: "0px"
                }
            }, r.createElement("table", {
                style: {
                    width: "100%",
                    textAlign: "center",
                    margin: "0px",
                    padding: "0px"
                }
            }, r.createElement("tbody", null, r.createElement("tr", null, r.createElement("td", {
                style: {
                    opacity: "0.5"
                }
            }, "© BRAINSTELLAR")))))))));
            const l = r.memo(u);
            var f = e => {
                var t;
                let {
                    children: n
                } = e;
                const a = (0, o.useStaticQuery)("3649515864");
                return r.createElement(r.Fragment, null, r.createElement(i.q, null, r.createElement("link", {
                    rel: "icon",
                    href: "/favicon.gif"
                }), r.createElement("title", null, "Brainstellar Puzzles from Quant Interviews")), r.createElement("div", {
                    className: "wrapper",
                    style: {
                        margin: "0 auto",
                        maxWidth: "var(--size-content)",
                        padding: "var(--size-gutter)"
                    }
                }, r.createElement(l, {
                    siteTitle: (null === (t = a.site.siteMetadata) || void 0 === t ? void 0 : t.title) || "Title"
                }), r.createElement("main", {
                    className: "container-outer"
                }, r.createElement("div", {
                    className: "row"
                }, n)), r.createElement("br", null), r.createElement(s, null)))
            }
        },
        9590: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                r = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, a) {
                if (e === a) return !0;
                if (e && a && "object" == typeof e && "object" == typeof a) {
                    if (e.constructor !== a.constructor) return !1;
                    var c, u, s, l;
                    if (Array.isArray(e)) {
                        if ((c = e.length) != a.length) return !1;
                        for (u = c; 0 != u--;)
                            if (!i(e[u], a[u])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && a instanceof Map) {
                        if (e.size !== a.size) return !1;
                        for (l = e.entries(); !(u = l.next()).done;)
                            if (!a.has(u.value[0])) return !1;
                        for (l = e.entries(); !(u = l.next()).done;)
                            if (!i(u.value[1], a.get(u.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && a instanceof Set) {
                        if (e.size !== a.size) return !1;
                        for (l = e.entries(); !(u = l.next()).done;)
                            if (!a.has(u.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                        if ((c = e.length) != a.length) return !1;
                        for (u = c; 0 != u--;)
                            if (e[u] !== a[u]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                    if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf) return e.valueOf() === a.valueOf();
                    if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString) return e.toString() === a.toString();
                    if ((c = (s = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                    for (u = c; 0 != u--;)
                        if (!Object.prototype.hasOwnProperty.call(a, s[u])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (u = c; 0 != u--;)
                        if (("_owner" !== s[u] && "__v" !== s[u] && "__o" !== s[u] || !e.$$typeof) && !i(e[s[u]], a[s[u]])) return !1;
                    return !0
                }
                return e != e && a != a
            }
            e.exports = function(e, t) {
                try {
                    return i(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        4593: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return ye
                }
            });
            var r, o, i, a, c = n(5697),
                u = n.n(c),
                s = n(3524),
                l = n.n(s),
                f = n(9590),
                p = n.n(f),
                d = n(7294),
                m = n(4852),
                y = n.n(m),
                h = "bodyAttributes",
                b = "htmlAttributes",
                v = "titleAttributes",
                g = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                T = (Object.keys(g).map((function(e) {
                    return g[e]
                })), "charset"),
                E = "cssText",
                w = "href",
                A = "http-equiv",
                O = "innerHTML",
                C = "itemprop",
                S = "name",
                x = "property",
                k = "rel",
                j = "src",
                L = "target",
                P = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                N = "defaultTitle",
                I = "defer",
                R = "encodeSpecialCharacters",
                M = "onChangeClientState",
                z = "titleTemplate",
                B = Object.keys(P).reduce((function(e, t) {
                    return e[P[t]] = t, e
                }), {}),
                _ = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
                D = "data-react-helmet",
                q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                H = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                F = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                U = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                },
                K = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                W = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                V = function(e) {
                    var t = J(e, g.TITLE),
                        n = J(e, z);
                    if (n && t) return n.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var r = J(e, N);
                    return t || r || void 0
                },
                Q = function(e) {
                    return J(e, M) || function() {}
                },
                $ = function(e, t) {
                    return t.filter((function(t) {
                        return void 0 !== t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return Y({}, e, t)
                    }), {})
                },
                Z = function(e, t) {
                    return t.filter((function(e) {
                        return void 0 !== e[g.BASE]
                    })).map((function(e) {
                        return e[g.BASE]
                    })).reverse().reduce((function(t, n) {
                        if (!t.length)
                            for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                                var i = r[o].toLowerCase();
                                if (-1 !== e.indexOf(i) && n[i]) return t.concat(n)
                            }
                        return t
                    }), [])
                },
                G = function(e, t, n) {
                    var r = {};
                    return n.filter((function(t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + q(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, n) {
                        var o = {};
                        n.filter((function(e) {
                            for (var n = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
                                var c = i[a],
                                    u = c.toLowerCase(); - 1 === t.indexOf(u) || n === k && "canonical" === e[n].toLowerCase() || u === k && "stylesheet" === e[u].toLowerCase() || (n = u), -1 === t.indexOf(c) || c !== O && c !== E && c !== C || (n = c)
                            }
                            if (!n || !e[n]) return !1;
                            var s = e[n].toLowerCase();
                            return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][s] && (o[n][s] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                            var c = i[a],
                                u = y()({}, r[c], o[c]);
                            r[c] = u
                        }
                        return e
                    }), []).reverse()
                },
                J = function(e, t) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var r = e[n];
                        if (r.hasOwnProperty(t)) return r[t]
                    }
                    return null
                },
                X = (r = Date.now(), function(e) {
                    var t = Date.now();
                    t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
                        X(e)
                    }), 0)
                }),
                ee = function(e) {
                    return clearTimeout(e)
                },
                te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || X : n.g.requestAnimationFrame || X,
                ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : n.g.cancelAnimationFrame || ee,
                re = function(e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                oe = null,
                ie = function(e, t) {
                    var n = e.baseTag,
                        r = e.bodyAttributes,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.onChangeClientState,
                        s = e.scriptTags,
                        l = e.styleTags,
                        f = e.title,
                        p = e.titleAttributes;
                    ue(g.BODY, r), ue(g.HTML, o), ce(f, p);
                    var d = {
                            baseTag: se(g.BASE, n),
                            linkTags: se(g.LINK, i),
                            metaTags: se(g.META, a),
                            noscriptTags: se(g.NOSCRIPT, c),
                            scriptTags: se(g.SCRIPT, s),
                            styleTags: se(g.STYLE, l)
                        },
                        m = {},
                        y = {};
                    Object.keys(d).forEach((function(e) {
                        var t = d[e],
                            n = t.newTags,
                            r = t.oldTags;
                        n.length && (m[e] = n), r.length && (y[e] = d[e].oldTags)
                    })), t && t(), u(e, m, y)
                },
                ae = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                ce = function(e, t) {
                    void 0 !== e && document.title !== e && (document.title = ae(e)), ue(g.TITLE, t)
                },
                ue = function(e, t) {
                    var n = document.getElementsByTagName(e)[0];
                    if (n) {
                        for (var r = n.getAttribute(D), o = r ? r.split(",") : [], i = [].concat(o), a = Object.keys(t), c = 0; c < a.length; c++) {
                            var u = a[c],
                                s = t[u] || "";
                            n.getAttribute(u) !== s && n.setAttribute(u, s), -1 === o.indexOf(u) && o.push(u);
                            var l = i.indexOf(u); - 1 !== l && i.splice(l, 1)
                        }
                        for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
                        o.length === i.length ? n.removeAttribute(D) : n.getAttribute(D) !== a.join(",") && n.setAttribute(D, a.join(","))
                    }
                },
                se = function(e, t) {
                    var n = document.head || document.querySelector(g.HEAD),
                        r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
                        o = Array.prototype.slice.call(r),
                        i = [],
                        a = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var n = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === O) n.innerHTML = t.innerHTML;
                                else if (r === E) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                        else {
                            var c = void 0 === t[r] ? "" : t[r];
                            n.setAttribute(r, c)
                        }
                        n.setAttribute(D, "true"), o.some((function(e, t) {
                            return a = t, n.isEqualNode(e)
                        })) ? o.splice(a, 1) : i.push(n)
                    })), o.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), i.forEach((function(e) {
                        return n.appendChild(e)
                    })), {
                        oldTags: o,
                        newTags: i
                    }
                },
                le = function(e) {
                    return Object.keys(e).reduce((function(t, n) {
                        var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                        return t ? t + " " + r : r
                    }), "")
                },
                fe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, n) {
                        return t[P[n] || n] = e[n], t
                    }), t)
                },
                pe = function(e, t, n) {
                    switch (e) {
                        case g.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, n = t.titleAttributes, (r = {
                                        key: e
                                    })[D] = !0, o = fe(n, r), [d.createElement(g.TITLE, o, e)];
                                    var e, n, r, o
                                },
                                toString: function() {
                                    return function(e, t, n, r) {
                                        var o = le(n),
                                            i = ae(t);
                                        return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + W(i, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + W(i, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, n)
                                }
                            };
                        case h:
                        case b:
                            return {
                                toComponent: function() {
                                    return fe(t)
                                },
                                toString: function() {
                                    return le(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, n) {
                                            var r, o = ((r = {
                                                key: n
                                            })[D] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var n = P[e] || e;
                                                if (n === O || n === E) {
                                                    var r = t.innerHTML || t.cssText;
                                                    o.dangerouslySetInnerHTML = {
                                                        __html: r
                                                    }
                                                } else o[n] = t[e]
                                            })), d.createElement(e, o)
                                        }))
                                    }(e, t)
                                },
                                toString: function() {
                                    return function(e, t, n) {
                                        return t.reduce((function(t, r) {
                                            var o = Object.keys(r).filter((function(e) {
                                                    return !(e === O || e === E)
                                                })).reduce((function(e, t) {
                                                    var o = void 0 === r[t] ? t : t + '="' + W(r[t], n) + '"';
                                                    return e ? e + " " + o : o
                                                }), ""),
                                                i = r.innerHTML || r.cssText || "",
                                                a = -1 === _.indexOf(e);
                                            return t + "<" + e + ' data-react-helmet="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
                                        }), "")
                                    }(e, t, n)
                                }
                            }
                    }
                },
                de = function(e) {
                    var t = e.baseTag,
                        n = e.bodyAttributes,
                        r = e.encode,
                        o = e.htmlAttributes,
                        i = e.linkTags,
                        a = e.metaTags,
                        c = e.noscriptTags,
                        u = e.scriptTags,
                        s = e.styleTags,
                        l = e.title,
                        f = void 0 === l ? "" : l,
                        p = e.titleAttributes;
                    return {
                        base: pe(g.BASE, t, r),
                        bodyAttributes: pe(h, n, r),
                        htmlAttributes: pe(b, o, r),
                        link: pe(g.LINK, i, r),
                        meta: pe(g.META, a, r),
                        noscript: pe(g.NOSCRIPT, c, r),
                        script: pe(g.SCRIPT, u, r),
                        style: pe(g.STYLE, s, r),
                        title: pe(g.TITLE, {
                            title: f,
                            titleAttributes: p
                        }, r)
                    }
                },
                me = l()((function(e) {
                    return {
                        baseTag: Z([w, L], e),
                        bodyAttributes: $(h, e),
                        defer: J(e, I),
                        encode: J(e, R),
                        htmlAttributes: $(b, e),
                        linkTags: G(g.LINK, [k, w], e),
                        metaTags: G(g.META, [S, T, A, x, C], e),
                        noscriptTags: G(g.NOSCRIPT, [O], e),
                        onChangeClientState: Q(e),
                        scriptTags: G(g.SCRIPT, [j, O], e),
                        styleTags: G(g.STYLE, [E], e),
                        title: V(e),
                        titleAttributes: $(v, e)
                    }
                }), (function(e) {
                    oe && ne(oe), e.defer ? oe = te((function() {
                        ie(e, (function() {
                            oe = null
                        }))
                    })) : (ie(e), oe = null)
                }), de)((function() {
                    return null
                })),
                ye = (o = me, a = i = function(e) {
                    function t() {
                        return H(this, t), K(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !p()(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case g.SCRIPT:
                            case g.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case g.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, n = e.child,
                            r = e.arrayTypeChildren,
                            o = e.newChildProps,
                            i = e.nestedChildren;
                        return Y({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [Y({}, o, this.mapNestedChildrenToProps(n, i))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, n, r = e.child,
                            o = e.newProps,
                            i = e.newChildProps,
                            a = e.nestedChildren;
                        switch (r.type) {
                            case g.TITLE:
                                return Y({}, o, ((t = {})[r.type] = a, t.titleAttributes = Y({}, i), t));
                            case g.BODY:
                                return Y({}, o, {
                                    bodyAttributes: Y({}, i)
                                });
                            case g.HTML:
                                return Y({}, o, {
                                    htmlAttributes: Y({}, i)
                                })
                        }
                        return Y({}, o, ((n = {})[r.type] = Y({}, i), n))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var n = Y({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            n = Y({}, n, ((r = {})[t] = e[t], r))
                        })), n
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var n = this,
                            r = {};
                        return d.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var o = e.props,
                                    i = o.children,
                                    a = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, n) {
                                            return t[B[n] || n] = e[n], t
                                        }), t)
                                    }(U(o, ["children"]));
                                switch (n.warnOnInvalidChildren(e, i), e.type) {
                                    case g.LINK:
                                    case g.META:
                                    case g.NOSCRIPT:
                                    case g.SCRIPT:
                                    case g.STYLE:
                                        r = n.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: a,
                                            nestedChildren: i
                                        });
                                        break;
                                    default:
                                        t = n.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: a,
                                            nestedChildren: i
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = U(e, ["children"]),
                            r = Y({}, n);
                        return t && (r = this.mapChildrenToProps(t, r)), d.createElement(o, r)
                    }, F(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            o.canUseDOM = e
                        }
                    }]), t
                }(d.Component), i.propTypes = {
                    base: u().object,
                    bodyAttributes: u().object,
                    children: u().oneOfType([u().arrayOf(u().node), u().node]),
                    defaultTitle: u().string,
                    defer: u().bool,
                    encodeSpecialCharacters: u().bool,
                    htmlAttributes: u().object,
                    link: u().arrayOf(u().object),
                    meta: u().arrayOf(u().object),
                    noscript: u().arrayOf(u().object),
                    onChangeClientState: u().func,
                    script: u().arrayOf(u().object),
                    style: u().arrayOf(u().object),
                    title: u().string,
                    titleAttributes: u().object,
                    titleTemplate: u().string
                }, i.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, i.peek = o.peek, i.rewind = function() {
                    var e = o.rewind();
                    return e || (e = de({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, a);
            ye.renderStatic = ye.rewind
        },
        3524: function(e, t, n) {
            "use strict";
            var r, o = n(7294),
                i = (r = o) && "object" == typeof r && "default" in r ? r.default : r;

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var c = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, n) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var u, s = [];

                    function l() {
                        u = e(s.map((function(e) {
                            return e.props
                        }))), f.canUseDOM ? t(u) : n && (u = n(u))
                    }
                    var f = function(e) {
                        var t, n;

                        function o() {
                            return e.apply(this, arguments) || this
                        }
                        n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() {
                            return u
                        }, o.rewind = function() {
                            if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = u;
                            return u = void 0, s = [], e
                        };
                        var a = o.prototype;
                        return a.UNSAFE_componentWillMount = function() {
                            s.push(this), l()
                        }, a.componentDidUpdate = function() {
                            l()
                        }, a.componentWillUnmount = function() {
                            var e = s.indexOf(this);
                            s.splice(e, 1), l()
                        }, a.render = function() {
                            return i.createElement(r, this.props)
                        }, o
                    }(o.PureComponent);
                    return a(f, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(r) + ")"), a(f, "canUseDOM", c), f
                }
            }
        }
    }
]);
//# sourceMappingURL=a1a2a10ae78fdca08d61e4c8d775bf3dc8ee1e0c-c41f2857b347a579a269.js.map