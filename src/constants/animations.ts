import { Variants } from 'framer-motion';

// Entrance Animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

export const slideInFromRight: Variants = {
  hidden: { x: 200, opacity: 0, scale: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 2.5, type: 'spring' },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2.5, type: 'spring' },
  },
};

export const buttonLeft: Variants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 2, type: 'spring' } },
};

export const scaleIn: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

export const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const slideDown: Variants = {
  hidden: { y: -300, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

// Child Animations
const slideVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const slideUp2: Variants = {
  ...slideVariants,
  hidden: { ...slideVariants.hidden, y: 200 },
};

export const staggerUp: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
export const staggerUp2: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const slideDown2: Variants = {
  ...slideVariants,
  hidden: { ...slideVariants.hidden, y: -200 },
};

export const staggerDown: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// Pop-up Animation
export const popUp: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      type: 'spring',
    },
  },
};

export const staggerPop: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// Interaction Animations

export const hoverClick: Variants = {
  hover: { y: -20 },
  press: { scale: 0.5 },
};
