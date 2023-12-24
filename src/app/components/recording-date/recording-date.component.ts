import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-recording-date',
  standalone: true,
  imports: [],
  templateUrl: './recording-date.component.html',
  styleUrl: './recording-date.component.css',
})
export class RecordingDateComponent {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    new Chart('newChart', {
      type: 'bar',
      data: {
        labels: ['12/12', '13/12', '14/12', '15/12', '18/12'],
        datasets: [
          {
            label: 'Marcações',
            data: [12, 13, 14, 15, 16, 17],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 16,
              },
            },
          },
          x: {
            ticks: {
              font: {
                size: 16,
              },
            },
          },
        },
      },
    });
  }
}
