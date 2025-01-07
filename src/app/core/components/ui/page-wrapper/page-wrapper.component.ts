import { cn } from '@/core/lib/utils';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import {
  pageWrapperVariants,
  PageWrapperVariantTypes,
} from './page-wrapper.variants';

@Component({
  selector: '[app-page-wrapper]',
  templateUrl: './page-wrapper.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapper {
  public readonly size = input<PageWrapperVariantTypes['size']>('default');
  public readonly class = input<string>('');

  @HostBinding('class')
  get hostClasses() {
    return cn(
      pageWrapperVariants({
        size: this.size(),
      }),
      this.class(),
    );
  }
}
