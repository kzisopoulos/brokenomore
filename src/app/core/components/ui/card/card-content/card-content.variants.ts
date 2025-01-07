import { cva, type VariantProps } from 'class-variance-authority';

export const cardContentVariants = cva('', {
  variants: {
    size: {
      default: 'p-6 pt-0',
      compact: 'p-3 pt-0',
      spacious: 'p-8 pt-0',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type CardContentVariantTypes = VariantProps<typeof cardContentVariants>;
