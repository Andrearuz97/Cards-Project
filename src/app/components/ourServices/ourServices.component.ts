import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ourServices.component.html',
  styleUrls: ['./ourServices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurServicesComponent { }
