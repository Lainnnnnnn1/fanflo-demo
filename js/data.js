/* FanFlo 繁花毛织 — 商品数据（中英双语） */

const CATS = [
  { key: 'sweaters', en: 'Sweaters', zh: '毛衣', icon: 'crew' },
  { key: 'cardigans', en: 'Cardigans', zh: '开衫', icon: 'cardigan' },
  { key: 'scarves', en: 'Scarves', zh: '围巾', icon: 'scarf' },
  { key: 'knitwear', en: 'Knitwear', zh: '针织', icon: 'knit' }
];

const PRODUCTS = [
  { id: 1, cat: 'sweaters', price: 268, img: 'assets/img/p1.jpg', img2: 'assets/img/b1.jpg', color: '#C9B8A3', variant: 'crew', isNew: true,
    name: { en: 'Knitted Sweater', zh: '针织毛衣' },
    material: { en: 'Merino Wool', zh: '美利奴羊毛' },
    desc: { en: 'Knitted, washed and inspected on our own floor. Merino and wool blends, in the colors we keep in stock.',
            zh: '自家产线直出，水洗定型，经手检验才发货。美利奴羊毛与混纺，常备色号。' } },
  { id: 2, cat: 'cardigans', price: 298, img: 'assets/img/p2.jpg', img2: 'assets/img/b2.jpg', color: '#B08D6A', variant: 'turtle', isNew: false,
    name: { en: 'Knitted Cardigan', zh: '针织开衫' },
    material: { en: 'Wool Blend', zh: '羊毛混纺' },
    desc: { en: 'A cardigan is the easiest thing we make — which is why we make it well. Private-label colors available.',
            zh: '开衫是我们做起来最省事的一类——所以做得最稳。可定制颜色。' } },
  { id: 3, cat: 'scarves', price: 328, img: 'assets/img/p3.jpg', img2: 'assets/img/b3.jpg', color: '#6B6460', variant: 'crew', isNew: true,
    name: { en: 'Knitted Vest', zh: '针织背心' },
    material: { en: 'Wool Blend', zh: '羊毛混纺' },
    desc: { en: 'Vests moved from trend to staple. Ours hold their shape through a season of wear.',
            zh: '背心从潮流款变成了常青款。我们做的经得起穿一季。' } },
  { id: 4, cat: 'scarves', price: 258, img: 'assets/img/p4.jpg', img2: 'assets/img/b4.jpg', color: '#EDE4D6', variant: 'cardigan', isNew: true,
    name: { en: 'Knitted Dress', zh: '针织连衣裙' },
    material: { en: 'Merino Wool', zh: '美利奴羊毛' },
    desc: { en: 'Knit dresses, cut and sewn in-house. Order ten pieces or ten thousand.',
            zh: '针织裙，裁、缝都在自家车间。十件起订，一万件也行。' } },
  { id: 5, cat: 'knitwear', price: 238, img: 'assets/img/p5.jpg', img2: 'assets/img/b5.jpg', color: '#7E3B34', variant: 'vneck', isNew: false,
    name: { en: 'Knitted Pullover', zh: '套头毛衣' },
    material: { en: 'Merino Wool', zh: '美利奴羊毛' },
    desc: { en: 'The classic pullover, garment-washed so it stays soft. Bulk orders ship within 2–3 business days.',
            zh: '经典套头，水洗定型不缩水。批量订单 2-3 个工作日发货。' } },
  { id: 6, cat: 'knitwear', price: 128, img: 'assets/img/p6.jpg', img2: 'assets/img/b6.jpg', color: '#3E4A5A', variant: 'scarf', isNew: true,
    name: { en: 'Knitted Set', zh: '针织套装' },
    material: { en: 'Wool Blend', zh: '羊毛混纺' },
    desc: { en: 'Coordinated sets that sell themselves. We do the matching so your customers don\'t have to.',
            zh: '成套卖，顾客不用自己搭配。配色我们来配。' } },
  { id: 7, cat: 'knitwear', price: 218, img: 'assets/img/p7.jpg', img2: 'assets/img/b7.jpg', color: '#D8C7AE', variant: 'knit', isNew: false,
    name: { en: 'Knitted Beach Wear', zh: '针织沙滩装' },
    material: { en: 'Cotton Blend', zh: '棉混纺' },
    desc: { en: 'Knitted beachwear — cover-ups that dry fast and photograph well.',
            zh: '沙滩罩衫——干得快，上镜好。' } },
  { id: 8, cat: 'sweaters', price: 288, img: 'assets/img/p8.jpg', img2: 'assets/img/b8.jpg', color: '#4A5A48', variant: 'crew', isNew: false,
    name: { en: 'Knitted Home Wear', zh: '针织家居服' },
    material: { en: 'Cotton Blend', zh: '棉混纺' },
    desc: { en: 'The category that keeps growing. Soft, warm, easy-care knitwear for the sofa.',
            zh: '越卖越好的品类。软、暖、好打理，沙发上的针织。' } }
];

