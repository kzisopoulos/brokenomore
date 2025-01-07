import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import {
  cardContentVariants,
  CardContentVariantTypes,
} from './card-content.variants';

@Component({
  selector: '[app-card-content]',
  templateUrl: './card-content.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContent {
  public readonly size = input<CardContentVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      cardContentVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
