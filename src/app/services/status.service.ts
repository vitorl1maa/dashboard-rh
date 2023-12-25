import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Status } from '../models/status.model';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getStatus() {
    return this.httpClient.get<Status>(this.url);
  }
}
