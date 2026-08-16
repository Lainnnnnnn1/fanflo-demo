/* FanFlo 繁花毛织 — 页面逻辑 v2（双语 + 动效） */

/* 标题自动包裹 line-mask（文字遮罩揭示） */
(function () {
  try {
    document.querySelectorAll('.hero-content h1, .section-head h2, .story-grid h2, .page-head h1, .news-card h3, .detail-info h1').forEach(el => {
      if (el.querySelector('.line-mask')) return;
      el.innerHTML = '<span class="line-mask"><span>' + el.textContent + '</span></span>';
      el.classList.add('lm');
    });
  } catch (e) { /* noop */ }
})();

/* ---------- i18n ---------- */
const I18N = {
  en: {
    navNew: 'New Arrivals', navAll: 'Shop All', navStory: 'Our Mill', navCart: 'Cart',
    heroSub: '2026 Fall / Winter · Merino Wool',
    heroTitle: 'Knitted in our own factory.',
    heroLead: 'No middlemen. No brand markup. Our sweaters come straight off our machines to your door — the price you see is what it costs to make it well.',
    ctaNew: 'Shop New Arrivals', ctaAll: 'Browse All',
    catTitle: 'Shop by Category',
    brandTitle: 'Eight lines, one mill.',
    catNavTitle: 'Browse the collection.',
    freeShipMsg: 'Add ¥{n} more for free shipping',
    freeShipGot: 'Free shipping unlocked',
    sortNew: 'Newest', sortPriceAsc: 'Price ↑', sortPriceDesc: 'Price ↓',
    qaBtn: 'Quick Add',
    newsLabel: 'Corporate News', newsH: 'From the mill.',
    news1t: 'How to Style a Sweater Vest — Layering Ideas and B2B Opportunities',
    news2t: 'Exploring Cardigan Styles: Key Features and Fan Flo\'s Designer Collections',
    news3t: 'A Manufacturer\'s Look at Pullover Sweaters: Styles, Types, B2B Guide',
    newsRead: 'Read →',
    newTitle: 'New This Week',
    newHint: 'Just off the machines — 300 pieces per style, then it\'s gone.',
    procLabel: 'The Process',
    procTitle: 'From design to doorstep.',
    proc1t: 'Design', proc1d: 'Patterns are drafted and graded in-house. Prototypes before production, always.',
    proc2t: 'Sampling', proc2d: 'Your colors, your labels, your packaging — sampled before anything runs.',
    proc3t: 'Yarn', proc3d: 'Merino and wool blends, sourced direct from the market. Bulk yarn, better price.',
    proc4t: 'QC & Ship', proc4d: 'Every piece checked by hand before it ships. 2–3 business day turnaround.',
    storyTitle: 'A Real Knitting Mill',
    story1: 'We are a direct knitwear factory in China — not a trading company. Since 2010, every stage happens under our roof: design, yarn sourcing, knitting, quality control.',
    story2: 'That is how 1,000+ resellers and brands buy from us. The sweaters on this site come off the same machines as our private-label work.',
    f1n: '16', f1l: 'Years of Knitting', f2n: '1,000+', f2l: 'Resellers & Brands', f3n: '10', f3l: 'Pcs MOQ',
    newsTitle: 'New Arrivals, First',
    newsTitle2: 'First come, first worn.',
    newsText: 'New styles go to our email list before they hit the site. One email a month, max.',
    newsPh: 'Your email', newsBtn: 'Subscribe', newsOk: 'Got it. You\'ll hear from us first.',
    footerTag: 'Knitwear straight from our own mill — yarn, knitting, shipping, all ours.',
    footShop: 'Shop', footContact: 'Contact', footFollow: 'Follow', footCopy: '© 2026 FanFlo 繁花毛织 · Demo', footSlogan: 'Honest fabric, honest prices.',
    pTitle: 'All Products', pSub: 'Every piece comes off our machines, washed, checked and packed by the same hands.',
    pAll: 'All', pCount: 'items', tagNew: 'NEW',
    crumbHome: 'Home', size: 'Size', qty: 'Quantity', add: 'Add to Cart',
    added: 'Added to cart — ', viewCart: 'View Cart →', pickSize: 'Pick a size first.',
    nfTitle: 'This piece doesn\'t exist.', nfText: 'It may have sold out, or the link is wrong.', backAll: 'Back to All Products',
    cTitle: 'Your Cart', cEmptyBig: 'Your cart is empty.', cEmptyText: 'Go find a sweater worth keeping.', cEmptyBtn: 'Start Shopping',
    sub: 'Subtotal', ship: 'Shipping', free: 'Free', total: 'Total', checkout: 'Checkout', remove: 'Remove', metaSize: 'Size',
    coTitle: 'Checkout', coEmptyBig: 'Nothing to check out.', coEmptyBtn: 'Grab Something First',
    shipInfo: 'Shipping Details', fName: 'Full Name', fPhone: 'Phone', fAddr: 'Address', fCity: 'City', fZip: 'ZIP',
    shipMethod: 'Delivery', shipStd: 'Standard — 3-5 days', shipFast: 'Express — 1-2 days',
    payMethod: 'Payment', payCard: 'Credit Card', payPaypal: 'PayPal', payCod: 'Cash on Delivery',
    cardNo: 'Card Number', exp: 'Expiry', cvc: 'CVC', placeOrder: 'Place Order · ',
    sumTitle: 'Order Summary', okTitle: 'Order placed.', okText: 'Order number — this is a demo site. No money moves, nothing ships.', okBtn: 'Keep Browsing',
    errReq: 'Please fill this in.', errPhone: 'Enter an 11-digit phone number.', errCard: 'Enter a 16-digit card number.', errExp: 'MM/YY', errCvc: '3-4 digits',
    emptyCart: 'No items yet.'
  },
  zh: {
    navNew: '新品', navAll: '全部商品', navStory: '我们的工厂', navCart: '购物车',
    heroSub: '2026 秋冬 · 美利奴羊毛',
    heroTitle: '羊毛针织，直接来自织厂',
    heroLead: '没有中间商，没有品牌溢价。我们自己纺纱、自己织造、自己发货——把一件羊毛衫该有的价格，直接标给你。',
    ctaNew: '看新品', ctaAll: '全部商品',
    catTitle: '按品类逛',
    brandTitle: '八个品类，一间织厂。',
    catNavTitle: '慢慢逛，挑一件。',
    freeShipMsg: '再买 ¥{n} 免运费',
    freeShipGot: '已免运费',
    sortNew: '最新', sortPriceAsc: '价格 ↑', sortPriceDesc: '价格 ↓',
    qaBtn: '快速加购',
    newsLabel: '公司新闻', newsH: '织厂直报。',
    news1t: '针织背心怎么搭——叠穿思路与 B2B 机会',
    news2t: '开衫风格详解：要点与 Fan Flo 设计师系列',
    news3t: '工厂视角看套头毛衣：款式、类型与 B2B 指南',
    newsRead: '阅读 →',
    newTitle: '本周新品',
    newHint: '刚下织机的一批，每个款 300 件，卖完等下一批。',
    procLabel: '生产流程',
    procTitle: '从设计到你手上。',
    proc1t: '设计', proc1d: '版型在厂内打样、放码。量产前必有样衣。',
    proc2t: '打样', proc2d: '颜色、吊牌、包装，全部先打样再投产。',
    proc3t: '选纱', proc3d: '美利奴与羊毛混纺，直接从市场收纱。批量进纱，价格更好。',
    proc4t: '质检发货', proc4d: '每件出货前人工质检。2-3 个工作日发货。',
    storyTitle: '一家真的织厂',
    story1: '我们是中国直营针织厂——不是贸易公司。从 2010 年起，设计、找纱、织造、质检，全都在我们自己厂房里完成。',
    story2: '1000+ 经销商和品牌都这样从我们这里进货。这个站上的毛衣，和我们代工的是同一批机器织的。',
    f1n: '16', f1l: '年织造经验', f2n: '1,000+', f2l: '经销商与品牌', f3n: '10', f3l: '件起订',
    newsTitle: '上新通知',
    newsTitle2: '先到先穿。',
    newsText: '每批新品上架前，先发邮件给订阅的人。不刷屏，一月最多两封。',
    newsPh: '你的邮箱', newsBtn: '订阅', newsOk: '已记录，新品上架会第一个通知你。',
    footerTag: '自有织厂直出的羊毛针织。原料、织造、发货，全程自己来。',
    footShop: '逛逛', footContact: '联系', footFollow: '关注', footCopy: '© 2026 FanFlo 繁花毛织 · 样板站', footSlogan: '面料是诚实的产品',
    pTitle: '全部商品', pSub: '每一件都从我们的织机上下来，洗过、验过，才发货。',
    pAll: '全部', pCount: '件商品', tagNew: '新品',
    crumbHome: '首页', size: '尺码', qty: '数量', add: '加入购物车',
    added: '已加入购物车 — ', viewCart: '去结算 →', pickSize: '先选一个尺码',
    nfTitle: '这件商品不存在', nfText: '可能已经下架，或者链接有误。', backAll: '回全部商品',
    cTitle: '购物车', cEmptyBig: '购物车还是空的', cEmptyText: '去挑一件吧，羊毛衫值得一件好的。', cEmptyBtn: '去逛逛',
    sub: '小计', ship: '运费', free: '免运费', total: '合计', checkout: '去结算', remove: '删除', metaSize: '尺码',
    coTitle: '结账', coEmptyBig: '没有要结账的商品', coEmptyBtn: '先去挑两件',
    shipInfo: '收货信息', fName: '收货人', fPhone: '手机号', fAddr: '详细地址', fCity: '城市', fZip: '邮编',
    shipMethod: '配送方式', shipStd: '标准配送 — 3-5 天', shipFast: '加急配送 — 1-2 天',
    payMethod: '支付方式', payCard: '信用卡', payPaypal: 'PayPal', payCod: '货到付款',
    cardNo: '卡号', exp: '有效期', cvc: 'CVC', placeOrder: '提交订单 · ',
    sumTitle: '订单摘要', okTitle: '订单已提交', okText: '订单号 — 这是演示站，不会真的扣款，也不会真的发货。', okBtn: '继续逛逛',
    errReq: '请填写此项', errPhone: '请填写 11 位手机号', errCard: '请填写 16 位卡号', errExp: '格式 MM/YY', errCvc: '3-4 位安全码',
    emptyCart: '购物车还是空的'
  }
};

