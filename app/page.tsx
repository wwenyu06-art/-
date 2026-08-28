import DataVizShowcase from './components/DataVizShowcase';
import BrandShowcase from './components/BrandShowcase';
import FloatingHeader from './components/FloatingHeader';
import SatelliteDriftWall from './components/SatelliteDriftWall';
import Silk from './components/Silk';
import TextLoop from './components/TextLoop';

const categories = [
  ['01', '移动端 APP', 'Mobile product'],
  ['02', 'Web 端网页', 'Web experience'],
  ['03', '数据可视化大屏', 'Data visualization'],
  ['04', 'AIGC 项目', 'AI workflow'],
  ['05', '品牌平面视觉', 'Brand identity'],
];

const capabilities = [
  {
    index: '01',
    title: '复杂业务梳理',
    en: 'PRODUCT THINKING',
    copy: '从用户与业务目标出发，完成需求拆解、信息架构与关键链路设计，让复杂系统更易理解、更高效。',
    metric: '20+',
    unit: '政企大客户项目',
  },
  {
    index: '02',
    title: '全链路设计落地',
    en: 'END-TO-END DESIGN',
    copy: '覆盖研究、交互、视觉、规范、开发对接与迭代走查，把设计方案稳定推进到真实业务现场。',
    metric: '9+',
    unit: '年跨行业经验',
  },
  {
    index: '03',
    title: '系统化视觉能力',
    en: 'DESIGN SYSTEM',
    copy: '兼顾移动端、Web、数据可视化大屏与品牌视觉，构建统一、可扩展且具有行业识别度的设计语言。',
    metric: '300+',
    unit: '通用组件沉淀',
  },
  {
    index: '04',
    title: 'AI 工作流提效',
    en: 'AI-AUGMENTED',
    copy: '结合 ComfyUI、ControlNet、Stitch 与 Codex，将 AIGC 融入素材探索、界面转译与设计交付。',
    metric: '40%',
    unit: '同类项目工作量缩减',
  },
];

