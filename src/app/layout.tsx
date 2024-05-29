import { GeistSans } from 'geist/font/sans';

import '~/styles/globals.css';
import { orbitron } from '~/data/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className={`${orbitron.variable} ${GeistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
