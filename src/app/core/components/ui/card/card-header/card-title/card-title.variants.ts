import { cva, type VariantProps } from 'class-variance-authority';

export const cardTitleVariants = cva(
  'font-semibold leading-none tracking-tight',
  {
    variants: {
      size: {
        default: 'text-2xl',
        small: 'text-xl',
        large: 'text-3xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type CardTitleVariantTypes = VariantProps<typeof cardTitleVariants>;
