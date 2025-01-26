import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Индивидуалочка - снять в Улан-Удэ',
  openGraph: {},
  keywords: [
    'проститутки улан удэ',
    'Проститутки улан удэ',
    'Секс Улан Удэ',
    'Проститутки Улан Удэ',
    'Секс улан удэ',
    'Снять проститутку в Татаурово на выезд',
    'Снять проститутку в Татаурово',
    'Снять проститутку в улан удэ',
    'Снять проститутку в Улан Удэ',
    'Проститутки Татаурово',
    'Индивидуалочка Татаурово',
    'Индивидуалочка в улан удэ',
  ],
  description:
    'Возглавьте свой сексуальный отряд, выбрав одну из лучших проституток Улан-Удэ, которые заслужили место в ТОП 100 и провести качественный интим досуг можно ТОЛЬКО У НАС.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="w-full max-w-[1400px] m-auto">{children}</div>
      </body>
    </html>
  );
}
