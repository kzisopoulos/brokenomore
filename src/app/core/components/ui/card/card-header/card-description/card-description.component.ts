import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import {
  cardDescriptionVariants,
  CardDescriptionVariantTypes,
} from './card-description.variants';

@Component({
  selector: '[app-card-description]',
  templateUrl: './card-description.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDescription {
  public readonly size = input<CardDescriptionVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      cardDescriptionVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
