/* 织 WEAVE — 页面逻辑 */

document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'products') initProducts();
  if (page === 'product') initProduct();
  if (page === 'cart') initCart();
  if (page === 'checkout') initCheckout();
});

/* ---------- 通用 ---------- */

function cardHTML(p) {
  return '<article class="card"><a href="product.html?id=' + p.id + '">' +
    '<div class="thumb">' + sweaterSVG(p.color, p.variant, p.name) + '</div>' +
    '<div class="card-body"><h3>' + p.name + '</h3>' +
    '<p class="mat">' + p.material + '</p>' +
    '<p class="price">' + fmt(p.price) + '</p></div></a></article>';
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* ---------- 首页 ---------- */

function initHome() {
  const hero = document.getElementById('heroArt');
  if (hero) hero.innerHTML = sweaterSVG('#B08D6A', 'turtle', 'hero');

  const cats = document.getElementById('cats');
  if (cats) {
    cats.innerHTML = CATS.map(c =>
      '<a class="cat" href="products.html?cat=' + encodeURIComponent(c.name) + '">' +
      sweaterSVG('#A35D3D', c.icon, c.name) + '<span>' + c.name + '</span></a>'
    ).join('');
  }

  const grid = document.getElementById('newGrid');
  if (grid) {
    grid.innerHTML = PRODUCTS.filter(p => p.isNew).map(cardHTML).join('');
  }

  const story = document.getElementById('storyArt');
  if (story) story.innerHTML = sweaterSVG('#6B6460', 'crew', 'story');

  const form = document.getElementById('newsForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('newsEmail');
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        const msg = document.getElementById('newsMsg');
        if (msg) msg.style.display = 'block';
        form.reset();
      }
    });
  }
}

/* ---------- 商品列表 ---------- */

function initProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const bar = document.getElementById('filterBar');
  const count = document.getElementById('resultCount');
  const params = new URLSearchParams(location.search);
  let cat = params.get('cat') || '';

  const cats = ['全部'].concat(CATS.map(c => c.name));

  function render() {
    const list = cat && cat !== '全部' ? PRODUCTS.filter(p => p.cat === cat) : PRODUCTS;
    grid.innerHTML = list.map(cardHTML).join('');
    if (count) count.textContent = list.length + ' 件商品';
    if (bar) {
      bar.innerHTML = cats.map(c => {
        const active = (cat === c) || (c === '全部' && !cat);
        return '<button class="filter-btn' + (active ? ' active' : '') + '" data-cat="' + esc(c) + '">' + c + '</button>';
      }).join('');
    }
  }

  render();

  if (bar) {
    bar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      cat = btn.dataset.cat === '全部' ? '' : btn.dataset.cat;
      render();
    });
  }
}

/* ---------- 商品详情 ---------- */