function fmt(n) { return '¥' + n; }

/* SVG 兜底图（图片加载失败时使用） */
function shade(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + pct));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + pct));
  const b = Math.max(0, Math.min(255, (n & 0xff) + pct));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function knitSVG(color, variant, w, h) {
  const dark = shade(color, -22);
  const light = shade(color, 12);
  const stroke = Math.max(2, Math.round(w / 90));
  let top = '';
  if (variant === 'turtle') {
    top = `<rect x="${w*0.40}" y="${h*0.30}" width="${w*0.20}" height="${h*0.16}" rx="${w*0.03}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>`;
  } else if (variant === 'vneck') {
    top = `<path d="M${w*0.40} ${h*0.42} L${w*0.50} ${h*0.52} L${w*0.60} ${h*0.42}" fill="none" stroke="${dark}" stroke-width="${stroke}"/>`;
  } else if (variant === 'cardigan') {
    top = `<line x1="${w*0.50}" y1="${h*0.40}" x2="${w*0.50}" y2="${h*0.78}" stroke="${dark}" stroke-width="${stroke}"/>`;
  }
  const buttons = variant === 'cardigan'
    ? `<circle cx="${w*0.50}" cy="${h*0.52}" r="${w*0.014}" fill="${light}"/><circle cx="${w*0.50}" cy="${h*0.62}" r="${w*0.014}" fill="${light}"/><circle cx="${w*0.50}" cy="${h*0.72}" r="${w*0.014}" fill="${light}"/>`
    : '';
  const hem = `<path d="M${w*0.30} ${h*0.78} h${w*0.40}" stroke="${dark}" stroke-width="${stroke}" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="knit placeholder">
    <rect x="${w*0.30}" y="${h*0.26}" width="${w*0.40}" height="${h*0.52}" rx="${w*0.05}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>
    <rect x="${w*0.16}" y="${h*0.30}" width="${w*0.17}" height="${h*0.42}" rx="${w*0.04}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>
    <rect x="${w*0.67}" y="${h*0.30}" width="${w*0.17}" height="${h*0.42}" rx="${w*0.04}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>
    <path d="M${w*0.46} ${h*0.26} q${w*0.04} ${h*0.06} 0 ${h*0.06} q-${w*0.04} -${h*0.06} 0 -${h*0.06} z" fill="${light}"/>
    ${top}${buttons}${hem}
  </svg>`;
}

function scarfSVG(color, w, h) {
  const dark = shade(color, -22);
  const fringe = shade(color, 10);
  let f = '';
  for (let i = 0; i < 7; i++) {
    f += `<line x1="${w*(0.40 + i*0.033)}" y1="${h*0.72}" x2="${w*(0.40 + i*0.033)}" y2="${h*0.78}" stroke="${fringe}" stroke-width="${w*0.008}"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="scarf placeholder">
    <path d="M${w*0.26} ${h*0.50} q${w*0.08} -${h*0.14} ${w*0.24} -${h*0.10} q${w*0.14} ${h*0.04} ${w*0.22} -${h*0.02} l-${w*0.02} ${h*0.10} q-${w*0.08} ${h*0.06} -${w*0.22} ${h*0.02} q-${w*0.12} -${h*0.03} -${w*0.20} ${h*0.10} z" fill="${color}" stroke="${dark}" stroke-width="${w*0.012}"/>
    ${f}
  </svg>`;
}

function sweaterSVG(color, variant, label) {
  const w = 300, h = 375;
  if (variant === 'scarf') return scarfSVG(color, w, h);
  return knitSVG(color, variant || 'crew', w, h);
}

/* 图片渲染：优先真实图，失败回退 SVG */
function productImage(p, cls) {
  return '<img class="' + cls + '" src="' + p.img + '" alt="' + esc(p.name.en) + '" loading="lazy" ' +
    'onerror="this.outerHTML = \'' + sweaterSVG(p.color, p.variant, p.name.en).replace(/'/g, "\\'") + '\'">';
}
