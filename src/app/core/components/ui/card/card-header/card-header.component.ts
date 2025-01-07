import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import {
  cardHeaderVariants,
  CardHeaderVariantTypes,
} from './card-header.variants';

@Component({
  selector: '[app-card-header]',
  templateUrl: './card-header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeader {
  public readonly size = input<CardHeaderVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      cardHeaderVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
