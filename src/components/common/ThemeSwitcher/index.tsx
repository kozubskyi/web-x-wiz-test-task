import { FC } from 'react';
import { useTheme } from 'next-themes';
import { Switcher } from '../Switcher';

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return <Switcher isActive={theme === 'dark'} onClick={handleChangeTheme} />;
};
