import './globals.css';

export const metadata = {
  title: 'Sarthak Bohora — UI/UX Frontend Developer',
  description:
    'Sarthak Bohora — Frontend & UI/UX developer crafting immersive digital interfaces from Kathmandu, Nepal.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Cormorant+Garamond:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="loading">{children}</body>
    </html>
  );
}
