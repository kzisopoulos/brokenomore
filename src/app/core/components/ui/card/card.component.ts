import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { cardVariants, CardVariantTypes } from './card.variants';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public readonly size = input<CardVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      cardVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