function initProduct() {
  const wrap = document.getElementById('detailWrap');
  if (!wrap) return;

  const id = parseInt(new URLSearchParams(location.search).get('id'), 10);
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) {
    wrap.innerHTML = '<div class="notfound"><h1>这件商品不存在</h1><p>可能已经下架，或者链接有误。</p><p style="margin-top:16px"><a class="btn btn-primary" href="products.html">回全部商品</a></p></div>';
    return;
  }

  document.title = p.name + ' — 织 WEAVE';

  wrap.innerHTML =
    '<div class="breadcrumb"><a href="index.html">首页</a><span class="sep">/</span>' +
    '<a href="products.html?cat=' + encodeURIComponent(p.cat) + '">' + esc(p.cat) + '</a>' +
    '<span class="sep">/</span>' + esc(p.name) + '</div>' +
    '<div class="detail">' +
      '<div class="detail-art">' + sweaterSVG(p.color, p.variant, p.name) + '</div>' +
      '<div class="detail-info">' +
        '<h1>' + esc(p.name) + '</h1>' +
        '<p class="mat">' + esc(p.material) + '</p>' +
        '<p class="price">' + fmt(p.price) + '</p>' +
        '<p class="desc">' + esc(p.desc) + '</p>' +
        '<div class="field"><label>尺码</label><div class="seg" id="sizeSeg">' +
          ['S', 'M', 'L', 'XL'].map(s => '<button type="button" data-size="' + s + '">' + s + '</button>').join('') +
        '</div><p class="err" id="sizeErr" style="display:none;color:var(--danger);font-size:12px;margin-top:6px">先选一个尺码</p></div>' +
        '<div class="field"><label>数量</label><div class="qty">' +
          '<button type="button" id="qtyMinus" aria-label="减少数量">−</button>' +
          '<span id="qtyNum">1</span>' +
          '<button type="button" id="qtyPlus" aria-label="增加数量">+</button>' +
        '</div></div>' +
        '<div class="detail-actions">' +
          '<button class="btn btn-primary" id="addBtn">加入购物车</button>' +
        '</div>' +
        '<p class="add-msg" id="addMsg">已加入购物车 <a href="cart.html" style="text-decoration:underline">去结算 →</a></p>' +
      '</div>' +
    '</div>';

  let size = '';
  let qty = 1;

  const sizeSeg = document.getElementById('sizeSeg');
  const sizeErr = document.getElementById('sizeErr');
  const qtyNum = document.getElementById('qtyNum');
  const addMsg = document.getElementById('addMsg');

  sizeSeg.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    sizeSeg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    size = btn.dataset.size;
    sizeErr.style.display = 'none';
  });

  document.getElementById('qtyMinus').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    qtyNum.textContent = qty;
  });
  document.getElementById('qtyPlus').addEventListener('click', () => {
    qty = Math.min(99, qty + 1);
    qtyNum.textContent = qty;
  });

  document.getElementById('addBtn').addEventListener('click', () => {
    if (!size) {
      sizeErr.style.display = 'block';
      return;
    }
    Cart.add(p.id, size, qty);
    updateBadge();
    addMsg.style.display = 'block';
    setTimeout(() => { addMsg.style.display = 'none'; }, 3000);
  });
}

/* ---------- 购物车 ---------- */

function initCart() {
  const wrap = document.getElementById('cartWrap');
  if (!wrap) return;

  const items = Cart.items();

  if (items.length === 0) {
    wrap.innerHTML = '<div class="cart-empty"><p class="big">购物车还是空的</p>' +
      '<p>去挑一件吧，羊毛衫值得一件好的。</p>' +
      '<p style="margin-top:20px"><a class="btn btn-primary" href="products.html">去逛逛</a></p></div>';
    return;
  }

  const subtotal = Cart.total();
  const ship = shippingFee(subtotal);

  wrap.innerHTML =
    '<div class="cart-layout">' +
      '<div class="cart-items" id="cartItems"></div>' +
      '<aside class="summary">' +
        '<h3>订单摘要</h3>' +
        '<div class="sum-row"><span>小计</span><span>' + fmt(subtotal) + '</span></div>' +
        '<div class="sum-row"><span>运费</span><span>' + (ship === 0 ? '免运费' : fmt(ship)) + '</span></div>' +
        '<div class="sum-row total"><span>合计</span><span class="price">' + fmt(subtotal + ship) + '</span></div>' +
        '<a class="btn btn-primary btn-block" href="checkout.html">去结算</a>' +
      '</aside>' +
    '</div>';

  const box = document.getElementById('cartItems');
  box.innerHTML = items.map(i =>
    '<div class="cart-item">' +
      '<div class="ci-thumb">' + sweaterSVG(i.product.color, i.product.variant, i.product.name) + '</div>' +
      '<div>' +
        '<div class="ci-name">' + esc(i.product.name) + '</div>' +
        '<div class="ci-meta">尺码 ' + esc(i.size) + ' · ' + esc(i.product.material) + '</div>' +
        '<div class="qty" style="border:none;padding:0">' +
          '<button type="button" data-act="minus" data-id="' + i.product.id + '" data-size="' + esc(i.size) + '" aria-label="减少">−</button>' +
          '<span>' + i.qty + '</span>' +
          '<button type="button" data-act="plus" data-id="' + i.product.id + '" data-size="' + esc(i.size) + '" aria-label="增加">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="ci-right">' +
        '<span class="ci-price">' + fmt(i.line) + '</span>' +
        '<button class="ci-remove" data-act="del" data-id="' + i.product.id + '" data-size="' + esc(i.size) + '">删除</button>' +
      '</div>' +
    '</div>'
  ).join('');

  box.addEventListener('click', e => {
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const id = parseInt(btn.dataset.id, 10);
    const size = btn.dataset.size;
    if (btn.dataset.act === 'plus') Cart.setQty(id, size, items.find(i => i.product.id === id && i.size === size).qty + 1);
    if (btn.dataset.act === 'minus') Cart.setQty(id, size, items.find(i => i.product.id === id && i.size === size).qty - 1);
    if (btn.dataset.act === 'del') Cart.remove(id, size);
    updateBadge();
    initCart(); // 重渲染
  });
}

