// node_modules/treeselectjs/dist/treeselectjs.mjs
var li = Object.defineProperty;
var ni = (l, e, t) => e in l ? li(l, e, { enumerable: true, configurable: true, writable: true, value: t }) : l[e] = t;
var c = (l, e, t) => (ni(l, typeof e != "symbol" ? e + "" : e, t), t);
var gt = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
};
var n = (l, e, t) => (gt(l, e, "read from private field"), t ? t.call(l) : e.get(l));
var r = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
};
var m = (l, e, t, s) => (gt(l, e, "write to private field"), s ? s.call(l, t) : e.set(l, t), t);
var o = (l, e, t) => (gt(l, e, "access private method"), t);
var It = {
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
  arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  attention: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  clear: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
  cross: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  partialCheck: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
};
var O = (l, e) => {
  if (e.innerHTML = "", typeof l == "string")
    e.innerHTML = l;
  else {
    const t = l.cloneNode(true);
    e.appendChild(t);
  }
};
var Pt = (l) => {
  const e = l ? { ...l } : {};
  return Object.keys(It).forEach((t) => {
    e[t] || (e[t] = It[t]);
  }), e;
};
var ai = (l) => l.reduce((e, { name: t }, s) => (e += t, s < l.length - 1 && (e += ", "), e), "");
var T;
var E;
var D;
var v;
var ue;
var Dt;
var H;
var R;
var pe;
var Ht;
var me;
var Gt;
var G;
var U;
var N;
var V;
var fe;
var Mt;
var be;
var Ft;
var Ce;
var qt;
var ge;
var jt;
var we;
var $t;
var ke;
var Wt;
var Ee;
var Rt;
var ve;
var Ut;
var Le;
var zt;
var ye;
var Yt;
var xe;
var Kt;
var Se;
var Xt;
var _e;
var Jt;
var Ae;
var Zt;
var Te;
var Qt;
var Ne;
var es;
var z;
var wt;
var oi = class {
  constructor({
    value: e,
    showTags: t,
    tagsCountText: s,
    clearable: i,
    isAlwaysOpened: a,
    searchable: h,
    placeholder: p,
    disabled: f,
    isSingleSelect: b,
    id: C,
    ariaLabel: g,
    iconElements: w,
    inputCallback: k,
    searchCallback: y,
    openCallback: I,
    closeCallback: W,
    keydownCallback: ae,
    focusCallback: bt,
    blurCallback: Ct,
    nameChangeCallback: oe
  }) {
    r(this, ue);
    r(this, H);
    r(this, pe);
    r(this, me);
    r(this, G);
    r(this, N);
    r(this, fe);
    r(this, be);
    r(this, Ce);
    r(this, ge);
    r(this, we);
    r(this, ke);
    r(this, Ee);
    r(this, ve);
    r(this, Le);
    r(this, ye);
    r(this, xe);
    r(this, Se);
    r(this, _e);
    r(this, Ae);
    r(this, Te);
    r(this, Ne);
    r(this, z);
    c(this, "value");
    c(this, "showTags");
    c(this, "tagsCountText");
    c(this, "clearable");
    c(this, "isAlwaysOpened");
    c(this, "searchable");
    c(this, "placeholder");
    c(this, "disabled");
    c(this, "isSingleSelect");
    c(this, "id");
    c(this, "ariaLabel");
    c(this, "iconElements");
    c(this, "isOpened");
    c(this, "searchText");
    c(this, "srcElement");
    r(this, T, void 0);
    r(this, E, void 0);
    r(this, D, void 0);
    r(this, v, void 0);
    c(this, "inputCallback");
    c(this, "searchCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "keydownCallback");
    c(this, "focusCallback");
    c(this, "blurCallback");
    c(this, "nameChangeCallback");
    this.value = e, this.showTags = t, this.tagsCountText = s, this.searchable = h, this.placeholder = p, this.clearable = i, this.isAlwaysOpened = a, this.disabled = f, this.isSingleSelect = b, this.id = C, this.ariaLabel = g, this.iconElements = w, this.isOpened = false, this.searchText = "", m(this, T, o(this, Ce, qt).call(this)), m(this, E, o(this, Le, zt).call(this)), m(this, D, o(this, Se, Xt).call(this)), m(this, v, null), this.inputCallback = k, this.searchCallback = y, this.openCallback = I, this.closeCallback = W, this.keydownCallback = ae, this.focusCallback = bt, this.blurCallback = Ct, this.nameChangeCallback = oe, this.srcElement = o(this, fe, Mt).call(this, n(this, T), n(this, E), n(this, D)), o(this, ue, Dt).call(this);
  }
  // Public methods
  focus() {
    setTimeout(() => n(this, E).focus(), 0);
  }
  blur() {
    this.isOpened && o(this, N, V).call(this), this.clearSearch(), n(this, E).blur();
  }
  updateValue(e) {
    this.value = e, o(this, H, R).call(this), o(this, G, U).call(this);
  }
  removeItem(e) {
    this.value = this.value.filter((t) => t.id !== e), o(this, z, wt).call(this), o(this, H, R).call(this), o(this, G, U).call(this);
  }
  clear() {
    this.value = [], o(this, z, wt).call(this), o(this, H, R).call(this), this.clearSearch();
  }
  openClose() {
    o(this, N, V).call(this);
  }
  clearSearch() {
    this.searchText = "", this.searchCallback(""), o(this, G, U).call(this);
  }
};
T = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakSet(), Dt = function() {
  o(this, H, R).call(this), o(this, G, U).call(this), o(this, pe, Ht).call(this);
}, H = /* @__PURE__ */ new WeakSet(), R = function() {
  if (n(this, T).innerHTML = "", this.showTags) {
    n(this, T).append(...o(this, ge, jt).call(this));
    const e = ai(this.value);
    this.nameChangeCallback(e);
  } else {
    const e = o(this, ve, Ut).call(this);
    n(this, T).appendChild(e), this.nameChangeCallback(e.innerText);
  }
  n(this, T).appendChild(n(this, E));
}, pe = /* @__PURE__ */ new WeakSet(), Ht = function() {
  const e = [];
  n(this, D).innerHTML = "", this.clearable && e.push(o(this, _e, Jt).call(this)), this.isAlwaysOpened || e.push(o(this, Te, Qt).call(this, this.isOpened)), e.length && n(this, D).append(...e);
}, me = /* @__PURE__ */ new WeakSet(), Gt = function() {
  if (!this.isAlwaysOpened && n(this, v)) {
    const e = this.isOpened ? this.iconElements.arrowUp : this.iconElements.arrowDown;
    O(e, n(this, v));
  }
}, G = /* @__PURE__ */ new WeakSet(), U = function() {
  var e;
  (e = this.value) != null && e.length ? (n(this, E).removeAttribute("placeholder"), this.srcElement.classList.remove("treeselect-input--value-not-selected")) : (n(this, E).setAttribute("placeholder", this.placeholder), this.srcElement.classList.add("treeselect-input--value-not-selected")), this.searchable ? this.srcElement.classList.remove("treeselect-input--unsearchable") : this.srcElement.classList.add("treeselect-input--unsearchable"), this.isSingleSelect ? this.srcElement.classList.add("treeselect-input--is-single-select") : this.srcElement.classList.remove("treeselect-input--is-single-select"), n(this, E).value = this.searchText;
}, N = /* @__PURE__ */ new WeakSet(), V = function() {
  this.isOpened = !this.isOpened, o(this, me, Gt).call(this), this.isOpened ? this.openCallback() : this.closeCallback();
}, fe = /* @__PURE__ */ new WeakSet(), Mt = function(e, t, s) {
  const i = document.createElement("div");
  return i.classList.add("treeselect-input"), i.setAttribute("tabindex", "-1"), i.addEventListener("mousedown", (a) => o(this, be, Ft).call(this, a)), i.addEventListener("focus", () => this.focusCallback(), true), i.addEventListener("blur", () => this.blurCallback(), true), e.appendChild(t), i.append(e, s), i;
}, be = /* @__PURE__ */ new WeakSet(), Ft = function(e) {
  e.stopPropagation(), this.isOpened || o(this, N, V).call(this), this.focus();
}, Ce = /* @__PURE__ */ new WeakSet(), qt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__tags"), e;
}, ge = /* @__PURE__ */ new WeakSet(), jt = function() {
  return this.value.map((e) => {
    const t = document.createElement("div");
    t.classList.add("treeselect-input__tags-element"), t.setAttribute("tabindex", "-1"), t.setAttribute("tag-id", e.id.toString()), t.setAttribute("title", e.name);
    const s = o(this, ke, Wt).call(this, e.name), i = o(this, Ee, Rt).call(this);
    return t.addEventListener("mousedown", (a) => o(this, we, $t).call(this, a, e.id)), t.append(s, i), t;
  });
}, we = /* @__PURE__ */ new WeakSet(), $t = function(e, t) {
  e.preventDefault(), e.stopPropagation(), this.removeItem(t), this.focus();
}, ke = /* @__PURE__ */ new WeakSet(), Wt = function(e) {
  const t = document.createElement("span");
  return t.classList.add("treeselect-input__tags-name"), t.textContent = e, t;
}, Ee = /* @__PURE__ */ new WeakSet(), Rt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__tags-cross"), O(this.iconElements.cross, e), e;
}, ve = /* @__PURE__ */ new WeakSet(), Ut = function() {
  const e = document.createElement("span");
  if (e.classList.add("treeselect-input__tags-count"), !this.value.length)
    return e.textContent = "", e.setAttribute("title", ""), e;
  const t = this.value.length === 1 ? this.value[0].name : `${this.value.length} ${this.tagsCountText}`;
  return e.textContent = t, e.setAttribute("title", t), e;
}, Le = /* @__PURE__ */ new WeakSet(), zt = function() {
  const e = document.createElement("input");
  return e.classList.add("treeselect-input__edit"), this.id && e.setAttribute("id", this.id), (!this.searchable || this.disabled) && e.setAttribute("readonly", "readonly"), this.disabled && e.setAttribute("tabindex", "-1"), this.ariaLabel.length && e.setAttribute("aria-label", this.ariaLabel), e.addEventListener("keydown", (t) => o(this, ye, Yt).call(this, t)), e.addEventListener("input", (t) => o(this, xe, Kt).call(this, t, e)), e;
}, ye = /* @__PURE__ */ new WeakSet(), Yt = function(e) {
  e.stopPropagation();
  const t = e.key;
  t === "Backspace" && !this.searchText.length && this.value.length && !this.showTags && this.clear(), t === "Backspace" && !this.searchText.length && this.value.length && this.removeItem(this.value[this.value.length - 1].id), e.code === "Space" && (!this.searchText || !this.searchable) && o(this, N, V).call(this), (t === "Enter" || t === "ArrowDown" || t === "ArrowUp") && e.preventDefault(), this.keydownCallback(e), t !== "Tab" && this.focus();
}, xe = /* @__PURE__ */ new WeakSet(), Kt = function(e, t) {
  e.stopPropagation();
  const s = this.searchText, i = t.value.trim();
  if (s.length === 0 && i.length === 0) {
    t.value = "";
    return;
  }
  if (this.searchable) {
    const a = e.target.value;
    this.searchCallback(a), this.isOpened || o(this, N, V).call(this);
  } else
    t.value = "";
  this.searchText = t.value;
}, Se = /* @__PURE__ */ new WeakSet(), Xt = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-input__operators"), e;
}, _e = /* @__PURE__ */ new WeakSet(), Jt = function() {
  const e = document.createElement("span");
  return e.classList.add("treeselect-input__clear"), e.setAttribute("tabindex", "-1"), O(this.iconElements.clear, e), e.addEventListener("mousedown", (t) => o(this, Ae, Zt).call(this, t)), e;
}, Ae = /* @__PURE__ */ new WeakSet(), Zt = function(e) {
  e.preventDefault(), e.stopPropagation(), (this.searchText.length || this.value.length) && this.clear(), this.focus();
}, Te = /* @__PURE__ */ new WeakSet(), Qt = function(e) {
  m(this, v, document.createElement("span")), n(this, v).classList.add("treeselect-input__arrow");
  const t = e ? this.iconElements.arrowUp : this.iconElements.arrowDown;
  return O(t, n(this, v)), n(this, v).addEventListener("mousedown", (s) => o(this, Ne, es).call(this, s)), n(this, v);
}, Ne = /* @__PURE__ */ new WeakSet(), es = function(e) {
  e.stopPropagation(), e.preventDefault(), this.focus(), o(this, N, V).call(this);
}, z = /* @__PURE__ */ new WeakSet(), wt = function() {
  this.inputCallback(this.value);
};
var ts = (l, e, t, s) => {
  di(e);
  const i = e.filter((a) => !a.disabled && l.some((h) => h === a.id));
  if (t && i.length) {
    i[0].checked = true;
    return;
  }
  i.forEach((a) => {
    a.checked = true;
    const h = Ot(a, e, s);
    a.checked = h;
  });
};
var Ot = ({ id: l, checked: e }, t, s) => {
  const i = t.find((h) => h.id === l);
  if (!i)
    return false;
  if (s)
    return i.checked = i.disabled ? false : !!e, i.checked;
  const a = ss(!!e, i, t);
  return is(i, t), a;
};
var ss = (l, e, t) => {
  if (!e.isGroup)
    return e.checked = e.disabled ? false : !!l, e.isPartialChecked = false, e.checked;
  const s = t.filter((p) => p.childOf === e.id);
  return !l || e.disabled || e.isPartialChecked ? (e.checked = false, e.isPartialChecked = false, kt(e, s, t), e.checked) : ls(s, t) ? ns(s) ? (e.checked = false, e.isPartialChecked = false, e.disabled = true, e.checked) : (e.checked = false, e.isPartialChecked = true, s.forEach((p) => {
    ss(l, p, t);
  }), e.checked) : (e.checked = true, e.isPartialChecked = false, kt(e, s, t), e.checked);
};
var is = (l, e) => {
  const t = e.find((s) => s.id === l.childOf);
  t && (ri(t, e), is(t, e));
};
var ri = (l, e) => {
  const t = mt(l, e);
  if (ns(t)) {
    l.checked = false, l.isPartialChecked = false, l.disabled = true;
    return;
  }
  if (ci(t)) {
    l.checked = true, l.isPartialChecked = false;
    return;
  }
  if (hi(t)) {
    l.checked = false, l.isPartialChecked = true;
    return;
  }
  l.checked = false, l.isPartialChecked = false;
};
var kt = ({ checked: l, disabled: e }, t, s) => {
  t.forEach((i) => {
    i.disabled = !!e || !!i.disabled, i.checked = !!l && !i.disabled, i.isPartialChecked = false;
    const a = mt(i, s);
    kt({ checked: l, disabled: e }, a, s);
  });
};
var ls = (l, e) => l.some((i) => i.disabled) ? true : l.some((i) => {
  if (i.isGroup) {
    const a = mt(i, e);
    return ls(a, e);
  }
  return false;
});
var ns = (l) => l.every((e) => !!e.disabled);
var ci = (l) => l.every((e) => !!e.checked);
var hi = (l) => l.some((e) => !!e.checked || !!e.isPartialChecked);
var di = (l) => {
  l.forEach((e) => {
    e.checked = false, e.isPartialChecked = false;
  });
};
var ui = (l, e, t) => {
  const s = { level: 0, groupId: "" }, i = as(l, e, s.groupId, s.level);
  return mi(i, t);
};
var as = (l, e, t, s) => l.reduce((i, a) => {
  var b;
  const h = !!((b = a.children) != null && b.length), p = s >= e && h, f = s > e;
  if (i.push({
    id: a.value,
    name: a.name,
    childOf: t,
    isGroup: h,
    checked: false,
    isPartialChecked: false,
    level: s,
    isClosed: p,
    hidden: f,
    disabled: a.disabled ?? false
  }), h) {
    const C = as(a.children, e, a.value, s + 1);
    i.push(...C);
  }
  return i;
}, []);
var mt = ({ id: l }, e) => e.filter((t) => t.childOf === l);
var pi = (l) => {
  const { ungroupedNodes: e, allGroupedNodes: t, allNodes: s } = l.reduce(
    (a, h) => (h.checked && (a.allNodes.push(h), h.isGroup ? a.allGroupedNodes.push(h) : a.ungroupedNodes.push(h)), a),
    {
      ungroupedNodes: [],
      allGroupedNodes: [],
      allNodes: []
    }
  ), i = s.filter((a) => !t.some(({ id: h }) => h === a.childOf));
  return { ungroupedNodes: e, groupedNodes: i, allNodes: s };
};
var mi = (l, e) => (l.filter((s) => !!s.disabled).forEach(
  ({ id: s }) => Ot({ id: s, checked: false }, l, e)
), l);
var ft = (l, { id: e, isClosed: t }) => {
  mt({ id: e }, l).forEach((i) => {
    i.hidden = t ?? false, i.isGroup && !i.isClosed && ft(l, { id: i.id, isClosed: t });
  });
};
var fi = (l) => {
  l.filter((e) => e.isGroup && !e.disabled && (e.checked || e.isPartialChecked)).forEach((e) => {
    e.isClosed = false, ft(l, e);
  });
};
var bi = (l, e) => {
  const t = Ci(l, e);
  l.forEach((s) => {
    t.some(({ id: a }) => a === s.id) ? (s.isGroup && (s.isClosed = false, ft(l, s)), s.hidden = false) : s.hidden = true;
  });
};
var Ci = (l, e) => l.reduce((t, s) => {
  if (s.name.toLowerCase().includes(e.toLowerCase())) {
    if (t.push(s), s.isGroup) {
      const a = os(s.id, l);
      t.push(...a);
    }
    if (s.childOf) {
      const a = rs(s.childOf, l);
      t.push(...a);
    }
  }
  return t;
}, []);
var os = (l, e) => e.reduce((t, s) => (s.childOf === l && (t.push(s), s.isGroup && t.push(...os(s.id, e))), t), []);
var rs = (l, e) => e.reduce((t, s) => (s.id === l && (t.push(s), s.childOf && t.push(...rs(s.childOf, e))), t), []);
var gi = (l) => {
  const { duplications: e } = l.reduce(
    (t, s) => (t.allItems.some((i) => i.toString() === s.id.toString()) && t.duplications.push(s.id), t.allItems.push(s.id), t),
    {
      duplications: [],
      allItems: []
    }
  );
  e.length && console.error(`Validation: You have duplicated values: ${e.join(", ")}! You should use unique values.`);
};
var wi = (l, e, t, s, i, a, h, p, f) => {
  ts(l, e, i, f), p && h && fi(e), ce(e, t, s, a);
};
var ce = (l, e, t, s) => {
  l.forEach((i) => {
    const a = e.querySelector(`[input-id="${i.id}"]`), h = A(a);
    a.checked = i.checked, ki(i, h, s), Ei(i, h), vi(i, h), Li(i, h, t), yi(i, h), Si(i, h, l), xi(i, a, t);
  }), _i(l, e);
};
var ki = (l, e, t) => {
  l.checked ? e.classList.add("treeselect-list__item--checked") : e.classList.remove("treeselect-list__item--checked"), Array.isArray(t) && t[0] === l.id && !l.disabled ? e.classList.add("treeselect-list__item--single-selected") : e.classList.remove("treeselect-list__item--single-selected");
};
var Ei = (l, e) => {
  l.isPartialChecked ? e.classList.add("treeselect-list__item--partial-checked") : e.classList.remove("treeselect-list__item--partial-checked");
};
var vi = (l, e) => {
  l.disabled ? e.classList.add("treeselect-list__item--disabled") : e.classList.remove("treeselect-list__item--disabled");
};
var Li = (l, e, t) => {
  if (l.isGroup) {
    const s = e.querySelector(".treeselect-list__item-icon"), i = l.isClosed ? t.arrowRight : t.arrowDown;
    O(i, s), l.isClosed ? e.classList.add("treeselect-list__item--closed") : e.classList.remove("treeselect-list__item--closed");
  }
};
var yi = (l, e) => {
  l.hidden ? e.classList.add("treeselect-list__item--hidden") : e.classList.remove("treeselect-list__item--hidden");
};
var xi = (l, e, t) => {
  const i = e.parentNode.querySelector(".treeselect-list__item-checkbox-icon");
  l.checked ? O(t.check, i) : l.isPartialChecked ? O(t.partialCheck, i) : i.innerHTML = "";
};
var Si = (l, e, t) => {
  const s = l.level === 0, i = 20, a = 5;
  if (s) {
    const h = t.some((f) => f.isGroup && f.level === l.level), p = !l.isGroup && h ? `${i}px` : `${a}px`;
    e.style.paddingLeft = l.isGroup ? "0" : p;
  } else
    e.style.paddingLeft = l.isGroup ? `${l.level * i}px` : `${l.level * i + i}px`;
  e.setAttribute("level", l.level.toString()), e.setAttribute("group", l.isGroup.toString());
};
var _i = (l, e) => {
  const t = l.some((i) => !i.hidden), s = e.querySelector(".treeselect-list__empty");
  t ? s.classList.add("treeselect-list__empty--hidden") : s.classList.remove("treeselect-list__empty--hidden");
};
var A = (l) => l.parentNode.parentNode;
var Bt = (l, e) => e.find((t) => t.id.toString() === l);
var Ai = (l) => A(l).querySelector(".treeselect-list__item-icon");
var Ti = (l, e) => {
  e && Object.keys(e).forEach((t) => {
    const s = e[t];
    typeof s == "string" && l.setAttribute(t, s);
  });
};
var M;
var P;
var x;
var Y;
var Oe;
var cs;
var Ie;
var hs;
var Pe;
var ds;
var Be;
var us;
var Ve;
var ps;
var De;
var ms;
var K;
var Et;
var He;
var fs;
var Ge;
var bs;
var Me;
var Cs;
var X;
var vt;
var Fe;
var gs;
var qe;
var ws;
var je;
var ks;
var $e;
var Es;
var We;
var vs;
var Re;
var Ls;
var Ue;
var ys;
var ze;
var xs;
var Ye;
var Ss;
var Ke;
var _s;
var Xe;
var As;
var J;
var Lt;
var Z;
var yt;
var Je;
var Ts;
var Ni = class {
  constructor({
    options: e,
    value: t,
    openLevel: s,
    listSlotHtmlComponent: i,
    emptyText: a,
    isSingleSelect: h,
    iconElements: p,
    showCount: f,
    disabledBranchNode: b,
    expandSelected: C,
    isIndependentNodes: g,
    inputCallback: w,
    arrowClickCallback: k,
    mouseupCallback: y
  }) {
    r(this, Oe);
    r(this, Ie);
    r(this, Pe);
    r(this, Be);
    r(this, Ve);
    r(this, De);
    r(this, K);
    r(this, He);
    r(this, Ge);
    r(this, Me);
    r(this, X);
    r(this, Fe);
    r(this, qe);
    r(this, je);
    r(this, $e);
    r(this, We);
    r(this, Re);
    r(this, Ue);
    r(this, ze);
    r(this, Ye);
    r(this, Ke);
    r(this, Xe);
    r(this, J);
    r(this, Z);
    r(this, Je);
    c(this, "options");
    c(this, "value");
    c(this, "openLevel");
    c(this, "listSlotHtmlComponent");
    c(this, "emptyText");
    c(this, "isSingleSelect");
    c(this, "showCount");
    c(this, "disabledBranchNode");
    c(this, "expandSelected");
    c(this, "isIndependentNodes");
    c(this, "iconElements");
    c(this, "searchText");
    c(this, "flattedOptions");
    c(this, "flattedOptionsBeforeSearch");
    c(this, "selectedNodes");
    c(this, "srcElement");
    c(this, "inputCallback");
    c(this, "arrowClickCallback");
    c(this, "mouseupCallback");
    r(this, M, null);
    r(this, P, true);
    r(this, x, []);
    r(this, Y, true);
    this.options = e, this.value = t, this.openLevel = s ?? 0, this.listSlotHtmlComponent = i ?? null, this.emptyText = a ?? "No results found...", this.isSingleSelect = h ?? false, this.showCount = f ?? false, this.disabledBranchNode = b ?? false, this.expandSelected = C ?? false, this.isIndependentNodes = g ?? false, this.iconElements = p, this.searchText = "", this.flattedOptions = ui(this.options, this.openLevel, this.isIndependentNodes), this.flattedOptionsBeforeSearch = this.flattedOptions, this.selectedNodes = { nodes: [], groupedNodes: [], allNodes: [] }, this.srcElement = o(this, Pe, ds).call(this), this.inputCallback = w, this.arrowClickCallback = k, this.mouseupCallback = y, gi(this.flattedOptions);
  }
  // Public methods
  updateValue(e) {
    this.value = e, m(this, x, this.isSingleSelect ? this.value : []), wi(
      e,
      this.flattedOptions,
      this.srcElement,
      this.iconElements,
      this.isSingleSelect,
      n(this, x),
      this.expandSelected,
      n(this, Y),
      this.isIndependentNodes
    ), m(this, Y, false), o(this, Z, yt).call(this);
  }
  updateSearchValue(e) {
    if (e === this.searchText)
      return;
    const t = this.searchText === "" && e !== "";
    this.searchText = e, t && (this.flattedOptionsBeforeSearch = JSON.parse(JSON.stringify(this.flattedOptions))), this.searchText === "" && (this.flattedOptions = this.flattedOptionsBeforeSearch.map((s) => {
      const i = this.flattedOptions.find((a) => a.id === s.id);
      return i.isClosed = s.isClosed, i.hidden = s.hidden, i;
    }), this.flattedOptionsBeforeSearch = []), this.searchText && bi(this.flattedOptions, e), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), this.focusFirstListElement();
  }
  callKeyAction(e) {
    m(this, P, false);
    const t = this.srcElement.querySelector(".treeselect-list__item--focused");
    if (t == null ? void 0 : t.classList.contains("treeselect-list__item--hidden"))
      return;
    const i = e.key;
    i === "Enter" && t && t.dispatchEvent(new Event("mousedown")), (i === "ArrowLeft" || i === "ArrowRight") && o(this, Oe, cs).call(this, t, e), (i === "ArrowDown" || i === "ArrowUp") && o(this, Ie, hs).call(this, t, i);
  }
  focusFirstListElement() {
    const e = "treeselect-list__item--focused", t = this.srcElement.querySelector(`.${e}`), s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
      (a) => window.getComputedStyle(A(a)).display !== "none"
    );
    if (!s.length)
      return;
    t && t.classList.remove(e), A(s[0]).classList.add(e);
  }
  isLastFocusedElementExist() {
    return !!n(this, M);
  }
};
M = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakSet(), cs = function(e, t) {
  if (!e)
    return;
  const s = t.key, a = e.querySelector(".treeselect-list__item-checkbox").getAttribute("input-id"), h = Bt(a, this.flattedOptions), p = e.querySelector(".treeselect-list__item-icon");
  s === "ArrowLeft" && !h.isClosed && h.isGroup && (p.dispatchEvent(new Event("mousedown")), t.preventDefault()), s === "ArrowRight" && h.isClosed && h.isGroup && (p.dispatchEvent(new Event("mousedown")), t.preventDefault());
}, Ie = /* @__PURE__ */ new WeakSet(), hs = function(e, t) {
  var i;
  const s = Array.from(this.srcElement.querySelectorAll(".treeselect-list__item-checkbox")).filter(
    (a) => window.getComputedStyle(A(a)).display !== "none"
  );
  if (s.length)
    if (!e)
      A(s[0]).classList.add("treeselect-list__item--focused");
    else {
      const a = s.findIndex(
        (I) => A(I).classList.contains("treeselect-list__item--focused")
      );
      A(s[a]).classList.remove("treeselect-list__item--focused");
      const p = t === "ArrowDown" ? a + 1 : a - 1, f = t === "ArrowDown" ? 0 : s.length - 1, b = s[p] ?? s[f], C = !s[p], g = A(b);
      g.classList.add("treeselect-list__item--focused");
      const w = this.srcElement.getBoundingClientRect(), k = g.getBoundingClientRect();
      if (C && t === "ArrowDown") {
        this.srcElement.scroll(0, 0);
        return;
      }
      if (C && t === "ArrowUp") {
        this.srcElement.scroll(0, this.srcElement.scrollHeight);
        return;
      }
      const y = ((i = this.listSlotHtmlComponent) == null ? void 0 : i.clientHeight) ?? 0;
      if (w.y + w.height < k.y + k.height + y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop + k.height);
        return;
      }
      if (w.y > k.y) {
        this.srcElement.scroll(0, this.srcElement.scrollTop - k.height);
        return;
      }
    }
}, Pe = /* @__PURE__ */ new WeakSet(), ds = function() {
  const e = o(this, Be, us).call(this), t = o(this, K, Et).call(this, this.options);
  e.append(...t);
  const s = o(this, Ge, bs).call(this);
  e.append(s);
  const i = o(this, He, fs).call(this);
  return i && e.append(i), e;
}, Be = /* @__PURE__ */ new WeakSet(), us = function() {
  const e = document.createElement("div");
  return e.classList.add("treeselect-list"), this.isSingleSelect && e.classList.add("treeselect-list--single-select"), this.disabledBranchNode && e.classList.add("treeselect-list--disabled-branch-node"), e.addEventListener("mouseout", (t) => o(this, Ve, ps).call(this, t)), e.addEventListener("mousemove", () => o(this, De, ms).call(this)), e.addEventListener("mouseup", () => this.mouseupCallback(), true), e;
}, Ve = /* @__PURE__ */ new WeakSet(), ps = function(e) {
  e.stopPropagation(), n(this, M) && n(this, P) && n(this, M).classList.add("treeselect-list__item--focused");
}, De = /* @__PURE__ */ new WeakSet(), ms = function() {
  m(this, P, true);
}, K = /* @__PURE__ */ new WeakSet(), Et = function(e) {
  return e.reduce((t, s) => {
    var a;
    if ((a = s.children) != null && a.length) {
      const h = o(this, Me, Cs).call(this, s), p = o(this, K, Et).call(this, s.children);
      return h.append(...p), t.push(h), t;
    }
    const i = o(this, X, vt).call(this, s, false);
    return t.push(i), t;
  }, []);
}, He = /* @__PURE__ */ new WeakSet(), fs = function() {
  if (!this.listSlotHtmlComponent)
    return null;
  const e = document.createElement("div");
  return e.classList.add("treeselect-list__slot"), e.appendChild(this.listSlotHtmlComponent), e;
}, Ge = /* @__PURE__ */ new WeakSet(), bs = function() {
  const e = document.createElement("div");
  e.classList.add("treeselect-list__empty"), e.setAttribute("title", this.emptyText);
  const t = document.createElement("span");
  t.classList.add("treeselect-list__empty-icon"), O(this.iconElements.attention, t);
  const s = document.createElement("span");
  return s.classList.add("treeselect-list__empty-text"), s.textContent = this.emptyText, e.append(t, s), e;
}, Me = /* @__PURE__ */ new WeakSet(), Cs = function(e) {
  const t = document.createElement("div");
  t.setAttribute("group-container-id", e.value.toString()), t.classList.add("treeselect-list__group-container");
  const s = o(this, X, vt).call(this, e, true);
  return t.appendChild(s), t;
}, X = /* @__PURE__ */ new WeakSet(), vt = function(e, t) {
  const s = o(this, Fe, gs).call(this, e);
  if (t) {
    const h = o(this, We, vs).call(this);
    s.appendChild(h), s.classList.add("treeselect-list__item--group");
  }
  const i = o(this, Ue, ys).call(this, e), a = o(this, ze, xs).call(this, e, t);
  return s.append(i, a), s;
}, Fe = /* @__PURE__ */ new WeakSet(), gs = function(e) {
  const t = document.createElement("div");
  return Ti(t, e.htmlAttr), t.setAttribute("tabindex", "-1"), t.setAttribute("title", e.name), t.classList.add("treeselect-list__item"), t.addEventListener("mouseover", () => o(this, qe, ws).call(this, t), true), t.addEventListener("mouseout", () => o(this, je, ks).call(this, t), true), t.addEventListener("mousedown", (s) => o(this, $e, Es).call(this, s, e)), t;
}, qe = /* @__PURE__ */ new WeakSet(), ws = function(e) {
  n(this, P) && o(this, J, Lt).call(this, true, e);
}, je = /* @__PURE__ */ new WeakSet(), ks = function(e) {
  n(this, P) && (o(this, J, Lt).call(this, false, e), m(this, M, e));
}, $e = /* @__PURE__ */ new WeakSet(), Es = function(e, t) {
  var a;
  if (e.preventDefault(), e.stopPropagation(), (a = this.flattedOptions.find((h) => h.id === t.value)) == null ? void 0 : a.disabled)
    return;
  const i = e.target.querySelector(".treeselect-list__item-checkbox");
  i.checked = !i.checked, o(this, Ke, _s).call(this, i, t);
}, We = /* @__PURE__ */ new WeakSet(), vs = function() {
  const e = document.createElement("span");
  return e.setAttribute("tabindex", "-1"), e.classList.add("treeselect-list__item-icon"), O(this.iconElements.arrowDown, e), e.addEventListener("mousedown", (t) => o(this, Re, Ls).call(this, t)), e;
}, Re = /* @__PURE__ */ new WeakSet(), Ls = function(e) {
  e.preventDefault(), e.stopPropagation(), o(this, Xe, As).call(this, e);
}, Ue = /* @__PURE__ */ new WeakSet(), ys = function(e) {
  const t = document.createElement("div");
  t.classList.add("treeselect-list__item-checkbox-container");
  const s = document.createElement("span");
  s.classList.add("treeselect-list__item-checkbox-icon"), s.innerHTML = "";
  const i = document.createElement("input");
  return i.setAttribute("tabindex", "-1"), i.setAttribute("type", "checkbox"), i.setAttribute("input-id", e.value.toString()), i.classList.add("treeselect-list__item-checkbox"), t.append(s, i), t;
}, ze = /* @__PURE__ */ new WeakSet(), xs = function(e, t) {
  const s = document.createElement("label");
  if (s.textContent = e.name, s.classList.add("treeselect-list__item-label"), t && this.showCount) {
    const i = o(this, Ye, Ss).call(this, e);
    s.appendChild(i);
  }
  return s;
}, Ye = /* @__PURE__ */ new WeakSet(), Ss = function(e) {
  const t = document.createElement("span"), s = this.flattedOptions.filter((i) => i.childOf === e.value);
  return t.textContent = `(${s.length})`, t.classList.add("treeselect-list__item-label-counter"), t;
}, Ke = /* @__PURE__ */ new WeakSet(), _s = function(e, t) {
  const s = this.flattedOptions.find((i) => i.id === t.value);
  if (s) {
    if (s != null && s.isGroup && this.disabledBranchNode) {
      const i = Ai(e);
      i == null || i.dispatchEvent(new Event("mousedown"));
      return;
    }
    if (this.isSingleSelect) {
      const [i] = n(this, x);
      if (s.id === i)
        return;
      m(this, x, [s.id]), ts([s.id], this.flattedOptions, this.isSingleSelect, this.isIndependentNodes);
    } else {
      s.checked = e.checked;
      const i = Ot(s, this.flattedOptions, this.isIndependentNodes);
      e.checked = i;
    }
    ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), o(this, Je, Ts).call(this);
  }
}, Xe = /* @__PURE__ */ new WeakSet(), As = function(e) {
  var a, h;
  const t = (h = (a = e.target) == null ? void 0 : a.parentNode) == null ? void 0 : h.querySelector("[input-id]"), s = (t == null ? void 0 : t.getAttribute("input-id")) ?? null, i = Bt(s, this.flattedOptions);
  i && (i.isClosed = !i.isClosed, ft(this.flattedOptions, i), ce(this.flattedOptions, this.srcElement, this.iconElements, n(this, x)), this.arrowClickCallback());
}, J = /* @__PURE__ */ new WeakSet(), Lt = function(e, t) {
  const s = "treeselect-list__item--focused";
  if (e) {
    const i = Array.from(this.srcElement.querySelectorAll(`.${s}`));
    i.length && i.forEach((a) => a.classList.remove(s)), t.classList.add(s);
  } else
    t.classList.remove(s);
}, Z = /* @__PURE__ */ new WeakSet(), yt = function() {
  const { ungroupedNodes: e, groupedNodes: t, allNodes: s } = pi(this.flattedOptions);
  this.selectedNodes = { nodes: e, groupedNodes: t, allNodes: s };
}, Je = /* @__PURE__ */ new WeakSet(), Ts = function() {
  o(this, Z, yt).call(this), this.inputCallback(this.selectedNodes), this.value = this.selectedNodes.nodes.map((e) => e.id);
};
var Vt = ({
  parentHtmlContainer: l,
  staticList: e,
  appendToBody: t,
  isSingleSelect: s,
  value: i,
  direction: a
}) => {
  l || console.error("Validation: parentHtmlContainer prop is required!"), e && t && console.error("Validation: You should set staticList to false if you use appendToBody!"), s && Array.isArray(i) && console.error("Validation: if you use isSingleSelect prop, you should pass a single value!"), !s && !Array.isArray(i) && console.error("Validation: you should pass an array as a value!"), a && a !== "auto" && a !== "bottom" && a !== "top" && console.error("Validation: you should pass (auto | top | bottom | undefined) as a value for the direction prop!");
};
var re = (l) => l.map((e) => e.id);
var Oi = (l) => l ? Array.isArray(l) ? l : [l] : [];
var Ii = (l, e) => {
  if (e) {
    const [t] = l;
    return t ?? null;
  }
  return l;
};
var d;
var u;
var F;
var Q;
var q;
var S;
var _;
var L;
var B;
var ee;
var xt;
var te;
var St;
var Ze;
var Ns;
var Qe;
var Os;
var et;
var Is;
var tt;
var Ps;
var st;
var Bs;
var it;
var Vs;
var se;
var _t;
var lt;
var Ds;
var nt;
var Hs;
var at;
var Gs;
var ot;
var Ms;
var ie;
var At;
var rt;
var Fs;
var j;
var he;
var le;
var Tt;
var $;
var de;
var ct;
var qs;
var ne;
var Nt;
var ht;
var js;
var dt;
var $s;
var ut;
var Ws;
var pt;
var Rs;
var Bi = class {
  constructor({
    parentHtmlContainer: e,
    value: t,
    options: s,
    openLevel: i,
    appendToBody: a,
    alwaysOpen: h,
    showTags: p,
    tagsCountText: f,
    clearable: b,
    searchable: C,
    placeholder: g,
    grouped: w,
    isGroupedValue: k,
    listSlotHtmlComponent: y,
    disabled: I,
    emptyText: W,
    staticList: ae,
    id: bt,
    ariaLabel: Ct,
    isSingleSelect: oe,
    showCount: Us,
    disabledBranchNode: zs,
    direction: Ys,
    expandSelected: Ks,
    saveScrollPosition: Xs,
    isIndependentNodes: Js,
    iconElements: Zs,
    inputCallback: Qs,
    openCallback: ei,
    closeCallback: ti,
    nameChangeCallback: si,
    searchCallback: ii
  }) {
    r(this, ee);
    r(this, te);
    r(this, Ze);
    r(this, Qe);
    r(this, et);
    r(this, tt);
    r(this, st);
    r(this, it);
    r(this, se);
    r(this, lt);
    r(this, nt);
    r(this, at);
    r(this, ot);
    r(this, ie);
    r(this, rt);
    r(this, j);
    r(this, le);
    r(this, $);
    r(this, ct);
    r(this, ne);
    r(this, ht);
    r(this, dt);
    r(this, ut);
    r(this, pt);
    c(this, "parentHtmlContainer");
    c(this, "value");
    c(this, "options");
    c(this, "openLevel");
    c(this, "appendToBody");
    c(this, "alwaysOpen");
    c(this, "showTags");
    c(this, "tagsCountText");
    c(this, "clearable");
    c(this, "searchable");
    c(this, "placeholder");
    c(this, "grouped");
    c(this, "isGroupedValue");
    c(this, "listSlotHtmlComponent");
    c(this, "disabled");
    c(this, "emptyText");
    c(this, "staticList");
    c(this, "id");
    c(this, "ariaLabel");
    c(this, "isSingleSelect");
    c(this, "showCount");
    c(this, "disabledBranchNode");
    c(this, "direction");
    c(this, "expandSelected");
    c(this, "saveScrollPosition");
    c(this, "isIndependentNodes");
    c(this, "iconElements");
    c(this, "inputCallback");
    c(this, "openCallback");
    c(this, "closeCallback");
    c(this, "nameChangeCallback");
    c(this, "searchCallback");
    c(this, "ungroupedValue");
    c(this, "groupedValue");
    c(this, "allValue");
    c(this, "isListOpened");
    c(this, "selectedName");
    c(this, "srcElement");
    r(this, d, null);
    r(this, u, null);
    r(this, F, null);
    r(this, Q, 0);
    r(this, q, 0);
    r(this, S, null);
    r(this, _, null);
    r(this, L, null);
    r(this, B, null);
    Vt({
      parentHtmlContainer: e,
      value: t,
      staticList: ae,
      appendToBody: a,
      isSingleSelect: oe
    }), this.parentHtmlContainer = e, this.value = [], this.options = s ?? [], this.openLevel = i ?? 0, this.appendToBody = a ?? false, this.alwaysOpen = !!(h && !I), this.showTags = p ?? true, this.tagsCountText = f ?? "elements selected", this.clearable = b ?? true, this.searchable = C ?? true, this.placeholder = g ?? "Search...", this.grouped = w ?? true, this.isGroupedValue = k ?? false, this.listSlotHtmlComponent = y ?? null, this.disabled = I ?? false, this.emptyText = W ?? "No results found...", this.staticList = !!(ae && !this.appendToBody), this.id = bt ?? "", this.ariaLabel = Ct ?? "", this.isSingleSelect = oe ?? false, this.showCount = Us ?? false, this.disabledBranchNode = zs ?? false, this.direction = Ys ?? "auto", this.expandSelected = Ks ?? false, this.saveScrollPosition = Xs ?? true, this.isIndependentNodes = Js ?? false, this.iconElements = Pt(Zs), this.inputCallback = Qs, this.openCallback = ei, this.closeCallback = ti, this.nameChangeCallback = si, this.searchCallback = ii, this.ungroupedValue = [], this.groupedValue = [], this.allValue = [], this.isListOpened = false, this.selectedName = "", this.srcElement = null, o(this, ee, xt).call(this, t);
  }
  mount() {
    Vt({
      parentHtmlContainer: this.parentHtmlContainer,
      value: this.value,
      staticList: this.staticList,
      appendToBody: this.appendToBody,
      isSingleSelect: this.isSingleSelect
    }), this.iconElements = Pt(this.iconElements), o(this, ee, xt).call(this, this.value);
  }
  updateValue(e) {
    const t = Oi(e), s = n(this, d);
    s && (s.updateValue(t), o(this, se, _t).call(this, s == null ? void 0 : s.selectedNodes));
  }
  destroy() {
    this.srcElement && (o(this, ie, At).call(this), this.srcElement.innerHTML = "", this.srcElement = null, o(this, $, de).call(this, true));
  }
  focus() {
    n(this, u) && n(this, u).focus();
  }
  toggleOpenClose() {
    n(this, u) && (n(this, u).openClose(), n(this, u).focus());
  }
  // Outside Listeners
  scrollWindowHandler() {
    this.updateListPosition();
  }
  focusWindowHandler(e) {
    var s, i, a;
    ((s = this.srcElement) == null ? void 0 : s.contains(e.target)) || ((i = n(this, d)) == null ? void 0 : i.srcElement.contains(e.target)) || ((a = n(this, u)) == null || a.blur(), o(this, $, de).call(this, false), o(this, j, he).call(this, false));
  }
  blurWindowHandler() {
    var e;
    (e = n(this, u)) == null || e.blur(), o(this, $, de).call(this, false), o(this, j, he).call(this, false);
  }
  // Update direction of the list. Support appendToBody and standard mode with absolute
  updateListPosition() {
    var y;
    const e = this.srcElement, t = (y = n(this, d)) == null ? void 0 : y.srcElement;
    if (!e || !t)
      return;
    const { height: s } = t.getBoundingClientRect(), {
      x: i,
      y: a,
      height: h,
      width: p
    } = e.getBoundingClientRect(), f = window.innerHeight, b = a, C = f - a - h;
    let g = b > C && b >= s && C < s;
    if (this.direction !== "auto" && (g = this.direction === "top"), this.appendToBody) {
      (t.style.top !== "0px" || t.style.left !== "0px") && (t.style.top = "0px", t.style.left = "0px");
      const I = i + window.scrollX, W = g ? a + window.scrollY - s : a + window.scrollY + h;
      t.style.transform = `translate(${I}px,${W}px)`, t.style.width = `${p}px`;
    }
    const w = g ? "top" : "bottom";
    t.getAttribute("direction") !== w && (t.setAttribute("direction", w), o(this, rt, Fs).call(this, g, this.appendToBody));
  }
};
d = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakSet(), xt = function(e) {
  var a;
  this.destroy();
  const { container: t, list: s, input: i } = o(this, Ze, Ns).call(this);
  this.srcElement = t, m(this, d, s), m(this, u, i), m(this, S, this.scrollWindowHandler.bind(this)), m(this, _, this.scrollWindowHandler.bind(this)), m(this, L, this.focusWindowHandler.bind(this)), m(this, B, this.blurWindowHandler.bind(this)), this.alwaysOpen && ((a = n(this, u)) == null || a.openClose()), this.disabled ? this.srcElement.classList.add("treeselect--disabled") : this.srcElement.classList.remove("treeselect--disabled"), this.updateValue(e ?? this.value);
}, te = /* @__PURE__ */ new WeakSet(), St = function({
  groupedNodes: e,
  nodes: t,
  allNodes: s
}) {
  this.ungroupedValue = t ? re(t) : [], this.groupedValue = e ? re(e) : [], this.allValue = s ? re(s) : [];
  let i = [];
  this.isIndependentNodes || this.isSingleSelect ? i = this.allValue : this.isGroupedValue ? i = this.groupedValue : i = this.ungroupedValue, this.value = Ii(i, this.isSingleSelect);
}, Ze = /* @__PURE__ */ new WeakSet(), Ns = function() {
  const e = this.parentHtmlContainer;
  e.classList.add("treeselect");
  const t = new Ni({
    value: [],
    // updateValue method calls in initMount method to set actual value
    options: this.options,
    openLevel: this.openLevel,
    listSlotHtmlComponent: this.listSlotHtmlComponent,
    emptyText: this.emptyText,
    isSingleSelect: this.isSingleSelect,
    showCount: this.showCount,
    disabledBranchNode: this.disabledBranchNode,
    expandSelected: this.expandSelected,
    isIndependentNodes: this.isIndependentNodes,
    iconElements: this.iconElements,
    inputCallback: (i) => o(this, lt, Ds).call(this, i),
    arrowClickCallback: () => o(this, nt, Hs).call(this),
    mouseupCallback: () => {
      var i;
      return (i = n(this, u)) == null ? void 0 : i.focus();
    }
  }), s = new oi({
    value: [],
    // updateValue method calls in initMount method to set actual value
    showTags: this.showTags,
    tagsCountText: this.tagsCountText,
    clearable: this.clearable,
    isAlwaysOpened: this.alwaysOpen,
    searchable: this.searchable,
    placeholder: this.placeholder,
    disabled: this.disabled,
    isSingleSelect: this.isSingleSelect,
    id: this.id,
    ariaLabel: this.ariaLabel,
    iconElements: this.iconElements,
    inputCallback: (i) => o(this, Qe, Os).call(this, i),
    searchCallback: (i) => o(this, tt, Ps).call(this, i),
    openCallback: () => o(this, ot, Ms).call(this),
    closeCallback: () => o(this, ie, At).call(this),
    keydownCallback: (i) => o(this, et, Is).call(this, i),
    focusCallback: () => o(this, st, Bs).call(this),
    blurCallback: () => o(this, it, Vs).call(this),
    nameChangeCallback: (i) => o(this, at, Gs).call(this, i)
  });
  return this.appendToBody && m(this, F, new ResizeObserver(() => this.updateListPosition())), e.append(s.srcElement), { container: e, list: t, input: s };
}, Qe = /* @__PURE__ */ new WeakSet(), Os = function(e) {
  var i, a;
  const t = re(e);
  (i = n(this, d)) == null || i.updateValue(t);
  const s = ((a = n(this, d)) == null ? void 0 : a.selectedNodes) ?? {};
  o(this, te, St).call(this, s), o(this, ne, Nt).call(this);
}, et = /* @__PURE__ */ new WeakSet(), Is = function(e) {
  var t;
  this.isListOpened && ((t = n(this, d)) == null || t.callKeyAction(e));
}, tt = /* @__PURE__ */ new WeakSet(), Ps = function(e) {
  n(this, q) && clearTimeout(n(this, q)), m(this, q, window.setTimeout(() => {
    var t;
    (t = n(this, d)) == null || t.updateSearchValue(e), this.updateListPosition();
  }, 350)), o(this, pt, Rs).call(this, e);
}, st = /* @__PURE__ */ new WeakSet(), Bs = function() {
  o(this, j, he).call(this, true), n(this, L) && n(this, L) && n(this, B) && (document.addEventListener("mousedown", n(this, L), true), document.addEventListener("focus", n(this, L), true), window.addEventListener("blur", n(this, B)));
}, it = /* @__PURE__ */ new WeakSet(), Vs = function() {
  setTimeout(() => {
    var s, i;
    const e = (s = n(this, u)) == null ? void 0 : s.srcElement.contains(document.activeElement), t = (i = n(this, d)) == null ? void 0 : i.srcElement.contains(document.activeElement);
    !e && !t && this.blurWindowHandler();
  }, 1);
}, se = /* @__PURE__ */ new WeakSet(), _t = function(e) {
  var s;
  if (!e)
    return;
  let t = [];
  this.isIndependentNodes || this.isSingleSelect ? t = e.allNodes : this.grouped ? t = e.groupedNodes : t = e.nodes, (s = n(this, u)) == null || s.updateValue(t), o(this, te, St).call(this, e);
}, lt = /* @__PURE__ */ new WeakSet(), Ds = function(e) {
  var t, s, i;
  o(this, se, _t).call(this, e), this.isSingleSelect && !this.alwaysOpen && ((t = n(this, u)) == null || t.openClose(), (s = n(this, u)) == null || s.clearSearch()), (i = n(this, u)) == null || i.focus(), o(this, ne, Nt).call(this);
}, nt = /* @__PURE__ */ new WeakSet(), Hs = function() {
  var e;
  (e = n(this, u)) == null || e.focus(), this.updateListPosition();
}, at = /* @__PURE__ */ new WeakSet(), Gs = function(e) {
  this.selectedName !== e && (this.selectedName = e, o(this, ht, js).call(this));
}, ot = /* @__PURE__ */ new WeakSet(), Ms = function() {
  var e;
  this.isListOpened = true, n(this, S) && n(this, _) && (window.addEventListener("scroll", n(this, S), true), window.addEventListener("resize", n(this, _))), !(!n(this, d) || !this.srcElement) && (this.appendToBody ? (document.body.appendChild(n(this, d).srcElement), (e = n(this, F)) == null || e.observe(this.srcElement)) : this.srcElement.appendChild(n(this, d).srcElement), this.updateListPosition(), o(this, le, Tt).call(this, true), o(this, ct, qs).call(this), o(this, dt, $s).call(this));
}, ie = /* @__PURE__ */ new WeakSet(), At = function() {
  var t;
  this.alwaysOpen || (this.isListOpened = false, n(this, S) && n(this, _) && (window.removeEventListener("scroll", n(this, S), true), window.removeEventListener("resize", n(this, _))), !n(this, d) || !this.srcElement) || !(this.appendToBody ? document.body.contains(n(this, d).srcElement) : this.srcElement.contains(n(this, d).srcElement)) || (m(this, Q, n(this, d).srcElement.scrollTop), this.appendToBody ? (document.body.removeChild(n(this, d).srcElement), (t = n(this, F)) == null || t.disconnect()) : this.srcElement.removeChild(n(this, d).srcElement), o(this, le, Tt).call(this, false), o(this, ut, Ws).call(this));
}, rt = /* @__PURE__ */ new WeakSet(), Fs = function(e, t) {
  if (!n(this, d) || !n(this, u))
    return;
  const s = t ? "treeselect-list--top-to-body" : "treeselect-list--top", i = t ? "treeselect-list--bottom-to-body" : "treeselect-list--bottom";
  e ? (n(this, d).srcElement.classList.add(s), n(this, d).srcElement.classList.remove(i), n(this, u).srcElement.classList.add("treeselect-input--top"), n(this, u).srcElement.classList.remove("treeselect-input--bottom")) : (n(this, d).srcElement.classList.remove(s), n(this, d).srcElement.classList.add(i), n(this, u).srcElement.classList.remove("treeselect-input--top"), n(this, u).srcElement.classList.add("treeselect-input--bottom"));
}, j = /* @__PURE__ */ new WeakSet(), he = function(e) {
  !n(this, u) || !n(this, d) || (e ? (n(this, u).srcElement.classList.add("treeselect-input--focused"), n(this, d).srcElement.classList.add("treeselect-list--focused")) : (n(this, u).srcElement.classList.remove("treeselect-input--focused"), n(this, d).srcElement.classList.remove("treeselect-list--focused")));
}, le = /* @__PURE__ */ new WeakSet(), Tt = function(e) {
  var t, s, i, a;
  e ? (t = n(this, u)) == null || t.srcElement.classList.add("treeselect-input--opened") : (s = n(this, u)) == null || s.srcElement.classList.remove("treeselect-input--opened"), this.staticList ? (i = n(this, d)) == null || i.srcElement.classList.add("treeselect-list--static") : (a = n(this, d)) == null || a.srcElement.classList.remove("treeselect-list--static");
}, $ = /* @__PURE__ */ new WeakSet(), de = function(e) {
  !n(this, S) || !n(this, _) || !n(this, L) || !n(this, B) || ((!this.alwaysOpen || e) && (window.removeEventListener("scroll", n(this, S), true), window.removeEventListener("resize", n(this, _))), document.removeEventListener("mousedown", n(this, L), true), document.removeEventListener("focus", n(this, L), true), window.removeEventListener("blur", n(this, B)));
}, ct = /* @__PURE__ */ new WeakSet(), qs = function() {
  var t, s, i;
  const e = (t = n(this, d)) == null ? void 0 : t.isLastFocusedElementExist();
  this.saveScrollPosition && e ? (s = n(this, d)) == null || s.srcElement.scroll(0, n(this, Q)) : (i = n(this, d)) == null || i.focusFirstListElement();
}, ne = /* @__PURE__ */ new WeakSet(), Nt = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("input", { detail: this.value })), this.inputCallback && this.inputCallback(this.value);
}, ht = /* @__PURE__ */ new WeakSet(), js = function() {
  var e;
  (e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("name-change", { detail: this.selectedName })), this.nameChangeCallback && this.nameChangeCallback(this.selectedName);
}, dt = /* @__PURE__ */ new WeakSet(), $s = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("open", { detail: this.value })), this.openCallback && this.openCallback(this.value));
}, ut = /* @__PURE__ */ new WeakSet(), Ws = function() {
  var e;
  this.alwaysOpen || ((e = this.srcElement) == null || e.dispatchEvent(new CustomEvent("close", { detail: this.value })), this.closeCallback && this.closeCallback(this.value));
}, pt = /* @__PURE__ */ new WeakSet(), Rs = function(e) {
  var s;
  const t = (e == null ? void 0 : e.trim()) ?? "";
  (s = this.srcElement) == null || s.dispatchEvent(new CustomEvent("search", { detail: t })), this.searchCallback && this.searchCallback(t);
};

