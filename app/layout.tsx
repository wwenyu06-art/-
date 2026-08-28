import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: '王文毓｜UI / UX & Visual Designer',
  description: '王文毓的 UI、UX、数据可视化与品牌视觉设计作品集。',
  openGraph: {
    title: '王文毓｜UI / UX & Visual Designer',
    description: '让复杂系统清晰且有温度。UI、UX、数据可视化与品牌视觉设计作品集。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '王文毓｜UI / UX & Visual Designer',
    description: '让复杂系统清晰且有温度。UI、UX、数据可视化与品牌视觉设计作品集。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
