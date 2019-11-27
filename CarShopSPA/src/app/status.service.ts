import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Status {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  public apiRoot = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {}

  get_status() {
    return this._http.get<Status>(`${this.apiRoot}/status`);
  }
}