/* ---------- 语言状态 ---------- */
let LANG = 'en';
try { LANG = localStorage.getItem('fanflo_lang') || 'en'; } catch (e) { /* noop */ }
function t(key) { return (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key; }

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (el.classList.contains('lm')) {
      const s = el.querySelector('.line-mask > span');
      if (s) s.textContent = v;
    } else {
      el.textContent = v;
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  const btns = document.querySelectorAll('.lang-switch button');
  btns.forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
  const html = document.documentElement;
  html.lang = LANG === 'zh' ? 'zh-CN' : 'en';
  renderFooterCats();
}

function renderFooterCats() {
  const isBrand = document.body.dataset.page === 'brand';
  document.querySelectorAll('#footerCats').forEach(ul => {
    ul.innerHTML = CATS.map(c =>
      '<li>' + (isBrand
        ? '<span style="cursor:default">' + c[LANG] + '</span>'
        : '<a href="products.html?cat=' + c.key + '">' + c[LANG] + '</a>') +
      '</li>'
    ).join('') +
    (isBrand ? '' : '<li><a href="products.html">' + t('navAll') + '</a></li>');
  });
}

function setLang(l) {
  LANG = l;
  try { localStorage.setItem('fanflo_lang', l); } catch (e) { /* noop */ }
  const savedY = window.scrollY || 0;
  applyLang();
  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'products') renderProducts();
  if (page === 'product') initProduct();
  if (page === 'cart') initCart();
  if (page === 'checkout') initCheckout();
  requestAnimationFrame(() => window.scrollTo(0, savedY));
}

