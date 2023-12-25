import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { RecordingDateComponent } from './components/recording-date/recording-date.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StatusBarComponent,
    RecordingDateComponent,
    TableInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard-rh';

  constructor() {
    console.log(environment.api);
  }
}