// resources/js/index.js
function tree({
  state,
  name,
  options,
  searchable,
  showCount,
  placeholder,
  disabledBranchNode,
  disabled = false,
  isSingleSelect = true,
  showTags = false,
  clearable = false,
  alwaysOpen = true
}) {
  return {
    state,
    tree: null,
    init() {
      this.tree = new Bi({
        id: `tree-${name}-id`,
        ariaLabel: `tree-${name}-label`,
        parentHtmlContainer: this.$refs.tree,
        value: this.state,
        options,
        searchable,
        showCount,
        placeholder,
        disabledBranchNode,
        disabled,
        isSingleSelect,
        showTags,
        clearable,
        alwaysOpen
      });
      this.tree.srcElement.addEventListener("input", (e) => {
        this.state = e.detail;
      });
    }
  };
}
export {
  tree as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3RyZWVzZWxlY3Rqcy9kaXN0L3RyZWVzZWxlY3Rqcy5tanMiLCAiLi4vanMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbInZhciBsaSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcclxudmFyIG5pID0gKGwsIGUsIHQpID0+IGUgaW4gbCA/IGxpKGwsIGUsIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IHQgfSkgOiBsW2VdID0gdDtcclxudmFyIGMgPSAobCwgZSwgdCkgPT4gKG5pKGwsIHR5cGVvZiBlICE9IFwic3ltYm9sXCIgPyBlICsgXCJcIiA6IGUsIHQpLCB0KSwgZ3QgPSAobCwgZSwgdCkgPT4ge1xyXG4gIGlmICghZS5oYXMobCkpXHJcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgXCIgKyB0KTtcclxufTtcclxudmFyIG4gPSAobCwgZSwgdCkgPT4gKGd0KGwsIGUsIFwicmVhZCBmcm9tIHByaXZhdGUgZmllbGRcIiksIHQgPyB0LmNhbGwobCkgOiBlLmdldChsKSksIHIgPSAobCwgZSwgdCkgPT4ge1xyXG4gIGlmIChlLmhhcyhsKSlcclxuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2VcIik7XHJcbiAgZSBpbnN0YW5jZW9mIFdlYWtTZXQgPyBlLmFkZChsKSA6IGUuc2V0KGwsIHQpO1xyXG59LCBtID0gKGwsIGUsIHQsIHMpID0+IChndChsLCBlLCBcIndyaXRlIHRvIHByaXZhdGUgZmllbGRcIiksIHMgPyBzLmNhbGwobCwgdCkgOiBlLnNldChsLCB0KSwgdCk7XHJcbnZhciBvID0gKGwsIGUsIHQpID0+IChndChsLCBlLCBcImFjY2VzcyBwcml2YXRlIG1ldGhvZFwiKSwgdCk7XHJcbmNvbnN0IEl0ID0ge1xyXG4gIGFycm93VXA6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTggMTVsLTYtNi02IDZcIi8+PC9zdmc+JyxcclxuICBhcnJvd0Rvd246ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNNiA5bDYgNiA2LTZcIi8+PC9zdmc+JyxcclxuICBhcnJvd1JpZ2h0OiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTkgMThsNi02LTYtNlwiLz48L3N2Zz4nLFxyXG4gIGF0dGVudGlvbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHpcIj48L3BhdGg+PGxpbmUgeDE9XCIxMlwiIHkxPVwiOVwiIHgyPVwiMTJcIiB5Mj1cIjEzXCI+PC9saW5lPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjE3XCIgeDI9XCIxMi4wMVwiIHkyPVwiMTdcIj48L2xpbmU+PC9zdmc+JyxcclxuICBjbGVhcjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiPjwvY2lyY2xlPjxsaW5lIHgxPVwiMTVcIiB5MT1cIjlcIiB4Mj1cIjlcIiB5Mj1cIjE1XCI+PC9saW5lPjxsaW5lIHgxPVwiOVwiIHkxPVwiOVwiIHgyPVwiMTVcIiB5Mj1cIjE1XCI+PC9saW5lPjwvc3ZnPicsXHJcbiAgY3Jvc3M6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxsaW5lIHgxPVwiMThcIiB5MT1cIjZcIiB4Mj1cIjZcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCI+PC9saW5lPjwvc3ZnPicsXHJcbiAgY2hlY2s6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMCA2IDkgMTcgNCAxMlwiPjwvcG9seWxpbmU+PC9zdmc+JyxcclxuICBwYXJ0aWFsQ2hlY2s6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxsaW5lIHgxPVwiNVwiIHkxPVwiMTJcIiB4Mj1cIjE5XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz4nXHJcbn0sIE8gPSAobCwgZSkgPT4ge1xyXG4gIGlmIChlLmlubmVySFRNTCA9IFwiXCIsIHR5cGVvZiBsID09IFwic3RyaW5nXCIpXHJcbiAgICBlLmlubmVySFRNTCA9IGw7XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zdCB0ID0gbC5jbG9uZU5vZGUoITApO1xyXG4gICAgZS5hcHBlbmRDaGlsZCh0KTtcclxuICB9XHJcbn0sIFB0ID0gKGwpID0+IHtcclxuICBjb25zdCBlID0gbCA/IHsgLi4ubCB9IDoge307XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKEl0KS5mb3JFYWNoKCh0KSA9PiB7XHJcbiAgICBlW3RdIHx8IChlW3RdID0gSXRbdF0pO1xyXG4gIH0pLCBlO1xyXG59LCBhaSA9IChsKSA9PiBsLnJlZHVjZSgoZSwgeyBuYW1lOiB0IH0sIHMpID0+IChlICs9IHQsIHMgPCBsLmxlbmd0aCAtIDEgJiYgKGUgKz0gXCIsIFwiKSwgZSksIFwiXCIpO1xyXG52YXIgVCwgRSwgRCwgdiwgdWUsIER0LCBILCBSLCBwZSwgSHQsIG1lLCBHdCwgRywgVSwgTiwgViwgZmUsIE10LCBiZSwgRnQsIENlLCBxdCwgZ2UsIGp0LCB3ZSwgJHQsIGtlLCBXdCwgRWUsIFJ0LCB2ZSwgVXQsIExlLCB6dCwgeWUsIFl0LCB4ZSwgS3QsIFNlLCBYdCwgX2UsIEp0LCBBZSwgWnQsIFRlLCBRdCwgTmUsIGVzLCB6LCB3dDtcclxuY2xhc3Mgb2kge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIHZhbHVlOiBlLFxyXG4gICAgc2hvd1RhZ3M6IHQsXHJcbiAgICB0YWdzQ291bnRUZXh0OiBzLFxyXG4gICAgY2xlYXJhYmxlOiBpLFxyXG4gICAgaXNBbHdheXNPcGVuZWQ6IGEsXHJcbiAgICBzZWFyY2hhYmxlOiBoLFxyXG4gICAgcGxhY2Vob2xkZXI6IHAsXHJcbiAgICBkaXNhYmxlZDogZixcclxuICAgIGlzU2luZ2xlU2VsZWN0OiBiLFxyXG4gICAgaWQ6IEMsXHJcbiAgICBhcmlhTGFiZWw6IGcsXHJcbiAgICBpY29uRWxlbWVudHM6IHcsXHJcbiAgICBpbnB1dENhbGxiYWNrOiBrLFxyXG4gICAgc2VhcmNoQ2FsbGJhY2s6IHksXHJcbiAgICBvcGVuQ2FsbGJhY2s6IEksXHJcbiAgICBjbG9zZUNhbGxiYWNrOiBXLFxyXG4gICAga2V5ZG93bkNhbGxiYWNrOiBhZSxcclxuICAgIGZvY3VzQ2FsbGJhY2s6IGJ0LFxyXG4gICAgYmx1ckNhbGxiYWNrOiBDdCxcclxuICAgIG5hbWVDaGFuZ2VDYWxsYmFjazogb2VcclxuICB9KSB7XHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIHIodGhpcywgdWUpO1xyXG4gICAgcih0aGlzLCBIKTtcclxuICAgIHIodGhpcywgcGUpO1xyXG4gICAgcih0aGlzLCBtZSk7XHJcbiAgICByKHRoaXMsIEcpO1xyXG4gICAgcih0aGlzLCBOKTtcclxuICAgIHIodGhpcywgZmUpO1xyXG4gICAgcih0aGlzLCBiZSk7XHJcbiAgICByKHRoaXMsIENlKTtcclxuICAgIHIodGhpcywgZ2UpO1xyXG4gICAgcih0aGlzLCB3ZSk7XHJcbiAgICByKHRoaXMsIGtlKTtcclxuICAgIHIodGhpcywgRWUpO1xyXG4gICAgcih0aGlzLCB2ZSk7XHJcbiAgICByKHRoaXMsIExlKTtcclxuICAgIHIodGhpcywgeWUpO1xyXG4gICAgcih0aGlzLCB4ZSk7XHJcbiAgICByKHRoaXMsIFNlKTtcclxuICAgIHIodGhpcywgX2UpO1xyXG4gICAgcih0aGlzLCBBZSk7XHJcbiAgICByKHRoaXMsIFRlKTtcclxuICAgIHIodGhpcywgTmUpO1xyXG4gICAgLy8gRW1pdHNcclxuICAgIHIodGhpcywgeik7XHJcbiAgICAvLyBQcm9wc1xyXG4gICAgYyh0aGlzLCBcInZhbHVlXCIpO1xyXG4gICAgYyh0aGlzLCBcInNob3dUYWdzXCIpO1xyXG4gICAgYyh0aGlzLCBcInRhZ3NDb3VudFRleHRcIik7XHJcbiAgICBjKHRoaXMsIFwiY2xlYXJhYmxlXCIpO1xyXG4gICAgYyh0aGlzLCBcImlzQWx3YXlzT3BlbmVkXCIpO1xyXG4gICAgYyh0aGlzLCBcInNlYXJjaGFibGVcIik7XHJcbiAgICBjKHRoaXMsIFwicGxhY2Vob2xkZXJcIik7XHJcbiAgICBjKHRoaXMsIFwiZGlzYWJsZWRcIik7XHJcbiAgICBjKHRoaXMsIFwiaXNTaW5nbGVTZWxlY3RcIik7XHJcbiAgICBjKHRoaXMsIFwiaWRcIik7XHJcbiAgICBjKHRoaXMsIFwiYXJpYUxhYmVsXCIpO1xyXG4gICAgYyh0aGlzLCBcImljb25FbGVtZW50c1wiKTtcclxuICAgIC8vIElubmVyU3RhdGVcclxuICAgIGModGhpcywgXCJpc09wZW5lZFwiKTtcclxuICAgIGModGhpcywgXCJzZWFyY2hUZXh0XCIpO1xyXG4gICAgYyh0aGlzLCBcInNyY0VsZW1lbnRcIik7XHJcbiAgICAvLyBQcml2YXRlSW5uZXJTdGF0ZVxyXG4gICAgcih0aGlzLCBULCB2b2lkIDApO1xyXG4gICAgcih0aGlzLCBFLCB2b2lkIDApO1xyXG4gICAgcih0aGlzLCBELCB2b2lkIDApO1xyXG4gICAgcih0aGlzLCB2LCB2b2lkIDApO1xyXG4gICAgLy8gQ2FsbGJhY2tzXHJcbiAgICBjKHRoaXMsIFwiaW5wdXRDYWxsYmFja1wiKTtcclxuICAgIGModGhpcywgXCJzZWFyY2hDYWxsYmFja1wiKTtcclxuICAgIGModGhpcywgXCJvcGVuQ2FsbGJhY2tcIik7XHJcbiAgICBjKHRoaXMsIFwiY2xvc2VDYWxsYmFja1wiKTtcclxuICAgIGModGhpcywgXCJrZXlkb3duQ2FsbGJhY2tcIik7XHJcbiAgICBjKHRoaXMsIFwiZm9jdXNDYWxsYmFja1wiKTtcclxuICAgIGModGhpcywgXCJibHVyQ2FsbGJhY2tcIik7XHJcbiAgICBjKHRoaXMsIFwibmFtZUNoYW5nZUNhbGxiYWNrXCIpO1xyXG4gICAgdGhpcy52YWx1ZSA9IGUsIHRoaXMuc2hvd1RhZ3MgPSB0LCB0aGlzLnRhZ3NDb3VudFRleHQgPSBzLCB0aGlzLnNlYXJjaGFibGUgPSBoLCB0aGlzLnBsYWNlaG9sZGVyID0gcCwgdGhpcy5jbGVhcmFibGUgPSBpLCB0aGlzLmlzQWx3YXlzT3BlbmVkID0gYSwgdGhpcy5kaXNhYmxlZCA9IGYsIHRoaXMuaXNTaW5nbGVTZWxlY3QgPSBiLCB0aGlzLmlkID0gQywgdGhpcy5hcmlhTGFiZWwgPSBnLCB0aGlzLmljb25FbGVtZW50cyA9IHcsIHRoaXMuaXNPcGVuZWQgPSAhMSwgdGhpcy5zZWFyY2hUZXh0ID0gXCJcIiwgbSh0aGlzLCBULCBvKHRoaXMsIENlLCBxdCkuY2FsbCh0aGlzKSksIG0odGhpcywgRSwgbyh0aGlzLCBMZSwgenQpLmNhbGwodGhpcykpLCBtKHRoaXMsIEQsIG8odGhpcywgU2UsIFh0KS5jYWxsKHRoaXMpKSwgbSh0aGlzLCB2LCBudWxsKSwgdGhpcy5pbnB1dENhbGxiYWNrID0gaywgdGhpcy5zZWFyY2hDYWxsYmFjayA9IHksIHRoaXMub3BlbkNhbGxiYWNrID0gSSwgdGhpcy5jbG9zZUNhbGxiYWNrID0gVywgdGhpcy5rZXlkb3duQ2FsbGJhY2sgPSBhZSwgdGhpcy5mb2N1c0NhbGxiYWNrID0gYnQsIHRoaXMuYmx1ckNhbGxiYWNrID0gQ3QsIHRoaXMubmFtZUNoYW5nZUNhbGxiYWNrID0gb2UsIHRoaXMuc3JjRWxlbWVudCA9IG8odGhpcywgZmUsIE10KS5jYWxsKHRoaXMsIG4odGhpcywgVCksIG4odGhpcywgRSksIG4odGhpcywgRCkpLCBvKHRoaXMsIHVlLCBEdCkuY2FsbCh0aGlzKTtcclxuICB9XHJcbiAgLy8gUHVibGljIG1ldGhvZHNcclxuICBmb2N1cygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gbih0aGlzLCBFKS5mb2N1cygpLCAwKTtcclxuICB9XHJcbiAgYmx1cigpIHtcclxuICAgIHRoaXMuaXNPcGVuZWQgJiYgbyh0aGlzLCBOLCBWKS5jYWxsKHRoaXMpLCB0aGlzLmNsZWFyU2VhcmNoKCksIG4odGhpcywgRSkuYmx1cigpO1xyXG4gIH1cclxuICB1cGRhdGVWYWx1ZShlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gZSwgbyh0aGlzLCBILCBSKS5jYWxsKHRoaXMpLCBvKHRoaXMsIEcsIFUpLmNhbGwodGhpcyk7XHJcbiAgfVxyXG4gIHJlbW92ZUl0ZW0oZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKCh0KSA9PiB0LmlkICE9PSBlKSwgbyh0aGlzLCB6LCB3dCkuY2FsbCh0aGlzKSwgbyh0aGlzLCBILCBSKS5jYWxsKHRoaXMpLCBvKHRoaXMsIEcsIFUpLmNhbGwodGhpcyk7XHJcbiAgfVxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IFtdLCBvKHRoaXMsIHosIHd0KS5jYWxsKHRoaXMpLCBvKHRoaXMsIEgsIFIpLmNhbGwodGhpcyksIHRoaXMuY2xlYXJTZWFyY2goKTtcclxuICB9XHJcbiAgb3BlbkNsb3NlKCkge1xyXG4gICAgbyh0aGlzLCBOLCBWKS5jYWxsKHRoaXMpO1xyXG4gIH1cclxuICBjbGVhclNlYXJjaCgpIHtcclxuICAgIHRoaXMuc2VhcmNoVGV4dCA9IFwiXCIsIHRoaXMuc2VhcmNoQ2FsbGJhY2soXCJcIiksIG8odGhpcywgRywgVSkuY2FsbCh0aGlzKTtcclxuICB9XHJcbn1cclxuVCA9IG5ldyBXZWFrTWFwKCksIEUgPSBuZXcgV2Vha01hcCgpLCBEID0gbmV3IFdlYWtNYXAoKSwgdiA9IG5ldyBXZWFrTWFwKCksIHVlID0gbmV3IFdlYWtTZXQoKSwgRHQgPSBmdW5jdGlvbigpIHtcclxuICBvKHRoaXMsIEgsIFIpLmNhbGwodGhpcyksIG8odGhpcywgRywgVSkuY2FsbCh0aGlzKSwgbyh0aGlzLCBwZSwgSHQpLmNhbGwodGhpcyk7XHJcbn0sIEggPSBuZXcgV2Vha1NldCgpLCBSID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKG4odGhpcywgVCkuaW5uZXJIVE1MID0gXCJcIiwgdGhpcy5zaG93VGFncykge1xyXG4gICAgbih0aGlzLCBUKS5hcHBlbmQoLi4ubyh0aGlzLCBnZSwganQpLmNhbGwodGhpcykpO1xyXG4gICAgY29uc3QgZSA9IGFpKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5uYW1lQ2hhbmdlQ2FsbGJhY2soZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGUgPSBvKHRoaXMsIHZlLCBVdCkuY2FsbCh0aGlzKTtcclxuICAgIG4odGhpcywgVCkuYXBwZW5kQ2hpbGQoZSksIHRoaXMubmFtZUNoYW5nZUNhbGxiYWNrKGUuaW5uZXJUZXh0KTtcclxuICB9XHJcbiAgbih0aGlzLCBUKS5hcHBlbmRDaGlsZChuKHRoaXMsIEUpKTtcclxufSwgcGUgPSBuZXcgV2Vha1NldCgpLCBIdCA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGUgPSBbXTtcclxuICBuKHRoaXMsIEQpLmlubmVySFRNTCA9IFwiXCIsIHRoaXMuY2xlYXJhYmxlICYmIGUucHVzaChvKHRoaXMsIF9lLCBKdCkuY2FsbCh0aGlzKSksIHRoaXMuaXNBbHdheXNPcGVuZWQgfHwgZS5wdXNoKG8odGhpcywgVGUsIFF0KS5jYWxsKHRoaXMsIHRoaXMuaXNPcGVuZWQpKSwgZS5sZW5ndGggJiYgbih0aGlzLCBEKS5hcHBlbmQoLi4uZSk7XHJcbn0sIG1lID0gbmV3IFdlYWtTZXQoKSwgR3QgPSBmdW5jdGlvbigpIHtcclxuICBpZiAoIXRoaXMuaXNBbHdheXNPcGVuZWQgJiYgbih0aGlzLCB2KSkge1xyXG4gICAgY29uc3QgZSA9IHRoaXMuaXNPcGVuZWQgPyB0aGlzLmljb25FbGVtZW50cy5hcnJvd1VwIDogdGhpcy5pY29uRWxlbWVudHMuYXJyb3dEb3duO1xyXG4gICAgTyhlLCBuKHRoaXMsIHYpKTtcclxuICB9XHJcbn0sIEcgPSBuZXcgV2Vha1NldCgpLCBVID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGU7XHJcbiAgKGUgPSB0aGlzLnZhbHVlKSAhPSBudWxsICYmIGUubGVuZ3RoID8gKG4odGhpcywgRSkucmVtb3ZlQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiksIHRoaXMuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1pbnB1dC0tdmFsdWUtbm90LXNlbGVjdGVkXCIpKSA6IChuKHRoaXMsIEUpLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHRoaXMucGxhY2Vob2xkZXIpLCB0aGlzLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXQtLXZhbHVlLW5vdC1zZWxlY3RlZFwiKSksIHRoaXMuc2VhcmNoYWJsZSA/IHRoaXMuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1pbnB1dC0tdW5zZWFyY2hhYmxlXCIpIDogdGhpcy5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWlucHV0LS11bnNlYXJjaGFibGVcIiksIHRoaXMuaXNTaW5nbGVTZWxlY3QgPyB0aGlzLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXQtLWlzLXNpbmdsZS1zZWxlY3RcIikgOiB0aGlzLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtaW5wdXQtLWlzLXNpbmdsZS1zZWxlY3RcIiksIG4odGhpcywgRSkudmFsdWUgPSB0aGlzLnNlYXJjaFRleHQ7XHJcbn0sIE4gPSBuZXcgV2Vha1NldCgpLCBWID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5pc09wZW5lZCA9ICF0aGlzLmlzT3BlbmVkLCBvKHRoaXMsIG1lLCBHdCkuY2FsbCh0aGlzKSwgdGhpcy5pc09wZW5lZCA/IHRoaXMub3BlbkNhbGxiYWNrKCkgOiB0aGlzLmNsb3NlQ2FsbGJhY2soKTtcclxufSwgZmUgPSBuZXcgV2Vha1NldCgpLCBNdCA9IGZ1bmN0aW9uKGUsIHQsIHMpIHtcclxuICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gaS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1pbnB1dFwiKSwgaS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpLCBpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGEpID0+IG8odGhpcywgYmUsIEZ0KS5jYWxsKHRoaXMsIGEpKSwgaS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4gdGhpcy5mb2N1c0NhbGxiYWNrKCksICEwKSwgaS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB0aGlzLmJsdXJDYWxsYmFjaygpLCAhMCksIGUuYXBwZW5kQ2hpbGQodCksIGkuYXBwZW5kKGUsIHMpLCBpO1xyXG59LCBiZSA9IG5ldyBXZWFrU2V0KCksIEZ0ID0gZnVuY3Rpb24oZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCksIHRoaXMuaXNPcGVuZWQgfHwgbyh0aGlzLCBOLCBWKS5jYWxsKHRoaXMpLCB0aGlzLmZvY3VzKCk7XHJcbn0sIENlID0gbmV3IFdlYWtTZXQoKSwgcXQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1pbnB1dF9fdGFnc1wiKSwgZTtcclxufSwgZ2UgPSBuZXcgV2Vha1NldCgpLCBqdCA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLnZhbHVlLm1hcCgoZSkgPT4ge1xyXG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWlucHV0X190YWdzLWVsZW1lbnRcIiksIHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKSwgdC5zZXRBdHRyaWJ1dGUoXCJ0YWctaWRcIiwgZS5pZC50b1N0cmluZygpKSwgdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBlLm5hbWUpO1xyXG4gICAgY29uc3QgcyA9IG8odGhpcywga2UsIFd0KS5jYWxsKHRoaXMsIGUubmFtZSksIGkgPSBvKHRoaXMsIEVlLCBSdCkuY2FsbCh0aGlzKTtcclxuICAgIHJldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGEpID0+IG8odGhpcywgd2UsICR0KS5jYWxsKHRoaXMsIGEsIGUuaWQpKSwgdC5hcHBlbmQocywgaSksIHQ7XHJcbiAgfSk7XHJcbn0sIHdlID0gbmV3IFdlYWtTZXQoKSwgJHQgPSBmdW5jdGlvbihlLCB0KSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpLCB0aGlzLnJlbW92ZUl0ZW0odCksIHRoaXMuZm9jdXMoKTtcclxufSwga2UgPSBuZXcgV2Vha1NldCgpLCBXdCA9IGZ1bmN0aW9uKGUpIHtcclxuICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgcmV0dXJuIHQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXRfX3RhZ3MtbmFtZVwiKSwgdC50ZXh0Q29udGVudCA9IGUsIHQ7XHJcbn0sIEVlID0gbmV3IFdlYWtTZXQoKSwgUnQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgcmV0dXJuIGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXRfX3RhZ3MtY3Jvc3NcIiksIE8odGhpcy5pY29uRWxlbWVudHMuY3Jvc3MsIGUpLCBlO1xyXG59LCB2ZSA9IG5ldyBXZWFrU2V0KCksIFV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGlmIChlLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWlucHV0X190YWdzLWNvdW50XCIpLCAhdGhpcy52YWx1ZS5sZW5ndGgpXHJcbiAgICByZXR1cm4gZS50ZXh0Q29udGVudCA9IFwiXCIsIGUuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJcIiksIGU7XHJcbiAgY29uc3QgdCA9IHRoaXMudmFsdWUubGVuZ3RoID09PSAxID8gdGhpcy52YWx1ZVswXS5uYW1lIDogYCR7dGhpcy52YWx1ZS5sZW5ndGh9ICR7dGhpcy50YWdzQ291bnRUZXh0fWA7XHJcbiAgcmV0dXJuIGUudGV4dENvbnRlbnQgPSB0LCBlLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHQpLCBlO1xyXG59LCBMZSA9IG5ldyBXZWFrU2V0KCksIHp0ID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICByZXR1cm4gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1pbnB1dF9fZWRpdFwiKSwgdGhpcy5pZCAmJiBlLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQpLCAoIXRoaXMuc2VhcmNoYWJsZSB8fCB0aGlzLmRpc2FibGVkKSAmJiBlLnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIiksIHRoaXMuZGlzYWJsZWQgJiYgZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpLCB0aGlzLmFyaWFMYWJlbC5sZW5ndGggJiYgZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuYXJpYUxhYmVsKSwgZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAodCkgPT4gbyh0aGlzLCB5ZSwgWXQpLmNhbGwodGhpcywgdCkpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAodCkgPT4gbyh0aGlzLCB4ZSwgS3QpLmNhbGwodGhpcywgdCwgZSkpLCBlO1xyXG59LCB5ZSA9IG5ldyBXZWFrU2V0KCksIFl0ID0gZnVuY3Rpb24oZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3QgdCA9IGUua2V5O1xyXG4gIHQgPT09IFwiQmFja3NwYWNlXCIgJiYgIXRoaXMuc2VhcmNoVGV4dC5sZW5ndGggJiYgdGhpcy52YWx1ZS5sZW5ndGggJiYgIXRoaXMuc2hvd1RhZ3MgJiYgdGhpcy5jbGVhcigpLCB0ID09PSBcIkJhY2tzcGFjZVwiICYmICF0aGlzLnNlYXJjaFRleHQubGVuZ3RoICYmIHRoaXMudmFsdWUubGVuZ3RoICYmIHRoaXMucmVtb3ZlSXRlbSh0aGlzLnZhbHVlW3RoaXMudmFsdWUubGVuZ3RoIC0gMV0uaWQpLCBlLmNvZGUgPT09IFwiU3BhY2VcIiAmJiAoIXRoaXMuc2VhcmNoVGV4dCB8fCAhdGhpcy5zZWFyY2hhYmxlKSAmJiBvKHRoaXMsIE4sIFYpLmNhbGwodGhpcyksICh0ID09PSBcIkVudGVyXCIgfHwgdCA9PT0gXCJBcnJvd0Rvd25cIiB8fCB0ID09PSBcIkFycm93VXBcIikgJiYgZS5wcmV2ZW50RGVmYXVsdCgpLCB0aGlzLmtleWRvd25DYWxsYmFjayhlKSwgdCAhPT0gXCJUYWJcIiAmJiB0aGlzLmZvY3VzKCk7XHJcbn0sIHhlID0gbmV3IFdlYWtTZXQoKSwgS3QgPSBmdW5jdGlvbihlLCB0KSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICBjb25zdCBzID0gdGhpcy5zZWFyY2hUZXh0LCBpID0gdC52YWx1ZS50cmltKCk7XHJcbiAgaWYgKHMubGVuZ3RoID09PSAwICYmIGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICB0LnZhbHVlID0gXCJcIjtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xyXG4gICAgY29uc3QgYSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZWFyY2hDYWxsYmFjayhhKSwgdGhpcy5pc09wZW5lZCB8fCBvKHRoaXMsIE4sIFYpLmNhbGwodGhpcyk7XHJcbiAgfSBlbHNlXHJcbiAgICB0LnZhbHVlID0gXCJcIjtcclxuICB0aGlzLnNlYXJjaFRleHQgPSB0LnZhbHVlO1xyXG59LCBTZSA9IG5ldyBXZWFrU2V0KCksIFh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmV0dXJuIGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXRfX29wZXJhdG9yc1wiKSwgZTtcclxufSwgX2UgPSBuZXcgV2Vha1NldCgpLCBKdCA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICByZXR1cm4gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1pbnB1dF9fY2xlYXJcIiksIGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKSwgTyh0aGlzLmljb25FbGVtZW50cy5jbGVhciwgZSksIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAodCkgPT4gbyh0aGlzLCBBZSwgWnQpLmNhbGwodGhpcywgdCkpLCBlO1xyXG59LCBBZSA9IG5ldyBXZWFrU2V0KCksIFp0ID0gZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKSwgZS5zdG9wUHJvcGFnYXRpb24oKSwgKHRoaXMuc2VhcmNoVGV4dC5sZW5ndGggfHwgdGhpcy52YWx1ZS5sZW5ndGgpICYmIHRoaXMuY2xlYXIoKSwgdGhpcy5mb2N1cygpO1xyXG59LCBUZSA9IG5ldyBXZWFrU2V0KCksIFF0ID0gZnVuY3Rpb24oZSkge1xyXG4gIG0odGhpcywgdiwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikpLCBuKHRoaXMsIHYpLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWlucHV0X19hcnJvd1wiKTtcclxuICBjb25zdCB0ID0gZSA/IHRoaXMuaWNvbkVsZW1lbnRzLmFycm93VXAgOiB0aGlzLmljb25FbGVtZW50cy5hcnJvd0Rvd247XHJcbiAgcmV0dXJuIE8odCwgbih0aGlzLCB2KSksIG4odGhpcywgdikuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAocykgPT4gbyh0aGlzLCBOZSwgZXMpLmNhbGwodGhpcywgcykpLCBuKHRoaXMsIHYpO1xyXG59LCBOZSA9IG5ldyBXZWFrU2V0KCksIGVzID0gZnVuY3Rpb24oZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCksIGUucHJldmVudERlZmF1bHQoKSwgdGhpcy5mb2N1cygpLCBvKHRoaXMsIE4sIFYpLmNhbGwodGhpcyk7XHJcbn0sIHogPSBuZXcgV2Vha1NldCgpLCB3dCA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuaW5wdXRDYWxsYmFjayh0aGlzLnZhbHVlKTtcclxufTtcclxuY29uc3QgdHMgPSAobCwgZSwgdCwgcykgPT4ge1xyXG4gIGRpKGUpO1xyXG4gIGNvbnN0IGkgPSBlLmZpbHRlcigoYSkgPT4gIWEuZGlzYWJsZWQgJiYgbC5zb21lKChoKSA9PiBoID09PSBhLmlkKSk7XHJcbiAgaWYgKHQgJiYgaS5sZW5ndGgpIHtcclxuICAgIGlbMF0uY2hlY2tlZCA9ICEwO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpLmZvckVhY2goKGEpID0+IHtcclxuICAgIGEuY2hlY2tlZCA9ICEwO1xyXG4gICAgY29uc3QgaCA9IE90KGEsIGUsIHMpO1xyXG4gICAgYS5jaGVja2VkID0gaDtcclxuICB9KTtcclxufSwgT3QgPSAoeyBpZDogbCwgY2hlY2tlZDogZSB9LCB0LCBzKSA9PiB7XHJcbiAgY29uc3QgaSA9IHQuZmluZCgoaCkgPT4gaC5pZCA9PT0gbCk7XHJcbiAgaWYgKCFpKVxyXG4gICAgcmV0dXJuICExO1xyXG4gIGlmIChzKVxyXG4gICAgcmV0dXJuIGkuY2hlY2tlZCA9IGkuZGlzYWJsZWQgPyAhMSA6ICEhZSwgaS5jaGVja2VkO1xyXG4gIGNvbnN0IGEgPSBzcyghIWUsIGksIHQpO1xyXG4gIHJldHVybiBpcyhpLCB0KSwgYTtcclxufSwgc3MgPSAobCwgZSwgdCkgPT4ge1xyXG4gIGlmICghZS5pc0dyb3VwKVxyXG4gICAgcmV0dXJuIGUuY2hlY2tlZCA9IGUuZGlzYWJsZWQgPyAhMSA6ICEhbCwgZS5pc1BhcnRpYWxDaGVja2VkID0gITEsIGUuY2hlY2tlZDtcclxuICBjb25zdCBzID0gdC5maWx0ZXIoKHApID0+IHAuY2hpbGRPZiA9PT0gZS5pZCk7XHJcbiAgcmV0dXJuICFsIHx8IGUuZGlzYWJsZWQgfHwgZS5pc1BhcnRpYWxDaGVja2VkID8gKGUuY2hlY2tlZCA9ICExLCBlLmlzUGFydGlhbENoZWNrZWQgPSAhMSwga3QoZSwgcywgdCksIGUuY2hlY2tlZCkgOiBscyhzLCB0KSA/IG5zKHMpID8gKGUuY2hlY2tlZCA9ICExLCBlLmlzUGFydGlhbENoZWNrZWQgPSAhMSwgZS5kaXNhYmxlZCA9ICEwLCBlLmNoZWNrZWQpIDogKGUuY2hlY2tlZCA9ICExLCBlLmlzUGFydGlhbENoZWNrZWQgPSAhMCwgcy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICBzcyhsLCBwLCB0KTtcclxuICB9KSwgZS5jaGVja2VkKSA6IChlLmNoZWNrZWQgPSAhMCwgZS5pc1BhcnRpYWxDaGVja2VkID0gITEsIGt0KGUsIHMsIHQpLCBlLmNoZWNrZWQpO1xyXG59LCBpcyA9IChsLCBlKSA9PiB7XHJcbiAgY29uc3QgdCA9IGUuZmluZCgocykgPT4gcy5pZCA9PT0gbC5jaGlsZE9mKTtcclxuICB0ICYmIChyaSh0LCBlKSwgaXModCwgZSkpO1xyXG59LCByaSA9IChsLCBlKSA9PiB7XHJcbiAgY29uc3QgdCA9IG10KGwsIGUpO1xyXG4gIGlmIChucyh0KSkge1xyXG4gICAgbC5jaGVja2VkID0gITEsIGwuaXNQYXJ0aWFsQ2hlY2tlZCA9ICExLCBsLmRpc2FibGVkID0gITA7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChjaSh0KSkge1xyXG4gICAgbC5jaGVja2VkID0gITAsIGwuaXNQYXJ0aWFsQ2hlY2tlZCA9ICExO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoaGkodCkpIHtcclxuICAgIGwuY2hlY2tlZCA9ICExLCBsLmlzUGFydGlhbENoZWNrZWQgPSAhMDtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbC5jaGVja2VkID0gITEsIGwuaXNQYXJ0aWFsQ2hlY2tlZCA9ICExO1xyXG59LCBrdCA9ICh7IGNoZWNrZWQ6IGwsIGRpc2FibGVkOiBlIH0sIHQsIHMpID0+IHtcclxuICB0LmZvckVhY2goKGkpID0+IHtcclxuICAgIGkuZGlzYWJsZWQgPSAhIWUgfHwgISFpLmRpc2FibGVkLCBpLmNoZWNrZWQgPSAhIWwgJiYgIWkuZGlzYWJsZWQsIGkuaXNQYXJ0aWFsQ2hlY2tlZCA9ICExO1xyXG4gICAgY29uc3QgYSA9IG10KGksIHMpO1xyXG4gICAga3QoeyBjaGVja2VkOiBsLCBkaXNhYmxlZDogZSB9LCBhLCBzKTtcclxuICB9KTtcclxufSwgbHMgPSAobCwgZSkgPT4gbC5zb21lKChpKSA9PiBpLmRpc2FibGVkKSA/ICEwIDogbC5zb21lKChpKSA9PiB7XHJcbiAgaWYgKGkuaXNHcm91cCkge1xyXG4gICAgY29uc3QgYSA9IG10KGksIGUpO1xyXG4gICAgcmV0dXJuIGxzKGEsIGUpO1xyXG4gIH1cclxuICByZXR1cm4gITE7XHJcbn0pLCBucyA9IChsKSA9PiBsLmV2ZXJ5KChlKSA9PiAhIWUuZGlzYWJsZWQpLCBjaSA9IChsKSA9PiBsLmV2ZXJ5KChlKSA9PiAhIWUuY2hlY2tlZCksIGhpID0gKGwpID0+IGwuc29tZSgoZSkgPT4gISFlLmNoZWNrZWQgfHwgISFlLmlzUGFydGlhbENoZWNrZWQpLCBkaSA9IChsKSA9PiB7XHJcbiAgbC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBlLmNoZWNrZWQgPSAhMSwgZS5pc1BhcnRpYWxDaGVja2VkID0gITE7XHJcbiAgfSk7XHJcbn0sIHVpID0gKGwsIGUsIHQpID0+IHtcclxuICBjb25zdCBzID0geyBsZXZlbDogMCwgZ3JvdXBJZDogXCJcIiB9LCBpID0gYXMobCwgZSwgcy5ncm91cElkLCBzLmxldmVsKTtcclxuICByZXR1cm4gbWkoaSwgdCk7XHJcbn0sIGFzID0gKGwsIGUsIHQsIHMpID0+IGwucmVkdWNlKChpLCBhKSA9PiB7XHJcbiAgdmFyIGI7XHJcbiAgY29uc3QgaCA9ICEhKChiID0gYS5jaGlsZHJlbikgIT0gbnVsbCAmJiBiLmxlbmd0aCksIHAgPSBzID49IGUgJiYgaCwgZiA9IHMgPiBlO1xyXG4gIGlmIChpLnB1c2goe1xyXG4gICAgaWQ6IGEudmFsdWUsXHJcbiAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICBjaGlsZE9mOiB0LFxyXG4gICAgaXNHcm91cDogaCxcclxuICAgIGNoZWNrZWQ6ICExLFxyXG4gICAgaXNQYXJ0aWFsQ2hlY2tlZDogITEsXHJcbiAgICBsZXZlbDogcyxcclxuICAgIGlzQ2xvc2VkOiBwLFxyXG4gICAgaGlkZGVuOiBmLFxyXG4gICAgZGlzYWJsZWQ6IGEuZGlzYWJsZWQgPz8gITFcclxuICB9KSwgaCkge1xyXG4gICAgY29uc3QgQyA9IGFzKGEuY2hpbGRyZW4sIGUsIGEudmFsdWUsIHMgKyAxKTtcclxuICAgIGkucHVzaCguLi5DKTtcclxuICB9XHJcbiAgcmV0dXJuIGk7XHJcbn0sIFtdKSwgbXQgPSAoeyBpZDogbCB9LCBlKSA9PiBlLmZpbHRlcigodCkgPT4gdC5jaGlsZE9mID09PSBsKSwgcGkgPSAobCkgPT4ge1xyXG4gIGNvbnN0IHsgdW5ncm91cGVkTm9kZXM6IGUsIGFsbEdyb3VwZWROb2RlczogdCwgYWxsTm9kZXM6IHMgfSA9IGwucmVkdWNlKFxyXG4gICAgKGEsIGgpID0+IChoLmNoZWNrZWQgJiYgKGEuYWxsTm9kZXMucHVzaChoKSwgaC5pc0dyb3VwID8gYS5hbGxHcm91cGVkTm9kZXMucHVzaChoKSA6IGEudW5ncm91cGVkTm9kZXMucHVzaChoKSksIGEpLFxyXG4gICAge1xyXG4gICAgICB1bmdyb3VwZWROb2RlczogW10sXHJcbiAgICAgIGFsbEdyb3VwZWROb2RlczogW10sXHJcbiAgICAgIGFsbE5vZGVzOiBbXVxyXG4gICAgfVxyXG4gICksIGkgPSBzLmZpbHRlcigoYSkgPT4gIXQuc29tZSgoeyBpZDogaCB9KSA9PiBoID09PSBhLmNoaWxkT2YpKTtcclxuICByZXR1cm4geyB1bmdyb3VwZWROb2RlczogZSwgZ3JvdXBlZE5vZGVzOiBpLCBhbGxOb2RlczogcyB9O1xyXG59LCBtaSA9IChsLCBlKSA9PiAobC5maWx0ZXIoKHMpID0+ICEhcy5kaXNhYmxlZCkuZm9yRWFjaChcclxuICAoeyBpZDogcyB9KSA9PiBPdCh7IGlkOiBzLCBjaGVja2VkOiAhMSB9LCBsLCBlKVxyXG4pLCBsKSwgZnQgPSAobCwgeyBpZDogZSwgaXNDbG9zZWQ6IHQgfSkgPT4ge1xyXG4gIG10KHsgaWQ6IGUgfSwgbCkuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgaS5oaWRkZW4gPSB0ID8/ICExLCBpLmlzR3JvdXAgJiYgIWkuaXNDbG9zZWQgJiYgZnQobCwgeyBpZDogaS5pZCwgaXNDbG9zZWQ6IHQgfSk7XHJcbiAgfSk7XHJcbn0sIGZpID0gKGwpID0+IHtcclxuICBsLmZpbHRlcigoZSkgPT4gZS5pc0dyb3VwICYmICFlLmRpc2FibGVkICYmIChlLmNoZWNrZWQgfHwgZS5pc1BhcnRpYWxDaGVja2VkKSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgZS5pc0Nsb3NlZCA9ICExLCBmdChsLCBlKTtcclxuICB9KTtcclxufSwgYmkgPSAobCwgZSkgPT4ge1xyXG4gIGNvbnN0IHQgPSBDaShsLCBlKTtcclxuICBsLmZvckVhY2goKHMpID0+IHtcclxuICAgIHQuc29tZSgoeyBpZDogYSB9KSA9PiBhID09PSBzLmlkKSA/IChzLmlzR3JvdXAgJiYgKHMuaXNDbG9zZWQgPSAhMSwgZnQobCwgcykpLCBzLmhpZGRlbiA9ICExKSA6IHMuaGlkZGVuID0gITA7XHJcbiAgfSk7XHJcbn0sIENpID0gKGwsIGUpID0+IGwucmVkdWNlKCh0LCBzKSA9PiB7XHJcbiAgaWYgKHMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgIGlmICh0LnB1c2gocyksIHMuaXNHcm91cCkge1xyXG4gICAgICBjb25zdCBhID0gb3Mocy5pZCwgbCk7XHJcbiAgICAgIHQucHVzaCguLi5hKTtcclxuICAgIH1cclxuICAgIGlmIChzLmNoaWxkT2YpIHtcclxuICAgICAgY29uc3QgYSA9IHJzKHMuY2hpbGRPZiwgbCk7XHJcbiAgICAgIHQucHVzaCguLi5hKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHQ7XHJcbn0sIFtdKSwgb3MgPSAobCwgZSkgPT4gZS5yZWR1Y2UoKHQsIHMpID0+IChzLmNoaWxkT2YgPT09IGwgJiYgKHQucHVzaChzKSwgcy5pc0dyb3VwICYmIHQucHVzaCguLi5vcyhzLmlkLCBlKSkpLCB0KSwgW10pLCBycyA9IChsLCBlKSA9PiBlLnJlZHVjZSgodCwgcykgPT4gKHMuaWQgPT09IGwgJiYgKHQucHVzaChzKSwgcy5jaGlsZE9mICYmIHQucHVzaCguLi5ycyhzLmNoaWxkT2YsIGUpKSksIHQpLCBbXSksIGdpID0gKGwpID0+IHtcclxuICBjb25zdCB7IGR1cGxpY2F0aW9uczogZSB9ID0gbC5yZWR1Y2UoXHJcbiAgICAodCwgcykgPT4gKHQuYWxsSXRlbXMuc29tZSgoaSkgPT4gaS50b1N0cmluZygpID09PSBzLmlkLnRvU3RyaW5nKCkpICYmIHQuZHVwbGljYXRpb25zLnB1c2gocy5pZCksIHQuYWxsSXRlbXMucHVzaChzLmlkKSwgdCksXHJcbiAgICB7XHJcbiAgICAgIGR1cGxpY2F0aW9uczogW10sXHJcbiAgICAgIGFsbEl0ZW1zOiBbXVxyXG4gICAgfVxyXG4gICk7XHJcbiAgZS5sZW5ndGggJiYgY29uc29sZS5lcnJvcihgVmFsaWRhdGlvbjogWW91IGhhdmUgZHVwbGljYXRlZCB2YWx1ZXM6ICR7ZS5qb2luKFwiLCBcIil9ISBZb3Ugc2hvdWxkIHVzZSB1bmlxdWUgdmFsdWVzLmApO1xyXG59LCB3aSA9IChsLCBlLCB0LCBzLCBpLCBhLCBoLCBwLCBmKSA9PiB7XHJcbiAgdHMobCwgZSwgaSwgZiksIHAgJiYgaCAmJiBmaShlKSwgY2UoZSwgdCwgcywgYSk7XHJcbn0sIGNlID0gKGwsIGUsIHQsIHMpID0+IHtcclxuICBsLmZvckVhY2goKGkpID0+IHtcclxuICAgIGNvbnN0IGEgPSBlLnF1ZXJ5U2VsZWN0b3IoYFtpbnB1dC1pZD1cIiR7aS5pZH1cIl1gKSwgaCA9IEEoYSk7XHJcbiAgICBhLmNoZWNrZWQgPSBpLmNoZWNrZWQsIGtpKGksIGgsIHMpLCBFaShpLCBoKSwgdmkoaSwgaCksIExpKGksIGgsIHQpLCB5aShpLCBoKSwgU2koaSwgaCwgbCksIHhpKGksIGEsIHQpO1xyXG4gIH0pLCBfaShsLCBlKTtcclxufSwga2kgPSAobCwgZSwgdCkgPT4ge1xyXG4gIGwuY2hlY2tlZCA/IGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tY2hlY2tlZFwiKSA6IGUuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tY2hlY2tlZFwiKSwgQXJyYXkuaXNBcnJheSh0KSAmJiB0WzBdID09PSBsLmlkICYmICFsLmRpc2FibGVkID8gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0X19pdGVtLS1zaW5nbGUtc2VsZWN0ZWRcIikgOiBlLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0tLXNpbmdsZS1zZWxlY3RlZFwiKTtcclxufSwgRWkgPSAobCwgZSkgPT4ge1xyXG4gIGwuaXNQYXJ0aWFsQ2hlY2tlZCA/IGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tcGFydGlhbC1jaGVja2VkXCIpIDogZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1saXN0X19pdGVtLS1wYXJ0aWFsLWNoZWNrZWRcIik7XHJcbn0sIHZpID0gKGwsIGUpID0+IHtcclxuICBsLmRpc2FibGVkID8gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0X19pdGVtLS1kaXNhYmxlZFwiKSA6IGUuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tZGlzYWJsZWRcIik7XHJcbn0sIExpID0gKGwsIGUsIHQpID0+IHtcclxuICBpZiAobC5pc0dyb3VwKSB7XHJcbiAgICBjb25zdCBzID0gZS5xdWVyeVNlbGVjdG9yKFwiLnRyZWVzZWxlY3QtbGlzdF9faXRlbS1pY29uXCIpLCBpID0gbC5pc0Nsb3NlZCA/IHQuYXJyb3dSaWdodCA6IHQuYXJyb3dEb3duO1xyXG4gICAgTyhpLCBzKSwgbC5pc0Nsb3NlZCA/IGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tY2xvc2VkXCIpIDogZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1saXN0X19pdGVtLS1jbG9zZWRcIik7XHJcbiAgfVxyXG59LCB5aSA9IChsLCBlKSA9PiB7XHJcbiAgbC5oaWRkZW4gPyBlLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0tLWhpZGRlblwiKSA6IGUuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0taGlkZGVuXCIpO1xyXG59LCB4aSA9IChsLCBlLCB0KSA9PiB7XHJcbiAgY29uc3QgaSA9IGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRyZWVzZWxlY3QtbGlzdF9faXRlbS1jaGVja2JveC1pY29uXCIpO1xyXG4gIGwuY2hlY2tlZCA/IE8odC5jaGVjaywgaSkgOiBsLmlzUGFydGlhbENoZWNrZWQgPyBPKHQucGFydGlhbENoZWNrLCBpKSA6IGkuaW5uZXJIVE1MID0gXCJcIjtcclxufSwgU2kgPSAobCwgZSwgdCkgPT4ge1xyXG4gIGNvbnN0IHMgPSBsLmxldmVsID09PSAwLCBpID0gMjAsIGEgPSA1O1xyXG4gIGlmIChzKSB7XHJcbiAgICBjb25zdCBoID0gdC5zb21lKChmKSA9PiBmLmlzR3JvdXAgJiYgZi5sZXZlbCA9PT0gbC5sZXZlbCksIHAgPSAhbC5pc0dyb3VwICYmIGggPyBgJHtpfXB4YCA6IGAke2F9cHhgO1xyXG4gICAgZS5zdHlsZS5wYWRkaW5nTGVmdCA9IGwuaXNHcm91cCA/IFwiMFwiIDogcDtcclxuICB9IGVsc2VcclxuICAgIGUuc3R5bGUucGFkZGluZ0xlZnQgPSBsLmlzR3JvdXAgPyBgJHtsLmxldmVsICogaX1weGAgOiBgJHtsLmxldmVsICogaSArIGl9cHhgO1xyXG4gIGUuc2V0QXR0cmlidXRlKFwibGV2ZWxcIiwgbC5sZXZlbC50b1N0cmluZygpKSwgZS5zZXRBdHRyaWJ1dGUoXCJncm91cFwiLCBsLmlzR3JvdXAudG9TdHJpbmcoKSk7XHJcbn0sIF9pID0gKGwsIGUpID0+IHtcclxuICBjb25zdCB0ID0gbC5zb21lKChpKSA9PiAhaS5oaWRkZW4pLCBzID0gZS5xdWVyeVNlbGVjdG9yKFwiLnRyZWVzZWxlY3QtbGlzdF9fZW1wdHlcIik7XHJcbiAgdCA/IHMuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9fZW1wdHktLWhpZGRlblwiKSA6IHMuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtbGlzdF9fZW1wdHktLWhpZGRlblwiKTtcclxufSwgQSA9IChsKSA9PiBsLnBhcmVudE5vZGUucGFyZW50Tm9kZSwgQnQgPSAobCwgZSkgPT4gZS5maW5kKCh0KSA9PiB0LmlkLnRvU3RyaW5nKCkgPT09IGwpLCBBaSA9IChsKSA9PiBBKGwpLnF1ZXJ5U2VsZWN0b3IoXCIudHJlZXNlbGVjdC1saXN0X19pdGVtLWljb25cIiksIFRpID0gKGwsIGUpID0+IHtcclxuICBlICYmIE9iamVjdC5rZXlzKGUpLmZvckVhY2goKHQpID0+IHtcclxuICAgIGNvbnN0IHMgPSBlW3RdO1xyXG4gICAgdHlwZW9mIHMgPT0gXCJzdHJpbmdcIiAmJiBsLnNldEF0dHJpYnV0ZSh0LCBzKTtcclxuICB9KTtcclxufTtcclxudmFyIE0sIFAsIHgsIFksIE9lLCBjcywgSWUsIGhzLCBQZSwgZHMsIEJlLCB1cywgVmUsIHBzLCBEZSwgbXMsIEssIEV0LCBIZSwgZnMsIEdlLCBicywgTWUsIENzLCBYLCB2dCwgRmUsIGdzLCBxZSwgd3MsIGplLCBrcywgJGUsIEVzLCBXZSwgdnMsIFJlLCBMcywgVWUsIHlzLCB6ZSwgeHMsIFllLCBTcywgS2UsIF9zLCBYZSwgQXMsIEosIEx0LCBaLCB5dCwgSmUsIFRzO1xyXG5jbGFzcyBOaSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgb3B0aW9uczogZSxcclxuICAgIHZhbHVlOiB0LFxyXG4gICAgb3BlbkxldmVsOiBzLFxyXG4gICAgbGlzdFNsb3RIdG1sQ29tcG9uZW50OiBpLFxyXG4gICAgZW1wdHlUZXh0OiBhLFxyXG4gICAgaXNTaW5nbGVTZWxlY3Q6IGgsXHJcbiAgICBpY29uRWxlbWVudHM6IHAsXHJcbiAgICBzaG93Q291bnQ6IGYsXHJcbiAgICBkaXNhYmxlZEJyYW5jaE5vZGU6IGIsXHJcbiAgICBleHBhbmRTZWxlY3RlZDogQyxcclxuICAgIGlzSW5kZXBlbmRlbnROb2RlczogZyxcclxuICAgIGlucHV0Q2FsbGJhY2s6IHcsXHJcbiAgICBhcnJvd0NsaWNrQ2FsbGJhY2s6IGssXHJcbiAgICBtb3VzZXVwQ2FsbGJhY2s6IHlcclxuICB9KSB7XHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIHIodGhpcywgT2UpO1xyXG4gICAgcih0aGlzLCBJZSk7XHJcbiAgICByKHRoaXMsIFBlKTtcclxuICAgIHIodGhpcywgQmUpO1xyXG4gICAgcih0aGlzLCBWZSk7XHJcbiAgICByKHRoaXMsIERlKTtcclxuICAgIHIodGhpcywgSyk7XHJcbiAgICByKHRoaXMsIEhlKTtcclxuICAgIHIodGhpcywgR2UpO1xyXG4gICAgcih0aGlzLCBNZSk7XHJcbiAgICByKHRoaXMsIFgpO1xyXG4gICAgcih0aGlzLCBGZSk7XHJcbiAgICByKHRoaXMsIHFlKTtcclxuICAgIHIodGhpcywgamUpO1xyXG4gICAgcih0aGlzLCAkZSk7XHJcbiAgICByKHRoaXMsIFdlKTtcclxuICAgIHIodGhpcywgUmUpO1xyXG4gICAgcih0aGlzLCBVZSk7XHJcbiAgICByKHRoaXMsIHplKTtcclxuICAgIHIodGhpcywgWWUpO1xyXG4gICAgLy8gQWN0aW9uc1xyXG4gICAgcih0aGlzLCBLZSk7XHJcbiAgICByKHRoaXMsIFhlKTtcclxuICAgIHIodGhpcywgSik7XHJcbiAgICByKHRoaXMsIFopO1xyXG4gICAgLy8gRW1pdHNcclxuICAgIHIodGhpcywgSmUpO1xyXG4gICAgLy8gUHJvcHNcclxuICAgIGModGhpcywgXCJvcHRpb25zXCIpO1xyXG4gICAgYyh0aGlzLCBcInZhbHVlXCIpO1xyXG4gICAgYyh0aGlzLCBcIm9wZW5MZXZlbFwiKTtcclxuICAgIGModGhpcywgXCJsaXN0U2xvdEh0bWxDb21wb25lbnRcIik7XHJcbiAgICBjKHRoaXMsIFwiZW1wdHlUZXh0XCIpO1xyXG4gICAgYyh0aGlzLCBcImlzU2luZ2xlU2VsZWN0XCIpO1xyXG4gICAgYyh0aGlzLCBcInNob3dDb3VudFwiKTtcclxuICAgIGModGhpcywgXCJkaXNhYmxlZEJyYW5jaE5vZGVcIik7XHJcbiAgICBjKHRoaXMsIFwiZXhwYW5kU2VsZWN0ZWRcIik7XHJcbiAgICBjKHRoaXMsIFwiaXNJbmRlcGVuZGVudE5vZGVzXCIpO1xyXG4gICAgYyh0aGlzLCBcImljb25FbGVtZW50c1wiKTtcclxuICAgIC8vIElubmVyU3RhdGVcclxuICAgIGModGhpcywgXCJzZWFyY2hUZXh0XCIpO1xyXG4gICAgYyh0aGlzLCBcImZsYXR0ZWRPcHRpb25zXCIpO1xyXG4gICAgYyh0aGlzLCBcImZsYXR0ZWRPcHRpb25zQmVmb3JlU2VhcmNoXCIpO1xyXG4gICAgYyh0aGlzLCBcInNlbGVjdGVkTm9kZXNcIik7XHJcbiAgICBjKHRoaXMsIFwic3JjRWxlbWVudFwiKTtcclxuICAgIC8vIENhbGxiYWNrc1xyXG4gICAgYyh0aGlzLCBcImlucHV0Q2FsbGJhY2tcIik7XHJcbiAgICBjKHRoaXMsIFwiYXJyb3dDbGlja0NhbGxiYWNrXCIpO1xyXG4gICAgYyh0aGlzLCBcIm1vdXNldXBDYWxsYmFja1wiKTtcclxuICAgIC8vIFByaXZhdGVJbm5lclN0YXRlXHJcbiAgICByKHRoaXMsIE0sIG51bGwpO1xyXG4gICAgcih0aGlzLCBQLCAhMCk7XHJcbiAgICByKHRoaXMsIHgsIFtdKTtcclxuICAgIHIodGhpcywgWSwgITApO1xyXG4gICAgdGhpcy5vcHRpb25zID0gZSwgdGhpcy52YWx1ZSA9IHQsIHRoaXMub3BlbkxldmVsID0gcyA/PyAwLCB0aGlzLmxpc3RTbG90SHRtbENvbXBvbmVudCA9IGkgPz8gbnVsbCwgdGhpcy5lbXB0eVRleHQgPSBhID8/IFwiTm8gcmVzdWx0cyBmb3VuZC4uLlwiLCB0aGlzLmlzU2luZ2xlU2VsZWN0ID0gaCA/PyAhMSwgdGhpcy5zaG93Q291bnQgPSBmID8/ICExLCB0aGlzLmRpc2FibGVkQnJhbmNoTm9kZSA9IGIgPz8gITEsIHRoaXMuZXhwYW5kU2VsZWN0ZWQgPSBDID8/ICExLCB0aGlzLmlzSW5kZXBlbmRlbnROb2RlcyA9IGcgPz8gITEsIHRoaXMuaWNvbkVsZW1lbnRzID0gcCwgdGhpcy5zZWFyY2hUZXh0ID0gXCJcIiwgdGhpcy5mbGF0dGVkT3B0aW9ucyA9IHVpKHRoaXMub3B0aW9ucywgdGhpcy5vcGVuTGV2ZWwsIHRoaXMuaXNJbmRlcGVuZGVudE5vZGVzKSwgdGhpcy5mbGF0dGVkT3B0aW9uc0JlZm9yZVNlYXJjaCA9IHRoaXMuZmxhdHRlZE9wdGlvbnMsIHRoaXMuc2VsZWN0ZWROb2RlcyA9IHsgbm9kZXM6IFtdLCBncm91cGVkTm9kZXM6IFtdLCBhbGxOb2RlczogW10gfSwgdGhpcy5zcmNFbGVtZW50ID0gbyh0aGlzLCBQZSwgZHMpLmNhbGwodGhpcyksIHRoaXMuaW5wdXRDYWxsYmFjayA9IHcsIHRoaXMuYXJyb3dDbGlja0NhbGxiYWNrID0gaywgdGhpcy5tb3VzZXVwQ2FsbGJhY2sgPSB5LCBnaSh0aGlzLmZsYXR0ZWRPcHRpb25zKTtcclxuICB9XHJcbiAgLy8gUHVibGljIG1ldGhvZHNcclxuICB1cGRhdGVWYWx1ZShlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gZSwgbSh0aGlzLCB4LCB0aGlzLmlzU2luZ2xlU2VsZWN0ID8gdGhpcy52YWx1ZSA6IFtdKSwgd2koXHJcbiAgICAgIGUsXHJcbiAgICAgIHRoaXMuZmxhdHRlZE9wdGlvbnMsXHJcbiAgICAgIHRoaXMuc3JjRWxlbWVudCxcclxuICAgICAgdGhpcy5pY29uRWxlbWVudHMsXHJcbiAgICAgIHRoaXMuaXNTaW5nbGVTZWxlY3QsXHJcbiAgICAgIG4odGhpcywgeCksXHJcbiAgICAgIHRoaXMuZXhwYW5kU2VsZWN0ZWQsXHJcbiAgICAgIG4odGhpcywgWSksXHJcbiAgICAgIHRoaXMuaXNJbmRlcGVuZGVudE5vZGVzXHJcbiAgICApLCBtKHRoaXMsIFksICExKSwgbyh0aGlzLCBaLCB5dCkuY2FsbCh0aGlzKTtcclxuICB9XHJcbiAgdXBkYXRlU2VhcmNoVmFsdWUoZSkge1xyXG4gICAgaWYgKGUgPT09IHRoaXMuc2VhcmNoVGV4dClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgY29uc3QgdCA9IHRoaXMuc2VhcmNoVGV4dCA9PT0gXCJcIiAmJiBlICE9PSBcIlwiO1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gZSwgdCAmJiAodGhpcy5mbGF0dGVkT3B0aW9uc0JlZm9yZVNlYXJjaCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5mbGF0dGVkT3B0aW9ucykpKSwgdGhpcy5zZWFyY2hUZXh0ID09PSBcIlwiICYmICh0aGlzLmZsYXR0ZWRPcHRpb25zID0gdGhpcy5mbGF0dGVkT3B0aW9uc0JlZm9yZVNlYXJjaC5tYXAoKHMpID0+IHtcclxuICAgICAgY29uc3QgaSA9IHRoaXMuZmxhdHRlZE9wdGlvbnMuZmluZCgoYSkgPT4gYS5pZCA9PT0gcy5pZCk7XHJcbiAgICAgIHJldHVybiBpLmlzQ2xvc2VkID0gcy5pc0Nsb3NlZCwgaS5oaWRkZW4gPSBzLmhpZGRlbiwgaTtcclxuICAgIH0pLCB0aGlzLmZsYXR0ZWRPcHRpb25zQmVmb3JlU2VhcmNoID0gW10pLCB0aGlzLnNlYXJjaFRleHQgJiYgYmkodGhpcy5mbGF0dGVkT3B0aW9ucywgZSksIGNlKHRoaXMuZmxhdHRlZE9wdGlvbnMsIHRoaXMuc3JjRWxlbWVudCwgdGhpcy5pY29uRWxlbWVudHMsIG4odGhpcywgeCkpLCB0aGlzLmZvY3VzRmlyc3RMaXN0RWxlbWVudCgpO1xyXG4gIH1cclxuICBjYWxsS2V5QWN0aW9uKGUpIHtcclxuICAgIG0odGhpcywgUCwgITEpO1xyXG4gICAgY29uc3QgdCA9IHRoaXMuc3JjRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWVzZWxlY3QtbGlzdF9faXRlbS0tZm9jdXNlZFwiKTtcclxuICAgIGlmICh0ID09IG51bGwgPyB2b2lkIDAgOiB0LmNsYXNzTGlzdC5jb250YWlucyhcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0taGlkZGVuXCIpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBpID0gZS5rZXk7XHJcbiAgICBpID09PSBcIkVudGVyXCIgJiYgdCAmJiB0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKSwgKGkgPT09IFwiQXJyb3dMZWZ0XCIgfHwgaSA9PT0gXCJBcnJvd1JpZ2h0XCIpICYmIG8odGhpcywgT2UsIGNzKS5jYWxsKHRoaXMsIHQsIGUpLCAoaSA9PT0gXCJBcnJvd0Rvd25cIiB8fCBpID09PSBcIkFycm93VXBcIikgJiYgbyh0aGlzLCBJZSwgaHMpLmNhbGwodGhpcywgdCwgaSk7XHJcbiAgfVxyXG4gIGZvY3VzRmlyc3RMaXN0RWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGUgPSBcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tZm9jdXNlZFwiLCB0ID0gdGhpcy5zcmNFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2V9YCksIHMgPSBBcnJheS5mcm9tKHRoaXMuc3JjRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyZWVzZWxlY3QtbGlzdF9faXRlbS1jaGVja2JveFwiKSkuZmlsdGVyKFxyXG4gICAgICAoYSkgPT4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoQShhKSkuZGlzcGxheSAhPT0gXCJub25lXCJcclxuICAgICk7XHJcbiAgICBpZiAoIXMubGVuZ3RoKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0ICYmIHQuY2xhc3NMaXN0LnJlbW92ZShlKSwgQShzWzBdKS5jbGFzc0xpc3QuYWRkKGUpO1xyXG4gIH1cclxuICBpc0xhc3RGb2N1c2VkRWxlbWVudEV4aXN0KCkge1xyXG4gICAgcmV0dXJuICEhbih0aGlzLCBNKTtcclxuICB9XHJcbn1cclxuTSA9IG5ldyBXZWFrTWFwKCksIFAgPSBuZXcgV2Vha01hcCgpLCB4ID0gbmV3IFdlYWtNYXAoKSwgWSA9IG5ldyBXZWFrTWFwKCksIE9lID0gbmV3IFdlYWtTZXQoKSwgY3MgPSBmdW5jdGlvbihlLCB0KSB7XHJcbiAgaWYgKCFlKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IHMgPSB0LmtleSwgYSA9IGUucXVlcnlTZWxlY3RvcihcIi50cmVlc2VsZWN0LWxpc3RfX2l0ZW0tY2hlY2tib3hcIikuZ2V0QXR0cmlidXRlKFwiaW5wdXQtaWRcIiksIGggPSBCdChhLCB0aGlzLmZsYXR0ZWRPcHRpb25zKSwgcCA9IGUucXVlcnlTZWxlY3RvcihcIi50cmVlc2VsZWN0LWxpc3RfX2l0ZW0taWNvblwiKTtcclxuICBzID09PSBcIkFycm93TGVmdFwiICYmICFoLmlzQ2xvc2VkICYmIGguaXNHcm91cCAmJiAocC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcIm1vdXNlZG93blwiKSksIHQucHJldmVudERlZmF1bHQoKSksIHMgPT09IFwiQXJyb3dSaWdodFwiICYmIGguaXNDbG9zZWQgJiYgaC5pc0dyb3VwICYmIChwLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKSwgdC5wcmV2ZW50RGVmYXVsdCgpKTtcclxufSwgSWUgPSBuZXcgV2Vha1NldCgpLCBocyA9IGZ1bmN0aW9uKGUsIHQpIHtcclxuICB2YXIgaTtcclxuICBjb25zdCBzID0gQXJyYXkuZnJvbSh0aGlzLnNyY0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmVlc2VsZWN0LWxpc3RfX2l0ZW0tY2hlY2tib3hcIikpLmZpbHRlcihcclxuICAgIChhKSA9PiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShBKGEpKS5kaXNwbGF5ICE9PSBcIm5vbmVcIlxyXG4gICk7XHJcbiAgaWYgKHMubGVuZ3RoKVxyXG4gICAgaWYgKCFlKVxyXG4gICAgICBBKHNbMF0pLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0tLWZvY3VzZWRcIik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgYSA9IHMuZmluZEluZGV4KFxyXG4gICAgICAgIChJKSA9PiBBKEkpLmNsYXNzTGlzdC5jb250YWlucyhcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tZm9jdXNlZFwiKVxyXG4gICAgICApO1xyXG4gICAgICBBKHNbYV0pLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0tLWZvY3VzZWRcIik7XHJcbiAgICAgIGNvbnN0IHAgPSB0ID09PSBcIkFycm93RG93blwiID8gYSArIDEgOiBhIC0gMSwgZiA9IHQgPT09IFwiQXJyb3dEb3duXCIgPyAwIDogcy5sZW5ndGggLSAxLCBiID0gc1twXSA/PyBzW2ZdLCBDID0gIXNbcF0sIGcgPSBBKGIpO1xyXG4gICAgICBnLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0tLWZvY3VzZWRcIik7XHJcbiAgICAgIGNvbnN0IHcgPSB0aGlzLnNyY0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGsgPSBnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpZiAoQyAmJiB0ID09PSBcIkFycm93RG93blwiKSB7XHJcbiAgICAgICAgdGhpcy5zcmNFbGVtZW50LnNjcm9sbCgwLCAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKEMgJiYgdCA9PT0gXCJBcnJvd1VwXCIpIHtcclxuICAgICAgICB0aGlzLnNyY0VsZW1lbnQuc2Nyb2xsKDAsIHRoaXMuc3JjRWxlbWVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB5ID0gKChpID0gdGhpcy5saXN0U2xvdEh0bWxDb21wb25lbnQpID09IG51bGwgPyB2b2lkIDAgOiBpLmNsaWVudEhlaWdodCkgPz8gMDtcclxuICAgICAgaWYgKHcueSArIHcuaGVpZ2h0IDwgay55ICsgay5oZWlnaHQgKyB5KSB7XHJcbiAgICAgICAgdGhpcy5zcmNFbGVtZW50LnNjcm9sbCgwLCB0aGlzLnNyY0VsZW1lbnQuc2Nyb2xsVG9wICsgay5oZWlnaHQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAody55ID4gay55KSB7XHJcbiAgICAgICAgdGhpcy5zcmNFbGVtZW50LnNjcm9sbCgwLCB0aGlzLnNyY0VsZW1lbnQuc2Nyb2xsVG9wIC0gay5oZWlnaHQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG59LCBQZSA9IG5ldyBXZWFrU2V0KCksIGRzID0gZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgZSA9IG8odGhpcywgQmUsIHVzKS5jYWxsKHRoaXMpLCB0ID0gbyh0aGlzLCBLLCBFdCkuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMpO1xyXG4gIGUuYXBwZW5kKC4uLnQpO1xyXG4gIGNvbnN0IHMgPSBvKHRoaXMsIEdlLCBicykuY2FsbCh0aGlzKTtcclxuICBlLmFwcGVuZChzKTtcclxuICBjb25zdCBpID0gbyh0aGlzLCBIZSwgZnMpLmNhbGwodGhpcyk7XHJcbiAgcmV0dXJuIGkgJiYgZS5hcHBlbmQoaSksIGU7XHJcbn0sIEJlID0gbmV3IFdlYWtTZXQoKSwgdXMgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0XCIpLCB0aGlzLmlzU2luZ2xlU2VsZWN0ICYmIGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdC0tc2luZ2xlLXNlbGVjdFwiKSwgdGhpcy5kaXNhYmxlZEJyYW5jaE5vZGUgJiYgZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0LS1kaXNhYmxlZC1icmFuY2gtbm9kZVwiKSwgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKHQpID0+IG8odGhpcywgVmUsIHBzKS5jYWxsKHRoaXMsIHQpKSwgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsICgpID0+IG8odGhpcywgRGUsIG1zKS5jYWxsKHRoaXMpKSwgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB0aGlzLm1vdXNldXBDYWxsYmFjaygpLCAhMCksIGU7XHJcbn0sIFZlID0gbmV3IFdlYWtTZXQoKSwgcHMgPSBmdW5jdGlvbihlKSB7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKSwgbih0aGlzLCBNKSAmJiBuKHRoaXMsIFApICYmIG4odGhpcywgTSkuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tZm9jdXNlZFwiKTtcclxufSwgRGUgPSBuZXcgV2Vha1NldCgpLCBtcyA9IGZ1bmN0aW9uKCkge1xyXG4gIG0odGhpcywgUCwgITApO1xyXG59LCBLID0gbmV3IFdlYWtTZXQoKSwgRXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgcmV0dXJuIGUucmVkdWNlKCh0LCBzKSA9PiB7XHJcbiAgICB2YXIgYTtcclxuICAgIGlmICgoYSA9IHMuY2hpbGRyZW4pICE9IG51bGwgJiYgYS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaCA9IG8odGhpcywgTWUsIENzKS5jYWxsKHRoaXMsIHMpLCBwID0gbyh0aGlzLCBLLCBFdCkuY2FsbCh0aGlzLCBzLmNoaWxkcmVuKTtcclxuICAgICAgcmV0dXJuIGguYXBwZW5kKC4uLnApLCB0LnB1c2goaCksIHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpID0gbyh0aGlzLCBYLCB2dCkuY2FsbCh0aGlzLCBzLCAhMSk7XHJcbiAgICByZXR1cm4gdC5wdXNoKGkpLCB0O1xyXG4gIH0sIFtdKTtcclxufSwgSGUgPSBuZXcgV2Vha1NldCgpLCBmcyA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmICghdGhpcy5saXN0U2xvdEh0bWxDb21wb25lbnQpXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gZS5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0X19zbG90XCIpLCBlLmFwcGVuZENoaWxkKHRoaXMubGlzdFNsb3RIdG1sQ29tcG9uZW50KSwgZTtcclxufSwgR2UgPSBuZXcgV2Vha1NldCgpLCBicyA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9fZW1wdHlcIiksIGUuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGhpcy5lbXB0eVRleHQpO1xyXG4gIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICB0LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2VtcHR5LWljb25cIiksIE8odGhpcy5pY29uRWxlbWVudHMuYXR0ZW50aW9uLCB0KTtcclxuICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgcmV0dXJuIHMuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9fZW1wdHktdGV4dFwiKSwgcy50ZXh0Q29udGVudCA9IHRoaXMuZW1wdHlUZXh0LCBlLmFwcGVuZCh0LCBzKSwgZTtcclxufSwgTWUgPSBuZXcgV2Vha1NldCgpLCBDcyA9IGZ1bmN0aW9uKGUpIHtcclxuICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0LnNldEF0dHJpYnV0ZShcImdyb3VwLWNvbnRhaW5lci1pZFwiLCBlLnZhbHVlLnRvU3RyaW5nKCkpLCB0LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2dyb3VwLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBzID0gbyh0aGlzLCBYLCB2dCkuY2FsbCh0aGlzLCBlLCAhMCk7XHJcbiAgcmV0dXJuIHQuYXBwZW5kQ2hpbGQocyksIHQ7XHJcbn0sIFggPSBuZXcgV2Vha1NldCgpLCB2dCA9IGZ1bmN0aW9uKGUsIHQpIHtcclxuICBjb25zdCBzID0gbyh0aGlzLCBGZSwgZ3MpLmNhbGwodGhpcywgZSk7XHJcbiAgaWYgKHQpIHtcclxuICAgIGNvbnN0IGggPSBvKHRoaXMsIFdlLCB2cykuY2FsbCh0aGlzKTtcclxuICAgIHMuYXBwZW5kQ2hpbGQoaCksIHMuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS0tZ3JvdXBcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGkgPSBvKHRoaXMsIFVlLCB5cykuY2FsbCh0aGlzLCBlKSwgYSA9IG8odGhpcywgemUsIHhzKS5jYWxsKHRoaXMsIGUsIHQpO1xyXG4gIHJldHVybiBzLmFwcGVuZChpLCBhKSwgcztcclxufSwgRmUgPSBuZXcgV2Vha1NldCgpLCBncyA9IGZ1bmN0aW9uKGUpIHtcclxuICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXR1cm4gVGkodCwgZS5odG1sQXR0ciksIHQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKSwgdC5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBlLm5hbWUpLCB0LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW1cIiksIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiBvKHRoaXMsIHFlLCB3cykuY2FsbCh0aGlzLCB0KSwgITApLCB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiBvKHRoaXMsIGplLCBrcykuY2FsbCh0aGlzLCB0KSwgITApLCB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKHMpID0+IG8odGhpcywgJGUsIEVzKS5jYWxsKHRoaXMsIHMsIGUpKSwgdDtcclxufSwgcWUgPSBuZXcgV2Vha1NldCgpLCB3cyA9IGZ1bmN0aW9uKGUpIHtcclxuICBuKHRoaXMsIFApICYmIG8odGhpcywgSiwgTHQpLmNhbGwodGhpcywgITAsIGUpO1xyXG59LCBqZSA9IG5ldyBXZWFrU2V0KCksIGtzID0gZnVuY3Rpb24oZSkge1xyXG4gIG4odGhpcywgUCkgJiYgKG8odGhpcywgSiwgTHQpLmNhbGwodGhpcywgITEsIGUpLCBtKHRoaXMsIE0sIGUpKTtcclxufSwgJGUgPSBuZXcgV2Vha1NldCgpLCBFcyA9IGZ1bmN0aW9uKGUsIHQpIHtcclxuICB2YXIgYTtcclxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpLCAoYSA9IHRoaXMuZmxhdHRlZE9wdGlvbnMuZmluZCgoaCkgPT4gaC5pZCA9PT0gdC52YWx1ZSkpID09IG51bGwgPyB2b2lkIDAgOiBhLmRpc2FibGVkKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IGkgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnRyZWVzZWxlY3QtbGlzdF9faXRlbS1jaGVja2JveFwiKTtcclxuICBpLmNoZWNrZWQgPSAhaS5jaGVja2VkLCBvKHRoaXMsIEtlLCBfcykuY2FsbCh0aGlzLCBpLCB0KTtcclxufSwgV2UgPSBuZXcgV2Vha1NldCgpLCB2cyA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICByZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpLCBlLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0taWNvblwiKSwgTyh0aGlzLmljb25FbGVtZW50cy5hcnJvd0Rvd24sIGUpLCBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKHQpID0+IG8odGhpcywgUmUsIExzKS5jYWxsKHRoaXMsIHQpKSwgZTtcclxufSwgUmUgPSBuZXcgV2Vha1NldCgpLCBMcyA9IGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCksIGUuc3RvcFByb3BhZ2F0aW9uKCksIG8odGhpcywgWGUsIEFzKS5jYWxsKHRoaXMsIGUpO1xyXG59LCBVZSA9IG5ldyBXZWFrU2V0KCksIHlzID0gZnVuY3Rpb24oZSkge1xyXG4gIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS1jaGVja2JveC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIHMuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS1jaGVja2JveC1pY29uXCIpLCBzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICByZXR1cm4gaS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpLCBpLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKSwgaS5zZXRBdHRyaWJ1dGUoXCJpbnB1dC1pZFwiLCBlLnZhbHVlLnRvU3RyaW5nKCkpLCBpLmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWxpc3RfX2l0ZW0tY2hlY2tib3hcIiksIHQuYXBwZW5kKHMsIGkpLCB0O1xyXG59LCB6ZSA9IG5ldyBXZWFrU2V0KCksIHhzID0gZnVuY3Rpb24oZSwgdCkge1xyXG4gIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgaWYgKHMudGV4dENvbnRlbnQgPSBlLm5hbWUsIHMuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS1sYWJlbFwiKSwgdCAmJiB0aGlzLnNob3dDb3VudCkge1xyXG4gICAgY29uc3QgaSA9IG8odGhpcywgWWUsIFNzKS5jYWxsKHRoaXMsIGUpO1xyXG4gICAgcy5hcHBlbmRDaGlsZChpKTtcclxuICB9XHJcbiAgcmV0dXJuIHM7XHJcbn0sIFllID0gbmV3IFdlYWtTZXQoKSwgU3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLCBzID0gdGhpcy5mbGF0dGVkT3B0aW9ucy5maWx0ZXIoKGkpID0+IGkuY2hpbGRPZiA9PT0gZS52YWx1ZSk7XHJcbiAgcmV0dXJuIHQudGV4dENvbnRlbnQgPSBgKCR7cy5sZW5ndGh9KWAsIHQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtbGlzdF9faXRlbS1sYWJlbC1jb3VudGVyXCIpLCB0O1xyXG59LCBLZSA9IG5ldyBXZWFrU2V0KCksIF9zID0gZnVuY3Rpb24oZSwgdCkge1xyXG4gIGNvbnN0IHMgPSB0aGlzLmZsYXR0ZWRPcHRpb25zLmZpbmQoKGkpID0+IGkuaWQgPT09IHQudmFsdWUpO1xyXG4gIGlmIChzKSB7XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHMuaXNHcm91cCAmJiB0aGlzLmRpc2FibGVkQnJhbmNoTm9kZSkge1xyXG4gICAgICBjb25zdCBpID0gQWkoZSk7XHJcbiAgICAgIGkgPT0gbnVsbCB8fCBpLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibW91c2Vkb3duXCIpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3QpIHtcclxuICAgICAgY29uc3QgW2ldID0gbih0aGlzLCB4KTtcclxuICAgICAgaWYgKHMuaWQgPT09IGkpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBtKHRoaXMsIHgsIFtzLmlkXSksIHRzKFtzLmlkXSwgdGhpcy5mbGF0dGVkT3B0aW9ucywgdGhpcy5pc1NpbmdsZVNlbGVjdCwgdGhpcy5pc0luZGVwZW5kZW50Tm9kZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcy5jaGVja2VkID0gZS5jaGVja2VkO1xyXG4gICAgICBjb25zdCBpID0gT3QocywgdGhpcy5mbGF0dGVkT3B0aW9ucywgdGhpcy5pc0luZGVwZW5kZW50Tm9kZXMpO1xyXG4gICAgICBlLmNoZWNrZWQgPSBpO1xyXG4gICAgfVxyXG4gICAgY2UodGhpcy5mbGF0dGVkT3B0aW9ucywgdGhpcy5zcmNFbGVtZW50LCB0aGlzLmljb25FbGVtZW50cywgbih0aGlzLCB4KSksIG8odGhpcywgSmUsIFRzKS5jYWxsKHRoaXMpO1xyXG4gIH1cclxufSwgWGUgPSBuZXcgV2Vha1NldCgpLCBBcyA9IGZ1bmN0aW9uKGUpIHtcclxuICB2YXIgYSwgaDtcclxuICBjb25zdCB0ID0gKGggPSAoYSA9IGUudGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogYS5wYXJlbnROb2RlKSA9PSBudWxsID8gdm9pZCAwIDogaC5xdWVyeVNlbGVjdG9yKFwiW2lucHV0LWlkXVwiKSwgcyA9ICh0ID09IG51bGwgPyB2b2lkIDAgOiB0LmdldEF0dHJpYnV0ZShcImlucHV0LWlkXCIpKSA/PyBudWxsLCBpID0gQnQocywgdGhpcy5mbGF0dGVkT3B0aW9ucyk7XHJcbiAgaSAmJiAoaS5pc0Nsb3NlZCA9ICFpLmlzQ2xvc2VkLCBmdCh0aGlzLmZsYXR0ZWRPcHRpb25zLCBpKSwgY2UodGhpcy5mbGF0dGVkT3B0aW9ucywgdGhpcy5zcmNFbGVtZW50LCB0aGlzLmljb25FbGVtZW50cywgbih0aGlzLCB4KSksIHRoaXMuYXJyb3dDbGlja0NhbGxiYWNrKCkpO1xyXG59LCBKID0gbmV3IFdlYWtTZXQoKSwgTHQgPSBmdW5jdGlvbihlLCB0KSB7XHJcbiAgY29uc3QgcyA9IFwidHJlZXNlbGVjdC1saXN0X19pdGVtLS1mb2N1c2VkXCI7XHJcbiAgaWYgKGUpIHtcclxuICAgIGNvbnN0IGkgPSBBcnJheS5mcm9tKHRoaXMuc3JjRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzfWApKTtcclxuICAgIGkubGVuZ3RoICYmIGkuZm9yRWFjaCgoYSkgPT4gYS5jbGFzc0xpc3QucmVtb3ZlKHMpKSwgdC5jbGFzc0xpc3QuYWRkKHMpO1xyXG4gIH0gZWxzZVxyXG4gICAgdC5jbGFzc0xpc3QucmVtb3ZlKHMpO1xyXG59LCBaID0gbmV3IFdlYWtTZXQoKSwgeXQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCB7IHVuZ3JvdXBlZE5vZGVzOiBlLCBncm91cGVkTm9kZXM6IHQsIGFsbE5vZGVzOiBzIH0gPSBwaSh0aGlzLmZsYXR0ZWRPcHRpb25zKTtcclxuICB0aGlzLnNlbGVjdGVkTm9kZXMgPSB7IG5vZGVzOiBlLCBncm91cGVkTm9kZXM6IHQsIGFsbE5vZGVzOiBzIH07XHJcbn0sIEplID0gbmV3IFdlYWtTZXQoKSwgVHMgPSBmdW5jdGlvbigpIHtcclxuICBvKHRoaXMsIFosIHl0KS5jYWxsKHRoaXMpLCB0aGlzLmlucHV0Q2FsbGJhY2sodGhpcy5zZWxlY3RlZE5vZGVzKSwgdGhpcy52YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5ub2Rlcy5tYXAoKGUpID0+IGUuaWQpO1xyXG59O1xyXG5jb25zdCBWdCA9ICh7XHJcbiAgcGFyZW50SHRtbENvbnRhaW5lcjogbCxcclxuICBzdGF0aWNMaXN0OiBlLFxyXG4gIGFwcGVuZFRvQm9keTogdCxcclxuICBpc1NpbmdsZVNlbGVjdDogcyxcclxuICB2YWx1ZTogaSxcclxuICBkaXJlY3Rpb246IGFcclxufSkgPT4ge1xyXG4gIGwgfHwgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb246IHBhcmVudEh0bWxDb250YWluZXIgcHJvcCBpcyByZXF1aXJlZCFcIiksIGUgJiYgdCAmJiBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbjogWW91IHNob3VsZCBzZXQgc3RhdGljTGlzdCB0byBmYWxzZSBpZiB5b3UgdXNlIGFwcGVuZFRvQm9keSFcIiksIHMgJiYgQXJyYXkuaXNBcnJheShpKSAmJiBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbjogaWYgeW91IHVzZSBpc1NpbmdsZVNlbGVjdCBwcm9wLCB5b3Ugc2hvdWxkIHBhc3MgYSBzaW5nbGUgdmFsdWUhXCIpLCAhcyAmJiAhQXJyYXkuaXNBcnJheShpKSAmJiBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbjogeW91IHNob3VsZCBwYXNzIGFuIGFycmF5IGFzIGEgdmFsdWUhXCIpLCBhICYmIGEgIT09IFwiYXV0b1wiICYmIGEgIT09IFwiYm90dG9tXCIgJiYgYSAhPT0gXCJ0b3BcIiAmJiBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbjogeW91IHNob3VsZCBwYXNzIChhdXRvIHwgdG9wIHwgYm90dG9tIHwgdW5kZWZpbmVkKSBhcyBhIHZhbHVlIGZvciB0aGUgZGlyZWN0aW9uIHByb3AhXCIpO1xyXG59LCByZSA9IChsKSA9PiBsLm1hcCgoZSkgPT4gZS5pZCksIE9pID0gKGwpID0+IGwgPyBBcnJheS5pc0FycmF5KGwpID8gbCA6IFtsXSA6IFtdLCBJaSA9IChsLCBlKSA9PiB7XHJcbiAgaWYgKGUpIHtcclxuICAgIGNvbnN0IFt0XSA9IGw7XHJcbiAgICByZXR1cm4gdCA/PyBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gbDtcclxufTtcclxudmFyIGQsIHUsIEYsIFEsIHEsIFMsIF8sIEwsIEIsIGVlLCB4dCwgdGUsIFN0LCBaZSwgTnMsIFFlLCBPcywgZXQsIElzLCB0dCwgUHMsIHN0LCBCcywgaXQsIFZzLCBzZSwgX3QsIGx0LCBEcywgbnQsIEhzLCBhdCwgR3MsIG90LCBNcywgaWUsIEF0LCBydCwgRnMsIGosIGhlLCBsZSwgVHQsICQsIGRlLCBjdCwgcXMsIG5lLCBOdCwgaHQsIGpzLCBkdCwgJHMsIHV0LCBXcywgcHQsIFJzO1xyXG5jbGFzcyBCaSB7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgcGFyZW50SHRtbENvbnRhaW5lcjogZSxcclxuICAgIHZhbHVlOiB0LFxyXG4gICAgb3B0aW9uczogcyxcclxuICAgIG9wZW5MZXZlbDogaSxcclxuICAgIGFwcGVuZFRvQm9keTogYSxcclxuICAgIGFsd2F5c09wZW46IGgsXHJcbiAgICBzaG93VGFnczogcCxcclxuICAgIHRhZ3NDb3VudFRleHQ6IGYsXHJcbiAgICBjbGVhcmFibGU6IGIsXHJcbiAgICBzZWFyY2hhYmxlOiBDLFxyXG4gICAgcGxhY2Vob2xkZXI6IGcsXHJcbiAgICBncm91cGVkOiB3LFxyXG4gICAgaXNHcm91cGVkVmFsdWU6IGssXHJcbiAgICBsaXN0U2xvdEh0bWxDb21wb25lbnQ6IHksXHJcbiAgICBkaXNhYmxlZDogSSxcclxuICAgIGVtcHR5VGV4dDogVyxcclxuICAgIHN0YXRpY0xpc3Q6IGFlLFxyXG4gICAgaWQ6IGJ0LFxyXG4gICAgYXJpYUxhYmVsOiBDdCxcclxuICAgIGlzU2luZ2xlU2VsZWN0OiBvZSxcclxuICAgIHNob3dDb3VudDogVXMsXHJcbiAgICBkaXNhYmxlZEJyYW5jaE5vZGU6IHpzLFxyXG4gICAgZGlyZWN0aW9uOiBZcyxcclxuICAgIGV4cGFuZFNlbGVjdGVkOiBLcyxcclxuICAgIHNhdmVTY3JvbGxQb3NpdGlvbjogWHMsXHJcbiAgICBpc0luZGVwZW5kZW50Tm9kZXM6IEpzLFxyXG4gICAgaWNvbkVsZW1lbnRzOiBacyxcclxuICAgIGlucHV0Q2FsbGJhY2s6IFFzLFxyXG4gICAgb3BlbkNhbGxiYWNrOiBlaSxcclxuICAgIGNsb3NlQ2FsbGJhY2s6IHRpLFxyXG4gICAgbmFtZUNoYW5nZUNhbGxiYWNrOiBzaSxcclxuICAgIHNlYXJjaENhbGxiYWNrOiBpaVxyXG4gIH0pIHtcclxuICAgIHIodGhpcywgZWUpO1xyXG4gICAgcih0aGlzLCB0ZSk7XHJcbiAgICByKHRoaXMsIFplKTtcclxuICAgIHIodGhpcywgUWUpO1xyXG4gICAgcih0aGlzLCBldCk7XHJcbiAgICByKHRoaXMsIHR0KTtcclxuICAgIHIodGhpcywgc3QpO1xyXG4gICAgcih0aGlzLCBpdCk7XHJcbiAgICByKHRoaXMsIHNlKTtcclxuICAgIHIodGhpcywgbHQpO1xyXG4gICAgcih0aGlzLCBudCk7XHJcbiAgICByKHRoaXMsIGF0KTtcclxuICAgIHIodGhpcywgb3QpO1xyXG4gICAgcih0aGlzLCBpZSk7XHJcbiAgICByKHRoaXMsIHJ0KTtcclxuICAgIHIodGhpcywgaik7XHJcbiAgICByKHRoaXMsIGxlKTtcclxuICAgIHIodGhpcywgJCk7XHJcbiAgICByKHRoaXMsIGN0KTtcclxuICAgIC8vIEVtaXRzXHJcbiAgICByKHRoaXMsIG5lKTtcclxuICAgIHIodGhpcywgaHQpO1xyXG4gICAgcih0aGlzLCBkdCk7XHJcbiAgICByKHRoaXMsIHV0KTtcclxuICAgIHIodGhpcywgcHQpO1xyXG4gICAgLy8gUHJvcHNcclxuICAgIGModGhpcywgXCJwYXJlbnRIdG1sQ29udGFpbmVyXCIpO1xyXG4gICAgYyh0aGlzLCBcInZhbHVlXCIpO1xyXG4gICAgYyh0aGlzLCBcIm9wdGlvbnNcIik7XHJcbiAgICBjKHRoaXMsIFwib3BlbkxldmVsXCIpO1xyXG4gICAgYyh0aGlzLCBcImFwcGVuZFRvQm9keVwiKTtcclxuICAgIGModGhpcywgXCJhbHdheXNPcGVuXCIpO1xyXG4gICAgYyh0aGlzLCBcInNob3dUYWdzXCIpO1xyXG4gICAgYyh0aGlzLCBcInRhZ3NDb3VudFRleHRcIik7XHJcbiAgICBjKHRoaXMsIFwiY2xlYXJhYmxlXCIpO1xyXG4gICAgYyh0aGlzLCBcInNlYXJjaGFibGVcIik7XHJcbiAgICBjKHRoaXMsIFwicGxhY2Vob2xkZXJcIik7XHJcbiAgICBjKHRoaXMsIFwiZ3JvdXBlZFwiKTtcclxuICAgIGModGhpcywgXCJpc0dyb3VwZWRWYWx1ZVwiKTtcclxuICAgIGModGhpcywgXCJsaXN0U2xvdEh0bWxDb21wb25lbnRcIik7XHJcbiAgICBjKHRoaXMsIFwiZGlzYWJsZWRcIik7XHJcbiAgICBjKHRoaXMsIFwiZW1wdHlUZXh0XCIpO1xyXG4gICAgYyh0aGlzLCBcInN0YXRpY0xpc3RcIik7XHJcbiAgICBjKHRoaXMsIFwiaWRcIik7XHJcbiAgICBjKHRoaXMsIFwiYXJpYUxhYmVsXCIpO1xyXG4gICAgYyh0aGlzLCBcImlzU2luZ2xlU2VsZWN0XCIpO1xyXG4gICAgYyh0aGlzLCBcInNob3dDb3VudFwiKTtcclxuICAgIGModGhpcywgXCJkaXNhYmxlZEJyYW5jaE5vZGVcIik7XHJcbiAgICBjKHRoaXMsIFwiZGlyZWN0aW9uXCIpO1xyXG4gICAgYyh0aGlzLCBcImV4cGFuZFNlbGVjdGVkXCIpO1xyXG4gICAgYyh0aGlzLCBcInNhdmVTY3JvbGxQb3NpdGlvblwiKTtcclxuICAgIGModGhpcywgXCJpc0luZGVwZW5kZW50Tm9kZXNcIik7XHJcbiAgICBjKHRoaXMsIFwiaWNvbkVsZW1lbnRzXCIpO1xyXG4gICAgYyh0aGlzLCBcImlucHV0Q2FsbGJhY2tcIik7XHJcbiAgICBjKHRoaXMsIFwib3BlbkNhbGxiYWNrXCIpO1xyXG4gICAgYyh0aGlzLCBcImNsb3NlQ2FsbGJhY2tcIik7XHJcbiAgICBjKHRoaXMsIFwibmFtZUNoYW5nZUNhbGxiYWNrXCIpO1xyXG4gICAgYyh0aGlzLCBcInNlYXJjaENhbGxiYWNrXCIpO1xyXG4gICAgLy8gSW5uZXJTdGF0ZVxyXG4gICAgYyh0aGlzLCBcInVuZ3JvdXBlZFZhbHVlXCIpO1xyXG4gICAgYyh0aGlzLCBcImdyb3VwZWRWYWx1ZVwiKTtcclxuICAgIGModGhpcywgXCJhbGxWYWx1ZVwiKTtcclxuICAgIGModGhpcywgXCJpc0xpc3RPcGVuZWRcIik7XHJcbiAgICBjKHRoaXMsIFwic2VsZWN0ZWROYW1lXCIpO1xyXG4gICAgYyh0aGlzLCBcInNyY0VsZW1lbnRcIik7XHJcbiAgICAvLyBDb21wb25lbnRzXHJcbiAgICByKHRoaXMsIGQsIG51bGwpO1xyXG4gICAgcih0aGlzLCB1LCBudWxsKTtcclxuICAgIC8vIFJlc2l6ZSBwcm9wc1xyXG4gICAgcih0aGlzLCBGLCBudWxsKTtcclxuICAgIC8vIExpc3QgcG9zaXRpb24gc2Nyb2xsXHJcbiAgICByKHRoaXMsIFEsIDApO1xyXG4gICAgLy8gVGltZXIgZm9yIHNlYXJjaCB0ZXh0XHJcbiAgICByKHRoaXMsIHEsIDApO1xyXG4gICAgLy8gT3V0c2lkZSBsaXN0ZW5lcnNcclxuICAgIHIodGhpcywgUywgbnVsbCk7XHJcbiAgICByKHRoaXMsIF8sIG51bGwpO1xyXG4gICAgcih0aGlzLCBMLCBudWxsKTtcclxuICAgIHIodGhpcywgQiwgbnVsbCk7XHJcbiAgICBWdCh7XHJcbiAgICAgIHBhcmVudEh0bWxDb250YWluZXI6IGUsXHJcbiAgICAgIHZhbHVlOiB0LFxyXG4gICAgICBzdGF0aWNMaXN0OiBhZSxcclxuICAgICAgYXBwZW5kVG9Cb2R5OiBhLFxyXG4gICAgICBpc1NpbmdsZVNlbGVjdDogb2VcclxuICAgIH0pLCB0aGlzLnBhcmVudEh0bWxDb250YWluZXIgPSBlLCB0aGlzLnZhbHVlID0gW10sIHRoaXMub3B0aW9ucyA9IHMgPz8gW10sIHRoaXMub3BlbkxldmVsID0gaSA/PyAwLCB0aGlzLmFwcGVuZFRvQm9keSA9IGEgPz8gITEsIHRoaXMuYWx3YXlzT3BlbiA9ICEhKGggJiYgIUkpLCB0aGlzLnNob3dUYWdzID0gcCA/PyAhMCwgdGhpcy50YWdzQ291bnRUZXh0ID0gZiA/PyBcImVsZW1lbnRzIHNlbGVjdGVkXCIsIHRoaXMuY2xlYXJhYmxlID0gYiA/PyAhMCwgdGhpcy5zZWFyY2hhYmxlID0gQyA/PyAhMCwgdGhpcy5wbGFjZWhvbGRlciA9IGcgPz8gXCJTZWFyY2guLi5cIiwgdGhpcy5ncm91cGVkID0gdyA/PyAhMCwgdGhpcy5pc0dyb3VwZWRWYWx1ZSA9IGsgPz8gITEsIHRoaXMubGlzdFNsb3RIdG1sQ29tcG9uZW50ID0geSA/PyBudWxsLCB0aGlzLmRpc2FibGVkID0gSSA/PyAhMSwgdGhpcy5lbXB0eVRleHQgPSBXID8/IFwiTm8gcmVzdWx0cyBmb3VuZC4uLlwiLCB0aGlzLnN0YXRpY0xpc3QgPSAhIShhZSAmJiAhdGhpcy5hcHBlbmRUb0JvZHkpLCB0aGlzLmlkID0gYnQgPz8gXCJcIiwgdGhpcy5hcmlhTGFiZWwgPSBDdCA/PyBcIlwiLCB0aGlzLmlzU2luZ2xlU2VsZWN0ID0gb2UgPz8gITEsIHRoaXMuc2hvd0NvdW50ID0gVXMgPz8gITEsIHRoaXMuZGlzYWJsZWRCcmFuY2hOb2RlID0genMgPz8gITEsIHRoaXMuZGlyZWN0aW9uID0gWXMgPz8gXCJhdXRvXCIsIHRoaXMuZXhwYW5kU2VsZWN0ZWQgPSBLcyA/PyAhMSwgdGhpcy5zYXZlU2Nyb2xsUG9zaXRpb24gPSBYcyA/PyAhMCwgdGhpcy5pc0luZGVwZW5kZW50Tm9kZXMgPSBKcyA/PyAhMSwgdGhpcy5pY29uRWxlbWVudHMgPSBQdChacyksIHRoaXMuaW5wdXRDYWxsYmFjayA9IFFzLCB0aGlzLm9wZW5DYWxsYmFjayA9IGVpLCB0aGlzLmNsb3NlQ2FsbGJhY2sgPSB0aSwgdGhpcy5uYW1lQ2hhbmdlQ2FsbGJhY2sgPSBzaSwgdGhpcy5zZWFyY2hDYWxsYmFjayA9IGlpLCB0aGlzLnVuZ3JvdXBlZFZhbHVlID0gW10sIHRoaXMuZ3JvdXBlZFZhbHVlID0gW10sIHRoaXMuYWxsVmFsdWUgPSBbXSwgdGhpcy5pc0xpc3RPcGVuZWQgPSAhMSwgdGhpcy5zZWxlY3RlZE5hbWUgPSBcIlwiLCB0aGlzLnNyY0VsZW1lbnQgPSBudWxsLCBvKHRoaXMsIGVlLCB4dCkuY2FsbCh0aGlzLCB0KTtcclxuICB9XHJcbiAgbW91bnQoKSB7XHJcbiAgICBWdCh7XHJcbiAgICAgIHBhcmVudEh0bWxDb250YWluZXI6IHRoaXMucGFyZW50SHRtbENvbnRhaW5lcixcclxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgIHN0YXRpY0xpc3Q6IHRoaXMuc3RhdGljTGlzdCxcclxuICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmFwcGVuZFRvQm9keSxcclxuICAgICAgaXNTaW5nbGVTZWxlY3Q6IHRoaXMuaXNTaW5nbGVTZWxlY3RcclxuICAgIH0pLCB0aGlzLmljb25FbGVtZW50cyA9IFB0KHRoaXMuaWNvbkVsZW1lbnRzKSwgbyh0aGlzLCBlZSwgeHQpLmNhbGwodGhpcywgdGhpcy52YWx1ZSk7XHJcbiAgfVxyXG4gIHVwZGF0ZVZhbHVlKGUpIHtcclxuICAgIGNvbnN0IHQgPSBPaShlKSwgcyA9IG4odGhpcywgZCk7XHJcbiAgICBzICYmIChzLnVwZGF0ZVZhbHVlKHQpLCBvKHRoaXMsIHNlLCBfdCkuY2FsbCh0aGlzLCBzID09IG51bGwgPyB2b2lkIDAgOiBzLnNlbGVjdGVkTm9kZXMpKTtcclxuICB9XHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3JjRWxlbWVudCAmJiAobyh0aGlzLCBpZSwgQXQpLmNhbGwodGhpcyksIHRoaXMuc3JjRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiLCB0aGlzLnNyY0VsZW1lbnQgPSBudWxsLCBvKHRoaXMsICQsIGRlKS5jYWxsKHRoaXMsICEwKSk7XHJcbiAgfVxyXG4gIGZvY3VzKCkge1xyXG4gICAgbih0aGlzLCB1KSAmJiBuKHRoaXMsIHUpLmZvY3VzKCk7XHJcbiAgfVxyXG4gIHRvZ2dsZU9wZW5DbG9zZSgpIHtcclxuICAgIG4odGhpcywgdSkgJiYgKG4odGhpcywgdSkub3BlbkNsb3NlKCksIG4odGhpcywgdSkuZm9jdXMoKSk7XHJcbiAgfVxyXG4gIC8vIE91dHNpZGUgTGlzdGVuZXJzXHJcbiAgc2Nyb2xsV2luZG93SGFuZGxlcigpIHtcclxuICAgIHRoaXMudXBkYXRlTGlzdFBvc2l0aW9uKCk7XHJcbiAgfVxyXG4gIGZvY3VzV2luZG93SGFuZGxlcihlKSB7XHJcbiAgICB2YXIgcywgaSwgYTtcclxuICAgICgocyA9IHRoaXMuc3JjRWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IHMuY29udGFpbnMoZS50YXJnZXQpKSB8fCAoKGkgPSBuKHRoaXMsIGQpKSA9PSBudWxsID8gdm9pZCAwIDogaS5zcmNFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkgfHwgKChhID0gbih0aGlzLCB1KSkgPT0gbnVsbCB8fCBhLmJsdXIoKSwgbyh0aGlzLCAkLCBkZSkuY2FsbCh0aGlzLCAhMSksIG8odGhpcywgaiwgaGUpLmNhbGwodGhpcywgITEpKTtcclxuICB9XHJcbiAgYmx1cldpbmRvd0hhbmRsZXIoKSB7XHJcbiAgICB2YXIgZTtcclxuICAgIChlID0gbih0aGlzLCB1KSkgPT0gbnVsbCB8fCBlLmJsdXIoKSwgbyh0aGlzLCAkLCBkZSkuY2FsbCh0aGlzLCAhMSksIG8odGhpcywgaiwgaGUpLmNhbGwodGhpcywgITEpO1xyXG4gIH1cclxuICAvLyBVcGRhdGUgZGlyZWN0aW9uIG9mIHRoZSBsaXN0LiBTdXBwb3J0IGFwcGVuZFRvQm9keSBhbmQgc3RhbmRhcmQgbW9kZSB3aXRoIGFic29sdXRlXHJcbiAgdXBkYXRlTGlzdFBvc2l0aW9uKCkge1xyXG4gICAgdmFyIHk7XHJcbiAgICBjb25zdCBlID0gdGhpcy5zcmNFbGVtZW50LCB0ID0gKHkgPSBuKHRoaXMsIGQpKSA9PSBudWxsID8gdm9pZCAwIDogeS5zcmNFbGVtZW50O1xyXG4gICAgaWYgKCFlIHx8ICF0KVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCB7IGhlaWdodDogcyB9ID0gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwge1xyXG4gICAgICB4OiBpLFxyXG4gICAgICB5OiBhLFxyXG4gICAgICBoZWlnaHQ6IGgsXHJcbiAgICAgIHdpZHRoOiBwXHJcbiAgICB9ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZiA9IHdpbmRvdy5pbm5lckhlaWdodCwgYiA9IGEsIEMgPSBmIC0gYSAtIGg7XHJcbiAgICBsZXQgZyA9IGIgPiBDICYmIGIgPj0gcyAmJiBDIDwgcztcclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gXCJhdXRvXCIgJiYgKGcgPSB0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3BcIiksIHRoaXMuYXBwZW5kVG9Cb2R5KSB7XHJcbiAgICAgICh0LnN0eWxlLnRvcCAhPT0gXCIwcHhcIiB8fCB0LnN0eWxlLmxlZnQgIT09IFwiMHB4XCIpICYmICh0LnN0eWxlLnRvcCA9IFwiMHB4XCIsIHQuc3R5bGUubGVmdCA9IFwiMHB4XCIpO1xyXG4gICAgICBjb25zdCBJID0gaSArIHdpbmRvdy5zY3JvbGxYLCBXID0gZyA/IGEgKyB3aW5kb3cuc2Nyb2xsWSAtIHMgOiBhICsgd2luZG93LnNjcm9sbFkgKyBoO1xyXG4gICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtJfXB4LCR7V31weClgLCB0LnN0eWxlLndpZHRoID0gYCR7cH1weGA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3ID0gZyA/IFwidG9wXCIgOiBcImJvdHRvbVwiO1xyXG4gICAgdC5nZXRBdHRyaWJ1dGUoXCJkaXJlY3Rpb25cIikgIT09IHcgJiYgKHQuc2V0QXR0cmlidXRlKFwiZGlyZWN0aW9uXCIsIHcpLCBvKHRoaXMsIHJ0LCBGcykuY2FsbCh0aGlzLCBnLCB0aGlzLmFwcGVuZFRvQm9keSkpO1xyXG4gIH1cclxufVxyXG5kID0gbmV3IFdlYWtNYXAoKSwgdSA9IG5ldyBXZWFrTWFwKCksIEYgPSBuZXcgV2Vha01hcCgpLCBRID0gbmV3IFdlYWtNYXAoKSwgcSA9IG5ldyBXZWFrTWFwKCksIFMgPSBuZXcgV2Vha01hcCgpLCBfID0gbmV3IFdlYWtNYXAoKSwgTCA9IG5ldyBXZWFrTWFwKCksIEIgPSBuZXcgV2Vha01hcCgpLCBlZSA9IG5ldyBXZWFrU2V0KCksIHh0ID0gZnVuY3Rpb24oZSkge1xyXG4gIHZhciBhO1xyXG4gIHRoaXMuZGVzdHJveSgpO1xyXG4gIGNvbnN0IHsgY29udGFpbmVyOiB0LCBsaXN0OiBzLCBpbnB1dDogaSB9ID0gbyh0aGlzLCBaZSwgTnMpLmNhbGwodGhpcyk7XHJcbiAgdGhpcy5zcmNFbGVtZW50ID0gdCwgbSh0aGlzLCBkLCBzKSwgbSh0aGlzLCB1LCBpKSwgbSh0aGlzLCBTLCB0aGlzLnNjcm9sbFdpbmRvd0hhbmRsZXIuYmluZCh0aGlzKSksIG0odGhpcywgXywgdGhpcy5zY3JvbGxXaW5kb3dIYW5kbGVyLmJpbmQodGhpcykpLCBtKHRoaXMsIEwsIHRoaXMuZm9jdXNXaW5kb3dIYW5kbGVyLmJpbmQodGhpcykpLCBtKHRoaXMsIEIsIHRoaXMuYmx1cldpbmRvd0hhbmRsZXIuYmluZCh0aGlzKSksIHRoaXMuYWx3YXlzT3BlbiAmJiAoKGEgPSBuKHRoaXMsIHUpKSA9PSBudWxsIHx8IGEub3BlbkNsb3NlKCkpLCB0aGlzLmRpc2FibGVkID8gdGhpcy5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LS1kaXNhYmxlZFwiKSA6IHRoaXMuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC0tZGlzYWJsZWRcIiksIHRoaXMudXBkYXRlVmFsdWUoZSA/PyB0aGlzLnZhbHVlKTtcclxufSwgdGUgPSBuZXcgV2Vha1NldCgpLCBTdCA9IGZ1bmN0aW9uKHtcclxuICBncm91cGVkTm9kZXM6IGUsXHJcbiAgbm9kZXM6IHQsXHJcbiAgYWxsTm9kZXM6IHNcclxufSkge1xyXG4gIHRoaXMudW5ncm91cGVkVmFsdWUgPSB0ID8gcmUodCkgOiBbXSwgdGhpcy5ncm91cGVkVmFsdWUgPSBlID8gcmUoZSkgOiBbXSwgdGhpcy5hbGxWYWx1ZSA9IHMgPyByZShzKSA6IFtdO1xyXG4gIGxldCBpID0gW107XHJcbiAgdGhpcy5pc0luZGVwZW5kZW50Tm9kZXMgfHwgdGhpcy5pc1NpbmdsZVNlbGVjdCA/IGkgPSB0aGlzLmFsbFZhbHVlIDogdGhpcy5pc0dyb3VwZWRWYWx1ZSA/IGkgPSB0aGlzLmdyb3VwZWRWYWx1ZSA6IGkgPSB0aGlzLnVuZ3JvdXBlZFZhbHVlLCB0aGlzLnZhbHVlID0gSWkoaSwgdGhpcy5pc1NpbmdsZVNlbGVjdCk7XHJcbn0sIFplID0gbmV3IFdlYWtTZXQoKSwgTnMgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBlID0gdGhpcy5wYXJlbnRIdG1sQ29udGFpbmVyO1xyXG4gIGUuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3RcIik7XHJcbiAgY29uc3QgdCA9IG5ldyBOaSh7XHJcbiAgICB2YWx1ZTogW10sXHJcbiAgICAvLyB1cGRhdGVWYWx1ZSBtZXRob2QgY2FsbHMgaW4gaW5pdE1vdW50IG1ldGhvZCB0byBzZXQgYWN0dWFsIHZhbHVlXHJcbiAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXHJcbiAgICBvcGVuTGV2ZWw6IHRoaXMub3BlbkxldmVsLFxyXG4gICAgbGlzdFNsb3RIdG1sQ29tcG9uZW50OiB0aGlzLmxpc3RTbG90SHRtbENvbXBvbmVudCxcclxuICAgIGVtcHR5VGV4dDogdGhpcy5lbXB0eVRleHQsXHJcbiAgICBpc1NpbmdsZVNlbGVjdDogdGhpcy5pc1NpbmdsZVNlbGVjdCxcclxuICAgIHNob3dDb3VudDogdGhpcy5zaG93Q291bnQsXHJcbiAgICBkaXNhYmxlZEJyYW5jaE5vZGU6IHRoaXMuZGlzYWJsZWRCcmFuY2hOb2RlLFxyXG4gICAgZXhwYW5kU2VsZWN0ZWQ6IHRoaXMuZXhwYW5kU2VsZWN0ZWQsXHJcbiAgICBpc0luZGVwZW5kZW50Tm9kZXM6IHRoaXMuaXNJbmRlcGVuZGVudE5vZGVzLFxyXG4gICAgaWNvbkVsZW1lbnRzOiB0aGlzLmljb25FbGVtZW50cyxcclxuICAgIGlucHV0Q2FsbGJhY2s6IChpKSA9PiBvKHRoaXMsIGx0LCBEcykuY2FsbCh0aGlzLCBpKSxcclxuICAgIGFycm93Q2xpY2tDYWxsYmFjazogKCkgPT4gbyh0aGlzLCBudCwgSHMpLmNhbGwodGhpcyksXHJcbiAgICBtb3VzZXVwQ2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgdmFyIGk7XHJcbiAgICAgIHJldHVybiAoaSA9IG4odGhpcywgdSkpID09IG51bGwgPyB2b2lkIDAgOiBpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSksIHMgPSBuZXcgb2koe1xyXG4gICAgdmFsdWU6IFtdLFxyXG4gICAgLy8gdXBkYXRlVmFsdWUgbWV0aG9kIGNhbGxzIGluIGluaXRNb3VudCBtZXRob2QgdG8gc2V0IGFjdHVhbCB2YWx1ZVxyXG4gICAgc2hvd1RhZ3M6IHRoaXMuc2hvd1RhZ3MsXHJcbiAgICB0YWdzQ291bnRUZXh0OiB0aGlzLnRhZ3NDb3VudFRleHQsXHJcbiAgICBjbGVhcmFibGU6IHRoaXMuY2xlYXJhYmxlLFxyXG4gICAgaXNBbHdheXNPcGVuZWQ6IHRoaXMuYWx3YXlzT3BlbixcclxuICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcclxuICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICBpc1NpbmdsZVNlbGVjdDogdGhpcy5pc1NpbmdsZVNlbGVjdCxcclxuICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgYXJpYUxhYmVsOiB0aGlzLmFyaWFMYWJlbCxcclxuICAgIGljb25FbGVtZW50czogdGhpcy5pY29uRWxlbWVudHMsXHJcbiAgICBpbnB1dENhbGxiYWNrOiAoaSkgPT4gbyh0aGlzLCBRZSwgT3MpLmNhbGwodGhpcywgaSksXHJcbiAgICBzZWFyY2hDYWxsYmFjazogKGkpID0+IG8odGhpcywgdHQsIFBzKS5jYWxsKHRoaXMsIGkpLFxyXG4gICAgb3BlbkNhbGxiYWNrOiAoKSA9PiBvKHRoaXMsIG90LCBNcykuY2FsbCh0aGlzKSxcclxuICAgIGNsb3NlQ2FsbGJhY2s6ICgpID0+IG8odGhpcywgaWUsIEF0KS5jYWxsKHRoaXMpLFxyXG4gICAga2V5ZG93bkNhbGxiYWNrOiAoaSkgPT4gbyh0aGlzLCBldCwgSXMpLmNhbGwodGhpcywgaSksXHJcbiAgICBmb2N1c0NhbGxiYWNrOiAoKSA9PiBvKHRoaXMsIHN0LCBCcykuY2FsbCh0aGlzKSxcclxuICAgIGJsdXJDYWxsYmFjazogKCkgPT4gbyh0aGlzLCBpdCwgVnMpLmNhbGwodGhpcyksXHJcbiAgICBuYW1lQ2hhbmdlQ2FsbGJhY2s6IChpKSA9PiBvKHRoaXMsIGF0LCBHcykuY2FsbCh0aGlzLCBpKVxyXG4gIH0pO1xyXG4gIHJldHVybiB0aGlzLmFwcGVuZFRvQm9keSAmJiBtKHRoaXMsIEYsIG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLnVwZGF0ZUxpc3RQb3NpdGlvbigpKSksIGUuYXBwZW5kKHMuc3JjRWxlbWVudCksIHsgY29udGFpbmVyOiBlLCBsaXN0OiB0LCBpbnB1dDogcyB9O1xyXG59LCBRZSA9IG5ldyBXZWFrU2V0KCksIE9zID0gZnVuY3Rpb24oZSkge1xyXG4gIHZhciBpLCBhO1xyXG4gIGNvbnN0IHQgPSByZShlKTtcclxuICAoaSA9IG4odGhpcywgZCkpID09IG51bGwgfHwgaS51cGRhdGVWYWx1ZSh0KTtcclxuICBjb25zdCBzID0gKChhID0gbih0aGlzLCBkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IGEuc2VsZWN0ZWROb2RlcykgPz8ge307XHJcbiAgbyh0aGlzLCB0ZSwgU3QpLmNhbGwodGhpcywgcyksIG8odGhpcywgbmUsIE50KS5jYWxsKHRoaXMpO1xyXG59LCBldCA9IG5ldyBXZWFrU2V0KCksIElzID0gZnVuY3Rpb24oZSkge1xyXG4gIHZhciB0O1xyXG4gIHRoaXMuaXNMaXN0T3BlbmVkICYmICgodCA9IG4odGhpcywgZCkpID09IG51bGwgfHwgdC5jYWxsS2V5QWN0aW9uKGUpKTtcclxufSwgdHQgPSBuZXcgV2Vha1NldCgpLCBQcyA9IGZ1bmN0aW9uKGUpIHtcclxuICBuKHRoaXMsIHEpICYmIGNsZWFyVGltZW91dChuKHRoaXMsIHEpKSwgbSh0aGlzLCBxLCB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB2YXIgdDtcclxuICAgICh0ID0gbih0aGlzLCBkKSkgPT0gbnVsbCB8fCB0LnVwZGF0ZVNlYXJjaFZhbHVlKGUpLCB0aGlzLnVwZGF0ZUxpc3RQb3NpdGlvbigpO1xyXG4gIH0sIDM1MCkpLCBvKHRoaXMsIHB0LCBScykuY2FsbCh0aGlzLCBlKTtcclxufSwgc3QgPSBuZXcgV2Vha1NldCgpLCBCcyA9IGZ1bmN0aW9uKCkge1xyXG4gIG8odGhpcywgaiwgaGUpLmNhbGwodGhpcywgITApLCBuKHRoaXMsIEwpICYmIG4odGhpcywgTCkgJiYgbih0aGlzLCBCKSAmJiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBuKHRoaXMsIEwpLCAhMCksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBuKHRoaXMsIEwpLCAhMCksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBuKHRoaXMsIEIpKSk7XHJcbn0sIGl0ID0gbmV3IFdlYWtTZXQoKSwgVnMgPSBmdW5jdGlvbigpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHZhciBzLCBpO1xyXG4gICAgY29uc3QgZSA9IChzID0gbih0aGlzLCB1KSkgPT0gbnVsbCA/IHZvaWQgMCA6IHMuc3JjRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSwgdCA9IChpID0gbih0aGlzLCBkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IGkuc3JjRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICFlICYmICF0ICYmIHRoaXMuYmx1cldpbmRvd0hhbmRsZXIoKTtcclxuICB9LCAxKTtcclxufSwgc2UgPSBuZXcgV2Vha1NldCgpLCBfdCA9IGZ1bmN0aW9uKGUpIHtcclxuICB2YXIgcztcclxuICBpZiAoIWUpXHJcbiAgICByZXR1cm47XHJcbiAgbGV0IHQgPSBbXTtcclxuICB0aGlzLmlzSW5kZXBlbmRlbnROb2RlcyB8fCB0aGlzLmlzU2luZ2xlU2VsZWN0ID8gdCA9IGUuYWxsTm9kZXMgOiB0aGlzLmdyb3VwZWQgPyB0ID0gZS5ncm91cGVkTm9kZXMgOiB0ID0gZS5ub2RlcywgKHMgPSBuKHRoaXMsIHUpKSA9PSBudWxsIHx8IHMudXBkYXRlVmFsdWUodCksIG8odGhpcywgdGUsIFN0KS5jYWxsKHRoaXMsIGUpO1xyXG59LCBsdCA9IG5ldyBXZWFrU2V0KCksIERzID0gZnVuY3Rpb24oZSkge1xyXG4gIHZhciB0LCBzLCBpO1xyXG4gIG8odGhpcywgc2UsIF90KS5jYWxsKHRoaXMsIGUpLCB0aGlzLmlzU2luZ2xlU2VsZWN0ICYmICF0aGlzLmFsd2F5c09wZW4gJiYgKCh0ID0gbih0aGlzLCB1KSkgPT0gbnVsbCB8fCB0Lm9wZW5DbG9zZSgpLCAocyA9IG4odGhpcywgdSkpID09IG51bGwgfHwgcy5jbGVhclNlYXJjaCgpKSwgKGkgPSBuKHRoaXMsIHUpKSA9PSBudWxsIHx8IGkuZm9jdXMoKSwgbyh0aGlzLCBuZSwgTnQpLmNhbGwodGhpcyk7XHJcbn0sIG50ID0gbmV3IFdlYWtTZXQoKSwgSHMgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgZTtcclxuICAoZSA9IG4odGhpcywgdSkpID09IG51bGwgfHwgZS5mb2N1cygpLCB0aGlzLnVwZGF0ZUxpc3RQb3NpdGlvbigpO1xyXG59LCBhdCA9IG5ldyBXZWFrU2V0KCksIEdzID0gZnVuY3Rpb24oZSkge1xyXG4gIHRoaXMuc2VsZWN0ZWROYW1lICE9PSBlICYmICh0aGlzLnNlbGVjdGVkTmFtZSA9IGUsIG8odGhpcywgaHQsIGpzKS5jYWxsKHRoaXMpKTtcclxufSwgb3QgPSBuZXcgV2Vha1NldCgpLCBNcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBlO1xyXG4gIHRoaXMuaXNMaXN0T3BlbmVkID0gITAsIG4odGhpcywgUykgJiYgbih0aGlzLCBfKSAmJiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbih0aGlzLCBTKSwgITApLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBuKHRoaXMsIF8pKSksICEoIW4odGhpcywgZCkgfHwgIXRoaXMuc3JjRWxlbWVudCkgJiYgKHRoaXMuYXBwZW5kVG9Cb2R5ID8gKGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobih0aGlzLCBkKS5zcmNFbGVtZW50KSwgKGUgPSBuKHRoaXMsIEYpKSA9PSBudWxsIHx8IGUub2JzZXJ2ZSh0aGlzLnNyY0VsZW1lbnQpKSA6IHRoaXMuc3JjRWxlbWVudC5hcHBlbmRDaGlsZChuKHRoaXMsIGQpLnNyY0VsZW1lbnQpLCB0aGlzLnVwZGF0ZUxpc3RQb3NpdGlvbigpLCBvKHRoaXMsIGxlLCBUdCkuY2FsbCh0aGlzLCAhMCksIG8odGhpcywgY3QsIHFzKS5jYWxsKHRoaXMpLCBvKHRoaXMsIGR0LCAkcykuY2FsbCh0aGlzKSk7XHJcbn0sIGllID0gbmV3IFdlYWtTZXQoKSwgQXQgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgdDtcclxuICB0aGlzLmFsd2F5c09wZW4gfHwgKHRoaXMuaXNMaXN0T3BlbmVkID0gITEsIG4odGhpcywgUykgJiYgbih0aGlzLCBfKSAmJiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbih0aGlzLCBTKSwgITApLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBuKHRoaXMsIF8pKSksICFuKHRoaXMsIGQpIHx8ICF0aGlzLnNyY0VsZW1lbnQpIHx8ICEodGhpcy5hcHBlbmRUb0JvZHkgPyBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG4odGhpcywgZCkuc3JjRWxlbWVudCkgOiB0aGlzLnNyY0VsZW1lbnQuY29udGFpbnMobih0aGlzLCBkKS5zcmNFbGVtZW50KSkgfHwgKG0odGhpcywgUSwgbih0aGlzLCBkKS5zcmNFbGVtZW50LnNjcm9sbFRvcCksIHRoaXMuYXBwZW5kVG9Cb2R5ID8gKGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobih0aGlzLCBkKS5zcmNFbGVtZW50KSwgKHQgPSBuKHRoaXMsIEYpKSA9PSBudWxsIHx8IHQuZGlzY29ubmVjdCgpKSA6IHRoaXMuc3JjRWxlbWVudC5yZW1vdmVDaGlsZChuKHRoaXMsIGQpLnNyY0VsZW1lbnQpLCBvKHRoaXMsIGxlLCBUdCkuY2FsbCh0aGlzLCAhMSksIG8odGhpcywgdXQsIFdzKS5jYWxsKHRoaXMpKTtcclxufSwgcnQgPSBuZXcgV2Vha1NldCgpLCBGcyA9IGZ1bmN0aW9uKGUsIHQpIHtcclxuICBpZiAoIW4odGhpcywgZCkgfHwgIW4odGhpcywgdSkpXHJcbiAgICByZXR1cm47XHJcbiAgY29uc3QgcyA9IHQgPyBcInRyZWVzZWxlY3QtbGlzdC0tdG9wLXRvLWJvZHlcIiA6IFwidHJlZXNlbGVjdC1saXN0LS10b3BcIiwgaSA9IHQgPyBcInRyZWVzZWxlY3QtbGlzdC0tYm90dG9tLXRvLWJvZHlcIiA6IFwidHJlZXNlbGVjdC1saXN0LS1ib3R0b21cIjtcclxuICBlID8gKG4odGhpcywgZCkuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKHMpLCBuKHRoaXMsIGQpLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShpKSwgbih0aGlzLCB1KS5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmVlc2VsZWN0LWlucHV0LS10b3BcIiksIG4odGhpcywgdSkuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1pbnB1dC0tYm90dG9tXCIpKSA6IChuKHRoaXMsIGQpLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzKSwgbih0aGlzLCBkKS5zcmNFbGVtZW50LmNsYXNzTGlzdC5hZGQoaSksIG4odGhpcywgdSkuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1pbnB1dC0tdG9wXCIpLCBuKHRoaXMsIHUpLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXQtLWJvdHRvbVwiKSk7XHJcbn0sIGogPSBuZXcgV2Vha1NldCgpLCBoZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAhbih0aGlzLCB1KSB8fCAhbih0aGlzLCBkKSB8fCAoZSA/IChuKHRoaXMsIHUpLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXQtLWZvY3VzZWRcIiksIG4odGhpcywgZCkuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0LS1mb2N1c2VkXCIpKSA6IChuKHRoaXMsIHUpLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtaW5wdXQtLWZvY3VzZWRcIiksIG4odGhpcywgZCkuc3JjRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJlZXNlbGVjdC1saXN0LS1mb2N1c2VkXCIpKSk7XHJcbn0sIGxlID0gbmV3IFdlYWtTZXQoKSwgVHQgPSBmdW5jdGlvbihlKSB7XHJcbiAgdmFyIHQsIHMsIGksIGE7XHJcbiAgZSA/ICh0ID0gbih0aGlzLCB1KSkgPT0gbnVsbCB8fCB0LnNyY0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyZWVzZWxlY3QtaW5wdXQtLW9wZW5lZFwiKSA6IChzID0gbih0aGlzLCB1KSkgPT0gbnVsbCB8fCBzLnNyY0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyZWVzZWxlY3QtaW5wdXQtLW9wZW5lZFwiKSwgdGhpcy5zdGF0aWNMaXN0ID8gKGkgPSBuKHRoaXMsIGQpKSA9PSBudWxsIHx8IGkuc3JjRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHJlZXNlbGVjdC1saXN0LS1zdGF0aWNcIikgOiAoYSA9IG4odGhpcywgZCkpID09IG51bGwgfHwgYS5zcmNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmVlc2VsZWN0LWxpc3QtLXN0YXRpY1wiKTtcclxufSwgJCA9IG5ldyBXZWFrU2V0KCksIGRlID0gZnVuY3Rpb24oZSkge1xyXG4gICFuKHRoaXMsIFMpIHx8ICFuKHRoaXMsIF8pIHx8ICFuKHRoaXMsIEwpIHx8ICFuKHRoaXMsIEIpIHx8ICgoIXRoaXMuYWx3YXlzT3BlbiB8fCBlKSAmJiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbih0aGlzLCBTKSwgITApLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBuKHRoaXMsIF8pKSksIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbih0aGlzLCBMKSwgITApLCBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbih0aGlzLCBMKSwgITApLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgbih0aGlzLCBCKSkpO1xyXG59LCBjdCA9IG5ldyBXZWFrU2V0KCksIHFzID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHQsIHMsIGk7XHJcbiAgY29uc3QgZSA9ICh0ID0gbih0aGlzLCBkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IHQuaXNMYXN0Rm9jdXNlZEVsZW1lbnRFeGlzdCgpO1xyXG4gIHRoaXMuc2F2ZVNjcm9sbFBvc2l0aW9uICYmIGUgPyAocyA9IG4odGhpcywgZCkpID09IG51bGwgfHwgcy5zcmNFbGVtZW50LnNjcm9sbCgwLCBuKHRoaXMsIFEpKSA6IChpID0gbih0aGlzLCBkKSkgPT0gbnVsbCB8fCBpLmZvY3VzRmlyc3RMaXN0RWxlbWVudCgpO1xyXG59LCBuZSA9IG5ldyBXZWFrU2V0KCksIE50ID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGU7XHJcbiAgKGUgPSB0aGlzLnNyY0VsZW1lbnQpID09IG51bGwgfHwgZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImlucHV0XCIsIHsgZGV0YWlsOiB0aGlzLnZhbHVlIH0pKSwgdGhpcy5pbnB1dENhbGxiYWNrICYmIHRoaXMuaW5wdXRDYWxsYmFjayh0aGlzLnZhbHVlKTtcclxufSwgaHQgPSBuZXcgV2Vha1NldCgpLCBqcyA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciBlO1xyXG4gIChlID0gdGhpcy5zcmNFbGVtZW50KSA9PSBudWxsIHx8IGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJuYW1lLWNoYW5nZVwiLCB7IGRldGFpbDogdGhpcy5zZWxlY3RlZE5hbWUgfSkpLCB0aGlzLm5hbWVDaGFuZ2VDYWxsYmFjayAmJiB0aGlzLm5hbWVDaGFuZ2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkTmFtZSk7XHJcbn0sIGR0ID0gbmV3IFdlYWtTZXQoKSwgJHMgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgZTtcclxuICB0aGlzLmFsd2F5c09wZW4gfHwgKChlID0gdGhpcy5zcmNFbGVtZW50KSA9PSBudWxsIHx8IGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJvcGVuXCIsIHsgZGV0YWlsOiB0aGlzLnZhbHVlIH0pKSwgdGhpcy5vcGVuQ2FsbGJhY2sgJiYgdGhpcy5vcGVuQ2FsbGJhY2sodGhpcy52YWx1ZSkpO1xyXG59LCB1dCA9IG5ldyBXZWFrU2V0KCksIFdzID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGU7XHJcbiAgdGhpcy5hbHdheXNPcGVuIHx8ICgoZSA9IHRoaXMuc3JjRWxlbWVudCkgPT0gbnVsbCB8fCBlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2xvc2VcIiwgeyBkZXRhaWw6IHRoaXMudmFsdWUgfSkpLCB0aGlzLmNsb3NlQ2FsbGJhY2sgJiYgdGhpcy5jbG9zZUNhbGxiYWNrKHRoaXMudmFsdWUpKTtcclxufSwgcHQgPSBuZXcgV2Vha1NldCgpLCBScyA9IGZ1bmN0aW9uKGUpIHtcclxuICB2YXIgcztcclxuICBjb25zdCB0ID0gKGUgPT0gbnVsbCA/IHZvaWQgMCA6IGUudHJpbSgpKSA/PyBcIlwiO1xyXG4gIChzID0gdGhpcy5zcmNFbGVtZW50KSA9PSBudWxsIHx8IHMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzZWFyY2hcIiwgeyBkZXRhaWw6IHQgfSkpLCB0aGlzLnNlYXJjaENhbGxiYWNrICYmIHRoaXMuc2VhcmNoQ2FsbGJhY2sodCk7XHJcbn07XHJcbmV4cG9ydCB7XHJcbiAgQmkgYXMgZGVmYXVsdFxyXG59O1xyXG4iLCAiaW1wb3J0IFRyZWVzZWxlY3QgZnJvbSAndHJlZXNlbGVjdGpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmVlKHtcbiAgICBzdGF0ZSxcbiAgICBuYW1lLFxuICAgIG9wdGlvbnMsXG4gICAgc2VhcmNoYWJsZSxcbiAgICBzaG93Q291bnQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWRCcmFuY2hOb2RlLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgaXNTaW5nbGVTZWxlY3QgPSB0cnVlLFxuICAgIHNob3dUYWdzID0gZmFsc2UsXG4gICAgY2xlYXJhYmxlID0gZmFsc2UsXG4gICAgYWx3YXlzT3BlbiA9IHRydWUsXG59KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHRyZWU6IG51bGwsXG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSBuZXcgVHJlZXNlbGVjdCh7XG4gICAgICAgICAgICAgICAgaWQ6IGB0cmVlLSR7bmFtZX0taWRgLFxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogYHRyZWUtJHtuYW1lfS1sYWJlbGAsXG4gICAgICAgICAgICAgICAgcGFyZW50SHRtbENvbnRhaW5lcjogdGhpcy4kcmVmcy50cmVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc2VhcmNoYWJsZSxcbiAgICAgICAgICAgICAgICBzaG93Q291bnQsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRCcmFuY2hOb2RlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgIGlzU2luZ2xlU2VsZWN0LFxuICAgICAgICAgICAgICAgIHNob3dUYWdzLFxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZSxcbiAgICAgICAgICAgICAgICBhbHdheXNPcGVuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy50cmVlLnNyY0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLElBQUksS0FBSyxPQUFPO0FBQ2hCLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLEtBQUssSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLFlBQVksTUFBSSxjQUFjLE1BQUksVUFBVSxNQUFJLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUk7QUFDL0csSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLE9BQU8sS0FBSyxXQUFXLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRztBQUFuRSxJQUF1RSxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU07QUFDdkYsTUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQ1YsVUFBTSxVQUFVLFlBQVksQ0FBQztBQUNqQztBQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLHlCQUF5QixHQUFHLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztBQUFsRixJQUFzRixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU07QUFDckcsTUFBSSxFQUFFLElBQUksQ0FBQztBQUNULFVBQU0sVUFBVSxtREFBbUQ7QUFDckUsZUFBYSxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUM5QztBQUpBLElBSUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FB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