/* ---------- 结账 ---------- */

function initCheckout() {
  const wrap = document.getElementById('checkoutWrap');
  if (!wrap) return;

  const items = Cart.items();

  if (items.length === 0) {
    wrap.innerHTML = '<div class="cart-empty"><p class="big">没有要结账的商品</p>' +
      '<p><a class="btn btn-primary" style="margin-top:16px" href="products.html">先去挑两件</a></p></div>';
    return;
  }

  const subtotal = Cart.total();
  const ship = shippingFee(subtotal);

  wrap.innerHTML =
    '<div class="checkout-layout">' +
      '<form id="checkoutForm" novalidate>' +
        '<div class="form-card">' +
          '<h2>收货信息</h2>' +
          '<div class="form-row">' +
            '<div class="form-group"><label for="fName">收货人</label><input id="fName" type="text" autocomplete="name"><p class="err">请填写收货人</p></div>' +
            '<div class="form-group"><label for="fPhone">手机号</label><input id="fPhone" type="tel" autocomplete="tel"><p class="err">请填写 11 位手机号</p></div>' +
          '</div>' +
          '<div class="form-group"><label for="fAddr">详细地址</label><input id="fAddr" type="text" autocomplete="street-address"><p class="err">请填写详细地址</p></div>' +
          '<div class="form-row">' +
            '<div class="form-group"><label for="fCity">城市</label><input id="fCity" type="text" autocomplete="address-level2"><p class="err">请填写城市</p></div>' +
            '<div class="form-group"><label for="fZip">邮编</label><input id="fZip" type="text" autocomplete="postal-code"><p class="err">请填写邮编</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="form-card">' +
          '<h2>配送方式</h2>' +
          '<div class="pay-opts">' +
            '<label class="pay-opt"><input type="radio" name="ship" value="std" checked><span><span class="po-name">标准配送</span><span class="po-note" style="display:block">3-5 天 · ' + (ship === 0 ? '免运费' : fmt(SHIP_FEE)) + '</span></span></label>' +
            '<label class="pay-opt"><input type="radio" name="ship" value="fast"><span><span class="po-name">加急配送</span><span class="po-note" style="display:block">1-2 天 · +¥15</span></span></label>' +
          '</div>' +
        '</div>' +
        '<div class="form-card">' +
          '<h2>支付方式</h2>' +
          '<div class="pay-opts" id="payOpts">' +
            '<label class="pay-opt"><input type="radio" name="pay" value="card" checked><span><span class="po-name">信用卡</span><span class="po-note" style="display:block">Visa / Mastercard（演示）</span></span></label>' +
            '<label class="pay-opt"><input type="radio" name="pay" value="paypal"><span><span class="po-name">PayPal</span><span class="po-note" style="display:block">跳转 PayPal 完成付款（演示）</span></span></label>' +
            '<label class="pay-opt"><input type="radio" name="pay" value="cod"><span><span class="po-name">货到付款</span><span class="po-note" style="display:block">签收时现金付款</span></span></label>' +
          '</div>' +
          '<div id="cardFields" style="margin-top:16px">' +
            '<div class="form-group"><label for="fCard">卡号</label><input id="fCard" type="text" inputmode="numeric" maxlength="19" placeholder="1234 5678 9012 3456"><p class="err">请填写 16 位卡号</p></div>' +
            '<div class="form-row">' +
              '<div class="form-group"><label for="fExp">有效期</label><input id="fExp" type="text" maxlength="5" placeholder="MM/YY"><p class="err">格式 MM/YY</p></div>' +
              '<div class="form-group"><label for="fCvc">CVC</label><input id="fCvc" type="text" inputmode="numeric" maxlength="4"><p class="err">3-4 位安全码</p></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn-primary btn-block" type="submit" style="min-height:52px">提交订单 · ' + fmt(subtotal + ship) + '</button>' +
      '</form>' +
      '<aside class="summary">' +
        '<h3>订单摘要</h3>' +
        items.map(i => '<div class="sum-row"><span>' + esc(i.product.name) + ' ×' + i.qty + '</span><span>' + fmt(i.line) + '</span></div>').join('') +
        '<div class="sum-row"><span>小计</span><span>' + fmt(subtotal) + '</span></div>' +
        '<div class="sum-row"><span>运费</span><span>' + (ship === 0 ? '免运费' : fmt(ship)) + '</span></div>' +
        '<div class="sum-row total"><span>合计</span><span class="price">' + fmt(subtotal + ship) + '</span></div>' +
      '</aside>' +
    '</div>' +
    '<div class="success-box" id="successBox" style="display:none">' +
      '<div class="tick">✓</div>' +
      '<h1>订单已提交</h1>' +
      '<p>订单号 <span class="order-no" id="orderNo"></span><br>这是演示站，不会真的扣款，也不会真的发货。</p>' +
      '<a class="btn btn-primary" href="products.html">继续逛逛</a>' +
    '</div>';

  /* 支付方式切换 */
  const payOpts = document.getElementById('payOpts');
  const cardFields = document.getElementById('cardFields');
  payOpts.addEventListener('change', e => {
    const v = e.target.value;
    cardFields.style.display = v === 'card' ? 'block' : 'none';
    payOpts.querySelectorAll('.pay-opt').forEach(el => el.classList.toggle('active', el.querySelector('input').checked));
  });
  payOpts.querySelectorAll('.pay-opt').forEach(el => el.classList.add('active'));

  /* 校验 */
  const form = document.getElementById('checkoutForm');
  const g = id => document.getElementById(id);
  const mark = (el, bad) => el.closest('.form-group').classList.toggle('invalid', bad);

  function validate() {
    let ok = true;
    const checks = [
      [g('fName'), v => v.trim().length >= 2],
      [g('fPhone'), v => /^1\d{10}$/.test(v.trim())],
      [g('fAddr'), v => v.trim().length >= 5],
      [g('fCity'), v => v.trim().length >= 2],
      [g('fZip'), v => /^\d{5,6}$/.test(v.trim())]
    ];
    checks.forEach(([el, fn]) => {
      const bad = !fn(el.value);
      mark(el, bad);
      if (bad) ok = false;
    });

    const pay = form.querySelector('input[name="pay"]:checked').value;
    if (pay === 'card') {
      const card = g('fCard').value.replace(/\s/g, '');
      const exp = g('fExp').value.trim();
      const cvc = g('fCvc').value.trim();
      const cardOk = /^\d{16}$/.test(card);
      const expOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(exp);
      const cvcOk = /^\d{3,4}$/.test(cvc);
      mark(g('fCard'), !cardOk);
      mark(g('fExp'), !expOk);
      mark(g('fCvc'), !cvcOk);
      if (!cardOk || !expOk || !cvcOk) ok = false;
    }
    return ok;
  }

  /* 卡号自动格式化 */
  g('fCard').addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validate()) return;
    const no = 'WE' + Date.now().toString().slice(-8);
    document.getElementById('orderNo').textContent = no;
    form.style.display = 'none';
    document.getElementById('successBox').style.display = 'block';
    Cart.clear();
    updateBadge();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
