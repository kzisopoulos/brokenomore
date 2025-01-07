import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import {
  cardTitleVariants,
  CardTitleVariantTypes,
} from './card-title.variants';

@Component({
  selector: '[app-card-title]',
  templateUrl: './card-title.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitle {
  public readonly size = input<CardTitleVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      cardTitleVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
