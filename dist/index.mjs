(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("._outter_mjs0y_4{position:fixed;top:0;left:0;z-index:1000;width:0;height:0;all:initial;font-family:system-ui,sans-serif;font-size:1rem;@media (prefers-color-scheme: dark){*{--color-base-0: rgb(0, 0, 0);--color-base-100: #171717;--color-base-200: #343434;--color-base-content: #c2c2c2;--color-primary: rgb(127, 67, 255);--color-primary-content: rgb(227, 218, 237)}}@media (prefers-color-scheme: light){*{--color-base-0: rgb(255, 255, 255);--color-base-100: #e9e9e9;--color-base-200: #c9c9c9;--color-base-content: #171717;--color-primary: rgb(103, 36, 248);--color-primary-content: rgb(227, 218, 237)}}}._backdrop_mjs0y_47{background:rgb(from var(--color-base-0) r g b / 60%);width:100vw;height:100vh;position:fixed;top:0;left:0;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:1000}._container_mjs0y_59{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--color-base-content);z-index:1001;button{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-200) r g b / 60%);--color-text: var(--color-base-content);border:none;cursor:pointer;background:transparent;padding:.5em 1em;box-sizing:border-box;color:var(--color-text);transition:all;transition-duration:.15s}button:hover{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-0) r g b / 100%);--color-text: var(--color-base-content)}button:disabled{opacity:50%}button._btn_mjs0y_92{background-color:var(--color-bg);color:var(--color-text);border:solid 1px var(--color-border);padding:.5em 1em;border-radius:.4em;display:inline-flex;justify-content:center;align-items:center}a{color:var(--color-primary)}a:hover{color:var(--color-base-content);text-decoration:underline}}._outter_mjs0y_4,._container_mjs0y_59,._content_mjs0y_114,._backdrop_mjs0y_47{transition:all;transition-duration:.15s}._content_mjs0y_114{max-width:320px;width:320px;background-color:rgb(from var(--color-base-100) r g b / 60%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:block;box-sizing:border-box;border-radius:1em;box-shadow:0 14px 47px -13px #0000000d;-webkit-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);-moz-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);border:solid 1px rgb(from var(--color-base-200) r g b / 60%);._head_mjs0y_133{display:flex;width:100%;justify-content:space-between;align-items:center;padding:1em;box-sizing:border-box}._main_mjs0y_141{padding:1em 1.5em}._foot_mjs0y_144{padding:.5em 1em 1.5em;text-align:center;color:rgb(from var(--color-base-content) r g b / 60%)}h3{font-size:1.1rem;line-height:1.2rem;padding:0;margin:0}}._content_mjs0y_114:hover{border:solid 1px rgb(from var(--color-base-200) r g b / 100%)}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { syncStrategies as ir, getStrategy as or, saveStrategy as ar } from "@arweave-wallet-kit/core/strategy";
import { sharedConfig as Ee, getOwner as bt, createEffect as Xt, runWithOwner as cr, createMemo as De, createSignal as Pe, createRoot as lr, onCleanup as dt, createRenderEffect as Oe, createContext as ur, onMount as hr, createComponent as ve, useContext as dr, Show as vt, Switch as fr, Match as St, For as gr } from "solid-js";
var pr = Object.defineProperty, wr = (i, t, r) => t in i ? pr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[t] = r, $e = (i, t, r) => (wr(i, typeof t != "symbol" ? t + "" : t, r), r);
async function he(i, t = []) {
  return window != null && window.arweaveWallet ? await window.arweaveWallet[i](...t) : new Promise(
    (r, s) => window.addEventListener("arweaveWalletLoaded", async () => {
      try {
        r(await window.arweaveWallet[i](...t));
      } catch (n) {
        s(n);
      }
    })
  );
}
class _n {
  constructor() {
    $e(this, "id", "browserwallet"), $e(this, "name", "Browser Wallet"), $e(this, "description", "Any browser wallet with an injected API"), $e(this, "theme", "121,212,131"), $e(this, "logo", "KKiSlNKc5K59MXzUPz5qjtCLsl6_ckjAOg9MyAzaUs0");
  }
  async isAvailable() {
    return typeof window > "u" || !window ? (console.error(
      `[Arweave Wallet Kit] "${this.id}" strategy is unavailable. Window is undefined`
    ), !1) : window.arweaveWallet ? !0 : new Promise((t) => {
      const r = () => t(!0);
      window.addEventListener("arweaveWalletLoaded", r), setTimeout(() => {
        window.removeEventListener("arweaveWalletLoaded", r), window.arweaveWallet || console.error(
          `[Arweave Wallet Kit] "${this.id}" strategy is unavailable. window.arweaveWallet is undefined`
        ), t(!!window.arweaveWallet);
      }, 7e3);
    });
  }
  async sync() {
  }
  async connect(t, r, s) {
    return await he("connect", [t, r, s]);
  }
  async disconnect() {
    return await he("disconnect");
  }
  async getActiveAddress() {
    return await he("getActiveAddress");
  }
  async getAllAddresses() {
    return await he("getAllAddresses");
  }
  async getPermissions() {
    return await he("getPermissions");
  }
  async getWalletNames() {
    return await he("getWalletNames");
  }
  async sign(t, r) {
    const s = await he("sign", [
      t,
      r
    ]);
    return t.setSignature({
      id: s.id,
      owner: s.owner,
      reward: s.reward,
      tags: s.tags,
      signature: s.signature
    }), t;
  }
  async signDataItem(t) {
    return await he("signDataItem", [t]);
  }
  async encrypt(t, r) {
    return await he("encrypt", [t, r]);
  }
  async decrypt(t, r) {
    return await he("decrypt", [t, r]);
  }
  async getArweaveConfig() {
    return await he("getArweaveConfig");
  }
  async signature(t, r) {
    return await he("signature", [t, r]);
  }
  async getActivePublicKey() {
    return await he("getActivePublicKey");
  }
  async dispatch(t) {
    return await he("dispatch", [t]);
  }
  async addToken(t) {
    throw new Error("Not implemented: " + t);
  }
  addAddressEvent(t) {
    const r = (s) => t(s.detail.address);
    return addEventListener("walletSwitch", r), r;
  }
  removeAddressEvent(t) {
    removeEventListener("walletSwitch", t);
  }
}
var xe = {}, de = {}, Fe = {}, At;
function yr() {
  if (At) return Fe;
  At = 1, Fe.byteLength = a, Fe.toByteArray = f, Fe.fromByteArray = I;
  for (var i = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, c = s.length; n < c; ++n)
    i[n] = s[n], t[s.charCodeAt(n)] = n;
  t[45] = 62, t[95] = 63;
  function o(A) {
    var x = A.length;
    if (x % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var _ = A.indexOf("=");
    _ === -1 && (_ = x);
    var D = _ === x ? 0 : 4 - _ % 4;
    return [_, D];
  }
  function a(A) {
    var x = o(A), _ = x[0], D = x[1];
    return (_ + D) * 3 / 4 - D;
  }
  function h(A, x, _) {
    return (x + _) * 3 / 4 - _;
  }
  function f(A) {
    var x, _ = o(A), D = _[0], F = _[1], L = new r(h(A, D, F)), M = 0, ee = F > 0 ? D - 4 : D, N;
    for (N = 0; N < ee; N += 4)
      x = t[A.charCodeAt(N)] << 18 | t[A.charCodeAt(N + 1)] << 12 | t[A.charCodeAt(N + 2)] << 6 | t[A.charCodeAt(N + 3)], L[M++] = x >> 16 & 255, L[M++] = x >> 8 & 255, L[M++] = x & 255;
    return F === 2 && (x = t[A.charCodeAt(N)] << 2 | t[A.charCodeAt(N + 1)] >> 4, L[M++] = x & 255), F === 1 && (x = t[A.charCodeAt(N)] << 10 | t[A.charCodeAt(N + 1)] << 4 | t[A.charCodeAt(N + 2)] >> 2, L[M++] = x >> 8 & 255, L[M++] = x & 255), L;
  }
  function C(A) {
    return i[A >> 18 & 63] + i[A >> 12 & 63] + i[A >> 6 & 63] + i[A & 63];
  }
  function T(A, x, _) {
    for (var D, F = [], L = x; L < _; L += 3)
      D = (A[L] << 16 & 16711680) + (A[L + 1] << 8 & 65280) + (A[L + 2] & 255), F.push(C(D));
    return F.join("");
  }
  function I(A) {
    for (var x, _ = A.length, D = _ % 3, F = [], L = 16383, M = 0, ee = _ - D; M < ee; M += L)
      F.push(T(A, M, M + L > ee ? ee : M + L));
    return D === 1 ? (x = A[_ - 1], F.push(
      i[x >> 2] + i[x << 4 & 63] + "=="
    )) : D === 2 && (x = (A[_ - 2] << 8) + A[_ - 1], F.push(
      i[x >> 10] + i[x >> 4 & 63] + i[x << 2 & 63] + "="
    )), F.join("");
  }
  return Fe;
}
var Ct;
function _e() {
  if (Ct) return de;
  Ct = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.concatBuffers = t, de.b64UrlToString = r, de.bufferToString = s, de.stringToBuffer = n, de.stringToB64Url = c, de.b64UrlToBuffer = o, de.bufferTob64 = a, de.bufferTob64Url = h, de.b64UrlEncode = f, de.b64UrlDecode = C;
  const i = yr();
  function t(T) {
    let I = 0;
    for (let _ = 0; _ < T.length; _++)
      I += T[_].byteLength;
    let A = new Uint8Array(I), x = 0;
    A.set(new Uint8Array(T[0]), x), x += T[0].byteLength;
    for (let _ = 1; _ < T.length; _++)
      A.set(new Uint8Array(T[_]), x), x += T[_].byteLength;
    return A;
  }
  function r(T) {
    let I = o(T);
    return s(I);
  }
  function s(T) {
    return new TextDecoder("utf-8", { fatal: !0 }).decode(T);
  }
  function n(T) {
    return new TextEncoder().encode(T);
  }
  function c(T) {
    return h(n(T));
  }
  function o(T) {
    return new Uint8Array(i.toByteArray(C(T)));
  }
  function a(T) {
    return i.fromByteArray(new Uint8Array(T));
  }
  function h(T) {
    return f(a(T));
  }
  function f(T) {
    try {
      return T.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
    } catch (I) {
      throw new Error("Failed to encode string", { cause: I });
    }
  }
  function C(T) {
    try {
      T = T.replace(/\-/g, "+").replace(/\_/g, "/");
      let I;
      return T.length % 4 == 0 ? I = 0 : I = 4 - T.length % 4, T.concat("=".repeat(I));
    } catch (I) {
      throw new Error("Failed to decode string", { cause: I });
    }
  }
  return de;
}
var Ge = {}, Je = {}, ze = {}, nt = { exports: {} }, mr = nt.exports, Tt;
function br() {
  return Tt || (Tt = 1, function(i) {
    (function(t) {
      var r, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, n = Math.ceil, c = Math.floor, o = "[BigNumber Error] ", a = o + "Number primitive has more than 15 significant digits: ", h = 1e14, f = 14, C = 9007199254740991, T = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], I = 1e7, A = 1e9;
      function x(O) {
        var R, U, K, P = k.prototype = { constructor: k, toString: null, valueOf: null }, J = new k(1), W = 20, j = 4, H = -7, V = 21, ae = -1e7, ce = 1e7, ye = !1, Ce = 1, ge = 0, B = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          // non-breaking space
          suffix: ""
        }, Z = "0123456789abcdefghijklmnopqrstuvwxyz", Y = !0;
        function k(l, u) {
          var d, b, p, y, S, g, w, v, m = this;
          if (!(m instanceof k)) return new k(l, u);
          if (u == null) {
            if (l && l._isBigNumber === !0) {
              m.s = l.s, !l.c || l.e > ce ? m.c = m.e = null : l.e < ae ? m.c = [m.e = 0] : (m.e = l.e, m.c = l.c.slice());
              return;
            }
            if ((g = typeof l == "number") && l * 0 == 0) {
              if (m.s = 1 / l < 0 ? (l = -l, -1) : 1, l === ~~l) {
                for (y = 0, S = l; S >= 10; S /= 10, y++) ;
                y > ce ? m.c = m.e = null : (m.e = y, m.c = [l]);
                return;
              }
              v = String(l);
            } else {
              if (!s.test(v = String(l))) return K(m, v, g);
              m.s = v.charCodeAt(0) == 45 ? (v = v.slice(1), -1) : 1;
            }
            (y = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (S = v.search(/e/i)) > 0 ? (y < 0 && (y = S), y += +v.slice(S + 1), v = v.substring(0, S)) : y < 0 && (y = v.length);
          } else {
            if (L(u, 2, Z.length, "Base"), u == 10 && Y)
              return m = new k(l), se(m, W + m.e + 1, j);
            if (v = String(l), g = typeof l == "number") {
              if (l * 0 != 0) return K(m, v, g, u);
              if (m.s = 1 / l < 0 ? (v = v.slice(1), -1) : 1, k.DEBUG && v.replace(/^0\.0*|\./, "").length > 15)
                throw Error(a + l);
            } else
              m.s = v.charCodeAt(0) === 45 ? (v = v.slice(1), -1) : 1;
            for (d = Z.slice(0, u), y = S = 0, w = v.length; S < w; S++)
              if (d.indexOf(b = v.charAt(S)) < 0) {
                if (b == ".") {
                  if (S > y) {
                    y = w;
                    continue;
                  }
                } else if (!p && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
                  p = !0, S = -1, y = 0;
                  continue;
                }
                return K(m, String(l), g, u);
              }
            g = !1, v = U(v, u, 10, m.s), (y = v.indexOf(".")) > -1 ? v = v.replace(".", "") : y = v.length;
          }
          for (S = 0; v.charCodeAt(S) === 48; S++) ;
          for (w = v.length; v.charCodeAt(--w) === 48; ) ;
          if (v = v.slice(S, ++w)) {
            if (w -= S, g && k.DEBUG && w > 15 && (l > C || l !== c(l)))
              throw Error(a + m.s * l);
            if ((y = y - S - 1) > ce)
              m.c = m.e = null;
            else if (y < ae)
              m.c = [m.e = 0];
            else {
              if (m.e = y, m.c = [], S = (y + 1) % f, y < 0 && (S += f), S < w) {
                for (S && m.c.push(+v.slice(0, S)), w -= f; S < w; )
                  m.c.push(+v.slice(S, S += f));
                S = f - (v = v.slice(S)).length;
              } else
                S -= w;
              for (; S--; v += "0") ;
              m.c.push(+v);
            }
          } else
            m.c = [m.e = 0];
        }
        k.clone = x, k.ROUND_UP = 0, k.ROUND_DOWN = 1, k.ROUND_CEIL = 2, k.ROUND_FLOOR = 3, k.ROUND_HALF_UP = 4, k.ROUND_HALF_DOWN = 5, k.ROUND_HALF_EVEN = 6, k.ROUND_HALF_CEIL = 7, k.ROUND_HALF_FLOOR = 8, k.EUCLID = 9, k.config = k.set = function(l) {
          var u, d;
          if (l != null)
            if (typeof l == "object") {
              if (l.hasOwnProperty(u = "DECIMAL_PLACES") && (d = l[u], L(d, 0, A, u), W = d), l.hasOwnProperty(u = "ROUNDING_MODE") && (d = l[u], L(d, 0, 8, u), j = d), l.hasOwnProperty(u = "EXPONENTIAL_AT") && (d = l[u], d && d.pop ? (L(d[0], -1e9, 0, u), L(d[1], 0, A, u), H = d[0], V = d[1]) : (L(d, -1e9, A, u), H = -(V = d < 0 ? -d : d))), l.hasOwnProperty(u = "RANGE"))
                if (d = l[u], d && d.pop)
                  L(d[0], -1e9, -1, u), L(d[1], 1, A, u), ae = d[0], ce = d[1];
                else if (L(d, -1e9, A, u), d)
                  ae = -(ce = d < 0 ? -d : d);
                else
                  throw Error(o + u + " cannot be zero: " + d);
              if (l.hasOwnProperty(u = "CRYPTO"))
                if (d = l[u], d === !!d)
                  if (d)
                    if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                      ye = d;
                    else
                      throw ye = !d, Error(o + "crypto unavailable");
                  else
                    ye = d;
                else
                  throw Error(o + u + " not true or false: " + d);
              if (l.hasOwnProperty(u = "MODULO_MODE") && (d = l[u], L(d, 0, 9, u), Ce = d), l.hasOwnProperty(u = "POW_PRECISION") && (d = l[u], L(d, 0, A, u), ge = d), l.hasOwnProperty(u = "FORMAT"))
                if (d = l[u], typeof d == "object") B = d;
                else throw Error(o + u + " not an object: " + d);
              if (l.hasOwnProperty(u = "ALPHABET"))
                if (d = l[u], typeof d == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(d))
                  Y = d.slice(0, 10) == "0123456789", Z = d;
                else
                  throw Error(o + u + " invalid: " + d);
            } else
              throw Error(o + "Object expected: " + l);
          return {
            DECIMAL_PLACES: W,
            ROUNDING_MODE: j,
            EXPONENTIAL_AT: [H, V],
            RANGE: [ae, ce],
            CRYPTO: ye,
            MODULO_MODE: Ce,
            POW_PRECISION: ge,
            FORMAT: B,
            ALPHABET: Z
          };
        }, k.isBigNumber = function(l) {
          if (!l || l._isBigNumber !== !0) return !1;
          if (!k.DEBUG) return !0;
          var u, d, b = l.c, p = l.e, y = l.s;
          e: if ({}.toString.call(b) == "[object Array]") {
            if ((y === 1 || y === -1) && p >= -1e9 && p <= A && p === c(p)) {
              if (b[0] === 0) {
                if (p === 0 && b.length === 1) return !0;
                break e;
              }
              if (u = (p + 1) % f, u < 1 && (u += f), String(b[0]).length == u) {
                for (u = 0; u < b.length; u++)
                  if (d = b[u], d < 0 || d >= h || d !== c(d)) break e;
                if (d !== 0) return !0;
              }
            }
          } else if (b === null && p === null && (y === null || y === 1 || y === -1))
            return !0;
          throw Error(o + "Invalid BigNumber: " + l);
        }, k.maximum = k.max = function() {
          return X(arguments, -1);
        }, k.minimum = k.min = function() {
          return X(arguments, 1);
        }, k.random = function() {
          var l = 9007199254740992, u = Math.random() * l & 2097151 ? function() {
            return c(Math.random() * l);
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
          };
          return function(d) {
            var b, p, y, S, g, w = 0, v = [], m = new k(J);
            if (d == null ? d = W : L(d, 0, A), S = n(d / f), ye)
              if (crypto.getRandomValues) {
                for (b = crypto.getRandomValues(new Uint32Array(S *= 2)); w < S; )
                  g = b[w] * 131072 + (b[w + 1] >>> 11), g >= 9e15 ? (p = crypto.getRandomValues(new Uint32Array(2)), b[w] = p[0], b[w + 1] = p[1]) : (v.push(g % 1e14), w += 2);
                w = S / 2;
              } else if (crypto.randomBytes) {
                for (b = crypto.randomBytes(S *= 7); w < S; )
                  g = (b[w] & 31) * 281474976710656 + b[w + 1] * 1099511627776 + b[w + 2] * 4294967296 + b[w + 3] * 16777216 + (b[w + 4] << 16) + (b[w + 5] << 8) + b[w + 6], g >= 9e15 ? crypto.randomBytes(7).copy(b, w) : (v.push(g % 1e14), w += 7);
                w = S / 7;
              } else
                throw ye = !1, Error(o + "crypto unavailable");
            if (!ye)
              for (; w < S; )
                g = u(), g < 9e15 && (v[w++] = g % 1e14);
            for (S = v[--w], d %= f, S && d && (g = T[f - d], v[w] = c(S / g) * g); v[w] === 0; v.pop(), w--) ;
            if (w < 0)
              v = [y = 0];
            else {
              for (y = -1; v[0] === 0; v.splice(0, 1), y -= f) ;
              for (w = 1, g = v[0]; g >= 10; g /= 10, w++) ;
              w < f && (y -= f - w);
            }
            return m.e = y, m.c = v, m;
          };
        }(), k.sum = function() {
          for (var l = 1, u = arguments, d = new k(u[0]); l < u.length; ) d = d.plus(u[l++]);
          return d;
        }, U = /* @__PURE__ */ function() {
          var l = "0123456789";
          function u(d, b, p, y) {
            for (var S, g = [0], w, v = 0, m = d.length; v < m; ) {
              for (w = g.length; w--; g[w] *= b) ;
              for (g[0] += y.indexOf(d.charAt(v++)), S = 0; S < g.length; S++)
                g[S] > p - 1 && (g[S + 1] == null && (g[S + 1] = 0), g[S + 1] += g[S] / p | 0, g[S] %= p);
            }
            return g.reverse();
          }
          return function(d, b, p, y, S) {
            var g, w, v, m, E, q, $, z, te = d.indexOf("."), oe = W, G = j;
            for (te >= 0 && (m = ge, ge = 0, d = d.replace(".", ""), z = new k(b), q = z.pow(d.length - te), ge = m, z.c = u(
              N(D(q.c), q.e, "0"),
              10,
              p,
              l
            ), z.e = z.c.length), $ = u(d, b, p, S ? (g = Z, l) : (g = l, Z)), v = m = $.length; $[--m] == 0; $.pop()) ;
            if (!$[0]) return g.charAt(0);
            if (te < 0 ? --v : (q.c = $, q.e = v, q.s = y, q = R(q, z, oe, G, p), $ = q.c, E = q.r, v = q.e), w = v + oe + 1, te = $[w], m = p / 2, E = E || w < 0 || $[w + 1] != null, E = G < 4 ? (te != null || E) && (G == 0 || G == (q.s < 0 ? 3 : 2)) : te > m || te == m && (G == 4 || E || G == 6 && $[w - 1] & 1 || G == (q.s < 0 ? 8 : 7)), w < 1 || !$[0])
              d = E ? N(g.charAt(1), -oe, g.charAt(0)) : g.charAt(0);
            else {
              if ($.length = w, E)
                for (--p; ++$[--w] > p; )
                  $[w] = 0, w || (++v, $ = [1].concat($));
              for (m = $.length; !$[--m]; ) ;
              for (te = 0, d = ""; te <= m; d += g.charAt($[te++])) ;
              d = N(d, v, g.charAt(0));
            }
            return d;
          };
        }(), R = /* @__PURE__ */ function() {
          function l(b, p, y) {
            var S, g, w, v, m = 0, E = b.length, q = p % I, $ = p / I | 0;
            for (b = b.slice(); E--; )
              w = b[E] % I, v = b[E] / I | 0, S = $ * w + v * q, g = q * w + S % I * I + m, m = (g / y | 0) + (S / I | 0) + $ * v, b[E] = g % y;
            return m && (b = [m].concat(b)), b;
          }
          function u(b, p, y, S) {
            var g, w;
            if (y != S)
              w = y > S ? 1 : -1;
            else
              for (g = w = 0; g < y; g++)
                if (b[g] != p[g]) {
                  w = b[g] > p[g] ? 1 : -1;
                  break;
                }
            return w;
          }
          function d(b, p, y, S) {
            for (var g = 0; y--; )
              b[y] -= g, g = b[y] < p[y] ? 1 : 0, b[y] = g * S + b[y] - p[y];
            for (; !b[0] && b.length > 1; b.splice(0, 1)) ;
          }
          return function(b, p, y, S, g) {
            var w, v, m, E, q, $, z, te, oe, G, Q, le, He, ct, lt, be, je, we = b.s == p.s ? 1 : -1, ue = b.c, re = p.c;
            if (!ue || !ue[0] || !re || !re[0])
              return new k(
                // Return NaN if either NaN, or both Infinity or 0.
                !b.s || !p.s || (ue ? re && ue[0] == re[0] : !re) ? NaN : (
                  // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                  ue && ue[0] == 0 || !re ? we * 0 : we / 0
                )
              );
            for (te = new k(we), oe = te.c = [], v = b.e - p.e, we = y + v + 1, g || (g = h, v = _(b.e / f) - _(p.e / f), we = we / f | 0), m = 0; re[m] == (ue[m] || 0); m++) ;
            if (re[m] > (ue[m] || 0) && v--, we < 0)
              oe.push(1), E = !0;
            else {
              for (ct = ue.length, be = re.length, m = 0, we += 2, q = c(g / (re[0] + 1)), q > 1 && (re = l(re, q, g), ue = l(ue, q, g), be = re.length, ct = ue.length), He = be, G = ue.slice(0, be), Q = G.length; Q < be; G[Q++] = 0) ;
              je = re.slice(), je = [0].concat(je), lt = re[0], re[1] >= g / 2 && lt++;
              do {
                if (q = 0, w = u(re, G, be, Q), w < 0) {
                  if (le = G[0], be != Q && (le = le * g + (G[1] || 0)), q = c(le / lt), q > 1)
                    for (q >= g && (q = g - 1), $ = l(re, q, g), z = $.length, Q = G.length; u($, G, z, Q) == 1; )
                      q--, d($, be < z ? je : re, z, g), z = $.length, w = 1;
                  else
                    q == 0 && (w = q = 1), $ = re.slice(), z = $.length;
                  if (z < Q && ($ = [0].concat($)), d(G, $, Q, g), Q = G.length, w == -1)
                    for (; u(re, G, be, Q) < 1; )
                      q++, d(G, be < Q ? je : re, Q, g), Q = G.length;
                } else w === 0 && (q++, G = [0]);
                oe[m++] = q, G[0] ? G[Q++] = ue[He] || 0 : (G = [ue[He]], Q = 1);
              } while ((He++ < ct || G[0] != null) && we--);
              E = G[0] != null, oe[0] || oe.splice(0, 1);
            }
            if (g == h) {
              for (m = 1, we = oe[0]; we >= 10; we /= 10, m++) ;
              se(te, y + (te.e = m + v * f - 1) + 1, S, E);
            } else
              te.e = v, te.r = +E;
            return te;
          };
        }();
        function ne(l, u, d, b) {
          var p, y, S, g, w;
          if (d == null ? d = j : L(d, 0, 8), !l.c) return l.toString();
          if (p = l.c[0], S = l.e, u == null)
            w = D(l.c), w = b == 1 || b == 2 && (S <= H || S >= V) ? ee(w, S) : N(w, S, "0");
          else if (l = se(new k(l), u, d), y = l.e, w = D(l.c), g = w.length, b == 1 || b == 2 && (u <= y || y <= H)) {
            for (; g < u; w += "0", g++) ;
            w = ee(w, y);
          } else if (u -= S, w = N(w, y, "0"), y + 1 > g) {
            if (--u > 0) for (w += "."; u--; w += "0") ;
          } else if (u += y - g, u > 0)
            for (y + 1 == g && (w += "."); u--; w += "0") ;
          return l.s < 0 && p ? "-" + w : w;
        }
        function X(l, u) {
          for (var d, b, p = 1, y = new k(l[0]); p < l.length; p++)
            b = new k(l[p]), (!b.s || (d = F(y, b)) === u || d === 0 && y.s === u) && (y = b);
          return y;
        }
        function pe(l, u, d) {
          for (var b = 1, p = u.length; !u[--p]; u.pop()) ;
          for (p = u[0]; p >= 10; p /= 10, b++) ;
          return (d = b + d * f - 1) > ce ? l.c = l.e = null : d < ae ? l.c = [l.e = 0] : (l.e = d, l.c = u), l;
        }
        K = /* @__PURE__ */ function() {
          var l = /^(-?)0([xbo])(?=\w[\w.]*$)/i, u = /^([^.]+)\.$/, d = /^\.([^.]+)$/, b = /^-?(Infinity|NaN)$/, p = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
          return function(y, S, g, w) {
            var v, m = g ? S : S.replace(p, "");
            if (b.test(m))
              y.s = isNaN(m) ? null : m < 0 ? -1 : 1;
            else {
              if (!g && (m = m.replace(l, function(E, q, $) {
                return v = ($ = $.toLowerCase()) == "x" ? 16 : $ == "b" ? 2 : 8, !w || w == v ? q : E;
              }), w && (v = w, m = m.replace(u, "$1").replace(d, "0.$1")), S != m))
                return new k(m, v);
              if (k.DEBUG)
                throw Error(o + "Not a" + (w ? " base " + w : "") + " number: " + S);
              y.s = null;
            }
            y.c = y.e = null;
          };
        }();
        function se(l, u, d, b) {
          var p, y, S, g, w, v, m, E = l.c, q = T;
          if (E) {
            e: {
              for (p = 1, g = E[0]; g >= 10; g /= 10, p++) ;
              if (y = u - p, y < 0)
                y += f, S = u, w = E[v = 0], m = c(w / q[p - S - 1] % 10);
              else if (v = n((y + 1) / f), v >= E.length)
                if (b) {
                  for (; E.length <= v; E.push(0)) ;
                  w = m = 0, p = 1, y %= f, S = y - f + 1;
                } else
                  break e;
              else {
                for (w = g = E[v], p = 1; g >= 10; g /= 10, p++) ;
                y %= f, S = y - f + p, m = S < 0 ? 0 : c(w / q[p - S - 1] % 10);
              }
              if (b = b || u < 0 || // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
              E[v + 1] != null || (S < 0 ? w : w % q[p - S - 1]), b = d < 4 ? (m || b) && (d == 0 || d == (l.s < 0 ? 3 : 2)) : m > 5 || m == 5 && (d == 4 || b || d == 6 && // Check whether the digit to the left of the rounding digit is odd.
              (y > 0 ? S > 0 ? w / q[p - S] : 0 : E[v - 1]) % 10 & 1 || d == (l.s < 0 ? 8 : 7)), u < 1 || !E[0])
                return E.length = 0, b ? (u -= l.e + 1, E[0] = q[(f - u % f) % f], l.e = -u || 0) : E[0] = l.e = 0, l;
              if (y == 0 ? (E.length = v, g = 1, v--) : (E.length = v + 1, g = q[f - y], E[v] = S > 0 ? c(w / q[p - S] % q[S]) * g : 0), b)
                for (; ; )
                  if (v == 0) {
                    for (y = 1, S = E[0]; S >= 10; S /= 10, y++) ;
                    for (S = E[0] += g, g = 1; S >= 10; S /= 10, g++) ;
                    y != g && (l.e++, E[0] == h && (E[0] = 1));
                    break;
                  } else {
                    if (E[v] += g, E[v] != h) break;
                    E[v--] = 0, g = 1;
                  }
              for (y = E.length; E[--y] === 0; E.pop()) ;
            }
            l.e > ce ? l.c = l.e = null : l.e < ae && (l.c = [l.e = 0]);
          }
          return l;
        }
        function ie(l) {
          var u, d = l.e;
          return d === null ? l.toString() : (u = D(l.c), u = d <= H || d >= V ? ee(u, d) : N(u, d, "0"), l.s < 0 ? "-" + u : u);
        }
        return P.absoluteValue = P.abs = function() {
          var l = new k(this);
          return l.s < 0 && (l.s = 1), l;
        }, P.comparedTo = function(l, u) {
          return F(this, new k(l, u));
        }, P.decimalPlaces = P.dp = function(l, u) {
          var d, b, p, y = this;
          if (l != null)
            return L(l, 0, A), u == null ? u = j : L(u, 0, 8), se(new k(y), l + y.e + 1, u);
          if (!(d = y.c)) return null;
          if (b = ((p = d.length - 1) - _(this.e / f)) * f, p = d[p]) for (; p % 10 == 0; p /= 10, b--) ;
          return b < 0 && (b = 0), b;
        }, P.dividedBy = P.div = function(l, u) {
          return R(this, new k(l, u), W, j);
        }, P.dividedToIntegerBy = P.idiv = function(l, u) {
          return R(this, new k(l, u), 0, 1);
        }, P.exponentiatedBy = P.pow = function(l, u) {
          var d, b, p, y, S, g, w, v, m, E = this;
          if (l = new k(l), l.c && !l.isInteger())
            throw Error(o + "Exponent not an integer: " + ie(l));
          if (u != null && (u = new k(u)), g = l.e > 14, !E.c || !E.c[0] || E.c[0] == 1 && !E.e && E.c.length == 1 || !l.c || !l.c[0])
            return m = new k(Math.pow(+ie(E), g ? l.s * (2 - M(l)) : +ie(l))), u ? m.mod(u) : m;
          if (w = l.s < 0, u) {
            if (u.c ? !u.c[0] : !u.s) return new k(NaN);
            b = !w && E.isInteger() && u.isInteger(), b && (E = E.mod(u));
          } else {
            if (l.e > 9 && (E.e > 0 || E.e < -1 || (E.e == 0 ? E.c[0] > 1 || g && E.c[1] >= 24e7 : E.c[0] < 8e13 || g && E.c[0] <= 9999975e7)))
              return y = E.s < 0 && M(l) ? -0 : 0, E.e > -1 && (y = 1 / y), new k(w ? 1 / y : y);
            ge && (y = n(ge / f + 2));
          }
          for (g ? (d = new k(0.5), w && (l.s = 1), v = M(l)) : (p = Math.abs(+ie(l)), v = p % 2), m = new k(J); ; ) {
            if (v) {
              if (m = m.times(E), !m.c) break;
              y ? m.c.length > y && (m.c.length = y) : b && (m = m.mod(u));
            }
            if (p) {
              if (p = c(p / 2), p === 0) break;
              v = p % 2;
            } else if (l = l.times(d), se(l, l.e + 1, 1), l.e > 14)
              v = M(l);
            else {
              if (p = +ie(l), p === 0) break;
              v = p % 2;
            }
            E = E.times(E), y ? E.c && E.c.length > y && (E.c.length = y) : b && (E = E.mod(u));
          }
          return b ? m : (w && (m = J.div(m)), u ? m.mod(u) : y ? se(m, ge, j, S) : m);
        }, P.integerValue = function(l) {
          var u = new k(this);
          return l == null ? l = j : L(l, 0, 8), se(u, u.e + 1, l);
        }, P.isEqualTo = P.eq = function(l, u) {
          return F(this, new k(l, u)) === 0;
        }, P.isFinite = function() {
          return !!this.c;
        }, P.isGreaterThan = P.gt = function(l, u) {
          return F(this, new k(l, u)) > 0;
        }, P.isGreaterThanOrEqualTo = P.gte = function(l, u) {
          return (u = F(this, new k(l, u))) === 1 || u === 0;
        }, P.isInteger = function() {
          return !!this.c && _(this.e / f) > this.c.length - 2;
        }, P.isLessThan = P.lt = function(l, u) {
          return F(this, new k(l, u)) < 0;
        }, P.isLessThanOrEqualTo = P.lte = function(l, u) {
          return (u = F(this, new k(l, u))) === -1 || u === 0;
        }, P.isNaN = function() {
          return !this.s;
        }, P.isNegative = function() {
          return this.s < 0;
        }, P.isPositive = function() {
          return this.s > 0;
        }, P.isZero = function() {
          return !!this.c && this.c[0] == 0;
        }, P.minus = function(l, u) {
          var d, b, p, y, S = this, g = S.s;
          if (l = new k(l, u), u = l.s, !g || !u) return new k(NaN);
          if (g != u)
            return l.s = -u, S.plus(l);
          var w = S.e / f, v = l.e / f, m = S.c, E = l.c;
          if (!w || !v) {
            if (!m || !E) return m ? (l.s = -u, l) : new k(E ? S : NaN);
            if (!m[0] || !E[0])
              return E[0] ? (l.s = -u, l) : new k(m[0] ? S : (
                // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                j == 3 ? -0 : 0
              ));
          }
          if (w = _(w), v = _(v), m = m.slice(), g = w - v) {
            for ((y = g < 0) ? (g = -g, p = m) : (v = w, p = E), p.reverse(), u = g; u--; p.push(0)) ;
            p.reverse();
          } else
            for (b = (y = (g = m.length) < (u = E.length)) ? g : u, g = u = 0; u < b; u++)
              if (m[u] != E[u]) {
                y = m[u] < E[u];
                break;
              }
          if (y && (p = m, m = E, E = p, l.s = -l.s), u = (b = E.length) - (d = m.length), u > 0) for (; u--; m[d++] = 0) ;
          for (u = h - 1; b > g; ) {
            if (m[--b] < E[b]) {
              for (d = b; d && !m[--d]; m[d] = u) ;
              --m[d], m[b] += h;
            }
            m[b] -= E[b];
          }
          for (; m[0] == 0; m.splice(0, 1), --v) ;
          return m[0] ? pe(l, m, v) : (l.s = j == 3 ? -1 : 1, l.c = [l.e = 0], l);
        }, P.modulo = P.mod = function(l, u) {
          var d, b, p = this;
          return l = new k(l, u), !p.c || !l.s || l.c && !l.c[0] ? new k(NaN) : !l.c || p.c && !p.c[0] ? new k(p) : (Ce == 9 ? (b = l.s, l.s = 1, d = R(p, l, 0, 3), l.s = b, d.s *= b) : d = R(p, l, 0, Ce), l = p.minus(d.times(l)), !l.c[0] && Ce == 1 && (l.s = p.s), l);
        }, P.multipliedBy = P.times = function(l, u) {
          var d, b, p, y, S, g, w, v, m, E, q, $, z, te, oe, G = this, Q = G.c, le = (l = new k(l, u)).c;
          if (!Q || !le || !Q[0] || !le[0])
            return !G.s || !l.s || Q && !Q[0] && !le || le && !le[0] && !Q ? l.c = l.e = l.s = null : (l.s *= G.s, !Q || !le ? l.c = l.e = null : (l.c = [0], l.e = 0)), l;
          for (b = _(G.e / f) + _(l.e / f), l.s *= G.s, w = Q.length, E = le.length, w < E && (z = Q, Q = le, le = z, p = w, w = E, E = p), p = w + E, z = []; p--; z.push(0)) ;
          for (te = h, oe = I, p = E; --p >= 0; ) {
            for (d = 0, q = le[p] % oe, $ = le[p] / oe | 0, S = w, y = p + S; y > p; )
              v = Q[--S] % oe, m = Q[S] / oe | 0, g = $ * v + m * q, v = q * v + g % oe * oe + z[y] + d, d = (v / te | 0) + (g / oe | 0) + $ * m, z[y--] = v % te;
            z[y] = d;
          }
          return d ? ++b : z.splice(0, 1), pe(l, z, b);
        }, P.negated = function() {
          var l = new k(this);
          return l.s = -l.s || null, l;
        }, P.plus = function(l, u) {
          var d, b = this, p = b.s;
          if (l = new k(l, u), u = l.s, !p || !u) return new k(NaN);
          if (p != u)
            return l.s = -u, b.minus(l);
          var y = b.e / f, S = l.e / f, g = b.c, w = l.c;
          if (!y || !S) {
            if (!g || !w) return new k(p / 0);
            if (!g[0] || !w[0]) return w[0] ? l : new k(g[0] ? b : p * 0);
          }
          if (y = _(y), S = _(S), g = g.slice(), p = y - S) {
            for (p > 0 ? (S = y, d = w) : (p = -p, d = g), d.reverse(); p--; d.push(0)) ;
            d.reverse();
          }
          for (p = g.length, u = w.length, p - u < 0 && (d = w, w = g, g = d, u = p), p = 0; u; )
            p = (g[--u] = g[u] + w[u] + p) / h | 0, g[u] = h === g[u] ? 0 : g[u] % h;
          return p && (g = [p].concat(g), ++S), pe(l, g, S);
        }, P.precision = P.sd = function(l, u) {
          var d, b, p, y = this;
          if (l != null && l !== !!l)
            return L(l, 1, A), u == null ? u = j : L(u, 0, 8), se(new k(y), l, u);
          if (!(d = y.c)) return null;
          if (p = d.length - 1, b = p * f + 1, p = d[p]) {
            for (; p % 10 == 0; p /= 10, b--) ;
            for (p = d[0]; p >= 10; p /= 10, b++) ;
          }
          return l && y.e + 1 > b && (b = y.e + 1), b;
        }, P.shiftedBy = function(l) {
          return L(l, -9007199254740991, C), this.times("1e" + l);
        }, P.squareRoot = P.sqrt = function() {
          var l, u, d, b, p, y = this, S = y.c, g = y.s, w = y.e, v = W + 4, m = new k("0.5");
          if (g !== 1 || !S || !S[0])
            return new k(!g || g < 0 && (!S || S[0]) ? NaN : S ? y : 1 / 0);
          if (g = Math.sqrt(+ie(y)), g == 0 || g == 1 / 0 ? (u = D(S), (u.length + w) % 2 == 0 && (u += "0"), g = Math.sqrt(+u), w = _((w + 1) / 2) - (w < 0 || w % 2), g == 1 / 0 ? u = "5e" + w : (u = g.toExponential(), u = u.slice(0, u.indexOf("e") + 1) + w), d = new k(u)) : d = new k(g + ""), d.c[0]) {
            for (w = d.e, g = w + v, g < 3 && (g = 0); ; )
              if (p = d, d = m.times(p.plus(R(y, p, v, 1))), D(p.c).slice(0, g) === (u = D(d.c)).slice(0, g))
                if (d.e < w && --g, u = u.slice(g - 3, g + 1), u == "9999" || !b && u == "4999") {
                  if (!b && (se(p, p.e + W + 2, 0), p.times(p).eq(y))) {
                    d = p;
                    break;
                  }
                  v += 4, g += 4, b = 1;
                } else {
                  (!+u || !+u.slice(1) && u.charAt(0) == "5") && (se(d, d.e + W + 2, 1), l = !d.times(d).eq(y));
                  break;
                }
          }
          return se(d, d.e + W + 1, j, l);
        }, P.toExponential = function(l, u) {
          return l != null && (L(l, 0, A), l++), ne(this, l, u, 1);
        }, P.toFixed = function(l, u) {
          return l != null && (L(l, 0, A), l = l + this.e + 1), ne(this, l, u);
        }, P.toFormat = function(l, u, d) {
          var b, p = this;
          if (d == null)
            l != null && u && typeof u == "object" ? (d = u, u = null) : l && typeof l == "object" ? (d = l, l = u = null) : d = B;
          else if (typeof d != "object")
            throw Error(o + "Argument not an object: " + d);
          if (b = p.toFixed(l, u), p.c) {
            var y, S = b.split("."), g = +d.groupSize, w = +d.secondaryGroupSize, v = d.groupSeparator || "", m = S[0], E = S[1], q = p.s < 0, $ = q ? m.slice(1) : m, z = $.length;
            if (w && (y = g, g = w, w = y, z -= y), g > 0 && z > 0) {
              for (y = z % g || g, m = $.substr(0, y); y < z; y += g) m += v + $.substr(y, g);
              w > 0 && (m += v + $.slice(y)), q && (m = "-" + m);
            }
            b = E ? m + (d.decimalSeparator || "") + ((w = +d.fractionGroupSize) ? E.replace(
              new RegExp("\\d{" + w + "}\\B", "g"),
              "$&" + (d.fractionGroupSeparator || "")
            ) : E) : m;
          }
          return (d.prefix || "") + b + (d.suffix || "");
        }, P.toFraction = function(l) {
          var u, d, b, p, y, S, g, w, v, m, E, q, $ = this, z = $.c;
          if (l != null && (g = new k(l), !g.isInteger() && (g.c || g.s !== 1) || g.lt(J)))
            throw Error(o + "Argument " + (g.isInteger() ? "out of range: " : "not an integer: ") + ie(g));
          if (!z) return new k($);
          for (u = new k(J), v = d = new k(J), b = w = new k(J), q = D(z), y = u.e = q.length - $.e - 1, u.c[0] = T[(S = y % f) < 0 ? f + S : S], l = !l || g.comparedTo(u) > 0 ? y > 0 ? u : v : g, S = ce, ce = 1 / 0, g = new k(q), w.c[0] = 0; m = R(g, u, 0, 1), p = d.plus(m.times(b)), p.comparedTo(l) != 1; )
            d = b, b = p, v = w.plus(m.times(p = v)), w = p, u = g.minus(m.times(p = u)), g = p;
          return p = R(l.minus(d), b, 0, 1), w = w.plus(p.times(v)), d = d.plus(p.times(b)), w.s = v.s = $.s, y = y * 2, E = R(v, b, y, j).minus($).abs().comparedTo(
            R(w, d, y, j).minus($).abs()
          ) < 1 ? [v, b] : [w, d], ce = S, E;
        }, P.toNumber = function() {
          return +ie(this);
        }, P.toPrecision = function(l, u) {
          return l != null && L(l, 1, A), ne(this, l, u, 2);
        }, P.toString = function(l) {
          var u, d = this, b = d.s, p = d.e;
          return p === null ? b ? (u = "Infinity", b < 0 && (u = "-" + u)) : u = "NaN" : (l == null ? u = p <= H || p >= V ? ee(D(d.c), p) : N(D(d.c), p, "0") : l === 10 && Y ? (d = se(new k(d), W + p + 1, j), u = N(D(d.c), d.e, "0")) : (L(l, 2, Z.length, "Base"), u = U(N(D(d.c), p, "0"), 10, l, b, !0)), b < 0 && d.c[0] && (u = "-" + u)), u;
        }, P.valueOf = P.toJSON = function() {
          return ie(this);
        }, P._isBigNumber = !0, O != null && k.set(O), k;
      }
      function _(O) {
        var R = O | 0;
        return O > 0 || O === R ? R : R - 1;
      }
      function D(O) {
        for (var R, U, K = 1, P = O.length, J = O[0] + ""; K < P; ) {
          for (R = O[K++] + "", U = f - R.length; U--; R = "0" + R) ;
          J += R;
        }
        for (P = J.length; J.charCodeAt(--P) === 48; ) ;
        return J.slice(0, P + 1 || 1);
      }
      function F(O, R) {
        var U, K, P = O.c, J = R.c, W = O.s, j = R.s, H = O.e, V = R.e;
        if (!W || !j) return null;
        if (U = P && !P[0], K = J && !J[0], U || K) return U ? K ? 0 : -j : W;
        if (W != j) return W;
        if (U = W < 0, K = H == V, !P || !J) return K ? 0 : !P ^ U ? 1 : -1;
        if (!K) return H > V ^ U ? 1 : -1;
        for (j = (H = P.length) < (V = J.length) ? H : V, W = 0; W < j; W++) if (P[W] != J[W]) return P[W] > J[W] ^ U ? 1 : -1;
        return H == V ? 0 : H > V ^ U ? 1 : -1;
      }
      function L(O, R, U, K) {
        if (O < R || O > U || O !== c(O))
          throw Error(o + (K || "Argument") + (typeof O == "number" ? O < R || O > U ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(O));
      }
      function M(O) {
        var R = O.c.length - 1;
        return _(O.e / f) == R && O.c[R] % 2 != 0;
      }
      function ee(O, R) {
        return (O.length > 1 ? O.charAt(0) + "." + O.slice(1) : O) + (R < 0 ? "e" : "e+") + R;
      }
      function N(O, R, U) {
        var K, P;
        if (R < 0) {
          for (P = U + "."; ++R; P += U) ;
          O = P + O;
        } else if (K = O.length, ++R > K) {
          for (P = U, R -= K; --R; P += U) ;
          O += P;
        } else R < K && (O = O.slice(0, R) + "." + O.slice(R));
        return O;
      }
      r = x(), r.default = r.BigNumber = r, i.exports ? i.exports = r : (t || (t = typeof self < "u" && self ? self : window), t.BigNumber = r);
    })(mr);
  }(nt)), nt.exports;
}
var Et;
function vr() {
  if (Et) return ze;
  Et = 1, Object.defineProperty(ze, "__esModule", { value: !0 });
  const i = br();
  class t {
    /**
     * Method to take a string value and return a bignumber object.
     *
     * @protected
     * @type {Function}
     * @memberof Arweave
     */
    BigNum;
    constructor() {
      this.BigNum = (s, n) => {
        let c = i.BigNumber.clone({ DECIMAL_PLACES: n });
        return new c(s);
      };
    }
    winstonToAr(s, { formatted: n = !1, decimals: c = 12, trim: o = !0 } = {}) {
      let a = this.stringToBigNum(s, c).shiftedBy(-12);
      return n ? a.toFormat(c) : a.toFixed(c);
    }
    arToWinston(s, { formatted: n = !1 } = {}) {
      let c = this.stringToBigNum(s).shiftedBy(12);
      return n ? c.toFormat() : c.toFixed(0);
    }
    compare(s, n) {
      let c = this.stringToBigNum(s), o = this.stringToBigNum(n);
      return c.comparedTo(o);
    }
    isEqual(s, n) {
      return this.compare(s, n) === 0;
    }
    isLessThan(s, n) {
      let c = this.stringToBigNum(s), o = this.stringToBigNum(n);
      return c.isLessThan(o);
    }
    isGreaterThan(s, n) {
      let c = this.stringToBigNum(s), o = this.stringToBigNum(n);
      return c.isGreaterThan(o);
    }
    add(s, n) {
      let c = this.stringToBigNum(s);
      return this.stringToBigNum(n), c.plus(n).toFixed(0);
    }
    sub(s, n) {
      let c = this.stringToBigNum(s);
      return this.stringToBigNum(n), c.minus(n).toFixed(0);
    }
    stringToBigNum(s, n = 12) {
      return this.BigNum(s, n);
    }
  }
  return ze.default = t, ze;
}
var Ve = {}, Ot;
function Sr() {
  if (Ot) return Ve;
  Ot = 1, Object.defineProperty(Ve, "__esModule", { value: !0 });
  class i {
    METHOD_GET = "GET";
    METHOD_POST = "POST";
    config;
    constructor(n) {
      this.applyConfig(n);
    }
    applyConfig(n) {
      this.config = this.mergeDefaults(n);
    }
    getConfig() {
      return this.config;
    }
    mergeDefaults(n) {
      const c = n.protocol || "http", o = n.port || (c === "https" ? 443 : 80);
      return {
        host: n.host || "127.0.0.1",
        protocol: c,
        port: o,
        timeout: n.timeout || 2e4,
        logging: n.logging || !1,
        logger: n.logger || console.log,
        network: n.network
      };
    }
    async get(n, c) {
      return await this.request(n, { ...c, method: this.METHOD_GET });
    }
    async post(n, c, o) {
      const a = new Headers(o?.headers || {});
      return a.get("content-type")?.includes("application/json") || a.append("content-type", "application/json"), a.append("accept", "application/json, text/plain, */*"), await this.request(n, {
        ...o,
        method: this.METHOD_POST,
        body: typeof c != "string" ? JSON.stringify(c) : c,
        headers: a
      });
    }
    async request(n, c) {
      const o = new Headers(c?.headers || {}), a = `${this.config.protocol}://${this.config.host}:${this.config.port}`, h = c?.responseType;
      delete c?.responseType, n.startsWith("/") && (n = n.slice(1)), this.config.network && o.append("x-network", this.config.network), this.config.logging && this.config.logger(`Requesting: ${a}/${n}`);
      let f = await fetch(`${a}/${n}`, {
        ...c || {},
        headers: o
      });
      this.config.logging && this.config.logger(`Response:   ${f.url} - ${f.status}`);
      const T = f.headers.get("content-type")?.match(/charset=([^()<>@,;:\"/[\]?.=\s]*)/i)?.[1], I = f, A = async () => {
        if (T)
          try {
            I.data = new TextDecoder(T).decode(await f.arrayBuffer());
          } catch {
            I.data = await f.text();
          }
        else
          I.data = await f.text();
      };
      if (h === "arraybuffer")
        I.data = await f.arrayBuffer();
      else if (h === "text")
        await A();
      else if (h === "webstream")
        I.data = t(f.body);
      else
        try {
          let x = await f.clone().json();
          typeof x != "object" ? await A() : I.data = await f.json(), x = null;
        } catch {
          await A();
        }
      return I;
    }
  }
  Ve.default = i;
  const t = (s) => {
    const n = s;
    return typeof n[Symbol.asyncIterator] > "u" && (n[Symbol.asyncIterator] = r(s)), n;
  }, r = function(s) {
    return async function* () {
      const c = s.getReader();
      try {
        for (; ; ) {
          const { done: o, value: a } = await c.read();
          if (o)
            return;
          yield a;
        }
      } finally {
        c.releaseLock();
      }
    };
  };
  return Ve;
}
var Xe = {}, _t;
function Ar() {
  if (_t) return Xe;
  _t = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const i = _e();
  class t {
    keyLength = 4096;
    publicExponent = 65537;
    hashAlgorithm = "sha256";
    driver;
    constructor() {
      if (!this.detectWebCrypto())
        throw new Error("SubtleCrypto not available!");
      this.driver = crypto.subtle;
    }
    async generateJWK() {
      let s = await this.driver.generateKey({
        name: "RSA-PSS",
        modulusLength: 4096,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: {
          name: "SHA-256"
        }
      }, !0, ["sign"]), n = await this.driver.exportKey("jwk", s.privateKey);
      return {
        kty: n.kty,
        e: n.e,
        n: n.n,
        d: n.d,
        p: n.p,
        q: n.q,
        dp: n.dp,
        dq: n.dq,
        qi: n.qi
      };
    }
    async sign(s, n, { saltLength: c } = {}) {
      let o = await this.driver.sign({
        name: "RSA-PSS",
        saltLength: c ?? 32
      }, await this.jwkToCryptoKey(s), n);
      return new Uint8Array(o);
    }
    async hash(s, n = "SHA-256") {
      let c = await this.driver.digest(n, s);
      return new Uint8Array(c);
    }
    async verify(s, n, c) {
      const o = {
        kty: "RSA",
        e: "AQAB",
        n: s
      }, a = await this.jwkToPublicCryptoKey(o), h = await this.driver.digest("SHA-256", n), f = await this.driver.verify({
        name: "RSA-PSS",
        saltLength: 0
      }, a, c, n), C = await this.driver.verify({
        name: "RSA-PSS",
        saltLength: 32
      }, a, c, n), T = Math.ceil((a.algorithm.modulusLength - 1) / 8) - h.byteLength - 2, I = await this.driver.verify({
        name: "RSA-PSS",
        saltLength: T
      }, a, c, n), A = f || C || I;
      if (!A) {
        const x = {
          algorithm: a.algorithm.name,
          modulusLength: a.algorithm.modulusLength,
          keyUsages: a.usages,
          saltLengthsAttempted: `0, 32, ${T}`
        };
        console.warn(`Transaction Verification Failed! 
`, `Details: ${JSON.stringify(x, null, 2)} 
`, "N.B. ArweaveJS is only guaranteed to verify txs created using ArweaveJS.");
      }
      return A;
    }
    async jwkToCryptoKey(s) {
      return this.driver.importKey("jwk", s, {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        }
      }, !1, ["sign"]);
    }
    async jwkToPublicCryptoKey(s) {
      return this.driver.importKey("jwk", s, {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        }
      }, !1, ["verify"]);
    }
    detectWebCrypto() {
      if (typeof crypto > "u")
        return !1;
      const s = crypto?.subtle;
      return s === void 0 ? !1 : [
        "generateKey",
        "importKey",
        "exportKey",
        "digest",
        "sign"
      ].every((c) => typeof s[c] == "function");
    }
    async encrypt(s, n, c) {
      const o = await this.driver.importKey("raw", typeof n == "string" ? i.stringToBuffer(n) : n, {
        name: "PBKDF2",
        length: 32
      }, !1, ["deriveKey"]), a = await this.driver.deriveKey({
        name: "PBKDF2",
        salt: c ? i.stringToBuffer(c) : i.stringToBuffer("salt"),
        iterations: 1e5,
        hash: "SHA-256"
      }, o, {
        name: "AES-CBC",
        length: 256
      }, !1, ["encrypt", "decrypt"]), h = new Uint8Array(16);
      crypto.getRandomValues(h);
      const f = await this.driver.encrypt({
        name: "AES-CBC",
        iv: h
      }, a, s);
      return i.concatBuffers([h, f]);
    }
    async decrypt(s, n, c) {
      const o = await this.driver.importKey("raw", typeof n == "string" ? i.stringToBuffer(n) : n, {
        name: "PBKDF2",
        length: 32
      }, !1, ["deriveKey"]), a = await this.driver.deriveKey({
        name: "PBKDF2",
        salt: c ? i.stringToBuffer(c) : i.stringToBuffer("salt"),
        iterations: 1e5,
        hash: "SHA-256"
      }, o, {
        name: "AES-CBC",
        length: 256
      }, !1, ["encrypt", "decrypt"]), h = s.slice(0, 16), f = await this.driver.decrypt({
        name: "AES-CBC",
        iv: h
      }, a, s.slice(16));
      return i.concatBuffers([f]);
    }
  }
  return Xe.default = t, Xe;
}
var Ze = {}, kt;
function Cr() {
  if (kt) return Ze;
  kt = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  class i {
    api;
    constructor(r) {
      this.api = r;
    }
    getInfo() {
      return this.api.get("info").then((r) => r.data);
    }
    getPeers() {
      return this.api.get("peers").then((r) => r.data);
    }
  }
  return Ze.default = i, Ze;
}
var Ye = {}, Me = {}, Rt;
function ot() {
  if (Rt) return Me;
  Rt = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.getError = t;
  class i extends Error {
    type;
    response;
    constructor(s, n = {}) {
      n.message ? super(n.message) : super(), this.type = s, this.response = n.response;
    }
    getType() {
      return this.type;
    }
  }
  Me.default = i;
  function t(r) {
    let s = r.data;
    if (typeof r.data == "string")
      try {
        s = JSON.parse(r.data);
      } catch {
      }
    if (r.data instanceof ArrayBuffer || r.data instanceof Uint8Array)
      try {
        s = JSON.parse(s.toString());
      } catch {
      }
    return s ? s.error || s : r.statusText || "unknown";
  }
  return Me;
}
var Ke = {}, ut = {}, Pt;
function Zt() {
  return Pt || (Pt = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.arrayCompare = i.MIN_CHUNK_SIZE = i.MAX_CHUNK_SIZE = void 0, i.chunkData = c, i.generateLeaves = o, i.computeRootHash = a, i.generateTree = h, i.generateTransactionChunks = f, i.buildLayers = C, i.generateProofs = T, i.arrayFlatten = A, i.intToBuffer = D, i.bufferToInt = F, i.validatePath = M, i.debug = ee;
    const t = st(), r = _e();
    i.MAX_CHUNK_SIZE = 256 * 1024, i.MIN_CHUNK_SIZE = 32 * 1024;
    const s = 32, n = 32;
    async function c(N) {
      let O = [], R = N, U = 0;
      for (; R.byteLength >= i.MAX_CHUNK_SIZE; ) {
        let K = i.MAX_CHUNK_SIZE, P = R.byteLength - i.MAX_CHUNK_SIZE;
        P > 0 && P < i.MIN_CHUNK_SIZE && (K = Math.ceil(R.byteLength / 2));
        const J = R.slice(0, K), W = await t.default.crypto.hash(J);
        U += J.byteLength, O.push({
          dataHash: W,
          minByteRange: U - J.byteLength,
          maxByteRange: U
        }), R = R.slice(K);
      }
      return O.push({
        dataHash: await t.default.crypto.hash(R),
        minByteRange: U,
        maxByteRange: U + R.byteLength
      }), O;
    }
    async function o(N) {
      return Promise.all(N.map(async ({ dataHash: O, minByteRange: R, maxByteRange: U }) => ({
        type: "leaf",
        id: await _(await Promise.all([_(O), _(D(U))])),
        dataHash: O,
        minByteRange: R,
        maxByteRange: U
      })));
    }
    async function a(N) {
      return (await h(N)).id;
    }
    async function h(N) {
      return await C(await o(await c(N)));
    }
    async function f(N) {
      const O = await c(N), R = await o(O), U = await C(R), K = await T(U), P = O.slice(-1)[0];
      return P.maxByteRange - P.minByteRange === 0 && (O.splice(O.length - 1, 1), K.splice(K.length - 1, 1)), {
        data_root: U.id,
        chunks: O,
        proofs: K
      };
    }
    async function C(N, O = 0) {
      if (N.length < 2)
        return N[0];
      const R = [];
      for (let U = 0; U < N.length; U += 2)
        R.push(await x(N[U], N[U + 1]));
      return C(R, O + 1);
    }
    function T(N) {
      const O = I(N);
      return Array.isArray(O) ? A(O) : [O];
    }
    function I(N, O = new Uint8Array(), R = 0) {
      if (N.type == "leaf")
        return {
          offset: N.maxByteRange - 1,
          proof: (0, r.concatBuffers)([
            O,
            N.dataHash,
            D(N.maxByteRange)
          ])
        };
      if (N.type == "branch") {
        const U = (0, r.concatBuffers)([
          O,
          N.leftChild.id,
          N.rightChild.id,
          D(N.byteRange)
        ]);
        return [
          I(N.leftChild, U, R + 1),
          I(N.rightChild, U, R + 1)
        ];
      }
      throw new Error("Unexpected node type");
    }
    function A(N) {
      const O = [];
      return N.forEach((R) => {
        Array.isArray(R) ? O.push(...A(R)) : O.push(R);
      }), O;
    }
    async function x(N, O) {
      return O ? {
        type: "branch",
        id: await _([
          await _(N.id),
          await _(O.id),
          await _(D(N.maxByteRange))
        ]),
        byteRange: N.maxByteRange,
        maxByteRange: O.maxByteRange,
        leftChild: N,
        rightChild: O
      } : N;
    }
    async function _(N) {
      return Array.isArray(N) && (N = t.default.utils.concatBuffers(N)), new Uint8Array(await t.default.crypto.hash(N));
    }
    function D(N) {
      const O = new Uint8Array(s);
      for (var R = O.length - 1; R >= 0; R--) {
        var U = N % 256;
        O[R] = U, N = (N - U) / 256;
      }
      return O;
    }
    function F(N) {
      let O = 0;
      for (var R = 0; R < N.length; R++)
        O *= 256, O += N[R];
      return O;
    }
    const L = (N, O) => N.every((R, U) => O[U] === R);
    i.arrayCompare = L;
    async function M(N, O, R, U, K) {
      if (U <= 0)
        return !1;
      if (O >= U)
        return M(N, 0, U - 1, U, K);
      if (O < 0)
        return M(N, 0, 0, U, K);
      if (K.length == n + s) {
        const ae = K.slice(0, n), ce = K.slice(ae.length, ae.length + s), ye = await _([
          await _(ae),
          await _(ce)
        ]);
        return (0, i.arrayCompare)(N, ye) ? {
          offset: U - 1,
          leftBound: R,
          rightBound: U,
          chunkSize: U - R
        } : !1;
      }
      const P = K.slice(0, n), J = K.slice(P.length, P.length + n), W = K.slice(P.length + J.length, P.length + J.length + s), j = F(W), H = K.slice(P.length + J.length + W.length), V = await _([
        await _(P),
        await _(J),
        await _(W)
      ]);
      return (0, i.arrayCompare)(N, V) ? O < j ? await M(P, O, R, Math.min(U, j), H) : await M(J, O, Math.max(R, j), U, H) : !1;
    }
    async function ee(N, O = "") {
      if (N.byteLength < 1)
        return O;
      const R = N.slice(0, n), U = N.slice(R.length, R.length + n), K = N.slice(R.length + U.length, R.length + U.length + s), P = F(K), J = N.slice(R.length + U.length + K.length), W = await _([
        await _(R),
        await _(U),
        await _(K)
      ]), j = `${O}
${JSON.stringify(Buffer.from(R))},${JSON.stringify(Buffer.from(U))},${P} => ${JSON.stringify(W)}`;
      return ee(J, j);
    }
  }(ut)), ut;
}
var Nt;
function Tr() {
  if (Nt) return Ke;
  Nt = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.TransactionUploader = void 0;
  const i = at(), t = _e(), r = ot(), s = Zt(), n = 1, c = [
    "invalid_json",
    "chunk_too_big",
    "data_path_too_big",
    "offset_too_big",
    "data_size_too_big",
    "chunk_proof_ratio_not_attractive",
    "invalid_proof"
  ], o = 1e3 * 40;
  class a {
    api;
    chunkIndex = 0;
    txPosted = !1;
    transaction;
    lastRequestTimeEnd = 0;
    totalErrors = 0;
    // Not serialized.
    data;
    lastResponseStatus = 0;
    lastResponseError = "";
    get isComplete() {
      return this.txPosted && this.chunkIndex === this.transaction.chunks.chunks.length;
    }
    get totalChunks() {
      return this.transaction.chunks.chunks.length;
    }
    get uploadedChunks() {
      return this.chunkIndex;
    }
    get pctComplete() {
      return Math.trunc(this.uploadedChunks / this.totalChunks * 100);
    }
    constructor(f, C) {
      if (this.api = f, !C.id)
        throw new Error("Transaction is not signed");
      if (!C.chunks)
        throw new Error("Transaction chunks not prepared");
      this.data = C.data, this.transaction = new i.default(Object.assign({}, C, { data: new Uint8Array(0) }));
    }
    /**
     * Uploads the next part of the transaction.
     * On the first call this posts the transaction
     * itself and on any subsequent calls uploads the
     * next chunk until it completes.
     */
    async uploadChunk(f) {
      if (this.isComplete)
        throw new Error("Upload is already complete");
      if (this.lastResponseError !== "" ? this.totalErrors++ : this.totalErrors = 0, this.totalErrors === 100)
        throw new Error(`Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`);
      let C = this.lastResponseError === "" ? 0 : Math.max(this.lastRequestTimeEnd + o - Date.now(), o);
      if (C > 0 && (C = C - C * Math.random() * 0.3, await new Promise((x) => setTimeout(x, C))), this.lastResponseError = "", !this.txPosted) {
        await this.postTransaction();
        return;
      }
      f && (this.chunkIndex = f);
      const T = this.transaction.getChunk(f || this.chunkIndex, this.data);
      if (!await (0, s.validatePath)(this.transaction.chunks.data_root, parseInt(T.offset), 0, parseInt(T.data_size), t.b64UrlToBuffer(T.data_path)))
        throw new Error(`Unable to validate chunk ${this.chunkIndex}`);
      const A = await this.api.post("chunk", this.transaction.getChunk(this.chunkIndex, this.data)).catch((x) => (console.error(x.message), { status: -1, data: { error: x.message } }));
      if (this.lastRequestTimeEnd = Date.now(), this.lastResponseStatus = A.status, this.lastResponseStatus == 200)
        this.chunkIndex++;
      else if (this.lastResponseError = (0, r.getError)(A), c.includes(this.lastResponseError))
        throw new Error(`Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`);
    }
    /**
     * Reconstructs an upload from its serialized state and data.
     * Checks if data matches the expected data_root.
     *
     * @param serialized
     * @param data
     */
    static async fromSerialized(f, C, T) {
      if (!C || typeof C.chunkIndex != "number" || typeof C.transaction != "object")
        throw new Error("Serialized object does not match expected format.");
      var I = new i.default(C.transaction);
      I.chunks || await I.prepareChunks(T);
      const A = new a(f, I);
      if (A.chunkIndex = C.chunkIndex, A.lastRequestTimeEnd = C.lastRequestTimeEnd, A.lastResponseError = C.lastResponseError, A.lastResponseStatus = C.lastResponseStatus, A.txPosted = C.txPosted, A.data = T, A.transaction.data_root !== C.transaction.data_root)
        throw new Error("Data mismatch: Uploader doesn't match provided data.");
      return A;
    }
    /**
     * Reconstruct an upload from the tx metadata, ie /tx/<id>.
     *
     * @param api
     * @param id
     * @param data
     */
    static async fromTransactionId(f, C) {
      const T = await f.get(`tx/${C}`);
      if (T.status !== 200)
        throw new Error(`Tx ${C} not found: ${T.status}`);
      const I = T.data;
      return I.data = new Uint8Array(0), {
        txPosted: !0,
        chunkIndex: 0,
        lastResponseError: "",
        lastRequestTimeEnd: 0,
        lastResponseStatus: 0,
        transaction: I
      };
    }
    toJSON() {
      return {
        chunkIndex: this.chunkIndex,
        transaction: this.transaction,
        lastRequestTimeEnd: this.lastRequestTimeEnd,
        lastResponseStatus: this.lastResponseStatus,
        lastResponseError: this.lastResponseError,
        txPosted: this.txPosted
      };
    }
    // POST to /tx
    async postTransaction() {
      if (this.totalChunks <= n) {
        this.transaction.data = this.data;
        const T = await this.api.post("tx", this.transaction).catch((I) => (console.error(I), { status: -1, data: { error: I.message } }));
        if (this.lastRequestTimeEnd = Date.now(), this.lastResponseStatus = T.status, this.transaction.data = new Uint8Array(0), T.status >= 200 && T.status < 300) {
          this.txPosted = !0, this.chunkIndex = n;
          return;
        }
        throw this.lastResponseError = (0, r.getError)(T), new Error(`Unable to upload transaction: ${T.status}, ${this.lastResponseError}`);
      }
      const C = await this.api.post("tx", this.transaction);
      if (this.lastRequestTimeEnd = Date.now(), this.lastResponseStatus = C.status, !(C.status >= 200 && C.status < 300))
        throw this.lastResponseError = (0, r.getError)(C), new Error(`Unable to upload transaction: ${C.status}, ${this.lastResponseError}`);
      this.txPosted = !0;
    }
  }
  return Ke.TransactionUploader = a, Ke;
}
var It;
function Er() {
  if (It) return Ye;
  It = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const i = ot(), t = at(), r = _e(), s = Tr();
  class n {
    api;
    crypto;
    chunks;
    constructor(o, a, h) {
      this.api = o, this.crypto = a, this.chunks = h;
    }
    async getTransactionAnchor() {
      const o = await this.api.get("tx_anchor");
      if (!o.data.match(/^[a-z0-9_-]{43,}/i) || !o.ok)
        throw new Error(`Could not getTransactionAnchor. Received: ${o.data}. Status: ${o.status}, ${o.statusText}`);
      return o.data;
    }
    async getPrice(o, a) {
      let h = a ? `price/${o}/${a}` : `price/${o}`;
      const f = await this.api.get(h);
      if (!/^\d+$/.test(f.data) || !f.ok)
        throw new Error(`Could not getPrice. Received: ${f.data}. Status: ${f.status}, ${f.statusText}`);
      return f.data;
    }
    async get(o) {
      const a = await this.api.get(`tx/${o}`);
      if (a.status == 200) {
        const h = parseInt(a.data.data_size);
        if (a.data.format >= 2 && h > 0 && h <= 1024 * 1024 * 12) {
          const f = await this.getData(o);
          return new t.default({
            ...a.data,
            data: f
          });
        }
        return new t.default({
          ...a.data,
          format: a.data.format || 1
        });
      }
      throw a.status == 404 ? new i.default(
        "TX_NOT_FOUND"
        /* ArweaveErrorType.TX_NOT_FOUND */
      ) : a.status == 410 ? new i.default(
        "TX_FAILED"
        /* ArweaveErrorType.TX_FAILED */
      ) : new i.default(
        "TX_INVALID"
        /* ArweaveErrorType.TX_INVALID */
      );
    }
    fromRaw(o) {
      return new t.default(o);
    }
    /** @deprecated use GQL https://gql-guide.arweave.net */
    async search(o, a) {
      return this.api.post("arql", {
        op: "equals",
        expr1: o,
        expr2: a
      }).then((h) => h.data ? h.data : []);
    }
    getStatus(o) {
      return this.api.get(`tx/${o}/status`).then((a) => a.status == 200 ? {
        status: 200,
        confirmed: a.data
      } : {
        status: a.status,
        confirmed: null
      });
    }
    async getData(o, a) {
      let h;
      try {
        h = await this.chunks.downloadChunkedData(o);
      } catch (f) {
        console.error(`Error while trying to download chunked data for ${o}`), console.error(f);
      }
      if (!h) {
        console.warn(`Falling back to gateway cache for ${o}`);
        try {
          const { data: f, ok: C, status: T, statusText: I } = await this.api.get(`/${o}`, { responseType: "arraybuffer" });
          if (!C)
            throw new Error("Bad http status code", {
              cause: { status: T, statusText: I }
            });
          h = f;
        } catch (f) {
          console.error(`Error while trying to download contiguous data from gateway cache for ${o}`), console.error(f);
        }
      }
      if (!h)
        throw new Error(`${o} data was not found!`);
      return a && a.decode && !a.string ? h : a && a.decode && a.string ? r.bufferToString(h) : r.bufferTob64Url(h);
    }
    async sign(o, a, h) {
      const C = typeof a == "object" && ((I) => {
        let A = !0;
        return ["n", "e", "d", "p", "q", "dp", "dq", "qi"].map((x) => !(x in I) && (A = !1)), A;
      })(a), T = typeof arweaveWallet == "object";
      if (!C && !T)
        throw new Error("No valid JWK or external wallet found to sign transaction.");
      if (C) {
        o.setOwner(a.n);
        let I = await o.getSignatureData(), A = await this.crypto.sign(a, I, h), x = await this.crypto.hash(A);
        o.setSignature({
          id: r.bufferTob64Url(x),
          owner: a.n,
          signature: r.bufferTob64Url(A)
        });
      } else if (T) {
        try {
          (await arweaveWallet.getPermissions()).includes("SIGN_TRANSACTION") || await arweaveWallet.connect(["SIGN_TRANSACTION"]);
        } catch {
        }
        const I = await arweaveWallet.sign(o, h);
        o.setSignature({
          id: I.id,
          owner: I.owner,
          reward: I.reward,
          tags: I.tags,
          signature: I.signature
        });
      } else
        throw new Error("An error occurred while signing. Check wallet is valid");
    }
    async verify(o) {
      const a = await o.getSignatureData(), h = o.get("signature", {
        decode: !0,
        string: !1
      }), f = r.bufferTob64Url(await this.crypto.hash(h));
      if (o.id !== f)
        throw new Error("Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.");
      return this.crypto.verify(o.owner, a, h);
    }
    async post(o) {
      if (typeof o == "string" ? o = new t.default(JSON.parse(o)) : typeof o.readInt32BE == "function" ? o = new t.default(JSON.parse(o.toString())) : typeof o == "object" && !(o instanceof t.default) && (o = new t.default(o)), !(o instanceof t.default))
        throw new Error("Must be Transaction object");
      o.chunks || await o.prepareChunks(o.data);
      const a = await this.getUploader(o, o.data);
      try {
        for (; !a.isComplete; )
          await a.uploadChunk();
      } catch (h) {
        if (a.lastResponseStatus > 0)
          return {
            status: a.lastResponseStatus,
            statusText: a.lastResponseError,
            data: {
              error: a.lastResponseError
            }
          };
        throw h;
      }
      return {
        status: 200,
        statusText: "OK",
        data: {}
      };
    }
    /**
     * Gets an uploader than can be used to upload a transaction chunk by chunk, giving progress
     * and the ability to resume.
     *
     * Usage example:
     *
     * ```
     * const uploader = arweave.transactions.getUploader(transaction);
     * while (!uploader.isComplete) {
     *   await uploader.uploadChunk();
     *   console.log(`${uploader.pctComplete}%`);
     * }
     * ```
     *
     * @param upload a Transaction object, a previously save progress object, or a transaction id.
     * @param data the data of the transaction. Required when resuming an upload.
     */
    async getUploader(o, a) {
      let h;
      if (a instanceof ArrayBuffer && (a = new Uint8Array(a)), o instanceof t.default) {
        if (a || (a = o.data), !(a instanceof Uint8Array))
          throw new Error("Data format is invalid");
        o.chunks || await o.prepareChunks(a), h = new s.TransactionUploader(this.api, o), (!h.data || h.data.length === 0) && (h.data = a);
      } else {
        if (typeof o == "string" && (o = await s.TransactionUploader.fromTransactionId(this.api, o)), !a || !(a instanceof Uint8Array))
          throw new Error("Must provide data when resuming upload");
        h = await s.TransactionUploader.fromSerialized(this.api, o, a);
      }
      return h;
    }
    /**
     * Async generator version of uploader
     *
     * Usage example:
     *
     * ```
     * for await (const uploader of arweave.transactions.upload(tx)) {
     *  console.log(`${uploader.pctComplete}%`);
     * }
     * ```
     *
     * @param upload a Transaction object, a previously save uploader, or a transaction id.
     * @param data the data of the transaction. Required when resuming an upload.
     */
    async *upload(o, a) {
      const h = await this.getUploader(o, a);
      for (; !h.isComplete; )
        await h.uploadChunk(), yield h;
      return h;
    }
  }
  return Ye.default = n, Ye;
}
var Qe = {}, xt;
function Or() {
  if (xt) return Qe;
  xt = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const i = _e();
  class t {
    api;
    crypto;
    constructor(s, n) {
      this.api = s, this.crypto = n;
    }
    /**
     * Get the wallet balance for the given address.
     *
     * @param {string} address - The arweave address to get the balance for.
     *
     * @returns {Promise<string>} - Promise which resolves with a winston string balance.
     */
    getBalance(s) {
      return this.api.get(`wallet/${s}/balance`).then((n) => n.data);
    }
    /**
     * Get the last transaction ID for the given wallet address.
     *
     * @param {string} address - The arweave address to get the transaction for.
     *
     * @returns {Promise<string>} - Promise which resolves with a transaction ID.
     */
    getLastTransactionID(s) {
      return this.api.get(`wallet/${s}/last_tx`).then((n) => n.data);
    }
    generate() {
      return this.crypto.generateJWK();
    }
    async jwkToAddress(s) {
      return !s || s === "use_wallet" ? this.getAddress() : this.getAddress(s);
    }
    async getAddress(s) {
      if (!s || s === "use_wallet") {
        try {
          await arweaveWallet.connect(["ACCESS_ADDRESS"]);
        } catch {
        }
        return arweaveWallet.getActiveAddress();
      } else
        return this.ownerToAddress(s.n);
    }
    async ownerToAddress(s) {
      return i.bufferTob64Url(await this.crypto.hash(i.b64UrlToBuffer(s)));
    }
  }
  return Qe.default = t, Qe;
}
var Ue = {}, Ut;
function _r() {
  if (Ut) return Ue;
  Ut = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.SiloResource = void 0;
  const i = _e();
  class t {
    api;
    crypto;
    transactions;
    constructor(n, c, o) {
      this.api = n, this.crypto = c, this.transactions = o;
    }
    async get(n) {
      if (!n)
        throw new Error("No Silo URI specified");
      const c = await this.parseUri(n), o = await this.transactions.search("Silo-Name", c.getAccessKey());
      if (o.length == 0)
        throw new Error(`No data could be found for the Silo URI: ${n}`);
      const a = await this.transactions.get(o[0]);
      if (!a)
        throw new Error(`No data could be found for the Silo URI: ${n}`);
      const h = a.get("data", { decode: !0, string: !1 });
      return this.crypto.decrypt(h, c.getEncryptionKey());
    }
    async readTransactionData(n, c) {
      if (!c)
        throw new Error("No Silo URI specified");
      const o = await this.parseUri(c), a = n.get("data", { decode: !0, string: !1 });
      return this.crypto.decrypt(a, o.getEncryptionKey());
    }
    async parseUri(n) {
      const c = n.match(/^([a-z0-9-_]+)\.([0-9]+)/i);
      if (!c)
        throw new Error("Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'");
      const o = c[1], a = Math.pow(2, parseInt(c[2])), h = await this.hash(i.stringToBuffer(o), a), f = i.bufferTob64(h.slice(0, 15)), C = await this.hash(h.slice(16, 31), 1);
      return new r(n, f, C);
    }
    async hash(n, c) {
      let o = await this.crypto.hash(n);
      for (let a = 0; a < c - 1; a++)
        o = await this.crypto.hash(o);
      return o;
    }
  }
  Ue.default = t;
  class r {
    uri;
    accessKey;
    encryptionKey;
    constructor(n, c, o) {
      this.uri = n, this.accessKey = c, this.encryptionKey = o;
    }
    getUri() {
      return this.uri;
    }
    getAccessKey() {
      return this.accessKey;
    }
    getEncryptionKey() {
      return this.encryptionKey;
    }
  }
  return Ue.SiloResource = r, Ue;
}
var et = {}, Lt;
function kr() {
  if (Lt) return et;
  Lt = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  const i = ot(), t = _e();
  class r {
    api;
    constructor(n) {
      this.api = n;
    }
    async getTransactionOffset(n) {
      const c = await this.api.get(`tx/${n}/offset`);
      if (c.status === 200)
        return c.data;
      throw new Error(`Unable to get transaction offset: ${(0, i.getError)(c)}`);
    }
    async getChunk(n) {
      const c = await this.api.get(`chunk/${n}`);
      if (c.status === 200)
        return c.data;
      throw new Error(`Unable to get chunk: ${(0, i.getError)(c)}`);
    }
    async getChunkData(n) {
      const c = await this.getChunk(n);
      return t.b64UrlToBuffer(c.chunk);
    }
    firstChunkOffset(n) {
      return parseInt(n.offset) - parseInt(n.size) + 1;
    }
    async downloadChunkedData(n) {
      const c = await this.getTransactionOffset(n), o = parseInt(c.size), h = parseInt(c.offset) - o + 1, f = new Uint8Array(o);
      let C = 0;
      for (; C < o; ) {
        this.api.config.logging && console.log(`[chunk] ${C}/${o}`);
        let T;
        try {
          T = await this.getChunkData(h + C);
        } catch {
          console.error(`[chunk] Failed to fetch chunk at offset ${h + C}`), console.error("[chunk] This could indicate that the chunk wasn't uploaded or hasn't yet seeded properly to a particular gateway/node");
        }
        if (T)
          f.set(T, C), C += T.length;
        else
          throw new Error(`Couldn't complete data download at ${C}/${o}`);
      }
      return f;
    }
  }
  return et.default = r, et;
}
var tt = {}, Dt;
function Rr() {
  if (Dt) return tt;
  Dt = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const i = ot();
  class t {
    api;
    network;
    static HASH_ENDPOINT = "block/hash/";
    static HEIGHT_ENDPOINT = "block/height/";
    constructor(s, n) {
      this.api = s, this.network = n;
    }
    /**
     * Gets a block by its "indep_hash"
     */
    async get(s) {
      const n = await this.api.get(`${t.HASH_ENDPOINT}${s}`);
      if (n.status === 200)
        return n.data;
      throw n.status === 404 ? new i.default(
        "BLOCK_NOT_FOUND"
        /* ArweaveErrorType.BLOCK_NOT_FOUND */
      ) : new Error(`Error while loading block data: ${n}`);
    }
    /**
     * Gets a block by its "height"
     */
    async getByHeight(s) {
      const n = await this.api.get(`${t.HEIGHT_ENDPOINT}${s}`);
      if (n.status === 200)
        return n.data;
      throw n.status === 404 ? new i.default(
        "BLOCK_NOT_FOUND"
        /* ArweaveErrorType.BLOCK_NOT_FOUND */
      ) : new Error(`Error while loading block data: ${n}`);
    }
    /**
     * Gets current block data (ie. block with indep_hash = Network.getInfo().current)
     */
    async getCurrent() {
      const { current: s } = await this.network.getInfo();
      return await this.get(s);
    }
  }
  return tt.default = t, tt;
}
var Bt;
function st() {
  if (Bt) return Je;
  Bt = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
  const i = vr(), t = Sr(), r = Ar(), s = Cr(), n = Er(), c = Or(), o = at(), a = _e(), h = _r(), f = kr(), C = Rr();
  class T {
    api;
    wallets;
    transactions;
    network;
    blocks;
    ar;
    silo;
    chunks;
    static init;
    static crypto = new r.default();
    static utils = a;
    constructor(A) {
      this.api = new t.default(A), this.wallets = new c.default(this.api, T.crypto), this.chunks = new f.default(this.api), this.transactions = new n.default(this.api, T.crypto, this.chunks), this.silo = new h.default(this.api, this.crypto, this.transactions), this.network = new s.default(this.api), this.blocks = new C.default(this.api, this.network), this.ar = new i.default();
    }
    /** @deprecated */
    get crypto() {
      return T.crypto;
    }
    /** @deprecated */
    get utils() {
      return T.utils;
    }
    getConfig() {
      return {
        api: this.api.getConfig(),
        crypto: null
      };
    }
    async createTransaction(A, x) {
      const _ = {};
      if (Object.assign(_, A), !A.data && !(A.target && A.quantity))
        throw new Error("A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.");
      if (A.owner == null && x && x !== "use_wallet" && (_.owner = x.n), A.last_tx == null && (_.last_tx = await this.transactions.getTransactionAnchor()), typeof A.data == "string" && (A.data = a.stringToBuffer(A.data)), A.data instanceof ArrayBuffer && (A.data = new Uint8Array(A.data)), A.data && !(A.data instanceof Uint8Array))
        throw new Error("Expected data to be a string, Uint8Array or ArrayBuffer");
      if (A.reward == null) {
        const F = A.data ? A.data.byteLength : 0;
        _.reward = await this.transactions.getPrice(F, _.target);
      }
      _.data_root = "", _.data_size = A.data ? A.data.byteLength.toString() : "0", _.data = A.data || new Uint8Array(0);
      const D = new o.default(_);
      return await D.getSignatureData(), D;
    }
    async createSiloTransaction(A, x, _) {
      const D = {};
      if (Object.assign(D, A), !A.data)
        throw new Error("Silo transactions must have a 'data' value");
      if (!_)
        throw new Error("No Silo URI specified.");
      if (A.target || A.quantity)
        throw new Error("Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.");
      if (A.owner == null) {
        if (!x || !x.n)
          throw new Error("A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.");
        D.owner = x.n;
      }
      A.last_tx == null && (D.last_tx = await this.transactions.getTransactionAnchor());
      const F = await this.silo.parseUri(_);
      if (typeof A.data == "string") {
        const M = await this.crypto.encrypt(a.stringToBuffer(A.data), F.getEncryptionKey());
        D.reward = await this.transactions.getPrice(M.byteLength), D.data = a.bufferTob64Url(M);
      }
      if (A.data instanceof Uint8Array) {
        const M = await this.crypto.encrypt(A.data, F.getEncryptionKey());
        D.reward = await this.transactions.getPrice(M.byteLength), D.data = a.bufferTob64Url(M);
      }
      const L = new o.default(D);
      return L.addTag("Silo-Name", F.getAccessKey()), L.addTag("Silo-Version", "0.1.0"), L;
    }
    arql(A) {
      return this.api.post("/arql", A).then((x) => x.data || []);
    }
  }
  return Je.default = T, Je;
}
var qt;
function Pr() {
  if (qt) return Ge;
  qt = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.default = t;
  const i = st();
  async function t(s) {
    if (Array.isArray(s)) {
      const o = i.default.utils.concatBuffers([
        i.default.utils.stringToBuffer("list"),
        i.default.utils.stringToBuffer(s.length.toString())
      ]);
      return await r(s, await i.default.crypto.hash(o, "SHA-384"));
    }
    const n = i.default.utils.concatBuffers([
      i.default.utils.stringToBuffer("blob"),
      i.default.utils.stringToBuffer(s.byteLength.toString())
    ]), c = i.default.utils.concatBuffers([
      await i.default.crypto.hash(n, "SHA-384"),
      await i.default.crypto.hash(s, "SHA-384")
    ]);
    return await i.default.crypto.hash(c, "SHA-384");
  }
  async function r(s, n) {
    if (s.length < 1)
      return n;
    const c = i.default.utils.concatBuffers([
      n,
      await t(s[0])
    ]), o = await i.default.crypto.hash(c, "SHA-384");
    return await r(s.slice(1), o);
  }
  return Ge;
}
var jt;
function at() {
  if (jt) return xe;
  jt = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.Tag = void 0;
  const i = _e(), t = Pr(), r = Zt();
  class s {
    get(a, h) {
      if (!Object.getOwnPropertyNames(this).includes(a))
        throw new Error(`Field "${a}" is not a property of the Arweave Transaction class.`);
      if (this[a] instanceof Uint8Array)
        return h && h.decode && h.string ? i.bufferToString(this[a]) : h && h.decode && !h.string ? this[a] : i.bufferTob64Url(this[a]);
      if (this[a] instanceof Array) {
        if (h?.decode !== void 0 || h?.string !== void 0)
          throw a === "tags" && console.warn(`Did you mean to use 'transaction["tags"]' ?`), new Error("Cannot decode or stringify an array.");
        return this[a];
      }
      return h && h.decode == !0 ? h && h.string ? i.b64UrlToString(this[a]) : i.b64UrlToBuffer(this[a]) : this[a];
    }
  }
  class n extends s {
    name;
    value;
    constructor(a, h, f = !1) {
      super(), this.name = a, this.value = h;
    }
  }
  xe.Tag = n;
  class c extends s {
    format = 2;
    id = "";
    last_tx = "";
    owner = "";
    tags = [];
    target = "";
    quantity = "0";
    data_size = "0";
    data = new Uint8Array();
    data_root = "";
    reward = "0";
    signature = "";
    // Computed when needed.
    chunks;
    constructor(a = {}) {
      super(), Object.assign(this, a), typeof this.data == "string" && (this.data = i.b64UrlToBuffer(this.data)), a.tags && (this.tags = a.tags.map((h) => new n(h.name, h.value)));
    }
    addTag(a, h) {
      this.tags.push(new n(i.stringToB64Url(a), i.stringToB64Url(h)));
    }
    toJSON() {
      return {
        format: this.format,
        id: this.id,
        last_tx: this.last_tx,
        owner: this.owner,
        tags: this.tags,
        target: this.target,
        quantity: this.quantity,
        data: i.bufferTob64Url(this.data),
        data_size: this.data_size,
        data_root: this.data_root,
        data_tree: this.data_tree,
        reward: this.reward,
        signature: this.signature
      };
    }
    setOwner(a) {
      this.owner = a;
    }
    setSignature({ id: a, owner: h, reward: f, tags: C, signature: T }) {
      this.id = a, this.owner = h, f && (this.reward = f), C && (this.tags = C), this.signature = T;
    }
    async prepareChunks(a) {
      !this.chunks && a.byteLength > 0 && (this.chunks = await (0, r.generateTransactionChunks)(a), this.data_root = i.bufferTob64Url(this.chunks.data_root)), !this.chunks && a.byteLength === 0 && (this.chunks = {
        chunks: [],
        data_root: new Uint8Array(),
        proofs: []
      }, this.data_root = "");
    }
    // Returns a chunk in a format suitable for posting to /chunk.
    // Similar to `prepareChunks()` this does not operate `this.data`,
    // instead using the data passed in.
    getChunk(a, h) {
      if (!this.chunks)
        throw new Error("Chunks have not been prepared");
      const f = this.chunks.proofs[a], C = this.chunks.chunks[a];
      return {
        data_root: this.data_root,
        data_size: this.data_size,
        data_path: i.bufferTob64Url(f.proof),
        offset: f.offset.toString(),
        chunk: i.bufferTob64Url(h.slice(C.minByteRange, C.maxByteRange))
      };
    }
    async getSignatureData() {
      switch (this.format) {
        case 1:
          let a = this.tags.reduce((f, C) => i.concatBuffers([
            f,
            C.get("name", { decode: !0, string: !1 }),
            C.get("value", { decode: !0, string: !1 })
          ]), new Uint8Array());
          return i.concatBuffers([
            this.get("owner", { decode: !0, string: !1 }),
            this.get("target", { decode: !0, string: !1 }),
            this.get("data", { decode: !0, string: !1 }),
            i.stringToBuffer(this.quantity),
            i.stringToBuffer(this.reward),
            this.get("last_tx", { decode: !0, string: !1 }),
            a
          ]);
        case 2:
          this.data_root || await this.prepareChunks(this.data);
          const h = this.tags.map((f) => [
            f.get("name", { decode: !0, string: !1 }),
            f.get("value", { decode: !0, string: !1 })
          ]);
          return await (0, t.default)([
            i.stringToBuffer(this.format.toString()),
            this.get("owner", { decode: !0, string: !1 }),
            this.get("target", { decode: !0, string: !1 }),
            i.stringToBuffer(this.quantity),
            i.stringToBuffer(this.reward),
            this.get("last_tx", { decode: !0, string: !1 }),
            h,
            i.stringToBuffer(this.data_size),
            this.get("data_root", { decode: !0, string: !1 })
          ]);
        default:
          throw new Error(`Unexpected transaction format: ${this.format}`);
      }
    }
  }
  return xe.default = c, xe;
}
at();
class fe extends Error {
  constructor(t) {
    super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = !1, this.originalError = null, Object.setPrototypeOf(this, fe.prototype), t !== null && typeof t == "object" && (this.url = typeof t.url == "string" ? t.url : "", this.status = typeof t.status == "number" ? t.status : 0, this.isAbort = !!t.isAbort, this.originalError = t.originalError, t.response !== null && typeof t.response == "object" ? this.response = t.response : t.data !== null && typeof t.data == "object" ? this.response = t.data : this.response = {}), this.originalError || t instanceof fe || (this.originalError = t), typeof DOMException < "u" && t instanceof DOMException && (this.isAbort = !0), this.name = "ClientResponseError " + this.status, this.message = this.response?.message, this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : this.originalError?.cause?.message?.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong."), this.cause = this.originalError;
  }
  get data() {
    return this.response;
  }
  toJSON() {
    return { ...this };
  }
}
const rt = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Nr(i, t) {
  const r = {};
  if (typeof i != "string") return r;
  const s = Object.assign({}, {}).decode || Ir;
  let n = 0;
  for (; n < i.length; ) {
    const c = i.indexOf("=", n);
    if (c === -1) break;
    let o = i.indexOf(";", n);
    if (o === -1) o = i.length;
    else if (o < c) {
      n = i.lastIndexOf(";", c - 1) + 1;
      continue;
    }
    const a = i.slice(n, c).trim();
    if (r[a] === void 0) {
      let h = i.slice(c + 1, o).trim();
      h.charCodeAt(0) === 34 && (h = h.slice(1, -1));
      try {
        r[a] = s(h);
      } catch {
        r[a] = h;
      }
    }
    n = o + 1;
  }
  return r;
}
function $t(i, t, r) {
  const s = Object.assign({}, r || {}), n = s.encode || xr;
  if (!rt.test(i)) throw new TypeError("argument name is invalid");
  const c = n(t);
  if (c && !rt.test(c)) throw new TypeError("argument val is invalid");
  let o = i + "=" + c;
  if (s.maxAge != null) {
    const a = s.maxAge - 0;
    if (isNaN(a) || !isFinite(a)) throw new TypeError("option maxAge is invalid");
    o += "; Max-Age=" + Math.floor(a);
  }
  if (s.domain) {
    if (!rt.test(s.domain)) throw new TypeError("option domain is invalid");
    o += "; Domain=" + s.domain;
  }
  if (s.path) {
    if (!rt.test(s.path)) throw new TypeError("option path is invalid");
    o += "; Path=" + s.path;
  }
  if (s.expires) {
    if (!function(h) {
      return Object.prototype.toString.call(h) === "[object Date]" || h instanceof Date;
    }(s.expires) || isNaN(s.expires.valueOf())) throw new TypeError("option expires is invalid");
    o += "; Expires=" + s.expires.toUTCString();
  }
  if (s.httpOnly && (o += "; HttpOnly"), s.secure && (o += "; Secure"), s.priority)
    switch (typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority) {
      case "low":
        o += "; Priority=Low";
        break;
      case "medium":
        o += "; Priority=Medium";
        break;
      case "high":
        o += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (s.sameSite)
    switch (typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}
function Ir(i) {
  return i.indexOf("%") !== -1 ? decodeURIComponent(i) : i;
}
function xr(i) {
  return encodeURIComponent(i);
}
const Ur = typeof navigator < "u" && navigator.product === "ReactNative" || typeof global < "u" && global.HermesInternal;
let Yt;
function qe(i) {
  if (i) try {
    const t = decodeURIComponent(Yt(i.split(".")[1]).split("").map(function(r) {
      return "%" + ("00" + r.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(t) || {};
  } catch {
  }
  return {};
}
function Qt(i, t = 0) {
  let r = qe(i);
  return !(Object.keys(r).length > 0 && (!r.exp || r.exp - t > Date.now() / 1e3));
}
Yt = typeof atob != "function" || Ur ? (i) => {
  let t = String(i).replace(/=+$/, "");
  if (t.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var r, s, n = 0, c = 0, o = ""; s = t.charAt(c++); ~s && (r = n % 4 ? 64 * r + s : s, n++ % 4) ? o += String.fromCharCode(255 & r >> (-2 * n & 6)) : 0) s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);
  return o;
} : atob;
const Ft = "pb_auth";
class wt {
  constructor() {
    this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
  }
  get token() {
    return this.baseToken;
  }
  get record() {
    return this.baseModel;
  }
  get model() {
    return this.baseModel;
  }
  get isValid() {
    return !Qt(this.token);
  }
  get isSuperuser() {
    let t = qe(this.token);
    return t.type == "auth" && (this.record?.collectionName == "_superusers" || !this.record?.collectionName && t.collectionId == "pbc_3142635823");
  }
  get isAdmin() {
    return console.warn("Please replace pb.authStore.isAdmin with pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), this.isSuperuser;
  }
  get isAuthRecord() {
    return console.warn("Please replace pb.authStore.isAuthRecord with !pb.authStore.isSuperuser OR simply check the value of pb.authStore.record?.collectionName"), qe(this.token).type == "auth" && !this.isSuperuser;
  }
  save(t, r) {
    this.baseToken = t || "", this.baseModel = r || null, this.triggerChange();
  }
  clear() {
    this.baseToken = "", this.baseModel = null, this.triggerChange();
  }
  loadFromCookie(t, r = Ft) {
    const s = Nr(t || "")[r] || "";
    let n = {};
    try {
      n = JSON.parse(s), (typeof n === null || typeof n != "object" || Array.isArray(n)) && (n = {});
    } catch {
    }
    this.save(n.token || "", n.record || n.model || null);
  }
  exportToCookie(t, r = Ft) {
    const s = { secure: !0, sameSite: !0, httpOnly: !0, path: "/" }, n = qe(this.token);
    s.expires = n?.exp ? new Date(1e3 * n.exp) : /* @__PURE__ */ new Date("1970-01-01"), t = Object.assign({}, s, t);
    const c = { token: this.token, record: this.record ? JSON.parse(JSON.stringify(this.record)) : null };
    let o = $t(r, JSON.stringify(c), t);
    const a = typeof Blob < "u" ? new Blob([o]).size : o.length;
    if (c.record && a > 4096) {
      c.record = { id: c.record?.id, email: c.record?.email };
      const h = ["collectionId", "collectionName", "verified"];
      for (const f in this.record) h.includes(f) && (c.record[f] = this.record[f]);
      o = $t(r, JSON.stringify(c), t);
    }
    return o;
  }
  onChange(t, r = !1) {
    return this._onChangeCallbacks.push(t), r && t(this.token, this.record), () => {
      for (let s = this._onChangeCallbacks.length - 1; s >= 0; s--) if (this._onChangeCallbacks[s] == t) return delete this._onChangeCallbacks[s], void this._onChangeCallbacks.splice(s, 1);
    };
  }
  triggerChange() {
    for (const t of this._onChangeCallbacks) t && t(this.token, this.record);
  }
}
class Lr extends wt {
  constructor(t = "pocketbase_auth") {
    super(), this.storageFallback = {}, this.storageKey = t, this._bindStorageEvent();
  }
  get token() {
    return (this._storageGet(this.storageKey) || {}).token || "";
  }
  get record() {
    const t = this._storageGet(this.storageKey) || {};
    return t.record || t.model || null;
  }
  get model() {
    return this.record;
  }
  save(t, r) {
    this._storageSet(this.storageKey, { token: t, record: r }), super.save(t, r);
  }
  clear() {
    this._storageRemove(this.storageKey), super.clear();
  }
  _storageGet(t) {
    if (typeof window < "u" && window?.localStorage) {
      const r = window.localStorage.getItem(t) || "";
      try {
        return JSON.parse(r);
      } catch {
        return r;
      }
    }
    return this.storageFallback[t];
  }
  _storageSet(t, r) {
    if (typeof window < "u" && window?.localStorage) {
      let s = r;
      typeof r != "string" && (s = JSON.stringify(r)), window.localStorage.setItem(t, s);
    } else this.storageFallback[t] = r;
  }
  _storageRemove(t) {
    typeof window < "u" && window?.localStorage && window.localStorage?.removeItem(t), delete this.storageFallback[t];
  }
  _bindStorageEvent() {
    typeof window < "u" && window?.localStorage && window.addEventListener && window.addEventListener("storage", (t) => {
      if (t.key != this.storageKey) return;
      const r = this._storageGet(this.storageKey) || {};
      super.save(r.token || "", r.record || r.model || null);
    });
  }
}
class ke {
  constructor(t) {
    this.client = t;
  }
}
class Dr extends ke {
  async getAll(t) {
    return t = Object.assign({ method: "GET" }, t), this.client.send("/api/settings", t);
  }
  async update(t, r) {
    return r = Object.assign({ method: "PATCH", body: t }, r), this.client.send("/api/settings", r);
  }
  async testS3(t = "storage", r) {
    return r = Object.assign({ method: "POST", body: { filesystem: t } }, r), this.client.send("/api/settings/test/s3", r).then(() => !0);
  }
  async testEmail(t, r, s, n) {
    return n = Object.assign({ method: "POST", body: { email: r, template: s, collection: t } }, n), this.client.send("/api/settings/test/email", n).then(() => !0);
  }
  async generateAppleClientSecret(t, r, s, n, c, o) {
    return o = Object.assign({ method: "POST", body: { clientId: t, teamId: r, keyId: s, privateKey: n, duration: c } }, o), this.client.send("/api/settings/apple/generate-client-secret", o);
  }
}
const Br = ["requestKey", "$cancelKey", "$autoCancel", "fetch", "headers", "body", "query", "params", "cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal", "window"];
function yt(i) {
  if (i) {
    i.query = i.query || {};
    for (let t in i) Br.includes(t) || (i.query[t] = i[t], delete i[t]);
  }
}
function er(i) {
  const t = [];
  for (const r in i) {
    const s = encodeURIComponent(r), n = Array.isArray(i[r]) ? i[r] : [i[r]];
    for (let c of n) c = qr(c), c !== null && t.push(s + "=" + c);
  }
  return t.join("&");
}
function qr(i) {
  return i == null ? null : i instanceof Date ? encodeURIComponent(i.toISOString().replace("T", " ")) : encodeURIComponent(typeof i == "object" ? JSON.stringify(i) : i);
}
class tr extends ke {
  constructor() {
    super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentSubscriptions = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], this.pendingConnects = [];
  }
  get isConnected() {
    return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
  }
  async subscribe(t, r, s) {
    if (!t) throw new Error("topic must be set.");
    let n = t;
    if (s) {
      yt(s = Object.assign({}, s));
      const o = "options=" + encodeURIComponent(JSON.stringify({ query: s.query, headers: s.headers }));
      n += (n.includes("?") ? "&" : "?") + o;
    }
    const c = function(o) {
      const a = o;
      let h;
      try {
        h = JSON.parse(a?.data);
      } catch {
      }
      r(h || {});
    };
    return this.subscriptions[n] || (this.subscriptions[n] = []), this.subscriptions[n].push(c), this.isConnected ? this.subscriptions[n].length === 1 ? await this.submitSubscriptions() : this.eventSource?.addEventListener(n, c) : await this.connect(), async () => this.unsubscribeByTopicAndListener(t, c);
  }
  async unsubscribe(t) {
    let r = !1;
    if (t) {
      const s = this.getSubscriptionsByTopic(t);
      for (let n in s) if (this.hasSubscriptionListeners(n)) {
        for (let c of this.subscriptions[n]) this.eventSource?.removeEventListener(n, c);
        delete this.subscriptions[n], r || (r = !0);
      }
    } else this.subscriptions = {};
    this.hasSubscriptionListeners() ? r && await this.submitSubscriptions() : this.disconnect();
  }
  async unsubscribeByPrefix(t) {
    let r = !1;
    for (let s in this.subscriptions) if ((s + "?").startsWith(t)) {
      r = !0;
      for (let n of this.subscriptions[s]) this.eventSource?.removeEventListener(s, n);
      delete this.subscriptions[s];
    }
    r && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect());
  }
  async unsubscribeByTopicAndListener(t, r) {
    let s = !1;
    const n = this.getSubscriptionsByTopic(t);
    for (let c in n) {
      if (!Array.isArray(this.subscriptions[c]) || !this.subscriptions[c].length) continue;
      let o = !1;
      for (let a = this.subscriptions[c].length - 1; a >= 0; a--) this.subscriptions[c][a] === r && (o = !0, delete this.subscriptions[c][a], this.subscriptions[c].splice(a, 1), this.eventSource?.removeEventListener(c, r));
      o && (this.subscriptions[c].length || delete this.subscriptions[c], s || this.hasSubscriptionListeners(c) || (s = !0));
    }
    this.hasSubscriptionListeners() ? s && await this.submitSubscriptions() : this.disconnect();
  }
  hasSubscriptionListeners(t) {
    if (this.subscriptions = this.subscriptions || {}, t) return !!this.subscriptions[t]?.length;
    for (let r in this.subscriptions) if (this.subscriptions[r]?.length) return !0;
    return !1;
  }
  async submitSubscriptions() {
    if (this.clientId) return this.addAllSubscriptionListeners(), this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys(), this.client.send("/api/realtime", { method: "POST", body: { clientId: this.clientId, subscriptions: this.lastSentSubscriptions }, requestKey: this.getSubscriptionsCancelKey() }).catch((t) => {
      if (!t?.isAbort) throw t;
    });
  }
  getSubscriptionsCancelKey() {
    return "realtime_" + this.clientId;
  }
  getSubscriptionsByTopic(t) {
    const r = {};
    t = t.includes("?") ? t : t + "?";
    for (let s in this.subscriptions) (s + "?").startsWith(t) && (r[s] = this.subscriptions[s]);
    return r;
  }
  getNonEmptySubscriptionKeys() {
    const t = [];
    for (let r in this.subscriptions) this.subscriptions[r].length && t.push(r);
    return t;
  }
  addAllSubscriptionListeners() {
    if (this.eventSource) {
      this.removeAllSubscriptionListeners();
      for (let t in this.subscriptions) for (let r of this.subscriptions[t]) this.eventSource.addEventListener(t, r);
    }
  }
  removeAllSubscriptionListeners() {
    if (this.eventSource) for (let t in this.subscriptions) for (let r of this.subscriptions[t]) this.eventSource.removeEventListener(t, r);
  }
  async connect() {
    if (!(this.reconnectAttempts > 0)) return new Promise((t, r) => {
      this.pendingConnects.push({ resolve: t, reject: r }), this.pendingConnects.length > 1 || this.initConnect();
    });
  }
  initConnect() {
    this.disconnect(!0), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(() => {
      this.connectErrorHandler(new Error("EventSource connect took too long."));
    }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildURL("/api/realtime")), this.eventSource.onerror = (t) => {
      this.connectErrorHandler(new Error("Failed to establish realtime connection."));
    }, this.eventSource.addEventListener("PB_CONNECT", (t) => {
      const r = t;
      this.clientId = r?.lastEventId, this.submitSubscriptions().then(async () => {
        let s = 3;
        for (; this.hasUnsentSubscriptions() && s > 0; ) s--, await this.submitSubscriptions();
      }).then(() => {
        for (let n of this.pendingConnects) n.resolve();
        this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
        const s = this.getSubscriptionsByTopic("PB_CONNECT");
        for (let n in s) for (let c of s[n]) c(t);
      }).catch((s) => {
        this.clientId = "", this.connectErrorHandler(s);
      });
    });
  }
  hasUnsentSubscriptions() {
    const t = this.getNonEmptySubscriptionKeys();
    if (t.length != this.lastSentSubscriptions.length) return !0;
    for (const r of t) if (!this.lastSentSubscriptions.includes(r)) return !0;
    return !1;
  }
  connectErrorHandler(t) {
    if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
      for (let s of this.pendingConnects) s.reject(new fe(t));
      return this.pendingConnects = [], void this.disconnect();
    }
    this.disconnect(!0);
    const r = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
    this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(() => {
      this.initConnect();
    }, r);
  }
  disconnect(t = !1) {
    if (this.clientId && this.onDisconnect && this.onDisconnect(Object.keys(this.subscriptions)), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), this.eventSource?.close(), this.eventSource = null, this.clientId = "", !t) {
      this.reconnectAttempts = 0;
      for (let r of this.pendingConnects) r.resolve();
      this.pendingConnects = [];
    }
  }
}
class rr extends ke {
  decode(t) {
    return t;
  }
  async getFullList(t, r) {
    if (typeof t == "number") return this._getFullList(t, r);
    let s = 500;
    return (r = Object.assign({}, t, r)).batch && (s = r.batch, delete r.batch), this._getFullList(s, r);
  }
  async getList(t = 1, r = 30, s) {
    return (s = Object.assign({ method: "GET" }, s)).query = Object.assign({ page: t, perPage: r }, s.query), this.client.send(this.baseCrudPath, s).then((n) => (n.items = n.items?.map((c) => this.decode(c)) || [], n));
  }
  async getFirstListItem(t, r) {
    return (r = Object.assign({ requestKey: "one_by_filter_" + this.baseCrudPath + "_" + t }, r)).query = Object.assign({ filter: t, skipTotal: 1 }, r.query), this.getList(1, 1, r).then((s) => {
      if (!s?.items?.length) throw new fe({ status: 404, response: { code: 404, message: "The requested resource wasn't found.", data: {} } });
      return s.items[0];
    });
  }
  async getOne(t, r) {
    if (!t) throw new fe({ url: this.client.buildURL(this.baseCrudPath + "/"), status: 404, response: { code: 404, message: "Missing required record id.", data: {} } });
    return r = Object.assign({ method: "GET" }, r), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(t), r).then((s) => this.decode(s));
  }
  async create(t, r) {
    return r = Object.assign({ method: "POST", body: t }, r), this.client.send(this.baseCrudPath, r).then((s) => this.decode(s));
  }
  async update(t, r, s) {
    return s = Object.assign({ method: "PATCH", body: r }, s), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(t), s).then((n) => this.decode(n));
  }
  async delete(t, r) {
    return r = Object.assign({ method: "DELETE" }, r), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(t), r).then(() => !0);
  }
  _getFullList(t = 500, r) {
    (r = r || {}).query = Object.assign({ skipTotal: 1 }, r.query);
    let s = [], n = async (c) => this.getList(c, t || 500, r).then((o) => {
      const a = o.items;
      return s = s.concat(a), a.length == o.perPage ? n(c + 1) : s;
    });
    return n(1);
  }
}
function Re(i, t, r, s) {
  const n = s !== void 0;
  return n || r !== void 0 ? n ? (console.warn(i), t.body = Object.assign({}, t.body, r), t.query = Object.assign({}, t.query, s), t) : Object.assign(t, r) : t;
}
function ht(i) {
  i._resetAutoRefresh?.();
}
class jr extends rr {
  constructor(t, r) {
    super(t), this.collectionIdOrName = r;
  }
  get baseCrudPath() {
    return this.baseCollectionPath + "/records";
  }
  get baseCollectionPath() {
    return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
  }
  get isSuperusers() {
    return this.collectionIdOrName == "_superusers" || this.collectionIdOrName == "_pbc_2773867675";
  }
  async subscribe(t, r, s) {
    if (!t) throw new Error("Missing topic.");
    if (!r) throw new Error("Missing subscription callback.");
    return this.client.realtime.subscribe(this.collectionIdOrName + "/" + t, r, s);
  }
  async unsubscribe(t) {
    return t ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + t) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
  }
  async getFullList(t, r) {
    if (typeof t == "number") return super.getFullList(t, r);
    const s = Object.assign({}, t, r);
    return super.getFullList(s);
  }
  async getList(t = 1, r = 30, s) {
    return super.getList(t, r, s);
  }
  async getFirstListItem(t, r) {
    return super.getFirstListItem(t, r);
  }
  async getOne(t, r) {
    return super.getOne(t, r);
  }
  async create(t, r) {
    return super.create(t, r);
  }
  async update(t, r, s) {
    return super.update(t, r, s).then((n) => {
      if (this.client.authStore.record?.id === n?.id && (this.client.authStore.record?.collectionId === this.collectionIdOrName || this.client.authStore.record?.collectionName === this.collectionIdOrName)) {
        let c = Object.assign({}, this.client.authStore.record.expand), o = Object.assign({}, this.client.authStore.record, n);
        c && (o.expand = Object.assign(c, n.expand)), this.client.authStore.save(this.client.authStore.token, o);
      }
      return n;
    });
  }
  async delete(t, r) {
    return super.delete(t, r).then((s) => (!s || this.client.authStore.record?.id !== t || this.client.authStore.record?.collectionId !== this.collectionIdOrName && this.client.authStore.record?.collectionName !== this.collectionIdOrName || this.client.authStore.clear(), s));
  }
  authResponse(t) {
    const r = this.decode(t?.record || {});
    return this.client.authStore.save(t?.token, r), Object.assign({}, t, { token: t?.token || "", record: r });
  }
  async listAuthMethods(t) {
    return t = Object.assign({ method: "GET", fields: "mfa,otp,password,oauth2" }, t), this.client.send(this.baseCollectionPath + "/auth-methods", t);
  }
  async authWithPassword(t, r, s) {
    let n;
    s = Object.assign({ method: "POST", body: { identity: t, password: r } }, s), this.isSuperusers && (n = s.autoRefreshThreshold, delete s.autoRefreshThreshold, s.autoRefresh || ht(this.client));
    let c = await this.client.send(this.baseCollectionPath + "/auth-with-password", s);
    return c = this.authResponse(c), n && this.isSuperusers && function(a, h, f, C) {
      ht(a);
      const T = a.beforeSend, I = a.authStore.record, A = a.authStore.onChange((x, _) => {
        (!x || _?.id != I?.id || (_?.collectionId || I?.collectionId) && _?.collectionId != I?.collectionId) && ht(a);
      });
      a._resetAutoRefresh = function() {
        A(), a.beforeSend = T, delete a._resetAutoRefresh;
      }, a.beforeSend = async (x, _) => {
        const D = a.authStore.token;
        if (_.query?.autoRefresh) return T ? T(x, _) : { url: x, sendOptions: _ };
        let F = a.authStore.isValid;
        if (F && Qt(a.authStore.token, h)) try {
          await f();
        } catch {
          F = !1;
        }
        F || await C();
        const L = _.headers || {};
        for (let M in L) if (M.toLowerCase() == "authorization" && D == L[M] && a.authStore.token) {
          L[M] = a.authStore.token;
          break;
        }
        return _.headers = L, T ? T(x, _) : { url: x, sendOptions: _ };
      };
    }(this.client, n, () => this.authRefresh({ autoRefresh: !0 }), () => this.authWithPassword(t, r, Object.assign({ autoRefresh: !0 }, s))), c;
  }
  async authWithOAuth2Code(t, r, s, n, c, o, a) {
    let h = { method: "POST", body: { provider: t, code: r, codeVerifier: s, redirectURL: n, createData: c } };
    return h = Re("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectURL, createData?, options?).", h, o, a), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", h).then((f) => this.authResponse(f));
  }
  authWithOAuth2(...t) {
    if (t.length > 1 || typeof t?.[0] == "string") return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code(t?.[0] || "", t?.[1] || "", t?.[2] || "", t?.[3] || "", t?.[4] || {}, t?.[5] || {}, t?.[6] || {});
    const r = t?.[0] || {};
    let s = null;
    r.urlCallback || (s = Mt(void 0));
    const n = new tr(this.client);
    function c() {
      s?.close(), n.unsubscribe();
    }
    const o = {}, a = r.requestKey;
    return a && (o.requestKey = a), this.listAuthMethods(o).then((h) => {
      const f = h.oauth2.providers.find((I) => I.name === r.provider);
      if (!f) throw new fe(new Error(`Missing or invalid provider "${r.provider}".`));
      const C = this.client.buildURL("/api/oauth2-redirect"), T = a ? this.client.cancelControllers?.[a] : void 0;
      return T && (T.signal.onabort = () => {
        c();
      }), new Promise(async (I, A) => {
        try {
          await n.subscribe("@oauth2", async (F) => {
            const L = n.clientId;
            try {
              if (!F.state || L !== F.state) throw new Error("State parameters don't match.");
              if (F.error || !F.code) throw new Error("OAuth2 redirect error or missing code: " + F.error);
              const M = Object.assign({}, r);
              delete M.provider, delete M.scopes, delete M.createData, delete M.urlCallback, T?.signal?.onabort && (T.signal.onabort = null);
              const ee = await this.authWithOAuth2Code(f.name, F.code, f.codeVerifier, C, r.createData, M);
              I(ee);
            } catch (M) {
              A(new fe(M));
            }
            c();
          });
          const x = { state: n.clientId };
          r.scopes?.length && (x.scope = r.scopes.join(" "));
          const _ = this._replaceQueryParams(f.authURL + C, x);
          await (r.urlCallback || function(F) {
            s ? s.location.href = F : s = Mt(F);
          })(_);
        } catch (x) {
          c(), A(new fe(x));
        }
      });
    }).catch((h) => {
      throw c(), h;
    });
  }
  async authRefresh(t, r) {
    let s = { method: "POST" };
    return s = Re("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s, t, r), this.client.send(this.baseCollectionPath + "/auth-refresh", s).then((n) => this.authResponse(n));
  }
  async requestPasswordReset(t, r, s) {
    let n = { method: "POST", body: { email: t } };
    return n = Re("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", n, r, s), this.client.send(this.baseCollectionPath + "/request-password-reset", n).then(() => !0);
  }
  async confirmPasswordReset(t, r, s, n, c) {
    let o = { method: "POST", body: { token: t, password: r, passwordConfirm: s } };
    return o = Re("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", o, n, c), this.client.send(this.baseCollectionPath + "/confirm-password-reset", o).then(() => !0);
  }
  async requestVerification(t, r, s) {
    let n = { method: "POST", body: { email: t } };
    return n = Re("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", n, r, s), this.client.send(this.baseCollectionPath + "/request-verification", n).then(() => !0);
  }
  async confirmVerification(t, r, s) {
    let n = { method: "POST", body: { token: t } };
    return n = Re("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", n, r, s), this.client.send(this.baseCollectionPath + "/confirm-verification", n).then(() => {
      const c = qe(t), o = this.client.authStore.record;
      return o && !o.verified && o.id === c.id && o.collectionId === c.collectionId && (o.verified = !0, this.client.authStore.save(this.client.authStore.token, o)), !0;
    });
  }
  async requestEmailChange(t, r, s) {
    let n = { method: "POST", body: { newEmail: t } };
    return n = Re("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", n, r, s), this.client.send(this.baseCollectionPath + "/request-email-change", n).then(() => !0);
  }
  async confirmEmailChange(t, r, s, n) {
    let c = { method: "POST", body: { token: t, password: r } };
    return c = Re("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", c, s, n), this.client.send(this.baseCollectionPath + "/confirm-email-change", c).then(() => {
      const o = qe(t), a = this.client.authStore.record;
      return a && a.id === o.id && a.collectionId === o.collectionId && this.client.authStore.clear(), !0;
    });
  }
  async listExternalAuths(t, r) {
    return this.client.collection("_externalAuths").getFullList(Object.assign({}, r, { filter: this.client.filter("recordRef = {:id}", { id: t }) }));
  }
  async unlinkExternalAuth(t, r, s) {
    const n = await this.client.collection("_externalAuths").getFirstListItem(this.client.filter("recordRef = {:recordId} && provider = {:provider}", { recordId: t, provider: r }));
    return this.client.collection("_externalAuths").delete(n.id, s).then(() => !0);
  }
  async requestOTP(t, r) {
    return r = Object.assign({ method: "POST", body: { email: t } }, r), this.client.send(this.baseCollectionPath + "/request-otp", r);
  }
  async authWithOTP(t, r, s) {
    return s = Object.assign({ method: "POST", body: { otpId: t, password: r } }, s), this.client.send(this.baseCollectionPath + "/auth-with-otp", s).then((n) => this.authResponse(n));
  }
  async impersonate(t, r, s) {
    (s = Object.assign({ method: "POST", body: { duration: r } }, s)).headers = s.headers || {}, s.headers.Authorization || (s.headers.Authorization = this.client.authStore.token);
    const n = new nr(this.client.baseURL, new wt(), this.client.lang), c = await n.send(this.baseCollectionPath + "/impersonate/" + encodeURIComponent(t), s);
    return n.authStore.save(c?.token, this.decode(c?.record || {})), n;
  }
  _replaceQueryParams(t, r = {}) {
    let s = t, n = "";
    t.indexOf("?") >= 0 && (s = t.substring(0, t.indexOf("?")), n = t.substring(t.indexOf("?") + 1));
    const c = {}, o = n.split("&");
    for (const a of o) {
      if (a == "") continue;
      const h = a.split("=");
      c[decodeURIComponent(h[0].replace(/\+/g, " "))] = decodeURIComponent((h[1] || "").replace(/\+/g, " "));
    }
    for (let a in r) r.hasOwnProperty(a) && (r[a] == null ? delete c[a] : c[a] = r[a]);
    n = "";
    for (let a in c) c.hasOwnProperty(a) && (n != "" && (n += "&"), n += encodeURIComponent(a.replace(/%20/g, "+")) + "=" + encodeURIComponent(c[a].replace(/%20/g, "+")));
    return n != "" ? s + "?" + n : s;
  }
}
function Mt(i) {
  if (typeof window > "u" || !window?.open) throw new fe(new Error("Not in a browser context - please pass a custom urlCallback function."));
  let t = 1024, r = 768, s = window.innerWidth, n = window.innerHeight;
  t = t > s ? s : t, r = r > n ? n : r;
  let c = s / 2 - t / 2, o = n / 2 - r / 2;
  return window.open(i, "popup_window", "width=" + t + ",height=" + r + ",top=" + o + ",left=" + c + ",resizable,menubar=no");
}
class $r extends rr {
  get baseCrudPath() {
    return "/api/collections";
  }
  async import(t, r = !1, s) {
    return s = Object.assign({ method: "PUT", body: { collections: t, deleteMissing: r } }, s), this.client.send(this.baseCrudPath + "/import", s).then(() => !0);
  }
  async getScaffolds(t) {
    return t = Object.assign({ method: "GET" }, t), this.client.send(this.baseCrudPath + "/meta/scaffolds", t);
  }
  async truncate(t, r) {
    return r = Object.assign({ method: "DELETE" }, r), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(t) + "/truncate", r).then(() => !0);
  }
}
class Fr extends ke {
  async getList(t = 1, r = 30, s) {
    return (s = Object.assign({ method: "GET" }, s)).query = Object.assign({ page: t, perPage: r }, s.query), this.client.send("/api/logs", s);
  }
  async getOne(t, r) {
    if (!t) throw new fe({ url: this.client.buildURL("/api/logs/"), status: 404, response: { code: 404, message: "Missing required log id.", data: {} } });
    return r = Object.assign({ method: "GET" }, r), this.client.send("/api/logs/" + encodeURIComponent(t), r);
  }
  async getStats(t) {
    return t = Object.assign({ method: "GET" }, t), this.client.send("/api/logs/stats", t);
  }
}
class Mr extends ke {
  async check(t) {
    return t = Object.assign({ method: "GET" }, t), this.client.send("/api/health", t);
  }
}
class Kr extends ke {
  getUrl(t, r, s = {}) {
    return console.warn("Please replace pb.files.getUrl() with pb.files.getURL()"), this.getURL(t, r, s);
  }
  getURL(t, r, s = {}) {
    if (!r || !t?.id || !t?.collectionId && !t?.collectionName) return "";
    const n = [];
    n.push("api"), n.push("files"), n.push(encodeURIComponent(t.collectionId || t.collectionName)), n.push(encodeURIComponent(t.id)), n.push(encodeURIComponent(r));
    let c = this.client.buildURL(n.join("/"));
    if (Object.keys(s).length) {
      s.download === !1 && delete s.download;
      const o = new URLSearchParams(s);
      c += (c.includes("?") ? "&" : "?") + o;
    }
    return c;
  }
  async getToken(t) {
    return t = Object.assign({ method: "POST" }, t), this.client.send("/api/files/token", t).then((r) => r?.token || "");
  }
}
class Wr extends ke {
  async getFullList(t) {
    return t = Object.assign({ method: "GET" }, t), this.client.send("/api/backups", t);
  }
  async create(t, r) {
    return r = Object.assign({ method: "POST", body: { name: t } }, r), this.client.send("/api/backups", r).then(() => !0);
  }
  async upload(t, r) {
    return r = Object.assign({ method: "POST", body: t }, r), this.client.send("/api/backups/upload", r).then(() => !0);
  }
  async delete(t, r) {
    return r = Object.assign({ method: "DELETE" }, r), this.client.send(`/api/backups/${encodeURIComponent(t)}`, r).then(() => !0);
  }
  async restore(t, r) {
    return r = Object.assign({ method: "POST" }, r), this.client.send(`/api/backups/${encodeURIComponent(t)}/restore`, r).then(() => !0);
  }
  getDownloadUrl(t, r) {
    return console.warn("Please replace pb.backups.getDownloadUrl() with pb.backups.getDownloadURL()"), this.getDownloadURL(t, r);
  }
  getDownloadURL(t, r) {
    return this.client.buildURL(`/api/backups/${encodeURIComponent(r)}?token=${encodeURIComponent(t)}`);
  }
}
class Hr extends ke {
  async getFullList(t) {
    return t = Object.assign({ method: "GET" }, t), this.client.send("/api/crons", t);
  }
  async run(t, r) {
    return r = Object.assign({ method: "POST" }, r), this.client.send(`/api/crons/${encodeURIComponent(t)}`, r).then(() => !0);
  }
}
function ft(i) {
  return typeof Blob < "u" && i instanceof Blob || typeof File < "u" && i instanceof File || i !== null && typeof i == "object" && i.uri && (typeof navigator < "u" && navigator.product === "ReactNative" || typeof global < "u" && global.HermesInternal);
}
function gt(i) {
  return i && (i.constructor.name === "FormData" || typeof FormData < "u" && i instanceof FormData);
}
function Kt(i) {
  for (const t in i) {
    const r = Array.isArray(i[t]) ? i[t] : [i[t]];
    for (const s of r) if (ft(s)) return !0;
  }
  return !1;
}
const Gr = /^[\-\.\d]+$/;
function Wt(i) {
  if (typeof i != "string") return i;
  if (i == "true") return !0;
  if (i == "false") return !1;
  if ((i[0] === "-" || i[0] >= "0" && i[0] <= "9") && Gr.test(i)) {
    let t = +i;
    if ("" + t === i) return t;
  }
  return i;
}
class Jr extends ke {
  constructor() {
    super(...arguments), this.requests = [], this.subs = {};
  }
  collection(t) {
    return this.subs[t] || (this.subs[t] = new zr(this.requests, t)), this.subs[t];
  }
  async send(t) {
    const r = new FormData(), s = [];
    for (let n = 0; n < this.requests.length; n++) {
      const c = this.requests[n];
      if (s.push({ method: c.method, url: c.url, headers: c.headers, body: c.json }), c.files) for (let o in c.files) {
        const a = c.files[o] || [];
        for (let h of a) r.append("requests." + n + "." + o, h);
      }
    }
    return r.append("@jsonPayload", JSON.stringify({ requests: s })), t = Object.assign({ method: "POST", body: r }, t), this.client.send("/api/batch", t);
  }
}
class zr {
  constructor(t, r) {
    this.requests = [], this.requests = t, this.collectionIdOrName = r;
  }
  upsert(t, r) {
    r = Object.assign({ body: t || {} }, r);
    const s = { method: "PUT", url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records" };
    this.prepareRequest(s, r), this.requests.push(s);
  }
  create(t, r) {
    r = Object.assign({ body: t || {} }, r);
    const s = { method: "POST", url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records" };
    this.prepareRequest(s, r), this.requests.push(s);
  }
  update(t, r, s) {
    s = Object.assign({ body: r || {} }, s);
    const n = { method: "PATCH", url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(t) };
    this.prepareRequest(n, s), this.requests.push(n);
  }
  delete(t, r) {
    r = Object.assign({}, r);
    const s = { method: "DELETE", url: "/api/collections/" + encodeURIComponent(this.collectionIdOrName) + "/records/" + encodeURIComponent(t) };
    this.prepareRequest(s, r), this.requests.push(s);
  }
  prepareRequest(t, r) {
    if (yt(r), t.headers = r.headers, t.json = {}, t.files = {}, r.query !== void 0) {
      const n = er(r.query);
      n && (t.url += (t.url.includes("?") ? "&" : "?") + n);
    }
    let s = r.body;
    gt(s) && (s = function(c) {
      let o = {};
      return c.forEach((a, h) => {
        if (h === "@jsonPayload" && typeof a == "string") try {
          let f = JSON.parse(a);
          Object.assign(o, f);
        } catch (f) {
          console.warn("@jsonPayload error:", f);
        }
        else o[h] !== void 0 ? (Array.isArray(o[h]) || (o[h] = [o[h]]), o[h].push(Wt(a))) : o[h] = Wt(a);
      }), o;
    }(s));
    for (const n in s) {
      const c = s[n];
      if (ft(c)) t.files[n] = t.files[n] || [], t.files[n].push(c);
      else if (Array.isArray(c)) {
        const o = [], a = [];
        for (const h of c) ft(h) ? o.push(h) : a.push(h);
        if (o.length > 0 && o.length == c.length) {
          t.files[n] = t.files[n] || [];
          for (let h of o) t.files[n].push(h);
        } else if (t.json[n] = a, o.length > 0) {
          let h = n;
          n.startsWith("+") || n.endsWith("+") || (h += "+"), t.files[h] = t.files[h] || [];
          for (let f of o) t.files[h].push(f);
        }
      } else t.json[n] = c;
    }
  }
}
class nr {
  get baseUrl() {
    return this.baseURL;
  }
  set baseUrl(t) {
    this.baseURL = t;
  }
  constructor(t = "/", r, s = "en-US") {
    this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = !0, this.baseURL = t, this.lang = s, r ? this.authStore = r : typeof window < "u" && window.Deno ? this.authStore = new wt() : this.authStore = new Lr(), this.collections = new $r(this), this.files = new Kr(this), this.logs = new Fr(this), this.settings = new Dr(this), this.realtime = new tr(this), this.health = new Mr(this), this.backups = new Wr(this), this.crons = new Hr(this);
  }
  get admins() {
    return this.collection("_superusers");
  }
  createBatch() {
    return new Jr(this);
  }
  collection(t) {
    return this.recordServices[t] || (this.recordServices[t] = new jr(this, t)), this.recordServices[t];
  }
  autoCancellation(t) {
    return this.enableAutoCancellation = !!t, this;
  }
  cancelRequest(t) {
    return this.cancelControllers[t] && (this.cancelControllers[t].abort(), delete this.cancelControllers[t]), this;
  }
  cancelAllRequests() {
    for (let t in this.cancelControllers) this.cancelControllers[t].abort();
    return this.cancelControllers = {}, this;
  }
  filter(t, r) {
    if (!r) return t;
    for (let s in r) {
      let n = r[s];
      switch (typeof n) {
        case "boolean":
        case "number":
          n = "" + n;
          break;
        case "string":
          n = "'" + n.replace(/'/g, "\\'") + "'";
          break;
        default:
          n = n === null ? "null" : n instanceof Date ? "'" + n.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(n).replace(/'/g, "\\'") + "'";
      }
      t = t.replaceAll("{:" + s + "}", n);
    }
    return t;
  }
  getFileUrl(t, r, s = {}) {
    return console.warn("Please replace pb.getFileUrl() with pb.files.getURL()"), this.files.getURL(t, r, s);
  }
  buildUrl(t) {
    return console.warn("Please replace pb.buildUrl() with pb.buildURL()"), this.buildURL(t);
  }
  buildURL(t) {
    let r = this.baseURL;
    return typeof window > "u" || !window.location || r.startsWith("https://") || r.startsWith("http://") || (r = window.location.origin?.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "", this.baseURL.startsWith("/") || (r += window.location.pathname || "/", r += r.endsWith("/") ? "" : "/"), r += this.baseURL), t && (r += r.endsWith("/") ? "" : "/", r += t.startsWith("/") ? t.substring(1) : t), r;
  }
  async send(t, r) {
    r = this.initSendOptions(t, r);
    let s = this.buildURL(t);
    if (this.beforeSend) {
      const n = Object.assign({}, await this.beforeSend(s, r));
      n.url !== void 0 || n.options !== void 0 ? (s = n.url || s, r = n.options || r) : Object.keys(n).length && (r = n, console?.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."));
    }
    if (r.query !== void 0) {
      const n = er(r.query);
      n && (s += (s.includes("?") ? "&" : "?") + n), delete r.query;
    }
    return this.getHeader(r.headers, "Content-Type") == "application/json" && r.body && typeof r.body != "string" && (r.body = JSON.stringify(r.body)), (r.fetch || fetch)(s, r).then(async (n) => {
      let c = {};
      try {
        c = await n.json();
      } catch {
      }
      if (this.afterSend && (c = await this.afterSend(n, c, r)), n.status >= 400) throw new fe({ url: n.url, status: n.status, data: c });
      return c;
    }).catch((n) => {
      throw new fe(n);
    });
  }
  initSendOptions(t, r) {
    if ((r = Object.assign({ method: "GET" }, r)).body = function(n) {
      if (typeof FormData > "u" || n === void 0 || typeof n != "object" || n === null || gt(n) || !Kt(n)) return n;
      const c = new FormData();
      for (const o in n) {
        const a = n[o];
        if (a !== void 0) if (typeof a != "object" || Kt({ data: a })) {
          const h = Array.isArray(a) ? a : [a];
          for (let f of h) c.append(o, f);
        } else {
          let h = {};
          h[o] = a, c.append("@jsonPayload", JSON.stringify(h));
        }
      }
      return c;
    }(r.body), yt(r), r.query = Object.assign({}, r.params, r.query), r.requestKey === void 0 && (r.$autoCancel === !1 || r.query.$autoCancel === !1 ? r.requestKey = null : (r.$cancelKey || r.query.$cancelKey) && (r.requestKey = r.$cancelKey || r.query.$cancelKey)), delete r.$autoCancel, delete r.query.$autoCancel, delete r.$cancelKey, delete r.query.$cancelKey, this.getHeader(r.headers, "Content-Type") !== null || gt(r.body) || (r.headers = Object.assign({}, r.headers, { "Content-Type": "application/json" })), this.getHeader(r.headers, "Accept-Language") === null && (r.headers = Object.assign({}, r.headers, { "Accept-Language": this.lang })), this.authStore.token && this.getHeader(r.headers, "Authorization") === null && (r.headers = Object.assign({}, r.headers, { Authorization: this.authStore.token })), this.enableAutoCancellation && r.requestKey !== null) {
      const s = r.requestKey || (r.method || "GET") + t;
      delete r.requestKey, this.cancelRequest(s);
      const n = new AbortController();
      this.cancelControllers[s] = n, r.signal = n.signal;
    }
    return r;
  }
  getHeader(t, r) {
    t = t || {}, r = r.toLowerCase();
    for (let s in t) if (s.toLowerCase() == r) return t[s];
    return null;
  }
}
var Ne = {}, We = {}, Ht;
function Vr() {
  if (Ht) return We;
  Ht = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.getDefaultConfig = void 0;
  const i = (s, n) => {
    const c = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/, o = n.split("."), a = o[o.length - 1], h = ["localhost", "[::1]"];
    return h.includes(n) || s == "file" || h.includes(a) || !!n.match(c) || !!a.match(c);
  }, t = (s) => {
    const n = s.charAt(0) === "[", c = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    return !!s.match(c) || n;
  }, r = (s, n) => {
    if (i(s, n))
      return {
        protocol: "https",
        host: "arweave.net",
        port: 443
      };
    if (!t(n)) {
      let c = n.split(".");
      if (c.length >= 3) {
        c.shift();
        const o = c.join(".");
        return {
          protocol: s,
          host: o
        };
      }
    }
    return {
      protocol: s,
      host: n
    };
  };
  return We.getDefaultConfig = r, We;
}
var Gt;
function Xr() {
  return Gt || (Gt = 1, function(i) {
    var t = Ne && Ne.__createBinding || (Object.create ? function(c, o, a, h) {
      h === void 0 && (h = a);
      var f = Object.getOwnPropertyDescriptor(o, a);
      (!f || ("get" in f ? !o.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
        return o[a];
      } }), Object.defineProperty(c, h, f);
    } : function(c, o, a, h) {
      h === void 0 && (h = a), c[h] = o[a];
    }), r = Ne && Ne.__exportStar || function(c, o) {
      for (var a in c) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, c, a);
    };
    Object.defineProperty(i, "__esModule", { value: !0 });
    const s = st(), n = Vr();
    s.default.init = function(c = {}) {
      const o = {
        host: "arweave.net",
        port: 443,
        protocol: "https"
      };
      if (typeof location != "object" || !location.protocol || !location.hostname)
        return new s.default({
          ...c,
          ...o
        });
      const a = location.protocol.replace(":", ""), h = location.hostname, f = location.port ? parseInt(location.port) : a == "https" ? 443 : 80, C = (0, n.getDefaultConfig)(a, h), T = c.protocol || C.protocol, I = c.host || C.host, A = c.port || C.port || f;
      return new s.default({
        ...c,
        host: I,
        protocol: T,
        port: A
      });
    }, typeof globalThis == "object" ? globalThis.Arweave = s.default : typeof self == "object" && (self.Arweave = s.default), r(st(), i), i.default = s.default;
  }(Ne)), Ne;
}
Xr();
var Ie;
(function(i) {
  i.Google = "google", i.Github = "github", i.Discord = "discord";
})(Ie || (Ie = {}));
class Be {
  static devUrl = "http://localhost:8090";
  static devBackendUrl = "http://localhost:8091";
  static prodUrl = "https://wauth.arnode.asia";
  static prodBackendUrl = "https://wauth-backend.arnode.asia";
  pb;
  authData;
  wallet;
  authRecord;
  backendUrl;
  authDataListeners = [];
  constructor({ dev: t, url: r, backendUrl: s }) {
    t == null && (t = process.env.NODE_ENV === "development"), this.pb = new nr(r || (t ? Be.devUrl : Be.prodUrl)), this.backendUrl = s || (t ? Be.devBackendUrl : Be.prodBackendUrl), this.authData = null, this.wallet = null, this.authRecord = null, this.pb.authStore.onChange(async (n, c) => {
      !c || !localStorage.getItem("pocketbase_auth") || (console.log("[wauth] auth updated", c?.email), this.authRecord = c, this.authData = this.getAuthData(), this.wallet = await this.getWallet(), this.authDataListeners.forEach((o) => o(this.getAuthData())));
    }, !0);
  }
  onAuthDataChange(t) {
    this.authDataListeners.push(t), this.authData && t(this.authData);
  }
  async connect({ provider: t }) {
    if (!Object.values(Ie).includes(t))
      throw new Error(`Invalid provider: ${t}. Valid providers are: ${Object.values(Ie).join(", ")}`);
    try {
      this.authData = await this.pb.collection("users").authWithOAuth2({ provider: t }), this.authDataListeners.forEach((r) => r(this.getAuthData()));
    } catch (r) {
      return console.error("[wauth] error logging in,", r), null;
    }
    if (!this.isLoggedIn())
      return null;
    try {
      if (this.wallet = await this.getWallet(), !this.wallet) {
        if (console.log("[wauth] no wallet found, creating one"), await this.pb.collection("wallets").create({}), this.wallet = await this.getWallet(), !this.wallet)
          throw new Error("Failed to create wallet");
        console.log("[wauth] wallet created", this.wallet);
      }
    } catch (r) {
      console.error("[wauth]", r);
    }
    return this.getAuthData();
  }
  isLoggedIn() {
    return this.pb.authStore.isValid;
  }
  async getActiveAddress() {
    if (!this.isLoggedIn())
      throw new Error("Not logged in");
    return this.wallet || (this.wallet = await this.getWallet()), this.wallet?.address || "";
  }
  async getPermissions() {
    return ["ACCESS_ADDRESS", "SIGN_TRANSACTION"];
  }
  async getWalletNames() {
    return { [await this.getActiveAddress()]: "WAuth" };
  }
  async getArweaveConfig() {
    return {
      host: "arweave.net",
      port: 443,
      protocol: "https"
    };
  }
  getAuthData() {
    return this.isLoggedIn() ? this.authData : null;
  }
  async getWallet() {
    if (!this.isLoggedIn())
      return null;
    try {
      if (this.wallet = await this.pb.collection("wallets").getFirstListItem(`user.id = "${this.pb.authStore.record?.id}"`), console.log("[wauth] wallet", this.wallet?.address), !this.wallet) {
        if (console.log("[wauth] no wallet found, creating one"), await this.pb.collection("wallets").create({}), this.wallet = await this.pb.collection("wallets").getFirstListItem(`user.id = "${this.pb.authStore.record?.id}"`), !this.wallet)
          throw new Error("Failed to create wallet");
        console.log("[wauth] wallet created", this.wallet);
      }
      return this.wallet;
    } catch (t) {
      return `${t}`.includes("autocancelled") || console.info("[wauth] error fetching wallet", t), null;
    }
  }
  getAuthRecord() {
    return this.isLoggedIn() ? this.authRecord : null;
  }
  pocketbase() {
    return this.pb;
  }
  logout() {
    this.authData = null, this.wallet = null, this.authRecord = null, this.pb.authStore.clear();
  }
}
class kn {
  id = "wauth";
  name = "WAuth";
  description = "WAuth";
  theme = "25,25,25";
  logo = "94R-dRRMdFerUnt8HuQzWT48ktgKsgjQ0uH6zlMFXVw";
  url = "https://subspace.ar.io";
  walletRef;
  provider;
  addressListeners = [];
  authData;
  authDataListeners = [];
  logos = {
    [Ie.Google]: "mc-lqDefUJZdDSOOqepLICrfEoQCACnS51tB3kKqvlk",
    [Ie.Github]: "2bcLcWjuuRFDqFHlUvgvX2MzA2hOlZL1ED-T8OFBwCY",
    [Ie.Discord]: "i4Lw4kXr5t57p8E1oOVGMO4vR35TlYsaJ9XYbMMVd8I"
  };
  constructor({ provider: t }) {
    this.provider = t, this.id = this.id + "-" + this.provider, this.name = `${this.provider.charAt(0).toUpperCase() + this.provider.slice(1).toLowerCase()}`, this.walletRef = new Be({}), this.authData = this.walletRef.getAuthData(), this.logo = this.logos[t];
  }
  async connect() {
    const t = await this.walletRef.connect({ provider: this.provider });
    t && (this.authData = t?.meta, this.authDataListeners.forEach((r) => r(t?.meta)));
  }
  async reconnect() {
    const t = await this.walletRef.connect({ provider: this.provider });
    return t && (this.authData = t?.meta, this.authDataListeners.forEach((r) => r(this.authData))), this.authData;
  }
  onAuthDataChange(t) {
    this.authDataListeners.push(t);
  }
  getAuthData() {
    return this.authData;
  }
  async disconnect() {
    this.walletRef.logout(), this.authData = null;
  }
  async getActiveAddress() {
    return await this.walletRef.getActiveAddress();
  }
  async getAllAddresses() {
    return [await this.getActiveAddress()];
  }
  async sign(t, r) {
    throw new Error("Sign is not implemented in WAuth yet");
  }
  async getPermissions() {
    return await this.walletRef.getPermissions();
  }
  async getWalletNames() {
    return await this.walletRef.getWalletNames();
  }
  encrypt(t, r) {
    throw new Error("Encrypt is not implemented in WAuth yet");
  }
  decrypt(t, r) {
    throw new Error("Decrypt is not implemented in WAuth yet");
  }
  async getArweaveConfig() {
    return await this.walletRef.getArweaveConfig();
  }
  async isAvailable() {
    return !0;
  }
  async dispatch(t) {
    throw new Error("Dispatch is not implemented in WAuth yet");
  }
  async signDataItem(t) {
    throw new Error("Sign data item is not implemented in WAuth yet");
  }
  addAddressEvent(t) {
    return this.addressListeners.push(t), t;
  }
  removeAddressEvent(t) {
    this.addressListeners.splice(this.addressListeners.indexOf(t), 1);
  }
}
function Zr(i, t, r) {
  let s = r.length, n = t.length, c = s, o = 0, a = 0, h = t[n - 1].nextSibling, f = null;
  for (; o < n || a < c; ) {
    if (t[o] === r[a]) {
      o++, a++;
      continue;
    }
    for (; t[n - 1] === r[c - 1]; )
      n--, c--;
    if (n === o) {
      const C = c < s ? a ? r[a - 1].nextSibling : r[c - a] : h;
      for (; a < c; ) i.insertBefore(r[a++], C);
    } else if (c === a)
      for (; o < n; )
        (!f || !f.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === r[c - 1] && r[a] === t[n - 1]) {
      const C = t[--n].nextSibling;
      i.insertBefore(r[a++], t[o++].nextSibling), i.insertBefore(r[--c], C), t[n] = r[c];
    } else {
      if (!f) {
        f = /* @__PURE__ */ new Map();
        let T = a;
        for (; T < c; ) f.set(r[T], T++);
      }
      const C = f.get(t[o]);
      if (C != null)
        if (a < C && C < c) {
          let T = o, I = 1, A;
          for (; ++T < n && T < c && !((A = f.get(t[T])) == null || A !== C + I); )
            I++;
          if (I > C - a) {
            const x = t[o];
            for (; a < C; ) i.insertBefore(r[a++], x);
          } else i.replaceChild(r[a++], t[o++]);
        } else o++;
      else t[o++].remove();
    }
  }
}
const Jt = "_$DX_DELEGATE";
function Ae(i, t, r, s) {
  let n;
  const c = () => {
    const a = document.createElement("template");
    return a.innerHTML = i, a.content.firstChild;
  }, o = () => (n || (n = c())).cloneNode(!0);
  return o.cloneNode = o, o;
}
function Yr(i, t = window.document) {
  const r = t[Jt] || (t[Jt] = /* @__PURE__ */ new Set());
  for (let s = 0, n = i.length; s < n; s++) {
    const c = i[s];
    r.has(c) || (r.add(c), t.addEventListener(c, Qr));
  }
}
function zt(i, t, r) {
  mt(i) || (r == null ? i.removeAttribute(t) : i.setAttribute(t, r));
}
function Te(i, t) {
  mt(i) || (t == null ? i.removeAttribute("class") : i.className = t);
}
function me(i, t, r, s) {
  if (r !== void 0 && !s && (s = []), typeof t != "function") return it(i, t, s, r);
  Oe((n) => it(i, t(), n, r), s);
}
function mt(i) {
  return !!Ee.context && !Ee.done && (!i || i.isConnected);
}
function Qr(i) {
  if (Ee.registry && Ee.events && Ee.events.find(([h, f]) => f === i))
    return;
  let t = i.target;
  const r = `$$${i.type}`, s = i.target, n = i.currentTarget, c = (h) => Object.defineProperty(i, "target", {
    configurable: !0,
    value: h
  }), o = () => {
    const h = t[r];
    if (h && !t.disabled) {
      const f = t[`${r}Data`];
      if (f !== void 0 ? h.call(t, f, i) : h.call(t, i), i.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(i.target) && c(t.host), !0;
  }, a = () => {
    for (; o() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(i, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), Ee.registry && !Ee.done && (Ee.done = _$HY.done = !0), i.composedPath) {
    const h = i.composedPath();
    c(h[0]);
    for (let f = 0; f < h.length - 2 && (t = h[f], !!o()); f++) {
      if (t._$host) {
        t = t._$host, a();
        break;
      }
      if (t.parentNode === n)
        break;
    }
  } else a();
  c(s);
}
function it(i, t, r, s, n) {
  const c = mt(i);
  if (c) {
    !r && (r = [...i.childNodes]);
    let h = [];
    for (let f = 0; f < r.length; f++) {
      const C = r[f];
      C.nodeType === 8 && C.data.slice(0, 2) === "!$" ? C.remove() : h.push(C);
    }
    r = h;
  }
  for (; typeof r == "function"; ) r = r();
  if (t === r) return r;
  const o = typeof t, a = s !== void 0;
  if (i = a && r[0] && r[0].parentNode || i, o === "string" || o === "number") {
    if (c || o === "number" && (t = t.toString(), t === r))
      return r;
    if (a) {
      let h = r[0];
      h && h.nodeType === 3 ? h.data !== t && (h.data = t) : h = document.createTextNode(t), r = Le(i, r, s, h);
    } else
      r !== "" && typeof r == "string" ? r = i.firstChild.data = t : r = i.textContent = t;
  } else if (t == null || o === "boolean") {
    if (c) return r;
    r = Le(i, r, s);
  } else {
    if (o === "function")
      return Oe(() => {
        let h = t();
        for (; typeof h == "function"; ) h = h();
        r = it(i, h, r, s);
      }), () => r;
    if (Array.isArray(t)) {
      const h = [], f = r && Array.isArray(r);
      if (pt(h, t, r, n))
        return Oe(() => r = it(i, h, r, s, !0)), () => r;
      if (c) {
        if (!h.length) return r;
        if (s === void 0) return r = [...i.childNodes];
        let C = h[0];
        if (C.parentNode !== i) return r;
        const T = [C];
        for (; (C = C.nextSibling) !== s; ) T.push(C);
        return r = T;
      }
      if (h.length === 0) {
        if (r = Le(i, r, s), a) return r;
      } else f ? r.length === 0 ? Vt(i, h, s) : Zr(i, r, h) : (r && Le(i), Vt(i, h));
      r = h;
    } else if (t.nodeType) {
      if (c && t.parentNode) return r = a ? [t] : t;
      if (Array.isArray(r)) {
        if (a) return r = Le(i, r, s, t);
        Le(i, r, null, t);
      } else r == null || r === "" || !i.firstChild ? i.appendChild(t) : i.replaceChild(t, i.firstChild);
      r = t;
    }
  }
  return r;
}
function pt(i, t, r, s) {
  let n = !1;
  for (let c = 0, o = t.length; c < o; c++) {
    let a = t[c], h = r && r[i.length], f;
    if (!(a == null || a === !0 || a === !1)) if ((f = typeof a) == "object" && a.nodeType)
      i.push(a);
    else if (Array.isArray(a))
      n = pt(i, a, h) || n;
    else if (f === "function")
      if (s) {
        for (; typeof a == "function"; ) a = a();
        n = pt(
          i,
          Array.isArray(a) ? a : [a],
          Array.isArray(h) ? h : [h]
        ) || n;
      } else
        i.push(a), n = !0;
    else {
      const C = String(a);
      h && h.nodeType === 3 && h.data === C ? i.push(h) : i.push(document.createTextNode(C));
    }
  }
  return n;
}
function Vt(i, t, r = null) {
  for (let s = 0, n = t.length; s < n; s++) i.insertBefore(t[s], r);
}
function Le(i, t, r, s) {
  if (r === void 0) return i.textContent = "";
  const n = s || document.createTextNode("");
  if (t.length) {
    let c = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const a = t[o];
      if (n !== a) {
        const h = a.parentNode === i;
        !c && !o ? h ? i.replaceChild(n, a) : i.insertBefore(n, r) : h && a.remove();
      } else c = !0;
    }
  } else i.insertBefore(n, r);
  return [n];
}
const en = "http://www.w3.org/2000/svg";
function tn(i, t = !1) {
  return t ? document.createElementNS(en, i) : document.createElement(i);
}
function rn(i) {
  const { useShadow: t } = i, r = document.createTextNode(""), s = () => i.mount || document.body, n = bt();
  let c, o = !!Ee.context;
  return Xt(
    () => {
      o && (bt().user = o = !1), c || (c = cr(n, () => De(() => i.children)));
      const a = s();
      if (a instanceof HTMLHeadElement) {
        const [h, f] = Pe(!1), C = () => f(!0);
        lr((T) => me(a, () => h() ? T() : c(), null)), dt(C);
      } else {
        const h = tn(i.isSVG ? "g" : "div", i.isSVG), f = t && h.attachShadow ? h.attachShadow({
          mode: "open"
        }) : h;
        Object.defineProperty(h, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), me(f, c), a.appendChild(h), i.ref && i.ref(h), dt(() => a.removeChild(h));
      }
    },
    void 0,
    {
      render: !o
    }
  ), r;
}
const nn = "_outter_mjs0y_4", sn = "_backdrop_mjs0y_47", on = "_container_mjs0y_59", an = "_btn_mjs0y_92", cn = "_content_mjs0y_114", ln = "_head_mjs0y_133", un = "_main_mjs0y_141", hn = "_foot_mjs0y_144", Se = {
  outter: nn,
  backdrop: sn,
  container: on,
  btn: an,
  content: cn,
  head: ln,
  main: un,
  foot: hn
}, dn = "wallet_kit_strategy_id";
function fn() {
  localStorage && localStorage.removeItem(dn);
}
var gn = /* @__PURE__ */ Ae('<svg xmlns=http://www.w3.org/2000/svg width=1em height=1em viewBox="0 0 24 24"><path fill=currentColor d=M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z opacity=0.25></path><path fill=currentColor d=M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z><animateTransform attributeName=transform dur=1.612s repeatCount=indefinite type=rotate values="0 12 12;360 12 12">'), pn = /* @__PURE__ */ Ae('<button><svg xmlns=http://www.w3.org/2000/svg width=1.2em height=1.2em viewBox="0 0 24 24"><path d="m7.05 5.636l4.95 4.95l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95z">'), wn = /* @__PURE__ */ Ae("<div>"), yn = /* @__PURE__ */ Ae("<button role=link>Install "), mn = /* @__PURE__ */ Ae("<div><div><img><div></div><div></div>"), bn = /* @__PURE__ */ Ae("<div id=solid-arwallet-connector><div><div><div><h3></h3></div><div>Don't have a wallet? <a href=https://arwiki.wiki/#/en/wallets target=_blank>Get a new</a></div></div></div><div>"), vn = /* @__PURE__ */ Ae("<span><span>Connecting..."), Sn = /* @__PURE__ */ Ae("<button>Back"), An = /* @__PURE__ */ Ae("<div>no strategies"), Cn = /* @__PURE__ */ Ae("<button><span></span><img>");
const sr = ur(), Tn = () => gn();
function Rn(i) {
  let t = null;
  const r = () => i?.config?.permissions || ["ACCESS_ADDRESS", "SIGN_TRANSACTION"], s = () => i?.config?.strategies || null, n = () => i?.config?.gatewayConfig || {
    host: "arweave.net",
    port: 443,
    protocol: "https"
  }, c = () => i?.config?.appInfo || {
    name: window.location.hostname,
    logo: null
  }, [o, a] = Pe(!1), [h, f] = Pe(), [C, T] = Pe(!1), [I, A] = Pe(!1), [x, _] = Pe(), [D, F] = Pe(), [L, M] = Pe(!0), ee = () => or(x(), s()), N = De(() => `${n()?.protocol}://${n()?.host}`);
  hr(() => {
    T(!1), A(!1), ir(s(), r(), i?.config?.ensurePermissions).then((j) => {
      j && j.getActiveAddress().then((H) => {
        H && (_(j.id), f(H), a(!0));
      }).catch((H) => {
        throw H;
      });
    }).catch((j) => {
      console.log("[Arweave Wallet Kit] is not connected");
    }).finally(() => A(!1));
  }), dt(() => {
    T(!1), A(!1), t != null && ee()?.removeAddressEvent(t);
  });
  function O(j) {
    console.log("address changed : ", j), f(j), a(!!j);
  }
  Xt(() => {
    o() && (t = ee()?.addAddressEvent(O)), C() ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  });
  async function R() {
    if (!ee() || !o() || I())
      throw new Error("[Arweave Wallet Kit] Not yet connected");
    try {
      return await ee()?.disconnect(), fn(x() || ee()?.id), _(null), a(!1), f(null), t && ee()?.removeAddressEvent(t), Promise.resolve();
    } catch {
      throw new Error(`[Arweave Wallet Kit] Could not disconnect
` + (e?.message || e));
    }
  }
  async function U(j) {
    if (j) {
      F({
        name: j.name,
        logo: j.logo,
        url: j.url,
        theme: j.theme
      }), A(!0), M(!0);
      try {
        if (await j.isAvailable()) {
          await j.connect(r(), c(), n());
          const V = await j.getActiveAddress();
          if (V)
            f(V), a(!0), ar(j.id), _(j.id), A(!1), F(null), T(!1);
          else {
            const ae = new Error(`Connecting ${j.name} faild.`);
            throw ae.code = "FAILD", ae;
          }
        } else {
          const V = new Error(`Not installed ${j.name}.`);
          throw V.code = "UNINSTALL", V;
        }
      } catch (H) {
        H.code == "UNINSTALL" && M(!1);
      }
      A(!1), F(null);
    }
  }
  const K = (j) => (() => {
    var H = bn(), V = H.firstChild, ae = V.firstChild, ce = ae.firstChild, ye = ce.firstChild, Ce = ce.nextSibling, ge = V.nextSibling;
    return me(ye, (() => {
      var B = De(() => !!I());
      return () => B() ? (() => {
        var Z = vn();
        return Z.style.setProperty("display", "inline-flex"), Z.style.setProperty("align-items", "center"), Z.style.setProperty("gap", "0.5em"), Z;
      })() : "Connect to a wallet";
    })()), me(ce, ve(vt, {
      get when() {
        return !I();
      },
      get fallback() {
        return De(() => !!L())() ? ve(Tn, {}) : (() => {
          var B = Sn();
          return B.$$click = () => {
            A(!1);
          }, B;
        })();
      },
      get children() {
        var B = pn(), Z = B.firstChild, Y = Z.firstChild;
        return B.$$click = () => T(!1), B.style.setProperty("background", "transparent"), B.style.setProperty("padding", "0"), B.style.setProperty("display", "flex"), B.style.setProperty("justify-content", "center"), B.style.setProperty("align-items", "center"), Y.style.setProperty("fill", "currentcolor"), Oe(() => B.disabled = I()), B;
      }
    }), null), me(ae, ve(fr, {
      get children() {
        return [ve(St, {
          get when() {
            return !I();
          },
          get children() {
            var B = wn();
            return B.style.setProperty("display", "flex"), B.style.setProperty("flex-direction", "column"), B.style.setProperty("gap", "1em"), me(B, ve(gr, {
              get each() {
                return s();
              },
              get fallback() {
                return An();
              },
              children: (Z) => (() => {
                var Y = Cn(), k = Y.firstChild, ne = k.nextSibling;
                return Y.$$click = () => {
                  U(Z);
                }, Y.style.setProperty("display", "flex"), Y.style.setProperty("justify-content", "space-between"), Y.style.setProperty("align-items", "center"), me(k, () => Z.name), ne.style.setProperty("width", "16px"), ne.style.setProperty("height", "16px"), ne.style.setProperty("padding", "6px"), ne.style.setProperty("border-radius", "6px"), ne.style.setProperty("box-sizing", "content-box"), Oe((X) => {
                  var pe = Se.btn, se = I(), ie = `${N()}/${Z.logo}`, l = `rgb(${Z.theme || "0,0,0"})`;
                  return pe !== X.e && Te(Y, X.e = pe), se !== X.t && (Y.disabled = X.t = se), ie !== X.a && zt(ne, "src", X.a = ie), l !== X.o && ((X.o = l) != null ? ne.style.setProperty("background", l) : ne.style.removeProperty("background")), X;
                }, {
                  e: void 0,
                  t: void 0,
                  a: void 0,
                  o: void 0
                }), Y;
              })()
            })), Oe(() => Te(B, Se.main)), B;
          }
        }), ve(St, {
          get when() {
            return I();
          },
          get children() {
            var B = mn(), Z = B.firstChild, Y = Z.firstChild, k = Y.nextSibling, ne = k.nextSibling;
            return B.style.setProperty("display", "flex"), B.style.setProperty("flex-direction", "column"), B.style.setProperty("gap", "1em"), Z.style.setProperty("display", "flex"), Z.style.setProperty("flex-direction", "column"), Z.style.setProperty("width", "100%"), Z.style.setProperty("justify-content", "center"), Z.style.setProperty("align-items", "center"), Z.style.setProperty("gap", "0.5em"), Y.style.setProperty("width", "48px"), Y.style.setProperty("height", "48px"), Y.style.setProperty("padding", "16px"), Y.style.setProperty("border-radius", "16px"), Y.style.setProperty("box-sizing", "content-box"), me(k, () => D()?.name), ne.style.setProperty("font-size", "0.8em"), ne.style.setProperty("opacity", "0.6"), ne.style.setProperty("text-align", "center"), me(ne, (() => {
              var X = De(() => !!L());
              return () => X() ? "Confirm connection request in the wallet popup window" : `Not installed ${D()?.name} `;
            })()), me(B, ve(vt, {
              get when() {
                return !L();
              },
              get children() {
                var X = yn();
                return X.firstChild, me(X, () => D()?.name, null), Oe(() => Te(X, Se.btn)), X;
              }
            }), null), Oe((X) => {
              var pe = Se.main, se = `${N()}/${D()?.logo}`, ie = `rgb(${D()?.theme || "0,0,0"})`;
              return pe !== X.e && Te(B, X.e = pe), se !== X.t && zt(Y, "src", X.t = se), ie !== X.a && ((X.a = ie) != null ? Y.style.setProperty("background", ie) : Y.style.removeProperty("background")), X;
            }, {
              e: void 0,
              t: void 0,
              a: void 0
            }), B;
          }
        })];
      }
    }), Ce), Oe((B) => {
      var Z = Se.outter, Y = `${C() ? "visible" : "hidden"}`, k = Se.container, ne = `${C() ? "0% 0%" : "0% 50%"}`, X = `${C() ? "100" : "0"}`, pe = Se.content, se = Se.head, ie = Se.foot, l = Se.backdrop, u = `${C() ? "100" : "0"}`;
      return Z !== B.e && Te(H, B.e = Z), Y !== B.t && ((B.t = Y) != null ? H.style.setProperty("visibility", Y) : H.style.removeProperty("visibility")), k !== B.a && Te(V, B.a = k), ne !== B.o && ((B.o = ne) != null ? V.style.setProperty("translate", ne) : V.style.removeProperty("translate")), X !== B.i && ((B.i = X) != null ? V.style.setProperty("opacity", X) : V.style.removeProperty("opacity")), pe !== B.n && (ae.className = B.n = pe), se !== B.s && Te(ce, B.s = se), ie !== B.h && Te(Ce, B.h = ie), l !== B.r && Te(ge, B.r = l), u !== B.d && ((B.d = u) != null ? ge.style.setProperty("opacity", u) : ge.style.removeProperty("opacity")), B;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0,
      r: void 0,
      d: void 0
    }), H;
  })(), P = () => {
    if (o()) {
      console.log("[Arweave Wallet Kit] Already connected");
      return;
    }
    I() || (f(null), _(null), T(!0));
  }, W = {
    connected: o,
    connecting: I,
    address: h,
    showConnector: P,
    wallet: ee,
    disconnect: R,
    walletConnectionCheck: (j, H) => {
      j.addEventListener("click", (V) => {
        o() ? H()?.() : (P(), V.preventDefault());
      });
    }
  };
  return ve(sr.Provider, {
    value: W,
    get children() {
      return [De(() => i.children), ve(rn, {
        get children() {
          return ve(K, {});
        }
      })];
    }
  });
}
function Pn() {
  return dr(sr);
}
Yr(["click"]);
export {
  _n as BrowserWalletStrategy,
  Ie as WAuthProviders,
  kn as WAuthStrategy,
  Rn as WalletProvider,
  Pn as useWallet
};
