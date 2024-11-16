import { ReactNode } from 'react';
import './globals.css';
import Provider from '@components/common/Provider';

export const metadata = {
  title: 'Netflix-Onedwo',
  description: 'Netflix Clone Coding using Next.js by Onedwo-Punch',
  keywords: 'Next.js, web development, SEO, Netflix',
  robots: 'index, follow',
  author: 'Onedwo-Punch',
  openGraph: {
    title: 'Netflix-Onedwo',
    description: 'Netflix Clone Coding using Next.js by Onedwo-Punch',
    url: 'https://next-netflix-20th-onedwo.vercel.app',
    type: 'website',
    site_name: 'Netflix Clone',
    image: 'public/icons/logo.svg',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
