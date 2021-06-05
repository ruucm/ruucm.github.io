var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { r as react, a as React } from "./vendor.dbc1cc3e.js";
var Vb = Object.create, Bi = Object.defineProperty, kb = Object.getPrototypeOf, _b = Object.prototype.hasOwnProperty, jb = Object.getOwnPropertyNames, Bb = Object.getOwnPropertyDescriptor;
var Nb = (e) => Bi(e, "__esModule", { value: true });
var Hr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Hb = (e, t) => {
  for (var r in t)
    Bi(e, r, { get: t[r], enumerable: true });
}, zb = (e, t, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of jb(t))
      !_b.call(e, n) && n !== "default" && Bi(e, n, { get: () => t[n], enumerable: !(r = Bb(t, n)) || r.enumerable });
  return e;
}, Ro = (e) => zb(Nb(Bi(e != null ? Vb(kb(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
var Up = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, Cn = (e, t, r) => (Up(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Gp = (e, t, r, n) => (Up(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var mf = Hr((MM, Ni) => {
  var $p, Xp, Yp, Kp, qp, Zp, Jp, Qp, ef, Hi, Pl, tf, rf, nf, Pn, of, af, sf, lf, uf, cf, pf, ff, zi;
  (function(e) {
    var t = typeof window == "object" ? window : typeof self == "object" ? self : typeof this == "object" ? this : {};
    typeof define == "function" && define.amd ? define("tslib", ["exports"], function(n) {
      e(r(t, r(n)));
    }) : typeof Ni == "object" && typeof Ni.exports == "object" ? e(r(t, r(Ni.exports))) : e(r(t));
    function r(n, o) {
      return n !== t && (typeof Object.create == "function" ? Object.defineProperty(n, "__esModule", { value: true }) : n.__esModule = true), function(i, a) {
        return n[i] = o ? o(i, a) : a;
      };
    }
  })(function(e) {
    var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    };
    $p = function(n, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      t(n, o);
      function i() {
        this.constructor = n;
      }
      n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i());
    }, Xp = Object.assign || function(n) {
      for (var o, i = 1, a = arguments.length; i < a; i++) {
        o = arguments[i];
        for (var s in o)
          Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
      }
      return n;
    }, Yp = function(n, o) {
      var i = {};
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && o.indexOf(a) < 0 && (i[a] = n[a]);
      if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, a = Object.getOwnPropertySymbols(n); s < a.length; s++)
          o.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[s]) && (i[a[s]] = n[a[s]]);
      return i;
    }, Kp = function(n, o, i, a) {
      var s = arguments.length, l = s < 3 ? o : a === null ? a = Object.getOwnPropertyDescriptor(o, i) : a, u;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        l = Reflect.decorate(n, o, i, a);
      else
        for (var c = n.length - 1; c >= 0; c--)
          (u = n[c]) && (l = (s < 3 ? u(l) : s > 3 ? u(o, i, l) : u(o, i)) || l);
      return s > 3 && l && Object.defineProperty(o, i, l), l;
    }, qp = function(n, o) {
      return function(i, a) {
        o(i, a, n);
      };
    }, Zp = function(n, o) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(n, o);
    }, Jp = function(n, o, i, a) {
      function s(l) {
        return l instanceof i ? l : new i(function(u) {
          u(l);
        });
      }
      return new (i || (i = Promise))(function(l, u) {
        function c(m) {
          try {
            p(a.next(m));
          } catch (d) {
            u(d);
          }
        }
        function f(m) {
          try {
            p(a.throw(m));
          } catch (d) {
            u(d);
          }
        }
        function p(m) {
          m.done ? l(m.value) : s(m.value).then(c, f);
        }
        p((a = a.apply(n, o || [])).next());
      });
    }, Qp = function(n, o) {
      var i = { label: 0, sent: function() {
        if (l[0] & 1)
          throw l[1];
        return l[1];
      }, trys: [], ops: [] }, a, s, l, u;
      return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this;
      }), u;
      function c(p) {
        return function(m) {
          return f([p, m]);
        };
      }
      function f(p) {
        if (a)
          throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (a = 1, s && (l = p[0] & 2 ? s.return : p[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, p[1])).done)
              return l;
            switch (s = 0, l && (p = [p[0] & 2, l.value]), p[0]) {
              case 0:
              case 1:
                l = p;
                break;
              case 4:
                return i.label++, { value: p[1], done: false };
              case 5:
                i.label++, s = p[1], p = [0];
                continue;
              case 7:
                p = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (l = i.trys, !(l = l.length > 0 && l[l.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (p[0] === 3 && (!l || p[1] > l[0] && p[1] < l[3])) {
                  i.label = p[1];
                  break;
                }
                if (p[0] === 6 && i.label < l[1]) {
                  i.label = l[1], l = p;
                  break;
                }
                if (l && i.label < l[2]) {
                  i.label = l[2], i.ops.push(p);
                  break;
                }
                l[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            p = o.call(n, i);
          } catch (m) {
            p = [6, m], s = 0;
          } finally {
            a = l = 0;
          }
        if (p[0] & 5)
          throw p[1];
        return { value: p[0] ? p[1] : void 0, done: true };
      }
    }, ef = function(n, o) {
      for (var i in n)
        i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && zi(o, n, i);
    }, zi = Object.create ? function(n, o, i, a) {
      a === void 0 && (a = i), Object.defineProperty(n, a, { enumerable: true, get: function() {
        return o[i];
      } });
    } : function(n, o, i, a) {
      a === void 0 && (a = i), n[a] = o[i];
    }, Hi = function(n) {
      var o = typeof Symbol == "function" && Symbol.iterator, i = o && n[o], a = 0;
      if (i)
        return i.call(n);
      if (n && typeof n.length == "number")
        return { next: function() {
          return n && a >= n.length && (n = void 0), { value: n && n[a++], done: !n };
        } };
      throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Pl = function(n, o) {
      var i = typeof Symbol == "function" && n[Symbol.iterator];
      if (!i)
        return n;
      var a = i.call(n), s, l = [], u;
      try {
        for (; (o === void 0 || o-- > 0) && !(s = a.next()).done; )
          l.push(s.value);
      } catch (c) {
        u = { error: c };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (u)
            throw u.error;
        }
      }
      return l;
    }, tf = function() {
      for (var n = [], o = 0; o < arguments.length; o++)
        n = n.concat(Pl(arguments[o]));
      return n;
    }, rf = function() {
      for (var n = 0, o = 0, i = arguments.length; o < i; o++)
        n += arguments[o].length;
      for (var a = Array(n), s = 0, o = 0; o < i; o++)
        for (var l = arguments[o], u = 0, c = l.length; u < c; u++, s++)
          a[s] = l[u];
      return a;
    }, nf = function(n, o) {
      for (var i = 0, a = o.length, s = n.length; i < a; i++, s++)
        n[s] = o[i];
      return n;
    }, Pn = function(n) {
      return this instanceof Pn ? (this.v = n, this) : new Pn(n);
    }, of = function(n, o, i) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var a = i.apply(n, o || []), s, l = [];
      return s = {}, u("next"), u("throw"), u("return"), s[Symbol.asyncIterator] = function() {
        return this;
      }, s;
      function u(h) {
        a[h] && (s[h] = function(v) {
          return new Promise(function(y, P) {
            l.push([h, v, y, P]) > 1 || c(h, v);
          });
        });
      }
      function c(h, v) {
        try {
          f(a[h](v));
        } catch (y) {
          d(l[0][3], y);
        }
      }
      function f(h) {
        h.value instanceof Pn ? Promise.resolve(h.value.v).then(p, m) : d(l[0][2], h);
      }
      function p(h) {
        c("next", h);
      }
      function m(h) {
        c("throw", h);
      }
      function d(h, v) {
        h(v), l.shift(), l.length && c(l[0][0], l[0][1]);
      }
    }, af = function(n) {
      var o, i;
      return o = {}, a("next"), a("throw", function(s) {
        throw s;
      }), a("return"), o[Symbol.iterator] = function() {
        return this;
      }, o;
      function a(s, l) {
        o[s] = n[s] ? function(u) {
          return (i = !i) ? { value: Pn(n[s](u)), done: s === "return" } : l ? l(u) : u;
        } : l;
      }
    }, sf = function(n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var o = n[Symbol.asyncIterator], i;
      return o ? o.call(n) : (n = typeof Hi == "function" ? Hi(n) : n[Symbol.iterator](), i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function a(l) {
        i[l] = n[l] && function(u) {
          return new Promise(function(c, f) {
            u = n[l](u), s(c, f, u.done, u.value);
          });
        };
      }
      function s(l, u, c, f) {
        Promise.resolve(f).then(function(p) {
          l({ value: p, done: c });
        }, u);
      }
    }, lf = function(n, o) {
      return Object.defineProperty ? Object.defineProperty(n, "raw", { value: o }) : n.raw = o, n;
    };
    var r = Object.create ? function(n, o) {
      Object.defineProperty(n, "default", { enumerable: true, value: o });
    } : function(n, o) {
      n.default = o;
    };
    uf = function(n) {
      if (n && n.__esModule)
        return n;
      var o = {};
      if (n != null)
        for (var i in n)
          i !== "default" && Object.prototype.hasOwnProperty.call(n, i) && zi(o, n, i);
      return r(o, n), o;
    }, cf = function(n) {
      return n && n.__esModule ? n : { default: n };
    }, pf = function(n, o, i, a) {
      if (i === "a" && !a)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof o == "function" ? n !== o || !a : !o.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return i === "m" ? a : i === "a" ? a.call(n) : a ? a.value : o.get(n);
    }, ff = function(n, o, i, a, s) {
      if (a === "m")
        throw new TypeError("Private method is not writable");
      if (a === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof o == "function" ? n !== o || !s : !o.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return a === "a" ? s.call(n, i) : s ? s.value = i : o.set(n, i), i;
    }, e("__extends", $p), e("__assign", Xp), e("__rest", Yp), e("__decorate", Kp), e("__param", qp), e("__metadata", Zp), e("__awaiter", Jp), e("__generator", Qp), e("__exportStar", ef), e("__createBinding", zi), e("__values", Hi), e("__read", Pl), e("__spread", tf), e("__spreadArrays", rf), e("__spreadArray", nf), e("__await", Pn), e("__asyncGenerator", of), e("__asyncDelegator", af), e("__asyncValues", sf), e("__makeTemplateObject", lf), e("__importStar", uf), e("__importDefault", cf), e("__classPrivateFieldGet", pf), e("__classPrivateFieldSet", ff);
  });
});
var kf = Hr((Al) => {
  Object.defineProperty(Al, "__esModule", { value: true });
  function Lx(e) {
    var t = {};
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  Al.default = Lx;
});
var Ll = Hr((Dl) => {
  Object.defineProperty(Dl, "__esModule", { value: true });
  function Ox(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e;
  }
  var Vx = Ox(kf()), kx = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _x = Vx(function(e) {
    return kx.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  });
  Dl.default = _x;
});
var Yh = Hr((GG, Xh) => {
  var M = M || {};
  M.Geometry = function() {
  };
  M.Geometry.intersectLineLine = function(e, t) {
    var r = (e.intercept - t.intercept) / (t.slope - e.slope), n = e.slope * r + e.intercept;
    return { x: r, y: n };
  };
  M.Geometry.distanceFromOrigin = function(e) {
    return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
  };
  M.Geometry.distanceLineFromOrigin = function(e) {
    return Math.abs(e.intercept) / Math.sqrt(Math.pow(e.slope, 2) + 1);
  };
  M.Geometry.perpendicularThroughPoint = function(e, t) {
    var r = -1 / e.slope, n = t.y - r * t.x;
    return { slope: r, intercept: n };
  };
  M.Geometry.angleFromOrigin = function(e) {
    return Math.atan2(e.y, e.x);
  };
  M.Geometry.normalizeAngle = function(e) {
    var t = 2 * Math.PI;
    return (e % t + t) % t;
  };
  M.Geometry.lengthOfRayUntilIntersect = function(e, t) {
    return t.intercept / (Math.sin(e) - t.slope * Math.cos(e));
  };
  M.Hsluv = function() {
  };
  M.Hsluv.getBounds = function(e) {
    for (var t = [], r = Math.pow(e + 16, 3) / 1560896, n = r > M.Hsluv.epsilon ? r : e / M.Hsluv.kappa, o = 0; o < 3; )
      for (var i = o++, a = M.Hsluv.m[i][0], s = M.Hsluv.m[i][1], l = M.Hsluv.m[i][2], u = 0; u < 2; ) {
        var c = u++, f = (284517 * a - 94839 * l) * n, p = (838422 * l + 769860 * s + 731718 * a) * e * n - 769860 * c * e, m = (632260 * l - 126452 * s) * n + 126452 * c;
        t.push({ slope: f / m, intercept: p / m });
      }
    return t;
  };
  M.Hsluv.maxSafeChromaForL = function(e) {
    for (var t = M.Hsluv.getBounds(e), r = Infinity, n = 0; n < t.length; ) {
      var o = t[n];
      ++n;
      var i = M.Geometry.distanceLineFromOrigin(o);
      r = Math.min(r, i);
    }
    return r;
  };
  M.Hsluv.maxChromaForLH = function(e, t) {
    for (var r = t / 360 * Math.PI * 2, n = M.Hsluv.getBounds(e), o = Infinity, i = 0; i < n.length; ) {
      var a = n[i];
      ++i;
      var s = M.Geometry.lengthOfRayUntilIntersect(r, a);
      s >= 0 && (o = Math.min(o, s));
    }
    return o;
  };
  M.Hsluv.dotProduct = function(e, t) {
    for (var r = 0, n = 0, o = e.length; n < o; ) {
      var i = n++;
      r += e[i] * t[i];
    }
    return r;
  };
  M.Hsluv.fromLinear = function(e) {
    return e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055;
  };
  M.Hsluv.toLinear = function(e) {
    return e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  };
  M.Hsluv.xyzToRgb = function(e) {
    return [M.Hsluv.fromLinear(M.Hsluv.dotProduct(M.Hsluv.m[0], e)), M.Hsluv.fromLinear(M.Hsluv.dotProduct(M.Hsluv.m[1], e)), M.Hsluv.fromLinear(M.Hsluv.dotProduct(M.Hsluv.m[2], e))];
  };
  M.Hsluv.rgbToXyz = function(e) {
    var t = [M.Hsluv.toLinear(e[0]), M.Hsluv.toLinear(e[1]), M.Hsluv.toLinear(e[2])];
    return [M.Hsluv.dotProduct(M.Hsluv.minv[0], t), M.Hsluv.dotProduct(M.Hsluv.minv[1], t), M.Hsluv.dotProduct(M.Hsluv.minv[2], t)];
  };
  M.Hsluv.yToL = function(e) {
    return e <= M.Hsluv.epsilon ? e / M.Hsluv.refY * M.Hsluv.kappa : 116 * Math.pow(e / M.Hsluv.refY, 0.3333333333333333) - 16;
  };
  M.Hsluv.lToY = function(e) {
    return e <= 8 ? M.Hsluv.refY * e / M.Hsluv.kappa : M.Hsluv.refY * Math.pow((e + 16) / 116, 3);
  };
  M.Hsluv.xyzToLuv = function(e) {
    var t = e[0], r = e[1], n = e[2], o = t + 15 * r + 3 * n, i = 4 * t, a = 9 * r;
    o != 0 ? (i /= o, a /= o) : (i = NaN, a = NaN);
    var s = M.Hsluv.yToL(r);
    if (s == 0)
      return [0, 0, 0];
    var l = 13 * s * (i - M.Hsluv.refU), u = 13 * s * (a - M.Hsluv.refV);
    return [s, l, u];
  };
  M.Hsluv.luvToXyz = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (t == 0)
      return [0, 0, 0];
    var o = r / (13 * t) + M.Hsluv.refU, i = n / (13 * t) + M.Hsluv.refV, a = M.Hsluv.lToY(t), s = 0 - 9 * a * o / ((o - 4) * i - o * i), l = (9 * a - 15 * i * a - i * s) / (3 * i);
    return [s, a, l];
  };
  M.Hsluv.luvToLch = function(e) {
    var t = e[0], r = e[1], n = e[2], o = Math.sqrt(r * r + n * n), i;
    if (o < 1e-8)
      i = 0;
    else {
      var a = Math.atan2(n, r);
      i = a * 180 / Math.PI, i < 0 && (i = 360 + i);
    }
    return [t, o, i];
  };
  M.Hsluv.lchToLuv = function(e) {
    var t = e[0], r = e[1], n = e[2], o = n / 360 * 2 * Math.PI, i = Math.cos(o) * r, a = Math.sin(o) * r;
    return [t, i, a];
  };
  M.Hsluv.hsluvToLch = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (n > 99.9999999)
      return [100, 0, t];
    if (n < 1e-8)
      return [0, 0, t];
    var o = M.Hsluv.maxChromaForLH(n, t), i = o / 100 * r;
    return [n, i, t];
  };
  M.Hsluv.lchToHsluv = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (t > 99.9999999)
      return [n, 0, 100];
    if (t < 1e-8)
      return [n, 0, 0];
    var o = M.Hsluv.maxChromaForLH(t, n), i = r / o * 100;
    return [n, i, t];
  };
  M.Hsluv.hpluvToLch = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (n > 99.9999999)
      return [100, 0, t];
    if (n < 1e-8)
      return [0, 0, t];
    var o = M.Hsluv.maxSafeChromaForL(n), i = o / 100 * r;
    return [n, i, t];
  };
  M.Hsluv.lchToHpluv = function(e) {
    var t = e[0], r = e[1], n = e[2];
    if (t > 99.9999999)
      return [n, 0, 100];
    if (t < 1e-8)
      return [n, 0, 0];
    var o = M.Hsluv.maxSafeChromaForL(t), i = r / o * 100;
    return [n, i, t];
  };
  M.Hsluv.rgbToHex = function(e) {
    for (var t = "#", r = 0; r < 3; ) {
      var n = r++, o = e[n], i = Math.round(o * 255), a = i % 16, s = (i - a) / 16 | 0;
      t += M.Hsluv.hexChars.charAt(s) + M.Hsluv.hexChars.charAt(a);
    }
    return t;
  };
  M.Hsluv.hexToRgb = function(e) {
    e = e.toLowerCase();
    for (var t = [], r = 0; r < 3; ) {
      var n = r++, o = M.Hsluv.hexChars.indexOf(e.charAt(n * 2 + 1)), i = M.Hsluv.hexChars.indexOf(e.charAt(n * 2 + 2)), a = o * 16 + i;
      t.push(a / 255);
    }
    return t;
  };
  M.Hsluv.lchToRgb = function(e) {
    return M.Hsluv.xyzToRgb(M.Hsluv.luvToXyz(M.Hsluv.lchToLuv(e)));
  };
  M.Hsluv.rgbToLch = function(e) {
    return M.Hsluv.luvToLch(M.Hsluv.xyzToLuv(M.Hsluv.rgbToXyz(e)));
  };
  M.Hsluv.hsluvToRgb = function(e) {
    return M.Hsluv.lchToRgb(M.Hsluv.hsluvToLch(e));
  };
  M.Hsluv.rgbToHsluv = function(e) {
    return M.Hsluv.lchToHsluv(M.Hsluv.rgbToLch(e));
  };
  M.Hsluv.hpluvToRgb = function(e) {
    return M.Hsluv.lchToRgb(M.Hsluv.hpluvToLch(e));
  };
  M.Hsluv.rgbToHpluv = function(e) {
    return M.Hsluv.lchToHpluv(M.Hsluv.rgbToLch(e));
  };
  M.Hsluv.hsluvToHex = function(e) {
    return M.Hsluv.rgbToHex(M.Hsluv.hsluvToRgb(e));
  };
  M.Hsluv.hpluvToHex = function(e) {
    return M.Hsluv.rgbToHex(M.Hsluv.hpluvToRgb(e));
  };
  M.Hsluv.hexToHsluv = function(e) {
    return M.Hsluv.rgbToHsluv(M.Hsluv.hexToRgb(e));
  };
  M.Hsluv.hexToHpluv = function(e) {
    return M.Hsluv.rgbToHpluv(M.Hsluv.hexToRgb(e));
  };
  M.Hsluv.m = [[3.240969941904521, -1.537383177570093, -0.498610760293], [-0.96924363628087, 1.87596750150772, 0.041555057407175], [0.055630079696993, -0.20397695888897, 1.056971514242878]];
  M.Hsluv.minv = [[0.41239079926595, 0.35758433938387, 0.18048078840183], [0.21263900587151, 0.71516867876775, 0.072192315360733], [0.019330818715591, 0.11919477979462, 0.95053215224966]];
  M.Hsluv.refY = 1;
  M.Hsluv.refU = 0.19783000664283;
  M.Hsluv.refV = 0.46831999493879;
  M.Hsluv.kappa = 903.2962962;
  M.Hsluv.epsilon = 0.0088564516;
  M.Hsluv.hexChars = "0123456789abcdef";
  var VP = { hsluvToRgb: M.Hsluv.hsluvToRgb, rgbToHsluv: M.Hsluv.rgbToHsluv, hpluvToRgb: M.Hsluv.hpluvToRgb, rgbToHpluv: M.Hsluv.rgbToHpluv, hsluvToHex: M.Hsluv.hsluvToHex, hexToHsluv: M.Hsluv.hexToHsluv, hpluvToHex: M.Hsluv.hpluvToHex, hexToHpluv: M.Hsluv.hexToHpluv, lchToHpluv: M.Hsluv.lchToHpluv, hpluvToLch: M.Hsluv.hpluvToLch, lchToHsluv: M.Hsluv.lchToHsluv, hsluvToLch: M.Hsluv.hsluvToLch, lchToLuv: M.Hsluv.lchToLuv, luvToLch: M.Hsluv.luvToLch, xyzToLuv: M.Hsluv.xyzToLuv, luvToXyz: M.Hsluv.luvToXyz, xyzToRgb: M.Hsluv.xyzToRgb, rgbToXyz: M.Hsluv.rgbToXyz, lchToRgb: M.Hsluv.lchToRgb, rgbToLch: M.Hsluv.rgbToLch };
  Xh.exports = VP;
});
var dv = Hr((o3, wc) => {
  var XT = Object.prototype.hasOwnProperty, ut = "~";
  function di() {
  }
  Object.create && (di.prototype = Object.create(null), new di().__proto__ || (ut = false));
  function YT(e, t, r) {
    this.fn = e, this.context = t, this.once = r || false;
  }
  function mv(e, t, r, n, o) {
    if (typeof r != "function")
      throw new TypeError("The listener must be a function");
    var i = new YT(r, n || e, o), a = ut ? ut + t : t;
    return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], i] : e._events[a].push(i) : (e._events[a] = i, e._eventsCount++), e;
  }
  function ks(e, t) {
    --e._eventsCount == 0 ? e._events = new di() : delete e._events[t];
  }
  function it() {
    this._events = new di(), this._eventsCount = 0;
  }
  it.prototype.eventNames = function() {
    var t = [], r, n;
    if (this._eventsCount === 0)
      return t;
    for (n in r = this._events)
      XT.call(r, n) && t.push(ut ? n.slice(1) : n);
    return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(r)) : t;
  };
  it.prototype.listeners = function(t) {
    var r = ut ? ut + t : t, n = this._events[r];
    if (!n)
      return [];
    if (n.fn)
      return [n.fn];
    for (var o = 0, i = n.length, a = new Array(i); o < i; o++)
      a[o] = n[o].fn;
    return a;
  };
  it.prototype.listenerCount = function(t) {
    var r = ut ? ut + t : t, n = this._events[r];
    return n ? n.fn ? 1 : n.length : 0;
  };
  it.prototype.emit = function(t, r, n, o, i, a) {
    var s = ut ? ut + t : t;
    if (!this._events[s])
      return false;
    var l = this._events[s], u = arguments.length, c, f;
    if (l.fn) {
      switch (l.once && this.removeListener(t, l.fn, void 0, true), u) {
        case 1:
          return l.fn.call(l.context), true;
        case 2:
          return l.fn.call(l.context, r), true;
        case 3:
          return l.fn.call(l.context, r, n), true;
        case 4:
          return l.fn.call(l.context, r, n, o), true;
        case 5:
          return l.fn.call(l.context, r, n, o, i), true;
        case 6:
          return l.fn.call(l.context, r, n, o, i, a), true;
      }
      for (f = 1, c = new Array(u - 1); f < u; f++)
        c[f - 1] = arguments[f];
      l.fn.apply(l.context, c);
    } else {
      var p = l.length, m;
      for (f = 0; f < p; f++)
        switch (l[f].once && this.removeListener(t, l[f].fn, void 0, true), u) {
          case 1:
            l[f].fn.call(l[f].context);
            break;
          case 2:
            l[f].fn.call(l[f].context, r);
            break;
          case 3:
            l[f].fn.call(l[f].context, r, n);
            break;
          case 4:
            l[f].fn.call(l[f].context, r, n, o);
            break;
          default:
            if (!c)
              for (m = 1, c = new Array(u - 1); m < u; m++)
                c[m - 1] = arguments[m];
            l[f].fn.apply(l[f].context, c);
        }
    }
    return true;
  };
  it.prototype.on = function(t, r, n) {
    return mv(this, t, r, n, false);
  };
  it.prototype.once = function(t, r, n) {
    return mv(this, t, r, n, true);
  };
  it.prototype.removeListener = function(t, r, n, o) {
    var i = ut ? ut + t : t;
    if (!this._events[i])
      return this;
    if (!r)
      return ks(this, i), this;
    var a = this._events[i];
    if (a.fn)
      a.fn === r && (!o || a.once) && (!n || a.context === n) && ks(this, i);
    else {
      for (var s = 0, l = [], u = a.length; s < u; s++)
        (a[s].fn !== r || o && !a[s].once || n && a[s].context !== n) && l.push(a[s]);
      l.length ? this._events[i] = l.length === 1 ? l[0] : l : ks(this, i);
    }
    return this;
  };
  it.prototype.removeAllListeners = function(t) {
    var r;
    return t ? (r = ut ? ut + t : t, this._events[r] && ks(this, r)) : (this._events = new di(), this._eventsCount = 0), this;
  };
  it.prototype.off = it.prototype.removeListener;
  it.prototype.addListener = it.prototype.on;
  it.prefixed = ut;
  it.EventEmitter = it;
  typeof wc != "undefined" && (wc.exports = it);
});
var xi = Hr((uY, xv) => {
  var iw = { childContextTypes: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, aw = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, sw = Object.defineProperty, lw = Object.getOwnPropertyNames, Sv = Object.getOwnPropertySymbols, uw = Object.getOwnPropertyDescriptor, Ic = Object.getPrototypeOf, Cv = Ic && Ic(Object);
  function Pv(e, t, r) {
    if (typeof t != "string") {
      if (Cv) {
        var n = Ic(t);
        n && n !== Cv && Pv(e, n, r);
      }
      var o = lw(t);
      Sv && (o = o.concat(Sv(t)));
      for (var i = 0; i < o.length; ++i) {
        var a = o[i];
        if (!iw[a] && !aw[a] && (!r || !r[a])) {
          var s = uw(t, a);
          try {
            sw(e, a, s);
          } catch (l) {
          }
        }
      }
      return e;
    }
    return e;
  }
  xv.exports = Pv;
});
var ob = Hr((xJ, hp) => {
  (function() {
    function e(h, v) {
      document.addEventListener ? h.addEventListener("scroll", v, false) : h.attachEvent("scroll", v);
    }
    function t(h) {
      document.body ? h() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function v() {
        document.removeEventListener("DOMContentLoaded", v), h();
      }) : document.attachEvent("onreadystatechange", function v() {
        (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", v), h());
      });
    }
    function r(h) {
      this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(h)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
    }
    function n(h, v) {
      h.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + v + ";";
    }
    function o(h) {
      var v = h.a.offsetWidth, y = v + 100;
      return h.f.style.width = y + "px", h.c.scrollLeft = y, h.b.scrollLeft = h.b.scrollWidth + 100, h.g !== v ? (h.g = v, true) : false;
    }
    function i(h, v) {
      function y() {
        var C = P;
        o(C) && C.a.parentNode && v(C.g);
      }
      var P = h;
      e(h.b, y), e(h.c, y), o(h);
    }
    function a(h, v) {
      var y = v || {};
      this.family = h, this.style = y.style || "normal", this.weight = y.weight || "normal", this.stretch = y.stretch || "normal";
    }
    var s = null, l = null, u = null, c = null;
    function f() {
      if (l === null)
        if (p() && /Apple/.test(window.navigator.vendor)) {
          var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          l = !!h && 603 > parseInt(h[1], 10);
        } else
          l = false;
      return l;
    }
    function p() {
      return c === null && (c = !!document.fonts), c;
    }
    function m() {
      if (u === null) {
        var h = document.createElement("div");
        try {
          h.style.font = "condensed 100px sans-serif";
        } catch (v) {
        }
        u = h.style.font !== "";
      }
      return u;
    }
    function d(h, v) {
      return [h.style, h.weight, m() ? h.stretch : "", "100px", v].join(" ");
    }
    a.prototype.load = function(h, v) {
      var y = this, P = h || "BESbswy", C = 0, b = v || 3e3, T = new Date().getTime();
      return new Promise(function(F, I) {
        if (p() && !f()) {
          var A = new Promise(function(k, W) {
            function K() {
              new Date().getTime() - T >= b ? W(Error("" + b + "ms timeout exceeded")) : document.fonts.load(d(y, '"' + y.family + '"'), P).then(function(U) {
                1 <= U.length ? k() : setTimeout(K, 25);
              }, W);
            }
            K();
          }), E = new Promise(function(k, W) {
            C = setTimeout(function() {
              W(Error("" + b + "ms timeout exceeded"));
            }, b);
          });
          Promise.race([E, A]).then(function() {
            clearTimeout(C), F(y);
          }, I);
        } else
          t(function() {
            function k() {
              var g;
              (g = ee != -1 && H != -1 || ee != -1 && X != -1 || H != -1 && X != -1) && ((g = ee != H && ee != X && H != X) || (s === null && (g = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), s = !!g && (536 > parseInt(g[1], 10) || parseInt(g[1], 10) === 536 && 11 >= parseInt(g[2], 10))), g = s && (ee == ae && H == ae && X == ae || ee == G && H == G && X == G || ee == S && H == S && X == S)), g = !g), g && (x.parentNode && x.parentNode.removeChild(x), clearTimeout(C), F(y));
            }
            function W() {
              if (new Date().getTime() - T >= b)
                x.parentNode && x.parentNode.removeChild(x), I(Error("" + b + "ms timeout exceeded"));
              else {
                var g = document.hidden;
                (g === true || g === void 0) && (ee = K.a.offsetWidth, H = U.a.offsetWidth, X = N.a.offsetWidth, k()), C = setTimeout(W, 50);
              }
            }
            var K = new r(P), U = new r(P), N = new r(P), ee = -1, H = -1, X = -1, ae = -1, G = -1, S = -1, x = document.createElement("div");
            x.dir = "ltr", n(K, d(y, "sans-serif")), n(U, d(y, "serif")), n(N, d(y, "monospace")), x.appendChild(K.a), x.appendChild(U.a), x.appendChild(N.a), document.body.appendChild(x), ae = K.a.offsetWidth, G = U.a.offsetWidth, S = N.a.offsetWidth, W(), i(K, function(g) {
              ee = g, k();
            }), n(K, d(y, '"' + y.family + '",sans-serif')), i(U, function(g) {
              H = g, k();
            }), n(U, d(y, '"' + y.family + '",serif')), i(N, function(g) {
              X = g, k();
            }), n(N, d(y, '"' + y.family + '",monospace'));
          });
      });
    }, typeof hp == "object" ? hp.exports = a : (window.FontFaceObserver = a, window.FontFaceObserver.prototype.load = a.prototype.load);
  })();
});
var df = Ro(mf()), { __extends: Tn, __assign: w, __rest: he, __decorate: AM, __param: DM, __metadata: LM, __awaiter: OM, __generator: VM, __exportStar: kM, __createBinding: _M, __values: jM, __read: Q, __spread: BM, __spreadArrays: NM, __spreadArray: Oe, __await: HM, __asyncGenerator: zM, __asyncDelegator: WM, __asyncValues: UM, __makeTemplateObject: GM, __importStar: $M, __importDefault: XM, __classPrivateFieldGet: YM, __classPrivateFieldSet: KM } = df.default;
var Qt = function(e) {
  return { isEnabled: function(t) {
    return e.some(function(r) {
      return !!t[r];
    });
  } };
}, Wi = { measureLayout: Qt(["layout", "layoutId", "drag", "_layoutResetTransform"]), animation: Qt(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag"]), exit: Qt(["exit"]), drag: Qt(["drag", "dragControls"]), focus: Qt(["whileFocus"]), hover: Qt(["whileHover", "onHoverStart", "onHoverEnd"]), tap: Qt(["whileTap", "onTap", "onTapStart", "onTapCancel"]), pan: Qt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]), layoutAnimation: Qt(["layout", "layoutId"]) };
function Fo(e) {
  for (var t in e) {
    var r = e[t];
    r !== null && (Wi[t].Component = r);
  }
}
var yr = function() {
}, ve = function() {
};
yr = function(e, t) {
  !e && typeof console != "undefined" && console.warn(t);
}, ve = function(e, t) {
  if (!e)
    throw new Error(t);
};
var wn = react.exports.createContext({ strict: false });
var hf = Object.keys(Wi), $b = hf.length;
function gf(e, t, r) {
  var n = [], o = react.exports.useContext(wn);
  if (!t)
    return null;
  r && o.strict && ve(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var i = 0; i < $b; i++) {
    var a = hf[i], s = Wi[a], l = s.isEnabled, u = s.Component;
    l(e) && u && n.push(react.exports.createElement(u, w({ key: a }, e, { visualElement: t })));
  }
  return n;
}
var nt = react.exports.createContext({ transformPagePoint: function(e) {
  return e;
}, isStatic: false });
var er = react.exports.createContext({});
function Ui() {
  return react.exports.useContext(er).visualElement;
}
var ft = react.exports.createContext(null);
function Ae(e) {
  var t = react.exports.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Eo() {
  var e = react.exports.useContext(ft);
  if (e === null)
    return [true, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, o = Qb();
  react.exports.useEffect(function() {
    return n(o);
  }, []);
  var i = function() {
    return r == null ? void 0 : r(o);
  };
  return !t && r ? [false, i] : [true];
}
function ex() {
  return Tl(react.exports.useContext(ft));
}
function Tl(e) {
  return e === null ? true : e.isPresent;
}
var tx = 0, rx = function() {
  return tx++;
}, Qb = function() {
  return Ae(rx);
};
var br = react.exports.createContext(null);
var xr = typeof window != "undefined";
var zr = xr ? react.exports.useLayoutEffect : react.exports.useEffect;
function lx(e) {
  var t = e.layoutId, r = react.exports.useContext(br);
  return r && t !== void 0 ? r + "-" + t : t;
}
function yf(e, t, r, n) {
  var o = react.exports.useContext(nt), i = react.exports.useContext(wn), a = Ui(), s = react.exports.useContext(ft), l = lx(r), u = react.exports.useRef(void 0);
  n || (n = i.renderer), !u.current && n && (u.current = n(e, { visualState: t, parent: a, props: w(w({}, r), { layoutId: l }), presenceId: s == null ? void 0 : s.id, blockInitialAnimation: (s == null ? void 0 : s.initial) === false }));
  var c = u.current;
  return zr(function() {
    !c || (c.setProps(w(w(w({}, o), r), { layoutId: l })), c.isPresent = Tl(s), c.isPresenceRoot = !a || a.presenceId !== (s == null ? void 0 : s.id), c.syncRender());
  }), react.exports.useEffect(function() {
    var f;
    !c || (f = c.animationState) === null || f === void 0 || f.animateChanges();
  }), zr(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function Mo(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function bf(e, t, r) {
  return react.exports.useCallback(function(n) {
    var o;
    n && ((o = e.mount) === null || o === void 0 || o.call(e, n)), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Mo(r) && (r.current = n));
  }, [t]);
}
function wl(e) {
  return Array.isArray(e);
}
function mt(e) {
  return typeof e == "string" || wl(e);
}
function cx(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.get();
  }), t;
}
function px(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.getVelocity();
  }), t;
}
function Rl(e, t, r, n, o) {
  var i;
  return n === void 0 && (n = {}), o === void 0 && (o = {}), typeof t == "string" && (t = (i = e.variants) === null || i === void 0 ? void 0 : i[t]), typeof t == "function" ? t(r != null ? r : e.custom, n, o) : t;
}
function Wr(e, t, r) {
  var n = e.getProps();
  return Rl(n, t, r != null ? r : n.custom, cx(e), px(e));
}
function Ur(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || mt(e.initial) || mt(e.animate) || mt(e.whileHover) || mt(e.whileDrag) || mt(e.whileTap) || mt(e.whileFocus) || mt(e.exit);
}
function $i(e) {
  return Boolean(Ur(e) || e.variants);
}
function xf(e, t) {
  if (Ur(e)) {
    var r = e.initial, n = e.animate;
    return { initial: r === false || mt(r) ? r : void 0, animate: mt(n) ? n : void 0 };
  }
  return e.inherit !== false ? t : {};
}
function Cf(e, t) {
  var r = xf(e, react.exports.useContext(er)), n = r.initial, o = r.animate;
  return react.exports.useMemo(function() {
    return { initial: n, animate: o };
  }, t ? [Sf(n), Sf(o)] : []);
}
function Sf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function Io(e) {
  var t = e.preloadedFeatures, r = e.createVisualElement, n = e.useRender, o = e.useVisualState, i = e.Component;
  t && Fo(t);
  function a(s, l) {
    var u = react.exports.useContext(nt).isStatic, c = null, f = Cf(s, u), p = o(s, u);
    return !u && xr && (f.visualElement = yf(i, p, s, r), c = gf(s, f.visualElement, t)), react.exports.createElement(react.exports.Fragment, null, react.exports.createElement(er.Provider, { value: f }, n(i, s, bf(p, f.visualElement, l), p, u)), c);
  }
  return react.exports.forwardRef(a);
}
function Xi(e) {
  function t(n, o) {
    return o === void 0 && (o = {}), Io(e(n, o));
  }
  var r = new Map();
  return new Proxy(t, { get: function(n, o) {
    return r.has(o) || r.set(o, t(o)), r.get(o);
  } });
}
var Tf = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
function Rn(e) {
  return typeof e != "string" || e.includes("-") ? false : !!(Tf.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var Gr = {};
function Ao(e) {
  for (var t in e)
    Gr[t] = e[t];
}
var Yi = ["", "X", "Y", "Z"], vx = ["translate", "scale", "rotate", "skew"], Fn = ["transformPerspective", "x", "y", "z"];
vx.forEach(function(e) {
  return Yi.forEach(function(t) {
    return Fn.push(e + t);
  });
});
function wf(e, t) {
  return Fn.indexOf(e) - Fn.indexOf(t);
}
var yx = new Set(Fn);
function Sr(e) {
  return yx.has(e);
}
var bx = new Set(["originX", "originY", "originZ"]);
function Ki(e) {
  return bx.has(e);
}
function qi(e, t) {
  var r = t.layout, n = t.layoutId;
  return Sr(e) || Ki(e) || (r || n !== void 0) && (!!Gr[e] || e === "opacity");
}
var ze = function(e) {
  return e !== null && typeof e == "object" && e.getVelocity;
};
var xx = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" };
function Rf(e, t, r, n) {
  var o = e.transform, i = e.transformKeys, a = t.enableHardwareAcceleration, s = a === void 0 ? true : a, l = t.allowTransformNone, u = l === void 0 ? true : l, c = "";
  i.sort(wf);
  for (var f = false, p = i.length, m = 0; m < p; m++) {
    var d = i[m];
    c += (xx[d] || d) + "(" + o[d] + ") ", d === "z" && (f = true);
  }
  return !f && s ? c += "translateZ(0)" : c = c.trim(), n ? c = n(o, r ? "" : c) : u && r && (c = "none"), c;
}
function Ff(e) {
  var t = e.originX, r = t === void 0 ? "50%" : t, n = e.originY, o = n === void 0 ? "50%" : n, i = e.originZ, a = i === void 0 ? 0 : i;
  return r + " " + o + " " + a;
}
function Zi(e) {
  return e.startsWith("--");
}
var Ef = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
var Ji = function(e, t) {
  return function(r) {
    return Math.max(Math.min(r, t), e);
  };
}, Cr = function(e) {
  return e % 1 ? Number(e.toFixed(5)) : e;
}, Pr = /(-)?([\d]*\.?[\d])+/g, Qi = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, Mf = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function tr(e) {
  return typeof e == "string";
}
var xt = { test: function(e) {
  return typeof e == "number";
}, parse: parseFloat, transform: function(e) {
  return e;
} }, rr = w(w({}, xt), { transform: Ji(0, 1) }), En = w(w({}, xt), { default: 1 });
var Do = function(e) {
  return { test: function(t) {
    return tr(t) && t.endsWith(e) && t.split(" ").length === 1;
  }, parse: parseFloat, transform: function(t) {
    return "" + t + e;
  } };
}, Lt = Do("deg"), nr = Do("%"), Z = Do("px"), Fl = Do("vh"), El = Do("vw"), ea = w(w({}, nr), { parse: function(e) {
  return nr.parse(e) / 100;
}, transform: function(e) {
  return nr.transform(e * 100);
} });
var Mn = function(e, t) {
  return function(r) {
    return Boolean(tr(r) && Mf.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t));
  };
}, ta = function(e, t, r) {
  return function(n) {
    var o;
    if (!tr(n))
      return n;
    var i = n.match(Pr), a = i[0], s = i[1], l = i[2], u = i[3];
    return o = {}, o[e] = parseFloat(a), o[t] = parseFloat(s), o[r] = parseFloat(l), o.alpha = u !== void 0 ? parseFloat(u) : 1, o;
  };
};
var or = { test: Mn("hsl", "hue"), parse: ta("hue", "saturation", "lightness"), transform: function(e) {
  var t = e.hue, r = e.saturation, n = e.lightness, o = e.alpha, i = o === void 0 ? 1 : o;
  return "hsla(" + Math.round(t) + ", " + nr.transform(Cr(r)) + ", " + nr.transform(Cr(n)) + ", " + Cr(rr.transform(i)) + ")";
} };
var Sx = Ji(0, 255), ra = w(w({}, xt), { transform: function(e) {
  return Math.round(Sx(e));
} }), Ut = { test: Mn("rgb", "red"), parse: ta("red", "green", "blue"), transform: function(e) {
  var t = e.red, r = e.green, n = e.blue, o = e.alpha, i = o === void 0 ? 1 : o;
  return "rgba(" + ra.transform(t) + ", " + ra.transform(r) + ", " + ra.transform(n) + ", " + Cr(rr.transform(i)) + ")";
} };
function Cx(e) {
  var t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), o = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), o = e.substr(4, 1), t += t, r += r, n += n, o += o), { red: parseInt(t, 16), green: parseInt(r, 16), blue: parseInt(n, 16), alpha: o ? parseInt(o, 16) / 255 : 1 };
}
var In = { test: Mn("#"), parse: Cx, transform: Ut.transform };
var Ve = { test: function(e) {
  return Ut.test(e) || In.test(e) || or.test(e);
}, parse: function(e) {
  return Ut.test(e) ? Ut.parse(e) : or.test(e) ? or.parse(e) : In.parse(e);
}, transform: function(e) {
  return tr(e) ? e : e.hasOwnProperty("red") ? Ut.transform(e) : or.transform(e);
} };
var If = "${c}", Af = "${n}";
function Px(e) {
  var t, r, n, o;
  return isNaN(e) && tr(e) && ((r = (t = e.match(Pr)) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) + ((o = (n = e.match(Qi)) === null || n === void 0 ? void 0 : n.length) !== null && o !== void 0 ? o : 0) > 0;
}
function Df(e) {
  var t = [], r = 0, n = e.match(Qi);
  n && (r = n.length, e = e.replace(Qi, If), t.push.apply(t, n.map(Ve.parse)));
  var o = e.match(Pr);
  return o && (e = e.replace(Pr, Af), t.push.apply(t, o.map(xt.parse))), { values: t, numColors: r, tokenised: e };
}
function Lf(e) {
  return Df(e).values;
}
function Of(e) {
  var t = Df(e), r = t.values, n = t.numColors, o = t.tokenised, i = r.length;
  return function(a) {
    for (var s = o, l = 0; l < i; l++)
      s = s.replace(l < n ? If : Af, l < n ? Ve.transform(a[l]) : Cr(a[l]));
    return s;
  };
}
var Tx = function(e) {
  return typeof e == "number" ? 0 : e;
};
function wx(e) {
  var t = Lf(e), r = Of(e);
  return r(t.map(Tx));
}
var Ge = { test: Px, parse: Lf, createTransformer: Of, getAnimatableNone: wx };
var Rx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Fx(e) {
  var t = e.slice(0, -1).split("("), r = t[0], n = t[1];
  if (r === "drop-shadow")
    return e;
  var o = (n.match(Pr) || [])[0];
  if (!o)
    return e;
  var i = n.replace(o, ""), a = Rx.has(r) ? 1 : 0;
  return o !== n && (a *= 100), r + "(" + a + i + ")";
}
var Ex = /([a-z-]*)\(.*?\)/g, An = w(w({}, Ge), { getAnimatableNone: function(e) {
  var t = e.match(Ex);
  return t ? t.map(Fx).join(" ") : e;
} });
var Ml = w(w({}, xt), { transform: Math.round });
var na = { borderWidth: Z, borderTopWidth: Z, borderRightWidth: Z, borderBottomWidth: Z, borderLeftWidth: Z, borderRadius: Z, radius: Z, borderTopLeftRadius: Z, borderTopRightRadius: Z, borderBottomRightRadius: Z, borderBottomLeftRadius: Z, width: Z, maxWidth: Z, height: Z, maxHeight: Z, size: Z, top: Z, right: Z, bottom: Z, left: Z, padding: Z, paddingTop: Z, paddingRight: Z, paddingBottom: Z, paddingLeft: Z, margin: Z, marginTop: Z, marginRight: Z, marginBottom: Z, marginLeft: Z, rotate: Lt, rotateX: Lt, rotateY: Lt, rotateZ: Lt, scale: En, scaleX: En, scaleY: En, scaleZ: En, skew: Lt, skewX: Lt, skewY: Lt, distance: Z, translateX: Z, translateY: Z, translateZ: Z, x: Z, y: Z, z: Z, perspective: Z, transformPerspective: Z, opacity: rr, originX: ea, originY: ea, originZ: Z, zIndex: Ml, fillOpacity: rr, strokeOpacity: rr, numOctaves: Ml };
function Dn(e, t, r, n, o, i, a, s) {
  var l, u = e.style, c = e.vars, f = e.transform, p = e.transformKeys, m = e.transformOrigin;
  p.length = 0;
  var d = false, h = false, v = true;
  for (var y in t) {
    var P = t[y];
    if (Zi(y)) {
      c[y] = P;
      continue;
    }
    var C = na[y], b = Ef(P, C);
    if (Sr(y)) {
      if (d = true, f[y] = b, p.push(y), !v)
        continue;
      P !== ((l = C.default) !== null && l !== void 0 ? l : 0) && (v = false);
    } else if (Ki(y))
      m[y] = b, h = true;
    else if (n && r && n.isHydrated && Gr[y]) {
      var T = Gr[y].process(P, n, r), F = Gr[y].applyTo;
      if (F)
        for (var I = F.length, A = 0; A < I; A++)
          u[F[A]] = T;
      else
        u[y] = T;
    } else
      u[y] = b;
  }
  n && r && a && s ? (u.transform = a(n.deltaFinal, n.treeScale, d ? f : void 0), i && (u.transform = i(f, u.transform)), u.transformOrigin = s(n)) : (d && (u.transform = Rf(e, o, v, i)), h && (u.transformOrigin = Ff(m)));
}
var Ln = function() {
  return { style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {} };
};
function Il(e, t, r) {
  for (var n in t)
    !ze(t[n]) && !qi(n, r) && (e[n] = t[n]);
}
function Ix(e, t, r) {
  var n = e.transformTemplate;
  return react.exports.useMemo(function() {
    var o = Ln();
    Dn(o, t, void 0, void 0, { enableHardwareAcceleration: !r }, n);
    var i = o.vars, a = o.style;
    return w(w({}, i), a);
  }, [t]);
}
function Ax(e, t, r) {
  var n = e.style || {}, o = {};
  return Il(o, n, e), Object.assign(o, Ix(e, t, r)), e.transformValues && (o = e.transformValues(o)), o;
}
function Vf(e, t, r) {
  var n = {}, o = Ax(e, t, r);
  return Boolean(e.drag) && (n.draggable = false, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === true ? "none" : "pan-" + (e.drag === "x" ? "y" : "x")), n.style = o, n;
}
var Dx = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "_layoutResetTransform", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover"]);
function Tr(e) {
  return Dx.has(e);
}
var _f = function(e) {
  return !Tr(e);
};
try {
  jf = Ll().default, _f = function(e) {
    return e.startsWith("on") ? !Tr(e) : jf(e);
  };
} catch (e) {
}
var jf;
function Bf(e, t, r) {
  var n = {};
  for (var o in e)
    (_f(o) || r === true && Tr(o) || !t && !Tr(o)) && (n[o] = e[o]);
  return n;
}
function Nf(e, t, r) {
  return typeof e == "string" ? e : Z.transform(t + r * e);
}
function Hf(e, t, r) {
  var n = Nf(t, e.x, e.width), o = Nf(r, e.y, e.height);
  return n + " " + o;
}
var Ol = function(e, t) {
  return Z.transform(e * t);
}, jx = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, Bx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function zf(e, t, r, n, o, i) {
  n === void 0 && (n = 1), o === void 0 && (o = 0), i === void 0 && (i = true);
  var a = i ? jx : Bx;
  e[a.offset] = Ol(-o, t);
  var s = Ol(r, t), l = Ol(n, t);
  e[a.array] = s + " " + l;
}
function On(e, t, r, n, o, i, a, s) {
  var l = t.attrX, u = t.attrY, c = t.originX, f = t.originY, p = t.pathLength, m = t.pathSpacing, d = m === void 0 ? 1 : m, h = t.pathOffset, v = h === void 0 ? 0 : h, y = he(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Dn(e, y, r, n, o, i, a, s), e.attrs = e.style, e.style = {};
  var P = e.attrs, C = e.style, b = e.dimensions, T = e.totalPathLength;
  P.transform && (b && (C.transform = P.transform), delete P.transform), b && (c !== void 0 || f !== void 0 || C.transform) && (C.transformOrigin = Hf(b, c !== void 0 ? c : 0.5, f !== void 0 ? f : 0.5)), l !== void 0 && (P.x = l), u !== void 0 && (P.y = u), T !== void 0 && p !== void 0 && zf(P, T, p, d, v, false);
}
var oa = function() {
  return w(w({}, Ln()), { attrs: {} });
};
function Wf(e, t) {
  var r = react.exports.useMemo(function() {
    var o = oa();
    return On(o, t, void 0, void 0, { enableHardwareAcceleration: false }, e.transformTemplate), w(w({}, o.attrs), { style: w({}, o.style) });
  }, [t]);
  if (e.style) {
    var n = {};
    Il(n, e.style, e), r.style = w(w({}, n), r.style);
  }
  return r;
}
function Uf(e) {
  e === void 0 && (e = false);
  var t = function(r, n, o, i, a) {
    var s = i.latestValues, l = Rn(r) ? Wf : Vf, u = l(n, s, a), c = Bf(n, typeof r == "string", e), f = w(w(w({}, c), u), { ref: o });
    return react.exports.createElement(r, f);
  };
  return t;
}
var zx = /([a-z])([A-Z])/g, Wx = "$1-$2", ia = function(e) {
  return e.replace(zx, Wx).toLowerCase();
};
function aa(e, t) {
  var r = t.style, n = t.vars;
  Object.assign(e.style, r);
  for (var o in n)
    e.style.setProperty(o, n[o]);
}
var sa = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox"]);
function la(e, t) {
  aa(e, t);
  for (var r in t.attrs)
    e.setAttribute(sa.has(r) ? r : ia(r), t.attrs[r]);
}
function Vn(e) {
  var t = e.style, r = {};
  for (var n in t)
    (ze(t[n]) || qi(n, e)) && (r[n] = t[n]);
  return r;
}
function ua(e) {
  var t = Vn(e);
  for (var r in e)
    if (ze(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function kn(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var ir = function(e) {
  return Array.isArray(e);
};
var Gf = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, $f = function(e) {
  return ir(e) ? e[e.length - 1] || 0 : e;
};
function Ze(e) {
  var t = ze(e) ? e.get() : e;
  return Gf(t) ? t.toValue() : t;
}
function Yf(e, t, r, n) {
  var o = e.scrapeMotionValuesFromProps, i = e.createRenderState, a = e.onMount, s = { latestValues: Ux(t, r, n, o), renderState: i() };
  return a && (s.mount = function(l) {
    return a(t, l, s);
  }), s;
}
var _n = function(e) {
  return function(t, r) {
    var n = react.exports.useContext(er), o = react.exports.useContext(ft);
    return r ? Yf(e, t, n, o) : Ae(function() {
      return Yf(e, t, n, o);
    });
  };
};
function Ux(e, t, r, n) {
  var o = {}, i = (r == null ? void 0 : r.initial) === false, a = n(e);
  for (var s in a)
    o[s] = Ze(a[s]);
  var l = e.initial, u = e.animate, c = Ur(e), f = $i(e);
  t && f && !c && e.inherit !== false && (l != null || (l = t.initial), u != null || (u = t.animate));
  var p = i || l === false ? u : l;
  if (p && typeof p != "boolean" && !kn(p)) {
    var m = Array.isArray(p) ? p : [p];
    m.forEach(function(d) {
      var h = Rl(e, d);
      if (!!h) {
        var v = h.transitionEnd;
        h.transition;
        var y = he(h, ["transitionEnd", "transition"]);
        for (var P in y)
          o[P] = y[P];
        for (var P in v)
          o[P] = v[P];
      }
    });
  }
  return o;
}
var Kf = { useVisualState: _n({ scrapeMotionValuesFromProps: ua, createRenderState: oa, onMount: function(e, t, r) {
  var n = r.renderState, o = r.latestValues;
  try {
    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch (i) {
    n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
  Gx(t) && (n.totalPathLength = t.getTotalLength()), On(n, o, void 0, void 0, { enableHardwareAcceleration: false }, e.transformTemplate), la(t, n);
} }) };
function Gx(e) {
  return e.tagName === "path";
}
var qf = { useVisualState: _n({ scrapeMotionValuesFromProps: Vn, createRenderState: Ln }) };
function Lo(e, t, r, n) {
  var o = t.forwardMotionProps, i = o === void 0 ? false : o, a = Rn(e) ? Kf : qf;
  return w(w({}, a), { preloadedFeatures: r, useRender: Uf(i), createVisualElement: n, Component: e });
}
var Te;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.Exit = "exit";
})(Te || (Te = {}));
function Ot(e, t, r, n) {
  return e.addEventListener(t, r, n), function() {
    return e.removeEventListener(t, r, n);
  };
}
function wr(e, t, r, n) {
  react.exports.useEffect(function() {
    var o = e.current;
    if (r && o)
      return Ot(o, t, r, n);
  }, [e, t, r, n]);
}
function Zf(e) {
  var t = e.whileFocus, r = e.visualElement, n = function() {
    var i;
    (i = r.animationState) === null || i === void 0 || i.setActive(Te.Focus, true);
  }, o = function() {
    var i;
    (i = r.animationState) === null || i === void 0 || i.setActive(Te.Focus, false);
  };
  wr(r, "focus", t ? n : void 0), wr(r, "blur", t ? o : void 0);
}
function ca(e) {
  return typeof PointerEvent != "undefined" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function pa(e) {
  var t = !!e.touches;
  return t;
}
function Xx(e) {
  return function(t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var Yx = { pageX: 0, pageY: 0 };
function Kx(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || Yx;
  return { x: n[t + "X"], y: n[t + "Y"] };
}
function qx(e, t) {
  return t === void 0 && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
}
function fa(e, t) {
  return t === void 0 && (t = "page"), { point: pa(e) ? Kx(e, t) : qx(e, t) };
}
function ma(e) {
  return fa(e, "client");
}
var Vl = function(e, t) {
  t === void 0 && (t = false);
  var r = function(n) {
    return e(n, fa(n));
  };
  return t ? Xx(r) : r;
};
var Jf = function() {
  return xr && window.onpointerdown === null;
}, Qf = function() {
  return xr && window.ontouchstart === null;
}, em = function() {
  return xr && window.onmousedown === null;
};
var Zx = { pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointercancel: "mousecancel", pointerover: "mouseover", pointerout: "mouseout", pointerenter: "mouseenter", pointerleave: "mouseleave" }, Jx = { pointerdown: "touchstart", pointermove: "touchmove", pointerup: "touchend", pointercancel: "touchcancel" };
function tm(e) {
  return Jf() ? e : Qf() ? Jx[e] : em() ? Zx[e] : e;
}
function ar(e, t, r, n) {
  return Ot(e, tm(t), Vl(r, t === "pointerdown"), n);
}
function $r(e, t, r, n) {
  return wr(e, tm(t), r && Vl(r, t === "pointerdown"), n);
}
function rm(e) {
  var t = null;
  return function() {
    var r = function() {
      t = null;
    };
    return t === null ? (t = e, r) : false;
  };
}
var nm = rm("dragHorizontal"), om = rm("dragVertical");
function kl(e) {
  var t = false;
  if (e === "y")
    t = om();
  else if (e === "x")
    t = nm();
  else {
    var r = nm(), n = om();
    r && n ? t = function() {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function da() {
  var e = kl(true);
  return e ? (e(), false) : true;
}
function im(e, t, r) {
  return function(n, o) {
    var i;
    !ca(n) || !e.isHoverEventsEnabled || da() || (r == null || r(n, o), (i = e.animationState) === null || i === void 0 || i.setActive(Te.Hover, t));
  };
}
function am(e) {
  var t = e.onHoverStart, r = e.onHoverEnd, n = e.whileHover, o = e.visualElement;
  $r(o, "pointerenter", t || n ? im(o, true, t) : void 0), $r(o, "pointerleave", r || n ? im(o, false, r) : void 0);
}
var _l = function(e, t) {
  return t ? e === t ? true : _l(e, t.parentElement) : false;
};
function jn(e) {
  return react.exports.useEffect(function() {
    return function() {
      return e();
    };
  }, []);
}
var Rr = function(e, t, r) {
  return Math.min(Math.max(r, e), t);
};
var jl = 1e-3, eS = 0.01, sm = 10, tS = 0.05, rS = 1;
function lm(e) {
  var t = e.duration, r = t === void 0 ? 800 : t, n = e.bounce, o = n === void 0 ? 0.25 : n, i = e.velocity, a = i === void 0 ? 0 : i, s = e.mass, l = s === void 0 ? 1 : s, u, c;
  yr(r <= sm * 1e3, "Spring duration must be 10 seconds or less");
  var f = 1 - o;
  f = Rr(tS, rS, f), r = Rr(eS, sm, r / 1e3), f < 1 ? (u = function(h) {
    var v = h * f, y = v * r, P = v - a, C = ha(h, f), b = Math.exp(-y);
    return jl - P / C * b;
  }, c = function(h) {
    var v = h * f, y = v * r, P = y * a + a, C = Math.pow(f, 2) * Math.pow(h, 2) * r, b = Math.exp(-y), T = ha(Math.pow(h, 2), f), F = -u(h) + jl > 0 ? -1 : 1;
    return F * ((P - C) * b) / T;
  }) : (u = function(h) {
    var v = Math.exp(-h * r), y = (h - a) * r + 1;
    return -jl + v * y;
  }, c = function(h) {
    var v = Math.exp(-h * r), y = (a - h) * (r * r);
    return v * y;
  });
  var p = 5 / r, m = nS(u, c, p);
  if (isNaN(m))
    return { stiffness: 100, damping: 10 };
  var d = Math.pow(m, 2) * l;
  return { stiffness: d, damping: f * 2 * Math.sqrt(l * d) };
}
var oS = 12;
function nS(e, t, r) {
  for (var n = r, o = 1; o < oS; o++)
    n = n - e(n) / t(n);
  return n;
}
function ha(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var iS = ["duration", "bounce"], aS = ["stiffness", "damping", "mass"];
function um(e, t) {
  return t.some(function(r) {
    return e[r] !== void 0;
  });
}
function sS(e) {
  var t = w({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e);
  if (!um(e, aS) && um(e, iS)) {
    var r = lm(e);
    t = w(w(w({}, t), r), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = true;
  }
  return t;
}
function ga(e) {
  var t = e.from, r = t === void 0 ? 0 : t, n = e.to, o = n === void 0 ? 1 : n, i = e.restSpeed, a = i === void 0 ? 2 : i, s = e.restDelta, l = he(e, ["from", "to", "restSpeed", "restDelta"]), u = { done: false, value: r }, c = sS(l), f = c.stiffness, p = c.damping, m = c.mass, d = c.velocity, h = c.isResolvedFromDuration, v = cm, y = cm;
  function P() {
    var C = d ? -(d / 1e3) : 0, b = o - r, T = p / (2 * Math.sqrt(f * m)), F = Math.sqrt(f / m) / 1e3;
    if (s != null || (s = Math.abs(o - r) <= 1 ? 0.01 : 0.4), T < 1) {
      var I = ha(F, T);
      v = function(E) {
        var k = Math.exp(-T * F * E);
        return o - k * ((C + T * F * b) / I * Math.sin(I * E) + b * Math.cos(I * E));
      }, y = function(E) {
        var k = Math.exp(-T * F * E);
        return T * F * k * (Math.sin(I * E) * (C + T * F * b) / I + b * Math.cos(I * E)) - k * (Math.cos(I * E) * (C + T * F * b) - I * b * Math.sin(I * E));
      };
    } else if (T === 1)
      v = function(E) {
        return o - Math.exp(-F * E) * (b + (C + F * b) * E);
      };
    else {
      var A = F * Math.sqrt(T * T - 1);
      v = function(E) {
        var k = Math.exp(-T * F * E), W = Math.min(A * E, 300);
        return o - k * ((C + T * F * b) * Math.sinh(W) + A * b * Math.cosh(W)) / A;
      };
    }
  }
  return P(), { next: function(C) {
    var b = v(C);
    if (h)
      u.done = C >= l.duration;
    else {
      var T = y(C) * 1e3, F = Math.abs(T) <= a, I = Math.abs(o - b) <= s;
      u.done = F && I;
    }
    return u.value = u.done ? o : b, u;
  }, flipTarget: function() {
    var C;
    d = -d, C = [o, r], r = C[0], o = C[1], P();
  } };
}
ga.needsInterpolation = function(e, t) {
  return typeof e == "string" || typeof t == "string";
};
var cm = function(e) {
  return 0;
};
var Vt = function(e, t, r) {
  var n = t - e;
  return n === 0 ? 1 : (r - e) / n;
};
var be = function(e, t, r) {
  return -r * e + r * t + e;
};
var lS = function(e, t, r) {
  var n = e * e, o = t * t;
  return Math.sqrt(Math.max(0, r * (o - n) + n));
}, uS = [In, Ut, or], pm = function(e) {
  return uS.find(function(t) {
    return t.test(e);
  });
}, fm = function(e) {
  return "'" + e + "' is not an animatable color. Use the equivalent color code instead.";
}, Xr = function(e, t) {
  var r = pm(e), n = pm(t);
  ve(!!r, fm(e)), ve(!!n, fm(t)), ve(r.transform === n.transform, "Both colors must be hex/RGBA, OR both must be HSLA.");
  var o = r.parse(e), i = n.parse(t), a = w({}, o), s = r === or ? be : lS;
  return function(l) {
    for (var u in a)
      u !== "alpha" && (a[u] = s(o[u], i[u], l));
    return a.alpha = be(o.alpha, i.alpha, l), r.transform(a);
  };
};
var Oo = function(e) {
  return typeof e == "number";
};
var cS = function(e, t) {
  return function(r) {
    return t(e(r));
  };
}, kt = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e.reduce(cS);
};
function mm(e, t) {
  return Oo(e) ? function(r) {
    return be(e, t, r);
  } : Ve.test(e) ? Xr(e, t) : Bl(e, t);
}
var Nl = function(e, t) {
  var r = Oe([], e), n = r.length, o = e.map(function(i, a) {
    return mm(i, t[a]);
  });
  return function(i) {
    for (var a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, dm = function(e, t) {
  var r = w(w({}, e), t), n = {};
  for (var o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = mm(e[o], t[o]));
  return function(i) {
    for (var a in n)
      r[a] = n[a](i);
    return r;
  };
};
function hm(e) {
  for (var t = Ge.parse(e), r = t.length, n = 0, o = 0, i = 0, a = 0; a < r; a++)
    n || typeof t[a] == "number" ? n++ : t[a].hue !== void 0 ? i++ : o++;
  return { parsed: t, numNumbers: n, numRGB: o, numHSL: i };
}
var Bl = function(e, t) {
  var r = Ge.createTransformer(t), n = hm(e), o = hm(t);
  return ve(n.numHSL === o.numHSL && n.numRGB === o.numRGB && n.numNumbers >= o.numNumbers, "Complex values '" + e + "' and '" + t + "' too different to mix. Ensure all colors are of the same type."), kt(Nl(n.parsed, o.parsed), r);
};
var pS = function(e, t) {
  return function(r) {
    return be(e, t, r);
  };
};
function fS(e) {
  if (typeof e == "number")
    return pS;
  if (typeof e == "string")
    return Ve.test(e) ? Xr : Bl;
  if (Array.isArray(e))
    return Nl;
  if (typeof e == "object")
    return dm;
}
function mS(e, t, r) {
  for (var n = [], o = r || fS(e[0]), i = e.length - 1, a = 0; a < i; a++) {
    var s = o(e[a], e[a + 1]);
    if (t) {
      var l = Array.isArray(t) ? t[a] : t;
      s = kt(l, s);
    }
    n.push(s);
  }
  return n;
}
function dS(e, t) {
  var r = e[0], n = e[1], o = t[0];
  return function(i) {
    return o(Vt(r, n, i));
  };
}
function hS(e, t) {
  var r = e.length, n = r - 1;
  return function(o) {
    var i = 0, a = false;
    if (o <= e[0] ? a = true : o >= e[n] && (i = n - 1, a = true), !a) {
      for (var s = 1; s < r && !(e[s] > o || s === n); s++)
        ;
      i = s - 1;
    }
    var l = Vt(e[i], e[i + 1], o);
    return t[i](l);
  };
}
function Yr(e, t, r) {
  var n = r === void 0 ? {} : r, o = n.clamp, i = o === void 0 ? true : o, a = n.ease, s = n.mixer, l = e.length;
  ve(l === t.length, "Both input and output ranges must be the same length"), ve(!a || !Array.isArray(a) || a.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  var u = mS(t, a, s), c = l === 2 ? dS(e, u) : hS(e, u);
  return i ? function(f) {
    return c(Rr(e[0], e[l - 1], f));
  } : c;
}
var Vo = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, va = function(e) {
  return function(t) {
    return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
  };
}, gm = function(e) {
  return function(t) {
    return Math.pow(t, e);
  };
}, Hl = function(e) {
  return function(t) {
    return t * t * ((e + 1) * t - e);
  };
}, vm = function(e) {
  var t = Hl(e);
  return function(r) {
    return (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
  };
};
var ym = 1.525, gS = 4 / 11, vS = 8 / 11, yS = 9 / 10, Kr = function(e) {
  return e;
}, ko = gm(2), zl = Vo(ko), _o = va(ko), ya = function(e) {
  return 1 - Math.sin(Math.acos(e));
}, Bn = Vo(ya), Wl = va(Bn), jo = Hl(ym), Ul = Vo(jo), Gl = va(jo), $l = vm(ym), bS = 4356 / 361, xS = 35442 / 1805, SS = 16061 / 1805, Nn = function(e) {
  if (e === 1 || e === 0)
    return e;
  var t = e * e;
  return e < gS ? 7.5625 * t : e < vS ? 9.075 * t - 9.9 * e + 3.4 : e < yS ? bS * t - xS * e + SS : 10.8 * e * e - 20.52 * e + 10.72;
}, Xl = Vo(Nn), Yl = function(e) {
  return e < 0.5 ? 0.5 * (1 - Nn(1 - e * 2)) : 0.5 * Nn(e * 2 - 1) + 0.5;
};
function CS(e, t) {
  return e.map(function() {
    return t || _o;
  }).splice(0, e.length - 1);
}
function PS(e) {
  var t = e.length;
  return e.map(function(r, n) {
    return n !== 0 ? n / (t - 1) : 0;
  });
}
function TS(e, t) {
  return e.map(function(r) {
    return r * t;
  });
}
function Bo(e) {
  var t = e.from, r = t === void 0 ? 0 : t, n = e.to, o = n === void 0 ? 1 : n, i = e.ease, a = e.offset, s = e.duration, l = s === void 0 ? 300 : s, u = { done: false, value: r }, c = Array.isArray(o) ? o : [r, o], f = TS(a && a.length === c.length ? a : PS(c), l);
  function p() {
    return Yr(f, c, { ease: Array.isArray(i) ? i : CS(c, i) });
  }
  var m = p();
  return { next: function(d) {
    return u.value = m(d), u.done = d >= l, u;
  }, flipTarget: function() {
    c.reverse(), m = p();
  } };
}
function bm(e) {
  var t = e.velocity, r = t === void 0 ? 0 : t, n = e.from, o = n === void 0 ? 0 : n, i = e.power, a = i === void 0 ? 0.8 : i, s = e.timeConstant, l = s === void 0 ? 350 : s, u = e.restDelta, c = u === void 0 ? 0.5 : u, f = e.modifyTarget, p = { done: false, value: o }, m = a * r, d = o + m, h = f === void 0 ? d : f(d);
  return h !== d && (m = h - o), { next: function(v) {
    var y = -m * Math.exp(-v / l);
    return p.done = !(y > c || y < -c), p.value = p.done ? h : h + y, p;
  }, flipTarget: function() {
  } };
}
var xm = { keyframes: Bo, spring: ga, decay: bm };
function Sm(e) {
  if (Array.isArray(e.to))
    return Bo;
  if (xm[e.type])
    return xm[e.type];
  var t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Bo : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? ga : Bo;
}
var Kl = 1 / 60 * 1e3, wS = typeof performance != "undefined" ? function() {
  return performance.now();
} : function() {
  return Date.now();
}, ql = typeof window != "undefined" ? function(e) {
  return window.requestAnimationFrame(e);
} : function(e) {
  return setTimeout(function() {
    return e(wS());
  }, Kl);
};
function Cm(e) {
  var t = [], r = [], n = 0, o = false, i = new WeakSet(), a = { schedule: function(s, l, u) {
    l === void 0 && (l = false), u === void 0 && (u = false);
    var c = u && o, f = c ? t : r;
    return l && i.add(s), f.indexOf(s) === -1 && (f.push(s), c && o && (n = t.length)), s;
  }, cancel: function(s) {
    var l = r.indexOf(s);
    l !== -1 && r.splice(l, 1), i.delete(s);
  }, process: function(s) {
    var l;
    if (o = true, l = [r, t], t = l[0], r = l[1], r.length = 0, n = t.length, n)
      for (var u = 0; u < n; u++) {
        var c = t[u];
        c(s), i.has(c) && (a.schedule(c), e());
      }
    o = false;
  } };
  return a;
}
var RS = 40, Zl = true, No = false, Jl = false, Hn = { delta: 0, timestamp: 0 }, Ho = ["read", "update", "preRender", "render", "postRender"], ba = Ho.reduce(function(e, t) {
  return e[t] = Cm(function() {
    return No = true;
  }), e;
}, {}), ES = Ho.reduce(function(e, t) {
  var r = ba[t];
  return e[t] = function(n, o, i) {
    return o === void 0 && (o = false), i === void 0 && (i = false), No || FS(), r.schedule(n, o, i);
  }, e;
}, {}), Fr = Ho.reduce(function(e, t) {
  return e[t] = ba[t].cancel, e;
}, {}), Ql = Ho.reduce(function(e, t) {
  return e[t] = function() {
    return ba[t].process(Hn);
  }, e;
}, {}), MS = function(e) {
  return ba[e].process(Hn);
}, Pm = function(e) {
  No = false, Hn.delta = Zl ? Kl : Math.max(Math.min(e - Hn.timestamp, RS), 1), Hn.timestamp = e, Jl = true, Ho.forEach(MS), Jl = false, No && (Zl = false, ql(Pm));
}, FS = function() {
  No = true, Zl = true, Jl || ql(Pm);
}, _t = function() {
  return Hn;
}, Le = ES;
function eu(e, t, r) {
  return r === void 0 && (r = 0), e - t - r;
}
function Tm(e, t, r, n) {
  return r === void 0 && (r = 0), n === void 0 && (n = true), n ? eu(t + -e, t, r) : t - (e - t) + r;
}
function wm(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
var IS = function(e) {
  var t = function(r) {
    var n = r.delta;
    return e(n);
  };
  return { start: function() {
    return Le.update(t, true);
  }, stop: function() {
    return Fr.update(t);
  } };
};
function qr(e) {
  var t, r, n = e.from, o = e.autoplay, i = o === void 0 ? true : o, a = e.driver, s = a === void 0 ? IS : a, l = e.elapsed, u = l === void 0 ? 0 : l, c = e.repeat, f = c === void 0 ? 0 : c, p = e.repeatType, m = p === void 0 ? "loop" : p, d = e.repeatDelay, h = d === void 0 ? 0 : d, v = e.onPlay, y = e.onStop, P = e.onComplete, C = e.onRepeat, b = e.onUpdate, T = he(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]), F = T.to, I, A = 0, E = T.duration, k, W = false, K = true, U, N = Sm(T);
  ((r = (t = N).needsInterpolation) === null || r === void 0 ? void 0 : r.call(t, n, F)) && (U = Yr([0, 100], [n, F], { clamp: false }), n = 0, F = 100);
  var ee = N(w(w({}, T), { from: n, to: F }));
  function H() {
    A++, m === "reverse" ? (K = A % 2 == 0, u = Tm(u, E, h, K)) : (u = eu(u, E, h), m === "mirror" && ee.flipTarget()), W = false, C && C();
  }
  function X() {
    I.stop(), P && P();
  }
  function ae(S) {
    if (K || (S = -S), u += S, !W) {
      var x = ee.next(Math.max(0, u));
      k = x.value, U && (k = U(k)), W = K ? x.done : u <= 0;
    }
    b == null || b(k), W && (A === 0 && (E != null || (E = u)), A < f ? wm(u, E, h, K) && H() : X());
  }
  function G() {
    v == null || v(), I = s(ae), I.start();
  }
  return i && G(), { stop: function() {
    y == null || y(), I.stop();
  } };
}
function zo(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function Wo(e) {
  var t = e.from, r = t === void 0 ? 0 : t, n = e.velocity, o = n === void 0 ? 0 : n, i = e.min, a = e.max, s = e.power, l = s === void 0 ? 0.8 : s, u = e.timeConstant, c = u === void 0 ? 750 : u, f = e.bounceStiffness, p = f === void 0 ? 500 : f, m = e.bounceDamping, d = m === void 0 ? 10 : m, h = e.restDelta, v = h === void 0 ? 1 : h, y = e.modifyTarget, P = e.driver, C = e.onUpdate, b = e.onComplete, T;
  function F(H) {
    return i !== void 0 && H < i || a !== void 0 && H > a;
  }
  function I(H) {
    return i === void 0 ? a : a === void 0 || Math.abs(i - H) < Math.abs(a - H) ? i : a;
  }
  function A(H) {
    T == null || T.stop(), T = qr(w(w({}, H), { driver: P, onUpdate: function(X) {
      var ae;
      C == null || C(X), (ae = H.onUpdate) === null || ae === void 0 || ae.call(H, X);
    }, onComplete: b }));
  }
  function E(H) {
    A(w({ type: "spring", stiffness: p, damping: d, restDelta: v }, H));
  }
  if (F(r))
    E({ from: r, velocity: o, to: I(r) });
  else {
    var k = l * o + r;
    typeof y != "undefined" && (k = y(k));
    var W = I(k), K = W === i ? -1 : 1, U, N, ee = function(H) {
      U = N, N = H, o = zo(H - U, _t().delta), (K === 1 && H > W || K === -1 && H < W) && E({ from: H, to: W, velocity: o });
    };
    A({ type: "decay", from: r, velocity: o, timeConstant: c, power: l, restDelta: v, modifyTarget: y, onUpdate: F(k) ? ee : void 0 });
  }
  return { stop: function() {
    return T == null ? void 0 : T.stop();
  } };
}
var Uo = function(e) {
  return e.hasOwnProperty("x") && e.hasOwnProperty("y");
};
var tu = function(e) {
  return Uo(e) && e.hasOwnProperty("z");
};
var xa = function(e, t) {
  return Math.abs(e - t);
};
function Go(e, t) {
  if (Oo(e) && Oo(t))
    return xa(e, t);
  if (Uo(e) && Uo(t)) {
    var r = xa(e.x, t.x), n = xa(e.y, t.y), o = tu(e) && tu(t) ? xa(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2));
  }
}
var ru = function(e, t, r) {
  var n = t - e;
  return ((r - e) % n + n) % n + e;
};
var Rm = function(e, t) {
  return 1 - 3 * t + 3 * e;
}, Fm = function(e, t) {
  return 3 * t - 6 * e;
}, Em = function(e) {
  return 3 * e;
}, Sa = function(e, t, r) {
  return ((Rm(t, r) * e + Fm(t, r)) * e + Em(t)) * e;
}, Mm = function(e, t, r) {
  return 3 * Rm(t, r) * e * e + 2 * Fm(t, r) * e + Em(t);
}, AS = 1e-7, DS = 10;
function LS(e, t, r, n, o) {
  var i, a, s = 0;
  do
    a = t + (r - t) / 2, i = Sa(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > AS && ++s < DS);
  return a;
}
var OS = 8, VS = 1e-3;
function kS(e, t, r, n) {
  for (var o = 0; o < OS; ++o) {
    var i = Mm(t, r, n);
    if (i === 0)
      return t;
    var a = Sa(t, r, n) - e;
    t -= a / i;
  }
  return t;
}
var Ca = 11, Pa = 1 / (Ca - 1);
function nu(e, t, r, n) {
  if (e === t && r === n)
    return Kr;
  for (var o = new Float32Array(Ca), i = 0; i < Ca; ++i)
    o[i] = Sa(i * Pa, e, r);
  function a(s) {
    for (var l = 0, u = 1, c = Ca - 1; u !== c && o[u] <= s; ++u)
      l += Pa;
    --u;
    var f = (s - o[u]) / (o[u + 1] - o[u]), p = l + f * Pa, m = Mm(p, e, r);
    return m >= VS ? kS(s, p, e, r) : m === 0 ? p : LS(s, l, l + Pa, e, r);
  }
  return function(s) {
    return s === 0 || s === 1 ? s : Sa(a(s), t, n);
  };
}
function Am(e) {
  var t = e.onTap, r = e.onTapStart, n = e.onTapCancel, o = e.whileTap, i = e.visualElement, a = t || r || n || o, s = react.exports.useRef(false), l = react.exports.useRef(null);
  function u() {
    var d;
    (d = l.current) === null || d === void 0 || d.call(l), l.current = null;
  }
  function c() {
    var d;
    return u(), s.current = false, (d = i.animationState) === null || d === void 0 || d.setActive(Te.Tap, false), !da();
  }
  function f(d, h) {
    !c() || (_l(i.getInstance(), d.target) ? t == null || t(d, h) : n == null || n(d, h));
  }
  function p(d, h) {
    !c() || n == null || n(d, h);
  }
  function m(d, h) {
    var v;
    u(), !s.current && (s.current = true, l.current = kt(ar(window, "pointerup", f), ar(window, "pointercancel", p)), r == null || r(d, h), (v = i.animationState) === null || v === void 0 || v.setActive(Te.Tap, true));
  }
  $r(i, "pointerdown", a ? m : void 0), jn(u);
}
var Gt = function(e) {
  return function(t) {
    return e(t), null;
  };
};
var Ta = { tap: Gt(Am), focus: Gt(Zf), hover: Gt(am) };
function ou(e, t) {
  if (!Array.isArray(t))
    return false;
  var r = t.length;
  if (r !== e.length)
    return false;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return false;
  return true;
}
var zn = function(e) {
  return e * 1e3;
};
var Dm = { linear: Kr, easeIn: ko, easeInOut: _o, easeOut: zl, circIn: ya, circInOut: Wl, circOut: Bn, backIn: jo, backInOut: Gl, backOut: Ul, anticipate: $l, bounceIn: Xl, bounceInOut: Yl, bounceOut: Nn }, iu = function(e) {
  if (Array.isArray(e)) {
    ve(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = Q(e, 4), r = t[0], n = t[1], o = t[2], i = t[3];
    return nu(r, n, o, i);
  } else if (typeof e == "string")
    return ve(Dm[e] !== void 0, "Invalid easing type '" + e + "'"), Dm[e];
  return e;
}, Lm = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
};
var au = function(e, t) {
  return e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Ge.test(t) && !t.startsWith("url("));
};
var Zr = function() {
  return { type: "spring", stiffness: 500, damping: 25, restDelta: 0.5, restSpeed: 10 };
}, wa = function(e) {
  return { type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restDelta: 0.01, restSpeed: 10 };
}, su = function() {
  return { type: "keyframes", ease: "linear", duration: 0.3 };
}, _S = function(e) {
  return { type: "keyframes", duration: 0.8, values: e };
}, Om = { x: Zr, y: Zr, z: Zr, rotate: Zr, rotateX: Zr, rotateY: Zr, rotateZ: Zr, scaleX: wa, scaleY: wa, scale: wa, opacity: su, backgroundColor: su, color: su, default: wa }, Vm = function(e, t) {
  var r;
  return ir(t) ? r = _S : r = Om[e] || Om.default, w({ to: t }, r(t));
};
var jS = w(w({}, na), { color: Ve, backgroundColor: Ve, outlineColor: Ve, fill: Ve, stroke: Ve, borderColor: Ve, borderTopColor: Ve, borderRightColor: Ve, borderBottomColor: Ve, borderLeftColor: Ve, filter: An, WebkitFilter: An }), Wn = function(e) {
  return jS[e];
};
function $o(e, t) {
  var r, n = Wn(e);
  return n !== An && (n = Ge), (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
function BS(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = he(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var km = false;
function NS(e) {
  var t = e.ease, r = e.times, n = e.yoyo, o = e.flip, i = e.loop, a = he(e, ["ease", "times", "yoyo", "flip", "loop"]), s = w({}, a);
  return r && (s.offset = r), a.duration && (s.duration = zn(a.duration)), a.repeatDelay && (s.repeatDelay = zn(a.repeatDelay)), t && (s.ease = Lm(t) ? t.map(iu) : iu(t)), a.type === "tween" && (s.type = "keyframes"), (n || i || o) && (yr(!km, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), km = true, n ? s.repeatType = "reverse" : i ? s.repeatType = "loop" : o && (s.repeatType = "mirror"), s.repeat = i || n || o || a.repeat), a.type !== "spring" && (s.type = "keyframes"), s;
}
function HS(e, t) {
  var r, n = Un(e, t) || {};
  return (r = n.delay) !== null && r !== void 0 ? r : 0;
}
function zS(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = Oe([], Q(e.to)), e.to[0] = e.from), e;
}
function WS(e, t, r) {
  var n;
  return Array.isArray(t.to) && ((n = e.duration) !== null && n !== void 0 || (e.duration = 0.8)), zS(t), BS(e) || (e = w(w({}, e), Vm(r, t.to))), w(w({}, t), NS(e));
}
function US(e, t, r, n, o) {
  var i, a = Un(n, e), s = (i = a.from) !== null && i !== void 0 ? i : t.get(), l = au(e, r);
  s === "none" && l && typeof r == "string" ? s = $o(e, r) : _m(s) && typeof r == "string" ? s = jm(r) : !Array.isArray(r) && _m(r) && typeof s == "string" && (r = jm(s));
  var u = au(e, s);
  yr(u === l, "You are trying to animate " + e + ' from "' + s + '" to "' + r + '". ' + s + " is not an animatable value - to enable this animation set " + s + " to a value animatable to " + r + " via the `style` property.");
  function c() {
    var p = { from: s, to: r, velocity: t.getVelocity(), onComplete: o, onUpdate: function(m) {
      return t.set(m);
    } };
    return a.type === "inertia" || a.type === "decay" ? Wo(w(w({}, p), a)) : qr(w(w({}, WS(a, p, e)), { onUpdate: function(m) {
      var d;
      p.onUpdate(m), (d = a.onUpdate) === null || d === void 0 || d.call(a, m);
    }, onComplete: function() {
      var m;
      p.onComplete(), (m = a.onComplete) === null || m === void 0 || m.call(a);
    } }));
  }
  function f() {
    var p;
    return t.set(r), o(), (p = a == null ? void 0 : a.onComplete) === null || p === void 0 || p.call(a), { stop: function() {
    } };
  }
  return !u || !l || a.type === false ? f : c;
}
function _m(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function jm(e) {
  return typeof e == "number" ? 0 : $o("", e);
}
function Un(e, t) {
  return e[t] || e.default || e;
}
function sr(e, t, r, n) {
  return n === void 0 && (n = {}), t.start(function(o) {
    var i, a, s = US(e, t, r, n, o), l = HS(n, e), u = function() {
      return a = s();
    };
    return l ? i = setTimeout(u, zn(l)) : u(), function() {
      clearTimeout(i), a == null || a.stop();
    };
  });
}
var Bm = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
};
function Ra(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Fa(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var Gn = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var r = this;
    return Ra(this.subscriptions, t), function() {
      return Fa(r.subscriptions, t);
    };
  }, e.prototype.notify = function(t, r, n) {
    var o = this.subscriptions.length;
    if (!!o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (var i = 0; i < o; i++) {
          var a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }, e.prototype.getSize = function() {
    return this.subscriptions.length;
  }, e.prototype.clear = function() {
    this.subscriptions.length = 0;
  }, e;
}();
var GS = function(e) {
  return !isNaN(parseFloat(e));
}, Jr = function() {
  function e(t) {
    var r = this;
    this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Gn(), this.velocityUpdateSubscribers = new Gn(), this.renderSubscribers = new Gn(), this.canTrackVelocity = false, this.updateAndNotify = function(n, o) {
      o === void 0 && (o = true), r.prev = r.current, r.current = n;
      var i = _t(), a = i.delta, s = i.timestamp;
      r.lastUpdated !== s && (r.timeDelta = a, r.lastUpdated = s, Le.postRender(r.scheduleVelocityCheck)), r.prev !== r.current && r.updateSubscribers.notify(r.current), r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()), o && r.renderSubscribers.notify(r.current);
    }, this.scheduleVelocityCheck = function() {
      return Le.postRender(r.velocityCheck);
    }, this.velocityCheck = function(n) {
      var o = n.timestamp;
      o !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()));
    }, this.hasAnimated = false, this.prev = this.current = t, this.canTrackVelocity = GS(this.current);
  }
  return e.prototype.onChange = function(t) {
    return this.updateSubscribers.add(t);
  }, e.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  }, e.prototype.onRenderRequest = function(t) {
    return t(this.get()), this.renderSubscribers.add(t);
  }, e.prototype.attach = function(t) {
    this.passiveEffect = t;
  }, e.prototype.set = function(t, r) {
    r === void 0 && (r = true), !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }, e.prototype.get = function() {
    return this.current;
  }, e.prototype.getPrevious = function() {
    return this.prev;
  }, e.prototype.getVelocity = function() {
    return this.canTrackVelocity ? zo(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }, e.prototype.start = function(t) {
    var r = this;
    return this.stop(), new Promise(function(n) {
      r.hasAnimated = true, r.stopAnimation = t(n);
    }).then(function() {
      return r.clearAnimation();
    });
  }, e.prototype.stop = function() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation();
  }, e.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  }, e.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  }, e.prototype.destroy = function() {
    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
  }, e;
}();
function Ee(e) {
  return new Jr(e);
}
var Ea = function(e) {
  return function(t) {
    return t.test(e);
  };
};
var Nm = { test: function(e) {
  return e === "auto";
}, parse: function(e) {
  return e;
} };
var lu = [xt, Z, nr, Lt, El, Fl, Nm], Xo = function(e) {
  return lu.find(Ea(e));
};
var $S = Oe(Oe([], Q(lu)), [Ve, Ge]), Hm = function(e) {
  return $S.find(Ea(e));
};
function XS(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ee(r));
}
function Ma(e, t) {
  var r = Wr(e, t), n = r ? e.makeTargetAnimatable(r, false) : {}, o = n.transitionEnd, i = o === void 0 ? {} : o;
  n.transition;
  var a = he(n, ["transitionEnd", "transition"]);
  a = w(w({}, a), i);
  for (var s in a) {
    var l = $f(a[s]);
    XS(e, s, l);
  }
}
function uu(e, t) {
  var r = Oe([], Q(t)).reverse();
  r.forEach(function(n) {
    var o, i = e.getVariant(n);
    i && Ma(e, i), (o = e.variantChildren) === null || o === void 0 || o.forEach(function(a) {
      uu(a, t);
    });
  });
}
function zm(e, t) {
  if (Array.isArray(t))
    return uu(e, t);
  if (typeof t == "string")
    return uu(e, [t]);
  Ma(e, t);
}
function Ia(e, t, r) {
  var n, o, i, a, s = Object.keys(t).filter(function(m) {
    return !e.hasValue(m);
  }), l = s.length;
  if (!!l)
    for (var u = 0; u < l; u++) {
      var c = s[u], f = t[c], p = null;
      Array.isArray(f) && (p = f[0]), p === null && (p = (o = (n = r[c]) !== null && n !== void 0 ? n : e.readValue(c)) !== null && o !== void 0 ? o : t[c]), p != null && (typeof p == "string" && Bm(p) ? p = parseFloat(p) : !Hm(p) && Ge.test(f) && (p = $o(c, f)), e.addValue(c, Ee(p)), (i = (a = r)[c]) !== null && i !== void 0 || (a[c] = p), e.setBaseTarget(c, p));
    }
}
function YS(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function Aa(e, t, r) {
  var n, o, i = {};
  for (var a in e)
    i[a] = (n = YS(a, t)) !== null && n !== void 0 ? n : (o = r.getValue(a)) === null || o === void 0 ? void 0 : o.get();
  return i;
}
function Qr(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart();
  var n;
  if (Array.isArray(t)) {
    var o = t.map(function(a) {
      return cu(e, a, r);
    });
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = cu(e, t, r);
  else {
    var i = typeof t == "function" ? Wr(e, t, r.custom) : t;
    n = Wm(e, i, r);
  }
  return n.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function cu(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var o = Wr(e, t, r.custom), i = (o || {}).transition, a = i === void 0 ? e.getDefaultTransition() || {} : i;
  r.transitionOverride && (a = r.transitionOverride);
  var s = o ? function() {
    return Wm(e, o, r);
  } : function() {
    return Promise.resolve();
  }, l = ((n = e.variantChildren) === null || n === void 0 ? void 0 : n.size) ? function(m) {
    m === void 0 && (m = 0);
    var d = a.delayChildren, h = d === void 0 ? 0 : d, v = a.staggerChildren, y = a.staggerDirection;
    return KS(e, t, h + m, v, y, r);
  } : function() {
    return Promise.resolve();
  }, u = a.when;
  if (u) {
    var c = Q(u === "beforeChildren" ? [s, l] : [l, s], 2), f = c[0], p = c[1];
    return f().then(p);
  } else
    return Promise.all([s(), l(r.delay)]);
}
function Wm(e, t, r) {
  var n, o = r === void 0 ? {} : r, i = o.delay, a = i === void 0 ? 0 : i, s = o.transitionOverride, l = o.type, u = e.makeTargetAnimatable(t), c = u.transition, f = c === void 0 ? e.getDefaultTransition() : c, p = u.transitionEnd, m = he(u, ["transition", "transitionEnd"]);
  s && (f = s);
  var d = [], h = l && ((n = e.animationState) === null || n === void 0 ? void 0 : n.getState()[l]);
  for (var v in m) {
    var y = e.getValue(v), P = m[v];
    if (!(!y || P === void 0 || h && qS(h, v))) {
      var C = sr(v, y, P, w({ delay: a }, f));
      d.push(C);
    }
  }
  return Promise.all(d).then(function() {
    p && Ma(e, p);
  });
}
function KS(e, t, r, n, o, i) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), o === void 0 && (o = 1);
  var a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? function(u) {
    return u === void 0 && (u = 0), u * n;
  } : function(u) {
    return u === void 0 && (u = 0), s - u * n;
  };
  return Array.from(e.variantChildren).sort(ZS).forEach(function(u, c) {
    a.push(cu(u, t, w(w({}, i), { delay: r + l(c) })).then(function() {
      return u.notifyAnimationComplete(t);
    }));
  }), Promise.all(a);
}
function Um(e) {
  e.forEachValue(function(t) {
    return t.stop();
  });
}
function ZS(e, t) {
  return e.sortNodePosition(t);
}
function qS(e, t) {
  var r = e.protectedKeys, n = e.needsAnimating, o = r.hasOwnProperty(t) && n[t] !== true;
  return n[t] = false, o;
}
var Da = [Te.Animate, Te.Hover, Te.Tap, Te.Drag, Te.Focus, Te.Exit], JS = Oe([], Q(Da)).reverse(), QS = Da.length;
function eC(e) {
  return function(t) {
    return Promise.all(t.map(function(r) {
      var n = r.animation, o = r.options;
      return Qr(e, n, o);
    }));
  };
}
function Gm(e) {
  var t = eC(e), r = rC(), n = {}, o = true, i = function(c, f) {
    var p = Wr(e, f);
    if (p) {
      p.transition;
      var m = p.transitionEnd, d = he(p, ["transition", "transitionEnd"]);
      c = w(w(w({}, c), d), m);
    }
    return c;
  };
  function a(c) {
    return n[c] !== void 0;
  }
  function s(c) {
    t = c(e);
  }
  function l(c, f) {
    for (var p, m = e.getProps(), d = e.getVariantContext(true) || {}, h = [], v = new Set(), y = {}, P = Infinity, C = function(I) {
      var A = JS[I], E = r[A], k = (p = m[A]) !== null && p !== void 0 ? p : d[A], W = mt(k), K = A === f ? E.isActive : null;
      K === false && (P = I);
      var U = k === d[A] && k !== m[A] && W;
      if (U && o && e.manuallyAnimateOnMount && (U = false), E.protectedKeys = w({}, y), !E.isActive && K === null || !k && !E.prevProp || kn(k) || typeof k == "boolean")
        return "continue";
      var N = tC(E.prevProp, k) || A === f && E.isActive && !U && W || I > P && W, ee = Array.isArray(k) ? k : [k], H = ee.reduce(i, {});
      K === false && (H = {});
      var X = E.prevResolvedValues, ae = X === void 0 ? {} : X, G = w(w({}, ae), H), S = function(O) {
        N = true, v.delete(O), E.needsAnimating[O] = true;
      };
      for (var x in G) {
        var g = H[x], R = ae[x];
        y.hasOwnProperty(x) || (g !== R ? ir(g) && ir(R) ? ou(g, R) ? E.protectedKeys[x] = true : S(x) : g !== void 0 ? S(x) : v.add(x) : g !== void 0 && v.has(x) ? S(x) : E.protectedKeys[x] = true);
      }
      E.prevProp = k, E.prevResolvedValues = H, E.isActive && (y = w(w({}, y), H)), o && e.blockInitialAnimation && (N = false), N && !U && h.push.apply(h, Oe([], Q(ee.map(function(O) {
        return { animation: O, options: w({ type: A }, c) };
      }))));
    }, b = 0; b < QS; b++)
      C(b);
    if (n = w({}, y), v.size) {
      var T = {};
      v.forEach(function(I) {
        var A = e.getBaseTarget(I);
        A !== void 0 && (T[I] = A);
      }), h.push({ animation: T });
    }
    var F = Boolean(h.length);
    return o && m.initial === false && !e.manuallyAnimateOnMount && (F = false), o = false, F ? t(h) : Promise.resolve();
  }
  function u(c, f, p) {
    var m;
    return r[c].isActive === f ? Promise.resolve() : ((m = e.variantChildren) === null || m === void 0 || m.forEach(function(d) {
      var h;
      return (h = d.animationState) === null || h === void 0 ? void 0 : h.setActive(c, f);
    }), r[c].isActive = f, l(p, c));
  }
  return { isAnimated: a, animateChanges: l, setActive: u, setAnimateFunction: s, getState: function() {
    return r;
  } };
}
function tC(e, t) {
  return typeof t == "string" ? t !== e : wl(t) ? !ou(t, e) : false;
}
function $n(e) {
  return e === void 0 && (e = false), { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function rC() {
  var e;
  return e = {}, e[Te.Animate] = $n(true), e[Te.Hover] = $n(), e[Te.Tap] = $n(), e[Te.Drag] = $n(), e[Te.Focus] = $n(), e[Te.Exit] = $n(), e;
}
var La = { animation: Gt(function(e) {
  var t = e.visualElement, r = e.animate;
  t.animationState || (t.animationState = Gm(t)), kn(r) && react.exports.useEffect(function() {
    return r.subscribe(t);
  }, [r]);
}), exit: Gt(function(e) {
  var t = e.custom, r = e.visualElement, n = Q(Eo(), 2), o = n[0], i = n[1], a = react.exports.useContext(ft);
  react.exports.useEffect(function() {
    var s, l, u = (s = r.animationState) === null || s === void 0 ? void 0 : s.setActive(Te.Exit, !o, { custom: (l = a == null ? void 0 : a.custom) !== null && l !== void 0 ? l : t });
    !o && (u == null || u.then(i));
  }, [o]);
}) };
var Oa = function() {
  function e(t, r, n) {
    var o = this, i = n === void 0 ? {} : n, a = i.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
        var p = fu(o.lastMoveEventInfo, o.history), m = o.startEvent !== null, d = Go(p.offset, { x: 0, y: 0 }) >= 3;
        if (!(!m && !d)) {
          var h = p.point, v = _t().timestamp;
          o.history.push(w(w({}, h), { timestamp: v }));
          var y = o.handlers, P = y.onStart, C = y.onMove;
          m || (P && P(o.lastMoveEvent, p), o.startEvent = o.lastMoveEvent), C && C(o.lastMoveEvent, p);
        }
      }
    }, this.handlePointerMove = function(p, m) {
      if (o.lastMoveEvent = p, o.lastMoveEventInfo = pu(m, o.transformPagePoint), ca(p) && p.buttons === 0) {
        o.handlePointerUp(p, m);
        return;
      }
      Le.update(o.updatePoint, true);
    }, this.handlePointerUp = function(p, m) {
      o.end();
      var d = o.handlers.onEnd;
      if (!(!d || !o.startEvent)) {
        var h = fu(pu(m, o.transformPagePoint), o.history);
        d && d(p, h);
      }
    }, !(pa(t) && t.touches.length > 1)) {
      this.handlers = r, this.transformPagePoint = a;
      var s = fa(t), l = pu(s, this.transformPagePoint), u = l.point, c = _t().timestamp;
      this.history = [w(w({}, u), { timestamp: c })];
      var f = r.onSessionStart;
      f && f(t, fu(l, this.history)), this.removeListeners = kt(ar(window, "pointermove", this.handlePointerMove), ar(window, "pointerup", this.handlePointerUp), ar(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), Fr.update(this.updatePoint);
  }, e;
}();
function pu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fu(e, t) {
  var r = e.point;
  return { point: r, delta: Xm(r, Ym(t)), offset: Xm(r, oC(t)), velocity: iC(t, 0.1) };
}
function oC(e) {
  return e[0];
}
function Ym(e) {
  return e[e.length - 1];
}
function iC(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var r = e.length - 1, n = null, o = Ym(e); r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > zn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  var i = (o.timestamp - n.timestamp) / 1e3;
  if (i === 0)
    return { x: 0, y: 0 };
  var a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return a.x === Infinity && (a.x = 0), a.y === Infinity && (a.y = 0), a;
}
function Km(e) {
  return e;
}
function Va(e) {
  var t = e.top, r = e.left, n = e.right, o = e.bottom;
  return { x: { min: r, max: n }, y: { min: t, max: o } };
}
function qm(e) {
  var t = e.x, r = e.y;
  return { top: r.min, bottom: r.max, left: t.min, right: t.max };
}
function Zm(e, t) {
  var r = e.top, n = e.left, o = e.bottom, i = e.right;
  t === void 0 && (t = Km);
  var a = t({ x: n, y: r }), s = t({ x: i, y: o });
  return { top: a.y, left: a.x, bottom: s.y, right: s.x };
}
function dt() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function Jm(e) {
  return { x: w({}, e.x), y: w({}, e.y) };
}
var Qm = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function mu() {
  return { x: w({}, Qm), y: w({}, Qm) };
}
function $e(e) {
  return [e("x"), e("y")];
}
function du(e, t, r) {
  var n = t.min, o = t.max;
  return n !== void 0 && e < n ? e = r ? be(n, e, r.min) : Math.max(e, n) : o !== void 0 && e > o && (e = r ? be(o, e, r.max) : Math.min(e, o)), e;
}
function ed(e, t, r, n, o) {
  var i = e - t * r;
  return n ? du(i, n, o) : i;
}
function td(e, t, r) {
  return { min: t !== void 0 ? e.min + t : void 0, max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0 };
}
function rd(e, t) {
  var r = t.top, n = t.left, o = t.bottom, i = t.right;
  return { x: td(e.x, n, i), y: td(e.y, r, o) };
}
function nd(e, t) {
  var r, n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min && (r = Q([o, n], 2), n = r[0], o = r[1]), { min: e.min + n, max: e.min + o };
}
function od(e, t) {
  return { x: nd(e.x, t.x), y: nd(e.y, t.y) };
}
function id(e, t, r) {
  var n = e.max - e.min, o = be(t.min, t.max - n, r);
  return { min: o, max: o + n };
}
function ad(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
var hu = 0.35;
function ld(e) {
  return e === false ? e = 0 : e === true && (e = hu), { x: sd(e, "left", "right"), y: sd(e, "top", "bottom") };
}
function sd(e, t, r) {
  return { min: ud(e, t), max: ud(e, r) };
}
function ud(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
function ka(e, t) {
  var r = e.getBoundingClientRect();
  return Va(Zm(r, t));
}
var aC = function(e) {
  return Rr(0, 1, e);
};
function cd(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), Go(e, t) < r;
}
function Yo(e) {
  return e.max - e.min;
}
function pd(e, t) {
  var r = 0.5, n = Yo(e), o = Yo(t);
  return o > n ? r = Vt(t.min, t.max - n, e.min) : n > o && (r = Vt(e.min, e.max - o, t.min)), aC(r);
}
function fd(e, t, r, n) {
  n === void 0 && (n = 0.5), e.origin = n, e.originPoint = be(t.min, t.max, e.origin), e.scale = Yo(r) / Yo(t), cd(e.scale, 1, 1e-4) && (e.scale = 1), e.translate = be(r.min, r.max, e.origin) - e.originPoint, cd(e.translate) && (e.translate = 0);
}
function _a(e, t, r, n) {
  fd(e.x, t.x, r.x, md(n.originX)), fd(e.y, t.y, r.y, md(n.originY));
}
function md(e) {
  return typeof e == "number" ? e : 0.5;
}
function dd(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Yo(t);
}
function hd(e, t) {
  dd(e.target.x, e.relativeTarget.x, t.target.x), dd(e.target.y, e.relativeTarget.y, t.target.y);
}
var Xn = function(e, t) {
  return e.depth - t.depth;
};
function vd(e, t) {
  ja(e, function() {
    var r = sC(e);
    Ba(r), gd(e);
  }), !t && e.rebaseProjectionTarget(true, e.measureViewportBox(false));
}
function sC(e) {
  var t = [], r = function(n) {
    (n.projection.isEnabled || n.shouldResetTransform()) && t.push(n), n.children.forEach(r);
  };
  return e.children.forEach(r), t.sort(Xn);
}
function ja(e, t) {
  var r = e.parent, n = e.projection.isEnabled, o = n || e.shouldResetTransform();
  o && e.resetTransform(), r ? ja(r, t) : t(), o && e.restoreTransform();
}
function gd(e) {
  if (!e.shouldResetTransform()) {
    var t = e.getLayoutState();
    e.notifyBeforeLayoutMeasure(t.layout), t.isHydrated = true, t.layout = e.measureViewportBox(), t.layoutCorrected = Jm(t.layout), e.notifyLayoutMeasure(t.layout, e.prevViewportBox || t.layout), Le.update(function() {
      return e.rebaseProjectionTarget();
    });
  }
}
function Er(e) {
  e.shouldResetTransform() || (e.prevViewportBox = e.measureViewportBox(false), e.rebaseProjectionTarget(false, e.prevViewportBox));
}
function Ba(e) {
  e.forEach(function(t) {
    return t.resetTransform();
  }), e.forEach(gd);
}
function yd(e, t, r, n) {
  e.min = be(t.min, r.min, n), e.max = be(t.max, r.max, n);
}
function bd(e, t) {
  return { min: t.min - e.min, max: t.max - e.min };
}
function $t(e, t) {
  return { x: bd(e.x, t.x), y: bd(e.y, t.y) };
}
function xd(e, t) {
  var r = e.getLayoutId(), n = t.getLayoutId();
  return r !== n || n === void 0 && e !== t;
}
function Na(e) {
  var t = e.getProps(), r = t.drag, n = t._dragX;
  return r && !n;
}
function Sd(e, t) {
  e.min = t.min, e.max = t.max;
}
function Cd(e, t) {
  Sd(e.x, t.x), Sd(e.y, t.y);
}
function Ha(e, t, r) {
  var n = e - r, o = t * n;
  return r + o;
}
function Pd(e, t, r, n, o) {
  return o !== void 0 && (e = Ha(e, o, n)), Ha(e, r, n) + t;
}
function gu(e, t, r, n, o) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), e.min = Pd(e.min, t, r, n, o), e.max = Pd(e.max, t, r, n, o);
}
function lC(e, t) {
  var r = t.x, n = t.y;
  gu(e.x, r.translate, r.scale, r.originPoint), gu(e.y, n.translate, n.scale, n.originPoint);
}
function Td(e, t, r, n) {
  var o = Q(n, 3), i = o[0], a = o[1], s = o[2];
  e.min = t.min, e.max = t.max;
  var l = r[s] !== void 0 ? r[s] : 0.5, u = be(t.min, t.max, l);
  gu(e, r[i], r[a], u, r.scale);
}
var wd = ["x", "scaleX", "originX"], Rd = ["y", "scaleY", "originY"];
function za(e, t, r) {
  Td(e.x, t.x, r, wd), Td(e.y, t.y, r, Rd);
}
function Fd(e, t, r, n, o) {
  return e -= t, e = Ha(e, 1 / r, n), o !== void 0 && (e = Ha(e, 1 / o, n)), e;
}
function uC(e, t, r, n, o) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5);
  var i = be(e.min, e.max, n) - t;
  e.min = Fd(e.min, t, r, i, o), e.max = Fd(e.max, t, r, i, o);
}
function Ed(e, t, r) {
  var n = Q(r, 3), o = n[0], i = n[1], a = n[2];
  uC(e, t[o], t[i], t[a], t.scale);
}
function Wa(e, t) {
  Ed(e.x, t, wd), Ed(e.y, t, Rd);
}
function Md(e, t, r) {
  var n = r.length;
  if (!!n) {
    t.x = t.y = 1;
    for (var o, i, a = 0; a < n; a++)
      o = r[a], i = o.getLayoutState().delta, t.x *= i.x.scale, t.y *= i.y.scale, lC(e, i), Na(o) && za(e, e, o.getLatestValues());
  }
}
function Id(e, t) {
  t === void 0 && (t = true);
  var r = e.getProjectionParent();
  if (!r)
    return false;
  var n;
  return t ? (n = $t(r.projection.target, e.projection.target), Wa(n, r.getLatestValues())) : n = $t(r.getLayoutState().layout, e.getLayoutState().layout), $e(function(o) {
    return e.setProjectionTargetAxis(o, n[o].min, n[o].max, true);
  }), true;
}
var vu = new WeakMap(), Ad, Dd = function() {
  function e(t) {
    var r = t.visualElement;
    this.isDragging = false, this.currentDirection = null, this.constraints = false, this.elastic = dt(), this.props = {}, this.hasMutatedConstraints = false, this.cursorProgress = { x: 0.5, y: 0.5 }, this.originPoint = {}, this.openGlobalLock = null, this.panSession = null, this.visualElement = r, this.visualElement.enableLayoutProjection(), vu.set(r, this);
  }
  return e.prototype.start = function(t, r) {
    var n = this, o = r === void 0 ? {} : r, i = o.snapToCursor, a = i === void 0 ? false : i, s = o.cursorProgress, l = function(m) {
      n.stopMotion(), n.updateLayoutMeasurements(), a && n.snapToCursor(t), n.isLayoutDrag() && n.visualElement.lockProjectionTarget();
      var d = ma(m).point;
      $e(function(h) {
        var v = n.visualElement.projection.target[h], y = v.min, P = v.max;
        n.cursorProgress[h] = s ? s[h] : Vt(y, P, d[h]);
        var C = n.getAxisMotionValue(h);
        C && (n.originPoint[h] = C.get());
      });
    }, u = function(m, d) {
      var h, v, y, P = n.props, C = P.drag, b = P.dragPropagation;
      C && !b && (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = kl(C), !n.openGlobalLock) || (n.resolveDragConstraints(), n.isDragging = true, n.currentDirection = null, (v = (h = n.props).onDragStart) === null || v === void 0 || v.call(h, m, d), (y = n.visualElement.animationState) === null || y === void 0 || y.setActive(Te.Drag, true));
    }, c = function(m, d) {
      var h, v, y, P, C = n.props, b = C.dragPropagation, T = C.dragDirectionLock;
      if (!(!b && !n.openGlobalLock)) {
        var F = d.offset;
        if (T && n.currentDirection === null) {
          n.currentDirection = cC(F), n.currentDirection !== null && ((v = (h = n.props).onDirectionLock) === null || v === void 0 || v.call(h, n.currentDirection));
          return;
        }
        n.updateAxis("x", m, F), n.updateAxis("y", m, F), (P = (y = n.props).onDrag) === null || P === void 0 || P.call(y, m, d), Ad = m;
      }
    }, f = function(m, d) {
      return n.stop(m, d);
    }, p = this.props.transformPagePoint;
    this.panSession = new Oa(t, { onSessionStart: l, onStart: u, onMove: c, onEnd: f }, { transformPagePoint: p });
  }, e.prototype.updateLayoutMeasurements = function() {
    vd(this.visualElement, Boolean(this.getAxisMotionValue("x") && !this.isExternalDrag()));
  }, e.prototype.resolveDragConstraints = function() {
    var t = this, r = this.props, n = r.dragConstraints, o = r.dragElastic;
    this.visualElement.updateLayoutProjection();
    var i = this.visualElement.getLayoutState().layoutCorrected;
    n ? this.constraints = Mo(n) ? this.resolveRefConstraints(i, n) : rd(i, n) : this.constraints = false, this.elastic = ld(o), this.constraints && !this.hasMutatedConstraints && $e(function(a) {
      t.getAxisMotionValue(a) && (t.constraints[a] = ad(i[a], t.constraints[a]));
    });
  }, e.prototype.resolveRefConstraints = function(t, r) {
    var n = this.props, o = n.onMeasureDragConstraints, i = n.transformPagePoint, a = r.current;
    ve(a !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."), this.constraintsBox = ka(a, i);
    var s = od(t, this.constraintsBox);
    if (o) {
      var l = o(qm(s));
      this.hasMutatedConstraints = !!l, l && (s = Va(l));
    }
    return s;
  }, e.prototype.cancelDrag = function() {
    var t;
    this.isDragging = false, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (t = this.visualElement.animationState) === null || t === void 0 || t.setActive(Te.Drag, false);
  }, e.prototype.stop = function(t, r) {
    var n, o, i;
    this.visualElement.unlockProjectionTarget(), (n = this.panSession) === null || n === void 0 || n.end(), this.panSession = null;
    var a = this.isDragging;
    if (this.cancelDrag(), !!a) {
      var s = r.velocity;
      this.animateDragEnd(s), (i = (o = this.props).onDragEnd) === null || i === void 0 || i.call(o, t, r);
    }
  }, e.prototype.snapToCursor = function(t) {
    var r = this;
    $e(function(n) {
      var o = r.props.drag;
      if (!!Ua(n, o, r.currentDirection)) {
        var i = r.getAxisMotionValue(n);
        if (i) {
          var a = ma(t).point, s = r.visualElement.getLayoutState().layout, l = s[n].max - s[n].min, u = s[n].min + l / 2, c = a[n] - u;
          r.originPoint[n] = a[n], i.set(c);
        } else
          r.cursorProgress[n] = 0.5, r.updateVisualElementAxis(n, t);
      }
    });
  }, e.prototype.updateAxis = function(t, r, n) {
    var o = this.props.drag;
    if (!!Ua(t, o, this.currentDirection))
      return this.getAxisMotionValue(t) ? this.updateAxisMotionValue(t, n) : this.updateVisualElementAxis(t, r);
  }, e.prototype.updateAxisMotionValue = function(t, r) {
    var n = this.getAxisMotionValue(t);
    if (!(!r || !n)) {
      var o = this.originPoint[t] + r[t], i = this.constraints ? du(o, this.constraints[t], this.elastic[t]) : o;
      n.set(i);
    }
  }, e.prototype.updateVisualElementAxis = function(t, r) {
    var n, o = this.visualElement.getLayoutState().layout[t], i = o.max - o.min, a = this.cursorProgress[t], s = ma(r).point, l = ed(s[t], i, a, (n = this.constraints) === null || n === void 0 ? void 0 : n[t], this.elastic[t]);
    this.visualElement.setProjectionTargetAxis(t, l, l + i);
  }, e.prototype.setProps = function(t) {
    var r = t.drag, n = r === void 0 ? false : r, o = t.dragDirectionLock, i = o === void 0 ? false : o, a = t.dragPropagation, s = a === void 0 ? false : a, l = t.dragConstraints, u = l === void 0 ? false : l, c = t.dragElastic, f = c === void 0 ? hu : c, p = t.dragMomentum, m = p === void 0 ? true : p, d = he(t, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
    this.props = w({ drag: n, dragDirectionLock: i, dragPropagation: s, dragConstraints: u, dragElastic: f, dragMomentum: m }, d);
  }, e.prototype.getAxisMotionValue = function(t) {
    var r = this.props, n = r.layout, o = r.layoutId, i = "_drag" + t.toUpperCase();
    if (this.props[i])
      return this.props[i];
    if (!n && o === void 0)
      return this.visualElement.getValue(t, 0);
  }, e.prototype.isLayoutDrag = function() {
    return !this.getAxisMotionValue("x");
  }, e.prototype.isExternalDrag = function() {
    var t = this.props, r = t._dragX, n = t._dragY;
    return r || n;
  }, e.prototype.animateDragEnd = function(t) {
    var r = this, n = this.props, o = n.drag, i = n.dragMomentum, a = n.dragElastic, s = n.dragTransition, l = Id(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag()), u = this.constraints || {};
    if (l && Object.keys(u).length && this.isLayoutDrag()) {
      var c = this.visualElement.getProjectionParent();
      if (c) {
        var f = $t(c.projection.targetFinal, u);
        $e(function(m) {
          var d = f[m], h = d.min, v = d.max;
          u[m] = { min: isNaN(h) ? void 0 : h, max: isNaN(v) ? void 0 : v };
        });
      }
    }
    var p = $e(function(m) {
      var d;
      if (!!Ua(m, o, r.currentDirection)) {
        var h = (d = u == null ? void 0 : u[m]) !== null && d !== void 0 ? d : {}, v = a ? 200 : 1e6, y = a ? 40 : 1e7, P = w(w({ type: "inertia", velocity: i ? t[m] : 0, bounceStiffness: v, bounceDamping: y, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), h);
        return r.getAxisMotionValue(m) ? r.startAxisValueAnimation(m, P) : r.visualElement.startLayoutAnimation(m, P, l);
      }
    });
    return Promise.all(p).then(function() {
      var m, d;
      (d = (m = r.props).onDragTransitionEnd) === null || d === void 0 || d.call(m);
    });
  }, e.prototype.stopMotion = function() {
    var t = this;
    $e(function(r) {
      var n = t.getAxisMotionValue(r);
      n ? n.stop() : t.visualElement.stopLayoutAnimation();
    });
  }, e.prototype.startAxisValueAnimation = function(t, r) {
    var n = this.getAxisMotionValue(t);
    if (!!n) {
      var o = n.get();
      return n.set(o), n.set(o), sr(t, n, 0, r);
    }
  }, e.prototype.scalePoint = function() {
    var t = this, r = this.props, n = r.drag, o = r.dragConstraints;
    if (!(!Mo(o) || !this.constraintsBox)) {
      this.stopMotion();
      var i = { x: 0, y: 0 };
      $e(function(a) {
        i[a] = pd(t.visualElement.projection.target[a], t.constraintsBox[a]);
      }), this.updateLayoutMeasurements(), this.resolveDragConstraints(), $e(function(a) {
        if (!!Ua(a, n, null)) {
          var s = id(t.visualElement.projection.target[a], t.constraintsBox[a], i[a]), l = s.min, u = s.max;
          t.visualElement.setProjectionTargetAxis(a, l, u);
        }
      });
    }
  }, e.prototype.mount = function(t) {
    var r = this, n = t.getInstance(), o = ar(n, "pointerdown", function(l) {
      var u = r.props, c = u.drag, f = u.dragListener, p = f === void 0 ? true : f;
      c && p && r.start(l);
    }), i = Ot(window, "resize", function() {
      r.scalePoint();
    }), a = t.onLayoutUpdate(function() {
      r.isDragging && r.resolveDragConstraints();
    }), s = t.prevDragCursor;
    return s && this.start(Ad, { cursorProgress: s }), function() {
      o == null || o(), i == null || i(), a == null || a(), r.cancelDrag();
    };
  }, e;
}();
function Ua(e, t, r) {
  return (t === true || t === e) && (r === null || r === e);
}
function cC(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function Od(e) {
  var t = e.dragControls, r = e.visualElement, n = react.exports.useContext(nt).transformPagePoint, o = Ae(function() {
    return new Dd({ visualElement: r });
  });
  o.setProps(w(w({}, e), { transformPagePoint: n })), react.exports.useEffect(function() {
    return t && t.subscribe(o);
  }, [o]), react.exports.useEffect(function() {
    return o.mount(r);
  }, []);
}
function Vd(e) {
  var t = e.onPan, r = e.onPanStart, n = e.onPanEnd, o = e.onPanSessionStart, i = e.visualElement, a = t || r || n || o, s = react.exports.useRef(null), l = react.exports.useContext(nt).transformPagePoint, u = { onSessionStart: o, onStart: r, onMove: t, onEnd: function(f, p) {
    s.current = null, n && n(f, p);
  } };
  react.exports.useEffect(function() {
    s.current !== null && s.current.updateHandlers(u);
  });
  function c(f) {
    s.current = new Oa(f, u, { transformPagePoint: l });
  }
  $r(i, "pointerdown", a && c), jn(function() {
    return s.current && s.current.end();
  });
}
var Ga = { pan: Gt(Vd), drag: Gt(Od) };
var We;
(function(e) {
  e[e.Entering = 0] = "Entering", e[e.Present = 1] = "Present", e[e.Exiting = 2] = "Exiting";
})(We || (We = {}));
var Ko;
(function(e) {
  e[e.Hide = 0] = "Hide", e[e.Show = 1] = "Show";
})(Ko || (Ko = {}));
function yu(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var bu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function hC(e) {
  var t = bu.exec(e);
  if (!t)
    return [,];
  var r = Q(t, 3), n = r[1], o = r[2];
  return [n, o];
}
var gC = 4;
function xu(e, t, r) {
  r === void 0 && (r = 1), ve(r <= gC, 'Max CSS variable fallback depth detected in property "' + e + '". This may indicate a circular fallback dependency.');
  var n = Q(hC(e), 2), o = n[0], i = n[1];
  if (!!o) {
    var a = window.getComputedStyle(t).getPropertyValue(o);
    return a ? a.trim() : yu(i) ? xu(i, t, r + 1) : i;
  }
}
function kd(e, t, r) {
  var n, o = he(t, []), i = e.getInstance();
  if (!(i instanceof HTMLElement))
    return { target: o, transitionEnd: r };
  r && (r = w({}, r)), e.forEachValue(function(u) {
    var c = u.get();
    if (!!yu(c)) {
      var f = xu(c, i);
      f && u.set(f);
    }
  });
  for (var a in o) {
    var s = o[a];
    if (!!yu(s)) {
      var l = xu(s, i);
      !l || (o[a] = l, r && ((n = r[a]) !== null && n !== void 0 || (r[a] = s)));
    }
  }
  return { target: o, transitionEnd: r };
}
function _d(e, t) {
  return e / (t.max - t.min) * 100;
}
function vC(e, t, r) {
  var n = r.target;
  if (typeof e == "string")
    if (Z.test(e))
      e = parseFloat(e);
    else
      return e;
  var o = _d(e, n.x), i = _d(e, n.y);
  return o + "% " + i + "%";
}
var jd = "_$css";
function yC(e, t) {
  var r = t.delta, n = t.treeScale, o = e, i = e.includes("var("), a = [];
  i && (e = e.replace(bu, function(h) {
    return a.push(h), jd;
  }));
  var s = Ge.parse(e);
  if (s.length > 5)
    return o;
  var l = Ge.createTransformer(e), u = typeof s[0] != "number" ? 1 : 0, c = r.x.scale * n.x, f = r.y.scale * n.y;
  s[0 + u] /= c, s[1 + u] /= f;
  var p = be(c, f, 0.5);
  typeof s[2 + u] == "number" && (s[2 + u] /= p), typeof s[3 + u] == "number" && (s[3 + u] /= p);
  var m = l(s);
  if (i) {
    var d = 0;
    m = m.replace(jd, function() {
      var h = a[d];
      return d++, h;
    });
  }
  return m;
}
var qo = { process: vC }, Bd = { borderRadius: w(w({}, qo), { applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }), borderTopLeftRadius: qo, borderTopRightRadius: qo, borderBottomLeftRadius: qo, borderBottomRightRadius: qo, boxShadow: { process: yC } };
var Nd = 1e3, TC = function(e) {
  Tn(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.frameTarget = dt(), r.currentAnimationTarget = dt(), r.isAnimating = { x: false, y: false }, r.stopAxisAnimation = { x: void 0, y: void 0 }, r.isAnimatingTree = false, r.animate = function(n, o, i) {
      i === void 0 && (i = {});
      var a = i.originBox, s = i.targetBox, l = i.visibilityAction, u = i.shouldStackAnimate, c = i.onComplete, f = i.prevParent, p = he(i, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate", "onComplete", "prevParent"]), m = r.props, d = m.visualElement, h = m.layout;
      if (u === false)
        return r.isAnimatingTree = false, r.safeToRemove();
      if (!(r.isAnimatingTree && u !== true)) {
        u && (r.isAnimatingTree = true), o = a || o, n = s || n;
        var v = false, y = d.getProjectionParent();
        if (y) {
          var P = y.prevViewportBox, C = y.getLayoutState().layout;
          f && (s && (C = f.getLayoutState().layout), a && !xd(f, y) && f.prevViewportBox && (P = f.prevViewportBox)), P && PC(f, a, s) && (v = true, o = $t(P, o), n = $t(C, n));
        }
        var b = SC(o, n), T = $e(function(F) {
          var I, A;
          if (h === "position") {
            var E = n[F].max - n[F].min;
            o[F].max = o[F].min + E;
          }
          if (!d.projection.isTargetLocked)
            if (l !== void 0)
              d.setVisibility(l === Ko.Show);
            else
              return b ? r.animateAxis(F, n[F], o[F], w(w({}, p), { isRelative: v })) : ((A = (I = r.stopAxisAnimation)[F]) === null || A === void 0 || A.call(I), d.setProjectionTargetAxis(F, n[F].min, n[F].max, v));
        });
        return d.syncRender(), Promise.all(T).then(function() {
          r.isAnimatingTree = false, c && c(), d.notifyLayoutAnimationComplete();
        });
      }
    }, r;
  }
  return t.prototype.componentDidMount = function() {
    var r = this, n = this.props.visualElement;
    n.animateMotionValue = sr, n.enableLayoutProjection(), this.unsubLayoutReady = n.onLayoutUpdate(this.animate), n.layoutSafeToRemove = function() {
      return r.safeToRemove();
    }, Ao(Bd);
  }, t.prototype.componentWillUnmount = function() {
    var r = this;
    this.unsubLayoutReady(), $e(function(n) {
      var o, i;
      return (i = (o = r.stopAxisAnimation)[n]) === null || i === void 0 ? void 0 : i.call(o);
    });
  }, t.prototype.animateAxis = function(r, n, o, i) {
    var a = this, s, l, u = i === void 0 ? {} : i, c = u.transition, f = u.isRelative;
    if (!(this.isAnimating[r] && Zo(n, this.currentAnimationTarget[r]))) {
      (l = (s = this.stopAxisAnimation)[r]) === null || l === void 0 || l.call(s), this.isAnimating[r] = true;
      var p = this.props.visualElement, m = this.frameTarget[r], d = p.getProjectionAnimationProgress()[r];
      d.clearListeners(), d.set(0), d.set(0);
      var h = function() {
        var C = d.get() / Nd;
        yd(m, o, n, C), p.setProjectionTargetAxis(r, m.min, m.max, f);
      };
      h();
      var v = d.onChange(h);
      this.stopAxisAnimation[r] = function() {
        a.isAnimating[r] = false, d.stop(), v();
      }, this.currentAnimationTarget[r] = n;
      var y = c || p.getDefaultTransition() || CC, P = sr(r === "x" ? "layoutX" : "layoutY", d, Nd, y && Un(y, "layout")).then(this.stopAxisAnimation[r]);
      return P;
    }
  }, t.prototype.safeToRemove = function() {
    var r, n;
    (n = (r = this.props).safeToRemove) === null || n === void 0 || n.call(r);
  }, t.prototype.render = function() {
    return null;
  }, t;
}(react.exports.Component);
function Hd(e) {
  var t = Q(Eo(), 2), r = t[1];
  return react.exports.createElement(TC, w({}, e, { safeToRemove: r }));
}
function SC(e, t) {
  return !zd(e) && !zd(t) && (!Zo(e.x, t.x) || !Zo(e.y, t.y));
}
var Wd = { min: 0, max: 0 };
function zd(e) {
  return Zo(e.x, Wd) && Zo(e.y, Wd);
}
function Zo(e, t) {
  return e.min === t.min && e.max === t.max;
}
var CC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function PC(e, t, r) {
  return e || !e && !(t || r);
}
var wC = { layoutReady: function(e) {
  return e.notifyLayoutReady();
} };
function Mr() {
  var e = new Set();
  return { add: function(t) {
    return e.add(t);
  }, flush: function(t) {
    var r = t === void 0 ? wC : t, n = r.layoutReady, o = r.parent, i = Array.from(e).sort(Xn);
    o ? ja(o, function() {
      Ba(i);
    }) : Ba(i), i.forEach(n), i.forEach(function(a) {
      a.isPresent && (a.presence = We.Present);
    }), Ql.preRender(), Ql.render(), Le.postRender(function() {
      return i.forEach(RC);
    }), e.clear();
  } };
}
function RC(e) {
  e.prevViewportBox = e.projection.target;
}
var lr = react.exports.createContext(Mr()), Jo = react.exports.createContext(Mr());
function ur(e) {
  return !!e.forceUpdate;
}
var FC = function(e) {
  Tn(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var r = this.props, n = r.syncLayout, o = r.framerSyncLayout, i = r.visualElement;
    ur(n) && n.register(i), ur(o) && o.register(i), i.onUnmount(function() {
      ur(n) && n.remove(i), ur(o) && o.remove(i);
    });
  }, t.prototype.getSnapshotBeforeUpdate = function() {
    var r = this.props, n = r.syncLayout, o = r.visualElement;
    return ur(n) ? n.syncUpdate() : (Er(o), n.add(o)), null;
  }, t.prototype.componentDidUpdate = function() {
    var r = this.props.syncLayout;
    ur(r) || r.flush();
  }, t.prototype.render = function() {
    return null;
  }, t;
}(React.Component);
function Xd(e) {
  var t = react.exports.useContext(lr), r = react.exports.useContext(Jo);
  return React.createElement(FC, w({}, e, { syncLayout: t, framerSyncLayout: r }));
}
var $a = { measureLayout: Xd, layoutAnimation: Hd };
var Yd = function() {
  return { isEnabled: false, isTargetLocked: false, target: dt(), targetFinal: dt() };
};
function Su() {
  return { isHydrated: false, layout: dt(), layoutCorrected: dt(), treeScale: { x: 1, y: 1 }, delta: mu(), deltaFinal: mu(), deltaTransform: "" };
}
var Cu = Su();
function en(e, t, r) {
  var n = e.x, o = e.y, i = n.translate / t.x, a = o.translate / t.y, s = "translate3d(" + i + "px, " + a + "px, 0) ";
  if (r) {
    var l = r.rotate, u = r.rotateX, c = r.rotateY;
    l && (s += "rotate(" + l + ") "), u && (s += "rotateX(" + u + ") "), c && (s += "rotateY(" + c + ") ");
  }
  return s += "scale(" + n.scale + ", " + o.scale + ")", !r && s === EC ? "" : s;
}
function Xa(e) {
  var t = e.deltaFinal;
  return t.x.origin * 100 + "% " + t.y.origin * 100 + "% 0";
}
var EC = en(Cu.delta, Cu.treeScale, { x: 1, y: 1 });
var Ya = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
function Kd() {
  var e = Ya.map(function() {
    return new Gn();
  }), t = {}, r = { clearAllListeners: function() {
    return e.forEach(function(n) {
      return n.clear();
    });
  }, updatePropListeners: function(n) {
    return Ya.forEach(function(o) {
      var i;
      (i = t[o]) === null || i === void 0 || i.call(t);
      var a = "on" + o, s = n[a];
      s && (t[o] = r[a](s));
    });
  } };
  return e.forEach(function(n, o) {
    r["on" + Ya[o]] = function(i) {
      return n.add(i);
    }, r["notify" + Ya[o]] = function() {
      for (var i = [], a = 0; a < arguments.length; a++)
        i[a] = arguments[a];
      return n.notify.apply(n, Oe([], Q(i)));
    };
  }), r;
}
function qd(e, t, r) {
  var n;
  for (var o in t) {
    var i = t[o], a = r[o];
    if (ze(i))
      e.addValue(o, i);
    else if (ze(a))
      e.addValue(o, Ee(i));
    else if (a !== i)
      if (e.hasValue(o)) {
        var s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else
        e.addValue(o, Ee((n = e.getStaticValue(o)) !== null && n !== void 0 ? n : i));
  }
  for (var o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
function Zd(e, t, r, n) {
  var o = e.delta, i = e.layout, a = e.layoutCorrected, s = e.treeScale, l = t.target;
  Cd(a, i), Md(a, s, r), _a(o, a, l, n);
}
var Pu = function() {
  function e() {
    this.children = [], this.isDirty = false;
  }
  return e.prototype.add = function(t) {
    Ra(this.children, t), this.isDirty = true;
  }, e.prototype.remove = function(t) {
    Fa(this.children, t), this.isDirty = true;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort(Xn), this.isDirty = false, this.children.forEach(t);
  }, e;
}();
function Jd(e) {
  var t = e.getProjectionParent();
  if (!t) {
    e.rebaseProjectionTarget();
    return;
  }
  var r = $t(t.getLayoutState().layout, e.getLayoutState().layout);
  $e(function(n) {
    e.setProjectionTargetAxis(n, r[n].min, r[n].max, true);
  });
}
var tn = function(e) {
  var t = e.treeType, r = t === void 0 ? "" : t, n = e.build, o = e.getBaseTarget, i = e.makeTargetAnimatable, a = e.measureViewportBox, s = e.render, l = e.readValueFromInstance, u = e.resetTransform, c = e.restoreTransform, f = e.removeValueFromRenderState, p = e.sortNodePosition, m = e.scrapeMotionValuesFromProps;
  return function(d, h) {
    var v = d.parent, y = d.props, P = d.presenceId, C = d.blockInitialAnimation, b = d.visualState;
    h === void 0 && (h = {});
    var T = b.latestValues, F = b.renderState, I, A = Kd(), E = Yd(), k, W = E, K = T, U, N = Su(), ee, H = false, X = new Map(), ae = new Map(), G = {}, S, x = w({}, T), g;
    function R() {
      !I || ($.isProjectionReady() && (za(W.targetFinal, W.target, K), _a(N.deltaFinal, N.layoutCorrected, W.targetFinal, T)), O(), s(I, F));
    }
    function O() {
      var D = T;
      if (ee && ee.isActive()) {
        var j = ee.getCrossfadeState($);
        j && (D = j);
      }
      n($, F, D, W, N, h, y);
    }
    function Y() {
      A.notifyUpdate(T);
    }
    function re() {
      var D = N.delta, j = N.treeScale, se = j.x, Fe = j.x, Pe = N.deltaTransform;
      Zd(N, W, $.path, T), H && $.notifyViewportBoxUpdate(W.target, D), H = false;
      var Qe = en(D, j);
      (Qe !== Pe || se !== j.x || Fe !== j.y) && $.scheduleRender(), N.deltaTransform = Qe;
    }
    function te() {
      $.layoutTree.forEach(IC);
    }
    function oe(D, j) {
      var se = j.onChange(function(Pe) {
        T[D] = Pe, y.onUpdate && Le.update(Y, false, true);
      }), Fe = j.onRenderRequest($.scheduleRender);
      ae.set(D, function() {
        se(), Fe();
      });
    }
    var Ce = m(y);
    for (var de in Ce) {
      var ye = Ce[de];
      T[de] !== void 0 && ze(ye) && ye.set(T[de], false);
    }
    var qe = Ur(y), Re = $i(y), $ = w(w({ treeType: r, current: null, depth: v ? v.depth + 1 : 0, parent: v, children: new Set(), path: v ? Oe(Oe([], Q(v.path)), [v]) : [], layoutTree: v ? v.layoutTree : new Pu(), presenceId: P, projection: E, variantChildren: Re ? new Set() : void 0, isVisible: void 0, manuallyAnimateOnMount: Boolean(v == null ? void 0 : v.isMounted()), blockInitialAnimation: C, isHoverEventsEnabled: true, isMounted: function() {
      return Boolean(I);
    }, mount: function(D) {
      I = $.current = D, $.pointTo($), Re && v && !qe && (g = v == null ? void 0 : v.addVariantChild($)), v == null || v.children.add($);
    }, unmount: function() {
      Fr.update(Y), Fr.render(R), Fr.preRender($.updateLayoutProjection), ae.forEach(function(D) {
        return D();
      }), $.stopLayoutAnimation(), $.layoutTree.remove($), g == null || g(), v == null || v.children.delete($), U == null || U(), A.clearAllListeners();
    }, addVariantChild: function(D) {
      var j, se = $.getClosestVariantNode();
      if (se)
        return (j = se.variantChildren) === null || j === void 0 || j.add(D), function() {
          return se.variantChildren.delete(D);
        };
    }, sortNodePosition: function(D) {
      return !p || r !== D.treeType ? 0 : p($.getInstance(), D.getInstance());
    }, getClosestVariantNode: function() {
      return Re ? $ : v == null ? void 0 : v.getClosestVariantNode();
    }, scheduleUpdateLayoutProjection: v ? v.scheduleUpdateLayoutProjection : function() {
      return Le.preRender($.updateTreeLayoutProjection, false, true);
    }, getLayoutId: function() {
      return y.layoutId;
    }, getInstance: function() {
      return I;
    }, getStaticValue: function(D) {
      return T[D];
    }, setStaticValue: function(D, j) {
      return T[D] = j;
    }, getLatestValues: function() {
      return T;
    }, setVisibility: function(D) {
      $.isVisible !== D && ($.isVisible = D, $.scheduleRender());
    }, makeTargetAnimatable: function(D, j) {
      return j === void 0 && (j = true), i($, D, y, j);
    }, suspendHoverEvents: function() {
      $.isHoverEventsEnabled = false, Le.postRender(function() {
        return setTimeout(function() {
          return $.isHoverEventsEnabled = true;
        }, 10);
      });
    }, addValue: function(D, j) {
      $.hasValue(D) && $.removeValue(D), X.set(D, j), T[D] = j.get(), oe(D, j);
    }, removeValue: function(D) {
      var j;
      X.delete(D), (j = ae.get(D)) === null || j === void 0 || j(), ae.delete(D), delete T[D], f(D, F);
    }, hasValue: function(D) {
      return X.has(D);
    }, getValue: function(D, j) {
      var se = X.get(D);
      return se === void 0 && j !== void 0 && (se = Ee(j), $.addValue(D, se)), se;
    }, forEachValue: function(D) {
      return X.forEach(D);
    }, readValue: function(D) {
      var j;
      return (j = T[D]) !== null && j !== void 0 ? j : l(I, D, h);
    }, setBaseTarget: function(D, j) {
      x[D] = j;
    }, getBaseTarget: function(D) {
      if (o) {
        var j = o(y, D);
        if (j !== void 0 && !ze(j))
          return j;
      }
      return x[D];
    } }, A), { build: function() {
      return O(), F;
    }, scheduleRender: function() {
      Le.render(R, false, true);
    }, syncRender: R, setProps: function(D) {
      y = D, A.updatePropListeners(D), G = qd($, m(y), G);
    }, getProps: function() {
      return y;
    }, getVariant: function(D) {
      var j;
      return (j = y.variants) === null || j === void 0 ? void 0 : j[D];
    }, getDefaultTransition: function() {
      return y.transition;
    }, getVariantContext: function(D) {
      if (D === void 0 && (D = false), D)
        return v == null ? void 0 : v.getVariantContext();
      if (!qe) {
        var j = (v == null ? void 0 : v.getVariantContext()) || {};
        return y.initial !== void 0 && (j.initial = y.initial), j;
      }
      for (var se = {}, Fe = 0; Fe < AC; Fe++) {
        var Pe = Qd[Fe], Qe = y[Pe];
        (mt(Qe) || Qe === false) && (se[Pe] = Qe);
      }
      return se;
    }, enableLayoutProjection: function() {
      E.isEnabled = true, $.layoutTree.add($);
    }, lockProjectionTarget: function() {
      E.isTargetLocked = true;
    }, unlockProjectionTarget: function() {
      $.stopLayoutAnimation(), E.isTargetLocked = false;
    }, getLayoutState: function() {
      return N;
    }, setCrossfader: function(D) {
      ee = D;
    }, isProjectionReady: function() {
      return E.isEnabled && N.isHydrated;
    }, startLayoutAnimation: function(D, j, se) {
      se === void 0 && (se = false);
      var Fe = $.getProjectionAnimationProgress()[D], Pe = se ? E.relativeTarget[D] : E.target[D], Qe = Pe.min, rt = Pe.max, Wt = rt - Qe;
      return Fe.clearListeners(), Fe.set(Qe), Fe.set(Qe), Fe.onChange(function(ne) {
        $.setProjectionTargetAxis(D, ne, ne + Wt, se);
      }), $.animateMotionValue(D, Fe, 0, j);
    }, stopLayoutAnimation: function() {
      $e(function(D) {
        return $.getProjectionAnimationProgress()[D].stop();
      });
    }, measureViewportBox: function(D) {
      D === void 0 && (D = true);
      var j = a(I, h);
      return D || Wa(j, T), j;
    }, getProjectionAnimationProgress: function() {
      return S || (S = { x: Ee(0), y: Ee(0) }), S;
    }, setProjectionTargetAxis: function(D, j, se, Fe) {
      Fe === void 0 && (Fe = false);
      var Pe;
      Fe ? (E.relativeTarget || (E.relativeTarget = dt()), Pe = E.relativeTarget[D]) : (E.relativeTarget = void 0, Pe = E.target[D]), Pe.min = j, Pe.max = se, H = true, A.notifySetAxisTarget();
    }, rebaseProjectionTarget: function(D, j) {
      j === void 0 && (j = N.layout);
      var se = $.getProjectionAnimationProgress(), Fe = se.x, Pe = se.y, Qe = !E.relativeTarget && !E.isTargetLocked && !Fe.isAnimating() && !Pe.isAnimating();
      (D || Qe) && $e(function(rt) {
        var Wt = j[rt], ne = Wt.min, ue = Wt.max;
        $.setProjectionTargetAxis(rt, ne, ue);
      });
    }, notifyLayoutReady: function(D) {
      Jd($), $.notifyLayoutUpdate(N.layout, $.prevViewportBox || N.layout, D);
    }, resetTransform: function() {
      return u($, I, y);
    }, restoreTransform: function() {
      return c(I, F);
    }, updateLayoutProjection: re, updateTreeLayoutProjection: function() {
      $.layoutTree.forEach(MC), Le.preRender(te, false, true);
    }, getProjectionParent: function() {
      if (k === void 0) {
        for (var D = false, j = $.path.length - 1; j >= 0; j--) {
          var se = $.path[j];
          if (se.projection.isEnabled) {
            D = se;
            break;
          }
        }
        k = D;
      }
      return k;
    }, resolveRelativeTargetBox: function() {
      var D = $.getProjectionParent();
      if (!(!E.relativeTarget || !D) && (hd(E, D.projection), Na(D))) {
        var j = E.target;
        za(j, j, D.getLatestValues());
      }
    }, shouldResetTransform: function() {
      return Boolean(y._layoutResetTransform);
    }, pointTo: function(D) {
      W = D.projection, K = D.getLatestValues(), U == null || U(), U = kt(D.onSetAxisTarget($.scheduleUpdateLayoutProjection), D.onLayoutAnimationComplete(function() {
        var j;
        $.isPresent ? $.presence = We.Present : (j = $.layoutSafeToRemove) === null || j === void 0 || j.call($);
      }));
    }, isPresent: true, presence: We.Entering });
    return $;
  };
};
function MC(e) {
  e.resolveRelativeTargetBox();
}
function IC(e) {
  e.updateLayoutProjection();
}
var Qd = Oe(["initial"], Q(Da)), AC = Qd.length;
var DC = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), eh = function(e) {
  return DC.has(e);
}, LC = function(e) {
  return Object.keys(e).some(eh);
}, th = function(e, t) {
  e.set(t, false), e.set(t);
}, Ka = function(e) {
  return e === xt || e === Z;
}, rh;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(rh || (rh = {}));
var nh = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, oh = function(e, t) {
  return function(r, n) {
    var o = n.transform;
    if (o === "none" || !o)
      return 0;
    var i = o.match(/^matrix3d\((.+)\)$/);
    if (i)
      return nh(i[1], t);
    var a = o.match(/^matrix\((.+)\)$/);
    return a ? nh(a[1], e) : 0;
  };
}, OC = new Set(["x", "y", "z"]), VC = Fn.filter(function(e) {
  return !OC.has(e);
});
function kC(e) {
  var t = [];
  return VC.forEach(function(r) {
    var n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var ih = { width: function(e) {
  var t = e.x;
  return t.max - t.min;
}, height: function(e) {
  var t = e.y;
  return t.max - t.min;
}, top: function(e, t) {
  var r = t.top;
  return parseFloat(r);
}, left: function(e, t) {
  var r = t.left;
  return parseFloat(r);
}, bottom: function(e, t) {
  var r = e.y, n = t.top;
  return parseFloat(n) + (r.max - r.min);
}, right: function(e, t) {
  var r = e.x, n = t.left;
  return parseFloat(n) + (r.max - r.min);
}, x: oh(4, 13), y: oh(5, 14) }, _C = function(e, t, r) {
  var n = t.measureViewportBox(), o = t.getInstance(), i = getComputedStyle(o), a = i.display, s = i.top, l = i.left, u = i.bottom, c = i.right, f = i.transform, p = { top: s, left: l, bottom: u, right: c, transform: f };
  a === "none" && t.setStaticValue("display", e.display || "block"), t.syncRender();
  var m = t.measureViewportBox();
  return r.forEach(function(d) {
    var h = t.getValue(d);
    th(h, ih[d](n, p)), e[d] = ih[d](m, i);
  }), e;
}, jC = function(e, t, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {}), t = w({}, t), n = w({}, n);
  var o = Object.keys(t).filter(eh), i = [], a = false, s = [];
  if (o.forEach(function(u) {
    var c = e.getValue(u);
    if (!!e.hasValue(u)) {
      var f = r[u], p = t[u], m = Xo(f), d;
      if (ir(p))
        for (var h = p.length, v = p[0] === null ? 1 : 0; v < h; v++)
          d ? ve(Xo(p[v]) === d, "All keyframes must be of the same type") : (d = Xo(p[v]), ve(d === m || Ka(m) && Ka(d), "Keyframes must be of the same dimension as the current value"));
      else
        d = Xo(p);
      if (m !== d)
        if (Ka(m) && Ka(d)) {
          var y = c.get();
          typeof y == "string" && c.set(parseFloat(y)), typeof p == "string" ? t[u] = parseFloat(p) : Array.isArray(p) && d === Z && (t[u] = p.map(parseFloat));
        } else
          (m == null ? void 0 : m.transform) && (d == null ? void 0 : d.transform) && (f === 0 || p === 0) ? f === 0 ? c.set(d.transform(f)) : t[u] = m.transform(p) : (a || (i = kC(e), a = true), s.push(u), n[u] = n[u] !== void 0 ? n[u] : t[u], th(c, p));
    }
  }), s.length) {
    var l = _C(t, e, s);
    return i.length && i.forEach(function(u) {
      var c = Q(u, 2), f = c[0], p = c[1];
      e.getValue(f).set(p);
    }), e.syncRender(), { target: l, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function ah(e, t, r, n) {
  return LC(t) ? jC(e, t, r, n) : { target: t, transitionEnd: n };
}
var sh = function(e, t, r, n) {
  var o = kd(e, t, n);
  return t = o.target, n = o.transitionEnd, ah(e, t, r, n);
};
function BC(e) {
  return window.getComputedStyle(e);
}
var Tu = { treeType: "dom", readValueFromInstance: function(e, t) {
  if (Sr(t)) {
    var r = Wn(t);
    return r && r.default || 0;
  } else {
    var n = BC(e);
    return (Zi(t) ? n.getPropertyValue(t) : n[t]) || 0;
  }
}, sortNodePosition: function(e, t) {
  return e.compareDocumentPosition(t) & 2 ? 1 : -1;
}, getBaseTarget: function(e, t) {
  var r;
  return (r = e.style) === null || r === void 0 ? void 0 : r[t];
}, measureViewportBox: function(e, t) {
  var r = t.transformPagePoint;
  return ka(e, r);
}, resetTransform: function(e, t, r) {
  e.suspendHoverEvents();
  var n = r.transformTemplate;
  t.style.transform = n ? n({}, "") : "none", e.scheduleRender();
}, restoreTransform: function(e, t) {
  e.style.transform = t.style.transform;
}, removeValueFromRenderState: function(e, t) {
  var r = t.vars, n = t.style;
  delete r[e], delete n[e];
}, makeTargetAnimatable: function(e, t, r, n) {
  var o = r.transformValues;
  n === void 0 && (n = true);
  var i = t.transition, a = t.transitionEnd, s = he(t, ["transition", "transitionEnd"]), l = Aa(s, i || {}, e);
  if (o && (a && (a = o(a)), s && (s = o(s)), l && (l = o(l))), n) {
    Ia(e, s, l);
    var u = sh(e, s, l, a);
    a = u.transitionEnd, s = u.target;
  }
  return w({ transition: i, transitionEnd: a }, s);
}, scrapeMotionValuesFromProps: Vn, build: function(e, t, r, n, o, i, a) {
  e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden");
  var s = n.isEnabled && o.isHydrated;
  Dn(t, r, n, o, i, a.transformTemplate, s ? en : void 0, s ? Xa : void 0);
}, render: aa }, lh = tn(Tu);
var uh = tn(w(w({}, Tu), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var r;
  return Sr(t) ? ((r = Wn(t)) === null || r === void 0 ? void 0 : r.default) || 0 : (t = sa.has(t) ? t : ia(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: ua, build: function(e, t, r, n, o, i, a) {
  var s = n.isEnabled && o.isHydrated;
  On(t, r, n, o, i, a.transformTemplate, s ? en : void 0, s ? Xa : void 0);
}, render: la }));
var Qo = function(e, t) {
  return Rn(e) ? uh(t, { enableHardwareAcceleration: false }) : lh(t, { enableHardwareAcceleration: true });
};
var ch = w(w(w(w({}, La), Ta), Ga), $a), ke = Xi(function(e, t) {
  return Lo(e, t, ch, Qo);
});
function NC(e) {
  return Io(Lo(e, { forwardMotionProps: false }, ch, Qo));
}
var HC = Xi(Lo);
function ph() {
  var e = react.exports.useRef(false), t = Q(react.exports.useState(0), 2), r = t[0], n = t[1];
  return jn(function() {
    return e.current = true;
  }), react.exports.useCallback(function() {
    !e.current && n(r + 1);
  }, [r]);
}
var mh = 0;
function XC() {
  var e = mh;
  return mh++, e;
}
var qa = function(e) {
  var t = e.children, r = e.initial, n = e.isPresent, o = e.onExitComplete, i = e.custom, a = e.presenceAffectsLayout, s = Ae(YC), l = Ae(XC), u = react.exports.useMemo(function() {
    return { id: l, initial: r, isPresent: n, custom: i, onExitComplete: function(c) {
      s.set(c, true);
      var f = true;
      s.forEach(function(p) {
        p || (f = false);
      }), f && (o == null || o());
    }, register: function(c) {
      return s.set(c, false), function() {
        return s.delete(c);
      };
    } };
  }, a ? void 0 : [n]);
  return react.exports.useMemo(function() {
    s.forEach(function(c, f) {
      return s.set(f, false);
    });
  }, [n]), react.exports.useEffect(function() {
    !n && !s.size && (o == null || o());
  }, [n]), react.exports.createElement(ft.Provider, { value: u }, t);
};
function YC() {
  return new Map();
}
function Yn(e) {
  return e.key || "";
}
function QC(e, t) {
  var r = new Set();
  e.forEach(function(n) {
    var o = Yn(n);
    r && (r.has(o) && console.warn('Children of AnimatePresence require unique keys. "' + o + '" is a duplicate.'), r.add(o)), t.set(o, n);
  });
}
function e0(e) {
  var t = [];
  return react.exports.Children.forEach(e, function(r) {
    react.exports.isValidElement(r) && t.push(r);
  }), t;
}
var Ja = function(e) {
  var t = e.children, r = e.custom, n = e.initial, o = n === void 0 ? true : n, i = e.onExitComplete, a = e.exitBeforeEnter, s = e.presenceAffectsLayout, l = s === void 0 ? true : s, u = ph(), c = react.exports.useContext(lr);
  ur(c) && (u = c.forceUpdate);
  var f = react.exports.useRef(true), p = e0(t), m = react.exports.useRef(p), d = react.exports.useRef(new Map()).current, h = react.exports.useRef(new Set()).current;
  if (QC(p, d), f.current)
    return f.current = false, react.exports.createElement(react.exports.Fragment, null, p.map(function(F) {
      return react.exports.createElement(qa, { key: Yn(F), isPresent: true, initial: o ? void 0 : false, presenceAffectsLayout: l }, F);
    }));
  for (var v = Oe([], Q(p)), y = m.current.map(Yn), P = p.map(Yn), C = y.length, b = 0; b < C; b++) {
    var T = y[b];
    P.indexOf(T) === -1 ? h.add(T) : h.delete(T);
  }
  return a && h.size && (v = []), h.forEach(function(F) {
    if (P.indexOf(F) === -1) {
      var I = d.get(F);
      if (!!I) {
        var A = y.indexOf(F), E = function() {
          d.delete(F), h.delete(F);
          var k = m.current.findIndex(function(W) {
            return W.key === F;
          });
          m.current.splice(k, 1), h.size || (m.current = p, u(), i && i());
        };
        v.splice(A, 0, react.exports.createElement(qa, { key: Yn(I), isPresent: false, onExitComplete: E, custom: r, presenceAffectsLayout: l }, I));
      }
    }
  }), v = v.map(function(F) {
    var I = F.key;
    return h.has(I) ? F : react.exports.createElement(qa, { key: Yn(F), isPresent: true, presenceAffectsLayout: l }, F);
  }), m.current = v, a && v.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), react.exports.createElement(react.exports.Fragment, null, h.size ? v : v.map(function(F) {
    return react.exports.cloneElement(F);
  }));
};
function Xt(e, t, r) {
  r === void 0 && (r = {});
  var n = ze(e) ? e : Ee(e);
  return sr("", n, t, r), { stop: function() {
    return n.stop();
  } };
}
function Kn() {
  var e = Ee(1), t = { lead: void 0, follow: void 0, crossfadeOpacity: false, preserveFollowOpacity: false }, r = w({}, t), n = {}, o = {}, i = false, a = null, s = 0;
  function l(c, f) {
    var p = t.lead, m = t.follow;
    i = true, a = null;
    var d = false, h = function() {
      d = true, p && p.scheduleRender(), m && m.scheduleRender();
    }, v = function() {
      i = false, a = _t().timestamp;
    };
    return f = f && Un(f, "crossfade"), Xt(e, c, w(w({}, f), { onUpdate: h, onComplete: function() {
      d ? v() : (e.set(c), Le.read(v)), h();
    } }));
  }
  function u() {
    var c, f, p = _t().timestamp, m = t.lead, d = t.follow;
    if (!(p === s || !m)) {
      s = p;
      var h = m.getLatestValues();
      Object.assign(n, h);
      var v = d ? d.getLatestValues() : t.prevValues;
      Object.assign(o, v);
      var y = e.get(), P = (c = h.opacity) !== null && c !== void 0 ? c : 1, C = (f = v == null ? void 0 : v.opacity) !== null && f !== void 0 ? f : 1;
      t.crossfadeOpacity && d ? (n.opacity = be(d.isVisible !== false ? 0 : C, P, t0(y)), o.opacity = t.preserveFollowOpacity ? C : be(C, 0, r0(y))) : d || (n.opacity = be(C, P, y)), n0(n, o, h, v || {}, Boolean(d), y);
    }
  }
  return { isActive: function() {
    return n && (i || _t().timestamp === a);
  }, fromLead: function(c) {
    return l(0, c);
  }, toLead: function(c) {
    var f = 0;
    return !t.prevValues && !t.follow ? f = 1 : r.lead === t.follow && r.follow === t.lead && (f = 1 - e.get()), e.set(f), l(1, c);
  }, reset: function() {
    return e.set(1);
  }, stop: function() {
    return e.stop();
  }, getCrossfadeState: function(c) {
    if (u(), c === t.lead)
      return n;
    if (c === t.follow)
      return o;
  }, setOptions: function(c) {
    r = t, t = c, n = {}, o = {};
  }, getLatestValues: function() {
    return n;
  } };
}
var t0 = hh(0, 0.5, Bn), r0 = hh(0.5, 0.95, Kr);
function hh(e, t, r) {
  return function(n) {
    return n < e ? 0 : n > t ? 1 : r(Vt(e, t, n));
  };
}
var gh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], o0 = gh.length;
function n0(e, t, r, n, o, i) {
  for (var a = 0; a < o0; a++) {
    var s = "border" + gh[a] + "Radius", l = vh(n, s), u = vh(r, s);
    if (!(l === void 0 && u === void 0) && (l || (l = 0), u || (u = 0), typeof l == "number" && typeof u == "number")) {
      var c = Math.max(be(l, u, i), 0);
      e[s] = t[s] = c;
    }
  }
  if (n.rotate || r.rotate) {
    var f = be(n.rotate || 0, r.rotate || 0, i);
    e.rotate = t.rotate = f;
  }
  !o && r.backgroundColor && n.backgroundColor && (e.backgroundColor = t.backgroundColor = Xr(n.backgroundColor, r.backgroundColor)(i));
}
function vh(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
function yh() {
  var e = new Set(), t = { leadIsExiting: false }, r = w({}, t), n, o, i, a = Kn(), s = false;
  function l() {
    return t.follow ? t.follow.prevViewportBox : o;
  }
  function u() {
    var c;
    return (c = t.follow) === null || c === void 0 ? void 0 : c.getLayoutState().layout;
  }
  return { add: function(c) {
    c.setCrossfader(a), e.add(c), i && (c.prevDragCursor = i), t.lead || (t.lead = c);
  }, remove: function(c) {
    e.delete(c);
  }, getLead: function() {
    return t.lead;
  }, updateSnapshot: function() {
    if (!!t.lead) {
      n = a.isActive() ? a.getLatestValues() : t.lead.getLatestValues(), o = t.lead.prevViewportBox;
      var c = vu.get(t.lead);
      c && c.isDragging && (i = c.cursorProgress);
    }
  }, clearSnapshot: function() {
    i = o = void 0;
  }, updateLeadAndFollow: function() {
    var c;
    r = w({}, t);
    for (var f, p, m = Array.from(e), d = m.length; d--; d >= 0) {
      var h = m[d];
      if (f && (p != null || (p = h)), f != null || (f = h), f && p)
        break;
    }
    t.lead = f, t.follow = p, t.leadIsExiting = ((c = t.lead) === null || c === void 0 ? void 0 : c.presence) === We.Exiting, a.setOptions({ lead: f, follow: p, prevValues: n, crossfadeOpacity: (p == null ? void 0 : p.isPresenceRoot) || (f == null ? void 0 : f.isPresenceRoot) }), t.lead !== r.follow && (r.lead !== t.lead || r.leadIsExiting !== t.leadIsExiting) && (s = true);
  }, animate: function(c, f) {
    var p;
    if (f === void 0 && (f = false), c === t.lead) {
      f ? c.pointTo(t.lead) : c.setVisibility(true);
      var m = {}, d = (p = t.follow) === null || p === void 0 ? void 0 : p.getProjectionParent();
      if (d && (m.prevParent = d), c.presence === We.Entering ? m.originBox = l() : c.presence === We.Exiting && (m.targetBox = u()), s) {
        s = false;
        var h = c.getDefaultTransition();
        c.presence === We.Entering ? a.toLead(h) : a.fromLead(h);
      }
      c.notifyLayoutReady(m);
    } else
      f ? t.lead && c.pointTo(t.lead) : c.setVisibility(false);
  } };
}
function bh(e) {
  for (var t = false, r = {}, n = 0; n < Yi.length; n++) {
    var o = Yi[n], i = "rotate" + o;
    !e.hasValue(i) || e.getStaticValue(i) === 0 || (t = true, r[i] = e.getStaticValue(i), e.setStaticValue(i, 0));
  }
  if (!!t) {
    e.syncRender();
    for (var i in r)
      e.setStaticValue(i, r[i]);
    e.scheduleRender();
  }
}
var wu = function(e) {
  Tn(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.children = new Set(), r.stacks = new Map(), r.hasMounted = false, r.updateScheduled = false, r.renderScheduled = false, r.syncContext = w(w({}, Mr()), { syncUpdate: function(n) {
      return r.scheduleUpdate(n);
    }, forceUpdate: function() {
      r.syncContext = w({}, r.syncContext), r.scheduleUpdate(true);
    }, register: function(n) {
      return r.addChild(n);
    }, remove: function(n) {
      return r.removeChild(n);
    } }), r;
  }
  return t.prototype.componentDidMount = function() {
    this.hasMounted = true;
  }, t.prototype.componentDidUpdate = function() {
    this.startLayoutAnimation();
  }, t.prototype.shouldComponentUpdate = function() {
    return this.renderScheduled = true, true;
  }, t.prototype.startLayoutAnimation = function() {
    var r = this;
    this.renderScheduled = this.updateScheduled = false;
    var n = this.props.type;
    this.children.forEach(function(i) {
      i.isPresent ? i.presence !== We.Entering && (i.presence = i.presence === We.Exiting ? We.Entering : We.Present) : i.presence = We.Exiting;
    }), this.updateStacks();
    var o = { layoutReady: function(i) {
      if (i.getLayoutId() !== void 0) {
        var a = r.getStack(i);
        a.animate(i, n === "crossfade");
      } else
        i.notifyLayoutReady();
    }, parent: this.context.visualElement };
    this.children.forEach(function(i) {
      return r.syncContext.add(i);
    }), this.syncContext.flush(o), this.stacks.forEach(function(i) {
      return i.clearSnapshot();
    });
  }, t.prototype.updateStacks = function() {
    this.stacks.forEach(function(r) {
      return r.updateLeadAndFollow();
    });
  }, t.prototype.scheduleUpdate = function(r) {
    r === void 0 && (r = false), !!(r || !this.updateScheduled) && (this.updateScheduled = true, this.children.forEach(function(n) {
      bh(n), n.shouldResetTransform() && n.resetTransform();
    }), this.children.forEach(Er), this.stacks.forEach(function(n) {
      return n.updateSnapshot();
    }), (r || !this.renderScheduled) && (this.renderScheduled = true, this.forceUpdate()));
  }, t.prototype.addChild = function(r) {
    this.children.add(r), this.addToStack(r), r.presence = this.hasMounted ? We.Entering : We.Present;
  }, t.prototype.removeChild = function(r) {
    this.scheduleUpdate(), this.children.delete(r), this.removeFromStack(r);
  }, t.prototype.addToStack = function(r) {
    var n = this.getStack(r);
    n == null || n.add(r);
  }, t.prototype.removeFromStack = function(r) {
    var n = this.getStack(r);
    n == null || n.remove(r);
  }, t.prototype.getStack = function(r) {
    var n = r.getLayoutId();
    if (n !== void 0)
      return !this.stacks.has(n) && this.stacks.set(n, yh()), this.stacks.get(n);
  }, t.prototype.render = function() {
    return react.exports.createElement(lr.Provider, { value: this.syncContext }, this.props.children);
  }, t.contextType = er, t;
}(react.exports.Component);
function c0(e) {
  var t = e.children, r = he(e, ["children"]);
  r = w(w({}, react.exports.useContext(nt)), r), r.isStatic = Ae(function() {
    return r.isStatic;
  });
  var n = typeof r.transition == "object" ? r.transition.toString() : "", o = react.exports.useMemo(function() {
    return r;
  }, [n, r.transformPagePoint]);
  return react.exports.createElement(nt.Provider, { value: o }, t);
}
function h0(e) {
  var t = e.children, r = e.features, n = e.strict, o = n === void 0 ? false : n, i = Q(react.exports.useState(!Ru(r)), 2), a = i[1], s = react.exports.useRef(void 0);
  if (!Ru(r)) {
    var l = r.renderer, u = he(r, ["renderer"]);
    s.current = l, Fo(u);
  }
  return react.exports.useEffect(function() {
    Ru(r) && r().then(function(c) {
      var f = c.renderer, p = he(c, ["renderer"]);
      Fo(p), s.current = f, a(true);
    });
  }, []), react.exports.createElement(wn.Provider, { value: { renderer: s.current, strict: o } }, t);
}
function Ru(e) {
  return typeof e == "function";
}
var Fu = w(w({ renderer: Qo }, La), Ta);
var g0 = w(w(w({}, Fu), Ga), $a);
function Je(e) {
  var t = Ae(function() {
    return Ee(e);
  }), r = react.exports.useContext(nt).isStatic;
  if (r) {
    var n = Q(react.exports.useState(e), 2), o = n[1];
    react.exports.useEffect(function() {
      return t.onChange(o);
    }, []);
  }
  return t;
}
function Qa(e, t) {
  react.exports.useEffect(function() {
    if (ze(e))
      return e.onChange(t);
  }, [t]);
}
function Sh(e, t) {
  react.exports.useEffect(function() {
    var r = e.map(function(n) {
      return n.onChange(t);
    });
    return function() {
      return r.forEach(function(n) {
        return n();
      });
    };
  });
}
function es(e, t) {
  var r = Je(t()), n = function() {
    return r.set(t());
  };
  return n(), Sh(e, function() {
    return Le.update(n, false, true);
  }), r;
}
function x0(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = e.length;
  function o() {
    for (var i = "", a = 0; a < n; a++) {
      i += e[a];
      var s = t[a];
      s && (i += t[a].get());
    }
    return i;
  }
  return es(t, o);
}
var S0 = function(e) {
  return typeof e == "object" && e.mix;
}, C0 = function(e) {
  return S0(e) ? e.mix : void 0;
};
function Eu() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = !Array.isArray(e[0]), n = r ? 0 : -1, o = e[0 + n], i = e[1 + n], a = e[2 + n], s = e[3 + n], l = Yr(i, a, w({ mixer: C0(a[0]) }, s));
  return r ? l(o) : l;
}
function ts(e, t, r, n) {
  var o = typeof t == "function" ? t : Eu(t, r, n);
  return Array.isArray(e) ? Ch(e, o) : Ch([e], function(i) {
    var a = Q(i, 1), s = a[0];
    return o(s);
  });
}
function Ch(e, t) {
  var r = Ae(function() {
    return [];
  });
  return es(e, function() {
    r.length = 0;
    for (var n = e.length, o = 0; o < n; o++)
      r[o] = e[o].get();
    return t(r);
  });
}
function R0(e, t) {
  t === void 0 && (t = {});
  var r = react.exports.useContext(nt).isStatic, n = react.exports.useRef(null), o = Je(ze(e) ? e.get() : e);
  return react.exports.useMemo(function() {
    return o.attach(function(i, a) {
      return r ? a(i) : (n.current && n.current.stop(), n.current = qr(w(w({ from: o.get(), to: i, velocity: o.getVelocity() }, t), { onUpdate: a })), o.get());
    });
  }, Object.values(t)), Qa(e, function(i) {
    return o.set(parseFloat(i));
  }), o;
}
function E0(e) {
  var t = Je(e.getVelocity());
  return react.exports.useEffect(function() {
    return e.velocityUpdateSubscribers.add(function(r) {
      t.set(r);
    });
  }, [e]), t;
}
function rs() {
  return { scrollX: Ee(0), scrollY: Ee(0), scrollXProgress: Ee(0), scrollYProgress: Ee(0) };
}
function Ph(e, t, r) {
  r.set(!e || !t ? 0 : e / t);
}
function ns(e, t) {
  var r = function() {
    var n = t(), o = n.xOffset, i = n.yOffset, a = n.xMaxOffset, s = n.yMaxOffset;
    e.scrollX.set(o), e.scrollY.set(i), Ph(o, a, e.scrollXProgress), Ph(i, s, e.scrollYProgress);
  };
  return r(), r;
}
var M0 = function(e) {
  return function() {
    return { xOffset: e.scrollLeft, yOffset: e.scrollTop, xMaxOffset: e.scrollWidth - e.offsetWidth, yMaxOffset: e.scrollHeight - e.offsetHeight };
  };
};
function I0(e) {
  var t = Ae(rs);
  return zr(function() {
    var r = e.current;
    if (ve(!!r, "ref provided to useScroll must be passed into a HTML element."), !!r) {
      var n = ns(t, M0(r)), o = Ot(r, "scroll", n, { passive: true }), i = Ot(r, "resize", n);
      return function() {
        o && o(), i && i();
      };
    }
  }, []), t;
}
var os;
function A0() {
  return { xOffset: window.pageXOffset, yOffset: window.pageYOffset, xMaxOffset: document.body.clientWidth - window.innerWidth, yMaxOffset: document.body.clientHeight - window.innerHeight };
}
var Th = false;
function D0() {
  if (Th = true, typeof window != "undefined") {
    var e = ns(os, A0);
    Ot(window, "scroll", e, { passive: true }), Ot(window, "resize", e);
  }
}
function L0() {
  return os || (os = rs()), zr(function() {
    !Th && D0();
  }, []), os;
}
var qn;
function V0() {
  if (qn = Ee(null), typeof window != "undefined")
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return qn.set(e.matches);
      };
      e.addListener(t), t();
    } else
      qn.set(false);
}
function k0() {
  !qn && V0();
  var e = Q(react.exports.useState(qn.get()), 2), t = e[0], r = e[1];
  return Qa(qn, r), t;
}
function Mu() {
  var e = false, t = [], r = new Set(), n = { subscribe: function(o) {
    return r.add(o), function() {
      return void r.delete(o);
    };
  }, start: function(o, i) {
    if (e) {
      var a = [];
      return r.forEach(function(s) {
        a.push(Qr(s, o, { transitionOverride: i }));
      }), Promise.all(a);
    } else
      return new Promise(function(s) {
        t.push({ animation: [o, i], resolve: s });
      });
  }, set: function(o) {
    return ve(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), r.forEach(function(i) {
      zm(i, o);
    });
  }, stop: function() {
    r.forEach(function(o) {
      Um(o);
    });
  }, mount: function() {
    return e = true, t.forEach(function(o) {
      var i = o.animation, a = o.resolve;
      n.start.apply(n, Oe([], Q(i))).then(a);
    }), function() {
      e = false, n.stop();
    };
  } };
  return n;
}
function Iu() {
  var e = Ae(Mu);
  return react.exports.useEffect(e.mount, []), e;
}
function N0() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = react.exports.useRef(0), n = Q(react.exports.useState(e[r.current]), 2), o = n[0], i = n[1];
  return [o, function(a) {
    r.current = typeof a != "number" ? ru(0, e.length, r.current + 1) : a, i(e[r.current]);
  }];
}
var wh = function() {
  function e() {
    this.componentControls = new Set();
  }
  return e.prototype.subscribe = function(t) {
    var r = this;
    return this.componentControls.add(t), function() {
      return r.componentControls.delete(t);
    };
  }, e.prototype.start = function(t, r) {
    this.componentControls.forEach(function(n) {
      n.start(t.nativeEvent || t, r);
    });
  }, e.prototype.updateConstraints = function() {
    this.componentControls.forEach(function(t) {
      t.updateLayoutMeasurements(), t.resolveDragConstraints();
    });
  }, e;
}(), H0 = function() {
  return new wh();
};
function Au() {
  return Ae(H0);
}
var Du = function() {
  return {};
}, W0 = tn({ build: function() {
}, measureViewportBox: dt, resetTransform: function() {
}, restoreTransform: function() {
}, removeValueFromRenderState: function() {
}, render: function() {
}, scrapeMotionValuesFromProps: Du, readValueFromInstance: function(e, t, r) {
  return r.initialState[t] || 0;
}, makeTargetAnimatable: function(e, t) {
  var r = t.transition, n = t.transitionEnd, o = he(t, ["transition", "transitionEnd"]), i = Aa(o, r || {}, e);
  return Ia(e, o, i), w({ transition: r, transitionEnd: n }, o);
} }), U0 = _n({ scrapeMotionValuesFromProps: Du, createRenderState: Du });
function Fh(e) {
  var t = Q(react.exports.useState(e), 2), r = t[0], n = t[1], o = U0({}, false), i = Ae(function() {
    return W0({ props: {}, visualState: o }, { initialState: e });
  });
  react.exports.useEffect(function() {
    return i.mount({}), i.unmount();
  }, []), react.exports.useEffect(function() {
    i.setProps({ onUpdate: function(s) {
      return n(w({}, s));
    } });
  });
  var a = Ae(function() {
    return function(s) {
      return Qr(i, s);
    };
  });
  return [r, a];
}
var G0 = 1e5, Eh = function(e) {
  return e > 1e-3 ? 1 / e : G0;
}, Mh = false;
function Ih(e) {
  var t = Je(1), r = Je(1), n = Ui();
  ve(!!(e || n), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), yr(Mh, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), Mh = true, e ? (t = e.scaleX || t, r = e.scaleY || r) : n && (t = n.getValue("scaleX", 1), r = n.getValue("scaleY", 1));
  var o = ts(t, Eh), i = ts(r, Eh);
  return { scaleX: o, scaleY: i };
}
Jr.prototype.addChild = function({ transformer: e = (t) => t }) {
  let t = new Jr(e(this.get()));
  return this.onChange((r) => t.set(e(r))), t;
};
var fe;
(function(e) {
  e.Boolean = "boolean", e.Number = "number", e.String = "string", e.FusedNumber = "fusednumber", e.Enum = "enum", e.SegmentedEnum = "segmentedenum", e.Color = "color", e.Image = "image", e.File = "file", e.ComponentInstance = "componentinstance", e.Array = "array", e.EventHandler = "eventhandler", e.Transition = "transition", e.Object = "object";
})(fe || (fe = {}));
var av = Ro(Ll());
var $0 = { addEventListener: () => {
}, removeEventListener: () => {
}, dispatchEvent: () => false, onpointerdown: false, onpointermove: false, onpointerup: false, ontouchstart: false, ontouchmove: false, ontouchend: false, onmousedown: false, onmousemove: false, onmouseup: false, devicePixelRatio: 1, scrollX: 0, scrollY: 0, location: { href: "" }, setTimeout: () => 0, clearTimeout: () => {
}, setInterval: () => 0, clearInterval: () => {
}, webkitConvertPointFromPageToNode: (e, t) => t }, _ = typeof window == "undefined" ? $0 : window;
function X0(e, t, r = true) {
  let { borderWidth: n, borderStyle: o, borderColor: i } = e;
  if (!n)
    return;
  let a, s, l, u;
  if (typeof n == "number" ? a = s = l = u = n : (a = n.top || 0, s = n.bottom || 0, l = n.left || 0, u = n.right || 0), !(a === 0 && s === 0 && l === 0 && u === 0)) {
    if (r && a === s && a === l && a === u) {
      t.border = `${a}px ${o} ${i}`;
      return;
    }
    t.borderStyle = e.borderStyle, t.borderColor = e.borderColor, t.borderTopWidth = `${a}px`, t.borderBottomWidth = `${s}px`, t.borderLeftWidth = `${l}px`, t.borderRightWidth = `${u}px`;
  }
}
function is(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth)
    return null;
  let r = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: "inherit", pointerEvents: "none" };
  return e.border ? (r.border = e.border, react.exports.createElement(ke.div, { style: r })) : (X0(e, r, false), react.exports.createElement(ke.div, { "data-frame-border": true, style: r, layoutId: t }));
}
var Y0 = "src", et;
(function(t) {
  t.isImageObject = function(r) {
    return !r || typeof r == "string" ? false : Y0 in r;
  };
})(et || (et = {}));
var ti = class {
  constructor() {
    this.observers = new Set();
    this.transactions = {};
  }
  add(t) {
    this.observers.add(t);
    let r = false;
    return () => {
      r || (r = true, this.remove(t));
    };
  }
  remove(t) {
    this.observers.delete(t);
  }
  notify(t, r) {
    if (r) {
      let n = this.transactions[r] || t;
      n.value = t.value, this.transactions[r] = n;
    } else
      this.callObservers(t);
  }
  finishTransaction(t) {
    let r = this.transactions[t];
    return delete this.transactions[t], this.callObservers(r, t);
  }
  callObservers(t, r) {
    let n = [];
    return new Set(this.observers).forEach((o) => {
      typeof o == "function" ? o(t, r) : (o.update(t, r), n.push(o.finish));
    }), n;
  }
};
var Dh = new Set();
function jt(e, ...t) {
  Dh.has(e) || (Dh.add(e), console.warn(e, ...t));
}
function rn(e, t, r) {
  let n = r ? `, use ${r} instead` : "", o = `Deprecation warning: ${e} will be removed in version ${t}${n}.`;
  jt(o);
}
var Ir;
(function(e) {
  e[e.Trace = 0] = "Trace", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error", e[e.NotLogging = 5] = "NotLogging";
})(Ir || (Ir = {}));
var q0 = [":trace", ":debug", ":info", ":warn", ":error"];
function Z0(e, t) {
  for (let r of e.split(/[ ,]/)) {
    let n = r.trim();
    if (n.length === 0)
      continue;
    let o = 1, i = false;
    n.startsWith("-") && (n = n.slice(1), o = 3, i = true);
    for (let s = 0; s <= 4; s++) {
      let l = q0[s];
      if (n.endsWith(l)) {
        o = s, i && (o += 1), n = n.slice(0, n.length - l.length), n.length === 0 && (n = "*");
        break;
      }
    }
    let a = new RegExp("^" + n.replace(/[*]/g, ".*") + "$");
    for (let s of t)
      s.id.match(a) && (s.level = o);
  }
}
var Ar = "app:info", Lh = typeof process != "undefined" && !!process.kill, J0 = Lh && !!{}.CI;
J0 ? Ar = "-:warn" : Lh && (Ar = "");
try {
  typeof window != "undefined" && window.localStorage && (Ar = window.localStorage.logLevel || Ar);
} catch {
}
try {
  typeof process != "undefined" && (Ar = {}.DEBUG || Ar);
} catch {
}
try {
  typeof window != "undefined" && Object.assign(window, { setLogLevel: Oh });
} catch {
}
var Q0 = {}, Vh = [];
function Oh(e, t = true) {
  try {
    typeof window != "undefined" && window.localStorage && (window.localStorage.logLevel = e);
  } catch {
  }
  let r = Ar;
  Ar = e;
  let n = Object.values(Q0);
  for (let o of n)
    o.level = 3;
  if (Z0(e, n), t && Vh.length > 0) {
    console == null || console.log("--- LOG REPLAY ---");
    for (let o of Vh)
      o.logger.level > o.level || (o.level >= 3 ? console == null || console.warn(...o.toMessage()) : console == null || console.log(...o.toMessage()));
    console == null || console.log("--- END OF LOG REPLAY ---");
  }
  return r;
}
var Lu;
(function(e) {
  e.Canvas = "canvasComponent", e.Code = "codeFile", e.Screen = "screen";
})(Lu || (Lu = {}));
function q(e) {
  return rn("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"), ie(e) ? e : new kh(e);
}
(function(o) {
  function e(i) {
    let a = Math.random(), s = new Set();
    i((c, f) => {
      c.set(f, a), s.add(c);
    }, a);
    let u = [];
    s.forEach((c) => {
      u.push(...c.finishTransaction(a));
    }), u.forEach((c) => {
      c(a);
    });
  }
  o.transaction = e;
  function t(i, a = 0) {
    return o.get(i, a);
  }
  o.getNumber = t;
  function r(i, a) {
    return i == null ? a : ie(i) ? i.get() : i;
  }
  o.get = r;
  function n(i) {
    if (!i)
      return i;
    let a = {};
    for (let s in i) {
      let l = i[s];
      ie(l) ? a[s] = l.get() : a[s] = l;
    }
    return a;
  }
  o.objectToValues = n;
})(q || (q = {}));
var _h = "onUpdate", jh = "finishTransaction";
function ie(e) {
  return e !== null && typeof e == "object" && _h in e && e[_h] instanceof Function && jh in e && e[jh] instanceof Function;
}
function rP(e, t) {
  return { interpolate(r, n) {
    let o = r.get(), i = n.get(), a = q(o);
    return (s) => {
      let l = t.interpolate(o, i)(s);
      return a.set(l), a;
    };
  }, difference(r, n) {
    let o = r.get();
    return t.difference(o, n.get());
  } };
}
var kh = class {
  constructor(t) {
    this.value = t;
    this.observers = new ti();
  }
  static interpolationFor(t, r) {
    if (ie(t))
      return rP(t, r);
  }
  get() {
    return this.value;
  }
  set(t, r) {
    let n = this.value;
    ie(t) && (t = t.get()), this.value = t;
    let o = { value: t, oldValue: n };
    this.observers.notify(o, r);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
};
function ri(e) {
  return e instanceof Function;
}
function nn(e) {
  return typeof e == "string";
}
function Bh(e) {
  return typeof e == "number";
}
function as(e) {
  return e instanceof Array;
}
function Nh(e) {
  return typeof e == "object";
}
function nP(e, t) {
  let { _forwardedOverrides: r, id: n } = t, o = r && n ? r[n] : void 0;
  return o && typeof o == "string" && (e = __spreadProps(__spreadValues({}, e), { src: o })), e;
}
function ni(e) {
  let { background: t, image: r } = e;
  if (r !== void 0 && t && !et.isImageObject(t))
    return;
  let n = null;
  if (nn(r) ? n = { src: r } : n = q.get(t, null), !!et.isImageObject(n))
    return nP(n, e);
}
function Zn(e, t) {
  let r = Math.round(Math.abs(t)), n = Math.pow(10, r);
  return Math.round(e * n) / n;
}
function St(e, t) {
  let r = e.toFixed(t);
  return t === 0 ? r : r.replace(/\.?0+$/, "");
}
function ss(e, t) {
  return t === 0 ? Math.round(e) : (t -= t | 0, t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ie(e, t) {
  return { x: e, y: t };
}
(function(p) {
  p.add = (...m) => m.reduce((d, h) => ({ x: d.x + h.x, y: d.y + h.y }), { x: 0, y: 0 }), p.subtract = (m, d) => ({ x: m.x - d.x, y: m.y - d.y }), p.multiply = (m, d) => ({ x: m.x * d, y: m.y * d }), p.divide = (m, d) => ({ x: m.x / d, y: m.y / d }), p.absolute = (m) => ({ x: Math.abs(m.x), y: Math.abs(m.y) }), p.reverse = (m) => ({ x: m.x * -1, y: m.y * -1 }), p.pixelAligned = (m, d = { x: 0, y: 0 }) => ({ x: ss(m.x, d.x), y: ss(m.y, d.y) }), p.distance = (m, d) => {
    let h = Math.abs(m.x - d.x), v = Math.abs(m.y - d.y);
    return Math.sqrt(h * h + v * v);
  }, p.angle = (m, d) => Math.atan2(d.y - m.y, d.x - m.x) * 180 / Math.PI - 90, p.isEqual = (m, d) => m.x === d.x && m.y === d.y, p.rotationNormalizer = () => {
    let m;
    return (d) => {
      typeof m != "number" && (m = d);
      let h = m - d, v = Math.abs(h) + 180, y = Math.floor(v / 360);
      return h < 180 && (d -= y * 360), h > 180 && (d += y * 360), m = d, d;
    };
  };
  function f(m, d) {
    return { x: (m.x + d.x) / 2, y: (m.y + d.y) / 2 };
  }
  p.center = f;
})(Ie || (Ie = {}));
var De;
(function(x) {
  function e(g, R) {
    return g === R ? true : !g || !R ? false : g.x === R.x && g.y === R.y && g.width === R.width && g.height === R.height;
  }
  x.equals = e, x.atOrigin = (g) => __spreadProps(__spreadValues({}, g), { x: 0, y: 0 }), x.fromTwoPoints = (g, R) => ({ x: Math.min(g.x, R.x), y: Math.min(g.y, R.y), width: Math.abs(g.x - R.x), height: Math.abs(g.y - R.y) }), x.fromRect = (g) => ({ x: g.left, y: g.top, width: g.right - g.left, height: g.bottom - g.top }), x.multiply = (g, R) => ({ x: g.x * R, y: g.y * R, width: g.width * R, height: g.height * R }), x.divide = (g, R) => x.multiply(g, 1 / R), x.offset = (g, R) => {
    let O = typeof R.x == "number" ? R.x : 0, Y = typeof R.y == "number" ? R.y : 0;
    return __spreadProps(__spreadValues({}, g), { x: g.x + O, y: g.y + Y });
  };
  function s(g, R) {
    if (R === 0)
      return g;
    let O = 2 * R;
    return { x: g.x - R, y: g.y - R, width: g.width + O, height: g.height + O };
  }
  x.inflate = s, x.pixelAligned = (g) => {
    let R = Math.round(g.x), O = Math.round(g.y), Y = Math.round(g.x + g.width), re = Math.round(g.y + g.height), te = Math.max(Y - R, 0), oe = Math.max(re - O, 0);
    return { x: R, y: O, width: te, height: oe };
  }, x.halfPixelAligned = (g) => {
    let R = Math.round(g.x * 2) / 2, O = Math.round(g.y * 2) / 2, Y = Math.round((g.x + g.width) * 2) / 2, re = Math.round((g.y + g.height) * 2) / 2, te = Math.max(Y - R, 1), oe = Math.max(re - O, 1);
    return { x: R, y: O, width: te, height: oe };
  }, x.round = (g, R = 0) => {
    let O = Zn(g.x, R), Y = Zn(g.y, R), re = Zn(g.width, R), te = Zn(g.height, R);
    return { x: O, y: Y, width: re, height: te };
  }, x.roundToOutside = (g) => {
    let R = Math.floor(g.x), O = Math.floor(g.y), Y = Math.ceil(g.x + g.width), re = Math.ceil(g.y + g.height), te = Math.max(Y - R, 0), oe = Math.max(re - O, 0);
    return { x: R, y: O, width: te, height: oe };
  }, x.minX = (g) => g.x, x.maxX = (g) => g.x + g.width, x.minY = (g) => g.y, x.maxY = (g) => g.y + g.height, x.positions = (g) => ({ minX: g.x, midX: g.x + g.width / 2, maxX: x.maxX(g), minY: g.y, midY: g.y + g.height / 2, maxY: x.maxY(g) }), x.center = (g) => ({ x: g.x + g.width / 2, y: g.y + g.height / 2 }), x.fromPoints = (g) => {
    let R = g.map((Ce) => Ce.x), O = g.map((Ce) => Ce.y), Y = Math.min(...R), re = Math.min(...O), te = Math.max(...R) - Y, oe = Math.max(...O) - re;
    return { x: Y, y: re, width: te, height: oe };
  }, x.merge = (...g) => {
    let R = { x: Math.min(...g.map(x.minX)), y: Math.min(...g.map(x.minY)) }, O = { x: Math.max(...g.map(x.maxX)), y: Math.max(...g.map(x.maxY)) };
    return x.fromTwoPoints(R, O);
  }, x.intersection = (g, R) => {
    let O = Math.max(g.x, R.x), Y = Math.min(g.x + g.width, R.x + R.width), re = Math.max(g.y, R.y), te = Math.min(g.y + g.height, R.y + R.height);
    return { x: O, y: re, width: Y - O, height: te - re };
  }, x.points = (g) => [{ x: x.minX(g), y: x.minY(g) }, { x: x.minX(g), y: x.maxY(g) }, { x: x.maxX(g), y: x.minY(g) }, { x: x.maxX(g), y: x.maxY(g) }], x.transform = (g, R) => {
    let { x: O, y: Y } = R.transformPoint({ x: g.x, y: g.y }), { x: re, y: te } = R.transformPoint({ x: g.x + g.width, y: g.y }), { x: oe, y: Ce } = R.transformPoint({ x: g.x + g.width, y: g.y + g.height }), { x: de, y: ye } = R.transformPoint({ x: g.x, y: g.y + g.height }), qe = Math.min(O, re, oe, de), Re = Math.max(O, re, oe, de) - qe, $ = Math.min(Y, te, Ce, ye), D = Math.max(Y, te, Ce, ye) - $;
    return { x: qe, y: $, width: Re, height: D };
  }, x.containsPoint = (g, R) => !(R.x < x.minX(g) || R.x > x.maxX(g) || R.y < x.minY(g) || R.y > x.maxY(g) || isNaN(g.x) || isNaN(g.y)), x.containsRect = (g, R) => {
    for (let O of x.points(R))
      if (!x.containsPoint(g, O))
        return false;
    return true;
  }, x.toCSS = (g) => ({ display: "block", transform: `translate(${g.x}px, ${g.y}px)`, width: `${g.width}px`, height: `${g.height}px` }), x.inset = (g, R) => ({ x: g.x + R, y: g.y + R, width: Math.max(0, g.width - 2 * R), height: Math.max(0, g.height - 2 * R) }), x.intersects = (g, R) => !(R.x >= x.maxX(g) || x.maxX(R) <= g.x || R.y >= x.maxY(g) || x.maxY(R) <= g.y), x.overlapHorizontally = (g, R) => {
    let O = x.maxX(g), Y = x.maxX(R);
    return O > R.x && Y > g.x;
  }, x.overlapVertically = (g, R) => {
    let O = x.maxY(g), Y = x.maxY(R);
    return O > R.y && Y > g.y;
  }, x.doesNotIntersect = (g, R) => R.find((O) => x.intersects(O, g)) === void 0, x.isEqual = (g, R) => {
    if (g && R) {
      let { x: O, y: Y, width: re, height: te } = g;
      return R.x === O && R.y === Y && R.width === re && R.height === te;
    } else
      return g === R;
  }, x.cornerPoints = (g) => {
    let R = g.x, O = g.x + g.width, Y = g.y, re = g.y + g.height;
    return [{ x: R, y: Y }, { x: O, y: Y }, { x: O, y: re }, { x: R, y: re }];
  }, x.midPoints = (g) => {
    let R = g.x, O = g.x + g.width / 2, Y = g.x + g.width, re = g.y, te = g.y + g.height / 2, oe = g.y + g.height;
    return [{ x: O, y: re }, { x: Y, y: te }, { x: O, y: oe }, { x: R, y: te }];
  }, x.pointDistance = (g, R) => {
    let O = 0, Y = 0;
    return R.x < g.x ? O = g.x - R.x : R.x > x.maxX(g) && (O = R.x - x.maxX(g)), R.y < g.y ? Y = g.y - R.y : R.y > x.maxY(g) && (Y = R.y - x.maxY(g)), Ie.distance({ x: O, y: Y }, { x: 0, y: 0 });
  };
  let G = { x: 0, y: 0, width: 0, height: 0 };
  x.fromAny = (g, R = G) => ({ x: g.x || R.x, y: g.y || R.y, width: g.width || R.width, height: g.height || R.height });
})(De || (De = {}));
function V(e) {
  return typeof e == "number" && isFinite(e);
}
function oP(e) {
  return V(e) ? e : void 0;
}
function iP(e) {
  return !e || !Object.keys(e).length && e.constructor === Object;
}
function Ft(e) {
  return typeof e != "string" && typeof e != "number";
}
function Et(e) {
  return e !== null && typeof e != "undefined" && typeof e != "boolean" && !iP(e);
}
var Hh = { left: null, right: null, top: null, bottom: null, centerX: "50%", centerY: "50%", aspectRatio: null, parentSize: null, width: 100, height: 100 }, z;
(function(e) {
  e[e.FixedNumber = 0] = "FixedNumber", e[e.Percentage = 1] = "Percentage", e[e.Auto = 2] = "Auto", e[e.FractionOfFreeSpace = 3] = "FractionOfFreeSpace";
})(z || (z = {}));
function zh(e) {
  return !(!Et(e) || !Ft(e));
}
var Jn;
(function(t) {
  t.quickfix = (r) => ((r.widthType === 2 || r.heightType === 2) && (r.aspectRatio = null), V(r.aspectRatio) && ((r.left && r.right || r.top && r.bottom) && (r.widthType = 0, r.heightType = 0), r.left && r.right && r.top && r.bottom && (r.bottom = false), r.widthType !== 0 && r.heightType !== 0 && (r.heightType = 0)), r.left && r.right && ((r.fixedSize || r.widthType === 2) && (r.right = false), r.widthType = 0), r.top && r.bottom && ((r.fixedSize || r.heightType === 2) && (r.bottom = false), r.heightType = 0), r);
})(Jn || (Jn = {}));
function Qn(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto")
      return 2;
    if (t.endsWith("fr"))
      return 3;
    if (t.endsWith("%"))
      return 1;
  }
  return 0;
}
var st;
(function(o) {
  o.fromProperties = (i) => {
    let { left: a, right: s, top: l, bottom: u, width: c, height: f, centerX: p, centerY: m, aspectRatio: d, autoSize: h } = i, v = Jn.quickfix({ left: V(a) || ie(a), right: V(s) || ie(s), top: V(l) || ie(l), bottom: V(u) || ie(u), widthType: Qn(c), heightType: Qn(f), aspectRatio: d || null, fixedSize: h === true }), y = null, P = null, C = 0, b = 0;
    if (v.widthType !== 0 && typeof c == "string") {
      let I = parseFloat(c);
      c.endsWith("fr") ? (C = 3, y = I) : c === "auto" ? C = 2 : (C = 1, y = I / 100);
    } else
      c !== void 0 && typeof c != "string" && (y = q.getNumber(c));
    if (v.heightType !== 0 && typeof f == "string") {
      let I = parseFloat(f);
      f.endsWith("fr") ? (b = 3, P = I) : f === "auto" ? b = 2 : (b = 1, P = parseFloat(f) / 100);
    } else
      f !== void 0 && typeof f != "string" && (P = q.getNumber(f));
    let T = 0.5, F = 0.5;
    return p && (T = parseFloat(p) / 100), m && (F = parseFloat(m) / 100), { left: v.left ? q.getNumber(a) : null, right: v.right ? q.getNumber(s) : null, top: v.top ? q.getNumber(l) : null, bottom: v.bottom ? q.getNumber(u) : null, widthType: C, heightType: b, width: y, height: P, aspectRatio: v.aspectRatio || null, centerAnchorX: T, centerAnchorY: F };
  }, o.toMinSize = (i, a, s = null) => {
    let l = null, u = null, c = a ? a.width : null, f = a ? a.height : null, p = eo(i.left, i.right);
    if (c && V(p))
      l = c - p;
    else if (s && i.widthType === 2)
      l = s.width;
    else if (V(i.width))
      switch (i.widthType) {
        case 0:
          l = i.width;
          break;
        case 3:
          l = 0;
          break;
        case 1:
          c && (l = c * i.width);
          break;
      }
    let m = eo(i.top, i.bottom);
    if (f && V(m))
      u = f - m;
    else if (s && i.heightType === 2)
      u = s.height;
    else if (V(i.height))
      switch (i.heightType) {
        case 0:
          u = i.height;
          break;
        case 3:
          u = 0;
          break;
        case 1:
          f && (u = f * i.height);
          break;
      }
    return Ou(l, u, i);
  }, o.toSize = (i, a, s, l) => {
    let u = null, c = null, f = a ? q.getNumber(a.width) : null, p = a ? q.getNumber(a.height) : null, m = eo(i.left, i.right);
    if (f && V(m))
      u = f - m;
    else if (s && i.widthType === 2)
      u = s.width;
    else if (V(i.width))
      switch (i.widthType) {
        case 0:
          u = i.width;
          break;
        case 3:
          u = l ? l.freeSpaceInParent.width / l.freeSpaceUnitDivisor.width * i.width : 0;
          break;
        case 1:
          f && (u = f * i.width);
          break;
      }
    let d = eo(i.top, i.bottom);
    if (p && V(d))
      c = p - d;
    else if (s && i.heightType === 2)
      c = s.height;
    else if (V(i.height))
      switch (i.heightType) {
        case 0:
          c = i.height;
          break;
        case 3:
          c = l ? l.freeSpaceInParent.height / l.freeSpaceUnitDivisor.height * i.height : 0;
          break;
        case 1:
          p && (c = p * i.height);
          break;
      }
    return Ou(u, c, i);
  }, o.toRect = (i, a, s = null, l = false, u = null) => {
    let c = i.left || 0, f = i.top || 0, p = null, m = null, d = a ? q.getNumber(a.width) : null, h = a ? q.getNumber(a.height) : null, v = eo(i.left, i.right);
    if (d && V(v))
      p = d - v;
    else if (s && i.widthType === 2)
      p = s.width;
    else if (V(i.width))
      switch (i.widthType) {
        case 0:
          p = i.width;
          break;
        case 3:
          p = u ? u.freeSpaceInParent.width / u.freeSpaceUnitDivisor.width * i.width : null;
          break;
        case 1:
          d && (p = d * i.width);
          break;
      }
    let y = eo(i.top, i.bottom);
    if (h && V(y))
      m = h - y;
    else if (s && i.heightType === 2)
      m = s.height;
    else if (V(i.height))
      switch (i.heightType) {
        case 0:
          m = i.height;
          break;
        case 3:
          m = u ? u.freeSpaceInParent.height / u.freeSpaceUnitDivisor.height * i.height : null;
          break;
        case 1:
          h && (m = h * i.height);
          break;
      }
    let P = Ou(p, m, i);
    p = P.width, m = P.height, i.left !== null ? c = i.left : d && i.right !== null ? c = d - i.right - p : d && (c = i.centerAnchorX * d - p / 2), i.top !== null ? f = i.top : h && i.bottom !== null ? f = h - i.bottom - m : h && (f = i.centerAnchorY * h - m / 2);
    let C = { x: c, y: f, width: p, height: m };
    return l ? De.pixelAligned(C) : C;
  };
})(st || (st = {}));
var aP = 200, sP = 200;
function Ou(e, t, r) {
  let n = V(e) ? e : aP, o = V(t) ? t : sP;
  return V(r.aspectRatio) && r.aspectRatio > 0 && (V(r.left) && V(r.right) ? o = n / r.aspectRatio : V(r.top) && V(r.bottom) ? n = o * r.aspectRatio : r.widthType !== 0 ? o = n / r.aspectRatio : n = o * r.aspectRatio), { width: n, height: o };
}
function eo(e, t) {
  return !V(e) || !V(t) ? null : e + t;
}
function lP(e, t) {
  let r = {};
  return e.constraints ? r.constraints = __spreadValues(__spreadValues({}, e.constraints), t) : Object.assign(r, t), r;
}
function ku(e) {
  return typeof e == "string";
}
function mP(e) {
  let { left: t, right: r, top: n, bottom: o, center: i } = e;
  return !!([r, o].some(ku) || ku(t) && (!i || i === "y") || ku(n) && (!i || i === "x"));
}
function Yt(e) {
  let { _constraints: t } = e;
  return !t || mP(e) ? false : t.enabled;
}
function dP(e) {
  let { size: t } = e, { width: r, height: n } = e;
  return V(t) && (r === void 0 && (r = t), n === void 0 && (n = t)), V(r) && V(n) ? { width: r, height: n } : null;
}
function hP(e) {
  let t = dP(e);
  if (t === null)
    return null;
  let { left: r, top: n } = e;
  return V(r) && V(n) ? __spreadValues({ x: r, y: n }, t) : null;
}
function on(e, t, r = true) {
  if (!Yt(e) || t === Me.Disabled || t === Me.DisabledForCurrentLevel)
    return hP(e);
  let n = gP(e);
  return st.toRect(n, oi(t), null, r);
}
function gP(e) {
  let { left: t, right: r, top: n, bottom: o, center: i, _constraints: a, size: s } = e, { width: l, height: u } = e;
  l === void 0 && (l = s), u === void 0 && (u = s);
  let { aspectRatio: c, autoSize: f } = a, p = Jn.quickfix({ left: V(t), right: V(r), top: V(n), bottom: V(o), widthType: Qn(l), heightType: Qn(u), aspectRatio: c || null, fixedSize: f === true }), m = null, d = null, h = z.FixedNumber, v = z.FixedNumber;
  if (p.widthType !== z.FixedNumber && typeof l == "string") {
    let C = parseFloat(l);
    l.endsWith("fr") ? (h = z.FractionOfFreeSpace, m = C) : l === "auto" ? h = z.Auto : (h = z.Percentage, m = C / 100);
  } else
    l !== void 0 && typeof l != "string" && (m = l);
  if (p.heightType !== z.FixedNumber && typeof u == "string") {
    let C = parseFloat(u);
    u.endsWith("fr") ? (v = z.FractionOfFreeSpace, d = C) : u === "auto" ? v = z.Auto : (v = z.Percentage, d = parseFloat(u) / 100);
  } else
    u !== void 0 && typeof u != "string" && (d = u);
  let y = 0.5, P = 0.5;
  return (i === true || i === "x") && (p.left = false, typeof t == "string" && (y = parseFloat(t) / 100)), (i === true || i === "y") && (p.top = false, typeof n == "string" && (P = parseFloat(n) / 100)), { left: p.left ? t : null, right: p.right ? r : null, top: p.top ? n : null, bottom: p.bottom ? o : null, widthType: h, heightType: v, width: m, height: d, aspectRatio: p.aspectRatio || null, centerAnchorX: y, centerAnchorY: P };
}
var Me;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.DisabledForCurrentLevel = 2] = "DisabledForCurrentLevel";
})(Me || (Me = {}));
var ii = react.exports.createContext({ size: 0 });
function oi(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Dr() {
  return react.exports.useContext(ii).size;
}
function vP(e) {
  return typeof e == "object";
}
var ls = (e) => {
  let t = Dr(), { parentSize: r, children: n } = e, o = vP(r) ? [r.width, r.height] : [r, -1], i = react.exports.useMemo(() => ({ size: r }), o);
  return t === 1 ? n ? react.exports.createElement(react.exports.Fragment, null, n) : null : react.exports.createElement(ii.Provider, { value: i }, n);
}, Wh = ii.Consumer;
function us(e, t) {
  return react.exports.createElement(ls, { parentSize: t }, e);
}
function Uh(e) {
  let t = Dr();
  return on(e, t);
}
var Gh = new Set(), ai;
function cs(e) {
  Gh.has(e) || typeof document == "undefined" || (Gh.add(e), ai || (ai = document.createElement("style"), ai.type = "text/css", document.head && document.head.appendChild(ai)), ai.appendChild(document.createTextNode(e)));
}
var L;
(function(e) {
  e.canvas = "CANVAS", e.export = "EXPORT", e.thumbnail = "THUMBNAIL", e.preview = "PREVIEW";
})(L || (L = {}));
var ge = { imageBaseURL: "", target: L.preview, zoom: 1 };
function yP(e, t) {
  let r = Object.assign({}, ge);
  Object.assign(ge, e);
  let n = t();
  return Object.assign(ge, r), n;
}
function bP(e) {
  Object.assign(ge, e);
}
function xP(e, t, r) {
  let n = false;
  return ge.imageBaseURL !== t && (ge.imageBaseURL = t, n = true), ge.target !== e && (ge.target = e, n = true), ge.zoom !== r && (ge.zoom = r), { willChangeElements: n };
}
(function(r) {
  function e() {
    return ge.target;
  }
  r.current = e;
  function t() {
    let n = ge.target;
    return n === r.canvas || n === r.export;
  }
  r.hasRestrictions = t;
})(L || (L = {}));
var SP = `

[data-framer-component-type] {
    position: absolute;
}
`, CP = `
[data-framer-component-type="Text"] {
    cursor: inherit;
}

[data-framer-component-text-autosized] * {
    white-space: pre;
}
`, PP = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-stack-gap] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-stack-gap] > [data-framer-component-type] {
    position: relative;
}

[data-framer-stack-gap] > * {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}

/* This should take the language direction into account */
[data-framer-stack-direction-reverse="false"]
[data-framer-stack-gap]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-stack-gap]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}

/* This should take the language direction into account */
[data-framer-stack-direction-reverse="false"]
[data-framer-stack-gap]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-stack-gap]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}
`, TP = `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}
`, wP = `
[data-framer-component-type="Scroll"]::-webkit-scrollbar {
    display: none;
}
[data-framer-component-type="ScrollContentWrapper"] > * {
    position: relative;
}
`, RP = `
[data-framer-component-type="PageContentWrapper"] > *,
[data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] {
    position: relative;
}
`, FP = `
[data-is-present="false"], [data-is-present="false"] * {
    pointer-events: none !important;
}
`, EP = `
[data-framer-cursor="pointer"] {
    cursor: pointer;
}
[data-framer-cursor="grab"] {
    cursor: grab;
}
[data-framer-cursor="grab"]:active {
    cursor: grabbing;
}
`, MP = `
${SP}
${CP}
${PP}
${TP}
${wP}
${RP}
${FP}
${EP}
`, $h = () => L.current() === L.preview, IP = () => $h() ? ' [data-framer-component-type="Frame"] * { pointer-events: auto; } ' : "", AP = () => $h() ? `
        body :not(input):not(textarea):not([contenteditable="true"]) {
            user-select: none;
            -webkit-user-select: none;
        }

        [data-framer-component-type="Text"], [data-framer-component-type="Text"] * {
        pointer-events: none !important;
        user-select: none;
        -webkit-user-select: none;
    }` : "", Mt = () => {
  cs(MP), cs(AP()), cs(IP());
};
function ps(e, t) {
  if (!t && (t = e.children, !t))
    return { props: e, children: t };
  let r = e._forwardedOverrides, n = e._overrideForwardingDescription;
  if (n) {
    r = void 0;
    for (let o in n) {
      let i = n[o];
      e[i] !== void 0 && (r || (r = {}, e = __spreadValues({}, e)), r[o] = e[i], delete e[i]);
    }
  }
  return r ? (t = react.exports.Children.map(t, (o) => react.exports.isValidElement(o) ? react.exports.cloneElement(o, { _forwardedOverrides: r }) : o), { props: e, children: t }) : { props: e, children: t };
}
function cr(e, t, r, n = false) {
  let [o, i] = t, [a, s] = r, l = a + (e - o) / (i - o) * (s - a);
  if (n === true)
    if (a < s) {
      if (l < a)
        return a;
      if (l > s)
        return s;
    } else {
      if (l > a)
        return a;
      if (l < s)
        return s;
    }
  return l;
}
function Lr(e) {
  return !isNaN(e) && isFinite(e);
}
function pr(e) {
  let t = fs(e);
  return t !== void 0 ? e.includes("%") ? t / 100 : t : 0;
}
function fs(e) {
  let t = e.match(/\d?\.?\d+/);
  return t ? Number(t[0]) : void 0;
}
var ms = Ro(Yh());
var xe;
(function(e) {
  e.RGB = "rgb", e.HSL = "hsl", e.HSV = "hsv", e.HEX = "hex", e.NAME = "name";
})(xe || (xe = {}));
var tt;
(function(e) {
  e.RGB = "rgb", e.RGBA = "rgba", e.HSL = "hsl", e.HSLA = "hsla", e.HUSL = "husl";
})(tt || (tt = {}));
var to = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function Kh(e, t, r) {
  let [n, o, i] = (0, ms.rgbToHsluv)([e / 255, t / 255, r / 255]);
  return { h: n, s: o, l: i };
}
function qh(e, t, r, n = 1) {
  let o = (0, ms.hsluvToRgb)([e, t, r]);
  return { r: o[0] * 255, g: o[1] * 255, b: o[2] * 255, a: n };
}
function _u(e, t, r, n) {
  let o = Math.round(e), i = Math.round(t * 100), a = Math.round(r * 100);
  return n === void 0 || n === 1 ? "hsv(" + o + ", " + i + "%, " + a + "%)" : "hsva(" + o + ", " + i + "%, " + a + "%, " + n + ")";
}
function Zh(e, t, r) {
  return { r: Lr(e) ? lt(e, 255) * 255 : 0, g: Lr(t) ? lt(t, 255) * 255 : 0, b: Lr(r) ? lt(r, 255) * 255 : 0 };
}
function Bu(e, t, r, n) {
  let o = [ju(Math.round(e).toString(16)), ju(Math.round(t).toString(16)), ju(Math.round(r).toString(16))];
  return n && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ds(e, t, r) {
  let n, o, i = lt(e, 255), a = lt(t, 255), s = lt(r, 255), l = Math.max(i, a, s), u = Math.min(i, a, s), c = o = n = (l + u) / 2;
  if (l === u)
    c = o = 0;
  else {
    let f = l - u;
    switch (o = n > 0.5 ? f / (2 - l - u) : f / (l + u), l) {
      case i:
        c = (a - s) / f + (a < s ? 6 : 0);
        break;
      case a:
        c = (s - i) / f + 2;
        break;
      case s:
        c = (i - a) / f + 4;
        break;
    }
    c /= 6;
  }
  return { h: c * 360, s: o, l: n };
}
function Nu(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Jh(e, t, r) {
  let n, o, i;
  if (e = lt(e, 360), t = lt(t * 100, 100), r = lt(r * 100, 100), t === 0)
    n = o = i = r;
  else {
    let a = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - a;
    n = Nu(s, a, e + 1 / 3), o = Nu(s, a, e), i = Nu(s, a, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function Hu(e, t, r) {
  e = lt(e, 255), t = lt(t, 255), r = lt(r, 255);
  let n = Math.max(e, t, r), o = Math.min(e, t, r), i = n - o, a, s = n === 0 ? 0 : i / n, l = n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (t - r) / i + (t < r ? 6 : 0);
        break;
      case t:
        a = (r - e) / i + 2;
        break;
      case r:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: l };
}
function Qh(e, t, r) {
  e = lt(e, 360) * 6, t = lt(t * 100, 100), r = lt(r * 100, 100);
  let n = Math.floor(e), o = e - n, i = r * (1 - t), a = r * (1 - o * t), s = r * (1 - (1 - o) * t), l = n % 6, u = [r, a, i, i, s, r][l], c = [s, r, r, a, i, i][l], f = [i, i, s, r, r, a][l];
  return { r: u * 255, g: c * 255, b: f * 255 };
}
function lt(e, t) {
  let r, n;
  if (typeof t == "string" ? r = parseFloat(t) : r = t, typeof e == "string") {
    kP(e) && (e = "100%");
    let o = _P(e);
    n = Math.min(r, Math.max(0, parseFloat(e))), o && (n = Math.floor(n * r) / 100);
  } else
    n = e;
  return Math.abs(n - r) < 1e-6 ? 1 : n % r / r;
}
function kP(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function _P(e) {
  return typeof e == "string" && e.includes("%");
}
function ju(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Kt = function() {
  let e = "[-\\+]?\\d+%?", r = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:" + e + ")", n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?", o = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?";
  return { rgb: new RegExp("rgb" + n), rgba: new RegExp("rgba" + o), hsl: new RegExp("hsl" + n), hsla: new RegExp("hsla" + o), hsv: new RegExp("hsv" + n), hsva: new RegExp("hsva" + o), hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
}();
function si(e) {
  if (e.includes("gradient(") || e.includes("var("))
    return false;
  let t = /^[\s,#]+/, r = /\s+$/, n = e.replace(t, "").replace(r, "").toLowerCase(), o = false;
  if (to[n] && (n = to[n], o = true), n === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: xe.NAME };
  let i;
  return (i = Kt.rgb.exec(n)) ? { r: parseInt(i[1]), g: parseInt(i[2]), b: parseInt(i[3]), a: 1, format: xe.RGB } : (i = Kt.rgba.exec(n)) ? { r: parseInt(i[1]), g: parseInt(i[2]), b: parseInt(i[3]), a: parseFloat(i[4]), format: xe.RGB } : (i = Kt.hsl.exec(n)) ? { h: parseInt(i[1]), s: pr(i[2]), l: pr(i[3]), a: 1, format: xe.HSL } : (i = Kt.hsla.exec(n)) ? { h: parseInt(i[1]), s: pr(i[2]), l: pr(i[3]), a: parseFloat(i[4]), format: xe.HSL } : (i = Kt.hsv.exec(n)) ? { h: parseInt(i[1]), s: pr(i[2]), v: pr(i[3]), a: 1, format: xe.HSV } : (i = Kt.hsva.exec(n)) ? { h: parseInt(i[1]), s: pr(i[2]), v: pr(i[3]), a: parseFloat(i[4]), format: xe.HSV } : (i = Kt.hex8.exec(n)) ? { r: Ct(i[1]), g: Ct(i[2]), b: Ct(i[3]), a: eg(i[4]), format: o ? xe.NAME : xe.HEX } : (i = Kt.hex6.exec(n)) ? { r: Ct(i[1]), g: Ct(i[2]), b: Ct(i[3]), a: 1, format: o ? xe.NAME : xe.HEX } : (i = Kt.hex4.exec(n)) ? { r: Ct(`${i[1]}${i[1]}`), g: Ct(`${i[2]}${i[2]}`), b: Ct(`${i[3]}${i[3]}`), a: eg(i[4] + "" + i[4]), format: o ? xe.NAME : xe.HEX } : (i = Kt.hex3.exec(n)) ? { r: Ct(`${i[1]}${i[1]}`), g: Ct(`${i[2]}${i[2]}`), b: Ct(`${i[3]}${i[3]}`), a: 1, format: o ? xe.NAME : xe.HEX } : false;
}
function Ct(e) {
  return parseInt(e, 16);
}
function eg(e) {
  return Ct(e) / 255;
}
var tg = new Map();
function B(e, t, r, n) {
  if (typeof e == "string") {
    let i = tg.get(e);
    return i || (i = rg(e), i === void 0 ? __spreadProps(__spreadValues({}, B("black")), { isValid: false }) : (tg.set(e, i), i));
  }
  let o = rg(e, t, r, n);
  return o !== void 0 ? o : __spreadProps(__spreadValues({}, B("black")), { isValid: false });
}
function rg(e, t, r, n) {
  if (e === "")
    return;
  let o = jP(e, t, r, n);
  if (o) {
    let i = { r: o.r, g: o.g, b: o.b, a: o.a, h: o.h, s: o.s, l: o.l, initialValue: typeof e == "string" && o.format !== xe.HSV ? e : void 0, roundA: Math.round(100 * o.a) / 100, format: o.format, mix: B.mix, toValue: () => B.toRgbString(i) };
    return i;
  } else
    return;
}
(function(G) {
  function e(S, x) {
    return S.format === xe.HSL ? `<${S.constructor.name} h:${S.h} s:${S.s} l:${S.l} a:${S.a}>` : S.format === xe.HEX || S.format === xe.NAME ? `<${S.constructor.name} "${x}">` : `<${S.constructor.name} r:${S.r} g:${S.g} b:${S.b} a:${S.a}>`;
  }
  G.inspect = e;
  function t(S) {
    return typeof S == "string" ? G.isColorString(S) : G.isColorObject(S);
  }
  G.isColor = t;
  function r(S) {
    return typeof S == "string" ? si(S) !== false : false;
  }
  G.isColorString = r;
  function n(S) {
    return S && typeof S != "string" && typeof S.r == "number" && typeof S.g == "number" && typeof S.b == "number" && typeof S.h == "number" && typeof S.s == "number" && typeof S.l == "number" && typeof S.a == "number" && typeof S.roundA == "number" && typeof S.format == "string";
  }
  G.isColorObject = n;
  function o(S) {
    return G.toRgbString(S);
  }
  G.toString = o;
  function i(S, x = false) {
    return Bu(S.r, S.g, S.b, x);
  }
  G.toHex = i;
  function a(S, x = false) {
    return `#${G.toHex(S, x)}`;
  }
  G.toHexString = a;
  function s(S) {
    return S.a === 1 ? "rgb(" + Math.round(S.r) + ", " + Math.round(S.g) + ", " + Math.round(S.b) + ")" : "rgba(" + Math.round(S.r) + ", " + Math.round(S.g) + ", " + Math.round(S.b) + ", " + S.roundA + ")";
  }
  G.toRgbString = s;
  function l(S) {
    return __spreadProps(__spreadValues({}, Kh(S.r, S.g, S.b)), { a: S.roundA });
  }
  G.toHusl = l;
  function u(S) {
    let x = G.toHsl(S), g = Math.round(x.h), R = Math.round(x.s * 100), O = Math.round(x.l * 100);
    return S.a === 1 ? "hsl(" + g + ", " + R + "%, " + O + "%)" : "hsla(" + g + ", " + R + "%, " + O + "%, " + S.roundA + ")";
  }
  G.toHslString = u;
  function c(S) {
    let x = Hu(S.r, S.g, S.b);
    return { h: x.h * 360, s: x.s, v: x.v, a: S.a };
  }
  G.toHsv = c;
  function f(S) {
    let x = Hu(S.r, S.g, S.b), g = Math.round(x.h * 360), R = Math.round(x.s * 100), O = Math.round(x.v * 100);
    return S.a === 1 ? "hsv(" + g + ", " + R + "%, " + O + "%)" : "hsva(" + g + ", " + R + "%, " + O + "%, " + S.roundA + ")";
  }
  G.toHsvString = f;
  function p(S) {
    if (S.a === 0)
      return "transparent";
    if (S.a < 1)
      return false;
    let x = Bu(S.r, S.g, S.b, true);
    for (let g of Object.keys(to))
      if (to[g] === x)
        return g;
    return false;
  }
  G.toName = p;
  function m(S) {
    return { h: Math.round(S.h), s: S.s, l: S.l, a: S.a };
  }
  G.toHsl = m;
  function d(S) {
    return { r: Math.round(S.r), g: Math.round(S.g), b: Math.round(S.b), a: S.a };
  }
  G.toRgb = d;
  function h(S, x = 10) {
    let g = G.toRgb(S);
    return g.r = Math.max(0, Math.min(255, g.r - Math.round(255 * -(x / 100)))), g.g = Math.max(0, Math.min(255, g.g - Math.round(255 * -(x / 100)))), g.b = Math.max(0, Math.min(255, g.b - Math.round(255 * -(x / 100)))), G(g);
  }
  G.brighten = h;
  function v(S, x = 10) {
    let g = G.toHsl(S);
    return g.l += x / 100, g.l = Math.min(1, Math.max(0, g.l)), G(g);
  }
  G.lighten = v;
  function y(S, x = 10) {
    let g = G.toHsl(S);
    return g.l -= x / 100, g.l = Math.min(1, Math.max(0, g.l)), G(g);
  }
  G.darken = y;
  function P(S, x = 10) {
    let g = G.toHsl(S);
    return g.s += x / 100, g.s = Math.min(1, Math.max(0, g.s)), G(g);
  }
  G.saturate = P;
  function C(S, x = 10) {
    let g = G.toHsl(S);
    return g.s -= x / 100, g.s = Math.min(1, Math.max(0, g.s)), G(g);
  }
  G.desaturate = C;
  function b(S) {
    return G.desaturate(S, 100);
  }
  G.grayscale = b;
  function T(S, x) {
    let g = G.toHsl(S);
    return g.h += x, g.h = g.h > 360 ? g.h - 360 : g.h, G(g);
  }
  G.hueRotate = T;
  function F(S, x = 1) {
    return G({ r: S.r, g: S.g, b: S.b, a: x });
  }
  G.alpha = F;
  function I(S) {
    return G.alpha(S, 0);
  }
  G.transparent = I;
  function A(S, x = 1) {
    return G({ r: S.r, g: S.g, b: S.b, a: S.a * x });
  }
  G.multiplyAlpha = A;
  function E(S, x, g = tt.RGB) {
    if (!G.isColorObject(S) || !G.isColorObject(x))
      throw new TypeError("Both arguments for Color.interpolate must be Color objects");
    return (R) => G.mixAsColor(S, x, R, false, g);
  }
  G.interpolate = E;
  function k(S, x, { model: g = tt.RGB } = {}) {
    let R = typeof S == "string" ? G(S) : S, O = G.interpolate(R, x, g);
    return (Y) => G.toRgbString(O(Y));
  }
  G.mix = k;
  function W(S, x, g = 0.5, R = false, O = tt.RGB) {
    let Y = null;
    if (zu.isRGB(O))
      Y = G({ r: cr(g, [0, 1], [S.r, x.r], R), g: cr(g, [0, 1], [S.g, x.g], R), b: cr(g, [0, 1], [S.b, x.b], R), a: cr(g, [0, 1], [S.a, x.a], R) });
    else {
      let re, te;
      zu.isHSL(O) ? (re = G.toHsl(S), te = G.toHsl(x)) : (re = G.toHusl(S), te = G.toHusl(x)), re.s === 0 ? re.h = te.h : te.s === 0 && (te.h = re.h);
      let oe = re.h, Ce = te.h, de = Ce - oe;
      de > 180 ? de = Ce - 360 - oe : de < -180 && (de = Ce + 360 - oe);
      let ye = { h: cr(g, [0, 1], [oe, oe + de], R), s: cr(g, [0, 1], [re.s, te.s], R), l: cr(g, [0, 1], [re.l, te.l], R), a: cr(g, [0, 1], [S.a, x.a], R) };
      zu.isHSL(O) ? Y = G(ye) : Y = G(qh(ye.h, ye.s, ye.l, ye.a));
    }
    return Y;
  }
  G.mixAsColor = W;
  function K(S = 1) {
    function x() {
      return Math.floor(Math.random() * 255);
    }
    return G("rgba(" + x() + ", " + x() + ", " + x() + ", " + S + ")");
  }
  G.random = K;
  function U(S = 0.5, x = 1) {
    return S = Math.floor(S * 255), G("rgba(" + S + ", " + S + ", " + S + ", " + x + ")");
  }
  G.grey = U, G.gray = G.grey;
  function ee(S, x, g) {
    return ds(S, x, g);
  }
  G.rgbToHsl = ee, G.isValidColorProperty = function(S, x) {
    return !!((S.toLowerCase().slice(-5) === "color" || S === "fill" || S === "stroke") && typeof x == "string" && G.isColorString(x));
  };
  function X(S, x) {
    let g = (S.r + x.r) / 2, R = S.r - x.r, O = S.g - x.g, Y = S.b - x.b, re = Math.pow(R, 2), te = Math.pow(O, 2), oe = Math.pow(Y, 2);
    return Math.sqrt(2 * re + 4 * te + 3 * oe + g * (re - oe) / 256);
  }
  G.difference = X;
  function ae(S, x, g = 0.1) {
    return !(Math.abs(S.r - x.r) >= g || Math.abs(S.g - x.g) >= g || Math.abs(S.b - x.b) >= g || Math.abs(S.a - x.a) * 256 >= g);
  }
  G.equal = ae;
})(B || (B = {}));
var zu = { isRGB(e) {
  return e === tt.RGB || e === tt.RGBA;
}, isHSL(e) {
  return e === tt.HSL || e === tt.HSLA;
} };
function jP(e, t, r, n = 1) {
  let o;
  return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof r == "number" && !Number.isNaN(r) ? o = Wu({ r: e, g: t, b: r, a: n }) : typeof e == "string" ? o = BP(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? o = Wu(e) : o = ng(e)), o;
}
function BP(e) {
  let t = si(e);
  if (t)
    return t.format === xe.HSL ? ng(t) : t.format === xe.HSV ? NP(t) : Wu(t);
}
function NP(e) {
  let t = Qh(e.h, e.s, e.v);
  return __spreadProps(__spreadValues(__spreadValues({}, ds(t.r, t.g, t.b)), t), { format: xe.RGB, a: e.a !== void 0 ? og(e.a) : 1 });
}
function Wu(e) {
  let t = Zh(e.r, e.g, e.b);
  return __spreadProps(__spreadValues(__spreadValues({}, ds(t.r, t.g, t.b)), t), { format: xe.RGB, a: e.a !== void 0 ? og(e.a) : 1 });
}
function ng(e) {
  let t, r, n, o = { r: 0, g: 0, b: 0 }, i = { h: 0, s: 0, l: 0 };
  return t = Lr(e.h) ? e.h : 0, t = (t + 360) % 360, r = Lr(e.s) ? e.s : 1, typeof e.s == "string" && (r = fs(e.s)), n = Lr(e.l) ? e.l : 0.5, typeof e.l == "string" && (n = fs(e.l)), o = Jh(t, r, n), i = { h: t, s: r, l: n }, __spreadProps(__spreadValues(__spreadValues({}, o), i), { a: e.a === void 0 ? 1 : e.a, format: xe.HSL });
}
function og(e) {
  return e = parseFloat(e), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e;
}
var ot;
(function(C) {
  function e(b, T) {
    return B.toHslString(B.hueRotate(B(b), T));
  }
  C.hueRotate = e;
  function t(b, T) {
    return B.toRgbString(B.alpha(B(b), T));
  }
  C.setAlpha = t;
  function r(b) {
    let T = si(b);
    return T ? T.a : 1;
  }
  C.getAlpha = r;
  function n(b, T) {
    return B.toRgbString(B.multiplyAlpha(B(b), T));
  }
  C.multiplyAlpha = n;
  function o(b) {
    return B.toHexString(B(b)).toUpperCase();
  }
  C.toHex = o;
  function i(b) {
    return B.toRgb(B(b));
  }
  C.toRgb = i;
  function a(b) {
    return B.toRgbString(B(b));
  }
  C.toRgbString = a;
  function s(b) {
    return B.toHsv(B(b));
  }
  C.toHSV = s;
  function l(b) {
    return B.toHsl(B(b));
  }
  C.toHSL = l;
  function u(b) {
    return B.toHslString(B(b));
  }
  C.toHslString = u;
  function c(b) {
    return B.toHsvString(B(b));
  }
  C.toHsvString = c;
  function f(b) {
    return B.toHslString(B(_u(b.h, b.s, b.v, b.a)));
  }
  C.hsvToHSLString = f;
  function p(b) {
    return _u(b.h, b.s, b.v);
  }
  C.hsvToString = p;
  function m(b) {
    return B.toRgbString(B(b));
  }
  C.rgbaToString = m;
  function d(b) {
    return B.toRgbString(B(b));
  }
  C.hslToString = d;
  function h(b) {
    return B.toRgbString(B({ h: b, s: 1, l: 0.5, a: 1 }));
  }
  C.toColorPickerSquare = h;
  function v(b) {
    return B(b).isValid !== false;
  }
  C.isValid = v;
  function y(b, T) {
    return typeof b == "string" && (b = B(b)), typeof T == "string" && (T = B(T)), B.equal(b, T);
  }
  C.equals = y;
  function P(b) {
    let T = B(b);
    return T.a !== 1 ? B.toRgbString(T) : B.toHexString(T);
  }
  C.toHexOrRgbaString = P;
})(ot || (ot = {}));
var HP = (e) => Boolean(e && typeof e == "object" && e.mix && e.toValue), zP = (e) => e === "background" || e.endsWith("color") || e.endsWith("Color"), ig = (e, t) => t && typeof t == "object" ? (ve(HP(t), "Motion styles must be numbers, strings, or an instance with a `toValue` and `mix` methods."), t.toValue()) : zP(e) && typeof t == "string" && B.isColor(t) ? B(t).toValue() : t, WP = (e, t) => {
  if (Array.isArray(t)) {
    let r = t.length, n = [];
    for (let o = 0; o < r; o++)
      n.push(ig(e, t[o]));
    return n;
  } else
    return ig(e, t);
}, UP = { size: { set: (e, t, r) => {
  e.height === void 0 && (t.height = r), e.width === void 0 && (t.width = r);
}, type: Z }, radius: { set: (e, t, r) => {
  t.borderRadius = r;
}, type: Z }, shadow: { set: (e, t, r) => {
  t.boxShadow = r;
}, type: Ge } }, ag = (e) => {
  let t = {};
  for (let r in e) {
    let n = WP(r, e[r]), o = UP[r];
    if (o) {
      let a = o.type && typeof e[r] == "number" ? o.type.transform(e[r]) : e[r];
      o.set(e, t, a);
    } else
      t[r] = n;
  }
  return t;
};
var sg = Array.isArray, lg = Object.keys, GP = Object.prototype.hasOwnProperty;
function Uu(e, t, r) {
  if (e === t)
    return true;
  if (e && t && typeof e == "object" && typeof t == "object") {
    let n = sg(e), o = sg(t), i, a, s;
    if (n && o) {
      if (a = e.length, a !== t.length)
        return false;
      for (i = a; i-- != 0; )
        if (!r && e[i] !== t[i] || r && !Uu(e[i], t[i], true))
          return false;
      return true;
    }
    if (n !== o)
      return false;
    let l = e instanceof Date, u = t instanceof Date;
    if (l !== u)
      return false;
    if (l && u)
      return e.getTime() === t.getTime();
    let c = e instanceof RegExp, f = t instanceof RegExp;
    if (c !== f)
      return false;
    if (c && f)
      return e.toString() === t.toString();
    if (typeof e.equals == "function" && typeof t.equals == "function")
      return e.equals(t);
    let p = lg(e);
    if (a = p.length, a !== lg(t).length)
      return false;
    for (i = a; i-- != 0; )
      if (!GP.call(t, p[i]))
        return false;
    for (i = a; i-- != 0; )
      if (s = p[i], !(s === "_owner" && e.$$typeof) && (!r && e[s] !== t[s] || r && !Uu(e[s], t[s], true)))
        return false;
    return true;
  }
  return e !== e && t !== t;
}
function li(e, t, r = true) {
  try {
    return Uu(e, t, r);
  } catch (n) {
    if (n.message && n.message.match(/stack|recursion/i) || n.number === -2146828260)
      return console.warn("Warning: isEqual does not handle circular references.", n.name, n.message), false;
    throw n;
  }
}
function hs(e, t, r, n = true) {
  if (!e)
    return;
  let o = r || e.style[t], i = () => {
    e.style[t] = o;
  };
  e.style[t] = null, n ? Promise.resolve().then(i) : setTimeout(i, 0);
}
function ug() {
  if (typeof _ != "undefined" && _.ReactDOM)
    return _.ReactDOM;
}
function cg(e) {
  let t = ug();
  return t ? t.findDOMNode(e) : null;
}
var ro = {};
Hb(ro, { deviceFont: () => xs, deviceOS: () => ic, devicePixelRatio: () => gg, deviceType: () => ui, environment: () => bg, isAndroid: () => Yu, isBrowser: () => Gu, isChrome: () => no, isDataUrl: () => tc, isDesktop: () => mg, isEdge: () => gs, isFileUrl: () => ec, isFirefox: () => Xu, isFramerX: () => ys, isIOS: () => Ku, isJP2Supported: () => vg, isLocalAssetUrl: () => hg, isLocalServerUrl: () => oc, isLocalUrl: () => bs, isMacOS: () => qu, isMobile: () => dg, isPhone: () => Ju, isRelativeUrl: () => nc, isSafari: () => vs, isTablet: () => Qu, isTest: () => rc, isTouch: () => fg, isWebKit: () => $u, isWebPSupported: () => yg, isWindows: () => Zu, webkitVersion: () => pg });
var Gu = () => typeof document == "object", $u = () => navigator.userAgent.includes("AppleWebKit/") && !no() && !gs(), pg = () => {
  let e = -1, r = /AppleWebKit\/([\d.]+)/.exec(navigator.userAgent);
  return r && (e = parseFloat(r[1])), e;
}, no = () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) && !gs(), vs = () => /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor), Xu = () => /Firefox\/\d+\.\d+$/.test(navigator.userAgent), ys = () => /FramerX/.test(navigator.userAgent), gs = () => /Edg\//.test(navigator.userAgent), Yu = () => /(android)/i.test(navigator.userAgent), Ku = () => /(iPhone|iPod|iPad)/i.test(navigator.platform), qu = () => /Mac/.test(navigator.platform), Zu = () => /Win/.test(navigator.platform), fg = () => _.ontouchstart === null && _.ontouchmove === null && _.ontouchend === null, mg = () => ui() === "desktop", Ju = () => ui() === "phone", Qu = () => ui() === "tablet", dg = () => Ju() || Qu(), ec = (e) => e.startsWith("file://"), tc = (e) => e.startsWith("data:"), rc = () => false, nc = (e) => !/^([a-zA-Z]{1,8}:\/\/).*$/.test(e), oc = (e) => /[a-zA-Z]{1,8}:\/\/127\.0\.0\.1/.test(e) || /[a-zA-Z]{1,8}:\/\/localhost/.test(e), bs = (e) => !!(ec(e) || oc(e)), hg = (e, t) => (t === null && (t = _.location.href), tc(e) ? false : !!(bs(e) || nc(e) && bs(t))), gg = () => _.devicePixelRatio, vg = function() {
  return Xu() ? false : $u();
}, yg = () => no(), ui = () => /(tablet)|(iPad)|(Nexus 9)/i.test(navigator.userAgent) ? "tablet" : /(mobi)/i.test(navigator.userAgent) ? "phone" : "desktop", ic = () => {
  if (qu())
    return "macos";
  if (Ku())
    return "ios";
  if (Yu())
    return "android";
  if (Zu())
    return "windows";
}, xs = (e) => {
  e || (e = ic());
  let t = { apple: "-apple-system, BlinkMacSystemFont, SF Pro Text, SF UI Text, Helvetica Neue", google: "Roboto, Helvetica Neue", microsoft: "Segoe UI, Helvetica Neue" };
  return e === "macos" || e === "ios" ? t.apple : e === "android" ? t.google : e === "windows" ? t.microsoft : t.apple;
}, bg = { isWebKit: $u, webkitVersion: pg, isChrome: no, isSafari: vs, isFirefox: Xu, isFramerX: ys, isEdge: gs, isAndroid: Yu, isIOS: Ku, isMacOS: qu, isWindows: Zu, isTouch: fg, isDesktop: mg, isPhone: Ju, isTablet: Qu, isMobile: dg, isFileUrl: ec, isDataUrl: tc, isRelativeUrl: nc, isLocalServerUrl: oc, isLocalUrl: bs, isLocalAssetUrl: hg, devicePixelRatio: gg, isJP2Supported: vg, isWebPSupported: yg, deviceType: ui, deviceOS: ic, deviceFont: xs };
var xg = "0.000001px", ac = ` translateZ(${xg})`, Sg = ys() || vs() || rc();
function Cg(e) {
  e.willChange = "transform";
  let t = L.current() === L.canvas;
  Sg && t && (e.translateZ = xg);
}
function ci(e) {
  e.willChange = "transform", $P(e, true);
}
function $P(e, t) {
  let r = L.current() === L.canvas;
  if (!Sg || !r)
    return;
  let n = e.transform || "";
  t ? n.includes(ac) || (e.transform = n + ac) : e.transform = n.replace(ac, "");
}
var Se = class extends react.exports.Component {
  static applyWillChange(t, r, n) {
    (t.willChangeTransform || L.current() === L.export) && (n ? Cg(r) : ci(r));
  }
  shouldComponentUpdate(t, r) {
    return t._needsMeasure || this.state !== r || !li(this.props, t);
  }
  componentDidUpdate(t) {
    let r = cg(this);
    this.props.clip && this.props.radius === 0 && t.radius !== 0 && hs(r, "overflow", "hidden", false);
  }
};
Se.defaultProps = {};
function me(e, t, r, n) {
  if (n === void 0 && (n = t), e[t] !== void 0) {
    r[n] = e[t];
    return;
  }
}
var Pg = (e) => {
  let t = 0, r, n;
  if (e.length === 0)
    return t;
  for (r = 0; r < e.length; r++)
    n = e.charCodeAt(r), t = (t << 5) - t + n, t |= 0;
  return t;
};
function KP(e, t) {
  if (e.size < t)
    return;
  let n = Math.round(Math.random());
  for (let o of e.keys())
    (++n & 1) != 1 && e.delete(o);
}
function sc(e, t, r, n) {
  let o = t.get(r);
  if (o)
    return o;
  KP(t, e);
  let i = n(r);
  return t.set(r, i), i;
}
var qP = /var\(.+\)/, ZP = new Map();
function JP(e, t) {
  let r = [e, t];
  return qP.test(e) ? e : sc(1e3, ZP, r, () => ot.multiplyAlpha(e, t));
}
function Or(e, t = 1) {
  let r;
  return "stops" in e ? r = e.stops : r = [{ value: e.start, position: 0 }, { value: e.end, position: 1 }], t === 1 ? r : r.map((n) => __spreadProps(__spreadValues({}, n), { value: JP(n.value, t) }));
}
function Ss(e, t) {
  let r = 0;
  return Or(e, t).forEach((n) => {
    r ^= Pg(n.value) ^ n.position;
  }), r;
}
var QP = ["start", "end"];
function Cs(e) {
  return e && QP.every((t) => t in e);
}
var eT = ["stops"];
function Ps(e) {
  return e && eT.every((t) => t in e);
}
var tT = ["angle", "alpha"], Xe;
(function(n) {
  function e(o) {
    return o && tT.every((i) => i in o) && (Cs(o) || Ps(o));
  }
  n.isLinearGradient = e;
  function t(o) {
    return o.angle ^ Ss(o, o.alpha);
  }
  n.hash = t;
  function r(o, i) {
    let a = Or(o, o.alpha), s = i !== void 0 ? i : o.angle, l = a.map((u) => `${u.value} ${u.position * 100}%`);
    return `linear-gradient(${s}deg, ${l.join(", ")})`;
  }
  n.toCSS = r;
})(Xe || (Xe = {}));
var rT = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"], Ye;
(function(n) {
  function e(o) {
    return o && rT.every((i) => i in o) && (Cs(o) || Ps(o));
  }
  n.isRadialGradient = e;
  function t(o) {
    return o.centerAnchorX ^ o.centerAnchorY ^ o.widthFactor ^ o.heightFactor ^ Ss(o, o.alpha);
  }
  n.hash = t;
  function r(o) {
    let { alpha: i, widthFactor: a, heightFactor: s, centerAnchorX: l, centerAnchorY: u } = o, f = Or(o, i).map((p) => `${p.value} ${p.position * 100}%`);
    return `radial-gradient(${a * 100}% ${s * 100}% at ${l * 100}% ${u * 100}%, ${f.join(", ")})`;
  }
  n.toCSS = r;
})(Ye || (Ye = {}));
var Ke = (e) => e instanceof Jr;
function Ts({ background: e, backgroundColor: t }, r) {
  t ? typeof t == "string" || Ke(t) ? r.backgroundColor = t : B.isColorObject(e) && (r.backgroundColor = e.initialValue || B.toRgbString(e)) : e && (e = q.get(e, null), typeof e == "string" || Ke(e) ? r.background = e : Xe.isLinearGradient(e) ? r.background = Xe.toCSS(e) : Ye.isRadialGradient(e) ? r.background = Ye.toCSS(e) : B.isColorObject(e) && (r.backgroundColor = e.initialValue || B.toRgbString(e)));
}
function Tg(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : false;
}
function wg(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : false;
}
function Rg(e) {
  if (!e)
    return {};
  let t = {};
  return e.preserve3d === true ? t.transformStyle = "preserve-3d" : e.preserve3d === false && (t.transformStyle = "flat"), e.backfaceVisible === true ? t.backfaceVisibility = "visible" : e.backfaceVisible === false && (t.backfaceVisibility = "hidden"), t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility), e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective), e.__fromCanvasComponent || (e.center === true ? (t.left = "50%", t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")), me(e, "size", t), me(e, "width", t), me(e, "height", t), me(e, "minWidth", t), me(e, "minHeight", t), me(e, "top", t), me(e, "right", t), me(e, "bottom", t), me(e, "left", t), me(e, "position", t), me(e, "overflow", t), me(e, "opacity", t), (!e._border || !e._border.borderWidth) && me(e, "border", t), me(e, "borderRadius", t), me(e, "radius", t, "borderRadius"), me(e, "color", t), me(e, "shadow", t, "boxShadow"), me(e, "x", t), me(e, "y", t), me(e, "z", t), me(e, "rotate", t), me(e, "rotateX", t), me(e, "rotateY", t), me(e, "rotateZ", t), me(e, "scale", t), me(e, "scaleX", t), me(e, "scaleY", t), me(e, "skew", t), me(e, "skewX", t), me(e, "skewY", t), me(e, "originX", t), me(e, "originY", t), me(e, "originZ", t), Ts(e, t), t;
}
var fr = react.exports.createContext({ getLayoutId: (e) => null, persistLayoutIdCache: () => {
}, top: false, enabled: true });
function Mg({ children: e }) {
  if (react.exports.useContext(fr).top)
    return react.exports.createElement(react.exports.Fragment, null, e);
  let r = react.exports.useRef({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}, count: { byId: {}, byName: {} } }), n = react.exports.useRef({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }), o = react.exports.useRef(new Set()).current, i = react.exports.useCallback(({ id: l, name: u, duplicatedFrom: c }) => {
    if (!l)
      return null;
    let f = u ? "byName" : "byId", p = r.current[f][l];
    if (p)
      return p;
    let m = u || l;
    if (!c && !o.has(m) && (!r.current.byLayoutId[m] || r.current.byLayoutId[m] === m))
      return r.current.count[f][m] === void 0 && (r.current.count[f][m] = 0, r.current.byLayoutId[m] = m, n.current[f][l] = m), o.add(m), m;
    let d;
    if (c == null ? void 0 : c.length)
      for (let T = c.length - 1; T >= 0; T--) {
        let F = c[T], I = r.current[f][F], A = r.current.byLastId[F];
        if (A && !d) {
          let W = r.current.byLayoutId[A], K = !W || W === u;
          A && !o.has(A) && (u ? K : true) && (d = [A, F]);
        }
        let E = r.current.byLayoutId[I], k = !E || E === u;
        if (I && !o.has(I) && (u ? k : true))
          return n.current[f][l] = I, n.current.byLastId[F] = I, o.add(I), I;
      }
    let h = r.current.byLastId[l];
    if (h && !o.has(h))
      return o.add(h), n.current.byId[l] = h, h;
    if (d) {
      let [T, F] = d;
      return n.current[f][l] = T, n.current.byLastId[F] = T, o.add(T), T;
    }
    let v = r.current.byPossibleId[l];
    if (v && !o.has(v))
      return o.add(v), n.current.byId[l] = v, v;
    let y = c == null ? void 0 : c[0], P = u || y || l, C = r.current.count[f][P] + 1 || 0, b = C ? `${P}-${C}` : P;
    if (r.current.count[f][P] = C, n.current[f][l] = b, (c == null ? void 0 : c.length) && !u && (n.current.byLastId[c[c.length - 1]] = b, c.length > 1))
      for (let T = 0; T < c.length - 1; T++) {
        let F = c[T];
        n.current.byPossibleId[F] || (n.current.byPossibleId[F] = b);
      }
    return n.current.byLayoutId[b] = m, o.add(b), b;
  }, []), a = react.exports.useCallback(() => {
    r.current = { byId: __spreadValues(__spreadValues({}, r.current.byId), n.current.byId), byLastId: __spreadValues(__spreadValues({}, r.current.byLastId), n.current.byLastId), byPossibleId: __spreadValues(__spreadValues({}, r.current.byPossibleId), n.current.byPossibleId), byName: __spreadValues(__spreadValues({}, r.current.byName), n.current.byName), byLastName: __spreadValues(__spreadValues({}, r.current.byLastName), n.current.byLastName), byLayoutId: __spreadValues(__spreadValues({}, r.current.byLayoutId), n.current.byLayoutId), count: __spreadProps(__spreadValues({}, r.current.count), { byName: {} }) }, n.current = { byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }, o.clear();
  }, []), s = react.exports.useRef({ getLayoutId: i, persistLayoutIdCache: a, top: true, enabled: true }).current;
  return react.exports.createElement(fr.Provider, { value: s }, e);
}
function uc(_a2) {
  var _b2 = _a2, { enabled: e = true } = _b2, t = __objRest(_b2, ["enabled"]);
  let r = react.exports.useContext(fr), n = react.exports.useMemo(() => __spreadProps(__spreadValues({}, r), { enabled: e }), [e]);
  return react.exports.createElement(fr.Provider, __spreadProps(__spreadValues({}, t), { value: n }));
}
function ht(e, { specificLayoutId: t, postfix: r, forceEnable: n = false } = {}) {
  let { name: o, id: i, duplicatedFrom: a, _canMagicMotion: s = n, __fromCodeComponentNode: l = false } = e, { getLayoutId: u, enabled: c } = react.exports.useContext(fr);
  return react.exports.useMemo(() => {
    if (!c)
      return e.layoutId;
    let f = t || e.layoutId;
    if (!f && (!i || !s || l))
      return;
    let p = f || u({ id: i, name: o, duplicatedFrom: a });
    if (!!p)
      return r ? `${p}-${r}` : p;
  }, [c]);
}
function Vr(e) {
  return (t, r) => e === true ? `translate(-50%, -50%) ${r}` : e === "x" ? `translateX(-50%) ${r}` : e === "y" ? `translateY(-50%) ${r}` : r || "none";
}
var Ig = (e) => () => {
  jt(e);
}, Ag = { useImageSource(e) {
  return e.src;
}, useImageElement(e, t, r) {
  let n = new Image();
  return n.src = _e.useImageSource(e, t, r), n;
} }, Dg = false, lT = { get(e, t, r) {
  return Reflect.has(e, t) ? Reflect.get(e, t, r) : Ig(Dg ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`);
} }, _e = new Proxy(Ag, lT);
function uT(e) {
  Object.assign(Ag, e), Dg = true;
}
function an(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
var Bt = react.exports.createContext(false);
function Rs() {
  let [e, t] = react.exports.useState(0);
  return react.exports.useCallback(() => t((r) => r + 1), []);
}
var It = [];
var Lg = function() {
  return It.some(function(e) {
    return e.activeTargets.length > 0;
  });
};
var Og = function() {
  return It.some(function(e) {
    return e.skippedTargets.length > 0;
  });
};
var Vg = "ResizeObserver loop completed with undelivered notifications.", kg = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: Vg }) : (e = document.createEvent("Event"), e.initEvent("error", false, false), e.message = Vg), window.dispatchEvent(e);
};
var sn;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(sn || (sn = {}));
var Nt = function(e) {
  return Object.freeze(e);
};
var cc = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Nt(this);
  }
  return e;
}();
var pc = function() {
  function e(t, r, n, o) {
    return this.x = t, this.y = r, this.width = n, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Nt(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, o = t.top, i = t.right, a = t.bottom, s = t.left, l = t.width, u = t.height;
    return { x: r, y: n, top: o, right: i, bottom: a, left: s, width: l, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}();
var pi = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Fs = function(e) {
  if (pi(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var o = e, i = o.offsetWidth, a = o.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, fc = function(e) {
  var t, r;
  if (e instanceof Element)
    return true;
  var n = (r = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && e instanceof n.Element);
}, _g = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var ln = typeof window != "undefined" ? window : {};
var Es = new WeakMap(), jg = /auto|scroll/, mT = /^tb|vertical/, dT = /msie|trident/i.test(ln.navigator && ln.navigator.userAgent), qt = function(e) {
  return parseFloat(e || "0");
}, oo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = false), new cc((r ? t : e) || 0, (r ? e : t) || 0);
}, Bg = Nt({ devicePixelContentBoxSize: oo(), borderBoxSize: oo(), contentBoxSize: oo(), contentRect: new pc(0, 0, 0, 0) }), mc = function(e, t) {
  if (t === void 0 && (t = false), Es.has(e) && !t)
    return Es.get(e);
  if (Fs(e))
    return Es.set(e, Bg), Bg;
  var r = getComputedStyle(e), n = pi(e) && e.ownerSVGElement && e.getBBox(), o = !dT && r.boxSizing === "border-box", i = mT.test(r.writingMode || ""), a = !n && jg.test(r.overflowY || ""), s = !n && jg.test(r.overflowX || ""), l = n ? 0 : qt(r.paddingTop), u = n ? 0 : qt(r.paddingRight), c = n ? 0 : qt(r.paddingBottom), f = n ? 0 : qt(r.paddingLeft), p = n ? 0 : qt(r.borderTopWidth), m = n ? 0 : qt(r.borderRightWidth), d = n ? 0 : qt(r.borderBottomWidth), h = n ? 0 : qt(r.borderLeftWidth), v = f + u, y = l + c, P = h + m, C = p + d, b = s ? e.offsetHeight - C - e.clientHeight : 0, T = a ? e.offsetWidth - P - e.clientWidth : 0, F = o ? v + P : 0, I = o ? y + C : 0, A = n ? n.width : qt(r.width) - F - T, E = n ? n.height : qt(r.height) - I - b, k = A + v + T + P, W = E + y + b + C, K = Nt({ devicePixelContentBoxSize: oo(Math.round(A * devicePixelRatio), Math.round(E * devicePixelRatio), i), borderBoxSize: oo(k, W, i), contentBoxSize: oo(A, E, i), contentRect: new pc(f, l, A, E) });
  return Es.set(e, K), K;
}, Ms = function(e, t, r) {
  var n = mc(e, r), o = n.borderBoxSize, i = n.contentBoxSize, a = n.devicePixelContentBoxSize;
  switch (t) {
    case sn.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case sn.BORDER_BOX:
      return o;
    default:
      return i;
  }
};
var dc = function() {
  function e(t) {
    var r = mc(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Nt([r.borderBoxSize]), this.contentBoxSize = Nt([r.contentBoxSize]), this.devicePixelContentBoxSize = Nt([r.devicePixelContentBoxSize]);
  }
  return e;
}();
var Is = function(e) {
  if (Fs(e))
    return Infinity;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
};
var Ng = function() {
  var e = Infinity, t = [];
  It.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(u) {
        var c = new dc(u.target), f = Is(u.target);
        s.push(c), u.lastReportedSize = Ms(u.target, u.observedBox), f < e && (e = f);
      }), t.push(function() {
        a.callback.call(a.observer, s, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var o = n[r];
    o();
  }
  return e;
};
var hc = function(e) {
  It.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(o) {
      o.isActive() && (Is(o.target) > e ? r.activeTargets.push(o) : r.skippedTargets.push(o));
    });
  });
};
var Hg = function() {
  var e = 0;
  for (hc(e); Lg(); )
    e = Ng(), hc(e);
  return Og() && kg(), e > 0;
};
var gc, zg = [], hT = function() {
  return zg.splice(0).forEach(function(e) {
    return e();
  });
}, Wg = function(e) {
  if (!gc) {
    var t = 0, r = document.createTextNode(""), n = { characterData: true };
    new MutationObserver(function() {
      return hT();
    }).observe(r, n), gc = function() {
      r.textContent = "" + (t ? t-- : t++);
    };
  }
  zg.push(e), gc();
};
var Ug = function(e) {
  Wg(function() {
    requestAnimationFrame(e);
  });
};
var As = 0, gT = function() {
  return !!As;
}, vT = 250, yT = { attributes: true, characterData: true, childList: true, subtree: true }, Gg = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], $g = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, vc = false, bT = function() {
  function e() {
    var t = this;
    this.stopped = true, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = vT), !vc) {
      vc = true;
      var n = $g(t);
      Ug(function() {
        var o = false;
        try {
          o = Hg();
        } finally {
          if (vc = false, t = n - $g(), !gT())
            return;
          o ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, yT);
    };
    document.body ? r() : ln.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Gg.forEach(function(r) {
      return ln.addEventListener(r, t.listener, true);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Gg.forEach(function(r) {
      return ln.removeEventListener(r, t.listener, true);
    }), this.stopped = true);
  }, e;
}(), Ds = new bT(), yc = function(e) {
  !As && e > 0 && Ds.start(), As += e, !As && Ds.stop();
};
var xT = function(e) {
  return !pi(e) && !_g(e) && getComputedStyle(e).display === "inline";
}, Xg = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || sn.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return e.prototype.isActive = function() {
    var t = Ms(this.target, this.observedBox, true);
    return xT(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}();
var Yg = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}();
var Ls = new WeakMap(), Kg = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, fi = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Yg(t, r);
    Ls.set(t, n);
  }, e.observe = function(t, r, n) {
    var o = Ls.get(t), i = o.observationTargets.length === 0;
    Kg(o.observationTargets, r) < 0 && (i && It.push(o), o.observationTargets.push(new Xg(r, n && n.box)), yc(1), Ds.schedule());
  }, e.unobserve = function(t, r) {
    var n = Ls.get(t), o = Kg(n.observationTargets, r), i = n.observationTargets.length === 1;
    o >= 0 && (i && It.splice(It.indexOf(n), 1), n.observationTargets.splice(o, 1), yc(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Ls.get(t);
    n.observationTargets.slice().forEach(function(o) {
      return r.unobserve(t, o.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}();
var bc = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    fi.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!fc(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    fi.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!fc(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    fi.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    fi.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
var Jg = 200, io, ao, Qg = class {
  constructor() {
    io.set(this, void 0);
    ao.set(this, new WeakMap());
    Gp(this, io, new bc(this.updateResizedElements.bind(this)));
  }
  updateResizedElements(t) {
    for (let r of t) {
      let n = Cn(this, ao).get(r.target);
      n && n(r.contentRect);
    }
  }
  observeElementWithCallback(t, r) {
    Cn(this, io).observe(t), Cn(this, ao).set(t, r);
  }
  unobserve(t) {
    Cn(this, io).unobserve(t), Cn(this, ao).delete(t);
  }
};
io = new WeakMap(), ao = new WeakMap();
var ev = new Qg();
function CT(e) {
  let t = Rs(), r = react.exports.useRef(null);
  function n(o) {
    o.width === 0 && o.height === 0 || (!r.current || o.height !== r.current.height || o.width !== r.current.width) && (r.current = { width: o.width, height: o.height }, t());
  }
  return react.exports.useLayoutEffect(() => {
    if (!e.current)
      return;
    let { offsetWidth: o, offsetHeight: i } = e.current;
    return n({ width: o, height: i }), ev.observeElementWithCallback(e.current, n), () => {
      !e.current || ev.unobserve(e.current);
    };
  }, []), r.current;
}
var xc = "data-framer-size-compatibility-wrapper", PT = (e) => (t) => {
  var l, u, c, f;
  let r = react.exports.useRef(null), n = CT(r), o = { [xc]: true }, i = L.current() === L.export || Boolean(n), a = (l = t.width) != null ? l : Jg, s = (u = t.height) != null ? u : Jg;
  return react.exports.createElement("div", __spreadValues({ style: { width: "100%", height: "100%", pointerEvents: "none" }, ref: r }, o), i && react.exports.createElement(e, __spreadProps(__spreadValues({}, t), { width: (c = n == null ? void 0 : n.width) != null ? c : a, height: (f = n == null ? void 0 : n.height) != null ? f : s })));
};
function Sc(e) {
  return [...e.firstElementChild && e.firstElementChild.hasAttribute(xc) ? e.firstElementChild.children : e.children].filter(tv).map(rv);
}
function tv(e) {
  return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? false : e instanceof HTMLElement || e instanceof SVGElement;
}
function rv(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(tv);
  return t ? rv(t) : e;
}
function un(e, t, r = () => [], n = {}) {
  let { id: o, visible: i, _needsMeasure: a } = e, { skipHook: s = false } = n, l = Boolean(react.exports.useContext(Bt)), u = L.current() === L.canvas;
  react.exports.useLayoutEffect(() => {
    !u || l || s || !(t.current && o && i && a) || _e.queueMeasureRequest(an(o), t.current, r(t.current));
  });
}
function nv(e) {
  let t = e.closest("[data-framer-component-container]");
  !t || _e.queueMeasureRequest(an(t.id), t, Sc(t));
}
var RT = no();
function so(e) {
  let t = {};
  return !RT || L.current() !== L.canvas || ((e === true || e === "x") && (t["data-framer-layout-hint-center-x"] = true), (e === true || e === "y") && (t["data-framer-layout-hint-center-y"] = true)), t;
}
function ov(e, t, r = 1) {
  var u, c, f, p;
  let { width: n, height: o } = t, i = (c = (u = e.pixelWidth) != null ? u : e.intrinsicWidth) != null ? c : 0, a = (p = (f = e.pixelHeight) != null ? f : e.intrinsicHeight) != null ? p : 0;
  if (n < 1 || o < 1 || i < 1 || a < 1)
    return;
  n *= r, o *= r;
  let s = n / o, l = i / a;
  switch (e.fit) {
    case "fill":
      return l > s ? a / o : i / n;
    case "fit":
    case "stretch":
      return Math.max(i / n, a / o);
  }
}
function Cc(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var MT = { position: "absolute", pointerEvents: "none", userSelect: "none", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 };
function IT(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function AT(e, t) {
  if (!t)
    return "auto";
  let r = L.current() === L.canvas ? _.devicePixelRatio : 1, n = ov(e, t, r);
  return L.current() === L.canvas ? Cc(1, n) : Cc(ge.zoom, n);
}
function DT(e, t) {
  return { pointerEvents: "none", userSelect: "none", display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: IT(e.fit), imageRendering: AT(e, t) };
}
function Os({ image: e, containerSize: t, nodeId: r, layoutId: n }) {
  let o = react.exports.useRef(null), i = !Gu() || L.current() === L.export;
  n && (n = n + "-background");
  let a = _e.useImageSource(e, t, r), s = DT(e, t);
  if (!i) {
    let l = _e.useImageElement(e, t, r);
    react.exports.useLayoutEffect(() => {
      let u = o.current;
      if (u !== null)
        return u.appendChild(l), () => {
          u.removeChild(l);
        };
    }, [l]), Object.assign(l.style, s);
  }
  return react.exports.createElement(ke.div, { ref: o, style: MT, layoutId: n }, i ? react.exports.createElement("img", { src: a, style: s }) : null);
}
function VT(e) {
  for (let t in e)
    if (t === "drag" || t.startsWith("while") || typeof e[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
      return true;
  return false;
}
var cv = ["onAuxClick", "onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"], kT = new Set([...cv, ...cv.map((e) => `${e}Capture`)]);
function _T(e) {
  if (e.drag)
    return "grab";
  for (let t in e)
    if (kT.has(t))
      return "pointer";
}
function Vs(e) {
  let { left: t, top: r, bottom: n, right: o, width: i, height: a, minWidth: s, minHeight: l, center: u, _constraints: c, size: f, widthType: p, heightType: m } = e;
  return { top: Ze(r), left: Ze(t), bottom: Ze(n), right: Ze(o), width: Ze(i), height: Ze(a), minWidth: Ze(s), minHeight: Ze(l), size: Ze(f), center: u, _constraints: c, widthType: p, heightType: m };
}
var pv = { x: 0, y: 0, width: 200, height: 200 };
function jT(e) {
  Mt();
  let t = Boolean(react.exports.useContext(Bt)), { style: r, _initialStyle: n, __fromCanvasComponent: o, size: i } = e, a = Vs(e), s = Uh(a), l = { display: "block", flexShrink: 0, userSelect: "none" };
  e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0), VT(e) || (l.pointerEvents = "none");
  let c = react.exports.Children.count(e.children) > 0 && react.exports.Children.toArray(e.children).every((d) => typeof d == "string" || typeof d == "number") && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }, f = Rg(e);
  i === void 0 && !o && (Tg(f) || (l.width = pv.width), wg(f) || (l.height = pv.height)), a.minWidth !== void 0 && (l.minWidth = a.minWidth), a.minHeight !== void 0 && (l.minHeight = a.minHeight);
  let p = {};
  Yt(a) && s && !fv(e) && (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }), Object.assign(l, c, n, f, p, r), Se.applyWillChange(e, l, true);
  let m = l;
  return l.transform || (m = __spreadValues({ x: 0, y: 0 }, l)), e.positionSticky && (!(L.current() === L.canvas) || t) && (m.position = "sticky", m.willChange = "transform", m.zIndex = 1, m.top = e.positionStickyTop, m.right = e.positionStickyRight, m.bottom = e.positionStickyBottom, m.left = e.positionStickyLeft), [m, s];
}
var BT = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);
function NT(e) {
  let t = {};
  for (let r in e)
    (Tr(r) || (0, av.default)(r)) && !BT.has(r) ? t[r] = e[r] : (r === "positionTransition" || r === "layoutTransition") && (t.layout = true, typeof e[r] != "boolean" && !e.transition && (t.transition = e[r]));
  return t;
}
function HT(e) {
  return "data-framer-name" in e;
}
var we = react.exports.forwardRef(function(t, r) {
  _.perf && _.perf.nodeRender();
  let { visible: n = true } = t;
  return n ? react.exports.createElement(zT, __spreadProps(__spreadValues({}, t), { ref: r })) : null;
}), zT = react.exports.forwardRef(function(t, r) {
  let { _border: n, name: o, center: i, border: a } = t, { props: s, children: l } = ps(t), u = NT(s), c = ht(t), f = _T(t), p = react.exports.useRef(null), m = r != null ? r : p, d = { "data-framer-component-type": "Frame", "data-framer-cursor": f, "data-framer-highlight": f === "pointer" ? true : void 0, "data-layoutid": c };
  !HT(t) && o && (d["data-framer-name"] = o);
  let [h, v] = jT(s), y = Vs(s), P = fv(y);
  i && !(v && !P && Yt(y)) ? (u.transformTemplate = Vr(i), Object.assign(d, so(i))) : u.transformTemplate = Vr(false), un(t, m);
  let C = ni(t), b = Boolean(react.exports.useContext(Bt)), T = WT(s, y, v, b), F = us(react.exports.createElement(react.exports.Fragment, null, C ? react.exports.createElement(Os, { image: C, containerSize: v != null ? v : void 0, nodeId: t.id && an(t.id), layoutId: c }) : null, l, react.exports.createElement(is, __spreadProps(__spreadValues({}, n), { border: a, layoutId: c }))), T);
  return react.exports.createElement(ke.div, __spreadProps(__spreadValues(__spreadValues({}, d), u), { layoutId: c, style: h, ref: m, transformValues: ag }), F);
});
function WT(e, t, r, n) {
  if (n)
    return r ? { width: r.width, height: r.height } : Me.Disabled;
  let { _usesDOMRect: o } = e, { widthType: i = z.FixedNumber, heightType: a = z.FixedNumber, width: s, height: l } = t;
  return r && !o ? r : i === z.FixedNumber && a === z.FixedNumber && typeof s == "number" && typeof l == "number" ? { width: s, height: l } : o ? Me.DisabledForCurrentLevel : Me.Unknown;
}
function fv({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
function Pc(e, t = null) {
  let r;
  if (t instanceof HTMLElement && (r = t), !r && e.target instanceof HTMLElement && (r = e.target), !r)
    return { x: e.pageX, y: e.pageY };
  if (_.webkitConvertPointFromPageToNode) {
    let l = new WebKitPoint(e.pageX, e.pageY);
    return l = _.webkitConvertPointFromPageToNode(r, l), { x: l.x, y: l.y };
  }
  let n = r.getBoundingClientRect(), o = parseFloat(r.style.width), i = parseFloat(r.style.height), a = { x: o ? o / n.width : 1, y: i ? i / n.height : 1 };
  return { x: a.x * (e.pageX - n.left - r.clientLeft + r.scrollLeft), y: a.y * (e.pageY - n.top - r.clientTop + r.scrollTop) };
}
var GT = (e) => {
  setTimeout(e, 1 / 60);
}, $T = _.requestAnimationFrame || GT, Tc = (e) => $T(e);
var hv = Ro(dv()), Rc = class {
  constructor() {
    this._emitter = new hv.EventEmitter();
  }
  eventNames() {
    return this._emitter.eventNames();
  }
  eventListeners() {
    let t = {};
    for (let r of this._emitter.eventNames())
      t[r] = this._emitter.listeners(r);
    return t;
  }
  on(t, r) {
    this.addEventListener(t, r, false, false, this);
  }
  off(t, r) {
    this.removeEventListeners(t, r);
  }
  once(t, r) {
    this.addEventListener(t, r, true, false, this);
  }
  unique(t, r) {
    this.addEventListener(t, r, false, true, this);
  }
  addEventListener(t, r, n, o, i) {
    if (o) {
      for (let a of this._emitter.eventNames())
        if (r === this._emitter.listeners(a))
          return;
    }
    n === true ? this._emitter.once(t, r, i) : this._emitter.addListener(t, r, i);
  }
  removeEventListeners(t, r) {
    t ? this._emitter.removeListener(t, r) : this.removeAllEventListeners();
  }
  removeAllEventListeners() {
    this._emitter.removeAllListeners();
  }
  countEventListeners(t, r) {
    if (t)
      return this._emitter.listeners(t).length;
    {
      let n = 0;
      for (let o of this._emitter.eventNames())
        n += this._emitter.listeners(o).length;
      return n;
    }
  }
  emit(t, ...r) {
    this._emitter.emit(t, ...r);
  }
};
var hi = 1 / 60, _s = class extends Rc {
  constructor(t = false) {
    super();
    this._started = false;
    this._frame = 0;
    this._frameTasks = [];
    this.tick = () => {
      !this._started || (Tc(this.tick), this.emit("update", this._frame, hi), this.emit("render", this._frame, hi), this._processFrameTasks(), this._frame++);
    };
    t && this.start();
  }
  addFrameTask(t) {
    this._frameTasks.push(t);
  }
  _processFrameTasks() {
    let t = this._frameTasks, r = t.length;
    if (r !== 0) {
      for (let n = 0; n < r; n++)
        t[n]();
      t.length = 0;
    }
  }
  static set TimeStep(t) {
    hi = t;
  }
  static get TimeStep() {
    return hi;
  }
  start() {
    return this._started ? this : (this._frame = 0, this._started = true, Tc(this.tick), this);
  }
  stop() {
    return this._started = false, this;
  }
  get frame() {
    return this._frame;
  }
  get time() {
    return this._frame * hi;
  }
}, Pt = new _s();
var mr = (e, t, r) => {
  let n = Math.min(t, r), o = Math.max(t, r);
  return e < n && (e = n), e > o && (e = o), e;
};
var at = class {
  constructor(t, r) {
    this.originalEvent = t;
    this.session = r;
    this.time = Date.now();
    this.loopTime = Pt.time;
    let n = r && r.startEvent && r.startEvent.target || t.target, o = at.eventLikeFromOriginalEvent(t);
    this.point = Pc(o, n);
    let i = r && r.originElement ? r.originElement : document.body;
    this.devicePoint = Pc(o, i), this.target = t.target || null;
    let a = r && r.lastEvent;
    t instanceof WheelEvent ? this.delta = { x: t.deltaX, y: t.deltaY } : a && this.devicePoint && a.devicePoint ? this.delta = Ie.subtract(this.devicePoint, a.devicePoint) : this.delta = { x: 0, y: 0 };
  }
  static eventLikeFromOriginalEvent(t) {
    if ("touches" in t) {
      let r = t.touches;
      if ((!r || !r.length) && t.changedTouches && t.changedTouches.length && (r = t.changedTouches), !r || !r.length)
        return { pageX: 0, pageY: 0, target: null };
      let n = r[0], o = n.clientX || n.screenX || n.pageX, i = n.clientY || n.screenY || n.pageY;
      return { pageX: o, pageY: i, target: t.target };
    }
    return t;
  }
  velocity(t) {
    return this.session ? this.session.velocity(t) : { x: 0, y: 0 };
  }
  get offset() {
    return this.session ? this.session.offset(this) : { x: 0, y: 0 };
  }
  get isLeftMouseClick() {
    if (!ro.isTouch())
      return "button" in this.originalEvent && "buttons" in this.originalEvent && "ctrlKey" in this.originalEvent ? (this.originalEvent.button === 0 || this.originalEvent.buttons === 1) && !this.originalEvent.ctrlKey : false;
  }
};
var gi = class {
  constructor(t) {
    this.accelerationForState = t;
  }
  integrateState(t, r) {
    let n = this.evaluateState(t), o = this.evaluateStateWithDerivative(t, r * 0.5, n), i = this.evaluateStateWithDerivative(t, r * 0.5, o), a = this.evaluateStateWithDerivative(t, r, i), s = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + a.dx), l = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + a.dv);
    return t.x = t.x + s * r, t.v = t.v + l * r, t;
  }
  evaluateState(t) {
    let r = this.accelerationForState(t);
    return { dx: t.v, dv: r };
  }
  evaluateStateWithDerivative(t, r, n) {
    let o = { x: t.x + n.dx * r, v: t.v + n.dv * r };
    return { dx: o.v, dv: this.accelerationForState(o) };
  }
};
var js = class {
  constructor(t) {
    this.options = { velocity: 0, friction: 2, tolerance: 1 / 10 }, Object.assign(this.options, t), this.state = { x: 0, v: this.options.velocity }, this.integrator = new gi((r) => -(this.options.friction * r.v));
  }
  setFrom(t) {
    this.state.x = t;
  }
  setTo(t) {
  }
  setVelocity(t) {
    this.state.v = t;
  }
  getState() {
    return this.state;
  }
  isReady() {
    return true;
  }
  next(t) {
    return this.state = this.integrator.integrateState(this.state, t), this.state.x;
  }
  isFinished() {
    return Math.abs(this.state.v) < this.options.tolerance;
  }
};
var Bs = 1e-3, qT = 0.01, ZT = 10, JT = Number.MIN_VALUE, QT = 1;
function ew(e, t, r, n = 12) {
  let o = r;
  for (let i = 1, a = n, s = 1 <= a; s ? i < a : i > a; s ? i++ : i--)
    o = o - e(o) / t(o);
  return o;
}
function gv(e, t) {
  return e * Math.sqrt(1 - Math.pow(t, 2));
}
var Ns;
(function(n) {
  function e(o, i, a = 1) {
    return i / (2 * Math.sqrt(a * o));
  }
  n.computeDampingRatio = e;
  function t(o, i, a = 0, s = 1) {
    let l, u = e(o, i), c = Math.sqrt(o / s);
    if (u < 1) {
      let f = Math.sqrt(1 - Math.pow(u, 2)), p = a / (f * c), m = u / f, d = -((p - m) / Bs);
      if (d <= 0)
        return null;
      l = Math.log(d) / (u * c);
    } else
      return null;
    return l;
  }
  n.computeDuration = t;
  function r(o, i, a = 0, s = 1) {
    let l, u;
    o = Math.max(Math.min(o, QT), JT), i = Math.max(Math.min(i, ZT), qT), o < 1 ? (u = function(m) {
      let d = m * o, h = d * i, v = d - a, y = gv(m, o), P = Math.exp(-h);
      return Bs - v / y * P;
    }, l = function(m) {
      let h = m * o * i, v = h * a + a, y = Math.pow(o, 2) * Math.pow(m, 2) * i, P = Math.exp(-h), C = gv(Math.pow(m, 2), o);
      return (-u(m) + Bs > 0 ? -1 : 1) * ((v - y) * P) / C;
    }) : (u = function(m) {
      let d = Math.exp(-m * i), h = (m - a) * i + 1;
      return -Bs + d * h;
    }, l = function(m) {
      let d = Math.exp(-m * i), h = (a - m) * Math.pow(i, 2);
      return d * h;
    });
    let c = { tension: 100, friction: 10, velocity: a }, f = 5 / i, p = ew(u, l, f);
    return isNaN(p) || (c.tension = Math.pow(p, 2) * s, c.friction = o * 2 * Math.sqrt(s * c.tension)), c;
  }
  n.computeDerivedCurveOptions = r;
})(Ns || (Ns = {}));
var tw = { tension: 500, friction: 10, tolerance: 1 / 1e4, velocity: 0 }, rw = { dampingRatio: 1, duration: 1, velocity: 0, mass: 1 };
function nw(e) {
  return e ? typeof e.dampingRatio == "number" || typeof e.duration == "number" || typeof e.mass == "number" : false;
}
var cn = class {
  constructor(t, r) {
    this.interpolation = r;
    let n;
    if (nw(t)) {
      let o = __spreadValues(__spreadValues({}, rw), t);
      n = Ns.computeDerivedCurveOptions(o.dampingRatio, o.duration, o.velocity, o.mass);
    } else
      n = t;
    this.options = __spreadValues(__spreadValues({}, tw), n), this.state = { x: 0, v: this.options.velocity }, this.integrator = new gi((o) => -this.options.tension * o.x - this.options.friction * o.v);
  }
  isReady() {
    return this.interpolator !== void 0 && this.difference !== void 0;
  }
  next(t) {
    return this.state = this.integrator.integrateState(this.state, t), this.interpolator(this.progress());
  }
  isFinished() {
    let t = Math.abs(this.state.x) < this.options.tolerance, r = Math.abs(this.state.v) < this.options.tolerance;
    return t && r;
  }
  setFrom(t) {
    this.current = t, this.updateInterpolator();
  }
  setVelocity(t) {
    this.state.v = t;
  }
  progress() {
    return 1 - this.state.x / this.difference;
  }
  setTo(t) {
    this.destination = t, this.difference = this.interpolation.difference(this.destination, this.current), this.state.x = this.difference, this.updateInterpolator();
  }
  getState() {
    return this.state;
  }
  updateInterpolator() {
    this.current === void 0 || this.destination === void 0 || (this.interpolator = this.interpolation.interpolate(this.current, this.destination));
  }
};
function vv(e) {
  return typeof e == "function" && e.interpolationFor && typeof e.interpolationFor == "function";
}
var Tt;
(function(t) {
  function e(r, n) {
    return r === void 0 && (r = n), n === void 0 && (n = r), [r, n];
  }
  t.handleUndefined = e;
})(Tt || (Tt = {}));
var vi = { interpolate(e, t) {
  [e, t] = Tt.handleUndefined(e, t);
  let r = +e, n = t - r;
  return (o) => r + n * o;
}, difference(e, t) {
  return t - e;
} };
var Fc = (e) => ({ interpolate(t, r) {
  [t, r] = Tt.handleUndefined(t, r);
  let n = Object.assign({}, t), o = {}, i = new Set();
  for (let a in t)
    o[a] = e.interpolate(t[a], r[a]), i.add(a);
  for (let a in r)
    i.has(a) || (o[a] = e.interpolate(t[a], r[a]), i.add(a));
  return (a) => {
    for (let s in o)
      n[s] = o[s](a);
    return n;
  };
}, difference(t, r) {
  let n = 0;
  for (let o in t) {
    let i = e.difference(t[o], r[o]);
    n += Math.pow(i, 2);
  }
  return Math.sqrt(n);
} });
var yi = { interpolate(e, t) {
  return [e, t] = Tt.handleUndefined(e, t), (r) => r < 0.5 ? e : t;
}, difference(e, t) {
  return e === t ? 0 : 1;
} };
var Ec = (e = tt.HUSL) => ({ interpolate(t, r) {
  return [t, r] = Tt.handleUndefined(t, r), B.interpolate(B(t), B(r), e);
}, difference(t, r) {
  return B.difference(B(t), B(r));
} });
var yv = { colorModel: tt.HUSL }, kr = class {
  constructor(t = yv) {
    this.interpolate = (t2, r) => ([t2, r] = Tt.handleUndefined(t2, r), this.interPolationForValue(t2).interpolate(t2, r));
    this.difference = (t2, r) => this.interPolationForValue(t2).difference(t2, r);
    this.options = __spreadValues(__spreadValues({}, yv), t);
  }
  interPolationForValue(t) {
    let r = typeof t;
    if (r === "number")
      return vi;
    if (r === "boolean" || r === "function")
      return yi;
    if (B.isColor(t))
      return Ec(this.options.colorModel);
    if (r === "object") {
      if (t === null)
        return yi;
      let n = t.constructor;
      if (n && vv(n)) {
        let o = n.interpolationFor(t, this);
        if (o && o !== this && o.constructor !== kr)
          return o;
      }
      return Fc(this);
    }
    return console.warn(`No interpolation defined for ${t}`), yi;
  }
}, bv = new kr();
var ow = { velocity: 0, min: 0, max: 0, momentum: { friction: 2, tolerance: 10 }, bounce: { tension: 500, friction: 10, tolerance: 1 } }, Hs = class {
  constructor(t) {
    this.options = Object.assign(__spreadValues({}, ow), t), this.frictionAnimator = new js({ friction: this.options.momentum.friction, tolerance: this.options.momentum.tolerance, velocity: this.options.velocity }), this.springAnimator = new cn({ tension: this.options.bounce.tension, friction: this.options.bounce.friction, tolerance: this.options.bounce.tolerance, velocity: this.options.velocity }, vi), this.useSpring = false;
  }
  isReady() {
    return true;
  }
  next(t) {
    return this.current = this.currentAnimator.next(t), this.useSpring || this.tryTransitionToSpring(), this.current;
  }
  get currentAnimator() {
    return this.useSpring ? this.springAnimator : this.frictionAnimator;
  }
  isFinished() {
    return this.currentAnimator.isFinished();
  }
  get state() {
    return this.currentAnimator.getState();
  }
  setFrom(t) {
    this.setState({ x: t, v: this.state.v });
  }
  setState(t) {
    if (this.frictionAnimator.setFrom(t.x), this.frictionAnimator.setVelocity(t.v), this.isValidState())
      return this.tryTransitionToSpring();
    {
      let r = 0;
      return this.state.x <= this.options.min && (r = this.options.min), this.state.x >= this.options.max && (r = this.options.max), this.transitionToSpring(r);
    }
  }
  setTo(t) {
    this.frictionAnimator.setTo(t), this.springAnimator.setTo(t);
  }
  setLimits(t, r) {
    this.options.min = t, this.options.max = r;
  }
  tryTransitionToSpring() {
    let t = this.state.x < this.options.min && this.state.v <= 0, r = this.state.x > this.options.max && this.state.v >= 0;
    if (t || r) {
      let n;
      t ? n = this.options.min : n = this.options.max, this.transitionToSpring(n);
    } else
      this.useSpring = false;
  }
  transitionToSpring(t) {
    this.springAnimator.setFrom(this.state.x), this.springAnimator.setVelocity(this.state.v), this.springAnimator.setTo(t), this.useSpring = true;
  }
  isValidState() {
    let t = this.state.x < this.options.min && this.state.v > 0, r = this.state.x > this.options.max && this.state.v < 0;
    if (t || r) {
      let n;
      t ? n = this.options.min : n = this.options.max;
      let o = this.frictionAnimator.options.friction;
      return 1 - o * (n - this.state.x) / this.state.v > 0;
    }
    return true;
  }
};
var Mc = class {
  constructor(t, r, n) {
    this.animator = t;
    this.updateCallback = r;
    this.finishedCallback = n;
    this.update = (t2, r2) => {
      if (this.animator.isFinished())
        this.finish();
      else {
        let n2 = this.animator.next(r2);
        this.updateCallback(n2);
      }
    };
    this.animator.isReady() || console.warn("AnimationDriver initialized with animator that isn't ready");
  }
  finish() {
    this.finishedCallback && this.finishedCallback(this.animator.isFinished());
  }
  isFinished() {
    return this.animator.isFinished();
  }
};
var bi = class extends Mc {
  play() {
    if (ge.target !== L.preview) {
      this.finishedCallback && this.finishedCallback(false);
      return;
    }
    Pt.on("update", this.update);
  }
  cancel() {
    Pt.off("update", this.update);
  }
  finish() {
    Pt.off("update", this.update), super.finish();
  }
};
var Ac = react.exports.createContext({ dragging: false }), fw = xi();
function wv(e) {
  let n = class extends react.exports.Component {
    constructor(i, a) {
      super(i, a);
      this.state = { isDragging: false };
      this.x = q(0);
      this.y = q(0);
      this.onChangePosition = (i2, a2) => {
        i2.value !== i2.oldValue && this.props.onMove && this.props.onMove(this.point, this);
      };
      this.isMoving = false;
      this.isAnimating = false;
      this.directionLockAxis = null;
      this._constraints = null;
      this.panStart = (i2) => {
        !this.props.enabled || (this.isMoving = this.isAnimating, this.stopAnimation(), this.resetdirectionLock(), this.layerStartPoint = this.point, this.correctedLayerStartPoint = this.point, this._constraints && this.props.bounce && (this.correctedLayerStartPoint = this.constrainPosition(this.correctedLayerStartPoint, this._constraints, 1 / this.props.overdragScale)), this.previousPoint = this.correctedLayerStartPoint, this.state.isDragging || this.setState({ isDragging: true }), this.props.onDragSessionStart && this.props.onDragSessionStart(i2, this));
      };
      this.pan = (i2) => {
        let { enabled: a2, speedX: s2, speedY: l2, directionLock: u2, overdragScale: c, vertical: f, horizontal: p, pixelAlign: m, onDragStart: d, onDragWillMove: h, onDragDidMove: v, onDragSessionMove: y } = this.props;
        if (!a2)
          return;
        let P = __spreadValues({}, this.previousPoint);
        if (P.x += i2.delta.x * s2, P.y += i2.delta.y * l2, this.previousPoint = __spreadValues({}, P), this._constraints && (P = this.constrainPosition(P, this._constraints, c)), u2)
          if (this.directionLockAxis === null) {
            let b = i2.offset;
            b.x = b.x * s2, b.y = b.y * l2, this.updatedirectionLock(b);
            return;
          } else
            this.directionLockAxis === "y" && (P.x = this.layerStartPoint.x), this.directionLockAxis === "x" && (P.y = this.layerStartPoint.y);
        if (this.state.isDragging || (this.setState({ isDragging: true }), this.isMoving = true, d && d(i2, this)), h && h(i2, this), m && (P.x = Math.round(P.x), P.y = Math.round(P.y)), !p && !f)
          return;
        let C = null;
        p && !f ? C = "x" : f && !p && (C = "y"), this.setPoint(P, C), v && v(i2, this), y && y(i2, this);
      };
      this.panEnd = (i2) => {
        if (!this.props.enabled)
          return;
        this.startAnimation(i2);
        let { onDragSessionEnd: a2, onDragEnd: s2 } = this.props;
        this.state.isDragging && s2 && s2(i2, this), a2 && a2(i2, this), this.state.isDragging && this.setState({ isDragging: false }), this.isMoving = this.isAnimating;
      };
      this.mouseWheelStart = (i2) => {
        this.correctedLayerStartPoint = this.point, this.previousPoint = this.correctedLayerStartPoint, this.stopAnimation();
      };
      this.mouseWheel = (i2) => {
        let { enabled: a2, speedX: s2, speedY: l2, vertical: u2, horizontal: c, pixelAlign: f, onDragWillMove: p, onDragDidMove: m, mouseWheel: d } = this.props;
        if (!d || !a2)
          return;
        let h = __spreadValues({}, this.point);
        if (h.x -= i2.delta.x * s2, h.y -= i2.delta.y * l2, this._constraints && (h = this.constrainPosition(h, this._constraints, 0, false)), p && p(i2, this), f && (h.x = Math.round(h.x), h.y = Math.round(h.y)), !c && !u2)
          return;
        let v = null;
        c && !u2 ? v = "x" : u2 && !c && (v = "y"), this.setPoint(h, v), m && m(i2, this);
      };
      this.mouseWheelEnd = (i2) => {
      };
      this.onAnimationStep = (i2, a2) => {
        if (i2 === "x" && this.props.horizontal === false || i2 === "y" && this.props.vertical === false)
          return;
        let s2 = 0;
        if (this.constraints)
          if (this.props.bounce)
            s2 = a2 - this.getValue(i2);
          else {
            let { minX: u2, minY: c, maxX: f, maxY: p } = this.calculateConstraints(this._constraints);
            i2 === "x" && (s2 = mr(a2, u2, f) - this.getValue(i2)), i2 === "y" && (s2 = mr(a2, c, p) - this.getValue(i2));
          }
        else
          s2 = a2 - this.getValue(i2);
        let l2 = this.point;
        i2 === "x" && (l2[i2] = l2[i2] + s2), i2 === "y" && (l2[i2] = l2[i2] + s2), this.setPoint(l2, i2);
      };
      this.onAnimationStop = (i2) => {
        if (!(i2 === "x" && this.props.horizontal === false) && !(i2 === "y" && this.props.vertical === false) && !!this.animation) {
          if (this.props.pixelAlign) {
            let a2 = this.point;
            a2.x = Math.round(a2.x), a2.y = Math.round(a2.y), this.setPoint(a2, i2);
          }
          if (this.animation.x.isFinished() && this.animation.y.isFinished())
            return this.stopAnimation();
        }
      };
      this.stopAnimation = () => {
        this.isAnimating = false, this.isMoving = false, !!this.animation && (this.animation.x.cancel(), this.animation.y.cancel(), this.props.onDragAnimationEnd && this.props.onDragAnimationEnd(this.animation, this), this.animation = null);
      };
      let s = this.props.left, l = this.props.top;
      s ? ie(s) ? this.x = s : this.x = q(s) : this.x = q(0), l ? ie(l) ? this.y = l : this.y = q(l) : this.y = q(0), this.x.onUpdate(this.onChangePosition), this.y.onUpdate(this.onChangePosition);
      let u = this.props.constraints;
      u && (this.constraints = u);
    }
    UNSAFE_componentWillReceiveProps(i) {
      this.props.left !== i.left && V(i.left) && this.x.set(i.left), this.props.top !== i.top && V(i.top) && this.y.set(i.top);
      let a = i.constraints;
      a && (this.constraints = a);
    }
    get point() {
      return { x: this.x.get(), y: this.y.get() };
    }
    setPoint(i, a = null) {
      switch (a) {
        case "x":
          this.x.set(i.x);
          break;
        case "y":
          this.y.set(i.y);
          break;
        case null:
          this.x.set(i.x), this.y.set(i.y);
          break;
      }
    }
    getValue(i) {
      switch (i) {
        case "x":
          return this.x.get();
        case "y":
          return this.y.get();
      }
    }
    get width() {
      let i = this.props.width;
      return i ? ie(i) ? i.get() : typeof i == "string" ? parseFloat(i) : i : 100;
    }
    get height() {
      let i = this.props.height;
      return i ? ie(i) ? i.get() : typeof i == "string" ? parseFloat(i) : i : 100;
    }
    get constraints() {
      return this._constraints;
    }
    set constraints(i) {
      i !== null && typeof i == "object" ? this._constraints = { x: i.x || 0, y: i.y || 0, width: i.width || 0, height: i.height || 0 } : this._constraints = null, this._constraints && this.updateAnimationConstraints(this._constraints);
    }
    get constraintsOffset() {
      if (!this.constraints)
        return { x: 0, y: 0 };
      let { minX: i, minY: a, maxX: s, maxY: l } = this.calculateConstraints(this._constraints), u = this.point, c = { x: mr(u.x, i, s), y: mr(u.y, a, l) };
      return { x: u.x - c.x, y: u.y - c.y };
    }
    get isBeyondConstraints() {
      let i = this.constraintsOffset;
      return i.x !== 0 || i.y !== 0;
    }
    clampAndScale(i, a, s, l, u) {
      return u ? (i < a && (i = a + (i - a) * l), i > s && (i = s + (i - s) * l), i) : mr(i, a, s);
    }
    calculateConstraints(i) {
      if (!i)
        return { minX: Infinity, maxX: Infinity, minY: Infinity, maxY: Infinity };
      i.width < this.width && (i.width = this.width), i.height < this.height && (i.height = this.height);
      let a = { minX: De.minX(i), maxX: De.maxX(i), minY: De.minY(i), maxY: De.maxY(i) };
      return a.maxX -= this.width, a.maxY -= this.height, a;
    }
    constrainPosition(i, a, s, l = this.props.overdrag) {
      let { maxX: u, maxY: c, minX: f, minY: p } = this.calculateConstraints(this._constraints), m = { x: this.clampAndScale(i.x, f, u, s, l), y: this.clampAndScale(i.y, p, c, s, l) };
      return (this.props.speedX === 0 || this.props.horizontal === false) && (m.x = i.x), (this.props.speedY === 0 || this.props.vertical === false) && (m.y = i.y), m;
    }
    updatedirectionLock(i) {
      Math.abs(i.y) > this.props.directionLockThreshold.y ? this.directionLockAxis = "y" : Math.abs(i.x) > this.props.directionLockThreshold.x && (this.directionLockAxis = "x"), this.directionLockAxis !== null && this.props.onDragDirectionLockStart && this.props.onDragDirectionLockStart(this.directionLockAxis, this);
    }
    resetdirectionLock() {
      this.directionLockAxis = null;
    }
    setupAnimation() {
      this.animation || (this.animation = { x: this.setupAnimationForAxis("x"), y: this.setupAnimationForAxis("y") }, this.updateAnimationConstraints(this._constraints));
    }
    setupAnimationForAxis(i) {
      let a = {};
      a[i] = true;
      let s = new Hs({ momentum: this.props.momentumOptions, bounce: this.props.bounceOptions }), l = (c) => {
        this.onAnimationStep(i, c);
      }, u = () => {
        this.onAnimationStop(i);
      };
      return new bi(s, l, u);
    }
    updateAnimationConstraints(i) {
      if (!!this.animation)
        if (i) {
          let { minX: a, minY: s, maxX: l, maxY: u } = this.calculateConstraints(i);
          this.animation.x.animator.setLimits(a, l), this.animation.y.animator.setLimits(s, u);
        } else
          this.animation.x.animator.setLimits(-Infinity, Infinity), this.animation.y.animator.setLimits(-Infinity, Infinity);
    }
    startAnimation(i) {
      let { momentum: a, bounce: s, momentumVelocityMultiplier: l, speedX: u, speedY: c, overdrag: f, onDragAnimationStart: p } = this.props;
      if (!(a || s) || this.isBeyondConstraints === false && a === false || this.isBeyondConstraints === false && this.state.isDragging === false)
        return;
      let { minX: m, minY: d, maxX: h, maxY: v } = this.calculateConstraints(this._constraints), y = f === true || this.point.x > m && this.point.x < h, P = f === true || this.point.y > d && this.point.y < v;
      if (y === P && P === false)
        return;
      let C = i.velocity(0.1), b = C.x * l * u, T = C.y * l * c;
      this.directionLockAxis === "x" && (T = 0), this.directionLockAxis === "y" && (b = 0), this.setupAnimation(), this.isAnimating = true, this.isMoving = true, !!this.animation && (this.animation.x.animator.setState({ x: this.point.x, v: b }), y && this.animation.x.play(), this.animation.y.animator.setState({ x: this.point.y, v: T }), P && this.animation.y.play(), p && p(this.animation, this));
    }
    wrapHandler(i, a) {
      return a ? (s) => {
        i(s), a(s);
      } : i;
    }
    render() {
      let _a2 = this.props, { onPanStart: i, onPan: a, onPanEnd: s, onMouseWheelStart: l, onMouseWheel: u, onMouseWheelEnd: c } = _a2, f = __objRest(_a2, ["onPanStart", "onPan", "onPanEnd", "onMouseWheelStart", "onMouseWheel", "onMouseWheelEnd"]), p = __spreadValues({}, f);
      return Object.keys(n.draggingDefaultProps).forEach((m) => {
        delete p[m];
      }), p.onPanStart = this.wrapHandler(this.panStart, i), p.onPan = this.wrapHandler(this.pan, a), p.onPanEnd = this.wrapHandler(this.panEnd, s), p.onMouseWheelStart = this.wrapHandler(this.mouseWheelStart, l), p.onMouseWheel = this.wrapHandler(this.mouseWheel, u), p.onMouseWheelEnd = this.wrapHandler(this.mouseWheelEnd, c), p.left = this.x, p.top = this.y, react.exports.createElement(Ac.Provider, { value: { dragging: this.state.isDragging } }, react.exports.createElement(e, __spreadValues({}, p)));
    }
  }, t = n;
  t.draggingDefaultProps = { momentum: true, momentumOptions: { friction: 2.1, tolerance: 1 }, momentumVelocityMultiplier: 800, speedX: 1, speedY: 1, bounce: true, bounceOptions: { friction: 40, tension: 200, tolerance: 1 }, directionLock: false, directionLockThreshold: { x: 10, y: 10 }, overdrag: true, overdragScale: 0.5, pixelAlign: true, velocityTimeout: 100, velocityScale: 890, horizontal: true, vertical: true, enabled: true, constraints: {}, mouseWheel: false }, t.defaultProps = Object.assign({}, e.defaultProps, n.draggingDefaultProps);
  let r = t;
  return fw(r, e), r;
}
var hw = xi(), Dc = { onMouseEnter: "mouseenter", onMouseLeave: "mouseleave" }, Lc = Object.keys(Dc), gw = { panstart: ["onPanStart"], pan: ["onPan"], panend: ["onPanEnd"], tapstart: ["onTapStart", "onMouseDown"], tap: ["onTap", "onClick"], tapend: ["onTapEnd", "onMouseUp"], mousewheelstart: ["onMouseWheelStart"], mousewheel: ["onMouseWheel"], mousewheelend: ["onMouseWheelEnd"] }, vw = new Set(["tapstart", "tap", "tapend"]);
function Fv(e) {
  var r;
  let t = (r = class extends react.exports.Component {
    constructor() {
      super(...arguments);
      this.shouldCancelTap = false;
      this.activeEventListeners = new Map();
      this.hasFramerEventListener = false;
      this.component = react.exports.createRef();
    }
    get element() {
      return this.component.current && this.component.current.element;
    }
    componentDidMount() {
      this.addEventListeners();
    }
    componentDidUpdate(o) {
      this.addEventListeners(o);
    }
    componentWillUnmount() {
      this.removeEventListeners();
    }
    addEventListeners(o) {
      this.element && !this.hasFramerEventListener ? (this.element.addEventListener("FramerEvent", ({ detail: i }) => {
        let a = i.type, s = i.event;
        this.handleEvent(a, s);
      }), Lc.forEach((i) => this.addHoverEvent(i)), this.hasFramerEventListener = true) : this.element && o ? Lc.forEach((i) => this.checkHoverEvent(i, o)) : this.element || (this.hasFramerEventListener = false);
    }
    removeEventListeners() {
      Lc.forEach((o) => this.removeHoverEvent(o));
    }
    addHoverEvent(o) {
      let i = this.props[o];
      if (this.element && i) {
        let a = (l) => {
          let u = new at(l);
          i(u);
        };
        this.activeEventListeners.set(o, a);
        let s = Dc[o];
        this.element.addEventListener(s, a);
      }
    }
    removeHoverEvent(o) {
      let i = this.activeEventListeners.get(o);
      if (this.element && i) {
        let a = Dc[o];
        this.element.removeEventListener(a, i), this.activeEventListeners.delete(o);
      }
    }
    checkHoverEvent(o, i) {
      i[o] !== this.props[o] && (this.removeHoverEvent(o), this.addHoverEvent(o));
    }
    handleEvent(o, i) {
      let a = gw[o];
      !a || a.forEach((s) => {
        let l = this.props[s], u = this.shouldCancelTap && vw.has(s);
        l && !u && l(i);
      });
    }
    render() {
      return react.exports.createElement(Ac.Consumer, null, (o) => (this.shouldCancelTap = o.dragging, react.exports.createElement(e, __spreadProps(__spreadValues({}, this.props), { ref: this.component }))));
    }
  }, r.defaultProps = Object.assign({}, e.defaultProps), r);
  return hw(t, e), t;
}
var Ev = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function je(e = {}, t = false, r = true) {
  let n = {};
  n[dr] = { makeAnimatables: t, observeAnimatables: r, observers: new ti(), reset() {
    for (let i in o)
      Ev(o, i) && (o[i] = Ev(e, i) ? e[i] : void 0);
  }, transactions: new Set() };
  let o = new Proxy(n, yw);
  return Object.assign(o, e), o;
}
(function(r) {
  function e(n) {
    return n[dr].reset();
  }
  r.resetObject = e;
  function t(n, o) {
    return n[dr].observers.add(o);
  }
  r.addObserver = t;
})(je || (je = {}));
var Mv = class {
  constructor() {
    this.set = (t, r, n, o) => {
      if (r === dr)
        return false;
      let i = t[dr], a, s;
      if (ie(n) ? (a = n, s = a.get()) : s = n, i.makeAnimatables && typeof n != "function" && typeof n != "object" && !a && (a = q(n)), i.observeAnimatables && a) {
        let c = i.transactions;
        a.onUpdate({ update: (f, p) => {
          p && c.add(p), i.observers.notify({ value: o }, p);
        }, finish: (f) => {
          c.delete(f) && i.observers.finishTransaction(f);
        } });
      }
      let l = false, u = true;
      if (t[r] !== void 0) {
        ie(t[r]) ? (u = t[r].get() !== s, t[r].set(s)) : (u = t[r] !== s, t[r] = s);
        let c = s !== null && typeof s == "object";
        (Array.isArray(s) || c) && (u = true), l = true;
      } else
        a && (n = a), l = Reflect.set(t, r, n);
      return u && i.observers.notify({ value: o }), l;
    };
    this.get = (t, r, n) => {
      if (r === dr)
        return t[r];
      let o = Reflect.get(t, r, n);
      return typeof o == "function" ? o.bind(n) : o;
    };
  }
  deleteProperty(t, r) {
    let n = Reflect.deleteProperty(t, r);
    return t[dr].observers.notify({ value: t }), n;
  }
  ownKeys(t) {
    let r = Reflect.ownKeys(t), n = r.indexOf(dr);
    return n !== -1 && r.splice(n, 1), r;
  }
  getOwnPropertyDescriptor(t, r) {
    if (r !== dr)
      return Reflect.getOwnPropertyDescriptor(t, r);
  }
}, yw = new Mv(), dr = Symbol("private");
var bw = "radius";
function xw(e) {
  return bw in e;
}
function Si(e) {
  let t = Number(e);
  return typeof e == "string" && isNaN(t) ? e : (ie(e) && (t = q.getNumber(e)), t ? `${t}px` : "0");
}
function Ci(e) {
  return e && e !== "0";
}
function Iv(e, t) {
  if (!xw(e))
    return;
  let { radius: r } = e;
  if (typeof r == "string" || ie(r) || V(r)) {
    let n = Si(r);
    Ci(n) && (t.borderTopLeftRadius = t.borderTopRightRadius = t.borderBottomRightRadius = t.borderBottomLeftRadius = n);
  } else if (r) {
    let n = Si(r.topLeft), o = Si(r.topRight), i = Si(r.bottomRight), a = Si(r.bottomLeft);
    (Ci(n) || Ci(o) || Ci(i) || Ci(a)) && (t.borderTopLeftRadius = n, t.borderTopRightRadius = o, t.borderBottomRightRadius = i, t.borderBottomLeftRadius = a);
  }
}
function Av(e, t) {
  !e.blendingMode || e.blendingMode === "normal" || (t.mixBlendMode = e.blendingMode);
}
function Dv(e, t) {
  e.overflow && (t.overflow = e.overflow);
}
var Sw = "opacity";
function Lv(e) {
  return Sw in e;
}
function zs(e, t) {
  if (!Lv(e))
    return;
  let r = q.getNumber(e.opacity);
  r !== 1 && (t.opacity = r);
}
var Cw = ["color", "x", "y", "blur"], Oc;
(function(t) {
  function e(r) {
    return r && Cw.every((n) => n in r);
  }
  t.is = e;
})(Oc || (Oc = {}));
var Pw = ["inset", "color", "x", "y", "blur", "spread"], lo;
(function(r) {
  function e(n) {
    return n && Pw.every((o) => o in n);
  }
  r.is = e;
  function t(n) {
    return `${n.inset ? "inset " : ""}${n.x}px ${n.y}px ${n.blur}px ${n.spread}px ${n.color}`;
  }
  r.toCSS = t;
})(lo || (lo = {}));
var Rw = /var\(([^),]+)/, Pi = react.exports.createContext(() => null), Vv = class extends react.exports.PureComponent {
  constructor() {
    super(...arguments);
    this.lookup = (t) => {
      let r = Rw.exec(t), n = r ? r[1].trim() : "";
      return this.props.customProperties[n] || null;
    };
  }
  render() {
    let { children: t, customProperties: r } = this.props;
    return react.exports.createElement(Pi.Provider, { value: this.lookup }, react.exports.createElement("div", { style: r }, t));
  }
};
function jv(e) {
  let t = [];
  if (e && e.length) {
    let r = e.map((n) => `drop-shadow(${n.x}px ${n.y}px ${n.blur}px ${n.color})`);
    t.push(...r);
  }
  return t;
}
function Ws(e, t) {
  if (!e.shadows || e.shadows.length === 0)
    return;
  let r = e.shadows.map((n) => `${n.x}px ${n.y}px ${n.blur}px ${n.color}`).join(", ");
  !r || (t.textShadow = r);
}
function Bv(e, t) {
  if (!e.shadows || e.shadows.length === 0)
    return;
  let r = e.shadows.map((n) => lo.toCSS(n)).join(", ");
  !r || (t.boxShadow = r);
}
function Nv(e, t, r, n, o, i, a, s) {
  let l = [], u = null, c = null, f = false, p = [], m = [], d = e.length, h = "svg-shadow", v = L.current() === L.canvas ? { className: h } : {};
  for (let y = 0, P = d; y < P; y++) {
    let C = e[y];
    C.inset ? m.push(C) : p.push(C);
  }
  if (p.length > 0) {
    p.reverse();
    let y = r.add("_shadow_out"), P = De.atOrigin(t), C = [P];
    for (let H = 0, X = p.length; H < X; H++) {
      let ae = p[H], G = Vc(ae, P, true);
      G !== null && C.push(G);
    }
    let b = 0, T = [], F = [];
    for (let H = 0, X = p.length; H < X; H++) {
      let ae = p[H], G = Fw(r, ae, H);
      b = Math.max(b, ae.blur), T.push(G.filterElements), F.push(G.mergeElement);
    }
    let I = i;
    V(I) || (I = 0);
    let A = s.strokeMiterlimit;
    V(A) || (A = 4);
    let E = De.merge(...C);
    E = De.inflate(E, (I * A / 2 + b) * 1.1);
    let k = t.width + (i ? i / 2 : 0.1), W = t.height + (i ? i / 2 : 0.1), K = E.x / k * 100, U = E.y / W * 100, N = E.width / k * 100, ee = E.height / W * 100;
    l.push(react.exports.createElement("filter", __spreadValues({ key: y.id, id: y.id, x: `${K.toFixed(1)}%`, y: `${U.toFixed(1)}%`, width: `${N.toFixed(1)}%`, height: `${ee.toFixed(1)}%`, filterUnits: "objectBoundingBox" }, v), T, p.length > 1 ? react.exports.createElement("feMerge", null, F) : null)), u = react.exports.createElement("g", __spreadValues({ filter: y.urlLink }, v), react.exports.createElement("use", __spreadProps(__spreadValues({}, s), { fill: "black", fillOpacity: n <= 0 ? 0 : 1, stroke: "black", strokeOpacity: o <= 0 ? 0 : 1, strokeWidth: o > 0 ? i : 0, xlinkHref: r.link, clipPath: a.urlLink })));
  }
  if (m.length) {
    m.reverse();
    let y = r.add("_shadow_inside"), P = De.atOrigin(t), C = [P];
    for (let N = 0, ee = m.length; N < ee; N++) {
      let H = m[N], X = Vc(H, P, true);
      X !== null && C.push(X);
    }
    let b = De.merge(...C), T = t.width + (i ? i / 2 : 0.1), F = t.height + (i ? i / 2 : 0.1), I = b.x / T * 100, A = b.y / F * 100, E = b.width / T * 100, k = b.height / F * 100, W = [], K = [];
    for (let N = 0, ee = m.length; N < ee; N++) {
      let H = m[N], X = Ew(r, H, N);
      W.push(X.filterElements), K.push(X.mergeElement);
    }
    l.push(react.exports.createElement("filter", __spreadValues({ key: y.id, id: y.id, x: `${I.toFixed(1)}%`, y: `${A.toFixed(1)}%`, width: `${E.toFixed(1)}%`, height: `${k.toFixed(1)}%`, filterUnits: "objectBoundingBox" }, v), W, m.length > 1 ? react.exports.createElement("feMerge", null, K) : null));
    let U;
    c = react.exports.createElement("use", __spreadValues({ fill: "black", fillOpacity: "1", filter: y.urlLink, xlinkHref: r.link, clipPath: U }, v));
  }
  return { definition: l, outsetElement: u, insetElement: c, needsStrokeClip: f };
}
function Fw(e, t, r) {
  let n = e.add("_outer_shadow" + r), o = n.add("offset").id, i = n.add("blur").id, a = n.add("matrix").id, s = react.exports.createElement(Mw, { key: n.id + "-filters", shadow: t, blurId: i, offsetId: o, matrixId: a }), l = react.exports.createElement("feMergeNode", { key: n.id + "-merge", in: a });
  return { filterElements: s, mergeElement: l };
}
var Mw = (e) => {
  let t = react.exports.useContext(Pi), { shadow: r, blurId: n, offsetId: o, matrixId: i } = e, a = r.color, s = t(a);
  s && (a = s);
  let l = ot.toRgb(a), u = St(l.r / 255, 3), c = St(l.g / 255, 3), f = St(l.b / 255, 3), p = `0 0 0 0 ${u}   0 0 0 0 ${c}   0 0 0 0 ${f}  0 0 0 ${l.a} 0`;
  return react.exports.createElement(react.exports.Fragment, null, react.exports.createElement("feOffset", { dx: r.x, dy: r.y, in: "SourceAlpha", result: o }), react.exports.createElement("feGaussianBlur", { stdDeviation: r.blur / 2, in: o, result: n }), react.exports.createElement("feColorMatrix", { colorInterpolationFilters: "sRGB", values: p, type: "matrix", in: n, result: i }));
};
function Ew(e, t, r) {
  let n = e.add("_inside_shadow" + r), o = n.add("blur").id, i = n.add("offset").id, a = n.add("composite").id, s = n.add("matrix").id, l = react.exports.createElement(Iw, { key: n.id + "-filters", shadow: t, blurId: o, offsetId: i, compositeId: a, matrixId: s }), u = react.exports.createElement("feMergeNode", { key: n.id + "-merge", in: s });
  return { filterElements: l, mergeElement: u };
}
var Iw = (e) => {
  let t = react.exports.useContext(Pi), { shadow: r, blurId: n, offsetId: o, compositeId: i, matrixId: a } = e, s = r.color, l = t(s);
  l && (s = l);
  let u = ot.toRgb(s), c = u.r / 255, f = u.g / 255, p = u.b / 255, m = `0 0 0 0 ${c}   0 0 0 0 ${f}   0 0 0 0 ${p}  0 0 0 ${u.a} 0`;
  return react.exports.createElement(react.exports.Fragment, null, react.exports.createElement("feGaussianBlur", { stdDeviation: r.blur / 2, in: "SourceAlpha", result: n }), react.exports.createElement("feOffset", { dx: r.x, dy: r.y, in: n, result: o }), react.exports.createElement("feComposite", { in: o, in2: "SourceAlpha", operator: "arithmetic", k2: "-1", k3: "1", result: i }), react.exports.createElement("feColorMatrix", { colorInterpolationFilters: "sRGB", values: m, type: "matrix", in: i, result: a }));
};
function Vc(e, t, r) {
  let n = e.blur;
  if (lo.is(e) && r !== true) {
    if (e.inset)
      return null;
    n += e.spread;
  }
  let o, i, a, s;
  return r === true ? (o = -Math.abs(e.x) - n, i = Math.abs(e.x) + t.width + n, a = -Math.abs(e.y) - n, s = Math.abs(e.y) + t.height + n) : (o = e.x - n, i = e.x + t.width + n, a = e.y - n, s = e.y + t.height + n), i <= o || s <= a ? null : { x: o, y: a, width: i - o, height: s - a };
}
function Aw(e, t) {
  let r = [];
  V(e.brightness) && r.push(`brightness(${e.brightness / 100})`), V(e.contrast) && r.push(`contrast(${e.contrast / 100})`), V(e.grayscale) && r.push(`grayscale(${e.grayscale / 100})`), V(e.hueRotate) && r.push(`hue-rotate(${e.hueRotate}deg)`), V(e.invert) && r.push(`invert(${e.invert / 100})`), V(e.saturate) && r.push(`saturate(${e.saturate / 100})`), V(e.sepia) && r.push(`sepia(${e.sepia / 100})`), V(e.blur) && r.push(`blur(${e.blur}px)`), e.dropShadows && r.push(...jv(e.dropShadows)), r.length !== 0 && (t.filter = t.WebkitFilter = r.join(" "));
}
function Dw(e, t) {
  V(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function uo(e, t) {
  Dw(e, t), Aw(e, t);
}
function Hv(e, t) {
  let { color: r } = e;
  typeof r == "string" ? t.color = r : B.isColorObject(r) && (t.color = r.initialValue || B.toRgbString(r));
}
function kc(e, t, r = false) {
  Ts(e, t), Iv(e, t), uo(e, t), Av(e, t), Dv(e, t), zs(e, t), Hv(e, t), r ? Ws(e, t) : Bv(e, t);
}
var { getNumber: At } = q, zv = { z: 0, rotation: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: 0.5, originY: 0.5, originZ: 0 };
function Us(e, t) {
  return typeof t == "string" && (t = parseFloat(t)), V(t) ? t : At(e);
}
function Wv(e, t, r) {
  let n = r, o = typeof t.x == "number" ? `${t.x}px` : t.x, i = typeof t.y == "number" ? `${t.y}px` : t.y, a = At(e.z), s = At(e.scaleZ), l = At(e.originZ), u = Us(e.rotationZ, Ze(n.rotateZ)), c = Us(e.rotationX, Ze(n.rotateX)), f = Us(e.rotationY, Ze(n.rotateY)), p = At(e.scale), m = At(e.scaleX), d = At(e.scaleY), h = At(e.skew), v = At(e.skewX), y = At(e.skewY), P = Us(e.rotation, Ze(n.rotate));
  ge.target === L.export || a !== 0 || s !== 1 || l !== 0 || u !== 0 || c !== 0 || f !== 0 ? r.transform = `
            ${`translate3d(${o}, ${i}, ${a}px)`}
            scale3d(${m * p}, ${d * p}, ${s})
            skew(${h}deg,${h}deg)
            skewX(${v}deg)
            skewY(${y}deg)
            translateZ(${l}px)
            rotateX(${c}deg)
            rotateY(${f}deg)
            rotateZ(${(P + u).toFixed(4)}deg)
            translateZ(${-l}px)` : r.transform = `
            ${`translate(${o}, ${i})`}
            scale(${m * p}, ${d * p})
            skew(${h}deg,${h}deg)
            skewX(${v}deg)
            skewY(${y}deg)
            rotate(${P.toFixed(4)}deg)`;
  let b = `${At(e.originX) * 100}% ${At(e.originY) * 100}%`;
  r.transformOrigin = b, r.WebkitTransformOrigin = b;
}
function Gv(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "100% 100%";
    default:
      return "cover";
  }
}
function Ow(e, t) {
  let r = ni(e);
  r && (t.backgroundImage = `url("${r.src}")`, t.backgroundSize = Gv(r.fit), t.backgroundRepeat = "no-repeat", t.backgroundPosition = "center");
}
function wi(e) {
  return V(e) ? `${e}px` : e;
}
function $v(e, t, r) {
  if (t[r] !== void 0) {
    let n = q.get(t[r], void 0);
    e[r] = wi(n);
  }
}
var pn = class extends Se {
  constructor() {
    super(...arguments);
    this.element = null;
    this.imageDidChange = false;
    this.state = { size: null };
    this.updateStyle = () => {
      !this.element || Object.assign(this.element.style, this.getStyle());
    };
    this.setElement = (t) => {
      this.element = t;
    };
    this.onPropsChange = (t) => {
      let r = pn.rect(q.objectToValues(t.value));
      this.state.size && ie(this.state.size.width) && ie(t.value.width) && this.state.size.width.set(r.width), this.state.size && ie(this.state.size.height) && ie(t.value.height) && this.state.size.height.set(r.height), this.updateStyle();
    };
    this.onSizeChange = () => {
      this.updateStyle();
    };
  }
  static rect(t) {
    let r = st.fromProperties(t);
    return st.toRect(r, t.parentSize || null, null, true);
  }
  get rect() {
    return pn.rect(this.props);
  }
  static getDerivedStateFromProps(t, r) {
    let n = pn.updatedSize(t, r), { target: o } = ge;
    return (t.background && et.isImageObject(t.background) ? t.background.src : null) ? { size: n } : r.size && (o === L.preview || r.size.width === n.width && r.size.height === n.height) ? null : { size: n };
  }
  static updatedSize(t, r) {
    let n = pn.rect(t), o = r.size, i = { width: n.width, height: n.height }, { target: a } = ge;
    return o ? ie(o.width) && ie(o.height) ? (o.width.set(i.width), o.height.set(i.height)) : o = i : a === L.preview ? o = je(i, true) : o = i, o;
  }
  getStyle() {
    let t = this.rect, r = { display: "block", position: "absolute", width: `${t.width}px`, height: `${t.height}px`, pointerEvents: void 0, userSelect: "none" }, n = q.get(this.props.left, void 0), o = q.get(this.props.top, void 0);
    Object.assign(r, this.props._initialStyle);
    let i = this.context.size !== Me.Disabled, a = q.get(this.props.perspective, void 0);
    r.perspective = a, r.WebkitPerspective = a;
    let s, l = q.get(this.props.backfaceVisible, void 0);
    l === true ? s = "visible" : l === false && (s = "hidden"), r.backfaceVisibility = s, r.WebkitBackfaceVisibility = s;
    let u = q.get(this.props.preserve3d, void 0);
    if (u === true ? r.transformStyle = "preserve-3d" : u === false && (r.transformStyle = "flat"), !i) {
      $v(r, this.props, "right"), $v(r, this.props, "bottom");
      let f = q.get(this.props.width, void 0), p = wi(f), m = q.get(this.props.height, void 0), d = wi(m);
      typeof n == "string" && n.endsWith("%") && this.props.right === null && (n = `calc(${n} - calc(${p}} / 2))`, r.width = p), typeof o == "string" && o.endsWith("%") && this.props.bottom === null && (o = `calc(${o} - calc(${d} / 2))`, r.height = d), o !== void 0 && r.bottom !== void 0 ? (r.height = void 0, o = wi(q.get(this.props.top, void 0))) : r.height = d, n !== void 0 && r.right !== void 0 ? (r.width = void 0, n = wi(q.get(this.props.left, void 0))) : r.width = p;
    }
    let c = __spreadValues({}, t);
    return typeof n != "undefined" && (c.x = n), typeof o != "undefined" && (c.y = o), Wv(this.props, c, r), kc(this.props, r), Ow(this.props, r), Se.applyWillChange(this.props, r, false), this.props.style && Object.assign(r, this.props.style), r;
  }
  componentDidMount() {
    let { target: t } = ge;
    t === L.preview && (this.propsObserver = je(this.props, true), this.propsObserverCancel = je.addObserver(this.propsObserver, this.onPropsChange), this.props.parentSize && ie(this.props.parentSize.width) && ie(this.props.parentSize.height) && (this.sizeObserver = je(this.props.parentSize, true), this.sizeObserverCancel = je.addObserver(this.sizeObserver, this.onSizeChange)));
  }
  componentDidUpdate() {
    let { target: t } = ge;
    this.propsObserverCancel && this.propsObserverCancel(), this.sizeObserverCancel && this.sizeObserverCancel(), t === L.preview && (this.propsObserver = je(this.props, true), this.propsObserverCancel = je.addObserver(this.propsObserver, this.onPropsChange), this.props.parentSize && ie(this.props.parentSize.width) && ie(this.props.parentSize.height) && (this.sizeObserver = je(this.props.parentSize, true), this.sizeObserverCancel = je.addObserver(this.sizeObserver, this.onSizeChange)));
  }
  componentWillUnmount() {
    this.propsObserverCancel && this.propsObserverCancel(), this.propsObserverCancel = void 0, this.sizeObserverCancel && this.sizeObserverCancel(), this.sizeObserverCancel = void 0;
  }
  render() {
    _.perf && _.perf.nodeRender();
    let { visible: t, id: r, className: n } = this.props;
    if (!t)
      return null;
    let o = this.getStyle(), i = this.rect, a = { width: i.width, height: i.height };
    return react.exports.createElement("div", { id: r, style: o, ref: this.setElement, className: n }, react.exports.createElement(ls, { parentSize: a }, this.layoutChildren()), react.exports.createElement(is, __spreadValues({}, this.props)));
  }
  layoutChildren() {
    let t = this.props._forwardedOverrides, r = this.props._overrideForwardingDescription;
    if (r) {
      let o = false;
      t = {};
      for (let i in r)
        o = true, t[i] = this.props[r[i]];
      o || (t = void 0);
    }
    let n = react.exports.Children.map(this.props.children, (o) => zh(o) ? react.exports.cloneElement(o, { parentSize: this.state.size, _forwardedOverrides: t }) : t && o ? react.exports.cloneElement(o, { _forwardedOverrides: t }) : o);
    return n && n.length === 1 && typeof n[0] == "string" && (n = [react.exports.createElement(Vw, { key: "0" }, n)]), n;
  }
}, wt = pn;
wt.supportsConstraints = true, wt.defaultFrameSpecificProps = __spreadProps(__spreadValues(__spreadValues({}, Hh), zv), { opacity: 1, background: B("rgba(0, 170, 255, 0.3)"), visible: true, borderWidth: 0, borderColor: "#222", borderStyle: "solid" }), wt.defaultProps = __spreadValues(__spreadValues({}, Se.defaultProps), pn.defaultFrameSpecificProps);
wt.contextType = ii;
var Vw = (e) => {
  let t = Object.assign({}, { height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Helvetica" }, e.style || {});
  return react.exports.createElement("div", { style: t }, e.children);
};
var kw = ["_border", "_constraints", "animate", "initial", "variants", "transition", "inherit", "center", "initial", "transformTemplate", "transformValues", "animate", "variants", "transition", "onUpdate", "onAnimationComplete", "onPanSessionStart", "onTapCancel", "whileTap", "whileHover", "onHoverStart", "onHoverEnd", "drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum", "dragTransition", "onDragStart", "onDragEnd", "onDrag", "onDirectionLock", "onDragTransitionEnd", "x", "y", "rotate", "rotateX", "rotateY", "rotateZ", "position", "border", "borderRadius", "shadow", "size"], _w = ["autoSize", "aspectRatio", "borderWidth", "borderStyle", "borderColor", "centerX", "centerY"];
function _c(e) {
  let t;
  for (let r in e)
    if (ie(e[r]))
      return true;
  for (t of kw)
    if (e.hasOwnProperty(t))
      return false;
  for (t of _w)
    if (e.hasOwnProperty(t))
      return true;
  return false;
}
var Gs = Fv(wt), $s = react.exports.forwardRef(function(t, r) {
  let n = Dr();
  if (_c(t)) {
    let o = t.parentSize || oi(n);
    return react.exports.createElement(Gs, __spreadProps(__spreadValues({}, t), { parentSize: o }));
  }
  return react.exports.createElement(we, __spreadProps(__spreadValues({}, t), { ref: r }));
});
function fn({ title: e = "", description: t = "Click and drag the connector to any frame on the canvas \u2192", children: r, size: n, hide: o, insideUserCodeComponent: i = false }) {
  let { target: a } = ge, s = react.exports.Children.count(r);
  return i && s === 0 ? react.exports.createElement(we, __spreadProps(__spreadValues({}, n), { "data-name": "placeholder" })) : a !== L.canvas || o || s !== 0 ? null : react.exports.createElement(we, { key: "empty-state", className: "framerInternalUI-canvasPlaceholder", top: 0, left: 0, bottom: 0, right: 0, style: { position: "absolute" } }, react.exports.createElement("div", { style: { display: "flex", alignItems: "center", lineHeight: "1.4", height: "100%", width: "100%" } }, react.exports.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%", WebkitMaskImage: `linear-gradient(90deg, black, black calc(100% - 12px * ${Nw}), transparent)` } }, react.exports.createElement(Hw, null, e), react.exports.createElement(zw, null, t))));
}
var Nw = "var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)", Hw = ({ children: e }) => react.exports.createElement("span", { style: { display: "flex", flexDirection: "column", textAlign: "center", flexGrow: 1, flexShrink: 0, fontWeight: 600, marginBottom: "5px" } }, e), zw = ({ children: e }) => react.exports.createElement("span", { style: { display: "flex", flexDirection: "column", textAlign: "center", flexGrow: 1, flexShrink: 0, fontWeight: 400, maxWidth: "200px" } }, e);
function mn(e, t) {
  Object.assign(e, { propertyControls: t });
}
function Ww(e) {
  return e.propertyControls;
}
function Ri(e, t) {
  let r, n = (...i) => {
    _.clearTimeout(r), r = _.setTimeout(e, t, ...i);
  }, o = () => {
    _.clearTimeout(r);
  };
  return n.cancel = o, n;
}
function Xs(e, { enabled: t, initial: r, prev: n, direction: o, constraints: i, offsetX: a, offsetY: s, onScrollStart: l, onScroll: u, onScrollEnd: c }) {
  let f = react.exports.useRef(false), p = react.exports.useCallback(() => {
    let d = $w(a, s), h = { point: d, velocity: { x: a.getVelocity(), y: s.getVelocity() }, offset: { x: d.x - r.x, y: d.y - r.y }, delta: { x: d.x - n.x, y: d.y - n.y } };
    return n.x = d.x, n.y = d.y, h;
  }, []), m;
  if (t) {
    let d = function(C) {
      return i.current === null ? C : mr(C, i.current.left, i.current.right);
    }, h = function(C) {
      return i.current === null ? C : mr(C, i.current.top, i.current.bottom);
    }, v = function(C) {
      a.stop(), a.set(d(a.get() - C));
    }, y = function(C) {
      s.stop(), s.set(h(s.get() - C));
    }, P = Ri(() => {
      c && c(p()), f.current = false;
    }, 200);
    m = (C) => {
      if (C.preventDefault(), !f.current) {
        let b = a.get(), T = s.get();
        r.x = b, r.y = T, n.x = b, n.y = T, l && l(p()), f.current = true;
      }
      switch (o) {
        case "horizontal":
          v(C.deltaX);
          break;
        case "vertical":
          y(C.deltaY);
          break;
        default:
          v(C.deltaX), y(C.deltaY);
      }
      u && u(p()), P();
    };
  }
  wr(e, "wheel", m, { passive: false });
}
function $w(e, t) {
  return { x: e.get(), y: t.get() };
}
var qw = { horizontal: "x", vertical: "y", both: true };
function Zw(e) {
  return e && qw[e];
}
var Jw = ({ dragDirection: e, children: t, fromCanvasComponent: r }) => react.exports.useMemo(() => react.exports.Children.map(t, (n) => {
  if (n === null || typeof n != "object" || typeof n.type == "string")
    return n;
  let o = {};
  switch (e) {
    case "vertical":
      o.width = "100%";
      break;
    case "horizontal":
      o.height = "100%";
      break;
    default:
      return n;
  }
  let i = r ? { style: Object.assign({}, n.props.style, o) } : o;
  return react.exports.cloneElement(n, i);
}), [e, t]), qv = (e) => typeof e == "number" ? e : e.get();
function Zs(e) {
  let _a2 = e, { direction: t = "vertical", directionLock: r = false, dragEnabled: n = true, dragElastic: o, dragMomentum: i, dragTransition: a, wheelEnabled: s = true, contentOffsetX: l = 0, contentOffsetY: u = 0, contentWidth: c, contentHeight: f, onScrollStart: p, onScroll: m, onScrollEnd: d, onDragStart: h, onDrag: v, onDragEnd: y, onUpdate: P, onDirectionLock: C, style: b, children: T, scrollAnimate: F, resetOffset: I, layoutId: A } = _a2, E = __objRest(_a2, ["direction", "directionLock", "dragEnabled", "dragElastic", "dragMomentum", "dragTransition", "wheelEnabled", "contentOffsetX", "contentOffsetY", "contentWidth", "contentHeight", "onScrollStart", "onScroll", "onScrollEnd", "onDragStart", "onDrag", "onDragEnd", "onUpdate", "onDirectionLock", "style", "children", "scrollAnimate", "resetOffset", "layoutId"]), k = ht(e, { specificLayoutId: A, postfix: "scroll" }), W = Je(typeof l == "number" ? l : 0), K = Je(typeof u == "number" ? u : 0), U = Ke(l) ? l : W, N = Ke(u) ? u : K, ee = react.exports.useRef(null), H = Au(), X = qs(), ae = react.exports.useRef(true);
  react.exports.useEffect(() => {
    H.updateConstraints();
  });
  function G(ne) {
    return ne = Qw(ne), c !== void 0 && (ne.left = -c), f !== void 0 && (ne.top = -f), ee.current = ne;
  }
  let { initial: S, prev: x } = react.exports.useRef({ initial: { x: 0, y: 0 }, prev: { x: 0, y: 0 } }).current, g = L.current() === L.preview, R = react.exports.useRef(null), O = react.exports.useRef(null), Y = react.exports.useRef(null);
  function re(ne) {
    let ue = ne && ae.current === false;
    return I && ue;
  }
  function te() {
    if (!O.current || !R.current)
      return;
    let ne = re(X);
    ae.current = X;
    let ue = Y.current;
    if (ue === null && l === void 0 && u === void 0)
      return;
    let Ne = t !== "vertical" ? qv(l) : 0, yt = t !== "horizontal" ? qv(u) : 0, pt = ue === null || Ne !== ue.offsetX || yt !== ue.offsetY, bt = O.current.offsetWidth - R.current.offsetWidth, wo = O.current.offsetHeight - R.current.offsetHeight, Sl = bt !== (ue == null ? void 0 : ue.maxXOffset) || wo !== (ue == null ? void 0 : ue.maxYOffset), Cl = (ue == null ? void 0 : ue.x) !== U.get() || (ue == null ? void 0 : ue.y) !== N.get();
    if (ne || pt || Sl && !Cl) {
      let le = -Math.min(Ne, bt), pe = -Math.min(yt, wo);
      U.set(le), N.set(pe), Y.current = { maxXOffset: bt, maxYOffset: wo, offsetX: Ne, offsetY: yt, x: le, y: pe };
    }
  }
  react.exports.useLayoutEffect(() => {
    L.current() === L.canvas && te();
  }), react.exports.useLayoutEffect(() => {
    L.current() !== L.canvas && te();
  }, []), react.exports.useEffect(() => {
    re(X) && te(), X === false && (ae.current = false);
  }, [X]);
  let oe = () => ({ x: U.get(), y: N.get() }), Ce = react.exports.useCallback(() => {
    let ne = oe();
    S.x = ne.x, S.y = ne.y, x.x = ne.x, x.y = ne.y;
  }, []), de = react.exports.useCallback(() => {
    let ne = oe(), ue = { point: ne, velocity: { x: U.getVelocity(), y: N.getVelocity() }, offset: { x: ne.x - S.x, y: ne.y - S.y }, delta: { x: ne.x - x.x, y: ne.y - x.y } };
    return x.x = ne.x, x.y = ne.y, ue;
  }, [U, N]), ye = react.exports.useCallback(() => {
    P && P({ x: U.get(), y: N.get() }), m && m(de());
  }, [m, P, de, U, N]), qe = react.exports.useCallback(() => {
    Le.update(ye, false, true);
  }, [ye]), Re = (ne, ue) => {
    Ce(), h && h(ne, ue), p && p(ue);
  }, $ = () => d && d(de());
  Xs(R, { enabled: s, initial: S, prev: x, direction: t, offsetX: U, offsetY: N, onScrollStart: (ne) => {
    H.updateConstraints(), p == null || p(ne);
  }, onScroll: m, onScrollEnd: d, constraints: ee });
  let j = Je(0), se = Je(0);
  react.exports.useLayoutEffect(() => {
    let ne = (Ne) => {
      let yt = R.current;
      if (!(yt instanceof HTMLDivElement))
        return;
      yt.scrollLeft = -Ne;
      let pt = ee.current;
      if (pt) {
        let bt = 0;
        Ne > pt.right && (bt = Ne), Ne < pt.left && (bt = Ne - pt.left), j.set(bt);
      }
      qe();
    }, ue = U.get();
    return ue !== 0 && ne(ue), U.onChange(ne);
  }, [U, j, qe]), react.exports.useLayoutEffect(() => {
    let ne = (Ne) => {
      let yt = R.current;
      if (!(yt instanceof HTMLDivElement))
        return;
      yt.scrollTop = -Ne;
      let pt = ee.current;
      if (pt) {
        let bt = 0;
        Ne > pt.bottom && (bt = Ne), Ne < pt.top && (bt = Ne - pt.top), se.set(bt);
      }
      qe();
    }, ue = N.get();
    return ue !== 0 && ne(ue), N.onChange(ne);
  }, [N, se, qe]);
  let Fe = react.exports.useCallback(() => {
    let ne = R.current;
    if (!(ne instanceof HTMLDivElement))
      return;
    let ue = Math.abs(U.get() + ne.scrollLeft), Ne = Math.abs(N.get() + ne.scrollTop);
    ue > 1 && U.set(-ne.scrollLeft), Ne > 1 && N.set(-ne.scrollTop);
  }, [U, N]), Pe = react.exports.Children.count(T) === 0, Qe = t !== "vertical" && !Pe ? "auto" : "100%", rt = t !== "horizontal" && !Pe ? "auto" : "100%", Wt = E.__fromCanvasComponent ? {} : { width: E.__fromCodeComponentNode ? "100%" : E.width, height: E.__fromCodeComponentNode ? "100%" : E.height };
  return react.exports.createElement(we, __spreadProps(__spreadValues(__spreadValues({ "data-framer-component-type": "Scroll", background: "none" }, E), Wt), { style: __spreadProps(__spreadValues({}, b), { willChange: g ? "transform" : void 0, overflow: "hidden" }), onScroll: Fe, preserve3d: E.preserve3d, ref: R, layoutId: k, onBeforeLayoutMeasure: te }), react.exports.createElement(we, { "data-framer-component-type": "ScrollContentWrapper", animate: F, drag: n && Zw(t), dragDirectionLock: r, dragElastic: o, dragMomentum: i, dragTransition: a, dragConstraints: R, dragControls: H, onDragStart: Re, onDrag: v, onDragEnd: y, onDragTransitionEnd: $, onDirectionLock: C, onMeasureDragConstraints: G, width: Qe, height: rt, _dragX: U, _dragY: N, position: "relative", x: j, y: se, ref: O, style: { display: Pe ? "block" : "inline-block", willChange: g ? "transform" : void 0, backgroundColor: "transparent", overflow: "visible", minWidth: "100%", minHeight: "100%" }, preserve3d: E.preserve3d }, react.exports.createElement(fn, { children: T, size: { width: V(E.width) ? E.width : "100%", height: V(E.height) ? E.height : "100%" }, insideUserCodeComponent: !E.__fromCodeComponentNode, title: "Scroll", description: "Click and drag the connector to any frame on the canvas \u2192" }), Jw({ dragDirection: t, children: T, fromCanvasComponent: E.__fromCanvasComponent })));
}
function Qw({ top: e, left: t, right: r, bottom: n }) {
  let o = r - t;
  return { top: -(n - e), left: -o, right: 0, bottom: 0 };
}
mn(Zs, { direction: { type: fe.SegmentedEnum, title: "Direction", options: ["vertical", "horizontal", "both"], defaultValue: "vertical" }, contentOffsetX: { type: fe.Number, title: "Offset X", defaultValue: 0, min: 0, step: 10, displayStepper: true, hidden: ({ direction: e }) => e === "vertical" }, contentOffsetY: { type: fe.Number, title: "Offset Y", defaultValue: 0, min: 0, step: 10, displayStepper: true, hidden: ({ direction: e }) => e === "horizontal" }, directionLock: { type: fe.Boolean, title: "Lock", enabledTitle: "1 Axis", disabledTitle: "Off", defaultValue: true }, dragEnabled: { type: fe.Boolean, title: "Drag", enabledTitle: "On", disabledTitle: "Off", defaultValue: true }, wheelEnabled: { type: fe.Boolean, title: "Wheel", enabledTitle: "On", disabledTitle: "Off", defaultValue: true }, resetOffset: { type: fe.Boolean, title: "Reset", enabledTitle: "True", disabledTitle: "False", defaultValue: false } });
Zs.supportsConstraints = true;
var Fi = wv(Gs);
function Zv(e) {
  return "rect" in e && e.rect instanceof Function;
}
function Bc(e, t = 0) {
  return e ? ie(e) ? e.get() : e : t;
}
var Js = class extends react.exports.Component {
  wrapHandlers(t, r) {
    return r ? (n, o) => {
      t && t(n, o), r(n, this);
    } : t;
  }
  render() {
    return react.exports.createElement(Wh, null, ({ size: t }) => {
      let r = oi(t), n = Object.assign({}, this.props, { parentSize: r });
      if (Object.keys(Js.scrollProps).map((T) => {
        delete n[T];
      }), !this.props.children)
        return react.exports.createElement(wt, __spreadValues({}, n), react.exports.createElement(Fi, { width: n.width, height: n.height }));
      let o = { top: 0, left: 0, bottom: 0, right: 0 }, { width: i, height: a } = wt.rect(n), s = react.exports.Children.map(this.props.children, (T) => {
        if (T === null || typeof T != "object" || typeof T.type == "string")
          return T;
        let F = T.type;
        if (Zv(F)) {
          let A = F.rect(T.props, r);
          A && (o.top = Math.min(De.minY(A), o.top), o.left = Math.min(De.minX(A), o.left), o.bottom = Math.max(De.maxY(A), o.bottom), o.right = Math.max(De.maxX(A), o.right));
        }
        let I = {};
        return this.props.direction === "vertical" ? I.width = i : this.props.direction === "horizontal" && (I.height = a), react.exports.cloneElement(T, I);
      }), { onScrollStart: l, onScroll: u, onScrollEnd: c, onScrollSessionStart: f, onScrollSessionEnd: p } = this.props, m = Bc(i), d = Bc(a), h = Math.max(o.right, m), v = Math.max(o.bottom, d), y = Math.min(0, m - h), P = Math.min(0, d - v), C = { x: y, y: P, width: h + h - m, height: v + v - d }, b = {};
      return b.enabled = this.props.draggingEnabled, b.background = "none", b.width = h, b.height = v, b.constraints = C, b.onMove = this.props.onMove, b.onDragSessionStart = this.wrapHandlers(this.props.onDragSessionStart, f), b.onDragSessionMove = this.props.onDragSessionMove, b.onDragSessionEnd = this.wrapHandlers(this.props.onDragSessionEnd, p), b.onDragAnimationStart = this.props.onDragAnimationStart, b.onDragAnimationEnd = this.props.onDragAnimationEnd, b.onDragDidMove = this.wrapHandlers(this.props.onDragDidMove, u), b.onDragDirectionLockStart = this.props.onDragDirectionLockStart, b.onDragStart = this.wrapHandlers(this.props.onDragStart, l), b.onDragEnd = this.wrapHandlers(this.props.onDragEnd, c), b.onDragWillMove = this.props.onDragWillMove, b.horizontal = this.props.direction !== "vertical", b.vertical = this.props.direction !== "horizontal", b.directionLock = this.props.directionLock, b.mouseWheel = true, b.left = this.props.contentOffsetX, b.top = this.props.contentOffsetY, b.preserve3d = this.props.preserve3d, react.exports.createElement(wt, __spreadValues({}, n), react.exports.createElement(Fi, __spreadValues({}, b), s), react.exports.createElement(fn, { children: this.props.children, size: { width: m, height: d }, title: "Connect to scrollable area" }));
    });
  }
}, fo = Js;
fo.supportsConstraints = true, fo.scrollProps = { draggingEnabled: true, direction: "vertical", directionLock: true, mouseWheel: true, contentOffsetX: null, contentOffsetY: null }, fo.defaultProps = Object.assign({}, wt.defaultProps, Js.scrollProps, { overflow: "visible", background: "none", width: "100%", height: "100%" }), fo.propertyControls = { direction: { type: fe.SegmentedEnum, title: "Direction", options: ["vertical", "horizontal", "both"] }, directionLock: { type: fe.Boolean, title: "Lock", enabledTitle: "1 Axis", disabledTitle: "Off", hidden(t) {
  return t.direction !== "both";
} } };
var J;
(function(e) {
  e[e.Possible = 2] = "Possible", e[e.Began = 4] = "Began", e[e.Changed = 8] = "Changed", e[e.Ended = 16] = "Ended", e[e.Failed = 32] = "Failed", e[e.Cancelled = 64] = "Cancelled", e[e.Recognized = 128] = "Recognized";
})(J || (J = {}));
function Jv(e) {
  switch (e) {
    case 2:
      return "Possible";
    case 4:
      return "Began";
    case 8:
      return "Changed";
    case 16:
      return "Ended";
    case 32:
      return "Failed";
    case 64:
      return "Cancelled";
    case 128:
      return "Recognized";
    default:
      return "Unknown";
  }
}
function Qv(e, t) {
  return (e & t) != 0;
}
var dn = class {
  constructor() {
    this._state = 2;
    this.preventers = [];
  }
  get state() {
    return this._state;
  }
  setState(t) {
    this._state = t;
  }
  get isPrevented() {
    let t = false;
    for (let r of this.preventers)
      if (r.state & (4 | 8 | 16)) {
        t = true;
        break;
      }
    return t;
  }
  canBePreventedBy(t) {
    this.preventers.push(t);
  }
  hasState(t) {
    return Qv(this.state, t);
  }
  stateSwitch(t) {
    let r;
    switch (this.state) {
      case 2:
        r = 4 | 128 | 32;
        break;
      case 4:
        r = 8 | 64 | 16;
        break;
      case 8:
        r = 8 | 64 | 16;
        break;
      case 128:
      case 16:
      case 64:
      case 32:
        r = 2;
        break;
      default:
        r = 0;
    }
    if (!Qv(t, r)) {
      console.warn(`Unallowed state change from ${Jv(this.state)} to ${Jv(t)}`);
      return;
    }
    this.setState(t);
  }
  cancel() {
    this.hasState(4 | 8) && this.setState(64), this.reset();
  }
  reset() {
    this.hasState(2) || this.stateSwitch(2);
  }
};
var Nc = class extends dn {
  constructor() {
    super(...arguments);
    this.eventType = "pan";
  }
  pointerSessionBegan(t, r) {
    this.recognize(t, r);
  }
  pointerSessionMoved(t, r) {
    this.recognize(t, r);
  }
  pointerSessionEnded(t, r) {
    this.panend(r);
  }
  recognize(t, r) {
    (Math.abs(r.delta.x) > 0 || Math.abs(r.delta.y) > 0) && (this.startEvent ? this.pan(r) : this.panstart(r));
  }
  reset() {
    this.startEvent = null, super.reset();
  }
  panstart(t) {
    !this.hasState(J.Possible) || t.isLeftMouseClick !== void 0 && !t.isLeftMouseClick || (this.stateSwitch(J.Began), this.startEvent = t, this.handler && this.startEvent.target && this.handler.gestureBegan(this.eventType, t, this.startEvent.target));
  }
  pan(t) {
    !this.hasState(J.Began | J.Changed) || !this.startEvent || (this.stateSwitch(J.Changed), this.handler && this.startEvent.target && this.handler.gestureChanged(this.eventType, t, this.startEvent.target));
  }
  panend(t) {
    !this.hasState(J.Began | J.Changed) || !this.startEvent || (this.stateSwitch(J.Ended), this.handler && this.startEvent.target && this.handler.gestureEnded(this.eventType, t, this.startEvent.target));
  }
};
var Hc = class extends dn {
  constructor() {
    super(...arguments);
    this.eventType = "tap";
  }
  pointerSessionBegan(t, r) {
    this.handler && (r.isLeftMouseClick === void 0 || r.isLeftMouseClick) && this.handler.gestureBegan(this.eventType, r, null);
  }
  pointerSessionMoved(t, r) {
  }
  pointerSessionEnded(t, r) {
    this.isPrevented ? this.stateSwitch(J.Failed) : !t.startEvent || t.startEvent.target === r.target ? (this.stateSwitch(J.Recognized), this.handler && this.handler.gestureChanged(this.eventType, r, null)) : this.stateSwitch(J.Failed), this.handler && this.handler.gestureEnded(this.eventType, r, null);
  }
};
var zc = class extends dn {
  constructor() {
    super(...arguments);
    this.eventType = "mousewheel";
    this.onMouseWheelEnd = Ri((t) => {
      this.handler && this.startEvent && (this.stateSwitch(J.Ended), this.handler.gestureEnded(this.eventType, t, this.startEvent.target), this.startEvent = null, this.reset());
    }, 300);
  }
  pointerSessionBegan(t, r) {
  }
  pointerSessionMoved(t, r) {
  }
  pointerSessionEnded(t, r) {
  }
  mouseWheel(t, r) {
    if (!!this.handler) {
      if (this.hasState(J.Possible)) {
        this.startEvent = r, this.stateSwitch(J.Began), this.handler.gestureBegan(this.eventType, r, this.startEvent.target);
        return;
      }
      this.hasState(J.Began | J.Changed) && this.startEvent && (this.stateSwitch(J.Changed), this.handler.gestureChanged(this.eventType, r, this.startEvent.target)), this.onMouseWheelEnd(r);
    }
  }
};
var Qs = class {
  constructor(t, r) {
    this.events = [];
    this.recognizers = [];
    this.mouseWheelRecognizer = new zc();
    this.dispatcher = t, r ? this.originElement = r : this.originElement = document.body;
    let n = new Nc(), o = new Hc();
    n.handler = this, o.handler = this, this.mouseWheelRecognizer.handler = this, this.recognizers = [o, n];
  }
  get isStarted() {
    return this.events.length !== 0;
  }
  get startEvent() {
    return this.isStarted ? this.events[0] : null;
  }
  get lastEvent() {
    return this.events.length > 0 ? this.events[this.events.length - 1] : null;
  }
  processEvent(t) {
    return this.events.push(t), t;
  }
  pointerDown(t) {
    this.isStarted || (this.processEvent(t), this.recognizers.map((r) => {
      r.cancel(), r.pointerSessionBegan(this, t);
    }));
  }
  pointerMove(t) {
    !this.isStarted || (this.processEvent(t), this.recognizers.map((r) => {
      r.pointerSessionMoved(this, t);
    }));
  }
  pointerUp(t) {
    !this.isStarted || (this.processEvent(t), this.recognizers.map((r) => {
      r.pointerSessionEnded(this, t);
    }), this.clearEvents(), this.recognizers.map((r) => {
      r.reset();
    }));
  }
  mouseWheel(t) {
    this.processEvent(t), this.mouseWheelRecognizer.mouseWheel(this, t), this.clearEvents();
  }
  clearEvents() {
    this.events = [];
  }
  dispatch(t, r, n = null) {
    let o = n || this.startEvent && this.startEvent.target || r.target;
    o && this.dispatcher(t, r, o);
  }
  gestureBegan(t, r, n) {
    this.dispatch(`${t}start`, r, n);
  }
  gestureChanged(t, r, n) {
    this.dispatch(t, r, n);
  }
  gestureEnded(t, r, n) {
    this.dispatch(`${t}end`, r, n);
  }
  velocity(t = _s.TimeStep * 2) {
    if (!this.isStarted || this.events.length < 2)
      return { x: 0, y: 0 };
    let r = this.events, n = r.length - 1, o = null;
    for (; n >= 0 && (o = r[n], !(Pt.time - o.loopTime > t)); )
      n--;
    if (!o)
      return { x: 0, y: 0 };
    let i = r[r.length - 1], a = (Pt.time - o.loopTime) * 1e3;
    if (a === 0)
      return { x: 0, y: 0 };
    let s = { x: (i.devicePoint.x - o.devicePoint.x) / a, y: (i.devicePoint.y - o.devicePoint.y) / a };
    return s.x === Infinity && (s.x = 0), s.y === Infinity && (s.y = 0), s;
  }
  offset(t) {
    return this.startEvent ? ((n, o) => ({ x: n.x - o.x, y: n.y - o.y }))(t.devicePoint, this.startEvent.devicePoint) : { x: 0, y: 0 };
  }
};
var Wc = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.domTouchStart = (t) => {
      _.addEventListener("touchmove", this.domTouchMove), _.addEventListener("touchend", this.domTouchEnd);
      let r = new at(t, this.props.session);
      this.props.session.pointerDown(r);
    };
    this.domTouchMove = (t) => {
      let r = new at(t, this.props.session);
      this.props.session.pointerMove(r);
    };
    this.domTouchEnd = (t) => {
      _.removeEventListener("touchmove", this.domTouchMove), _.removeEventListener("touchend", this.domTouchEnd);
      let r = new at(t, this.props.session);
      this.props.session.pointerUp(r);
    };
  }
  render() {
    return this.props.children;
  }
  componentDidMount() {
    _.addEventListener("touchstart", this.domTouchStart);
  }
  componentWillUnmount() {
    _.removeEventListener("touchstart", this.domTouchStart), _.removeEventListener("touchmove", this.domTouchMove), _.removeEventListener("touchend", this.domTouchEnd);
  }
};
var Uc = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.domMouseDown = (t) => {
      _.addEventListener("mousemove", this.domMouseMove), _.addEventListener("mouseup", this.domMouseUp);
      let r = new at(t, this.props.session);
      this.props.session.pointerDown(r);
    };
    this.domMouseMove = (t) => {
      if (!(t.buttons === void 0 ? t.which === 1 : t.buttons === 1)) {
        this.domMouseUp(t);
        return;
      }
      let n = new at(t, this.props.session);
      this.props.session.pointerMove(n);
    };
    this.domMouseUp = (t) => {
      _.removeEventListener("mousemove", this.domMouseMove), _.removeEventListener("mouseup", this.domMouseUp);
      let r = new at(t, this.props.session);
      this.props.session.pointerUp(r);
    };
    this.domMouseWheel = (t) => {
      let r = new at(t, this.props.session);
      this.props.session.mouseWheel(r);
    };
  }
  render() {
    return this.props.children;
  }
  componentDidMount() {
    _.addEventListener("mousedown", this.domMouseDown), _.addEventListener("wheel", this.domMouseWheel);
  }
  componentWillUnmount() {
    _.removeEventListener("mousemove", this.domMouseMove), _.removeEventListener("mousedown", this.domMouseDown), _.removeEventListener("mouseup", this.domMouseUp), _.removeEventListener("wheel", this.domMouseWheel);
  }
};
var Gc = ro.isTouch() ? Wc : Uc;
var Be;
(function(v) {
  v.Fade = { exit: { opacity: 0 }, enter: { opacity: 0 } }, v.PushLeft = { exit: { x: "-30%" }, enter: { x: "100%" } }, v.PushRight = { exit: { x: "30%" }, enter: { x: "-100%" } }, v.PushUp = { exit: { y: "-30%" }, enter: { y: "100%" } }, v.PushDown = { exit: { y: "30%" }, enter: { y: "-100%" } }, v.Instant = { animation: { type: false }, enter: { opacity: 0 } }, v.Modal = { overCurrentContext: true, goBackOnTapOutside: true, position: { center: true }, enter: { opacity: 0, scale: 1.2 } }, v.OverlayLeft = { overCurrentContext: true, goBackOnTapOutside: true, position: { right: 0, top: 0, bottom: 0 }, enter: { x: "100%" } }, v.OverlayRight = { overCurrentContext: true, goBackOnTapOutside: true, position: { left: 0, top: 0, bottom: 0 }, enter: { x: "-100%" } }, v.OverlayUp = { overCurrentContext: true, goBackOnTapOutside: true, position: { bottom: 0, left: 0, right: 0 }, enter: { y: "100%" } }, v.OverlayDown = { overCurrentContext: true, goBackOnTapOutside: true, position: { top: 0, left: 0, right: 0 }, enter: { y: "-100%" } }, v.FlipLeft = { backfaceVisible: false, exit: { rotateY: -180 }, enter: { rotateY: 180 } }, v.FlipRight = { backfaceVisible: false, exit: { rotateY: 180 }, enter: { rotateY: -180 } }, v.FlipUp = { backfaceVisible: false, exit: { rotateX: 180 }, enter: { rotateX: -180 } }, v.FlipDown = { backfaceVisible: false, exit: { rotateX: -180 }, enter: { rotateX: 180 } }, v.MagicMotion = { withMagicMotion: true };
})(Be || (Be = {}));
function ey(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return Be.PushLeft;
    case "left":
      return Be.PushRight;
    case "bottom":
      return Be.PushUp;
    case "top":
      return Be.PushDown;
  }
}
function ty(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Be.OverlayLeft;
    case "left":
      return Be.OverlayRight;
    case "bottom":
      return Be.OverlayUp;
    case "top":
      return Be.OverlayDown;
  }
}
function ry(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Be.FlipLeft;
    case "left":
      return Be.FlipRight;
    case "bottom":
      return Be.FlipUp;
    case "top":
      return Be.FlipDown;
  }
}
var $c = react.exports.createContext(true);
function qs() {
  return react.exports.useContext($c);
}
function ny(e) {
  let { shouldStackAnimate: t, transition: r, current: n, prevViewportBox: o, onComplete: i, prevParent: a } = e, s = { shouldStackAnimate: t, transition: r, current: n, onComplete: i, prevParent: a || void 0 };
  return t && (s.originBox = o), s;
}
var el = react.exports.createContext({ promoteTree: () => false, markTreeAsSafeToRemove: () => {
} });
var uR = { register: () => {
}, remove: () => {
}, add: () => {
}, flush: () => {
}, syncUpdate: () => {
} }, Xc = "____treeroot", tl = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.scheduled = false;
    this.resetScheduled = false;
    this.layoutIdConfig = new Map();
    this.treeContext = { promoteTree: (...t) => this.promoteTree(...t), markTreeAsSafeToRemove: (t) => this.markTreeAsSafeToRemove(t) };
    this.syncContext = __spreadProps(__spreadValues({}, uR), { forceUpdate: () => {
      this.syncContext = __spreadValues({}, this.syncContext), this.forceUpdate();
    } });
    this.batch = Mr();
    this.stackCrossfaders = new Map([[Xc, Kn()]]);
  }
  promoteTree(t, r, n, o) {
    var s, l, u;
    if (t === this.lead)
      return false;
    let i = this.follow;
    if (this.follow = this.lead, this.lead = t, o && (this.resetScheduled = true), !r)
      return this.startCrossfade(new Map([[Xc, {}]]), { type: false }), false;
    this.layoutIdConfig.clear();
    let a = {};
    for (let [c, f] of this.lead.children) {
      let p = (s = this.follow) == null ? void 0 : s.children.get(c);
      pR(c, f, p, a), p && iy(p), iy(f);
    }
    this.lead.childrenToResetTransform.forEach((c) => c.resetTransform());
    for (let [c, f] of this.lead.children) {
      let p = (l = this.follow) == null ? void 0 : l.children.get(c);
      p && Er(p), Er(f);
      let m = (p == null ? void 0 : p.prevViewportBox) ? cR(p == null ? void 0 : p.prevViewportBox) : void 0, d = { lead: f, current: a[c], transition: n, prevViewportBox: m, shouldStackAnimate: !!p, prevParent: p == null ? void 0 : p.getProjectionParent() };
      this.layoutIdConfig.set(c, d);
    }
    return i !== this.lead && i !== this.follow && ((u = i == null ? void 0 : i.rootChild) == null || u.setVisibility(false)), this.scheduled = true, true;
  }
  markTreeAsSafeToRemove(t) {
    this.safeToRemoveTree = t;
  }
  markTreeChildrenAsSafeToRemove(t) {
    var r;
    if (!!t)
      for (let [n, o] of t.children)
        (r = o.layoutSafeToRemove) == null || r.call(o);
  }
  componentDidUpdate() {
    this.scheduled && this.startLayoutAnimation(this.resetScheduled), this.safeToRemoveTree && this.markTreeChildrenAsSafeToRemove(this.safeToRemoveTree), this.safeToRemoveTree = void 0, this.scheduled = false, this.resetScheduled = false;
  }
  componentWillUnmount() {
    this.stopCrossfadeAnimation();
  }
  startLayoutAnimation(t) {
    let { lead: r, follow: n } = this, o = r == null ? void 0 : r.children, i = n == null ? void 0 : n.children, a = new Map(), s = { layoutReady: (l) => {
      let u = l.getLayoutId();
      if (u === void 0)
        return;
      let c = this.layoutIdConfig.get(u);
      if (!c)
        return l.notifyLayoutReady({ shouldStackAnimate: false });
      let f = i == null ? void 0 : i.get(u), p = o == null ? void 0 : o.get(u);
      l.pointTo(p != null ? p : l), Boolean(o && p === l) && (f && p && a.set(u, c), l.notifyLayoutReady(ny(__spreadProps(__spreadValues({}, c), { onComplete: () => {
        var d;
        (d = f == null ? void 0 : f.layoutSafeToRemove) == null || d.call(f);
      } }))));
    } };
    if (r && o) {
      for (let [l, u] of o)
        this.batch.add(u);
      r.layoutMayBeMutated = false;
    }
    if (!t && n && i) {
      for (let [l, u] of i)
        this.batch.add(u);
      n.layoutMayBeMutated = true;
    }
    this.batch.flush(s), this.startCrossfade(a);
  }
  startCrossfade(t, r) {
    var f, p, m, d, h;
    if (!((f = this.lead) == null ? void 0 : f.rootChild))
      return;
    let n = (p = this.follow) == null ? void 0 : p.isExiting, o = r, i = (m = this.lead) == null ? void 0 : m.rootChild, a = (d = this.follow) == null ? void 0 : d.rootChild;
    i == null || i.setVisibility(true), a == null || a.setVisibility(true);
    let s = (v, y) => {
      var T, F;
      let P = (T = this.follow) == null ? void 0 : T.children.get(y), C = (F = this.lead) == null ? void 0 : F.children.get(y);
      if (C === i || P === a) {
        C === i && (o = v.transition);
        return;
      }
      this.stackCrossfaders.has(y) || this.stackCrossfaders.set(y, Kn());
      let b = this.stackCrossfaders.get(y);
      b.setOptions({ lead: C, follow: P }), C == null || C.setCrossfader(b), P == null || P.setCrossfader(b), b.toLead(v == null ? void 0 : v.transition);
    };
    if (t.forEach(s), !i || !a)
      return;
    let l = this.stackCrossfaders.get(Xc);
    l.setOptions({ lead: i, follow: a, preserveFollowOpacity: !n, crossfadeOpacity: true }), i.setCrossfader(l), a.setCrossfader(l);
    let u = i.getLayoutId(), c = u && ((h = this.layoutIdConfig.get(u)) == null ? void 0 : h.transition) || o;
    l.toLead(c);
  }
  stopCrossfadeAnimation() {
    this.stackCrossfaders.forEach((t) => t.stop());
  }
  render() {
    return react.exports.createElement(el.Provider, { value: this.treeContext }, react.exports.createElement(lr.Provider, { value: this.syncContext }, this.props.children));
  }
};
function cR(e) {
  if (!!e)
    return { x: __spreadValues({}, e.x), y: __spreadValues({}, e.y) };
}
function pR(e, t, r, n) {
  let o = r == null ? void 0 : r.getValue("rotate"), i = t.getValue("rotate");
  n[e] = { rotate: (i == null ? void 0 : i.isAnimating()) ? i.get() : (o == null ? void 0 : o.get()) || 0 };
}
var fR = ["", "X", "Y", "Z"];
function iy(e) {
  let t = false, r = {};
  if (fR.forEach((n) => {
    let o = "rotate" + n;
    !e.hasValue(o) || (t = true, r[o] = e.getStaticValue(o), e.setStaticValue(o, 0));
  }), !!t) {
    e.syncRender();
    for (let n in r)
      e.setStaticValue(n, r[n]);
    e.scheduleRender();
  }
}
var sy = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.children = new Map();
    this.childrenToResetTransform = new Set();
    this.layoutMayBeMutated = false;
    this.syncContext = { add: () => {
    }, flush: () => {
    }, syncUpdate: (t) => {
    }, forceUpdate: () => {
      this.syncContext = __spreadValues({}, this.syncContext), this.forceUpdate();
    }, register: (t) => this.addChild(t), remove: (t) => this.removeChild(t) };
  }
  addChild(t) {
    let r = t.getLayoutId();
    r ? (this.children.set(r, t), this.setRootChild(t)) : t.shouldResetTransform() && this.childrenToResetTransform.add(t);
  }
  setRootChild(t) {
    if (!this.rootChild)
      return this.rootChild = t;
    this.rootChild = this.rootChild.depth < t.depth ? this.rootChild : t;
  }
  removeChild(t) {
    let r = t.getLayoutId();
    r ? this.children.delete(r) : this.childrenToResetTransform.delete(t);
  }
  componentDidMount() {
    let { isLead: t, animatesLayout: r, transition: n } = this.props;
    t !== void 0 && t && this.props.treeContext.promoteTree(this, !!r, n);
  }
  shouldComponentUpdate({ isLead: t, isExiting: r, animatesLayout: n, transition: o }) {
    if (this.isExiting = r, this.props.isLead === void 0)
      return true;
    let i = !this.props.isLead && t, a = this.props.isExiting && !r, s = i || a;
    return this.layoutMayBeMutated && s && !n ? this.props.treeContext.promoteTree(this, true, { type: false }, true) : s ? this.props.treeContext.promoteTree(this, !!n, o) : (r && !n && this.props.treeContext.markTreeAsSafeToRemove(this), false);
  }
  render() {
    return react.exports.createElement(Jo.Provider, { value: this.syncContext }, this.props.children);
  }
}, Yc = (e) => {
  let t = react.exports.useContext(el);
  return react.exports.createElement(sy, __spreadProps(__spreadValues({}, e), { treeContext: t }));
};
function Ei(e) {
  let t = react.exports.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function gR() {
  return new Map();
}
function ly() {
  return Ei(gR);
}
var py = react.exports.createContext({ register: () => {
}, deregister: () => {
} }), fy = ({ isCurrent: e, children: t }) => {
  let r = ly(), n = react.exports.useCallback((a) => {
    if (r.has(a)) {
      console.warn("NavigationTargetWrapper: already registered");
      return;
    }
    r.set(a, void 0);
  }, [r]), o = react.exports.useCallback((a) => {
    let s = r.get(a);
    s == null || s(), r.delete(a);
  }, [r]), i = react.exports.useRef({ register: n, deregister: o }).current;
  return react.exports.useEffect(() => (r.forEach((a, s) => {
    let l = s(e);
    r.set(s, ri(l) ? l : void 0);
  }), () => {
    r.forEach((a, s) => {
      !a || (a(), r.set(s, void 0));
    });
  }), [e, r]), react.exports.createElement(py.Provider, { value: i }, t);
};
function mo(e, t = []) {
  let { register: r, deregister: n } = react.exports.useContext(py);
  react.exports.useEffect(() => {
    if (!!e)
      return r(e), () => n(e);
  }, [r, n, ...t]);
}
var rl = react.exports.memo(function({ isLayeredContainer: t, isCurrent: r, isPrevious: n, isOverlayed: o = false, visible: i, transitionProps: a, children: s, backdropColor: l, onTapBackdrop: u, backfaceVisible: c, exitBackfaceVisible: f, animation: p, exitAnimation: m, instant: d, initialProps: h, exitProps: v, position: y = { top: 0, right: 0, bottom: 0, left: 0 }, withMagicMotion: P, index: C, areMagicMotionLayersPresent: b, id: T }) {
  let F = Iu(), I = react.exports.useContext(ft), { persistLayoutIdCache: A } = react.exports.useContext(fr), E = react.exports.useRef({ wasCurrent: void 0, wasPrevious: false, wasBeingRemoved: false, wasReset: true, origins: dy({}, h, a) }), k = I !== null && !I.isPresent;
  r && E.current.wasCurrent === void 0 && A(), react.exports.useEffect(() => {
    if (t || !F)
      return;
    if (k) {
      E.current = __spreadProps(__spreadValues({}, E.current), { wasBeingRemoved: k });
      return;
    }
    let { wasPrevious: S, wasCurrent: x } = E.current, g = r && !x || !k && E.current.wasBeingRemoved && r, R = n && !S, O = dy(E.current.origins, h, a), Y = E.current.wasReset;
    g || R ? (F.stop(), F.start(__spreadValues(__spreadValues({ zIndex: C }, O), a)), Y = false) : Y === false && (F.stop(), F.set(__spreadProps(__spreadValues({ zIndex: C }, jr), { opacity: 0 })), Y = true), E.current = { wasCurrent: !!r, wasPrevious: !!n, wasBeingRemoved: false, wasReset: Y, origins: O };
  }, [r, n, k]);
  let W = d ? { type: false } : __spreadProps(__spreadValues({}, p), { velocity: 0 }), K = d ? { type: false } : m || p, U = __spreadValues({}, y);
  (U.left === void 0 || U.right === void 0) && (U.width = "auto"), (U.top === void 0 || U.bottom === void 0) && (U.height = "auto");
  let ee = (hy(a) || hy(h)) && (t || r || n) ? 1200 : void 0, H = __spreadValues(__spreadValues({}, jr), E.current.origins), X = t ? { initial: __spreadValues(__spreadValues({}, H), h), animate: __spreadProps(__spreadValues(__spreadValues({}, H), a), { transition: W }), exit: __spreadProps(__spreadValues(__spreadValues({}, H), v), { transition: F }) } : { animate: F, exit: __spreadProps(__spreadValues(__spreadValues({}, H), v), { transition: K }) }, ae = !(k || b === false), G = !!r && ae && !o;
  return react.exports.createElement(we, { width: "100%", height: "100%", style: { position: "absolute", transformStyle: "flat", backgroundColor: "transparent", overflow: "hidden", zIndex: t || k || r && P ? C : void 0, pointerEvents: "none", visibility: i ? "visible" : "hidden", perspective: ee } }, t && react.exports.createElement(we, { width: "100%", height: "100%", transition: p, initial: { opacity: d && i ? 1 : 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, backgroundColor: l || "transparent", onTap: k ? void 0 : u }), react.exports.createElement(we, __spreadProps(__spreadValues(__spreadValues({}, U), X), { transition: { default: W, originX: { type: false }, originY: { type: false }, originZ: { type: false } }, backgroundColor: "transparent", backfaceVisible: k ? f : c, "data-framer-component-type": "NavigationContainer", "data-framer-is-current-navigation-target": !!r, style: { pointerEvents: "initial", opacity: t || r && P ? 1 : 0 }, "data-is-present": ae ? void 0 : false }), react.exports.createElement($c.Provider, { value: G }, react.exports.createElement(fy, { isCurrent: G }, react.exports.createElement(Yc, { isLead: r, animatesLayout: !!P, transition: W, isExiting: !ae, id: T }, s)))));
}, TR);
function TR(e, t) {
  return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed);
}
function dy(e, t, r) {
  let n = __spreadValues({}, e);
  return t && (V(t.originX) && (n.originX = t.originX), V(t.originY) && (n.originY = t.originY), V(t.originZ) && (n.originZ = t.originZ)), r && (V(r.originX) && (n.originX = r.originX), V(r.originY) && (n.originY = r.originY), V(r.originZ) && (n.originZ = r.originZ)), n;
}
function hy(e) {
  var o, i, a;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e))
    return false;
  let r = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0, n = ((o = e == null ? void 0 : e.transition) == null ? void 0 : o.rotateX.from) !== 0 || ((i = e == null ? void 0 : e.transition) == null ? void 0 : i.rotateY.from) !== 0 || ((a = e == null ? void 0 : e.transition) == null ? void 0 : a.z.from) !== 0;
  return r || n;
}
var jr = { x: 0, y: 0, z: 0, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, scaleZ: 1, skew: 0, skewX: 0, skewY: 0, originX: 0.5, originY: 0.5, originZ: 0, opacity: 1 };
var gy = class {
  constructor() {
    this.warning = () => {
      jt("The Navigator API is only available inside of Framer: https://www.framer.com/");
    };
    this.goBack = () => this.warning();
    this.instant = () => this.warning();
    this.fade = () => this.warning();
    this.push = () => this.warning();
    this.modal = () => this.warning();
    this.overlay = () => this.warning();
    this.flip = () => this.warning();
    this.customTransition = () => this.warning();
    this.magicMotion = () => this.warning();
  }
}, vy = new gy();
var yy = () => ({ current: -1, previous: -1, currentOverlay: -1, previousOverlay: -1, visualIndex: 0, overlayItemId: 0, historyItemId: 0, history: [], overlayStack: [], containers: {}, containerIndex: {}, containerVisualIndex: {}, containerIsRemoved: {}, transitionForContainer: {}, previousTransition: null });
function by(e, t) {
  switch (t.type) {
    case "addOverlay":
      return RR(e, t.transition, t.component);
    case "removeOverlay":
      return FR(e);
    case "add":
      return ER(e, t.key, t.transition, t.component);
    case "remove":
      return MR(e);
    case "update":
      return wR(e, t.key, t.component);
    default:
      return;
  }
}
function wR(e, t, r) {
  return __spreadProps(__spreadValues({}, e), { containers: __spreadProps(__spreadValues({}, e.containers), { [t]: r }) });
}
function RR(e, t, r) {
  let n = e.overlayStack[e.currentOverlay];
  if (n && n.component === r)
    return;
  let o = e.overlayItemId + 1, i = [...e.overlayStack, { key: `stack-${o}`, component: r, transition: t }];
  return __spreadProps(__spreadValues({}, e), { overlayStack: i, overlayItemId: o, currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, i.length - 1)), previousOverlay: e.currentOverlay });
}
function FR(e) {
  return __spreadProps(__spreadValues({}, e), { overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay });
}
function ER(e, t, r, n) {
  e.containers[t] || (e.containers[t] = n), e.history = e.history.slice(0, e.current + 1), e.visualIndex = Math.max(e.history.length, 0);
  let o = e.history[e.history.length - 1], i = o && o.key === t;
  if (e.overlayStack = [], i && e.currentOverlay > -1)
    return __spreadProps(__spreadValues({}, e), { currentOverlay: -1, previousOverlay: e.currentOverlay });
  if (i)
    return;
  let a = (o == null ? void 0 : o.key) && r.withMagicMotion ? DR(t, e.containerVisualIndex[t], e.containerIsRemoved[t], e.history) : true;
  e.history.push({ key: t, transition: r, visualIndex: a ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t] });
  let s = e.current + 1, l = e.current;
  for (let p in e.containerIndex)
    e.containerIndex[p] === s && (e.containerIndex[p] = AR(p, e.history));
  e.containerIndex[t] = s;
  let { containerVisualIndex: u, containerIsRemoved: c } = IR(e, t, o == null ? void 0 : o.key, a), f = xy(s, l, e.history, e.containerIndex, e.transitionForContainer);
  return __spreadProps(__spreadValues({}, e), { current: s, previous: l, containerVisualIndex: u, containerIsRemoved: c, transitionForContainer: f, previousTransition: null, currentOverlay: -1, historyItemId: e.historyItemId + 1, previousOverlay: e.currentOverlay });
}
function MR(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1)
    return;
  let r = t.pop();
  if (!r)
    return;
  let n = t[t.length - 1];
  e.containerIndex[n.key] = t.length - 1, t.every((p) => p.key !== r.key) && delete e.containers[r.key];
  let i = e.current - 1, a = e.current, { containerIsRemoved: s, containerVisualIndex: l, previousTransition: u, visualIndex: c } = LR(e, n, r), f = xy(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return __spreadProps(__spreadValues({}, e), { current: i, previous: a, containerIsRemoved: s, containerVisualIndex: l, previousTransition: u, visualIndex: c, transitionForContainer: f });
}
function IR(e, t, r, n) {
  let o = { containerVisualIndex: __spreadValues({}, e.containerVisualIndex), containerIsRemoved: __spreadValues({}, e.containerIsRemoved) };
  if (n)
    o.containerVisualIndex[t] = e.history.length - 1, o.containerIsRemoved[t] = false;
  else {
    let i = e.containerVisualIndex[t];
    for (let a in e.containerVisualIndex)
      e.containerVisualIndex[a] > i && (o.containerIsRemoved[a] = true);
  }
  return o;
}
function LR(e, t, r) {
  let { history: n } = globalThis, o = [t.key, r.key], i = n[n.length - 2], a = e.previousTransition === null ? null : __spreadValues({}, e.previousTransition), s = { containerIsRemoved: __spreadValues({}, e.containerIsRemoved), containerVisualIndex: __spreadValues({}, e.containerVisualIndex), previousTransition: a, visualIndex: e.visualIndex };
  i && o.push(i.key);
  let l = e.containerVisualIndex[t.key] <= e.containerVisualIndex[r.key] || t.visualIndex !== void 0 && t.visualIndex < n.length - 1, u = t.visualIndex;
  return l ? (s.containerIsRemoved[r.key] = true, s.containerVisualIndex[t.key] = u !== void 0 ? u : n.length - 1) : (s.visualIndex = e.visualIndex + 1, s.containerVisualIndex[t.key] = e.visualIndex + 1), r.transition.withMagicMotion && (s.previousTransition = r.transition || null), e.containerIsRemoved[t.key] = false, s;
}
function AR(e, t) {
  for (let r = t.length; r > t.length; r--)
    if (t[r].key === e)
      return r;
  return -1;
}
function xy(e, t, r, n, o) {
  let i = __spreadValues({}, o);
  return Object.keys(n).forEach((a) => {
    let s = OR(n[a], { current: e, previous: t, history: r });
    s && (i[a] = s);
  }), i;
}
function DR(e, t, r, n) {
  return r ? true : t === 0 ? false : n.slice(t, n.length).findIndex((a) => a.key === e) > -1 ? true : !(n.slice(0, t - 1).findIndex((a) => a.key === e) > -1);
}
function OR(e, t) {
  let { current: r, previous: n, history: o } = t;
  if (!(e !== r && e !== n)) {
    if (e === r && r > n) {
      let i = o[e];
      return nl("enter", i.transition.enter, i.transition.animation);
    }
    if (e === n && r > n) {
      let i = o[e + 1];
      return nl("exit", i.transition.exit, i.transition.animation);
    }
    if (e === r && r < n) {
      let i = o[e + 1];
      return nl("enter", i.transition.exit, i.transition.animation);
    }
    if (e === n && r < n) {
      let i = o[e];
      return nl("exit", i.transition.enter, i.transition.animation);
    }
  }
}
var VR = Object.keys(jr);
function nl(e, t, r) {
  let n = {}, o = {};
  return VR.forEach((i) => {
    n[i] = jr[i], o[i] = __spreadProps(__spreadValues({}, r), { from: jr[i] });
  }), t && Object.keys(t).forEach((i) => {
    if (t[i] === void 0)
      return;
    let a = t[i], s = typeof t[i] == "string" ? `${jr[i]}%` : jr[i];
    n[i] = e === "enter" ? s : a, o[i] = __spreadProps(__spreadValues({}, r), { from: e === "enter" ? a : s, velocity: 0 });
  }), __spreadProps(__spreadValues({}, n), { transition: __spreadValues({}, o) });
}
var go = react.exports.createContext(vy), NR = go.Consumer, Cy = react.exports.createContext(void 0), HR = Cy.Provider, Mi = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.lastEventTimeStamp = null;
    this.state = yy();
    this.navigationAction = (t) => {
      var n;
      if (!this.props.enabled && this.state.history.length > 0)
        return;
      let r = by(this.state, t);
      if (r) {
        this.setState(r);
        let o = r.history[r.current];
        (n = this.context) == null || n.call(this, o.key);
      }
    };
    this.goBack = () => {
      var t;
      if (!this.isSameEventTransition())
        return this.lastEventTimeStamp = ((t = globalThis.event) == null ? void 0 : t.timeStamp) || null, this.state.currentOverlay !== -1 ? this.navigationAction({ type: "removeOverlay" }) : this.navigationAction({ type: "remove" });
    };
  }
  componentDidMount() {
    this.state.history.length === 0 && this.transition(this.props.children, Be.Instant), Mt();
  }
  UNSAFE_componentWillReceiveProps(t) {
    var o;
    let r = t.children;
    if (!Et(r) || !Ft(r))
      return;
    let n = (o = r.key) == null ? void 0 : o.toString();
    !n || (this.state.history.length === 0 ? this.transition(r, Be.Instant) : this.navigationAction({ type: "update", key: n, component: r }));
  }
  getStackState(t) {
    let { current: r, previous: n, currentOverlay: o, previousOverlay: i } = this.state;
    return t.overCurrentContext ? { current: o, previous: i, history: this.state.overlayStack } : { current: r, previous: n, history: this.state.history };
  }
  isSameEventTransition() {
    return globalThis.event ? this.lastEventTimeStamp === globalThis.event.timeStamp : false;
  }
  transition(t, r, n) {
    var s, l;
    if (this.isSameEventTransition() || (this.lastEventTimeStamp = ((s = globalThis.event) == null ? void 0 : s.timeStamp) || null, !t || !Et(t) || !Ft(t)))
      return;
    let o = __spreadValues(__spreadValues({}, r), n);
    if (!!o.overCurrentContext)
      return this.navigationAction({ type: "addOverlay", transition: o, component: t });
    let a = ((l = t == null ? void 0 : t.key) == null ? void 0 : l.toString()) || `stack-${this.state.historyItemId + 1}`;
    this.navigationAction({ type: "add", key: a, transition: o, component: t });
  }
  instant(t) {
    this.transition(t, Be.Instant);
  }
  fade(t, r) {
    this.transition(t, Be.Fade, r);
  }
  push(t, r) {
    this.transition(t, ey(r), r);
  }
  modal(t, r) {
    this.transition(t, Be.Modal, r);
  }
  overlay(t, r) {
    this.transition(t, ty(r), r);
  }
  flip(t, r) {
    this.transition(t, ry(r), r);
  }
  magicMotion(t, r) {
    this.transition(t, Be.MagicMotion, r);
  }
  customTransition(t, r) {
    this.transition(t, r);
  }
  render() {
    let t = this.getStackState({ overCurrentContext: false }), r = this.getStackState({ overCurrentContext: true }), n = zR(r), o = r.current > -1;
    return react.exports.createElement(we, { top: 0, left: 0, width: "100%", height: "100%", position: "relative", style: __spreadValues({ overflow: "hidden", backgroundColor: "unset" }, this.props.style) }, react.exports.createElement(go.Provider, { value: this }, react.exports.createElement(rl, { isLayeredContainer: true, position: void 0, initialProps: {}, instant: false, transitionProps: WR(n), animation: UR(n), backfaceVisible: GR(n), visible: true, backdropColor: void 0, onTapBackdrop: void 0, index: 0 }, react.exports.createElement(Mg, null, react.exports.createElement(tl, null, react.exports.createElement(Ja, { presenceAffectsLayout: false }, Object.keys(this.state.containers).map((i) => {
      var v, y, P, C, b;
      let a = this.state.containers[i], s = this.state.containerIndex[i], l = this.state.containerVisualIndex[i], u = this.state.containerIsRemoved[i], c = this.state.history[s], f = this.state.transitionForContainer[i], p = s === this.state.current, m = s === this.state.previous, d = p ? false : u, h = ((v = c == null ? void 0 : c.transition) == null ? void 0 : v.withMagicMotion) || p && !!this.state.previousTransition;
      return react.exports.createElement(rl, { key: i, id: i, index: l, isCurrent: p, isPrevious: m, isOverlayed: o, visible: p || m, position: (y = c == null ? void 0 : c.transition) == null ? void 0 : y.position, instant: Ty(s, t), transitionProps: f, animation: Py(s, t), backfaceVisible: KR(s, t), exitAnimation: (P = c == null ? void 0 : c.transition) == null ? void 0 : P.animation, exitBackfaceVisible: (C = c == null ? void 0 : c.transition) == null ? void 0 : C.backfaceVisible, exitProps: (b = c == null ? void 0 : c.transition) == null ? void 0 : b.enter, withMagicMotion: h, areMagicMotionLayersPresent: d ? false : void 0 }, react.exports.createElement(react.exports.Suspense, { fallback: "Loading..." }, wy({ component: a, transition: c == null ? void 0 : c.transition })));
    }))))), react.exports.createElement(Ja, null, this.state.overlayStack.map((i, a) => react.exports.createElement(rl, { isLayeredContainer: true, key: i.key, isCurrent: a === this.state.currentOverlay, position: i.transition.position, initialProps: YR(a, r), transitionProps: qR(a, r), instant: Ty(a, r, true), animation: Py(a, r), exitProps: i.transition.enter, visible: ZR(a, r), backdropColor: $R(i.transition), backfaceVisible: XR(a, r), onTapBackdrop: JR(i.transition, this.goBack), index: this.state.current + 1 + a }, wy({ component: i.component, transition: i.transition }))))));
  }
};
Mi.defaultProps = { enabled: true }, Mi.contextType = Cy;
var Ry = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function zR(e) {
  let t, r;
  return e.current !== -1 ? t = e.history[e.current] : r = e.history[e.previous], { currentOverlayItem: t, previousOverlayItem: r };
}
function WR({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function UR({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : Ry;
}
function GR({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function $R(e) {
  if (e.backdropColor)
    return e.backdropColor;
  if (e.overCurrentContext)
    return "rgba(4,4,15,.4)";
}
function XR(e, t) {
  let { current: r, history: n } = t;
  if (e === r) {
    let o = n[e];
    return o && o.transition ? o.transition.backfaceVisible : true;
  } else if (e < r) {
    let o = n[e + 1];
    return o && o.transition ? o.transition.backfaceVisible : true;
  } else {
    let o = n[e];
    return o && o.transition ? o.transition.backfaceVisible : true;
  }
}
function YR(e, t) {
  let r = t.history[e];
  if (r)
    return r.transition.enter;
}
function KR(e, t) {
  var i, a, s, l;
  let { current: r, previous: n, history: o } = t;
  return e === n && r > n || e === r && r < n ? (a = (i = o[e + 1]) == null ? void 0 : i.transition) == null ? void 0 : a.backfaceVisible : (l = (s = o[e]) == null ? void 0 : s.transition) == null ? void 0 : l.backfaceVisible;
}
function qR(e, t) {
  let { current: r, history: n } = t;
  if (e !== r)
    if (e < r) {
      let o = n[e + 1];
      if (o && o.transition)
        return o.transition.exit;
    } else {
      let o = n[e];
      if (o && o.transition)
        return o.transition.enter;
    }
}
function Py(e, t) {
  let { current: r, previous: n, history: o } = t, i = n > r ? n : r;
  if (e < i) {
    let a = o[e + 1];
    if (a && a.transition.animation)
      return a.transition.animation;
  } else if (e !== i) {
    let a = o[e];
    if (a && a.transition.animation)
      return a.transition.animation;
  } else {
    let a = o[e];
    if (a.transition.animation)
      return a.transition.animation;
  }
  return Ry;
}
function Ty(e, t, r) {
  let { current: n, previous: o, history: i } = t;
  return !!(r && i.length > 1 || e !== o && e !== n || n === o);
}
function ZR(e, t) {
  let { current: r, previous: n } = t;
  return e > r && e > n ? false : e === r;
}
function wy(e) {
  return react.exports.Children.map(e.component, (t) => {
    var l;
    if (!Et(t) || !Ft(t) || !t.props)
      return t;
    let r = {}, n = (l = e == null ? void 0 : e.transition) == null ? void 0 : l.position, o = !n || n.left !== void 0 && n.right !== void 0, i = !n || n.top !== void 0 && n.bottom !== void 0, a = "width" in t.props, s = "height" in t.props;
    return o && a && (r.width = "100%"), i && s && (r.height = "100%"), react.exports.cloneElement(t, r);
  });
}
function JR(e, t) {
  if (e.goBackOnTapOutside !== false)
    return t;
}
function Kc(e) {
  let { paddingPerSide: t, paddingTop: r, paddingBottom: n, paddingLeft: o, paddingRight: i } = e;
  return t !== false && (r !== void 0 || n !== void 0 || o !== void 0 || i !== void 0);
}
function vo(e) {
  let { padding: t = 0, paddingTop: r, paddingBottom: n, paddingLeft: o, paddingRight: i } = e;
  return Kc(e) ? { top: r !== void 0 ? r : t, bottom: n !== void 0 ? n : t, left: o !== void 0 ? o : t, right: i !== void 0 ? i : t } : { top: t, bottom: t, left: t, right: t };
}
function Ii({ top: e, left: t, bottom: r, right: n }) {
  return `${e}px ${n}px ${r}px ${t}px`;
}
var bo = react.exports.memo(react.exports.forwardRef(function(t, r) {
  let _a2 = t, { direction: n = "vertical", distribution: o = "start", alignment: i = "center", gap: a = 10, children: s, style: l, className: u, willChangeTransform: c, __fromCodeComponentNode: f, parentSize: p, __contentWrapperStyle: m = { width: "100%", height: "100%" } } = _a2, d = __objRest(_a2, ["direction", "distribution", "alignment", "gap", "children", "style", "className", "willChangeTransform", "__fromCodeComponentNode", "parentSize", "__contentWrapperStyle"]);
  Mt();
  let h = Zc(n), v = iF(h), y = yo(o), P = Kc(d) || d.padding ? Ii(vo(d)) : void 0, C = __spreadValues({}, l);
  Se.applyWillChange({ willChangeTransform: c }, C, true), f && !Yt(Vs(d)) && (d.width = "100%", d.height = "100%", d._constraints = { enabled: true });
  let b = ht(t), { children: T, props: F } = ps(d, s), { widthType: I = z.FixedNumber, heightType: A = z.FixedNumber } = d, E = nF(T, n, I, A), k = oF(E, a, h, y), W = us(k, p != null ? p : Me.Disabled), K = { "data-framer-component-type": "Stack" };
  d.__fromCanvasComponent && (K["data-framer-generated"] = true);
  let U = __spreadValues({ display: "flex", flexDirection: h, justifyContent: y, alignItems: yo(i), padding: P }, m);
  return react.exports.createElement(we, __spreadProps(__spreadValues(__spreadProps(__spreadValues({ background: "none" }, F), { layoutId: b, ref: r }), K), { style: C, className: u }), react.exports.createElement(ke.div, { "data-framer-stack-content-wrapper": true, "data-framer-stack-direction-reverse": v, style: U }, W));
}));
bo.displayName = "Stack";
function ol(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function xo(e) {
  let t = parseFloat(e);
  return V(t) ? t : 0;
}
function nF(e, t, r, n) {
  return react.exports.Children.map(e, (o) => {
    if (!Et(o) || !Ft(o))
      return;
    let i = t === "vertical", a = {}, s = false, { style: l, size: u } = o.props, { width: c, height: f } = o.props;
    u !== void 0 && (c === void 0 && (c = u), f === void 0 && (f = u));
    let p = c, m = f;
    if (ol(c) && (s = true, s = true, i ? r === z.Auto ? (a.alignSelf = "stretch", p = "auto") : p = `${xo(c) * 100}%` : (p = 1, a.flexGrow = xo(c), a.flexBasis = 0), a.width = p), ol(f) && (s = true, i ? (m = 1, a.flexGrow = xo(f), a.flexBasis = 0) : n === z.Auto ? (a.alignSelf = "stretch", m = "auto") : m = `${xo(f) * 100}%`, a.height = m), !s)
      return o;
    let d = __spreadValues(__spreadValues({}, l), a);
    return react.exports.cloneElement(o, { width: p, height: m, style: d });
  });
}
function Jc(e, t) {
  return !(!e || t && ["space-between", "space-around", "space-evenly", "stretch"].includes(t));
}
function oF(e, t, r, n) {
  if (!Jc(t, n))
    return e;
  let o = aF(r), i = { display: "contents", ["--stack-gap-x"]: `${o ? 0 : t}px`, ["--stack-gap-y"]: `${o ? t : 0}px` };
  return react.exports.createElement("div", { "data-framer-stack-gap": true, style: i }, e);
}
function Zc(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function aF(e) {
  return e === "column" || e === "column-reverse";
}
function iF(e) {
  switch (e) {
    case "column-reverse":
    case "row-reverse":
      return true;
    default:
      return false;
  }
}
function yo(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
mn(bo, { direction: { type: fe.SegmentedEnum, options: ["horizontal", "vertical"], title: "Direction", defaultValue: "vertical" }, distribution: { type: fe.Enum, options: ["start", "center", "end", "space-between", "space-around", "space-evenly"], optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"], title: "Distribute", defaultValue: "space-around" }, alignment: { type: fe.SegmentedEnum, options: ["start", "center", "end"], title: "Align", defaultValue: "center" }, gap: { type: fe.Number, min: 0, title: "Gap", hidden: (e) => e.distribution !== void 0 && ["space-between", "space-around", "space-evenly"].includes(e.distribution), defaultValue: 10 }, padding: { type: fe.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["t", "r", "b", "l"], min: 0, title: "Padding", defaultValue: 0 } });
var Qc = "PageContentWrapper";
function Ey({ children: e, effect: t, dragEnabled: r, direction: n, contentHeight: o, contentWidth: i, alignment: a, gap: s, isLastPage: l, contentOffsetRef: u, constraintsRef: c, directionLock: f, onDragStart: p, onDrag: m, onDragEnd: d, layoutId: h }) {
  let v = n === "horizontal", y = v ? "x" : "y", P = v && !l && s, C = !v && !l && s, b = i !== "stretch" && v, T = o !== "stretch" && !v, F = b ? "auto" : "100%", I = T ? "auto" : "100%", A = P && F === "100%" ? `calc(100% + ${s}px)` : F, E = C && I === "100%" ? `calc(100% + ${s}px)` : I;
  return react.exports.createElement(we, { position: "relative", "data-framer-component-type": "PageContainer", width: A, height: E, layoutId: h ? `${h}-container` : void 0, backgroundColor: "transparent", drag: r ? y : false, dragDirectionLock: f, _dragX: u.current.x, _dragY: u.current.y, dragConstraints: c.current, onDrag: m, onDragStart: p, onDragEnd: d, preserve3d: true, style: { paddingRight: P ? s : 0, paddingBottom: C ? s : 0 } }, react.exports.createElement(we, { position: "relative", "data-framer-component-type": Qc, width: F, height: I, preserve3d: false, backgroundColor: "transparent", _layoutResetTransform: true, key: t ? Object.keys(t).join("") : "", style: __spreadProps(__spreadValues({}, t), { display: "flex", flexDirection: v ? "row" : "column", alignItems: a && yo(a) }) }, e));
}
var Ht;
(function(r) {
  r.Auto = "auto", r.Stretch = "stretch";
})(Ht || (Ht = {}));
var ep = [Ht.Auto, Ht.Stretch], Dy = ep.map((e) => {
  switch (e) {
    case Ht.Auto:
      return "Auto";
    case Ht.Stretch:
      return "Stretch";
  }
}), Ly = ["start", "center", "end"], cF = Ly.map((e) => {
  switch (e) {
    case "start":
      return "Start";
    case "center":
      return "Center";
    case "end":
      return "End";
  }
}), Oy = ["none", "cube", "coverflow", "wheel", "pile"], pF = Oy.map((e) => {
  switch (e) {
    case "none":
      return "None";
    case "cube":
      return "Cube";
    case "coverflow":
      return "Cover Flow";
    case "wheel":
      return "Wheel";
    case "pile":
      return "Pile";
  }
});
function al(e) {
  let _a2 = e, { direction: t = "horizontal", contentWidth: r = Ht.Stretch, contentHeight: n = Ht.Stretch, alignment: o = "start", currentPage: i = 0, animateCurrentPageUpdate: a = true, gap: s = 10, padding: l = 0, momentum: u = false, dragEnabled: c = true, defaultEffect: f = "none", background: p = "transparent", overflow: m = "hidden", __fromCodeComponentNode: d, effect: h, children: v, contentOffsetX: y, contentOffsetY: P, onChangePage: C, onScrollStart: b, onScroll: T, onDragStart: F, onDrag: I, onDragEnd: A, directionLock: E, onScrollEnd: k, onDirectionLock: W, onUpdate: K, wheelEnabled: U = false, layoutId: N } = _a2, ee = __objRest(_a2, ["direction", "contentWidth", "contentHeight", "alignment", "currentPage", "animateCurrentPageUpdate", "gap", "padding", "momentum", "dragEnabled", "defaultEffect", "background", "overflow", "__fromCodeComponentNode", "effect", "children", "contentOffsetX", "contentOffsetY", "onChangePage", "onScrollStart", "onScroll", "onDragStart", "onDrag", "onDragEnd", "directionLock", "onScrollEnd", "onDirectionLock", "onUpdate", "wheelEnabled", "layoutId"]), H = ht(e, { specificLayoutId: N, postfix: "page" }), X = __spreadProps(__spreadValues({}, ee), { background: p }), ae = react.exports.useRef(false), G = L.hasRestrictions() && e.__fromCodeComponentNode && V(X.width) && V(X.height);
  !G && d && !X.__fromCanvasComponent && (X.width = "100%", X.height = "100%", X._constraints = { enabled: true });
  let { initial: S, prev: x } = react.exports.useRef({ initial: { x: 0, y: 0 }, prev: { x: 0, y: 0 } }).current, g = t === "horizontal", R = s;
  R < 0 && (jt(`The 'gap' property of Page component can not be negative, but is ${s}.`), R = 0), Mt();
  let O = react.exports.Children.count(v), Y = react.exports.useRef(0), re = react.exports.useRef({ top: 0, left: 0, right: 0, bottom: 0 }), te = react.exports.useRef(null), oe = react.exports.useRef(null), Ce = react.exports.useRef([]), de = react.exports.useRef([]), ye = Je(Ke(y) ? 0 : y != null ? y : 0), qe = Je(Ke(P) ? 0 : P != null ? P : 0), Re = react.exports.useRef({ x: Ke(y) ? y : ye, y: Ke(P) ? P : qe }), $ = react.exports.useRef(0), D = react.exports.useRef(0), j = react.exports.useRef(e);
  j.current = e;
  let se = react.exports.useRef(e.direction), Fe = dF($, Re, g), [Pe, Qe] = react.exports.useState(0), rt = react.exports.useRef({ width: 200, height: 200 });
  G && V(X.width) && V(X.height) && (rt.current.width = X.width, rt.current.height = X.height);
  let Wt = react.exports.useCallback(() => {
    G || Qe((le) => le + 1);
  }, [G]);
  react.exports.useEffect(() => {
    if (L.current() === L.preview)
      return globalThis.addEventListener("resize", Wt), () => {
        globalThis.removeEventListener("resize", Wt);
      };
  }, [Wt]);
  let ne = () => {
    Ce.current.forEach((le, pe) => {
      let ce = _y(pe, j, de, Re, Y);
      if (!(!le || !ce))
        for (let He in ce)
          Ke(le[He]) && le[He].set(ce[He]);
    });
  }, ue = (le) => {
    let pe = fF(te, le, t, R);
    pe && (de.current = pe);
    let ce = mF(rt.current, de.current, t, j.current);
    ce !== Y.current && (Y.current = ce, re.current.top = -ce, re.current.left = -ce, L.current() === L.canvas && Qe((He) => He + 1));
  }, Ne = () => {
    let le = te.current;
    if (!le)
      return null;
    let { offsetWidth: pe, offsetHeight: ce } = le, He = rt.current;
    return pe !== He.width || ce !== He.height ? (rt.current = { width: pe, height: ce }, rt.current) : null;
  }, yt = (le, pe = false) => {
    let ce = hF(le, O);
    ce !== D.current && (D.current = ce, jy(ce, $, C));
    let gr = ky(ce, O, de, g, Y), vr = a && L.current() !== L.canvas && !pe;
    Fe(ce, gr, { animated: vr });
  };
  react.exports.useLayoutEffect(() => {
    var ce;
    if (ae.current)
      return;
    $.current = i;
    let le = Re.current;
    le.x.onChange(ne), le.y.onChange(ne), ne(), ae.current = true;
    let pe = (ce = Ne()) != null ? ce : rt.current;
    ue(pe), yt($.current, true);
  }, []), react.exports.useEffect(() => {
    i !== $.current && yt(i);
  }, [i]);
  let pt = () => {
    let le = Ne();
    ue(le != null ? le : rt.current), yt($.current), (le || t !== se.current) && (t === "horizontal" ? Re.current.y.set(0) : Re.current.x.set(0), se.current = t);
  };
  react.exports.useLayoutEffect(() => {
    L.current() === L.canvas && pt();
  });
  let bt = (le, pe) => {
    b && b(pe), F && F(le, pe), x.x = S.x = pe.point.x, x.y = S.y = pe.point.y;
  }, wo = (le, pe) => {
    T && T(pe), I && I(le, pe), x.x = pe.point.x, x.y = pe.point.y;
  }, Sl = () => {
    if (e.onDragTransitionEnd && e.onDragTransitionEnd(), k) {
      let { x: le, y: pe } = Re.current, ce = { x: le.get(), y: pe.get() };
      k({ point: ce, velocity: { x: le.getVelocity(), y: pe.getVelocity() }, offset: { x: ce.x - S.x, y: ce.y - S.y }, delta: { x: ce.x - x.x, y: ce.y - x.y } });
    }
  }, Cl = async (le, pe) => {
    let ce = g ? Re.current.x : Re.current.y;
    ce.stop();
    let He = ce.get(), gr = g ? "x" : "y", vr = pe.velocity[gr], Sn = Vy(de.current, He, He, g, u);
    vr && Wo({ from: He, velocity: vr, modifyTarget: (Wp) => (Sn = Vy(de.current, He, Wp, g, u), Wp) }).stop(), jy(Sn, $, C);
    let Lb = ky(Sn, O, de, g, Y);
    A && A(le, pe);
    let Ob = Re.current[gr];
    Xt(Ob, Lb, { type: "spring", from: He, velocity: vr, stiffness: 500, damping: 50, onComplete: Sl });
  };
  Ce.current = [];
  let zp = react.exports.Children.map(v, (le, pe) => {
    var vr;
    if (!Et(le) || !Ft(le))
      return le;
    let ce = { right: void 0, bottom: void 0, top: void 0, left: void 0, _constraints: { enabled: false } };
    X.__fromCanvasComponent ? (ce.style = (vr = le.props.style) != null ? vr : {}, r === "stretch" && (ce.style.width = "100%"), n === "stretch" && (ce.style.height = "100%")) : (r === "stretch" && (ce.width = "100%"), n === "stretch" && (ce.height = "100%"));
    let He, gr = _y(pe, j, de, Re, Y);
    if (gr) {
      He = {};
      for (let Sn in gr)
        He[Sn] = Ee(gr[Sn]);
    }
    return Ce.current.push(He), react.exports.createElement(Ey, { key: pe, effect: He, dragEnabled: c, direction: t, contentHeight: n, contentWidth: r, alignment: o, gap: R, isLastPage: pe === O - 1, contentOffsetRef: Re, constraintsRef: re, directionLock: E, onDragStart: bt, onDrag: wo, onDragEnd: Cl, layoutId: H ? `${H}-${pe}` : void 0 }, react.exports.cloneElement(le, ce));
  });
  return Xs(oe, { enabled: U, initial: S, prev: x, direction: t, constraints: re, offsetX: Re.current.x, offsetY: Re.current.y, onScrollStart: b, onScroll: T, onScrollEnd: k }), react.exports.createElement(we, __spreadProps(__spreadValues({ preserve3d: false, perspective: gF(e) ? 1200 : void 0, overflow: m }, X), { layoutId: H, ref: te, onLayoutMeasure: pt }), react.exports.createElement(we, { "data-framer-component-type": "Page", ref: oe, background: null, x: Re.current.x, y: Re.current.y, width: "100%", height: "100%", preserve3d: true, layout: true, layoutId: H !== void 0 ? H + "-page" : void 0, style: { padding: Ii(vo(e)), display: "flex", flexDirection: g ? "row" : "column" } }, react.exports.createElement(fn, { title: "Page", description: "Click and drag the connector to any frame on the canvas \u2192", children: v, size: rt.current, insideUserCodeComponent: !d }), zp));
}
mn(al, { direction: { type: fe.Enum, options: ["horizontal", "vertical"], title: "Direction", defaultValue: "horizontal", displaySegmentedControl: true, optionIcons: ["direction-horizontal", "direction-vertical"] }, directionLock: { type: fe.Boolean, title: "Lock", enabledTitle: "1 Axis", disabledTitle: "Off", defaultValue: true }, contentWidth: { type: fe.Enum, options: ep, optionTitles: Dy, title: "Width", defaultValue: Ht.Stretch, displaySegmentedControl: true }, contentHeight: { type: fe.Enum, options: ep, optionTitles: Dy, title: "Height", defaultValue: Ht.Stretch, displaySegmentedControl: true }, alignment: { type: fe.Enum, options: Ly, optionTitles: cF, title: "Align", hidden(e) {
  let { direction: t, contentWidth: r, contentHeight: n } = e;
  return (t === "horizontal" ? n : r) === Ht.Stretch;
}, defaultValue: "start", displaySegmentedControl: true, optionIcons: { direction: { horizontal: ["align-top", "align-middle", "align-bottom"], vertical: ["align-left", "align-center", "align-right"] } } }, gap: { type: fe.Number, min: 0, title: "Gap", defaultValue: 0 }, padding: { type: fe.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0, title: "Padding", defaultValue: 0 }, currentPage: { type: fe.Number, min: 0, title: "Current", displayStepper: true, defaultValue: 0 }, momentum: { type: fe.Boolean, enabledTitle: "On", disabledTitle: "Off", title: "Momentum", defaultValue: false }, dragEnabled: { type: fe.Boolean, title: "Dragging", enabledTitle: "On", disabledTitle: "Off", defaultValue: true }, wheelEnabled: { type: fe.Boolean, title: "Wheel", enabledTitle: "On", disabledTitle: "Off", defaultValue: false }, defaultEffect: { type: fe.Enum, options: Oy, optionTitles: pF, title: "Effect", defaultValue: "none" }, children: { type: fe.Array, title: "Content", control: { type: fe.ComponentInstance, title: "Page" } } });
al.supportsConstraints = true;
function vF(e) {
  let { normalizedOffset: t, direction: r } = e, n = r === "horizontal";
  return { originX: t < 0 ? 1 : 0, originY: t < 0 ? 1 : 0, rotateY: n ? Math.min(Math.max(-90, t * 90), 90) : 0, rotateX: n ? 0 : Math.min(Math.max(-90, t * -90), 90), backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };
}
function yF(e) {
  let { normalizedOffset: t, direction: r, size: n } = e, o = r === "horizontal";
  return { rotateY: o ? Math.min(45, Math.max(-45, t * -45)) : 0, rotateX: o ? 0 : Math.min(45, Math.max(-45, t * 45)), originX: o ? t < 0 ? 0 : 1 : 0.5, originY: o ? 0.5 : t < 0 ? 0 : 1, x: o ? `${t * -25}%` : 0, y: o ? 0 : `${t * -25}%`, z: -Math.abs(t), scale: 1 - Math.abs(t / 10) };
}
function By(e, t) {
  return e * t - e * 8;
}
function bF(e) {
  let { normalizedOffset: t, direction: r, size: n } = e, o = r === "horizontal", i = Math.abs(t);
  return { x: t < 0 && o ? By(i, n.width) : 0, y: t < 0 && !o ? By(i, n.height) : 0, scale: t < 0 ? 1 - i / 50 : 1 };
}
function xF(e) {
  let { normalizedOffset: t, direction: r, size: n } = e, o = r === "horizontal", i = (o ? n.width : n.height) * 18 / (2 * Math.PI), a = o ? 0 : t * -20, s = o ? t * 20 : 0, l = o ? 0 : t * -n.height, u = o ? t * -n.width : 0;
  return { opacity: 1 - Math.abs(t) / 4, transform: `translate(${u}px, ${l}px) translateZ(-${i}px) rotateX(${a}deg) rotateY(${s}deg) translateZ(${i}px)` };
}
function Ny(e) {
  switch (e) {
    case "cube":
      return vF;
    case "coverflow":
      return yF;
    case "pile":
      return bF;
    case "wheel":
      return xF;
    default:
      return null;
  }
}
function Vy(e, t, r, n, o) {
  let i = function(s) {
    let l = n ? s.x : s.y;
    return Math.abs(l + t);
  }, a = function(s) {
    let l = n ? s.x : s.y;
    return Math.abs(l + r);
  };
  if (o) {
    let s = [...e].sort((l, u) => a(l) - a(u));
    return e.indexOf(s[0]);
  } else {
    let s = [...e].sort((f, p) => i(f) - i(p));
    if (s.length === 1)
      return e.indexOf(s[0]);
    let l = s[0], u = s[1], c = [l, u].sort((f, p) => a(f) - a(p));
    return e.indexOf(c[0]);
  }
}
function fF(e, t, r, n) {
  var c;
  let o = e.current;
  if (!o)
    return;
  let i = [];
  (c = o.firstChild) == null || c.childNodes.forEach((f) => {
    let p = f.firstChild;
    if (!(p instanceof HTMLElement))
      return;
    p.getAttribute("data-framer-component-type") === Qc && i.push(p);
  });
  let a = [];
  i.forEach((f) => {
    if (f instanceof HTMLElement && f.firstChild instanceof HTMLElement) {
      let p = f.firstChild.offsetWidth, m = f.firstChild.offsetHeight;
      a.push({ width: p, height: m });
    } else
      a.push(null);
  });
  let s = 0, l = 0, u = r === "horizontal";
  return a.map((f) => {
    let p = f || t, m = s, d = l;
    return u ? s += p.width + n : l += p.height + n, __spreadProps(__spreadValues({}, p), { x: m, y: d });
  });
}
function mF(e, t, r, n) {
  let o = t[t.length - 1];
  if (!o)
    return 0;
  let i = vo(n), a = r === "horizontal", s = a ? i.left : i.top, l = a ? i.right : i.bottom, u = a ? o.width : o.height, f = (a ? e.width : e.height) - s - l - u, p = a ? o.x : o.y;
  return f <= 0 ? Math.max(p, 0) : Math.max(p - f, 0);
}
function ky(e, t, r, n, o) {
  let i = Math.max(0, Math.min(t - 1, e)), a = r.current[i];
  return a ? n ? -Math.min(a.x, o.current) : -Math.min(a.y, o.current) : 0;
}
function dF(e, t, r) {
  return (n, o, i) => {
    e.current = n;
    let a = r ? t.current.x : t.current.y;
    if (!i || !i.animated) {
      a.set(o);
      return;
    }
    let s = r ? "x" : "y";
    Xt(t.current[s], o, { type: "spring", from: a.get(), velocity: a.getVelocity(), stiffness: 500, damping: 50 });
  };
}
function hF(e, t) {
  return e >= 0 ? Math.min(e, t - 1) : (e % t + t) % t;
}
function _y(e, t, r, n, o) {
  let { direction: i = "horizontal", defaultEffect: a, effect: s, gap: l = 0 } = t.current, u = i === "horizontal", c = r.current[e] || { x: u ? e * 200 + l : 0, y: u ? 0 : e * 200 + l, width: 200, height: 200 }, f = s || Ny(a);
  if (!f)
    return null;
  let p, m, d = n.current, h = o.current;
  u ? (p = Math.min(c.x, h) + (d ? d.x.get() : 0), m = p / (c.width + l)) : (p = Math.min(c.y, h) + (d ? d.y.get() : 0), m = p / (c.height + l));
  let v = { width: c.width, height: c.height };
  return f({ offset: p, normalizedOffset: m, size: v, index: e, direction: i, gap: l, pageCount: r.current.length });
}
function gF(e) {
  return !!e.effect || !!Ny(e.defaultEffect);
}
function jy(e, t, r) {
  t.current !== e && (r && r(e, t.current), t.current = e);
}
var tp;
(function(e) {
  e.Previous = "@Previous";
})(tp || (tp = {}));
var zt;
(function(e) {
  e.push = "push", e.instant = "instant", e.fade = "fade", e.modal = "modal", e.overlay = "overlay", e.flip = "flip", e.magicMotion = "magicMotion";
})(zt || (zt = {}));
var CF = xi();
function TF(e, t, r, n, o) {
  let i = class extends react.exports.Component {
    render() {
      return react.exports.createElement(go.Consumer, null, (a) => {
        let s = () => {
          if (t === "goBack") {
            a.goBack();
            return;
          }
          if (!n)
            return;
          let c = n(), f = PF(r);
          switch (t) {
            case zt.instant:
              a.instant(c);
              break;
            case zt.fade:
              a.fade(c);
              break;
            case zt.modal:
              a.modal(c, o);
              break;
            case zt.push:
              a.push(c, { appearsFrom: f });
              break;
            case zt.overlay:
              a.overlay(c, __spreadProps(__spreadValues({}, o), { appearsFrom: f }));
              break;
            case zt.flip:
              a.flip(c, { appearsFrom: f });
              break;
            case zt.magicMotion:
              a.magicMotion(c, {});
              break;
          }
        }, _a2 = this.props, { onTap: l } = _a2, u = __objRest(_a2, ["onTap"]);
        return l ? u.onTap = (...c) => {
          l.apply(this, c), s.apply(this, c);
        } : u.onTap = s, react.exports.createElement(e, __spreadValues({}, u));
      });
    }
  };
  return CF(i, e), i;
}
function PF(e) {
  switch (e) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "up":
      return "bottom";
    case "down":
      return "top";
  }
}
var wF = { delta: 1 / 60, maxValues: 1e4 }, rp = class {
  constructor(t) {
    this.currentTime = 0;
    this.options = __spreadValues(__spreadValues({}, wF), t), this.animator = t.animator;
  }
  preCalculate() {
    if (!this.animator.isReady())
      return;
    let { delta: t } = this.options;
    for (this.values = []; !this.animator.isFinished() && this.values.length < this.options.maxValues; ) {
      let r = this.animator.next(this.options.delta);
      typeof r == "object" && r && (r = __spreadValues({}, r)), this.values.push(r);
    }
    this.totalTime = this.values.length * t;
  }
  indexForTime(t) {
    return Math.max(0, Math.min(this.values.length - 1, Math.round(this.values.length * (t / this.totalTime)) - 1));
  }
  setFrom(t) {
    this.animator.setFrom(t), this.preCalculate();
  }
  setTo(t) {
    this.animator.setTo(t), this.preCalculate();
  }
  isReady() {
    return this.values !== void 0 && this.values.length > 0 && this.totalTime > 0;
  }
  next(t) {
    this.currentTime += t;
    let r = this.indexForTime(this.currentTime);
    return this.values[r];
  }
  isFinished() {
    return this.totalTime === 0 || this.currentTime >= this.totalTime;
  }
  get endValue() {
    this.preCalculate();
    let t = this.indexForTime(this.totalTime);
    return this.values.length > 0 ? this.values[t] : this.animator.next(0);
  }
};
var ct;
(function(e) {
  e.Linear = "linear", e.Ease = "ease", e.EaseIn = "ease-in", e.EaseOut = "ease-out", e.EaseInOut = "ease-in-out";
})(ct || (ct = {}));
var RF = { curve: ct.Ease, duration: 1 };
function FF(e) {
  switch (e) {
    case ct.Linear:
      return [0, 0, 1, 1];
    case ct.Ease:
      return [0.25, 0.1, 0.25, 1];
    case ct.EaseIn:
      return [0.42, 0, 1, 1];
    case ct.EaseOut:
      return [0, 0, 0.58, 1];
    case ct.EaseInOut:
      return [0.42, 0, 0.58, 1];
  }
}
var hn = class {
  constructor(t, r) {
    this.interpolation = r;
    this.progress = 0;
    this.next = (t2) => {
      let { duration: r2 } = this.options;
      this.progress += t2 / r2;
      let n2 = this.unitBezier.solve(this.progress, this.solveEpsilon(r2));
      return this.current = this.interpolator(n2), this.current;
    };
    this.options = __spreadValues(__spreadValues({}, RF), t);
    let n;
    typeof this.options.curve == "string" ? n = FF(this.options.curve) : n = this.options.curve;
    let [o, i, a, s] = n;
    this.unitBezier = new zy(Ie(o, i), Ie(a, s));
  }
  setFrom(t) {
    this.current = t, this.updateInterpolator();
  }
  setTo(t) {
    this.destination = t, this.updateInterpolator();
  }
  isReady() {
    return this.interpolator !== void 0;
  }
  updateInterpolator() {
    this.current === void 0 || this.destination === void 0 || (this.interpolator = this.interpolation.interpolate(this.current, this.destination));
  }
  isFinished() {
    return this.progress >= 1;
  }
  solveEpsilon(t) {
    return 1 / (200 * t);
  }
}, zy = class {
  constructor(t, r) {
    this.c = Ie.multiply(t, 3), this.b = Ie.subtract(Ie.multiply(Ie.subtract(r, t), 3), this.c), this.a = Ie.subtract(Ie.subtract(Ie(1, 1), this.c), this.b);
  }
  solve(t, r) {
    return this.sampleY(this.solveForT(t, r));
  }
  sampleX(t) {
    return ((this.a.x * t + this.b.x) * t + this.c.x) * t;
  }
  sampleY(t) {
    return ((this.a.y * t + this.b.y) * t + this.c.y) * t;
  }
  sampleDerivativeX(t) {
    return (3 * this.a.x * t + 2 * this.b.x) * t + this.c.x;
  }
  solveForT(t, r) {
    let n, o, i, a, s, l;
    for (i = t, l = 0; l < 8; ++l) {
      if (a = this.sampleX(i) - t, Math.abs(a) < r)
        return i;
      if (s = this.sampleDerivativeX(i), Math.abs(s) < r)
        break;
      i = i - a / s;
    }
    if (n = 0, o = 1, i = t, i < n)
      return n;
    if (i > o)
      return o;
    for (; n < o; ) {
      if (a = this.sampleX(i), Math.abs(a - t) < r)
        return i;
      t > a ? n = i : o = i, i = (o - n) * 0.5 + n;
    }
    return i;
  }
};
var EF = { precalculate: false, colorModel: tt.HUSL }, gn = class {
  constructor(t, r, n, o, i, a = bi) {
    this.playStateSource = "idle";
    this.readyPromise = Promise.resolve();
    this.resetFinishedPromise();
    let s = __spreadValues({}, EF), l = {};
    i && (Object.assign(s, i), Object.assign(l, i));
    let u;
    s.customInterpolation ? u = s.customInterpolation : u = new kr(i);
    let c;
    o ? c = new o(l, u) : c = new hn({}, u), s.precalculate && (c = new rp({ animator: c })), c.setFrom(r), c.setTo(n);
    let f = (m) => {
      gn.driverCallbackHandler(t, m);
    }, p = (m) => {
      m && (gn.driverCallbackHandler(t, n), this.playStateSource === "running" && (this.playStateValue = "finished"));
    };
    this.driver = new a(c, f, p);
  }
  static driverCallbackHandler(t, r) {
    if (ie(t) || Ke(t))
      t.set(r);
    else {
      let n = t;
      q.transaction((o) => {
        for (let i in n) {
          let a = n[i];
          ie(a) ? o(a, r[i]) : n[i] = r[i];
        }
      });
    }
  }
  get playStateValue() {
    return this.playStateSource;
  }
  set playStateValue(t) {
    if (t !== this.playStateSource) {
      let r = t;
      switch (this.playStateSource = t, t) {
        case "idle":
          r === "running" && this.oncancel && this.oncancel(), this.readyResolve && this.readyResolve(), this.resetReadyPromise();
          break;
        case "finished":
          if (r === "idle") {
            console.warn("Bad state transition");
            break;
          }
          this.onfinish && this.onfinish(), this.finishedResolve && this.finishedResolve();
          break;
        case "running":
          this.resetReadyPromise();
          break;
      }
      r === "finished" && this.resetFinishedPromise(), t === "finished" && (this.playStateValue = "idle");
    }
  }
  get playState() {
    return this.playStateValue;
  }
  resetReadyPromise() {
    this.readyResolve = null, this.readyPromise = new Promise((t, r) => {
      this.readyResolve = t;
    });
  }
  get ready() {
    return this.readyPromise;
  }
  resetFinishedPromise() {
    this.finishedResolve = null, this.finishedReject = null, this.finishedPromise = new Promise((t, r) => {
      this.finishedResolve = t, this.finishedReject = r;
    }), this.finishedPromise.catch((t) => {
    });
  }
  get finished() {
    return this.finishedPromise;
  }
  play() {
    this.playStateValue = "running", this.driver.play();
  }
  cancel() {
    if (this.playStateValue === "running") {
      if (this.driver.cancel(), this.playState !== "idle") {
        let t = "AbortError";
        this.finishedReject && this.finishedReject(t);
      }
      this.playStateValue = "idle";
    }
  }
  finish() {
    this.playStateSource === "running" && (this.playStateValue = "finished", this.driver.finish());
  }
  isFinished() {
    return this.playStateValue === "finished";
  }
};
function MF(e, t, r, n) {
  rn("animate()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)");
  let o = e, i;
  ie(e) || Ke(e) ? i = e.get() : i = q.objectToValues(e);
  let a = new gn(o, i, t, r, n);
  return a.play(), a;
}
function sl(e, t, r, n) {
  return ie(e) ? MF(e, t, r, n) : Xt(e, t, r);
}
(function(s) {
  function e(l, u, c) {
    return s(l, u, cn, c);
  }
  s.spring = e;
  function t(l, u, c) {
    return s(l, u, hn, c);
  }
  s.bezier = t;
  function r(l, u, c) {
    return s.bezier(l, u, __spreadProps(__spreadValues({}, c), { curve: ct.Linear }));
  }
  s.linear = r;
  function n(l, u, c) {
    return s.bezier(l, u, __spreadProps(__spreadValues({}, c), { curve: ct.Ease }));
  }
  s.ease = n;
  function o(l, u, c) {
    return s.bezier(l, u, __spreadProps(__spreadValues({}, c), { curve: ct.EaseIn }));
  }
  s.easeIn = o;
  function i(l, u, c) {
    return s.bezier(l, u, __spreadProps(__spreadValues({}, c), { curve: ct.EaseOut }));
  }
  s.easeOut = i;
  function a(l, u, c) {
    return s.bezier(l, u, __spreadProps(__spreadValues({}, c), { curve: ct.EaseInOut }));
  }
  s.easeInOut = a;
})(sl || (sl = {}));
function Wy(e = _.location.href) {
  if (!e)
    throw new Error(`getConfigFromURL() called without url argument (location.href = "${_.location.href}")`);
  let t = new URL(e).searchParams, r = t.get("imageBaseURL") || "", n = t.get("projectURL") || "", o = t.get("console") === "1", i = t.get("device") === "0";
  return { imageBaseURL: r, projectURL: n, showConsole: o, disableDevice: i };
}
function IF(e = _.location.href) {
  if (!e)
    throw new Error(`getConfigFromURL() called without url argument (location.href = "${_.location.href}")`);
  let t = decodeURIComponent(new URL(e).hash.slice(1)), [r, n, o] = t.split("#&#");
  return { documentURL: r, imageBaseURL: n, projectURL: o };
}
function AF(e, t) {
  try {
    return typeof t == "undefined" ? new URL(e) : new URL(e, t);
  } catch (r) {
    return null;
  }
}
var DF = (e) => [].concat.apply([], e);
function Uy(e) {
  let t = "";
  for (let r of e)
    !r || (t.length > 0 && !t.endsWith("/") && (t += "/"), Array.isArray(r) ? t += Uy(r) : t += encodeURIComponent(r).replace(/%2F/g, "/"));
  return t;
}
function LF(...e) {
  let t = DF(e).filter(Boolean);
  if (t.length === 1 && AF(t[0]))
    return t[0];
  let r = Uy(e);
  return _e.assetResolver(r, { isFramerResourceURL: true, isExport: L.current() === L.export }) || "";
}
var np = new Map(), Br = class {
  constructor(t) {
    this.id = t;
    this._link = null;
    this._urllink = null;
  }
  add(t) {
    return Br.forKey(this.id + t);
  }
  toString() {
    return this.id;
  }
  get link() {
    let t = this._link;
    return t || (this._link = "#" + this.id);
  }
  get urlLink() {
    let t = this._urllink;
    return t || (this._urllink = "url(#" + this.id + ")");
  }
  static forKey(t) {
    let r = np.get(t);
    return r || (r = new Br("a" + (1e3 + np.size) + "z"), np.set(t, r), r);
  }
};
function So(e, t) {
  return { id: `id${t}g${Xe.hash(e)}`, angle: e.angle - 90, stops: Or(e).map((r) => ({ color: r.value, alpha: ot.getAlpha(r.value) * e.alpha, position: r.position })) };
}
function Co(e, t) {
  return { id: `id${t}g${Ye.hash(e)}`, widthFactor: e.widthFactor, heightFactor: e.heightFactor, centerAnchorX: e.centerAnchorX, centerAnchorY: e.centerAnchorY, stops: Or(e).map((r) => ({ color: r.value, alpha: ot.getAlpha(r.value) * e.alpha, position: r.position })) };
}
var op = (e) => {
  let t = De.fromRect(e.getBoundingClientRect());
  return t.x = t.x + _.scrollX, t.y = t.y + _.scrollY, t;
}, Gy = (e) => De.merge(...e.map(op)), OF = (e, t) => {
  let r = $y(e, t);
  return { x: r.x, y: r.y, width: e.width, height: e.height };
}, VF = (e, t) => {
  let r = Xy(e, t);
  return { x: r.x, y: r.y, width: e.width, height: e.height };
}, ip = (e) => {
  let t = e.getBoundingClientRect();
  return { x: t.left + _.scrollX, y: t.top + _.scrollY, width: t.width, height: t.height };
}, kF = (e) => ({ x: e.pageX, y: e.pageY }), _F = (e) => ({ x: e.clientX, y: e.clientY }), $y = (e, t) => {
  let r = ip(t);
  return { x: e.x + r.x, y: e.y + r.y };
}, Xy = (e, t) => {
  let r = ip(t);
  return { x: e.x - r.x, y: e.y - r.y };
}, jF = (e, t = {}) => {
  let r = new KeyboardEvent("keydown", __spreadValues({ bubbles: true, keyCode: e }, t)), n = document.activeElement;
  n && n.dispatchEvent(r);
}, BF = { frameFromElement: op, frameFromElements: Gy, convertToPageFrame: OF, convertFromPageFrame: VF, getPageFrame: ip, fromEventForPage: kF, fromEventForClient: _F, convertToPagePoint: $y, convertFromPagePoint: Xy };
var NF = "calculatedPaths";
function HF(e) {
  return NF in e;
}
function zF(e, t) {
  if (Xe.isLinearGradient(t.fill))
    return So(t.fill, e);
  if (Ye.isRadialGradient(t.fill))
    return Co(t.fill, e);
}
function WF(e, t) {
  let r = 0, n, o = (...i) => {
    r = Date.now(), n = void 0, e(...i);
  };
  return (...i) => {
    let a = Date.now(), s = t - (a - r);
    s <= 0 || s > t ? (n && (_.clearTimeout(n), n = void 0), r = a, e(...i)) : n || (n = _.setTimeout(o, s, ...i));
  };
}
var UF = "framer/asset-reference,";
function Yy(e) {
  return e.startsWith(`data:${UF}`);
}
function ap(e, t) {
  var n;
  if (/^\w+:/.test(e) && !Yy(e))
    return e;
  typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;
  let r = L.current() === L.export;
  return (n = _e.assetResolver(e, { size: t, isExport: r })) != null ? n : "";
}
function Ai(e, t, r) {
  if (e = q.get(e, "#09F"), !et.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
    return;
  let n = e.pixelWidth, o = e.pixelHeight, i, { fit: a } = e;
  if (a === "fill" || a === "fit" || !a) {
    let l = 1, u = 1, c = 0, f = 0, p = n / o, m = t.height * p, d = t.width / p, h = m / t.width, v = d / t.height;
    (a === "fill" || !a ? v > h : v < h) ? (u = v, f = (1 - v) / 2) : (l = h, c = (1 - h) / 2), i = `translate(${c}, ${f}) scale(${l}, ${u})`;
  }
  return { id: `id${r}g-fillImage`, path: e.src, transform: i };
}
function GF(e) {
  return e.type === "master";
}
function $F(e) {
  return e.type === "override";
}
function sp(e) {
  return e.type !== "master";
}
var XF = "|local|";
function YF(e, t) {
  let r = e.prototype.toJSON;
  return e.prototype.toJSON = function() {
    let n = r ? r.apply(this) : this;
    return Object.assign({}, n, { __type__: t });
  }, e;
}
function KF(e, t) {
  return e && e.__type__ && e.__type__ === t;
}
var Jt = class {
  constructor(t) {
    this.__class = "PathSegment";
    this.x = 0;
    this.y = 0;
    this.handleMirroring = "straight";
    this.handleOutX = 0;
    this.handleOutY = 0;
    this.handleInX = 0;
    this.handleInY = 0;
    this.radius = 0;
    t && Object.assign(this, t);
  }
  merge(t) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, t);
  }
};
Jt.displayName = "WithClassDiscriminatorMixin(PathSegment)";
Jt.prototype.__class = "PathSegment";
(function(a) {
  a.point = (s) => ({ x: s.x, y: s.y }), a.handleOut = (s) => ({ x: s.handleOutX, y: s.handleOutY }), a.handleIn = (s) => ({ x: s.handleInX, y: s.handleInY }), a.calculatedHandleOut = (s) => {
    switch (s.handleMirroring) {
      case "symmetric":
      case "disconnected":
      case "asymmetric":
        return Ie.add(a.point(s), a.handleOut(s));
      default:
        return { x: s.x, y: s.y };
    }
  }, a.calculatedHandleIn = (s) => {
    switch (s.handleMirroring) {
      case "symmetric":
        return Ie.subtract(a.point(s), a.handleOut(s));
      case "disconnected":
      case "asymmetric":
        return Ie.add(a.point(s), a.handleIn(s));
      default:
        return a.point(s);
    }
  }, a.curveDefault = (s, l) => {
    if (s.length > 2) {
      let u, c;
      l === 0 ? u = s[s.length - 1] : u = s[l - 1], l === s.length - 1 ? c = s[0] : c = s[l + 1];
      let f = Ie.subtract(a.point(c), a.point(u));
      return { x: f.x / 4, y: f.y / 4 };
    }
    return { x: 10, y: 10 };
  };
})(Jt || (Jt = {}));
var qF = "pathSegments";
function ZF(e) {
  return qF in e;
}
var JF = { pathSegments: [], pathClosed: false };
function lp(e, t = { x: 0, y: 0 }, r = L.canvas) {
  let n = [], o = [];
  return Array.isArray(e) ? o = e : o = [e], o.forEach((i, a) => {
    let { pathClosed: s, pathSegments: l } = i, u = l.length;
    if (u === 0)
      return "";
    for (let c = 0; c < u; c++) {
      let f = l[c], p, m, d = c === 0, h = c === u - 1;
      if (h ? s && (p = l[0]) : p = l[c + 1], d ? s && (m = l[u - 1]) : m = l[c - 1], c === 0 ? n.push("M") : m && ll(m, f) && n.push("L"), n.push(f.x + t.x, f.y + t.y), p && !ll(f, p)) {
        let v = Jt.calculatedHandleOut(f), y = Jt.calculatedHandleIn(p);
        n.push("C", v.x + t.x, v.y + t.y, y.x + t.x, y.y + t.y);
      }
      h && p && (ll(f, p) ? n.push("Z") : n.push(p.x + t.x, p.y + t.y, "Z"));
    }
  }), (r === L.export || r === L.preview) && (n = n.map((i) => V(i) ? St(i, 3) : i)), n.join(" ");
}
function ll(e, t) {
  let r = e.handleMirroring === "straight" || e.handleOutX === 0 && e.handleOutY === 0, n = t.handleMirroring === "straight" || t.handleInX === 0 && t.handleInY === 0;
  return r && n;
}
function ul(e, t) {
  return { width: e, height: t };
}
(function(a) {
  a.equals = (s, l) => s === l ? true : !s || !l ? false : s.width === l.width && s.height === l.height, a.update = (s, l, u = false) => {
    let { width: c, height: f } = s, p = c / f;
    return c = l.width !== void 0 ? l.width : c, f = l.height !== void 0 ? l.height : f, u && (l.width === void 0 && l.height !== void 0 && (c = l.height * p), l.width !== void 0 && l.height === void 0 && p !== 0 && (f = l.width / p)), { width: c, height: f };
  };
  function r(s, l) {
    return { width: Math.max(0, s.width - l.width), height: Math.max(0, s.height - l.height) };
  }
  a.subtract = r, a.zero = a(0, 0), a.isZero = function(s) {
    return s === a.zero || s.width === 0 && s.height === 0;
  }, a.defaultIfZero = function(s, l, u) {
    return a.isZero(u) ? a(s, l) : u;
  };
})(ul || (ul = {}));
function cl(e, t) {
  return { a: e, b: t };
}
(function(o) {
  function e(i, a) {
    let s = i.a.x, l = i.a.y, u = i.b.x, c = i.b.y, f = a.a.x, p = a.a.y, m = a.b.x, d = a.b.y, h = (s - u) * (p - d) - (l - c) * (f - m);
    if (h === 0)
      return null;
    let v = ((f - m) * (s * c - l * u) - (s - u) * (f * d - p * m)) / h, y = ((p - d) * (s * c - l * u) - (l - c) * (f * d - p * m)) / h;
    return { x: v, y };
  }
  o.intersection = e, o.isOrthogonal = (i) => i.a.x === i.b.x || i.a.y === i.b.y, o.perpendicular = (i, a) => {
    let s = i.a.x - i.b.x, l = i.a.y - i.b.y, u = Ie(a.x - l, a.y + s);
    return o(u, a);
  };
  function n(i, a) {
    let s = o.perpendicular(i, a);
    return e(i, s);
  }
  o.projectPoint = n;
})(cl || (cl = {}));
var eE = react.exports.forwardRef(function(t, r) {
  let _a2 = t, { background: n, children: o } = _a2, i = __objRest(_a2, ["background", "children"]), a = __spreadValues({}, i.style);
  return n && delete a.background, react.exports.createElement(ke.div, __spreadProps(__spreadValues({}, i), { style: a, ref: r }), n && n.src ? react.exports.createElement(Os, { image: n }) : null, o);
});
var Di = class extends react.exports.Component {
  render() {
    let { id: t, path: r, transform: n } = this.props, o = ap(r);
    return react.exports.createElement("pattern", { id: t, width: "100%", height: "100%", patternContentUnits: "objectBoundingBox" }, react.exports.createElement("image", { key: o, width: 1, height: 1, xlinkHref: o, preserveAspectRatio: "none", transform: n }));
  }
};
function up(e) {
  let t = Dr(), r = ht(e), n = react.exports.useRef(null);
  return un(e, n), react.exports.createElement(Li, __spreadProps(__spreadValues({}, e), { innerRef: n, parentSize: t, layoutId: r }));
}
function Jy(e, t) {
  var c, f;
  let r = e.current;
  if (!r)
    return;
  let { withExternalLayout: n, parentSize: o } = t;
  if (!n && Yt(t) && o !== Me.Disabled && o !== Me.DisabledForCurrentLevel)
    return;
  let a = r.firstElementChild;
  if (!a || !(a instanceof SVGSVGElement))
    return;
  let { intrinsicWidth: s, intrinsicHeight: l, _constraints: u } = t;
  ((c = a.viewBox.baseVal) == null ? void 0 : c.width) === 0 && ((f = a.viewBox.baseVal) == null ? void 0 : f.height) === 0 && V(s) && V(l) && a.setAttribute("viewBox", `0 0 ${s} ${l}`), u && u.aspectRatio ? a.setAttribute("preserveAspectRatio", "") : a.setAttribute("preserveAspectRatio", "none"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%");
}
var cp = class extends Se {
  constructor() {
    super(...arguments);
    this.container = react.exports.createRef();
    this.svgElement = react.exports.createRef();
  }
  static frame(t) {
    return on(t, t.parentSize || Me.Unknown);
  }
  getPrefixedSVG(t, r) {
    if (this.previouslyPrefixedSVG && t === this.previouslyPrefixedSVG.svg && r === this.previouslyPrefixedSVG.id)
      return this.previouslyPrefixedSVGResult;
    let n = oE(t, r);
    return this.previouslyPrefixedSVGResult = n, this.previouslyPrefixedSVG = { svg: t, id: r }, n;
  }
  get frame() {
    return on(this.props, this.props.parentSize || Me.Unknown);
  }
  componentDidMount() {
    Jy(this.container, this.props);
  }
  componentDidUpdate(t) {
    super.componentDidUpdate(t);
    let { fill: r } = this.props;
    et.isImageObject(r) && et.isImageObject(t.fill) && r.src !== t.fill.src && hs(this.svgElement.current, "fill", null, false), Jy(this.container, this.props);
  }
  collectLayout(t, r) {
    if (this.props.withExternalLayout) {
      r.width = r.height = "inherit";
      return;
    }
    let n = this.frame, { rotation: o, intrinsicWidth: i, intrinsicHeight: a, width: s, height: l } = this.props, u = q.getNumber(o);
    if (t.opacity = V(this.props.opacity) ? this.props.opacity : 1, L.hasRestrictions() && n) {
      Object.assign(t, { transform: `translate(${n.x}px, ${n.y}px) rotate(${u.toFixed(4)}deg)`, width: `${n.width}px`, height: `${n.height}px` }), Yt(this.props) && (t.position = "absolute");
      let c = n.width / (i || 1), f = n.height / (a || 1);
      r.transformOrigin = "top left";
      let { zoom: p, target: m } = ge;
      if (m === L.export) {
        let d = p > 1 ? p : 1;
        r.transform = `scale(${c * d}, ${f * d})`, r.zoom = 1 / d;
      } else
        r.transform = `scale(${c}, ${f})`;
      i && a && (r.width = i, r.height = a);
    } else {
      let { left: c, right: f, top: p, bottom: m } = this.props;
      Object.assign(t, { left: c, right: f, top: p, bottom: m, width: s, height: l, rotate: u }), Object.assign(r, { left: 0, top: 0, bottom: 0, right: 0, position: "absolute" });
    }
  }
  render() {
    var I;
    _.perf && _.perf.nodeRender();
    let { id: t, visible: r, style: n, fill: o, svg: i, intrinsicHeight: a, intrinsicWidth: s, layoutId: l, className: u, variants: c, transition: f, withExternalLayout: p, innerRef: m } = this.props;
    if (!p && (!r || !t))
      return null;
    let d = (I = t != null ? t : l) != null ? I : "svg";
    Mt();
    let h = this.frame, v = h || { width: s || 100, height: a || 100 }, y = __spreadProps(__spreadValues({}, n), { imageRendering: "pixelated" }), P = {};
    this.collectLayout(y, P), zs(this.props, y), uo(this.props, y), Se.applyWillChange(this.props, y, false);
    let C = null;
    if (typeof o == "string" || B.isColorObject(o)) {
      let A = B.isColorObject(o) ? o.initialValue || B.toRgbString(o) : o;
      y.fill = A, y.color = A;
    } else if (Xe.isLinearGradient(o)) {
      let A = o, E = `${encodeURI(t || "")}g${Xe.hash(A)}`;
      y.fill = `url(#${E})`;
      let k = So(A, d);
      C = react.exports.createElement("svg", { ref: this.svgElement, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", style: { position: "absolute" } }, react.exports.createElement("linearGradient", { id: E, gradientTransform: `rotate(${k.angle}, 0.5, 0.5)` }, k.stops.map((W, K) => react.exports.createElement("stop", { key: K, offset: W.position, stopColor: W.color, stopOpacity: W.alpha }))));
    } else if (Ye.isRadialGradient(o)) {
      let A = o, E = `${encodeURI(t || "")}g${Ye.hash(A)}`;
      y.fill = `url(#${E})`;
      let k = Co(A, d);
      C = react.exports.createElement("svg", { ref: this.svgElement, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", style: { position: "absolute" } }, react.exports.createElement("radialGradient", { id: E, cy: A.centerAnchorY, cx: A.centerAnchorX, r: A.widthFactor }, k.stops.map((W, K) => react.exports.createElement("stop", { key: K, offset: W.position, stopColor: W.color, stopOpacity: W.alpha }))));
    } else if (et.isImageObject(o)) {
      let A = Ai(o, v, d);
      A && (y.fill = `url(#${A.id})`, C = react.exports.createElement("svg", { ref: this.svgElement, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "100%", height: "100%", style: { position: "absolute" } }, react.exports.createElement("defs", null, react.exports.createElement(Di, __spreadValues({}, A)))));
    }
    let b = { "data-framer-component-type": "SVG" }, T = !h;
    T && Object.assign(b, so(this.props.center));
    let F = react.exports.createElement(react.exports.Fragment, null, C, react.exports.createElement("div", { key: et.isImageObject(o) ? o.src : "", className: "svgContainer", style: P, ref: this.container, dangerouslySetInnerHTML: { __html: this.getPrefixedSVG(i, d) } }));
    return react.exports.createElement(ke.div, __spreadProps(__spreadValues({}, b), { layoutId: l, transformTemplate: T ? Vr(this.props.center) : void 0, id: t, ref: m, style: y, className: u, variants: c, transition: f }), F);
  }
}, Li = cp;
Li.supportsConstraints = true, Li.defaultSVGProps = { left: void 0, right: void 0, top: void 0, bottom: void 0, style: void 0, _constraints: { enabled: true, aspectRatio: null }, parentSize: Me.Unknown, rotation: 0, visible: true, svg: "", shadows: [] }, Li.defaultProps = __spreadValues(__spreadValues({}, Se.defaultProps), cp.defaultSVGProps);
function oE(e, t) {
  let r = new DOMParser();
  try {
    let o = r.parseFromString(e, "image/svg+xml").getElementsByTagName("svg")[0];
    if (!o)
      return e;
    let i = iE(t);
    return Qy(o, i), o.outerHTML;
  } catch (n) {
    throw Error(`Failed to parse SVG: ${n}`);
  }
}
function iE(e) {
  return e.replace(/[^a-z0-9\-_:.]|^[^a-z]+/gi, "");
}
function Qy(e, t) {
  aE(e, t), Array.from(e.children).forEach((n) => {
    Qy(n, t);
  });
}
function aE(e, t) {
  e.getAttributeNames().forEach((n) => {
    let o = e.getAttribute(n);
    if (!o)
      return;
    if (n === "id" && e.setAttribute(n, `${t}_${o}`), n === "href" || n === "xlink:href") {
      let [a, s] = o.split("#");
      if (a)
        return;
      e.setAttribute(n, `#${t}_${s}`);
      return;
    }
    let i = "url(#";
    if (o.includes(i)) {
      let a = o.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function sE(e) {
  return Object.fromEntries(e.map((t) => [t[0], Object.fromEntries(t[1].map((r) => [r[0], { selector: r[1], weight: r[2] }]))]));
}
var lE = { Arial: { Regular: { selector: "Arial", weight: void 0 }, Black: { selector: "Arial-Black", weight: void 0 }, Narrow: { selector: "Arial Narrow", weight: void 0 }, "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 } }, Avenir: { Book: { selector: "Avenir", weight: void 0 }, Light: { selector: "Avenir-Light", weight: void 0 }, Medium: { selector: "Avenir-Medium", weight: void 0 }, Heavy: { selector: "Avenir-Heavy", weight: void 0 }, Black: { selector: "Avenir-Black", weight: void 0 } }, "Avenir Next": { Regular: { selector: "Avenir Next", weight: void 0 }, "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 }, Medium: { selector: "AvenirNext-Medium", weight: void 0 }, "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 }, Heavy: { selector: "AvenirNext-Heavy", weight: void 0 } }, "Avenir Next Condensed": { Regular: { selector: "Avenir Next Condensed", weight: void 0 }, "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: void 0 }, Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 }, "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 }, Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 } }, Baskerville: { Regular: { selector: "Baskerville", weight: void 0 }, "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 } }, "Bodoni 72": { Book: { selector: "Bodoni 72", weight: void 0 }, Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 }, Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 } }, Courier: { Regular: { selector: "Courier", weight: void 0 } }, "Courier New": { Regular: { selector: "Courier New", weight: void 0 } }, Futura: { Medium: { selector: "Futura", weight: void 0 }, Condensed: { selector: "Futura-CondensedMedium", weight: void 0 }, "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: void 0 } }, Georgia: { Regular: { selector: "Georgia", weight: void 0 } }, "Gill Sans": { Regular: { selector: "Gill Sans", weight: void 0 }, Light: { selector: "GillSans-Light", weight: void 0 }, SemiBold: { selector: "GillSans-SemiBold", weight: void 0 }, UltraBold: { selector: "GillSans-UltraBold", weight: void 0 } }, Helvetica: { Regular: { selector: "Helvetica", weight: void 0 }, Light: { selector: "Helvetica-Light", weight: void 0 }, Bold: { selector: "Helvetica-Bold", weight: void 0 }, Oblique: { selector: "Helvetica-Oblique", weight: void 0 }, "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 }, "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 } }, "Helvetica Neue": { Regular: { selector: "Helvetica Neue", weight: void 0 }, UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 }, Thin: { selector: "HelveticaNeue-Thin", weight: void 0 }, Light: { selector: "HelveticaNeue-Light", weight: void 0 }, Medium: { selector: "HelveticaNeue-Medium", weight: void 0 }, Bold: { selector: "HelveticaNeue-Bold", weight: void 0 }, Italic: { selector: "HelveticaNeue-Italic", weight: void 0 }, "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: void 0 }, "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 }, "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 }, "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: void 0 }, "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 }, "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: void 0 }, "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: void 0 } }, "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } }, Impact: { Regular: { selector: "Impact", weight: void 0 } }, "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } }, Menlo: { Regular: { selector: "Menlo", weight: void 0 } }, Monaco: { Regular: { selector: "Monaco", weight: void 0 } }, Optima: { Regular: { selector: "Optima", weight: void 0 }, ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 } }, Palatino: { Regular: { selector: "Palatino", weight: void 0 } }, "SF Pro Display": { Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 }, Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 }, Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 }, Light: { selector: "__SF-UI-Display-Light__", weight: 300 }, Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 }, Black: { selector: "__SF-UI-Display-Black__", weight: 900 }, Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 }, "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 }, "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 }, "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 }, "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 }, "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 }, "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 }, "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 }, "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 } }, "SF Pro Display Condensed": { Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 }, Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 }, Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 }, Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 }, Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 }, Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 } }, "SF Pro Text": { Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 }, Light: { selector: "__SF-UI-Text-Light__", weight: 200 }, Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 }, Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 }, "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 }, "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 }, "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 }, "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 }, "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 } }, "SF Pro Text Condensed": { Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 }, Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 }, Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 }, Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 }, Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 }, Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 } }, Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } }, Times: { Regular: { selector: "Times", weight: void 0 } }, "Times New Roman": { Regular: { selector: "Times New Roman", weight: void 0 } }, Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } }, Verdana: { Regular: { selector: "Verdana", weight: void 0 } } }, eb = { "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular", "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight", "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin", "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light", "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium", "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold", "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy", "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black", "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold", "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText", "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light", "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium", "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold", "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold", "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy", "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic", "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic", "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic", "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic", "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic", "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic", "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular", "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light", "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium", "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold", "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold", "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy", "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic", "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic", "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic", "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic", "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic", "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic", "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular", "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight", "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin", "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light", "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium", "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold", "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold", "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy", "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black", "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay", "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight", "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin", "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light", "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium", "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold", "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold", "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy", "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black", "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic", "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic", "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic", "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic", "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic", "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic", "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic", "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic", "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic", "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular", "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light", "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium", "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold", "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold", "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy", "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular", "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight", "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin", "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light", "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium", "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold", "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold", "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy", "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black" }, pp = typeof _ != "undefined" && _.SystemTypefaceDescriptors !== void 0 ? sE(_.SystemTypefaceDescriptors) : lE, tb = typeof _ != "undefined" && typeof _.SystemTypefaceDefaultSelector == "string" ? _.SystemTypefaceDefaultSelector : "Inter";
var Dt;
(function(e) {
  e.Google = "google", e.Local = "local", e.Custom = "custom";
})(Dt || (Dt = {}));
var pl = "GF;", fp = class {
  constructor() {
    this.name = Dt.Google;
    this.typefaces = [];
    this.byFamily = new Map();
  }
  getTypefaceByFamily(t) {
    var r;
    return (r = this.byFamily.get(t)) != null ? r : null;
  }
  parseSelector(t) {
    if (!t.startsWith(pl))
      return null;
    let r = t.split("-");
    if (r.length !== 2)
      return null;
    let n = r[0].replace(pl, ""), o = r[1];
    return { family: n, variant: o, source: this.name };
  }
  createTypeface(t) {
    let r = { family: t, fonts: [], source: this.name };
    return this.addTypeface(r), r;
  }
  addTypeface(t) {
    this.typefaces.push(t), this.byFamily.set(t.family, t);
  }
  importFonts(t) {
    let r = [];
    return t.forEach((n) => {
      let o = n.variants.map((i) => ({ source: this.name, variant: i, family: n.family, file: n.files[i].replace("http://", "https://") }));
      r = r.concat(o);
    }), r;
  }
};
var rb = "System Default", mp = class {
  constructor() {
    this.name = Dt.Local;
    this.typefaces = [];
    this.byFamily = new Map();
    this.typefaceAliasBySelector = new Map();
    this.typefaceAliases = new Map();
    this.interTypefaceSelectors = new Set();
  }
  getTypefaceByFamily(t) {
    var r;
    return (r = this.byFamily.get(t)) != null ? r : null;
  }
  createTypeface(t) {
    let r = { family: t, fonts: [], source: this.name };
    return this.addTypeface(r), r;
  }
  addTypeface(t) {
    this.typefaces.push(t), this.byFamily.set(t.family, t);
  }
  importFonts() {
    let t = [];
    for (let i of Object.keys(pp)) {
      let a = pp[i];
      if (!a)
        continue;
      let s = this.createTypeface(i);
      for (let l of Object.keys(a)) {
        let u = a[l];
        if (!u)
          continue;
        let { selector: c, weight: f } = u, p = { variant: l, selector: c, weight: f, typeface: s, status: "loaded" };
        s.fonts.push(p);
      }
      t.push(...s.fonts);
    }
    for (let [i, a] of Object.entries(eb))
      this.addTypefaceAlias(i, a);
    let { typeface: r, aliases: n } = this.getSystemTypeface();
    this.addTypeface(r);
    for (let [i, a] of n)
      this.addTypefaceAlias(i, a);
    t.push(...r.fonts);
    let o = this.importInterTypeface();
    return t.push(...o.fonts), t;
  }
  importInterTypeface() {
    let t = [["Regular", "Inter", void 0], ["Thin", "Inter-Thin", 100], ["Extra Light", "Inter-ExtraLight", 200], ["Light", "Inter-Light", 300], ["Medium", "Inter-Medium", 500], ["Semibold", "Inter-SemiBold", 600], ["Bold", "Inter-Bold", 700], ["Extra Bold", "Inter-ExtraBold", 800], ["Black", "Inter-Black", 900], ["Thin Italic", "Inter-ThinItalic", 100], ["Extra Light Italic", "Inter-ExtraLightItalic", 300], ["Light Italic", "Inter-LightItalic", 300], ["Italic", "Inter-Italic", void 0], ["Medium Italic", "Inter-MediumItalic", 500], ["Semibold Italic", "Inter-SemiBoldItalic", 600], ["Bold Italic", "Inter-BoldItalic", 700], ["Extra Bold Italic", "Inter-ExtraBoldItalic", 800], ["Black Italic", "Inter-BlackItalic", 900]], r = this.createTypeface("Inter");
    for (let n of t) {
      let [o, i, a] = n, s = { variant: o, selector: i, weight: a, typeface: r, style: /italic/i.test(i) ? "italic" : void 0 };
      r.fonts.push(s);
    }
    return r.fonts.forEach((n) => this.interTypefaceSelectors.add(n.selector)), r;
  }
  addTypefaceAlias(t, r) {
    this.typefaceAliases.set(t, r), this.typefaceAliasBySelector.set(r, t);
  }
  getSystemTypeface() {
    let t = this.workaroundChrome81and82("system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif"), r = { family: rb, fonts: [], source: this.name }, n = new Map(), o = [400, 100, 200, 300, 500, 600, 700, 800, 900], i = ["normal", "italic"];
    for (let a of i)
      for (let s of o) {
        let l = uE(s, a), u = `__SystemDefault-${s}-${a}__`, c = { variant: l, selector: u, style: a === "normal" ? void 0 : a, weight: s === 400 ? void 0 : s, typeface: r, status: "loaded" };
        r.fonts.push(c), n.set(u, t);
      }
    return { typeface: r, aliases: n };
  }
  getTypefaceAliasBySelector(t) {
    return this.typefaceAliasBySelector.get(t) || null;
  }
  getTypefaceSelectorByAlias(t) {
    return this.typefaceAliases.get(t) || null;
  }
  isTypefaceAlias(t) {
    return !!(t && t.match(/^__.*__$/));
  }
  workaroundChrome81and82(t) {
    let r = navigator.userAgent;
    return !r.includes("Mac OS X 10_15") || !r.includes("Chrome/81") && !r.includes("Chrome/82") ? t : `Inter|${t}`;
  }
}, nb = { "100": "Thin", "200": "Extra Light", "300": "Light", "400": "Normal", "500": "Medium", "600": "Semi Bold", "700": "Bold", "800": "Extra Bold", "900": "Black" };
function uE(e, t) {
  let r = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? r : t !== "normal" ? `${nb[e]} ${r}` : `${nb[e]}`;
}
function fl(e) {
  if (e === "regular")
    return { style: "normal", weight: 400 };
  let t = /([0-9]*)([a-z]*)/.exec(e);
  if (!t)
    return null;
  let r = parseInt(t[1] || "400"), n = t[2] || "normal";
  return { weight: r, style: n };
}
var vn = "CUSTOM;";
function cE(e, t) {
  if (!t)
    return e.substring(0, e.lastIndexOf("."));
  let r = t.font.preferredFamily === "" ? t.font.fontFamily : t.font.preferredFamily, n = t.font.preferredSubFamily === "" ? t.font.fontSubFamily : t.font.preferredSubFamily;
  return `${r} ${n}`;
}
var dp = class {
  constructor() {
    this.name = Dt.Custom;
    this.typefaces = [];
    this.byFamily = new Map();
    this.byAssetKey = new Map();
  }
  importFonts(t) {
    this.typefaces.length = 0, this.byFamily.clear(), this.byAssetKey.clear();
    let r = [];
    return t.forEach((n) => {
      var s;
      if (!this.isValidCustomFontAsset(n))
        return;
      let o = cE(n.name, n.properties), i = this.createTypeface(o), a = { typeface: i, selector: `${vn}${o}`, variant: this.inferVariantName(o), postscriptName: (s = n.properties) == null ? void 0 : s.font.postscriptName, file: n.url };
      i.fonts.push(a), i.owner = n.ownerType === "team" ? "team" : "project", this.byAssetKey.set(o, n.key), r.push(...i.fonts);
    }), r;
  }
  isValidCustomFontAsset(t) {
    var r, n;
    return t.mimeType.startsWith("font/") && t.properties && "font" in t.properties && ((r = t.properties) == null ? void 0 : r.kind) === "font" && "fontFamily" in ((n = t.properties) == null ? void 0 : n.font);
  }
  inferVariantName(t) {
    let r = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"], n = [...r.map((s) => `${s} italic`), ...r], o = t.toLowerCase(), i = [...o.split(" "), ...o.split("-"), ...o.split("_")], a = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
    return a ? a.replace(/(^\w|\s\w)/g, (s) => s.toUpperCase()) : "Regular";
  }
  createTypeface(t) {
    let r = this.byFamily.get(t);
    if (r)
      return r;
    let n = { source: this.name, family: t, fonts: [] };
    return this.addTypeface(n), n;
  }
  addTypeface(t) {
    this.typefaces.push(t), this.byFamily.set(t.family, t);
  }
  parseSelector(t) {
    if (!t.startsWith(vn))
      return null;
    let r = t.split(vn);
    return { source: "custom", family: r[1] };
  }
  getFontBySelector(t, r = true) {
    let n = this.parseSelector(t);
    return !n || !r && !this.byFamily.get(n.family) ? null : this.getTypefaceByFamily(n.family).fonts[0];
  }
  getTypefaceByFamily(t) {
    let r = this.byFamily.get(t);
    if (r)
      return r;
    let n = { source: "custom", family: t, fonts: [] };
    return n.fonts.push({ selector: `${vn}${t}`, variant: this.inferVariantName(t), typeface: n }), n;
  }
};
var ib = Ro(ob()), ab = 5e3, pE = 3, gp = class extends Error {
  constructor(t) {
    super(t);
    this.name = "FontLoadingError";
  }
}, vp = new Map(), yp = new Map(), bp = (e, t) => sb(e, t);
async function sb(e, t, r = 0) {
  let { family: n, url: o } = e, i = e.weight || 500, a = e.style || "normal", s = `${n}-${a}-${i}-${o}`;
  if (!vp.has(s) || r > 0) {
    let l = new FontFace(n, `url(${o})`, { weight: i == null ? void 0 : i.toString(), style: a }), u = l.load().then(() => (t.fonts.add(l), xp(n, a, i))).catch((c) => {
      if (c.name !== "NetworkError")
        throw c;
      if (r < pE)
        return sb(e, t, r + 1);
      throw new gp(`Font loading failed after ${r} retries due to network error`);
    });
    vp.set(s, u);
  }
  await vp.get(s);
}
async function xp(e, t, r) {
  let n = `${e}-${t}-${r}`;
  if (!yp.has(n)) {
    let i = new ib.default(e, { style: t, weight: r }).load(null, ab);
    yp.set(n, i);
  }
  try {
    await yp.get(n);
  } catch (o) {
    throw new gp(`Failed to check if font is ready (${ab}ms timeout exceeded)`);
  }
}
var yn;
(function(e) {
  e[e.AlreadyLoaded = 0] = "AlreadyLoaded", e[e.Loaded = 1] = "Loaded";
})(yn || (yn = {}));
var lb = class {
  constructor() {
    this.bySelector = new Map();
    this.loadedSelectors = new Set();
    this.createGoogleFont = (t) => {
      let { source: r, family: n, variant: o, file: i } = t, a = this.getTypeface(t);
      a || (a = this[r].createTypeface(n));
      let s = fl(o) || {}, { weight: l, style: u } = s, c = `GF;${n}-${o}`, f = { typeface: a, variant: o, selector: c, weight: l, style: u, file: i };
      return a.fonts.push(f), f;
    };
    this.local = new mp(), this.google = new fp(), this.custom = new dp(), this.bySelector = new Map(), this.importLocalFonts(), this.defaultFont = this.getFontBySelector(tb), this.defaultFont && this.loadFont(this.defaultFont);
  }
  addFont(t) {
    this.bySelector.set(t.selector, t);
  }
  getAvailableFonts() {
    return Array.from(this.bySelector.values());
  }
  importLocalFonts() {
    this.local.importFonts().forEach((t) => {
      this.addFont(t), this.local.interTypefaceSelectors.has(t.selector) || this.loadFont(t);
    });
  }
  async importGoogleFonts() {
    if (!this.getGoogleFontsListPromise) {
      this.getGoogleFontsListPromise = _e.fetchGoogleFontsList();
      let t = await this.getGoogleFontsListPromise;
      this.google.importFonts(t).forEach((r) => {
        let n = this.createGoogleFont(r);
        this.addFont(n);
      });
    }
    return this.getGoogleFontsListPromise;
  }
  importCustomFonts(t) {
    this.bySelector.forEach((r, n) => {
      n.startsWith(vn) && this.bySelector.delete(n);
    }), this.custom.importFonts(t).forEach((r) => this.addFont(r));
  }
  getTypeface(t) {
    return this[t.source].getTypefaceByFamily(t.family);
  }
  getFontBySelector(t, r = true) {
    return t.startsWith(vn) ? this.custom.getFontBySelector(t, r) : this.bySelector.get(t) || null;
  }
  getDraftPropertiesBySelector(t) {
    let r = this.getFontBySelector(t);
    if (r)
      return { style: r.style, weight: r.weight, variant: r.variant, family: r.typeface.family, source: r.typeface.source };
    let n = this.google.parseSelector(t);
    if (n) {
      let o = fl(n.variant);
      if (o)
        return { style: o.style, weight: o.weight, variant: n.variant, family: n.family, source: Dt.Google };
    }
    return null;
  }
  isSelectorLoaded(t) {
    return this.loadedSelectors.has(t);
  }
  async loadTypeface(t) {
    await Promise.all(t.fonts.map((r) => this.loadFont(r)));
  }
  async loadFont(t) {
    return this.isSelectorLoaded(t.selector) ? 0 : t.typeface.source === Dt.Local ? (this.local.interTypefaceSelectors.has(t.selector) && await xp(t.typeface.family, t.style, t.weight), this.loadedSelectors.add(t.selector), 1) : t.file ? (await bp({ family: t.typeface.family, url: t.file, weight: t.weight, style: t.style }, document), this.loadedSelectors.add(t.selector), 1) : Promise.reject(`Unable to load font: ${t.selector}`);
  }
  async loadWebFontsFromSelectors(t) {
    t.some((n) => n.startsWith(pl)) && await this.importGoogleFonts();
    let r = t.map((n) => this.bySelector.get(n)).filter((n) => !!n);
    return Promise.allSettled(r.map((n) => this.loadFont(n)));
  }
}, Sp = new lb();
Promise.allSettled = Promise.allSettled || ((e) => Promise.all(e.map((t) => t.then((r) => ({ status: "fulfilled", value: r })).catch((r) => ({ status: "rejected", reason: r })))));
function Oi(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function Pp(e) {
  var l;
  let t = Dr(), r = ht(e), n = react.exports.useRef(null);
  un(e, n);
  let { fonts: o, __fromCanvasComponent: i } = e, a = react.exports.useRef([]), s = !Oi((l = a.current) != null ? l : [], o != null ? o : []);
  return a.current = o, react.exports.useEffect(() => {
    !s || !o || Sp.loadWebFontsFromSelectors(o).then((u) => {
      !i || !n.current || L.current() !== L.canvas || !u.some((f) => f.status === "fulfilled" && f.value === yn.Loaded) || nv(n.current);
    });
  }, [o]), react.exports.createElement(Vi, __spreadProps(__spreadValues({}, e), { innerRef: n, layoutId: r, parentSize: t }));
}
var Tp = class extends Se {
  constructor() {
    super(...arguments);
    this.renderMain = (t) => {
      _.perf && _.perf.nodeRender();
      let { font: r, visible: n, alignment: o, willChangeTransform: i, opacity: a, id: s, layoutId: l, className: u, transition: c, variants: f, name: p, innerRef: m, __fromCanvasComponent: d, widthType: h, heightType: v, _usesDOMRect: y, autoSize: P, style: C } = this.props, b = this.frame;
      if (!n)
        return null;
      Mt();
      let T = this.props.isEditable && this.props.environment() === L.canvas, F = dE(this.props.verticalAlignment), I = { outline: "none", display: "flex", flexDirection: "column", justifyContent: F, opacity: T ? 0 : a, flexShrink: 0 }, A = { "data-framer-component-type": "Text", "data-framer-name": p };
      P && (A["data-framer-component-text-autosized"] = "true"), this.collectLayout(I, t), uo(this.props, I), Ws(this.props, I), (I.opacity === 1 || I.opacity === void 0) && delete I.opacity, i && ci(I);
      let E = this.props.rawHTML, k = this.getOverrideText() || this.props.text;
      nn(k) && (E ? E = mE(E, k) : E = `<p style="font: ${r}">${k}</p>`), this.props.style && Object.assign(I, this.props.style);
      let W = y && (h === z.Auto || v === z.Auto), K = !b || !L.hasRestrictions() || d || W;
      if (K && Object.assign(A, so(this.props.center)), E)
        return I.textAlign = o, I.lineHeight = "1px", I.fontSize = "0px", react.exports.createElement(ke.div, __spreadProps(__spreadValues({ layoutId: l, id: s }, A), { style: __spreadValues(__spreadValues({}, I), C), transformTemplate: K ? Vr(this.props.center) : void 0, dangerouslySetInnerHTML: { __html: E }, "data-center": this.props.center, className: u, transition: c, variants: f, ref: m }));
    };
  }
  get frame() {
    return on(this.props, this.props.parentSize || Me.Unknown, false);
  }
  getOverrideText() {
    let { id: t, _forwardedOverrides: r } = this.props;
    if (t && r) {
      let n = r[t];
      if (nn(n))
        return n;
    }
  }
  render() {
    return react.exports.createElement(Bt.Consumer, null, this.renderMain);
  }
  collectLayout(t, r) {
    if (this.props.withExternalLayout)
      return;
    let n = this.frame, { rotation: o, autoSize: i, positionSticky: a, positionStickyTop: s, positionStickyRight: l, positionStickyBottom: u, positionStickyLeft: c, width: f, height: p, _usesDOMRect: m } = this.props, d = q.getNumber(o);
    if (n && !(m && (f === "auto" || p === "auto")) && L.hasRestrictions())
      Object.assign(t, { transform: `translate(${n.x}px, ${n.y}px) rotate(${d.toFixed(4)}deg)`, width: i ? "auto" : `${n.width}px`, minWidth: `${n.width}px`, height: `${n.height}px` });
    else {
      let { left: v, right: y, top: P, bottom: C } = this.props, b, T;
      i ? (b = "auto", T = "auto") : ((!V(v) || !V(y)) && (b = f), (!V(P) || !V(C)) && (T = p)), Object.assign(t, { left: v, right: y, top: P, bottom: C, width: b, height: T, rotate: d });
    }
    a && (!(L.current() === L.canvas) || r) && (t.position = "sticky", t.willChange = "transform", t.zIndex = 1, t.top = s, t.right = l, t.bottom = u, t.left = c);
  }
}, Vi = Tp;
Vi.supportsConstraints = true, Vi.defaultTextProps = { opacity: void 0, left: void 0, right: void 0, top: void 0, bottom: void 0, _constraints: { enabled: true, aspectRatio: null }, rotation: 0, visible: true, alignment: void 0, verticalAlignment: "top", shadows: [], font: "16px " + xs() }, Vi.defaultProps = __spreadProps(__spreadValues(__spreadValues({}, Se.defaultProps), Tp.defaultTextProps), { isEditable: false, environment: L.current, withExternalLayout: false });
var hE = /(<span [^>]+>).*<\/span>/s;
function mE(e, t) {
  return e.replace(hE, (r, n) => n + t + "</span>");
}
function dE(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function ki(e) {
  if (e === void 0)
    return;
  let { x: t, y: r, rotation: n, width: o, height: i } = e, a;
  if ((t !== 0 || r !== 0) && (a = `translate(${St(t, 3)} ${St(r, 3)})`), n !== 0) {
    let s = St(n, 4), l = St(o / 2, 3), u = St(i / 2, 3), c = `rotate(${s} ${l} ${u})`;
    a = a ? `${a} ${c}` : c;
  }
  return a;
}
var _i = class extends react.exports.Component {
  render() {
    let { children: t, frame: r } = this.props, { width: n, height: o } = r, i = Math.floor(r.x), a = Math.floor(r.y), s = { position: "absolute", width: Math.ceil(n), height: Math.ceil(o), overflow: "visible", display: "block", transform: `translate(${i}px, ${a}px)` };
    return Se.applyWillChange(this.props, s, false), react.exports.createElement("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", style: s }, t);
  }
};
var wp = class extends react.exports.Component {
  render() {
    let { id: t, angle: r, stops: n } = this.props;
    return react.exports.createElement("linearGradient", { id: t, gradientTransform: `rotate(${r}, 0.5, 0.5)` }, n.map((o, i) => react.exports.createElement("stop", { key: i, offset: o.position, stopColor: o.color, stopOpacity: o.alpha })));
  }
}, Rp = class extends react.exports.Component {
  render() {
    let { centerAnchorX: t, centerAnchorY: r, id: n, widthFactor: o, heightFactor: i, stops: a } = this.props;
    return react.exports.createElement("radialGradient", { id: n, cy: r, cx: t, r: o, gradientTransform: `translate(${t}, ${r}) scale(1 ${i / o}) translate(-${t}, -${r})` }, a.map((s, l) => react.exports.createElement("stop", { key: l, offset: s.position, stopColor: s.color, stopOpacity: s.alpha })));
  }
};
function yE(e, t) {
  let { x: r, y: n } = e, { width: o, height: i, rotation: a } = e;
  return t === "resetXYKeepFraction" ? (r = r - Math.floor(r), n = n - Math.floor(n)) : t === "resetXY" && (r = 0, n = 0), { x: r, y: n, width: o, height: i, rotation: a };
}
function bE(e, t) {
  if (t !== void 0) {
    if (t)
      return "asIs";
  } else if (!e)
    return "asIs";
  return e ? "resetXYKeepFraction" : "resetXY";
}
function dl(e, t, r, n) {
  let o = bE(r, n), i = __spreadProps(__spreadValues({}, e), { rotation: t });
  return yE(i, o);
}
var hl = { stroke: "none", strokeWidth: 1, strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 4, strokeDasharray: "0", strokeDashoffset: 0, strokeOpacity: 1, fill: "black", fillRule: "nonzero", fillOpacity: 1 };
var Fp = class extends Se {
  render() {
    var se, Fe;
    _.perf && _.perf.nodeRender();
    let { opacity: t, calculatedPath: r, d: n, insideStroke: o, shapeId: i, strokeEnabled: a, strokeClipId: s, strokeWidth: l, idAttribute: u, rect: c, shadows: f, strokeAlpha: p, name: m, includeTransform: d, isRootVectorNode: h, rotation: v, id: y, lineCap: P, lineJoin: C, strokeColor: b, strokeMiterLimit: T, strokeDashArray: F, strokeDashOffset: I, fill: A, variants: E, transition: k } = this.props;
    if (!y || !i || !s)
      return null;
    let W = (Fe = (se = this.props.rotate) != null ? se : v) != null ? Fe : 0, { target: K } = ge, U = dl(c, W, h, d), N, ee = 0, H, X, ae;
    if (typeof A == "string" || B.isColorObject(A)) {
      let Pe = B.isColorObject(A) ? A.initialValue || B.toRgbString(A) : A;
      Pe !== "transparent" && (N = Pe, ee = ot.getAlpha(N));
    } else
      Xe.isLinearGradient(A) ? (X = So(A, y), N = `url(#${X.id})`, ee = 1) : Ye.isRadialGradient(A) ? (ae = Co(A, y), N = `url(#${ae.id})`, ee = 1) : et.isImageObject(A) && (H = Ai(A, U, y), H && (N = `url(#${H.id})`, ee = 1));
    N === hl.fill && (N = void 0), N === void 0 && (N = "transparent"), !(N !== void 0 && N !== "transparent" && ee !== 0) && !a && (ee = 1);
    let S, x = null, g = null, R = null, O, Y, re = K === L.export;
    U.rotation === 0 && re ? O = U : (O = { x: 0, y: 0 }, Y = ki(U));
    let te = { d: n != null ? n : lp(r, O, K), transform: Y }, oe = {};
    a && l !== 0 && (oe.strokeWidth = l, oe.stroke = b, oe.strokeLinecap = P, oe.strokeLinejoin = C, C === "miter" && (oe.strokeMiterlimit = T), oe.strokeDasharray = F, I !== 0 && (oe.strokeDashoffset = I));
    for (let Pe in hl)
      oe[Pe] === hl[Pe] && (oe[Pe] = void 0);
    let Ce = Br.forKey(i), de = Br.forKey(s), ye = Nv(f, c, Ce, ee, p, l, de, oe), qe = K === L.preview && m || void 0;
    ye.insetElement !== null || ye.outsetElement !== null || o ? (te.id = Ce.id, g = react.exports.createElement(ke.path, __spreadProps(__spreadValues({}, __spreadValues({}, te)), { variants: E, transition: k })), o && (x = react.exports.createElement("clipPath", { id: de.id }, react.exports.createElement("use", { xlinkHref: Ce.link }))), ye.insetElement !== null && a && l && l > 0 ? (S = react.exports.createElement("use", { xlinkHref: Ce.link, fill: N, strokeOpacity: "0", name: qe }), R = react.exports.createElement("use", __spreadProps(__spreadValues({ xlinkHref: Ce.link, clipPath: de.urlLink, fill: "transparent" }, oe), { strokeWidth: l }))) : S = react.exports.createElement("use", __spreadProps(__spreadValues({ xlinkHref: Ce.link, fill: N, clipPath: de.urlLink }, oe), { strokeWidth: l, name: qe }))) : (te.id = u, S = react.exports.createElement(ke.path, __spreadProps(__spreadValues({}, __spreadValues(__spreadProps(__spreadValues({}, te), { fill: N }), oe)), { name: qe, variants: E, transition: k })));
    let Re = H ? react.exports.createElement(Di, __spreadValues({}, H)) : void 0, $;
    X ? $ = react.exports.createElement(wp, __spreadValues({}, X)) : ae && ($ = react.exports.createElement(Rp, __spreadValues({}, ae)));
    let D = null;
    (g || x || ye.definition && ye.definition.length || $ || Re) && (D = react.exports.createElement("defs", null, g, x, ye.definition, $, Re));
    let j = t != null ? t : E ? 1 : void 0;
    return D === null && ye.outsetElement === null && ye.insetElement === null && R === null ? (S = react.exports.createElement(ke.path, __spreadProps(__spreadValues({}, __spreadValues(__spreadProps(__spreadValues({}, te), { fill: N }), oe)), { opacity: j, variants: E, transition: k, name: qe })), this.renderElement(S)) : this.renderElement(react.exports.createElement(ke.g, { opacity: j, variants: E, transition: k }, D, ye.outsetElement, S, ye.insetElement, R));
  }
  renderElement(t) {
    var l, u;
    let { isRootVectorNode: r, width: n, height: o, rect: i, willChangeTransform: a } = this.props, s = (u = (l = this.props.frame) != null ? l : i) != null ? u : { x: 0, y: 0, width: 100, height: 100 };
    return r ? react.exports.createElement(_i, __spreadValues({}, { frame: s, width: n, height: o, willChangeTransform: a }), t) : t;
  }
}, Po = Fp;
Po.defaultVectorProps = { isRootVectorNode: false, name: null, includeTransform: void 0, defaultFillColor: void 0, defaultStrokeColor: void 0, defaultStrokeWidth: void 0, defaultStrokeAlignment: "center", width: 100, height: 100, rotation: 0, rotate: void 0, frame: void 0, opacity: void 0, calculatedPath: [], d: void 0, shapeId: void 0, insideStroke: false, strokeEnabled: true, strokeClipId: void 0, strokeWidth: void 0, idAttribute: void 0, transition: void 0, shadows: [], strokeAlpha: 1, rect: { x: 0, y: 0, width: 0, height: 0 }, lineCap: "butt", strokeColor: "#0AF", lineJoin: "miter", strokeMiterLimit: 4, strokeDashArray: "0", strokeDashOffset: 0, fill: "rgba(0,170,255,0.5)" }, Po.defaultProps = __spreadValues(__spreadValues({}, Se.defaultProps), Fp.defaultVectorProps);
var Ep = class extends Se {
  render() {
    _.perf && _.perf.nodeRender();
    let { id: t, name: r, opacity: n, visible: o, targetName: i, defaultName: a, children: s, includeTransform: l, x: u, y: c, width: f, height: p, rotation: m, isRootVectorNode: d } = this.props;
    if (!o)
      return null;
    let { target: h } = ge, y = dl({ x: u, y: c, width: f, height: p }, m, d, l), P = h === L.preview, C;
    return P && (i ? C = i : r ? C = r : C = a), this.renderElement(react.exports.createElement("g", __spreadValues({ transform: ki(y) }, { id: t, name: C, opacity: n }), s));
  }
  renderElement(t) {
    let { isRootVectorNode: r, width: n, height: o, frame: i, willChangeTransform: a } = this.props;
    return r ? react.exports.createElement(_i, __spreadValues({}, { frame: i, width: n, height: o, willChangeTransform: a }), t) : t;
  }
}, To = Ep;
To.defaultVectorGroupProps = { name: void 0, opacity: void 0, visible: true, x: 0, y: 0, rotation: 0, width: 100, height: 100, targetName: void 0, defaultName: "", isRootVectorNode: false, includeTransform: void 0, frame: { x: 0, y: 0, width: 100, height: 100 } }, To.defaultProps = __spreadValues(__spreadValues({}, Se.defaultProps), Ep.defaultVectorGroupProps);
var Mp = class extends Se {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  componentDidCatch(t, r) {
    let n = r.componentStack.split(`
`).filter((i) => i.length !== 0), o = 0;
    for (let i of n) {
      if (i.startsWith(`    in ${this.constructor.name}`))
        break;
      o++;
    }
    n = n.slice(0, o), this.setState({ lastError: { children: this.props.children, name: t.name, message: t.message, componentStack: n } });
  }
  renderErrorPlaceholder(t, r) {
    let { RenderPlaceholder: n } = _e;
    return react.exports.createElement(we, __spreadProps(__spreadValues({}, this.props), { background: null }), react.exports.createElement(n, { error: { error: r, file: t } }));
  }
  render() {
    var s, l;
    _.perf && _.perf.nodeRender();
    let { children: t } = this.props, { componentIdentifier: r, innerRef: n } = this.props, { lastError: o } = this.state;
    if (!t || Array.isArray(t) && t.filter((u) => u).length === 0) {
      let u = _e.componentLoader.errorForIdentifier(r);
      if (u)
        return this.renderErrorPlaceholder(u.file, u.error);
    }
    if (o && o.children === t) {
      let u = _e.componentLoader.componentForIdentifier(r), c = u ? u.file : "???";
      return this.renderErrorPlaceholder(c, o.message);
    }
    (l = (s = _).__checkComponentBudget__) == null || l.call(s);
    let a = this.props;
    if (L.current() !== L.canvas) {
      let _a2 = a, { left: u, right: c, top: f, bottom: p, center: m, centerX: d, centerY: h, aspectRatio: v, parentSize: y, width: P, height: C, rotation: b, opacity: T, visible: F, _constraints: I, _initialStyle: A, name: E, positionSticky: k, positionStickyTop: W, positionStickyRight: K, positionStickyBottom: U, positionStickyLeft: N, componentIdentifier: ee, children: H, style: X, duplicatedFrom: ae, _canMagicMotion: G, widthType: S, heightType: x } = _a2, g = __objRest(_a2, ["left", "right", "top", "bottom", "center", "centerX", "centerY", "aspectRatio", "parentSize", "width", "height", "rotation", "opacity", "visible", "_constraints", "_initialStyle", "name", "positionSticky", "positionStickyTop", "positionStickyRight", "positionStickyBottom", "positionStickyLeft", "componentIdentifier", "children", "style", "duplicatedFrom", "_canMagicMotion", "widthType", "heightType"]);
      t = react.exports.Children.map(H, (R) => {
        var O;
        return !Et(R) || !Ft(R) ? R : SE(ee) ? react.exports.cloneElement(R, g) : react.exports.createElement(br.Provider, { value: (O = this.props.__layoutId) != null ? O : null }, react.exports.createElement(wu, null, react.exports.createElement(uc, { enabled: false }, react.exports.cloneElement(R, g))));
      }), a = { style: X, _constraints: I, _initialStyle: A, left: u, right: c, top: f, bottom: p, center: m, centerX: d, centerY: h, aspectRatio: v, parentSize: y, width: P, height: C, rotation: b, visible: F, name: E, duplicatedFrom: ae, id: a.id, layoutId: this.props.__layoutId, _canMagicMotion: G, widthType: S, heightType: x, positionSticky: k, positionStickyTop: W, positionStickyRight: K, positionStickyBottom: U, positionStickyLeft: N };
    }
    return react.exports.createElement(Bt.Provider, { value: true }, react.exports.createElement(we, __spreadValues({ "data-framer-component-container": true, background: null, overflow: "visible", ref: n }, a), t));
  }
}, Nr = Mp;
Nr.supportsConstraints = true, Nr.defaultComponentContainerProps = { style: {}, visible: true, componentIdentifier: "" }, Nr.defaultProps = __spreadValues(__spreadValues({}, Se.defaultProps), Mp.defaultComponentContainerProps), Nr.contextType = Bt;
function SE(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : false;
}
function gl(e, t, r, n, o = false) {
  let i = n && n(e);
  if (i)
    return i;
  let a;
  return CE(e) ? a = PE(r, e, t, n, o) : e.children && (a = e.children.map((s) => gl(s, t, r, n, o))), t(e, a);
}
function CE(e) {
  return !!e.codeComponentIdentifier;
}
function PE(e, t, r, n, o = false) {
  let i = t.getComponentChildren ? t.getComponentChildren(e) : [], a = t.getComponentSlotChildren ? t.getComponentSlotChildren(e) : {}, s, l = t.getCodeComponentProps ? t.getCodeComponentProps(e, { skipCache: o }) : void 0;
  if (t.cache.codeComponentPresentation)
    s = t.cache.codeComponentPresentation, Oi(s.children, i) || (s.cache.reactElement = null, s.children = i), li(s.props, l) || (s.cache.reactElement = null, s.cache.props = null, s.props = l);
  else {
    let { id: c, codeComponentIdentifier: f, codeComponentPackageVersion: p } = t;
    t.cache.codeComponentPresentation = s = new mb(c + f, f, p, l, i);
  }
  s.props.placeholders = t.cache.placeholders;
  let u = Object.keys(a);
  if (u.length) {
    s.props = __spreadValues({}, s.props), s.props.__slotKeys = u;
    for (let c of u) {
      let f = a[c].map((p) => gl(p, r, e, n, o));
      s.props[c] = f;
    }
  }
  return [r(s, s.children.map((c) => gl(c, r, e, n, o)))];
}
var mb = class {
  constructor(t, r, n, o, i, a) {
    this.id = t;
    this.componentIdentifier = r;
    this.packageVersion = n;
    this.props = o;
    this.children = i;
    this.codeOverrideIdentifier = a;
    this.cache = {};
  }
  getProps() {
    return __spreadProps(__spreadValues({}, this.props), { id: this.id, key: this.id });
  }
  rect(t) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
};
function Ip() {
  return react.exports.useContext(go);
}
function wE(e) {
  let t;
  if (typeof e.webkitTextFillColor == "string" && (t = e.webkitTextFillColor), typeof e.WebkitTextFillColor == "string" && (t = e.WebkitTextFillColor), typeof e.color == "string" && (t = e.color), t)
    return ot.toRgbString(t);
}
function hr(e = {}) {
  let t = je(e, false, false);
  return hr.addData(t), t;
}
(function(o) {
  o._stores = [];
  function t(i) {
    o._stores.push(i);
  }
  o.addData = t;
  function r() {
    o._stores.forEach((i) => je.resetObject(i));
  }
  o.reset = r;
  function n(i, a) {
    return je.addObserver(i, a);
  }
  o.addObserver = n;
})(hr || (hr = {}));
var db = { update: 0 }, vl = react.exports.createContext(db), hb = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.observers = [];
    this.state = db;
    this.taskAdded = false;
    this.frameTask = () => {
      this.setState({ update: this.state.update + 1 }), this.taskAdded = false;
    };
    this.observer = () => {
      this.taskAdded || (this.taskAdded = true, Pt.addFrameTask(this.frameTask));
    };
  }
  componentWillUnmount() {
    this.observers.map((t) => t()), hr.reset();
  }
  render() {
    let { children: t } = this.props;
    return this.observers.map((r) => r()), this.observers = [], hr._stores.forEach((r) => {
      let n = hr.addObserver(r, this.observer);
      this.observers.push(n);
    }), react.exports.createElement(vl.Provider, { value: __spreadValues({}, this.state) }, t);
  }
};
function gb(e) {
  return typeof e == "string" || Ke(e) ? e : Xe.isLinearGradient(e) ? Xe.toCSS(e) : Ye.isRadialGradient(e) ? Ye.toCSS(e) : B.isColorObject(e) ? B.toRgbString(e) : e;
}
function Ap(e) {
  if (e.background || e.color) {
    let t = Object.assign({}, e);
    return e.background && (t.background = gb(e.background)), e.color && (t.color = gb(e.color)), t;
  }
  return e;
}
var AE = xi();
function Dp(e, t) {
  let r = typeof t == "function" ? (o) => t(Ap(o)) : () => Ap(t), n = function(o) {
    react.exports.useContext(vl);
    let i = r(o), _a2 = o, { style: a } = _a2, s = __objRest(_a2, ["style"]);
    return react.exports.createElement(e, __spreadProps(__spreadValues(__spreadValues({}, s), i), { _initialStyle: a }));
  };
  return AE(n, e), n.displayName = `WithOverride(${e.displayName || e.name})`, n;
}
var xn = class {
  constructor() {
    this.canvas = { children: [] };
    this.listeners = [];
    this.ids = [];
  }
  static shared(t) {
    if (t) {
      let r = new xn();
      return r.setCanvas(t), r;
    }
    return xn.__shared || (xn.__shared = new xn()), xn.__shared;
  }
  updateNode(t) {
    let r = t.props.id, n = this.canvas.children;
    n || (this.canvas.children = n = []);
    let o = false;
    for (let i = 0; i < n.length; i++)
      if (n[i].props.id === r) {
        o = true, n[i] = t;
        break;
      }
    o || n.push(t), this.setCanvas(this.canvas);
  }
  setCanvas(t) {
    !t.children || (this.canvas = t, this.listeners.forEach((r, n) => {
      let o = this.ids[n], i = Vp(t, o);
      r.setState({ data: i });
    }));
  }
  registerListener(t, r) {
    return this.listeners.push(t), this.ids.push(r), Vp(this.canvas, r);
  }
  removeListener(t) {
    let r = this.listeners.indexOf(t);
    r !== -1 && (this.listeners.splice(r, 1), this.ids.splice(r, 1));
  }
}, Op = xn;
Op.__shared = null;
var VE = { Frame: $s, Vector: Po, Stack: bo, VectorGroup: To, SVG: up, Text: Pp, DeprecatedComponentContainer: Nr };
function kE(e) {
  let t = e.constructor, r = e._reactInternalFiber;
  if (!r)
    return console.warn("_reactInternalFiber not found for:", e), false;
  for (r = r.return; r; ) {
    let n = r.stateNode;
    if (n && n.constructor === t)
      return true;
    r = r.return;
  }
  return false;
}
var vb = class extends react.exports.Component {
  constructor() {
    super(...arguments);
    this.checkedParent = false;
    this.parentError = false;
  }
  hasParentError() {
    return this.checkedParent || (this.checkedParent = true, this.parentError = kE(this)), this.parentError;
  }
  _typeForName(t) {
    let r = VE[t];
    if (r)
      return r;
    let n = _e.componentLoader.componentForIdentifier(t);
    return n && sp(n) ? n.class : $s;
  }
  _renderData(t, r, n) {
    _.__checkBudget__();
    let { componentClass: o, name: i } = t, { props: a, children: s } = t;
    a = __spreadProps(__spreadValues({}, a), { _constraints: { enabled: false } });
    let l = this._typeForName(o);
    if (!l)
      return null;
    if (n) {
      let _a2 = a, { style: c } = _a2, f = __objRest(_a2, ["style"]);
      a = __spreadProps(__spreadValues(__spreadValues({}, f), n), { _initialStyle: c });
    }
    if (!a.size && a._sizeOfMasterOnCanvas && (a.width || (a.width = a._sizeOfMasterOnCanvas.width), a.height || (a.height = a._sizeOfMasterOnCanvas.height)), i && r.hasOwnProperty(i))
      if (o === "Text")
        r[i] && (a = __spreadProps(__spreadValues({}, a), { text: r[i] }));
      else {
        let c = a.background, f = { src: r[i], fit: c.fit };
        a = __spreadProps(__spreadValues({}, a), { background: f });
      }
    let u = s && s.map((c) => this._renderData(c, r, void 0));
    return s = s ? u : [], react.exports.createElement(l, a, s);
  }
  render() {
    if (_.__checkBudget__(), this.hasParentError())
      throw new Error("Design Component cannot be nested in itself.");
    if (!this.state.data)
      throw new Error("Unable to connect to canvas data store.");
    return this._renderData(this.state.data, this.props, this.props);
  }
};
function yb(e, t) {
  let { name: r, props: n } = t;
  return n && n.id === e || r === e;
}
function Vp(e, t) {
  if (!e)
    return null;
  if (yb(t, e))
    return e;
  let { children: r } = e;
  if (!r || !as(r))
    return null;
  for (let n of r)
    if (yb(t, n))
      return n;
  for (let n of r) {
    let o = Vp(n, t);
    if (o)
      return o;
  }
  return null;
}
function _E(e, t, r, n = 200, o = 200) {
  var i;
  return i = class extends vb {
    static rect(a) {
      let s = st.fromProperties(a);
      return st.toRect(s, a.parentSize || null, null);
    }
    static minSize(a, s) {
      let l = st.fromProperties(a);
      return st.toMinSize(l, s || null);
    }
    static size(a, s, l) {
      let u = st.fromProperties(a);
      return st.toSize(u, s || null, null, l);
    }
    constructor(a, s) {
      super(a, s);
      let l = e.registerListener(this, t);
      this.state = { data: l };
    }
    render() {
      let a = (s) => {
        let l = an(t);
        if (!this.state.data && s) {
          _.__checkBudget__();
          let u = s(l);
          if (u && react.exports.isValidElement(u) && typeof u.type != "string")
            return react.exports.createElement(Dp(u.type, this.props), u.props);
        }
        return super.render();
      };
      return react.exports.createElement(bb.Consumer, null, a);
    }
    componentWillUnmount() {
      e.removeListener(this);
    }
  }, i.displayName = `DesignComponent(${t})`, i.propertyControls = r, i.supportsConstraints = true, i.defaultProps = { _sizeOfMasterOnCanvas: { width: n, height: o } }, i;
}
var bb = react.exports.createContext(null), jE = bb.Provider;
var HE = (e) => react.exports.forwardRef((t, r) => {
  let n = ht(t, { forceEnable: true });
  return react.exports.createElement(e, __spreadProps(__spreadValues({ layoutId: n }, t), { ref: r }));
});
function zE(e, t, r) {
  let n = {};
  for (let o in r)
    n[o] = (i) => t(r[o](e(), i));
  return n;
}
function xb(e, t) {
  let r = e, n = 0, o = new Set(), i = (u) => u(n), a = () => r, s = (u) => {
    n++, r = u, o.forEach(i);
  }, l = t ? zE(a, s, t) : s;
  return { get: a, set: s, getVersion: () => n, getActions: () => l, subscribe: (u) => (o.add(u), () => o.delete(u)) };
}
var XE = Symbol("default"), Cb = react.exports.createContext(XE);
function YE(e, t) {
  let r = new Map();
  return (o, i) => {
    let a = react.exports.useContext(Cb);
    o = o || a;
    let s = react.exports.useMemo(() => (r.has(o) || r.set(o, xb(i || e, t)), r.get(o)), [o]), [, l] = react.exports.useState(s.getVersion()), u = react.exports.useMemo(() => s.get(), [s]);
    return react.exports.useEffect(() => {
      let c = s.subscribe(l);
      return u !== s.get() && l(s.getVersion()), c;
    }, [s, u]), [s.get(), s.getActions()];
  };
}
function KE(e, t, r) {
  _e.addActionControls(e, t, r);
}
function yl(e = {}, t = false) {
  return rn("PropertyStore", "1.0.0", "Data() or ObservableObject()"), je(e, t);
}
(function(t) {
  function e(r, n) {
    return je.addObserver(r, n);
  }
  t.addObserver = e;
})(yl || (yl = {}));
function qE(e) {
  return fetch(e, { mode: "cors" }).then((t) => t.json());
}
function Pb(e) {
  let t;
  if ((e.constructor !== null ? e.constructor.name : void 0) !== null && (e.constructor !== null ? e.constructor.name : void 0) !== "Object")
    return e.constructor.name;
  let r = function(n) {
    if (!n)
      return null;
    let i = /\[object (\w+)\]/.exec(n);
    return i ? i[1] : null;
  };
  return e.toString && (t = r(e.toString()), t) ? t : (e.constructor !== null ? e.constructor.toString : void 0) && (t = r(e.constructor !== null ? e.constructor.toString() : void 0), t) ? t.replace("Constructor", "") : "Object";
}
function bl(e, t, r) {
  if (t === void 0 && (t = 5), r === void 0 && (r = 0), e === null)
    return "null";
  if (e === void 0)
    return "undefined";
  if (ri(e.toInspect))
    return e.toInspect();
  if (nn(e))
    return `"${e}"`;
  if (Bh(e))
    return `${e}`;
  if (ri(e)) {
    let n = e.toString().slice("function ".length).replace(/\n/g, "").replace(/\s+/g, " "), o = 50;
    return n.length > o && r > 0 && (n = `${n.slice(0, +o + 1).trim()}\u2026 }`), `<Function ${n}>`;
  }
  if (as(e))
    return r > t ? "[...]" : `[${e.map((n) => bl(n, t, (r || 0) + 1)).join(", ")}]`;
  if (Nh(e)) {
    let n, o = Pb(e);
    return /HTML\w+?Element/.test(o) ? `<${o}>` : (r > t ? n = "{...}" : n = `{${Object.keys(e).map((a) => `${a}:${bl(e[a], t, (r || 0) + 1)}`).join(", ")}}`, o === "Object" ? n : `<${o} ${n}>`);
  }
  return `${e}`;
}
function ZE(...e) {
  let t = e.map((r) => bl(r)).join(", ");
  console.log(t);
}
var JE = "1.3.2";
var ji = (e) => ({ process: (t, { delta: r, treeScale: n }) => {
  if (typeof t == "string" && (t = parseFloat(t)), t === 0)
    return "0px";
  let o = Math.round(t / r[e].scale / n[e]);
  return o = Math.max(o, 1), o + "px";
} });
Ao({ borderTopWidth: ji("y"), borderLeftWidth: ji("x"), borderRightWidth: ji("x"), borderBottomWidth: ji("y") });
function tM({ children: e }) {
  return react.exports.createElement(react.exports.Fragment, null, e);
}
function rM(e, t, r, n = {}) {
  return jt('"startAnimation" is unsupported. Use "animate" instead: https://www.framer.com/api/motion/utilities/#animate'), new Promise((o) => {
    Xt(t, r, __spreadProps(__spreadValues({}, n), { onComplete: () => o() }));
  });
}
function kp(e, t, r) {
  return react.exports.useCallback((n) => {
    var o, i, a;
    return r ? e ? t ? Object.assign({}, (o = r[e]) == null ? void 0 : o[n], (i = r[t]) == null ? void 0 : i[n]) : ((a = r[e]) == null ? void 0 : a[n]) || {} : {} : {};
  }, [e, t, r]);
}
function _p(...e) {
  return e.filter(Boolean).join(" ");
}
function sM(e, t) {
  return `${e}-${t}`;
}
function lM(e, t) {
  let n = e.indexOf(t) + 1;
  return n >= e.length && (n = 0), e[n];
}
var xl;
(function(e) {
  e.Variant = "v";
})(xl || (xl = {}));
function Tb(e, t, r) {
  let { hover: n, pressed: o } = e || {};
  if (o && r)
    return "pressed";
  if (n && t)
    return "hover";
}
function uM(e, t) {
  let r = t[e];
  return r || `framer-${xl.Variant}-${e}`;
}
var wb = Symbol("cycle");
function cM({ variant: e, defaultVariant: t, transitions: r, enabledGestures: n, cycleOrder: o = [], variantProps: i = {}, variantClassNames: a = {} }) {
  let s = Rs(), l = react.exports.useRef({ isHovered: false, isPressed: false, baseVariant: e != null ? e : t, gestureVariant: void 0, defaultVariant: t, enabledGestures: n, cycleOrder: o, transitions: r }), u = react.exports.useCallback((T = l.current.defaultVariant) => {
    let { baseVariant: F, gestureVariant: I, isPressed: A, isHovered: E, defaultVariant: k, enabledGestures: W } = l.current, K = Tb(W == null ? void 0 : W[T], E, A), U = K ? sM(T, K) : void 0;
    (T !== F || U !== I) && (l.current.baseVariant = T || k, l.current.gestureVariant = U, s());
  }, [s]), c = react.exports.useCallback(({ isHovered: T, isPressed: F }) => {
    T !== void 0 && (l.current.isHovered = T), F !== void 0 && (l.current.isPressed = F), u(l.current.baseVariant);
  }, [u]), f = react.exports.useCallback((T) => {
    let { defaultVariant: F, cycleOrder: I, baseVariant: A } = l.current, E = T === wb ? lM(I || [], A || F) : T;
    u(E || F);
  }, [u]);
  react.exports.useLayoutEffect(() => {
    e !== l.current.baseVariant && f(e);
  }, [e, f]);
  let { baseVariant: p } = l.current, m = react.exports.useMemo(() => {
    let { transitions: T } = l.current;
    if (!!T) {
      if (p) {
        let F = T[p];
        if (F)
          return F;
      }
      return T.default;
    }
  }, [p]), d = [], { gestureVariant: h, defaultVariant: v, enabledGestures: y, isHovered: P, isPressed: C } = l.current;
  p && p !== v && d.push(p), h && d.push(h);
  let b = kp(p, h, i);
  return { variants: d, baseVariant: p, gestureVariant: h, transition: m, setVariant: f, setGestureState: c, addVariantProps: b, classNames: _p(uM(p, a), Tb(y == null ? void 0 : y[p], P, C)) };
}
var mM = (e, t) => react.exports.forwardRef((r, n) => react.exports.createElement(react.exports.Fragment, null, react.exports.createElement(e, __spreadProps(__spreadValues({}, r), { ref: n })), react.exports.createElement("style", { dangerouslySetInnerHTML: { __html: t } })));
var dM = (...e) => e.forEach((t) => t && t());
function Np() {
  return L.current() === L.canvas;
}
function Rb(e, t) {
  if (e[t])
    return e[t];
  if (!(t in e))
    return e.default;
}
function Fb(e, t) {
  if (Np())
    return;
  let n = react.exports.useRef(true);
  mo((o) => {
    if (!n.current && o) {
      let i = Rb(t, e);
      i && i();
    }
    n.current = o;
  }, [t]), react.exports.useEffect(() => {
    if (n.current) {
      let o = Rb(t, e);
      o && o();
    }
  }, [e, t]);
}
function vM(e) {
  Fb("default", { default: e });
}
function Hp(e, t) {
  e.forEach((r) => clearTimeout(r)), e.clear(), t.forEach((r) => r && r("Callback cancelled by variant change")), t.clear();
}
function Ib() {
  return new Set();
}
function Ab(e) {
  let t = Ei(Ib), r = Ei(Ib);
  return mo(() => () => Hp(r, t)), react.exports.useEffect(() => () => Hp(r, t), []), react.exports.useEffect(() => {
    Hp(r, t);
  }, [e]), react.exports.useRef({ activeVariantCallback: (n) => (...o) => new Promise((i, a) => (t.add(a), n(...o).then(i))).catch(() => {
  }), delay: async (n, o) => {
    await new Promise((i) => r.add(globalThis.setTimeout(() => i(true), o))), n();
  } }).current;
}
function yM() {
  let e = Ab(void 0);
  return react.exports.useRef({ activeTargetCallback: e.activeVariantCallback, delay: e.delay }).current;
}
function PM(e) {
  let t = react.exports.lazy(e), r, n, o = react.exports.forwardRef(function(a, s) {
    return react.exports.createElement(n != null ? n : t, Object.assign(s ? { ref: s } : {}, a));
  });
  return o.preload = () => (r || (r = e().then((i) => {
    n = i.default;
  })), r), o;
}
function TM({ preload: e } = {}) {
  let t = Ip();
  return react.exports.useEffect(() => {
    !t || e == null || e.forEach((r) => "preload" in r && r.preload());
  }, []), t ? async (r, n = {}) => {
    if (r === "previous")
      return t.goBack(), false;
    let { appearsFrom: o, backdropColor: i, animation: a } = n;
    if (!!r) {
      switch (n.transition) {
        case "instant":
          t.instant(r);
          break;
        case "fade":
          t.fade(r, { animation: a });
          break;
        case "push":
          t.push(r, { appearsFrom: o, animation: a });
          break;
        case "modal":
          t.modal(r, { backdropColor: i, animation: a });
          break;
        case "overlay":
          t.overlay(r, { appearsFrom: o, backdropColor: i, animation: a });
          break;
        case "flip":
          t.flip(r, { appearsFrom: o, animation: a });
          break;
        case "magicMotion":
          t.magicMotion(r, { animation: a });
          break;
      }
      return false;
    }
  } : () => {
  };
}
var FM = ({ id: e, children: t }) => {
  let r = react.exports.useContext(br);
  if (!e)
    return react.exports.createElement(react.exports.Fragment, null, t);
  let n = r && r !== e ? `${r}-${e}` : e;
  return react.exports.createElement(br.Provider, { value: n }, t);
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Framer = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get Animatable() {
    return q;
  },
  AnimatePresence: Ja,
  AnimateSharedLayout: wu,
  AnyInterpolation: bv,
  AutomaticLayoutIds: uc,
  get BackgroundImage() {
    return et;
  },
  BezierAnimator: hn,
  get BoxShadow() {
    return lo;
  },
  CanvasStore: Op,
  get Color() {
    return B;
  },
  get ColorFormat() {
    return xe;
  },
  get ColorMixModelType() {
    return tt;
  },
  ComponentContainerContext: Bt,
  get ConstraintMask() {
    return Jn;
  },
  get ConstraintValues() {
    return st;
  },
  get ControlType() {
    return fe;
  },
  get ConvertColor() {
    return ot;
  },
  CustomProperties: Vv,
  CustomPropertiesContext: Pi,
  CycleVariantState: wb,
  DOM: BF,
  get Data() {
    return hr;
  },
  DataContext: Cb,
  DataObserver: hb,
  DataObserverContext: vl,
  DeprecatedComponentContainer: Nr,
  DeprecatedFrameWithEvents: Gs,
  get DimensionType() {
    return z;
  },
  DragControls: wh,
  Draggable: Fi,
  EmptyState: fn,
  FlatTree: Pu,
  Frame: $s,
  FrameWithMotion: we,
  FramerAnimation: gn,
  FramerEvent: at,
  FramerEventListener: Gc,
  FramerEventSession: Qs,
  FramerTreeLayoutContext: Jo,
  Image: eE,
  InternalID: Br,
  Layer: Se,
  LayoutGroup: FM,
  LayoutGroupContext: br,
  LayoutIdContext: fr,
  LazyMotion: h0,
  get Line() {
    return cl;
  },
  get LinearGradient() {
    return Xe;
  },
  MainLoop: Pt,
  MotionConfig: c0,
  MotionConfigContext: nt,
  MotionSetup: tM,
  MotionValue: Jr,
  get NavigateTo() {
    return tp;
  },
  Navigation: Mi,
  NavigationCallbackProvider: HR,
  NavigationConsumer: NR,
  get NavigationTransitionType() {
    return zt;
  },
  get ObservableObject() {
    return je;
  },
  Page: al,
  get ParentSizeState() {
    return Me;
  },
  get PathSegment() {
    return Jt;
  },
  get Point() {
    return Ie;
  },
  PresenceContext: ft,
  get PropertyStore() {
    return yl;
  },
  ProvideParentSize: ls,
  get RadialGradient() {
    return Ye;
  },
  get Rect() {
    return De;
  },
  RenderNodeProvider: jE,
  get RenderTarget() {
    return L;
  },
  SVG: up,
  Scroll: Zs,
  get Shadow() {
    return Oc;
  },
  SharedLayoutContext: lr,
  get Size() {
    return ul;
  },
  SpringAnimator: cn,
  Stack: bo,
  Text: Pp,
  get TypefaceSourceNames() {
    return Dt;
  },
  ValueInterpolation: kr,
  get VariantSelector() {
    return xl;
  },
  Vector: Po,
  VectorGroup: To,
  get VisibilityAction() {
    return Ko;
  },
  WithNavigator: TF,
  WithOverride: Dp,
  _getCSSTextColorFromStyle: wE,
  _injectRuntime: uT,
  addActionControls: KE,
  addPropertyControls: mn,
  addScaleCorrection: Ao,
  get animate() {
    return sl;
  },
  animateVisualElement: Qr,
  animationControls: Mu,
  annotateTypeOnStringify: YF,
  backgroundImageFromProps: ni,
  calculateRect: on,
  callEach: dM,
  collectVisualStyleFromProps: kc,
  constraintsEnabled: Yt,
  convertPresentationTree: gl,
  createBatcher: Mr,
  createCrossfader: Kn,
  createData: YE,
  createDesignComponent: _E,
  createDomMotionComponent: NC,
  createMotionComponent: Io,
  cssBackgroundSize: Gv,
  cx: _p,
  debounce: Ri,
  dispatchKeyDownEvent: jF,
  domAnimation: Fu,
  domMax: g0,
  environment: bg,
  executeInRenderEnvironment: yP,
  finiteNumber: oP,
  fontStore: Sp,
  forceLayerBackingWithCSSProperties: ci,
  fraction: xo,
  frameFromElement: op,
  frameFromElements: Gy,
  getConfigFromPreviewURL: Wy,
  getConfigFromURL: Wy,
  getConfigFromVekterURL: IF,
  getMeasurableCodeComponentChildren: Sc,
  getMergedConstraintsProps: lP,
  getPropertyControls: Ww,
  gradientForShape: zF,
  imagePatternPropsForFill: Ai,
  imageUrlForAsset: ap,
  isAnimatable: ie,
  isDesignDefinition: GF,
  isEqual: li,
  isFiniteNumber: V,
  isFractionDimension: ol,
  isGapEnabled: Jc,
  isMotionValue: Ke,
  isOfAnnotatedType: KF,
  isOverride: $F,
  isReactDefinition: sp,
  isShallowEqualArray: Oi,
  isStraightCurve: ll,
  isValidMotionProp: Tr,
  lazy: PM,
  loadFont: bp,
  loadJSON: qE,
  localPackageFallbackIdentifier: XF,
  localShadowFrame: Vc,
  m: HC,
  makePaddingString: Ii,
  memoize: sc,
  motion: ke,
  motionValue: Ee,
  paddingFromProps: vo,
  parseVariant: fl,
  pathDefaults: JF,
  print: ZE,
  resolveMotionValue: Ze,
  roundWithOffset: ss,
  roundedNumber: Zn,
  roundedNumberString: St,
  serverURL: LF,
  setGlobalRenderEnvironment: bP,
  snapshotViewportBox: Er,
  startAnimation: rM,
  systemTypefaceName: rb,
  throttle: WF,
  toFlexDirection: Zc,
  toJustifyOrAlignment: yo,
  toSVGPath: lp,
  transform: Eu,
  transformString: ki,
  transformTemplate: Vr,
  useActiveTargetCallback: yM,
  useActiveVariantCallback: Ab,
  useAddVariantProps: kp,
  useAnimatedState: Fh,
  useAnimation: Iu,
  useCycle: N0,
  useDeprecatedAnimatedState: Fh,
  useDeprecatedInvertedScale: Ih,
  useDomEvent: wr,
  useDragControls: Au,
  useElementScroll: I0,
  useInvertedScale: Ih,
  useIsInCurrentNavigationTarget: qs,
  useIsOnFramerCanvas: Np,
  useIsPresent: ex,
  useMeasureLayout: un,
  useMotionTemplate: x0,
  useMotionValue: Je,
  useNavigate: TM,
  useNavigation: Ip,
  useOnAppear: vM,
  useOnCurrentTargetChange: mo,
  useOnVariantChange: Fb,
  usePresence: Eo,
  useReducedMotion: k0,
  useRenderEnvironment: xP,
  useSpring: R0,
  useTransform: ts,
  useVariantState: cM,
  useVelocity: E0,
  useViewportScroll: L0,
  valueToDimensionType: Qn,
  version: JE,
  visualElement: tn,
  withCSS: mM,
  withGeneratedLayoutId: HE,
  withMeasuredSize: PT,
  withOpacity: Lv,
  withPath: ZF,
  withShape: HF
});
window.React = React;
window.Framer = Framer;
console.log("Importing essential web modules is completed.");
