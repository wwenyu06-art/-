'use client';

import { useState, type CSSProperties, type PointerEvent } from 'react';

type CaseImage = { label: string; image: string; position: string };

const caseProjects: Array<{ id: 'light' | 'dark'; title: string; caption: string; images: CaseImage[] }> = [
  {
    id: 'light',
    title: '卫星数据处理平台',
    caption: 'WHITE INTERFACE / 04 SCREENS',
    images: [
      { label: '总览驾驶舱', image: '/satellite-white.jpg', position: '50% 8%' },
      { label: '飞机识别标注', image: '/satellite-white-01.jpg', position: '50% 50%' },
      { label: '专题流程绘制', image: '/satellite-white-02.jpg', position: '50% 50%' },
      { label: '数据分析总览', image: '/satellite-white-03.jpg', position: '50% 50%' },
    ],
  },
  {
    id: 'dark',
    title: '卫星测运控制平台',
    caption: 'DARK INTERFACE / 04 SCREENS',
    images: [
      { label: '测运控总览', image: '/satellite-dark.jpg', position: '50% 12%' },
      { label: '图像管理与查看', image: '/satellite-dark-02.png', position: '50% 50%' },
      { label: '星地资源管理', image: '/satellite-dark-03.png', position: '50% 50%' },
      { label: '轨道控制中心', image: '/satellite-dark-04.png', position: '50% 50%' },
    ],
  },
];

export default function SatelliteDriftWall() {
  const [activeId, setActiveId] = useState<'light' | 'dark'>('light');
  const active = caseProjects.find((project) => project.id === activeId) ?? caseProjects[0];

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty('--wall-x', x.toFixed(3));
    event.currentTarget.style.setProperty('--wall-y', y.toFixed(3));
  };

  const resetParallax = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--wall-x', '0');
    event.currentTarget.style.setProperty('--wall-y', '0');
  };

  return (
    <div className="satellite-drift-wall" onPointerMove={handlePointerMove} onPointerLeave={resetParallax}>
      <div className="satellite-wall-head">
        <div className="satellite-wall-tabs" role="tablist" aria-label="卫星项目案例">
          {caseProjects.map((project, index) => (
            <button key={project.id} className={project.id === activeId ? 'active' : ''} onClick={() => setActiveId(project.id)} role="tab" aria-selected={project.id === activeId}>
              <span>0{index + 1}</span>{project.title}
            </button>
          ))}
        </div>
        <small>{active.caption}</small>
      </div>

      <div className="satellite-drift-stage">
        <div className="satellite-drift-plane" key={active.id}>
          {active.images.map((item, index) => (
            <figure className={`satellite-drift-tile tile-${index + 1}`} key={item.label} style={{ '--tile-order': index } as CSSProperties}>
              <img src={item.image} alt={`${active.title}：${item.label}`} style={{ objectPosition: item.position }} />
              <figcaption><span>0{index + 1}</span><b>{item.label}</b></figcaption>
            </figure>
          ))}
        </div>
        <div className="satellite-drift-note"><i /> HOVER TO EXPLORE · {String(active.images.length).padStart(2, '0')} SCREENS</div>
      </div>
    </div>
  );
}
