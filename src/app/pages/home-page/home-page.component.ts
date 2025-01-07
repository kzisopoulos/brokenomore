import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/core/components/ui/card';
import { PageWrapper } from '@/core/components/ui/page-wrapper';

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [
    CommonModule,
    PageWrapper,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
