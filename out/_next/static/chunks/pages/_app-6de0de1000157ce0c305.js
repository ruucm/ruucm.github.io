_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    "/0+H": function (e, t, n) {
      "use strict"
      ;(t.__esModule = !0),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(r.AmpStateContext))
        })
      var a,
        o = (a = n("q1tI")) && a.__esModule ? a : { default: a },
        r = n("lwAK")
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          a = e.hybrid,
          o = void 0 !== a && a,
          r = e.hasQuery,
          i = void 0 !== r && r
        return n || (o && i)
      }
    },
    0: function (e, t, n) {
      n("9iXC"), (e.exports = n("nOHt"))
    },
    "6kmo": function (e, t, n) {},
    "7W2i": function (e, t, n) {
      var a = n("SksO")
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && a(e, t)
      }
    },
    "8Kt/": function (e, t, n) {
      "use strict"
      n("lSNA")
      ;(t.__esModule = !0), (t.defaultHead = u), (t.default = void 0)
      var a,
        o = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e }
          var t = c()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var r = a ? Object.getOwnPropertyDescriptor(e, o) : null
              r && (r.get || r.set)
                ? Object.defineProperty(n, o, r)
                : (n[o] = e[o])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n("q1tI")),
        r = (a = n("Xuae")) && a.__esModule ? a : { default: a },
        i = n("lwAK"),
        p = n("FYa8"),
        l = n("/0+H")
      function c() {
        if ("function" !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (c = function () {
            return e
          }),
          e
        )
      }
      function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })]
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        )
      }
      function h(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t)
              },
              [])
            )
          : e.concat(t)
      }
      var s = ["name", "httpEquiv", "charSet", "itemProp"]
      function d(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(h, [])
          .reverse()
          .concat(u(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                a = {}
              return function (o) {
                var r = !0
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  var i = o.key.slice(o.key.indexOf("$") + 1)
                  e.has(i) ? (r = !1) : e.add(i)
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (r = !1) : t.add(o.type)
                    break
                  case "meta":
                    for (var p = 0, l = s.length; p < l; p++) {
                      var c = s[p]
                      if (o.props.hasOwnProperty(c))
                        if ("charSet" === c) n.has(c) ? (r = !1) : n.add(c)
                        else {
                          var u = o.props[c],
                            h = a[c] || new Set()
                          h.has(u) ? (r = !1) : (h.add(u), (a[c] = h))
                        }
                    }
                }
                return r
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return o.default.cloneElement(e, { key: n })
          })
      }
      function m(e) {
        var t = e.children,
          n = (0, o.useContext)(i.AmpStateContext),
          a = (0, o.useContext)(p.HeadManagerContext)
        return o.default.createElement(
          r.default,
          {
            reduceComponentsToState: d,
            headManager: a,
            inAmpMode: (0, l.isInAmpMode)(n),
          },
          t
        )
      }
      m.rewind = function () {}
      var f = m
      t.default = f
    },
    "8hXW": function (e, t, n) {
      "use strict"
      n.r(t)
      var a = n("rePB"),
        o = n("nKUr"),
        r = (n("6kmo"), n("8Kt/")),
        i = n.n(r),
        p = n("q1tI"),
        l = n.n(p)
      function c(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t)
      }
      var u = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        h = function (e) {
          var t = []
          e.titleTemplate && (u.templateTitle = e.titleTemplate)
          var n = ""
          e.title &&
            ((n = e.title),
            u.templateTitle &&
              (n = u.templateTitle.replace(/%s/g, function () {
                return n
              })),
            t.push(l.a.createElement("title", { key: "title" }, n)))
          var a = e.noindex || u.noindex || e.dangerouslySetAllPagesToNoIndex,
            o = e.nofollow || u.nofollow || e.dangerouslySetAllPagesToNoFollow
          if (
            (a || o
              ? (e.dangerouslySetAllPagesToNoIndex && (u.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (u.nofollow = !0),
                t.push(
                  l.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (a ? "noindex" : "index") +
                      "," +
                      (o ? "nofollow" : "follow"),
                  })
                ),
                t.push(
                  l.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content:
                      (a ? "noindex" : "index") +
                      "," +
                      (o ? "nofollow" : "follow"),
                  })
                ))
              : (t.push(
                  l.a.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow",
                  })
                ),
                t.push(
                  l.a.createElement("meta", {
                    key: "googlebot",
                    name: "googlebot",
                    content: "index,follow",
                  })
                )),
            e.description &&
              t.push(
                l.a.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.mobileAlternate &&
              t.push(
                l.a.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                t.push(
                  l.a.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                )
              }),
            e.twitter &&
              (e.twitter.cardType &&
                t.push(
                  l.a.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                t.push(
                  l.a.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                t.push(
                  l.a.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              t.push(
                l.a.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var r = e.openGraph.type.toLowerCase()
              t.push(
                l.a.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: r,
                })
              ),
                "profile" === r && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === r && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "book:author:0" + n,
                            property: "book:author",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.book.isbn &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "book:tag:0" + n,
                            property: "book:tag",
                            content: e,
                          })
                        )
                      }))
                  : "article" === r && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "article:author:0" + n,
                            property: "article:author",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.article.section &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "article:tag:0" + n,
                            property: "article:tag",
                            content: e,
                          })
                        )
                      }))
                  : ("video.movie" !== r &&
                      "video.episode" !== r &&
                      "video.tv_show" !== r &&
                      "video.other" !== r) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, n) {
                        e.profile &&
                          t.push(
                            l.a.createElement("meta", {
                              key: "video:actor:0" + n,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            t.push(
                              l.a.createElement("meta", {
                                key: "video:actor:role:0" + n,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            )
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "video:director:0" + n,
                            property: "video:director",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "video:writer:0" + n,
                            property: "video:writer",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.duration &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, n) {
                        t.push(
                          l.a.createElement("meta", {
                            key: "video:tag:0" + n,
                            property: "video:tag",
                            content: e,
                          })
                        )
                      }),
                    e.openGraph.video.series &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ))
            }
            ;(e.openGraph.title || e.title) &&
              t.push(
                l.a.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: e.openGraph.title || n,
                })
              ),
              (e.openGraph.description || e.description) &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:description",
                    property: "og:description",
                    content: e.openGraph.description || e.description,
                  })
                ),
              e.defaultOpenGraphImageWidth &&
                (u.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (u.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                e.openGraph.images.forEach(function (e, n) {
                  t.push(
                    l.a.createElement("meta", {
                      key: "og:image:0" + n,
                      property: "og:image",
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "og:image:alt0" + n,
                          property: "og:image:alt",
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:image:width0" + n,
                            property: "og:image:width",
                            content: e.width.toString(),
                          })
                        )
                      : u.defaultOpenGraphImageWidth &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:image:width0" + n,
                            property: "og:image:width",
                            content: u.defaultOpenGraphImageWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:image:height" + n,
                            property: "og:image:height",
                            content: e.height.toString(),
                          })
                        )
                      : u.defaultOpenGraphImageHeight &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:image:height" + n,
                            property: "og:image:height",
                            content: u.defaultOpenGraphImageHeight.toString(),
                          })
                        )
                }),
              e.defaultOpenGraphVideoWidth &&
                (u.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (u.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                e.openGraph.videos.forEach(function (e, n) {
                  t.push(
                    l.a.createElement("meta", {
                      key: "og:video:0" + n,
                      property: "og:video",
                      content: e.url,
                    })
                  ),
                    e.alt &&
                      t.push(
                        l.a.createElement("meta", {
                          key: "og:video:alt0" + n,
                          property: "og:video:alt",
                          content: e.alt,
                        })
                      ),
                    e.width
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:video:width0" + n,
                            property: "og:video:width",
                            content: e.width.toString(),
                          })
                        )
                      : u.defaultOpenGraphVideoWidth &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:video:width0" + n,
                            property: "og:video:width",
                            content: u.defaultOpenGraphVideoWidth.toString(),
                          })
                        ),
                    e.height
                      ? t.push(
                          l.a.createElement("meta", {
                            key: "og:video:height" + n,
                            property: "og:video:height",
                            content: e.height.toString(),
                          })
                        )
                      : u.defaultOpenGraphVideoHeight &&
                        t.push(
                          l.a.createElement("meta", {
                            key: "og:video:height" + n,
                            property: "og:video:height",
                            content: u.defaultOpenGraphVideoHeight.toString(),
                          })
                        )
                }),
              e.openGraph.locale &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                t.push(
                  l.a.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                )
          }
          return (
            e.canonical &&
              t.push(
                l.a.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                t.push(
                  l.a.createElement(
                    "meta",
                    Object.assign({ key: e.name ? e.name : e.property }, e)
                  )
                )
              }),
            t
          )
        },
        s = (function (e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            c(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                n = e.titleTemplate,
                a = e.dangerouslySetAllPagesToNoIndex,
                o = void 0 !== a && a,
                r = e.dangerouslySetAllPagesToNoFollow,
                p = void 0 !== r && r,
                c = e.description,
                u = e.canonical,
                s = e.facebook,
                d = e.openGraph,
                m = e.additionalMetaTags,
                f = e.twitter,
                g = e.defaultOpenGraphImageWidth,
                y = e.defaultOpenGraphImageHeight,
                v = e.defaultOpenGraphVideoWidth,
                b = e.defaultOpenGraphVideoHeight,
                G = e.mobileAlternate,
                k = e.languageAlternates
              return l.a.createElement(
                i.a,
                null,
                h({
                  title: t,
                  titleTemplate: n,
                  dangerouslySetAllPagesToNoIndex: o,
                  dangerouslySetAllPagesToNoFollow: p,
                  description: c,
                  canonical: u,
                  facebook: s,
                  openGraph: d,
                  additionalMetaTags: m,
                  twitter: f,
                  defaultOpenGraphImageWidth: g,
                  defaultOpenGraphImageHeight: y,
                  defaultOpenGraphVideoWidth: v,
                  defaultOpenGraphVideoHeight: b,
                  mobileAlternate: G,
                  languageAlternates: k,
                })
              )
            }),
            t
          )
        })(p.Component),
        d =
          (p.Component,
          {
            title: "yongmin ruucm",
            description:
              "yongmin ruucm is an experienced front-end developer with a designer's mindset.",
            canonical: "https://ruucm.work",
            openGraph: {
              type: "website",
              locale: "en_IE",
              url: "https://ruucm.work",
              title: "yongmin ruucm",
              description:
                "yongmin ruucm is an experienced front-end developer with a designer's mindset.",
              images: [
                {
                  url: "https://ruucm.work/static/images/brand/og.png",
                  alt: "yongmin ruucm",
                  width: 1280,
                  height: 720,
                },
              ],
            },
            twitter: {
              handle: "@ruucm",
              site: "@ruucm",
              cardType: "summary_large_image",
            },
          })
      function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps
        return Object(o.jsxs)(o.Fragment, {
          children: [
            Object(o.jsxs)(i.a, {
              children: [
                Object(o.jsx)("meta", {
                  content: "IE=edge",
                  httpEquiv: "X-UA-Compatible",
                }),
                Object(o.jsx)("meta", {
                  content: "width=device-width, initial-scale=1",
                  name: "viewport",
                }),
                Object(o.jsx)("meta", {
                  content: "#ffffff",
                  name: "theme-color",
                }),
                Object(o.jsx)("meta", {
                  content: "#ffffff",
                  name: "msapplication-TileColor",
                }),
                Object(o.jsx)("meta", {
                  content: "/static/favicons/browserconfig.xml",
                  name: "msapplication-config",
                }),
              ],
            }),
            Object(o.jsx)(s, f({}, d)),
            Object(o.jsx)(t, f({}, n)),
          ],
        })
      }
    },
    "9iXC": function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n("8hXW")
        },
      ])
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        )
      }
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
    },
    FYa8: function (e, t, n) {
      "use strict"
      var a
      ;(t.__esModule = !0), (t.HeadManagerContext = void 0)
      var o = (
        (a = n("q1tI")) && a.__esModule ? a : { default: a }
      ).default.createContext({})
      t.HeadManagerContext = o
    },
    Ijbi: function (e, t, n) {
      var a = n("WkPL")
      e.exports = function (e) {
        if (Array.isArray(e)) return a(e)
      }
    },
    Nsbk: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
          n(t)
        )
      }
      e.exports = n
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
    },
    RIqP: function (e, t, n) {
      var a = n("Ijbi"),
        o = n("EbDI"),
        r = n("ZhPi"),
        i = n("Bnag")
      e.exports = function (e) {
        return a(e) || o(e) || r(e) || i()
      }
    },
    Xuae: function (e, t, n) {
      "use strict"
      var a = n("RIqP"),
        o = n("lwsE"),
        r = n("W8MJ"),
        i = (n("PJYZ"), n("7W2i")),
        p = n("a1gu"),
        l = n("Nsbk")
      function c(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = l(e)
          if (t) {
            var o = l(this).constructor
            n = Reflect.construct(a, arguments, o)
          } else n = a.apply(this, arguments)
          return p(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var u = n("q1tI"),
        h = (function (e) {
          i(n, e)
          var t = c(n)
          function n(e) {
            var r
            return (
              o(this, n),
              ((r = t.call(this, e))._hasHeadManager = void 0),
              (r.emitChange = function () {
                r._hasHeadManager &&
                  r.props.headManager.updateHead(
                    r.props.reduceComponentsToState(
                      a(r.props.headManager.mountedInstances),
                      r.props
                    )
                  )
              }),
              (r._hasHeadManager =
                r.props.headManager && r.props.headManager.mountedInstances),
              r
            )
          }
          return (
            r(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                },
              },
              {
                key: "render",
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(u.Component)
      t.default = h
    },
    a1gu: function (e, t, n) {
      var a = n("cDf5"),
        o = n("PJYZ")
      e.exports = function (e, t) {
        return !t || ("object" !== a(t) && "function" !== typeof t) ? o(e) : t
      }
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
    },
    lwAK: function (e, t, n) {
      "use strict"
      var a
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var o = (
        (a = n("q1tI")) && a.__esModule ? a : { default: a }
      ).default.createContext({})
      t.AmpStateContext = o
    },
    rePB: function (e, t, n) {
      "use strict"
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      n.d(t, "a", function () {
        return a
      })
    },
  },
  [[0, 0, 1, 2]],
])
