/* 织 WEAVE — 购物车（localStorage） */

const Cart = {
  KEY: 'weave_cart',

  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      const arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return [];
      return arr.filter(i => i && typeof i.id === 'number' && i.size && i.qty > 0);
    } catch (e) {
      return [];
    }
  },

  save(items) {
    try { localStorage.setItem(this.KEY, JSON.stringify(items)); } catch (e) { /* 存储不可用时静默降级 */ }
  },

  add(id, size, qty) {
    const items = this.get();
    const found = items.find(i => i.id === id && i.size === size);
    if (found) found.qty = Math.min(99, found.qty + qty);
    else items.push({ id, size, qty: Math.min(99, qty) });
    this.save(items);
  },

  setQty(id, size, qty) {
    const items = this.get();
    const found = items.find(i => i.id === id && i.size === size);
    if (found) {
      found.qty = Math.max(1, Math.min(99, qty));
      this.save(items);
    }
  },

  remove(id, size) {
    this.save(this.get().filter(i => !(i.id === id && i.size === size)));
  },

  clear() {
    try { localStorage.removeItem(this.KEY); } catch (e) { /* noop */ }
  },

  count() {
    return this.get().reduce((s, i) => s + i.qty, 0);
  },

  items() {
    return this.get().map(i => {
      const p = PRODUCTS.find(p => p.id === i.id);
      return p ? Object.assign({}, i, { product: p, line: p.price * i.qty }) : null;
    }).filter(Boolean);
  },

  total() {
    return this.items().reduce((s, i) => s + i.line, 0);
  }
};

/* 购物车徽标（所有页面共用） */
function updateBadge() {
  const n = Cart.count();
  const b = document.getElementById('cartBadge');
  if (b) {
    b.textContent = n;
    b.dataset.count = n;
    b.classList.toggle('show', n > 0);
  }
}

/* 运费规则：满 399 免运费，否则 12 */
const FREE_SHIP = 399;
const SHIP_FEE = 12;

function shippingFee(subtotal) {
  return subtotal >= FREE_SHIP || subtotal === 0 ? 0 : SHIP_FEE;
}