/* ---------- 通用 ---------- */

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function cardHTML(p) {
  return '<article class="card fade-up"><a href="product.html?id=' + p.id + '">' +
    '<div class="thumb">' + (p.isNew ? '<span class="tag">' + t('tagNew') + '</span>' : '') +
    '<img class="img-a" src="' + p.img + '" alt="' + esc(p.name.en) + '" loading="lazy">' +
    (p.img2 ? '<img class="img-b" src="' + p.img2 + '" alt="" loading="lazy">' : '') +
    '<button type="button" class="quick-add" data-quick="' + p.id + '">' + t('qaBtn') + '</button>' +
    '</div>' +
    '<div class="card-body"><h3>' + esc(p.name[LANG]) + '</h3>' +
    '<p class="mat">' + esc(p.material[LANG]) + '</p>' +
    '<p class="price">' + fmt(p.price) + '</p></div></a></article>';
}

function catName(key) {
  const c = CATS.find(c => c.key === key);
  return c ? c[LANG] : key;
}

/* ---------- 滚动入场 ---------- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up, .line-mask, .reveal-img').forEach(el => obs.observe(el));
}

/* ---------- 数字滚动 ---------- */
function initCountUp() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    if (!target && target !== 0) return;
    const suffix = el.dataset.suffix || '';
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        obs.unobserve(el);
        const dur = 1100;
        const start = performance.now();
        const tick = now => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });
}

