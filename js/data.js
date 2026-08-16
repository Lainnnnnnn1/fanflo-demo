/* 织 WEAVE — 商品数据 + SVG 生成 */

const CATS = [
  { name: '毛衣', icon: 'crew' },
  { name: '开衫', icon: 'cardigan' },
  { name: '围巾', icon: 'scarf' },
  { name: '针织', icon: 'knit' }
];

const PRODUCTS = [
  { id: 1, name: '燕麦色圆领羊毛衫', cat: '毛衣', price: 268, material: '100% 美利奴羊毛', color: '#C9B8A3', variant: 'crew', isNew: true,
    desc: '经典圆领，桶形剪裁，单穿不扎。机器织完水洗定型，领口袖口不会越洗越松。' },
  { id: 2, name: '驼色高领毛衣', cat: '毛衣', price: 298, material: '100% 美利奴羊毛', color: '#B08D6A', variant: 'turtle', isNew: false,
    desc: '高领翻折两穿，冬天挡风靠它。肩线正常落肩，内搭外穿都不鼓包。' },
  { id: 3, name: '炭灰绞花毛衣', cat: '毛衣', price: 328, material: '羊毛混纺', color: '#6B6460', variant: 'crew', isNew: true,
    desc: '绞花是老师傅的老手艺，一件要过机两遍。比平纹厚实，适合北方过冬。' },
  { id: 4, name: '奶白开衫', cat: '开衫', price: 258, material: '100% 美利奴羊毛', color: '#EDE4D6', variant: 'cardigan', isNew: true,
    desc: '门襟直下，扣子用天然牛角扣。春秋单穿，冬天当外套内层。' },
  { id: 5, name: '酒红 V 领针织衫', cat: '毛衣', price: 238, material: '羊毛混纺', color: '#7E3B34', variant: 'vneck', isNew: false,
    desc: 'V 领拉长脖颈线条，酒红色对肤色宽容。修身版，面料含弹力纤维。' },
  { id: 6, name: '深蓝羊毛围巾', cat: '围巾', price: 128, material: '100% 美利奴羊毛', color: '#3E4A5A', variant: 'scarf', isNew: true,
    desc: '180cm 长，双面同色，流苏手织收边。机洗不缩水，晾干不变形。' },
  { id: 7, name: '米杏针织半裙', cat: '针织', price: 218, material: '羊毛混纺', color: '#D8C7AE', variant: 'knit', isNew: false,
    desc: '直筒 A 字，腰头内置松紧，S-XL 都能穿。长度过膝，秋冬配靴子正好。' },
  { id: 8, name: '墨绿圆领羊毛衫', cat: '毛衣', price: 288, material: '100% 美利奴羊毛', color: '#4A5A48', variant: 'crew', isNew: false,
    desc: '深墨绿，阳光下能看出一点光泽。男女同款，按胸围选码即可。' }
];

function fmt(n) { return '¥' + n; }

function shade(hex, pct) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + pct));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + pct));
  const b = Math.max(0, Math.min(255, (n & 0xff) + pct));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/* 毛衣/针织品类 SVG：衣架 + 织物主体 */
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
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="羊毛针织品示意图">
    <rect x="${w*0.30}" y="${h*0.26}" width="${w*0.40}" height="${h*0.52}" rx="${w*0.05}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>
    <rect x="${w*0.16}" y="${h*0.30}" width="${w*0.17}" height="${h*0.42}" rx="${w*0.04}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>
    <rect x="${w*0.67}" y="${h*0.30}" width="${w*0.17}" height="${h*0.42}" rx="${w*0.04}" fill="${color}" stroke="${dark}" stroke-width="${stroke}"/>
    <path d="M${w*0.46} ${h*0.26} q${w*0.04} ${h*0.06} 0 ${h*0.06} q-${w*0.04} -${h*0.06} 0 -${h*0.06} z" fill="${light}"/>
    ${top}${buttons}${hem}
  </svg>`;
}

/* 围巾 SVG */
function scarfSVG(color, w, h) {
  const dark = shade(color, -22);
  const fringe = shade(color, 10);
  let f = '';
  for (let i = 0; i < 7; i++) {
    f += `<line x1="${w*(0.40 + i*0.033)}" y1="${h*0.72}" x2="${w*(0.40 + i*0.033)}" y2="${h*0.78}" stroke="${fringe}" stroke-width="${w*0.008}"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="羊毛围巾示意图">
    <path d="M${w*0.26} ${h*0.50} q${w*0.08} -${h*0.14} ${w*0.24} -${h*0.10} q${w*0.14} ${h*0.04} ${w*0.22} -${h*0.02} l-${w*0.02} ${h*0.10} q-${w*0.08} ${h*0.06} -${w*0.22} ${h*0.02} q-${w*0.12} -${h*0.03} -${w*0.20} ${h*0.10} z" fill="${color}" stroke="${dark}" stroke-width="${w*0.012}"/>
    ${f}
  </svg>`;
}

/* 统一入口：按品类返回 SVG */
function sweaterSVG(color, variant, label) {
  const w = 300, h = 375;
  if (variant === 'scarf') return scarfSVG(color, w, h);
  return knitSVG(color, variant || 'crew', w, h);
}
