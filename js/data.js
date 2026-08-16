/* FanFlo 繁花毛织 — 商品数据（中英双语） */

const CATS = [
  { key: 'sweaters', en: 'Sweaters', zh: '毛衣', icon: 'crew' },
  { key: 'cardigans', en: 'Cardigans', zh: '开衫', icon: 'cardigan' },
  { key: 'scarves', en: 'Scarves', zh: '围巾', icon: 'scarf' },
  { key: 'knitwear', en: 'Knitwear', zh: '针织', icon: 'knit' }
];

const PRODUCTS = [
  { id: 1, cat: 'sweaters', price: 268, img: 'assets/img/p1.jpg', img2: 'assets/img/b1.jpg', color: '#C9B8A3', variant: 'crew', isNew: true,
    name: { en: 'Oat Crew-Neck Sweater', zh: '燕麦色圆领羊毛衫' },
    material: { en: '100% Merino Wool', zh: '100% 美利奴羊毛' },
    desc: { en: 'Classic crew neck, relaxed fit, no itch. Garment-washed, so the collar and cuffs keep their shape wash after wash.',
            zh: '经典圆领，桶形剪裁，单穿不扎。机器织完水洗定型，领口袖口不会越洗越松。' } },
  { id: 2, cat: 'cardigans', price: 298, img: 'assets/img/p2.jpg', img2: 'assets/img/b2.jpg', color: '#B08D6A', variant: 'turtle', isNew: false,
    name: { en: 'Patterned Cardigan', zh: '驼色花纹开衫' },
    material: { en: 'Merino Wool Blend', zh: '美利奴羊毛混纺' },
    desc: { en: 'Mid-weight, machine-knit, hand-finished. The kind of thing you throw on and forget you are wearing.',
            zh: '中厚款，机织手收边。披上就忘了自己穿着它——花纹耐看，驼色衬肤色。' } },
  { id: 3, cat: 'scarves', price: 328, img: 'assets/img/p3.jpg', img2: 'assets/img/b3.jpg', color: '#6B6460', variant: 'crew', isNew: true,
    name: { en: 'Merino Scarf, Deep Blue', zh: '深蓝美利奴羊毛围巾' },
    material: { en: '100% Merino Wool', zh: '100% 美利奴羊毛' },
    desc: { en: '180cm, double-faced, hand-fringed. Machine-washable, dries flat, keeps its drape.',
            zh: '180cm 长，双面同色，流苏手织收边。机洗不缩水，晾干不变形。' } },
  { id: 4, cat: 'scarves', price: 258, img: 'assets/img/p4.jpg', img2: 'assets/img/b4.jpg', color: '#EDE4D6', variant: 'cardigan', isNew: true,
    name: { en: 'Wrapped Scarf, Neutral', zh: '奶白披肩围巾' },
    material: { en: 'Merino Wool Blend', zh: '美利奴羊毛混纺' },
    desc: { en: 'The one you grab when the wind picks up. Soft against the neck, wide enough to double-wrap.',
            zh: '起风时随手抓的那条。贴脖子不扎，够宽，能绕两圈。' } },
  { id: 5, cat: 'knitwear', price: 238, img: 'assets/img/p5.jpg', img2: 'assets/img/b5.jpg', color: '#7E3B34', variant: 'vneck', isNew: false,
    name: { en: 'Yard Goods, Wool Boucle', zh: '酒红羊毛粗花呢面料' },
    material: { en: 'Wool Boucle', zh: '羊毛圈圈纱' },
    desc: { en: 'From the mill floor: our boucle in three tones. Sample yardage, first quality, ends and pieces.',
            zh: '织厂直出：三色羊毛圈圈纱样布。一等品，剪零头。' } },
  { id: 6, cat: 'knitwear', price: 128, img: 'assets/img/p6.jpg', img2: 'assets/img/b6.jpg', color: '#3E4A5A', variant: 'scarf', isNew: true,
    name: { en: 'Merino Yarn, Cone', zh: '美利奴羊毛纱线' },
    material: { en: '100% Merino Wool', zh: '100% 美利奴羊毛' },
    desc: { en: 'The yarn we knit with, sold as-is. Hand-knitters and repair knitters, this one is for you.',
            zh: '我们织毛衣用的同款纱线，原样出售。手工编织、补织的人，这是给你们的。' } },
  { id: 7, cat: 'knitwear', price: 218, img: 'assets/img/p7.jpg', img2: 'assets/img/b7.jpg', color: '#D8C7AE', variant: 'knit', isNew: false,
    name: { en: 'Striped Stretch Knit Top', zh: '米杏条纹针织上衣' },
    material: { en: 'Merino Wool Blend', zh: '美利奴羊毛混纺' },
    desc: { en: 'Stripes that do not lie. Slim through the body, a little give in the rib, hem sits where it should.',
            zh: '条纹不骗人。修身版型，罗纹有弹力，下摆规规矩矩。' } },
  { id: 8, cat: 'sweaters', price: 288, img: 'assets/img/p8.jpg', img2: 'assets/img/b8.jpg', color: '#4A5A48', variant: 'crew', isNew: false,
    name: { en: 'Autumn Walk, Worn In', zh: '秋日漫步穿搭场景' },
    material: { en: 'Merino Wool', zh: '美利奴羊毛' },
    desc: { en: 'How we picture our sweaters: on a walk, not on a hanger. Looser, warmer, lived-in.',
            zh: '我们想象自家毛衣的样子：穿在身上散步，而不是挂在衣架上。宽松、暖和、穿出自己的生活痕迹。' } }
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
