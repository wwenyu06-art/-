'use client';

import { useEffect, useState } from 'react';

export default function FloatingHeader() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsFloating(window.scrollY >= window.innerHeight * 0.86);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);
    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  return (
    <header className={`site-header shell${isFloating ? ' is-floating' : ''}`}>
      <a className="wordmark" href="#home" aria-label="王文毓作品集首页">W<span>.</span>YU</a>
      <nav aria-label="主导航">
        <a href="#work">作品</a>
        <a href="#about">关于</a>
        <a href="#contact">联系</a>
      </nav>
      <a className="contact-pill" href="mailto:18818996367@163.com"><i aria-hidden="true" />联系合作</a>
    </header>
  );
}
