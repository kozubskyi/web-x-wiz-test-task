'use client';
import { ThemeProvider } from 'next-themes';

export const ReactThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider disableTransitionOnChange={true}>{children}</ThemeProvider>
  );
};
