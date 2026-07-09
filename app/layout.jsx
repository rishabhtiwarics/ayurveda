import './globals.css';

export const metadata = {
  title: 'AyurVeda | Pure Herbal Wellness',
  description: 'Pure Ashwagandha wellness capsules hero section.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
