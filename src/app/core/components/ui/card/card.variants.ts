import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm',
  {
    variants: {
      size: {
        default: 'w-fit',
        full: 'w-full',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type CardVariantTypes = VariantProps<typeof cardVariants>;
