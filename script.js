(async function(){
  const res = await fetch('./roadmap.json');
  const data = await res.json();
  const container = document.getElementById('canvas');

  const W = 1200; const H = 3200;
  const accents = data.meta.style.accents;

  function el(tag, attrs = {}, children = []) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [k,v] of Object.entries(attrs)) {
      e.setAttribute(k, v);
    }
    for (const c of children) e.appendChild(c);
    return e;
  }

  function text(x, y, content, cls) {
    const t = el('text', {x:String(x), y:String(y), class:cls});
    t.textContent = content;
    return t;
  }

  const svg = el('svg', {xmlns:'http://www.w3.org/2000/svg', viewBox:`0 0 ${W} ${H}`, width:String(W), height:String(H)});
  svg.style.background = data.meta.style.bg;

  // Title
  svg.appendChild(text(60, 60, data.meta.title, 'header'));

  // Styles
  const style = el('style', {}, []);
  style.textContent = `
    .header{fill:${data.meta.style.text};font-weight:800;font-size:40px;font-family: Inter, sans-serif}
    .lane-title{fill:${data.meta.style.text};font-weight:700;font-size:18px;font-family: Inter, sans-serif}
    .card{fill:${data.meta.style.card};stroke:rgba(255,255,255,0.06);stroke-width:1;rx:12}
    .card-text{fill:${data.meta.style.text};font-size:15px;font-weight:700;font-family: Inter, sans-serif}
    .card-sub{fill:${data.meta.style.muted};font-size:13px;font-weight:400;font-family: Inter, sans-serif}
    .badge{fill:#071127;font-size:12px;font-weight:800;font-family: Inter, sans-serif}
    .connector{stroke:rgba(255,255,255,0.06);stroke-width:2;stroke-dasharray:6 6;fill:none}
  `;
  svg.appendChild(style);

  // Spine
  const spine = el('rect', {x:String(570-14), y:'120', width:'28', height:String(H-200), fill:data.meta.style.spine, rx:'6'});
  svg.appendChild(spine);

  let baseY = 120; // start Y after header

  for (const lane of data.lanes) {
    // Lane title
    svg.appendChild(text(60, baseY, lane.title, 'lane-title'));
    baseY += 20;

    for (const item of lane.items) {
      const y = baseY + item.y; const x = item.x;
      const w = item.w; const h = item.h;
      const accent = accents[item.accent || 0];

      // connector & dot
      const pathD = item.side === 'right'
        ? `M540 ${y} C 660 ${y}, 720 ${y}, 840 ${y}`
        : `M540 ${y} C 420 ${y}, 360 ${y}, 240 ${y}`;
      svg.appendChild(el('path', {d:pathD, class:'connector'}));
      svg.appendChild(el('circle', {cx:'540', cy:String(y), r:'9', fill:accent}));

      // card rect
      svg.appendChild(el('rect', {x:String(x), y:String(y-40), width:String(w), height:String(h), class:'card'}));

      // anchor overlay (first link)
      const a = el('a', {target:'_blank'});
      const primaryLink = (item.links && item.links[0]) ? item.links[0].url : null;
      if (primaryLink) a.setAttribute('href', primaryLink);

      a.appendChild(text(x+20, y-12, item.title, 'card-text'));
      a.appendChild(text(x+20, y+12, item.desc, 'card-sub'));
      svg.appendChild(a);

      // badge
      const badgeW = 110; const badgeH = 28;
      const badgeX = x + w - (badgeW + 20);
      const badgeY = y - 28;
      svg.appendChild(el('rect', {x:String(badgeX), y:String(badgeY), width:String(badgeW), height:String(badgeH), rx:'10', fill:accent}));
      svg.appendChild(text(badgeX+16, badgeY+18, item.badge || '', 'badge'));
    }

    baseY += Math.max(...lane.items.map(i => i.y + i.h)) + 80;
  }

  container.innerHTML = '';
  container.appendChild(svg);
})();