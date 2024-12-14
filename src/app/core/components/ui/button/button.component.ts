import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { buttonVariants, ButtonVariantTypes } from './button.variants';
import { cn } from '@/core/lib/utils';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  public readonly size = input<ButtonVariantTypes['size']>('default');
  public readonly variant = input<ButtonVariantTypes['variant']>('default');

  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      buttonVariants({
        size: this.size(),
        variant: this.variant(),
      }),
      this.class(),
    );
  }
}
