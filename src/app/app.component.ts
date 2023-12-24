import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { RecordingDateComponent } from './components/recording-date/recording-date.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StatusBarComponent,
    RecordingDateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard-rh';
}
