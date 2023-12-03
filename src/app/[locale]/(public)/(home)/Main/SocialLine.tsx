import { FC } from 'react';
import { motion } from 'framer-motion';

interface HomeMainSocialLineProps {
  className: string;
}

export const SocialLine: FC<HomeMainSocialLineProps> = ({ className }) => {
  return (
    <motion.span
      variants={{
        hidden: { height: 0 },
        visible: { height: 'calc(50% - 13.5rem)' },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    />
  );
};
