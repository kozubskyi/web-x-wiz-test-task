import { AnimationControls } from 'framer-motion';

interface IAnimationStyles {
  variants: {
    hidden: {};
    visible: {};
  };
  initial: string;
  animate: AnimationControls;
  transition: {};
}

interface IGetAnimationStyles {
  index: number;
  controls: AnimationControls;
}

interface IAnimationService {
  slideRight: ({ index, controls }: IGetAnimationStyles) => IAnimationStyles;
  scaleOut: ({ index, controls }: IGetAnimationStyles) => IAnimationStyles;
}

export const animationService: IAnimationService = {
  slideRight({ index, controls }: IGetAnimationStyles) {
    const animationStyles = {
      variants: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      },
      initial: 'hidden',
      animate: controls,
      transition: { duration: 0.5, delay: 0.5 * index },
    };

    return animationStyles;
  },

  scaleOut({ index, controls }: IGetAnimationStyles) {
    const animationStyles = {
      variants: {
        hidden: { opacity: 0, scale: 0.7 },
        visible: { opacity: 1, scale: 1 },
      },
      initial: 'hidden',
      animate: controls,
      transition: { duration: 0.5, delay: 0.5 * index },
    };

    return animationStyles;
  },
};
