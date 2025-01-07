import { cva, type VariantProps } from 'class-variance-authority';

export const cardHeaderVariants = cva('flex flex-col space-y-1.5 p-6', {
  variants: {
    size: {
      default: 'space-y-1.5 p-6',
      compact: 'space-y-0.5 p-3',
      spacious: 'space-y-2 p-8',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type CardHeaderVariantTypes = VariantProps<typeof cardHeaderVariants>;
