import './globals.css';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';

export const metadata = {
  title: 'AyurVeda | Pure Herbal Wellness',
  description: 'Pure Ashwagandha wellness capsules hero section.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning><ScrollProgressIndicator />{children}</body>
    </html>
  );
}


