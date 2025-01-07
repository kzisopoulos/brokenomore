import { cva, type VariantProps } from 'class-variance-authority';

export const pageWrapperVariants = cva('', {
  variants: {
    size: {
      default: 'max-w-screen-2xl mx-auto flex',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type PageWrapperVariantTypes = VariantProps<typeof pageWrapperVariants>;
