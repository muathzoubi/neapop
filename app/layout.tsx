import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'التسجيل - تأمين فايدى',
  description: 'تأمين السيارات الأفضل',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        style={{
          background:
            ' linear-gradient(45deg, #aa0666 0%, rgb(18, 177, 209) 100%)',
          padding: 15,
          margin:0
        }}
      >
        {children}
      </body>
    </html>
  );
}