function SatelliteVisual({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  const isSecondary = variant === 'secondary';
  return (
    <div className="satellite-ui" aria-label={isSecondary ? '卫星测运中心任务监控界面示意图' : '卫星测运中心轨道监控界面示意图'}>
      <div className="mock-topbar">
        <b>{isSecondary ? 'PAYLOAD / MISSION CONTROL' : 'STARLINK / ORBITAL COMMAND'}</b>
        <span>UTC 14:27:09</span>
        <i>LIVE</i>
      </div>
      <div className="mock-body">
        <aside className="mock-sidebar">
          <strong>W</strong>
          {Array.from({ length: 6 }).map((_, i) => <span key={i} className={i === 1 ? 'active' : ''} />)}
        </aside>
        <div className="space-map">
          <div className="earth"><i /><b /></div>
          <div className="orbit orbit-a"><span /></div>
          <div className="orbit orbit-b"><span /></div>
          <small className="map-label label-a">SAT-042 · NORMAL</small>
          <small className="map-label label-b">GROUND / HONG KONG</small>
          <div className="space-stats">
            <span>ACTIVE SATELLITES <b>28</b></span>
            <span>GROUND STATIONS <b>06</b></span>
          </div>
        </div>
        <aside className="data-rail">
          <div><span>{isSecondary ? 'PAYLOAD ALTITUDE' : 'ORBIT HEIGHT'}</span><strong>{isSecondary ? '762.1' : '568.4'}</strong><small>KM</small></div>
          <div><span>{isSecondary ? 'MISSION HEALTH' : 'SIGNAL QUALITY'}</span><strong>{isSecondary ? '96.8' : '98.6'}</strong><small>%</small></div>
          <div className="mini-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="system-state"><i /> ALL SYSTEMS NOMINAL</div>
        </aside>
      </div>
    </div>
  );
}

function InsuranceVisual() {
  return (
    <div className="insurance-ui insurance-real" aria-label="太平洋保险智慧云平台真实移动端案例图">
      <figure className="insurance-case insurance-case-back"><div className="app-device"><img src="/insurance-data.jpg" alt="太平洋保险数据报表页面" /></div></figure>
      <figure className="insurance-case insurance-case-front"><div className="app-device"><img src="/insurance-home.png" alt="太平洋保险业务驾驶舱首页" /></div></figure>
    </div>
  );
}

function BrandVisual() {
  return (
    <div className="brand-ui" aria-label="Starwiz 品牌视觉系统示意图">
      <div className="brand-panel brand-logo"><span>STAR</span><strong>WIZ</strong><small>THE VIEW FROM ABOVE</small></div>
      <div className="brand-panel brand-sphere"><i /><b>01</b></div>
      <div className="brand-panel brand-type"><span>Aa</span><small>INTER · TYPE SYSTEM</small></div>
      <div className="brand-panel brand-card"><b>W</b><span>STARWIZ<br />EARTH INTELLIGENCE</span></div>
    </div>
  );
}

function MiniProgramVisual() {
  const screens = [
    { label: '申请手表引导页', image: '/mini-program-01-guide.png' },
    { label: '输入兑换码', image: '/mini-program-02-code.png' },
    { label: '提交订单', image: '/mini-program-03-order.png' },
    { label: '物流跟踪', image: '/mini-program-04-delivery.png' },
  ];

  return (
    <div className="mini-program-visual" aria-label="移动端小程序多界面项目占位展示">
      <div className="mini-program-grid" aria-hidden="true" />
      <div className="mini-program-label"><span>MINI PROGRAM / UI FLOW</span><b>04 SCREENS</b></div>
      <div className="mini-program-devices">
        {screens.map((screen, index) => (
          <figure className={`mini-device mini-device-${index + 1}`} key={screen.label}>
            <img src={screen.image} alt={`招行新户礼包小程序：${screen.label}`} />
          </figure>
        ))}
      </div>
      <div className="mini-program-tip"><i /> Replaceable UI assets / 真实案例待替换</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-backdrop" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/hero-motion-bg.mp4" type="video/mp4" />
          </video>
          <img className="hero-reference-art" src="/hero-portfolio-bg.jpg" alt="" />
          <img className="hero-character-art" src="/hero-portfolio-bg.jpg" alt="" />
          <div className="scan-lines" />
        </div>

        <FloatingHeader />

        <div className="hero-content shell">
          <div className="hero-type-block">
            <h1 aria-label="Portfolio">Po<span className="portfolio-spread">r</span><span className="portfolio-spread">t</span>folio</h1>
            <div className="hero-title-decor" aria-hidden="true">
              <span className="title-hash">#</span>
              <span className="title-arrow arrow-top">↗</span>
              <span className="title-arrow arrow-bottom">↗</span>
              <div className="title-glass-card glass-card-one"><b>W</b><span>UI / UX<br />VISUAL</span><small>01 / 06</small></div>
              <div className="title-glass-card glass-card-two"><b>20+</b><span>SELECTED<br />PROJECTS</span><small>2026</small></div>
            </div>
            <div className="hero-type-caption">
              <p>让复杂系统<span>清晰</span>且有温度。<br />以业务落地为导向，连接产品、体验与视觉表达。</p>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-identity">
              <small>UI / UX / VISUAL DESIGNER</small>
              <div className="hero-contact-mini" aria-label="首屏联系方式">
                <a href="tel:18818996367" aria-label="电话 18818996367">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.8 8.1 3c.6-.2 1.2.1 1.5.7l1.3 3.2c.2.5.1 1.1-.3 1.5L9.2 9.8a13.4 13.4 0 0 0 5 5l1.4-1.4c.4-.4 1-.5 1.5-.3l3.2 1.3c.6.3.9.9.7 1.5l-.8 2.9c-.2.7-.9 1.2-1.7 1.1C10.3 19.2 4.8 13.7 4.1 5.5c-.1-.8.4-1.5 1.1-1.7Z" /></svg>
                  <span>18818996367</span>
                </a>
                <a href="mailto:18818996367@163.com" aria-label="邮箱 18818996367@163.com">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4.5 7 7.5 5.7L19.5 7" /></svg>
                  <span>18818996367@163.com</span>
                </a>
              </div>
            </div>
            <a className="view-work" href="#work"><span>浏览作品</span><b aria-hidden="true">↘</b></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">© 2026 / PORTFOLIO</div>
      </section>

      <section className="advantages shell" id="about">
        <div className="section-kicker"><span>WHY WORK WITH ME</span><span>能力与优势</span></div>
        <div className="advantage-intro">
          <h2>设计不止是界面，<br />更是推动问题解决的方式。</h2>
          <p>9 年以上行业经验，具备从需求拆解、体验设计、视觉体系到开发落地的全链路设计与交付能力，也能以品牌视角建立更一致的产品表达。</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.index} tabIndex={0}>
              <div className="cap-top"><span>{item.index}</span><small>{item.en}</small></div>
              <h3>{item.title}</h3><p>{item.copy}</p>
              <div className="metric"><strong>{item.metric}</strong><span>{item.unit}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="design-loop" aria-label="设计能力关键词动效">
        <TextLoop />
      </section>

      <section className="categories shell" id="work">
        <div className="section-kicker"><span>SELECTED DISCIPLINES</span><span>五类设计实践</span></div>
        <div className="category-list">
          {categories.map(([index, title, en]) => (
            <a className="category-row" href="#projects" key={index}><span>{index}</span><strong>{title}</strong><small>{en}</small><b aria-hidden="true">↗</b></a>
          ))}
        </div>
        <div className="categories-aurora" aria-hidden="true" />
      </section>

      <section className="projects" id="projects">
        <div className="shell">
          <div className="section-heading">
            <div className="section-kicker"><span>FEATURED WORK</span><span>精选项目 / 2021—2026</span></div>
            <h2>从关键问题出发，<br />让设计产生可见的业务价值。</h2>
          </div>

          <article className="project-card project-card-main theme-satellite">
            <div className="project-info">
              <div><span>01 / DATA VISUALIZATION</span><span>2025</span></div>
              <h3>香港航天科技<br />卫星测运控中心</h3>
              <p>面向运维管理与展厅汇报双重场景，构建深色深空科技风的数据大屏及 Dashboard 系统。</p>
              <ul><li>数据可视化大屏</li><li>Dashboard</li><li>Design System</li></ul>
            </div>
            <div className="project-visual visual-satellite">
              <Silk className="satellite-silk" speed={1.02} scale={.38} color="#173d65" noiseIntensity={1.05} rotation={-.08} />
              <SatelliteDriftWall />
            </div>
          </article>

          <DataVizShowcase />

          <BrandShowcase />

          <div className="project-grid">
            <article className="project-card theme-insurance">
              <div className="project-info compact">
                <div><span>02 / WEB + MOBILE</span><span>2023</span></div>
                <h3>太平洋保险<br />一带一路智慧云平台</h3>
                <p>遥感卫星赋能太平洋保险，重构遥感保险业务决策链路与风险表达，连接 Web 管理平台和移动端现场业务。</p>
                <ul><li>UX Strategy</li><li>Mobile APP</li><li>Web</li></ul>
              </div>
              <div className="project-visual visual-insurance"><InsuranceVisual /></div>
            </article>
            <article className="project-card theme-starwiz">
              <div className="project-info compact">
                <div><span>03 / BRAND IDENTITY</span><span>2022</span></div>
                <h3>Starwiz<br />品牌VI视觉体系升级</h3>
                <p>从品牌Logo迭代、VI体系搭建到线上官网与线下展会视觉落地，建立一致且可延展的品牌识别系统。</p>
                <ul><li>Branding</li><li>Web Design</li><li>Exhibition</li></ul>
              </div>
              <div className="project-visual visual-brand"><BrandVisual /></div>
            </article>
          </div>

          <article className="project-card mini-program-project theme-mini-program">
            <div className="project-info mini-program-info">
              <div><span>04 / MINI PROGRAM</span><span>COMING SOON</span></div>
              <h3>招商银行新户专属礼包活动<br />移动端小程序</h3>
              <p>从外部引流海报到小程序内下单、账单、开票全流程整套视觉方案搭建，打通用户「曝光 - 浏览 - 提交申领 - 订单管理」转化闭环，支撑招行新客拉新业务落地，保障多方（银行、电信、硬件厂商）业务流程可视化呈现。</p>
              <ul><li>Mini Program</li><li>UI Design</li><li>Interaction</li></ul>
            </div>
            <div className="project-visual"><MiniProgramVisual /></div>
          </article>
          <p className="placeholder-note">当前项目画面为首版视觉占位，后续可直接替换为你的真实作品截图与案例详情。</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner">
          <div className="section-kicker"><span>LET’S CREATE SOMETHING USEFUL</span><span>期待联系</span></div>
          <div className="contact-main">
            <h2>让我们一起，<br />把下一件事<em>做好。</em></h2>
            <div className="contact-links" aria-label="联系方式">
              <a className="contact-curved-link" href="mailto:18818996367@163.com"><span>邮箱</span><strong>18818996367@163.com</strong><b aria-hidden="true">↗</b></a>
              <a className="contact-curved-link" href="tel:18818996367"><span>电话</span><strong>188 1899 6367</strong><b aria-hidden="true">↗</b></a>
            </div>
          </div>
          <footer>
            <span>王文毓 / UI · UX · VISUAL DESIGNER</span>
            <a href="tel:18818996367">TEL. 188 1899 6367</a>
            <a href="#home">BACK TO TOP ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
