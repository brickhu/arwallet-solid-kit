(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("._outter_mjs0y_4{position:fixed;top:0;left:0;z-index:1000;width:0;height:0;all:initial;font-family:system-ui,sans-serif;font-size:1rem;@media (prefers-color-scheme: dark){*{--color-base-0: rgb(0, 0, 0);--color-base-100: #171717;--color-base-200: #343434;--color-base-content: #c2c2c2;--color-primary: rgb(127, 67, 255);--color-primary-content: rgb(227, 218, 237)}}@media (prefers-color-scheme: light){*{--color-base-0: rgb(255, 255, 255);--color-base-100: #e9e9e9;--color-base-200: #c9c9c9;--color-base-content: #171717;--color-primary: rgb(103, 36, 248);--color-primary-content: rgb(227, 218, 237)}}}._backdrop_mjs0y_47{background:rgb(from var(--color-base-0) r g b / 60%);width:100vw;height:100vh;position:fixed;top:0;left:0;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:1000}._container_mjs0y_59{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--color-base-content);z-index:1001;button{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-200) r g b / 60%);--color-text: var(--color-base-content);border:none;cursor:pointer;background:transparent;padding:.5em 1em;box-sizing:border-box;color:var(--color-text);transition:all;transition-duration:.15s}button:hover{--color-border: var(--color-base-200);--color-bg: rgb(from var(--color-base-0) r g b / 100%);--color-text: var(--color-base-content)}button:disabled{opacity:50%}button._btn_mjs0y_92{background-color:var(--color-bg);color:var(--color-text);border:solid 1px var(--color-border);padding:.5em 1em;border-radius:.4em;display:inline-flex;justify-content:center;align-items:center}a{color:var(--color-primary)}a:hover{color:var(--color-base-content);text-decoration:underline}}._outter_mjs0y_4,._container_mjs0y_59,._content_mjs0y_114,._backdrop_mjs0y_47{transition:all;transition-duration:.15s}._content_mjs0y_114{max-width:320px;width:320px;background-color:rgb(from var(--color-base-100) r g b / 60%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);display:block;box-sizing:border-box;border-radius:1em;box-shadow:0 14px 47px -13px #0000000d;-webkit-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);-moz-box-shadow:0px 14px 47px -13px rgba(0,0,0,.05);border:solid 1px rgb(from var(--color-base-200) r g b / 60%);._head_mjs0y_133{display:flex;width:100%;justify-content:space-between;align-items:center;padding:1em;box-sizing:border-box}._main_mjs0y_141{padding:1em 1.5em}._foot_mjs0y_144{padding:.5em 1em 1.5em;text-align:center;color:rgb(from var(--color-base-content) r g b / 60%)}h3{font-size:1.1rem;line-height:1.2rem;padding:0;margin:0}}._content_mjs0y_114:hover{border:solid 1px rgb(from var(--color-base-200) r g b / 100%)}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { sharedConfig as T, getOwner as oe, createEffect as ce, runWithOwner as me, createMemo as O, createSignal as I, createRoot as pe, onCleanup as Y, createRenderEffect as W, createContext as be, onMount as Ae, createComponent as $, useContext as Pe, Show as re, Switch as _e, Match as le, For as Ce } from "solid-js";
import { syncStrategies as $e, getStrategy as Se, saveStrategy as xe } from "@arweave-wallet-kit/core/strategy";
var Ee = Object.defineProperty, Ne = (i, t, n) => t in i ? Ee(i, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[t] = n, R = (i, t, n) => (Ne(i, typeof t != "symbol" ? t + "" : t, n), n);
async function A(i, t = []) {
  return window != null && window.arweaveWallet ? await window.arweaveWallet[i](...t) : new Promise(
    (n, l) => window.addEventListener("arweaveWalletLoaded", async () => {
      try {
        n(await window.arweaveWallet[i](...t));
      } catch (d) {
        l(d);
      }
    })
  );
}
class lt {
  constructor() {
    R(this, "id", "browserwallet"), R(this, "name", "Browser Wallet"), R(this, "description", "Any browser wallet with an injected API"), R(this, "theme", "121,212,131"), R(this, "logo", "KKiSlNKc5K59MXzUPz5qjtCLsl6_ckjAOg9MyAzaUs0");
  }
  async isAvailable() {
    return typeof window > "u" || !window ? (console.error(
      `[Arweave Wallet Kit] "${this.id}" strategy is unavailable. Window is undefined`
    ), !1) : window.arweaveWallet ? !0 : new Promise((t) => {
      const n = () => t(!0);
      window.addEventListener("arweaveWalletLoaded", n), setTimeout(() => {
        window.removeEventListener("arweaveWalletLoaded", n), window.arweaveWallet || console.error(
          `[Arweave Wallet Kit] "${this.id}" strategy is unavailable. window.arweaveWallet is undefined`
        ), t(!!window.arweaveWallet);
      }, 7e3);
    });
  }
  async sync() {
  }
  async connect(t, n, l) {
    return await A("connect", [t, n, l]);
  }
  async disconnect() {
    return await A("disconnect");
  }
  async getActiveAddress() {
    return await A("getActiveAddress");
  }
  async getAllAddresses() {
    return await A("getAllAddresses");
  }
  async getPermissions() {
    return await A("getPermissions");
  }
  async getWalletNames() {
    return await A("getWalletNames");
  }
  async sign(t, n) {
    const l = await A("sign", [
      t,
      n
    ]);
    return t.setSignature({
      id: l.id,
      owner: l.owner,
      reward: l.reward,
      tags: l.tags,
      signature: l.signature
    }), t;
  }
  async signDataItem(t) {
    return await A("signDataItem", [t]);
  }
  async encrypt(t, n) {
    return await A("encrypt", [t, n]);
  }
  async decrypt(t, n) {
    return await A("decrypt", [t, n]);
  }
  async getArweaveConfig() {
    return await A("getArweaveConfig");
  }
  async signature(t, n) {
    return await A("signature", [t, n]);
  }
  async getActivePublicKey() {
    return await A("getActivePublicKey");
  }
  async dispatch(t) {
    return await A("dispatch", [t]);
  }
  async addToken(t) {
    throw new Error("Not implemented: " + t);
  }
  addAddressEvent(t) {
    const n = (l) => t(l.detail.address);
    return addEventListener("walletSwitch", n), n;
  }
  removeAddressEvent(t) {
    removeEventListener("walletSwitch", t);
  }
}
function Te(i, t, n) {
  let l = n.length, d = t.length, c = l, a = 0, o = 0, r = t[d - 1].nextSibling, f = null;
  for (; a < d || o < c; ) {
    if (t[a] === n[o]) {
      a++, o++;
      continue;
    }
    for (; t[d - 1] === n[c - 1]; )
      d--, c--;
    if (d === a) {
      const y = c < l ? o ? n[o - 1].nextSibling : n[c - o] : r;
      for (; o < c; ) i.insertBefore(n[o++], y);
    } else if (c === o)
      for (; a < d; )
        (!f || !f.has(t[a])) && t[a].remove(), a++;
    else if (t[a] === n[c - 1] && n[o] === t[d - 1]) {
      const y = t[--d].nextSibling;
      i.insertBefore(n[o++], t[a++].nextSibling), i.insertBefore(n[--c], y), t[d] = n[c];
    } else {
      if (!f) {
        f = /* @__PURE__ */ new Map();
        let v = o;
        for (; v < c; ) f.set(n[v], v++);
      }
      const y = f.get(t[a]);
      if (y != null)
        if (o < y && y < c) {
          let v = a, P = 1, C;
          for (; ++v < d && v < c && !((C = f.get(t[v])) == null || C !== y + P); )
            P++;
          if (P > y - o) {
            const H = t[a];
            for (; o < y; ) i.insertBefore(n[o++], H);
          } else i.replaceChild(n[o++], t[a++]);
        } else a++;
      else t[a++].remove();
    }
  }
}
const se = "_$DX_DELEGATE";
function x(i, t, n, l) {
  let d;
  const c = () => {
    const o = document.createElement("template");
    return o.innerHTML = i, o.content.firstChild;
  }, a = () => (d || (d = c())).cloneNode(!0);
  return a.cloneNode = a, a;
}
function We(i, t = window.document) {
  const n = t[se] || (t[se] = /* @__PURE__ */ new Set());
  for (let l = 0, d = i.length; l < d; l++) {
    const c = i[l];
    n.has(c) || (n.add(c), t.addEventListener(c, ke));
  }
}
function ae(i, t, n) {
  Q(i) || (n == null ? i.removeAttribute(t) : i.setAttribute(t, n));
}
function N(i, t) {
  Q(i) || (t == null ? i.removeAttribute("class") : i.className = t);
}
function _(i, t, n, l) {
  if (n !== void 0 && !l && (l = []), typeof t != "function") return q(i, t, l, n);
  W((d) => q(i, t(), d, n), l);
}
function Q(i) {
  return !!T.context && !T.done && (!i || i.isConnected);
}
function ke(i) {
  if (T.registry && T.events && T.events.find(([r, f]) => f === i))
    return;
  let t = i.target;
  const n = `$$${i.type}`, l = i.target, d = i.currentTarget, c = (r) => Object.defineProperty(i, "target", {
    configurable: !0,
    value: r
  }), a = () => {
    const r = t[n];
    if (r && !t.disabled) {
      const f = t[`${n}Data`];
      if (f !== void 0 ? r.call(t, f, i) : r.call(t, i), i.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(i.target) && c(t.host), !0;
  }, o = () => {
    for (; a() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(i, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), T.registry && !T.done && (T.done = _$HY.done = !0), i.composedPath) {
    const r = i.composedPath();
    c(r[0]);
    for (let f = 0; f < r.length - 2 && (t = r[f], !!a()); f++) {
      if (t._$host) {
        t = t._$host, o();
        break;
      }
      if (t.parentNode === d)
        break;
    }
  } else o();
  c(l);
}
function q(i, t, n, l, d) {
  const c = Q(i);
  if (c) {
    !n && (n = [...i.childNodes]);
    let r = [];
    for (let f = 0; f < n.length; f++) {
      const y = n[f];
      y.nodeType === 8 && y.data.slice(0, 2) === "!$" ? y.remove() : r.push(y);
    }
    n = r;
  }
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const a = typeof t, o = l !== void 0;
  if (i = o && n[0] && n[0].parentNode || i, a === "string" || a === "number") {
    if (c || a === "number" && (t = t.toString(), t === n))
      return n;
    if (o) {
      let r = n[0];
      r && r.nodeType === 3 ? r.data !== t && (r.data = t) : r = document.createTextNode(t), n = D(i, n, l, r);
    } else
      n !== "" && typeof n == "string" ? n = i.firstChild.data = t : n = i.textContent = t;
  } else if (t == null || a === "boolean") {
    if (c) return n;
    n = D(i, n, l);
  } else {
    if (a === "function")
      return W(() => {
        let r = t();
        for (; typeof r == "function"; ) r = r();
        n = q(i, r, n, l);
      }), () => n;
    if (Array.isArray(t)) {
      const r = [], f = n && Array.isArray(n);
      if (J(r, t, n, d))
        return W(() => n = q(i, r, n, l, !0)), () => n;
      if (c) {
        if (!r.length) return n;
        if (l === void 0) return n = [...i.childNodes];
        let y = r[0];
        if (y.parentNode !== i) return n;
        const v = [y];
        for (; (y = y.nextSibling) !== l; ) v.push(y);
        return n = v;
      }
      if (r.length === 0) {
        if (n = D(i, n, l), o) return n;
      } else f ? n.length === 0 ? de(i, r, l) : Te(i, n, r) : (n && D(i), de(i, r));
      n = r;
    } else if (t.nodeType) {
      if (c && t.parentNode) return n = o ? [t] : t;
      if (Array.isArray(n)) {
        if (o) return n = D(i, n, l, t);
        D(i, n, null, t);
      } else n == null || n === "" || !i.firstChild ? i.appendChild(t) : i.replaceChild(t, i.firstChild);
      n = t;
    }
  }
  return n;
}
function J(i, t, n, l) {
  let d = !1;
  for (let c = 0, a = t.length; c < a; c++) {
    let o = t[c], r = n && n[i.length], f;
    if (!(o == null || o === !0 || o === !1)) if ((f = typeof o) == "object" && o.nodeType)
      i.push(o);
    else if (Array.isArray(o))
      d = J(i, o, r) || d;
    else if (f === "function")
      if (l) {
        for (; typeof o == "function"; ) o = o();
        d = J(
          i,
          Array.isArray(o) ? o : [o],
          Array.isArray(r) ? r : [r]
        ) || d;
      } else
        i.push(o), d = !0;
    else {
      const y = String(o);
      r && r.nodeType === 3 && r.data === y ? i.push(r) : i.push(document.createTextNode(y));
    }
  }
  return d;
}
function de(i, t, n = null) {
  for (let l = 0, d = t.length; l < d; l++) i.insertBefore(t[l], n);
}
function D(i, t, n, l) {
  if (n === void 0) return i.textContent = "";
  const d = l || document.createTextNode("");
  if (t.length) {
    let c = !1;
    for (let a = t.length - 1; a >= 0; a--) {
      const o = t[a];
      if (d !== o) {
        const r = o.parentNode === i;
        !c && !a ? r ? i.replaceChild(d, o) : i.insertBefore(d, n) : r && o.remove();
      } else c = !0;
    }
  } else i.insertBefore(d, n);
  return [d];
}
const Le = "http://www.w3.org/2000/svg";
function je(i, t = !1) {
  return t ? document.createElementNS(Le, i) : document.createElement(i);
}
function Ie(i) {
  const { useShadow: t } = i, n = document.createTextNode(""), l = () => i.mount || document.body, d = oe();
  let c, a = !!T.context;
  return ce(
    () => {
      a && (oe().user = a = !1), c || (c = me(d, () => O(() => i.children)));
      const o = l();
      if (o instanceof HTMLHeadElement) {
        const [r, f] = I(!1), y = () => f(!0);
        pe((v) => _(o, () => r() ? v() : c(), null)), Y(y);
      } else {
        const r = je(i.isSVG ? "g" : "div", i.isSVG), f = t && r.attachShadow ? r.attachShadow({
          mode: "open"
        }) : r;
        Object.defineProperty(r, "_$host", {
          get() {
            return n.parentNode;
          },
          configurable: !0
        }), _(f, c), o.appendChild(r), i.ref && i.ref(r), Y(() => o.removeChild(r));
      }
    },
    void 0,
    {
      render: !a
    }
  ), n;
}
const Be = "_outter_mjs0y_4", Me = "_backdrop_mjs0y_47", Ke = "_container_mjs0y_59", De = "_btn_mjs0y_92", Oe = "_content_mjs0y_114", Ge = "_head_mjs0y_133", Re = "_main_mjs0y_141", He = "_foot_mjs0y_144", S = {
  outter: Be,
  backdrop: Me,
  container: Ke,
  btn: De,
  content: Oe,
  head: Ge,
  main: Re,
  foot: He
}, Ve = "wallet_kit_strategy_id";
function Ue() {
  localStorage && localStorage.removeItem(Ve);
}
var qe = /* @__PURE__ */ x('<svg xmlns=http://www.w3.org/2000/svg width=1em height=1em viewBox="0 0 24 24"><path fill=currentColor d=M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z opacity=0.25></path><path fill=currentColor d=M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z><animateTransform attributeName=transform dur=1.612s repeatCount=indefinite type=rotate values="0 12 12;360 12 12">'), Ze = /* @__PURE__ */ x('<button><svg xmlns=http://www.w3.org/2000/svg width=1.2em height=1.2em viewBox="0 0 24 24"><path d="m7.05 5.636l4.95 4.95l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95z">'), ze = /* @__PURE__ */ x("<div>"), Fe = /* @__PURE__ */ x("<button role=link>Install "), Xe = /* @__PURE__ */ x("<div><div><img><div></div><div></div>"), Ye = /* @__PURE__ */ x("<div id=solid-arwallet-connector><div><div><div><h3></h3></div><div>Don't have a wallet? <a href=https://arwiki.wiki/#/en/wallets target=_blank>Get a new</a></div></div></div><div>"), Je = /* @__PURE__ */ x("<span><span>Connecting..."), Qe = /* @__PURE__ */ x("<button>Back"), et = /* @__PURE__ */ x("<div>no strategies"), tt = /* @__PURE__ */ x("<button><span></span><img>");
const fe = be(), nt = () => qe();
function st(i) {
  let t = null;
  const n = () => i?.config?.permissions || ["ACCESS_ADDRESS", "SIGN_TRANSACTION"], l = () => i?.config?.strategies || null, d = () => i?.config?.gatewayConfig || {
    host: "arweave.net",
    port: 443,
    protocol: "https"
  }, c = () => i?.config?.appInfo || {
    name: window.location.hostname,
    logo: null
  }, [a, o] = I(!1), [r, f] = I(), [y, v] = I(!1), [P, C] = I(!1), [H, V] = I(), [G, Z] = I(), [z, ee] = I(!0), B = () => Se(H(), l()), te = O(() => `${d()?.protocol}://${d()?.host}`);
  Ae(() => {
    v(!1), C(!1), $e(l(), n(), i?.config?.ensurePermissions).then((g) => {
      g && g.getActiveAddress().then((p) => {
        p && (V(g.id), f(p), o(!0));
      }).catch((p) => {
        throw p;
      });
    }).catch((g) => {
      console.log("[Arweave Wallet Kit] is not connected");
    }).finally(() => C(!1));
  }), Y(() => {
    v(!1), C(!1), t != null && B()?.removeAddressEvent(t);
  });
  function ye(g) {
    console.log("address changed : ", g), f(g), o(!!g);
  }
  ce(() => {
    a() && (t = B()?.addAddressEvent(ye)), y() ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  });
  async function ue() {
    if (!B() || !a() || P())
      throw new Error("[Arweave Wallet Kit] Not yet connected");
    try {
      return await B()?.disconnect(), Ue(H() || B()?.id), V(null), o(!1), f(null), t && B()?.removeAddressEvent(t), Promise.resolve();
    } catch {
      throw new Error(`[Arweave Wallet Kit] Could not disconnect
` + (e?.message || e));
    }
  }
  async function ge(g) {
    if (g) {
      Z({
        name: g.name,
        logo: g.logo,
        url: g.url,
        theme: g.theme
      }), C(!0), ee(!0);
      try {
        if (await g.isAvailable()) {
          await g.connect(n(), c(), d());
          const b = await g.getActiveAddress();
          if (b)
            f(b), o(!0), xe(g.id), V(g.id), C(!1), Z(null), v(!1);
          else {
            const M = new Error(`Connecting ${g.name} faild.`);
            throw M.code = "FAILD", M;
          }
        } else {
          const b = new Error(`Not installed ${g.name}.`);
          throw b.code = "UNINSTALL", b;
        }
      } catch (p) {
        p.code == "UNINSTALL" && ee(!1);
      }
      C(!1), Z(null);
    }
  }
  const he = (g) => (() => {
    var p = Ye(), b = p.firstChild, M = b.firstChild, U = M.firstChild, ve = U.firstChild, ie = U.nextSibling, F = b.nextSibling;
    return _(ve, (() => {
      var s = O(() => !!P());
      return () => s() ? (() => {
        var w = Je();
        return w.style.setProperty("display", "inline-flex"), w.style.setProperty("align-items", "center"), w.style.setProperty("gap", "0.5em"), w;
      })() : "Connect to a wallet";
    })()), _(U, $(re, {
      get when() {
        return !P();
      },
      get fallback() {
        return O(() => !!z())() ? $(nt, {}) : (() => {
          var s = Qe();
          return s.$$click = () => {
            C(!1);
          }, s;
        })();
      },
      get children() {
        var s = Ze(), w = s.firstChild, h = w.firstChild;
        return s.$$click = () => v(!1), s.style.setProperty("background", "transparent"), s.style.setProperty("padding", "0"), s.style.setProperty("display", "flex"), s.style.setProperty("justify-content", "center"), s.style.setProperty("align-items", "center"), h.style.setProperty("fill", "currentcolor"), W(() => s.disabled = P()), s;
      }
    }), null), _(M, $(_e, {
      get children() {
        return [$(le, {
          get when() {
            return !P();
          },
          get children() {
            var s = ze();
            return s.style.setProperty("display", "flex"), s.style.setProperty("flex-direction", "column"), s.style.setProperty("gap", "1em"), _(s, $(Ce, {
              get each() {
                return l();
              },
              get fallback() {
                return et();
              },
              children: (w) => (() => {
                var h = tt(), k = h.firstChild, m = k.nextSibling;
                return h.$$click = () => {
                  ge(w);
                }, h.style.setProperty("display", "flex"), h.style.setProperty("justify-content", "space-between"), h.style.setProperty("align-items", "center"), _(k, () => w.name), m.style.setProperty("width", "16px"), m.style.setProperty("height", "16px"), m.style.setProperty("padding", "6px"), m.style.setProperty("border-radius", "6px"), m.style.setProperty("box-sizing", "content-box"), W((u) => {
                  var L = S.btn, j = P(), E = `${te()}/${w.logo}`, K = `rgb(${w.theme || "0,0,0"})`;
                  return L !== u.e && N(h, u.e = L), j !== u.t && (h.disabled = u.t = j), E !== u.a && ae(m, "src", u.a = E), K !== u.o && ((u.o = K) != null ? m.style.setProperty("background", K) : m.style.removeProperty("background")), u;
                }, {
                  e: void 0,
                  t: void 0,
                  a: void 0,
                  o: void 0
                }), h;
              })()
            })), W(() => N(s, S.main)), s;
          }
        }), $(le, {
          get when() {
            return P();
          },
          get children() {
            var s = Xe(), w = s.firstChild, h = w.firstChild, k = h.nextSibling, m = k.nextSibling;
            return s.style.setProperty("display", "flex"), s.style.setProperty("flex-direction", "column"), s.style.setProperty("gap", "1em"), w.style.setProperty("display", "flex"), w.style.setProperty("flex-direction", "column"), w.style.setProperty("width", "100%"), w.style.setProperty("justify-content", "center"), w.style.setProperty("align-items", "center"), w.style.setProperty("gap", "0.5em"), h.style.setProperty("width", "48px"), h.style.setProperty("height", "48px"), h.style.setProperty("padding", "16px"), h.style.setProperty("border-radius", "16px"), h.style.setProperty("box-sizing", "content-box"), _(k, () => G()?.name), m.style.setProperty("font-size", "0.8em"), m.style.setProperty("opacity", "0.6"), m.style.setProperty("text-align", "center"), _(m, (() => {
              var u = O(() => !!z());
              return () => u() ? "Confirm connection request in the wallet popup window" : `Not installed ${G()?.name} `;
            })()), _(s, $(re, {
              get when() {
                return !z();
              },
              get children() {
                var u = Fe();
                return u.firstChild, _(u, () => G()?.name, null), W(() => N(u, S.btn)), u;
              }
            }), null), W((u) => {
              var L = S.main, j = `${te()}/${G()?.logo}`, E = `rgb(${G()?.theme || "0,0,0"})`;
              return L !== u.e && N(s, u.e = L), j !== u.t && ae(h, "src", u.t = j), E !== u.a && ((u.a = E) != null ? h.style.setProperty("background", E) : h.style.removeProperty("background")), u;
            }, {
              e: void 0,
              t: void 0,
              a: void 0
            }), s;
          }
        })];
      }
    }), ie), W((s) => {
      var w = S.outter, h = `${y() ? "visible" : "hidden"}`, k = S.container, m = `${y() ? "0% 0%" : "0% 50%"}`, u = `${y() ? "100" : "0"}`, L = S.content, j = S.head, E = S.foot, K = S.backdrop, X = `${y() ? "100" : "0"}`;
      return w !== s.e && N(p, s.e = w), h !== s.t && ((s.t = h) != null ? p.style.setProperty("visibility", h) : p.style.removeProperty("visibility")), k !== s.a && N(b, s.a = k), m !== s.o && ((s.o = m) != null ? b.style.setProperty("translate", m) : b.style.removeProperty("translate")), u !== s.i && ((s.i = u) != null ? b.style.setProperty("opacity", u) : b.style.removeProperty("opacity")), L !== s.n && (M.className = s.n = L), j !== s.s && N(U, s.s = j), E !== s.h && N(ie, s.h = E), K !== s.r && N(F, s.r = K), X !== s.d && ((s.d = X) != null ? F.style.setProperty("opacity", X) : F.style.removeProperty("opacity")), s;
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
    }), p;
  })(), ne = () => {
    if (a()) {
      console.log("[Arweave Wallet Kit] Already connected");
      return;
    }
    P() || (f(null), V(null), v(!0));
  }, we = {
    connected: a,
    connecting: P,
    address: r,
    showConnector: ne,
    wallet: B,
    disconnect: ue,
    walletConnectionCheck: (g, p) => {
      g.addEventListener("click", (b) => {
        a() ? p()?.() : (ne(), b.preventDefault());
      });
    }
  };
  return $(fe.Provider, {
    value: we,
    get children() {
      return [O(() => i.children), $(Ie, {
        get children() {
          return $(he, {});
        }
      })];
    }
  });
}
function at() {
  return Pe(fe);
}
We(["click"]);
export {
  lt as BrowserWalletStrategy,
  st as WalletProvider,
  at as useWallet
};
