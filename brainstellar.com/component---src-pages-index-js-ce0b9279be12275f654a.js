"use strict";
(self.webpackChunkbrainstellar = self.webpackChunkbrainstellar || []).push([
    [678], {
        9357: function(e, t, a) {
            var n = a(7294),
                l = a(1883);
            t.Z = function(e) {
                var t, a;
                let {
                    description: r,
                    title: s,
                    url: i,
                    image: c
                } = e;
                const {
                    site: m
                } = (0, l.useStaticQuery)("764694655"), o = r || m.siteMetadata.description, u = null === (t = m.siteMetadata) || void 0 === t ? void 0 : t.title, d = "" + m.siteMetadata.siteUrl + (c || "/logo.png");
                return n.createElement(n.Fragment, null, n.createElement("title", null, u ? s + " | " + u : s), n.createElement("meta", {
                    name: "description",
                    content: o
                }), n.createElement("meta", {
                    property: "og:title",
                    content: s
                }), n.createElement("meta", {
                    property: "og:description",
                    content: o
                }), n.createElement("meta", {
                    property: "og:type",
                    content: "website"
                }), n.createElement("meta", {
                    property: "og:image",
                    content: d
                }), n.createElement("meta", {
                    name: "twitter:card",
                    content: "summary"
                }), n.createElement("meta", {
                    name: "twitter:creator",
                    content: (null === (a = m.siteMetadata) || void 0 === a ? void 0 : a.author) || ""
                }), n.createElement("meta", {
                    name: "twitter:title",
                    content: s
                }), n.createElement("meta", {
                    name: "twitter:description",
                    content: o
                }))
            }
        },
        278: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a(7294),
                l = a(1883),
                r = a(5633),
                s = a(9357);
            var i = e => {
                let {
                    data: t
                } = e;
                const a = t.allMarkdownRemark.nodes.map((e => e.frontmatter));
                return n.createElement(r.Z, {
                    id: "wrapper"
                }, n.createElement(s.Z, {
                    title: "Home"
                }), n.createElement("div", {
                    className: "index-module--textCenter--4ece3"
                }, n.createElement("div", {
                    className: "stylishpage",
                    style: {
                        padding: "0px",
                        marginBottom: "5px"
                    }
                }, n.createElement("div", {
                    className: "bord1",
                    style: {
                        margin: "0px",
                        padding: "0px"
                    }
                }, n.createElement("div", {
                    className: "bord2",
                    style: {
                        margin: "0px",
                        padding: "0px"
                    }
                }, n.createElement("div", {
                    className: "container",
                    style: {}
                }, n.createElement("div", {
                    style: {
                        padding: "0px",
                        margin: "0px",
                        textAlign: "center"
                    }
                }, n.createElement("div", {
                    className: "easymediumhard",
                    style: {
                        padding: "0px",
                        margin: "0px",
                        textAlign: "center"
                    }
                })), n.createElement("h2", {
                    style: {
                        textAlign: "center"
                    }
                }, "Select an Album"), n.createElement("div", {
                    style: {
                        padding: "0px",
                        margin: "0px",
                        textAlign: "center"
                    }
                }, n.createElement("span", {
                    style: {
                        display: "inline-block"
                    }
                }, n.createElement(l.Link, {
                    to: "/puzzles/easy",
                    className: "btn btn-greygreen btn-scalegrey activewhite smooth"
                }, n.createElement("img", {
                    src: "/images/easy.png",
                    alt: " "
                }), " ", n.createElement("br", null), "Easy Puzzles"), n.createElement(l.Link, {
                    to: "/puzzles/medium",
                    className: "btn btn-greyblue btn-scalegrey activewhite smooth"
                }, n.createElement("img", {
                    src: "/images/medium.png",
                    alt: " "
                }), " ", n.createElement("br", null), "Medium Puzzles"), n.createElement(l.Link, {
                    to: "/puzzles/hard",
                    className: "btn btn-greyred btn-scalegrey activewhite smooth"
                }, n.createElement("img", {
                    src: "/images/hard.png",
                    alt: " "
                }), " ", n.createElement("br", null), "Hard Puzzles")), n.createElement("span", {
                    style: {
                        display: "inline-block"
                    }
                }, n.createElement(l.Link, {
                    to: "/puzzles/discrete",
                    className: "btn btn-grey1 btn-scalegrey activewhite smooth"
                }, n.createElement("img", {
                    src: "/images/discrete.png",
                    alt: " "
                }), " ", n.createElement("br", null), "Discrete Maths"), n.createElement(l.Link, {
                    to: "/puzzles/probability",
                    className: "activewhite btn btn-grey2 btn-scalegrey smooth"
                }, n.createElement("img", {
                    alt: " ",
                    src: "/images/probability.png"
                }), " ", n.createElement("br", null), "Probability Puzzles"), n.createElement(l.Link, {
                    to: "/puzzles/strategy",
                    className: "activewhite btn btn-grey3 btn-scalegrey smooth"
                }, n.createElement("img", {
                    alt: " ",
                    src: "/images/strategy.png"
                }), " ", n.createElement("br", null), "Strategy Puzzles"), n.createElement(l.Link, {
                    to: "/puzzles/general",
                    className: "activewhite btn btn-grey4 btn-scalegrey smooth"
                }, n.createElement("img", {
                    alt: " ",
                    src: "/images/general.png"
                }), " ", n.createElement("br", null), "General Tricks"))), n.createElement("br", null), n.createElement("br", null))))), n.createElement("div", {
                    className: "stylishpage"
                }, " ", n.createElement("div", {
                    className: "bord1"
                }, n.createElement("div", {
                    className: "bord2"
                }, n.createElement("div", {
                    className: "container"
                }, n.createElement("h2", null, "All Puzzles"), a.map((e => n.createElement("span", {
                    key: e.puzzleId
                }, n.createElement(l.Link, {
                    to: "/puzzles/" + e.puzzleId,
                    className: "btn btn-sm link-" + e.difficulty + " smooth"
                }, e.title)))))))), n.createElement("div", {
                    className: "stylishpage"
                }, n.createElement("div", {
                    className: "bord1",
                    style: {
                        margin: 0,
                        padding: 0
                    }
                }, n.createElement("div", {
                    className: "bord2",
                    style: {
                        margin: 0,
                        padding: 0
                    }
                }, n.createElement("div", {
                    className: "container",
                    style: {
                        textAlign: "justify"
                    }
                }, n.createElement("br", null), n.createElement("h3", null, " About BRAINSTELLAR "), "Brainstellar gives step-wise approach to interview puzzles and written tests for analytics and Quant jobs. The puzzles are divided into various albums: Easy, Medium, Hard, Probability, Discrete Maths, Strategy puzzles and General Tricks. In each album the puzzles start from easy to difficult level. Even in easy puzzles album, puzzles are sorted in a conceptual way. Every puzzle is unique and logical, requiring minimal calculations.", n.createElement("br", null), " ", n.createElement("br", null), "Easy level covers all common puzzles asked in technical interviews. Select medium or hard level to prepare for quant interviews, or written puzzle test.", n.createElement("br", null), n.createElement("br", null), "Brainstellar started as deadly puzzles' page on facebook. You can send message to the facebook page.", n.createElement("a", {
                    href: "https://www.facebook.com/BrainStellarPuzzles/",
                    className: "btn btn-sm",
                    style: {
                        padding: "auto",
                        marginTop: 20,
                        textAlign: "center"
                    }
                }, "Brainstellar on facebook"), n.createElement("h3", null, " About the Author "), "Feel free to connect with me on various platforms.", n.createElement("a", {
                    href: "https://www.linkedin.com/in/varun-seth-428072204/",
                    className: "btn btn-sm",
                    style: {
                        padding: "auto",
                        marginTop: 20,
                        textAlign: "center"
                    }
                }, "Varun Seth on LinkedIn"), n.createElement("a", {
                    href: "https://github.com/varun-seth",
                    className: "btn btn-sm",
                    style: {
                        padding: "auto",
                        marginTop: 20,
                        textAlign: "center"
                    }
                }, "Varun Seth on Github"), n.createElement("br", null), n.createElement("br", null)))))))
            }
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-ce0b9279be12275f654a.js.map