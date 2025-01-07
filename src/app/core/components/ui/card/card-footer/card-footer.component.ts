import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { cardFooterVariants, CardFooterVariantTypes } from './card.variants';
@Component({
  selector: '[app-card-footer]',
  templateUrl: './card-footer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooter {
  public readonly size = input<CardFooterVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      cardFooterVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