/* ---------- 加购飞入购物车 ---------- */
function flyToCart(fromEl) {
  const badge = document.getElementById('cartBadge');
  if (!badge || !fromEl) return;
  const r1 = fromEl.getBoundingClientRect();
  const r2 = badge.getBoundingClientRect();
  const dot = document.createElement('span');
  dot.className = 'fly-dot';
  dot.style.left = (r1.left + r1.width / 2) + 'px';
  dot.style.top = (r1.top + r1.height / 2) + 'px';
  document.body.appendChild(dot);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dot.style.transform = 'translate(' + (r2.left - r1.left + r2.width / 2) + 'px, ' + (r2.top - r1.top + r2.height / 2) + 'px) scale(0.15)';
      dot.style.opacity = '0.2';
    });
  });
  setTimeout(() => dot.remove(), 750);
}

/* ---------- 首页 ---------- */
function initBrand() {
  const grid = document.getElementById('lineGrid');
  if (grid) {
    grid.innerHTML = CATS.map((c, i) => {
      const p = PRODUCTS.find(x => x.cat === c.key);
      return '<div class="card fade-up d' + ((i % 4) + 1) + '" role="link" tabindex="0">' +
        '<div class="thumb"><img class="img-a" src="' + (p ? p.img : 'assets/img/hero.jpg') + '" alt="' + c.en + '" loading="lazy"></div>' +
        '<div class="card-body"><h3>' + c[LANG] + '</h3><p class="mat">' + c.en + '</p></div></div>';
    }).join('');
  }
  initReveal();
}

function initHome() {
  const catNav = document.getElementById('catNav');
  if (catNav) {
    catNav.innerHTML = CATS.map((c, i) => {
      const p = PRODUCTS.find(x => x.cat === c.key);
      return '<a class="cat-block fade-up d' + (i + 1) + '" href="products.html?cat=' + c.key + '">' +
        '<div class="cat-img"><img src="' + (p ? p.img : 'assets/img/hero.jpg') + '" alt="' + c.en + '" loading="lazy"></div>' +
        '<div class="cat-meta"><span class="label">0' + (i + 1) + ' / 04</span><h3>' + c[LANG] + '</h3></div>' +
      '</a>';
    }).join('');
  }
  const cats = document.getElementById('cats');
  if (cats) {
    cats.innerHTML = CATS.map((c, i) =>
      '<a class="cat fade-up d' + (i + 1) + '" href="products.html?cat=' + c.key + '">' +
      '<span class="idx">0' + (i + 1) + '</span><span>' + c[LANG] + '</span></a>'
    ).join('');
  }

  const grid = document.getElementById('newGrid');
  if (grid) grid.innerHTML = PRODUCTS.filter(p => p.isNew).map(cardHTML).join('');

  const form = document.getElementById('newsForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('newsEmail');
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        const msg = document.getElementById('newsMsg');
        if (msg) { msg.style.display = 'block'; msg.textContent = t('newsOk'); }
        form.reset();
      }
    });
  }
  initReveal();
}

