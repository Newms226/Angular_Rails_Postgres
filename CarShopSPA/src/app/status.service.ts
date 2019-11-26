import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private _http: HttpClient) {}

  get_status() {
    return this._http.get('http://localhost:3000/api/status')
  }
}