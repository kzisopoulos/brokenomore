import { cva, type VariantProps } from 'class-variance-authority';

export const cardDescriptionVariants = cva('text-muted-foreground', {
  variants: {
    size: {
      default: 'text-sm',
      compact: 'text-xs',
      spacious: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type CardDescriptionVariantTypes = VariantProps<
  typeof cardDescriptionVariants
>;