/* ---------- 商品列表 ---------- */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const bar = document.getElementById('filterBar');
  const count = document.getElementById('resultCount');
  const params = new URLSearchParams(location.search);
  const cat = params.get('cat') || '';
  const sort = params.get('sort') || 'new';

  let list = cat ? PRODUCTS.filter(p => p.cat === cat) : PRODUCTS.slice();
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sort === 'new') list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  grid.innerHTML = list.map(cardHTML).join('');
  if (count) count.textContent = list.length + ' ' + t('pCount');
  if (bar) {
    const opts = [{ key: '', label: t('pAll') }].concat(CATS.map(c => ({ key: c.key, label: c[LANG] })));
    bar.innerHTML = opts.map(o =>
      '<button class="filter-btn' + (o.key === cat ? ' active' : '') + '" data-cat="' + o.key + '">' + o.label + '</button>'
    ).join('');
  }
  const sortSel = document.getElementById('sortSel');
  if (sortSel) sortSel.value = sort;
  initReveal();
}

function initProducts() {
  renderProducts();
  const bar = document.getElementById('filterBar');
  if (bar) {
    bar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const url = new URL(location.href);
      if (btn.dataset.cat) url.searchParams.set('cat', btn.dataset.cat);
      else url.searchParams.delete('cat');
      history.replaceState(null, '', url);
      renderProducts();
    });
  }
  const sortSel = document.getElementById('sortSel');
  if (sortSel) {
    sortSel.addEventListener('change', () => {
      const url = new URL(location.href);
      url.searchParams.set('sort', sortSel.value);
      history.replaceState(null, '', url);
      renderProducts();
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
    wrap.innerHTML = '<div class="notfound fade-up in"><h1>' + t('nfTitle') + '</h1><p>' + t('nfText') + '</p>' +
      '<p style="margin-top:20px"><a class="btn btn-primary" href="products.html">' + t('backAll') + '</a></p></div>';
    return;
  }

  document.title = p.name.en + ' — FanFlo';

  wrap.innerHTML =
    '<div class="breadcrumb fade-up in"><a href="index.html">' + t('crumbHome') + '</a><span class="sep">/</span>' +
    '<a href="products.html?cat=' + p.cat + '">' + esc(catName(p.cat)) + '</a>' +
    '<span class="sep">/</span>' + esc(p.name[LANG]) + '</div>' +
    '<div class="detail">' +
      '<div class="detail-art fade-up"><img src="' + p.img + '" alt="' + esc(p.name.en) + '" loading="eager"></div>' +
      '<div class="detail-info fade-up d1">' +
        '<h1>' + esc(p.name[LANG]) + '</h1>' +
        '<p class="mat">' + esc(p.material[LANG]) + '</p>' +
        '<p class="price">' + fmt(p.price) + '</p>' +
        '<p class="desc">' + esc(p.desc[LANG]) + '</p>' +
        '<div class="field"><label>' + t('size') + '</label><div class="seg" id="sizeSeg">' +
          ['S', 'M', 'L', 'XL'].map(s => '<button type="button" data-size="' + s + '">' + s + '</button>').join('') +
        '</div><p class="err" id="sizeErr" style="display:none;color:var(--danger);font-size:12px;margin-top:6px">' + t('pickSize') + '</p></div>' +
        '<div class="field"><label>' + t('qty') + '</label><div class="qty">' +
          '<button type="button" id="qtyMinus" aria-label="minus">−</button>' +
          '<span id="qtyNum">1</span>' +
          '<button type="button" id="qtyPlus" aria-label="plus">+</button>' +
        '</div></div>' +
        '<div class="detail-actions">' +
          '<button class="btn btn-primary" id="addBtn">' + t('add') + '</button>' +
        '</div>' +
        '<p class="add-msg" id="addMsg">' + t('added') + '<a href="cart.html" style="text-decoration:underline">' + t('viewCart') + '</a></p>' +
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
    size = btn.dataset.size;
    sizeSeg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    sizeErr.style.display = 'none';
  });

  document.getElementById('qtyMinus').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    qtyNum.textContent = qty;
    bump(qtyNum);
  });
  document.getElementById('qtyPlus').addEventListener('click', () => {
    qty = Math.min(99, qty + 1);
    qtyNum.textContent = qty;
    bump(qtyNum);
  });
  function bump(el) { el.classList.add('bump'); setTimeout(() => el.classList.remove('bump'), 200); }

  document.getElementById('addBtn').addEventListener('click', () => {
    if (!size) { sizeErr.style.display = 'block'; return; }
    Cart.add(p.id, size, qty);
    updateBadge();
    addMsg.style.display = 'block';
    flyToCart(document.getElementById('addBtn'));
    setTimeout(() => { addMsg.style.display = 'none'; }, 3200);
  });
  initReveal();
}

