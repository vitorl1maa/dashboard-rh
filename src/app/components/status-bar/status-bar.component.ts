import { Component, NgModule, OnInit } from '@angular/core';
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
import { StatusService } from '../../services/status.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule], // Adicione o HttpClientModule aos imports do seu módulo
})
export class StatusBarModule implements OnInit {
  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusRequest();
  }
  statusRequest() {
    this.statusService.getStatus().subscribe((data) => {});
  }
}
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
