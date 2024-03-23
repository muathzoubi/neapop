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
      <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KJZ6QRBG60">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(darguments);}
  gtag('js', new Date());

  gtag('config', 'G-KJZ6QRBG60');
</script>
      </head>
      <body
        style={{
         
          padding: 15,
          margin:0
        }}
      >
        {children}
      </body>
    </html>
  );
}