/* ---------- 购物车 ---------- */
function initCart(animate) {
  const wrap = document.getElementById('cartWrap');
  if (!wrap) return;

  const items = Cart.items();

  if (items.length === 0) {
    wrap.innerHTML = '<div class="cart-empty fade-up in"><p class="big">' + t('cEmptyBig') + '</p>' +
      '<p>' + t('cEmptyText') + '</p>' +
      '<p style="margin-top:24px"><a class="btn btn-primary" href="products.html">' + t('cEmptyBtn') + '</a></p></div>';
    return;
  }

  const subtotal = Cart.total();
  const ship = shippingFee(subtotal);

  wrap.innerHTML =
    '<div class="cart-layout">' +
      '<div class="cart-items" id="cartItems"></div>' +
      '<aside class="summary fade-up in">' +
        '<h3>' + t('sumTitle') + '</h3>' +
        '<div class="free-ship">' + (ship === 0 ? t('freeShipGot') : t('freeShipMsg').replace('{n}', fmt(FREE_SHIP - subtotal))) + '</div>' +
        '<div class="ship-bar"><i style="width:' + Math.min(100, Math.round(subtotal / FREE_SHIP * 100)) + '%"></i></div>' +
        '<div class="sum-row items"><span>' + items.length + ' ' + t('pCount') + '</span><span>' + fmt(subtotal) + '</span></div>' +
        '<div class="sum-row"><span>' + t('ship') + '</span><span>' + (ship === 0 ? t('free') : fmt(ship)) + '</span></div>' +
        '<div class="sum-row total"><span>' + t('total') + '</span><span class="price">' + fmt(subtotal + ship) + '</span></div>' +
        '<a class="btn btn-dark btn-block" href="checkout.html">' + t('checkout') + '</a>' +
        '<a class="continue" href="products.html">← ' + t('cEmptyBtn') + '</a>' +
      '</aside>' +
    '</div>';

  const box = document.getElementById('cartItems');
  box.innerHTML = items.map((i, idx) =>
    '<div class="cart-item' + (animate === false ? ' re-render' : '') + '" style="animation-delay:' + (idx * 0.05) + 's">' +
      '<div class="ci-thumb">' + productImage(i.product, '') + '</div>' +
      '<div class="ci-main">' +
        '<div class="ci-name">' + esc(i.product.name[LANG]) + '</div>' +
        '<div class="ci-meta">' + t('metaSize') + ' ' + esc(i.size) + ' · ' + esc(i.product.material[LANG]) + '</div>' +
        '<div class="ci-qty">' +
          '<button type="button" data-act="minus" data-id="' + i.product.id + '" data-size="' + esc(i.size) + '" aria-label="minus">−</button>' +
          '<span class="ci-qty-num">' + i.qty + '</span>' +
          '<button type="button" data-act="plus" data-id="' + i.product.id + '" data-size="' + esc(i.size) + '" aria-label="plus">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="ci-right">' +
        '<button class="ci-remove" data-act="del" data-id="' + i.product.id + '" data-size="' + esc(i.size) + '" aria-label="Remove">×</button>' +
        '<span class="ci-price">' + fmt(i.line) + '</span>' +
      '</div>' +
    '</div>'
  ).join('');

  box.addEventListener('click', e => {
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const id = parseInt(btn.dataset.id, 10);
    const size = btn.dataset.size;
    const found = items.find(i => i.product.id === id && i.size === size);
    if (!found) return;
    if (btn.dataset.act === 'plus') Cart.setQty(id, size, found.qty + 1);
    if (btn.dataset.act === 'minus') Cart.setQty(id, size, found.qty - 1);
    if (btn.dataset.act === 'del') Cart.remove(id, size);
    updateBadge();
    initCart(false);
  });
}

