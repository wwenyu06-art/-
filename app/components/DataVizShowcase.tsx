'use client';

import { useState } from 'react';

const views = [
  { key: 'hk-application', label: '01 / 港航科应用中心', title: '港航科应用中心数据平台', image: '/viz-01-hk-application.jpg' },
  { key: 'satellite-control', label: '02 / 卫星测运控', title: '中科星睿测运控系统', image: '/viz-02-satellite-control.jpg' },
  { key: 'intelligent-manufacturing', label: '03 / 渊联智能制造管理平台', title: '渊联智能制造管理平台', image: '/viz-03-intelligent-manufacturing.jpg' },
  { key: 'zilon', label: '04 / 紫龙药业工艺产线大屏', title: '紫龙药业工艺产线', image: '/viz-04-zilong-production.jpg' },
  { key: 'training', label: '05 / 接待培训中心可视化', title: '接待培训中心', image: '/viz-05-training-center.jpg' },
];

function LiveView() {
  return (
    <div className="live-viz" aria-label="实时数据脉冲示意图">
      <div className="live-viz-grid" />
      <div className="live-viz-header"><span>MISSION PULSE / 07</span><b><i /> LIVE STREAM</b></div>
      <div className="live-viz-main">
        <div className="live-orbit"><span /><i /><b /></div>
        <div className="live-readout"><small>ORBIT HEIGHT</small><strong>568.4</strong><em>KM</em><small>SIGNAL QUALITY</small><strong>98.6</strong><em>%</em></div>
      </div>
      <div className="live-viz-footer"><span>ACTIVE SATELLITES <b>28</b></span><span>GROUND STATIONS <b>06</b></span><span>ALERTS <b>02</b></span></div>
    </div>
  );
}

export default function DataVizShowcase() {
  const [active, setActive] = useState(0);
  const view = views[active];

  return (
    <section className="viz-showcase" aria-label="数据可视化大屏案例切换展示">
      <div className="viz-showcase-head">
        <div><span>DATA VISUALIZATION / SELECTED SCREENS</span><h3>遥感卫星/智能制造/智慧环保/...数据可视化大屏</h3></div>
        <span className="viz-showcase-count">0{active + 1} / 05</span>
      </div>
      <div className="viz-showcase-tabs" role="tablist" aria-label="案例视图">
        {views.map((item, index) => <button key={item.key} className={active === index ? 'active' : ''} onClick={() => setActive(index)} role="tab" aria-selected={active === index}>{item.label}</button>)}
      </div>
      <div className="viz-showcase-stage">
        <div className="viz-exhibition-room">
          <div className="viz-showcase-canvas" key={view.key}>
            {view.image ? <img src={view.image} alt={`${view.title} 展厅大屏投放效果`} /> : <LiveView />}
            <div className="viz-scan" aria-hidden="true" />
            <span className="viz-screen-corner top-left" aria-hidden="true" />
            <span className="viz-screen-corner top-right" aria-hidden="true" />
            <span className="viz-screen-corner bottom-left" aria-hidden="true" />
            <span className="viz-screen-corner bottom-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
