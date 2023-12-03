'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useDarkTheme = () => {
  const { theme } = useTheme();

  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true
  );

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return { isDark };
};
