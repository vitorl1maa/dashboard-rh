import { Component } from '@angular/core';
import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig,
} from '@ng-icons/core';
import {
  bootstrapPerson,
  bootstrapClipboardCheck,
  bootstrapCloudyFill,
  bootstrapHddRackFill,
  bootstrapExclamationOctagon,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.css',
  viewProviders: [
    provideIcons({
      bootstrapPerson,
      bootstrapClipboardCheck,
      bootstrapCloudyFill,
      bootstrapHddRackFill,
      bootstrapExclamationOctagon,
    }),
  ],
  providers: [
    provideNgIconsConfig({
      size: '2rem',
      color: '#ffff',
    }),
  ],
})
export class StatusBarComponent {}