/* ---------- 结账 ---------- */
function initCheckout() {
  const wrap = document.getElementById('checkoutWrap');
  if (!wrap) return;

  const items = Cart.items();

  if (items.length === 0) {
    wrap.innerHTML = '<div class="cart-empty fade-up in"><p class="big">' + t('coEmptyBig') + '</p>' +
      '<p><a class="btn btn-primary" style="margin-top:20px" href="products.html">' + t('coEmptyBtn') + '</a></p></div>';
    return;
  }

  const subtotal = Cart.total();
  const ship = shippingFee(subtotal);

  wrap.innerHTML =
    '<div class="checkout-layout">' +
      '<form id="checkoutForm" novalidate>' +
        '<div class="form-card">' +
          '<h2>' + t('shipInfo') + '</h2>' +
          '<div class="form-row">' +
            '<div class="form-group"><label for="fName">' + t('fName') + '</label><input id="fName" type="text" autocomplete="name"><p class="err">' + t('errReq') + '</p></div>' +
            '<div class="form-group"><label for="fPhone">' + t('fPhone') + '</label><input id="fPhone" type="tel" autocomplete="tel"><p class="err">' + t('errPhone') + '</p></div>' +
          '</div>' +
          '<div class="form-group"><label for="fAddr">' + t('fAddr') + '</label><input id="fAddr" type="text" autocomplete="street-address"><p class="err">' + t('errReq') + '</p></div>' +
          '<div class="form-row">' +
            '<div class="form-group"><label for="fCity">' + t('fCity') + '</label><input id="fCity" type="text" autocomplete="address-level2"><p class="err">' + t('errReq') + '</p></div>' +
            '<div class="form-group"><label for="fZip">' + t('fZip') + '</label><input id="fZip" type="text" autocomplete="postal-code"><p class="err">' + t('errReq') + '</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="form-card">' +
          '<h2>' + t('shipMethod') + '</h2>' +
          '<div class="pay-opts">' +
            '<label class="pay-opt"><input type="radio" name="ship" value="std" checked><span><span class="po-name">' + t('shipStd') + '</span></span></label>' +
            '<label class="pay-opt"><input type="radio" name="ship" value="fast"><span><span class="po-name">' + t('shipFast') + '</span><span class="po-note" style="display:block">+¥15</span></span></label>' +
          '</div>' +
        '</div>' +
        '<div class="form-card">' +
          '<h2>' + t('payMethod') + '</h2>' +
          '<div class="pay-opts" id="payOpts">' +
            '<label class="pay-opt"><input type="radio" name="pay" value="card" checked><span><span class="po-name">' + t('payCard') + '</span></span></label>' +
            '<label class="pay-opt"><input type="radio" name="pay" value="paypal"><span><span class="po-name">' + t('payPaypal') + '</span></span></label>' +
            '<label class="pay-opt"><input type="radio" name="pay" value="cod"><span><span class="po-name">' + t('payCod') + '</span></span></label>' +
          '</div>' +
          '<div id="cardFields" style="margin-top:16px">' +
            '<div class="form-group"><label for="fCard">' + t('cardNo') + '</label><input id="fCard" type="text" inputmode="numeric" maxlength="19" placeholder="1234 5678 9012 3456"><p class="err">' + t('errCard') + '</p></div>' +
            '<div class="form-row">' +
              '<div class="form-group"><label for="fExp">' + t('exp') + '</label><input id="fExp" type="text" maxlength="5" placeholder="MM/YY"><p class="err">' + t('errExp') + '</p></div>' +
              '<div class="form-group"><label for="fCvc">' + t('cvc') + '</label><input id="fCvc" type="text" inputmode="numeric" maxlength="4"><p class="err">' + t('errCvc') + '</p></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn-primary btn-block" type="submit" style="min-height:54px">' + t('placeOrder') + fmt(subtotal + ship) + '</button>' +
      '</form>' +
      '<aside class="summary fade-up in">' +
        '<h3>' + t('sumTitle') + '</h3>' +
        items.map(i => '<div class="sum-row"><span>' + esc(i.product.name[LANG]) + ' ×' + i.qty + '</span><span>' + fmt(i.line) + '</span></div>').join('') +
        '<div class="sum-row"><span>' + t('sub') + '</span><span>' + fmt(subtotal) + '</span></div>' +
        '<div class="sum-row"><span>' + t('ship') + '</span><span>' + (ship === 0 ? t('free') : fmt(ship)) + '</span></div>' +
        '<div class="sum-row total"><span>' + t('total') + '</span><span class="price">' + fmt(subtotal + ship) + '</span></div>' +
      '</aside>' +
    '</div>' +
    '<div class="success-box" id="successBox" style="display:none">' +
      '<div class="tick">✓</div>' +
      '<h1>' + t('okTitle') + '</h1>' +
      '<p>' + t('okText') + ' <span class="order-no" id="orderNo"></span></p>' +
      '<a class="btn btn-primary" href="products.html">' + t('okBtn') + '</a>' +
    '</div>';

  const payOpts = document.getElementById('payOpts');
  const cardFields = document.getElementById('cardFields');
  payOpts.addEventListener('change', e => {
    const v = e.target.value;
    cardFields.style.display = v === 'card' ? 'block' : 'none';
    payOpts.querySelectorAll('.pay-opt').forEach(el => el.classList.toggle('active', el.querySelector('input').checked));
  });
  payOpts.querySelectorAll('.pay-opt').forEach(el => el.classList.add('active'));

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
  initReveal();
}

/* ---------- 视差 ---------- */
function initParallax() {
  const els = document.querySelectorAll('.parallax');
  if (!els.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      els.forEach(el => {
        const speed = parseFloat(el.dataset.speed || '0.2');
        el.style.transform = 'translate3d(0, ' + (y * speed) + 'px, 0)';
      });
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- 启动 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  applyLang();

  const sw = document.getElementById('langSwitch');
  if (sw) {
    sw.addEventListener('click', e => {
      const btn = e.target.closest('button[data-lang]');
      if (btn && btn.dataset.lang !== LANG) setLang(btn.dataset.lang);
    });
  }

  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'brand') initBrand();
  if (page === 'products') initProducts();
  if (page === 'product') initProduct();
  if (page === 'cart') initCart();
  if (page === 'checkout') initCheckout();
  initParallax();
  initCountUp();

  document.addEventListener('click', e => {
    const btn = e.target.closest('.quick-add');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const id = parseInt(btn.dataset.quick, 10);
    if (!id) return;
    Cart.add(id, 'M', 1);
    updateBadge();
    flyToCart(btn);
    const orig = btn.textContent;
    btn.textContent = '✓';
    btn.classList.add('done');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('done'); }, 1200);
  });
});
