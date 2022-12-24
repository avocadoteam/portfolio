import { clsx } from '@/lib/utils';
import { lightTheme } from '@/ui/theme';
import { intr, mnrp } from '@/ui/theme/fonts';
import React from 'react';
import GlobalNav from './GlobalNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Avocado team</title>
      </head>
      <body className={clsx(mnrp.className, intr.className, lightTheme)}>
        <div>
          <div>
            <GlobalNav />
          </div>

          <div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
