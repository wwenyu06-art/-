'use client';

import { useState } from 'react';

const cases = [
  { id: 'packaging', index: '01', label: '产品包装 / 海报', title: 'Packaging & Poster', image: '/thieye-packaging.png', copy: '以黑、橙、金属灰建立专业而富有速度感的产品识别，将包装、海报与促销物料统一到 ThiEYE 的户外影像语境中。' },
  { id: 'brochure', index: '02', label: '产品宣传册', title: 'Product Editorial', image: '/thieye-brochure.png', copy: '以产品功能、使用场景与影像故事为线索，构建便于阅读、便于销售转化的产品内容体系。' },
  { id: 'website', index: '03', label: '品牌网站', title: 'Product Shaped Design', image: '/thieye-web-full.jpg', copy: '官网以真实运动场景为主叙事，连接产品参数、体验卖点与多设备产品矩阵。' },
  { id: 'devices', index: '04', label: '多设备展示', title: 'Multi-device Display', image: '/thieye-devices-full.jpg', copy: '为网页、电脑、移动端与车载场景建立统一的视觉表达和设备端体验。' },
  { id: 'exhibition', index: '05', label: '展会现场', title: 'Exhibition Experience', image: '/thieye-exhibition-full.jpg', copy: '将品牌主视觉延展到空间导视、产品陈列与现场互动，让线下体验更具识别度。' },
];

export default function BrandShowcase() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section className="brand-showcase" aria-label="ThiEYE 品牌平面视觉案例展示">
      <div className="brand-showcase-head">
        <div>
          <span>THIEYE / BRAND GRAPHIC CASE STUDY</span>
          <h3>ThiEYE<span className="brand-title-gap" aria-hidden="true" />品牌视觉落地</h3>
        </div>
        <p>ThiEYE 专注于户外运动相机研发与全球运营，以时尚、便携、易用的产品体验服务每一次真实记录。</p>
      </div>
      <div className="thieye-gallery">
        <div className="thieye-nav" role="tablist" aria-label="ThiEYE 品牌案例类别">
          {cases.map((item, index) => <button key={item.id} role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><span>{item.index}</span><b>{item.label}</b><i>↗</i></button>)}
        </div>
        <div className="thieye-display">
          <div className="thieye-display-meta"><span>{current.index} / {current.title.toUpperCase()}</span><small>THIEYE GRAPHIC SYSTEM / 2021—2026</small></div>
          <figure className="thieye-frame" key={current.id}><img src={current.image} alt={`ThiEYE ${current.label}案例`} /></figure>
          <div className="thieye-caption"><strong>{current.title}</strong><p>{current.copy}</p><span>VIEW CASE <b>↗</b></span></div>
        </div>
      </div>
      <div className="thieye-thumb-list" aria-label="ThiEYE 案例缩略预览">
        {cases.map((item, index) => <button key={item.id} className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-label={`查看${item.label}`}><img src={item.image} alt="" /><span>{item.index}</span></button>)}
      </div>
    </section>
  );
}
